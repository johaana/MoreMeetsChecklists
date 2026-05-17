
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
    description: "The definitive Sovereign v11.9 technical engine for physical retail. Hardening 125+ technical control points across 11 modules including Loss Prevention, Stock Integrity, and Metrology.",
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
                { id: "RT-EXE-01", technicalProtocol: "Revenue Reconciliation", floorAction: "Match cash in hand to POS report and witness bank seal.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue theft.", proof: "Settlement Log" },
                { id: "RT-EXE-02", technicalProtocol: "Void Bill Audit", floorAction: "Verify reason codes for 100% of deleted bills for previous shift.", priority: "High", riskLevel: "Medium", consequence: "Theft masked as cashier errors.", proof: "POS Audit Sheet" },
                { id: "RT-EXE-03", technicalProtocol: "Manager Handover Review", floorAction: "Review night-shift incident reports and check status of P1 repairs.", priority: "Medium", riskLevel: "Low", consequence: "Loss of operational continuity.", proof: "Signed Log" },
                { id: "RT-EXE-04", technicalProtocol: "Compliance Board Pulse", floorAction: "Verify current Trade and Health licenses are in public view.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "Visual Check" },
                { id: "RT-EXE-05", technicalProtocol: "Morning Team Huddle", floorAction: "Brief team on daily target and 'Promotion of the Day'.", priority: "Medium", riskLevel: "Low", consequence: "Disconnected staff and missed sales.", proof: "Briefing Log" }
            ]
        },
        {
            title: "Floor Readiness & Ambiance",
            department: "Operations",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Command for first impressions and store sensory standards.",
            icon: "eye",
            tasks: [
                { id: "RT-OPS-01", technicalProtocol: "Lobby Ambiance Audit", floorAction: "Check Scent diffuser, Music Volume, and Temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor visitor first-impression.", proof: "Daily Log" },
                { id: "RT-OPS-02", technicalProtocol: "POS Terminal Uptime", floorAction: "Confirm 100% of billing tablets and printers are online.", priority: "High", riskLevel: "Medium", consequence: "Billing failure during rush.", proof: "System Screen" },
                { id: "RT-OPS-03", technicalProtocol: "Restroom Hygiene Pulse", floorAction: "Verify 60-min cleaning frequency in public restrooms.", priority: "High", riskLevel: "Low", consequence: "Primary driver of negative reviews.", proof: "Hourly Sheet" },
                { id: "RT-OPS-04", technicalProtocol: "Uniform & Grooming Audit", floorAction: "Inspect staff name-tags and clean uniform compliance.", priority: "Low", riskLevel: "Low", consequence: "Brand authority dilution.", proof: "Briefing Log" },
                { id: "RT-OPS-05", technicalProtocol: "Stationery Par Levels", floorAction: "Check stock of bill rolls, carry-bags, and return forms.", priority: "Low", riskLevel: "Low", consequence: "Checkout friction.", proof: "Stock Check" }
            ]
        },
        {
            title: "Fitting Room Loss Prevention",
            department: "Service",
            frequency: "Hourly",
            role: "Floor Supervisor",
            summary: "Mutes specific theft windows in fashion zones.",
            icon: "door-closed",
            tasks: [
                { id: "RT-ROOM-01", technicalProtocol: "Fitting Room Sweep", floorAction: "Check rooms for discarded tags or concealment tools.", priority: "High", riskLevel: "High", consequence: "Undetected shoplifting by tag removal.", proof: "Patrol Log" },
                { id: "RT-ROOM-02", technicalProtocol: "Number-Token Sync", floorAction: "Verify garments entering vs. exiting match token count.", priority: "High", riskLevel: "Medium", consequence: "Internal/External shrinkage.", proof: "Observation" },
                { id: "RT-ROOM-03", technicalProtocol: "Sanitization Pulse", floorAction: "Wipe mirrors and clear discarded hangers every 60 mins.", priority: "Medium", riskLevel: "Low", consequence: "Poor luxury perception.", proof: "Visual Check" }
            ]
        },
        {
            title: "Inventory & Stock Integrity",
            department: "Stores",
            frequency: "Daily",
            role: "Inventory Lead",
            summary: "Zero-fail protocols for stock accuracy.",
            icon: "barcode",
            tasks: [
                { id: "RT-INV-01", technicalProtocol: "High-Value Cycle Count", floorAction: "Blind count top 10 most expensive SKUs vs. POS.", priority: "High", riskLevel: "High", consequence: "Undetected systemic theft.", proof: "Count Sheet" },
                { id: "RT-INV-02", technicalProtocol: "Price Label Parity", floorAction: "Spot check 20 shelf labels against system price.", priority: "High", riskLevel: "Medium", consequence: "Consumer court fines and guest disputes.", proof: "Audit Sheet" },
                { id: "RT-INV-03", technicalProtocol: "Receiving Variance Pulse", floorAction: "Reconcile daily GRN against physical invoices.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing stock.", proof: "Match Note" },
                { id: "RT-INV-04", technicalProtocol: "Damaged Stock Triage", floorAction: "Move all 'Defective' items to the RTV repair zone.", priority: "Low", riskLevel: "Low", consequence: "Damaged goods on floor.", proof: "Transfer Log" },
                { id: "RT-INV-05", technicalProtocol: "Backstock Safety Stack", floorAction: "Inspect warehouse racks for leaning or unstable pallets.", priority: "High", riskLevel: "High", consequence: "Inventory loss and injury.", proof: "Structural Audit" }
            ]
        },
        {
            title: "Loss Prevention & Perimeter",
            department: "Security",
            frequency: "Daily",
            role: "Loss Prevention Lead",
            summary: "Hardens the store against shrinkage.",
            icon: "search-check",
            tasks: [
                { id: "RT-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance.", proof: "System Screen" },
                { id: "RT-SEC-02", technicalProtocol: "High-Risk Bin Search", floorAction: "Audit trash bags before removal for concealed goods.", priority: "High", riskLevel: "Medium", consequence: "Theft via waste channel.", proof: "Search Note" },
                { id: "RT-SEC-03", technicalProtocol: "Staff Bag-Check", floorAction: "Execute random exit checks for on-duty personnel.", priority: "High", riskLevel: "High", consequence: "Internal shrinkage.", proof: "Registry Note" },
                { id: "RT-SEC-04", technicalProtocol: "Loading Bay Lockdown", floorAction: "Physically confirm all bay shutters locked at EOD.", priority: "High", riskLevel: "High", consequence: "Overnight burglary.", proof: "Visual Check" },
                { id: "RT-SEC-05", technicalProtocol: "EAS Gate Test", floorAction: "Test security gates with active tags.", priority: "High", riskLevel: "High", consequence: "Alarm failure during real theft.", proof: "Test Log" }
            ]
        },
        {
            title: "Legal Metrology & Compliance",
            department: "Compliance",
            frequency: "Weekly",
            role: "Floor Supervisor",
            summary: "Statutory adherence for weights and pricing.",
            icon: "scale",
            tasks: [
                { id: "RT-CMP-01", technicalProtocol: "Scale Calibration Test", floorAction: "Test store scales with 1kg standard weight.", priority: "High", riskLevel: "High", consequence: "Legal metrology prosecution.", proof: "Calibration Log" },
                { id: "RT-CMP-02", technicalProtocol: "MRP Parity Pulse", floorAction: "Audit 5 items to ensure shelf price <= MRP.", priority: "High", riskLevel: "High", consequence: "Consumer court penalties.", proof: "Audit Sheet" },
                { id: "RT-CMP-03", technicalProtocol: "POSH Policy Display", floorAction: "Confirm policy is posted in staff break-rooms.", priority: "High", riskLevel: "High", consequence: "Labor law violation.", proof: "Photo" }
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
                { id: "RT-POS-01", technicalProtocol: "Opening Float Reconcile", floorAction: "Count drawer coins vs. voucher register at 8 AM.", priority: "High", riskLevel: "High", consequence: "Untraceable cashier leakage.", proof: "Float Sheet" },
                { id: "RT-POS-02", technicalProtocol: "Device Skimmer Search", floorAction: "Inspect card terminals for unauthorized overlays.", priority: "High", riskLevel: "High", consequence: "Customer data breach.", proof: "Visual Check" },
                { id: "RT-POS-03", technicalProtocol: "Return Authorization", floorAction: "Manager verify 100% of cash refunds match original bill.", priority: "High", riskLevel: "High", consequence: "Fraud via fake returns.", proof: "Bill Audit" }
            ]
        },
        {
            title: "Facility Maintenance",
            department: "Technical",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "Infrastructure uptime and asset protection.",
            icon: "wrench",
            tasks: [
                { id: "RT-MNT-01", technicalProtocol: "Emergency Power Readiness", floorAction: "Inspect DG fuel and battery status.", priority: "High", riskLevel: "High", consequence: "Blackout and billing halt.", proof: "Fuel Log" },
                { id: "RT-MNT-02", technicalProtocol: "HVAC Discharge Check", floorAction: "Log AC temp in showroom (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Customer discomfort.", proof: "BMS Reading" },
                { id: "RT-MNT-03", technicalProtocol: "Thermal Battery Log", floorAction: "Check demo electronics for battery swelling.", priority: "High", riskLevel: "High", consequence: "Showroom fire hazard.", proof: "Visual Log" }
            ]
        }
    ]
};
