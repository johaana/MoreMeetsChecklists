
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operations System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "The definitive Sovereign v17.6 clinical-grade engine for luxury hospitality. Hardening 210 technical control points across 22 institutional roles to protect guest privacy, asset uptime, and revenue integrity.",
    icon: "building",
    badgeText: "V17.6 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["General Managers", "Owners", "Exec Housekeepers", "Chief Engineers", "FOMs"],
    sampleItems: [
        { text: "<strong>Privacy Infrastructure</strong>: Hidden camera sweeps and master-key vault governance.", icon: "eye-off" },
        { text: "<strong>Asset Uptime Command</strong>: Zero-fail protocols for STP/WTP, DG Load, and Elevator Rescue.", icon: "wrench" },
        { text: "<strong>ESG Sustainability</strong>: Daily KWH monitoring, food-waste logs, and linen-reuse tracking.", icon: "leaf" },
        { text: "<strong>Valet & Pool Safety</strong>: Technical checks for key security and aquatic chemical balance.", icon: "shield-alert" }
    ],
    checklists: [
        {
            title: "Executive Portfolio Governance",
            department: "Management",
            frequency: "Daily",
            role: "General Manager",
            summary: "High-level property command and financial reconciliation.",
            icon: "crown",
            tasks: [
                { id: "HR-GM-01", technicalProtocol: "Revenue Reconcile", floorAction: "Match daily total revenue against physical bank deposit slips.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue theft.", proof: "Settlement Log" },
                { id: "HR-GM-02", technicalProtocol: "P1 Incident Triage", floorAction: "Review all 'Red' flags in the Night Manager's report.", priority: "High", riskLevel: "High", consequence: "Unmonitored liability and guest distress.", proof: "Incident Dashboard" },
                { id: "HR-GM-03", technicalProtocol: "Statutory License Pulse", floorAction: "Verify valid Fire NOC, Liquor, and Health licenses.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License File" },
                { id: "HR-GM-04", technicalProtocol: "Night Audit Discount Audit", floorAction: "Audit 100% of manually applied bill discounts.", priority: "High", riskLevel: "Medium", consequence: "Revenue leakage masked as service recovery.", proof: "Audit Sheet" },
                { id: "HR-GM-05", technicalProtocol: "ORM Reputation Scan", floorAction: "Verify responses to all Google/OTA mentions from last 24h.", priority: "Medium", riskLevel: "Low", consequence: "Reputational damage.", proof: "ORM Dashboard" },
                { id: "HR-GM-06", technicalProtocol: "PORCH Ambiance Audit", floorAction: "Physically check entry scent, music, and lighting.", priority: "Low", riskLevel: "Low", consequence: "Poor first-touch perception.", proof: "Visual Check" },
                { id: "HR-GM-07", technicalProtocol: "Executive Briefing", floorAction: "Conduct 5-min HOD pulse on today's VIP arrivals.", priority: "Medium", riskLevel: "Low", consequence: "Leadership disconnect.", proof: "Meeting Note" },
                { id: "HR-GM-08", technicalProtocol: "Asset Capex Review", floorAction: "Check status of high-value P1 equipment repairs.", priority: "High", riskLevel: "Medium", consequence: "Reduced property inventory.", proof: "P1 Log" },
                { id: "HR-GM-09", technicalProtocol: "Safety Exit Walkthrough", floorAction: "Randomly walk 1 fire stairwell for obstructions.", priority: "High", riskLevel: "High", consequence: "Entrapment during crisis.", proof: "Walk Log" },
                { id: "HR-GM-10", technicalProtocol: "Daily MOD Sign-off", floorAction: "Final daily operational summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Operations & Flow Control",
            department: "Management",
            frequency: "Daily",
            role: "Operations Manager",
            summary: "Departmental coordination and flow efficiency.",
            icon: "activity",
            tasks: [
                { id: "HR-OPS-01", technicalProtocol: "Inter-dept Handover", floorAction: "Verify zero-gap data transfer between AM/PM shifts.", priority: "High", riskLevel: "Medium", consequence: "Lost instructions / Service failure.", proof: "Handover Log" },
                { id: "HR-OPS-02", technicalProtocol: "Manpower Parity", floorAction: "Match active staff count against occupancy forecasted load.", priority: "High", riskLevel: "Low", consequence: "Service gridlock during peaks.", proof: "Roster Audit" },
                { id: "HR-OPS-03", technicalProtocol: "Uniform & Grooming Audit", floorAction: "Spot check 5 staff for brand grooming standards.", priority: "Low", riskLevel: "Low", consequence: "Professional brand dilution.", proof: "Visual Audit" },
                { id: "HR-OPS-04", technicalProtocol: "Back-of-House Hygiene", floorAction: "Inspect staff canteen and locker room sanitation.", priority: "Medium", riskLevel: "Low", consequence: "Employee attrition and grimy culture.", proof: "Walkthrough" },
                { id: "HR-OPS-05", technicalProtocol: "Stock Requisition Verify", floorAction: "Audit 3 random departmental inventory requests.", priority: "Medium", riskLevel: "Low", consequence: "Internal inventory inflation.", proof: "Sample Match" }
            ]
        },
        {
            title: "Front Office Governance",
            department: "Front Office",
            frequency: "Daily",
            role: "Front Office Manager",
            summary: "Arrival readiness and guest compliance.",
            icon: "concierge-bell",
            tasks: [
                { id: "HR-FOM-01", technicalProtocol: "PMS Inventory Sync", floorAction: "Verify PMS matches Channel Manager to stop overbooking.", priority: "High", riskLevel: "Medium", consequence: "Booking conflicts.", proof: "System Check" },
                { id: "HR-FOM-02", technicalProtocol: "C-Form Compliance", floorAction: "Audit 100% of FRRO filings for foreign nationals.", priority: "High", riskLevel: "High", consequence: "Legal violation / shutdown.", proof: "Audit Report" },
                { id: "HR-FOM-03", technicalProtocol: "Master Key Audit", floorAction: "Witness physical counting of all master keys.", priority: "High", riskLevel: "High", consequence: "Unauthorized room entry risk.", proof: "Count Sheet" },
                { id: "HR-FOM-04", technicalProtocol: "Rate Variance Review", floorAction: "Initial all manual rate corrections in the POS.", priority: "High", riskLevel: "Medium", consequence: "Revenue leakage.", proof: "Bill Audit" },
                { id: "HR-FOM-05", technicalProtocol: "Queue TAT Monitor", floorAction: "Measure check-in wait time during peak arrivals.", priority: "Medium", riskLevel: "Low", consequence: "Poor guest scores.", proof: "Queue Log" },
                { id: "HR-FOM-06", technicalProtocol: "Night Audit Reconcile", floorAction: "Match POS settlements to bank gateway credit.", priority: "High", riskLevel: "High", consequence: "Internal billing theft.", proof: "Reconcile Sheet" },
                { id: "HR-FOM-07", technicalProtocol: "Guest Ledger High-Balance", floorAction: "Identify guests exceeding credit limits (>₹50k).", priority: "High", riskLevel: "Medium", consequence: "Financial bad-debt risk.", proof: "System Sync" },
                { id: "HR-FOM-08", technicalProtocol: "Reservation Detail Audit", floorAction: "Check 10 random bookings for valid CC/Mobile details.", priority: "Low", riskLevel: "Low", consequence: "No-show revenue loss.", proof: "Sample Audit" },
                { id: "HR-FOM-09", technicalProtocol: "Out-of-Order (OOO) Pulse", floorAction: "Review status and repair ETA for all OOO rooms.", priority: "Medium", riskLevel: "Low", consequence: "Reduced property inventory.", proof: "OOO Log" },
                { id: "HR-FOM-10", technicalProtocol: "Commission Verification", floorAction: "Review travel agent commission claims for weekend.", priority: "Medium", riskLevel: "Low", consequence: "Overpayment of fees.", proof: "Signed Note" }
            ]
        },
        {
            title: "Reception Execution",
            department: "Front Office",
            frequency: "Daily",
            role: "Reception Executive",
            summary: "Arrival/Departure efficiency and ID vetting.",
            icon: "user-check",
            tasks: [
                { id: "HR-REC-01", technicalProtocol: "ID Verification (100%)", floorAction: "Scan and log government-approved ID for every guest.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit" },
                { id: "HR-REC-02", technicalProtocol: "Payment Pre-Auth", floorAction: "Verify card pre-auth or advance deposit for 100% check-ins.", priority: "High", riskLevel: "Medium", consequence: "Skipper loss and financial bad debt.", proof: "System Match" },
                { id: "HR-REC-03", technicalProtocol: "Welcome Kit Presence", floorAction: "Verify availability of key-cards and welcome cards.", priority: "Low", riskLevel: "Low", consequence: "Admin friction on arrival.", proof: "Stock Check" },
                { id: "HR-REC-04", technicalProtocol: "Bill Settlement Audit", floorAction: "Verify 100% bills are signed or settled pre-departure.", priority: "High", riskLevel: "Medium", consequence: "Revenue loss.", proof: "Settlement Log" },
                { id: "HR-REC-05", technicalProtocol: "Departure TAT Pulse", floorAction: "Target goal < 4 mins for guest checkout.", priority: "Medium", riskLevel: "Low", consequence: "Guest frustration.", proof: "Stopwatch Log" },
                { id: "HR-REC-06", technicalProtocol: "Keycard Recycling", floorAction: "Sanitize and test returned guest keycards.", priority: "Low", riskLevel: "Low", consequence: "Wasted consumable cost.", proof: "Visual Check" },
                { id: "HR-REC-07", technicalProtocol: "Feedback Tablet Sync", floorAction: "Ensure guest tablets are charged and app is online.", priority: "Medium", riskLevel: "Low", consequence: "Loss of survey data.", proof: "Device Check" },
                { id: "HR-REC-08", technicalProtocol: "Lost & Found Log", floorAction: "Verify 100% of items found in lobby are tagged.", priority: "High", riskLevel: "Low", consequence: "Liability for lost property.", proof: "Registry Audit" }
            ]
        },
        {
            title: "Guest Relations & Concierge",
            department: "Front Office",
            frequency: "Daily",
            role: "Guest Relations Executive",
            summary: "High-LTV guest handling and celebration setup.",
            icon: "star",
            tasks: [
                { id: "HR-GRE-01", technicalProtocol: "VIP Arrival Vetting", floorAction: "Physically verify room setup for today's Tier 1 VIPs.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-value loyalty.", proof: "Photo" },
                { id: "HR-GRE-02", technicalProtocol: "Special Occasion Verify", floorAction: "Check card spelling and amenity quality for anniversaries.", priority: "Low", riskLevel: "Low", consequence: "Failed celebration promise.", proof: "Visual Check" },
                { id: "HR-GRE-03", technicalProtocol: "Guest Escalation Loop", floorAction: "Close feedback loop on all unresolved disputes < 12h.", priority: "High", riskLevel: "High", consequence: "Viral reputation damage.", proof: "Incident Log" },
                { id: "HR-GRE-04", technicalProtocol: "Amenity Replenish", floorAction: "Verify VIP fruit/flower refresh for Day-3+ stay.", priority: "Low", riskLevel: "Low", consequence: "Luxury perception drop.", proof: "Walkthrough" },
                { id: "HR-GRE-05", technicalProtocol: "Transportation Sync", floorAction: "Verify 2h prior confirmation for VIP airport drops.", priority: "High", riskLevel: "Low", consequence: "Missed flights and major distress.", proof: "Call Log" }
            ]
        },
        {
            title: "Bell Desk & Concierge",
            department: "Front Office",
            frequency: "Daily",
            role: "Bell Desk Lead",
            summary: "Luggage security and first-touch impression.",
            icon: "luggage",
            tasks: [
                { id: "HR-BEL-01", technicalProtocol: "Luggage Security Tagging", floorAction: "Verify 100% of stored bags have dual-stub tags.", priority: "High", riskLevel: "Medium", consequence: "Luggage loss and high-value liability.", proof: "Registry Audit" },
                { id: "HR-BEL-02", technicalProtocol: "Porch Clearance Monitor", floorAction: "Ensure drive-way is clear of unattended vehicles.", priority: "Medium", riskLevel: "Low", consequence: "Porch gridlock.", proof: "Patrol Log" },
                { id: "HR-BEL-03", technicalProtocol: "Umbrella Par-Levels", floorAction: "Verify availability of 10 clean umbrellas at porch.", priority: "Low", riskLevel: "Low", consequence: "Guest discomfort during rain.", proof: "Visual Count" },
                { id: "HR-BEL-04", technicalProtocol: "Staff Trolley Hygiene", floorAction: "Polish brass/chrome on bell-trolleys pre-rush.", priority: "Low", riskLevel: "Low", consequence: "Aesthetic brand drop.", proof: "Visual Check" },
                { id: "HR-BEL-05", technicalProtocol: "Newspaper/Magazine Pulse", floorAction: "Verify today's date on all lobby periodicals.", priority: "Low", riskLevel: "Low", consequence: "Stale ambiance.", proof: "Visual Check" }
            ]
        },
        {
            title: "Housekeeping Vitals",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Executive Housekeeper",
            summary: "Room readiness, hygiene, and gray-scale audits.",
            icon: "sparkles",
            tasks: [
                { id: "HR-HKP-01", technicalProtocol: "Room Inspection Verification", floorAction: "Verify 100% of 'Vacant Ready' rooms were supervisor-signed.", priority: "High", riskLevel: "High", consequence: "Guest refund risk.", proof: "Inspection Sign-off" },
                { id: "HR-HKP-02", technicalProtocol: "Hidden Camera Scan", floorAction: "Check vents and mirrors in 3 random rooms for anomalies.", priority: "High", riskLevel: "High", consequence: "Catastrophic privacy scandal.", proof: "Sweep Log" },
                { id: "HR-HKP-03", technicalProtocol: "Linen Gray-Scale Audit", floorAction: "Reject and discard any stained or frayed towels.", priority: "Medium", riskLevel: "Low", consequence: "Luxury brand dilution.", proof: "Linen Register" },
                { id: "HR-HKP-04", technicalProtocol: "Chemical Dilution Ratio", floorAction: "Audit dispenser flow-rates for cleaning concentrates.", priority: "High", riskLevel: "Medium", consequence: "Surface damage / Staff health risk.", proof: "Titration Check" },
                { id: "HR-HKP-05", technicalProtocol: "Staff Change-Room Sanitation", floorAction: "Verify hourly cleaning log for employee zones.", priority: "Low", riskLevel: "Low", consequence: "Hygiene drift.", proof: "Cleaning Sheet" },
                { id: "HR-HKP-06", technicalProtocol: "Minibar Discrepancy", floorAction: "Match consumed items vs PMS billing posts.", priority: "Medium", riskLevel: "Low", consequence: "Revenue leakage.", proof: "Audit Sheet" },
                { id: "HR-HKP-07", technicalProtocol: "Spring-Clean Milestone", floorAction: "Verify completion of today's deep-cleaning schedule.", priority: "Medium", riskLevel: "Low", consequence: "Odor buildup and long-term decay.", proof: "Deep-Clean Log" },
                { id: "HR-HKP-08", technicalProtocol: "Extra-Bed Inventory", floorAction: "Physically count and verify storage of rollaways.", priority: "Low", riskLevel: "Low", consequence: "Inability to fulfill booked requests.", proof: "Stock Sheet" },
                { id: "HR-HKP-09", technicalProtocol: "Staff Uniform Audit", floorAction: "Verify 100% of HK team have clean name-tags/shoes.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Briefing Log" },
                { id: "HR-HKP-10", technicalProtocol: "Pest Bait Monitor", floorAction: "Check back-of-minibar for droppings or traps.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Visual Check" }
            ]
        },
        {
            title: "Room Inspection Logic",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Room Attendant Supervisor",
            summary: "Atomic room-by-room quality command.",
            icon: "check-circle",
            tasks: [
                { id: "HR-RAS-01", technicalProtocol: "HVAC Remote Logic", floorAction: "Verify remote matches display temp in checked rooms.", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort.", proof: "Test Note" },
                { id: "HR-RAS-02", technicalProtocol: "Safe-Box Zero-Code", floorAction: "Confirm digital safe is open and clear of code.", priority: "High", riskLevel: "Low", consequence: "Guest arrival friction.", proof: "Visual Check" },
                { id: "HR-RAS-03", technicalProtocol: "Water Closet Flush-TAT", floorAction: "Verify instant flush and zero leakage for WC.", priority: "Medium", riskLevel: "Medium", consequence: "Wasted water and odors.", proof: "Visual Audit" },
                { id: "HR-RAS-04", technicalProtocol: "Amenity Alignment", floorAction: "Check symmetry of pillows and vanity placements.", priority: "Low", riskLevel: "Low", consequence: "Sub-par luxury perception.", proof: "Photo" },
                { id: "HR-RAS-05", technicalProtocol: "Window-Sill Dust Scan", floorAction: "Run finger over hidden horizontal surfaces.", priority: "Medium", riskLevel: "Low", consequence: "Negligence perception.", proof: "Visual Check" },
                { id: "HR-RAS-06", technicalProtocol: "Phone Dial Tone", floorAction: "Test Room -> Desk connection functionality.", priority: "High", riskLevel: "Low", consequence: "Safety risk during emergency.", proof: "Dial Test" },
                { id: "HR-RAS-07", technicalProtocol: "TV Smart-Portal Reset", floorAction: "Log out of previous guest Netflix/YouTube sessions.", priority: "High", riskLevel: "High", consequence: "Privacy data theft.", proof: "Visual Check" },
                { id: "HR-RAS-08", technicalProtocol: "Tile Grout Pulse", floorAction: "Identify any mold spotting in shower corners.", priority: "Medium", riskLevel: "Low", consequence: "1-star review driver.", proof: "Work Order" },
                { id: "HR-RAS-09", technicalProtocol: "Hair-Free Sweep", floorAction: "Visual check of drain and floor for stray hairs.", priority: "High", riskLevel: "Low", consequence: "Major guest rage factor.", proof: "Visual Audit" },
                { id: "HR-RAS-10", technicalProtocol: "Stationery Par-Levels", floorAction: "Verify pen, pad, and menu are pristine/undamaged.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional image.", proof: "Stock Check" }
            ]
        },
        {
            title: "Laundry & Linen Governance",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Laundry Supervisor",
            summary: "Linen lifecycle and guest laundry TAT.",
            icon: "shirt",
            tasks: [
                { id: "HR-LDR-01", technicalProtocol: "Laundry TAT Monitor", floorAction: "Ensure guest laundry is returned < 24 hours.", priority: "Medium", riskLevel: "Low", consequence: "Guest frustration.", proof: "TAT Dashboard" },
                { id: "HR-LDR-02", technicalProtocol: "Chemical Dosing Calibration", floorAction: "Check pumps on industrial washers.", priority: "High", riskLevel: "Medium", consequence: "Chemical fabric burn.", proof: "Tech Note" },
                { id: "HR-LDR-03", technicalProtocol: "Linen Reject Weight", floorAction: "Log KG of linen discarded due to graying/tears.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored asset loss.", proof: "Weight Slip" },
                { id: "HR-LDR-04", technicalProtocol: "Ironing Roller Temp", floorAction: "Verify target temp for flat-work ironer.", priority: "Medium", riskLevel: "Medium", consequence: "Bacterial survival.", proof: "Gauge Log" },
                { id: "HR-LDR-05", technicalProtocol: "Linen-Store Humidity", floorAction: "Log humidity to prevent mildew odors.", priority: "Medium", riskLevel: "Medium", consequence: "Foul-smelling linens.", proof: "Hygrometer" }
            ]
        },
        {
            title: "Engineering Vitals",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Infrastructure uptime and asset protection.",
            icon: "wrench",
            tasks: [
                { id: "HR-ENG-01", technicalProtocol: "Emergency Power Readiness", floorAction: "Inspect DG fuel and ARD battery levels.", priority: "High", riskLevel: "High", consequence: "Total property blackout.", proof: "Test Log" },
                { id: "HR-ENG-02", technicalProtocol: "HVAC Thermal Integrity", floorAction: "Log chiller discharge temp (Target 7°C).", priority: "High", riskLevel: "Medium", consequence: "Guest heat discomfort.", proof: "BMS Reading" },
                { id: "HR-ENG-03", technicalProtocol: "Water Purity (TDS) Pulse", floorAction: "Log TDS at main drinking points (Target < 150).", priority: "High", riskLevel: "High", consequence: "Health risk / plumbing damage.", proof: "TDS Reading" },
                { id: "HR-ENG-04", technicalProtocol: "Panel Heat Scan", floorAction: "Perform IR scan of laundry breaker banks.", priority: "High", riskLevel: "High", consequence: "Electrical fire.", proof: "Scan Log" },
                { id: "HR-ENG-05", technicalProtocol: "Lift Emergency Comms", floorAction: "Test lift intercom buttons to Security Desk.", priority: "High", riskLevel: "High", consequence: "Guest trapped without help.", proof: "Dial Test" },
                { id: "HR-ENG-06", technicalProtocol: "PPM Compliance Audit", floorAction: "Verify completion of today's preventive maintenance.", priority: "Medium", riskLevel: "Low", consequence: "Sudden asset failure.", proof: "PPM Registry" },
                { id: "HR-ENG-07", technicalProtocol: "STP Effluent Quality", floorAction: "Log BOD/COD/pH of treated discharge water.", priority: "High", riskLevel: "High", consequence: "Environmental fines and shutdown.", proof: "Test Result" },
                { id: "HR-ENG-08", technicalProtocol: "Swimming Pool Light Check", floorAction: "Verify 12V transformer integrity for pool lights.", priority: "High", riskLevel: "High", consequence: "Electrocution risk (Never-event).", proof: "Visual Check" },
                { id: "HR-ENG-09", technicalProtocol: "Boiler Safety Valve", floorAction: "Manually test pressure release trigger.", priority: "High", riskLevel: "High", consequence: "Catastrophic vessel explosion.", proof: "Test Note" },
                { id: "HR-ENG-10", technicalProtocol: "Work-Order Backlog", floorAction: "Close 100% of P1 engineering tickets < 4h.", priority: "High", riskLevel: "Low", consequence: "Guest complaints.", proof: "System Sync" }
            ]
        },
        {
            title: "MEP & Asset Watch",
            department: "Engineering",
            frequency: "Daily",
            role: "MEP Technician",
            summary: "Daily mechanical, electrical, and plumbing pulses.",
            icon: "settings",
            tasks: [
                { id: "HR-MEP-01", technicalProtocol: "Pump Vibration Audit", floorAction: "Check for bearing noise on main water pumps.", priority: "Medium", riskLevel: "Medium", consequence: "Motor seizure.", proof: "Observation Log" },
                { id: "HR-MEP-02", technicalProtocol: "Water Tank Level Sync", floorAction: "Match BMS reading vs physical float check.", priority: "Medium", riskLevel: "Medium", consequence: "Facility dry-out.", proof: "Level Log" },
                { id: "HR-MEP-03", technicalProtocol: "LOTO Enforcement", floorAction: "Confirm 100% active repairs possess lock-out tags.", priority: "High", riskLevel: "High", consequence: "Fatal accidental energization.", proof: "Visual Check" },
                { id: "HR-MEP-04", technicalProtocol: "Plumbing Leak Patrol", floorAction: "Walk service shaft for signs of moisture/drip.", priority: "Medium", riskLevel: "Medium", consequence: "Structural damage.", proof: "Patrol Log" },
                { id: "HR-MEP-05", technicalProtocol: "Earth Leakage (ELCB)", floorAction: "Test 5 random guest-room breakers for trip logic.", priority: "High", riskLevel: "High", consequence: "Electrocution liability.", proof: "Test Report" }
            ]
        },
        {
            title: "Security & Perimeter",
            department: "Security",
            frequency: "Daily",
            role: "Security Supervisor",
            summary: "Hardens the perimeter and protects life safety.",
            icon: "shield-check",
            tasks: [
                { id: "HR-SEC-01", technicalProtocol: "CCTV Backup Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for suits.", proof: "System Screen" },
                { id: "HR-SEC-02", technicalProtocol: "Fire-Escape Clearance", floorAction: "Physically walk all stairwells; clear obstructions.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment during crisis.", proof: "Patrol Log" },
                { id: "HR-SEC-03", technicalProtocol: "Guard Sobriety Challenge", floorAction: "Random breathalyzer for 2 AM guard rotation.", priority: "High", riskLevel: "High", consequence: "Vulnerable night perimeter.", proof: "Test Note" },
                { id: "HR-SEC-04", technicalProtocol: "Staff Exit Bag-Search", floorAction: "Perform 5 random searches of staff bags at EOD.", priority: "Medium", riskLevel: "Medium", consequence: "Internal shrinkage.", proof: "Registry Note" },
                { id: "HR-SEC-05", technicalProtocol: "Loading Bay Lockdown", floorAction: "Verify 100% of bay shutters locked at 10 PM.", priority: "High", riskLevel: "High", consequence: "Unauthorized theft entry.", proof: "Visual Check" },
                { id: "HR-SEC-06", technicalProtocol: "Panic Button Pulse", floorAction: "Test silent alarm to local police/HQ.", priority: "High", riskLevel: "High", consequence: "No response during robbery.", proof: "Signal Test" },
                { id: "HR-SEC-07", technicalProtocol: "Visitor Log Integrity", floorAction: "Audit 100% ID verification at service gate.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Log Audit" },
                { id: "HR-SEC-08", technicalProtocol: "Perimeter Lighting Scan", floorAction: "Identify and replace dark-spot bulbs.", priority: "Low", riskLevel: "Low", consequence: "Theft windows.", proof: "Walk Log" },
                { id: "HR-SEC-09", technicalProtocol: "Metal Detector Calib", floorAction: "Test gate sensitivity with standard sample.", priority: "High", riskLevel: "High", consequence: "Weapon entry risk.", proof: "Test Log" },
                { id: "HR-SEC-10", technicalProtocol: "Guard Handover Review", floorAction: "Verify 100% of incident logs are signed-off.", priority: "Low", riskLevel: "Low", consequence: "Information gap.", proof: "Registry Audit" }
            ]
        },
        {
            title: "CCTV & Digital Pulse",
            department: "Security",
            frequency: "Daily",
            role: "CCTV Operator",
            summary: "Digital oversight of property assets.",
            icon: "eye",
            tasks: [
                { id: "HR-CCTV-01", technicalProtocol: "Blind-spot Scan", floorAction: "Verify cameras cover all corridor entrances.", priority: "High", riskLevel: "Medium", consequence: "Lack of incident evidence.", proof: "Monitor Check" },
                { id: "HR-CCTV-02", technicalProtocol: "Vault Entry Watch", floorAction: "Log 100% of entries to high-value alcohol/cash zones.", priority: "High", riskLevel: "High", consequence: "Unmonitored internal theft.", proof: "Digital Ledger" },
                { id: "HR-CCTV-03", technicalProtocol: "Exterior Motion Alert", floorAction: "Test 3 night-vision zones for trip-line triggers.", priority: "Medium", riskLevel: "Medium", consequence: "Undetected perimeter breach.", proof: "System Log" }
            ]
        },
        {
            title: "F&B Governance",
            department: "F&B",
            frequency: "Daily",
            role: "Restaurant Manager",
            summary: "Ambiance parity and service standard.",
            icon: "utensils-crossed",
            tasks: [
                { id: "HR-FBM-01", technicalProtocol: "Ambiance Sensory Audit", floorAction: "Log restaurant temp (23°C) and playlist volume.", priority: "Medium", riskLevel: "Low", consequence: "Reduced guest dwell time.", proof: "Daily Log" },
                { id: "HR-FBM-02", technicalProtocol: "Table Setup Verify", floorAction: "Audit 5 tables for brand-standard cutlery alignment.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Visual Audit" },
                { id: "HR-FBM-03", technicalProtocol: "Washroom Hygiene Pulse", floorAction: "Audit 30-min cleaning logs for dining restrooms.", priority: "High", riskLevel: "Medium", consequence: "Foul review driver.", proof: "Hourly Sheet" },
                { id: "HR-FBM-04", technicalProtocol: "Menu Allergen Visibility", floorAction: "Confirm today's specials have clear allergy signs.", priority: "High", riskLevel: "High", consequence: "Fatal reaction liability.", proof: "Photo" },
                { id: "HR-FBM-05", technicalProtocol: "Staff Grooming Vetting", floorAction: "Verify 100% clean shirts and hairnets.", priority: "Low", riskLevel: "Low", consequence: "Hygiene perception drop.", proof: "Briefing Log" }
            ]
        },
        {
            title: "Kitchen Food Safety (HACCP)",
            department: "F&B",
            frequency: "Daily",
            role: "Kitchen Supervisor",
            summary: "Cold-chain and hygiene command.",
            icon: "utensils",
            tasks: [
                { id: "HR-KSH-01", technicalProtocol: "Cold-Chain Integrity", floorAction: "Log morning fridge temps (Target < 5°C).", priority: "High", riskLevel: "High", consequence: "Mass food poisoning outbreak.", proof: "Temp Log" },
                { id: "HR-KSH-02", technicalProtocol: "Oil TPM Quality", floorAction: "Test fryer oil; discard if TPM > 25%.", priority: "High", riskLevel: "Medium", consequence: "Toxin buildup.", proof: "TPM Reading" },
                { id: "HR-KSH-03", technicalProtocol: "Allergen Segregation", floorAction: "Verify isolation of GF and nut-free prep zones.", priority: "High", riskLevel: "High", consequence: "Fatal guest reaction.", proof: "Visual Audit" },
                { id: "HR-KSH-04", technicalProtocol: "Pest Evidence Sweep", floorAction: "Inspect fridge compressors for rodent signs.", priority: "High", riskLevel: "High", consequence: "FSSAI closure.", proof: "Visual Check" },
                { id: "HR-KSH-05", technicalProtocol: "Dry Store FIFO Audit", floorAction: "Check 10 random items for date labels.", priority: "Medium", riskLevel: "Medium", consequence: "Using expired stock.", proof: "FIFO Log" },
                { id: "HR-KSH-06", technicalProtocol: "Vegetable Sanitization", floorAction: "Verify 50ppm chlorine soak for raw produce.", priority: "High", riskLevel: "High", consequence: "Parasitic transmission.", proof: "Titration Strip" },
                { id: "HR-KSH-07", technicalProtocol: "Blade Safety Audit", floorAction: "Reject and replace any knives with loose handles.", priority: "High", riskLevel: "Medium", consequence: "Staff injury.", proof: "Visual Check" }
            ]
        },
        {
            title: "Stewarding & Hygiene",
            department: "F&B",
            frequency: "Daily",
            role: "Stewarding Lead",
            summary: "Dishwasher sterilization and grease-trap health.",
            icon: "glass-water",
            tasks: [
                { id: "HR-STW-01", technicalProtocol: "Dishwasher Rinse Temp", floorAction: "Confirm rinse cycle reaches 82°C.", priority: "High", riskLevel: "High", consequence: "Unsanitized plates.", proof: "Temp Reading" },
                { id: "HR-STW-02", technicalProtocol: "Grease Trap Pulse", floorAction: "Check for blockage and bacterial odors.", priority: "Medium", riskLevel: "Medium", consequence: "Kitchen flooding.", proof: "Visual Check" },
                { id: "HR-STW-03", technicalProtocol: "Utensil Polish Quality", floorAction: "Spot check 50 forks for water spots/residue.", priority: "Low", riskLevel: "Low", consequence: " Luxury perception drop.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Pool & Wellness Safety",
            department: "Facility Operations",
            frequency: "Daily",
            role: "Pool & Wellness Lead",
            summary: "Aquatic chemical balance and aquatic safety.",
            icon: "waves",
            tasks: [
                { id: "HR-POL-01", technicalProtocol: "Aquatic pH/Chlorine Log", floorAction: "Log levels every 4 hours (Target pH 7.4).", priority: "High", riskLevel: "High", consequence: "Skin infections / viral spread.", proof: "Water Log" },
                { id: "HR-POL-02", technicalProtocol: "Lifesaving Gear Audit", floorAction: "Verify 100% presence of buoys and med-kits.", priority: "High", riskLevel: "High", consequence: "Drowning liability.", proof: "Visual Check" },
                { id: "HR-POL-03", technicalProtocol: "Child-Safety Signage", floorAction: "Check depth markers and rules are legible.", priority: "High", riskLevel: "Medium", consequence: "Negligence lawsuit.", proof: "Photo" },
                { id: "HR-POL-04", technicalProtocol: "Pool Filtration Pulse", floorAction: "Confirm pump manifold pressure in Green zone.", priority: "Medium", riskLevel: "Low", consequence: "Cloudy/unsanitary water.", proof: "Gauge Log" },
                { id: "HR-POL-05", technicalProtocol: "Deck Slip-Resistance", floorAction: "Inspect for algae or slick spots.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Patrol Log" },
                { id: "HR-POL-06", technicalProtocol: "Pool Towel Hygiene", floorAction: "Verify 50 clean towels stocked at the kiosk.", priority: "Low", riskLevel: "Low", consequence: "Guest frustration.", proof: "Visual Count" },
                { id: "HR-POL-07", technicalProtocol: "Skimmer Basket Sweep", floorAction: "Clean hair/debris from all skimmer points.", priority: "Medium", riskLevel: "Low", consequence: "Pump motor strain.", proof: "Visual Check" },
                { id: "HR-POL-08", technicalProtocol: "Shower Compliance", floorAction: "Enforce pre-entry rinse policy.", priority: "Medium", riskLevel: "Low", consequence: "Rapid chemical imbalance.", proof: "Visual Audit" },
                { id: "HR-POL-09", technicalProtocol: "Chemical Storage Seal", floorAction: "Verify chlorine bins are locked in vented cage.", priority: "High", riskLevel: "High", consequence: "Toxic gas exposure.", proof: "Visual Check" },
                { id: "HR-POL-10", technicalProtocol: "Underwater Light Check", floorAction: "Confirm 100% illumination pre-night-swim.", priority: "Medium", riskLevel: "High", consequence: "Collision/Drowning risk.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Valet Parking Logistics",
            department: "Facility Operations",
            frequency: "Daily",
            role: "Valet Parking Lead",
            summary: "Guest vehicle safety and key security.",
            icon: "car",
            tasks: [
                { id: "HR-VAL-01", technicalProtocol: "Key Cabinet Reconciliation", floorAction: "Match keys to active valet slips.", priority: "High", riskLevel: "High", consequence: "Unauthorized joyrides / vehicle theft.", proof: "Dual-Sign Log" },
                { id: "HR-VAL-02", technicalProtocol: "Vehicle Damage Registry", floorAction: "Log any existing dents at porch handover.", priority: "High", riskLevel: "Medium", consequence: "False insurance claims.", proof: "Check-sheet" },
                { id: "HR-VAL-03", technicalProtocol: "Emergency Access Lane", floorAction: "Clear all illegally parked cars from fire lane.", priority: "High", riskLevel: "High", consequence: "Blocked fire engine access.", proof: "Visual Check" },
                { id: "HR-VAL-04", technicalProtocol: "EV Station Integrity", floorAction: "Check cables for wear and charging uptime.", priority: "Medium", riskLevel: "Low", consequence: "Failed EV service promise.", proof: "Tech Note" },
                { id: "HR-VAL-05", technicalProtocol: "Driver Sobriety Pulse", floorAction: "Random breathalyzer for evening shift drivers.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash liability.", proof: "Test Note" },
                { id: "HR-VAL-06", technicalProtocol: "Valet Card Stock", floorAction: "Verify 100+ blank slips available at porch.", priority: "Low", riskLevel: "Low", consequence: "Arrival friction.", proof: "Stock Check" },
                { id: "HR-VAL-07", technicalProtocol: "Parking CCTV Focal", floorAction: "Verify clear view of main parking banks.", priority: "High", riskLevel: "Medium", consequence: "Untraceable damage claims.", proof: "System Screen" },
                { id: "HR-VAL-08", technicalProtocol: "Porch Lighting Pulse", floorAction: "Test facade lights pre-sunset.", priority: "Low", riskLevel: "Low", consequence: "Poor brand perception.", proof: "Visual Check" }
            ]
        },
        {
            title: "Banquet & Event Operations",
            department: "Facility Operations",
            frequency: "Daily",
            role: "Banquet Operations Lead",
            summary: "Venue readiness and temporary safety governance.",
            icon: "party-popper",
            tasks: [
                { id: "HR-BNQ-01", technicalProtocol: "Temporary Wiring Audit", floorAction: "Check for exposed cables on event dance-floor.", priority: "High", riskLevel: "High", consequence: "Electrocution / Fire hazard.", proof: "Visual Check" },
                { id: "HR-BNQ-02", technicalProtocol: "AV Loop Test", floorAction: "Test mics and projector 4h pre-event.", priority: "Medium", riskLevel: "Low", consequence: "High-visibility event failure.", proof: "Tech Report" },
                { id: "HR-BNQ-03", technicalProtocol: "Buffet Shield Verify", floorAction: "Confirm 100% sneeze guards are installed.", priority: "High", riskLevel: "Medium", consequence: "Food contamination.", proof: "Visual Check" },
                { id: "HR-BNQ-04", technicalProtocol: "Emergency Capacity", floorAction: "Audit guest count vs fire marshal limit.", priority: "High", riskLevel: "High", consequence: "Fatal crush during emergency.", proof: "Counter Log" }
            ]
        },
        {
            title: "Sustainability & ESG",
            department: "ESG / Compliance",
            frequency: "Daily",
            role: "Sustainability Coordinator",
            summary: "Energy intensity and environmental reporting.",
            icon: "leaf",
            tasks: [
                { id: "HR-ESG-01", technicalProtocol: "KWH Intensity Pulse", floorAction: "Compare daily meter vs occupancy baseline.", priority: "High", riskLevel: "Medium", consequence: "Unmonitored energy waste.", proof: "Meter Match" },
                { id: "HR-ESG-02", technicalProtocol: "Water Leakage Patrol", floorAction: "Check all 4 meter points at 3 AM.", priority: "High", riskLevel: "High", consequence: "Resource waste / infrastructure damage.", proof: "Leak Log" },
                { id: "HR-ESG-03", technicalProtocol: "Linen-Reuse Verification", floorAction: "Audit 5 rooms for reuse-card compliance.", priority: "Low", riskLevel: "Low", consequence: "ESG score drop.", proof: "Sample Check" },
                { id: "HR-ESG-04", technicalProtocol: "Plastic-Free Compliance", floorAction: "Verify zero prohibited bags in pantry stores.", priority: "Medium", riskLevel: "Medium", consequence: "Government fines.", proof: "Visual Audit" },
                { id: "HR-ESG-05", technicalProtocol: "Food Waste Weight", floorAction: "Log KG of wet-waste sent to bio-composter.", priority: "Low", riskLevel: "Low", consequence: "Inefficient procurement.", proof: "Weight Slip" },
                { id: "HR-ESG-06", technicalProtocol: "Solar Yield Monitor", floorAction: "Log daily KWH yield from roof arrays.", priority: "Medium", riskLevel: "Low", consequence: "Lost savings ROI.", proof: "Dashboard" },
                { id: "HR-ESG-07", technicalProtocol: "HVAC Night-Setback", floorAction: "Verify unoccupied zones are at 26°C.", priority: "High", riskLevel: "Low", consequence: "Massive energy overhead.", proof: "BMS Reading" },
                { id: "HR-ESG-08", technicalProtocol: "Grey-Water TDS", floorAction: "Log purity of garden irrigation water.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental citation.", proof: "TDS Meter" },
                { id: "HR-ESG-09", technicalProtocol: "Battery Recycle Bin", floorAction: "Audit 100% disposal into haz-waste bins.", priority: "Low", riskLevel: "High", consequence: "Toxic soil contamination.", proof: "Visual Audit" },
                { id: "HR-ESG-10", technicalProtocol: "EOD Green Sign-off", floorAction: "Daily sustainability initials.", priority: "Low", riskLevel: "Low", consequence: "Loss of ESG data.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Fire & Life Safety",
            department: "ESG / Compliance",
            frequency: "Daily",
            role: "Fire Safety Officer",
            summary: "Fire suppression and egress readiness.",
            icon: "shield-alert",
            tasks: [
                { id: "HR-FSO-01", technicalProtocol: "Extinguisher Gauge Pulse", floorAction: "Confirm needle in Green zone for all units.", priority: "High", riskLevel: "High", consequence: "Zero firefighting pressure.", proof: "Gauge Log" },
                { id: "HR-FSO-02", technicalProtocol: "Smoke Detector Sample", floorAction: "Test 5 random heads in back-corridors.", priority: "High", riskLevel: "High", consequence: "Undetected fire.", proof: "Test Log" },
                { id: "HR-FSO-03", technicalProtocol: "Sprinkler Main Valve", floorAction: "Verify 100% open status and chain-lock.", priority: "High", riskLevel: "High", consequence: "Total system failure.", proof: "Visual Check" },
                { id: "HR-FSO-04", technicalProtocol: "Emergency Signage Illum", floorAction: "Inspect night visibility of exit signs.", priority: "Medium", riskLevel: "High", consequence: "Panic during power loss.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Hygiene & Sanitation",
            department: "ESG / Compliance",
            frequency: "Daily",
            role: "Hygiene Officer",
            summary: "Surface bacteria and sanitization frequency.",
            icon: "spray-can",
            tasks: [
                { id: "HR-HYG-01", technicalProtocol: "ATP Surface Pulse", floorAction: "RLU swab test of Lobby counter.", priority: "Medium", riskLevel: "High", consequence: "Infection transmission.", proof: "Test Result" },
                { id: "HR-HYG-02", technicalProtocol: "Handwash Soap Flow", floorAction: "Verify sensors in 100% of public sinks.", priority: "Low", riskLevel: "Medium", consequence: "Hygiene breakdown.", proof: "Visual Check" }
            ]
        },
        {
            title: "Waste & Refuse Command",
            department: "ESG / Compliance",
            frequency: "Daily",
            role: "Waste Management Lead",
            summary: "Waste segregation and disposal manifests.",
            icon: "recycle",
            tasks: [
                { id: "HR-WST-01", technicalProtocol: "Segregation at Source", floorAction: "Audit 10 bins for correct color-coding.", priority: "Medium", riskLevel: "Low", consequence: "Recycling rejection.", proof: "Visual Check" },
                { id: "HR-WST-02", technicalProtocol: "Oil Disposal Seal", floorAction: "Verify used oil is in sealed haz-drums.", priority: "High", riskLevel: "High", consequence: "illegal resale fraud.", proof: "Registry Note" }
            ]
        },
        {
            title: "Warehouse & Stores",
            department: "Finance / Stores",
            frequency: "Daily",
            role: "Inventory Controller",
            summary: "Critical spares and receiving command.",
            icon: "package",
            tasks: [
                { id: "HR-INV-01", technicalProtocol: "Scale Calibration Test", floorAction: "Test receiving scale with 1kg standard.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight.", proof: "Calibration Log" },
                { id: "HR-INV-02", technicalProtocol: "Critical Spare Pulse", floorAction: "Check stock of AC motors and MCBs.", priority: "High", riskLevel: "Medium", consequence: "Extended asset downtime.", proof: "Stock Sheet" },
                { id: "HR-INV-03", technicalProtocol: "FIFO Pantry Audit", floorAction: "Check date stamps on 5 dry-store pallets.", priority: "Medium", riskLevel: "Medium", consequence: "Using expired supplies.", proof: "Visual Check" }
            ]
        }
    ]
};
