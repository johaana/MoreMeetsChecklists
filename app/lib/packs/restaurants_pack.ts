import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations System",
    category: "Hospitality",
    description: "Standardizing 140+ technical control points across 12 distinct floor roles. The professional standard for multi-unit food and beverage groups.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "Stop operational drift before it reaches the guest experience.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 3499,
    priceUSD: 49,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "STABLE v4.4",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>Owner/COO Command</strong>: High-level visibility into group compliance and profit protection.", icon: "crown" },
        { text: "<strong>Kitchen Opening (HACCP)</strong>: Zero-fail protocols for temperature, hygiene, and allergen separation.", icon: "sunrise" },
        { text: "<strong>Service & Ambiance Logic</strong>: Hourly audits for music, lighting, and hygiene to protect guest scores.", icon: "armchair" },
        { text: "<strong>EHS & Fire Safety</strong>: Mandatory closing protocols for gas and electrical banks.", icon: "flame" }
    ],
    checklists: [
        {
            title: "Management & Weekly Review",
            department: "Executive",
            frequency: "Weekly",
            role: "General Manager",
            summary: "Strategic and financial governance for the branch.",
            icon: "crown",
            tasks: [
                { id: "RES-EXE-01", technicalProtocol: "Operational Performance Review", description: "Review weekly execution scores and staff punch-in logs.", priority: "High", riskLevel: "Low", consequence: "Operational drift and loss of team focus.", proof: "Console Review" },
                { id: "RES-EXE-02", technicalProtocol: "Inventory & CoGS Audit", description: "Audit weekly gross sales vs. food cost percentage (Target 30%).", priority: "High", riskLevel: "Medium", consequence: "Undetected profit leakage and margin erosion.", proof: "Financial Shield" },
                { id: "RES-EXE-03", technicalProtocol: "License Compliance Check", description: "Verify validity of FSSAI and Trade licenses for the unit.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License Repository" },
                { id: "RES-EXE-04", technicalProtocol: "Incident Triage", description: "Check status of unresolved 'Red' incidents in the tracker.", priority: "High", riskLevel: "High", consequence: "Escalated legal liability.", proof: "Incident Log" },
                { id: "RES-EXE-05", technicalProtocol: "Labor Cost Variance", description: "Audit labor cost % against weekly sales targets.", priority: "Medium", riskLevel: "Medium", consequence: "Unprofitable operations.", proof: "Payroll Report" },
                { id: "RES-EXE-06", technicalProtocol: "Mystery Audit Review", description: "Analyze scores from most recent mystery shopper visit.", priority: "Medium", riskLevel: "Low", consequence: "Brand standard decay.", proof: "Audit Report" },
                { id: "RES-EXE-07", technicalProtocol: "Preventive Maintenance Schedule", description: "Confirm AMC visits for AC and Kitchen Chillers.", priority: "High", riskLevel: "Medium", consequence: "Equipment failure during service.", proof: "AMC Log" },
                { id: "RES-EXE-08", technicalProtocol: "Staff Training Matrix", description: "Verify 100% completion of food safety training for new hires.", priority: "High", riskLevel: "High", consequence: "Regulatory fines and hygiene risk.", proof: "Training Matrix" },
                { id: "RES-EXE-09", technicalProtocol: "Cash-to-Bank Reconciliation", description: "Vouch bank deposit slips against POS end-of-day reports.", priority: "High", riskLevel: "High", consequence: "Internal theft.", proof: "Bank Slips" },
                { id: "RES-EXE-10", technicalProtocol: "Vendor Payment Aging", description: "Review outstanding vendor dues to ensure supply continuity.", priority: "Low", riskLevel: "Low", consequence: "Supply chain disruption.", proof: "Accounts Ledger" }
            ]
        },
        {
            title: "Kitchen Opening & HACCP",
            department: "Kitchen",
            frequency: "Daily",
            role: "Kitchen Lead",
            summary: "Food safety, prep quality, and hygiene.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", technicalProtocol: "Cold Chain Integrity", description: "Check and log fridge temps: must be 1°C to 4°C.", priority: "High", riskLevel: "High", consequence: "Pathogen growth and total stock loss.", proof: "Temperature Log" },
                { id: "RES-KIT-02", technicalProtocol: "Sanitization Audit", description: "Sanitize all counters and verify sanitizer strength with strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination.", proof: "Test Strip" },
                { id: "RES-KIT-03", technicalProtocol: "Date Label Sweep", description: "Verify all prep items have date labels and follow FIFO.", priority: "High", riskLevel: "High", consequence: "Serving expired ingredients.", proof: "Visual Audit" },
                { id: "RES-KIT-04", technicalProtocol: "Staff Hygiene Briefing", description: "Check staff grooming: clean nails, hairnets, no hand wounds.", priority: "High", riskLevel: "Medium", consequence: "Pathogen transmission.", proof: "Briefing Log" },
                { id: "RES-KIT-05", technicalProtocol: "Knife Safety Check", description: "Inspect knives for sharpness and handle stability.", priority: "Medium", riskLevel: "Medium", consequence: "Staff injury.", proof: "Safety Log" },
                { id: "RES-KIT-06", technicalProtocol: "Dishwasher Final Rinse", description: "Verify rinse temperature reaches 82°C for sterilization.", priority: "High", riskLevel: "High", consequence: "Bacterial survival on plates.", proof: "Temp Reading" },
                { id: "RES-KIT-07", technicalProtocol: "Allergen Station Audit", description: "Confirm segregation of nut-free and gluten-free prep zones.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction.", proof: "Visual Check" },
                { id: "RES-KIT-08", technicalProtocol: "Dry Store Pest Patrol", description: "Check corner bait stations for signs of activity.", priority: "High", riskLevel: "High", consequence: "Infestation and health closure.", proof: "Pest Log" },
                { id: "RES-KIT-09", technicalProtocol: "Drainage Odor Control", floorAction: "Flush all floor drains with hot water and degreaser.", priority: "Low", riskLevel: "Low", consequence: "Pest attraction and bad odors.", proof: "Cleaning Note" },
                { id: "RES-KIT-10", technicalProtocol: "Waste Segregation", description: "Verify correct separation of wet and dry waste at source.", priority: "Low", riskLevel: "Low", consequence: "Environmental fines.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Service & Guest Ambiance",
            department: "Service",
            frequency: "Daily",
            role: "Shift Manager",
            summary: "Morning ambiance, lunch readiness, and opening hygiene.",
            icon: "hand-platter",
            tasks: [
                { id: "RES-SVA-01", technicalProtocol: "Restroom Hygiene Scan", description: "Audit restroom logs: verify 1-hour frequency.", priority: "High", riskLevel: "Low", consequence: "Negative reviews.", proof: "Hourly Sheet" },
                { id: "RES-SVA-02", technicalProtocol: "Morning Team Huddle", description: "Brief team on specials and 86'd items.", priority: "High", riskLevel: "Low", consequence: "Uninformed staff.", proof: "Briefing Log" },
                { id: "RES-SVA-03", technicalProtocol: "Ambiance Sensory Check", description: "Ensure curtains and lights are at 'Lunch' setting.", priority: "Low", riskLevel: "Low", consequence: "Dull dining room.", proof: "Visual Check" },
                { id: "RES-SVA-04", technicalProtocol: "POS Terminal Uptime", description: "Test print receipt on all billing terminals.", priority: "Medium", riskLevel: "Low", consequence: "Billing delays during rush.", proof: "Print Test" },
                { id: "RES-SVA-05", technicalProtocol: "Table Geometry Audit", description: "Verify symmetry of table settings and condiments.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional visual standard.", proof: "Visual Check" },
                { id: "RES-SVA-06", technicalProtocol: "Greeting Standard Pulse", description: "Monitor host stand for '10-foot, 10-second' greeting compliance.", priority: "Medium", riskLevel: "Low", consequence: "Cold guest first-impression.", proof: "Observation" },
                { id: "RES-SVA-07", technicalProtocol: "Side Station Parity", description: "Confirm stock of cutlery, napkins, and sugar sachets.", priority: "Medium", riskLevel: "Low", consequence: "Service friction.", proof: "Stock Check" },
                { id: "RES-SVA-08", technicalProtocol: "Aggregator Tablet Sync", description: "Confirm Zomato/Swiggy tablets are online and menu updated.", priority: "High", riskLevel: "Medium", consequence: "Lost revenue and cancellation fines.", proof: "Tablet Check" },
                { id: "RES-SVA-09", technicalProtocol: "Bar Inventory Reconcile", description: "Verify opening counts of high-value spirits.", priority: "High", riskLevel: "High", consequence: "Internal theft.", proof: "Count Sheet" },
                { id: "RES-SVA-10", technicalProtocol: "Credit Card Skimmer Search", description: "Inspect card terminals for unauthorized overlays.", priority: "High", riskLevel: "High", consequence: "Customer data breach.", proof: "Security Check" }
            ]
        }
    ]
};
