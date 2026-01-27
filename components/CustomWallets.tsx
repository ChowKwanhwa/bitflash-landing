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
            ...injected()(config),
            ...walletDetails,
            id: 'unisat',
            name: 'Unisat',
            type: 'injected',
            connect: async (parameters) => {
                const unisat = (window as any).unisat;
                if (!unisat) {
                    window.open('https://unisat.io/download', '_blank');
                    throw new Error('Unisat wallet not found');
                }
                try {
                    const accounts = await unisat.requestAccounts();
                    const btcAddress = accounts[0];
                    // Mock an EVM address for Wagmi internal state compatibility
                    // In a real app we would use a dedicated Bitcoin adapter, but this allows the UI to proceed
                    // Browser-safe string to hex
                    const hex = btcAddress.split('').map((c: string) => c.charCodeAt(0).toString(16)).join('');
                    const mockAddress = `0x${hex.padEnd(40, '0').slice(0, 40)}`;

                    return {
                        accounts: [mockAddress as `0x${string}`] as const,
                        chainId: 100000001, // Custom Bitcoin Chain ID
                    };
                } catch (e) {
                    throw e;
                }
            },
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

