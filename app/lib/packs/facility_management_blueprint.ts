
import type { PremiumPack } from "@/lib/premium-packs";

export const facility_management_blueprint: PremiumPack = {
    id: 'facility_management_blueprint',
    title: "Facility Operating System",
    priceINR: 799,
    priceUSD: 9,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/ab64c7a0-4341-40a8-bb54-871074a22d10',
    category: "Corporate & Tech",
    description: "The definitive Sovereign v4.4 technical engine for corporate and industrial facilities. Hardening 150+ control points from MEP to Perimeter Security.",
    heroHeadline: "Stop Catastrophic Facility Failures and Vendor Neglect",
    heroSubheadline: "Track 150+ control points across Hard FM, Soft FM, Groundskeeping, and Compliance—even when you’re not on property.",
    pricingUrgency: "A single major utility failure or one safety negligence lawsuit costs 100x more than this entire system.",
    consultingAnchor: 10000,
    icon: "building-2",
    badgeText: "Asset Protection",
    badgeVariant: "accent",
    whoIsItFor: ["COOs", "Heads of Corporate Real Estate", "Directors of Facilities", "VPs of Administration", "Data Center Managers"],
    sampleItems: [
        { text: "<strong>Hard FM (MEP) Mastery</strong>: Bulletproof preventative maintenance for HVAC, Boilers, and Generators.", icon: "wrench" },
        { text: "<strong>Security & Perimeter Control</strong>: CCTV focal point audits and visitor ID verification protocols.", icon: "shield-check" },
        { text: "<strong>Soft FM (Janitorial) Logic</strong>: Hourly washroom hygiene audits and high-traffic zone logs.", icon: "sparkles" },
        { text: "<strong>Sustainability & Energy</strong>: Daily KWH logging and utility load-balancing audits.", icon: "zap" },
        { text: "<strong>Vendor SLA Command</strong>: Tracking third-party service parity against contractual obligations.", icon: "file-check" },
        { text: "<strong>Financial Shield</strong>: Unit-level tracking of maintenance spend vs. budget.", icon: "banknote" },
        { text: "<strong>Institutional Memory</strong>: Technical instructions that stay if your best engineer resigns.", icon: "history" }
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
                { id: "FM-ENG-01", description: "Inspect backup generator (DG) and log fuel levels.", priority: "High", riskLevel: "High", consequence: "Total blackout during power failure.", proof: "Fuel Log" },
                { id: "FM-ENG-02", description: "Verify hot water supply temp at central boiler (Target: 55°C).", priority: "High", riskLevel: "Medium", consequence: "Utility service failure.", proof: "Temp Reading" },
                { id: "FM-ENG-03", description: "Audit chiller plant pressure and KWH consumption.", priority: "Medium", riskLevel: "Medium", consequence: "Inefficient energy spend.", proof: "System Log" }
            ]
        },
        {
            title: "Security & Perimeter Control",
            department: "Security",
            frequency: "Daily",
            role: "Security Head",
            summary: "Hardens the facility against unauthorized access.",
            icon: "shield-check",
            tasks: [
                { id: "FM-SEC-01", description: "Verify CCTV recording health and camera focal point parity.", priority: "High", riskLevel: "High", consequence: "Loss of forensic evidence.", proof: "Monitor Audit" },
                { id: "FM-SEC-02", description: "Test all panic buttons and silent alarms.", priority: "High", riskLevel: "High", consequence: "Fatal delay in emergency response.", proof: "Test Log" }
            ]
        },
        {
            title: "Soft FM & Janitorial Command",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Facility Manager",
            summary: "Hygiene and sanitation governance for common areas.",
            icon: "sparkles",
            tasks: [
                { id: "FM-JAN-01", description: "Audit washroom cleaning logs: verify 1-hour frequency.", priority: "High", riskLevel: "Low", consequence: "Major driver of occupant complaints.", proof: "Hourly Sheet" },
                { id: "FM-JAN-02", description: "Inspect stock of hand-soap and sanitizers in high-traffic zones.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene breakdown.", proof: "Stock Check" }
            ]
        },
        {
            title: "EHS & Occupational Safety",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Compliance with health and safety regulations.",
            icon: "hard-hat",
            tasks: [
                { id: "FM-EHS-01", description: "Audit Permit-To-Work (PTW) for height or hot-work jobs.", priority: "High", riskLevel: "High", consequence: "Fatal industrial accident.", proof: "Permit File" },
                { id: "FM-EHS-02", description: "Check fire-escape path clearance and illumination.", priority: "High", riskLevel: "High", consequence: "Entrapment disaster.", proof: "Walkthrough" }
            ]
        },
        {
            title: "Vendor SLA & Compliance",
            department: "Admin",
            frequency: "Monthly",
            role: "Admin Manager",
            summary: "Protects the facility from vendor neglect.",
            icon: "file-check",
            tasks: [
                { id: "FM-VND-01", description: "Verify AMC service reports match actual machine hours.", priority: "High", riskLevel: "Medium", consequence: "Paying for ghost maintenance.", proof: "Audit Report" },
                { id: "FM-VND-02", description: "Audit statutory licenses: Lifts, Fire, Water Tank.", priority: "High", riskLevel: "High", consequence: "Legal closure and massive fines.", proof: "License Ledger" }
            ]
        },
        {
            title: "Financial Shield & Budget",
            department: "Finance",
            frequency: "Daily",
            role: "Accountant",
            summary: "Governance for maintenance and utility spend.",
            icon: "banknote",
            tasks: [
                { id: "FM-FIN-01", description: "Log daily utility meter readings (Water/Gas/KWH).", priority: "High", riskLevel: "Low", consequence: "Unidentified cost spikes.", proof: "Meter Log" },
                { id: "FM-FIN-02", description: "Reconcile petty cash for emergency repairs.", priority: "High", riskLevel: "Medium", consequence: "Internal theft and untraceable spend.", proof: "Cash Sheet" }
            ]
        },
        {
            title: "Mail & Logistics Command",
            department: "Logistics",
            frequency: "Daily",
            role: "Dispatch Lead",
            summary: "Governs the intake and outflow of documents/goods.",
            icon: "truck",
            tasks: [
                { id: "FM-LOG-01", description: "Verify incoming courier ID and X-ray status (if applicable).", priority: "High", riskLevel: "High", consequence: "Suspicious package entry.", proof: "Intake Log" },
                { id: "FM-LOG-02", description: "Monitor dispatch TAT for critical legal/finance docs.", priority: "Medium", riskLevel: "Low", consequence: "Delayed corporate filings.", proof: "System Sync" }
            ]
        },
        {
            title: "Executive & Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "High-level oversight of facility health.",
            icon: "crown",
            tasks: [
                { id: "FM-EXE-01", description: "Review 'Empire Mood' and Critical Watch alerts.", priority: "High", riskLevel: "Low", consequence: "Drift in operational discipline.", proof: "Dashboard Review" },
                { id: "FM-EXE-02", description: "Audit Incident Log for unresolved MEP or Safety issues.", priority: "High", riskLevel: "High", consequence: "Catastrophic infrastructure failure.", proof: "Incident Audit" }
            ]
        }
    ]
};
