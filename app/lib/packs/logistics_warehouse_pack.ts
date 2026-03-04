
import type { PremiumPack } from "@/lib/premium-packs";

export const logistics_warehouse_pack: PremiumPack = {
    id: 'logistics_warehouse_pack',
    title: "Logistics & Warehouse Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f48201fb-a708-43ac-a508-7381c32f55c5',
    category: "Industrial & Transport",
    description: "Stop warehouse accidents, inventory shrinkage, and supply chain delays: before they destroy your operational margins and contract reliability.",
    heroHeadline: "Eliminate warehouse accidents and inventory shrinkage.",
    heroSubheadline: "Built for 3PL partners and warehouse managers who take zero-risk inventory integrity seriously.",
    pricingUrgency: "A single warehouse accident or a total supply chain halt costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "warehouse",
    whoIsItFor: ["Warehouse Managers", "Logistics Heads", "Supply Chain Directors", "3PL Providers"],
    sampleItems: [
        { text: "<strong>Streamline</strong> your receiving process with inbound quality control and documentation.", icon: "clipboard-check" },
        { text: "<strong>Maximize</strong> space and efficiency with bin location management and putaway SOPs.", icon: "package" },
        { text: "<strong>Ensure</strong> order accuracy and speed with a structured picking and dispatch workflow.", icon: "truck" },
        { text: "<strong>Maintain</strong> a safe workplace with Material Handling Equipment (MHE) safety audits.", icon: "hard-hat" },
        { text: "<strong>Protect</strong> your inventory with robust security, access control, and cycle counting.", icon: "shield" },
        { text: "<strong>Build</strong> a resilient supply chain with formal vendor performance management.", icon: "handshake" }
    ],
    checklists: [
        {
            title: "Inbound & Receiving",
            department: "Receiving",
            frequency: "Per Shipment",
            role: "Receiving Clerk",
            summary: "Ensures all incoming goods are accurately received, inspected, and documented.",
            icon: "clipboard-check",
            tasks: [
                { id: "INB-01", description: "Verify physical shipment against the Purchase Order (PO).", priority: "High", riskLevel: "High", consequence: "Accepting an incorrect shipment leads to major inventory and payment discrepancies.", proof: "PO & Delivery Note Match" },
                { id: "INB-02", description: "Inspect all incoming packages for damage or tampering.", priority: "High", riskLevel: "High", consequence: "Accepting damaged goods results in a financial loss that should be claimed from the transporter or supplier.", proof: "Damage Report" },
                { id: "INB-03", description: "Count and verify the quantity of items received.", priority: "High", riskLevel: "High", consequence: "Short-shipments that are not caught at receiving are a direct financial loss.", proof: "Count Sheet" },
                { id: "INB-04", description: "Update the Warehouse Management System (WMS) with received quantities.", priority: "High", riskLevel: "High", consequence: "A delay or error in updating the WMS means the inventory system is inaccurate, affecting order fulfillment.", proof: "WMS Entry Log" },
                { id: "INB-05", description: "Assign items to a putaway location in the WMS.", priority: "High", riskLevel: "Medium", consequence: "Slow putaway clogs the receiving area and makes items unavailable for picking.", proof: "Putaway Ticket" },
                { id: "INB-06", description: "Generate and apply labels/barcodes if required.", priority: "High", riskLevel: "Medium", consequence: "Unlabeled inventory is impossible to track and manage effectively.", proof: "Labeling Log" },
                { id: "INB-07", description: "Move goods from receiving to the putaway or staging area promptly.", priority: "High", riskLevel: "Medium", consequence: "A cluttered receiving bay is inefficient and a safety hazard.", proof: "Movement Log" },
                { id: "INB-08", description: "Handle and document any discrepancies or short shipments.", priority: "High", riskLevel: "High", consequence: "Provides the necessary documentation to file a claim with the supplier.", proof: "Discrepancy Report" },
                { id: "INB-09", description: "Keep the receiving area clean and clear of obstructions.", priority: "High", riskLevel: "Medium", consequence: "A messy receiving area is a major safety hazard.", proof: "Housekeeping Log" },
                { id: "INB-10", description: "Sign and stamp the delivery driver's paperwork.", priority: "High", riskLevel: "Medium", consequence: "The legal confirmation that the shipment was received.", proof: "Signed Proof of Delivery" }
            ]
        },
        {
            title: "Material Handling Equipment (MHE) Safety",
            department: "Safety/Operations",
            frequency: "Daily",
            role: "MHE Operator",
            summary: "Daily checks and procedures to ensure safe operation of forklifts, reach trucks, and other MHE.",
            icon: "hard-hat",
            tasks: [
                { id: "MHE-01", description: "Perform a pre-use inspection of the forklift/MHE (brakes, horn, lights, tires).", priority: "High", riskLevel: "High", consequence: "Operating a faulty forklift can lead to catastrophic accidents, injuries, or fatalities.", proof: "Pre-use Inspection Checklist" },
                { id: "MHE-02", description: "Check battery charge or fuel level.", priority: "High", riskLevel: "Medium", consequence: "A forklift running out of power mid-operation can strand a heavy load in a dangerous position.", proof: "Inspection Checklist" },
                { id: "MHE-03", description: "Report any defects or malfunctions immediately and do not use the MHE.", priority: "High", riskLevel: "High", consequence: "Using a known-faulty machine is gross negligence and can lead to severe legal penalties.", proof: "Defect Report Form" },
                { id: "MHE-04", description: "Ensure all operators have a valid MHE license.", priority: "High", riskLevel: "High", consequence: "Allowing an untrained person to operate MHE is a major safety violation and illegal.", proof: "License Verification Log" },
                { id: "MHE-05", description: "Follow designated pathways and speed limits within the warehouse.", priority: "High", riskLevel: "High", consequence: "Speeding or taking shortcuts is a leading cause of collisions with racks or pedestrians.", proof: "CCTV Monitoring" },
                { id: "MHE-06", description: "Use horn at intersections and blind spots.", priority: "High", riskLevel: "High", consequence: "A simple but critical step to prevent collisions with other MHE or people.", proof: "Operator Observation" },
                { id: "MHE-07", description: "Ensure loads are stable and within the MHE's capacity.", priority: "High", riskLevel: "High", consequence: "Overloading can cause the forklift to tip over, a potentially fatal accident.", proof: "Load Check" },
                { id: "MHE-08", description: "Park MHE in designated areas with forks lowered.", priority: "High", riskLevel: "Medium", consequence: "Raised forks are a major trip hazard.", proof: "Visual Check" },
                { id: "MHE-09", description: "Conduct refresher training for all MHE operators annually.", priority: "High", riskLevel: "High", consequence: "Ensures operators are up-to-date on safety procedures.", proof: "Training Records" },
                { id: "MHE-10", description: "Maintain a log of all MHE-related incidents and near-misses.", priority: "High", riskLevel: "High", consequence: "Helps to identify unsafe behaviors or areas and prevent future accidents.", proof: "Incident Log" }
            ]
        },
        {
            title: "Inventory & Cycle Count Management",
            department: "Inventory",
            frequency: "Daily/Weekly",
            role: "Inventory Controller",
            summary: "A systematic process to ensure inventory accuracy and minimize shrinkage.",
            icon: "clipboard-check",
            tasks: [
                { id: "INV-01", description: "Generate a daily cycle count list based on ABC analysis or location.", priority: "High", riskLevel: "High", consequence: "Without regular counts, inventory accuracy degrades, leading to stockouts or overstocking.", proof: "Cycle Count Sheet" },
                { id: "INV-02", description: "Conduct blind counts without showing system quantity to the counter.", priority: "High", riskLevel: "Medium", consequence: "Prevents 'pencil whipping' where counters just copy the system number.", proof: "Counting Procedure" },
                { id: "INV-03", description: "Investigate discrepancies between physical and system counts on the same day.", priority: "High", riskLevel: "High", consequence: "The longer the delay, the harder it is to find the root cause of the error.", proof: "Discrepancy Report" },
                { id: "INV-04", description: "Perform a recount for any disputed locations.", priority: "High", riskLevel: "High", consequence: "A second count confirms if the discrepancy is real or just a counting error.", proof: "Recount Log" },
                { id: "INV-05", description: "Process inventory adjustments with manager approval and reason codes.", priority: "High", riskLevel: "High", consequence: "Unauthorized adjustments can be a method to conceal theft.", proof: "Adjustment Form" },
                { id: "INV-06", description: "Track inventory accuracy as a key performance indicator (KPI).", priority: "High", riskLevel: "High", consequence: "If you don't measure it, you can't improve it.", proof: "KPI Dashboard" },
                { id: "INV-07", description: "Freeze locations in the WMS during counting to prevent movement.", priority: "High", riskLevel: "High", consequence: "Items being moved in or out during a count will guarantee an inaccurate result.", proof: "WMS Setting" },
                { id: "INV-08", description: "Analyze root causes of inventory inaccuracies.", priority: "High", riskLevel: "High", consequence: "Helps to identify and fix the underlying process issues causing errors.", proof: "Root Cause Analysis Report" },
                { id: "INV-09", description: "Conduct a full physical inventory count annually or biannually.", priority: "High", riskLevel: "High", consequence: "A necessary step for accurate financial accounting and a complete inventory reset.", proof: "Full Count Plan" },
                { id: "INV-10", description: "Reconcile and post the results of the full physical count.", priority: "High", riskLevel: "High", consequence: "The final step to ensure the system reflects the true on-the-ground reality.", proof: "Reconciliation Report" }
            ]
        },
        {
            title: "Shipping & Dispatch Workflow",
            department: "Dispatch",
            frequency: "Per Shipment",
            role: "Dispatch Clerk",
            summary: "Ensures customer orders are fulfilled accurately and efficiently.",
            icon: "truck",
            tasks: [
                { id: "SHIP-01", description: "Generate a consolidated pick list for all orders to be dispatched.", priority: "High", riskLevel: "Medium", consequence: "An inefficient picking process is slow and error-prone.", proof: "Pick List" },
                { id: "SHIP-02", description: "Pick items accurately using a handheld scanner or pick list.", priority: "High", riskLevel: "High", consequence: "Picking the wrong item is a major cause of customer complaints and returns.", proof: "Scan Log/Signed Pick List" },
                { id: "SHIP-03", description: "Pack orders securely and apply the correct shipping label.", priority: "High", riskLevel: "High", consequence: "Poor packing leads to damaged goods; a wrong label means the shipment goes to the wrong customer.", proof: "Packing Slip & Label" },
                { id: "SHIP-04", description: "Verify the packed items against the customer order one last time.", priority: "High", riskLevel: "High", consequence: "The final quality check to prevent a shipping error before it leaves the building.", proof: "Final Check Log" },
                { id: "SHIP-05", description: "Load items onto the correct truck for delivery.", priority: "High", riskLevel: "High", consequence: "Loading onto the wrong truck can cause massive delays and require costly re-shipping.", proof: "Loading Manifest" },
                { id: "SHIP-06", description: "Generate all necessary shipping documents (invoice, manifest, e-way bill).", priority: "High", riskLevel: "High", consequence: "A truck can be stopped and fined by authorities if it doesn't have the correct legal paperwork.", proof: "Shipping Documents" },
                { id: "SHIP-07", description: "Update the order status in the system to 'Shipped'.", priority: "High", riskLevel: "High", consequence: "A delay in updating leaves the customer without tracking information.", proof: "System Update Log" },
                { id: "SHIP-08", description: "Seal the truck and record the seal number.", priority: "High", riskLevel: "High", consequence: "A numbered seal proves that the shipment has not been tampered with in transit.", proof: "Seal Log" },
                { id: "SHIP-09", description: "Hand over documents to the driver and get acknowledgment.", priority: "High", riskLevel: "High", consequence: "Confirms the legal transfer of responsibility for the goods to the transporter.", proof: "Signed Acknowledgment" },
                { id: "SHIP-10", description: "Track shipments and handle any delivery exceptions.", priority: "High", riskLevel: "Medium", consequence: "Proactively solving problems in transit improves customer satisfaction.", proof: "Tracking System" }
            ]
        },
        {
            title: "Warehouse Safety & Housekeeping",
            department: "Safety/Operations",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "A daily audit to ensure a safe working environment and compliance with safety regulations.",
            icon: "hard-hat",
            tasks: [
                { id: "WSH-01", description: "Ensure all aisles and emergency exits are clear of obstructions.", priority: "High", riskLevel: "High", consequence: "A blocked aisle is a trip hazard and a blocked exit is a fatal flaw in a fire.", proof: "Daily Walkthrough Log" },
                { id: "WSH-02", description: "Check that fire extinguishers and first aid stations are accessible.", priority: "High", riskLevel: "High", consequence: "In an emergency, these items must be reachable immediately.", proof: "Safety Equipment Log" },
                { id: "WSH-03", description: "Inspect for any spills or leaks and ensure they are cleaned up immediately.", priority: "High", riskLevel: "High", consequence: "Spills are a major slip-and-fall hazard, a leading cause of workplace injury.", proof: "Spill Report" },
                { id: "WSH-04", description: "Verify that all staff in the operational area are wearing required PPE.", priority: "High", riskLevel: "High", consequence: "Failure to wear PPE (like safety shoes or helmets) can lead to severe injuries.", proof: "PPE Audit" },
                { id: "WSH-05", description: "Check that pallets are stacked safely and not leaning.", priority: "High", riskLevel: "High", consequence: "A collapsing stack of pallets can be fatal.", proof: "Stacking Audit" },
                { id: "WSH-06", description: "Ensure proper lighting throughout the warehouse.", priority: "High", riskLevel: "Medium", consequence: "Poor lighting increases the risk of accidents and picking errors.", proof: "Lighting Check" },
                { id: "WSH-07", description: "Manage waste and scrap disposal effectively.", priority: "High", riskLevel: "Medium", consequence: "Accumulated waste is a fire hazard and attracts pests.", proof: "Waste Disposal Log" },
                { id: "WSH-08", description: "Check battery charging areas for safety compliance.", priority: "High", riskLevel: "High", consequence: "Charging batteries can release explosive gases; proper ventilation is critical.", proof: "Charging Area Audit" },
                { id: "WSH-09", description: "Conduct a brief safety toolbox talk at the start of each shift.", priority: "High", riskLevel: "Medium", consequence: "Keeps safety top-of-mind for all workers.", proof: "Toolbox Talk Record" },
                { id: "WSH-10", description: "Report all safety incidents and near-misses.", priority: "High", riskLevel: "High", consequence: "Analyzing near-misses is the best way to prevent a major accident from happening.", proof: "Incident Reporting System" }
            ]
        },
        {
            title: "Security & Access Control",
            department: "Security",
            frequency: "Ongoing",
            role: "Security Supervisor",
            summary: "Protocols to secure the warehouse against theft and unauthorized access.",
            icon: "shield",
            tasks: [
                { id: "SAC-01", description: "Maintain a log of all visitors and vehicles entering/exiting the premises.", priority: "High", riskLevel: "High", consequence: "Without a log, you have no record of who was on your property during a theft or incident.", proof: "Visitor/Vehicle Log" },
                { id: "SAC-02", description: "Issue visitor passes and ensure they are returned upon exit.", priority: "High", riskLevel: "Medium", consequence: "Prevents visitors from wandering into restricted areas.", proof: "Visitor Pass Log" },
                { id: "SAC-03", description: "Conduct random checks of vehicles leaving the premises.", priority: "High", riskLevel: "High", consequence: "A key deterrent against theft of goods via vehicles.", proof: "Vehicle Check Log" },
                { id: "SAC-04", description: "Ensure all CCTV cameras are functional and recording.", priority: "High", riskLevel: "High", consequence: "A non-functional camera provides no evidence for investigations.", proof: "CCTV Health Log" },
                { id: "SAC-05", description: "Monitor CCTV feeds for any suspicious activity.", priority: "High", riskLevel: "High", consequence: "Proactive monitoring can spot a theft in progress.", proof: "CCTV Monitoring Log" },
                { id: "SAC-06", description: "Restrict access to high-value or sensitive areas.", priority: "High", riskLevel: "High", consequence: "The fewer people with access, the lower the risk of theft.", proof: "Access Control System" },
                { id: "SAC-07", description: "Perform regular patrols of the warehouse perimeter.", priority: "High", riskLevel: "High", consequence: "Deters intruders and allows for detection of fence breaches or tampering.", proof: "Patrol Log" },
                { id: "SAC-08", description: "Secure all doors, windows, and gates after hours.", priority: "High", riskLevel: "High", consequence: "The most basic and critical step in preventing overnight burglary.", proof: "Lock-up Checklist" },
                { id: "SAC-09", description: "Conduct background checks for all security personnel.", priority: "High", riskLevel: "High", consequence: "A security guard with a criminal history is a major liability.", proof: "Background Check Reports" },
                { id: "SAC-10", description: "Have a clear procedure for responding to a security breach or theft.", priority: "High", riskLevel: "High", consequence: "A disorganized response can compromise evidence and hinder investigation.", proof: "Security Incident SOP" }
            ]
        },
        {
            title: "Returns Management (Reverse Logistics)",
            department: "Returns/QC",
            frequency: "Per Return",
            role: "Returns Supervisor",
            summary: "A systematic process for handling product returns.",
            icon: "recycle",
            tasks: [
                { id: "RET-01", description: "Receive and log all returned shipments.", priority: "High", riskLevel: "Medium", consequence: "Without a log, returned goods can get lost in the warehouse.", proof: "Returns Log" },
                { id: "RET-02", description: "Inspect returned items for damage, usage, and completeness.", priority: "High", riskLevel: "High", consequence: "Accepting damaged or incomplete returns results in a financial loss.", proof: "Inspection Report" },
                { id: "RET-03", description: "Grade returned items (e.g., restockable, requires repackaging, scrap).", priority: "High", riskLevel: "High", consequence: "Incorrect grading can lead to damaged goods being put back into saleable stock.", proof: "Grading Log" },
                { id: "RET-04", description: "Process items for restocking back into inventory.", priority: "High", riskLevel: "High", consequence: "Delays in restocking mean items are not available for resale.", proof: "Restocking Log" },
                { id: "RET-05", description: "Segregate items for scrap or refurbishment.", priority: "High", riskLevel: "High", consequence: "Mixing scrap with good inventory can lead to picking errors.", proof: "Segregation Area" },
                { id: "RET-06", description: "Process customer credits or refunds accurately.", priority: "High", riskLevel: "High", consequence: "Errors in credits can lead to customer disputes and financial discrepancies.", proof: "Credit Note" },
                { id: "RET-07", description: "Analyze return reasons to identify product or process issues.", priority: "High", riskLevel: "High", consequence: "High return rates can indicate a serious quality problem that needs to be fixed.", proof: "Returns Analysis Report" },
                { id: "RET-08", description: "Manage disposal of scrapped items according to policy.", priority: "High", riskLevel: "High", consequence: "Improper disposal can lead to environmental issues or fraud.", proof: "Scrap Disposal Note" },
                { id: "RET-09", description: "Keep the returns area organized and separate from main inventory.", priority: "High", riskLevel: "High", consequence: "A disorganized returns area can lead to items being lost or processed incorrectly.", proof: "Area Inspection" },
                { id: "RET-10", description: "Provide feedback to the sales/shipping teams on return causes.", priority: "High", riskLevel: "Medium", consequence: "Helps other departments understand how their actions (e.g., poor packing) lead to returns.", proof: "Feedback Meeting" }
            ]
        },
        {
            title: "Vendor Performance Management",
            department: "Procurement/Logistics",
            frequency: "Quarterly",
            role: "Logistics Manager",
            summary: "A framework for managing relationships with transport and logistics vendors.",
            icon: "handshake",
            tasks: [
                { id: "VEND-PERF-01", description: "Track On-Time Delivery (OTD) performance for each carrier.", priority: "High", riskLevel: "High", consequence: "Late deliveries can shut down a production line or lead to stockouts.", proof: "OTD Report" },
                { id: "VEND-PERF-02", description: "Monitor the rate of damaged goods for each carrier.", priority: "High", riskLevel: "High", consequence: "A high damage rate indicates a careless transporter and leads to financial loss.", proof: "Damage Rate Report" },
                { id: "VEND-PERF-03", description: "Review freight invoices for accuracy and compliance with agreed rates.", priority: "High", riskLevel: "High", consequence: "Prevents over-billing and ensures cost control.", proof: "Invoice Audit" },
                { id: "VEND-PERF-04", description: "Hold quarterly business reviews (QBRs) with key logistics partners.", priority: "High", riskLevel: "High", consequence: "The primary forum for discussing performance and driving improvement.", proof: "QBR Minutes" },
                { id: "VEND-PERF-05", description: "Maintain a vendor scorecard with all key performance metrics.", priority: "High", riskLevel: "High", consequence: "Provides an objective, data-driven way to compare vendor performance.", proof: "Vendor Scorecard" },
                { id: "VEND-PERF-06", description: "Set joint improvement targets with vendors.", priority: "High", riskLevel: "Medium", consequence: "Turns the relationship from adversarial to collaborative.", proof: "Action Plan" },
                { id: "VEND-PERF-07", description: "Ensure vendors comply with all safety and security requirements.", priority: "High", riskLevel: "High", consequence: "A non-compliant vendor can introduce major safety or security risks into your supply chain.", proof: "Vendor Compliance Audit" },
                { id: "VEND-PERF-08", description: "Negotiate contracts and rates based on performance.", priority: "High", riskLevel: "High", consequence: "High-performing vendors should be rewarded, while poor performers should not.", proof: "Contract Negotiation Notes" },
                { id: "VEND-PERF-09", description: "Have a process for onboarding new vendors.", priority: "High", riskLevel: "High", consequence: "Ensures new vendors understand all your requirements from day one.", proof: "Onboarding Checklist" },
                { id: "VEND-PERF-10", description: "Develop contingency plans with backup carriers.", priority: "High", riskLevel: "High", consequence: "If your primary carrier fails, you have an immediate backup plan to ensure business continuity.", proof: "Contingency Plan" }
            ]
        }
    ]
};
