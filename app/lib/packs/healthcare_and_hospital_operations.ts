
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operating System",
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The Sovereign v4.4 clinical engine for hospitals and specialized medical centers. Hardening 200+ control points from surgical safety to biomedical waste.",
    heroHeadline: "Zero-Risk Medical Operations. Audit-Ready.",
    heroSubheadline: "Standardize clinical and operational governance across every department in your facility.",
    pricingUrgency: "A single clinical error or one NABH/JCI audit failure costs 1000x more than this system.",
    consultingAnchor: 15000,
    icon: "hospital",
    badgeText: "V4.4 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Admin Directors"],
    sampleItems: [
        { text: "<strong>Clinical Safety (WHO)</strong>: Pre-incision time-outs and dual-verification for high-alert drugs.", icon: "shield-check" },
        { text: "<strong>Nursing & Ward Command</strong>: Bedside handover audits and crash-cart integrity tracking.", icon: "heart-pulse" },
        { text: "<strong>OPD & Diagnostic Logic</strong>: Queue TAT monitoring and doctor arrival parity checks.", icon: "stethoscope" },
        { text: "<strong>Pharmacy & Narcotics</strong>: Strict access logs and double-blind stock counts for controlled drugs.", icon: "pill" },
        { text: "<strong>Billing & Discharge Shield</strong>: TPA pre-auth tracking and unbilled consumable audits.", icon: "banknote" },
        { text: "<strong>Biomedical Waste (EHS)</strong>: Legal compliance for waste segregation and spillage kit readiness.", icon: "recycle" },
        { text: "<strong>Security & Perimeter</strong>: Visitor badge enforcement and CCTV focal point audits for drug stores.", icon: "shield" }
    ],
    checklists: [
        {
            title: "Reception & OPD Command",
            department: "Front Office",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Patient arrival readiness and queue governance.",
            icon: "stethoscope",
            tasks: []
        },
        {
            title: "Clinical Safety & OT",
            department: "Surgery",
            frequency: "Per Procedure",
            role: "Nursing Lead",
            summary: "Zero-fail surgical protocols.",
            icon: "shield-check",
            tasks: []
        },
        {
            title: "Pharmacy & Narcotics Vault",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Pharmacist",
            summary: "High-stakes medication governance.",
            icon: "pill",
            tasks: []
        },
        {
            title: "Pathology & Lab Readiness",
            department: "Diagnostics",
            frequency: "Daily",
            role: "Lab Lead",
            summary: "Accuracy and TAT command for diagnostics.",
            icon: "microscope",
            tasks: []
        },
        {
            title: "Billing & Discharge Shield",
            department: "Admin",
            frequency: "Daily",
            role: "Accountant",
            summary: "Financial integrity and patient transition.",
            icon: "banknote",
            tasks: []
        },
        {
            title: "Hospital Security & Visitor Control",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Perimeter hardening and asset protection.",
            icon: "shield",
            tasks: []
        },
        {
            title: "Biomedical Waste (EHS)",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Compliance for bio-hazards and sharp waste.",
            icon: "recycle",
            tasks: []
        }
    ]
};
