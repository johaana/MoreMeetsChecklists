import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operations System",
    priceINR: 3499,
    priceUSD: 49,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The Sovereign v16.0 clinical governance engine for hospitals. Hardening 200 technical control points across 12 institutional roles to protect patient safety.",
    icon: "hospital",
    badgeText: "V16.0 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Clinical In-charges"],
    sampleItems: [
        { text: "<strong>WHO Surgical Safety</strong>: Pre-incision time-out seals and site verification.", icon: "shield-check" },
        { text: "<strong>Narcotics Command</strong>: Double-blind vault count logs and diversion monitoring.", icon: "pill" },
        { text: "<strong>Infection Control</strong>: CSSD sterility indicators and ICU hygiene cycles.", icon: "sparkles" }
    ],
    checklists: [
        {
            title: "Executive Governance",
            department: "Clinical",
            frequency: "Daily",
            role: "Medical Director",
            summary: "High-level strategic oversight of clinical risk.",
            icon: "crown",
            tasks: [
                { id: "H-EXE-01", description: "Sentinel Event Review", technicalProtocol: "Review Sentinel Event Log; cross-match near-miss clinical errors with department-head escalation signatures.", floorAction: "Witness HOD signatures in the Sentinel Registry.", priority: "High", riskLevel: "High", consequence: "Fatal patient harm and total loss of license.", proof: "Log Audit" },
                { id: "H-EXE-02", description: "Physician Credentialing", technicalProtocol: "Audit physician credentials for 100% validity; verify current registration for 10 random consultants.", floorAction: "Cross-match consultant list against the active medical council database.", priority: "High", riskLevel: "High", consequence: "Practice by unqualified practitioners.", proof: "Credential Registry" },
                { id: "H-EXE-03", description: "Specialist Availability", technicalProtocol: "Verify availability of specialized consultants for ICU on-call; match physical roster to digital availability.", floorAction: "Dial-test 3 on-call consultants for response within 10 mins.", priority: "High", riskLevel: "High", consequence: "Clinical halt during patient crisis.", proof: "On-call Roster" },
                { id: "H-EXE-04", description: "M&M Committee Action", technicalProtocol: "Review morbidity and mortality committee minutes; confirm implementation of 100% of corrective actions.", floorAction: "Audit 2 closed corrective actions from last M&M meeting.", priority: "High", riskLevel: "Medium", consequence: "Lack of clinical accountability.", proof: "Minutes Folder" },
                { id: "H-EXE-05", description: "Surgical Consent Audit", technicalProtocol: "Audit patient consent forms; witness 10 random IP files for valid authorized signatures pre-surgery.", floorAction: "Physically check 10 active IP files for wet-ink signatures.", priority: "High", riskLevel: "High", consequence: "Criminal liability for unauthorized surgery.", proof: "File Audit" },
                { id: "H-EXE-06", description: "Legal Notice Triage", technicalProtocol: "Triage medical legal notices; verify resolution status for any open claim older than 48 hours.", floorAction: "Update status for all active litigation notices.", priority: "High", riskLevel: "High", consequence: "Unmitigated legal exposure.", proof: "Notice Log" },
                { id: "H-EXE-07", description: "Outcome Indicator Pulse", technicalProtocol: "Monitor clinical outcome indicators; analyze mortality and readmission benchmarks vs internal targets.", floorAction: "Log monthly mortality rate on the board dashboard.", priority: "High", riskLevel: "High", consequence: "Systemic decline in care quality.", proof: "KPI Dashboard" },
                { id: "H-EXE-08", description: "Clinical Privileging", technicalProtocol: "Review clinical privileging; verify 100% match between surgeon specialty and active surgical list.", floorAction: "Cross-check surgeons on today's list against privilege files.", priority: "High", riskLevel: "High", consequence: "Malpractice liability.", proof: "Privilege File" },
                { id: "H-EXE-09", description: "Doctor Attendance Parity", technicalProtocol: "Audit doctor attendance parity; match check-in timestamps to today's active IP surgical schedules.", floorAction: "Log arrival variances for senior consultants.", priority: "High", riskLevel: "Medium", consequence: "Delayed life-saving procedures.", proof: "Attendance Log" },
                { id: "H-EXE-10", description: "Weekly HOD Alignment", technicalProtocol: "Conduct weekly briefing with HODs; verify alignment on clinical standard parity.", floorAction: "Record attendance for HOD pulse meeting.", priority: "Low", riskLevel: "Low", consequence: "Operational silos.", proof: "Briefing Note" },
                { id: "H-EXE-11", description: "Kitchen FSSAI Audit", technicalProtocol: "Verify FSSAI compliance for hospital kitchen; inspect active license display and health certifications.", floorAction: "Check pantry for active health-fitness cards for food handlers.", priority: "Medium", riskLevel: "Medium", consequence: "Inpatient foodborne illness risk.", proof: "License Matrix" },
                { id: "H-EXE-12", description: "Patient Rights Display", technicalProtocol: "Review patient rights charter implementation; verify visibility of bilingual posters in all IP corridors.", floorAction: "Verify poster visibility in main IP elevators.", priority: "Low", riskLevel: "Low", consequence: "Patient attrition and poor sentiment.", proof: "Poster Audit" },
                { id: "H-EXE-13", description: "Board Risk Pack", technicalProtocol: "Collate clinical quality summary; prepare board pack for quarterly institutional risk review.", floorAction: "Submit quality deck to board secretary.", priority: "Medium", riskLevel: "Low", consequence: "Loss of executive oversight.", proof: "Board Pack" },
                { id: "H-EXE-14", description: "Ethics Committee Audit", technicalProtocol: "Audit Ethics Committee minutes; verify 100% compliance with clinical trial monitoring protocols.", floorAction: "Review audit log for active clinical trials.", priority: "Medium", riskLevel: "High", consequence: "Regulatory violations.", proof: "Committee Book" },
                { id: "H-EXE-15", description: "Executive Sign-off", technicalProtocol: "Execute weekly management summary sign-off; witness final dashboard closure for the group.", floorAction: "Initial the executive governance summary.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Quality & Compliance",
            department: "Quality",
            frequency: "Daily",
            role: "Quality Head",
            summary: "Governance for NABH indicators and accreditation readiness.",
            icon: "shield-check",
            tasks: [
                { id: "H-QH-01", description: "NABH Data Sync", technicalProtocol: "NABH Sync: Verify 100% data entry for daily clinical indicators in the master accreditation portal.", floorAction: "Check digital portal for entry completeness status.", priority: "High", riskLevel: "Medium", consequence: "Accreditation lapse.", proof: "Data Portal" },
                { id: "H-QH-02", description: "Initial Assessment Audit", technicalProtocol: "Audit patient charts; physically inspect 5 random files for 'Initial Assessment' completion within 1 hour.", floorAction: "Spot-check 5 active IP files for assessing timestamp compliance.", priority: "High", riskLevel: "Medium", consequence: "Clinical care delay.", proof: "Chart Audit" },
                { id: "H-QH-03", description: "NC Registry Closure", technicalProtocol: "Non-Conformance Registry: Review all open clinical deviations; verify closed-loop resolution in < 24h.", floorAction: "Verify closure signatures for last 3 deviations.", priority: "High", riskLevel: "High", consequence: "Recurring clinical errors.", proof: "NC Tracker" },
                { id: "H-QH-04", description: "Gas Manifold Alarm", technicalProtocol: "Audit gas manifold alarm; trigger low-pressure simulation to verify buzzer sync at Nurse station.", floorAction: "Trigger manifold test alarm and confirm nurse station buzzer.", priority: "High", riskLevel: "High", consequence: "Oxygen failure in ICU/OT (Fatal).", proof: "Alarm Log" },
                { id: "H-QH-05", description: "Equipment AMC Audit", technicalProtocol: "Verify medical equipment AMC; check next service dates for 100% of ventilators and monitors.", priority: "Medium", riskLevel: "Medium", consequence: "Equipment downtime.", proof: "Contract Log" },
                { id: "H-QH-06", description: "Medication Error Analysis", technicalProtocol: "Monitor medication error logs; analyze patterns in transcription or dispensing misses for the shift.", floorAction: "Log monthly transcription error rate.", priority: "High", riskLevel: "High", consequence: "Unmonitored patient safety risks.", proof: "Error Log" },
                { id: "H-QH-07", description: "ATP Hand Hygiene", technicalProtocol: "Spot-check hand hygiene; conduct random RLU swab test at IP bedside entry points.", floorAction: "Conduct 5 random ATP swabs at entry-exit threshold.", priority: "Medium", riskLevel: "High", consequence: "Hospital-acquired infections.", proof: "Observation Note" },
                { id: "H-QH-08", description: "Fall Risk Indicators", technicalProtocol: "Verify Fall Risk identifiers; physically confirm yellow wristband usage for high-risk patients.", floorAction: "Walk high-care ward and verify wristband presence.", priority: "High", riskLevel: "Medium", consequence: "Patient injury litigation.", proof: "Visual Audit" },
                { id: "H-QH-09", description: "ADR National Upload", technicalProtocol: "Audit Adverse Drug Reaction system; verify 100% of reported ADRs are uploaded to national registry.", floorAction: "Check PvPI portal for status updates.", priority: "High", riskLevel: "High", consequence: "Regulatory non-compliance.", proof: "ADR Registry" },
                { id: "H-QH-10", description: "CSSD Spore Test", technicalProtocol: "Conduct mock audit of CSSD biological indicators; verify negative growth in 24-hour spore incubation.", floorAction: "Inspect biological indicator results from current batch.", priority: "High", riskLevel: "High", consequence: "Systemic sterilization failure.", proof: "Lab Report" },
                { id: "H-QH-11", description: "Grievance TAT Pulse", technicalProtocol: "Review patient grievance TAT; verify resolution for all complaints exceeding 24-hour threshold.", floorAction: "Close-out 3 unresolved parent complaints.", priority: "Medium", riskLevel: "Low", consequence: "Reputational damage.", proof: "Grievance Portal" },
                { id: "H-QH-12", description: "Advanced Life Support Cert", technicalProtocol: "Verify staff competency logs; check ICU nurse certifications for advanced life-support validity.", floorAction: "Check BLS/ACLS expiry for shift-roster staff.", priority: "High", riskLevel: "High", consequence: "Incompetent care in high-risk zones.", proof: "Skills Matrix" },
                { id: "H-QH-13", description: "Vulnerable Patient Markers", technicalProtocol: "Audit 'Vulnerable Patient' identifiers; physically confirm presence of 'At Risk' markers for kids/elderly.", floorAction: "Inspect signage on 5 random patient beds.", priority: "High", riskLevel: "Medium", consequence: "Child safety breach.", proof: "Registry Audit" },
                { id: "H-QH-14", description: "Negative Pressure Cycles", technicalProtocol: "Check negative pressure rooms; verify air-exchange cycles match clinical isolation standards.", floorAction: "Log BMS air-cycle frequency for Room 402.", priority: "High", riskLevel: "High", consequence: "Infection outbreak.", proof: "BMS Screen" },
                { id: "H-QH-15", description: "Quality Data Seal", technicalProtocol: "Execute Quality shift sign-off; witness final compliance data backup for the department.", floorAction: "Initial the shift quality report.", priority: "High", riskLevel: "Low", consequence: "Loss of oversight.", proof: "Signed Sheet" }
            ]
        }
    ]
};
