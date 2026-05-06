
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
            title: "Fashion & Apparel - Fitting Rooms",
            department: "Service",
            frequency: "Hourly",
            role: "Floor Supervisor",
            summary: "Specific protocols for apparel retail to prevent theft and protect brand standards.",
            icon: "shirt",
            tasks: [
                { id: "RET-FSH-01", technicalProtocol: "Fitting Room Sweep", floorAction: "Check rooms for discarded tags or concealment tools.", priority: "High", riskLevel: "High", consequence: "Undetected shoplifting and shrinkage.", proof: "Hourly Sheet" },
                { id: "RET-FSH-02", technicalProtocol: "Hanger & Size Facing", floorAction: "Ensure all hangers face same direction and size tags are visible.", priority: "Low", riskLevel: "Low", consequence: "Sloppy shelf appearance.", proof: "Visual Check" },
                { id: "RET-FSH-03", technicalProtocol: "Defect Scan", floorAction: "Check for makeup stains or broken zippers on returned items.", priority: "Medium", riskLevel: "Low", consequence: "Reselling damaged goods.", proof: "Defect Log" }
            ]
        },
        {
            title: "Electronics & Tech Demo",
            department: "Electronics",
            frequency: "Daily",
            role: "Tech Lead",
            summary: "Thermal safety and serialized security for high-value devices.",
            icon: "zap",
            tasks: [
                { id: "RET-TEC-01", technicalProtocol: "Thermal Battery Audit", floorAction: "Inspect demo phones/laptops for battery swelling.", priority: "High", riskLevel: "High", consequence: "Lithium-ion fire in showroom.", proof: "Visual Log" },
                { id: "RET-TEC-02", technicalProtocol: "EAS Tether Test", floorAction: "Tug on security wires to ensure alarms trigger.", priority: "High", riskLevel: "High", consequence: "Theft of display assets.", proof: "Test Log" },
                { id: "RET-TEC-03", technicalProtocol: "Firmware Reset", floorAction: "Wipe user photos/data from demo units.", priority: "Medium", riskLevel: "Low", consequence: "Privacy violations.", proof: "Reset Confirmation" }
            ]
        },
        {
            title: "Grocery & Perishables (HACCP)",
            department: "Fresh",
            frequency: "Daily",
            role: "Fresh Lead",
            summary: "Cold-chain integrity and expiry governance for supermarkets.",
            icon: "shopping-basket",
            tasks: [
                { id: "RET-GRO-01", technicalProtocol: "Cold-Chain Pulse", floorAction: "Log temperatures of all chillers and freezers.", priority: "High", riskLevel: "High", consequence: "Mass spoilage and health department fines.", proof: "Temp Log" },
                { id: "RET-GRO-02", technicalProtocol: "Expiry Sweep", floorAction: "Identify and markdown items with < 48h shelf life.", priority: "High", riskLevel: "High", consequence: "Selling expired perishables.", proof: "Sweep Report" },
                { id: "RET-GRO-03", technicalProtocol: "Mist System Check", floorAction: "Verify produce mists are functional to prevent wilting.", priority: "Low", riskLevel: "Low", consequence: "Poor produce conversion.", proof: "Visual Check" }
            ]
        },
        {
            title: "Loss Prevention & Asset Shield",
            department: "Security",
            frequency: "Daily",
            role: "Loss Prevention Lead",
            summary: "Hardens the store perimeter and protects institutional assets.",
            icon: "shield-check",
            tasks: [
                { id: "RET-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance/police.", proof: "System Screen" },
                { id: "RET-SEC-02", technicalProtocol: "Loading Bay Lockdown", floorAction: "Physically confirm all bay shutters are locked at EOD.", priority: "High", riskLevel: "High", consequence: "Vulnerable after-hours perimeter.", proof: "Visual Check" },
                { id: "RET-SEC-03", technicalProtocol: "Staff Bag-Check Protocol", floorAction: "Execute random exit checks for on-duty personnel.", priority: "High", riskLevel: "High", consequence: "Internal shrinkage leakage.", proof: "Registry Note" }
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
                { id: "RET-INV-02", technicalProtocol: "Price Label Parity", floorAction: "Spot check 20 shelf-edge labels against POS price.", priority: "High", riskLevel: "Medium", consequence: "Legal Metrology fines and guest disputes.", proof: "Audit Sheet" }
            ]
        },
        {
            title: "Visual Merchandising",
            department: "VM",
            frequency: "Daily",
            role: "VM Lead",
            summary: "Protects the brand visual standard and sales atmosphere.",
            icon: "eye",
            tasks: [
                { id: "RET-VM-01", technicalProtocol: "Planogram Parity Audit", floorAction: "Verify shelf layout matches the Master Planogram.", priority: "Medium", riskLevel: "Low", consequence: "Reduced conversion and brand drift.", proof: "Photo Audit" },
                { id: "RET-VM-02", technicalProtocol: "Focal Point Lighting", floorAction: "Verify 100% of spotlights are focused and functional.", priority: "Low", riskLevel: "Low", consequence: "Dull product presentation.", proof: "Visual Audit" }
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
                { id: "RET-FIN-02", technicalProtocol: "Void Bill Authorization", floorAction: "Manager sign-off on 100% of cancelled/deleted bills.", priority: "High", riskLevel: "High", consequence: "Theft masked as 'errors'.", proof: "POS Audit" }
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
                { id: "RET-MNT-02", technicalProtocol: "Emergency Power Readiness", floorAction: "Inspect DG fuel and UPS battery status.", priority: "High", riskLevel: "High", consequence: "Total blackout and billing halt.", proof: "Test Log" }
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
                { id: "RET-SAF-02", technicalProtocol: "Wet-Floor Signage Guard", floorAction: "Confirm signage use during all mopping cycles.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Visual Check" }
            ]
        }
    ]
};
