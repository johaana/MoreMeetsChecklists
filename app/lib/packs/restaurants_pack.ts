
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System",
    category: "Hospitality",
    description: "The definitive Sovereign v11.9 engine for multi-unit food and beverage groups. Hardening 200+ technical control points across 12 distinct floor roles including Shift A/B parity.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks—across every branch in your group.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>Owner/COO Command</strong>: High-level visibility into group compliance and profit protection dashboards.", icon: "crown" },
        { text: "<strong>Symmetric Shift Parity</strong>: Dedicated slots for Floor Manager Shift A and Shift B to ensure zero-gap handovers.", icon: "repeat" },
        { text: "<strong>Kitchen Opening (HACCP)</strong>: Zero-fail protocols for temperature, hygiene, and allergen separation.", icon: "sunrise" },
        { text: "<strong>Guest Relations & ORM</strong>: 24h review response pulse and reservation integrity tracking.", icon: "star" },
        { text: "<strong>Maintenance & Assets</strong>: Proactive equipment uptime audits to prevent revenue-stopping failures.", icon: "wrench" }
    ],
    checklists: [
        {
            title: "Owner & Strategic Oversight",
            department: "Executive",
            frequency: "Weekly",
            role: "Owner / Managing Director",
            summary: "High-level strategic and financial governance for the entire group.",
            icon: "crown",
            tasks: [
                { id: "RES-EXE-01", technicalProtocol: "Operational Performance Synthesis", floorAction: "Review 'Empire Mood' scores for the week across all branches.", priority: "High", riskLevel: "Low", consequence: "Operational drift and loss of team focus.", proof: "Console Review" },
                { id: "RES-EXE-02", technicalProtocol: "Cost of Goods (CoGS) Parity Audit", floorAction: "Audit weekly gross sales vs. food cost percentage (Target 30%).", priority: "High", riskLevel: "Medium", consequence: "Undetected profit leakage and margin erosion.", proof: "Financial Shield" },
                { id: "RES-EXE-03", technicalProtocol: "Statutory License Compliance Audit", floorAction: "Verify validity of FSSAI and Trade licenses for all units.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License Repository" },
                { id: "RES-EXE-04", technicalProtocol: "Liability & Incident Triage", floorAction: "Check status of unresolved 'Red' incidents in the tracker.", priority: "High", riskLevel: "High", consequence: "Escalated legal liability.", proof: "Incident Log" },
                { id: "RES-EXE-05", technicalProtocol: "Brand Standard Mystery Audit Review", floorAction: "Audit mystery auditor scores: focus on critical failures.", priority: "Medium", riskLevel: "Low", consequence: "Dilution of brand standards.", proof: "Audit Report" },
                { id: "RES-EXE-06", technicalProtocol: "Public Liability Insurance Verification", floorAction: "Review Insurance validity for current quarter.", priority: "High", riskLevel: "High", consequence: "Financial ruin during a major accident.", proof: "Policy File" },
                { id: "RES-EXE-07", technicalProtocol: "Manager Peak-Hour Floor Presence Audit", floorAction: "Audit senior management attendance during peak Saturday slots.", priority: "Medium", riskLevel: "Low", consequence: "Management disconnect during high-risk hours.", proof: "Roster Review" },
                { id: "RES-EXE-08", technicalProtocol: "Third-Party Aggregator Fee Audit", floorAction: "Review Zomato/Swiggy commission tiers vs contract.", priority: "Low", riskLevel: "Medium", consequence: "Overpaying for platform commissions.", proof: "Contract Audit" },
                { id: "RES-EXE-09", technicalProtocol: "CAPEX Project Milestone Verification", floorAction: "Verify project milestone photos for new branch builds.", priority: "Medium", riskLevel: "Medium", consequence: "Budget overruns.", proof: "Project Log" },
                { id: "RES-EXE-10", technicalProtocol: "High-LTV Guest Retention Analysis", floorAction: "Check response times for VIP guest feedback.", priority: "High", riskLevel: "Low", consequence: "Loss of core customer base.", proof: "Feedback Dashboard" },
                { id: "RES-EXE-11", technicalProtocol: "Statutory Audit Trail Retention", floorAction: "Verify 100% of previous month's daily logs are archived in cloud.", priority: "High", riskLevel: "Low", consequence: "No legal defense during future lawsuits.", proof: "Cloud Folder" },
                { id: "RES-EXE-12", technicalProtocol: "Fixed Asset Integrity Tracking", floorAction: "Audit Fixed Asset tags on high-value equipment.", priority: "Low", riskLevel: "Low", consequence: "Loss or theft of property.", proof: "Asset Register" },
                { id: "RES-EXE-13", technicalProtocol: "Proprietary IP & NDA Governance", floorAction: "Verify NDAs signed by visiting distributors.", priority: "High", riskLevel: "Medium", consequence: "Leakage of proprietary recipes.", proof: "Signed File" },
                { id: "RES-EXE-14", technicalProtocol: "Personnel Churn & Toxicity Analysis", floorAction: "Review staff churn rate: identify manager patterns.", priority: "Medium", riskLevel: "Low", consequence: "High recruitment costs.", proof: "HR Dashboard" },
                { id: "RES-EXE-15", technicalProtocol: "Blind Petty Cash Verification", floorAction: "Audit petty cash surprise blind count at 2 branches.", priority: "Medium", riskLevel: "High", consequence: "Internal embezzlement.", proof: "Audit Note" },
                { id: "RES-EXE-16", technicalProtocol: "Utility intensity Benchmark", floorAction: "Compare KWH usage per guest vs. industry standards.", priority: "Low", riskLevel: "Low", consequence: "High overhead wastage.", proof: "Utility Report" },
                { id: "RES-EXE-17", technicalProtocol: "Fire NOC Display Audit", floorAction: "Visually confirm current Fire NOC is displayed at main entry.", priority: "High", riskLevel: "High", consequence: "Heavy regulatory fines and closure.", proof: "Photo" },
                { id: "RES-EXE-18", technicalProtocol: "Vendor SLA Review", floorAction: "Audit top 3 vendor deliveries for late arrivals or short stock.", priority: "Medium", riskLevel: "Low", consequence: "Operational delays.", proof: "SLA Tracker" },
                { id: "RES-EXE-19", technicalProtocol: "Shareholder Report Synthesis", floorAction: "Generate summary of critical risk vs. expansion milestones.", priority: "High", riskLevel: "Low", consequence: "Loss of board trust.", proof: "Signed Report" },
                { id: "RES-EXE-20", technicalProtocol: "Final Board Governance sign-off", floorAction: "Execute weekly strategic closure initials.", priority: "High", riskLevel: "Low", consequence: "Loss of executive oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Operations Command",
            department: "Operations",
            frequency: "Daily",
            role: "General Manager",
            summary: "Daily site command, guest flow, and first impressions.",
            icon: "concierge-bell",
            tasks: [
                { id: "RES-OPS-01", technicalProtocol: "Arrival Readiness Protocol", floorAction: "Check if the main sign is lit and porch is buffed.", priority: "High", riskLevel: "Low", consequence: "Poor brand image.", proof: "Photo" },
                { id: "RES-OPS-02", technicalProtocol: "Daily Staff Deployment Audit", floorAction: "Verify 100% roster attendance and assign backup for breaks.", priority: "High", riskLevel: "Medium", consequence: "Service collapse during peak.", proof: "Roster Sheet" },
                { id: "RES-OPS-03", technicalProtocol: "Complaints Triage & Resolution", floorAction: "Review all open guest issues from previous shift.", priority: "High", riskLevel: "High", consequence: "Escalated viral PR damage.", proof: "Issue Log" },
                { id: "RES-OPS-04", technicalProtocol: "Inventory Waste Validation", floorAction: "Check daily waste log signatures from Chef and Store lead.", priority: "Medium", riskLevel: "Medium", consequence: "Untracked profit leakage.", proof: "Waste Sheet" },
                { id: "RES-OPS-05", technicalProtocol: "Closing Security & Thermal Lockdown", floorAction: "Verify all gas banks and non-essential ACs are OFF.", priority: "High", riskLevel: "High", consequence: "Fire hazard and energy waste.", proof: "Closure Log" },
                { id: "RES-OPS-06", technicalProtocol: "Metrology Verification", floorAction: "Check calibration seals on all weighing scales.", priority: "High", riskLevel: "Medium", consequence: "Legal Metrology fines.", proof: "Seal Check" },
                { id: "RES-OPS-07", technicalProtocol: "Float Integrity Check", floorAction: "Verify opening cash floats at all billing stations.", priority: "High", riskLevel: "High", consequence: "Internal cash theft.", proof: "Float Sheet" },
                { id: "RES-OPS-08", technicalProtocol: "Uniform & Grooming Audit", floorAction: "Inspect staff uniforms for cleanliness and name tags.", priority: "Low", riskLevel: "Low", consequence: "Brand image drop.", proof: "Briefing Log" },
                { id: "RES-OPS-09", technicalProtocol: "Music & Ambiance Check", floorAction: "Verify lobby playlist matches current daypart energy.", priority: "Low", riskLevel: "Low", consequence: "Wrong atmosphere.", proof: "Visual Check" },
                { id: "RES-OPS-10", technicalProtocol: "Manager Handover Note", floorAction: "Write summary of critical issues for next shift GM.", priority: "High", riskLevel: "Low", consequence: "Loss of continuity.", proof: "Signed Log" },
                { id: "RES-OPS-11", technicalProtocol: "Digital Menu Sync", floorAction: "Check Zomato/Swiggy for 86'd items to prevent cancellations.", priority: "High", riskLevel: "Low", consequence: "Customer frustration.", proof: "App Status" },
                { id: "RES-OPS-12", technicalProtocol: "First Aid Kit Pulse", floorAction: "Check expiry of bandages and burn gels.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat staff injury.", proof: "Stock Check" },
                { id: "RES-OPS-13", technicalProtocol: "Lobby Scent Management", floorAction: "Refill aroma diffusers and verify scent intensity.", priority: "Low", riskLevel: "Low", consequence: "Poor sensory branding.", proof: "Visual Check" },
                { id: "RES-OPS-14", technicalProtocol: "Valet Sobriety Audit", floorAction: "Conduct random spot check of valet driver alertness.", priority: "High", riskLevel: "High", consequence: "Catastrophic car accident liability.", proof: "Test Note" },
                { id: "RES-OPS-15", technicalProtocol: "Staff Dining Hygiene", floorAction: "Inspect staff canteen for cleanliness and leftover food.", priority: "Low", riskLevel: "Low", consequence: "Low morale and pest risk.", proof: "Visual Audit" },
                { id: "RES-OPS-16", technicalProtocol: "Daily Target Briefing", floorAction: "Host morning briefing on sales targets and upsells.", priority: "Medium", riskLevel: "Low", consequence: "Low conversion.", proof: "Briefing Log" },
                { id: "RES-OPS-17", technicalProtocol: "Porch Lighting Audit", floorAction: "Confirm all external accent lights are operational.", priority: "Low", riskLevel: "Low", consequence: "Dull facade.", proof: "Photo" },
                { id: "RES-OPS-18", technicalProtocol: "HVAC Comfort Pulse", floorAction: "Check dining area temp is exactly 23°C.", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort.", proof: "Temp Reading" },
                { id: "RES-OPS-19", technicalProtocol: "Shift Closing Walkthrough", floorAction: "Physically touch all exit points to ensure they are locked.", priority: "High", riskLevel: "High", consequence: "Burglary risk.", proof: "Closure Log" },
                { id: "RES-OPS-20", technicalProtocol: "EOD Summary sign-off", floorAction: "Submit final shift totals to Owner via Console.", priority: "High", riskLevel: "Low", consequence: "Loss of control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Kitchen HACCP Command",
            department: "Kitchen",
            frequency: "Daily",
            role: "Executive Chef",
            summary: "Zero-fail daily protocols for food safety, prep quality, and hygiene.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", technicalProtocol: "Cold-Chain Integrity Verification (CCP-1)", floorAction: "Check and log fridge temps: must be 1°C to 4°C.", priority: "High", riskLevel: "High", consequence: "Pathogen growth and total stock loss.", proof: "Temperature Log" },
                { id: "RES-KIT-02", technicalProtocol: "Surface Pathogen Control Protocol", floorAction: "Sanitize all counters and verify sanitizer strength with strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination.", proof: "Test Strip" },
                { id: "RES-KIT-03", technicalProtocol: "Inventory Life-Cycle Governance (FIFO)", floorAction: "Verify all prep items have date labels and follow FIFO.", priority: "High", riskLevel: "High", consequence: "Serving expired ingredients.", proof: "Visual Audit" },
                { id: "RES-KIT-04", technicalProtocol: "Probe Thermometer Calibration Check", floorAction: "Test thermometers in ice water to ensure 0°C accuracy.", priority: "High", riskLevel: "Medium", consequence: "Undercooked food risk.", proof: "Calibration Log" },
                { id: "RES-KIT-05", technicalProtocol: "Personnel Hygiene & Biosecurity Audit", floorAction: "Check staff grooming: clean nails, hairnets, no hand wounds.", priority: "High", riskLevel: "Medium", consequence: "Pathogen transmission.", proof: "Briefing Log" },
                { id: "RES-KIT-06", technicalProtocol: "Allergen Segregation Audit", floorAction: "Ensure separate knives/boards used for nut-free prep.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction.", proof: "Visual Audit" },
                { id: "RES-KIT-07", technicalProtocol: "Oil Quality Testing", floorAction: "Check fryer oil TPM level (Target < 25%).", priority: "Medium", riskLevel: "Low", consequence: "Poor food quality and health risk.", proof: "TPM Reading" },
                { id: "RES-KIT-08", technicalProtocol: "Dishwasher Thermal Validation", floorAction: "Verify final rinse temperature reaches 82°C.", priority: "High", riskLevel: "Medium", consequence: "Bacteria on plates.", proof: "Temp Log" },
                { id: "RES-KIT-09", technicalProtocol: "Kitchen Waste Disposal", floorAction: "Ensure wet waste bins are covered and cleared.", priority: "Medium", riskLevel: "Medium", consequence: "Pest attraction.", proof: "Cleaning Note" },
                { id: "RES-KIT-10", technicalProtocol: "Gas Bank Closure", floorAction: "Physically check all burners and main valves are shut.", priority: "High", riskLevel: "High", consequence: "Fire/Explosion.", proof: "Closure Log" },
                { id: "RES-KIT-11", technicalProtocol: "Fresh Meat Inspection", floorAction: "Check incoming protein for smell and core temp (< 5°C).", priority: "High", riskLevel: "High", consequence: "Serving spoiled meat.", proof: "Receiving Log" },
                { id: "RES-KIT-12", technicalProtocol: "Deep Freeze Ice Control", floorAction: "Remove ice buildup from freezer door seals.", priority: "Low", riskLevel: "Low", consequence: "Mechanical failure.", proof: "Visual Check" },
                { id: "RES-KIT-13", technicalProtocol: "Mise-en-place Parity", floorAction: "Audit prep levels against reservations for dinner.", priority: "Medium", riskLevel: "Low", consequence: "Service delays.", proof: "Prep Sheet" },
                { id: "RES-KIT-14", technicalProtocol: "Knife Safety Check", floorAction: "Ensure knives are sharp and stored in racks, not drawers.", priority: "Medium", riskLevel: "Medium", consequence: "Staff injury.", proof: "Visual Audit" },
                { id: "RES-KIT-15", technicalProtocol: "Drain Cleaning Cycle", floorAction: "Flush all floor drains with degreaser and hot water.", priority: "Medium", riskLevel: "Low", consequence: "Odors and roaches.", proof: "Cleaning Log" },
                { id: "RES-KIT-16", technicalProtocol: "Ceiling & Exhaust Dust Check", floorAction: "Inspect hood for grease buildup and ceiling for dust.", priority: "High", riskLevel: "High", consequence: "Kitchen fire risk.", proof: "Visual Audit" },
                { id: "RES-KIT-17", technicalProtocol: "Ingredient Traceability Audit", floorAction: "Check batch codes for current batch of marinades.", priority: "Medium", riskLevel: "High", consequence: "Recall failure.", proof: "Trace Log" },
                { id: "RES-KIT-18", technicalProtocol: "Handwash Station Check", floorAction: "Verify soap and paper-towel levels at kitchen sink.", priority: "High", riskLevel: "Medium", consequence: "Staff hygiene lapse.", proof: "Visual Check" },
                { id: "RES-KIT-19", technicalProtocol: "Staff Meal Quality", floorAction: "Inspect today's staff meal for nutrition and hygiene.", priority: "Low", riskLevel: "Low", consequence: "Low morale.", proof: "Taste Test" },
                { id: "RES-KIT-20", technicalProtocol: "Final Chef closure sign-off", floorAction: "Sign the EOD HACCP compliance declaration.", priority: "High", riskLevel: "Low", consequence: "Systemic risk gap.", proof: "Signed Decl" }
            ]
        },
        {
            title: "Service - Shift A (Morning)",
            department: "Service",
            frequency: "Daily",
            role: "Floor Manager - Shift A",
            summary: "Morning ambiance, lunch readiness, and opening hygiene.",
            icon: "sun",
            tasks: [
                { id: "RES-SVA-01", technicalProtocol: "Opening Hygiene Validation", floorAction: "Audit restroom logs: verify 1-hour frequency.", priority: "High", riskLevel: "Low", consequence: "Negative reviews.", proof: "Hourly Sheet" },
                { id: "RES-SVA-02", technicalProtocol: "Lunch Readiness Check", floorAction: "Verify all side-stations are stocked with cutlery/napkins.", priority: "Medium", riskLevel: "Low", consequence: "Slow service during rush.", proof: "Visual Check" },
                { id: "RES-SVA-03", technicalProtocol: "Staff Briefing - Lunch", floorAction: "Brief team on specials and 86'd items.", priority: "High", riskLevel: "Low", consequence: "Uninformed staff.", proof: "Briefing Log" },
                { id: "RES-SVA-04", technicalProtocol: "Porch Buffing Audit", floorAction: "Ensure entrance floor is shining and debris-free.", priority: "Low", riskLevel: "Low", consequence: "Bad first touch.", proof: "Visual Check" },
                { id: "RES-SVA-05", technicalProtocol: "Stationery Audit", floorAction: "Check stock of reservation diaries and guest forms.", priority: "Low", riskLevel: "Low", consequence: "Operational friction.", proof: "Stock Check" },
                { id: "RES-SVA-06", technicalProtocol: "Daytime Lighting Preset", floorAction: "Ensure curtains and lights are at 'Lunch' setting.", priority: "Low", riskLevel: "Low", consequence: "Dull dining room.", proof: "Visual Check" },
                { id: "RES-SVA-07", technicalProtocol: "Morning Cutlery Polish", floorAction: "Inspect 10 spoons for smudge marks or water spots.", priority: "Medium", riskLevel: "Low", consequence: "Luxury brand dilution.", proof: "Sample Audit" },
                { id: "RES-SVA-08", technicalProtocol: "Salt/Pepper Refill Pulse", floorAction: "Check all shakers are clean and topped up.", priority: "Low", riskLevel: "Low", consequence: "Guest annoyance.", proof: "Visual Check" },
                { id: "RES-SVA-09", technicalProtocol: "Floor Manager Handover A", floorAction: "Brief Shift B lead on any guest issues.", priority: "High", riskLevel: "Low", consequence: "Loss of continuity.", proof: "Signed Log" }
            ]
        },
        {
            title: "Service - Shift B (Evening)",
            department: "Service",
            frequency: "Daily",
            role: "Floor Manager - Shift B",
            summary: "Dinner peak command, evening ambiance, and closure.",
            icon: "moon",
            tasks: [
                { id: "RES-SVB-01", technicalProtocol: "Evening Ambiance Sensory Check", floorAction: "Adjust lighting and music for dinner mood.", priority: "Medium", riskLevel: "Low", consequence: "Wrong energy.", proof: "Daily Log" },
                { id: "RES-SVB-02", technicalProtocol: "Dinner Peak Deployment", floorAction: "Assign specific zones to staff for 7PM rush.", priority: "High", riskLevel: "Medium", consequence: "Service collapse.", proof: "Roster Sheet" },
                { id: "RES-SVB-03", technicalProtocol: "Candle & Flare Safety", floorAction: "Ensure table candles are in holders and clear of curtains.", priority: "High", riskLevel: "High", consequence: "Fire hazard.", proof: "Visual Audit" },
                { id: "RES-SVB-04", technicalProtocol: "Closing Walkthrough", floorAction: "Check all floor outlets and tablets are charging.", priority: "Medium", riskLevel: "Low", consequence: "Morning dead-tech.", proof: "Closure Log" },
                { id: "RES-SVB-05", technicalProtocol: "Terrace Wind Check", floorAction: "Stow umbrellas if wind speed increases.", priority: "High", riskLevel: "Medium", consequence: "Guest injury/Asset damage.", proof: "Visual Check" },
                { id: "RES-SVB-06", technicalProtocol: "Evening Restroom Pulse", floorAction: "Verify toilets cleaned every 30 mins during peak.", priority: "High", riskLevel: "Low", consequence: "Negative viral reviews.", proof: "Hourly Sheet" },
                { id: "RES-SVB-07", technicalProtocol: "Dirty Linen Bag Seal", floorAction: "Verify all lunch/dinner linen is bagged for laundry.", priority: "Low", riskLevel: "Low", consequence: "Odors and pest attraction.", proof: "Visual Check" },
                { id: "RES-SVB-08", technicalProtocol: "Night Security Handoff", floorAction: "Physically confirm porch is clear for guard patrol.", priority: "Medium", riskLevel: "Medium", consequence: "Vulnerable perimeter.", proof: "Signed Log" },
                { id: "RES-SVB-09", technicalProtocol: "Shift B Sign-off", floorAction: "Final signature on duty roster.", priority: "High", riskLevel: "Low", consequence: "Loss of control.", proof: "Signed Roster" }
            ]
        },
        {
            title: "Guest Relations & ORM",
            department: "Reception",
            frequency: "Daily",
            role: "Guest Relations & ORM Lead",
            summary: "Protects the brand reputation and first-impression standard.",
            icon: "star",
            tasks: [
                { id: "RES-ORM-01", technicalProtocol: "Digital Reputation Response Pulse", floorAction: "Reply to all Google/Zomato reviews received in last 24h.", priority: "High", riskLevel: "Medium", consequence: "Ranking drop and brand damage.", proof: "Dashboard" },
                { id: "RES-ORM-02", technicalProtocol: "Reservation Channel Integrity Sync", floorAction: "Verify digital bookings match the physical floor plan.", priority: "High", riskLevel: "Medium", consequence: "Overbooking and angry guests.", proof: "System Match" },
                { id: "RES-ORM-03", technicalProtocol: "Social Media Inquiry TAT Audit", floorAction: "Answer all Instagram/WhatsApp inquiries in < 30 mins.", priority: "Medium", riskLevel: "Low", consequence: "Lost booking revenue.", proof: "Inbox Clear" },
                { id: "RES-ORM-04", technicalProtocol: "Guest Wi-Fi Portal Verification", floorAction: "Test login speed and password visibility in lobby.", priority: "Low", riskLevel: "Low", consequence: "Visitor frustration.", proof: "Phone Test" },
                { id: "RES-ORM-05", technicalProtocol: "VIP Arrival Setup", floorAction: "Verify table choice and 'Celebration' kit for today's VIPs.", priority: "Medium", riskLevel: "Low", consequence: "Loss of loyalty.", proof: "Photo" },
                { id: "RES-ORM-06", technicalProtocol: "Entry Ambiance Scent Check", floorAction: "Verify lobby aroma intensity.", priority: "Low", riskLevel: "Low", consequence: "Poor sensory branding.", proof: "Visual Check" },
                { id: "RES-ORM-07", technicalProtocol: "Feedback QR Placement", floorAction: "Ensure all table tents have clean, scannable QR codes.", priority: "Medium", riskLevel: "Low", consequence: "Lower survey response rate.", proof: "Visual Audit" },
                { id: "RES-ORM-08", technicalProtocol: "Celebration Calendar", floorAction: "Check for birthdays/anniversaries in reservations.", priority: "Medium", riskLevel: "Low", consequence: "Missed personalization.", proof: "Diary Match" },
                { id: "RES-ORM-09", technicalProtocol: "Google Maps Status Update", floorAction: "Update business hours for upcoming holidays.", priority: "High", riskLevel: "Low", consequence: "Guests arrive at closed unit.", proof: "System Check" },
                { id: "RES-ORM-10", technicalProtocol: "Guest Departure Interview", floorAction: "Speak to 5 departing tables for direct feedback.", priority: "Medium", riskLevel: "Low", consequence: "Hidden dissatisfaction.", proof: "Feedback Log" }
            ]
        },
        {
            title: "Maintenance & Assets",
            department: "Engineering",
            frequency: "Daily",
            role: "Maintenance & Assets Lead",
            summary: "Ensures 100% equipment uptime and facility safety.",
            icon: "wrench",
            tasks: [
                { id: "RES-MNT-01", technicalProtocol: "Mission-Critical MEP Vitals Check", floorAction: "Check HVAC chiller plant and log lobby temperature.", priority: "High", riskLevel: "Medium", consequence: "Guest heat discomfort.", proof: "BMS Reading" },
                { id: "RES-MNT-02", technicalProtocol: "Emergency Power Readiness Test", floorAction: "Inspect generator fuel and test battery voltage.", priority: "High", riskLevel: "High", consequence: "Total facility blackout.", proof: "Test Log" },
                { id: "RES-MNT-03", technicalProtocol: "Technical Asset Uptime Audit", floorAction: "Verify all POS terminals and printers are connected.", priority: "Medium", riskLevel: "Low", consequence: "Billing delays during peak.", proof: "Print Test" },
                { id: "RES-MNT-04", technicalProtocol: "Plumbing Leak Patrol", floorAction: "Inspect kitchen drains and bathroom traps for leaks.", priority: "Medium", riskLevel: "Medium", consequence: "Water damage and odors.", proof: "Walkthrough" },
                { id: "RES-MNT-05", technicalProtocol: "Kitchen Hood Exhaust Test", floorAction: "Check suction power and grease filter build-up.", priority: "High", riskLevel: "High", consequence: "Kitchen fire risk.", proof: "Visual Audit" },
                { id: "RES-MNT-06", technicalProtocol: "Generator Load Test", floorAction: "Full load test of backup power for 30 minutes.", priority: "High", riskLevel: "High", consequence: "Blackout during critical rush.", proof: "Service Log" },
                { id: "RES-MNT-07", technicalProtocol: "Exterior Signage Audit", floorAction: "Check if all logo LEDs are operational.", priority: "Low", riskLevel: "Low", consequence: "Poor night visibility.", proof: "Photo" },
                { id: "RES-MNT-08", technicalProtocol: "Water Filter TDS Pulse", floorAction: "Check RO water TDS (Target < 150).", priority: "High", riskLevel: "High", consequence: "Poor water taste/Infection.", proof: "TDS Reading" },
                { id: "RES-MNT-09", technicalProtocol: "AC Filter Cleaning Cycle", floorAction: "Vacuum and sanitize all split/cassette filters.", priority: "Medium", riskLevel: "Low", consequence: "High energy bills and poor cooling.", proof: "Maint Note" },
                { id: "RES-MNT-10", technicalProtocol: "Maintenance Spares Audit", floorAction: "Verify stock of spare light bulbs and POS rolls.", priority: "Low", riskLevel: "Low", consequence: "Service halt.", proof: "Stock Sheet" }
            ]
        },
        {
            title: "Bar & Liquor Integrity",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Governance for high-margin alcohol inventory.",
            icon: "glass-water",
            tasks: [
                { id: "RES-BAR-01", technicalProtocol: "Inventory Parity Reconciliation", floorAction: "Blind count Top 5 Malts vs. POS sales.", priority: "High", riskLevel: "High", consequence: "Internal theft.", proof: "Count Sheet" },
                { id: "RES-BAR-02", technicalProtocol: "Ice-Production Sanitation Audit", floorAction: "Deep clean ice bin and check for mold/slime.", priority: "High", riskLevel: "High", consequence: "Guest illness.", proof: "Cleaning Log" },
                { id: "RES-BAR-03", technicalProtocol: "Glassware Chip Audit", floorAction: "Discard all glasses with even microscopic chips.", priority: "High", riskLevel: "High", consequence: "Glass in guest drink.", proof: "Visual Audit" },
                { id: "RES-BAR-04", technicalProtocol: "Age Verification Pulse", floorAction: "Verify staff are checking IDs for anyone < 25.", priority: "High", riskLevel: "High", consequence: "License suspension.", proof: "Briefing Log" },
                { id: "RES-BAR-05", technicalProtocol: "Draft Line Flushing", floorAction: "Flush beer lines with cleaner to prevent yeast.", priority: "Medium", riskLevel: "Low", consequence: "Sour beer/Complaints.", proof: "Maint Note" },
                { id: "RES-BAR-06", technicalProtocol: "Bottle Tamper Audit", floorAction: "Check pourer seals for any signs of refilling.", priority: "High", riskLevel: "High", consequence: "Fake liquor/PR death.", proof: "Visual Audit" },
                { id: "RES-BAR-07", technicalProtocol: "Bar Sink Drainage", floorAction: "Clear bar floor traps of fruit peel/debris.", priority: "Low", riskLevel: "Low", consequence: "Backflow odors.", proof: "Cleaning Note" },
                { id: "RES-BAR-08", technicalProtocol: "Cocktail Garnish Date-Stamp", floorAction: "Verify all citrus/syrups have 'Prep Date' labels.", priority: "Medium", riskLevel: "Low", consequence: "Serving fermented fruit.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Logistics & Dispatch",
            department: "Logistics",
            frequency: "Daily",
            role: "Dispatch Lead",
            summary: "Zero-fail framework for off-premise sales.",
            icon: "truck",
            tasks: [
                { id: "RES-DEL-01", technicalProtocol: "Packaging Tamper-Seal Audit", floorAction: "Verify bags are stapled/sealed correctly.", priority: "High", riskLevel: "Medium", consequence: "Food tampering.", proof: "Visual Audit" },
                { id: "RES-DEL-02", technicalProtocol: "Aggregator Price Parity Sync", floorAction: "Verify prices on Zomato match the menu.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes.", proof: "App Check" },
                { id: "RES-DEL-03", technicalProtocol: "Rider Pickup TAT", floorAction: "Log minutes from 'Order Ready' to 'Rider Pickup'.", priority: "Medium", riskLevel: "Low", consequence: "Cold food/Late delivery.", proof: "TAT Log" },
                { id: "RES-DEL-04", technicalProtocol: "Delivery Bag Sanitization", floorAction: "Full cleaning of all thermal delivery bags.", priority: "Medium", riskLevel: "Low", consequence: "Odors and cross-contamination.", proof: "Cleaning Log" },
                { id: "RES-DEL-05", technicalProtocol: "Address Accuracy Pulse", floorAction: "Verify guest address on 5 random orders.", priority: "Medium", riskLevel: "Low", consequence: "Lost orders.", proof: "Phone Check" }
            ]
        },
        {
            title: "Receiving & Stores",
            department: "Stores",
            frequency: "Daily",
            role: "Receiving Lead",
            summary: "Profit protection at the entry point.",
            icon: "package-search",
            tasks: [
                { id: "RES-STO-01", technicalProtocol: "Metrology Calibration Test", floorAction: "Test weighing scales with 1kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight.", proof: "Calibration Log" },
                { id: "RES-STO-02", technicalProtocol: "Incoming Protein Thermal Audit", floorAction: "Check meat temp on arrival (Target < 5C).", priority: "High", riskLevel: "High", consequence: "Accepting spoiled food.", proof: "Receiving Log" },
                { id: "RES-STO-03", technicalProtocol: "Supplier FSSAI Audit", floorAction: "Verify FSSAI license of new local vendors.", priority: "High", riskLevel: "High", consequence: "Safety non-compliance.", proof: "Cert File" },
                { id: "RES-STO-04", technicalProtocol: "Dry Store Pest Patrol", floorAction: "Inspect cereal/flour bags for holes or pests.", priority: "High", riskLevel: "High", consequence: "Infestation.", proof: "Visual Audit" },
                { id: "RES-STO-05", technicalProtocol: "Stock Requisition Match", floorAction: "Verify all kitchen draws are backed by indent.", priority: "Medium", riskLevel: "High", consequence: "Internal leakage.", proof: "Indent Match" }
            ]
        },
        {
            title: "Finance & Accounts",
            department: "Finance",
            frequency: "Daily",
            role: "Finance Head",
            summary: "Profit protection and fraud detection.",
            icon: "banknote",
            tasks: [
                { id: "RES-FIN-01", technicalProtocol: "Revenue Reconciliation Protocol", floorAction: "Match cash in hand to POS report.", priority: "High", riskLevel: "High", consequence: "Cash theft.", proof: "Settlement Log" },
                { id: "RES-FIN-02", technicalProtocol: "Transactional Integrity Audit (Voids)", floorAction: "Audit all 'Deleted' or 'Voided' bills.", priority: "High", riskLevel: "Medium", consequence: "Cashier fraud.", proof: "POS Audit" },
                { id: "RES-FIN-03", technicalProtocol: "Petty Cash Surprise Count", floorAction: "Physical count of coins and notes vs voucher.", priority: "Medium", riskLevel: "High", consequence: "Small-scale theft.", proof: "Audit Note" },
                { id: "RES-FIN-04", technicalProtocol: "Credit Card Terminal Audit", floorAction: "Check for skimmers or untampered ports.", priority: "High", riskLevel: "High", consequence: "Legal/PR disaster.", proof: "Visual Check" },
                { id: "RES-FIN-05", technicalProtocol: "GST Filing Prep", floorAction: "Verify 100% invoice entry for current week.", priority: "High", riskLevel: "High", consequence: "Tax penalties.", proof: "System Report" }
            ]
        },
        {
            title: "EHS & Safety Officer",
            department: "Safety",
            frequency: "Daily",
            role: "EHS & Safety Officer",
            summary: "Infrastructure hardening and life safety.",
            icon: "shield-check",
            tasks: [
                { id: "RES-SEC-01", technicalProtocol: "Telemetry Retention Validation", floorAction: "Verify CCTV recording status (30-day sync).", priority: "High", riskLevel: "High", consequence: "Loss of evidence.", proof: "System Check" },
                { id: "RES-SEC-02", technicalProtocol: "Life Safety Exit Path Clear", floorAction: "Verify all fire exits are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment.", proof: "Patrol Log" },
                { id: "RES-SEC-03", technicalProtocol: "Fire Extinguisher Gauge Check", floorAction: "Confirm needle is in GREEN zone for all units.", priority: "High", riskLevel: "High", consequence: "Fire fighting failure.", proof: "Gauge Log" },
                { id: "RES-SEC-04", technicalProtocol: "Gas Manifold Soap Test", floorAction: "Check joints for leaks daily.", priority: "High", riskLevel: "High", consequence: "Explosion.", proof: "Maint Note" },
                { id: "RES-SEC-05", technicalProtocol: "Kitchen Wet-Floor Hazard", floorAction: "Verify 'Wet Floor' signs used during floor wash.", priority: "Medium", riskLevel: "High", consequence: "Staff slip/break injury.", proof: "Visual Check" }
            ]
        },
        {
            title: "Staff Certification & Health",
            department: "HR",
            frequency: "Monthly",
            role: "HR Lead",
            summary: "Governance for personnel health and legal compliance.",
            icon: "graduation-cap",
            tasks: [
                { id: "RES-HR-01", technicalProtocol: "Health Card Integrity Audit", floorAction: "Verify valid health certificates for all F&B handlers.", priority: "High", riskLevel: "High", consequence: "Massive regulatory fines.", proof: "Cert Registry" },
                { id: "RES-HR-02", technicalProtocol: "Emergency Responder Matrix", floorAction: "Audit staff BLS/First-Aid certs: target 2 per shift.", priority: "High", riskLevel: "High", consequence: "Medical negligence.", proof: "Matrix File" }
            ]
        }
    ]
};
