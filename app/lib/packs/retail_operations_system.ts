
import type { PremiumPack } from "@/lib/premium-packs";

export const retail_operations_system: PremiumPack = {
    id: 'retail_operations_system',
    title: "Retail Operations System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Retail",
    description: "The definitive Sovereign v15.0 technical engine for physical retail. Hardening 130+ technical control points across Loss Prevention and stock integrity.",
    heroHeadline: "Margin Protection Infrastructure. Not Store Management.",
    heroSubheadline: "Protect your margin, stock, and store control daily with forensic protocols for Loss Prevention and Duty of Care.",
    pricingUrgency: "Preventing a single major theft or one brand-damaging customer incident saves 100x the cost of this system.",
    consultingAnchor: 5000,
    icon: "shopping-bag",
    badgeText: "V15.0 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Retail Group Owners", "Store Managers", "Visual Merchandisers", "Loss Prevention Directors", "Regional Managers"],
    sampleItems: [
        { text: "<strong>Asset Shield Engine</strong>: Zero-fail protocols for Vault access and Fitting Room loss prevention.", icon: "shield-check" },
        { text: "<strong>Inventory Integrity</strong>: Daily cycle counts and 'Void-Bill' authorization to stop internal theft.", icon: "barcode" },
        { text: "<strong>Regulatory Compliance</strong>: Legal Metrology (scale calibration) and GST bill discipline.", icon: "scale" }
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
                { id: "RT-EXE-01", description: "Reconcile physical cash against POS X-Reading report; witness seal of bank bags.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue theft.", proof: "Settlement Log" },
                { id: "RT-EXE-02", description: "Audit 100% of deleted/voided transactions for staff name and reason accuracy.", priority: "High", riskLevel: "Medium", consequence: "Theft masked as cashier errors.", proof: "POS Audit Sheet" },
                { id: "RT-EXE-03", description: "Verify and display current Legal Metrology calibration certs for all scales.", priority: "High", riskLevel: "High", consequence: "Government prosecution and closure.", proof: "Cert Registry" }
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
                { id: "RT-ALT-ALT-01", description: "Search fitting room bins and mirror-backs for discarded security tags.", priority: "High", riskLevel: "High", consequence: "Undetected concealment theft.", proof: "Hourly Sheet" },
                { id: "RT-ALT-ALT-02", description: "Privacy Standard: Verify zero gaps in curtains and zero recording devices.", priority: "High", riskLevel: "High", consequence: "Catastrophic brand-ending scandal.", proof: "Visual Check" }
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
                { id: "RT-SEC-01", description: "CCTV Sync: Verify DVR time-sync matches actual time and 30-day backup is active.", priority: "High", riskLevel: "High", consequence: "Loss of usable evidence for investigations.", proof: "System Screen" },
                { id: "RT-SEC-02", description: "Fake Return Fraud: Audit 5 random return slips against original CCTV footage.", priority: "High", riskLevel: "High", consequence: "Cash embezzlement through ghost-returns.", proof: "Audit Report" },
                { id: "RT-SEC-03", description: "Bin Search: Audit trash bags for concealed merchandise or security tags.", priority: "High", riskLevel: "Medium", consequence: "Theft via waste disposal channel.", proof: "Search Note" }
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
                { id: "RT-INV-WHSE-01", description: "High-Value Cycle Count: Blind count top 10 expensive SKUs against system.", priority: "High", riskLevel: "High", consequence: "Undetected systemic internal theft.", proof: "Count Sheet" },
                { id: "RT-INV-SVC-02", description: "Click-and-Collect: Verify customer ID and QR code before releasing order.", priority: "High", riskLevel: "Medium", consequence: "Theft through fraudulent pickup.", proof: "Handover Log" }
            ]
        }
    ]
};
