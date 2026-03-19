
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
    heroSubheadline: "Track every outlet, monitor brand standards, and protect your royalty stream—across 100+ technical control points.",
    pricingUrgency: "A single failed outlet or one brand-damaging viral incident costs 100x more than this entire system.",
    consultingAnchor: 15000,
    icon: "store",
    badgeText: "V4.3 SOVEREIGN",
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
                { id: "FR-ONB-01", description: "Verify final site selection and lease agreement.", priority: "High", riskLevel: "High", consequence: "A poor location is a primary cause of franchise failure.", proof: "Signed Lease" },
                { id: "FR-ONB-02", description: "Execute the franchise agreement and collect initial fees.", priority: "High", riskLevel: "High", consequence: "Without a signed agreement, there is no legal basis for the relationship.", proof: "Signed Agreement" },
                { id: "FR-ONB-03", description: "Provide the franchisee with the complete operations manual.", priority: "High", riskLevel: "High", consequence: "Inconsistent operations from day one, leading to brand dilution.", proof: "Manual Handover Form" },
                { id: "FR-ONB-04", description: "Manage the store fit-out process according to brand guidelines.", priority: "High", riskLevel: "High", consequence: "Inconsistent store design damages brand image.", proof: "Fit-out Report" },
                { id: "FR-ONB-05", description: "Train the franchisee and their key staff on all operational procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff leads to poor service and quality issues.", proof: "Training Certificates" },
                { id: "FR-ONB-06", description: "Set up POS, inventory, and other required software systems.", priority: "High", riskLevel: "High", consequence: "Inability to process sales or track inventory from opening day.", proof: "System Setup Log" },
                { id: "FR-ONB-07", description: "Coordinate initial inventory and supply chain setup.", priority: "High", riskLevel: "High", consequence: "Store cannot open without initial stock, causing delays.", proof: "First PO" },
                { id: "FR-ONB-08", description: "Plan and execute a grand opening marketing campaign.", priority: "High", riskLevel: "Medium", consequence: "A weak opening fails to generate initial buzz.", proof: "Marketing Plan" },
                { id: "FR-ONB-09", description: "Ensure all required licenses and permits are in place.", priority: "High", riskLevel: "High", consequence: "Operating without permits can lead to fines and forced closure.", proof: "Permit File" },
                { id: "FR-ONB-10", description: "Conduct a final pre-opening audit to ensure readiness.", priority: "High", riskLevel: "High", consequence: "Opening with unresolved issues leads to a poor customer impression.", proof: "Audit Report" }
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
                { id: "FR-VIS-01", description: "Check that all interior and exterior signage is correct and in good condition.", priority: "High", riskLevel: "High", consequence: "Damaged signage makes the brand look unprofessional.", proof: "Photo Audit" },
                { id: "FR-VIS-02", description: "Verify staff uniforms are clean, correct, and worn properly.", priority: "High", riskLevel: "Medium", consequence: "Sloppy uniforms give a poor impression of brand standards.", proof: "Staff Inspection" },
                { id: "FR-VIS-03", description: "Ensure all marketing materials on display are current and brand-approved.", priority: "High", riskLevel: "High", consequence: "Using outdated materials can confuse customers.", proof: "Marketing Audit" },
                { id: "FR-VIS-04", description: "Audit store cleanliness, lighting, and ambiance.", priority: "High", riskLevel: "High", consequence: "A dirty store directly impacts customer experience.", proof: "Ambiance Checklist" },
                { id: "FR-VIS-05", description: "Check that product/service presentation meets brand standards.", priority: "High", riskLevel: "High", consequence: "Inconsistent presentation leads to a disjointed brand experience.", proof: "Product Display Audit" },
                { id: "FR-VIS-06", description: "Review local social media and advertising for brand compliance.", priority: "High", riskLevel: "High", consequence: "Off-brand local marketing can damage the entire brand's reputation.", proof: "Social Media Review" },
                { id: "FR-VIS-07", description: "Ensure the correct brand music or scent profile is being used.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent sensory branding dilutes the experience.", proof: "Sensory Audit" },
                { id: "FR-VIS-08", description: "Provide a detailed report to the franchisee with required corrective actions.", priority: "High", riskLevel: "High", consequence: "Compliance issues are likely to be ignored without a report.", proof: "Audit Report" },
                { id: "FR-VIS-09", description: "Check window displays for compliance with current campaign.", priority: "High", riskLevel: "Medium", consequence: "Failure to update window displays leads to missed sales.", proof: "Photo Audit" },
                { id: "FR-VIS-10", description: "Verify correct use of brand packaging.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent packaging degrades brand perception.", proof: "Packaging Check" }
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
                { id: "FR-OPS-01", description: "Verify opening time punctuality and staff attendance.", priority: "High", riskLevel: "Low", consequence: "Lost morning sales and guest frustration.", proof: "Roster Log" },
                { id: "FR-OPS-02", description: "Log temperature of all critical equipment (Chillers/Ovens).", priority: "High", riskLevel: "High", consequence: "Product failure and food safety risk.", proof: "Digital Log" },
                { id: "FR-OPS-03", description: "Check POS system sync and internet connectivity.", priority: "High", riskLevel: "Medium", consequence: "Inability to process sales or track data.", proof: "System Check" },
                { id: "FR-OPS-04", description: "Audit stock levels for 'Hero Products' to prevent stockouts.", priority: "High", riskLevel: "High", consequence: "Revenue loss and brand promise failure.", proof: "Inventory Check" },
                { id: "FR-OPS-05", description: "Verify cleanliness of customer restrooms every 2 hours.", priority: "Medium", riskLevel: "Medium", consequence: "Major driver of negative reviews.", proof: "Hourly Log" },
                { id: "FR-OPS-06", description: "Review daily sales targets with the floor team.", priority: "Low", riskLevel: "Low", consequence: "Low motivation and missed revenue.", proof: "Briefing Log" },
                { id: "FR-OPS-07", description: "Check status of local delivery app tablets (Zomato/Swiggy).", priority: "Medium", riskLevel: "Medium", consequence: "Missed online orders.", proof: "Visual Check" },
                { id: "FR-OPS-08", description: "Inspect exterior perimeter for litter or safety hazards.", priority: "Low", riskLevel: "Low", consequence: "Poor first impression.", proof: "Walkthrough" },
                { id: "FR-OPS-09", description: "Verify cash-drop procedures followed for mid-day collections.", priority: "High", riskLevel: "High", consequence: "Internal theft and security risk.", proof: "Dual-Sign Log" },
                { id: "FR-OPS-10", description: "Final closure walkthrough: Gas/Lights/Security Armed.", priority: "High", riskLevel: "High", consequence: "Fire risk and overnight vulnerability.", proof: "Manager Initials" }
            ]
        },
        {
            title: "Marketing Compliance Pulse",
            department: "Marketing",
            frequency: "Weekly",
            role: "Regional Manager",
            summary: "Ensures national campaigns are executed perfectly at the local level.",
            icon: "megaphone",
            tasks: [
                { id: "FR-MKT-01", description: "Verify all current POP (Point of Purchase) materials are displayed.", priority: "High", riskLevel: "Low", consequence: "Missed conversion on national ads.", proof: "Photo" },
                { id: "FR-MKT-02", description: "Audit local social media handles for brand-alignment.", priority: "Medium", riskLevel: "Medium", consequence: "Brand dilution and confusing messaging.", proof: "Link Check" },
                { id: "FR-MKT-03", description: "Ensure local price-lists match national promotional pricing.", priority: "High", riskLevel: "High", consequence: "Customer disputes and legal fines.", proof: "Price Audit" },
                { id: "FR-MKT-04", description: "Check that 'Combo Offers' are correctly configured in POS.", priority: "High", riskLevel: "Medium", consequence: "Incorrect billing and revenue loss.", proof: "Test Bill" }
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
                { id: "FR-FIN-01", description: "Reconcile POS Gross Sales against bank settlement reports.", priority: "High", riskLevel: "High", consequence: "Under-reporting of sales and royalty leakage.", proof: "Reconciliation Sheet" },
                { id: "FR-FIN-02", description: "Audit 'Cancelled Bills' and 'Voided Transactions' for fraud.", priority: "High", riskLevel: "High", consequence: "Silent internal theft by staff/franchisee.", proof: "Void Log Audit" },
                { id: "FR-FIN-03", description: "Verify timely payment of monthly Royalty and Marketing fees.", priority: "High", riskLevel: "High", consequence: "Breach of contract and cash flow issues.", proof: "Payment Receipt" },
                { id: "FR-FIN-04", description: "Audit 'Complimentary' and 'Waste' logs for excess leakage.", priority: "Medium", riskLevel: "Medium", consequence: "Artificial reduction of royalty-eligible sales.", proof: "Log Review" }
            ]
        },
        {
            title: "Supply Chain & Vendor Control",
            department: "Supply Chain",
            frequency: "Monthly",
            role: "Regional Manager",
            summary: "Ensures only approved vendors and ingredients are used.",
            icon: "truck",
            tasks: [
                { id: "FR-SC-01", description: "Audit stock inventory for 'Off-Brand' or local non-approved items.", priority: "High", riskLevel: "High", consequence: "Quality variation and breach of agreement.", proof: "Pantry Audit" },
                { id: "FR-SC-02", description: "Verify all preferred vendor invoices are correctly filed.", priority: "Medium", riskLevel: "Low", consequence: "Poor audit trail for procurement.", proof: "Invoice File" },
                { id: "FR-SC-03", description: "Check consistency of raw material yields against national benchmarks.", priority: "High", riskLevel: "Medium", consequence: "Operational inefficiency at unit level.", proof: "Yield Report" }
            ]
        },
        {
            title: "Training & HR Governance",
            department: "HR",
            frequency: "Quarterly",
            role: "Training Head",
            summary: "Ensures staff performance matches the brand standard.",
            icon: "graduation-cap",
            tasks: [
                { id: "FR-HR-01", description: "Verify all staff have completed the 'Brand Induction' module.", priority: "High", riskLevel: "Medium", consequence: "Poor service and lack of brand knowledge.", proof: "Training Matrix" },
                { id: "FR-HR-02", description: "Audit the 'New Hire Onboarding' log for all staff joined this month.", priority: "Medium", riskLevel: "Low", consequence: "Incomplete staff documentation.", proof: "HR File Audit" },
                { id: "FR-HR-03", description: "Conduct a random 'Skills Check' for front-line staff.", priority: "Medium", riskLevel: "Low", consequence: "Slipping service standards.", proof: "Scorecard" }
            ]
        },
        {
            title: "Legal & Agreement Compliance",
            department: "Legal",
            frequency: "Annual",
            role: "Legal Counsel",
            summary: "Monitors critical legal and contractual milestones.",
            icon: "file-lock",
            tasks: [
                { id: "FR-LEG-01", description: "Audit validity of all Trade Licenses and FSSAI/Health permits.", priority: "High", riskLevel: "High", consequence: "Government shutdown and heavy fines.", proof: "Permit Registry" },
                { id: "FR-LEG-02", description: "Check expiry date of current Franchise Agreement.", priority: "High", riskLevel: "High", consequence: "Unauthorized use of IP after expiry.", proof: "Lease/Agreement Log" },
                { id: "FR-LEG-03", description: "Verify Insurance policy coverage for fire, theft, and public liability.", priority: "High", riskLevel: "High", consequence: "Uncovered total loss in case of disaster.", proof: "Insurance File" }
            ]
        },
        {
            title: "Customer Experience & ORM",
            department: "Operations",
            frequency: "Daily",
            role: "Digital Manager",
            summary: "Protects the brand's online and physical reputation.",
            icon: "globe",
            tasks: [
                { id: "FR-CX-01", description: "Verify response to 100% of 1-star and 2-star reviews < 24h.", priority: "High", riskLevel: "Medium", consequence: "Viral brand damage.", proof: "Review Log" },
                { id: "FR-CX-02", description: "Audit 'Mystery Shopper' scores and issue corrective actions.", priority: "Medium", riskLevel: "Low", consequence: "Undetected quality drift.", proof: "Audit Report" },
                { id: "FR-CX-03", description: "Verify all customer DMs and queries are answered.", priority: "Medium", riskLevel: "Low", consequence: "Lost revenue and poor engagement.", proof: "Inbox Check" }
            ]
        },
        {
            title: "Risk & Incident Management",
            department: "Risk",
            frequency: "Daily",
            role: "Risk Officer",
            summary: "Command for the 'Black Box' data trail of errors.",
            icon: "shield-alert",
            tasks: [
                { id: "FR-RSK-01", description: "Verify all daily incidents are logged with financial impact estimates.", priority: "High", riskLevel: "High", consequence: "Undocumented liabilities and insurance gaps.", proof: "Incident Log" },
                { id: "FR-RSK-02", description: "Audit 'Near-Miss' safety reports for repeating patterns.", priority: "Medium", riskLevel: "High", consequence: "Missed warning signs of a major failure.", proof: "Trend Report" },
                { id: "FR-RSK-03", description: "Review CCTV access logs for unauthorized footprint.", priority: "Medium", riskLevel: "Medium", consequence: "Breach of internal security protocols.", proof: "Access Log" }
            ]
        }
    ]
};
