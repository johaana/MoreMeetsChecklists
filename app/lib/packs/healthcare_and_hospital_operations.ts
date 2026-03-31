
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operating System",
    priceINR: 799,
    priceUSD: 9,
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
            title: "Surgical Safety & OT",
            department: "Surgery",
            frequency: "Per Show",
            role: "Nursing Lead",
            summary: "Zero-fail clinical protocols for the operating theater.",
            icon: "shield-check",
            tasks: [
                { id: "H-SUR-01", description: "Execute WHO 'Time Out' before every incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Fatal never-event).", proof: "Sign-off" },
                { id: "H-SUR-02", description: "Verify sterility indicators on all instrument sets.", priority: "High", riskLevel: "High", consequence: "Post-operative infection outbreak.", proof: "Indicator Tape" },
                { id: "H-SUR-03", description: "Reconcile swab and instrument counts post-procedure.", priority: "High", riskLevel: "High", consequence: "Retained foreign object in patient.", proof: "Count Sheet" },
                { id: "H-SUR-04", description: "Log OT temperature and humidity (Target: 20-24°C).", priority: "High", riskLevel: "Medium", consequence: "Bacterial growth risk.", proof: "System Log" },
                { id: "H-SUR-05", description: "Audit surgical scrub-in duration compliance.", priority: "High", riskLevel: "High", consequence: "Surgical site infections.", proof: "Supervisor Watch" }
            ]
        }
    ]
};
