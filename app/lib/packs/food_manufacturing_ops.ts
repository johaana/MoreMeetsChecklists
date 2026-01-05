
import type { PremiumPack } from "@/lib/premium-packs";

export const food_manufacturing_ops: PremiumPack = {
    id: 'food_manufacturing_ops',
    title: "Food Manufacturing Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/4579c50c-e2f9-4629-9e8c-572eb880940d',
    category: "Specialized Production",
    description: "A comprehensive, FSSAI & HACCP-aligned toolkit for food manufacturing facilities to ensure food safety, quality, and regulatory compliance.",
    icon: "factory",
    whoIsItFor: ["Food Factory GMs", "Heads of Quality (QA/QC)", "Production Managers", "Food Safety Officers"],
    sampleItems: [
        { text: "Implement a full HACCP plan with checklists for monitoring all Critical Control Points (CCPs).", icon: "shield-check" },
        { text: "Prevent cross-contamination with strict zoning, allergen management, and personnel hygiene protocols.", icon: "users" },
        { text: "Ensure full compliance with a 'one step forward, one step back' traceability and mock recall system.", icon: "search" },
        { text: "Validate your cleaning processes with checklists for equipment sanitation and ATP swab testing.", icon: "sparkles" },
        { text: "Manage non-conformances effectively with a structured Corrective and Preventive Action (CAPA) workflow.", icon: "bug" },
        { text: "Guarantee final product safety with robust procedures for finished product QC, testing, and batch release.", icon: "clipboard-check" }
    ],
    checklists: [
        {
            title: "HACCP Plan Implementation",
            department: "Quality",
            frequency: "Ongoing",
            role: "QA Manager",
            summary: "Ensures the HACCP food safety system is alive and effective.",
            icon: "shield-check",
            tasks: [
                { id: "HACCP-IMP-01", description: "Review and update the HACCP plan annually or when processes change.", priority: "High", riskLevel: "High", consequence: "An outdated plan does not address current risks, a major compliance failure.", proof: "Updated HACCP Plan" },
                { id: "HACCP-IMP-02", description: "Monitor all Critical Control Points (CCPs) as defined in the plan.", priority: "High", riskLevel: "High", consequence: "Failure to monitor a CCP (e.g., cooking temperature) can lead to unsafe food.", proof: "CCP Monitoring Records" },
                { id: "HACCP-IMP-03", description: "Take immediate corrective action for any CCP deviation.", priority: "High", riskLevel: "High", consequence: "Allows unsafe product to be produced and potentially shipped.", proof: "Corrective Action Report" },
                { id: "HACCP-IMP-04", description: "Verify that the HACCP system is working effectively through regular audits.", priority: "High", riskLevel: "High", consequence: "Without verification, you are only assuming the plan is working.", proof: "HACCP Verification Report" },
                { id: "HACCP-IMP-05", description: "Maintain all records related to the HACCP plan.", priority: "High", riskLevel: "High", consequence: "Lack of records is a major red flag for any food safety auditor.", proof: "HACCP Record File" },
                { id: "HACCP-IMP-06", description: "Train all employees on their roles in the HACCP plan.", priority: "High", riskLevel: "High", consequence: "The entire system depends on trained employees executing their roles correctly.", proof: "Training Records" },
                { id: "HACCP-IMP-07", description: "Conduct a hazard analysis for any new products or processes.", priority: "High", riskLevel: "High", consequence: "New products may introduce new hazards (e.g., allergens) that are not controlled.", proof: "Hazard Analysis Report" },
                { id: "HACCP-IMP-08", description: "Validate critical limits for CCPs.", priority: "High", riskLevel: "High", consequence: "If the critical limit is wrong (e.g., temp is too low), the CCP is ineffective.", proof: "Validation Study" },
                { id: "HACCP-IMP-09", description: "Review prerequisite programs (e.g., sanitation, pest control).", priority: "High", riskLevel: "High", consequence: "A HACCP plan cannot succeed without a strong foundation of basic hygiene.", proof: "PRP Review Report" },
                { id: "HACCP-IMP-10", description: "Hold regular HACCP team meetings.", priority: "High", riskLevel: "Medium", consequence: "Ensures ongoing management and improvement of the food safety system.", proof: "Meeting Minutes" }
            ]
        },
        {
            title: "Zoning & Cross-Contamination Control",
            department: "Production/Hygiene",
            frequency: "Daily",
            role: "Hygiene Supervisor",
            summary: "Implements physical and procedural barriers to prevent pathogens and allergens from contaminating finished products.",
            icon: "shield-alert",
            tasks: [
                { id: "ZCC-01", description: "Ensure clear physical separation between raw and cooked/ready-to-eat areas.", priority: "High", riskLevel: "High", consequence: "A primary cause of cross-contamination with pathogens like Salmonella or Listeria.", proof: "Visual Audit" },
                { id: "ZCC-02", description: "Use color-coded uniforms, tools, and cleaning equipment for different zones.", priority: "High", riskLevel: "High", consequence: "Prevents a dirty tool from a raw area being used in a clean, high-risk area.", proof: "Color Coding Chart" },
                { id: "ZCC-03", description: "Control personnel movement between zones (e.g., dedicated staff, foot baths).", priority: "High", riskLevel: "High", consequence: "People can carry pathogens on their shoes and clothes from a raw to a clean zone.", proof: "Access Control Log" },
                { id: "ZCC-04", description: "Manage airflow to ensure positive pressure in high-risk areas, preventing airborne contamination from raw to clean areas.", priority: "High", riskLevel: "High", consequence: "Important for controlling airborne pathogens like Listeria.", proof: "Air Pressure Monitoring Log" },
                { id: "ZCC-05", description: "Have separate, dedicated cleaning procedures and schedules for different zones.", priority: "High", riskLevel: "High", consequence: "Ensures the highest level of sanitation is applied to high-risk areas.", proof: "Zoned Cleaning SOPs" },
                { id: "ZCC-06", description: "Ensure waste from raw areas follows a dedicated path and does not pass through finished product areas.", priority: "High", riskLevel: "High", consequence: "A major vector for spreading contamination.", proof: "Waste Movement Path Diagram" },
                { id: "ZCC-07", description: "Train employees on the importance of zoning and cross-contamination control.", priority: "High", riskLevel: "High", consequence: "The system only works if employees understand and follow the rules.", proof: "Training Records" },
                { id: "ZCC-08", description: "Conduct weekly audits of zoning compliance, including staff movement and tool usage.", priority: "High", riskLevel: "High", consequence: "Regular audits are needed to enforce compliance and correct bad habits.", proof: "Zoning Audit Report" },
                { id: "ZCC-09", description: "Use dedicated equipment and utensils for allergen handling, and have a clear allergen cleanup procedure.", priority: "High", riskLevel: "High", consequence: "Prevents life-threatening allergic reactions caused by cross-contact.", proof: "Allergen Control Plan" },
                { id: "ZCC-10", description: "Verify cleaning effectiveness between allergen and non-allergen runs with rapid test kits.", priority: "High", riskLevel: "High", consequence: "The ultimate proof that your allergen control zoning is effective.", proof: "Allergen Swab Test Results" }
            ]
        },
        {
            title: "Traceability & Recall Procedure",
            department: "Quality",
            frequency: "Per Batch/Recall Drill",
            role: "QA Manager",
            summary: "A system to trace products through the supply chain and execute a rapid, effective recall if necessary.",
            icon: "search",
            tasks: [
                { id: "TRACE-01", description: "Assign a unique batch code to every batch of finished product.", priority: "High", riskLevel: "High", consequence: "Without a batch code, traceability is impossible.", proof: "Batch Code Log" },
                { id: "TRACE-02", description: "Link finished product batch codes to the raw material batch codes used ('one step forward, one step back').", priority: "High", riskLevel: "High", consequence: "This is the core of traceability, allowing rapid identification of affected products.", proof: "Batch Production Record" },
                { id: "TRACE-03", description: "Conduct a mock recall drill twice a year, aiming for 100% product accounted for within 4 hours.", priority: "High", riskLevel: "High", consequence: "Tests your ability to trace a product and contact customers quickly in a real crisis.", proof: "Mock Recall Report" },
                { id: "TRACE-04", description: "Maintain an up-to-date contact list for all distributors, customers, and regulatory bodies.", priority: "High", riskLevel: "High", consequence: "In a recall, wasting time looking for contact details can be costly and dangerous.", proof: "Contact List" },
                { id: "TRACE-05", description: "Have pre-approved public communication and press release templates for recalls.", priority: "High", riskLevel: "Medium", consequence: "Allows for rapid, clear, and legally vetted communication during a crisis.", proof: "Communication Template" },
                { id: "TRACE-06", description: "Define a clear recall team with pre-assigned roles and responsibilities (e.g., Recall Coordinator, Media Spokesperson).", priority: "High", riskLevel: "High", consequence: "In a recall, a clear command structure is essential to avoid chaos.", proof: "Recall Team Chart" },
                { id: "TRACE-07", description: "Test the ability to trace a specific raw material batch to all finished product batches it was used in.", priority: "High", riskLevel: "High", consequence: "Proves that your traceability system actually works end-to-end.", proof: "Traceability Test Report" },
                { id: "TRACE-08", description: "Have a clear procedure for product hold, destruction, or return during a recall.", priority: "High", riskLevel: "High", consequence: "Ensures that recalled product is effectively removed from the market and accounted for.", proof: "Product Disposition SOP" },
                { id: "TRACE-09", description: "Investigate the root cause of any recall and implement Corrective and Preventive Actions (CAPA).", priority: "High", riskLevel: "High", consequence: "The most important step to prevent the same problem from happening again.", proof: "CAPA Report" },
                { id: "TRACE-10", description: "Notify FSSAI and other regulators within the required timeframe during a recall.", priority: "High", riskLevel: "High", consequence: "A legal requirement that carries heavy penalties if missed.", proof: "Regulatory Notification Log" }
            ]
        },
        {
            title: "Personnel Hygiene & Training",
            department: "HR/Hygiene",
            frequency: "Ongoing",
            role: "Hygiene Officer",
            summary: "Ensures all food handlers meet strict hygiene standards to prevent contamination.",
            icon: "user-check",
            tasks: [
                { id: "PHT-01", description: "Conduct pre-employment and annual medical check-ups for all food handlers.", priority: "High", riskLevel: "High", consequence: "Prevents individuals with communicable diseases from handling food.", proof: "Medical Records" },
                { id: "PHT-02", description: "Enforce a strict uniform policy, including captive footwear, hairnets, and no outside clothing in production areas.", priority: "High", riskLevel: "High", consequence: "Prevents physical contaminants (hair) and pathogens from entering the food.", proof: "Daily Uniform Audit" },
                { id: "PHT-03", description: "Monitor handwashing stations (soap, hot water, sanitizer) and ensure proper handwashing technique is followed.", priority: "High", riskLevel: "High", consequence: "Improper handwashing is a primary cause of foodborne illness.", proof: "Handwashing Audit Log" },
                { id: "PHT-04", description: "Implement a strict 'no jewelry' and 'no nail polish' policy in all food handling areas.", priority: "High", riskLevel: "High", consequence: "Jewelry can fall into food (physical hazard) and nail polish can chip (chemical hazard).", proof: "Daily Visual Check" },
                { id: "PHT-05", description: "Ensure all staff complete FSSAI FoSTaC training appropriate to their role.", priority: "High", riskLevel: "High", consequence: "A legal requirement in India and a baseline for food safety knowledge.", proof: "FoSTaC Certificates" },
                { id: "PHT-06", description: "Have a clear, no-fault policy for staff to report illness and be excluded from work.", priority: "High", riskLevel: "High", consequence: "A sick employee working can cause a massive food poisoning outbreak.", proof: "Sick Leave Policy" },
                { id: "PHT-07", description: "Conduct regular refresher training on Good Manufacturing Practices (GMP) and food safety.", priority: "High", riskLevel: "High", consequence: "Ensures food safety remains top-of-mind and knowledge is current.", proof: "Training Calendar" },
                { id: "PHT-08", description: "Restrict personal items (phones, bags) from being brought into the production area.", priority: "High", riskLevel: "Medium", consequence: "Personal items can be a source of contamination.", proof: "Locker Room Policy" },
                { id: "PHT-09", description: "Post hygiene reminders and instructions in multiple languages at key locations.", priority: "Medium", riskLevel: "Low", consequence: "Reinforces key messages in a diverse workforce.", proof: "Signage Photos" },
                { id: "PHT-10", description: "Directly observe and correct any unsafe personal behaviors (e.g., eating, spitting) in production areas.", priority: "High", riskLevel: "High", consequence: "Builds a culture of hygiene and accountability.", proof: "Behavioral Observation Report" }
            ]
        },
        {
            title: "Equipment Cleaning & Sanitization",
            department: "Maintenance/Hygiene",
            frequency: "Daily/Scheduled",
            role: "Sanitation Supervisor",
            summary: "A systematic approach to cleaning to ensure all equipment is free from food residues and harmful bacteria.",
            icon: "sparkles",
            tasks: [
                { id: "ECS-01", description: "Follow a master sanitation schedule (MSS) for all equipment and areas, detailing frequency, method, and responsibility.", priority: "High", riskLevel: "High", consequence: "Without a schedule, cleaning tasks are easily forgotten, leading to biofilm buildup.", proof: "Master Sanitation Schedule" },
                { id: "ECS-02", description: "Use validated Cleaning-In-Place (CIP) or Cleaning-Out-of-Place (COP) procedures for all food contact equipment.", priority: "High", riskLevel: "High", consequence: "An unvalidated procedure may not effectively remove soil and pathogens.", proof: "CIP/COP Record Charts" },
                { id: "ECS-03", description: "Verify cleaning effectiveness using ATP swabs or protein tests on critical surfaces after cleaning.", priority: "High", riskLevel: "High", consequence: "The only way to scientifically prove that a surface is truly clean beyond visual inspection.", proof: "ATP Test Log" },
                { id: "ECS-04", description: "Maintain detailed logs for all cleaning and sanitization activities, signed by both the person who cleaned and a supervisor.", priority: "High", riskLevel: "High", consequence: "Provides a legal record of due diligence for food safety audits.", proof: "Cleaning Logs" },
                { id: "ECS-05", description: "Use only food-grade, approved cleaning chemicals, and maintain an inventory.", priority: "High", riskLevel: "High", consequence: "Using unapproved chemicals can introduce chemical hazards into the food.", proof: "Chemical Inventory and Approval List" },
                { id: "ECS-06", description: "Train staff on correct chemical handling, dilution rates, and contact times for sanitizers.", priority: "High", riskLevel: "High", consequence: "Incorrect dilution can make a sanitizer ineffective or dangerously strong.", proof: "Training Records" },
                { id: "ECS-07", description: "Disassemble equipment for cleaning where required, following a specific SOP.", priority: "High", riskLevel: "High", consequence: "Hidden areas that are not cleaned can harbor massive amounts of bacteria (biofilms).", proof: "Disassembly for Cleaning SOP" },
                { id: "ECS-08", description: "Conduct a pre-operational inspection of all equipment for cleanliness before starting production.", priority: "High", riskLevel: "High", consequence: "The final check to ensure you are not starting work on dirty equipment.", proof: "Pre-op Inspection Log" },
                { id: "ECS-09", description: "Manage and clean non-food contact surfaces (floors, walls, drains) to prevent environmental contamination.", priority: "High", riskLevel: "Medium", consequence: "A dirty environment can lead to indirect contamination of food.", proof: "Area Cleaning Schedule" },
                { id: "ECS-10", description: "Titrate sanitizer concentrations at the start of each shift to ensure effectiveness.", priority: "High", riskLevel: "High", consequence: "Sanitizer concentration can degrade over time, making it useless.", proof: "Titration Log" }
            ]
        },
        {
            title: "Raw Material Receiving & QC",
            department: "Stores/QC",
            frequency: "Per Delivery",
            role: "Receiving Officer",
            summary: "A critical control point to ensure only safe and high-quality ingredients enter the facility.",
            icon: "package-check",
            tasks: [
                { id: "RM-QC-01", description: "Schedule deliveries to avoid congestion at the receiving bay.", priority: "Medium", riskLevel: "Low", consequence: "Hasty receiving leads to errors.", proof: "Delivery Schedule" },
                { id: "RM-QC-02", description: "Inspect the delivery vehicle for cleanliness and signs of pests before unloading.", priority: "High", riskLevel: "High", consequence: "A dirty truck can contaminate your entire delivery.", proof: "Vehicle Inspection Log" },
                { id: "RM-QC-03", description: "Check temperature of chilled/frozen goods and reject if outside critical limits.", priority: "High", riskLevel: "High", consequence: "Breaking the cold chain is a major food safety risk.", proof: "Goods Receiving Temperature Log" },
                { id: "RM-QC-04", description: "Verify product, quantity, batch number, and expiry date against the PO and supplier documents.", priority: "High", riskLevel: "High", consequence: "Accepting wrong, short, or near-expiry product.", proof: "Signed Goods Receipt Note (GRN)" },
                { id: "RM-QC-05", description: "Inspect packaging for damage, leaks, or tampering. Reject any compromised packages.", priority: "High", riskLevel: "High", consequence: "Damaged packaging can lead to contamination.", proof: "Receiving Inspection Report" },
                { id: "RM-QC-06", description: "Collect a sample for lab testing as per the sampling plan for critical raw materials.", priority: "High", riskLevel: "High", consequence: "Missed detection of microbial or chemical contamination.", proof: "Sample Collection Log" },
                { id: "RM-QC-07", description: "Ensure all received materials are labeled with an internal batch code for traceability.", priority: "High", riskLevel: "High", consequence: "Breaks the internal traceability chain.", proof: "Internal Batch Label" },
                { id: "RM-QC-08", description: "Move raw materials to their designated storage area immediately after receiving.", priority: "High", riskLevel: "High", consequence: "Leaving materials in the receiving area increases risk of contamination or temperature abuse.", proof: "Putaway Log" },
                { id: "RM-QC-09", description: "Verify Certificate of Analysis (COA) is received for all required materials.", priority: "High", riskLevel: "High", consequence: "No proof of supplier's quality control.", proof: "COA File" },
                { id: "RM-QC-10", description: "Maintain a register of approved suppliers and do not accept materials from unapproved sources.", priority: "High", riskLevel: "High", consequence: "Using materials from an unvetted supplier is a major food safety gamble.", proof: "Approved Supplier List" }
            ]
        },
        {
            title: "Finished Product Release",
            department: "Quality Assurance",
            frequency: "Per Batch",
            role: "QA Officer",
            summary: "The final quality gate to ensure no unsafe or non-conforming product is shipped to customers.",
            icon: "clipboard-check",
            tasks: [
                { id: "FP-REL-01", description: "Review all batch production records (BPRs) for completeness and accuracy.", priority: "High", riskLevel: "High", consequence: "Releasing a batch with an incomplete record hides potential deviations.", proof: "BPR Review Checklist" },
                { id: "FP-REL-02", description: "Verify all CCP monitoring records for the batch are within critical limits.", priority: "High", riskLevel: "High", consequence: "The single most important check; releasing a batch with a CCP failure is a major food safety incident.", proof: "CCP Record Review" },
                { id: "FP-REL-03", description: "Check results of all in-process quality control (IPQC) checks for the batch.", priority: "High", riskLevel: "High", consequence: "Ensures the product met quality specifications throughout the process.", proof: "IPQC Record Review" },
                { id: "FP-REL-04", description: "Review lab testing results (microbiological, chemical) against specifications.", priority: "High", riskLevel: "High", consequence: "Releasing product that is contaminated.", proof: "Lab Report Review" },
                { id: "FP-REL-05", description: "Inspect finished product packaging and labeling for correctness and integrity.", priority: "High", riskLevel: "High", consequence: "Incorrect packaging can lead to allergen issues or reduced shelf life.", proof: "Packaging Inspection Report" },
                { id: "FP-REL-06", description: "Place any batch that fails any check on 'Hold' status immediately and escalate.", priority: "High", riskLevel: "High", consequence: "Prevents accidental shipment of a non-conforming batch.", proof: "Hold Notification" },
                { id: "FP-REL-07", description: "Ensure traceability records for the batch are complete.", priority: "High", riskLevel: "High", consequence: "In case of a future recall, this batch would be untraceable.", proof: "Traceability Check" },
                { id: "FP-REL-08", description: "Authorize final release of the batch in the inventory system.", priority: "High", riskLevel: "High", consequence: "The formal step that moves a batch from 'quarantine' to 'releasable' stock.", proof: "System Release Screenshot" },
                { id: "FP-REL-09", description: "Maintain a file of all batch release documentation.", priority: "High", riskLevel: "Medium", consequence: "Provides a complete audit trail for every batch produced.", proof: "Batch Release File" },
                { id: "FP-REL-10", description: "Analyze trends in batch failures or deviations to drive process improvement.", priority: "Medium", riskLevel: "Medium", consequence: "Uses quality data to make the production process better.", proof: "Trend Analysis Report" }
            ]
        },
        {
            title: "Pest Control Management",
            department: "Hygiene/EHS",
            frequency: "Weekly",
            role: "Hygiene Supervisor",
            summary: "A preventive program to keep the facility free of pests like rodents and insects.",
            icon: "bug",
            tasks: [
                { id: "PEST-01", description: "Inspect the interior and exterior of the facility for signs of pest activity (droppings, gnaw marks).", priority: "High", riskLevel: "High", consequence: "A pest infestation can lead to closure by health authorities and severe brand damage.", proof: "Weekly Pest Inspection Log" },
                { id: "PEST-02", description: "Ensure all doors, windows, and other openings are properly sealed or screened.", priority: "High", riskLevel: "High", consequence: "Denies entry points for pests.", proof: "Structural Audit Checklist" },
                { id: "PEST-03", description: "Check and clean all insect light traps (ILTs) and log findings.", priority: "High", riskLevel: "Medium", consequence: "Provides data on flying insect types and population levels.", proof: "ILT Log" },
                { id: "PEST-04", description: "Review the service report from the third-party pest control operator (PCO).", priority: "High", riskLevel: "High", consequence: "Provides a professional, third-party audit of your pest control status.", proof: "PCO Service Report" },
                { id: "PEST-05", description: "Ensure waste is managed to not attract pests (e.g., closed dumpsters, frequent removal).", priority: "High", riskLevel: "High", consequence: "Garbage is a primary food source for pests.", proof: "Waste Management Area Inspection" },
                { id: "PEST-06", description: "Maintain a pest sighting log and investigate any sightings immediately.", priority: "High", riskLevel: "High", consequence: "Helps identify hotspots and the effectiveness of control measures.", proof: "Sighting Log" },
                { id: "PEST-07", description: "Ensure no standing water is present on the premises.", priority: "High", riskLevel: "Medium", consequence: "Breeding ground for mosquitoes and other insects.", proof: "Water Stagnation Check" },
                { id: "PEST-08", description: "Keep vegetation and landscaping trimmed back from the building.", priority: "Medium", riskLevel: "Low", consequence: "Removes hiding places for rodents.", proof: "Groundskeeping Log" },
                { id: "PEST-09", description: "Audit raw material receiving area for pest-related risks.", priority: "High", riskLevel: "High", consequence: "Pests can be introduced via suppliers.", proof: "Receiving Area Audit" },
                { id: "PEST-10", description: "Train all employees to recognize and report signs of pest activity.", priority: "High", riskLevel: "Medium", consequence: "More eyes looking for pests makes detection faster.", proof: "Training Records" }
            ]
        }
    ]
};
  

    