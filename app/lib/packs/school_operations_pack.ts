
import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c12368-2c26-4e58-b1de-149b80b292e7',
    category: "Education",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the safety safeguard for educational institutions.",
    heroHeadline: "Prevent Campus Tragedies and Administrative Chaos",
    heroSubheadline: "Track bus safety, monitor playground risks, and stay in control of student welfare—even when you aren't on campus.",
    pricingUrgency: "In education, a single safety 'never event' isn't just expensive—it's an institutional catastrophe. This system is the safeguard.",
    consultingAnchor: 10000,
    icon: "school",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["School Principals", "Trustees & Board Members", "Heads of Administration", "Transport Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Safety Pulse</strong>: Bus drivers, wardens, and admin staff update status in seconds. Zero-friction reporting.", icon: "timer" },
        { text: "<strong>Transport Command</strong>: Bulletproof protocols for bus maintenance, student drop-offs, and 'no-child-left-behind' walkthroughs.", icon: "bus" },
        { text: "<strong>Visitor Governance</strong>: Strict, logged verification for every individual entering the campus to harden your perimeter.", icon: "shield-check" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show Principals exactly what needs immediate sign-off—from labs to playgrounds.", icon: "target" },
        { text: "<strong>Institutional Memory</strong>: Capture expert knowledge so new teachers and staff are safety-ready and compliant from Day 1.", icon: "history" },
        { text: "<strong>Compliance Engine</strong>: Align your institution with fire safety, hygiene, and local educational regulatory standards automatically.", icon: "file-check" },
        { text: "<strong>Campus Resilience</strong>: Manage infrastructure, electrical, and water safety audits to prevent preventable accidents.", icon: "zap" }
    ],
    checklists: [
        {
            title: "Student Transport & Safety",
            department: "Transport",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "A comprehensive checklist to ensure the safe transportation of all students.",
            icon: "bus",
            tasks: [
                { id: "TRAN-01", description: "Perform daily pre-trip inspection of the bus (brakes, tires, lights).", priority: "High", riskLevel: "High", consequence: "A mechanical failure during a trip can lead to a serious accident.", proof: "Pre-trip Checklist" },
                { id: "TRAN-02", description: "Ensure the GPS tracker and CCTV inside the bus are functional.", priority: "High", riskLevel: "High", consequence: "In an emergency or for a complaint, this provides crucial evidence and tracking.", proof: "System Health Check" },
                { id: "TRAN-03", description: "Verify driver and conductor have valid licenses and IDs.", priority: "High", riskLevel: "High", consequence: "Using an unlicensed driver is a major legal and safety violation.", proof: "ID Check Log" },
                { id: "TRAN-04", description: "Check that a female attendant is present on every bus route.", priority: "High", riskLevel: "High", consequence: "A mandatory safety requirement in many jurisdictions to protect children.", proof: "Attendance Log" },
                { id: "TRAN-05", description: "Perform a mandatory walkthrough of the bus at the end of each trip to ensure no child is left behind.", priority: "High", riskLevel: "High", consequence: "Failure can lead to a child being locked in the bus, a potentially fatal 'never event'.", proof: "Post-trip Clearance Log" },
                { id: "TRAN-06", description: "Ensure first-aid kit is available and stocked in every bus.", priority: "High", riskLevel: "Medium", consequence: "Inability to provide basic first aid for injuries during transit.", proof: "First-Aid Kit Log" },
                { id: "TRAN-07", description: "Monitor bus speed and route adherence through GPS tracking.", priority: "High", riskLevel: "Medium", consequence: "Helps to curb rash driving and unauthorized route deviations.", proof: "GPS Report" },
                { id: "TRAN-08", description: "Train drivers and attendants on emergency procedures.", priority: "High", riskLevel: "High", consequence: "An untrained crew can cause panic and confusion in an emergency.", proof: "Training Records" },
                { id: "TRAN-09", description: "Maintain a log of all student drop-offs and pickups.", priority: "High", riskLevel: "High", consequence: "Crucial for accountability and investigating any disputes about pickups.", proof: "Drop-off Log" },
                { id: "TRAN-10", description: "Conduct regular maintenance of all buses.", priority: "High", riskLevel: "High", consequence: "Prevents breakdowns and ensures the fleet is safe.", proof: "Maintenance Records" }
            ]
        }
    ]
};
