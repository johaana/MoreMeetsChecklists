
import type { PremiumPack } from "@/lib/premium-packs";

export const food_manufacturing_ops: PremiumPack = {
    id: 'food_manufacturing_ops',
    title: "Food Manufacturing Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/4579c50c-e2f9-4629-9e8c-572eb880940d',
    category: "Specialized Production",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the definitive safeguard for mass recalls and brand collapse.",
    heroHeadline: "Prevent Mass Recalls and Total Brand Collapse",
    heroSubheadline: "Track FSSAI/HACCP protocols, monitor production integrity, and eliminate audit anxiety across your entire facility.",
    pricingUrgency: "A single contaminated batch or a nationwide recall costs 1,000x more than this entire system.",
    consultingAnchor: 15000,
    icon: "factory",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "destructive",
    bestseller: true,
    whoIsItFor: ["Food Factory GMs", "Heads of Quality (QA/QC)", "Production Managers", "Food Safety Officers", "Compliance Directors"],
    sampleItems: [
        { text: "<strong>2-Minute Quality Pulse</strong>: Your production and QC teams update control points in seconds. 100% auditable workflow.", icon: "timer" },
        { text: "<strong>HACCP/FSSAI Engine</strong>: Bulletproof protocols for Critical Control Points (CCPs) to ensure zero-miss safety compliance.", icon: "shield-check" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show QA Leads exactly what needs sign-off—from sanitation to allergens.", icon: "target" },
        { text: "<strong>Traceability Matrix</strong>: A 'one step forward, one step back' system to execute a rapid mock recall in under 2 hours.", icon: "search" },
        { text: "<strong>Institutional Memory</strong>: Capture expert food safety knowledge so that your standard never drifts with staff turnover.", icon: "history" },
        { text: "<strong>Zoning Governance</strong>: Strict protocols for raw vs. cooked areas to stop life-threatening cross-contamination.", icon: "shield-alert" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your production data and the control system forever.", icon: "lock" }
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
            title: "CCP & HACCP Implementation",
            department: "Quality",
            frequency: "Daily",
            role: "QA Manager",
            summary: "Monitoring of Critical Control Points to ensure food safety.",
            icon: "shield-check",
            tasks: [
                { id: "FOOD-CCP-01", description: "Log temperatures of all cooking and cooling zones against the critical limits.", priority: "High", riskLevel: "High", consequence: "Bacterial survival and mass foodborne illness outbreak.", proof: "Temperature Log" },
                { id: "FOOD-CCP-02", description: "Verify metal detector and X-ray functionality using test pieces.", priority: "High", riskLevel: "High", consequence: "Physical contaminants (metal/glass) reaching the consumer.", proof: "Calibration Log" },
                { id: "FOOD-CCP-03", description: "Conduct ATP swab tests or visual audits of cleaned equipment before startup.", priority: "High", riskLevel: "High", consequence: "Cross-contamination from previous production batches.", proof: "ATP/Visual Log" },
                { id: "FOOD-CCP-04", description: "Audit personnel hygiene: hairnets, masks, and glove compliance.", priority: "High", riskLevel: "Medium", consequence: "Introduction of human pathogens into the production chain.", proof: "Staff Audit" },
                { id: "FOOD-CCP-05", description: "Verify allergen labeling matches the current production batch.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reactions and catastrophic recall.", proof: "Label Audit" },
                { id: "FOOD-CCP-06", description: "Log sanitizer concentration (ppm) at all handwashing and footbath stations.", priority: "High", riskLevel: "Medium", consequence: "Ineffective biosecurity barriers allowing pathogens to enter.", proof: "Titration Log" },
                { id: "FOOD-CCP-07", description: "Check storage segregation: raw ingredients vs. finished goods.", priority: "High", riskLevel: "High", consequence: "Cross-contamination of ready-to-eat products.", proof: "Storage Walkthrough" },
                { id: "FOOD-CCP-08", description: "Verify calibration of weighing scales.", priority: "Medium", riskLevel: "Low", consequence: "Legal Metrology violations and incorrect recipe yields.", proof: "Calibration Check" },
                { id: "FOOD-CCP-09", description: "Audit pest control bait stations and insect traps.", priority: "High", riskLevel: "High", consequence: "Infestation leading to health department shutdown.", proof: "Weekly Log" },
                { id: "FOOD-CCP-10", description: "Final batch record review and sign-off for release.", priority: "High", riskLevel: "High", consequence: "Shipping unsafe product without verifying quality data.", proof: "Signed Batch Record" }
            ]
        }
    ]
};
