
import type { PremiumPack } from "@/lib/premium-packs";

export const bakery_confectionery_pack: PremiumPack = {
    id: 'bakery_confectionery_pack',
    title: "Bakery Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d863f69b-8919-4115-b778-831d17d120fb',
    category: "Food & Beverage",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the professional plug for production halts and fatal allergen lapses.",
    heroHeadline: "Stop Production Halts and Fatal Allergen Lapses",
    heroSubheadline: "Track artisanal quality, monitor batch consistency, and protect your reputation—across multiple bakery outlets.",
    pricingUrgency: "A single mislabeled allergen or one health department closure costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "cake-slice",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Bakery Owners", "Pastry Chefs", "Production Managers", "QC Heads", "Regional F&B Directors"],
    sampleItems: [
        { text: "<strong>2-Minute Baking Pulse</strong>: Chefs update dough and oven status in seconds. Zero-friction daily reporting.", icon: "timer" },
        { text: "<strong>Artisanal Switchboard</strong>: Run multiple branches from one master file. Toggle specialty modules (Vegan, Gluten-Free) ON or OFF.", icon: "layout-grid" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show managers exactly what needs sign-off—from oven temp to labeling.", icon: "shield-check" },
        { text: "<strong>Allergen Control Engine</strong>: Rigorous protocols to stop cross-contamination and ensure accurate FSSAI-compliant labeling.", icon: "file-warning" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure that even with high kitchen turnover, your secret recipes stay consistent.", icon: "history" },
        { text: "<strong>Margin Protection</strong>: Identify operational failures that lead to 'day-old' waste and ingredient profit leakage.", icon: "banknote" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your operational data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Daily Production & Quality",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Baker",
            summary: "Ensures consistency and safety from the first mix to the final bake.",
            icon: "sunrise",
            tasks: [
                { id: "BAKE-PROD-01", description: "Log oven temperatures and verify thermostat calibration.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent bake quality and wasted product.", proof: "Temperature Log" },
                { id: "BAKE-PROD-02", description: "Verify allergen segregation in the dry store and prep areas.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction and business-ending legal liability.", proof: "Visual Audit" },
                { id: "BAKE-PROD-03", description: "Check batch yields and ingredient weight accuracy.", priority: "Medium", riskLevel: "Low", consequence: "Profit erosion due to inconsistent portioning.", proof: "Yield Sheet" },
                { id: "BAKE-PROD-04", description: "Sanitize all mixers and proofing boxes before starting the day.", priority: "High", riskLevel: "High", consequence: "Bacterial growth and food poisoning outbreak.", proof: "Cleaning Log" },
                { id: "BAKE-PROD-05", description: "Audit date-stamping and FIFO rotation for all perishable fillings.", priority: "High", riskLevel: "High", consequence: "Serving expired ingredients and regulatory fines.", proof: "FIFO Audit" },
                { id: "BAKE-PROD-06", description: "Confirm final labeling for all retail goods includes batch codes.", priority: "High", riskLevel: "High", consequence: "Inability to trace product in case of a quality complaint.", proof: "Label Check" },
                { id: "BAKE-PROD-07", description: "Brief staff on today's specials and custom cake orders.", priority: "Medium", riskLevel: "Low", consequence: "Missing a client order and brand reputation damage.", proof: "Briefing Log" },
                { id: "BAKE-PROD-08", description: "Inspect ceiling and equipment for any dust or paint flaking.", priority: "High", riskLevel: "Medium", consequence: "Physical contamination reaching the food.", proof: "Walkthrough" },
                { id: "BAKE-PROD-09", description: "Verify handwashing and hairnet compliance for all floor staff.", priority: "High", riskLevel: "Medium", consequence: "Hygiene failures and negative customer perception.", proof: "Daily Audit" },
                { id: "BAKE-PROD-10", description: "Final manager sign-off on kitchen closure and gas shutdown.", priority: "High", riskLevel: "High", consequence: "Fire risk and overnight facility safety gaps.", proof: "Closure Log" }
            ]
        }
    ]
};
