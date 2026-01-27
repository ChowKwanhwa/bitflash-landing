"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Zap, ShieldCheck, Users, Search, Activity } from "lucide-react";
import { MouseEvent } from "react";
import { useLanguage } from "./LanguageContext";

function FeatureCard({ feature, index }: { feature: any, index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className="group relative border border-white/10 bg-zinc-900/30 px-8 py-10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 215, 0, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            {/* Glow border on hover */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 215, 0, 0.3),
              transparent 40%
            )
          `,
                    maskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
                    maskComposite: `exclude`,
                    WebkitMaskComposite: `xor`,
                    padding: '1px' // This makes the gradient show only on border
                }}
            />

            <div className="relative flex flex-col items-center text-center">
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${feature.bgGradient} group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-${feature.shadowColor}/20`}>
                    {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-primary)] transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </motion.div>
    );
}

export function Features() {
    const { t } = useLanguage();

    const features = [
        {
            title: t.features.f1.title,
            description: t.features.f1.desc,
            icon: <Zap className="w-8 h-8 text-black" />,
            bgGradient: "from-yellow-400 to-yellow-600", // Gold
            shadowColor: "yellow-500"
        },
        {
            title: t.features.f2.title,
            description: t.features.f2.desc,
            icon: <Search className="w-8 h-8 text-black" />,
            bgGradient: "from-red-500 to-red-700", // Red (Marvel)
            shadowColor: "red-500"
        },
        {
            title: t.features.f3.title,
            description: t.features.f3.desc,
            icon: <Activity className="w-8 h-8 text-black" />, // Changed icon
            bgGradient: "from-blue-400 to-blue-600", // Blue
            shadowColor: "blue-500"
        },
        {
            title: t.features.f4.title,
            description: t.features.f4.desc,
            icon: <Users className="w-8 h-8 text-black" />,
            bgGradient: "from-purple-400 to-purple-600", // Purple
            shadowColor: "purple-500"
        }
    ];

    return (
        <section id="features" className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-secondary)]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight"
                    >
                        {t.features.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-white to-[var(--color-primary)] animate-gradient-x">{t.features.titleHighlight}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
                    >
                        {t.features.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
