"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { Logo } from "./Logo";

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    rotate: [0, 180, 360],
                }} transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }} className="absolute top-20 left-10 w-32 h-32 bg-[#e30613]/5 rounded-full blur-xl" />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 100, 0],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/5 rounded-full blur-xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#e30613]/3 to-transparent rounded-full blur-3xl -z-10"
                />
            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center"
            >
                <Logo />
            </motion.div>
        </div>
    )
}