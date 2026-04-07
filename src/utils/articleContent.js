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
`
};
