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
        // Since Unisat is not an EVM wallet, this is a mock connector to allow it to appear in the UI.
        // In a real app, you would use a dedicated Bitcoin adapter or wrapper.
        return createdMockConnector(walletDetails);
    },
});

export const bitPocketWallet = (): Wallet => ({
    id: 'bitpocket',
    name: 'BitPocket',
    iconUrl: 'https://tokenpocket.pro/favicon.ico', // Assuming similar to TokenPocket for now or custom
    iconBackground: '#2980b9',
    downloadUrls: {
        chrome: 'https://www.bitpocket.im/', // Hypothetical URL or actual if known
        android: 'https://www.bitpocket.im/',
        ios: 'https://www.bitpocket.im/',
    },
    createConnector: (walletDetails) => {
        return createdMockConnector(walletDetails);
    },
});


// Helper to create a mock EVM connector so the wallet shows up
function createdMockConnector(walletDetails: any) {
    // We use the 'injected' connector as a base, targeting a non-existent property to avoid conflict
    // or just standard injected if we want it to try connecting to window.ethereum
    return injected({ target: 'metaMask' }); // Fallback to standard injection logic or fail gracefully
}
