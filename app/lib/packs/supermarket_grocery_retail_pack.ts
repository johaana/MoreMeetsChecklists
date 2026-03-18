
import type { PremiumPack } from "@/lib/premium-packs";

export const supermarket_grocery_retail_pack: PremiumPack = {
    id: 'supermarket_grocery_retail_pack',
    title: "Grocery & Supermarket Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d6d4dd85-3fb9-4c26-8ec3-cb021ddebfdc',
    category: "Retail",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the definitive plug for inventory shrinkage and cold-chain failures.",
    heroHeadline: "Eliminate Food Spoilage and Health Department Closures",
    heroSubheadline: "Track cold-chain integrity, monitor expiry sweeps, and protect your margins—even when you’re not there.",
    pricingUrgency: "A single refrigeration failure or one expired item lawsuit costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "shopping-basket",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Supermarket Managers", "Retail GMs", "Inventory Directors", "Food Safety Officers", "Regional Ops Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Pulse Reporting</strong>: Floor staff update shelf and fridge status in seconds. Zero-friction daily discipline.", icon: "timer" },
        { text: "<strong>Cold-Chain Governance</strong>: Rigorous, auditable temperature logs for chillers, freezers, and walk-ins.", icon: "thermometer" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show managers exactly what needs sign-off—from weighing scales to hygiene.", icon: "shield-check" },
        { text: "<strong>Expiry Sweep Engine</strong>: A systematic daily process to identify and markdown items before they become write-offs.", icon: "recycle" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure that even with high retail turnover, your safety standards stay with the business.", icon: "history" },
        { text: "<strong>Legal Metrology Audit</strong>: Weekly calibration checks for weighing scales to ensure regulatory compliance.", icon: "scale" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your operational data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Cold Chain & Freshness",
            department: "Operations",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Ensures the freshness and safety of all temperature-sensitive products.",
            icon: "thermometer",
            tasks: [
                { id: "SC-COLD-01", description: "Log temperatures of all open-deck chillers and closed freezers.", priority: "High", riskLevel: "High", consequence: "Bacterial growth, massive inventory spoilage, and health department fines.", proof: "Digital Log" },
                { id: "SC-COLD-02", description: "Perform a morning 'Expiry Sweep' of the dairy and poultry sections.", priority: "High", riskLevel: "High", consequence: "Selling expired perishables leading to lawsuits and brand damage.", proof: "Sweep Report" },
                { id: "SC-COLD-03", description: "Check all produce for signs of wilting, bruising, or mold.", priority: "Medium", riskLevel: "Low", consequence: "Negative customer impression and lower shelf conversion.", proof: "Visual Check" },
                { id: "SC-COLD-04", description: "Verify all refrigerated unit drains are clear and free of leaks.", priority: "High", riskLevel: "Medium", consequence: "Water spills creating slip-and-fall hazards for customers.", proof: "Visual Check" },
                { id: "SC-COLD-05", description: "Ensure FIFO (First-In, First-Out) is applied to all shelf restocks.", priority: "High", riskLevel: "High", consequence: "Older stock getting buried and becoming a 100% financial loss.", proof: "Restock Audit" },
                { id: "SC-COLD-06", description: "Test backup generator and UPS for cold-storage alarms.", priority: "High", riskLevel: "High", consequence: "Total inventory loss during an overnight power failure.", proof: "Test Log" },
                { id: "SC-COLD-07", description: "Verify pricing on fresh-weight items matches the POS database.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes at checkout and margin errors.", proof: "Price Check" },
                { id: "SC-COLD-08", description: "Check that all hand-washing stations in the fresh area are stocked.", priority: "High", riskLevel: "Medium", consequence: "Foodborne illness transmission via staff handling.", proof: "Visual Check" },
                { id: "SC-COLD-09", description: "Sanitize all high-touch surfaces (trolleys, baskets, handles).", priority: "Medium", riskLevel: "Low", consequence: "Poor store hygiene and cross-contamination risk.", proof: "Cleaning Log" },
                { id: "SC-COLD-10", description: "Final manager walkthrough and sign-off on department readiness.", priority: "High", riskLevel: "High", consequence: "Gaps in daily discipline leading to cumulative profit leakage.", proof: "Manager Initials" }
            ]
        }
    ]
};
