
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations Control System (ROCS)",
    category: "Hospitality",
    description: "The definitive governance framework for 5-star restaurant reliability. Includes 140+ technical SOPs, Shift Handovers, and ROI tracking.",
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
    badgeText: "V4.0 CERTIFIED",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Owners", "Group COOs", "Multi-Unit Managers", "Executive Chefs"],
    sampleItems: [
        { text: "<strong>Eliminate</strong> memory-dependency with an Interval-Aware 365-day operational matrix.", icon: "calendar-check" },
        { text: "<strong>Protect</strong> margins with an Integrated Incident Log and Estimated Loss tracker.", icon: "banknote" },
        { text: "<strong>Ensure</strong> continuity with a Shift Handover Bridge between Morning and Night teams.", icon: "history" },
        { text: "<strong>Prove</strong> value with an ROI Calculator that quantifies prevented operational leakage.", icon: "trending-up" },
        { text: "<strong>Harden</strong> compliance with high-risk Verification layers for managers and chefs.", icon: "shield-check" },
        { text: "<strong>Standardize</strong> training with 140+ technical SOPs and expert Trainer's Notes.", icon: "graduation-cap" }
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
                { id: "KO-05", description: "Audit staff health and grooming (nails, wounds, hair).", priority: "High", riskLevel: "High", consequence: "Pathogen transmission to guests.", proof: "Staff Log", trainerNotes: "Any open wound must be blue-bandaged and gloved." },
                { id: "KO-06", description: "Check dishwashing machine final rinse temperature.", priority: "High", riskLevel: "High", consequence: "Unsanitized cutlery reaching guests.", proof: "Dishwasher Log", trainerNotes: "Final rinse must reach 82°C for thermal kill." },
                { id: "KO-07", description: "Verify vegetable wash chemical titration.", priority: "High", riskLevel: "Medium", consequence: "Ingestion of soil-borne pathogens.", proof: "Chemical Log", trainerNotes: "50ppm chlorine soak for 5 mins minimum." },
                { id: "KO-08", description: "Audit 'Use-By' labels on all prepped ingredients.", priority: "High", riskLevel: "High", consequence: "Serving spoiled or toxic food.", proof: "Label Audit", trainerNotes: "No label = No use. Discard immediately." },
                { id: "KO-09", description: "Inspect grease traps for overflow or blockages.", priority: "Medium", riskLevel: "Low", consequence: "Drainage failure and foul odors in service.", proof: "Maintenance Log", trainerNotes: "Scrape solid fats into solid waste only." },
                { id: "KO-10", description: "Secure knife locker and verify tool inventory.", priority: "High", riskLevel: "Medium", consequence: "On-site accidents or weapon risk.", proof: "Tool Audit", trainerNotes: "Missing knives must be reported to the GM instantly." },
                { id: "KO-11", description: "Test fire suppression system pressure gauge.", priority: "High", riskLevel: "High", consequence: "Uncontrolled kitchen fire.", proof: "Gauge Check", trainerNotes: "Must be in the Green zone." },
                { id: "KO-12", description: "Check first-aid kit for burn gel and bandages.", priority: "Medium", riskLevel: "Medium", consequence: "Untreated workplace injuries.", proof: "Kit Audit", trainerNotes: "Replenish used items before shift starts." }
            ]
        },
        {
            title: "Equipment Deep-Care",
            department: "Kitchen",
            frequency: "Monthly",
            role: "Maintenance Lead",
            summary: "Infrastructure longevity and safety.",
            icon: "wrench",
            tasks: [
                { id: "EQ-01", description: "Descale combi-ovens and steamers.", priority: "Medium", riskLevel: "Medium", consequence: "Heating element failure and high repair cost.", proof: "Service Log", trainerNotes: "Use approved descaling tablets only." },
                { id: "EQ-02", description: "Clean refrigerator condenser coils.", priority: "High", riskLevel: "High", consequence: "Compressor burnout and food spoilage.", proof: "Visual Audit", trainerNotes: "Vacuum dust away from fins; do not bend them." },
                { id: "EQ-03", description: "Verify calibration of gas oven thermostats.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent bake quality and gas waste.", proof: "Calibration Certificate", trainerNotes: "Use an independent oven thermometer to verify." },
                { id: "EQ-04", description: "Lubricate mixer gear systems.", priority: "Medium", riskLevel: "Low", consequence: "Motor seizure during peak prep.", proof: "Maintenance Log", trainerNotes: "Use food-grade grease only." },
                { id: "EQ-05", description: "Inspect electrical cords for fraying or heat damage.", priority: "High", riskLevel: "High", consequence: "Electrical fire or staff electrocution.", proof: "Visual Check", trainerNotes: "Focus on high-wattage equipment like fryers." }
            ]
        },
        {
            title: "Training & Compliance Audit",
            department: "Management",
            frequency: "Monthly",
            role: "Owner",
            summary: "Governance and skills verification.",
            icon: "graduation-cap",
            tasks: [
                { id: "TR-01", description: "Audit 5 staff members on Allergen Awareness.", priority: "High", riskLevel: "High", consequence: "Fatal guest reaction and legal shutdown.", proof: "Quiz Scorecards", trainerNotes: "Ask them to identify the 14 major allergens." },
                { id: "TR-02", description: "Verify FSSAI license validity and display.", priority: "High", riskLevel: "High", consequence: "Immediate sealing of premises by authorities.", proof: "License Photo", trainerNotes: "Ensure it is displayed at the entrance." },
                { id: "TR-03", description: "Review latest Pest Control report and action open points.", priority: "High", riskLevel: "High", consequence: "Infestation growth and health risk.", proof: "Closed PCR", trainerNotes: "Walk the perimeter with the technician next time." },
                { id: "TR-04", description: "Conduct a surprise 'Emergency Call' to the ambulance provider.", priority: "High", riskLevel: "High", consequence: "Delayed medical response in a crisis.", proof: "Call Log", trainerNotes: "Verify they have the correct address/landmark." },
                { id: "TR-05", description: "Audit 10 random bills for 'Service Charge' or 'Tax' errors.", priority: "Medium", riskLevel: "High", consequence: "Regulatory fines and customer litigation.", proof: "Audit Sheet", trainerNotes: "Check against the latest tax slabs." }
            ]
        }
    ]
};
