import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operations System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "The definitive Sovereign v11.9 engine for luxury hotels and resorts. Hardening 135+ technical control points across 11 distinct divisions from Revenue Integrity to Guest Privacy.",
    heroHeadline: "Eliminate Guest Safety Gaps and Viral Reputation Damage",
    heroSubheadline: "Zero-drift operational governance for hotels, resorts, and hospitality groups. Track 135+ checkpoints across every shift.",
    pricingUrgency: "One safety incident or a single negative viral review costs 100x more than this entire system.",
    consultingAnchor: 15000,
    icon: "building",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["General Managers", "Hotel Owners", "Heads of Housekeeping", "Banqueting Directors", "Security & Valet Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Pulse Reporting</strong>: Team updates tasks in seconds. Zero-friction supervision without being present.", icon: "timer" },
        { text: "<strong>Reputation Shield</strong>: Daily pulse for review response and social media signals to protect your ratings.", icon: "star" },
        { text: "<strong>Privacy Infrastructure</strong>: Hidden camera sweeps and master keycard audit logs to prevent scandals.", icon: "eye-off" },
        { text: "<strong>Revenue Integrity</strong>: Night audit variance tracking and OTA rate parity audits to stop leakage.", icon: "banknote" },
        { text: "<strong>MEP Asset Watch</strong>: Critical logs for boilers, chillers, and STP to prevent infrastructure collapse.", icon: "wrench" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your operational data and the engine forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "General Manager Daily",
            department: "Executive",
            frequency: "Daily",
            role: "General Manager",
            summary: "Daily property command, night audit verification, and high-level risk oversight.",
            icon: "crown",
            tasks: [
                { id: "HR-GM-01", technicalProtocol: "Bank Reconciliation", floorAction: "Verify previous day's revenue against bank deposits.", priority: "High", riskLevel: "High", consequence: "Undetected internal theft and revenue leakage.", proof: "Signed Audit" },
                { id: "HR-GM-02", technicalProtocol: "Incident Triage", floorAction: "Review all 'Red' flags in the incident tracker from the night shift.", priority: "High", riskLevel: "High", consequence: "Escalated legal liability.", proof: "Incident Log" },
                { id: "HR-GM-03", technicalProtocol: "Morning Team Huddle", floorAction: "Brief all HODs on VIP arrivals and group events today.", priority: "High", riskLevel: "Low", consequence: "Disconnected service delivery.", proof: "Briefing Log" },
                { id: "HR-GM-04", technicalProtocol: "License Check", floorAction: "Confirm Fire NOC and Liquor licenses are current.", priority: "High", riskLevel: "High", consequence: "Authorities sealing the hotel.", proof: "License Repository" }
            ]
        },
        {
            title: "Front Desk & Arrivals",
            department: "Reception",
            frequency: "Daily",
            role: "Front Office Manager",
            summary: "Legal compliance, guest ID registration, and billing integrity.",
            icon: "concierge-bell",
            tasks: [
                { id: "HR-FO-01", technicalProtocol: "Guest ID Compliance", floorAction: "Verify 100% of foreign/domestic IDs scanned and logged.", priority: "High", riskLevel: "High", consequence: "Criminal liability and loss of license.", proof: "Compliance Log" },
                { id: "HR-FO-02", technicalProtocol: "Key Control Audit", floorAction: "Physically count all master and spare guest keys.", priority: "High", riskLevel: "High", consequence: "Unauthorized guest room access.", proof: "Key Audit" },
                { id: "HR-FO-03", technicalProtocol: "Void Bill Audit", floorAction: "Audit and sign off on all deleted/corrected bills.", priority: "High", riskLevel: "High", consequence: "Internal cashier fraud.", proof: "POS Audit" }
            ]
        },
        {
            title: "Housekeeping & Privacy",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Executive Housekeeper",
            summary: "Room readiness, deep-cleaning cycles, and privacy protection.",
            icon: "bed",
            tasks: [
                { id: "HR-HK-01", technicalProtocol: "Room Release Check", floorAction: "Supervisor check of 100% of rooms assigned for today's arrivals.", priority: "High", riskLevel: "High", consequence: "Immediate guest refund risk.", proof: "Inspection Log" },
                { id: "HR-HK-02", technicalProtocol: "Privacy Scan", floorAction: "Scan vents and mirrors in 3 random check-out rooms.", priority: "High", riskLevel: "High", consequence: "Business-ending privacy scandal.", proof: "Scan Log" }
            ]
        }
    ]
};
