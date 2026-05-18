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
    description: "The definitive Sovereign v16.0 engine for multiplexes. Hardening 144 technical control points across Projection, Concession, and Public Safety.",
    icon: "popcorn",
    badgeText: "V16.0 SOVEREIGN",
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
            summary: "High-level strategic oversight of cinema group risk.",
            icon: "crown",
            tasks: [
                { id: "C-EXE-01", description: "P&L Reconciliation: Match week-to-date ticket settlements vs physical bank credits; flag gaps > 0.5%.", priority: "High", riskLevel: "High", consequence: "Undetected group-wide revenue leakage.", proof: "Financial Match" },
                { id: "C-EXE-02", description: "Statutory Shield Audit: Verify 100% validity of Fire NOC and Operating Licenses for all screens.", priority: "High", riskLevel: "High", consequence: "Government theater sealing.", proof: "License Registry" }
            ]
        },
        {
            title: "Site Readiness & MOD",
            department: "Management",
            frequency: "Daily",
            role: "General Manager",
            summary: "Site-level readiness and operational parity.",
            icon: "shield-check",
            tasks: [
                { id: "C-GM-01", description: "Ambiance Pulse: Audit lobby scent, music volume, and HVAC temp (Target 23°C) pre-opening.", priority: "Medium", riskLevel: "Low", consequence: "Poor guest first-impression.", proof: "Daily Log" },
                { id: "C-GM-03", description: "Escalation Triage: Review incident log for any guest dispute unresolved for > 12 hours.", priority: "High", riskLevel: "High", consequence: "Reputational damage.", proof: "Incident Log" }
            ]
        },
        {
            title: "Projection & Audio",
            department: "Technical",
            frequency: "Daily",
            role: "Projectionist",
            summary: "Zero-fail protocols for show uptime.",
            icon: "projector",
            tasks: [
                { id: "C-PRO-01", description: "Verify KDM key validity; confirm digital decryption keys for all today's shows are active.", priority: "High", riskLevel: "High", consequence: "Black-screen incident and 100% refund liability.", proof: "System Screen" },
                { id: "C-PRO-02", description: "Log projector lamps; replace if runtime exceeds manufacturer threshold (Target < 2000h).", priority: "High", riskLevel: "Medium", consequence: "Lamp failure and projector damage.", proof: "Lamp Log" },
                { id: "C-PRO-03", description: "Audio Channel Audit: Measure dB output of surround speakers; check for distortion or sync lag.", priority: "High", riskLevel: "Low", consequence: "Sub-par Dolby experience.", proof: "Meter Reading" },
                { id: "C-PRO-05", description: "UPS Load Test: Simulate power flip to verify projector backup runtime (Target > 10 mins).", priority: "High", riskLevel: "High", consequence: "Surgical halt during power flip.", proof: "Load Test" }
            ]
        },
        {
            title: "Concession & Yield",
            department: "Concession",
            frequency: "Daily",
            role: "Concession Lead",
            summary: "Profit protection at the counter.",
            icon: "cup-soda",
            tasks: [
                { id: "C-CON-01", description: "Popcorn Yield: Reconcile raw corn bags used vs buckets sold; match 1:40 target ratio.", priority: "High", riskLevel: "High", consequence: "Internal profit leakage.", proof: "Yield Sheet" },
                { id: "C-CON-02", description: "Syrup Brix Calibration: Measure sugar content in post-mix sodas; verify against brand standard.", priority: "Medium", riskLevel: "Low", consequence: "Poor taste and beverage waste.", proof: "Brix Meter" },
                { id: "C-CON-04", description: "Concession Cash Variance: Match physical drawer to POS report; witness mid-shift vault drop.", priority: "High", riskLevel: "High", consequence: "Untraceable cash theft.", proof: "Cash Log" }
            ]
        },
        {
            title: "Crowd Flow & Seating",
            department: "Operations",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Governance for interval rushes.",
            icon: "users",
            tasks: [
                { id: "C-FLR-02", description: "Interval Surge Plan: Verify usher positioning at concession queue before end-credit trigger.", priority: "High", riskLevel: "Medium", consequence: "Interval congestion.", proof: "Roster Match" },
                { id: "C-FLR-03", description: "Seat Fabric Audit: Inspect 20 random recliners for tears, stains, or motor sync lag.", priority: "Low", riskLevel: "Low", consequence: "Poor perception of luxury.", proof: "Visual Audit" },
                { id: "C-FLR-04", description: "3D Glasses Sync: Verify hygiene seal and signal sync for 100% of active eyewear stock.", priority: "Medium", riskLevel: "Low", consequence: "Visual clarity complaints.", proof: "Count Sheet" }
            ]
        },
        {
            title: "Lobby & Admissions",
            department: "Admissions",
            frequency: "Daily",
            role: "Lobby Host",
            summary: "First-touch ambiance and ticketing parity.",
            icon: "ticket",
            tasks: [
                { id: "C-LH-01", description: "Queue TAT Pulse: Measure box-office wait time during peak title arrivals; target < 4 mins.", priority: "Medium", riskLevel: "Low", consequence: "Basket abandonment.", proof: "Queue Log" },
                { id: "C-LH-02", description: "Poster Compliance: Verify alignment and lighting of 'Now Showing' backlit frames.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional marketing.", proof: "Walkthrough" }
            ]
        },
        {
            title: "Public Safety",
            department: "Safety",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Infrastructure hardening for public venues.",
            icon: "shield-alert",
            tasks: [
                { id: "C-SAF-01", description: "Egress Safety Sweep: Physically walk all fire exits; verify zero obstructions or trash blockages.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment (Never-event).", proof: "Patrol Log" },
                { id: "C-SAF-02", description: "PA System Test: Execute emergency announcement simulation; verify sound clarity in all screens.", priority: "High", riskLevel: "High", consequence: "Evacuation chaos.", proof: "Sound Test" },
                { id: "C-SAF-03", description: "Suppression Pin Check: Physically verify fire suppression pins are present on kitchen hoods.", priority: "High", riskLevel: "High", consequence: "Fire suppression failure.", proof: "Visual Check" }
            ]
        },
        {
            title: "Financial Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance Lead",
            summary: "Protects the ticketing revenue stream.",
            icon: "banknote",
            tasks: [
                { id: "C-FL-01", description: "Ticket Refund Fraud Audit: Cross-match 5 random refunds with customer phone and POS timestamp.", priority: "High", riskLevel: "Medium", consequence: "Internal till fraud.", proof: "Sample Match" },
                { id: "C-FL-02", description: "Vault Drop Witness: Physically observe shift-end cash-bag sealing for bank transit.", priority: "High", riskLevel: "High", consequence: "Untraceable theft.", proof: "Signed Log" }
            ]
        },
        {
            title: "Janitorial Logic",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Housekeeping",
            summary: "Hourly hygiene command for public zones.",
            icon: "sparkles",
            tasks: [
                { id: "C-HK-01", description: "Restroom Odor Pulse: Verify scent-diffuser battery and liquid par-levels in VIP washrooms.", priority: "High", riskLevel: "Low", consequence: "Guest rage driver.", proof: "Hourly Sheet" },
                { id: "C-HK-02", description: "Screen-1 Deep Clean: Verify completion of scheduled carpet scrub pre-morning show.", priority: "Low", riskLevel: "Low", consequence: "Foul odors.", proof: "Photo" }
            ]
        },
        {
            title: "Facility Vitals",
            department: "Facilities",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "Infrastructure safety and asset protection.",
            icon: "wrench",
            tasks: [
                { id: "C-ML-01", description: "Chiller Discharge Temp: Log HVAC output for Screen 1; verify target set-point 7°C +/- 1.", priority: "Medium", riskLevel: "Low", consequence: "Reduced guest dwell time.", proof: "BMS Reading" },
                { id: "C-ML-02", description: "Recliner Motor Audit: Test motor response and button sync for all Row-A seating.", priority: "Medium", riskLevel: "Low", consequence: "Guest refund requests.", proof: "Test Log" }
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
                { id: "C-SC-01", description: "Perimeter Guard Sobriety: Random breathalyzer check for 2 AM rotation; log result in ledger.", priority: "High", riskLevel: "High", consequence: "Vulnerable night perimeter.", proof: "Test Note" },
                { id: "C-SC-02", description: "CCTV Playback Sync: Verify 100% time-alignment between system clock and real-time.", priority: "High", riskLevel: "High", consequence: "Invalid legal evidence.", proof: "System Screen" }
            ]
        },
        {
            title: "HR & Compliance",
            department: "HR",
            frequency: "Monthly",
            role: "HR Assistant",
            summary: "Staff competency and health governance.",
            icon: "user-plus",
            tasks: [
                { id: "C-HR-01", description: "Health Cert Registry: Verify valid medical fitness cards for 100% of F&B handlers.", priority: "High", riskLevel: "High", consequence: "FSSAI shutdown of F&B.", proof: "Cert Registry" },
                { id: "C-HR-12", description: "Monthly HR Sign-off: Witness 100% compliance audit for statutory labor posters.", priority: "Medium", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Summary" }
            ]
        }
    ]
};
