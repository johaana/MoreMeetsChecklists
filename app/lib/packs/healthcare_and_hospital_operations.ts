
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operations System",
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
    badgeText: "V15.0 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Admin Directors"],
    sampleItems: [
        { text: "<strong>Clinical Safety (WHO)</strong>: Pre-incision time-outs and dual-verification for high-alert drugs.", icon: "shield-check" },
        { text: "<strong>Nursing & Ward Command</strong>: Bedside handover audits and crash-cart integrity tracking.", icon: "heart-pulse" },
        { text: "<strong>Pharmacy & Narcotics</strong>: Strict access logs and double-blind stock counts for controlled drugs.", icon: "pill" },
        { text: "<strong>Biomedical Waste (EHS)</strong>: Legal compliance for waste segregation and spillage kit readiness.", icon: "recycle" }
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
            frequency: "Per Procedure",
            role: "OT In-charge",
            summary: "Zero-fail protocols for the operating theater.",
            icon: "shield-check",
            tasks: [
                { id: "H-OT-SUR-01", description: "Execute WHO 'Time Out' before every incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Fatal never-event).", proof: "Sign-off" },
                { id: "H-OT-SUR-02", description: "Verify sterility indicators on all instrument sets.", priority: "High", riskLevel: "High", consequence: "Post-operative infection outbreak.", proof: "Indicator Tape" },
                { id: "H-OT-SUR-03", description: "Perform pre-opening leak-test for anesthesia workstations.", priority: "High", riskLevel: "High", consequence: "Intra-operative system failure.", proof: "System Log" }
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
                { id: "H-NUR-02", description: "Crash Cart Integrity: Verify AED battery and drug seals.", priority: "High", riskLevel: "High", consequence: "Resuscitation failure.", proof: "Seal Check" },
                { id: "H-NUR-03", description: "Patient ID Audit: Confirm wristband accuracy for 100% of ward.", priority: "High", riskLevel: "High", consequence: "Medication or procedure mix-up.", proof: "Audit Sheet" }
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
                { id: "H-PHM-PHM-01", description: "Narcotics Vault: Independent double-count of all units.", priority: "High", riskLevel: "High", consequence: "Theft and criminal legal liability.", proof: "Dual-Sign Log" },
                { id: "H-PHM-PHM-02", description: "Cold Chain: Log fridge temps for biologics twice daily.", priority: "High", riskLevel: "High", consequence: "Ineffective vaccine administration.", proof: "Temp Log" }
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
                { id: "H-WST-WST-01", description: "Verify color-coded segregation at ward source.", priority: "High", riskLevel: "High", consequence: "Fines and disease transmission.", proof: "Visual Audit" },
                { id: "H-WST-WST-02", description: "Audit sharps-container fill levels (Target 75% max).", priority: "High", riskLevel: "Medium", consequence: "Needle-stick injuries to staff.", proof: "Visual Check" }
            ]
        },
        {
            title: "Engineering & Life Safety",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Infrastructure uptime and life-support protection.",
            icon: "zap",
            tasks: [
                { id: "H-ENG-GAS-01", description: "Log main O2 manifold line pressure and purity.", priority: "High", riskLevel: "High", consequence: "Patient hypoxia and system failure.", proof: "Pressure Log" },
                { id: "H-ENG-AMB-02", description: "Generator Auto-Start Test: Verify power flip in <10s.", priority: "High", riskLevel: "High", consequence: "Blackout during critical care.", proof: "Drill Log" }
            ]
        }
    ]
};
