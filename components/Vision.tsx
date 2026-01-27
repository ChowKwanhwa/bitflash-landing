"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";

export function Vision() {
    const { t } = useLanguage();

    return (
        <section id="vision" className="py-24 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-primary)]/5 to-transparent skew-x-12 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="w-full md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
                    >
                        {t.vision.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-white">{t.vision.highlight}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed mb-6"
                    >
                        {t.vision.description1}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 text-lg leading-relaxed relative pl-4 border-l-4 border-[var(--color-primary)]"
                    >
                        {t.vision.description2}
                    </motion.p>
                </div>

                {/* Visual Content (Consensus Core Animation) */}
                <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] flex items-center justify-center">
                    {/* Core Glow */}
                    <div className="absolute w-[500px] h-[500px] bg-[var(--color-primary)]/10 blur-[100px] rounded-full animate-pulse-slow" />

                    {/* Animated Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[300px] h-[300px] border border-[var(--color-primary)]/20 rounded-full border-dashed"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[250px] h-[250px] border border-[var(--color-secondary)]/30 rounded-full border-dotted"
                    />
                    <motion.div
                        animate={{ rotate: 180 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[350px] h-[350px] border border-white/10 rounded-full"
                    />

                    {/* Central Node */}
                    <div className="relative z-10 w-32 h-32 bg-black/80 backdrop-blur-sm border border-[var(--color-primary)]/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,215,0,0.3)]">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-20 animate-pulse" />
                        <span className="text-4xl">⚡️</span>
                    </div>

                    {/* Floating Nodes */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-4 h-4 rounded-full bg-[var(--color-secondary)] shadow-[0_0_10px_var(--color-secondary)]"
                            animate={{
                                x: [0, Math.cos(i) * 150, 0],
                                y: [0, Math.sin(i) * 150, 0],
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.5
                            }}
                            style={{
                                top: '50%',
                                left: '50%',
                            }}
                        />
                    ))}

                    {/* Connecting Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                        {[...Array(8)].map((_, i) => (
                            <motion.line
                                key={i}
                                x1="50%" y1="50%"
                                x2={`${50 + Math.cos(i * 0.78) * 40}%`}
                                y2={`${50 + Math.sin(i * 0.78) * 40}%`}
                                stroke="url(#lineGrad)"
                                strokeWidth="1"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: [0, 1, 0], opacity: [0, 0.5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                            />
                        ))}
                    </svg>

                    <div className="absolute bottom-10 text-center">
                        <span className="text-xs font-mono text-[var(--color-primary)] tracking-[0.5em] uppercase opacity-70">Decentralized Consensus</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
