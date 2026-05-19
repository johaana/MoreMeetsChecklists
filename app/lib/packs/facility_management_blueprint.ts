
import type { PremiumPack } from "@/lib/premium-packs";

export const facility_management_blueprint: PremiumPack = {
    id: 'facility_management_blueprint',
    title: "Facilities Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 999,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d6d4dd85-3fb9-4c26-8ec3-cb021ddebfdc',
    category: "Corporate & Tech",
    description: "The definitive Sovereign v18.1 technical engine for multi-site infrastructure command. Hardening 200 technical control points across MEP, Safety, Energy, and Contractor Governance.",
    heroHeadline: "Prevent Downtime, Liability, and Infrastructure Failure.",
    heroSubheadline: "Track building uptime, monitor contractor risks, and protect institutional assets—across 20 specialized governance roles.",
    pricingUrgency: "A single major utility failure or one safety breach costs 100x more than this system.",
    consultingAnchor: 10000,
    icon: "building-2",
    badgeText: "V18.1 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Facilities Directors", "Building Managers", "COOs", "Property Management Heads", "Infrastructure Leads"],
    sampleItems: [
        { text: "<strong>Infrastructure Reliability (IIRE)</strong>: Predictive maintenance for HVAC, DG load, and elevator rescue logic.", icon: "zap" },
        { text: "<strong>Workplace Safety (WSEC)</strong>: Fire exit clearance, smoke detector samples, and panic button signal tests.", icon: "shield-alert" },
        { text: "<strong>Energy Optimization Engine</strong>: Daily KWH intensity pulse and water leakage patrols to stop cost blowouts.", icon: "leaf" },
        { text: "<strong>Contractor Control</strong>: Permit-to-Work (PTW) governance and vendor SLA attendance audits.", icon: "file-check" },
        { text: "<strong>MEP Asset Watch</strong>: Critical panel scans, pump room vitals, and UPS health logs.", icon: "wrench" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure the standard stays even when staff resign.", icon: "history" }
    ],
    checklists: [
        {
            title: "Portfolio Infrastructure Command",
            department: "Executive",
            frequency: "Daily",
            role: "Facilities Director / Head of Infrastructure",
            summary: "High-level strategic oversight of portfolio uptime, CAPEX, and statutory liability.",
            icon: "crown",
            tasks: [
                { id: "FM-DIR-01", technicalProtocol: "Portfolio Incident Triage", floorAction: "Review all P1 infrastructure alerts and escalation signatures from the last 24h.", priority: "High", riskLevel: "High", consequence: "Escalated liability and unmonitored asset damage.", proof: "Incident Dashboard", verificationRequired: true, cadence: "daily" },
                { id: "FM-DIR-02", technicalProtocol: "Statutory License Pulse", floorAction: "Verify validity of all Fire NOCs, Lift Licenses, and Building Stability certs.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License File", verificationRequired: true, cadence: "daily" },
                { id: "FM-DIR-03", technicalProtocol: "Public Liability Shield", floorAction: "Confirm valid insurance policies for 100% of managed sites.", priority: "High", riskLevel: "High", consequence: "Financial ruin during a catastrophic event.", proof: "Policy Registry", verificationRequired: true, cadence: "daily" },
                { id: "FM-DIR-04", technicalProtocol: "CAPEX Milestone Review", floorAction: "Review project completion photos for scheduled facility upgrades.", priority: "Medium", riskLevel: "Medium", consequence: "Budget overruns and delayed upgrades.", proof: "Project Log", cadence: "weekly" },
                { id: "FM-DIR-05", technicalProtocol: "Occupant CSAT Sentiment", floorAction: "Analyze trends in high-priority tenant/occupant complaints.", priority: "Medium", riskLevel: "Low", consequence: "Tenant attrition and negative brand reputation.", proof: "CSAT Report", cadence: "weekly" },
                { id: "FM-DIR-06", technicalProtocol: "Operational Budget Variance", floorAction: "Verify utility and repair spend against monthly forecast.", priority: "Medium", riskLevel: "Low", consequence: "Uncontrolled cost overruns.", proof: "P&L Report", cadence: "monthly" },
                { id: "FM-DIR-07", technicalProtocol: "Strategic Asset Life Audit", floorAction: "Review condition reports for HVAC/DG units > 10 years old.", priority: "Medium", riskLevel: "Low", consequence: "Emergency failure of legacy assets.", proof: "Condition Audit", cadence: "monthly" },
                { id: "FM-DIR-08", technicalProtocol: "Vendor SLA Termination", floorAction: "Review poor-performing vendors for contract exit or replacement.", priority: "Low", riskLevel: "Medium", consequence: "Prolonged sub-par facility service.", proof: "SLA Scoring", cadence: "monthly" },
                { id: "FM-DIR-09", technicalProtocol: "Sustainability Benchmark", floorAction: "Review group-level energy reduction vs internal ESG targets.", priority: "Low", riskLevel: "Low", consequence: "Poor ESG transparency.", proof: "ESG Report", cadence: "monthly" },
                { id: "FM-DIR-10", technicalProtocol: "Executive HOD Briefing", floorAction: "Conduct 15-min pulse on upcoming high-load events or audits.", priority: "Medium", riskLevel: "Low", consequence: "Leadership misalignment.", proof: "Meeting Note", cadence: "weekly" }
            ]
        },
        {
            title: "Site Readiness & Operations",
            department: "Operations",
            frequency: "Daily",
            role: "Building Operations Manager",
            summary: "Site-level readiness and operational flow governance.",
            icon: "activity",
            tasks: [
                { id: "FM-BOM-01", technicalProtocol: "Ambiance Sensory Audit", floorAction: "Check Lobby scent, music volume, and temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor visitor first-impression.", proof: "Daily Log", cadence: "daily" },
                { id: "FM-BOM-02", technicalProtocol: "Zero-Gap Handover", floorAction: "Verify digital sign-off between AM/PM facility shift managers.", priority: "High", riskLevel: "Medium", consequence: "Lost instructions / Gridlock.", proof: "Handover Log", verificationRequired: true, cadence: "daily" },
                { id: "FM-BOM-03", technicalProtocol: "Lobby Grooming Standards", floorAction: "Spot check reception staff for uniforms and name-tags.", priority: "Low", riskLevel: "Low", consequence: "Professional brand dilution.", proof: "Briefing Log", cadence: "daily" },
                { id: "FM-BOM-04", technicalProtocol: "VIP Visit Readiness", floorAction: "Audit porch and meeting room setup for scheduled visitors.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-value stakeholder trust.", proof: "Photo", cadence: "daily" },
                { id: "FM-BOM-05", technicalProtocol: "Emergency Comms Test", floorAction: "Test dial-tone between Lobby and Security Booth.", priority: "High", riskLevel: "Medium", consequence: "Communication fail during crisis.", proof: "Dial Test", verificationRequired: true, cadence: "daily" },
                { id: "FM-BOM-06", technicalProtocol: "Lobby Floor Safety", floorAction: "Verify zero trip hazards at mat transitions or cable runs.", priority: "High", riskLevel: "High", consequence: "Visitor slip/fall litigation.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "FM-BOM-07", technicalProtocol: "Parking Density Pulse", floorAction: "Identify and clear 100% of vehicles in fire-engine lanes.", priority: "High", riskLevel: "High", consequence: "Blocked emergency access.", proof: "Patrol Log", verificationRequired: true, cadence: "daily" },
                { id: "FM-BOM-08", technicalProtocol: "Visitor ID Integrity", floorAction: "Audit register for 100% ID verification at the main gate.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "FM-BOM-09", technicalProtocol: "Signage Clarity Audit", floorAction: "Ensure all directional signs are clean and correctly aimed.", priority: "Low", riskLevel: "Low", consequence: "Visitor confusion.", proof: "Walkthrough", cadence: "weekly" },
                { id: "FM-BOM-10", technicalProtocol: "Daily MOD Summary", floorAction: "Final sign-off on site-level status and incidents.", priority: "High", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Summary", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Preventive Maintenance Management",
            department: "Engineering",
            frequency: "Daily",
            role: "Maintenance Supervisor",
            summary: "Asset health, breakdown prevention, and work-order command.",
            icon: "wrench",
            tasks: [
                { id: "FM-MNT-01", technicalProtocol: "PPM Compliance Audit", floorAction: "Verify completion of today's preventive maintenance tickets.", priority: "High", riskLevel: "Medium", consequence: "Sudden asset failure and downtime.", proof: "PPM Registry", verificationRequired: true, cadence: "daily" },
                { id: "FM-MNT-02", technicalProtocol: "Critical Spare Par-Levels", floorAction: "Physically count spare bearings, belts, and MCBs.", priority: "High", riskLevel: "Medium", consequence: "Extended downtime waiting for parts.", proof: "Stock Sheet", verificationRequired: true, cadence: "weekly" },
                { id: "FM-MNT-03", technicalProtocol: "Pump Vibration Anomaly", floorAction: "Check main water pumps for bearing noise or heat.", priority: "Medium", riskLevel: "High", consequence: "Sudden motor seizure.", proof: "Observation Log", cadence: "daily" },
                { id: "FM-MNT-04", technicalProtocol: "Work-Order Backlog", floorAction: "Close 100% of P1 maintenance tickets < 4h.", priority: "High", riskLevel: "Low", consequence: "Occupant complaints and asset decay.", proof: "System Sync", verificationRequired: true, cadence: "daily" },
                { id: "FM-MNT-05", technicalProtocol: "Tool Calibration Check", floorAction: "Verify accuracy of digital multimeters and temp-probes.", priority: "Medium", riskLevel: "Low", consequence: "Inaccurate technical diagnostics.", proof: "Calibration Log", cadence: "monthly" },
                { id: "FM-MNT-06", technicalProtocol: "Grease Trap Flush", floorAction: "Verify weekly chemical flush of cafeteria drains.", priority: "Medium", riskLevel: "Medium", consequence: "Flooding and foul odors.", proof: "Work Order", cadence: "weekly" },
                { id: "FM-MNT-07", technicalProtocol: "Maintenance Team Brief", floorAction: "Brief on high-load events and LOTO safety requirements.", priority: "Low", riskLevel: "Medium", consequence: "Safety breach during service.", proof: "Briefing Log", cadence: "daily" },
                { id: "FM-MNT-08", technicalProtocol: "Asset Tagging Audit", floorAction: "Confirm 100% of new equipment has an ID barcode.", priority: "Low", riskLevel: "Low", consequence: "Loss of asset tracking.", proof: "Inventory Update", cadence: "weekly" },
                { id: "FM-MNT-09", technicalProtocol: "Vendor Tool Access", floorAction: "Audit after-hours workshop key access register.", priority: "High", riskLevel: "High", consequence: "Unauthorized overnight theft.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "FM-MNT-10", technicalProtocol: "EOD Workshop Reset", floorAction: "Verify storage of gas cylinders and sharp tools.", priority: "High", riskLevel: "High", consequence: "Fire / Accident risk.", proof: "Visual Check", cadence: "daily" }
            ]
        },
        {
            title: "Electrical Infrastructure Control",
            department: "Engineering",
            frequency: "Daily",
            role: "Electrical Systems Engineer",
            summary: "Power distribution, backup readiness, and panel thermography.",
            icon: "zap",
            tasks: [
                { id: "FM-ELE-01", technicalProtocol: "Emergency Power Readiness", floorAction: "Inspect DG fuel levels and test ARD battery charge.", priority: "High", riskLevel: "High", consequence: "Total facility blackout.", proof: "Start-test Log", verificationRequired: true, cadence: "daily" },
                { id: "FM-ELE-02", technicalProtocol: "Electrical Panel Heat Scan", floorAction: "Perform infrared scan of high-load server room panels.", priority: "High", riskLevel: "High", consequence: "Electrical fire and system crash.", proof: "Panel Log", verificationRequired: true, cadence: "weekly" },
                { id: "FM-ELE-03", technicalProtocol: "UPS Load Testing", floorAction: "Verify server-room UPS battery run-time and health.", priority: "High", riskLevel: "High", consequence: "Data loss during power flip.", proof: "Voltage Log", verificationRequired: true, cadence: "daily" },
                { id: "FM-ELE-04", technicalProtocol: "APFC Bank Status", floorAction: "Verify power factor is maintained > 0.98.", priority: "High", riskLevel: "Medium", consequence: "Surcharge penalties from grid.", proof: "Capacitor Log", cadence: "daily" },
                { id: "FM-ELE-05", technicalProtocol: "Transformer Oil Check", floorAction: "Verify oil level and temperature in main yard unit.", priority: "High", riskLevel: "High", consequence: "Transformer explosion (Fatal).", proof: "Gauge Log", verificationRequired: true, cadence: "weekly" },
                { id: "FM-ELE-06", technicalProtocol: "ELCB/RCCB Trip Test", floorAction: "Test trip logic for 5 random circuit breakers.", priority: "High", riskLevel: "High", consequence: "Electrocution liability.", proof: "Test Report", verificationRequired: true, cadence: "monthly" },
                { id: "FM-ELE-07", technicalProtocol: "Cable Tray Inspection", floorAction: "Walk service shafts for loose cabling or nesting pests.", priority: "Low", riskLevel: "Medium", consequence: "Internal short-circuits.", proof: "Walkthrough", cadence: "weekly" },
                { id: "FM-ELE-08", technicalProtocol: "Emergency Light Backup", floorAction: "Test 10 random lights for 90-min battery life.", priority: "Medium", riskLevel: "High", consequence: "Panic during blackout.", proof: "Test Note", verificationRequired: true, cadence: "monthly" },
                { id: "FM-ELE-09", technicalProtocol: "Earthing Pit Resistivity", floorAction: "Verify resistance values at main campus pits.", priority: "High", riskLevel: "High", consequence: "Grounding failure liability.", proof: "Meter Reading", verificationRequired: true, cadence: "quarterly" },
                { id: "FM-ELE-10", technicalProtocol: "Power Consumption Log", floorAction: "Record daily KWH reading for energy benchmarking.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored energy drift.", proof: "Meter Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Plumbing & Hydraulic Vitals",
            department: "Engineering",
            frequency: "Daily",
            role: "Plumbing & Water Systems Technician",
            summary: "Water purity, pressure regulation, and leak detection.",
            icon: "droplet",
            tasks: [
                { id: "FM-PLU-01", technicalProtocol: "Water Purity (TDS) Pulse", floorAction: "Verify output TDS from RO/STP (Target < 150).", priority: "High", riskLevel: "High", consequence: "Health risk and plumbing damage.", proof: "TDS Reading", verificationRequired: true, cadence: "daily" },
                { id: "FM-PLU-02", technicalProtocol: "Water Tank Level Sync", floorAction: "Match BMS reading vs physical float check.", priority: "Medium", riskLevel: "Medium", consequence: "Facility dry-out.", proof: "Level Log", cadence: "daily" },
                { id: "FM-PLU-03", technicalProtocol: "Plumbing Leak Patrol", floorAction: "Walk service shafts for signs of moisture or drips.", priority: "Medium", riskLevel: "Medium", consequence: "Structural damage.", proof: "Patrol Log", cadence: "daily" },
                { id: "FM-PLU-04", technicalProtocol: "Pump Seal Integrity", floorAction: "Check for mechanical seal drips in the pump room.", priority: "Medium", riskLevel: "Medium", consequence: "Pump motor seizure.", proof: "Visual Check", cadence: "daily" },
                { id: "FM-PLU-05", technicalProtocol: "Drainage Silt Trap", floorAction: "Clear basement storm-water traps pre-sunset.", priority: "Medium", riskLevel: "High", consequence: "Basement flooding.", proof: "Walkthrough", cadence: "weekly" },
                { id: "FM-PLU-06", technicalProtocol: "Chlorine Level Test", floorAction: "Log free chlorine at drinking water points (0.5-2ppm).", priority: "High", riskLevel: "High", consequence: "Waterborne disease risk.", proof: "Test Kit Result", verificationRequired: true, cadence: "daily" },
                { id: "FM-PLU-07", technicalProtocol: "Flushing Valve Flow", floorAction: "Verify instant shut-off of sensors in public washrooms.", priority: "Low", riskLevel: "Medium", consequence: "Massive water wastage.", proof: "Visual Audit", cadence: "daily" },
                { id: "FM-PLU-08", technicalProtocol: "STP Effluent Quality", floorAction: "Log BOD/COD/pH of treated discharge water.", priority: "High", riskLevel: "High", consequence: "Environmental fines and shutdown.", proof: "Lab Report", verificationRequired: true, cadence: "weekly" },
                { id: "FM-PLU-09", technicalProtocol: "Fire-Tank Reserve", floorAction: "Confirm dedicated fire-water tank is 100% full.", priority: "High", riskLevel: "High", consequence: "No water for firefighting.", proof: "BMS Screen", verificationRequired: true, cadence: "daily" },
                { id: "FM-PLU-10", technicalProtocol: "Grease Trap Flush", floorAction: "Verify weekly chemical flush of cafeteria drains.", priority: "Medium", riskLevel: "Medium", consequence: "Foul odors and blockage.", proof: "Work Log", cadence: "weekly" }
            ]
        },
        {
            title: "HVAC Climate Command",
            department: "Engineering",
            frequency: "Daily",
            role: "HVAC Systems Engineer",
            summary: "Thermal comfort, chiller efficiency, and air quality control.",
            icon: "wind",
            tasks: [
                { id: "FM-HVC-01", technicalProtocol: "Thermal Integrity Pulse", floorAction: "Log chiller discharge temp and monitor BMS set-points.", priority: "High", riskLevel: "Medium", consequence: "Occupant heat discomfort.", proof: "BMS Reading", verificationRequired: true, cadence: "daily" },
                { id: "FM-HVC-02", technicalProtocol: "Filter Pressure Watch", floorAction: "Log differential pressure across main AHU filters.", priority: "Medium", riskLevel: "Low", consequence: "Reduced airflow and motor strain.", proof: "BMS Reading", cadence: "weekly" },
                { id: "FM-HVC-03", technicalProtocol: "HVAC Optimization", floorAction: "Confirm night setback set-points for unoccupied zones.", priority: "High", riskLevel: "Low", consequence: "Massive energy overhead.", proof: "BMS Screenshot", verificationRequired: true, cadence: "daily" },
                { id: "FM-HVC-04", technicalProtocol: "Condensate Drain Clear", floorAction: "Flush AHU drain lines to prevent ceiling leaks.", priority: "Medium", riskLevel: "Medium", consequence: "Water damage to ceiling tiles.", proof: "Visual Check", cadence: "weekly" },
                { id: "FM-HVC-05", technicalProtocol: "Cooling Tower Vitals", floorAction: "Log pH and scaling levels in condenser water.", priority: "Medium", riskLevel: "Medium", consequence: "Chiller tube fouling.", proof: "Test Log", cadence: "daily" },
                { id: "FM-HVC-06", technicalProtocol: "Indoor Air Quality (IAQ)", floorAction: "Sample CO2 levels in the main boardroom.", priority: "Low", riskLevel: "Low", consequence: "Occupant fatigue/drowsiness.", proof: "Meter Reading", cadence: "weekly" },
                { id: "FM-HVC-07", technicalProtocol: "VFD Frequency Check", floorAction: "Verify AHU fans are not running at 100% if load is low.", priority: "Medium", riskLevel: "Low", consequence: "Unnecessary energy spend.", proof: "BMS Check", cadence: "daily" },
                { id: "FM-HVC-08", technicalProtocol: "Exhaust Fan Pulse", floorAction: "Verify 100% operation of basement CO2 sensors.", priority: "High", riskLevel: "High", consequence: "Toxic gas buildup in parking.", proof: "Sensor Test", verificationRequired: true, cadence: "weekly" },
                { id: "FM-HVC-09", technicalProtocol: "Chiller Oil Temp", floorAction: "Audit compressor oil vitals to prevent seizure.", priority: "High", riskLevel: "High", consequence: "Total infrastructure halt.", proof: "Gauge Log", verificationRequired: true, cadence: "daily" },
                { id: "FM-HVC-10", technicalProtocol: "HVAC Power Log", floorAction: "Record daily KWH specifically for the chiller plant.", priority: "Medium", riskLevel: "Low", consequence: "Zero efficiency visibility.", proof: "Sub-meter Reading", cadence: "daily" }
            ]
        },
        {
            title: "Fire & Life Safety Command",
            department: "Safety",
            frequency: "Daily",
            role: "Fire & Life Safety Officer",
            summary: "Infrastructure hardening and evacuation readiness.",
            icon: "shield-alert",
            tasks: [
                { id: "FM-FSO-01", technicalProtocol: "Fire Exit Clearance", floorAction: "Verify 100% fire escapes are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment during crisis.", proof: "Patrol Log", verificationRequired: true, cadence: "daily" },
                { id: "FM-FSO-02", technicalProtocol: "Fire Gauge Validation", floorAction: "Confirm needle in GREEN zone for all extinguishers.", priority: "High", riskLevel: "High", consequence: "Zero firefighting capability.", proof: "Gauge Log", verificationRequired: true, cadence: "weekly" },
                { id: "FM-FSO-03", technicalProtocol: "Fire Pump Auto-Logic", floorAction: "Confirm main fire pumps are in 'AUTO' mode.", priority: "High", riskLevel: "High", consequence: "Zero firefighting pressure.", proof: "Gauge Log", verificationRequired: true, cadence: "daily" },
                { id: "FM-FSO-04", technicalProtocol: "PA Emergency Override", floorAction: "Test announcement clarity in a random zone.", priority: "High", riskLevel: "Medium", consequence: "Evacuation chaos.", proof: "Sound Test", verificationRequired: true, cadence: "daily" },
                { id: "FM-FSO-05", technicalProtocol: "Smoke Detector Sample", floorAction: "Test 5 random heads in back-corridors using spray.", priority: "High", riskLevel: "High", consequence: "Undetected fire.", proof: "Test Note", verificationRequired: true, cadence: "weekly" },
                { id: "FM-FSO-06", technicalProtocol: "Fire Door Tension", floorAction: "Verify 100% closure of stairwell doors.", priority: "High", riskLevel: "High", consequence: "Rapid smoke spread between floors.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "FM-FSO-07", technicalProtocol: "Emergency Signage Lux", floorAction: "Check night visibility of exit signs.", priority: "Medium", riskLevel: "High", consequence: "Disorientation during smoke.", proof: "Visual Audit", cadence: "weekly" },
                { id: "FM-FSO-08", technicalProtocol: "Fire Extinguisher Seal", floorAction: "Check 10 units for intact safety pins and tags.", priority: "Low", riskLevel: "Low", consequence: "Tampered equipment.", proof: "Visual Check", cadence: "daily" },
                { id: "FM-FSO-09", technicalProtocol: "Sprinkler Chain-Lock", floorAction: "Verify main OS&Y valve is locked in OPEN state.", priority: "High", riskLevel: "High", consequence: "No water for sprinklers.", proof: "Visual Confirm", verificationRequired: true, cadence: "daily" },
                { id: "FM-FSO-10", technicalProtocol: "Fire Drills Scheduled", floorAction: "Verify timeline for next campus-wide evacuation simulation.", priority: "Medium", riskLevel: "Low", consequence: "Lack of muscle memory.", proof: "Training Log", cadence: "monthly" }
            ]
        },
        {
            title: "Security & Digital Perimeter",
            department: "Security",
            frequency: "Daily",
            role: "Security Systems Administrator (CCTV/Access Control)",
            summary: "Digital perimeter hardening and asset protection governance.",
            icon: "lock",
            tasks: [
                { id: "FM-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or suits.", proof: "System Screen", verificationRequired: true, cadence: "daily" },
                { id: "FM-SEC-02", technicalProtocol: "Visitor ID Capture", floorAction: "Audit register for 100% ID verification at gate.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "FM-SEC-03", technicalProtocol: "Panic Button Pulse", floorAction: "Test silent alarm to control booth/police.", priority: "High", riskLevel: "High", consequence: "Zero response during robbery.", proof: "Signal Test", verificationRequired: true, cadence: "daily" },
                { id: "FM-SEC-04", technicalProtocol: "Access Control Expiry", floorAction: "Deactivate 100% of badges for resigned staff < 24h.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry by former staff.", proof: "System Log", verificationRequired: true, cadence: "daily" },
                { id: "FM-SEC-05", technicalProtocol: "Security Server Health", floorAction: "Check CPU temp and disk health on DVR/NVR racks.", priority: "Medium", riskLevel: "Low", consequence: "Video loss during server crash.", proof: "Monitor Reading", cadence: "daily" },
                { id: "FM-SEC-06", technicalProtocol: "Guard Sobriety Pulse", floorAction: "Random breathalyzer for 2 AM guard rotation.", priority: "High", riskLevel: "High", consequence: "Vulnerable night perimeter.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "FM-SEC-07", technicalProtocol: "Exterior Motion Alert", floorAction: "Test 3 trip-line triggers on boundary walls.", priority: "Medium", riskLevel: "Medium", consequence: "Undetected perimeter breach.", proof: "Alarm Log", cadence: "weekly" },
                { id: "FM-SEC-08", technicalProtocol: "Master-Key Vault Audit", floorAction: "Physically witness count of high-security keys.", priority: "High", riskLevel: "High", consequence: "Unauthorized vault entry.", proof: "Dual-Sign Sheet", verificationRequired: true, cadence: "daily" },
                { id: "FM-SEC-09", technicalProtocol: "Patrol Frequency Scan", floorAction: "Verify guard tour tags match scheduled rounds.", priority: "Medium", riskLevel: "Low", consequence: "Lapses in physical security.", proof: "NFC Log", cadence: "daily" },
                { id: "FM-SEC-10", technicalProtocol: "EOD Facility Lockdown", floorAction: "Witness lock of service gates and loading bays.", priority: "High", riskLevel: "High", consequence: "Overnight theft window.", proof: "Closure Log", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Housekeeping & Soft FM",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Housekeeping Operations Supervisor",
            summary: "Hygiene command, aesthetic parity, and consumable governance.",
            icon: "sparkles",
            tasks: [
                { id: "FM-SFM-01", technicalProtocol: "Washroom Hygiene Pulse", floorAction: "Audit logs for 60-minute cleaning frequency.", priority: "High", riskLevel: "Low", consequence: "Primary driver of occupant rage.", proof: "Hourly Sheet", cadence: "hourly" },
                { id: "FM-SFM-02", technicalProtocol: "Consumable Stock Audit", floorAction: "Check par levels of soap, tissue, and sanitizers.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene breakdown.", proof: "Stock Check", cadence: "daily" },
                { id: "FM-SFM-03", technicalProtocol: "Deep Clean Milestone", floorAction: "Verify completion of today's deep-cleaning schedule.", priority: "Medium", riskLevel: "Low", consequence: "Long-term asset decay.", proof: "Photo", verificationRequired: true, cadence: "daily" },
                { id: "FM-SFM-04", technicalProtocol: "Chemical Dilution Ratio", floorAction: "Audit dispenser flow-rates for cleaning concentrates.", priority: "High", riskLevel: "Medium", consequence: "Surface damage / Staff health risk.", proof: "Titration Check", verificationRequired: true, cadence: "weekly" },
                { id: "FM-SFM-05", technicalProtocol: "Janitor Closet Safety", floorAction: "Confirm 100% of hazard chemicals are in locked cabinets.", priority: "High", riskLevel: "High", consequence: "Accidental poisoning/theft.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "FM-SFM-06", technicalProtocol: "Linen Par-Level Reconcile", floorAction: "Match clean supply vs laundry vendor dispatch notes.", priority: "Low", riskLevel: "Low", consequence: "Supply chain gaps.", proof: "Registry Note", cadence: "daily" },
                { id: "FM-SFM-07", technicalProtocol: "Staff Uniform Audit", floorAction: "Check 100% of staff for name-tags and clean attire.", priority: "Low", riskLevel: "Low", consequence: "Professional image drop.", proof: "Briefing Log", cadence: "daily" },
                { id: "FM-SFM-08", technicalProtocol: "Microfiber Separation", floorAction: "Verify color-coding for restroom vs desk cloths.", priority: "High", riskLevel: "High", consequence: "Cross-contamination outbreak.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "FM-SFM-09", technicalProtocol: "Floor Shine/Safety Scan", floorAction: "Inspect for slick zones without 'Wet Floor' signs.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "FM-SFM-10", technicalProtocol: "EOD Cleaning Summary", floorAction: "Final sign-off on total zone resets.", priority: "Low", riskLevel: "Low", consequence: "Gaps in next-day readiness.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Cleaning Execution (Field)",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Cleaning Staff Lead",
            summary: "Atomic zone-level execution and spill response.",
            icon: "spray-can",
            tasks: [
                { id: "FM-CLN-01", technicalProtocol: "High-Touch Sanitization", floorAction: "Wipe elevator buttons and door handles with 70% IPA.", priority: "Medium", riskLevel: "Medium", consequence: "Viral transmission risk.", proof: "Checklist Initial", cadence: "hourly" },
                { id: "FM-CLN-02", technicalProtocol: "Spill Response TAT", floorAction: "Execute 2-min cleanup for all detected FOH spills.", priority: "High", riskLevel: "High", consequence: "Injury and lawsuit.", proof: "Incident Log", verificationRequired: true, cadence: "incident-based" },
                { id: "FM-CLN-03", technicalProtocol: "Trash Compaction Wave", floorAction: "Execute 2-hourly removal of lobby and cafe bins.", priority: "Low", riskLevel: "Low", consequence: "Odor and overflowing bins.", proof: "Log Entry", cadence: "hourly" },
                { id: "FM-CLN-04", technicalProtocol: "Dust Clearance Scan", floorAction: "Wipe horizontal surfaces in IT rack room.", priority: "Medium", riskLevel: "Low", consequence: "Hardware overheating.", proof: "Visual Check", cadence: "weekly" },
                { id: "FM-CLN-05", technicalProtocol: "Window-Sill Wipe", floorAction: "Clear dust from external glass frames.", priority: "Low", riskLevel: "Low", consequence: "Grimy facade perception.", proof: "Visual Check", cadence: "daily" },
                { id: "FM-CLN-06", technicalProtocol: "Microfiber Color-Code", floorAction: "Verify red cloths for toilets and blue for surfaces.", priority: "High", riskLevel: "High", consequence: "Gross cross-contamination.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "FM-CLN-07", technicalProtocol: "Hand-Dryer Functionality", floorAction: "Test 100% of air dryers in public washrooms.", priority: "Low", riskLevel: "Low", consequence: "Wasted paper and guest friction.", proof: "Walkthrough", cadence: "daily" },
                { id: "FM-CLN-08", technicalProtocol: "Cleaning Chemical Stock", floorAction: "Count 5L containers of Multi-purpose cleaner.", priority: "Medium", riskLevel: "Low", consequence: "Cleaning halt due to stock-out.", proof: "Stock Sheet", cadence: "weekly" },
                { id: "FM-CLN-09", technicalProtocol: "Odor Control Pulse", floorAction: "Verify fragrance levels and battery in dispensers.", priority: "Low", riskLevel: "Low", consequence: "Persistent restroom odors.", proof: "Visual Check", cadence: "daily" },
                { id: "FM-CLN-10", technicalProtocol: "Mop-Head Sanitization", floorAction: "Confirm 100% of mops were bleached and air-dried.", priority: "Medium", riskLevel: "Medium", consequence: "Spreading bacteria across floors.", proof: "Visual Audit", cadence: "daily" }
            ]
        },
        {
            title: "Waste & Refuse Command",
            department: "Sustainability",
            frequency: "Daily",
            role: "Waste Management Coordinator",
            summary: "Waste segregation, bio-hazard control, and disposal manifests.",
            icon: "recycle",
            tasks: [
                { id: "FM-WST-01", technicalProtocol: "Segregation at Source", floorAction: "Audit 10 random bins for paper/plastic/wet accuracy.", priority: "Medium", riskLevel: "Low", consequence: "Recycling rejection and ESG penalty.", proof: "Visual Check", cadence: "daily" },
                { id: "FM-WST-02", technicalProtocol: "Haz-Waste Manifest Seal", floorAction: "Verify used oil/batteries are in sealed haz-drums.", priority: "High", riskLevel: "High", consequence: "Illegal resale and contamination.", proof: "Manifest Registry", verificationRequired: true, cadence: "weekly" },
                { id: "FM-WST-03", technicalProtocol: "Bio-Waste Removal TAT", floorAction: "Ensure pickup of infectious waste in < 48 hours.", priority: "High", riskLevel: "High", consequence: "Legal violation and pathogen risk.", proof: "Vendor Slip", verificationRequired: true, cadence: "daily" },
                { id: "FM-WST-04", technicalProtocol: "Garbage Room Hygiene", floorAction: "Verify daily wash and 2% Lysol spray of the waste bay.", priority: "Medium", riskLevel: "Medium", consequence: "Foul odor complaints.", proof: "Cleaning Log", cadence: "daily" },
                { id: "FM-WST-05", technicalProtocol: "Composter Vitals", floorAction: "Log temperature of organic waste digester (Target 55°C).", priority: "Low", riskLevel: "Low", consequence: "Inactive composting process.", proof: "Gauge Reading", cadence: "daily" },
                { id: "FM-WST-06", technicalProtocol: "Waste Weight Logging", floorAction: "Record total KG of plastic vs paper discarded.", priority: "Low", riskLevel: "Low", consequence: "Zero ESG reporting visibility.", proof: "Scale Sheet", cadence: "daily" },
                { id: "FM-WST-07", technicalProtocol: "Contractor Waste Audit", floorAction: "Verify removal of debris from project zones.", priority: "Medium", riskLevel: "Medium", consequence: "Accumulated fire hazard.", proof: "Visual Check", cadence: "weekly" },
                { id: "FM-WST-08", technicalProtocol: "Bin-Liner Inventory", floorAction: "Verify 100+ spare biodegradable liners in stock.", priority: "Low", riskLevel: "Low", consequence: "Unsanitary bin use.", proof: "Stock Count", cadence: "weekly" },
                { id: "FM-WST-09", technicalProtocol: "Waste Zone Pest Check", floorAction: "Inspect traps in the garbage holding area.", priority: "High", riskLevel: "High", consequence: "Rodent infestation.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "FM-WST-10", technicalProtocol: "Recycling Compliance", floorAction: "Confirm 100% of vendor pickups were documented.", priority: "Low", riskLevel: "Low", consequence: "Audit trail failure.", proof: "Registry Note", cadence: "monthly" }
            ]
        },
        {
            title: "Energy & Resource Analytics",
            department: "Sustainability",
            frequency: "Daily",
            role: "Energy Management Analyst",
            summary: "Energy intensity, KWH benchmarking, and resource leakage monitoring.",
            icon: "leaf",
            tasks: [
                { id: "FM-NRG-01", technicalProtocol: "KWH Anomaly Review", floorAction: "Compare daily meter vs occupancy baseline; flag variance.", priority: "High", riskLevel: "Medium", consequence: "Unmonitored energy wastage.", proof: "Meter Match", verificationRequired: true, cadence: "daily" },
                { id: "FM-NRG-02", technicalProtocol: "Power Factor Correction", floorAction: "Confirm PF is maintained > 0.99 at the APFC panel.", priority: "High", riskLevel: "Medium", consequence: "Reactive power penalty on bills.", proof: "BMS Screen", verificationRequired: true, cadence: "daily" },
                { id: "FM-NRG-03", technicalProtocol: "Water Leakage Patrol", floorAction: "Check all 4 sub-meters at 3 AM (Target: Zero usage).", priority: "High", riskLevel: "Medium", consequence: "Resource waste and structural damage.", proof: "Leak Log", verificationRequired: true, cadence: "daily" },
                { id: "FM-NRG-04", technicalProtocol: "Solar Yield Monitor", floorAction: "Log daily KWH yield from roof arrays; check inverter health.", priority: "Medium", riskLevel: "Low", consequence: "Lost renewable savings ROI.", proof: "Dashboard", cadence: "daily" },
                { id: "FM-NRG-05", technicalProtocol: "Peak Load Shifting", floorAction: "Coordinate chiller pre-cool before grid peak pricing window.", priority: "Medium", riskLevel: "Low", consequence: "Increased operational utility cost.", proof: "BMS Schedule", cadence: "daily" },
                { id: "FM-NRG-06", technicalProtocol: "Night Energy Setback", floorAction: "Verify lighting/AC shutdown in unoccupied wings.", priority: "High", riskLevel: "Low", consequence: "Massive energy overhead.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "FM-NRG-07", technicalProtocol: "HVAC Efficiency Track", floorAction: "Monitor approach temps to detect chiller scaling.", priority: "Medium", riskLevel: "Medium", consequence: "Undetected efficiency loss.", proof: "Trend Report", cadence: "weekly" },
                { id: "FM-NRG-08", technicalProtocol: "Tenant Sub-Meter Audit", floorAction: "Calibrate 5 random sub-meters for billing accuracy.", priority: "Medium", riskLevel: "Low", consequence: "Tenant billing disputes.", proof: "Test Note", cadence: "monthly" },
                { id: "FM-NRG-09", technicalProtocol: "Lighting Schedule Check", floorAction: "Sync timer clocks with current sunset times.", priority: "Low", riskLevel: "Low", consequence: "Lights on during daylight.", proof: "Visual Check", cadence: "weekly" },
                { id: "FM-NRG-10", technicalProtocol: "Air Leak Detection", floorAction: "Ultrasound scan of plant-room compressed air lines.", priority: "Medium", riskLevel: "Low", consequence: "Hidden energy spend.", proof: "Scan Log", cadence: "monthly" }
            ]
        },
        {
            title: "Asset & Tool Inventory",
            department: "Finance",
            frequency: "Weekly",
            role: "Asset & Equipment Inventory Controller",
            summary: "Inventory command for critical spares, tools, and technical assets.",
            icon: "package-2",
            tasks: [
                { id: "FM-INV-01", technicalProtocol: "Critical Spare Pulse", floorAction: "Count stock of AC motors, MCBs, and lighting ballast.", priority: "High", riskLevel: "Medium", consequence: "Extended facility downtime.", proof: "Stock Sheet", verificationRequired: true, cadence: "weekly" },
                { id: "FM-INV-02", technicalProtocol: "GRN Weight Matching", floorAction: "Test 1 random diesel delivery for volume accuracy.", priority: "High", riskLevel: "High", consequence: "Fuel theft and overpayment.", proof: "Scale Log", verificationRequired: true, cadence: "weekly" },
                { id: "FM-INV-03", technicalProtocol: "Tool Calibration Pulse", floorAction: "Identify tools requiring annual safety certification.", priority: "Low", riskLevel: "Low", consequence: "Using unsafe/inaccurate tech.", proof: "Registry Note", cadence: "monthly" },
                { id: "FM-INV-04", technicalProtocol: "PPE Par-Level Check", floorAction: "Verify availability of 50 spare safety shoes and vests.", priority: "Medium", riskLevel: "Low", consequence: "Unprotected workers on-site.", proof: "Visual Count", cadence: "weekly" },
                { id: "FM-INV-05", technicalProtocol: "IT Hardware Audit", floorAction: "Count total active laptops and monitors in the campus.", priority: "Low", riskLevel: "Low", consequence: "Internal asset shrinkage.", proof: "Registry Match", cadence: "monthly" },
                { id: "FM-INV-06", technicalProtocol: "Scrap Disposal Inventory", floorAction: "Verify removal of decommissioned asset waste.", priority: "Low", riskLevel: "Low", consequence: "Cluttered service areas.", proof: "Removal Note", cadence: "monthly" },
                { id: "FM-INV-07", technicalProtocol: "Filter Stock Check", floorAction: "Confirm par levels for V-bank and Pre-filters.", priority: "Medium", riskLevel: "Low", consequence: "Delayed HVAC maintenance.", proof: "Stock Sheet", cadence: "weekly" },
                { id: "FM-INV-08", technicalProtocol: "Asset Tag Integrity", floorAction: "Scan 10 random assets to verify QR link to EAM.", priority: "Low", riskLevel: "Low", consequence: "Loss of digital traceability.", proof: "Scan Log", cadence: "weekly" },
                { id: "FM-INV-09", technicalProtocol: "Emergency Lube Stock", floorAction: "Check levels of hydraulic and gear oil in stores.", priority: "Medium", riskLevel: "Medium", consequence: "Delayed motor repair.", proof: "Visual Count", cadence: "weekly" },
                { id: "FM-INV-10", technicalProtocol: "Tool Condition Survey", floorAction: "Identify damaged power tools for decommissioning.", priority: "High", riskLevel: "High", consequence: "Fatal electrical accident.", proof: "Visual Audit", verificationRequired: true, cadence: "weekly" }
            ]
        },
        {
            title: "Vendor & Contractor Command",
            department: "Admin",
            frequency: "Daily",
            role: "Vendor & Contractor Manager",
            summary: "Monitors third-party service performance parity and safety adherence.",
            icon: "file-check",
            tasks: [
                { id: "FM-VEN-01", technicalProtocol: "Attendance Parity Audit", floorAction: "Verify outsourced staff count matches contract SLA.", priority: "High", riskLevel: "Low", consequence: "Paying for unrendered work.", proof: "Biometric Report", verificationRequired: true, cadence: "daily" },
                { id: "FM-VEN-02", technicalProtocol: "Contractor PTW Audit", floorAction: "Verify permits for all active hot-work/height jobs.", priority: "High", riskLevel: "High", consequence: "Fire liability exposure.", proof: "Permit Registry", verificationRequired: true, cadence: "daily" },
                { id: "FM-VEN-03", technicalProtocol: "LOTO Enforcement", floorAction: "Verify 100% of vendor repairs possess lock-out tags.", priority: "High", riskLevel: "High", consequence: "Fatal accidental energization.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "FM-VEN-04", technicalProtocol: "Vendor License Sync", floorAction: "Verify GST/Insurance validity for active service partners.", priority: "Medium", riskLevel: "High", consequence: "Legal liability for the group.", proof: "License File", cadence: "monthly" },
                { id: "FM-VEN-05", technicalProtocol: "AMC Renewal Watch", floorAction: "Identify all contracts expiring in < 30 days.", priority: "Medium", riskLevel: "Low", consequence: "Service lapse leading to repair delay.", proof: "AMC Calendar", cadence: "weekly" },
                { id: "FM-VEN-06", technicalProtocol: "Vendor Performance Score", floorAction: "Rate service delivery for HVAC and Lift partners.", priority: "Low", riskLevel: "Low", consequence: "Persistent sub-par facility quality.", proof: "Scorecard", cadence: "monthly" },
                { id: "FM-VEN-07", technicalProtocol: "Site Induction Audit", floorAction: "Verify safety training for 100% of new contractors.", priority: "High", riskLevel: "High", consequence: "Accidents by untrained outsiders.", proof: "Training Log", verificationRequired: true, cadence: "daily" },
                { id: "FM-VEN-08", technicalProtocol: "Emergency Service TAT", floorAction: "Analyze time from breakdown call to vendor arrival.", priority: "Medium", riskLevel: "Low", consequence: "Extended infrastructure downtime.", proof: "TAT Dashboard", cadence: "weekly" },
                { id: "FM-VEN-09", technicalProtocol: "Insurance Validity Check", floorAction: "Confirm 100% of on-site vendor policies are active.", priority: "High", riskLevel: "High", consequence: "Unrecoverable accident cost.", proof: "Policy Registry", verificationRequired: true, cadence: "monthly" },
                { id: "FM-VEN-10", technicalProtocol: "Contractor PPE Audit", floorAction: "Spot check 5 vendor staff for safety gear use.", priority: "Medium", riskLevel: "Medium", consequence: "OSHA non-compliance.", proof: "Patrol Note", cadence: "daily" }
            ]
        },
        {
            title: "Workplace Safety (WSEC)",
            department: "Safety",
            frequency: "Daily",
            role: "Workplace Safety Officer",
            summary: "Occupational safety, ergonomic audits, and hazard mitigation.",
            icon: "hard-hat",
            tasks: [
                { id: "FM-WHS-01", technicalProtocol: "Hazard Spot-check", floorAction: "Walk the floor to identify loose carpet edges or sharp corners.", priority: "Medium", riskLevel: "Medium", consequence: "Staff injury claims.", proof: "Walk Log", cadence: "daily" },
                { id: "FM-WHS-02", technicalProtocol: "Ergonomic Audit", floorAction: "Check 10 workstations for chair/monitor height compliance.", priority: "Low", riskLevel: "Low", consequence: "Chronic musculoskeletal issues.", proof: "Survey Note", cadence: "weekly" },
                { id: "FM-WHS-03", technicalProtocol: "AED Battery Pulse", floorAction: "Check GREEN/ACTIVE status on 100% of lobby units.", priority: "High", riskLevel: "High", consequence: "Failed resuscitation.", proof: "Status Log", verificationRequired: true, cadence: "daily" },
                { id: "FM-WHS-04", technicalProtocol: "First-Aid Stock", floorAction: "Confirm 100% presence of burn-gels and bandages.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat minor trauma.", proof: "Stock Sheet", cadence: "weekly" },
                { id: "FM-WHS-05", technicalProtocol: "Safety Signage Pulse", floorAction: "Verify visibility of 'No Entry' and 'High Voltage' warnings.", priority: "Low", riskLevel: "Medium", consequence: "Accidental public entry.", proof: "Visual Audit", cadence: "daily" },
                { id: "FM-WHS-06", technicalProtocol: "Ladder Safety Audit", floorAction: "Inspect feet and rungs on all maintenance ladders.", priority: "High", riskLevel: "High", consequence: "Fatal fall from height.", proof: "Visual Check", verificationRequired: true, cadence: "weekly" },
                { id: "FM-WHS-07", technicalProtocol: "Racking Impact Scan", floorAction: "Identify bends in warehouse pallet uprights.", priority: "High", riskLevel: "High", consequence: "Racking collapse.", proof: "Walkthrough", verificationRequired: true, cadence: "weekly" },
                { id: "FM-WHS-08", technicalProtocol: "Plant Room Noise", floorAction: "Measure dB levels in main DG yard.", priority: "Low", riskLevel: "Low", consequence: "Hearing loss and OSHA fine.", proof: "Meter Reading", cadence: "monthly" },
                { id: "FM-WHS-09", technicalProtocol: "Chemical Spill Kit", floorAction: "Verify integrity of 10L absorbent in battery room.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental contamination.", proof: "Stock Count", cadence: "weekly" },
                { id: "FM-WHS-10", technicalProtocol: "Near-Miss Review", floorAction: "Analyze all incidents where injury was narrowly avoided.", priority: "High", riskLevel: "Low", consequence: "Failure to stop the 'Real' accident.", proof: "Review Log", verificationRequired: true, cadence: "monthly" }
            ]
        },
        {
            title: "Exterior & Grounds Command",
            department: "Facilities",
            frequency: "Daily",
            role: "Groundskeeping / Exterior Maintenance Lead",
            summary: "Hardening the external perimeter and aesthetic infrastructure.",
            icon: "sprout",
            tasks: [
                { id: "FM-GRN-01", technicalProtocol: "Facade Glass Safety", floorAction: "Inspect external glazing for cracks or spider-webs.", priority: "High", riskLevel: "High", consequence: "Glass fall injury (Fatal).", proof: "Walkthrough", verificationRequired: true, cadence: "weekly" },
                { id: "FM-GRN-02", technicalProtocol: "Perimeter Lighting", floorAction: "Test external floodlights pre-sunset.", priority: "Low", riskLevel: "Low", consequence: "Theft windows and dark patches.", proof: "Visual Check", cadence: "daily" },
                { id: "FM-GRN-03", technicalProtocol: "Storm Drain Clearance", floorAction: "Clean debris from road gratings pre-monsoon surge.", priority: "High", riskLevel: "High", consequence: "Site-wide flash flooding.", proof: "Photo", verificationRequired: true, cadence: "weekly" },
                { id: "FM-GRN-04", technicalProtocol: "Irrigation Schedule Sync", floorAction: "Verify zero watering during peak afternoon sunlight.", priority: "Low", riskLevel: "Low", consequence: "Evaporation waste and plant death.", proof: "BMS Screen", cadence: "daily" },
                { id: "FM-GRN-05", technicalProtocol: "Parking Asphalt Health", floorAction: "Identify potholes > 3 inches depth for cold-patch repair.", priority: "Medium", riskLevel: "Low", consequence: "Guest vehicle damage claims.", proof: "Visual Audit", cadence: "weekly" },
                { id: "FM-GRN-06", technicalProtocol: "Boundary Wall Integrity", floorAction: "Walk the fence-line for cracks or settlement.", priority: "Medium", riskLevel: "Low", consequence: "Perimeter breach.", proof: "Walk Log", cadence: "monthly" },
                { id: "FM-GRN-07", technicalProtocol: "Tree Branch Clearance", floorAction: "Trim foliage obstructing CCTV camera views.", priority: "Low", riskLevel: "Medium", consequence: "Security blind spots.", proof: "Visual Check", cadence: "weekly" },
                { id: "FM-GRN-08", technicalProtocol: "Road Marking Clarity", floorAction: "Identify fading zones for fire-lane repainting.", priority: "Low", riskLevel: "Low", consequence: "Traffic disorganization.", proof: "Walkthrough", cadence: "monthly" },
                { id: "FM-GRN-09", technicalProtocol: "Signage Luster Audit", floorAction: "Wipe dust from external direction boards.", priority: "Low", riskLevel: "Low", consequence: "Poor site first-impression.", proof: "Visual Check", cadence: "weekly" },
                { id: "FM-GRN-10", technicalProtocol: "Sewage Tank Overflow", floorAction: "Check 100% of external sumps for zero spillage.", priority: "High", riskLevel: "High", consequence: "Environmental and health risk.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Vertical Transport (Lifts)",
            department: "Engineering",
            frequency: "Daily",
            role: "Elevator & Vertical Transport Technician",
            summary: "Elevator uptime and emergency rescue governance.",
            icon: "arrow-up-down",
            tasks: [
                { id: "FM-LIF-01", technicalProtocol: "Emergency Rescue (ARD) Test", floorAction: "Simulate power fail; verify lift arrives at nearest floor.", priority: "High", riskLevel: "High", consequence: "Guest entrapment and panic.", proof: "Test Note", verificationRequired: true, cadence: "weekly" },
                { id: "FM-LIF-02", technicalProtocol: "Brake Pad Measurement", floorAction: "Verify pad thickness matches manufacturer min-spec.", priority: "High", riskLevel: "High", consequence: "Lift overspeed/freefall (Fatal).", proof: "Caliper Reading", verificationRequired: true, cadence: "monthly" },
                { id: "FM-LIF-03", technicalProtocol: "Leveling Accuracy", floorAction: "Check floor-match within +/- 5mm at lobby stop.", priority: "Medium", riskLevel: "Medium", consequence: "Tripping hazard for elderly.", proof: "Visual Match", cadence: "daily" },
                { id: "FM-LIF-04", technicalProtocol: "Machine Room Thermals", floorAction: "Verify cooling fan operation; log exhaust temp < 40°C.", priority: "Medium", riskLevel: "Medium", consequence: "Controller board shutdown.", proof: "Temp Log", cadence: "daily" },
                { id: "FM-LIF-05", technicalProtocol: "Lift Intercom Test", floorAction: "Confirm 2-way audio to Security Booth from Car-1.", priority: "High", riskLevel: "High", consequence: "Trapped guest without comms.", proof: "Dial Test", verificationRequired: true, cadence: "daily" },
                { id: "FM-LIF-06", technicalProtocol: "Door Sensor Sensitivity", floorAction: "Test electronic edge reverse-trigger for car doors.", priority: "High", riskLevel: "Medium", consequence: "Child limb injury.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "FM-LIF-07", technicalProtocol: "Lift Floor Display", floorAction: "Verify sync between car and lobby LED indicators.", priority: "Low", riskLevel: "Low", consequence: "Visitor confusion.", proof: "Visual Check", cadence: "daily" },
                { id: "FM-LIF-08", technicalProtocol: "Safety-Gear Lube", floorAction: "Apply approved grease to counterweight guides.", priority: "Medium", riskLevel: "Low", consequence: "Excessive vibration and wear.", proof: "Work Log", cadence: "monthly" },
                { id: "FM-LIF-09", technicalProtocol: "Hoist Rope Tension", floorAction: "Identify uneven rope stretching or fraying.", priority: "High", riskLevel: "High", consequence: "Rope slip / Snap risk.", proof: "Visual Audit", verificationRequired: true, cadence: "quarterly" },
                { id: "FM-LIF-10", technicalProtocol: "Machine Room Fire", floorAction: "Confirm charge in CO2 extinguishers at lift-motor hub.", priority: "High", riskLevel: "High", consequence: "Uncontrolled electrical fire.", proof: "Gauge Log", verificationRequired: true, cadence: "weekly" }
            ]
        },
        {
            title: "IT Infrastructure Support",
            department: "IT",
            frequency: "Daily",
            role: "IT Infrastructure & Network Support (Facilities-side)",
            summary: "Digital infrastructure and network thermals command.",
            icon: "server",
            tasks: [
                { id: "FM-IT-01", technicalProtocol: "Network Rack Thermals", floorAction: "Log server-room ambient temp (Target < 21°C).", priority: "High", riskLevel: "Medium", consequence: "Core switch thermal shutdown.", proof: "Monitor Reading", verificationRequired: true, cadence: "daily" },
                { id: "FM-IT-02", technicalProtocol: "UPS Battery Pulse", floorAction: "Verify 30-min backup for the main core router.", priority: "High", riskLevel: "High", consequence: "Site-wide internet blackout.", proof: "System Screen", verificationRequired: true, cadence: "weekly" },
                { id: "FM-IT-03", technicalProtocol: "Wi-Fi Dead-Zone Sweep", floorAction: "Test signal strength in the basement lift lobby.", priority: "Low", riskLevel: "Low", consequence: "Tenant dissatisfaction.", proof: "App Reading", cadence: "weekly" },
                { id: "FM-IT-04", technicalProtocol: "Patch Panel Cable Mgmt", floorAction: "Remove unauthorized 'loose' patch cords from rack.", priority: "Low", riskLevel: "Low", consequence: "Network topology chaos.", proof: "Visual Audit", cadence: "monthly" },
                { id: "FM-IT-05", technicalProtocol: "Firewall Log Review", floorAction: "Identify any unauthorized facility hardware IPs.", priority: "Medium", riskLevel: "High", consequence: "Cyber-breach of facility controls.", proof: "Registry Audit", cadence: "weekly" },
                { id: "FM-IT-06", technicalProtocol: "Access Control Readers", floorAction: "Test response of 10 random badge scanners.", priority: "Medium", riskLevel: "Medium", consequence: "Systemic entry lockout.", proof: "Test Note", cadence: "daily" },
                { id: "FM-IT-07", technicalProtocol: "Security Patch Status", floorAction: "Verify 100% update of security server OS.", priority: "High", riskLevel: "High", consequence: "Ransomware vulnerability.", proof: "Update Log", verificationRequired: true, cadence: "monthly" },
                { id: "FM-IT-08", technicalProtocol: "CCTV RAID Health", floorAction: "Confirm zero red lights on the storage array.", priority: "High", riskLevel: "Medium", consequence: "Loss of incident recordings.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "FM-IT-09", technicalProtocol: "Digital Signage Sync", floorAction: "Confirm correct lobby content is playing.", priority: "Low", riskLevel: "Low", consequence: "Outdated brand info.", proof: "Visual Confirm", cadence: "daily" },
                { id: "FM-IT-10", technicalProtocol: "Rack Power Balancing", floorAction: "Check PDU load-balancing across A/B feeds.", priority: "Medium", riskLevel: "Medium", consequence: "Circuit overload shutdown.", proof: "PDU Reading", cadence: "weekly" }
            ]
        },
        {
            title: "Regulatory Compliance Audit",
            department: "Admin",
            frequency: "Monthly",
            role: "Compliance & Audit Officer",
            summary: "Legal licensing, certification, and audit trail command.",
            icon: "scale",
            tasks: [
                { id: "FM-AUD-01", technicalProtocol: "Occupational Health Scan", floorAction: "Verify 100% staff medical fitness certs for hazardous roles.", priority: "Medium", riskLevel: "High", consequence: "Labor law violation.", proof: "Registry Audit", cadence: "monthly" },
                { id: "FM-AUD-02", technicalProtocol: "Audit Trail Integrity", floorAction: "Retrieve 10 random P1 work orders; verify proof photos.", priority: "High", riskLevel: "Medium", consequence: "False maintenance records.", proof: "Audit Report", verificationRequired: true, cadence: "monthly" },
                { id: "FM-AUD-03", technicalProtocol: "Regulatory Renewal Watch", floorAction: "Identify licenses expiring in < 60 days.", priority: "High", riskLevel: "High", consequence: "Forced facility shutdown.", proof: "Registry File", verificationRequired: true, cadence: "monthly" },
                { id: "FM-AUD-04", technicalProtocol: "Training Matrix Compliance", floorAction: "Verify 100% completion of LOTO training for new hires.", priority: "High", riskLevel: "High", consequence: "Legal liability for safety fails.", proof: "Matrix Match", verificationRequired: true, cadence: "monthly" },
                { id: "FM-AUD-05", technicalProtocol: "Insurance Valuations", floorAction: "Review asset list vs current insurance sum assured.", priority: "Low", riskLevel: "Medium", consequence: "Under-insurance loss risk.", proof: "Policy Match", cadence: "annually" },
                { id: "FM-AUD-06", technicalProtocol: "Metrology Calibration", floorAction: "Verify active stamps on 100% of campus scales.", priority: "Medium", riskLevel: "Low", consequence: "Regulatory fines.", proof: "Registry Note", cadence: "quarterly" },
                { id: "FM-AUD-07", technicalProtocol: "Fire Drill Gaps", floorAction: "Confirm closure of 100% of NCs from last drill.", priority: "High", riskLevel: "Medium", consequence: "Repeated safety failure.", proof: "Correction Log", verificationRequired: true, cadence: "monthly" },
                { id: "FM-AUD-08", technicalProtocol: "Waste License Sync", floorAction: "Verify vendor's valid hazardous-waste license.", priority: "High", riskLevel: "High", consequence: "Co-liability for illegal dumping.", proof: "License Copy", verificationRequired: true, cadence: "annually" },
                { id: "FM-AUD-09", technicalProtocol: "Stability Certificate", floorAction: "Review structural audit for aging buildings (>15y).", priority: "High", riskLevel: "High", consequence: "Building collapse risk.", proof: "Report File", verificationRequired: true, cadence: "annually" },
                { id: "FM-AUD-10", technicalProtocol: "Non-Conformance (NC) Registry", floorAction: "Audit open items in the safety NC tracker.", priority: "Medium", riskLevel: "Low", consequence: "Systemic quality decay.", proof: "Dashboard", cadence: "monthly" }
            ]
        },
        {
            title: "Emergency Response Command",
            department: "Safety",
            frequency: "Daily",
            role: "Emergency Response Coordinator",
            summary: "Crisis communication and drill governance.",
            icon: "siren",
            tasks: [
                { id: "FM-EMR-01", technicalProtocol: "Crisis Comms List", floorAction: "Verify dial-tone for all 5 'Primary Emergency' contacts.", priority: "High", riskLevel: "High", consequence: "Zero response during disaster.", proof: "Dial Log", verificationRequired: true, cadence: "daily" },
                { id: "FM-EMR-02", technicalProtocol: "Evacuation Path Glow", floorAction: "Inspect night-visibility of stairwell floor-strips.", priority: "Medium", riskLevel: "High", consequence: "Exit panic during smoke.", proof: "Visual Audit", cadence: "weekly" },
                { id: "FM-EMR-03", technicalProtocol: "First-Responder Roster", floorAction: "Confirm on-site presence of 2 'Certified First Aiders'.", priority: "High", riskLevel: "High", consequence: "Fatal delay in medical aid.", proof: "Roster Match", verificationRequired: true, cadence: "daily" },
                { id: "FM-EMR-04", technicalProtocol: "Incident Triage Speed", floorAction: "Log time from 'Alarm Start' to 'Zone Identified' (Target < 30s).", priority: "High", riskLevel: "High", consequence: "Delayed firefighting.", proof: "System Log", verificationRequired: true, cadence: "monthly" },
                { id: "FM-EMR-05", technicalProtocol: "Crisis Kit Readiness", floorAction: "Verify battery and seal on 10 portable megaphones.", priority: "Low", riskLevel: "Low", consequence: "Inability to lead crowds.", proof: "Stock Check", cadence: "weekly" },
                { id: "FM-EMR-06", technicalProtocol: "Floor Warden Position", floorAction: "Confirm 100% coverage of designated escape captains.", priority: "Medium", riskLevel: "High", consequence: "Leaderless evacuation.", proof: "Roster Audit", cadence: "weekly" },
                { id: "FM-EMR-07", technicalProtocol: "Assembly Point Clearance", floorAction: "Physically verify external zone is clear of vehicles.", priority: "High", riskLevel: "High", consequence: "Crush injuries during exit.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "FM-EMR-08", technicalProtocol: "Megaphone Battery", floorAction: "Test 100% of portable sirens for audio throw.", priority: "Low", riskLevel: "Low", consequence: "Comms failure in crowd.", proof: "Test Note", cadence: "weekly" },
                { id: "FM-EMR-09", technicalProtocol: "Tabletop Simulation", floorAction: "Execute 10-min scenario discussion with security.", priority: "Medium", riskLevel: "Low", consequence: "Lack of mental readiness.", proof: "Simulation Log", cadence: "monthly" },
                { id: "FM-EMR-10", technicalProtocol: "First-Aider Validity", floorAction: "Identify certificates expiring in < 30 days.", priority: "Medium", riskLevel: "Low", consequence: "Illegal first-aid cover.", proof: "Registry Audit", cadence: "monthly" }
            ]
        }
    ]
};
