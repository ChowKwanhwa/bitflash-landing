"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Gift, Download, ExternalLink, ArrowRight, Wallet } from "lucide-react";
import Image from "next/image";

// Pricing Tier Data
export const PRICING_TIERS = [
    {
        price: "500",
        value: "700",
        description: "Starter Node - 1.4x Value",
        color: "var(--color-secondary)",
    },
    {
        price: "1,000",
        value: "1,500",
        highlight: true,
        description: "Pro Node - 1.5x Value",
        color: "var(--color-primary)",
    },
    {
        price: "3,000",
        value: "5,000",
        description: "Genesis Node - 1.66x Value",
        color: "var(--color-accent)",
    },
];

// Subscription Steps
export const STEPS = [
    {
        title: "下载钱包",
        titleEn: "Download Wallet",
        desc: "访问 BitPocket 官网下载闪电网络钱包。",
        icon: <Download className="w-6 h-6" />,
        link: "https://www.bitdance.network/bitpocket.html",
    },
    {
        title: "选择节点级别",
        titleEn: "Choose Tier",
        desc: "根据预算选择 500, 1000 或 3000 USD 等级的节点。",
        icon: <Shield className="w-6 h-6" />,
    },
    {
        title: "转账指定金额",
        titleEn: "Transfer Funds",
        desc: "将 USDT 或 BTC 转入官方归集钱包地址。",
        icon: <Wallet className="w-6 h-6" />,
    },
    {
        title: "提交截图凭证",
        titleEn: "Submit Proof",
        desc: "将转账截图凭证发送给社区长或官方客服。",
        icon: <ExternalLink className="w-6 h-6" />,
    },
    {
        title: "等待权益发放",
        titleEn: "Receive NFT",
        desc: "上线后将在钱包收到对应的 NFT 权益凭证。",
        icon: <Gift className="w-6 h-6" />,
    },
];

export function TutorialHero() {
    return (
        <div className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/tutorial-hero.png"
                    alt="Node Network"
                    fill
                    className="object-cover brightness-50 contrast-125 print:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black print:opacity-0" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center mb-8"
                >
                    <div className="relative w-24 h-24 mb-6 rounded-2xl overflow-hidden border-2 border-[var(--color-primary)] shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                        <Image
                            src="/logo.jpg"
                            alt="Flash Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <Zap className="w-4 h-4 text-[var(--color-primary)]" />
                        <span className="text-xs font-mono uppercase tracking-widest text-gray-400"> Protocol Genesis</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-black uppercase italic italic-glow mb-6 max-w-4xl mx-auto leading-tight"
                >
                    【重磅首发】比特币原生生态 <br />
                    Flash<span className="marvel-gradient">“算能协议”</span>节点预售公告
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light"
                >
                    参与算力革命，成为比特币计算资产层的先驱。跟随本指南轻松完成节点申购。
                </motion.p>
            </div>
        </div>
    );
}

export function PricingTierCard({ tier }: { tier: typeof PRICING_TIERS[0] }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`frosted-glass p-8 flex flex-col items-center text-center relative overflow-hidden ${tier.highlight ? 'border-[var(--color-primary)] shadow-[0_0_30px_rgba(255,215,0,0.2)]' : ''}`}
        >
            {tier.highlight && (
                <div className="absolute top-4 right-4 animate-pulse">
                    <Zap className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
            )}
            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-4">Subscription</h3>
            <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold">$</span>
                <span className="text-6xl font-black tracking-tighter">{tier.price}</span>
            </div>
            <div className="text-[var(--color-primary)] font-mono text-sm mb-6">
                获得价值 ${tier.value} 算力
            </div>
            <p className="text-gray-500 text-sm italic">{tier.description}</p>
        </motion.div>
    );
}

export function StepFlow() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {STEPS.map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group h-full"
                >
                    <div className="frosted-glass p-6 h-full flex flex-col items-center text-center group-hover:bg-white/5 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-[var(--color-primary)] ring-1 ring-white/10 group-hover:scale-110 transition-transform">
                            {step.icon}
                        </div>
                        <div className="text-xs font-mono text-gray-500 mb-2">STEP 0{i + 1}</div>
                        <h4 className="text-white font-bold mb-2">{step.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                        {step.link && (
                            <a href={step.link} target="_blank" className="mt-4 text-[var(--color-secondary)] inline-flex items-center gap-1 text-xs hover:underline">
                                点击下载 <ArrowRight className="w-3 h-3" />
                            </a>
                        )}
                    </div>
                    {i < STEPS.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-20 opacity-20">
                            <ArrowRight className="w-8 h-8 text-[var(--color-primary)]" />
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
