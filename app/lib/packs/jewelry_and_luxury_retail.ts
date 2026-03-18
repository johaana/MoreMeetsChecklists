
import type { PremiumPack } from "@/lib/premium-packs";

export const jewelry_and_luxury_retail: PremiumPack = {
    id: 'jewelry_and_luxury_retail',
    title: "Luxury & Jewelry Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/bf8a35c9-991d-4471-95f6-e0c7ce285981',
    category: "Retail",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the definitive safeguard against sophisticated heists and fraud.",
    heroHeadline: "Stop Sophisticated Heists and High-Value 'Swap' Thefts",
    heroSubheadline: "Track vault protocols, monitor high-value transactions, and protect your inventory—even when you’re not on property.",
    pricingUrgency: "A single 'swap' theft or one major security breach costs 1,000x more than this entire system.",
    consultingAnchor: 10000,
    icon: "gem",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Jewelry Store Owners", "Luxury Brand Managers", "Asset Protection Directors", "Security Officers", "High-Value Retailers"],
    sampleItems: [
        { text: "<strong>Dual-Verification Vault Control</strong>: Enforce multi-person authorization for all inventory access to stop internal theft.", icon: "lock" },
        { text: "<strong>The 'Anti-Swap' Protocol</strong>: Rigorous procedures for showing items to customers to eliminate high-value substitution theft.", icon: "refresh-cw" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show managers exactly what needs sign-off—from case locks to overnight secure storage.", icon: "target" },
        { text: "<strong>Fraud Prevention Engine</strong>: Advanced KYC and ID verification steps for high-net-worth transactions.", icon: "user-check" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure that even with staff turnover, your security standards remain Fort-Knox grade.", icon: "history" },
        { text: "<strong>Asset Protection Hub</strong>: Serialized tracking for every diamond, watch, and high-value piece in your inventory.", icon: "barcode" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your security data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Vault & Case Security",
            department: "Security",
            frequency: "Daily",
            role: "Security Supervisor",
            summary: "Daily checks to ensure physical security measures are in place and functional.",
            icon: "lock",
            tasks: [
                { id: "JLR-SEC-01", description: "Perform dual-person vault opening and closing procedure.", priority: "High", riskLevel: "High", consequence: "Single-point failure for internal theft of entire inventory.", proof: "Dual-Sign Log" },
                { id: "JLR-SEC-02", description: "Verify all display cases are locked and the glass is untampered.", priority: "High", riskLevel: "High", consequence: "Smash-and-grab vulnerability and insurance claim rejection.", proof: "Visual Check" },
                { id: "JLR-SEC-03", description: "Conduct a serialized count of all items in top-tier display cases.", priority: "High", riskLevel: "High", consequence: "Missed detection of 'swap' thefts from previous shift.", proof: "Serialized Count Sheet" },
                { id: "JLR-SEC-04", description: "Test all panic buttons and silent alarms.", priority: "High", riskLevel: "High", consequence: "Inability to alert authorities during a robbery.", proof: "Alarm Test Log" },
                { id: "JLR-SEC-05", description: "Check CCTV focal points for any unauthorized camera movement or obstruction.", priority: "High", riskLevel: "High", consequence: "Loss of usable evidence for investigations.", proof: "CCTV Health Log" },
                { id: "JLR-SEC-06", description: "Verify secure storage of all loose stones and certifications.", priority: "High", riskLevel: "High", consequence: "High-value asset loss and administrative chaos.", proof: "Vault Inventory" },
                { id: "JLR-SEC-07", description: "Ensure all staff are following the 'One Item Only' viewing policy.", priority: "High", riskLevel: "High", consequence: "Distraction theft and 'swap' opportunities.", proof: "Supervisor Observation" },
                { id: "JLR-SEC-08", description: "Audit key cabinet and verify all keys are accounted for.", priority: "High", riskLevel: "High", consequence: "Unauthorized access to display inventory.", proof: "Key Inventory" },
                { id: "JLR-SEC-09", description: "Check status of vibration and motion sensors.", priority: "High", riskLevel: "High", consequence: "Undetected after-hours entry.", proof: "Sensor Status Log" },
                { id: "JLR-SEC-10", description: "Confirm final lock-up and armed status with the monitoring center.", priority: "High", riskLevel: "High", consequence: "Store left unmonitored overnight.", proof: "Call/Signal Confirmation" }
            ]
        }
    ]
};
