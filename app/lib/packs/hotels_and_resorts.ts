
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "The definitive Sovereign v11.9 engine for luxury hotels and resorts. Hardening 135 technical control points across 9 distinct divisions from Revenue Integrity to Engineering Vitals.",
    heroHeadline: "Eliminate Guest Safety Gaps and Viral Reputation Damage",
    heroSubheadline: "Zero-drift operational governance for hotels, resorts, and hospitality groups. Track 135 checkpoints across every shift.",
    pricingUrgency: "One safety incident or a single negative viral review costs 100x more than this entire system.",
    consultingAnchor: 15000,
    icon: "building",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["General Managers", "Hotel Owners", "Heads of Housekeeping", "Banqueting Directors", "Security & Valet Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Pulse Reporting</strong>: Team updates tasks in seconds. Zero-friction supervision without being present.", icon: "timer" },
        { text: "<strong>Reputation Shield</strong>: Daily pulse for review response and social media signals to protect your ratings.", icon: "star" },
        { text: "<strong>Privacy Infrastructure</strong>: Hidden camera sweeps and master keycard audit logs to prevent scandals.", icon: "eye-off" },
        { text: "<strong>Revenue Integrity</strong>: Night audit variance tracking and bank reconcile audits to stop leakage.", icon: "banknote" },
        { text: "<strong>MEP Asset Watch</strong>: Critical logs for boilers, chillers, and STP to prevent infrastructure collapse.", icon: "wrench" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure safety standards stay if key staff resign.", icon: "history" }
    ],
    checklists: [
        {
            title: "Executive Governance",
            department: "Executive",
            frequency: "Daily",
            role: "General Manager",
            summary: "High-level property command, financial reconciliation, and risk oversight.",
            icon: "crown",
            tasks: [
                { id: "HR-GM-01", description: "Match previous day's revenue against bank deposit slips.", priority: "High", riskLevel: "High", consequence: "Undetected internal theft and revenue leakage.", proof: "Bank Reconcile Note" },
                { id: "HR-GM-02", description: "Review all high-priority alerts from the night shift incident log.", priority: "High", riskLevel: "High", consequence: "Escalated legal liability and unresolved safety risks.", proof: "Incident Log Audit" },
                { id: "HR-GM-03", description: "Hold morning team huddle to align on VIP arrivals and group events.", priority: "High", riskLevel: "Low", consequence: "Disconnected service delivery and VIP neglect.", proof: "Briefing Log" },
                { id: "HR-GM-04", description: "Verify Fire NOC and Liquor licenses are current and displayed.", priority: "High", riskLevel: "High", consequence: "Government shutdown of premises.", proof: "License Registry" },
                { id: "HR-GM-05", description: "Audit night audit variance report for unauthorized discounts.", priority: "Medium", riskLevel: "Medium", consequence: "Margin erosion through staff fraud.", proof: "Audit Report" },
                { id: "HR-GM-06", description: "Check status of high-priority maintenance (P1) breakdowns.", priority: "High", riskLevel: "Medium", consequence: "Guest discomfort and asset decay.", proof: "Wrench Log" },
                { id: "HR-GM-07", description: "Review Google and TripAdvisor mentions from last 24h.", priority: "Medium", riskLevel: "Low", consequence: "Damage to online reputation.", proof: "Review Dashboard" },
                { id: "HR-GM-08", description: "Verify nightly cash drop was witnessed and sealed.", priority: "High", riskLevel: "High", consequence: "Untraceable cash theft.", proof: "Cash Seal Log" },
                { id: "HR-GM-09", description: "Audit staff grooming and uniform standards in the lobby.", priority: "Low", riskLevel: "Low", consequence: "Professional brand dilution.", proof: "Walkthrough" },
                { id: "HR-GM-10", description: "Approve and sign off on large procurement invoices (>₹50k).", priority: "Medium", riskLevel: "High", consequence: "Cash flow mismanagement.", proof: "Payment Register" },
                { id: "HR-GM-11", description: "Conduct 2-minute chat with 3 guests to gauge sentiment.", priority: "Low", riskLevel: "Low", consequence: "Disconnect from guest reality.", proof: "CSAT Note" },
                { id: "HR-GM-12", description: "Check utility meter readings for energy wastage detection.", priority: "Low", riskLevel: "Low", consequence: "Inflated overheads.", proof: "Meter Log" },
                { id: "HR-GM-13", description: "Verify first-aid kit par levels in all departments.", priority: "High", riskLevel: "Medium", consequence: "Inability to treat staff injuries.", proof: "Stock Sheet" },
                { id: "HR-GM-14", description: "Log GM handover notes for the assistant manager.", priority: "Medium", riskLevel: "Low", consequence: "Loss of operational continuity.", proof: "Handover Log" },
                { id: "HR-GM-15", description: "Execute daily operational closure sign-off.", priority: "High", riskLevel: "Low", consequence: "Systemic breakdown of discipline.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Front Office Command",
            department: "Front Office",
            frequency: "Daily",
            role: "Front Office Manager",
            summary: "Command for arrival infrastructure and guest compliance.",
            icon: "concierge-bell",
            tasks: [
                { id: "HR-FOM-01", description: "Verify all arrivals against booking system (PMS vs Channel Manager).", priority: "High", riskLevel: "Medium", consequence: "Overbooking and forced guest relocation.", proof: "System Reconcile" },
                { id: "HR-FOM-02", description: "Audit guest ID compliance: 100% scan and C-Form entry.", priority: "High", riskLevel: "High", consequence: "Severe legal violations and police penalties.", proof: "Compliance Log" },
                { id: "HR-FOM-03", description: "Physically count all master and spare guest keys in the vault.", priority: "High", riskLevel: "High", consequence: "Unauthorized guest room access.", proof: "Key Audit" },
                { id: "HR-FOM-04", description: "Audit voided/corrected bills for manager authorization.", priority: "High", riskLevel: "High", consequence: "Internal cashier fraud.", proof: "POS Audit" },
                { id: "HR-FOM-05", description: "Verify lobby ambiance: Scent, Music, and Temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor guest first-impression.", proof: "Sensory Log" },
                { id: "HR-FOM-06", description: "Confirm all scheduled wake-up calls were logged and tested.", priority: "Medium", riskLevel: "Medium", consequence: "Guest missing flight; high dissatisfaction.", proof: "Call Log" },
                { id: "HR-FOM-07", description: "Check status of 'Open' guest complaints from morning shift.", priority: "High", riskLevel: "High", consequence: "Escalation to viral 1-star reviews.", proof: "Issue Log" },
                { id: "HR-FOM-08", description: "Verify luggage store tag integrity and lockdown.", priority: "Medium", riskLevel: "High", consequence: "Theft of guest belongings.", proof: "Tag Audit" },
                { id: "HR-FOM-09", description: "Inspect front-desk stationery par levels (Key cards, envelopes).", priority: "Low", riskLevel: "Low", consequence: "Service friction during check-in.", proof: "Stock Check" },
                { id: "HR-FOM-10", description: "Check parking barrier sensors and valet key cabinet.", priority: "High", riskLevel: "Medium", consequence: "Security breach or vehicle damage.", proof: "Valet Log" },
                { id: "HR-FOM-11", description: "Verify PMS daily backup and server connectivity.", priority: "High", riskLevel: "High", consequence: "Operational halt during billing.", proof: "System Screen" },
                { id: "HR-FOM-12", description: "Audit lobby restroom hygiene frequency (Every 60 mins).", priority: "High", riskLevel: "Low", consequence: "Major driver of negative ratings.", proof: "Hourly Sheet" },
                { id: "HR-FOM-13", description: "Confirm 100% of staff attended pre-shift briefing.", priority: "Medium", riskLevel: "Low", consequence: "Uninformed service team.", proof: "Briefing Log" },
                { id: "HR-FOM-14", description: "Clear all pending web-site and booking engine inquiries.", priority: "Medium", riskLevel: "Low", consequence: "Lost revenue opportunity.", proof: "Inbox Clear" },
                { id: "HR-FOM-15", description: "Final FOM shift handover sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of continuity.", proof: "Signed Log" }
            ]
        },
        {
            title: "Guest Registration",
            department: "Front Office",
            frequency: "Daily",
            role: "Receptionist",
            summary: "Floor-level execution for guest touchpoints.",
            icon: "user-check",
            tasks: [
                { id: "HR-REC-01", description: "Greet guests within 10 feet / 10 seconds of arrival.", priority: "Medium", riskLevel: "Low", consequence: "Guest feels ignored.", proof: "Observation" },
                { id: "HR-REC-02", description: "Verify original ID of every adult checking in.", priority: "High", riskLevel: "High", consequence: "Regulatory non-compliance.", proof: "Scanner Log" },
                { id: "HR-REC-03", description: "Collect and verify credit card pre-authorization.", priority: "High", riskLevel: "Medium", consequence: "Financial loss on departure.", proof: "Terminal Slip" },
                { id: "HR-REC-04", description: "Explain breakfast timings and hotel amenities clearly.", priority: "Low", riskLevel: "Low", consequence: "Increased support calls.", proof: "Briefing Log" },
                { id: "HR-REC-05", description: "Update guest profile with preferences (e.g. non-smoking).", priority: "Low", riskLevel: "Low", consequence: "Repeat mistakes for returning guests.", proof: "PMS Entry" },
                { id: "HR-REC-06", description: "Audit drawer float for correct denominations.", priority: "High", riskLevel: "High", consequence: "Revenue leakage.", proof: "Count Sheet" },
                { id: "HR-REC-07", description: "Wipe and sanitize the reception counter surface.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional image.", proof: "Visual Check" },
                { id: "HR-REC-08", description: "Confirm current room status (Ready/Dirty) in PMS.", priority: "High", riskLevel: "Low", consequence: "Checking guests into dirty rooms.", proof: "PMS Sync" },
                { id: "HR-REC-09", description: "Handle guest courier deliveries and log them.", priority: "Medium", riskLevel: "Low", consequence: "Loss of guest packages.", proof: "Registry" },
                { id: "HR-REC-10", description: "Verify lobby Wi-Fi speed is within brand standard.", priority: "Low", riskLevel: "Low", consequence: "Immediate guest irritation.", proof: "Speed Test" },
                { id: "HR-REC-11", description: "Update 'Departing Today' list for bell-desk prep.", priority: "Medium", riskLevel: "Low", consequence: "Departure delays.", proof: "Printout" },
                { id: "HR-REC-12", description: "Verify all bill-to-company (BTC) letters are valid.", priority: "High", riskLevel: "Medium", consequence: "Uncollectible revenue.", proof: "Folder Audit" },
                { id: "HR-REC-13", description: "Check stock of key cards and envelopes.", priority: "Low", riskLevel: "Low", consequence: "Check-in gridlock.", proof: "Stock Note" },
                { id: "HR-REC-14", description: "Execute random 'Test Call' to room service to check TAT.", priority: "Low", riskLevel: "Low", consequence: "Service decay.", proof: "Log Note" },
                { id: "HR-REC-15", description: "Execute nightly settlement summary.", priority: "High", riskLevel: "Low", consequence: "Accounting lag.", proof: "Settlement Slip" }
            ]
        },
        {
            title: "Quality Standards",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Executive Housekeeper",
            summary: "Governance for room readiness, laundry, and privacy.",
            icon: "sparkles",
            tasks: [
                { id: "HR-EHK-01", description: "Verify 100% of 'Ready' rooms assigned for arrivals.", priority: "High", riskLevel: "High", consequence: "Checking guests into unverified rooms.", proof: "Inspection Log" },
                { id: "HR-EHK-02", description: "Privacy Sweep: Scan mirrors and vents in 3 random rooms.", priority: "High", riskLevel: "High", consequence: "Business-ending privacy scandal.", proof: "Scan Log" },
                { id: "HR-EHK-03", description: "Audit linen gray-scale: reject stained or worn towels.", priority: "High", riskLevel: "Medium", consequence: "Luxury brand erosion.", proof: "Linen Register" },
                { id: "HR-EHK-04", description: "Check public area hygiene: Lifts, Gym, and Lobby.", priority: "High", riskLevel: "Low", consequence: "Poor general hygiene perception.", proof: "Walkthrough" },
                { id: "HR-EHK-05", description: "Verify pest control baiting schedule compliance.", priority: "High", riskLevel: "High", consequence: "Infestation leading to health closure.", proof: "Pest Log" },
                { id: "HR-EHK-06", description: "Audit guest amenities stock (Soap, Shampoo, Coffee).", priority: "Low", riskLevel: "Low", consequence: "Service recovery costs.", proof: "Inventory Sheet" },
                { id: "HR-EHK-07", description: "Check housekeeping chemical dilution ratios (R1-R6).", priority: "High", riskLevel: "Medium", consequence: "Surface damage or staff health risk.", proof: "Titration Log" },
                { id: "HR-EHK-08", description: "Verify laundry vendor turnaround time (< 24 hours).", priority: "Medium", riskLevel: "Low", consequence: "Linen stockouts.", proof: "Log Match" },
                { id: "HR-EHK-09", description: "Inspect staff change-rooms and lockers for hygiene.", priority: "Low", riskLevel: "Low", consequence: "Low staff morale.", proof: "Visual Check" },
                { id: "HR-EHK-10", description: "Final closure of Lost & Found register for today.", priority: "Medium", riskLevel: "Medium", consequence: "Theft or loss of guest property.", proof: "Signed Registry" },
                { id: "HR-EHK-11", description: "Check vacuum cleaner filters and cord safety.", priority: "Low", riskLevel: "Low", consequence: "Poor cleaning and fire hazard.", proof: "Audit Sheet" },
                { id: "HR-EHK-12", description: "Verify availability of 'Green' eco-card in rooms.", priority: "Low", riskLevel: "Low", consequence: "ESG target failure.", proof: "Visual Audit" },
                { id: "HR-EHK-13", description: "Log daily carpet-shampooing progress.", priority: "Low", riskLevel: "Low", consequence: "Musty hotel odors.", proof: "Schedule Log" },
                { id: "HR-EHK-14", description: "Confirm night-shift HK staffing levels.", priority: "High", riskLevel: "Medium", consequence: "Unmet night guest requests.", proof: "Roster Check" },
                { id: "HR-EHK-15", description: "Final Housekeeping command sign-off.", priority: "High", riskLevel: "Low", consequence: "Slipping standards.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Room Readiness",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Room Attendant",
            summary: "Tactical floor execution for the guest zone.",
            icon: "bed",
            tasks: [
                { id: "HR-RA-01", description: "Check all lights and bulbs in the guest room.", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort.", proof: "Visual Check" },
                { id: "HR-RA-02", description: "Flush toilet and check for any leaks or scale.", priority: "High", riskLevel: "Low", consequence: "Poor hygiene perception.", proof: "Visual Check" },
                { id: "HR-RA-03", description: "Verify TV and remote control functionality.", priority: "Low", riskLevel: "Low", consequence: "Increased support calls.", proof: "Test Note" },
                { id: "HR-RA-04", description: "Sanitize high-touch points (Handles, Switch, Phone).", priority: "High", riskLevel: "Medium", consequence: "Infection transmission.", proof: "Daily Checklist" },
                { id: "HR-RA-05", description: "Check minibar for expiry dates and missing items.", priority: "Medium", riskLevel: "High", consequence: "Revenue loss and health risk.", proof: "Consumption Log" },
                { id: "HR-RA-06", description: "Ensure slippers and bathrobes are fresh and sealed.", priority: "Low", riskLevel: "Low", consequence: "Compromised luxury standard.", proof: "Visual Audit" },
                { id: "HR-RA-07", description: "Check room humidity and odors.", priority: "Low", riskLevel: "Low", consequence: "Negative first-touch.", proof: "Walkthrough" },
                { id: "HR-RA-08", description: "Verify safe-box is reset and functional.", priority: "High", riskLevel: "High", consequence: "Guest security risk.", proof: "Lock Test" },
                { id: "HR-RA-09", description: "Replenish tea, coffee, and mineral water par stock.", priority: "Low", riskLevel: "Low", consequence: "Service failure.", proof: "Stock Sheet" },
                { id: "HR-RA-10", description: "Discard any guest-left food or open perishables.", priority: "High", riskLevel: "Medium", consequence: "Pests and odors.", proof: "Cleaning Note" },
                { id: "HR-RA-11", description: "Check window locks and balcony safety catches.", priority: "High", riskLevel: "High", consequence: "Fatal safety negligence.", proof: "Physical Test" },
                { id: "HR-RA-12", description: "Wipe dust from the top of the headboard.", priority: "Low", riskLevel: "Low", consequence: "Allergy and dust complaints.", proof: "Visual Check" },
                { id: "HR-RA-13", description: "Verify 'Do Not Disturb' light/sign is functional.", priority: "Medium", riskLevel: "Low", consequence: "Privacy intrusion.", proof: "Visual Audit" },
                { id: "HR-RA-14", description: "Check shower pressure and hot water TAT.", priority: "Medium", riskLevel: "Low", consequence: "Guest frustration.", proof: "Temp Reading" },
                { id: "HR-RA-15", description: "Final room-ready initials for assigned floor.", priority: "High", riskLevel: "Low", consequence: "Loss of accountability.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Infrastructure Uptime",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Governance for the property backbone.",
            icon: "wrench",
            tasks: [
                { id: "HR-ENG-01", description: "Inspect backup generator (DG) fuel and ARD battery levels.", priority: "High", riskLevel: "High", consequence: "Total facility blackout.", proof: "Fuel Log" },
                { id: "HR-ENG-02", description: "Log HVAC chiller discharge temp and monitor BMS setpoints.", priority: "High", riskLevel: "Medium", consequence: "Guest heat discomfort.", proof: "BMS Reading" },
                { id: "HR-ENG-03", description: "Verify output TDS from RO/STP plants (Target < 150).", priority: "High", riskLevel: "High", consequence: "Health risk and plumbing damage.", proof: "TDS Reading" },
                { id: "HR-ENG-04", description: "Confirm main fire pumps are in 'AUTO' mode.", priority: "High", riskLevel: "High", consequence: "Zero firefighting capability.", proof: "Gauge Log" },
                { id: "HR-ENG-05", description: "Log main KWH meter reading at 12 AM.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored energy spikes.", proof: "Meter Log" },
                { id: "HR-ENG-06", description: "Infrared scan of high-load electrical server panels.", priority: "High", riskLevel: "High", consequence: "Electrical fire and system crash.", proof: "Panel Log" },
                { id: "HR-ENG-07", description: "Check boiler safety valves and gas supply integrity.", priority: "High", riskLevel: "High", consequence: "Explosion / Hot water failure.", proof: "Safety Log" },
                { id: "HR-ENG-08", description: "Test lift intercom buttons from car to Security desk.", priority: "High", riskLevel: "High", consequence: "Guest trapped without help.", proof: "Dial Test" },
                { id: "HR-ENG-09", description: "Verify LOTO (Lock-out Tag-out) for all active repairs.", priority: "High", riskLevel: "High", consequence: "Fatal maintenance accidents.", proof: "Permit Registry" },
                { id: "HR-ENG-10", description: "Identify machines missing monthly PPM service.", priority: "Medium", riskLevel: "Medium", consequence: "Asset life reduction.", proof: "Overdue Report" }
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
                { id: "HR-TEC-01", description: "Log pool pH and Chlorine levels every 4 hours.", priority: "High", riskLevel: "High", consequence: "Pool infection risk and closure.", proof: "Water Log" },
                { id: "HR-TEC-02", description: "Replace burnt-out bulbs in lobby and porch nodes.", priority: "Low", riskLevel: "Low", consequence: "Poor ambiance.", proof: "Visual Check" },
                { id: "HR-TEC-03", description: "Test escalator auto-stop safety sensors.", priority: "High", riskLevel: "High", consequence: "Passenger injury.", proof: "Test Note" },
                { id: "HR-TEC-04", description: "Check sewer lines for signs of backup or odor.", priority: "High", riskLevel: "Medium", consequence: "Ground floor flooding.", proof: "Walkthrough" },
                { id: "HR-TEC-05", description: "Deep clean AC filters on the rotating monthly schedule.", priority: "Medium", riskLevel: "Low", consequence: "Reduced cooling efficiency.", proof: "Rotation Log" }
            ]
        },
        {
            title: "Dining & Bar Standards",
            department: "F&B",
            frequency: "Daily",
            role: "F&B Manager",
            summary: "Product quality and margin protection.",
            icon: "hand-platter",
            tasks: [
                { id: "HR-FBM-01", description: "Log temperatures for all food storage refrigerators.", priority: "High", riskLevel: "High", consequence: "Mass food poisoning outbreak.", proof: "Temp Log" },
                { id: "HR-FBM-02", description: "Physically count top-shelf spirits in the bar safe.", priority: "High", riskLevel: "High", consequence: "Internal revenue theft.", proof: "Count Sheet" },
                { id: "HR-FBM-03", description: "Sign off on 100% of voided/deleted bills for the shift.", priority: "High", riskLevel: "High", consequence: "Cashier fraud.", proof: "POS Audit" },
                { id: "HR-FBM-04", description: "Spot check 10 forks for smudges or water spots.", priority: "Low", riskLevel: "Low", consequence: "Luxury brand dilution.", proof: "Sample Check" },
                { id: "HR-FBM-05", description: "Monitor room service TAT from order to door.", priority: "Medium", riskLevel: "Low", consequence: "Cold food complaints.", proof: "TAT Dashboard" }
            ]
        },
        {
            title: "Perimeter Safety",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and protects life safety.",
            icon: "shield-check",
            tasks: [
                { id: "HR-SEC-01", description: "Verify 30-day CCTV backup and time-sync status.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for lawsuits.", proof: "System Screen" },
                { id: "HR-SEC-02", description: "Audit visitor register for 100% ID capture.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit" },
                { id: "HR-SEC-03", description: "Verify all fire exits are unlocked and path is clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment (Never-event).", proof: "Patrol Log" },
                { id: "HR-SEC-04", description: "Random alcohol breathalyzer check for night shift.", priority: "High", riskLevel: "High", consequence: "Vulnerable perimeter.", proof: "Test Note" },
                { id: "HR-SEC-05", description: "Test panic buttons in the vault and reception.", priority: "High", riskLevel: "High", consequence: "Rescue failure.", proof: "Test Log" }
            ]
        }
    ]
};
