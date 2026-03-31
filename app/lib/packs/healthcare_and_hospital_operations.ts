
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operating System",
    priceINR: 799,
    priceUSD: 9,
    category: "Healthcare",
    description: "The Sovereign v4.4 clinical engine for hospitals and medical centers. Hardening 200+ control points from surgical safety to biomedical waste.",
    heroHeadline: "Zero-Risk Medical Operations. Audit-Ready.",
    heroSubheadline: "Standardize clinical and operational governance across every department in your facility.",
    pricingUrgency: "A single clinical error or one NABH/JCI audit failure costs 1000x more than this system.",
    consultingAnchor: 15000,
    icon: "hospital",
    badgeText: "V4.4 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Admin Directors"],
    sampleItems: [
        { text: "<strong>Surgical Safety (WHO)</strong>: Pre-incision time-outs and dual-verification for high-alert drugs.", icon: "shield-check" },
        { text: "<strong>Pharmacy & Narcotics Control</strong>: Strict access logs and double-blind counts for controlled drugs.", icon: "pill" },
        { text: "<strong>Ward & Bedside Command</strong>: Structured bedside handover audits and crash-cart integrity.", icon: "heart-pulse" },
        { text: "<strong>OPD & Diagnostic Logic</strong>: Queue TAT monitoring and doctor arrival parity checks.", icon: "stethoscope" },
        { text: "<strong>Discharge Logistics</strong>: Seamless billing and insurance clearance framework.", icon: "banknote" },
        { text: "<strong>Bio-Medical Waste (EHS)</strong>: Legal compliance for waste segregation and spillage kits.", icon: "recycle" }
    ],
    checklists: [
        {
            title: "Surgical Safety & OT",
            department: "Surgery",
            frequency: "Per Show",
            role: "Nursing Lead",
            summary: "Zero-fail clinical protocols for the operating theater.",
            icon: "shield-check",
            tasks: [
                { id: "H-SUR-01", description: "Execute WHO 'Time Out' before every incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery.", proof: "Sign-off" },
                { id: "H-SUR-02", description: "Verify sterility indicators on all instrument sets.", priority: "High", riskLevel: "High", consequence: "Infection outbreak.", proof: "Indicator Tape" },
                { id: "H-SUR-03", description: "Reconcile swab and instrument counts post-procedure.", priority: "High", riskLevel: "High", consequence: "Retained foreign object.", proof: "Count Sheet" }
            ]
        },
        {
            title: "Pharmacy & Narcotics Logic",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Pharmacy Lead",
            summary: "Governance for controlled substances.",
            icon: "pill",
            tasks: [
                { id: "H-PHM-01", description: "Narcotics Vault: Independent double-count of all units.", priority: "High", riskLevel: "High", consequence: "Criminal legal liability.", proof: "Dual-Sign Log" },
                { id: "H-PHM-02", description: "Cold Chain: Log fridge temps for biologics twice daily.", priority: "High", riskLevel: "High", consequence: "Ineffective vaccines.", proof: "Temp Log" }
            ]
        }
    ]
};
