import { motion } from "framer-motion";
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
    { icon: SiTypescript, name: "typescript", color: "#3178C6" },
    { icon: SiExpress, name: "Express", color: "#000000" },
    { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiSolidity, name: "Solidity", color: "#363636" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiNextdotjs, name: "Nextjs", color: "#000000" },
    { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: FaAws, name: "AWS", color: "#FF9900" },
    { icon: SiTypeorm, name: "TypeORM", color: "#FF0000" },
    { icon: SiPrisma, name: "Prisma", color: "#2D3748" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 relative">
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
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <tech.icon
                className="w-16 h-16 transition-colors duration-300"
                style={{ color: tech.color }}
              />
              <span className="text-gray-400 text-sm font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Languages;
