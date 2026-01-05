
import type { PremiumPack } from "@/lib/premium-packs";

export const manufacturing_operations_ehs_pack: PremiumPack = {
    id: 'manufacturing_operations_ehs_pack',
    title: "Manufacturing Operations & EHS Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/62ae53f1-6966-4746-bf80-69ffb4b0d7dc',
    category: "Industrial & Transport",
    description: "A comprehensive EHS and operational toolkit for plant heads and safety officers to ensure a safe, compliant, and efficient manufacturing environment.",
    icon: "factory",
    badgeText: "Safety Critical",
    badgeVariant: "destructive",
    bestseller: true,
    whoIsItFor: ["Plant Heads", "EHS Officers", "Production Managers", "Maintenance Heads", "Quality Control Managers"],
    sampleItems: [
        { text: "Prevent fatal accidents with a legally compliant Lock-Out Tag-Out (LOTO) procedure for machine maintenance.", icon: "lock" },
        { text: "Ensure worker safety with a permit-to-work system for high-risk jobs like hot work and confined space entry.", icon: "file-check" },
        { text: "Boost productivity by tracking Overall Equipment Effectiveness (OEE) to minimize downtime.", icon: "trending-up" },
        { text: "Reduce defects and waste with an In-Process Quality Control (IPQC) system.", icon: "clipboard-check" },
        { text: "Mitigate fire and explosion risks with strict chemical handling and storage protocols.", icon: "siren" },
        { text: "Maintain compliance with a robust system for environmental monitoring and statutory reporting.", icon: "leaf" }
    ],
    checklists: [
        {
            title: "Daily Production Kick-off",
            department: "Production",
            frequency: "Daily",
            role: "Shift Supervisor",
            summary: "Ensures the production line is ready, safe, and aligned with the day's targets before starting operations.",
            icon: "clipboard-check",
            tasks: [
                { id: "MFG-DPK-01", description: "Review shift handover log from the previous shift for any issues or pending actions.", priority: "High", riskLevel: "Medium", consequence: "Recurring issues are not resolved, leading to repeated downtime or quality deviations.", proof: "Signed handover logbook." },
                { id: "MFG-DPK-02", description: "Conduct a toolbox talk covering the day's production targets, safety focus, and quality alerts.", priority: "High", riskLevel: "Low", consequence: "Team is misaligned on priorities, increased risk of accidents or quality errors.", proof: "Toolbox talk attendance sheet and topic notes." },
                { id: "MFG-DPK-03", description: "Verify that raw material availability for the first 4 hours of production is confirmed.", priority: "High", riskLevel: "High", consequence: "Line stoppage due to material shortage, impacting entire day's output.", proof: "Material staging confirmation from stores." },
                { id: "MFG-DPK-04", description: "Check that all machine safety guards are in place and emergency stops are functional.", priority: "High", riskLevel: "High", consequence: "Catastrophic injury or fatality.", proof: "Pre-startup safety checklist signed by operator and supervisor." },
                { id: "MFG-DPK-05", description: "Ensure all operators are at their assigned stations and wearing the correct Personal Protective Equipment (PPE).", priority: "High", riskLevel: "Medium", consequence: "Workplace injuries, non-compliance with safety regulations.", proof: "Supervisor's visual inspection." },
                { id: "MFG-DPK-06", description: "Review the day's production schedule and ensure the first job's parameters are correctly set on the machines.", priority: "High", riskLevel: "Medium", consequence: "Production of non-conforming product, significant rework or scrap.", proof: "First-off inspection report." },
                { id: "MFG-DPK-07", description: "Confirm that the quality control station is ready with the required gauges, checklists, and sample containers.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to perform in-process quality checks, leading to defect production.", proof: "QC station readiness checklist." },
                { id: "MFG-DPK-08", description: "Check that the area is clean, well-lit, and free from slip, trip, or fall hazards.", priority: "Medium", riskLevel: "Medium", consequence: "Workplace accidents, reduced efficiency.", proof: "5S audit checklist for the area." }
            ]
        },
        {
            title: "Lock-Out Tag-Out (LOTO)",
            department: "Maintenance/EHS",
            frequency: "Per Maintenance Task",
            role: "Maintenance Technician",
            summary: "A safety procedure to ensure dangerous machines are properly shut off and not started up again prior to the completion of maintenance or servicing work.",
            icon: "lock",
            tasks: [
                { id: "MFG-LOTO-01", description: "Notify all affected employees of the impending shutdown and the LOTO procedure.", priority: "High", riskLevel: "High", consequence: "Unexpected shutdown causes process issues; employees unaware of maintenance work.", proof: "Log of communication." },
                { id: "MFG-LOTO-02", description: "Shut down the machine or equipment using the normal stopping procedure.", priority: "High", riskLevel: "High", consequence: "Unsafe shutdown could damage equipment or leave it in a hazardous state.", proof: "Operator confirmation." },
                { id: "MFG-LOTO-03", description: "Isolate all energy sources (electrical, hydraulic, pneumatic, etc.) as per the machine-specific LOTO chart.", priority: "High", riskLevel: "High", consequence: "Stored energy can cause unexpected movement, leading to fatal injury.", proof: "LOTO checklist with each energy source ticked off." },
                { id: "MFG-LOTO-04", description: "Apply assigned, individual locks and tags to each energy isolating device.", priority: "High", riskLevel: "High", consequence: "Another worker could accidentally re-energize the machine.", proof: "Photo of the applied locks and tags." },
                { id: "MFG-LOTO-05", description: "Release or restrain all stored energy (e.g., bleed pneumatic lines, block elevated parts).", priority: "High", riskLevel: "High", consequence: "Injury from unexpected release of residual energy.", proof: "LOTO checklist verification." },
                { id: "MFG-LOTO-06", description: "VERIFY isolation by attempting to start the machine using the normal start button. This is the most critical step.", priority: "High", riskLevel: "High", consequence: "Assuming the machine is de-energized when it is not, leading to fatality.", proof: "Signature on the LOTO permit confirming verification." },
                { id: "MFG-LOTO-07", description: "Upon work completion, inspect the area and remove all tools.", priority: "High", riskLevel: "Medium", consequence: "Tools left in machine can cause damage on startup.", proof: "Work area clearance check." },
                { id: "MFG-LOTO-08", description: "Notify all affected employees that LOTO is being removed and the machine will be re-energized.", priority: "High", riskLevel: "Medium", consequence: "Unexpected startup injures someone not directly involved in maintenance.", proof: "Log of communication." },
                { id: "MFG-LOTO-09", description: "Remove LOTO devices. Each worker must remove their own lock.", priority: "High", riskLevel: "High", consequence: "A lock removed by someone else could lead to startup while a worker is still inside.", proof: "LOTO permit close-out signatures." }
            ]
        },
        {
            title: "Permit to Work (PTW) - Hot Work",
            department: "EHS/Maintenance",
            frequency: "Per Hot Work Task",
            role: "Area In-charge/Safety Officer",
            summary: "A formal documented process to control high-risk activities like welding, grinding, or cutting in non-designated areas.",
            icon: "file-check",
            tasks: [
                { id: "MFG-PTW-01", description: "Identify all combustible materials within a 35-foot (11-meter) radius of the hot work.", priority: "High", riskLevel: "High", consequence: "Fire and explosion.", proof: "Signed PTW form." },
                { id: "MFG-PTW-02", description: "Move combustibles to a safe distance or cover them with fire-retardant blankets.", priority: "High", riskLevel: "High", consequence: "Sparks igniting nearby materials.", proof: "Photo of the prepared work area." },
                { id: "MFG-PTW-03", description: "Ensure a trained fire watch is assigned and present for the duration of the work and for 30 minutes after.", priority: "High", riskLevel: "High", consequence: "Inability to extinguish a small fire before it spreads.", proof: "Fire watch named on the PTW." },
                { id: "MFG-PTW-04", description: "Ensure a fully charged fire extinguisher of the correct type is immediately available.", priority: "High", riskLevel: "High", consequence: "Fire cannot be controlled at inception.", proof: "Visual check documented on PTW." },
                { id: "MFG-PTW-05", description: "Seal all floor and wall openings to prevent sparks from traveling to other areas.", priority: "High", riskLevel: "Medium", consequence: "Fire starting in an unseen area.", proof: "Photo of sealed openings." },
                { id: "MFG-PTW-06", description: "Verify that any sprinkler systems in the area are operational.", priority: "High", riskLevel: "High", consequence: "Primary fire suppression system is not ready.", proof: "Check with engineering department." },
                { id: "MFG-PTW-07", description: "Authorize and issue the permit for a specific time frame only.", priority: "High", riskLevel: "Low", consequence: "Work continues without re-assessment of changing conditions.", proof: "Signed and dated PTW with start/end times." },
                { id: "MFG-PTW-08", description: "Upon completion, the fire watch and permit issuer must inspect the area for smoldering fires before closing the permit.", priority: "High", riskLevel: "High", consequence: "A fire starting after the work crew has left.", proof: "Final sign-off on the PTW." }
            ]
        },
        {
            title: "In-Process Quality Control (IPQC)",
            department: "Quality",
            frequency: "Hourly/Per Batch",
            role: "QC Inspector",
            summary: "Verifies that products meet quality standards at various stages of the production process to prevent large-scale defects.",
            icon: "clipboard-check",
            tasks: [
                { id: "MFG-QC-01", description: "First-Off Approval: Inspect the first part produced after any new setup against all drawing specifications.", priority: "High", riskLevel: "High", consequence: "Entire batch produced with a defect from the start.", proof: "Signed First-Off Inspection Report." },
                { id: "MFG-QC-02", description: "Random Sampling: Collect and inspect a random sample of products from the line at a set frequency (e.g., 5 pieces per hour).", priority: "High", riskLevel: "Medium", consequence: "Process deviations go undetected, leading to large amounts of scrap.", proof: "IPQC log sheet with measurements." },
                { id: "MFG-QC-03", description: "Verify machine parameters (e.g., temperature, pressure, speed) match the approved process sheet.", priority: "High", riskLevel: "Medium", consequence: "Product produced outside of validated process window.", proof: "Parameter check log." },
                { id: "MFG-QC-04", description: "Check calibration status of all measuring instruments and gauges being used.", priority: "High", riskLevel: "High", consequence: "Making decisions based on faulty measurements.", proof: "Valid calibration stickers on all instruments." },
                { id: "MFG-QC-05", description: "If a non-conformance is found, immediately hold the batch and escalate to the Production Supervisor.", priority: "High", riskLevel: "High", consequence: "Defective products are mixed with good products or shipped to customer.", proof: "Hold tag on the material and entry in the NC log." },
                { id: "MFG-QC-06", description: "Document all inspection results, including measurements and pass/fail status.", priority: "High", riskLevel: "Medium", consequence: "No data for traceability, root cause analysis, or process improvement.", proof: "Completed IPQC records." },
                { id: "MFG-QC-07", description: "Verify that operators are following the standard operating procedures (SOPs) for their process.", priority: "Medium", riskLevel: "Medium", consequence: "Process variations due to operator error.", proof: "Operator audit checklist." },
                { id: "MFG-QC-08", description: "Ensure all non-conforming material is clearly identified and moved to a designated quarantine area.", priority: "High", riskLevel: "High", consequence: "Accidental use of defective parts.", proof: "Photo of quarantined material with hold tag." }
            ]
        },
        {
            title: "Chemical Handling & Storage",
            department: "EHS",
            frequency: "Weekly",
            role: "EHS Officer",
            summary: "Ensures safe handling and storage of hazardous chemicals to prevent spills, fires, and employee exposure.",
            icon: "test-tube",
            tasks: [
                { id: "MFG-CHS-01", description: "Verify all chemical containers are correctly labeled with name, hazard symbols, and PPE requirements.", priority: "High", riskLevel: "High", consequence: "Misidentification of chemical leading to incorrect use or dangerous reaction.", proof: "Photo audit of chemical storage area." },
                { id: "MFG-CHS-02", description: "Ensure Safety Data Sheets (SDS/MSDS) are readily available for all chemicals on site.", priority: "High", riskLevel: "High", consequence: "Inability to respond correctly to a spill or exposure incident.", proof: "Index of available SDS files." },
                { id: "MFG-CHS-03", description: "Check that incompatible chemicals (e.g., acids and bases) are stored in separate, designated areas.", priority: "High", riskLevel: "High", consequence: "Violent chemical reaction, fire, or toxic gas release.", proof: "Inspection of chemical storage cabinets/rooms." },
                { id: "MFG-CHS-04", description: "Inspect chemical storage areas for leaks, spills, and proper ventilation.", priority: "High", riskLevel: "Medium", consequence: "Employee exposure to fumes, slip hazards, environmental contamination.", proof: "Weekly storage area inspection log." },
                { id: "MFG-CHS-05", description: "Verify that appropriate spill kits are available, fully stocked, and accessible.", priority: "High", riskLevel: "High", consequence: "A small spill becomes a major incident.", proof: "Spill kit inventory checklist." },
                { id: "MFG-CHS-06", description: "Ensure all employees handling chemicals have received specific training and are using correct PPE.", priority: "High", riskLevel: "High", consequence: "Chemical burns, respiratory damage, long-term health effects.", proof: "Review of training records and direct observation." },
                { id: "MFG-CHS-07", description: "Ensure all chemical waste is accumulated in properly labeled, closed containers for disposal by an authorized vendor.", priority: "High", riskLevel: "High", consequence: "Environmental violations, fines, danger to waste handlers.", proof: "Inspection of hazardous waste accumulation point." }
            ]
        }
    ]
};

    