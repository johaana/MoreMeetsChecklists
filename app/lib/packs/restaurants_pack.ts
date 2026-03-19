
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System (Sovereign v4.3)",
    category: "Hospitality",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Most restaurants run on memory and WhatsApp—that's why they lose 2–5% revenue daily. This system fixes that.",
    heroHeadline: "Run Your Restaurant Like a System — Not Chaos",
    heroSubheadline: "Daily tasks. Team tracking. Manager control. Live performance dashboard. Stay in control even when you’re not there.",
    pricingUrgency: "Small mistakes in daily operations cost you more than you think. Even one incident prevented recovers the entire cost of this system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Owners", "Cloud Kitchen Operators", "Multi-branch Managers", "Heads of Operations"],
    sampleItems: [
        { text: "<strong>2-Minute Pulse Reporting</strong>: Team updates tasks in seconds. No long reports. 100% staff adoption.", icon: "timer" },
        { text: "<strong>Bar & Happy Hour Command</strong>: Stock reconciliation and license compliance tracking to stop theft.", icon: "glass-water" },
        { text: "<strong>Managers verify critical tasks</strong>. Highlighted 'Yellow Targets' mean no shortcuts on safety or cash.", icon: "shield-check" },
        { text: "<strong>Delivery & Dispatch Governance</strong>: Protect ratings with packaging audits and rider TAT logs.", icon: "truck" },
        { text: "<strong>Built-in training for new staff</strong>. Every task includes instructions and consequences of failure.", icon: "history" },
        { text: "<strong>Live Dashboard visibility</strong>. No more calling managers to ask if 'everything is okay'.", icon: "layout-grid" },
        { text: "<strong>Digital Reputation Shield</strong>: Daily pulse for review response and social media signals.", icon: "globe" },
        { text: "<strong>Revenue Protection</strong>: Identify operational failures that lead to wastage and profit leakage.", icon: "banknote" }
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
                { id: "RES-KIT-03", description: "Verify sanitization of all surfaces using 200ppm strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination risk.", proof: "Test Strip" },
                { id: "RES-KIT-04", description: "Calibrate all food probes using ice-point method.", priority: "Medium", riskLevel: "Medium", consequence: "False safety readings.", proof: "Calibration Log" },
                { id: "RES-KIT-05", description: "Audit staff health and grooming (nails, wounds, hair).", priority: "High", riskLevel: "Medium", consequence: "Hygiene failure.", proof: "Daily Audit" },
                { id: "RES-KIT-06", description: "Check vegetable wash chemical ppm.", priority: "High", riskLevel: "Medium", consequence: "Chemical poisoning or ineffective wash.", proof: "Test Strip" },
                { id: "RES-KIT-07", description: "Verify raw protein date labeling and FIFO.", priority: "High", riskLevel: "High", consequence: "Serving expired meat; severe illness.", proof: "Label Audit" },
                { id: "RES-KIT-08", description: "Test dishwasher final rinse temperature (Min 82°C).", priority: "High", riskLevel: "High", consequence: "Improperly sanitized utensils.", proof: "Temp Reading" },
                { id: "RES-KIT-09", description: "Verify functionality of all kitchen exhaust systems.", priority: "Medium", riskLevel: "Medium", consequence: "Heat buildup and air quality issues.", proof: "Visual Check" },
                { id: "RES-KIT-10", description: "Check availability of blue detectable band-aids.", priority: "Low", riskLevel: "Low", consequence: "Physical contamination risk.", proof: "Stock Check" }
            ]
        },
        {
            title: "Kitchen Closing & Fire Safety",
            department: "Kitchen",
            frequency: "Daily",
            role: "Sous Chef",
            summary: "Hardens the facility against overnight disasters.",
            icon: "flame-kindling",
            tasks: [
                { id: "RES-CLO-01", description: "Verify all gas bank valves are shut and locked.", priority: "High", riskLevel: "High", consequence: "Overnight explosion or fire.", proof: "Dual-Verification" },
                { id: "RES-CLO-02", description: "Ensure all fryers and ovens are switched off at the mains.", priority: "High", riskLevel: "High", consequence: "Fire hazard.", proof: "Visual Check" },
                { id: "RES-CLO-03", description: "Clean grease traps and verify no blockage.", priority: "Medium", riskLevel: "Medium", consequence: "Odors and drainage failure.", proof: "Cleaning Log" },
                { id: "RES-CLO-04", description: "Secure all high-value proteins in locked chillers.", priority: "Medium", riskLevel: "High", consequence: "Internal theft.", proof: "Lock Check" },
                { id: "RES-CLO-05", description: "Verify all waste is removed to external bins.", priority: "Medium", riskLevel: "Low", consequence: "Pest attraction.", proof: "Visual Check" }
            ]
        },
        {
            title: "Bar & Happy Hour Control",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Governance for alcohol stock and beverage quality.",
            icon: "glass-water",
            tasks: [
                { id: "RES-BAR-01", description: "Reconcile opening bottle counts against POS sales.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue leakage.", proof: "Inventory Sheet" },
                { id: "RES-BAR-02", description: "Verify garnish freshness and prep date labels.", priority: "Medium", riskLevel: "Low", consequence: "Poor drink quality.", proof: "Visual Check" },
                { id: "RES-BAR-03", description: "Audit Bar License availability and display.", priority: "High", riskLevel: "High", consequence: "Legal closure and fines.", proof: "Compliance Note" },
                { id: "RES-BAR-04", description: "Happy Hour Inventory: Verify stock used for promotions.", priority: "High", riskLevel: "Medium", consequence: "Margin erosion.", proof: "Promo Log" },
                { id: "RES-BAR-05", description: "Check glass polish and sanitization standards.", priority: "Medium", riskLevel: "Low", consequence: "Poor guest perception.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Dining Area & Ambiance",
            department: "Service",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Ensures the guest experience matches brand standards.",
            icon: "armchair",
            tasks: [
                { id: "RES-DIN-01", description: "Verify table alignment and setup against planogram.", priority: "Low", riskLevel: "Low", consequence: "Disorganized appearance.", proof: "Visual Check" },
                { id: "RES-DIN-02", description: "Inspect restrooms hourly for cleanliness and stock.", priority: "High", riskLevel: "Medium", consequence: "Major driver of negative reviews.", proof: "Hourly Log" },
                { id: "RES-DIN-03", description: "Check ambiance vitals: Scent, Music Volume, Lighting.", priority: "Medium", riskLevel: "Low", consequence: "Poor guest dwell time.", proof: "Daily Log" },
                { id: "RES-DIN-04", description: "Conduct pre-shift briefing on specials and targets.", priority: "Medium", riskLevel: "Low", consequence: "Staff unable to upsell.", proof: "Briefing Sheet" },
                { id: "RES-DIN-05", description: "Track and log 'Table Touch' guest feedback (10% of tables).", priority: "High", riskLevel: "Low", consequence: "Missed recovery chance.", proof: "Interaction Log" }
            ]
        },
        {
            title: "Delivery & Dispatch",
            department: "Logistics",
            frequency: "Daily",
            role: "Dispatch Coordinator",
            summary: "Zero-fail framework for off-premise sales.",
            icon: "truck",
            tasks: [
                { id: "RES-DEL-01", description: "Packaging Audit: Verify bags are sealed correctly.", priority: "High", riskLevel: "Medium", consequence: "Tampering risk and poor rating.", proof: "Visual Check" },
                { id: "RES-DEL-02", description: "Check utensil and condiment count accuracy.", priority: "Medium", riskLevel: "Low", consequence: "Customer frustration.", proof: "Accuracy Log" },
                { id: "RES-DEL-03", description: "Monitor Rider TAT: Time from order ready to pickup.", priority: "Medium", riskLevel: "Low", consequence: "Cold food and rating drop.", proof: "TAT Log" },
                { id: "RES-DEL-04", description: "Verify order matching: Bag ID vs. App Ticket.", priority: "High", riskLevel: "High", consequence: "Wrong order delivered.", proof: "Scan Log" },
                { id: "RES-DEL-05", description: "Menu Sync: Check availability on Zomato/Swiggy.", priority: "High", riskLevel: "Medium", consequence: "Order cancellations.", proof: "App Check" }
            ]
        },
        {
            title: "Digital, Social & ORM",
            department: "Marketing",
            frequency: "Daily",
            role: "Digital Lead",
            summary: "Protects the online reputation pipeline.",
            icon: "globe",
            tasks: [
                { id: "RES-DIG-01", description: "Reply to all Google/Zomato reviews within 24 hours.", priority: "High", riskLevel: "Medium", consequence: "Reputation decay.", proof: "Dashboard Check" },
                { id: "RES-DIG-02", description: "Post today's 'Chef Special' to Instagram Stories.", priority: "Medium", riskLevel: "Low", consequence: "Lower footfall.", proof: "Live Post" },
                { id: "RES-DIG-03", description: "Answer all customer DMs and inquiries.", priority: "High", riskLevel: "Low", consequence: "Lost booking revenue.", proof: "Inbox Zero" }
            ]
        },
        {
            title: "Supply & Receiving",
            department: "Purchasing",
            frequency: "Weekly",
            role: "Purchasing Manager",
            summary: "Governance for procurement and margins.",
            icon: "package-search",
            tasks: [
                { id: "RES-SUP-01", description: "Vendor Audit: Check license of 3 major suppliers.", priority: "High", riskLevel: "High", consequence: "Legal liability linkage.", proof: "License File" },
                { id: "RES-SUP-02", description: "Weighing Scale Calibration: Verify accuracy.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight.", proof: "Calibration Log" },
                { id: "RES-SUP-03", description: "Inventory Count: Random audit of high-value items.", priority: "High", riskLevel: "High", consequence: "Internal theft.", proof: "Stock Sheet" }
            ]
        }
    ]
};

    