import { Wallet } from '@rainbow-me/rainbowkit';
import { injected } from 'wagmi/connectors';
import { createConnector } from 'wagmi';

// Placeholder icon for Unisat (using a generic orange one or an online URL if available)
const UNISAT_ICON = "https://unisat.io/logo/unisat.svg";
// Placeholder for BitPocket
const BITPOCKET_ICON = "https://lh3.googleusercontent.com/wFj3n4yW0N8M5G2_C4v5W0-k_W0_W0_W0_W0_W0_W0_W0_W0_W0_W0_W0_W0"; // Invalid, will fallback or use text

export const unisatWallet = (): Wallet => ({
    id: 'unisat',
    name: 'Unisat',
    iconUrl: 'https://unisat.io/img/favicon.ico',
    iconBackground: '#000000',
    downloadUrls: {
        chrome: 'https://unisat.io/download',
        browserExtension: 'https://unisat.io/download',
    },
    mobile: {
        getUri: (uri: string) => uri,
    },
    qrCode: {
        getUri: (uri: string) => uri,
        instructions: {
            learnMoreUrl: 'https://unisat.io/',
            steps: [
                {
                    description: 'We use Unisat for Bitcoin-native transactions.',
                    step: 'install',
                    title: 'Open Unisat Wallet',
                },
            ],
        },
    },
    createConnector: (walletDetails) => {
        return createConnector((config) => ({
            ...injected({ target: 'metaMask' })(config),
            ...walletDetails,
        }));
    },
});

export const bitPocketWallet = (): Wallet => ({
    id: 'bitpocket',
    name: 'BitPocket',
    iconUrl: '/bitpocket.png',
    iconBackground: '#000000', // Changed to match the likely dark aesthetic or logo background
    downloadUrls: {
        chrome: 'https://chromewebstore.google.com/detail/bitpocket/bcangfodoelomcmghogkjaoobgnhbbge',
        android: 'https://www.bitpocket.im/',
        ios: 'https://www.bitpocket.im/',
    },
    createConnector: (walletDetails) => {
        return createConnector((config) => ({
            ...injected({ target: 'metaMask' })(config),
            ...walletDetails,
        }));
    },
});

// Helper removed as we are inlining the logic for clarity and correctness

