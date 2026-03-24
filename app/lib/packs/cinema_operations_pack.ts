
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
            role: "Projectionist",
            summary: "Ensures a flawless technical presentation for every movie screening.",
            icon: "projector",
            tasks: [
                { id: "CIN-PRO-01", description: "Perform daily pre-opening operational test of all projectors.", priority: "High", riskLevel: "High", consequence: "Catastrophic show cancellation.", proof: "Test Log" },
                { id: "CIN-PRO-02", description: "Verify projector focus and brightness levels.", priority: "High", riskLevel: "Medium", consequence: "Poor guest experience and complaint risk.", proof: "Visual Sign-off" },
                { id: "CIN-PRO-03", description: "Test audio channel separation and volume calibration.", priority: "High", riskLevel: "Medium", consequence: "Distorted sound and refund risk.", proof: "Sound Log" },
                { id: "CIN-PRO-04", description: "Check status of IMB/Media Block and server internet.", priority: "High", riskLevel: "High", consequence: "Unable to ingest keys or play content.", proof: "System Dashboard" }
            ]
        },
        {
            title: "F&B Concessions & Yield",
            department: "F&B",
            frequency: "Daily",
            role: "F&B Mgr",
            summary: "Governance for high-margin concession inventory.",
            icon: "utensils",
            tasks: [
                { id: "CIN-FNB-01", description: "Reconcile raw popcorn grain usage against bucket sales.", priority: "High", riskLevel: "Medium", consequence: "Major driver of profit leakage.", proof: "Yield Sheet" },
                { id: "CIN-FNB-02", description: "Log temperature of cold-dispensers and nacho cheese warmers.", priority: "High", riskLevel: "High", consequence: "Foodborne illness risk for guests.", proof: "Temp Log" },
                { id: "CIN-FNB-03", description: "Verify stock of combo-exclusive promotional merchandise.", priority: "Medium", riskLevel: "Low", consequence: "Missed high-margin revenue.", proof: "Stock Audit" }
            ]
        },
        {
            title: "Auditorium & Exit Safety",
            department: "Operations",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Governs guest safety and cleanliness inside the halls.",
            icon: "door-open",
            tasks: [
                { id: "CIN-SAFE-01", description: "Verify all emergency exit push-bars are functional.", priority: "High", riskLevel: "High", consequence: "Fatal trap during fire emergency.", proof: "Physical Test" },
                { id: "CIN-SAFE-02", description: "Check aisle 'pathway' lighting visibility.", priority: "High", riskLevel: "Medium", consequence: "Guest slip and fall liability.", proof: "Visual Check" },
                { id: "CIN-SAFE-03", description: "Audit hall temperature between shows (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Guest complaints and negative reviews.", proof: "Temp Reading" }
            ]
        },
        {
            title: "Box Office & Queue Command",
            department: "Sales",
            frequency: "Daily",
            role: "Ticketing Mgr",
            summary: "Ensures smooth guest arrival and transaction integrity.",
            icon: "ticket",
            tasks: [
                { id: "CIN-TIX-01", description: "Verify POS sync with online aggregators (BookMyShow/Site).", priority: "High", riskLevel: "High", consequence: "Double-seat booking conflict.", proof: "System Sync" },
                { id: "CIN-TIX-02", description: "Check self-service kiosk paper levels and connectivity.", priority: "Medium", riskLevel: "Low", consequence: "Long queues at main counters.", proof: "Visual Check" },
                { id: "CIN-TIX-03", description: "Audit 'Cancelled Bill' log for cashier fraud detection.", priority: "High", riskLevel: "High", consequence: "Silent internal cash theft.", proof: "Void Log Audit" }
            ]
        },
        {
            title: "VIP Lounge & Luxury Service",
            department: "Guest Service",
            frequency: "Daily",
            role: "Guest Relations",
            summary: "Governance for premium screen and lounge standards.",
            icon: "star",
            tasks: [
                { id: "CIN-VIP-01", description: "Inspect recliners for mechanical functionality and fabric stains.", priority: "High", riskLevel: "Low", consequence: "Service failure for top-tier paying guests.", proof: "Walkthrough" },
                { id: "CIN-VIP-02", description: "Verify iPad/Call-button connectivity for in-seat service.", priority: "High", riskLevel: "Medium", consequence: "Lost orders and guest frustration.", proof: "Dial Test" }
            ]
        },
        {
            title: "Housekeeping & Washrooms",
            department: "Facilities",
            frequency: "Hourly",
            role: "Cleaning Lead",
            summary: "Hourly hygiene command for the facility.",
            icon: "sparkles",
            tasks: [
                { id: "CIN-HK-01", description: "Audit Lobby and Hall floor for popcorn debris/spills.", priority: "Medium", riskLevel: "Medium", consequence: "Slip hazard and unkempt image.", proof: "Hourly Sheet" },
                { id: "CIN-HK-02", description: "Inspect washrooms for odor and supply levels.", priority: "High", riskLevel: "Medium", consequence: "Major driver of negative guest scores.", proof: "Cleaning Log" }
            ]
        },
        {
            title: "Technical Maintenance & MEP",
            department: "Engineering",
            frequency: "Weekly",
            role: "Facility Mgr",
            summary: "Infrastructure readiness for the complex.",
            icon: "wrench",
            tasks: [
                { id: "CIN-ENG-01", description: "Inspect UPS battery health for the server room.", priority: "High", riskLevel: "High", consequence: "Total blackout during power flicker.", proof: "System Status" },
                { id: "CIN-ENG-02", description: "Audit AMC status for AC chillers and Lifts.", priority: "High", riskLevel: "High", consequence: "Catastrophic failure during peak weekend.", proof: "AMC Calendar" }
            ]
        },
        {
            title: "Cinema Executive Governance",
            department: "Management",
            frequency: "Weekly",
            role: "GM / Owner",
            summary: "Strategic oversight of theater performance and ROI.",
            icon: "crown",
            tasks: [
                { id: "CIN-EXE-01", description: "Review 'Empire Mood' and Group shift completion.", priority: "High", riskLevel: "Low", consequence: "Drift in operational discipline.", proof: "Dashboard Review" },
                { id: "CIN-EXE-02", description: "Audit 'Incident Log' for safety or technical alerts.", priority: "High", riskLevel: "High", consequence: "Legal liability and brand damage.", proof: "Incident Audit" }
            ]
        }
    ]
};
