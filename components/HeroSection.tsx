"use client";

import { motion, type Variants } from "framer-motion";
import { Logo } from "./Logo";
import { CTAButtons } from "./CTAButtons";

export default function HeroSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
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
                <motion.div variants={itemVariants} className="max-w-5xl mx-auto mb-8">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <span className="text-gray-900">Design Made</span>
                        <br />
                        <motion.span
                            className="text-[#e30613] relative inline-block"
                            animate={{
                                textShadow: [
                                    "0 0 0px #e30613",
                                    "0 0 10px #e30613",
                                    "0 0 0px #e30613",
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        > Intelligent
                        </motion.span>
                    </h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-bold mb-6"
                    >
                        From Startup to Scale. AI Powered Design.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
                    >
                        Join 500+ funded startups using DMI to create professional brand identities,
                        social content, and app interfaces in minutes, not months.
                    </motion.p>
                </motion.div>

                <CTAButtons />

                {/* Floating elements */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-20 right-20 hidden lg:block"
                >
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#e30613] rounded-lg"></div>
                    </div>
                </motion.div>

                <motion.div
                    animate={{
                        y: [0, 10, 0],
                        rotate: [0, -5, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-32 left-20 hidden lg:block"
                >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}