
import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operations System",
    priceINR: 3499,
    priceUSD: 49,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c12368-2c26-4e58-b1de-149b80b292e7',
    category: "Education",
    description: "The definitive safety safeguard for educational institutions. Hardening 125 technical control points across POCSO, Transport, and Campus Safety.",
    icon: "school",
    badgeText: "SAFETY CRITICAL",
    badgeVariant: "destructive",
    whoIsItFor: ["Principals", "Trustees", "Transport Managers", "School Nurses"],
    sampleItems: [
        { text: "<strong>Transport Command</strong>: 'No-child-left-behind' walkthroughs and driver sobriety logs.", icon: "bus" },
        { text: "<strong>POCSO Compliance</strong>: Staff vetting, toilet supervision, and blind-spot monitoring.", icon: "shield-check" }
    ],
    checklists: [
        {
            title: "Transport Command",
            department: "Logistics",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "Zero-fail student transportation safety.",
            icon: "bus",
            tasks: [
                { id: "SC-TRA-01", technicalProtocol: "Brake & Tire Audit", floorAction: "Inspect 100% of fleet mechanical vitals.", priority: "High", riskLevel: "High", consequence: "Fatal crash risk.", proof: "Driver Log" },
                { id: "SC-TRA-02", technicalProtocol: "Sobriety Challenge", floorAction: "Random breathalyzer for route drivers.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash.", proof: "Test Note" },
                { id: "SC-TRA-03", technicalProtocol: "Empty Bus Walkthrough", floorAction: "Touch the back-row seat after drop-off.", priority: "High", riskLevel: "High", consequence: "Child left behind (Never-event).", proof: "Check-off" },
                { id: "SC-TRA-04", technicalProtocol: "GPS System Pulse", floorAction: "Verify all units are online and tracking.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to track during crisis.", proof: "System Sync" }
            ]
        },
        {
            title: "Campus Security",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Visitor ID governance and perimeter monitoring.",
            icon: "shield-check",
            tasks: [
                { id: "SC-SEC-01", technicalProtocol: "Visitor ID Capture", floorAction: "Verify 100% entry logging at gate.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry" },
                { id: "SC-SEC-02", technicalProtocol: "Blind-Spot Audit", floorAction: "Check CCTV focal points for corridors.", priority: "High", riskLevel: "Medium", consequence: "Loss of incident evidence.", proof: "Monitor Scan" },
                { id: "SC-SEC-03", technicalProtocol: "Roof & Alley Lockdown", floorAction: "Physically confirm all restricted gates locked.", priority: "High", riskLevel: "High", consequence: "Fall hazard / security breach.", proof: "Patrol Log" }
            ]
        },
        {
            title: "Medical Room",
            department: "Medical",
            frequency: "Daily",
            role: "School Nurse",
            summary: "Student welfare and emergency readiness.",
            icon: "heart-pulse",
            tasks: [
                { id: "SC-MED-01", technicalProtocol: "AED Vitals", floorAction: "Confirm Green status light on machine.", priority: "High", riskLevel: "High", consequence: "Resuscitation failure.", proof: "Daily Log" },
                { id: "SC-MED-02", technicalProtocol: "Epi-pen Inventory", floorAction: "Verify count and expiry of critical allergy meds.", priority: "High", riskLevel: "High", consequence: "Fatal shock response failure.", proof: "Drug Registry" },
                { id: "SC-MED-03", technicalProtocol: "Allergy Matrix Sync", floorAction: "Update red-flag list for today's admissions.", priority: "High", riskLevel: "High", consequence: "Mismatched medical response.", proof: "Matrix File" }
            ]
        }
    ]
};
