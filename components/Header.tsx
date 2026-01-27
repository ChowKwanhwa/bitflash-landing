"use client";

import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "zh" : "en");
    };

    const navItems = ["vision", "ecosystem", "technology", "roadmap"] as const;

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo Section */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="relative w-10 h-10 rounded-full border border-primary/40 overflow-hidden group-hover:border-primary transition-all shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                        <Image
                            src="/logo.jpg"
                            alt="BitFlash Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-2xl font-bold italic tracking-tighter text-white group-hover:text-primary transition-colors">
                        BIT<span className="text-primary">FLASH</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={`#${item}`}
                            className="text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-primary hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.5)] transition-all"
                        >
                            {t.nav[item]}
                        </Link>
                    ))}
                </nav>

                {/* Actions: Language & Wallet */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-primary transition-colors"
                        aria-label="Toggle Language"
                    >
                        <Globe className="w-5 h-5" />
                    </button>
                    <ConnectButton.Custom>
                        {({
                            account,
                            chain,
                            openAccountModal,
                            openChainModal,
                            openConnectModal,
                            authenticationStatus,
                            mounted,
                        }) => {
                            const ready = mounted && authenticationStatus !== 'loading';
                            const connected =
                                ready &&
                                account &&
                                chain &&
                                (!authenticationStatus ||
                                    authenticationStatus === 'authenticated');

                            return (
                                <div
                                    {...(!ready && {
                                        'aria-hidden': true,
                                        'style': {
                                            opacity: 0,
                                            pointerEvents: 'none',
                                            userSelect: 'none',
                                        },
                                    })}
                                >
                                    {(() => {
                                        if (!connected) {
                                            return (
                                                <button onClick={openConnectModal} className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-primary transition-colors">
                                                    Connect Wallet
                                                </button>
                                            );
                                        }

                                        if (chain.unsupported || chain.id !== 100000001) {
                                            return (
                                                <button onClick={openChainModal} className="bg-red-500 text-white px-4 py-2 rounded-full font-bold hover:bg-red-600 transition-colors animate-pulse">
                                                    Switch to Bitcoin Network
                                                </button>
                                            );
                                        }

                                        // Mock Bitcoin address for display if strictly requiring a "BTC address" look for the demo
                                        // In a real app we'd fetch this from the wallet provider
                                        const btcAddress = `bc1q${account.address.slice(2, 6)}...${account.address.slice(-4)}`;

                                        return (
                                            <button onClick={openAccountModal} className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full font-bold hover:bg-white/20 transition-colors border border-primary/50">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                {btcAddress}
                                            </button>
                                        );
                                    })()}
                                </div>
                            );
                        }}
                    </ConnectButton.Custom>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleLanguage}
                        className="text-white hover:text-primary transition-colors"
                    >
                        <Globe className="w-5 h-5" />
                    </button>
                    <button
                        className="text-white hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-primary/20 py-8 px-4 flex flex-col space-y-6 animate-in slide-in-from-top-5">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href={`#${item}`}
                            className="text-2xl font-bold text-center text-white hover:text-primary uppercase tracking-wider"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.nav[item]}
                        </Link>
                    ))}
                    <div className="flex justify-center pt-4">
                        <ConnectButton.Custom>
                            {({
                                account,
                                chain,
                                openAccountModal,
                                openChainModal,
                                openConnectModal,
                                authenticationStatus,
                                mounted,
                            }) => {
                                const ready = mounted && authenticationStatus !== 'loading';
                                const connected =
                                    ready &&
                                    account &&
                                    chain &&
                                    (!authenticationStatus ||
                                        authenticationStatus === 'authenticated');

                                return (
                                    <div
                                        {...(!ready && {
                                            'aria-hidden': true,
                                            'style': {
                                                opacity: 0,
                                                pointerEvents: 'none',
                                                userSelect: 'none',
                                            },
                                        })}
                                        className="w-full"
                                    >
                                        {(() => {
                                            if (!connected) {
                                                return (
                                                    <button onClick={openConnectModal} className="w-full bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-primary transition-colors text-lg">
                                                        Connect Wallet
                                                    </button>
                                                );
                                            }

                                            if (chain.unsupported || chain.id !== 100000001) {
                                                return (
                                                    <button onClick={openChainModal} className="w-full bg-red-500 text-white px-4 py-2 rounded-full font-bold hover:bg-red-600 transition-colors animate-pulse">
                                                        Switch to Bitcoin Network
                                                    </button>
                                                );
                                            }

                                            const btcAddress = `bc1q${account.address.slice(2, 6)}...${account.address.slice(-4)}`;

                                            return (
                                                <button onClick={openAccountModal} className="w-full flex items-center justify-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full font-bold hover:bg-white/20 transition-colors border border-primary/50 text-lg">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                    {btcAddress}
                                                </button>
                                            );
                                        })()}
                                    </div>
                                );
                            }}
                        </ConnectButton.Custom>
                    </div>
                </div>
            )}
        </header>
    );
}
