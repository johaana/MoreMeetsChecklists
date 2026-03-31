
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operating System",
    priceINR: 5999,
    priceUSD: 79,
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
            tasks: []
        },
        {
            title: "Housekeeping & Room Integrity",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Head of Housekeeping",
            summary: "Manages the invisible infrastructure of cleanliness and comfort.",
            icon: "bed",
            tasks: []
        },
        {
            title: "Room Service & Minibar",
            department: "F&B",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Governance for in-room dining and amenities.",
            icon: "utensils",
            tasks: []
        },
        {
            title: "Banquets, Wedding & Events",
            department: "Events",
            frequency: "Per Event",
            role: "Banquets Manager",
            summary: "Command for high-visibility group events.",
            icon: "calendar-heart",
            tasks: []
        },
        {
            title: "Engineering & MEP Vitals",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Infrastructure readiness for the property.",
            icon: "wrench",
            tasks: []
        },
        {
            title: "Travel Desk, Valet & Parking",
            department: "Logistics",
            frequency: "Daily",
            role: "Security Chief",
            summary: "First and last impression governance.",
            icon: "car",
            tasks: []
        },
        {
            title: "Digital Command & ORM",
            department: "Marketing",
            frequency: "Daily",
            role: "Admin Manager",
            summary: "Reputation and online booking pipeline protection.",
            icon: "globe",
            tasks: []
        },
        {
            title: "Lawn, Pool & Grounds",
            department: "Exterior",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Safety and aesthetic command for outdoor zones.",
            icon: "waves",
            tasks: []
        }
    ]
};
