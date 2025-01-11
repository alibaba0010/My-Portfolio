import React from "react";

const Footer = () => {
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
    <section className="relative py-20">
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-20 text-center"
      >
        <div className="flex justify-center space-x-4 mb-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
        <p className="text-gray-400">
          © Copyright {new Date().getFullYear()} - Victor Pianwi
        </p>
      </motion.footer>
    </section>
  );
};

export default Footer;
