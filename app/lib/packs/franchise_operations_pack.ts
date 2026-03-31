
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
            tasks: []
        },
        {
            title: "Brand & Visual Identity Audit",
            department: "Operations",
            frequency: "Quarterly",
            role: "Field Manager",
            summary: "Ensures signage, uniforms, and VM match standards.",
            icon: "eye",
            tasks: []
        },
        {
            title: "Financial & Royalty Governance",
            department: "Finance",
            frequency: "Monthly",
            role: "Accountant",
            summary: "Protects royalty streams by auditing POS integrity.",
            icon: "banknote",
            tasks: []
        },
        {
            title: "Training & Certification",
            department: "HR",
            frequency: "Quarterly",
            role: "HR Manager",
            summary: "Ensures franchisee staff meet brand benchmarks.",
            icon: "graduation-cap",
            tasks: []
        },
        {
            title: "Supply Chain & Quality Audit",
            department: "Supply Chain",
            frequency: "Monthly",
            role: "EHS Officer",
            summary: "Prevents use of unapproved vendors or short-weight stock.",
            icon: "truck",
            tasks: []
        }
    ]
};
