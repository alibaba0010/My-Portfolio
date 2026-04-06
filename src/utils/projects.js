import { FaReact, FaNode } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiDocker,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
  SiSui,
  SiCloudinary,
  SiPostgresql,
  SiRedis,
  SiGo,
  SiTypescript,
  SiSolidity,
} from "react-icons/si";

export const projects = [
  {
    id: 1,
    title: "Hedera RWA — Real Estate Marketplace",
    image: "/images/projects/hedera-rwa.png",
    description:
      "A decentralized Real World Asset (RWA) marketplace built on the Hedera blockchain, enabling tokenization and trading of real estate properties. The platform leverages Hedera Token Service (HTS) to represent fractional ownership of physical assets as on-chain tokens, making real estate investment accessible to a broader audience. Features include property listing with IPFS-stored metadata, smart-contract-powered transfers, wallet authentication, and live transaction tracking via HashScan. Built with React and Hedera's SDK for a seamless Web3 user experience.",
    stack: ["React", "TypeScript", "Solidity", "Hedera"],
    icons: {
      React: FaReact,
      TypeScript: SiTypescript,
      Solidity: SiSolidity,
      JavaScript: SiJavascript,
    },
    code: "https://github.com/alibaba0010/Hedera-RWA",
    source: "https://hedera-rwa.vercel.app/",
  },
  {
    id: 2,
    title: "GourmetHub — Restaurant Management APP",
    image: "/images/projects/restaurant-mgt.png",
    description:
      "A production-grade REST API powering comprehensive restaurant management with end-to-end order processing, multi-provider payment integration, and real-time event streaming. Built with Go 1.24, PostgreSQL, and Redpanda (Kafka-compatible), this system implements pessimistic locking for concurrent order handling, JWT-based RBAC authentication, and automatic service charge calculations. Features AWS S3 media management, Redis caching with SHA-256 hashing, webhook deduplication for payment providers (Paystack, Monnify, Flutterwave), and graceful shutdown patterns. Delivers event-driven architecture for asynchronous order and payment workflows with structured logging, rate limiting, and OpenAPI documentation.",
    stack: ["Go", "PostgreSQL", "Redis", "Redpanda"],
    icons: {
      Go: SiGo,
      PostgreSQL: SiPostgresql,
      Redis: SiRedis,
      Docker: SiDocker,
    },
    code: "https://github.com/alibaba0010/Restaurant_Mangement",
    source: "https://github.com/alibaba0010/Restaurant-Management-UI",
  },
  {
    id: 3,
    title: "E-Commerce API",
    image: "/images/projects/ecommerce.png",
    description:
      "A scalable E-commerce RESTful API built with Node.js and Express, featuring comprehensive product management, cart functionality, and secure payment processing. Implements robust user authentication, order tracking, and inventory management using MongoDB for flexible data storage. Containerized with Docker for consistent deployment and scalability, with automated testing and API documentation using Postman.",
    stack: ["Node.js", "Express", "MongoDB", "Docker"],
    icons: {
      Node: SiNodedotjs,
      Express: SiExpress,
      MongoDB: SiMongodb,
      Docker: SiDocker,
    },
    code: "https://github.com/alibaba0010/Ecommerce-API",
    source: "https://ecommerce-api-zn59.onrender.com",
  },
  {
    id: 4,
    title: "Auth-services",
    image: "/images/projects/auth.png",
    description:
      "A comprehensive authentication service implementing secure user management with JWT tokens, OAuth integration, and role-based access control. The system features email verification, password recovery, and multi-factor authentication, built using Next.js for the frontend and NestJS for a scalable backend architecture. Leverages MongoDB for flexible data storage and Prisma ORM for type-safe database operations, ensuring robust security practices and efficient user session management.",
    stack: ["React", "JavaScript"],
    icons: {
      Next: SiNextdotjs,
      Nest: SiNestjs,
      Mongodb: SiMongodb,
      Prisma: SiPrisma,
    },
    code: "https://github.com/alibaba0010/Auth-Services",
    source: "https://auth-services-alpha.vercel.app",
  },
  {
    id: 5,
    title: "MERN Memories",
    image: "/images/projects/mern.png",
    description:
      "Using React, Node.js, Express & MongoDB, this is a Full Stack MERN Application called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    stack: ["Mongo", "Express", "React", "Node"],
    icons: {
      Mongo: SiMongodb,
      Express: SiExpress,
      React: FaReact,
      Node: FaNode,
    },
    code: "https://github.com/alibaba0010/Mern-Memories",
    source: "https://mern-memories-alpha.vercel.app/",
  },
  {
    id: 6,
    title: "SuiPay",
    image: "/images/projects/suipay.png",
    description:
      "SuiPay is a decentralized payment platform built on the Sui blockchain, designed to facilitate secure and efficient transactions using SUI tokens. It leverages the unique capabilities of the Sui blockchain to provide a seamless user experience, enabling instant transfers, low transaction fees, and robust security features. The platform supports various payment methods, including peer-to-peer transfers and merchant payments, with a focus on scalability and user-friendly interfaces.",
    stack: ["Mongo", "Next", "Sui"],
    icons: {
      Mongo: SiMongodb,
      Next: SiNextdotjs,
      Sui: SiSui,
    },
    code: "https://github.com/alibaba0010/SuiPay",
    source: "https://sui-pay-hackathon.vercel.app/",
  },
  {
    id: 7,
    title: "Summer Memories",
    image: "/images/projects/summer-memories.png",
    description:
      "Summer Memories is a smart media organization tool designed to help you effortlessly manage your cherished summer photos and videos. Leveraging the power of AI, this application goes beyond simple storage, offering intelligent features to make revisiting your memories a joy.",
    stack: ["Mongo", "Cloudinary", "Next", "Gemini"],
    icons: {
      Mongo: SiMongodb,
      Express: SiExpress,
      Next: SiNextdotjs,
      Cloudinary: SiCloudinary,
    },
    code: "https://github.com/alibaba0010/Summer-Memories",
    source: "https://summer-memories-beta.vercel.app/",
  },
  {
    id: 8,
    title: "ALX Quiz APP",
    image: "/images/projects/quiz.png",
    description:
      "A full-stack quiz application focused on scalable assessment delivery and performance tracking. Built with a microservices architecture to handle concurrent user sessions and real-time scoring. Implements adaptive difficulty algorithms and comprehensive analytics for user progression tracking. Features include JWT-based authentication, WebSocket integration for live updates, and caching strategies for optimal performance. The system maintains detailed metrics on user engagement and question effectiveness, enabling data-driven refinements to the assessment engine.",
    stack: ["React", "JavaScript"],
    icons: {
      Node: SiNodedotjs,
      Express: SiExpress,
      Mongo: SiMongodb,
      JS: SiJavascript,
    },
    code: "https://github.com/alibaba0010/ALX-Quiz-App",
    source: "https://alx-quiz-app.vercel.app",
  },
];
