"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "./LanguageContext";

export function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const { t } = useLanguage();

    return (
        <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
            {/* Dynamic Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="BitFlash Hero Background"
                    fill
                    priority
                    className="object-cover object-center brightness-[0.3] contrast-125 scale-110"
                />
                {/* Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/90" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80" />
            </motion.div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] z-0 pointer-events-none" />

            {/* Floating Particles/Orb */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--color-primary)]/20 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--color-secondary)]/10 blur-[150px] rounded-full animate-pulse-slow delay-75 pointer-events-none" />

            {/* Content */}
            <div className="container mx-auto px-4 z-10 text-center relative mt-[-100px]">

                {/* Powered By Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                        <div className="relative px-6 py-2 bg-black ring-1 ring-white/10 rounded-lg leading-none flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-[var(--color-primary)]" />
                            <span className="text-gray-300 font-mono text-xs uppercase tracking-widest">
                                {t.hero.taglinePrefix} <a href="https://bitboom.fun" target="_blank" className="hover:text-[var(--color-primary)] hover:underline transition-all">BitBoom</a> {t.hero.taglineSuffix}
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Main Title with Glitch/Cinematic effect */}
                <div className="relative mb-6">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-tighter leading-[0.9] text-white mix-blend-screen"
                    >
                        {t.hero.title1} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">{t.hero.title2}</span>
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: 1 }}
                        className="absolute top-0 left-0 w-full text-6xl md:text-8xl lg:text-9xl font-black uppercase italic tracking-tighter leading-[0.9] text-[var(--color-primary)] mix-blend-overlay opacity-50 blur-sm animate-pulse"
                        aria-hidden="true"
                    >
                        {t.hero.title1} <br />
                        {t.hero.title2}
                    </motion.h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className="h-2 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent mx-auto mt-4 max-w-2xl blur-[2px]"
                    />
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light tracking-wide"
                >
                    {t.hero.subtitle} <span className="text-white font-bold glow-text">{t.hero.subtitleHighlight}</span>.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col md:flex-row justify-center gap-6"
                >
                    <a
                        href="https://bitflash.pro"
                        target="_blank"
                        className="relative px-8 py-4 bg-[var(--color-primary)] text-black font-black text-lg uppercase tracking-wider rounded-none clip-path-slant hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] flex items-center justify-center gap-2 group"
                        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
                    >
                        {t.hero.launch}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="https://bitboom.fun"
                        target="_blank"
                        className="relative px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg uppercase tracking-wider hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center"
                        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)" }}
                    >
                        {t.hero.ecosystem}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
