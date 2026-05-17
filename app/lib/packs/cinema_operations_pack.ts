
import type { PremiumPack } from "@/lib/premium-packs";

export const cinema_operations_pack: PremiumPack = {
    id: 'cinema_operations_pack',
    title: "Cinema Operations System",
    priceINR: 999,
    priceUSD: 12,
    competitorPriceUSD: 999,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d863f69b-8919-4115-b778-831d17d120fb',
    category: "Entertainment & Events",
    description: "The definitive Sovereign v11.9 engine for cinema groups and multiplexes. Hardening 144 technical control points to protect crowd safety, experience quality, and revenue integrity.",
    heroHeadline: "Protect Crowd Safety, Experience Quality, and Revenue Integrity.",
    heroSubheadline: "Track technical readiness, auditorium standards, and concession yields across every screen in your group.",
    pricingUrgency: "A single projection failure during a blockbuster opening or one crowd incident costs 100x more than this system.",
    consultingAnchor: 5000,
    icon: "popcorn",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Multiplex Owners", "Operations Heads", "Cinema GMs", "Technical Directors", "Concession Managers"],
    sampleItems: [
        { text: "<strong>Show Readiness Protocol</strong>: Zero-fail checks for DCP ingest, sound balance, and recliner motors pre-show.", icon: "projector" },
        { text: "<strong>Revenue Leakage Shield</strong>: Corn-to-bucket yield logic, void-bill audits, and QR ticket fraud monitoring.", icon: "banknote" }
    ],
    checklists: [
        {
            title: "Group Executive Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Cinema GM",
            summary: "High-level strategic oversight of cinema group risk and profit.",
            icon: "crown",
            tasks: [
                { id: "C-EXE-01", description: "Audit week-to-date ticket reconciliation vs bank deposits.", priority: "High", riskLevel: "High", consequence: "Massive silent revenue leakage.", proof: "Financial Match" },
                { id: "C-EXE-02", description: "Verify validity of Entertainment Tax and Fire NOC certs.", priority: "High", riskLevel: "High", consequence: "Government theater sealing.", proof: "License Registry" }
            ]
        },
        {
            title: "Projection & Technical Uptime",
            department: "Technical",
            frequency: "Daily",
            role: "Chief Projectionist",
            summary: "Zero-fail protocols for media and server uptime.",
            icon: "projector",
            tasks: Array.from({ length: 15 }, (_, i) => ({
                id: `C-PRO-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Verify DCP ingest 100% complete for today's first show.",
                    "Confirm active KDM keys for all blockbuster titles.",
                    "Execute center-auditorium dB sound level check.",
                    "Inspect projector lamp-hours vs replacement baseline.",
                    "Verify server-room AC temp (exactly 20°C).",
                    "Test UPS load capacity for 10-minute backup.",
                    "Test 3D glasses cleaning and sync status.",
                    "Verify automation logic for curtain/lighting sync."
                ][i] || "Technical readiness scan.",
                priority: "High",
                riskLevel: "High",
                consequence: "Show cancellation and 100% refund loss.",
                proof: "System Log"
            }))
        },
        {
            title: "Personnel & Compliance",
            department: "HR",
            frequency: "Daily",
            role: "HR Assistant",
            summary: "Staff competency and health governance.",
            icon: "graduation-cap",
            tasks: [
                { id: "C-HR-01", description: "Audit guard sobriety via random breathalyzer test.", priority: "High", riskLevel: "High", consequence: "Perimeter vulnerability and PR disaster.", proof: "Test Note" },
                { id: "C-HR-02", description: "Verify 100% valid health certs for food handlers.", priority: "High", riskLevel: "Medium", consequence: "Regulatory shutdown fines.", proof: "Med Registry" },
                { id: "C-HR-03", description: "Check POSH policy visibility in staff break-rooms.", priority: "High", riskLevel: "High", consequence: "Legal liability for non-disclosure.", proof: "Photo" },
                { id: "C-HR-04", description: "Inspect uniform laundry turnaround and grooming scores.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional brand image.", proof: "Briefing Log" },
                { id: "C-HR-05", description: "Audit staff locker hygiene for prohibited items.", priority: "Medium", riskLevel: "Low", consequence: "Theft and morale drop.", proof: "Visual Audit" },
                { id: "C-HR-06", description: "Update training matrix for interval crowd-surge control.", priority: "High", riskLevel: "Medium", consequence: "Safety breach during peak interval.", proof: "Training Matrix" },
                { id: "C-HR-07", description: "Match biometric logs vs OT claimed on night shows.", priority: "Medium", riskLevel: "Low", consequence: "Payroll fraud.", proof: "Log Match" },
                { id: "C-HR-08", description: "Conduct 2-minute grievance chat with support staff.", priority: "Low", riskLevel: "Low", consequence: "High churn and operational disruption.", proof: "Diary Note" },
                { id: "C-HR-09", description: "Verify correct PPE (masks/gloves) for concession staff.", priority: "High", riskLevel: "Medium", consequence: "Food contamination risk.", proof: "Visual Audit" },
                { id: "C-HR-10", description: "Execute EOD HR compliance summary.", priority: "Medium", riskLevel: "Low", consequence: "Loss of administrative oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Operations & Flow",
            department: "Operations",
            frequency: "Daily",
            role: "Lobby Manager",
            summary: "Guest flow and ambiance command.",
            icon: "users",
            tasks: Array.from({ length: 20 }, (_, i) => ({
                id: `C-OPS-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Verify lobby ambiance: Scent, Music, and Temp (23°C).",
                    "Audit restroom hourly cleaning frequency.",
                    "Test ticketing scanner battery and sync status.",
                    "Verify fire-exit path clearance pre-credits.",
                    "Execute concession yield (corn-to-bucket) audit.",
                    "Monitor interval wait-times (Target < 5 mins).",
                    "Witness nightly box-office cash drop seal."
                ][i] || "Floor operational command.",
                priority: "High",
                riskLevel: "Medium",
                consequence: "Guest rage and revenue loss.",
                proof: "Daily Log"
            }))
        }
    ]
};
