
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
                { id: "OTT-CI-08", description: "Schedule the title for publication or publish immediately.", priority: "Medium", riskLevel: "Low", consequence: "Missing a marketing deadline.", proof: "Publishing schedule." }
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
                { id: "OTT-LS-08", description: "Conduct a post-event debrief to analyze performance and any incidents.", priority: "Medium", riskLevel: "Low", consequence: "Failure to learn from event performance.", proof: "Post-event report." }
            ]
        }
    ]
};

  