
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operations System",
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The Sovereign v11.9 clinical engine for hospitals and specialized medical centers. Hardening 200+ control points from surgical safety to narcotics governance.",
    heroHeadline: "Zero-Risk Medical Operations. Audit-Ready.",
    heroSubheadline: "Track 200+ technical control points across 12 clinical and operational roles—even when you’re not on property.",
    pricingUrgency: "A single clinical error or one NABH/JCI audit failure costs 1000x more than this system.",
    consultingAnchor: 15000,
    icon: "hospital",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Admin Directors"],
    sampleItems: [
        { text: "<strong>Clinical Safety (WHO)</strong>: Pre-incision time-outs and dual-verification for high-alert drugs.", icon: "shield-check" },
        { text: "<strong>Nursing & Ward Command</strong>: Bedside handover audits and crash-cart integrity tracking.", icon: "heart-pulse" },
        { text: "<strong>Pharmacy & Narcotics</strong>: Strict access logs and double-blind stock counts for controlled drugs.", icon: "pill" },
        { text: "<strong>Billing & Discharge Shield</strong>: TPA pre-auth tracking and unbilled consumable audits.", icon: "banknote" },
        { text: "<strong>Biomedical Waste (EHS)</strong>: Legal compliance for waste segregation and sharps fill levels.", icon: "recycle" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure safety standards stay if key staff resign.", icon: "history" }
    ],
    checklists: [
        {
            title: "Strategic Clinical Governance",
            department: "Clinical",
            frequency: "Weekly",
            role: "Medical Director",
            summary: "High-level risk and clinical liability oversight.",
            icon: "crown",
            tasks: [
                { id: "H-EXE-01", description: "Review clinical error log (sentinel events) and check root causes.", priority: "High", riskLevel: "High", consequence: "Fatal patient harm and total loss of hospital license.", proof: "Log Audit" },
                { id: "H-EXE-02", description: "Test the 'Mass Casualty' siren and check backup radio frequencies.", priority: "High", riskLevel: "High", consequence: "Chaos during a major accident or disaster.", proof: "Drill Log" },
                { id: "H-EXE-03", description: "Audit doctor registration cards to ensure they are current.", priority: "High", riskLevel: "High", consequence: "Criminal liability for unlicensed practice.", proof: "Registry Audit" },
                { id: "H-EXE-04", description: "Check quarterly infection rates in ICU blocks vs target.", priority: "High", riskLevel: "High", consequence: "NABH audit failure and longer patient stays.", proof: "Infection Log" },
                { id: "H-EXE-05", description: "Verify professional indemnity insurance for all consultants.", priority: "High", riskLevel: "High", consequence: "Personal and institutional legal exposure.", proof: "Policy File" },
                { id: "H-EXE-06", description: "Audit minutes of the Mortality Review Committee.", priority: "High", riskLevel: "High", consequence: "Unchecked trends in clinical failures.", proof: "Minutes File" },
                { id: "H-EXE-07", description: "Review 'Code Blue' response times (Target < 3 minutes).", priority: "High", riskLevel: "High", consequence: "Resuscitation failure due to delay.", proof: "Code Log" },
                { id: "H-EXE-08", description: "Audit blood bank match logs for dual-signature signoff.", priority: "High", riskLevel: "High", consequence: "Fatal transfusion error.", proof: "Audit Sheet" },
                { id: "H-EXE-09", description: "Verify ethics approval for all active clinical trials.", priority: "Medium", riskLevel: "High", consequence: "Legal shutdown of research programs.", proof: "Ethics File" },
                { id: "H-EXE-10", description: "Review High-Alert drug error trends for the month.", priority: "High", riskLevel: "High", consequence: "Systemic patient poisoning risk.", proof: "Error Log" }
            ]
        },
        {
            title: "Nursing & Ward Command",
            department: "Nursing",
            frequency: "Daily",
            role: "Nursing Superintendent",
            summary: "Nursing discipline, bedside handover, and safety audits.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-NUR-01", description: "Verify crash cart seal integrity and O2 cylinder pressure.", priority: "High", riskLevel: "High", consequence: "Rescue failure during cardiac arrest.", proof: "Seal Check" },
                { id: "H-NUR-02", description: "Execute bedside handover: verify IV sites and clinical charts.", priority: "High", riskLevel: "High", consequence: "Loss of critical patient data during rotation.", proof: "Handover Log" },
                { id: "H-NUR-03", description: "Verify side-rails are up for all high-risk elderly cases.", priority: "High", riskLevel: "Medium", consequence: "Patient injury and medical negligence claim.", proof: "Visual Check" },
                { id: "H-NUR-04", description: "Audit Medication Administration Record (MAR) for gaps.", priority: "High", riskLevel: "High", consequence: "Fatal double-dosing or missed medication.", proof: "MAR Audit" },
                { id: "H-NUR-05", description: "Inspect 5 random IV sites for signs of phlebitis/infection.", priority: "High", riskLevel: "Medium", consequence: "Hospital-acquired infection spike.", proof: "Audit Sheet" },
                { id: "H-NUR-06", description: "Test ICU ventilator battery charge status.", priority: "High", riskLevel: "High", consequence: "Death during power flip.", proof: "System Screen" },
                { id: "H-NUR-07", description: "Test Code Blue button in a random ward zone.", priority: "High", riskLevel: "High", consequence: "System failure during real emergency.", proof: "Test Log" },
                { id: "H-NUR-08", description: "Inspect bedside lockers for dust or stored outside food.", priority: "Low", riskLevel: "Low", consequence: "Unhygienic environment.", proof: "Visual Check" },
                { id: "H-NUR-09", description: "Verify availability of sterile linen par stocks.", priority: "Medium", riskLevel: "Low", consequence: "Service failure.", proof: "Stock Note" },
                { id: "H-NUR-10", description: "Final shift signature on ward narcotic registry.", priority: "High", riskLevel: "High", consequence: "Drug diversion liability.", proof: "Signed Registry" }
            ]
        },
        {
            title: "Surgical Safety (WHO)",
            department: "Surgery",
            frequency: "Per Procedure",
            role: "OT In-charge",
            summary: "Zero-fail operating theater protocols.",
            icon: "shield-check",
            tasks: [
                { id: "H-SUR-01", description: "Perform WHO 'Time Out' before every incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Fatal never-event).", proof: "Checklist Sign-off" },
                { id: "H-SUR-02", description: "Dual-person count of swabs and needles post-op.", priority: "High", riskLevel: "High", consequence: "Retained foreign object in patient.", proof: "Count Sheet" },
                { id: "H-SUR-03", description: "Confirm sterility indicators (black strip) on all sets.", priority: "High", riskLevel: "High", consequence: "Post-operative sepsis.", proof: "Visual Check" },
                { id: "H-SUR-04", description: "Verify leak-test and alarm function on anesthesia machine.", priority: "High", riskLevel: "High", consequence: "Intra-op respiratory failure.", proof: "System Log" },
                { id: "H-SUR-05", description: "Log OT temp (20°C) and Humidity (50%).", priority: "Medium", riskLevel: "Low", consequence: "Infection risk.", proof: "BMS Reading" },
                { id: "H-SUR-06", description: "Verify surgical site is marked by the surgeon.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery.", proof: "Visual Check" },
                { id: "H-SUR-07", description: "Confirm grounding pad (cautery) correct placement.", priority: "High", riskLevel: "High", consequence: "Surgical site burns.", proof: "Visual Check" },
                { id: "H-SUR-08", description: "Dual-verify patient name on pathology specimen jars.", priority: "High", riskLevel: "Medium", consequence: "Biopsy mismatch.", proof: "Label Audit" },
                { id: "H-SUR-09", description: "Log weekly carbolic/fogging deep-clean cycle.", priority: "High", riskLevel: "High", consequence: "Systemic OT infection.", proof: "Cleaning Log" },
                { id: "H-SUR-10", description: "Witness witnessed seal of OT equipment lockers.", priority: "Medium", riskLevel: "Medium", consequence: "Asset theft.", proof: "Signed Log" }
            ]
        },
        {
            title: "Pharmacy & Narcotics Vault",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Pharmacy Lead",
            summary: "Governance for controlled substances.",
            icon: "pill",
            tasks: [
                { id: "H-PHM-01", description: "NarcoticsSafe: Independent double-count of all units.", priority: "High", riskLevel: "High", consequence: "Drug diversion and criminal charges.", proof: "Dual-Sign Log" },
                { id: "H-PHM-02", description: "Log fridge temp for vaccines and insulin (2°C - 8°C).", priority: "High", riskLevel: "High", consequence: "Ineffective medication.", proof: "Temp Log" },
                { id: "H-PHM-03", description: "Verify 'Look-Alike' drugs are stored separately.", priority: "High", riskLevel: "High", consequence: "Fatal medication mix-up.", proof: "Visual Audit" },
                { id: "H-PHM-04", description: "Remove items with < 90 days shelf life.", priority: "High", riskLevel: "Medium", consequence: "Dispensing expired drugs.", proof: "Expiry Register" },
                { id: "H-PHM-05", description: "Ensure red labels on all high-alert electrolytes.", priority: "High", riskLevel: "High", consequence: "Accidental fatal infusion.", proof: "Audit Check" }
            ]
        },
        {
            title: "Bio-Waste & EHS",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Regulatory compliance for bio-hazards.",
            icon: "recycle",
            tasks: [
                { id: "H-WST-01", description: "Verify 100% color-coded bin compliance at source.", priority: "High", riskLevel: "High", consequence: "Fines and disease spread.", proof: "Visual Audit" },
                { id: "H-WST-02", description: "Check sharps bins for 75% fill and secure lids.", priority: "High", riskLevel: "High", consequence: "Needle-stick injuries to staff.", proof: "Visual Check" },
                { id: "H-WST-03", description: "Check contents of chemical and blood spill kits.", priority: "High", riskLevel: "High", consequence: "Toxic exposure during spill.", proof: "Stock Check" },
                { id: "H-WST-04", description: "Monitor STP/ETP plant pH and flow meters.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental law violation.", proof: "Plant Log" },
                { id: "H-WST-05", description: "Verify sharps-waste manifest for municipal pickup.", priority: "High", riskLevel: "High", consequence: "Legal liability.", proof: "Signed Receipt" }
            ]
        },
        {
            title: "Hospital Security",
            department: "Security",
            frequency: "Daily",
            role: "Security Head",
            summary: "Perimeter hardening and asset protection.",
            icon: "shield",
            tasks: [
                { id: "H-SEC-01", description: "Verify 30-day CCTV backup and time-sync status.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance/legal.", proof: "System Screen" },
                { id: "H-SEC-02", description: "Audit visitor register for 100% ID capture at gate.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit" },
                { id: "H-SEC-03", description: "Verify all fire exits are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment.", proof: "Patrol Log" },
                { id: "H-SEC-04", description: "Random alcohol check for night shift guards.", priority: "High", riskLevel: "High", consequence: "Vulnerable perimeter.", proof: "Test Note" },
                { id: "H-SEC-05", description: "Test panic buttons at Pharmacy and Cash counters.", priority: "High", riskLevel: "High", consequence: "System failure during emergency.", proof: "Test Log" }
            ]
        },
        {
            title: "Revenue & Billing Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Billing Manager",
            summary: "Protects the revenue pipeline.",
            icon: "banknote",
            tasks: [
                { id: "H-FIN-01", description: "TPA Pre-Auth: Verify approval status for all IP cases.", priority: "High", riskLevel: "Medium", consequence: "Unrecoverable financial loss.", proof: "System Sync" },
                { id: "H-FIN-02", description: "Consumable Audit: Match ward usage to final bill.", priority: "Medium", riskLevel: "Low", consequence: "Silent profit leakage.", proof: "Bill Audit" },
                { id: "H-FIN-03", description: "Match cash-in-hand to HIS daily sales report.", priority: "High", riskLevel: "High", consequence: "Internal cashier theft.", proof: "Settlement Log" },
                { id: "H-FIN-04", description: "Review reason codes for all manual bill overrides.", priority: "Medium", riskLevel: "Medium", consequence: "Margin erosion.", proof: "System Log" },
                { id: "H-FIN-05", description: "Manager sign-off on 100% of cancelled invoices.", priority: "High", riskLevel: "High", consequence: "Theft masked as errors.", proof: "Audit Sheet" }
            ]
        },
        {
            title: "Diagnostics & Lab Flow",
            department: "OPD",
            frequency: "Daily",
            role: "OPD Manager",
            summary: "Governs the patient pipeline and arrival parity.",
            icon: "microscope",
            tasks: [
                { id: "H-OPD-01", description: "Verify doctor arrival time against schedule slots.", priority: "High", riskLevel: "Low", consequence: "Patient frustration.", proof: "Attendance Log" },
                { id: "H-OPD-02", description: "Monitor diagnostic report TAT (Target < 4 hours).", priority: "Medium", riskLevel: "Medium", consequence: "Delayed clinical decisions.", proof: "TAT Dashboard" },
                { id: "H-OPD-03", description: "Inspect drinking water points for drainage and hygiene.", priority: "High", riskLevel: "Low", consequence: "Negative ratings.", proof: "Hourly Sheet" },
                { id: "H-OPD-04", description: "Check lab reagent par stocks and expiry dates.", priority: "High", riskLevel: "Medium", consequence: "Lab service halt.", proof: "Stock Sheet" },
                { id: "H-OPD-05", description: "Verify backup internet line for HIS connectivity.", priority: "High", riskLevel: "Low", consequence: "Billing gridlock.", proof: "Ping Test" }
            ]
        },
        {
            title: "MEP & Medical Gas Vitals",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Infrastructure uptime and life-support protection.",
            icon: "wrench",
            tasks: [
                { id: "H-ENG-01", description: "Log O2 manifold pressure and purity (Target > 93%).", priority: "High", riskLevel: "High", consequence: "Fatal patient hypoxia.", proof: "Purity Log" },
                { id: "H-ENG-02", description: "Test ICU/OT UPS bank for 10-min battery run-time.", priority: "High", riskLevel: "High", consequence: "Blackout during critical care.", proof: "Voltage Log" },
                { id: "H-ENG-03", description: "Verify RO output TDS for Dialysis (Target < 50).", priority: "High", riskLevel: "High", consequence: "Clinical contamination crisis.", proof: "TDS Reading" },
                { id: "H-ENG-04", description: "Heat-scan electrical panels for MRI/CT suites.", priority: "High", riskLevel: "High", consequence: "Fire hazard / Unit failure.", proof: "IR Log" },
                { id: "H-ENG-05", description: "Verify 48-hour fuel backup for hospital DG sets.", priority: "High", riskLevel: "High", consequence: "Infrastructure collapse.", proof: "Fuel Log" }
            ]
        }
    ]
};
