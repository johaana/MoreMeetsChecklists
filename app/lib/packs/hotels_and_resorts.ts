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
    description: "Sovereign v14.9 luxury governance engine. Hardening 135 technical control points across 9 institutional roles to protect guest privacy, safety, and revenue integrity.",
    icon: "building",
    badgeText: "V14.9 PILOT",
    badgeVariant: "accent",
    whoIsItFor: ["General Managers", "Hotel Owners", "Executive Housekeepers", "Front Office Managers", "Chief Engineers"],
    sampleItems: [
        { text: "<strong>Privacy Infrastructure</strong>: Hidden camera sweeps and master-key vault governance.", icon: "eye-off" },
        { text: "<strong>Revenue Integrity</strong>: Night audit variance logs and unauthorized discount monitoring.", icon: "banknote" },
        { text: "<strong>Life Safety</strong>: Fire-escape clearance patrols and guard sobriety challenges.", icon: "shield-alert" }
    ],
    checklists: [
        {
            title: "Executive Command",
            department: "Management",
            frequency: "Daily",
            role: "General Manager",
            summary: "High-level property command and financial reconciliation.",
            icon: "crown",
            tasks: [
                { id: "HR-GM-01", technicalProtocol: "Revenue & Cash Reconciliation", floorAction: "Match daily total revenue against physical bank deposit slips.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue theft.", proof: "Settlement Log" },
                { id: "HR-GM-02", technicalProtocol: "High-Priority Night Incident Audit", floorAction: "Review all 'Red' flags in the Night Manager's report.", priority: "High", riskLevel: "High", consequence: "Unmonitored liability and guest distress.", proof: "Incident Dashboard" },
                { id: "HR-GM-03", technicalProtocol: "Statutory License Validity Pulse", floorAction: "Verify valid Fire NOC, Liquor, and Health licenses.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License File" },
                { id: "HR-GM-04", technicalProtocol: "Night Audit Discount Variance", floorAction: "Audit 100% of manually applied bill discounts.", priority: "High", riskLevel: "Medium", consequence: "Revenue leakage masked as service recovery.", proof: "Audit Sheet" },
                { id: "HR-GM-05", technicalProtocol: "Critical P1 Breakdown Triage", floorAction: "Monitor repair status of elevators and main chillers.", priority: "High", riskLevel: "Medium", consequence: "Operational halt and guest attrition.", proof: "P1 Log" },
                { id: "HR-GM-06", technicalProtocol: "Digital Reputation Scan (24h)", floorAction: "Verify responses to all Google/OTA mentions from last 24h.", priority: "Medium", riskLevel: "Low", consequence: "Reputational damage and ranking drop.", proof: "ORM Dashboard" },
                { id: "HR-GM-07", technicalProtocol: "Nightly Cash Drop Seal Witness", floorAction: "Witness the physical sealing of the box office cash bag.", priority: "High", riskLevel: "High", consequence: "Internal theft at the till.", proof: "Seal Registry" },
                { id: "HR-GM-08", technicalProtocol: "Lobby Grooming & Uniform Audit", floorAction: "Spot-check badges and uniform cleanliness at helpdesk.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Visual Audit" },
                { id: "HR-GM-09", technicalProtocol: "Guest Sentiment Pulse (Random 3)", floorAction: "Conduct brief satisfaction chats with 3 departing guests.", priority: "Medium", riskLevel: "Low", consequence: "Unidentified systemic CX failures.", proof: "Diary Note" },
                { id: "HR-GM-10", technicalProtocol: "Operating License Display Check", floorAction: "Confirm all mandatory certifications are visible in lobby.", priority: "High", riskLevel: "High", consequence: "Regulatory fines.", proof: "Visual Check" },
                { id: "HR-GM-11", technicalProtocol: "Bank Deposit Slip Matching", floorAction: "Match Sunday collections to Monday bank entries.", priority: "Medium", riskLevel: "Medium", consequence: "Cash mismanagement.", proof: "Deposit Match" },
                { id: "HR-GM-12", technicalProtocol: "Executive Duty Manager Briefing", floorAction: "Conduct a 2-minute pulse briefing with the FOM.", priority: "Low", riskLevel: "Low", consequence: "Leadership disconnect.", proof: "Meeting Note" },
                { id: "HR-GM-13", technicalProtocol: "VIP Arrival Readiness Verify", floorAction: "Verify VIP amenities and cards are correctly placed.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-LTV guest trust.", proof: "Photo" },
                { id: "HR-GM-14", technicalProtocol: "Service Recovery Log Review", floorAction: "Ensure all escalated complaints have a closed resolution loop.", priority: "High", riskLevel: "Medium", consequence: "Repeat service failures.", proof: "Issue Tracker" },
                { id: "HR-GM-15", technicalProtocol: "Final Daily Operational Sign-off", floorAction: "Execute the daily management summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Housekeeping Vitals",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Executive Housekeeper",
            summary: "Governance for room readiness, hygiene, and guest privacy.",
            icon: "sparkles",
            tasks: [
                { id: "HR-HK-01", technicalProtocol: "Room Inspection Verification (100%)", floorAction: "Verify 100% of 'Vacant Ready' rooms are supervisor-inspected.", priority: "High", riskLevel: "High", consequence: "Guest refund risk.", proof: "Inspection Sign-off" },
                { id: "HR-HK-02", technicalProtocol: "Privacy Sweep: Hidden Camera Scan", floorAction: "Check mirrors and vents in 3 random rooms for anomalies.", priority: "High", riskLevel: "High", consequence: "Catastrophic privacy scandal.", proof: "Sweep Log" },
                { id: "HR-HK-03", technicalProtocol: "Linen Grey-Scale Audit", floorAction: "Reject and discard any stained or frayed towels.", priority: "Medium", riskLevel: "Low", consequence: "Luxury brand dilution.", proof: "Linen Register" },
                { id: "HR-HK-04", technicalProtocol: "Staff Change-Room Sanitation", floorAction: "Verify hourly cleaning log for employee locker zones.", priority: "Low", riskLevel: "Low", consequence: "Odor and hygiene drift.", proof: "Cleaning Sheet" },
                { id: "HR-HK-05", technicalProtocol: "R1-R6 Chemical Dilution Ratio", floorAction: "Audit dispenser flow-rates for cleaning concentrates.", priority: "High", riskLevel: "Medium", consequence: "Surface damage / Staff health risk.", proof: "Titration Check" },
                { id: "HR-HK-06", technicalProtocol: "Laundry Turnaround Time (TAT)", floorAction: "Ensure guest laundry is returned within 24 hours.", priority: "Medium", riskLevel: "Low", consequence: "Guest frustration.", proof: "TAT Dashboard" },
                { id: "HR-HK-07", technicalProtocol: "Minibar Par-Level & Seal Check", floorAction: "Check seals on 10 random room minibars.", priority: "Low", riskLevel: "Medium", consequence: "Revenue leakage.", proof: "Stock Sheet" },
                { id: "HR-HK-08", technicalProtocol: "Mattress Seam Pest Inspection", floorAction: "Execute deep-sweep of mattress seams for bed-bug signs.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Inspection Log" },
                { id: "HR-HK-09", technicalProtocol: "Floor-Pantry Lockdown Protocol", floorAction: "Verify all floor closets are double-locked at EOD.", priority: "High", riskLevel: "High", consequence: "Internal theft / security risk.", proof: "Visual Check" },
                { id: "HR-HK-10", technicalProtocol: "Room-Attendant Grooming Score", floorAction: "Brief staff on hairnet and nail-length standards.", priority: "Low", riskLevel: "Low", consequence: "Authority brand drop.", proof: "Briefing Log" },
                { id: "HR-HK-11", technicalProtocol: "Upholstery Stain Audit", floorAction: "Spot-clean or tag 5 random lobby chairs.", priority: "Low", riskLevel: "Low", consequence: "Poor perception of comfort.", proof: "Visual Audit" },
                { id: "HR-HK-12", technicalProtocol: "Curtain Rail Stability Check", floorAction: "Verify rail brackets are secure in VIP suites.", priority: "Medium", riskLevel: "Low", consequence: "Mechanical injury hazard.", proof: "Walkthrough" },
                { id: "HR-HK-13", technicalProtocol: "AC Vent Dust Accumulation", floorAction: "Clean exterior AC filter screens once daily.", priority: "Medium", riskLevel: "Low", consequence: "Poor air quality / guest allergies.", proof: "Cleaning Card" },
                { id: "HR-HK-14", technicalProtocol: "Shower Head De-scaling", floorAction: "Run shower on hot to clear calcium buildup.", priority: "Low", riskLevel: "Low", consequence: "Low pressure complaints.", proof: "Maintenance Log" },
                { id: "HR-HK-15", technicalProtocol: "Toilet Flush Pressure Test", floorAction: "Test 5 random toilets for full tank evacuation.", priority: "High", riskLevel: "Medium", consequence: "Clogging / grimy image.", proof: "Test Note" }
            ]
        },
        {
            title: "Security & Perimeter",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and protects life safety.",
            icon: "shield-check",
            tasks: [
                { id: "HR-SEC-01", technicalProtocol: "CCTV 30-Day Backup Validation", floorAction: "Verify system recording time matches IST; check HDD life.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for suits.", proof: "System Screen" },
                { id: "HR-SEC-02", technicalProtocol: "Guest ID Register Capture (100%)", floorAction: "Audit visitor log for 100% ID document scanning.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit" },
                { id: "HR-SEC-03", technicalProtocol: "Fire-Escape Clearance Patrol", floorAction: "Physically walk all 4 stairwells; clear obstructions.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment during crisis.", proof: "Patrol Log" },
                { id: "HR-SEC-04", technicalProtocol: "Night-Shift Sobriety Challenge", floorAction: "Random breathalyzer test for 2 AM guard rotation.", priority: "High", riskLevel: "High", consequence: "Vulnerable night perimeter.", proof: "Test Note" },
                { id: "HR-SEC-05", technicalProtocol: "Desk & Vault Panic Button Test", floorAction: "Execute silent-alarm test to main control room.", priority: "High", riskLevel: "High", consequence: "Comm failure during robbery.", proof: "Signal Test" },
                { id: "HR-SEC-06", technicalProtocol: "Roof & Basement Gate Lockdown", floorAction: "Confirm all restricted access gates are bolted.", priority: "High", riskLevel: "High", consequence: "Jumper/Intruder risk.", proof: "Visual Check" },
                { id: "HR-SEC-07", technicalProtocol: "Staff Exit Bag-Search Registry", floorAction: "Perform 5 random searches of support staff bags at EOD.", priority: "Medium", riskLevel: "Medium", consequence: "Internal shrinkage.", proof: "Registry Note" },
                { id: "HR-SEC-08", technicalProtocol: "Perimeter Lighting Hotspot Audit", floorAction: "Replace failed bulbs in service-alley and back-porch.", priority: "Medium", riskLevel: "Low", consequence: "Theft-prone dark zones.", proof: "Visual Check" },
                { id: "HR-SEC-09", technicalProtocol: "Porch Security Scanner Functionality", floorAction: "Test baggage scanner with standard test-kit.", priority: "High", riskLevel: "High", consequence: "Weapon/Explosive entry.", proof: "Test Log" },
                { id: "HR-SEC-10", technicalProtocol: "Incident Log Escalation Pulse", floorAction: "Review all P1 security alerts from last 24h.", priority: "High", riskLevel: "Low", consequence: "Unaddressed risk gaps.", proof: "Incident Log" },
                { id: "HR-SEC-11", technicalProtocol: "Guard Deployment vs Roster", floorAction: "Match on-ground guards to the daily deployment sheet.", priority: "Medium", riskLevel: "Low", consequence: "Unmanned points.", proof: "Attendance Log" },
                { id: "HR-SEC-12", technicalProtocol: "Master Key Cabinet Audit", floorAction: "Physically count all master keys against the register.", priority: "High", riskLevel: "High", consequence: "Unauthorized vault/room access.", proof: "Inventory Check" },
                { id: "HR-SEC-13", technicalProtocol: "Loading Bay Access Log", floorAction: "Audit entry/exit of all vendor vehicles.", priority: "Medium", riskLevel: "High", consequence: "Bulk stock theft.", proof: "Registry Audit" },
                { id: "HR-SEC-14", technicalProtocol: "Transformer Yard Security Seal", floorAction: "Verify lock integrity on main utility yard.", priority: "Medium", riskLevel: "High", consequence: "Electrocution liability.", proof: "Visual Check" },
                { id: "HR-SEC-15", technicalProtocol: "Final Nightly Perimeter Seal", floorAction: "Sign-off on the daily security deployment summary.", priority: "High", riskLevel: "Low", consequence: "Unsecured property.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Front Office Governance",
            department: "Front Desk",
            frequency: "Daily",
            role: "Front Office Manager",
            summary: "Arrival readiness and guest compliance.",
            icon: "concierge-bell",
            tasks: [
                { id: "HR-FOM-01", technicalProtocol: "Arrival Parity: PMS vs Channel Mgr", floorAction: "Verify inventory match to stop overbooking.", priority: "High", riskLevel: "Medium", consequence: "Booking conflicts.", proof: "System Check" },
                { id: "HR-FOM-02", technicalProtocol: "Guest ID & C-Form Sync (100%)", floorAction: "Audit 100% of FRRO filings for foreign nationals.", priority: "High", riskLevel: "High", consequence: "Legal violation / shutdown.", proof: "Audit Report" },
                { id: "HR-FOM-03", technicalProtocol: "Master Key Vault Count", floorAction: "Witness physical counting of all front-desk master keys.", priority: "High", riskLevel: "High", consequence: "Privacy breach / unauthorized entry.", proof: "Count Sheet" },
                { id: "HR-FOM-04", technicalProtocol: "Bill Variance Authorization", floorAction: "Verify manager initials on all manual rate corrections.", priority: "High", riskLevel: "Medium", consequence: "Revenue leakage.", proof: "Bill Audit" },
                { id: "HR-FOM-05", technicalProtocol: "Lobby Ambiance: Scent/Music/Temp", floorAction: "Log lobby temp (Target 23°C) and diffuser levels.", priority: "Medium", riskLevel: "Low", consequence: "Poor perception.", proof: "Daily Log" }
            ]
        },
        {
            title: "Engineering Vitals",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Infrastructure safety and asset protection.",
            icon: "wrench",
            tasks: [
                { id: "HR-ENG-01", technicalProtocol: "Generator Fuel Pulse", floorAction: "Log diesel level at 8 AM; check for overnight leaks.", priority: "High", riskLevel: "High", consequence: "Blackout during grid failure.", proof: "Meter Log" },
                { id: "HR-ENG-02", technicalProtocol: "Chiller Discharge Temp", floorAction: "Verify output temp matches efficiency curve (Target 7°C).", priority: "Medium", riskLevel: "Low", consequence: "Wasted power / poor cooling.", proof: "BMS Reading" },
                { id: "HR-ENG-03", technicalProtocol: "Panel Heat Scan", floorAction: "Perform IR scan of laundry and kitchen breaker banks.", priority: "High", riskLevel: "High", consequence: "Overnight short-circuit fire.", proof: "Scan Log" },
                { id: "HR-ENG-04", technicalProtocol: "Lift Auto-Rescue Logic", floorAction: "Simulate power flip to ensure car returns to floor.", priority: "High", riskLevel: "High", consequence: "Guest entrapment liability.", proof: "Test Note" },
                { id: "HR-ENG-05", technicalProtocol: "Water Purity TDS Reading", floorAction: "Log TDS at the main drinking point (Target < 150).", priority: "High", riskLevel: "High", consequence: "Staff/Guest illness.", proof: "TDS Reading" }
            ]
        }
    ]
};
