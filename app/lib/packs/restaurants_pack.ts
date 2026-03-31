
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System",
    category: "Hospitality",
    description: "The definitive Sovereign v4.4 engine for multi-unit food and beverage groups. Standardizing 150+ technical control points from Owner vision to kitchen hygiene.",
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
        { text: "<strong>Delivery & Aggregator Command</strong>: Technical sync for Swiggy/Zomato and tamper-seal audits.", icon: "truck" },
        { text: "<strong>Financial Shield</strong>: Unit-level tracking of Revenue, CoGS, and Waste to drive accountability.", icon: "banknote" },
        { text: "<strong>Institutional Memory</strong>: Digital instructions that stay with the brand even when your best chef resigns.", icon: "history" }
    ],
    checklists: [
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
        },
        {
            title: "Kitchen Opening & Prep",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", description: "Log temperatures of all walk-in chillers and freezers.", priority: "High", riskLevel: "High", consequence: "Pathogen growth and total stock loss.", proof: "Digital Log", trainerNotes: "Check at 8 AM daily." },
                { id: "RES-KIT-02", description: "Inspect dry storage for signs of rodents or pests.", priority: "High", riskLevel: "High", consequence: "Regulatory closure and contamination.", proof: "Visual Check" },
                { id: "RES-KIT-03", description: "Verify sanitization of all surfaces using 200ppm strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination risk.", proof: "Test Strip" },
                { id: "RES-KIT-04", description: "Calibrate all food probes using ice-point method.", priority: "Medium", riskLevel: "Medium", consequence: "False safety readings.", proof: "Calibration Log" },
                { id: "RES-KIT-05", description: "Audit staff health and grooming (nails, wounds, hair).", priority: "High", riskLevel: "Medium", consequence: "Hygiene failure.", proof: "Daily Audit" }
            ]
        },
        {
            title: "Service & Ambiance Logic",
            department: "Service",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Protects the guest experience standard.",
            icon: "armchair",
            tasks: [
                { id: "RES-DIN-01", description: "Verify table alignment and setup against brand planogram.", priority: "Low", riskLevel: "Low", consequence: "Disorganized brand appearance.", proof: "Visual Check" },
                { id: "RES-DIN-02", description: "Inspect restrooms hourly for cleanliness and stock.", priority: "High", riskLevel: "Medium", consequence: "Major driver of negative reviews.", proof: "Hourly Log" },
                { id: "RES-DIN-03", description: "Check ambiance vitals: Scent, Music Volume, Lighting.", priority: "Medium", riskLevel: "Low", consequence: "Lower guest dwell time.", proof: "Daily Log" }
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
                { id: "RES-BAR-01", description: "Reconcile opening bottle counts against POS sales.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue leakage.", proof: "Inventory Sheet" },
                { id: "RES-BAR-02", description: "Verify garnish freshness and prep date labels.", priority: "Medium", riskLevel: "Low", consequence: "Poor drink quality.", proof: "Visual Check" },
                { id: "RES-BAR-03", description: "Audit Bar License display and age-check compliance.", priority: "High", riskLevel: "High", consequence: "Legal closure and massive fines.", proof: "Compliance Note" }
            ]
        },
        {
            title: "Delivery & Logistics",
            department: "Logistics",
            frequency: "Daily",
            role: "Dispatch Lead",
            summary: "Zero-fail framework for off-premise sales.",
            icon: "truck",
            tasks: [
                { id: "RES-DEL-01", description: "Packaging Audit: Verify bags are tamper-sealed correctly.", priority: "High", riskLevel: "Medium", consequence: "Tampering risk and poor rating.", proof: "Visual Check" },
                { id: "RES-DEL-02", description: "Monitor Rider TAT: Time from order ready to pickup.", priority: "Medium", riskLevel: "Low", consequence: "Cold food and rating drop.", proof: "TAT Log" },
                { id: "RES-DEL-03", description: "Menu Sync: Check availability on Zomato/Swiggy.", priority: "High", riskLevel: "Medium", consequence: "High cancellation rates.", proof: "App Check" }
            ]
        },
        {
            title: "Security & Perimeter",
            department: "Security",
            frequency: "Daily",
            role: "Security Head",
            summary: "Asset protection and facility safety.",
            icon: "shield-check",
            tasks: [
                { id: "RES-SEC-01", description: "Verify CCTV recording status and camera focal points.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or accidents.", proof: "System Check" },
                { id: "RES-SEC-02", description: "Audit cash-drop schedule and vault security.", priority: "High", riskLevel: "High", consequence: "Vulnerability to armed robbery.", proof: "Cash Log" },
                { id: "RES-SEC-03", description: "Patrol external exits and fire-escape clearance.", priority: "High", riskLevel: "High", consequence: "Fatal trap during emergency.", proof: "Patrol Log" }
            ]
        },
        {
            title: "EHS & Safety Audit",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Occupational health and environmental governance.",
            icon: "hard-hat",
            tasks: [
                { id: "RES-EHS-01", description: "Verify availability and expiry of First Aid kits.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat staff injuries.", proof: "Stock Check" },
                { id: "RES-EHS-02", description: "Audit waste segregation at source (Wet/Dry/Hazardous).", priority: "Medium", riskLevel: "Low", consequence: "Environmental fines.", proof: "Visual Audit" },
                { id: "RES-EHS-03", description: "Conduct 'Toolbox Talk' on safe knife handling.", priority: "High", riskLevel: "Medium", consequence: "Frequent staff injury and turnover.", proof: "Training Log" }
            ]
        },
        {
            title: "Supply Chain & Receiving",
            department: "Stores",
            frequency: "Daily",
            role: "Receiving Lead",
            summary: "Profit protection at the point of entry.",
            icon: "package-search",
            tasks: [
                { id: "RES-SUP-01", description: "Scale Calibration: Test with 1kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight.", proof: "Calibration Log" },
                { id: "RES-SUP-02", description: "Check temp of incoming high-risk dairy/protein.", priority: "High", riskLevel: "High", consequence: "Accepting compromised stock.", proof: "Receiving Log" },
                { id: "RES-SUP-03", description: "Verify FSSAI license of fresh meat suppliers.", priority: "High", riskLevel: "High", consequence: "Legal liability for unsafe sourcing.", proof: "License File" }
            ]
        }
    ]
};
