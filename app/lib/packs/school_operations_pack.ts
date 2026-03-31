
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
            summary: "Zero-fail transit protocols.",
            icon: "bus",
            tasks: [
                { id: "SCH-TRA-01", description: "Mandatory 'Empty Bus Walkthrough' at end of every trip.", priority: "High", riskLevel: "High", consequence: "Child left behind (Fatal never-event).", proof: "Secondary Sign-off" },
                { id: "SCH-TRA-02", description: "Verify GPS trackers and CCTV inside buses are active.", priority: "High", riskLevel: "High", consequence: "Inability to track bus in emergency.", proof: "System Dashboard" },
                { id: "SCH-TRA-03", description: "Driver Sobriety Check before morning shift.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash risk.", proof: "Breathalyzer Log" }
            ]
        },
        {
            title: "Campus Security & CCTV",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Perimeter hardening and surveillance.",
            icon: "shield-check",
            tasks: [
                { id: "SCH-SEC-01", description: "CCTV Audit: Verify coverage of high-risk 'blind spots'.", priority: "High", riskLevel: "Medium", consequence: "Lack of evidence for bullying/theft.", proof: "Monitor Check" },
                { id: "SCH-SEC-02", description: "Visitor Badge Enforcement: Check 100% ID verification.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit" }
            ]
        },
        {
            title: "Canteen & Vendor Quality",
            department: "F&B",
            frequency: "Daily",
            role: "Canteen Manager",
            summary: "Food safety and supplier integrity.",
            icon: "utensils",
            tasks: [
                { id: "SCH-CAN-01", description: "Log morning fridge temperatures.", priority: "High", riskLevel: "High", consequence: "Mass food poisoning outbreak.", proof: "Temp Log" },
                { id: "SCH-CAN-02", description: "Vendor Audit: Verify FSSAI licenses of daily meat/milk suppliers.", priority: "High", riskLevel: "High", consequence: "Legal liability for unsafe sourcing.", proof: "License File" }
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
                { id: "SCH-ADM-01", description: "Reconcile daily fee collection against bank deposits.", priority: "High", riskLevel: "High", consequence: "Internal cash theft.", proof: "Settlement Log" },
                { id: "SCH-ADM-02", description: "Lobby Grooming: Inspect reception for parent-readiness.", priority: "Low", riskLevel: "Low", consequence: "Poor first impression for prospective parents.", proof: "Visual Check" }
            ]
        },
        {
            title: "Digital Command & Marketing",
            department: "Marketing",
            frequency: "Daily",
            role: "Admin Manager",
            summary: "Reputation and online visibility.",
            icon: "megaphone",
            tasks: [
                { id: "SCH-DIG-01", description: "Review Response: Reply to Google reviews < 24h.", priority: "High", riskLevel: "Medium", consequence: "Reputation drop and lower SEO.", proof: "Review Dashboard" },
                { id: "SCH-DIG-02", description: "Social Presence: Post 1 update on student achievements.", priority: "Low", riskLevel: "Low", consequence: "Low brand engagement.", proof: "Links Audit" }
            ]
        }
    ]
};
