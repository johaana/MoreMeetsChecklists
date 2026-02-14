import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Hospitality",
    description: "The complete operational toolkit for restaurant owners and managers to ensure food safety, service quality, and profitability.",
    icon: "utensils-crossed",
    badgeText: "Bestseller",
    badgeVariant: "default",
    bestseller: true,
    whoIsItFor: ["Restaurant Owners", "Cafe Owners", "Cloud Kitchen Operators", "Heads of F&B"],
    sampleItems: [
        { text: "Ensure FSSAI & HACCP compliance with daily kitchen opening & closing checklists.", icon: "shield-check" },
        { text: "Prevent food poisoning and spoilage with temperature and hygiene SOPs.", icon: "thermometer" },
        { text: "Deliver a 5-star guest experience with front-of-house service sequence checklists.", icon: "star" },
        { text: "Reduce wastage with a structured inventory, ordering, and stock control system.", icon: "recycle" },
        { text: "Maintain a pristine and safe environment with cleaning schedules and incident reports.", icon: "sparkles" },
        { text: "Protect your revenue with cash handling, reconciliation, and fraud prevention protocols.", icon: "banknote" }
    ],
    checklists: [
        {
            title: "Opening Checklist (Kitchen)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Chef de Partie",
            summary: "Ensures the kitchen is ready and safe for service.",
            icon: "sunrise",
            tasks: [
                { id: "REST-OPEN-01", description: "Log temperatures of all refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Spoilage of ingredients, foodborne illness outbreak, loss of inventory.", proof: "Temperature Logbook" },
                { id: "REST-OPEN-02", description: "Calibrate food thermometers.", priority: "High", riskLevel: "High", consequence: "Incorrect cooking temperatures, leading to unsafe food.", proof: "Calibration Log" },
                { id: "REST-OPEN-03", description: "Sanitize all food preparation surfaces.", priority: "High", riskLevel: "High", consequence: "Cross-contamination, foodborne illness.", proof: "Sanitization Log" },
                { id: "REST-OPEN-04", description: "Check availability of all ingredients for the day's menu.", priority: "High", riskLevel: "Medium", consequence: "Menu items unavailable, customer dissatisfaction.", proof: "Stock Check Sheet" },
                { id: "REST-OPEN-05", description: "Inspect all equipment for cleanliness and functionality.", priority: "High", riskLevel: "Medium", consequence: "Equipment failure during service, delays.", proof: "Equipment Check Log" },
                { id: "REST-OPEN-06", description: "Ensure handwashing stations are stocked.", priority: "High", riskLevel: "High", consequence: "Poor hand hygiene among staff, spread of germs.", proof: "Visual Check" },
                { id: "REST-OPEN-07", description: "Brief kitchen staff on daily specials and expected volume.", priority: "High", riskLevel: "Low", consequence: "Kitchen unprepared for service, inconsistency.", proof: "Briefing Notes" },
                { id: "REST-OPEN-08", description: "Check that fire suppression systems are armed and clear.", priority: "High", riskLevel: "High", consequence: "Inability to control a kitchen fire.", proof: "Safety System Log" },
                { id: "REST-OPEN-09", description: "Verify that all gas lines are secure and free of leaks.", priority: "High", riskLevel: "High", consequence: "Gas leak can lead to explosion or fire.", proof: "Leak Test Log" },
                { id: "REST-OPEN-10", description: "Set up mise en place for all stations.", priority: "High", riskLevel: "Low", consequence: "Slow service and chaos during peak hours.", proof: "Station Check" }
            ]
        },
        {
            title: "Closing Checklist (Kitchen)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Closing Chef",
            summary: "Ensures the kitchen is shut down safely and hygienically.",
            icon: "sunset",
            tasks: [
                { id: "REST-CLOSE-01", description: "Clean and sanitize all equipment and surfaces.", priority: "High", riskLevel: "High", consequence: "Pest infestation, bacterial growth overnight.", proof: "Cleaning Log" },
                { id: "REST-CLOSE-02", description: "Properly store all leftover food, labeling with date and time.", priority: "High", riskLevel: "High", consequence: "Food spoilage, risk of using old ingredients.", proof: "Storage Labels" },
                { id: "REST-CLOSE-03", description: "Dispose of all waste and clean garbage bins.", priority: "High", riskLevel: "Medium", consequence: "Pest attraction, foul odors.", proof: "Waste Disposal Log" },
                { id: "REST-CLOSE-04", description: "Turn off all cooking equipment and exhaust fans.", priority: "High", riskLevel: "High", consequence: "Fire hazard, energy wastage.", proof: "Equipment Shutdown Log" },
                { id: "REST-CLOSE-05", description: "Log temperatures of refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Ensures equipment is working correctly overnight to prevent spoilage.", proof: "Closing Temperature Log" },
                { id: "REST-CLOSE-06", description: "Wash all dishes, cutlery, and utensils.", priority: "High", riskLevel: "Medium", consequence: "Hardened food residue, bacterial growth.", proof: "Dishwasher Log" },
                { id: "REST-CLOSE-07", description: "Sweep and mop all kitchen floors.", priority: "High", riskLevel: "Medium", consequence: "Slip hazards, poor hygiene.", proof: "Floor Cleaning Log" },
                { id: "REST-CLOSE-08", description: "Check for any signs of pest activity.", priority: "High", riskLevel: "High", consequence: "An unnoticed infestation can grow rapidly.", proof: "Pest Sighting Log" },
                { id: "REST-CLOSE-09", description: "Secure all storage areas.", priority: "High", riskLevel: "High", consequence: "Theft of high-value ingredients.", proof: "Storage Lock-up Check" },
                { id: "REST-CLOSE-10", description: "Communicate any issues to the morning shift.", priority: "High", riskLevel: "Medium", consequence: "Morning shift is unaware of equipment issues or stock shortages.", proof: "Handover Log" }
            ]
        },
        {
            title: "F&B Service Standards",
            department: "Service",
            frequency: "Ongoing",
            role: "Restaurant Manager",
            summary: "A checklist to ensure a consistent and high-quality guest experience.",
            icon: "star",
            tasks: [
                { id: "FNB-SVC-01", description: "Greet and seat guests within 2 minutes of arrival.", priority: "High", riskLevel: "Medium", consequence: "Poor first impression, guest feels ignored.", proof: "CCTV Timestamp" },
                { id: "FNB-SVC-02", description: "Provide menu and water within 5 minutes of seating.", priority: "High", riskLevel: "Low", consequence: "Guest frustration, slow table turnover.", proof: "Service Timing Audit" },
                { id: "FNB-SVC-03", description: "Take orders accurately and make recommendations.", priority: "High", riskLevel: "Medium", consequence: "Wrong orders lead to food wastage and unhappy customers.", proof: "Order Accuracy Score" },
                { id: "FNB-SVC-04", description: "Serve food and drinks using correct service etiquette.", priority: "High", riskLevel: "Low", consequence: "Unprofessional service degrades the brand image.", proof: "Manager Observation" },
                { id: "FNB-SVC-05", description: "Perform a quality check within 2 minutes of serving the main course.", priority: "High", riskLevel: "High", consequence: "Allows you to fix any issues with the food before the guest gets more upset.", proof: "Guest Check-back Log" },
                { id: "FNB-SVC-06", description: "Clear plates promptly after guests finish a course.", priority: "High", riskLevel: "Low", consequence: "Dirty plates left on the table look messy and unprofessional.", proof: "Visual Check" },
                { id: "FNB-SVC-07", description: "Refill water glasses when they are half empty.", priority: "Medium", riskLevel: "Low", consequence: "A sign of attentive service.", proof: "Manager Observation" },
                { id: "FNB-SVC-08", description: "Present the bill accurately and process payment efficiently.", priority: "High", riskLevel: "High", consequence: "Billing errors are a major source of customer complaints.", proof: "Bill Accuracy Audit" },
                { id: "FNB-SVC-09", description: "Thank guests and invite them back upon departure.", priority: "High", riskLevel: "Low", consequence: "A positive final impression encourages repeat business.", proof: "Manager Observation" },
                { id: "FNB-SVC-10", description: "Handle guest complaints with empathy and offer a resolution.", priority: "High", riskLevel: "High", consequence: "Poor complaint handling can lead to negative online reviews and lost customers.", proof: "Complaint Resolution Log" }
            ]
        },
        {
            title: "Inventory & Stock Control",
            department: "Stores/Kitchen",
            frequency: "Daily/Weekly",
            role: "Storekeeper",
            summary: "A system to manage inventory levels, reduce waste, and control food costs.",
            icon: "boxes",
            tasks: [
                { id: "INV-01", description: "Conduct daily inventory of high-value items (e.g., premium meats, imported cheese).", priority: "High", riskLevel: "High", consequence: "Helps to quickly identify theft or misuse of expensive ingredients.", proof: "High-Value Item Log" },
                { id: "INV-02", description: "Perform a full weekly inventory count of all stock.", priority: "High", riskLevel: "High", consequence: "Essential for accurate food cost calculation and ordering.", proof: "Weekly Inventory Sheet" },
                { id: "INV-03", description: "Use FIFO (First-In, First-Out) for all ingredients to prevent spoilage.", priority: "High", riskLevel: "High", consequence: "A primary cause of food wastage.", proof: "Storage Audit" },
                { id: "INV-04", description: "Generate purchase orders based on par stock levels and demand forecast.", priority: "High", riskLevel: "High", consequence: "Prevents over-ordering (waste) or under-ordering (stockouts).", proof: "Purchase Orders" },
                { id: "INV-05", description: "Check all incoming deliveries for quality, quantity, and temperature.", priority: "High", riskLevel: "High", consequence: "The receiving dock is the first line of defense against poor quality ingredients.", proof: "Receiving Log" },
                { id: "INV-06", description: "Store all ingredients correctly (temperature, location, containers).", priority: "High", riskLevel: "High", consequence: "Improper storage leads to spoilage and food safety risks.", proof: "Storage Inspection" },
                { id: "INV-07", description: "Track and log all food wastage with reason codes.", priority: "High", riskLevel: "High", consequence: "If you don't track waste, you can't manage it. High waste is a major drain on profit.", proof: "Wastage Log" },
                { id: "INV-08", description: "Reconcile physical stock with POS sales data to identify discrepancies.", priority: "High", riskLevel: "High", consequence: "Helps to identify unauthorized consumption or theft.", proof: "Reconciliation Report" },
                { id: "INV-09", description: "Secure all storage areas.", priority: "High", riskLevel: "High", consequence: "An open storeroom is a major source of theft.", proof: "Access Log" },
                { id: "INV-10", description: "Analyze food cost percentage weekly.", priority: "High", riskLevel: "High", consequence: "The most important KPI for measuring kitchen profitability.", proof: "Food Cost Report" }
            ]
        },
        {
            title: "Housekeeping & Cleaning Schedule",
            department: "Housekeeping",
            frequency: "Daily/Weekly",
            role: "HK Supervisor",
            summary: "A schedule to ensure the entire restaurant is clean and hygienic.",
            icon: "sparkles",
            tasks: [
                { id: "HK-01", description: "Clean and sanitize all tables and chairs after each use.", priority: "High", riskLevel: "Medium", consequence: "Prevents cross-contamination and provides a clean table for the next guest.", proof: "Visual Check" },
                { id: "HK-02", description: "Inspect and clean restrooms hourly during service.", priority: "High", riskLevel: "High", consequence: "Dirty restrooms are one of the top reasons customers don't return.", proof: "Restroom Check Log" },
                { id: "HK-03", description: "Sweep and mop all guest-facing floors before, during, and after service.", priority: "High", riskLevel: "Medium", consequence: "A dirty floor is unsightly and a slip hazard.", proof: "Floor Cleaning Log" },
                { id: "HK-04", description: "Deep clean the kitchen and exhaust hoods weekly.", priority: "High", riskLevel: "High", consequence: "Grease buildup is a major fire hazard.", proof: "Deep Cleaning Log" },
                { id: "HK-05", description: "Manage waste disposal and keep garbage area clean.", priority: "High", riskLevel: "High", consequence: "Attracts pests.", proof: "Waste Area Log" },
                { id: "HK-06", description: "Clean all windows and glass surfaces daily.", priority: "Medium", riskLevel: "Low", consequence: "Dirty windows look unprofessional.", proof: "Window Cleaning Log" },
                { id: "HK-07", description: "Follow a pest control schedule and log any sightings.", priority: "High", riskLevel: "High", consequence: "A pest sighting can lead to a restaurant being shut down by health authorities.", proof: "Pest Control Log" },
                { id: "HK-08", description: "Ensure cleaning supplies are stocked and stored safely.", priority: "High", riskLevel: "Medium", consequence: "Improperly stored chemicals are a safety hazard.", proof: "Chemical Store Log" },
                { id: "HK-09", description: "Train all staff on cleaning procedures and chemical safety.", priority: "High", riskLevel: "High", consequence: "Untrained staff may use chemicals incorrectly, posing a risk to themselves and guests.", proof: "Training Records" },
                { id: "HK-10", description: "Sanitize high-touch surfaces (door handles, menus) hourly.", priority: "High", riskLevel: "High", consequence: "A key step in preventing the spread of germs.", proof: "Sanitization Log" }
            ]
        },
        {
            title: "Daily Cash Handling & Reconciliation",
            department: "Cash/Finance",
            frequency: "Daily",
            role: "Head Cashier",
            summary: "A process to ensure all sales are accurately recorded and cash is handled securely.",
            icon: "banknote",
            tasks: [
                { id: "CASH-01", description: "Reconcile each cashier's drawer at the end of their shift.", priority: "High", riskLevel: "High", consequence: "The only way to identify cash shortages or overages.", proof: "Shift Reconciliation Form" },
                { id: "CASH-02", description: "Manager to verify and sign off on all daily cash reports.", priority: "High", riskLevel: "High", consequence: "Provides a second layer of oversight to prevent fraud.", proof: "Signed Daily Sales Report" },
                { id: "CASH-03", description: "Prepare and log daily bank deposits.", priority: "High", riskLevel: "High", consequence: "Holding large amounts of cash on-site is a major security risk.", proof: "Bank Deposit Slip" },
                { id: "CASH-04", description: "Require manager approval for all voided bills and discounts.", priority: "High", riskLevel: "High", consequence: "A common method of internal fraud is to void a cash transaction and pocket the money.", proof: "Void/Discount Log" },
                { id: "CASH-05", description: "Use counterfeit detection pens/machines for all large bills.", priority: "High", riskLevel: "High", consequence: "Accepting counterfeit currency is a direct financial loss.", proof: "Counterfeit Check Log" },
                { id: "CASH-06", description: "Limit the amount of cash in each POS drawer.", priority: "High", riskLevel: "High", consequence: "Reduces the potential_loss in case of a robbery.", proof: "Cash Drawer Limit Policy" },
                { id: "CASH-07", description: "Ensure CCTV cameras are covering all cash handling points.", priority: "High", riskLevel: "High", consequence: "Provides crucial evidence in case of a theft or discrepancy.", proof: "CCTV Check Log" },
                { id: "CASH-08", description: "Reconcile credit card settlements daily.", priority: "High", riskLevel: "High", consequence: "Ensures that all card transactions have been correctly processed and settled by the bank.", proof: "Settlement Report" },
                { id: "CASH-09", description: "Train all cashiers on cash handling procedures and fraud prevention.", priority: "High", riskLevel: "High", consequence: "Untrained cashiers are more likely to make errors or fall for scams.", proof: "Training Records" },
                { id: "CASH-10", description: "Securely store all financial records.", priority: "High", riskLevel: "High", consequence: "Protects sensitive financial data from theft or misuse.", proof: "Secure Storage" }
            ]
        },
        {
            title: "Incident Reporting & Management",
            department: "Management",
            frequency: "Per Incident",
            role: "Duty Manager",
            summary: "A structured way to handle any incidents, from a guest complaint to a safety issue.",
            icon: "siren",
            tasks: [
                { id: "INC-01", description: "Log every incident with date, time, location, and description.", priority: "High", riskLevel: "High", consequence: "An undocumented incident is a major legal liability.", proof: "Incident Report Form" },
                { id: "INC-02", description: "Take photos and witness statements for any significant incident.", priority: "High", riskLevel: "High", consequence: "Provides crucial evidence for insurance claims or legal defense.", proof: "Photos & Statements" },
                { id: "INC-03", description: "Escalate serious incidents to senior management immediately.", priority: "High", riskLevel: "High", consequence: "Delay can worsen the situation and hinder effective crisis management.", proof: "Escalation Log" },
                { id: "INC-04", description: "Conduct a root cause analysis for all major incidents.", priority: "High", riskLevel: "High", consequence: "If you don't find the root cause, the same incident is likely to happen again.", proof: "RCA Report" },
                { id: "INC-05", description: "Implement corrective and preventive actions (CAPA).", priority: "High", riskLevel: "High", consequence: "The most important step to prevent recurrence.", proof: "CAPA Plan" },
                { id: "INC-06", description: "Preserve any relevant CCTV footage.", priority: "High", riskLevel: "High", consequence: "Loss of footage can cripple an investigation.", proof: "Footage Saved Confirmation" },
                { id: "INC-07", description: "Follow up with any affected guests or staff.", priority: "High", riskLevel: "High", consequence: "Shows that the management is concerned and taking action.", proof: "Follow-up Log" },
                { id: "INC-08", description: "Report incidents to authorities or insurance as required.", priority: "High", riskLevel: "High", consequence: "A legal and contractual requirement.", proof: "Report Filing" },
                { id: "INC-09", description: "Review incident reports weekly to identify trends.", priority: "High", riskLevel: "High", consequence: "Helps to identify recurring problems that need a systemic fix.", proof: "Weekly Review Meeting" },
                { id: "INC-10", description: "Use incident data to update training and procedures.", priority: "High", riskLevel: "High", consequence: "Turns incidents into learning opportunities.", proof: "Updated SOPs" }
            ]
        },
        {
            title: "Staff Hygiene & Training",
            department: "HR/Hygiene",
            frequency: "Ongoing",
            role: "HR Manager",
            summary: "Ensures all staff are trained and compliant with hygiene standards.",
            icon: "user-check",
            tasks: [
                { id: "HYG-TRAIN-01", description: "Conduct daily checks for clean uniforms, nails, and hairnets.", priority: "High", riskLevel: "High", consequence: "Poor personal hygiene is a major food safety risk.", proof: "Daily Staff Audit Log" },
                { id: "HYG-TRAIN-02", description: "Enforce strict handwashing protocols.", priority: "High", riskLevel: "High", consequence: "The primary way to prevent the spread of foodborne illness.", proof: "Handwashing Audit" },
                { id: "HYG-TRAIN-03", description: "Ensure all new hires complete FSSAI FoSTaC training.", priority: "High", riskLevel: "High", consequence: "A legal requirement and a baseline for food safety knowledge.", proof: "FoSTaC Certificates" },
                { id: "HYG-TRAIN-04", description: "Provide documented refresher training on food safety annually.", priority: "High", riskLevel: "High", consequence: "Keeps knowledge fresh and reinforces good habits.", proof: "Refresher Training Log" },
                { id: "HYG-TRAIN-05", description: "Maintain training records for all employees.", priority: "High", riskLevel: "High", consequence: "Essential for proving due diligence during a health inspection.", proof: "Master Training File" },
                { id: "HYG-TRAIN-06", description: "Have a clear policy for sick employees not to handle food.", priority: "High", riskLevel: "High", consequence: "A sick employee can cause a major outbreak.", proof: "Sick Leave Policy" },
                { id: "HYG-TRAIN-07", description: "Post hygiene reminders in staff areas.", priority: "Medium", riskLevel: "Low", consequence: "Helps to keep food safety top-of-mind.", proof: "Visual Check" },
                { id: "HYG-TRAIN-08", description: "Audit staff compliance with hygiene rules.", priority: "High", riskLevel: "High", consequence: "Policies are useless without enforcement.", proof: "Hygiene Compliance Report" },
                { id: "HYG-TRAIN-09", description: "Conduct pre-employment medical checks for food handlers.", priority: "High", riskLevel: "High", consequence: "Prevents hiring individuals with communicable diseases.", proof: "Medical Reports" },
                { id: "HYG-TRAIN-10", description: "Train staff on allergen management.", priority: "High", riskLevel: "High", consequence: "Can prevent a life-threatening allergic reaction in a customer.", proof: "Allergen Training Log" }
            ]
        },
        {
            title: "Regulatory Compliance (FSSAI)",
            department: "Compliance",
            frequency: "Ongoing",
            role: "Owner/Manager",
            summary: "A checklist to ensure compliance with FSSAI and other local regulations.",
            icon: "file-check-2",
            tasks: [
                { id: "FSSAI-01", description: "Ensure the FSSAI license is valid and displayed prominently.", priority: "High", riskLevel: "High", consequence: "A legal requirement; failure can lead to closure.", proof: "Displayed License" },
                { id: "FSSAI-02", description: "Maintain all required records for FSSAI inspections.", priority: "High", riskLevel: "High", consequence: "Lack of records is a major red flag for inspectors.", proof: "Compliance File" },
                { id: "FSSAI-03", description: "Use only FSSAI-approved suppliers for raw materials.", priority: "High", riskLevel: "High", consequence: "Using unapproved suppliers can introduce unsafe ingredients.", proof: "Supplier Approval List" },
                { id: "FSSAI-04", description: "Ensure all food handlers have completed FoSTaC training.", priority: "High", riskLevel: "High", consequence: "A mandatory training for all food handlers in India.", proof: "FoSTaC Certificates" },
                { id: "FSSAI-05", description: "Ensure potable water is used for all cooking and cleaning.", priority: "High", riskLevel: "High", consequence: "Contaminated water can cause widespread illness.", proof: "Water Test Report" },
                { id: "FSSAI-06", description: "Comply with labeling regulations for any packaged products.", priority: "High", riskLevel: "High", consequence: "Incorrect labeling is a legal violation.", proof: "Label Audit" },
                { id: "FSSAI-07", description: "Cooperate fully with any food safety inspections.", priority: "High", riskLevel: "High", consequence: "Lack of cooperation can lead to harsher penalties.", proof: "Inspection Report" },
                { id: "FSSAI-08", description: "Maintain a pest control program and records.", priority: "High", riskLevel: "High", consequence: "A key requirement for FSSAI licensing.", proof: "Pest Control Records" },
                { id: "FSSAI-09", description: "Implement a product recall plan.", priority: "High", riskLevel: "High", consequence: "Necessary for managing a food safety incident effectively.", proof: "Recall Plan" },
                { id: "FSSAI-10", description: "Stay updated on any changes to FSSAI regulations.", priority: "High", riskLevel: "High", consequence: "Ignorance of the law is not an excuse for non-compliance.", proof: "Regulatory Update Log" }
            ]
        }
    ]
};
