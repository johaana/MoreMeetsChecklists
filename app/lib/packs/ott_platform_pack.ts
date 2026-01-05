
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
    description: "A comprehensive toolkit for OTT platform operations, covering content ingestion, quality control, live streaming, and infrastructure management.",
    icon: "monitor-play",
    whoIsItFor: ["OTT Platform Owners", "Heads of Content Operations", "Chief Technology Officers (CTOs)", "SRE & DevOps Leads"],
    sampleItems: [
        { text: "Ensure a flawless user experience with a robust content ingestion, transcoding, and QC workflow.", icon: "video" },
        { text: "Guarantee uptime during major events with a live streaming readiness and disaster recovery playbook.", icon: "zap" },
        { text: "Protect your platform with cybersecurity SOPs for DRM, access control, and vulnerability management.", icon: "shield" },
        { text: "Optimize performance with checklists for CDN configuration, cache management, and infrastructure monitoring.", icon: "cloud" },
        { text: "Stay compliant with a structured process for content rating, subtitling, and legal clearances.", icon: "file-check" },
        { text: "Improve user engagement with a data-driven process for personalization, recommendations, and analytics.", icon: "brain-circuit" }
    ],
    checklists: [
        {
            title: "Content Ingestion & QC",
            department: "Content Operations",
            frequency: "Per Title",
            role: "Content Manager",
            summary: "Ensures all video assets meet technical and quality standards before going live.",
            icon: "video",
            tasks: [
                { id: "OTT-CI-01", description: "Receive master file from content provider and verify it matches technical specifications.", priority: "High", riskLevel: "High", consequence: "Platform cannot process the file, leading to delays.", proof: "Technical spec sheet sign-off." },
                { id: "OTT-CI-02", description: "Perform automated and manual Quality Control (QC) for video/audio errors (e.g., artifacts, sync issues).", priority: "High", riskLevel: "High", consequence: "Poor user experience, subscriber complaints.", proof: "QC report." },
                { id: "OTT-CI-03", description: "Verify all required assets are present (subtitles, multiple audio tracks, artwork, metadata).", priority: "High", riskLevel: "Medium", consequence: "Incomplete title launch, poor user experience.", proof: "Asset checklist sign-off." },
                { id: "OTT-CI-04", description: "Transcode master file into multiple bitrates and formats for adaptive streaming.", priority: "High", riskLevel: "Medium", consequence: "Users on slow connections cannot stream the content.", proof: "Transcoding job log." },
                { id: "OTT-CI-05", description: "Apply Digital Rights Management (DRM) encryption.", priority: "High", riskLevel: "High", consequence: "Content piracy, breach of contract with rights holders.", proof: "DRM application log." },
                { id: "OTT-CI-06", description: "Ingest all assets and metadata into the Content Management System (CMS).", priority: "High", riskLevel: "Low", consequence: "Title cannot be published.", proof: "CMS entry screenshot." },
                { id: "OTT-CI-07", description: "Perform a final 'spot check' of the title on multiple devices (web, mobile, TV) before publishing.", priority: "High", riskLevel: "Medium", consequence: "Device-specific playback issues.", proof: "Cross-device testing report." },
                { id: "OTT-CI-08", description: "Schedule the title for publication or publish immediately.", priority: "Medium", riskLevel: "Low", consequence: "Missing a marketing deadline.", proof: "Publishing schedule." },
                { id: "OTT-CI-09", description: "Archive the master file securely.", priority: "High", riskLevel: "High", consequence: "Losing the master file is an unrecoverable loss of a valuable asset.", proof: "Archive Log" },
                { id: "OTT-CI-10", description: "Update the content library and notify relevant teams.", priority: "High", riskLevel: "Medium", consequence: "Ensures marketing and support teams are aware of new content.", proof: "Notification Email" }
            ]
        },
        {
            title: "Live Streaming Event Readiness",
            department: "Broadcast Operations",
            frequency: "Per Live Event",
            role: "Live Ops Engineer",
            summary: "A checklist to ensure maximum uptime and a smooth experience for major live events.",
            icon: "zap",
            tasks: [
                { id: "OTT-LS-01", description: "Conduct a full load test of the streaming infrastructure at least 24 hours before the event.", priority: "High", riskLevel: "High", consequence: "Platform crashes during peak viewership.", proof: "Load test report." },
                { id: "OTT-LS-02", description: "Verify primary and backup encoder and stream paths are functional.", priority: "High", riskLevel: "High", consequence: "Total stream failure if primary path fails.", proof: "Encoder test stream logs." },
                { id: "OTT-LS-03", description: "Confirm CDN configurations, including geo-blocking and token authentication, are correct.", priority: "High", riskLevel: "High", consequence: "Stream available in unauthorized regions, security breaches.", proof: "CDN configuration review sign-off." },
                { id: "OTT-LS-04", description: "Establish a 'war room' communication channel (e.g., Slack, Teams) for the event.", priority: "High", riskLevel: "Medium", consequence: "Disorganized response to issues during the event.", proof: "War room channel created and key personnel added." },
                { id: "OTT-LS-05", description: "Brief the customer support team on the event and potential user issues.", priority: "Medium", riskLevel: "Low", consequence: "Support team unprepared for user complaints.", proof: "Support briefing notes." },
                { id: "OTT-LS-06", description: "Monitor stream health (bitrate, buffering, errors) in real-time throughout the event.", priority: "High", riskLevel: "High", consequence: "Slow response to degrading stream quality.", proof: "Real-time monitoring dashboard screenshot." },
                { id: "OTT-LS-07", description: "Have a disaster recovery plan in place, including a pre-recorded 'experiencing technical difficulties' slate.", priority: "High", riskLevel: "Medium", consequence: "Dead air and user confusion during an outage.", proof: "Disaster recovery plan document." },
                { id: "OTT-LS-08", description: "Conduct a post-event debrief to analyze performance and any incidents.", priority: "Medium", riskLevel: "Low", consequence: "Failure to learn from event performance.", proof: "Post-event report." },
                { id: "OTT-LS-09", description: "Ensure sufficient cloud capacity and that auto-scaling is enabled.", priority: "High", riskLevel: "High", consequence: "A traffic spike without auto-scaling will crash the platform.", proof: "Cloud Console Screenshot" },
                { id: "OTT-LS-10", description: "Test failover mechanisms for all critical components.", priority: "High", riskLevel: "High", consequence: "Proves that your redundancy will actually work in a real-world failure.", proof: "Failover Drill Report" }
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
                { id: "OTT-SEC-01", description: "Conduct a quarterly vulnerability scan of the entire platform.", priority: "High", riskLevel: "High", consequence: "Identifies security holes before hackers do.", proof: "Vulnerability Scan Report" },
                { id: "OTT-SEC-02", description: "Review user access controls and enforce the principle of least privilege.", priority: "High", riskLevel: "High", consequence: "Reduces the attack surface by ensuring users only have the access they need.", proof: "Access Review Log" },
                { id: "OTT-SEC-03", description: "Verify that DRM keys are securely stored and managed.", priority: "High", riskLevel: "High", consequence: "A compromised DRM key can lead to widespread piracy of your content.", proof: "DRM Key Management Policy" },
                { id: "OTT-SEC-04", description: "Perform a penetration test at least annually.", priority: "High", riskLevel: "High", consequence: "A real-world test of your platform's defenses by ethical hackers.", proof: "Pen Test Report" },
                { id: "OTT-SEC-05", description: "Review and update the incident response plan.", priority: "High", riskLevel: "High", consequence: "An outdated plan will be ineffective in a real security breach.", proof: "Updated IR Plan" },
                { id: "OTT-SEC-06", description: "Ensure all sensitive data is encrypted at rest and in transit.", priority: "High", riskLevel: "High", consequence: "Protects user data even if a database is compromised.", proof: "Encryption Audit Report" },
                { id: "OTT-SEC-07", description: "Monitor for and respond to security alerts from SIEM/monitoring tools.", priority: "High", riskLevel: "High", consequence: "Allows for early detection and response to potential attacks.", proof: "Alert Triage Log" },
                { id: "OTT-SEC-08", description: "Provide security awareness training to all employees.", priority: "High", riskLevel: "Medium", consequence: "Human error is a leading cause of security breaches.", proof: "Training Records" },
                { id: "OTT-SEC-09", description: "Assess the security of all third-party integrations and vendors.", priority: "High", riskLevel: "High", consequence: "A vulnerability in a third-party tool can be a backdoor into your platform.", proof: "Vendor Security Assessment" },
                { id: "OTT-SEC-10", description: "Stay updated on the latest security threats and vulnerabilities.", priority: "High", riskLevel: "High", consequence: "The threat landscape is constantly changing.", proof: "Threat Intelligence Subscription" }
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
                { id: "OTT-INF-01", description: "Review cloud costs and identify optimization opportunities.", priority: "High", riskLevel: "Medium", consequence: "Uncontrolled cloud spend can quickly erode profitability.", proof: "Cost Analysis Report" },
                { id: "OTT-INF-02", description: "Check health and performance of all production servers and databases.", priority: "High", riskLevel: "High", consequence: "Early detection of performance degradation can prevent a major outage.", proof: "Monitoring Dashboard" },
                { id: "OTT-INF-03", description: "Review and tune auto-scaling policies.", priority: "High", riskLevel: "High", consequence: "A poorly configured policy can fail to scale up during a traffic spike, crashing the site.", proof: "Auto-scaling Config" },
                { id: "OTT-INF-04", description: "Audit CDN cache-hit ratio and configuration.", priority: "High", riskLevel: "High", consequence: "A low cache-hit ratio increases load on your origin servers and increases costs.", proof: "CDN Analytics" },
                { id: "OTT-INF-05", description: "Apply infrastructure-as-code (IaC) principles for all changes.", priority: "High", riskLevel: "High", consequence: "Manual changes are error-prone and untraceable; IaC provides a repeatable, auditable process.", proof: "Terraform/CloudFormation Code" },
                { id: "OTT-INF-06", description: "Test backup and restore procedures for critical infrastructure.", priority: "High", riskLevel: "High", consequence: "The only way to ensure you can recover from a major data loss.", proof: "Restore Test Log" },
                { id: "OTT-INF-07", description: "Update system documentation after any infrastructure changes.", priority: "High", riskLevel: "Medium", consequence: "Outdated documentation can cause confusion and errors during an outage.", proof: "Updated Documentation" },
                { id: "OTT-INF-08", description: "Plan for capacity and future growth.", priority: "High", riskLevel: "High", consequence: "Failure to plan can mean you are unable to handle future growth.", proof: "Capacity Plan" },
                { id: "OTT-INF-09", description: "Manage DNS and SSL certificate renewals.", priority: "High", riskLevel: "High", consequence: "An expired SSL certificate can take your entire site offline.", proof: "Certificate Expiry Tracker" },
                { id: "OTT-INF-10", description: "Implement a blue-green or canary deployment strategy for updates.", priority: "High", riskLevel: "High", consequence: "Allows for safe, zero-downtime releases.", proof: "Deployment Scripts" }
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
                { id: "OTT-USM-01", description: "Monitor user sign-up funnels for any drop-offs.", priority: "High", riskLevel: "Medium", consequence: "A sudden drop-off could indicate a technical bug or a usability issue.", proof: "Analytics Dashboard" },
                { id: "OTT-USM-02", description: "Ensure subscription billing and invoicing is accurate.", priority: "High", riskLevel: "High", consequence: "Billing errors are a major cause of customer churn and support tickets.", proof: "Billing System Audit" },
                { id: "OTT-USM-03", description: "Have a clear process for handling failed payments and dunning.", priority: "High", riskLevel: "High", consequence: "An effective dunning process can recover significant amounts of lost revenue.", proof: "Dunning Campaign Stats" },
                { id: "OTT-USM-04", description: "Analyze churn data to understand reasons for cancellation.", priority: "High", riskLevel: "High", consequence: "If you don't know why users are leaving, you can't take steps to prevent it.", proof: "Churn Analysis Report" },
                { id: "OTT-USM-05", description: "Offer promotions and discounts in a controlled manner.", priority: "High", riskLevel: "Medium", consequence: "Uncontrolled discounting can devalue the service and attract low-quality customers.", proof: "Promotion Plan" },
                { id: "OTT-USM-06", description: "Manage user profiles and preferences securely.", priority: "High", riskLevel: "High", consequence: "A breach of user data can destroy trust in the platform.", proof: "User Database" },
                { id: "OTT-USM-07", description: "Provide self-service options for users to manage their subscriptions.", priority: "High", riskLevel: "Medium", consequence: "Reduces the load on customer support and improves user experience.", proof: "User Account Portal" },
                { id: "OTT-USM-08", description: "Track key metrics like LTV, CAC, and MRR.", priority: "High", riskLevel: "High", consequence: "These are the vital signs of a healthy subscription business.", proof: "Financial Dashboard" },
                { id: "OTT-USM-09", description: "Handle user data deletion requests in compliance with privacy laws.", priority: "High", riskLevel: "High", consequence: "A legal requirement in many jurisdictions (e.g., GDPR).", proof: "Deletion Request Log" },
                { id: "OTT-USM-10", description: "Communicate any changes in pricing or terms to all users.", priority: "High", riskLevel: "High", consequence: "Lack of clear communication can lead to customer backlash.", proof: "User Communication Log" }
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
                { id: "OTT-CMM-01", description: "Ensure all content has complete and accurate metadata (title, genre, synopsis).", priority: "High", riskLevel: "Medium", consequence: "Poor metadata makes content hard for users to find and the platform look unprofessional.", proof: "Metadata Audit" },
                { id: "OTT-CMM-02", description: "Assign appropriate content ratings (e.g., age ratings).", priority: "High", riskLevel: "High", consequence: "Displaying inappropriate content to children is a major legal and ethical violation.", proof: "Rating Compliance Report" },
                { id: "OTT-CMM-03", description: "Manage thumbnail and promotional artwork for all titles.", priority: "High", riskLevel: "Medium", consequence: "The artwork is the 'storefront' for your content; poor artwork leads to low viewership.", proof: "Artwork Library" },
                { id: "OTT-CMM-04", description: "Implement a content scheduling and publishing calendar.", priority: "High", riskLevel: "High", consequence: "Ensures a steady stream of new content and coordinates with marketing efforts.", proof: "Content Calendar" },
                { id: "OTT-CMM-05", description: "Manage content rights and availability windows.", priority: "High", riskLevel: "High", consequence: "Making content available after your rights have expired can lead to major legal penalties.", proof: "Rights Management System" },
                { id: "OTT-CMM-06", description: "Optimize content for search and discovery within the platform.", priority: "High", riskLevel: "Medium", consequence: "If users can't find the content, it might as well not exist.", proof: "SEO/Search Audit" },
                { id: "OTT-CMM-07", description: "Curate playlists and collections.", priority: "Medium", riskLevel: "Low", consequence: "Helps users discover new content and increases engagement.", proof: "Playlist Curation Log" },
                { id: "OTT-CMM-08", description: "Localize metadata for different regions.", priority: "High", riskLevel: "Medium", consequence: "A poor translation can be confusing or offensive to international audiences.", proof: "Localization Checklist" },
                { id: "OTT-CMM-09", description: "Archive or remove content whose rights have expired.", priority: "High", riskLevel: "High", consequence: "A critical step to avoid legal issues from expired licenses.", proof: "Takedown Log" },
                { id: "OTT-CMM-10", description: "Analyze content performance data to inform acquisition strategy.", priority: "High", riskLevel: "High", consequence: "Data-driven decisions on what content to license or produce next.", proof: "Performance Report" }
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
                { id: "OTT-AR-01", description: "Track key user engagement metrics (daily active users, session duration).", priority: "High", riskLevel: "Medium", consequence: "Provides a high-level view of the health of the platform.", proof: "Engagement Dashboard" },
                { id: "OTT-AR-02", description: "Monitor content consumption metrics (most-watched titles, completion rates).", priority: "High", riskLevel: "High", consequence: "The most important data for understanding what content is resonating with users.", proof: "Content Performance Report" },
                { id: "OTT-AR-03", description: "Generate weekly reports for management on platform health and performance.", priority: "High", riskLevel: "High", consequence: "Keeps leadership informed and enables data-driven decision making.", proof: "Weekly Report" },
                { id: "OTT-AR-04", description: "Analyze A/B test results to inform product decisions.", priority: "High", riskLevel: "High", consequence: "The scientific way to make product changes.", proof: "A/B Test Report" },
                { id: "OTT-AR-05", description: "Build and maintain dashboards for different business functions.", priority: "High", riskLevel: "Medium", consequence: "Empowers teams with the data they need to do their jobs.", proof: "Dashboard Links" },
                { id: "OTT-AR-06", description: "Ensure data accuracy and integrity in the analytics pipeline.", priority: "High", riskLevel: "High", consequence: "Decisions based on bad data are bad decisions.", proof: "Data Quality Audit" },
                { id: "OTT-AR-07", description: "Provide ad-hoc analysis and insights to support business questions.", priority: "High", riskLevel: "Medium", consequence: "Helps the business answer specific, timely questions.", proof: "Analysis Request Log" },
                { id: "OTT-AR-08", description: "Track the performance of the recommendation engine.", priority: "High", riskLevel: "High", consequence: "A good recommendation engine is a major driver of user engagement.", proof: "Recommendation Performance Report" },
                { id: "OTT-AR-09", description: "Comply with all data privacy regulations in analytics.", priority: "High", riskLevel: "High", consequence: "Anonymize personal data and ensure compliance with laws like GDPR.", proof: "Privacy Compliance Audit" },
                { id: "OTT-AR-10", description: "Train business users on how to use self-service analytics tools.", priority: "Medium", riskLevel: "Low", consequence: "Reduces the burden on the analytics team and empowers users.", proof: "Training Log" }
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
                { id: "OTT-CS-01", description: "Define and track SLAs for response and resolution times.", priority: "High", riskLevel: "High", consequence: "Slow response times are a major cause of customer dissatisfaction.", proof: "SLA Report" },
                { id: "OTT-CS-02", description: "Use a ticketing system to manage all customer queries.", priority: "High", riskLevel: "High", consequence: "Without a ticketing system, queries get lost and are not tracked.", proof: "Helpdesk System" },
                { id: "OTT-CS-03", description: "Create a knowledge base of canned responses for common issues.", priority: "High", riskLevel: "Medium", consequence: "Improves efficiency and ensures consistent answers.", proof: "Knowledge Base" },
                { id: "OTT-CS-04", description: "Have a clear escalation path for complex or unresolved issues.", priority: "High", riskLevel: "High", consequence: "Ensures that difficult problems get to the right people quickly.", proof: "Escalation Policy" },
                { id: "OTT-CS-05", description: "Train support agents on product knowledge and soft skills.", priority: "High", riskLevel: "High", consequence: "An untrained agent can give incorrect information or handle a customer poorly.", proof: "Training Records" },
                { id: "OTT-CS-06", description: "Monitor customer satisfaction (CSAT) scores.", priority: "High", riskLevel: "High", consequence: "The primary measure of how well the support team is performing.", proof: "CSAT Report" },
                { id: "OTT-CS-07", description: "Analyze ticket data to identify recurring user problems.", priority: "High", riskLevel: "High", consequence: "Provides valuable feedback to the product team to fix underlying issues.", proof: "Ticket Analysis Report" },
                { id: "OTT-CS-08", description: "Provide multi-channel support (email, chat, phone).", priority: "High", riskLevel: "Medium", consequence: "Allows customers to get help in the channel they prefer.", proof: "Support Channels List" },
                { id: "OTT-CS-09", description: "Have a process for handling billing and subscription-related queries.", priority: "High", riskLevel: "High", consequence: "Billing issues are sensitive and must be handled quickly and accurately.", proof: "Billing Support SOP" },
                { id: "OTT-CS-10", description: "Empower agents to provide resolutions like credits or extensions.", priority: "High", riskLevel: "Medium", consequence: "Empowerment allows agents to solve problems on the first contact.", proof: "Empowerment Matrix" }
            ]
        }
    ]
};

    

    
