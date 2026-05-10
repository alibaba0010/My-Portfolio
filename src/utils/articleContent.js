export const articleContent = {
  "74381861-18ae-4f28-912b-df4d4ab2734a": `
# Mastering Data Relationships: How We Handle Joins in Our Architecture

Hey team! 

If you've spent any time working around the data access layer in our Restaurant Management project, you’ll likely notice something interesting: you rarely see classical \`INNER JOIN\` or \`LEFT JOIN\` SQL commands scattered throughout our Go repositories. 

Instead of writing verbose and visually noisy raw SQL joins, our architecture leverages the associative power of **[Bun ORM](https://bun.uptrace.dev/)**—specifically, its eloquent \`.Relation()\` method. 

In this piece, I want to take you under the hood to explore how we handle relational data fetching, why we chose this pattern, and how you can seamlessly apply it when building new features.

---

## 🏗️ The Abstraction: Why We Use \`.Relation()\`

In traditional raw SQL or heavily query-builder-focused setups, fetching an Order along with its associated items, customer profile, and restaurant details would involve complex multi-line \`JOIN\` statements. You'd also have to map overlapping column names (like \`id\` or \`created_at\`) manually to nested structs.

Bun ORM simplifies this by utilizing Go structs with relational tags (\`bun:"rel:has-many"\`, \`bun:"rel:belongs-to"\`, etc.). Once the schema relationships are mapped at the model level, we instruct the database to "Join" the relevant data effortlessly using \`.Relation()\`. 

Let's look at how this plays out in our actual repositories.

---

## 🔍 Real-World Example 1: The \`Order\` Aggregator

Think about what makes up an "Order" in our system. It's not just a standalone record; it's a connective hub. It links a **User** (the buyer), a **Restaurant** (the vendor), and a list of **OrderItems** (the food).

If you look at our \`order.repository.go\`, specifically the \`FindByID\` method, you'll see this beauty:

\`\`\`go
func (r *OrderRepository) FindByID(ctx context.Context, id string) (*models.Order, error) {
	order := new(models.Order)
	err := r.db.NewSelect().
		Model(order).
		Relation("OrderItems"). // JOIN order_items table
		Relation("Restaurant"). // JOIN restaurants table
		Relation("User").       // JOIN users table
		Where("o.id = ?", id).
		Scan(ctx)
    // ...error handling omitted...
	return order, nil
}
\`\`\`

### What's happening here?
1. **\`Model(order)\`**: Sets the base table (\`orders\`, aliased as \`o\`).
2. **\`Relation("...")\`**: Instructs Bun to look at the struct tags on the \`Order\` model and automatically generate the necessary \`JOIN\` clauses or secondary sub-queries depending on relation types.
3. Automatically maps all the returned joined columns into the nested pointer fields (like \`order.Restaurant.Name\` or \`order.User.Email\`).

### Visualizing the Order Data Flow
Here is a high-level Entity-Relationship view of how Bun strings these together behind the scenes:

\`\`\`mermaid
erDiagram
    ORDER ||--o{ ORDER_ITEM : "Has Many (Relation: OrderItems)"
    ORDER }o--|| RESTAURANT : "Belongs To (Relation: Restaurant)"
    ORDER }o--|| USER : "Belongs To (Relation: User)"
    
    ORDER {
        uuid id
        uuid user_id FK
        uuid restaurant_id FK
        string status
    }
    
    ORDER_ITEM {
        uuid id
        uuid order_id FK
        uuid menu_id FK
        int quantity
    }
\`\`\`

---

## 🏪 Real-World Example 2: Eager-Loading Restaurant Addresses

Let's look at another common use case in \`restaurant.repository.go\`. When we load a Restaurant profile, we almost always need to know its physical location. 

Instead of doing an N+1 query (fetching the restaurant, then doing a separate query for its addresses), we eager-load them securely in a single database trip:

\`\`\`go
func (r *RestaurantRepository) FindByID(ctx context.Context, id string) (*models.Restaurant, error) {
	restaurant := new(models.Restaurant)
	err := r.db.NewSelect().
		Model(restaurant).
		Where("restaurant.id = ?", id).
		Relation("Addresses"). // Eager loads the associated Address records
		Scan(ctx)
    // ...
	return restaurant, nil
}
\`\`\`

Under the hood, Bun checks the \`Restaurant\` struct, realizes \`Addresses\` is a \`has-many\` relationship, and seamlessly executes the optimal joined extraction.

---

## ⚙️ How Bun Handles These Joins Under the Hood

You might wonder, *"Is \`.Relation()\` just blindly running standard LEFT JOINs?"* 

Not exclusively! Bun is remarkably smart about **Dialect Optimization**. Depending on the type of relationship defined in your struct:

![Bun Relation Flow](/images/articles/bun_relation_flow.svg)

- **\`belongs-to\` / \`has-one\`**: Bun will typically compile these into standard inline \`LEFT JOIN\` or \`INNER JOIN\` statements, allowing Postgres to optimize them against foreign key indexes.
- **\`has-many\` / \`m2m\`**: If joining a massive \`has-many\` array inline would create an explosive Cartesian product (returning massive duplicate row data over the network), Bun often elegantly splits it. It retrieves the base rows, and then executes an immediate secondary query stringing \`WHERE parent_id IN (...)\` to hydrate the slice.

---

## 💡 Best Practices for Our Team

As you implement new queries, keep these golden rules in mind:

1. **Beware the N+1 Problem**: Always use \`.Relation()\` if you know you are going to need associated data in your API payload. Do not fetch a user, loop through something, and call \`FindAddressByUserID\` in a \`for\` loop. 
2. **Be Intentional**: Only load what you need. \`FindByIDWithAddresses\` is great for profile pages, but if you are just checking if a user exists for an auth verification, stick to the lightweight query *without* \`.Relation()\`. You don't want to drag Megabytes of data across the network if you are just validating a password hash!
3. **Use Explicit Table Aliases**: When dealing with \`.Where()\`, use the table alias to avoid column ambiguity natively (e.g., \`Where("o.id = ?", id)\` instead of \`Where("id = ?", id)\`).

## Wrapping Up

By standardizing around Bun's declarative \`.Relation()\` loading rather than hardcoding SQL Joins, our repository layer remains heavily decoupled, extremely readable, and deeply type-safe. 

Keep writing great code, and if you ever get stuck pulling complex multi-table graphs out of Postgres, remember that \`.Relation()\` is your best friend!

— *Your Friendly Neighborhood Senior Writer*
`,
  "83f81861-18ae-4f28-912b-df4d4ab2734a": `
# From REST to State Changes: Decoding Solana Transactions

If you’re coming from a traditional backend background like I did, you're probably intimately familiar with the classic API lifecycle: your client sends an HTTP request, the server processes it against a database, and you get a JSON response back. 

It’s comfortable. It’s stateless. It’s what we know.

But over the past few days of diving into Solana development, I quickly realized that taking this Web2 mental model into Web3 is a recipe for confusion. On Solana, you aren't "calling an API." You are crafting an **atomic state change** on a global state machine.

Here is a breakdown of what I learned from building, sending, and deliberately breaking Solana transactions.

---

## 🧩 The Anatomy of a Transaction

In Web2, a payload is just JSON. In Solana, a transaction is a highly structured, cryptographically signed envelope. The core components that really clicked for me were:

1. **Instructions:** This is the actual "meat" of the transaction. An instruction tells a specific program (like a smart contract) exactly what to do. Crucially, a single transaction can contain *multiple* instructions, and they are guaranteed to either all succeed or all fail together.
2. **Signatures:** You can't just pass a JWT in an \`Authorization\` header. Every transaction must be mathematically signed by the keypairs of the accounts whose data or tokens are being modified. 
3. **Accounts:** Solana requires you to explicitly declare every single piece of state (Account) that your transaction will read from or write to upfront. Imagine having to tell your Postgres database exactly which rows you intend to touch before you run a query!
4. **Recent Blockhash:** This was the biggest surprise. Solana transactions expire!

---

## ⏳ The "Recent Blockhash" Expiration Window

In traditional systems, if a queue gets backed up, your job might sit there for an hour before being processed. 

On Solana, transactions include a **recent blockhash**—a unique identifier of a very recent ledger state. If the network doesn't process your transaction within about 60 to 90 seconds (a 150-block window), the blockhash expires and the transaction is permanently dropped. 

When I first encountered a \`BlockhashNotFound\` error during my devnet testing, it felt like a bug. But I soon realized it’s a brilliant feature: it prevents transactions from floating in limbo forever. If a transaction failed, you *know* it failed quickly, allowing your application to confidently retry without fear of double-spending.

---

## 💥 Breaking Things on Purpose: Failed Transactions

You learn the most when things break. I spent an afternoon specifically crafting invalid transactions to see how the network would reject them. 

One major lesson came from **Compute Budgets**. Solana programs have a strict limit on how much computational power they can consume. When I tried to run an artificially heavy instruction, the network threw a \`ComputeExceeded\` error. 

This made me appreciate Solana's predictable fee structure. Because developers must explicitly declare state and stay within compute limits, the network can parallelize execution—which is exactly how Solana achieves its insane throughput.

---

## 🚀 The Mental Model Shift

The biggest takeaway for me this week wasn't just learning the syntax of \`@solana/web3.js\`. It was the conceptual shift:

*   **Web2:** "Hey server, please update my database row."
*   **Web3:** "Hey network, here is a signed, time-boxed, computationally-capped declaration of how I am modifying these specific cryptographic accounts. Execute it atomically."

If you are a backend developer starting your blockchain journey, my advice is to let go of the request/response crutch early. Embrace the atomic state machine. Build transactions, read the explorer logs, and don't be afraid to break things on devnet.

*Have you experienced a similar paradigm shift moving to Web3? Let me know!*
`
};
