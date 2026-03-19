
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the technical safeguard for zero-risk clinical operations and NABH/JCI compliance.",
    heroHeadline: "Prevent Patient Safety Incidents and Fatal Audit Failures",
    heroSubheadline: "Track 100+ clinical control points across Wards, Surgery, Pharmacy, Labs, and Facility Management—without chasing your medical staff.",
    pricingUrgency: "In healthcare, a single protocol failure isn't just expensive—it's catastrophic. This system is your institutional safeguard.",
    consultingAnchor: 15000,
    icon: "hospital",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "destructive",
    bestseller: true,
    whoIsItFor: ["Hospital COOs", "Medical Directors", "Quality Assurance Heads", "Nursing Superintendents", "Accreditation Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Clinical Pulse</strong>: Nursing and OPD teams update status in seconds. 100% auditable workflow.", icon: "timer" },
        { text: "<strong>Surgical Safety Command</strong>: WHO-aligned protocols for pre-incision 'Time Outs' to eliminate wrong-site surgery.", icon: "shield-check" },
        { text: "<strong>Medication Integrity Engine</strong>: Dual-verification logs for high-alert drugs and cold-chain vaccine tracking.", icon: "pill" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show Quality Leads exactly what needs sign-off—from sterilization to medical gas.", icon: "target" },
        { text: "<strong>Sterilization Chain-of-Custody</strong>: Instrument lifecycle tracking from CSSD to the OR to prevent post-op infections.", icon: "scissors" },
        { text: "<strong>Institutional Memory</strong>: Capture expert clinical knowledge so new residents and nurses are audit-ready from Day 1.", icon: "history" },
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
                { id: "H-CS-01", description: "Verify patient identity using 2 identifiers before any procedure or medication.", priority: "High", riskLevel: "High", consequence: "Treatment of wrong patient; fatal medical error.", proof: "ID Audit Log" },
                { id: "H-CS-02", description: "Execute WHO Surgical Safety 'Time Out' before every incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery and total institutional liability.", proof: "Checklist Sign-off" },
                { id: "H-CS-03", description: "Independent double-check for all high-alert medication administration.", priority: "High", riskLevel: "High", consequence: "Fatal overdose or incorrect drug delivery.", proof: "Dual-Verification Log" },
                { id: "H-CS-04", description: "Audit allergy verification markers at bedside and in medical records.", priority: "High", riskLevel: "High", consequence: "Anaphylactic shock and unrecoverable patient harm.", proof: "Bedside Audit" },
                { id: "H-CS-05", description: "Sentinel event reporting pulse: verify all near-misses are logged.", priority: "High", riskLevel: "Medium", consequence: "Undetected systemic risks leading to future catastrophes.", proof: "Incident Log" }
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
                { id: "H-NW-01", description: "Bedside Handover Audit: Verify verbal and written transition between shifts.", priority: "High", riskLevel: "High", consequence: "Loss of critical clinical information; patient decline.", proof: "Handover Log" },
                { id: "H-NW-02", description: "Crash Cart Integrity: Verify all emergency drugs are present and in-date.", priority: "High", riskLevel: "High", consequence: "Failed resuscitation during cardiac arrest (Code Blue).", proof: "Seal Verification" },
                { id: "H-NW-03", description: "Monitor patient call-bell Turnaround Time (TAT) targets.", priority: "Medium", riskLevel: "Low", consequence: "Patient falls and negative experience scores.", proof: "System Report" },
                { id: "H-NW-04", description: "Verify vitals monitoring frequency matches doctor's orders.", priority: "High", riskLevel: "Medium", consequence: "Missed clinical deterioration.", proof: "Vitals Sheet Audit" },
                { id: "H-NW-05", description: "Audit nursing station grooming and silence standards.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional environment; patient sleep disruption.", proof: "Visual Check" },
                { id: "H-NW-06", description: "Check availability of essential consumables (Gloves, Swabs, IV sets).", priority: "Medium", riskLevel: "Low", consequence: "Treatment delays.", proof: "Stock Sheet" },
                { id: "H-NW-07", description: "Bed-sore Prevention Audit: Verify position-change logs for high-risk patients.", priority: "High", riskLevel: "Medium", consequence: "Pressure ulcers and prolonged hospitalization.", proof: "Position Log" },
                { id: "H-NW-08", description: "Verify IV site hygiene and date of insertion.", priority: "High", riskLevel: "Medium", consequence: "Hospital-acquired infections (Sepsis/Phlebitis).", proof: "Clinical Audit" },
                { id: "H-NW-09", description: "Check patient food temperature and diet compliance.", priority: "Medium", riskLevel: "Low", consequence: "Malnutrition or dietary conflict.", proof: "Diet Log" },
                { id: "H-NW-10", description: "Inspect ward cleanliness and scent every 4 hours.", priority: "Medium", riskLevel: "Low", consequence: "Negative perception of clinical hygiene.", proof: "Cleaning Log" }
            ]
        },
        {
            title: "CSSD & Sterilization Chain",
            department: "CSSD",
            frequency: "Daily",
            role: "CSSD Manager",
            summary: "Ensures the biological safety of every surgical instrument.",
            icon: "sparkles",
            tasks: [
                { id: "H-ST-01", description: "Autoclave biological indicator test: Log results for each main cycle.", priority: "High", riskLevel: "High", consequence: "Mass infection risk due to failed sterilization.", proof: "Biological Report" },
                { id: "H-ST-02", description: "Verify sterile pack expiry dates using FEFO (First-Expiry, First-Out).", priority: "High", riskLevel: "High", consequence: "Use of compromised/non-sterile equipment.", proof: "Expiry Audit" },
                { id: "H-ST-03", description: "Inspect instrument sets for integrity and completeness pre-sealing.", priority: "Medium", riskLevel: "Low", consequence: "Delays in surgery due to missing tools.", proof: "Visual Check" },
                { id: "H-ST-04", description: "Test and log heat-sealer temperature and seal integrity.", priority: "High", riskLevel: "Medium", consequence: "Seal failure leading to contamination.", proof: "Daily Test" },
                { id: "H-ST-05", description: "Audit water quality (conductivity) used for autoclave steam.", priority: "Medium", riskLevel: "Low", consequence: "Instrument corrosion and equipment breakdown.", proof: "Conductivity Log" }
            ]
        },
        {
            title: "Diagnostic & Lab Operations",
            department: "Lab/Diagnostics",
            frequency: "Daily",
            role: "Lab Head",
            summary: "Governance for reporting accuracy and technical TAT.",
            icon: "microscope",
            tasks: [
                { id: "H-DX-01", description: "Critical Result Notification Pulse: Log time from result to doctor alert.", priority: "High", riskLevel: "High", consequence: "Fatal delay in life-saving treatment.", proof: "TAT Log" },
                { id: "H-DX-02", description: "Verify sample labeling at the point of collection (No batch-labeling).", priority: "High", riskLevel: "High", consequence: "Mismatched results leading to incorrect diagnosis.", proof: "Point-of-Care Audit" },
                { id: "H-DX-03", description: "Check equipment calibration logs for all main analyzers.", priority: "High", riskLevel: "Medium", consequence: "Incorrect lab values and clinical confusion.", proof: "Calibration File" },
                { id: "H-DX-04", description: "Monitor reagent storage temperatures and cold-chain.", priority: "High", riskLevel: "Medium", consequence: "Reagent degradation and invalid tests.", proof: "Temp Log" },
                { id: "H-DX-05", description: "Audit radiation safety badge usage in Radiology.", priority: "High", riskLevel: "High", consequence: "Staff radiation exposure and legal violation.", proof: "Dosimeter Log" }
            ]
        },
        {
            title: "Pharmacy & Med Logistics",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Chief Pharmacist",
            summary: "Command for medication inventory and storage safety.",
            icon: "pill",
            tasks: [
                { id: "H-PH-01", description: "Refrigerator Temp Log: Verify cold-chain for Insulin and Vaccines.", priority: "High", riskLevel: "High", consequence: "Total loss of medication efficacy.", proof: "Digital Log" },
                { id: "H-PH-02", description: "Narcotic Reconciliation: Blind count of controlled substances.", priority: "High", riskLevel: "High", consequence: "Drug diversion and severe legal penalties.", proof: "Register Audit" },
                { id: "H-PH-03", description: "Expiry Sweep: Identify items expiring within 90 days.", priority: "High", riskLevel: "Medium", consequence: "Financial loss and risk of dispensing expired drugs.", proof: "Sweep Report" },
                { id: "H-PH-04", description: "LASA (Look-Alike Sound-Alike) Audit: Verify segregation on shelves.", priority: "High", riskLevel: "High", consequence: "Dispensing error leading to patient harm.", proof: "Visual Audit" },
                { id: "H-PH-05", description: "Verify barcode functionality for all incoming stock.", priority: "Medium", riskLevel: "Low", consequence: "Inefficient billing and inventory errors.", proof: "Scan Test" }
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
                { id: "H-FS-01", description: "Central Medical Gas Check: Log pressure for Oxygen and N2O.", priority: "High", riskLevel: "High", consequence: "Catastrophic failure of life-support systems.", proof: "Pressure Gauge Log" },
                { id: "H-FS-02", description: "Generator (DG) Load Test: Verify automatic switch-over in <10 seconds.", priority: "High", riskLevel: "High", consequence: "Fatal outage in ICU/Operation Theater.", proof: "Test Report" },
                { id: "H-FS-03", description: "Verify UPS backup health for all ventilators and monitors.", priority: "High", riskLevel: "High", consequence: "Equipment failure during power flicker.", proof: "UPS Dashboard" },
                { id: "H-FS-04", description: "Fire Exit & Alarm Pulse: Verify paths are clear and panel is healthy.", priority: "High", riskLevel: "High", consequence: "Uncontrolled evacuation tragedy.", proof: "Walkthrough Log" },
                { id: "H-FS-05", description: "Water Treatment (WTP): Test TDS and bacterial count for dialysis unit.", priority: "High", riskLevel: "High", consequence: "Fatal dialysis complications.", proof: "Lab Report" }
            ]
        },
        {
            title: "Biomedical Waste & Hygiene",
            department: "Housekeeping",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Ensures biosecurity and regulatory waste compliance.",
            icon: "recycle",
            tasks: [
                { id: "H-BW-01", description: "Color-Coded Segregation Audit: Verify no sharps in yellow bags.", priority: "High", riskLevel: "High", consequence: "Injury to handlers and environmental fines.", proof: "Random Audit" },
                { id: "H-BW-02", description: "Verify spillage kits (Blood/Chemical) are stocked and accessible.", priority: "High", riskLevel: "Medium", consequence: "Spread of infectious pathogens after an accident.", proof: "Inventory Check" },
                { id: "H-BW-03", description: "Audit Hand-Hygiene compliance at entrance of ICU/Isolation.", priority: "High", riskLevel: "High", consequence: "Mass Hospital-Acquired Infection (HAI) outbreak.", proof: "Observational Log" },
                { id: "H-BW-04", description: "Verify waste storage area is secured and locked against pests.", priority: "Medium", riskLevel: "Medium", consequence: "Disease transmission and regulatory closure.", proof: "Visual Check" },
                { id: "H-BW-05", description: "Log total weight of BMW collected by authorized vendor.", priority: "High", riskLevel: "Low", consequence: "Inability to prove compliance during pollution audit.", proof: "Manifest Log" }
            ]
        },
        {
            title: "Digital & Patient Relations",
            department: "Admin",
            frequency: "Daily",
            role: "OPD Manager",
            summary: "Protects the reputation and digital revenue pipeline.",
            icon: "globe",
            tasks: [
                { id: "H-PR-01", description: "Review Response Pulse: Reply to Google/Practo reviews <24h.", priority: "High", riskLevel: "Medium", consequence: "Damaged reputation and lower patient footfall.", proof: "Review Dashboard" },
                { id: "H-PR-02", description: "Appointment Sync: Verify online slots match doctor availability.", priority: "High", riskLevel: "Low", consequence: "Patient frustration and lost consultations.", proof: "System Reconcile" },
                { id: "H-PR-03", description: "Patient Feedback Audit: Review daily NPS scores from discharge.", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunities for service recovery.", proof: "Feedback Log" },
                { id: "H-PR-04", description: "Update social media with today's health tip or consultant highlight.", priority: "Low", riskLevel: "Low", consequence: "Low brand engagement.", proof: "Live Post" },
                { id: "H-PR-05", description: "Verify functionality of Patient Portal and report-download links.", priority: "High", riskLevel: "Medium", consequence: "Inability for patients to access critical results.", proof: "Self-Test" }
            ]
        },
        {
            title: "HR & Medical Staff",
            department: "HR",
            frequency: "Weekly",
            role: "HR Head",
            summary: "Governance for clinical licensing and staff grooming.",
            icon: "user-check",
            tasks: [
                { id: "H-HR-01", description: "Verify registration certificates of all new medical/nursing staff.", priority: "High", riskLevel: "High", consequence: "Legal shutdown for using unregistered practitioners.", proof: "License File" },
                { id: "H-HR-02", description: "Audit staff grooming standards: nails, ID badges, and scrubs.", priority: "Low", riskLevel: "Low", consequence: "Poor institutional impression.", proof: "Visual Audit" },
                { id: "H-HR-03", description: "Track mandatory safety training attendance (Fire/Code Blue).", priority: "High", riskLevel: "High", consequence: "Staff unable to respond in a real emergency.", proof: "Training Matrix" },
                { id: "H-HR-04", description: "Monitor staff needle-stick injury reports and follow-up.", priority: "High", riskLevel: "High", consequence: "Occupational health hazard and legal liability.", proof: "Injury Log" },
                { id: "H-HR-05", description: "Check availability of uniforms and PPE stock levels.", priority: "Medium", riskLevel: "Low", consequence: "Operational delays.", proof: "Stock Sheet" }
            ]
        }
    ]
};

    