
import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operating System",
    priceINR: 799,
    priceUSD: 9,
    category: "Education",
    description: "No monthly subscriptions. One-time investment for a lifetime of command. Sovereign v4.4 is the safeguard for campus safety.",
    heroHeadline: "Prevent Campus Tragedies and Administrative Chaos",
    heroSubheadline: "Track transport safety, monitor playground risks, and stay in control of student welfare—across 100+ technical points.",
    pricingUrgency: "In education, a single safety 'never event' is an institutional catastrophe.",
    consultingAnchor: 10000,
    icon: "school",
    badgeText: "Safety Critical",
    badgeVariant: "destructive",
    whoIsItFor: ["School Principals", "Trustees", "Heads of Administration", "Transport Managers"],
    sampleItems: [
        { text: "<strong>Transport (Bus) Command</strong>: Mandatory 'Empty Bus Walkthrough' and driver sobriety checks.", icon: "bus" },
        { text: "<strong>CCTV & Perimeter Control</strong>: Security focal point audits and visitor ID verification.", icon: "shield-check" },
        { text: "<strong>Canteen (HACCP)</strong>: Zero-fail hygiene and temperature protocols for student food.", icon: "utensils" },
        { text: "<strong>Lab & Chemical Safety</strong>: Hazardous material storage and PPE availability audits.", icon: "test-tube" },
        { text: "<strong>Medical Room Vitals</strong>: Epi-pen and student allergy matrix tracking.", icon: "heart-pulse" }
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
                { id: "SC-TRA-01", description: "Perform daily pre-trip inspection of all buses (brakes, tires).", priority: "High", riskLevel: "High", consequence: "Accident.", proof: "Driver Sign-off" },
                { id: "SC-TRA-02", description: "Mandatory 'Empty Bus Walkthrough' at end of every trip.", priority: "High", riskLevel: "High", consequence: "Child left behind.", proof: "Secondary Sign-off" },
                { id: "SC-TRA-03", description: "Verify GPS trackers and CCTV inside buses are active.", priority: "High", riskLevel: "High", consequence: "No tracking.", proof: "Dashboard" }
            ]
        }
    ]
};
