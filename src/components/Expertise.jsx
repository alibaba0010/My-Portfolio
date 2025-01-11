import { motion } from "framer-motion";
import { FaAtom, FaTools, FaCity, FaFileAlt } from "react-icons/fa";

function Expertise() {
  const expertiseAreas = [
    {
      icon: FaAtom,
      title: "Web Development",
      description:
        "I design, build and maintain dynamic and responsive websites. I design visually appealing and responsive user interfaces using HTML, CSS, Bootstrap, JavaScript and React while implementing efficient server-side applications and databases with PHP and MySQL. With a strong focus on responsive design and performance optimization, I deploy web applications, manage databases, and document my code.",
    },
    {
      icon: FaTools,
      title: "App Development",
      description:
        "I build applications that run on mobile devices, computers, or other platforms. I engage with you to comprehend your project objectives and bring your ideas to life. Leveraging Flutter and Dart (The Cross Platform Language) I code robust and user-friendly mobile applications integrating the best features with your demanded features.",
    },
    {
      icon: FaCity,
      title: "Smart Contract Development",
      description:
        "I design, build, and implement decentralized applications (dApps) and smart contracts on blockchain technology such as Ethereum Blockchain. I define and execute smart contract logic, ensuring the secure and efficient execution of decentralized protocols. My expertise includes coding in React and Solidity, integrating blockchain networks, and deploying smart contracts.",
    },
    {
      icon: FaFileAlt,
      title: "Technical Writing",
      description:
        "I write about self-growth, development(website, application decentralized applications and smart contract) and blockchain in a clear and understandable manner. I distill complex technical information into clear, concise, and user-friendly documentation. As a developer I create comprehensive guides, manuals and online content that effectively communicate intricate concepts, Software functionalities, blockchain technology and procedural information.",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: { width: "0%" },
    show: {
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <motion.h2
            variants={headingVariants}
            className="text-4xl font-bold mb-4 inline-block"
          >
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
              Areas of Expertise
            </span>
          </motion.h2>
          <motion.div
            variants={underlineVariants}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto w-24"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)",
              }}
              className="bg-[#112240] rounded-lg p-6 shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <div className="flex items-start gap-4 relative z-10">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <area.icon className="w-8 h-8 text-blue-500" />
                </motion.div>
                <div>
                  <motion.h3
                    className="text-xl font-bold text-white mb-4"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {area.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {area.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Expertise;
