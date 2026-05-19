
import type { PremiumPack } from "@/lib/premium-packs";

export const cinema_operations_pack: PremiumPack = {
    id: 'cinema_operations_pack',
    title: "Cinema Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 899,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d863f69b-8919-4115-b778-831d17d120fb',
    category: "Entertainment & Events",
    family: "retail",
    sub_type: "cinema",
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
        { text: "<strong>Occupancy Cycle</strong>: show-to-show turnaround compression and rapid cleaning reset protocols.", icon: "timer" }
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
                { id: "C-EXE-01", technicalProtocol: "Ticketing Revenue Reconcile", floorAction: "Match POS ticket settlements against physical bank credit reports.", priority: "High", riskLevel: "High", consequence: "Undetected internal till fraud.", proof: "Financial Match", verificationRequired: true, cadence: "daily" },
                { id: "C-EXE-02", technicalProtocol: "Statutory License Audit", floorAction: "Verify valid Fire NOC and Operating License is active for all screens.", priority: "High", riskLevel: "High", consequence: "Government theater sealing.", proof: "License File", verificationRequired: true, cadence: "daily" },
                { id: "C-EXE-03", technicalProtocol: "Show Cancellation Triage", floorAction: "Review incident log for any technical halts > 5 mins.", priority: "High", riskLevel: "Medium", consequence: "Reputational damage and refund liability.", proof: "Incident Log", cadence: "daily" },
                { id: "C-EXE-04", technicalProtocol: "CPH Margin Pulse", floorAction: "Review Concession-Per-Head spend against weekly targets.", priority: "Medium", riskLevel: "Low", consequence: "Underperforming secondary revenue stream.", proof: "Sales Report", cadence: "daily" },
                { id: "C-EXE-05", technicalProtocol: "Film Licensing Compliance", floorAction: "Verify zero unrecorded ticket sales (under-the-table) against distributor logs.", priority: "High", riskLevel: "High", consequence: "Legal lawsuits from distributors and loss of first-run access.", proof: "Distributor Audit", verificationRequired: true, cadence: "weekly" },
                { id: "C-EXE-06", technicalProtocol: "Public Liability Audit", floorAction: "Confirm 100% active insurance for all managed screens.", priority: "High", riskLevel: "High", consequence: "Unrecoverable loss during fire/panic event.", proof: "Policy Registry", verificationRequired: true, cadence: "monthly" },
                { id: "C-EXE-07", technicalProtocol: "Staff Sobriety Governance", floorAction: "Enforce zero-tolerance alcohol/substance policy across all technical shifts.", priority: "High", riskLevel: "High", consequence: "Operational accident or safety failure.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "C-EXE-08", technicalProtocol: "C-Form / Local Authority Sync", floorAction: "Ensure daily data submission to local police/government as per regulations.", priority: "High", riskLevel: "Medium", consequence: "Hefty administrative fines.", proof: "Submission Receipt", cadence: "daily" },
                { id: "C-EXE-09", technicalProtocol: "Marketing Parity", floorAction: "Verify physical poster frames match current week's release schedule.", priority: "Low", riskLevel: "Low", consequence: "Customer confusion.", proof: "Visual Check", cadence: "weekly" },
                { id: "C-EXE-10", technicalProtocol: "Regional Ops Briefing", floorAction: "Execute 5-min HOD pulse on upcoming blockbusters and weekend loads.", priority: "Medium", riskLevel: "Low", consequence: "Disorganized launch.", proof: "Meeting Note", cadence: "weekly" }
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
                { id: "C-DUTY-01", technicalProtocol: "Ambiance Sensory Audit", floorAction: "Check Lobby scent, music volume, and temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor guest first-impression.", proof: "Daily Log", cadence: "daily" },
                { id: "C-DUTY-02", technicalProtocol: "Zero-Gap Handover", floorAction: "Verify digital sign-off between AM/PM shift managers.", priority: "High", riskLevel: "Medium", consequence: "Lost instructions / Gridlock.", proof: "Handover Log", verificationRequired: true, cadence: "daily" },
                { id: "C-DUTY-03", technicalProtocol: "MOD Floor Presence", floorAction: "Conduct 15-min sweep of lobbies during peak interval surge.", priority: "High", riskLevel: "Low", consequence: "Service chaos during rush.", proof: "Patrol Log", cadence: "daily" },
                { id: "C-DUTY-04", technicalProtocol: "Staff Grooming Standards", floorAction: "Spot check 5 ushers for clean uniforms and name-tags.", priority: "Low", riskLevel: "Low", consequence: "Professional brand dilution.", proof: "Briefing Log", cadence: "daily" },
                { id: "C-DUTY-05", technicalProtocol: "Wait-list TAT Monitor", floorAction: "Ensure ticket window lines do not exceed 10 minutes wait.", priority: "Medium", riskLevel: "Low", consequence: "Lost ticketing revenue.", proof: "Queue Pulse", cadence: "daily" },
                { id: "C-DUTY-06", technicalProtocol: "Restroom Odor Pulse", floorAction: "Verify cleaning logs for public zones every 30 mins.", priority: "High", riskLevel: "Low", consequence: "Primary guest rage driver.", proof: "Hourly Sheet", verificationRequired: true, cadence: "daily" },
                { id: "C-DUTY-07", technicalProtocol: "Emergency Comms Test", floorAction: "Test dial-tone between Lobby and Projection booth.", priority: "High", riskLevel: "Medium", consequence: "Communication fail during crisis.", proof: "Dial Test", cadence: "daily" },
                { id: "C-DUTY-08", technicalProtocol: "Lost Property Triage", floorAction: "Log all high-value items found in seats < 1h.", priority: "Medium", riskLevel: "Low", consequence: "Theft liability.", proof: "Registry Note", cadence: "daily" },
                { id: "C-DUTY-09", technicalProtocol: "VIP Guest Handling", floorAction: "Verify seating comfort and snack delivery for premium ticket holders.", priority: "Low", riskLevel: "Low", consequence: "Loss of premium brand trust.", proof: "Interaction Log", cadence: "daily" },
                { id: "C-DUTY-10", technicalProtocol: "Daily MOD Sign-off", floorAction: "Final daily operational summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Sheet", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Projection & Playback Control",
            department: "Technical",
            frequency: "Daily",
            role: "Projection & Playback Engineer",
            summary: "Technical uptime and KDM key lifecycle management.",
            icon: "projector",
            tasks: [
                { id: "C-PRO-01", technicalProtocol: "KDM Key Validity Check", floorAction: "Verify digital keys are active for all today's titles.", priority: "High", riskLevel: "High", consequence: "[Fatal: Black-screen incident].", proof: "System Screen", verificationRequired: true, cadence: "daily" },
                { id: "C-PRO-02", technicalProtocol: "Server Storage Pulse", floorAction: "Audit DCP ingest status; verify > 20% disk space free.", priority: "Medium", riskLevel: "Medium", consequence: "Ingest failure of upcoming titles.", proof: "Dashboard", cadence: "daily" },
                { id: "C-PRO-03", technicalProtocol: "UPS Battery Load", floorAction: "Confirm backup runtime for projectors > 15 mins.", priority: "High", riskLevel: "High", consequence: "Hardware damage during power flip.", proof: "Test Log", verificationRequired: true, cadence: "daily" },
                { id: "C-PRO-04", technicalProtocol: "Projector Cooling Loop", floorAction: "Log exhaust temps (Target < 45°C); check filter clarity.", priority: "High", riskLevel: "Medium", consequence: "Lamp explosion / burnout.", proof: "Temp Reading", cadence: "daily" },
                { id: "C-PRO-05", technicalProtocol: "Lamp Hour Monitoring", floorAction: "Discard and replace lamps exceeding 1500 hour lifecycle.", priority: "High", riskLevel: "Medium", consequence: "Mid-show brightness failure.", proof: "System Log", cadence: "weekly" },
                { id: "C-PRO-06", technicalProtocol: "LOTO Maintenance Seal", floorAction: "Verify lock-out tags during any internal projector cleaning.", priority: "High", riskLevel: "High", consequence: "Fatal electrical/mechanical injury.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "C-PRO-07", technicalProtocol: "DCP Integrity Verify", floorAction: "Run hash-check on 100% of newly ingested blockbuster files.", priority: "Medium", riskLevel: "Low", consequence: "Playback glitches.", proof: "System Result", cadence: "weekly" },
                { id: "C-PRO-08", technicalProtocol: "Automation Logic Sync", floorAction: "Test music-to-feature crossover cues in 1 random screen.", priority: "Medium", riskLevel: "Low", consequence: "Awkward silences / transition fails.", proof: "Test Note", cadence: "daily" },
                { id: "C-PRO-09", technicalProtocol: "Fire-Suppressant Gauge", floorAction: "Check pressure in booth CO2 automated system.", priority: "High", riskLevel: "High", consequence: "Uncontrolled projection fire.", proof: "Gauge Log", verificationRequired: true, cadence: "daily" },
                { id: "C-PRO-10", technicalProtocol: "Booth Cleaning Pulse", floorAction: "Verify dust-free floor and racks to prevent hardware heat.", priority: "Low", riskLevel: "Low", consequence: "Server degradation.", proof: "Walkthrough", cadence: "daily" }
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
                { id: "C-USH-01", technicalProtocol: "Rapid Turnaround Sweep", floorAction: "Verify 5-min post-show audit for trash and lost property.", priority: "High", riskLevel: "Low", consequence: "Delayed entry for next show.", proof: "Turnaround Log", verificationRequired: true, cadence: "daily" },
                { id: "C-USH-02", technicalProtocol: "Exit Door Lockdown", floorAction: "Confirm all egress doors are alarmed post-interval.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized 'sneaking' entry.", proof: "Visual Check", cadence: "daily" },
                { id: "C-USH-03", technicalProtocol: "Auditorium Temp Pulse", floorAction: "Log real-time temp in Screen 1 during peak occupancy.", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort.", proof: "Digital Probe", cadence: "daily" },
                { id: "C-USH-04", technicalProtocol: "Aisle Path Illumination", floorAction: "Check 100% of step-lights are visible in dark auditoriums.", priority: "High", riskLevel: "High", consequence: "Guest slip/fall liability.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "C-USH-05", technicalProtocol: "Flashlight Readiness", floorAction: "Confirm all ushers possess functional high-lumen torches.", priority: "Medium", riskLevel: "Low", consequence: "Inability to assist guests in dark.", proof: "Stock Check", cadence: "daily" },
                { id: "C-USH-06", technicalProtocol: "Seat Blocking Audit", floorAction: "Log and report 100% of broken/non-sellable seats.", priority: "High", riskLevel: "Low", consequence: "Customer refund claims.", proof: "Work Order", cadence: "daily" },
                { id: "C-USH-07", technicalProtocol: "Interval Entrance Sweep", floorAction: "Ensure bathroom and snack aisles are clear of idle crowds.", priority: "Medium", riskLevel: "Medium", consequence: "Congestion gridlock.", proof: "Patrol Note", cadence: "daily" },
                { id: "C-USH-08", technicalProtocol: "Screen Masking Sync", floorAction: "Verify aspect ratio curtains match today's feature format.", priority: "Low", riskLevel: "Low", consequence: "Sub-par visual experience.", proof: "Visual Check", cadence: "daily" },
                { id: "C-USH-09", technicalProtocol: "Ushers Briefing", floorAction: "Brief on house-full alerts and specific VIP seat locations.", priority: "Low", riskLevel: "Low", consequence: "Disorganized seating.", proof: "Briefing Log", cadence: "daily" },
                { id: "C-USH-10", technicalProtocol: "EOD Seat Retraction", floorAction: "Verify 100% of seats are in retracted 'UP' position.", priority: "Low", riskLevel: "Low", consequence: "Wear and tear / slow cleaning.", proof: "Walkthrough", cadence: "daily" }
            ]
        },
        {
            title: "Ticketing & Admissions Hub",
            department: "Admissions",
            frequency: "Daily",
            role: "Ticketing Operations Manager",
            summary: "Governance for box office integrity and admission control.",
            icon: "ticket",
            tasks: [
                { id: "C-TKT-01", technicalProtocol: "Fraud Pattern Review", floorAction: "Audit all 'Ticket Voids' and 'Seat Changes' in last 24h.", priority: "High", riskLevel: "High", consequence: "Internal box-office revenue theft.", proof: "Void Registry", verificationRequired: true, cadence: "daily" },
                { id: "C-TKT-02", technicalProtocol: "Scanner Sync Verify", floorAction: "Test 100% of handheld scanners with dummy QR code.", priority: "Medium", riskLevel: "Low", consequence: "Entry gridlock.", proof: "Test Log", cadence: "daily" },
                { id: "C-TKT-03", technicalProtocol: "POS Cash Float", floorAction: "Physically witness blind count of counter notes.", priority: "High", riskLevel: "Medium", consequence: "Untraceable shortages.", proof: "Dual-Sign Log", verificationRequired: true, cadence: "daily" },
                { id: "C-TKT-04", technicalProtocol: "Tax Seriality Pulse", floorAction: "Verify zero missing bill numbers in POS sequence.", priority: "High", riskLevel: "High", consequence: "GST / Statutory non-compliance.", proof: "Journal Audit", verificationRequired: true, cadence: "daily" },
                { id: "C-TKT-05", technicalProtocol: "Online Booking Sync", floorAction: "Match BookMyShow/Paytm seat counts against POS inventory.", priority: "High", riskLevel: "Medium", consequence: "Seat duplication claims.", proof: "System Reconcile", cadence: "daily" },
                { id: "C-TKT-06", technicalProtocol: "Show Timing Boards", floorAction: "Verify digital signage displays match correct release times.", priority: "Low", riskLevel: "Low", consequence: "Guest confusion.", proof: "Visual Check", cadence: "daily" },
                { id: "C-TKT-07", technicalProtocol: "Bulk Booking Vetting", floorAction: "Validate school/corporate payment clearance pre-entry.", priority: "Medium", riskLevel: "Low", consequence: "Unpaid occupancy.", proof: "Finance Note", cadence: "weekly" },
                { id: "C-TKT-08", technicalProtocol: "Ticket Roll Par-Levels", floorAction: "Confirm 50 spare rolls available for weekend rush.", priority: "Low", riskLevel: "Low", consequence: "Service halt.", proof: "Stock Sheet", cadence: "weekly" },
                { id: "C-TKT-09", technicalProtocol: "Customer Queue Rope", floorAction: "Set stanchions for peak 6 PM wave management.", priority: "Medium", riskLevel: "Low", consequence: "Lobby chaos.", proof: "Visual Check", cadence: "daily" },
                { id: "C-TKT-10", technicalProtocol: "EOD Admissions Summary", floorAction: "Final sign-off on total guest footfall vs revenue.", priority: "High", riskLevel: "Low", consequence: "Loss of fiscal control.", proof: "Signed Sheet", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Ticket Counter Execution",
            department: "Admissions",
            frequency: "Daily",
            role: "Ticket Counter Executive",
            summary: "Atomic sales accuracy and first-touch impression.",
            icon: "user",
            tasks: [
                { id: "C-TCE-01", technicalProtocol: "Bill sequence audit", floorAction: "Verify zero missing invoice numbers in sequence.", priority: "High", riskLevel: "Medium", consequence: "Revenue manipulation.", proof: "Journal Audit", cadence: "daily" },
                { id: "C-TCE-02", technicalProtocol: "POS Cleanliness", floorAction: "Sanitize screen and pin-pad between shifts.", priority: "Low", riskLevel: "Low", consequence: "Hygiene issues.", proof: "Visual Check", cadence: "daily" },
                { id: "C-TCE-03", technicalProtocol: "Rate Match Verify", floorAction: "Confirm today's pricing matches promo flyers.", priority: "Medium", riskLevel: "Low", consequence: "Customer disputes.", proof: "POS Check", cadence: "daily" },
                { id: "C-TCE-04", technicalProtocol: "Card Machine Battery", floorAction: "Ensure 100% of EDC units are charged and online.", priority: "Low", riskLevel: "Low", consequence: "Checkout friction.", proof: "System Screen", cadence: "daily" },
                { id: "C-TCE-05", technicalProtocol: "EOD Cash Drop", floorAction: "Place bills in secure transit bag and log seal number.", priority: "High", riskLevel: "High", consequence: "Cash theft.", proof: "Seal Log", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Usher Seating Control",
            department: "Operations",
            frequency: "Per Show",
            role: "Usher / Seat Allocation Staff",
            summary: "Auditorium crowd flow and dark-zone assistance.",
            icon: "armchair",
            tasks: [
                { id: "C-USA-01", technicalProtocol: "Ticket Stub Match", floorAction: "Verify 100% of entries match show time and screen ID.", priority: "High", riskLevel: "Low", consequence: "Wrong auditorium entry.", proof: "Patrol Audit", cadence: "hourly" },
                { id: "C-USA-02", technicalProtocol: "Mobile Phone Silence", floorAction: "Enforce zero-ringtone policy inside dark screen.", priority: "Low", riskLevel: "Low", consequence: "Guest annoyance.", proof: "Visual Scan", cadence: "hourly" },
                { id: "C-USA-03", technicalProtocol: "3D Eyewear Handover", floorAction: "Distribute sanitized 3D glasses to relevant ticketholders.", priority: "Medium", riskLevel: "Low", consequence: "Failed 3D experience.", proof: "Visual Count", cadence: "hourly" },
                { id: "C-USA-04", technicalProtocol: "Post-Interval Clearance", floorAction: "Sweep aisles for unattended bags or suspicious items.", priority: "High", riskLevel: "High", consequence: "Security threat.", proof: "Security Note", verificationRequired: true, cadence: "hourly" },
                { id: "C-USA-05", technicalProtocol: "Seating Assistance", floorAction: "Aid 100% of late arrivals to correct rows using torches.", priority: "Medium", riskLevel: "Low", consequence: "Crowd disruption.", proof: "Supervisor Obs", cadence: "hourly" }
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
                { id: "C-GXP-01", technicalProtocol: "Digital Review Response", floorAction: "Reply to all Google/Zomato mentions from last 12h.", priority: "Medium", riskLevel: "Low", consequence: "Viral rating drop.", proof: "ORM Dashboard", cadence: "daily" },
                { id: "C-GXP-02", technicalProtocol: "Escalated Dispute Loop", floorAction: "Resolve all refund/service claims < 4 hours.", priority: "High", riskLevel: "Medium", consequence: "Escalated legal threats.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "C-GXP-03", technicalProtocol: "Wait-list Engagement", floorAction: "Manage expectations for 100% of sold-out show inquiries.", priority: "Low", riskLevel: "Low", consequence: "Rude brand perception.", proof: "Visual Audit", cadence: "daily" },
                { id: "C-GXP-04", technicalProtocol: "Feedback Kiosk Charge", floorAction: "Ensure tablets are operational and app is active.", priority: "Low", riskLevel: "Low", consequence: "Loss of survey data.", proof: "Device Check", cadence: "daily" },
                { id: "C-GXP-05", technicalProtocol: "VIP Lounge Readiness", floorAction: "Inspect amenities and HVAC in premium waiting zone.", priority: "Medium", riskLevel: "Low", consequence: "Luxury brand dilution.", proof: "Photo", cadence: "daily" }
            ]
        },
        {
            title: "Surge Flow Coordination",
            department: "Security",
            frequency: "Per Show",
            role: "Queue Flow & Crowd Control Coordinator",
            summary: "Surge management during interval and entry waves.",
            icon: "users",
            tasks: [
                { id: "C-SRG-01", technicalProtocol: "Interval Queue Load", floorAction: "Deploy stanchions pre-interval; manage snack queues.", priority: "High", riskLevel: "Medium", consequence: "Lost interval revenue (CPH).", proof: "Visual Scan", cadence: "hourly" },
                { id: "C-SRG-02", technicalProtocol: "Wave Dispersal Audit", floorAction: "Clear lobby bottlenecks 10 mins post-show start.", priority: "Medium", riskLevel: "Low", consequence: "Lobby gridlock.", proof: "Patrol Log", cadence: "hourly" },
                { id: "C-SRG-03", technicalProtocol: "Entry Surge Limit", floorAction: "Target zero queue spillover to public mall walkways.", priority: "High", riskLevel: "Medium", consequence: "Mall management fines.", proof: "Visual Audit", cadence: "daily" },
                { id: "C-SRG-04", technicalProtocol: "Escalator Load Guard", floorAction: "Ensure 100% safe density on ingress elevators.", priority: "High", riskLevel: "High", consequence: "Crush injury.", proof: "Patrol Log", verificationRequired: true, cadence: "hourly" },
                { id: "C-SRG-05", technicalProtocol: "Emergency Comms Sync", floorAction: "Brief security guards on current house-full status.", priority: "Low", riskLevel: "Low", consequence: "Perimeter breakdown.", proof: "Briefing Log", cadence: "daily" }
            ]
        },
        {
            title: "Sound Quality & Calibration",
            department: "Technical",
            frequency: "Weekly",
            role: "Sound Technician",
            summary: "Acoustic calibration and Dolby compliance.",
            icon: "volume-2",
            tasks: [
                { id: "C-SND-01", technicalProtocol: "dB SPL Calibration", floorAction: "Measure volume at center-seat; target 85dB peaks.", priority: "Medium", riskLevel: "Low", consequence: "Guest hearing distress / complaints.", proof: "Meter Reading", cadence: "weekly" },
                { id: "C-SND-02", technicalProtocol: "Surround Channel Test", floorAction: "Solo-test left/right rear arrays for distortion.", priority: "Medium", riskLevel: "Low", consequence: "Muffled cinematic experience.", proof: "Test Note", cadence: "weekly" },
                { id: "C-SND-03", technicalProtocol: "Lip-Sync Delay Log", floorAction: "Confirm 0ms offset between feature and center channel.", priority: "High", riskLevel: "Low", consequence: "Unwatchable feature.", proof: "Sync Tool", verificationRequired: true, cadence: "weekly" },
                { id: "C-SND-04", technicalProtocol: "Subwoofer Phase", floorAction: "Check LFE phase alignment to prevent 'mushy' bass.", priority: "Low", riskLevel: "Low", consequence: "Poor action scene quality.", proof: "Visual Curve", cadence: "monthly" },
                { id: "C-SND-05", technicalProtocol: "Amp Rack Thermals", floorAction: "Verify cooling fan functionality in main audio rack.", priority: "High", riskLevel: "Medium", consequence: "Amplifier thermal shutdown.", proof: "Temp Reading", cadence: "daily" }
            ]
        },
        {
            title: "Visual Quality Control",
            department: "Technical",
            frequency: "Daily",
            role: "Projection Quality Control Technician",
            summary: "Atomic visual quality and lens integrity.",
            icon: "eye",
            tasks: [
                { id: "C-VQC-01", technicalProtocol: "Focus & Framing Audit", floorAction: "Verify 100% masking alignment for today's aspect ratios.", priority: "High", riskLevel: "Low", consequence: "Cropped image and guest rage.", proof: "Visual Check", cadence: "daily" },
                { id: "C-VQC-02", technicalProtocol: "3D Signal Sync", floorAction: "Test active/passive eyewear with projector emitter.", priority: "High", riskLevel: "Medium", consequence: "Visual ghosting / refund requests.", proof: "eyewear Log", verificationRequired: true, cadence: "daily" },
                { id: "C-VQC-03", technicalProtocol: "Color Temp Check", floorAction: "Confirm D65 white-point using colorimeter.", priority: "Low", riskLevel: "Low", consequence: "Inaccurate film colors.", proof: "Meter Result", cadence: "monthly" },
                { id: "C-VQC-04", technicalProtocol: "Lens Dust Sweep", floorAction: "Gently clear external optics with anti-static brush.", priority: "Medium", riskLevel: "Low", consequence: "Halo artifacts.", proof: "Visual Check", cadence: "weekly" },
                { id: "C-VQC-05", technicalProtocol: "Ghost-Image Scan", floorAction: "Check screen surface for wrinkles or 'hot-spots'.", priority: "Low", riskLevel: "Low", consequence: "Permanent screen damage.", proof: "Walkthrough", cadence: "weekly" }
            ]
        },
        {
            title: "Infrastructure & Seating Maintenance",
            department: "Facilities",
            frequency: "Daily",
            role: "Screen Maintenance Technician",
            summary: "Seating mechanics and auditorium vitals.",
            icon: "wrench",
            tasks: [
                { id: "C-MNT-01", technicalProtocol: "Recliner Motor Audit", floorAction: "Test 5 random motor-seats for smooth articulation.", priority: "Medium", riskLevel: "Low", consequence: "Luxury seat refund claims.", proof: "Sample Log", cadence: "daily" },
                { id: "C-MNT-02", technicalProtocol: "Floor Lighting Pulse", floorAction: "Check 100% of aisle path-lights are illuminated.", priority: "High", riskLevel: "High", consequence: "Trip/Fall liability.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "C-MNT-03", technicalProtocol: "HVAC Return Grille", floorAction: "Clear dust from return vents to prevent noise whistle.", priority: "Low", riskLevel: "Low", consequence: "Audible theater noise.", proof: "Visual Check", cadence: "weekly" },
                { id: "C-MNT-04", technicalProtocol: "Door Closer Tension", floorAction: "Ensure auditorium doors close silently and fully.", priority: "Medium", riskLevel: "Low", consequence: "Light leak into screen.", proof: "Test Note", cadence: "weekly" },
                { id: "C-MNT-05", technicalProtocol: "Cup-Holder Sanitization", floorAction: "Verify removal of residue from premium row holders.", priority: "Low", riskLevel: "Low", consequence: "Stickiness/Hygiene rage.", proof: "Visual Audit", cadence: "daily" }
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
                { id: "C-CON-01", technicalProtocol: "Popcorn Yield Reconcile", floorAction: "Match raw corn bags used vs buckets sold (Target 1:40).", priority: "High", riskLevel: "High", consequence: "Internal margin theft.", proof: "Yield Sheet", verificationRequired: true, cadence: "daily" },
                { id: "C-CON-02", technicalProtocol: "Brix Sugar Pulse", floorAction: "Calibrate syrup/CO2 ratio for post-mix sodas.", priority: "Medium", riskLevel: "Low", consequence: "Sub-par taste and waste.", proof: "Brix Meter", cadence: "daily" },
                { id: "C-CON-03", technicalProtocol: "Batch Cook-off Log", floorAction: "Verify 'Time-Made' tags on pre-popped warmers.", priority: "High", riskLevel: "Medium", consequence: "Stale food complaints.", proof: "Temp Log", cadence: "hourly" },
                { id: "C-CON-04", technicalProtocol: "Packaging Inventory", floorAction: "Reconcile daily count of empty branded buckets.", priority: "High", riskLevel: "Medium", consequence: "Invisible snack theft.", proof: "Stock Sheet", verificationRequired: true, cadence: "daily" },
                { id: "C-CON-05", technicalProtocol: "FSSAI License Display", floorAction: "Confirm 100% visibility of food safety signage.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Visual Audit", cadence: "daily" },
                { id: "C-CON-06", technicalProtocol: "Oil TPM Quality", floorAction: "Test popping oil; discard if TPM > 25%.", priority: "High", riskLevel: "Medium", consequence: "Toxic buildup / bad taste.", proof: "TPM Reading", verificationRequired: true, cadence: "weekly" },
                { id: "C-CON-07", technicalProtocol: "Dispenser Hygiene", floorAction: "Deep-clean 100% of soda nozzles and pump tips.", priority: "High", riskLevel: "High", consequence: "Bacterial slime growth.", proof: "Cleaning Log", cadence: "daily" },
                { id: "C-CON-08", technicalProtocol: "Staff Add-on Performance", floorAction: "Audit 5 bills for 'Combo Upsell' compliance.", priority: "Low", riskLevel: "Low", consequence: "Lower average transaction value.", proof: "Sales Report", cadence: "daily" },
                { id: "C-CON-09", technicalProtocol: "Combo Seal Integrity", floorAction: "Verify 100% of takeaway bags possess brand stickers.", priority: "Low", riskLevel: "Low", consequence: "Rider tampering risk.", proof: "Visual Check", cadence: "daily" },
                { id: "C-CON-10", technicalProtocol: "EOD F&B Reconciliation", floorAction: "Final sign-off on cash vs stock issued.", priority: "High", riskLevel: "Low", consequence: "Loss of profit control.", proof: "Signed Summary", verificationRequired: true, cadence: "daily" }
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
                { id: "C-SCS-01", technicalProtocol: "BOH Hygiene Sweep", floorAction: "Clean popcorn kettle and verify sanitizer strips.", priority: "High", riskLevel: "Medium", consequence: "FSSAI non-compliance.", proof: "Cleaning Log", cadence: "daily" },
                { id: "C-SCS-02", technicalProtocol: "Stock Expiry Scan", floorAction: "Check 10 random nacho/sauce packs for dates.", priority: "Medium", riskLevel: "High", consequence: "Food poisoning risk.", proof: "FIFO Audit", cadence: "daily" },
                { id: "C-SCS-03", technicalProtocol: "Bill Handover", floorAction: "Ensure 100% of guests receive printed POS bills.", priority: "High", riskLevel: "High", consequence: "Internal theft / till fraud.", proof: "Supervisor Obs", cadence: "hourly" },
                { id: "C-SCS-04", technicalProtocol: "Combo Bundle Check", floorAction: "Verify 100% of bucket-fill levels match brand standard.", priority: "Low", riskLevel: "Low", consequence: "Value perception drop.", proof: "Visual Check", cadence: "hourly" },
                { id: "C-SCS-05", technicalProtocol: "Handwash Frequency", floorAction: "Execute 20s scrub every 2 hours or post-spill.", priority: "High", riskLevel: "High", consequence: "Cross-contamination.", proof: "Staff Log", cadence: "hourly" }
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
                { id: "C-INV-01", technicalProtocol: "Blind Stock Count", floorAction: "Count top 5 SKUs; match physical vs POS levels.", priority: "High", riskLevel: "High", consequence: "Shrinkage and profit leakage.", proof: "Count Sheet", verificationRequired: true, cadence: "weekly" },
                { id: "C-INV-02", technicalProtocol: "Supplier Weight Verify", floorAction: "Test 1 random raw corn bag on receiving scale.", priority: "Medium", riskLevel: "Low", consequence: "Paying for missing weight.", proof: "Weight Slip", cadence: "weekly" },
                { id: "C-INV-03", technicalProtocol: "Critical Spares Audit", floorAction: "Verify stock of 2 spare projector lamps and 10 MCBs.", priority: "High", riskLevel: "Medium", consequence: "Extended screen downtime.", proof: "Stock Sheet", cadence: "monthly" }
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
                { id: "C-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for suits.", proof: "System Screen", verificationRequired: true, cadence: "daily" },
                { id: "C-SEC-02", technicalProtocol: "Guard Sobriety Pulse", floorAction: "Random breathalyzer for 2 AM rotation.", priority: "High", riskLevel: "High", consequence: "Vulnerable night perimeter.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "C-SEC-03", technicalProtocol: "Panic Button Pulse", floorAction: "Test silent alarm to Mall Security / Police.", priority: "High", riskLevel: "High", consequence: "Zero response during emergency.", proof: "Signal Test", verificationRequired: true, cadence: "daily" },
                { id: "C-SEC-04", technicalProtocol: "Auditorium Anti-Piracy", floorAction: "Execute 1 infrared scan during feature runtime.", priority: "Medium", riskLevel: "Medium", consequence: "Content leak liability.", proof: "Patrol Log", cadence: "daily" },
                { id: "C-SEC-05", technicalProtocol: "Visitor ID Capture", floorAction: "Verify 100% ID logging at staff entrance.", priority: "High", riskLevel: "Low", consequence: "Unauthorized intruder access.", proof: "Registry Audit", cadence: "daily" }
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
                { id: "C-SAF-01", technicalProtocol: "Egress Safety Sweep", floorAction: "Verify 100% fire exits are clear of trash/locks.", priority: "High", riskLevel: "High", consequence: "[Fatal never-event: Entrapment].", proof: "Patrol Log", verificationRequired: true, cadence: "daily" },
                { id: "C-SAF-02", technicalProtocol: "PA Emergency Override", floorAction: "Test announcement clarity in screen-1.", priority: "High", riskLevel: "High", consequence: "Evacuation chaos.", proof: "Sound Test", verificationRequired: true, cadence: "daily" },
                { id: "C-SAF-03", technicalProtocol: "Fire Pump Auto-Logic", floorAction: "Confirm main fire pumps are in 'AUTO' mode.", priority: "High", riskLevel: "High", consequence: "Zero sprinkler pressure.", proof: "Gauge Log", verificationRequired: true, cadence: "daily" },
                { id: "C-SAF-04", technicalProtocol: "Extinguisher Green-Zone", floorAction: "Verify 100% units are pressurized and tagged.", priority: "Medium", riskLevel: "High", consequence: "Firefighting failure.", proof: "Visual Audit", cadence: "weekly" },
                { id: "C-SAF-05", technicalProtocol: "Staff Evac Drill", floorAction: "Execute 5-min tabletop simulation for auditorium fire.", priority: "High", riskLevel: "Low", consequence: "Staff panic during crisis.", proof: "Training Log", cadence: "monthly" }
            ]
        },
        {
            title: "Hygiene & Sanitization",
            department: "Facilities",
            frequency: "Hourly",
            role: "Facility Hygiene & Cleaning Lead",
            summary: "Sanitization and waste segregation command.",
            icon: "sparkles",
            tasks: [
                { id: "C-HYG-01", technicalProtocol: "Restroom Odor Pulse", floorAction: "Audit 30-min cleaning logs for public zones.", priority: "High", riskLevel: "Low", consequence: "Primary guest rage driver.", proof: "Hourly Sheet", cadence: "hourly" },
                { id: "C-HYG-02", technicalProtocol: "Waste Segregation Sync", floorAction: "Verify 100% separation of paper/plastic at bins.", priority: "Low", riskLevel: "Low", consequence: "ESG score drop.", proof: "Visual Audit", cadence: "daily" },
                { id: "C-HYG-03", technicalProtocol: "Deep Carpet Extraction", floorAction: "Verify completion of row 1-5 steam cleaning.", priority: "Low", riskLevel: "Low", consequence: "Persistent theater odors.", proof: "Photo", cadence: "weekly" },
                { id: "C-HYG-04", technicalProtocol: "Handwash Soap Flow", floorAction: "Refill 100% of sensors in public washrooms.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene breakdown.", proof: "Visual Check", cadence: "daily" },
                { id: "C-HYG-05", technicalProtocol: "Screen-Surface Inspection", floorAction: "Check 100% of screens for zero liquid splatter.", priority: "High", riskLevel: "Medium", consequence: "Visual artifacts / refund risk.", proof: "Walkthrough", cadence: "daily" }
            ]
        }
    ]
};
