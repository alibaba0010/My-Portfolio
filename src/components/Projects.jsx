import { motion } from "framer-motion";
import { FaReact, FaNode } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "MERN Memories",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-09%2023-47-33-cVrH7LzMj61scQdSpUDyCJrBHlrGaL.png",
      description:
        "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
      stack: ["Mongo", "Express", "React", "Node"],
      icons: [
        <SiMongodb key="mongo" />,
        <SiExpress key="express" />,
        <FaReact key="react" />,
        <FaNode key="node" />,
      ],
    },
    {
      id: 2,
      title: "E-Commerce",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-09%2023-47-33-cVrH7LzMj61scQdSpUDyCJrBHlrGaL.png",
      description:
        "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio.",
      stack: ["React", "JavaScript"],
      icons: [<FaReact key="react" />, <SiJavascript key="js" />],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20">
      <motion.h2 className="text-4xl font-bold mb-4 inline-block">
        <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
          My Projects
        </span>
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-[#112240] rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-purple-500/10 transition-shadow duration-300 animate-slideUp"
            variants={itemVariants}
          >
            <motion.div
              className="relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
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
                {["Code", "Source"].map((button) => (
                  <motion.button
                    key={button}
                    className="px-6 py-2 bg-[#233554] rounded-md relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{button}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
