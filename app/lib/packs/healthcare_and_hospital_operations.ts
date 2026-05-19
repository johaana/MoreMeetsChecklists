
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 1500,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The definitive Sovereign v17.9 clinical command engine for multi-specialty hospitals. Hardening 218 technical control points across 24 specialized clinical and administrative roles.",
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
            role: "Hospital Administrator / Medical Superintendent",
            summary: "High-level strategic oversight of clinical risk and sentinel events.",
            icon: "crown",
            tasks: [
                { id: "H-EXE-01", technicalProtocol: "Sentinel Event Triage", floorAction: "Review all near-miss errors and escalation signatures in the last 24h.", priority: "High", riskLevel: "High", consequence: "Fatal patient harm and total loss of institutional license.", proof: "Log Audit", verificationRequired: true, cadence: "daily" },
                { id: "H-EXE-02", technicalProtocol: "Statutory License Pulse", floorAction: "Verify validity of Hospital Registration, Fire NOC, and PC-PNDT certs.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License File", verificationRequired: true, cadence: "daily" },
                { id: "H-EXE-03", technicalProtocol: "Consultant Arrival Parity", floorAction: "Log specialist check-in times against OT/OPD scheduled slots.", priority: "High", riskLevel: "Low", consequence: "Clinical care delay and reputational drop.", proof: "Attendance Log", cadence: "daily" },
                { id: "H-EXE-04", technicalProtocol: "M&M Committee Oversight", floorAction: "Verify implementation of corrective actions from last Morbidity meeting.", priority: "High", riskLevel: "Medium", consequence: "Lack of clinical accountability.", proof: "Minutes Folder", cadence: "weekly" },
                { id: "H-EXE-05", technicalProtocol: "Accreditation Readiness", floorAction: "Audit 5 random NABH indicator logs for zero-gap entry.", priority: "Medium", riskLevel: "Medium", consequence: "Failure in accreditation audit.", proof: "Indicator Log", cadence: "weekly" },
                { id: "H-EXE-06", technicalProtocol: "P&L Yield Analysis", floorAction: "Review ward-wise consumable billing vs inventory issue notes.", priority: "High", riskLevel: "Medium", consequence: "Significant unrecovered consumable costs.", proof: "Yield Report", cadence: "monthly" },
                { id: "H-EXE-07", technicalProtocol: "Staff Attrition Risk", floorAction: "Review turnover metrics for critical care nursing teams.", priority: "Medium", riskLevel: "Low", consequence: "Institutional knowledge decay.", proof: "HR Dashboard", cadence: "monthly" },
                { id: "H-EXE-08", technicalProtocol: "Public Liability Audit", floorAction: "Confirm 100% active insurance for the facility and clinical indemnity.", priority: "High", riskLevel: "High", consequence: "Unrecoverable loss during malpractice suit.", proof: "Policy Registry", verificationRequired: true, cadence: "monthly" },
                { id: "H-EXE-09", technicalProtocol: "Strategic CAPEX Review", floorAction: "Review uptime metrics for high-value MRI/CT hardware.", priority: "Medium", riskLevel: "Medium", consequence: "Reduced diagnostic capacity.", proof: "Uptime Report", cadence: "monthly" },
                { id: "H-EXE-10", technicalProtocol: "Daily MOD Sign-off", floorAction: "Final daily operational summary and high-risk incident initials.", priority: "High", riskLevel: "Low", consequence: "Governance failure.", proof: "Signed Summary", verificationRequired: true, cadence: "daily" }
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
                { id: "H-DMO-01", technicalProtocol: "Clinical Handover Bridge", floorAction: "Verify zero-gap data transfer between AM/PM medical teams.", priority: "High", riskLevel: "High", consequence: "Loss of critical patient vitals data.", proof: "Handover Log", verificationRequired: true, cadence: "daily" },
                { id: "H-DMO-02", technicalProtocol: "High-Risk Ward Round", floorAction: "Physically assess all patients flagged as 'Unstable' in the EMR.", priority: "High", riskLevel: "High", consequence: "Undetected clinical deterioration.", proof: "Assessment Note", cadence: "daily" },
                { id: "H-DMO-03", technicalProtocol: "Statutory Mortality Report", floorAction: "Review 100% of death certificates for accuracy pre-MRO filing.", priority: "High", riskLevel: "Medium", consequence: "Legal/Police complications.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "H-DMO-04", technicalProtocol: "Medication Chart Sync", floorAction: "Verify doctor's orders match the active nursing medication record.", priority: "High", riskLevel: "High", consequence: "Dispensing errors and legal liability.", proof: "Chart Match", verificationRequired: true, cadence: "daily" },
                { id: "H-DMO-05", technicalProtocol: "Consultant Call Log", floorAction: "Track TAT for consultant response to urgent ward escalations.", priority: "Medium", riskLevel: "Low", consequence: "Delayed clinical decisions.", proof: "Call Ledger", cadence: "daily" },
                { id: "H-DMO-06", technicalProtocol: "Code Blue Drill Participation", floorAction: "Lead weekly rapid-response simulation in general ward.", priority: "Medium", riskLevel: "High", consequence: "Staff confusion during real arrest.", proof: "Drill Report", cadence: "weekly" },
                { id: "H-DMO-07", technicalProtocol: "MLC Record Integrity", floorAction: "Verify 100% documentation for Medico-Legal Cases admitted today.", priority: "High", riskLevel: "High", consequence: "Police case friction and judicial audit failure.", proof: "MLC Register", verificationRequired: true, cadence: "daily" },
                { id: "H-DMO-08", technicalProtocol: "Patient Discharge Pulse", floorAction: "Monitor time from 'Discharge Ordered' to 'Summary Printed'.", priority: "Medium", riskLevel: "Low", consequence: "Bed occupancy inefficiency.", proof: "TAT Log", cadence: "daily" },
                { id: "H-DMO-09", technicalProtocol: "Critical Lab Value Action", floorAction: "Confirm notification and action on all 'Panic' lab results < 15 mins.", priority: "High", riskLevel: "High", consequence: "Fatal delay in intervention.", proof: "Action Log", verificationRequired: true, cadence: "daily" },
                { id: "H-DMO-10", technicalProtocol: "EOD Medical Summary", floorAction: "Final shift status report sign-off.", priority: "High", riskLevel: "Low", consequence: "Information gap at handover.", proof: "Shift Report", cadence: "daily" }
            ]
        },
        {
            title: "Emergency Room Command",
            department: "Emergency",
            frequency: "Hourly",
            role: "Emergency Room (ER) Consultant",
            summary: "Triage efficiency and red-zone readiness.",
            icon: "ambulance",
            tasks: [
                { id: "H-ER-01", technicalProtocol: "Triage Classification Audit", floorAction: "Verify 100% Red/Yellow/Green tagging accuracy at ER entrance.", priority: "High", riskLevel: "High", consequence: "Delayed treatment for life-critical cases.", proof: "Triage Log", verificationRequired: true, cadence: "daily" },
                { id: "H-ER-02", technicalProtocol: "Resuscitation Bay Readiness", floorAction: "Test ventilator, defibrillator, and suction in the Red Zone.", priority: "High", riskLevel: "High", consequence: "Fatal equipment failure during a code.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "H-ER-03", technicalProtocol: "Ambulance Handover Timing", floorAction: "Log time from ambulance dock to first consultant touch (Target < 2 mins).", priority: "Medium", riskLevel: "Medium", consequence: "ER gridlock and patient risk.", proof: "TAT Log", cadence: "daily" },
                { id: "H-ER-04", technicalProtocol: "Disaster Stock Readiness", floorAction: "Verify presence of mass-casualty 'Orange Alert' kits.", priority: "High", riskLevel: "High", consequence: "Inability to handle surge events.", proof: "Inventory Check", cadence: "weekly" },
                { id: "H-ER-05", technicalProtocol: "Staff Trauma Briefing", floorAction: "Execute 5-min briefing on current ER occupancy and high-risk cases.", priority: "Low", riskLevel: "Low", consequence: "Disorganized trauma response.", proof: "Briefing Log", cadence: "daily" },
                { id: "H-ER-06", technicalProtocol: "MLC Notification Pulse", floorAction: "Confirm police intimation for 100% of trauma/accident arrivals.", priority: "High", riskLevel: "High", consequence: "Legal violation and judicial penalties.", proof: "MLC Ledger", verificationRequired: true, cadence: "daily" },
                { id: "H-ER-07", technicalProtocol: "Radiology Stat Link", floorAction: "Monitor TAT for ER X-ray and CT reports (Target < 30 mins).", priority: "High", riskLevel: "Medium", consequence: "Delayed trauma surgery.", proof: "Stat Dashboard", cadence: "daily" },
                { id: "H-ER-08", technicalProtocol: "ER Hygiene Sweep", floorAction: "Verify 100% clearance of bio-hazardous spills in trauma bays.", priority: "High", riskLevel: "High", consequence: "Infection transmission.", proof: "Cleaning Sheet", cadence: "hourly" },
                { id: "H-ER-09", technicalProtocol: "Poisoning Protocol Sync", floorAction: "Check availability of 5 primary antidotes in ER fridge.", priority: "High", riskLevel: "High", consequence: "Fatal delay in toxicological response.", proof: "Stock Sheet", verificationRequired: true, cadence: "daily" },
                { id: "H-ER-10", technicalProtocol: "ER Exit Occupancy", floorAction: "Coordinate transfer of stable patients to wards to clear ER bays.", priority: "Medium", riskLevel: "Low", consequence: "New arrivals waiting in ambulance.", proof: "Occupancy Log", cadence: "hourly" }
            ]
        },
        {
            title: "Critical Care Governance",
            department: "ICU",
            frequency: "Daily",
            role: "ICU Consultant / Intensivist",
            summary: "Advanced vitals monitoring and organ-support command.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-ICU-01", technicalProtocol: "Vitals Trend Validation", floorAction: "Review 100% of ventilator settings vs. blood-gas (ABG) targets.", priority: "High", riskLevel: "High", consequence: "Acute respiratory failure.", proof: "Chart Audit", verificationRequired: true, cadence: "daily" },
                { id: "H-ICU-02", technicalProtocol: "Invasive Line Integrity", floorAction: "Inspect site hygiene for all central lines and arterial ports.", priority: "High", riskLevel: "High", consequence: "Sepsis and multi-organ failure.", proof: "Visual Check", cadence: "daily" },
                { id: "H-ICU-03", technicalProtocol: "Antibiotic Stewardship", floorAction: "Review culture-sensitivity reports; justify high-end antibiotic use.", priority: "Medium", riskLevel: "Medium", consequence: "Drug resistance and HAI spikes.", proof: "Audit Note", cadence: "daily" },
                { id: "H-ICU-04", technicalProtocol: "Bed Occupancy Pulse", floorAction: "Identify ICU patients eligible for ward step-down.", priority: "Medium", riskLevel: "Low", consequence: "ICU bed shortage for emergencies.", proof: "Step-down List", cadence: "daily" },
                { id: "H-ICU-05", technicalProtocol: "Brain-Death Protocol", floorAction: "Audit 100% adherence to legal apnea-test documentation.", priority: "High", riskLevel: "High", consequence: "Severe legal and ethical liability.", proof: "Protocol Log", verificationRequired: true, cadence: "incident-based" },
                { id: "H-ICU-06", technicalProtocol: "ICU Family Counseling", floorAction: "Execute 10-min status updates for families of P1 patients.", priority: "Medium", riskLevel: "Low", consequence: "Loss of trust and legal threats.", proof: "Counseling Note", cadence: "daily" },
                { id: "H-ICU-07", technicalProtocol: "Nutritional Support Sync", floorAction: "Verify TPN/Enteral feeds match calculated calorie targets.", priority: "Low", riskLevel: "Low", consequence: "Negative nitrogen balance / slow recovery.", proof: "Diet Chart", cadence: "daily" },
                { id: "H-ICU-08", technicalProtocol: "Ventilator Alarm Pulse", floorAction: "Confirm min/max pressure triggers are set on all active machines.", priority: "High", riskLevel: "High", consequence: "Undetected circuit disconnect.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "H-ICU-09", technicalProtocol: "DVT Prophylaxis Audit", floorAction: "Confirm 100% compliance with mechanical/chemical prophylaxis.", priority: "Medium", riskLevel: "Medium", consequence: "Pulmonary embolism (Never-event).", proof: "MAR Sheet", cadence: "daily" },
                { id: "H-ICU-10", technicalProtocol: "ICU Mortality Review", floorAction: "Final peer-review of any expiry in last 24h.", priority: "High", riskLevel: "Low", consequence: "Loss of clinical oversight.", proof: "M&M Form", cadence: "daily" }
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
                { id: "H-WNS-01", technicalProtocol: "Infusion Site Audit", floorAction: "Check 100% of IV cannulas for phlebitis or leakage.", priority: "Medium", riskLevel: "Low", consequence: "Local infection and patient pain.", proof: "Observation Log", cadence: "daily" },
                { id: "H-WNS-02", technicalProtocol: "Medication '5-Rights'", floorAction: "Verify 100% dose match against original doctor order.", priority: "High", riskLevel: "High", consequence: "Medication error liability.", proof: "MAR Sheet", verificationRequired: true, cadence: "daily" },
                { id: "H-WNS-03", technicalProtocol: "Clinical Vitals Charting", floorAction: "Log Temp, BP, Pulse every 4 hours for 100% of assigned patients.", priority: "High", riskLevel: "Medium", consequence: "Undetected status changes.", proof: "Vitals Chart", cadence: "daily" },
                { id: "H-WNS-04", technicalProtocol: "Pressure Sore Patrol", floorAction: "Execute 2-hourly position change for restricted-mobility patients.", priority: "Medium", riskLevel: "Low", consequence: "Development of bedsores (Grade 2+).", proof: "Turn-log", cadence: "daily" },
                { id: "H-WNS-05", technicalProtocol: "Nursing Handover Pulse", floorAction: "Bedside 'See-and-Say' handover for high-risk medications.", priority: "High", riskLevel: "High", consequence: "Discontinuity of care.", proof: "Handover Note", verificationRequired: true, cadence: "daily" },
                { id: "H-WNS-06", technicalProtocol: "Sample Labeling Audit", floorAction: "Confirm 2-ID match at bedside before vial transport.", priority: "High", riskLevel: "High", consequence: "Diagnostic mix-up.", proof: "Label Match", verificationRequired: true, cadence: "daily" },
                { id: "H-WNS-07", technicalProtocol: "Dietary Restriction Sync", floorAction: "Verify meal tray matches 'NPO' or 'Diabetic' flags.", priority: "High", riskLevel: "Medium", consequence: "Clinical complications (Hypo/Hyperglycemia).", proof: "Tray Audit", cadence: "daily" },
                { id: "H-WNS-08", technicalProtocol: "Consent Verification", floorAction: "Verify signature on 100% of upcoming surgical consents.", priority: "High", riskLevel: "High", consequence: "Legal halt to OT list.", proof: "Consent File", verificationRequired: true, cadence: "daily" },
                { id: "H-WNS-09", technicalProtocol: "Fall Prevention Guard", floorAction: "Confirm bed side-rails are UP for all high-risk elderly patients.", priority: "High", riskLevel: "High", consequence: "In-patient fall injury liability.", proof: "Walkthrough", cadence: "daily" },
                { id: "H-WNS-10", technicalProtocol: "Ward Inventory Reconcile", floorAction: "Count top 5 ward consumables (IV sets, syringes).", priority: "Low", riskLevel: "Low", consequence: "Billing leakage.", proof: "Count Sheet", cadence: "daily" }
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
                { id: "H-INS-01", technicalProtocol: "Crash Cart Readiness", floorAction: "Verify AED battery status and cardiac drug seal integrity.", priority: "High", riskLevel: "High", consequence: "Resuscitation failure (Fatal).", proof: "Seal Check", verificationRequired: true, cadence: "daily" },
                { id: "H-INS-02", technicalProtocol: "Line & Tube Sweep", floorAction: "Confirm security of ET tubes and drainage catheters.", priority: "High", riskLevel: "High", consequence: "Accidental extubation.", proof: "Visual Audit", cadence: "hourly" },
                { id: "H-INS-03", technicalProtocol: "Monitor Alarm Calibration", floorAction: "Test SpO2 and HR alarm limits are personalized per patient.", priority: "High", riskLevel: "Medium", consequence: "Alarm fatigue and missed events.", proof: "System Screen", cadence: "daily" },
                { id: "H-INS-04", technicalProtocol: "Suction Readiness", floorAction: "Test negative pressure on 100% of ICU wall-suction points.", priority: "High", riskLevel: "High", consequence: "Aspiration emergency failure.", proof: "Test Note", cadence: "daily" },
                { id: "H-INS-05", technicalProtocol: "Ventilator Humidifier", floorAction: "Refill 100% of active machine water-chambers.", priority: "Low", riskLevel: "Low", consequence: "Tracheal irritation / drying.", proof: "Visual Check", cadence: "daily" },
                { id: "H-INS-06", technicalProtocol: "Fluid Balance Reconcile", floorAction: "Log Input/Output hourly for all hemodialysis cases.", priority: "High", riskLevel: "High", consequence: "Fluid overload / Cardiac strain.", proof: "Balance Chart", cadence: "hourly" },
                { id: "H-INS-07", technicalProtocol: "Restraint Integrity Audit", floorAction: "Check skin circulation for 100% of restrained patients.", priority: "Medium", riskLevel: "Low", consequence: "Nerve damage and ethical violation.", proof: "Observation Log", cadence: "hourly" },
                { id: "H-INS-08", technicalProtocol: "Bedside Monitor Hygiene", floorAction: "Sanitize screens and touchpoints with 70% alcohol.", priority: "Medium", riskLevel: "Medium", consequence: "Systemic ICU infection spread.", proof: "Cleaning Note", cadence: "daily" },
                { id: "H-INS-09", technicalProtocol: "Isolation Barrier Audit", floorAction: "Verify PPE usage for 100% of positive MRSA/VRE cases.", priority: "High", riskLevel: "High", consequence: "ICU outbreak.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "H-INS-10", technicalProtocol: "Nursing Shift Lead sign-off", floorAction: "Final hourly occupancy and vitals summary.", priority: "High", riskLevel: "Low", consequence: "Loss of shift control.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Surgical Safety (OT)",
            department: "Surgery",
            frequency: "Per Surgery",
            role: "Operation Theatre (OT) Surgeon",
            summary: "Zero-fail protocols for pre-incision and sterilization.",
            icon: "scissors",
            tasks: [
                { id: "H-SUR-01", technicalProtocol: "WHO 'Time Out' Protocol", floorAction: "Execute pre-incision verbal verification for 100% of today's cases.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Fatal never-event).", proof: "Checklist Log", verificationRequired: true, cadence: "incident-based" },
                { id: "H-SUR-02", technicalProtocol: "Swab & Instrument Count", floorAction: "Perform independent double-count before wound closure.", priority: "High", riskLevel: "High", consequence: "Retained foreign object inside patient.", proof: "Dual-Sign Log", verificationRequired: true, cadence: "incident-based" },
                { id: "H-SUR-03", technicalProtocol: "Site Marking Verify", floorAction: "Confirm surgeon's initials on 100% of operative sites pre-scrub.", priority: "High", riskLevel: "High", consequence: "Wrong-side error.", proof: "Visual Check", verificationRequired: true, cadence: "incident-based" },
                { id: "H-SUR-04", technicalProtocol: "Specimen Chain-of-Custody", floorAction: "Verify labeling and fixative for 100% of biopsy samples.", priority: "Medium", riskLevel: "Medium", consequence: "Lost diagnostic sample.", proof: "Registry Audit", cadence: "incident-based" },
                { id: "H-SUR-05", technicalProtocol: "Post-Op Debrief", floorAction: "Log any intra-operative blood loss > 500ml or complications.", priority: "High", riskLevel: "Medium", consequence: "Delayed post-op management.", proof: "Surgical Note", cadence: "incident-based" },
                { id: "H-SUR-06", technicalProtocol: "Handover to Recovery", floorAction: "Conduct face-to-face handover with anesthetist to recovery nurse.", priority: "High", riskLevel: "High", consequence: "Unstable patient transfer.", proof: "Handover Log", cadence: "incident-based" },
                { id: "H-SUR-07", technicalProtocol: "Implant Seriality Reconcile", floorAction: "Match barcode of 100% of used stents/plates to patient bill.", priority: "High", riskLevel: "Medium", consequence: "Untraceable implant recalls and billing loss.", proof: "System Sync", verificationRequired: true, cadence: "incident-based" },
                { id: "H-SUR-08", technicalProtocol: "Antibiotic Timing", floorAction: "Confirm dose administered < 60 mins pre-incision.", priority: "Medium", riskLevel: "High", consequence: "Increased surgical site infection.", proof: "MAR Sheet", cadence: "incident-based" }
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
                { id: "H-OTT-01", technicalProtocol: "CSSD Sterility Indicators", floorAction: "Inspect color-change tapes on 100% of active instrument sets.", priority: "High", riskLevel: "High", consequence: "Post-operative infection outbreaks.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "H-OTT-02", technicalProtocol: "Medical Gas Sync", floorAction: "Confirm Oxygen/Nitrous cylinder levels and auto-switch logic.", priority: "High", riskLevel: "High", consequence: "Gas failure during surgery (Fatal).", proof: "Gauge Log", verificationRequired: true, cadence: "daily" },
                { id: "H-OTT-03", technicalProtocol: "HEPA Filter Pressure", floorAction: "Verify positive pressure in OT-1 is maintained (Target 15+ Pa).", priority: "High", riskLevel: "High", consequence: "Airborne contamination entering OT.", proof: "Gauge Reading", cadence: "daily" },
                { id: "H-OTT-04", technicalProtocol: "UPS Battery Pulse", floorAction: "Test OT light backup runtime (> 10 mins).", priority: "High", riskLevel: "High", consequence: "Total darkness during critical procedure.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "H-OTT-05", technicalProtocol: "Scavenging System Logic", floorAction: "Verify suction of waste anesthetic gases from OT floor.", priority: "Medium", riskLevel: "Low", consequence: "Staff fatigue / chronic health risk.", proof: "Visual Check", cadence: "daily" },
                { id: "H-OTT-06", technicalProtocol: "Defibrillator Stat Test", floorAction: "Perform internal self-test on 100% of OT units.", priority: "High", riskLevel: "High", consequence: "Code Blue response failure.", proof: "Test Printout", verificationRequired: true, cadence: "daily" },
                { id: "H-OTT-07", technicalProtocol: "OT Hygiene Sweep", floorAction: "Audit logs for 15-min turnaround cleaning between cases.", priority: "High", riskLevel: "Low", consequence: "Cross-patient infection.", proof: "Turnaround Log", cadence: "daily" },
                { id: "H-OTT-08", technicalProtocol: "Blade/Sharps Disposal", floorAction: "Confirm zero loose sharps on OT tables post-closure.", priority: "High", riskLevel: "High", consequence: "Needle-stick injury to cleaners.", proof: "Visual Audit", cadence: "daily" }
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
                { id: "H-ANE-01", technicalProtocol: "Pre-Anesthesia Assessment (PAC)", floorAction: "Verify NPO status and airway grading for 100% of surgical list.", priority: "High", riskLevel: "High", consequence: "Aspiration and anesthetic death.", proof: "PAC Form", verificationRequired: true, cadence: "incident-based" },
                { id: "H-ANE-02", technicalProtocol: "Vaporizer Calibration", floorAction: "Verify Sevoflurane levels and zero-leakage on active circuits.", priority: "High", riskLevel: "High", consequence: "Inadequate sedation or toxic exposure.", proof: "Calibration Log", cadence: "daily" },
                { id: "H-ANE-03", technicalProtocol: "Difficult Airway Kit", floorAction: "Physically confirm presence of LMA and bougie in OT cart.", priority: "High", riskLevel: "High", consequence: "Inability to secure airway (Fatal).", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "H-ANE-04", technicalProtocol: "Recovery Vitals Scan", floorAction: "Monitor SpO2 and consciousness scores for post-op transfers.", priority: "High", riskLevel: "Medium", consequence: "Post-operative hypoxia.", proof: "Recovery Log", cadence: "hourly" },
                { id: "H-ANE-05", technicalProtocol: "Narcotic Consumption Log", floorAction: "Verify mg-to-mg usage against patient weight and bill.", priority: "High", riskLevel: "High", consequence: "Drug diversion audit failure.", proof: "MAR Sheet", verificationRequired: true, cadence: "daily" },
                { id: "H-ANE-06", technicalProtocol: "Muscle Relaxant Reversal", floorAction: "Audit 100% compliance with nerve-stimulator monitoring.", priority: "Medium", riskLevel: "Low", consequence: "Residual paralysis in recovery.", proof: "Monitor Log", cadence: "incident-based" },
                { id: "H-ANE-07", technicalProtocol: "Malignant Hyperthermia Kit", floorAction: "Verify stock of Dantrolene in main OT pharmacy.", priority: "High", riskLevel: "High", consequence: "Fatal complication response failure.", proof: "Stock Sheet", cadence: "weekly" },
                { id: "H-ANE-08", technicalProtocol: "Intra-Op Awareness Audit", floorAction: "Sample 5 charts for BIS monitoring compliance.", priority: "Low", riskLevel: "Medium", consequence: "Traumatic patient experience.", proof: "Audit Sample", cadence: "weekly" }
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
                { id: "H-PHM-01", technicalProtocol: "Narcotics Vault Count", floorAction: "Conduct double-blind physical count of all controlled substances.", priority: "High", riskLevel: "High", consequence: "Drug diversion and criminal liability.", proof: "Dual-Sign Log", verificationRequired: true, cadence: "daily" },
                { id: "H-PHM-02", technicalProtocol: "Vaccine Cold Chain Pulse", floorAction: "Log fridge temperatures twice daily (Target < 5°C).", priority: "High", riskLevel: "High", consequence: "Ineffective vaccine administration.", proof: "Temp Log", verificationRequired: true, cadence: "daily" },
                { id: "H-PHM-03", technicalProtocol: "LASA Drug Segregation", floorAction: "Inspect racks for 'Look-Alike' drug isolation compliance.", priority: "Medium", riskLevel: "High", consequence: "Fatal dispensing errors.", proof: "Visual Check", cadence: "weekly" },
                { id: "H-PHM-04", technicalProtocol: "Pharmacy Bill Sequence", floorAction: "Verify zero missing invoices in digital POS journal.", priority: "High", riskLevel: "Medium", consequence: "Internal inventory theft.", proof: "Audit Report", verificationRequired: true, cadence: "daily" },
                { id: "H-PHM-05", technicalProtocol: "Drug Recall Pulse", floorAction: "Check 100% of today's recall alerts against current shelf stock.", priority: "High", riskLevel: "High", consequence: "Dispensing prohibited product.", proof: "Recall File", cadence: "daily" },
                { id: "H-PHM-06", technicalProtocol: "High-Alert Med Labelling", floorAction: "Verify Red-Alert stickers on 100% of Potassium Chloride vials.", priority: "High", riskLevel: "High", consequence: "Fatal dosing error.", proof: "Visual Audit", cadence: "daily" },
                { id: "H-PHM-07", technicalProtocol: "Expiry Sweep", floorAction: "Identify and remove all items with < 60 days life.", priority: "Medium", riskLevel: "Low", consequence: "Stock write-off loss.", proof: "Expiry Sheet", cadence: "monthly" },
                { id: "H-PHM-08", technicalProtocol: "Antibiotic Sales Audit", floorAction: "Verify doctor's signature on 100% of retail antibiotic bills.", priority: "Medium", riskLevel: "Low", consequence: "Regulatory non-compliance.", proof: "Bill Audit", cadence: "weekly" }
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
                { id: "H-LAB-01", technicalProtocol: "Sample Custody Chain", floorAction: "Verify 2-ID match (Name/MRN) on 100% of received vials.", priority: "High", riskLevel: "High", consequence: "Wrong result leading to wrong treatment.", proof: "Vial Scan", verificationRequired: true, cadence: "daily" },
                { id: "H-LAB-02", technicalProtocol: "Critical Value Escalation", floorAction: "Log time from 'Result Ready' to 'Doctor Notified' for panic values.", priority: "High", riskLevel: "Medium", consequence: "Fatal delay in clinical intervention.", proof: "Panic Log", verificationRequired: true, cadence: "daily" },
                { id: "H-LAB-03", technicalProtocol: "Incubator Temp Pulse", floorAction: "Verify 37°C stability for all microbiology cultures.", priority: "Medium", riskLevel: "Medium", consequence: "False-negative infection diagnosis.", proof: "Temp Log", cadence: "daily" },
                { id: "H-LAB-04", technicalProtocol: "Centrifuge Balancing", floorAction: "Audit 5 runs for tube symmetry to prevent motor damage.", priority: "Low", riskLevel: "Low", consequence: "Hardware breakdown.", proof: "Visual Check", cadence: "weekly" },
                { id: "H-LAB-05", technicalProtocol: "Reagent Expiry Check", floorAction: "Verify zero expired PCR kits in current rotation.", priority: "High", riskLevel: "High", consequence: "Inaccurate diagnostics.", proof: "Inventory Note", cadence: "weekly" },
                { id: "H-LAB-06", technicalProtocol: "Stat TAT Monitor", floorAction: "Target ER samples for < 45 min report delivery.", priority: "High", riskLevel: "Medium", consequence: "Trauma case delays.", proof: "TAT Dashboard", cadence: "daily" },
                { id: "H-LAB-07", technicalProtocol: "Water Purity for Bio-chem", floorAction: "Log TDS of feed water for automated analyzers.", priority: "Medium", riskLevel: "Low", consequence: "Interference with test accuracy.", proof: "TDS Meter", cadence: "daily" },
                { id: "H-LAB-08", technicalProtocol: "Laboratory Waste Seal", floorAction: "Verify autoclaving of 100% of bio-hazard vials pre-disposal.", priority: "High", riskLevel: "High", consequence: "Environmental contamination.", proof: "Log Entry", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Radiology Safety",
            department: "Radiology",
            frequency: "Daily",
            role: "Radiology Technician (X-Ray / MRI / CT)",
            summary: "Radiation safety and imaging equipment parity.",
            icon: "scan",
            tasks: [
                { id: "H-RAD-01", technicalProtocol: "MRI Zone-4 Lockdown", floorAction: "Check 100% of staff/patients for metallic objects pre-entry.", priority: "High", riskLevel: "High", consequence: "Projectile accident (Fatal).", proof: "Sensor Log", verificationRequired: true, cadence: "daily" },
                { id: "H-RAD-02", technicalProtocol: "Lead Apron Integrity", floorAction: "Fluoroscopic test of 5 random aprons for shielding leaks.", priority: "Medium", riskLevel: "Low", consequence: "Occupational radiation exposure.", proof: "Test Report", cadence: "monthly" },
                { id: "H-RAD-03", technicalProtocol: "CT Contrast Audit", floorAction: "Verify 2-nurse check for contrast expiry and batch match.", priority: "High", riskLevel: "Medium", consequence: "Anaphylactic shock.", proof: "Consent File", verificationRequired: true, cadence: "daily" },
                { id: "H-RAD-04", technicalProtocol: "Dosimeter TLD Badges", floorAction: "Verify 100% of active staff possess current-quarter badges.", priority: "High", riskLevel: "High", consequence: "AERB non-compliance / license loss.", proof: "TLD Registry", verificationRequired: true, cadence: "daily" },
                { id: "H-RAD-05", technicalProtocol: "MRI Quench Logic", floorAction: "Confirm Helium pressure and vent functionality.", priority: "High", riskLevel: "High", consequence: "Magnet destruction during quench.", proof: "Gauge Log", cadence: "weekly" },
                { id: "H-RAD-06", technicalProtocol: "Image Archival Sync", floorAction: "Verify 100% upload of today's DICOM files to PACS.", priority: "Medium", riskLevel: "Low", consequence: "Lost diagnostic evidence.", proof: "System Screen", cadence: "daily" },
                { id: "H-RAD-07", technicalProtocol: "AERB Signage Pulse", floorAction: "Confirm 100% visibility of 'Radiation Area' warnings.", priority: "Low", riskLevel: "Medium", consequence: "Accidental public exposure.", proof: "Visual Audit", cadence: "daily" },
                { id: "H-RAD-08", technicalProtocol: "Equipment Calibration", floorAction: "Review vendor certificates for annual X-ray tube calibration.", priority: "Medium", riskLevel: "Low", consequence: "Reduced image quality.", proof: "AMC Folder", cadence: "monthly" }
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
                { id: "H-ADM-01", technicalProtocol: "KYC ID Capture (100%)", floorAction: "Scan and log government-approved ID for every IP admission.", priority: "High", riskLevel: "High", consequence: "Medico-legal defense failure.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "H-ADM-02", technicalProtocol: "Bed Availability Sync", floorAction: "Match HIS digital bed count against physical Ward occupancy.", priority: "Medium", riskLevel: "Low", consequence: "Booking conflicts / patient waiting.", proof: "HIS Dashboard", cadence: "daily" },
                { id: "H-ADM-03", technicalProtocol: "Finance Counseling", floorAction: "Provide written package estimate for 100% of elective surgeries.", priority: "High", riskLevel: "Medium", consequence: "Billing disputes at discharge.", proof: "Signed Estimate", verificationRequired: true, cadence: "daily" },
                { id: "H-ADM-04", technicalProtocol: "Admission Consent", floorAction: "Verify original signature on general admission T&Cs.", priority: "High", riskLevel: "High", consequence: "Legal defense collapse.", proof: "Consent File", verificationRequired: true, cadence: "daily" },
                { id: "H-ADM-05", technicalProtocol: "VIP Admission Triage", floorAction: "Coordinate porter and escort for identified 'High Priority' patients.", priority: "Low", riskLevel: "Low", consequence: "Poor brand experience.", proof: "Porter Log", cadence: "daily" },
                { id: "H-ADM-06", technicalProtocol: "Advance Deposit Audit", floorAction: "Reconcile daily cash receipts vs HIS collection report.", priority: "High", riskLevel: "Medium", consequence: "Untraceable cash theft.", proof: "Settlement Log", cadence: "daily" },
                { id: "H-ADM-07", technicalProtocol: "C-Form Sync", floorAction: "Verify intimation to police for all non-national admissions.", priority: "High", riskLevel: "High", consequence: "Legal penalty / arrest risk.", proof: "Digital Receipt", cadence: "daily" },
                { id: "H-ADM-08", technicalProtocol: "Reception Grooming", floorAction: "Spot check front-line staff for brand attire compliance.", priority: "Low", riskLevel: "Low", consequence: "Professional brand dilution.", proof: "Visual Audit", cadence: "daily" }
            ]
        },
        {
            title: "Billing & Discharge Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Discharge & Billing Executive",
            summary: "Revenue protection and pre-auth command.",
            icon: "banknote",
            tasks: [
                { id: "H-BIL-01", technicalProtocol: "TPA Pre-Auth Pulse", floorAction: "Verify approval status for 100% of insurance admissions.", priority: "High", riskLevel: "Medium", consequence: "Unrecoverable financial loss.", proof: "System Sync", verificationRequired: true, cadence: "daily" },
                { id: "H-BIL-02", technicalProtocol: "Unbilled Consumable Reconcile", floorAction: "Match Ward stock consumption vs. Pharmacy billing posts.", priority: "Medium", riskLevel: "Low", consequence: "Silent margin leakage.", proof: "Audit Report", cadence: "weekly" },
                { id: "H-BIL-03", technicalProtocol: "HIS Sequence Audit", floorAction: "Check POS journal for zero missing invoice numbers.", priority: "High", riskLevel: "High", consequence: "Revenue manipulation.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "H-BIL-04", technicalProtocol: "Discharge Summary TAT", floorAction: "Ensure printing < 30 mins post doctor's final signature.", priority: "Medium", riskLevel: "Low", consequence: "Patient frustration at exit.", proof: "TAT Log", cadence: "daily" },
                { id: "H-BIL-05", technicalProtocol: "Cash Counter Reconciliation", floorAction: "Match physical cash notes to digital X-reading report.", priority: "High", riskLevel: "High", consequence: "Cash shortfall.", proof: "Dual-Sign Log", verificationRequired: true, cadence: "daily" },
                { id: "H-BIL-06", technicalProtocol: "TPA Rejection Analysis", floorAction: "Log reasons for 100% of insurance denials < 24h.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to appeal claims.", proof: "Analysis Sheet", cadence: "weekly" },
                { id: "H-BIL-07", technicalProtocol: "Refund Transaction Match", floorAction: "Cross-check 100% of IP refunds against HOD approval.", priority: "High", riskLevel: "High", consequence: "Internal refund fraud.", proof: "Audit Sample", cadence: "weekly" },
                { id: "H-BIL-08", technicalProtocol: "Pharmacy Credit Control", floorAction: "Identify patients with unpaid drug tabs > ₹5k.", priority: "High", riskLevel: "Medium", consequence: "Financial bad debt.", proof: "Dues List", cadence: "daily" }
            ]
        },
        {
            title: "Ward Support",
            department: "Support",
            frequency: "Daily",
            role: "Ward Boy / Patient Attendant",
            summary: "Patient mobility and specimen logistics.",
            icon: "user",
            tasks: [
                { id: "H-ATT-01", technicalProtocol: "Safe Patient Transfer", floorAction: "Verify wheelchair locks and side-rails before corridor movement.", priority: "High", riskLevel: "High", consequence: "Patient fall injury.", proof: "Supervisor Obs", cadence: "daily" },
                { id: "H-ATT-02", technicalProtocol: "Sample Logistics Speed", floorAction: "Deliver 100% of STAT vials to Lab < 10 mins post-draw.", priority: "Medium", riskLevel: "Low", consequence: "Sample degradation.", proof: "Log Entry", cadence: "daily" },
                { id: "H-ATT-03", technicalProtocol: "Bedside Hygiene Pulse", floorAction: "Empty urine bags and change linens for 100% assigned beds.", priority: "Medium", riskLevel: "Medium", consequence: "Infection risk and patient distress.", proof: "Cleaning Chart", cadence: "daily" },
                { id: "H-ATT-04", technicalProtocol: "Oxygen Cylinder Par-level", floorAction: "Confirm 2 full spare units available in Ward-C store.", priority: "High", riskLevel: "High", consequence: "Fatal supply failure.", proof: "Stock Sheet", verificationRequired: true, cadence: "daily" },
                { id: "H-ATT-05", technicalProtocol: "Ward De-clutter", floorAction: "Clear all used trolleys and trash bags from fire pathways.", priority: "Medium", riskLevel: "Medium", consequence: "Blocked egress.", proof: "Walkthrough", cadence: "hourly" },
                { id: "H-ATT-06", technicalProtocol: "Linen Sorting Integrity", floorAction: "Verify separation of infectious vs non-infectious linens.", priority: "High", riskLevel: "High", consequence: "Pathogen spread in laundry.", proof: "Visual Audit", cadence: "daily" },
                { id: "H-ATT-07", technicalProtocol: "Patient Grooming", floorAction: "Execute morning shaves/sponge-baths for all bedridden cases.", priority: "Low", riskLevel: "Low", consequence: "Poor patient care scores.", proof: "Nursing Sign-off", cadence: "daily" },
                { id: "H-ATT-08", technicalProtocol: "Waste Bin Removal", floorAction: "Replace yellow/red bio-hazard bags every 4 hours.", priority: "Medium", riskLevel: "High", consequence: "Overflowing medical waste.", proof: "Removal Log", cadence: "hourly" }
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
                { id: "H-ICO-01", technicalProtocol: "ATP Surface Swab", floorAction: "Conduct random RLU test of high-touch OPD counters.", priority: "Medium", riskLevel: "High", consequence: "Infection transmission outbreaks.", proof: "Test Result", verificationRequired: true, cadence: "daily" },
                { id: "H-ICO-02", technicalProtocol: "Hand-Hygiene Compliance", floorAction: "Audit 10 staff entries for alcohol rub technique.", priority: "High", riskLevel: "High", consequence: "Systemic cross-contamination.", proof: "Audit Score", cadence: "daily" },
                { id: "H-ICO-03", technicalProtocol: "Needle-Stick Injury Log", floorAction: "Document 100% of staff incidents < 1h; initiate PEP.", priority: "High", riskLevel: "High", consequence: "Fatal blood-borne transmission.", proof: "Incident Report", verificationRequired: true, cadence: "incident-based" },
                { id: "H-ICO-04", technicalProtocol: "Isolation Barrier Audit", floorAction: "Check PPE availability at entry of all 'Contact Precaution' rooms.", priority: "High", riskLevel: "High", consequence: "Staff/Visitor infection.", proof: "Visual Check", cadence: "daily" },
                { id: "H-ICO-05", technicalProtocol: "Water Source Sampling", floorAction: "Verify chlorine levels at drinking points (Target 0.5-2.0 ppm).", priority: "Medium", riskLevel: "Medium", consequence: "Water-borne outbreak.", proof: "Test Kit Log", cadence: "weekly" },
                { id: "H-ICO-06", technicalProtocol: "CSSD Cycle Validation", floorAction: "Audit 5 autoclave charts for target temp/pressure attainment.", priority: "High", riskLevel: "High", consequence: "Unsterile instruments in OT.", proof: "Autoclave Printout", verificationRequired: true, cadence: "daily" },
                { id: "H-ICO-07", technicalProtocol: "Disinfectant Titration", floorAction: "Test concentration of 5% Lysol solution in floor buckets.", priority: "Medium", riskLevel: "Low", consequence: "Ineffective surface cleaning.", proof: "Test Strip", cadence: "weekly" },
                { id: "H-ICO-08", technicalProtocol: "Bio-Waste Manifest Audit", floorAction: "Cross-match ward weight vs vendor collection receipt.", priority: "High", riskLevel: "Medium", consequence: "Illegal waste disposal liability.", proof: "Weight Match", cadence: "daily" },
                { id: "H-ICO-09", technicalProtocol: "Air Count Monitoring", floorAction: "Review monthly microbial air-settle plates for OT.", priority: "High", riskLevel: "High", consequence: "Surgical site infection surge.", proof: "Lab Report", cadence: "monthly" },
                { id: "H-ICO-10", technicalProtocol: "HAI Trend Analysis", floorAction: "Review VAP and CLABSI rates with Medical Director.", priority: "High", riskLevel: "Low", consequence: "Loss of clinical quality control.", proof: "Monthly Deck", cadence: "monthly" }
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
                { id: "H-BME-01", technicalProtocol: "Dialysis Water TDS", floorAction: "Log purity at RO output (Target < 10 ppm).", priority: "High", riskLevel: "High", consequence: "Patient blood contamination (Fatal).", proof: "TDS Meter", verificationRequired: true, cadence: "daily" },
                { id: "H-BME-02", technicalProtocol: "UPS Battery Load-test", floorAction: "Verify ICU equipment runtime exceeds 30 mins on battery.", priority: "High", riskLevel: "High", consequence: "ICU shutdown during power flip.", proof: "Voltage Log", verificationRequired: true, cadence: "daily" },
                { id: "H-BME-03", technicalProtocol: "Defibrillator Energy Test", floorAction: "Execute 200J dummy load discharge test.", priority: "High", riskLevel: "High", consequence: "Failed resuscitation.", proof: "Test Receipt", verificationRequired: true, cadence: "weekly" },
                { id: "H-BME-04", technicalProtocol: "Ventilator O2 Sensor", floorAction: "Calibrate O2% reading on 5 random ICU machines.", priority: "Medium", riskLevel: "High", consequence: "Incorrect FiO2 delivery.", proof: "Calibration Log", cadence: "weekly" },
                { id: "H-BME-05", technicalProtocol: "Infusion Pump Rate", floorAction: "Test flow-rate accuracy using graduated cylinder.", priority: "Medium", riskLevel: "Medium", consequence: "Drug dosing errors.", proof: "Test Note", cadence: "monthly" },
                { id: "H-BME-06", technicalProtocol: "Radiology Stat Uptime", floorAction: "Verify zero pending error-codes on CT/MRI consoles.", priority: "High", riskLevel: "Medium", consequence: "Diagnostic halt.", proof: "System Log", cadence: "daily" },
                { id: "H-BME-07", technicalProtocol: "AMC Contract Tracker", floorAction: "Identify all medical assets with < 30 days coverage.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored repair costs.", proof: "Contract File", cadence: "monthly" },
                { id: "H-BME-08", technicalProtocol: "Patient Monitor Pulse", floorAction: "Check NIBP cuff integrity and cable connectivity.", priority: "Low", riskLevel: "Low", consequence: "Frequent nuisance alarms.", proof: "Visual Audit", cadence: "daily" },
                { id: "H-BME-09", technicalProtocol: "Electrical Safety (Leakage)", floorAction: "Measure chassis leakage current for OT tables.", priority: "High", riskLevel: "High", consequence: "Patient electrocution liability.", proof: "Test Report", verificationRequired: true, cadence: "quarterly" },
                { id: "H-BME-10", technicalProtocol: "EOD Breakdown Report", floorAction: "Final summary of all non-functional clinical hardware.", priority: "Medium", riskLevel: "Low", consequence: "Capacity loss.", proof: "Breakdown Log", cadence: "daily" }
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
                { id: "H-AMB-01", technicalProtocol: "Ambulance ACLS Inventory", floorAction: "Check Oxygen and Cardiac drugs in all active units.", priority: "High", riskLevel: "High", consequence: "En-route resuscitation failure.", proof: "Kit Seal", verificationRequired: true, cadence: "daily" },
                { id: "H-AMB-02", technicalProtocol: "Driver Sobriety Pulse", floorAction: "Execute random breathalyzer test pre-dispatch.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash liability.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "H-AMB-03", technicalProtocol: "Oxygen Manifold Pressure", floorAction: "Confirm 4.2 bar output to ambulance supply points.", priority: "High", riskLevel: "High", consequence: "Supply failure during transit.", proof: "Gauge Log", verificationRequired: true, cadence: "daily" },
                { id: "H-AMB-04", technicalProtocol: "GPS Signal Validation", floorAction: "Verify live tracking for 100% of fleet.", priority: "Medium", riskLevel: "Low", consequence: "Inability to direct team.", proof: "System Screen", cadence: "daily" },
                { id: "H-AMB-05", technicalProtocol: "Ambulance Hygiene", floorAction: "Sanitize patient bay with 1% hypochlorite post-transfer.", priority: "High", riskLevel: "Medium", consequence: "Infection transmission.", proof: "Cleaning Sheet", cadence: "incident-based" },
                { id: "H-AMB-06", technicalProtocol: "Tyre & Fluid Pulse", floorAction: "Check oil and tread on all ALS/BLS vehicles.", priority: "Medium", riskLevel: "Medium", consequence: "Breakdown during transfer.", proof: "Visual Check", cadence: "daily" },
                { id: "H-AMB-07", technicalProtocol: "Siren/PA Functionality", floorAction: "Test emergency warning systems.", priority: "Low", riskLevel: "Low", consequence: "Traffic delays.", proof: "Test Note", cadence: "daily" },
                { id: "H-AMB-08", technicalProtocol: "Response TAT Monitor", floorAction: "Target 'Ready to Dispatch' < 3 mins from call.", priority: "High", riskLevel: "Low", consequence: "Lost 'Golden Hour' opportunity.", proof: "TAT Log", cadence: "daily" },
                { id: "H-AMB-09", technicalProtocol: "Radio Comms Link", floorAction: "Test dial-tone to ER trauma desk.", priority: "High", riskLevel: "High", consequence: "Zero hospital notification.", proof: "Signal Test", verificationRequired: true, cadence: "daily" },
                { id: "H-AMB-10", technicalProtocol: "Fleet Fuel Reserve", floorAction: "Maintain min 50% tank at 100% of times.", priority: "Medium", riskLevel: "Low", consequence: "Fuel-out emergency.", proof: "Gauge Log", cadence: "daily" }
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
                { id: "H-HKP-01", technicalProtocol: "Sharps Container Audit", floorAction: "Verify 100% of boxes are < 75% full and sealed.", priority: "High", riskLevel: "High", consequence: "Needle-stick injuries to staff.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "H-HKP-02", technicalProtocol: "Restroom Hygiene Pulse", floorAction: "Audit 30-min cleaning frequency in OPD areas.", priority: "High", riskLevel: "Low", consequence: "Primary guest rage driver.", proof: "Hourly Sheet", cadence: "hourly" },
                { id: "H-HKP-03", technicalProtocol: "Consumable Stock Audit", floorAction: "Check par levels for handwash and tissue in Wards.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene breakdown.", proof: "Stock Check", cadence: "daily" },
                { id: "H-HKP-04", technicalProtocol: "Bio-Hazard Spillage Kit", floorAction: "Confirm 5 complete spill-kits are available in ICU/ER.", priority: "High", riskLevel: "High", consequence: "Pathogen exposure risk.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "H-HKP-05", technicalProtocol: "Floor Shine/Safety", floorAction: "Inspect for slick spots or wet zones without signage.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Patrol Log", verificationRequired: true, cadence: "daily" },
                { id: "H-HKP-06", technicalProtocol: "Dust Clearance Audit", floorAction: "Check horizontal surfaces in OT corridors.", priority: "Low", riskLevel: "Medium", consequence: "Airborne bacterial load.", proof: "Visual Check", cadence: "daily" },
                { id: "H-HKP-07", technicalProtocol: "Trash Compaction Log", floorAction: "Verify 100% clearance of lobby bins every 2 hours.", priority: "Low", riskLevel: "Low", consequence: "Odor and aesthetic drop.", proof: "Log Entry", cadence: "hourly" },
                { id: "H-HKP-08", technicalProtocol: "Housekeeping Training", floorAction: "Brief staff on 'Red Bag' vs 'Yellow Bag' disposal rules.", priority: "High", riskLevel: "High", consequence: "Mass regulatory penalty.", proof: "Briefing Log", cadence: "daily" },
                { id: "H-HKP-09", technicalProtocol: "Janitor Closet Safety", floorAction: "Confirm locks on chemical cabinets.", priority: "High", riskLevel: "Medium", consequence: "Accidental poisoning.", proof: "Visual Check", cadence: "daily" },
                { id: "H-HKP-10", technicalProtocol: "EOD Ward Reset", floorAction: "Final deep-mop of patient lobbies post visiting-hours.", priority: "Low", riskLevel: "Low", consequence: "Persistent hospital odors.", proof: "Signed Sheet", cadence: "daily" }
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
                { id: "H-MRO-01", technicalProtocol: "Consent Form Archival", floorAction: "Verify 100% original signatures on yesterday's OT consents.", priority: "High", riskLevel: "Medium", consequence: "Legal defense collapse.", proof: "File Audit", verificationRequired: true, cadence: "daily" },
                { id: "H-MRO-02", technicalProtocol: "HIS Data Backup", floorAction: "Confirm successful completion of overnight server sync.", priority: "High", riskLevel: "High", consequence: "Total loss of institutional memory.", proof: "System Screen", verificationRequired: true, cadence: "daily" },
                { id: "H-MRO-03", technicalProtocol: "Discharge Record Sync", floorAction: "Ensure 100% summary match with HIS database.", priority: "Medium", riskLevel: "Low", consequence: "Inaccurate patient history.", proof: "Sample Check", cadence: "daily" },
                { id: "H-MRO-04", technicalProtocol: "MRO Vault Security", floorAction: "Witness lock/unlock of physical file archives.", priority: "High", riskLevel: "High", consequence: "Privacy theft / Data exfiltration.", proof: "Entry Log", cadence: "daily" },
                { id: "H-MRO-05", technicalProtocol: "Clinical Audit Prep", floorAction: "Retrieve 10 random charts for HOD review.", priority: "Low", riskLevel: "Low", consequence: "Gaps in peer review.", proof: "Audit Sample", cadence: "weekly" },
                { id: "H-MRO-06", technicalProtocol: "Medico-Legal Tracking", floorAction: "Update status of 100% pending MLC subpoena requests.", priority: "High", riskLevel: "High", consequence: "Contempt of court.", proof: "Registry Note", verificationRequired: true, cadence: "daily" },
                { id: "H-MRO-07", technicalProtocol: "ICD-10 Code Audit", floorAction: "Verify 10 random summaries for correct diagnostic coding.", priority: "Medium", riskLevel: "Low", consequence: "Insurance rejection.", proof: "Audit Report", cadence: "weekly" },
                { id: "H-MRO-08", technicalProtocol: "Document Disposal Seal", floorAction: "Verify cross-shredding of 100% of discarded PII.", priority: "High", riskLevel: "High", consequence: "Privacy fine.", proof: "Visual Confirm", verificationRequired: true, cadence: "daily" }
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
                { id: "H-DIE-01", technicalProtocol: "Special Diet Verify", floorAction: "Match Diabetic/Renal trays against doctor orders.", priority: "High", riskLevel: "Medium", consequence: "Patient glycemic shock.", proof: "Tray Audit", verificationRequired: true, cadence: "daily" },
                { id: "H-DIE-02", technicalProtocol: "Kitchen Thermal Log", floorAction: "Verify holding temps for bulk ward meals (Target > 63°C).", priority: "High", riskLevel: "High", consequence: "Mass food poisoning in vulnerable IPs.", proof: "Temp Log", verificationRequired: true, cadence: "daily" },
                { id: "H-DIE-03", technicalProtocol: "Enteral Feed Prep", floorAction: "Verify sterility of Ryles-tube feed preparation zone.", priority: "High", riskLevel: "High", consequence: "Fatal gastro-sepsis.", proof: "Visual Audit", cadence: "daily" },
                { id: "H-DIE-04", technicalProtocol: "Dietitian Ward Round", floorAction: "Physically counsel 10 new admissions on meal plans.", priority: "Medium", riskLevel: "Low", consequence: "Inadequate nutritional intake.", proof: "Counseling Log", cadence: "daily" },
                { id: "H-DIE-05", technicalProtocol: "Plate Waste Weight", floorAction: "Log KG of discarded ward food to identify yield issues.", priority: "Low", riskLevel: "Low", consequence: "Inefficient procurement.", proof: "Weight Slip", cadence: "daily" },
                { id: "H-DIE-06", technicalProtocol: "FSSAI Display Board", floorAction: "Confirm food-safety license visibility in cafeteria.", priority: "Low", riskLevel: "Medium", consequence: "Regulatory fine.", proof: "Photo", cadence: "daily" },
                { id: "H-DIE-07", technicalProtocol: "Water Purity for Cooking", floorAction: "Log TDS at main kitchen RO point.", priority: "Medium", riskLevel: "High", consequence: "Water-borne outbreak.", proof: "TDS Reading", cadence: "daily" },
                { id: "H-DIE-08", technicalProtocol: "Staff Health Vetting", floorAction: "Verify zero open wounds for cafeteria servers.", priority: "High", riskLevel: "High", consequence: "Pathogen transmission.", proof: "Daily Audit", verificationRequired: true, cadence: "daily" }
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
                { id: "H-BLD-01", technicalProtocol: "Fridge Temp Log (24/7)", floorAction: "Verify alarm connectivity and log temp (Target 2-6°C).", priority: "High", riskLevel: "High", consequence: "Blood hemolysis and loss of life-saving stock.", proof: "System Log", verificationRequired: true, cadence: "daily" },
                { id: "H-BLD-02", technicalProtocol: "Cross-match ID Vetting", floorAction: "Verify 2-nurse match of donor bag ID vs patient MRN.", priority: "High", riskLevel: "High", consequence: "Fatal transfusion reaction.", proof: "Dual-Sign Log", verificationRequired: true, cadence: "incident-based" },
                { id: "H-BLD-03", technicalProtocol: "Component Expiry Scan", floorAction: "Identify and remove FFP/Platelets with < 24h life.", priority: "High", riskLevel: "Medium", consequence: "Transfusing ineffective components.", proof: "Expiry Sheet", cadence: "daily" },
                { id: "H-BLD-04", technicalProtocol: "Serology Screening Audit", floorAction: "Verify 100% negative HIV/HCV results pre-release.", priority: "High", riskLevel: "High", consequence: "Institutional disease transmission (Fatal).", proof: "Screening Registry", verificationRequired: true, cadence: "daily" },
                { id: "H-BLD-05", technicalProtocol: "Emergency Blood O-Neg", floorAction: "Verify availability of 2 unreserved units in Red Zone.", priority: "High", riskLevel: "High", consequence: "Fatal delay in exsanguination trauma.", proof: "Visual Count", cadence: "daily" },
                { id: "H-BLD-06", technicalProtocol: "Haemovigilance Report", floorAction: "Document 100% of allergic/fever reactions in transfusion.", priority: "Medium", riskLevel: "Medium", consequence: "Undetected donor-pool risk.", proof: "Reaction Log", cadence: "incident-based" },
                { id: "H-BLD-07", technicalProtocol: "Centrifuge Calib", floorAction: "Review vendor certificates for annual speed audit.", priority: "Low", riskLevel: "Low", consequence: "Poor component separation.", proof: "AMC folder", cadence: "monthly" },
                { id: "H-BLD-08", technicalProtocol: "Donor ID Capture", floorAction: "Audit 100% of donor forms for valid Govt ID match.", priority: "High", riskLevel: "High", consequence: "Illegal donor ring exposure.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "H-BLD-09", technicalProtocol: "Power Backup Test", floorAction: "Verify blood-fridge switch to DG < 30s.", priority: "High", riskLevel: "High", consequence: "Total stock loss during blackout.", proof: "Test Note", verificationRequired: true, cadence: "weekly" },
                { id: "H-BLD-10", technicalProtocol: "EOD Inventory Summary", floorAction: "Final count of whole blood vs units issued.", priority: "Medium", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Summary", cadence: "daily" }
            ]
        },
        {
            title: "Emergency Triage Coordination",
            department: "Emergency",
            frequency: "Daily",
            role: "Emergency Triage Coordinator",
            summary: "Governs the patient pipeline and entry waves.",
            icon: "users",
            tasks: [
                { id: "H-ETC-01", technicalProtocol: "Triage Tagging Flow", floorAction: "Audit 20 random cases for Red/Yellow categorization speed.", priority: "High", riskLevel: "Medium", consequence: "ER gridlock.", proof: "TAT Log", cadence: "daily" },
                { id: "H-ETC-02", technicalProtocol: "Ambulance Routing Signal", floorAction: "Notify dispatch to divert arrivals if ER occupancy > 90%.", priority: "High", riskLevel: "High", consequence: "Critical care refusal risk.", proof: "Comms Log", verificationRequired: true, cadence: "hourly" },
                { id: "H-ETC-03", technicalProtocol: "Wheelchair Par-levels", floorAction: "Verify 10 units at dock; check tyre inflation.", priority: "Medium", riskLevel: "Low", consequence: "Delayed trauma entry.", proof: "Visual Count", cadence: "daily" },
                { id: "H-ETC-04", technicalProtocol: "Stat Lab Link", floorAction: "Execute 10-min pulse for ER sample results.", priority: "Medium", riskLevel: "Low", consequence: "Diagnosis bottleneck.", proof: "System Screen", cadence: "hourly" },
                { id: "H-ETC-05", technicalProtocol: "Triage Bed Hygiene", floorAction: "Verify linen change post every 'Red' case.", priority: "High", riskLevel: "Medium", consequence: "Cross-patient infection.", proof: "Cleaning Chart", cadence: "incident-based" },
                { id: "H-ETC-06", technicalProtocol: "Staff Surge Deployment", floorAction: "Request extra nursing if wait-time > 20 mins for 'Green'.", priority: "Medium", riskLevel: "Low", consequence: "Patient frustration/violence.", proof: "Roster Note", cadence: "hourly" },
                { id: "H-ETC-07", technicalProtocol: "Medical Tag Seriality", floorAction: "Confirm stock of 200 triage bands (Color Coded).", priority: "Low", riskLevel: "Low", consequence: "Loss of case tracking.", proof: "Stock Sheet", cadence: "daily" },
                { id: "H-ETC-08", technicalProtocol: "Escalator Load Guard", floorAction: "Verify functioning of trauma elevator to OT.", priority: "High", riskLevel: "High", consequence: "Delayed surgery (Fatal).", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "H-ETC-09", technicalProtocol: "Stat EMR Entry", floorAction: "Verify demographic capture for 100% of walk-ins.", priority: "Medium", riskLevel: "Low", consequence: "Lost patient follow-up.", proof: "System Dashboard", cadence: "daily" },
                { id: "H-ETC-10", technicalProtocol: "EOD Triage Summary", floorAction: "Final stats for total trauma footfall vs admissions.", priority: "Low", riskLevel: "Low", consequence: "Zero capacity intel.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Hospital Security & Patient Safety",
            department: "Security",
            frequency: "Daily",
            role: "Security & Patient Safety Officer",
            summary: "Hardens the perimeter and protects vulnerable patients.",
            icon: "shield-check",
            tasks: [
                { id: "H-SEC-01", technicalProtocol: "Drug-Store CCTV Sync", floorAction: "Verify 30-day recording backup for Pharmacy vault.", priority: "High", riskLevel: "High", consequence: "Untraceable internal drug theft.", proof: "System Screen", verificationRequired: true, cadence: "daily" },
                { id: "H-SEC-02", technicalProtocol: "Infant Abduction Drill", floorAction: "Test alarm and gate-lock triggers in NICU.", priority: "High", riskLevel: "High", consequence: "Child abduction (Never-event).", proof: "Test Log", verificationRequired: true, cadence: "weekly" },
                { id: "H-SEC-03", technicalProtocol: "Guard Sobriety Challenge", floorAction: "Random breathalyzer for 2 AM rotation.", priority: "High", riskLevel: "High", consequence: "Vulnerable night perimeter.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "H-SEC-04", technicalProtocol: "Visitor ID Audit", floorAction: "Verify 100% ID capture at Main Gate.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "H-SEC-05", technicalProtocol: "Panic Button Pulse", floorAction: "Test silent alarms in ER and Billing.", priority: "High", riskLevel: "High", consequence: "Zero response during violence.", proof: "Signal Test", verificationRequired: true, cadence: "daily" },
                { id: "H-SEC-06", technicalProtocol: "Fire-Exit Perimeter", floorAction: "Verify 100% of egress paths are clear of vehicles.", priority: "High", riskLevel: "High", consequence: "Blocked fire engine access.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "H-SEC-07", technicalProtocol: "Staff Badge Spot-check", floorAction: "Audit 5 vendors for active vetting badges.", priority: "Medium", riskLevel: "Low", consequence: "Unvetted persons in clinical zones.", proof: "Visual Check", cadence: "daily" },
                { id: "H-SEC-08", technicalProtocol: "Oxygen Manifold Guard", floorAction: "Confirm 24/7 guard presence at main cylinder bank.", priority: "High", riskLevel: "High", consequence: "Sabotage / Oxygen failure (Fatal).", proof: "Patrol Log", verificationRequired: true, cadence: "daily" },
                { id: "H-SEC-09", technicalProtocol: "Parking Density Pulse", floorAction: "Clear ambulance lane of 100% idle private vehicles.", priority: "High", riskLevel: "Medium", consequence: "Delayed patient entry.", proof: "Visual Check", cadence: "hourly" },
                { id: "H-SEC-10", technicalProtocol: "EOD Safety Walk", floorAction: "Final facility lock-down sign-off.", priority: "Medium", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Sheet", cadence: "daily" }
            ]
        }
    ]
};
