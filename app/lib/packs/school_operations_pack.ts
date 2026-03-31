
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
            title: "Student Transport & Bus Safety",
            department: "Transport",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "Zero-fail transit protocols including empty-bus walkthroughs.",
            icon: "bus",
            tasks: [
                { id: "SC-TRA-01", description: "Perform daily pre-trip inspection of all buses (brakes, tires, fuel).", priority: "High", riskLevel: "High", consequence: "Mechanical failure during transit leading to injury.", proof: "Driver Sign-off" },
                { id: "SC-TRA-02", description: "Mandatory 'Empty Bus Walkthrough' at end of every trip.", priority: "High", riskLevel: "High", consequence: "Child left behind in bus (Fatal never-event).", proof: "Secondary Sign-off" },
                { id: "SC-TRA-03", description: "Verify GPS trackers and CCTV inside buses are active.", priority: "High", riskLevel: "High", consequence: "Inability to track bus during emergency.", proof: "System Dashboard" },
                { id: "SC-TRA-04", description: "Check that a female attendant is present on every route.", priority: "High", riskLevel: "High", consequence: "Child protection legal violation.", proof: "Roster Check" },
                { id: "SC-TRA-05", description: "Verify driver sobriety check before the morning shift.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash risk.", proof: "Supervisor Initials" }
            ]
        },
        {
            title: "Campus Security & CCTV",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Perimeter hardening and visitor ID verification.",
            icon: "shield-check",
            tasks: [
                { id: "SC-SEC-01", description: "Audit the visitor register for 100% ID verification compliance.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder gaining access to students.", proof: "Registry Audit" },
                { id: "SC-SEC-02", description: "Test campus-wide fire alarm and PA system.", priority: "High", riskLevel: "High", consequence: "Fatal delay in emergency communication.", proof: "Sound Test" },
                { id: "SC-SEC-03", description: "Confirm CCTV coverage of high-risk 'blind spots' (stairs, back alleys).", priority: "High", riskLevel: "Medium", consequence: "Lack of evidence for bullying or theft incidents.", proof: "Monitor Check" }
            ]
        },
        {
            title: "Canteen & Vendor Quality",
            department: "F&B",
            frequency: "Daily",
            role: "Canteen Manager",
            summary: "HACCP food safety and vendor license auditing.",
            icon: "utensils",
            tasks: [
                { id: "SC-CAN-01", description: "Log morning fridge and freezer temperatures.", priority: "High", riskLevel: "High", consequence: "Foodborne illness outbreak among students.", proof: "Temp Log" },
                { id: "SC-CAN-02", description: "Verify FSSAI license of all incoming fresh food vendors.", priority: "High", riskLevel: "High", consequence: "Legal liability for unsafe sourcing.", proof: "License File" }
            ]
        },
        {
            title: "Admin, Lobby & Fee Command",
            department: "Admin",
            frequency: "Daily",
            role: "Admin Manager",
            summary: "Institutional governance and revenue shield.",
            icon: "landmark",
            tasks: [
                { id: "SC-ADM-01", description: "Audit daily fee collection and deposit reconciliation.", priority: "High", riskLevel: "Medium", consequence: "Financial leakage or embezzlement.", proof: "Cash Log" },
                { id: "SC-ADM-02", description: "Verify availability of admission prospectus and inquiry logs.", priority: "Low", riskLevel: "Low", consequence: "Lost admission opportunities.", proof: "Visual Check" }
            ]
        },
        {
            title: "Digital Command & Marketing",
            department: "Marketing",
            frequency: "Daily",
            role: "Admin Manager",
            summary: "Reputation management and social visibility.",
            icon: "megaphone",
            tasks: [
                { id: "SC-MKT-01", description: "Review Response Pulse: Reply to all Google/Parent portal reviews.", priority: "High", riskLevel: "Medium", consequence: "Damaged institutional reputation.", proof: "Dashboard Check" },
                { id: "SC-MKT-02", description: "Verify daily update of school social media handles with current activities.", priority: "Low", riskLevel: "Low", consequence: "Low brand engagement.", proof: "Social Check" }
            ]
        }
    ]
};
