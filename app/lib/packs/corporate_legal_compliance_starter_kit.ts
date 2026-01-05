
import type { PremiumPack } from "@/lib/premium-packs";

export const corporate_legal_compliance_starter_kit: PremiumPack = {
    id: 'corporate_legal_compliance_starter_kit',
    title: "Corporate Legal & Compliance Starter Kit",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/721ef593-433a-4d89-b72b-7d4aac27363f',
    category: "Corporate & Tech",
    description: "An essential toolkit for founders and managers to embed basic legal and compliance checks into core business operations, reducing risk without needing a law degree.",
    icon: "file-lock",
    whoIsItFor: ["Founders & CEOs", "HR Managers", "Operations Heads", "Non-lawyer Managers", "Directors"],
    sampleItems: [
        { text: "Never miss a deadline with a master statutory filing calendar and automated reminders.", icon: "calendar-days" },
        { text: "Ensure company policies are consistently enforced with a robust management and employee acknowledgement system.", icon: "user-check" },
        { text: "Minimize legal risk with a structured contract lifecycle management process and clause checklist.", icon: "file-check" },
        { text: "Proactively identify and fix compliance gaps with an internal audit and remediation (CAPA) workflow.", icon: "bug" },
        { text: "Foster a safe and ethical workplace with a formal whistleblowing and investigation process.", icon: "siren" },
        { text: "Improve corporate governance with a professional system for board meeting preparation and minute taking.", icon: "briefcase-business" }
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
                { id: "CLC-SFC-01", description: "Update calendar with all ROC filing deadlines for the quarter.", priority: "High", riskLevel: "High", consequence: "Penalties, company strike-off.", proof: "Updated calendar file." },
                { id: "CLC-SFC-02", description: "Update calendar with all Income Tax filing deadlines (TDS, Advance Tax, etc.).", priority: "High", riskLevel: "High", consequence: "Interest and penalties.", proof: "Updated calendar file." },
                { id: "CLC-SFC-03", description: "Update calendar with all GST filing deadlines (GSTR-1, 3B, etc.).", priority: "High", riskLevel: "High", consequence: "Penalties, loss of input tax credit.", proof: "Updated calendar file." },
                { id: "CLC-SFC-04", description: "Update calendar with all Labour Law filing deadlines (PF, ESI, PT).", priority: "High", riskLevel: "Medium", consequence: "Penalties, employee disputes.", proof: "Updated calendar file." },
                { id: "CLC-SFC-05", description: "Assign responsibility for each filing to a specific person.", priority: "High", riskLevel: "Low", consequence: "Lack of ownership, missed deadlines.", proof: "Updated calendar file with owner names." },
                { id: "CLC-SFC-06", description: "Send reminders 15 days and 3 days before each deadline.", priority: "Medium", riskLevel: "Low", consequence: "Deadlines forgotten.", proof: "Copies of reminder emails." },
                { id: "CLC-SFC-07", description: "Track and confirm completion of each filing.", priority: "High", riskLevel: "Medium", consequence: "Assuming a filing is done when it is not.", proof: "Filing acknowledgement receipts." },
                { id: "CLC-SFC-08", description: "Conduct a quarterly review of the calendar for any changes in laws or dates.", priority: "Medium", riskLevel: "Medium", consequence: "Using an outdated compliance calendar.", proof: "Minutes of quarterly review meeting." }
            ]
        },
        {
            title: "Policy Management Lifecycle",
            department: "HR/Compliance",
            frequency: "Per Policy",
            role: "HR Manager",
            summary: "A framework for drafting, approving, and rolling out company policies.",
            icon: "file-text",
            tasks: [
                { id: "CLC-PML-01", description: "Draft new policy with clear objectives, scope, and procedures.", priority: "High", riskLevel: "Medium", consequence: "Unclear policy causes confusion.", proof: "Draft policy document." },
                { id: "CLC-PML-02", description: "Review draft policy with legal and management for approval.", priority: "High", riskLevel: "High", consequence: "Policy has legal flaws or is operationally unfeasible.", proof: "Email approvals from department heads." },
                { id: "CLC-PML-03", description: "Communicate the new/updated policy to all employees via email and company portal.", priority: "High", riskLevel: "Medium", consequence: "Employees are unaware of new rules.", proof: "Copy of announcement email." },
                { id: "CLC-PML-04", description: "Obtain digital or physical acknowledgement from every employee.", priority: "High", riskLevel: "High", consequence: "Inability to prove an employee was aware of the policy, legal risk.", proof: "Signed acknowledgement forms or digital log." },
                { id: "CLC-PML-05", description: "Conduct training sessions for significant policy changes.", priority: "Medium", riskLevel: "Medium", consequence: "Employees do not understand the nuances of the policy.", proof: "Training attendance sheets." },
                { id: "CLC-PML-06", description: "Schedule an annual review for every policy to ensure it is still relevant and compliant.", priority: "High", riskLevel: "Medium", consequence: "Outdated policies expose the company to new risks.", proof: "Policy review schedule." }
            ]
        },
        {
            title: "Contract Lifecycle Management",
            department: "Legal",
            frequency: "Per Contract",
            role: "Legal Counsel",
            summary: "Manages a contract from drafting to renewal or termination, minimizing risk.",
            icon: "file-check",
            tasks: [
                { id: "CLC-CLM-01", description: "Draft contract using approved company templates.", priority: "High", riskLevel: "High", consequence: "Using unvetted clauses, legal exposure.", proof: "Draft contract." },
                { id: "CLC-CLM-02", description: "Review contract with business owner for commercial terms.", priority: "High", riskLevel: "Medium", consequence: "Commercial terms do not match business needs.", proof: "Email approval from business owner." },
                { id: "CLC-CLM-03", description: "Negotiate terms with the other party, keeping a log of all changes.", priority: "High", riskLevel: "High", consequence: "Unfavorable terms, future disputes.", proof: "Version history of the contract document." },
                { id: "CLC-CLM-04", description: "Obtain final approvals from all required internal stakeholders before signing.", priority: "High", riskLevel: "High", consequence: "Unauthorized person agrees to a contract.", proof: "Final approval email chain." },
                { id: "CLC-CLM-05", description: "Execute the contract (signing by authorized signatories).", priority: "High", riskLevel: "Low", consequence: "Contract is not legally binding.", proof: "Scanned copy of the fully signed contract." },
                { id: "CLC-CLM-06", description: "Store the executed contract in a central, secure repository.", priority: "High", riskLevel: "Medium", consequence: "Inability to find contract when needed, lost documents.", proof: "Entry in contract management system." },
                { id: "CLC-CLM-07", description: "Abstract key dates (renewal, termination notice) and obligations into a tracking system.", priority: "High", riskLevel: "High", consequence: "Accidental auto-renewal of an unwanted contract, missed obligations.", proof: "Screenshot from tracking system." },
                { id: "CLC-CLM-08", description: "Review contract performance before renewal.", priority: "Medium", riskLevel: "Medium", consequence: "Renewing a bad contract.", proof: "Performance review notes." }
            ]
        }
    ]
};

  