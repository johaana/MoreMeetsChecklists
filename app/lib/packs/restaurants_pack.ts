
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations Control System (ROCS)",
    category: "Hospitality",
    description: "The definitive governance framework for 5-star restaurant reliability. Includes 150+ technical SOPs, Shift Handovers, and ROI tracking.",
    heroHeadline: "Stop operational leakage and viral food-safety scandals.",
    heroSubheadline: "Built for COOs and Owners who take zero-risk governance and P&L protection seriously.",
    pricingUrgency: "One health department closure or a single 'never event' costs 100x more than this entire system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V4.2 ENTERPRISE",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Owners", "Group COOs", "Multi-Unit Managers", "Executive Chefs"],
    sampleItems: [
        { text: "<strong>Eliminate</strong> memory-dependency with an Interval-Aware 365-day operational matrix.", icon: "calendar-check" },
        { text: "<strong>Protect</strong> margins with an Integrated Incident Log and Estimated Loss tracker.", icon: "banknote" },
        { text: "<strong>Ensure</strong> continuity with a Shift Handover Bridge between Morning and Night teams.", icon: "history" },
        { text: "<strong>Modular Setup</strong>: Toggle Bar, Garden, Valet, and Pool modules on or off instantly.", icon: "layout-grid" },
        { text: "<strong>Harden</strong> compliance with high-risk Verification layers for managers and chefs.", icon: "shield-check" },
        { text: "<strong>Standardize</strong> training with 150+ technical SOPs and expert Trainer's Notes.", icon: "graduation-cap" }
    ],
    checklists: [
        {
            title: "Kitchen Opening (HACCP)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: [
                { id: "KO-01", description: "Log temperatures of all walk-in chillers and freezers.", priority: "High", riskLevel: "High", consequence: "Bacterial growth and total stock loss.", proof: "Digital Temp Log", trainerNotes: "Check the condenser. If hot, call maintenance immediately." },
                { id: "KO-02", description: "Inspect dry storage for signs of rodents or pests.", priority: "High", riskLevel: "High", consequence: "Immediate health department closure.", proof: "Pest Log", trainerNotes: "Check corner junctions and behind bottom shelves." },
                { id: "KO-03", description: "Verify sanitization of all surfaces using 200ppm strips.", priority: "High", riskLevel: "High", consequence: "Cross-contamination of meat pathogens.", proof: "Sanitizer Audit", trainerNotes: "Test strip must match the benchmark on the bottle." },
                { id: "KO-04", description: "Calibrate all food probes using ice-point method.", priority: "High", riskLevel: "Medium", consequence: "False safe readings leading to raw food service.", proof: "Calibration Log", trainerNotes: "Must read 0°C in a 50/50 ice-water slurry." },
                { id: "KO-05", description: "Audit staff health and grooming (nails, wounds, hair).", priority: "High", riskLevel: "High", consequence: "Pathogen transmission to guests.", proof: "Staff Log", trainerNotes: "Any open wound must be blue-bandaged and gloved." }
            ]
        },
        {
            title: "Safety & Compliance Audits",
            department: "Management",
            frequency: "Weekly",
            role: "General Manager",
            summary: "Executive-level verification of safety infrastructure.",
            icon: "shield-check",
            tasks: [
                { id: "SEC-01", description: "Inspect all fire exits for obstructions and functional panic bars.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment in fire emergency.", proof: "Exit Audit Sign-off", trainerNotes: "Ensure no boxes are stored in stairwells." },
                { id: "SEC-02", description: "Full audit of First Aid kits and AED battery status.", priority: "High", riskLevel: "High", consequence: "Inability to respond to guest cardiac event.", proof: "Medical Kit Log", trainerNotes: "Replace any expired dressings immediately." },
                { id: "SEC-03", description: "Review and file statutory licenses (FSSAI, Fire, Health).", priority: "High", riskLevel: "High", consequence: "Legal closure and heavy penalties.", proof: "License Repository Audit", trainerNotes: "Renewals must start 60 days before expiry." }
            ]
        },
        {
            title: "Bar & Spirits Control",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Inventory and hygiene controls for beverage operations.",
            icon: "wine",
            tasks: [
                { id: "BAR-01", description: "Reconcile physical high-value spirit stock against POS opening sales.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue leakage.", proof: "Liquor Inventory Sheet", trainerNotes: "Measure open bottles using a weight scale or jigger." },
                { id: "BAR-02", description: "Clean and sanitize all beer tap lines.", priority: "High", riskLevel: "Medium", consequence: "Bacterial growth and off-flavor beer.", proof: "Cleaning Log", trainerNotes: "Flush with food-grade line cleaner for 15 mins." },
                { id: "BAR-03", description: "Inspect ice machines for mold or scale buildup.", priority: "High", riskLevel: "High", consequence: "Contaminated ice causing guest illness.", proof: "Cleaning Audit", trainerNotes: "Discard ice once a week for deep bin sanitation." }
            ]
        },
        {
            title: "Valet & Parking Security",
            department: "Security",
            frequency: "Daily",
            role: "Security Supervisor",
            summary: "Risk mitigation for third-party assets.",
            icon: "car",
            tasks: [
                { id: "VAL-01", description: "Audit key cabinet security and camera coverage.", priority: "High", riskLevel: "High", consequence: "Unauthorized vehicle removal and liability.", proof: "Key Log Audit", trainerNotes: "Never leave keys on top of the counter." }
            ]
        }
    ]
};
