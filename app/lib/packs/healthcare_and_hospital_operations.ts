
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operations System",
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The Sovereign v11.9 clinical engine for hospitals and specialized medical centers. Hardening 200+ control points from surgical safety to biomedical waste.",
    icon: "hospital",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Admin Directors"],
    sampleItems: [
        { text: "<strong>Clinical Safety (WHO)</strong>: Pre-incision time-outs and dual-verification for high-alert drugs.", icon: "shield-check" },
        { text: "<strong>Nursing & Ward Command</strong>: Bedside handover audits and crash-cart integrity tracking.", icon: "heart-pulse" }
    ],
    checklists: [
        {
            title: "Medical Director Governance",
            department: "Clinical",
            frequency: "Daily",
            role: "Medical Director",
            summary: "Protects the clinical standard and institution risk.",
            icon: "crown",
            tasks: [
                { id: "H-EXE-01", technicalProtocol: "Clinical Error Review", floorAction: "Review Sentinel Event Log for near-miss clinical errors.", priority: "High", riskLevel: "High", consequence: "Fatal patient harm and license loss.", proof: "Log Audit" },
                { id: "H-EXE-02", technicalProtocol: "Doctor Attendance Audit", floorAction: "Match doctor arrival against scheduled surgeries.", priority: "High", riskLevel: "Medium", consequence: "Delayed critical procedures.", proof: "Roster Check" },
                { id: "H-EXE-03", technicalProtocol: "Accreditation Watch", floorAction: "Verify weekly quality indicators dashboard status.", priority: "Medium", riskLevel: "Low", consequence: "Audit failure.", proof: "Scorecard" },
                { id: "H-EXE-04", technicalProtocol: "Consent Verification", floorAction: "Audit 10 patient files for signed surgical consent.", priority: "High", riskLevel: "High", consequence: "Legal suit / malpractice.", proof: "File Audit" }
            ]
        },
        {
            title: "Operating Theater Safety",
            department: "Surgery",
            frequency: "Per Show",
            role: "OT In-charge",
            summary: "Zero-fail protocols for the OT environment.",
            icon: "shield-check",
            tasks: [
                { id: "H-OT-01", technicalProtocol: "WHO Time-Out Seal", floorAction: "Execute WHO 'Time Out' before every incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Fatal).", proof: "Sign-off" },
                { id: "H-OT-02", technicalProtocol: "Sterility Indicator Audit", floorAction: "Verify indicators on all instrument sets.", priority: "High", riskLevel: "High", consequence: "Post-op infection outbreak.", proof: "Tape Check" },
                { id: "H-OT-03", technicalProtocol: "Anesthesia Leak Test", floorAction: "Pre-opening pressure test for workstations.", priority: "High", riskLevel: "High", consequence: "System failure.", proof: "System Log" },
                { id: "H-OT-04", technicalProtocol: "CSSD Cycle Match", floorAction: "Verify biological indicators for batch loads.", priority: "High", riskLevel: "High", consequence: "Septicemia risk.", proof: "Lab Report" }
            ]
        },
        {
            title: "Ward & Bedside Command",
            department: "Nursing",
            frequency: "Daily",
            role: "Nursing Superintendent",
            summary: "Governance for ward infrastructure and patient care.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-NUR-01", technicalProtocol: "Bedside Handover Audit", floorAction: "Verify IV sites and vitals charts at shift change.", priority: "High", riskLevel: "High", consequence: "Clinical data loss.", proof: "Handover Log" },
                { id: "H-NUR-02", technicalProtocol: "Crash Cart Seal Integrity", floorAction: "Verify AED battery and drug seals physically.", priority: "High", riskLevel: "High", consequence: "Resuscitation failure.", proof: "Seal Log" },
                { id: "H-NUR-03", technicalProtocol: "Patient ID Sync", floorAction: "Confirm wristband accuracy for 100% of ward.", priority: "High", riskLevel: "High", consequence: "Medication mix-up.", proof: "Audit Sheet" },
                { id: "H-NUR-04", technicalProtocol: "Hand Hygiene Pulse", floorAction: "Audit sanitizer usage during 5 random bed visits.", priority: "Medium", riskLevel: "Medium", consequence: "Hospital Acquired Infection.", proof: "Observer Log" }
            ]
        },
        {
            title: "Pharmacy & Narcotics",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Pharmacy Lead",
            summary: "Governance for controlled substances and cold chain.",
            icon: "pill",
            tasks: [
                { id: "H-PHM-01", technicalProtocol: "Narcotics Vault Count", floorAction: "Double-blind count of all vault units.", priority: "High", riskLevel: "High", consequence: "Theft and criminal liability.", proof: "Dual-Sign Log" },
                { id: "H-PHM-02", technicalProtocol: "Cold Chain Pulse", floorAction: "Log medical fridge temp twice daily.", priority: "High", riskLevel: "High", consequence: "Spoiled biologicals.", proof: "Temp Log" },
                { id: "H-PHM-03", technicalProtocol: "Expiry Sweep", floorAction: "Remove items with < 60 days shelf life.", priority: "Medium", riskLevel: "Low", consequence: "Ineffective drug issue.", proof: "Sweep Report" }
            ]
        },
        {
            title: "EHS & Waste Control",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Compliance for bio-hazards and staff safety.",
            icon: "recycle",
            tasks: [
                { id: "H-WST-01", technicalProtocol: "Waste Segregation Audit", floorAction: "Verify color-coded bins at ward source.", priority: "High", riskLevel: "High", consequence: "Regulatory fines.", proof: "Visual Audit" },
                { id: "H-WST-02", technicalProtocol: "Sharps Bin Fill-level", floorAction: "Verify 100% of bins are < 75% full.", priority: "High", riskLevel: "Medium", consequence: "Needle-stick injuries.", proof: "Visual Check" },
                { id: "H-WST-03", technicalProtocol: "Effluent Plant Pulse", floorAction: "Log pH and discharge color.", priority: "Medium", riskLevel: "High", consequence: "Environmental penalties.", proof: "Lab Book" }
            ]
        },
        {
            title: "Engineering Vitals",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Medical infrastructure and life-support uptime.",
            icon: "zap",
            tasks: [
                { id: "H-ENG-GAS-01", technicalProtocol: "Oxygen Manifold Pressure", floorAction: "Log line pressure and purity levels.", priority: "High", riskLevel: "High", consequence: "Patient hypoxia.", proof: "Pressure Log" },
                { id: "H-ENG-02", technicalProtocol: "Generator Auto-Start Pulse", floorAction: "Execute power-flip test (< 10s target).", priority: "High", riskLevel: "High", consequence: "Blackout during critical care.", proof: "Drill Log" },
                { id: "H-ENG-03", technicalProtocol: "UPS Bank Thermal Scan", floorAction: "Infrared scan of OT UPS panels.", priority: "High", riskLevel: "High", consequence: "System fire.", proof: "Scan Log" }
            ]
        },
        {
            title: "Billing & Discharge",
            department: "Finance",
            frequency: "Daily",
            role: "Billing Manager",
            summary: "Governance for revenue protection.",
            icon: "banknote",
            tasks: [
                { id: "H-BIL-01", technicalProtocol: "TPA Pre-Auth Pulse", floorAction: "Check approval status for all current IPs.", priority: "High", riskLevel: "Medium", consequence: "Unrecoverable loss.", proof: "System Sync" },
                { id: "H-BIL-02", technicalProtocol: "Unbilled Item Audit", floorAction: "Reconcile ward consumption to bill entries.", priority: "Medium", riskLevel: "Low", consequence: "Profit leakage.", proof: "Audit Sheet" }
            ]
        }
    ]
};
