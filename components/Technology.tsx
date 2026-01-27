"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Terminal, Shield, Workflow, Code2, Bitcoin } from "lucide-react";

export function Technology() {
    const { t } = useLanguage();

    const techStack = [
        {
            title: t.technology.p1.title,
            desc: t.technology.p1.desc,
            icon: <Bitcoin className="w-12 h-12 text-orange-500" />
        },
        {
            title: t.technology.p2.title,
            desc: t.technology.p2.desc,
            icon: <Shield className="w-12 h-12 text-blue-400" />
        },
        {
            title: t.technology.p3.title,
            desc: t.technology.p3.desc,
            icon: <Workflow className="w-12 h-12 text-purple-500" />
        },
        {
            title: t.technology.p4.title,
            desc: t.technology.p4.desc,
            icon: <Code2 className="w-12 h-12 text-green-500" />
        }
    ];

    return (
        <section id="technology" className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* Visual / Code Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">
                            {t.technology.title} <br />
                            <span className="text-[var(--color-secondary)]">{t.technology.highlight}</span>
                        </h2>

                        <div className="bg-zinc-900 rounded-xl p-6 border border-white/10 font-mono text-sm overflow-hidden relative shadow-2xl">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-gray-400 space-y-2">
                                <p><span className="text-purple-400">const</span> <span className="text-yellow-400">contract</span> = <span className="text-blue-400">new</span> <span className="text-green-400">DLC</span>({'{'} </p>
                                <p className="pl-4">oracle: <span className="text-orange-400">"BitFlash_Node_01"</span>,</p>
                                <p className="pl-4">asset: <span className="text-orange-400">"BTC_L2"</span>,</p>
                                <p className="pl-4">outcome: <span className="text-blue-400">await</span> oracle.verify(<span className="text-orange-400">"match_id"</span>)</p>
                                <p>{'}'});</p>
                                <p className="text-gray-500">// Transaction settles in 400ms via Lightning Network</p>
                                <p><span className="text-purple-400">await</span> contract.<span className="text-yellow-400">execute</span>();</p>
                            </div>

                            {/* Code Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--color-secondary)]/20 blur-[60px]" />
                        </div>
                    </motion.div>

                    {/* Tech List */}
                    <div className="w-full md:w-1/2 space-y-8">
                        {techStack.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="flex gap-6 group"
                            >
                                <div className="shrink-0 p-4 bg-zinc-900 border border-white/5 rounded-2xl group-hover:border-[var(--color-secondary)]/50 transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
