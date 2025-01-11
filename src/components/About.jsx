import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiJquery,
  SiReact,
  SiSolidity,
  SiFlutter,
  SiDart,
  SiPhp,
  SiMysql,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

function About() {
  const technologies = [
    { icon: SiHtml5, name: "HTML", color: "#E44D26" },
    { icon: SiCss3, name: "CSS", color: "#1572B6" },
    { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiJquery, name: "jQuery", color: "#0769AD" },
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiSolidity, name: "Solidity", color: "#363636" },
    { icon: SiFlutter, name: "Flutter", color: "#02569B" },
    { icon: SiDart, name: "Dart", color: "#0175C2" },
    { icon: SiPhp, name: "PHP", color: "#777BB4" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
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
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2 className="text-4xl font-bold mb-4 inline-block">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
              About Me
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            My name is Planwi Victor Baridakara. I'm a Computer Science
            Graduate. I'm a Full-Stack developer with expertise in website,
            application and smart contract development and a technical writer. I
            produce detailed technical articles on topics such as self-growth,
            and development (including websites, applications, decentralized
            applications, and smart contracts). I love to get new experiences
            and always learn from my surroundings. I look forward to any
            opportunities and challenges. I use the following technologies
          </motion.p>
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

export default About;
