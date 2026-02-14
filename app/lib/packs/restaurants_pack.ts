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
                { id: "REST-OPEN-01", description: "Pre-heat all ovens to their required temperatures for the first bake.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent baking results, wasted product.", proof: "Oven Temperature Log" },
                { id: "REST-OPEN-02", description: "Inspect mixers and other equipment for cleanliness and functionality.", priority: "High", riskLevel: "High", consequence: "Equipment malfunction causes downtime; poor hygiene is a food safety risk.", proof: "Equipment Check Log" },
                { id: "REST-OPEN-03", description: "Review the day's production schedule and special orders.", priority: "High", riskLevel: "High", consequence: "Missing a special order or producing wrong quantities leads to customer dissatisfaction.", proof: "Production Sheet" },
                { id: "REST-OPEN-04", description: "Pull all required ingredients from storage based on the production plan.", priority: "High", riskLevel: "Medium", consequence: "Production delays due to missing ingredients.", proof: "Ingredient Pull Sheet" },
                { id: "REST-OPEN-05", description: "Calibrate food thermometers.", priority: "High", riskLevel: "High", consequence: "Incorrect cooking temperatures, leading to unsafe food.", proof: "Calibration Log" },
                { id: "REST-OPEN-06", description: "Sanitize all food preparation surfaces.", priority: "High", riskLevel: "High", consequence: "Cross-contamination, foodborne illness.", proof: "Sanitization Log" },
                { id: "REST-OPEN-07", description: "Ensure handwashing stations are stocked.", priority: "High", riskLevel: "High", consequence: "Poor hand hygiene among staff, spread of germs.", proof: "Visual Check" },
                { id: "REST-OPEN-08", description: "Brief kitchen staff on daily specials and expected volume.", priority: "High", riskLevel: "Low", consequence: "Kitchen unprepared for service, inconsistency.", proof: "Briefing Notes" },
                { id: "REST-OPEN-09", description: "Check that fire suppression systems are armed and clear.", priority: "High", riskLevel: "High", consequence: "Inability to control a kitchen fire.", proof: "Safety System Log" },
                { id: "REST-OPEN-10", description: "Verify that all gas lines are secure and free of leaks.", priority: "High", riskLevel: "High", consequence: "Gas leak can lead to explosion or fire.", proof: "Leak Test Log" }
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
                { id: "CASH-06", description: "Limit the amount of cash in each POS drawer.", priority: "High", riskLevel: "High", consequence: "Reduces the potential loss in case of a robbery.", proof: "Cash Drawer Limit Policy" },
                { id: "CASH-07", description: "Ensure CCTV cameras are covering all cash handling points.", priority: "High", riskLevel: "High", consequence: "Provides crucial evidence in case of a theft or discrepancy.", proof: "CCTV Check Log" },
                { id: "CASH-08", description: "Reconcile credit card settlements daily.", priority: "High", riskLevel: "High", consequence: "Ensures that all card transactions have been correctly processed and settled by the bank.", proof: "Settlement Report" },
                { id: "CASH-09", description: "Train all cashiers on cash handling procedures and fraud prevention.", priority: "High", riskLevel: "High", consequence: "Untrained cashiers are more likely to make errors or fall for scams.", proof: "Training Records" },
                { id: "CASH-10", description: "Securely store all financial records.", priority: "High", riskLevel: "High", consequence: "Protects sensitive financial data from theft or misuse.", proof: "Secure Storage" }
            ]
        }
    ]
};
