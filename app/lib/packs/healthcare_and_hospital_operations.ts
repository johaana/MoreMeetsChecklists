
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operating System",
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
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure safety standards stay if key staff resign.", icon: "history" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your clinical data forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Director Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Medical Director",
            summary: "High-level risk and clinical liability oversight.",
            icon: "crown",
            tasks: [
                { id: "H-EXE-01", technicalProtocol: "Sentinel Event Synthesis", floorAction: "Review major clinical error log and check root causes.", priority: "High", riskLevel: "High", consequence: "Recurring fatal mistakes and loss of hospital license.", proof: "Log Audit" },
                { id: "H-EXE-02", technicalProtocol: "Disaster Preparedness Pulse", floorAction: "Test the 'Mass Casualty' siren and check backup radio frequencies.", priority: "High", riskLevel: "High", consequence: "Chaos during a major accident or disaster.", proof: "Drill Log" },
                { id: "H-EXE-03", technicalProtocol: "Credentialing Audit", floorAction: "Audit doctor registration cards to ensure they are current.", priority: "High", riskLevel: "High", consequence: "Unlicensed doctors practicing; criminal liability.", proof: "Registry Audit" },
                { id: "H-EXE-04", technicalProtocol: "Infection Control Oversight", floorAction: "Check quarterly infection rates in the ICU vs. target.", priority: "High", riskLevel: "High", consequence: "Audit failure and longer patient stays.", proof: "Infection Log" },
                { id: "H-EXE-05", technicalProtocol: "Professional Indemnity Check", floorAction: "Verify insurance papers for all senior consultants.", priority: "High", riskLevel: "High", consequence: "No insurance coverage during a lawsuit.", proof: "Policy File" },
                { id: "H-EXE-06", technicalProtocol: "Mortality Review Governance", floorAction: "Audit minutes of the Mortality Review Committee.", priority: "High", riskLevel: "High", consequence: "Unchecked trends in patient deaths.", proof: "Minutes File" },
                { id: "H-EXE-07", technicalProtocol: "Emergency Response Velocity", floorAction: "Check 'Code Blue' response times (Target < 3 minutes).", priority: "High", riskLevel: "High", consequence: "Fatal delay during resuscitation.", proof: "Code Log" },
                { id: "H-EXE-08", technicalProtocol: "Transfusion Safety Audit", floorAction: "Audit blood bank match logs for dual sign-off.", priority: "High", riskLevel: "High", consequence: "Fatal blood transfusion error.", proof: "Audit Sheet" },
                { id: "H-EXE-09", technicalProtocol: "Ethics & Compliance Review", floorAction: "Verify ethics approval for any active clinical trials.", priority: "Medium", riskLevel: "High", consequence: "Legal shutdown of clinical research.", proof: "Ethics File" },
                { id: "H-EXE-10", technicalProtocol: "High-Alert Drug Analysis", floorAction: "Review High-Alert drug error trends.", priority: "High", riskLevel: "High", consequence: "Accidental patient poisoning.", proof: "Error Log" },
                { id: "H-EXE-11", technicalProtocol: "Medical Record Integrity (MRD)", floorAction: "Check Medical Record (MRD) completion speed.", priority: "Medium", riskLevel: "Low", consequence: "Audit failure and billing delays.", proof: "MRD Report" },
                { id: "H-EXE-12", technicalProtocol: "Environmental License Audit", floorAction: "Verify Bio-Medical Waste license is valid.", priority: "High", riskLevel: "High", consequence: "Hospital closure by environment authorities.", proof: "License File" },
                { id: "H-EXE-13", technicalProtocol: "OT Sterility Validation", floorAction: "Audit OT sterility spore test logs.", priority: "High", riskLevel: "High", consequence: "Post-operative infection outbreak.", proof: "Spore Report" },
                { id: "H-EXE-14", technicalProtocol: "Clinical Attrition Review", floorAction: "Review patient 'Transfer Out' reasons.", priority: "Low", riskLevel: "Medium", consequence: "Loss of trust in hospital capability.", proof: "Transfer Log" },
                { id: "H-EXE-15", technicalProtocol: "Privileging Matrix Sync", floorAction: "Audit the Doctor Privilege matrix vs current skills.", priority: "Medium", riskLevel: "Medium", consequence: "Doctors performing unapproved surgeries.", proof: "Matrix File" },
                { id: "H-EXE-16", technicalProtocol: "Organ Transplant Governance", floorAction: "Verify organ transplant license is active.", priority: "High", riskLevel: "High", consequence: "Criminal charges against the board.", proof: "License File" },
                { id: "H-EXE-17", technicalProtocol: "Radiation Safety Audit", floorAction: "Review Radiation Safety (AERB) badges for staff.", priority: "High", riskLevel: "High", consequence: "Cancer risk and staff lawsuits.", proof: "TLD Report" },
                { id: "H-EXE-18", technicalProtocol: "Digital Health Backup", floorAction: "Audit server backup sync for medical history.", priority: "High", riskLevel: "High", consequence: "Total loss of all patient records.", proof: "System Log" },
                { id: "H-EXE-19", technicalProtocol: "Safety Culture Pulse", floorAction: "Check status of 'Near-Miss' rewards for staff.", priority: "Low", riskLevel: "Low", consequence: "Staff hiding mistakes instead of fixing them.", proof: "HR Note" },
                { id: "H-EXE-20", technicalProtocol: "Final Board Sign-off", floorAction: "Final weekly Strategic sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of board-level oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Operations Command",
            department: "Operations",
            frequency: "Daily",
            role: "Hospital COO",
            summary: "Property uptime, utility economics, and logistics command.",
            icon: "building-2",
            tasks: [
                { id: "H-OPS-01", technicalProtocol: "Emergency Utility Readiness", floorAction: "Check O2 plant pressure and log DG fuel level.", priority: "High", riskLevel: "High", consequence: "Total facility life-support failure.", proof: "Gauge Log" },
                { id: "H-OPS-02", technicalProtocol: "Duty Roster Parity", floorAction: "Verify 100% presence of ER and ICU clinical staff.", priority: "High", riskLevel: "High", consequence: "Patient neglect and death during peak rush.", proof: "Attendance Log" },
                { id: "H-OPS-03", technicalProtocol: "Facility Ambiance Audit", floorAction: "Walkthrough of Lobby and Wards: check temp and scent.", priority: "Medium", riskLevel: "Low", consequence: "Poor patient comfort perception.", proof: "Walkthrough" },
                { id: "H-OPS-04", technicalProtocol: "Statutory Display Audit", floorAction: "Verify display of FSSAI and Fire NOC at main lobby.", priority: "High", riskLevel: "High", consequence: "Regulatory fines and sealing.", proof: "Photo" },
                { id: "H-OPS-05", technicalProtocol: "Complaint Resolution Pulse", floorAction: "Review all 'Open' patient grievances in < 4h.", priority: "High", riskLevel: "Medium", consequence: "Viral brand damage.", proof: "Issue Log" },
                { id: "H-OPS-06", technicalProtocol: "Consumable Stock Pulse", floorAction: "Check par stock of surgical gloves and masks in stores.", priority: "High", riskLevel: "Medium", consequence: "Surgery delays.", proof: "Stock Sheet" },
                { id: "H-OPS-07", technicalProtocol: "Utility Cost Analysis", floorAction: "Log electricity KWH and water consumption.", priority: "Low", riskLevel: "Low", consequence: "Unmonitored overhead blowout.", proof: "Meter Log" },
                { id: "H-OPS-08", technicalProtocol: "Staff Grooming Audit", floorAction: "Check nursing and admin uniforms/badges.", priority: "Low", riskLevel: "Low", consequence: "Authority brand drop.", proof: "Briefing Log" },
                { id: "H-OPS-09", technicalProtocol: "Ambulance Fleet QC", floorAction: "Inspect AED and cardiac monitor in active ambulances.", priority: "High", riskLevel: "High", consequence: "Death during transit.", proof: "Fleet Log" },
                { id: "H-OPS-10", technicalProtocol: "Final Shift Command Sign-off", floorAction: "Execute daily operational closure.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Ward & Bedside Command",
            department: "Nursing",
            frequency: "Daily",
            role: "Nursing Superintendent",
            summary: "Nursing discipline, bedside handover, and safety audits.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-NUR-01", technicalProtocol: "ER Wait-Time Triage", floorAction: "Audit ER logs: ensure first doctor touch in < 5 mins.", priority: "High", riskLevel: "High", consequence: "Condition worsening in waiting room.", proof: "TAT Log" },
                { id: "H-NUR-02", technicalProtocol: "Crash Cart Readiness (CCP)", floorAction: "Verify crash cart seal integrity and O2 cylinder level.", priority: "High", riskLevel: "High", consequence: "Rescue failure during cardiac arrest.", proof: "Seal Check" },
                { id: "H-NUR-03", technicalProtocol: "Clinical Bedside Handover", floorAction: "Execute oral handover report at the patient's bedside.", priority: "High", riskLevel: "High", consequence: "Loss of critical patient vitals data.", proof: "Handover Log" },
                { id: "H-NUR-04", technicalProtocol: "Fall Risk Governance", floorAction: "Verify side-rails are up for all High-Risk/Elderly cases.", priority: "High", riskLevel: "Medium", consequence: "Patient injury negligence.", proof: "Visual Check" },
                { id: "H-NUR-05", technicalProtocol: "MAR Accuracy Audit", floorAction: "Verify Medication Administration Record has no gaps.", priority: "High", riskLevel: "High", consequence: "Fatal medication error.", proof: "MAR Audit" },
                { id: "H-NUR-06", technicalProtocol: "Infusion Site Integrity", floorAction: "Inspect 5 random IV sites for signs of phlebitis.", priority: "High", riskLevel: "Medium", consequence: "Hospital-acquired infection.", proof: "Audit Sheet" },
                { id: "H-NUR-07", technicalProtocol: "Ventilator Power Backup", floorAction: "Test ICU ventilator battery charge status.", priority: "High", riskLevel: "High", consequence: "Death during power flip.", proof: "System Screen" },
                { id: "H-NUR-08", technicalProtocol: "Code Blue Trigger Test", floorAction: "Test Code Blue button in a random ward zone.", priority: "High", riskLevel: "High", consequence: "No response during real arrest.", proof: "Test Log" },
                { id: "H-NUR-09", technicalProtocol: "Ward Hygiene Check", floorAction: "Inspect 5 bedside lockers for dust or old food.", priority: "Low", riskLevel: "Low", consequence: "Unhygienic perception.", proof: "Visual Check" },
                { id: "H-NUR-10", technicalProtocol: "Linen Parity Audit", floorAction: "Verify availability of clean sterile bedsheets.", priority: "Medium", riskLevel: "Low", consequence: "Service failure.", proof: "Stock Note" }
            ]
        },
        {
            title: "Surgical Safety (WHO)",
            department: "Surgery",
            frequency: "Per Show",
            role: "OT In-charge",
            summary: "Zero-fail operating theater protocols.",
            icon: "shield-check",
            tasks: [
                { id: "H-SUR-01", technicalProtocol: "WHO 'Time Out' Execution", floorAction: "Verify Patient, Site, and Procedure before incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Fatal never-event).", proof: "Signed Checklist" },
                { id: "H-SUR-02", technicalProtocol: "Swab & Needle Count", floorAction: "Dual-person count of all surgical items pre and post-op.", priority: "High", riskLevel: "High", consequence: "Retained foreign object in patient.", proof: "Count Sheet" },
                { id: "H-SUR-03", technicalProtocol: "Sterility Tape Audit", floorAction: "Confirm black-strip indication on all instrument sets.", priority: "High", riskLevel: "High", consequence: "Post-op sepsis outbreak.", proof: "Visual Check" },
                { id: "H-SUR-04", technicalProtocol: "Anesthesia Machine QC", floorAction: "Verify leak-test and alarm function on machine.", priority: "High", riskLevel: "High", consequence: "Anesthesia failure/death.", proof: "System Log" },
                { id: "H-SUR-05", technicalProtocol: "OT Temperature/Humidity", floorAction: "Log OT temp (20°C) and Humidity (50%).", priority: "Medium", riskLevel: "Low", consequence: "Infection risk/Wound issues.", proof: "BMS Reading" }
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
                { id: "H-PHM-01", technicalProtocol: "Narcotics Double-Blind Count", floorAction: "Dual-person count of all units in locked safe.", priority: "High", riskLevel: "High", consequence: "Drug diversion and criminal charges.", proof: "Narcotics Register" },
                { id: "H-PHM-02", technicalProtocol: "Cold Chain Validation", floorAction: "Log fridge temp twice daily (Target 2°C - 8°C).", priority: "High", riskLevel: "High", consequence: "Vaccine/Insulin failure.", proof: "Temp Log" },
                { id: "H-PHM-03", technicalProtocol: "LASA Drug Segregation", floorAction: "Verify 'Look-Alike' drugs are stored separately.", priority: "High", riskLevel: "High", consequence: "Fatal medication mix-up.", proof: "Visual Audit" },
                { id: "H-PHM-04", technicalProtocol: "Expiry Sweep Protocol", floorAction: "Remove all items with < 3 months shelf life.", priority: "High", riskLevel: "Medium", consequence: "Dispensing expired drugs.", proof: "Expiry Register" },
                { id: "H-PHM-05", technicalProtocol: "High-Alert Labeling", floorAction: "Ensure red labels are on all concentrated electrolytes.", priority: "High", riskLevel: "High", consequence: "Accidental infusion (Fatal).", proof: "Audit Check" }
            ]
        },
        {
            title: "EHS & Waste Governance",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Infection control and bio-hazard command.",
            icon: "recycle",
            tasks: [
                { id: "H-WST-01", technicalProtocol: "Bio-Waste Segregation Audit", floorAction: "Verify 100% color-coded bin compliance at source.", priority: "High", riskLevel: "High", consequence: "Regulatory fines and disease spread.", proof: "Visual Audit" },
                { id: "H-WST-02", technicalProtocol: "Sharps Container Integrity", floorAction: "Check sharps bins for 75% fill and secure lids.", priority: "High", riskLevel: "High", consequence: "Needle-stick injuries to staff.", proof: "Visual Check" },
                { id: "H-WST-03", technicalProtocol: "Spillage Kit Readiness", floorAction: "Check contents of chemical and blood spill kits.", priority: "High", riskLevel: "High", consequence: "Toxic exposure during spill.", proof: "Stock Check" },
                { id: "H-WST-04", technicalProtocol: "ETP/STP Vitals Check", floorAction: "Monitor Effluent Plant pH and flow meters.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental law violation.", proof: "Plant Log" },
                { id: "H-WST-05", technicalProtocol: "Pest Bait Mapping", floorAction: "Verify rodent bait stations in back-alley.", priority: "Medium", riskLevel: "Low", consequence: "Infestation.", proof: "Pest Log" }
            ]
        },
        {
            title: "Quality & Audit Shield",
            department: "Quality",
            frequency: "Weekly",
            role: "Quality Head",
            summary: "Standardizes the institution for external accreditation.",
            icon: "shield-check",
            tasks: [
                { id: "H-QLT-01", technicalProtocol: "NABH/JCI Indicator Scan", floorAction: "Audit 5 patient files for discharge summary completion.", priority: "High", riskLevel: "Medium", consequence: "Audit non-conformance.", proof: "File Audit" },
                { id: "H-QLT-02", technicalProtocol: "Staff Health Pulse", floorAction: "Verify medical certs for 100% of F&B handlers.", priority: "Medium", riskLevel: "Medium", consequence: "Infection risk to patients.", proof: "Med File" },
                { id: "H-QLT-03", technicalProtocol: "Hand-Hygiene Compliance Audit", floorAction: "Observe staff sanitization frequency in ICU.", priority: "High", riskLevel: "High", consequence: "High-HAI (Infection) rates.", proof: "Audit Sheet" },
                { id: "H-QLT-04", technicalProtocol: "Patient Feedback Sentiment", floorAction: "Analyze Google/BMS keywords for recurring issues.", priority: "Medium", riskLevel: "Low", consequence: "Reputational damage.", proof: "CSAT Report" },
                { id: "H-QLT-05", technicalProtocol: "Safety Policy Display", floorAction: "Confirm POSH and Safety charts are posted in staff zones.", priority: "Low", riskLevel: "Low", consequence: "Legal liability.", proof: "Photo" }
            ]
        },
        {
            title: "OPD & Diagnostic Flow",
            department: "OPD",
            frequency: "Daily",
            role: "OPD Manager",
            summary: "First impressions and patient throughput command.",
            icon: "stethoscope",
            tasks: [
                { id: "H-OPD-01", technicalProtocol: "Doctor Arrival Parity", floorAction: "Log doctor punch-in vs first appointment slot.", priority: "High", riskLevel: "Low", consequence: "Extreme queues and patient rage.", proof: "Attendance Log" },
                { id: "H-OPD-02", technicalProtocol: "Wait-Time Pulse", floorAction: "Monitor OPD token system for > 45m delays.", priority: "Medium", riskLevel: "Low", consequence: "Patient walk-outs.", proof: "Token Report" },
                { id: "H-OPD-03", technicalProtocol: "Diagnostic TAT Tracking", floorAction: "Spot-check 5 lab reports for on-time delivery.", priority: "Medium", riskLevel: "Medium", consequence: "Delayed treatment decisions.", proof: "Lab Dashboard" },
                { id: "H-OPD-04", technicalProtocol: "OPD Hygiene Audit", floorAction: "Hourly check of OPD restrooms and drinking water.", priority: "High", riskLevel: "Low", consequence: "Negative reviews.", proof: "Hourly Sheet" },
                { id: "H-OPD-05", technicalProtocol: "Reception Grooming", floorAction: "Audit front-desk uniforms and name-tags.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Briefing Log" }
            ]
        },
        {
            title: "MEP & Medical Gas",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Infrastructure uptime and backbone protection.",
            icon: "wrench",
            tasks: [
                { id: "H-ENG-01", technicalProtocol: "Medical O2 Purity Pulse", floorAction: "Log O2 purity levels from manifold (Target > 93%).", priority: "High", riskLevel: "High", consequence: "Fatal patient hypoxia.", proof: "Purity Log" },
                { id: "H-ENG-02", technicalProtocol: "UPS Load Testing", floorAction: "Test ICU/OT UPS bank for 10-min battery run.", priority: "High", riskLevel: "High", consequence: "Blackout during critical care.", proof: "Voltage Log" },
                { id: "H-ENG-03", technicalProtocol: "Medical Vacuum Pressure", floorAction: "Verify suction pressure at ward delivery points.", priority: "High", riskLevel: "High", consequence: "Patient choking hazard.", proof: "Gauge Log" },
                { id: "H-ENG-04", technicalProtocol: "Dialysis RO Quality", floorAction: "Verify RO output TDS for Dialysis (Target < 50).", priority: "High", riskLevel: "High", consequence: "Blood contamination crisis.", proof: "TDS Reading" },
                { id: "H-ENG-05", technicalProtocol: "Chiller Panel Scan", floorAction: "Heat-scan electrical panels for MRI/CT suites.", priority: "High", riskLevel: "High", consequence: "Machine failure/Fire.", proof: "IR Log" }
            ]
        },
        {
            title: "Hospital Security",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Perimeter hardening and asset protection.",
            icon: "shield",
            tasks: [
                { id: "H-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day backup and time-sync across 50+ nodes.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft/suits.", proof: "System Screen" },
                { id: "H-SEC-02", technicalProtocol: "Visitor ID Governance", floorAction: "Audit visitor register for 100% ID capture.", priority: "High", riskLevel: "High", consequence: "Unauthorized person access.", proof: "Registry Audit" },
                { id: "H-SEC-03", technicalProtocol: "Fire Exit Path Clear", floorAction: "Verify all fire escapes are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment.", proof: "Patrol Log" },
                { id: "H-SEC-04", technicalProtocol: "Guard Sobriety Check", floorAction: "Random alcohol check for night shift security.", priority: "High", riskLevel: "High", consequence: "Vulnerable campus perimeter.", proof: "Test Note" },
                { id: "H-SEC-05", technicalProtocol: "Morgue Access Log", floorAction: "Verify dual-log entry for mortuary access.", priority: "High", riskLevel: "High", consequence: "Legal/Dignity disaster.", proof: "Register Audit" }
            ]
        },
        {
            title: "Revenue & Billing Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Billing Manager",
            summary: "Profit protection and TPA governance.",
            icon: "banknote",
            tasks: [
                { id: "H-FIN-01", technicalProtocol: "TPA Pre-Auth Pulse", floorAction: "Check insurance approval status for all IPs.", priority: "High", riskLevel: "Medium", consequence: "Treatment done but no payment.", proof: "Portal Sync" },
                { id: "H-FIN-02", technicalProtocol: "Consumable Audit", floorAction: "Match ward usage list against final bill.", priority: "Medium", riskLevel: "Low", consequence: "Silent profit leakage.", proof: "Bill Audit" },
                { id: "H-FIN-03", technicalProtocol: "Revenue Reconcile", floorAction: "Match cash in hand to HIS daily report.", priority: "High", riskLevel: "High", consequence: "Internal cashier theft.", proof: "Settlement Log" },
                { id: "H-FIN-04", technicalProtocol: "Discount Code Audit", floorAction: "Review reason codes for all manual overrides.", priority: "Medium", riskLevel: "Medium", consequence: "Margin erosion.", proof: "System Log" },
                { id: "H-FIN-05", technicalProtocol: "Voided Bill Review", floorAction: "Manager sign-off on 100% of cancelled bills.", priority: "High", riskLevel: "High", consequence: "Theft masked as errors.", proof: "POS Audit" }
            ]
        },
        {
            title: "Personnel & Certs",
            department: "HR",
            frequency: "Monthly",
            role: "HR Manager",
            summary: "Staff competency and health governance.",
            icon: "graduation-cap",
            tasks: [
                { id: "H-HR-01", technicalProtocol: "Clinical License Matrix", floorAction: "Verify valid registration for 100% of nursing staff.", priority: "High", riskLevel: "High", consequence: "Hospital closure/Legal disaster.", proof: "Cert Registry" },
                { id: "H-HR-02", technicalProtocol: "BLS/ACLS Training", floorAction: "Audit staff matrix: target 100% ACLS for ICU.", priority: "High", riskLevel: "High", consequence: "Rescue failure.", proof: "Matrix File" },
                { id: "H-HR-03", technicalProtocol: "POSH Policy Display", floorAction: "Confirm policy is posted in staff change-rooms.", priority: "High", riskLevel: "High", consequence: "Legal liability.", proof: "Photo" },
                { id: "H-HR-04", technicalProtocol: "Uniform Laundry Cycle", floorAction: "Inspect staff laundry turnaround (Target < 24h).", priority: "Low", riskLevel: "Low", consequence: "Dirty staff appearance.", proof: "Laundry Log" },
                { id: "H-HR-05", technicalProtocol: "Final Monthly HR Matrix", floorAction: "Execute monthly competency sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of admin control.", proof: "Signed Matrix" }
            ]
        }
    ]
};

    