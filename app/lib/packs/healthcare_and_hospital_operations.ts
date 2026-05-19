
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operations System",
    priceINR: 3499,
    priceUSD: 49,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The definitive Sovereign v17.9 clinical command engine for multi-specialty hospitals. Hardening 210 technical control points across 24 specialized clinical and administrative roles.",
    heroHeadline: "Zero-Error Clinical Command. Life-Critical Governance.",
    heroSubheadline: "Protect patient safety, secure narcotics, and monitor clinical vitals—across every ward, OT, and ICU in your facility.",
    pricingUrgency: "A single clinical never-event or one NABH/JCI accreditation failure costs 1,000x more than this entire system.",
    consultingAnchor: 25000,
    icon: "hospital",
    badgeText: "V17.9 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Superintendents", "Hospital COOs", "Nursing Directors", "Quality Heads", "Clinical Leads"],
    sampleItems: [
        { text: "<strong>WHO Surgical Safety</strong>: Pre-incision time-out seals and site verification logic.", icon: "shield-check" },
        { text: "<strong>Narcotics Command</strong>: Double-blind vault count logs and diversion monitoring.", icon: "pill" },
        { text: "<strong>Infection Control Engine</strong>: CSSD sterility indicators and ICU hygiene cycle audits.", icon: "sparkles" },
        { text: "<strong>Emergency Triage</strong>: Red/Yellow/Green prioritization pulse and ER handover timing.", icon: "ambulance" },
        { text: "<strong>Biomedical Vitals</strong>: Oxygen manifold pressure checks and dialysis water purity monitoring.", icon: "wrench" },
        { text: "<strong>Revenue Shield</strong>: TPA pre-auth tracking and unbilled ward consumable reconciliation.", icon: "banknote" }
    ],
    checklists: [
        {
            title: "Hospital Executive Command",
            department: "Executive",
            frequency: "Daily",
            role: "Medical Superintendent",
            summary: "High-level strategic oversight of clinical risk and sentinel events.",
            icon: "crown",
            tasks: [
                { id: "H-EXE-01", technicalProtocol: "Sentinel Event Triage", floorAction: "Review all near-miss errors and escalation signatures in the last 24h.", priority: "High", riskLevel: "High", consequence: "Fatal patient harm and total loss of institutional license.", proof: "Log Audit", verificationRequired: true },
                { id: "H-EXE-02", technicalProtocol: "Statutory License Pulse", floorAction: "Verify validity of Hospital Registration, Fire NOC, and PC-PNDT certs.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License File", verificationRequired: true },
                { id: "H-EXE-03", technicalProtocol: "Consultant Arrival Parity", floorAction: "Log specialist check-in times against OT/OPD scheduled slots.", priority: "High", riskLevel: "Low", consequence: "Clinical care delay and reputational drop.", proof: "Attendance Log" },
                { id: "H-EXE-04", technicalProtocol: "M&M Committee Oversight", floorAction: "Verify implementation of corrective actions from last Morbidity meeting.", priority: "High", riskLevel: "Medium", consequence: "Lack of clinical accountability.", proof: "Minutes Folder" }
            ]
        },
        {
            title: "Shift Medical Control",
            department: "Clinical",
            frequency: "Daily",
            role: "Duty Medical Officer (DMO)",
            summary: "Ward-level clinical readiness and doctor-nurse coordination.",
            icon: "activity",
            tasks: [
                { id: "H-DMO-01", technicalProtocol: "Clinical Handover Bridge", floorAction: "Verify zero-gap data transfer between AM/PM medical teams.", priority: "High", riskLevel: "High", consequence: "Loss of critical patient vitals data.", proof: "Handover Log", verificationRequired: true },
                { id: "H-DMO-02", technicalProtocol: "High-Risk Ward Round", floorAction: "Physically assess all patients flagged as 'Unstable' in the EMR.", priority: "High", riskLevel: "High", consequence: "Undetected clinical deterioration.", proof: "Assessment Note" },
                { id: "H-DMO-03", technicalProtocol: "Statutory Mortality Report", floorAction: "Review 100% of death certificates for accuracy pre-MRO filing.", priority: "High", riskLevel: "Medium", consequence: "Legal/Police complications.", proof: "Registry Audit", verificationRequired: true }
            ]
        },
        {
            title: "Emergency Room Command",
            department: "Emergency",
            frequency: "Hourly",
            role: "ER Consultant",
            summary: "Triage efficiency and red-zone readiness.",
            icon: "ambulance",
            tasks: [
                { id: "H-ER-01", technicalProtocol: "Triage Classification Audit", floorAction: "Verify 100% Red/Yellow/Green tagging accuracy at ER entrance.", priority: "High", riskLevel: "High", consequence: "Delayed treatment for life-critical cases.", proof: "Triage Log", verificationRequired: true },
                { id: "H-ER-02", technicalProtocol: "Resuscitation Bay Readiness", floorAction: "Test ventilator, defibrillator, and suction in the Red Zone.", priority: "High", riskLevel: "High", consequence: "Fatal equipment failure during a code.", proof: "Test Note", verificationRequired: true }
            ]
        },
        {
            title: "Critical Care Governance",
            department: "ICU",
            frequency: "Daily",
            role: "ICU Intensivist",
            summary: "Advanced vitals monitoring and organ-support command.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-ICU-01", technicalProtocol: "Vitals Trend Validation", floorAction: "Review 100% of ventilator settings vs. blood-gas (ABG) targets.", priority: "High", riskLevel: "High", consequence: "Acute respiratory failure.", proof: "Chart Audit", verificationRequired: true },
                { id: "H-ICU-02", technicalProtocol: "Invasive Line Integrity", floorAction: "Inspect site hygiene for all central lines and arterial ports.", priority: "High", riskLevel: "High", consequence: "Sepsis and multi-organ failure.", proof: "Visual Check" }
            ]
        },
        {
            title: "Surgical Safety (OT)",
            department: "Surgery",
            frequency: "Per Surgery",
            role: "OT Surgeon",
            summary: "Zero-fail protocols for pre-incision and sterilization.",
            icon: "scissors",
            tasks: [
                { id: "H-SUR-01", technicalProtocol: "WHO 'Time Out' Protocol", floorAction: "Execute pre-incision verbal verification for 100% of today's cases.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Fatal never-event).", proof: "Checklist Log", verificationRequired: true },
                { id: "H-SUR-02", technicalProtocol: "Swab & Instrument Count", floorAction: "Perform independent double-count before wound closure.", priority: "High", riskLevel: "High", consequence: "Retained foreign object inside patient.", proof: "Dual-Sign Log", verificationRequired: true }
            ]
        },
        {
            title: "OT Technical Control",
            department: "Surgery",
            frequency: "Daily",
            role: "OT Technician",
            summary: "Technical sterilization and theater environment command.",
            icon: "settings",
            tasks: [
                { id: "H-OTT-01", technicalProtocol: "CSSD Sterility Indicators", floorAction: "Inspect color-change tapes on 100% of active instrument sets.", priority: "High", riskLevel: "High", consequence: "Post-operative infection outbreaks.", proof: "Visual Check", verificationRequired: true },
                { id: "H-OTT-02", technicalProtocol: "Medical Gas Sync", floorAction: "Confirm Oxygen/Nitrous cylinder levels and auto-switch logic.", priority: "High", riskLevel: "High", consequence: "Gas failure during surgery (Fatal).", proof: "Gauge Log", verificationRequired: true }
            ]
        },
        {
            title: "Anesthesia Governance",
            department: "Surgery",
            frequency: "Per Surgery",
            role: "Anesthetist",
            summary: "Patient sedation safety and recovery monitoring.",
            icon: "droplet",
            tasks: [
                { id: "H-ANE-01", technicalProtocol: "Pre-Anesthesia Assessment", floorAction: "Verify NPO status and airway grading for 100% of list.", priority: "High", riskLevel: "High", consequence: "Aspiration and anesthetic death.", proof: "PAC Form", verificationRequired: true },
                { id: "H-ANE-02", technicalProtocol: "Recovery Vitals Scan", floorAction: "Monitor SpO2 and consciousness scores for post-op transfers.", priority: "High", riskLevel: "Medium", consequence: "Post-operative hypoxia.", proof: "Recovery Log" }
            ]
        },
        {
            title: "Pharmacy & Narcotics Control",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Pharmacist / Pharmacy Manager",
            summary: "Medicinal storage integrity and narcotic vault governance.",
            icon: "pill",
            tasks: [
                { id: "H-PHM-01", technicalProtocol: "Narcotics Vault Count", floorAction: "Conduct double-blind physical count of all controlled substances.", priority: "High", riskLevel: "High", consequence: "Drug diversion and criminal liability.", proof: "Dual-Sign Log", verificationRequired: true },
                { id: "H-PHM-02", technicalProtocol: "Vaccine Cold Chain Pulse", floorAction: "Log fridge temperatures twice daily (Target < 5°C).", priority: "High", riskLevel: "High", consequence: "Ineffective vaccine administration.", proof: "Temp Log", verificationRequired: true },
                { id: "H-PHM-03", technicalProtocol: "LASA Drug Segregation", floorAction: "Inspect racks for 'Look-Alike' drug isolation compliance.", priority: "Medium", riskLevel: "High", consequence: "Fatal dispensing errors.", proof: "Visual Check" }
            ]
        },
        {
            title: "Diagnostic Lab Integrity",
            department: "Laboratory",
            frequency: "Daily",
            role: "Lab Technician (Pathology)",
            summary: "Governance for clinical sample chain-of-custody.",
            icon: "microscope",
            tasks: [
                { id: "H-LAB-01", technicalProtocol: "Sample Custody Chain", floorAction: "Verify 2-ID match (Name/MRN) on 100% of received vials.", priority: "High", riskLevel: "High", consequence: "Wrong result leading to wrong treatment.", proof: "Vial Scan", verificationRequired: true },
                { id: "H-LAB-02", technicalProtocol: "Critical Value Escalation", floorAction: "Log time from 'Result Ready' to 'Doctor Notified' for panic values.", priority: "High", riskLevel: "Medium", consequence: "Fatal delay in clinical intervention.", proof: "Panic Log", verificationRequired: true }
            ]
        },
        {
            title: "Radiology Safety",
            department: "Radiology",
            frequency: "Daily",
            role: "Radiology Technician",
            summary: "Radiation safety and imaging equipment parity.",
            icon: "scan",
            tasks: [
                { id: "H-RAD-01", technicalProtocol: "MRI Zone-4 Lockdown", floorAction: "Check 100% of staff/patients for metallic objects pre-entry.", priority: "High", riskLevel: "High", consequence: "Projectile accident (Fatal).", proof: "Sensor Log", verificationRequired: true },
                { id: "H-RAD-02", technicalProtocol: "Lead Apron Integrity", floorAction: "Fluoroscopic test of 5 random aprons for shielding leaks.", priority: "Medium", riskLevel: "Low", consequence: "Occupational radiation exposure.", proof: "Test Report" }
            ]
        },
        {
            title: "Ward Bedside Nursing",
            department: "Nursing",
            frequency: "Daily",
            role: "Staff Nurses (General Ward)",
            summary: "Daily bedside execution and assessed care.",
            icon: "user-plus",
            tasks: [
                { id: "H-WNS-01", technicalProtocol: "Infusion Site Audit", floorAction: "Check 100% of IV cannulas for phlebitis or leakage.", priority: "Medium", riskLevel: "Low", consequence: "Local infection and patient pain.", proof: "Observation Log" },
                { id: "H-WNS-02", technicalProtocol: "Medication '5-Rights'", floorAction: "Verify 100% dose match against original doctor order.", priority: "High", riskLevel: "High", consequence: "Medication error liability.", proof: "MAR Sheet", verificationRequired: true }
            ]
        },
        {
            title: "Critical Care Nursing",
            department: "ICU",
            frequency: "Hourly",
            role: "ICU Nurses",
            summary: "High-frequency monitoring of unstable patients.",
            icon: "thermometer",
            tasks: [
                { id: "H-INS-01", technicalProtocol: "Crash Cart Readiness", floorAction: "Verify AED battery status and cardiac drug seal integrity.", priority: "High", riskLevel: "High", consequence: "Resuscitation failure (Fatal).", proof: "Seal Check", verificationRequired: true },
                { id: "H-INS-02", technicalProtocol: "Line & Tube Sweep", floorAction: "Confirm security of ET tubes and drainage catheters.", priority: "High", riskLevel: "High", consequence: "Accidental extubation.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Patient Access & Triage",
            department: "Admin",
            frequency: "Daily",
            role: "Emergency Triage Coordinator",
            summary: "Governs the patient pipeline and entry waves.",
            icon: "users",
            tasks: [
                { id: "H-ETC-01", technicalProtocol: "Triage Tagging Flow", floorAction: "Audit 20 random cases for Red/Yellow categorization speed.", priority: "High", riskLevel: "Medium", consequence: "ER gridlock.", proof: "TAT Log" }
            ]
        },
        {
            title: "Admission & KYC Desk",
            department: "Admin",
            frequency: "Daily",
            role: "Patient Admission Desk Officer",
            summary: "KYC compliance and room allocation parity.",
            icon: "user-check",
            tasks: [
                { id: "H-ADM-01", technicalProtocol: "KYC ID Capture (100%)", floorAction: "Scan and log government-approved ID for every IP admission.", priority: "High", riskLevel: "High", consequence: "Medico-legal defense failure.", proof: "Registry Audit", verificationRequired: true }
            ]
        },
        {
            title: "Billing & TPA Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Discharge & Billing Executive",
            summary: "Revenue protection and pre-auth command.",
            icon: "banknote",
            tasks: [
                { id: "H-BIL-01", technicalProtocol: "TPA Pre-Auth Pulse", floorAction: "Verify approval status for 100% of today's admissions.", priority: "High", riskLevel: "Medium", consequence: "Unrecoverable financial loss.", proof: "System Sync", verificationRequired: true },
                { id: "H-BIL-02", technicalProtocol: "Unbilled Consumable Reconcile", floorAction: "Match Ward stock consumption vs. Pharmacy billing posts.", priority: "Medium", riskLevel: "Low", consequence: "Silent margin leakage.", proof: "Audit Report" }
            ]
        },
        {
            title: "Infection Control & HAI",
            department: "Quality",
            frequency: "Daily",
            role: "Infection Control Officer",
            summary: "Sanitization cycles and infection mitigation.",
            icon: "sparkles",
            tasks: [
                { id: "H-ICO-01", technicalProtocol: "ATP Surface Swab", floorAction: "Conduct random RLU test of high-touch OPD counters.", priority: "Medium", riskLevel: "High", consequence: "Infection transmission outbreaks.", proof: "Test Result", verificationRequired: true },
                { id: "H-ICO-02", technicalProtocol: "Hand-Hygiene Compliance", floorAction: "Audit 10 staff entries for alcohol rub technique.", priority: "High", riskLevel: "High", consequence: "Systemic cross-contamination.", proof: "Audit Score" }
            ]
        },
        {
            title: "Biomedical Engineering",
            department: "Engineering",
            frequency: "Daily",
            role: "Biomedical Equipment Engineer",
            summary: "Medical hardware uptime and calibration.",
            icon: "wrench",
            tasks: [
                { id: "H-BME-01", technicalProtocol: "Dialysis Water TDS", floorAction: "Log purity at RO output (Target < 10 ppm).", priority: "High", riskLevel: "High", consequence: "Patient blood contamination (Fatal).", proof: "TDS Meter", verificationRequired: true },
                { id: "H-BME-02", technicalProtocol: "UPS Battery Load-test", floorAction: "Verify ICU equipment runtime exceeds 30 mins on battery.", priority: "High", riskLevel: "High", consequence: "ICU shutdown during power flip.", proof: "Voltage Log", verificationRequired: true }
            ]
        },
        {
            title: "Emergency Transport",
            department: "Logistics",
            frequency: "Daily",
            role: "Ambulance / Emergency Transport Coordinator",
            summary: "Mobile ICU readiness and response timing.",
            icon: "ambulance",
            tasks: [
                { id: "H-AMB-01", technicalProtocol: "Ambulance ACLS Inventory", floorAction: "Check Oxygen and Cardiac drugs in all active units.", priority: "High", riskLevel: "High", consequence: "En-route resuscitation failure.", proof: "Kit Seal", verificationRequired: true }
            ]
        },
        {
            title: "Hospital Housekeeping",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Hospital Housekeeping Supervisor",
            summary: "Hygiene command and bio-hazard cleaning.",
            icon: "spray-can",
            tasks: [
                { id: "H-HKP-01", technicalProtocol: "Sharps Container Audit", floorAction: "Verify 100% of boxes are < 75% full and sealed.", priority: "High", riskLevel: "High", consequence: "Needle-stick injuries to staff.", proof: "Visual Check", verificationRequired: true }
            ]
        },
        {
            title: "Medical Records (MRD)",
            department: "Admin",
            frequency: "Daily",
            role: "Medical Records Officer (MRO)",
            summary: "Document security and medico-legal archival.",
            icon: "file-lock",
            tasks: [
                { id: "H-MRO-01", technicalProtocol: "Consent Form Archival", floorAction: "Verify 100% original signatures on yesterday's OT consents.", priority: "High", riskLevel: "Medium", consequence: "Legal defense collapse.", proof: "File Audit", verificationRequired: true }
            ]
        },
        {
            title: "Dietary & Nutrition",
            department: "Clinical Support",
            frequency: "Daily",
            role: "Diet & Nutrition Officer",
            summary: "Patient diet compliance and food hygiene.",
            icon: "utensils",
            tasks: [
                { id: "H-DIE-01", technicalProtocol: "Special Diet Verify", floorAction: "Match Diabetic/Renal trays against doctor orders.", priority: "High", riskLevel: "Medium", consequence: "Patient glycemic shock.", proof: "Tray Audit", verificationRequired: true }
            ]
        },
        {
            title: "Blood Bank Governance",
            department: "Laboratory",
            frequency: "Daily",
            role: "Blood Bank Coordinator",
            summary: "Safe storage and cross-match integrity.",
            icon: "droplet",
            tasks: [
                { id: "H-BLD-01", technicalProtocol: "Fridge Temp Log (24/7)", floorAction: "Verify alarm connectivity and log temp (Target 2-6°C).", priority: "High", riskLevel: "High", consequence: "Blood hemolysis and loss of life-saving stock.", proof: "System Log", verificationRequired: true }
            ]
        },
        {
            title: "Hospital Security",
            department: "Security",
            frequency: "Daily",
            role: "Security & Patient Safety Officer",
            summary: "Hardens the perimeter and protects vulnerable patients.",
            icon: "shield-check",
            tasks: [
                { id: "H-SEC-01", technicalProtocol: "Drug-Store CCTV Sync", floorAction: "Verify 30-day recording backup for Pharmacy vault.", priority: "High", riskLevel: "High", consequence: "Untraceable internal drug theft.", proof: "System Screen", verificationRequired: true }
            ]
        },
        {
            title: "Sustainability & ESG",
            department: "ESG",
            frequency: "Daily",
            role: "Infection Control Officer",
            summary: "Environmental discipline and resource tracking.",
            icon: "leaf",
            tasks: [
                { id: "H-ESG-01", technicalProtocol: "Biomedical Waste Reconcile", floorAction: "Match Ward KG weight against final disposal manifest.", priority: "High", riskLevel: "Medium", consequence: "Regulatory non-compliance / illegal disposal.", proof: "Weight Slip", verificationRequired: true },
                { id: "H-ESG-02", technicalProtocol: "Potable Water TDS", floorAction: "Log purity at ICU drinking points.", priority: "High", riskLevel: "High", consequence: "Water-borne outbreak in vulnerable patients.", proof: "TDS Reading", verificationRequired: true }
            ]
        }
    ]
};

    