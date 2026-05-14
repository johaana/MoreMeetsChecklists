import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations System",
    category: "Hospitality",
    description: "Standardizing 150 technical control points across 12 distinct floor roles. The professional standard for multi-unit food and beverage groups.",
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
            title: "Owner & Strategic Oversight",
            department: "Executive",
            frequency: "Weekly",
            role: "Owner / Managing Director",
            summary: "Strategic and financial governance for the entire group.",
            icon: "crown",
            moduleId: "GENERAL",
            moduleType: "CORE",
            tasks: [
                { id: "RES-EXE-01", technicalProtocol: "Operational Performance Synthesis", floorAction: "Review weekly operational scores across all branches.", priority: "High", riskLevel: "Low", consequence: "Operational drift and loss of team focus.", proof: "Console Review" },
                { id: "RES-EXE-02", technicalProtocol: "Cost of Goods (CoGS) Parity Audit", floorAction: "Audit weekly gross sales vs. food cost percentage (Target 30%).", priority: "High", riskLevel: "Medium", consequence: "Undetected profit leakage and margin erosion.", proof: "Financial Shield" },
                { id: "RES-EXE-03", technicalProtocol: "Statutory License Compliance Audit", floorAction: "Verify validity of FSSAI and Trade licenses for all units.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License Repository" },
                { id: "RES-EXE-04", technicalProtocol: "Liability & Incident Triage", floorAction: "Check status of unresolved 'Red' incidents in the tracker.", priority: "High", riskLevel: "High", consequence: "Escalated legal liability.", proof: "Incident Log" },
                { id: "RES-EXE-05", technicalProtocol: "Brand Standard Mystery Audit Review", floorAction: "Audit mystery auditor scores: focus on critical failures.", priority: "Medium", riskLevel: "Low", consequence: "Dilution of brand standards.", proof: "Audit Report" },
                { id: "RES-EXE-06", technicalProtocol: "Public Liability Insurance Verification", floorAction: "Review Insurance validity for current quarter.", priority: "High", riskLevel: "High", consequence: "Financial ruin during a major accident.", proof: "Policy File" },
                { id: "RES-EXE-07", technicalProtocol: "Manager Peak-Hour Floor Presence Audit", floorAction: "Audit senior management attendance during peak Saturday slots.", priority: "Medium", riskLevel: "Low", consequence: "Management disconnect during high-risk hours.", proof: "Roster Review" },
                { id: "RES-EXE-08", technicalProtocol: "Third-Party Aggregator Fee Audit", floorAction: "Review Zomato/Swiggy commission tiers vs contract.", priority: "Low", riskLevel: "Medium", consequence: "Overpaying for platform commissions.", proof: "Contract Audit" },
                { id: "RES-EXE-09", technicalProtocol: "CAPEX Project Milestone Verification", floorAction: "Verify project milestone photos for new branch builds.", priority: "Medium", riskLevel: "Medium", consequence: "Budget overruns.", proof: "Project Log" },
                { id: "RES-EXE-10", technicalProtocol: "High-LTV Guest Retention Analysis", floorAction: "Check response times for VIP guest feedback.", priority: "High", riskLevel: "Low", consequence: "Loss of core customer base.", proof: "Feedback Dashboard" },
                { id: "RES-EXE-11", technicalProtocol: "Statutory Audit Trail Retention", floorAction: "Verify 100% of previous month's daily logs are archived in cloud.", priority: "High", riskLevel: "Low", consequence: "No legal defense during future lawsuits.", proof: "Cloud Folder" },
                { id: "RES-EXE-12", technicalProtocol: "Fixed Asset Integrity Tracking", floorAction: "Audit Fixed Asset tags on high-value equipment.", priority: "Low", riskLevel: "Low", consequence: "Loss or theft of property.", proof: "Asset Register" },
                { id: "RES-EXE-13", technicalProtocol: "Proprietary IP & NDA Governance", floorAction: "Verify NDAs signed by visiting distributors.", priority: "High", riskLevel: "Medium", consequence: "Leakage of proprietary recipes.", proof: "Signed File" },
                { id: "RES-EXE-14", technicalProtocol: "Personnel Churn & Toxicity Analysis", floorAction: "Review staff churn rate: identify manager patterns.", priority: "Medium", riskLevel: "Low", consequence: "High recruitment costs.", proof: "HR Dashboard" },
                { id: "RES-EXE-15", technicalProtocol: "Blind Petty Cash Verification", floorAction: "Audit petty cash surprise blind count at 2 branches.", priority: "Medium", riskLevel: "High", consequence: "Internal embezzlement.", proof: "Audit Note" },
                { id: "RES-EXE-16", technicalProtocol: "Utility Intensity Benchmark", floorAction: "Compare KWH usage per guest vs. industry standards.", priority: "Low", riskLevel: "Low", consequence: "High overhead wastage.", proof: "Utility Report" },
                { id: "RES-EXE-17", technicalProtocol: "Fire NOC Display Audit", floorAction: "Visually confirm current Fire NOC is displayed at main entry.", priority: "High", riskLevel: "High", consequence: "Heavy regulatory fines and closure.", proof: "Photo" },
                { id: "RES-EXE-18", technicalProtocol: "Vendor SLA Review", floorAction: "Audit top 3 vendor deliveries for late arrivals or short stock.", priority: "Medium", riskLevel: "Low", consequence: "Operational delays.", proof: "SLA Tracker" },
                { id: "RES-EXE-19", technicalProtocol: "Shareholder Report Synthesis", floorAction: "Generate summary of critical risk vs. expansion milestones.", priority: "High", riskLevel: "Low", consequence: "Loss of board trust.", proof: "Signed Report" },
                { id: "RES-EXE-20", technicalProtocol: "Final Board Governance sign-off", floorAction: "Execute weekly strategic closure initials.", priority: "High", riskLevel: "Low", consequence: "Loss of executive oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Operations Command",
            department: "Operations",
            frequency: "Daily",
            role: "General Manager",
            summary: "Daily site command, guest flow, and first impressions.",
            icon: "concierge-bell",
            moduleId: "GENERAL",
            moduleType: "CORE",
            tasks: [
                { id: "RES-OPS-01", technicalProtocol: "Arrival Readiness Protocol", floorAction: "Check if the main sign is lit and porch is buffed.", priority: "High", riskLevel: "Low", consequence: "Poor brand image.", proof: "Photo" },
                { id: "RES-OPS-02", technicalProtocol: "Daily Staff Deployment Audit", floorAction: "Verify 100% roster attendance and assign backup for breaks.", priority: "High", riskLevel: "Medium", consequence: "Service collapse during peak.", proof: "Roster Sheet" },
                { id: "RES-OPS-03", technicalProtocol: "Complaints Triage & Resolution", floorAction: "Review all open guest issues from previous shift.", priority: "High", riskLevel: "High", consequence: "Escalated viral PR damage.", proof: "Issue Log" },
                { id: "RES-OPS-04", technicalProtocol: "Inventory Waste Validation", floorAction: "Check daily waste log signatures from Chef and Store lead.", priority: "Medium", riskLevel: "Medium", consequence: "Untracked profit leakage.", proof: "Waste Sheet" },
                { id: "RES-OPS-05", technicalProtocol: "Closing Security & Thermal Lockdown", floorAction: "Verify all gas banks and non-essential ACs are OFF.", priority: "High", riskLevel: "High", consequence: "Fire hazard and energy waste.", proof: "Closure Log" },
                { id: "RES-OPS-06", technicalProtocol: "Metrology Verification", floorAction: "Check calibration seals on all weighing scales.", priority: "High", riskLevel: "Medium", consequence: "Legal Metrology fines.", proof: "Seal Check" },
                { id: "RES-OPS-07", technicalProtocol: "Float Integrity Check", floorAction: "Verify opening cash floats at all billing stations.", priority: "High", riskLevel: "High", consequence: "Internal cash theft.", proof: "Float Sheet" },
                { id: "RES-OPS-08", technicalProtocol: "Uniform & Grooming Audit", floorAction: "Inspect staff uniforms for cleanliness and name tags.", priority: "Low", riskLevel: "Low", consequence: "Brand image drop.", proof: "Briefing Log" },
                { id: "RES-OPS-09", technicalProtocol: "Music & Ambiance Check", floorAction: "Verify lobby playlist matches current daypart energy.", priority: "Low", riskLevel: "Low", consequence: "Wrong atmosphere.", proof: "Visual Check" },
                { id: "RES-OPS-10", technicalProtocol: "Manager Handover Note", floorAction: "Write summary of critical issues for next shift GM.", priority: "High", riskLevel: "Low", consequence: "Loss of continuity.", proof: "Signed Log" },
                { id: "RES-OPS-11", technicalProtocol: "Stationery Backup Audit", floorAction: "Verify stock of bill-rolls and order pads.", priority: "Low", riskLevel: "Low", consequence: "Operational friction.", proof: "Visual Audit" },
                { id: "RES-OPS-12", technicalProtocol: "Guest Wi-Fi Speed Pulse", floorAction: "Test guest network speed in dining hall (Target > 20mbps).", priority: "Low", riskLevel: "Low", consequence: "Negative tech reviews.", proof: "Speed Test" },
                { id: "RES-OPS-13", technicalProtocol: "VIP Guest Greeting", floorAction: "Greet all identified Tier-1 VIP arrivals.", priority: "Medium", riskLevel: "Low", consequence: "Loss of loyalty.", proof: "Feedback Log" },
                { id: "RES-OPS-14", technicalProtocol: "Facility Scent Governance", floorAction: "Refill lobby scent diffusers.", priority: "Low", riskLevel: "Low", consequence: "Bad first impression.", proof: "Visual Check" },
                { id: "RES-OPS-15", technicalProtocol: "Valet Sobriety Audit", floorAction: "Random check of valet team for policy compliance.", priority: "High", riskLevel: "High", consequence: "Severe asset liability.", proof: "Log Entry" }
            ]
        },
        {
            title: "Kitchen HACCP Command",
            department: "Kitchen",
            frequency: "Daily",
            role: "Executive Chef",
            summary: "Food safety, prep quality, and hygiene.",
            icon: "sunrise",
            moduleId: "KITCHEN",
            moduleType: "CORE",
            tasks: [
                { id: "RES-KIT-01", technicalProtocol: "Cold-Chain Integrity Verification (CCP-1)", floorAction: "Check and log fridge temps: must be 1°C to 4°C.", priority: "High", riskLevel: "High", consequence: "Pathogen growth and total stock loss.", proof: "Temperature Log" },
                { id: "RES-KIT-02", technicalProtocol: "Surface Pathogen Control Protocol", floorAction: "Sanitize all counters and verify sanitizer strength with strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination.", proof: "Test Strip" },
                { id: "RES-KIT-03", technicalProtocol: "Inventory Life-Cycle Governance (FIFO)", floorAction: "Verify all prep items have date labels and follow FIFO.", priority: "High", riskLevel: "High", consequence: "Serving expired ingredients.", proof: "Visual Audit" },
                { id: "RES-KIT-04", technicalProtocol: "Probe Thermometer Calibration Check", floorAction: "Test thermometers in ice water to ensure 0°C accuracy.", priority: "High", riskLevel: "Medium", consequence: "Undercooked food risk.", proof: "Calibration Log" },
                { id: "RES-KIT-05", technicalProtocol: "Personnel Hygiene & Biosecurity Audit", floorAction: "Check staff grooming: clean nails, hairnets, no hand wounds.", priority: "High", riskLevel: "Medium", consequence: "Pathogen transmission.", proof: "Briefing Log" },
                { id: "RES-KIT-06", technicalProtocol: "Allergen Segregation Audit", floorAction: "Ensure separate knives/boards used for nut-free prep.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction.", proof: "Visual Audit" },
                { id: "RES-KIT-07", technicalProtocol: "Oil Quality Testing", floorAction: "Check fryer oil TPM level (Target < 25%).", priority: "Medium", riskLevel: "Low", consequence: "Poor food quality and health risk.", proof: "TPM Reading" },
                { id: "RES-KIT-08", technicalProtocol: "Dishwasher Thermal Validation", floorAction: "Verify final rinse temperature reaches 82°C.", priority: "High", riskLevel: "Medium", consequence: "Bacteria on plates.", proof: "Temp Log" },
                { id: "RES-KIT-09", technicalProtocol: "Kitchen Waste Disposal", floorAction: "Ensure wet waste bins are covered and cleared.", priority: "Medium", riskLevel: "Medium", consequence: "Pest attraction.", proof: "Cleaning Note" },
                { id: "RES-KIT-10", technicalProtocol: "Gas Bank Closure", floorAction: "Physically check all burners and main valves are shut.", priority: "High", riskLevel: "High", consequence: "Fire/Explosion.", proof: "Closure Log" },
                { id: "RES-KIT-11", technicalProtocol: "Spice Store Moisture Check", floorAction: "Inspect dry store for humidity and sealed containers.", priority: "Low", riskLevel: "Low", consequence: "Mould and flavor loss.", proof: "Visual Check" },
                { id: "RES-KIT-12", technicalProtocol: "Prep List vs. Par Levels", floorAction: "Audit today's prep quantities vs. forecasted sales.", priority: "Medium", riskLevel: "Low", consequence: "Food waste and profit loss.", proof: "Prep Sheet" },
                { id: "RES-KIT-13", technicalProtocol: "Knife Sharpening Maintenance", floorAction: "Verify all Chef knives are sharpened and balanced.", priority: "Low", riskLevel: "Medium", consequence: "Workplace injuries.", proof: "Visual Audit" },
                { id: "RES-KIT-14", technicalProtocol: "Grease Trap Pulse", floorAction: "Inspect grease traps for overflow risk.", priority: "High", riskLevel: "High", consequence: "Drain blockage and shutdown.", proof: "Visual Check" },
                { id: "RES-KIT-15", technicalProtocol: "Mock Recall Drill", floorAction: "Track a single ingredient batch from store to plate.", priority: "High", riskLevel: "High", consequence: "Inability to respond to a real poisoning.", proof: "Recall Log" }
            ]
        },
        {
            title: "Front Counter & Service",
            department: "Service",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Morning ambiance, lunch readiness, and opening hygiene.",
            icon: "hand-platter",
            moduleId: "FRONT_COUNTER",
            moduleType: "CORE",
            tasks: [
                { id: "RES-SVA-01", technicalProtocol: "Opening Hygiene Validation", floorAction: "Audit restroom logs: verify 1-hour frequency.", priority: "High", riskLevel: "Low", consequence: "Negative reviews.", proof: "Hourly Sheet" },
                { id: "RES-SVA-02", technicalProtocol: "Lunch Readiness Check", floorAction: "Verify all side-stations are stocked with cutlery/napkins.", priority: "Medium", riskLevel: "Low", consequence: "Slow service during rush.", proof: "Visual Check" },
                { id: "RES-SVA-03", technicalProtocol: "Staff Briefing - Lunch", floorAction: "Brief team on specials and 86'd items.", priority: "High", riskLevel: "Low", consequence: "Uninformed staff.", proof: "Briefing Log" },
                { id: "RES-SVA-04", technicalProtocol: "Porch Buffing Audit", floorAction: "Ensure entrance floor is shining and debris-free.", priority: "Low", riskLevel: "Low", consequence: "Bad first touch.", proof: "Visual Check" },
                { id: "RES-SVA-05", technicalProtocol: "Stationery Audit", floorAction: "Check stock of reservation diaries and guest forms.", priority: "Low", riskLevel: "Low", consequence: "Operational friction.", proof: "Stock Check" },
                { id: "RES-SVA-06", technicalProtocol: "Daytime Lighting Preset", floorAction: "Ensure curtains and lights are at 'Lunch' setting.", priority: "Low", riskLevel: "Low", consequence: "Dull dining room.", proof: "Visual Check" },
                { id: "RES-SVA-07", technicalProtocol: "Morning Cutlery Polish", floorAction: "Inspect 10 spoons for smudge marks or water spots.", priority: "Medium", riskLevel: "Low", consequence: "Luxury brand dilution.", proof: "Sample Audit" },
                { id: "RES-SVA-08", technicalProtocol: "Salt/Pepper Refill Pulse", floorAction: "Check all shakers are clean and topped up.", priority: "Low", riskLevel: "Low", consequence: "Guest annoyance.", proof: "Visual Check" },
                { id: "RES-SVA-09", technicalProtocol: "Floor Manager Handover A", floorAction: "Brief Shift B lead on any guest issues.", priority: "High", riskLevel: "Low", consequence: "Loss of continuity.", proof: "Signed Log" },
                { id: "RES-SVA-10", technicalProtocol: "Reservation Pre-call Protocol", floorAction: "Confirm all lunch reservations via phone/text.", priority: "Medium", riskLevel: "Low", consequence: "Unchecked no-shows.", proof: "Call Log" }
            ]
        },
        {
            title: "Delivery & Off-Premise",
            department: "Logistics",
            frequency: "Daily",
            role: "Dispatch Lead",
            summary: "Governance for aggregators and takeaway quality.",
            icon: "truck",
            moduleId: "DELIVERY",
            moduleType: "OPTIONAL",
            tasks: [
                { id: "RES-DEL-01", technicalProtocol: "Packaging Tamper-Seal Audit", floorAction: "Verify bags are stapled/sealed correctly.", priority: "High", riskLevel: "Medium", consequence: "Food tampering.", proof: "Visual Audit" },
                { id: "RES-DEL-02", technicalProtocol: "Aggregator Price Parity Sync", floorAction: "Verify prices on Zomato match the menu.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes.", proof: "App Check" },
                { id: "RES-DEL-03", technicalProtocol: "Rider Pickup TAT", floorAction: "Log minutes from 'Order Ready' to 'Rider Pickup'.", priority: "Medium", riskLevel: "Low", consequence: "Cold food/Late delivery.", proof: "TAT Log" },
                { id: "RES-DEL-04", technicalProtocol: "Order Accuracy Pulse", floorAction: "Spot check 5 bags for correct sauces/cutlery.", priority: "High", riskLevel: "Low", consequence: "Rating drop.", proof: "Sample Check" },
                { id: "RES-DEL-05", technicalProtocol: "Delivery Tablet Sync", floorAction: "Clear all pending orders and check internet.", priority: "High", riskLevel: "Medium", consequence: "Operational halt.", proof: "System Check" },
                { id: "RES-DEL-06", technicalProtocol: "Takeaway Bag Stock", floorAction: "Check par levels for all sizes of dispatch bags.", priority: "Low", riskLevel: "Low", consequence: "Service delay during rush.", proof: "Stock Check" },
                { id: "RES-DEL-07", technicalProtocol: "Rider Lounge Hygiene", floorAction: "Ensure drinking water and seats for riders are clean.", priority: "Low", riskLevel: "Low", consequence: "Negative rider sentiment/friction.", proof: "Visual Check" },
                { id: "RES-DEL-08", technicalProtocol: "Billing Accuracy Audit", floorAction: "Vouch 5 random bills against system aggregator portal.", priority: "Medium", riskLevel: "Medium", consequence: "Revenue mismatch.", proof: "Portal Sync" },
                { id: "RES-DEL-09", technicalProtocol: "Aggregator Cancellation Audit", floorAction: "Review reason codes for 'Self-Cancellation'.", priority: "High", riskLevel: "High", consequence: "Wasted commission costs.", proof: "Cancel Log" },
                { id: "RES-DEL-10", technicalProtocol: "Delivery Map Status Sync", floorAction: "Update 'Closed' areas due to local events/rain.", priority: "Medium", riskLevel: "Low", consequence: "Late delivery and guest rage.", proof: "App Update" }
            ]
        },
        {
            title: "Drive-Thru Operations",
            department: "Service",
            frequency: "Daily",
            role: "Drive-Thru Lead",
            summary: "Speed and accuracy protocols for window service.",
            icon: "car",
            moduleId: "DRIVE_THRU",
            moduleType: "OPTIONAL",
            tasks: [
                { id: "RES-DT-01", technicalProtocol: "Menu Board Illumination", floorAction: "Confirm all digital boards are active and legible.", priority: "High", riskLevel: "Low", consequence: "Lost revenue from hidden items.", proof: "Visual Check" },
                { id: "RES-DT-02", technicalProtocol: "Audio Headset Sync", floorAction: "Verify static-free comms between order-point and kitchen.", priority: "High", riskLevel: "Medium", consequence: "Incorrect orders.", proof: "Sound Test" },
                { id: "RES-DT-03", technicalProtocol: "Window Service TAT", floorAction: "Monitor average order-to-window time (Target < 3 mins).", priority: "Medium", riskLevel: "Low", consequence: "Long queues and drive-offs.", proof: "System Report" },
                { id: "RES-DT-04", technicalProtocol: "Order Confirmation Screen", floorAction: "Verify display matches the order being entered.", priority: "High", riskLevel: "Low", consequence: "Billing disputes.", proof: "Visual Audit" },
                { id: "RES-DT-05", technicalProtocol: "Lane Safety Check", floorAction: "Verify zero obstructions in the drive-thru lane.", priority: "High", riskLevel: "High", consequence: "Vehicle damage or pedestrian injury.", proof: "Walkthrough" }
            ]
        },
        {
            title: "Bar & Mixology",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Governance for high-margin alcohol inventory.",
            icon: "glass-water",
            moduleId: "BAR",
            moduleType: "OPTIONAL",
            tasks: [
                { id: "RES-BAR-01", technicalProtocol: "Inventory Parity Reconciliation", floorAction: "Blind count Top 5 Malts vs. POS sales.", priority: "High", riskLevel: "High", consequence: "Internal theft.", proof: "Count Sheet" },
                { id: "RES-BAR-02", technicalProtocol: "Ice-Production Sanitation Audit", floorAction: "Deep clean ice bin and check for mold/slime.", priority: "High", riskLevel: "High", consequence: "Guest illness.", proof: "Cleaning Log" },
                { id: "RES-BAR-03", technicalProtocol: "Glassware Chip Audit", floorAction: "Discard all glasses with even microscopic chips.", priority: "High", riskLevel: "High", consequence: "Glass in guest drink.", proof: "Visual Audit" },
                { id: "RES-BAR-04", technicalProtocol: "Age Verification Pulse", floorAction: "Verify staff are checking IDs for anyone < 25.", priority: "High", riskLevel: "High", consequence: "License suspension.", proof: "Briefing Log" },
                { id: "RES-BAR-05", technicalProtocol: "Cocktail Garnish FIFO", floorAction: "Verify prep dates on cut fruits.", priority: "Medium", riskLevel: "Low", consequence: "Sour drinks/Guest complaints.", proof: "Visual Check" },
                { id: "RES-BAR-06", technicalProtocol: "Beer Draft Pressure Check", floorAction: "Verify CO2 levels for zero-waste pour.", priority: "Medium", riskLevel: "Low", consequence: "Frothy waste/Profit loss.", proof: "Gauge Log" },
                { id: "RES-BAR-07", technicalProtocol: "Bar Well Hygiene", floorAction: "Deep clean speed-rails and drains.", priority: "Medium", riskLevel: "Medium", consequence: "Fruit flies and odors.", proof: "Cleaning Note" },
                { id: "RES-BAR-08", technicalProtocol: "Liquor License Display", floorAction: "Confirm valid license is posted in-view.", priority: "High", riskLevel: "High", consequence: "Government sealing.", proof: "Photo" },
                { id: "RES-BAR-09", technicalProtocol: "Bottle Breakage Log", floorAction: "Verify all broken units are recorded with photo.", priority: "Medium", riskLevel: "High", consequence: "Theft masked as breakage.", proof: "Breakage Sheet" },
                { id: "RES-BAR-10", technicalProtocol: "Final Bar Closing Pulse", floorAction: "Verify wine-cave fridge lock.", priority: "High", riskLevel: "High", consequence: "High-value inventory loss.", proof: "Signed Log" }
            ]
        },
        {
            title: "Bakery & Confectionery",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Baker",
            summary: "Consistency and safety for specialized production.",
            icon: "cake-slice",
            moduleId: "BAKERY",
            moduleType: "OPTIONAL",
            tasks: [
                { id: "RES-BAK-01", technicalProtocol: "Oven Thermal Validation", floorAction: "Log oven temperatures against thermostat settings.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent bake and product waste.", proof: "Temp Log" },
                { id: "RES-BAK-02", technicalProtocol: "Allergen Segregation", floorAction: "Verify 100% separation of gluten-free tools.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction.", proof: "Visual Audit" },
                { id: "RES-BAK-03", technicalProtocol: "Proofing Humidity Check", floorAction: "Confirm levels in proofing chamber.", priority: "Medium", riskLevel: "Low", consequence: "Poor dough rise.", proof: "Sensor Reading" },
                { id: "RES-BAK-04", technicalProtocol: "Labeling Accuracy", floorAction: "Check 'Pack Date' and 'Expiry' on all retail units.", priority: "High", riskLevel: "High", consequence: "Legal Metrology fines.", proof: "Label Sample" },
                { id: "RES-BAK-05", technicalProtocol: "Sanitation of Mixers", floorAction: "Deep clean hooks and bowls post-batch.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination.", proof: "Cleaning Note" }
            ]
        },
        {
            title: "Banquet & Events",
            department: "Operations",
            frequency: "Per Event",
            role: "Banqueting Lead",
            summary: "Large-scale service and venue safety.",
            icon: "calendar-days",
            moduleId: "BANQUET",
            moduleType: "OPTIONAL",
            tasks: [
                { id: "RES-BNQ-01", technicalProtocol: "BEO Reconciliation", floorAction: "Verify layout matches Banquet Event Order.", priority: "High", riskLevel: "Low", consequence: "Client dispute and refund requests.", proof: "Signed BEO" },
                { id: "RES-BNQ-02", technicalProtocol: "Audio-Visual Dry Run", floorAction: "Test mics, projectors, and lighting pre-arrival.", priority: "High", riskLevel: "Low", consequence: "High-visibility event failure.", proof: "Tech Check" },
                { id: "RES-BNQ-03", technicalProtocol: "Floor Safety Patrol", floorAction: "Identify loose carpet or cable trip hazards.", priority: "High", riskLevel: "High", consequence: "Public liability suit.", proof: "Walkthrough" },
                { id: "RES-BNQ-04", technicalProtocol: "VIP Amenity Verification", floorAction: "Confirm placement of specialized requests.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-LTV trust.", proof: "Photo" },
                { id: "RES-BNQ-05", technicalProtocol: "Service Punctuality TAT", floorAction: "Log time from client arrival to first-pour.", priority: "Medium", riskLevel: "Low", consequence: "Negative brand image.", proof: "TAT Log" }
            ]
        },
        {
            title: "Live Counter Operations",
            department: "Kitchen",
            frequency: "Daily",
            role: "Sous Chef",
            summary: "Guest-facing food safety and presentation.",
            icon: "flame",
            moduleId: "LIVE_COUNTER",
            moduleType: "OPTIONAL",
            tasks: [
                { id: "RES-LIVE-01", technicalProtocol: "Sneeze Guard Integrity", floorAction: "Clean and inspect acrylic barriers.", priority: "High", riskLevel: "High", consequence: "Direct contamination by guests.", proof: "Visual Check" },
                { id: "RES-LIVE-02", technicalProtocol: "Holding Temp (Hot)", floorAction: "Verify food in bains-marie is > 65°C.", priority: "High", riskLevel: "High", consequence: "Bacteria growth.", proof: "Probe Log" },
                { id: "RES-LIVE-03", technicalProtocol: "Chef Grooming Audit", floorAction: "Verify clean apron, hat, and no jewelry.", priority: "Low", riskLevel: "Low", consequence: "Poor luxury perception.", proof: "Briefing Note" },
                { id: "RES-LIVE-04", technicalProtocol: "Waste Management (Front)", floorAction: "Empty prep bins before they overflow.", priority: "Medium", riskLevel: "Low", consequence: "Unhygienic guest view.", proof: "Visual Audit" },
                { id: "RES-LIVE-05", technicalProtocol: "Equipment Gas Seal", floorAction: "Verify temporary gas lines are secured.", priority: "High", riskLevel: "High", consequence: "Leak/Fire risk.", proof: "Leak Test" }
            ]
        },
        {
            title: "Catering & Outdoor Events",
            department: "Logistics",
            frequency: "Per Event",
            role: "Outdoor Catering Lead",
            summary: "Off-site logistics and food safety infrastructure.",
            icon: "soup",
            moduleId: "CATERING",
            moduleType: "OPTIONAL",
            tasks: [
                { id: "RES-CAT-01", technicalProtocol: "Transit Temp Control", floorAction: "Log temp of food upon arrival at off-site venue.", priority: "High", riskLevel: "High", consequence: "Mass food poisoning.", proof: "Receiving Log" },
                { id: "RES-CAT-02", technicalProtocol: "Water Source Purity", floorAction: "Verify source of water for onsite cooking.", priority: "High", riskLevel: "High", consequence: "Waterborne disease spread.", proof: "Visual Audit" },
                { id: "RES-CAT-03", technicalProtocol: "Fuel Storage Safety", floorAction: "Inspect storage of portable LPG cylinders.", priority: "High", riskLevel: "High", consequence: "Explosion at guest site.", proof: "Photo" },
                { id: "RES-CAT-04", technicalProtocol: "First-Aid Field Kit", floorAction: "Ensure mobile medical kit is on the truck.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat onsite burns.", proof: "Stock Check" },
                { id: "RES-CAT-05", technicalProtocol: "Site Clearance Audit", floorAction: "Verify 100% of debris removed post-event.", priority: "Low", riskLevel: "Low", consequence: "Damage to client relationship.", proof: "Visual Sign-off" }
            ]
        },
        {
            title: "EHS & Safety Audit",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Occupational health and environmental governance.",
            icon: "hard-hat",
            moduleId: "GENERAL",
            moduleType: "CORE",
            tasks: [
                { id: "RES-EHS-01", technicalProtocol: "First Aid Readiness", floorAction: "Verify availability and expiry of First Aid kits.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat staff injuries.", proof: "Stock Check" },
                { id: "RES-EHS-02", technicalProtocol: "Waste Segregation Audit", floorAction: "Audit waste segregation at source (Wet/Dry/Hazardous).", priority: "Medium", riskLevel: "Low", consequence: "Environmental fines.", proof: "Visual Audit" },
                { id: "RES-EHS-03", technicalProtocol: "Safety Training Pulse", floorAction: "Conduct 'Toolbox Talk' on safe knife handling.", priority: "High", riskLevel: "Medium", consequence: "Frequent staff injury and turnover.", proof: "Training Log" },
                { id: "RES-EHS-04", technicalProtocol: "PPE Compliance Audit", floorAction: "Check usage of chainmail gloves and goggles.", priority: "High", riskLevel: "Medium", consequence: "Avoidable lacerations.", proof: "Daily Log" },
                { id: "RES-EHS-05", technicalProtocol: "Chemical Storage LOTO", floorAction: "Lock cleaning chemical cabinet at EOD.", priority: "High", riskLevel: "High", consequence: "Theft / misuse.", proof: "Visual Check" }
            ]
        }
    ]
};
