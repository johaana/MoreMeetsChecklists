
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations Pack",
    category: "Hospitality",
    description: "Stop Health Department closures, viral food-safety scandals, and inconsistent service—before they destroy your restaurant's reputation and bottom line.",
    heroHeadline: "Stop Health Department closures and viral food-safety scandals.",
    heroSubheadline: "Built for FSSAI-aligned establishments that take zero-risk food safety seriously.",
    pricingUrgency: "One food-safety incident or negative viral review costs 100x more than this entire system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "Bestseller",
    badgeVariant: "default",
    bestseller: true,
    whoIsItFor: ["Restaurant Owners", "Cafe Owners", "Cloud Kitchen Operators", "Heads of F&B"],
    sampleItems: [
        { text: "Stop catastrophic foodborne illness outbreaks with FSSAI & HACCP-aligned daily kitchen protocols.", icon: "shield-check" },
        { text: "Eliminate inventory spoilage and thousands in lost profit with rigorous cold chain monitoring.", icon: "thermometer" },
        { text: "Prevent fatal allergen cross-contamination with a bulletproof 'Special Diet' order flow.", icon: "star" },
        { text: "Shield your brand from negative viral reviews with a structured service incident and recovery process.", icon: "recycle" },
        { text: "Guarantee a pristine environment with verifiable sanitation, waste, and pest control schedules.", icon: "sparkles" },
        { text: "Secure your revenue and eliminate cash leakage with daily closing and reconciliation procedures.", icon: "banknote" }
    ],
    checklists: [
        {
            title: "Kitchen Opening Checklist",
            department: "F&B",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Ensures the kitchen is ready and safe for service.",
            icon: "sunrise",
            tasks: [
                { id: "KO-01", description: "Check and log temperatures of all refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Failure can lead to bacterial growth and foodborne illness outbreaks.", proof: "Temp Log" },
                { id: "KO-02", description: "Ensure separate cutting boards and utensils are used for veg/non-veg prep.", priority: "High", riskLevel: "High", consequence: "Prevents cross-contamination, which can cause severe allergic reactions or food poisoning.", proof: "Visual Audit" },
                { id: "KO-03", description: "Verify all cleaning chemical bottles are correctly labeled.", priority: "High", riskLevel: "Medium", consequence: "Prevents accidental chemical contamination of food, which can be toxic.", proof: "Visual Check" },
                { id: "KO-04", description: "Check that all equipment safety guards are in place and functional.", priority: "High", riskLevel: "High", consequence: "Missing guards can lead to severe injuries, amputations, and regulatory fines.", proof: "Equipment Check Log" },
                { id: "KO-05", description: "Ensure handwash stations are stocked with soap and sanitizer.", priority: "High", riskLevel: "Medium", consequence: "Lack of hand hygiene is a primary cause of foodborne illness transmission.", proof: "Visual Check" },
                { id: "KO-06", description: "Calibrate food thermometers.", priority: "High", riskLevel: "High", consequence: "Inaccurate readings can lead to serving undercooked, unsafe food.", proof: "Calibration Log" },
                { id: "KO-07", description: "Check that exhaust hoods and ventilation are working.", priority: "High", riskLevel: "Medium", consequence: "Poor ventilation is a fire risk and creates an unsafe working environment.", proof: "System Check" },
                { id: "KO-08", description: "Ensure first aid kit is stocked.", priority: "High", riskLevel: "Medium", consequence: "Inability to treat common kitchen injuries like cuts and burns.", proof: "First Aid Kit Log" },
                { id: "KO-09", description: "Check that the fire suppression system is armed and ready.", priority: "High", riskLevel: "High", consequence: "A failed system can lead to a catastrophic kitchen fire.", proof: "System Check" },
                { id: "KO-10", description: "Brief the kitchen team on the day's menu and any specials.", priority: "Medium", riskLevel: "Low", consequence: "Lack of communication leads to inconsistency and errors during service.", proof: "Briefing Notes" }
            ]
        },
        {
            title: "Cold Storage Monitoring SOP",
            department: "F&B",
            frequency: "Daily",
            role: "Kitchen Manager",
            summary: "Ensures the freshness and safety of all temperature-sensitive inventory.",
            icon: "thermometer",
            tasks: [
                { id: "CSM-01", description: "Log cold storage temperatures twice daily.", priority: "High", riskLevel: "High", consequence: "Failure to monitor can lead to thousands of dollars in spoiled inventory.", proof: "Temperature Log" },
                { id: "CSM-02", description: "Verify digital logs if available.", priority: "High", riskLevel: "High", consequence: "Provides a continuous record and helps identify intermittent faults.", proof: "Digital Log Review" },
                { id: "CSM-03", description: "Test temperature alarms weekly.", priority: "High", riskLevel: "High", consequence: "A non-functional alarm means a temperature failure overnight goes unnoticed.", proof: "Alarm Test Log" },
                { id: "CSM-04", description: "Follow escalation procedure for any temperature deviations.", priority: "High", riskLevel: "High", consequence: "A slow response can result in the loss of all stock in the unit.", proof: "Incident Report" },
                { id: "CSM-05", description: "Check for any signs of frost buildup or door seal damage.", priority: "Medium", riskLevel: "Medium", consequence: "Indicates poor efficiency and potential temperature problems.", proof: "Visual Inspection Log" },
                { id: "CSM-06", description: "Ensure cold storage units are clean and organized.", priority: "High", riskLevel: "Medium", consequence: "Disorganization can lead to cross-contamination and wasted food.", proof: "Cleaning Log" },
                { id: "CSM-07", description: "Keep raw and cooked foods stored separately.", priority: "High", riskLevel: "High", consequence: "A primary cause of bacterial cross-contamination.", proof: "Storage Audit" },
                { id: "CSM-08", description: "Ensure all items are labeled with date of receipt.", priority: "High", riskLevel: "Medium", consequence: "Makes it impossible to follow FIFO and increases spoilage.", proof: "Labeling Audit" },
                { id: "CSM-09", description: "Do not overload shelves to allow for proper air circulation.", priority: "High", riskLevel: "Medium", consequence: "Overloading creates hot spots where food can spoil.", proof: "Visual Check" },
                { id: "CSM-10", description: "Report any maintenance issues with the units immediately.", priority: "High", riskLevel: "High", consequence: "Delaying repairs can lead to complete equipment failure.", proof: "Maintenance Request" }
            ]
        },
        {
            title: "Allergen & Special Diet Order Flow",
            department: "Service/Kitchen",
            frequency: "Per Order",
            role: "Server/Chef",
            summary: "A critical safety protocol to prevent fatal allergen incidents.",
            icon: "file-warning",
            tasks: [
                { id: "ALLERGEN-01", description: "Server to clearly flag allergy on the order ticket (KOT).", priority: "High", riskLevel: "High", consequence: "If the kitchen is not alerted, no special precautions will be taken.", proof: "KOT with Allergy Flag" },
                { id: "ALLERGEN-02", description: "Chef to use designated, sanitized utensils and a separate prep area for the allergy order.", priority: "High", riskLevel: "High", consequence: "Cross-contamination is a primary cause of allergic reactions in restaurants.", proof: "CCTV/Visual Check" },
                { id: "ALLERGEN-03", description: "Manager to double-check the special diet plate against the ticket before it leaves the kitchen.", priority: "High", riskLevel: "High", consequence: "Provides a final, critical safety check to catch any errors.", proof: "Dispatch Log" },
                { id: "ALLERGEN-04", description: "Maintain an up-to-date allergen matrix for all menu items and share with service staff.", priority: "High", riskLevel: "High", consequence: "Servers giving incorrect information to guests can have fatal consequences.", proof: "Allergen Matrix Document" },
                { id: "ALLERGEN-05", description: "Server verbally confirms the special meal with the guest upon delivery to the table.", priority: "High", riskLevel: "High", consequence: "Ensures the correct person receives the specially prepared meal.", proof: "Verbal Confirmation Protocol" },
                { id: "ALLERGEN-06", description: "Change gloves and wash hands before and after handling an allergen-free order.", priority: "High", riskLevel: "High", consequence: "Prevents transfer of allergens from other dishes.", proof: "CCTV/Supervisor Audit" },
                { id: "ALLERGEN-07", description: "Use a special plate or marker for allergy-safe dishes.", priority: "High", riskLevel: "Medium", consequence: "Provides a clear visual cue to all staff and the guest.", proof: "Special Plate Photo" },
                { id: "ALLERGEN-08", description: "Train all FOH and BOH staff on the severity of food allergies.", priority: "High", riskLevel: "High", consequence: "Lack of training leads to a casual attitude and dangerous mistakes.", proof: "Training Log" },
                { id: "ALLERGEN-09", description: "If unsure about an ingredient, always assume it contains the allergen and inform the guest.", priority: "High", riskLevel: "High", consequence: "Guessing can be fatal. The 'if in doubt, leave it out' rule is paramount.", proof: "Policy Document" },
                { id: "ALLERGEN-10", description: "Document any incidents related to allergies for review.", priority: "High", riskLevel: "High", consequence: "Failure to learn from near-misses will eventually lead to a major incident.", proof: "Incident Report" }
            ]
        },
        {
            title: "Sanitation & Deep-Clean Schedule",
            department: "Hygiene",
            frequency: "Daily/Weekly",
            role: "Hygiene Supervisor",
            summary: "Ensures a sterile and compliant food environment.",
            icon: "sparkles",
            tasks: [
                { id: "SANIT-01", description: "Log completion of daily surface sanitization.", priority: "High", riskLevel: "High", consequence: "Buildup of bacteria on surfaces can lead to cross-contamination.", proof: "Daily Cleaning Log" },
                { id: "SANIT-02", description: "Perform and log weekly deep clean of kitchen hoods and ducts.", priority: "High", riskLevel: "High", consequence: "Grease buildup in hoods is a major fire hazard.", proof: "Weekly Deep Clean Log" },
                { id: "SANIT-03", description: "Review and file monthly pest control vendor report.", priority: "High", riskLevel: "High", consequence: "Pest infestations can lead to closure by health authorities and massive brand damage.", proof: "Vendor Report" },
                { id: "SANIT-04", description: "Check and clean grease traps weekly.", priority: "High", riskLevel: "Medium", consequence: "Blocked grease traps can cause foul odors and drainage blockages.", proof: "Grease Trap Log" },
                { id: "SANIT-05", description: "Ensure waste bins are emptied and sanitized daily.", priority: "High", riskLevel: "Medium", consequence: "Overflowing bins attract pests and create unsanitary conditions.", proof: "Waste Management Log" },
                { id: "SANIT-06", description: "Sanitize all food contact surfaces between tasks.", priority: "High", riskLevel: "High", consequence: "Prevents cross-contamination between different food types.", proof: "Visual Audit" },
                { id: "SANIT-07", description: "Deep clean floors and drains weekly.", priority: "High", riskLevel: "Medium", consequence: "Dirty floors and drains can harbor bacteria and attract pests.", proof: "Floor Cleaning Log" },
                { id: "SANIT-08", description: "Clean and descale dishwashers monthly.", priority: "High", riskLevel: "Medium", consequence: "Ensures dishes are being sanitized at the correct temperature.", proof: "Dishwasher Log" },
                { id: "SANIT-09", description: "Check that cleaning chemicals are stored safely and correctly.", priority: "High", riskLevel: "High", consequence: "Improper storage can lead to chemical contamination of food.", proof: "Chemical Store Audit" },
                { id: "SANIT-10", description: "Train staff on correct cleaning procedures and chemical use.", priority: "High", riskLevel: "High", consequence: "Improper use of chemicals can be ineffective or dangerous.", proof: "Training Log" }
            ]
        },
        {
            title: "Service Incident Procedure",
            department: "Management",
            frequency: "Per Incident",
            role: "Restaurant Manager",
            summary: "A structured process to handle customer complaints and prevent reputation loss.",
            icon: "siren",
            tasks: [
                { id: "INC-REST-01", description: "Document customer complaint in the incident log.", priority: "High", riskLevel: "High", consequence: "Lack of documentation makes it impossible to track trends or defend against legal claims.", proof: "Incident Log" },
                { id: "INC-REST-02", description: "Quarantine and label any suspected contaminated food batch.", priority: "High", riskLevel: "High", consequence: "Failure to quarantine can lead to more customers being affected.", proof: "Quarantine Log & Photo" },
                { id: "INC-REST-03", description: "Notify the local health authority if the incident is severe (e.g., multiple cases of food poisoning).", priority: "High", riskLevel: "High", consequence: "Failure to report can lead to severe legal penalties.", proof: "Notification Record" },
                { id: "INC-REST-04", description: "Offer a resolution to the guest (e.g., refund, complimentary meal) and document it.", priority: "High", riskLevel: "Medium", consequence: "Poor handling of the complaint can escalate the situation.", proof: "Guest Resolution Log" },
                { id: "INC-REST-05", description: "Conduct a root cause analysis of the incident with the kitchen team.", priority: "High", riskLevel: "High", consequence: "Without RCA, the same mistake is likely to happen again.", proof: "RCA Report" },
                { id: "INC-REST-06", description: "Collect contact information from the affected guest for follow-up.", priority: "High", riskLevel: "High", consequence: "Shows accountability and allows for follow-up communication.", proof: "Contact Form" },
                { id: "INC-REST-07", description: "Preserve any food samples for testing if necessary.", priority: "High", riskLevel: "High", consequence: "Crucial evidence for determining the cause of the incident.", proof: "Sample Log" },
                { id: "INC-REST-08", description: "Interview all staff involved in the incident.", priority: "High", riskLevel: "High", consequence: "Helps to understand the sequence of events and identify process gaps.", proof: "Interview Notes" },
                { id: "INC-REST-09", description: "Implement corrective actions to prevent recurrence.", priority: "High", riskLevel: "High", consequence: "Turns a negative incident into a process improvement opportunity.", proof: "CAPA Plan" },
                { id: "INC-REST-10", description: "Review similar incidents to identify trends.", priority: "Medium", riskLevel: "Medium", consequence: "Helps to identify and fix systemic problems.", proof: "Trend Analysis Report" }
            ]
        },
        {
            title: "Raw Material Receiving",
            department: "Stores/Kitchen",
            frequency: "Per Delivery",
            role: "Storekeeper",
            summary: "The first line of defense against poor quality and contaminated ingredients.",
            icon: "package-check",
            tasks: [
                { id: "RM-01", description: "Verify vendor FSSAI license is valid.", priority: "High", riskLevel: "High", consequence: "Using ingredients from an unlicensed vendor is a major legal violation.", proof: "Vendor File" },
                { id: "RM-02", description: "Inspect delivery vehicle for cleanliness and temperature control.", priority: "High", riskLevel: "High", consequence: "A dirty or warm truck can contaminate the entire delivery.", proof: "Vehicle Inspection Log" },
                { id: "RM-03", description: "Check temperature of perishable goods upon arrival.", priority: "High", riskLevel: "High", consequence: "Accepting goods outside the safe temperature range is a major food safety risk.", proof: "Temperature Log" },
                { id: "RM-04", description: "Reject and document any items that do not meet quality standards.", priority: "High", riskLevel: "High", consequence: "Accepting sub-par ingredients leads to a sub-par final product.", proof: "Rejection Note" },
                { id: "RM-05", description: "Ensure goods are moved to appropriate storage immediately after receipt.", priority: "High", riskLevel: "Medium", consequence: "Leaving perishable items in the 'danger zone' allows bacteria to grow.", proof: "CCTV review" },
                { id: "RM-06", description: "Check for signs of pests in packaging.", priority: "High", riskLevel: "High", consequence: "Can introduce a pest infestation into your facility.", proof: "Visual Inspection Log" },
                { id: "RM-07", description: "Verify that packaging is intact and not damaged.", priority: "High", riskLevel: "High", consequence: "Damaged packaging can lead to contamination.", proof: "Visual Check" },
                { id: "RM-08", description: "Match the delivery challan with the purchase order.", priority: "High", riskLevel: "High", consequence: "Prevents incorrect deliveries and billing errors.", proof: "Document Match" },
                { id: "RM-09", description: "Check the 'best before' or expiry dates of all products.", priority: "High", riskLevel: "High", consequence: "Accepting near-expiry goods leads to waste and potential safety issues.", proof: "Date Check Log" },
                { id: "RM-10", description: "Record all received goods in the inventory system.", priority: "High", riskLevel: "High", consequence: "Inaccurate receiving leads to incorrect inventory levels.", proof: "System Entry" }
            ]
        },
        {
            title: "Staff Hygiene & Training",
            department: "HR/Hygiene",
            frequency: "Ongoing",
            role: "Hygiene Officer",
            summary: "Ensures staff meet strict hygiene standards to prevent food contamination.",
            icon: "user-check",
            tasks: [
                { id: "SH-01", description: "Conduct daily checks for clean uniforms, nails, and hairnets.", priority: "High", riskLevel: "Medium", consequence: "Poor personal hygiene can lead to food contamination.", proof: "Daily Staff Audit Log" },
                { id: "SH-02", description: "Perform random audits of handwashing procedures.", priority: "High", riskLevel: "High", consequence: "Improper handwashing is a leading cause of foodborne illness.", proof: "Handwashing Audit" },
                { id: "SH-03", description: "Conduct and document monthly refresher training on hygiene.", priority: "High", riskLevel: "Medium", consequence: "Staff forget procedures over time; regular training reinforces good habits.", proof: "Training Records" },
                { id: "SH-04", description: "Screen new staff for any communicable diseases.", priority: "High", riskLevel: "High", consequence: "A sick food handler can cause a major outbreak.", proof: "Medical Fitness Certificate" },
                { id: "SH-05", description: "Ensure 'Staff Only' areas are clearly marked and access is restricted.", priority: "Medium", riskLevel: "Low", consequence: "Prevents unauthorized personnel from entering food prep areas.", proof: "Visual check and signage" },
                { id: "SH-06", description: "Provide and enforce the use of gloves for handling ready-to-eat foods.", priority: "High", riskLevel: "High", consequence: "Prevents direct hand-to-food contamination.", proof: "Glove Usage Audit" },
                { id: "SH-07", description: "Ensure a 'no jewelry' policy is followed by kitchen staff.", priority: "High", riskLevel: "High", consequence: "Jewelry can fall into food, creating a physical hazard.", proof: "Visual Check" },
                { id: "SH-08", description: "Maintain records of all staff hygiene training.", priority: "High", riskLevel: "Medium", consequence: "Crucial for proving due diligence during a health inspection.", proof: "Master Training File" },
                { id: "SH-09", description: "Have a clear policy for staff who are sick.", priority: "High", riskLevel: "High", consequence: "Prevents sick employees from coming to work and spreading illness.", proof: "Sick Leave Policy" },
                { id: "SH-10", description: "Ensure staff have access to and use hand sanitizers.", priority: "High", riskLevel: "Medium", consequence: "Provides an extra layer of hygiene control.", proof: "Supply Check" }
            ]
        },
        {
            title: "Waste Management & Pest Control",
            department: "Hygiene",
            frequency: "Daily/Weekly",
            role: "Supervisor",
            summary: "Maintains a pest-free and sanitary facility.",
            icon: "bug",
            tasks: [
                { id: "WP-01", description: "Ensure waste is segregated into designated bins (wet, dry, recyclable).", priority: "High", riskLevel: "Medium", consequence: "Required by law in many areas and better for the environment.", proof: "Waste Segregation Audit" },
                { id: "WP-02", description: "Follow a schedule for cleaning and sanitizing all waste bins.", priority: "High", riskLevel: "Medium", consequence: "Dirty bins attract pests and create foul odors.", proof: "Bin Cleaning Log" },
                { id: "WP-03", description: "Inspect pest control traps and bait stations weekly.", priority: "High", riskLevel: "High", consequence: "Allows for early detection of pest activity.", proof: "Pest Trap Log" },
                { id: "WP-04", description: "Review and file the monthly service report from the pest control vendor.", priority: "High", riskLevel: "High", consequence: "Provides a professional assessment and is crucial for health audits.", proof: "Vendor Report" },
                { id: "WP-05", description: "Keep external waste area clean to deter pests.", priority: "High", riskLevel: "High", consequence: "An overflowing external bin is an open invitation for rodents and flies.", proof: "Photo Log" },
                { id: "WP-06", description: "Ensure all drains are clean and free-flowing.", priority: "High", riskLevel: "Medium", consequence: "Blocked drains can harbor bacteria and create pest breeding grounds.", proof: "Drain Cleaning Log" },
                { id: "WP-07", description: "Check for any signs of pest activity (droppings, gnaw marks).", priority: "High", riskLevel: "High", consequence: "Early detection is key to preventing a full-blown infestation.", proof: "Pest Activity Log" },
                { id: "WP-08", description: "Ensure all doors and windows are properly sealed to prevent pest entry.", priority: "High", riskLevel: "High", consequence: "Prevents pests from entering the premises.", proof: "Structural Audit" },
                { id: "WP-09", description: "Train staff on pest awareness and reporting.", priority: "Medium", riskLevel: "Medium", consequence: "Staff are the first line of defense in spotting pest issues.", proof: "Training Log" },
                { id: "WP-10", description: "Dispose of waste in a timely manner to avoid accumulation.", priority: "High", riskLevel: "High", consequence: "Accumulated waste is a primary attractant for pests.", proof: "Waste Disposal Log" }
            ]
        },
        {
            title: "Closing & End-of-Day Procedure",
            department: "Management",
            frequency: "Daily",
            role: "Closing Manager",
            summary: "Ensures the restaurant is shut down safely and financial records are accurate.",
            icon: "lock",
            tasks: [
                { id: "EOD-01", description: "Reconcile all cash, card, and digital payments against POS sales.", priority: "High", riskLevel: "High", consequence: "Failure to reconcile can hide theft or major accounting errors.", proof: "Sales Reconciliation Report" },
                { id: "EOD-02", description: "Ensure all kitchen equipment is properly shut down and cleaned.", priority: "High", riskLevel: "High", consequence: "Leaving equipment on overnight is a fire hazard and wastes energy.", proof: "Kitchen Closing Checklist" },
                { id: "EOD-03", description: "Verify that the main gas line to the kitchen is turned off.", priority: "High", riskLevel: "High", consequence: "A gas leak overnight can lead to a catastrophic explosion.", proof: "Gas Valve Check Log" },
                { id: "EOD-04", description: "Secure all doors and windows, and activate the security alarm.", priority: "High", riskLevel: "High", consequence: "Leaving the premises unsecured is an open invitation for burglary.", proof: "Security Log" },
                { id: "EOD-05", description: "Complete the manager's closing report, noting any incidents or issues.", priority: "High", riskLevel: "Medium", consequence: "Loses valuable information for the next day's team.", proof: "Manager Logbook" },
                { id: "EOD-06", description: "Store all perishable food items correctly.", priority: "High", riskLevel: "High", consequence: "Improper storage leads to spoilage and waste.", proof: "Storage Check" },
                { id: "EOD-07", description: "Empty all trash cans and clean the waste area.", priority: "High", riskLevel: "Medium", consequence: "Prevents overnight pest activity and odors.", proof: "Waste Area Log" },
                { id: "EOD-08", description: "Turn off all non-essential lights and electronics.", priority: "High", riskLevel: "Low", consequence: "Wastes energy and increases utility costs.", proof: "Visual Check" },
                { id: "EOD-09", description: "Lock up all alcoholic beverages.", priority: "High", riskLevel: "High", consequence: "Prevents theft of high-value liquor stock.", proof: "Liquor Storage Log" },
                { id: "EOD-10", description: "Check that all restrooms are clean and stocked for the next day.", priority: "Medium", riskLevel: "Low", consequence: "Ensures the restaurant is ready for the first customers of the day.", proof: "Restroom Check" }
            ]
        }
    ]
};
