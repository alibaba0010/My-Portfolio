"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaChevronDown,
  FaChevronUp,
  FaCode,
  FaCertificate,
  FaTools,
} from "react-icons/fa";

function Resume() {
  const [showFullResume, setShowFullResume] = useState(false);

  const experiences = [
    {
      id: 1,
      date: "January 2025 - March 2025",
      title: "Backend & DevOps Intern",
      company: "HNG",
      link: "https://github.com/hngprojects",
      description: [
        "Containerized FastAPI Book Management API using Docker with multi-stage builds, reducing image size by 70% and deployment time by 40%.",
        "Designed and implemented a microservices architecture for a TODO application with 6 independent services, improving system scalability and reducing API response times by 35%.",
        "Built a commit testing pipeline with Kubernetes and WebSockets that provided real-time feedback, decreasing integration issues by 45%.",
        "Implemented Prometheus and Grafana monitoring solutions that reduced incident response time from 30 minutes to under 5 minutes.",
        "Automated AWS resource provisioning with Terraform, cutting infrastructure setup time by 80%.",
      ],
    },
    {
      id: 2,
      date: "July 2023 - September 2023",
      title: "Backend Developer Intern",
      company: "HNGX",
      link: "https://github.com/hngx-org",
      description: [
        "Implemented Restful APIs using Node.js, contributing to the improvement in server response time while collaborating on a team project (Evolver-events-backend) that enhanced back-end functionality for a web application.",
        "Achieved 95% test coverage by developing comprehensive API endpoint tests using Jest, reducing post-release bugs by 30%.",
        "Reduced deployment time by 60% through implementing CI/CD pipelines with CircleCI.",
        "Collaborated with a team of 8 developers using agile methodology to deliver features on schedule.",
      ],
    },
  ];

  const education = [
    {
      id: 1,
      title: "Bachelor in Computer Engineering",
      school: "University of Ilorin - Ilorin, Nigeria",
      date: "2024",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "ALX Backend Engineer",
      organization: "ALX Africa - 2024",
      description:
        "Certification in backend development technologies, API design, and system architecture",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Ticketing Platform",
      date: "June 2023 - December 2023",
      link: "github.com/alibaba0010/Ticketing-APP",
      description: [
        "Developed a complete event ticketing system using microservices architecture with Node.js and NATS streaming.",
        "Orchestrated 7 interconnected services using Kubernetes, achieving 99.9% system uptime.",
        "Implemented end-to-end payment processing with Stripe API, handling 100+ test transactions.",
        "Achieved 90% test coverage across all services using Jest, ensuring reliable functionality.",
        "Reduced deployment cycles from hours to minutes with GitHub Actions CI/CD pipeline.",
      ],
    },
    {
      id: 2,
      title: "Auth Services",
      date: "November 2024 - January 2025",
      link: "auth-services-alpha.vercel.app",
      description: [
        "Engineered a reusable authentication service that reduced login times by 50% and strengthened security protocols.",
        "Implemented OAuth integration with Google and GitHub that increased user registration by 35%.",
        "Created an email verification system that eliminated fake accounts and reduced unauthorized access attempts by 65%.",
        "Deployed as a standalone service with an API that can be integrated into any application stack.",
      ],
    },
    {
      id: 3,
      title: "E-commerce API",
      date: "July 2022 - October 2023",
      link: "github.com/alibaba0010/Ecommerce-API",
      description: [
        "Developed a comprehensive RESTful API for e-commerce operations with Node.js and MongoDB.",
        "Implemented optimized database queries that improved product search response time by 60%.",
        "Created a robust error handling system with custom exceptions that improved debugging efficiency by 40%.",
      ],
    },
    {
      id: 4,
      title: "ALX Final Year Project",
      date: "October 2024",
      link: "github.com/alibaba0010/ALX_QUIZ_APP",
      description: [
        "Implemented a scalable software solution using Node.js, MongoDB, HTML, CSS(Lucide) and JavaScript.",
        "Achieved a 95% success rate in meeting project objectives and incorporating advanced technologies such as Google OAuth and third party APIs.",
        "Implemented a comprehensive authentication and authorization framework with strict password policies.",
        "Created robust error handling with custom exceptions and informative error messages to ensure application stability.",
      ],
    },
    {
      id: 5,
      title: "Blockchain CrowdFunding Platform",
      date: "February 2025 - March 2025",
      link: "crowdfund-app-rho.vercel.app",
      description: [
        "Created a transparent crowdfunding platform that eliminated intermediary fees (5-10%) using Ethereum smart contracts.",
        "Developed and audited Solidity smart contracts that securely managed $10K+ in test funds during hackathon.",
        "Implemented time-based fund release mechanisms that increased investor confidence by providing 100% transparency.",
        "Built the frontend with Next.js and integrated Web3 functionality using ethers.js and Wagmi.",
      ],
    },
  ];

  const skills = {
    programming:
      "Programming Languages: JavaScript, TypeScript, Solidity, HTML/CSS",
    frameworks:
      "Frameworks & Libraries: Node.js, Express, React, Next.js, Nest.js, Jest",
    databases: "Databases: MongoDB, PostgreSQL, Redis",
    cloud:
      "Cloud & DevOps: AWS (EC2, S3, Lambda), Docker, Kubernetes, GitHub Actions, CircleCI, Terraform, Ansible",
    blockchain:
      "Blockchain: Smart Contract Development (Solidity), Ethers.js, Wagmi, ERC Standards, DeFi Protocols",
    architectural:
      "Architectural: Microservices, RESTful APIs, GraphQL, System Design, Performance Optimization",
    soft: "Soft Skills: API Development, Microservices, Data Structures, Problem-Solving Capabilities, Software Performance Optimization",
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
              My Resume
            </span>
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto w-24 mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
          />
          <motion.button
            onClick={() => setShowFullResume(!showFullResume)}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showFullResume ? (
              <>
                Hide Full Resume <FaChevronUp />
              </>
            ) : (
              <>
                View Full Resume <FaChevronDown />
              </>
            )}
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {showFullResume && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 mb-16"
            >
              <div className="bg-[#112240] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <FaCode className="text-cyan-400" /> Summary
                </h3>
                <p className="text-gray-400">
                  Software Engineer specializing in full-stack development with
                  Node.js, React, and microservices architecture. Experienced in
                  building scalable applications with modern DevOps practices
                  and cloud infrastructure. Additional expertise in blockchain
                  development, including smart contracts and DeFi protocols.
                  Committed to delivering high-performance, secure, and
                  maintainable solutions through collaborative development.
                </p>
              </div>

              {/* Experience Section */}
              <div className="bg-[#112240] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaBriefcase className="text-purple-500" /> Experience
                </h3>
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-8"
                  >
                    <h4 className="text-xl font-bold text-white">
                      {exp.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <p className="text-purple-500">{exp.company}</p>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-cyan-400 hover:underline"
                        >
                          ({exp.link})
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{exp.date}</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Education Section */}
                <div className="bg-[#112240] p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <FaGraduationCap className="text-cyan-400" /> Education
                  </h3>
                  {education.map((edu) => (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="mb-6"
                    >
                      <h4 className="text-xl font-bold text-white">
                        {edu.title}
                      </h4>
                      <p className="text-cyan-400 mb-2">{edu.school}</p>
                      <p className="text-sm text-gray-400">{edu.date}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Certifications Section */}
                <div className="bg-[#112240] p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <FaCertificate className="text-purple-500" /> Certifications
                  </h3>
                  {certifications.map((cert) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="mb-6"
                    >
                      <h4 className="text-xl font-bold text-white">
                        {cert.title}
                      </h4>
                      <p className="text-purple-500 mb-2">
                        {cert.organization}
                      </p>
                      <p className="text-gray-400">{cert.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Projects Section */}
              <div className="bg-[#112240] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaCode className="text-cyan-400" /> Projects
                </h3>
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-8"
                  >
                    <h4 className="text-xl font-bold text-white">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-400 mb-2">{project.date}</p>
                    <a
                      href={`https://${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-400 transition-colors mb-3 inline-block"
                    >
                      {project.link}
                    </a>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                      {project.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Skills Section */}
              <div className="bg-[#112240] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaTools className="text-purple-500" /> Skills
                </h3>
                <div className="grid gap-4">
                  {Object.entries(skills).map(([key, value]) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="text-gray-400"
                    >
                      {value}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Resume;
