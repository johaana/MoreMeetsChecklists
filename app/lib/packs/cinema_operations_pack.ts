
import type { PremiumPack } from "@/lib/premium-packs";

export const cinema_operations_pack: PremiumPack = {
    id: 'cinema_operations_pack',
    title: "Cinema Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/0acf829c-e492-4f66-ae74-0231bfe0bc82',
    category: "Entertainment & Events",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the definitive plug for projection failures and safety gaps.",
    heroHeadline: "Stop Projection Failures and Catastrophic Safety Gaps",
    heroSubheadline: "Track technical readiness, monitor auditorium standards, and stay in control of guest safety—even when you aren’t on property.",
    pricingUrgency: "A single projection failure during a blockbuster opening or one safety lapse costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "popcorn",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Multiplex Owners", "Heads of Cinema Operations", "General Managers", "Technical Directors", "F&B Directors"],
    sampleItems: [
        { text: "<strong>2-Minute Technical Pulse</strong>: Projectionists and floor staff update status in seconds. Zero-friction daily reporting.", icon: "timer" },
        { text: "<strong>Multi-Screen Switchboard</strong>: Manage 1 to 20 screens from one master file. Toggle facilities (Bar, VIP, IMAX) ON or OFF.", icon: "layout-grid" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show managers exactly what needs sign-off—from fire exits to projector focus.", icon: "shield-check" },
        { text: "<strong>Show-Time Readiness</strong>: Bulletproof pre-screening protocols to ensure zero-fail projection, sound, and lighting.", icon: "projector" },
        { text: "<strong>Empire Mood Engine</strong>: Drive team discipline with live recognition and healthy competition between cinema branches.", icon: "trophy" },
        { text: "<strong>Institutional Memory</strong>: Capture technical 'know-how' so new operators are audit-ready and professional from Day 1.", icon: "history" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your operational data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Projection & Sound QC",
            department: "Technical",
            frequency: "Per Show",
            role: "Projectionist",
            summary: "Ensures a flawless technical presentation for every movie screening.",
            icon: "projector",
            tasks: [
                { id: "PROJ-SOUND-01", description: "Check projector for correct focus and brightness.", priority: "High", riskLevel: "Medium", consequence: "A blurry or dim picture ruins the cinematic experience.", proof: "QC Log" },
                { id: "PROJ-SOUND-02", description: "Test audio system for correct channel separation and volume levels (as per Dolby/THX spec).", priority: "High", riskLevel: "Medium", consequence: "Poor sound quality is a major customer complaint.", proof: "Sound Check Log" },
                { id: "PROJ-SOUND-03", description: "Verify the correct film version and language is loaded.", priority: "High", riskLevel: "High", consequence: "Playing the wrong movie or language version is a major service failure.", proof: "Playlist Check" },
                { id: "PROJ-SOUND-04", description: "Test the Public Address (PA) system for emergency announcements.", priority: "High", riskLevel: "High", consequence: "In an emergency, a failed PA system can lead to chaos and panic.", proof: "PA System Test" },
                { id: "PROJ-SOUND-05", description: "Clean projector lens and port glass daily.", priority: "High", riskLevel: "Low", consequence: "A dirty lens degrades picture quality.", proof: "Cleaning Log" },
                { id: "PROJ-SOUND-06", description: "Log lamp hours and schedule replacements.", priority: "High", riskLevel: "Medium", consequence: "A projector lamp failing mid-show is a major disruption.", proof: "Lamp Hour Log" },
                { id: "PROJ-SOUND-07", description: "Check auditorium lighting controls (house lights, emergency lights).", priority: "High", riskLevel: "High", consequence: "Lighting failures can be a safety hazard.", proof: "Lighting Control Check" },
                { id: "PROJ-SOUND-08", description: "Ensure subtitles are enabled and correctly displayed for relevant shows.", priority: "High", riskLevel: "Medium", consequence: "Failure to provide subtitles where required is an accessibility failure.", proof: "Subtitle Check" },
                { id: "PROJ-SOUND-09", description: "Monitor the show for any technical issues.", priority: "High", riskLevel: "High", consequence: "Allows for quick intervention if a technical problem arises.", proof: "Show Monitoring Log" },
                { id: "PROJ-SOUND-10", description: "Report any technical faults immediately.", priority: "High", riskLevel: "High", consequence: "Prevents the same issue from affecting the next show.", proof: "Fault Report" }
            ]
        },
        {
            title: "Fire Safety & Evacuation",
            department: "Safety/Security",
            frequency: "Daily/Quarterly",
            role: "Duty Manager",
            summary: "A comprehensive checklist to ensure the cinema is prepared for a fire emergency.",
            icon: "siren",
            tasks: [
                { id: "FIRE-CIN-01", description: "Ensure all emergency exits are unlocked and unobstructed.", priority: "High", riskLevel: "High", consequence: "A blocked exit can be fatal in a fire (e.g., Uphaar tragedy).", proof: "Exit Inspection Log" },
                { id: "FIRE-CIN-02", description: "Test fire alarms and smoke detectors weekly.", priority: "High", riskLevel: "High", consequence: "A silent alarm provides no warning, costing precious evacuation time.", proof: "Alarm Test Log" },
                { id: "FIRE-CIN-03", description: "Conduct a staff evacuation drill quarterly.", priority: "High", riskLevel: "High", consequence: "Untrained staff can cause panic and confusion during a real evacuation.", proof: "Drill Report" },
                { id: "FIRE-CIN-04", description: "Check all fire extinguishers for pressure and accessibility monthly.", priority: "High", riskLevel: "High", consequence: "An expired or inaccessible extinguisher is useless.", proof: "Extinguisher Log" },
                { id: "FIRE-CIN-05", description: "Ensure evacuation maps are displayed and accurate.", priority: "High", riskLevel: "High", consequence: "Confused patrons will not know where to go in an emergency.", proof: "Map Audit" },
                { id: "FIRE-CIN-06", description: "Test emergency lighting daily.", priority: "High", riskLevel: "High", consequence: "In a power failure, this is the only way for people to see the exit paths.", proof: "Lighting Test Log" },
                { id: "FIRE-CIN-07", description: "Train staff on their roles during an evacuation.", priority: "High", riskLevel: "High", consequence: "Clear roles prevent chaos and ensure an orderly evacuation.", proof: "Training Records" },
                { id: "FIRE-CIN-08", description: "Keep fire lanes and access for fire trucks clear.", priority: "High", riskLevel: "High", consequence: "A blocked fire lane can delay the fire brigade by critical minutes.", proof: "Exterior Inspection" },
                { id: "FIRE-CIN-09", description: "Inspect kitchen fire suppression systems monthly.", priority: "High", riskLevel: "High", consequence: "A kitchen fire can quickly get out of control without a working suppression system.", proof: "Suppression System Log" },
                { id: "FIRE-CIN-10", description: "Maintain all fire safety records for regulatory audits.", priority: "High", riskLevel: "High", consequence: "Failure to produce records can lead to fines and closure.", proof: "Fire Safety File" }
            ]
        },
        {
            title: "F&B Concession Hygiene",
            department: "F&B",
            frequency: "Daily",
            role: "F&B Supervisor",
            summary: "Ensures food and beverages served are safe, hygienic, and high quality.",
            icon: "utensils",
            tasks: [
                { id: "FNB-CIN-01", description: "Log temperatures of all food holding units (hot and cold).", priority: "High", riskLevel: "High", consequence: "Food held in the \"danger zone\" can cause food poisoning.", proof: "Temperature Log" },
                { id: "FNB-CIN-02", description: "Check expiry dates of all food products and ingredients.", priority: "High", riskLevel: "High", consequence: "Selling expired food is a major health and legal violation.", proof: "Expiry Date Sweep" },
                { id: "FNB-CIN-03", description: "Clean and sanitize all food contact surfaces hourly.", priority: "High", riskLevel: "High", consequence: "Prevents cross-contamination and bacterial growth.", proof: "Sanitization Log" },
                { id: "FNB-CIN-04", description: "Ensure staff follow handwashing and glove usage policies.", priority: "High", riskLevel: "High", consequence: "Poor personal hygiene is a primary cause of foodborne illness.", proof: "Hygiene Audit" },
                { id: "FNB-CIN-05", description: "Manage waste disposal to prevent pests and odors.", priority: "High", riskLevel: "Medium", consequence: "Overflowing garbage attracts pests.", proof: "Waste Log" },
                { id: "FNB-CIN-06", description: "Check popcorn machines, soda fountains, and other equipment for cleanliness.", priority: "High", riskLevel: "Medium", consequence: "Dirty equipment can harbor bacteria and affect taste.", proof: "Equipment Cleaning Log" },
                { id: "FNB-CIN-07", description: "Follow FIFO principles for all inventory.", priority: "High", riskLevel: "High", consequence: "Prevents waste from expired stock.", proof: "Stock rotation audit" },
                { id: "FNB-CIN-08", description: "Calibrate food thermometers weekly.", priority: "High", riskLevel: "High", consequence: "An inaccurate thermometer gives a false sense of safety.", proof: "Calibration Log" },
                { id: "FNB-CIN-09", description: "Maintain a clean and organized storage area.", priority: "High", riskLevel: "Medium", consequence: "Prevents pest infestations and cross-contamination.", proof: "Storage Inspection" },
                { id: "FNB-CIN-10", description: "Train all F&B staff on food safety standards.", priority: "High", riskLevel: "High", consequence: "Untrained staff are a major food safety liability.", proof: "Training Records" }
            ]
        },
        {
            title: "Ticketing & Cash Handling",
            department: "Box Office/Finance",
            frequency: "Daily",
            role: "Box Office Manager",
            summary: "A checklist for ensuring accurate and secure financial transactions.",
            icon: "ticket",
            tasks: [
                { id: "TICK-CASH-01", description: "Reconcile daily ticket sales against system reports.", priority: "High", riskLevel: "High", consequence: "Failure to reconcile can hide ticketing errors or internal fraud.", proof: "Sales Reconciliation Report" },
                { id: "TICK-CASH-02", description: "Reconcile cash drawers at the end of each shift.", priority: "High", riskLevel: "High", consequence: "The only way to identify cash shortages or overages accurately.", proof: "Cash Reconciliation Form" },
                { id: "TICK-CASH-03", description: "Use counterfeit detection for all large currency notes.", priority: "High", riskLevel: "High", consequence: "Accepting fake money is a direct financial loss.", proof: "Counterfeit Check" },
                { id: "TICK-CASH-04", description: "Securely deposit daily cash earnings.", priority: "High", riskLevel: "High", consequence: "Holding large amounts of cash on site is a major security risk.", proof: "Bank Deposit Slip" },
                { id: "TICK-CASH-05", description: "Require manager approval for all refunds and voids.", priority: "High", riskLevel: "High", consequence: "A key control to prevent fraudulent transactions by staff.", proof: "Refund/Void Log" },
                { id: "TICK-CASH-06", description: "Monitor online ticketing for fraudulent activity.", priority: "High", riskLevel: "High", consequence: "Can prevent loss from stolen credit cards or bot activity.", proof: "Fraud Monitoring Report" },
                { id: "TICK-CASH-07", description: "Ensure pricing is correctly configured in the ticketing system.", priority: "High", riskLevel: "High", consequence: "Incorrect pricing leads to revenue loss or customer disputes.", proof: "Pricing Audit" },
                { id: "TICK-CASH-08", description: "Track and reconcile complimentary tickets and vouchers.", priority: "High", riskLevel: "Medium", consequence: "Prevents misuse of complimentary offers.", proof: "Voucher Log" },
                { id: "TICK-CASH-09", description: "Train staff on all cash handling and ticketing procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff are more likely to make costly mistakes.", proof: "Training Records" },
                { id: "TICK-CASH-10", description: "Ensure PCI DSS compliance for all card transactions.", priority: "High", riskLevel: "High", consequence: "Non-compliance can result in large fines and loss of card processing rights.", proof: "PCI Compliance Certificate" }
            ]
        },
        {
            title: "Auditorium Cleaning & Maintenance",
            department: "Housekeeping/Facilities",
            frequency: "Per Show",
            role: "Housekeeping Supervisor",
            summary: "Maintains a clean, safe, and pleasant environment for every moviegoer.",
            icon: "armchair",
            tasks: [
                { id: "AUD-CLEAN-01", description: "Clean floors of all food and drink spillage after every show.", priority: "High", riskLevel: "Medium", consequence: "A dirty cinema is a major customer deterrent.", proof: "Cleaning Log" },
                { id: "AUD-CLEAN-02", description: "Wipe down all seats and armrests.", priority: "High", riskLevel: "Medium", consequence: "Ensures a clean and comfortable experience for the next guest.", proof: "Cleaning Log" },
                { id: "AUD-CLEAN-03", description: "Collect all trash and lost property.", priority: "High", riskLevel: "Low", consequence: "Maintains a clean environment and helps return lost items to guests.", proof: "Lost & Found Log" },
                { id: "AUD-CLEAN-04", description: "Check for any damaged seats or carpet and report for repair.", priority: "High", riskLevel: "Medium", consequence: "Damaged seats look unprofessional and can be a safety hazard.", proof: "Damage Report" },
                { id: "AUD-CLEAN-05", description: "Ensure 3D glasses (if any) are collected and sanitized.", priority: "High", riskLevel: "Medium", consequence: "Dirty 3D glasses are a hygiene risk and a major source of complaints.", proof: "Sanitization Log" },
                { id: "AUD-CLEAN-06", description: "Check and clean auditorium restrooms.", priority: "High", riskLevel: "Medium", consequence: "Restroom cleanliness is a key driver of overall guest satisfaction.", proof: "Restroom Cleaning Log" },
                { id: "AUD-CLEAN-07", description: "Verify that the auditorium is at a comfortable temperature.", priority: "High", riskLevel: "Low", consequence: "An auditorium that is too hot or cold is a common complaint.", proof: "Temperature Check" },
                { id: "AUD-CLEAN-08", description: "Deep clean all auditoriums weekly.", priority: "High", riskLevel: "Medium", consequence: "Prevents long-term buildup of dirt and grime.", proof: "Deep Clean Schedule" },
                { id: "AUD-CLEAN-09", description: "Ensure cleaning supplies are stocked.", priority: "High", riskLevel: "Low", consequence: "Lack of supplies can bring cleaning operations to a halt.", proof: "Supply Inventory" },
                { id: "AUD-CLEAN-10", description: "Supervisor to sign off on cleanliness before the next show.", priority: "High", riskLevel: "Medium", consequence: "Provides a final quality check and ensures standards are met.", proof: "Supervisor Sign-off" }
            ]
        },
        {
            title: "Staff Management & Grooming",
            department: "HR/Operations",
            frequency: "Daily",
            role: "Duty Manager",
            summary: "A checklist for managing the front-line team effectively.",
            icon: "users",
            tasks: [
                { id: "SMG-01", description: "Create and publish the weekly staff roster.", priority: "High", riskLevel: "Medium", consequence: "Poor scheduling leads to understaffing during peak shows.", proof: "Staff Roster" },
                { id: "SMG-02", description: "Conduct a daily briefing before the first show.", priority: "High", riskLevel: "Medium", consequence: "Keeps the team aligned on promotions, show times, and any issues.", proof: "Briefing Log" },
                { id: "SMG-03", description: "Inspect staff uniforms and grooming daily.", priority: "High", riskLevel: "Low", consequence: "A professional appearance is key to the brand image.", proof: "Grooming Check" },
                { id: "SMG-04", description: "Track staff attendance and punctuality.", priority: "High", riskLevel: "Medium", consequence: "Frequent lateness can disrupt operations.", proof: "Attendance System" },
                { id: "SMG-05", description: "Provide ongoing training on customer service and operational procedures.", priority: "High", riskLevel: "Medium", consequence: "Well-trained staff provide a better guest experience.", proof: "Training Log" },
                { id: "SMG-06", description: "Handle staff queries and grievances.", priority: "High", riskLevel: "Medium", consequence: "Poor grievance handling leads to low morale and high turnover.", proof: "Grievance Log" },
                { id: "SMG-07", description: "Conduct performance reviews for all staff.", priority: "High", riskLevel: "Medium", consequence: "Provides feedback for improvement and career growth.", proof: "Review Forms" },
                { id: "SMG-08", description: "Recognize and reward outstanding performance.", priority: "Medium", riskLevel: "Low", consequence: "A good way to boost morale and motivate the team.", proof: "Recognition Program" },
                { id: "SMG-09", description: "Ensure all staff are aware of their roles in an emergency.", priority: "High", riskLevel: "High", consequence: "Critical for an orderly and safe response to any incident.", proof: "Emergency Role Card" },
                { id: "SMG-10", description: "Manage staff leave and absences.", priority: "High", riskLevel: "Medium", consequence: "Ensures adequate staffing levels are maintained at all times.", proof: "Leave Management System" }
            ]
        },
        {
            title: "Marketing & Promotions",
            department: "Marketing",
            frequency: "Weekly",
            role: "Marketing Manager",
            summary: "A checklist to drive footfall and revenue through effective marketing.",
            icon: "megaphone",
            tasks: [
                { id: "MKTG-01", description: "Update in-cinema posters and standees for upcoming films.", priority: "High", riskLevel: "Low", consequence: "The most effective way to promote upcoming attractions to a captive audience.", proof: "Photo of Displays" },
                { id: "MKTG-02", description: "Plan and execute social media campaigns for new releases.", priority: "High", riskLevel: "Medium", consequence: "Drives pre-booking and opening weekend attendance.", proof: "Social Media Calendar" },
                { id: "MKTG-03", description: "Manage loyalty program and member communications.", priority: "High", riskLevel: "Medium", consequence: "A key tool for encouraging repeat visits.", proof: "Loyalty Program Dashboard" },
                { id: "MKTG-04", description: "Coordinate with distributors for promotional materials.", priority: "High", riskLevel: "Medium", consequence: "Ensures you have access to official artwork and trailers.", proof: "Communication Log" },
                { id: "MKTG-05", description: "Run special offers and combos in partnership with the F&B team.", priority: "High", riskLevel: "Medium", consequence: "A major driver of ancillary revenue.", proof: "Promotion Plan" },
                { id: "MKTG-06", description: "Track the effectiveness of marketing campaigns.", priority: "High", riskLevel: "Medium", consequence: "Helps to understand ROI and optimize future marketing spend.", proof: "Campaign ROI Report" },
                { id: "MKTG-07", description: "Manage the cinema's website and update showtimes.", priority: "High", riskLevel: "High", consequence: "An inaccurate showtime is a major source of customer frustration.", proof: "Website Content" },
                { id: "MKTG-08", description: "Engage with customers on social media.", priority: "High", riskLevel: "Medium", consequence: "Builds a community around the cinema and provides a channel for feedback.", proof: "Social Media Engagement Report" },
                { id: "MKTG-09", description: "Organize special events like premieres or fan screenings.", priority: "High", riskLevel: "High", consequence: "Creates buzz and can generate significant PR.", proof: "Event Plan" },
                { id: "MKTG-10", description: "Gather customer feedback to inform marketing strategies.", priority: "High", riskLevel: "Medium", consequence: "Helps to understand the local audience and tailor promotions effectively.", proof: "Feedback Survey" }
            ]
        },
        {
            title: "Facility Maintenance",
            department: "Facilities",
            frequency: "Weekly",
            role: "Facility Manager",
            summary: "A preventive maintenance checklist to keep the cinema running smoothly.",
            icon: "building",
            tasks: [
                { id: "FAC-MAIN-01", description: "Inspect and clean HVAC filters monthly.", priority: "High", riskLevel: "Medium", consequence: "A failed HVAC system leads to an uncomfortably hot or cold auditorium.", proof: "HVAC Log" },
                { id: "FAC-MAIN-02", description: "Check all plumbing fixtures for leaks weekly.", priority: "High", riskLevel: "High", consequence: "A leaking toilet or tap can cause water damage and is unhygienic.", proof: "Plumbing Inspection Log" },
                { id: "FAC-MAIN-03", description: "Test backup generators under load weekly.", priority: "High", riskLevel: "High", consequence: "A power cut without a working generator means the entire show stops.", proof: "Generator Test Log" },
                { id: "FAC-MAIN-04", description: "Inspect all electrical panels for loose connections quarterly.", priority: "High", riskLevel: "High", consequence: "A loose connection is a major fire hazard.", proof: "Electrical Panel Audit" },
                { id: "FAC-MAIN-05", description: "Check and repair any damaged seating or carpets.", priority: "High", riskLevel: "Medium", consequence: "Damaged seats are uncomfortable and look unprofessional.", proof: "Repair Log" },
                { id: "FAC-MAIN-06", description: "Conduct a general building safety walkthrough weekly.", priority: "High", riskLevel: "High", consequence: "Proactively identifies and mitigates potential safety hazards.", proof: "Safety Walkthrough Log" },
                { id: "FAC-MAIN-07", description: "Maintain exterior lighting and signage.", priority: "High", riskLevel: "Medium", consequence: "Ensures the cinema is visible and looks appealing from the outside.", proof: "Exterior Lighting Log" },
                { id: "FAC-MAIN-08", description: "Schedule and oversee third-party vendor maintenance.", priority: "High", riskLevel: "High", consequence: "Ensures specialized equipment (like elevators) is maintained correctly.", proof: "Vendor Service Reports" },
                { id: "FAC-MAIN-09", description: "Keep a log of all maintenance activities.", priority: "High", riskLevel: "High", consequence: "A legal record of due diligence for safety and compliance.", proof: "Master Maintenance Log" },
                { id: "FAC-MAIN-10", description: "Manage a stock of critical spare parts.", priority: "High", riskLevel: "High", consequence: "Having a spare projector bulb can prevent a show from being cancelled.", proof: "Spare Parts Inventory" }
            ]
        }
    ]
};
