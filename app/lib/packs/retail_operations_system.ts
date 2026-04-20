
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
    description: "The definitive Sovereign v11.9 technical engine for physical retail. A unified system for Fashion, Jewelry, Electronics, and Grocery—standardizing 200+ control points.",
    heroHeadline: "Stop Inventory Shrinkage and Brand Standards Drift",
    heroSubheadline: "The professional plug for revenue leakage and asset safety—across every unit in your retail group.",
    pricingUrgency: "Preventing a single major theft or one regulatory METROLOGY fine saves 100x the cost of this system.",
    consultingAnchor: 5000,
    icon: "shopping-bag",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Retail Group Owners", "Store Managers", "Operations Heads", "Loss Prevention Directors", "Regional Managers"],
    sampleItems: [
        { text: "<strong>Sovereign Mode Selector</strong>: Toggle between High-Value (Jewelry), Perishable (Grocery), or Technical (Electronics) modules.", icon: "settings-2" },
        { text: "<strong>Asset Shield Engine</strong>: Zero-fail protocols for Vault access, serialized tracking, and Fitting Room loss prevention.", icon: "shield-check" },
        { text: "<strong>Inventory Integrity</strong>: Daily cycle counts, expiry sweep logic, and 'Void-Bill' authorization to stop internal theft.", icon: "barcode" },
        { text: "<strong>Safety & Thermal Pulse</strong>: Mandatory daily checks for lithium battery swelling and electrical bank closing seals.", icon: "zap" },
        { text: "<strong>Visual QC & Ambiance</strong>: Planogram parity audits and sensory branding (Scent/Music) scores to protect brand rankings.", icon: "eye" },
        { text: "<strong>Institutional Memory</strong>: Built-in Trainer's Notes ensure that standards never leave when your best manager resigns.", icon: "history" }
    ],
    checklists: [
        {
            title: "Store Readiness & Command",
            department: "Operations",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Ensures the facility is safe, presentable, and operationally hardened before opening.",
            icon: "sunrise",
            tasks: [
                { id: "RET-OPS-01", technicalProtocol: "Lobby Ambiance Sensory Audit", floorAction: "Check Scent, Music, and Temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor guest first-impression.", proof: "Daily Log" },
                { id: "RET-OPS-02", technicalProtocol: "POS & Connectivity Sync", floorAction: "Verify all billing terminals and receipt printers are online.", priority: "High", riskLevel: "Medium", consequence: "Billing failure during morning rush.", proof: "System Screen" },
                { id: "RET-OPS-03", technicalProtocol: "Cash Float Integrity", floorAction: "Verify opening cash denominations in all cashier drawers.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue leakage.", proof: "Float Sheet" },
                { id: "RET-OPS-04", technicalProtocol: "Visual QC Planogram Audit", floorAction: "Verify window display matches current campaign signage.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution and missed promos.", proof: "Photo" },
                { id: "RET-OPS-05", technicalProtocol: "Closing Gas/Thermal Seal", floorAction: "Verify all non-essential power and gas valves are SHUT.", priority: "High", riskLevel: "High", consequence: "Overnight fire disaster.", proof: "Closure Log" }
            ]
        },
        {
            title: "Asset Shield & Loss Prevention",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardening the perimeter and protecting high-value inventory.",
            icon: "shield-check",
            tasks: [
                { id: "RET-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and focal points.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or suits.", proof: "System Screen" },
                { id: "RET-SEC-02", technicalProtocol: "EAS Security Gate Test", floorAction: "Walk a test-tag through main entry to verify alarm.", priority: "High", riskLevel: "High", consequence: "Unchecked shoplifting of tagged goods.", proof: "Test Log" },
                { id: "RET-SEC-03", technicalProtocol: "High-Value 'Swap' Protocol", floorAction: "Verify 1-item-at-a-time viewing policy at Jewelry/Tech counters.", priority: "High", riskLevel: "High", consequence: "Sophisticated substitution theft.", proof: "Supervisor Audit" },
                { id: "RET-SEC-04", technicalProtocol: "Fitting Room Sweep", floorAction: "Inspect stalls every 30 mins for hidden tags or debris.", priority: "Medium", riskLevel: "Medium", consequence: "Concealment theft or unhygienic experience.", proof: "Hourly Sheet" },
                { id: "RET-SEC-05", technicalProtocol: "Vault Dual-Sign Logic", floorAction: "Witness witnessed lock of high-value inventory safe.", priority: "High", riskLevel: "High", consequence: "Internal theft of master stock.", proof: "Dual-Sign Log" }
            ]
        },
        {
            title: "Inventory & Profit Integrity",
            department: "Inventory",
            frequency: "Daily",
            role: "Inventory Lead",
            summary: "Profit protection and supply chain governance.",
            icon: "barcode",
            tasks: [
                { id: "RET-INV-01", technicalProtocol: "Blind Cycle Count (Top 5 SKUs)", floorAction: "Physical count of highest value items vs. POS data.", priority: "High", riskLevel: "High", consequence: "Undetected silent shrinkage.", proof: "Count Sheet" },
                { id: "RET-INV-02", technicalProtocol: "Expiry Sweep / Markdown Sync", floorAction: "Identify items within 30 days of expiry for markdown.", priority: "High", riskLevel: "Medium", consequence: "100% financial write-off or legal fines.", proof: "Sweep Log" },
                { id: "RET-INV-03", technicalProtocol: "Receiving Weight Validation", floorAction: "Test store scales with 1kg standard weight before receiving.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing supplier stock.", proof: "Calibration Log" },
                { id: "RET-INV-04", technicalProtocol: "Cold Chain Integrity (Grocery)", floorAction: "Log temperatures of all open-deck chillers (< 5°C).", priority: "High", riskLevel: "High", consequence: "Mass spoilage and health department shutdown.", proof: "Temp Log" },
                { id: "RET-INV-05", technicalProtocol: "Void Bill Authorization", floorAction: "Manager sign-off on 100% of shift cancellations.", priority: "High", riskLevel: "High", consequence: "Theft masked as billing errors.", proof: "POS Audit" }
            ]
        }
    ]
};
