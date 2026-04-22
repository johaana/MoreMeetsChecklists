
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
    description: "The definitive Sovereign v11.9 technical engine for physical retail. A unified system for Fashion, Jewelry, Electronics, and Grocery—standardizing 250+ technical control points.",
    heroHeadline: "One Engine. Four Specialized Governance Modes.",
    heroSubheadline: "The professional plug for revenue leakage and asset safety—across every unit in your retail group.",
    pricingUrgency: "Preventing a single major theft or one regulatory METROLOGY fine saves 100x the cost of this system.",
    consultingAnchor: 5000,
    icon: "shopping-bag",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Retail Group Owners", "Store Managers", "Operations Heads", "Loss Prevention Directors", "Regional Managers"],
    sampleItems: [
        { text: "<strong>Sovereign Mode Selector</strong>: Toggle between High-Value (Jewelry), Perishable (Grocery), or Technical (Electronics) modules.", icon: "settings-2" },
        { text: "<strong>Asset Shield Engine</strong>: Zero-fail protocols for Vault access, serialized tracking, and Fitting Room loss prevention.", icon: "shield-check" },
        { text: "<strong>Inventory Integrity</strong>: Daily cycle counts, expiry sweep logic, and 'Void-Bill' authorization to stop internal theft.", icon: "barcode" },
        { text: "<strong>Safety & Thermal Pulse</strong>: Mandatory daily checks for lithium battery swelling and electrical bank closing seals.", icon: "zap" },
        { text: "<strong>Visual QC & Ambiance</strong>: Planogram parity audits and sensory branding (Scent/Music) scores to protect brand rankings.", icon: "eye" },
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
                { id: "RET-EXE-05", technicalProtocol: "Lease & Statutory Calendar", floorAction: "Audit upcoming renewal dates for retail space leases.", priority: "Medium", riskLevel: "Medium", consequence: "Forced eviction or steep penalty spikes.", proof: "Registry Audit" },
                { id: "RET-EXE-06", technicalProtocol: "Manager Peak-Hour Presence", floorAction: "Audit weekend attendance logs for Store Managers.", priority: "Low", riskLevel: "Low", consequence: "Lack of leadership during high-traffic revenue hours.", proof: "Roster Log" },
                { id: "RET-EXE-07", technicalProtocol: "Marketing Activation ROI", floorAction: "Reconcile campaign spend against branch footfall uplift.", priority: "Low", riskLevel: "Low", consequence: "Wasted marketing capital.", proof: "ROI Report" },
                { id: "RET-EXE-08", technicalProtocol: "Sentinel Theft Review", floorAction: "Review 'Major Loss' tracker for organized retail crime patterns.", priority: "High", riskLevel: "High", consequence: "Repeated victimization by criminal rings.", proof: "Incident Log" },
                { id: "RET-EXE-09", technicalProtocol: "Fixed Asset Tagging", floorAction: "Verify tagging of new POS hardware and security gates.", priority: "Low", riskLevel: "Low", consequence: "Loss of property during renovations.", proof: "Asset Register" },
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
                { id: "RET-OPS-04", technicalProtocol: "Visual QC Planogram Audit", floorAction: "Verify window display matches current campaign signage.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution and missed promos.", proof: "Photo" },
                { id: "RET-OPS-05", technicalProtocol: "Restroom Hygiene Pulse", floorAction: "Verify cleaning frequency matches 60-min cycle.", priority: "High", riskLevel: "Low", consequence: "Primary driver of negative brand reviews.", proof: "Hourly Sheet" },
                { id: "RET-OPS-06", technicalProtocol: "Staff Grooming & ID", floorAction: "Check clean uniforms and name-tag visibility during briefing.", priority: "Low", riskLevel: "Low", consequence: "Loss of authority brand image.", proof: "Briefing Log" },
                { id: "RET-OPS-07", technicalProtocol: "Queue Management Setup", floorAction: "Check battery status of hand-held scanners and line stanchions.", priority: "Low", riskLevel: "Low", consequence: "Check-out gridlock during busy shifts.", proof: "Visual Check" },
                { id: "RET-OPS-08", technicalProtocol: "Price Label Integrity", floorAction: "Spot check 10 items to ensure shelf price matches POS system.", priority: "High", riskLevel: "Medium", consequence: "Legal fines and customer disputes.", proof: "Price Audit" },
                { id: "RET-OPS-09", technicalProtocol: "Lighting & Facade Pulse", floorAction: "Ensure all external sign lights are functional by 6 PM.", priority: "Low", riskLevel: "Low", consequence: "Closed store appearance during open hours.", proof: "Visual Check" },
                { id: "RET-OPS-10", technicalProtocol: "Closing Gas/Thermal Seal", floorAction: "Verify all non-essential power and gas valves are SHUT.", priority: "High", riskLevel: "High", consequence: "Overnight fire disaster.", proof: "Closure Log" }
            ]
        },
        {
            title: "Luxury & High-Value Module",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief / Store Lead",
            summary: "Specialized governance for Jewelry and Luxury environments.",
            icon: "gem",
            tasks: [
                { id: "RET-LUX-01", technicalProtocol: "Vault Dual-Sign Logic", floorAction: "Witness witnessed opening and closing of main inventory safe.", priority: "High", riskLevel: "High", consequence: "Single point of failure for massive internal theft.", proof: "Dual-Sign Register" },
                { id: "RET-LUX-02", technicalProtocol: "Anti-Swap Protocol", floorAction: "Enforce 1-item-at-a-time viewing policy at all display counters.", priority: "High", riskLevel: "High", consequence: "Sophisticated substitution theft by customers.", proof: "Supervisor Audit" },
                { id: "RET-LUX-03", technicalProtocol: "Serialized Inventory Count", floorAction: "Blind count of Top 10 high-LTV items vs system records.", priority: "High", riskLevel: "High", consequence: "Undetected shrinkage of high-value assets.", proof: "Count Sheet" },
                { id: "RET-LUX-04", technicalProtocol: "Showcase Glass Integrity", floorAction: "Check for chips, scratches or loose seals on display units.", priority: "Medium", riskLevel: "Medium", consequence: "Vulnerability to 'smash and grab' attacks.", proof: "Visual Check" },
                { id: "RET-LUX-05", technicalProtocol: "Diamond Tester Calibration", floorAction: "Verify accuracy of electronic stone testers pre-opening.", priority: "High", riskLevel: "High", consequence: "Accepting/Selling counterfeit stock.", proof: "Test Log" }
            ]
        },
        {
            title: "Perishable & Grocery Module",
            department: "Inventory",
            frequency: "Daily",
            role: "Inventory Lead",
            summary: "Cold-chain and freshness governance for Grocery and Supermarkets.",
            icon: "shopping-basket",
            tasks: [
                { id: "RET-GRO-01", technicalProtocol: "Cold Chain Integrity (CCP)", floorAction: "Log temperatures of all open-deck chillers and closed freezers (< 5°C).", priority: "High", riskLevel: "High", consequence: "Mass bacterial growth and inventory spoilage.", proof: "Temperature Log" },
                { id: "RET-GRO-02", technicalProtocol: "Daily Expiry Sweep", floorAction: "Identify items with < 48h shelf life for immediate markdown.", priority: "High", riskLevel: "Medium", consequence: "Legal fines for selling expired perishables.", proof: "Sweep Registry" },
                { id: "RET-GRO-03", technicalProtocol: "Metrology Precision Test", floorAction: "Test store weighing scales with 1kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Regulatory fines and customer overcharging.", proof: "Calibration Note" },
                { id: "RET-GRO-04", technicalProtocol: "Spill Response Pulse", floorAction: "Check for leaks near oil or liquid aisles every 2 hours.", priority: "High", riskLevel: "High", consequence: "Massive slip-and-fall liability claims.", proof: "Hourly Log" },
                { id: "RET-GRO-05", technicalProtocol: "Cross-Contamination Audit", floorAction: "Verify segregation of raw meat vs produce in prep zones.", priority: "High", riskLevel: "High", consequence: "Food poisoning outbreak.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Technical & Electronics Module",
            department: "Safety",
            frequency: "Daily",
            role: "Operations Lead",
            summary: "Thermal safety and asset protection for Electronics Showrooms.",
            icon: "zap",
            tasks: [
                { id: "RET-TEC-01", technicalProtocol: "Lithium Thermal Pulse", floorAction: "Inspect display demo units for battery swelling or deformation.", priority: "High", riskLevel: "High", consequence: "Spontaneous in-store battery fire.", proof: "Visual Log" },
                { id: "RET-TEC-02", technicalProtocol: "EAS Security Gate Test", floorAction: "Walk a test-tag through main entrance to verify alarm trigger.", priority: "High", riskLevel: "High", consequence: "Unchecked shoplifting of high-value units.", proof: "Test Log" },
                { id: "RET-TEC-03", technicalProtocol: "Demo Reset Protocol", floorAction: "Verify all demo units are wiped of previous customer data.", priority: "Medium", riskLevel: "Low", consequence: "Privacy violations and brand damage.", proof: "Reset Confirmation" },
                { id: "RET-TEC-04", technicalProtocol: "Surge Protector Load", floorAction: "Ensure no daisy-chaining of power strips in display banks.", priority: "High", riskLevel: "High", consequence: "Electrical circuit overload and fire risk.", proof: "Walkthrough" },
                { id: "RET-TEC-05", technicalProtocol: "Digital Signage Refresh", floorAction: "Confirm trailer/ad loops are current and playing correctly.", priority: "Low", riskLevel: "Low", consequence: "Marketing irrelevance.", proof: "Visual Check" }
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
                { id: "RET-SEC-02", technicalProtocol: "Fitting Room Sweep", floorAction: "Inspect stalls every 30 mins for hidden tags or debris.", priority: "Medium", riskLevel: "Medium", consequence: "Concealment theft or unhygienic experience.", proof: "Hourly Sheet" },
                { id: "RET-SEC-03", technicalProtocol: "POS Void Bill Authorization", floorAction: "Manager sign-off on 100% of shift cancellations.", priority: "High", riskLevel: "High", consequence: "Theft masked as billing errors.", proof: "POS Audit" },
                { id: "RET-SEC-04", technicalProtocol: "Guard Sobriety Pulse", floorAction: "Random alcohol check for night shift security personnel.", priority: "High", riskLevel: "High", consequence: "Vulnerable venue perimeter overnight.", proof: "Test Note" },
                { id: "RET-SEC-05", technicalProtocol: "Fire Exit Clearance", floorAction: "Physically verify fire exits are unlocked and unobstructed.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment (Never-Event).", proof: "Patrol Log" }
            ]
        }
    ]
};
