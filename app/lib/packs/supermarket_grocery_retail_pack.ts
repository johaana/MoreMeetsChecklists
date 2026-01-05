
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
    description: "An all-in-one operations and compliance pack for supermarkets, hypermarkets, and grocery retail chains, ensuring food safety, quality, and operational efficiency across outlets.",
    icon: "shopping-basket",
    badgeText: "New!",
    badgeVariant: "accent",
    whoIsItFor: ["Supermarket Owners", "Grocery Store Proprietors", "Heads of Retail Operations", "Store Directors", "Department Heads (Fresh Food, Dairy)", "3PL Partners"],
    sampleItems: [
        { text: "Prevent spoilage and foodborne illness with robust cold chain and perishables temperature management.", icon: "thermometer" },
        { text: "Minimize waste and ensure freshness with a daily FIFO rotation and expiry date sweep process.", icon: "recycle" },
        { text: "Maintain a safe and inviting store with checklists for hygiene, cleaning, and rapid spill response.", icon: "spray-can" },
        { text: "Protect your revenue through rigorous point-of-sale security and cash reconciliation.", icon: "dollar-sign" },
        { text: "Guarantee food quality from the source with a stringent raw material receiving and QC process.", icon: "package-check" },
        { text: "Ensure compliance and fair trade with weighing scale calibration and Legal Metrology checks.", icon: "scale" }
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
                { id: "SC-COLD-01", description: "Log temperatures of all refrigerators and freezers twice daily.", priority: "High", riskLevel: "High", consequence: "Failure to monitor can lead to bacterial growth and foodborne illness outbreaks.", proof: "Temperature Log" },
                { id: "SC-COLD-02", description: "Verify functionality of temperature alarms weekly.", priority: "High", riskLevel: "High", consequence: "A non-functional alarm means a temperature failure can go unnoticed for hours, leading to catastrophic inventory loss.", proof: "Alarm Test Log" },
                { id: "SC-COLD-03", description: "Check door seals on all refrigerated units daily.", priority: "High", riskLevel: "Medium", consequence: "Damaged seals lead to energy waste and make it harder to maintain safe temperatures, increasing operational costs and spoilage risk.", proof: "Visual Inspection" },
                { id: "SC-COLD-04", description: "Ensure backup power for cold storage is tested weekly.", priority: "High", riskLevel: "High", consequence: "During a power outage, failure of backup power can result in the loss of all perishable inventory, a major financial blow.", proof: "Generator Test Log" },
                { id: "SC-COLD-05", description: "Document any temperature excursions and the corrective actions taken.", priority: "High", riskLevel: "High", consequence: "Lack of documentation makes it impossible to prove due diligence during a health inspection or trace the cause of a spoilage event.", proof: "Corrective Action Report" },
                { id: "SC-COLD-06", description: "Ensure goods are moved to cold storage immediately upon receipt.", priority: "High", riskLevel: "High", consequence: "Delays break the cold chain, promoting bacterial growth.", proof: "Receiving Log" },
                { id: "SC-COLD-07", description: "Clean and sanitize all refrigerated units weekly.", priority: "High", riskLevel: "Low", consequence: "Poor air quality, increased energy consumption, system failure.", proof: "Public area cleaning log." },
                { id: "SC-COLD-08", description: "Do not overload refrigerated units to allow for proper air circulation.", priority: "High", riskLevel: "Medium", consequence: "Overloading creates 'hot spots' where food can spoil.", proof: "Pump performance log." },
                { id: "SC-COLD-09", description: "Train staff on cold chain management procedures.", priority: "High", riskLevel: "Medium", consequence: "Poor performance log.", proof: "Photo of refrigerator storage arrangement." },
                { id: "SC-COLD-10", description: "Calibrate thermometers quarterly.", priority: "High", riskLevel: "High", consequence: "Inaccurate thermometers give a false sense of safety.", proof: "Thermometer Calibration Log." }
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
                { id: "SC-FIFO-05", description: "Train staff on how to read and interpret expiry date codes.", priority: "High", riskLevel: "Medium", consequence: "Staff may misinterpret codes and leave expired products on the shelf.", proof: "Training Log" },
                { id: "SC-FIFO-06", description: "Donate or dispose of expired goods according to policy.", priority: "High", riskLevel: "Medium", consequence: "Improper disposal can lead to legal issues or brand damage.", proof: "Donation/Disposal Log" },
                { id: "SC-FIFO-07", description: "Audit stockroom for FIFO compliance weekly.", priority: "High", riskLevel: "High", consequence: "Ensures older stock is moved to the front line.", proof: "Stockroom Audit Log" },
                { id: "SC-FIFO-08", description: "Review reports on expired goods to identify purchasing issues.", priority: "High", riskLevel: "Medium", consequence: "Helps to adjust order quantities and prevent future over-ordering.", proof: "Analysis Report" },
                { id: "SC-FIFO-09", description: "Ensure near-expiry items are clearly marked for customers.", priority: "High", riskLevel: "Low", consequence: "Provides transparency to customers and helps sell items faster.", proof: "Signage Check" },
                { id: "SC-FIFO-10", description: "Manager to sign off on all expired goods disposal.", priority: "High", riskLevel: "High", consequence: "Prevents unauthorized removal of stock under the guise of \"expiry\".", proof: "Signed Disposal Form" }
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
                { id: "SC-CLEAN-02", description: "Deploy \"Wet Floor\" signs immediately for any spills.", priority: "High", riskLevel: "High", consequence: "Failure to warn customers is a major point of legal liability.", proof: "CCTV Footage" },
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
                { id: "SC-POS-03", description: "Verify CCTV cameras at billing lanes are operational and have a clear view.", priority: "High", riskLevel: "High", consequence: "Provides crucial evidence in case of cash disputes, theft, or scams.", proof: "CCTV Check Log" },
                { id: "SC-POS-04", description: "Reconcile each cash drawer at the end of every shift.", priority: "High", riskLevel: "High", consequence: "The only way to accurately track cash and identify shortages or overages.", proof: "Shift Reconciliation Report" },
                { id: "SC-POS-05", description: "Check for any signs of tampering on card payment devices.", priority: "High", riskLevel: "High", consequence: "Criminals can install skimmers to steal customer card data, leading to massive liability.", proof: "Device Inspection Log" },
                { id: "SC-POS-06", description: "Securely store cash in a safe.", priority: "High", riskLevel: "High", consequence: "Leaving cash in the till overnight is a major theft risk.", proof: "Safe Log" },
                { id: "SC-POS-07", description: "Use counterfeit detection for large cash transactions.", priority: "High", riskLevel: "High", consequence: "Accepting counterfeit notes is a direct financial loss.", proof: "Counterfeit Check" },
                { id: "SC-POS-08", description: "Train cashiers on fraud prevention techniques.", priority: "High", riskLevel: "High", consequence: "Untrained cashiers are easy targets for common retail scams.", proof: "Training Records" },
                { id: "SC-POS-09", description: "Limit cash in drawers to a minimum amount.", priority: "High", riskLevel: "High", consequence: "Reduces the potential loss in case of a till-snatch or robbery.", proof: "Cash Limit Policy" },
                { id: "SC-POS-10", description: "Investigate cash discrepancies immediately.", priority: "High", riskLevel: "High", consequence: "A small, unresolved discrepancy can be an indicator of a larger, ongoing theft problem.", proof: "Investigation Report" }
            ]
        }
    ]
};

  