import type { PremiumPack } from "@/lib/premium-packs";

export const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Franchise",
    description: "The definitive Sovereign v18.0 multi-unit governance engine. Hardening 165+ technical control points across Brand Consistency, Royalty Integrity, and Regional Compliance.",
    heroHeadline: "Scale Without Losing Control. Standardize Every Unit.",
    heroSubheadline: "Track brand parity, monitor royalty leakage, and manage supply chain synchronization—across 22 specialized governance roles.",
    pricingUrgency: "A single rogue unit damaging the brand or one major royalty leak costs 100x more than this entire system.",
    consultingAnchor: 12000,
    icon: "store",
    badgeText: "V18.0 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Franchisors", "Heads of Operations", "Regional Managers", "Brand Expansion Directors", "Multi-Unit Franchisees"],
    sampleItems: [
        { text: "<strong>Multi-Unit Governance</strong>: Regional performance benchmarking and cross-outlet deviation detection.", icon: "layout-grid" },
        { text: "<strong>Royalty Shield Engine</strong>: Daily bill-sequence audits and aggregator payout reconciliation to stop revenue theft.", icon: "banknote" },
        { text: "<strong>Brand Parity Hub</strong>: Visual VM audits, menu photo matches, and standardized service execution scoring.", icon: "eye" },
        { text: "<strong>Supply Chain Sync</strong>: Real-time vendor SLA monitoring and stock redistribution protocols.", icon: "truck" },
        { text: "<strong>Training Equity</strong>: Onboarding completion tracking and SOP adherence mapping per employee.", icon: "graduation-cap" },
        { text: "<strong>Compliance Command</strong>: Centralized tracking for FSSAI, Fire, and Labor licenses across the network.", icon: "shield-check" }
    ],
    checklists: [
        {
            title: "Network Governance & Strategy",
            department: "Executive",
            frequency: "Daily",
            role: "Franchise Owner",
            summary: "High-level strategic oversight of network health and royalty integrity.",
            icon: "crown",
            tasks: [
                { id: "FR-EXE-01", technicalProtocol: "Royalty Variance Review", floorAction: "Review group-level P&L for units with >3% variance in reported sales.", priority: "High", riskLevel: "High", consequence: "Significant royalty leakage and internal revenue fraud.", proof: "Dashboard Match", verificationRequired: true },
                { id: "FR-EXE-02", technicalProtocol: "Network Risk Triage", floorAction: "Analyze 'Red Flag' alerts from Area Managers regarding unit distress.", priority: "High", riskLevel: "Medium", consequence: "Unmonitored unit collapse damaging the network.", proof: "Incident Log", verificationRequired: true },
                { id: "FR-EXE-03", technicalProtocol: "Brand Equity Guard", floorAction: "Review weekly ORM trends and guest score parity across clusters.", priority: "Medium", riskLevel: "Low", consequence: "Slow brand dilution and rating drop.", proof: "Sentiment Report" },
                { id: "FR-EXE-04", technicalProtocol: "Statutory Affiliation Sync", floorAction: "Verify validity of master franchise licenses and insurance covers.", priority: "High", riskLevel: "High", consequence: "Global legal injunction and business halt.", proof: "Registry File", verificationRequired: true }
            ]
        },
        {
            title: "Regional Operations Control",
            department: "Executive",
            frequency: "Daily",
            role: "Franchise Operations Manager",
            summary: "Management of regional clusters and operational parity.",
            icon: "map",
            tasks: [
                { id: "FR-ROM-01", technicalProtocol: "Cluster Pulse Audit", floorAction: "Verify zero-gap reporting compliance from 100% of Area Managers.", priority: "High", riskLevel: "Low", consequence: "Loss of regional operational visibility.", proof: "Reporting Dashboard" },
                { id: "FR-ROM-02", technicalProtocol: "New Site Launch Readiness", floorAction: "Review fit-out milestones for upcoming unit openings.", priority: "Medium", riskLevel: "Medium", consequence: "Delayed launches and wasted rent overheads.", proof: "Project Log" },
                { id: "FR-ROM-03", technicalProtocol: "Regional Training Matrix", floorAction: "Confirm 100% certification for new hires in the northern cluster.", priority: "Medium", riskLevel: "Low", consequence: "Slipping service standards.", proof: "Matrix Match" }
            ]
        },
        {
            title: "Cluster Management (Field)",
            department: "Executive",
            frequency: "Daily",
            role: "Area Operations Head",
            summary: "Field-level governance of store groups (clusters).",
            icon: "layout-grid",
            tasks: [
                { id: "FR-AOH-01", technicalProtocol: "Surprise Field Audit", floorAction: "Conduct unannounced visit to 1 random unit; score visual parity.", priority: "High", riskLevel: "High", consequence: "Local 'improvisation' on brand standards.", proof: "Audit Photo", verificationRequired: true },
                { id: "FR-AOH-02", technicalProtocol: "Local Metrology Stamp", floorAction: "Verify weighing scale calibration stamps at unit level.", priority: "High", riskLevel: "Medium", consequence: "Regulatory fines and consumer court cases.", proof: "Visual Check", verificationRequired: true },
                { id: "FR-AOH-03", technicalProtocol: "Unit MOD Verification", floorAction: "Remote CCTV check for Manager-on-Duty presence at 1 PM.", priority: "High", riskLevel: "Low", consequence: "Service gridlock during peaks.", proof: "CCTV Log" }
            ]
        },
        {
            title: "Store Command (Outlet)",
            department: "Outlet Ops",
            frequency: "Daily",
            role: "Store Manager (Outlet Level)",
            summary: "Unit-level execution and local compliance command.",
            icon: "store",
            tasks: [
                { id: "FR-SM-01", technicalProtocol: "Opening Readiness Seal", floorAction: "Physically sign-off on 100% of station readiness protocols.", priority: "High", riskLevel: "Medium", consequence: "Delayed opening and lost sales.", proof: "Signed Summary", verificationRequired: true },
                { id: "FR-SM-02", technicalProtocol: "Bill Seriality Reconcile", floorAction: "Check POS bill sequence for any missing/skipped invoice numbers.", priority: "High", riskLevel: "High", consequence: "Revenue manipulation and GST non-compliance.", proof: "Registry Audit", verificationRequired: true },
                { id: "FR-SM-03", technicalProtocol: "Local Stock Triage", floorAction: "Verify critical ingredient availability for today's forecast.", priority: "High", riskLevel: "Medium", consequence: "High-LTV customer disappointment.", proof: "Prep Sheet" }
            ]
        },
        {
            title: "Shift Execution",
            department: "Outlet Ops",
            frequency: "Daily",
            role: "Shift Supervisor",
            summary: "Intra-day flow and handover management.",
            icon: "timer",
            tasks: [
                { id: "FR-SH-01", technicalProtocol: "Zero-Gap Handover", floorAction: "Verify data transfer in the shift handover digital registry.", priority: "High", riskLevel: "Medium", consequence: "Lost instructions between teams.", proof: "Handover Log", verificationRequired: true },
                { id: "FR-SH-02", technicalProtocol: "BOH Hygiene Sweep", floorAction: "Audit restroom cleaning frequency (Target: 30 mins).", priority: "High", riskLevel: "Low", consequence: "Negative review driver.", proof: "Hourly Sheet" }
            ]
        },
        {
            title: "Brand Standard Pulse",
            department: "Compliance",
            frequency: "Daily",
            role: "Brand Compliance Officer",
            summary: "Protects the visual and procedural brand promise.",
            icon: "eye",
            tasks: [
                { id: "FR-BCO-01", technicalProtocol: "Visual VM Audit", floorAction: "Match storefront lighting and signage to brand book specs.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution.", proof: "Photo" },
                { id: "FR-BCO-02", technicalProtocol: "Recipe Parity Check", floorAction: "Physically weigh 3 random items; match corporate spec manual.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent taste and margin loss.", proof: "Weight Sheet", verificationRequired: true }
            ]
        },
        {
            title: "Procurement & Shrinkage",
            department: "Stores",
            frequency: "Daily",
            role: "Inventory & Procurement Controller",
            summary: "Profit protection at the supply chain entry point.",
            icon: "package",
            tasks: [
                { id: "FR-IPC-01", technicalProtocol: "Blind Stock Count", floorAction: "Count top 10 SKUs; match physical vs POS levels.", priority: "High", riskLevel: "High", consequence: "Internal theft and shrinkage.", proof: "Count Sheet", verificationRequired: true },
                { id: "FR-IPC-02", technicalProtocol: "Vendor SLA Breach Log", floorAction: "Document any delivery exceeding lead-time by >2 hours.", priority: "Medium", riskLevel: "Low", consequence: "Network stockouts.", proof: "Variance Report" }
            ]
        },
        {
            title: "Revenue & Finance Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance & Cash Reconciliation Officer",
            summary: "Governance for cash handling and digital settlements.",
            icon: "banknote",
            tasks: [
                { id: "FR-FIN-01", technicalProtocol: "Cash Drop Witness", floorAction: "Physically witness seal of shift-end bank transit bag.", priority: "High", riskLevel: "High", consequence: "Untraceable transit theft.", proof: "Seal Number Log", verificationRequired: true },
                { id: "FR-FIN-02", technicalProtocol: "Aggregator Payout Pulse", floorAction: "Reconcile daily Swiggy/Zomato payout vs unit delivery report.", priority: "High", riskLevel: "High", consequence: "Platform revenue leakage.", proof: "System Sync", verificationRequired: true }
            ]
        },
        {
            title: "Customer Experience (CX)",
            department: "Service",
            frequency: "Daily",
            role: "Customer Experience Manager",
            summary: "Protects the guest score and brand reputation.",
            icon: "smile",
            tasks: [
                { id: "FR-CXM-01", technicalProtocol: "Review Triage Loop", floorAction: "Reply to 100% of unit Google/FB reviews <12 hours.", priority: "Medium", riskLevel: "Low", consequence: "Viral reputation damage.", proof: "ORM Dashboard" },
                { id: "FR-CXM-02", technicalProtocol: "Mystery Shopper Analysis", floorAction: "Disseminate scorecards from last undercover audit to unit staff.", priority: "Medium", riskLevel: "Low", consequence: "Lack of performance awareness.", proof: "Email Log" }
            ]
        },
        {
            title: "Digital & Delivery Command",
            department: "Operations",
            frequency: "Daily",
            role: "Delivery Aggregator / Platform Manager",
            summary: "Governance for off-premise revenue channels.",
            icon: "smartphone",
            tasks: [
                { id: "FR-DIG-01", technicalProtocol: "Live Item Availability", floorAction: "Verify 100% menu match on apps vs physical unit stock-outs.", priority: "High", riskLevel: "Medium", consequence: "High cancellation penalties.", proof: "App Screen" },
                { id: "FR-DIG-02", technicalProtocol: "Bag-Seal Integrity Audit", floorAction: "Verify 100% of orders possess intact brand security seals.", priority: "High", riskLevel: "Low", consequence: "Rider tampering incidents.", proof: "Visual Check", verificationRequired: true }
            ]
        },
        {
            title: "HR, Staffing & Training",
            department: "HR",
            frequency: "Monthly",
            role: "HR & Staffing Coordinator",
            summary: "Personnel health and vetting compliance.",
            icon: "user-plus",
            tasks: [
                { id: "FR-HR-01", technicalProtocol: "Background Check Pulse", floorAction: "Verify 100% police clearance for new delivery/unit staff.", priority: "High", riskLevel: "High", consequence: "Criminal liability for the brand.", proof: "Vetting Registry", verificationRequired: true },
                { id: "FR-HR-02", technicalProtocol: "POSH Awareness Log", floorAction: "Verify training completion on workplace safety for all outlets.", priority: "High", riskLevel: "High", consequence: "Legal liability and toxic culture.", proof: "Training Log", verificationRequired: true }
            ]
        },
        {
            title: "Sustainability & ESG",
            department: "ESG",
            frequency: "Daily",
            role: "Legal & Compliance Officer",
            summary: "Environmental discipline and resource tracking.",
            icon: "leaf",
            tasks: [
                { id: "FR-ESG-01", technicalProtocol: "Energy Intensity Benchmark", floorAction: "Compare unit KWH consumption vs regional cluster average.", priority: "High", riskLevel: "Low", consequence: "Unmonitored energy wastage.", proof: "Meter Match" },
                { id: "FR-ESG-02", technicalProtocol: "Plastic-Free Audit", floorAction: "Verify zero prohibited plastics in use at packaging stations.", priority: "High", riskLevel: "High", consequence: "Hefty environmental fines.", proof: "Visual Audit", verificationRequired: true },
                { id: "FR-ESG-03", technicalProtocol: "Water Leakage Patrol", floorAction: "Check main unit meters at 2 AM (Target: Zero usage).", priority: "High", riskLevel: "Medium", consequence: "Resource waste / structural damage.", proof: "Leak Log", verificationRequired: true }
            ]
        },
        {
            title: "Security & Loss Prevention",
            department: "Security",
            frequency: "Daily",
            role: "Security & Loss Prevention Officer",
            summary: "Hardens the perimeter and protects stock assets.",
            icon: "shield-alert",
            tasks: [
                { id: "FR-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup is online for all units.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance.", proof: "System Check", verificationRequired: true },
                { id: "FR-SEC-02", technicalProtocol: "Panic Button Pulse", floorAction: "Test silent alarms in high-cash units.", priority: "High", riskLevel: "High", consequence: "Zero response during emergency.", proof: "Signal Test", verificationRequired: true }
            ]
        },
        {
            title: "IT & POS Infrastructure",
            department: "Technical",
            frequency: "Daily",
            role: "IT / POS Systems Administrator",
            summary: "Digital backbone and data security governance.",
            icon: "server",
            tasks: [
                { id: "FR-IT-01", technicalProtocol: "Firewall Firmware Sync", floorAction: "Confirm 100% of unit routers have latest security patches.", priority: "High", riskLevel: "High", consequence: "Data breach of customer PII.", proof: "Dashboard Log", verificationRequired: true },
                { id: "FR-IT-02", technicalProtocol: "Offline Bill Sync", floorAction: "Verify zero pending local bills waiting for cloud upload.", priority: "High", riskLevel: "Medium", consequence: "Data loss during system reset.", proof: "System Screen" }
            ]
        }
    ]
};
