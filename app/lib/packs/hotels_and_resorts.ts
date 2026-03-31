
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
                { id: "HTL-FO-05", description: "Reconcile daily cash float and credit card settlements.", priority: "High", riskLevel: "High", consequence: "Silent internal cash theft.", proof: "Settlement Log" }
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
                { id: "HTL-HK-05", description: "Inspect for signs of bed bugs or roaches in mattress seams.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Pest Audit" }
            ]
        },
        {
            title: "Room Service & Minibar",
            department: "F&B",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Governance for in-room dining and amenities.",
            icon: "utensils",
            tasks: [
                { id: "HTL-RS-01", description: "Inter-phone Dial Test: pickup in < 3 rings.", priority: "High", riskLevel: "Medium", consequence: "Guest frustration and lost revenue.", proof: "Dial Log" },
                { id: "HTL-RS-02", description: "Verify Minibar expiry and seal integrity in 5 random rooms.", priority: "Medium", riskLevel: "Medium", consequence: "Selling expired product.", proof: "Visual Audit" },
                { id: "HTL-RS-03", description: "Audit tray-collection frequency in corridors.", priority: "Medium", riskLevel: "Low", consequence: "Corridor odors and poor brand image.", proof: "Patrol Log" }
            ]
        },
        {
            title: "Banquets, Wedding & Events",
            department: "Events",
            frequency: "Per Event",
            role: "Banquets Manager",
            summary: "Command for high-visibility group events.",
            icon: "calendar-heart",
            tasks: [
                { id: "HTL-EVT-01", description: "Pre-Event Technical Recce: Mics, Projectors, Wi-Fi.", priority: "High", riskLevel: "High", consequence: "High-visibility failure during event.", proof: "Tech Report" },
                { id: "HTL-EVT-02", description: "Floor Safety Audit: Check for loose cables or trip hazards.", priority: "High", riskLevel: "High", consequence: "Guest injury and liability.", proof: "Walkthrough" },
                { id: "HTL-EVT-03", description: "Wedding Buffet: Temperature log for high-risk proteins.", priority: "High", riskLevel: "High", consequence: "Mass food poisoning incident.", proof: "Core Temp Log" }
            ]
        },
        {
            title: "Engineering & MEP Vitals",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Infrastructure readiness for the property.",
            icon: "wrench",
            tasks: [
                { id: "HTL-ENG-01", description: "Log hot water temperature at the boiler outlet.", priority: "High", riskLevel: "High", consequence: "Ice-cold showers and guest refunds.", proof: "Temp Log" },
                { id: "HTL-ENG-02", description: "Test fire alarm panel and PA system functionality.", priority: "High", riskLevel: "High", consequence: "Fatal delay in emergency response.", proof: "Alarm Log" },
                { id: "HTL-ENG-03", description: "Check backup generator fuel levels and battery voltage.", priority: "High", riskLevel: "High", consequence: "Total blackout during power flicker.", proof: "Gen Log" }
            ]
        },
        {
            title: "Travel Desk, Valet & Parking",
            department: "Logistics",
            frequency: "Daily",
            role: "Security Chief",
            summary: "First and last impression governance.",
            icon: "car",
            tasks: [
                { id: "HTL-LOG-01", description: "Valet Key Vault: Reconcile keys against arrival log.", priority: "High", riskLevel: "High", consequence: "Theft or unauthorized joyrides.", proof: "Dual-Verification" },
                { id: "HTL-LOG-02", description: "Pre-existing Damage Log: Photo check of arriving cars.", priority: "High", riskLevel: "High", consequence: "False insurance claims by guests.", proof: "Photo/Checklist" },
                { id: "HTL-LOG-03", description: "Airport Transfer: Verify flight arrival times for pick-ups.", priority: "Medium", riskLevel: "Low", consequence: "Guest waiting at airport.", proof: "Flight Tracker" }
            ]
        },
        {
            title: "Digital Command & ORM",
            department: "Marketing",
            frequency: "Daily",
            role: "Admin Manager",
            summary: "Reputation and online booking pipeline protection.",
            icon: "globe",
            tasks: [
                { id: "HTL-DIG-01", description: "Review Response Pulse: Reply to Google/TripAdvisor < 24h.", priority: "High", riskLevel: "Medium", consequence: "Reputation drop and lower SEO.", proof: "Dashboard Screenshot" },
                { id: "HTL-DIG-02", description: "OTA Parity Audit: Compare direct rates vs Booking/Expedia.", priority: "High", riskLevel: "Medium", consequence: "Revenue loss or rate parity fines.", proof: "Parity Check" }
            ]
        },
        {
            title: "Lawn, Pool & Grounds",
            department: "Exterior",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Safety and aesthetic command for outdoor zones.",
            icon: "waves",
            tasks: [
                { id: "HTL-EXT-01", description: "Pool Vitals: Log pH and Chlorine every 4 hours.", priority: "High", riskLevel: "High", consequence: "Waterborne infection and health closure.", proof: "Vitals Log" },
                { id: "HTL-EXT-02", description: "Lawn Safety: Check for loose wiring or broken landscape lights.", priority: "High", riskLevel: "Medium", consequence: "Electric shock risk to children.", proof: "Patrol Log" }
            ]
        }
    ]
};
