"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Layers, Box, Cpu, Network } from "lucide-react";

export function Ecosystem() {
    const { t } = useLanguage();

    const apps = [
        {
            title: t.ecosystem.p1.title,
            desc: t.ecosystem.p1.desc,
            icon: <Layers className="w-8 h-8 text-[var(--color-primary)]" />,
            status: "Live"
        },
        {
            title: t.ecosystem.p2.title,
            desc: t.ecosystem.p2.desc,
            icon: <Network className="w-8 h-8 text-[var(--color-secondary)]" />,
            status: "Alpha"
        },
        {
            title: t.ecosystem.p3.title,
            desc: t.ecosystem.p3.desc,
            icon: <Cpu className="w-8 h-8 text-[var(--color-accent)]" />,
            status: "Deveopment"
        },
        {
            title: t.ecosystem.p4.title,
            desc: t.ecosystem.p4.desc,
            icon: <Box className="w-8 h-8 text-green-400" />,
            status: "Planned"
        }
    ];

    return (
        <section id="ecosystem" className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-4 uppercase"
                    >
                        {t.ecosystem.title} <span className="text-[var(--color-primary)]">BitBoom</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t.ecosystem.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {apps.map((app, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[var(--color-primary)]/50 transition-all hover:bg-black/80 group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                                    {app.icon}
                                </div>
                                <span className={`px-2 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 ${app.status === 'Live' ? 'text-green-400 border-green-400/30' : 'text-gray-500'}`}>
                                    {app.status}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">{app.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {app.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
