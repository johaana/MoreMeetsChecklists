
import type { PremiumPack } from "@/lib/premium-packs";

export const logistics_warehouse_pack: PremiumPack = {
    id: 'logistics_warehouse_pack',
    title: "Logistics & Warehouse Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f48201fb-a708-43ac-a508-7381c32f55c5',
    category: "Industrial & Transport",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the professional plug for inventory shrinkage and supply chain accidents.",
    heroHeadline: "Stop Nine-Figure Inventory Shrinkage and Fatal Safety Gaps",
    heroSubheadline: "Track warehouse safety, monitor stock integrity, and stay in control of your supply chain—even when you’re not on the floor.",
    pricingUrgency: "A single warehouse accident or one major inventory discrepancy costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "warehouse",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Warehouse Managers", "Logistics Heads", "Supply Chain Directors", "3PL Providers", "Facility Operations Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Floor Pulse</strong>: Your ground team updates safety and stock status in seconds. Zero-friction daily reporting.", icon: "timer" },
        { text: "<strong>Multi-Site Switchboard</strong>: Run your entire distribution network from one master file. Toggle zone modules ON or OFF.", icon: "layout-grid" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show managers exactly what needs sign-off—from MHE safety to loading bays.", icon: "shield-check" },
        { text: "<strong>Inventory Integrity Engine</strong>: Bulletproof protocols for cycle counting and serialized tracking to eliminate the 'disappearance' of assets.", icon: "barcode" },
        { text: "<strong>Institutional Memory</strong>: Capture technical 'know-how' so that even with high worker turnover, your safety standard remains constant.", icon: "history" },
        { text: "<strong>Revenue Protection</strong>: Identify operational failures that lead to 'dead stock', damaged returns, and forced contract penalties.", icon: "banknote" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your supply chain data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Warehouse Safety & MHE Check",
            department: "Operations",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Ensures all material handling equipment and floor areas are safe for operations.",
            icon: "hard-hat",
            tasks: [
                { id: "LOG-SAFE-01", description: "Perform pre-use inspection of all forklifts and reach-trucks (brakes, tires, hydraulics).", priority: "High", riskLevel: "High", consequence: "Catastrophic forklift accident and worker fatality.", proof: "Operator Sign-off" },
                { id: "LOG-SAFE-02", description: "Verify all warehouse aisles and emergency exits are clear of pallets and obstructions.", priority: "High", riskLevel: "High", consequence: "Blocked escape routes during fire or emergency evacuation.", proof: "Walkthrough Log" },
                { id: "LOG-SAFE-03", description: "Check that all charging stations are properly ventilated and fire extinguishers are accessible.", priority: "High", riskLevel: "High", consequence: "Hydrogen gas buildup and explosion hazard.", proof: "Visual Check" },
                { id: "LOG-SAFE-04", description: "Inspect pallet racking for any signs of impact or structural damage.", priority: "High", riskLevel: "High", consequence: "Progressive racking collapse leading to total inventory loss and injury.", proof: "Structural Audit" },
                { id: "LOG-SAFE-05", description: "Ensure all staff in the operational zone are wearing correct PPE (Safety shoes, vests).", priority: "High", riskLevel: "Medium", consequence: "Preventable injury and worker's compensation liability.", proof: "Daily Audit" },
                { id: "LOG-SAFE-06", description: "Log all forklift battery charging/swapping times.", priority: "Medium", riskLevel: "Low", consequence: "Equipment downtime and reduced operational throughput.", proof: "MHE Log" },
                { id: "LOG-SAFE-07", description: "Verify functionality of convex mirrors and reversing alarms.", priority: "High", riskLevel: "Medium", consequence: "Blind-spot collisions between MHE and pedestrians.", proof: "Test Log" },
                { id: "LOG-SAFE-08", description: "Confirm spill kits are stocked and positioned correctly.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental contamination and slip-and-fall hazards.", proof: "Inventory Check" },
                { id: "LOG-SAFE-09", description: "Conduct a brief safety 'Toolbox Talk' with the morning shift.", priority: "High", riskLevel: "Low", consequence: "Low safety awareness and drift in operational discipline.", proof: "Briefing Log" },
                { id: "LOG-SAFE-10", description: "Verify final lock-up and status of loading bay shutters.", priority: "High", riskLevel: "High", consequence: "Store left vulnerable to unauthorized entry and burglary.", proof: "Security Check" }
            ]
        }
    ]
};
