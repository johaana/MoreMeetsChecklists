
import type { PremiumPack } from "@/lib/premium-packs";

export const facility_management_blueprint: PremiumPack = {
    id: 'facility_management_blueprint',
    title: "Facility Operating System",
    priceINR: 799,
    priceUSD: 9,
    category: "Corporate & Tech",
    description: "The definitive technical engine for Hard and Soft FM. Hardening 160+ control points from MEP to Perimeter Security.",
    heroHeadline: "Stop Catastrophic Facility Failures and Vendor Neglect",
    heroSubheadline: "Track 160+ control points across Hard FM, Soft FM, Groundskeeping, and Compliance—even when you’re not on property.",
    pricingUrgency: "A single major utility failure costs 100x more than this system.",
    consultingAnchor: 10000,
    icon: "building-2",
    badgeText: "V8.5 SOVEREIGN",
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
            title: "Portfolio Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "Asset health and liability oversight.",
            icon: "crown",
            tasks: [
                { id: "FM-EXE-01", description: "Review major incident status across property group.", priority: "High", riskLevel: "High", consequence: "Escalated liability and asset damage.", proof: "Incident Audit", trainerNotes: "Check 'Root Cause' for all P1s." }
            ]
        },
        {
            title: "Soft FM Command",
            department: "Operations",
            frequency: "Hourly",
            role: "General Manager",
            summary: "Hourly hygiene command for public zones.",
            icon: "sparkles",
            tasks: [
                { id: "FM-JAN-01", description: "Audit common area restroom cleaning frequency.", priority: "High", riskLevel: "Low", consequence: "Immediate occupant dissatisfaction.", proof: "Hourly Sheet", trainerNotes: "Target < 60 min intervals." }
            ]
        },
        {
            title: "Utility Economics",
            department: "Finance",
            frequency: "Daily",
            role: "Finance & Cashier",
            summary: "Tracks energy and utility efficiency.",
            icon: "zap",
            tasks: [
                { id: "FM-UTIL-01", description: "Log main KWH meter reading and compare to baseline.", priority: "Medium", riskLevel: "Low", consequence: "Energy waste and cost blowouts.", proof: "Meter Log", trainerNotes: "Check at midnight daily." }
            ]
        },
        {
            title: "Safety & EHS",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Protects the physical asset and occupants.",
            icon: "shield-check",
            tasks: [
                { id: "FM-SEC-01", description: "Test perimeter electric fence / alarm system.", priority: "High", riskLevel: "High", consequence: "Security breach and intruder risk.", proof: "Test Note", trainerNotes: "Simulate a breach daily." }
            ]
        },
        {
            title: "Technical Certs",
            department: "HR",
            frequency: "Monthly",
            role: "HR Manager",
            summary: "Ensures technical team certifications.",
            icon: "graduation-cap",
            tasks: [
                { id: "FM-HR-01", description: "Verify LOTO and High-Voltage certifications for engineers.", priority: "High", riskLevel: "High", consequence: "Fatal industrial accidents.", proof: "Cert File", trainerNotes: "No certificate, No work." }
            ]
        },
        {
            title: "Hard FM (MEP)",
            department: "Engineering",
            frequency: "Daily",
            role: "Technical Lead",
            summary: "HVAC, Boiler, and Generator vitals.",
            icon: "wrench",
            tasks: [
                { id: "FM-ENG-01", description: "Inspect backup generator (DG) and log fuel levels.", priority: "High", riskLevel: "High", consequence: "Total facility blackout.", proof: "Fuel Log", trainerNotes: "Target > 75% fuel tank." }
            ]
        },
        {
            title: "Vendor SLA Governance",
            department: "Admin",
            frequency: "Weekly",
            role: "Customer Experience Lead",
            summary: "Monitors third-party performance parity.",
            icon: "file-check",
            tasks: [
                { id: "FM-VEN-01", description: "Verify vendor attendance logs against contract SLA.", priority: "Medium", riskLevel: "Low", consequence: "Paying for unrendered services.", proof: "SLA Match", trainerNotes: "Deduct from billing for gaps." }
            ]
        },
        {
            title: "Internal Logistics",
            department: "Logistics",
            frequency: "Daily",
            role: "Logistics Lead",
            summary: "Internal distribution command.",
            icon: "package",
            tasks: [
                { id: "FM-LOG-01", description: "Audit high-priority parcel register for 100% handover.", priority: "Medium", riskLevel: "Low", consequence: "Lost institutional assets.", proof: "Log Review", trainerNotes: "Signature required for all items." }
            ]
        }
    ]
};
