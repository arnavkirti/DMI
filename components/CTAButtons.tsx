"use client";

import { motion } from "framer-motion";
import { Rocket, Play } from "lucide-react";

export function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex flex-col md:flex-row gap-4 justify-center items-center"
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative bg-[#e30613] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="group-hover:animate-pulse"
        >
          <Rocket size={20} />
        </motion.div>
        <span>Start Free Trial</span>
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{
            background: [
              "rgba(255,255,255,0.1)",
              "rgba(255,255,255,0.2)",
              "rgba(255,255,255,0.1)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-[#e30613] hover:text-[#e30613] transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center shadow-sm hover:shadow-lg"
      >
        <span>Watch Demo</span>
        <motion.div
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Play size={18} fill="currentColor" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}