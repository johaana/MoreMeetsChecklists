
import type { PremiumPack } from "@/lib/premium-packs";

export const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operating System",
    priceINR: 799,
    priceUSD: 9,
    category: "Franchise",
    description: "The definitive Sovereign v8.3 engine for multi-unit groups. Standardizing 150+ control points from Royalty protection to brand standards.",
    heroHeadline: "Scale Your Brand Without Losing Control",
    heroSubheadline: "Track every outlet, monitor brand standards, and protect your royalty stream—across 150+ technical control points.",
    pricingUrgency: "A single failed outlet or one brand-damaging incident costs 100x more than this system.",
    consultingAnchor: 15000,
    icon: "store",
    badgeText: "Scale Ready",
    badgeVariant: "accent",
    whoIsItFor: ["Franchise Owners", "Heads of Operations", "Development Managers", "Regional Managers"],
    sampleItems: [
        { text: "<strong>Royalty Protection</strong>: Daily sales reconciliation against aggregator and bank records.", icon: "banknote" },
        { text: "<strong>Brand Visual QC</strong>: Signage, uniform, and ambiance audits across the group.", icon: "eye" },
        { text: "<strong>Local Marketing Command</strong>: Activation logs for seasonal promos and ORM.", icon: "megaphone" },
        { text: "<strong>Staff Cert Audit</strong>: Tracking franchisee training levels and grooming parity.", icon: "graduation-cap" },
        { text: "<strong>Supply Chain Integrity</strong>: Auditing vendor receiving to stop unvetted sourcing.", icon: "truck" }
    ],
    checklists: [
        {
            title: "Brand Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "Group-wide performance and brand protection.",
            icon: "crown",
            tasks: [
                { id: "FR-EXE-01", description: "Audit royalty payout status across all branches.", priority: "High", riskLevel: "Medium", consequence: "Unrealized income leakage.", proof: "Ledger Review", trainerNotes: "Cross-check with bank captures." }
            ]
        },
        {
            title: "Site Audit Command",
            department: "Operations",
            frequency: "Weekly",
            role: "General Manager",
            summary: "Ensures brand consistency across locations.",
            icon: "eye",
            tasks: [
                { id: "FR-OPS-01", description: "Verify signage illumination and condition.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution and poor visibility.", proof: "Photo", trainerNotes: "Check at sunset daily." }
            ]
        },
        {
            title: "Royalty & Financials",
            department: "Finance",
            frequency: "Daily",
            role: "Finance & Cashier",
            summary: "Protects the franchise revenue pipeline.",
            icon: "banknote",
            tasks: [
                { id: "FR-FIN-01", description: "Reconcile aggregator gross against POS report.", priority: "High", riskLevel: "High", consequence: "Undetected commission errors.", proof: "Match Note", trainerNotes: "Report > 1% variance." }
            ]
        },
        {
            title: "EHS Compliance",
            department: "Safety",
            frequency: "Weekly",
            role: "EHS Officer",
            summary: "Regulatory and occupational safety command.",
            icon: "hard-hat",
            tasks: [
                { id: "FR-EHS-01", description: "Verify fire extinguisher pressure and expiry.", priority: "High", riskLevel: "High", consequence: "Total liability in case of fire.", proof: "Gauge Log", trainerNotes: "Tag and date every cylinder." }
            ]
        },
        {
            title: "Staff Certification",
            department: "HR",
            frequency: "Monthly",
            role: "HR Manager",
            summary: "Tracks franchisee staff competency.",
            icon: "graduation-cap",
            tasks: [
                { id: "FR-HR-01", description: "Update training matrix for current roster.", priority: "High", riskLevel: "Medium", consequence: "Service quality drift.", proof: "Matrix File", trainerNotes: "Verify 'Brand Standard' test scores." }
            ]
        },
        {
            title: "IT & POS Integrity",
            department: "Technical",
            frequency: "Weekly",
            role: "Technical Lead",
            summary: "Protects the digital backbone.",
            icon: "laptop",
            tasks: [
                { id: "FR-IT-01", description: "Test POS backup and internet failover.", priority: "High", riskLevel: "High", consequence: "Inability to bill during peak hours.", proof: "Test Note", trainerNotes: "Test with main router off." }
            ]
        },
        {
            title: "Marketing Activation",
            department: "Admin",
            frequency: "Weekly",
            role: "Customer Experience Lead",
            summary: "Governs local branch promotions.",
            icon: "megaphone",
            tasks: [
                { id: "FR-MKT-01", description: "Log current promotional materials against schedule.", priority: "Medium", riskLevel: "Low", consequence: "Missed sales opportunities.", proof: "Campaign Log", trainerNotes: "Replace expired posters immediately." }
            ]
        },
        {
            title: "Supply Chain Audits",
            department: "Logistics",
            frequency: "Daily",
            role: "Logistics Lead",
            summary: "Ensures sourcing integrity.",
            icon: "truck",
            tasks: [
                { id: "FR-SUP-01", description: "Audit incoming stock against approved vendor list.", priority: "High", riskLevel: "High", consequence: "Compromised product and legal risk.", proof: "Receiving Note", trainerNotes: "Unauthorized vendors = red alert." }
            ]
        }
    ]
};
