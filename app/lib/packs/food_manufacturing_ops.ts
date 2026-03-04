
import type { PremiumPack } from "@/lib/premium-packs";

export const food_manufacturing_ops: PremiumPack = {
    id: 'food_manufacturing_ops',
    title: "Food Manufacturing Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/4579c50c-e2f9-4629-9e8c-572eb880940d',
    category: "Specialized Production",
    description: "Stop mass recalls and health department closures: before they destroy your facility's reputation and financial stability.",
    heroHeadline: "Stop mass recalls and health department closures.",
    heroSubheadline: "Built for FSSAI & HACCP-aligned facilities that take zero-risk quality and production integrity seriously.",
    pricingUrgency: "A single contaminated batch or a nationwide recall costs 1,000x more than this entire system.",
    consultingAnchor: 5000,
    icon: "factory",
    badgeText: "Recall Proof",
    badgeVariant: "destructive",
    bestseller: true,
    whoIsItFor: ["Food Factory GMs", "Heads of Quality (QA/QC)", "Production Managers", "Food Safety Officers", "Compliance Directors"],
    sampleItems: [
        { text: "<strong>Implement</strong> a full HACCP plan with checklists for monitoring all Critical Control Points (CCPs).", icon: "shield-check" },
        { text: "<strong>Prevent</strong> cross-contamination with strict zoning, allergen management, and personnel hygiene protocols.", icon: "users" },
        { text: "<strong>Ensure</strong> full compliance with a 'one step forward, one step back' traceability and mock recall system.", icon: "search" },
        { text: "<strong>Validate</strong> your cleaning processes with checklists for equipment sanitation and ATP swab testing.", icon: "sparkles" },
        { text: "<strong>Manage</strong> non-conformances effectively with a structured Corrective and Preventive Action (CAPA) workflow.", icon: "bug" },
        { text: "<strong>Guarantee</strong> final product safety with robust procedures for finished product QC, testing, and batch release.", icon: "clipboard-check" }
    ],
    globalStandards: {
        title: "ISO 22000, FSSAI & HACCP ALIGNED",
        standards: [
            { name: "FSSAI", description: "Food Safety and Standards Authority of India manufacturing compliance." },
            { name: "HACCP", description: "Hazard Analysis and Critical Control Points system integration." },
            { name: "ISO 22000", description: "International standard for food safety management systems." },
            { name: "GMP", description: "Good Manufacturing Practices for food and health products." }
        ]
    },
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
                { id: "ZCC-03", description: "Control personnel movement between zones.", priority: "High", riskLevel: "High", consequence: "People can carry pathogens on their shoes and clothes from a raw to a clean zone.", proof: "Access Control Log" },
                { id: "ZCC-04", description: "Manage airflow to prevent airborne contamination from raw to clean areas.", priority: "High", riskLevel: "High", consequence: "Important for controlling airborne pathogens like Listeria.", proof: "Air Pressure Monitoring" },
                { id: "ZCC-05", description: "Have separate cleaning procedures for different zones.", priority: "High", riskLevel: "High", consequence: "Ensures the highest level of sanitation is applied to high-risk areas.", proof: "Cleaning SOPs" },
                { id: "ZCC-06", description: "Ensure waste from raw areas does not pass through finished product areas.", priority: "High", riskLevel: "High", consequence: "A major vector for spreading contamination.", proof: "Waste Movement Path" },
                { id: "ZCC-07", description: "Train employees on the importance of zoning and cross-contamination control.", priority: "High", riskLevel: "High", consequence: "The system only works if employees understand and follow the rules.", proof: "Training Records" },
                { id: "ZCC-08", description: "Audit zoning compliance weekly.", priority: "High", riskLevel: "High", consequence: "Regular audits are needed to enforce compliance.", proof: "Zoning Audit Report" },
                { id: "ZCC-09", description: "Use foot baths or sanitizing mats at the entrance to high-risk areas.", priority: "High", riskLevel: "High", consequence: "Helps to prevent pathogens from being tracked in on footwear.", proof: "Visual Check" },
                { id: "ZCC-10", description: "Test for allergens in finished products to verify control measures.", priority: "High", riskLevel: "High", consequence: "The ultimate proof that your allergen control zoning is effective.", proof: "Allergen Test Results" }
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
                { id: "TRACE-02", description: "Link finished product batch codes to the raw material batch codes used.", priority: "High", riskLevel: "High", consequence: "This is the core of \"one step forward, one step back\" traceability.", proof: "Batch Production Record" },
                { id: "TRACE-03", description: "Conduct a mock recall drill twice a year.", priority: "High", riskLevel: "High", consequence: "Tests your ability to trace a product and contact customers quickly in a real crisis.", proof: "Mock Recall Report" },
                { id: "TRACE-04", description: "Maintain an up-to-date contact list for all distributors and regulators.", priority: "High", riskLevel: "High", consequence: "In a recall, wasting time looking for contact details can be costly and dangerous.", proof: "Contact List" },
                { id: "TRACE-05", description: "Have a pre-approved public communication template for recalls.", priority: "High", riskLevel: "Medium", consequence: "Allows for rapid, clear, and legally vetted communication during a crisis.", proof: "Communication Template" },
                { id: "TRACE-06", description: "Define a clear recall team with roles and responsibilities.", priority: "High", riskLevel: "High", consequence: "In a recall, a clear command structure is essential to avoid chaos.", proof: "Recall Team Chart" },
                { id: "TRACE-07", description: "Test the ability to trace a batch forward (to customer) and backward (to supplier).", priority: "High", riskLevel: "High", consequence: "Proves that your traceability system actually works end-to-end.", proof: "Traceability Test Report" },
                { id: "TRACE-08", description: "Have a clear procedure for product destruction or return during a recall.", priority: "High", riskLevel: "High", consequence: "Ensures that recalled product is effectively removed from the market.", proof: "Destruction/Return SOP" },
                { id: "TRACE-09", description: "Investigate the root cause of any recall and implement corrective actions.", priority: "High", riskLevel: "High", consequence: "The most important step to prevent the same problem from happening again.", proof: "CAPA Report" },
                { id: "TRACE-10", description: "Notify regulators within the required timeframe during a recall.", priority: "High", riskLevel: "High", consequence: "A legal requirement that carries heavy penalties if missed.", proof: "Regulatory Notification" }
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
                { id: "PHT-02", description: "Enforce a strict uniform policy, including hairnets, masks, and dedicated footwear.", priority: "High", riskLevel: "High", consequence: "Prevents physical contaminants (hair) and pathogens from entering the food.", proof: "Daily Uniform Audit" },
                { id: "PHT-03", description: "Monitor handwashing stations and ensure proper handwashing technique is followed.", priority: "High", riskLevel: "High", consequence: "Improper handwashing is a primary cause of foodborne illness.", proof: "Handwashing Audit Log" },
                { id: "PHT-04", description: "Implement a \"no jewelry\" and \"no nail polish\" policy.", priority: "High", riskLevel: "High", consequence: "Jewelry can fall into food (physical hazard) and nail polish can chip (chemical hazard).", proof: "Visual Check" },
                { id: "PHT-05", description: "Ensure all staff complete FSSAI FoSTaC training.", priority: "High", riskLevel: "High", consequence: "A legal requirement in India and a baseline for food safety knowledge.", proof: "FoSTaC Certificates" },
                { id: "PHT-06", description: "Have a clear policy for staff with illnesses or open wounds.", priority: "High", riskLevel: "High", consequence: "A sick employee working can cause a massive food poisoning outbreak.", proof: "Sick Leave Policy" },
                { id: "PHT-07", description: "Conduct regular refresher training on GMP and food safety.", priority: "High", riskLevel: "High", consequence: "Ensures food safety remains top-of-mind and knowledge is current.", proof: "Training Calendar" },
                { id: "PHT-08", description: "Restrict personal items from being brought into the production area.", priority: "High", riskLevel: "Medium", consequence: "Personal items can be a source of contamination.", proof: "Locker Room Policy" },
                { id: "PHT-09", description: "Post hygiene reminders in multiple languages.", priority: "Medium", riskLevel: "Low", consequence: "Reinforces key messages in a diverse workforce.", proof: "Signage Photos" },
                { id: "PHT-10", description: "Observe and correct any unsafe personal behaviors.", priority: "High", riskLevel: "High", consequence: "Builds a culture of hygiene and accountability.", proof: "Behavioral Observation Report" }
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
                { id: "ECS-01", description: "Follow a master sanitation schedule for all equipment and areas.", priority: "High", riskLevel: "High", consequence: "Without a schedule, cleaning tasks are easily forgotten.", proof: "Master Sanitation Schedule" },
                { id: "ECS-02", description: "Use validated CIP/COP procedures for all food contact equipment.", priority: "High", riskLevel: "High", consequence: "An unvalidated procedure may not effectively remove soil and pathogens.", proof: "Cleaning Procedure Documents" },
                { id: "ECS-03", description: "Verify cleaning effectiveness using ATP swabs or protein tests.", priority: "High", riskLevel: "High", consequence: "The only way to scientifically prove that a surface is truly clean.", proof: "ATP Test Log" },
                { id: "ECS-04", description: "Maintain logs for all cleaning and sanitization activities.", priority: "High", riskLevel: "High", consequence: "Provides a legal record of due diligence for food safety audits.", proof: "Cleaning Logs" },
                { id: "ECS-05", description: "Use only food-grade, approved cleaning chemicals.", priority: "High", riskLevel: "High", consequence: "Using unapproved chemicals can introduce chemical hazards into the food.", proof: "Chemical Approval List" },
                { id: "ECS-06", description: "Train staff on correct chemical handling and dilution.", priority: "High", riskLevel: "High", consequence: "Incorrect dilution can make a sanitizer ineffective or dangerously strong.", proof: "Training Records" },
                { id: "ECS-07", description: "Disassemble equipment for cleaning where required.", priority: "High", riskLevel: "High", consequence: "Hidden areas that are not cleaned can harbor massive amounts of bacteria.", proof: "Disassembly SOP" },
                { id: "ECS-08", description: "Inspect equipment for cleanliness before starting production.", priority: "High", riskLevel: "High", consequence: "The final check to ensure you are not starting work on dirty equipment.", proof: "Pre-op Inspection Log" },
                { id: "ECS-09", description: "Manage and clean non-food contact surfaces (floors, walls, drains).", priority: "High", riskLevel: "Medium", consequence: "A dirty environment can lead to indirect contamination of food.", proof: "Area Cleaning Schedule" },
                { id: "ECS-10", description: "Titrate sanitizer concentrations daily to ensure effectiveness.", priority: "High", riskLevel: "High", consequence: "Sanitizer concentration can degrade over time, making it useless.", proof: "Titration Log" }
            ]
        },
        {
            title: "Pest Control Management",
            department: "EHS",
            frequency: "Weekly",
            role: "EHS Officer",
            summary: "A preventive program to keep the facility free of pests like rodents and insects.",
            icon: "bug",
            tasks: [
                { id: "PCM-01", description: "Conduct a weekly inspection of the entire facility for signs of pests.", priority: "High", riskLevel: "High", consequence: "Early detection is critical to preventing a full-blown infestation.", proof: "Pest Inspection Log" },
                { id: "PCM-02", description: "Check and maintain all pest control devices (bait stations, insect light traps).", priority: "High", riskLevel: "High", consequence: "Ineffective traps provide a false sense of security.", proof: "Device Maintenance Log" },
                { id: "PCM-03", description: "Ensure all doors, windows, and openings are properly sealed.", priority: "High", riskLevel: "High", consequence: "The first line of defense is to deny pests entry to the facility.", proof: "Facility Sealing Audit" },
                { id: "PCM-04", description: "Manage waste disposal to prevent attracting pests.", priority: "High", riskLevel: "High", consequence: "Open garbage is a primary food source for rodents and insects.", proof: "Waste Management Log" },
                { id: "PCM-05", description: "Review and file service reports from the external pest control operator.", priority: "High", riskLevel: "High", consequence: "Provides expert, third-party validation of your pest control program.", proof: "Vendor Reports" },
                { id: "PCM-06", description: "Maintain a pest sighting log and take immediate action.", priority: "High", riskLevel: "High", consequence: "Helps to identify hotspots and trends in pest activity.", proof: "Sighting Log" },
                { id: "PCM-07", description: "Keep exterior areas clean and free of vegetation.", priority: "High", riskLevel: "Medium", consequence: "Overgrown vegetation provides hiding places for pests.", proof: "Exterior Inspection Log" },
                { id: "PCM-08", description: "Train employees on how to spot and report pest activity.", priority: "High", riskLevel: "Medium", consequence: "More eyes looking for pests means earlier detection.", proof: "Training Records" },
                { id: "PCM-09", description: "Analyze pest trends to identify root causes.", priority: "High", riskLevel: "High", consequence: "Helps to move from reactive killing to proactive prevention.", proof: "Trend Analysis Report" },
                { id: "PCM-10", description: "Ensure incoming raw materials are free from pests.", priority: "High", riskLevel: "High", consequence: "Pests can be introduced into the facility via suppliers.", proof: "Receiving Inspection Log" }
            ]
        },
        {
            title: "Finished Product QC & Release",
            department: "Quality",
            frequency: "Per Batch",
            role: "QC Manager",
            summary: "The final quality gate to ensure no unsafe or non-conforming product is shipped to customers.",
            icon: "clipboard-check",
            tasks: [
                { id: "FPQC-01", description: "Collect a representative sample of the finished product from each batch.", priority: "High", riskLevel: "High", consequence: "Without a representative sample, testing results are meaningless.", proof: "Sampling Log" },
                { id: "FPQC-02", description: "Conduct sensory evaluation (taste, smell, appearance).", priority: "High", riskLevel: "High", consequence: "The final check to ensure the product meets customer expectations.", proof: "Sensory Panel Report" },
                { id: "FPQC-03", description: "Perform laboratory tests (e.g., microbial, chemical) as per the QC plan.", priority: "High", riskLevel: "High", consequence: "The scientific proof that the product is safe to eat.", proof: "Lab Test Results" },
                { id: "FPQC-04", description: "Check packaging integrity and labeling accuracy.", priority: "High", riskLevel: "High", consequence: "A faulty package can lead to spoilage; an incorrect label can be a major legal issue.", proof: "Packaging QC Report" },
                { id: "FPQC-05", description: "Hold the entire batch until all QC tests are passed.", priority: "High", riskLevel: "High", consequence: "Releasing a product before QC clearance is a catastrophic food safety failure.", proof: "Hold & Release Log" },
                { id: "FPQC-06", description: "Generate a Certificate of Analysis (COA) for the batch.", priority: "High", riskLevel: "High", consequence: "The formal document that proves the product meets all specifications.", proof: "COA Document" },
                { id: "FPQC-07", description: "Formally release the batch for dispatch in the inventory system.", priority: "High", riskLevel: "High", consequence: "The final step that allows the product to be shipped to customers.", proof: "System Release" },
                { id: "FPQC-08", description: "Retain a control sample from each batch for the duration of its shelf life.", priority: "High", riskLevel: "High", consequence: "Essential for investigating any future customer complaints.", proof: "Control Sample Log" },
                { id: "FPQC-09", description: "Investigate any out-of-specification results.", priority: "High", riskLevel: "High", consequence: "You must understand why a batch failed to prevent it from happening again.", proof: "OOS Investigation Report" },
                { id: "FPQC-10", description: "Review and approve all batch records before release.", priority: "High", riskLevel: "High", consequence: "The final check to ensure all production and quality steps were followed correctly.", proof: "Signed Batch Record" }
            ]
        },
        {
            title: "Corrective & Preventive Action (CAPA)",
            department: "Quality/Management",
            frequency: "Per Deviation",
            role: "CAPA Coordinator",
            summary: "A structured process to investigate issues, identify root causes, and prevent recurrence.",
            icon: "bug",
            tasks: [
                { id: "CAPA-01", description: "Log all deviations, non-conformances, and complaints in the CAPA system.", priority: "High", riskLevel: "High", consequence: "If it's not logged, it doesn't exist. This is the starting point for all improvement.", proof: "CAPA Log" },
                { id: "CAPA-02", description: "Conduct a thorough root cause analysis (RCA) for each issue.", priority: "High", riskLevel: "High", consequence: "Fixing the symptom instead of the root cause guarantees the problem will happen again.", proof: "RCA Report" },
                { id: "CAPA-03", description: "Develop a corrective action plan to address the immediate issue.", priority: "High", riskLevel: "High", consequence: "The immediate fix to contain the problem.", proof: "Corrective Action Plan" },
                { id: "CAPA-04", description: "Develop a preventive action plan to prevent recurrence.", priority: "High", riskLevel: "High", consequence: "The long-term fix that addresses the root cause.", proof: "Preventive Action Plan" },
                { id: "CAPA-05", description: "Assign owners and due dates for all actions.", priority: "High", riskLevel: "High", consequence: "Without ownership and deadlines, actions are never implemented.", proof: "CAPA Tracker" },
                { id: "CAPA-06", description: "Track all CAPA actions to completion.", priority: "High", riskLevel: "High", consequence: "The most critical part of the process, ensuring the loop is closed.", proof: "CAPA Status Report" },
                { id: "CAPA-07", description: "Verify the effectiveness of the implemented actions.", priority: "High", riskLevel: "High", consequence: "Ensures the fix was not just a temporary patch.", proof: "Effectiveness Check Log" },
                { id: "CAPA-08", description: "Close out the CAPA once effectiveness is verified.", priority: "High", riskLevel: "High", consequence: "The formal end to the improvement cycle for that issue.", proof: "Closed CAPA Report" },
                { id: "CAPA-09", description: "Share learnings from CAPAs across the organization.", priority: "Medium", riskLevel: "Medium", consequence: "Helps to build a culture of continuous improvement.", proof: "Lessons Learned Document" },
                { id: "CAPA-10", description: "Review CAPA trends in management review meetings.", priority: "High", riskLevel: "High", consequence: "Provides leadership with insight into the biggest operational problems.", proof: "Management Review Minutes" }
            ]
        }
    ]
};
