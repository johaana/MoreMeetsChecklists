
import type { PremiumPack } from "@/lib/premium-packs";

export const cinema_operations_pack: PremiumPack = {
    id: 'cinema_operations_pack',
    title: "Cinema Operations System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 999,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d863f69b-8919-4115-b778-831d17d120fb',
    category: "Entertainment & Events",
    description: "The definitive Sovereign v11.9 engine for cinema groups and multiplexes. Hardening 125 technical control points to protect crowd safety, experience quality, and revenue integrity.",
    heroHeadline: "Protect Crowd Safety, Experience Quality, and Revenue Integrity.",
    heroSubheadline: "Track technical readiness, auditorium standards, and concession yields across every screen in your group.",
    pricingUrgency: "A single projection failure during a blockbuster opening or one crowd incident costs 100x more than this system.",
    consultingAnchor: 5000,
    icon: "popcorn",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Multiplex Owners", "Operations Heads", "Cinema GMs", "Technical Directors", "Concession Managers"],
    sampleItems: [
        { text: "<strong>Show Readiness Protocol</strong>: Zero-fail checks for DCP ingest, KDM validity, and sound balance before every show.", icon: "projector" },
        { text: "<strong>Revenue Leakage Shield</strong>: Corn-to-bucket yield logic, void-bill audits, and free-pass misuse tracking.", icon: "banknote" },
        { text: "<strong>Crowd Surge Control</strong>: Peak-hour deployment plans and emergency exit physical tests to prevent public safety failures.", icon: "users" },
        { text: "<strong>Projection Uptime Check</strong>: Critical monitoring of lamp hours, server sync, and playback fallback systems.", icon: "activity" },
        { text: "<strong>Auditorium Comfort (AC)</strong>: Hourly thermal logs to ensure optimal guest comfort during high-occupancy shows.", icon: "thermometer" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure safety standards stay if key technical staff resign.", icon: "history" }
    ],
    checklists: [
        {
            title: "Group Executive Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Group Managing Director",
            summary: "High-level strategic oversight of cinema group risk, profit, and network standards.",
            icon: "crown",
            tasks: [
                { id: "C-EXE-01", technicalProtocol: "Network Performance Synthesis", floorAction: "Review 'Empire Mood' scores and ticket sales trends across all units.", priority: "High", riskLevel: "Low", consequence: "Operational drift and loss of multi-unit focus.", proof: "Console Review" },
                { id: "C-EXE-02", technicalProtocol: "Concession Margin Shield", floorAction: "Match weekly concession payout report against actual bank deposits.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue leakage.", proof: "Ledger Match" },
                { id: "C-EXE-03", technicalProtocol: "Statutory Affiliation Audit", floorAction: "Check if Entertainment Tax filings are up to date for all sites.", priority: "High", riskLevel: "High", consequence: "Government fines and potential theater sealing.", proof: "Tax Receipt" },
                { id: "C-EXE-04", technicalProtocol: "Brand Standard Mystery Audit", floorAction: "Audit mystery auditor scores: focus on 'Red' safety failures.", priority: "Medium", riskLevel: "Low", consequence: "Lowering of brand standards.", proof: "Audit Report" },
                { id: "C-EXE-05", technicalProtocol: "Life Safety NOC Validity", floorAction: "Verify Fire License (NOC) validity for all screens in the group.", priority: "High", riskLevel: "High", consequence: "Catastrophic legal liability and closure.", proof: "NOC Certificate" },
                { id: "C-EXE-06", technicalProtocol: "Utility Intensity Benchmark", floorAction: "Review electricity spikes: identify screens wasting AC during off-peak.", priority: "Low", riskLevel: "Low", consequence: "Wasted overhead costs.", proof: "P&L Note" },
                { id: "C-EXE-07", technicalProtocol: "Management Floor Presence Audit", floorAction: "Audit unit GMs' floor-walk logs during blockbuster weekends.", priority: "Medium", riskLevel: "Low", consequence: "Management disconnect during peak crowds.", proof: "Roster Log" },
                { id: "C-EXE-08", technicalProtocol: "Sentinel Incident Review", floorAction: "Review 'Major Incident' log: focus on projection failures.", priority: "High", riskLevel: "High", consequence: "Recurring technical loss and PR damage.", proof: "Incident Log" },
                { id: "C-EXE-09", technicalProtocol: "CAPEX Milestone Pulse", floorAction: "Check status of scheduled VIP recliner or sound system upgrades.", priority: "Medium", riskLevel: "Medium", consequence: "Budget overruns and delayed launch.", proof: "Project Log" },
                { id: "C-EXE-10", technicalProtocol: "Public Liability Shield", floorAction: "Verify insurance coverage for 'Public Liability' is active.", priority: "High", riskLevel: "High", consequence: "Financial ruin during a crowd incident.", proof: "Policy File" },
                { id: "C-EXE-11", technicalProtocol: "Labor Law Compliance Audit", floorAction: "Audit staff payroll: verify OT payments for midnight shows.", priority: "High", riskLevel: "Medium", consequence: "Employee disputes and legal risk.", proof: "Payroll Register" },
                { id: "C-EXE-12", technicalProtocol: "Network Reputation CSAT", floorAction: "Check group ranking on BookMyShow and Google Maps.", priority: "High", riskLevel: "Low", consequence: "Loss of bookings if scores drop.", proof: "CSAT Report" },
                { id: "C-EXE-13", technicalProtocol: "IP & Distributor Governance", floorAction: "Verify all NDAs are signed by visiting film distributors.", priority: "High", riskLevel: "Medium", consequence: "Leakage of film industry trade secrets.", proof: "Signed File" },
                { id: "C-EXE-14", technicalProtocol: "Training Compliance Pulse", floorAction: "Review 'Training Matrix' for new concession and usher staff.", priority: "Medium", riskLevel: "Low", consequence: "Service decay and hygiene risk.", proof: "Matrix File" },
                { id: "C-EXE-15", technicalProtocol: "Social Security (PF/ESI) Audit", floorAction: "Check if PF and ESI payments for staff are updated.", priority: "High", riskLevel: "High", consequence: "Legal penalties and labor citations.", proof: "Compliance File" }
            ]
        },
        {
            title: "Unit Command & GM Daily",
            department: "Operations",
            frequency: "Daily",
            role: "Cinema General Manager",
            summary: "Theater readiness, ambiance, and guest flow command.",
            icon: "clapperboard",
            tasks: [
                { id: "C-GMC-01", technicalProtocol: "Lobby Ambiance Sensory Audit", floorAction: "Check lobby Scent, Music, and Temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor first impression for guests.", proof: "Daily Log" },
                { id: "C-GMC-02", technicalProtocol: "Digital Signage Integrity", floorAction: "Verify all digital posters and trailers are playing correctly.", priority: "Medium", riskLevel: "Low", consequence: "Lost marketing and promo revenue.", proof: "Visual Check" },
                { id: "C-GMC-03", technicalProtocol: "Restroom Hygiene Governance", floorAction: "Audit restroom hygiene logs every hour.", priority: "High", riskLevel: "Low", consequence: "Major driver of negative reviews.", proof: "Hourly Sheet" },
                { id: "C-GMC-04", technicalProtocol: "Front-line Grooming Audit", floorAction: "Verify staff grooming: check name tags and clean uniforms.", priority: "Low", riskLevel: "Low", consequence: "Professional brand image drop.", proof: "Briefing Log" },
                { id: "C-GMC-05", technicalProtocol: "Blockbuster Briefing", floorAction: "Brief team on today's movie lineup and F&B combos.", priority: "High", riskLevel: "Low", consequence: "Uninformed staff and lost upsells.", proof: "Briefing Sheet" },
                { id: "C-GMC-06", technicalProtocol: "BMS/Google Review Triage", floorAction: "Check status of 'Open' guest feedback from BookMyShow.", priority: "High", riskLevel: "High", consequence: "Escalated viral PR damage.", proof: "Feedback Log" },
                { id: "C-GMC-07", technicalProtocol: "3D Asset Readiness", floorAction: "Check availability of 3D glasses: cleaned and packed.", priority: "High", riskLevel: "Low", consequence: "Lost revenue during 3D shows.", proof: "Stock Check" },
                { id: "C-GMC-08", technicalProtocol: "Box Office Connectivity", floorAction: "Verify Lobby Wi-Fi password is visible at Box Office.", priority: "Low", riskLevel: "Low", consequence: "Service friction.", proof: "Visual Check" },
                { id: "C-GMC-09", technicalProtocol: "Wet-Floor Signage Shield", floorAction: "Verify availability of 'Wet Floor' signs at every screen.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Stock Note" },
                { id: "C-GMC-10", technicalProtocol: "Final Daily Command Sign-off", floorAction: "Execute daily operational sign-off initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Log" }
            ]
        },
        {
            title: "Concession & Yield Shield",
            department: "F&B",
            frequency: "Daily",
            role: "Concession Manager",
            summary: "Protects high-margin F&B revenue and ensures food safety.",
            icon: "utensils-crossed",
            tasks: [
                { id: "C-CON-01", technicalProtocol: "Corn-to-Bucket Yield Analysis", floorAction: "Reconcile raw corn usage vs buckets sold (Target 1:40).", priority: "High", riskLevel: "Low", consequence: "Massive silent profit leakage.", proof: "Yield Sheet" },
                { id: "C-CON-02", technicalProtocol: "Cold Chain Integrity (CCP)", floorAction: "Log fridge temps for milk, cheese, and meats.", priority: "High", riskLevel: "High", consequence: "Mass food poisoning outbreak.", proof: "Temp Log" },
                { id: "C-CON-03", technicalProtocol: "POS Transactional Audit", floorAction: "Audit 'Voided' bills: check reason codes for cancellations.", priority: "High", riskLevel: "Medium", consequence: "Cashier-driven internal theft.", proof: "POS Audit" },
                { id: "C-CON-04", technicalProtocol: "Warm Holding Validation", floorAction: "Verify popcorn warmer temp is above 65°C.", priority: "High", riskLevel: "Medium", consequence: "Soggy popcorn and guest complaints.", proof: "Visual Check" },
                { id: "C-CON-05", technicalProtocol: "Digital Menu Allergen Labels", floorAction: "Check allergen markers on all digital menu boards.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction and legal suit.", proof: "Menu Audit" },
                { id: "C-CON-06", technicalProtocol: "Nozzle Sanitation Protocol", floorAction: "Deep clean and sanitize the nacho-cheese dispenser nozzle.", priority: "High", riskLevel: "Medium", consequence: "Bacteria growth.", proof: "Cleaning Note" },
                { id: "C-CON-07", technicalProtocol: "Combo Sales Integrity", floorAction: "Match total combo sales against individual item inventory.", priority: "High", riskLevel: "Medium", consequence: "Untracked profit loss.", proof: "Inventory Match" },
                { id: "C-CON-08", technicalProtocol: "Consumable Stock Pulse", floorAction: "Check availability of bill rolls and napkins at counters.", priority: "Low", riskLevel: "Low", consequence: "Service halt during busy intervals.", proof: "Stock Audit" },
                { id: "C-CON-09", technicalProtocol: "Handwashing Compliance", floorAction: "Verify concession staff handwashing frequency.", priority: "High", riskLevel: "Medium", consequence: "Food contamination.", proof: "Briefing Log" },
                { id: "C-CON-10", technicalProtocol: "Aggregator Reconcile Swiggy/Zomato", floorAction: "Match app orders for the shift against actual dispatch.", priority: "High", riskLevel: "Medium", consequence: "Unbilled revenue loss.", proof: "Match Note" }
            ]
        },
        {
            title: "Projection & Technical Uptime",
            department: "Technical",
            frequency: "Daily",
            role: "Chief Projectionist",
            summary: "Zero-fail protocols for technical media, sound, and server uptime.",
            icon: "projector",
            tasks: [
                { id: "C-PRO-01", technicalProtocol: "DCP Ingest Verification", floorAction: "Verify movie file is 100% loaded and checksum passed.", priority: "High", riskLevel: "High", consequence: "Black screen during show (Full refund).", proof: "System Log" },
                { id: "C-PRO-02", technicalProtocol: "KDM Validity Audit", floorAction: "Confirm digital decryption keys are active for the week.", priority: "High", riskLevel: "High", consequence: "Movie fails to play.", proof: "Key Status" },
                { id: "C-PRO-03", technicalProtocol: "Acoustic Balance Test", floorAction: "Test 7.1 sound balance in all surround zones.", priority: "High", riskLevel: "Medium", consequence: "Poor guest audio experience.", proof: "Sound Test" },
                { id: "C-PRO-04", technicalProtocol: "Projector Lamp Monitoring", floorAction: "Log current lamp-hours vs. replacement baseline.", priority: "Medium", riskLevel: "Medium", consequence: "Dull picture and lamp explosion risk.", proof: "Lamp Log" },
                { id: "C-PRO-05", technicalProtocol: "UPS Load Resilience", floorAction: "Verify UPS bank load capacity for a 10-min backup.", priority: "High", riskLevel: "High", consequence: "Equipment damage during power spike.", proof: "Voltage Log" },
                { id: "C-PRO-06", technicalProtocol: "Optical Lens Sanitation", floorAction: "Clean projector lens with approved air-blower.", priority: "Low", riskLevel: "Low", consequence: "Soft focus and image blurring.", proof: "Visual Check" },
                { id: "C-PRO-07", technicalProtocol: "Server Room Thermal Pulse", floorAction: "Log server room AC temp (Target exactly 20°C).", priority: "High", riskLevel: "High", consequence: "System crash and hardware failure.", proof: "Temp Reading" },
                { id: "C-PRO-08", technicalProtocol: "Aspect Ratio Sync", floorAction: "Verify mask motors for 16:9 vs Scope screen sync.", priority: "Low", riskLevel: "Low", consequence: "Incorrect movie display format.", proof: "Visual Audit" },
                { id: "C-PRO-09", technicalProtocol: "Emergency Playback Fallback", floorAction: "Verify availability of backup media drive for today's show.", priority: "High", riskLevel: "Medium", consequence: "Extended downtime if server fails.", proof: "Hardware Check" },
                { id: "C-PRO-10", technicalProtocol: "Subtitle Sync Verification", floorAction: "Verify subtitle file loads correctly for non-native media.", priority: "Medium", riskLevel: "Low", consequence: "Guest walk-outs and refund requests.", proof: "Visual Scan" }
            ]
        },
        {
            title: "Show Readiness & Experience",
            department: "Operations",
            frequency: "Per Show",
            role: "Floor Supervisor",
            summary: "Audit-grade readiness for auditorium comfort and punctuality.",
            icon: "eye",
            tasks: [
                { id: "C-RDY-01", technicalProtocol: "Auditorium Thermal Pulse", floorAction: "Log AC temp in screen 10 mins before show (Target 23°C).", priority: "High", riskLevel: "Low", consequence: "Guest discomfort during peak occupancy.", proof: "BMS Reading" },
                { id: "C-RDY-02", technicalProtocol: "Seat Mechanical Audit", floorAction: "Check recliners and armrests for functionality.", priority: "High", riskLevel: "Low", consequence: "Guest dissatisfaction and refund requests.", proof: "Visual Audit" },
                { id: "C-RDY-03", technicalProtocol: "Show Start Punctuality", floorAction: "Verify movie starts within 2 mins of scheduled time.", priority: "Medium", riskLevel: "Low", consequence: "Logistics gridlock for subsequent shows.", proof: "TAT Log" },
                { id: "C-RDY-04", technicalProtocol: "Auditorium Sound Level Check", floorAction: "Verify audio levels during trailers (Target 85dB).", priority: "High", riskLevel: "Medium", consequence: "Hearing fatigue or lack of impact.", proof: "Sound Meter" },
                { id: "C-RDY-05", technicalProtocol: "Inter-show Sweep Audit", floorAction: "Verify seat cleaning and trash removal between shows.", priority: "High", riskLevel: "Low", consequence: "Major negative review driver.", proof: "Sweep Log" }
            ]
        },
        {
            title: "Guest Flow & Crowd Control",
            department: "Operations",
            frequency: "Daily",
            role: "Lobby Manager",
            summary: "Governs ticketing integrity and crowd movement during peak intervals.",
            icon: "users",
            tasks: [
                { id: "C-FLO-01", technicalProtocol: "Ticket Scan Uptime", floorAction: "Verify all handheld scanners are charged and synced.", priority: "High", riskLevel: "Medium", consequence: "Lobby gridlock and show delays.", proof: "System Sync" },
                { id: "C-FLO-02", technicalProtocol: "Interval Rush Prep", floorAction: "Assign 100% concession staff to counters 5 mins pre-interval.", priority: "High", riskLevel: "Medium", consequence: "Lost revenue during the 15-min peak.", proof: "Deployment Log" },
                { id: "C-FLO-03", technicalProtocol: "Exit Crowd Flow", floorAction: "Ensure all exit doors are held open 5 mins pre-credits.", priority: "High", riskLevel: "High", consequence: "Stairwell congestion and safety risk.", proof: "Patrol Note" },
                { id: "C-FLO-04", technicalProtocol: "Queue Stanchion Layout", floorAction: "Verify symmetry of queue ropes at Box Office.", priority: "Low", riskLevel: "Low", consequence: "Disorganized lobby appearance.", proof: "Visual Check" },
                { id: "C-FLO-05", technicalProtocol: "Interval Restroom Pulse", floorAction: "Deploy janitorial standby at restrooms during intervals.", priority: "High", riskLevel: "Low", consequence: "Hygiene breakdown during peak use.", proof: "HK Roster" }
            ]
        },
        {
            title: "Public Safety & Life Protection",
            department: "Safety",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Non-negotiable fire safety and exit protocols.",
            icon: "shield-alert",
            tasks: [
                { id: "C-SAF-01", technicalProtocol: "Fire Exit Clearance (CCP)", floorAction: "Verify 100% of fire escapes are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment (Never-event).", proof: "Patrol Log" },
                { id: "C-SAF-02", technicalProtocol: "Fire Gauge Validation", floorAction: "Confirm needle is in GREEN zone for all units.", priority: "High", riskLevel: "High", consequence: "Zero firefighting capability.", proof: "Gauge Log" },
                { id: "C-SAF-03", technicalProtocol: "Emergency Light Run", floorAction: "Verify battery run for all stairwell signs.", priority: "High", riskLevel: "High", consequence: "Panic during a power flip.", proof: "Test Log" },
                { id: "C-SAF-04", technicalProtocol: "Lost Child Protocol Readiness", floorAction: "Brief guards on 'Code Yellow' response zones.", priority: "High", riskLevel: "High", consequence: "Serious institutional negligence.", proof: "Briefing Log" },
                { id: "C-SAF-05", technicalProtocol: "Panic-Bar Physical Test", floorAction: "Physically push-test 5 random fire exit bars.", priority: "High", riskLevel: "High", consequence: "Mechanical exit failure during fire.", proof: "Test Log" }
            ]
        },
        {
            title: "Revenue & Finance Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance Lead",
            summary: "Revenue reconciliation and profit protection.",
            icon: "banknote",
            tasks: [
                { id: "C-FIN-01", technicalProtocol: "Revenue Reconcile Pulse", floorAction: "Match cash in hand to POS daily report.", priority: "High", riskLevel: "High", consequence: "Internal cashier theft.", proof: "Settlement Log" },
                { id: "C-FIN-02", technicalProtocol: "Void Bill Authorization", floorAction: "Manager sign-off on 100% of cancelled tickets.", priority: "High", riskLevel: "Medium", consequence: "Theft masked as errors.", proof: "POS Audit" },
                { id: "C-FIN-03", technicalProtocol: "Free-Pass Misuse Audit", floorAction: "Audit 'Comp-Ticket' register for authorized signatures.", priority: "High", riskLevel: "High", consequence: "Revenue leakage through fraud.", proof: "Registry Audit" },
                { id: "C-FIN-04", technicalProtocol: "Ticket Override Abuse", floorAction: "Review daily logs for unauthorized price overrides.", priority: "High", riskLevel: "Medium", consequence: "Untracked discount leakage.", proof: "System Log" },
                { id: "C-FIN-05", technicalProtocol: "Refund Fraud Shield", floorAction: "Verify 100% of 'Cash Refunds' match a manager-signed form.", priority: "High", riskLevel: "High", consequence: "Direct financial embezzlement.", proof: "Refund Forms" }
            ]
        },
        {
            title: "Auditorium Sanitation",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Housekeeping Lead",
            summary: "Theater hygiene and waste-bay command.",
            icon: "sparkles",
            tasks: [
                { id: "C-HK-01", technicalProtocol: "Cup-holder Sanitation Scan", floorAction: "Check cup-holders for stickiness or debris.", priority: "Medium", riskLevel: "Low", consequence: "Unhygienic guest experience.", proof: "Visual Audit" },
                { id: "C-HK-02", technicalProtocol: "Restroom Hourly Pulse", floorAction: "Verify cleaning frequency matches 60-min cycle.", priority: "High", riskLevel: "Low", consequence: "Mass guest dissatisfaction.", proof: "Hourly Sheet" },
                { id: "C-HK-03", technicalProtocol: "Waste Bay Odor Control", floorAction: "Empty concession trash bins before busy intervals.", priority: "Medium", riskLevel: "Medium", consequence: "Pests and bad odors.", proof: "Log Review" },
                { id: "C-HK-04", technicalProtocol: "Janitorial Shift Closure", floorAction: "Final deep-clean sign-off for auditorium floors.", priority: "High", riskLevel: "Low", consequence: "Sticky floors at opening.", proof: "Signed Summary" },
                { id: "C-HK-05", technicalProtocol: "Staff Breakroom Hygiene", floorAction: "Check staff break-room and change-room hygiene.", priority: "Low", riskLevel: "Low", consequence: "Low staff morale.", proof: "Cleaning Note" }
            ]
        },
        {
            title: "Engineering & MEP Assets",
            department: "Maintenance",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "Infrastructure uptime and backbone protection.",
            icon: "wrench",
            tasks: [
                { id: "C-MNT-01", technicalProtocol: "Emergency Power Readiness", floorAction: "Inspect DG fuel level and battery charge status.", priority: "High", riskLevel: "High", consequence: "Total blackout and refund crisis.", proof: "Fuel Log" },
                { id: "C-MNT-02", technicalProtocol: "Plumbing Leak Patrol", floorAction: "Inspect bathroom traps and kitchen drains for leaks.", priority: "Medium", riskLevel: "Medium", consequence: "Water damage and bad smells.", proof: "Walkthrough" },
                { id: "C-MNT-03", technicalProtocol: "Lobby AC Performance", floorAction: "Check discharge temp at main vents (Target 21°C).", priority: "Medium", riskLevel: "Low", consequence: "Hot lobby and irritable guests.", proof: "Temp Reading" },
                { id: "C-MNT-04", technicalProtocol: "Escalator Auto-Stop Test", floorAction: "Verify functionality of safety sensors.", priority: "High", riskLevel: "High", consequence: "Serious passenger injury.", proof: "Test Note" },
                { id: "C-MNT-05", technicalProtocol: "Technical Asset Tagging", floorAction: "Audit tags on new POS printers and routers.", priority: "Low", riskLevel: "Low", consequence: "Inventory theft.", proof: "Registry Match" }
            ]
        },
        {
            title: "Security & Crowd Surge",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and governs crowd flow.",
            icon: "shield-check",
            tasks: [
                { id: "C-SEC-01", technicalProtocol: "CCTV Sync Integrity", floorAction: "Verify 30-day recording backup and focal points.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or suits.", proof: "System Screen" },
                { id: "C-SEC-02", technicalProtocol: "Screen Entry ID Capture", floorAction: "Audit register for A-rated film age verification.", priority: "High", riskLevel: "High", consequence: "Massive regulatory fines and PR crisis.", proof: "Registry Audit" },
                { id: "C-SEC-03", technicalProtocol: "Crowd Surge Deployment", floorAction: "Assign guards to lobby and exit ramps 15 mins post-show.", priority: "High", riskLevel: "High", consequence: "Exit stampede or theft risk.", proof: "Roster Note" },
                { id: "C-SEC-04", technicalProtocol: "Late-Show Perimeter Seal", floorAction: "Confirm all external alley doors are locked post-10PM.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry and security risk.", proof: "Visual Audit" },
                { id: "C-SEC-05", technicalProtocol: "Guard Sobriety Pulse", floorAction: "Random alcohol check for night shift security.", priority: "High", riskLevel: "High", consequence: "Vulnerable venue perimeter.", proof: "Test Note" }
            ]
        },
        {
            title: "Personnel & Compliance",
            department: "HR",
            frequency: "Monthly",
            role: "HR Assistant",
            summary: "Staff competency and mandatory health certs.",
            icon: "graduation-cap",
            tasks: [
                { id: "C-HR-01", technicalProtocol: "Food Handler Health Matrix", floorAction: "Verify valid health certs for 100% of concession staff.", priority: "High", riskLevel: "Medium", consequence: "Regulatory fines.", proof: "Med File" },
                { id: "C-HR-02", technicalProtocol: "POSH Policy Display", floorAction: "Confirm policy is posted in staff break-rooms.", priority: "High", riskLevel: "High", consequence: "Legal liability.", proof: "Photo" },
                { id: "C-HR-03", technicalProtocol: "Uniform Laundry Audit", floorAction: "Inspect staff laundry turnaround time.", priority: "Low", riskLevel: "Low", consequence: "Dirty staff appearance.", proof: "Laundry Log" }
            ]
        }
    ]
};
