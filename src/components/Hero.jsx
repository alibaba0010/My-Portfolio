"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundAnimation from "./BgAnimation";

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Technical Writer", "Software Developer", "DevOps Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
              Welcome to my portfolio 😊
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="block text-white font-sans"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Hi, I'm <span className="text-[#0066ff]">Victor Pianwi</span>
              </motion.span>
              <motion.span className="block text-white mt-2 h-[1.2em]">
                a{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
                .
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg mb-8 text-gray-400 max-w-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm a Passionate Full-Stack developer from Nigeria with three
              years of hands-on experience crafting and maintaining dynamic and
              responsive solutions. I thrive on turning ideas into interactive
              experiences.
            </motion.p>
            <motion.button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-[#0066ff] text-white rounded-md font-medium hover:bg-[#0052cc] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Resume
            </motion.button>
          </motion.div>
          <div className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
            <BackgroundAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
