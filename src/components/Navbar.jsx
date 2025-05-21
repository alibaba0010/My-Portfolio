"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const activeSection = useActiveSection();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getNavItems = () => {
    if (location.pathname === "/articles") {
      return [
        { name: "Profile", href: "/" },
        { name: "Articles", href: "/articles" },
        { name: "Projects", href: "/projects" },
      ];
    } else if (location.pathname === "/projects") {
      return [
        { name: "Profile", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Articles", href: "/articles" },
      ];
    }
    return [
      { name: "About", href: "#about" },
      { name: "Expertise", href: "#expertise" },
      { name: "Projects", href: "#projects" },
      { name: "Resume", href: "#resume" },
      { name: "Contact", href: "#contact" },
      { name: "Articles", href: "/articles" },
    ];
  };

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Use navigate for non-hash routes
      window.location.href = href;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = getNavItems();

  return (
    <motion.nav
      ref={navRef}
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
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              if (window.innerWidth <= 1024) {
                // Changed from 768 to 1024 for tablet support
                toggleMenu();
              }
            }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/99949368?s=400&u=1432b592835855d2d820eb523db4740c99cc8114&v=4"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-[#0066ff]"
            />
            <a
              href="#"
              className="text-white text-xl font-semibold"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Ali Zakariyah
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
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
                    // Update this condition to handle both hash and regular routes
                    (item.href.startsWith("#") &&
                      activeSection === item.href.slice(1)) ||
                    (!item.href.startsWith("#") &&
                      location.pathname === item.href)
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
                      (item.href.startsWith("#") &&
                        activeSection === item.href.slice(1)) ||
                      (!item.href.startsWith("#") &&
                        location.pathname === item.href)
                        ? "w-full"
                        : "w-0"
                    }`}
                    initial={false}
                    animate={{
                      width:
                        (item.href.startsWith("#") &&
                          activeSection === item.href.slice(1)) ||
                        (!item.href.startsWith("#") &&
                          location.pathname === item.href)
                          ? "100%"
                          : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-20 left-0 right-0 bg-[#0a192f] shadow-lg lg:hidden" // Changed from md:hidden to lg:hidden
              >
                <div className="px-4 py-2 space-y-2">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                        setIsMenuOpen(false);
                      }}
                      className={`block py-2 px-4 rounded-md transition-colors ${
                        (item.href.startsWith("#") &&
                          activeSection === item.href.slice(1)) ||
                        (!item.href.startsWith("#") &&
                          location.pathname === item.href)
                          ? "text-[#0066ff] bg-[#112240]"
                          : "text-gray-400 hover:bg-[#112240]"
                      }`}
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {[
              { Icon: FaGithub, url: "https://github.com/alibaba0010" },
              {
                Icon: FaLinkedin,
                url: "https://linkedin.com/in/ali-zakariyah-311067202/",
              },
              { Icon: FaTwitter, url: "https://x.com/realalibaba001" },
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
