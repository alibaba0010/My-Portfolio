import { motion } from "framer-motion";
import BackgroundAnimation from "./BgAnimation";

function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Welcome To
              </motion.span>
              <br />
              <motion.span
                className="inline-block gradient-text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                My Personal Portfolio
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg mb-8 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              The purpose of JavaScript Mastery is to help aspiring and
              established developers to take their development skills to the
              next level and build awesome apps.
            </motion.p>
            <motion.button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium relative group overflow-hidden gradient-border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Learn More</span>
            </motion.button>
          </motion.div>
          <div className="relative w-full h-full min-h-[300px] md:min-h-[500px]">
            <BackgroundAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
