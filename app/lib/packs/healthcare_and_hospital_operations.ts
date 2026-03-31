
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
            title: "OPD & Reception Command",
            department: "Front Office",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Governs the patient pipeline and arrival parity.",
            icon: "stethoscope",
            tasks: [
                { id: "H-OPD-01", description: "Verify doctor arrival time against schedule slots.", priority: "High", riskLevel: "Low", consequence: "Patient frustration and review drop.", proof: "Attendance Log" },
                { id: "H-OPD-02", description: "Monitor diagnostic report TAT (Target < 4 hours).", priority: "Medium", riskLevel: "Medium", consequence: "Delayed diagnosis.", proof: "TAT Dashboard" },
                { id: "H-OPD-03", description: "Audit token system and waiting-room hygiene.", priority: "Low", riskLevel: "Low", consequence: "Poor patient first impression.", proof: "Visual Check" },
                { id: "H-OPD-04", description: "Verify availability of wheelchair/stretcher at reception.", priority: "High", riskLevel: "High", consequence: "Delayed care for emergency arrivals.", proof: "Physical Check" },
                { id: "H-OPD-05", description: "Log patient feedback/complaints for morning clinic.", priority: "Medium", riskLevel: "Low", consequence: "Unresolved service issues.", proof: "Feedback Register" }
            ]
        },
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
        },
        {
            title: "Pharmacy & Narcotics Vault",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Pharmacy Lead",
            summary: "High-stakes medication governance.",
            icon: "pill",
            tasks: [
                { id: "H-PHM-01", description: "Narcotics Vault: Independent double-count of all units.", priority: "High", riskLevel: "High", consequence: "Theft and criminal legal liability.", proof: "Dual-Sign Log" },
                { id: "H-PHM-02", description: "Cold Chain: Log fridge temps for biologics twice daily.", priority: "High", riskLevel: "High", consequence: "Ineffective vaccine administration.", proof: "Temp Log" },
                { id: "H-PHM-03", description: "Audit Look-Alike Sound-Alike (LASA) drug segregation.", priority: "High", riskLevel: "High", consequence: "Fatal dispensing error.", proof: "Storage Check" },
                { id: "H-PHM-04", description: "Check prescription validity for Schedule H drugs.", priority: "High", riskLevel: "High", consequence: "Drug control audit failure.", proof: "Invoice Audit" },
                { id: "H-PHM-05", description: "Verify emergency stock of critical life-saving drugs.", priority: "High", riskLevel: "High", consequence: "Death during code blue.", proof: "Stock Sheet" }
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
                { id: "H-LAB-01", description: "Verify daily analyzer calibration against standards.", priority: "High", riskLevel: "High", consequence: "Mismatched clinical diagnostics.", proof: "Calibration Report" },
                { id: "H-LAB-02", description: "Audit critical-result notification log (Target < 15 min).", priority: "High", riskLevel: "High", consequence: "Delayed treatment for vital drops.", proof: "Notification Log" },
                { id: "H-LAB-03", description: "Verify reagent inventory and cold-storage seals.", priority: "Medium", riskLevel: "Medium", consequence: "Failed batch tests.", proof: "Stock Log" }
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
                { id: "H-BIL-01", description: "TPA Pre-Auth Pulse: Verify approval status for all IPs.", priority: "High", riskLevel: "Medium", consequence: "Unrecoverable financial loss.", proof: "System Sync" },
                { id: "H-BIL-02", description: "Consumable Audit: Match ward usage to final bill.", priority: "Medium", riskLevel: "Low", consequence: "Silent profit leakage.", proof: "Bill Audit" },
                { id: "H-BIL-03", description: "Audit Discharge Summary accuracy and doctor sign-off.", priority: "High", riskLevel: "Medium", consequence: "Patient readmission liability.", proof: "Summary Check" }
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
                { id: "H-SEC-01", description: "CCTV Audit: Verify coverage of high-risk drug stores.", priority: "High", riskLevel: "High", consequence: "Untraceable internal theft.", proof: "System Check" },
                { id: "H-SEC-02", description: "Visitor Badge Enforcement: Check Ward entry points.", priority: "Medium", riskLevel: "Low", consequence: "Unauthorized person access to patients.", proof: "Patrol Log" },
                { id: "H-SEC-03", description: "Audit infant-protection alarm/tagging system.", priority: "High", riskLevel: "High", consequence: "Infant abduction (Catastrophic).", proof: "Signal Test" }
            ]
        },
        {
            title: "Biomedical Waste (EHS)",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Compliance for bio-hazards and sharp waste.",
            icon: "recycle",
            tasks: [
                { id: "H-WST-01", description: "Verify color-coded segregation at ward source.", priority: "High", riskLevel: "High", consequence: "Fines and disease transmission.", proof: "Visual Audit" },
                { id: "H-WST-02", description: "Audit sharps-container fill levels (Target 75% max).", priority: "High", riskLevel: "Medium", consequence: "Needle-stick injuries to staff.", proof: "Visual Check" },
                { id: "H-WST-03", description: "Log daily collection and handover to incineration vendor.", priority: "High", riskLevel: "High", consequence: "Regulatory non-compliance.", proof: "Waste Manifest" }
            ]
        }
    ]
};
