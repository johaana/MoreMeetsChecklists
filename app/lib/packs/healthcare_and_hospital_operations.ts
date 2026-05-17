
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operations System",
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The Sovereign v11.9 clinical engine for hospitals and specialized medical centers. Hardening 200+ control points from surgical safety to biomedical waste.",
    icon: "hospital",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Admin Directors"],
    sampleItems: [
        { text: "<strong>Clinical Safety (WHO)</strong>: Pre-incision time-outs and dual-verification for high-alert drugs.", icon: "shield-check" },
        { text: "<strong>Nursing & Ward Command</strong>: Bedside handover audits and crash-cart integrity tracking.", icon: "heart-pulse" }
    ],
    checklists: [
        {
            title: "Medical Director Governance",
            department: "Clinical",
            frequency: "Daily",
            role: "Medical Director",
            summary: "Protects the clinical standard and institution risk.",
            icon: "crown",
            tasks: [
                { id: "H-EXE-01", technicalProtocol: "Clinical Error Review", floorAction: "Review Sentinel Event Log for near-miss clinical errors.", priority: "High", riskLevel: "High", consequence: "Fatal patient harm and license loss.", proof: "Log Audit" },
                { id: "H-EXE-02", technicalProtocol: "Doctor Attendance Audit", floorAction: "Match doctor arrival against scheduled surgeries.", priority: "High", riskLevel: "Medium", consequence: "Delayed critical procedures.", proof: "Roster Check" },
                { id: "H-EXE-03", technicalProtocol: "Accreditation Watch", floorAction: "Verify weekly quality indicators dashboard status.", priority: "Medium", riskLevel: "Low", consequence: "Audit failure.", proof: "Scorecard" },
                { id: "H-EXE-04", technicalProtocol: "Consent Verification", floorAction: "Audit 10 patient files for signed surgical consent.", priority: "High", riskLevel: "High", consequence: "Legal suit / malpractice.", proof: "File Audit" },
                { id: "H-EXE-05", technicalProtocol: "Mortal Audit Witness", floorAction: "Witness monthly clinical mortality review meeting.", priority: "High", riskLevel: "High", consequence: "Systemic care failure.", proof: "Minutes" },
                { id: "H-EXE-06", technicalProtocol: "Narcotic Safe Review", floorAction: "Audit vault access logs and signature parity.", priority: "High", riskLevel: "High", consequence: "Criminal drug diversion.", proof: "Signature Log" },
                { id: "H-EXE-07", technicalProtocol: "Medical Board Briefing", floorAction: "Prepare weekly governance summary for board.", priority: "Low", riskLevel: "Low", consequence: "Loss of executive oversight.", proof: "Briefing Note" },
                { id: "H-EXE-08", technicalProtocol: "Clinical Privileging", floorAction: "Review surgeon competency matrix for new procedures.", priority: "High", riskLevel: "High", consequence: "Unauthorized clinical practice.", proof: "Matrix Update" },
                { id: "H-EXE-09", technicalProtocol: "Patient Complaint Pulse", floorAction: "Directly call one high-dissatisfaction patient.", priority: "Medium", riskLevel: "Low", consequence: "Negative PR / litigation.", proof: "Call Note" },
                { id: "H-EXE-10", technicalProtocol: "Governance Seal", floorAction: "Daily sign-off on medical director ledger.", priority: "High", riskLevel: "Low", consequence: "Loss of institutional command.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Operating Theater Safety",
            department: "Surgery",
            frequency: "Per Show",
            role: "OT In-charge",
            summary: "Zero-fail protocols for the OT environment.",
            icon: "shield-check",
            tasks: [
                { id: "H-OT-01", technicalProtocol: "WHO Time-Out Seal", floorAction: "Execute WHO 'Time Out' before every incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Fatal).", proof: "Sign-off" },
                { id: "H-OT-02", technicalProtocol: "Sterility Indicator Audit", floorAction: "Verify indicators on all instrument sets.", priority: "High", riskLevel: "High", consequence: "Post-op infection outbreak.", proof: "Tape Check" },
                { id: "H-OT-03", technicalProtocol: "Anesthesia Leak Test", floorAction: "Pre-opening pressure test for workstations.", priority: "High", riskLevel: "High", consequence: "System failure.", proof: "System Log" },
                { id: "H-OT-04", technicalProtocol: "CSSD Cycle Match", floorAction: "Verify biological indicators for batch loads.", priority: "High", riskLevel: "High", consequence: "Septicemia risk.", proof: "Lab Report" },
                { id: "H-OT-05", technicalProtocol: "Patient ID Sync", floorAction: "Verify wristband against case file pre-anesthesia.", priority: "High", riskLevel: "High", consequence: "Mismatched patient procedure.", proof: "Visual Check" },
                { id: "H-OT-06", technicalProtocol: "OT Air Vitals", floorAction: "Check humidity and positive pressure gauges.", priority: "Medium", riskLevel: "Medium", consequence: "Surgical site infection.", proof: "BMS Log" },
                { id: "H-OT-07", technicalProtocol: "Sharps Count Zero", floorAction: "Physical count match of needles and blades post-op.", priority: "High", riskLevel: "High", consequence: "Foreign body retention (Fatal).", proof: "Count Sheet" },
                { id: "H-OT-08", technicalProtocol: "Scrub Hygiene Challenge", floorAction: "Witness random scrub technique audit.", priority: "Medium", riskLevel: "Low", consequence: "Aseptic technique failure.", proof: "Observation Log" },
                { id: "H-OT-09", technicalProtocol: "OT Deep Clean Cycle", floorAction: "Verify weekly fumigation/deep-clean status.", priority: "High", riskLevel: "Medium", consequence: "Cluster infection.", proof: "Certificate" },
                { id: "H-OT-10", technicalProtocol: "Daily OT Seal", floorAction: "Final closure sign-off for OT suite.", priority: "High", riskLevel: "Low", consequence: "Loss of suite control.", proof: "Signed Ledger" }
            ]
        },
        {
            title: "Ward & Bedside Command",
            department: "Nursing",
            frequency: "Daily",
            role: "Nursing Superintendent",
            summary: "Governance for ward infrastructure and patient care.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-NUR-01", technicalProtocol: "Bedside Handover Audit", floorAction: "Verify IV sites and vitals charts at shift change.", priority: "High", riskLevel: "High", consequence: "Clinical data loss.", proof: "Handover Log" },
                { id: "H-NUR-02", technicalProtocol: "Crash Cart Seal Integrity", floorAction: "Verify AED battery and drug seals physically.", priority: "High", riskLevel: "High", consequence: "Resuscitation failure.", proof: "Seal Log" },
                { id: "H-NUR-03", technicalProtocol: "Patient ID Sync", floorAction: "Confirm wristband accuracy for 100% of ward.", priority: "High", riskLevel: "High", consequence: "Medication mix-up.", proof: "Audit Sheet" },
                { id: "H-NUR-04", technicalProtocol: "Hand Hygiene Pulse", floorAction: "Audit sanitizer usage during 5 random bed visits.", priority: "Medium", riskLevel: "Medium", consequence: "Hospital Acquired Infection.", proof: "Observer Log" },
                { id: "H-NUR-05", technicalProtocol: "Fall Risk Guard", floorAction: "Verify bed-rails UP for all high-risk patients.", priority: "High", riskLevel: "High", consequence: "Patient fracture liability.", proof: "Patrol Log" },
                { id: "H-NUR-06", technicalProtocol: "Catheter Care Verify", floorAction: "Check bag placement and labeling in 3 random beds.", priority: "Medium", riskLevel: "Medium", consequence: "UTI and infection.", proof: "Visual Audit" },
                { id: "H-NUR-07", technicalProtocol: "Call Bell Response TAT", floorAction: "Simulate call bell; measure time to nursing response.", priority: "Low", riskLevel: "Low", consequence: "Patient rage and risk of unmonitored crisis.", proof: "Time Log" },
                { id: "H-NUR-08", technicalProtocol: "Linen Grey-scale Audit", floorAction: "Audit ward linen for stains or wear.", priority: "Low", riskLevel: "Low", consequence: "Luxury care dilution.", proof: "Spot Check" },
                { id: "H-NUR-09", technicalProtocol: "Ward Dressing Stock", floorAction: "Verify par levels of bandages and sutures.", priority: "Medium", riskLevel: "Low", consequence: "Service delay.", proof: "Stock Sheet" },
                { id: "H-NUR-10", technicalProtocol: "Nursing Shift Seal", floorAction: "Final ward handover sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of continuity.", proof: "Signed Sheet" }
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
                { id: "H-PHM-01", technicalProtocol: "Narcotics Vault Count", floorAction: "Double-blind count of all vault units.", priority: "High", riskLevel: "High", consequence: "Theft and criminal liability.", proof: "Dual-Sign Log" },
                { id: "H-PHM-02", technicalProtocol: "Cold Chain Pulse", floorAction: "Log medical fridge temp twice daily.", priority: "High", riskLevel: "High", consequence: "Spoiled biologicals.", proof: "Temp Log" },
                { id: "H-PHM-03", technicalProtocol: "Expiry Sweep", floorAction: "Remove items with < 60 days shelf life.", priority: "Medium", riskLevel: "Low", consequence: "Ineffective drug issue.", proof: "Sweep Report" },
                { id: "H-PHM-04", technicalProtocol: "LASA Drug Segregation", floorAction: "Audit 'Look-Alike-Sound-Alike' labeling.", priority: "High", riskLevel: "High", consequence: "Fatal medication error.", proof: "Visual Audit" },
                { id: "H-PHM-05", technicalProtocol: "Prescription Legibility", floorAction: "Challenge 3 illegible or ambiguous drug orders.", priority: "Medium", riskLevel: "High", consequence: "Incorrect dosage admin.", proof: "Error Log" },
                { id: "H-PHM-06", technicalProtocol: "Chemo Spill Kit", floorAction: "Verify presence and validity of spill kit.", priority: "High", riskLevel: "High", consequence: "Toxic staff exposure.", proof: "Check-off" },
                { id: "H-PHM-07", technicalProtocol: "Blood Bank Temp", floorAction: "Verify blood fridge chart parity.", priority: "High", riskLevel: "High", consequence: "Blood hemolysis.", proof: "Chart Match" },
                { id: "H-PHM-08", technicalProtocol: "Counter Cash Reconcile", floorAction: "Match sales to cash drop.", priority: "High", riskLevel: "Low", consequence: "Revenue theft.", proof: "Cash Log" },
                { id: "H-PHM-09", technicalProtocol: "Return Authorization", floorAction: "Audit un-opened drug returns from ward.", priority: "Low", riskLevel: "Low", consequence: "Inventory variance.", proof: "Credit Note" },
                { id: "H-PHM-10", technicalProtocol: "Pharmacy Closure", floorAction: "Final vault and fridge seal sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of drug control.", proof: "Signed Log" }
            ]
        },
        {
            title: "EHS & Waste Control",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Compliance for bio-hazards and staff safety.",
            icon: "recycle",
            tasks: [
                { id: "H-WST-01", technicalProtocol: "Waste Segregation Audit", floorAction: "Verify color-coded bins at ward source.", priority: "High", riskLevel: "High", consequence: "Regulatory fines.", proof: "Visual Audit" },
                { id: "H-WST-02", technicalProtocol: "Sharps Bin Fill-level", floorAction: "Verify 100% of bins are < 75% full.", priority: "High", riskLevel: "Medium", consequence: "Needle-stick injuries.", proof: "Visual Check" },
                { id: "H-WST-03", technicalProtocol: "Effluent Plant Pulse", floorAction: "Log pH and discharge color.", priority: "Medium", riskLevel: "High", consequence: "Environmental penalties.", proof: "Lab Book" },
                { id: "H-WST-04", technicalProtocol: "Pest Evidence Search", floorAction: "Inspect pantry and waste zones for roaches.", priority: "High", riskLevel: "Medium", consequence: "Patient infection risk.", proof: "Search Note" },
                { id: "H-WST-05", technicalProtocol: "Hazmat Labeling Audit", floorAction: "Confirm 100% of chemicals have MSDS tags.", priority: "Low", riskLevel: "Low", consequence: "Compliance failure.", proof: "Walkthrough" },
                { id: "H-WST-06", technicalProtocol: "Laundry Hygiene Seal", floorAction: "Verify 82°C thermal cycle for infected linens.", priority: "High", riskLevel: "High", consequence: "Cross-infection.", proof: "Washer Log" },
                { id: "H-WST-07", technicalProtocol: "Staff PPE Compliance", floorAction: "Audit mask and glove usage in high-risk ICU.", priority: "High", riskLevel: "Medium", consequence: "Outbreak.", proof: "Daily Audit" },
                { id: "H-WST-08", technicalProtocol: "Ambulance Decon", floorAction: "Verify daily decontamination of fleet.", priority: "High", riskLevel: "High", consequence: "Infectious transfer.", proof: "Fleet Log" },
                { id: "H-WST-09", technicalProtocol: "Waste Manifest Sync", floorAction: "Match out-weight vs receiver weight.", priority: "Medium", riskLevel: "Low", consequence: "Illegal dumping liability.", proof: "Slip Match" },
                { id: "H-WST-10", technicalProtocol: "Safety Command Seal", floorAction: "Execute nightly EHS summary.", priority: "High", riskLevel: "Low", consequence: "Risk gap.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Hospital Security & Visitor Control",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and protects assets.",
            icon: "shield",
            tasks: [
                { id: "H-SEC-01", technicalProtocol: "CCTV Audit: Drug Store", floorAction: "Verify coverage of high-risk drug stores.", priority: "High", riskLevel: "High", consequence: "Untraceable internal theft.", proof: "System Check" },
                { id: "H-SEC-02", technicalProtocol: "Visitor Badge Enforcement", floorAction: "Check Ward entry points for valid badges.", priority: "Medium", riskLevel: "Low", consequence: "Unauthorized person access to patients.", proof: "Patrol Log" }
            ]
        }
    ]
};
