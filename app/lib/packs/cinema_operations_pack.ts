
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
    description: "The definitive Sovereign v11.2 technical engine for cinema groups and multiplexes. Hardening 150+ control points from Projection QC to Concession Yield.",
    heroHeadline: "Stop Projection Failures and Concession Leakage.",
    heroSubheadline: "Track technical readiness, auditorium standards, and concession yields across every screen in your group.",
    pricingUrgency: "A single projection failure during a blockbuster opening costs 100x more than this system.",
    consultingAnchor: 5000,
    icon: "popcorn",
    badgeText: "V11.2 SOVEREIGN",
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
            title: "Group Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Owner / Managing Director",
            summary: "High-level strategic oversight of cinema group risk and profit.",
            icon: "crown",
            tasks: [
                { id: "C-EXE-01", description: "Review 'Empire Mood' scores and ticket sales trends across all units.", priority: "High", riskLevel: "Low", consequence: "Operational drift and loss of multi-unit focus.", proof: "Console Review" },
                { id: "C-EXE-02", description: "Match the weekly concession payout report against actual bank deposits.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue leakage.", proof: "Ledger Match" },
                { id: "C-EXE-03", description: "Check if the Entertainment Tax filings are up to date.", priority: "High", riskLevel: "High", consequence: "Government fines and potential theater sealing.", proof: "Tax Receipt" },
                { id: "C-EXE-04", description: "Audit mystery auditor scores: focus on 'Red' safety failures.", priority: "Medium", riskLevel: "Low", consequence: "Lowering of brand standards.", proof: "Audit Report" },
                { id: "C-EXE-05", description: "Verify Fire License (NOC) validity for all screens.", priority: "High", riskLevel: "High", consequence: "Catastrophic legal liability and closure.", proof: "NOC Certificate" },
                { id: "C-EXE-06", description: "Review electricity spikes: identify screens wasting AC during off-peak.", priority: "Low", riskLevel: "Low", consequence: "Wasted overhead costs.", proof: "P&L Note" },
                { id: "C-EXE-07", description: "Audit senior management floor presence during blockbuster weekends.", priority: "Medium", riskLevel: "Low", consequence: "Management disconnect during peak crowds.", proof: "Roster Log" },
                { id: "C-EXE-08", description: "Review 'Major Incident' log: focus on projection failures.", priority: "High", riskLevel: "High", consequence: "Recurring technical loss and PR damage.", proof: "Incident Log" },
                { id: "C-EXE-09", description: "Check status of CAPEX upgrades for Screen 1 recliners.", priority: "Medium", riskLevel: "Medium", consequence: "Budget overruns and delayed launch.", proof: "Project Log" },
                { id: "C-EXE-10", description: "Verify insurance coverage for 'Public Liability' is active.", priority: "High", riskLevel: "High", consequence: "Financial ruin during a crowd incident.", proof: "Policy File" },
                { id: "C-EXE-11", description: "Audit staff payroll: verify OT for midnight shows.", priority: "High", riskLevel: "Medium", consequence: "Employee disputes and legal risk.", proof: "Payroll Register" },
                { id: "C-EXE-12", description: "Check group ranking on BookMyShow and Google Maps.", priority: "High", riskLevel: "Low", consequence: "Loss of bookings if scores drop.", proof: "CSAT Report" },
                { id: "C-EXE-13", description: "Verify all NDAs are signed by visiting distributors.", priority: "High", riskLevel: "Medium", consequence: "Leakage of film industry trade secrets.", proof: "Signed File" },
                { id: "C-EXE-14", description: "Review 'Training Compliance' for new concession staff.", priority: "Medium", riskLevel: "Low", consequence: "Service decay and hygiene risk.", proof: "Matrix File" },
                { id: "C-EXE-15", description: "Check if PF and ESI payments for staff are updated.", priority: "High", riskLevel: "High", consequence: "Legal penalties.", proof: "Compliance File" },
                { id: "C-EXE-16", description: "Compare vendor rates for bulk popcorn kernels and oil.", priority: "Medium", riskLevel: "Low", consequence: "Inflated procurement costs.", proof: "Vendor Log" },
                { id: "C-EXE-17", description: "Verify projector lamp replacement fund status.", priority: "Medium", riskLevel: "Medium", consequence: "Sudden blackout and show cancellation.", proof: "Finance Note" },
                { id: "C-EXE-18", description: "Audit petty cash surprise count at main box office.", priority: "Medium", riskLevel: "High", consequence: "Small-scale internal theft.", proof: "Audit Note" },
                { id: "C-EXE-19", description: "Review resignation exit comments: identify toxic zones.", priority: "Low", riskLevel: "Low", consequence: "High staff turnover.", proof: "Exit Notes" },
                { id: "C-EXE-20", description: "Final Weekly Strategic sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of board-level oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Theater Command",
            department: "Operations",
            frequency: "Daily",
            role: "Cinema General Manager",
            summary: "Theater readiness, ambiance, and guest flow command.",
            icon: "theater",
            tasks: [
                { id: "C-OPS-01", description: "Check lobby ambiance: Scent, Music, and Temp (23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor first impression for guests.", proof: "Daily Log" },
                { id: "C-OPS-02", description: "Verify all digital signage and trailers are playing.", priority: "Medium", riskLevel: "Low", consequence: "Lost marketing and promo revenue.", proof: "Visual Check" },
                { id: "C-OPS-03", description: "Inspect auditorium temperature during peak occupancy.", priority: "High", riskLevel: "Low", consequence: "Guest complaints and early exits.", proof: "Temp Note" },
                { id: "C-OPS-04", description: "Audit restroom hygiene logs every hour.", priority: "High", riskLevel: "Low", consequence: "Major driver of negative reviews.", proof: "Hourly Sheet" },
                { id: "C-OPS-05", description: "Verify staff grooming: check name tags and clean uniforms.", priority: "Low", riskLevel: "Low", consequence: "Professional brand image drop.", proof: "Briefing Log" },
                { id: "C-OPS-06", description: "Brief team on today's movie lineup and F&B combos.", priority: "High", riskLevel: "Low", consequence: "Uninformed staff and lost upsells.", proof: "Briefing Sheet" },
                { id: "C-OPS-07", description: "Check status of 'Open' guest feedback from BMS.", priority: "High", riskLevel: "High", consequence: "Escalated viral PR damage.", proof: "Feedback Log" },
                { id: "C-OPS-08", description: "Inspect VIP/Recliner seats for mechanical function.", priority: "High", riskLevel: "Low", consequence: "Guest refund requests.", proof: "Visual Audit" },
                { id: "C-OPS-09", description: "Check Wi-Fi portal login speed in the lobby.", priority: "Low", riskLevel: "Low", consequence: "Immediate guest complaints.", proof: "Phone Test" },
                { id: "C-OPS-10", description: "Verify parking barrier functionality and lighting.", priority: "Medium", riskLevel: "Medium", consequence: "Security risk and exit gridlock.", proof: "Photo" },
                { id: "C-OPS-11", description: "Identify VIP/Influencer arrivals for greet.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-profile PR.", proof: "Roster Match" },
                { id: "C-OPS-12", description: "Check availability of 3D glasses: cleaned and packed.", priority: "High", riskLevel: "Low", consequence: "Lost revenue during 3D shows.", proof: "Stock Check" },
                { id: "C-OPS-13", description: "Inspect back-alley for overflowing waste.", priority: "Low", riskLevel: "High", consequence: "Pests and odors.", proof: "Walkthrough" },
                { id: "C-OPS-14", description: "Verify Lobby Wi-Fi password is visible at Box Office.", priority: "Low", riskLevel: "Low", consequence: "Service friction.", proof: "Visual Check" },
                { id: "C-OPS-15", description: "Audit lobby furniture for any tears or damage.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Visual Audit" },
                { id: "C-OPS-16", description: "Check staff break-room hygiene.", priority: "Low", riskLevel: "Low", consequence: "Low staff morale.", proof: "Cleaning Note" },
                { id: "C-OPS-17", description: "Verify availability of 'Wet Floor' signs.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Stock Note" },
                { id: "C-OPS-18", description: "Check lighting in the parking zone.", priority: "Medium", riskLevel: "Medium", consequence: "Security risk.", proof: "Photo" },
                { id: "C-OPS-19", description: "Review P1 breakdown TAT for shift.", priority: "High", riskLevel: "Low", consequence: "Loss of focus.", proof: "Job Log" },
                { id: "C-OPS-20", description: "Final Daily Operations sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Log" }
            ]
        },
        {
            title: "Concession Yield Logic",
            department: "F&B",
            frequency: "Daily",
            role: "Concession Manager",
            summary: "Protects high-margin F&B revenue and profit.",
            icon: "banknote",
            tasks: [
                { id: "C-CON-01", description: "Reconcile corn-to-bucket yield: Target 1:40 ratio.", priority: "High", riskLevel: "Low", consequence: "Massive profit leakage.", proof: "Yield Sheet" },
                { id: "C-CON-02", description: "Log fridge temps for milk and cheese sauces.", priority: "High", riskLevel: "High", consequence: "Food poisoning outbreak.", proof: "Temp Log" },
                { id: "C-CON-03", description: "Audit 'Voided' transactions: check reason codes.", priority: "High", riskLevel: "Medium", consequence: "Cashier-driven theft.", proof: "POS Audit" },
                { id: "C-CON-04", description: "Verify popcorn warmer temp is above 65°C.", priority: "High", riskLevel: "Medium", consequence: "Soggy popcorn and complaints.", proof: "Visual Check" },
                { id: "C-CON-05", description: "Check allergen markers on digital menus.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction.", proof: "Menu Audit" },
                { id: "C-CON-06", description: "Clean the nacho-cheese dispenser nozzle.", priority: "High", riskLevel: "Medium", consequence: "Bacteria growth.", proof: "Cleaning Note" },
                { id: "C-CON-07", description: "Match total combo sales against item inventory.", priority: "High", riskLevel: "Medium", consequence: "Untracked profit loss.", proof: "Inventory Match" },
                { id: "C-CON-08", description: "Check availability of bill rolls at all counters.", priority: "Low", riskLevel: "Low", consequence: "Service halt during interval.", proof: "Stock Audit" },
                { id: "C-CON-09", description: "Verify staff handwashing frequency.", priority: "High", riskLevel: "Medium", consequence: "Food contamination.", proof: "Briefing Log" },
                { id: "C-CON-10", description: "Reconcile aggregator (Zomato) orders for shift.", priority: "High", riskLevel: "Medium", consequence: "Unbilled revenue loss.", proof: "Match Note" }
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
                { id: "C-PRO-01", description: "Verify DCP ingest: check if movie file is loaded and ready.", priority: "High", riskLevel: "High", consequence: "Black screen during show (Full refund).", proof: "System Log" },
                { id: "C-PRO-02", description: "Audit KDM validity: make sure digital keys are active.", priority: "High", riskLevel: "High", consequence: "Movie fails to play.", proof: "Key Status" },
                { id: "C-PRO-03", description: "Test 7.1 sound balance: check all surround zones.", priority: "High", riskLevel: "Medium", consequence: "Poor guest audio experience.", proof: "Sound Test" },
                { id: "C-PRO-04", description: "Check projector lamp-hours against baseline.", priority: "Medium", riskLevel: "Medium", consequence: "Dull picture quality.", proof: "Lamp Log" },
                { id: "C-PRO-05", description: "Test UPS bank: check load capacity for 10 mins.", priority: "High", riskLevel: "High", consequence: "Projector damage during power spike.", proof: "Voltage Log" },
                { id: "C-PRO-06", description: "Clean projector lens with air-blower only.", priority: "Low", riskLevel: "Low", consequence: "Soft focus.", proof: "Visual Check" },
                { id: "C-PRO-07", description: "Monitor server room AC: Target exactly 20°C.", priority: "High", riskLevel: "High", consequence: "System crash and hardware failure.", proof: "Temp Reading" },
                { id: "C-PRO-08", description: "Verify mask motors for 16:9 vs Scope sync.", priority: "Low", riskLevel: "Low", consequence: "Incorrect movie aspect ratio.", proof: "Visual Audit" },
                { id: "C-PRO-09", description: "Test intercom dial-tone to Box Office.", priority: "Low", riskLevel: "Low", consequence: "Comms failure during crisis.", proof: "Dial Test" },
                { id: "C-PRO-10", description: "Final technical closure sign-off.", priority: "High", riskLevel: "Low", consequence: "Equipment left on overnight.", proof: "Signed Log" }
            ]
        },
        {
            title: "Box Office & Reputation",
            department: "Reception",
            frequency: "Daily",
            role: "Guest Services Lead",
            summary: "Ticketing integrity, digital ORM, and first impressions.",
            icon: "ticket",
            tasks: [
                { id: "C-GS-01", description: "Reply to all BMS and Google reviews < 24h.", priority: "High", riskLevel: "Medium", consequence: "Damaged brand and lower ranking.", proof: "Dashboard" },
                { id: "C-GS-02", description: "Verify 'Promo Code' validity on the website.", priority: "High", riskLevel: "Low", consequence: "Guest frustration at payment.", proof: "Test Booking" },
                { id: "C-GS-03", description: "Answer all Instagram/WhatsApp inquiries < 30m.", priority: "Medium", riskLevel: "Low", consequence: "Lost booking revenue.", proof: "Inbox Clear" },
                { id: "C-GS-04", description: "Audit 'Free-Ticket' quota documentation.", priority: "High", riskLevel: "High", consequence: "Internal fraud and leakage.", proof: "Quota Registry" },
                { id: "C-GS-05", description: "Update Google Maps for holiday showtimes.", priority: "High", riskLevel: "Low", consequence: "Guests arrive to closed venue.", proof: "Mobile Check" }
            ]
        },
        {
            title: "Safety & Crowd Control",
            department: "Security",
            frequency: "Daily",
            role: "EHS & Safety Officer",
            summary: "Infrastructure hardening and crowd safety governance.",
            icon: "shield-check",
            tasks: [
                { id: "C-SEC-01", description: "Verify all fire exits are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Total catastrophe (Fatal never-event).", proof: "Patrol Log" },
                { id: "C-SEC-02", description: "Test emergency PA system volume zones.", priority: "High", riskLevel: "Medium", consequence: "Communication fail during fire.", proof: "Sound Test" },
                { id: "C-SEC-03", description: "Check fire extinguisher pressure (Green).", priority: "High", riskLevel: "High", consequence: "Inability to fight fire.", proof: "Gauge Log" },
                { id: "C-SEC-04", description: "CCTV Audit: Verify 30-day backup sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft.", proof: "System Check" },
                { id: "C-SEC-05", description: "Verify security guard sobriety check.", priority: "High", riskLevel: "High", consequence: "Vulnerable venue perimeter.", proof: "Test Note" }
            ]
        },
        {
            title: "Auditorium Hygiene",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Janitorial Lead",
            summary: "theater sanitation and waste-bay command.",
            icon: "sparkles",
            tasks: [
                { id: "C-HK-01", description: "Audit seat cleaning between movie shows.", priority: "High", riskLevel: "Low", consequence: "Primary driver of negative reviews.", proof: "Sweep Log" },
                { id: "C-HK-02", description: "Check cup-holders for stickiness or trash.", priority: "Medium", riskLevel: "Low", consequence: "Unhygienic guest experience.", proof: "Visual Audit" },
                { id: "C-HK-03", description: "Verify bathroom cleaning every 60 minutes.", priority: "High", riskLevel: "Low", consequence: "Mass guest dissatisfaction.", proof: "Hourly Sheet" },
                { id: "C-HK-04", description: "Empty auditorium trash bins before intervals.", priority: "Medium", riskLevel: "Medium", consequence: "Odors and pests.", proof: "Log Review" },
                { id: "C-HK-05", description: "Final theater deep-clean sign-off.", priority: "High", riskLevel: "Low", consequence: "Incomplete handover.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Staff Certification",
            department: "HR",
            frequency: "Monthly",
            role: "HR & Admin Assistant",
            summary: "Tracks personnel competency and health.",
            icon: "graduation-cap",
            tasks: [
                { id: "C-HR-01", description: "Verify staff health certs for F&B handlers.", priority: "High", riskLevel: "Medium", consequence: "Regulatory fines.", proof: "Cert File" },
                { id: "C-HR-02", description: "Briefing grooming audit: check ID badges.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Attendance Log" },
                { id: "C-HR-03", description: "Update 'Crowd Control' training matrix.", priority: "High", riskLevel: "High", consequence: "Staff panic during incident.", proof: "Matrix Update" },
                { id: "C-HR-04", description: "Verify ACLS/BLS certs for first-responders.", priority: "High", riskLevel: "High", consequence: "Medical negligence.", proof: "Roster Note" },
                { id: "C-HR-05", description: "Final monthly Cert matrix sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of admin control.", proof: "Signed Matrix" }
            ]
        }
    ]
};
