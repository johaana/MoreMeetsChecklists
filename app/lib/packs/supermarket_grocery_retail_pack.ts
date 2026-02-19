
import type { PremiumPack } from "@/lib/premium-packs";

export const supermarket_grocery_retail_pack: PremiumPack = {
    id: 'supermarket_grocery_retail_pack',
    title: "Supermarket & Grocery Retail Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d6d4dd85-3fb9-4c26-8ec3-cb021ddebfdc',
    category: "Retail",
    description: "Stop inventory shrinkage, cold-chain failures, and regulatory fines—before they destroy your retail margins and brand reputation.",
    heroHeadline: "Eliminate food spoilage and health department closures.",
    heroSubheadline: "Built for high-volume grocery chains that take zero-risk inventory and safety protocols seriously.",
    pricingUrgency: "A single refrigeration failure or expired item lawsuit costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "shopping-basket",
    badgeText: "Bestseller",
    badgeVariant: "accent",
    whoIsItFor: ["Supermarket Owners", "Grocery Store Proprietors", "Heads of Retail Operations", "Store Directors", "Department Heads (Fresh Food, Dairy)", "3PL Partners"],
    sampleItems: [
        { text: "<strong>Prevent</strong> spoilage and foodborne illness with robust cold chain and perishables temperature management.", icon: "thermometer" },
        { text: "<strong>Minimize</strong> waste and ensure freshness with a daily FIFO rotation and expiry date sweep process.", icon: "recycle" },
        { text: "<strong>Maintain</strong> a safe and inviting store with checklists for hygiene, cleaning, and rapid spill response.", icon: "spray-can" },
        { text: "<strong>Protect</strong> your revenue through rigorous point-of-sale security and cash reconciliation.", icon: "dollar-sign" },
        { text: "<strong>Guarantee</strong> food quality from the source with a stringent raw material receiving and QC process.", icon: "package-check" },
        { text: "<strong>Ensure</strong> compliance and fair trade with weighing scale calibration and Legal Metrology checks.", icon: "scale" }
    ],
    checklists: [
        {
            title: "Cold Chain & Perishables Management",
            department: "Fresh Produce/Dairy",
            frequency: "Daily",
            role: "Department Manager",
            summary: "Ensures the freshness and safety of all temperature-sensitive products.",
            icon: "thermometer",
            tasks: [
                { id: "SC-COLD-01", description: "Log temperatures of all chillers and freezers twice daily.", priority: "High", riskLevel: "High", consequence: "A temperature failure can lead to rapid bacterial growth, causing food spoilage, waste, and severe foodborne illness outbreaks.", proof: "Temperature Log" },
                { id: "SC-COLD-02", description: "Verify functionality of temperature alarms weekly.", priority: "High", riskLevel: "High", consequence: "A non-functional alarm means a temperature failure can go unnoticed for hours, leading to catastrophic inventory loss.", proof: "Alarm Test Log" },
                { id: "SC-COLD-03", description: "Check door seals on all refrigerated units daily.", priority: "High", riskLevel: "Medium", consequence: "Damaged seals lead to energy waste and make it harder to maintain safe temperatures, increasing operational costs and spoilage risk.", proof: "Visual Inspection" },
                { id: "SC-COLD-04", description: "Ensure backup power for cold storage is tested weekly.", priority: "High", riskLevel: "High", consequence: "During a power outage, failure of backup power can result in the loss of all perishable inventory, a major financial blow.", proof: "Generator Test Log" },
                { id: "SC-COLD-05", description: "Document any temperature excursions and the corrective actions taken.", priority: "High", riskLevel: "High", consequence: "Lack of documentation makes it impossible to prove due diligence during a health inspection or trace the cause of a spoilage event.", proof: "Corrective Action Report" },
                { id: "SC-COLD-06", description: "Ensure goods are moved to cold storage immediately upon receipt.", priority: "High", riskLevel: "High", consequence: "Delays break the cold chain, promoting bacterial growth.", proof: "Receiving Log" },
                { id: "SC-COLD-07", description: "Clean and sanitize all refrigerated units weekly.", priority: "High", riskLevel: "High", consequence: "Prevents mold, bacteria buildup, and cross-contamination.", proof: "Cleaning Log" },
                { id: "SC-COLD-08", description: "Do not overload refrigerated units to allow for proper air circulation.", priority: "High", riskLevel: "Medium", consequence: "Overloading creates 'hot spots' where food can spoil.", proof: "Visual Check" },
                { id: "SC-COLD-09", description: "Train staff on cold chain management procedures.", priority: "High", riskLevel: "Medium", consequence: "Untrained staff may unknowingly break the cold chain protocols.", proof: "Training Records" },
                { id: "SC-COLD-10", description: "Calibrate thermometers quarterly.", priority: "High", riskLevel: "High", consequence: "Inaccurate thermometers give a false sense of safety.", proof: "Calibration Certificates" }
            ]
        },
        {
            title: "FIFO & Expiry Sweep SOP",
            department: "Inventory",
            frequency: "Daily",
            role: "Floor Staff",
            summary: "A process to ensure freshness, reduce waste, and prevent the sale of expired goods.",
            icon: "recycle",
            tasks: [
                { id: "SC-FIFO-01", description: "Conduct daily expiry sweeps for high-risk items like dairy and bread.", priority: "High", riskLevel: "High", consequence: "Selling expired food is a major health risk and can lead to severe legal penalties.", proof: "Sweep Log" },
                { id: "SC-FIFO-02", description: "Ensure First-In, First-Out (FIFO) rotation during shelf replenishment.", priority: "High", riskLevel: "High", consequence: "Failure to rotate stock is a primary cause of food wastage and selling expired products.", proof: "Supervisor Audit" },
                { id: "SC-FIFO-03", description: "Follow markdown or quarantine procedures for near-expiry items.", priority: "High", riskLevel: "Medium", consequence: "Reduces financial loss from unsold expired goods.", proof: "Markdown Log" },
                { id: "SC-FIFO-04", description: "Remove and log all expired products from shelves immediately.", priority: "High", riskLevel: "High", consequence: "Leaving expired products on shelves poses a direct risk to consumer health.", proof: "Expired Goods Log" },
                { id: "SC-FIFO-05", description: "Train staff on how to read and interpret expiry date codes.", priority: "High", riskLevel: "Medium", consequence: "Staff may misinterpret codes and leave expired products on the shelf.", proof: "Training Record" },
                { id: "SC-FIFO-06", description: "Donate or dispose of expired goods according to policy.", priority: "High", riskLevel: "Medium", consequence: "Improper disposal can lead to legal issues or brand damage.", proof: "Donation/Disposal Log" },
                { id: "SC-FIFO-07", description: "Audit stockroom for FIFO compliance weekly.", priority: "High", riskLevel: "High", consequence: "Ensures older stock is moved to the front line.", proof: "Stockroom Audit Log" },
                { id: "SC-FIFO-08", description: "Review reports on expired goods to identify purchasing issues.", priority: "High", riskLevel: "Medium", consequence: "Helps to adjust order quantities and prevent future over-ordering.", proof: "Analysis Report" },
                { id: "SC-FIFO-09", description: "Ensure near-expiry items are clearly marked for customers.", priority: "High", riskLevel: "Low", consequence: "Provides transparency to customers and helps sell items faster.", proof: "Signage Check" },
                { id: "SC-FIFO-10", description: "Manager to sign off on all expired goods disposal.", priority: "High", riskLevel: "High", consequence: "Prevents unauthorized removal of stock under the guise of 'expiry'.", proof: "Signed Disposal Form" }
            ]
        },
        {
            title: "Store Cleaning & Spill Response",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Housekeeping Staff",
            summary: "A protocol to maintain a clean, safe, and welcoming store environment.",
            icon: "sparkles",
            tasks: [
                { id: "SC-CLEAN-01", description: "Perform and log hourly checks of all aisles for spills or hazards.", priority: "High", riskLevel: "High", consequence: "A liquid spill is a major slip-and-fall hazard, leading to customer injuries and lawsuits.", proof: "Aisle Check Log" },
                { id: "SC-CLEAN-02", description: "Deploy 'Wet Floor' signs immediately for any spills.", priority: "High", riskLevel: "High", consequence: "Failure to warn customers is a major point of legal liability.", proof: "CCTV Footage" },
                { id: "SC-CLEAN-03", description: "Log all spill incidents with time, location, and cleanup action.", priority: "High", riskLevel: "Medium", consequence: "Provides a legal record of due diligence in case of a lawsuit.", proof: "Spill Incident Log" },
                { id: "SC-CLEAN-04", description: "Inspect and clean restrooms hourly.", priority: "High", riskLevel: "Medium", consequence: "Dirty restrooms are a major source of customer complaints and reflect poorly on the store.", proof: "Restroom Cleaning Log" },
                { id: "SC-CLEAN-05", description: "Ensure cleaning equipment is sanitized and stored correctly.", priority: "Medium", riskLevel: "Low", consequence: "Dirty equipment can spread germs instead of cleaning.", proof: "Storage Inspection" },
                { id: "SC-CLEAN-06", description: "Deep clean high-traffic areas daily after closing.", priority: "High", riskLevel: "Medium", consequence: "Prevents gradual buildup of dirt and grime.", proof: "Deep Clean Log" },
                { id: "SC-CLEAN-07", description: "Check and empty all trash bins regularly.", priority: "High", riskLevel: "Low", consequence: "Overflowing bins are unsightly and can attract pests.", proof: "Waste Bin Check" },
                { id: "SC-CLEAN-08", description: "Sanitize shopping carts and baskets daily.", priority: "High", riskLevel: "Medium", consequence: "Carts and baskets are high-touch surfaces that can spread germs.", proof: "Sanitization Log" },
                { id: "SC-CLEAN-09", description: "Use correct cleaning chemicals for different surfaces.", priority: "High", riskLevel: "Medium", consequence: "Using the wrong chemicals can damage surfaces or be ineffective.", proof: "Chemical Usage Log" },
                { id: "SC-CLEAN-10", description: "Train staff on spill response procedures.", priority: "High", riskLevel: "High", consequence: "A slow or improper response increases the risk of accidents.", proof: "Training Records" }
            ]
        },
        {
            title: "Inbound Supplier QC",
            department: "Receiving",
            frequency: "Per Delivery",
            role: "Receiving Clerk",
            summary: "A checklist to ensure all incoming goods meet quality and safety standards.",
            icon: "package-check",
            tasks: [
                { id: "SC-INBOUND-01", description: "Verify delivery quantity and items against the Purchase Order (PO).", priority: "High", riskLevel: "High", consequence: "Accepting incorrect quantities leads to inventory errors and financial discrepancies.", proof: "Signed Delivery Note" },
                { id: "SC-INBOUND-02", description: "Check batch numbers and expiry dates of all incoming products.", priority: "High", riskLevel: "High", consequence: "Accepting near-expiry goods leads to increased waste and potential safety issues.", proof: "Receiving Log" },
                { id: "SC-INBOUND-03", description: "Quarantine and document any non-conforming or damaged products.", priority: "High", riskLevel: "High", consequence: "Allowing damaged goods into stock leads to selling unsafe or low-quality products.", proof: "Quarantine Report" },
                { id: "SC-INBOUND-04", description: "Check temperature of chilled and frozen goods on arrival.", priority: "High", riskLevel: "High", consequence: "Accepting a delivery that has broken the cold chain is a critical food safety failure.", proof: "Inbound Temperature Log" },
                { id: "SC-INBOUND-05", description: "Inspect packaging for signs of pest activity or tampering.", priority: "High", riskLevel: "High", consequence: "Can introduce a pest infestation into the store.", proof: "Visual Inspection Log" },
                { id: "SC-INBOUND-06", description: "Reject deliveries that do not meet quality standards.", priority: "High", riskLevel: "High", consequence: "The receiving dock is the first and most important line of defense for quality.", proof: "Rejection Note" },
                { id: "SC-INBOUND-07", description: "Verify FSSAI license and other required documents from supplier.", priority: "High", riskLevel: "High", consequence: "Using an unlicensed supplier is a major legal and safety risk.", proof: "Document Check" },
                { id: "SC-INBOUND-08", description: "Update inventory system upon receipt of goods.", priority: "High", riskLevel: "High", consequence: "Delays in updating lead to inaccurate stock levels and potential stockouts.", proof: "System Entry Log" },
                { id: "SC-INBOUND-09", description: "Clean receiving area after each delivery.", priority: "High", riskLevel: "Medium", consequence: "A dirty receiving area can attract pests and lead to contamination.", proof: "Cleaning Log" },
                { id: "SC-INBOUND-10", description: "Report any discrepancies to the procurement team.", priority: "High", riskLevel: "High", consequence: "Allows procurement to address issues with the supplier.", proof: "Discrepancy Report" }
            ]
        },
        {
            title: "POS Security & Reconciliation",
            department: "Cash/Finance",
            frequency: "Daily",
            role: "Head Cashier",
            summary: "A checklist for secure and accurate point-of-sale operations.",
            icon: "circle-dollar-sign",
            tasks: [
                { id: "SC-POS-01", description: "Ensure all POS receipts have a clear timestamp.", priority: "High", riskLevel: "Medium", consequence: "Required for handling customer disputes and returns accurately.", proof: "Sample Receipt" },
                { id: "SC-POS-02", description: "Require manager sign-off for all voided transactions or high-value refunds.", priority: "High", riskLevel: "High", consequence: "A key control to prevent internal theft through fraudulent voids/refunds.", proof: "Void/Refund Log" },
                { id: "SC-POS-03", description: "Verify CCTV cameras at billing lanes are operational and have a clear view.", priority: "High", riskLevel: "High", consequence: "Provides critical evidence in case of cash disputes, theft, or scams.", proof: "CCTV Check Log" },
                { id: "SC-POS-04", description: "Reconcile each cash drawer at the end of every shift.", priority: "High", riskLevel: "High", consequence: "The only way to accurately track cash and identify shortages or overages.", proof: "Shift Reconciliation Report" },
                { id: "SC-POS-05", description: "Check for any signs of tampering on card payment devices.", priority: "High", riskLevel: "High", consequence: "Criminals can install skimmers to steal customer card data, leading to massive liability.", proof: "Device Inspection Log" },
                { id: "SC-POS-06", description: "Securely store cash in a safe.", priority: "High", riskLevel: "High", consequence: "Leaving cash in the till overnight is a major theft risk.", proof: "Safe Log" },
                { id: "SC-POS-07", description: "Use counterfeit detection for large cash transactions.", priority: "High", riskLevel: "High", consequence: "Accepting counterfeit notes is a direct financial loss.", proof: "Counterfeit Check" },
                { id: "SC-POS-08", description: "Train cashiers on fraud prevention techniques.", priority: "High", riskLevel: "High", consequence: "Untrained cashiers are easy targets for common retail scams.", proof: "Training Records" },
                { id: "SC-POS-09", description: "Limit cash in drawers to a minimum amount.", priority: "High", riskLevel: "High", consequence: "Reduces the potential loss in case of a till-snatch or robbery.", proof: "Cash Limit Policy" },
                { id: "SC-POS-10", description: "Investigate cash discrepancies immediately.", priority: "High", riskLevel: "High", consequence: "A small, unresolved discrepancy can be an indicator of a larger, ongoing theft problem.", proof: "Investigation Report" }
            ]
        },
        {
            title: "Weighing Scale Calibration",
            department: "Operations",
            frequency: "Daily/Scheduled",
            role: "Department Manager",
            summary: "Ensures all weighing scales are accurate and compliant with legal standards.",
            icon: "scale",
            tasks: [
                { id: "WSC-01", description: "Perform a daily zero-check on all weighing scales before use.", priority: "High", riskLevel: "High", consequence: "An uncalibrated scale can lead to overcharging or undercharging customers, a major legal violation.", proof: "Daily Check Log" },
                { id: "WSC-02", description: "Schedule and document annual calibration by a certified vendor.", priority: "High", riskLevel: "High", consequence: "This is a mandatory legal requirement under the Legal Metrology Act.", proof: "Calibration Certificate" },
                { id: "WSC-03", description: "Ensure the calibration certificate is displayed near the scale.", priority: "High", riskLevel: "Medium", consequence: "Provides transparency to customers and proof of compliance to inspectors.", proof: "Visual Check" },
                { id: "WSC-04", description: "Train staff on correct usage and cleaning of scales.", priority: "Medium", riskLevel: "Medium", consequence: "Improper use can damage the scales or lead to inaccurate readings.", proof: "Training Log" },
                { id: "WSC-05", description: "Immediately remove any malfunctioning scale from service and label it.", priority: "High", riskLevel: "High", consequence: "Using a faulty scale is a serious legal violation.", proof: "Out of Service Log" },
                { id: "WSC-06", description: "Keep scales clean and free of debris.", priority: "High", riskLevel: "Medium", consequence: "Debris can affect the accuracy of the weight.", proof: "Cleaning Log" },
                { id: "WSC-07", description: "Verify scale accuracy with standard weights weekly.", priority: "High", riskLevel: "High", consequence: "Provides an internal check on the scale's accuracy between official calibrations.", proof: "Weight Check Log" },
                { id: "WSC-08", description: "Ensure scales are on a level surface.", priority: "High", riskLevel: "Medium", consequence: "An unlevel surface will produce inaccurate readings.", proof: "Visual Check" },
                { id: "WSC-09", description: "Protect scales from physical damage.", priority: "High", riskLevel: "Medium", consequence: "Damage can affect accuracy and require costly repairs.", proof: "Visual Check" },
                { id: "WSC-10", description: "Comply with all Legal Metrology regulations.", priority: "High", riskLevel: "High", consequence: "Non-compliance can lead to heavy fines and store closure.", proof: "Compliance Audit" }
            ]
        },
        {
            title: "Bakery & Hot Food Safety",
            department: "F&B",
            frequency: "Daily",
            role: "Bakery/Kitchen Head",
            summary: "Specific food safety protocols for in-store production and hot food counters.",
            icon: "utensils",
            tasks: [
                { id: "BHF-01", description: "Log temperatures of hot holding units every 2 hours.", priority: "High", riskLevel: "High", consequence: "Food held below 60°C can enter the temperature 'danger zone' and grow harmful bacteria.", proof: "Temperature Log" },
                { id: "BHF-02", description: "Trace all ingredients used back to their source batch.", priority: "High", riskLevel: "High", consequence: "In case of a food poisoning complaint, traceability is essential to identify the source.", proof: "Ingredient Traceability Log" },
                { id: "BHF-03", description: "Use separate equipment for raw and cooked food preparation.", priority: "High", riskLevel: "High", consequence: "Prevents cross-contamination, a leading cause of foodborne illness.", proof: "Visual Audit" },
                { id: "BHF-04", description: "Discard any food held below the safe temperature for more than 2 hours.", priority: "High", riskLevel: "High", consequence: "Serving this food is a major health risk.", proof: "Discard Log" },
                { id: "BHF-05", description: "Ensure staff follow correct handwashing and glove usage protocols.", priority: "High", riskLevel: "High", consequence: "Poor hygiene is a primary vector for spreading pathogens.", proof: "Hygiene Audit" },
                { id: "BHF-06", description: "Label all prepared foods with preparation time and date.", priority: "High", riskLevel: "High", consequence: "Ensures that older food is used or discarded first.", proof: "Label Check" },
                { id: "BHF-07", description: "Clean and sanitize all surfaces and equipment after use.", priority: "High", riskLevel: "High", consequence: "Prevents buildup of bacteria and allergens.", proof: "Cleaning Log" },
                { id: "BHF-08", description: "Check for allergens and provide clear labeling.", priority: "High", riskLevel: "High", consequence: "Undeclared allergens can cause severe reactions in sensitive customers.", proof: "Allergen Label Audit" },
                { id: "BHF-09", description: "Calibrate food thermometers daily.", priority: "High", riskLevel: "High", consequence: "Inaccurate thermometers give a false sense of food safety.", proof: "Calibration Log" },
                { id: "BHF-10", description: "Train staff on food safety procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff are a major liability in any food handling environment.", proof: "Training Records" }
            ]
        },
        {
            title: "Loss Prevention & Security Audit",
            department: "Security",
            frequency: "Daily",
            role: "Loss Prevention Officer",
            summary: "A daily routine to detect and prevent theft and internal fraud.",
            icon: "shield",
            tasks: [
                { id: "LP-AUDIT-01", description: "Review CCTV footage of cash counters and entry/exit points.", priority: "High", riskLevel: "High", consequence: "Helps identify internal fraud, sweethearting, and external theft.", proof: "CCTV Review Log" },
                { id: "LP-AUDIT-02", description: "Test EAS gates at opening and closing.", priority: "High", riskLevel: "High", consequence: "A non-functional EAS system removes a key layer of theft deterrence.", proof: "EAS Test Log" },
                { id: "LP-AUDIT-03", description: "Conduct random bag checks for staff exiting the store.", priority: "High", riskLevel: "High", consequence: "A necessary deterrent against employee theft.", proof: "Bag Check Log" },
                { id: "LP-AUDIT-04", description: "Monitor high-theft categories (e.g., cosmetics, electronics) more frequently.", priority: "High", riskLevel: "High", consequence: "Proactive monitoring can deter organized shoplifting gangs.", proof: "Aisle Patrol Log" },
                { id: "LP-AUDIT-05", description: "Ensure all fire exits are alarmed and monitored.", priority: "High", riskLevel: "High", consequence: "Unmonitored fire exits are a common route for large-scale theft.", proof: "Alarm System Check" },
                { id: "LP-AUDIT-06", description: "Audit for empty packaging on shelves.", priority: "High", riskLevel: "High", consequence: "A common sign of theft where the product has been removed and the packaging left behind.", proof: "Empty Package Log" },
                { id: "LP-AUDIT-07", description: "Secure and monitor the receiving bay to prevent collusion.", priority: "High", riskLevel: "High", consequence: "Collusion between delivery drivers and receiving staff is a major source of shrinkage.", proof: "Receiving Bay Audit" },
                { id: "LP-AUDIT-08", description: "Train staff on identifying and reporting suspicious activity.", priority: "High", riskLevel: "High", consequence: "Staff are the eyes and ears of the store; they must be empowered to report issues.", proof: "Training Records" },
                { id: "LP-AUDIT-09", description: "Analyze POS data for fraudulent trends (e.g., excessive voids, returns).", priority: "High", riskLevel: "High", consequence: "Data analysis can uncover sophisticated internal fraud schemes.", proof: "POS Data Analysis" },
                { id: "LP-AUDIT-10", description: "Maintain a log of all security incidents and actions taken.", priority: "High", riskLevel: "High", consequence: "Provides a legal record and helps in identifying repeat offenders and security weaknesses.", proof: "Incident Logbook" }
            ]
        }
    ]
};
