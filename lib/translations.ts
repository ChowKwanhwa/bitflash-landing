export type Language = "en" | "zh";

export const translations = {
    en: {
        nav: {
            vision: "Vision",
            ecosystem: "Ecosystem",
            technology: "Technology",
            roadmap: "Roadmap",
            launchApp: "Launch App",
        },
        hero: {
            tagline: "Powered by BitBoom",
            title1: "Lightning",
            title2: "Strikes",
            subtitle: "The Future of Prediction Markets on",
            subtitleHighlight: "Bitcoin Layer 2",
            launch: "Launch App",
            ecosystem: "Ecosystem",
        },
        features: {
            title: "Why",
            titleHighlight: "BitFlash?",
            subtitle: "The next generation of prediction markets, built on the most secure blockchain in the world.",
            f1: { title: "Sub-Second Settlement", desc: "Payouts settle instantly to your non-custodial wallet via Lightning Network. No waiting, no trust." },
            f2: { title: "Private Micro-Betting", desc: "Bet as little as 1 Satoshi (~$0.001). 100% anonymous with Onion Routing and DLCs." },
            f3: { title: "Institutional Liquidity", desc: "Deep liquidity pools powered by BitBoom ensuring you can always take the other side." },
            f4: { title: "Social Reputation", desc: "Build your 'BitScore' on Nostr. Prove your prediction skills without doxxing your identity." },
        },
        tokenomics: {
            supply: "21 Billion Supply",
            title: "Deflationary",
            titleHighlight: "Tokenomics",
            desc: "$FLSH is the fuel of the Lightning Prediction Network. Burned with every market creation.",
            legend: {
                mining: "Hashrate Mining",
                liquidity: "Liquidity Pool",
                eco: "Eco Fund",
                community: "Community",
                team: "Team",
            }
        },
        roadmap: {
            title: "Strategic Roadmap",
            p1: { phase: "H1 2026", title: "Consensus & Foundation", items: ["Whitepaper Release", "BitBoom Launchpad IDO", "Community Cold Start", "Lightning Network Integration"] },
            p2: { phase: "H1 2026", title: "Hashrate & Network", items: ["Node Verification Mining", "Sentinel Watchtower Deployment", "Initial Oracle Partnerships", "BitScore System Beta"] },
            p3: { phase: "H2 2026", title: "Testnet & MVP", items: ["BitFlash Predict Live (Testnet)", "SportRadar API Integration", "DAO Governance Framework", "Public Beta Testing"] },
            p4: { phase: "H2 2026", title: "Mainnet Explosion", items: ["Mainnet Launch", "CEX Listings ($FLSH)", "Social Betting Client (Nostr)", "Global Marketing Campaign"] },
        },
        footer: {
            desc: "The First Gamified Prediction Market on Bitcoin Lightning Network.",
            poweredBy: "BitFlash Network. Powered by BitBoom.",
        }
    },
    zh: {
        nav: {
            vision: "愿景",
            ecosystem: "生态",
            technology: "技术",
            roadmap: "路线图",
            launchApp: "启动应用",
        },
        hero: {
            tagline: "由 BitBoom 驱动",
            title1: "闪电",
            title2: "未来",
            subtitle: "构建在比特币二层的",
            subtitleHighlight: "下一代预测市场",
            launch: "启动应用",
            ecosystem: "BitBoom 生态",
        },
        features: {
            title: "为什么选择",
            titleHighlight: "BitFlash?",
            subtitle: "基于世界上最安全的区块链构建的下一代预测市场。",
            f1: { title: "秒级结算", desc: "通过闪电网络即时结算到您的非托管钱包。无需等待，无需信任。" },
            f2: { title: "隐私微额投注", desc: "最低 1 聪 (~$0.001) 起投。通过洋葱路由和 DLC 协议实现 100% 匿名。" },
            f3: { title: "机构级流动性", desc: "由 BitBoom 驱动的深度流动性池，确保您随时可以进行对冲交易。" },
            f4: { title: "社交声誉系统", desc: "在 Nostr 上建立您的 'BitScore'。在不暴露身份的情况下证明您的预测能力。" },
        },
        tokenomics: {
            supply: "210 亿 供应量",
            title: "通缩型",
            titleHighlight: "代币经济",
            desc: "$FLSH 是闪电预测网络的燃料。每次创建市场都会销毁代币。",
            legend: {
                mining: "算力挖矿",
                liquidity: "流动性底池",
                eco: "生态基金",
                community: "社区奖励",
                team: "开发团队",
            }
        },
        roadmap: {
            title: "战略路线图",
            p1: { phase: "2026 上半年", title: "共识与基础", items: ["发布白皮书", "BitBoom Launchpad IDO", "社区冷启动", "闪电网络集成"] },
            p2: { phase: "2026 上半年", title: "算力与网络", items: ["节点验证挖矿", "哨塔部署", "早期预言机合作", "BitScore 系统 Beta"] },
            p3: { phase: "2026 下半年", title: "测试网与 MVP", items: ["BitFlash 预测市场 (测试网)", "SportRadar API 集成", "DAO 治理框架", "公开 Beta 测试"] },
            p4: { phase: "2026 下半年", title: "主网爆发", items: ["主网发布", "CEX 上市 ($FLSH)", "社交博彩客户端 (Nostr)", "全球营销活动"] },
        },
        footer: {
            desc: "比特币闪电网络上的首个游戏化预测市场。",
            poweredBy: "BitFlash Network. Powered by BitBoom.",
        }
    }
};
