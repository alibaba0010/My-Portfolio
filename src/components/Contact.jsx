"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaComments,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to send email');
      // }

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
  const contactInfo = [
    {
      icon: FaEnvelope,
      content: "zakariyahali100@gmail.com",
      href: "mailto:zakariyahali100@gmail.com",
    },
  ];

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5" />

      <div className="container mx-auto px-4 relative">
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
              Contact Me
            </span>
          </motion.h2>
          <motion.div className="h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto w-24" />
        </motion.div>

        <div className="max-w-4xl mx-auto backdrop-blur-sm">
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-[#112240] rounded-lg border border-gray-700 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 transition-colors text-white placeholder-gray-400"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-[#112240] rounded-lg border border-gray-700 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 transition-colors text-white placeholder-gray-400"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#112240] rounded-lg border border-gray-700 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 transition-colors text-white placeholder-gray-400 resize-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
               <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-white rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.icon === FaMapMarkerAlt ? "_blank" : undefined}
                rel={
                  info.icon === FaMapMarkerAlt
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#0066ff] text-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0052cc] transition-colors">
                  <info.icon className="w-6 h-6" />
                </div>

                <p className="text-xl text-gray-400 hover:text-[#0066ff] transition-colors">
                  {info.content}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Chat Icon */}
        <motion.button
          className="fixed bottom-8 right-8 w-14 h-14 bg-[#0066ff] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0052cc] transition-colors z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatOpen(true)}
        >
          <FaComments className="w-6 h-6" />
        </motion.button>

        {/* Chat Popup */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed bottom-24 right-8 w-96 bg-[#112240] rounded-lg shadow-xl overflow-hidden z-50"
            >
              <div className="bg-[#0066ff] p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <img
                      src="https://sjc.microlink.io/Yp-qs34bLiio6-19aH51VzN5IBO_FtoDQ88iJ4SjcvFVo3aHZ6cUMejiZsxxKnFdls87uAuCkKfIcNSFB0EF-A.jpeg"
                      alt="Ali Zakariyah"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="font-medium">Chat with Ali Zakariyah</h3>
                    <p className="text-sm opacity-90">I reply immediately</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              <div className="h-96 p-4 overflow-y-auto">
                {/* Chat messages would go here */}
              </div>
              <div className="p-4 border-t border-gray-700">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message here"
                    className="flex-1 px-4 py-2 bg-[#0a192f] rounded-full border border-gray-700 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 transition-colors text-white placeholder-gray-400"
                  />
                  <button className="p-2 bg-[#0066ff] text-white rounded-full hover:bg-[#0052cc] transition-colors">
                    <FaComments className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Contact;
