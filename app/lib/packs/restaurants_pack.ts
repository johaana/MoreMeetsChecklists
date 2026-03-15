
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
            title: "FOH Ambiance & Ambiance",
            department: "FOH",
            frequency: "Daily",
            role: "Manager",
            summary: "Guest environment and service standards.",
            icon: "sparkles",
            tasks: [
                { id: "FOH-01", description: "Audit restrooms for hygiene and stock (Every 2 hours).", priority: "High", riskLevel: "Medium", consequence: "Primary driver of negative guest reviews.", proof: "Restroom Log", trainerNotes: "Check door handles and light switches specially." },
                { id: "FOH-02", description: "Inspect menu covers for damage or food smudges.", priority: "Medium", riskLevel: "Low", consequence: "Poor brand perception at first touch.", proof: "Menu Check", trainerNotes: "Wipe with microfiber and sanitizing spray daily." },
                { id: "FOH-03", description: "Set lighting dimmers and music volume for shift.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent guest mood/comfort.", proof: "Ambiance Log", trainerNotes: "Dinner setting: Dim 30% from lunch level." },
                { id: "FOH-04", description: "Verify POS connectivity and receipt paper inventory.", priority: "High", riskLevel: "Medium", consequence: "Billing failure during peak hours.", proof: "System Test", trainerNotes: "Keep 2 rolls backup under every terminal." },
                { id: "FOH-05", description: "Check entrance mats for trip hazards/curling.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Visual Check", trainerNotes: "Flatten edges or replace mat if worn." },
                { id: "FOH-06", description: "Audit table settings for alignment and polishing.", priority: "Medium", riskLevel: "Low", consequence: "Unprofessional service presentation.", proof: "Visual Audit", trainerNotes: "Glasses must be steam-polished, no fingerprints." },
                { id: "FOH-07", description: "Test guest Wi-Fi login and speed.", priority: "Medium", riskLevel: "Low", consequence: "Frustrated digital-nomad customers.", proof: "Speed Test", trainerNotes: "If under 10Mbps, restart router before opening." },
                { id: "FOH-08", description: "Inspect air conditioning vents for dust/leaks.", priority: "Medium", riskLevel: "Medium", consequence: "Reduced air quality and visual grime.", proof: "Visual Check", trainerNotes: "Wipe vents weekly during closing." }
            ]
        },
        {
            title: "Bar & Beverage Control",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Quality control and high-value stock protection.",
            icon: "wine",
            tasks: [
                { id: "BAR-01", description: "Reconcile high-value spirits against opening stock.", priority: "High", riskLevel: "High", consequence: "Internal theft and profit erosion.", proof: "Spirit Log", trainerNotes: "Use a weighing scale for open bottles for accuracy." },
                { id: "BAR-02", description: "Check draft beer line pressures and gas levels.", priority: "High", riskLevel: "Medium", consequence: "Excessive foam and product wastage.", proof: "CO2 Log", trainerNotes: "Standard pressure: 12-14 psi." },
                { id: "BAR-03", description: "Sanitize ice machine bin and check for mold/slime.", priority: "High", riskLevel: "High", consequence: "Contaminated ice is a major health risk.", proof: "Ice Audit", trainerNotes: "Empty bin fully every Monday for deep clean." },
                { id: "BAR-04", description: "Backflush coffee machine group heads.", priority: "High", riskLevel: "Medium", consequence: "Bitter coffee and pump failure.", proof: "Cleaning Log", trainerNotes: "Use espresso cleaner powder every night." },
                { id: "BAR-05", description: "Check expiry of fresh juices and garnishes.", priority: "High", riskLevel: "Medium", consequence: "Sour drinks and spoilage risk.", proof: "Label Check", trainerNotes: "Juices stay for only 48 hours once opened." }
            ]
        },
        {
            title: "POS & Financial Reconciliation",
            department: "Accounts",
            frequency: "Daily",
            role: "Manager",
            summary: "Ensures 100% revenue capture and cash safety.",
            icon: "circle-dollar-sign",
            tasks: [
                { id: "POS-01", description: "Reconcile total billings against bank settlements.", priority: "High", riskLevel: "High", consequence: "Uncaptured digital revenue leakage.", proof: "Reconciliation Report", trainerNotes: "Match UPI/Card slips to system summary." },
                { id: "POS-02", description: "Audit 'Voids' and 'Complimentaries' for justification.", priority: "High", riskLevel: "High", consequence: "Staff theft disguised as errors.", proof: "Exception Log", trainerNotes: "Every void requires a manager's signed reason." },
                { id: "POS-03", description: "Verify opening and closing petty cash totals.", priority: "High", riskLevel: "Medium", consequence: "Miscash mismanagement.", proof: "Cash Log", trainerNotes: "Physical count required, no rounding." },
                { id: "POS-04", description: "Inspect card terminals for skimmers/tampering.", priority: "High", riskLevel: "High", consequence: "Customer data breach liability.", proof: "Visual Log", trainerNotes: "Check for loose plastic or off-color parts." },
                { id: "POS-05", description: "Log daily tips and distribution totals.", priority: "Medium", riskLevel: "Low", consequence: "Staff grievances and morale issues.", proof: "Tip Ledger", trainerNotes: "Transparency builds trust." }
            ]
        },
        {
            title: "Safety & EHS Compliance",
            department: "Maintenance",
            frequency: "Weekly",
            role: "Maintenance Lead",
            summary: "Life-safety and infrastructure integrity.",
            icon: "shield-alert",
            tasks: [
                { id: "EHS-01", description: "Test fire alarm manual call points.", priority: "High", riskLevel: "High", consequence: "Catastrophic loss of life in fire.", proof: "System Log", trainerNotes: "Rotate zones each week for testing." },
                { id: "EHS-02", description: "Perform soap test on gas line junctions.", priority: "High", riskLevel: "High", consequence: "Undetected leak and explosion risk.", proof: "Leak Log", trainerNotes: "Apply suds. If bubbles form, shut main valve." },
                { id: "EHS-03", description: "Verify emergency exit battery backup lighting.", priority: "High", riskLevel: "High", consequence: "Panic during a power outage.", proof: "Battery Log", trainerNotes: "Trip the breaker to test auto-activation." },
                { id: "EHS-04", description: "Audit kitchen fire suppression nozzles for grease.", priority: "High", riskLevel: "High", consequence: "System failure during a grease fire.", proof: "Visual Check", trainerNotes: "Wipe nozzles with degreaser every Sunday." },
                { id: "EHS-05", description: "Check fire extinguisher pressure and expiry.", priority: "High", riskLevel: "High", consequence: "Inability to fight small fires.", proof: "Tag Audit", trainerNotes: "Gauge must be in the Green zone." }
            ]
        },
        {
            title: "Nightly Closing & Security",
            department: "Operations",
            frequency: "Daily",
            role: "Manager",
            summary: "Asset protection and fire safety.",
            icon: "moon",
            tasks: [
                { id: "CLOSE-01", description: "Verify all kitchen gas valves are shut manually.", priority: "High", riskLevel: "High", consequence: "Overnight gas buildup and explosion.", proof: "Valve Log", trainerNotes: "Physically turn the handle to 'OFF'." },
                { id: "CLOSE-02", description: "Check that all external doors are double-locked.", priority: "High", riskLevel: "High", consequence: "Premises vulnerable to burglary.", proof: "Security Walk", trainerNotes: "Check the back-door and staff entry specially." },
                { id: "CLOSE-03", description: "Set the security alarm and verify monitoring.", priority: "High", riskLevel: "High", consequence: "Insurance voided if alarm not active.", proof: "Code Log", trainerNotes: "Check for 'Ready' light before entering code." },
                { id: "CLOSE-04", description: "Sweep restrooms to ensure no guests remain.", priority: "High", riskLevel: "High", consequence: "Safety risk if guest locked inside.", proof: "Walk Log", trainerNotes: "Check disabled stalls and storage closets." },
                { id: "CLOSE-05", description: "Verify all high-power appliances are switched off.", priority: "High", riskLevel: "Medium", consequence: "Electrical fire and energy waste.", proof: "Switch Log", trainerNotes: "Exclude fridges and freezers." }
            ]
        }
    ]
};
