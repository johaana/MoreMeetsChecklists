
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operating System",
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The Sovereign v4.4 clinical engine for hospitals and specialized medical centers. Hardening 200+ control points from surgical safety to biomedical waste.",
    heroHeadline: "Zero-Risk Medical Operations. Audit-Ready.",
    heroSubheadline: "Standardize clinical and operational governance across every department in your facility.",
    pricingUrgency: "A single clinical error or one NABH/JCI audit failure costs 1000x more than this system.",
    consultingAnchor: 15000,
    icon: "hospital",
    badgeText: "V4.4 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Admin Directors"],
    sampleItems: [
        { text: "<strong>Clinical Safety (WHO)</strong>: Pre-incision time-outs and dual-verification for high-alert drugs.", icon: "shield-check" },
        { text: "<strong>Nursing & Ward Command</strong>: Bedside handover audits and crash-cart integrity tracking.", icon: "heart-pulse" },
        { text: "<strong>OPD & Diagnostic Logic</strong>: Queue TAT monitoring and doctor arrival parity checks.", icon: "stethoscope" },
        { text: "<strong>Pharmacy & Narcotics</strong>: Strict access logs and double-blind stock counts for controlled drugs.", icon: "pill" },
        { text: "<strong>Billing & Discharge Shield</strong>: TPA pre-auth tracking and unbilled consumable audits.", icon: "banknote" },
        { text: "<strong>Biomedical Waste (EHS)</strong>: Legal compliance for waste segregation and spillage kit readiness.", icon: "recycle" },
        { text: "<strong>Air Ambulance Logistics</strong>: Landing zone safety and flight-medical kit verification.", icon: "plane" },
        { text: "<strong>Security & Perimeter</strong>: Visitor badge enforcement and CCTV focal point audits for drug stores.", icon: "shield" }
    ],
    checklists: [
        {
            title: "Surgical Safety (WHO Standards)",
            department: "Surgery",
            frequency: "Per Procedure",
            role: "Nursing Lead",
            summary: "Zero-fail protocols for the operating theater.",
            icon: "shield-check",
            tasks: [
                { id: "MED-SUR-01", description: "Execute WHO 'Time Out' before every incision.", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery (Fatal never-event).", proof: "Sign-off", trainerNotes: "Whole team must stop and listen." },
                { id: "MED-SUR-02", description: "Verify sterility indicators on all instrument sets.", priority: "High", riskLevel: "High", consequence: "Post-operative infection outbreak.", proof: "Indicator Tape", trainerNotes: "Check color change on internal strip." },
                { id: "MED-SUR-03", description: "Perform independent double-count of all gauze and needles.", priority: "High", riskLevel: "High", consequence: "Retained surgical item (Lawsuit).", proof: "Sponge Log", trainerNotes: "Count before, during, and after." },
                { id: "MED-SUR-04", description: "Verify functioning of backup UPS for anesthesia monitors.", priority: "High", riskLevel: "High", consequence: "Monitor failure during critical moment.", proof: "Battery Test" },
                { id: "MED-SUR-05", description: "Confirm identity of patient using two identifiers (Name/MRN).", priority: "High", riskLevel: "High", consequence: "Operating on the wrong person.", proof: "Wristband Check" },
                { id: "MED-SUR-06", description: "Audit surgical site marking visibility after draping.", priority: "High", riskLevel: "High", consequence: "Confusion over incision point.", proof: "Visual Confirmation" },
                { id: "MED-SUR-07", description: "Log administration of prophylactic antibiotics <60 mins pre-incision.", priority: "Medium", riskLevel: "Medium", consequence: "Increased SSI (Infection) rate.", proof: "MAR Entry" },
                { id: "MED-SUR-08", description: "Verify status of suction pumps and oxygen flow-meters.", priority: "High", riskLevel: "High", consequence: "Inability to clear airway during emergency.", proof: "Daily Test" },
                { id: "MED-SUR-09", description: "Check availability of emergency 'Crash Cart' outside OT.", priority: "High", riskLevel: "High", consequence: "Resuscitation failure.", proof: "Seal Check" },
                { id: "MED-SUR-10", description: "Audit OT air-pressure (Positive Pressure) and humidity levels.", priority: "High", riskLevel: "High", consequence: "Airborne bacterial contamination.", proof: "BMS Reading" },
                { id: "MED-SUR-11", description: "Verify biopsy specimen labeling matches patient MRN exactly.", priority: "High", riskLevel: "High", consequence: "Mismatched lab reports.", proof: "Specimen Log" },
                { id: "MED-SUR-12", description: "Check OT-scrub area for automated water-flow and soap stock.", priority: "Medium", riskLevel: "Low", consequence: "Breach in aseptic technique.", proof: "Visual Check" },
                { id: "MED-SUR-13", description: "Inspect OT tables for mechanical stability and locking.", priority: "High", riskLevel: "Medium", consequence: "Patient fall or positioning error.", proof: "Physical Check" },
                { id: "MED-SUR-14", description: "Verify functioning of C-Arm or Imaging gear (if applicable).", priority: "Medium", riskLevel: "Low", consequence: "Surgical delay.", proof: "System Test" },
                { id: "MED-SUR-15", description: "Log terminal cleaning of OT after procedure completion.", priority: "High", riskLevel: "High", consequence: "Cross-infection between cases.", proof: "Cleaning Log" }
            ]
        }
    ]
};
