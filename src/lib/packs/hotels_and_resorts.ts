
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
                { id: "HR-FO-01", description: "Verify all arrivals against booking system (PMS vs. Channel Manager).", priority: "High", riskLevel: "High", consequence: "Overbooking conflict and forced guest relocation/denial.", proof: "System Reconcile Note", trainerNotes: "Cross-check at start of every shift." },
                { id: "HR-FO-02", description: "Ensure check-in desk is staffed during peak hours (12 PM - 3 PM).", priority: "High", riskLevel: "Medium", consequence: "Long wait times leading to immediate negative first impressions.", proof: "Roster Audit", trainerNotes: "Assign backups for lunch breaks." },
                { id: "HR-FO-03", description: "Validate guest ID compliance and police registration (C-Form/KYC).", priority: "High", riskLevel: "High", consequence: "Severe legal violations and potential business closure.", proof: "Compliance Log", trainerNotes: "No ID, No Entry. No exceptions." },
                { id: "HR-FO-04", description: "Track and log unresolved guest complaints from the previous shift.", priority: "High", riskLevel: "High", consequence: "Escalated complaints turning into viral 1-star reviews.", proof: "Open Issue Log", trainerNotes: "Resolve in < 4 hours." },
                { id: "HR-FO-05", description: "Confirm all scheduled wake-up calls are logged and verified.", priority: "Medium", riskLevel: "Medium", consequence: "Guests missing flights; high dissatisfaction.", proof: "Call Log", trainerNotes: "Manual backup needed for PMS auto-calls." }
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
                { id: "HR-HK-01", description: "Verify all rooms cleaned and inspected before check-in time.", priority: "High", riskLevel: "High", consequence: "Immediate guest refund risk.", proof: "Inspection Sign-off", trainerNotes: "HK Supervisor must physically enter." },
                { id: "HR-HK-02", description: "Conduct random supervisor audits of 10% of occupied rooms.", priority: "High", riskLevel: "High", consequence: "Slipping standards.", proof: "Audit Scorecard", trainerNotes: "Focus on 'under-bed' and 'top-of-AC'." },
                { id: "HR-HK-03", description: "Check linen quality: scan for stains, tears, or graying.", priority: "High", riskLevel: "Medium", consequence: "Brand damage.", proof: "Linen Log", trainerNotes: "Reject grey linens immediately." },
                { id: "HR-HK-04", description: "Check bathroom hygiene: check for hair, mold, and scale.", priority: "High", riskLevel: "High", consequence: "1-star review driver.", proof: "Visual Audit", trainerNotes: "Run fingers over tiles to check for scale." },
                { id: "HR-HK-05", description: "Inspect for signs of pests (bed bugs, roaches) in crevices.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Pest Audit", trainerNotes: "Check mattress seams." }
            ]
        },
        {
            title: "F&B, Room Service & Bar",
            department: "F&B",
            frequency: "Daily",
            role: "F&B Director",
            summary: "Command module for dining, room service, and bar governance.",
            icon: "utensils",
            tasks: [
                { id: "HR-FNB-01", description: "Room Service Inter-phone Test: Verify desk pickup in <3 rings.", priority: "High", riskLevel: "Medium", consequence: "Lost orders and guest frustration.", proof: "Dial Log", trainerNotes: "Call from a random room daily." },
                { id: "HR-FNB-02", description: "Utensil Audit: Check silver polish and chip-free plates for Room Service.", priority: "Medium", riskLevel: "Low", consequence: "Sub-par luxury perception.", proof: "Visual Audit", trainerNotes: "Discard chipped bone-china." },
                { id: "HR-FNB-03", description: "Tray Collection Patrol: Hourly walkthrough to remove corridor trays.", priority: "Medium", riskLevel: "Low", consequence: "Odors and poor brand image.", proof: "Patrol Log", trainerNotes: "Trays must be gone in < 15 mins." },
                { id: "HR-FNB-04", description: "Happy Hour Inventory: Reconcile discounted stock against POS sales.", priority: "High", riskLevel: "High", consequence: "Theft and revenue leakage.", proof: "POS Report", trainerNotes: "Watch for 'unrecorded' orders." },
                { id: "HR-FNB-05", description: "Bar License & Age-Check Compliance Audit.", priority: "High", riskLevel: "High", consequence: "License suspension and legal fines.", proof: "Compliance Note", trainerNotes: "Log every ID check performed." }
            ]
        },
        {
            title: "Events, Wedding & Conference",
            department: "Banquets",
            frequency: "Per Event",
            role: "Events Manager",
            summary: "Zero-fail framework for conference halls and wedding venues.",
            icon: "calendar-heart",
            tasks: [
                { id: "HR-EVT-01", description: "Technical Recce: Test projector, mics, and Wi-Fi 4 hours pre-event.", priority: "High", riskLevel: "High", consequence: "High-visibility event failure.", proof: "Tech Report", trainerNotes: "Guest laptop must be tested too." },
                { id: "HR-EVT-02", description: "Floor Safety Audit: Check for loose cables or trip hazards in halls.", priority: "High", riskLevel: "High", consequence: "Guest injury and liability.", proof: "Walkthrough", trainerNotes: "Use professional cable-covers." },
                { id: "HR-EVT-03", description: "Wedding Floor 'Dance Readiness': Inspect for slick spots or debris.", priority: "High", riskLevel: "Medium", consequence: "Accident during key moment.", proof: "Visual Sign-off", trainerNotes: "Mop dry before first-dance." }
            ]
        },
        {
            title: "Leisure, Pool & Pet-Friendly",
            department: "Leisure",
            frequency: "Daily",
            role: "Leisure Manager",
            summary: "Governs high-risk leisure zones and niche guest services.",
            icon: "waves",
            tasks: [
                { id: "HR-LSR-01", description: "Pool Vitals: Log pH and Chlorine every 4 hours.", priority: "High", riskLevel: "High", consequence: "Pool infection risk and health closure.", proof: "Vitals Log", trainerNotes: "Target pH: 7.2 to 7.8." },
                { id: "HR-LSR-02", description: "Pool Safety: Verify lifeguard presence and first-aid kit status.", priority: "High", riskLevel: "High", consequence: "Fatal drowning liability.", proof: "Lifeguard Log", trainerNotes: "Lifeguard must not have phone." },
                { id: "HR-LSR-03", description: "Gym Equipment: Check for worn cables or loose bolts.", priority: "High", riskLevel: "High", consequence: "Serious mechanical injury.", proof: "Inspection Log", trainerNotes: "Check treadmills for belt-drift." },
                { id: "HR-LSR-04", description: "Pet-Friendly Audit: Check availability of pet-kits and sanitized bowls.", priority: "Medium", riskLevel: "Low", consequence: "Service failure for premium niche.", proof: "Stock Check", trainerNotes: "Sanitize bowls at 82°C." }
            ]
        },
        {
            title: "Digital Command & ORM",
            department: "Marketing",
            frequency: "Daily",
            role: "Digital Manager",
            summary: "Protects the online reputation and booking revenue pipeline.",
            icon: "globe",
            tasks: [
                { id: "HR-DIG-01", description: "Review Response Pulse: Reply to all Google/TripAdvisor reviews <24h.", priority: "High", riskLevel: "Medium", consequence: "Damaged reputation and lower ranking.", proof: "Review Dashboard", trainerNotes: "Personalize every response." },
                { id: "HR-DIG-02", description: "OTA Inventory Sync: Verify Expedia/Booking prices match direct site.", priority: "High", riskLevel: "High", consequence: "Revenue loss / Rate parity fines.", proof: "Parity Check", trainerNotes: "Check mobile-only rates too." },
                { id: "HR-DIG-03", description: "Social Signal: Answer all DMs and Comments on Instagram/Facebook.", priority: "Medium", riskLevel: "Low", consequence: "Missed bookings / poor engagement.", proof: "Inbox Clear", trainerNotes: "Target < 30 min response." }
            ]
        },
        {
            title: "Logistics, Valet & Parking",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Command for the arrival infrastructure and asset protection.",
            icon: "car",
            tasks: [
                { id: "HR-LOG-01", description: "Valet Key Vault: Reconcile total keys against parking log.", priority: "High", riskLevel: "High", consequence: "Theft / unauthorized joyrides.", proof: "Dual-Verification Log", trainerNotes: "Keys must stay in the locked box." },
                { id: "HR-LOG-02", description: "Valet Damage Audit: Log any pre-existing dents on arrival.", priority: "High", riskLevel: "High", consequence: "False insurance claims by guests.", proof: "Photo/Checksheet", trainerNotes: "Circle dents on the card." },
                { id: "HR-LOG-03", description: "Parking Perimeter: Verify barriers and entry sensors functional.", priority: "High", riskLevel: "Medium", consequence: "Security breach / revenue loss.", proof: "Test Log", trainerNotes: "Test manual override too." }
            ]
        },
        {
            title: "Travel Desk & Guest Logistics",
            department: "Travel Desk",
            frequency: "Daily",
            role: "Logistics Manager",
            summary: "Governs first and last impressions through airport transfers and tours.",
            icon: "plane-takeoff",
            tasks: [
                { id: "HR-TRV-01", description: "Driver Grooming Audit: Check uniform, ID, and sobriety.", priority: "High", riskLevel: "High", consequence: "Safety risk and massive brand dilution.", proof: "Sign-off Log", trainerNotes: "Drivers represent the brand off-site." },
                { id: "HR-TRV-02", description: "Fleet Hygiene Pulse: Check AC, water stock, and Wi-Fi in cars.", priority: "Medium", riskLevel: "Low", consequence: "Guest complaints during long transfers.", proof: "Vehicle Checklist", trainerNotes: "Stock chilled water daily." },
                { id: "HR-TRV-03", description: "Flight Tracking Sync: Verify arrival times for all pickups.", priority: "High", riskLevel: "Low", consequence: "Guests waiting at airport; poor first touch.", proof: "Tracking Log", trainerNotes: "Check flight stats 1h before dispatch." }
            ]
        },
        {
            title: "Engineering & Life Safety",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Hardens the property infrastructure against breakdowns.",
            icon: "wrench",
            tasks: [
                { id: "HR-ENG-01", description: "Check HVAC chiller/units and monitor lobby temp.", priority: "High", riskLevel: "Medium", consequence: "Guest discomfort.", proof: "BMS Reading", trainerNotes: "Keep lobby at exactly 23°C." },
                { id: "HR-ENG-02", description: "Inspect backup generator (DG) and fuel levels.", priority: "High", riskLevel: "High", consequence: "Total blackout during power failure.", proof: "Test Log", trainerNotes: "Maintain min 48h fuel run." },
                { id: "HR-ENG-03", description: "Verify hot water supply temperature at the boiler.", priority: "High", riskLevel: "High", consequence: "Ice-cold showers.", proof: "Temp Log", trainerNotes: "Target: 55°C at delivery point." },
                { id: "HR-ENG-04", description: "Test fire alarm panel and smoke detector samples.", priority: "High", riskLevel: "High", consequence: "Fatal delay in emergency.", proof: "Alarm Test Log", trainerNotes: "Rotate test zones weekly." }
            ]
        },
        {
            title: "VIP & Reputation",
            department: "Guest Relations",
            frequency: "Daily",
            role: "Guest Relations Manager",
            summary: "Protects the top 20% of revenue-generating guests.",
            icon: "star",
            tasks: [
                { id: "HR-VIP-01", description: "Identify all VIP arrivals and Repeat Guests.", priority: "High", riskLevel: "Medium", consequence: "Loss of loyalty.", proof: "VIP List", trainerNotes: "GM must greet VIP Tier 1." },
                { id: "HR-VIP-02", description: "Verify special setups (Honeymoon, Birthday, Flowers).", priority: "High", riskLevel: "Medium", consequence: "Failure to deliver promised celebration.", proof: "Photo", trainerNotes: "Check card spelling." },
                { id: "HR-VIP-03", description: "Handle and log all guest escalations immediately.", priority: "High", riskLevel: "High", consequence: "Legal/PR risk.", proof: "Incident Log", trainerNotes: "Escalate to GM in < 15 mins." }
            ]
        },
        {
            title: "Supply, Vendor & Inventory",
            department: "Purchasing",
            frequency: "Weekly",
            role: "Purchasing Manager",
            summary: "Governance module for supplier quality and equipment contracts.",
            icon: "truck",
            tasks: [
                { id: "HR-SUP-01", description: "Vendor Receiving: Check weight and quality pre-acceptance.", priority: "High", riskLevel: "Medium", consequence: "Paying for sub-par/missing stock.", proof: "Receiving Note", trainerNotes: "Reject bruised or wilted produce." },
                { id: "HR-SUP-02", description: "AMC Audit: Verify next service date for Lifts/AC/Boilers.", priority: "High", riskLevel: "High", consequence: "Contract lapse leading to breakdown.", proof: "AMC Calendar", trainerNotes: "Renew 30 days before expiry." },
                { id: "HR-SUP-03", description: "Blind Inventory Count: Random audit of high-value items.", priority: "High", riskLevel: "High", consequence: "Internal theft.", proof: "Stock Sheet", trainerNotes: "Audit Bar & Linen stores." }
            ]
        }
    ]
};
