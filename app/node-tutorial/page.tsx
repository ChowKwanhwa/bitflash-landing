"use client";

import { motion } from "framer-motion";
import { TutorialHero, PricingTierCard, StepFlow, PRICING_TIERS } from "@/components/TutorialComponents";
import { Shield, CreditCard, Info, MapPin, TrendingUp, Gift } from "lucide-react";
import Image from "next/image";

export default function NodeTutorial() {
    return (
        <main className="min-h-screen print:min-h-0 bg-black text-white">
            {/* Hero Section */}
            <TutorialHero />

            {/* Concept Section */}
            <section className="py-24 bg-gradient-to-b from-black to-[#050505]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-6xl font-black mb-8 italic italic-glow">
                                    什么是算能协议节点？ <br />
                                    <span className="marvel-gradient tracking-tighter uppercase font-black text-transparent bg-clip-text">WHAT IS SUANNENG NODE?</span>
                                </h2>
                                <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                                    <p>
                                        算能协议（Suanneng Protocol）是构建于比特币主网之上的算力金融协议，通过 Taproot 与闪电网络，打造比特币的计算资产层。
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            { title: "算力聚合者", desc: "接入并管理分散在全球的算力资源。" },
                                            { title: "网络验证者", desc: "参与网络共识，确保交易及计算任务的可信执行。" },
                                            { title: "生态贡献者", desc: "通过提供稳定服务，获得协议层面的算力奖励。" },
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4">
                                                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-3" />
                                                <div>
                                                    <strong className="text-white">{item.title}</strong>：{item.desc}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                        <div className="w-full md:w-1/2 relative h-[400px]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,transparent_70%)] opacity-20 blur-3xl animate-pulse" />
                            <div className="absolute inset-0 border border-white/10 rounded-3xl overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <div className="relative w-full h-full">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 border-2 border-dashed border-white/5 rounded-full"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-48 h-48 rounded-3xl bg-black border border-[var(--color-primary)] shadow-[0_0_50px_rgba(255,215,0,0.3)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                                <Shield className="w-24 h-24 text-[var(--color-primary)]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Details */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-primary)]/5 blur-3xl pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic">预售节点信息 / Presale Info</h2>
                        <div className="h-1 w-24 marvel-gradient mx-auto mb-8" />
                        <div className="flex flex-wrap justify-center gap-8 text-sm font-mono text-gray-500 uppercase tracking-widest">
                            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" /> 全网总量: 10,000 Nodes</div>
                            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /> 认购方式: USDT (BSC/TRC) / BTC</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {PRICING_TIERS.map((tier, i) => (
                            <PricingTierCard key={i} tier={tier} />
                        ))}
                    </div>

                    <div className="frosted-glass p-8 max-w-4xl mx-auto border-l-4 border-l-[var(--color-secondary)]">
                        <div className="flex items-start gap-6">
                            <Info className="w-8 h-8 text-[var(--color-secondary)] flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold mb-2">预售特别提示</h4>
                                <p className="text-gray-400 leading-relaxed italic">
                                    本次预售为创世轮（Genesis Round），所有认购节点均享受额外的算力赠送。剩余 500 个节点将保留用于后续生态激励及社区空投，暂不开放预售。
                                    <br />
                                    <strong className="text-white">开售时间：</strong>2026年3月8日 14:00 PM (UTC+8)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Node Rights Section */}
            <section className="py-24 bg-zinc-950">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black mb-16 text-center italic uppercase">节点权益 / NODE RIGHTS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "算力挖矿收益", desc: "根据节点持有的算力凭证，每日获得协议原生代币 $Flash 的产出奖励。", icon: <TrendingUp className="w-8 h-8" /> },
                            { title: "网络治理权", desc: "创世节点自动获得 DAO 投票权，参与协议参数调整及生态基金决策。", icon: <Shield className="w-8 h-8" /> },
                            { title: "预测交易手续费分红", desc: "享受全网预测交易市场产生的手续费一定比例的分红收益。", icon: <CreditCard className="w-8 h-8" /> },
                            { title: "生态空投", desc: "优先获得后续基于算能协议孵化的生态项目空投，并享受后续权益。", icon: <Gift className="w-8 h-8" /> },
                        ].map((right, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-6 p-8 bg-black/50 border border-white/5 hover:border-[var(--color-primary)]/30 transition-colors"
                            >
                                <div className="flex-shrink-0 text-[var(--color-primary)]">{right.icon}</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-3">{right.title}</h4>
                                    <p className="text-gray-500 leading-relaxed font-light">{right.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscription Flow */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic">申购流程 / WORKFLOW</h2>
                        <p className="text-gray-500 font-mono tracking-widest">Follow these steps to secure your node</p>
                    </div>

                    <StepFlow />

                    <div className="mt-20 frosted-glass p-8">
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="w-full md:w-1/2">
                                <h4 className="text-2xl font-black mb-8 flex items-center gap-3">
                                    <MapPin className="text-[var(--color-primary)]" />
                                    指定支付地址
                                </h4>
                                <div className="space-y-6">
                                    {[
                                        { label: "BSC-20 (USDT)", addr: "0x48e5CdC04463B279F0d1E03a4f0092671d45c80B" },
                                        { label: "TRC-20 (USDT)", addr: "TPgMyW7tbmTuZJ6o46KDAkLQ37d6ukGiKa" },
                                        { label: "BTC (Taproot)", addr: "bc1phjvzgr24ydqpm9fw6tfxytcch2xeuy576hhefv62mszx8zgnalvsjzek7v" },
                                        { label: "Lightning Network", addr: "bc1phjvzgr24ydqpm9fw6tfxytcch2xeuy576hhefv62mszx8zgnalvsjzek7v@bitboom.fun" },
                                    ].map((wallet, i) => (
                                        <div key={i} className="group">
                                            <div className="text-xs font-mono text-gray-500 uppercase mb-2">{wallet.label}</div>
                                            <div className="bg-white/5 p-4 rounded text-sm font-mono break-all border border-white/10 group-hover:border-[var(--color-primary)]/50 transition-colors">
                                                {wallet.addr}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <div className="p-8 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent border border-[var(--color-primary)]/20 rounded-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-20">
                                        <Shield className="w-24 h-24" />
                                    </div>
                                    <h4 className="text-2xl font-black mb-4">申购凭证说明</h4>
                                    <ul className="space-y-4 text-gray-400 mb-8 list-inside list-disc">
                                        <li>支付款项后，请务必将转账截图凭证发给社区长（对接人）。</li>
                                        <li>上线后将在钱包中收到对应的 NFT 权益凭证。</li>
                                        <li>主网开启后，持 NFT 可 1:1 兑换主网节点。</li>
                                        <li><strong className="text-[var(--color-primary)]">开启算力 2.4 倍收益。</strong></li>
                                    </ul>
                                    <a
                                        href="https://t.me/bitflash_network"
                                        target="_blank"
                                        className="w-full py-4 bg-[var(--color-primary)] text-black font-black text-center uppercase tracking-widest block hover:bg-yellow-400 transition-all rounded-none"
                                        style={{ clipPath: "polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0 30%)" }}
                                    >
                                        联系官方客服 / CONTACT SUPPORT
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <section className="py-24 bg-black border-t border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black uppercase italic mb-8"
                    >
                        JOIN THE <span className="marvel-gradient">REVOLUTION</span>
                    </motion.div>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <a href="https://bitboom.fun" target="_blank" className="px-12 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-gray-200 transition-all">Launch BitBoom</a>
                        <a href="https://x.com/BitFlashNetwork" target="_blank" className="px-12 py-4 border border-white/20 hover:bg-white/5 transition-all font-black uppercase tracking-widest">Follow Twitter</a>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .italic-glow {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }
      `}</style>
        </main>
    );
}
