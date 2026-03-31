
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System",
    category: "Hospitality",
    description: "The definitive Sovereign v4.4 engine for multi-unit food and beverage groups. Standardizing 150+ technical control points from Owner vision to kitchen hygiene.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks—across every branch in your group.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V4.4 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>Owner/COO Command</strong>: High-level visibility into group compliance and profit protection dashboards.", icon: "crown" },
        { text: "<strong>Kitchen Opening (HACCP)</strong>: Zero-fail protocols for temperature, hygiene, and allergen separation.", icon: "sunrise" },
        { text: "<strong>Service & Ambiance Logic</strong>: Hourly audits for music, lighting, and bathroom hygiene to protect guest scores.", icon: "armchair" },
        { text: "<strong>Delivery & Aggregator Command</strong>: Technical sync for Swiggy/Zomato and tamper-seal audits.", icon: "truck" },
        { text: "<strong>Financial Shield</strong>: Unit-level tracking of Revenue, CoGS, and Waste to drive accountability.", icon: "banknote" },
        { text: "<strong>Institutional Memory</strong>: Digital instructions that stay with the brand even when your best chef resigns.", icon: "history" }
    ],
    checklists: [
        {
            title: "Kitchen Opening & Prep",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", description: "Log temperatures of all walk-in chillers and freezers.", priority: "High", riskLevel: "High", consequence: "Pathogen growth and total stock loss.", proof: "Digital Log" },
                { id: "RES-KIT-02", description: "Inspect dry storage for signs of rodents or pests.", priority: "High", riskLevel: "High", consequence: "Regulatory closure and contamination.", proof: "Visual Check" },
                { id: "RES-KIT-03", description: "Verify sanitization of all surfaces using 200ppm strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination risk.", proof: "Test Strip" }
            ]
        },
        {
            title: "Delivery & Aggregator Command",
            department: "Logistics",
            frequency: "Daily",
            role: "Dispatch Lead",
            summary: "Governance for Swiggy, Zomato, and Home Delivery.",
            icon: "truck",
            tasks: [
                { id: "RES-DEL-01", description: "Menu Sync: Check 86-list availability on Swiggy/Zomato.", priority: "High", riskLevel: "Medium", consequence: "High cancellation rates and platform penalties.", proof: "App Check" },
                { id: "RES-DEL-02", description: "Packaging Audit: Verify bags are tamper-sealed correctly.", priority: "High", riskLevel: "Medium", consequence: "Guest complaints and safety risk.", proof: "Visual Check" },
                { id: "RES-DEL-03", description: "Rider TAT: Monitor handoff time from ready to pickup.", priority: "Medium", riskLevel: "Low", consequence: "Cold food and rating drop.", proof: "TAT Log" }
            ]
        },
        {
            title: "Digital Command & ORM",
            department: "Marketing",
            frequency: "Daily",
            role: "Admin Manager",
            summary: "Reputation and online presence.",
            icon: "megaphone",
            tasks: [
                { id: "RES-DIG-01", description: "Review Response: Reply to Google/Zomato reviews < 24h.", priority: "High", riskLevel: "Medium", consequence: "Damaged brand rankings.", proof: "Dashboard Screenshot" },
                { id: "RES-DIG-02", description: "Instagram Clean: Clear all DMs and Comment questions.", priority: "Medium", riskLevel: "Low", consequence: "Lost bookings.", proof: "Inbox Clear" }
            ]
        },
        {
            title: "Financial Shield Hub",
            department: "Finance",
            frequency: "Daily",
            role: "Accountant",
            summary: "Profit protection and unit contribution tracking.",
            icon: "banknote",
            tasks: [
                { id: "RES-FIN-01", description: "Log Daily Gross Sales from POS into Financial Shield.", priority: "High", riskLevel: "Medium", consequence: "Loss of performance visibility.", proof: "System Report" },
                { id: "RES-FIN-02", description: "Perform 'Blind Stock Count' of top 5 high-value SKUs.", priority: "High", riskLevel: "High", consequence: "Internal theft masking as consumption.", proof: "Count Sheet" }
            ]
        }
    ]
};
