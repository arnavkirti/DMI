"use client";

import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center mb-8 md:mb-12"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative mb-6"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 bg-[#e30613] rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-2xl md:text-3xl tracking-tight">
            DMI
          </span>
        </div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[#e30613] rounded-2xl -z-10"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex space-x-2"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            className="w-2 h-2 bg-[#e30613] rounded-full"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}