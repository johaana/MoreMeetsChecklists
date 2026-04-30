import type { PremiumPack } from "@/lib/premium-packs";

export const retail_operations_system: PremiumPack = {
    id: 'retail_operations_system',
    title: "Retail Operations System",
    priceINR: 2999,
    priceUSD: 29,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Retail",
    description: "The definitive Sovereign v11.9 technical engine for physical retail. A unified system for Fashion, Jewelry, Electronics, and Grocery—standardizing 250+ technical control points across 12 distinct roles.",
    heroHeadline: "One Engine. Twelve Specialized Role Profiles.",
    heroSubheadline: "The professional plug for revenue leakage and brand drift—across every unit in your retail group.",
    pricingUrgency: "Preventing a single major theft or one brand-damaging customer incident saves 100x the cost of this system.",
    consultingAnchor: 5000,
    icon: "shopping-bag",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Retail Group Owners", "Store Managers", "Visual Merchandisers", "Loss Prevention Directors", "Regional Managers"],
    sampleItems: [
        { text: "<strong>Sovereign Mode Selector</strong>: Toggle between High-Value (Jewelry), Perishable (Grocery), or Technical (Electronics) modules.", icon: "settings-2" },
        { text: "<strong>Visual Merchandising Engine</strong>: Planogram parity audits, window display QC, and lighting standards.", icon: "eye" },
        { text: "<strong>Asset Shield Engine</strong>: Zero-fail protocols for Vault access, serialized tracking, and Fitting Room loss prevention.", icon: "shield-check" },
        { text: "<strong>Inventory Integrity</strong>: Daily cycle counts, expiry sweep logic, and 'Void-Bill' authorization to stop internal theft.", icon: "barcode" },
        { text: "<strong>Maintenance & Assets</strong>: Rigorous uptime logs for POS hardware, AC banks, and security gate calibration.", icon: "wrench" },
        { text: "<strong>Institutional Memory</strong>: Built-in Trainer's Notes ensure that standards never leave when your best manager resigns.", icon: "history" }
    ],
    checklists: [
        {
            title: "Global Retail Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Group Operations Director",
            summary: "Portfolio-wide risk and profit oversight for multi-unit retail groups.",
            icon: "crown",
            tasks: [
                { id: "RET-EXE-01", technicalProtocol: "Inventory Shrinkage Synthesis", floorAction: "Review weekly stock discrepancy logs across all branches.", priority: "High", riskLevel: "High", consequence: "Unmonitored systemic internal theft.", proof: "Shrinkage Report" },
                { id: "RET-EXE-02", technicalProtocol: "Statutory Metrology Audit", floorAction: "Verify validity of weighing scale calibration certs for all units.", priority: "High", riskLevel: "Medium", consequence: "Heavy regulatory fines and equipment seizure.", proof: "Certificate Registry" },
                { id: "RET-EXE-03", technicalProtocol: "Public Liability Shield", floorAction: "Confirm active insurance coverage for 100% of retail sites.", priority: "High", riskLevel: "High", consequence: "Financial ruin during a customer accident.", proof: "Policy File" },
                { id: "RET-EXE-10", technicalProtocol: "Final Board Sign-off", floorAction: "Execute weekly strategic closure initials.", priority: "High", riskLevel: "Low", consequence: "Loss of executive oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Store Readiness & Command",
            department: "Operations",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Ensures the facility is safe, presentable, and operationally hardened before opening.",
            icon: "sunrise",
            tasks: [
                { id: "RET-OPS-01", technicalProtocol: "Lobby Ambiance Sensory Audit", floorAction: "Check Scent, Music, and Temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor guest first-impression.", proof: "Daily Log" },
                { id: "RET-OPS-02", technicalProtocol: "POS & Connectivity Sync", floorAction: "Verify all billing terminals and receipt printers are online.", priority: "High", riskLevel: "Medium", consequence: "Billing failure during morning rush.", proof: "System Screen" },
                { id: "RET-OPS-03", technicalProtocol: "Cash Float Integrity", floorAction: "Verify opening cash denominations in all cashier drawers.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue leakage.", proof: "Float Sheet" },
                { id: "RET-OPS-10", technicalProtocol: "Closing Gas/Thermal Seal", floorAction: "Verify all non-essential power and gas valves are SHUT.", priority: "High", riskLevel: "High", consequence: "Overnight fire disaster.", proof: "Closure Log" }
            ]
        }
    ]
};
