
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
            summary: "A comprehensive checklist to guide a new franchisee from signing to grand opening.",
            icon: "user-plus",
            tasks: [
                { id: "FR-ONB-01", description: "Verify final site selection and lease agreement.", priority: "High", riskLevel: "High", consequence: "A poor location is a primary cause of franchise failure.", proof: "Signed Lease", trainerNotes: "Check catchment area stats." },
                { id: "FR-ONB-02", description: "Execute the franchise agreement and collect initial fees.", priority: "High", riskLevel: "High", consequence: "Without a signed agreement, there is no legal basis for the relationship.", proof: "Signed Agreement", trainerNotes: "Verification of bank transfer needed." },
                { id: "FR-ONB-03", description: "Provide the franchisee with the complete operations manual.", priority: "High", riskLevel: "High", consequence: "Inconsistent operations from day one, leading to brand dilution.", proof: "Manual Handover Form", trainerNotes: "Get digital acknowledgement." },
                { id: "FR-ONB-04", description: "Manage the store fit-out process according to brand guidelines.", priority: "High", riskLevel: "High", consequence: "Inconsistent store design damages brand image.", proof: "Fit-out Report", trainerNotes: "Weekly site visits mandatory." },
                { id: "FR-ONB-05", description: "Train the franchisee and their key staff on all operational procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff leads to poor service and quality issues.", proof: "Training Certificates", trainerNotes: "Pass score: 90%." }
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
                { id: "FR-VIS-03", description: "Ensure all marketing materials on display are current and brand-approved.", priority: "High", riskLevel: "High", consequence: "Using outdated materials can confuse customers.", proof: "Marketing Audit", trainerNotes: "Discard old campaign posters." }
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
                { id: "FR-OPS-03", description: "Check POS system sync and internet connectivity.", priority: "High", riskLevel: "Medium", consequence: "Inability to process sales or track data.", proof: "System Check", trainerNotes: "Test backup dongle status." }
            ]
        },
        {
            title: "Financial & Royalty Governance",
            department: "Finance",
            frequency: "Monthly",
            role: "Accountant",
            summary: "Protects the royalty stream by auditing sales integrity.",
            icon: "banknote",
            tasks: [
                { id: "FR-FIN-01", description: "Reconcile POS Gross Sales against bank settlement reports.", priority: "High", riskLevel: "High", consequence: "Under-reporting of sales and royalty leakage.", proof: "Reconciliation Sheet", trainerNotes: "Check for 'Manual' bill entries." },
                { id: "FR-FIN-02", description: "Audit 'Cancelled Bills' and 'Voided Transactions' for fraud.", priority: "High", riskLevel: "High", consequence: "Silent internal theft by staff/franchisee.", proof: "Void Log Audit", trainerNotes: "Calls to customers may be needed." },
                { id: "FR-FIN-03", description: "Verify timely payment of monthly Royalty and Marketing fees.", priority: "High", riskLevel: "High", consequence: "Breach of contract and cash flow issues.", proof: "Payment Receipt", trainerNotes: "Due by the 5th of every month." }
            ]
        },
        {
            title: "Training & Certification",
            department: "HR",
            frequency: "Quarterly",
            role: "HR Manager",
            summary: "Ensures staff skill levels meet the brand benchmark.",
            icon: "graduation-cap",
            tasks: [
                { id: "FR-TRN-01", description: "Audit staff certification status for all active employees.", priority: "High", riskLevel: "Medium", consequence: "Untrained staff leading to sub-par service.", proof: "Matrix Audit" },
                { id: "FR-TRN-02", description: "Conduct spot-quizzes on brand values and product knowledge.", priority: "Medium", riskLevel: "Low", consequence: "Low brand engagement.", proof: "Quiz Log" },
                { id: "FR-TRN-03", description: "Verify implementation of new seasonal menu/product training.", priority: "High", riskLevel: "High", consequence: "Service failure on new launch day.", proof: "Training Sign-off" }
            ]
        },
        {
            title: "Marketing & Local Activation",
            department: "Marketing",
            frequency: "Monthly",
            role: "Admin Manager",
            summary: "Ensures franchisees are actively driving local footfall.",
            icon: "megaphone",
            tasks: [
                { id: "FR-MKT-01", description: "Review franchisee's local social media posts for brand alignment.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution and poor quality content.", proof: "Links Audit" },
                { id: "FR-MKT-02", description: "Verify distribution of local store marketing (LSM) flyers.", priority: "Low", riskLevel: "Low", consequence: "Failure to reach local catchment area.", proof: "Photo Evidence" },
                { id: "FR-MKT-03", description: "Audit in-store POP (Point-of-Purchase) placement.", priority: "Medium", riskLevel: "Low", consequence: "Missed upsell opportunities.", proof: "Visual Check" }
            ]
        },
        {
            title: "Supply Chain & Quality Audit",
            department: "Supply Chain",
            frequency: "Monthly",
            role: "EHS Officer",
            summary: "Ensures franchisees are only using approved sources.",
            icon: "truck",
            tasks: [
                { id: "FR-SUP-01", description: "Verify all ingredients/assets are from approved vendors.", priority: "High", riskLevel: "High", consequence: "Compromised quality and safety; breach of contract.", proof: "Invoice Audit" },
                { id: "FR-SUP-02", description: "Check stock levels of proprietary branded packaging.", priority: "Medium", riskLevel: "Low", consequence: "Using unbranded packaging (Brand Damage).", proof: "Stock Count" },
                { id: "FR-SUP-03", description: "Inspect storage areas for correct temperature and FIFO.", priority: "High", riskLevel: "High", consequence: "Stock spoilage and profit loss.", proof: "Walkthrough" }
            ]
        },
        {
            title: "Franchise Executive Governance",
            department: "Management",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "Strategic oversight of the entire franchise network.",
            icon: "crown",
            tasks: [
                { id: "FR-EXE-01", description: "Review 'Empire Mood' across the entire franchise network.", priority: "High", riskLevel: "Low", consequence: "Drift in network-wide operational standards.", proof: "Dashboard Review" },
                { id: "FR-EXE-02", description: "Audit 'Incident Log' for franchisee legal or safety alerts.", priority: "High", riskLevel: "High", consequence: "PR nightmare and brand-wide lawsuits.", proof: "Incident Log" },
                { id: "FR-EXE-03", description: "Reconcile 'ROI Engine' against franchisee support spend.", priority: "Medium", riskLevel: "Medium", consequence: "Ineffective use of support resources.", proof: "Financial Match" }
            ]
        }
    ]
};
