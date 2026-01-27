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
                <div className="hidden md:flex items-center space-x-4">
                    <button
                        onClick={toggleLanguage}
                        className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-primary transition-colors"
                        aria-label="Toggle Language"
                    >
                        <Globe className="w-5 h-5" />
                    </button>
                    <ConnectButton
                        accountStatus="address"
                        chainStatus="icon"
                        showBalance={false}
                    />
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
                        <ConnectButton />
                    </div>
                </div>
            )}
        </header>
    );
}
