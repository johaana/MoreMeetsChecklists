
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
    priceINR: 799,
    priceUSD: 9,
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
                { id: "RES-EXE-01", description: "Review 'Empire Mood' and Group shift completion across all branches.", priority: "High", riskLevel: "Low", consequence: "Drift in operational discipline.", proof: "Dashboard Review", trainerNotes: "Check every Monday at 10 AM." },
                { id: "RES-EXE-02", description: "Audit 'Incident Log' for any unresolved food safety or legal alerts.", priority: "High", riskLevel: "High", consequence: "Massive legal liability and brand collapse.", proof: "Incident Audit", trainerNotes: "Verify all OPEN incidents have a resolution path." },
                { id: "RES-EXE-03", description: "Reconcile 'Financial Shield' savings against actual P&L wastage lines.", priority: "Medium", riskLevel: "Medium", consequence: "Profit erosion through unmonitored waste.", proof: "Financial Match", trainerNotes: "Target < 2% wastage total." }
            ]
        },
        {
            title: "Kitchen Opening & HACCP",
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
            title: "Delivery & Aggregator Logic",
            department: "Logistics",
            frequency: "Daily",
            role: "Logistics Lead",
            summary: "Zero-fail framework for off-premise sales.",
            icon: "truck",
            tasks: [
                { id: "RES-DEL-01", description: "Packaging Audit: Verify bags are tamper-sealed correctly.", priority: "High", riskLevel: "Medium", consequence: "Tampering risk and poor rating.", proof: "Visual Check" },
                { id: "RES-DEL-02", description: "Monitor Rider TAT: Time from order ready to pickup.", priority: "Medium", riskLevel: "Low", consequence: "Cold food and rating drop.", proof: "TAT Log" },
                { id: "RES-DEL-03", description: "Menu Sync: Check availability on Zomato/Swiggy.", priority: "High", riskLevel: "Medium", consequence: "High cancellation rates.", proof: "App Check" }
            ]
        },
        {
            title: "Security & Asset Protection",
            department: "Security",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Command for the physical perimeter and internal shrinkage.",
            icon: "shield-check",
            tasks: [
                { id: "RES-SEC-01", description: "Verify CCTV recording status and camera focal points.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or accidents.", proof: "System Check" },
                { id: "RES-SEC-02", description: "Audit cash-drop schedule and vault security protocols.", priority: "High", riskLevel: "High", consequence: "Vulnerability to armed robbery.", proof: "Cash Log" },
                { id: "RES-SEC-03", description: "Patrol external exits and fire-escape clearance.", priority: "High", riskLevel: "High", consequence: "Fatal trap during emergency.", proof: "Patrol Log" }
            ]
        },
        {
            title: "Financial Shield & Inventory",
            department: "Finance",
            frequency: "Daily",
            role: "Accountant",
            summary: "Profit protection and margin governance.",
            icon: "banknote",
            tasks: [
                { id: "RES-FIN-01", description: "Log Daily Gross Sales into the Financial Shield ledger.", priority: "High", riskLevel: "Medium", consequence: "Unidentified revenue gaps.", proof: "Ledger Entry" },
                { id: "RES-FIN-02", description: "Audit Raw Material Invoices against Ledger entry.", priority: "High", riskLevel: "High", consequence: "Inflated CoGS due to invoice errors.", proof: "Match Note" },
                { id: "RES-FIN-03", description: "Update Daily Waste Valuation from BOH incident logs.", priority: "High", riskLevel: "Medium", consequence: "Silent profit leakage through unmeasured waste.", proof: "Waste Log" }
            ]
        },
        {
            title: "Service & Ambiance Command",
            department: "Operations",
            frequency: "Daily",
            role: "General Manager",
            summary: "Protects the guest experience standard.",
            icon: "armchair",
            tasks: [
                { id: "RES-OPS-01", description: "Verify ambiance vitals: Scent, Music Volume, Lighting.", priority: "Medium", riskLevel: "Low", consequence: "Lower guest dwell time.", proof: "Daily Log" },
                { id: "RES-OPS-02", description: "Hourly restroom hygiene audit and stock check.", priority: "High", riskLevel: "Medium", consequence: "1-star review driver.", proof: "Hourly Sheet" }
            ]
        },
        {
            title: "Digital ORM & Reputation",
            department: "Admin",
            frequency: "Daily",
            role: "Customer Experience Lead",
            summary: "Protects the online brand ranking.",
            icon: "star",
            tasks: [
                { id: "RES-CX-01", description: "Review Response Pulse: Reply to all Google reviews <24h.", priority: "High", riskLevel: "Medium", consequence: "Damaged reputation.", proof: "Dashboard" }
            ]
        },
        {
            title: "Staff Performance & Certs",
            department: "HR",
            frequency: "Weekly",
            role: "HR Manager",
            summary: "Ensures staff are trained and compliant.",
            icon: "users",
            tasks: [
                { id: "RES-HR-01", description: "Audit staff health certificates and FSSAI training records.", priority: "High", riskLevel: "High", consequence: "Regulatory fines and closure.", proof: "Cert File" }
            ]
        }
    ]
};
