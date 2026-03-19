
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the technical safeguard for zero-risk clinical operations and NABH/JCI compliance.",
    heroHeadline: "Prevent Patient Safety Incidents and Fatal Audit Failures",
    heroSubheadline: "Track 150+ clinical and operational control points across OPD, Surgery, Wards, Pharmacy, Billing, and Air Ambulance Logistics.",
    pricingUrgency: "In healthcare, a single protocol failure isn't just expensive—it's catastrophic. This system is your institutional safeguard.",
    consultingAnchor: 15000,
    icon: "hospital",
    badgeText: "Safety Critical",
    badgeVariant: "destructive",
    bestseller: false,
    whoIsItFor: ["Hospital COOs", "Medical Directors", "Quality Assurance Heads", "Nursing Superintendents", "Accreditation Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Clinical Pulse</strong>: OPD and Ward teams update status in seconds. 100% auditable workflow.", icon: "timer" },
        { text: "<strong>Surgical Safety Command</strong>: WHO-aligned protocols for pre-incision 'Time Outs' to eliminate wrong-site surgery.", icon: "shield-check" },
        { text: "<strong>Discharge & Billing Shield</strong>: Daily audits for TPA pre-auths and discharge summaries to stop revenue leakage.", icon: "banknote" },
        { text: "<strong>OPD & Diagnostic Command</strong>: Monitor queue TAT, doctor arrival parity, and diagnostic report accuracy daily.", icon: "stethoscope" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show Quality Leads exactly what needs sign-off—from sterilization to narcotics.", icon: "target" },
        { text: "<strong>Air Ambulance Logistics</strong>: Readiness logs for landing zone safety, specialized medical oxygen, and crew-sync protocols.", icon: "plane" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your clinical data and the control system forever.", icon: "lock" }
    ],
    globalStandards: {
        title: "NABH, JCI & WHO ALIGNED",
        standards: [
            { name: "NABH", description: "National Accreditation Board for Hospitals & Healthcare Providers standards." },
            { name: "JCI", description: "Joint Commission International standards for medication safety." },
            { name: "WHO", description: "World Health Organization guidelines for surgical safety." },
            { name: "ISO 9001", description: "International standard for healthcare quality management." }
        ]
    },
    checklists: [
        {
            title: "Clinical Safety & WHO Protocol",
            department: "Clinical",
            frequency: "Daily/Per Procedure",
            role: "Medical Director",
            summary: "Critical governance to prevent 'Never Events' and sentinel errors.",
            icon: "shield-check",
            tasks: [
                { id: "H-CS-01", description: "Verify patient identity using 2 identifiers before any procedure or medication.", priority: "High", riskLevel: "High", consequence: "Treatment of wrong patient; fatal medical error.", proof: "ID Audit Log", trainerNotes: "Name + MRN Number." },
                { id: "H-CS-02", description: "Execute WHO Surgical Safety 'Time Out' before every incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery and total institutional liability.", proof: "Checklist Sign-off", trainerNotes: "Nurse must stop the room for this." },
                { id: "H-CS-03", description: "Independent double-check for all high-alert medication administration.", priority: "High", riskLevel: "High", consequence: "Fatal overdose or incorrect drug delivery.", proof: "Dual-Verification Log", trainerNotes: "Check Insulin, Heparin, and KCL." },
                { id: "H-CS-04", description: "Audit allergy verification markers at bedside and in medical records.", priority: "High", riskLevel: "High", consequence: "Anaphylactic shock and unrecoverable patient harm.", proof: "Bedside Audit", trainerNotes: "Check for RED wristbands." },
                { id: "H-CS-05", description: "Sentinel event reporting pulse: verify all near-misses are logged.", priority: "High", riskLevel: "Medium", consequence: "Undetected systemic risks leading to future catastrophes.", proof: "Incident Log", trainerNotes: "Encourage a no-blame culture." }
            ]
        },
        {
            title: "OPD & Diagnostic Command",
            department: "OPD",
            frequency: "Daily",
            role: "OPD Manager",
            summary: "Governs the patient pipeline and diagnostic accuracy.",
            icon: "stethoscope",
            tasks: [
                { id: "H-OPD-01", description: "Verify doctor arrival time parity against scheduled OPD slots.", priority: "High", riskLevel: "Low", consequence: "Patient frustration and increased queue TAT.", proof: "Attendance Log", trainerNotes: "Flag delays > 15 mins." },
                { id: "H-OPD-02", description: "Audit diagnostic report TAT: Check if reports are delivered within promised hours.", priority: "High", riskLevel: "Medium", consequence: "Delayed diagnosis and clinical risk.", proof: "TAT Dashboard", trainerNotes: "Check stat-reports daily." },
                { id: "H-OPD-03", description: "Verify calibration of OPD vitals equipment (BP, Weight, Pulse-Ox).", priority: "Medium", riskLevel: "Medium", consequence: "Incorrect clinical readings leading to wrong treatment.", proof: "Calibration Sticker", trainerNotes: "Report drift in BP monitors." },
                { id: "H-OPD-04", description: "Inspect OPD consultation rooms for hygiene and stock (gloves, sheets).", priority: "Medium", riskLevel: "Low", consequence: "Infection risk and poor brand perception.", proof: "Visual Check", trainerNotes: "Change table-sheets after every patient." },
                { id: "H-OPD-05", description: "Check availability of patient info materials: health plans, maps.", priority: "Low", riskLevel: "Low", consequence: "Patient confusion.", proof: "Stock Check", trainerNotes: "Keep in the reception carousel." }
            ]
        },
        {
            title: "Discharge & Billing Shield",
            department: "Billing",
            frequency: "Daily",
            role: "Billing Manager",
            summary: "Protects hospital revenue and ensures smooth patient exits.",
            icon: "banknote",
            tasks: [
                { id: "H-DIS-01", description: "Pre-Discharge Audit: Verify all diagnostic tests and medicines are billed.", priority: "High", riskLevel: "High", consequence: "Silent profit leakage through unbilled consumables.", proof: "Reconciliation Sheet", trainerNotes: "Audit 5 random discharge files." },
                { id: "H-DIS-02", description: "Insurance/TPA Clearance: Confirm pre-auth or final approval status.", priority: "High", riskLevel: "High", consequence: "Unrecoverable financial loss and payment defaults.", proof: "System Approval", trainerNotes: "Get approval 4 hours pre-discharge." },
                { id: "H-DIS-03", description: "Bedside Medication Handover: Verify patient understands post-discharge meds.", priority: "High", riskLevel: "Medium", consequence: "Readmission due to incorrect medication usage at home.", proof: "Handover Note", trainerNotes: "Use 'Teach-Back' method." },
                { id: "H-DIS-04", description: "Discharge Summary Verification: Ensure doctor sign-off and clarity.", priority: "High", riskLevel: "High", consequence: "Legal liability and clinical confusion during follow-up.", proof: "Signed Summary", trainerNotes: "Check for clear ICD-10 codes." },
                { id: "H-DIS-05", description: "Exit Feedback Pulse: Verbal or digital feedback from every departing patient.", priority: "Medium", riskLevel: "Low", consequence: "Negative reviews and missed recovery.", proof: "Feedback Log", trainerNotes: "Ask: 'Were you satisfied with nursing?'" }
            ]
        },
        {
            title: "Air Ambulance & Emergency Logistics",
            department: "Emergency",
            frequency: "Per Dispatch",
            role: "Logistics Head",
            summary: "Governs high-risk air and ground patient transfers.",
            icon: "plane",
            tasks: [
                { id: "H-AIR-01", description: "Landing Zone (LZ) Safety Audit: Clear debris and check perimeter security.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash or rotor-blade accident.", proof: "Visual Sign-off", trainerNotes: "LZ must be clear of all loose items." },
                { id: "H-AIR-02", description: "Flight Medical Kit: Verify ventilator, AED, and specialized O2 full status.", priority: "High", riskLevel: "High", consequence: "Patient death during transport due to equipment failure.", proof: "Seal Verification", trainerNotes: "Maintain dual medical oxygen tanks." },
                { id: "H-AIR-03", description: "Crew Sync Briefing: Pilot, Medic, and Receiving Unit coordination.", priority: "High", riskLevel: "High", consequence: "Delayed clinical handover during the golden hour.", proof: "Briefing Log", trainerNotes: "Use standardized SBAR format." },
                { id: "H-AIR-04", description: "In-flight Communication Test: Verify link between transport and ICU.", priority: "High", riskLevel: "Medium", consequence: "Inability to relay critical clinical changes.", proof: "Comm Test", trainerNotes: "Check satellite phone signal." },
                { id: "H-AIR-05", description: "Hazardous Weather Monitoring: Log official aviation clearance.", priority: "High", riskLevel: "High", consequence: "Flight disaster risk.", proof: "Weather Report", trainerNotes: "Check METAR/TAF every 30 mins." }
            ]
        },
        {
            title: "Nursing & Ward Management",
            department: "Nursing",
            frequency: "Daily",
            role: "Nursing Superintendent",
            summary: "Command for ward discipline and patient care standards.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-NW-01", description: "Bedside Handover Audit: Verify verbal and written transition between shifts.", priority: "High", riskLevel: "High", consequence: "Loss of critical clinical information; patient decline.", proof: "Handover Log", trainerNotes: "Check the IV site during handover." },
                { id: "H-NW-02", description: "Crash Cart Integrity: Verify all emergency drugs are present and in-date.", priority: "High", riskLevel: "High", consequence: "Failed resuscitation during cardiac arrest (Code Blue).", proof: "Seal Verification", trainerNotes: "Check AED battery daily." },
                { id: "H-NW-03", description: "Monitor patient call-bell Turnaround Time (TAT) targets.", priority: "Medium", riskLevel: "Low", consequence: "Patient falls and negative experience scores.", proof: "System Report", trainerNotes: "Target < 2 mins response." },
                { id: "H-NW-04", description: "Verify vitals monitoring frequency matches doctor's orders.", priority: "High", riskLevel: "Medium", consequence: "Missed clinical deterioration.", proof: "Vitals Sheet Audit", trainerNotes: "Check if charting is real-time." },
                { id: "H-NW-05", description: "Enforce visiting hours policy and clear corridors of unauthorized persons.", priority: "High", riskLevel: "Low", consequence: "Increased infection risk and patient rest disruption.", proof: "Patrol Log", trainerNotes: "Check for security guards at ward entrance." }
            ]
        },
        {
            title: "Canteen & Dietary Governance",
            department: "F&B",
            frequency: "Daily",
            role: "Dietician / F&B Manager",
            summary: "Zero-fail dietary compliance for patients.",
            icon: "utensils",
            tasks: [
                { id: "H-FB-01", description: "Diet Compliance Audit: Match patient meals to doctor's dietary orders.", priority: "High", riskLevel: "High", consequence: "Fatal complications (e.g., giving sugar to severe diabetic).", proof: "Meal Tray Audit", trainerNotes: "Label every tray with patient name/bed." },
                { id: "H-FB-02", description: "Kitchen Temp Log: Verify all chillers and hot-holding units.", priority: "High", riskLevel: "High", consequence: "Food poisoning outbreak in hospital.", proof: "Digital Log", trainerNotes: "Maintain hot-holding > 63°C." },
                { id: "H-FB-03", description: "Verify sanitization of patient utensils (temp/ppm check).", priority: "High", riskLevel: "Medium", consequence: "Infection transmission via food service.", proof: "Test Strip", trainerNotes: "Final rinse must be > 82°C." },
                { id: "H-FB-04", description: "Audit staff hygiene: health check, masks, and gloves.", priority: "High", riskLevel: "High", consequence: "Contamination of patient food.", proof: "Daily Log", trainerNotes: "Hairnets must be clean." }
            ]
        },
        {
            title: "Facility & Engineering Safety",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Protects the infrastructure supporting life-saving equipment.",
            icon: "wrench",
            tasks: [
                { id: "H-FS-01", description: "Central Medical Gas Check: Log pressure for Oxygen and N2O.", priority: "High", riskLevel: "High", consequence: "Catastrophic failure of life-support systems.", proof: "Pressure Gauge Log", trainerNotes: "Maintain min 24h backup reserve." },
                { id: "H-FS-02", description: "Generator (DG) Load Test: Verify automatic switch-over in <10 seconds.", priority: "High", riskLevel: "High", consequence: "Fatal outage in ICU/Operation Theater.", proof: "Test Report", trainerNotes: "Test AMF panel weekly." },
                { id: "H-FS-03", description: "Equipment Calibration Audit: Verify next due date for Ventilators/MRI.", priority: "High", riskLevel: "High", consequence: "Faulty readings and clinical failure.", proof: "Calibration File", trainerNotes: "NABL certified labs only." },
                { id: "H-FS-04", description: "Verify UPS backup health for all ventilators and monitors.", priority: "High", riskLevel: "High", consequence: "Equipment failure during power flicker.", proof: "UPS Dashboard", trainerNotes: "Check battery voltage weekly." }
            ]
        },
        {
            title: "Biomedical Waste & Housekeeping",
            department: "Housekeeping",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Ensures biosecurity and regulatory waste compliance.",
            icon: "recycle",
            tasks: [
                { id: "H-BW-01", description: "Color-Coded Segregation Audit: Verify no sharps in yellow bags.", priority: "High", riskLevel: "High", consequence: "Injury to handlers and environmental fines.", proof: "Random Audit", trainerNotes: "Sharps go only in puncture-proof white bins." },
                { id: "H-BW-02", description: "Verify spillage kits (Blood/Chemical) are stocked and accessible.", priority: "High", riskLevel: "Medium", consequence: "Spread of infectious pathogens after an accident.", proof: "Inventory Check", trainerNotes: "Check absorbent powder stock." },
                { id: "H-BW-03", description: "Audit Hand-Hygiene compliance at entrance of ICU/Isolation.", priority: "High", riskLevel: "High", consequence: "Mass Hospital-Acquired Infection (HAI) outbreak.", proof: "Observational Log", trainerNotes: "Use WHO 5-moments rule." }
            ]
        },
        {
            title: "Security & Parking",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Command for the hospital perimeter and asset protection.",
            icon: "shield",
            tasks: [
                { id: "H-SE-01", description: "CCTV Blind-spot Audit: Verify coverage of high-risk medication stores.", priority: "High", riskLevel: "High", consequence: "Untraceable theft of narcotics.", proof: "Monitor Check", trainerNotes: "Test IR mode for night vision." },
                { id: "H-SE-02", description: "Visitor Badge Enforcement: Audit entry/exit points.", priority: "Medium", riskLevel: "Low", consequence: "Unauthorized access to sensitive wards.", proof: "Visual Check", trainerNotes: "Strict 1-visitor-per-patient rule." },
                { id: "H-SE-03", description: "Parking Zone Audit: Check for illumination and hazard-free entry.", priority: "Medium", riskLevel: "Low", consequence: "Guest injury and insurance liability.", proof: "Walkthrough", trainerNotes: "Clear ambulance lane first." }
            ]
        },
        {
            title: "Supply, Vendor & Inventory",
            department: "Purchasing",
            frequency: "Weekly",
            role: "Purchasing Manager",
            summary: "Governance for clinical supply chains and AMCs.",
            icon: "truck",
            tasks: [
                { id: "H-SU-01", description: "Vendor Receiving Audit: Check cold-chain monitor tags on incoming biologics.", priority: "High", riskLevel: "High", consequence: "Accepting compromised/ineffective vaccines/implants.", proof: "Receiving Note", trainerNotes: "Check VVM indicators immediately." },
                { id: "H-SU-02", description: "AMC Audit: Verify service status for 3 major medical devices.", priority: "High", riskLevel: "High", consequence: "Contract lapse leading to unfixable equipment failure.", proof: "AMC Dashboard", trainerNotes: "Schedule service 15 days early." },
                { id: "H-SU-03", description: "Blind Stock Count: Random audit of high-value implants/meds.", priority: "High", riskLevel: "High", consequence: "Internal theft and profit erosion.", proof: "Stock Sheet", trainerNotes: "Audit Pharmacy & CSSD stores." }
            ]
        }
    ]
};
