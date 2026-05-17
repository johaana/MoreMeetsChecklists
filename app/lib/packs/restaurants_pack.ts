
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations System",
    category: "Hospitality",
    description: "The definitive Sovereign v15.0 engine for multi-unit food groups. Standardizing 140+ technical control points from Owner vision to kitchen hygiene.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks—across every branch in your group.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V15.0 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>HACCP Control</strong>: Zero-fail protocols for thawing logs, oil quality, and allergen segregation.", icon: "shield-check" },
        { text: "<strong>Revenue Shield</strong>: Void-bill audits, takeaway seals, and yield variance monitoring.", icon: "banknote" },
        { text: "<strong>Facility Safety</strong>: Mandatory gas leak sniffer tests and suppression system pin checks.", icon: "flame" }
    ],
    checklists: [
        {
            title: "Owner & CEO Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "General Manager",
            summary: "High-level strategic oversight of group performance and risk.",
            icon: "crown",
            tasks: [
                { id: "RES-EXE-01", description: "Revenue Audit: Match physical cash drop to POS X-Reading; witness bag seal.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue theft.", proof: "Settlement Log" },
                { id: "RES-EXE-02", description: "Void Audit: Verify 100% of deleted bills for shift; sign-off with reason code.", priority: "High", riskLevel: "Medium", consequence: "Theft masked as cashier errors.", proof: "Audit Sheet" }
            ]
        },
        {
            title: "Kitchen Readiness (HACCP)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Kitchen Lead",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", description: "Thawing Integrity: Record core temps for high-risk proteins (Target < 5°C).", priority: "High", riskLevel: "High", consequence: "Bacterial growth and food poisoning outbreak.", proof: "Temp Log" },
                { id: "RES-KIT-02", description: "Allergen Segregation: Verify isolation of nut-free and GF prep boards.", priority: "High", riskLevel: "High", consequence: "Fatal anaphylactic shock and lawsuit.", proof: "Visual Audit" },
                { id: "RES-KIT-03", description: "Oil Quality: Measure TPM using digital meter; discard if > 25%.", priority: "Medium", riskLevel: "Medium", consequence: "Acrylamide buildup and poor taste.", proof: "TPM Reading" },
                { id: "RES-KIT-04", description: "Pest Sweep: Inspect compressor backs and dry-store corners for evidence.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Search Note" }
            ]
        },
        {
            title: "Service & Takeaway Hub",
            department: "Service",
            frequency: "Daily",
            role: "Shift Manager",
            summary: "Protects guest experience and delivery integrity.",
            icon: "hand-platter",
            tasks: [
                { id: "RES-SRV-01", description: "Restroom Readiness: Audit cleaning frequency and stock (60-min cycle).", priority: "High", riskLevel: "Low", consequence: "Primary driver of negative reviews.", proof: "Hourly Sheet" },
                { id: "RES-SRV-02", description: "Takeaway Seal: Verify 100% of dispatch bags are double-sealed.", priority: "Medium", riskLevel: "Low", consequence: "Tampering risk and complaints.", proof: "Visual Check" },
                { id: "RES-SRV-03", description: "Rider Hygiene: Challenge riders with unwashed gear or open delivery bags.", priority: "Medium", riskLevel: "Medium", consequence: "Food contamination during transit.", proof: "Dispatch Log" },
                { id: "RES-SRV-04", description: "Dispatch TAT: Log time from KDS 'Done' to Handover (Target < 3m).", priority: "Medium", riskLevel: "Low", consequence: "Cold food delivery.", proof: "TAT Dashboard" }
            ]
        },
        {
            title: "Facility & Nightly Seal",
            department: "Safety",
            frequency: "Daily",
            role: "Security",
            summary: "Prevents overnight facility disasters.",
            icon: "shield-alert",
            tasks: [
                { id: "RES-SAF-01", description: "Gas Sniffer: Calibrate sniffer near main valves; soap-test joints.", priority: "High", riskLevel: "High", consequence: "Catastrophic fire or explosion.", proof: "Visual Check" },
                { id: "RES-SAF-02", description: "Suppression Pin: Verify pull-pins intact on Ansul system.", priority: "High", riskLevel: "High", consequence: "Zero firefighting capability.", proof: "Gauge Log" },
                { id: "RES-SAF-10", description: "Perimeter Seal: Confirm all shutters and alley doors are double-locked.", priority: "High", riskLevel: "High", consequence: "Theft.", proof: "Signed Summary" }
            ]
        }
    ]
};
