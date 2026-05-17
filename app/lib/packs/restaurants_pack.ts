
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
    priceINR: 3499,
    priceUSD: 49,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V15.0 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>HACCP Control</strong>: Zero-fail protocols for thawing logs, oil quality, and allergen segregation.", icon: "shield-check" },
        { text: "<strong>Revenue Shield</strong>: Void-bill audits, takeaway seals, and yield variance monitoring.", icon: "banknote" },
        { text: "<strong>Facility Safety</strong>: Mandatory gas leak sniffer tests and suppression system pin checks.", icon: "flame" },
        { text: "<strong>Guest Experience</strong>: Restroom readiness pulses and ambiance sensory audits.", icon: "smile" },
        { text: "<strong>Rider Logistics</strong>: Hygiene checks and dispatch timing benchmarks for aggregators.", icon: "truck" }
    ],
    checklists: [
        {
            title: "Kitchen Readiness (HACCP)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Kitchen Lead",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", technicalProtocol: "Thawing Integrity Log", floorAction: "Record Start/End times for high-risk proteins; verify core temp < 5°C.", priority: "High", riskLevel: "High", consequence: "Rapid bacterial growth and food poisoning outbreak.", proof: "Temp Log" },
                { id: "RES-KIT-02", technicalProtocol: "Allergen Segregation Audit", floorAction: "Isolate nut-free and gluten-free boards; verify color-code compliance.", priority: "High", riskLevel: "High", consequence: "Fatal anaphylactic shock and business-ending lawsuit.", proof: "Visual Audit" },
                { id: "RES-KIT-03", technicalProtocol: "Fryer Oil Quality (TPM)", floorAction: "Measure oil TPM levels using digital meter; discard if > 25%.", priority: "Medium", riskLevel: "Medium", consequence: "Acrylamide buildup and sub-par product taste.", proof: "TPM Reading" },
                { id: "RES-KIT-04", technicalProtocol: "Pest Evidence Search", floorAction: "Inspect back of fridge compressors and dry store corners for droppings.", priority: "High", riskLevel: "High", consequence: "Health department closure and brand damage.", proof: "Search Note" },
                { id: "RES-KIT-05", technicalProtocol: "Yield Variance Count", floorAction: "Calibrate meat trim weight against recipe baseline; log variance.", priority: "High", riskLevel: "Medium", consequence: "Margin erosion and internal theft.", proof: "Yield Sheet" }
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
                { id: "RES-SRV-01", technicalProtocol: "Restroom Readiness Pulse", floorAction: "Audit logs for 60-minute cleaning and stock frequency.", priority: "High", riskLevel: "Low", consequence: "Primary driver of negative Google reviews.", proof: "Hourly Sheet" },
                { id: "RES-SRV-02", technicalProtocol: "Takeaway Seal Witness", floorAction: "Verify 100% of dispatch bags are double-stapled or sticker-sealed.", priority: "Medium", riskLevel: "Low", consequence: "Tampering risk and customer complaints.", proof: "Visual Check" },
                { id: "RES-SRV-03", technicalProtocol: "Rider Hygiene Challenge", floorAction: "Decline handovers to delivery riders with unwashed gear or open bags.", priority: "Medium", riskLevel: "Medium", consequence: "Food contamination during transit.", proof: "Dispatch Log" },
                { id: "RES-SRV-04", technicalProtocol: "Dispatch Timing TAT", floorAction: "Log time from KDS 'Done' to Rider Handover (Target < 3 mins).", priority: "Medium", riskLevel: "Low", consequence: "Cold food delivery and rating drop.", proof: "TAT Dashboard" }
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
                { id: "RES-SAF-01", technicalProtocol: "Gas Leak Sniffer Test", floorAction: "Calibrate sniffer near main valves; execute soap-test on joints.", priority: "High", riskLevel: "High", consequence: "Catastrophic fire or explosion.", proof: "Visual Check" },
                { id: "RES-SAF-02", technicalProtocol: "Suppression System Pin", floorAction: "Verify pull-pins are intact on Ansul system and extinguishers.", priority: "High", riskLevel: "High", consequence: "Zero firefighting capability during crisis.", proof: "Gauge Log" },
                { id: "RES-SAF-03", technicalProtocol: "Final Perimeter Lockdown", floorAction: "Confirm all shutters and back-alley doors are double-locked.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry and theft.", proof: "Signed Summary" }
            ]
        }
    ]
};
