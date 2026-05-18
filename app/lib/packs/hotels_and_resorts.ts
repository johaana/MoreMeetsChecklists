
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
    description: "The definitive Sovereign v17.6 clinical-grade engine for luxury hospitality. Hardening 255 technical control points across 22 institutional roles to protect guest privacy, asset uptime, and revenue integrity.",
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
                { id: "HR-FOM-05", technicalProtocol: "Queue TAT Monitor", floorAction: "Measure check-in wait time during peak title arrivals.", priority: "Medium", riskLevel: "Low", consequence: "Poor guest scores.", proof: "Queue Log" }
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
                { id: "HR-REC-03", technicalProtocol: "Welcome Kit Presence", floorAction: "Verify availability of key-cards and welcome cards.", priority: "Low", riskLevel: "Low", consequence: "Admin friction on arrival.", proof: "Stock Check" }
            ]
        },
        {
            title: "VIP & Guest Relations",
            department: "Front Office",
            frequency: "Daily",
            role: "Guest Relations Executive",
            summary: "High-LTV guest handling and celebration setup.",
            icon: "star",
            tasks: [
                { id: "HR-GRE-01", technicalProtocol: "VIP Arrival Vetting", floorAction: "Physically verify room setup for today's Tier 1 VIPs.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-value loyalty.", proof: "Photo" },
                { id: "HR-GRE-02", technicalProtocol: "Special Occasion Verify", floorAction: "Check card spelling and amenity quality for anniversaries.", priority: "Low", riskLevel: "Low", consequence: "Failed celebration promise.", proof: "Visual Check" },
                { id: "HR-GRE-03", technicalProtocol: "Guest Escalation Loop", floorAction: "Close feedback loop on all unresolved disputes < 12h.", priority: "High", riskLevel: "High", consequence: "Viral reputation damage.", proof: "Incident Log" }
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
                { id: "HR-BEL-02", technicalProtocol: "Porch Clearance Monitor", floorAction: "Ensure drive-way is clear of unattended vehicles.", priority: "Medium", riskLevel: "Low", consequence: "Porch gridlock.", proof: "Patrol Log" }
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
                { id: "HR-HKP-05", technicalProtocol: "Staff Change-Room Sanitation", floorAction: "Verify hourly cleaning log for employee zones.", priority: "Low", riskLevel: "Low", consequence: "Hygiene drift.", proof: "Cleaning Sheet" }
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
                { id: "HR-LDR-02", technicalProtocol: "Chemical Dosing Calibration", floorAction: "Check pumps on industrial washers.", priority: "High", riskLevel: "Medium", consequence: "Chemical fabric burn.", proof: "Tech Note" }
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
                { id: "HR-ENG-05", technicalProtocol: "Lift Emergency Comms", floorAction: "Test lift intercom buttons to Security Desk.", priority: "High", riskLevel: "High", consequence: "Guest trapped without help.", proof: "Dial Test" }
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
                { id: "HR-SEC-04", technicalProtocol: "Staff Exit Bag-Search", floorAction: "Perform 5 random searches of staff bags at EOD.", priority: "Medium", riskLevel: "Medium", consequence: "Internal shrinkage.", proof: "Registry Note" }
            ]
        },
        {
            title: "CCTV & Monitoring",
            department: "Security",
            frequency: "Daily",
            role: "CCTV Operator",
            summary: "Digital oversight of property assets.",
            icon: "eye",
            tasks: [
                { id: "HR-CCTV-01", technicalProtocol: "Blind-spot Scan", floorAction: "Verify cameras cover all corridor entrances.", priority: "High", riskLevel: "Medium", consequence: "Lack of incident evidence.", proof: "Monitor Check" }
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
                { id: "HR-FBM-02", technicalProtocol: "Table Setup Verify", floorAction: "Audit 5 tables for brand-standard cutlery alignment.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Visual Audit" }
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
                { id: "HR-KSH-03", technicalProtocol: "Allergen Segregation", floorAction: "Verify isolation of GF and nut-free prep zones.", priority: "High", riskLevel: "High", consequence: "Fatal guest reaction.", proof: "Visual Audit" }
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
                { id: "HR-STW-02", technicalProtocol: "Grease Trap Pulse", floorAction: "Check for blockage and bacterial odors.", priority: "Medium", riskLevel: "Medium", consequence: "Kitchen flooding.", proof: "Visual Check" }
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
                { id: "HR-POL-05", technicalProtocol: "Deck Slip-Resistance", floorAction: "Inspect for algae or slick spots.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Patrol Log" }
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
                { id: "HR-VAL-04", technicalProtocol: "EV Station Integrity", floorAction: "Check cables for wear and charging uptime.", priority: "Medium", riskLevel: "Low", consequence: "Failed EV service promise.", proof: "Tech Note" }
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
                { id: "HR-BNQ-02", technicalProtocol: "AV Loop Test", floorAction: "Test mics and projector 4h pre-event.", priority: "Medium", riskLevel: "Low", consequence: "High-visibility event failure.", proof: "Tech Report" }
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
                { id: "HR-ESG-05", technicalProtocol: "Food Waste Weight", floorAction: "Log KG of wet-waste sent to bio-composter.", priority: "Low", riskLevel: "Low", consequence: "Inefficient procurement.", proof: "Weight Slip" }
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
                { id: "HR-FSO-02", technicalProtocol: "Smoke Detector Sample", floorAction: "Test 5 random heads in back-corridors.", priority: "High", riskLevel: "High", consequence: "Undetected fire.", proof: "Test Log" }
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
                { id: "HR-HYG-01", technicalProtocol: "ATP Surface Pulse", floorAction: "RLU swab test of Lobby counter.", priority: "Medium", riskLevel: "High", consequence: "Infection transmission.", proof: "Test Result" }
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
                { id: "HR-WST-01", technicalProtocol: "Segregation at Source", floorAction: "Audit 10 bins for correct color-coding.", priority: "Medium", riskLevel: "Low", consequence: "Recycling rejection.", proof: "Visual Check" }
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
                { id: "HR-INV-02", technicalProtocol: "Critical Spare Pulse", floorAction: "Check stock of AC motors and MCBs.", priority: "High", riskLevel: "Medium", consequence: "Extended asset downtime.", proof: "Stock Sheet" }
            ]
        }
    ]
};
