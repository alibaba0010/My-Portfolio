"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
} from "react-icons/si";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce API",
      image: "/images/ecommerce.png",
      description:
        "A scalable E-commerce RESTful API built with Node.js and Express, featuring comprehensive product management, cart functionality, and secure payment processing. Implements robust user authentication, order tracking, and inventory management using MongoDB for flexible data storage. Containerized with Docker for consistent deployment and scalability, with automated testing and API documentation using Postman.",
      stack: ["React", "JavaScript"],
      icons: [
        <SiNodedotjs key="Node" />,
        <SiExpress key="Express" />,
        <SiMongodb key=" MongoDB" />,
        <SiDocker key="docker" />,
      ],
      code: "https://github.com/alibaba0010/Ecommerce-API",
      source: "https://ecommerce-api-zn59.onrender.com",
    },
    {
      id: 2,
      title: "Auth-services",
      image: "/images/auth.png",
      description:
        "A comprehensive authentication service implementing secure user management with JWT tokens, OAuth integration, and role-based access control. The system features email verification, password recovery, and multi-factor authentication, built using Next.js for the frontend and NestJS for a scalable backend architecture. Leverages MongoDB for flexible data storage and Prisma ORM for type-safe database operations, ensuring robust security practices and efficient user session management.",
      stack: ["React", "JavaScript"],
      icons: [
        <SiNextdotjs key="next" />,
        <SiNestjs key="Nest" />,
        <SiMongodb key="Mongodb" />,
        <SiPrisma key="Prisma" />,
      ],
      code: "https://github.com/alibaba0010/Auth-Services",
      source: "https://auth-services-alpha.vercel.app",
    },
    {
      id: 3,
      title: "MERN Memories",
      image: "/images/mern.png",
      description:
        "Using React, Node.js, Express & MongoDB, this is a Full Stack MERN Application called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
      stack: ["Mongo", "Express", "React", "Node"],
      icons: [
        <SiMongodb key="mongo" />,
        <SiExpress key="express" />,
        <FaReact key="react" />,
        <FaNode key="node" />,
      ],
      code: "https://github.com/alibaba0010/Mern-Memories",
      source: "https://mern-memories-alpha.vercel.app/",
    },
    {
      id: 4,
      title: "ALX Quiz APP",
      image: "/images/quiz.png",
      description:
        "A full-stack quiz application focused on scalable assessment delivery and performance tracking. Built with a microservices architecture to handle concurrent user sessions and real-time scoring. Implements adaptive difficulty algorithms and comprehensive analytics for user progression tracking. Features include JWT-based authentication, WebSocket integration for live updates, and caching strategies for optimal performance. The system maintains detailed metrics on user engagement and question effectiveness, enabling data-driven refinements to the assessment engine.",
      stack: ["React", "JavaScript"],
      icons: [
        <SiNodedotjs key="nodejs" />,
        <SiExpress key="express" />,
        <SiMongodb key="mongo" />,
        <SiJavascript key="js" />,
      ],
      code: "https://github.com/alibaba0010/ALX-Quiz-App",
      source: "https://alx-quiz-app.vercel.app",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(2);

  // Update items per row based on screen size
  useEffect(() => {
    const handleResize = () => {
      // On mobile (< 768px), we show 1 item per row
      // On larger screens (≥ 768px), we show 2 items per row (md:grid-cols-2)
      setItemsPerRow(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate how many projects to show initially (2 rows)
  const initialProjectCount = itemsPerRow * 2;

  // Get visible projects based on showAll state
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, initialProjectCount);

  // Handle show more/hide button click
  const handleToggleVisibility = () => {
    setShowAll(!showAll);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 className="text-4xl font-bold mb-4 inline-block">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
              My Projects
            </span>
          </motion.h2>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#112240] rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-shadow duration-300"
              variants={itemVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-white mb-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm text-gray-500 mb-2">Stack</h4>
                  <div className="flex space-x-4">
                    {project.icons.map((icon, index) => (
                      <motion.div
                        key={index}
                        className="text-2xl text-gray-400"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  {project.code && (
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#233554] rounded-md relative overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Code</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.a>
                  )}
                  {project.source && (
                    <motion.a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#233554] rounded-md relative overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Source</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More/Hide Button - only show if there are more than 2 rows of projects */}
        {projects.length > initialProjectCount && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={handleToggleVisibility}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-white rounded-md font-medium hover:opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? "Show Less" : "Show More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
