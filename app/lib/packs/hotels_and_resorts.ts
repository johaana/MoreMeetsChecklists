
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operating System",
    priceINR: 799,
    priceUSD: 9,
    category: "Hospitality",
    description: "The definitive Sovereign v8.5 engine for luxury hotels and resorts. Hardening 184+ technical control points across Front Office, Housekeeping, Engineering, and Events.",
    heroHeadline: "Eliminate Guest Safety Gaps and Viral Reputation Damage",
    heroSubheadline: "Track 184+ technical control points across Front Office, Housekeeping, Engineering, Events, and ORM—even when you’re not on property.",
    pricingUrgency: "One safety incident or a single negative viral review costs 100x more than this entire system.",
    consultingAnchor: 15000,
    icon: "building",
    badgeText: "V8.5 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["General Managers", "Hotel Owners", "Heads of Housekeeping", "Banqueting Directors", "Security & Valet Managers"],
    sampleItems: [
        { text: "<strong>Front Office Integrity</strong>: Zero-fail guest ID compliance and PMS-to-Police registration sync.", icon: "concierge-bell" },
        { text: "<strong>Housekeeping Command</strong>: Hourly public area audits and deep-clean room inspection scores.", icon: "bed" },
        { text: "<strong>Online Portals (MMT/MMT/Airbnb)</strong>: Rate parity audits and channel manager synchronization.", icon: "globe" },
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
            summary: "High-level strategic oversight of property risk and channel parity.",
            icon: "crown",
            tasks: [
                { id: "HR-EXE-01", description: "Review 'Empire Mood' and ADR performance across all locations.", priority: "High", riskLevel: "Low", consequence: "Operational drift and financial inconsistency.", proof: "Dashboard Review", trainerNotes: "Check ADR vs. RevPAR weekly." },
                { id: "HR-EXE-02", description: "Audit Night Audit report against bank captures.", priority: "High", riskLevel: "High", consequence: "Revenue theft and billing errors.", proof: "Audit Sheet", trainerNotes: "Reconcile CC terminals at 3 AM." },
                { id: "HR-EXE-03", description: "Verify insurance validity for Public Liability and Fire.", priority: "High", riskLevel: "High", consequence: "Total financial ruin during a major incident.", proof: "Policy File", trainerNotes: "Check expiry 60 days early." },
                { id: "HR-EXE-04", description: "Audit MMT/Goibibo commission invoices vs. actual stays.", priority: "High", riskLevel: "Medium", consequence: "Overpaying commissions on cancelled/no-show bookings.", proof: "Ledger Match", trainerNotes: "Flag 'No-Show' disputes by 5th of every month." }
            ]
        },
        {
            title: "Front Office & Reservations",
            department: "Front Desk",
            frequency: "Daily",
            role: "General Manager",
            summary: "Ensures legal compliance, OTA voucher verification, and arrival readiness.",
            icon: "concierge-bell",
            tasks: [
                { id: "HR-FO-01", description: "Validate guest ID compliance and police registration (C-Form).", priority: "High", riskLevel: "High", consequence: "Criminal legal liability and license loss.", proof: "Compliance Log", trainerNotes: "Scan original IDs only." },
                { id: "HR-FO-02", description: "Verify MMT/Goibibo/Airbnb booking vouchers on arrival.", priority: "High", riskLevel: "Medium", consequence: "Guest disputes and check-in delays.", proof: "PMS Match", trainerNotes: "Cross-check voucher ID with PMS booking notes." },
                { id: "HR-FO-03", description: "Confirm Airbnb pre-arrival messaging 'Welcome Protocol' is sent.", priority: "Medium", riskLevel: "Low", consequence: "Poor communication scores on Airbnb.", proof: "App Inbox", trainerNotes: "Include parking and entry instructions." }
            ]
        },
        {
            title: "Finance & Billing Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance & Cashier",
            summary: "Manages billing integrity and high-value assets.",
            icon: "banknote",
            tasks: [
                { id: "HR-FIN-01", description: "Blind Count: Reconcile clean linen against laundry invoice.", priority: "High", riskLevel: "Medium", consequence: "Silent theft of property assets.", proof: "Stock Sheet", trainerNotes: "Audit 5% of bundles randomly." },
                { id: "HR-FIN-02", description: "Verify Petty Cash vouchers against manager approvals.", priority: "Medium", riskLevel: "High", consequence: "Internal leakage and fraud.", proof: "Voucher Audit", trainerNotes: "Signature required for all cash out." }
            ]
        },
        {
            title: "Security, Pool & CCTV",
            department: "Security",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Command for the arrival infrastructure and safety zones.",
            icon: "shield-check",
            tasks: [
                { id: "HR-SEC-01", description: "Valet Key Vault: Reconcile keys against parking log.", priority: "High", riskLevel: "High", consequence: "Unauthorized vehicle use / theft.", proof: "Dual-Sign Log", trainerNotes: "Audit key log at end of shift." },
                { id: "HR-SEC-02", description: "Pool Vitals: Log pH and Chlorine every 4 hours.", priority: "High", riskLevel: "High", consequence: "Waterborne illness and health shutdown.", proof: "Temp Log", trainerNotes: "Target pH: 7.2 - 7.6." },
                { id: "HR-SEC-03", description: "CCTV Heartbeat: Verify 30-day recording backup status.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance/legal.", proof: "System Screen", trainerNotes: "Check time-stamp synchronization." }
            ]
        },
        {
            title: "Training & Grooming",
            department: "HR",
            frequency: "Monthly",
            role: "HR Manager",
            summary: "Staff competency and health compliance.",
            icon: "graduation-cap",
            tasks: [
                { id: "HR-HR-01", description: "Verify staff medical certificates for F&B handlers.", priority: "High", riskLevel: "Medium", consequence: "Infection transmission risk.", proof: "Cert File", trainerNotes: "Renew 30 days before expiry." },
                { id: "HR-HR-02", description: "Audit uniform grooming at morning shift briefings.", priority: "Low", riskLevel: "Low", consequence: "Luxury brand dilution.", proof: "Briefing Log", trainerNotes: "Check name-tags and hairnets." }
            ]
        },
        {
            title: "Wi-Fi & Engineering",
            department: "Engineering",
            frequency: "Daily",
            role: "Technical Lead",
            summary: "Hardens the property infrastructure and digital backbone.",
            icon: "wifi",
            tasks: [
                { id: "HR-ENG-01", description: "Guest Wi-Fi Speedtest: Verify >20Mbps in public zones.", priority: "Medium", riskLevel: "Low", consequence: "Negative reviews from business travelers.", proof: "Speedtest App", trainerNotes: "Check 'Lobby' and 'Business Center'." },
                { id: "HR-ENG-02", description: "Inspect backup generator (DG) and fuel levels.", priority: "High", riskLevel: "High", consequence: "Total blackout and guest panic.", proof: "Test Log", trainerNotes: "Maintain min 48h fuel supply." }
            ]
        },
        {
            title: "Digital Portals & Reputation",
            department: "Admin",
            frequency: "Daily",
            role: "Customer Experience Lead",
            summary: "Governs online portals (MMT, Goibibo, Airbnb) and reputation.",
            icon: "globe",
            tasks: [
                { id: "HR-PORT-01", description: "Rate Parity Audit: Check MMT/Goibibo vs. Direct Site.", priority: "High", riskLevel: "High", consequence: "Platform 'Deprioritization' and lower search visibility.", proof: "Parity Check", trainerNotes: "Rates must be within 1% variance." },
                { id: "HR-PORT-02", description: "Airbnb/MMT Review Response: Reply to all portal feedback <24h.", priority: "High", riskLevel: "Medium", consequence: "Ranking drop on portals.", proof: "Dashboard", trainerNotes: "Personalize every guest reply; mention their specific feedback." },
                { id: "HR-PORT-03", description: "Inventory Sync: Verify Room Availability across all channels.", priority: "High", riskLevel: "High", consequence: "Overbooking and refund penalties from OTAs.", proof: "Channel Mgr Sync", trainerNotes: "Manual check of last 5 rooms at peak occupancy." }
            ]
        },
        {
            title: "Vendors & Fleet Logistics",
            department: "Logistics",
            frequency: "Daily",
            role: "Logistics Lead",
            summary: "Governs first impressions and supply integrity.",
            icon: "truck",
            tasks: [
                { id: "HR-LOG-01", description: "Driver Sobriety Audit: Random breathalyzer check.", priority: "High", riskLevel: "High", consequence: "Fatal accident and legal catastrophe.", proof: "Test Note", trainerNotes: "Conduct before airport dispatches." },
                { id: "HR-LOG-02", description: "Vendor Receiving: Reconcile weight against invoice.", priority: "Medium", riskLevel: "Medium", consequence: "Paying for missing stock.", proof: "Weighing Scale", trainerNotes: "Reject variance > 2%." },
                { id: "HR-LOG-03", description: "Garden Presentation: Verify irrigation and debris removal.", priority: "Low", riskLevel: "Low", consequence: "Poor curb appeal.", proof: "Visual Check", trainerNotes: "Check planters at main porch." }
            ]
        }
    ]
};
