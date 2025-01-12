import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaTwitter,
  FaLinkedinIn,
  FaMediumM,
  FaCodepen,
  FaQuora,
  FaGithub,
  FaArrowCircleUp,
  FaStackOverflow
} from "react-icons/fa";
const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const socialLinks = [
    { icon: FaTwitter, url: "https://x.com/realalibaba00" },
    { icon: FaLinkedinIn, url: "https://linkedin.com/in/ali-zakariyah-311067202/" },
    { icon: FaMediumM, url: "https://medium.com/@yourprofile" },
    { icon: FaCodepen, url: "https://codepen.io/yourprofile" },
    { icon: FaQuora, url: "https://quora.com/profile/Ali-Baba-3277" },
    { icon: FaGithub, url: "https://github.com/alibaba0010" },
    { icon: FaStackOverflow, url: "https://stackoverflow.com/users/29166527/zakariyah-ali" },
  ];

  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © Copyright {new Date().getFullYear()} - Ali Zakariyah
          </p>

          <div className="flex items-center justify-center flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-opacity"
                aria-label="Scroll to top"
              >
                <FaArrowCircleUp className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
