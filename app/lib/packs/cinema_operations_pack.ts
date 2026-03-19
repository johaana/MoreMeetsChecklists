
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
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the definitive plug for projection failures and safety gaps.",
    heroHeadline: "Stop Projection Failures and Catastrophic Safety Gaps",
    heroSubheadline: "Track technical readiness, monitor auditorium standards, and stay in control—across 100+ technical control points.",
    pricingUrgency: "A single projection failure during a blockbuster opening or one safety lapse costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "popcorn",
    badgeText: "V4.3 SOVEREIGN",
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
                { id: "CIN-PRO-04", description: "Check status of IMB/Media Block and server internet.", priority: "High", riskLevel: "High", consequence: "Unable to ingest keys or play content.", proof: "System Dashboard" },
                { id: "CIN-PRO-05", description: "Verify correct trailer and ad-playlist loaded.", priority: "Medium", riskLevel: "Low", consequence: "Breach of advertiser contracts.", proof: "Playlist Audit" },
                { id: "CIN-PRO-06", description: "Log lamp hours and schedule preemptive replacement.", priority: "High", riskLevel: "High", consequence: "Lamp explosion or mid-show failure.", proof: "Lamp Registry" },
                { id: "CIN-PRO-07", description: "Test 3D glasses active-sync system (if applicable).", priority: "Medium", riskLevel: "Low", consequence: "Inability to show 3D content.", proof: "Test Glasses" },
                { id: "CIN-PRO-08", description: "Ensure port-hole glass is free of smudges or dust.", priority: "Low", riskLevel: "Low", consequence: "Degraded picture clarity.", proof: "Visual Check" },
                { id: "CIN-PRO-09", description: "Confirm HVAC connectivity to projection booth.", priority: "High", riskLevel: "High", consequence: "Projector overheating and thermal shutdown.", proof: "Temp Log" },
                { id: "CIN-PRO-10", description: "Final 'Show-Start' sync with auditorium floor staff.", priority: "High", riskLevel: "Low", consequence: "Late show start and crowd agitation.", proof: "Radio Log" }
            ]
        }
    ]
};
