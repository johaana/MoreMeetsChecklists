
import type { PremiumPack } from "@/lib/premium-packs";

export const manufacturing_operations_ehs_pack: PremiumPack = {
    id: 'manufacturing_operations_ehs_pack',
    title: "Manufacturing Operations & EHS Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/62ae53f1-6966-4746-bf80-69ffb4b0d7dc',
    category: "Industrial & Transport",
    description: "Stop catastrophic industrial accidents, environmental leaks, and production shutdowns: before they destroy your plant's standing and financial stability.",
    heroHeadline: "Stop catastrophic industrial accidents and production shutdowns.",
    heroSubheadline: "Built for plant heads and safety officers who take zero-risk operational and EHS integrity seriously.",
    pricingUrgency: "A single industrial accident or one environmental compliance breach costs 1,000x more than this entire system.",
    consultingAnchor: 5000,
    icon: "factory",
    badgeText: "Safety Critical",
    badgeVariant: "destructive",
    bestseller: true,
    whoIsItFor: ["Plant Heads", "EHS Officers", "Production Managers", "Maintenance Heads", "Quality Control Managers"],
    sampleItems: [
        { text: "<strong>Prevent</strong> fatal accidents with a legally compliant Lock-Out Tag-Out (LOTO) procedure for machine maintenance.", icon: "lock" },
        { text: "<strong>Ensure</strong> worker safety with a permit-to-work system for high-risk jobs like hot work and confined space entry.", icon: "file-check" },
        { text: "<strong>Mitigate</strong> chemical hazards with strict storage, labeling, and spill response protocols.", icon: "test-tube" },
        { text: "<strong>Protect</strong> production continuity with a structured shift handover and inventory control system.", icon: "users" },
        { text: "<strong>Maximize</strong> productivity by tracking Overall Equipment Effectiveness (OEE) to identify and remove downtime.", icon: "trending-up" },
        { text: "<strong>Guarantee</strong> quality with robust In-Process (IPQC) and Raw Material quality gates.", icon: "clipboard-check" }
    ],
    checklists: [
        {
            title: "Lock-Out Tag-Out (LOTO) SOP",
            department: "Maintenance/Safety",
            frequency: "Per Maintenance Task",
            role: "Maintenance Technician",
            summary: "A safety procedure to ensure dangerous machines are properly shut off and not started up again prior to the completion of maintenance or servicing work.",
            icon: "lock",
            tasks: [
                { id: "LOTO-01", description: "Identify all energy sources for the equipment.", priority: "High", riskLevel: "High", consequence: "Missing an energy source (e.g., pneumatic, hydraulic) can lead to unexpected machine movement.", proof: "Energy Source List" },
                { id: "LOTO-02", description: "Isolate the energy sources (e.g., turn off breaker, close valve).", priority: "High", riskLevel: "High", consequence: "The critical first step to de-energizing the machine.", proof: "Visual Confirmation" },
                { id: "LOTO-03", description: "Apply a personal lock and tag to the energy isolating device.", priority: "High", riskLevel: "High", consequence: "Prevents anyone else from accidentally re-energizing the machine while you are working on it.", proof: "Lock & Tag Photo" },
                { id: "LOTO-04", description: "Dissipate any stored energy (e.g., bleed pressure, discharge capacitors).", priority: "High", riskLevel: "High", consequence: "Stored energy can still cause machine parts to move unexpectedly even after the main power is off.", proof: "Energy Dissipation Log" },
                { id: "LOTO-05", description: "Verify the equipment is de-energized by trying to start it. This 'try-out' is the most critical step.", priority: "High", riskLevel: "High", consequence: "Assuming the machine is de-energized when it is not, leading to fatality.", proof: "Zero Energy Test Log" },
                { id: "LOTO-06", description: "After work, ensure all tools and personnel are clear.", priority: "High", riskLevel: "High", consequence: "Leaving a tool inside a machine can cause catastrophic damage upon startup.", proof: "Clearance Check" },
                { id: "LOTO-07", description: "Remove your lock and tag. Only the person who applied it should remove it.", priority: "High", riskLevel: "High", consequence: "Unauthorized removal can lead to accidental startup while a worker is still inside.", proof: "Lock Removal Log" },
                { id: "LOTO-08", description: "Re-energize the equipment and test for normal operation.", priority: "High", riskLevel: "High", consequence: "Ensures maintenance was successful and the machine is safe to return to service.", proof: "Operational Test Log" },
                { id: "LOTO-09", description: "Document the entire LOTO procedure in the maintenance log.", priority: "High", riskLevel: "High", consequence: "Provides a legal record that the safe procedure was followed.", proof: "Maintenance Log" },
                { id: "LOTO-10", description: "Provide annual LOTO training to all affected employees.", priority: "High", riskLevel: "High", consequence: "Legal requirement and essential for ensuring everyone understands this life-saving procedure.", proof: "Training Records" }
            ]
        },
        {
            title: "Permit-To-Work (PTW) System",
            department: "Safety",
            frequency: "Per High-Risk Job",
            role: "Safety Officer",
            summary: "A formal documented process to control high-risk activities like hot work, confined space entry, and working at height.",
            icon: "file-check",
            tasks: [
                { id: "PTW-01", description: "Issue a specific permit for any high-risk work (hot work, confined space, height).", priority: "High", riskLevel: "High", consequence: "Proceeding with high-risk work without a permit is a major safety violation and can lead to fatal accidents.", proof: "Signed Permit" },
                { id: "PTW-02", description: "Conduct a job safety analysis (JSA) before issuing the permit.", priority: "High", riskLevel: "High", consequence: "Identifies the specific hazards and control measures for the job.", proof: "JSA Document" },
                { id: "PTW-03", description: "Verify all safety precautions listed on the permit are in place.", priority: "High", riskLevel: "High", consequence: "The permit is useless if the safety measures are not actually implemented.", proof: "Pre-work Inspection" },
                { id: "PTW-04", description: "Ensure all personnel involved have signed the permit.", priority: "High", riskLevel: "High", consequence: "Confirms that everyone understands the risks and safety procedures.", proof: "Signed Permit" },
                { id: "PTW-05", description: "Display the permit prominently at the work location.", priority: "High", riskLevel: "Medium", consequence: "Alerts everyone in the area that high-risk work is in progress.", proof: "Photo of Displayed Permit" },
                { id: "PTW-06", description: "For confined space, test the atmosphere for oxygen and toxic gases.", priority: "High", riskLevel: "High", consequence: "Entering a confined space with a hazardous atmosphere can be instantly fatal.", proof: "Gas Test Log" },
                { id: "PTW-07", description: "For hot work, ensure a fire watch is present and fire extinguishers are ready.", priority: "High", riskLevel: "High", consequence: "Hot work (welding, grinding) is a leading cause of industrial fires.", proof: "Fire Watch Log" },
                { id: "PTW-08", description: "Close the permit upon completion of work and verify the area is safe.", priority: "High", riskLevel: "High", consequence: "Ensures the work area is returned to a safe condition for normal operations.", proof: "Closed Permit" },
                { id: "PTW-09", description: "Audit the PTW system quarterly for compliance.", priority: "High", riskLevel: "High", consequence: "Ensures the system is being used correctly and effectively.", proof: "PTW Audit Report" },
                { id: "PTW-10", description: "Train all relevant staff on the PTW system.", priority: "High", riskLevel: "High", consequence: "Personnel must understand when a permit is needed and how to follow the procedure.", proof: "Training Records" }
            ]
        },
        {
            title: "Chemical Handling & Storage",
            department: "EHS",
            frequency: "Daily/Weekly",
            role: "Chemical Handler",
            summary: "Ensures safe handling and storage of hazardous chemicals to prevent spills, fires, and employee exposure.",
            icon: "test-tube",
            tasks: [
                { id: "CHS-01", description: "Ensure all chemical containers are properly labeled with contents and hazards.", priority: "High", riskLevel: "High", consequence: "An unlabeled chemical is an unknown hazard; can lead to dangerous mix-ups.", proof: "Labeling Audit" },
                { id: "CHS-02", description: "Store incompatible chemicals in separate, designated areas.", priority: "High", riskLevel: "High", consequence: "Mixing incompatible chemicals can release toxic gas or cause an explosion.", proof: "Storage Segregation Audit" },
                { id: "CHS-03", description: "Check that spill kits are fully stocked and accessible.", priority: "High", riskLevel: "High", consequence: "In a spill, lack of a proper kit leads to wider contamination and worker exposure.", proof: "Spill Kit Inventory" },
                { id: "CHS-04", description: "Maintain an inventory of all chemicals with updated MSDS sheets.", priority: "High", riskLevel: "High", consequence: "MSDS provides critical safety information for handling and emergency response.", proof: "Chemical Register" },
                { id: "CHS-05", description: "Inspect storage areas for leaks, spills, or damaged containers.", priority: "High", riskLevel: "High", consequence: "Early detection prevents small leaks from becoming major incidents.", proof: "Storage Inspection Log" },
                { id: "CHS-06", description: "Ensure proper ventilation in chemical storage areas.", priority: "High", riskLevel: "High", consequence: "Buildup of fumes can be toxic and flammable.", proof: "Ventilation System Check" },
                { id: "CHS-07", description: "Verify that all personnel handling chemicals are wearing the correct PPE.", priority: "High", riskLevel: "High", consequence: "Direct exposure to corrosive or toxic chemicals can cause severe injuries.", proof: "PPE Audit" },
                { id: "CHS-08", description: "Follow correct procedures for disposing of chemical waste.", priority: "High", riskLevel: "High", consequence: "Improper disposal is a major environmental violation and can lead to heavy fines.", proof: "Waste Disposal Log" },
                { id: "CHS-09", description: "Train employees on chemical handling safety and emergency procedures.", priority: "High", riskLevel: "High", consequence: "Untrained workers are a major liability when handling hazardous materials.", proof: "Training Records" },
                { id: "CHS-10", description: "Ensure eyewash stations and safety showers are functional and tested weekly.", priority: "High", riskLevel: "High", consequence: "In a chemical splash, these are critical for minimizing injury.", proof: "Test Log" }
            ]
        },
        {
            title: "Shift Handover Protocol",
            department: "Production",
            frequency: "Per Shift",
            role: "Shift Supervisor",
            summary: "Ensures a smooth transition between shifts, preventing the loss of critical safety and operational information.",
            icon: "users",
            tasks: [
                { id: "SHIFT-H-01", description: "Review production targets and performance of the outgoing shift.", priority: "High", riskLevel: "Medium", consequence: "The new shift starts without context on priorities or problems.", proof: "Production Log" },
                { id: "SHIFT-H-02", description: "Communicate any ongoing safety issues or maintenance work (LOTO).", priority: "High", riskLevel: "High", consequence: "A failure here can lead to someone accidentally re-energizing a machine under maintenance.", proof: "Handover Logbook" },
                { id: "SHIFT-H-03", description: "Discuss any quality issues or deviations from the previous shift.", priority: "High", riskLevel: "High", consequence: "Prevents the new shift from repeating the same quality mistakes.", proof: "Quality Log" },
                { id: "SHIFT-H-04", description: "Check inventory levels of raw materials and finished goods.", priority: "High", riskLevel: "Medium", consequence: "Prevents unexpected stockouts during the shift.", proof: "Inventory Report" },
                { id: "SHIFT-H-05", description: "Conduct a brief walkthrough of the production floor with the incoming supervisor.", priority: "High", riskLevel: "Medium", consequence: "Ensures visual confirmation of any issues and a smoother transition.", proof: "Walkthrough Sign-off" },
                { id: "SHIFT-H-06", description: "Assign tasks and positions to the incoming shift personnel.", priority: "High", riskLevel: "Medium", consequence: "Ensures a smooth start to the shift with clear roles.", proof: "Shift Roster" },
                { id: "SHIFT-H-07", description: "Ensure all logbooks and records are signed and up-to-date.", priority: "High", riskLevel: "High", consequence: "Maintains an accurate and auditable record of plant operations.", proof: "Logbook Audit" },
                { id: "SHIFT-H-08", description: "Brief the incoming team on any changes in procedure or schedule.", priority: "High", riskLevel: "Medium", consequence: "Prevents confusion and errors from procedural changes.", proof: "Briefing Notes" },
                { id: "SHIFT-H-09", description: "Verify that all necessary tools and equipment are available.", priority: "High", riskLevel: "Medium", consequence: "Prevents delays caused by missing tools.", proof: "Tool Inventory" },
                { id: "SHIFT-H-10", description: "Both outgoing and incoming supervisors must sign the handover log.", priority: "High", riskLevel: "High", consequence: "Creates clear accountability for the transfer of responsibility.", proof: "Signed Handover Log" }
            ]
        },
        {
            title: "Raw Material & Inbound QC",
            department: "Quality/Stores",
            frequency: "Per Delivery",
            role: "QC Inspector",
            summary: "The first line of defense against poor quality and contaminated ingredients.",
            icon: "package-check",
            tasks: [
                { id: "RM-QC-01", description: "Verify incoming material against PO and supplier Certificate of Analysis (COA).", priority: "High", riskLevel: "High", consequence: "Accepting the wrong material can ruin an entire batch of production.", proof: "COA and PO Match" },
                { id: "RM-QC-02", description: "Take a sample for quality testing as per the sampling plan.", priority: "High", riskLevel: "High", consequence: "Without sampling, you are blindly trusting the supplier's quality.", proof: "Sample Log" },
                { id: "RM-QC-03", description: "Quarantine the material until QC results are available.", priority: "High", riskLevel: "High", consequence: "Using material before QC approval can lead to non-conforming batches.", proof: "Quarantine Tag" },
                { id: "RM-QC-04", description: "Reject and return any material that does not meet specifications.", priority: "High", riskLevel: "High", consequence: "Prevents bad quality from entering your plant.", proof: "Rejection Note" },
                { id: "RM-QC-05", description: "Release the material for production only after QC approval.", priority: "High", riskLevel: "High", consequence: "Ensures only approved materials are used in production.", proof: "QC Release Note" },
                { id: "RM-QC-06", description: "Inspect packaging for damage or contamination.", priority: "High", riskLevel: "High", consequence: "Damaged packaging can compromise the quality and safety inside.", proof: "Packaging Inspection Log" },
                { id: "RM-QC-07", description: "Check for correct labeling, including batch numbers and expiry dates.", priority: "High", riskLevel: "High", consequence: "Crucial for traceability and preventing the use of expired materials.", proof: "Label Check Log" },
                { id: "RM-QC-08", description: "Maintain a log of all incoming material inspections.", priority: "High", riskLevel: "High", consequence: "Provides data for supplier performance evaluation.", proof: "Inbound QC Log" },
                { id: "RM-QC-09", description: "Audit supplier performance based on QC results.", priority: "High", riskLevel: "High", consequence: "Helps to weed out poor-quality suppliers.", proof: "Supplier Scorecard" },
                { id: "RM-QC-10", description: "Store materials in the correct environmental conditions.", priority: "High", riskLevel: "High", consequence: "Improper storage can degrade material quality.", proof: "Storage Condition Log" }
            ]
        },
        {
            title: "Incident Investigation & CAPA",
            department: "EHS/Management",
            frequency: "Per Incident",
            role: "Safety Manager",
            summary: "A structured process to investigate incidents, identify root causes, and prevent recurrence.",
            icon: "bug",
            tasks: [
                { id: "INC-CAPA-01", description: "Log the incident or near-miss immediately.", priority: "High", riskLevel: "High", consequence: "Delays in reporting lead to loss of crucial information.", proof: "Incident Report" },
                { id: "INC-CAPA-02", description: "Form an investigation team for serious incidents.", priority: "High", riskLevel: "High", consequence: "Ensures a thorough and unbiased investigation.", proof: "Team Charter" },
                { id: "INC-CAPA-03", description: "Conduct a root cause analysis (e.g., 5 Whys, Fishbone).", priority: "High", riskLevel: "High", consequence: "Without the root cause, you only fix the symptom and the problem recurs.", proof: "RCA Report" },
                { id: "INC-CAPA-04", description: "Develop a Corrective and Preventive Action (CAPA) plan.", priority: "High", riskLevel: "High", consequence: "Turns findings into a concrete plan for improvement.", proof: "CAPA Plan" },
                { id: "INC-CAPA-05", description: "Assign owners and deadlines for each action in the CAPA plan.", priority: "High", riskLevel: "High", consequence: "Without ownership, actions are never implemented.", proof: "CAPA Tracker" },
                { id: "INC-CAPA-06", description: "Track all CAPA items to completion.", priority: "High", riskLevel: "High", consequence: "The most critical step; ensures the improvement cycle is closed.", proof: "CAPA Status Report" },
                { id: "INC-CAPA-07", description: "Verify the effectiveness of the implemented actions.", priority: "High", riskLevel: "High", consequence: "Ensures that the fix actually worked.", proof: "Effectiveness Review" },
                { id: "INC-CAPA-08", description: "Share lessons learned with all relevant personnel.", priority: "High", riskLevel: "Medium", consequence: "Helps to build a culture of safety.", proof: "Safety Alert/Toolbox Talk" },
                { id: "INC-CAPA-09", description: "Update SOPs or risk assessments based on findings.", priority: "High", riskLevel: "High", consequence: "Integrates learnings into the formal management system.", proof: "Updated Documents" },
                { id: "INC-CAPA-10", description: "Report incident statistics to management monthly.", priority: "High", riskLevel: "Medium", consequence: "Provides leadership with visibility into safety performance.", proof: "Monthly Safety Report" }
            ]
        },
        {
            title: "Overall Equipment Effectiveness (OEE)",
            department: "Production",
            frequency: "Daily/Shift-wise",
            role: "Production Supervisor",
            summary: "A system to measure manufacturing productivity by tracking availability, performance, and quality.",
            icon: "trending-up",
            tasks: [
                { id: "OEE-01", description: "Track all machine downtime and log the reason for each stoppage.", priority: "High", riskLevel: "High", consequence: "If you don't measure downtime, you can't manage it. This is the biggest source of lost productivity.", proof: "Downtime Log" },
                { id: "OEE-02", description: "Measure actual production output against the machine's ideal run rate.", priority: "High", riskLevel: "Medium", consequence: "Identifies if machines are running slower than designed capacity.", proof: "Performance Log" },
                { id: "OEE-03", description: "Track the number of defective units produced versus the total units.", priority: "High", riskLevel: "High", consequence: "Identifies quality problems that lead to scrap and financial loss.", proof: "Quality Log" },
                { id: "OEE-04", description: "Calculate the OEE score (Availability x Performance x Quality) for critical machines daily.", priority: "High", riskLevel: "High", consequence: "Provides a single metric to track overall manufacturing productivity.", proof: "OEE Report" },
                { id: "OEE-05", description: "Discuss OEE results in daily meetings to identify improvement areas.", priority: "High", riskLevel: "Medium", consequence: "Turns data into actionable conversations.", proof: "Meeting Minutes" },
                { id: "OEE-06", description: "Analyze the top causes of downtime.", priority: "High", riskLevel: "High", consequence: "Helps focus maintenance on the most impactful problems.", proof: "Downtime Analysis Report" },
                { id: "OEE-07", description: "Set improvement targets for OEE.", priority: "High", riskLevel: "Medium", consequence: "Without targets, there is no clear goal for the team.", proof: "Target Sheet" },
                { id: "OEE-08", description: "Implement actions to reduce changeover times.", priority: "High", riskLevel: "High", consequence: "Long changeovers are a major source of lost production time.", proof: "SMED Analysis" },
                { id: "OEE-09", description: "Train operators on autonomous maintenance tasks.", priority: "High", riskLevel: "Medium", consequence: "Empowers operators to handle minor maintenance.", proof: "Training Records" },
                { id: "OEE-10", description: "Display OEE scores visually on the shop floor.", priority: "Medium", riskLevel: "Low", consequence: "Fosters a sense of ownership among the team.", proof: "Visual Management Board" }
            ]
        },
        {
            title: "In-Process Quality Control (IPQC)",
            department: "Quality",
            frequency: "Per Batch/Hour",
            role: "QC Inspector",
            summary: "Verifies that products meet quality standards at various stages of the production process.",
            icon: "clipboard-check",
            tasks: [
                { id: "IPQC-01", description: "Perform quality checks on semi-finished goods at defined control points.", priority: "High", riskLevel: "High", consequence: "Catches defects early before more cost is added to the product.", proof: "IPQC Checksheet" },
                { id: "IPQC-02", description: "Verify that process parameters are within specified limits.", priority: "High", riskLevel: "High", consequence: "Deviations in process parameters are a leading cause of defects.", proof: "Process Log" },
                { id: "IPQC-03", description: "Hold and quarantine any batch that fails an in-process check.", priority: "High", riskLevel: "High", consequence: "Prevents a defective batch from moving further down the line.", proof: "Hold Notice/Tag" },
                { id: "IPQC-04", description: "Document all IPQC checks and any deviations found.", priority: "High", riskLevel: "High", consequence: "Provides a data trail for root cause analysis.", proof: "IPQC Report" },
                { id: "IPQC-05", description: "Provide real-time feedback to the production team on quality issues.", priority: "High", riskLevel: "Medium", consequence: "Allows operators to correct issues immediately.", proof: "Feedback Log" },
                { id: "IPQC-06", description: "Calibrate all inspection and measuring equipment.", priority: "High", riskLevel: "High", consequence: "An uncalibrated tool can give false 'pass' results.", proof: "Calibration Records" },
                { id: "IPQC-07", description: "Take samples for laboratory testing as per the plan.", priority: "High", riskLevel: "High", consequence: "Provides more in-depth analysis than can be done on the line.", proof: "Sample Log" },
                { id: "IPQC-08", description: "Ensure operators are trained on quality standards.", priority: "High", riskLevel: "Medium", consequence: "Operators who don't know the standard cannot meet it.", proof: "Training Records" },
                { id: "IPQC-09", description: "Use statistical process control (SPC) charts to monitor processes.", priority: "High", riskLevel: "High", consequence: "Helps identify process drift before it results in out-of-spec product.", proof: "SPC Charts" },
                { id: "IPQC-10", description: "Conduct a final product inspection before packaging.", priority: "High", riskLevel: "High", consequence: "The last chance to catch any defects before they reach the customer.", proof: "Final Inspection Report" }
            ]
        }
    ]
};
