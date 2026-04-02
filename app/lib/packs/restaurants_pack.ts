
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System",
    category: "Hospitality",
    description: "The definitive Sovereign v10.7 engine for multi-unit groups. Hardening 160 technical control points across 8 distinct floor roles.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks: across every branch in your group.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V10.7 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>Owner/COO Command</strong>: High-level visibility into group compliance and profit protection dashboards.", icon: "crown" },
        { text: "<strong>Kitchen Opening (HACCP)</strong>: Zero-fail protocols for temperature, hygiene, and allergen separation.", icon: "sunrise" },
        { text: "<strong>Finance & Cashier Shield</strong>: Unit-level tracking of Revenue, CoGS, and Waste to drive accountability.", icon: "banknote" },
        { text: "<strong>Safety & Asset Protection</strong>: Mandatory closing protocols for gas and electrical banks to prevent overnight disasters.", icon: "shield-check" }
    ],
    checklists: [
        {
            title: "Owner & COO Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Owner / Managing Director",
            summary: "Strategic oversight of group performance and risk.",
            icon: "crown",
            tasks: [
                { id: "RES-EXE-01", description: "Check Team Morale: Look at the 'Empire Mood' score to see if branches are performing well.", priority: "High", riskLevel: "Low", consequence: "Operations will start to slip if staff lose focus.", proof: "Dashboard Snapshot", trainerNotes: "Identify low-performing branches early." },
                { id: "RES-EXE-02", description: "Check Incidents: See if any safety or legal issues from the week are still open.", priority: "High", riskLevel: "High", consequence: "Unresolved issues lead to lawsuits and brand damage.", proof: "Log Audit", trainerNotes: "Ensure every alert has a 'Root Cause' recorded." },
                { id: "RES-EXE-03", description: "Check Delivery Payouts: Compare app commission tiers against your contracts.", priority: "Medium", riskLevel: "Medium", consequence: "Paying too much to delivery platforms (Swiggy/Zomato).", proof: "Payout Note", trainerNotes: "Check tiers every 3 months." },
                { id: "RES-EXE-04", description: "Check Licenses: Verify that FSSAI and Trade licenses are not expiring.", priority: "High", riskLevel: "High", consequence: "Government can shut down your restaurant overnight.", proof: "License Repository", trainerNotes: "Start renewal process 60 days before expiry." },
                { id: "RES-EXE-05", description: "Check Audit Trends: Review where Mystery Auditors found standard failures.", priority: "Medium", riskLevel: "Low", consequence: "Luxury brand image starts to fade.", proof: "Audit Report", trainerNotes: "Share common mistakes with all Chefs." }
            ]
        },
        {
            title: "Kitchen Opening & Food Safety",
            department: "Kitchen",
            frequency: "Daily",
            role: "Executive Chef",
            summary: "Critical food safety and production protocols.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", description: "Check and write down fridge temps: make sure they are between 1°C and 4°C.", priority: "High", riskLevel: "High", consequence: "Food spoils and causes food poisoning.", proof: "Temp Log", trainerNotes: "Check at 8 AM and 8 PM daily." },
                { id: "RES-KIT-02", description: "Clean all counters and surfaces: use a test strip to check if the cleaning spray is strong enough.", priority: "High", riskLevel: "Medium", consequence: "Bacteria spreads between different foods.", proof: "Test Strip", trainerNotes: "Change cleaning water every 2 hours." },
                { id: "RES-KIT-03", description: "Check Food Labels: make sure all prep has a date label and old food is used first.", priority: "High", riskLevel: "High", consequence: "Serving expired food to customers.", proof: "Visual Note", trainerNotes: "Throw away any labels you can't read." },
                { id: "RES-KIT-04", description: "Test Thermometers: put probes in ice water to check they show 0°C exactly.", priority: "High", riskLevel: "Medium", consequence: "Cooking food to the wrong temperature.", proof: "Calibration Log", trainerNotes: "If it shows more than 1 degree off, reset it." },
                { id: "RES-KIT-05", description: "Check if staff have clean nails and hairnets on.", priority: "High", riskLevel: "Medium", consequence: "Hair or dirt falling into the food.", proof: "Briefing Log", trainerNotes: "Wash hands every time you enter the kitchen." }
            ]
        },
        {
            title: "Dining Area & Ambiance",
            department: "Service",
            frequency: "Daily",
            role: "Floor Captain (Shift A)",
            summary: "Ensures the guest area is perfect and hygienic.",
            icon: "armchair",
            tasks: [
                { id: "RES-FLO-01", description: "Check the toilets every hour for cleanliness and toilet paper.", priority: "High", riskLevel: "Low", consequence: "The most common reason for bad guest reviews.", proof: "Hourly Sheet", trainerNotes: "Check if the floor is dry." },
                { id: "RES-FLO-02", description: "Check the music and AC: make sure the volume is right and the room is 23°C.", priority: "Medium", riskLevel: "Low", consequence: "Guests leave early if it's too hot or too loud.", proof: "Daily Log", trainerNotes: "Target temp is 23°C." },
                { id: "RES-FLO-03", description: "Check all tables: make sure they don't wobble and are set correctly.", priority: "Low", riskLevel: "Low", consequence: "Wobbly tables annoy guests immediately.", proof: "Visual Check", trainerNotes: "Check table feet daily." }
            ]
        },
        {
            title: "Bar & Liquor Control",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Protects expensive alcohol and follows legal rules.",
            icon: "glass-water",
            tasks: [
                { id: "RES-BAR-01", description: "Count the bottles and check against sales to stop theft.", priority: "High", riskLevel: "High", consequence: "Staff drinking or stealing expensive liquor.", proof: "Count Sheet", trainerNotes: "Do a random count of 5 items every day." },
                { id: "RES-BAR-02", description: "Clean the ice machine and check for any mold.", priority: "High", riskLevel: "High", consequence: "Contaminated ice causing guest illness.", proof: "Cleaning Log", trainerNotes: "Deep clean the bin weekly." },
                { id: "RES-BAR-03", description: "Check Bar License: ensure the original paper is displayed.", priority: "High", riskLevel: "High", consequence: "Police can raid and shut the bar instantly.", proof: "Visual Check", trainerNotes: "Display must be near the counter." }
            ]
        },
        {
            title: "Delivery & Dispatch",
            department: "Logistics",
            frequency: "Daily",
            role: "Delivery & Logistics Lead",
            summary: "Ensures food reaches the customer hot and safe.",
            icon: "truck",
            tasks: [
                { id: "RES-DEL-01", description: "Check Bag Seals: ensure every delivery bag is stapled or taped shut.", priority: "High", riskLevel: "Medium", consequence: "Tampering or food theft during delivery.", proof: "Visual Audit", trainerNotes: "Use branded safety stickers." },
                { id: "RES-DEL-02", description: "App Price Sync: Make sure prices on Zomato/Swiggy match our menu.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes or legal issues for wrong pricing.", proof: "App Check", trainerNotes: "Check for new menu items daily." },
                { id: "RES-DEL-03", description: "Track Rider Wait: measure how long drivers wait for food.", priority: "Medium", riskLevel: "Low", consequence: "Cold food reaching the customer.", proof: "TAT Log", trainerNotes: "Target wait time is under 5 minutes." }
            ]
        },
        {
            title: "Receiving & Inventory",
            department: "Stores",
            frequency: "Daily",
            role: "Store & Purchase Manager",
            summary: "Stops profit leakage at the delivery gate.",
            icon: "package-search",
            tasks: [
                { id: "RES-STO-01", description: "Check the weighing scales with a 1kg weight to see if they are accurate.", priority: "High", riskLevel: "Medium", consequence: "Suppliers overcharging us for less weight.", proof: "Calibration Log", trainerNotes: "Check scales every morning." },
                { id: "RES-STO-02", description: "Check meat and dairy temp when they arrive: must be below 5°C.", priority: "High", riskLevel: "High", consequence: "Accepting spoiled food that could kill a guest.", proof: "Receiving Log", trainerNotes: "Reject delivery if temp is over 7°C." },
                { id: "RES-STO-03", description: "Verify supplier FSSAI: check the license number on the bill.", priority: "High", riskLevel: "High", consequence: "Buying from illegal, unvetted sources.", proof: "Voucher Audit", trainerNotes: "Only use 'White-List' vendors." }
            ]
        },
        {
            title: "Finance & Cashier Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance & Accounts Head",
            summary: "Profit protection and fraud detection.",
            icon: "banknote",
            tasks: [
                { id: "RES-FIN-01", description: "Match the cash in hand to the daily sales from the computer.", priority: "High", riskLevel: "High", consequence: "Staff stealing cash from the drawer.", proof: "Settlement Log", trainerNotes: "Investigate any gap over ₹100 immediately." },
                { id: "RES-FIN-02", description: "Check why any bills were deleted or changed by the cashier.", priority: "High", riskLevel: "Medium", consequence: "Cashiers hiding stolen money by deleting orders.", proof: "POS Audit", trainerNotes: "Every deleted bill needs a manager's signature." },
                { id: "RES-FIN-03", description: "Weigh the kitchen waste and write down the cost.", priority: "Medium", riskLevel: "Low", consequence: "Chefs being careless with expensive ingredients.", proof: "Waste Ledger", trainerNotes: "Waste should be less than 1% of sales." }
            ]
        },
        {
            title: "Safety & Asset Protection",
            department: "Security",
            frequency: "Daily",
            role: "EHS & Food Safety Officer",
            summary: "Infrastructure hardening against fire and theft.",
            icon: "shield-check",
            tasks: [
                { id: "RES-SEC-01", description: "Check the cameras: make sure the computer is recording and clear.", priority: "High", riskLevel: "High", consequence: "No evidence for insurance if there is a theft.", proof: "System Check", trainerNotes: "Check the date and time on screen." },
                { id: "RES-SEC-02", description: "Test the fire alarm: make sure the panel shows 'Ready'.", priority: "High", riskLevel: "High", consequence: "No warning during a fire.", proof: "Test Log", trainerNotes: "Test one different floor zone every week." },
                { id: "RES-SEC-03", description: "Clear Fire Exits: ensure exit doors are unlocked and paths are empty.", priority: "High", riskLevel: "High", consequence: "Staff and guests trapped inside during a fire.", proof: "Patrol Log", trainerNotes: "Never store delivery boxes in hallways." }
            ]
        }
    ]
};
