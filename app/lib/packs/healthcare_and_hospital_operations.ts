
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operations System",
    priceINR: 3499,
    priceUSD: 49,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The Sovereign v17.3 clinical governance engine. Hardening 180+ critical control points across clinical and administrative nursing roles.",
    icon: "hospital",
    badgeText: "V17.3 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Clinical In-charges"],
    sampleItems: [
        { text: "<strong>WHO Surgical Safety</strong>: Pre-incision time-out seals and site verification.", icon: "shield-check" },
        { text: "<strong>Narcotics Command</strong>: Double-blind vault count logs and diversion monitoring.", icon: "pill" },
        { text: "<strong>Infection Control</strong>: CSSD sterility indicators and ICU hygiene cycles.", icon: "sparkles" }
    ],
    checklists: [
        {
            title: "Executive Clinical Governance",
            department: "Clinical",
            frequency: "Daily",
            role: "Medical Director",
            summary: "High-level strategic oversight of clinical risk and sentinel events.",
            icon: "crown",
            tasks: [
                { id: "H-EXE-01", description: "Sentinel Event Review", technicalProtocol: "Review Sentinel Event Log; cross-match near-miss clinical errors with escalation signatures.", priority: "High", riskLevel: "High", consequence: "Fatal patient harm and loss of license.", proof: "Log Audit" },
                { id: "H-EXE-02", description: "Physician Credentialing", technicalProtocol: "Verify 100% validity of medical registration for active IP consultants.", priority: "High", riskLevel: "High", consequence: "Practice by unqualified practitioners.", proof: "Credential Registry" },
                { id: "H-EXE-03", description: "OT Privileging Audit", technicalProtocol: "Verify match between surgeon specialty and scheduled IP list.", priority: "High", riskLevel: "High", consequence: "Malpractice liability.", proof: "Privilege File" },
                { id: "H-EXE-04", description: "M&M Committee Oversight", technicalProtocol: "Verify implementation of 100% corrective actions from last M&M meeting.", priority: "High", riskLevel: "Medium", consequence: "Lack of clinical accountability.", proof: "Minutes Folder" }
            ]
        },
        {
            title: "Quality & Accreditation",
            department: "Quality",
            frequency: "Daily",
            role: "Quality Manager",
            summary: "Governance for NABH/JCI indicators and accreditation parity.",
            icon: "shield-check",
            tasks: [
                { id: "H-QH-01", description: "NABH Indicator Sync", technicalProtocol: "Verify 100% data entry for daily clinical indicators in the master portal.", priority: "High", riskLevel: "Medium", consequence: "Accreditation lapse.", proof: "Data Portal" },
                { id: "H-QH-02", description: "Clinical Chart Audit", technicalProtocol: "Spot-check 5 random active IP files for assessment completion < 1h.", priority: "High", riskLevel: "Medium", consequence: "Clinical care delay.", proof: "Chart Audit" },
                { id: "H-QH-03", description: "ADR Registry Verify", technicalProtocol: "Confirm 100% of reported ADRs are uploaded to the national registry.", priority: "High", riskLevel: "High", consequence: "Regulatory non-compliance.", proof: "ADR Registry" }
            ]
        },
        {
            title: "Surgical Safety (OT)",
            department: "Surgery",
            frequency: "Per Surgery",
            role: "OT In-Charge",
            summary: "Zero-fail protocols for pre-incision and sterilization.",
            icon: "shield-alert",
            tasks: [
                { id: "H-SUR-01", description: "WHO 'Time Out' Protocol", technicalProtocol: "Execute pre-incision verbal verification for 100% of today's cases.", priority: "High", riskLevel: "High", consequence: "[Fatal: Wrong-site surgery].", proof: "Checklist Log", verificationRequired: true },
                { id: "H-SUR-02", description: "CSSD Sterility Indicators", technicalProtocol: "Inspect color-change indicators on 100% of active instrument sets.", priority: "High", riskLevel: "High", consequence: "Post-op infection outbreaks.", proof: "Visual Check" },
                { id: "H-SUR-03", description: "Biomedical Waste Seal", technicalProtocol: "Verify yellow bin seal integrity in high-care surgical zones.", priority: "High", riskLevel: "High", consequence: "Needle-stick injury to staff.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Nursing & Ward Command",
            department: "Nursing",
            frequency: "Daily",
            role: "Nursing Superintendent",
            summary: "Manages the invisible infrastructure of bedside care and handovers.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-NUR-01", description: "Bedside Handover Audit", technicalProtocol: "Audit 5 bedside transfers; verify IV sites and clinical chart parity.", priority: "High", riskLevel: "High", consequence: "Loss of critical patient vitals data.", proof: "Handover Log" },
                { id: "H-NUR-02", description: "Crash Cart Readiness", technicalProtocol: "Verify 100% AED battery status and cardiac drug seal integrity.", priority: "High", riskLevel: "High", consequence: "Resuscitation failure (Fatal).", proof: "Seal Check", verificationRequired: true },
                { id: "H-NUR-03", description: "Narcotics Vault Count", technicalProtocol: "Conduct double-blind physical count of all controlled substances.", priority: "High", riskLevel: "High", consequence: "Drug diversion and criminal liability.", proof: "Dual-Sign Log" }
            ]
        },
        {
            title: "OPD & Diagnostic Flow",
            department: "OPD",
            frequency: "Daily",
            role: "OPD Supervisor",
            summary: "Governs the patient pipeline and specialist arrival parity.",
            icon: "stethoscope",
            tasks: [
                { id: "H-OPD-01", description: "Consultant Arrival Parity", technicalProtocol: "Log doctor check-in time against scheduled appointment slots.", priority: "High", riskLevel: "Low", consequence: "Patient frustration and review drop.", proof: "Attendance Log", verificationRequired: false },
                { id: "H-OPD-02", description: "Diagnostic TAT Pulse", technicalProtocol: "Monitor report delivery times; flag any delay > 4 hours.", priority: "Medium", riskLevel: "Medium", consequence: "Delayed treatment pipeline.", proof: "TAT Dashboard" }
            ]
        },
        {
            title: "Infection Control (ICU)",
            department: "Quality",
            frequency: "Daily",
            role: "Infection Control Nurse",
            summary: "Sanitization cycles and hospital-acquired infection mitigation.",
            icon: "sparkles",
            tasks: [
                { id: "H-IC-01", description: "ATP Surface Pulse", technicalProtocol: "Conduct random RLU swab test of high-touch bedside surfaces.", priority: "Medium", riskLevel: "High", consequence: "Hospital-acquired infection outbreaks.", proof: "Test Result" },
                { id: "H-IC-02", description: "Hand-Hygiene Compliance", technicalProtocol: "Audit 10 staff entries; verify alcohol rub technique compliance.", priority: "High", riskLevel: "High", consequence: "Systemic cross-contamination.", proof: "Audit Score" }
            ]
        },
        {
            title: "Pharmacy & Cold Chain",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Pharmacist",
            summary: "Medicinal storage integrity and vaccine cold-chain governance.",
            icon: "pill",
            tasks: [
                { id: "H-PHM-01", description: "Vaccine Cold Chain Pulse", technicalProtocol: "Log fridge temperatures twice daily (Target < 5°C).", priority: "High", riskLevel: "High", consequence: "Ineffective vaccine administration.", proof: "Temp Log" },
                { id: "H-PHM-02", description: "LASA Drug Segregation", technicalProtocol: "Inspect racks for 'Look-Alike' drug isolation compliance.", priority: "Medium", riskLevel: "High", consequence: "Dispensing errors.", proof: "Visual Check" }
            ]
        },
        {
            title: "Hospital Facility Vitals",
            department: "Engineering",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "MEP assets and medical gas infrastructure.",
            icon: "wrench",
            tasks: [
                { id: "H-FAC-01", description: "Oxygen Manifold Pressure", technicalProtocol: "Verify Gauge pressure and manifold auto-switch functionality.", priority: "High", riskLevel: "High", consequence: "Oxygen failure in ICU (Fatal).", proof: "Gauge Log", verificationRequired: true },
                { id: "H-FAC-02", description: "Emergency Power (DG)", technicalProtocol: "Check DG fuel and ARD battery levels for surgical lifts.", priority: "High", riskLevel: "High", consequence: "Total blackout during power failure.", proof: "Test Log" }
            ]
        },
        {
            title: "Hospital Security",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and protects vulnerable IP zones.",
            icon: "shield-check",
            tasks: [
                { id: "H-SEC-01", description: "Visitor Badge Audit", technicalProtocol: "Audit register for 100% ID verification at Ward gates.", priority: "Medium", riskLevel: "Low", consequence: "Unauthorized intruder access to patients.", proof: "Registry Audit" },
                { id: "H-SEC-02", description: "Drug-Store CCTV Sync", technicalProtocol: "Verify 30-day recording backup and time sync for Pharmacy.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for drug theft.", proof: "System Screen" }
            ]
        },
        {
            title: "Medical Records (MRD)",
            department: "Admin",
            frequency: "Daily",
            role: "MRD Coordinator",
            summary: "Document security and medico-legal archival.",
            icon: "file-lock",
            tasks: [
                { id: "H-MRD-01", description: "Wet-ink Consent Registry", technicalProtocol: "Verify 100% archival of original consent forms for yesterday's OTs.", priority: "High", riskLevel: "Medium", consequence: "Legal defense collapse during litigation.", proof: "File Audit" }
            ]
        },
        {
            title: "Billing & TPA Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Billing Lead",
            summary: "Revenue protection and insurance pre-auth command.",
            icon: "banknote",
            tasks: [
                { id: "H-BIL-01", description: "TPA Pre-Auth Pulse", technicalProtocol: "Verify approval status for 100% of today's planned admissions.", priority: "High", riskLevel: "Medium", consequence: "Unrecoverable financial loss.", proof: "System Sync" }
            ]
        }
    ]
};
