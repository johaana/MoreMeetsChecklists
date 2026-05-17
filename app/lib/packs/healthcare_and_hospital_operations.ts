
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operations System",
    priceINR: 3499,
    priceUSD: 49,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The Sovereign v14.9 clinical governance engine for hospitals. Hardening 200 technical control points across 12 institutional roles to protect patient safety and clinical integrity.",
    icon: "hospital",
    badgeText: "V14.9 PILOT",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Clinical In-charges"],
    sampleItems: [
        { text: "<strong>WHO Surgical Safety</strong>: Pre-incision time-out seals and site verification.", icon: "shield-check" },
        { text: "<strong>Narcotics Command</strong>: Double-blind vault count logs and diversion monitoring.", icon: "pill" },
        { text: "<strong>Infection Control</strong>: CSSD sterility indicators and ICU hygiene cycles.", icon: "sparkles" }
    ],
    checklists: [
        {
            title: "Medical Director Governance",
            department: "Executive",
            frequency: "Daily",
            role: "Medical Director",
            summary: "High-level strategic oversight of clinical risk and physician compliance.",
            icon: "crown",
            tasks: [
                { id: "H-EXE-01", description: "Review Sentinel Event Log for near-miss clinical errors.", priority: "High", riskLevel: "High", consequence: "Fatal patient harm and total loss of license.", proof: "Incident Dashboard" },
                { id: "H-EXE-02", description: "Audit doctor attendance parity against surgery schedules.", priority: "High", riskLevel: "Medium", consequence: "Delayed critical procedures.", proof: "Attendance Log" },
                { id: "H-EXE-03", description: "Verify clinical privileging for visiting consultants.", priority: "High", riskLevel: "High", consequence: "Unqualified practitioners performing IP surgery.", proof: "Credential File" },
                { id: "H-EXE-04", description: "Review weekly clinical quality indicators (Mortality/Readmission).", priority: "High", riskLevel: "High", consequence: "Loss of accreditation and safety decline.", proof: "Quality Report" },
                { id: "H-EXE-05", description: "Audit 10 random patient files for signed surgical consent.", priority: "High", riskLevel: "High", consequence: "Severe legal and malpractice exposure.", proof: "File Audit" },
                { id: "H-EXE-06", description: "Witness minutes of the mortality review committee.", priority: "Medium", riskLevel: "Low", consequence: "Lack of clinical accountability.", proof: "Minutes Doc" },
                { id: "H-EXE-07", description: "Audit clinical handover quality at ICU shift change.", priority: "High", riskLevel: "High", consequence: "Critical treatment gaps during rotation.", proof: "Shift Log" },
                { id: "H-EXE-08", description: "Verify FSSAI and Health compliance for hospital kitchen.", priority: "Medium", riskLevel: "Medium", consequence: "Inpatient foodborne illness risk.", proof: "Cert Registry" },
                { id: "H-EXE-09", description: "Monitor ER wait-time TAT (Target < 10 mins).", priority: "High", riskLevel: "Medium", consequence: "Patient distress and medical negligence risk.", proof: "Triage Log" },
                { id: "H-EXE-10", description: "Execute weekly board summary sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of governance oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Nursing & Ward Command",
            department: "Nursing",
            frequency: "Daily",
            role: "Nursing Superintendent",
            summary: "Invisible infrastructure of patient care and safety.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-NUR-01", description: "Verify Crash Cart seal integrity and AED battery status.", priority: "High", riskLevel: "High", consequence: "Resuscitation failure during cardiac arrest.", proof: "Seal Check" },
                { id: "H-NUR-02", description: "Bedside Handover: Verify IV sites and current clinical charts.", priority: "High", riskLevel: "High", consequence: "Medication errors and patient ID mix-ups.", proof: "Handover Sheet" },
                { id: "H-NUR-03", description: "Confirm fall-risk bed-rails UP for high-risk IP patients.", priority: "High", riskLevel: "High", consequence: "Patient falls and liability suits.", proof: "Walkthrough" },
                { id: "H-NUR-04", description: "Audit sanitizer usage during 10 random bedside visits.", priority: "Medium", riskLevel: "High", consequence: "Hospital-acquired infection outbreaks.", proof: "Observation Log" },
                { id: "H-NUR-05", description: "Verify patient ID wristband accuracy (100% check).", priority: "High", riskLevel: "High", consequence: "Treatment given to the wrong patient.", proof: "Visual Audit" },
                { id: "H-NUR-06", description: "Monitor nurse-to-patient ratio vs today's IP census.", priority: "Medium", riskLevel: "Low", consequence: "Burnout and clinical oversight gaps.", proof: "Roster Log" },
                { id: "H-NUR-07", description: "Execute linen grey-scale audit for 10 random beds.", priority: "Low", riskLevel: "Low", consequence: "Poor perception of hospital hygiene.", proof: "Photo" },
                { id: "H-NUR-08", description: "Check ward medical stock par levels for peak capacity.", priority: "Medium", riskLevel: "Medium", consequence: "Delayed treatment due to stockouts.", proof: "Stock Sheet" },
                { id: "H-NUR-09", description: "Verify Bio-medical waste segregation at ward source.", priority: "High", riskLevel: "High", consequence: "Regulatory fines and health hazards.", proof: "Visual Audit" },
                { id: "H-NUR-10", description: "Witness medication double-check for high-alert drugs.", priority: "High", riskLevel: "High", consequence: "Fatal dosing error.", proof: "Dual-Sign Log" }
            ]
        },
        {
            title: "Operating Theater Safety",
            department: "Surgery",
            frequency: "Per Show",
            role: "OT In-charge",
            summary: "Zero-fail surgical suite and sterility protocols.",
            icon: "shield-check",
            tasks: [
                { id: "H-OT-01", description: "Execute WHO 'Time Out' before surgical incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Never-Event).", proof: "Surgical Checklist" },
                { id: "H-OT-02", description: "Verify sterility indicators on all instrument sets.", priority: "High", riskLevel: "High", consequence: "Post-operative septicemia.", proof: "Indicator Tape" },
                { id: "H-OT-03", description: "Log medical gas manifold pressure (Oxygen/N2O).", priority: "High", riskLevel: "High", consequence: "Intra-operative hypoxia risk.", proof: "Gauge Log" },
                { id: "H-OT-04", description: "Audit CSSD biological indicator test results.", priority: "High", riskLevel: "High", consequence: "Systemic sterilization failure.", proof: "Lab Report" },
                { id: "H-OT-05", description: "Check OT positive pressure and humidity gauges.", priority: "Medium", riskLevel: "Medium", consequence: "Contaminated air-flow into sterile zone.", proof: "Gauge Check" },
                { id: "H-OT-06", description: "Physical count: Match needles and blades post-op.", priority: "High", riskLevel: "High", consequence: "Retained foreign body in patient.", proof: "Count Sheet" },
                { id: "H-OT-07", description: "Verify deep-clean fumigation status of OT suite.", priority: "High", riskLevel: "Medium", consequence: "Microbial buildup in theater.", proof: "Fumigation Log" },
                { id: "H-OT-08", description: "Inspect UPS backup run-time for surgical lights.", priority: "High", riskLevel: "High", consequence: "Surgical halt during power flip.", proof: "Load Test" },
                { id: "H-OT-09", description: "Verify scrub-sink soap and water temp (Target 40C).", priority: "Low", riskLevel: "Low", consequence: "Ineffective surgeon hand-hygiene.", proof: "Temp Log" },
                { id: "H-OT-10", description: "Final OT closure and medical gas seal verification.", priority: "High", riskLevel: "Low", consequence: "Gas leakage / facility fire risk.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Pharmacy & Narcotics Control",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Pharmacy Lead",
            summary: "Governance for controlled substances and medication integrity.",
            icon: "pill",
            tasks: [
                { id: "H-PHM-01", description: "Narcotics Vault: Independent double-count of all units.", priority: "High", riskLevel: "High", consequence: "Internal theft and criminal liability.", proof: "Vault Register" },
                { id: "H-PHM-02", description: "Cold Chain: Log medical fridge temp twice daily.", priority: "High", riskLevel: "High", consequence: "Ineffective vaccine/insulin administration.", proof: "Temp Log" },
                { id: "H-PHM-03", description: "LASA Audit: Verify segregation of look-alike drugs.", priority: "High", riskLevel: "High", consequence: "Medication mismatch causing harm.", proof: "Visual Check" },
                { id: "H-PHM-04", description: "Remove any pharmaceuticals with < 60 days expiry.", priority: "High", riskLevel: "Medium", consequence: "Dispensing ineffective/harmful meds.", proof: "Expiry Log" },
                { id: "H-PHM-05", description: "Challenge 3 random illegible prescription orders.", priority: "Medium", riskLevel: "Low", consequence: "Dosing errors due to poor handwriting.", proof: "Query Log" }
            ]
        },
        {
            title: "Facility & Life Safety",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Infrastructure uptime and medical gas continuity.",
            icon: "wrench",
            tasks: [
                { id: "H-ENG-01", description: "Inspect DG fuel level and test auto-start logic.", priority: "High", riskLevel: "High", consequence: "Facility blackout and clinical halt.", proof: "Meter Log" },
                { id: "H-ENG-02", description: "Log medical gas manifold pressure for main wards.", priority: "High", riskLevel: "High", consequence: "Oxygen failure for ventilated patients.", proof: "Manifold Log" },
                { id: "H-ENG-03", description: "Test lift emergency intercoms to security desk.", priority: "High", riskLevel: "High", consequence: "Trapped patients/visitors during emergency.", proof: "Sound Test" },
                { id: "H-ENG-04", description: "Monitor RO water TDS at dialysis entry point.", priority: "High", riskLevel: "High", consequence: "Patient poisoning during dialysis.", proof: "TDS Reading" },
                { id: "H-ENG-05", description: "Execute daily fire-escape clearance patrol.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment during crisis.", proof: "Patrol Log" }
            ]
        }
    ]
};
