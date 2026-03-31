
import type { PremiumPack } from "@/lib/premium-packs";

export const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operating System",
    priceINR: 799,
    priceUSD: 9,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/b0b53361-91a3-496a-a169-b5a0344d7328',
    category: "Franchise",
    description: "The definitive Sovereign v4.4 engine for multi-unit franchise groups. Standardizing 150+ control points from Royalty protection to local brand standards.",
    heroHeadline: "Scale Your Brand Without Losing Control",
    heroSubheadline: "Track every outlet, monitor brand standards, and protect your royalty stream—across 100+ technical control points.",
    pricingUrgency: "A single failed outlet or one brand-damaging viral incident costs 100x more than this entire system.",
    consultingAnchor: 15000,
    icon: "store",
    badgeText: "Scale Ready",
    badgeVariant: "accent",
    whoIsItFor: ["Franchise Owners", "Heads of Operations", "Franchise Development Managers", "Regional Managers", "Brand Custodians"],
    sampleItems: [
        { text: "<strong>Royalty Protection</strong>: Daily sales reconciliation against aggregator and bank records.", icon: "banknote" },
        { text: "<strong>Brand Consistency Engine</strong>: Visual audits for signage, uniforms, and service standards.", icon: "shield-check" },
        { text: "<strong>Local Marketing Command</strong>: Weekly activation logs for seasonal promotions and social media.", icon: "megaphone" },
        { text: "<strong>Staff Certification Audit</strong>: Tracking franchisee personnel training and groom levels.", icon: "graduation-cap" },
        { text: "<strong>Supply Chain Integrity</strong>: Auditing vendor receiving parity to stop unvetted sourcing.", icon: "truck" },
        { text: "<strong>Security & Perimeter</strong>: Visitor logs and CCTV focal point audits for high-risk zones.", icon: "shield" },
        { text: "<strong>Institutional Memory</strong>: Digital instructions that stay with the brand if a franchisee leaves.", icon: "history" }
    ],
    checklists: [
        {
            title: "Royalty & Financial Governance",
            department: "Finance",
            frequency: "Daily",
            role: "Accountant",
            summary: "Protects the franchise revenue pipeline.",
            icon: "banknote",
            tasks: [
                { id: "FR-FIN-01", description: "Reconcile aggregator dashboard gross against POS day-end report.", priority: "High", riskLevel: "High", consequence: "Unidentified commission leakage.", proof: "System Reconcile" },
                { id: "FR-FIN-02", description: "Log daily bank settlement for digital payments.", priority: "High", riskLevel: "Medium", consequence: "Uncaptured digital revenue.", proof: "Bank Note" }
            ]
        },
        {
            title: "New Franchisee Onboarding",
            department: "Onboarding",
            frequency: "Per New Franchisee",
            role: "Onboarding Manager",
            summary: "Master guide from site fit-out to grand opening.",
            icon: "user-plus",
            tasks: [
                { id: "FR-ONB-01", description: "Execute legal franchise agreement and non-compete clauses.", priority: "High", riskLevel: "High", consequence: "Legal ambiguity and IP theft risk.", proof: "Signed Documents" },
                { id: "FR-ONB-02", description: "Audit site fit-out against brand architectural standards.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent brand aesthetic.", proof: "Photo Audit" }
            ]
        },
        {
            title: "Brand Standard & Visual QC",
            department: "Operations",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Protects the visual identity of the brand.",
            icon: "eye",
            tasks: [
                { id: "FR-VIS-01", description: "Inspect external signage for illumination and damage.", priority: "Medium", riskLevel: "Low", consequence: "Diluted brand perception.", proof: "Visual Check" },
                { id: "FR-VIS-02", description: "Audit staff uniform compliance and ID badge status.", priority: "High", riskLevel: "Medium", consequence: "Professionalism drop.", proof: "Roster Audit" }
            ]
        },
        {
            title: "Local Marketing & Activation",
            department: "Marketing",
            frequency: "Weekly",
            role: "Admin Manager",
            summary: "Governs regional sales growth efforts.",
            icon: "megaphone",
            tasks: [
                { id: "FR-MKT-01", description: "Verify current seasonal promotion collateral is displayed.", priority: "High", riskLevel: "Low", consequence: "Missed sales revenue.", proof: "Photo Audit" },
                { id: "FR-MKT-02", description: "Log local Google My Business review response pulse.", priority: "High", riskLevel: "Medium", consequence: "Damaged online ranking.", proof: "Review Dashboard" }
            ]
        },
        {
            title: "Staff Certification & Training",
            department: "HR",
            frequency: "Monthly",
            role: "HR Manager",
            summary: "Ensures frontline quality through certification.",
            icon: "graduation-cap",
            tasks: [
                { id: "FR-TRN-01", description: "Audit new staff training completion certificates.", priority: "High", riskLevel: "Medium", consequence: "Service failure due to ignorance.", proof: "Cert File" },
                { id: "FR-TRN-02", description: "Conduct random 'Service Knowledge' quiz for floor staff.", priority: "Medium", riskLevel: "Low", consequence: "Slipping standards.", proof: "Quiz Score" }
            ]
        },
        {
            title: "Supply Chain & Vendor Audit",
            department: "Stores",
            frequency: "Weekly",
            role: "Receiving Lead",
            summary: "Stops unauthorized sourcing and profit leaks.",
            icon: "package-search",
            tasks: [
                { id: "FR-SUP-01", description: "Verify all incoming stock is from pre-vetted brand vendors.", priority: "High", riskLevel: "High", consequence: "Unauthorized product variants.", proof: "Vendor Log" },
                { id: "FR-SUP-02", description: "Audit weighing scale calibration using standard weight.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight.", proof: "Calibration Note" }
            ]
        },
        {
            title: "EHS & Facility Safety",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Occupational health and fire safety governance.",
            icon: "hard-hat",
            tasks: [
                { id: "FR-EHS-01", description: "Mandatory gas/electrical bank shutdown at close.", priority: "High", riskLevel: "High", consequence: "Overnight fire disaster.", proof: "Lock Log" },
                { id: "FR-EHS-02", description: "Verify fire extinguisher pressure and path clearance.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment risk.", proof: "Walkthrough" }
            ]
        },
        {
            title: "Projection & IT Systems",
            department: "IT",
            frequency: "Daily",
            role: "Technical Lead",
            summary: "Maintains the technical infrastructure.",
            icon: "monitor",
            tasks: [
                { id: "FR-TEC-01", description: "Verify POS data backup and cloud-sync status.", priority: "High", riskLevel: "High", consequence: "Total data loss.", proof: "System Sync" },
                { id: "FR-TEC-02", description: "Check CCTV recording health and camera focal points.", priority: "High", riskLevel: "High", consequence: "Loss of evidence.", proof: "Monitor Check" }
            ]
        }
    ]
};
