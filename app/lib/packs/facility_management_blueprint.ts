
import type { PremiumPack } from "@/lib/premium-packs";

export const facility_management_blueprint: PremiumPack = {
    id: 'facility_management_blueprint',
    title: "Facility Operating System",
    priceINR: 799,
    priceUSD: 9,
    category: "Corporate & Tech",
    description: "The definitive technical engine for Hard and Soft FM. Hardening 150+ control points from MEP to Perimeter Security.",
    heroHeadline: "Stop Catastrophic Facility Failures and Vendor Neglect",
    heroSubheadline: "Track 150+ control points across Hard FM, Soft FM, Groundskeeping, and Compliance—even when you’re not on property.",
    pricingUrgency: "A single major utility failure costs 100x more than this system.",
    consultingAnchor: 10000,
    icon: "building-2",
    badgeText: "Asset Protection",
    badgeVariant: "accent",
    whoIsItFor: ["COOs", "Heads of Real Estate", "Facility Directors", "Admin VPs"],
    sampleItems: [
        { text: "<strong>Hard FM (MEP)</strong>: Preventative maintenance for HVAC, Boilers, and Generators.", icon: "wrench" },
        { text: "<strong>Security & Perimeter</strong>: CCTV focal points and visitor ID verification protocols.", icon: "shield-check" },
        { text: "<strong>Soft FM (Janitorial)</strong>: Hourly washroom hygiene audits and traffic zone logs.", icon: "sparkles" },
        { text: "<strong>Sustainability Command</strong>: Daily KWH logging and utility load balancing.", icon: "zap" },
        { text: "<strong>Vendor SLA Command</strong>: Tracking third-party service parity.", icon: "file-check" }
    ],
    checklists: [
        {
            title: "Hard FM: MEP & Engineering",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "HVAC, Boiler, Generator, and Electrical vitals.",
            icon: "wrench",
            tasks: [
                { id: "FM-ENG-01", description: "Inspect backup generator (DG) and log fuel levels.", priority: "High", riskLevel: "High", consequence: "Blackout.", proof: "Fuel Log" },
                { id: "FM-ENG-02", description: "Verify hot water supply temp at central boiler.", priority: "High", riskLevel: "Medium", consequence: "Service failure.", proof: "Temp Reading" }
            ]
        }
    ]
};
