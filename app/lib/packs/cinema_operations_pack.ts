import type { PremiumPack } from "@/lib/premium-packs";

export const cinema_operations_pack: PremiumPack = {
    id: 'cinema_operations_pack',
    title: "Cinema Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 899,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/checkout/buy/0acf829c-e492-4f66-ae74-0231bfe0bc82',
    category: "Entertainment & Events",
    family: "retail",
    sub_type: "cinema",
    description: "The definitive Sovereign v17.7 technical engine for multiplexes. Hardening 194 technical control points across Projection, Audience Flow, and Concession Yield.",
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
                { id: "C-EXE-08", technicalProtocol: "Distributor Asset Return", floorAction: "Verify shipment of hard drives (DCP) back to distributors < 24h post-run.", priority: "Medium", riskLevel: "Low", consequence: "Late return penalties and relationship damage.", proof: "Logistics Waybill", cadence: "weekly" },
                { id: "C-EXE-09", technicalProtocol: "Marketing Parity Audit", floorAction: "Verify physical poster frames match current week's release schedule.", priority: "Low", riskLevel: "Low", consequence: "Customer confusion and wasted promo space.", proof: "Visual Check", cadence: "weekly" },
                { id: "C-EXE-10", technicalProtocol: "Regional Ops Briefing", floorAction: "Execute 5-min HOD pulse on upcoming blockbusters and weekend loads.", priority: "Medium", riskLevel: "Low", consequence: "Disorganized launch.", proof: "Meeting Note", cadence: "weekly" },
                { id: "C-EXE-11", technicalProtocol: "CAPEX Equipment Life", floorAction: "Review lamp-hour trends to forecast $5,000 bulb replacements.", priority: "High", riskLevel: "Medium", consequence: "Unplanned downtime and emergency budget spend.", proof: "Trend Report", cadence: "monthly" },
                { id: "C-EXE-12", technicalProtocol: "Staff Attrition Risk", floorAction: "Review turnover metrics for technical projectionists.", priority: "Medium", riskLevel: "Low", consequence: "Loss of institutional memory.", proof: "HR Dashboard", cadence: "monthly" }
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
                { id: "C-DUTY-10", technicalProtocol: "Daily MOD Sign-off", floorAction: "Final daily operational summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Sheet", verificationRequired: true, cadence: "daily" },
                { id: "C-DUTY-11", technicalProtocol: "Simultaneous Screen Exit", floorAction: "Deploy extra guards to Foyer if 3+ screens end in < 10 mins.", priority: "High", riskLevel: "High", consequence: "Panic surge and foyer gridlock.", proof: "Deployment Log", cadence: "incident-based" },
                { id: "C-DUTY-12", technicalProtocol: "Staff Break Rotation", floorAction: "Ensure counter staff rotate before 6 PM blockbuster peak.", priority: "Medium", riskLevel: "Low", consequence: "Exhaustion errors during rush.", proof: "Roster Check", cadence: "daily" }
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
                { id: "C-PRO-07", technicalProtocol: "Backup Ingest Verify", floorAction: "Verify identical DCP files are loaded on the secondary server.", priority: "Medium", riskLevel: "Low", consequence: "Zero recovery during server crash.", proof: "System Result", cadence: "weekly" },
                { id: "C-PRO-08", technicalProtocol: "Automation Logic Sync", floorAction: "Test music-to-feature crossover cues in 1 random screen.", priority: "Medium", riskLevel: "Low", consequence: "Awkward silences / transition fails.", proof: "Test Note", cadence: "daily" },
                { id: "C-PRO-09", technicalProtocol: "Fire-Suppressant Gauge", floorAction: "Check pressure in booth CO2 automated system.", priority: "High", riskLevel: "High", consequence: "Uncontrolled projection fire.", proof: "Gauge Log", verificationRequired: true, cadence: "daily" },
                { id: "C-PRO-10", technicalProtocol: "Booth Cleaning Pulse", floorAction: "Verify dust-free floor and racks to prevent hardware heat.", priority: "Low", riskLevel: "Low", consequence: "Server degradation.", proof: "Walkthrough", cadence: "daily" },
                { id: "C-PRO-11", technicalProtocol: "Playlist Corruption Fallback", floorAction: "Pre-load basic emergency 'Loop' file for 0-min recovery.", priority: "High", riskLevel: "Medium", consequence: "Dead silence during technical halt.", proof: "Visual Check", cadence: "daily" },
                { id: "C-PRO-12", technicalProtocol: "Emergency Reboot Sequence", floorAction: "Drill 3-min cold reboot of Screen 1 projector.", priority: "Medium", riskLevel: "Low", consequence: "Panic during extended black-screen.", proof: "Drill Record", cadence: "monthly" }
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
                { id: "C-USH-10", technicalProtocol: "EOD Seat Retraction", floorAction: "Verify 100% of seats are in retracted 'UP' position.", priority: "Low", riskLevel: "Low", consequence: "Wear and tear / slow cleaning.", proof: "Walkthrough", cadence: "daily" },
                { id: "C-USH-11", technicalProtocol: "Simultaneous Screen Exit", floorAction: "Coordinate usher deployment when Screen A and B end in < 5 mins.", priority: "High", riskLevel: "High", consequence: "Crowd crush in lobby.", proof: "Deployment Log", cadence: "incident-based" },
                { id: "C-USH-12", technicalProtocol: "Quiet-Patrol Frequency", floorAction: "Execute 10-min walk inside dark screen to deter phone use.", priority: "Low", riskLevel: "Low", consequence: "Guest experience decay.", proof: "Patrol Log", cadence: "hourly" }
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
                { id: "C-TKT-10", technicalProtocol: "EOD Admissions Summary", floorAction: "Final sign-off on total guest footfall vs revenue.", priority: "High", riskLevel: "Low", consequence: "Loss of fiscal control.", proof: "Signed Sheet", verificationRequired: true, cadence: "daily" },
                { id: "C-TKT-11", technicalProtocol: "Aggregator API Pulse", floorAction: "Verify real-time booking updates < 2s response time.", priority: "High", riskLevel: "Medium", consequence: "Last-minute seat conflicts.", proof: "System Screen", cadence: "daily" },
                { id: "C-TKT-12", technicalProtocol: "Voucher Fraud Audit", floorAction: "Review 10 random redeemed coupons for validity.", priority: "Medium", riskLevel: "Low", consequence: "Systemic discount abuse.", proof: "Audit Sample", cadence: "weekly" }
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
                { id: "C-TCE-05", technicalProtocol: "EOD Cash Drop", floorAction: "Place bills in secure transit bag and log seal number.", priority: "High", riskLevel: "High", consequence: "Cash theft.", proof: "Seal Log", verificationRequired: true, cadence: "daily" },
                { id: "C-TCE-06", technicalProtocol: "Loyalty Upselling", floorAction: "Offer membership program to 10 random non-member guests.", priority: "Low", riskLevel: "Low", consequence: "Lower LTV capture.", proof: "POS Record", cadence: "daily" },
                { id: "C-TCE-07", technicalProtocol: "Queue Courtesy Check", floorAction: "Acknowledge next guest in line if wait > 2 mins.", priority: "Low", riskLevel: "Low", consequence: "Guest irritation.", proof: "Supervisor Obs", cadence: "hourly" },
                { id: "C-TCE-08", technicalProtocol: "Member Verification", floorAction: "Cross-match ID with member profile photo on high-redemption.", priority: "Medium", riskLevel: "Low", consequence: "Membership account sharing.", proof: "Visual Match", cadence: "daily" },
                { id: "C-TCE-09", technicalProtocol: "Printer Parity", floorAction: "Verify clear print quality on thermal ticket rolls.", priority: "Low", riskLevel: "Low", consequence: "Legibility issues at gate.", proof: "Visual Check", cadence: "daily" },
                { id: "C-TCE-10", technicalProtocol: "Handover Count", floorAction: "Blind count petty cash before shift rotation.", priority: "High", riskLevel: "Medium", consequence: "Untraceable shortage.", proof: "Dual Sign", cadence: "daily" }
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
                { id: "C-USA-05", technicalProtocol: "Seating Assistance", floorAction: "Aid 100% of late arrivals to correct rows using torches.", priority: "Medium", riskLevel: "Low", consequence: "Crowd disruption.", proof: "Supervisor Obs", cadence: "hourly" },
                { id: "C-USA-06", technicalProtocol: "Flashlight Routing", floorAction: "Use 45-degree floor-aimed beam to minimize screen flare.", priority: "Low", riskLevel: "Low", consequence: "Visual disruption for others.", proof: "Visual Check", cadence: "hourly" },
                { id: "C-USA-07", technicalProtocol: "Seat Conflict Escalation", floorAction: "Escalate double-booked seat claims to MOD < 2 mins.", priority: "High", riskLevel: "Low", consequence: "Auditorium argument / panic.", proof: "Incident Note", cadence: "incident-based" },
                { id: "C-USA-08", technicalProtocol: "Temperature Pulse", floorAction: "Log guest feedback on cold-spots in front rows.", priority: "Low", riskLevel: "Low", consequence: "Discomfort.", proof: "Log Note", cadence: "hourly" },
                { id: "C-USA-09", technicalProtocol: "Quiet Closing", floorAction: "Confirm silent closing of auditorium doors during feature.", priority: "Low", riskLevel: "Low", consequence: "Noise pollution.", proof: "Visual Check", cadence: "hourly" },
                { id: "C-USA-10", technicalProtocol: "Show End Readiness", floorAction: "Position at exits 5 mins pre-credits for egress aid.", priority: "Medium", riskLevel: "Low", consequence: "Exit surge chaos.", proof: "Visual Check", cadence: "hourly" }
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
                { id: "C-GXP-04", technicalProtocol: "Feedback Kiosk Charge", floorAction: "Ensure tablets are operational and app is active.", priority: "Low", riskLevel: "Low", consequence: "Lost survey data.", proof: "Device Check", cadence: "daily" },
                { id: "C-GXP-05", technicalProtocol: "VIP Lounge Readiness", floorAction: "Inspect amenities and HVAC in premium waiting zone.", priority: "Medium", riskLevel: "Low", consequence: "Luxury brand dilution.", proof: "Photo", cadence: "daily" },
                { id: "C-GXP-06", technicalProtocol: "Accessibility Support", floorAction: "Verify wheelchair readiness and elevator access pre-arrival.", priority: "High", riskLevel: "Medium", consequence: "Legal discrimination claims.", proof: "Visual Audit", cadence: "daily" },
                { id: "C-GXP-07", technicalProtocol: "Loyalty Portal Triage", floorAction: "Resolve all points-mismatch claims < 24h.", priority: "Low", riskLevel: "Low", consequence: "Member attrition.", proof: "System Log", cadence: "daily" },
                { id: "C-GXP-08", technicalProtocol: "Refund Transaction Match", floorAction: "Cross-check 100% of manual refunds against CCTV verification.", priority: "High", riskLevel: "High", consequence: "Internal refund fraud.", proof: "Dual Sign", verificationRequired: true, cadence: "daily" },
                { id: "C-GXP-09", technicalProtocol: "Lost Child Protocol", floorAction: "Execute 10-min announcement and search sweep.", priority: "High", riskLevel: "High", consequence: "[Never-Event: Child loss].", proof: "Incident Log", verificationRequired: true, cadence: "incident-based" },
                { id: "C-GXP-10", technicalProtocol: "Brand Standard Pulse", floorAction: "Confirm 100% of FOH staff use the scripted brand greeting.", priority: "Low", riskLevel: "Low", consequence: "Inconsistent service culture.", proof: "Supervisor Obs", cadence: "daily" }
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
                { id: "C-SRG-05", technicalProtocol: "Emergency Comms Sync", floorAction: "Brief security guards on current house-full status.", priority: "Low", riskLevel: "Low", consequence: "Perimeter breakdown.", proof: "Briefing Log", cadence: "daily" },
                { id: "C-SRG-06", technicalProtocol: "Simultaneous Exit Wave", floorAction: "Coordinate dispersal if 3 blockbusters end in < 10 min window.", priority: "High", riskLevel: "High", consequence: "Severe lobby congestion / panic.", proof: "Wave Log", verificationRequired: true, cadence: "incident-based" },
                { id: "C-SRG-07", technicalProtocol: "Foyer Bottleneck Scan", floorAction: "Identify and clear groups lingering in fire-exit paths.", priority: "High", riskLevel: "High", consequence: "Blocked egress during alarm.", proof: "Walkthrough", cadence: "hourly" },
                { id: "C-SRG-08", technicalProtocol: "Staircase Congestion", floorAction: "Direct traffic to secondary exits if main stairs exceed density.", priority: "Medium", riskLevel: "Medium", consequence: "Slip/Fall surge.", proof: "Patrol Note", cadence: "hourly" },
                { id: "C-SRG-09", technicalProtocol: "Counter Queue TAT", floorAction: "Redirect guests to Screen 2 snack counter if queue > 10 pax.", priority: "Low", riskLevel: "Low", consequence: "Lost interval spend.", proof: "Visual Count", cadence: "hourly" },
                { id: "C-SRG-10", technicalProtocol: "EOD Evacuation Readiness", floorAction: "Confirm all foyer gates are in 'Fail-Safe' open state.", priority: "High", riskLevel: "High", consequence: "Entrapment risk.", proof: "Visual Check", verificationRequired: true, cadence: "daily" }
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
                { id: "C-SND-05", technicalProtocol: "Amp Rack Thermals", floorAction: "Verify cooling fan functionality in main audio rack.", priority: "High", riskLevel: "Medium", consequence: "Amplifier thermal shutdown.", proof: "Temp Reading", cadence: "daily" },
                { id: "C-SND-06", technicalProtocol: "Auditorium SPL Balancing", floorAction: "Verify volume parity across all 8 screens using standard pink-noise.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent guest quality.", proof: "Meter Report", cadence: "monthly" },
                { id: "C-SND-07", technicalProtocol: "Dead-Speaker Detection", floorAction: "Sweep each array point for zero-output units.", priority: "Medium", riskLevel: "Low", consequence: "Dead acoustic zones.", proof: "Physical Sweep", cadence: "weekly" },
                { id: "C-SND-08", technicalProtocol: "Bass Distortion Sweep", floorAction: "Test rears for rattle/distortion during sub-frequency peak.", priority: "Low", riskLevel: "Low", consequence: "Distracting noise.", proof: "Acoustic Note", cadence: "weekly" },
                { id: "C-SND-09", technicalProtocol: "Amp Failover Logic", floorAction: "Simulate failure of Amp-1; verify 5s switch to backup.", priority: "High", riskLevel: "Medium", consequence: "Prolonged audio blackout.", proof: "Test Log", cadence: "monthly" },
                { id: "C-SND-10", technicalProtocol: "Channel Imbalance Audit", floorAction: "Verify Left/Right gain parity < 0.5dB variance.", priority: "Low", riskLevel: "Low", consequence: "Skewed audio image.", proof: "Meter Reading", cadence: "monthly" }
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
                { id: "C-VQC-05", technicalProtocol: "Ghost-Image Scan", floorAction: "Check screen surface for wrinkles or 'hot-spots'.", priority: "Low", riskLevel: "Low", consequence: "Permanent screen damage.", proof: "Walkthrough", cadence: "weekly" },
                { id: "C-VQC-06", technicalProtocol: "Color Tempimeter Test", floorAction: "Audit white-balance consistency between Screen 1 and Screen 5.", priority: "Low", riskLevel: "Low", consequence: "Noticeable brand variance.", proof: "Meter Log", cadence: "monthly" },
                { id: "C-VQC-07", technicalProtocol: "Lens Focus Drift", floorAction: "Adjust convergence to eliminate blue/red fringing.", priority: "Medium", riskLevel: "Low", consequence: "Soft/Blurry image.", proof: "Visual Calibration", cadence: "weekly" },
                { id: "C-VQC-08", technicalProtocol: "Contrast Ratio Pulse", floorAction: "Measure black-levels in dark auditorium (Target > 2000:1).", priority: "Low", riskLevel: "Low", consequence: "Washed out visuals.", proof: "Meter Result", cadence: "monthly" },
                { id: "C-VQC-09", technicalProtocol: "Subtitle Sync Validation", floorAction: "Confirm first 5 mins of blockbuster has correct text timing.", priority: "High", riskLevel: "Low", consequence: "Refund liability.", proof: "Visual Confirm", cadence: "daily" },
                { id: "C-VQC-10", technicalProtocol: "Projection Power Log", floorAction: "Log KWH usage per show-slot for energy benchmark.", priority: "Low", riskLevel: "Low", consequence: "Inefficient ESG data.", proof: "Meter Reading", cadence: "daily" }
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
                { id: "C-MNT-05", technicalProtocol: "Cup-Holder Sanitization", floorAction: "Verify removal of residue from premium row holders.", priority: "Low", riskLevel: "Low", consequence: "Stickiness/Hygiene rage.", proof: "Visual Audit", cadence: "daily" },
                { id: "C-MNT-06", technicalProtocol: "HVAC Noise Whistle", floorAction: "Inspect duct dampers for high-velocity noise leaks.", priority: "Low", riskLevel: "Low", consequence: "Sound quality decay.", proof: "Acoustic Check", cadence: "weekly" },
                { id: "C-MNT-07", technicalProtocol: "Recliner Battery Status", floorAction: "Verify charging cycle for untethered premium seats.", priority: "Medium", riskLevel: "Low", consequence: "Dead seat during feature.", proof: "Status Log", cadence: "daily" },
                { id: "C-MNT-08", technicalProtocol: "Floor Lighting Lux", floorAction: "Confirm step-lights reach min 2.0 lux on tread.", priority: "High", riskLevel: "High", consequence: "Safety non-compliance.", proof: "Meter Result", verificationRequired: true, cadence: "monthly" },
                { id: "C-MNT-09", technicalProtocol: "Aisle Carpet Trip-Edge", floorAction: "Secure any loose transitions between lobby and screen.", priority: "High", riskLevel: "High", consequence: "Fall litigation.", proof: "Visual Check", verificationRequired: true, cadence: "weekly" },
                { id: "C-MNT-10", technicalProtocol: "Emergency Exit Light", floorAction: "Verify 100% battery backup for exit signs.", priority: "High", riskLevel: "High", consequence: "Panic gridlock.", proof: "Test Note", verificationRequired: true, cadence: "monthly" }
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
                { id: "C-CON-10", technicalProtocol: "EOD F&B Reconciliation", floorAction: "Final sign-off on cash vs stock issued.", priority: "High", riskLevel: "Low", consequence: "Loss of profit control.", proof: "Signed Summary", verificationRequired: true, cadence: "daily" },
                { id: "C-CON-11", technicalProtocol: "Syrup-to-Cup Variance", floorAction: "Match bag-in-box usage vs total soda SKU sales.", priority: "High", riskLevel: "Medium", consequence: "Undetected beverage theft.", proof: "Yield Report", cadence: "weekly" },
                { id: "C-CON-12", technicalProtocol: "Refill Abuse Tracking", floorAction: "Audit 10 random 'Free Refill' redemptions for validity.", priority: "Medium", riskLevel: "Low", consequence: "Systemic profit erosion.", proof: "POS Audit", cadence: "weekly" }
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
                { id: "C-SCS-05", technicalProtocol: "Handwash Frequency", floorAction: "Execute 20s scrub every 2 hours or post-spill.", priority: "High", riskLevel: "High", consequence: "Cross-contamination.", proof: "Staff Log", cadence: "hourly" },
                { id: "C-SCS-06", technicalProtocol: "Order Queue Velocity", floorAction: "Process 100% of orders in < 3 mins during interval.", priority: "Medium", riskLevel: "Low", consequence: "Lost interval sales.", proof: "TAT Log", cadence: "hourly" },
                { id: "C-SCS-07", technicalProtocol: "Dispenser Sanitization", floorAction: "Flush nacho cheese pumps with 80°C water.", priority: "High", riskLevel: "Medium", consequence: "Bacterial growth.", proof: "Cleaning Log", cadence: "daily" },
                { id: "C-SCS-08", technicalProtocol: "Hot-Holding Rotation", floorAction: "Discard patties exceeding 2-hour holding window.", priority: "High", riskLevel: "High", consequence: "Foodborne illness.", proof: "Waste Log", verificationRequired: true, cadence: "hourly" },
                { id: "C-SCS-09", technicalProtocol: "Combo Attachment", floorAction: "Suggest combo upgrades to 100% of single item buyers.", priority: "Low", riskLevel: "Low", consequence: "Revenue missed.", proof: "Supervisor Obs", cadence: "hourly" },
                { id: "C-SCS-10", technicalProtocol: "EOD Scale Zero", floorAction: "Calibrate concession scales for portion consistency.", priority: "Low", riskLevel: "Low", consequence: "Inconsistent portioning.", proof: "Visual Check", cadence: "daily" }
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
                { id: "C-INV-03", technicalProtocol: "Critical Spares Audit", floorAction: "Verify stock of 2 spare projector lamps and 10 MCBs.", priority: "High", riskLevel: "Medium", consequence: "Extended screen downtime.", proof: "Stock Sheet", cadence: "monthly" },
                { id: "C-INV-04", technicalProtocol: "3D Glasses Par-Level", floorAction: "Verify 500 sanitized units available for IMAX list.", priority: "Medium", riskLevel: "Low", consequence: "Delayed entry.", proof: "Visual Count", cadence: "daily" },
                { id: "C-INV-05", technicalProtocol: "Cleaning Chemical SKU", floorAction: "Confirm 20L stock of 'High-Grip' floor sanitizer.", priority: "Low", riskLevel: "Low", consequence: "Slip hazard risk.", proof: "Stock Sheet", cadence: "weekly" },
                { id: "C-INV-06", technicalProtocol: "Supplier Weight Fraud", floorAction: "Verify tare-weight calibration of receiving bay scale.", priority: "High", riskLevel: "Medium", consequence: "Systemic profit erosion.", proof: "Calibration Log", verificationRequired: true, cadence: "monthly" },
                { id: "C-INV-07", technicalProtocol: "FIFO Freezer Audit", floorAction: "Check 10 random SKUs for date-matching stock rotation.", priority: "Medium", riskLevel: "Medium", consequence: "Expired stock write-off.", proof: "Visual Audit", cadence: "weekly" },
                { id: "C-INV-08", technicalProtocol: "Uniform Inventory", floorAction: "Verify 10 spare shirts in staff locker stock.", priority: "Low", riskLevel: "Low", consequence: "Grooming standard fail.", proof: "Stock Check", cadence: "monthly" },
                { id: "C-INV-09", technicalProtocol: "DCP Transit Security", floorAction: "Log seal number on incoming film hard drives.", priority: "Medium", riskLevel: "Low", consequence: "Content security risk.", proof: "Seal Log", cadence: "daily" },
                { id: "C-INV-10", technicalProtocol: "Packaging Parity", floorAction: "Confirm branded bucket stock matches 3-day forecast.", priority: "Low", riskLevel: "Low", consequence: "Plain bucket use (Brand decay).", proof: "Visual Check", cadence: "daily" }
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
                { id: "C-SEC-05", technicalProtocol: "Visitor ID Capture", floorAction: "Verify 100% ID logging at staff entrance.", priority: "High", riskLevel: "Low", consequence: "Unauthorized intruder access.", proof: "Registry Audit", cadence: "daily" },
                { id: "C-SEC-06", technicalProtocol: "Suspicious Object Sweep", floorAction: "Conduct 15-min foyer patrol pre-opening.", priority: "High", riskLevel: "High", consequence: "Bomb threat liability.", proof: "Patrol Note", verificationRequired: true, cadence: "hourly" },
                { id: "C-SEC-07", technicalProtocol: "Intruder Gate Control", floorAction: "Test 100% of electromagnetic foyer locks.", priority: "Medium", riskLevel: "Medium", consequence: "Unauthorized crowd entry.", proof: "Test Note", cadence: "weekly" },
                { id: "C-SEC-08", technicalProtocol: "Back-Alley Lighting", floorAction: "Verify 100% illumination of staff parking exit.", priority: "Low", riskLevel: "Low", consequence: "Assault risk.", proof: "Walkthrough", cadence: "daily" },
                { id: "C-SEC-09", technicalProtocol: "Fire-Exit Perimeter", floorAction: "Verify external exit area is clear of vehicles/obstructions.", priority: "High", riskLevel: "High", consequence: "Blocked egress.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "C-SEC-10", technicalProtocol: "Handover ID Match", floorAction: "Confirm 100% guard names match approved agency roster.", priority: "Medium", riskLevel: "Low", consequence: "Unvetted guard deployment.", proof: "ID Audit", cadence: "daily" }
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
                { id: "C-SAF-05", technicalProtocol: "Staff Evac Drill", floorAction: "Execute 5-min tabletop simulation for auditorium fire.", priority: "High", riskLevel: "Low", consequence: "Staff panic during crisis.", proof: "Training Log", cadence: "monthly" },
                { id: "C-SAF-06", technicalProtocol: "Panic Diversion Routing", floorAction: "Confirm all foyer diversions are correctly marked for surge.", priority: "High", riskLevel: "High", consequence: "Exit surge gridlock.", proof: "Visual Check", verificationRequired: true, cadence: "weekly" },
                { id: "C-SAF-07", technicalProtocol: "Accessibility Evac", floorAction: "Verify functioning of 100% of disabled-seat alarms.", priority: "High", riskLevel: "High", consequence: "Inability to aid vulnerable guests.", proof: "Test Log", verificationRequired: true, cadence: "monthly" },
                { id: "C-SAF-08", technicalProtocol: "Emergency Light Lux", floorAction: "Test 10 random lights for 1.0 lux min floor level.", priority: "Medium", riskLevel: "Medium", consequence: "Panic during blackout.", proof: "Meter Reading", cadence: "monthly" },
                { id: "C-SAF-09", technicalProtocol: "Sprinkler Chain-Lock", floorAction: "Physically verify main control valve is locked OPEN.", priority: "High", riskLevel: "High", consequence: "Zero sprinkler coverage.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "C-SAF-10", technicalProtocol: "Medical Bay Inventory", floorAction: "Confirm oxygen cylinder and heart-pills are stocked.", priority: "High", riskLevel: "High", consequence: "Fatal delay in medical aid.", proof: "Stock Count", verificationRequired: true, cadence: "weekly" },
                { id: "C-SAF-11", technicalProtocol: "AED Battery Pulse", floorAction: "Check Green/Active status on 100% of lobby units.", priority: "High", riskLevel: "High", consequence: "Failed resuscitation.", proof: "Status Log", verificationRequired: true, cadence: "daily" },
                { id: "C-SAF-12", technicalProtocol: "Smoke Vent Logic", floorAction: "Test auditorium ceiling vent release dampers.", priority: "High", riskLevel: "High", consequence: "Smoke inhalation fatality.", proof: "Test Record", cadence: "monthly" }
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
                { id: "GR-FPM-10", technicalProtocol: "Waste Segregation Sync", floorAction: "Verify 100% separation of paper/plastic at bins.", priority: "Low", riskLevel: "Low", consequence: "ESG score drop.", proof: "Visual Audit", cadence: "daily" },
                { id: "C-HYG-03", technicalProtocol: "Deep Carpet Extraction", floorAction: "Verify completion of row 1-5 steam cleaning.", priority: "Low", riskLevel: "Low", consequence: "Persistent theater odors.", proof: "Photo", cadence: "weekly" },
                { id: "C-HYG-04", technicalProtocol: "Handwash Soap Flow", floorAction: "Refill 100% of sensors in public washrooms.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene breakdown.", proof: "Visual Check", cadence: "daily" },
                { id: "C-HYG-05", technicalProtocol: "Screen-Surface Inspection", floorAction: "Check 100% of screens for zero liquid splatter.", priority: "High", riskLevel: "Medium", consequence: "Visual artifacts / refund risk.", proof: "Walkthrough", cadence: "daily" },
                { id: "C-HYG-06", technicalProtocol: "Bio-Hazard Cleanup", floorAction: "Deploy spill-kits for any auditorium fluid incidents.", priority: "High", riskLevel: "High", consequence: "Pathogen exposure risk.", proof: "Incident Note", cadence: "incident-based" },
                { id: "C-HYG-07", technicalProtocol: "Trash Compaction", floorAction: "Execute 2-hourly removal of lobby bins during peak.", priority: "Low", riskLevel: "Low", consequence: "Overflowing bins / brand decay.", proof: "Log Entry", cadence: "hourly" },
                { id: "C-HYG-08", technicalProtocol: "Concession Air Quality", floorAction: "Clean return-air filters above snack counters.", priority: "Medium", riskLevel: "Low", consequence: "Grease smell in foyer.", proof: "Visual Check", cadence: "weekly" },
                { id: "C-HYG-09", technicalProtocol: "Seat Fabric Sanitize", floorAction: "Steam-treat 10 random recliners for bacterial control.", priority: "Low", riskLevel: "Low", consequence: "Member dissatisfaction.", proof: "Work Log", cadence: "daily" },
                { id: "C-HYG-10", technicalProtocol: "Waste Reconcile", floorAction: "Log KG weight of plastic waste vs paper waste.", priority: "Low", riskLevel: "Low", consequence: "Zero ESG visibility.", proof: "Weight Slip", cadence: "daily" }
            ]
        }
    ]
};
