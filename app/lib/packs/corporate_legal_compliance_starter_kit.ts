
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
        },
        {
            title: "Internal Compliance Audit",
            department: "Compliance/Audit",
            frequency: "Quarterly",
            role: "Internal Auditor",
            summary: "A recurring audit to proactively find and fix compliance gaps.",
            icon: "search",
            tasks: [
                { id: "CLC-ICA-01", description: "Develop a quarterly audit plan covering key compliance areas (e.g., HR, Finance, IT).", priority: "High", riskLevel: "Medium", consequence: "Audit efforts are unfocused and may miss critical risks.", proof: "Approved audit plan." },
                { id: "CLC-ICA-02", description: "Conduct audit fieldwork, including document review and staff interviews.", priority: "High", riskLevel: "Low", consequence: "Superficial audit that doesn't uncover real issues.", proof: "Auditor's working papers." },
                { id: "CLC-ICA-03", description: "Document all findings, observations, and non-conformances.", priority: "High", riskLevel: "Medium", consequence: "Lack of a clear record of issues found.", proof: "Draft audit report." },
                { id: "CLC-ICA-04", description: "Hold a closing meeting with department heads to discuss findings.", priority: "High", riskLevel: "Low", consequence: "Departments are surprised by the audit report; findings are disputed.", proof: "Minutes of closing meeting." },
                { id: "CLC-ICA-05", description: "Issue a final audit report with recommendations.", priority: "High", riskLevel: "Low", consequence: "No formal record of the audit outcome.", proof: "Final audit report." },
                { id: "CLC-ICA-06", description: "Assign ownership for each audit finding and establish a deadline for remediation.", priority: "High", riskLevel: "High", consequence: "Findings are not actioned and the same issues persist.", proof: "Corrective Action Plan (CAPA) tracker." },
                { id: "CLC-ICA-07", description: "Track all corrective actions to completion.", priority: "High", riskLevel: "High", consequence: "Lack of follow-up means issues are never truly fixed.", proof: "Updated CAPA tracker with 'Closed' status." },
                { id: "CLC-ICA-08", description: "Present a summary of audit findings to senior management.", priority: "High", riskLevel: "Medium", consequence: "Leadership is unaware of the company's compliance posture.", proof: "Presentation deck." }
            ]
        },
        {
            title: "Board Meeting Preparation",
            department: "Secretarial",
            frequency: "Per Meeting",
            role: "Company Secretary",
            summary: "Ensures board meetings are well-organized, productive, and compliant.",
            icon: "briefcase-business",
            tasks: [
                { id: "CLC-BMP-01", description: "Set the meeting agenda in consultation with the Chairman and CEO.", priority: "High", riskLevel: "Low", consequence: "Meeting lacks focus and direction.", proof: "Final agenda." },
                { id: "CLC-BMP-02", description: "Send a formal notice of the meeting to all directors within the statutory time limit.", priority: "High", riskLevel: "High", consequence: "Meeting is not validly convened, decisions can be challenged.", proof: "Copy of notice and proof of dispatch." },
                { id: "CLC-BMP-03", description: "Compile and circulate the board pack (agenda, previous minutes, reports) at least one week in advance.", priority: "High", riskLevel: "Medium", consequence: "Directors are unprepared, leading to unproductive discussions.", proof: "Email sending the board pack." },
                { id: "CLC-BMP-04", description: "Ensure the meeting is quorate.", priority: "High", riskLevel: "High", consequence: "Decisions passed without a quorum are invalid.", proof: "Attendance sheet." },
                { id: "CLC-BMP-05", description: "Take detailed, accurate minutes of the meeting.", priority: "High", riskLevel: "High", consequence: "No legal record of the board's decisions.", proof: "Draft minutes." },
                { id: "CLC-BMP-06", description: "Circulate draft minutes for comments and get them approved by the Chairman.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate minutes become the official record.", proof: "Approved final minutes." },
                { id: "CLC-BMP-07", description: "File any required forms with the ROC based on board resolutions.", priority: "High", riskLevel: "High", consequence: "Statutory non-compliance.", proof: "ROC filing receipts." },
                { id: "CLC-BMP-08", description: "Maintain the statutory registers (e.g., Register of Directors).", priority: "High", riskLevel: "High", consequence: "Non-compliance with the Companies Act.", proof: "Updated statutory registers." }
            ]
        },
        {
            title: "Whistleblower & Investigation Process",
            department: "Ethics/HR",
            frequency: "Per Complaint",
            role: "Ethics Officer",
            summary: "A fair and confidential process for handling employee complaints of misconduct.",
            icon: "siren",
            tasks: [
                { id: "CLC-WIP-01", description: "Establish and publicize multiple, confidential channels for employees to raise concerns.", priority: "High", riskLevel: "High", consequence: "Employees are afraid to report wrongdoing.", proof: "Whistleblower policy document." },
                { id: "CLC-WIP-02", description: "Acknowledge receipt of a complaint within 48 hours.", priority: "High", riskLevel: "Medium", consequence: "Complainant feels ignored, may go to external authorities.", proof: "Acknowledgement email." },
                { id: "CLC-WIP-03", description: "Form an investigation committee with impartial members.", priority: "High", riskLevel: "High", consequence: "Biased investigation, lack of trust in the process.", proof: "Committee formation memo." },
                { id: "CLC-WIP-04", description: "Conduct a thorough, documented investigation, including interviews and evidence review.", priority: "High", riskLevel: "High", consequence: "Inconclusive or unfair outcome.", proof: "Investigation file." },
                { id: "CLC-WIP-05", description: "Maintain strict confidentiality throughout the investigation.", priority: "High", riskLevel: "High", consequence: "Reputational damage to involved parties, risk of retaliation.", proof: "Confidentiality undertakings." },
                { id: "CLC-WIP-06", description: "Present investigation findings and recommendations to senior management.", priority: "High", riskLevel: "High", consequence: "Management is not informed to take appropriate action.", proof: "Investigation report." },
                { id: "CLC-WIP-07", description: "Implement disciplinary action if the complaint is substantiated.", priority: "High", riskLevel: "High", consequence: "Failure to act on misconduct creates a culture of impunity.", proof: "Disciplinary action letter." },
                { id: "CLC-WIP-08", description: "Protect the whistleblower from any form of retaliation.", priority: "High", riskLevel: "High", consequence: "Retaliation is illegal and destroys trust in the system.", proof: "Non-retaliation policy." }
            ]
        },
        {
            title: "Data Privacy & GDPR/DPDP Compliance",
            department: "IT/Legal",
            frequency: "Quarterly",
            role: "Data Protection Officer (DPO)",
            summary: "Ensures the company is compliant with data privacy laws like GDPR and India's DPDP Act.",
            icon: "shield-check",
            tasks: [
                { id: "CLC-DP-01", description: "Maintain a data map of all personal data processed by the company.", priority: "High", riskLevel: "High", consequence: "You cannot protect data you don't know you have.", proof: "Data map document." },
                { id: "CLC-DP-02", description: "Review and update the company's privacy policy annually.", priority: "High", riskLevel: "Medium", consequence: "Outdated policy is non-compliant.", proof: "Updated privacy policy." },
                { id: "CLC-DP-03", description: "Have a clear process for handling Data Subject Access Requests (DSARs).", priority: "High", riskLevel: "High", consequence: "Failure to respond in time is a legal violation.", proof: "DSAR handling SOP and log." },
                { id: "CLC-DP-04", description: "Conduct a Data Protection Impact Assessment (DPIA) for any new high-risk processing activity.", priority: "High", riskLevel: "High", consequence: "Legal requirement under GDPR for new technologies or large-scale data processing.", proof: "DPIA reports." },
                { id: "CLC-DP-05", description: "Ensure all third-party vendors handling personal data have a signed Data Processing Agreement (DPA).", priority: "High", riskLevel: "High", consequence: "Company remains liable for data breaches caused by its vendors.", proof: "File of signed DPAs." },
                { id: "CLC-DP-06", description: "Provide data privacy training to all employees.", priority: "High", riskLevel: "Medium", consequence: "Human error is a leading cause of data breaches.", proof: "Training records." },
                { id: "CLC-DP-07", description: "Implement technical measures like encryption and access control to protect data.", priority: "High", riskLevel: "High", consequence: "Failure to secure data leads to breaches.", proof: "IT security policy." },
                { id: "CLC-DP-08", description: "Have a data breach response plan and test it annually.", priority: "High", riskLevel: "High", consequence: "A chaotic response to a breach increases fines and reputational damage.", proof: "Breach response drill report." }
            ]
        },
        {
            title: "Anti-Bribery & Corruption (ABC) Policy",
            department: "Ethics/Compliance",
            frequency: "Annually",
            role: "Compliance Officer",
            summary: "A program to prevent bribery and corruption.",
            icon: "hand-coins",
            tasks: [
                { id: "CLC-ABC-01", description: "Implement and communicate a clear anti-bribery and corruption policy.", priority: "High", riskLevel: "High", consequence: "Employees may not know what is considered bribery.", proof: "ABC Policy document." },
                { id: "CLC-ABC-02", description: "Conduct a risk assessment to identify areas of high bribery risk (e.g., government interactions).", priority: "High", riskLevel: "High", consequence: "Controls are not focused on the highest risk areas.", proof: "ABC Risk Assessment." },
                { id: "CLC-ABC-03", description: "Train all relevant employees on the ABC policy, especially those in sales and procurement.", priority: "High", riskLevel: "High", consequence: "Untrained employees may inadvertently break the law.", proof: "Training records." },
                { id: "CLC-ABC-04", description: "Implement a gift and hospitality register to track all items given or received.", priority: "High", riskLevel: "Medium", consequence: "Gifts can be a disguised form of bribery.", proof: "Gift register." },
                { id: "CLC-ABC-05", description: "Conduct due diligence on all third-party agents and distributors.", priority: "High", riskLevel: "High", consequence: "The company can be held liable for bribes paid by its agents.", proof: "Due diligence reports." },
                { id: "CLC-ABC-06", description: "Ensure financial controls are in place to prevent off-book payments.", priority: "High", riskLevel: "High", consequence: "Slush funds can be used for bribes.", proof: "Financial control audit." },
                { id: "CLC-ABC-07", description: "Audit compliance with the ABC policy.", priority: "High", riskLevel: "High", consequence: "Ensures the policy is actually being followed.", proof: "ABC Audit Report." },
                { id: "CLC-ABC-08", description: "Encourage reporting of suspected bribery and protect whistleblowers.", priority: "High", riskLevel: "High", consequence: "Fear of retaliation prevents reporting.", proof: "Whistleblower policy." }
            ]
        }
    ]
};

    