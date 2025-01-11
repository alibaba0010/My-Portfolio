"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useActiveSection } from "../hooks/useActiveSection";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0a192f]/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#"
              className="text-white text-xl font-semibold"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Portfolio
            </a>
          </motion.div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative hover:text-white transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-[#0066ff]"
                      : "text-gray-400"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#0066ff] ${
                      activeSection === item.href.slice(1) ? "w-full" : "w-0"
                    }`}
                    initial={false}
                    animate={{
                      width:
                        activeSection === item.href.slice(1) ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* <LanguageSelector /> */}
            {[
              { Icon: FaGithub, url: "https://github.com" },
              { Icon: FaLinkedin, url: "https://linkedin.com" },
              { Icon: FaInstagram, url: "https://instagram.com" },
            ].map(({ Icon, url }, index) => (
              <motion.a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
