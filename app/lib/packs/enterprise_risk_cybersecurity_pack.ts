
import type { PremiumPack } from "@/lib/premium-packs";

export const enterprise_risk_cybersecurity_pack: PremiumPack = {
    id: 'enterprise_risk_cybersecurity_pack',
    title: "Cybersecurity & Risk System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/6418c3d7-2101-4433-a337-2d4314c4059a',
    category: "Corporate & Tech",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the professional plug for entry-point leaks and ransomware payouts.",
    heroHeadline: "Stop $1M Ransomware Payouts and Data Governance Collapses",
    heroSubheadline: "Track patch management, monitor privileged access, and keep your infrastructure hardened—with or without a massive internal SOC.",
    pricingUrgency: "A single data breach or one unpatched critical vulnerability costs 1,000x more than this entire system.",
    consultingAnchor: 12000,
    icon: "shield-check",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["CISOs", "CTOs", "IT Directors", "Data Protection Officers (DPOs)", "Heads of Risk & Internal Audit"],
    sampleItems: [
        { text: "<strong>2-Minute Security Pulse</strong>: IT teams update patch and vulnerability status in seconds. Real-time defensive visibility.", icon: "timer" },
        { text: "<strong>Hardened Access Control</strong>: Bulletproof protocols for quarterly user reviews, MFA enforcement, and least-privilege audits.", icon: "key-round" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show Security Leads exactly what needs sign-off—from firewall rules to backups.", icon: "shield-check" },
        { text: "<strong>Resilience Engine</strong>: Battle-tested playbooks for Incident Response and Disaster Recovery to contain the 'Blast Radius'.", icon: "database-zap" },
        { text: "<strong>Institutional Memory</strong>: Capture cybersecurity 'know-how' so that your defensive standard remains constant through staff turnover.", icon: "history" },
        { text: "<strong>Third-Party Governance</strong>: A structured framework for vendor security assessments to de-risk your digital supply chain.", icon: "handshake" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your risk data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Access Review SOP",
            department: "IT Security",
            frequency: "Quarterly",
            role: "IT Security Analyst",
            summary: "A quarterly review to enforce the principle of least privilege and remove unnecessary access rights.",
            icon: "users",
            tasks: [
                { id: "AR-01", description: "Generate a list of all users with privileged access.", priority: "High", riskLevel: "High", consequence: "Unauthorized access goes undetected, leading to privilege creep.", proof: "User Access Report" },
                { id: "AR-02", description: "Manager of each privileged user to re-approve access quarterly.", priority: "High", riskLevel: "High", consequence: "IT may not know if access is still required, creating a significant security gap.", proof: "Approval Emails/Tickets" },
                { id: "AR-03", description: "Remove access for any stale accounts (e.g., inactive for 90 days).", priority: "High", riskLevel: "High", consequence: "Dormant accounts are primary targets for hackers to gain a foothold.", proof: "Deactivation Log" },
                { id: "AR-04", description: "Verify that Multi-Factor Authentication (MFA) is enforced for all admin accounts.", priority: "High", riskLevel: "High", consequence: "Compromised admin password without MFA can lead to a full network takeover.", proof: "MFA Configuration Report" },
                { id: "AR-05", description: "Implement Just-In-Time (JIT) access for critical administrative tasks.", priority: "Medium", riskLevel: "High", consequence: "Admin accounts have standing privileges, increasing the attack window.", proof: "JIT System Logs" },
                { id: "AR-06", description: "Review third-party vendor access to your systems.", priority: "High", riskLevel: "High", consequence: "Vendors are a common vector for breaches; their access must be strictly controlled.", proof: "Vendor Access Review" },
                { id: "AR-07", description: "Ensure the principle of least privilege is applied to all accounts.", priority: "High", riskLevel: "High", consequence: "Excessive permissions increase the blast radius of a compromised account.", proof: "RBAC Audit" },
                { id: "AR-08", description: "Audit changes to user access rights.", priority: "High", riskLevel: "High", consequence: "Unauthorized changes to permissions can indicate an active breach.", proof: "Access Change Log" },
                { id: "AR-09", description: "Train staff on the importance of access control and password hygiene.", priority: "Medium", riskLevel: "Medium", consequence: "Users sharing passwords or requesting unnecessary access.", proof: "Training Records" },
                { id: "AR-10", description: "Log all access attempts, both successful and failed.", priority: "High", riskLevel: "High", consequence: "Failed login attempts can be an early indicator of brute-force attacks.", proof: "Access Logs" }
            ]
        }
    ]
};
