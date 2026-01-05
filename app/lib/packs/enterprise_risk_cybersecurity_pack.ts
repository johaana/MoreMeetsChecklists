
import type { PremiumPack } from "@/lib/premium-packs";

export const enterprise_risk_cybersecurity_pack: PremiumPack = {
    id: 'enterprise_risk_cybersecurity_pack',
    title: "Enterprise Risk & Cybersecurity Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/6418c3d7-2101-4433-a337-2d4314c4059a',
    category: "Corporate & Tech",
    description: "An advanced toolkit for CISOs and compliance officers to manage modern enterprise risks, from AI governance and data privacy to cloud security and incident response.",
    icon: "shield-check",
    whoIsItFor: ["CISOs", "CTOs", "Data Protection Officers (DPOs)", "Heads of Risk & Compliance", "IT Directors"],
    sampleItems: [
        { text: "Enforce the principle of least privilege with quarterly user access reviews.", icon: "key-round" },
        { text: "Stay ahead of threats with a structured workflow for vulnerability scanning and patch management.", icon: "bug" },
        { text: "Build resilience with proven playbooks for Business Continuity and Disaster Recovery (BC/DR) drills.", icon: "database-zap" },
        { text: "Master crisis management with step-by-step incident response and digital forensics playbooks.", icon: "siren" },
        { text: "Prevent costly data leaks by continuously monitoring and correcting your cloud security posture (CSPM).", icon: "cloud" },
        { text: "De-risk your supply chain with a formal security assessment process for all third-party vendors.", icon: "handshake" }
    ],
    checklists: [
        {
            title: 'User Access Review',
            department: 'IT Security',
            frequency: 'Quarterly',
            role: 'IT Security Manager',
            summary: 'A quarterly review to enforce the principle of least privilege and remove unnecessary access rights.',
            icon: 'users',
            tasks: [
                {id: 'ERC-UAR-01', description: 'Generate a list of all active users with access to critical systems.', priority: 'High', riskLevel: 'High', consequence: 'Unauthorized access goes undetected.', proof: 'User access report from Active Directory/Okta.'},
                {id: 'ERC-UAR-02', description: 'Send access lists to respective department managers for review and approval.', priority: 'High', riskLevel: 'Medium', consequence: 'Managers are unaware of their team\'s access levels.', proof: 'Email sent to managers with access lists.'},
                {id: 'ERC-UAR-03', description: 'Verify that all user access is justified by current job role.', priority: 'High', riskLevel: 'High', consequence: 'Ex-employees or transferred staff retain sensitive access.', proof: 'Manager-signed access review forms.'},
                {id: 'ERC-UAR-04', description: 'Review and validate all privileged/administrator accounts.', priority: 'High', riskLevel: 'High', consequence: 'Compromise of an admin account can be catastrophic.', proof: 'Privileged access review report.'},
                {id: 'ERC-UAR-05', description: 'Revoke all unnecessary or unapproved access within 48 hours.', priority: 'High', riskLevel: 'High', consequence: 'Known unnecessary access is not removed promptly.', proof: 'Service desk tickets showing access revocation.'},
                {id: 'ERC-UAR-06', description: 'Audit third-party vendor access to internal systems.', priority: 'High', riskLevel: 'High', consequence: 'A vendor breach becomes an internal breach.', proof: 'Vendor access review checklist.'},
                {id: 'ERC-UAR-07', description: 'Ensure all terminated employee accounts were disabled on their last day of employment.', priority: 'High', riskLevel: 'High', consequence: 'Disgruntled ex-employees retain access.', proof: 'Cross-reference termination list with HR.'},
                {id: 'ERC-UAR-08', description: 'Document the completion of the access review cycle.', priority: 'Medium', riskLevel: 'Low', consequence: 'No audit trail for compliance.', proof: 'Signed summary report of the access review.'}
            ]
        },
        {
            title: 'Vulnerability & Patch Management',
            department: 'IT Operations',
            frequency: 'Weekly',
            role: 'System Administrator',
            summary: 'A structured workflow to identify, prioritize, and remediate security vulnerabilities in systems and software.',
            icon: 'bug',
            tasks: [
                {id: 'ERC-VPM-01', description: 'Run authenticated vulnerability scans on all servers and workstations.', priority: 'High', riskLevel: 'High', consequence: 'Unknown vulnerabilities leave systems exposed to attack.', proof: 'Vulnerability scan report (e.g., Nessus, Qualys).'},
                {id: 'ERC-VPM-02', description: 'Review and prioritize all new "Critical" and "High" severity vulnerabilities.', priority: 'High', riskLevel: 'High', consequence: 'Focusing on low-risk issues while critical ones remain open.', proof: 'Prioritized vulnerability list.'},
                {id: 'ERC-VPM-03', description: 'Create change requests/tickets for patching all critical vulnerabilities.', priority: 'High', riskLevel: 'Medium', consequence: 'No formal tracking of remediation work.', proof: 'Service desk tickets for patching.'},
                {id: 'ERC-VPM-04', description: 'Test patches in a non-production environment before deploying to production.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Patches breaking critical applications.', proof: 'Patch test results document.'},
                {id: 'ERC-VPM-05', description: 'Deploy patches for critical vulnerabilities within the defined SLA (e.g., 14 days).', priority: 'High', riskLevel: 'High', consequence: 'Leaving a known critical entry point open for too long.', proof: 'Patch deployment logs.'},
                {id: 'ERC-VPM-06', description: 'Run a follow-up scan to verify that patches were successfully applied.', priority: 'High', riskLevel: 'Medium', consequence: 'Assuming a patch was successful when it failed.', proof: 'Post-patch verification scan report.'},
                {id: 'ERC-VPM-07', description: 'Document any exceptions where a patch cannot be applied and implement mitigating controls.', priority: 'High', riskLevel: 'High', consequence: 'Unpatched legacy systems without any other protection.', proof: 'Risk acceptance form signed by CISO.'},
                {id: 'ERC-VPM-08', description: 'Report on patching status and vulnerability trends to management.', priority: 'Medium', riskLevel: 'Low', consequence: 'Lack of visibility into the security posture.', proof: 'Monthly patch compliance report.'}
            ]
        }
    ]
};

  