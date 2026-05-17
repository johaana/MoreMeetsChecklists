
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The definitive Sovereign v15.0 technical engine for clinical governance. Hardening 200+ control points from WHO Surgical Safety to Oxygen Infrastructure. Zero medical advice—100% operational rigor.",
    heroHeadline: "Zero-Risk Medical Operations. Audit-Ready.",
    heroSubheadline: "Track 200+ technical control points across 12 clinical and operational roles—even when you’re not on property.",
    pricingUrgency: "A single clinical error or one NABH/JCI audit failure costs 1000x more than this system.",
    consultingAnchor: 15000,
    icon: "hospital",
    badgeText: "V15.0 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Admin Directors"],
    sampleItems: [
        { text: "<strong>Surgical Readiness</strong>: WHO pre-incision time-outs and CSSD sterility indicator verification.", icon: "shield-check" },
        { text: "<strong>Nursing Command</strong>: Bedside handover audits, patient ID band checks, and crash-cart seals.", icon: "heart-pulse" },
        { text: "<strong>Infrastructure Vitals</strong>: Oxygen manifold pressure monitoring and generator auto-start logs.", icon: "zap" },
        { text: "<strong>Pharmacy Shield</strong>: Narcotics vault dual-sign access and blood bank cold-chain monitoring.", icon: "pill" },
        { text: "<strong>Biomedical Compliance</strong>: Sharps container fill-level audits and equipment calibration stickers.", icon: "microscope" }
    ],
    checklists: [
        {
            title: "Surgical Safety & CSSD",
            department: "Surgery",
            frequency: "Per Procedure",
            role: "OT In-charge",
            summary: "Zero-fail protocols for operating theater safety and sterility.",
            icon: "shield-check",
            tasks: [
                { id: "H-SUR-01", technicalProtocol: "WHO Surgical Time-Out", floorAction: "Execute verbal pre-incision check: confirm Patient, Site, and Procedure.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Fatal never-event).", proof: "Checklist Sign-off" },
                { id: "H-SUR-02", technicalProtocol: "CSSD Sterility Indicators", floorAction: "Verify chemical indicator tape has changed color on 100% of instrument sets.", priority: "High", riskLevel: "High", consequence: "Post-operative infection and sepsis risk.", proof: "Visual Check" },
                { id: "H-SUR-03", technicalProtocol: "Swab & Needle Count", floorAction: "Perform independent dual-verification of count before wound closure.", priority: "High", riskLevel: "High", consequence: "Retained foreign object in patient body.", proof: "Count Sheet" },
                { id: "H-SUR-04", technicalProtocol: "Anesthesia Leak Test", floorAction: "Verify pressure-hold and alarm function on the workstation.", priority: "High", riskLevel: "High", consequence: "Intra-operative respiratory failure.", proof: "System Log" },
                { id: "H-SUR-05", technicalProtocol: "Pathology Specimen Handover", floorAction: "Witness witnessed seal of specimen jars with two patient identifiers.", priority: "High", riskLevel: "Medium", consequence: "Diagnostic mismatch leading to wrong treatment.", proof: "Handover Log" }
            ]
        },
        {
            title: "Ward & Patient Handover",
            department: "Nursing",
            frequency: "Daily",
            role: "Nursing Superintendent",
            summary: "Institutional rigor for bedside care and medication safety.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-NUR-01", technicalProtocol: "Patient ID Wristband Audit", floorAction: "Confirm 100% of ward patients possess a legible, correct ID wristband.", priority: "High", riskLevel: "High", consequence: "Wrong-patient medication or procedure errors.", proof: "Audit Sheet" },
                { id: "H-NUR-02", technicalProtocol: "Crash Cart Seal Integrity", floorAction: "Verify physical seal number matches the previous shift log; check O2 levels.", priority: "High", riskLevel: "High", consequence: "Resuscitation failure during cardiac arrest.", proof: "Seal Verification" },
                { id: "H-NUR-03", technicalProtocol: "Hand Hygiene Compliance", floorAction: "Observe staff sanitization frequency between patient contacts.", priority: "Medium", riskLevel: "Medium", consequence: "Spread of hospital-acquired infections (HAI).", proof: "Briefing Log" },
                { id: "H-NUR-04", technicalProtocol: "High-Alert Drug Verify", floorAction: "Perform dual-signature verification for Heparin/Insulin administration.", priority: "High", riskLevel: "High", consequence: "Fatal medication double-dosing.", proof: "MAR Audit" },
                { id: "H-NUR-05", technicalProtocol: "Bedside Handover Bridge", floorAction: "Execute 2-minute clinical handover at patient bedside; verify IV sites.", priority: "High", riskLevel: "High", consequence: "Loss of critical patient vitals data between shifts.", proof: "Handover Log" }
            ]
        },
        {
            title: "Pharmacy & Blood Bank",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Pharmacy Lead",
            summary: "Governance for controlled drugs and temperature-sensitive biologicals.",
            icon: "pill",
            tasks: [
                { id: "H-PHM-01", technicalProtocol: "Narcotics Vault Count", floorAction: "Independent double-blind count of all Schedule X and controlled units.", priority: "High", riskLevel: "High", consequence: "Drug diversion and criminal legal liability.", proof: "Dual-Sign Register" },
                { id: "H-PHM-02", technicalProtocol: "Blood Bank Cold-Chain", floorAction: "Log fridge temp for blood and plasma (Target 2°C to 8°C).", priority: "High", riskLevel: "High", consequence: "Biological degradation leading to transfusion reaction.", proof: "Temp Log" },
                { id: "H-PHM-03", technicalProtocol: "Look-Alike (LASA) Segregation", floorAction: "Verify physical separation of drugs with similar packaging or names.", priority: "High", riskLevel: "High", consequence: "Fatal medication mix-up.", proof: "Visual Audit" }
            ]
        },
        {
            title: "MEP & Infrastructure Readiness",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Infrastructure uptime and life-support protection.",
            icon: "zap",
            tasks: [
                { id: "H-ENG-01", technicalProtocol: "Oxygen Manifold Pressure", floorAction: "Log main O2 line pressure and purity (Target > 93%).", priority: "High", riskLevel: "High", consequence: "Patient hypoxia and system failure.", proof: "Purity Log" },
                { id: "H-ENG-02", technicalProtocol: "Generator Auto-Start Simulation", floorAction: "Execute weekly simulation of grid failure; verify start in < 10 seconds.", priority: "High", riskLevel: "High", consequence: "Total infrastructure blackout during critical care.", proof: "Drill Log" },
                { id: "H-ENG-03", technicalProtocol: "Biomedical Calibration Audit", floorAction: "Audit 5 random ventilators/monitors for valid calibration stickers.", priority: "High", riskLevel: "High", consequence: "Inaccurate clinical data leading to wrong decisions.", proof: "Registry Match" },
                { id: "H-ENG-04", technicalProtocol: "Ambulance Readiness Seal", floorAction: "Verify fuel levels and siren/medical equipment status of BLS/ALS fleet.", priority: "High", riskLevel: "High", consequence: "Delayed emergency response and fatality.", proof: "Patrol Log" }
            ]
        }
    ]
};
