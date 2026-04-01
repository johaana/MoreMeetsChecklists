
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operating System",
    priceINR: 799,
    priceUSD: 9,
    category: "Healthcare",
    description: "The Sovereign v8.3 clinical engine for hospitals and specialized medical centers. Hardening 200+ control points from surgical safety to biomedical waste.",
    heroHeadline: "Zero-Risk Medical Operations. Audit-Ready.",
    heroSubheadline: "Standardize clinical and operational governance across every department in your facility.",
    pricingUrgency: "A single clinical error or one NABH/JCI audit failure costs 1000x more than this system.",
    consultingAnchor: 15000,
    icon: "hospital",
    badgeText: "V8.3 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Admin Directors"],
    sampleItems: [
        { text: "<strong>Clinical Safety (WHO)</strong>: Pre-incision time-outs and dual-verification for high-alert drugs.", icon: "shield-check" },
        { text: "<strong>Nursing & Ward Command</strong>: Bedside handover audits and crash-cart integrity tracking.", icon: "heart-pulse" },
        { text: "<strong>OPD & Diagnostic Logic</strong>: Queue TAT monitoring and doctor arrival parity checks.", icon: "stethoscope" },
        { text: "<strong>Pharmacy & Narcotics</strong>: Strict access logs and double-blind stock counts for controlled drugs.", icon: "pill" },
        { text: "<strong>Billing & Discharge Shield</strong>: TPA pre-auth tracking and unbilled consumable audits.", icon: "banknote" },
        { text: "<strong>Biomedical Waste (EHS)</strong>: Legal compliance for waste segregation and spillage kit readiness.", icon: "recycle" }
    ],
    checklists: [
        {
            title: "Clinical Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "Protects the clinical standard of the institution.",
            icon: "crown",
            tasks: [
                { id: "H-EXE-01", description: "Review Sentinel Event Log for near-miss errors.", priority: "High", riskLevel: "High", consequence: "Fatal harm and legal closure.", proof: "Log Audit", trainerNotes: "Ensure zero open incident files." }
            ]
        },
        {
            title: "Ward & Bedside Command",
            department: "Nursing",
            frequency: "Daily",
            role: "General Manager",
            summary: "Manages the patient infrastructure.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-NUR-01", description: "Bedside Handover: Verify IV sites and clinical charts.", priority: "High", riskLevel: "High", consequence: "Loss of critical patient vitals data.", proof: "Handover Log", trainerNotes: "Confirm MRN match at bedside." }
            ]
        },
        {
            title: "Billing & discharge Shield",
            department: "Billing",
            frequency: "Daily",
            role: "Finance & Cashier",
            summary: "Protects the revenue pipeline.",
            icon: "banknote",
            tasks: [
                { id: "H-BIL-01", description: "TPA Pre-Auth Pulse: Verify approval status for all IPs.", priority: "High", riskLevel: "Medium", consequence: "Financial loss through claim denial.", proof: "System Sync", trainerNotes: "Check pre-auth in < 4 hours." }
            ]
        },
        {
            title: "Bio-Waste & Safety",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Regulatory compliance for bio-hazards.",
            icon: "recycle",
            tasks: [
                { id: "H-WST-01", description: "Verify color-coded segregation at ward source.", priority: "High", riskLevel: "High", consequence: "Fines and disease transmission.", proof: "Visual Audit", trainerNotes: "Sharps must be in puncture-proof bins." }
            ]
        },
        {
            title: "Nursing Certifications",
            department: "HR",
            frequency: "Monthly",
            role: "HR Manager",
            summary: "Medical staff competency logs.",
            icon: "users",
            tasks: [
                { id: "H-HR-01", description: "Verify valid registration for all clinical nurses.", priority: "High", riskLevel: "High", consequence: "Massive criminal liability.", proof: "Registry File", trainerNotes: "Renew 30 days before expiry." }
            ]
        },
        {
            title: "Medical Equipment (BMS)",
            department: "Engineering",
            frequency: "Daily",
            role: "Technical Lead",
            summary: "Protects high-stakes medical machines.",
            icon: "zap",
            tasks: [
                { id: "H-TEC-01", description: "Verify UPS backup status for OT and ICU.", priority: "High", riskLevel: "High", consequence: "Patient death during blackout.", proof: "Voltage Log", trainerNotes: "Test battery load weekly." }
            ]
        },
        {
            title: "Patient Experience & ORM",
            department: "Admin",
            frequency: "Daily",
            role: "Customer Experience Lead",
            summary: "Governs reputation and feedback.",
            icon: "smile",
            tasks: [
                { id: "H-CX-01", description: "Respond to patient discharge feedback in <24h.", priority: "High", riskLevel: "Low", consequence: "Viral reputation damage.", proof: "Dashboard", trainerNotes: "Personalize every CSAT reply." }
            ]
        },
        {
            title: "Pharmacy & Supply Chain",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Logistics Lead",
            summary: "Ensures drug and stock integrity.",
            icon: "pill",
            tasks: [
                { id: "H-PHM-01", description: "Narcotics Vault: Independent double-count of all units.", priority: "High", riskLevel: "High", consequence: "Drug diversion and criminal theft.", proof: "Dual-Sign Log", trainerNotes: "Witnessed audit mandatory." }
            ]
        }
    ]
};
