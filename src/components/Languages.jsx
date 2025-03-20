"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiSolidity,
  SiDocker,
  SiNextdotjs,
  SiKubernetes,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiGraphql,
  SiTypeorm,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Languages() {
  const technologies = [
    { icon: SiHtml5, name: "HTML", color: "#E44D26" },
    { icon: SiCss3, name: "CSS", color: "#1572B6" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiExpress, name: "Express", color: "#000000" },
    { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiSolidity, name: "Solidity", color: "#363636" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: FaAws, name: "AWS", color: "#FF9900" },
    { icon: SiTypeorm, name: "TypeORM", color: "#FF0000" },
    { icon: SiPrisma, name: "Prisma", color: "#2D3748" },
  ];

  const [visibleRows, setVisibleRows] = useState(1);
  const [itemsPerRow, setItemsPerRow] = useState(6);
  const [isAllVisible, setIsAllVisible] = useState(false);
  const [visibleTechs, setVisibleTechs] = useState([]);
  const gridRef = useRef(null);

  // Update items per row based on screen size
  useEffect(() => {
    const handleResize = () => {
      let newItemsPerRow = 6; // Default for large screens

      if (window.innerWidth < 640) {
        newItemsPerRow = 2; // Mobile: 2 items per row (grid-cols-2)
      } else if (window.innerWidth < 768) {
        newItemsPerRow = 3; // Small screens: 3 items per row (grid-cols-3)
      } else if (window.innerWidth < 1024) {
        newItemsPerRow = 4; // Medium screens: 4 items per row (grid-cols-4)
      }

      setItemsPerRow(newItemsPerRow);

      // Update visible technologies when screen size changes
      updateVisibleTechs(visibleRows, newItemsPerRow);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleRows]);

  // Update visible technologies when rows change
  useEffect(() => {
    updateVisibleTechs(visibleRows, itemsPerRow);
  }, [visibleRows, itemsPerRow]);

  // Function to update visible technologies
  const updateVisibleTechs = (rows, itemsPerRow) => {
    const visibleCount = rows * itemsPerRow;
    setVisibleTechs(technologies.slice(0, visibleCount));
  };

  // Calculate total rows needed
  const totalRows = Math.ceil(technologies.length / itemsPerRow);

  // Handle show more/hide button click
  const handleToggleVisibility = () => {
    if (isAllVisible) {
      // Hide all except first row
      setVisibleRows(1);
      setIsAllVisible(false);
    } else {
      // Show 3 more rows or all remaining rows if less than 3
      const newVisibleRows = Math.min(visibleRows + 3, totalRows);
      setVisibleRows(newVisibleRows);
      setIsAllVisible(newVisibleRows >= totalRows);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const underlineVariants = {
    hidden: { width: "0%" },
    show: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="languages" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl font-bold mb-4 inline-block">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
              Languages and Frameworks
            </span>
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={underlineVariants}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto"
            style={{
              maxWidth: "80%",
              width: "calc(80% - 6rem)",
            }}
          />
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence>
            {visibleTechs.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col items-center justify-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <tech.icon
                  className="w-12 h-12 sm:w-16 sm:h-16 transition-colors duration-300"
                  style={{ color: tech.color }}
                />
                <span className="text-gray-400 text-xs sm:text-sm font-medium text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Hide Button */}
        {technologies.length > itemsPerRow && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={handleToggleVisibility}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-white rounded-md font-medium hover:opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAllVisible ? "Hide" : "Show More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Languages;
