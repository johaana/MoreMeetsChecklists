
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
    description: "The definitive Sovereign v11.9 technical engine for physical retail. A unified system for Fashion, Jewelry, Electronics, and Grocery—standardizing 115+ technical control points across 10 distinct roles.",
    heroHeadline: "Margin Protection Infrastructure. Not Store Management.",
    heroSubheadline: "Protect your margin, stock, and store control daily with forensic protocols for Loss Prevention, Compliance, and Duty of Care.",
    pricingUrgency: "Preventing a single major theft or one brand-damaging customer incident saves 100x the cost of this system.",
    consultingAnchor: 5000,
    icon: "shopping-bag",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Retail Group Owners", "Store Managers", "Visual Merchandisers", "Loss Prevention Directors", "Regional Managers"],
    sampleItems: [
        { text: "<strong>Asset Shield Engine</strong>: Zero-fail protocols for Vault access, serialized tracking, and Fitting Room loss prevention.", icon: "shield-check" },
        { text: "<strong>Inventory Integrity</strong>: Daily cycle counts, expiry sweep logic, and 'Void-Bill' authorization to stop internal theft.", icon: "barcode" },
        { text: "<strong>Loss Prevention Protocol</strong>: High-risk bin searches, employee bag-checks, and anti-swap verification.", icon: "search-check" },
        { text: "<strong>Regulatory Compliance</strong>: Legal Metrology (scale calibration), MRP parity, and GST bill discipline.", icon: "scale" },
        { text: "<strong>Duty of Care</strong>: Thermal battery logs, wet-floor liability seals, and exit-path clearance audits.", icon: "shield-alert" },
        { text: "<strong>Category Layers</strong>: Specialized protocols for Fashion, Electronics, and Grocery (HACCP).", icon: "layout-grid" },
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
                { id: "RET-OPS-10", technicalProtocol: "Closing Gas/Thermal Seal", floorAction: "Verify all non-essential power and gas valves are SHUT.", priority: "High", riskLevel: "High", consequence: "Overnight fire disaster.", proof: "Closure Log" },
                { id: "RET-OPS-11", technicalProtocol: "Staff Shift Briefing", floorAction: "Brief team on daily sales targets and key promotions.", priority: "Medium", riskLevel: "Low", consequence: "Uninformed staff and missed targets.", proof: "Briefing Sheet" },
                { id: "RET-OPS-12", technicalProtocol: "Waste Log Verification", floorAction: "Manager sign-off on previous day's recorded waste/damage.", priority: "Medium", riskLevel: "Medium", consequence: "Untracked profit leakage.", proof: "Waste Sheet" },
                { id: "RET-OPS-13", technicalProtocol: "Incident Tracker Review", floorAction: "Review and close out minor incidents logged during shift.", priority: "High", riskLevel: "Medium", consequence: "Unaddressed hazards or liability.", proof: "Incident Log" },
                { id: "RET-OPS-14", technicalProtocol: "Mobile Phone Policy Audit", floorAction: "Verify staff compliance with in-store mobile usage rules.", priority: "Low", riskLevel: "Low", consequence: "Distracted service and poor brand image.", proof: "Walkthrough" },
                { id: "RET-OPS-15", technicalProtocol: "Daily Performance Sync", floorAction: "Update store-level sales goals and individual metrics.", priority: "Medium", riskLevel: "Low", consequence: "Loss of momentum.", proof: "Board Update" }
            ]
        },
        {
            title: "Fashion & Apparel - Fitting Rooms & Visuals",
            department: "Service",
            frequency: "Hourly",
            role: "Fashion Supervisor",
            summary: "Specific protocols for apparel retail to prevent theft and protect brand standards.",
            icon: "shirt",
            tasks: [
                { id: "RET-FSH-01", technicalProtocol: "Fitting Room Sweep", floorAction: "Check rooms for discarded tags or concealment tools.", priority: "High", riskLevel: "High", consequence: "Undetected shoplifting and shrinkage.", proof: "Hourly Sheet" },
                { id: "RET-FSH-02", technicalProtocol: "Hanger & Size Facing", floorAction: "Ensure all hangers face same direction and size tags are visible.", priority: "Low", riskLevel: "Low", consequence: "Sloppy shelf appearance.", proof: "Visual Check" },
                { id: "RET-FSH-03", technicalProtocol: "Defect Scan", floorAction: "Check for makeup stains or broken zippers on returned items.", priority: "Medium", riskLevel: "Low", consequence: "Reselling damaged goods.", proof: "Defect Log" },
                { id: "RET-FSH-04", technicalProtocol: "RFID Tag Integrity", floorAction: "Scan random rack samples for functional RFID tags.", priority: "High", riskLevel: "High", consequence: "EAS system failure.", proof: "Scan Report" },
                { id: "RET-FSH-05", technicalProtocol: "Mannequin Grooming", floorAction: "Adjust garments and poses on all window mannequins.", priority: "Low", riskLevel: "Low", consequence: "Poor visual brand authority.", proof: "Photo" },
                { id: "RET-FSH-06", technicalProtocol: "Two-Finger Rule Check", floorAction: "Verify uniform spacing between hangers on high-density rails.", priority: "Low", riskLevel: "Low", consequence: "Cluttered presentation.", proof: "Walkthrough" },
                { id: "RET-FSH-07", technicalProtocol: "Steaming Protocol", floorAction: "Verify 100% of floor-stock is steamed and wrinkle-free.", priority: "Medium", riskLevel: "Low", consequence: "Unprofessional garment display.", proof: "Visual Audit" },
                { id: "RET-FSH-08", technicalProtocol: "Alteration TAT Monitor", floorAction: "Track pending alterations against promised delivery time.", priority: "Medium", riskLevel: "Low", consequence: "Customer dissatisfaction.", proof: "Alteration Log" },
                { id: "RET-FSH-09", technicalProtocol: "Accessory Tangle Audit", floorAction: "Organize belts, scarves, and ties to prevent knotting.", priority: "Low", riskLevel: "Low", consequence: "Product damage.", proof: "Visual Check" },
                { id: "RET-FSH-10", technicalProtocol: "Shoe Display Symmetry", floorAction: "Check left/right alignment of all displayed footwear.", priority: "Low", riskLevel: "Low", consequence: "Aesthetic drift.", proof: "Visual Audit" }
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
                { id: "RET-TEC-03", technicalProtocol: "Firmware Reset", floorAction: "Wipe user photos/data from demo units.", priority: "Medium", riskLevel: "Low", consequence: "Privacy violations.", proof: "Reset Confirmation" },
                { id: "RET-TEC-04", technicalProtocol: "Display Charging Sync", floorAction: "Verify 100% of demo units are connected to power.", priority: "Medium", riskLevel: "Low", consequence: "Dead units reducing sales.", proof: "Walkthrough" },
                { id: "RET-TEC-05", technicalProtocol: "Serialized Inventory Check", floorAction: "Count high-value SKUs (CPUs, GPUs) in the locker.", priority: "High", riskLevel: "High", consequence: "Internal serialized theft.", proof: "Count Sheet" }
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
                { id: "RET-GRO-03", technicalProtocol: "Mist System Check", floorAction: "Verify produce mists are functional to prevent wilting.", priority: "Low", riskLevel: "Low", consequence: "Poor produce conversion.", proof: "Visual Check" },
                { id: "RET-GRO-04", technicalProtocol: "Raw/Cooked Segregation", floorAction: "Audit poultry storage to ensure zero contact with veggies.", priority: "High", riskLevel: "High", consequence: "Cross-contamination.", proof: "Visual Audit" },
                { id: "RET-GRO-05", technicalProtocol: "Scale Zero-Calibration", floorAction: "Zero-out all customer weighing scales at 8 AM.", priority: "High", riskLevel: "Medium", consequence: "Billing errors.", proof: "Calibration Log" }
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
                { id: "RET-SEC-03", technicalProtocol: "Staff Bag-Check Protocol", floorAction: "Execute random exit checks for on-duty personnel.", priority: "High", riskLevel: "High", consequence: "Internal shrinkage leakage.", proof: "Registry Note" },
                { id: "RET-SEC-04", technicalProtocol: "High-Risk Bin Search", floorAction: "Audit trash bags before removal for concealed goods.", priority: "High", riskLevel: "Medium", consequence: "Theft via waste channel.", proof: "Search Note" },
                { id: "RET-SEC-05", technicalProtocol: "Anti-Swap Luxury Logic", floorAction: "Independent SKU verification after high-value customer viewings.", priority: "High", riskLevel: "High", consequence: "substitution theft (Jewelry/Luxury).", proof: "Registry Audit" }
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
                { id: "RET-INV-02", technicalProtocol: "Price Label Parity", floorAction: "Spot check 20 shelf-edge labels against POS price.", priority: "High", riskLevel: "Medium", consequence: "Legal Metrology fines and guest disputes.", proof: "Audit Sheet" },
                { id: "RET-INV-03", technicalProtocol: "Bin Location Integrity", floorAction: "Verify 10 random SKUs match their system bin.", priority: "Medium", riskLevel: "Low", consequence: "Picker inefficiency.", proof: "Audit Sheet" },
                { id: "RET-INV-04", technicalProtocol: "Damaged Stock Triage", floorAction: "Move all 'Yellow-Tag' items to the repair zone.", priority: "Low", riskLevel: "Low", consequence: "Damaged goods on shelves.", proof: "Transfer Log" },
                { id: "RET-INV-05", technicalProtocol: "Receiving Variance Pulse", floorAction: "Reconcile daily GRN against physical invoices.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight/units.", proof: "Match Note" }
            ]
        },
        {
            title: "Visual Merchandising Engine",
            department: "VM",
            frequency: "Daily",
            role: "VM Lead",
            summary: "Protects the brand visual standard and sales atmosphere.",
            icon: "eye",
            tasks: [
                { id: "RET-VM-01", technicalProtocol: "Planogram Parity Audit", floorAction: "Verify shelf layout matches the Master Planogram.", priority: "Medium", riskLevel: "Low", consequence: "Reduced conversion and brand drift.", proof: "Photo Audit" },
                { id: "RET-VM-02", technicalProtocol: "Focal Point Lighting", floorAction: "Verify 100% of spotlights are focused and functional.", priority: "Low", riskLevel: "Low", consequence: "Dull product presentation.", proof: "Visual Audit" },
                { id: "RET-VM-03", technicalProtocol: "Window Glass Integrity", floorAction: "Check for fingerprints or smudges on facade.", priority: "Low", riskLevel: "Low", consequence: "Low-end brand image.", proof: "Cleaning Log" },
                { id: "RET-VM-04", technicalProtocol: "Seasonal POS Prop Scan", floorAction: "Ensure all promo banners are straight and clean.", priority: "Low", riskLevel: "Low", consequence: "Amateur marketing.", proof: "Visual Check" },
                { id: "RET-VM-05", technicalProtocol: "Entrance Greeting Path", floorAction: "Verify clear path and symmetry at the entry.", priority: "Medium", riskLevel: "Low", consequence: "Guest friction.", proof: "Photo" }
            ]
        },
        {
            title: "Customer Experience & Floor Discipline",
            department: "Service",
            frequency: "Daily",
            role: "Service Lead",
            summary: "Governs staff behavior and service TAT.",
            icon: "user-check",
            tasks: [
                { id: "RET-CX-01", technicalProtocol: "Greeting Compliance Audit", floorAction: "Verify staff are greeting customers within 10ft / 10s.", priority: "Medium", riskLevel: "Low", consequence: "Cold store atmosphere.", proof: "Observation Log" },
                { id: "RET-CX-02", technicalProtocol: "Queue Wait-Time Pulse", floorAction: "Monitor billing queue for > 3 customers; deploy backup.", priority: "High", riskLevel: "Low", consequence: "Basket abandonment.", proof: "Wait Log" },
                { id: "RET-CX-03", technicalProtocol: "Complaint Resolution TAT", floorAction: "Verify 100% of floor grievances resolved in < 15 mins.", priority: "High", riskLevel: "High", consequence: "Viral viral reputation damage.", proof: "Issue Log" },
                { id: "RET-CX-04", technicalProtocol: "Staff Floor Allocation", floorAction: "Confirm 100% coverage of high-traffic zones.", priority: "High", riskLevel: "Medium", consequence: "Unassisted customers and lost sales.", proof: "Roster Check" },
                { id: "RET-CX-05", technicalProtocol: "Digital Feedback Pulse", floorAction: "Review Google Maps reviews from last 24h.", priority: "Medium", riskLevel: "Low", consequence: "Damaged brand ranking.", proof: "Dashboard" }
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
                { id: "RET-FIN-03", technicalProtocol: "Counter Skimmer Search", floorAction: "Inspect card terminals for any unauthorized overlays.", priority: "High", riskLevel: "High", consequence: "Massive customer data breach.", proof: "Visual Check" },
                { id: "RET-FIN-04", technicalProtocol: "Discount Code Review", floorAction: "Verify reason codes for all employee discounts used.", priority: "Medium", riskLevel: "Medium", consequence: "Margin erosion.", proof: "System Log" },
                { id: "RET-FIN-05", technicalProtocol: "Cash-to-Bank Bag Seal", floorAction: "Witness witnessed seal of cash bags for deposit.", priority: "High", riskLevel: "High", consequence: "Internal transit theft.", proof: "Bank Slip" }
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
                { id: "RET-MNT-03", technicalProtocol: "POS Printer Test", floorAction: "Verify connectivity to all receipt printers.", priority: "Medium", riskLevel: "Low", consequence: "Service friction during peak.", proof: "Print Test" },
                { id: "RET-MNT-04", technicalProtocol: "Escalator/Lift Vitals", floorAction: "Verify functionality of auto-stop/rescue systems.", priority: "High", riskLevel: "High", consequence: "Fatal injury risk.", proof: "Daily Test" },
                { id: "RET-MNT-05", technicalProtocol: "Technical Closure", floorAction: "Log all P1 breakdowns for morning alert.", priority: "High", riskLevel: "Low", consequence: "Asset decay.", proof: "Signed Log" }
            ]
        },
        {
            title: "Safety & Duty of Care",
            department: "Safety",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Life-safety and regulatory compliance protocols.",
            icon: "shield-alert",
            tasks: [
                { id: "RET-SAF-01", technicalProtocol: "Fire Exit Clearance (CCP)", floorAction: "Verify all fire escapes are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment (Never-event).", proof: "Patrol Log" },
                { id: "RET-SAF-02", technicalProtocol: "Wet-Floor Signage Guard", floorAction: "Confirm signage use during all mopping cycles.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Visual Check" },
                { id: "RET-SAF-03", technicalProtocol: "First-Aid Kit Expiry", floorAction: "Check stock of burn-gel and bandages.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat injuries.", proof: "Stock Check" },
                { id: "RET-SAF-04", technicalProtocol: "Electrical Panel Heat Scan", floorAction: "Check server panels for overheating signs.", priority: "High", riskLevel: "High", consequence: "Electrical fire.", proof: "Panel Log" },
                { id: "RET-SAF-05", technicalProtocol: "Waste Bay Sanitation", floorAction: "Audit bin covers and odor control in alley.", priority: "Medium", riskLevel: "Medium", consequence: "Pests.", proof: "Walkthrough" },
                { id: "RET-SAF-06", technicalProtocol: "Legal Metrology Audit", floorAction: "Verify 100% calibration certs for all retail scales.", priority: "High", riskLevel: "High", consequence: "Govt seizure of equipment.", proof: "Cert Registry" },
                { id: "RET-SAF-07", technicalProtocol: "MRP Parity Pulse", floorAction: "Audit 5 items to ensure shelf price <= MRP.", priority: "High", riskLevel: "High", consequence: "Consumer court prosecution.", proof: "Audit Sheet" },
                { id: "RET-SAF-08", technicalProtocol: "POSH Policy Display", floorAction: "Verify policy posted in staff break-room.", priority: "High", riskLevel: "High", consequence: "Legal non-compliance.", proof: "Photo" },
                { id: "RET-SAF-09", technicalProtocol: "CCTV Telemetry Seal", floorAction: "Confirm 30-day recording backup is intact.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance.", proof: "System Screen" },
                { id: "RET-SAF-10", technicalProtocol: "Staff Health Matrix", floorAction: "Verify health certs for grocery handlers.", priority: "High", riskLevel: "Medium", consequence: "FSSAI audit failure.", proof: "Registry" }
            ]
        }
    ]
};

    