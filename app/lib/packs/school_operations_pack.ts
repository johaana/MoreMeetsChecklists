
import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c12368-2c26-4e58-b1de-149b80b292e7',
    category: "Education",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.4 is the safety safeguard for educational institutions.",
    heroHeadline: "Prevent Campus Tragedies and Administrative Chaos",
    heroSubheadline: "Track transport safety, monitor playground risks, and stay in control of student welfare—across 100+ technical points.",
    pricingUrgency: "In education, a single safety 'never event' isn't just expensive—it's an institutional catastrophe. This system is the safeguard.",
    consultingAnchor: 10000,
    icon: "school",
    badgeText: "Safety Critical",
    badgeVariant: "destructive",
    whoIsItFor: ["School Principals", "Trustees & Board Members", "Heads of Administration", "Transport Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Safety Pulse</strong>: Bus drivers, wardens, and admin staff update status in seconds. Zero-friction reporting.", icon: "timer" },
        { text: "<strong>Transport Command</strong>: Bulletproof protocols for bus maintenance, student drop-offs, and 'no-child-left-behind' walkthroughs.", icon: "bus" },
        { text: "<strong>Visitor Governance</strong>: Strict, logged verification for every individual entering the campus to harden your perimeter.", icon: "shield-check" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show Principals exactly what needs immediate sign-off.", icon: "target" },
        { text: "<strong>Institutional Memory</strong>: Capture expert knowledge so new staff are safety-ready and compliant from Day 1.", icon: "history" },
        { text: "<strong>Parent Risk Shield</strong>: Track incidents that trigger complaints or legal threats to harden your defense.", icon: "shield-alert" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your institutional data forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Student Transport & Safety",
            department: "Transport",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "Ensures the safe transportation of all students and zero-fail attendance.",
            icon: "bus",
            tasks: [
                { id: "SCH-TRA-01", description: "Mandatory 'Empty Bus Walkthrough' at end of every trip.", priority: "High", riskLevel: "High", consequence: "Child left behind in bus (Fatal never-event).", proof: "Secondary Sign-off", trainerNotes: "Physically touch the back seat." },
                { id: "SCH-TRA-02", description: "Perform daily pre-trip inspection of brakes and tires.", priority: "High", riskLevel: "High", consequence: "Mechanical failure during transit.", proof: "Driver Sign-off", trainerNotes: "Check tire pressure manually." },
                { id: "SCH-TRA-03", description: "Verify functioning of GPS trackers and internal bus CCTV.", priority: "High", riskLevel: "High", consequence: "Inability to track bus during emergency.", proof: "System Dashboard" },
                { id: "SCH-TRA-04", description: "Check that a female attendant is present on every route.", priority: "High", riskLevel: "High", consequence: "Legal violation and child protection risk.", proof: "Roster Check" },
                { id: "SCH-TRA-05", description: "Verify driver sobriety check before morning shift.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash risk.", proof: "Breathalyzer Log" },
                { id: "SCH-TRA-06", description: "Audit bus speed alerts from GPS dashboard (Target <40km/h).", priority: "Medium", riskLevel: "Medium", consequence: "Rash driving and accident liability.", proof: "Daily Report" },
                { id: "SCH-TRA-07", description: "Ensure first-aid kits and fire extinguishers in buses are functional.", priority: "High", riskLevel: "High", consequence: "Inability to respond to a fire event.", proof: "Seal Verification" },
                { id: "SCH-TRA-08", description: "Verify all student pick-up authorizations match ID cards.", priority: "High", riskLevel: "High", consequence: "Unauthorized removal of child.", proof: "Verification Log" },
                { id: "SCH-TRA-09", description: "Check status of bus emergency windows and exit latches.", priority: "High", riskLevel: "High", consequence: "Trapped students during fire.", proof: "Physical Test" },
                { id: "SCH-TRA-10", description: "Audit bus-cleaning logs: verify disinfection of high-touch poles.", priority: "Medium", riskLevel: "Low", consequence: "Disease spread among students.", proof: "Cleaning Log" },
                { id: "SCH-TRA-11", description: "Verify driver and conductor possess valid licenses.", priority: "High", riskLevel: "High", consequence: "Massive institutional liability.", proof: "License File" },
                { id: "SCH-TRA-12", description: "Log student boarding/de-boarding times via tablet sync.", priority: "Medium", riskLevel: "Low", consequence: "Administrative confusion.", proof: "App Sync" },
                { id: "SCH-TRA-13", description: "Inspect bus exterior for sharp edges or loose panels.", priority: "Medium", riskLevel: "Low", consequence: "Minor student injury.", proof: "Visual Audit" },
                { id: "SCH-TRA-14", description: "Verify communication radio/mobile status for each driver.", priority: "High", riskLevel: "Medium", consequence: "No contact during breakdown.", proof: "Signal Check" },
                { id: "SCH-TRA-15", description: "Final manager sign-off on afternoon route dispatch.", priority: "High", riskLevel: "Medium", consequence: "Operational drift.", proof: "Manager Initials" }
            ]
        }
    ]
};
