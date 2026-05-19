
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations System",
    priceINR: 3499,
    priceUSD: 49,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Hospitality",
    description: "The definitive Sovereign v17.6 engine for multi-unit restaurant groups. Hardening 192 technical control points across Kitchen, Bar, FOH, and Delivery.",
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
                { id: "RES-GM-10", technicalProtocol: "Group P&L Reconciliation", floorAction: "Final monthly sign-off on branch-wise net margins.", priority: "High", riskLevel: "Low", consequence: "Governance failure.", proof: "Signed P&L", verificationRequired: true, cadence: "monthly" },
                { id: "RES-GM-11", technicalProtocol: "Gas Pipeline Safety", floorAction: "Review third-party thermal scan report of main gas bank.", priority: "High", riskLevel: "High", consequence: "Mass casualty fire risk.", proof: "Tech Certificate", verificationRequired: true, cadence: "monthly" },
                { id: "RES-GM-12", technicalProtocol: "Insurance Asset Audit", floorAction: "Verify valid public liability cover for all outlets.", priority: "High", riskLevel: "High", consequence: "Total financial exposure during crisis.", proof: "Policy File", verificationRequired: true, cadence: "monthly" }
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
                { id: "RES-RM-10", technicalProtocol: "Staff Meal Compliance", floorAction: "Verify quality and timing of employee meal service.", priority: "Low", riskLevel: "Low", consequence: "Staff attrition and morale drop.", proof: "Meal Log", cadence: "daily" },
                { id: "RES-RM-11", technicalProtocol: "Table Turnover Pulse", floorAction: "Monitor average table duration during peak (Target 45-60 mins).", priority: "Medium", riskLevel: "Low", consequence: "Reduced revenue throughput.", proof: "POS Data", cadence: "daily" },
                { id: "RES-RM-12", technicalProtocol: "Mystery Shopper Action", floorAction: "Review last mystery shopper score; brief team on specific fails.", priority: "Medium", riskLevel: "Low", consequence: "Persistent service standard decay.", proof: "Briefing Note", cadence: "weekly" }
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
                { id: "RES-CH-12", technicalProtocol: "Dry-Store FIFO Audit", floorAction: "Check date labels on 10 random dry-store items.", priority: "Medium", riskLevel: "Medium", consequence: "Using expired stock.", proof: "FIFO Walk", cadence: "weekly" },
                { id: "RES-CH-13", technicalProtocol: "Thawing Protocol", floorAction: "Verify 100% of proteins are thawed in fridge, not at room temp.", priority: "High", riskLevel: "High", consequence: "Rapid bacterial growth.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "RES-CH-14", technicalProtocol: "Grease Trap Pulse", floorAction: "Check for blockage and odor in main kitchen traps.", priority: "Medium", riskLevel: "Medium", consequence: "Kitchen floor flooding and operational halt.", proof: "Visual Check", cadence: "daily" },
                { id: "RES-CH-15", technicalProtocol: "Supplier sampling", floorAction: "Perform quality sampling of incoming poultry/seafood delivery.", priority: "High", riskLevel: "High", consequence: "Entering contaminated stock into the system.", proof: "Sample Log", verificationRequired: true, cadence: "weekly" }
            ]
        },
        {
            title: "Kitchen Mid-Command",
            department: "Kitchen",
            frequency: "Daily",
            role: "Sous Chef",
            summary: "Shift-level production flow and food safety adherence.",
            icon: "utensils-crossed",
            tasks: [
                { id: "RES-SC-01", technicalProtocol: "Line-Check Sign-off", floorAction: "Taste and verify 100% of sauces and bases before service start.", priority: "High", riskLevel: "Low", consequence: "Sub-par flavor parity across branches.", proof: "Signed List", verificationRequired: true, cadence: "daily" },
                { id: "RES-SC-02", technicalProtocol: "Labeling Integrity", floorAction: "Ensure 100% of prep has 'Date Opened' and 'Expiry' tags.", priority: "High", riskLevel: "High", consequence: "Serving expired ingredients.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "RES-SC-03", technicalProtocol: "Station Handover", floorAction: "Verify clean-down of stations between AM and PM shifts.", priority: "Medium", riskLevel: "Medium", consequence: "Bacterial buildup and disorganization.", proof: "Handover Log", cadence: "daily" },
                { id: "RES-SC-04", technicalProtocol: "Portion Control Scan", floorAction: "Randomly weigh 5 prep-packs against standard specs.", priority: "High", riskLevel: "Low", consequence: "Margin leakage through over-portioning.", proof: "Weight Check", cadence: "daily" },
                { id: "RES-SC-05", technicalProtocol: "Staff Discipline Pulse", floorAction: "Enforce 'Mobile Phone Prohibited' rule in prep zones.", priority: "Low", riskLevel: "High", consequence: "Hygiene breach and distracted work.", proof: "Visual Audit", cadence: "daily" }
            ]
        },
        {
            title: "Production Station (Hot/Cold)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Line Cook",
            summary: "Station-level execution and heat control.",
            icon: "flame",
            tasks: [
                { id: "RES-LIN-01", technicalProtocol: "Undercounter Temp", floorAction: "Log temp of station-fridge; target < 4°C.", priority: "High", riskLevel: "High", consequence: "Spoilage at the pass.", proof: "Temp Log", cadence: "daily" },
                { id: "RES-LIN-02", technicalProtocol: "Cross-Contamination", floorAction: "Verify color-coded boards are used for raw vs cooked.", priority: "High", riskLevel: "High", consequence: "Cross-contamination (Fatal).", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "RES-LIN-03", technicalProtocol: "Fryer Oil TPM", floorAction: "Test oil quality; log TPM reading (Target < 25%).", priority: "High", riskLevel: "Medium", consequence: "Toxic oil use.", proof: "TPM Reading", cadence: "daily" },
                { id: "RES-LIN-04", technicalProtocol: "EOD Station Kill", floorAction: "Shut down fryers, burners, and ovens at shift end.", priority: "High", riskLevel: "High", consequence: "Overnight fire risk.", proof: "Closure Log", verificationRequired: true, cadence: "daily" }
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
                { id: "RES-PRE-01", technicalProtocol: "Veggie Sanitization", floorAction: "Perform 50ppm chlorine soak for raw salads.", priority: "High", riskLevel: "High", consequence: "Parasitic transmission.", proof: "Log Entry", verificationRequired: true, cadence: "daily" },
                { id: "RES-PRE-02", technicalProtocol: "Stock Rotation (FIFO)", floorAction: "Move older prep to the front of the walk-in.", priority: "Medium", riskLevel: "Medium", consequence: "Hidden spoilage.", proof: "Visual Check", cadence: "daily" },
                { id: "RES-PRE-03", technicalProtocol: "Handwash Station Refill", floorAction: "Verify soap and paper-towel levels in kitchen sinks.", priority: "High", riskLevel: "Medium", consequence: "Hygiene breakdown.", proof: "Visual Check", cadence: "daily" }
            ]
        },
        {
            title: "Kitchen Stewarding",
            department: "Kitchen",
            frequency: "Hourly",
            role: "Kitchen Steward",
            summary: "Dishwasher sterilization and chemical safety.",
            icon: "spray-can",
            tasks: [
                { id: "RES-STW-01", technicalProtocol: "Dishwasher Rinse Temp", floorAction: "Confirm final rinse reaches 82°C.", priority: "High", riskLevel: "High", consequence: "Unsanitized plates reaching guests.", proof: "Temp Reading", verificationRequired: true, cadence: "daily" },
                { id: "RES-STW-02", technicalProtocol: "Chemical Storage", floorAction: "Verify all degreasers are in original labeled bottles.", priority: "High", riskLevel: "High", consequence: "Accidental chemical ingestion.", proof: "Visual Check", cadence: "daily" },
                { id: "RES-STW-03", technicalProtocol: "Bin Sanitization", floorAction: "Wash and disinfect wet-waste bins hourly.", priority: "Medium", riskLevel: "Medium", consequence: "Pest attraction.", proof: "Cleaning Log", cadence: "daily" }
            ]
        },
        {
            title: "Floor Operations",
            department: "Service",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Service flow and ambiance parity.",
            icon: "eye",
            tasks: [
                { id: "RES-SUP-01", technicalProtocol: "Restroom Hygiene Pulse", floorAction: "Audit 30-min cleaning log for public restrooms.", priority: "High", riskLevel: "Low", consequence: "Primary driver of guest rage.", proof: "Hourly Sheet", verificationRequired: true, cadence: "daily" },
                { id: "RES-SUP-02", technicalProtocol: "Cutlery Alignment", floorAction: "Spot check 5 tables for brand cutlery alignment.", priority: "Low", riskLevel: "Low", consequence: "Sub-par brand perception.", proof: "Visual Audit", cadence: "daily" },
                { id: "RES-SUP-03", technicalProtocol: "QR Menu Validation", floorAction: "Test table QR codes for correct menu links.", priority: "Medium", riskLevel: "Low", consequence: "Ordering friction.", proof: "Phone Test", cadence: "daily" },
                { id: "RES-SUP-04", technicalProtocol: "High-Chair Sanitization", floorAction: "Verify 100% of baby chairs are wiped and tagged.", priority: "Medium", riskLevel: "Medium", consequence: "Infant infection risk.", proof: "Visual Check", cadence: "daily" }
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
                { id: "RES-WAI-01", technicalProtocol: "Glassware Chip Audit", floorAction: "Verify 100% of glasses are chip-free pre-service.", priority: "High", riskLevel: "High", consequence: "Guest lip injury liability.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "RES-WAI-02", technicalProtocol: "KOT Accuracy", floorAction: "Ensure 100% match between table order and POS entry.", priority: "High", riskLevel: "Medium", consequence: "Unbilled consumption / fraud.", proof: "Bill Match", cadence: "daily" }
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
                { id: "RES-HOS-01", technicalProtocol: "VIP Table Triage", floorAction: "Match today's bookings to VIP status flags.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-LTV loyalty.", proof: "System Sync", cadence: "daily" },
                { id: "RES-HOS-02", technicalProtocol: "Walk-in Lead Capture", floorAction: "Log 100% of waitlisted guests' mobile numbers.", priority: "Low", riskLevel: "Low", consequence: "Lost marketing data.", proof: "Registry Log", cadence: "daily" }
            ]
        },
        {
            title: "Bar & Beverage Command",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Governance for high-margin alcohol inventory.",
            icon: "glass-water",
            tasks: [
                { id: "RES-BAR-01", technicalProtocol: "Blind Bottle Count", floorAction: "Reconcile physical spirit units against POS report.", priority: "High", riskLevel: "High", consequence: "High-value internal theft.", proof: "Count Sheet", verificationRequired: true, cadence: "daily" },
                { id: "RES-BAR-02", technicalProtocol: "Draft Line Flush", floorAction: "Flush lines pre-opening to prevent yeast buildup.", priority: "Medium", riskLevel: "Low", consequence: "Poor beer taste / waste.", proof: "Flush Log", cadence: "daily" },
                { id: "RES-BAR-03", technicalProtocol: "Age-Check Log Audit", floorAction: "Verify documentation for any guest appearing < 25.", priority: "High", riskLevel: "High", consequence: "Liquor license suspension.", proof: "Compliance Log", verificationRequired: true, cadence: "daily" },
                { id: "RES-BAR-04", technicalProtocol: "Pour-Cost Calibration", floorAction: "Test 3 optic dispensers for volume accuracy.", priority: "Medium", riskLevel: "Medium", consequence: "Revenue leakage through over-pouring.", proof: "Measure Test", cadence: "weekly" }
            ]
        },
        {
            title: "Bartending Vitals",
            department: "Bar",
            frequency: "Daily",
            role: "Bartender",
            summary: "Drink quality and station hygiene.",
            icon: "beaker",
            tasks: [
                { id: "RES-BTD-01", technicalProtocol: "Cocktail Yield Test", floorAction: "Measure 3 random drinks for recipe accuracy.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent taste / margin loss.", proof: "Measure Log", cadence: "daily" },
                { id: "RES-BTD-02", technicalProtocol: "Ice Bin Hygiene", floorAction: "Clear and sanitize main ice bin daily.", priority: "High", riskLevel: "High", consequence: "Contaminated ice (Gastro risk).", proof: "Visual Check", cadence: "daily" }
            ]
        },
        {
            title: "Bar Support",
            department: "Bar",
            frequency: "Hourly",
            role: "Barback",
            summary: "Inventory replenishment and glassware parity.",
            icon: "package-2",
            tasks: [
                { id: "RES-BBK-01", technicalProtocol: "Glassware Par-Level", floorAction: "Ensure 50+ clean chilled glasses available at bar.", priority: "Medium", riskLevel: "Low", consequence: "Service gridlock.", proof: "Visual Count", cadence: "hourly" }
            ]
        },
        {
            title: "Inventory & Procurement",
            department: "Stores",
            frequency: "Daily",
            role: "Inventory Controller / Storekeeper",
            summary: "Profit protection at the supply chain point of entry.",
            icon: "package",
            tasks: [
                { id: "RES-INV-01", technicalProtocol: "Receiving Scale Test", floorAction: "Calibrate dock scales with 5kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight.", proof: "Calibration Log", verificationRequired: true, cadence: "daily" },
                { id: "RES-INV-02", technicalProtocol: "Vendor FSSAI Verify", floorAction: "Check validity of licenses for all fresh protein suppliers.", priority: "High", riskLevel: "High", consequence: "Legal liability for unsafe sourcing.", proof: "License Registry", verificationRequired: true, cadence: "weekly" },
                { id: "RES-INV-03", technicalProtocol: "Price Variance Pulse", floorAction: "Log any item exceeding monthly price cap by > 10%.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored margin erosion.", proof: "Price Log", cadence: "weekly" },
                { id: "RES-INV-04", technicalProtocol: "Shrinkage Audit", floorAction: "Perform blind count of top 5 dry-store SKUs.", priority: "High", riskLevel: "High", consequence: "Internal theft / loss.", proof: "Count Sheet", verificationRequired: true, cadence: "monthly" }
            ]
        },
        {
            title: "Hygiene & Compliance",
            department: "Compliance",
            frequency: "Daily",
            role: "Hygiene & Compliance Officer",
            summary: "Zero-fail framework for food safety and regulatory life protection.",
            icon: "shield-alert",
            tasks: [
                { id: "RES-HYG-01", technicalProtocol: "ATP Surface Pulse", floorAction: "Perform random RLU swab test of FOH counters.", priority: "Medium", riskLevel: "High", consequence: "Bacterial transmission outbreaks.", proof: "Test Result", verificationRequired: true, cadence: "daily" },
                { id: "RES-HYG-02", technicalProtocol: "FSSAI Board Audit", floorAction: "Verify 'Food Safety Display Board' is in public view.", priority: "High", riskLevel: "Medium", consequence: "Regulatory fine during surprise visit.", proof: "Visual Audit", cadence: "daily" },
                { id: "RES-HYG-03", technicalProtocol: "Pest Vendor Report", floorAction: "Review traps and badge stations with external vendor.", priority: "High", riskLevel: "High", consequence: "Undetected infestation.", proof: "Vendor Sign-off", verificationRequired: true, cadence: "weekly" },
                { id: "RES-HYG-04", technicalProtocol: "Allergen Compliance Review", floorAction: "Audit menu allergen icons against current vendor ingredient specs.", priority: "High", riskLevel: "High", consequence: "Fatal reaction liability.", proof: "Matrix Audit", verificationRequired: true, cadence: "monthly" }
            ]
        },
        {
            title: "Delivery Command",
            department: "Operations",
            frequency: "Daily",
            role: "Delivery Aggregator Coordinator",
            summary: "Governance for off-premise revenue channels.",
            icon: "smartphone",
            tasks: [
                { id: "RES-DEL-01", technicalProtocol: "Menu Availability Sync", floorAction: "Match app availability to physical stock-outs.", priority: "High", riskLevel: "Medium", consequence: "High cancellation penalties.", proof: "App Check", cadence: "daily" },
                { id: "RES-DEL-02", technicalProtocol: "Bag-Seal Integrity", floorAction: "Verify 100% of takeaway bags are security-sealed.", priority: "High", riskLevel: "Low", consequence: "Rider tampering incidents.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "RES-DEL-03", technicalProtocol: "Delivery Contamination", floorAction: "Verify 100% segregation of veg/non-veg orders in dispatch.", priority: "High", riskLevel: "Medium", consequence: "Religious/Dietary offense claims.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Incident Response",
            department: "Safety",
            frequency: "Incident-based",
            role: "Duty Manager",
            summary: "Pre-defined workflows for high-risk operational failures.",
            icon: "siren",
            tasks: [
                { id: "RES-INC-01", technicalProtocol: "Gas Leakage Response", floorAction: "Execute main shut-off + evacuation if sniffer triggers.", priority: "High", riskLevel: "High", consequence: "Explosion / Fire.", proof: "Incident Report", cadence: "incident-based" },
                { id: "RES-INC-02", technicalProtocol: "Food Poisoning Protocol", floorAction: "Seal batch samples + notify HQ immediately.", priority: "High", riskLevel: "High", consequence: "Legal / Health disaster.", proof: "Chain of Custody", cadence: "incident-based" },
                { id: "RES-INC-03", technicalProtocol: "Equipment Failure", floorAction: "Move stock to backup cold-storage + call AMC vendor.", priority: "High", riskLevel: "High", consequence: "Mass stock spoilage.", proof: "Mnt Request", cadence: "incident-based" },
                { id: "RES-INC-04", technicalProtocol: "Allergen Exposure", floorAction: "Activate medical response + document specific dish ingested.", priority: "High", riskLevel: "High", consequence: "Fatal liability.", proof: "Medical Log", cadence: "incident-based" }
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
                { id: "RES-ESG-02", technicalProtocol: "Oil Disposal Seal", floorAction: "Verify UCO disposal into sealed haz-drums for recycling.", priority: "High", riskLevel: "High", consequence: "Illegal resale / fraud.", proof: "Registry Note", verificationRequired: true, cadence: "daily" },
                { id: "RES-ESG-03", technicalProtocol: "Plastic-Free Audit", floorAction: "Verify 100% zero prohibited bags in pantry.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental fines.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "RES-ESG-04", technicalProtocol: "Energy Tracking", floorAction: "Log daily KWH meter reading for main kitchen bank.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored energy spikes.", proof: "Meter Match", cadence: "daily" },
                { id: "RES-ESG-05", technicalProtocol: "Composting Log", floorAction: "Verify KG of organic waste moved to composter.", priority: "Low", riskLevel: "Low", consequence: "ESG score drop.", proof: "Weight Log", cadence: "daily" }
            ]
        }
    ]
};
