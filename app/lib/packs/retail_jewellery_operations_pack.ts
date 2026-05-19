
import type { PremiumPack } from "@/lib/premium-packs";

export const retail_jewellery_operations_pack: PremiumPack = {
    id: 'retail_jewellery_operations_pack',
    title: "Jewellery Operations System v19.2 (Sovereign Pro)",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 1500,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d863f69b-8919-4115-b778-831d17d120fb',
    category: "Retail",
    description: "The definitive Sovereign v19.2 custody-chain engine for high-value retail. Hardening 198 technical control points across Vault Governance, Transaction Integrity, and Hallmark Compliance.",
    heroHeadline: "Protect Your Inventory. Secure Your Custody Chain.",
    heroSubheadline: "Track every gram, monitor vault dual-auth, and protect high-value transactions—across 18 specialized governance roles.",
    pricingUrgency: "A single 'swap' theft or one hallmark compliance failure costs 1000x more than this entire system.",
    consultingAnchor: 15000,
    icon: "gem",
    badgeText: "V19.2 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Store Directors", "Vault Custodians", "Compliance Officers", "Loss Prevention Heads", "Jewellery Owners"],
    sampleItems: [
        { text: "<strong>Vault Custody Engine</strong>: Dual-authorization morning opening and gram-variance tolerance checks.", icon: "lock" },
        { text: "<strong>Display Integrity Logic</strong>: Hourly empty-holder anomaly scans and trial-piece return weighing.", icon: "eye" },
        { text: "<strong>Transaction Shield</strong>: High-value discount authorization chains and buyback valuation controls.", icon: "banknote" },
        { text: "<strong>Hallmark Governance</strong>: BIS hallmark verification and diamond certificate-to-piece mapping.", icon: "award" },
        { text: "<strong>Surveillance Command</strong>: CCTV frame coverage audits and blind-spot identification pulses.", icon: "shield-check" },
        { text: "<strong>Ethical Sourcing Hub</strong>: Gold recycling logs and vendor ethical certification audits.", icon: "leaf" }
    ],
    checklists: [
        {
            title: "Store Director Governance",
            department: "Executive",
            frequency: "Daily",
            role: "Store Director",
            summary: "High-level strategic oversight of inventory risk and financial integrity.",
            icon: "crown",
            tasks: [
                { id: "J-DIR-01", technicalProtocol: "Strategic Risk Triage", floorAction: "Review all high-value incident logs and vault access anomalies from last 24h.", priority: "High", riskLevel: "High", consequence: "Unmonitored liability and inventory breach.", proof: "Incident Log", verificationRequired: true, cadence: "daily" },
                { id: "J-DIR-02", technicalProtocol: "Revenue vs Gram Reconcile", floorAction: "Match total bill values against net gram movement in the inventory ledger.", priority: "High", riskLevel: "High", consequence: "Undetected internal theft or margin leakage.", proof: "Reconcile Sheet", verificationRequired: true, cadence: "daily" },
                { id: "J-DIR-03", technicalProtocol: "Buyback Approval", floorAction: "Final authorization for 100% of high-value buyback cash/credit settlements.", priority: "High", riskLevel: "High", consequence: "Fraudulent buyback payouts.", proof: "Signed Authorization", verificationRequired: true, cadence: "daily" },
                { id: "J-DIR-04", technicalProtocol: "Metrology Compliance", floorAction: "Verify validity of stamping certs for all precision weighing scales.", priority: "High", riskLevel: "Medium", consequence: "Government fines and consumer court cases.", proof: "Certificate File", cadence: "weekly" },
                { id: "J-DIR-05", technicalProtocol: "Insurance Asset Audit", floorAction: "Confirm 100% active insurance cover for in-vault and on-display stock.", priority: "High", riskLevel: "High", consequence: "Total financial ruin during a heist or fire.", proof: "Policy Registry", verificationRequired: true, cadence: "monthly" },
                { id: "J-DIR-06", technicalProtocol: "Staff Integrity Vetting", floorAction: "Verify police clearance and background checks for 100% of floor staff.", priority: "High", riskLevel: "High", consequence: "Internal collusion risks.", proof: "Vetting Registry", cadence: "monthly" },
                { id: "J-DIR-07", technicalProtocol: "Inventory Aging Review", floorAction: "Identify 5 SKUs with zero movement in > 90 days for markdown strategy.", priority: "Medium", riskLevel: "Low", consequence: "Locked capital in dead stock.", proof: "Aging Report", cadence: "monthly" },
                { id: "J-DIR-08", technicalProtocol: "Budget Variance Audit", floorAction: "Review marketing and admin spend against monthly forecast.", priority: "Low", riskLevel: "Low", consequence: "Uncontrolled cost overruns.", proof: "P&L Report", cadence: "monthly" },
                { id: "J-DIR-09", technicalProtocol: "Statutory License Watch", floorAction: "Verify BIS, Fire NOC, and Trade licenses are displayed and valid.", priority: "High", riskLevel: "High", consequence: "Showroom sealing during inspection.", proof: "Visual Audit", cadence: "weekly" },
                { id: "J-DIR-10", technicalProtocol: "Staff Training Matrix", floorAction: "Confirm completion of 'Counter-Swap Deterrence' module for new hires.", priority: "Medium", riskLevel: "Medium", consequence: "Vulnerability to professional shoplifters.", proof: "Training Log", cadence: "weekly" },
                { id: "J-DIR-11", technicalProtocol: "Daily MOD Summary", floorAction: "Final daily operational and safety status sign-off.", priority: "High", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Summary", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Senior Sales Command",
            department: "Sales",
            frequency: "Daily",
            role: "Senior Sales Associate",
            summary: "Lead floor execution and high-value piece handling.",
            icon: "star",
            tasks: [
                { id: "J-SSA-01", technicalProtocol: "Counter Opening Tray-Match", floorAction: "Count pieces in assigned trays; match against morning issue slip.", priority: "High", riskLevel: "High", consequence: "Missing piece identification failure.", proof: "Count Sheet", verificationRequired: true, cadence: "daily" },
                { id: "J-SSA-02", technicalProtocol: "Handling Protocol", floorAction: "Enforce 'One Piece at a Time' rule for all customer trials.", priority: "High", riskLevel: "High", consequence: "Swap theft and substitution loss.", proof: "Supervisor Obs", cadence: "hourly" },
                { id: "J-SSA-03", technicalProtocol: "Interaction Logging", floorAction: "Log 100% of trials for items > threshold value into the floor book.", priority: "Medium", riskLevel: "Medium", consequence: "Loss of custody trail.", proof: "Trial Log", cadence: "daily" },
                { id: "J-SSA-04", technicalProtocol: "Return Weighing", floorAction: "Physically weigh pieces returned from customer trial; flag 0.01g variance.", priority: "High", riskLevel: "High", consequence: "Part-substitution or stone-swapping.", proof: "Scale Note", verificationRequired: true, cadence: "hourly" },
                { id: "J-SSA-05", technicalProtocol: "Closing Reconcile", floorAction: "Final piece count of assigned trays pre-vault return.", priority: "High", riskLevel: "High", consequence: "Overnight inventory discrepancy.", proof: "Initialed Slip", verificationRequired: true, cadence: "daily" },
                { id: "J-SSA-06", technicalProtocol: "Staff Sobriety Pulse", floorAction: "Confirm zero alcohol odor for incoming floor team.", priority: "High", riskLevel: "High", consequence: "Safety breach and reputation loss.", proof: "Briefing Log", verificationRequired: true, cadence: "daily" },
                { id: "J-SSA-07", technicalProtocol: "Dispute Escalation", floorAction: "Triage all on-floor customer disputes < 10 mins.", priority: "Medium", riskLevel: "Low", consequence: "Negative ORM driver.", proof: "Incident Note", cadence: "daily" },
                { id: "J-SSA-08", technicalProtocol: "Gift Set Vetting", floorAction: "Verify 100% component count for multi-piece bridal sets.", priority: "Medium", riskLevel: "Low", consequence: "Customer disputes at delivery.", proof: "Visual Match", cadence: "daily" },
                { id: "J-SSA-09", technicalProtocol: "Display Parity", floorAction: "Confirm marketing props match today's seasonal campaign.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Photo", cadence: "daily" },
                { id: "J-SSA-10", technicalProtocol: "Sales-Bill Verify", floorAction: "Cross-check piece ID on bill against physical tag before handover.", priority: "High", riskLevel: "Medium", consequence: "Wrong item delivered.", proof: "Bill Stamp", verificationRequired: true, cadence: "daily" },
                { id: "J-SSA-11", technicalProtocol: "Counter Lockdown", floorAction: "Verify locking of all counter shutters pre-vault return.", priority: "High", riskLevel: "High", consequence: "Unsecured high-value window.", proof: "Walkthrough", cadence: "daily" }
            ]
        },
        {
            title: "Junior Floor Support",
            department: "Sales",
            frequency: "Daily",
            role: "Junior Sales Associate",
            summary: "Showcase presentation and secondary security pulse.",
            icon: "user",
            tasks: [
                { id: "J-JSA-01", technicalProtocol: "Surface Sanitization", floorAction: "Clear all fingerprints from glass showcases every 2 hours.", priority: "Low", riskLevel: "Low", consequence: "Poor luxury perception.", proof: "Cleaning Chart", cadence: "hourly" },
                { id: "J-JSA-02", technicalProtocol: "Empty-Holder Scan", floorAction: "Identify and fill any empty display slots to prevent theft suspicion.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized piece removal gone unnoticed.", proof: "Walk Log", cadence: "hourly" },
                { id: "J-JSA-03", technicalProtocol: "Price Tag Alignment", floorAction: "Ensure 100% of tags are hidden or neatly placed.", priority: "Low", riskLevel: "Low", consequence: "Messy display.", proof: "Visual Check", cadence: "daily" },
                { id: "J-JSA-04", technicalProtocol: "Mirror Clarity Sweep", floorAction: "Wipe all customer viewing mirrors with lint-free cloth.", priority: "Low", riskLevel: "Low", consequence: "Negative customer trial experience.", proof: "Visual Audit", cadence: "daily" },
                { id: "J-JSA-05", technicalProtocol: "Packaging Stock", floorAction: "Replenish branded boxes and bags at the delivery counter.", priority: "Low", riskLevel: "Low", consequence: "Service friction at checkout.", proof: "Stock Check", cadence: "daily" },
                { id: "J-JSA-06", technicalProtocol: "Customer ID Filter", floorAction: "Verify valid ID for all walk-ins requesting high-value trials.", priority: "Medium", riskLevel: "Medium", consequence: "Unvetted persons handling stock.", proof: "Registry Audit", cadence: "daily" },
                { id: "J-JSA-07", technicalProtocol: "Tray Recovery TAT", floorAction: "Return tried pieces to display/safe < 2 mins post-trial.", priority: "High", riskLevel: "Medium", consequence: "Theft window on counter.", proof: "Supervisor Obs", cadence: "hourly" },
                { id: "J-JSA-08", technicalProtocol: "Station Hygiene", floorAction: "Sanitize customer refreshment area.", priority: "Low", riskLevel: "Low", consequence: "Hygiene perception drop.", proof: "Cleaning Log", cadence: "daily" },
                { id: "J-JSA-09", technicalProtocol: "Digital Catalog Sync", floorAction: "Verify tablet app matches today's in-store inventory.", priority: "Low", riskLevel: "Low", consequence: "Showing unavailable stock.", proof: "System Screen", cadence: "daily" },
                { id: "J-JSA-10", technicalProtocol: "Closing Handover", floorAction: "Clear counter surface and return all props to cabinet.", priority: "Medium", riskLevel: "Low", consequence: "Disorganized opening.", proof: "Walkthrough", cadence: "daily" },
                { id: "J-JSA-11", technicalProtocol: "Floor Orderly Pulse", floorAction: "Verify zero unattended guest bags in the showroom.", priority: "High", riskLevel: "High", consequence: "Security/Bomb threat liability.", proof: "Patrol Log", cadence: "hourly" }
            ]
        },
        {
            title: "Vault Command (Primary)",
            department: "Vault",
            frequency: "Daily",
            role: "Vault Custodian (Primary)",
            summary: "Zero-fail custody governance for the master safe.",
            icon: "lock",
            tasks: [
                { id: "J-VLT-01", technicalProtocol: "Vault Open (Dual Auth)", floorAction: "Execute 2-key entry sequence with Secondary Custodian.", priority: "High", riskLevel: "High", consequence: "Single-point theft risk.", proof: "Dual-Sign Log", verificationRequired: true, cadence: "daily" },
                { id: "J-VLT-02", technicalProtocol: "Entry Timestamp Log", floorAction: "Record exact time of every vault ingress/egress.", priority: "High", riskLevel: "High", consequence: "Loss of custody audit trail.", proof: "Digital Ledger", verificationRequired: true, cadence: "daily" },
                { id: "J-VLT-03", technicalProtocol: "Custody Transfer", floorAction: "Log 100% of pieces issued to floor staff by ID and weight.", priority: "High", riskLevel: "High", consequence: "Untraceable internal shortage.", proof: "Issue Slip", verificationRequired: true, cadence: "daily" },
                { id: "J-VLT-04", technicalProtocol: "Bulk Stock Reconcile", floorAction: "Match morning vault-count to previous night's closing registry.", priority: "High", riskLevel: "High", consequence: "Unidentified overnight theft.", proof: "Audit Sheet", verificationRequired: true, cadence: "daily" },
                { id: "J-VLT-05", technicalProtocol: "Gram-Weight Audit", floorAction: "Randomly weigh 5 stock-packets; verify against system label.", priority: "High", riskLevel: "Medium", consequence: "Systemic gram leakage.", proof: "Scale Record", verificationRequired: true, cadence: "daily" },
                { id: "J-VLT-06", technicalProtocol: "Overnight Holding", floorAction: "Verify lock of high-security repair bins.", priority: "High", riskLevel: "High", consequence: "Loss of client property.", proof: "Visual Confirm", verificationRequired: true, cadence: "daily" },
                { id: "J-VLT-07", technicalProtocol: "Unscheduled Access", floorAction: "Escalate any off-schedule vault entry to Store Director.", priority: "High", riskLevel: "High", consequence: "Unauthorized theft window.", proof: "Incident Log", verificationRequired: true, cadence: "incident-based" },
                { id: "J-VLT-08", technicalProtocol: "Vault Vitals Check", floorAction: "Confirm zero humidity signs and functional fire-suppression.", priority: "High", riskLevel: "Medium", consequence: "Asset decay or fire loss.", proof: "Gauge Log", verificationRequired: true, cadence: "daily" },
                { id: "J-VLT-09", technicalProtocol: "Inward Seal Verify", floorAction: "Check 100% of incoming stock bags for intact vendor seals.", priority: "Medium", riskLevel: "Medium", consequence: "Supply chain pilferage.", proof: "Seal Registry", verificationRequired: true, cadence: "daily" },
                { id: "J-VLT-10", technicalProtocol: "CCTV Frame Reconcile", floorAction: "Verify camera inside vault is unobstructed and recording.", priority: "High", riskLevel: "High", consequence: "Blind theft window.", proof: "System Screen", verificationRequired: true, cadence: "daily" },
                { id: "J-VLT-11", technicalProtocol: "Dual-Sign Closure", floorAction: "Witness safe lock and return keys to tamper-proof pouch.", priority: "High", riskLevel: "High", consequence: "Safe left ajar overnight.", proof: "Signed Registry", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Vault Command (Secondary)",
            department: "Vault",
            frequency: "Daily",
            role: "Vault Custodian (Secondary)",
            summary: "Symmetric dual-authorization and audit support.",
            icon: "key",
            tasks: [
                { id: "J-VLS-01", technicalProtocol: "Key Custody Audit", floorAction: "Confirm possession of secondary master key pouch.", priority: "High", riskLevel: "High", consequence: "Vault access failure.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "J-VLS-02", technicalProtocol: "Co-Auth Access", floorAction: "Physically accompany Primary Custodian during 100% entries.", priority: "High", riskLevel: "High", consequence: "Unauthorized lone-person access.", proof: "Dual-Sign Log", verificationRequired: true, cadence: "daily" },
                { id: "J-VLS-03", technicalProtocol: "Shadow Count", floorAction: "Independently verify piece count during issue/return.", priority: "High", riskLevel: "High", consequence: "Collusion theft risk.", proof: "Audit Initial", verificationRequired: true, cadence: "daily" },
                { id: "J-VLS-04", technicalProtocol: "Mismatch Loop", floorAction: "Log any variance in piece count immediately.", priority: "High", riskLevel: "High", consequence: "Hidden shortage.", proof: "Incident Registry", verificationRequired: true, cadence: "daily" },
                { id: "J-VLS-05", technicalProtocol: "Perimeter Sweep", floorAction: "Inspect walls/ventilation inside vault for tampering.", priority: "High", riskLevel: "High", consequence: "Sophisticated heist prep.", proof: "Walk Log", verificationRequired: true, cadence: "daily" },
                { id: "J-VLS-06", technicalProtocol: "Secondary Seal Check", floorAction: "Apply tamper-evident tape to vault handle post-closing.", priority: "Medium", riskLevel: "High", consequence: "Undetected after-hours entry.", proof: "Photo", verificationRequired: true, cadence: "daily" },
                { id: "J-VLS-07", technicalProtocol: "Logbook Peer Review", floorAction: "Initial all entries made by Primary Custodian.", priority: "Medium", riskLevel: "Low", consequence: "Data manipulation.", proof: "Signed Ledger", verificationRequired: true, cadence: "daily" },
                { id: "J-VLS-08", technicalProtocol: "Alarm Signal Test", floorAction: "Verify vault vibration sensor is online.", priority: "High", riskLevel: "High", consequence: "Failure to detect drilling.", proof: "Test Note", verificationRequired: true, cadence: "weekly" },
                { id: "J-VLS-09", technicalProtocol: "Panic Trigger Pulse", floorAction: "Test response of under-vault silent alarm.", priority: "High", riskLevel: "High", consequence: "Zero help during duress.", proof: "Signal Test", verificationRequired: true, cadence: "daily" },
                { id: "J-VLS-10", technicalProtocol: "Post-Closing Key Seal", floorAction: "Place keys in night-safe and log seal number.", priority: "High", riskLevel: "High", consequence: "Key theft liability.", proof: "Registry Note", verificationRequired: true, cadence: "daily" },
                { id: "J-VLS-11", technicalProtocol: "Vault Power Backup", floorAction: "Test emergency lighting inside the vault room.", priority: "Low", riskLevel: "Medium", consequence: "Panic during blackout.", proof: "Visual Check", verificationRequired: true, cadence: "weekly" }
            ]
        },
        {
            title: "Display Integrity",
            department: "Visuals",
            frequency: "Hourly",
            role: "Display Manager",
            summary: "Protects piece-level integrity in showroom showcases.",
            icon: "eye",
            tasks: [
                { id: "J-DSP-01", technicalProtocol: "Opening Piece Count", floorAction: "Verify 100% display fill against morning Safe release ledger.", priority: "High", riskLevel: "High", consequence: "Opening shortage.", proof: "Count Sheet", verificationRequired: true, cadence: "daily" },
                { id: "J-DSP-02", technicalProtocol: "Integrity Sweep", floorAction: "Execute 60-min walk to verify piece-to-holder match.", priority: "High", riskLevel: "High", consequence: "Undetected tag-theft.", proof: "Patrol Log", cadence: "hourly" },
                { id: "J-DSP-03", technicalProtocol: "Empty-Holder Logic", floorAction: "Confirm 100% of empty slots have 'Item Being Tried' cards.", priority: "High", riskLevel: "Medium", consequence: "Blind theft window.", proof: "Visual Audit", cadence: "hourly" },
                { id: "J-DSP-04", technicalProtocol: "Displacement Verify", floorAction: "Correct any pieces moved from high-security center-view.", priority: "Medium", riskLevel: "Low", consequence: "Lower VM impact.", proof: "Visual Check", cadence: "daily" },
                { id: "J-DSP-05", technicalProtocol: "Showcase Lock Pulse", floorAction: "Test 10 random showcase locks for key functionality.", priority: "High", riskLevel: "High", consequence: "Forced entry vulnerability.", proof: "Test Note", cadence: "daily" },
                { id: "J-DSP-06", technicalProtocol: "Glass Integrity", floorAction: "Inspect for cracks or scratches in display glazing.", priority: "Medium", riskLevel: "High", consequence: "Weakened physical barrier.", proof: "Walkthrough", cadence: "weekly" },
                { id: "J-DSP-07", technicalProtocol: "Color-Temp Parity", floorAction: "Replace all flickering or yellowed LED spotlight bulbs.", priority: "Low", riskLevel: "Low", consequence: "Sub-par product sparkle.", proof: "Visual Audit", cadence: "daily" },
                { id: "J-DSP-08", technicalProtocol: "Window Security Seal", floorAction: "Verify intact night-seals on external window displays.", priority: "High", riskLevel: "High", consequence: "Burglary risk.", proof: "Photo", verificationRequired: true, cadence: "daily" },
                { id: "J-DSP-09", technicalProtocol: "Rotating Case Motor", floorAction: "Verify smooth oscillation of tiered stands.", priority: "Low", riskLevel: "Low", consequence: "Visual brand decay.", proof: "Visual Check", cadence: "daily" },
                { id: "J-DSP-10", technicalProtocol: "Spot Weight Match", floorAction: "Randomly weigh 2 display pieces; match tag weight.", priority: "High", riskLevel: "Medium", consequence: "Part-substitution (Professional theft).", proof: "Audit Log", verificationRequired: true, cadence: "daily" },
                { id: "J-DSP-11", technicalProtocol: "EOD Display Removal", floorAction: "Witness 100% transfer of window stock to vault.", priority: "High", riskLevel: "High", consequence: "Overnight window heist.", proof: "Registry Note", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Workshop & Repairs",
            department: "Workshop",
            frequency: "Daily",
            role: "Repairs & Workshop Supervisor",
            summary: "Gram-level control for property under repair.",
            icon: "wrench",
            tasks: [
                { id: "J-WKP-01", technicalProtocol: "Intake Weighing", floorAction: "Document precise gram weight of customer item on receipt.", priority: "High", riskLevel: "High", consequence: "Client claims of weight theft.", proof: "Digital Receipt", verificationRequired: true, cadence: "incident-based" },
                { id: "J-WKP-02", technicalProtocol: "Property Tagging", floorAction: "Apply tamper-proof 'Repair ID' tag to piece.", priority: "High", riskLevel: "Medium", consequence: "Item mix-up (Fatal error).", proof: "Visual Match", verificationRequired: true, cadence: "incident-based" },
                { id: "J-WKP-03", technicalProtocol: "Dust Recovery Log", floorAction: "Vacuum and weigh recovery from workshop suction pits.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored gold-loss in process.", proof: "Recovery Sheet", cadence: "weekly" },
                { id: "J-WKP-04", technicalProtocol: "Hallmark Retention", floorAction: "Confirm 100% visibility of original hallmark post-polish.", priority: "High", riskLevel: "Medium", consequence: "Accidental erasure of legality.", proof: "Visual Check", cadence: "daily" },
                { id: "J-WKP-05", technicalProtocol: "Re-Hallmarking", floorAction: "Log pieces sent for BIS re-validation post-soldering.", priority: "High", riskLevel: "High", consequence: "Selling un-hallmarked repaired goods.", proof: "Registry Note", verificationRequired: true, cadence: "daily" },
                { id: "J-WKP-06", technicalProtocol: "Repair Return Weighing", floorAction: "Verify final weight matches intake weight (+/- polish loss).", priority: "High", riskLevel: "High", consequence: "Internal metal pilferage.", proof: "Scale Note", verificationRequired: true, cadence: "incident-based" },
                { id: "J-WKP-07", technicalProtocol: "Scrap Registry", floorAction: "Document 100% of removed old solder or links.", priority: "Medium", riskLevel: "Low", consequence: "Inventory leakage.", proof: "Scrap Sheet", verificationRequired: true, cadence: "daily" },
                { id: "J-WKP-08", technicalProtocol: "Workshop LOTO", floorAction: "Enforce lock-out for high-speed buffing motors.", priority: "High", riskLevel: "High", consequence: "Fatal staff injury.", proof: "Visual Audit", cadence: "daily" },
                { id: "J-WKP-09", technicalProtocol: "Acid Storage", floorAction: "Confirm lock on aqua-regia and testing chemicals.", priority: "High", riskLevel: "High", consequence: "Toxic poisoning / Theft.", proof: "Visual Check", cadence: "daily" },
                { id: "J-WKP-10", technicalProtocol: "Order TAT Tracking", floorAction: "Update client via SMS for 100% of ready repairs.", priority: "Low", riskLevel: "Low", consequence: "Overcrowded repair safe.", proof: "Comms Log", cadence: "daily" },
                { id: "J-WKP-11", technicalProtocol: "EOD Workshop Reset", floorAction: "Final sweep for loose gems on workbenches.", priority: "High", riskLevel: "Medium", consequence: "Lost small-carat stones.", proof: "Walkthrough", cadence: "daily" }
            ]
        },
        {
            title: "Custom Order Logic",
            department: "Workshop",
            frequency: "Daily",
            role: "Custom Order Coordinator",
            summary: "Milestone tracking for bespoke manufacturing.",
            icon: "pen-tool",
            tasks: [
                { id: "J-CUS-01", technicalProtocol: "Sketch/CAD Approval", floorAction: "Verify customer physical signature on final design.", priority: "Medium", riskLevel: "Low", consequence: "Dispute post-production.", proof: "Design File", cadence: "incident-based" },
                { id: "J-CUS-02", technicalProtocol: "Advance Reconcile", floorAction: "Confirm 50% deposit clearance pre-casting.", priority: "High", riskLevel: "Medium", consequence: "Unpaid work-in-progress.", proof: "Finance Sync", verificationRequired: true, cadence: "daily" },
                { id: "J-CUS-03", technicalProtocol: "Material Allocation", floorAction: "Issue precise gold grams to goldsmith by ID.", priority: "High", riskLevel: "High", consequence: "Internal inventory loss.", proof: "Issue Ledger", verificationRequired: true, cadence: "daily" },
                { id: "J-CUS-04", technicalProtocol: "Milestone Update", floorAction: "Log 'Wax-Ready' and 'Setting-Start' status.", priority: "Low", riskLevel: "Low", consequence: "Delayed delivery promise.", proof: "System Screen", cadence: "daily" },
                { id: "J-CUS-05", technicalProtocol: "Casting Yield", floorAction: "Weigh cast tree vs. raw gold issued.", priority: "High", riskLevel: "Medium", consequence: "Invisible process theft.", proof: "Yield Sheet", verificationRequired: true, cadence: "daily" },
                { id: "J-CUS-06", technicalProtocol: "Gemstone Match", floorAction: "Confirm specific stone ID matches customer selection.", priority: "High", riskLevel: "High", consequence: "Wrong stone setting (Fatal).", proof: "Visual Match", verificationRequired: true, cadence: "incident-based" },
                { id: "J-CUS-07", technicalProtocol: "Final QC Scan", floorAction: "Check prong tension and setting integrity under loupe.", priority: "Medium", riskLevel: "Medium", consequence: "Stone-loss claims.", proof: "QC Log", cadence: "daily" },
                { id: "J-CUS-08", technicalProtocol: "Delivery Prep", floorAction: "Verify presence of IGI/GIA certs in the gift box.", priority: "Medium", riskLevel: "Low", consequence: "Incomplete delivery.", proof: "Photo", cadence: "daily" },
                { id: "J-CUS-09", technicalProtocol: "Customer Fitting", floorAction: "Log 100% of final trial feedback.", priority: "Low", riskLevel: "Low", consequence: "Post-delivery sizing disputes.", proof: "Trial Note", cadence: "daily" },
                { id: "J-CUS-10", technicalProtocol: "IP Protection", floorAction: "Ensure zero unapproved photos of custom designs.", priority: "Low", riskLevel: "Medium", consequence: "Design plagiarism risk.", proof: "Visual Audit", cadence: "daily" },
                { id: "J-CUS-11", technicalProtocol: "Delay Escalation", floorAction: "Notify client 48h prior for any production lag.", priority: "High", riskLevel: "Low", consequence: "Trust loss.", proof: "Call Log", cadence: "daily" }
            ]
        },
        {
            title: "Finance & Billing Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance & Billing Officer",
            summary: "Governance for revenue points and tax compliance.",
            icon: "banknote",
            tasks: [
                { id: "J-FIN-01", technicalProtocol: "Bill vs Gram Reconcile", floorAction: "Cross-match tag weight vs bill calculations.", priority: "High", riskLevel: "High", consequence: "Calculated bill fraud.", proof: "Bill Audit", verificationRequired: true, cadence: "daily" },
                { id: "J-FIN-02", technicalProtocol: "Gold Rate Sync", floorAction: "Verify POS rate matches physical board rate (8 AM).", priority: "High", riskLevel: "High", consequence: "Selling at incorrect daily rates.", proof: "Rate Photo", verificationRequired: true, cadence: "daily" },
                { id: "J-FIN-03", technicalProtocol: "Sales Journal Audit", floorAction: "Confirm zero missing invoice numbers in sequence.", priority: "High", riskLevel: "High", consequence: "Revenue manipulation / tax fraud.", proof: "Digital Audit", verificationRequired: true, cadence: "daily" },
                { id: "J-FIN-04", technicalProtocol: "Tax Compliance", floorAction: "Verify GST percentage per item category (Jewelry/Coins).", priority: "High", riskLevel: "Medium", consequence: "Statutory penalties.", proof: "Sample Check", verificationRequired: true, cadence: "daily" },
                { id: "J-FIN-05", technicalProtocol: "Settlement Reconcile", floorAction: "Match POS card/UPI totals to bank gateway credit.", priority: "High", riskLevel: "Medium", consequence: "Unreconciled bank shortages.", proof: "Sync Report", verificationRequired: true, cadence: "daily" },
                { id: "J-FIN-06", technicalProtocol: "High-Value PAN Audit", floorAction: "Verify valid PAN copy for all sales > ₹200,000.", priority: "High", riskLevel: "High", consequence: "Income Tax regulatory action.", proof: "KYC File", verificationRequired: true, cadence: "daily" },
                { id: "J-FIN-07", technicalProtocol: "Discount Override Scan", floorAction: "Identify any staff code using > 15% discount.", priority: "Medium", riskLevel: "Medium", consequence: "Rogue discounting.", proof: "Registry Note", cadence: "weekly" },
                { id: "J-FIN-08", technicalProtocol: "Petty Cash Reconcile", floorAction: "Match physical cash vs voucher registry.", priority: "Low", riskLevel: "Low", consequence: "Petty cash fraud.", proof: "Cash Log", cadence: "daily" },
                { id: "J-FIN-09", technicalProtocol: "Vendor Payout Pulse", floorAction: "Verify approval for any payment > ₹10,000.", priority: "Medium", riskLevel: "Medium", consequence: "Unauthorized funds outflow.", proof: "Signed Voucher", cadence: "daily" },
                { id: "J-FIN-10", technicalProtocol: "Exchange Valuation", floorAction: "Witness melting-test result for 1 random buyback.", priority: "High", riskLevel: "High", consequence: "Paying for lower-carat purity.", proof: "Lab Report", verificationRequired: true, cadence: "daily" },
                { id: "J-FIN-11", technicalProtocol: "EOD Cash-Drop Seal", floorAction: "Physically witness seal of bank transit bag.", priority: "High", riskLevel: "High", consequence: "Untraceable transit theft.", proof: "Seal Number", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Loss Prevention",
            department: "Security",
            frequency: "Daily",
            role: "Loss Prevention Officer",
            summary: "Hardens the perimeter and prevents in-store shrinkage.",
            icon: "shield-alert",
            tasks: [
                { id: "J-LP-01", technicalProtocol: "EAS Gate Sensitivity", floorAction: "Test entry gates with active RFID/Security tag.", priority: "High", riskLevel: "High", consequence: "Undetected tag-theft at exit.", proof: "Test Log", cadence: "daily" },
                { id: "J-LP-02", technicalProtocol: "Tag Tamper Sweep", floorAction: "Walk showcases; check for loosened security strings.", priority: "High", riskLevel: "High", consequence: "Swap theft prep.", proof: "Patrol Log", cadence: "hourly" },
                { id: "J-LP-03", technicalProtocol: "Fitting-Room Scan", floorAction: "Check mirrors/vents for discarded tags or concealment.", priority: "High", riskLevel: "High", consequence: "Boutique theft hotspot.", proof: "Log Entry", verificationRequired: true, cadence: "hourly" },
                { id: "J-LP-04", technicalProtocol: "Staff Bag-Search", floorAction: "Perform random check of 5 staff bags at EOD.", priority: "Medium", riskLevel: "Medium", consequence: "Internal pilferage.", proof: "Registry Note", cadence: "daily" },
                { id: "J-LP-05", technicalProtocol: "Suspicious Behavior", floorAction: "Log 100% of 'Linger-without-Buy' incidents.", priority: "Low", riskLevel: "Medium", consequence: "Zero heist-prep intelligence.", proof: "Incident Log", cadence: "daily" },
                { id: "J-LP-06", technicalProtocol: "Panic Button Pulse", floorAction: "Execute silent alarm trigger; verify 30s response.", priority: "High", riskLevel: "High", consequence: "No help during armed robbery.", proof: "Signal Test", verificationRequired: true, cadence: "daily" },
                { id: "J-LP-07", technicalProtocol: "Internal Vault Access", floorAction: "Audit access registry vs CCTV timestamp match.", priority: "High", riskLevel: "High", consequence: "Collusion theft window.", proof: "Audit Report", cadence: "weekly" },
                { id: "J-LP-08", technicalProtocol: "Shoplifting Deterrence", floorAction: "Confirm 100% visibility of LP staff in peak waves.", priority: "Medium", riskLevel: "Low", consequence: "Increased theft attempts.", proof: "Supervisor Obs", cadence: "daily" },
                { id: "J-LP-09", technicalProtocol: "Display Seal Integrity", floorAction: "Check night-seals on external window displays.", priority: "High", riskLevel: "High", consequence: "Burglary risk.", proof: "Visual Check", cadence: "daily" },
                { id: "J-LP-10", technicalProtocol: "LP Staff Briefing", floorAction: "Brief team on current 'Fraud-Profile' alerts from police.", priority: "Low", riskLevel: "Low", consequence: "Low threat awareness.", proof: "Briefing Log", cadence: "daily" },
                { id: "J-LP-11", technicalProtocol: "High-Value Trash", floorAction: "Physically witness emptying of workshop bins.", priority: "Medium", riskLevel: "Medium", consequence: "Theft via waste disposal.", proof: "Visual Audit", cadence: "daily" }
            ]
        },
        {
            title: "Surveillance Command",
            department: "Security",
            frequency: "Daily",
            role: "CCTV Monitoring Officer",
            summary: "Digital governance of showroom and vault assets.",
            icon: "eye",
            tasks: [
                { id: "J-CTV-01", technicalProtocol: "Frame Coverage Audit", floorAction: "Confirm 100% visibility of all counter-top trial zones.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for swap theft.", proof: "Monitor Check", cadence: "daily" },
                { id: "J-CTV-02", technicalProtocol: "Retention Validation", floorAction: "Verify 30-day storage for high-res vault footage.", priority: "High", riskLevel: "High", consequence: "Audit trail failure for insurance.", proof: "System Screen", verificationRequired: true, cadence: "daily" },
                { id: "J-CTV-03", technicalProtocol: "Blind-Spot Report", floorAction: "Identify and report any obscured camera angles.", priority: "Medium", riskLevel: "Low", consequence: "Security gaps.", proof: "Registry Note", cadence: "weekly" },
                { id: "J-CTV-04", technicalProtocol: "DVR Thermal Pulse", floorAction: "Log rack-room temp (Target < 21°C).", priority: "Medium", riskLevel: "Medium", consequence: "Recording hardware crash.", proof: "Temp Log", cadence: "daily" },
                { id: "J-CTV-05", technicalProtocol: "Transaction Zoom", floorAction: "Execute 10 random zooms on billing point for clarity.", priority: "High", riskLevel: "Medium", consequence: "Unusable theft evidence.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "J-CTV-06", technicalProtocol: "Vault Entry Sync", floorAction: "Match physical vault log entries to CCTV timestamps.", priority: "High", riskLevel: "High", consequence: "Undocumented vault access.", proof: "Audit Report", verificationRequired: true, cadence: "daily" },
                { id: "J-CTV-07", technicalProtocol: "Night IR Signal", floorAction: "Verify 100% clarity in zero-light safe zones.", priority: "Medium", riskLevel: "Medium", consequence: "Poor overnight Burglary footage.", proof: "Visual Match", cadence: "daily" },
                { id: "J-CTV-08", technicalProtocol: "Remote Access Log", floorAction: "Audit IPs accessing CCTV stream from off-site.", priority: "High", riskLevel: "High", consequence: "Heist prep via hacked stream.", proof: "Registry Note", cadence: "daily" },
                { id: "J-CTV-09", technicalProtocol: "Motion Alert Sync", floorAction: "Test zone-triggers for after-hours vault perimeter.", priority: "Medium", riskLevel: "Medium", consequence: "Missed burglary alert.", proof: "Test Log", cadence: "weekly" },
                { id: "J-CTV-10", technicalProtocol: "Footage Archival", floorAction: "Witness digital seal of any requested incident clips.", priority: "High", riskLevel: "High", consequence: "Evidence tampering liability.", proof: "Seal Log", verificationRequired: true, cadence: "incident-based" },
                { id: "J-CTV-11", technicalProtocol: "Control Room Guard", floorAction: "Enforce 'No-Staff' policy inside CCTV room.", priority: "Medium", riskLevel: "Low", consequence: "Social engineering theft.", proof: "Visual Audit", cadence: "daily" }
            ]
        },
        {
            title: "Guest Relations",
            department: "Sales",
            frequency: "Daily",
            role: "Customer Relations Manager",
            summary: "Protects high-LTV data and celebration standards.",
            icon: "heart-handshake",
            tasks: [
                { id: "J-CRM-01", technicalProtocol: "KYC Document Audit", floorAction: "Verify 100% PAN/Address parity for HNW sales.", priority: "High", riskLevel: "High", consequence: "Regulatory KYC non-compliance.", proof: "File Audit", verificationRequired: true, cadence: "daily" },
                { id: "J-CRM-02", technicalProtocol: "Appointment Ready", floorAction: "Confirm tray-prep for scheduled VIP arrivals.", priority: "Medium", riskLevel: "Low", consequence: "Loss of premium experience.", proof: "Registry Note", cadence: "daily" },
                { id: "J-CRM-03", technicalProtocol: "Loyalty Points Sync", floorAction: "Audit 5 random redemptions for accuracy.", priority: "Low", riskLevel: "Low", consequence: "Guest friction.", proof: "System Screen", cadence: "weekly" },
                { id: "J-CRM-04", technicalProtocol: "Post-Sale Pulse", floorAction: "Call 2 'Detractor' guests for recovery loop.", priority: "Medium", riskLevel: "Low", consequence: "Viral rating damage.", proof: "Call Log", cadence: "daily" },
                { id: "J-CRM-05", technicalProtocol: "Gift Validity", floorAction: "Audit voucher issuance against approved campaign list.", priority: "Low", riskLevel: "Low", consequence: "Revenue leakage.", proof: "Sample Audit", cadence: "weekly" },
                { id: "J-CRM-06", technicalProtocol: "Dispute Loop", floorAction: "Verify closure of 100% of floor complaints < 24h.", priority: "High", riskLevel: "Medium", consequence: "Escalated legal threats.", proof: "Incident Registry", cadence: "daily" },
                { id: "J-CRM-07", technicalProtocol: "RSVP Tracking", floorAction: "Update guest list for next month's bridal preview.", priority: "Low", riskLevel: "Low", consequence: "Disorganized event.", proof: "Guest List", cadence: "weekly" },
                { id: "J-CRM-08", technicalProtocol: "HNW Preferences", floorAction: "Update 10 profiles with recent anniversary data.", priority: "Low", riskLevel: "Low", consequence: "Cold sales experience.", proof: "System Update", cadence: "daily" },
                { id: "J-CRM-09", technicalProtocol: "Data Security Audit", floorAction: "Verify 100% shredding of discarded customer info.", priority: "High", riskLevel: "High", consequence: "Data privacy violation.", proof: "Visual Confirm", cadence: "daily" },
                { id: "J-CRM-10", technicalProtocol: "Celebration Setup", floorAction: "Confirm flowers/cake for in-store anniversaries.", priority: "Low", riskLevel: "Low", consequence: "Brand promise failure.", proof: "Photo", cadence: "daily" },
                { id: "J-CRM-11", technicalProtocol: "Lounge Hygiene", floorAction: "Inspect VIP room for zero-crumb policy.", priority: "Low", riskLevel: "Low", consequence: "Poor luxury first-touch.", proof: "Walkthrough", cadence: "daily" }
            ]
        },
        {
            title: "Certification & Hallmark",
            department: "Compliance",
            frequency: "Daily",
            role: "Certification & Hallmark Verifier",
            summary: "Authenticity command for gemstones and hallmarking.",
            icon: "award",
            tasks: [
                { id: "J-HAL-01", technicalProtocol: "BIS Hallmark Audit", floorAction: "Use loupe to verify 100% visibility of hallmark on new stock.", priority: "High", riskLevel: "High", consequence: "Legal Metrology violation / Sealing.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "J-HAL-02", technicalProtocol: "Certificate Match", floorAction: "Cross-check diamond GIA number against physical girdle laser-mark.", priority: "High", riskLevel: "High", consequence: "Certificate fraud / Stone swap.", proof: "Loupe Check", verificationRequired: true, cadence: "daily" },
                { id: "J-HAL-03", technicalProtocol: "Authenticity Scan", floorAction: "Execute 1 random tester pulse for synthetic detection.", priority: "High", riskLevel: "High", consequence: "[Never-Event: Selling LGD as Natural].", proof: "Scanner Log", verificationRequired: true, cadence: "daily" },
                { id: "J-HAL-04", technicalProtocol: "Loose Stone Registry", floorAction: "Weigh and count 100% of stones in the workshop safe.", priority: "High", riskLevel: "High", consequence: "Internal gem pilferage.", proof: "Count Sheet", verificationRequired: true, cadence: "daily" },
                { id: "J-HAL-05", technicalProtocol: "Hallmarking Receipt", floorAction: "Match sent vs received piece weight from Hallmark Center.", priority: "High", riskLevel: "Medium", consequence: "Loss during external transit.", proof: "Reconcile Note", cadence: "daily" },
                { id: "J-HAL-06", technicalProtocol: "Cert Storage Security", floorAction: "Audit file-vault for zero missing GIA/IGI original cards.", priority: "Medium", riskLevel: "Medium", consequence: "Unsaleable luxury stock.", proof: "Registry Note", cadence: "weekly" },
                { id: "J-HAL-07", technicalProtocol: "Missing Cert Escalation", floorAction: "Log any piece in showroom without a physical cert.", priority: "High", riskLevel: "Low", consequence: "Operational halt on sales.", proof: "Escalation Note", cadence: "daily" },
                { id: "J-HAL-08", technicalProtocol: "SLA Monitor", floorAction: "Track TAT for external grading labs (Target < 14 days).", priority: "Low", riskLevel: "Low", consequence: "Delayed stock release.", proof: "TAT Dashboard", cadence: "weekly" },
                { id: "J-HAL-09", technicalProtocol: "New Stock Intake", floorAction: "Verify hallmark stamp on 100% of inward shipments.", priority: "High", riskLevel: "High", consequence: "Institutional regulatory risk.", proof: "Registry Log", verificationRequired: true, cadence: "daily" },
                { id: "J-HAL-10", technicalProtocol: "Hallmark Renewal", floorAction: "Check validity of center-license for external lab.", priority: "Low", riskLevel: "High", consequence: "Invalid statutory status.", proof: "Registry Note", cadence: "monthly" },
                { id: "J-HAL-11", technicalProtocol: "Counterfeit Training", floorAction: "Execute 5-min briefing on recent fraud patterns.", priority: "Medium", riskLevel: "Low", consequence: "Low detection awareness.", proof: "Briefing Log", cadence: "weekly" }
            ]
        },
        {
            title: "ESG & Sourcing",
            department: "Compliance",
            frequency: "Weekly",
            role: "ESG & Ethical Sourcing Officer",
            summary: "Ethical discipline and resource tracking.",
            icon: "leaf",
            tasks: [
                { id: "J-ESG-01", technicalProtocol: "Ethical Declaration", floorAction: "Verify 10 random vendor invoices for conflict-free stamps.", priority: "High", riskLevel: "High", consequence: "Ethical sourcing violation.", proof: "Sample Check", verificationRequired: true, cadence: "monthly" },
                { id: "J-ESG-02", technicalProtocol: "Gold Recycling Log", floorAction: "Document 100% of buyback purity vs recycling yield.", priority: "High", riskLevel: "Medium", consequence: "Unmonitored environmental footprint.", proof: "Recycle Sheet", verificationRequired: true, cadence: "daily" },
                { id: "J-ESG-03", technicalProtocol: "Scrap Recovery", floorAction: "Physically weigh 100% of floor-swept gold dust.", priority: "Medium", riskLevel: "Low", consequence: "Loss of recoverable capital.", proof: "Weight Slip", verificationRequired: true, cadence: "monthly" },
                { id: "J-ESG-04", technicalProtocol: "Packaging Waste", floorAction: "Verify 100% separation of paper/plastic at dispatch.", priority: "Low", riskLevel: "Low", consequence: "ESG score drop.", proof: "Visual Audit", cadence: "daily" },
                { id: "J-ESG-05", technicalProtocol: "Vendor Certification", floorAction: "Confirm valid RJC/Sourcing certs for top 5 suppliers.", priority: "Medium", riskLevel: "Medium", consequence: "Supply chain risk exposure.", proof: "Registry File", cadence: "monthly" },
                { id: "J-ESG-06", technicalProtocol: "Hazardous Polishing", floorAction: "Verify 100% disposal of buffing waste into bio-haz bins.", priority: "High", riskLevel: "High", consequence: "Environmental fines.", proof: "Waste Note", cadence: "weekly" },
                { id: "J-ESG-07", technicalProtocol: "Fair Labor Audit", floorAction: "Check workshop roster for working-hour compliance.", priority: "Medium", riskLevel: "High", consequence: "Labor law violation.", proof: "Roster Audit", cadence: "monthly" },
                { id: "J-ESG-08", technicalProtocol: "Conflict-Free Vetting", floorAction: "Audit Kimberley Process certs for 10 random diamonds.", priority: "High", riskLevel: "High", consequence: "Blood-diamond association risk.", proof: "Cert Audit", verificationRequired: true, cadence: "monthly" },
                { id: "J-ESG-09", technicalProtocol: "Water usage Monitor", floorAction: "Log cleaning-sink meter; check for leakage.", priority: "Low", riskLevel: "Low", consequence: "Resource waste.", proof: "Meter Reading", cadence: "daily" },
                { id: "J-ESG-10", technicalProtocol: "Community Support", floorAction: "Document monthly CSR activity contribution.", priority: "Low", riskLevel: "Low", consequence: "Loss of social data.", proof: "Registry Entry", cadence: "monthly" },
                { id: "J-ESG-11", technicalProtocol: "Energy Intensity", floorAction: "Log showroom KWH reading post-closing.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored energy spikes.", proof: "Meter Match", cadence: "daily" }
            ]
        },
        {
            title: "Showroom Security",
            department: "Security",
            frequency: "Hourly",
            role: "Security Guard (Floor)",
            summary: "Physical presence and perimeter deterrence.",
            icon: "user-round",
            tasks: [
                { id: "J-SEC-01", technicalProtocol: "Floor Perimeter Patrol", floorAction: "Execute random 15-min walks in guest lobbies.", priority: "Medium", riskLevel: "Medium", consequence: "Reduced theft deterrence.", proof: "Patrol Log", cadence: "hourly" },
                { id: "J-SEC-02", technicalProtocol: "Visitor ID Registry", floorAction: "Log 100% of guest entries with phone verification.", priority: "High", riskLevel: "Medium", consequence: "Untraceable shoplifting.", proof: "Registry Entry", cadence: "daily" },
                { id: "J-SEC-03", technicalProtocol: "Door Lockdown", floorAction: "Confirm 100% electromagnetic door-locks functional.", priority: "High", riskLevel: "High", consequence: "Entry security failure.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "J-SEC-04", technicalProtocol: "Lockdown Drill", floorAction: "Participate in 5-min tabletop response simulation.", priority: "Low", riskLevel: "High", consequence: "Staff panic during heist.", proof: "Training Log", cadence: "monthly" },
                { id: "J-SEC-05", technicalProtocol: "Parking Clearance", floorAction: "Ensure 100% of fire-lanes are clear of idle vehicles.", priority: "High", riskLevel: "High", consequence: "Blocked emergency access.", proof: "Visual Audit", cadence: "hourly" },
                { id: "J-SEC-06", technicalProtocol: "Suspicious Package", floorAction: "Inspect foyers and planters for unattended items.", priority: "High", riskLevel: "High", consequence: "Explosive/Security threat.", proof: "Walkthrough", cadence: "hourly" },
                { id: "J-SEC-07", technicalProtocol: "Crowd Density", floorAction: "Monitor foyer waves; redirect to side-waiting if > 10 pax.", priority: "Low", riskLevel: "Low", consequence: "Lobby congestion.", proof: "Visual Count", cadence: "hourly" },
                { id: "J-SEC-08", technicalProtocol: "Guard Sobriety", floorAction: "Random breathalyzer for 2 AM guard rotation.", priority: "High", riskLevel: "High", consequence: "Vulnerable night perimeter.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "J-SEC-09", technicalProtocol: "Hand-over Briefing", floorAction: "Update incoming shift on current 'Suspicious' profiles.", priority: "Medium", riskLevel: "Low", consequence: "Information gap.", proof: "Briefing Log", cadence: "daily" },
                { id: "J-SEC-10", technicalProtocol: "Staff Gate Watch", floorAction: "Verify badge scan for 100% of back-alley entries.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit", cadence: "daily" },
                { id: "J-SEC-11", technicalProtocol: "Fire Extinguisher Clear", floorAction: "Confirm zero obstructions in front of floor units.", priority: "Medium", riskLevel: "High", consequence: "Blocked firefighting.", proof: "Visual Check", cadence: "daily" }
            ]
        },
        {
            title: "Inventory Control",
            department: "Stores",
            frequency: "Daily",
            role: "Inventory & Reconciliation Controller",
            summary: "Gram-level data physics and stock parity.",
            icon: "barcode",
            tasks: [
                { id: "J-INV-01", technicalProtocol: "Gram-Level Reconcile", floorAction: "Match nightly vault weight vs issuance ledger.", priority: "High", riskLevel: "High", consequence: "Internal pilferage or process theft.", proof: "Scale Sheet", verificationRequired: true, cadence: "daily" },
                { id: "J-INV-02", technicalProtocol: "SKU vs Physical Parity", floorAction: "Audit 50 random tags for system vs shelf match.", priority: "High", riskLevel: "High", consequence: "Systemic shrinkage.", proof: "Audit Report", verificationRequired: true, cadence: "daily" },
                { id: "J-INV-03", technicalProtocol: "Mismatch Escalation", floorAction: "Notify Store Director of any piece variance > 0.01g.", priority: "High", riskLevel: "High", consequence: "Unresolved stock discrepancy.", proof: "Escalation Note", verificationRequired: true, cadence: "daily" },
                { id: "J-INV-04", technicalProtocol: "IBT Seal Verification", floorAction: "Witness opening of inter-branch transfer pouches.", priority: "High", riskLevel: "High", consequence: "Transit theft gone undetected.", proof: "Seal Registry", verificationRequired: true, cadence: "daily" },
                { id: "J-INV-05", technicalProtocol: "Piece-Level Inward", floorAction: "Verify 100% count and hallmark status for new stock.", priority: "High", riskLevel: "High", consequence: "Entering unvetted inventory.", proof: "Inward Log", verificationRequired: true, cadence: "daily" },
                { id: "J-INV-06", technicalProtocol: "Broken-Piece Registry", floorAction: "Log any tags detached or pieces found damaged.", priority: "Medium", riskLevel: "Low", consequence: "Undocumented asset decay.", proof: "Damage Note", cadence: "daily" },
                { id: "J-INV-07", technicalProtocol: "Valuation Parity Sync", floorAction: "Verify stock book values match current gold board rate.", priority: "Medium", riskLevel: "Low", consequence: "Inaccurate financial reporting.", proof: "System Sync", cadence: "weekly" },
                { id: "J-INV-08", technicalProtocol: "Inventory Aging", floorAction: "Identify items with > 180 days shelf-life.", priority: "Low", riskLevel: "Low", consequence: "High holding cost.", proof: "Aging Report", cadence: "monthly" },
                { id: "J-INV-09", technicalProtocol: "Access Code Rotation", floorAction: "Verify change of locker/vault passcodes.", priority: "High", riskLevel: "High", consequence: "Stale code security window.", proof: "Digital Registry", verificationRequired: true, cadence: "monthly" },
                { id: "J-INV-10", technicalProtocol: "Tag Print Quality", floorAction: "Replace all faded or unreadable QR tags.", priority: "Low", riskLevel: "Low", consequence: "Checkout bottleneck.", proof: "Visual Audit", cadence: "daily" },
                { id: "J-INV-11", technicalProtocol: "Physical Audit Prep", floorAction: "Clear all tray-mismatch notes pre-quarterly count.", priority: "Medium", riskLevel: "Low", consequence: "Audit gridlock.", proof: "Registry Note", cadence: "monthly" }
            ]
        },
        {
            title: "Opening/Closing Audit",
            department: "Audit",
            frequency: "Daily",
            role: "Opening/Closing Audit Supervisor",
            summary: "Final gate-keeping for daily operations.",
            icon: "clipboard-check",
            tasks: [
                { id: "J-AUD-01", technicalProtocol: "Pre-Open Perimeter", floorAction: "Confirm zero tampering on shutters and vents.", priority: "High", riskLevel: "High", consequence: "Opening into an active breach.", proof: "Walk Log", verificationRequired: true, cadence: "daily" },
                { id: "J-AUD-02", technicalProtocol: "Display Seal Verify", floorAction: "Initial all showcase seal-stickers post-morning fill.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized tray access.", proof: "Signed Seal", verificationRequired: true, cadence: "daily" },
                { id: "J-AUD-03", technicalProtocol: "Float Distribution", floorAction: "Witness hand-over of counter cash to cashiers.", priority: "Medium", riskLevel: "Medium", consequence: "Till shortages.", proof: "Dual-Sign Sheet", verificationRequired: true, cadence: "daily" },
                { id: "J-AUD-04", technicalProtocol: "Mid-Day Audit", floorAction: "Spot count 2 random high-value trays.", priority: "High", riskLevel: "Medium", consequence: "Undetected day-time theft.", proof: "Audit Sample", verificationRequired: true, cadence: "daily" },
                { id: "J-AUD-05", technicalProtocol: "Closing Reconcile", floorAction: "Witness final piece-count for 100% of showrooms.", priority: "High", riskLevel: "High", consequence: "Closure with missing piece.", proof: "Signed Registry", verificationRequired: true, cadence: "daily" },
                { id: "J-AUD-06", technicalProtocol: "EOD Cash-Drop", floorAction: "Witness dual-auth seal of nightly deposit.", priority: "High", riskLevel: "High", consequence: "Cash theft in transit.", proof: "Seal Number", verificationRequired: true, cadence: "daily" },
                { id: "J-AUD-07", technicalProtocol: "Shutter Lockdown", floorAction: "Physically verify lock and alarm of main entrance.", priority: "High", riskLevel: "High", consequence: "Burglary window.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "J-AUD-08", technicalProtocol: "Alarm Arming", floorAction: "Verify 'Armed' signal at central monitoring station.", priority: "High", riskLevel: "High", consequence: "Unmonitored facility.", proof: "Call Confirm", verificationRequired: true, cadence: "daily" },
                { id: "J-AUD-09", technicalProtocol: "Night Guard Briefing", floorAction: "Brief guards on high-value items in the safe.", priority: "Medium", riskLevel: "Low", consequence: "Low alertness.", proof: "Briefing Log", verificationRequired: true, cadence: "daily" },
                { id: "J-AUD-10", technicalProtocol: "Key-Vault Seal", floorAction: "Confirm 100% of staff keys are in the overnight box.", priority: "High", riskLevel: "High", consequence: "Single-person safe entry risk.", proof: "Seal Number", verificationRequired: true, cadence: "daily" },
                { id: "J-AUD-11", technicalProtocol: "Operational Mood", floorAction: "Assign 1-10 score to branch readiness.", priority: "Low", riskLevel: "Low", consequence: "Loss of soft governance intel.", proof: "Scorecard", cadence: "daily" }
            ]
        },
        {
            title: "Transaction Command",
            department: "Finance",
            frequency: "Daily",
            role: "High Value Transaction Approver",
            summary: "Decision governance for threshold sales and risk nodes.",
            icon: "check-circle",
            tasks: [
                { id: "J-HVT-01", technicalProtocol: "Discount Auth", floorAction: "Verify margin and approve discount > 10%.", priority: "High", riskLevel: "Medium", consequence: "Rogue discounting and margin loss.", proof: "Digital Auth", verificationRequired: true, cadence: "daily" },
                { id: "J-HVT-02", technicalProtocol: "Cash Limit Co-sign", floorAction: "Verify KYC for cash payments > ₹200,000.", priority: "High", riskLevel: "High", consequence: "Serious IT/Regulatory violation.", proof: "KYC File", verificationRequired: true, cadence: "daily" },
                { id: "J-HVT-03", technicalProtocol: "Buyback Valuation", floorAction: "Confirm purity-test results pre-payment approval.", priority: "High", riskLevel: "High", consequence: "Paying natural-gold rates for alloys.", proof: "Lab Report", verificationRequired: true, cadence: "daily" },
                { id: "J-HVT-04", technicalProtocol: "High-Value Refund", floorAction: "Execute 24h cooling-off check for refunds > ₹50,000.", priority: "High", riskLevel: "High", consequence: "Fraudulent fund exfiltration.", proof: "Registry Note", verificationRequired: true, cadence: "daily" },
                { id: "J-HVT-05", technicalProtocol: "KYC Waiver Audit", floorAction: "Initial any exception made for trusted repeat guests.", priority: "Medium", riskLevel: "High", consequence: "Audit non-conformance.", proof: "Waiver Note", verificationRequired: true, cadence: "daily" },
                { id: "J-HVT-06", technicalProtocol: "Bulk Booking Vetting", floorAction: "Verify corporate tax status for B2B orders.", priority: "Medium", riskLevel: "Low", consequence: "Unrecoverable credit debt.", proof: "Finance File", verificationRequired: true, cadence: "weekly" },
                { id: "J-HVT-07", technicalProtocol: "Foreign Settlement", floorAction: "Verify passport copy and exchange rate for USD/EUR deals.", priority: "High", riskLevel: "High", consequence: "FEMA regulatory breach.", proof: "System Sync", verificationRequired: true, cadence: "daily" },
                { id: "J-HVT-08", technicalProtocol: "Special Credit Release", floorAction: "Approve 100% of 'Delivery-Before-Payment' cases.", priority: "High", riskLevel: "High", consequence: "Direct capital loss.", proof: "Registry Note", verificationRequired: true, cadence: "daily" },
                { id: "J-HVT-09", technicalProtocol: "CCTV Match Witness", floorAction: "Remote witness of high-value cash count.", priority: "Medium", riskLevel: "High", consequence: "Staff collusion fraud.", proof: "CCTV Note", verificationRequired: true, cadence: "daily" },
                { id: "J-HVT-10", technicalProtocol: "Fraud Signal", floorAction: "Halt 100% of transactions with 'System Flag' status.", priority: "High", riskLevel: "High", consequence: "Processing fraudulent cards.", proof: "Incident Log", verificationRequired: true, cadence: "daily" },
                { id: "J-HVT-11", technicalProtocol: "Final Bill Stamp", floorAction: "Verify piece ID match before final bill print.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate statutory reporting.", proof: "Signed Invoice", verificationRequired: true, cadence: "daily" }
            ]
        }
    ]
};
