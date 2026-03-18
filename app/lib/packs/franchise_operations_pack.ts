
import type { PremiumPack } from "@/lib/premium-packs";

export const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/b0b53361-91a3-496a-a169-b5a0344d7328',
    category: "Franchise",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the definitive plug for brand dilution and royalty leaks.",
    heroHeadline: "Scale Your Brand Without Losing Control",
    heroSubheadline: "Track every outlet, monitor brand standards, and protect your royalty stream—even when you aren't there.",
    pricingUrgency: "A single failed outlet or one brand-damaging viral incident costs 100x more than this entire system.",
    consultingAnchor: 15000,
    icon: "store",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Franchise Owners", "Heads of Operations", "Franchise Development Managers", "Regional Managers", "Brand Custodians"],
    sampleItems: [
        { text: "<strong>2-Minute Field Pulse</strong>: Franchisees and outlet managers update status in seconds. 100% adoption across the network.", icon: "timer" },
        { text: "<strong>Multi-Unit Switchboard</strong>: Run your entire global expansion from one master file. Toggle modules ON/OFF for each unique location.", icon: "layout-grid" },
        { text: "<strong>Brand Consistency Engine</strong>: Rigorous audits for signage, uniforms, and service standards to stop brand dilution.", icon: "shield-check" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show regional managers exactly what needs sign-off at each branch.", icon: "target" },
        { text: "<strong>Institutional Memory</strong>: New franchisees learn from built-in instructions. Your standard stays with the brand, not the person.", icon: "history" },
        { text: "<strong>Royalty Protection</strong>: Identify operational failures that lead to revenue leakage and lower royalty collections.", icon: "banknote" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own the data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "New Franchisee Onboarding",
            department: "Onboarding",
            frequency: "Per New Franchisee",
            role: "Onboarding Manager",
            summary: "A comprehensive checklist to guide a new franchisee from signing to grand opening.",
            icon: "user-plus",
            tasks: [
                { id: "FR-ONBOARD-01", description: "Verify final site selection and lease agreement.", priority: "High", riskLevel: "High", consequence: "A poor location is a primary cause of franchise failure.", proof: "Signed Lease" },
                { id: "FR-ONBOARD-02", description: "Execute the franchise agreement and collect initial fees.", priority: "High", riskLevel: "High", consequence: "Without a signed agreement, there is no legal basis for the relationship.", proof: "Signed Agreement" },
                { id: "FR-ONBOARD-03", description: "Provide the franchisee with the complete operations manual.", priority: "High", riskLevel: "High", consequence: "Inconsistent operations from day one, leading to brand dilution.", proof: "Manual Handover Form" },
                { id: "FR-ONBOARD-04", description: "Manage the store fit-out process according to brand guidelines.", priority: "High", riskLevel: "High", consequence: "Inconsistent store design damages brand image.", proof: "Fit-out Report" },
                { id: "FR-ONBOARD-05", description: "Train the franchisee and their key staff on all operational procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff leads to poor service and quality issues.", proof: "Training Certificates" },
                { id: "FR-ONBOARD-06", description: "Set up POS, inventory, and other required software systems.", priority: "High", riskLevel: "High", consequence: "Inability to process sales or track inventory from opening day.", proof: "System Setup Log" },
                { id: "FR-ONBOARD-07", description: "Coordinate initial inventory and supply chain setup.", priority: "High", riskLevel: "High", consequence: "Store cannot open without initial stock, causing delays.", proof: "First PO" },
                { id: "FR-ONBOARD-08", description: "Plan and execute a grand opening marketing campaign.", priority: "High", riskLevel: "Medium", consequence: "A weak opening fails to generate initial buzz.", proof: "Marketing Plan" },
                { id: "FR-ONBOARD-09", description: "Ensure all required licenses and permits are in place.", priority: "High", riskLevel: "High", consequence: "Operating without permits can lead to fines and forced closure.", proof: "Permit File" },
                { id: "FR-ONBOARD-10", description: "Conduct a final pre-opening audit to ensure readiness.", priority: "High", riskLevel: "High", consequence: "Opening with unresolved issues leads to a poor customer impression.", proof: "Audit Report" }
            ]
        },
        {
            title: "Brand & Visual Identity Audit",
            department: "Operations",
            frequency: "Quarterly",
            role: "Field Manager",
            summary: "Ensures all brand-related visual elements are consistent and up to standard.",
            icon: "eye",
            tasks: [
                { id: "BRAND-AUDIT-01", description: "Check that all interior and exterior signage is correct and in good condition.", priority: "High", riskLevel: "High", consequence: "Damaged signage makes the brand look unprofessional.", proof: "Photo Audit" },
                { id: "BRAND-AUDIT-02", description: "Verify staff uniforms are clean, correct, and worn properly.", priority: "High", riskLevel: "Medium", consequence: "Sloppy uniforms give a poor impression of brand standards.", proof: "Staff Inspection" },
                { id: "BRAND-AUDIT-03", description: "Ensure all marketing materials on display are current and brand-approved.", priority: "High", riskLevel: "High", consequence: "Using outdated materials can confuse customers.", proof: "Marketing Audit" },
                { id: "BRAND-AUDIT-04", description: "Audit store cleanliness, lighting, and ambiance.", priority: "High", riskLevel: "High", consequence: "A dirty store directly impacts customer experience.", proof: "Ambiance Checklist" },
                { id: "BRAND-AUDIT-05", description: "Check that product/service presentation meets brand standards.", priority: "High", riskLevel: "High", consequence: "Inconsistent presentation leads to a disjointed brand experience.", proof: "Product Display Audit" },
                { id: "BRAND-AUDIT-06", description: "Review local social media and advertising for brand compliance.", priority: "High", riskLevel: "High", consequence: "Off-brand local marketing can damage the entire brand's reputation.", proof: "Social Media Review" },
                { id: "BRAND-AUDIT-07", description: "Ensure the correct brand music or scent profile is being used.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent sensory branding dilutes the experience.", proof: "Sensory Audit" },
                { id: "BRAND-AUDIT-08", description: "Provide a detailed report to the franchisee with required corrective actions.", priority: "High", riskLevel: "High", consequence: "Compliance issues are likely to be ignored without a report.", proof: "Audit Report" },
                { id: "BRAND-AUDIT-09", description: "Check window displays for compliance with current campaign.", priority: "High", riskLevel: "Medium", consequence: "Failure to update window displays leads to missed sales.", proof: "Photo Audit" },
                { id: "BRAND-AUDIT-10", description: "Verify correct use of brand packaging.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent packaging degrades brand perception.", proof: "Packaging Check" }
            ]
        }
    ]
};
