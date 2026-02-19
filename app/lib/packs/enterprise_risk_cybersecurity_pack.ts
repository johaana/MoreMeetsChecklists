
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
    description: "Stop data breaches, ransomware attacks, and audit failures—before they destroy your organization's reputation and financial stability.",
    heroHeadline: "Stop data breaches, ransomware attacks, and audit failures.",
    heroSubheadline: "Built for CISOs and Risk Officers who take zero-vulnerability infrastructure seriously.",
    pricingUrgency: "A single ransomware payout or regulatory fine costs 1,000x more than this entire system.",
    consultingAnchor: 5000,
    icon: "shield-check",
    whoIsItFor: ["CISOs", "CTOs", "Data Protection Officers (DPOs)", "Heads of Risk & Compliance", "IT Directors"],
    sampleItems: [
        { text: "<strong>Seal</strong> entry points with a rigorous Patch Management and Vulnerability workflow.", icon: "bug" },
        { text: "<strong>Enforce</strong> least privilege with quarterly User Access reviews and MFA audits.", icon: "key-round" },
        { text: "<strong>Build</strong> resilience with battle-tested Incident Response and BC/DR playbooks.", icon: "database-zap" },
        { text: "<strong>De-risk</strong> your supply chain with a formal Vendor Security Assessment process.", icon: "handshake" },
        { text: "<strong>Secure</strong> your perimeter with firewall rule reviews and network safety checks.", icon: "shield" },
        { text: "<strong>Harden</strong> the human firewall with phishing simulations and awareness training.", icon: "users" }
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
        },
        {
            title: "Patch Management Workflow",
            department: "IT Operations",
            frequency: "Weekly/Monthly",
            role: "System Administrator",
            summary: "A structured workflow to identify and remediate security vulnerabilities in systems.",
            icon: "bug",
            tasks: [
                { id: "PMW-01", description: "Scan all systems for missing patches weekly.", priority: "High", riskLevel: "High", consequence: "Unpatched systems are the most common way hackers gain entry.", proof: "Vulnerability Scan Report" },
                { id: "PMW-02", description: "Classify patches based on severity (e.g., critical, high, medium).", priority: "High", riskLevel: "High", consequence: "Critical vulnerabilities remain open while low-risk items are patched.", proof: "Patch Matrix" },
                { id: "PMW-03", description: "Test all critical patches in a staging environment before production.", priority: "High", riskLevel: "High", consequence: "Faulty patches can bring down critical production systems.", proof: "Test Report" },
                { id: "PMW-04", description: "Deploy critical patches within a defined SLA (e.g., 14 days).", priority: "High", riskLevel: "High", consequence: "Increased window of opportunity for zero-day exploits.", proof: "Deployment Logs" },
                { id: "PMW-05", description: "Have a documented rollback plan for any patch that causes issues.", priority: "High", riskLevel: "Medium", consequence: "Hours or days of downtime while trying to recover from a bad patch.", proof: "Rollback Plan Document" },
                { id: "PMW-06", description: "Maintain an inventory of all software and versions.", priority: "High", riskLevel: "Medium", consequence: "You cannot patch what you do not know you have (shadow IT).", proof: "Software Inventory" },
                { id: "PMW-07", description: "Subscribe to vendor security advisories for all core software.", priority: "High", riskLevel: "High", consequence: "Missing critical vulnerability alerts from major vendors.", proof: "Subscription Confirmation" },
                { id: "PMW-08", description: "Automate patch deployment where possible.", priority: "High", riskLevel: "Medium", consequence: "Manual patching fails to scale and is prone to human error.", proof: "Automation Config" },
                { id: "PMW-09", description: "Verify successful patch installation with a follow-up scan.", priority: "High", riskLevel: "High", consequence: "Assuming a system is patched when the installation failed.", proof: "Verification Scan" },
                { id: "PMW-10", description: "Report on patch compliance to senior management.", priority: "High", riskLevel: "High", consequence: "Lack of visibility into the organization's risk posture.", proof: "Compliance Report" }
            ]
        },
        {
            title: "BC/DR & Backup SOP",
            department: "IT Infrastructure",
            frequency: "Quarterly/Annually",
            role: "IT Manager",
            summary: "A plan to ensure business continuity and the ability to recover from catastrophic data loss.",
            icon: "database-zap",
            tasks: [
                { id: "BCDR-01", description: "Define and document Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).", priority: "High", riskLevel: "High", consequence: "Recovery strategy does not align with business needs.", proof: "BIA Document" },
                { id: "BCDR-02", description: "Verify weekly that all critical system backups completed successfully.", priority: "High", riskLevel: "High", consequence: "No data to restore following a disaster.", proof: "Backup Logs" },
                { id: "BCDR-03", description: "Perform a quarterly test restore of a critical system from backup.", priority: "High", riskLevel: "High", consequence: "Backups are useless if they cannot be restored correctly.", proof: "Test Restore Report" },
                { id: "BCDR-04", description: "Ensure a copy of critical backups is stored in an offsite, encrypted location.", priority: "High", riskLevel: "High", consequence: "On-site fire or flood could destroy both primary data and backups.", proof: "Offsite Storage Log" },
                { id: "BCDR-05", description: "Conduct an annual disaster recovery drill with a full playbook.", priority: "High", riskLevel: "High", consequence: "The team is unable to respond effectively under pressure during a real crisis.", proof: "DR Drill Report" },
                { id: "BCDR-06", description: "Review and update the DR plan annually.", priority: "High", riskLevel: "High", consequence: "Outdated plan with incorrect contact details or legacy procedures.", proof: "Updated DR Plan" },
                { id: "BCDR-07", description: "Test failover of redundant systems.", priority: "High", riskLevel: "High", consequence: "High-availability systems fail to activate during a primary outage.", proof: "Failover Test Report" },
                { id: "BCDR-08", description: "Ensure all critical data, including cloud data, is included in backup jobs.", priority: "High", riskLevel: "High", consequence: "Major data gaps during a recovery operation.", proof: "Backup Job Config" },
                { id: "BCDR-09", description: "Verify integrity of backup media and storage systems.", priority: "High", riskLevel: "High", consequence: "Corrupt backups that are impossible to restore.", proof: "Media Check Log" },
                { id: "BCDR-10", description: "Train staff on their specific roles in the DR plan.", priority: "High", riskLevel: "High", consequence: "A plan is useless if the personnel do not know how to execute it.", proof: "Training Records" }
            ]
        },
        {
            title: "Incident Response Checklist",
            department: "Cybersecurity",
            frequency: "Per Incident",
            role: "Incident Commander",
            summary: "A step-by-step playbook for managing a cybersecurity incident from detection to resolution.",
            icon: "siren",
            tasks: [
                { id: "IR-01", description: "Triage the incident to determine its severity and scope.", priority: "High", riskLevel: "High", consequence: "Delayed response to a major incident classified as minor.", proof: "Triage Report" },
                { id: "IR-02", description: "Isolate affected systems from the network to prevent spread.", priority: "High", riskLevel: "High", consequence: "Ransomware spreads to the entire network from a single entry point.", proof: "Network Change Log" },
                { id: "IR-03", description: "Preserve all relevant logs and create forensic images.", priority: "High", riskLevel: "High", consequence: "Destroying evidence needed for investigation or legal action.", proof: "Chain of Custody Form" },
                { id: "IR-04", description: "Notify key stakeholders (legal, management, comms) per the plan.", priority: "High", riskLevel: "High", consequence: "Chaos and conflicting messages damage brand reputation.", proof: "Communication Log" },
                { id: "IR-05", description: "Engage external forensics or legal counsel if required.", priority: "High", riskLevel: "High", consequence: "Delaying expert help increases legal and financial liability.", proof: "Engagement Letter" },
                { id: "IR-06", description: "Notify regulatory bodies (e.g., CERT-In) within the legal timeframe.", priority: "High", riskLevel: "High", consequence: "Massive fines for failure to report a breach within 72 hours.", proof: "Regulatory Filing" },
                { id: "IR-07", description: "Eradicate the threat and restore systems from clean backups.", priority: "High", riskLevel: "High", consequence: "Restoring from a compromised backup re-infects the system.", proof: "Eradication Report" },
                { id: "IR-08", description: "Conduct a post-incident review to identify lessons learned.", priority: "High", riskLevel: "High", consequence: "The organization remains vulnerable to the same attack type.", proof: "Post-Incident Report" },
                { id: "IR-09", description: "Update security controls based on the incident findings.", priority: "High", riskLevel: "High", consequence: "Failure to improve defenses after a known failure.", proof: "Control Change Log" },
                { id: "IR-10", description: "Communicate with affected parties (customers, employees) per plan.", priority: "High", riskLevel: "High", consequence: "Loss of customer trust and increased regulatory scrutiny.", proof: "Communication Log" }
            ]
        },
        {
            title: "Vendor Security Assessment",
            department: "Security/Procurement",
            frequency: "Per Vendor",
            role: "Risk Analyst",
            summary: "A process to assess the security posture of third-party vendors before onboarding.",
            icon: "handshake",
            tasks: [
                { id: "VSA-01", description: "Send a standardized security questionnaire before onboarding.", priority: "High", riskLevel: "High", consequence: "Onboarding a vendor with unknown security vulnerabilities.", proof: "Completed Questionnaire" },
                { id: "VSA-02", description: "Request latest penetration test or SOC 2 report for critical vendors.", priority: "High", riskLevel: "High", consequence: "Trusting vendor claims without third-party validation.", proof: "Vendor Security Reports" },
                { id: "VSA-03", description: "Ensure the vendor contract includes robust security clauses.", priority: "High", riskLevel: "High", consequence: "No legal recourse if the vendor causes a data breach.", proof: "Signed Contract" },
                { id: "VSA-04", description: "Conduct an annual security review for all critical vendors.", priority: "High", riskLevel: "High", consequence: "Security posture degrading over time without re-verification.", proof: "Annual Review Report" },
                { id: "VSA-05", description: "Define clear SLAs for vulnerability remediation for all vendors.", priority: "High", riskLevel: "High", consequence: "Vendor has no contractual pressure to fix security flaws.", proof: "Contract Clause" },
                { id: "VSA-06", description: "Review vendor access to internal systems and data.", priority: "High", riskLevel: "High", consequence: "Vendors retaining excessive or unmonitored access.", proof: "Vendor Access Audit" },
                { id: "VSA-07", description: "Assess the vendor's own supply chain security.", priority: "High", riskLevel: "High", consequence: "A breach at a sub-vendor affects your organization.", proof: "Supply Chain Assessment" },
                { id: "VSA-08", description: "Ensure vendor has a data breach notification process.", priority: "High", riskLevel: "High", consequence: "Vendor fails to notify you of a breach affecting your data.", proof: "Breach Notification Clause" },
                { id: "VSA-09", description: "Classify vendors based on their security risk level.", priority: "High", riskLevel: "High", consequence: "Misallocated security resources on low-risk partners.", proof: "Vendor Risk Classification" },
                { id: "VSA-10", description: "Terminate contracts with non-compliant vendors.", priority: "High", riskLevel: "High", consequence: "Continuing a partnership with a high-security-risk entity.", proof: "Termination Record" }
            ]
        },
        {
            title: "Firewall Rule Review",
            department: "Network Security",
            frequency: "Quarterly",
            role: "Network Engineer",
            summary: "A periodic review of firewall rules to ensure they are still necessary and secure.",
            icon: "shield-check",
            tasks: [
                { id: "FRR-01", description: "Review all firewall rules against business justification.", priority: "High", riskLevel: "High", consequence: "Obsolete rules act as security holes from old projects.", proof: "Rule Review Log" },
                { id: "FRR-02", description: "Remove any obsolete or overly permissive rules.", priority: "High", riskLevel: "High", consequence: "Increased attack surface due to unnecessary open ports.", proof: "Change Request Ticket" },
                { id: "FRR-03", description: "Ensure an implicit deny rule is at the bottom of the ACL.", priority: "High", riskLevel: "High", consequence: "What is not expressly permitted is allowed, a fundamental failure.", proof: "Firewall Config" },
                { id: "FRR-04", description: "Document the purpose and owner of every rule.", priority: "High", riskLevel: "Medium", consequence: "Impossible to conduct meaningful future reviews.", proof: "Rule Base Documentation" },
                { id: "FRR-05", description: "Analyze firewall logs for unusual traffic patterns.", priority: "High", riskLevel: "High", consequence: "Undetected malware command-and-control or data exfiltration.", proof: "Log Analysis Report" },
                { id: "FRR-06", description: "Validate firewall rules after any network changes.", priority: "High", riskLevel: "High", consequence: "Accidental misconfigurations opening major security holes.", proof: "Validation Report" },
                { id: "FRR-07", description: "Ensure firewall software/firmware is up-to-date.", priority: "High", riskLevel: "High", consequence: "Exploitation of known vulnerabilities in the firewall itself.", proof: "Firmware Version Check" },
                { id: "FRR-08", description: "Test firewall failover capabilities.", priority: "High", riskLevel: "High", consequence: "Platform-wide outage if the primary firewall fails.", proof: "Failover Test Report" },
                { id: "FRR-09", description: "Review and approve all new firewall rule requests.", priority: "High", riskLevel: "High", consequence: "Ad-hoc, insecure rules added by unauthorized staff.", proof: "Approval Workflow" },
                { id: "FRR-10", description: "Conduct an annual external penetration test of the firewall.", priority: "High", riskLevel: "High", consequence: "No independent validation of firewall effectiveness.", proof: "Pen Test Report" }
            ]
        },
        {
            title: "Phishing Simulation & Training",
            department: "Security Awareness",
            frequency: "Quarterly",
            role: "Security Analyst",
            summary: "A program to train and test employees on their ability to spot and report phishing.",
            icon: "fish",
            tasks: [
                { id: "PST-01", description: "Design and launch a quarterly phishing simulation campaign.", priority: "High", riskLevel: "High", consequence: "No measure of susceptibility to real-world phishing attacks.", proof: "Campaign Report" },
                { id: "PST-02", description: "Track click rates and credential submission metrics.", priority: "High", riskLevel: "Medium", consequence: "No data to measure training effectiveness over time.", proof: "Campaign Dashboard" },
                { id: "PST-03", description: "Assign remedial training to employees who failed the simulation.", priority: "High", riskLevel: "Medium", consequence: "Known vulnerable users receive no additional training.", proof: "Training Assignment Log" },
                { id: "PST-04", description: "Share anonymized results with management to show trends.", priority: "Medium", riskLevel: "Low", consequence: "Leadership is unaware of the human-risk posture.", proof: "Management Report" },
                { id: "PST-05", description: "Update simulation templates to reflect current phishing trends.", priority: "Medium", riskLevel: "Medium", consequence: "Simulations become too easy and unrealistic.", proof: "Template Library" },
                { id: "PST-06", description: "Conduct spear-phishing simulations for high-risk users (Finance/HR).", priority: "High", riskLevel: "High", consequence: "Executives targeted by tailored attacks remain untested.", proof: "Spear-phishing Report" },
                { id: "PST-07", description: "Provide regular security awareness newsletters.", priority: "Medium", riskLevel: "Low", consequence: "Security slips from the team's top-of-mind priorities.", proof: "Newsletter Archive" },
                { id: "PST-08", description: "Train employees on how to report suspicious emails.", priority: "High", riskLevel: "Medium", consequence: "Employees don't know how to act as a defense layer.", proof: "Reporting Instructions" },
                { id: "PST-09", description: "Recognize employees who report phishing attempts.", priority: "Low", riskLevel: "Low", consequence: "Missed opportunity to encourage positive behavior.", proof: "Recognition Program" },
                { id: "PST-10", description: "Analyze the effectiveness of training and simulations.", priority: "High", riskLevel: "Medium", consequence: "The program fails to adapt to new employee weaknesses.", proof: "Effectiveness Report" }
            ]
        },
        {
            title: "Cloud Security Posture Management (CSPM)",
            department: "Cloud Security",
            frequency: "Daily",
            role: "Cloud Security Engineer",
            summary: "Regular checks to ensure cloud environments (AWS, Azure, GCP) are configured securely.",
            icon: "cloud",
            tasks: [
                { id: "CSPM-01", description: "Review CSPM tool dashboard for critical alerts daily.", priority: "High", riskLevel: "High", consequence: "Critical misconfigurations exploited within minutes.", proof: "CSPM Dashboard" },
                { id: "CSPM-02", description: "Remediate any public storage exposures (e.g. S3 buckets) immediately.", priority: "High", riskLevel: "High", consequence: "A leading cause of catastrophic, unencrypted data leaks.", proof: "Remediation Ticket" },
                { id: "CSPM-03", description: "Audit security groups for overly permissive inbound rules.", priority: "High", riskLevel: "High", consequence: "Attackers bypass firewalls to access internal cloud systems.", proof: "Audit Report" },
                { id: "CSPM-04", description: "Ensure logging and monitoring are enabled for all cloud resources.", priority: "High", riskLevel: "High", consequence: "Zero visibility into cloud breaches or lateral movement.", proof: "Logging Audit" },
                { id: "CSPM-05", description: "Verify IAM roles follow the principle of least privilege.", priority: "High", riskLevel: "High", consequence: "Compromised role allows lateral movement across the cloud.", proof: "IAM Audit Report" },
                { id: "CSPM-06", description: "Check for unused or stale cloud resources.", priority: "Medium", riskLevel: "Medium", consequence: "Forgotten resources act as unpatched entry points.", proof: "Resource Audit" },
                { id: "CSPM-07", description: "Ensure data encryption is enabled for all sensitive data stores.", priority: "High", riskLevel: "High", consequence: "Leaked data is immediately readable and usable by attackers.", proof: "Encryption Audit" },
                { id: "CSPM-08", description: "Monitor for unauthorized API calls and access key usage.", priority: "High", riskLevel: "High", consequence: "Compromised keys used to exfiltrate mass amounts of data.", proof: "API Log Analysis" },
                { id: "CSPM-09", description: "Regularly review and update security baselines for cloud services.", priority: "High", riskLevel: "High", consequence: "Security posture fails to keep up with new cloud features.", proof: "Baseline Documents" },
                { id: "CSPM-10", description: "Automate remediation of common cloud misconfigurations.", priority: "High", riskLevel: "High", consequence: "Manual remediation is too slow for large-scale environments.", proof: "Automation Scripts" }
            ]
        }
    ]
};
