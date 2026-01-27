"use client";

import Link from "next/link";
import { Twitter, Send, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    return (
        <footer className="bg-black border-t border-[var(--color-primary)]/20 py-12 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--color-primary)]/5 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">

                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <span className="text-3xl font-bold italic tracking-tighter text-white">
                            BIT<span className="text-[var(--color-primary)]">FLASH</span>
                        </span>
                        <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
                            {t.footer.desc}
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <Link href="https://x.com/BitFlashNetwork" target="_blank" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:scale-110 transform duration-200">
                            <Twitter className="w-6 h-6" />
                        </Link>
                        <Link href="https://t.me/bitflash_network" target="_blank" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:scale-110 transform duration-200">
                            <Send className="w-6 h-6" />
                        </Link>
                        <Link href="https://bitflash.pro" target="_blank" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors hover:scale-110 transform duration-200">
                            <Globe className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© {currentYear} {t.footer.poweredByPrefix} <a href="https://bitboom.fun" target="_blank" className="hover:text-[var(--color-primary)] hover:underline transition-all">BitBoom</a>.</p>
                </div>
            </div>
        </footer>
    );
}
