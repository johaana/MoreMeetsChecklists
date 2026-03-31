
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
                { id: "CIN-PRO-01", description: "Pre-Show: Test DCP ingest and KDM validity 4 hours pre-release.", priority: "High", riskLevel: "High", consequence: "Black screen during blockbuster.", proof: "System Log" },
                { id: "CIN-PRO-02", description: "Sound Separation: Verify 7.1/Atmos channel parity.", priority: "High", riskLevel: "Medium", consequence: "Poor guest experience.", proof: "Dial Check" }
            ]
        },
        {
            title: "F&B Concession Yield",
            department: "Finance",
            frequency: "Daily",
            role: "Accountant",
            summary: "Protects high-margin F&B revenue.",
            icon: "banknote",
            tasks: [
                { id: "CIN-FNB-01", description: "Reconcile raw popcorn corn-to-bucket yield.", priority: "High", riskLevel: "Low", consequence: "Significant profit leakage.", proof: "Yield Sheet" }
            ]
        },
        {
            title: "VIP Lounge & Service",
            department: "Operations",
            frequency: "Per Show",
            role: "General Manager",
            summary: "Premium service standard governance.",
            icon: "crown",
            tasks: [
                { id: "CIN-VIP-01", description: "Verify recliner motor functionality in VIP rows.", priority: "Medium", riskLevel: "Low", consequence: "Refund request from premium guest.", proof: "Visual Test" }
            ]
        },
        {
            title: "Life Safety & EHS",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Ensures safe evacuation and fire-readiness.",
            icon: "hard-hat",
            tasks: [
                { id: "CIN-EHS-01", description: "Verify all auditorium fire-exits are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Institutional catastrophe.", proof: "Patrol Log" }
            ]
        },
        {
            title: "Housekeeping Command",
            department: "Janitorial",
            frequency: "Hourly",
            role: "Logistics Lead",
            summary: "Sanitation infrastructure command.",
            icon: "sparkles",
            tasks: [
                { id: "CIN-HK-01", description: "Audit auditorium seat-cleaning between shows.", priority: "High", riskLevel: "Low", consequence: "1-star review driver.", proof: "Sweep Log" }
            ]
        },
        {
            title: "Personnel & Training",
            department: "HR",
            frequency: "Monthly",
            role: "HR Manager",
            summary: "Staff certification and grooming.",
            icon: "users",
            tasks: [
                { id: "CIN-HR-01", description: "Verify grooming standards for front-of-house staff.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Digital ORM & Box Office",
            department: "Admin",
            frequency: "Daily",
            role: "Customer Experience Lead",
            summary: "Reputation and ticketing integrity.",
            icon: "globe",
            tasks: [
                { id: "CIN-BOX-01", description: "Review response: 100% BMS/Google review pulse.", priority: "High", riskLevel: "Medium", consequence: "Ranking drop.", proof: "Review Dashboard" }
            ]
        },
        {
            title: "Executive Group Command",
            department: "Executive",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "Strategic multi-unit oversight.",
            icon: "layout-grid",
            tasks: [
                { id: "CIN-EXE-01", description: "Audit group-wide F&B margin vs. ticket sales trends.", priority: "High", riskLevel: "Medium", consequence: "Undetected group inefficiency.", proof: "Financial Shield" }
            ]
        }
    ]
};
