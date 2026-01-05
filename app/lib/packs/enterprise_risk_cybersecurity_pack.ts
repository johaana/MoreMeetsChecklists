
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
                {id: 'ERC-UAR-08', description: 'Document the completion of the access review cycle.', priority: 'Medium', riskLevel: 'Low', consequence: 'No audit trail for compliance.', proof: 'Signed summary report of the access review.'},
                {id: 'ERC-UAR-09', description: 'Review access to shared mailboxes and distribution lists.', priority: 'Medium', riskLevel: 'Low', consequence: 'Former employees receiving confidential information.', proof: 'Review of group memberships.'},
                {id: 'ERC-UAR-10', description: 'Ensure a formal process for requesting new access is in place.', priority: 'High', riskLevel: 'Medium', consequence: 'Ad-hoc access grants lead to privilege creep.', proof: 'Access request form and process document.'}
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
                {id: 'ERC-VPM-08', description: 'Report on patching status and vulnerability trends to management.', priority: 'Medium', riskLevel: 'Low', consequence: 'Lack of visibility into the security posture.', proof: 'Monthly patch compliance report.'},
                {id: 'ERC-VPM-09', description: 'Subscribe to vendor security mailing lists and threat intelligence feeds.', priority: 'High', riskLevel: 'Medium', consequence: 'Being unaware of a newly disclosed zero-day vulnerability.', proof: 'Subscription confirmation.'},
                {id: 'ERC-VPM-10', description: 'Patch third-party applications (e.g., Adobe, Java, Chrome) in addition to operating systems.', priority: 'High', riskLevel: 'High', consequence: 'Third-party apps are a common entry point for malware.', proof: 'Patch management system report.'}
            ]
        },
        {
            title: "BC/DR & Backup SOP",
            department: "IT/Resilience",
            frequency: "Quarterly",
            role: "BC/DR Coordinator",
            summary: "A plan to ensure business continuity during a disaster and the ability to recover data.",
            icon: "database-zap",
            tasks: [
                { id: "BCDR-01", description: "Review and update the Business Impact Analysis (BIA) and risk assessment annually.", priority: "High", riskLevel: "High", consequence: "The plan may not cover the most critical business functions.", proof: "Updated BIA document." },
                { id: "BCDR-02", description: "Conduct a full disaster recovery drill for a critical system annually.", priority: "High", riskLevel: "High", consequence: "A plan that has never been tested will fail in a real disaster.", proof: "DR Drill Report." },
                { id: "BCDR-03", description: "Verify that all critical data is being backed up daily and stored off-site.", priority: "High", riskLevel: "High", consequence: "Catastrophic and unrecoverable data loss.", proof: "Backup success logs." },
                { id: "BCDR-04", description: "Perform a test restore of a random sample of backups quarterly.", priority: "High", riskLevel: "High", consequence: "Backups are useless if they cannot be restored.", proof: "Test Restore Log." },
                { id: "BCDR-05", description: "Maintain an updated contact list for all emergency response team members.", priority: "High", riskLevel: "Medium", consequence: "Inability to contact key personnel during a crisis.", proof: "Emergency Contact List." },
                { id: "BCDR-06", description: "Review and update the business continuity plan (BCP) documents quarterly.", priority: "High", riskLevel: "High", consequence: "An outdated plan is an ineffective plan.", proof: "Updated BCP documents." },
                { id: "BCDR-07", description: "Ensure alternate work locations or remote work capabilities are ready.", priority: "High", riskLevel: "Medium", consequence: "Inability to continue operations if the primary office is inaccessible.", proof: "Alternate Site Test." },
                { id: "BCDR-08", description: "Train all employees on their roles during a business continuity event.", priority: "High", riskLevel: "Medium", consequence: "Confusion and chaos during a crisis.", proof: "BCP Training Records." },
                { id: "BCDR-09", description: "Verify that third-party vendors have adequate BC/DR plans.", priority: "High", riskLevel: "High", consequence: "A critical vendor outage can shut down your own business.", proof: "Vendor BCP Review." },
                { id: "BCDR-10", description: "Check fuel levels for backup generators weekly.", priority: "High", riskLevel: "High", consequence: "Generator is useless without fuel.", proof: "Fuel Level Log." }
            ]
        },
        {
            title: "Incident Response Checklist",
            department: "Security",
            frequency: "Per Incident",
            role: "Incident Commander",
            summary: "A step-by-step playbook for managing a cybersecurity incident from detection to resolution.",
            icon: "siren",
            tasks: [
                { id: "IR-01", description: "Identification: Confirm that a security incident has occurred and determine its scope.", priority: "High", riskLevel: "High", consequence: "Wasting resources on a false alarm or underestimating a real threat.", proof: "Incident Declaration Form." },
                { id: "IR-02", description: "Containment: Isolate affected systems from the network to prevent the incident from spreading.", priority: "High", riskLevel: "High", consequence: "A single infected machine compromises the entire network.", proof: "Network Change Log." },
                { id: "IR-03", description: "Eradication: Remove the threat from the affected systems (e.g., remove malware).", priority: "High", riskLevel: "High", consequence: "The threat remains active and can re-infect the system.", proof: "Eradication Report." },
                { id: "IR-04", description: "Recovery: Restore systems to normal operation from clean backups.", priority: "High", riskLevel: "High", consequence: "Inability to bring business operations back online.", proof: "System Recovery Log." },
                { id: "IR-05", description: "Lessons Learned: Conduct a post-incident review to identify the root cause and improve defenses.", priority: "High", riskLevel: "High", consequence: "Failure to learn from the incident makes you vulnerable to the same attack again.", proof: "Post-Incident Report." },
                { id: "IR-06", description: "Communication: Follow the communication plan to notify internal stakeholders, legal, and customers if necessary.", priority: "High", riskLevel: "High", consequence: "A chaotic communication strategy can worsen the reputational damage from a breach.", proof: "Communication Log." },
                { id: "IR-07", description: "Preserve Evidence: Maintain a chain of custody for all evidence for forensic analysis.", priority: "High", riskLevel: "High", consequence: "Inability to perform a forensic investigation or pursue legal action.", proof: "Chain of Custody Form." },
                { id: "IR-08", description: "Assemble the Cyber Incident Response Team (CIRT).", priority: "High", riskLevel: "High", consequence: "A disorganized response with no clear leader.", proof: "CIRT Activation Log." },
                { id: "IR-09", description: "Report the incident to regulatory authorities if required by law.", priority: "High", riskLevel: "High", consequence: "Legal penalties for failure to report a breach.", proof: "Regulatory Filing." },
                { id: "IR-10", description: "Monitor affected systems for any signs of reinfection.", priority: "High", riskLevel: "High", consequence: "The attacker may have left a backdoor to regain access.", proof: "Monitoring Log." }
            ]
        },
        {
            title: "Vendor Security Assessment",
            department: "Procurement/Security",
            frequency: "Per New Vendor",
            role: "Security Analyst",
            summary: "A process to assess the security posture of third-party vendors before granting them access to data or systems.",
            icon: "handshake",
            tasks: [
                { id: "VSA-01", description: "Send a standardized security questionnaire to all potential vendors.", priority: "High", riskLevel: "High", consequence: "Onboarding a vendor without understanding their security risks.", proof: "Completed Questionnaire." },
                { id: "VSA-02", description: "Review vendor's security certifications (e.g., ISO 27001, SOC 2).", priority: "High", riskLevel: "High", consequence: "Provides third-party validation of a vendor's security claims.", proof: "Copies of Certificates." },
                { id: "VSA-03", description: "Assess vendor's data protection and privacy policies.", priority: "High", riskLevel: "High", consequence: "Your data may not be handled with the same level of care you provide.", proof: "Policy Review Checklist." },
                { id: "VSA-04", description: "Ensure the vendor contract includes specific security clauses and right-to-audit.", priority: "High", riskLevel: "High", consequence: "No legal recourse if the vendor causes a breach.", proof: "Signed Contract." },
                { id: "VSA-05", description: "Identify and document all data that will be shared with the vendor.", priority: "High", riskLevel: "High", consequence: "Data being shared without a clear business purpose.", proof: "Data Flow Diagram." },
                { id: "VSA-06", description: "Perform a risk rating for each vendor (High, Medium, Low).", priority: "High", riskLevel: "Medium", consequence: "Allows you to focus security efforts on the highest-risk vendors.", proof: "Vendor Risk Register." },
                { id: "VSA-07", description: "Conduct annual security reassessments of all critical vendors.", priority: "High", riskLevel: "High", consequence: "A vendor's security posture can degrade over time.", proof: "Annual Assessment Report." },
                { id: "VSA-08", description: "Have a clear process for offboarding vendors and revoking access.", priority: "High", riskLevel: "High", consequence: "A vendor retaining access after a contract ends is a major security risk.", proof: "Offboarding Checklist." },
                { id: "VSA-09", description: "Questionnaire to include MFA on remote access.", priority: "High", riskLevel: "High", consequence: "A major breach if credentials are stolen (e.g., Change Healthcare attack).", proof: "Questionnaire." },
                { id: "VSA-10", description: "Review vendor's incident response plan.", priority: "High", riskLevel: "High", consequence: "You need to know how they will respond if they have a breach affecting your data.", proof: "IR Plan Review." }
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
                { id: "FRR-01", description: "Review all firewall rules for business justification.", priority: "High", riskLevel: "High", consequence: "Unnecessary open ports increase the attack surface of the network.", proof: "Rule Review Log." },
                { id: "FRR-02", description: "Remove any temporary rules that are no longer needed.", priority: "High", riskLevel: "High", consequence: "A temporary rule forgotten becomes a permanent backdoor.", proof: "Change Management Ticket." },
                { id: "FRR-03", description: "Ensure all 'any/any' rules are documented and approved by the CISO.", priority: "High", riskLevel: "High", consequence: "These rules are extremely permissive and dangerous.", proof: "Exception Approval Form." },
                { id: "FRR-04", description: "Verify that all changes to the firewall rulebase followed the change management process.", priority: "High", riskLevel: "High", consequence: "Unauthorized changes can introduce major vulnerabilities.", proof: "Change Log Audit." },
                { id: "FRR-05", description: "Document the purpose and owner of every firewall rule.", priority: "High", riskLevel: "Medium", consequence: "Makes it impossible to know if a rule is safe to delete in the future.", proof: "Firewall Rulebase Documentation." },
                { id: "FRR-06", description: "Check for redundant or shadowed rules.", priority: "Medium", riskLevel: "Low", consequence: "A complex and bloated rulebase is hard to manage and audit.", proof: "Rule Optimization Report." },
                { id: "FRR-07", description: "Ensure logging is enabled for all critical rules.", priority: "High", riskLevel: "High", consequence: "Inability to detect or investigate an attack that passes through the firewall.", proof: "Log Configuration Audit." },
                { id: "FRR-08", description: "Review firewall vendor security advisories and patch systems.", priority: "High", riskLevel: "High", consequence: "The firewall itself can be a point of compromise.", proof: "Patch Log." },
                { id: "FRR-09", description: "Analyze firewall logs for any unusual or malicious traffic patterns.", priority: "High", riskLevel: "High", consequence: "Firewall logs can provide early warning of an impending attack.", proof: "Log Analysis Report." },
                { id: "FRR-10", description: "Test firewall failover and high-availability (HA) functionality.", priority: "High", riskLevel: "High", consequence: "A firewall failure can bring down the entire network.", proof: "HA Test Report." }
            ]
        },
        {
            title: "Phishing Simulation & Training",
            department: "HR/Security",
            frequency: "Quarterly",
            role: "Security Awareness Manager",
            summary: "A program to train and test employees on their ability to spot and report phishing emails.",
            icon: "fish",
            tasks: [
                { id: "PST-01", description: "Conduct a simulated phishing campaign targeting all employees quarterly.", priority: "High", riskLevel: "High", consequence: "The only way to know how vulnerable your employees are to real phishing attacks.", proof: "Campaign Setup." },
                { id: "PST-02", description: "Track click rates and credential submission rates.", priority: "High", riskLevel: "Medium", consequence: "Metrics to measure the effectiveness of your training program.", proof: "Campaign Report." },
                { id: "PST-03", description: "Provide immediate, point-of-failure training for employees who click the phishing link.", priority: "High", riskLevel: "Medium", consequence: "The most effective time to train someone is right after they have made a mistake.", proof: "Training Page." },
                { id: "PST-04", description: "Assign comprehensive security awareness training to repeat clickers.", priority: "High", riskLevel: "High", consequence: "Identifies the highest-risk employees who need more intensive training.", proof: "Training Assignment Log." },
                { id: "PST-05", description: "Analyze results to identify departments or roles that are most vulnerable.", priority: "High", riskLevel: "Medium", consequence: "Allows for targeted training where it is needed most.", proof: "Analysis Report." },
                { id: "PST-06", description: "Communicate the overall, anonymized results to the company.", priority: "Medium", riskLevel: "Low", consequence: "Raises overall awareness and reinforces the importance of vigilance.", proof: "Internal Communication." },
                { id: "PST-07", description: "Vary the types of phishing emails used in simulations.", priority: "High", riskLevel: "Medium", consequence: "Employees may become wise to one type of phish, so it's important to keep them on their toes.", proof: "Campaign Templates." },
                { id: "PST-08", description: "Ensure there is a simple, one-click button for employees to report a suspected phishing email.", priority: "High", riskLevel: "High", consequence: "If it's hard to report, employees won't do it.", proof: "Outlook/Gmail Add-in." },
                { id: "PST-09", description: "Recognize employees who report phishing emails.", priority: "Medium", riskLevel: "Low", consequence: "Positive reinforcement encourages good behavior.", proof: "Recognition Program." },
                { id: "PST-10", description: "Update training materials based on the latest real-world phishing trends.", priority: "High", riskLevel: "Medium", consequence: "Training must evolve as attacker techniques evolve.", proof: "Updated Training Module." }
            ]
        },
        {
            title: "Cloud Security Posture Management (CSPM)",
            department: "Cloud Security",
            frequency: "Weekly",
            role: "Cloud Security Engineer",
            summary: "Regular checks to ensure cloud environments (AWS, Azure, GCP) are configured securely.",
            icon: "cloud",
            tasks: [
                { id: "CSPM-01", description: "Scan for publicly exposed storage buckets (e.g., S3 buckets).", priority: "High", riskLevel: "High", consequence: "A leading cause of major data breaches.", proof: "CSPM Tool Report." },
                { id: "CSPM-02", description: "Review Identity and Access Management (IAM) policies for excessive permissions.", priority: "High", riskLevel: "High", consequence: "Violates the principle of least privilege, increasing the blast radius of a compromise.", proof: "IAM Audit Report." },
                { id: "CSPM-03", description: "Ensure multi-factor authentication (MFA) is enabled for all root and privileged users.", priority: "High", riskLevel: "High", consequence: "A compromised root account gives an attacker full control of your cloud environment.", proof: "MFA Status Report." },
                { id: "CSPM-04", description: "Verify that logging and monitoring (e.g., CloudTrail, CloudWatch) are enabled for all accounts.", priority: "High", riskLevel: "High", consequence: "Inability to detect or investigate a breach.", proof: "Logging Configuration Audit." },
                { id: "CSPM-05", description: "Check for unrestricted inbound ports in security groups (e.g., RDP/SSH open to the world).", priority: "High", riskLevel: "High", consequence: "A direct entry point for attackers to brute-force their way into your systems.", proof: "Security Group Audit." },
                { id: "CSPM-06", description: "Ensure encryption is enabled for data at rest (e.g., EBS volumes, RDS databases).", priority: "High", riskLevel: "High", consequence: "If an attacker gains access to the storage, the data is readable.", proof: "Encryption Status Report." },
                { id: "CSPM-07", description: "Remediate high-priority misconfigurations within a defined SLA.", priority: "High", riskLevel: "High", consequence: "Known security holes are left open.", proof: "Remediation Tickets." },
                { id: "CSPM-08", description: "Track the cloud security score and report trends to management.", priority: "Medium", riskLevel: "Low", consequence: "Lack of visibility into the security posture of the cloud environment.", proof: "Security Score Dashboard." },
                { id: "CSPM-09", description: "Automate misconfiguration detection and remediation where possible.", priority: "High", riskLevel: "High", consequence: "Manual remediation is slow and error-prone.", proof: "Automation Scripts." },
                { id: "CSPM-10", description: "Review and classify new cloud services for security risks before they are used.", priority: "High", riskLevel: "High", consequence: "Developers using new, insecure services can introduce risk.", proof: "New Service Review Process." }
            ]
        }
    ]
};

    