
import type { PremiumPack } from "@/lib/premium-packs";

export const retail_operations_system: PremiumPack = {
    id: 'retail_operations_system',
    title: "Retail Operations System",
    priceINR: 2999,
    priceUSD: 29,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Retail",
    description: "The definitive Sovereign v11.9 technical engine for physical retail. A unified system for Fashion, Jewelry, Electronics, and Grocery—standardizing 250+ technical control points across 12 distinct roles.",
    heroHeadline: "One Engine. Twelve Specialized Role Profiles.",
    heroSubheadline: "The professional plug for revenue leakage and brand drift—across every unit in your retail group.",
    pricingUrgency: "Preventing a single major theft or one brand-damaging customer incident saves 100x the cost of this system.",
    consultingAnchor: 5000,
    icon: "shopping-bag",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Retail Group Owners", "Store Managers", "Visual Merchandisers", "Loss Prevention Directors", "Regional Managers"],
    sampleItems: [
        { text: "<strong>Sovereign Mode Selector</strong>: Toggle between High-Value (Jewelry), Perishable (Grocery), or Technical (Electronics) modules.", icon: "settings-2" },
        { text: "<strong>Visual Merchandising Engine</strong>: Planogram parity audits, window display QC, and lighting standards for the <strong>Visual Merchandiser</strong>.", icon: "eye" },
        { text: "<strong>Asset Shield Engine</strong>: Zero-fail protocols for Vault access, serialized tracking, and Fitting Room loss prevention.", icon: "shield-check" },
        { text: "<strong>Inventory Integrity</strong>: Daily cycle counts, expiry sweep logic, and 'Void-Bill' authorization to stop internal theft.", icon: "barcode" },
        { text: "<strong>Maintenance & Assets</strong>: Rigorous uptime logs for POS hardware, AC banks, and security gate calibration for the <strong>Maintenance Lead</strong>.", icon: "wrench" },
        { text: "<strong>Institutional Memory</strong>: Built-in Trainer's Notes ensure that standards never leave when your best manager resigns.", icon: "history" }
    ],
    checklists: [
        {
            title: "Global Retail Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Group Operations Director",
            summary: "Portfolio-wide risk and profit oversight for multi-unit retail groups.",
            icon: "crown",
            tasks: [
                { id: "RET-EXE-01", technicalProtocol: "Inventory Shrinkage Synthesis", floorAction: "Review weekly stock discrepancy logs across all branches.", priority: "High", riskLevel: "High", consequence: "Unmonitored systemic internal theft.", proof: "Shrinkage Report" },
                { id: "RET-EXE-02", technicalProtocol: "Statutory Metrology Audit", floorAction: "Verify validity of weighing scale calibration certs for all units.", priority: "High", riskLevel: "Medium", consequence: "Heavy regulatory fines and equipment seizure.", proof: "Certificate Registry" },
                { id: "RET-EXE-03", technicalProtocol: "Public Liability Shield", floorAction: "Confirm active insurance coverage for 100% of retail sites.", priority: "High", riskLevel: "High", consequence: "Financial ruin during a customer accident.", proof: "Policy File" },
                { id: "RET-EXE-04", technicalProtocol: "Brand Standard Parity", floorAction: "Review mystery shopper scores: focus on 'Lobby' and 'Ambiance' fails.", priority: "Medium", riskLevel: "Low", consequence: "Dilution of brand prestige.", proof: "Audit Report" },
                { id: "RET-EXE-10", technicalProtocol: "Final Board Sign-off", floorAction: "Execute weekly strategic closure initials.", priority: "High", riskLevel: "Low", consequence: "Loss of executive oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Store Readiness & Command",
            department: "Operations",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Ensures the facility is safe, presentable, and operationally hardened before opening.",
            icon: "sunrise",
            tasks: [
                { id: "RET-OPS-01", technicalProtocol: "Lobby Ambiance Sensory Audit", floorAction: "Check Scent, Music, and Temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor guest first-impression.", proof: "Daily Log" },
                { id: "RET-OPS-02", technicalProtocol: "POS & Connectivity Sync", floorAction: "Verify all billing terminals and receipt printers are online.", priority: "High", riskLevel: "Medium", consequence: "Billing failure during morning rush.", proof: "System Screen" },
                { id: "RET-OPS-03", technicalProtocol: "Cash Float Integrity", floorAction: "Verify opening cash denominations in all cashier drawers.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue leakage.", proof: "Float Sheet" },
                { id: "RET-OPS-10", technicalProtocol: "Closing Gas/Thermal Seal", floorAction: "Verify all non-essential power and gas valves are SHUT.", priority: "High", riskLevel: "High", consequence: "Overnight fire disaster.", proof: "Closure Log" }
            ]
        },
        {
            title: "Visual Merchandising & QC",
            department: "Branding",
            frequency: "Daily",
            role: "Visual Merchandiser",
            summary: "Governs the visual standard, planogram parity, and sensory appeal.",
            icon: "eye",
            tasks: [
                { id: "RET-VM-01", technicalProtocol: "Planogram Parity Audit", floorAction: "Verify shelf/rail layout matches master SKU planogram.", priority: "High", riskLevel: "Low", consequence: "Brand dilution and missed cross-sell opportunities.", proof: "Photo Log" },
                { id: "RET-VM-02", technicalProtocol: "Window Display Integrity", floorAction: "Inspect mannequins for correct fit and current campaign props.", priority: "High", riskLevel: "Low", consequence: "Stale or disheveled window reducing footfall.", proof: "Visual Audit" },
                { id: "RET-VM-03", technicalProtocol: "Gobo & Spotlight Focus", floorAction: "Check that all focal lighting hits key product zones.", priority: "Medium", riskLevel: "Low", consequence: "Dull displays failing to grab attention.", proof: "Walkthrough" },
                { id: "RET-VM-04", technicalProtocol: "Price Point Visibility", floorAction: "Verify promo talkers and price tags are clean and visible.", priority: "High", riskLevel: "Medium", consequence: "Customer friction and lost conversions.", proof: "Price Check" },
                { id: "RET-VM-05", technicalProtocol: "Sensory Branding Pulse", floorAction: "Verify lobby scent-machine level and music volume.", priority: "Low", riskLevel: "Low", consequence: "Uninviting ambiance.", proof: "Daily Log" }
            ]
        },
        {
            title: "Luxury & High-Value Module",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Specialized governance for Jewelry and Luxury environments.",
            icon: "gem",
            tasks: [
                { id: "RET-LUX-01", technicalProtocol: "Vault Dual-Sign Logic", floorAction: "Witness witnessed opening and closing of main inventory safe.", priority: "High", riskLevel: "High", consequence: "Single point of failure for massive internal theft.", proof: "Dual-Sign Register" },
                { id: "RET-LUX-02", technicalProtocol: "Anti-Swap Protocol", floorAction: "Enforce 1-item-at-a-time viewing policy at all display counters.", priority: "High", riskLevel: "High", consequence: "Sophisticated substitution theft by customers.", proof: "Supervisor Audit" },
                { id: "RET-LUX-03", technicalProtocol: "Serialized Inventory Count", floorAction: "Blind count of Top 10 high-LTV items vs system records.", priority: "High", riskLevel: "High", consequence: "Undetected shrinkage.", proof: "Count Sheet" }
            ]
        },
        {
            title: "Perishable & Grocery Module",
            department: "Inventory",
            frequency: "Daily",
            role: "Inventory Lead",
            summary: "Cold-chain and freshness governance for Grocery.",
            icon: "shopping-basket",
            tasks: [
                { id: "RET-GRO-01", technicalProtocol: "Cold Chain Integrity (CCP)", floorAction: "Log temperatures of all chillers and freezers (< 5°C).", priority: "High", riskLevel: "High", consequence: "Inventory spoilage and health fines.", proof: "Temperature Log" },
                { id: "RET-GRO-02", technicalProtocol: "Daily Expiry Sweep", floorAction: "Identify items with < 48h shelf life for markdown.", priority: "High", riskLevel: "Medium", consequence: "Legal fines for selling expired perishables.", proof: "Sweep Registry" },
                { id: "RET-GRO-03", technicalProtocol: "Metrology Precision Test", floorAction: "Test store scales with 1kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Regulatory fines.", proof: "Calibration Note" }
            ]
        },
        {
            title: "Technical & Electronics Module",
            department: "Safety",
            frequency: "Daily",
            role: "Ops Lead",
            summary: "Thermal safety and asset protection for Electronics.",
            icon: "zap",
            tasks: [
                { id: "RET-TEC-01", technicalProtocol: "Lithium Thermal Pulse", floorAction: "Inspect display units for battery swelling or deformation.", priority: "High", riskLevel: "High", consequence: "Spontaneous in-store battery fire.", proof: "Visual Log" },
                { id: "RET-TEC-02", technicalProtocol: "Demo Reset Protocol", floorAction: "Verify all demo units are wiped of customer data.", priority: "Medium", riskLevel: "Low", consequence: "Privacy violations.", proof: "Reset Confirmation" }
            ]
        },
        {
            title: "Asset Shield & Loss Prevention",
            department: "Security",
            frequency: "Daily",
            role: "Security Head",
            summary: "Hardening the perimeter and protecting high-value inventory.",
            icon: "shield-check",
            tasks: [
                { id: "RET-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and focal points.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or suits.", proof: "System Screen" },
                { id: "RET-SEC-02", technicalProtocol: "Fitting Room Sweep", floorAction: "Inspect stalls every 30 mins for hidden tags.", priority: "Medium", riskLevel: "Medium", consequence: "Concealment theft.", proof: "Hourly Sheet" }
            ]
        },
        {
            title: "Maintenance & Asset Uptime",
            department: "Engineering",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "Ensures 100% equipment uptime and facility safety.",
            icon: "wrench",
            tasks: [
                { id: "RET-MNT-01", technicalProtocol: "HVAC Discharge Check", floorAction: "Log AC output temp in high-traffic zones (Target 23°C).", priority: "High", riskLevel: "Medium", consequence: "Customer heat discomfort reducing dwell time.", proof: "Temp Reading" },
                { id: "RET-MNT-02", technicalProtocol: "EAS Gate Calibration", floorAction: "Test security gate alarm trigger with a master tag.", priority: "High", riskLevel: "High", consequence: "Undetected shoplifting.", proof: "Test Log" },
                { id: "RET-MNT-03", technicalProtocol: "POS Printer Heat-Sync", floorAction: "Clear all printer rollers of dust and verify speed.", priority: "Low", riskLevel: "Low", consequence: "Checkout gridlock during peak hours.", proof: "Test Print" },
                { id: "RET-MNT-04", technicalProtocol: "Emergency Power Readiness", floorAction: "Check backup generator fuel and battery status.", priority: "High", riskLevel: "High", consequence: "Total blackout and refund crisis.", proof: "Fuel Log" },
                { id: "RET-MNT-05", technicalProtocol: "Lighting Bank Closure", floorAction: "Verify timer settings for night-time security lights.", priority: "Medium", riskLevel: "Medium", consequence: "Vulnerable perimeter or energy waste.", proof: "Visual Check" }
            ]
        },
        {
            title: "Sourcing & Store Logistics",
            department: "Stores",
            frequency: "Weekly",
            role: "Logistics Lead",
            summary: "Profit protection and quality control at the entry point.",
            icon: "truck",
            tasks: [
                { id: "RET-LOG-01", technicalProtocol: "Receiving Audit Protocol", floorAction: "Spot check incoming cases for seal integrity.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing stock.", proof: "Receiving Note" }
            ]
        },
        {
            title: "Customer Experience & ORM",
            department: "Guest Relations",
            frequency: "Daily",
            role: "Experience Lead",
            summary: "Protects the digital brand and reputation.",
            icon: "star",
            tasks: [
                { id: "RET-CX-01", technicalProtocol: "Review Response Pulse", floorAction: "Reply to all Google/Map reviews in < 24h.", priority: "High", riskLevel: "Medium", consequence: "Damaged brand search ranking.", proof: "Dashboard" }
            ]
        },
        {
            title: "Personnel & Competency Matrix",
            department: "HR",
            frequency: "Monthly",
            role: "HR Assistant",
            summary: "Staff readiness and legal display compliance.",
            icon: "graduation-cap",
            tasks: [
                { id: "RET-HR-01", technicalProtocol: "Grooming & ID Compliance", floorAction: "Inspect clean uniforms and badge visibility.", priority: "Low", riskLevel: "Low", consequence: "Loss of authority brand image.", proof: "Briefing Log" }
            ]
        },
        {
            title: "Finance & Cash Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance Lead",
            summary: "Revenue reconciliation and profit protection.",
            icon: "banknote",
            tasks: [
                { id: "RET-FIN-01", technicalProtocol: "Revenue Reconcile Pulse", floorAction: "Match cash in hand to POS daily report.", priority: "High", riskLevel: "High", consequence: "Untraceable internal cashier theft.", proof: "Settlement Log" }
            ]
        }
    ]
};
