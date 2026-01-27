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

                {/* Visual Content (Abstract/Image) */}
                <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 group">
                    {/* Placeholder for Vision Image - replacing with generated CSS art for now to be safe, or use an existing asset if available. 
                         Using a specialized gradient/grid representation. 
                     */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 bg-[var(--color-primary)]/20 blur-[80px] rounded-full animate-pulse-slow" />
                            <div className="relative z-10 text-9xl font-black text-white/5 select-none">VISION</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
