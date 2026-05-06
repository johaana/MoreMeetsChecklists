import type { PremiumPack } from "@/lib/premium-packs";

export const retail_operations_system: PremiumPack = {
    id: 'retail_operations_system',
    title: "Retail Operations System",
    priceINR: 999,
    priceUSD: 12,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Retail",
    description: "The definitive Sovereign v11.9 technical engine for physical retail. A unified system for Fashion, Jewelry, Electronics, and Grocery—standardizing 110+ technical control points across 10 distinct roles.",
    heroHeadline: "One Engine. Ten Specialized Role Profiles.",
    heroSubheadline: "The professional plug for revenue leakage and brand drift—across every unit in your retail group.",
    pricingUrgency: "Preventing a single major theft or one brand-damaging customer incident saves 100x the cost of this system.",
    consultingAnchor: 5000,
    icon: "shopping-bag",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Retail Group Owners", "Store Managers", "Visual Merchandisers", "Loss Prevention Directors", "Regional Managers"],
    sampleItems: [
        { text: "<strong>Asset Shield Engine</strong>: Zero-fail protocols for Vault access, serialized tracking, and Fitting Room loss prevention.", icon: "shield-check" },
        { text: "<strong>Inventory Integrity</strong>: Daily cycle counts, expiry sweep logic, and 'Void-Bill' authorization to stop internal theft.", icon: "barcode" },
        { text: "<strong>Visual Merchandising Engine</strong>: Planogram parity audits, window display QC, and lighting standards.", icon: "eye" },
        { text: "<strong>Maintenance & Assets</strong>: Rigorous uptime logs for POS hardware, AC banks, and security gate calibration.", icon: "wrench" },
        { text: "<strong>Institutional Memory</strong>: Built-in Trainer's Notes ensure that standards never leave when your best manager resigns.", icon: "history" }
    ],
    checklists: [
        {
            title: "Store Management & Command",
            department: "Operations",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Ensures the facility is safe, presentable, and operationally hardened before opening.",
            icon: "sunrise",
            tasks: [
                { id: "RET-OPS-01", technicalProtocol: "Lobby Ambiance Sensory Audit", floorAction: "Check Scent, Music, and Temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor guest first-impression.", proof: "Daily Log" },
                { id: "RET-OPS-02", technicalProtocol: "POS & Connectivity Sync", floorAction: "Verify all billing terminals and receipt printers are online.", priority: "High", riskLevel: "Medium", consequence: "Billing failure during morning rush.", proof: "System Screen" },
                { id: "RET-OPS-03", technicalProtocol: "Morning Staff Deployment", floorAction: "Verify 100% roster presence and assign floor zones.", priority: "High", riskLevel: "Medium", consequence: "Service collapse during peak hours.", proof: "Attendance Log" },
                { id: "RET-OPS-04", technicalProtocol: "Statutory License Display", floorAction: "Confirm Trade and Health licenses are in public view.", priority: "High", riskLevel: "High", consequence: "Immediate government sealing of premises.", proof: "Photo Audit" },
                { id: "RET-OPS-05", technicalProtocol: "Store Signage Integrity", floorAction: "Verify all exterior signage is lit and debris-free.", priority: "Low", riskLevel: "Low", consequence: "Damaged brand authority.", proof: "Visual Check" },
                { id: "RET-OPS-06", technicalProtocol: "Manager Handover Review", floorAction: "Read night-shift incident reports and check resolution status.", priority: "High", riskLevel: "Low", consequence: "Loss of operational continuity.", proof: "Signed Log" },
                { id: "RET-OPS-07", technicalProtocol: "Grooming & ID Badge Audit", floorAction: "Inspect staff uniforms and name-tag visibility.", priority: "Low", riskLevel: "Low", consequence: "Professional brand image drop.", proof: "Briefing Log" },
                { id: "RET-OPS-08", technicalProtocol: "Public Announcement System", floorAction: "Test store bell and emergency PA system.", priority: "High", riskLevel: "Medium", consequence: "Chaos during emergency evacuation.", proof: "Sound Test" },
                { id: "RET-OPS-09", technicalProtocol: "Stationery Par-Level Audit", floorAction: "Check stock of bill rolls, carry-bags, and return forms.", priority: "Low", riskLevel: "Low", consequence: "Operational friction at checkout.", proof: "Stock Sheet" },
                { id: "RET-OPS-10", technicalProtocol: "Closing Gas/Thermal Seal", floorAction: "Verify all non-essential power and gas valves are SHUT.", priority: "High", riskLevel: "High", consequence: "Overnight fire disaster.", proof: "Closure Log" }
            ]
        },
        {
            title: "Loss Prevention & Asset Shield",
            department: "Security",
            frequency: "Daily",
            role: "Loss Prevention Lead",
            summary: "Hardens the store perimeter and fitting rooms against theft.",
            icon: "shield-check",
            tasks: [
                { id: "RET-SEC-01", technicalProtocol: "EAS Gate Calibration", floorAction: "Walk a tagged item through gates to test alarm trigger.", priority: "High", riskLevel: "High", consequence: "Silent theft of high-value inventory.", proof: "Test Log" },
                { id: "RET-SEC-02", technicalProtocol: "Fitting Room Sweep", floorAction: "Check rooms for discarded tags or concealment tools.", priority: "High", riskLevel: "High", consequence: "Undetected shoplifting.", proof: "Hourly Sheet" },
                { id: "RET-SEC-03", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and focal points.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance/police.", proof: "System Screen" },
                { id: "RET-SEC-04", technicalProtocol: "High-Value Tether Audit", floorAction: "Inspect security wires on demo phones/laptops/bags.", priority: "High", riskLevel: "High", consequence: "Theft of display assets.", proof: "Visual Audit" },
                { id: "RET-SEC-05", technicalProtocol: "Loading Bay Lockdown", floorAction: "Physically confirm all bay shutters are locked at EOD.", priority: "High", riskLevel: "High", consequence: "Vulnerable after-hours perimeter.", proof: "Visual Check" },
                { id: "RET-SEC-06", technicalProtocol: "Deactivator Functionality", floorAction: "Test tag-removers at every POS station.", priority: "Medium", riskLevel: "Low", consequence: "False alarms and guest embarrassment.", proof: "Test Log" },
                { id: "RET-SEC-07", technicalProtocol: "Staff Bag-Check Protocol", floorAction: "Execute random exit checks for on-duty personnel.", priority: "High", riskLevel: "High", consequence: "Internal shrinkage leakage.", proof: "Registry Note" },
                { id: "RET-SEC-08", technicalProtocol: "Suspicious Behavior Briefing", floorAction: "Identify 'Target SKUs' for theft monitoring during shift.", priority: "Medium", riskLevel: "Low", consequence: "Lack of focus on high-risk items.", proof: "Briefing Sheet" },
                { id: "RET-SEC-09", technicalProtocol: "Emergency Key Control", floorAction: "Verify 100% of master keys are in the secure box.", priority: "High", riskLevel: "High", consequence: "Unauthorized access to store safe/stock.", proof: "Key Inventory" },
                { id: "RET-SEC-10", technicalProtocol: "Final Nightly Security Seal", floorAction: "Execute EOD perimeter walkthrough initials.", priority: "High", riskLevel: "Low", consequence: "Systemic security gap.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Inventory & Stock Integrity",
            department: "Inventory",
            frequency: "Daily",
            role: "Inventory Lead",
            summary: "Zero-fail protocols for stock accuracy and shrinkage detection.",
            icon: "barcode",
            tasks: [
                { id: "RET-INV-01", technicalProtocol: "High-Value Cycle Count", floorAction: "Blind count top 10 most expensive SKUs vs. POS.", priority: "High", riskLevel: "High", consequence: "Undetected systemic internal theft.", proof: "Count Sheet" },
                { id: "RET-INV-02", technicalProtocol: "Negative Stock Triage", floorAction: "Review system items with negative quantities.", priority: "Medium", riskLevel: "Medium", consequence: "Inventory data corruption.", proof: "System Report" },
                { id: "RET-INV-03", technicalProtocol: "Expiry Sweep (Grocery/Beauty)", floorAction: "Remove items with < 30 days shelf life.", priority: "High", riskLevel: "High", consequence: "Legal fines and customer safety risk.", proof: "Sweep Log" },
                { id: "RET-INV-04", technicalProtocol: "Damaged Stock Registry", floorAction: "Photo-verify and log all broken/unsaleable units.", priority: "Medium", riskLevel: "High", consequence: "Theft masked as damage.", proof: "Photo Register" },
                { id: "RET-INV-05", technicalProtocol: "Inter-Store Transfer Audit", floorAction: "Confirm 100% acknowledgment of incoming shipments.", priority: "High", riskLevel: "Medium", consequence: "Inventory in transit leakage.", proof: "Transfer Log" },
                { id: "RET-INV-06", technicalProtocol: "Price Label Parity", floorAction: "Spot check 20 shelf-edge labels against POS price.", priority: "High", riskLevel: "Medium", consequence: "Legal Metrology fines and guest disputes.", proof: "Audit Sheet" },
                { id: "RET-INV-07", technicalProtocol: "Barcode Integrity Scan", floorAction: "Verify scannability of 10 items in each department.", priority: "Low", riskLevel: "Low", consequence: "Checkout delays and friction.", proof: "Scan Test" },
                { id: "RET-INV-08", technicalProtocol: "Stockroom Organization", floorAction: "Ensure floor is clear and stock is accessible for floor-runners.", priority: "Low", riskLevel: "Low", consequence: "Slow restock TAT.", proof: "Walkthrough" },
                { id: "RET-INV-09", technicalProtocol: "RTV (Return to Vendor) Hub", floorAction: "Audit pre-packed vendor returns for security seals.", priority: "Medium", riskLevel: "Medium", consequence: "Logistics leakage.", proof: "Visual Audit" },
                { id: "RET-INV-10", technicalProtocol: "Final Inventory Pulse", floorAction: "Submit daily shrinkage alert to Head Office.", priority: "High", riskLevel: "Low", consequence: "Loss of HO oversight.", proof: "Signed Dashboard" }
            ]
        },
        {
            title: "Visual Merchandising & Ambiance",
            department: "VM",
            frequency: "Daily",
            role: "VM Lead",
            summary: "Protects the brand visual standard and sales atmosphere.",
            icon: "eye",
            tasks: [
                { id: "RET-VM-01", technicalProtocol: "Planogram Parity Audit", floorAction: "Verify shelf layout matches the Master Planogram.", priority: "Medium", riskLevel: "Low", consequence: "Reduced conversion and brand drift.", proof: "Photo Audit" },
                { id: "RET-VM-02", technicalProtocol: "Window Display Hygiene", floorAction: "Clean glass and verify mannequin styling/pricing.", priority: "High", riskLevel: "Low", consequence: "Poor street-level first impression.", proof: "Visual Check" },
                { id: "RET-VM-03", technicalProtocol: "Focal Point Lighting", floorAction: "Verify 100% of spotlights are focused and functional.", priority: "Low", riskLevel: "Low", consequence: "Dull product presentation.", proof: "Visual Audit" },
                { id: "RET-VM-04", technicalProtocol: "Promotional Signage Sync", floorAction: "Ensure 'Sale' signs match active POS discounts.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes and legal risk.", proof: "Signage Log" },
                { id: "RET-VM-05", technicalProtocol: "Size-Sticker Uniformity", floorAction: "Check apparel racks for consistent size-tag facing.", priority: "Low", riskLevel: "Low", consequence: "Sloppy shelf appearance.", proof: "Visual Check" }
            ]
        },
        {
            title: "Cash Handling & POS Governance",
            department: "Finance",
            frequency: "Daily",
            role: "Head Cashier",
            summary: "Revenue reconciliation and internal fraud detection.",
            icon: "banknote",
            tasks: [
                { id: "RET-FIN-01", technicalProtocol: "Float Verification Pulse", floorAction: "Physically count denominations in all drawers at opening.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue leakage.", proof: "Float Sheet" },
                { id: "RET-FIN-02", technicalProtocol: "Void Bill Authorization", floorAction: "Manager sign-off on 100% of cancelled/deleted bills.", priority: "High", riskLevel: "High", consequence: "Theft masked as 'errors'.", proof: "POS Audit" },
                { id: "RET-FIN-03", technicalProtocol: "Blind Cash Settlement", floorAction: "Match cash-in-hand to POS EOD report.", priority: "High", riskLevel: "High", consequence: "Direct financial loss.", proof: "Settlement Log" },
                { id: "RET-FIN-04", technicalProtocol: "Aggregator/Card Reconciliation", floorAction: "Match card slips/UPI records against total bank batch.", priority: "Medium", riskLevel: "Medium", consequence: "Unsettled transaction loss.", proof: "Batch Report" },
                { id: "RET-FIN-05", technicalProtocol: "Safe-Drop Protocol", floorAction: "Witness witnessed seal of cash bags for bank transit.", priority: "High", riskLevel: "High", consequence: "High-value theft during pickup.", proof: "Bank Slip" }
            ]
        },
        {
            title: "Customer Service & Floor Sales",
            department: "Sales",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Governs staff behavior and service TAT.",
            icon: "user-check",
            tasks: [
                { id: "RET-SRV-01", technicalProtocol: "Staff Interaction Audit", floorAction: "Observe 5 random customer greets (Target < 30s).", priority: "Medium", riskLevel: "Low", consequence: "Lost sales and poor experience.", proof: "Service Log" },
                { id: "RET-SRV-02", technicalProtocol: "Upsell Performance Pulse", floorAction: "Review daily add-on attachment rate per cashier.", priority: "Low", riskLevel: "Low", consequence: "Low transaction value.", proof: "Leaderboard" },
                { id: "RET-SRV-03", technicalProtocol: "Return/Exchange Triage", floorAction: "Ensure 100% of returns have original tags/bill.", priority: "High", riskLevel: "High", consequence: "Fraudulent returns by guests.", proof: "Return Register" },
                { id: "RET-SRV-04", technicalProtocol: "Omnichannel TAT Monitor", floorAction: "Verify 'Pick-up-in-Store' orders ready < 2 hours.", priority: "Medium", riskLevel: "Low", consequence: "Omnichannel customer rage.", proof: "App Sync" },
                { id: "RET-SRV-05", technicalProtocol: "Staff Break Rotation", floorAction: "Confirm floor zones covered during staff lunch slots.", priority: "High", riskLevel: "Low", consequence: "Unmanned sections/Theft risk.", proof: "Roster Sheet" }
            ]
        },
        {
            title: "Store Logistics & Receiving",
            department: "Logistics",
            frequency: "Daily",
            role: "Receiving Lead",
            summary: "Profit protection at the store entry point.",
            icon: "truck",
            tasks: [
                { id: "RET-LOG-01", technicalProtocol: "Carton Integrity Check", floorAction: "Inspect incoming boxes for seal tampering.", priority: "High", riskLevel: "High", consequence: "Supply chain theft pre-arrival.", proof: "Receiving Log" },
                { id: "RET-LOG-02", technicalProtocol: "GRN Parity Verification", floorAction: "Match physical units vs. PO/Delivery Note.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing stock.", proof: "GRN Report" },
                { id: "RET-LOG-03", technicalProtocol: "Back-door Security Handoff", floorAction: "Verify receiving bay is locked after each delivery.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Visual Check" },
                { id: "RET-LOG-04", technicalProtocol: "Empty Hanger/Box Removal", floorAction: "Clear loading bay of all flammable packing debris.", priority: "Medium", riskLevel: "High", consequence: "Fire hazard in stockroom.", proof: "Walkthrough" },
                { id: "RET-LOG-05", technicalProtocol: "Inventory Weighing Test", floorAction: "Check loose produce scales with 1kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Legal Metrology fines.", proof: "Calibration Log" }
            ]
        },
        {
            title: "Maintenance & IT Uptime",
            department: "Technical",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "Infrastructure uptime and asset protection.",
            icon: "wrench",
            tasks: [
                { id: "RET-MNT-01", technicalProtocol: "HVAC Thermal Pulse", floorAction: "Log AC discharge temp (Target 23°C in-store).", priority: "Medium", riskLevel: "Low", consequence: "Customer discomfort and short dwell.", proof: "BMS Reading" },
                { id: "RET-MNT-02", technicalProtocol: "Emergency Power Readiness", floorAction: "Inspect DG fuel and UPS battery status.", priority: "High", riskLevel: "High", consequence: "Total blackout and billing halt.", proof: "Test Log" },
                { id: "RET-MNT-03", technicalProtocol: "Escalator/Lift Safety", floorAction: "Test emergency stop buttons before opening.", priority: "High", riskLevel: "High", consequence: "Catastrophic customer injury.", proof: "Safety Log" },
                { id: "RET-MNT-04", technicalProtocol: "POS Printer Hygiene", floorAction: "Clean thermal heads to ensure legible receipts.", priority: "Low", riskLevel: "Low", consequence: "Customer service friction.", proof: "Visual Check" },
                { id: "RET-MNT-05", technicalProtocol: "Technical Closure", floorAction: "Log all unresolved P1 job cards for GM alert.", priority: "High", riskLevel: "Low", consequence: "Extended asset downtime.", proof: "Signed Log" }
            ]
        },
        {
            title: "Safety & EHS",
            department: "Safety",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Life-safety and regulatory compliance protocols.",
            icon: "shield-alert",
            tasks: [
                { id: "RET-SAF-01", technicalProtocol: "Fire Exit Clearance (CCP)", floorAction: "Verify all fire escapes are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment (Never-event).", proof: "Patrol Log" },
                { id: "RET-SAF-02", technicalProtocol: "Wet-Floor Signage Guard", floorAction: "Confirm signage use during all mopping cycles.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Visual Check" },
                { id: "RET-SAF-03", technicalProtocol: "Fire Extinguisher Gauge", floorAction: "Confirm needle is in GREEN zone for all units.", priority: "High", riskLevel: "High", consequence: "Zero fire fighting capability.", proof: "Gauge Log" },
                { id: "RET-SAF-04", technicalProtocol: "Spill Kit Readiness", floorAction: "Check contents of chemical spill kits in store.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental hazards.", proof: "Inventory Check" },
                { id: "RET-SAF-05", technicalProtocol: "Final Nightly Safety Sign-off.", floorAction: "Submit site safety status to Regional Lead.", priority: "High", riskLevel: "Low", consequence: "Systemic risk gap.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Personnel & Certs",
            department: "HR",
            frequency: "Monthly",
            role: "Admin/HR Assistant",
            summary: "Staff competency and mandatory health governance.",
            icon: "graduation-cap",
            tasks: [
                { id: "RET-HR-01", technicalProtocol: "Health Cert Matrix (Grocery)", floorAction: "Verify valid certs for all fresh-food handlers.", priority: "High", riskLevel: "Medium", consequence: "Regulatory fines.", proof: "Med File" },
                { id: "RET-HR-02", technicalProtocol: "POSH Policy Display", floorAction: "Confirm policy is posted in staff break-rooms.", priority: "High", riskLevel: "High", consequence: "Legal liability.", proof: "Photo" },
                { id: "RET-HR-03", technicalProtocol: "Safety Training Log", floorAction: "Verify 4h/month safety training for all staff.", priority: "Medium", riskLevel: "Low", consequence: "Skill decay.", proof: "Matrix File" }
            ]
        }
    ]
};
