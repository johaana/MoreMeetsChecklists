
import type { PremiumPack } from "@/lib/premium-packs";

export const electronics_showroom_pack: PremiumPack = {
    id: 'electronics_showroom_pack',
    title: "Electronics Showroom Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a05cb9ef-51b3-454a-a389-609b314b8338',
    category: "Retail",
    description: "Stop demo fires, nine-figure inventory theft, and data breaches—before they destroy your showroom's reputation and asset value.",
    heroHeadline: "Stop demo fires and nine-figure inventory theft.",
    heroSubheadline: "Built for showroom managers who take zero-risk asset protection and electrical safety seriously.",
    pricingUrgency: "A single lithium-ion fire or one major stock discrepancy costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "tv",
    badgeText: "High Asset Value",
    badgeVariant: "accent",
    whoIsItFor: ["Electronics Store Owners", "Showroom Managers", "Heads of Retail Operations", "Asset Protection Managers", "Facilities Leads"],
    sampleItems: [
        { text: "<strong>Prevent</strong> catastrophic demo fires with daily thermal checks and electrical load audits.", icon: "zap" },
        { text: "<strong>Secure</strong> high-value inventory with serialized tagging and multi-person vault protocols.", icon: "barcode" },
        { text: "<strong>Ensure</strong> environmental compliance with a formal, auditable E-waste handling SOP.", icon: "recycle" },
        { text: "<strong>Protect</strong> your revenue with rigorous POS security and daily digital payment reconciliation.", icon: "shield-check" },
        { text: "<strong>Enhance</strong> customer trust with a secure, documented repair and warranty intake process.", icon: "wrench" },
        { text: "<strong>Optimize</strong> back-of-house safety with structured stockroom organization and hazard audits.", icon: "package" }
    ],
    checklists: [
        {
            title: "Demo Unit Pre-Opening Checklist",
            department: "Sales/Operations",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Ensures all demo units are safe, functional, and presentable before the store opens.",
            icon: "clipboard-check",
            tasks: [
                { id: "DEMO-01", description: "Check all power cables for frays or damage.", priority: "High", riskLevel: "High", consequence: "Prevents electrical shorts and potential fire hazards.", proof: "Visual Inspection Log" },
                { id: "DEMO-02", description: "Ensure all demo units are connected via surge protectors.", priority: "High", riskLevel: "Medium", consequence: "Protects expensive demo units from power surges, reducing equipment loss.", proof: "Visual Check" },
                { id: "DEMO-03", description: "Verify all wiring is neatly concealed to prevent trip hazards.", priority: "High", riskLevel: "Medium", consequence: "Prevents customer or staff injuries and potential lawsuits.", proof: "Visual Check" },
                { id: "DEMO-04", description: "Check that all demo devices have the latest firmware and demo content loaded.", priority: "High", riskLevel: "Low", consequence: "Ensures a consistent and positive customer experience with the latest features.", proof: "Firmware Version Check" },
                { id: "DEMO-05", description: "Ensure all security straps and covers for demo units are intact.", priority: "High", riskLevel: "High", consequence: "Deters theft of high-value demo merchandise.", proof: "Security Device Log" },
                { id: "DEMO-06", description: "Clean screens and surfaces of all demo units.", priority: "Medium", riskLevel: "Low", consequence: "A dirty display looks unprofessional and can deter customers.", proof: "Cleaning Log" },
                { id: "DEMO-07", description: "Verify all demo units are powered on and functional.", priority: "High", riskLevel: "Medium", consequence: "A non-working demo unit is a lost sales opportunity.", proof: "Functionality Check" },
                { id: "DEMO-08", description: "Check for any signs of overheating on charging stations.", priority: "High", riskLevel: "High", consequence: "Overheating is a major fire risk, especially with lithium-ion batteries.", proof: "Thermal Check" },
                { id: "DEMO-09", description: "Ensure all pricing and feature labels are correct and visible.", priority: "High", riskLevel: "Low", consequence: "Incorrect information can mislead customers and cause disputes.", proof: "Label Audit" },
                { id: "DEMO-10", description: "Report any faulty demo units for immediate replacement.", priority: "High", riskLevel: "Medium", consequence: "A broken demo unit reflects poorly on the brand and the store.", proof: "Fault Report" }
            ]
        },
        {
            title: "Electrical Safety & PAT Testing",
            department: "Facilities/Safety",
            frequency: "Scheduled",
            role: "Safety Officer",
            summary: "A recurring checklist for ensuring all electrical systems and appliances are safe and compliant.",
            icon: "zap",
            tasks: [
                { id: "ELEC-01", description: "Conduct scheduled Portable Appliance Testing (PAT) for all plug-in devices.", priority: "High", riskLevel: "High", consequence: "Identifies faulty electrical equipment that could cause shocks or fires.", proof: "PAT Test Report" },
                { id: "ELEC-02", description: "Perform quarterly earth leakage circuit breaker (ELCB) tests.", priority: "High", riskLevel: "High", consequence: "A faulty ELCB will not trip during an electrical fault, a major life-safety risk.", proof: "ELCB Test Log" },
                { id: "ELEC-03", description: "Maintain records of all electrical grounding tests and certifications.", priority: "High", riskLevel: "High", consequence: "Proper grounding is essential for preventing electrical shocks.", proof: "Grounding Test Records" },
                { id: "ELEC-04", description: "Check load on all circuits to prevent overloading.", priority: "High", riskLevel: "High", consequence: "Overloaded circuits are a primary cause of electrical fires.", proof: "Load Test Report" },
                { id: "ELEC-05", description: "Ensure fire extinguishers are suitable for electrical fires (Class C).", priority: "High", riskLevel: "High", consequence: "Using the wrong type of extinguisher on an electrical fire can be fatal.", proof: "Extinguisher Inspection Log" },
                { id: "ELEC-06", description: "Inspect all extension cords and power strips for damage.", priority: "High", riskLevel: "High", consequence: "Damaged cords are a common cause of electrical fires.", proof: "Cord Inspection Log" },
                { id: "ELEC-07", description: "Ensure all electrical panels are accessible and not blocked.", priority: "High", riskLevel: "High", consequence: "In an emergency, access to the panel is critical to shut off power.", proof: "Visual Check" },
                { id: "ELEC-08", description: "Train staff on basic electrical safety and how to report issues.", priority: "High", riskLevel: "Medium", consequence: "Untrained staff may not recognize or report dangerous electrical hazards.", proof: "Training Log" },
                { id: "ELEC-09", description: "Use only certified electricians for any repair work.", priority: "High", riskLevel: "High", consequence: "Improper electrical work can create hidden fire hazards.", proof: "Vendor Certification" },
                { id: "ELEC-10", description: "Conduct an annual thermal imaging audit of electrical panels.", priority: "High", riskLevel: "High", consequence: "Identifies 'hot spots' that are invisible to the naked eye but indicate a potential fire risk.", proof: "Thermal Imaging Report" }
            ]
        },
        {
            title: "Asset Tagging & Inventory",
            department: "Inventory",
            frequency: "Ongoing",
            role: "Inventory Manager",
            summary: "A process for tracking every high-value item from receipt to sale, minimizing shrinkage.",
            icon: "barcode",
            tasks: [
                { id: "ASSET-01", description: "Record the unique serial number of every item at goods receipt.", priority: "High", riskLevel: "High", consequence: "Without serial numbers, it is impossible to track individual units, making theft easy to conceal.", proof: "GRN Log" },
                { id: "ASSET-02", description: "Apply a unique asset tag to each display and stock item.", priority: "High", riskLevel: "High", consequence: "Provides a clear, scannable identity for each piece of inventory.", proof: "Asset Tagging Log" },
                { id: "ASSET-03", description: "Perform daily high-value item inventory verification.", priority: "High", riskLevel: "High", consequence: "Allows for immediate detection of theft of the most expensive items.", proof: "High-Value Count Sheet" },
                { id: "ASSET-04", description: "Implement an immediate escalation process for any missing items.", priority: "High", riskLevel: "High", consequence: "A delay in reporting allows thieves to get away and evidence to be lost.", proof: "Escalation SOP" },
                { id: "ASSET-05", description: "Reconcile physical inventory with system records monthly.", priority: "High", riskLevel: "High", consequence: "Catches discrepancies and helps maintain accurate stock levels for ordering.", proof: "Monthly Stock Take Report" },
                { id: "ASSET-06", description: "Use barcode scanners for accurate inventory counts.", priority: "High", riskLevel: "High", consequence: "Manual counting is slow and highly prone to human error.", proof: "Scan Logs" },
                { id: "ASSET-07", description: "Secure the stockroom with restricted access.", priority: "High", riskLevel: "High", consequence: "An open stockroom is the number one source of inventory shrinkage.", proof: "Access Log" },
                { id: "ASSET-08", description: "Track items sent for repair or to other locations.", priority: "High", riskLevel: "High", consequence: "Items can easily get 'lost' in transit without a clear chain of custody.", proof: "Movement Log" },
                { id: "ASSET-09", description: "Investigate root causes of inventory discrepancies.", priority: "High", riskLevel: "High", consequence: "Failing to investigate means the underlying problem (theft, process error) will continue.", proof: "Investigation Report" },
                { id: "ASSET-10", description: "Manager to sign off on all inventory adjustments.", priority: "High", riskLevel: "High", consequence: "Prevents fraudulent adjustments to cover up theft.", proof: "Signed Adjustment Form" }
            ]
        },
        {
            title: "POS & Payment Reconciliation",
            department: "Finance",
            frequency: "Daily",
            role: "Head Cashier",
            summary: "Daily financial checks to ensure all transactions are accurate and secure.",
            icon: "circle-dollar-sign",
            tasks: [
                { id: "POS-RECON-01", description: "Perform end-of-day reconciliation of cash, card, and digital payments against POS reports.", priority: "High", riskLevel: "High", consequence: "Unreconciled tills can hide cash theft or payment processing errors.", proof: "Reconciliation Report" },
                { id: "POS-RECON-02", description: "Check payment terminals daily for signs of tampering.", priority: "High", riskLevel: "High", consequence: "Criminals may install skimmers to steal customer card data.", proof: "Device Inspection Log" },
                { id: "POS-RECON-03", description: "Verify CCTV cameras at billing lanes are operational and have a clear view.", priority: "High", riskLevel: "High", consequence: "Provides crucial evidence in case of cash disputes or fraudulent transactions.", proof: "CCTV Check Log" },
                { id: "POS-RECON-04", description: "Require dual approval from a manager for all refunds.", priority: "High", riskLevel: "High", consequence: "A common method for internal fraud is processing fake refunds.", proof: "Refund Approval Log" },
                { id: "POS-RECON-05", description: "Securely store and transport daily cash deposits.", priority: "High", riskLevel: "High", consequence: "Reduces the risk of robbery or internal theft of cash.", proof: "Cash Deposit Log" },
                { id: "POS-RECON-06", description: "Reconcile gift card and voucher sales.", priority: "High", riskLevel: "Medium", consequence: "Prevents fraud related to gift card issuance and redemption.", proof: "Voucher Log" },
                { id: "POS-RECON-07", description: "Verify cashier logins and logouts for each shift.", priority: "High", riskLevel: "Medium", consequence: "Ensures accountability for all transactions processed on a specific till.", proof: "Shift Log" },
                { id: "POS-RECON-08", description: "Report any cash discrepancies immediately.", priority: "High", riskLevel: "High", consequence: "A small discrepancy could be a test for a larger theft.", proof: "Discrepancy Report" },
                { id: "POS-RECON-09", description: "Follow PCI DSS guidelines for all card transactions.", priority: "High", riskLevel: "High", consequence: "Non-compliance can lead to massive fines and reputational damage.", proof: "PCI Compliance Certificate" },
                { id: "POS-RECON-10", description: "Use counterfeit detection on all cash transactions.", priority: "High", riskLevel: "High", consequence: "Accepting fake currency is a direct financial loss.", proof: "Counterfeit Check" }
            ]
        },
        {
            title: "E-waste Handling SOP",
            department: "Compliance",
            frequency: "As needed",
            role: "Compliance Officer",
            summary: "A compliant process for managing and disposing of electronic waste.",
            icon: "recycle",
            tasks: [
                { id: "EWaste-01", description: "Maintain segregated and clearly labeled bins for e-waste.", priority: "High", riskLevel: "Medium", consequence: "Mixing e-waste with general waste is an environmental and legal violation.", proof: "Visual Check" },
                { id: "EWaste-02", description: "Use only authorized, certified e-waste disposal vendors.", priority: "High", riskLevel: "High", consequence: "Using an uncertified vendor can lead to illegal dumping and fines for your company.", proof: "Vendor Contract" },
                { id: "EWaste-03", description: "Maintain a detailed log of all e-waste disposals.", priority: "High", riskLevel: "High", consequence: "Provides a legal audit trail to prove compliant disposal.", proof: "Disposal Log" },
                { id: "EWaste-04", description: "Obtain and file disposal/destruction certificates from the vendor.", priority: "High", riskLevel: "High", consequence: "This is the legal proof that your e-waste was handled correctly.", proof: "Disposal Certificates" },
                { id: "EWaste-05", description: "Train staff on identifying and segregating e-waste correctly.", priority: "Medium", riskLevel: "Medium", consequence: "Untrained staff may incorrectly dispose of hazardous materials.", proof: "Training Log" },
                { id: "EWaste-06", description: "Securely wipe data from all devices before disposal.", priority: "High", riskLevel: "High", consequence: "Failure to wipe data can lead to major data breaches from discarded hard drives.", proof: "Data Wipe Log" },
                { id: "EWaste-07", description: "Store e-waste in a secure, designated area.", priority: "High", riskLevel: "Medium", consequence: "Prevents theft or scavenging of discarded electronics.", proof: "Storage Area Check" },
                { id: "EWaste-08", description: "Follow all local environmental regulations for e-waste.", priority: "High", riskLevel: "High", consequence: "Non-compliance can result in large fines and brand damage.", proof: "Regulatory Checklist" },
                { id: "EWaste-09", description: "Schedule regular pickups with the e-waste vendor.", priority: "High", riskLevel: "Medium", consequence: "Prevents accumulation of hazardous materials on site.", proof: "Pickup Schedule" },
                { id: "EWaste-10", description: "Audit the e-waste process annually for compliance.", priority: "High", riskLevel: "High", consequence: "Ensures the process remains compliant with changing regulations.", proof: "Annual Audit Report" }
            ]
        },
        {
            title: "Warranty & Repair Management",
            department: "Customer Service",
            frequency: "Per Case",
            role: "Service Manager",
            summary: "Manages customer repairs and warranty claims efficiently and professionally.",
            icon: "wrench",
            tasks: [
                { id: "WRM-01", description: "Log every repair request with customer details and item serial number.", priority: "High", riskLevel: "High", consequence: "Poor record-keeping can lead to lost items or disputes with customers.", proof: "Repair Log" },
                { id: "WRM-02", description: "Track the status of all items sent to authorized service centers.", priority: "High", riskLevel: "Medium", consequence: "Inability to provide customers with updates on their repair status.", proof: "Service Center Tracking Sheet" },
                { id: "WRM-03", description: "Process warranty claims with manufacturers according to their policies.", priority: "High", riskLevel: "High", consequence: "Failure to follow policy can lead to claim rejection and financial loss.", proof: "Warranty Claim Forms" },
                { id: "WRM-04", description: "Communicate repair status updates to customers.", priority: "High", riskLevel: "Medium", consequence: "Lack of communication is a major source of customer dissatisfaction.", proof: "Communication Log" },
                { id: "WRM-05", description: "Inspect repaired items before returning them to the customer.", priority: "High", riskLevel: "High", consequence: "Returning an item that is still faulty creates a very poor customer experience.", proof: "Final Inspection Checklist" },
                { id: "WRM-06", description: "Obtain customer sign-off upon collection of repaired item.", priority: "High", riskLevel: "Medium", consequence: "Protects against later claims that the item was not returned or was still faulty.", proof: "Collection Form" },
                { id: "WRM-07", description: "Manage inventory of spare parts for common repairs.", priority: "High", riskLevel: "Medium", consequence: "Lack of spares leads to longer repair times.", proof: "Spare Parts Inventory" },
                { id: "WRM-08", description: "Provide customer with a clear timeline for repairs.", priority: "High", riskLevel: "Low", consequence: "Unclear timelines lead to customer frustration and repeated follow-up calls.", proof: "Repair Estimate Form" },
                { id: "WRM-09", description: "Process payment for repairs accurately.", priority: "High", riskLevel: "Medium", consequence: "Billing errors can lead to customer disputes.", proof: "Invoice" },
                { id: "WRM-10", description: "Log all repair details for warranty and history purposes.", priority: "High", riskLevel: "Medium", consequence: "A detailed service history is valuable for diagnosing future problems.", proof: "Service History" }
            ]
        },
        {
            title: "Stockroom Organization",
            department: "Inventory",
            frequency: "Weekly",
            role: "Stockroom Manager",
            summary: "Ensures the stockroom is organized, efficient, and safe.",
            icon: "package",
            tasks: [
                { id: "SO-01", description: "Ensure all items are stored in their designated bins or locations.", priority: "High", riskLevel: "Medium", consequence: "A disorganized stockroom makes order picking slow and inefficient.", proof: "Bin Audit" },
                { id: "SO-02", description: "Keep all aisles and walkways clear of obstructions.", priority: "High", riskLevel: "High", consequence: "Blocked aisles are a major safety hazard and can cause serious injuries.", proof: "Visual Inspection" },
                { id: "SO-03", description: "Check for any damaged or open boxes and report them.", priority: "High", riskLevel: "High", consequence: "Damaged stock leads to financial loss and may be a safety hazard.", proof: "Damage Report" },
                { id: "SO-04", description: "Implement FIFO (First-In, First-Out) stock rotation.", priority: "High", riskLevel: "Medium", consequence: "Failure to use FIFO can lead to older models becoming obsolete and unsellable.", proof: "Stock rotation audit" },
                { id: "SO-05", description: "Ensure the stockroom is locked and access is restricted.", priority: "High", riskLevel: "High", consequence: "The stockroom is a primary target for internal and external theft.", proof: "Access log" },
                { id: "SO-06", description: "Maintain a clean and dust-free environment.", priority: "High", riskLevel: "Medium", consequence: "Dust and dirt can damage sensitive electronic components.", proof: "Cleaning log" },
                { id: "SO-07", description: "Check for any pest activity.", priority: "High", riskLevel: "High", consequence: "Pests can chew through wiring and packaging, causing significant damage.", proof: "Pest control log" },
                { id: "SO-08", description: "Ensure proper lighting in all areas of the stockroom.", priority: "High", riskLevel: "Medium", consequence: "Poor lighting increases the risk of accidents and picking errors.", proof: "Lighting check" },
                { id: "SO-09", description: "Organize items by brand, category, or SKU for easy picking.", priority: "High", riskLevel: "Medium", consequence: "A logical layout is key to fast and accurate order fulfillment.", proof: "Organization plan" },
                { id: "SO-10", description: "Conduct a weekly safety audit of the stockroom.", priority: "High", riskLevel: "High", consequence: "Proactively identifies and mitigates safety risks like unsafe stacking or fire hazards.", proof: "Safety audit report" }
            ]
        },
        {
            title: "Fire Safety Audit",
            department: "Safety",
            frequency: "Monthly",
            role: "Safety Officer",
            summary: "Regular audit to ensure fire prevention and suppression systems are functional.",
            icon: "siren",
            tasks: [
                { id: "FSA-01", description: "Conduct monthly inspection of all fire extinguishers (pressure, expiry, accessibility).", priority: "High", riskLevel: "High", consequence: "A non-functional extinguisher is useless in a fire.", proof: "Extinguisher log" },
                { id: "FSA-02", description: "Test smoke detectors and fire alarms.", priority: "High", riskLevel: "High", consequence: "Failure to get an early warning can be fatal.", proof: "Alarm test log" },
                { id: "FSA-03", description: "Ensure all emergency exits are clear and accessible.", priority: "High", riskLevel: "High", consequence: "A blocked exit can trap people in a fire.", proof: "Exit inspection log" },
                { id: "FSA-04", description: "Check that all staff are trained on fire evacuation procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff can cause panic and confusion during an evacuation.", proof: "Training records" },
                { id: "FSA-05", description: "Maintain a log of all fire safety audits for regulatory inspection.", priority: "High", riskLevel: "High", consequence: "Failure to produce records can lead to fines and legal action.", proof: "Master audit file" },
                { id: "FSA-06", description: "Check emergency lighting functionality.", priority: "High", riskLevel: "High", consequence: "In a power outage during a fire, this is the only way to see the exit path.", proof: "Lighting test log" },
                { id: "FSA-07", description: "Ensure fire safety signage is visible and correct.", priority: "High", riskLevel: "High", consequence: "People will not know where to go in an emergency.", proof: "Signage audit" },
                { id: "FSA-08", description: "Conduct a fire drill at least once every six months.", priority: "High", riskLevel: "High", consequence: "Drills are essential for ensuring the evacuation plan actually works.", proof: "Drill report" },
                { id: "FSA-09", description: "Ensure sprinkler system is inspected annually by a certified vendor.", priority: "High", riskLevel: "High", consequence: "The primary fire suppression system must be reliable.", proof: "Vendor certificate" },
                { id: "FSA-10", description: "Review and update the fire emergency plan annually.", priority: "High", riskLevel: "High", consequence: "An outdated plan can be ineffective.", proof: "Updated plan" }
            ]
        }
    ]
};
