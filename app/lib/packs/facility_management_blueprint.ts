
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
    description: "The definitive Sovereign v11.9 technical engine for infrastructure command. Hardening 120 technical control points from MEP and Contractor Liability to Utility Economics.",
    heroHeadline: "Prevent Downtime, Liability, and Infrastructure Failure.",
    heroSubheadline: "Track building uptime, monitor contractor risks, and protect institutional assets—across 12 specialized governance modules.",
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
