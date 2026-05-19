
import type { PremiumPack } from "@/lib/premium-packs";

export const cinema_operations_pack: PremiumPack = {
    id: 'cinema_operations_pack',
    title: "Cinema Operations System",
    priceINR: 3499,
    priceUSD: 49,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d863f69b-8919-4115-b778-831d17d120fb',
    category: "Entertainment & Events",
    description: "The definitive Sovereign v17.7 technical engine for multiplexes. Hardening 186 technical control points across Projection, Audience Flow, and Concession Yield.",
    heroHeadline: "Stop Black-Screens, Audience Gridlock, and Concession Leakage.",
    heroSubheadline: "Track technical readiness, monitor crowd safety, and protect your margins—across 18 specialized operational roles.",
    pricingUrgency: "A single cancelled show during a blockbuster opening or one fire safety breach costs 100x more than this system.",
    consultingAnchor: 8000,
    icon: "popcorn",
    badgeText: "V17.7 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Multiplex GMs", "Operations Heads", "Projection Directors", "Concession Managers", "Cinema Owners"],
    sampleItems: [
        { text: "<strong>Audience Flow Engine</strong>: surge management for entry/exit waves and auditorium density control.", icon: "users" },
        { text: "<strong>AV Sync & KDM Logic</strong>: Zero-fail protocols for digital key validity and sound-to-frame alignment.", icon: "projector" },
        { text: "<strong>Concession Yield Shield</strong>: Reconcile raw corn to bucket counts to stop internal profit leakage.", icon: "cup-soda" },
        { text: "<strong>Public Safety Grid</strong>: Hourly emergency exit egress sweeps and PA system clarity audits.", icon: "shield-alert" },
        { text: "<strong>Occupancy Cycle</strong>: show-to-show turnaround compression and rapid cleaning reset protocols.", icon: "timer" },
        { text: "<strong>ESG Sustainability</strong>: Daily KWH monitoring and concession packaging waste tracking.", icon: "leaf" }
    ],
    checklists: [
        {
            title: "Theatre Operations Command",
            department: "Executive",
            frequency: "Daily",
            role: "Theatre Operations Manager",
            summary: "High-level strategic oversight of P&L and site-level compliance.",
            icon: "crown",
            tasks: [
                { id: "C-EXE-01", technicalProtocol: "Ticketing Revenue Reconcile", floorAction: "Match POS ticket settlements against physical bank credit reports.", priority: "High", riskLevel: "High", consequence: "Undetected internal till fraud.", proof: "Financial Match", verificationRequired: true },
                { id: "C-EXE-02", technicalProtocol: "Statutory License Audit", floorAction: "Verify valid Fire NOC and Operating License is active for all screens.", priority: "High", riskLevel: "High", consequence: "Government theater sealing.", proof: "License File", verificationRequired: true },
                { id: "C-EXE-03", technicalProtocol: "Show Cancellation Triage", floorAction: "Review incident log for any technical halts > 5 mins.", priority: "High", riskLevel: "Medium", consequence: "Reputational damage and refund liability.", proof: "Incident Log" },
                { id: "C-EXE-04", technicalProtocol: "CPH Margin Pulse", floorAction: "Review Concession-Per-Head spend against weekly targets.", priority: "Medium", riskLevel: "Low", consequence: "Underperforming secondary revenue stream.", proof: "Sales Report" },
                { id: "C-EXE-05", technicalProtocol: "Weekly Board Sign-off", floorAction: "Execute governance summary for regional HQ.", priority: "High", riskLevel: "Low", consequence: "Loss of administrative control.", proof: "Signed Summary", verificationRequired: true }
            ]
        },
        {
            title: "Shift Command & MOD",
            department: "Operations",
            frequency: "Daily",
            role: "Duty Manager",
            summary: "Site-level readiness and operational parity during active show-times.",
            icon: "activity",
            tasks: [
                { id: "C-DUTY-01", technicalProtocol: "Ambiance Sensory Audit", floorAction: "Check Lobby scent, music volume, and temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor guest first-impression.", proof: "Daily Log" },
                { id: "C-DUTY-02", technicalProtocol: "Zero-Gap Handover", floorAction: "Verify digital sign-off between AM/PM shift managers.", priority: "High", riskLevel: "Medium", consequence: "Lost instructions / Gridlock.", proof: "Handover Log", verificationRequired: true },
                { id: "C-DUTY-03", technicalProtocol: "MOD Floor Presence", floorAction: "Conduct 15-min sweep of lobbies during peak interval surge.", priority: "High", riskLevel: "Low", consequence: "Service chaos during rush.", proof: "Patrol Log" },
                { id: "C-DUTY-04", technicalProtocol: "Grooming standards", floorAction: "Spot check 5 ushers for clean uniforms and name-tags.", priority: "Low", riskLevel: "Low", consequence: "Professional brand dilution.", proof: "Briefing Log" }
            ]
        },
        {
            title: "Projection & Playback Control",
            department: "Technical",
            frequency: "Daily",
            role: "Projection Engineer",
            summary: "Technical uptime and KDM key lifecycle management.",
            icon: "projector",
            tasks: [
                { id: "C-PRO-01", technicalProtocol: "KDM Key Validity Check", floorAction: "Verify digital keys are active for all today's titles.", priority: "High", riskLevel: "High", consequence: "[Fatal: Black-screen incident].", proof: "System Screen", verificationRequired: true },
                { id: "C-PRO-02", technicalProtocol: "Server Storage Pulse", floorAction: "Audit DCP ingest status; verify > 20% disk space free.", priority: "Medium", riskLevel: "Medium", consequence: "Ingest failure of upcoming titles.", proof: "Dashboard" },
                { id: "C-PRO-03", technicalProtocol: "UPS Battery Load", floorAction: "Confirm backup runtime for projectors > 15 mins.", priority: "High", riskLevel: "High", consequence: "Hardware damage during power flip.", proof: "Test Log", verificationRequired: true },
                { id: "C-PRO-04", technicalProtocol: "Projector Cooling Loop", floorAction: "Log exhaust temps (Target < 45°C); check filter clarity.", priority: "High", riskLevel: "Medium", consequence: "Lamp explosion / burnout.", proof: "Temp Reading" }
            ]
        },
        {
            title: "FOH Flow & Usher Command",
            department: "Operations",
            frequency: "Hourly",
            role: "Usher Supervisor",
            summary: "Auditorium readiness and show-to-show turnaround.",
            icon: "eye",
            tasks: [
                { id: "C-USH-01", technicalProtocol: "Rapid Turnaround Sweep", floorAction: "Verify 5-min post-show audit for trash and lost property.", priority: "High", riskLevel: "Low", consequence: "Delayed entry for next show.", proof: "Turnaround Log", verificationRequired: true },
                { id: "C-USH-02", technicalProtocol: "Exit Door Lockdown", floorAction: "Confirm all egress doors are alarmed post-interval.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized 'sneaking' entry.", proof: "Visual Check" },
                { id: "C-USH-03", technicalProtocol: "Auditorium Temp Pulse", floorAction: "Log real-time temp in Screen 1 during peak occupancy.", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort.", proof: "Digital Probe" }
            ]
        },
        {
            title: "Box Office & Revenue Shield",
            department: "Admissions",
            frequency: "Daily",
            role: "Ticketing Manager",
            summary: "Protects the primary revenue stream and ticketing integrity.",
            icon: "ticket",
            tasks: [
                { id: "C-TKT-01", technicalProtocol: "Fraud Pattern Review", floorAction: "Audit all 'Ticket Voids' and 'Seat Changes' in last 24h.", priority: "High", riskLevel: "High", consequence: "Internal box-office revenue theft.", proof: "Void Registry", verificationRequired: true },
                { id: "C-TKT-02", technicalProtocol: "Scanner Sync Verify", floorAction: "Test 100% of handheld scanners with dummy QR code.", priority: "Medium", riskLevel: "Low", consequence: "Entry gridlock.", proof: "Test Log" },
                { id: "C-TKT-03", technicalProtocol: "POS Cash Float", floorAction: "Physically witness blind count of counter notes.", priority: "High", riskLevel: "Medium", consequence: "Untraceable shortages.", proof: "Dual-Sign Log" }
            ]
        },
        {
            title: "Guest Interaction & ORM",
            department: "Operations",
            frequency: "Daily",
            role: "Guest Experience Executive",
            summary: "Protects brand reputation and resolves disputes in real-time.",
            icon: "smile",
            tasks: [
                { id: "C-GXP-01", technicalProtocol: "Digital Review Response", floorAction: "Reply to all Google/Zomato mentions from last 12h.", priority: "Medium", riskLevel: "Low", consequence: "Viral rating drop.", proof: "ORM Dashboard" },
                { id: "C-GXP-02", technicalProtocol: "Lost Property Triage", floorAction: "Log all high-value items found in seats.", priority: "High", riskLevel: "Low", consequence: "Theft liability.", proof: "Registry Audit" }
            ]
        },
        {
            title: "Surge Flow Coordination",
            department: "Security",
            frequency: "Per Show",
            role: "Queue Flow Coordinator",
            summary: "Surge management during interval and entry waves.",
            icon: "users",
            tasks: [
                { id: "C-SRG-01", technicalProtocol: "Interval Queue Load", floorAction: "Deploy stanchions pre-interval; manage snack queues.", priority: "High", riskLevel: "Medium", consequence: "Lost interval revenue (CPH).", proof: "Visual Scan" },
                { id: "C-SRG-02", technicalProtocol: "Wave Dispersal Audit", floorAction: "Clear lobby bottlenecks 10 mins post-show start.", priority: "Medium", riskLevel: "Low", consequence: "Lobby gridlock.", proof: "Patrol Log" }
            ]
        },
        {
            title: "Sound Quality & Sync",
            department: "Technical",
            frequency: "Weekly",
            role: "Sound Technician",
            summary: "Acoustic calibration and Dolby compliance.",
            icon: "volume-2",
            tasks: [
                { id: "C-SND-01", technicalProtocol: "dB SPL Calibration", floorAction: "Measure volume at center-seat; target 85dB peaks.", priority: "Medium", riskLevel: "Low", consequence: "Guest hearing distress / complaints.", proof: "Meter Reading" },
                { id: "C-SND-02", technicalProtocol: "Surround Channel Test", floorAction: "Solo-test left/right rear arrays for distortion.", priority: "Medium", riskLevel: "Low", consequence: "Muffled cinematic experience.", proof: "Test Note" }
            ]
        },
        {
            title: "Visual Quality Control",
            department: "Technical",
            frequency: "Daily",
            role: "Projection QC Technician",
            summary: "Atomic visual quality and lens integrity.",
            icon: "eye",
            tasks: [
                { id: "C-VQC-01", technicalProtocol: "Focus & Framing Audit", floorAction: "Verify 100% masking alignment for today's aspect ratios.", priority: "High", riskLevel: "Low", consequence: "Cropped image and guest rage.", proof: "Visual Check" },
                { id: "C-VQC-02", technicalProtocol: "3D Signal Sync", floorAction: "Test active/passive eyewear with projector emitter.", priority: "High", riskLevel: "Medium", consequence: "Visual ghosting / refund requests.", proof: " eyewear Log" }
            ]
        },
        {
            title: "Infrastructure Uptime",
            department: "Facilities",
            frequency: "Daily",
            role: "Screen Maintenance Technician",
            summary: "Seating mechanics and auditorium vitals.",
            icon: "wrench",
            tasks: [
                { id: "C-MNT-01", technicalProtocol: "Recliner Motor Audit", floorAction: "Test 5 random motor-seats for smooth articulation.", priority: "Medium", riskLevel: "Low", consequence: "Luxury seat refund claims.", proof: "Sample Log" },
                { id: "C-MNT-02", technicalProtocol: "Floor Lighting Pulse", floorAction: "Check 100% of aisle path-lights are illuminated.", priority: "High", riskLevel: "High", consequence: "Trip/Fall liability.", proof: "Walkthrough", verificationRequired: true }
            ]
        },
        {
            title: "Concession Command",
            department: "Concession",
            frequency: "Daily",
            role: "Concession / F&B Manager",
            summary: "Profit protection and yield governance.",
            icon: "popcorn",
            tasks: [
                { id: "C-CON-01", technicalProtocol: "Popcorn Yield Reconcile", floorAction: "Match raw corn bags used vs buckets sold (Target 1:40).", priority: "High", riskLevel: "High", consequence: "Internal margin theft.", proof: "Yield Sheet", verificationRequired: true },
                { id: "C-CON-02", technicalProtocol: "Brix Sugar Pulse", floorAction: "Calibrate syrup/CO2 ratio for post-mix sodas.", priority: "Medium", riskLevel: "Low", consequence: "Sub-par taste and waste.", proof: "Brix Meter" }
            ]
        },
        {
            title: "Snack Counter Integrity",
            department: "Concession",
            frequency: "Daily",
            role: "Snack Counter Staff",
            summary: "Hygiene and POS accuracy at the counter.",
            icon: "shopping-cart",
            tasks: [
                { id: "C-SCS-01", technicalProtocol: "BOH Hygiene Sweep", floorAction: "Clean popcorn kettle and verify sanitizer strips.", priority: "High", riskLevel: "Medium", consequence: "FSSAI non-compliance.", proof: "Cleaning Log" },
                { id: "C-SCS-02", technicalProtocol: "Stock Expiry Scan", floorAction: "Check 10 random nacho/sauce packs for dates.", priority: "Medium", riskLevel: "High", consequence: "Food poisoning risk.", proof: "FIFO Audit" }
            ]
        },
        {
            title: "Inventory & Logistics",
            department: "Stores",
            frequency: "Daily",
            role: "Inventory & Stock Controller",
            summary: "Governance for high-value F&B and tech inventory.",
            icon: "package",
            tasks: [
                { id: "C-INV-01", technicalProtocol: "Blind Stock Count", floorAction: "Count top 5 SKUs; match physical vs POS levels.", priority: "High", riskLevel: "High", consequence: "Shrinkage and profit leakage.", proof: "Count Sheet", verificationRequired: true }
            ]
        },
        {
            title: "Security & Safety",
            department: "Security",
            frequency: "Daily",
            role: "Security Supervisor",
            summary: "Perimeter hardening and audience safety.",
            icon: "shield-check",
            tasks: [
                { id: "C-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for suits.", proof: "System Screen", verificationRequired: true },
                { id: "C-SEC-02", technicalProtocol: "Guard Sobriety Pulse", floorAction: "Random breathalyzer for 2 AM rotation.", priority: "High", riskLevel: "High", consequence: "Vulnerable night perimeter.", proof: "Test Note", verificationRequired: true }
            ]
        },
        {
            title: "Public Safety Command",
            department: "Security",
            frequency: "Daily",
            role: "Emergency Response & Safety Officer",
            summary: "Infrastructure safety and fire compliance.",
            icon: "shield-alert",
            tasks: [
                { id: "C-SAF-01", technicalProtocol: "Egress Safety Sweep", floorAction: "Verify 100% fire exits are clear of trash/locks.", priority: "High", riskLevel: "High", consequence: "[Fatal never-event: Entrapment].", proof: "Patrol Log", verificationRequired: true },
                { id: "C-SAF-02", technicalProtocol: "PA Emergency Override", floorAction: "Test announcement clarity in screen-1.", priority: "High", riskLevel: "High", consequence: "Evacuation chaos.", proof: "Sound Test", verificationRequired: true }
            ]
        },
        {
            title: "Hygiene & ESG",
            department: "Facilities",
            frequency: "Hourly",
            role: "Facility Hygiene & Cleaning Lead",
            summary: "Sanitization and waste segregation command.",
            icon: "sparkles",
            tasks: [
                { id: "C-HYG-01", technicalProtocol: "Restroom Odor Pulse", floorAction: "Audit 30-min cleaning logs for public zones.", priority: "High", riskLevel: "Low", consequence: "Primary guest rage driver.", proof: "Hourly Sheet" },
                { id: "C-HYG-02", technicalProtocol: "Waste Segregation Sync", floorAction: "Verify 100% separation of paper/plastic at bins.", priority: "Low", riskLevel: "Low", consequence: "ESG score drop.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Sustainability & Energy",
            department: "ESG",
            frequency: "Daily",
            role: "Facility Hygiene & Cleaning Lead",
            summary: "Environmental discipline and resource tracking.",
            icon: "leaf",
            tasks: [
                { id: "C-ESG-01", technicalProtocol: "KWH Intensity Pulse", floorAction: "Compare daily meter vs show-load baseline.", priority: "High", riskLevel: "Medium", consequence: "Unmonitored energy waste.", proof: "Meter Match" },
                { id: "C-ESG-02", technicalProtocol: "Concession Plastic Weight", floorAction: "Log KG of plastic waste sent to recycling.", priority: "Low", riskLevel: "Low", consequence: "Loss of sustainability data.", proof: "Weight Slip" }
            ]
        },
        {
            title: "Ticket Counter Pulse",
            department: "Admissions",
            frequency: "Daily",
            role: "Ticket Counter Executive",
            summary: "Atomic sales accuracy and first-touch impression.",
            icon: "user",
            tasks: [
                { id: "C-TCE-01", technicalProtocol: "Bill sequence audit", floorAction: "Verify zero missing invoice numbers in sequence.", priority: "High", riskLevel: "Medium", consequence: "Revenue manipulation.", proof: "Journal Audit" }
            ]
        }
    ]
};
