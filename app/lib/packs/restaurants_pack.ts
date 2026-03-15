
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
            title: "Garden & Outdoor Safety",
            department: "Facilities",
            frequency: "Daily",
            role: "Maintenance",
            summary: "Ensuring guest comfort and safety in outdoor areas.",
            icon: "sprout",
            tasks: [
                { id: "GRD-01", description: "Check all outdoor lighting and paths for trip hazards.", priority: "High", riskLevel: "Medium", consequence: "Guest slip and fall liability.", proof: "Walkthrough Log", trainerNotes: "Focus on uneven tiles or loose wiring in garden beds." },
                { id: "GRD-02", description: "Inspect outdoor furniture for stability and cleanliness.", priority: "Medium", riskLevel: "Low", consequence: "Poor guest experience.", proof: "Visual Check", trainerNotes: "Tighten screws on wooden benches every month." }
            ]
        },
        {
            title: "Valet & Parking Logistics",
            department: "Security",
            frequency: "Daily",
            role: "Valet Supervisor",
            summary: "Secure vehicle handling and key management.",
            icon: "car",
            tasks: [
                { id: "VAL-01", description: "Inventory check of the secure key locker.", priority: "High", riskLevel: "High", consequence: "Unauthorized vehicle access or lost keys.", proof: "Key Inventory Log", trainerNotes: "Locker must be under CCTV coverage at all times." },
                { id: "VAL-02", description: "Verify valet staff driving licenses and uniform grooming.", priority: "High", riskLevel: "High", consequence: "Legal liability and brand damage.", proof: "Staff Roster Audit", trainerNotes: "Breathalyzer test mandatory for night shift starts." }
            ]
        },
        {
            title: "Pool & Water Safety",
            department: "Facilities",
            frequency: "Daily",
            role: "Pool Operator",
            summary: "Chemical and life safety for aquatic facilities.",
            icon: "waves",
            tasks: [
                { id: "POOL-01", description: "Test and log pH and Chlorine levels.", priority: "High", riskLevel: "High", consequence: "Skin irritation or bacterial transmission.", proof: "Water Quality Log", trainerNotes: "Target pH: 7.2 - 7.6. Target Chlorine: 1-3 ppm." },
                { id: "POOL-02", description: "Verify availability of functional lifebuoys and first aid kit.", priority: "High", riskLevel: "High", consequence: "Fatal drowning incident.", proof: "Safety Equipment Audit", trainerNotes: "Ropes must be tangle-free and attached to buoys." }
            ]
        }
    ]
};
