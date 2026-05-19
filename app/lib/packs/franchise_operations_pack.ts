
import type { PremiumPack } from "@/lib/premium-packs";

export const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 1200,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Franchise",
    description: "The definitive Sovereign v18.0 multi-unit governance engine. Hardening 198 technical control points across Brand Consistency, Royalty Integrity, and Regional Compliance.",
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
            role: "Franchise Owner / Regional Partner",
            summary: "High-level strategic oversight of network health and royalty integrity.",
            icon: "crown",
            tasks: [
                { id: "FR-EXE-01", technicalProtocol: "Royalty Variance Review", floorAction: "Review group-level P&L for units with >3% variance in reported sales.", priority: "High", riskLevel: "High", consequence: "Significant royalty leakage and internal revenue fraud.", proof: "Dashboard Match", verificationRequired: true, cadence: "daily" },
                { id: "FR-EXE-02", technicalProtocol: "Network Risk Triage", floorAction: "Analyze 'Red Flag' alerts from Area Managers regarding unit distress.", priority: "High", riskLevel: "Medium", consequence: "Unmonitored unit collapse damaging the network.", proof: "Incident Log", verificationRequired: true, cadence: "daily" },
                { id: "FR-EXE-03", technicalProtocol: "Brand Equity Guard", floorAction: "Review weekly ORM trends and guest score parity across clusters.", priority: "Medium", riskLevel: "Low", consequence: "Slow brand dilution and rating drop.", proof: "Sentiment Report", cadence: "daily" },
                { id: "FR-EXE-04", technicalProtocol: "Statutory Affiliation Sync", floorAction: "Verify validity of master franchise licenses and insurance covers.", priority: "High", riskLevel: "High", consequence: "Global legal injunction and business halt.", proof: "Registry File", verificationRequired: true, cadence: "daily" },
                { id: "FR-EXE-05", technicalProtocol: "Market Cap Projection", floorAction: "Review pipeline of upcoming unit openings vs. fit-out timelines.", priority: "Low", riskLevel: "Low", consequence: "Capital inefficiency.", proof: "Expansion Log", cadence: "weekly" },
                { id: "FR-EXE-06", technicalProtocol: "Royalty Rate Audit", floorAction: "Review 10 random royalty invoices for agreement adherence.", priority: "High", riskLevel: "Medium", consequence: "Contractual disputes.", proof: "Invoice Match", cadence: "monthly" },
                { id: "FR-EXE-07", technicalProtocol: "Crisis Comm Prep", floorAction: "Verify emergency contact list for all franchisee partners.", priority: "Medium", riskLevel: "Low", consequence: "Delayed response to PR crisis.", proof: "Contact List", cadence: "weekly" },
                { id: "FR-EXE-08", technicalProtocol: "Legal Compliance Pulse", floorAction: "Review summary of active lawsuits or labor disputes in the group.", priority: "High", riskLevel: "High", consequence: "Institutional legal collapse.", proof: "Legal Dashboard", verificationRequired: true, cadence: "monthly" },
                { id: "FR-EXE-09", technicalProtocol: "Group ESG Benchmark", floorAction: "Compare group energy consumption vs industry sustainability targets.", priority: "Low", riskLevel: "Low", consequence: "Poor ESG rating.", proof: "ESG Report", cadence: "monthly" }
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
                { id: "FR-ROM-01", technicalProtocol: "Cluster Pulse Audit", floorAction: "Verify zero-gap reporting compliance from 100% of Area Managers.", priority: "High", riskLevel: "Low", consequence: "Loss of regional operational visibility.", proof: "Reporting Dashboard", cadence: "daily" },
                { id: "FR-ROM-02", technicalProtocol: "New Site Launch Readiness", floorAction: "Review fit-out milestones for upcoming unit openings.", priority: "Medium", riskLevel: "Medium", consequence: "Delayed launches and wasted rent overheads.", proof: "Project Log", cadence: "daily" },
                { id: "FR-ROM-03", technicalProtocol: "Regional Training Matrix", floorAction: "Confirm 100% certification for new hires in the northern cluster.", priority: "Medium", riskLevel: "Low", consequence: "Slipping service standards.", proof: "Matrix Match", cadence: "daily" },
                { id: "FR-ROM-04", technicalProtocol: "Regional Vendor SLA", floorAction: "Audit delivery performance of shared regional suppliers.", priority: "Medium", riskLevel: "Medium", consequence: "Stockouts across the cluster.", proof: "SLA Report", cadence: "weekly" },
                { id: "FR-ROM-05", technicalProtocol: "Price Parity Scan", floorAction: "Verify 100% price uniformity across regional POS nodes.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes and brand confusion.", proof: "POS Audit", verificationRequired: true, cadence: "daily" },
                { id: "FR-ROM-06", technicalProtocol: "Staff Rotation Efficiency", floorAction: "Review cluster roster to minimize overtime spend.", priority: "Low", riskLevel: "Low", consequence: "Margin erosion through high labor cost.", proof: "Payroll Report", cadence: "weekly" },
                { id: "FR-ROM-07", technicalProtocol: "Asset Inventory Pulse", floorAction: "Review status of high-value equipment repairs in the region.", priority: "Medium", riskLevel: "Low", consequence: "Reduced regional capacity.", proof: "Asset Log", cadence: "weekly" },
                { id: "FR-ROM-08", technicalProtocol: "Compliance Expiry Watch", floorAction: "Identify units with licenses expiring in <30 days.", priority: "High", riskLevel: "High", consequence: "Unexpected unit shutdowns.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "FR-ROM-09", technicalProtocol: "Regional Briefing", floorAction: "Lead weekly Area Manager sync on blockbuster releases/promos.", priority: "Low", riskLevel: "Low", consequence: "Disorganized regional execution.", proof: "Meeting Note", cadence: "weekly" }
            ]
        },
        {
            title: "Cluster Management (Field)",
            department: "Executive",
            frequency: "Daily",
            role: "Area Operations Head (Cluster Manager)",
            summary: "Field-level governance of store groups (clusters).",
            icon: "layout-grid",
            tasks: [
                { id: "FR-AOH-01", technicalProtocol: "Surprise Field Audit", floorAction: "Conduct unannounced visit to 1 random unit; score visual parity.", priority: "High", riskLevel: "High", consequence: "Local 'improvisation' on brand standards.", proof: "Audit Photo", verificationRequired: true, cadence: "daily" },
                { id: "FR-AOH-02", technicalProtocol: "Local Metrology Stamp", floorAction: "Verify weighing scale calibration stamps at unit level.", priority: "High", riskLevel: "Medium", consequence: "Regulatory fines and consumer court cases.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "FR-AOH-03", technicalProtocol: "Unit MOD Verification", floorAction: "Remote CCTV check for Manager-on-Duty presence at 1 PM.", priority: "High", riskLevel: "Low", consequence: "Service gridlock during peaks.", proof: "CCTV Log", cadence: "daily" },
                { id: "FR-AOH-04", technicalProtocol: "Local Store Marketing (LSM)", floorAction: "Verify physical flyers match the current cluster promotion.", priority: "Low", riskLevel: "Low", consequence: "Marketing waste.", proof: "Photo", cadence: "daily" },
                { id: "FR-AOH-05", technicalProtocol: "Cash Management Audit", floorAction: "Audit the cash-drop log for 3 random stores in the cluster.", priority: "High", riskLevel: "High", consequence: "Unmonitored internal theft.", proof: "Log Audit", verificationRequired: true, cadence: "weekly" },
                { id: "FR-AOH-06", technicalProtocol: "Staff Morale Scan", floorAction: "Identify units with high attrition rates; initiate HOD briefing.", priority: "Medium", riskLevel: "Low", consequence: "Institutional knowledge loss.", proof: "HR Sync", cadence: "weekly" },
                { id: "FR-AOH-07", technicalProtocol: "Unit Hygiene Pulse", floorAction: "Verify BOH cleaning logs for 100% of cluster units.", priority: "Medium", riskLevel: "Medium", consequence: "Public health risk.", proof: "Digital Audit", cadence: "daily" },
                { id: "FR-AOH-08", technicalProtocol: "Mystery Shopper Follow-up", floorAction: "Review scorecards with Store Managers; set 7-day targets.", priority: "Low", riskLevel: "Low", consequence: "Chronic service standard decay.", proof: "Action Plan", cadence: "weekly" },
                { id: "FR-AOH-09", technicalProtocol: "Local Statutory Check", floorAction: "Confirm 100% of units have local fire/trade licenses posted.", priority: "High", riskLevel: "High", consequence: "Store sealing during inspection.", proof: "Visual Audit", verificationRequired: true, cadence: "weekly" }
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
                { id: "FR-SM-01", technicalProtocol: "Opening Readiness Seal", floorAction: "Physically sign-off on 100% of station readiness protocols.", priority: "High", riskLevel: "Medium", consequence: "Delayed opening and lost sales.", proof: "Signed Summary", verificationRequired: true, cadence: "daily" },
                { id: "FR-SM-02", technicalProtocol: "Bill Seriality Reconcile", floorAction: "Check POS bill sequence for any missing/skipped invoice numbers.", priority: "High", riskLevel: "High", consequence: "Revenue manipulation and GST non-compliance.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "FR-SM-03", technicalProtocol: "Local Stock Triage", floorAction: "Verify critical ingredient availability for today's forecast.", priority: "High", riskLevel: "Medium", consequence: "High-LTV customer disappointment.", proof: "Prep Sheet", cadence: "daily" },
                { id: "FR-SM-04", technicalProtocol: "Daily Staff Briefing", floorAction: "Brief on daily sales targets and 'Hero SKU' for upselling.", priority: "Low", riskLevel: "Low", consequence: "Lower bill value.", proof: "Briefing Log", cadence: "daily" },
                { id: "FR-SM-05", technicalProtocol: "Shift Handover Verify", floorAction: "Witness digital handover sign-off between Supervisors.", priority: "High", riskLevel: "Medium", consequence: "Communication gap during peaks.", proof: "Handover Log", verificationRequired: true, cadence: "daily" },
                { id: "FR-SM-06", technicalProtocol: "Petty Cash Reconcile", floorAction: "Count and match petty cash notes vs voucher registry.", priority: "Medium", riskLevel: "High", consequence: "Petty cash fraud.", proof: "Cash Log", cadence: "daily" },
                { id: "FR-SM-07", technicalProtocol: "Safety Exit Sweep", floorAction: "Physically walk the path; clear all trash/obstructions.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment risk.", proof: "Walk Note", verificationRequired: true, cadence: "daily" },
                { id: "FR-SM-08", technicalProtocol: "Customer Issue Loop", floorAction: "Resolve all on-floor disputes <15 minutes.", priority: "Medium", riskLevel: "Low", consequence: "Negative review driver.", proof: "Incident Note", cadence: "daily" },
                { id: "FR-SM-09", technicalProtocol: "Uniform Compliance", floorAction: "Check 100% of staff for clean name-tags and brand attire.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Briefing Note", cadence: "daily" },
                { id: "FR-SM-10", technicalProtocol: "EOD Closure Witness", floorAction: "Witness lock of main shutters and power shutdown.", priority: "High", riskLevel: "High", consequence: "Theft / Fire risk.", proof: "Closure Log", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Assistant Store Command",
            department: "Outlet Ops",
            frequency: "Daily",
            role: "Assistant Store Manager",
            summary: "Execution oversight and floor coordination.",
            icon: "users",
            tasks: [
                { id: "FR-ASM-01", technicalProtocol: "Station Cleanliness Audit", floorAction: "Inspect 100% of counters for zero-crumb policy.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene perception drop.", proof: "Walkthrough", cadence: "daily" },
                { id: "FR-ASM-02", technicalProtocol: "Upselling Performance", floorAction: "Identify top and bottom performers for the shift.", priority: "Low", riskLevel: "Low", consequence: "Missed revenue opportunity.", proof: "POS Report", cadence: "daily" },
                { id: "FR-ASM-03", technicalProtocol: "Staff Break Roster", floorAction: "Coordinate breaks to maintain 100% service coverage.", priority: "Medium", riskLevel: "Low", consequence: "Service bottlenecks.", proof: "Roster Log", cadence: "daily" },
                { id: "FR-ASM-04", technicalProtocol: "Display Parity Check", floorAction: "Verify shelf-stocking matches corporate planogram.", priority: "Low", riskLevel: "Low", consequence: "Inconsistent visual brand.", proof: "Photo", cadence: "daily" },
                { id: "FR-ASM-05", technicalProtocol: "Restroom Odor Pulse", floorAction: "Audit 30-min cleaning log for public zones.", priority: "High", riskLevel: "Low", consequence: "Primary guest rage factor.", proof: "Hourly Sheet", verificationRequired: true, cadence: "hourly" },
                { id: "FR-ASM-06", technicalProtocol: "Spill Response TAT", floorAction: "Execute 2-min cleanup for all detected FOH spills.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Incident Log", cadence: "incident-based" },
                { id: "FR-ASM-07", technicalProtocol: "Staff Sobriety Pulse", floorAction: "Confirm zero alcohol odor for 100% of incoming team.", priority: "High", riskLevel: "High", consequence: "Safety breach and brand damage.", proof: "Briefing Log", verificationRequired: true, cadence: "daily" },
                { id: "FR-ASM-08", technicalProtocol: "Customer Greeting Audit", floorAction: "Verify 100% of guests receive the brand-mandated welcome.", priority: "Low", riskLevel: "Low", consequence: "Cold brand perception.", proof: "Supervisor Obs", cadence: "daily" }
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
                { id: "FR-SH-01", technicalProtocol: "Zero-Gap Handover", floorAction: "Verify data transfer in the shift handover digital registry.", priority: "High", riskLevel: "Medium", consequence: "Lost instructions between teams.", proof: "Handover Log", verificationRequired: true, cadence: "daily" },
                { id: "FR-SH-02", technicalProtocol: "Queue TAT Monitor", floorAction: "Ensure average wait-time < 5 mins during rush.", priority: "Medium", riskLevel: "Low", consequence: "Guest walk-outs.", proof: "Stopwatch Note", cadence: "daily" },
                { id: "FR-SH-03", technicalProtocol: "Order-Accuracy Pulse", floorAction: "Sample check 5 bags for item vs receipt match.", priority: "Medium", riskLevel: "Low", consequence: "High refund cost.", proof: "Audit Note", cadence: "daily" },
                { id: "FR-SH-04", technicalProtocol: "Floor Lighting Scan", floorAction: "Replace all non-functional spotlight bulbs pre-6 PM.", priority: "Low", riskLevel: "Low", consequence: "Poor visual brand impact.", proof: "Visual Check", cadence: "daily" },
                { id: "FR-SH-05", technicalProtocol: "Emergency Comms Sync", floorAction: "Confirm radio/phone connectivity to Security Booth.", priority: "High", riskLevel: "Medium", consequence: "Zero response during crisis.", proof: "Dial Test", cadence: "daily" },
                { id: "FR-SH-06", technicalProtocol: "Inventory Restock Wave", floorAction: "Refill FOH displays 1 hour before peak surge.", priority: "Medium", riskLevel: "Low", consequence: "Revenue loss from empty shelves.", proof: "Visual Check", cadence: "daily" },
                { id: "FR-SH-07", technicalProtocol: "Till Theft Guard", floorAction: "Perform random 'No-Sale' audit of active register.", priority: "High", riskLevel: "High", consequence: "Undetected cash skimming.", proof: "Registry Note", cadence: "daily" },
                { id: "FR-SH-08", technicalProtocol: "Music Playlist Sync", floorAction: "Confirm volume matches brand spec (65dB).", priority: "Low", riskLevel: "Low", consequence: "Guest discomfort.", proof: "Daily Log", cadence: "daily" }
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
                { id: "FR-BCO-01", technicalProtocol: "Visual VM Audit", floorAction: "Match storefront lighting and signage to brand book specs.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution.", proof: "Photo", cadence: "daily" },
                { id: "FR-BCO-02", technicalProtocol: "Recipe Parity Check", floorAction: "Physically weigh 3 random items; match corporate spec manual.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent taste and margin loss.", proof: "Weight Sheet", verificationRequired: true, cadence: "daily" },
                { id: "FR-BCO-03", technicalProtocol: "Greeting Script Audit", floorAction: "Verify 100% of staff use the official brand greeting.", priority: "Low", riskLevel: "Low", consequence: "Inconsistent service culture.", proof: "Audit Score", cadence: "daily" },
                { id: "FR-BCO-04", technicalProtocol: "Music & Scent Sync", floorAction: "Verify playlist volume and lobby scent match brand spec.", priority: "Low", riskLevel: "Low", consequence: "Poor brand ambiance.", proof: "Daily Log", cadence: "daily" },
                { id: "FR-BCO-05", technicalProtocol: "Social Media Tag Review", floorAction: "Review unit-tagged photos on IG for visual standard fails.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored viral brand decay.", proof: "ORM Pulse", cadence: "weekly" },
                { id: "FR-BCO-06", technicalProtocol: "Storefront Luster Audit", floorAction: "Verify zero dust on external glass and high-gloss surfaces.", priority: "Low", riskLevel: "Low", consequence: "Grubby brand first-impression.", proof: "Visual Check", cadence: "daily" },
                { id: "FR-BCO-07", technicalProtocol: "Menu Parity Check", floorAction: "Ensure 100% of physical menus match corporate pricing updates.", priority: "High", riskLevel: "Medium", consequence: "Consumer court claims.", proof: "Price Match", verificationRequired: true, cadence: "weekly" },
                { id: "FR-BCO-08", technicalProtocol: "Employee Appearance Scan", floorAction: "Audit 5 staff for ironed uniforms and clean shoes.", priority: "Low", riskLevel: "Low", consequence: "Slacker brand perception.", proof: "Briefing Log", cadence: "daily" }
            ]
        },
        {
            title: "SOP Training Command",
            department: "HR",
            frequency: "Monthly",
            role: "Training & Onboarding Manager",
            summary: "Governance for personnel certification and SOP mastery.",
            icon: "graduation-cap",
            tasks: [
                { id: "FR-TRN-01", technicalProtocol: "Certification Matrix Match", floorAction: "Verify 100% certification for staff on high-risk modules (LOTO/HACCP).", priority: "High", riskLevel: "High", consequence: "Legal liability and safety failure.", proof: "Matrix Dashboard", verificationRequired: true, cadence: "monthly" },
                { id: "FR-TRN-02", technicalProtocol: "SOP Quiz Compliance", floorAction: "Audit 5 random staff for knowledge of 'Incident Protocol'.", priority: "Medium", riskLevel: "Low", consequence: "Gaps in institutional memory.", proof: "Quiz Log", cadence: "monthly" },
                { id: "FR-TRN-03", technicalProtocol: "Onboarding Velocity", floorAction: "Monitor days-to-peak-efficiency for new hires (Target < 14 days).", priority: "Low", riskLevel: "Low", consequence: "High labor-cost overhead.", proof: "TAT Dashboard", cadence: "monthly" },
                { id: "FR-TRN-04", technicalProtocol: "Trainer Note Update", floorAction: "Update floor instructions in SOP_LIB based on new version rollouts.", priority: "Medium", riskLevel: "Low", consequence: "Training on outdated standards.", proof: "Revision Log", cadence: "monthly" },
                { id: "FR-TRN-05", technicalProtocol: "Retraining Trigger", floorAction: "Initiate 2h refresher for units with audit scores < 70%.", priority: "High", riskLevel: "Low", consequence: "Continued operational drift.", proof: "Trigger Log", verificationRequired: true, cadence: "incident-based" },
                { id: "FR-TRN-06", technicalProtocol: "Soft Skills Sample", floorAction: "Role-play 1 'Difficult Guest' scenario with floor staff.", priority: "Low", riskLevel: "Low", consequence: "Poor escalation handling.", proof: "Training Note", cadence: "weekly" },
                { id: "FR-TRN-07", technicalProtocol: "Compliance Video Watch", floorAction: "Verify 100% of team watched monthly safety bulletin.", priority: "Medium", riskLevel: "Medium", consequence: "Lack of safety awareness.", proof: "System Log", cadence: "monthly" },
                { id: "FR-TRN-08", technicalProtocol: "Succession Planning", floorAction: "Identify 1 'High-Potential' staff for Supervisor promotion track.", priority: "Low", riskLevel: "Low", consequence: "Leadership vacuum during attrition.", proof: "HR Note", cadence: "monthly" }
            ]
        },
        {
            title: "Inventory & Procurement",
            department: "Stores",
            frequency: "Daily",
            role: "Inventory & Procurement Controller",
            summary: "Profit protection at the supply chain entry point.",
            icon: "package",
            tasks: [
                { id: "FR-IPC-01", technicalProtocol: "Blind Stock Count", floorAction: "Count top 10 SKUs; match physical vs POS levels.", priority: "High", riskLevel: "High", consequence: "Internal theft and shrinkage.", proof: "Count Sheet", verificationRequired: true, cadence: "weekly" },
                { id: "FR-IPC-02", technicalProtocol: "Vendor SLA Breach Log", floorAction: "Document any delivery exceeding lead-time by >2 hours.", priority: "Medium", riskLevel: "Low", consequence: "Network stockouts.", proof: "Variance Report", cadence: "daily" },
                { id: "FR-IPC-03", technicalProtocol: "Scale Calibration Pulse", floorAction: "Test receiving scale with 1kg standard; log deviation.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight.", proof: "Calibration Log", verificationRequired: true, cadence: "daily" },
                { id: "FR-IPC-04", technicalProtocol: "FIFO Pantry Audit", floorAction: "Check date labels on 10 random dry-store items.", priority: "Medium", riskLevel: "Medium", consequence: "Serving expired ingredients.", proof: "Visual Check", cadence: "weekly" },
                { id: "FR-IPC-05", technicalProtocol: "Damaged Goods Triage", floorAction: "Verify 100% of rejected stock is logged for credit-notes.", priority: "Medium", riskLevel: "Low", consequence: "Financial bad-debt from vendors.", proof: "Registry Note", cadence: "daily" },
                { id: "FR-IPC-06", technicalProtocol: "Stock Aging Audit", floorAction: "Identify 5 SKUs with zero movement in > 21 days.", priority: "Low", riskLevel: "Low", consequence: "Tied-up capital in dead stock.", proof: "Aging Report", cadence: "monthly" },
                { id: "FR-IPC-07", technicalProtocol: "Par-Level Recalibration", floorAction: "Adjust stock targets based on next week's promotion list.", priority: "Medium", riskLevel: "Low", consequence: "Missed sales opportunity.", proof: "System Update", cadence: "weekly" },
                { id: "FR-IPC-08", technicalProtocol: "Inventory Access Log", floorAction: "Audit after-hours warehouse key access register.", priority: "High", riskLevel: "High", consequence: "Unauthorized overnight theft.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Supply Chain Sync",
            department: "Logistics",
            frequency: "Daily",
            role: "Supply Chain Coordinator",
            summary: "Inter-unit stock redistribution and logistics command.",
            icon: "truck",
            tasks: [
                { id: "FR-SCC-01", technicalProtocol: "Unit Stock Transfer (UST)", floorAction: "Coordinate transfer of surplus items from Unit A to Unit B.", priority: "Medium", riskLevel: "Low", consequence: "Localized stock-outs / high holding cost.", proof: "Transfer Note", cadence: "daily" },
                { id: "FR-SCC-02", technicalProtocol: "Cold-Chain Log Match", floorAction: "Verify 100% temp compliance during inter-unit transit.", priority: "High", riskLevel: "High", consequence: "Cross-unit food poisoning.", proof: "Transit Log", verificationRequired: true, cadence: "daily" },
                { id: "FR-SCC-03", technicalProtocol: "Secondary Sourcing Vetting", floorAction: "Validate licenses for emergency 'Cash-and-Carry' purchases.", priority: "High", riskLevel: "High", consequence: "Legal liability for unvetted stock.", proof: "FSSAI Check", verificationRequired: true, cadence: "incident-based" },
                { id: "FR-SCC-04", technicalProtocol: "Logistics Lead-time Pulse", floorAction: "Measure dock-to-dock time for inter-unit transfers.", priority: "Low", riskLevel: "Low", consequence: "Inefficient logistics route.", proof: "TAT Dashboard", cadence: "weekly" },
                { id: "FR-SCC-05", technicalProtocol: "Warehouse Dispatch Seal", floorAction: "Verify 100% of outgoing crates have intact security seals.", priority: "High", riskLevel: "Medium", consequence: "En-route internal theft.", proof: "Seal Registry", verificationRequired: true, cadence: "daily" },
                { id: "FR-SCC-06", technicalProtocol: "Transit Damage Registry", floorAction: "Photograph and log all arrivals with broken packaging.", priority: "Medium", riskLevel: "Low", consequence: "Inability to claim vendor credit.", proof: "Photo Log", cadence: "daily" },
                { id: "FR-SCC-07", technicalProtocol: "Transfer Variance Reconcile", floorAction: "Investigate any UST where 'Sent' does not match 'Received'.", priority: "High", riskLevel: "High", consequence: "Systemic inter-unit leakage.", proof: "Variance Report", verificationRequired: true, cadence: "daily" },
                { id: "FR-SCC-08", technicalProtocol: "Rider Redistribution", floorAction: "Reposition 2 delivery bikes to Unit C for evening surge.", priority: "Low", riskLevel: "Low", consequence: "High delivery TAT.", proof: "Deployment Note", cadence: "daily" }
            ]
        },
        {
            title: "Quality Assurance (QA)",
            department: "Compliance",
            frequency: "Weekly",
            role: "Quality Assurance Auditor",
            summary: "Atomic procedural audits for safety and parity.",
            icon: "search",
            tasks: [
                { id: "FR-QA-01", technicalProtocol: "ATP Surface Pulse", floorAction: "Execute 1 RLU test of high-touch OPD/FOH counters.", priority: "Medium", riskLevel: "High", consequence: "Outbreak liability.", proof: "Test Result", cadence: "weekly" },
                { id: "FR-QA-02", technicalProtocol: "HACCP Thermal Audit", floorAction: "Audit 7-day temp trends for main walk-ins.", priority: "High", riskLevel: "High", consequence: "Systemic food safety failure.", proof: "Trend Report", verificationRequired: true, cadence: "weekly" },
                { id: "FR-QA-03", technicalProtocol: "Packaging Integrity Scan", floorAction: "Verify 100% use of approved brand takeaway containers.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Visual Check", cadence: "weekly" },
                { id: "FR-QA-04", technicalProtocol: "Water Purity Pulse", floorAction: "Log TDS at unit RO point (Target < 100).", priority: "High", riskLevel: "High", consequence: "Water-borne disease risk.", proof: "TDS Reading", verificationRequired: true, cadence: "daily" },
                { id: "FR-QA-05", technicalProtocol: "Oil TPM Check", floorAction: "Test deep-fryer oil; discard if TPM > 25%.", priority: "High", riskLevel: "Medium", consequence: "Toxic buildup and poor taste.", proof: "TPM Log", verificationRequired: true, cadence: "weekly" },
                { id: "FR-QA-06", technicalProtocol: "Vegetable Wash Titration", floorAction: "Verify 50ppm chlorine soak strength in prep sink.", priority: "High", riskLevel: "High", consequence: "Parasitic transmission.", proof: "Strip Test", cadence: "daily" },
                { id: "FR-QA-07", technicalProtocol: "Pest Bait Monitor", floorAction: "Check traps in dry-store corners for droppings.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "FR-QA-08", technicalProtocol: "Sanitizer Strip Scan", floorAction: "Confirm availability of testing kits for all chemical dispensers.", priority: "Medium", riskLevel: "Low", consequence: "Guesswork in hygiene.", proof: "Stock Check", cadence: "weekly" }
            ]
        },
        {
            title: "Guest Experience (CX)",
            department: "Service",
            frequency: "Daily",
            role: "Customer Experience Manager",
            summary: "Protects the guest score and brand reputation.",
            icon: "smile",
            tasks: [
                { id: "FR-CXM-01", technicalProtocol: "Review Triage Loop", floorAction: "Reply to 100% of unit Google/FB reviews <12 hours.", priority: "Medium", riskLevel: "Low", consequence: "Viral reputation damage.", proof: "ORM Dashboard", cadence: "daily" },
                { id: "FR-CXM-02", technicalProtocol: "Mystery Shopper Analysis", floorAction: "Disseminate scorecards from last undercover audit to unit staff.", priority: "Medium", riskLevel: "Low", consequence: "Lack of performance awareness.", proof: "Email Log", cadence: "weekly" },
                { id: "FR-CXM-03", technicalProtocol: "Loyalty Recovery", floorAction: "Call 3 'detractor' guests to initiate service recovery.", priority: "Low", riskLevel: "Low", consequence: "Loss of high-LTV customers.", proof: "Call Log", cadence: "weekly" },
                { id: "FR-CXM-04", technicalProtocol: "Refund Abuse Pulse", floorAction: "Audit 100% of bills with > 2 removed items.", priority: "High", riskLevel: "High", consequence: "Internal theft masked as guest issues.", proof: "Registry Match", verificationRequired: true, cadence: "daily" },
                { id: "FR-CXM-05", technicalProtocol: "Table Greeting Pulse", floorAction: "Observe 10 guest interactions for brand greeting compliance.", priority: "Low", riskLevel: "Low", consequence: "Cold service culture.", proof: "Audit Score", cadence: "daily" },
                { id: "FR-CXM-06", technicalProtocol: "Feedback Kiosk Charge", floorAction: "Ensure tablets are operational and app is active.", priority: "Low", riskLevel: "Low", consequence: "Lost survey data.", proof: "Device Check", cadence: "daily" },
                { id: "FR-CXM-07", technicalProtocol: "Customer Issue Loop", floorAction: "Resolve 100% of on-floor disputes < 15 mins.", priority: "High", riskLevel: "Low", consequence: "Escalated viral complaints.", proof: "Incident Log", cadence: "daily" },
                { id: "FR-CXM-08", technicalProtocol: "VIP Loyalty Flag", floorAction: "Notify Store Manager of 'Top 50' member arrival.", priority: "Medium", riskLevel: "Low", consequence: "Generic treatment of elite guests.", proof: "System Alert", cadence: "daily" }
            ]
        },
        {
            title: "Revenue Analytics",
            department: "Finance",
            frequency: "Daily",
            role: "Sales & Revenue Analyst",
            summary: "Conversion tracking and Bill-Value optimization.",
            icon: "trending-up",
            tasks: [
                { id: "FR-REV-01", technicalProtocol: "ABV Benchmark Pulse", floorAction: "Compare Unit ABV vs cluster average; flag under-performers.", priority: "Medium", riskLevel: "Low", consequence: "Unrealized revenue growth.", proof: "Daily Report", cadence: "daily" },
                { id: "FR-REV-02", technicalProtocol: "Peak-Staffing Ratio", floorAction: "Analyze sales-per-labor-hour for peak surge windows.", priority: "Medium", riskLevel: "Low", consequence: "High labor cost vs low throughput.", proof: "Efficiency Log", cadence: "daily" },
                { id: "FR-REV-03", technicalProtocol: "Walk-in Conversion Funnel", floorAction: "Match sensor footfall vs POS bill count (Target > 40%).", priority: "High", riskLevel: "Low", consequence: "Invisible customer rejection.", proof: "Funnel Report", cadence: "daily" },
                { id: "FR-REV-04", technicalProtocol: "Promo Code Abuse", floorAction: "Identify staff logins linked to > 10% discount usage.", priority: "High", riskLevel: "High", consequence: "Internal theft via unauthorized coupons.", proof: "Audit Log", verificationRequired: true, cadence: "weekly" },
                { id: "FR-REV-05", technicalProtocol: "Regional Price Drift", floorAction: "Verify unit price-overrides match corporate approval.", priority: "High", riskLevel: "Medium", consequence: "Rogue pricing and brand damage.", proof: "POS Registry", verificationRequired: true, cadence: "daily" },
                { id: "FR-REV-06", technicalProtocol: "Low-Performing Unit Triage", floorAction: "Escalate units with > 3 days of declining sales.", priority: "High", riskLevel: "Low", consequence: "Undetected unit distress.", proof: "Alert Note", cadence: "daily" },
                { id: "FR-REV-07", technicalProtocol: "Aggregator Profitability", floorAction: "Analyze net margin post-commission for delivery items.", priority: "Medium", riskLevel: "Low", consequence: "Selling loss-making SKUs.", proof: "Margin Sheet", cadence: "monthly" },
                { id: "FR-REV-08", technicalProtocol: "Peak-Hour Compression", floorAction: "Identify bottleneck station during 8 PM-9 PM window.", priority: "Low", riskLevel: "Low", consequence: "Reduced maximum revenue capacity.", proof: "TAT Audit", cadence: "weekly" }
            ]
        },
        {
            title: "Local Store Marketing (LSM)",
            department: "Marketing",
            frequency: "Daily",
            role: "Marketing Execution Coordinator",
            summary: "Governance for physical promo assets.",
            icon: "megaphone",
            tasks: [
                { id: "FR-LSM-01", technicalProtocol: "Promo Expiry Scan", floorAction: "Remove physical signage for expired campaigns <8 AM.", priority: "Low", riskLevel: "Low", consequence: "Consumer court claims (False advertising).", proof: "Visual Check", cadence: "daily" },
                { id: "FR-LSM-02", technicalProtocol: "Brand Parity (Signage)", floorAction: "Verify external glow-sign functionality and cleanliness.", priority: "Low", riskLevel: "Low", consequence: "Poor brand visibility.", proof: "Photo", cadence: "daily" },
                { id: "FR-LSM-03", technicalProtocol: "Digital Signage Sync", floorAction: "Confirm 100% of screens display today's 'Hero' offer.", priority: "Medium", riskLevel: "Low", consequence: "Marketing disconnect.", proof: "Walkthrough", cadence: "daily" },
                { id: "FR-LSM-04", technicalProtocol: "LSM Flyer Count", floorAction: "Audit usage of local bounce-back coupons.", priority: "Low", riskLevel: "Low", consequence: "Zero ROI visibility.", proof: "Registry Match", cadence: "weekly" },
                { id: "FR-LSM-05", technicalProtocol: "Uniform Badge Compliance", floorAction: "Verify staff wearing current seasonal promo badges.", priority: "Low", riskLevel: "Low", consequence: "Lower promo uptake.", proof: "Briefing Log", cadence: "daily" },
                { id: "FR-LSM-06", technicalProtocol: "Street-Level Visibility", floorAction: "Walk 100m from entrance; verify visibility of main board.", priority: "Medium", riskLevel: "Low", consequence: "Low organic walk-ins.", proof: "Visual Scan", cadence: "weekly" },
                { id: "FR-LSM-07", technicalProtocol: "Social Media Handle", floorAction: "Confirm unit-specific WhatsApp status updates are active.", priority: "Low", riskLevel: "Low", consequence: "Missed local reach.", proof: "Phone Check", cadence: "daily" },
                { id: "FR-LSM-08", technicalProtocol: "Campaign ROI Briefing", floorAction: "Brief unit staff on conversion targets for the new launch.", priority: "Medium", riskLevel: "Low", consequence: "Weak campaign execution.", proof: "Briefing Note", cadence: "weekly" }
            ]
        },
        {
            title: "HR & Staffing Sync",
            department: "HR",
            frequency: "Monthly",
            role: "HR & Staffing Coordinator",
            summary: "Personnel health and vetting compliance.",
            icon: "user-plus",
            tasks: [
                { id: "FR-HR-01", technicalProtocol: "Background Check Pulse", floorAction: "Verify 100% police clearance for new delivery/unit staff.", priority: "High", riskLevel: "High", consequence: "Criminal liability for the brand.", proof: "Vetting Registry", verificationRequired: true, cadence: "monthly" },
                { id: "FR-HR-02", technicalProtocol: "POSH Awareness Log", floorAction: "Verify training completion on workplace safety for all outlets.", priority: "High", riskLevel: "High", consequence: "Legal liability and toxic culture.", proof: "Training Log", verificationRequired: true, cadence: "monthly" },
                { id: "FR-HR-03", technicalProtocol: "Staff Health Register", floorAction: "Audit 100% unit fitness certificates (FSSAI/Local).", priority: "High", riskLevel: "High", consequence: "License suspension.", proof: "Registry Audit", verificationRequired: true, cadence: "monthly" },
                { id: "FR-HR-04", technicalProtocol: "Turnover Trend Review", floorAction: "Identify units with > 15% monthly staff attrition.", priority: "Medium", riskLevel: "Low", consequence: "Institutional memory loss.", proof: "HR Dashboard", cadence: "monthly" },
                { id: "FR-HR-05", technicalProtocol: "Working Hour Cap", floorAction: "Review attendance for staff exceeding 54h/week.", priority: "High", riskLevel: "Medium", consequence: "Labor law violations and burnout.", proof: "Biometric Audit", cadence: "weekly" },
                { id: "FR-HR-06", technicalProtocol: "Payroll Variance Pulse", floorAction: "Match staff attendance vs bank disbursement file.", priority: "High", riskLevel: "High", consequence: "Ghost-staff payroll fraud.", proof: "Financial Match", verificationRequired: true, cadence: "monthly" },
                { id: "FR-HR-07", technicalProtocol: "Incentive Calc Audit", floorAction: "Verify 10 random upsell commission payouts.", priority: "Medium", riskLevel: "Low", consequence: "Demotivated team.", proof: "Sample Check", cadence: "monthly" },
                { id: "FR-HR-08", technicalProtocol: "Whistleblower Registry", floorAction: "Check anonymous dropbox for any internal policy breaches.", priority: "High", riskLevel: "Low", consequence: "Undetected systemic corruption.", proof: "Registry Note", verificationRequired: true, cadence: "weekly" }
            ]
        },
        {
            title: "Asset & Vendor Management",
            department: "Admin",
            frequency: "Weekly",
            role: "Vendor Management Executive",
            summary: "Monitors third-party service performance parity.",
            icon: "handshake",
            tasks: [
                { id: "FR-VEN-01", technicalProtocol: "Vendor Hygiene Audit", floorAction: "Inspect delivery vehicle of the primary protein supplier.", priority: "High", riskLevel: "High", consequence: "Entering contaminated stock.", proof: "Photo", verificationRequired: true, cadence: "weekly" },
                { id: "FR-VEN-02", technicalProtocol: "AMC Renewal Watch", floorAction: "Identify equipment contracts expiring in <14 days.", priority: "Medium", riskLevel: "Medium", consequence: "Contract lapse leading to repair downtime.", proof: "AMC Register", cadence: "weekly" },
                { id: "FR-VEN-03", technicalProtocol: "Contract Price Parity", floorAction: "Audit 5 bills against Master Service Agreement rates.", priority: "Medium", riskLevel: "Low", consequence: "Overcharging by vendors.", proof: "Bill Match", cadence: "monthly" },
                { id: "FR-VEN-04", technicalProtocol: "Vendor License Sync", floorAction: "Verify FSSAI/GST validity for all active unit suppliers.", priority: "High", riskLevel: "High", consequence: "Legal liability for the network.", proof: "License File", verificationRequired: true, cadence: "monthly" },
                { id: "FR-VEN-05", technicalProtocol: "On-site Contractor PTW", floorAction: "Audit permits for all active electrical/hot-work jobs.", priority: "High", riskLevel: "High", consequence: "Fire liability exposure.", proof: "Permit Registry", verificationRequired: true, cadence: "daily" },
                { id: "FR-VEN-06", technicalProtocol: "Vendor Response TAT", floorAction: "Log time from breakdown call to technician arrival.", priority: "Low", riskLevel: "Low", consequence: "Extended equipment downtime.", proof: "Work Order", cadence: "weekly" },
                { id: "FR-VEN-07", technicalProtocol: "Utility Refund Tracker", floorAction: "Verify credit for returned empty chemical/gas containers.", priority: "Low", riskLevel: "Low", consequence: "Waste of deposit capital.", proof: "Credit Note", cadence: "weekly" },
                { id: "FR-VEN-08", technicalProtocol: "Vendor Sobriety Audit", floorAction: "Observe 2 random delivery drivers for brand conduct.", priority: "Medium", riskLevel: "High", consequence: "Safety breach in receiving bay.", proof: "Walkthrough", cadence: "weekly" }
            ]
        },
        {
            title: "Maintenance Vitals",
            department: "Facilities",
            frequency: "Daily",
            role: "Maintenance & Facility Supervisor",
            summary: "MEP assets and infrastructure safety.",
            icon: "wrench",
            tasks: [
                { id: "FR-MNT-01", technicalProtocol: "Electrical Panel Heat Scan", floorAction: "Perform IR scan of unit breaker banks.", priority: "High", riskLevel: "High", consequence: "Overnight short-circuit fire.", proof: "Scan Log", verificationRequired: true, cadence: "weekly" },
                { id: "FR-MNT-02", technicalProtocol: "Grease Trap Flush", floorAction: "Verify weekly chemical flush of unit drains.", priority: "Medium", riskLevel: "Medium", consequence: "Kitchen flooding.", proof: "Work Order", cadence: "weekly" },
                { id: "FR-MNT-03", technicalProtocol: "HVAC Return Grille", floorAction: "Clean dust from unit vents to prevent airflow drag.", priority: "Low", riskLevel: "Low", consequence: "Energy wastage.", proof: "Visual Check", cadence: "weekly" },
                { id: "FR-MNT-04", technicalProtocol: "Shutter Motor Test", floorAction: "Test main entrance gate for smooth motor operation.", priority: "High", riskLevel: "Low", consequence: "Opening delay.", proof: "Test Note", cadence: "daily" },
                { id: "FR-MNT-05", technicalProtocol: "Water Pump Seal", floorAction: "Inspect for drips or bearing noise in pump room.", priority: "Medium", riskLevel: "Medium", consequence: "Pump motor seizure.", proof: "Walkthrough", cadence: "daily" },
                { id: "FR-MNT-06", technicalProtocol: "Signage Glow Pulse", floorAction: "Replace all non-functional LED strips on facade.", priority: "Low", riskLevel: "Low", consequence: "Poor nighttime visibility.", proof: "Photo", cadence: "daily" },
                { id: "FR-MNT-07", technicalProtocol: "Generator Load Test", floorAction: "Verify automatic DG switchover < 30 seconds.", priority: "High", riskLevel: "High", consequence: "Blackout during peak rush.", proof: "Test Log", verificationRequired: true, cadence: "weekly" },
                { id: "FR-MNT-08", technicalProtocol: "Furniture Safety Check", floorAction: "Verify zero loose screws on guest chairs.", priority: "Medium", riskLevel: "Medium", consequence: "Guest injury liability.", proof: "Visual Audit", cadence: "weekly" }
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
                { id: "FR-FIN-01", technicalProtocol: "Cash Drop Witness", floorAction: "Physically witness seal of shift-end bank transit bag.", priority: "High", riskLevel: "High", consequence: "Untraceable transit theft.", proof: "Seal Number Log", verificationRequired: true, cadence: "daily" },
                { id: "FR-FIN-02", technicalProtocol: "Aggregator Payout Pulse", floorAction: "Reconcile daily Swiggy/Zomato payout vs unit delivery report.", priority: "High", riskLevel: "High", consequence: "Platform revenue leakage.", proof: "System Sync", verificationRequired: true, cadence: "daily" },
                { id: "FR-FIN-03", technicalProtocol: "Petty Cash Voucher", floorAction: "Verify 100% receipts match the cash-out journal.", priority: "Medium", riskLevel: "High", consequence: "Petty cash fraud.", proof: "Registry Audit", cadence: "daily" },
                { id: "FR-FIN-04", technicalProtocol: "Tax Seriality Check", floorAction: "Confirm zero gaps in bill sequence numbers.", priority: "High", riskLevel: "High", consequence: "Statutory GST non-compliance.", proof: "Journal Audit", verificationRequired: true, cadence: "daily" },
                { id: "FR-FIN-05", technicalProtocol: "Till Variance Reconcile", floorAction: "Investigate any cash variance > ₹100.", priority: "High", riskLevel: "Medium", consequence: "Systemic till theft.", proof: "Variance Report", verificationRequired: true, cadence: "daily" },
                { id: "FR-FIN-06", technicalProtocol: "Chargeback Triage", floorAction: "Respond to all bank credit card disputes < 24h.", priority: "Medium", riskLevel: "Low", consequence: "Inability to appeal losses.", proof: "System Log", cadence: "daily" },
                { id: "FR-FIN-07", technicalProtocol: "Vendor Payment Proof", floorAction: "Attach 100% of GST challans to supplier payments.", priority: "High", riskLevel: "High", consequence: "Tax credit loss for the group.", proof: "Document File", verificationRequired: true, cadence: "weekly" },
                { id: "FR-FIN-08", technicalProtocol: "EOD Safe Lockdown", floorAction: "Witness dual-person turn of safe keys.", priority: "High", riskLevel: "High", consequence: "Unauthorized after-hours theft.", proof: "Visual Confirm", verificationRequired: true, cadence: "daily" }
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
                { id: "FR-DIG-01", technicalProtocol: "Live Item Availability", floorAction: "Verify 100% menu match on apps vs physical unit stock-outs.", priority: "High", riskLevel: "Medium", consequence: "High cancellation penalties.", proof: "App Screen", cadence: "daily" },
                { id: "FR-DIG-02", technicalProtocol: "Bag-Seal Integrity Audit", floorAction: "Verify 100% of orders possess intact brand security seals.", priority: "High", riskLevel: "Low", consequence: "Rider tampering incidents.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "FR-DIG-03", technicalProtocol: "Rider Sobriety Sample", floorAction: "Execute random behavior scan of 5 aggregator riders.", priority: "Medium", riskLevel: "High", consequence: "Safety breach in customer home.", proof: "Registry Note", cadence: "daily" },
                { id: "FR-DIG-04", technicalProtocol: "Aggregator Rating Pulse", floorAction: "Analyze 1-star reviews for delivery < 1 hour.", priority: "High", riskLevel: "Low", consequence: "Platform visibility drop.", proof: "Daily Report", cadence: "daily" },
                { id: "FR-DIG-05", technicalProtocol: "Bag Hygiene Sweep", floorAction: "Sanitize delivery dispatch table and verify bag cleanliness.", priority: "Medium", riskLevel: "Medium", consequence: "Cross-contamination.", proof: "Cleaning Log", cadence: "daily" },
                { id: "FR-DIG-06", technicalProtocol: "Promo Code Validity", floorAction: "Verify active app offers match current corporate promo list.", priority: "High", riskLevel: "Low", consequence: "Mismatched revenue reporting.", proof: "App Scan", cadence: "daily" },
                { id: "FR-DIG-07", technicalProtocol: "Dispatch Lane Safety", floorAction: "Clear all illegally parked delivery bikes from fire exit.", priority: "High", riskLevel: "High", consequence: "Blocked egress during emergency.", proof: "Patrol Log", verificationRequired: true, cadence: "hourly" },
                { id: "FR-DIG-08", technicalProtocol: "Missing Item Triage", floorAction: "Resolve 100% of customer claims for missing extras < 15 mins.", priority: "High", riskLevel: "Low", consequence: "Refund loss and rating damage.", proof: "Registry Log", cadence: "daily" }
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
                { id: "FR-ESG-01", technicalProtocol: "Energy Intensity Benchmark", floorAction: "Compare unit KWH consumption vs regional cluster average.", priority: "High", riskLevel: "Low", consequence: "Unmonitored energy wastage.", proof: "Meter Match", cadence: "daily" },
                { id: "FR-ESG-02", technicalProtocol: "Plastic-Free Audit", floorAction: "Verify zero prohibited plastics in use at packaging stations.", priority: "High", riskLevel: "High", consequence: "Hefty environmental fines.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "FR-ESG-03", technicalProtocol: "Water Leakage Patrol", floorAction: "Check main unit meters at 2 AM (Target: Zero usage).", priority: "High", riskLevel: "Medium", consequence: "Resource waste / structural damage.", proof: "Leak Log", verificationRequired: true, cadence: "daily" },
                { id: "FR-ESG-04", technicalProtocol: "Packaging Segregation", floorAction: "Verify 100% separation of plastic vs paper at source.", priority: "Low", riskLevel: "Low", consequence: "Environmental score drop.", proof: "Visual Check", cadence: "daily" },
                { id: "FR-ESG-05", technicalProtocol: "CSR Activity Log", floorAction: "Document monthly unit-level community/charity engagement.", priority: "Low", riskLevel: "Low", consequence: "Loss of ESG data points.", proof: "Registry Entry", cadence: "monthly" },
                { id: "FR-ESG-06", technicalProtocol: "Vendor Sustainability", floorAction: "Verify 10 random supplier invoices for 'Green Sourcing' flags.", priority: "Medium", riskLevel: "Low", consequence: "Supply chain ethical drift.", proof: "Sample Check", cadence: "monthly" },
                { id: "FR-ESG-07", technicalProtocol: "Food Waste Weight", floorAction: "Log KG of wet-waste sent to bio-recycling.", priority: "Medium", riskLevel: "Low", consequence: "Inefficient procurement.", proof: "Weight Slip", cadence: "daily" },
                { id: "FR-ESG-08", technicalProtocol: "EOD Safety Walk", floorAction: "Witness lock of chemical store and main electrical bank.", priority: "High", riskLevel: "High", consequence: "Fire / Theft risk.", proof: "Closure Log", verificationRequired: true, cadence: "daily" }
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
                { id: "FR-IT-01", technicalProtocol: "Firewall Firmware Sync", floorAction: "Confirm 100% of unit routers have latest security patches.", priority: "High", riskLevel: "High", consequence: "Data breach of customer PII.", proof: "Dashboard Log", verificationRequired: true, cadence: "daily" },
                { id: "FR-IT-02", technicalProtocol: "Offline Bill Sync", floorAction: "Verify zero pending local bills waiting for cloud upload.", priority: "High", riskLevel: "Medium", consequence: "Data loss during system reset.", proof: "System Screen", cadence: "daily" },
                { id: "FR-IT-03", technicalProtocol: "Peripheral Uptime", floorAction: "Test 100% of kitchen ticket printers and label units.", priority: "Medium", riskLevel: "Low", consequence: "Service gridlock.", proof: "Test Note", cadence: "daily" },
                { id: "FR-IT-04", technicalProtocol: "UPS Battery Pulse", floorAction: "Verify 15-min backup runtime for main POS server.", priority: "High", riskLevel: "High", consequence: "Database corruption during power flip.", proof: "Voltage Log", verificationRequired: true, cadence: "weekly" },
                { id: "FR-IT-05", technicalProtocol: "Employee Login Audit", floorAction: "Deactivate 100% of logins for resigned personnel < 24h.", priority: "High", riskLevel: "High", consequence: "Unauthorized revenue deletion.", proof: "Registry Note", verificationRequired: true, cadence: "daily" },
                { id: "FR-IT-06", technicalProtocol: "Wi-Fi Strength Pulse", floorAction: "Measure bandwidth at farthest table corner (Target > 10Mbps).", priority: "Low", riskLevel: "Low", consequence: "Guest frustration.", proof: "Speed Test", cadence: "weekly" },
                { id: "FR-IT-07", technicalProtocol: "POS Touch Hygiene", floorAction: "Sanitize screen and pin-pad between shift rotations.", priority: "Low", riskLevel: "Medium", consequence: "Staff disease spread.", proof: "Cleaning Note", cadence: "daily" },
                { id: "FR-IT-08", technicalProtocol: "CCTV Focal Reset", floorAction: "Adjust 1 random camera for target focus on the till.", priority: "Medium", riskLevel: "High", consequence: "Loss of usable theft evidence.", proof: "Visual Match", cadence: "weekly" }
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
                { id: "FR-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup is online for all units.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance.", proof: "System Check", verificationRequired: true, cadence: "daily" },
                { id: "FR-SEC-02", technicalProtocol: "Panic Button Pulse", floorAction: "Test silent alarms in high-cash units.", priority: "High", riskLevel: "High", consequence: "Zero response during emergency.", proof: "Signal Test", verificationRequired: true, cadence: "daily" },
                { id: "FR-SEC-03", technicalProtocol: "Stock-Room Lockdown", floorAction: "Witness dual-lock of internal vault at shift exit.", priority: "High", riskLevel: "High", consequence: "Unauthorized overnight theft.", proof: "Visual Confirm", verificationRequired: true, cadence: "daily" },
                { id: "FR-SEC-04", technicalProtocol: "Bag-search Frequency", floorAction: "Execute random searches of 5 staff bags at EOD.", priority: "Medium", riskLevel: "Medium", consequence: "Systemic internal shrinkage.", proof: "Registry Note", cadence: "daily" },
                { id: "FR-SEC-05", technicalProtocol: "Intruder Gate Seal", floorAction: "Inspect 100% of after-hours shutters for tamper-signs.", priority: "High", riskLevel: "High", consequence: "Undetected burglary.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "FR-SEC-06", technicalProtocol: "Suspicious Object Sweep", floorAction: "Conduct 15-min foyer patrol pre-opening.", priority: "High", riskLevel: "High", consequence: "Safety threat liability.", proof: "Patrol Note", verificationRequired: true, cadence: "daily" },
                { id: "FR-SEC-07", technicalProtocol: "Perimeter Lighting", floorAction: "Replace non-functional bulbs in back alleyways.", priority: "Low", riskLevel: "Medium", consequence: "Assault / Theft risk.", proof: "Visual Check", cadence: "daily" },
                { id: "FR-SEC-08", technicalProtocol: "Handover ID Match", floorAction: "Confirm 100% guard names match approved agency roster.", priority: "Medium", riskLevel: "Low", consequence: "Unvetted security personnel.", proof: "ID Audit", cadence: "daily" }
            ]
        }
    ]
};
