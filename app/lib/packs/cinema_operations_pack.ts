
import type { PremiumPack } from "@/lib/premium-packs";

export const cinema_operations_pack: PremiumPack = {
    id: 'cinema_operations_pack',
    title: "Cinema Operating System",
    priceINR: 799,
    priceUSD: 9,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/0acf829c-e492-4f66-ae74-0231bfe0bc82',
    category: "Entertainment & Events",
    description: "The definitive Sovereign v4.4 engine for cinema groups. Hardening 150+ control points from Projection QC to Concession Yield.",
    heroHeadline: "Stop Projection Failures and Catastrophic Safety Gaps",
    heroSubheadline: "Track technical readiness, monitor auditorium standards, and stay in control—across 100+ technical control points.",
    pricingUrgency: "A single projection failure during a blockbuster opening or one safety lapse costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "popcorn",
    badgeText: "V4.4 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Multiplex Owners", "Heads of Cinema Operations", "General Managers", "Technical Directors", "F&B Directors"],
    sampleItems: [
        { text: "<strong>Projection & Sound QC</strong>: Test DCP ingest and KDM validity 4 hours pre-release.", icon: "projector" },
        { text: "<strong>VIP Lounge & Luxury</strong>: Zero-fail service standards for premium seating zones.", icon: "crown" },
        { text: "<strong>F&B Profit Shield</strong>: Popcorn yield tracking and combo sales reconciliation.", icon: "banknote" },
        { text: "<strong>Housekeeping & Hygiene</strong>: Hourly washroom logs and deep-clean audits between shows.", icon: "sparkles" },
        { text: "<strong>EHS & Life Safety</strong>: Daily fire exit and emergency lighting tests.", icon: "hard-hat" },
        { text: "<strong>Digital Command (ORM)</strong>: 24h response for Google/Zomato movie-goer reviews.", icon: "globe" },
        { text: "<strong>Institutional Memory</strong>: Capture technical 'know-how' for Day 1 operator readiness.", icon: "history" }
    ],
    checklists: [
        {
            title: "Projection & Sound QC",
            department: "Technical",
            frequency: "Per Show",
            role: "Technical Lead",
            summary: "Zero-fail protocols for digital media and sound separation.",
            icon: "projector",
            tasks: [
                { id: "CIN-PRO-01", description: "Pre-Show Vitals: Test DCP ingest and KDM validity 4 hours pre-release.", priority: "High", riskLevel: "High", consequence: "Black screen during premiere.", proof: "System Log" },
                { id: "CIN-PRO-02", description: "Sound Separation: Verify 7.1/Atmos channel parity.", priority: "High", riskLevel: "Medium", consequence: "Poor audience experience.", proof: "Dial Check" },
                { id: "CIN-PRO-03", description: "Projector Cooling: Verify exhaust-fan RPM and temp logs.", priority: "High", riskLevel: "High", consequence: "Projector bulb explosion.", proof: "Temp Reading" }
            ]
        },
        {
            title: "F&B Concession & Yield",
            department: "F&B",
            frequency: "Daily",
            role: "Receiving Lead",
            summary: "Profit protection for high-margin snacks.",
            icon: "banknote",
            tasks: [
                { id: "CIN-FNB-01", description: "Popcorn Yield: Reconcile seed weight against bag sales.", priority: "High", riskLevel: "Medium", consequence: "High internal wastage/theft.", proof: "Yield Sheet" },
                { id: "CIN-FNB-02", description: "Verify combo-deal pricing parity on digital menus.", priority: "Medium", riskLevel: "Low", consequence: "Customer disputes at counter.", proof: "Price Audit" }
            ]
        },
        {
            title: "VIP Lounge & Luxury Service",
            department: "Service",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Maintains the premium cinema standard.",
            icon: "crown",
            tasks: [
                { id: "CIN-VIP-01", description: "Inspect recliner motor functionality and cleanliness.", priority: "High", riskLevel: "Medium", consequence: "Refund risk for premium guests.", proof: "Visual Check" },
                { id: "CIN-VIP-02", description: "Verify availability of VIP service buttons and tablets.", priority: "Medium", riskLevel: "Low", consequence: "Luxury service failure.", proof: "Test Log" }
            ]
        },
        {
            title: "Housekeeping & Hygiene",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Facility Manager",
            summary: "Sanitation governance for auditoriums and restrooms.",
            icon: "sparkles",
            tasks: [
                { id: "CIN-HK-01", description: "Audit washroom cleaning logs: verify 1-hour frequency.", priority: "High", riskLevel: "Low", consequence: "Major review driver.", proof: "Hourly Sheet" },
                { id: "CIN-HK-02", description: "Deep-clean audit: Inspect seat cup-holders and flooring.", priority: "High", riskLevel: "Medium", consequence: "Pest attraction risk.", proof: "Photo Audit" }
            ]
        },
        {
            title: "EHS & Life Safety",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Occupational health and fire safety protocols.",
            icon: "hard-hat",
            tasks: [
                { id: "CIN-EHS-01", description: "Verify all fire-exits are unblocked and panic-bars functional.", priority: "High", riskLevel: "High", consequence: "Entrapment tragedy.", proof: "Patrol Log" },
                { id: "CIN-EHS-02", description: "Test emergency floor-lighting and step-illumination.", priority: "High", riskLevel: "High", consequence: "Slip/fall during blackout.", proof: "Test Log" }
            ]
        },
        {
            title: "Financial Shield & Box Office",
            department: "Finance",
            frequency: "Daily",
            role: "Accountant",
            summary: "Revenue protection for ticket sales.",
            icon: "banknote",
            tasks: [
                { id: "CIN-FIN-01", description: "Reconcile BookMyShow/Paytm payouts against POS reports.", priority: "High", riskLevel: "High", consequence: "Unidentified portal leakage.", proof: "System Reconcile" },
                { id: "CIN-FIN-02", description: "Log daily bank cash deposit for physical counter sales.", priority: "High", riskLevel: "High", consequence: "Internal cash theft.", proof: "Deposit Slip" }
            ]
        },
        {
            title: "Digital Command & ORM",
            department: "Marketing",
            frequency: "Daily",
            role: "Admin Manager",
            summary: "Protects the cinema's online reputation.",
            icon: "globe",
            tasks: [
                { id: "CIN-DIG-01", description: "Reply to Google movie-goer reviews in < 24 hours.", priority: "High", riskLevel: "Medium", consequence: "Lower online ranking.", proof: "Review Dashboard" },
                { id: "CIN-DIG-02", description: "Monitor Twitter/Instagram mentions for technical complaints.", priority: "High", riskLevel: "Medium", consequence: "Viral brand damage.", proof: "Inbox Clear" }
            ]
        },
        {
            title: "Management Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "Strategic oversight of cinema performance.",
            icon: "crown",
            tasks: [
                { id: "CIN-EXE-01", description: "Review 'Empire Mood' and Group shift progress.", priority: "High", riskLevel: "Low", consequence: "Operational drift.", proof: "Dashboard Review" },
                { id: "CIN-EXE-02", description: "Audit Incident Log for unresolved safety alerts.", priority: "High", riskLevel: "High", consequence: "Legal liability.", proof: "Incident Audit" }
            ]
        }
    ]
};
