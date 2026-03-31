
import type { PremiumPack } from "@/lib/premium-packs";

export const cinema_operations_pack: PremiumPack = {
    id: 'cinema_operations_pack',
    title: "Cinema Operating System",
    priceINR: 799,
    priceUSD: 9,
    category: "Entertainment & Events",
    description: "The Sovereign v4.4 engine for cinema groups. Hardening 150+ control points from Projection QC to Concession Yield.",
    heroHeadline: "Stop Projection Failures and Catastrophic Safety Gaps",
    heroSubheadline: "Track technical readiness, auditorium standards, and concesssion yields—across 150+ control points.",
    pricingUrgency: "A single projection failure during a blockbuster opening costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "popcorn",
    badgeText: "V4.4 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Multiplex Owners", "Operations Heads", "General Managers", "Technical Directors"],
    sampleItems: [
        { text: "<strong>Projection Sound QC</strong>: DCP ingest and KDM validity tests pre-release.", icon: "projector" },
        { text: "<strong>VIP Lounge Service</strong>: Zero-fail luxury seating and F&B service standards.", icon: "crown" },
        { text: "<strong>F&B Concession Yield</strong>: Popcorn weight reconciliation and combo sales audits.", icon: "banknote" },
        { text: "<strong>Housekeeping & Restroom</strong>: Hourly sanitation logs and seat-clean audits.", icon: "sparkles" },
        { text: "<strong>Digital ORM</strong>: 24h response for Google/BookMyShow reviews.", icon: "globe" }
    ],
    checklists: [
        {
            title: "Projection & Sound QC",
            department: "Technical",
            frequency: "Per Show",
            role: "Technical Lead",
            summary: "Zero-fail protocols for digital media.",
            icon: "projector",
            tasks: [
                { id: "CIN-PRO-01", description: "Pre-Show: Test DCP ingest and KDM validity 4 hours pre-release.", priority: "High", riskLevel: "High", consequence: "Black screen.", proof: "System Log" },
                { id: "CIN-PRO-02", description: "Sound Separation: Verify 7.1/Atmos channel parity.", priority: "High", riskLevel: "Medium", consequence: "Poor guest experience.", proof: "Dial Check" }
            ]
        }
    ]
};
