
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System",
    category: "Hospitality",
    description: "The definitive Sovereign v10.5 engine for multi-unit food and beverage groups. Hardening 160 technical control points from Owner vision to kitchen hygiene.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks: across every branch in your group.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V10.5 SOVEREIGN",
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
                { id: "RES-EXE-05", description: "Check Audit Trends: Review where Mystery Auditors found standard failures.", priority: "Medium", riskLevel: "Low", consequence: "Luxury brand image starts to fade.", proof: "Audit Report", trainerNotes: "Share common mistakes with all Chefs." },
                { id: "RES-EXE-06", description: "Check Management Presence: Verify if GMs were on the floor during peak hours.", priority: "Low", riskLevel: "Low", consequence: "Managers become disconnected from the customer experience.", proof: "Roster Review", trainerNotes: "GMs must be on floor for peak Fri/Sat shifts." },
                { id: "RES-EXE-07", description: "Check Fire Safety: Verify that all fire safety contracts (AMCs) are active.", priority: "High", riskLevel: "High", consequence: "Extreme life safety risk during a fire.", proof: "NOC Certificate", trainerNotes: "Only use authorized safety vendors." },
                { id: "RES-EXE-08", description: "Check Labor Cost: Verify if daily labor cost % is within the budget.", priority: "Medium", riskLevel: "Medium", consequence: "Profit disappears due to over-staffing.", proof: "Labor Report", trainerNotes: "Target labor cost should be 15-18% of sales." },
                { id: "RES-EXE-09", description: "Check Insurance: Ensure Public Liability insurance is active.", priority: "High", riskLevel: "High", consequence: "Financial ruin if a major accident happens.", proof: "Policy File", trainerNotes: "Check for 'Business Interruption' clauses." },
                { id: "RES-EXE-10", description: "Check Menu Performance: Review which items are making profit vs those that aren't.", priority: "Low", riskLevel: "Low", consequence: "Keeping unprofitable items on the menu slows down the kitchen.", proof: "Matrix Report", trainerNotes: "Remove bottom 10% of items every 3 months." },
                { id: "RES-EXE-11", description: "Check Staff Complaints: Verify that all employee issues are being handled.", priority: "High", riskLevel: "Medium", consequence: "Bad work culture leads to high turnover and lawsuits.", proof: "HR Dashboard", trainerNotes: "Target resolution in less than 7 days." },
                { id: "RES-EXE-12", description: "Check Asset Tags: Ensure all new equipment has a physical ID tag.", priority: "Low", riskLevel: "Low", consequence: "Equipment goes missing or gets stolen without tracking.", proof: "Asset Log", trainerNotes: "Tag every item over $200 in value." },
                { id: "RES-EXE-13", description: "Check Project Money: Review spending on renovations or new builds.", priority: "Medium", riskLevel: "Medium", consequence: "Renovations go over budget without oversight.", proof: "CAPEX Ledger", trainerNotes: "Request site photos for every 25% of progress." },
                { id: "RES-EXE-14", description: "Check Guest Feedback: Review what people are saying on Google and Yelp.", priority: "High", riskLevel: "Low", consequence: "Fewer new customers if ratings drop.", proof: "CSAT Dashboard", trainerNotes: "Focus on why people gave 1-star reviews." },
                { id: "RES-EXE-15", description: "Check Loyalty Costs: Review how much money is given away in discounts.", priority: "Medium", riskLevel: "Low", consequence: "Giving away too much profit in freebies.", proof: "CRM Report", trainerNotes: "Total discounts must stay below 5% of gross sales." },
                { id: "RES-EXE-16", description: "Check Fire Drills: Verify that all staff know what to do in a fire.", priority: "High", riskLevel: "High", consequence: "Staff panic and accidents during a real emergency.", proof: "Drill Log", trainerNotes: "Conduct a surprise drill every 90 days." },
                { id: "RES-EXE-17", description: "Check Electricity Use: Compare current bill against the average.", priority: "Low", riskLevel: "Low", consequence: "Unchecked AC or light usage wasting money.", proof: "Utility Tracker", trainerNotes: "Check if AC is left on after closing." },
                { id: "RES-EXE-18", description: "Check Petty Cash: Conduct a surprise count of small cash on hand.", priority: "Medium", riskLevel: "High", consequence: "Small-scale theft that adds up to big losses.", proof: "Audit Log", trainerNotes: "Do one surprise blind count per month." },
                { id: "RES-EXE-19", description: "Check Delivery Dispatch: Make sure orders sent match orders billed.", priority: "Medium", riskLevel: "Low", consequence: "Losing money on 'Cancelled' orders that were actually sent.", proof: "Match Note", trainerNotes: "Flag any suspicious cancellations instantly." },
                { id: "RES-EXE-20", description: "Weekly Strategy Sign-off.", priority: "High", riskLevel: "Low", consequence: "Management loses control of the big picture.", proof: "Signed Summary", trainerNotes: "Keep a digital copy for the monthly board report." }
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
                { id: "RES-KIT-05", description: "Separate Allergens: keep nuts and other allergens away from other food.", priority: "High", riskLevel: "High", consequence: "A customer could have a fatal allergic reaction.", proof: "Walkthrough Note", trainerNotes: "Use separate boards and knives for allergens." },
                { id: "RES-KIT-06", description: "Check Dishwasher Heat: make sure the rinse water reaches 82°C.", priority: "High", riskLevel: "High", consequence: "Germs stay on plates and glasses.", proof: "Dish Log", trainerNotes: "Rinse must hit 82°C to sanitize." },
                { id: "RES-KIT-07", description: "Check if staff have clean nails and hairnets on.", priority: "High", riskLevel: "Medium", consequence: "Hair or dirt falling into the food.", proof: "Briefing Log", trainerNotes: "Wash hands every time you enter the kitchen." },
                { id: "RES-KIT-08", description: "Check Drain Traps: make sure grease traps aren't full or smelling.", priority: "Medium", riskLevel: "Low", consequence: "Kitchen floods or smells like sewage.", proof: "Cleaning Note", trainerNotes: "Clean professionally every 15 days." },
                { id: "RES-KIT-09", description: "Check Delivery Temps: make sure fresh meat arriving is colder than 5°C.", priority: "High", riskLevel: "High", consequence: "Accepting food that has already started to spoil.", proof: "Receiving Log", trainerNotes: "Reject the delivery if it's over 7°C." },
                { id: "RES-KIT-10", description: "Speed Check: track how long it takes for a guest to get their food.", priority: "Medium", riskLevel: "Low", consequence: "Guests get angry and don't come back.", proof: "KDS Report", trainerNotes: "Starters should be served in under 12 minutes." },
                { id: "RES-KIT-11", description: "Wash Vegetables: check the chlorine level in the vegetable wash sink.", priority: "High", riskLevel: "Medium", consequence: "Bacteria on raw salads causing illness.", proof: "Wash Log", trainerNotes: "Use 50ppm for all leafy greens." },
                { id: "RES-KIT-12", description: "Check AC Vents: look up at the vents to make sure no dust is falling.", priority: "High", riskLevel: "Medium", consequence: "Dust or paint flakes falling into open food.", proof: "Visual Check", trainerNotes: "Wipe the vents once a week." },
                { id: "RES-KIT-13", description: "Thaw Food Safely: defrost food in the fridge, never on a counter.", priority: "High", riskLevel: "High", consequence: "Bacteria grows fast on the outside of frozen food.", proof: "Thaw Log", trainerNotes: "Plan ahead: most meat needs 24h in the fridge." },
                { id: "RES-KIT-14", description: "Check Bin Lids: make sure all bin lids work with the foot pedal.", priority: "Medium", riskLevel: "Low", consequence: "Flies and pests are attracted to open bins.", proof: "Visual Audit", trainerNotes: "Empty the bins when they are 75% full." },
                { id: "RES-KIT-15", description: "Check Knives: make sure all kitchen knives are sharp and safe.", priority: "Low", riskLevel: "Medium", consequence: "Dull knives lead to more cuts and accidents.", proof: "Visual Check", trainerNotes: "Sharpen knives every 4 hours of use." },
                { id: "RES-KIT-16", description: "Off-Floor Storage: make sure all food is at least 6 inches off the ground.", priority: "Medium", riskLevel: "Low", consequence: "Pests can hide or nest under boxes on the floor.", proof: "Walkthrough", trainerNotes: "No wooden pallets allowed in food prep areas." },
                { id: "RES-KIT-17", description: "Fly Killers: check if the sticky pads in the fly-zappers are full.", priority: "Medium", riskLevel: "Low", consequence: "Flies landing on prepared food.", proof: "Pest Log", trainerNotes: "Change the UV bulbs every 6 months." },
                { id: "RES-KIT-18", description: "Save Food Samples: keep a small cup of cooked food in the locker.", priority: "High", riskLevel: "High", consequence: "No proof if someone claims your food made them sick.", proof: "Sample Log", trainerNotes: "Keep 100g of main items for 72 hours." },
                { id: "RES-KIT-19", description: "Gas Leak Test: rub soapy water on pipe joints to check for bubbles.", priority: "High", riskLevel: "High", consequence: "Small leaks turn into big explosions.", proof: "Maint Note", trainerNotes: "Don't just wait for a smell; test the joints." },
                { id: "RES-KIT-20", description: "Shut Down Gas: turn the main gas valve off before leaving.", priority: "High", riskLevel: "High", consequence: "Overnight fire risk if a burner is left on.", proof: "Closure Log", trainerNotes: "Turn the main yellow handle 90 degrees." }
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
                { id: "RES-FIN-01", description: "Match Cash to Sales: make sure the money in the bank matches the POS.", priority: "High", riskLevel: "High", consequence: "Staff stealing cash from the drawer.", proof: "Settlement Log", trainerNotes: "Investigate any gap over ₹100 immediately." },
                { id: "RES-FIN-02", description: "Blind Stock Count: count the top 10 most expensive items.", priority: "High", riskLevel: "High", consequence: "High-value food like Salmon or Liquor going missing.", proof: "Stock Sheet", trainerNotes: "Count first, then check the system numbers." },
                { id: "RES-FIN-03", description: "Check Cancelled Bills: review why bills were deleted or changed.", priority: "High", riskLevel: "Medium", consequence: "Cashiers deleting bills to keep the money.", proof: "POS Audit", trainerNotes: "Every deleted bill needs a manager's signature." },
                { id: "RES-FIN-04", description: "Weigh Kitchen Waste: record the weight of wasted food today.", priority: "Medium", riskLevel: "Low", consequence: "Kitchen team being careless with ingredients.", proof: "Waste Ledger", trainerNotes: "Target waste is less than 1% of total sales." },
                { id: "RES-FIN-05", description: "Check Cash Float: verify the small change at start of shift.", priority: "High", riskLevel: "High", consequence: "Disputes at the end of the shift about missing cash.", proof: "Float Sheet", trainerNotes: "Record every note and coin separately." },
                { id: "RES-FIN-06", description: "Check App Payouts: make sure Swiggy/Zomato paid for every order.", priority: "High", riskLevel: "Medium", consequence: "Platforms not paying for orders that were sent out.", proof: "Payout Reconcile", trainerNotes: "Flag 'Cancelled' orders that were actually delivered." },
                { id: "RES-FIN-07", description: "Check Free Food: review why 'Complimentary' food was given.", priority: "Medium", riskLevel: "Medium", consequence: "Too much free food given away without permission.", proof: "POS Report", trainerNotes: "Only allow free food for service mistakes." },
                { id: "RES-FIN-08", description: "Enter Bills: put all purchase invoices into the system in 24 hours.", priority: "Medium", riskLevel: "Low", consequence: "You won't know your true profit if bills are missing.", proof: "Entry Log", trainerNotes: "Match the bills to what was physically delivered." },
                { id: "RES-FIN-09", description: "Check Open Tables: see if any tables have been open too long.", priority: "High", riskLevel: "Medium", consequence: "Staff 'parking' bills to hide stolen cash.", proof: "Open Bill Log", trainerNotes: "Tables open for more than 3 hours is a red alert." },
                { id: "RES-FIN-10", description: "Check Card Machine: inspect the terminal for any tampering.", priority: "High", riskLevel: "High", consequence: "Guest data stolen through credit card skimmers.", proof: "Visual Check", trainerNotes: "Check the seals on the side of the machine." }
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
                { id: "RES-SEC-01", description: "Check Cameras: verify that CCTV is recording and clear.", priority: "High", riskLevel: "High", consequence: "No evidence if there is a theft or an accident.", proof: "System Check", trainerNotes: "Make sure the time on screen is correct." },
                { id: "RES-SEC-02", description: "Night Shutdown: double-check all gas and power is off.", priority: "High", riskLevel: "High", consequence: "The restaurant burning down overnight.", proof: "Closure Log", trainerNotes: "Physically touch the valves outside the building." },
                { id: "RES-SEC-03", description: "Test Fire Alarm: check if the alarm panel is showing 'Ready'.", priority: "High", riskLevel: "High", consequence: "No warning during a fire.", proof: "Test Log", trainerNotes: "Test one different zone every week." },
                { id: "RES-SEC-04", description: "Check Fire Extinguishers: make sure the needle is in the Green.", priority: "High", riskLevel: "High", consequence: "Extinguisher won't work when you need it.", proof: "Gauge Log", trainerNotes: "Check that the safety pin is still there." },
                { id: "RES-SEC-05", description: "Clear Fire Exits: make sure exit doors are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Staff and guests trapped inside during a fire.", proof: "Patrol Log", trainerNotes: "Never store delivery boxes in fire corridors." }
            ]
        }
    ]
};
