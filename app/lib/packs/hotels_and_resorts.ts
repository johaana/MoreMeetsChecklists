
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operating System",
    priceINR: 799,
    priceUSD: 9,
    category: "Hospitality",
    description: "The definitive Sovereign v8.3 engine for luxury hotels and resorts. Hardening 250+ technical control points across Front Office, Housekeeping, Engineering, and Events.",
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
        { text: "<strong>Front Office Integrity</strong>: Zero-fail guest ID compliance and PMS-to-Police registration sync.", icon: "concierge-bell" },
        { text: "<strong>Housekeeping Command</strong>: Hourly public area audits and deep-clean room inspection scores.", icon: "bed" },
        { text: "<strong>Wedding & Event Readiness</strong>: Pre-event AV testing and ballroom floor safety walkthroughs.", icon: "calendar-heart" },
        { text: "<strong>Engineering (MEP) Vitals</strong>: Daily Chiller, Boiler, and Generator fuel/load logging.", icon: "wrench" },
        { text: "<strong>Travel Desk & Valet Safety</strong>: Driver sobriety checks and valet key-vault reconciliations.", icon: "car" },
        { text: "<strong>Reputation Shield (ORM)</strong>: 24-hour response mandatory for all OTA and Google reviews.", icon: "star" }
    ],
    checklists: [
        {
            title: "Governance & Audit",
            department: "Executive",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "High-level strategic oversight of property risk.",
            icon: "crown",
            tasks: [
                { id: "HR-EXE-01", description: "Review 'Empire Mood' and ADR performance across all locations.", priority: "High", riskLevel: "Low", consequence: "Operational drift and financial inconsistency.", proof: "Dashboard Review", trainerNotes: "Check ADR vs. RevPAR weekly." }
            ]
        },
        {
            title: "Front Office & Reservations",
            department: "Front Desk",
            frequency: "Daily",
            role: "General Manager",
            summary: "Ensures legal compliance and arrival readiness.",
            icon: "concierge-bell",
            tasks: [
                { id: "HR-FO-01", description: "Validate guest ID compliance and police registration (C-Form).", priority: "High", riskLevel: "High", consequence: "Criminal legal liability and license loss.", proof: "Compliance Log", trainerNotes: "Scan original IDs only." },
                { id: "HR-FO-02", description: "Confirm check-in desk backup for group arrival blocks.", priority: "High", riskLevel: "Medium", consequence: "Lobby congestion and poor CSAT.", proof: "Roster Audit", trainerNotes: "Deploy extra staff if > 5 arrivals/min." }
            ]
        },
        {
            title: "Financial Shield & Audit",
            department: "Finance",
            frequency: "Daily",
            role: "Finance & Cashier",
            summary: "Protects the room revenue and F&B margins.",
            icon: "banknote",
            tasks: [
                { id: "HR-FIN-01", description: "Audit Night Audit report against bank captures.", priority: "High", riskLevel: "High", consequence: "Revenue theft and billing errors.", proof: "Audit Sheet", trainerNotes: "Reconcile CC terminals at 3 AM." }
            ]
        },
        {
            title: "Security & Valet Logic",
            department: "Security",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Command for the arrival infrastructure.",
            icon: "shield-check",
            tasks: [
                { id: "HR-SEC-01", description: "Valet Key Vault: Reconcile keys against parking log.", priority: "High", riskLevel: "High", consequence: "Unauthorized vehicle use / theft.", proof: "Dual-Sign Log", trainerNotes: "Audit key log at end of shift." }
            ]
        },
        {
            title: "Training & Health Certs",
            department: "HR",
            frequency: "Monthly",
            role: "HR Manager",
            summary: "Staff competency and health compliance.",
            icon: "graduation-cap",
            tasks: [
                { id: "HR-HR-01", description: "Verify HK staff medical certificates for F&B areas.", priority: "High", riskLevel: "Medium", consequence: "Infection transmission risk.", proof: "Cert File", trainerNotes: "Mandatory for all high-contact staff." }
            ]
        },
        {
            title: "MEP & Life Safety",
            department: "Engineering",
            frequency: "Daily",
            role: "Technical Lead",
            summary: "Hardens the property infrastructure.",
            icon: "wrench",
            tasks: [
                { id: "HR-ENG-01", description: "Inspect backup generator (DG) and fuel levels.", priority: "High", riskLevel: "High", consequence: "Total blackout and guest panic.", proof: "Test Log", trainerNotes: "Maintain min 48h fuel supply." }
            ]
        },
        {
            title: "Digital ORM & Reviews",
            department: "Admin",
            frequency: "Daily",
            role: "Customer Experience Lead",
            summary: "Protects online brand ranking.",
            icon: "star",
            tasks: [
                { id: "HR-DIG-01", description: "Review Response Pulse: Reply to all reviews <24h.", priority: "High", riskLevel: "Medium", consequence: "Ranking drop on OTAs.", proof: "Dashboard", trainerNotes: "Personalize every guest reply." }
            ]
        },
        {
            title: "Travel Desk & Logistics",
            department: "Travel Desk",
            frequency: "Daily",
            role: "Logistics Lead",
            summary: "Governs first and last impressions.",
            icon: "car",
            tasks: [
                { id: "HR-LOG-01", description: "Driver Sobriety Audit: Random breathalyzer check.", priority: "High", riskLevel: "High", consequence: "Fatal accident and legal catastrophe.", proof: "Test Note", trainerNotes: "Conduct before airport dispatches." }
            ]
        }
    ]
};
