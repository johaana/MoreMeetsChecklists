
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
    description: "The definitive Sovereign v11.9 engine for luxury hotels and resorts. Hardening 135 technical control points across 9 distinct divisions.",
    icon: "building",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["General Managers", "Hotel Owners", "Heads of Housekeeping", "Banqueting Directors", "Security & Valet Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Pulse Reporting</strong>: Team updates tasks in seconds. Zero-friction supervision.", icon: "timer" },
        { text: "<strong>Privacy Infrastructure</strong>: Hidden camera sweeps and master keycard audit logs to prevent scandals.", icon: "eye-off" },
        { text: "<strong>Revenue Integrity</strong>: Night audit variance tracking and bank reconcile audits to stop leakage.", icon: "banknote" }
    ],
    checklists: [
        {
            title: "Executive Governance",
            department: "Executive",
            frequency: "Daily",
            role: "General Manager",
            summary: "High-level property command and financial reconciliation.",
            icon: "crown",
            tasks: [
                { id: "HR-GM-01", technicalProtocol: "Bank Reconciliation", floorAction: "Match previous day's revenue against bank deposit slips.", priority: "High", riskLevel: "High", consequence: "Undetected internal theft.", proof: "Bank Reconcile Note" },
                { id: "HR-GM-02", technicalProtocol: "Incident Triage", floorAction: "Review all high-priority alerts from the night shift incident log.", priority: "High", riskLevel: "High", consequence: "Escalated liability.", proof: "Incident Log Audit" },
                { id: "HR-GM-03", technicalProtocol: "Morning Huddle", floorAction: "Hold morning team huddle to align on VIP arrivals and group events.", priority: "High", riskLevel: "Low", consequence: "Service gaps.", proof: "Briefing Log" },
                { id: "HR-GM-04", technicalProtocol: "License Validity Audit", floorAction: "Verify Fire NOC and Liquor licenses are current.", priority: "High", riskLevel: "High", consequence: "Government closure.", proof: "License Registry" },
                { id: "HR-GM-05", technicalProtocol: "Discount Audit", floorAction: "Audit night audit variance report for unauthorized discounts.", priority: "Medium", riskLevel: "Medium", consequence: "Margin erosion.", proof: "Audit Report" },
                { id: "HR-GM-06", technicalProtocol: "P1 Maintenance Review", floorAction: "Check status of high-priority maintenance breakdowns.", priority: "High", riskLevel: "Medium", consequence: "Guest discomfort.", proof: "Wrench Log" },
                { id: "HR-GM-07", technicalProtocol: "Digital Reputation Check", floorAction: "Review Google and TripAdvisor mentions from last 24h.", priority: "Medium", riskLevel: "Low", consequence: "Brand damage.", proof: "Dashboard" },
                { id: "HR-GM-08", technicalProtocol: "Cash Drop Witness", floorAction: "Verify nightly cash drop was witnessed and sealed.", priority: "High", riskLevel: "High", consequence: "Cash theft.", proof: "Seal Log" },
                { id: "HR-GM-09", technicalProtocol: "Lobby Standard Walkthrough", floorAction: "Audit lobby grooming and uniform standards.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Walkthrough" },
                { id: "HR-GM-10", technicalProtocol: "Procurement Authorization", floorAction: "Approve and sign off on large invoices (>50k).", priority: "Medium", riskLevel: "High", consequence: "Cash flow issues.", proof: "Register" },
                { id: "HR-GM-11", technicalProtocol: "Guest Pulse", floorAction: "Conduct 2-min chat with 3 guests to gauge sentiment.", priority: "Low", riskLevel: "Low", consequence: "Management disconnect.", proof: "CSAT Note" },
                { id: "HR-GM-12", technicalProtocol: "Utility Vitals Check", floorAction: "Check meter readings for energy wastage.", priority: "Low", riskLevel: "Low", consequence: "Inflated overheads.", proof: "Meter Log" },
                { id: "HR-GM-13", technicalProtocol: "First Aid Par Levels", floorAction: "Verify par levels in all departments.", priority: "High", riskLevel: "Medium", consequence: "Inability to treat injuries.", proof: "Stock Sheet" },
                { id: "HR-GM-14", technicalProtocol: "GM Handover Note", floorAction: "Log handover notes for the assistant manager.", priority: "Medium", riskLevel: "Low", consequence: "Loss of continuity.", proof: "Handover Log" },
                { id: "HR-GM-15", technicalProtocol: "Daily Command Sign-off", floorAction: "Execute daily operational closure sign-off.", priority: "High", riskLevel: "Low", consequence: "Discipline breakdown.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Front Office Operations",
            department: "Front Office",
            frequency: "Daily",
            role: "Front Office Manager",
            summary: "Arrival readiness and guest compliance.",
            icon: "concierge-bell",
            tasks: [
                { id: "HR-FOM-01", technicalProtocol: "Arrival Parity Sync", floorAction: "Verify arrivals against PMS vs Channel Manager.", priority: "High", riskLevel: "Medium", consequence: "Overbooking.", proof: "Reconcile Note" },
                { id: "HR-FOM-02", technicalProtocol: "Police ID Compliance", floorAction: "Audit guest ID scan and C-Form entry (100%).", priority: "High", riskLevel: "High", consequence: "Legal penalties.", proof: "Compliance Log" },
                { id: "HR-FOM-03", technicalProtocol: "Master Key Audit", floorAction: "Physically count master keys in the vault.", priority: "High", riskLevel: "High", consequence: "Security breach.", proof: "Key Audit" },
                { id: "HR-FOM-04", technicalProtocol: "Void Bill Audit", floorAction: "Audit corrected bills for manager authorization.", priority: "High", riskLevel: "High", consequence: "Cashier fraud.", proof: "POS Audit" },
                { id: "HR-FOM-05", technicalProtocol: "Lobby Ambiance Pulse", floorAction: "Verify scent, music, and temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor first touch.", proof: "Sensory Log" },
                { id: "HR-FOM-06", technicalProtocol: "Wake-up Call Test", floorAction: "Verify scheduled calls were tested.", priority: "Medium", riskLevel: "Medium", consequence: "Missed guest flights.", proof: "Call Log" },
                { id: "HR-FOM-07", technicalProtocol: "Complaint Resolution TAT", floorAction: "Check 'Open' complaints from morning shift.", priority: "High", riskLevel: "High", consequence: "1-star reviews.", proof: "Issue Log" },
                { id: "HR-FOM-08", technicalProtocol: "Luggage Store Lockdown", floorAction: "Verify tag integrity and secure storage.", priority: "Medium", riskLevel: "High", consequence: "Belonging theft.", proof: "Tag Audit" },
                { id: "HR-FOM-09", technicalProtocol: "Front-desk Par Levels", floorAction: "Inspect key cards and envelope stock.", priority: "Low", riskLevel: "Low", consequence: "Check-in friction.", proof: "Stock Check" },
                { id: "HR-FOM-10", technicalProtocol: "Valet Key Cabinet", floorAction: "Check barrier sensors and key securement.", priority: "High", riskLevel: "Medium", consequence: "Vehicle damage.", proof: "Valet Log" },
                { id: "HR-FOM-11", technicalProtocol: "PMS Server Sync", floorAction: "Verify daily backup and cloud connectivity.", priority: "High", riskLevel: "High", consequence: "Billing halt.", proof: "System Screen" },
                { id: "HR-FOM-12", technicalProtocol: "Restroom Hygiene Audit", floorAction: "Verify frequency (60 mins cycle).", priority: "High", riskLevel: "Low", consequence: "Rating drop.", proof: "Hourly Sheet" },
                { id: "HR-FOM-13", technicalProtocol: "Staff Briefing Sync", floorAction: "Confirm 100% attendance at pre-shift huddle.", priority: "Medium", riskLevel: "Low", consequence: "Uninformed team.", proof: "Briefing Log" },
                { id: "HR-FOM-14", technicalProtocol: "Booking Inbox Clear", floorAction: "Process all pending website inquiries.", priority: "Medium", riskLevel: "Low", consequence: "Lost revenue.", proof: "Inbox Clear" },
                { id: "HR-FOM-15", technicalProtocol: "FOM Shift Handover", floorAction: "Final handover sign-off for next manager.", priority: "High", riskLevel: "Low", consequence: "Continuity loss.", proof: "Signed Log" }
            ]
        },
        {
            title: "Guest Experience",
            department: "Front Office",
            frequency: "Daily",
            role: "Receptionist",
            summary: "Tactical arrival and departure touchpoints.",
            icon: "user-check",
            tasks: [
                { id: "HR-REC-01", technicalProtocol: "10-10 Greet Guard", floorAction: "Greet within 10 feet / 10 seconds of arrival.", priority: "Medium", riskLevel: "Low", consequence: "Guest feels ignored.", proof: "Observation" },
                { id: "HR-REC-02", technicalProtocol: "Original ID Verify", floorAction: "Verify original ID for 100% of adults.", priority: "High", riskLevel: "High", consequence: "Non-compliance.", proof: "Scanner Log" },
                { id: "HR-REC-03", technicalProtocol: "Pre-Auth Validation", floorAction: "Verify credit card pre-auth is secured.", priority: "High", riskLevel: "Medium", consequence: "Departure loss.", proof: "Terminal Slip" },
                { id: "HR-REC-04", technicalProtocol: "Amenity Briefing", floorAction: "Explain breakfast and Wi-Fi clearly.", priority: "Low", riskLevel: "Low", consequence: "Support calls.", proof: "Briefing Log" },
                { id: "HR-REC-05", technicalProtocol: "Profile Preference Update", floorAction: "Update PMS with non-smoking preference.", priority: "Low", riskLevel: "Low", consequence: "Repeat mistakes.", proof: "PMS Entry" },
                { id: "HR-REC-06", technicalProtocol: "Drawer Float Reconcile", floorAction: "Audit float for correct denominations.", priority: "High", riskLevel: "High", consequence: "Revenue leak.", proof: "Count Sheet" },
                { id: "HR-REC-07", technicalProtocol: "Counter Sanitation", floorAction: "Wipe and sanitize counter surface.", priority: "Low", riskLevel: "Low", consequence: "Grungy image.", proof: "Visual Check" },
                { id: "HR-REC-08", technicalProtocol: "PMS Room Status Sync", floorAction: "Confirm room status (Ready) before key issue.", priority: "High", riskLevel: "Low", consequence: "Guest in dirty room.", proof: "PMS Sync" },
                { id: "HR-REC-09", technicalProtocol: "Guest Package Log", floorAction: "Log incoming couriers for guests.", priority: "Medium", riskLevel: "Low", consequence: "Lost packages.", proof: "Registry" },
                { id: "HR-REC-10", technicalProtocol: "Lobby Wi-Fi Speed Test", floorAction: "Verify speed is within brand standard.", priority: "Low", riskLevel: "Low", consequence: "Guest irritation.", proof: "Speed Test" },
                { id: "HR-REC-11", technicalProtocol: "Departure Prep", floorAction: "Update 'Departing Today' for bell-desk.", priority: "Medium", riskLevel: "Low", consequence: "Delays.", proof: "Printout" },
                { id: "HR-REC-12", technicalProtocol: "BTC Letter Audit", floorAction: "Verify bill-to-company valid letters.", priority: "High", riskLevel: "Medium", consequence: "Loss.", proof: "Folder Audit" },
                { id: "HR-REC-13", technicalProtocol: "Key Card Par Levels", floorAction: "Check card and envelope stock.", priority: "Low", riskLevel: "Low", consequence: "Gridlock.", proof: "Stock Note" },
                { id: "HR-REC-14", technicalProtocol: "RS Test Call", floorAction: "Random call to check room service TAT.", priority: "Low", riskLevel: "Low", consequence: "Decay.", proof: "Log Note" },
                { id: "HR-REC-15", technicalProtocol: "Nightly Settlement", floorAction: "Execute final settlement summary.", priority: "High", riskLevel: "Low", consequence: "Lag.", proof: "Settlement Slip" }
            ]
        },
        {
            title: "Sanitation Standards",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Executive Housekeeper",
            summary: "Governance for room readiness and privacy.",
            icon: "sparkles",
            tasks: [
                { id: "HR-EHK-01", technicalProtocol: "Ready-Room Audit", floorAction: "Verify 100% of 'Ready' rooms assigned.", priority: "High", riskLevel: "High", consequence: "Unverified rooms.", proof: "Inspection Log" },
                { id: "HR-EHK-02", technicalProtocol: "Privacy Privacy Scan", floorAction: "Scan mirrors and vents in 3 random rooms.", priority: "High", riskLevel: "High", consequence: "Privacy scandal.", proof: "Scan Log" },
                { id: "HR-EHK-03", technicalProtocol: "Linen Gray-scale Audit", floorAction: "Reject stained or worn towels.", priority: "High", riskLevel: "Medium", consequence: "Brand erosion.", proof: "Register" },
                { id: "HR-EHK-04", technicalProtocol: "Public Area Walkthrough", floorAction: "Check Lifts, Gym, and Lobby hygiene.", priority: "High", riskLevel: "Low", consequence: "Poor perception.", proof: "Walkthrough" },
                { id: "HR-EHK-05", technicalProtocol: "Pest Bait Compliance", floorAction: "Verify baiting schedule compliance.", priority: "High", riskLevel: "High", consequence: "Infestation.", proof: "Pest Log" },
                { id: "HR-EHK-06", technicalProtocol: "Guest Amenity Stock", floorAction: "Audit par levels of soap and shampoo.", priority: "Low", riskLevel: "Low", consequence: "Recovery costs.", proof: "Inventory" },
                { id: "HR-EHK-07", technicalProtocol: "Chemical Dosing Test", floorAction: "Check R1-R6 dilution ratios.", priority: "High", riskLevel: "Medium", consequence: "Staff risk.", proof: "Titration Log" },
                { id: "HR-EHK-08", technicalProtocol: "Laundry TAT Monitor", floorAction: "Verify TAT is < 24 hours.", priority: "Medium", riskLevel: "Low", consequence: "Linen stockouts.", proof: "Log Match" },
                { id: "HR-EHK-09", technicalProtocol: "Change-Room Hygiene", floorAction: "Inspect staff change-rooms for hygiene.", priority: "Low", riskLevel: "Low", consequence: "Low morale.", proof: "Visual Check" },
                { id: "HR-EHK-10", technicalProtocol: "Lost & Found Seal", floorAction: "Final closure of L&F register.", priority: "Medium", riskLevel: "Medium", consequence: "Theft.", proof: "Signed Registry" },
                { id: "HR-EHK-11", technicalProtocol: "Vacuum Filter Check", floorAction: "Check cleaner filters and cord safety.", priority: "Low", riskLevel: "Low", consequence: "Poor cleaning.", proof: "Audit Sheet" },
                { id: "HR-EHK-12", technicalProtocol: "Green Card Audit", floorAction: "Verify availability of eco-cards.", priority: "Low", riskLevel: "Low", consequence: "ESG failure.", proof: "Visual Audit" },
                { id: "HR-EHK-13", technicalProtocol: "Carpet Shampoo Log", floorAction: "Log daily shampooing progress.", priority: "Low", riskLevel: "Low", consequence: "Musty odors.", proof: "Schedule Log" },
                { id: "HR-EHK-14", technicalProtocol: "Night Shift HK Roster", floorAction: "Confirm night-shift HK staffing levels.", priority: "High", riskLevel: "Medium", consequence: "Unmet requests.", proof: "Roster Check" },
                { id: "HR-EHK-15", technicalProtocol: "HK Command Sign-off", floorAction: "Final Housekeeping command sign-off.", priority: "High", riskLevel: "Low", consequence: "Standard slip.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Room Integrity",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Room Attendant",
            summary: "Tactical floor execution for guest rooms.",
            icon: "bed",
            tasks: [
                { id: "HR-RA-01", technicalProtocol: "Light/Bulb Vitals", floorAction: "Check all bulbs in guest room.", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort.", proof: "Visual Check" },
                { id: "HR-RA-02", technicalProtocol: "Toilet Leak Pulse", floorAction: "Flush and check for scale/leaks.", priority: "High", riskLevel: "Low", consequence: "Poor perception.", proof: "Visual Check" },
                { id: "HR-RA-03", technicalProtocol: "TV/Remote Function", floorAction: "Verify functionality and battery.", priority: "Low", riskLevel: "Low", consequence: "Calls.", proof: "Test Note" },
                { id: "HR-RA-04", technicalProtocol: "Touchpoint Sanitization", floorAction: "Sanitize handles and phone.", priority: "High", riskLevel: "Medium", consequence: "Infection.", proof: "Checklist" },
                { id: "HR-RA-05", technicalProtocol: "Minibar Expiry Pulse", floorAction: "Check for expiries and missing items.", priority: "Medium", riskLevel: "High", consequence: "Loss.", proof: "Consumption Log" },
                { id: "HR-RA-06", technicalProtocol: "Slipper/Robe Freshness", floorAction: "Ensure fresh/sealed linens.", priority: "Low", riskLevel: "Low", consequence: "Brand decay.", proof: "Visual Audit" },
                { id: "HR-RA-07", technicalProtocol: "Room Scent/Humidity", floorAction: "Check for musty first-touch.", priority: "Low", riskLevel: "Low", consequence: "Negative first touch.", proof: "Walkthrough" },
                { id: "HR-RA-08", technicalProtocol: "Safe-Box Reset", floorAction: "VerifySafe reset and functional.", priority: "High", riskLevel: "High", consequence: "Security risk.", proof: "Lock Test" },
                { id: "HR-RA-09", technicalProtocol: "Tea/Coffee Par Levels", floorAction: "Replenish sachet stock.", priority: "Low", riskLevel: "Low", consequence: "Service failure.", proof: "Stock Sheet" },
                { id: "HR-RA-10", technicalProtocol: "Perishable Disposal", floorAction: "Discard guest-left food.", priority: "High", riskLevel: "Medium", consequence: "Pests.", proof: "Cleaning Note" },
                { id: "HR-RA-11", technicalProtocol: "Window/Balcony Safety", floorAction: "Check locks and safety catches.", priority: "High", riskLevel: "High", consequence: "Fatal negligence.", proof: "Physical Test" },
                { id: "HR-RA-12", technicalProtocol: "Headboard Dust Sweep", floorAction: "Wipe top of headboard.", priority: "Low", riskLevel: "Low", consequence: "Allergies.", proof: "Visual Check" },
                { id: "HR-RA-13", technicalProtocol: "DND Status Sync", floorAction: "Verify DND sign is functional.", priority: "Medium", riskLevel: "Low", consequence: "Intrusion.", proof: "Visual Audit" },
                { id: "HR-RA-14", technicalProtocol: "Shower Pressure Pulse", floorAction: "Check pressure and hot water TAT.", priority: "Medium", riskLevel: "Low", consequence: "Guest rage.", proof: "Temp Reading" },
                { id: "HR-RA-15", technicalProtocol: "Floor Ready Sign-off", floorAction: "Final room-ready initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Infrastructure Uptime",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Property backbone and mechanical vitals.",
            icon: "wrench",
            tasks: [
                { id: "HR-ENG-01", technicalProtocol: "DG Fuel Pulse", floorAction: "Inspect DG fuel and battery status.", priority: "High", riskLevel: "High", consequence: "Blackout.", proof: "Fuel Log" },
                { id: "HR-ENG-02", technicalProtocol: "Chiller Thermal Pulse", floorAction: "Log HVAC discharge temp.", priority: "High", riskLevel: "Medium", consequence: "Heat discomfort.", proof: "BMS Reading" },
                { id: "HR-ENG-03", technicalProtocol: "RO/STP TDS Pulse", floorAction: "Verify output TDS (Target <150).", priority: "High", riskLevel: "High", consequence: "Plumbing damage.", proof: "TDS Reading" },
                { id: "HR-ENG-04", technicalProtocol: "Fire Pump Auto-Status", floorAction: "Confirm pumps are in 'AUTO'.", priority: "High", riskLevel: "High", consequence: "No protection.", proof: "Gauge Log" },
                { id: "HR-ENG-05", technicalProtocol: "KWH Meter Sync", floorAction: "Log main KWH meter at 12 AM.", priority: "Medium", riskLevel: "Low", consequence: "Cost spike.", proof: "Meter Log" },
                { id: "HR-ENG-06", technicalProtocol: "Panel Heat Scan", floorAction: "Infrared scan of server panels.", priority: "High", riskLevel: "High", consequence: "Fire.", proof: "Panel Log" },
                { id: "HR-ENG-07", technicalProtocol: "Boiler Safety Valve", floorAction: "Check integrity and gas supply.", priority: "High", riskLevel: "High", consequence: "Explosion.", proof: "Safety Log" },
                { id: "HR-ENG-08", technicalProtocol: "Lift Intercom Test", floorAction: "Test buttons from car to Desk.", priority: "High", riskLevel: "High", consequence: "Trapped guest.", proof: "Dial Test" },
                { id: "HR-ENG-09", technicalProtocol: "LOTO Enforcement", floorAction: "Verify LOTO for active repairs.", priority: "High", riskLevel: "High", consequence: "Fatal accident.", proof: "Registry" },
                { id: "HR-ENG-10", technicalProtocol: "Monthly PPM Triage", floorAction: "Identify machines missing service.", priority: "Medium", riskLevel: "Medium", consequence: "Asset decay.", proof: "Overdue Report" }
            ]
        },
        {
            title: "Equipment Vitals",
            department: "Engineering",
            frequency: "Daily",
            role: "Maintenance Tech",
            summary: "Tactical Response and breakdown support.",
            icon: "settings",
            tasks: [
                { id: "HR-MNT-POOL-01", technicalProtocol: "Pool pH/Chlorine Pulse", floorAction: "Log levels every 4 hours.", priority: "High", riskLevel: "High", consequence: "Infection risk.", proof: "Water Log" },
                { id: "HR-MNT-02", technicalProtocol: "Bulb Patrol", floorAction: "Replace lobby/porch burnt bulbs.", priority: "Low", riskLevel: "Low", consequence: "Ambiance drop.", proof: "Visual Check" },
                { id: "HR-MNT-03", technicalProtocol: "Escalator Safety Test", floorAction: "Test auto-stop safety sensors.", priority: "High", riskLevel: "High", consequence: "Injury.", proof: "Test Note" },
                { id: "HR-MNT-04", technicalProtocol: "Sewer Line Walkthrough", floorAction: "Check for signs of backup.", priority: "High", riskLevel: "Medium", consequence: "Flooding.", proof: "Walkthrough" },
                { id: "HR-MNT-05", technicalProtocol: "AC Filter Rotation", floorAction: "Deep clean filters on schedule.", priority: "Medium", riskLevel: "Low", consequence: "Efficiency loss.", proof: "Rotation Log" }
            ]
        },
        {
            title: "F&B Standards",
            department: "F&B",
            frequency: "Daily",
            role: "F&B Manager",
            summary: "Product quality and margin protection.",
            icon: "hand-platter",
            tasks: [
                { id: "HR-FNB-01", technicalProtocol: "Fridge Temp Pulse", floorAction: "Log all food storage temps.", priority: "High", riskLevel: "High", consequence: "Poisoning.", proof: "Temp Log" },
                { id: "HR-FNB-02", technicalProtocol: "Bar Safe Count", floorAction: "Physically count top-shelf spirits.", priority: "High", riskLevel: "High", consequence: "Theft.", proof: "Count Sheet" },
                { id: "HR-FNB-03", technicalProtocol: "Void Bill Auth", floorAction: "Sign off 100% of deleted bills.", priority: "High", riskLevel: "High", consequence: "Fraud.", proof: "POS Audit" },
                { id: "HR-FNB-04", technicalProtocol: "Cutlery Polish Audit", floorAction: "Spot check 10 random forks.", priority: "Low", riskLevel: "Low", consequence: "Luxury drop.", proof: "Sample Check" },
                { id: "HR-FNB-05", technicalProtocol: "RS TAT Dashboard", floorAction: "Monitor time from order to door.", priority: "Medium", riskLevel: "Low", consequence: "Cold food.", proof: "TAT Dashboard" }
            ]
        },
        {
            title: "Perimeter Shield",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and protects life safety.",
            icon: "shield-check",
            tasks: [
                { id: "HR-SEC-01", technicalProtocol: "CCTV Backup Sync", floorAction: "Verify 30-day backup status.", priority: "High", riskLevel: "High", consequence: "Evidence loss.", proof: "System Screen" },
                { id: "HR-SEC-02", technicalProtocol: "Visitor ID Audit", floorAction: "Check register for 100% ID capture.", priority: "High", riskLevel: "High", consequence: "Intruder access.", proof: "Registry Audit" },
                { id: "HR-SEC-03", technicalProtocol: "Fire Exit Clearance", floorAction: "Verify all fire-stairs are clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment.", proof: "Patrol Log" },
                { id: "HR-SEC-04", technicalProtocol: "Sobriety Breathalyzer", floorAction: "Test night shift guard sobriety.", priority: "High", riskLevel: "High", consequence: "Vulnerable perimeter.", proof: "Test Note" },
                { id: "HR-SEC-05", technicalProtocol: "Panic Button Test", floorAction: "Test vault and desk buttons.", priority: "High", riskLevel: "High", consequence: "Rescue failure.", proof: "Test Log" }
            ]
        }
    ]
};
