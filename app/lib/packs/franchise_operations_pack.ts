
import type { PremiumPack } from "@/lib/premium-packs";

export const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operations System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Franchise",
    description: "The definitive Sovereign v11.9 technical engine for multi-unit groups. Hardening 130 technical control points from Royalty protection to Franchisee Drift Detection.",
    icon: "store",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Franchise Group Owners", "Heads of Operations", "Regional Managers", "Brand Expansion Directors", "Franchisees"],
    sampleItems: [
        { text: "<strong>Royalty Leakage Shield</strong>: Daily void-bill audits and aggregator parity logs to protect your revenue stream.", icon: "banknote" },
        { text: "<strong>Brand Parity Engine</strong>: Mandatory sensory audits for Scent, Music, and Temp to ensure a identical guest experience.", icon: "eye" }
    ],
    checklists: [
        {
            title: "Global Brand Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Franchisor CEO",
            summary: "High-level strategic oversight of brand equity and royalty health.",
            icon: "crown",
            tasks: Array.from({ length: 15 }, (_, i) => ({
                id: `FR-CEO-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Audit week-to-date royalty collection vs POS sales.",
                    "Review 'Red' flags in Global Incident Registry.",
                    "Verify valid Public Liability insurance for all units.",
                    "Audit mystery shopper scores for brand parity.",
                    "Verify FSSAI/License validity matrix across network."
                ][i] || "Strategic network oversight.",
                priority: "High",
                riskLevel: "High",
                consequence: "Royalty leakage and systemic brand dilution.",
                proof: "Dashboard Note"
            }))
        },
        {
            title: "Safety & Compliance Control",
            department: "Safety",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Network-wide safety and hazard mitigation.",
            icon: "shield-alert",
            tasks: [
                { id: "FR-SAF-01", description: "Audit fire extinguisher pressure gauges across unit zones.", priority: "High", riskLevel: "High", consequence: "Fire suppression failure during crisis.", proof: "Gauge Log" },
                { id: "FR-SAF-02", description: "Verify first-aid field kits are fully stocked and valid.", priority: "High", riskLevel: "Medium", consequence: "Institution pays for neglect during accident.", proof: "Kit Inventory" },
                { id: "FR-SAF-03", description: "Inspect unit perimeters for waste buildup or blockage.", priority: "Medium", riskLevel: "Low", consequence: "Pest attraction and local authority fines.", proof: "Visual Check" },
                { id: "FR-SAF-04", description: "Execute infrared scan of main electrical panel banks.", priority: "High", riskLevel: "High", consequence: "Overnight short-circuit fire.", proof: "Scan Log" },
                { id: "FR-SAF-05", description: "Verify fire-exit path 100% clear and unlocked.", priority: "High", riskLevel: "High", consequence: "Fatal never-event entrapment.", proof: "Patrol Log" },
                { id: "FR-SAF-06", description: "Audit LOTO (Lock-out Tag-out) status for deep-fryers/HVAC.", priority: "High", riskLevel: "High", consequence: "Fatal maintenance accident.", proof: "Permit Registry" },
                { id: "FR-SAF-07", description: "Inspect chemical storage segregation (Acids vs Bases).", priority: "High", riskLevel: "High", consequence: "Toxic reaction / explosive hazard.", proof: "Storage Audit" },
                { id: "FR-SAF-08", description: "Test emergency light battery run-time (random sample).", priority: "Medium", riskLevel: "High", consequence: "Panic during power flip.", proof: "Test Note" },
                { id: "FR-SAF-09", description: "Conduct safety 'Toolbox Talk' for unit support teams.", priority: "Low", riskLevel: "Low", consequence: "Erosion of safety culture.", proof: "Briefing Log" },
                { id: "FR-SAF-10", description: "Execute EOD safety command sign-off.", priority: "High", riskLevel: "Low", consequence: "Systemic risk gap.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Unit Readiness Command",
            department: "Operations",
            frequency: "Daily",
            role: "Regional Manager",
            summary: "Site-level readiness and operational parity.",
            icon: "shield-check",
            tasks: Array.from({ length: 20 }, (_, i) => ({
                id: `FR-REG-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Verify 100% presence of Unit Managers by 9 AM.",
                    "Audit lobby ambiance remotely (CCTV + Temp).",
                    "Verify menu sync between POS and aggregators.",
                    "Audit restroom cleaning logs: check 60-min cycle.",
                    "Match daily cash-to-bank deposit slips.",
                    "Log 'Network Drift' alerts for local pricing errors."
                ][i] || "Regional operational command.",
                priority: "High",
                riskLevel: "Medium",
                consequence: "Slipping standards and inconsistent CX.",
                proof: "Audit Score"
            }))
        }
    ]
};
