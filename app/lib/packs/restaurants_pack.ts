
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System",
    category: "Hospitality",
    description: "The definitive Sovereign v4.4 engine for multi-unit food and beverage groups. Standardizing 150+ control points from Owner vision to kitchen hygiene.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks—across every branch in your group.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
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
        { text: "<strong>Service & Ambiance Logic</strong>: Hourly audits for music, lighting, and bathroom hygiene to protect guest scores.", icon: "armchair" },
        { text: "<strong>Bar & Happy Hour Governance</strong>: Blind stock counts and license compliance to stop high-value leakage.", icon: "glass-water" },
        { text: "<strong>EHS & Fire Safety</strong>: Mandatory closing protocols for gas and electrical banks to prevent overnight disasters.", icon: "flame-kindling" },
        { text: "<strong>Supply Chain Integrity</strong>: Vendor receiving audits and weighing scale calibration to ensure you get what you pay for.", icon: "package-search" },
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
                { id: "RES-KIT-06", description: "Verify oil quality using TPM meter or visual color test.", priority: "High", riskLevel: "Medium", consequence: "Carcinogenic buildup and poor food taste.", proof: "TPM Reading", trainerNotes: "Discard if TPM > 25%." },
                { id: "RES-KIT-07", description: "Check dishwashing machine final rinse temperature (Min 82°C).", priority: "High", riskLevel: "High", consequence: "Ineffective sanitization of guest utensils.", proof: "Gauge Check", trainerNotes: "Verify steam is visible." }
            ]
        },
        {
            title: "Service & Dining Logic",
            department: "Service",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Protects the guest experience standard.",
            icon: "armchair",
            tasks: [
                { id: "RES-DIN-01", description: "Verify table alignment and setup against brand planogram.", priority: "Low", riskLevel: "Low", consequence: "Disorganized brand appearance.", proof: "Visual Check", trainerNotes: "Use tile lines for alignment." },
                { id: "RES-DIN-02", description: "Inspect restrooms hourly for cleanliness and stock.", priority: "High", riskLevel: "Medium", consequence: "Major driver of negative reviews.", proof: "Hourly Log", trainerNotes: "Check for odors and mirror spots." },
                { id: "RES-DIN-03", description: "Check ambiance vitals: Scent, Music Volume, Lighting.", priority: "Medium", riskLevel: "Low", consequence: "Lower guest dwell time.", proof: "Daily Log", trainerNotes: "Music should be background, not lead." },
                { id: "RES-DIN-04", description: "Conduct pre-shift briefing: review 86'd items and specials.", priority: "High", riskLevel: "Low", consequence: "Misinformed staff and guest frustration.", proof: "Briefing Log", trainerNotes: "Quiz one server on ingredients." },
                { id: "RES-DIN-05", description: "Check all POS terminals are functional and paper is stocked.", priority: "High", riskLevel: "Medium", consequence: "Billing delays during peak rush.", proof: "System Check", trainerNotes: "Test credit card machine signal." }
            ]
        },
        {
            title: "Bar & Profit Protection",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Governance for high-margin alcohol inventory.",
            icon: "glass-water",
            tasks: [
                { id: "RES-BAR-01", description: "Reconcile opening bottle counts against POS sales.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue leakage.", proof: "Inventory Sheet", trainerNotes: "Check weight of open bottles." },
                { id: "RES-BAR-02", description: "Verify garnish freshness and prep date labels.", priority: "Medium", riskLevel: "Low", consequence: "Poor drink quality.", proof: "Visual Check", trainerNotes: "Discard garnishes older than 24h." },
                { id: "RES-BAR-03", description: "Audit Bar License display and age-check compliance.", priority: "High", riskLevel: "High", consequence: "Legal closure and massive fines.", proof: "Compliance Note", trainerNotes: "Shadow one ID check daily." },
                { id: "RES-BAR-04", description: "Clean beer draught lines and inspect keg dates.", priority: "High", riskLevel: "Medium", consequence: "Sour taste and wastage.", proof: "Line Log", trainerNotes: "Flush with cleaning solution weekly." }
            ]
        },
        {
            title: "Closing & Fire Safety",
            department: "Safety",
            frequency: "Daily",
            role: "Shift Supervisor",
            summary: "Mandatory protocols to prevent overnight disasters.",
            icon: "flame-kindling",
            tasks: [
                { id: "RES-SAFE-01", description: "Verify all gas bank valves are closed and locked.", priority: "High", riskLevel: "High", consequence: "Catastrophic gas leak or explosion.", proof: "Physical Check", trainerNotes: "Sniff check at the manifold." },
                { id: "RES-SAFE-02", description: "Shutdown all non-essential electrical equipment.", priority: "High", riskLevel: "High", consequence: "Short-circuit fire risk and energy waste.", proof: "Breaker Walkthrough", trainerNotes: "Don't turn off refrigerators." },
                { id: "RES-SAFE-03", description: "Confirm all external exits are locked and alarms armed.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry and burglary.", proof: "Alarm Signal", trainerNotes: "Check back-alley door twice." },
                { id: "RES-SAFE-04", description: "Empty all trash bins into external dumpsters.", priority: "Medium", riskLevel: "Low", consequence: "Rodent attraction and morning odor.", proof: "Visual Check", trainerNotes: "Clean bin interiors with bleach." }
            ]
        },
        {
            title: "Owner & COO Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "Strategic oversight of group performance and risk.",
            icon: "crown",
            tasks: [
                { id: "RES-EXE-01", description: "Review 'Empire Mood' and Group shift completion across all branches.", priority: "High", riskLevel: "Low", consequence: "Drift in operational discipline.", proof: "Dashboard Review" },
                { id: "RES-EXE-02", description: "Audit 'Incident Log' for any unresolved food safety or legal alerts.", priority: "High", riskLevel: "High", consequence: "Massive legal liability and brand collapse.", proof: "Incident Audit" },
                { id: "RES-EXE-03", description: "Reconcile 'ROI Engine' savings against actual P&L wastage lines.", priority: "Medium", riskLevel: "Medium", consequence: "Profit erosion through unmonitored waste.", proof: "Financial Match" }
            ]
        }
    ]
};
