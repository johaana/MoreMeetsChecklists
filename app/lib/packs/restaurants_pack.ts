
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System",
    category: "Hospitality",
    description: "The definitive Sovereign v11.6 engine for multi-unit food and beverage groups. Hardening 160+ technical control points across 11 distinct floor roles.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks—across every branch in your group.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V11.6 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>Owner/COO Command</strong>: High-level visibility into group compliance and profit protection dashboards.", icon: "crown" },
        { text: "<strong>Hybrid Protocol Engine</strong>: Tasks split into 'Technical' (for audits) and 'Trainer's Notes' (for staff).", icon: "zap" },
        { text: "<strong>Kitchen Opening (HACCP)</strong>: Zero-fail protocols for temperature, hygiene, and allergen separation.", icon: "sunrise" },
        { text: "<strong>Guest Relations & ORM</strong>: 24h review response pulse and reservation integrity tracking.", icon: "star" },
        { text: "<strong>Maintenance & Equipment</strong>: Proactive equipment uptime audits to prevent revenue-stopping failures.", icon: "wrench" }
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
                { id: "RES-EXE-11", technicalProtocol: "Utility Intensity & Energy Economics", floorAction: "Review utility intensity (KWH per seat) vs unit baseline.", priority: "Low", riskLevel: "Low", consequence: "Unmonitored energy wastage.", proof: "Utility Tracker" },
                { id: "RES-EXE-12", technicalProtocol: "Fixed Asset Integrity Tracking", floorAction: "Audit Fixed Asset tags on high-value equipment.", priority: "Low", riskLevel: "Low", consequence: "Loss or theft of property.", proof: "Asset Register" },
                { id: "RES-EXE-13", technicalProtocol: "Proprietary IP & NDA Governance", floorAction: "Verify NDAs signed by visiting distributors.", priority: "High", riskLevel: "Medium", consequence: "Leakage of proprietary recipes.", proof: "Signed File" },
                { id: "RES-EXE-14", technicalProtocol: "Personnel Churn & Toxicity Analysis", floorAction: "Review staff churn rate: identify manager patterns.", priority: "Medium", riskLevel: "Low", consequence: "High recruitment costs.", proof: "HR Dashboard" },
                { id: "RES-EXE-15", technicalProtocol: "Blind Petty Cash Verification", floorAction: "Audit petty cash surprise blind count at 2 branches.", priority: "Medium", riskLevel: "High", consequence: "Internal embezzlement.", proof: "Audit Note" },
                { id: "RES-EXE-16", technicalProtocol: "Business Continuity Backup Audit", floorAction: "Check status of 'Disaster Recovery' backup for POS server.", priority: "High", riskLevel: "High", consequence: "Total loss of sales data.", proof: "System Log" },
                { id: "RES-EXE-17", technicalProtocol: "Historical Performance Archive", floorAction: "Review Board Report PDF archive for history preservation.", priority: "Low", riskLevel: "Low", consequence: "Loss of history.", proof: "System Folder" },
                { id: "RES-EXE-18", technicalProtocol: "Procurement Benchmark Analysis", floorAction: "Audit vendor pricing vs. market benchmarks.", priority: "Medium", riskLevel: "Low", consequence: "Inflated costs.", proof: "Vendor Log" },
                { id: "RES-EXE-19", technicalProtocol: "Digital ORM Escalation Review", floorAction: "Verify 100% response to social media grievances.", priority: "High", riskLevel: "Low", consequence: "Viral reputation damage.", proof: "ORM Dashboard" },
                { id: "RES-EXE-20", technicalProtocol: "Executive Board Sign-off", floorAction: "Final Weekly Strategic sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of oversight.", proof: "Signed Summary" }
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
                { id: "RES-KIT-01", technicalProtocol: "Cold-Chain Integrity Verification (CCP-1)", floorAction: "Check and log fridge temps: must be 1°C to 4°C.", priority: "High", riskLevel: "High", consequence: "Mass food poisoning.", proof: "Temperature Log" },
                { id: "RES-KIT-02", technicalProtocol: "Surface Pathogen Control Protocol", floorAction: "Sanitize all counters and verify sanitizer strength with strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination.", proof: "Test Strip" },
                { id: "RES-KIT-03", technicalProtocol: "Inventory Life-Cycle Governance (FIFO)", floorAction: "Verify all prep items have date labels and follow FIFO.", priority: "High", riskLevel: "High", consequence: "Serving expired ingredients.", proof: "Visual Audit" },
                { id: "RES-KIT-04", technicalProtocol: "Probe Thermometer Calibration Check", floorAction: "Test thermometers in ice water to ensure 0°C accuracy.", priority: "High", riskLevel: "Medium", consequence: "Undercooked food risk.", proof: "Calibration Log" },
                { id: "RES-KIT-05", technicalProtocol: "Personnel Hygiene & Biosecurity Audit", floorAction: "Check staff grooming: clean nails, hairnets, no hand wounds.", priority: "High", riskLevel: "Medium", consequence: "Pathogen transmission.", proof: "Briefing Log" },
                { id: "RES-KIT-06", technicalProtocol: "Sterilization Thermal Validation", floorAction: "Inspect dishwasher peak temp (Target 82°C).", priority: "High", riskLevel: "Medium", consequence: "Unsanitized plates.", proof: "Temp Reading" },
                { id: "RES-KIT-07", technicalProtocol: "Allergen Cross-Contact Mitigation", floorAction: "Audit allergen separation in the cold-prep zone.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction.", proof: "Zone Walkthrough" },
                { id: "RES-KIT-08", technicalProtocol: "GREASE Flash-Fire Prevention", floorAction: "Check grease levels in the exhaust hood filters.", priority: "High", riskLevel: "High", consequence: "Flash-fire hazard.", proof: "Visual Check" },
                { id: "RES-KIT-09", technicalProtocol: "Lipid Oxidation Quality Test", floorAction: "Verify fryer oil quality: test for color/acidity.", priority: "Medium", riskLevel: "Low", consequence: "Poor food taste.", proof: "Oil Log" },
                { id: "RES-KIT-10", technicalProtocol: "Physical Contaminant Infrastructure Audit", floorAction: "Inspect ceiling and vents for dust or flaking paint.", priority: "Low", riskLevel: "Medium", consequence: "Physical contamination.", proof: "Walkthrough" },
                { id: "RES-KIT-11", technicalProtocol: "Protein Thawing Safety Compliance", floorAction: "Verify proteins are thawing in fridge, not at room temp.", priority: "High", riskLevel: "High", consequence: "Rapid bacterial growth.", proof: "Visual Audit" },
                { id: "RES-KIT-12", technicalProtocol: "Knife Sanitation & Sharpening Pulse", floorAction: "Sanitize all knives and check for dull blades.", priority: "Medium", riskLevel: "Medium", consequence: "Staff injury and cross-contamination.", proof: "Briefing Log" },
                { id: "RES-KIT-13", technicalProtocol: "Dry Store Humidity Verification", floorAction: "Check dry store for humidity stains and pest bait station status.", priority: "Medium", riskLevel: "High", consequence: "Mold growth and infestation.", proof: "Pest Log" },
                { id: "RES-KIT-14", technicalProtocol: "Handwashing Frequency Validation", floorAction: "Conduct random observation of staff handwashing frequency.", priority: "High", riskLevel: "High", consequence: "Major hygiene breach.", proof: "Supervisor Note" },
                { id: "RES-KIT-15", technicalProtocol: "Recipe Weight Consistency Audit", floorAction: "Check 5 random prep bowls for weight accuracy against recipe.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent taste and profit leakage.", proof: "Yield Sheet" },
                { id: "RES-KIT-16", technicalProtocol: "Gas Manifold Leak Soap-Test", floorAction: "Check main gas manifold joints with soap water.", priority: "High", riskLevel: "High", consequence: "Explosion risk.", proof: "Maintenance Log" },
                { id: "RES-KIT-17", technicalProtocol: "Butchery Waste Disposal Audit", floorAction: "Verify raw protein waste is bagged and removed immediately.", priority: "Medium", riskLevel: "High", consequence: "Odors and biological hazard.", proof: "Waste Log" },
                { id: "RES-KIT-18", technicalProtocol: "Vegetable Sanitization (Chlorine Rinse)", floorAction: "Verify 50ppm chlorine soak for all leafy greens.", priority: "High", riskLevel: "Medium", consequence: "Stomach infections.", proof: "Dip Log" },
                { id: "RES-KIT-19", technicalProtocol: "Chef Table Ambiance Check", floorAction: "Check kitchen-pass lighting and temperature.", priority: "Low", riskLevel: "Low", consequence: "Sub-par food presentation.", proof: "Visual Check" },
                { id: "RES-KIT-20", technicalProtocol: "Shift Closing Thermal Lockdown", floorAction: "Final sign-off on all ovens, ranges, and gas banks OFF.", priority: "High", riskLevel: "High", consequence: "Overnight fire hazard.", proof: "Closure Sheet" }
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
                { id: "RES-ORM-04", technicalProtocol: "VIP Milestone Recognition", floorAction: "Identify celebrants (Birthdays/Anniversaries) for today.", priority: "Medium", riskLevel: "Low", consequence: "Missed delight opportunity.", proof: "Roster Match" },
                { id: "RES-ORM-05", technicalProtocol: "Entrance First-Touch Audit", floorAction: "Inspect porch cleanliness and entrance mat alignment.", priority: "Low", riskLevel: "Low", consequence: "Poor first impression.", proof: "Visual Check" },
                { id: "RES-ORM-06", technicalProtocol: "Guest Wi-Fi Accessibility Validation", floorAction: "Test guest login speed and portal functionality.", priority: "Low", riskLevel: "Low", consequence: "Immediate guest complaints.", proof: "Speed Test" },
                { id: "RES-ORM-07", technicalProtocol: "Staff Name-Tag & Greeting Audit", floorAction: "Check if all floor staff have ID badges and clean uniforms.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional brand image.", proof: "Briefing Log" },
                { id: "RES-ORM-08", technicalProtocol: "Waiting-Area Ambiance Governance", floorAction: "Check AC temp and scent in the waiting lobby.", priority: "Low", riskLevel: "Low", consequence: "Visitor discomfort.", proof: "Daily Log" },
                { id: "RES-ORM-09", technicalProtocol: "Loyalty Program Data Ingestion", floorAction: "Verify 100% phone number capture for today's walk-ins.", priority: "Medium", riskLevel: "Low", consequence: "Weakened marketing database.", proof: "System Report" },
                { id: "RES-ORM-10", technicalProtocol: "Physical Menu Integrity Audit", floorAction: "Check for torn, stained, or outdated menu pages.", priority: "Medium", riskLevel: "Low", consequence: "Poor first touch-point.", proof: "Visual Audit" },
                { id: "RES-ORM-11", technicalProtocol: "Cancellation/No-Show Recovery Pulse", floorAction: "Call all reservations that cancelled today to reschedule.", priority: "Low", riskLevel: "Low", consequence: "Lost long-term revenue.", proof: "Call Log" },
                { id: "RES-ORM-12", technicalProtocol: "Lobby Lighting & Music Sync", floorAction: "Ensure music volume matches daypart (Lunch vs. Dinner).", priority: "Low", riskLevel: "Low", consequence: "Inappropriate energy levels.", proof: "Visual Check" },
                { id: "RES-ORM-13", technicalProtocol: "Valet Feedback Reconciliation", floorAction: "Check valet logs for any reported car issues pre-greet.", priority: "High", riskLevel: "High", consequence: "Liability disputes at exit.", proof: "Valet Sheet" },
                { id: "RES-ORM-14", technicalProtocol: "Feedback QR Code Audit", floorAction: "Verify feedback stickers are present on all bill folders.", priority: "Low", riskLevel: "Low", consequence: "Low data for operations improve.", proof: "Visual Audit" },
                { id: "RES-ORM-15", technicalProtocol: "Shift Handoff Reception sign-off", floorAction: "Final briefing on pending VIP arrivals for next shift.", priority: "Medium", riskLevel: "Low", consequence: "Service failure for core guests.", proof: "Signed Summary" }
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
                { id: "RES-MNT-04", technicalProtocol: "Gas Infrastructure Pressure Test", floorAction: "Conduct soap-bubble test on main gas joints.", priority: "High", riskLevel: "High", consequence: "Explosion or fire hazard.", proof: "Maint Note" },
                { id: "RES-MNT-05", technicalProtocol: "P1 Breakdown TAT Monitoring", floorAction: "Review time-to-fix for any equipment issues today.", priority: "High", riskLevel: "Low", consequence: "Loss of operational focus.", proof: "Job Log" },
                { id: "RES-MNT-06", technicalProtocol: "Oven Gasket & Seal Inspection", floorAction: "Check kitchen oven doors for heat leaks.", priority: "Medium", riskLevel: "Low", consequence: "High energy bills and poor bake.", proof: "Visual Audit" },
                { id: "RES-MNT-07", technicalProtocol: "UPS Battery Health Validation", floorAction: "Check backup power status for POS and servers.", priority: "High", riskLevel: "High", consequence: "System crash and data loss.", proof: "System Screen" },
                { id: "RES-MNT-08", technicalProtocol: "Drainage Sump-Pump Test", floorAction: "Test sump-pump in back alley to prevent flooding.", priority: "High", riskLevel: "High", consequence: "Flooding and operational halt.", proof: "Start-test Log" },
                { id: "RES-MNT-09", technicalProtocol: "AC Filter Cleaning Cycle", floorAction: "Vacuum filters for dining area AC units.", priority: "Low", riskLevel: "Low", consequence: "Poor cooling efficiency.", proof: "Maintenance Log" },
                { id: "RES-MNT-10", technicalProtocol: "CCTV Telemetry Sync", floorAction: "Verify all cameras are recording and timestamps are correct.", priority: "High", riskLevel: "High", consequence: "Loss of legal evidence.", proof: "Monitor Check" },
                { id: "RES-MNT-11", technicalProtocol: "Water Pump Pressure Audit", floorAction: "Log domestic water pressure (Target 3.0 bar).", priority: "Medium", riskLevel: "Medium", consequence: "Water outage during service.", proof: "Gauge Reading" },
                { id: "RES-MNT-12", technicalProtocol: "Exhaust Motor Amperage Test", floorAction: "Check kitchen exhaust sound and vibration.", priority: "Medium", riskLevel: "Low", consequence: "Sudden motor failure/smoke.", proof: "Sound Test" },
                { id: "RES-MNT-13", technicalProtocol: "Solar/Exterior Light Timer Sync", floorAction: "Verify timers are set correctly for sunset.", priority: "Low", riskLevel: "Low", consequence: "Security risk/Energy waste.", proof: "Photo" },
                { id: "RES-MNT-14", technicalProtocol: "Spare Parts Critical Inventory", floorAction: "Check availability of spare POS rolls, bulbs, and fuses.", priority: "Low", riskLevel: "Low", consequence: "Administrative friction.", proof: "Stock Sheet" },
                { id: "RES-MNT-15", technicalProtocol: "Final Engineering sign-off", floorAction: "Brief GM on any P1 parts needing replacement funds.", priority: "High", riskLevel: "Low", consequence: "Delayed repairs.", proof: "Signed Log" }
            ]
        },
        {
            title: "Service & Ambiance",
            department: "Service",
            frequency: "Daily",
            role: "Floor Captain (Shift A)",
            summary: "Governs the guest environment and hygiene parity.",
            icon: "armchair",
            tasks: [
                { id: "RES-FLO-01", technicalProtocol: "Public Area Sanitation Verification", floorAction: "Audit restroom logs: verify 1-hour frequency.", priority: "High", riskLevel: "Low", consequence: "Negative reviews.", proof: "Hourly Sheet" },
                { id: "RES-FLO-02", technicalProtocol: "Ambiance Sensory Validation", floorAction: "Music, Temp (23C), and Scent pulse check.", priority: "Medium", riskLevel: "Low", consequence: "Lower guest dwell time.", proof: "Daily Log" },
                { id: "RES-FLO-03", technicalProtocol: "Furniture Integrity Inspection", floorAction: "Check all tables for stability and seating for damage.", priority: "Low", riskLevel: "Low", consequence: "Guest annoyance.", proof: "Visual Check" },
                { id: "RES-FLO-04", technicalProtocol: "Table-Side metrology Audit", floorAction: "Check if all salt/pepper shakers are clean and full.", priority: "Low", riskLevel: "Low", consequence: "Service friction.", proof: "Visual Audit" },
                { id: "RES-FLO-05", technicalProtocol: "Service Ware Shine Test", floorAction: "Spot-check glasses against light for smudge marks.", priority: "Medium", riskLevel: "Low", consequence: "Unhygienic luxury perception.", proof: "Sample Check" }
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
                { id: "RES-BAR-03", technicalProtocol: "Regulatory License Display Compliance", floorAction: "Verify Bar License original is displayed.", priority: "High", riskLevel: "High", consequence: "Immediate police closure.", proof: "Visual Check" }
            ]
        },
        {
            title: "Delivery & Logistics",
            department: "Logistics",
            frequency: "Daily",
            role: "Dispatch Lead",
            summary: "Zero-fail framework for off-premise sales.",
            icon: "truck",
            tasks: [
                { id: "RES-DEL-01", technicalProtocol: "Packaging Tamper-Seal Audit", floorAction: "Verify bags are stapled/sealed correctly.", priority: "High", riskLevel: "Medium", consequence: "Food tampering.", proof: "Visual Audit" },
                { id: "RES-DEL-02", technicalProtocol: "Aggregator Price Parity Sync", floorAction: "Verify prices on Zomato match the menu.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes.", proof: "App Check" }
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
                { id: "RES-STO-02", technicalProtocol: "Incoming Protein Thermal Audit", floorAction: "Check meat temp on arrival (Target < 5C).", priority: "High", riskLevel: "High", consequence: "Accepting spoiled food.", proof: "Receiving Log" }
            ]
        },
        {
            title: "Finance & Cashier Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance & Accounts Head",
            summary: "Profit protection and fraud detection.",
            icon: "banknote",
            tasks: [
                { id: "RES-FIN-01", technicalProtocol: "Revenue Reconciliation Protocol", floorAction: "Match cash in hand to POS report.", priority: "High", riskLevel: "High", consequence: "Cash theft.", proof: "Settlement Log" },
                { id: "RES-FIN-02", technicalProtocol: "Transactional Integrity Audit (Voids)", floorAction: "Audit all 'Deleted' or 'Voided' bills.", priority: "High", riskLevel: "Medium", consequence: "Cashier fraud.", proof: "POS Audit" }
            ]
        },
        {
            title: "EHS & Safety Officer",
            department: "Safety",
            frequency: "Daily",
            role: "EHS & Food Safety Officer",
            summary: "Infrastructure hardening and life safety.",
            icon: "shield-check",
            tasks: [
                { id: "RES-SEC-01", technicalProtocol: "Telemetry Retention Validation", floorAction: "Verify CCTV recording status (30-day sync).", priority: "High", riskLevel: "High", consequence: "Loss of evidence.", proof: "System Check" },
                { id: "RES-SEC-02", technicalProtocol: "Life Safety Exit Path Clear", floorAction: "Verify all fire exits are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment.", proof: "Patrol Log" }
            ]
        }
    ]
};
