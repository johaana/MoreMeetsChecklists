import type { PremiumPack } from "@/lib/premium-packs";

export const retail_operations_system: PremiumPack = {
    id: 'retail_operations_system',
    title: "Retail Operations System",
    priceINR: 3499,
    priceUSD: 49,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Retail",
    description: "The definitive Sovereign v16.0 engine for physical retail. Hardening 130 technical control points across Loss Prevention, Stock Integrity, and Metrology.",
    icon: "shopping-bag",
    badgeText: "V16.0 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Store Managers", "Inventory Leads", "Loss Prevention Directors", "Visual Merchandisers", "Regional Retail Managers"],
    sampleItems: [
        { text: "<strong>Asset Shield Engine</strong>: Zero-fail protocols for Vault access and Fitting Room loss prevention.", icon: "shield-check" },
        { text: "<strong>Inventory Integrity</strong>: Daily cycle counts and 'Void-Bill' authorization to stop internal theft.", icon: "barcode" },
        { text: "<strong>Metrology & Compliance</strong>: Weekly scale calibration and pricing parity audits to eliminate fines.", icon: "scale" }
    ],
    checklists: [
        {
            title: "Executive Store Control",
            department: "Management",
            frequency: "Daily",
            role: "Store Manager",
            summary: "High-level margin and compliance oversight.",
            icon: "crown",
            tasks: [
                { id: "RT-EXE-01", description: "Witness cash drop; physically seal nightly collection bag and log unique seal number in ledger.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue theft.", proof: "Seal Number Log" },
                { id: "RT-EXE-02", description: "Void Bill Authorization: Audit 100% of deletions; verify manager ID login for each POS override.", priority: "High", riskLevel: "High", consequence: "Theft masked as cashier mistakes.", proof: "Void Registry" },
                { id: "RT-EXE-03", description: "Verify statutory display; confirm 100% visibility of Legal Metrology certs and Fire NOC in lobby.", priority: "High", riskLevel: "Medium", consequence: "Store sealing and heavy government penalties.", proof: "Certificate File" },
                { id: "RT-EXE-04", description: "Match physical cash-on-hand to POS X-Reading report at shift end; witness cashier reconciliation.", priority: "High", riskLevel: "High", consequence: "Unidentified shortages and financial fraud.", proof: "Settlement Log" },
                { id: "RT-EXE-08", description: "Transaction Audit: Verify original ID capture for 100% of high-value (>₹20k) card payments.", priority: "High", riskLevel: "High", consequence: "Chargeback losses and fraud liability.", proof: "Transaction Audit" }
            ]
        },
        {
            title: "Loss Prevention",
            department: "Security",
            frequency: "Daily",
            role: "Loss Prevention Lead",
            summary: "Hardens the store perimeter and prevents shrinkage.",
            icon: "shield-check",
            tasks: [
                { id: "RT-SEC-01", description: "Test EAS gate sensitivity using active security tag; verify alarm sync and visual blinkers pre-opening.", priority: "High", riskLevel: "High", consequence: "Undetected tagged items leaving the premises.", proof: "Test Log" },
                { id: "RT-FLR-01", description: "Fitting-Room Sweep: Check mirrors and vents for discarded tags or concealment signs every 60 mins.", priority: "High", riskLevel: "High", consequence: "High-frequency boutique theft.", proof: "Patrol Log" },
                { id: "RT-SEC-03", description: "Verify CCTV 30-day backup is active and recording correctly; check timestamp sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance claims.", proof: "System Screen" },
                { id: "RT-SEC-04", description: "Perform random bag-checks for departing staff and vendors; document 5 random checks at shift exit.", priority: "High", riskLevel: "Medium", consequence: "Systemic internal inventory shrinkage.", proof: "Registry Note" },
                { id: "RT-SEC-05", description: "Fake Return Pattern: Audit 5 random refunds; cross-match customer ID signature with CCTV footage.", priority: "High", riskLevel: "High", consequence: "Internal collusion fraud at the till.", proof: "Footage Audit" },
                { id: "RT-SEC-07", description: "Panic Button Test: Execute silent alarm trigger to control booth; verify response signal < 30s.", priority: "High", riskLevel: "High", consequence: "Zero response during armed robbery.", proof: "Signal Test" }
            ]
        },
        {
            title: "Inventory Integrity",
            department: "Stores",
            frequency: "Daily",
            role: "Inventory Lead",
            summary: "Zero-fail stock accuracy and omnichannel parity.",
            icon: "barcode",
            tasks: [
                { id: "RT-INV-01", description: "Blind cycle-count of top 10 high-value/high-shrinkage SKUs; match physical stock vs system ledger.", priority: "High", riskLevel: "High", consequence: "Unidentified stock shrinkage.", proof: "Count Sheet" },
                { id: "RT-INV-02", description: "Verify GRN entry; match incoming vendor invoices to physical piece count within 4-hour window.", priority: "High", riskLevel: "Medium", consequence: "Omnichannel inventory mismatch.", proof: "System Sync" },
                { id: "RT-INV-03", description: "RFID Variance Check: Scan 1 promotional rack; verify 100% parity with digital inventory count.", priority: "High", riskLevel: "Medium", consequence: "Stock-out during high demand.", proof: "RFID Report" },
                { id: "RT-INV-10", description: "Stock-Room Lockdown: Physically confirm internal vault is double-locked at shift rotation.", priority: "High", riskLevel: "High", consequence: "Internal theft window.", proof: "Visual Check" }
            ]
        },
        {
            title: "POS & Cashiering",
            department: "Finance",
            frequency: "Daily",
            role: "Cashier",
            summary: "Protects the revenue point and handles digital security.",
            icon: "banknote",
            tasks: [
                { id: "RT-CSH-01", description: "Inspect till point for credit card skimmers or overlays; physically check pin-pad integrity.", priority: "High", riskLevel: "High", consequence: "Customer data theft and reputation loss.", proof: "Visual Check" },
                { id: "RT-CSH-02", description: "Verify cashier float; physically witness blind-count of notes and coins at start of shift.", priority: "High", riskLevel: "Medium", consequence: "Untraceable cash shortages.", proof: "Cash Log" },
                { id: "RT-CSH-04", description: "Audit POS workstation for unauthorized USB devices or data exfiltration hardware.", priority: "High", riskLevel: "High", consequence: "Malware injection or data theft.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Visual Merchandising",
            department: "VM",
            frequency: "Daily",
            role: "Visual Merchandiser",
            summary: "Protects the brand aesthetic and pricing accuracy.",
            icon: "eye",
            tasks: [
                { id: "RT-VM-01", description: "Audit shelf-edge pricing; scan 20 random items to verify 100% match with POS database price.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes and Legal Metrology fines.", proof: "Price Report" },
                { id: "RT-VM-03", description: "Audit lighting LUX levels; measure brightness in window display and trial zones using meter.", priority: "Low", riskLevel: "Low", consequence: "Reduced visual merchandising impact.", proof: "Meter Log" },
                { id: "RT-VM-05", description: "Confirm markdown signage; verify 'Discount %' on tags matches active promotion in system.", priority: "High", riskLevel: "Medium", consequence: "Consumer court penalties.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Floor Readiness",
            department: "Operations",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Daily command for visual parity and service standard.",
            icon: "clipboard-check",
            tasks: [
                { id: "RT-FLR-02", description: "Queue TAT Pulse: Measure billing wait time during peak; target goal < 3 guests per cashier.", priority: "Medium", riskLevel: "Low", consequence: "Basket abandonment.", proof: "Queue Log" },
                { id: "RT-FLR-03", description: "Ambiance Vitals: Log store temp (Target 23°C) and verify music playlist matches brand standard.", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort.", proof: "Daily Log" }
            ]
        },
        {
            title: "Maintenance & Safety",
            department: "Maintenance",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "Infrastructure and safety asset protection.",
            icon: "wrench",
            tasks: [
                { id: "RT-MNT-01", description: "Inspect demo units; physically check mobile/tablet batteries for swelling or charging-port heat.", priority: "High", riskLevel: "High", consequence: "Overnight fire in customer zone.", proof: "Visual Audit" },
                { id: "RT-MNT-02", description: "Test shutter motor; execute full open/close cycle for main entrance and loading bay gates.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment during crisis.", proof: "Test Log" },
                { id: "RT-MNT-03", description: "Perform IR heat scan; check main electrical panel bank for hotspots exceeding 60°C.", priority: "High", riskLevel: "High", consequence: "Electrical short-circuit fire.", proof: "Scan Log" },
                { id: "RT-MNT-18", description: "Final facility safety sign-off; witness nightly power-bank shutdown for all non-essential systems.", priority: "High", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Summary" }
            ]
        }
    ]
};
