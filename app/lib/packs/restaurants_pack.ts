import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations System",
    priceINR: 3499,
    priceUSD: 49,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Hospitality",
    description: "The definitive Sovereign v17.6 engine for multi-unit restaurant groups. Hardening 182 technical control points across Kitchen, Bar, FOH, and Delivery.",
    icon: "utensils-crossed",
    badgeText: "V17.6 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Restaurant Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>HACCP Control</strong>: Zero-fail protocols for thawing logs, oil quality, and allergen segregation.", icon: "shield-check" },
        { text: "<strong>Revenue Shield</strong>: Void-bill audits, takeaway seals, and yield variance monitoring.", icon: "banknote" },
        { text: "<strong>ESG Sustainability</strong>: Daily food waste logging, oil disposal tracking, and plastic-free audits.", icon: "leaf" }
    ],
    checklists: [
        {
            title: "Executive Group Governance",
            department: "Executive",
            frequency: "Daily",
            role: "General Manager",
            summary: "High-level strategic oversight and group financial reconciliation.",
            icon: "crown",
            tasks: [
                { id: "RES-GM-01", technicalProtocol: "Group Cash Reconcile", floorAction: "Match total group cash-on-hand against bank deposit slips.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue theft.", proof: "Settlement Log", verificationRequired: true, cadence: "daily" },
                { id: "RES-GM-02", technicalProtocol: "Void-Bill Audit", floorAction: "Review 100% of bill deletions; verify manager ID login match.", priority: "High", riskLevel: "High", consequence: "Theft masked as cashier errors.", proof: "Void Registry", verificationRequired: true, cadence: "daily" },
                { id: "RES-GM-03", technicalProtocol: "Statutory License Pulse", floorAction: "Confirm active status of FSSAI, Liquor, and Fire NOC licenses.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License File", verificationRequired: true, cadence: "daily" },
                { id: "RES-GM-04", technicalProtocol: "Incident Registry Triage", floorAction: "Review all P1 safety or security alerts from the last 24h.", priority: "High", riskLevel: "High", consequence: "Escalated liability and brand collapse.", proof: "Incident Log", verificationRequired: true, cadence: "daily" },
                { id: "RES-GM-05", technicalProtocol: "ORM Reputation Scan", floorAction: "Verify responses to 100% of negative reviews < 12h old.", priority: "Medium", riskLevel: "Medium", consequence: "Viral reputation damage.", proof: "ORM Dashboard", cadence: "daily" },
                { id: "RES-GM-06", technicalProtocol: "ROI & Waste Review", floorAction: "Analyze weekly food-waste cost vs procurement budget.", priority: "Medium", riskLevel: "Low", consequence: "Invisible margin leakage.", proof: "Waste Report", cadence: "weekly" },
                { id: "RES-GM-07", technicalProtocol: "Supplier SLA Audit", floorAction: "Review delivery accuracy and quality from top 3 vendors.", priority: "Medium", riskLevel: "Low", consequence: "Procurement overspend.", proof: "Vendor Scorecard", cadence: "weekly" },
                { id: "RES-GM-08", technicalProtocol: "CAPEX Repair Milestone", floorAction: "Check status of high-value kitchen equipment repairs.", priority: "Medium", riskLevel: "Low", consequence: "Reduced production capacity.", proof: "Mnt Log", cadence: "weekly" },
                { id: "RES-GM-09", technicalProtocol: "HACCP Compliance Audit", floorAction: "Physical walkthrough of kitchen for thermal and hygiene adherence.", priority: "High", riskLevel: "High", consequence: "FSSAI non-compliance and health risks.", proof: "Audit Report", verificationRequired: true, cadence: "monthly" },
                { id: "RES-GM-10", technicalProtocol: "Group P&L Reconciliation", floorAction: "Final monthly sign-off on branch-wise net margins.", priority: "High", riskLevel: "Low", consequence: "Governance failure.", proof: "Signed P&L", verificationRequired: true, cadence: "monthly" }
            ]
        },
        {
            title: "Site Operations Command",
            department: "Management",
            frequency: "Daily",
            role: "Restaurant Manager",
            summary: "Unit-level execution and operational parity.",
            icon: "activity",
            tasks: [
                { id: "RES-RM-01", technicalProtocol: "Opening Readiness Seal", floorAction: "Verify 100% of station readiness protocols are signed.", priority: "High", riskLevel: "Medium", consequence: "Delayed service and lost sales.", proof: "Signed Summary", verificationRequired: true, cadence: "daily" },
                { id: "RES-RM-02", technicalProtocol: "Ambiance Sensory Audit", floorAction: "Check scent, lighting, and music volume against brand spec.", priority: "Low", riskLevel: "Low", consequence: "Poor guest first-impression.", proof: "Daily Log", cadence: "daily" },
                { id: "RES-RM-03", technicalProtocol: "Zero-Gap Handover", floorAction: "Verify digital sign-off between AM/PM shift teams.", priority: "High", riskLevel: "Medium", consequence: "Lost instructions / gridlock.", proof: "Handover Log", verificationRequired: true, cadence: "daily" },
                { id: "RES-RM-04", technicalProtocol: "Staff Sobriety Check", floorAction: "Random breathalyzer for bar and high-risk kitchen staff.", priority: "High", riskLevel: "High", consequence: "Accident liability and safety breach.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "RES-RM-05", technicalProtocol: "Queue TAT Monitor", floorAction: "Measure wait-time during peak rush; target < 15 mins.", priority: "Medium", riskLevel: "Low", consequence: "Guest walk-outs.", proof: "Queue Log", cadence: "daily" },
                { id: "RES-RM-06", technicalProtocol: "Staff Grooming Audit", floorAction: "Check 100% of FOH for uniform and hygiene compliance.", priority: "Low", riskLevel: "Low", consequence: "Professional brand dilution.", proof: "Briefing Log", cadence: "daily" },
                { id: "RES-RM-07", technicalProtocol: "POS Firmware Sync", floorAction: "Verify system is updated and offline-bill sync is active.", priority: "Medium", riskLevel: "Low", consequence: "Data loss during crashes.", proof: "System Check", cadence: "daily" },
                { id: "RES-RM-08", technicalProtocol: "Daily MOD Sign-off", floorAction: "Final site-level operational summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of shift control.", proof: "Signed Sheet", verificationRequired: true, cadence: "daily" },
                { id: "RES-RM-09", technicalProtocol: "Emergency Exit Sweep", floorAction: "Physically walk the egress path; clear all trash.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment during crisis.", proof: "Walk Log", verificationRequired: true, cadence: "daily" },
                { id: "RES-RM-10", technicalProtocol: "Staff Meal Compliance", floorAction: "Verify quality and timing of employee meal service.", priority: "Low", riskLevel: "Low", consequence: "Staff attrition and morale drop.", proof: "Meal Log", cadence: "daily" }
            ]
        },
        {
            title: "Kitchen Executive Command",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Food safety, yield governance, and production readiness.",
            icon: "utensils",
            tasks: [
                { id: "RES-CH-01", technicalProtocol: "HACCP Thermal Pulse", floorAction: "Log morning fridge/freezer temps; verify digital parity.", priority: "High", riskLevel: "High", consequence: "Mass food poisoning / stock loss.", proof: "Temp Log", verificationRequired: true, cadence: "daily" },
                { id: "RES-CH-02", technicalProtocol: "Allergen Station Audit", floorAction: "Inspect 100% isolation of nut-free and GF prep zones.", priority: "High", riskLevel: "High", consequence: "Fatal guest reaction (Never-event).", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "RES-CH-03", technicalProtocol: "Mise-en-place Parity", floorAction: "Match current prep levels to today's booking forecast.", priority: "High", riskLevel: "Low", consequence: "Stock-outs during peak rush.", proof: "Prep Sheet", cadence: "daily" },
                { id: "RES-CH-04", technicalProtocol: "Recipe Deviation Audit", floorAction: "Physically weigh 3 random signature dishes.", priority: "Medium", riskLevel: "Medium", consequence: "Inconsistent experience / margin loss.", proof: "Weight Sheet", verificationRequired: true, cadence: "daily" },
                { id: "RES-CH-05", technicalProtocol: "Pest Evidence Sweep", floorAction: "Inspect fridge compressors and storage corners.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Search Note", verificationRequired: true, cadence: "daily" },
                { id: "RES-CH-06", technicalProtocol: "Gas Manifold Shutdown", floorAction: "Physically witness lock of all main kitchen gas valves.", priority: "High", riskLevel: "High", consequence: "Overnight fire / explosion hazard.", proof: "Closure Log", verificationRequired: true, cadence: "daily" },
                { id: "RES-CH-07", technicalProtocol: "Knife Safety Audit", floorAction: "Inspect blades for sharpness and handle integrity.", priority: "High", riskLevel: "Medium", consequence: "Staff injury liability.", proof: "Visual Check", cadence: "daily" },
                { id: "RES-CH-08", technicalProtocol: "Vegetable Sanitization", floorAction: "Verify 50ppm chlorine soak for all raw produce.", priority: "High", riskLevel: "High", consequence: "Parasitic transmission.", proof: "Titration Log", verificationRequired: true, cadence: "daily" },
                { id: "RES-CH-09", technicalProtocol: "Staff Health Pulse", floorAction: "Check 100% of chefs for open wounds or illness.", priority: "High", riskLevel: "High", consequence: "Contamination outbreak.", proof: "Daily Audit", verificationRequired: true, cadence: "daily" },
                { id: "RES-CH-10", technicalProtocol: "Sous-Vide Water Check", floorAction: "Verify bath water clarity and circulation pump status.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent protein quality.", proof: "Visual Check", cadence: "daily" },
                { id: "RES-CH-11", technicalProtocol: "Inventory Waste Weight", floorAction: "Log KG of food discarded from prep vs production.", priority: "Medium", riskLevel: "Low", consequence: "Inefficient procurement.", proof: "Weight Slip", cadence: "daily" },
                { id: "RES-CH-12", technicalProtocol: "Dry-Store FIFO Audit", floorAction: "Check date labels on 10 random dry-store items.", priority: "Medium", riskLevel: "Medium", consequence: "Using expired stock.", proof: "FIFO Walk", cadence: "weekly" }
            ]
        },
        {
            title: "FOH Floor Supervision",
            department: "Service",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Service flow, bathroom hygiene, and amenity readiness.",
            icon: "eye",
            tasks: [
                { id: "RES-SUP-01", technicalProtocol: "Restroom Hygiene Pulse", floorAction: "Audit 30-min cleaning log for public restrooms.", priority: "High", riskLevel: "Low", consequence: "Primary driver of guest rage.", proof: "Hourly Sheet", verificationRequired: true, cadence: "daily" },
                { id: "RES-SUP-02", technicalProtocol: "Cutlery Alignment", floorAction: "Spot check 5 tables for brand cutlery alignment.", priority: "Low", riskLevel: "Low", consequence: "Sub-par brand perception.", proof: "Visual Audit", cadence: "daily" },
                { id: "RES-SUP-03", technicalProtocol: "QR Menu Validation", floorAction: "Test 100% of table QR codes for correct menu links.", priority: "Medium", riskLevel: "Low", consequence: "Ordering friction.", proof: "Phone Test", cadence: "daily" },
                { id: "RES-SUP-04", technicalProtocol: "High-Chair Sanitization", floorAction: "Verify 100% of baby chairs are wiped and tagged.", priority: "Medium", riskLevel: "Medium", consequence: "Infant infection risk.", proof: "Visual Check", cadence: "daily" },
                { id: "RES-SUP-05", technicalProtocol: "AC Diffuser Cleanliness", floorAction: "Check for dust/black buildup around vents.", priority: "Low", riskLevel: "Low", consequence: "Grimy environment perception.", proof: "Visual Check", cadence: "weekly" }
            ]
        },
        {
            title: "Bar & Beverage Command",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Governance for high-margin alcohol and cocktail quality.",
            icon: "glass-water",
            tasks: [
                { id: "RES-BAR-01", technicalProtocol: "Blind Bottle Count", floorAction: "Reconcile physical spirit units against POS report.", priority: "High", riskLevel: "High", consequence: "High-value internal theft.", proof: "Count Sheet", verificationRequired: true, cadence: "daily" },
                { id: "RES-BAR-02", technicalProtocol: "Draft Line Flush", floorAction: "Flush lines pre-opening to prevent yeast buildup.", priority: "Medium", riskLevel: "Low", consequence: "Poor beer taste / waste.", proof: "Flush Log", cadence: "daily" },
                { id: "RES-BAR-03", technicalProtocol: "Garnish Freshness Audit", floorAction: "Verify labels and scent for all cut garnishes.", priority: "Low", riskLevel: "Low", consequence: "Sub-par drink experience.", proof: "Visual Check", cadence: "daily" },
                { id: "RES-BAR-04", technicalProtocol: "Age-Check Log Audit", floorAction: "Verify documentation for any guest appearing < 25.", priority: "High", riskLevel: "High", consequence: "Liquor license suspension.", proof: "Compliance Log", verificationRequired: true, cadence: "daily" },
                { id: "RES-BAR-05", technicalProtocol: "Pour-Cost Calibration", floorAction: "Test 3 random optic dispensers for volume accuracy.", priority: "Medium", riskLevel: "Medium", consequence: "Revenue leakage through over-pouring.", proof: "Measure Test", cadence: "weekly" }
            ]
        },
        {
            title: "Inventory & Procurement",
            department: "Stores",
            frequency: "Daily",
            role: "Inventory Controller",
            summary: "Profit protection at the supply chain point of entry.",
            icon: "package",
            tasks: [
                { id: "RES-INV-01", technicalProtocol: "Receiving Scale Test", floorAction: "Calibrate dock scales with 5kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight.", proof: "Calibration Log", verificationRequired: true, cadence: "daily" },
                { id: "RES-INV-02", technicalProtocol: "Vendor FSSAI Verify", floorAction: "Check validity of licenses for all fresh protein suppliers.", priority: "High", riskLevel: "High", consequence: "Legal liability for unsafe sourcing.", proof: "License Registry", verificationRequired: true, cadence: "weekly" },
                { id: "RES-INV-03", technicalProtocol: "Price Variance Pulse", floorAction: "Log any item exceeding monthly price cap by > 10%.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored margin erosion.", proof: "Price Log", cadence: "weekly" }
            ]
        },
        {
            title: "Hygiene & Safety Command",
            department: "Compliance",
            frequency: "Daily",
            role: "Hygiene & Compliance Officer",
            summary: "Zero-fail framework for food safety and life protection.",
            icon: "shield-alert",
            tasks: [
                { id: "RES-SAF-01", technicalProtocol: "Oil TPM Quality Pulse", floorAction: "Test fryer oil; discard if TPM exceeds 25%.", priority: "High", riskLevel: "High", consequence: "Carcinogen buildup and bad taste.", proof: "TPM Reading", verificationRequired: true, cadence: "daily" },
                { id: "RES-SAF-02", technicalProtocol: "Gas Sniffer Calibration", floorAction: "Test electronic sensors near main gas bank.", priority: "High", riskLevel: "High", consequence: "Undetected gas leak (Fatal).", proof: "Test Log", verificationRequired: true, cadence: "daily" },
                { id: "RES-SAF-03", technicalProtocol: "Suppression Pin Verify", floorAction: "Check fire suppression pins are intact on hood.", priority: "High", riskLevel: "High", consequence: "Zero firefighting capability.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "RES-SAF-04", technicalProtocol: "Water Purity TDS", floorAction: "Log TDS at main ice-machine and prep sink.", priority: "High", riskLevel: "High", consequence: "Contaminated ice / gastro outbreak.", proof: "TDS Reading", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Digital & Delivery Flow",
            department: "Operations",
            frequency: "Daily",
            role: "Delivery Aggregator Coordinator",
            summary: "Governance for off-premise revenue channels.",
            icon: "smartphone",
            tasks: [
                { id: "RES-DIG-01", technicalProtocol: "Menu Availability Sync", floorAction: "Match app availability to physical stock-outs.", priority: "High", riskLevel: "Medium", consequence: "High cancellation penalties.", proof: "App Check", cadence: "daily" },
                { id: "RES-DIG-02", technicalProtocol: "Bag-Seal Integrity Audit", floorAction: "Verify 100% of takeaway bags are security-sealed.", priority: "High", riskLevel: "Low", consequence: "Rider tampering incidents.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "RES-DIG-03", technicalProtocol: "Rider Sobriety Scan", floorAction: "Visual sobriety check of in-house delivery fleet.", priority: "High", riskLevel: "High", consequence: "Fatal accident liability.", proof: "Daily Log", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Production Station (Hot)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Line Cook",
            summary: "Station-level execution and heat control.",
            icon: "flame",
            tasks: [
                { id: "RES-LIN-01", technicalProtocol: "Station Label Audit", floorAction: "Verify 100% of prep has 'Date Opened' labels.", priority: "High", riskLevel: "High", consequence: "Serving expired product.", proof: "Label Check", verificationRequired: true, cadence: "daily" },
                { id: "RES-LIN-02", technicalProtocol: "Undercounter Temp", floorAction: "Log temp of station-fridge; target < 4°C.", priority: "High", riskLevel: "High", consequence: "Spoilage at the pass.", proof: "Temp Log", cadence: "daily" }
            ]
        },
        {
            title: "Commis & Prep Logic",
            department: "Kitchen",
            frequency: "Daily",
            role: "Commis / Prep Cook",
            summary: "Volume prep and rotation governance.",
            icon: "knife",
            tasks: [
                { id: "RES-PRE-01", technicalProtocol: "Soap Station Refill", floorAction: "Refill 100% of kitchen hand-wash soap stations.", priority: "High", riskLevel: "Medium", consequence: "Hygiene breakdown.", proof: "Visual Check", cadence: "daily" },
                { id: "RES-PRE-02", technicalProtocol: "Walk-in Organization", floorAction: "Rotate stock (Oldest to Front) in main cooler.", priority: "Medium", riskLevel: "Medium", consequence: "Hidden stock decay.", proof: "Visual Check", cadence: "daily" }
            ]
        },
        {
            title: "Stewarding & Refuse",
            department: "Kitchen",
            frequency: "Hourly",
            role: "Kitchen Steward",
            summary: "Dish sterilization and grease-trap health.",
            icon: "spray-can",
            tasks: [
                { id: "RES-STW-01", technicalProtocol: "Rinse Cycle Temp", floorAction: "Confirm dishwasher final rinse reaches 82°C.", priority: "High", riskLevel: "High", consequence: "Unsanitized utensils reaching guests.", proof: "Temp Reading", verificationRequired: true, cadence: "daily" },
                { id: "RES-STW-02", technicalProtocol: "Grease Trap Flush", floorAction: "Clear filters to prevent kitchen floor flooding.", priority: "Medium", riskLevel: "Medium", consequence: "Operational halt.", proof: "Visual Check", cadence: "daily" }
            ]
        },
        {
            title: "Service Standard",
            department: "Service",
            frequency: "Daily",
            role: "Waiter / Steward",
            summary: "Guest-facing quality and revenue accuracy.",
            icon: "user-round",
            tasks: [
                { id: "RES-WAI-01", technicalProtocol: "Glassware Chip Audit", floorAction: "Verify 100% of glasses are chip-free pre-service.", priority: "High", riskLevel: "High", consequence: "Guest lip injury liability.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Reception & Host",
            department: "Service",
            frequency: "Daily",
            role: "Host / Hostess",
            summary: "First-touch impression and reservation command.",
            icon: "concierge-bell",
            tasks: [
                { id: "RES-HOS-01", technicalProtocol: "VIP Table Triage", floorAction: "Match today's bookings to VIP status flags.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-LTV loyalty.", proof: "System Sync", cadence: "daily" }
            ]
        },
        {
            title: "Bartending Vitals",
            department: "Bar",
            frequency: "Daily",
            role: "Bartender",
            summary: "Pour-cost protection and drink quality.",
            icon: "beaker",
            tasks: [
                { id: "RES-BTD-01", technicalProtocol: "Cocktail Yield Test", floorAction: "Measure 3 random drinks for recipe accuracy.", priority: "Medium", riskLevel: "Low", consequence: "Over-pouring and margin loss.", proof: "Measure Log", cadence: "daily" }
            ]
        },
        {
            title: "Sustainability & ESG",
            department: "ESG",
            frequency: "Daily",
            role: "Hygiene & Compliance Officer",
            summary: "Environmental discipline and resource tracking.",
            icon: "leaf",
            tasks: [
                { id: "RES-ESG-01", technicalProtocol: "Food Waste KG Log", floorAction: "Weigh and log prep-waste vs. plate-waste.", priority: "Medium", riskLevel: "Low", consequence: "Inefficient procurement.", proof: "Weight Slip", cadence: "daily" },
                { id: "RES-ESG-02", technicalProtocol: "Oil Disposal Seal", floorAction: "Verify UCO disposal into sealed haz-drums.", priority: "High", riskLevel: "High", consequence: "Illegal resale / fraud.", proof: "Registry Note", verificationRequired: true, cadence: "daily" },
                { id: "RES-ESG-03", technicalProtocol: "Plastic-Free Audit", floorAction: "Verify 100% zero prohibited bags in pantry.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental fines.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" }
            ]
        }
    ]
};
