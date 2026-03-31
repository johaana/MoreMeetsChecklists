
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
            tasks: [
                { id: "MED-OPD-01", description: "Verify doctor arrival time against schedule slots.", priority: "High", riskLevel: "Low", consequence: "Patient frustration and review drop.", proof: "Roster Check" },
                { id: "MED-OPD-02", description: "Audit waiting area hygiene and seating readiness.", priority: "Medium", riskLevel: "Low", consequence: "Infection transmission risk in lobby.", proof: "Visual Audit" },
                { id: "MED-OPD-03", description: "Check registration system sync with patient records.", priority: "High", riskLevel: "Medium", consequence: "Mismatched clinical records.", proof: "System Sync" }
            ]
        },
        {
            title: "Clinical Safety & OT",
            department: "Surgery",
            frequency: "Per Procedure",
            role: "Nursing Lead",
            summary: "Zero-fail surgical protocols.",
            icon: "shield-check",
            tasks: [
                { id: "MED-OT-01", description: "Execute WHO 'Time Out' before every incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Fatal).", proof: "Signed Checklist" },
                { id: "MED-OT-02", description: "Verify sterility indicators on all sets.", priority: "High", riskLevel: "High", consequence: "Post-op infection outbreak.", proof: "Visual Confirm" },
                { id: "MED-OT-03", description: "Independent double-count of all needles and sponges.", priority: "High", riskLevel: "High", consequence: "Retained surgical items.", proof: "OT Log" }
            ]
        },
        {
            title: "Pharmacy & Narcotics Vault",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Pharmacist",
            summary: "High-stakes medication governance.",
            icon: "pill",
            tasks: [
                { id: "MED-PHM-01", description: "Narcotics Inventory: Dual-person verification count.", priority: "High", riskLevel: "High", consequence: "Theft and criminal liability.", proof: "Dual-Sign Log" },
                { id: "MED-PHM-02", description: "Cold Chain: Log vaccine/biologics fridge temps twice daily.", priority: "High", riskLevel: "High", consequence: "Ineffective medication administration.", proof: "Temp Log" }
            ]
        },
        {
            title: "Pathology & Lab Readiness",
            department: "Diagnostics",
            frequency: "Daily",
            role: "Lab Lead",
            summary: "Accuracy and TAT command for diagnostics.",
            icon: "microscope",
            tasks: [
                { id: "MED-LAB-01", description: "Calibrate analyzer machines with control samples.", priority: "High", riskLevel: "High", consequence: "False diagnostic reports.", proof: "Calibration Log" },
                { id: "MED-LAB-02", description: "Audit report TAT: target < 2 hours for critical panels.", priority: "Medium", riskLevel: "Medium", consequence: "Delayed treatment decisions.", proof: "System Report" }
            ]
        },
        {
            title: "Billing & Discharge Shield",
            department: "Admin",
            frequency: "Daily",
            role: "Accountant",
            summary: "Financial integrity and patient transition.",
            icon: "banknote",
            tasks: [
                { id: "MED-BIL-01", description: "TPA Pre-Auth Pulse: Verify approval status for all IPs.", priority: "High", riskLevel: "Medium", consequence: "Unrecoverable financial loss.", proof: "Insurance Log" },
                { id: "MED-BIL-02", description: "Discharge Checklist: Verify all medications handed over.", priority: "High", riskLevel: "High", consequence: "Post-discharge clinical failure.", proof: "Handover Note" }
            ]
        },
        {
            title: "Hospital Security & Visitor Control",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Perimeter hardening and asset protection.",
            icon: "shield",
            tasks: [
                { id: "MED-SEC-01", description: "Audit Visitor Badge compliance at NICU/Ward entry.", priority: "High", riskLevel: "High", consequence: "Unauthorized person access to vulnerable patients.", proof: "Entry Log" },
                { id: "MED-SEC-02", description: "CCTV Audit: Verify coverage of high-stakes drug stores.", priority: "High", riskLevel: "High", consequence: "Internal theft vulnerability.", proof: "System Dashboard" }
            ]
        }
    ]
};
