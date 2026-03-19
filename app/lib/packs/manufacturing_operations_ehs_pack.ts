
import type { PremiumPack } from "@/lib/premium-packs";

export const manufacturing_operations_ehs_pack: PremiumPack = {
    id: 'manufacturing_operations_ehs_pack',
    title: "Manufacturing & EHS Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/62ae53f1-6966-4746-bf80-69ffb4b0d7dc',
    category: "Industrial & Transport",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the industrial safeguard for production uptime and safety.",
    heroHeadline: "Stop Production Shutdowns and Catastrophic Industrial Accidents",
    heroSubheadline: "Track EHS compliance, monitor machine readiness, and protect your workforce—with or without a massive internal safety team.",
    pricingUrgency: "A single industrial accident or one environmental compliance breach costs 1,000x more than this entire system.",
    consultingAnchor: 10000,
    icon: "factory",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Plant Heads", "EHS Officers", "Production Managers", "Maintenance Directors", "Quality Control Leads"],
    sampleItems: [
        { text: "<strong>2-Minute Safety Pulse</strong>: Operators and supervisors update safety and machine status in seconds. Zero-friction reporting.", icon: "timer" },
        { text: "<strong>Hardened LOTO Governance</strong>: Bulletproof protocols for Lock-Out Tag-Out during maintenance to eliminate fatal accidents.", icon: "lock" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show Plant Heads exactly what needs sign-off—from chemical storage to permits.", icon: "shield-check" },
        { text: "<strong>OEE Performance Engine</strong>: Track machine downtime and quality defects to reclaim lost manufacturing throughput.", icon: "trending-up" },
        { text: "<strong>Institutional Memory</strong>: Capture tribal maintenance knowledge so your standard remains constant through staff turnover.", icon: "history" },
        { text: "<strong>Permit-To-Work Framework</strong>: A verifiable system for managing high-risk jobs (Hot work, Height, Confined spaces).", icon: "file-check" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your plant data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "LOTO & Maintenance Safety",
            department: "Maintenance",
            frequency: "Daily",
            role: "Maintenance Supervisor",
            summary: "Critical protocols to prevent accidental energization of machines during service.",
            icon: "lock",
            tasks: [
                { id: "MFG-LOTO-01", description: "Verify all LOTO locks and tags are in place for ongoing maintenance tasks.", priority: "High", riskLevel: "High", consequence: "Accidental startup while a technician is inside the machine (Fatal).", proof: "Visual Audit" },
                { id: "MFG-LOTO-02", description: "Audit Permit-To-Work (PTW) forms for any 'Hot Work' or 'Working at Height' jobs.", priority: "High", riskLevel: "High", consequence: "Uncontrolled ignition sources or fall risks leading to catastrophe.", proof: "Permit Register" },
                { id: "MFG-LOTO-03", description: "Check that all machine guards and safety interlocks are in place and untampered.", priority: "High", riskLevel: "High", consequence: "Worker limb entanglement and severe industrial injury.", proof: "Visual Check" },
                { id: "MFG-LOTO-04", description: "Verify chemical storage segregation (Acid/Base separation).", priority: "High", riskLevel: "High", consequence: "Toxic gas release or explosive chemical reaction.", proof: "Storage Audit" },
                { id: "MFG-LOTO-05", description: "Inspect all PPE dispensers and ensure earplugs and safety glasses are stocked.", priority: "Medium", riskLevel: "Low", consequence: "Chronic occupational health issues and regulatory fines.", proof: "Stock Check" },
                { id: "MFG-LOTO-06", description: "Test emergency eyewash stations and safety showers.", priority: "High", riskLevel: "High", consequence: "Inability to provide critical decontamination after a chemical splash.", proof: "Monthly Test Log" },
                { id: "MFG-LOTO-07", description: "Conduct shift-handover briefing for safety issues.", priority: "High", riskLevel: "Medium", consequence: "Lost communication of ongoing technical hazards between teams.", proof: "Briefing Log" },
                { id: "MFG-LOTO-08", description: "Check status of air compressor and pressure vessels.", priority: "High", riskLevel: "High", consequence: "Pressure vessel failure and catastrophic shrapnel hazard.", proof: "Pressure Log" },
                { id: "MFG-LOTO-09", description: "Verify status of waste management and hazardous disposal.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental non-compliance and massive regulatory penalties.", proof: "Disposal Note" },
                { id: "MFG-LOTO-10", description: "Final manager walkthrough of the production floor.", priority: "High", riskLevel: "High", consequence: "Gaps in discipline leading to systemic operational decay.", proof: "Manager Initials" }
            ]
        }
    ]
};
