
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operating System",
    priceINR: 799,
    priceUSD: 9,
    category: "Hospitality",
    description: "The definitive Sovereign v4.4 engine for luxury hotels and resorts. Hardening 250+ technical control points across Front Office, Housekeeping, Engineering, and Events.",
    heroHeadline: "Eliminate Guest Safety Gaps and Viral Reputation Damage",
    heroSubheadline: "Track 250+ technical control points across Front Office, Housekeeping, Engineering, Events, and ORM—even when you’re not on property.",
    pricingUrgency: "One safety incident or a single negative viral review costs 100x more than this entire system.",
    consultingAnchor: 15000,
    icon: "building",
    badgeText: "Recommended",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["General Managers", "Hotel Owners", "Heads of Housekeeping", "Banqueting Directors", "Security & Valet Managers"],
    sampleItems: [
        { text: "<strong>Front Office Integrity</strong>: Zero-fail guest ID compliance and PMS-to-Police registration sync.", icon: "concierge-bell" },
        { text: "<strong>Housekeeping Command</strong>: Hourly public area audits and deep-clean room inspection scores.", icon: "bed" },
        { text: "<strong>Wedding & Event Readiness</strong>: Pre-event AV testing and ballroom floor safety walkthroughs.", icon: "calendar-heart" },
        { text: "<strong>Engineering (MEP) Vitals</strong>: Daily Chiller, Boiler, and Generator fuel/load logging.", icon: "wrench" },
        { text: "<strong>Travel Desk & Valet Safety</strong>: Driver sobriety checks and valet key-vault reconciliations.", icon: "car" },
        { text: "<strong>Reputation Shield (ORM)</strong>: 24-hour response mandatory for all OTA and Google reviews.", icon: "star" }
    ],
    checklists: [
        {
            title: "Front Office & Reservations",
            department: "Front Desk",
            frequency: "Daily",
            role: "Front Office Manager",
            summary: "Ensures legal compliance, guest arrival readiness, and billing integrity.",
            icon: "concierge-bell",
            tasks: [
                { id: "HR-FO-01", description: "Verify all arrivals against booking system (PMS vs. Channel Manager).", priority: "High", riskLevel: "High", consequence: "Overbooking conflict.", proof: "System Reconcile" },
                { id: "HR-FO-02", description: "Validate guest ID compliance and police registration (C-Form/KYC).", priority: "High", riskLevel: "High", consequence: "Severe legal violations and closure.", proof: "Compliance Log" },
                { id: "HR-FO-03", description: "Confirm all scheduled wake-up calls are logged and verified.", priority: "Medium", riskLevel: "Medium", consequence: "Guest missing flight.", proof: "Call Log" },
                { id: "HR-FO-04", description: "Audit reception cash drawer against shift-end PMS report.", priority: "High", riskLevel: "High", consequence: "Internal theft.", proof: "Cash Sheet" },
                { id: "HR-FO-05", description: "Verify room-key card stock levels.", priority: "Low", riskLevel: "Low", consequence: "Check-in delay.", proof: "Stock Check" }
            ]
        },
        {
            title: "Housekeeping Command",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Head of Housekeeping",
            summary: "Manages the sanitation infrastructure.",
            icon: "bed",
            tasks: [
                { id: "HR-HK-01", description: "Verify all check-out rooms inspected before 2 PM.", priority: "High", riskLevel: "High", consequence: "Guest refund risk.", proof: "Inspection Sign-off" },
                { id: "HR-HK-02", description: "Audit public area restrooms every hour.", priority: "High", riskLevel: "Medium", consequence: "1-star review driver.", proof: "Hourly Sheet" },
                { id: "HR-HK-03", description: "Inspect laundry chemical titration for automatic dispensers.", priority: "Medium", riskLevel: "Medium", consequence: "Linen damage.", proof: "Test Strip" }
            ]
        },
        {
            title: "Wedding & Event Readiness",
            department: "Banquets",
            frequency: "Per Event",
            role: "Events Manager",
            summary: "Zero-fail framework for ballroom events.",
            icon: "calendar-heart",
            tasks: [
                { id: "HR-EVT-01", description: "Technical Recce: Test projector, mics, and Wi-Fi 4 hours pre-event.", priority: "High", riskLevel: "High", consequence: "High-visibility event failure.", proof: "Tech Report" },
                { id: "HR-EVT-02", description: "Floor Safety Audit: Check for loose cables or trip hazards in halls.", priority: "High", riskLevel: "High", consequence: "Guest injury liability.", proof: "Walkthrough" }
            ]
        }
    ]
};
