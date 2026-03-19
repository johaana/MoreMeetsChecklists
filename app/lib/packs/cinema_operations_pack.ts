
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
        },
        {
            title: "F&B Concession Hygiene",
            department: "F&B",
            frequency: "Daily",
            role: "F&B Supervisor",
            summary: "Ensures food safety and inventory integrity.",
            icon: "utensils",
            tasks: [
                { id: "CIN-FB-01", description: "Log temperature of popcorn warmers and soda chillers.", priority: "High", riskLevel: "Medium", consequence: "Slipping product quality and guest complaints.", proof: "Digital Log" },
                { id: "CIN-FB-02", description: "Audit expiry dates of syrups, butter, and seasonings.", priority: "High", riskLevel: "High", consequence: "Serving expired food; severe liability.", proof: "Sweep Report" },
                { id: "CIN-FB-03", description: "Reconcile opening stock of cups/tubs against POS sales.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue leakage.", proof: "Inventory Sheet" },
                { id: "CIN-FB-04", description: "Verify sanitization of soda fountain nozzles.", priority: "High", riskLevel: "High", consequence: "Bacterial growth and hygiene violations.", proof: "Cleaning Log" }
            ]
        },
        {
            title: "Ticketing & Cash Handling",
            department: "Box Office",
            frequency: "Daily",
            role: "Box Office Manager",
            summary: "Governance for revenue and ticketing integrity.",
            icon: "ticket",
            tasks: [
                { id: "CIN-TKT-01", description: "Reconcile daily ticket sales against system logs.", priority: "High", riskLevel: "High", consequence: "Unidentified revenue gaps.", proof: "Sales Report" },
                { id: "CIN-TKT-02", description: "Audit 'Cancelled Tickets' and 'Complimentary' logs.", priority: "High", riskLevel: "High", consequence: "Internal fraud and profit erosion.", proof: "Void Audit" },
                { id: "CIN-TKT-03", description: "Verify functionality of self-service kiosks.", priority: "Medium", riskLevel: "Low", consequence: "Long queues at box office.", proof: "Visual Check" }
            ]
        },
        {
            title: "Auditorium Cleaning & Maintenance",
            department: "Housekeeping",
            frequency: "Per Show",
            role: "HK Supervisor",
            summary: "Maintains the guest-facing environment.",
            icon: "armchair",
            tasks: [
                { id: "CIN-AUD-01", description: "Perform 'Inter-show' cleaning sweep of all rows.", priority: "High", riskLevel: "Low", consequence: "Negative customer impression.", proof: "Supervisor Initials" },
                { id: "CIN-AUD-02", description: "Verify all seat-mechanisms (Recliners) are functional.", priority: "Medium", riskLevel: "Medium", consequence: "Guest dissatisfaction and refund requests.", proof: "Random Audit" },
                { id: "CIN-AUD-03", description: "Check auditorium HVAC temperature (Target 22°C).", priority: "High", riskLevel: "Low", consequence: "Guest discomfort.", proof: "BMS Reading" }
            ]
        },
        {
            title: "Fire Safety & Evacuation",
            department: "Security",
            frequency: "Weekly",
            role: "Security Chief",
            summary: "Zero-fail life safety protocols.",
            icon: "siren",
            tasks: [
                { id: "CIN-FIR-01", description: "Verify all auditorium fire exits are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal delay in emergency (Never-event).", proof: "Walkthrough" },
                { id: "CIN-FIR-02", description: "Test fire-alarm panel and emergency lighting.", priority: "High", riskLevel: "High", consequence: "Total darkness during a crisis.", proof: "Test Report" },
                { id: "CIN-FIR-03", description: "Audit staff knowledge of 'Emergency Role Cards'.", priority: "High", riskLevel: "High", consequence: "Chaos during an evacuation.", proof: "Training Quiz" }
            ]
        },
        {
            title: "Crowd Management & Security",
            department: "Operations",
            frequency: "Daily",
            role: "Duty Manager",
            summary: "Governs the flow of guests and perimeter safety.",
            icon: "users",
            tasks: [
                { id: "CIN-CRD-01", description: "Verify entry-gate security screening procedures.", priority: "High", riskLevel: "High", consequence: "Security breach.", proof: "Visual Audit" },
                { id: "CIN-CRD-02", description: "Monitor lobby queue turnaround time (TAT).", priority: "Medium", riskLevel: "Low", consequence: "Crowd congestion.", proof: "TAT Log" }
            ]
        },
        {
            title: "Marketing & Promotions",
            department: "Marketing",
            frequency: "Weekly",
            role: "Marketing Lead",
            summary: "Protects the revenue-generating visual assets.",
            icon: "megaphone",
            tasks: [
                { id: "CIN-MKT-01", description: "Update 'Coming Soon' standees and digital posters.", priority: "Low", riskLevel: "Low", consequence: "Dated marketing and missed buzz.", proof: "Photo Audit" },
                { id: "CIN-MKT-02", description: "Post today's 'Showtimes' highlight to social stories.", priority: "Medium", riskLevel: "Low", consequence: "Lower walk-in footfall.", proof: "Live Post" }
            ]
        },
        {
            title: "Technical & IT Infrastructure",
            department: "Technical",
            frequency: "Weekly",
            role: "IT Manager",
            summary: "Hardens the digital backbone of the multiplex.",
            icon: "computer",
            tasks: [
                { id: "CIN-IT-01", description: "Verify KDM (Key Delivery Message) validity for 7 days ahead.", priority: "High", riskLevel: "High", consequence: "Screen blackout during premiere.", proof: "Server Audit" },
                { id: "CIN-IT-02", description: "Test backup generator switch-over for projection booth.", priority: "High", riskLevel: "High", consequence: "Total show failure during power flicker.", proof: "Test Log" }
            ]
        },
        {
            title: "Staff Management & Grooming",
            department: "HR",
            frequency: "Daily",
            role: "Duty Manager",
            summary: "Ensures professional standards for guest-facing team.",
            icon: "user-check",
            tasks: [
                { id: "CIN-HR-01", description: "Perform daily grooming audit (Uniform, ID, Hygiene).", priority: "Medium", riskLevel: "Low", consequence: "Poor brand perception.", proof: "Grooming Log" },
                { id: "CIN-HR-02", description: "Conduct pre-shift briefing on blockbusters and F&B combos.", priority: "Low", riskLevel: "Low", consequence: "Missed upselling opportunities.", proof: "Briefing Sheet" }
            ]
        },
        {
            title: "Facility Maintenance",
            department: "Facilities",
            frequency: "Weekly",
            role: "Facility Manager",
            summary: "Prevents infrastructure breakdowns.",
            icon: "building",
            tasks: [
                { id: "CIN-FAC-01", description: "AMC Audit: Verify service status for Lifts/Escalators.", priority: "High", riskLevel: "High", consequence: "Guest injury and liability.", proof: "AMC Calendar" },
                { id: "CIN-FAC-02", description: "Inspect plumbing vitals in main lobby restrooms.", priority: "Medium", riskLevel: "Low", consequence: "Odors and guest complaints.", proof: "Visual Check" }
            ]
        }
    ]
};
