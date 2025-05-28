"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Link from "next/link"; // Replace useRouter with Link
import { useLocation } from "react-router-dom"; // Add this import
import { projects } from "../utils/projects";

function Projects() {
  // Remove the router declaration
  const [itemsPerRow, setItemsPerRow] = useState(2);
  const location = useLocation(); // Add this line
  const isProjectsPage = location.pathname === "/projects";

  useEffect(() => {
    const handleResize = () => {
      setItemsPerRow(2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialProjectCount = 2;
  const visibleProjects = isProjectsPage
    ? projects
    : projects.slice(0, initialProjectCount);

  // Remove handleViewAllProjects function as we'll use Link component instead

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
              {isProjectsPage ? "All Projects" : "My Projects"}
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
        {!isProjectsPage && projects.length > initialProjectCount && (
          <div className="flex justify-center mt-10">
            <Link href="/projects">
              <motion.div
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-white rounded-md font-medium hover:opacity-90 transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
              </motion.div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
