
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
        },
        {
            title: "Room Service & Minibar",
            department: "F&B",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Governance for in-room dining and amenities.",
            icon: "utensils",
            tasks: [
                { id: "HR-RS-01", description: "Room Service Inter-phone Test: Verify desk pickup in <3 rings.", priority: "High", riskLevel: "Medium", consequence: "Lost orders and guest frustration.", proof: "Dial Log" },
                { id: "HR-RS-02", description: "Utensil Audit: Check silver polish and chip-free plates.", priority: "Medium", riskLevel: "Low", consequence: "Sub-par luxury perception.", proof: "Visual Audit" },
                { id: "HR-RS-03", description: "Tray Collection Patrol: Hourly walkthrough to remove corridor trays.", priority: "Medium", riskLevel: "Low", consequence: "Odors and poor brand image.", proof: "Patrol Log" }
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
                { id: "HR-EVT-01", description: "Technical Recce: Test projector, mics, and Wi-Fi 4 hours pre-event.", priority: "High", riskLevel: "High", consequence: "High-visibility event failure.", proof: "Tech Report" },
                { id: "HR-EVT-02", description: "Floor Safety Audit: Check for loose cables or trip hazards in halls.", priority: "High", riskLevel: "High", consequence: "Guest injury and liability.", proof: "Walkthrough" },
                { id: "HR-EVT-03", description: "Wedding Floor 'Dance Readiness': Inspect for slick spots or debris.", priority: "High", riskLevel: "Medium", consequence: "Accident during key moment.", proof: "Visual Sign-off" }
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
                { id: "HR-ENG-01", description: "Check HVAC chiller/units and monitor lobby temp (Target: 23°C).", priority: "High", riskLevel: "Medium", consequence: "Guest discomfort.", proof: "BMS Reading" },
                { id: "HR-ENG-02", description: "Inspect backup generator (DG) and fuel levels (Min 48h run).", priority: "High", riskLevel: "High", consequence: "Total blackout during power failure.", proof: "Test Log" },
                { id: "HR-ENG-03", description: "Verify hot water supply temperature at the boiler (Target: 55°C).", priority: "High", riskLevel: "High", consequence: "Ice-cold showers.", proof: "Temp Log" }
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
                { id: "HR-VAL-01", description: "Valet Key Vault: Reconcile total keys against parking log.", priority: "High", riskLevel: "High", consequence: "Theft / unauthorized joyrides.", proof: "Dual-Verification Log" },
                { id: "HR-VAL-02", description: "Valet Damage Audit: Log any pre-existing dents on arrival.", priority: "High", riskLevel: "High", consequence: "False insurance claims by guests.", proof: "Photo/Checksheet" },
                { id: "HR-VAL-03", description: "Parking Perimeter: Verify barriers and entry sensors functional.", priority: "High", riskLevel: "Medium", consequence: "Security breach / revenue loss.", proof: "Test Log" }
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
                { id: "HR-DIG-01", description: "Review Response Pulse: Reply to all Google/TripAdvisor reviews <24h.", priority: "High", riskLevel: "Medium", consequence: "Damaged reputation and lower ranking.", proof: "Review Dashboard" },
                { id: "HR-DIG-02", description: "OTA Inventory Sync: Verify Expedia/Booking prices match direct site.", priority: "High", riskLevel: "High", consequence: "Revenue loss / Rate parity fines.", proof: "Parity Check" }
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
                { id: "HR-EXT-01", description: "Pool Vitals: Log pH and Chlorine every 4 hours.", priority: "High", riskLevel: "High", consequence: "Pool infection risk and health closure.", proof: "Vitals Log" },
                { id: "HR-EXT-02", description: "Lawn Safety Audit: Check for debris, trip hazards, or stray animals.", priority: "Medium", riskLevel: "Medium", consequence: "Guest injury during outdoor events.", proof: "Patrol Log" }
            ]
        }
    ]
};
