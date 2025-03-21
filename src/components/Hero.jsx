"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundAnimation from "./BgAnimation";

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Backend Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "Web3 Developer",
    "DevOps Engineer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToResume = () => {
    const aboutSection = document.getElementById("resume");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-sm uppercase tracking-wider text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to my portfolio
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="block text-white font-sans"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Hi, I'm <span className="text-[#0066ff]">Ali Zakariyah</span>
              </motion.span>
              <motion.span className="block text-white mt-2">
                a{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg mb-8 text-gray-400 max-w-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A Software Engineer with three years of experience architecting
              and delivering high-impact solutions, specializing in building
              scalable applications that solve complex business challenges.
              Based in Nigeria, I've developed a strong track record of
              transforming abstract requirements into robust, production-ready
              systems while maintaining a focus on code quality and performance
              optimization. My approach combines technical expertise with
              pragmatic problem-solving to create elegant solutions that drive
              real business value.
            </motion.p>
            <motion.button
              onClick={scrollToResume}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-[#0066ff] text-white rounded-md font-medium hover:bg-[#0052cc] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Resume
            </motion.button>
          </motion.div>
          <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] hidden lg:block">
            <BackgroundAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
