
import type { PremiumPack } from "@/lib/premium-packs";

export const cinema_operations_pack: PremiumPack = {
    id: 'cinema_operations_pack',
    title: "Cinema Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 999,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d863f69b-8919-4115-b778-831d17d120fb',
    category: "Entertainment & Events",
    description: "The definitive Sovereign v15.3 technical engine for multiplexes. Hardening 144 technical control points across Projection, Concession, and Public Safety.",
    icon: "popcorn",
    badgeText: "V15.3 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Multiplex Owners", "Operations Heads", "Cinema GMs", "Technical Directors", "Concession Managers"],
    sampleItems: [
        { text: "<strong>Projection Command</strong>: KDM key validity checks and lamp-hour threshold monitoring.", icon: "projector" },
        { text: "<strong>Concession Yield</strong>: Popcorn corn-to-bucket yield logic and syrup Brix calibration.", icon: "cup-soda" },
        { text: "<strong>Public Safety</strong>: Interval crowd surge control and emergency exit egress sweeps.", icon: "shield-alert" }
    ],
    checklists: [
        {
            title: "Executive Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Managing Director",
            summary: "High-level strategic oversight of cinema group risk and profit.",
            icon: "crown",
            tasks: [
                { id: "C-EXE-01", description: "Audit week-to-date ticket reconciliation vs bank deposits.", priority: "High", riskLevel: "High", consequence: "Massive silent revenue leakage.", proof: "Financial Match" },
                { id: "C-EXE-02", description: "Verify validity of Entertainment Tax and Fire NOC certs.", priority: "High", riskLevel: "High", consequence: "Government theater sealing.", proof: "License Registry" },
                { id: "C-EXE-03", description: "Review Public Liability insurance for 100% of screens.", priority: "High", riskLevel: "High", consequence: "Unmitigated catastrophe liability.", proof: "Policy File" },
                { id: "C-EXE-04", description: "Monitor CAPEX projects: Projector upgrades and seat replacement.", priority: "Medium", riskLevel: "Low", consequence: "Budget shocks.", proof: "Project Log" },
                { id: "C-EXE-05", description: "Audit 'Free-Pass' issuance against director authorization.", priority: "Medium", riskLevel: "Medium", consequence: "Internal ticketing fraud.", proof: "Pass Register" },
                { id: "C-EXE-06", description: "Review Mystery Shopper scores for interval ambiance.", priority: "Low", riskLevel: "Low", consequence: "Brand standard erosion.", proof: "Audit Report" },
                { id: "C-EXE-07", description: "Verify AMC renewal for Screen-1 IMAX/Dolby hardware.", priority: "High", riskLevel: "Medium", consequence: "Service lapse and uptime loss.", proof: "Contract Log" },
                { id: "C-EXE-08", description: "Analyze F&B contribution margin vs ticketing revenue.", priority: "Medium", riskLevel: "Low", consequence: "Poor profit diagnostics.", proof: "Margin Report" },
                { id: "C-EXE-09", description: "Triage P1 incidents in Group Liability Registry.", priority: "High", riskLevel: "High", consequence: "Escalated litigation.", proof: "Registry Audit" },
                { id: "C-EXE-10", description: "Verify group-wide POSH committee contact visibility.", priority: "High", riskLevel: "High", consequence: "Statutory non-compliance.", proof: "Visual Check" },
                { id: "C-EXE-11", description: "Review weekly payroll OT vs weekend blockbuster surges.", priority: "Medium", riskLevel: "Low", consequence: "Payroll leakage.", proof: "Roster Match" },
                { id: "C-EXE-12", description: "Final weekly governance summary sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Management & MOD",
            department: "Management",
            frequency: "Daily",
            role: "General Manager",
            summary: "Site-level readiness and operational parity.",
            icon: "shield-check",
            tasks: [
                { id: "C-GM-01", description: "Verify 100% presence of HODs for the morning shift.", priority: "High", riskLevel: "Low", consequence: "Service collapse during rush.", proof: "Attendance Log" },
                { id: "C-GM-02", description: "Audit lobby ambiance: Scent, Music, and Temp (23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor guest first-impression.", proof: "Daily Log" },
                { id: "C-GM-03", description: "Triage guest escalations from the previous 24 hours.", priority: "High", riskLevel: "High", consequence: "Viral reputation damage.", proof: "Incident Log" },
                { id: "C-GM-04", description: "Witness physical sealing of box-office cash drop bags.", priority: "High", riskLevel: "High", consequence: "Internal revenue theft.", proof: "Seal Registry" },
                { id: "C-GM-05", description: "Check availability of 'Now Showing' poster alignment.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional marketing image.", proof: "Walkthrough" },
                { id: "C-GM-06", description: "Verify digital ticketing QR scanner connectivity.", priority: "High", riskLevel: "Medium", consequence: "Entry-point gridlock.", proof: "System Test" },
                { id: "C-GM-07", description: "Audit 3D glasses cleaning turnaround and sync status.", priority: "Medium", riskLevel: "Low", consequence: "Guest complaints on visual clarity.", proof: "Cleaning Log" },
                { id: "C-GM-08", description: "Inspect VIP Lounge amenities and furniture condition.", priority: "Medium", riskLevel: "Low", consequence: "Luxury brand dilution.", proof: "Visual Check" },
                { id: "C-GM-09", description: "Brief staff on today's blockbuster interval timings.", priority: "High", riskLevel: "Low", consequence: "Concession queue chaos.", proof: "Briefing Note" },
                { id: "C-GM-10", description: "Audit POS bill seriality for gaps in sequence.", priority: "High", riskLevel: "High", consequence: "Off-book sales and tax fraud.", proof: "Registry Match" },
                { id: "C-GM-11", description: "Verify staff purchase IDs match active roster.", priority: "Low", riskLevel: "Low", consequence: "Unauthorized discount usage.", proof: "ID Match" },
                { id: "C-GM-12", description: "Final nightly operational sign-off initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Projection & Audio (Dolby)",
            department: "Technical",
            frequency: "Daily",
            role: "Projectionist",
            summary: "Zero-fail protocols for show uptime and visual fidelity.",
            icon: "projector",
            tasks: [
                { id: "C-PRO-01", description: "Verify KDM key validity for all today's shows.", priority: "High", riskLevel: "High", consequence: "Black-screen incident and 100% refund.", proof: "System Screen" },
                { id: "C-PRO-02", description: "Log projector lamp-hours; replace if > threshold.", priority: "High", riskLevel: "Medium", consequence: "Lamp explosion and projector damage.", proof: "Lamp Log" },
                { id: "C-PRO-03", description: "Conduct center-auditorium dB sound level check.", priority: "High", riskLevel: "Low", consequence: "Guest complaints on audio volume.", proof: "Meter Reading" },
                { id: "C-PRO-04", description: "Verify server-room AC temp (exactly 20°C).", priority: "High", riskLevel: "High", consequence: "Server crash and hardware failure.", proof: "Temp Log" },
                { id: "C-PRO-05", description: "Test UPS load capacity for 10-minute backup run.", priority: "High", riskLevel: "High", consequence: "Show interruption during power flip.", proof: "Load Test" },
                { id: "C-PRO-06", description: "Check DCP ingest status for tomorrow's releases.", priority: "Medium", riskLevel: "Low", consequence: "Delayed show launch.", proof: "Ingest Log" },
                { id: "C-PRO-07", description: "Inspect lens for dust or oil smudge fingerprints.", priority: "Medium", riskLevel: "Low", consequence: "Blurred image quality.", proof: "Visual Check" },
                { id: "C-PRO-08", description: "Verify automation logic for curtain and light sync.", priority: "Medium", riskLevel: "Low", consequence: "Poor show presentation.", proof: "Test Run" },
                { id: "C-PRO-09", description: "Audit surround speaker distortion in random screen.", priority: "Low", riskLevel: "Low", consequence: "Sub-par Dolby experience.", proof: "Audio Sweep" },
                { id: "C-PRO-10", description: "Confirm TMS (Theater Management) cloud sync.", priority: "Medium", riskLevel: "Low", consequence: "Loss of historical show data.", proof: "Dashboard" },
                { id: "C-PRO-11", description: "Check 3D emitter sync and signal strength.", priority: "High", riskLevel: "Medium", consequence: "Ghosting in 3D visuals.", proof: "Signal Test" },
                { id: "C-PRO-12", description: "Execute EOD technical shutdown and lamp cooling.", priority: "High", riskLevel: "Low", consequence: "Premature lamp failure.", proof: "Signed Log" }
            ]
        },
        {
            title: "Concession & Yield",
            department: "Concession",
            frequency: "Daily",
            role: "Concession Lead",
            summary: "Profit protection and food safety at the counter.",
            icon: "cup-soda",
            tasks: [
                { id: "C-CON-01", description: "Popcorn Yield: Match corn-to-bucket usage ratio.", priority: "High", riskLevel: "High", consequence: "Massive internal profit leakage.", proof: "Yield Sheet" },
                { id: "C-CON-02", description: "Syrup Brix Calibration: Test post-mix dispensers.", priority: "Medium", riskLevel: "Low", consequence: "Poor taste and beverage waste.", proof: "Brix Meter" },
                { id: "C-CON-03", description: "Log warmer temperatures for Nachos and Samosas.", priority: "High", riskLevel: "High", consequence: "Bacterial growth and food poisoning.", proof: "Temp Log" },
                { id: "C-CON-04", description: "Audit 'Free-Refill' logic for valid bucket stickers.", priority: "Medium", riskLevel: "Low", consequence: "Untracked revenue loss.", proof: "Visual Check" },
                { id: "C-CON-05", description: "Verify CO2 cylinder pressure and leak status.", priority: "High", riskLevel: "Medium", consequence: "Flat soda and gas hazard.", proof: "Gauge Log" },
                { id: "C-CON-06", description: "Check date-labels on all open syrup and cheese bags.", priority: "High", riskLevel: "Medium", consequence: "Serving expired ingredients.", proof: "FIFO Walk" },
                { id: "C-CON-07", description: "Inspect popper kettle for carbon buildup.", priority: "Low", riskLevel: "Low", consequence: "Flavor degradation.", proof: "Cleaning Card" },
                { id: "C-CON-08", description: "Verify concession staff PPE (Hairnets/Gloves).", priority: "High", riskLevel: "Medium", consequence: "Physical contamination.", proof: "Briefing Log" },
                { id: "C-CON-09", description: "Check par levels of napkins and combo trays.", priority: "Low", riskLevel: "Low", consequence: "Service friction during rush.", proof: "Stock Sheet" },
                { id: "C-CON-10", description: "Audit combo pricing against POS display boards.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes.", proof: "Price Check" },
                { id: "C-CON-11", description: "Verify popper exhaust draw and filter status.", priority: "Medium", riskLevel: "High", consequence: "Grease fire risk.", proof: "Visual Check" },
                { id: "C-CON-12", description: "Final concession cash reconcile and vault drop.", priority: "High", riskLevel: "High", consequence: "Theft.", proof: "Signed Log" }
            ]
        },
        {
            title: "Floor & Crowd surge",
            department: "Operations",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Governance for interval rushes and seating standards.",
            icon: "users",
            tasks: [
                { id: "C-FLR-01", description: "Verify 100% of audi-doors locked during shows.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry / Security breach.", proof: "Patrol Log" },
                { id: "C-FLR-02", description: "Audit interval crowd surge deployment plan.", priority: "High", riskLevel: "Medium", consequence: "Congestion and safety risk.", proof: "Roster Match" },
                { id: "C-FLR-03", description: "Check seat fabric for tears or deep stains.", priority: "Low", riskLevel: "Low", consequence: "Poor perception of luxury.", proof: "Visual Audit" },
                { id: "C-FLR-04", description: "Monitor audi-exit light functionality in Screen 1-4.", priority: "High", riskLevel: "High", consequence: "Evacuation panic in darkness.", proof: "Test Note" },
                { id: "C-FLR-05", description: "Audit 3D glasses collection efficiency post-show.", priority: "Medium", riskLevel: "Low", consequence: "High shrinkage of glasses inventory.", proof: "Count Sheet" },
                { id: "C-FLR-06", description: "Verify cleaning TAT between shows (< 10 mins).", priority: "Medium", riskLevel: "Low", consequence: "Dirty theaters and delayed start.", proof: "TAT Log" },
                { id: "C-FLR-07", description: "Check functionality of row-number LED lights.", priority: "Low", riskLevel: "Low", consequence: "Guest tripping in dark.", proof: "Walkthrough" },
                { id: "C-FLR-08", description: "Confirm usher positions for end-credit egress.", priority: "High", riskLevel: "Medium", consequence: "Crowd flow gridlock.", proof: "Briefing Log" },
                { id: "C-FLR-09", description: "Audit seat pocket trash removal frequency.", priority: "Low", riskLevel: "Low", consequence: "Grimy guest experience.", proof: "Visual Check" },
                { id: "C-FLR-10", description: "Verify usher knowledge of today's screen layout.", priority: "Medium", riskLevel: "Low", consequence: "Slow seating performance.", proof: "Quiz Note" },
                { id: "C-FLR-11", description: "Check status of 'Reserved' seat markers.", priority: "Low", riskLevel: "Low", consequence: "Seating conflicts.", proof: "Visual Audit" },
                { id: "C-FLR-12", description: "Execute shift-end floor readiness summary.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Lobby & Box Office",
            department: "Admissions",
            frequency: "Daily",
            role: "Lobby Host",
            summary: "First-touch ambiance and ticketing parity.",
            icon: "ticket",
            tasks: [
                { id: "C-LOB-01", description: "Verify lobby HVAC temp (exactly 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Customer discomfort.", proof: "BMS Reading" },
                { id: "C-LOB-02", description: "Audit queue line stanchion alignment for peak.", priority: "Low", riskLevel: "Low", consequence: "Disorganized crowd entry.", proof: "Visual Check" },
                { id: "C-LOB-03", description: "Verify functioning of all digital menu boards.", priority: "Medium", riskLevel: "Low", consequence: "Lost concession sales.", proof: "Photo" },
                { id: "C-LOB-04", description: "Check par levels of ticket printer rolls.", priority: "Low", riskLevel: "Low", consequence: "Billing delays during rush.", proof: "Stock Check" },
                { id: "C-LOB-05", description: "Verify lobby scent diffuser is active and full.", priority: "Low", riskLevel: "Low", consequence: "Poor sensory branding.", proof: "Visual Check" },
                { id: "C-LOB-06", description: "Audit feedback tablet functionality in lobby.", priority: "Medium", riskLevel: "Low", consequence: "Loss of guest data.", proof: "Tablet Test" },
                { id: "C-LOB-07", description: "Check visibility of rating certs for all titles.", priority: "High", riskLevel: "Medium", consequence: "Regulatory fines.", proof: "Visual Audit" },
                { id: "C-LOB-08", description: "Inspect entrance glass for fingerprints.", priority: "Low", riskLevel: "Low", consequence: "Grimy brand image.", proof: "Visual Check" },
                { id: "C-LOB-09", description: "Confirm kiosk self-checkout status is ONLINE.", priority: "High", riskLevel: "Low", consequence: "Long counter queues.", proof: "System Sync" },
                { id: "C-LOB-10", description: "Verify lobby music volume vs group standard.", priority: "Low", riskLevel: "Low", consequence: "Damaged ambiance score.", proof: "Daily Log" },
                { id: "C-LOB-11", description: "Audit lobby furniture for dust or debris.", priority: "Low", riskLevel: "Low", consequence: "Poor perception.", proof: "Walkthrough" },
                { id: "C-LOB-12", description: "Final lobby closure and display shutdown.", priority: "Low", riskLevel: "Low", consequence: "Energy waste.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Safety & Life Protection",
            department: "Safety",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Infrastructure hardening for public venues.",
            icon: "shield-alert",
            tasks: [
                { id: "C-SAF-01", description: "Verify 100% of fire escapes are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment (Never-event).", proof: "Patrol Log" },
                { id: "C-SAF-02", description: "Audit fire extinguisher pressure gauges in Audi 1-4.", priority: "High", riskLevel: "High", consequence: "Zero suppression during crisis.", proof: "Gauge Log" },
                { id: "C-SAF-03", description: "Test emergency PA announcement volume.", priority: "High", riskLevel: "High", consequence: "Evacuation chaos.", proof: "Sound Test" },
                { id: "C-SAF-04", description: "Check availability of 2 trained CPR staff for shift.", priority: "High", riskLevel: "High", consequence: "Resuscitation failure liability.", proof: "Roster Audit" },
                { id: "C-SAF-05", description: "Audit LOTO on escalator maintenance works.", priority: "High", riskLevel: "High", consequence: "Fatal industrial accident.", proof: "Permit Registry" },
                { id: "C-SAF-06", description: "Verify emergency battery backup for screen lights.", priority: "High", riskLevel: "High", consequence: "Total darkness panic.", proof: "Test Log" },
                { id: "C-SAF-07", description: "Inspect first-aid kit in Concession for burns treatment.", priority: "Medium", riskLevel: "Medium", consequence: "Staff injury neglect.", proof: "Stock Check" },
                { id: "C-SAF-08", description: "Verify kitchen fire-suppression system pins.", priority: "High", riskLevel: "High", consequence: "Uncontrolled grease fire.", proof: "Visual Check" },
                { id: "C-SAF-09", description: "Monitor lobby spill-kit readiness.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Visual Audit" },
                { id: "C-SAF-10", description: "Execute monthly fire-shutter motor test.", priority: "High", riskLevel: "High", consequence: "Fire spreading across building.", proof: "Test Log" },
                { id: "C-SAF-11", description: "Conduct safety briefing with night cleaning team.", priority: "Low", riskLevel: "Low", consequence: "Erosion of safety culture.", proof: "Briefing Log" },
                { id: "C-SAF-12", description: "Final daily safety command sign-off.", priority: "High", riskLevel: "Low", consequence: "Systemic risk gap.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Financial Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance Lead",
            summary: "Protects the ticketing and concession revenue stream.",
            icon: "banknote",
            tasks: [
                { id: "C-FIN-01", description: "Reconcile physical cash collection vs POS report.", priority: "High", riskLevel: "High", consequence: "Internal theft.", proof: "Bank Slip" },
                { id: "C-FIN-02", description: "Audit 5 random 'Refunds' for customer signature.", priority: "High", riskLevel: "Medium", consequence: "Fraudulent refund pattern theft.", proof: "Sample Match" },
                { id: "C-FIN-03", description: "Verify aggregator (Paytm/BookMyShow) settlement sync.", priority: "Medium", riskLevel: "Medium", consequence: "Unrecoverable financial loss.", proof: "System Sync" },
                { id: "C-FIN-04", description: "Audit concession inventory 'Blind Count' for top 5.", priority: "High", riskLevel: "High", consequence: "Unidentified stock shrinkage.", proof: "Count Sheet" },
                { id: "C-FIN-05", description: "Verify batch settlement of all digital payment machines.", priority: "High", riskLevel: "Low", consequence: "Delayed cash flow.", proof: "Printout" },
                { id: "C-FIN-06", description: "Audit 'Free Ticket' log against MOD approval.", priority: "Medium", riskLevel: "Low", consequence: "Ticketing leakage.", proof: "Log Audit" },
                { id: "C-FIN-07", description: "Check par levels of box office cash float.", priority: "Low", riskLevel: "Low", consequence: "Billing friction.", proof: "Cash Log" },
                { id: "C-FIN-08", description: "Verify tax-invoice seriality for gaps.", priority: "High", riskLevel: "High", consequence: "GST audit failure.", proof: "Registry Match" },
                { id: "C-FIN-09", description: "Audit employee discount usage logs.", priority: "Low", riskLevel: "Low", consequence: "Unauthorized revenue drain.", proof: "IT Audit" },
                { id: "C-FIN-10", description: "Inspect billing station for unauthorized USBs.", priority: "High", riskLevel: "High", consequence: "Malware/skimming fraud.", proof: "Visual Check" },
                { id: "C-FIN-11", description: "Witness shift-end vault drop bags.", priority: "High", riskLevel: "High", consequence: "Untraceable theft.", proof: "Signed Log" },
                { id: "C-FIN-12", description: "Final daily finance summary sign-off.", priority: "Medium", riskLevel: "Low", consequence: "Loss of oversight.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Hygiene & Janitorial",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Housekeeping",
            summary: "Hourly hygiene command for public zones.",
            icon: "sparkles",
            tasks: [
                { id: "C-HK-01", description: "Audit restroom cleaning frequency (Target 30 mins during peak).", priority: "High", riskLevel: "Low", consequence: "Primary driver of guest rage.", proof: "Hourly Sheet" },
                { id: "C-HK-02", description: "Verify stock of soap, tissue, and sanitizers.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene breakdown.", proof: "Stock Check" },
                { id: "C-HK-03", description: "Deep scrub of Screen-1 carpet pre-morning show.", priority: "Low", riskLevel: "Low", consequence: "Foul odors and grimy image.", proof: "Photo" },
                { id: "C-HK-04", description: "Inspect lobby furniture for sticky residue.", priority: "Low", riskLevel: "Low", consequence: "Poor perception.", proof: "Visual Check" },
                { id: "C-HK-05", description: "Empty audi-exit trash bins every 60 mins.", priority: "Medium", riskLevel: "Low", consequence: "Overflowing debris.", proof: "Patrol Log" },
                { id: "C-HK-06", description: "Sanitize high-touch surfaces (elevator buttons/kiosks).", priority: "Medium", riskLevel: "Medium", consequence: "Spread of infection.", proof: "Cleaning Note" },
                { id: "C-HK-07", description: "Check status of restroom scent diffusers.", priority: "Low", riskLevel: "Low", consequence: "Unpleasant guest journey.", proof: "Visual Check" },
                { id: "C-HK-08", description: "Audit cleaning chemicals dilution calibration.", priority: "High", riskLevel: "Medium", consequence: "Chemical burns / poor hygiene.", proof: "Titration Check" },
                { id: "C-HK-09", description: "Clean facade and window glass fingerprints.", priority: "Low", riskLevel: "Low", consequence: "Grimy brand image.", proof: "Visual Check" },
                { id: "C-HK-10", description: "Verify night cleaning team biometric attendance.", priority: "High", riskLevel: "Low", consequence: "Dirty facility at opening.", proof: "Attendance Log" },
                { id: "C-HK-11", description: "Inspect mop-heads for cleanliness and drying.", priority: "Low", riskLevel: "Low", consequence: "Cross-contamination of floors.", proof: "Visual Audit" },
                { id: "C-HK-12", description: "Final hygiene walkthrough sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of custodial control.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Facility Maintenance",
            department: "Facilities",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "Infrastructure safety and asset protection.",
            icon: "wrench",
            tasks: [
                { id: "C-MNT-01", description: "Inspect all recliner motors and button sync.", priority: "Medium", riskLevel: "Low", consequence: "Guest refund requests.", proof: "Test Log" },
                { id: "C-MNT-02", description: "Perform IR heat scan of Audi electrical panels.", priority: "High", riskLevel: "High", consequence: "Overnight short-circuit fire.", proof: "Scan Log" },
                { id: "C-MNT-03", description: "Check HVAC filter dust load on Screen-1 units.", priority: "Medium", riskLevel: "Low", consequence: "Reduced airflow and motor strain.", proof: "Visual Check" },
                { id: "C-MNT-04", description: "Test backup generator fuel and auto-start logic.", priority: "High", riskLevel: "High", consequence: "Total facility blackout.", proof: "Start-test Log" },
                { id: "C-MNT-05", description: "Verify LOTO on all active escalators/lifts repairs.", priority: "High", riskLevel: "High", consequence: "Fatal maintenance accident.", proof: "Permit Registry" },
                { id: "C-MNT-06", description: "Inspect auditorium temperature sensors accuracy.", priority: "Low", riskLevel: "Low", consequence: "High energy cost / poor cooling.", proof: "Meter Match" },
                { id: "C-MNT-07", description: "Monitor RO water purity at concession tap.", priority: "High", riskLevel: "High", consequence: "Public health outbreak.", proof: "TDS Reading" },
                { id: "C-MNT-08", description: "Check fire-extinguisher pins in Warehouse zone.", priority: "High", riskLevel: "High", consequence: "Zero suppression.", proof: "Gauge Log" },
                { id: "C-MNT-09", description: "Test lift emergency intercom to Security Desk.", priority: "High", riskLevel: "High", consequence: "Guest entrapment liability.", proof: "Sound Test" },
                { id: "C-MNT-10", description: "Verify AMC status for all projection UPS units.", priority: "High", riskLevel: "High", consequence: "Breakdown during blockbuster.", proof: "Contract File" },
                { id: "C-MNT-11", description: "Audit plumbing log for leaks in VIP restrooms.", priority: "Medium", riskLevel: "Low", consequence: "Asset damage.", proof: "Log Book" },
                { id: "C-MNT-12", description: "Final facility safety sign-off initials.", priority: "High", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Security & Perimeter",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and protects assets.",
            icon: "shield-check",
            tasks: [
                { id: "C-SEC-01", description: "Verify CCTV 30-day backup is active and synced.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or suits.", proof: "System Screen" },
                { id: "C-SEC-02", description: "Visitor ID Capture: Audit gate log for 100% compliance.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit" },
                { id: "C-SEC-03", description: "Execute random guard sobriety check at 2 AM shift.", priority: "High", riskLevel: "High", consequence: "Vulnerable campus perimeter.", proof: "Test Note" },
                { id: "C-SEC-04", description: "Audit key cabinet for Audi and Concession access.", priority: "High", riskLevel: "High", consequence: "Unauthorized vault access.", proof: "Inventory Check" },
                { id: "C-SEC-05", description: "Test emergency exit panic buttons to control booth.", priority: "High", riskLevel: "High", consequence: "Comm failure during crisis.", proof: "Signal Test" },
                { id: "C-SEC-06", description: "Confirm 100% of external service doors are bolted.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry.", proof: "Visual Check" },
                { id: "C-SEC-07", description: "Verify functional perimeter lighting in dark spots.", priority: "Medium", riskLevel: "Medium", consequence: "Theft-prone zones.", proof: "Walkthrough" },
                { id: "C-SEC-08", description: "Perform random bag-checks for departing housekeepers.", priority: "Medium", riskLevel: "Medium", consequence: "Internal shrinkage.", proof: "Registry Note" },
                { id: "C-SEC-09", description: "Audit guard deployment vs daily roster.", priority: "Medium", riskLevel: "Low", consequence: "Unmanned sensitive points.", proof: "Attendance Log" },
                { id: "C-SEC-10", description: "Verify lock integrity on high-value asset stores.", priority: "High", riskLevel: "High", consequence: "Inventory theft.", proof: "Visual Check" },
                { id: "C-SEC-11", description: "Execute 2-min safety briefing with lobby guards.", priority: "Low", riskLevel: "Low", consequence: "Slipping alertness.", proof: "Briefing Log" },
                { id: "C-SEC-12", description: "Final nightly perimeter seal sign-off.", priority: "High", riskLevel: "Low", consequence: "Unsecured property.", proof: "Signed Summary" }
            ]
        },
        {
            title: "HR & Personnel Compliance",
            department: "HR",
            frequency: "Monthly",
            role: "HR Assistant",
            summary: "Staff competency and health governance.",
            icon: "user-plus",
            tasks: [
                { id: "C-HR-01", description: "Staff Vaccination Registry: Verify 100% compliance.", priority: "High", riskLevel: "High", consequence: "Legal non-compliance and health risk.", proof: "Immuno File" },
                { id: "C-HR-02", description: "Verify health certs for 100% of concession staff.", priority: "High", riskLevel: "High", consequence: "FSSAI shutdown of F&B.", proof: "Cert Registry" },
                { id: "C-HR-03", description: "POSH Policy Display: Confirm visibility in staff rooms.", priority: "High", riskLevel: "High", consequence: "Severe legal liability.", proof: "Visual Check" },
                { id: "C-HR-04", description: "Audit biometric logs against payroll OT claims.", priority: "Medium", riskLevel: "Low", consequence: "Payroll fraud.", proof: "Match Note" },
                { id: "C-HR-05", description: "Audit staff grievance logs for unresolved issues.", priority: "Medium", riskLevel: "Low", consequence: "High institutional churn.", proof: "Grievance Book" },
                { id: "C-HR-06", description: "Check availability of labor-law posters in locker zones.", priority: "Low", riskLevel: "Low", consequence: "Regulatory fines.", proof: "Photo" },
                { id: "C-HR-07", description: "Inspect staff change-rooms for unwashed uniforms.", priority: "Low", riskLevel: "Low", consequence: "Odor and hygiene drift.", proof: "Walkthrough" },
                { id: "C-HR-08", description: "Verify staff ID badge expiry dates.", priority: "Low", riskLevel: "Low", consequence: "Security risk.", proof: "Database Sync" },
                { id: "C-HR-09", description: "Conduct spot-check of 'Public Safety' training records.", priority: "High", riskLevel: "High", consequence: "Chaos during emergency.", proof: "Training Matrix" },
                { id: "C-HR-10", description: "Verify onboarding compliance for outsourced guards.", priority: "High", riskLevel: "Medium", consequence: "Vetting failure.", proof: "Signed Checklist" },
                { id: "C-HR-11", description: "Check par levels of staff uniform inventory.", priority: "Low", riskLevel: "Low", consequence: "Poor brand presentation.", proof: "Stock Sheet" },
                { id: "C-HR-12", description: "Final monthly HR compliance sign-off.", priority: "Medium", riskLevel: "Low", consequence: "Loss of oversight.", proof: "Signed Sheet" }
            ]
        }
    ]
};
