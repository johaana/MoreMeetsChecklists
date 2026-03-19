
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
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the safety safeguard for educational institutions.",
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
                { id: "SC-TRA-01", description: "Perform daily pre-trip inspection of all buses (brakes, tires, fuel).", priority: "High", riskLevel: "High", consequence: "Mechanical failure during transit leading to injury.", proof: "Driver Sign-off", trainerNotes: "Check tire pressure manually." },
                { id: "SC-TRA-02", description: "Verify GPS trackers and CCTV inside buses are active.", priority: "High", riskLevel: "High", consequence: "Inability to track bus during emergency or investigate complaints.", proof: "System Dashboard", trainerNotes: "Sync with mobile app." },
                { id: "SC-TRA-03", description: "Mandatory 'Empty Bus Walkthrough' at end of every trip.", priority: "High", riskLevel: "High", consequence: "Child left behind in bus (Fatal never-event).", proof: "Secondary Sign-off", trainerNotes: "Physically touch the back seat." },
                { id: "SC-TRA-04", description: "Check that a female attendant is present on every route.", priority: "High", riskLevel: "High", consequence: "Legal violation and child protection risk.", proof: "Roster Check", trainerNotes: "Verify uniform and ID." },
                { id: "SC-TRA-05", description: "Verify driver and conductor possess valid, in-date licenses.", priority: "High", riskLevel: "High", consequence: "Massive institutional liability and insurance denial.", proof: "License File", trainerNotes: "Check expiry 30 days early." },
                { id: "SC-TRA-06", description: "Log bus speed alerts and rash driving instances.", priority: "Medium", riskLevel: "Medium", consequence: "Increased accident risk and parent complaints.", proof: "GPS Report", trainerNotes: "Maximum speed limit: 40km/h." },
                { id: "SC-TRA-07", description: "Ensure first-aid kits and fire extinguishers in buses are stocked.", priority: "High", riskLevel: "High", consequence: "Inability to respond to a fire or medical event.", proof: "Seal Verification", trainerNotes: "Check pressure gauges." },
                { id: "SC-TRA-08", description: "Track student boarding/de-boarding times.", priority: "Medium", riskLevel: "Low", consequence: "Administrative confusion during parent inquiries.", proof: "Tablet Sync", trainerNotes: "Real-time updates only." },
                { id: "SC-TRA-09", description: "Verify driver sobriety check before the morning shift.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash risk.", proof: "Supervisor Initials", trainerNotes: "Breathalyzer test mandatory." },
                { id: "SC-TRA-10", description: "Confirm all student pick-up authorizations match ID cards.", priority: "High", riskLevel: "High", consequence: "Kidnapping or unauthorized removal of child.", proof: "Verification Log", trainerNotes: "Scan original ID card only." }
            ]
        },
        {
            title: "Campus Security & Visitor Control",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the school perimeter against unauthorized access.",
            icon: "shield-check",
            tasks: [
                { id: "SC-SEC-01", description: "Audit the visitor register for 100% ID verification compliance.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder gaining access to students.", proof: "Registry Audit", trainerNotes: "Retain ID at gate." },
                { id: "SC-SEC-02", description: "Verify all gate locks and perimeter fence integrity.", priority: "High", riskLevel: "High", consequence: "Perimeter breach.", proof: "Walkthrough", trainerNotes: "Check for holes in wire mesh." },
                { id: "SC-SEC-03", description: "Test campus-wide fire alarm and PA system.", priority: "High", riskLevel: "High", consequence: "Fatal delay in emergency communication.", proof: "Sound Test", trainerNotes: "Conduct before school hours." },
                { id: "SC-SEC-04", description: "Confirm CCTV coverage of high-risk 'blind spots' (stairs, back alleys).", priority: "High", riskLevel: "Medium", consequence: "Lack of evidence for bullying or theft incidents.", proof: "Monitor Check", trainerNotes: "Check DVR recording status." },
                { id: "SC-SEC-05", description: "Enforce 'No Entry Without Badge' policy for all staff/vendors.", priority: "Medium", riskLevel: "Low", consequence: "Unidentified persons on campus.", proof: "Visual Audit", trainerNotes: "Badges must be chest-high." }
            ]
        }
    ]
};
