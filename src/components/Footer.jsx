import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMediumM,
  FaCodepen,
  FaQuora,
  FaSlack,
  FaGithub,
  FaYoutube,
  FaArrowCircleUp,
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
    { icon: FaWhatsapp, url: "https://wa.me/yourwhatsapp" },
    { icon: FaFacebookF, url: "https://facebook.com/yourprofile" },
    { icon: FaInstagram, url: "https://instagram.com/yourprofile" },
    { icon: FaTwitter, url: "https://twitter.com/yourprofile" },
    { icon: FaLinkedinIn, url: "https://linkedin.com/in/yourprofile" },
    { icon: FaMediumM, url: "https://medium.com/@yourprofile" },
    { icon: FaCodepen, url: "https://codepen.io/yourprofile" },
    { icon: FaQuora, url: "https://quora.com/profile/yourprofile" },
    { icon: FaSlack, url: "https://slack.com/yourprofile" },
    { icon: FaGithub, url: "https://github.com/yourprofile" },
    { icon: FaYoutube, url: "https://youtube.com/c/yourprofile" },
  ];

  return (
    <footer className="py-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © Copyright {new Date().getFullYear()} - Victor Pianwi
          </p>

          <div className="flex items-center justify-center flex-wrap gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
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
