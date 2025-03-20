"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAtom, FaServer, FaCity, FaCogs, FaTimes } from "react-icons/fa";

function Expertise() {
  const [activeOverlay, setActiveOverlay] = useState(null);

  const expertiseAreas = [
    {
      icon: FaServer,
      title: "Backend Developement",
      description:
        "I architect and implement robust server-side applications using advanced Nodejs frameworks and microservices architectures. My technical foundation centers on developing scalable APIs and services using Express.js for lightweight applications and NestJS for enterprise-grade solutions, incorporating TypeScript to ensure type safety and code reliability.In database architecture, I leverage both SQL and NoSQL solutions, implementing PostgreSQL for complex relational data structures and MongoDB for flexible, document-based storage requirements. My expertise includes designing optimized database schemas, implementing efficient query patterns, and maintaining data integrity across distributed systems.My development approach incorporates GraphQL to create flexible, efficient APIs that reduce network overhead and enhance frontend-backend communication. I implement comprehensive authentication systems, rate limiting, caching strategies, and security measures to ensure robust application performance and data protection.Through systematic application of software engineering principles, I develop maintainable codebases with comprehensive test coverage, detailed API documentation, and efficient error handling mechanisms. My experience encompasses the complete backend development lifecycle, from system architecture design through deployment and performance optimization, always prioritizing scalability and maintainability.",
    },
    {
      icon: FaAtom,
      title: "Software Development",
      description:
        " I specialize in developing and maintaining enterprise-grade software solutions, with comprehensive expertise across the full technology stack. My frontend development approach centers on creating sophisticated user interfaces using React, leveraging its component architecture alongside modern JavaScript practices to ensure optimal performance and scalability. For backend systems, I implement robust server-side solutions using PHP and MySQL, with particular attention to database optimization and system architecture.y development methodology emphasizes code quality and performance optimization at every stage. This includes implementing comprehensive testing strategies, establishing efficient CI/CD pipelines, and maintaining detailed technical documentation to support long-term maintainability. I consistently deliver solutions that not only meet immediate business requirements but are also architected for future scalability and enhancement.Through strategic application of industry best practices and emerging technologies, I ensure all applications are secure, performant, and aligned with business objectives. My experience encompasses the complete software development lifecycle, from initial architecture design through deployment and ongoing maintenance, always prioritizing code quality and system reliability     ",
    },

    {
      icon: FaCogs,
      title: "DevOps Engineering",
      description:
        "I specialize in designing and implementing robust cloud infrastructure solutions, with deep expertise in AWS services and modern DevOps practices. My experience encompasses architecting highly available and scalable systems using containerization technologies, including Docker and Kubernetes, while maintaining strict security protocols and cost optimization strategies.In AWS environments, I implement infrastructure as code using Terraform and CloudFormation, managing complex multi-account architectures and establishing secure networking configurations. I design and maintain CI/CD pipelines using GitHub Actions, enabling automated testing, security scanning, and deployment processes that significantly reduce time-to-market while ensuring code quality and reliability.My approach to container orchestration leverages Kubernetes for managing microservices architectures, implementing auto-scaling policies, and ensuring high availability across multiple availability zones. I establish comprehensive monitoring and alerting systems using tools like CloudWatch and Prometheus, enabling proactive incident response and system optimization.Through strategic implementation of DevOps best practices, I streamline development workflows, enhance system reliability, and maintain robust disaster recovery procedures. My focus extends beyond technical implementation to include documentation of infrastructure configurations, security protocols, and operational procedures, ensuring knowledge transfer and maintaining operational excellence.",
    },

    {
      icon: FaCity,
      title: "Web3 Development",
      description:
        "I specialize in developing decentralized applications (dApps) and smart contracts across multiple blockchain ecosystems, with comprehensive expertise in both Ethereum and Move-based protocols. My proficiency encompasses architecting secure smart contracts using Solidity and Move, implementing complex tokenomics systems, and creating seamless web3 user experiences through React-based frontends.In smart contract development, I implement robust security practices including formal verification, comprehensive testing frameworks, and adherence to established patterns. My experience includes developing and auditing DeFi protocols, NFT marketplaces, and cross-chain applications while ensuring optimal gas efficiency and transaction throughput.Leveraging Move's resource-oriented programming model, I develop secure and efficient smart contracts for platforms like Sui and Aptos, implementing advanced features such as custom resources and parallel transaction execution. My development approach incorporates thorough security considerations, including protection against common attack vectors and implementation of access control mechanisms.On the frontend, I create intuitive dApp interfaces using React, integrating web3 libraries and wallet connections while maintaining a seamless user experience. My expertise extends to implementing efficient state management for blockchain data, handling transaction lifecycles, and managing real-time updates through event listeners.Through systematic application of blockchain development best practices, I ensure all solutions maintain the highest standards of security, efficiency, and user experience while adhering to the principles of decentralization.",
    },
  ];

  // Function to extract the first two sentences from a description
  const extractTwoSentences = (text) => {
    // Match sentences that end with a period followed by a space or end of string
    const sentenceRegex = /[^.!?]+[.!?]+(?:\s|$)/g;
    const sentences = text.match(sentenceRegex);

    if (!sentences || sentences.length === 0) {
      return text;
    }

    // Get first two sentences or all if less than two
    const firstTwoSentences = sentences.slice(0, 2).join(" ");
    return firstTwoSentences;
  };

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

  const overlayVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="expertise" className="py-20 relative">
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
                  <motion.div
                    className="text-gray-400 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <p>{extractTwoSentences(area.description)}</p>
                    <motion.button
                      onClick={() => setActiveOverlay(index)}
                      className="mt-3 text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Show More
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full Description Overlay */}
      <AnimatePresence>
        {activeOverlay !== null && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            // className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm"
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveOverlay(null)}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-cyan-900/40"
              onClick={() => setActiveOverlay(null)}
            ></div>
            <motion.div
              className="bg-[#112240] rounded-lg p-6 max-w-3xl max-h-[80vh] overflow-y-auto relative z-10 border border-purple-500/20 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {activeOverlay !== null &&
                    expertiseAreas[activeOverlay].title}
                </h3>
                <button
                  onClick={() => setActiveOverlay(null)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              <div className="text-gray-300 leading-relaxed">
                {activeOverlay !== null &&
                  expertiseAreas[activeOverlay].description.split(".").map(
                    (sentence, i) =>
                      sentence.trim() && (
                        <p key={i} className="mb-3">
                          {sentence.trim()}.
                        </p>
                      )
                  )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Expertise;
