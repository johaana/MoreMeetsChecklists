
import type { PremiumPack } from "@/lib/premium-packs";

export const corporate_legal_compliance_starter_kit: PremiumPack = {
    id: 'corporate_legal_compliance_starter_kit',
    title: "Corporate Governance System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/721ef593-433a-4d89-b72b-7d4aac27363f',
    category: "Corporate & Tech",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the professional plug for boardroom liability and statutory leaks.",
    heroHeadline: "Stop Boardroom Liability and Massive Statutory Filing Failures",
    heroSubheadline: "Track mandatory filings, monitor policy compliance, and keep your governance audit-ready—even when your legal counsel is offline.",
    pricingUrgency: "A single missed regulatory deadline or one governance lapse costs 100x more than this entire system.",
    consultingAnchor: 8000,
    icon: "file-lock",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Founders & CEOs", "COOs", "HR Directors", "Legal Compliance Officers", "Company Secretaries"],
    sampleItems: [
        { text: "<strong>2-Minute Governance Pulse</strong>: Department heads update compliance status in seconds. Zero-friction reporting.", icon: "timer" },
        { text: "<strong>Statutory Command Manual</strong>: Bulletproof tracking for ROC, Tax, and Labor Law deadlines to eliminate penalty risk.", icon: "calendar-days" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show Directors exactly what needs sign-off—from board minutes to filings.", icon: "shield-check" },
        { text: "<strong>Contract Lifecycle Governance</strong>: Professional tracking for renewals, terminations, and data-destruction obligations.", icon: "file-check" },
        { text: "<strong>Institutional Memory</strong>: Capture governance 'know-how' so that your compliance standard stays with the company, not the person.", icon: "history" },
        { text: "<strong>Policy Enforcement Engine</strong>: A verifiable system for ensuring policies are acknowledged and enforced across all departments.", icon: "user-check" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your governance data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Statutory Filing Calendar",
            department: "Legal/Compliance",
            frequency: "Monthly",
            role: "Compliance Officer",
            summary: "Tracks all mandatory government filings to ensure deadlines are never missed.",
            icon: "calendar-days",
            tasks: [
                { id: "CLC-SFC-01", description: "Update calendar with all ROC filing deadlines for the quarter (e.g., DPT-3, MSME-1).", priority: "High", riskLevel: "High", consequence: "Penalties, company strike-off.", proof: "Updated calendar file." },
                { id: "CLC-SFC-02", description: "Update calendar with all Income Tax filing deadlines (TDS, Advance Tax, ITR).", priority: "High", riskLevel: "High", consequence: "Interest and penalties.", proof: "Updated calendar file." },
                { id: "CLC-SFC-03", description: "Update calendar with all GST filing deadlines (GSTR-1, 3B, Annual Return).", priority: "High", riskLevel: "High", consequence: "Penalties, loss of input tax credit.", proof: "Updated calendar file." },
                { id: "CLC-SFC-04", description: "Update calendar with all Labour Law filing deadlines (PF, ESI, PT).", priority: "High", riskLevel: "Medium", consequence: "Penalties, employee disputes.", proof: "Updated calendar file." },
                { id: "CLC-SFC-05", description: "Assign responsibility for each filing to a specific person.", priority: "High", riskLevel: "Low", consequence: "Lack of ownership, missed deadlines.", proof: "Updated calendar file with owner names." },
                { id: "CLC-SFC-06", description: "Send automated reminders 15 days and 3 days before each deadline.", priority: "Medium", riskLevel: "Low", consequence: "Deadlines forgotten.", proof: "Copies of reminder emails." },
                { id: "CLC-SFC-07", description: "Track and confirm completion of each filing by uploading the challan/receipt.", priority: "High", riskLevel: "Medium", consequence: "Assuming a filing is done when it is not.", proof: "Filing acknowledgement receipts." },
                { id: "CLC-SFC-08", description: "Conduct a quarterly review of the calendar for any changes in laws or dates.", priority: "Medium", riskLevel: "Medium", consequence: "Using an outdated compliance calendar.", proof: "Minutes of quarterly review meeting." },
                { id: "CLC-SFC-09", description: "Maintain a central repository of all filed documents and acknowledgements.", priority: "High", riskLevel: "Medium", consequence: "Inability to produce proof of filing during an audit.", proof: "Link to central repository/folder." },
                { id: "CLC-SFC-10", description: "Generate a monthly compliance dashboard for management review.", priority: "Medium", riskLevel: "Low", consequence: "Management has no visibility into compliance status.", proof: "Monthly compliance report." }
            ]
        }
    ]
};
