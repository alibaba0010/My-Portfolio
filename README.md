# Portfolio

A comprehensive showcase of full-stack engineering projects, demonstrating expertise in modern web technologies, distributed systems, and production-grade architecture.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Featured Projects](#featured-projects)
- [Technology Stack](#technology-stack)
- [Development](#development)
- [License](#license)

---

## 🎯 Overview

This portfolio showcases seven enterprise-grade applications spanning frontend frameworks, backend architectures, blockchain integration, and AI-driven features. Each project emphasizes scalability, security, and maintainability following software engineering best practices.

**Tech Stack**: React 18+, Next.js 15, Vite, Tailwind CSS, Framer Motion for frontend; Node.js, NestJS, Go 1.24 for backend; MongoDB, PostgreSQL, Redis for data persistence.

---

## 🚀 Featured Projects

### 1. **GourmetHub — Restaurant Management API**

_Production-Grade REST API | Go, PostgreSQL, Redis, Redpanda_

A comprehensive restaurant operations platform delivering end-to-end order management, payment processing, and menu administration. Built with Go 1.24 using gorilla/mux and Bun ORM, this system processes concurrent orders through pessimistic locking to ensure data integrity and prevent overselling.

**Key Architectural Components**:

- **Authentication Layer**: JWT token pairs with role-based access control (RBAC), OAuth 2.0 Google integration, Cloudflare Turnstile bot protection, and Argon2id password hashing
- **Order System**: Full lifecycle management with automatic service charge calculation (10% on orders <100, 5% on orders ≥100), cursor-based pagination, and real-time stock tracking via `SELECT...FOR UPDATE` locking
- **Payment Processing**: Multi-provider architecture (Paystack, Monnify, Flutterwave) with webhook deduplication and automatic settlement accounting (platform commission + restaurant share)
- **Event-Driven Architecture**: Redpanda (Kafka-compatible) streaming for asynchronous event publishing (`order.created`, `payment_successful`, `payment_failed`)
- **Media Management**: AWS S3 presigned URL uploads, CloudFront CDN delivery, and multipart upload support for large files
- **Infrastructure**: Graceful shutdown, rate limiting (100 req/s), structured logging via Zap, and OpenAPI/Swagger documentation

**Advanced Features**:

- Redis-backed caching with SHA-256 hashed keys for menu listings
- Batch validation to prevent N+1 query patterns
- Comprehensive webhook audit logging with provider event ID deduplication
- Multi-step transaction orchestration with context cancellation
- Address geocoding (`geo-golang`) for restaurant location services

**Repository**: [Restaurant Management Backend](https://github.com/alibaba0010/postgres-api)

---

### 2. **E-Commerce API**

_Scalable RESTful Backend | Node.js, Express, MongoDB, Docker_

A production-ready e-commerce platform implementing comprehensive product management, shopping cart orchestration, and secure payment integration. Demonstrates mastery of REST principles, database design, and containerization.

**Core Features**:

- Scalable product catalog with inventory management
- Robust user authentication and session handling
- Shopping cart and order lifecycle management
- Secure payment processing pipeline
- Automated testing and Postman API documentation
- Docker containerization for consistent deployment

**Repository**: [E-Commerce API](https://github.com/alibaba0010/Ecommerce-API)  
**Demo**: [Live API](https://ecommerce-api-zn59.onrender.com)

---

### 3. **Auth-Services**

_Comprehensive Identity Platform | Next.js, NestJS, MongoDB, Prisma_

An enterprise-grade authentication microservice implementing JWT-based token management, OAuth integration, role-based access control, email verification, multi-factor authentication, and password recovery workflows. Demonstrates secure architecture patterns and database design with Prisma ORM.

**Key Features**:

- JWT token lifecycle management with refresh rotation
- OAuth 2.0 Google integration
- Email-based verification and password recovery
- Role-based access control (RBAC) with granular permissions
- Multi-factor authentication support
- Type-safe database operations via Prisma

**Repository**: [Auth-Services](https://github.com/alibaba0010/Auth-Services)  
**Demo**: [Live Application](https://auth-services-alpha.vercel.app)

---

### 4. **MERN Memories**

_Full-Stack Social Platform | React, Node.js, Express, MongoDB_

A full-stack social media application built on the MERN stack enabling users to post, curate, and share life events. Demonstrates end-to-end application development from frontend UI to backend APIs.

**Stack**: MongoDB (document storage), Express (REST framework), React (UI), Node.js (runtime)

**Repository**: [MERN Memories](https://github.com/alibaba0010/Mern-Memories)  
**Demo**: [Live Application](https://mern-memories-alpha.vercel.app/)

---

### 5. **SuiPay**

_Blockchain Payment Platform | Next.js, MongoDB, Sui Blockchain_

A decentralized payment application built on the Sui blockchain, providing low-latency, low-cost peer-to-peer transfers and merchant payments. Demonstrates blockchain integration, smart contract interaction, and modern crypto-native UX patterns.

**Features**:

- SUI token transfers with on-chain settlement
- Peer-to-peer and merchant payment modes
- Blockchain-native architecture
- Seamless user experience for crypto transactions

**Repository**: [SuiPay](https://github.com/alibaba0010/SuiPay)  
**Demo**: [Live Application](https://sui-pay-hackathon.vercel.app/)

---

### 6. **Summer Memories**

_AI-Powered Media Curation | Next.js, MongoDB, Google Gemini, Cloudinary_

An intelligent photo and video organization platform leveraging Google's Gemini API for semantic search, categorization, and insight generation. Demonstrates AI/ML integration, serverless architecture, and scalable media handling.

**Features**:

- AI-powered photo categorization and search
- Semantic media understanding via Gemini
- Cloudinary-backed image optimization and CDN delivery
- Intelligent tagging and discovery

**Repository**: [Summer Memories](https://github.com/alibaba0010/Summer-Memories)  
**Demo**: [Live Application](https://summer-memories-beta.vercel.app/)

---

### 7. **ALX Quiz App**

_Scalable Assessment Platform | React, Node.js, Express, MongoDB_

A full-stack quiz application featuring microservices architecture, adaptive difficulty algorithms, WebSocket integration for real-time updates, and comprehensive user engagement analytics. Implements JWT authentication, caching strategies, and performance optimization for concurrent user sessions.

**Architecture Highlights**:

- Microservices-based design for scalability
- Adaptive difficulty algorithms
- Real-time scoring via WebSocket
- Comprehensive analytics and progression tracking
- Caching for optimal performance

**Repository**: [ALX Quiz App](https://github.com/alibaba0010/ALX-Quiz-App)  
**Demo**: [Live Application](https://alx-quiz-app.vercel.app)

---

## 🛠 Technology Stack

### Frontend

- **Frameworks**: React 18+, Next.js 15, Vite
- **Styling**: Tailwind CSS, Styled Components
- **Animation**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Build**: SWC (Fast Refresh)

### Backend

- **Runtimes**: Node.js, Go 1.24
- **Frameworks**: Express, NestJS, gorilla/mux
- **Languages**: JavaScript, Go
- **ORMs**: Prisma, Bun

### Databases & Caching

- **Relational**: PostgreSQL 14+
- **Document**: MongoDB
- **Cache**: Redis 7+
- **Event Streaming**: Redpanda (Kafka-compatible)

### Infrastructure & DevOps

- **Cloud Storage**: AWS S3, CloudFront
- **Containerization**: Docker
- **Payment Providers**: Paystack, Monnify, Flutterwave
- **Authentication**: JWT, OAuth 2.0, Argon2id
- **Monitoring**: Structured logging (Zap), Swagger/OpenAPI
- **Rate Limiting**: Token bucket algorithms
- **Bot Protection**: Cloudflare Turnstile

### Development Tools

- **Linting**: ESLint 9
- **Package Management**: npm/yarn
- **Build Tools**: Vite 6, PostCSS, Autoprefixer
- **Code Quality**: Type safety focus

---

## 🔧 Development

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Starts the Vite development server with HMR (Hot Module Replacement) on `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Generates optimized production bundle with code splitting and minification.

### Preview Production Build

```bash
npm run preview
```

Locally preview the production build.

### Linting

```bash
npm run lint
```

Runs ESLint with React and React Hooks plugin rules to ensure code quality.

---

## 📄 License

This portfolio and all projects are licensed under the MIT License.

---

**Contact & Links**:

- GitHub: [@alibaba0010](https://github.com/alibaba0010)
- Portfolio: Available via deployment at production URLs
- Technologies: Go, Node.js, React, Next.js, PostgreSQL, MongoDB, AWS
