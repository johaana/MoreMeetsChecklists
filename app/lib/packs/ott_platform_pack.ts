
import type { PremiumPack } from "@/lib/premium-packs";

export const ott_platform_pack: PremiumPack = {
    id: 'ott_platform_pack',
    title: "OTT Streaming Platform Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c556c2-51d9-4d6f-812f-359a795fd971',
    category: "Entertainment & Events",
    description: "Stop platform crashes, subscriber churn, and content piracy—before they destroy your platform's growth and reputation.",
    heroHeadline: "Prevent platform crashes and content piracy.",
    heroSubheadline: "Built for high-availability streaming platforms that take zero-risk uptime and content security seriously.",
    pricingUrgency: "A single minute of downtime during a major live event or one content leak costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "monitor-play",
    whoIsItFor: ["OTT Platform Owners", "Heads of Content Operations", "Chief Technology Officers (CTOs)", "SRE & DevOps Leads"],
    sampleItems: [
        { text: "<strong>Ensure</strong> a flawless user experience with a robust content ingestion, transcoding, and QC workflow.", icon: "video" },
        { text: "<strong>Guarantee</strong> uptime during major events with a live streaming readiness and disaster recovery playbook.", icon: "zap" },
        { text: "<strong>Protect</strong> your platform with cybersecurity SOPs for DRM, access control, and vulnerability management.", icon: "shield" },
        { text: "<strong>Optimize</strong> performance with checklists for CDN configuration, cache management, and infrastructure monitoring.", icon: "cloud" },
        { text: "<strong>Stay</strong> compliant with a structured process for content rating, subtitling, and legal clearances.", icon: "file-check" },
        { text: "<strong>Improve</strong> user engagement with a data-driven process for personalization, recommendations, and analytics.", icon: "brain-circuit" }
    ],
    checklists: [
        {
            title: "Content Ingestion & QC",
            department: "Content Ops",
            frequency: "Per Asset",
            role: "Content Operator",
            summary: "Ensures all video assets meet technical and quality standards before going live.",
            icon: "video",
            tasks: [
                { id: "CIQC-01", description: "Verify incoming video files against the delivery specifications (format, bitrate, resolution).", priority: "High", riskLevel: "High", consequence: "A non-compliant file can fail transcoding or result in poor playback quality.", proof: "QC Report" },
                { id: "CIQC-02", description: "Run an automated QC check for video/audio errors (e.g., freezes, silence, corruption).", priority: "High", riskLevel: "High", consequence: "Technical glitches create a poor viewing experience and lead to customer complaints.", proof: "Automated QC Log" },
                { id: "CIQC-03", description: "Check subtitle and audio language files for sync and accuracy.", priority: "High", riskLevel: "High", consequence: "Out-of-sync subtitles or wrong audio tracks make content unwatchable.", proof: "Subtitle QC Report" },
                { id: "CIQC-04", description: "Transcode the master file into all required adaptive bitrate (ABR) profiles.", priority: "High", riskLevel: "High", consequence: "Ensures smooth playback for users on different devices and network speeds.", proof: "Transcoding Job Log" },
                { id: "CIQC-05", description: "Apply DRM (Digital Rights Management) encryption.", priority: "High", riskLevel: "High", consequence: "Failure to apply DRM is a breach of contract with content owners and enables piracy.", proof: "DRM Log" },
                { id: "CIQC-06", description: "Ingest all metadata (title, description, cast, thumbnails).", priority: "High", riskLevel: "Medium", consequence: "Inaccurate metadata makes content hard to discover and looks unprofessional.", proof: "Metadata Sheet" },
                { id: "CIQC-07", description: "Perform a final spot-check of the content on a staging environment.", priority: "High", riskLevel: "High", consequence: "The last chance to catch any errors before the content goes live to millions of users.", proof: "Staging QC Sign-off" },
                { id: "CIQC-08", description: "Schedule the content for publishing in the Content Management System (CMS).", priority: "High", riskLevel: "Medium", consequence: "Errors in scheduling can lead to content going live at the wrong time.", proof: "CMS Schedule" },
                { id: "CIQC-09", description: "Archive the master file securely.", priority: "High", riskLevel: "High", consequence: "Losing the master file is an unrecoverable loss of a valuable asset.", proof: "Archive Log" },
                { id: "CIQC-10", description: "Update the content library and notify relevant teams.", priority: "High", riskLevel: "Medium", consequence: "Ensures marketing and support teams are aware of new content.", proof: "Notification Email" }
            ]
        },
        {
            title: "Live Streaming Readiness",
            department: "Broadcast Ops/SRE",
            frequency: "Per Live Event",
            role: "Live Ops Engineer",
            summary: "A checklist to ensure maximum uptime and a smooth experience for major live events.",
            icon: "zap",
            tasks: [
                { id: "LIVE-01", description: "Conduct a full load test on the streaming infrastructure before the event.", priority: "High", riskLevel: "High", consequence: "The only way to know if your system can handle the peak traffic of a major live event.", proof: "Load Test Report" },
                { id: "LIVE-02", description: "Verify primary and backup encoder and ingest paths.", priority: "High", riskLevel: "High", consequence: "If the primary feed fails, a quick switch to the backup is critical to stay on air.", proof: "Path Test Log" },
                { id: "LIVE-03", description: "Set up a \"war room\" with key personnel for the duration of the event.", priority: "High", riskLevel: "High", consequence: "Ensures rapid, coordinated response to any issues during the live stream.", proof: "War Room Roster" },
                { id: "LIVE-04", description: "Confirm CDN configuration and purge any old cache.", priority: "High", riskLevel: "High", consequence: "Incorrect CDN settings can lead to poor performance and buffering for users.", proof: "CDN Config Screenshot" },
                { id: "LIVE-05", description: "Have a pre-defined communication plan for any service disruptions.", priority: "High", riskLevel: "High", consequence: "Allows for quick, clear communication to users on social media if there is an outage.", proof: "Communication Plan" },
                { id: "LIVE-06", description: "Test failover mechanisms for all critical components.", priority: "High", riskLevel: "High", consequence: "Proves that your redundancy will actually work in a real-world failure.", proof: "Failover Drill Report" },
                { id: "LIVE-07", description: "Set up real-time monitoring dashboards for key metrics (rebuffering, latency, etc.).", priority: "High", riskLevel: "High", consequence: "Allows engineers to spot problems in real-time before they affect all users.", proof: "Dashboard Links" },
                { id: "LIVE-08", description: "Brief all on-call staff on their roles and responsibilities.", priority: "High", riskLevel: "High", consequence: "Ensures everyone knows what to do in a crisis.", proof: "Briefing Notes" },
                { id: "LIVE-09", description: "Ensure sufficient cloud capacity and that auto-scaling is enabled.", priority: "High", riskLevel: "High", consequence: "A traffic spike without auto-scaling will crash the platform.", proof: "Cloud Console Screenshot" },
                { id: "LIVE-10", description: "Conduct a post-event review to analyze performance and identify improvements.", priority: "High", riskLevel: "Medium", consequence: "The best way to learn and improve for the next major event.", proof: "Post-Event Review Report" }
            ]
        },
        {
            title: "Cybersecurity & DRM",
            department: "Security",
            frequency: "Quarterly",
            role: "Security Engineer",
            summary: "Regularly assesses and strengthens the platform's defenses against cyber threats and piracy.",
            icon: "shield-check",
            tasks: [
                { id: "CYBER-01", description: "Conduct a quarterly vulnerability scan of the entire platform.", priority: "High", riskLevel: "High", consequence: "Identifies security holes before hackers do.", proof: "Vulnerability Scan Report" },
                { id: "CYBER-02", description: "Review user access controls and enforce the principle of least privilege.", priority: "High", riskLevel: "High", consequence: "Reduces the attack surface by ensuring users only have the access they need.", proof: "Access Review Log" },
                { id: "CYBER-03", description: "Verify that DRM keys are securely stored and managed.", priority: "High", riskLevel: "High", consequence: "A compromised DRM key can lead to widespread piracy of your content.", proof: "DRM Key Management Policy" },
                { id: "CYBER-04", description: "Perform a penetration test at least annually.", priority: "High", riskLevel: "High", consequence: "A real-world test of your platform's defenses by ethical hackers.", proof: "Pen Test Report" },
                { id: "CYBER-05", description: "Review and update the incident response plan.", priority: "High", riskLevel: "High", consequence: "An outdated plan will be ineffective in a real security breach.", proof: "Updated IR Plan" },
                { id: "CYBER-06", description: "Ensure all sensitive data is encrypted at rest and in transit.", priority: "High", riskLevel: "High", consequence: "Protects user data even if a database is compromised.", proof: "Encryption Audit Report" },
                { id: "CYBER-07", description: "Monitor for and respond to security alerts from SIEM/monitoring tools.", priority: "High", riskLevel: "High", consequence: "Allows for early detection and response to potential attacks.", proof: "Alert Triage Log" },
                { id: "CYBER-08", description: "Provide security awareness training to all employees.", priority: "High", riskLevel: "Medium", consequence: "Human error is a leading cause of security breaches.", proof: "Training Records" },
                { id: "CYBER-09", description: "Assess the security of all third-party integrations and vendors.", priority: "High", riskLevel: "High", consequence: "A vulnerability in a third-party tool can be a backdoor into your platform.", proof: "Vendor Security Assessment" },
                { id: "CYBER-10", description: "Stay updated on the latest security threats and vulnerabilities.", priority: "High", riskLevel: "High", consequence: "The threat landscape is constantly changing.", proof: "Threat Intelligence Subscription" }
            ]
        },
        {
            title: "Infrastructure & CDN Management",
            department: "DevOps/SRE",
            frequency: "Weekly",
            role: "SRE",
            summary: "Ensures the underlying infrastructure is performant, scalable, and cost-effective.",
            icon: "cloud",
            tasks: [
                { id: "INFRA-01", description: "Review cloud costs and identify optimization opportunities.", priority: "High", riskLevel: "Medium", consequence: "Uncontrolled cloud spend can quickly erode profitability.", proof: "Cost Analysis Report" },
                { id: "INFRA-02", description: "Check health and performance of all production servers and databases.", priority: "High", riskLevel: "High", consequence: "Early detection of performance degradation can prevent a major outage.", proof: "Monitoring Dashboard" },
                { id: "INFRA-03", description: "Review and tune auto-scaling policies.", priority: "High", riskLevel: "High", consequence: "A poorly configured policy can fail to scale up during a traffic spike, crashing the site.", proof: "Auto-scaling Config" },
                { id: "INFRA-04", description: "Audit CDN cache-hit ratio and configuration.", priority: "High", riskLevel: "High", consequence: "A low cache-hit ratio increases load on your origin servers and increases costs.", proof: "CDN Analytics" },
                { id: "INFRA-05", description: "Apply infrastructure-as-code (IaC) principles for all changes.", priority: "High", riskLevel: "High", consequence: "Manual changes are error-prone and untraceable; IaC provides a repeatable, auditable process.", proof: "Terraform/CloudFormation Code" },
                { id: "INFRA-06", description: "Test backup and restore procedures for critical infrastructure.", priority: "High", riskLevel: "High", consequence: "The only way to ensure you can recover from a major data loss.", proof: "Restore Test Log" },
                { id: "INFRA-07", description: "Update system documentation after any infrastructure changes.", priority: "High", riskLevel: "Medium", consequence: "Outdated documentation can cause confusion and errors during an outage.", proof: "Updated Documentation" },
                { id: "INFRA-08", description: "Plan for capacity and future growth.", priority: "High", riskLevel: "High", consequence: "Failure to plan can mean you are unable to handle future growth.", proof: "Capacity Plan" },
                { id: "INFRA-09", description: "Manage DNS and SSL certificate renewals.", priority: "High", riskLevel: "High", consequence: "An expired SSL certificate can take your entire site offline.", proof: "Certificate Expiry Tracker" },
                { id: "INFRA-10", description: "Implement a blue-green or canary deployment strategy for updates.", priority: "High", riskLevel: "High", consequence: "Allows for safe, zero-downtime releases.", proof: "Deployment Scripts" }
            ]
        },
        {
            title: "User & Subscription Management",
            department: "Product/Engineering",
            frequency: "Ongoing",
            role: "Product Manager",
            summary: "Manages the entire user lifecycle, from sign-up and billing to churn analysis.",
            icon: "users",
            tasks: [
                { id: "USM-01", description: "Monitor user sign-up funnels for any drop-offs.", priority: "High", riskLevel: "Medium", consequence: "A sudden drop-off could indicate a technical bug or a usability issue.", proof: "Analytics Dashboard" },
                { id: "USM-02", description: "Ensure subscription billing and invoicing is accurate.", priority: "High", riskLevel: "High", consequence: "Billing errors are a major cause of customer churn and support tickets.", proof: "Billing System Audit" },
                { id: "USM-03", description: "Have a clear process for handling failed payments and dunning.", priority: "High", riskLevel: "High", consequence: "An effective dunning process can recover significant amounts of lost revenue.", proof: "Dunning Campaign Stats" },
                { id: "USM-04", description: "Analyze churn data to understand reasons for cancellation.", priority: "High", riskLevel: "High", consequence: "If you don't know why users are leaving, you can't take steps to prevent it.", proof: "Churn Analysis Report" },
                { id: "USM-05", description: "Offer promotions and discounts in a controlled manner.", priority: "High", riskLevel: "Medium", consequence: "Uncontrolled discounting can devalue the service and attract low-quality customers.", proof: "Promotion Plan" },
                { id: "USM-06", description: "Manage user profiles and preferences securely.", priority: "High", riskLevel: "High", consequence: "A breach of user data can destroy trust in the platform.", proof: "User Database" },
                { id: "USM-07", description: "Provide self-service options for users to manage their subscriptions.", priority: "High", riskLevel: "Medium", consequence: "Reduces the load on customer support and improves user experience.", proof: "User Account Portal" },
                { id: "USM-08", description: "Track key metrics like LTV, CAC, and MRR.", priority: "High", riskLevel: "High", consequence: "These are the vital signs of a healthy subscription business.", proof: "Financial Dashboard" },
                { id: "USM-09", description: "Handle user data deletion requests in compliance with privacy laws.", priority: "High", riskLevel: "High", consequence: "A legal requirement in many jurisdictions (e.g., GDPR).", proof: "Deletion Request Log" },
                { id: "USM-10", description: "Communicate any changes in pricing or terms to all users.", priority: "High", riskLevel: "High", consequence: "Lack of clear communication can lead to customer backlash.", proof: "User Communication Log" }
            ]
        },
        {
            title: "Content & Metadata Management",
            department: "Content Ops",
            frequency: "Ongoing",
            role: "Content Manager",
            summary: "Manages the content library, ensuring accurate metadata, compliance, and optimal discovery.",
            icon: "clapperboard",
            tasks: [
                { id: "CMM-01", description: "Ensure all content has complete and accurate metadata (title, genre, synopsis).", priority: "High", riskLevel: "Medium", consequence: "Poor metadata makes content hard for users to find and the platform look unprofessional.", proof: "Metadata Audit" },
                { id: "CMM-02", description: "Assign appropriate content ratings (e.g., age ratings).", priority: "High", riskLevel: "High", consequence: "Displaying inappropriate content to children is a major legal and ethical violation.", proof: "Rating Compliance Report" },
                { id: "CMM-03", description: "Manage thumbnail and promotional artwork for all titles.", priority: "High", riskLevel: "Medium", consequence: "The artwork is the \"storefront\" for your content; poor artwork leads to low viewership.", proof: "Artwork Library" },
                { id: "CMM-04", description: "Implement a content scheduling and publishing calendar.", priority: "High", riskLevel: "High", consequence: "Ensures a steady stream of new content and coordinates with marketing efforts.", proof: "Content Calendar" },
                { id: "CMM-05", description: "Manage content rights and availability windows.", priority: "High", riskLevel: "High", consequence: "Making content available after your rights have expired can lead to major legal penalties.", proof: "Rights Management System" },
                { id: "CMM-06", description: "Optimize content for search and discovery within the platform.", priority: "High", riskLevel: "Medium", consequence: "If users can't find the content, it might as well not exist.", proof: "SEO/Search Audit" },
                { id: "CMM-07", description: "Curate playlists and collections.", priority: "Medium", riskLevel: "Low", consequence: "Helps users discover new content and increases engagement.", proof: "Playlist Curation Log" },
                { id: "CMM-08", description: "Localize metadata for different regions.", priority: "High", riskLevel: "Medium", consequence: "A poor translation can be confusing or offensive to international audiences.", proof: "Localization Checklist" },
                { id: "CMM-09", description: "Archive or remove content whose rights have expired.", priority: "High", riskLevel: "High", consequence: "A critical step to avoid legal issues from expired licenses.", proof: "Takedown Log" },
                { id: "CMM-10", description: "Analyze content performance data to inform acquisition strategy.", priority: "High", riskLevel: "High", consequence: "Data-driven decisions on what content to license or produce next.", proof: "Performance Report" }
            ]
        },
        {
            title: "Analytics & Reporting",
            department: "Data/Analytics",
            frequency: "Weekly",
            role: "Data Analyst",
            summary: "A process for tracking key metrics and providing actionable insights to the business.",
            icon: "bar-chart-2",
            tasks: [
                { id: "AR-01", description: "Track key user engagement metrics (daily active users, session duration).", priority: "High", riskLevel: "Medium", consequence: "Provides a high-level view of the health of the platform.", proof: "Engagement Dashboard" },
                { id: "AR-02", description: "Monitor content consumption metrics (most-watched titles, completion rates).", priority: "High", riskLevel: "High", consequence: "The most important data for understanding what content is resonating with users.", proof: "Content Performance Report" },
                { id: "AR-03", description: "Generate weekly reports for management on platform health and performance.", priority: "High", riskLevel: "High", consequence: "Keeps leadership informed and enables data-driven decision making.", proof: "Weekly Report" },
                { id: "AR-04", description: "Analyze A/B test results to inform product decisions.", priority: "High", riskLevel: "High", consequence: "The scientific way to make product changes.", proof: "A/B Test Report" },
                { id: "AR-05", description: "Build and maintain dashboards for different business functions.", priority: "High", riskLevel: "Medium", consequence: "Empowers teams with the data they need to do their jobs.", proof: "Dashboard Links" },
                { id: "AR-06", description: "Ensure data accuracy and integrity in the analytics pipeline.", priority: "High", riskLevel: "High", consequence: "Decisions based on bad data are bad decisions.", proof: "Data Quality Audit" },
                { id: "AR-07", description: "Provide ad-hoc analysis and insights to support business questions.", priority: "High", riskLevel: "Medium", consequence: "Helps the business answer specific, timely questions.", proof: "Analysis Request Log" },
                { id: "AR-08", description: "Track the performance of the recommendation engine.", priority: "High", riskLevel: "High", consequence: "A good recommendation engine is a major driver of user engagement.", proof: "Recommendation Performance Report" },
                { id: "AR-09", description: "Comply with all data privacy regulations in analytics.", priority: "High", riskLevel: "High", consequence: "Anonymize personal data and ensure compliance with laws like GDPR.", proof: "Privacy Compliance Audit" },
                { id: "AR-10", description: "Train business users on how to use self-service analytics tools.", priority: "Medium", riskLevel: "Low", consequence: "Reduces the burden on the analytics team and empowers users.", proof: "Training Log" }
            ]
        },
        {
            title: "Customer Support SOP",
            department: "Support",
            frequency: "Ongoing",
            role: "Support Lead",
            summary: "A framework for providing efficient, empathetic, and effective customer support.",
            icon: "life-buoy",
            tasks: [
                { id: "CS-01", description: "Define and track SLAs for response and resolution times.", priority: "High", riskLevel: "High", consequence: "Slow response times are a major cause of customer dissatisfaction.", proof: "SLA Report" },
                { id: "CS-02", description: "Use a ticketing system to manage all customer queries.", priority: "High", riskLevel: "High", consequence: "Without a ticketing system, queries get lost and are not tracked.", proof: "Helpdesk System" },
                { id: "CS-03", description: "Create a knowledge base of canned responses for common issues.", priority: "High", riskLevel: "Medium", consequence: "Improves efficiency and ensures consistent answers.", proof: "Knowledge Base" },
                { id: "CS-04", description: "Have a clear escalation path for complex or unresolved issues.", priority: "High", riskLevel: "High", consequence: "Ensures that difficult problems get to the right people quickly.", proof: "Escalation Policy" },
                { id: "CS-05", description: "Train support agents on product knowledge and soft skills.", priority: "High", riskLevel: "High", consequence: "An untrained agent can give incorrect information or handle a customer poorly.", proof: "Training Records" },
                { id: "CS-06", description: "Monitor customer satisfaction (CSAT) scores.", priority: "High", riskLevel: "High", consequence: "The primary measure of how well the support team is performing.", proof: "CSAT Report" },
                { id: "CS-07", description: "Analyze ticket data to identify recurring user problems.", priority: "High", riskLevel: "High", consequence: "Provides valuable feedback to the product team to fix underlying issues.", proof: "Ticket Analysis Report" },
                { id: "CS-08", description: "Provide multi-channel support (email, chat, phone).", priority: "High", riskLevel: "Medium", consequence: "Allows customers to get help in the channel they prefer.", proof: "Support Channels List" },
                { id: "CS-09", description: "Have a process for handling billing and subscription-related queries.", priority: "High", riskLevel: "High", consequence: "Billing issues are sensitive and must be handled quickly and accurately.", proof: "Billing Support SOP" },
                { id: "CS-10", description: "Empower agents to provide resolutions like credits or extensions.", priority: "High", riskLevel: "Medium", consequence: "Empowerment allows agents to solve problems on the first contact.", proof: "Empowerment Matrix" }
            ]
        }
    ]
};
