
import type { PremiumPack } from "@/lib/premium-packs";

export const facility_management_blueprint: PremiumPack = {
    id: 'facility_management_blueprint',
    title: "Facility Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/ab64c7a0-4341-40a8-bb54-871074a22d10',
    category: "Corporate & Tech",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.4 is the professional plug for your infrastructure leaks.",
    heroHeadline: "Stop Catastrophic Facility Failures and Vendor Neglect",
    heroSubheadline: "Track 150+ control points across Hard FM, Soft FM, Groundskeeping, and Compliance—even when you’re not on property.",
    pricingUrgency: "A single major utility failure or one safety negligence lawsuit costs 100x more than this entire system.",
    consultingAnchor: 10000,
    icon: "building-2",
    badgeText: "Asset Protection",
    badgeVariant: "accent",
    whoIsItFor: ["COOs", "Heads of Corporate Real Estate", "Directors of Facilities", "VPs of Administration", "Data Center Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Facility Pulse</strong>: Your ground team and vendor staff update status in seconds. Zero-friction reporting.", icon: "timer" },
        { text: "<strong>Hard FM (MEP) Mastery</strong>: Bulletproof preventive maintenance logs for HVAC, Boilers, Generators, and Lifts.", icon: "wrench" },
        { text: "<strong>Soft FM (Janitorial) Logic</strong>: Hourly logs for high-traffic zones and specialized washroom hygiene audits.", icon: "sparkles" },
        { text: "<strong>Grounds & Landscaping</strong>: Maintain perimeter security and curb-appeal with structured exterior audits.", icon: "sprout" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show managers exactly what needs sign-off.", icon: "target" },
        { text: "<strong>Regulatory Compliance Shield</strong>: Track fire certificates, lift licenses, and water-tank certifications in one ledger.", icon: "file-lock" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own the data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Hard FM: MEP & Engineering",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "HVAC, Boiler, Generator, and Electrical vitals.",
            icon: "wrench",
            tasks: []
        },
        {
            title: "Soft FM: Janitorial & Hygiene",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Housekeeping Lead",
            summary: "Hourly hygiene command for restrooms and common zones.",
            icon: "sparkles",
            tasks: []
        },
        {
            title: "Regulatory & Compliance",
            department: "Compliance",
            frequency: "Monthly",
            role: "Admin Manager",
            summary: "Fire safety, lift licenses, and tank certifications.",
            icon: "file-lock",
            tasks: []
        },
        {
            title: "Security & Perimeter Control",
            department: "Security",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "CCTV focal audits and visitor ID enforcement.",
            icon: "shield",
            tasks: []
        },
        {
            title: "Energy & Sustainability Audit",
            department: "Management",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "Daily KWH tracking and utility load optimization.",
            icon: "leaf",
            tasks: []
        }
    ]
};
