
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the professional plug for your operational leaks.",
    heroHeadline: "Eliminate Guest Safety Gaps and Viral Reputation Damage",
    heroSubheadline: "Track 250+ technical control points across Front Office, Housekeeping, Engineering, Events, and ORM—even when you’re not on property.",
    pricingUrgency: "One safety incident or a single negative viral review costs 100x more than this entire system.",
    consultingAnchor: 15000,
    icon: "building",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["General Managers", "Hotel Owners", "Heads of Housekeeping", "Banqueting Directors", "Security & Valet Managers"],
    sampleItems: [
        { text: "<strong>Event & Venue Command</strong>: Pre-event AV and safety audits for Weddings and Conferences.", icon: "calendar-heart" },
        { text: "<strong>Room Service Integrity</strong>: Dial-tests for inter-phones and chip-free utensil audits.", icon: "hand-platter" },
        { text: "<strong>OTA Reputation Shield</strong>: Daily pulse for review response and social media signals.", icon: "star" },
        { text: "<strong>Travel Desk & Pickups</strong>: Breathalyzer audits for drivers and flight-tracking protocols.", icon: "car" },
        { text: "<strong>Vendor & AMC Governance</strong>: Blind stock counts and service-contract tracking to stop theft.", icon: "truck" },
        { text: "<strong>Crisis Command</strong>: Protocols for medical emergencies and power shutdowns.", icon: "siren" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your data forever.", icon: "lock" }
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
                { id: "HR-FO-01", description: "Verify all arrivals against booking system (PMS vs. Channel Manager).", priority: "High", riskLevel: "High", consequence: "Overbooking conflict and forced guest relocation/denial.", proof: "System Reconcile Note", trainerNotes: "Cross-check all OTAs (Expedia, Booking.com) before shift start." },
                { id: "HR-FO-02", description: "Ensure check-in desk is staffed during peak hours (12 PM - 3 PM).", priority: "High", riskLevel: "Medium", consequence: "Long wait times leading to immediate negative first impressions.", proof: "Roster Audit" },
                { id: "HR-FO-03", description: "Validate guest ID compliance and police registration (C-Form/KYC).", priority: "High", riskLevel: "High", consequence: "Severe legal violations and potential business closure.", proof: "Compliance Log" },
                { id: "HR-FO-04", description: "Track and log unresolved guest complaints from the previous shift.", priority: "High", riskLevel: "High", consequence: "Escalated complaints turning into viral 1-star reviews.", proof: "Open Issue Log" },
                { id: "HR-FO-05", description: "Confirm all scheduled wake-up calls are logged and verified.", priority: "Medium", riskLevel: "Medium", consequence: "Guests missing flights; high dissatisfaction.", proof: "Call Log" },
                { id: "HR-FO-06", description: "Monitor early/late check-in requests and sync with Housekeeping.", priority: "Medium", riskLevel: "Low", consequence: "Room allocation conflicts.", proof: "HK Sync Log" },
                { id: "HR-FO-07", description: "Verify billing accuracy and folio items before checkout.", priority: "High", riskLevel: "Medium", consequence: "Revenue leakage and disputes.", proof: "Folio Audit" },
                { id: "HR-FO-08", description: "Check status of payment settlements and credit card pre-auths.", priority: "High", riskLevel: "High", consequence: "Direct financial loss.", proof: "Finance Reconciliation" },
                { id: "HR-FO-09", description: "Track and process all no-show bookings according to policy.", priority: "Medium", riskLevel: "Low", consequence: "Lost revenue.", proof: "No-Show Report" },
                { id: "HR-FO-10", description: "Audit lobby and entrance cleanliness and ambiance (Scent/Music).", priority: "Medium", riskLevel: "Low", consequence: "Poor first impression.", proof: "Visual Check" }
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
                { id: "HR-HK-05", description: "Inspect for signs of pests (bed bugs, roaches) in crevices.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Pest Audit" },
                { id: "HR-HK-06", description: "Verify room fragrance matches brand standards.", priority: "Low", riskLevel: "Low", consequence: "Inconsistent experience.", proof: "Olfactory Check" },
                { id: "HR-HK-07", description: "Monitor room turnaround time (TAT) for checkout rooms.", priority: "Medium", riskLevel: "Low", consequence: "Operational delays.", proof: "TAT Tracker" },
                { id: "HR-HK-08", description: "Verify dilution levels of cleaning chemicals.", priority: "Medium", riskLevel: "Medium", consequence: "Ineffective cleaning.", proof: "Dosing Log" },
                { id: "HR-HK-09", description: "Inspect public area washrooms hourly.", priority: "High", riskLevel: "Medium", consequence: "High-visibility failure.", proof: "Hourly Log" },
                { id: "HR-HK-10", description: "Track repeat cleaning issues per staff member.", priority: "High", riskLevel: "Medium", consequence: "Systemic decay.", proof: "Coaching Log" }
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
                { id: "HR-FNB-01", description: "Room Service Inter-phone Test: Verify desk pickup in <3 rings.", priority: "High", riskLevel: "Medium", consequence: "Lost orders and guest frustration.", proof: "Dial Log" },
                { id: "HR-FNB-02", description: "Utensil Audit: Check silver polish and chip-free plates for Room Service.", priority: "Medium", riskLevel: "Low", consequence: "Sub-par luxury perception.", proof: "Visual Audit" },
                { id: "HR-FNB-03", description: "Tray Collection Patrol: Hourly walkthrough to remove corridor trays.", priority: "Medium", riskLevel: "Low", consequence: "Odors and poor brand image.", proof: "Patrol Log" },
                { id: "HR-FNB-04", description: "Happy Hour Inventory: Reconcile discounted stock against POS sales.", priority: "High", riskLevel: "High", consequence: "Theft and revenue leakage.", proof: "POS Report" },
                { id: "HR-FNB-05", description: "Bar License & Age-Check Compliance Audit.", priority: "High", riskLevel: "High", consequence: "License suspension and legal fines.", proof: "Compliance Note" },
                { id: "HR-FNB-06", description: "Temperature Log: Verify all walk-in chillers and beer dispensers.", priority: "High", riskLevel: "High", consequence: "Food poisoning / flat beverage quality.", proof: "Temp Log" },
                { id: "HR-FNB-07", description: "Breakfast Buffet Readiness: Complete setup 30 mins before start.", priority: "Medium", riskLevel: "Low", consequence: "Negative morning guest experience.", proof: "Supervisor Sign-off" },
                { id: "HR-FNB-08", description: "Dishwashing Sanitizer Check: Test ppm levels of final rinse.", priority: "High", riskLevel: "High", consequence: "Pathogen transmission.", proof: "Test Strip" },
                { id: "HR-FNB-09", description: "Chef’s Tasting: Verify quality of 'Dish of the Day' consistency.", priority: "Medium", riskLevel: "Medium", consequence: "Recipe drift.", proof: "Tasting Log" },
                { id: "HR-FNB-10", description: "Kitchen Closure: Verified gas shutdown and overnight security.", priority: "High", riskLevel: "High", consequence: "Fire hazard.", proof: "Closure Log" }
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
                { id: "HR-EVT-01", description: "Technical Recce: Test projector, mics, and Wi-Fi 4 hours pre-event.", priority: "High", riskLevel: "High", consequence: "High-visibility event failure.", proof: "Tech Report" },
                { id: "HR-EVT-02", description: "Floor Safety Audit: Check for loose cables or trip hazards in halls.", priority: "High", riskLevel: "High", consequence: "Guest injury and liability.", proof: "Walkthrough" },
                { id: "HR-EVT-03", description: "Wedding Floor 'Dance Readiness': Inspect for slick spots or debris.", priority: "High", riskLevel: "Medium", consequence: "Accident during key moment.", proof: "Visual Sign-off" },
                { id: "HR-EVT-04", description: "Event Inter-phone Test: Verify direct link from hall to kitchen.", priority: "Medium", riskLevel: "Low", consequence: "Service delays during VIP events.", proof: "Dial Test" },
                { id: "HR-EVT-05", description: "Venue Turnover: Deep clean and scenting of halls post-event.", priority: "Medium", riskLevel: "Low", consequence: "Lingering odors for next booking.", proof: "Cleaning Log" },
                { id: "HR-EVT-06", description: "Emergency Exit Audit: Ensure hall exits are clear pre-occupancy.", priority: "High", riskLevel: "High", consequence: "Fatal safety violation.", proof: "Exit Photo" },
                { id: "HR-EVT-07", description: "Garden Event Lighting: Test all exterior floodlights and markers.", priority: "Medium", riskLevel: "Medium", consequence: "Security risk and poor ambiance.", proof: "Night Check" },
                { id: "HR-EVT-08", description: "Banqueting Staff Grooming Audit (VIP standard).", priority: "Medium", riskLevel: "Low", consequence: "Diluted brand perception.", proof: "Grooming Log" },
                { id: "HR-EVT-09", description: "AV/IT Support Standby: Confirm technician availability for event duration.", priority: "High", riskLevel: "Medium", consequence: "Delayed recovery from glitch.", proof: "Standby Roster" },
                { id: "HR-EVT-10", description: "Client Feedback: Verbal touch-base with host mid-event.", priority: "High", riskLevel: "Low", consequence: "Missed recovery opportunity.", proof: "Interaction Log" }
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
                { id: "HR-LSR-01", description: "Pool Vitals: Log pH and Chlorine every 4 hours.", priority: "High", riskLevel: "High", consequence: "Infection risk and health closure.", proof: "Vitals Log" },
                { id: "HR-LSR-02", description: "Pool Safety: Verify lifeguard presence and first-aid kit status.", priority: "High", riskLevel: "High", consequence: "Fatal drowning liability.", proof: "Lifeguard Log" },
                { id: "HR-LSR-03", description: "Gym Equipment: Check for worn cables or loose bolts.", priority: "High", riskLevel: "High", consequence: "Serious mechanical injury.", proof: "Inspection Log" },
                { id: "HR-LSR-04", description: "Spa Hygiene: Verify towel sanitization and room humidity levels.", priority: "Medium", riskLevel: "Medium", consequence: "Fungal growth and odor.", proof: "HK Log" },
                { id: "HR-LSR-05", description: "Pet-Friendly Audit: Check availability of pet-kits and sanitized bowls.", priority: "Medium", riskLevel: "Low", consequence: "Service failure for premium niche.", proof: "Stock Check" },
                { id: "HR-LSR-06", description: "Garden Hazard Check: Remove loose wires or stinging pests.", priority: "High", riskLevel: "Medium", consequence: "Guest injury in green zones.", proof: "Walkthrough" },
                { id: "HR-LSR-07", description: "Towel Service: Reconcile fresh vs. used towels at Pool station.", priority: "Low", riskLevel: "Low", consequence: "Service gaps during peak hours.", proof: "Stock Sheet" },
                { id: "HR-LSR-08", description: "Sauna/Steam: Verify temperature cut-off timers function.", priority: "High", riskLevel: "High", consequence: "Heat stroke / fire risk.", proof: "Test Log" },
                { id: "HR-LSR-09", description: "Pet Zone Sanitation: Deep clean dedicated pet relief areas.", priority: "High", riskLevel: "Medium", consequence: "Hygiene complaints.", proof: "Cleaning Log" },
                { id: "HR-LSR-10", description: "Water Feature Pump: Inspect for leaks or strange noise.", priority: "Low", riskLevel: "Low", consequence: "Infrastructure failure.", proof: "Mechanical Check" }
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
                { id: "HR-DIG-01", description: "Review Response Pulse: Reply to all Google/TripAdvisor reviews <24h.", priority: "High", riskLevel: "Medium", consequence: "Damaged reputation and lower ranking.", proof: "Review Dashboard" },
                { id: "HR-DIG-02", description: "OTA Inventory Sync: Verify Expedia/Booking prices match direct site.", priority: "High", riskLevel: "High", consequence: "Revenue loss / Rate parity fines.", proof: "Parity Check" },
                { id: "HR-DIG-03", description: "Social Signal: Answer all DMs and Comments on Instagram/Facebook.", priority: "Medium", riskLevel: "Low", consequence: "Missed bookings / poor engagement.", proof: "Inbox Clear" },
                { id: "HR-DIG-04", description: "Daily Highlight: Post today’s F&B or Spa offer to Social Stories.", priority: "Medium", riskLevel: "Low", consequence: "Lower ancillary revenue.", proof: "Live Post" },
                { id: "HR-DIG-05", description: "Website Health: Verify 'Book Now' button and images load correctly.", priority: "High", riskLevel: "High", consequence: "Total booking abandonment.", proof: "Self-Test" },
                { id: "HR-DIG-06", description: "Email Inbox Clean: Clear all non-junk guest inquiries.", priority: "High", riskLevel: "Low", consequence: "Delayed booking confirmations.", proof: "Inbox Zero" },
                { id: "HR-DIG-07", description: "Influencer/VIP Social Flag: Track and reply to any high-reach mentions.", priority: "Medium", riskLevel: "Medium", consequence: "Missed viral PR opportunity.", proof: "Mention Log" },
                { id: "HR-DIG-08", description: "Guest Photo Audit: Monitor user-generated content for safety leaks.", priority: "Medium", riskLevel: "Medium", consequence: "PR risk (e.g. staff smoking in background).", proof: "Search Log" },
                { id: "HR-DIG-09", description: "Competitor Rate Audit: Check 3 local hotels for tonight's pricing.", priority: "Medium", riskLevel: "Low", consequence: "Poor pricing competitiveness.", proof: "Market Log" },
                { id: "HR-DIG-10", description: "Newsletter Pulse: Send scheduled blast to repeat guests.", priority: "Low", riskLevel: "Low", consequence: "Lower direct retention.", proof: "Sent Report" }
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
                { id: "HR-LOG-01", description: "Valet Key Vault: Reconcile total keys against parking log.", priority: "High", riskLevel: "High", consequence: "Theft / unauthorized joyrides.", proof: "Dual-Verification Log" },
                { id: "HR-LOG-02", description: "Valet Damage Audit: Log any pre-existing dents on arrival.", priority: "High", riskLevel: "High", consequence: "False insurance claims by guests.", proof: "Photo/Checksheet" },
                { id: "HR-LOG-03", description: "Parking Perimeter: Verify barriers and entry sensors functional.", priority: "High", riskLevel: "Medium", consequence: "Security breach / revenue loss.", proof: "Test Log" },
                { id: "HR-LOG-04", description: "Lighting Check: Ensure 100% illumination in parking zones.", priority: "High", riskLevel: "High", consequence: "Theft / assault / guest injury.", proof: "Night Walkthrough" },
                { id: "HR-LOG-05", description: "Valet Staff Grooming & ID Badge Audit.", priority: "Low", riskLevel: "Low", consequence: "Poor brand arrival experience.", proof: "Visual Check" },
                { id: "HR-LOG-06", description: "EV Charging Station: Verify units are clear and operational.", priority: "Medium", riskLevel: "Low", consequence: "Service failure for premium guests.", proof: "Unit Status" },
                { id: "HR-LOG-07", description: "External Security Patrol: Check back-of-house entry points.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry.", proof: "Patrol Log" },
                { id: "HR-LOG-08", description: "Traffic Flow: Manage entry congestion during event hours.", priority: "Medium", riskLevel: "Low", consequence: "Gridlock at entrance.", proof: "Briefing" },
                { id: "HR-LOG-09", description: "CCTV Blind-spot Audit: Verify no parked trucks blocking cameras.", priority: "Medium", riskLevel: "High", consequence: "Loss of evidence.", proof: "Monitor Check" },
                { id: "HR-LOG-10", description: "Lost Ticket Protocol: Audit settlements for misplaced valet tickets.", priority: "Medium", riskLevel: "Medium", consequence: "Revenue leakage.", proof: "Audit Log" }
            ]
        },
        {
            title: "Travel Desk & Guest Logistics",
            department: "Concierge",
            frequency: "Daily",
            role: "Travel Desk Manager",
            summary: "Ensures zero-fail execution for guest pickups, drops, and local tours.",
            icon: "map-pin",
            tasks: [
                { id: "HR-TRV-01", description: "Verify all scheduled guest pickups against live flight/train status.", priority: "High", riskLevel: "Medium", consequence: "Guest waiting at terminal; major service failure.", proof: "Status Reconcile Log" },
                { id: "HR-TRV-02", description: "Driver Breathalyzer Audit: Random testing of on-duty drivers.", priority: "High", riskLevel: "High", consequence: "Fatal accident and catastrophic legal liability.", proof: "Audit Register" },
                { id: "HR-TRV-03", description: "Vehicle Cabin Audit: Inspect for cleanliness, water stock, and scent.", priority: "Medium", riskLevel: "Low", consequence: "Sub-par arrival experience.", proof: "Inspection Photo" },
                { id: "HR-TRV-04", description: "Itinerary Review: Brief drivers on guest tour maps and special stops.", priority: "Medium", riskLevel: "Low", consequence: "Incorrect routes and guest frustration.", proof: "Briefing Note" },
                { id: "HR-TRV-05", description: "Third-party Dispatch Audit: Verify external cabs meet brand standards.", priority: "High", riskLevel: "High", consequence: "Safety risks from unvetted external drivers.", proof: "Vendor Dispatch Log" }
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
                { id: "HR-ENG-01", description: "Check HVAC chiller/units and monitor lobby temp.", priority: "High", riskLevel: "Medium", consequence: "Guest discomfort.", proof: "BMS Reading" },
                { id: "HR-ENG-02", description: "Inspect backup generator (DG) and fuel levels.", priority: "High", riskLevel: "High", consequence: "Total blackout during power failure.", proof: "Test Log" },
                { id: "HR-ENG-03", description: "Verify hot water supply temperature at the boiler.", priority: "High", riskLevel: "High", consequence: "Ice-cold showers.", proof: "Temp Log" },
                { id: "HR-ENG-04", description: "Log and prioritize daily maintenance requests from PMS.", priority: "Medium", riskLevel: "Low", consequence: "Broken amenities.", proof: "Work Order Log" },
                { id: "HR-ENG-05", description: "Safety check of all elevators: leveling and sensors.", priority: "High", riskLevel: "High", consequence: "Entrapment risk.", proof: "Daily Log" },
                { id: "HR-ENG-06", description: "Inspect for plumbing leaks in utility shafts.", priority: "Medium", riskLevel: "Medium", consequence: "Structural damage.", proof: "Shaft Log" },
                { id: "HR-ENG-07", description: "Test fire alarm panel and smoke detector samples.", priority: "High", riskLevel: "High", consequence: "Fatal delay in emergency.", proof: "Alarm Test Log" },
                { id: "HR-ENG-08", description: "Verify water pressure at highest floor rooms.", priority: "Medium", riskLevel: "Low", consequence: "Guest shower complaints.", proof: "Pressure Gauge" },
                { id: "HR-ENG-09", description: "Audit common area lighting: replace fused bulbs.", priority: "Low", riskLevel: "Low", consequence: "Poor ambiance.", proof: "Visual Check" },
                { id: "HR-ENG-10", description: "Kitchen Equipment: Inspect Ovens and Cold Storage seals.", priority: "High", riskLevel: "Medium", consequence: "Service disruption.", proof: "PM Log" }
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
                { id: "HR-VIP-01", description: "Identify all VIP arrivals and Repeat Guests.", priority: "High", riskLevel: "Medium", consequence: "Loss of loyalty.", proof: "VIP List" },
                { id: "HR-VIP-02", description: "Verify special setups (Honeymoon, Birthday, Flowers).", priority: "High", riskLevel: "Medium", consequence: "Failure to deliver promised celebration.", proof: "Photo" },
                { id: "HR-VIP-03", description: "Assign dedicated Guest Manager for Category A VIPs.", priority: "Medium", riskLevel: "Low", consequence: "Service gaps.", proof: "Assignment Log" },
                { id: "HR-VIP-04", description: "Track and confirm special dietary/pillow requests.", priority: "High", riskLevel: "Medium", consequence: "Guest discomfort.", proof: "Request Log" },
                { id: "HR-VIP-05", description: "Courtesy Calls: Contact rooms checked in yesterday.", priority: "High", riskLevel: "Medium", consequence: "Missed recovery chance.", proof: "Call Log" },
                { id: "HR-VIP-06", description: "Handle and log all guest escalations immediately.", priority: "High", riskLevel: "High", consequence: "Legal/PR risk.", proof: "Incident Log" },
                { id: "HR-VIP-07", description: "Analyze repeat guest preferences for personalization.", priority: "Medium", riskLevel: "Low", consequence: "Missed engagement.", proof: "Profile Log" },
                { id: "HR-VIP-08", description: "Maintain the 'Guest Recognition' staff briefing notes.", priority: "Medium", riskLevel: "Low", consequence: "Staff not recognizing regulars.", proof: "Briefing Sheet" },
                { id: "HR-VIP-09", description: "Personalized farewell check for departing VIPs.", priority: "Medium", riskLevel: "Low", consequence: "Generic exit.", proof: "Departure Log" },
                { id: "HR-VIP-10", description: "Smoking Policy Audit: Deep clean check for No-Smoking rooms.", priority: "High", riskLevel: "Medium", consequence: "Odor complaints for next guest.", proof: "Room Smell Test" }
            ]
        },
        {
            title: "Supply, Vendor & AMC",
            department: "Purchasing",
            frequency: "Weekly",
            role: "Purchasing Manager",
            summary: "Governance module for supplier quality and equipment contracts.",
            icon: "truck",
            tasks: [
                { id: "HR-SUP-01", description: "Vendor Receiving: Check weight and quality pre-acceptance.", priority: "High", riskLevel: "Medium", consequence: "Paying for sub-par/missing stock.", proof: "Receiving Note" },
                { id: "HR-SUP-02", description: "AMC Audit: Verify next service date for Lifts/AC/Boilers.", priority: "High", riskLevel: "High", consequence: "Contract lapse leading to breakdown.", proof: "AMC Calendar" },
                { id: "HR-SUP-03", description: "Credit Term Audit: Check for any overdue vendor payments.", priority: "Medium", riskLevel: "Medium", consequence: "Supply chain disruption.", proof: "Finance Sheet" },
                { id: "HR-SUP-04", description: "Inventory Count: Random audit of dry-store high-value items.", priority: "High", riskLevel: "High", consequence: "Internal theft.", proof: "Stock Sheet" },
                { id: "HR-SUP-05", description: "Vendor Compliance: Check FSSAI/License of 3 major suppliers.", priority: "High", riskLevel: "High", consequence: "Regulatory liability linkage.", proof: "License File" },
                { id: "HR-SUP-06", description: "Return-to-Vendor: Track all rejected items and credit notes.", priority: "Medium", riskLevel: "Low", consequence: "Revenue loss.", proof: "RTV Log" },
                { id: "HR-SUP-07", description: "Market Survey: Compare prices of 5 bulk items against market.", priority: "Medium", riskLevel: "Low", consequence: "Inflated procurement costs.", proof: "Price Survey" },
                { id: "HR-SUP-08", description: "Store Hygiene: Inspect dry and cold stores for orderliness.", priority: "High", riskLevel: "Medium", consequence: "Pest activity.", proof: "Walkthrough" },
                { id: "HR-SUP-09", description: "Purchase Order Audit: Verify all orders have 2-level sign-off.", priority: "High", riskLevel: "High", consequence: "Unauthorized spending.", proof: "PO Log" },
                { id: "HR-SUP-10", description: "Vendor Performance Review: Rate suppliers on quality and TAT.", priority: "Low", riskLevel: "Low", consequence: "Stagnant supplier efficiency.", proof: "Scorecard" }
            ]
        }
    ]
};
