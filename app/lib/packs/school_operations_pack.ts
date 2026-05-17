
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
            tasks: Array.from({ length: 40 }, (_, i) => ({
                id: `SC-TRA-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Check brakes, tires, and lights on 100% of fleet.",
                    "Walk to the back row of every bus after student drop-off.",
                    "Verify all bus GPS units are online on dashboard.",
                    "Random breathalyzer checks for all route drivers.",
                    "Confirm presence of female attendant on all junior routes.",
                    "Verify first-aid kit seal and O2 levels in bus.",
                    "Audit bus speed alerts: log any unit >40km/h.",
                    "Verify driver license validity: 30-day pre-expiry alert.",
                    "Inspect bus interior for sharp metal or trash.",
                    "Final pre-trip mechanical sign-off."
                ][i] || "Route safety audit.",
                priority: i < 5 ? "High" : "Medium",
                riskLevel: "High",
                consequence: "Fatal mechanical or child-safety failure.",
                proof: "Driver Log"
            }))
        },
        {
            title: "Campus Security",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Visitor ID governance and blind-spot monitoring.",
            icon: "shield-check",
            tasks: Array.from({ length: 30 }, (_, i) => ({
                id: `SC-SEC-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Verify 100% ID verification and log entry at gate.",
                    "Adjust cameras to cover classroom corridors and lockers.",
                    "Verify attendant presence at entry to student washrooms.",
                    "Confirm all roof and back-alley gates are locked.",
                    "Verify 100% badge compliance for external vendors.",
                    "Breathalyzer test for night shift security team.",
                    "Verify all fire-stairs are clear of debris.",
                    "Final campus strategic closure initials."
                ][i] || "Perimeter security sweep.",
                priority: "High",
                riskLevel: "High",
                consequence: "Unauthorized campus access.",
                proof: "Patrol Log"
            }))
        },
        {
            title: "Medical & Nurse Hub",
            department: "Medical",
            frequency: "Daily",
            role: "School Nurse",
            summary: "Student welfare and emergency readiness.",
            icon: "heart-pulse",
            tasks: Array.from({ length: 25 }, (_, i) => ({
                id: `SC-MED-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Test AED status light (must be Green).",
                    "Verify inventory of critical medications (Epi-pens).",
                    "Remove medical items with <60 days shelf life.",
                    "Log medical fridge temp for insulin/vaccines.",
                    "Verify sharps containers are sealed for pickup.",
                    "Update student allergy red-flag matrix.",
                    "Replenish 10 random campus first aid kits."
                ][i] || "Infirmary inventory check.",
                priority: "High",
                riskLevel: "Medium",
                consequence: "Ineffective emergency response.",
                proof: "Registry"
            }))
        },
        {
            title: "Academic Integrity",
            department: "Management",
            frequency: "Daily",
            role: "Principal",
            summary: "Institutional risk and academic oversight.",
            icon: "crown",
            tasks: Array.from({ length: 30 }, (_, i) => ({
                id: `SC-EXE-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Audit 5 staff files for valid police verification certs.",
                    "Verify CBSE/ICSE board recognition validity.",
                    "Review keywords in parent complaints (7-day cycle).",
                    "Audit cloud-sync status for student performance data.",
                    "Verify syllabus timeline against annual calendar."
                ][i] || "Executive governance check.",
                priority: "High",
                riskLevel: "Medium",
                consequence: "Legal and reputation damage.",
                proof: "Dashboard"
            }))
        }
    ]
};
