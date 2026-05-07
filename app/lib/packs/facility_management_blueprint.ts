
import type { PremiumPack } from "@/lib/premium-packs";

export const facility_management_blueprint: PremiumPack = {
    id: 'facility_management_blueprint',
    title: "Facility Operations System",
    priceINR: 999,
    priceUSD: 12,
    competitorPriceUSD: 999,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d6d4dd85-3fb9-4c26-8ec3-cb021ddebfdc',
    category: "Corporate & Tech",
    description: "The definitive Sovereign v11.9 technical engine for infrastructure command. Hardening 120+ technical control points from MEP and Contractor Liability to Utility Economics.",
    heroHeadline: "Prevent Downtime, Liability, and Infrastructure Failure.",
    heroSubheadline: "Track building uptime, monitor contractor risks, and protect institutional assets—across 16 specialized governance modules.",
    pricingUrgency: "A single major utility failure or one safety breach costs 100x more than this system.",
    consultingAnchor: 10000,
    icon: "building-2",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["COOs", "Heads of Real Estate", "Facility Directors", "Admin VPs", "Property Managers"],
    sampleItems: [
        { text: "<strong>Building Uptime Grid</strong>: Zero-fail protocols for HVAC chillers, backup generators, and elevator auto-rescue systems.", icon: "zap" },
        { text: "<strong>Contractor Permit Control</strong>: Verifiable Permit-to-Work (PTW) logs for hot-work, height-work, and vendor entry.", icon: "file-check" },
        { text: "<strong>Utility Economics</strong>: Daily KWH and water consumption tracking against baselines to stop unmonitored cost blowouts.", icon: "trending-up" },
        { text: "<strong>Compliance Command</strong>: Verification for Fire NOCs, AMC validity, and statutory licenses to eliminate penalty risk.", icon: "shield-check" },
        { text: "<strong>MEP Asset Watch</strong>: Critical panel scans, pump room vitals, and UPS health logs to prevent catastrophic shutdowns.", icon: "wrench" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure that even when your best engineer leaves, the standard stays.", icon: "history" }
    ],
    checklists: [
        {
            title: "Portfolio Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "COO / Portfolio Head",
            summary: "Asset health, CAPEX tracking, and high-level portfolio liability oversight.",
            icon: "crown",
            tasks: [
                { id: "FM-EXE-01", technicalProtocol: "Group Incident Synthesis", floorAction: "Review weekly P1 incidents across all properties.", priority: "High", riskLevel: "High", consequence: "Escalated liability and unmonitored asset damage.", proof: "Incident Dashboard" },
                { id: "FM-EXE-02", technicalProtocol: "Statutory Affiliation Audit", floorAction: "Verify validity of all Fire NOCs and Lift licenses in the group.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License Registry" },
                { id: "FM-EXE-03", technicalProtocol: "Public Liability Shield", floorAction: "Confirm valid insurance policies for 100% of sites.", priority: "High", riskLevel: "High", consequence: "Financial ruin during a major catastrophic event.", proof: "Policy Registry" },
                { id: "FM-EXE-04", technicalProtocol: "CAPEX Milestone Pulse", floorAction: "Review project completion photos for scheduled upgrades.", priority: "Medium", riskLevel: "Medium", consequence: "Budget overruns and delayed facility upgrades.", proof: "Project Log" },
                { id: "FM-EXE-05", technicalProtocol: "Occupant CSAT Sentiment", floorAction: "Analyze common keywords in high-priority tenant complaints.", priority: "Medium", riskLevel: "Low", consequence: "Tenant attrition and negative brand reputation.", proof: "CSAT Report" },
                { id: "FM-EXE-06", technicalProtocol: "Portfolio Utility Intensity", floorAction: "Compare KWH/SqFt benchmarks across all properties.", priority: "Low", riskLevel: "Low", consequence: "Hidden energy wastage and inflated overheads.", proof: "Utility Chart" },
                { id: "FM-EXE-07", technicalProtocol: "AMC Renewal Pipeline", floorAction: "Audit contract expiry dates for Chiller/Generator vendors.", priority: "High", riskLevel: "Medium", consequence: "Service lapse leading to mechanical breakdown.", proof: "Contract Log" },
                { id: "FM-EXE-08", technicalProtocol: "Senior Management Floor Presence", floorAction: "Audit GMs' floor-walk logs for peak traffic hours.", priority: "Low", riskLevel: "Low", consequence: "Leadership disconnect from floor reality.", proof: "Patrol Log" },
                { id: "FM-EXE-09", technicalProtocol: "Near-Miss Culture Audit", floorAction: "Review 'Hazard Reported' logs from front-line technicians.", priority: "Medium", riskLevel: "High", consequence: "Unaddressed hazards turning into fatal accidents.", proof: "Safety Log" },
                { id: "FM-EXE-10", technicalProtocol: "Final Board Sign-off", floorAction: "Execute weekly board summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of executive oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Site Command & CX",
            department: "Operations",
            frequency: "Daily",
            role: "Facility Manager",
            summary: "Site-level readiness, ambiance standard, and tenant grievance command.",
            icon: "concierge-bell",
            tasks: [
                { id: "FM-GMC-01", technicalProtocol: "Ambiance Sensory Audit", floorAction: "Check Lobby scent, music volume, and temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor visitor first-impression.", proof: "Daily Log" },
                { id: "FM-GMC-02", technicalProtocol: "Occupant Grievance Pulse", floorAction: "Verify 100% of open complaints are resolved in < 4h.", priority: "High", riskLevel: "High", consequence: "Escalated disputes and tenant dissatisfaction.", proof: "Issue Tracker" },
                { id: "FM-GMC-03", technicalProtocol: "Lobby Grooming Standards", floorAction: "Verify staff name-tags and clean uniforms at help-desk.", priority: "Low", riskLevel: "Low", consequence: "Professional brand dilution.", proof: "Briefing Log" },
                { id: "FM-GMC-04", technicalProtocol: "Statutory Display Validation", floorAction: "Confirm Fire NOC and Affiliation is visible at reception.", priority: "High", riskLevel: "High", consequence: "Regulatory fines.", proof: "Visual Check" },
                { id: "FM-GMC-05", technicalProtocol: "VIP Visit Readiness", floorAction: "Audit porch and meeting room setup for today's visitors.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-LTV stakeholder trust.", proof: "Photo" },
                { id: "FM-GMC-06", technicalProtocol: "Emergency Comms Test", floorAction: "Test dial-tone between Lobby and Security Booth.", priority: "High", riskLevel: "Medium", consequence: "Communication fail during crisis.", proof: "Dial Test" },
                { id: "FM-GMC-07", technicalProtocol: "Wi-Fi Portal Performance", floorAction: "Test visitor network login speed (Target < 10s).", priority: "Low", riskLevel: "Low", consequence: "Immediate visitor complaints.", proof: "Phone Test" },
                { id: "FM-GMC-08", technicalProtocol: "Valet/Driver Discipline", floorAction: "Brief valet team on parking etiquette and speed.", priority: "Medium", riskLevel: "Medium", consequence: "Vehicle damage liability.", proof: "Briefing Sheet" },
                { id: "FM-GMC-09", technicalProtocol: "Helpdesk Stationery Audit", floorAction: "Check par levels of guest registers and entry forms.", priority: "Low", riskLevel: "Low", consequence: "Admin friction on arrival.", proof: "Stock Check" },
                { id: "FM-GMC-10", technicalProtocol: "Final Daily FM sign-off", floorAction: "Daily operational sign-off initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Hard FM (MEP) Engine",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Infrastructure uptime, backup power, and mechanical vitals.",
            icon: "wrench",
            tasks: [
                { id: "FM-ENG-01", technicalProtocol: "Emergency Power Readiness (CCP)", floorAction: "Inspect DG fuel and test ARD battery charge.", priority: "High", riskLevel: "High", consequence: "Total facility blackout.", proof: "Start-test Log" },
                { id: "FM-ENG-02", technicalProtocol: "Thermal Integrity (HVAC)", floorAction: "Log chiller discharge temp and monitor BMS set-points.", priority: "High", riskLevel: "Medium", consequence: "Occupant heat discomfort.", proof: "BMS Reading" },
                { id: "FM-ENG-03", technicalProtocol: "Utility Vitals Sync", floorAction: "Log main KWH meter reading at 12 AM.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored energy spikes.", proof: "Meter Log" },
                { id: "FM-ENG-04", technicalProtocol: "Fire Pump Auto-Logic", floorAction: "Confirm main fire pumps are in 'AUTO' mode.", priority: "High", riskLevel: "High", consequence: "Zero firefighting capability.", proof: "Gauge Log" },
                { id: "FM-ENG-05", technicalProtocol: "Water Purity (TDS) Pulse", floorAction: "Verify output TDS from RO/STP (Target < 150).", priority: "High", riskLevel: "High", consequence: "Health risk and plumbing damage.", proof: "TDS Reading" },
                { id: "FM-ENG-06", technicalProtocol: "Electrical Panel Heat Scan", floorAction: "Perform infrared scan of high-load server room panels.", priority: "High", riskLevel: "High", consequence: "Electrical fire and system crash.", proof: "Panel Log" },
                { id: "FM-ENG-07", technicalProtocol: "LOTO Enforcement", floorAction: "Verify 100% lock-out on all active MEP repairs.", priority: "High", riskLevel: "High", consequence: "Fatal industrial accidents.", proof: "Permit Register" },
                { id: "FM-ENG-08", technicalProtocol: "Lift Emergency Comms", floorAction: "Test lift intercom buttons to Security Desk.", priority: "High", riskLevel: "High", consequence: "Guest trapped in lift without help.", proof: "Sound Test" },
                { id: "FM-ENG-09", technicalProtocol: "UPS Load Testing", floorAction: "Verify server-room UPS battery run-time.", priority: "High", riskLevel: "High", consequence: "Data loss during power flip.", proof: "Voltage Log" },
                { id: "FM-ENG-10", technicalProtocol: "Final Engineering Closure", floorAction: "Log all P1 breakdowns for morning alert.", priority: "High", riskLevel: "Low", consequence: "Unmonitored asset decay.", proof: "Signed Log" }
            ]
        },
        {
            title: "BMS & Infrastructure Governance",
            department: "Engineering",
            frequency: "Daily",
            role: "BMS Operator",
            summary: "Advanced digital monitoring of critical facility backbone.",
            icon: "cpu",
            tasks: [
                { id: "FM-BMS-01", technicalProtocol: "BMS Node Connectivity", floorAction: "Verify all AHU and VAV controllers are online on the head-end.", priority: "High", riskLevel: "Medium", consequence: "Loss of control over building climate zones.", proof: "System Dashboard" },
                { id: "FM-BMS-02", technicalProtocol: "Filter Pressure Watch", floorAction: "Log differential pressure across main AHU filters.", priority: "Medium", riskLevel: "Low", consequence: "Reduced airflow and motor strain.", proof: "BMS Reading" },
                { id: "FM-BMS-03", technicalProtocol: "Chiller Delta-T Monitor", floorAction: "Verify inlet/outlet temp variance matches efficiency target.", priority: "High", riskLevel: "Medium", consequence: "High energy cost and poor cooling performance.", proof: "Log Sheet" },
                { id: "FM-BMS-04", technicalProtocol: "Generator Weekly Auto-Start", floorAction: "Execute and log the no-load auto-start simulation.", priority: "High", riskLevel: "High", consequence: "DG failure during real power outage.", proof: "Test Record" },
                { id: "FM-BMS-05", technicalProtocol: "UPS Thermal Pulse", floorAction: "Physically check battery room for heat or electrolyte odors.", priority: "High", riskLevel: "High", consequence: "Battery explosion and fire.", proof: "Walkthrough Note" },
                { id: "FM-BMS-06", technicalProtocol: "Server Humidity Governance", floorAction: "Verify humidity levels are between 45% - 55%.", priority: "High", riskLevel: "High", consequence: "Static discharge damage to IT hardware.", proof: "Hygrometer Reading" },
                { id: "FM-BMS-07", technicalProtocol: "Elevator ARD Logic Test", floorAction: "Simulate power flip to ensure Auto-Rescue brings car to floor.", priority: "High", riskLevel: "High", consequence: "Guest entrapment liability.", proof: "Drill Log" },
                { id: "FM-BMS-08", technicalProtocol: "Fire Panel Isolation Review", floorAction: "Ensure zero zones are manually bypassed without a PTW.", priority: "High", riskLevel: "High", consequence: "Undetected fire in isolated zone.", proof: "Panel Status Photo" },
                { id: "FM-BMS-09", technicalProtocol: "Water Tank Logic", floorAction: "Verify high/low level sensors trigger correct pump start.", priority: "Medium", riskLevel: "Medium", consequence: "Tank overflow and facility flooding.", proof: "Visual Check" },
                { id: "FM-BMS-10", technicalProtocol: "STP Dosing Calibration", floorAction: "Log chemical dosing pump flow-rate for chlorine.", priority: "High", riskLevel: "Medium", consequence: "Untreated discharge and health fines.", proof: "Titration Log" }
            ]
        },
        {
            title: "Soft FM & Janitorial",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Soft FM Manager",
            summary: "Hygiene command, washroom pulse, and aesthetic parity.",
            icon: "sparkles",
            tasks: [
                { id: "FM-SFM-01", technicalProtocol: "Washroom Hygiene Pulse", floorAction: "Audit logs for 60-minute cleaning frequency.", priority: "High", riskLevel: "Low", consequence: "Primary driver of occupant rage.", proof: "Hourly Sheet" },
                { id: "FM-SFM-02", technicalProtocol: "Consumable Stock Audit", floorAction: "Check par levels of soap, tissue, and sanitizers.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene breakdown.", proof: "Stock Check" },
                { id: "FM-SFM-03", technicalProtocol: "Spill Response Readiness", floorAction: "Verify availability of 'Wet Floor' signs in lobbies.", priority: "High", riskLevel: "High", consequence: "Slip and fall lawsuits.", proof: "Visual Check" },
                { id: "FM-SFM-04", technicalProtocol: "Facade Stone Buffing", floorAction: "Inspect porch and stone floors for debris/dullness.", priority: "Low", riskLevel: "Low", consequence: "Luxury brand dilution.", proof: "Visual Audit" },
                { id: "FM-SFM-05", technicalProtocol: "Waste Bay Sanitation", floorAction: "Audit bin covers and odor control at main waste bay.", priority: "Medium", riskLevel: "Medium", consequence: "Pests and health citations.", proof: "Walkthrough" },
                { id: "FM-SFM-06", technicalProtocol: "Upholstery & Carpet Audit", floorAction: "Spot check 5 lobby chairs for stains or dust.", priority: "Low", riskLevel: "Low", consequence: "Poor occupant comfort perception.", proof: "Sample Check" },
                { id: "FM-SFM-07", technicalProtocol: "Deep Clean Milestone", floorAction: "Verify completion of today's scheduled floor deep-clean.", priority: "Medium", riskLevel: "Low", consequence: "Long-term asset decay.", proof: "Photo" },
                { id: "FM-SFM-08", technicalProtocol: "Janitorial Roster Sync", floorAction: "Confirm 100% presence of night-shift cleaners.", priority: "High", riskLevel: "Low", consequence: "Grimy facility at opening.", proof: "Attendance Log" },
                { id: "FM-SFM-09", technicalProtocol: "Chemical Mixing Safety", floorAction: "Verify correct dilution ratios for R1-R6 dispensers.", priority: "High", riskLevel: "Medium", consequence: "Surface damage / Staff lung risk.", proof: "Titration Check" },
                { id: "FM-SFM-10", technicalProtocol: "Final Soft FM Sign-off", floorAction: "Final hygiene walkthrough initials.", priority: "High", riskLevel: "Low", consequence: "Loss of custodial control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Asset Lifecycle & Warranty",
            department: "Engineering",
            frequency: "Monthly",
            role: "Maintenance Lead",
            summary: "Oversight of long-term asset health and vendor obligations.",
            icon: "history",
            tasks: [
                { id: "FM-AST-01", technicalProtocol: "AMC Expiry Governance", floorAction: "Update tracker for all Annual Maintenance Contracts expiring < 60 days.", priority: "High", riskLevel: "Medium", consequence: "Breakdown during contract lapse.", proof: "Updated Calendar" },
                { id: "FM-AST-02", technicalProtocol: "Warranty Integrity Audit", floorAction: "Verify warranty cards and invoices for equipment installed in last 12 months.", priority: "Medium", riskLevel: "Low", consequence: "Paying for repairs that should be free.", proof: "Folder Audit" },
                { id: "FM-AST-03", technicalProtocol: "Critical Spare Par-Levels", floorAction: "Physically count spare bearings, belts, and MCBs.", priority: "High", riskLevel: "Medium", consequence: "Extended downtime waiting for parts.", proof: "Stock Sheet" },
                { id: "FM-AST-04", technicalProtocol: "Pump Vibration Anomaly", floorAction: "Touch-test and listen to main water pumps for bearing noise.", priority: "Medium", riskLevel: "High", consequence: "Sudden motor seizure.", proof: "Observation Log" },
                { id: "FM-AST-05", technicalProtocol: "PPM Overdue Triage", floorAction: "Identify any machine that missed its monthly service.", priority: "High", riskLevel: "Medium", consequence: "Asset life reduction.", proof: "Overdue Report" },
                { id: "FM-AST-06", technicalProtocol: "Asset Downtime Analysis", floorAction: "Log total hours each critical asset was offline this month.", priority: "Low", riskLevel: "Low", consequence: "Inability to identify 'lemon' equipment.", proof: "Downtime Log" },
                { id: "FM-AST-07", technicalProtocol: "Vendor Callback Tracking", floorAction: "Log cases where a vendor had to return for same fault.", priority: "Medium", riskLevel: "Low", consequence: "Paying for poor workmanship.", proof: "Callback Log" },
                { id: "FM-AST-08", technicalProtocol: "CAPEX Forecast", floorAction: "Identify assets reaching end-of-life for next year's budget.", priority: "Low", riskLevel: "Low", consequence: "Budget shocks.", proof: "Forecast Doc" },
                { id: "FM-AST-09", technicalProtocol: "HVAC Gas Leak Pulse", floorAction: "Check indoor/outdoor unit joints for oil/gas leaks.", priority: "High", riskLevel: "Medium", consequence: "System inefficiency and eco-damage.", proof: "Visual Check" },
                { id: "FM-AST-10", technicalProtocol: "Lift Rope Wear Audit", floorAction: "Inspect ropes for fraying or reduction in diameter.", priority: "High", riskLevel: "High", consequence: "Catastrophic cable failure.", proof: "Technical Report" }
            ]
        },
        {
            title: "Contractor Control System",
            department: "Safety",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Governance for third-party manpower and high-risk work.",
            icon: "user-plus",
            tasks: [
                { id: "FM-CON-01", technicalProtocol: "Contractor Induction", floorAction: "Verify 100% of external workers have signed safety policy.", priority: "High", riskLevel: "High", consequence: "Liability during contractor accident.", proof: "Signed Induction" },
                { id: "FM-CON-02", technicalProtocol: "Hot-Work Spark Watch", floorAction: "Deploy mandatory fire-watch guard for welding jobs.", priority: "High", riskLevel: "High", consequence: "Catastrophic fire.", proof: "Permit Sign-off" },
                { id: "FM-CON-03", technicalProtocol: "Height-Work Certification", floorAction: "Verify valid harness and rope-access certs for facade cleaners.", priority: "High", riskLevel: "High", consequence: "Fatal fall from height.", proof: "Cert Photo" },
                { id: "FM-CON-04", technicalProtocol: "Contractor LOTO Verify", floorAction: "Verify third-party has applied their own lock to electrical panels.", priority: "High", riskLevel: "High", consequence: "Accidental energization.", proof: "Visual Check" },
                { id: "FM-CON-05", technicalProtocol: "Insurance (CAR) Validity", floorAction: "Confirm contractor Public Liability insurance is active.", priority: "High", riskLevel: "High", consequence: "Facility pays for contractor errors.", proof: "Policy Registry" },
                { id: "FM-CON-06", technicalProtocol: "Manpower PPE Audit", floorAction: "Spot check helmet and boot usage by contractors.", priority: "High", riskLevel: "Medium", consequence: "OSHA non-compliance.", proof: "Audit Photo" },
                { id: "FM-CON-07", technicalProtocol: "Work-Zone Barricade", floorAction: "Ensure hard barricades and 'Men at Work' signs are in place.", priority: "Medium", riskLevel: "Medium", consequence: "Visitor entry into danger zone.", proof: "Visual Check" },
                { id: "FM-CON-08", technicalProtocol: "Contractor Waste Audit", floorAction: "Confirm 100% debris removed from site at EOD.", priority: "Low", riskLevel: "Low", consequence: "Fire hazard and poor housekeeping.", proof: "Visual Sign-off" },
                { id: "FM-CON-09", technicalProtocol: "Attendance Reconcile", floorAction: "Match contractor biometric log vs. claimed billing hours.", priority: "High", riskLevel: "Low", consequence: "Billing fraud.", proof: "Match Note" },
                { id: "FM-CON-10", technicalProtocol: "Post-Work Handover", floorAction: "Supervisor inspection to ensure system is restored post-repair.", priority: "High", riskLevel: "Medium", consequence: "System failure after vendor leaves.", proof: "Signed Job-card" }
            ]
        },
        {
            title: "EHS & Life Safety",
            department: "Safety",
            frequency: "Daily",
            role: "EHS & Safety Officer",
            summary: "Infrastructure hardening and non-negotiable safety protocols.",
            icon: "shield-alert",
            tasks: [
                { id: "FM-SAF-01", technicalProtocol: "Fire Exit Clearance (CCP)", floorAction: "Verify 100% of fire escapes are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment during crisis.", proof: "Patrol Log" },
                { id: "FM-SAF-02", technicalProtocol: "Fire Gauge Validation", floorAction: "Confirm needle is in GREEN zone for all extinguishers.", priority: "High", riskLevel: "High", consequence: "Zero firefighting capability.", proof: "Gauge Log" },
                { id: "FM-SAF-03", technicalProtocol: "PA System Volume Test", floorAction: "Test emergency announcements in a random zone.", priority: "High", riskLevel: "Medium", consequence: "Evacuation chaos.", proof: "Sound Test" },
                { id: "FM-SAF-04", technicalProtocol: "First Aid Kit Inventory", floorAction: "Check expiry dates of medicines and bandages.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat campus injuries.", proof: "Stock Audit" },
                { id: "FM-SAF-05", technicalProtocol: "Hot-Work Permit Audit", floorAction: "Verify permits for all active welding/cutting jobs.", priority: "High", riskLevel: "High", consequence: "Explosion / Fire hazard.", proof: "Permit Registry" },
                { id: "FM-SAF-06", technicalProtocol: "Chemical Store Spill Guard", floorAction: "Inspect containment trays for leaks.", priority: "High", riskLevel: "High", consequence: "Toxic gas exposure.", proof: "Visual Check" },
                { id: "FM-SAF-07", technicalProtocol: "Working-at-Height Harness", floorAction: "Inspect safety ropes for facade cleaners.", priority: "High", riskLevel: "High", consequence: "Fatal fall from height.", proof: "Photo" },
                { id: "FM-SAF-08", technicalProtocol: "Emergency Light Run", floorAction: "Verify battery run for stairwell exit signs.", priority: "Medium", riskLevel: "High", consequence: "Panic during darkness.", proof: "Test Log" },
                { id: "FM-SAF-09", technicalProtocol: "Safety Policy Briefing", floorAction: "Conduct 2-min 'Toolbox Talk' with technical team.", priority: "Low", riskLevel: "Low", consequence: "Slipping safety culture.", proof: "Briefing Log" },
                { id: "FM-SAF-10", technicalProtocol: "Final Nightly Safety Sign-off", floorAction: "Physical perimeter touch-point initials.", priority: "High", riskLevel: "Low", consequence: "Systemic risk gap.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Energy & Sustainability",
            department: "Engineering",
            frequency: "Daily",
            role: "Energy Auditor",
            summary: "Oversight of energy intensity and environmental metrics.",
            icon: "zap",
            tasks: [
                { id: "FM-SUS-01", technicalProtocol: "KWH Anomaly Review", floorAction: "Compare daily consumption vs baseline; investigate >10% variance.", priority: "High", riskLevel: "Medium", consequence: "Unmonitored energy wastage.", proof: "Meter Match" },
                { id: "FM-SUS-02", technicalProtocol: "Water Meter Pulse", floorAction: "Log consumption at 8 AM to detect overnight leaks.", priority: "High", riskLevel: "Medium", consequence: "Hidden pipe burst and resource waste.", proof: "Water Log" },
                { id: "FM-SUS-03", technicalProtocol: "Diesel Reconcile", floorAction: "Match dip-stick level vs flow-meter and generator runtime.", priority: "High", riskLevel: "High", consequence: "Internal fuel theft.", proof: "Variance Report" },
                { id: "FM-SUS-04", technicalProtocol: "Automation Sensor Uptime", floorAction: "Verify logic for corridor dimming is active.", priority: "Low", riskLevel: "Low", consequence: "Lights burning in empty zones.", proof: "Walkthrough" },
                { id: "FM-SUS-05", technicalProtocol: "HVAC Optimization", floorAction: "Confirm night setback set-points for unoccupied zones.", priority: "Medium", riskLevel: "Low", consequence: "Wasted cooling capacity.", proof: "BMS Screenshot" },
                { id: "FM-SUS-06", technicalProtocol: "Solar Health Pulse", floorAction: "Check inverter dashboard for active faults.", priority: "Medium", riskLevel: "Medium", consequence: "Loss of renewable savings.", proof: "Dashboard" },
                { id: "FM-SUS-07", technicalProtocol: "Utility Bill Collation", floorAction: "Organize data for monthly carbon reporting.", priority: "Low", riskLevel: "Low", consequence: "Compliance lag.", proof: "Folder Update" },
                { id: "FM-SUS-08", technicalProtocol: "APFC Bank Status", floorAction: "Verify power factor is maintained > 0.99.", priority: "High", riskLevel: "Medium", consequence: "Surcharge penalties from grid.", proof: "Capacitor Log" },
                { id: "FM-SUS-09", technicalProtocol: "Landfill Diversion Audit", floorAction: "Log weight of dry-waste sent for recycling.", priority: "Low", riskLevel: "Low", consequence: "Environmental score drop.", proof: "Weight Slip" },
                { id: "FM-SUS-10", technicalProtocol: "Sustainability Sign-off", floorAction: "Execute daily green-metric initials.", priority: "Low", riskLevel: "Low", consequence: "Loss of ESG data integrity.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Security & Perimeter",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and protects institutional assets.",
            icon: "shield-check",
            tasks: [
                { id: "FM-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or suits.", proof: "System Screen" },
                { id: "FM-SEC-02", technicalProtocol: "Visitor ID Capture", floorAction: "Audit register for 100% ID verification at gate.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit" },
                { id: "FM-SEC-03", technicalProtocol: "Perimeter Electric Fence", floorAction: "Test alarm trigger on main fence line.", priority: "High", riskLevel: "High", consequence: "Security breach.", proof: "Test Log" },
                { id: "FM-SEC-04", technicalProtocol: "Guard Sobriety Pulse", floorAction: "Random breathalyzer test for night shift.", priority: "High", riskLevel: "High", consequence: "Vulnerable campus perimeter.", proof: "Test Note" },
                { id: "FM-SEC-05", technicalProtocol: "Loading Bay Lock-down", floorAction: "Physically confirm all bay shutters locked at 8 PM.", priority: "High", riskLevel: "High", consequence: "Overnight stock theft.", proof: "Visual Check" },
                { id: "FM-SEC-06", technicalProtocol: "Key Cabinet Audit", floorAction: "Match 100% of keys against master register.", priority: "High", riskLevel: "High", consequence: "Unauthorized vault access.", proof: "Inventory Check" },
                { id: "FM-SEC-07", technicalProtocol: "Bollard & Gate Motor", floorAction: "Verify speed and sensor safety for main gate.", priority: "Medium", riskLevel: "Low", consequence: "Vehicle damage or slow entry.", proof: "Visual Check" },
                { id: "FM-SEC-08", technicalProtocol: "Security Lighting Audit", floorAction: "Verify alley and roof lighting status.", priority: "Medium", riskLevel: "Medium", consequence: "Theft-prone blind spots.", proof: "Walkthrough" },
                { id: "FM-SEC-09", technicalProtocol: "Staff Bag-Check Execution", floorAction: "Perform random exit checks for support staff.", priority: "High", riskLevel: "Medium", consequence: "Internal shrinkage.", proof: "Registry Note" },
                { id: "FM-SEC-10", technicalProtocol: "Final Perimeter Seal", floorAction: "EOD security deployment sign-off.", priority: "High", riskLevel: "Low", consequence: "Unsecured property.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Utility Economics",
            department: "Finance",
            frequency: "Daily",
            role: "Utility Analyst",
            summary: "Governance for energy, water, and waste costs.",
            icon: "zap",
            tasks: [
                { id: "FM-FIN-01", technicalProtocol: "KWH Meter Reconcile", floorAction: "Match sub-meter usage against main billing meter.", priority: "High", riskLevel: "Medium", consequence: "Undetected energy leakage.", proof: "Meter Log" },
                { id: "FM-FIN-02", technicalProtocol: "Water Tanker Verification", floorAction: "Match delivery notes against tank level sensors.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing water.", proof: "Log Match" },
                { id: "FM-FIN-03", technicalProtocol: "Waste Disposal Invoice", floorAction: "Audit weight of disposed hazardous waste.", priority: "Medium", riskLevel: "Low", consequence: "Overpaying for waste services.", proof: "Weight Slip" },
                { id: "FM-FIN-04", technicalProtocol: "Fuel Inventory Audit", floorAction: "Blind count of diesel in DG storage tanks.", priority: "High", riskLevel: "High", consequence: "Internal fuel theft.", proof: "Dip-stick Reading" },
                { id: "FM-FIN-05", technicalProtocol: "Statutory Fee Pipeline", floorAction: "Check deadline for municipal water/tax payments.", priority: "Medium", riskLevel: "Medium", consequence: "Penalties and disconnects.", proof: "Calendar Update" }
            ]
        },
        {
            title: "Vendor SLA Command",
            department: "Admin",
            frequency: "Weekly",
            role: "Vendor SLA Manager",
            summary: "Monitors third-party service performance parity.",
            icon: "file-check",
            tasks: [
                { id: "FM-VEN-01", technicalProtocol: "Attendance Parity Audit", floorAction: "Verify outsourced staff count matches contract SLA.", priority: "High", riskLevel: "Low", consequence: "Paying for unrendered work.", proof: "Biometric Report" },
                { id: "FM-VEN-02", technicalProtocol: "Service TAT Tracking", floorAction: "Audit 10 job-cards for on-time completion (< 4h).", priority: "Medium", riskLevel: "Low", consequence: "Service decay.", proof: "Job-card Audit" },
                { id: "FM-VEN-03", technicalProtocol: "Vendor PPE Audit", floorAction: "Inspect guard/cleaner safety gear for wear.", priority: "Low", riskLevel: "Medium", consequence: "Sub-par brand image.", proof: "Visual Audit" },
                { id: "FM-VEN-04", technicalProtocol: "Contract Clause Review", floorAction: "Verify insurance validity for active elevator vendor.", priority: "High", riskLevel: "High", consequence: "Legal liability during accident.", proof: "Policy File" },
                { id: "FM-VEN-05", technicalProtocol: "Vendor Payment Penalty", floorAction: "Apply deductions for unresolved P1 misses.", priority: "High", riskLevel: "Low", consequence: "Financial inefficiency.", proof: "Deduction Note" }
            ]
        },
        {
            title: "IT & BMS Vitals",
            department: "Technical",
            frequency: "Daily",
            role: "IT Specialist",
            summary: "Digital backbone and infrastructure monitoring.",
            icon: "server",
            tasks: [
                { id: "FM-IT-01", technicalProtocol: "Server Room Temp (CCP)", floorAction: "Log AC output (Target 20°C).", priority: "High", riskLevel: "High", consequence: "System crash / Hardware damage.", proof: "Temp Reading" },
                { id: "FM-IT-02", technicalProtocol: "Cloud Sync Integrity", floorAction: "Verify 100% daily backup of facility logs.", priority: "High", riskLevel: "High", consequence: "Loss of institutional history.", proof: "System Log" },
                { id: "FM-IT-03", technicalProtocol: "Internet Failover Test", floorAction: "Confirm backup ISP dial-tone.", priority: "Medium", riskLevel: "Low", consequence: "Operational halt during billing.", proof: "Ping Test" }
            ]
        },
        {
            title: "Landscape & Facade",
            department: "Grounds",
            frequency: "Daily",
            role: "Landscape Lead",
            summary: "Curb appeal and exterior ambiance command.",
            icon: "sprout",
            tasks: [
                { id: "FM-LND-01", technicalProtocol: "Porch Ambiance Pulse", floorAction: "Inspect water-feature and exterior lights.", priority: "Low", riskLevel: "Low", consequence: "Poor first-touch image.", proof: "Visual Check" },
                { id: "FM-LND-02", technicalProtocol: "Indoor Plant Hydration", floorAction: "Water all lobby planters by 8 AM.", priority: "Low", riskLevel: "Low", consequence: "Dying decor.", proof: "Walkthrough" },
                { id: "FM-LND-03", technicalProtocol: " facade Cleaning Cycle", floorAction: "Check status of scheduled window washing.", priority: "Medium", riskLevel: "Low", consequence: "Grungy facade image.", proof: "Photo" }
            ]
        },
        {
            title: "Personnel & Certs",
            department: "HR",
            frequency: "Monthly",
            role: "HR & Admin Assistant",
            summary: "Staff competency and health governance.",
            icon: "graduation-cap",
            tasks: [
                { id: "FM-HR-01", technicalProtocol: "License Matrix Sync", floorAction: "Verify valid High-Voltage certs for engineers.", priority: "High", riskLevel: "High", consequence: "Criminal negligence during accident.", proof: "Cert Registry" },
                { id: "FM-HR-02", technicalProtocol: "POSH Policy Display", floorAction: "Confirm policy is posted in staff change-rooms.", priority: "High", riskLevel: "High", consequence: "Legal liability.", proof: "Photo" },
                { id: "FM-HR-03", technicalProtocol: "Grooming Audit", floorAction: "Inspect staff badges and clean uniforms.", priority: "Low", riskLevel: "Low", consequence: "Authority brand drop.", proof: "Briefing Log" }
            ]
        },
        {
            title: "Logistics & Stores",
            department: "Stores",
            frequency: "Daily",
            role: "Logistics Lead",
            summary: "Critical spares and receiving command.",
            icon: "package",
            tasks: [
                { id: "FM-LOG-01", technicalProtocol: "Critical Spares Pulse", floorAction: "Verify stock of spare AC motors and MCBs.", priority: "High", riskLevel: "Medium", consequence: "Extended downtime.", proof: "Stock Sheet" },
                { id: "FM-LOG-02", technicalProtocol: "Receiving Weight Audit", floorAction: "Test scales with 1kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight.", proof: "Calibration Log" },
                { id: "FM-LOG-03", technicalProtocol: "Bay Security Handoff", floorAction: "Verify loading bay is clear and locked at EOD.", priority: "Medium", riskLevel: "High", consequence: "Theft.", proof: "Visual Check" }
            ]
        }
    ]
};
