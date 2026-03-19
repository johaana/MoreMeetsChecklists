
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
    heroSubheadline: "Track 110+ clinical and operational control points across Wards, Surgery, Pharmacy, Reception, Canteen, and Facility Management.",
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
        { text: "<strong>Ambulance & Emergency Response</strong>: Readiness logs for medical gas, siren, and emergency contact sync.", icon: "ambulance" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show Quality Leads exactly what needs sign-off—from sterilization to narcotics.", icon: "target" },
        { text: "<strong>Billing & Insurance Shield</strong>: Daily audits for TPA pre-auths and discharge clearance to stop revenue leakage.", icon: "banknote" },
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
                { id: "H-CS-05", description: "Sentinel event reporting pulse: verify all near-misses are logged.", priority: "High", riskLevel: "Medium", consequence: "Undetected systemic risks leading to future catastrophes.", proof: "Incident Log" },
                { id: "H-CS-06", description: "Verify surgical site marking by the operating surgeon.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery.", proof: "Visual Check" },
                { id: "H-CS-07", description: "Confirm completion of pre-anaesthesia check-up (PAC) for today's list.", priority: "High", riskLevel: "High", consequence: "Anaesthesia complications during surgery.", proof: "PAC Note" },
                { id: "H-CS-08", description: "Audit surgical count (sponges/instruments) before closing.", priority: "High", riskLevel: "High", consequence: "Retained foreign object in patient.", proof: "Count Sheet" },
                { id: "H-CS-09", description: "Verify functionality of OT smoke evacuation systems.", priority: "Medium", riskLevel: "Medium", consequence: "Staff exposure to surgical plume.", proof: "Functional Test" },
                { id: "H-CS-10", description: "Confirm emergency blood stock availability for the OT.", priority: "High", riskLevel: "High", consequence: "Unable to manage massive haemorrhage.", proof: "Blood Bank Sync" }
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
                { id: "H-NW-05", description: "Enforce visiting hours policy and clear corridors of unauthorized persons.", priority: "High", riskLevel: "Low", consequence: "Increased infection risk and patient rest disruption.", proof: "Patrol Log" },
                { id: "H-NW-06", description: "Check availability of essential consumables (Gloves, Swabs, IV sets).", priority: "Medium", riskLevel: "Low", consequence: "Operational delays.", proof: "Stock Sheet" },
                { id: "H-NW-07", description: "Bed-sore Prevention Audit: Verify position-change logs for high-risk patients.", priority: "High", riskLevel: "Medium", consequence: "Pressure ulcers and prolonged hospitalization.", proof: "Position Log" },
                { id: "H-NW-08", description: "Verify IV site hygiene and date of insertion.", priority: "High", riskLevel: "Medium", consequence: "Hospital-acquired infections (Sepsis/Phlebitis).", proof: "Clinical Audit" },
                { id: "H-NW-09", description: "Patient Fall Risk: Verify bed-rails and floor status for high-risk seniors.", priority: "High", riskLevel: "High", consequence: "Fractures and major liability.", proof: "Visual Audit" },
                { id: "H-NW-10", description: "Confirm staff grooming: short nails, no jewellery, clean scrubs.", priority: "Low", riskLevel: "Low", consequence: "Infection risk and poor professional image.", proof: "Morning Briefing" }
            ]
        },
        {
            title: "Reception & Billing Command",
            department: "Admin/Billing",
            frequency: "Daily",
            role: "Billing Manager",
            summary: "Protects the patient pipeline and stops revenue leakage.",
            icon: "banknote",
            tasks: [
                { id: "H-RE-01", description: "Verify emergency contact numbers for all on-call specialists.", priority: "High", riskLevel: "High", consequence: "Unable to reach doctors during a crisis.", proof: "Contact Sync" },
                { id: "H-RE-02", description: "Audit reception call-handling: wait time and phone etiquette.", priority: "Medium", riskLevel: "Low", consequence: "Lost consultations and poor brand image.", proof: "Call Log" },
                { id: "H-RE-03", description: "Appointment Sync: Verify online slots match live doctor availability.", priority: "High", riskLevel: "Low", consequence: "Patient frustration and overbooking.", proof: "System Reconcile" },
                { id: "H-RE-04", description: "ORM Pulse: Respond to Google/Practo reviews within 24 hours.", priority: "High", riskLevel: "Medium", consequence: "Reputation damage and lower patient footfall.", proof: "Dashboard Check" },
                { id: "H-RE-05", description: "Verify Patient Info availability: brochures, maps, and rate lists.", priority: "Low", riskLevel: "Low", consequence: "Patient confusion and transparency issues.", proof: "Visual Check" },
                { id: "H-RE-06", description: "Billing Reconciliation: Match daily cash/digital receipts to HIS (Hospital Information System) reports.", priority: "High", riskLevel: "High", consequence: "Internal fraud and revenue discrepancies.", proof: "Finance Summary" },
                { id: "H-RE-07", description: "TPA Pre-Auth Audit: Verify all IPD admissions have pre-authorization or deposit.", priority: "High", riskLevel: "High", consequence: "Claim rejections and massive unrecoverable losses.", proof: "Pre-Auth Register" },
                { id: "H-RE-08", description: "Daily IPD Estimate Briefing: Verify relatives are updated on current bill vs estimate.", priority: "High", riskLevel: "Medium", consequence: "Violent disputes and payment defaults at discharge.", proof: "Interaction Log" },
                { id: "H-RE-09", description: "Consumable Charge Check: Random audit of nursing charts vs bill for unbilled pharmacy items.", priority: "High", riskLevel: "High", consequence: "Silent profit leakage through unbilled medication/consumables.", proof: "Audit Scorecard" },
                { id: "H-RE-10", description: "Insurance Network Sync: Daily briefing on changes to network providers or excluded procedures.", priority: "Medium", riskLevel: "Low", consequence: "Incorrect guidance to patients; legal liability.", proof: "Briefing Note" }
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
                { id: "H-FB-01", description: "Diet Compliance Audit: Match patient meals to doctor's dietary orders.", priority: "High", riskLevel: "High", consequence: "Fatal complications (e.g., giving sugar to severe diabetic).", proof: "Meal Tray Audit" },
                { id: "H-FB-02", description: "Kitchen Temp Log: Verify all chillers and hot-holding units.", priority: "High", riskLevel: "High", consequence: "Food poisoning outbreak in hospital.", proof: "Digital Log" },
                { id: "H-FB-03", description: "Verify sanitization of patient utensils (temp/ppm check).", priority: "High", riskLevel: "Medium", consequence: "Infection transmission via food service.", proof: "Test Strip" },
                { id: "H-FB-04", description: "Audit expiry dates of bulk raw materials in the dry store.", priority: "Medium", riskLevel: "Medium", consequence: "Use of sub-par or expired ingredients.", proof: "Visual Audit" },
                { id: "H-FB-05", description: "Verify staff hygiene: health check, masks, and gloves.", priority: "High", riskLevel: "High", consequence: "Contamination of patient food.", proof: "Daily Log" }
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
                { id: "H-FS-03", description: "Equipment Calibration Audit: Verify next due date for Ventilators/MRI.", priority: "High", riskLevel: "High", consequence: "Faulty readings and clinical failure.", proof: "Calibration File" },
                { id: "H-FS-04", description: "Verify UPS backup health for all ventilators and monitors.", priority: "High", riskLevel: "High", consequence: "Equipment failure during power flicker.", proof: "UPS Dashboard" },
                { id: "H-FS-05", description: "Water Treatment (WTP): Test TDS and bacterial count for dialysis unit.", priority: "High", riskLevel: "High", consequence: "Fatal dialysis complications.", proof: "Lab Report" },
                { id: "H-FS-06", description: "Check all OT overhead lights for focus and fused bulbs.", priority: "Medium", riskLevel: "Low", consequence: "Reduced surgical visibility.", proof: "Visual Check" },
                { id: "H-FS-07", description: "Inspect plumbing shafts for leaks near clinical areas.", priority: "Medium", riskLevel: "Medium", consequence: "Mould growth and structural damage.", proof: "Walkthrough" },
                { id: "H-FS-08", description: "Verify temperature setting of blood bank fridges.", priority: "High", riskLevel: "High", consequence: "Loss of expensive blood products.", proof: "Temp Log" },
                { id: "H-FS-09", description: "Test fire alarm panel and smoke detectors in high-risk zones.", priority: "High", riskLevel: "High", consequence: "Uncontrolled fire in non-ambulatory areas.", proof: "Alarm Log" },
                { id: "H-FS-10", description: "Inspect elevator leveling and door sensor safety.", priority: "High", riskLevel: "High", consequence: "Entrapment of unstable patients.", proof: "Lift Log" }
            ]
        },
        {
            title: "Ambulance & Emergency Logistics",
            department: "Logistics",
            frequency: "Daily",
            role: "Logistics Head",
            summary: "Command for the mobile ICU infrastructure.",
            icon: "ambulance",
            tasks: [
                { id: "H-AL-01", description: "Ambulance O2 Inventory: Verify primary and backup cylinders are full.", priority: "High", riskLevel: "High", consequence: "Patient death during transit.", proof: "Gauge Reading" },
                { id: "H-AL-02", description: "Mechanical Readiness: Check fuel, tyre pressure, and siren.", priority: "High", riskLevel: "Medium", consequence: "Breakdown during emergency transport.", proof: "Vehicle Log" },
                { id: "H-AL-03", description: "Medical Kit Audit: Verify AED and emergency drug stock.", priority: "High", riskLevel: "High", consequence: "Unable to resuscitate in-transit.", proof: "Seal Check" },
                { id: "H-AL-04", description: "Emergency Dispatch TAT: Log time from call to exit.", priority: "High", riskLevel: "Medium", consequence: "Delayed life-saving care.", proof: "Dispatch Log" },
                { id: "H-AL-05", description: "Driver Training: Monthly verify BLS (Basic Life Support) certification.", priority: "High", riskLevel: "High", consequence: "Unqualified personnel handling crisis.", proof: "License File" }
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
                { id: "H-BW-01", description: "Color-Coded Segregation Audit: Verify no sharps in yellow bags.", priority: "High", riskLevel: "High", consequence: "Injury to handlers and environmental fines.", proof: "Random Audit" },
                { id: "H-BW-02", description: "Verify spillage kits (Blood/Chemical) are stocked and accessible.", priority: "High", riskLevel: "Medium", consequence: "Spread of infectious pathogens after an accident.", proof: "Inventory Check" },
                { id: "H-BW-03", description: "Audit Hand-Hygiene compliance at entrance of ICU/Isolation.", priority: "High", riskLevel: "High", consequence: "Mass Hospital-Acquired Infection (HAI) outbreak.", proof: "Observational Log" },
                { id: "H-BW-04", description: "Verify waste storage area is secured and locked against pests.", priority: "Medium", riskLevel: "Medium", consequence: "Disease transmission and regulatory closure.", proof: "Visual Check" },
                { id: "H-BW-05", description: "Daily cleaning audit of common areas: Lobby and OPD.", priority: "Medium", riskLevel: "Low", consequence: "Poor brand image and hygiene perception.", proof: "Cleaning Log" }
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
                { id: "H-SE-01", description: "CCTV Blind-spot Audit: Verify coverage of high-risk medication stores.", priority: "High", riskLevel: "High", consequence: "Untraceable theft of narcotics.", proof: "Monitor Check" },
                { id: "H-SE-02", description: "Guard Patrol Log: Verify night rounds at isolated annexes.", priority: "High", riskLevel: "High", consequence: "Security breach or fire discovery delay.", proof: "Patrol Register" },
                { id: "H-SE-03", description: "Parking Zone Audit: Check for illumination and hazard-free entry.", priority: "Medium", riskLevel: "Low", consequence: "Guest injury and insurance liability.", proof: "Walkthrough" },
                { id: "H-SE-04", description: "Visitor Badge Enforcement: Audit entry/exit points.", priority: "Medium", riskLevel: "Low", consequence: "Unauthorized access to sensitive wards.", proof: "Visual Check" },
                { id: "H-SE-05", description: "Conflict De-escalation Briefing: Review protocol for angry relatives.", priority: "High", riskLevel: "Medium", consequence: "Staff assault and PR crisis.", proof: "Briefing Note" }
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
                { id: "H-SU-01", description: "Receiving Audit: Check cold-chain monitor tags on incoming biologics.", priority: "High", riskLevel: "High", consequence: "Accepting compromised/ineffective vaccines/implants.", proof: "Receiving Note" },
                { id: "H-SU-02", description: "AMC Audit: Verify service status for 3 major medical devices.", priority: "High", riskLevel: "High", consequence: "Contract lapse leading to unfixable equipment failure.", proof: "AMC Dashboard" },
                { id: "H-SU-03", description: "Blind Stock Count: Random audit of high-value implants/meds.", priority: "High", riskLevel: "High", consequence: "Internal theft and profit erosion.", proof: "Stock Sheet" },
                { id: "H-SU-04", description: "Vendor Compliance: Check license validity of top 5 clinical suppliers.", priority: "High", riskLevel: "High", consequence: "Regulatory liability linkage.", proof: "License File" },
                { id: "H-SU-05", description: "RTV (Return-To-Vendor): Track rejected goods and credit notes.", priority: "Medium", riskLevel: "Low", consequence: "Revenue loss.", proof: "RTV Log" }
            ]
        }
    ]
};
