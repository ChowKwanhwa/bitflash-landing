"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";



export function Tokenomics() {
    const { t } = useLanguage();

    const allocation = [
        { label: t.tokenomics.legend.mining, value: 40, color: "bg-[var(--color-primary)]" },
        { label: t.tokenomics.legend.liquidity, value: 20, color: "bg-[var(--color-accent)]" },
        { label: t.tokenomics.legend.eco, value: 20, color: "bg-[var(--color-secondary)]" },
        { label: t.tokenomics.legend.community, value: 15, color: "bg-green-400" },
        { label: t.tokenomics.legend.team, value: 5, color: "bg-purple-500" },
    ];

    return (
        <section id="tokenomics" className="py-24 bg-zinc-950 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-6 py-2 rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)] uppercase font-bold tracking-widest mb-4"
                    >
                        {t.tokenomics.supply}
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t.tokenomics.title} <span className="text-[var(--color-accent)] underline decoration-wavy">{t.tokenomics.titleHighlight}</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t.tokenomics.desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Chart Visualization (CSS Logic) */}
                    <div className="relative h-64 w-64 mx-auto md:h-96 md:w-96 rounded-full border-8 border-gray-800 flex items-center justify-center shadow-[0_0_50px_rgba(255,215,0,0.1)]">
                        {/* Simple visual representation using conic-gradient for simplicity or SVG would be better */}
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                            {/* 40% */}
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FFD700" strokeWidth="10" strokeDasharray="40 100" strokeDashoffset="0" />
                            {/* 20% */}
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FF0000" strokeWidth="10" strokeDasharray="20 100" strokeDashoffset="-40" />
                            {/* 20% */}
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#00BFFF" strokeWidth="10" strokeDasharray="20 100" strokeDashoffset="-60" />
                            {/* 15% */}
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#4ade80" strokeWidth="10" strokeDasharray="15 100" strokeDashoffset="-80" />
                            {/* 5% */}
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#a855f7" strokeWidth="10" strokeDasharray="5 100" strokeDashoffset="-95" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <span className="text-4xl font-black text-white">$FLASH</span>
                            <span className="text-sm text-gray-500">BRC-20 / Taproot</span>
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="space-y-6">
                        {allocation.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 group cursor-default"
                            >
                                <div className={`w-4 h-4 rounded-sm ${item.color} shadow-[0_0_10px_currentColor]`} />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-lg text-white group-hover:text-[var(--color-primary)] transition-colors">{item.label}</span>
                                        <span className="font-mono text-gray-400">{item.value}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.value}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className={`h-full ${item.color}`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
