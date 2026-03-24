
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
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the definitive plug for brand dilution and royalty leaks.",
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
            summary: "A comprehensive checklist to guide a new franchisee from signing to grand opening.",
            icon: "user-plus",
            tasks: [
                { id: "FR-ONB-01", description: "Verify final site selection and lease agreement.", priority: "High", riskLevel: "High", consequence: "A poor location is a primary cause of franchise failure.", proof: "Signed Lease", trainerNotes: "Check catchment area stats." },
                { id: "FR-ONB-02", description: "Execute the franchise agreement and collect initial fees.", priority: "High", riskLevel: "High", consequence: "Without a signed agreement, there is no legal basis for the relationship.", proof: "Signed Agreement", trainerNotes: "Verification of bank transfer needed." },
                { id: "FR-ONB-03", description: "Provide the franchisee with the complete operations manual.", priority: "High", riskLevel: "High", consequence: "Inconsistent operations from day one, leading to brand dilution.", proof: "Manual Handover Form", trainerNotes: "Get digital acknowledgement." },
                { id: "FR-ONB-04", description: "Manage the store fit-out process according to brand guidelines.", priority: "High", riskLevel: "High", consequence: "Inconsistent store design damages brand image.", proof: "Fit-out Report", trainerNotes: "Weekly site visits mandatory." },
                { id: "FR-ONB-05", description: "Train the franchisee and their key staff on all operational procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff leads to poor service and quality issues.", proof: "Training Certificates", trainerNotes: "Pass score: 90%." },
                { id: "FR-ONB-06", description: "Set up POS, inventory, and other required software systems.", priority: "High", riskLevel: "High", consequence: "Inability to process sales or track inventory from opening day.", proof: "System Setup Log", trainerNotes: "Sync with master server." },
                { id: "FR-ONB-07", description: "Coordinate initial inventory and supply chain setup.", priority: "High", riskLevel: "High", consequence: "Store cannot open without initial stock, causing delays.", proof: "First PO", trainerNotes: "Verify delivery window." },
                { id: "FR-ONB-08", description: "Plan and execute a grand opening marketing campaign.", priority: "High", riskLevel: "Medium", consequence: "A weak opening fails to generate initial buzz.", proof: "Marketing Plan", trainerNotes: "Include local influencer outreach." },
                { id: "FR-ONB-09", description: "Ensure all required licenses and permits are in place.", priority: "High", riskLevel: "High", consequence: "Operating without permits can lead to fines and forced closure.", proof: "Permit File", trainerNotes: "Check FSSAI/Trade validity." },
                { id: "FR-ONB-10", description: "Conduct a final pre-opening audit to ensure readiness.", priority: "High", riskLevel: "High", consequence: "Opening with unresolved issues leads to a poor customer impression.", proof: "Audit Report", trainerNotes: "100-point physical check." }
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
                { id: "FR-VIS-01", description: "Check that all interior and exterior signage is correct and in good condition.", priority: "High", riskLevel: "High", consequence: "Damaged signage makes the brand look unprofessional.", proof: "Photo Audit", trainerNotes: "Verify backlight functionality." },
                { id: "FR-VIS-02", description: "Verify staff uniforms are clean, correct, and worn properly.", priority: "High", riskLevel: "Medium", consequence: "Sloppy uniforms give a poor impression of brand standards.", proof: "Staff Inspection", trainerNotes: "Check for clean footwear too." },
                { id: "FR-VIS-03", description: "Ensure all marketing materials on display are current and brand-approved.", priority: "High", riskLevel: "High", consequence: "Using outdated materials can confuse customers.", proof: "Marketing Audit", trainerNotes: "Discard old campaign posters." },
                { id: "FR-VIS-04", description: "Audit store cleanliness, lighting, and ambiance.", priority: "High", riskLevel: "High", consequence: "A dirty store directly impacts customer experience.", proof: "Ambiance Checklist", trainerNotes: "Target exactly 3500K lighting." },
                { id: "FR-VIS-05", description: "Check that product/service presentation meets brand standards.", priority: "High", riskLevel: "High", consequence: "Inconsistent presentation leads to a disjointed brand experience.", proof: "Product Display Audit", trainerNotes: "Use the master planogram." }
            ]
        },
        {
            title: "Daily Operational Pulse",
            department: "Operations",
            frequency: "Daily",
            role: "Outlet Manager",
            summary: "Critical daily checks to ensure consistent performance at the unit level.",
            icon: "timer",
            tasks: [
                { id: "FR-OPS-01", description: "Verify opening time punctuality and staff attendance.", priority: "High", riskLevel: "Low", consequence: "Lost morning sales and guest frustration.", proof: "Roster Log", trainerNotes: "Manager must be first arrival." },
                { id: "FR-OPS-02", description: "Log temperature of all critical equipment (Chillers/Ovens).", priority: "High", riskLevel: "High", consequence: "Product failure and food safety risk.", proof: "Digital Log", trainerNotes: "Check at 9 AM and 4 PM." },
                { id: "FR-OPS-03", description: "Check POS system sync and internet connectivity.", priority: "High", riskLevel: "Medium", consequence: "Inability to process sales or track data.", proof: "System Check", trainerNotes: "Test backup dongle status." },
                { id: "FR-OPS-04", description: "Audit stock levels for 'Hero Products' to prevent stockouts.", priority: "High", riskLevel: "High", consequence: "Revenue loss and brand promise failure.", proof: "Inventory Check", trainerNotes: "Re-order at 20% threshold." },
                { id: "FR-OPS-05", description: "Verify cleanliness of customer restrooms every 2 hours.", priority: "Medium", riskLevel: "Medium", consequence: "Major driver of negative reviews.", proof: "Hourly Log", trainerNotes: "Refill paper towels manually." }
            ]
        },
        {
            title: "Financial & Royalty Governance",
            department: "Finance",
            frequency: "Monthly",
            role: "Financial Auditor",
            summary: "Protects the royalty stream by auditing sales integrity.",
            icon: "banknote",
            tasks: [
                { id: "FR-FIN-01", description: "Reconcile POS Gross Sales against bank settlement reports.", priority: "High", riskLevel: "High", consequence: "Under-reporting of sales and royalty leakage.", proof: "Reconciliation Sheet", trainerNotes: "Check for 'Manual' bill entries." },
                { id: "FR-FIN-02", description: "Audit 'Cancelled Bills' and 'Voided Transactions' for fraud.", priority: "High", riskLevel: "High", consequence: "Silent internal theft by staff/franchisee.", proof: "Void Log Audit", trainerNotes: "Calls to customers may be needed." },
                { id: "FR-FIN-03", description: "Verify timely payment of monthly Royalty and Marketing fees.", priority: "High", riskLevel: "High", consequence: "Breach of contract and cash flow issues.", proof: "Payment Receipt", trainerNotes: "Due by the 5th of every month." },
                { id: "FR-FIN-04", description: "Audit 'Complimentary' and 'Waste' logs for excess leakage.", priority: "Medium", riskLevel: "Medium", consequence: "Artificial reduction of royalty-eligible sales.", proof: "Log Review", trainerNotes: "Verify against visual waste log." }
            ]
        },
        {
            title: "Franchisee Support & Compliance",
            department: "Relations",
            frequency: "Monthly",
            role: "Account Manager",
            summary: "Ensures the franchisee is supported and following network-wide social and legal standards.",
            icon: "handshake",
            tasks: [
                { id: "FR-SUP-01", description: "Verify implementation of recent network-wide policy updates.", priority: "High", riskLevel: "Medium", consequence: "Gaps in network alignment and legal vulnerability.", proof: "Acknowledge Log" },
                { id: "FR-SUP-02", description: "Audit staff welfare and statutory compliance (PF/ESI) at the unit level.", priority: "High", riskLevel: "High", consequence: "Legal liability for the franchisor and brand damage.", proof: "Compliance Chalan" },
                { id: "FR-SUP-03", description: "Review franchisee marketing spend and local campaign ROI.", priority: "Medium", riskLevel: "Low", consequence: "Ineffective use of brand development funds.", proof: "Marketing Report" },
                { id: "FR-SUP-04", description: "Gather and log franchisee feedback on supply chain reliability.", priority: "Medium", riskLevel: "Medium", consequence: "Undetected bottlenecks in the central supply chain.", proof: "Feedback Log" }
            ]
        }
    ]
};
