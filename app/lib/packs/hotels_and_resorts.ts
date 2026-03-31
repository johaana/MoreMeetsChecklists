
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
            tasks: [
                { id: "HTL-FO-01", description: "Verify all arrivals against PMS vs. Channel Manager sync.", priority: "High", riskLevel: "High", consequence: "Double-booking and guest denial.", proof: "System Reconcile", trainerNotes: "Check Mobile vs Desktop rates." },
                { id: "HTL-FO-02", description: "Audit Guest ID compliance and police C-Form filing.", priority: "High", riskLevel: "High", consequence: "Massive legal fines and license suspension.", proof: "Registry Audit", trainerNotes: "Scan original ID only." },
                { id: "HTL-FO-03", description: "Monitor lobby queue length during peak check-in (12PM).", priority: "High", riskLevel: "Low", consequence: "Immediate negative first impression.", proof: "TAT Log", trainerNotes: "Deploy backup staff if > 3 guests wait." },
                { id: "HTL-FO-04", description: "Test Front Desk Inter-phone and Emergency Hotline.", priority: "High", riskLevel: "High", consequence: "Inability to summon help during crisis.", proof: "Dial Log" },
                { id: "HTL-FO-05", description: "Reconcile daily cash float and credit card settlements.", priority: "High", riskLevel: "High", consequence: "Silent internal cash theft.", proof: "Settlement Log" },
                { id: "HTL-FO-06", description: "Verify wake-up call log against PMS automated queue.", priority: "Medium", riskLevel: "Medium", consequence: "Guest misses flight; high refund risk.", proof: "Manual Check" },
                { id: "HTL-FO-07", description: "Inspect bell-desk for luggage tags and arrival parity.", priority: "Medium", riskLevel: "Low", consequence: "Misplaced guest property.", proof: "Visual Audit" },
                { id: "HTL-FO-08", description: "Check availability of keys for high-value VIP suites.", priority: "High", riskLevel: "Low", consequence: "Service bottleneck during arrival.", proof: "Key Inventory" },
                { id: "HTL-FO-09", description: "Audit 'Cancelled Booking' log for fraud patterns.", priority: "High", riskLevel: "High", consequence: "Revenue leakage via manual deletion.", proof: "Void Log" },
                { id: "HTL-FO-10", description: "Brief evening shift on VIP arrivals and special requests.", priority: "Medium", riskLevel: "Low", consequence: "Service failure for top-tier guests.", proof: "Briefing Log" },
                { id: "HTL-FO-11", description: "Verify lobby scent-machine and music levels.", priority: "Low", riskLevel: "Low", consequence: "Poor brand ambiance.", proof: "Visual Check" },
                { id: "HTL-FO-12", description: "Audit concierge bookings for 'Preferred Vendor' compliance.", priority: "High", riskLevel: "Medium", consequence: "Commission theft and safety risk.", proof: "Vendor Log" },
                { id: "HTL-FO-13", description: "Inspect entrance rug and door glass for clarity.", priority: "Low", riskLevel: "Low", consequence: "Negative aesthetic impact.", proof: "Visual Audit" },
                { id: "HTL-FO-14", description: "Verify status of airport transfer fleet arrivals.", priority: "High", riskLevel: "Low", consequence: "Guests waiting at airport.", proof: "GPS Tracker" },
                { id: "HTL-FO-15", description: "Confirm final night-audit closure and report backup.", priority: "High", riskLevel: "High", consequence: "Loss of daily transaction data.", proof: "System Receipt" }
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
                { id: "HTL-HK-01", description: "Mandatory room inspection of 10% of check-in ready rooms.", priority: "High", riskLevel: "High", consequence: "Immediate guest refund and bad reviews.", proof: "Inspection Form", trainerNotes: "Check top of AC and under bed." },
                { id: "HTL-HK-02", description: "Inspect linen quality for graying, stains, or tears.", priority: "High", riskLevel: "Medium", consequence: "Brand damage and sub-par luxury perception.", proof: "Linen Log", trainerNotes: "Reject graying linens immediately." },
                { id: "HTL-HK-03", description: "Sanitize high-touch points: remotes, switches, handles.", priority: "High", riskLevel: "High", consequence: "Infection spread among guests.", proof: "Sanitization Log" },
                { id: "HTL-HK-04", description: "Verify bathroom hygiene: check for hair, mold, and scale.", priority: "High", riskLevel: "High", consequence: "1-star review driver.", proof: "Visual Audit" },
                { id: "HTL-HK-05", description: "Audit chemical dilution ratios for cleaning agents.", priority: "Medium", riskLevel: "Medium", consequence: "Damaged surfaces or ineffective cleaning.", proof: "Mixing Log" },
                { id: "HTL-HK-06", description: "Inspect for signs of bed bugs or roaches in mattress seams.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Pest Audit" },
                { id: "HTL-HK-07", description: "Check status of 'Lost & Found' inventory and logging.", priority: "Medium", riskLevel: "Low", consequence: "Legal dispute over guest property.", proof: "L&F Registry" },
                { id: "HTL-HK-08", description: "Verify corridor cleanliness and tray removal schedule.", priority: "Medium", riskLevel: "Low", consequence: "Odors and poor brand image.", proof: "Patrol Log" },
                { id: "HTL-HK-09", description: "Audit linen-store security and key access.", priority: "High", riskLevel: "High", consequence: "Massive internal theft of stock.", proof: "Access Log" },
                { id: "HTL-HK-10", description: "Check minibar fridge functionality and expiration dates.", priority: "Medium", riskLevel: "Medium", consequence: "Selling expired goods; guest illness.", proof: "Stock Audit" },
                { id: "HTL-HK-11", description: "Inspect guest elevator mirrors and floor tracks.", priority: "Low", riskLevel: "Low", consequence: "Sloppy maintenance image.", proof: "Visual Check" },
                { id: "HTL-HK-12", description: "Verify uniform laundry turnaround for staff.", priority: "Medium", riskLevel: "Low", consequence: "Poor staff presentation.", proof: "Laundry Log" },
                { id: "HTL-HK-13", description: "Audit daily room-cleaning TAT (Target 30 mins).", priority: "Low", riskLevel: "Low", consequence: "Delayed check-ins during peak.", proof: "TAT Sheet" },
                { id: "HTL-HK-14", description: "Check functionality of guest-room safes and batteries.", priority: "High", riskLevel: "High", consequence: "Security failure for guest assets.", proof: "Battery Test" },
                { id: "HTL-HK-15", description: "Final supervisor sign-off on public area readiness.", priority: "High", riskLevel: "Medium", consequence: "Unmet standards in lobby/washrooms.", proof: "Daily Checklist" }
            ]
        }
    ]
};
