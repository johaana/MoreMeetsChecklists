
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "The definitive Sovereign v11.9 engine for luxury hotels and resorts. Standardizing 200+ technical control points across 12 distinct roles from Front Office to Engineering.",
    heroHeadline: "Eliminate Guest Safety Gaps and Viral Reputation Damage",
    heroSubheadline: "Track 200+ technical control points across 12 specialized roles—even when you’re not on property.",
    pricingUrgency: "One safety incident or a single negative viral review costs 100x more than this entire system.",
    consultingAnchor: 15000,
    icon: "building",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["General Managers", "Hotel Owners", "Heads of Housekeeping", "Banqueting Directors", "Security & Valet Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Pulse Reporting</strong>: Team updates tasks in seconds. Zero-friction supervision without being present.", icon: "timer" },
        { text: "<strong>Reputation Shield</strong>: Daily pulse for review response and social media signals to protect your ratings.", icon: "star" },
        { text: "<strong>Event & Venue Command</strong>: Pre-event AV and floor safety audits for Weddings and Conferences.", icon: "calendar-heart" },
        { text: "<strong>Manager Verification</strong>: Highlighted 'Yellow Targets' show leadership exactly what needs sign-off—no shortcuts.", icon: "shield-check" },
        { text: "<strong>Built-in Training</strong>: Every task includes instructions and consequences of failure. Knowledge stays if staff resign.", icon: "history" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your operational data and the engine forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Site Command & Strategy",
            department: "Executive",
            frequency: "Daily",
            role: "General Manager",
            summary: "Daily property command, night audit verification, and high-level risk oversight.",
            icon: "crown",
            tasks: [
                { id: "HR-GM-01", technicalProtocol: "Night Audit Synthesis", floorAction: "Verify previous day's revenue against bank deposits.", priority: "High", riskLevel: "High", consequence: "Undetected internal theft and revenue leakage.", proof: "Signed Audit" },
                { id: "HR-GM-02", technicalProtocol: "Critical Incident Triage", floorAction: "Review all 'Red' flags in the incident tracker from the night shift.", priority: "High", riskLevel: "High", consequence: "Escalated legal liability.", proof: "Incident Log" },
                { id: "HR-GM-03", technicalProtocol: "Morning Command Briefing", floorAction: "Brief all HODs on VIP arrivals and group events today.", priority: "High", riskLevel: "Low", consequence: "Disconnected service delivery.", proof: "Briefing Log" },
                { id: "HR-GM-04", technicalProtocol: "Duty Roster Parity", floorAction: "Verify 100% staff presence against the master roster.", priority: "Medium", riskLevel: "Medium", consequence: "Service collapse during peak check-in.", proof: "Attendance Log" },
                { id: "HR-GM-05", technicalProtocol: "Guest Satisfaction ORM Review", floorAction: "Audit TripAdvisor/Google Map review trends from last 24h.", priority: "High", riskLevel: "Low", consequence: "Reputational damage.", proof: "CSAT Report" },
                { id: "HR-GM-06", technicalProtocol: "Asset Protection Patrol", floorAction: "Walkthrough of high-traffic zones (Porch, Lobby, Pool).", priority: "Medium", riskLevel: "Low", consequence: "Visible hygiene decay.", proof: "Walkthrough" },
                { id: "HR-GM-07", technicalProtocol: "License Validity Pulse", floorAction: "Confirm Fire NOC and Liquor licenses are current.", priority: "High", riskLevel: "High", consequence: "Authorities sealing the hotel.", proof: "License Repository" },
                { id: "HR-GM-08", technicalProtocol: "Fixed Asset Tagging Audit", floorAction: "Spot check tags on new Lobby/Gym equipment.", priority: "Low", riskLevel: "Low", consequence: "Loss of property.", proof: "Asset Register" },
                { id: "HR-GM-09", technicalProtocol: "Vendor SLA Verification", floorAction: "Verify laundry turnaround time against contract.", priority: "Medium", riskLevel: "Low", consequence: "Linen stockouts.", proof: "SLA Tracker" },
                { id: "HR-GM-10", technicalProtocol: "Final Daily GM sign-off", floorAction: "Execute daily strategic closure.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Front Office & Arrival",
            department: "Reception",
            frequency: "Daily",
            role: "Front Office Manager",
            summary: "Legal compliance, guest ID registration, and billing integrity.",
            icon: "concierge-bell",
            tasks: [
                { id: "HR-FO-01", technicalProtocol: "Statutory ID Compliance (C-Form)", floorAction: "Verify 100% of foreign/domestic IDs scanned and logged.", priority: "High", riskLevel: "High", consequence: "Criminal liability and loss of license.", proof: "Compliance Log" },
                { id: "HR-FO-02", technicalProtocol: "Key Control Inventory", floorAction: "Physically count all master and spare guest keys.", priority: "High", riskLevel: "High", consequence: "Unauthorized guest room access.", proof: "Key Audit" },
                { id: "HR-FO-03", technicalProtocol: "Rate Parity Audit", floorAction: "Verify system rates match OTA listings (MMT/Booking/Airbnb).", priority: "Medium", riskLevel: "Medium", consequence: "Revenue loss and parity disputes.", proof: "System Match" },
                { id: "HR-FO-04", technicalProtocol: "Check-in TAT Monitoring", floorAction: "Audit 5 random check-ins for speed (Target < 8 mins).", priority: "Medium", riskLevel: "Low", consequence: "Negative guest first-impression.", proof: "TAT Log" },
                { id: "HR-FO-05", technicalProtocol: "Billing Void Authorization", floorAction: "Audit and sign off on all deleted/corrected bills.", priority: "High", riskLevel: "High", consequence: "Internal cashier fraud.", proof: "POS Audit" },
                { id: "HR-FO-06", technicalProtocol: "Guest Wi-Fi Speed Test", floorAction: "Test guest network speed in lobby (Target > 20mbps).", priority: "Low", riskLevel: "Low", consequence: "Immediate guest complaints.", proof: "Phone Test" },
                { id: "HR-FO-07", technicalProtocol: "VIP Amenities Verification", floorAction: "Physically check 100% of today's VIP room setup.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-LTV loyalty.", proof: "Photo" },
                { id: "HR-FO-08", technicalProtocol: "Stationery Backup Audit", floorAction: "Verify stock of keys, envelopes, and registration cards.", priority: "Low", riskLevel: "Low", consequence: "Front desk friction.", proof: "Stock Check" },
                { id: "HR-FO-09", technicalProtocol: "Valet Key Reconcile", floorAction: "Match valet key box against parked vehicle log.", priority: "High", riskLevel: "High", consequence: "Unauthorized vehicle use/Theft.", proof: "Key Registry" },
                { id: "HR-FO-10", technicalProtocol: "Float Integrity Check", floorAction: "Verify denominations in all front-desk drawers.", priority: "High", riskLevel: "High", consequence: "Revenue leakage.", proof: "Float Sheet" }
            ]
        },
        {
            title: "Housekeeping Command",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Executive Housekeeper",
            summary: "Room readiness, deep-cleaning cycles, and minibar reconcile.",
            icon: "bed",
            tasks: [
                { id: "HR-HK-01", technicalProtocol: "Arrival Room Inspection", floorAction: "Supervisor check of 100% of rooms assigned for today's arrivals.", priority: "High", riskLevel: "High", consequence: "Immediate refund risk.", proof: "Inspection Log" },
                { id: "HR-HK-02", technicalProtocol: "Linen Grey-Scale Audit", floorAction: "Inspect 5 towels for stains or graying (Discard sub-par).", priority: "High", riskLevel: "Medium", consequence: "Luxury brand dilution.", proof: "Visual Audit" },
                { id: "HR-HK-03", technicalProtocol: "Bathroom Hygiene Pulse", floorAction: "Check 5 drains for hair and shower-heads for scale.", priority: "High", riskLevel: "High", consequence: "Major negative review driver.", proof: "Sample Check" },
                { id: "HR-HK-04", technicalProtocol: "Minibar Reconciliation", floorAction: "Match minibar consumption to billing system entries.", priority: "Medium", riskLevel: "Medium", consequence: "Unbilled revenue loss.", proof: "Bill Match" },
                { id: "HR-HK-05", technicalProtocol: "Public Area Cleaning Log", floorAction: "Audit restroom frequency logs (Verify 1-hour cycle).", priority: "High", riskLevel: "Low", consequence: "Unhygienic guest experience.", proof: "Hourly Sheet" },
                { id: "HR-HK-06", technicalProtocol: "Deep Cleaning Milestone", floorAction: "Verify completion of today's scheduled 1-room deep clean.", priority: "Medium", riskLevel: "Low", consequence: "Long-term asset decay.", proof: "Before/After Photo" },
                { id: "HR-HK-07", technicalProtocol: "Pest Bait Integrity", floorAction: "Check placement of bait stations in floor pantries.", priority: "High", riskLevel: "High", consequence: "Infestation PR disaster.", proof: "Pest Log" },
                { id: "HR-HK-08", technicalProtocol: "Stock Level Governance", floorAction: "Verify par stock of shampoo and toiletries.", priority: "Low", riskLevel: "Low", consequence: "Incomplete guest kits.", proof: "Stock Sheet" },
                { id: "HR-HK-09", technicalProtocol: "Chemical Safety Audit", floorAction: "Verify labeling on R1-R6 cleaning dispensers.", priority: "High", riskLevel: "Medium", consequence: "Surface damage/Staff injury.", proof: "Visual Check" },
                { id: "HR-HK-10", technicalProtocol: "Morning Briefing - Grooming", floorAction: "Audit staff uniforms, nails, and ID badges.", priority: "Low", riskLevel: "Low", consequence: "Professional image drop.", proof: "Briefing Log" }
            ]
        },
        {
            title: "F&B & Dining Logic",
            department: "F&B",
            frequency: "Daily",
            role: "F&B Director",
            summary: "Dining ambiance, buffet hygiene, and liquor governance.",
            icon: "utensils",
            tasks: [
                { id: "HR-FNB-01", technicalProtocol: "Buffet Thermal Audit", floorAction: "Log food temps: Hot (>65°C) and Cold (<5°C).", priority: "High", riskLevel: "High", consequence: "Mass food poisoning event.", proof: "Temperature Log" },
                { id: "HR-FNB-02", technicalProtocol: "Plate & Glass Integrity", floorAction: "Discard all items with chips or visible cracks.", priority: "High", riskLevel: "High", consequence: "Physical injury to guests.", proof: "Visual Audit" },
                { id: "HR-FNB-03", technicalProtocol: "Bar License Display", floorAction: "Verify valid Liquor License is posted at main bar.", priority: "High", riskLevel: "High", consequence: "Police raid and sealing.", proof: "Photo" },
                { id: "HR-FNB-04", technicalProtocol: "Side-Station Stock Pulse", floorAction: "Check cutlery and napkin par levels before Lunch.", priority: "Medium", riskLevel: "Low", consequence: "Service delays during rush.", proof: "Visual Check" },
                { id: "HR-FNB-05", technicalProtocol: "Aggregator Price Match", floorAction: "Verify prices on Zomato match the restaurant menu.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes/Legal fines.", proof: "App Check" }
            ]
        },
        {
            title: "Engineering & Life Safety",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Asset uptime, MEP vitals, and fire safety systems.",
            icon: "wrench",
            tasks: [
                { id: "HR-ENG-01", technicalProtocol: "Backup Generator (DG) Vitals", floorAction: "Inspect DG fuel level and test battery voltage.", priority: "High", riskLevel: "High", consequence: "Total property blackout.", proof: "Fuel Log" },
                { id: "HR-ENG-02", technicalProtocol: "Chiller Plant Monitor", floorAction: "Log HVAC discharge temp and monitor Lobby setting.", priority: "High", riskLevel: "Medium", consequence: "Guest heat discomfort.", proof: "BMS Reading" },
                { id: "HR-ENG-03", technicalProtocol: "Water Quality (TDS) Pulse", floorAction: "Verify RO water output TDS (Target < 150).", priority: "High", riskLevel: "High", consequence: "Waterborne illness outbreak.", proof: "TDS Reading" },
                { id: "HR-ENG-04", technicalProtocol: "Fire Pump Auto-Trigger", floorAction: "Verify fire pumps are in 'Auto' mode.", priority: "High", riskLevel: "High", consequence: "Zero fire fighting capability.", proof: "Gauge Log" },
                { id: "HR-ENG-05", technicalProtocol: "Lift ARD Battery Test", floorAction: "Verify automatic rescue device battery charge.", priority: "High", riskLevel: "High", consequence: "Guest trapped in lift.", proof: "Start-test Log" }
            ]
        },
        {
            title: "Security & Asset Protection",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Perimeter hardening, CCTV sync, and guard discipline.",
            icon: "shield-check",
            tasks: [
                { id: "HR-SEC-01", technicalProtocol: "CCTV Recording Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft.", proof: "System Screen" },
                { id: "HR-SEC-02", technicalProtocol: "Fire Exit Corridor Clear", floorAction: "Verify all fire exits are unlocked and clear of laundry.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment (Never-event).", proof: "Patrol Log" },
                { id: "HR-SEC-03", technicalProtocol: "Visitor Register Audit", floorAction: "Verify 100% ID capture for all external contractors.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder risk.", proof: "Registry Audit" },
                { id: "HR-SEC-04", technicalProtocol: "Guard Sobriety Check", floorAction: "Breathalyzer test for night shift security team.", priority: "High", riskLevel: "High", consequence: "Vulnerable property perimeter.", proof: "Test Note" },
                { id: "HR-SEC-05", technicalProtocol: "Perimeter Lock-up", floorAction: "Physically confirm all back-alley and roof gates locked.", priority: "High", riskLevel: "High", consequence: "Theft and security breach.", proof: "Visual Check" }
            ]
        },
        {
            title: "Digital & ORM Hub",
            department: "Sales",
            frequency: "Daily",
            role: "Sales & Digital Manager",
            summary: "OTA reputation response and rate parity governance.",
            icon: "globe",
            tasks: [
                { id: "HR-ORM-01", technicalProtocol: "Reputation Response Pulse", floorAction: "Reply to all Google/TripAdvisor reviews < 24h.", priority: "High", riskLevel: "Medium", consequence: "Damaged brand ranking.", proof: "Dashboard" },
                { id: "HR-ORM-02", technicalProtocol: "Social Media DM TAT", floorAction: "Answer all Instagram/WhatsApp inquiries < 30m.", priority: "Medium", riskLevel: "Low", consequence: "Lost booking leads.", proof: "Inbox Status" },
                { id: "HR-ORM-03", technicalProtocol: "OTA Content Audit", floorAction: "Verify 'Sold Out' status matches actual hotel rooms.", priority: "High", riskLevel: "Medium", consequence: "Overbooking disputes.", proof: "System Check" }
            ]
        },
        {
            title: "Banquets & Venue Safety",
            department: "Events",
            frequency: "Daily",
            role: "Banqueting Lead",
            summary: "AV readiness, floor safety, and BEO compliance.",
            icon: "calendar-heart",
            tasks: [
                { id: "HR-BNQ-01", technicalProtocol: "Pre-Event AV Recce", floorAction: "Test mics, projector, and Wi-Fi in the hall.", priority: "High", riskLevel: "Medium", consequence: "Event failure during conference.", proof: "Tech Log" },
                { id: "HR-BNQ-02", technicalProtocol: "Trip Hazard Walkthrough", floorAction: "Tape down all floor cables and check carpet edges.", priority: "High", riskLevel: "High", consequence: "Guest fall and legal liability.", proof: "Visual Audit" },
                { id: "HR-BNQ-03", technicalProtocol: "BEO Signature Match", floorAction: "Verify food service matches the Banquet Event Order.", priority: "Medium", riskLevel: "Low", consequence: "Guest disputes on billing.", proof: "Signed BEO" }
            ]
        },
        {
            title: "Guest Logistics & Travel",
            department: "Logistics",
            frequency: "Daily",
            role: "Travel Desk Lead",
            summary: "Vehicle hygiene, driver sobriety, and flight tracking.",
            icon: "plane",
            tasks: [
                { id: "HR-LOG-01", technicalProtocol: "Fleet Hygiene Pulse", floorAction: "Check AC, water, and Scent in airport cars.", priority: "Medium", riskLevel: "Low", consequence: "Poor guest first touch.", proof: "Vehicle Log" },
                { id: "HR-LOG-02", technicalProtocol: "Flight Tracking Sync", floorAction: "Verify arrival time 1h before car dispatch.", priority: "High", riskLevel: "Low", consequence: "Guests waiting at airport.", proof: "Tracking Log" },
                { id: "HR-LOG-03", technicalProtocol: "Driver Sobriety Test", floorAction: "Verify sobriety of all on-duty chauffeurs.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash liability.", proof: "Test Note" }
            ]
        },
        {
            title: "Supply Chain & Procurement",
            department: "Stores",
            frequency: "Weekly",
            role: "Procurement Lead",
            summary: "Supplier vetting and metrology governance.",
            icon: "truck",
            tasks: [
                { id: "HR-SUP-01", technicalProtocol: "Metrology Calibration Test", floorAction: "Test store scales with 1kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing stock weight.", proof: "Calibration Log" },
                { id: "HR-SUP-02", technicalProtocol: "Incoming Meat Thermal Audit", floorAction: "Check chicken/meat temp on arrival (< 5°C).", priority: "High", riskLevel: "High", consequence: "Accepting compromised food.", proof: "Receiving Log" },
                { id: "HR-SUP-03", technicalProtocol: "Supplier FSSAI Verify", floorAction: "Verify FSSAI license of 3 random local vendors.", priority: "High", riskLevel: "High", consequence: "Unsafe sourcing liability.", proof: "Cert File" }
            ]
        },
        {
            title: "Personnel & Certs",
            department: "HR",
            frequency: "Monthly",
            role: "HR & Training Lead",
            summary: "Staff competency and mandatory health certs.",
            icon: "graduation-cap",
            tasks: [
                { id: "HR-PER-01", technicalProtocol: "Staff Health Matrix", floorAction: "Verify valid health certs for 100% of F&B handlers.", priority: "High", riskLevel: "Medium", consequence: "Regulatory fines.", proof: "Med File" },
                { id: "HR-PER-02", technicalProtocol: "Sexual Harassment Policy Display", floorAction: "Visually confirm policy is posted in staff room.", priority: "High", riskLevel: "High", consequence: "Severe legal liability.", proof: "Photo" },
                { id: "HR-PER-03", technicalProtocol: "Training Hour Tracking", floorAction: "Audit staff matrix: target 4h training/month.", priority: "Low", riskLevel: "Low", consequence: "Service decay.", proof: "Matrix File" }
            ]
        },
        {
            title: "Revenue & Finance Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance Manager",
            summary: "Profit protection and transactional integrity.",
            icon: "banknote",
            tasks: [
                { id: "HR-FIN-01", technicalProtocol: "Cash-to-Bank Reconciliation", floorAction: "Witness witnessed seal of cash bags for deposit.", priority: "High", riskLevel: "High", consequence: "Internal revenue theft.", proof: "Bank Slip" },
                { id: "HR-FIN-02", technicalProtocol: "Discount Code Audit", floorAction: "Verify reason codes for all employee discounts used.", priority: "Medium", riskLevel: "Medium", consequence: "Margin leakage.", proof: "System Log" },
                { id: "HR-FIN-03", technicalProtocol: "Voided Bill Review", floorAction: "Sign-off on all cancelled room or F&B bills.", priority: "High", riskLevel: "High", consequence: "Theft masked as errors.", proof: "POS Audit" }
            ]
        }
    ]
};
