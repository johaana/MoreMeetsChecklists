
import type { PremiumPack } from "@/lib/premium-packs";

export const retail_operations_system: PremiumPack = {
    id: 'retail_operations_system',
    title: "Retail Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Retail",
    description: "The definitive Sovereign v15.0 technical engine for physical retail. Hardening 130+ technical control points across 11 modules including Loss Prevention, Stock Integrity, and Metrology.",
    heroHeadline: "Margin Protection Infrastructure. Not Store Management.",
    heroSubheadline: "Protect your margin, stock, and store control daily with forensic protocols for Loss Prevention, Compliance, and Duty of Care.",
    pricingUrgency: "Preventing a single major theft or one brand-damaging customer incident saves 100x the cost of this system.",
    consultingAnchor: 5000,
    icon: "shopping-bag",
    badgeText: "V15.0 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Retail Group Owners", "Store Managers", "Visual Merchandisers", "Loss Prevention Directors", "Regional Managers"],
    sampleItems: [
        { text: "<strong>Asset Shield Engine</strong>: Zero-fail protocols for Vault access, serialized tracking, and Fitting Room loss prevention.", icon: "shield-check" },
        { text: "<strong>Inventory Integrity</strong>: Daily cycle counts, expiry sweep logic, and 'Void-Bill' authorization to stop internal theft.", icon: "barcode" },
        { text: "<strong>Loss Prevention Protocol</strong>: High-risk bin searches, employee bag-checks, and anti-swap verification.", icon: "search-check" },
        { text: "<strong>Regulatory Compliance</strong>: Legal Metrology (scale calibration), MRP parity, and GST bill discipline.", icon: "scale" },
        { text: "<strong>Duty of Care</strong>: Thermal battery logs, wet-floor liability seals, and exit-path clearance audits.", icon: "shield-alert" }
    ],
    checklists: [
        {
            title: "Executive Store Command",
            department: "Executive",
            frequency: "Daily",
            role: "Store Manager",
            summary: "High-level strategic oversight of margin, stock, and staff standards.",
            icon: "crown",
            tasks: [
                { id: "RT-EXE-01", technicalProtocol: "Revenue Reconciliation", floorAction: "Reconcile physical cash-in-hand against POS X-Reading report; witness seal of bank bags.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue theft.", proof: "Settlement Log" },
                { id: "RT-EXE-02", technicalProtocol: "Void Bill Audit", floorAction: "Examine 100% of deleted or voided transactions; verify staff name and reason code accuracy.", priority: "High", riskLevel: "Medium", consequence: "Theft masked as cashier errors.", proof: "POS Audit Sheet" },
                { id: "RT-EXE-03", technicalProtocol: "Mall Compliance Walkthrough", floorAction: "Verify storefront lighting and display height limits match mall management standards.", priority: "Medium", riskLevel: "Low", consequence: "Fines from mall management and professional brand dilution.", proof: "Walkthrough Note" },
                { id: "RT-EXE-04", technicalProtocol: "Customer Escalation Registry", floorAction: "Review all recorded complaints and verify resolution status in < 4 hours.", priority: "High", riskLevel: "High", consequence: "Uncontrolled viral PR damage on social media.", proof: "Feedback Dashboard" },
                { id: "RT-EXE-05", technicalProtocol: "Weights & Measures Validity", floorAction: "Verify and display current Legal Metrology calibration certificates for all scales.", priority: "High", riskLevel: "High", consequence: "Government prosecution and store closure.", proof: "Cert Registry" }
            ]
        },
        {
            title: "Loss Prevention & Asset Shield",
            department: "Security",
            frequency: "Daily",
            role: "Loss Prevention Lead",
            summary: "Hardens the store perimeter and mutes specific theft windows.",
            icon: "shield-check",
            tasks: [
                { id: "RT-SEC-01", technicalProtocol: "CCTV Timestamp Validation", floorAction: "Verify DVR time-sync matches actual time; confirm 30-day recording backup is intact.", priority: "High", riskLevel: "High", consequence: "Loss of usable evidence for insurance claims or legal defense.", proof: "System Screen" },
                { id: "RT-SEC-02", technicalProtocol: "Fake Return Fraud Search", floorAction: "Audit 5 random 'Product Return' slips against original CCTV footage of the return event.", priority: "High", riskLevel: "High", consequence: "Cash embezzlement through ghost-returns.", proof: "Audit Report" },
                { id: "RT-SEC-03", technicalProtocol: "High-Risk Bin Search", floorAction: "Audit trash bags before removal for concealed merchandise or security tags.", priority: "High", riskLevel: "Medium", consequence: "Theft via waste disposal channel.", proof: "Search Note" },
                { id: "RT-SEC-04", technicalProtocol: "EAS Gate Challenge", floorAction: "Test security gates with an active tag at start of shift; confirm alarm volume.", priority: "High", riskLevel: "High", consequence: "Undetected shoplifting by tag removal.", proof: "Test Log" },
                { id: "RT-SEC-05", technicalProtocol: "Staff Exit Bag-Check", floorAction: "Perform random exit checks of staff personal belongings; record in search register.", priority: "High", riskLevel: "High", consequence: "Internal shrinkage leakage.", proof: "Registry Entry" }
            ]
        },
        {
            title: "Fitting Room Security",
            department: "Operations",
            frequency: "Hourly",
            role: "Floor Supervisor",
            summary: "Mutes the highest-risk concealment zone in apparel retail.",
            icon: "door-closed",
            tasks: [
                { id: "RT-ALT-01", technicalProtocol: "Room Clearance Sweep", floorAction: "Search fitting room bins, mirror-backs, and curtains for discarded security tags.", priority: "High", riskLevel: "High", consequence: "Undetected concealment theft.", proof: "Hourly Sheet" },
                { id: "RT-ALT-02", technicalProtocol: "Number-Token Sync", floorAction: "Challenge count of garments entering vs. exiting; ensure token count is verified.", priority: "High", riskLevel: "Medium", consequence: "Internal/External shrinkage.", proof: "Supervisor Obs" },
                { id: "RT-ALT-03", technicalProtocol: "Privacy Standard Scan", floorAction: "Verify zero gaps in curtain or door closures; ensure zero recording devices present.", priority: "High", riskLevel: "High", consequence: "Catastrophic brand-ending privacy scandal.", proof: "Visual Check" }
            ]
        },
        {
            title: "Inventory & Click-and-Collect",
            department: "Stores",
            frequency: "Daily",
            role: "Inventory Lead",
            summary: "Zero-fail protocols for stock accuracy and omnichannel handover.",
            icon: "barcode",
            tasks: [
                { id: "RT-INV-01", technicalProtocol: "High-Value Cycle Count", floorAction: "Blind count top 10 most expensive SKUs against system inventory.", priority: "High", riskLevel: "High", consequence: "Undetected systemic internal theft.", proof: "Count Sheet" },
                { id: "RT-INV-02", technicalProtocol: "Damaged Stock Quarantine", floorAction: "Isolate all 'Red Tag' damaged goods in the quarantine zone; update RTV log.", priority: "Medium", riskLevel: "Low", consequence: "Damaged goods sold to customers, causing returns.", proof: "Quarantine Log" },
                { id: "RT-INV-03", technicalProtocol: "Click-and-Collect Handover", floorAction: "Verify customer ID and order QR code before releasing online orders.", priority: "High", riskLevel: "Medium", consequence: "Theft through fraudulent pickup.", proof: "Handover Log" },
                { id: "RT-INV-04", technicalProtocol: "Stock Room Perimeter", floorAction: "Confirm back-store doors are locked and keys held by authorized personnel only.", priority: "High", riskLevel: "High", consequence: "Unauthorized stock access and theft.", proof: "Lock Log" }
            ]
        },
        {
            title: "Checkout & Revenue Shield",
            department: "Cash",
            frequency: "Daily",
            role: "Cashier",
            summary: "Point-of-sale integrity and fraud prevention.",
            icon: "banknote",
            tasks: [
                { id: "RT-POS-01", technicalProtocol: "UPI & Digital Failover", floorAction: "Verify availability of backup internet line for POS/UPI terminals.", priority: "High", riskLevel: "Low", consequence: "Operational halt during billing peak.", proof: "Ping Test" },
                { id: "RT-POS-02", technicalProtocol: "Fake Currency Challenge", floorAction: "Scan all high-value notes (>₹500) under UV light; verify watermark.", priority: "High", riskLevel: "High", consequence: "Direct financial loss from counterfeit notes.", proof: "UV Test Obs" },
                { id: "RT-POS-03", technicalProtocol: "Device Skimmer Search", floorAction: "Inspect card terminals for unauthorized overlays or loose components.", priority: "High", riskLevel: "High", consequence: "Customer data breach and legal suit.", proof: "Visual Check" },
                { id: "RT-POS-04", technicalProtocol: "Queue Wait-Time Pulse", floorAction: "Trigger backup cashier if more than 3 customers are in line.", priority: "Medium", riskLevel: "Low", consequence: "Customer attrition and negative ratings.", proof: "TAT Log" }
            ]
        },
        {
            title: "Ambiance & Grooming",
            department: "Operations",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Institutional brand standards and professional image.",
            icon: "eye",
            tasks: [
                { id: "RT-GRP-01", technicalProtocol: "Grooming & Uniform Audit", floorAction: "Inspect staff for clean uniforms, visible ID badges, and hygiene standards.", priority: "Low", riskLevel: "Low", consequence: "Loss of professional authority and brand image.", proof: "Briefing Log" },
                { id: "RT-GRP-02", technicalProtocol: "HVAC Scent & Smell Check", floorAction: "Verify scent diffuser is active and washrooms are free of ammonia odors.", priority: "Medium", riskLevel: "Low", consequence: "Poor dwell time and guest irritation.", proof: "Visual Check" },
                { id: "RT-GRP-03", technicalProtocol: "Storefront Glass Polish", floorAction: "Audit entrance glass for fingerprints and smudges; sanitize door handles.", priority: "Low", riskLevel: "Low", consequence: "Grungy first touch for guests.", proof: "Cleaning Log" }
            ]
        },
        {
            title: "Facility Maintenance & Safety",
            department: "Technical",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "Infrastructure uptime and asset protection.",
            icon: "wrench",
            tasks: [
                { id: "RT-MNT-01", technicalProtocol: "Emergency Shutter Test", floorAction: "Verify smooth descent and locking of main security shutters.", priority: "High", riskLevel: "High", consequence: "Inability to secure store during a riot or robbery.", proof: "Test Log" },
                { id: "RT-MNT-02", technicalProtocol: "Electrical Hotspot Scan", floorAction: "Inspect main DB panel for signs of singeing or burning odor.", priority: "High", riskLevel: "High", consequence: "Overnight electrical fire.", proof: "Daily Audit" },
                { id: "RT-MNT-03", technicalProtocol: "Thermal Battery Log", floorAction: "Check high-risk display tech (laptops, phones) for battery swelling.", priority: "High", riskLevel: "High", consequence: "Showroom lithium-ion fire.", proof: "Visual Log" }
            ]
        }
    ]
};
