
import type { PremiumPack } from "@/lib/premium-packs";

export const cinema_operations_pack: PremiumPack = {
    id: 'cinema_operations_pack',
    title: "Cinema Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d863f69b-8919-4115-b778-831d17d120fb',
    category: "Entertainment & Events",
    description: "The definitive Sovereign v11.9 technical engine for cinema groups and multiplexes. Hardening 200+ control points from Projection QC to Concession Yield.",
    heroHeadline: "Stop Projection Failures and Concession Leakage.",
    heroSubheadline: "Track technical readiness, auditorium standards, and concession yields across every screen in your group.",
    pricingUrgency: "A single projection failure during a blockbuster opening costs 100x more than this system.",
    consultingAnchor: 5000,
    icon: "popcorn",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Multiplex Owners", "Operations Heads", "Cinema GMs", "Technical Directors", "Concession Managers"],
    sampleItems: [
        { text: "<strong>Projection Sound QC</strong>: DCP ingest and KDM validity tests pre-release to ensure zero black-screen events.", icon: "projector" },
        { text: "<strong>Concession Yield Logic</strong>: Corn-to-bucket reconciliation and combo sales audits to stop high-value leakage.", icon: "banknote" },
        { text: "<strong>Zero-Fail Fire Safety</strong>: Mandatory daily physical checks of every exit push-bar and alarm zone.", icon: "flame" },
        { text: "<strong>Auditorium Hygiene</strong>: Between-show seat cleaning audits and deep-clean theater scores.", icon: "sparkles" },
        { text: "<strong>Digital Reputation Hub</strong>: 24h response pulse for BMS and Google reviews to protect rankings.", icon: "star" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions that stay even when your best projectionist resigns.", icon: "history" }
    ],
    checklists: [
        {
            title: "Group Managing Director Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Group Managing Director",
            summary: "High-level strategic oversight of cinema group risk and profit.",
            icon: "crown",
            tasks: [
                { id: "C-EXE-01", technicalProtocol: "Portfolio Performance Synthesis", floorAction: "Review 'Empire Mood' scores and ticket sales trends across all units.", priority: "High", riskLevel: "Low", consequence: "Operational drift and loss of multi-unit focus.", proof: "Console Review" },
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
                { id: "C-EXE-15", technicalProtocol: "Social Security (PF/ESI) Audit", floorAction: "Check if PF and ESI payments for staff are updated.", priority: "High", riskLevel: "High", consequence: "Legal penalties and labor citations.", proof: "Compliance File" },
                { id: "C-EXE-16", technicalProtocol: "Bulk Procurement Parity", floorAction: "Compare vendor rates for bulk popcorn kernels and oil.", priority: "Medium", riskLevel: "Low", consequence: "Inflated procurement costs.", proof: "Vendor Log" },
                { id: "C-EXE-17", technicalProtocol: "Technical Sinking Fund Audit", floorAction: "Verify projector lamp replacement fund status.", priority: "Medium", riskLevel: "Medium", consequence: "Sudden blackout and show cancellation.", proof: "Finance Note" },
                { id: "C-EXE-18", technicalProtocol: "Blind Cash Verification", floorAction: "Audit petty cash surprise count at main box office.", priority: "Medium", riskLevel: "High", consequence: "Small-scale internal theft.", proof: "Audit Note" },
                { id: "C-EXE-19", technicalProtocol: "Personnel Toxicity Pulse", floorAction: "Review resignation exit comments: identify toxic zones.", priority: "Low", riskLevel: "Low", consequence: "High staff turnover.", proof: "Exit Notes" },
                { id: "C-EXE-20", technicalProtocol: "Final Board Sign-off", floorAction: "Execute weekly board summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of board-level oversight.", proof: "Signed Summary" }
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
                { id: "C-GMC-03", technicalProtocol: "Auditorium Thermal Pulse", floorAction: "Inspect auditorium temperature during peak occupancy.", priority: "High", riskLevel: "Low", consequence: "Guest complaints and early exits.", proof: "Temp Note" },
                { id: "C-GMC-04", technicalProtocol: "Restroom Hygiene Governance", floorAction: "Audit restroom hygiene logs every hour.", priority: "High", riskLevel: "Low", consequence: "Major driver of negative reviews.", proof: "Hourly Sheet" },
                { id: "C-GMC-05", technicalProtocol: "Front-line Grooming Audit", floorAction: "Verify staff grooming: check name tags and clean uniforms.", priority: "Low", riskLevel: "Low", consequence: "Professional brand image drop.", proof: "Briefing Log" },
                { id: "C-GMC-06", technicalProtocol: "Blockbuster Briefing", floorAction: "Brief team on today's movie lineup and F&B combos.", priority: "High", riskLevel: "Low", consequence: "Uninformed staff and lost upsells.", proof: "Briefing Sheet" },
                { id: "C-GMC-07", technicalProtocol: "BMS/Google Review Triage", floorAction: "Check status of 'Open' guest feedback from BookMyShow.", priority: "High", riskLevel: "High", consequence: "Escalated viral PR damage.", proof: "Feedback Log" },
                { id: "C-GMC-08", technicalProtocol: "VIP Seat Mechanical Test", floorAction: "Inspect recliners in Screen 1 for mechanical function.", priority: "High", riskLevel: "Low", consequence: "Guest refund requests.", proof: "Visual Audit" },
                { id: "C-GMC-09", technicalProtocol: "Lobby Wi-Fi Performance", floorAction: "Check Wi-Fi portal login speed in the lobby.", priority: "Low", riskLevel: "Low", consequence: "Immediate guest complaints.", proof: "Phone Test" },
                { id: "C-GMC-10", technicalProtocol: "Parking Barrier Logic", floorAction: "Verify parking barrier functionality and lighting.", priority: "Medium", riskLevel: "Medium", consequence: "Security risk and exit gridlock.", proof: "Photo" },
                { id: "C-GMC-11", technicalProtocol: "VIP Arrival Greet", floorAction: "Identify VIP/Influencer arrivals for personalized greet.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-profile PR.", proof: "Roster Match" },
                { id: "C-GMC-12", technicalProtocol: "3D Asset Readiness", floorAction: "Check availability of 3D glasses: cleaned and packed.", priority: "High", riskLevel: "Low", consequence: "Lost revenue during 3D shows.", proof: "Stock Check" },
                { id: "C-GMC-13", technicalProtocol: "Exterior/Back-alley Sanitation", floorAction: "Inspect back-alley for overflowing waste bins.", priority: "Low", riskLevel: "High", consequence: "Pests and odors reaching the lobby.", proof: "Walkthrough" },
                { id: "C-GMC-14", technicalProtocol: "Box Office Connectivity", floorAction: "Verify Lobby Wi-Fi password is visible at Box Office.", priority: "Low", riskLevel: "Low", consequence: "Service friction.", proof: "Visual Check" },
                { id: "C-GMC-15", technicalProtocol: "Furniture Integrity Scan", floorAction: "Audit lobby furniture for any tears or damage.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Visual Audit" },
                { id: "C-GMC-16", technicalProtocol: "Staff Breakroom Hygiene", floorAction: "Check staff break-room and change-room hygiene.", priority: "Low", riskLevel: "Low", consequence: "Low staff morale.", proof: "Cleaning Note" },
                { id: "C-GMC-17", technicalProtocol: "Wet-Floor Signage Shield", floorAction: "Verify availability of 'Wet Floor' signs at every screen.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Stock Note" },
                { id: "C-GMC-18", technicalProtocol: "Parking Zone Safety", floorAction: "Check lighting and guard presence in the parking zone.", priority: "Medium", riskLevel: "Medium", consequence: "Security risk to guests.", proof: "Photo" },
                { id: "C-GMC-19", technicalProtocol: "Breakdown Response Pulse", floorAction: "Review P1 breakdown TAT for current shift.", priority: "High", riskLevel: "Low", consequence: "Loss of operational focus.", proof: "Job Log" },
                { id: "C-GMC-20", technicalProtocol: "Final Daily Command Sign-off", floorAction: "Execute daily operational sign-off initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Log" }
            ]
        },
        {
            title: "Concession & Yield Engine",
            department: "F&B",
            frequency: "Daily",
            role: "Concession Manager",
            summary: "Protects high-margin F&B revenue and food safety.",
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
            title: "Projection & Sound QC",
            department: "Technical",
            frequency: "Daily",
            role: "Chief Projectionist",
            summary: "Zero-fail protocols for technical media and sound.",
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
                { id: "C-PRO-09", technicalProtocol: "Emergency Intercom Test", floorAction: "Test intercom dial-tone from Projection to GM Office.", priority: "Low", riskLevel: "Low", consequence: "Comms failure during technical crisis.", proof: "Dial Test" },
                { id: "C-PRO-10", technicalProtocol: "Technical Closure Logic", floorAction: "Final signature that all projectors are in standby.", priority: "High", riskLevel: "Low", consequence: "Equipment left on overnight; wasted lamp life.", proof: "Signed Log" }
            ]
        },
        {
            title: "GS & Digital Reputation",
            department: "Guest Services",
            frequency: "Daily",
            role: "GS & Reputation Lead",
            summary: "Ticketing integrity, digital ORM, and first impressions.",
            icon: "star",
            tasks: [
                { id: "C-GS-01", technicalProtocol: "Review Response Pulse", floorAction: "Reply to all BMS and Google reviews in < 24h.", priority: "High", riskLevel: "Medium", consequence: "Damaged brand and lower ranking.", proof: "Dashboard" },
                { id: "C-GS-02", technicalProtocol: "Promo Code Validation", floorAction: "Verify 'Live' promo codes are functional on the site.", priority: "High", riskLevel: "Low", consequence: "Guest frustration at payment gate.", proof: "Test Booking" },
                { id: "C-GS-03", technicalProtocol: "Social Media Inquiry TAT", floorAction: "Answer all DMs/WhatsApp inquiries < 30 mins.", priority: "Medium", riskLevel: "Low", consequence: "Lost booking revenue.", proof: "Inbox Clear" },
                { id: "C-GS-04", technicalProtocol: "Free-Ticket Quota Audit", floorAction: "Audit 'Comp-Ticket' register for managerial sign-off.", priority: "High", riskLevel: "High", consequence: "Internal fraud and ticketing leakage.", proof: "Quota Registry" },
                { id: "C-GS-05", technicalProtocol: "Holiday Schedule Sync", floorAction: "Update Google Maps for holiday showtimes and hours.", priority: "High", riskLevel: "Low", consequence: "Guests arrive to a closed theater.", proof: "Mobile Check" }
            ]
        },
        {
            title: "Auditorium Sanitation",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Housekeeping Lead",
            summary: "theater hygiene and waste-bay command.",
            icon: "sparkles",
            tasks: [
                { id: "C-HK-01", technicalProtocol: "Inter-show Sweep Audit", floorAction: "Verify seat cleaning between all shows.", priority: "High", riskLevel: "Low", consequence: "Number one driver of 1-star reviews.", proof: "Sweep Log" },
                { id: "C-HK-02", technicalProtocol: "Cup-holder Sanitation Scan", floorAction: "Check cup-holders for stickiness or debris.", priority: "Medium", riskLevel: "Low", consequence: "Unhygienic guest experience.", proof: "Visual Audit" },
                { id: "C-HK-03", technicalProtocol: "Restroom Hourly Pulse", floorAction: "Verify cleaning frequency matches 60-min cycle.", priority: "High", riskLevel: "Low", consequence: "Mass guest dissatisfaction.", proof: "Hourly Sheet" },
                { id: "C-HK-04", technicalProtocol: "Waste Bay Odor Control", floorAction: "Empty concession trash bins before busy intervals.", priority: "Medium", riskLevel: "Medium", consequence: "Pests and bad odors.", proof: "Log Review" },
                { id: "C-HK-05", technicalProtocol: "Janitorial Shift Closure", floorAction: "Final deep-clean sign-off for auditorium floors.", priority: "High", riskLevel: "Low", consequence: "Sticky floors at opening.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Engineering & Assets",
            department: "Maintenance",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "Infrastructure uptime and backbone protection.",
            icon: "wrench",
            tasks: [
                { id: "C-MNT-01", technicalProtocol: "MEP Chiller Plant Monitor", floorAction: "Check HVAC units and log auditorium temps.", priority: "High", riskLevel: "Medium", consequence: "Guest discomfort during peak occupancy.", proof: "BMS Reading" },
                { id: "C-MNT-02", technicalProtocol: "Emergency Power Readiness", floorAction: "Inspect DG fuel level and battery charge status.", priority: "High", riskLevel: "High", consequence: "Total blackout and refund crisis.", proof: "Fuel Log" },
                { id: "C-MNT-03", technicalProtocol: "Seat Mechanical Audit", floorAction: "Repair identified recliners or broken armrests.", priority: "Medium", riskLevel: "Low", consequence: "Unusable inventory.", proof: "Job Card" },
                { id: "C-MNT-04", technicalProtocol: "Stairwell Emergency Lights", floorAction: "Verify battery run for all exit signs.", priority: "High", riskLevel: "High", consequence: "Panic during a power flip.", proof: "Test Log" },
                { id: "C-MNT-05", technicalProtocol: "Plumbing Leak Patrol", floorAction: "Inspect bathroom traps and kitchen drains for leaks.", priority: "Medium", riskLevel: "Medium", consequence: "Water damage and bad smells.", proof: "Walkthrough" }
            ]
        },
        {
            title: "Crowd Control & Security",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and governs crowd flow.",
            icon: "shield-check",
            tasks: [
                { id: "C-SEC-01", technicalProtocol: "CCTV Sync Integrity", floorAction: "Verify 30-day recording backup and focal points.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or suits.", proof: "System Screen" },
                { id: "C-SEC-02", technicalProtocol: "Screen Entry ID Capture", floorAction: "Audit register for A-rated film age verification.", priority: "High", riskLevel: "High", consequence: "Massive regulatory fines and PR crisis.", proof: "Registry Audit" },
                { id: "C-SEC-03", technicalProtocol: "Guard Sobriety Pulse", floorAction: "Random alcohol check for night shift security.", priority: "High", riskLevel: "High", consequence: "Vulnerable venue perimeter.", proof: "Test Note" },
                { id: "C-SEC-04", technicalProtocol: "Crowd Flow Stanchions", floorAction: "Verify layout of queue ropes at Box Office.", priority: "Low", riskLevel: "Low", consequence: "Disorganized lobby gridlock.", proof: "Visual Check" },
                { id: "C-SEC-05", technicalProtocol: "Loading Bay Lockdown", floorAction: "Confirm all shutters locked at end of concession shift.", priority: "High", riskLevel: "High", consequence: "Overnight stock theft.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Safety & Life Protection",
            department: "Safety",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Non-negotiable fire safety and exit protocols.",
            icon: "shield-alert",
            tasks: [
                { id: "C-SAF-01", technicalProtocol: "Fire Exit Clearance (CCP)", floorAction: "Verify 100% of fire escapes are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment (Never-event).", proof: "Patrol Log" },
                { id: "C-SAF-02", technicalProtocol: "Fire Gauge Validation", floorAction: "Confirm needle is in GREEN zone for all units.", priority: "High", riskLevel: "High", consequence: "Zero fire fighting capability.", proof: "Gauge Log" },
                { id: "C-SAF-03", technicalProtocol: "PA System Volume Test", floorAction: "Test emergency announcements in a random screen.", priority: "High", riskLevel: "Medium", consequence: "Evacuation chaos.", proof: "Sound Test" }
            ]
        },
        {
            title: "Sourcing & Store Logistics",
            department: "Stores",
            frequency: "Weekly",
            role: "Stores Lead",
            summary: "Profit protection at the entry point.",
            icon: "truck",
            tasks: [
                { id: "C-LOG-01", technicalProtocol: "Concession Receiving Audit", floorAction: "Check bulk oil and syrup expiry on arrival.", priority: "High", riskLevel: "Medium", consequence: "Accepting compromised food.", proof: "Receiving Note" },
                { id: "C-LOG-02", technicalProtocol: "Weighing Scale Test", floorAction: "Test scales with 1kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing stock weight.", proof: "Calibration Log" },
                { id: "C-LOG-03", technicalProtocol: "Vendor FSSAI Verify", floorAction: "Verify FSSAI license of local snack vendors.", priority: "High", riskLevel: "High", consequence: "Legal liability for unsafe sourcing.", proof: "Cert File" }
            ]
        },
        {
            title: "Finance & Cash Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance Lead",
            summary: "Revenue reconciliation and profit protection.",
            icon: "banknote",
            tasks: [
                { id: "C-FIN-01", technicalProtocol: "Revenue Reconcile Pulse", floorAction: "Match cash in hand to POS daily report.", priority: "High", riskLevel: "High", consequence: "Internal cashier theft.", proof: "Settlement Log" },
                { id: "C-FIN-02", technicalProtocol: "Void Bill Authorization", floorAction: "Manager sign-off on 100% of cancelled tickets.", priority: "High", riskLevel: "Medium", consequence: "Theft masked as errors.", proof: "POS Audit" },
                { id: "C-FIN-03", technicalProtocol: "Petty Cash Blind Count", floorAction: "Physical count of coins vs voucher.", priority: "Medium", riskLevel: "High", consequence: "Small-scale theft.", proof: "Audit Note" }
            ]
        },
        {
            title: "Personnel & Certs",
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
