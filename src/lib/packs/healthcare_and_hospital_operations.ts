
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
        { text: "<strong>Air Ambulance Logistics</strong>: Landing zone safety and flight-medical kit verification.", icon: "plane" },
        { text: "<strong>Security & Perimeter</strong>: Visitor badge enforcement and CCTV focal point audits for drug stores.", icon: "shield" }
    ],
    checklists: [
        {
            title: "Medical Director Governance",
            department: "Clinical",
            frequency: "Daily",
            role: "Medical Director",
            summary: "Protects the clinical standard of the institution.",
            icon: "crown",
            tasks: [
                { id: "H-EXE-01", description: "Review Sentinel Event Log for near-miss clinical errors.", priority: "High", riskLevel: "High", consequence: "Fatal patient harm and total loss of license.", proof: "Log Audit" },
                { id: "H-EXE-02", description: "Audit doctor attendance parity against surgery schedules.", priority: "High", riskLevel: "Medium", consequence: "Delayed critical procedures.", proof: "Roster Check" }
            ]
        },
        {
            title: "Surgical Safety (WHO)",
            department: "Surgery",
            frequency: "Per Show",
            role: "Nursing Lead",
            summary: "Zero-fail protocols for the operating theater.",
            icon: "shield-check",
            tasks: [
                { id: "H-SUR-01", description: "Execute WHO 'Time Out' before every incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Fatal never-event).", proof: "Sign-off" },
                { id: "H-SUR-02", description: "Verify sterility indicators on all instrument sets.", priority: "High", riskLevel: "High", consequence: "Post-operative infection outbreak.", proof: "Indicator Tape" }
            ]
        },
        {
            title: "Ward & Bedside Command",
            department: "Nursing",
            frequency: "Daily",
            role: "Nursing Superintendent",
            summary: "Manages the invisible infrastructure of patient care.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-NUR-01", description: "Bedside Handover: Verify IV sites and clinical charts.", priority: "High", riskLevel: "High", consequence: "Loss of critical patient vitals data.", proof: "Handover Log" },
                { id: "H-NUR-02", description: "Crash Cart Integrity: Verify AED battery and drug seals.", priority: "High", riskLevel: "High", consequence: "Resuscitation failure.", proof: "Seal Check" }
            ]
        },
        {
            title: "OPD & Diagnostic Command",
            department: "OPD",
            frequency: "Daily",
            role: "OPD Manager",
            summary: "Governs the patient pipeline and arrival parity.",
            icon: "stethoscope",
            tasks: [
                { id: "H-OPD-01", description: "Verify doctor arrival time against schedule slots.", priority: "High", riskLevel: "Low", consequence: "Patient frustration and review drop.", proof: "Attendance Log" },
                { id: "H-OPD-02", description: "Monitor diagnostic report TAT (Target < 4 hours).", priority: "Medium", riskLevel: "Medium", consequence: "Delayed diagnosis.", proof: "TAT Dashboard" }
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
                { id: "H-PHM-01", description: "Narcotics Vault: Independent double-count of all units.", priority: "High", riskLevel: "High", consequence: "Theft and criminal legal liability.", proof: "Dual-Sign Log" },
                { id: "H-PHM-02", description: "Cold Chain: Log fridge temps for biologics twice daily.", priority: "High", riskLevel: "High", consequence: "Ineffective vaccine administration.", proof: "Temp Log" }
            ]
        },
        {
            title: "Billing & Insurance Shield",
            department: "Billing",
            frequency: "Daily",
            role: "Billing Manager",
            summary: "Protects the revenue pipeline.",
            icon: "banknote",
            tasks: [
                { id: "H-BIL-01", description: "TPA Pre-Auth Pulse: Verify approval status for all IPs.", priority: "High", riskLevel: "Medium", consequence: "Unrecoverable financial loss.", proof: "System Sync" },
                { id: "H-BIL-02", description: "Consumable Audit: Match ward usage to final bill.", priority: "Medium", riskLevel: "Low", consequence: "Silent profit leakage.", proof: "Bill Audit" }
            ]
        },
        {
            title: "Biomedical Waste (EHS)",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Regulatory compliance for bio-hazards.",
            icon: "recycle",
            tasks: [
                { id: "H-WST-01", description: "Verify color-coded segregation at ward source.", priority: "High", riskLevel: "High", consequence: "Fines and disease transmission.", proof: "Visual Audit" },
                { id: "H-WST-02", description: "Audit sharps-container fill levels (Target 75% max).", priority: "High", riskLevel: "Medium", consequence: "Needle-stick injuries to staff.", proof: "Visual Check" }
            ]
        },
        {
            title: "Hospital Security & Visitor Control",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and protects assets.",
            icon: "shield",
            tasks: [
                { id: "H-SEC-01", description: "CCTV Audit: Verify coverage of high-risk drug stores.", priority: "High", riskLevel: "High", consequence: "Untraceable internal theft.", proof: "System Check" },
                { id: "H-SEC-02", description: "Visitor Badge Enforcement: Check Ward entry points.", priority: "Medium", riskLevel: "Low", consequence: "Unauthorized person access to patients.", proof: "Patrol Log" }
            ]
        }
    ]
};
