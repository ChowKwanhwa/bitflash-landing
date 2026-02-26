"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function TutorialPage() {
    const { language } = useLanguage();
    const isZh = language === "zh";

    const content = {
        title: isZh ? "Flash 参与教程" : "Flash Participation Tutorial",
        subtitle: isZh ? "本教程包含 BitPocket 钱包安装及 Flash 代币购买流程" : "This tutorial covers BitPocket wallet installation and Flash token purchase process",
        part1: {
            title: isZh ? "第一部分：安装 BitPocket 钱包 (移动端)" : "Part 1: Install BitPocket Wallet (Mobile)",
            steps: [
                {
                    title: isZh ? "下载并安装 App" : "Download and Install App",
                    desc: null,
                    linkText: isZh ? "下载地址：" : "Download URL:",
                    linkUrl: "https://www.bitdance.network/bitpocket.html",
                    tip: isZh ? "苹果手机请下载 TestFlight 版本；安卓手机直接下载 APK 安装包。" : "For iPhone, please download TestFlight version; For Android, download APK directly.",
                    imgSrc: "/截图/1下载BitPocket安装包.png",
                    imgAlt: "下载BitPocket安装包"
                },
                {
                    title: isZh ? "创建新钱包" : "Create New Wallet",
                    desc: isZh ? "打开 App，选择“创建新钱包”。如果您已有助记词，也可以选择“导入钱包”。" : "Open App, select \"Create New Wallet\". If you already have a seed phrase, you can select \"Import Wallet\".",
                    imgSrc: "/截图/2创建或导入钱包页面.png",
                    imgAlt: "创建或导入钱包页面"
                },
                {
                    title: isZh ? "设置安全密码" : "Set Security Password",
                    desc: isZh ? "设置一个安全的密码，用于日常解锁钱包。" : "Set a secure password for daily wallet unlocking.",
                    imgSrc: "/截图/3设置密码.png",
                    imgAlt: "设置密码"
                },
                {
                    title: isZh ? "备份助记词 (重要)" : "Backup Seed Phrase (Important)",
                    desc: isZh ? "请务必手抄助记词并妥善保管！不要截图，不要发送给任何人。" : "Please write down your seed phrase and keep it safe! Do not screenshot or send to anyone.",
                    warn: true,
                    imgSrc: "/截图/4备份助记词.png",
                    imgAlt: "备份助记词"
                },
                {
                    title: isZh ? "获取充值地址" : "Get Deposit Address",
                    desc: isZh ? "进入钱包主页，点击“收款”按钮，获取您的 Taproot 比特币地址（以 bc1p 开头）。" : "Go to wallet home, click \"Receive\" button to get your Taproot Bitcoin address (starts with bc1p).",
                    imgSrc: "/截图/5钱包界面点击收款获得充值地址.png",
                    imgAlt: "充值地址"
                }
            ]
        },
        part2: {
            title: isZh ? "第二部分：购买 Flash 代币" : "Part 2: Buy Flash Token",
            steps: [
                {
                    title: isZh ? "进入 BitBoom 平台" : "Enter BitBoom Platform",
                    desc: isZh ? "打开 BitPocket 钱包，点击底部的“发现”页面。在列表中点击 \"BitBoom.fun PRO\" 进入平台。" : "Open BitPocket wallet, click \"Discovery\" tab at the bottom. Click \"BitBoom.fun PRO\" in the list to enter the platform.",
                    imgSrc: "/截图/7进入BitBoom平台.png",
                    imgAlt: "进入BitBoom平台"
                },
                {
                    title: isZh ? "连接钱包" : "Connect Wallet",
                    desc: isZh ? "点击页面右上角的 \"Connect Wallet\" 按钮，选择 BitPocket 钱包进行连接。" : "Click \"Connect Wallet\" button at the top right, select BitPocket wallet to connect.",
                    imgSrc: "/截图/8连接钱包.png",
                    imgAlt: "连接钱包"
                },
                {
                    title: isZh ? "选择 Flash 代币" : "Select Flash Token",
                    desc: isZh ? "在列表中找到 Flash 代币，或者直接在搜索框搜索。点击进入交易详情页。" : "Find Flash token in the list, or search directly. Click to enter trading details.",
                    imgSrc: "/截图/9点击Flash代币进入购买.png",
                    imgAlt: "选择Flash代币"
                },
                {
                    title: isZh ? "购买代币" : "Buy Token",
                    descHtml: isZh ? "1. 输入您想要购买的金额（SATS单位）。<br/>2. 设置滑点（建议 2% 或更高以确保成功）。<br/>3. 点击 \"Buy Flash\" 按钮确认交易。" : "1. Enter the amount you want to buy (in SATS).<br/>2. Set slippage (Recommend 2% or higher to ensure success).<br/>3. Click \"Buy Flash\" button to confirm.",
                    imgSrc: "/截图/10购买页面.png",
                    imgAlt: "购买界面"
                }
            ]
        }
    };

    return (
        <main className="min-h-screen bg-black pt-24 pb-32 relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--color-primary)]/5 via-black to-black z-0 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <Link href="/" className="inline-flex items-center text-gray-400 hover:text-[var(--color-primary)] transition-colors gap-2 font-medium tracking-wide">
                        <ArrowLeft className="w-5 h-5" />
                        {isZh ? "返回首页" : "Back Home"}
                    </Link>
                </motion.div>

                {/* Hero Banner Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(255,215,0,0.1)] group"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 mix-blend-multiply pointer-events-none" />
                    <Image
                        src="/tutorial_hero_banner.png"
                        alt="Tutorial Banner"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        priority
                    />
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-center mb-20 md:mb-32 relative"
                >
                    <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-6 drop-shadow-lg">
                        {content.title}
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
                        {content.subtitle}
                    </p>
                    <div className="absolute left-1/2 -top-1/2 -translate-x-1/2 w-full max-w-lg aspect-square bg-[var(--color-primary)]/10 blur-[100px] rounded-full pointer-events-none -z-10" />
                </motion.div>

                {/* Part 1 */}
                <div className="mb-32">
                    <div className="flex items-center justify-center gap-6 mb-20">
                        <div className="h-[1px] w-12 md:w-32 bg-[var(--color-primary)]/40" />
                        <h2 className="text-xl md:text-3xl font-bold text-[var(--color-primary)] tracking-widest text-center">
                            {content.part1.title}
                        </h2>
                        <div className="h-[1px] w-12 md:w-32 bg-[var(--color-primary)]/40" />
                    </div>

                    <div className="space-y-32">
                        {content.part1.steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
                            >
                                <div className={`flex flex-col ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                                    <div className="flex items-baseline gap-4 mb-8">
                                        <span className="text-6xl md:text-7xl italic font-black text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-primary)] to-yellow-600 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-bold text-white">
                                            {step.title}
                                        </h3>
                                    </div>

                                    {(step.desc || step.linkUrl) && (
                                        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 md:p-8 mb-6 shadow-xl">
                                            {step.desc && (
                                                <p className={`text-lg md:text-xl leading-relaxed ${step.linkUrl ? 'mb-6' : ''} ${step.warn ? 'text-red-400 font-bold' : 'text-gray-300 font-light'}`}>
                                                    {step.desc}
                                                </p>
                                            )}
                                            {step.linkUrl && (
                                                <>
                                                    <p className="text-gray-400 mb-2">{step.linkText}</p>
                                                    <a href={step.linkUrl} target="_blank" rel="noreferrer" className="text-[var(--color-primary)] break-all hover:underline flex items-center gap-2 font-mono text-lg md:text-xl font-bold">
                                                        {step.linkUrl}
                                                    </a>
                                                </>
                                            )}
                                        </div>
                                    )}

                                    {step.tip && (
                                        <div className="flex items-start gap-3 text-gray-400 italic font-light text-base md:text-lg">
                                            <span className="text-[var(--color-primary)] not-italic text-xl">💡</span>
                                            <p>{step.tip}</p>
                                        </div>
                                    )}
                                </div>

                                <div className={`relative flex justify-center w-full ${idx % 2 !== 0 ? 'md:order-1' : ''} group`}>
                                    <Image
                                        src={step.imgSrc}
                                        alt={step.imgAlt}
                                        width={400}
                                        height={800}
                                        className={`w-auto h-auto max-w-full max-h-[600px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105 ${idx % 2 !== 0 ? 'group-hover:-rotate-2' : 'group-hover:rotate-2'}`}
                                        unoptimized
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Part 2 */}
                <div className="mb-20">
                    <div className="flex items-center justify-center gap-6 mb-20">
                        <div className="h-[1px] w-12 md:w-32 bg-[var(--color-primary)]/40" />
                        <h2 className="text-xl md:text-3xl font-bold text-[var(--color-primary)] tracking-widest text-center">
                            {content.part2.title}
                        </h2>
                        <div className="h-[1px] w-12 md:w-32 bg-[var(--color-primary)]/40" />
                    </div>

                    <div className="space-y-32">
                        {content.part2.steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
                            >
                                <div className={`flex flex-col ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                                    <div className="flex items-baseline gap-4 mb-8">
                                        <span className="text-6xl md:text-7xl italic font-black text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-primary)] to-yellow-600 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-2xl md:text-4xl font-bold text-white">
                                            {step.title}
                                        </h3>
                                    </div>

                                    {(step.desc || step.descHtml) && (
                                        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 md:p-8 mb-6 shadow-xl">
                                            {step.desc && (
                                                <p className="text-lg md:text-xl font-light text-gray-300 leading-relaxed">
                                                    {step.desc}
                                                </p>
                                            )}
                                            {step.descHtml && (
                                                <div
                                                    className="text-lg md:text-xl font-light text-gray-300 leading-relaxed space-y-3"
                                                    dangerouslySetInnerHTML={{ __html: step.descHtml }}
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className={`relative flex justify-center w-full ${idx % 2 !== 0 ? 'md:order-1' : ''} group`}>
                                    <Image
                                        src={step.imgSrc}
                                        alt={step.imgAlt}
                                        width={400}
                                        height={800}
                                        className={`w-auto h-auto max-w-full max-h-[600px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105 ${idx % 2 !== 0 ? 'group-hover:-rotate-2' : 'group-hover:rotate-2'}`}
                                        unoptimized
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
