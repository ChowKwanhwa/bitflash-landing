"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";



export function Roadmap() {
    const { t } = useLanguage();

    const phases = [
        {
            phase: t.roadmap.p1.phase,
            title: t.roadmap.p1.title,
            items: t.roadmap.p1.items
        },
        {
            phase: t.roadmap.p2.phase,
            title: t.roadmap.p2.title,
            items: t.roadmap.p2.items
        },
        {
            phase: t.roadmap.p3.phase,
            title: t.roadmap.p3.title,
            items: t.roadmap.p3.items
        },
        {
            phase: t.roadmap.p4.phase,
            title: t.roadmap.p4.title,
            items: t.roadmap.p4.items
        },
    ];

    return (
        <section id="roadmap" className="py-24 bg-gradient-to-b from-black to-zinc-950 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-white">
                    {t.roadmap.title}
                </h2>

                <div className="relative border-l-2 border-[var(--color-primary)]/30 ml-4 md:ml-1/2 md:-translate-x-[1px] space-y-12">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[var(--color-primary)] rounded-full shadow-[0_0_10px_var(--color-primary)] z-10" />

                            {/* Content Space (Empty) */}
                            <div className="hidden md:block w-1/2" />

                            {/* Content Card */}
                            <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                                <div className="bg-zinc-900/40 border border-white/10 p-6 rounded-xl hover:border-[var(--color-primary)]/50 transition-colors">
                                    <span className="text-[var(--color-primary)] font-mono text-sm uppercase tracking-wider mb-2 block">
                                        {phase.phase}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                                    <ul className={`space-y-2 text-gray-400 ${index % 2 === 0 ? "md:items-end" : "md:items-start"} flex flex-col`}>
                                        {phase.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                {index % 2 !== 0 && <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full" />}
                                                {item}
                                                {index % 2 === 0 && <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full hidden md:block" />}
                                                {/* Mobile dot for left side */}
                                                {index % 2 === 0 && <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full md:hidden" />}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
