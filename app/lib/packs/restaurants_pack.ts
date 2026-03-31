
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System",
    category: "Hospitality",
    description: "The definitive Sovereign v4.4 engine for multi-unit food and beverage groups. Standardizing 150+ technical control points from Owner vision to delivery logistics.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks—across every branch in your group.",
    pricingUrgency: "A single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V4.4 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>Owner/COO Command</strong>: High-level visibility into group compliance and profit protection dashboards.", icon: "crown" },
        { text: "<strong>Kitchen Opening (HACCP)</strong>: Zero-fail protocols for temperature, hygiene, and allergen separation.", icon: "sunrise" },
        { text: "<strong>Delivery & Aggregator Logic</strong>: Menu sync for Swiggy/Zomato, tamper-seal audits, and commission reconciliation.", icon: "truck" },
        { text: "<strong>Financial & Inventory Shield</strong>: Blind stock counts and PO matching to stop high-value profit leakage.", icon: "banknote" },
        { text: "<strong>EHS & Hard Safety</strong>: Technical logs for gas banks, LOTO, and fire-pathway clearance.", icon: "shield-check" },
        { text: "<strong>Engineering & MEP Vitals</strong>: Proactive maintenance for HVAC, plumbing, and electrical banks to ensure zero downtime.", icon: "wrench" },
        { text: "<strong>Institutional Memory</strong>: Digital instructions that stay with the brand even when your best chef resigns.", icon: "history" }
    ],
    checklists: [
        {
            title: "Kitchen Opening & Food Safety",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", description: "Log temperatures of all walk-in chillers and freezers.", priority: "High", riskLevel: "High", consequence: "Pathogen growth and total stock loss.", proof: "Digital Log", trainerNotes: "Check at 8 AM daily. Reject if > 5°C." },
                { id: "RES-KIT-02", description: "Inspect dry storage for signs of rodents or pests.", priority: "High", riskLevel: "High", consequence: "Regulatory closure and contamination.", proof: "Visual Check", trainerNotes: "Look for droppings or chewed bags." },
                { id: "RES-KIT-03", description: "Verify sanitization of all surfaces using 200ppm strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination risk.", proof: "Test Strip", trainerNotes: "Dip strip for 10 seconds." },
                { id: "RES-KIT-04", description: "Calibrate all food probes using ice-point method.", priority: "Medium", riskLevel: "Medium", consequence: "False safety readings.", proof: "Calibration Log", trainerNotes: "Must read 0°C in ice slurry." },
                { id: "RES-KIT-05", description: "Audit staff health and grooming (nails, wounds, hair).", priority: "High", riskLevel: "Medium", consequence: "Hygiene failure.", proof: "Daily Audit", trainerNotes: "No open wounds allowed." },
                { id: "RES-KIT-06", description: "Verify oil quality using TPM meter (Target < 25%).", priority: "High", riskLevel: "Medium", consequence: "Carcinogenic buildup and poor food taste.", proof: "TPM Reading", trainerNotes: "Discard oil if TPM exceeds 25%." },
                { id: "RES-KIT-07", description: "Check dishwashing machine final rinse temperature (Min 82°C).", priority: "High", riskLevel: "High", consequence: "Ineffective sanitization of guest utensils.", proof: "Gauge Check", trainerNotes: "Verify steam is visible." },
                { id: "RES-KIT-08", description: "Verify allergen segregation in prep zones (Color-coded boards).", priority: "High", riskLevel: "High", consequence: "Fatal anaphylactic shock liability.", proof: "Visual Audit", trainerNotes: "Purple boards for allergens ONLY." },
                { id: "RES-KIT-09", description: "Inspect walk-in chiller gaskets for mold or tears.", priority: "Medium", riskLevel: "Low", consequence: "Energy loss and bacterial growth.", proof: "Visual Check", trainerNotes: "Clean with 10% bleach solution." },
                { id: "RES-KIT-10", description: "Confirm grease trap clear and functional.", priority: "High", riskLevel: "Medium", consequence: "Drainage backup and hygiene shutdown.", proof: "Physical Check", trainerNotes: "Clear before morning rush." }
            ]
        },
        {
            title: "Cold Chain & TPM Protocol",
            department: "Quality",
            frequency: "Daily",
            role: "Sous Chef",
            summary: "Advanced technical monitoring for production stability.",
            icon: "thermometer-snowflake",
            tasks: [
                { id: "RES-COLD-01", description: "Log walk-in chiller defrost cycle completion.", priority: "Medium", riskLevel: "Medium", consequence: "Ice buildup and compressor failure.", proof: "System Log", trainerNotes: "Defrost should trigger every 6h." },
                { id: "RES-COLD-02", description: "Verify Blast Chiller core-temp records for morning prep.", priority: "High", riskLevel: "High", consequence: "Slow cooling allows spore germination.", proof: "Core Log", trainerNotes: "Target: 70°C to 3°C in <90 mins." },
                { id: "RES-COLD-03", description: "Check temperature of high-risk delivery (Milk/Meat) on arrival.", priority: "High", riskLevel: "High", consequence: "Accepting spoiled stock.", proof: "Inward Log", trainerNotes: "Must be < 4°C at dock." },
                { id: "RES-COLD-04", description: "Audit date-labeling compliance (Prep Date vs. Expiry).", priority: "High", riskLevel: "High", consequence: "Serving expired product; FSSAI violation.", proof: "Shelf Audit", trainerNotes: "Use 'Discard' labels for end-of-day." },
                { id: "RES-COLD-05", description: "Log freezer air-curtain and door-seal integrity.", priority: "Low", riskLevel: "Low", consequence: "High energy bills and freezer burn.", proof: "Visual Check", trainerNotes: "Check for condensation on exterior." }
            ]
        },
        {
            title: "Delivery & Aggregator Command",
            department: "Logistics",
            frequency: "Daily",
            role: "Admin Manager",
            summary: "Ensures delivery excellence and aggregator profit protection.",
            icon: "truck",
            tasks: [
                { id: "RES-DEL-01", description: "Sync Aggregator 'Out of Stock' (86) list with POS.", priority: "High", riskLevel: "Medium", consequence: "High order cancellation rates and platform penalties.", proof: "App Audit", trainerNotes: "Sync Swiggy, Zomato, and Direct Web." },
                { id: "RES-DEL-02", description: "Verify tamper-evident seal stock and application.", priority: "High", riskLevel: "High", consequence: "Food tampering liability and guest safety risk.", proof: "Visual Check", trainerNotes: "Use double-seal for liquid items." },
                { id: "RES-DEL-03", description: "Reconcile aggregator terminal orders against physical POS bills.", priority: "High", riskLevel: "High", consequence: "Untracked revenue and major profit leakage.", proof: "Reconciliation Log", trainerNotes: "Perform every 4 hours." },
                { id: "RES-DEL-04", description: "Audit delivery bag sanitization and rider handoff zone.", priority: "Medium", riskLevel: "Medium", consequence: "Hygiene breakdown during last-mile delivery.", proof: "Cleaning Log", trainerNotes: "Sanitize bags with 70% Alcohol." },
                { id: "RES-DEL-05", description: "Track Rider Pickup TAT (Target < 5 mins from prep ready).", priority: "Medium", riskLevel: "Low", consequence: "Cold food delivery and negative guest ratings.", proof: "TAT Dashboard", trainerNotes: "Flag delays exceeding 10 mins." }
            ]
        },
        {
            title: "Bar & Happy Hour Control",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Governance for high-margin alcohol inventory.",
            icon: "glass-water",
            tasks: [
                { id: "RES-BAR-01", description: "Reconcile opening bottle counts against POS sales.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue leakage.", proof: "Inventory Sheet", trainerNotes: "Check weight of open bottles." },
                { id: "RES-BAR-02", description: "Verify garnish freshness and prep date labels.", priority: "Medium", riskLevel: "Low", consequence: "Poor drink quality.", proof: "Visual Check", trainerNotes: "Discard garnishes older than 24h." },
                { id: "RES-BAR-03", description: "Audit Bar License display and age-check compliance.", priority: "High", riskLevel: "High", consequence: "Legal closure and massive fines.", proof: "Compliance Note", trainerNotes: "Shadow one ID check daily." },
                { id: "RES-BAR-04", description: "Clean beer draught lines and inspect keg dates.", priority: "High", riskLevel: "Medium", consequence: "Sour taste and wastage.", proof: "Line Log", trainerNotes: "Flush with cleaning solution weekly." },
                { id: "RES-BAR-05", description: "Execute Narcotics-tier control for high-value liqueurs.", priority: "High", riskLevel: "High", consequence: "Inventory loss of premium assets.", proof: "Dual-Verification", trainerNotes: "Verify seals on 'top-shelf' stock." }
            ]
        },
        {
            title: "EHS & Safety Infrastructure",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Mandatory protocols to prevent overnight disasters.",
            icon: "hard-hat",
            tasks: [
                { id: "RES-SAFE-01", description: "Verify all gas bank valves are closed and locked.", priority: "High", riskLevel: "High", consequence: "Catastrophic gas leak or explosion.", proof: "Physical Check", trainerNotes: "Sniff check at the manifold." },
                { id: "RES-SAFE-02", description: "Shutdown all non-essential electrical equipment.", priority: "High", riskLevel: "High", consequence: "Short-circuit fire risk and energy waste.", proof: "Breaker Walkthrough", trainerNotes: "Don't turn off refrigerators." },
                { id: "RES-SAFE-03", description: "Confirm all external exits are locked and alarms armed.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry and burglary.", proof: "Alarm Signal", trainerNotes: "Check back-alley door twice." },
                { id: "RES-SAFE-04", description: "Execute LOTO (Lock-Out Tag-Out) for any equipment in repair.", priority: "High", riskLevel: "High", consequence: "Fatal electrical shock or mechanical injury.", proof: "LOTO Log", trainerNotes: "Verify zero-energy state before repair." },
                { id: "RES-SAFE-05", description: "Inspect fire extinguishers for pressure and accessibility.", priority: "High", riskLevel: "High", consequence: "Inability to fight fire during critical minutes.", proof: "Pressure Gauge", trainerNotes: "Extinguishers must be clear of boxes." }
            ]
        },
        {
            title: "Financial & Inventory Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Accountant",
            summary: "Profit protection and inventory integrity governance.",
            icon: "banknote",
            tasks: [
                { id: "RES-FIN-01", description: "Reconcile daily POS gross sales against bank settlement reports.", priority: "High", riskLevel: "High", consequence: "Unidentified revenue leakage or banking error.", proof: "Settlement Sheet" },
                { id: "RES-FIN-02", description: "Perform 'Blind Stock Count' of top 5 high-value SKUs (Salmon, Liqueur).", priority: "High", riskLevel: "High", consequence: "Internal theft masking as consumption.", proof: "Audit Sheet" },
                { id: "RES-FIN-03", description: "Audit 'Cancelled Bill' and 'Void' reports for unauthorized patterns.", priority: "High", riskLevel: "High", consequence: "Cashier-level fraud.", proof: "Void Log Audit" },
                { id: "RES-FIN-04", description: "Verify daily cash-drop to secure vault/pickup.", priority: "High", riskLevel: "High", consequence: "Loss of liquid assets during robbery.", proof: "Deposit Slip" },
                { id: "RES-FIN-05", description: "Audit vendor invoice pricing against signed master contracts.", priority: "Medium", riskLevel: "Low", consequence: "Silent margin erosion via vendor price-creep.", proof: "Pricing Match" }
            ]
        },
        {
            title: "Digital Command & ORM",
            department: "Marketing",
            frequency: "Daily",
            role: "Admin Manager",
            summary: "Protects online reputation and ranking.",
            icon: "globe",
            tasks: [
                { id: "RES-ORM-01", description: "Reply to all Google My Business reviews < 24h.", priority: "High", riskLevel: "Medium", consequence: "Ranking drop and brand damage.", proof: "Admin Dashboard", trainerNotes: "Personalize every response." },
                { id: "RES-ORM-02", description: "Review and resolve Zomato/Swiggy order complaints.", priority: "High", riskLevel: "High", consequence: "Merchant platform penalties.", proof: "App Log", trainerNotes: "Call guest if order was cancelled." },
                { id: "RES-ORM-03", description: "Check Instagram DM inbox for guest inquiries.", priority: "Medium", riskLevel: "Low", consequence: "Missed booking opportunities.", proof: "Inbox Clear", trainerNotes: "Target < 30 min response." },
                { id: "RES-ORM-04", description: "Update Google My Business 'Holiday Hours' if needed.", priority: "High", riskLevel: "Medium", consequence: "Guests arriving at a closed outlet.", proof: "System Sync", trainerNotes: "Update 7 days in advance." },
                { id: "RES-ORM-05", description: "Monitor competitor mentions and local trends.", priority: "Low", riskLevel: "Low", consequence: "Loss of market relevance.", proof: "Trend Log" }
            ]
        },
        {
            title: "Engineering & MEP Vitals",
            department: "Maintenance",
            frequency: "Daily",
            role: "Admin Manager",
            summary: "Infrastructure readiness and utility uptime.",
            icon: "wrench",
            tasks: [
                { id: "RES-MEP-01", description: "Log daily electricity and water meter readings.", priority: "Medium", riskLevel: "Low", consequence: "Undetected leaks or energy spikes.", proof: "Meter Log" },
                { id: "RES-MEP-02", description: "Verify backup generator fuel levels and battery voltage.", priority: "High", riskLevel: "High", consequence: "Blackout during peak weekend shift.", proof: "Test Log" },
                { id: "RES-MEP-03", description: "Check all floor and kitchen drains for blockage/odors.", priority: "High", riskLevel: "Medium", consequence: "Flooding and hygiene closure.", proof: "Visual Check" },
                { id: "RES-MEP-04", description: "Inspect HVAC air-filters and monitor lobby temp.", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort and high energy load.", proof: "BMS Reading" },
                { id: "RES-MEP-05", description: "Final facility shutdown check (excluding fridges).", priority: "High", riskLevel: "High", consequence: "Fire risk and utility waste.", proof: "Switch-off Log" }
            ]
        }
    ]
};
