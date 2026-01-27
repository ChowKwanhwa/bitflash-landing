"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { defineChain } from "viem";
import { LanguageProvider } from "./LanguageContext";

// Define a custom chain for "Bitcoin Network" simulation
// Since we are using EVM wallets, this is a visual simulation to match requirements.
const bitcoinChain = defineChain({
    id: 100000001, // Custom Chain ID
    name: "Bitcoin Network",
    nativeCurrency: {
        decimals: 8,
        name: "Bitcoin",
        symbol: "BTC",
    },
    rpcUrls: {
        default: { http: ["https://rpc.ankr.com/btc"] }, // Dummy RPC
    },
    blockExplorers: {
        default: { name: "Mempool", url: "https://mempool.space" },
    },
});

import { unisatWallet, bitPocketWallet } from "./CustomWallets";
import {
    metaMaskWallet,
    rainbowWallet,
    walletConnectWallet,
    okxWallet,
    tokenPocketWallet,
    coinbaseWallet,
} from '@rainbow-me/rainbowkit/wallets';

const config = getDefaultConfig({
    appName: "BitFlash Landing Page",
    projectId: "YOUR_PROJECT_ID", // Non-functional placeholder
    chains: [bitcoinChain, mainnet, polygon, optimism, arbitrum, base],
    ssr: true,
    wallets: [
        {
            groupName: 'Recommended',
            wallets: [
                unisatWallet,
                bitPocketWallet,
                metaMaskWallet,
                okxWallet,
                tokenPocketWallet,
                rainbowWallet,
                walletConnectWallet,
                coinbaseWallet
            ],
        },
    ],
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    theme={darkTheme({
                        accentColor: '#FFD700', // Gold accent
                        accentColorForeground: 'black',
                        borderRadius: 'medium',
                    })}
                >
                    <LanguageProvider>
                        {children}
                    </LanguageProvider>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
