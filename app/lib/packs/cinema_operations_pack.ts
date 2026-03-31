
import type { PremiumPack } from "@/lib/premium-packs";

export const cinema_operations_pack: PremiumPack = {
    id: 'cinema_operations_pack',
    title: "Cinema Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/0acf829c-e492-4f66-ae74-0231bfe0bc82',
    category: "Entertainment & Events",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.4 is the definitive plug for projection failures and safety gaps.",
    heroHeadline: "Stop Projection Failures and Catastrophic Safety Gaps",
    heroSubheadline: "Track technical readiness, monitor auditorium standards, and stay in control—across 100+ technical control points.",
    pricingUrgency: "A single projection failure during a blockbuster opening or one safety lapse costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "popcorn",
    badgeText: "V4.4 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Multiplex Owners", "Heads of Cinema Operations", "General Managers", "Technical Directors", "F&B Directors"],
    sampleItems: [
        { text: "<strong>2-Minute Technical Pulse</strong>: Projectionists and floor staff update status in seconds. Zero-friction daily reporting.", icon: "timer" },
        { text: "<strong>Show-Time Readiness</strong>: Bulletproof pre-screening protocols to ensure zero-fail projection and sound.", icon: "projector" },
        { text: "<strong>F&B Profit Shield</strong>: Rigorous logs for popcorn yield and combo sales reconciliation to stop revenue leakage.", icon: "banknote" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show managers exactly what needs sign-off.", icon: "target" },
        { text: "<strong>Institutional Memory</strong>: Capture technical 'know-how' so new operators are professional from Day 1.", icon: "history" },
        { text: "<strong>Multi-Screen Switchboard</strong>: Manage 1 to 20 screens from one master file. Toggle facilities per branch.", icon: "layout-grid" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own the control system forever.", icon: "lock" }
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
                { id: "CIN-PRO-01", description: "Pre-Show Vitals: Test DCP ingest and KDM validity 4 hours pre-release.", priority: "High", riskLevel: "High", consequence: "Black screen during premiere; massive refund risk.", proof: "System Log" },
                { id: "CIN-PRO-02", description: "Sound Separation: Verify 7.1/Atmos channel parity using test-tone.", priority: "High", riskLevel: "Medium", consequence: "Poor audience experience and reviews.", proof: "Dial Check" },
                { id: "CIN-PRO-03", description: "Projector Cooling: Verify exhaust-fan RPM and temp logs.", priority: "High", riskLevel: "High", consequence: "Projector bulb explosion and technical downtime.", proof: "Temp Reading" }
            ]
        },
        {
            title: "F&B Concessions & Yield",
            department: "F&B",
            frequency: "Daily",
            role: "Accountant",
            summary: "Popcorn yield tracking and combo reconciliation.",
            icon: "utensils",
            tasks: [
                { id: "CIN-FNB-01", description: "Popcorn Yield: Match raw corn usage to total tubs sold.", priority: "High", riskLevel: "Medium", consequence: "Silent profit leakage and internal theft.", proof: "Yield Sheet" },
                { id: "CIN-FNB-02", description: "Verify combo-promotion pricing matches POS database.", priority: "Medium", riskLevel: "Low", consequence: "Customer disputes at counter.", proof: "POS Audit" }
            ]
        },
        {
            title: "Auditorium & Exit Safety",
            department: "Operations",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Emergency exit push-bar and pathway light verification.",
            icon: "door-open",
            tasks: [
                { id: "CIN-SAFE-01", description: "Test emergency push-bars on all hall exits.", priority: "High", riskLevel: "High", consequence: "Fatal trap during emergency (Uphaar scenario).", proof: "Physical Log" },
                { id: "CIN-SAFE-02", description: "Audit floor-level pathway lighting status.", priority: "High", riskLevel: "High", consequence: "Slip and fall injuries in dark halls.", proof: "Visual Check" }
            ]
        },
        {
            title: "VIP Lounge & Luxury Service",
            department: "Guest Service",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Recliner functionality and iPad ordering connectivity.",
            icon: "star",
            tasks: [
                { id: "CIN-VIP-01", description: "Audit recliner mechanical functionality: check all motors.", priority: "High", riskLevel: "Low", consequence: "Service failure for premium-paying guests.", proof: "Seat Audit" },
                { id: "CIN-VIP-02", description: "Verify iPad ordering system connectivity and menu sync.", priority: "Medium", riskLevel: "Medium", consequence: "Lost high-margin F&B revenue.", proof: "Ping Test" }
            ]
        },
        {
            title: "Housekeeping & Washrooms",
            department: "Facilities",
            frequency: "Hourly",
            role: "Shift Supervisor",
            summary: "Hourly cleaning command for public and hall zones.",
            icon: "sparkles",
            tasks: [
                { id: "CIN-JAN-01", description: "Hall Sweep Pulse: Remove debris between shows in < 10 mins.", priority: "High", riskLevel: "Low", consequence: "Unsanitary halls and negative viral reviews.", proof: "Shift Log" },
                { id: "CIN-JAN-02", description: "Audit washroom cleaning logs: verify hourly frequency.", priority: "High", riskLevel: "Low", consequence: "Top driver of guest complaints.", proof: "Hourly Sheet" }
            ]
        }
    ]
};
