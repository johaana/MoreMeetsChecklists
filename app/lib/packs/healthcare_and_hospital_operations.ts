
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operating System",
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The Sovereign v11.3 clinical engine for hospitals and medical centers. Hardening 200+ control points from surgical safety to narcotics governance.",
    heroHeadline: "Zero-Risk Medical Operations. Audit-Ready.",
    heroSubheadline: "Standardize clinical and operational governance across every department in your facility with a logically-aware data engine.",
    pricingUrgency: "A single clinical error or one NABH/JCI audit failure costs 1000x more than this system.",
    consultingAnchor: 15000,
    icon: "hospital",
    badgeText: "V11.3 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Admin Directors"],
    sampleItems: [
        { text: "<strong>Clinical Safety (WHO)</strong>: Pre-incision time-outs and dual-verification for high-alert drugs.", icon: "shield-check" },
        { text: "<strong>Nursing & Ward Command</strong>: Bedside handover audits and crash-cart integrity tracking.", icon: "heart-pulse" },
        { text: "<strong>Pharmacy & Narcotics</strong>: Strict access logs and double-blind stock counts for controlled drugs.", icon: "pill" },
        { text: "<strong>Billing & Discharge Shield</strong>: TPA pre-auth tracking and unbilled consumable audits.", icon: "banknote" },
        { text: "<strong>Biomedical Waste (EHS)</strong>: Legal compliance for waste segregation and sharps fill levels.", icon: "recycle" }
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
                { id: "H-EXE-01", description: "Review major clinical error log and check root causes.", priority: "High", riskLevel: "High", consequence: "Recurring fatal mistakes and loss of hospital license.", proof: "Log Audit" },
                { id: "H-EXE-02", description: "Test the 'Mass Casualty' siren and check if backup radios work.", priority: "High", riskLevel: "High", consequence: "Chaos during a major accident or disaster.", proof: "Drill Log" },
                { id: "H-EXE-03", description: "Audit doctor registration cards to ensure they are valid.", priority: "High", riskLevel: "High", consequence: "Unlicensed doctors practicing; criminal liability.", proof: "Registry Audit" },
                { id: "H-EXE-04", description: "Check signs of infection or germs in the ward vs. target.", priority: "High", riskLevel: "High", consequence: "Audit failure and longer patient stays.", proof: "Infection Log" },
                { id: "H-EXE-05", description: "Verify insurance papers for all senior consultants.", priority: "High", riskLevel: "High", consequence: "No insurance coverage during a lawsuit.", proof: "Policy File" },
                { id: "H-EXE-06", description: "Audit minutes of the Mortality Review Committee.", priority: "High", riskLevel: "High", consequence: "Unchecked trends in patient deaths.", proof: "Minutes File" },
                { id: "H-EXE-07", description: "Check 'Code Blue' response times (Target < 3 minutes).", priority: "High", riskLevel: "High", consequence: "Fatal delay during resuscitation.", proof: "Code Log" },
                { id: "H-EXE-08", description: "Audit blood bank match logs for dual sign-off.", priority: "High", riskLevel: "High", consequence: "Fatal blood transfusion error.", proof: "Audit Sheet" },
                { id: "H-EXE-09", description: "Verify research ethics approval for any active studies.", priority: "Medium", riskLevel: "High", consequence: "Legal shutdown of clinical research.", proof: "Ethics File" },
                { id: "H-EXE-10", description: "Review High-Alert drug error trends.", priority: "High", riskLevel: "High", consequence: "Accidental patient poisoning.", proof: "Error Log" },
                { id: "H-EXE-11", description: "Check Medical Record (MRD) completion speed.", priority: "Medium", riskLevel: "Low", consequence: "Audit failure and billing delays.", proof: "MRD Report" },
                { id: "H-EXE-12", description: "Verify Bio-Medical Waste license is valid.", priority: "High", riskLevel: "High", consequence: "Hospital closure by environment authorities.", proof: "License File" },
                { id: "H-EXE-13", description: "Audit OT sterility spore test logs.", priority: "High", riskLevel: "High", consequence: "Post-surgery infection outbreak.", proof: "Spore Report" },
                { id: "H-EXE-14", description: "Review patient 'Transfer Out' reasons.", priority: "Low", riskLevel: "Medium", consequence: "Loss of trust in hospital capability.", proof: "Transfer Log" },
                { id: "H-EXE-15", description: "Audit the Doctor Privilege matrix vs current skills.", priority: "Medium", riskLevel: "Medium", consequence: "Doctors performing unapproved surgeries.", proof: "Matrix File" },
                { id: "H-EXE-16", description: "Verify organ transplant license is active.", priority: "High", riskLevel: "High", consequence: "Criminal charges against the board.", proof: "License File" },
                { id: "H-EXE-17", description: "Review Radiation Safety (AERB) badges for staff.", priority: "High", riskLevel: "High", consequence: "Cancer risk and staff lawsuits.", proof: "TLD Report" },
                { id: "H-EXE-18", description: "Audit server backup sync for medical history.", priority: "High", riskLevel: "High", consequence: "Total loss of all patient records.", proof: "System Log" },
                { id: "H-EXE-19", description: "Check status of 'Near-Miss' rewards for staff.", priority: "Low", riskLevel: "Low", consequence: "Staff hiding mistakes instead of fixing them.", proof: "HR Note" },
                { id: "H-EXE-20", description: "Final weekly Strategic sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of board-level oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Ward & Bedside Command",
            department: "Nursing",
            frequency: "Daily",
            role: "Nursing Superintendent",
            summary: "Manages the invisible infrastructure of patient safety.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-NUR-01", description: "Check ER wait times: first doctor touch in < 5 mins.", priority: "High", riskLevel: "High", consequence: "Condition worsening in waiting room.", proof: "TAT Log" },
                { id: "H-NUR-02", description: "Crash Cart: Check O2 level and seal integrity.", priority: "High", riskLevel: "High", consequence: "Rescue failure when a heart stops.", proof: "Seal Check" },
                { id: "H-NUR-03", description: "Bedside Handover: Oral report at the patient's bed.", priority: "High", riskLevel: "High", consequence: "Missing critical health data between shifts.", proof: "Handover Log" },
                { id: "H-NUR-04", description: "Fall Risk: check that side-rails are up for elderly.", priority: "High", riskLevel: "Medium", consequence: "Patient injury negligence.", proof: "Visual Check" },
                { id: "H-NUR-05", description: "Ambulance Check: Verify AED and O2 are full.", priority: "High", riskLevel: "High", consequence: "Death during transit to hospital.", proof: "Fleet Check" },
                { id: "H-NUR-06", description: "Audit ICU nurse-to-patient ratio (Target 1:1).", priority: "High", riskLevel: "High", consequence: "Patients declining without being noticed.", proof: "Roster Log" },
                { id: "H-NUR-07", description: "Check Ventilator backup battery charge.", priority: "High", riskLevel: "High", consequence: "Death during a power failure.", proof: "System Screen" },
                { id: "H-NUR-08", description: "Verify MAR sheet has no blank spaces.", priority: "High", riskLevel: "High", consequence: "Wrong drug or dose given to patient.", proof: "MAR Audit" },
                { id: "H-NUR-09", description: "Inspect IV sites for any redness or pain.", priority: "High", riskLevel: "Medium", consequence: "Hospital-acquired blood poisoning.", proof: "Audit Sheet" },
                { id: "H-NUR-10", description: "Check if stretcher count is enough for arrivals.", priority: "Medium", riskLevel: "Low", consequence: "Ambulances blocked at the entrance.", proof: "Visual Check" },
                { id: "H-NUR-11", description: "Test the Code Blue button in a random ward.", priority: "High", riskLevel: "High", consequence: "No response during an actual arrest.", proof: "Test Log" },
                { id: "H-NUR-12", description: "Check infant warmer temp in NICU.", priority: "High", riskLevel: "High", consequence: "Infant hypothermia risk.", proof: "Calibration Log" },
                { id: "H-NUR-13", description: "Audit ward RO water quality for patients.", priority: "Medium", riskLevel: "Medium", consequence: "Spread of stomach infections.", proof: "TDS Reading" },
                { id: "H-NUR-14", description: "Test the suction unit vacuum pressure.", priority: "High", riskLevel: "High", consequence: "Patient choking during a crisis.", proof: "Visual Check" },
                { id: "H-NUR-15", description: "Check mask and gown stock in isolation rooms.", priority: "High", riskLevel: "High", consequence: "Spread of contagious disease.", proof: "Stock Audit" },
                { id: "H-NUR-16", description: "Verify dialysis water endotoxin levels.", priority: "High", riskLevel: "High", consequence: "Patient blood poisoning.", proof: "Lab Report" },
                { id: "H-NUR-17", description: "Brief nursing staff on grooming and ID badges.", priority: "Low", riskLevel: "Low", consequence: "Poor brand and professionalism.", proof: "Briefing Log" },
                { id: "H-NUR-18", description: "Check availability of clean bedsheets.", priority: "Medium", riskLevel: "Low", consequence: "Unhygienic patient experience.", proof: "Stock Note" },
                { id: "H-NUR-19", description: "Verify high-protein diet delivery for wound cases.", priority: "High", riskLevel: "Medium", consequence: "Slower healing and longer stays.", proof: "Food Log" },
                { id: "H-NUR-20", description: "Final daily Operations sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Log" }
            ]
        },
        {
            title: "OPD & Waiting Area",
            department: "OPD",
            frequency: "Daily",
            role: "OPD Manager",
            summary: "Governs the patient pipeline and first impressions.",
            icon: "stethoscope",
            tasks: [
                { id: "H-OPD-01", description: "Check doctor arrival time: must be within 15 mins.", priority: "High", riskLevel: "Low", consequence: "Huge queues and angry patients.", proof: "Attendance Log" },
                { id: "H-OPD-02", description: "Monitor wait times: target < 30 mins per patient.", priority: "Medium", riskLevel: "Low", consequence: "Patients leaving without consultation.", proof: "Token Report" },
                { id: "H-OPD-03", description: "Check the scent and temp in the waiting hall.", priority: "Low", riskLevel: "Low", consequence: "Bad first impression of the hospital.", proof: "Daily Log" },
                { id: "H-OPD-04", description: "Verify all OPD computers are connected to server.", priority: "High", riskLevel: "Medium", consequence: "Inability to see patient history.", proof: "System Check" },
                { id: "H-OPD-05", description: "Check availability of drinking water cups.", priority: "Low", riskLevel: "Low", consequence: "Patient discomfort scores.", proof: "Visual Check" },
                { id: "H-OPD-06", description: "Audit token system: no double-numbers.", priority: "Medium", riskLevel: "Low", consequence: "Chaos and fighting in wait area.", proof: "Print Test" },
                { id: "H-OPD-07", description: "Check lighting: replace any flickering bulbs.", priority: "Low", riskLevel: "Low", consequence: "Dull and unhygienic appearance.", proof: "Walkthrough" },
                { id: "H-OPD-08", description: "Verify availability of wheelchair at main gate.", priority: "High", riskLevel: "Medium", consequence: "Difficulty for injured arrivals.", proof: "Visual Audit" },
                { id: "H-OPD-09", description: "Audit doctor grooming: check for white coats.", priority: "Low", riskLevel: "Low", consequence: "Reduced authority brand image.", proof: "Briefing Log" },
                { id: "H-OPD-10", description: "Final OPD closure sign-off.", priority: "High", riskLevel: "Low", consequence: "Lights left on / data unlocked.", proof: "Signed Log" }
            ]
        },
        {
            title: "Pharmacy & Narcotics",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Pharmacy Lead",
            summary: "Governance for controlled drugs and biologics.",
            icon: "pill",
            tasks: [
                { id: "H-PHM-01", description: "Narcotics Vault: Dual-person count of all units.", priority: "High", riskLevel: "High", consequence: "Drug theft and criminal charges.", proof: "Dual-Sign Log" },
                { id: "H-PHM-02", description: "Fridge Check: Log temp (Target 2°C to 8°C).", priority: "High", riskLevel: "High", consequence: "Vaccines and insulin becoming useless.", proof: "Temp Log" },
                { id: "H-PHM-03", description: "LASA Check: Separate look-alike sound-alike drugs.", priority: "High", riskLevel: "High", consequence: "Giving wrong medicine (Fatal error).", proof: "Visual Audit" },
                { id: "H-PHM-04", description: "Check expiry dates: remove anything < 3 months.", priority: "High", riskLevel: "Medium", consequence: "Giving expired pills to patients.", proof: "Expiry Log" },
                { id: "H-PHM-05", description: "Verify billing math against doctor prescription.", priority: "Medium", riskLevel: "Low", consequence: "Overcharging complaints.", proof: "Sample Match" }
            ]
        },
        {
            title: "Billing & Insurance",
            department: "Finance",
            frequency: "Daily",
            role: "Billing Manager",
            summary: "Revenue protection and TPA governance.",
            icon: "banknote",
            tasks: [
                { id: "H-BIL-01", description: "TPA Pre-Auth: Check insurance approval status.", priority: "High", riskLevel: "Medium", consequence: "Treatment done but no payment received.", proof: "Portal Sync" },
                { id: "H-BIL-02", description: "Consumable Reconcile: match ward use to bill.", priority: "Medium", riskLevel: "Low", consequence: "Losing money on unbilled items.", proof: "Bill Audit" },
                { id: "H-BIL-03", description: "Audit Voided Bills: check reasons for changes.", priority: "High", riskLevel: "Medium", consequence: "Internal theft by deleting bills.", proof: "POS Audit" },
                { id: "H-BIL-04", description: "Match cash in hand to the system sales report.", priority: "High", riskLevel: "High", consequence: "Cashier-driven theft.", proof: "Settlement Log" },
                { id: "H-BIL-05", description: "Verify 100% ID capture for every admission.", priority: "High", riskLevel: "High", consequence: "Legal liability for fraud.", proof: "ID Audit" }
            ]
        },
        {
            title: "Hygiene & Waste (EHS)",
            department: "Safety",
            frequency: "Hourly",
            role: "EHS Officer",
            summary: "Sanitation command for bio-hazards.",
            icon: "recycle",
            tasks: [
                { id: "H-WST-01", description: "Bio-Waste: Check color bins for segregation.", priority: "High", riskLevel: "High", consequence: "Legal fines and infection spread.", proof: "Visual Audit" },
                { id: "H-WST-02", description: "Sharps: check if bins are more than 75% full.", priority: "High", riskLevel: "High", consequence: "Needle-stick injuries to cleaning staff.", proof: "Visual Check" },
                { id: "H-WST-03", description: "Toilet Cleaning: verify 1-hour frequency log.", priority: "High", riskLevel: "Low", consequence: "Negative guest reviews.", proof: "Hourly Sheet" },
                { id: "H-WST-04", description: "OT fumigation: check date and time of last log.", priority: "High", riskLevel: "High", consequence: "Major surgery infection outbreak.", proof: "Fumigation Sheet" },
                { id: "H-WST-05", description: "Check spillage kits in lab and pharmacy.", priority: "High", riskLevel: "High", consequence: "Toxic fluid exposure.", proof: "Stock Check" }
            ]
        },
        {
            title: "Engineering & MEP",
            department: "Engineering",
            frequency: "Daily",
            role: "Technical Lead",
            summary: "Asset uptime and life-support governance.",
            icon: "wrench",
            tasks: [
                { id: "H-TEC-01", description: "O2 Plant: Check purity and pressure hourly.", priority: "High", riskLevel: "High", consequence: "Patient death due to low oxygen.", proof: "Gauge Log" },
                { id: "H-TEC-02", description: "UPS Bank: Test load for 10 mins for ICU/OT.", priority: "High", riskLevel: "High", consequence: "Blackout during critical care.", proof: "Voltage Log" },
                { id: "H-TEC-03", description: "MRI/CT: Check room temp and radiation badges.", priority: "High", riskLevel: "High", consequence: "Machine failure or health risk.", proof: "System Screen" },
                { id: "H-TEC-04", description: "Log generator fuel and battery health.", priority: "High", riskLevel: "High", consequence: "Total hospital blackout.", proof: "Fuel Log" },
                { id: "H-TEC-05", description: "Check RO water TDS level for Dialysis unit.", priority: "High", riskLevel: "High", consequence: "Patient blood contamination.", proof: "TDS Reading" }
            ]
        }
    ]
};
