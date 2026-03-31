
import type { PremiumPack } from "@/lib/premium-packs";

export const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/b0b53361-91a3-496a-a169-b5a0344d7328',
    category: "Franchise",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.4 is the definitive plug for brand dilution and royalty leaks.",
    heroHeadline: "Scale Your Brand Without Losing Control",
    heroSubheadline: "Track every outlet, monitor brand standards, and protect your royalty stream—across 100+ technical control points.",
    pricingUrgency: "A single failed outlet or one brand-damaging viral incident costs 100x more than this entire system.",
    consultingAnchor: 15000,
    icon: "store",
    badgeText: "Scale Ready",
    badgeVariant: "accent",
    whoIsItFor: ["Franchise Owners", "Heads of Operations", "Franchise Development Managers", "Regional Managers", "Brand Custodians"],
    sampleItems: [
        { text: "<strong>2-Minute Field Pulse</strong>: Franchisees and outlet managers update status in seconds. 100% adoption across the network.", icon: "timer" },
        { text: "<strong>Brand Consistency Engine</strong>: Rigorous audits for signage, uniforms, and service standards to stop brand dilution.", icon: "shield-check" },
        { text: "<strong>Royalty Protection Logic</strong>: Identify operational failures that lead to revenue leakage and lower collections.", icon: "banknote" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show regional managers exactly what needs sign-off.", icon: "target" },
        { text: "<strong>Institutional Memory</strong>: New franchisees learn from built-in instructions. Your standard stays with the brand.", icon: "history" },
        { text: "<strong>Multi-Unit Switchboard</strong>: Run your entire global expansion from one master file. Toggle modules ON/OFF per location.", icon: "layout-grid" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own the data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "New Franchisee Onboarding",
            department: "Onboarding",
            frequency: "Per New Franchisee",
            role: "Onboarding Manager",
            summary: "Master guide from site fit-out to grand opening.",
            icon: "user-plus",
            tasks: [
                { id: "FR-ONB-01", description: "Execute legal franchise agreement and non-compete clauses.", priority: "High", riskLevel: "High", consequence: "Legal ambiguity and IP theft risk.", proof: "Signed Documents" },
                { id: "FR-ONB-02", description: "Audit site fit-out against brand architectural standards.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent brand aesthetic.", proof: "Photo Audit" },
                { id: "FR-ONB-03", description: "Verify IT/POS stack installation and internet failover readiness.", priority: "High", riskLevel: "Medium", consequence: "Inability to process sales on opening day.", proof: "System Ping" }
            ]
        },
        {
            title: "Brand & Visual Identity Audit",
            department: "Operations",
            frequency: "Quarterly",
            role: "Field Manager",
            summary: "Ensures signage, uniforms, and VM match standards.",
            icon: "eye",
            tasks: [
                { id: "FR-VM-01", description: "Inspect external signage for illumination and color accuracy.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution and poor visibility.", proof: "Visual Check" },
                { id: "FR-VM-02", description: "Audit staff uniform compliance: verify no unauthorized accessories.", priority: "Medium", riskLevel: "Low", consequence: "Unprofessional service standard.", proof: "Staff Photo" }
            ]
        },
        {
            title: "Financial & Royalty Governance",
            department: "Finance",
            frequency: "Monthly",
            role: "Accountant",
            summary: "Protects royalty streams by auditing POS integrity.",
            icon: "banknote",
            tasks: [
                { id: "FR-FIN-01", description: "Reconcile POS sales data against aggregator payouts (Zomato/Swiggy).", priority: "High", riskLevel: "High", consequence: "Unreported sales and royalty loss.", proof: "Financial Match" },
                { id: "FR-FIN-02", description: "Audit 'Voids and Refunds' log for unauthorized transaction patterns.", priority: "High", riskLevel: "High", consequence: "Employee-level internal theft.", proof: "Void Log" }
            ]
        },
        {
            title: "Training & Certification",
            department: "HR",
            frequency: "Quarterly",
            role: "HR Manager",
            summary: "Ensures franchisee staff meet brand benchmarks.",
            icon: "graduation-cap",
            tasks: [
                { id: "FR-TRN-01", description: "Verify all new outlet staff completed 'Brand Induction' module.", priority: "High", riskLevel: "Medium", consequence: "Poor guest experience scores.", proof: "Certificate Log" },
                { id: "FR-TRN-02", description: "Conduct skill-test audits for high-stakes roles (Chefs/Technicians).", priority: "Medium", riskLevel: "Medium", consequence: "Technical service failure.", proof: "Scorecard" }
            ]
        },
        {
            title: "Supply Chain & Quality Audit",
            department: "Supply Chain",
            frequency: "Monthly",
            role: "EHS Officer",
            summary: "Prevents use of unapproved vendors or short-weight stock.",
            icon: "truck",
            tasks: [
                { id: "FR-SUP-01", description: "Audit dry storage for any 'Local Purchase' of unapproved items.", priority: "High", riskLevel: "High", consequence: "Quality drift and supply chain breach.", proof: "Storage Audit" },
                { id: "FR-SUP-02", description: "Verify use of approved brand-standard packaging only.", priority: "Medium", riskLevel: "Low", consequence: "Brand erosion.", proof: "Visual Check" }
            ]
        }
    ]
};
