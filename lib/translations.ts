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
            taglinePrefix: "Powered by",
            taglineSuffix: "",
            title1: "Lightning",
            title2: "Strikes",
            subtitle: "The Future of Prediction Markets on",
            subtitleHighlight: "Bitcoin Layer 2",
            launch: "Launch App",
            ecosystem: "Ecosystem",
        },
        vision: {
            title: "Reinventing",
            highlight: "Consensus",
            description1: "BitFlash is not just a prediction platform; it represents the evolution of truth. By leveraging the Bitcoin Lightning Network, we restore the original promise of decentralized consensus—fast, fair, and immutable.",
            description2: "We are building a world where information markets are as liquid as water and as fast as light. No gatekeepers, no delays, just pure market efficiency."
        },
        ecosystem: {
            title: "Join the",
            subtitle: "A unified liquidity layer across multiple applications, powered by the BitBoom protocol.",
            p1: { title: "BitFlash Predict", desc: "The core prediction market DApp. Trade on sports, crypto prices, and global events." },
            p2: { title: "Flash SDK", desc: "Developer tools to integrate prediction markets into any game or social app." },
            p3: { title: "Boom Nodes", desc: "Run a verification node to earn yield from market settlements." },
            p4: { title: "Liquid Bridge", desc: "Seamless asset swapping between Bitcoin L1, Lightning, and RGB assets." },
        },
        technology: {
            title: "Under the",
            highlight: "Hood",
            p1: { title: "Bitcoin Lightning Network", desc: "Built on top of Bitcoin's Layer 2 for millisecond-latency settlements and near-zero fees." },
            p2: { title: "Discreet Log Contracts (DLCs)", desc: "Oracle-based smart contracts that execute directly on the Bitcoin blockchain without a third party." },
            p3: { title: "Taproot Assets & RGB", desc: "Issuing stablecoins and tokens directly on Bitcoin, secured by Proof-of-Work." },
            p4: { title: "Nostr Protocol Relay", desc: "Decentralized social transport layer for order books and reputation data." },
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
            supply: "2.1 Billion Supply",
            title: "Deflationary",
            titleHighlight: "Tokenomics",
            desc: "$FLSH is the fuel of the Lightning Prediction Network. Burned with every market creation.",
            legend: {
                mining: "Hashrate Mining (40%)",
                liquidity: "Liquidity Pool (20%)",
                eco: "Ecosystem Fund (20%)",
                community: "Community (15%)",
                team: "Team (5%)",
            }
        },
        roadmap: {
            title: "Strategic Roadmap",
            p1: { phase: "Q1 2026", title: "Consensus & Foundation", items: ["Whitepaper Release", "BitBoom Launchpad IDO", "Community Cold Start", "Lightning Network Integration"] },
            p2: { phase: "Q2 2026", title: "Hashrate & Network", items: ["Node Verification Mining", "Sentinel Watchtower Deployment", "Initial Oracle Partnerships", "BitScore System Beta"] },
            p3: { phase: "H2 2026", title: "Testnet & MVP", items: ["BitFlash Predict Live (Testnet)", "SportRadar API Integration", "DAO Governance Framework", "Public Beta Testing"] },
            p4: { phase: "2027", title: "Mainnet Explosion", items: ["Mainnet Launch", "CEX Listings ($FLSH)", "Social Prediction Client (Nostr)", "Global Marketing Campaign"] },
        },
        footer: {
            desc: "The First Gamified Prediction Market on Bitcoin Lightning Network.",
            poweredByPrefix: "BitFlash Network. Powered by",
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
            taglinePrefix: "由",
            taglineSuffix: "驱动",
            title1: "闪电",
            title2: "未来",
            subtitle: "构建在比特币二层的",
            subtitleHighlight: "下一代预测市场",
            launch: "启动应用",
            ecosystem: "BitBoom 生态",
        },
        vision: {
            title: "重塑",
            highlight: "共识",
            description1: "BitFlash 远不止于预测市场，它是真理发现机制的终极进化。基于比特币闪电网络，我们重拾去中心化共识的初心——极速、公平、不可篡改。",
            description2: "我们正在构建一个如水般流动、如光般迅捷的信息市场。无许可准入，零延迟结算，唯有纯粹的市场效率。"
        },
        ecosystem: {
            title: "加入",
            subtitle: "由 BitBoom 协议驱动的跨应用统一流动性层。",
            p1: { title: "BitFlash 预测", desc: "核心预测市场 DApp。交易体育赛事、加密货币价格和全球事件。" },
            p2: { title: "Flash SDK", desc: "将预测市场集成到任何游戏或社交应用中的开发者工具。" },
            p3: { title: "Boom 节点", desc: "运行验证节点并从市场结算中赚取收益。" },
            p4: { title: "流动性桥", desc: "比特币 L1、闪电网络和 RGB 资产之间的无缝资产交换。" },
        },
        technology: {
            title: "底层",
            highlight: "技术",
            p1: { title: "比特币闪电网络", desc: "建立在比特币二层之上，实现毫秒级结算和近乎零的费用。" },
            p2: { title: "离散对数合约 (DLCs)", desc: "基于预言机的智能合约，直接在比特币区块链上执行，无需第三方。" },
            p3: { title: "Taproot Assets & RGB", desc: "直接在比特币上发行稳定币和代币，由工作量证明 (PoW) 保护。" },
            p4: { title: "Nostr 协议中继", desc: "用于订单簿和声誉数据的去中心化社交传输层。" },
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
            supply: "21 亿 供应量",
            title: "通缩型",
            titleHighlight: "代币经济",
            desc: "$FLSH 是闪电预测网络的燃料。每次创建市场都会销毁代币。",
            legend: {
                mining: "算力挖矿 (40%)",
                liquidity: "流动性底池 (20%)",
                eco: "生态基金 (20%)",
                community: "社区奖励 (15%)",
                team: "开发团队 (5%)",
            }
        },
        roadmap: {
            title: "战略路线图",
            p1: { phase: "2026 第一季度", title: "共识与基础", items: ["发布白皮书", "BitBoom Launchpad IDO", "社区冷启动", "闪电网络集成"] },
            p2: { phase: "2026 第二季度", title: "算力与网络", items: ["节点验证挖矿", "哨塔部署", "早期预言机合作", "BitScore 系统 Beta"] },
            p3: { phase: "2026 下半年", title: "测试网与 MVP", items: ["BitFlash 预测市场 (测试网)", "SportRadar API 集成", "DAO 治理框架", "公开 Beta 测试"] },
            p4: { phase: "2027", title: "主网爆发", items: ["主网发布", "CEX 上市 ($FLSH)", "社交预测客户端 (Nostr)", "全球营销活动"] },
        },
        footer: {
            desc: "比特币闪电网络上的首个游戏化预测市场。",
            poweredByPrefix: "BitFlash Network. Powered by",
        }
    }
};
