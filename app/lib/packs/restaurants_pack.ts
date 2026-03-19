
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
        { text: "<strong>Team updates tasks in under 2 minutes</strong>. No long reports. 100% staff adoption.", icon: "timer" },
        { text: "<strong>See who is working and who is not</strong> — instantly from your phone.", icon: "zap" },
        { text: "<strong>Managers verify critical tasks</strong>. Highlighted targets mean no shortcuts on safety or cash.", icon: "shield-check" },
        { text: "<strong>Automated Daily/Weekly/Monthly cycles</strong>. The system remembers so your staff doesn't have to.", icon: "calendar-days" },
        { text: "<strong>Built-in training for new staff</strong>. Every task includes instructions and consequences of failure.", icon: "history" },
        { text: "<strong>Live Dashboard visibility</strong>. No more calling managers to ask if 'everything is okay'.", icon: "layout-grid" },
        { text: "<strong>Track incidents and losses</strong>. Know exactly where your profit is leaking.", icon: "banknote" },
        { text: "<strong>Gamified performance</strong>. Branch rankings and 'Stars' drive team discipline.", icon: "trophy" }
    ],
    checklists: [
        {
            title: "Kitchen Opening",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: Array.from({ length: 20 }, (_, i) => ({
                id: `KO-${(i + 1).toString().padStart(2, '0')}`,
                description: [
                    "Log temperatures of all walk-in chillers and freezers.",
                    "Inspect dry storage for signs of rodents or pests.",
                    "Verify sanitization of all surfaces using 200ppm strips.",
                    "Calibrate all food probes using ice-point method.",
                    "Audit staff health and grooming (nails, wounds, hair).",
                    "Check inventory of all high-risk perishable items.",
                    "Verify functionality of all kitchen exhaust systems.",
                    "Prepare sanitized sanitizer buckets for all workstations.",
                    "Organize raw prep area according to color-coding rules.",
                    "Test all dishwasher chemical levels.",
                    "Check availability of blue detectable band-aids.",
                    "Verify pest control bait station placement.",
                    "Check water filter pressure for ice machine.",
                    "Inspect grease trap for capacity/odors.",
                    "Check oven gaskets for heat leaks.",
                    "Verify raw protein date labeling.",
                    "Audit knife magnet for count integrity.",
                    "Inspect ceiling for leaks/mold.",
                    "Verify staff handwashing station temp (Min 38°C).",
                    "Check vegetable wash chemical ppm."
                ][i],
                priority: i < 5 ? "High" : "Medium",
                riskLevel: i < 5 ? "High" : "Medium",
                consequence: "Pathogen transmission, food waste, or regulatory closure.",
                proof: "Digital Log / Photo",
                trainerNotes: "Standard clinical procedure. Do not skip."
            }))
        }
    ]
};
