import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function Resume() {
  const [showFullResume, setShowFullResume] = useState(false);

  const experiences = [
    {
      id: 1,
      date: "July 2023 - September 2023",
      title: "Backend Developer Intern",
      company: "HNGX Internship",
      description:
        "Implemented RESTful APIs using Node.js, contributing to the improvement in server response time while collaborating on a team project. Developed and implemented CI/CD pipelines using Circle CI. Assisted in the development and testing of API endpoints using Jest which contributed to an improvement to the efficiency of the project.",
    },
  ];

  const education = [
    {
      id: 1,
      title: "Bachelor in Computer Engineering",
      school: "University of Ilorin - Ilorin, Nigeria",
      date: "2024 - 4.16",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "ALX Backend Engineer",
      organization: "ALX Africa - 2024",
      description:
        "Certified and equipped with a solid foundation in backend development technologies and best practices and other related technologies",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "ALX Final Year Project",
      date: "October 2024 - October 2024",
      link: "github.com/alibabanero/ALX_QUIZ_APP",
      description: [
        "Implemented a scalable software solution for the ALX Final Year Project using Node.js, MongoDB, HTML, CSS(Lucide) and JavaScript",
        "Achieving a 95% success rate in meeting project objectives and incorporating advanced technologies such as Google OAuth and third party API",
        "Implemented a comprehensive authentication and authorization framework with strict password policies",
        "Implemented a comprehensive error handling such as custom exceptions, and informative error messages to ensure robust application behavior and provide clear feedback to users",
      ],
    },
    {
      id: 2,
      title: "E-commerce API",
      date: "July 2022 - October 2023",
      link: "github.com/alibabanero/Ecommerce-API",
      description: [
        "Developed and optimized E-commerce APIs using Node.js(Express) and MongoDB, allowing users to explore the world of e-commerce orders, product functionalities",
        "Implemented a comprehensive error handling such as custom exceptions, and custom error messages to ensure robust application behavior and provide clear feedback to users",
        "Incorporated advanced technologies such as Email (Gmail) API and Stripe API",
      ],
    },
  ];

  const skills = {
    programming: "Programming tools: Node.js with Express framework",
    databases: "Database: Node.js (MongoDB, Redis), MySQL and PostgreSQL",
    cloud: "Cloud: AWS",
    devops: "DevOps: Docker, Kubernetes, Github Actions",
    soft: "Soft skills: API Development, Microservices, Data Structures, Problem-Solving Capabilities, Software Performance Optimization",
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
                <h3 className="text-2xl font-bold text-white mb-4">Summary</h3>
                <p className="text-gray-400">
                  An Experienced Backend Developer with hands-on experience in
                  implementing RESTful APIs using Node.js, contributing to
                  enhanced server response times and maintaining optimal
                  performance. Using Kubernetes, and implementing CI/CD
                  pipelines using Circle CI or Github Actions, working among
                  distributed teams in back-end development for an Elite
                  Full-Stack Developer role. Collaborated on a team project to
                  improve API performance and functionality, demonstrating
                  technical excellence and commitment to self-growth.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
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
                      className="mb-6"
                    >
                      <h4 className="text-xl font-bold text-white">
                        {exp.title}
                      </h4>
                      <p className="text-purple-500 mb-2">{exp.company}</p>
                      <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
                      <p className="text-gray-400">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>

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
              </div>

              {/* Projects Section */}
              <div className="bg-[#112240] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Projects</h3>
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
                      className="text-purple-500 hover:text-purple-400 transition-colors mb-2 inline-block"
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
                <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
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

              {/* Certifications Section */}
              <div className="bg-[#112240] p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Certifications
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
                    <p className="text-purple-500 mb-2">{cert.organization}</p>
                    <p className="text-gray-400">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Resume;
