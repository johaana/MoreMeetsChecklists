
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operating System",
    priceINR: 799,
    priceUSD: 9,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.4 is the professional plug for your operational leaks.",
    heroHeadline: "Eliminate Guest Safety Gaps and Viral Reputation Damage",
    heroSubheadline: "Track 250+ technical control points across Front Office, Housekeeping, Engineering, Events, and ORM—even when you’re not on property.",
    pricingUrgency: "One safety incident or a single negative viral review costs 100x more than this entire system.",
    consultingAnchor: 15000,
    icon: "building",
    badgeText: "Recommended",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["General Managers", "Hotel Owners", "Heads of Housekeeping", "Banqueting Directors", "Security & Valet Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Pulse Reporting</strong>: Team updates tasks in seconds. Zero-friction supervision without being present.", icon: "timer" },
        { text: "<strong>OTA Reputation Shield</strong>: Daily pulse for review response and social media signals to protect your ratings.", icon: "star" },
        { text: "<strong>Event & Venue Command</strong>: Pre-event AV and floor safety audits for Weddings and Conferences.", icon: "calendar-heart" },
        { text: "<strong>Manager Verification</strong>: Highlighted 'Yellow Targets' show leadership exactly what needs sign-off—no shortcuts.", icon: "shield-check" },
        { text: "<strong>Built-in Training</strong>: Every task includes instructions and consequences of failure. Knowledge stays if staff resign.", icon: "history" },
        { text: "<strong>Room Service Integrity</strong>: Dial-tests for inter-phones and chip-free utensil audits for zero-fail delivery.", icon: "hand-platter" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your operational data and the engine forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Front Office & Reservations",
            department: "Front Desk",
            frequency: "Daily",
            role: "Front Office Manager",
            summary: "Ensures legal compliance, guest arrival readiness, and billing integrity.",
            icon: "concierge-bell",
            tasks: [
                { id: "HR-FO-01", description: "Verify all arrivals against booking system (PMS vs. Channel Manager).", priority: "High", riskLevel: "High", consequence: "Overbooking conflict and forced guest relocation/denial.", proof: "System Reconcile Note" },
                { id: "HR-FO-02", description: "Ensure check-in desk is staffed during peak hours (12 PM - 3 PM).", priority: "High", riskLevel: "Medium", consequence: "Long wait times leading to immediate negative first impressions.", proof: "Roster Audit" },
                { id: "HR-FO-03", description: "Validate guest ID compliance and police registration (C-Form/KYC).", priority: "High", riskLevel: "High", consequence: "Severe legal violations and potential business closure.", proof: "Compliance Log" },
                { id: "HR-FO-04", description: "Track and log unresolved guest complaints from the previous shift.", priority: "High", riskLevel: "High", consequence: "Escalated complaints turning into viral 1-star reviews.", proof: "Open Issue Log" },
                { id: "HR-FO-05", description: "Confirm all scheduled wake-up calls are logged and verified.", priority: "Medium", riskLevel: "Medium", consequence: "Guests missing flights; high dissatisfaction.", proof: "Call Log" }
            ]
        },
        {
            title: "Housekeeping & Room Integrity",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Head of Housekeeping",
            summary: "Manages the invisible infrastructure of cleanliness and comfort.",
            icon: "bed",
            tasks: [
                { id: "HR-HK-01", description: "Verify all rooms cleaned and inspected before check-in time.", priority: "High", riskLevel: "High", consequence: "Immediate guest refund risk.", proof: "Inspection Sign-off" },
                { id: "HR-HK-02", description: "Conduct random supervisor audits of 10% of occupied rooms.", priority: "High", riskLevel: "High", consequence: "Slipping standards.", proof: "Audit Scorecard" },
                { id: "HR-HK-03", description: "Check linen quality: scan for stains, tears, or graying.", priority: "High", riskLevel: "Medium", consequence: "Brand damage.", proof: "Linen Log" },
                { id: "HR-HK-04", description: "Check bathroom hygiene: check for hair, mold, and scale.", priority: "High", riskLevel: "High", consequence: "1-star review driver.", proof: "Visual Audit" },
                { id: "HR-HK-05", description: "Inspect for signs of pests (bed bugs, roaches) in crevices.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Pest Audit" }
            ]
        }
    ]
};
