
import type { PremiumPack } from "@/lib/premium-packs";

export const facility_management_blueprint: PremiumPack = {
    id: 'facility_management_blueprint',
    title: "Facility Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 999,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d6d4dd85-3fb9-4c26-8ec3-cb021ddebfdc',
    category: "Corporate & Tech",
    description: "The definitive Sovereign v18.1 technical engine for multi-site infrastructure command. Hardening 188 technical control points from MEP and Contractor Liability to Energy Economics.",
    heroHeadline: "Prevent Downtime, Liability, and Infrastructure Failure.",
    heroSubheadline: "Track building uptime, monitor contractor risks, and protect institutional assets—across 20 specialized governance roles.",
    pricingUrgency: "A single major utility failure or one safety breach costs 100x more than this system.",
    consultingAnchor: 10000,
    icon: "building-2",
    badgeText: "V18.1 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Facilities Directors", "Building Managers", "COOs", "Property Management Heads", "Infrastructure Leads"],
    sampleItems: [
        { text: "<strong>Infrastructure Reliability</strong>: Predictive maintenance for HVAC, DG load, and elevator rescue logic.", icon: "zap" },
        { text: "<strong>Workplace Safety (WSEC)</strong>: Fire exit clearance, smoke detector samples, and panic button signal tests.", icon: "shield-alert" },
        { text: "<strong>Energy Optimization</strong>: Daily KWH intensity pulse and water leakage patrols to stop cost blowouts.", icon: "leaf" },
        { text: "<strong>Contractor Control</strong>: Permit-to-Work (PTW) governance and vendor SLA attendance audits.", icon: "file-check" },
        { text: "<strong>MEP Asset Watch</strong>: Critical panel scans, pump room vitals, and UPS health logs.", icon: "wrench" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure the standard stays even when staff resign.", icon: "history" }
    ],
    checklists: [
        {
            title: "Executive Portfolio Command",
            department: "Executive",
            frequency: "Daily",
            role: "Facilities Director / Head of Infrastructure",
            summary: "High-level strategic oversight of portfolio uptime and liability.",
            icon: "crown",
            tasks: [
                { id: "FM-EXE-01", technicalProtocol: "Group Incident Triage", floorAction: "Review all P1 infrastructure alerts and escalation signatures from the last 24h.", priority: "High", riskLevel: "High", consequence: "Escalated liability and unmonitored asset damage.", proof: "Incident Dashboard", verificationRequired: true },
                { id: "FM-EXE-02", technicalProtocol: "Statutory License Pulse", floorAction: "Verify validity of all Fire NOCs, Lift Licenses, and Building Stability certs.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License File", verificationRequired: true },
                { id: "FM-EXE-03", technicalProtocol: "Public Liability Shield", floorAction: "Confirm valid insurance policies for 100% of managed sites.", priority: "High", riskLevel: "High", consequence: "Financial ruin during a catastrophic event.", proof: "Policy Registry", verificationRequired: true },
                { id: "FM-EXE-04", technicalProtocol: "CAPEX Milestone Review", floorAction: "Review project completion photos for scheduled facility upgrades.", priority: "Medium", riskLevel: "Medium", consequence: "Budget overruns and delayed upgrades.", proof: "Project Log" },
                { id: "FM-EXE-05", technicalProtocol: "Occupant CSAT Sentiment", floorAction: "Analyze trends in high-priority tenant/occupant complaints.", priority: "Medium", riskLevel: "Low", consequence: "Tenant attrition and negative brand reputation.", proof: "CSAT Report" }
            ]
        },
        {
            title: "Building Operations Command",
            department: "Operations",
            frequency: "Daily",
            role: "Building Operations Manager",
            summary: "Site-level readiness and operational flow governance.",
            icon: "activity",
            tasks: [
                { id: "FM-BOM-01", technicalProtocol: "Ambiance Sensory Audit", floorAction: "Check Lobby scent, music volume, and temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor visitor first-impression.", proof: "Daily Log" },
                { id: "FM-BOM-02", technicalProtocol: "Zero-Gap Handover", floorAction: "Verify digital sign-off between AM/PM facility shift managers.", priority: "High", riskLevel: "Medium", consequence: "Lost instructions / Gridlock.", proof: "Handover Log", verificationRequired: true },
                { id: "FM-BOM-03", technicalProtocol: "Lobby Grooming Standards", floorAction: "Spot check reception staff for uniforms and name-tags.", priority: "Low", riskLevel: "Low", consequence: "Professional brand dilution.", proof: "Briefing Log" },
                { id: "FM-BOM-04", technicalProtocol: "VIP Visit Readiness", floorAction: "Audit porch and meeting room setup for scheduled visitors.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-value stakeholder trust.", proof: "Photo" },
                { id: "FM-BOM-05", technicalProtocol: "Emergency Comms Test", floorAction: "Test dial-tone between Lobby and Security Booth.", priority: "High", riskLevel: "Medium", consequence: "Communication fail during crisis.", proof: "Dial Test", verificationRequired: true }
            ]
        },
        {
            title: "Hard FM (MEP) Maintenance",
            department: "Engineering",
            frequency: "Daily",
            role: "Maintenance Supervisor",
            summary: "Asset health and breakdown prevention command.",
            icon: "wrench",
            tasks: [
                { id: "FM-MNT-01", technicalProtocol: "PPM Compliance Audit", floorAction: "Verify completion of today's preventive maintenance tickets.", priority: "High", riskLevel: "Medium", consequence: "Sudden asset failure and downtime.", proof: "PPM Registry", verificationRequired: true },
                { id: "FM-MNT-02", technicalProtocol: "Critical Spare Par-Levels", floorAction: "Physically count spare bearings, belts, and MCBs.", priority: "High", riskLevel: "Medium", consequence: "Extended downtime waiting for parts.", proof: "Stock Sheet", verificationRequired: true },
                { id: "FM-MNT-03", technicalProtocol: "Pump Vibration Anomaly", floorAction: "Check main water pumps for bearing noise or heat.", priority: "Medium", riskLevel: "High", consequence: "Sudden motor seizure.", proof: "Observation Log" },
                { id: "FM-MNT-04", technicalProtocol: "Work-Order Backlog", floorAction: "Close 100% of P1 maintenance tickets < 4h.", priority: "High", riskLevel: "Low", consequence: "Occupant complaints and asset decay.", proof: "System Sync", verificationRequired: true }
            ]
        },
        {
            title: "Electrical Systems Control",
            department: "Engineering",
            frequency: "Daily",
            role: "Electrical Systems Engineer",
            summary: "Power distribution and backup readiness.",
            icon: "zap",
            tasks: [
                { id: "FM-ELE-01", technicalProtocol: "Emergency Power Readiness", floorAction: "Inspect DG fuel levels and test ARD battery charge.", priority: "High", riskLevel: "High", consequence: "Total facility blackout.", proof: "Start-test Log", verificationRequired: true },
                { id: "FM-ELE-02", technicalProtocol: "Electrical Panel Heat Scan", floorAction: "Perform infrared scan of high-load server room panels.", priority: "High", riskLevel: "High", consequence: "Electrical fire and system crash.", proof: "Panel Log", verificationRequired: true },
                { id: "FM-ELE-03", technicalProtocol: "UPS Load Testing", floorAction: "Verify server-room UPS battery run-time and health.", priority: "High", riskLevel: "High", consequence: "Data loss during power flip.", proof: "Voltage Log", verificationRequired: true },
                { id: "FM-ELE-04", technicalProtocol: "APFC Bank Status", floorAction: "Verify power factor is maintained > 0.99.", priority: "High", riskLevel: "Medium", consequence: "Surcharge penalties from grid.", proof: "Capacitor Log" }
            ]
        },
        {
            title: "Plumbing & Water Vitals",
            department: "Engineering",
            frequency: "Daily",
            role: "Plumbing & Water Systems Technician",
            summary: "Hydraulic pressure and water purity governance.",
            icon: "droplet",
            tasks: [
                { id: "FM-PLU-01", technicalProtocol: "Water Purity (TDS) Pulse", floorAction: "Verify output TDS from RO/STP (Target < 150).", priority: "High", riskLevel: "High", consequence: "Health risk and plumbing damage.", proof: "TDS Reading", verificationRequired: true },
                { id: "FM-PLU-02", technicalProtocol: "Water Tank Level Sync", floorAction: "Match BMS reading vs physical float check.", priority: "Medium", riskLevel: "Medium", consequence: "Facility dry-out.", proof: "Level Log" },
                { id: "FM-PLU-03", technicalProtocol: "Plumbing Leak Patrol", floorAction: "Walk service shafts for signs of moisture or drips.", priority: "Medium", riskLevel: "Medium", consequence: "Structural damage.", proof: "Patrol Log" }
            ]
        },
        {
            title: "HVAC Climate Command",
            department: "Engineering",
            frequency: "Daily",
            role: "HVAC Systems Engineer",
            summary: "Thermal comfort and chiller efficiency pulse.",
            icon: "wind",
            tasks: [
                { id: "FM-HVC-01", technicalProtocol: "Thermal Integrity Pulse", floorAction: "Log chiller discharge temp and monitor BMS set-points.", priority: "High", riskLevel: "Medium", consequence: "Occupant heat discomfort.", proof: "BMS Reading", verificationRequired: true },
                { id: "FM-HVC-02", technicalProtocol: "Filter Pressure Watch", floorAction: "Log differential pressure across main AHU filters.", priority: "Medium", riskLevel: "Low", consequence: "Reduced airflow and motor strain.", proof: "BMS Reading" },
                { id: "FM-HVC-03", technicalProtocol: "HVAC Optimization", floorAction: "Confirm night setback set-points for unoccupied zones.", priority: "High", riskLevel: "Low", consequence: "Massive energy overhead.", proof: "BMS Screenshot", verificationRequired: true }
            ]
        },
        {
            title: "Fire & Life Safety",
            department: "Safety",
            frequency: "Daily",
            role: "Fire & Life Safety Officer",
            summary: "Infrastructure hardening and egress readiness.",
            icon: "shield-alert",
            tasks: [
                { id: "FM-FSO-01", technicalProtocol: "Fire Exit Clearance", floorAction: "Verify 100% fire escapes are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment during crisis.", proof: "Patrol Log", verificationRequired: true },
                { id: "FM-FSO-02", technicalProtocol: "Fire Gauge Validation", floorAction: "Confirm needle in GREEN zone for all extinguishers.", priority: "High", riskLevel: "High", consequence: "Zero firefighting capability.", proof: "Gauge Log", verificationRequired: true },
                { id: "FM-FSO-03", technicalProtocol: "Fire Pump Auto-Logic", floorAction: "Confirm main fire pumps are in 'AUTO' mode.", priority: "High", riskLevel: "High", consequence: "Zero firefighting pressure.", proof: "Gauge Log", verificationRequired: true },
                { id: "FM-FSO-04", technicalProtocol: "PA Emergency Override", floorAction: "Test announcement clarity in a random zone.", priority: "High", riskLevel: "Medium", consequence: "Evacuation chaos.", proof: "Sound Test", verificationRequired: true }
            ]
        },
        {
            title: "Security & Access Governance",
            department: "Security",
            frequency: "Daily",
            role: "Security Systems Administrator (CCTV/Access Control)",
            summary: "Digital perimeter hardening and asset protection.",
            icon: "lock",
            tasks: [
                { id: "FM-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or suits.", proof: "System Screen", verificationRequired: true },
                { id: "FM-SEC-02", technicalProtocol: "Visitor ID Capture", floorAction: "Audit register for 100% ID verification at gate.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit", verificationRequired: true },
                { id: "FM-SEC-03", technicalProtocol: "Panic Button Pulse", floorAction: "Test silent alarm to control booth/police.", priority: "High", riskLevel: "High", consequence: "Zero response during robbery.", proof: "Signal Test", verificationRequired: true }
            ]
        },
        {
            title: "Housekeeping & Soft FM",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Housekeeping Operations Supervisor",
            summary: "Hygiene command and aesthetic parity.",
            icon: "sparkles",
            tasks: [
                { id: "FM-SFM-01", technicalProtocol: "Washroom Hygiene Pulse", floorAction: "Audit logs for 60-minute cleaning frequency.", priority: "High", riskLevel: "Low", consequence: "Primary driver of occupant rage.", proof: "Hourly Sheet" },
                { id: "FM-SFM-02", technicalProtocol: "Consumable Stock Audit", floorAction: "Check par levels of soap, tissue, and sanitizers.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene breakdown.", proof: "Stock Check" },
                { id: "FM-SFM-03", technicalProtocol: "Deep Clean Milestone", floorAction: "Verify completion of today's deep-cleaning schedule.", priority: "Medium", riskLevel: "Low", consequence: "Long-term asset decay.", proof: "Photo", verificationRequired: true }
            ]
        },
        {
            title: "Asset & Vendor Governance",
            department: "Admin",
            frequency: "Daily",
            role: "Vendor & Contractor Manager",
            summary: "Monitors third-party service performance parity.",
            icon: "file-check",
            tasks: [
                { id: "FM-VEN-01", technicalProtocol: "Attendance Parity Audit", floorAction: "Verify outsourced staff count matches contract SLA.", priority: "High", riskLevel: "Low", consequence: "Paying for unrendered work.", proof: "Biometric Report", verificationRequired: true },
                { id: "FM-VEN-02", technicalProtocol: "Contractor PTW Audit", floorAction: "Verify permits for all active hot-work/height jobs.", priority: "High", riskLevel: "High", consequence: "Fire liability exposure.", proof: "Permit Registry", verificationRequired: true },
                { id: "FM-VEN-03", technicalProtocol: "LOTO Enforcement", floorAction: "Verify 100% of vendor repairs possess lock-out tags.", priority: "High", riskLevel: "High", consequence: "Fatal accidental energization.", proof: "Visual Check", verificationRequired: true }
            ]
        },
        {
            title: "Energy & Sustainability",
            department: "ESG",
            frequency: "Daily",
            role: "Energy Management Analyst",
            summary: "Resource tracking and environmental discipline.",
            icon: "leaf",
            tasks: [
                { id: "FM-SUS-01", technicalProtocol: "KWH Anomaly Review", floorAction: "Compare daily meter vs baseline; investigate variance.", priority: "High", riskLevel: "Medium", consequence: "Unmonitored energy wastage.", proof: "Meter Match", verificationRequired: true },
                { id: "FM-SUS-02", technicalProtocol: "Water Meter Pulse", floorAction: "Log 3 AM reading to detect overnight leaks.", priority: "High", riskLevel: "Medium", consequence: "Hidden pipe burst waste.", proof: "Water Log", verificationRequired: true },
                { id: "FM-SUS-03", technicalProtocol: "Waste Segregation Sync", floorAction: "Verify 100% separation at source bins.", priority: "Low", riskLevel: "Low", consequence: "Environmental score drop.", proof: "Visual Audit" }
            ]
        }
    ]
};
