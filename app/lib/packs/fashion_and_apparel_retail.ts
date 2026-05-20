
import type { PremiumPack } from "@/lib/premium-packs";

export const fashion_and_apparel_retail: PremiumPack = {
    id: 'fashion_and_apparel_retail',
    title: "Fashion Operations System v18.0 (Sovereign Pro)",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/35c743f7-333a-4fe6-9866-3334172e144b',
    category: "Retail",
    description: "The definitive Sovereign v18.0 engine for apparel and fashion retail. Hardening 182 technical control points across Inventory Velocity, VM Discipline, and Return-Fraud Prevention.",
    heroHeadline: "Command Your Inventory. Protect Your Brand Standards.",
    heroSubheadline: "Track size-curve health, monitor trial-room conversion, and stop return-fraud—across 18 specialized fashion roles.",
    pricingUrgency: "A single season of dead-stock or one major return-fraud ring costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "shirt",
    badgeText: "V18.0 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Store Managers", "Visual Merchandisers", "Regional Retail Directors", "Loss Prevention Heads", "Inventory Planners"],
    sampleItems: [
        { text: "<strong>VM Governance Engine</strong>: Mannequin compliance, window rotation, and hero-product lighting audits.", icon: "eye" },
        { text: "<strong>Velocity & Size Curve</strong>: Dead-rack detection, size imbalance alerts, and replenishment sequencing.", icon: "trending-up" },
        { text: "<strong>Trial Room Command</strong>: Queue monitoring, hygiene cycles, and reject-pile conversion analysis.", icon: "door-closed" },
        { text: "<strong>Return-Fraud Shield</strong>: Swap abuse detection, damaged garment classification, and high-value co-sign logic.", icon: "shield-alert" },
        { text: "<strong>Seasonal Rollout</strong>: Launch preparedness, markdown tagging accuracy, and old-season clearing.", icon: "calendar-days" },
        { text: "<strong>Textile ESG</strong>: Unsold inventory disposition logs and sustainable packaging audits.", icon: "leaf" }
    ],
    checklists: [
        {
            title: "Store Executive Command",
            department: "Management",
            frequency: "Daily",
            role: "Store Manager",
            summary: "High-level strategic oversight of P&L, HR, and safety.",
            icon: "crown",
            tasks: [
                { id: "F-MGR-01", technicalProtocol: "Cash Drop Witness", floorAction: "Physically witness seal of bank transit bag; log seal ID.", priority: "High", riskLevel: "High", consequence: "Untraceable transit theft.", proof: "Seal Number Log", verificationRequired: true, cadence: "daily" },
                { id: "F-MGR-02", technicalProtocol: "Void-Bill Authorization", floorAction: "Audit 100% of bill deletions; verify manager ID match.", priority: "High", riskLevel: "High", consequence: "Theft masked as cashier errors.", proof: "Void Registry", verificationRequired: true, cadence: "daily" },
                { id: "F-MGR-03", technicalProtocol: "Statutory License Pulse", floorAction: "Verify validity of Trade, Fire, and Weights/Measures certs.", priority: "High", riskLevel: "High", consequence: "Showroom sealing during inspection.", proof: "License File", verificationRequired: true, cadence: "daily" },
                { id: "F-MGR-04", technicalProtocol: "High-Value Return Auth", floorAction: "Co-sign 100% of apparel returns > ₹10,000.", priority: "High", riskLevel: "High", consequence: "Systemic return fraud.", proof: "Signed Invoice", verificationRequired: true, cadence: "daily" },
                { id: "F-MGR-05", technicalProtocol: "Inventory Shrinkage Triage", floorAction: "Review 'Mismatched Piece' logs from yesterday's cycle count.", priority: "High", riskLevel: "High", consequence: "Unresolved stock loss.", proof: "Audit Report", verificationRequired: true, cadence: "daily" },
                { id: "F-MGR-06", technicalProtocol: "Conversion Gap Review", floorAction: "Analyze walk-in vs. bill count trends (Target > 25%).", priority: "Medium", riskLevel: "Low", consequence: "Undetected service failure.", proof: "Trend Dashboard", cadence: "daily" },
                { id: "F-MGR-07", technicalProtocol: "Staff Sobriety Pulse", floorAction: "Confirm zero alcohol odor for incoming shift leads.", priority: "High", riskLevel: "High", consequence: "Safety breach and brand damage.", proof: "Briefing Log", verificationRequired: true, cadence: "daily" },
                { id: "F-MGR-08", technicalProtocol: "Daily MOD Summary", floorAction: "Final operational and safety status sign-off.", priority: "High", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Summary", verificationRequired: true, cadence: "daily" },
                { id: "F-MGR-09", technicalProtocol: "Safety Exit Sweep", floorAction: "Physically walk the path; clear all trash/obstructions.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment during crisis.", proof: "Walk Log", verificationRequired: true, cadence: "daily" },
                { id: "F-MGR-10", technicalProtocol: "Incident Registry Triage", floorAction: "Review all high-risk alerts from the last 24h.", priority: "High", riskLevel: "High", consequence: "Escalated liability.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "VM & Presentation Command",
            department: "VM",
            frequency: "Daily",
            role: "Visual Merchandising Lead",
            summary: "Protects the brand aesthetic and window rotation intensity.",
            icon: "eye",
            tasks: [
                { id: "F-VML-01", technicalProtocol: "Window Rotation Sync", floorAction: "Verify mannequins match corporate campaign guide.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution.", proof: "Photo", cadence: "daily" },
                { id: "F-VML-02", technicalProtocol: "Hero Product Lighting", floorAction: "Aime spotlights at high-margin capsule displays.", priority: "Low", riskLevel: "Low", consequence: "Lower product conversion.", proof: "Visual Check", cadence: "daily" },
                { id: "F-VML-03", technicalProtocol: "Mannequin Grooming", floorAction: "Check for clean wigs, lint-free garments, and correct pricing tags.", priority: "Low", riskLevel: "Low", consequence: "Sloppy brand image.", proof: "Walkthrough", cadence: "daily" },
                { id: "F-VML-04", technicalProtocol: "Planogram Drift Monitor", floorAction: "Audit 20 hangers for correct size-staircase alignment.", priority: "Low", riskLevel: "Low", consequence: "Disorganized browsing experience.", proof: "Sample Check", cadence: "daily" },
                { id: "F-VML-05", technicalProtocol: "Digital Signage Pulse", floorAction: "Verify 100% of screens display today's 'Hero' offer.", priority: "Medium", riskLevel: "Low", consequence: "Marketing disconnect.", proof: "Visual Confirm", cadence: "daily" },
                { id: "F-VML-06", technicalProtocol: "Prop Integrity Check", floorAction: "Identify damaged display stands or chipped mannequins.", priority: "Low", riskLevel: "Low", consequence: "Poor luxury perception.", proof: "Damage Note", cadence: "weekly" },
                { id: "F-VML-07", technicalProtocol: "Category Zoning", floorAction: "Ensure high-density basics are not crowding premium hero zones.", priority: "Medium", riskLevel: "Low", consequence: "Aesthetic clutter.", proof: "Walk Log", cadence: "daily" },
                { id: "F-VML-08", technicalProtocol: "Sale Signage Accuracy", floorAction: "Match 'Discount %' on signs vs POS database.", priority: "High", riskLevel: "Medium", consequence: "Consumer court claims.", proof: "Price Match", verificationRequired: true, cadence: "daily" },
                { id: "F-VML-09", technicalProtocol: "Seasonal Hanger Swap", floorAction: "Confirm 100% use of approved 'Premium' hangers for new launch.", priority: "Low", riskLevel: "Low", consequence: "Inconsistent brand touchpoints.", proof: "Visual Audit", cadence: "weekly" },
                { id: "F-VML-10", technicalProtocol: "Mirror Clarity Sweep", floorAction: "Verify zero-streak polish on all public mirrors.", priority: "Low", riskLevel: "Low", consequence: "Guest dissatisfaction.", proof: "Visual Check", cadence: "daily" }
            ]
        },
        {
            title: "Inventory Velocity Control",
            department: "Stores",
            frequency: "Daily",
            role: "Category Allocation Lead",
            summary: "Governance for size-curves and dead-stock detection.",
            icon: "barcode",
            tasks: [
                { id: "F-CAL-01", technicalProtocol: "Size-Curve Audit", floorAction: "Identify racks missing Medium or Large stock (Core SKUs).", priority: "High", riskLevel: "Low", consequence: "Missed sales through size stockouts.", proof: "Variance Report", cadence: "daily" },
                { id: "F-CAL-02", technicalProtocol: "Dead-Rack Detection", floorAction: "Identify 5 SKUs with zero movement in > 7 days.", priority: "Medium", riskLevel: "Low", consequence: "Blocked prime shelf-space.", proof: "Aging Log", cadence: "weekly" },
                { id: "F-CAL-03", technicalProtocol: "Replenishment Sequence", floorAction: "Prioritize top 20 sellers for hourly back-stock pull.", priority: "High", riskLevel: "Low", consequence: "Inventory imbalance.", proof: "Transfer Note", cadence: "hourly" },
                { id: "F-CAL-04", technicalProtocol: "Inclusive Sizing Check", floorAction: "Verify availability of XL/XXL in core denim category.", priority: "Medium", riskLevel: "Low", consequence: "Loss of diverse customer base.", proof: "Stock Count", cadence: "weekly" },
                { id: "F-CAL-05", technicalProtocol: "Slow-Mover Escalation", floorAction: "Flag low-velocity SKUs for markdown or inter-branch transfer.", priority: "Medium", riskLevel: "Low", consequence: "Capital locked in dead inventory.", proof: "System Alert", cadence: "weekly" },
                { id: "F-CAL-06", technicalProtocol: "RTV (Return to Vendor)", floorAction: "Verify packing of 100% of confirmed defective units.", priority: "Medium", riskLevel: "Low", consequence: "Wasted storage space.", proof: "Dispatch Log", cadence: "weekly" },
                { id: "F-CAL-07", technicalProtocol: "Pre-markdown Tagging", floorAction: "Verify zero-error price stickering for upcoming 'Flash Sale'.", priority: "High", riskLevel: "Medium", consequence: "Billing disputes.", proof: "Tag Audit", verificationRequired: true, cadence: "daily" },
                { id: "F-CAL-08", technicalProtocol: "Tag Seriality Check", floorAction: "Scan 10 random tags; verify system description match.", priority: "High", riskLevel: "Medium", consequence: "Mismatched stock data.", proof: "System Match", cadence: "daily" },
                { id: "F-CAL-09", technicalProtocol: "New Shipment Intake", floorAction: "Cross-check piece count vs. packing list < 4 hours.", priority: "High", riskLevel: "High", consequence: "Undetected supply chain shortage.", proof: "GRN Entry", verificationRequired: true, cadence: "daily" },
                { id: "F-CAL-10", technicalProtocol: "Stock Room Layout", floorAction: "Ensure Bestsellers are placed nearest to the floor entrance.", priority: "Low", riskLevel: "Low", consequence: "Slow floor replenishment.", proof: "Visual Check", cadence: "weekly" }
            ]
        },
        {
            title: "Trial Room Command",
            department: "Sales",
            frequency: "Hourly",
            role: "Trial Room Supervisor",
            summary: "Conversion governance and loss prevention pulse.",
            icon: "door-closed",
            tasks: [
                { id: "F-TRS-01", technicalProtocol: "Concealment Sweep", floorAction: "Check vents, mirrors, and stools for discarded tags.", priority: "High", riskLevel: "High", consequence: "High-frequency boutique theft.", proof: "Sweep Log", verificationRequired: true, cadence: "hourly" },
                { id: "F-TRS-02", technicalProtocol: "Reject Pile Analysis", floorAction: "Log top 3 reasons for garment rejection (Fit/Color/Quality).", priority: "Medium", riskLevel: "Low", consequence: "Zero operational feedback on stock.", proof: "Feedback Note", cadence: "daily" },
                { id: "F-TRS-03", technicalProtocol: "Hygiene Cycle", floorAction: "Wipe benches and remove discarded tissues every 60 mins.", priority: "Medium", riskLevel: "Low", consequence: "Poor brand perception.", proof: "Hourly Sheet", cadence: "hourly" },
                { id: "F-TRS-04", technicalProtocol: "Abandoned Recovery", floorAction: "Return rejected garments to floor < 15 mins.", priority: "Medium", riskLevel: "Low", consequence: "Stock hidden in back-rooms.", proof: "Recovery Log", cadence: "hourly" },
                { id: "F-TRS-05", technicalProtocol: "Queue Wait TAT", floorAction: "Log peak wait time; target < 10 mins.", priority: "Low", riskLevel: "Low", consequence: "Trial abandonment / lost sales.", proof: "TAT Note", cadence: "daily" },
                { id: "F-TRS-06", technicalProtocol: "Token Match Pulse", floorAction: "Verify entry piece count matches exit piece count.", priority: "High", riskLevel: "High", consequence: "Direct theft window.", proof: "Token Registry", verificationRequired: true, cadence: "hourly" },
                { id: "F-TRS-07", technicalProtocol: "Steam Ironing Assist", floorAction: "Flag crumpled garments for immediate steaming pre-return.", priority: "Low", riskLevel: "Low", consequence: "Poor presentation.", proof: "Visual Check", cadence: "daily" },
                { id: "F-TRS-08", technicalProtocol: "Hanger Re-orientation", floorAction: "Ensure 100% of returned items are on correct branded hangers.", priority: "Low", riskLevel: "Low", consequence: "Floor disorganization.", proof: "Visual Audit", cadence: "hourly" },
                { id: "F-TRS-09", technicalProtocol: "Makeup Protection", floorAction: "Offer face-shields to 100% of guests trying white tops.", priority: "Medium", riskLevel: "Low", consequence: "Damaged/unsaleable stock.", proof: "Supervisor Obs", cadence: "hourly" },
                { id: "F-TRS-10", technicalProtocol: "EOD Fitting Room Reset", floorAction: "Confirm 100% of stalls are empty and locked.", priority: "High", riskLevel: "Medium", consequence: "After-hours hiding window.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Returns & Fraud Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Returns & Exchange Officer",
            summary: "Protects against swap-abuse and damaged inventory.",
            icon: "shield-alert",
            tasks: [
                { id: "F-REO-01", technicalProtocol: "Swap-Abuse Audit", floorAction: "Check 100% of returns for original brand stitching/tags.", priority: "High", riskLevel: "High", consequence: "Accepting counterfeit swaps.", proof: "Visual Match", verificationRequired: true, cadence: "daily" },
                { id: "F-REO-02", technicalProtocol: "Damaged Classification", floorAction: "Log defects: Stitch fail, Fabric tear, or Guest damage.", priority: "Medium", riskLevel: "Medium", consequence: "Incorrect vendor credit claims.", proof: "Damage Register", cadence: "daily" },
                { id: "F-REO-03", technicalProtocol: "Receipt Validation", floorAction: "Match original bill serial to POS database for 100% returns.", priority: "High", riskLevel: "High", consequence: "Processing fraudulent receipts.", proof: "System Sync", verificationRequired: true, cadence: "daily" },
                { id: "F-REO-04", technicalProtocol: "Credit Note Seriality", floorAction: "Confirm zero gaps in credit note sequence.", priority: "High", riskLevel: "High", consequence: "Tax/Financial fraud.", proof: "Journal Audit", verificationRequired: true, cadence: "daily" },
                { id: "F-REO-05", technicalProtocol: "Exchange Variance", floorAction: "Cross-check bill value match for even-exchanges.", priority: "Medium", riskLevel: "Low", consequence: "Revenue leakage.", proof: "Registry Note", cadence: "daily" },
                { id: "F-REO-06", technicalProtocol: "Used-Item Detection", floorAction: "Check collars and cuffs for signs of wear (wardrobing).", priority: "High", riskLevel: "Low", consequence: "Accepting non-sellable returns.", proof: "Supervisor Obs", cadence: "daily" },
                { id: "F-REO-07", technicalProtocol: "Markdown Return Halt", floorAction: "Identify and reject returns for 'Final Sale' categories.", priority: "High", riskLevel: "Medium", consequence: "Policy non-compliance.", proof: "Policy Check", cadence: "daily" },
                { id: "F-REO-08", technicalProtocol: "Customer Ban-List", floorAction: "Flag 100% of guests with > 20% return rate.", priority: "Medium", riskLevel: "Low", consequence: "High cost-to-serve.", proof: "System Alert", cadence: "weekly" },
                { id: "F-REO-09", technicalProtocol: "Tag Re-attachment", floorAction: "Verify 100% professional re-barbing for ready-to-sell stock.", priority: "Low", riskLevel: "Low", consequence: "Tacky presentation.", proof: "Visual Check", cadence: "daily" },
                { id: "F-REO-10", technicalProtocol: "EOD Return Summary", floorAction: "Final piece count vs credit notes issued.", priority: "High", riskLevel: "Low", consequence: "Loss of control.", proof: "Signed Registry", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Stock Room Integrity",
            department: "Stores",
            frequency: "Daily",
            role: "Stock Room Controller",
            summary: "Governance for the physical back-stock and dispatch.",
            icon: "package",
            tasks: [
                { id: "F-SRC-01", technicalProtocol: "Blind Cycle Count", floorAction: "Count top 5 categories; match against POS ledger.", priority: "High", riskLevel: "High", consequence: "Unidentified inventory theft.", proof: "Count Sheet", verificationRequired: true, cadence: "weekly" },
                { id: "F-SRC-02", technicalProtocol: "Access Control Log", floorAction: "Audit 100% of staff entries into the stock room.", priority: "High", riskLevel: "High", consequence: "Unauthorized internal pilferage.", proof: "Digital Registry", verificationRequired: true, cadence: "daily" },
                { id: "F-SRC-03", technicalProtocol: "Back-Stock Aging", floorAction: "Identify 5 pallets with zero movement in > 14 days.", priority: "Medium", riskLevel: "Low", consequence: "Stock hidden from sales floor.", proof: "Aging Report", cadence: "weekly" },
                { id: "F-SRC-04", technicalProtocol: "IBT Seal Verification", floorAction: "Witness opening of inter-branch transfer crates.", priority: "High", riskLevel: "High", consequence: "Transit theft gone undetected.", proof: "Seal Registry", verificationRequired: true, cadence: "daily" },
                { id: "F-SRC-05", technicalProtocol: "Damaged-Box Registry", floorAction: "Log all arrivals with crushed or open cartons.", priority: "Medium", riskLevel: "Low", consequence: "Inability to claim vendor credit.", proof: "Photo Log", cadence: "daily" },
                { id: "F-SRC-06", technicalProtocol: "Hanger Type Parity", floorAction: "Stock 500+ approved category-specific hangers.", priority: "Low", riskLevel: "Low", consequence: "Service bottleneck.", proof: "Visual Count", cadence: "weekly" },
                { id: "F-SRC-07", technicalProtocol: "Trash Compaction Wave", floorAction: "Execute 2-hourly removal of cardboard debris.", priority: "Low", riskLevel: "Medium", consequence: "Fire hazard in stores.", proof: "Walkthrough", cadence: "hourly" },
                { id: "F-SRC-08", technicalProtocol: "Label Print Quality", floorAction: "Replace all faded or unreadable internal barcodes.", priority: "Low", riskLevel: "Low", consequence: "Checkout delays.", proof: "Visual Audit", cadence: "daily" },
                { id: "F-SRC-09", technicalProtocol: "Stock Room Fire Path", floorAction: "Ensure 100% of racking is clear of exit doors.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "F-SRC-10", technicalProtocol: "EOD Safe Lockdown", floorAction: "Witness dual-lock of internal vault (High-value items).", priority: "High", riskLevel: "High", consequence: "Theft window.", proof: "Visual Confirm", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Floor Readiness",
            department: "Operations",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Atomic zone-level execution and service pulse.",
            icon: "clipboard-check",
            tasks: [
                { id: "F-FSV-01", technicalProtocol: "Zone Readiness Seal", floorAction: "Physically sign-off on 100% of station readiness.", priority: "High", riskLevel: "Low", consequence: "Delayed opening.", proof: "Signed Sheet", verificationRequired: true, cadence: "daily" },
                { id: "F-FSV-02", technicalProtocol: "Ambiance Sensory Audit", floorAction: "Log store temp (23°C) and playlist volume (65dB).", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort.", proof: "Daily Log", cadence: "daily" },
                { id: "F-FSV-03", technicalProtocol: "Staff Positioning Grid", floorAction: "Verify 100% of sections have an active floor-associate.", priority: "Medium", riskLevel: "Low", consequence: "Unattended sales zones.", proof: "Roster Match", cadence: "hourly" },
                { id: "F-FSV-04", technicalProtocol: "Greeting Standard Pulse", floorAction: "Observe 10 guest interactions for brand greeting.", priority: "Low", riskLevel: "Low", consequence: "Cold service culture.", proof: "Audit Score", cadence: "daily" },
                { id: "F-FSV-05", technicalProtocol: "Spill Response TAT", floorAction: "Execute 2-min cleanup for all detected FOH spills.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Incident Log", cadence: "incident-based" },
                { id: "F-FSV-06", technicalProtocol: "Floor Lighting Scan", floorAction: "Identify and report 100% of non-functional bulbs.", priority: "Low", riskLevel: "Low", consequence: "Shadowy/Poor VM impact.", proof: "Walkthrough", cadence: "daily" },
                { id: "F-FSV-07", technicalProtocol: "Restroom Hygiene Pulse", floorAction: "Audit 30-min cleaning frequency in public zones.", priority: "High", riskLevel: "Low", consequence: "Primary brand rage driver.", proof: "Hourly Sheet", verificationRequired: true, cadence: "hourly" },
                { id: "F-FSV-08", technicalProtocol: "Manpower Top-up Signal", floorAction: "Request extra cashiers if queue > 5 pax per biller.", priority: "Medium", riskLevel: "Low", consequence: "Basket abandonment.", proof: "Queue Note", cadence: "hourly" },
                { id: "F-FSV-09", technicalProtocol: "Counter Display Clean", floorAction: "Wipe billing counters of 100% residue/stains.", priority: "Low", riskLevel: "Low", consequence: "Dirty checkout feel.", proof: "Visual Check", cadence: "daily" },
                { id: "F-FSV-10", technicalProtocol: "Handover Briefing", floorAction: "Initial data transfer in shift handover registry.", priority: "High", riskLevel: "Medium", consequence: "Lost instructions.", proof: "Handover Log", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Revenue & Billing Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Cashier Supervisor",
            summary: "Protects the revenue point and digital security.",
            icon: "banknote",
            tasks: [
                { id: "F-CS-01", technicalProtocol: "Bill Seriality Audit", floorAction: "Verify zero gaps in POS bill numbers.", priority: "High", riskLevel: "High", consequence: "Revenue manipulation / tax fraud.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "F-CS-02", technicalProtocol: "Till Variance Reconcile", floorAction: "Investigate any cash variance > ₹100.", priority: "High", riskLevel: "Medium", consequence: "Systemic till theft.", proof: "Variance Report", verificationRequired: true, cadence: "daily" },
                { id: "F-CS-03", technicalProtocol: "Credit Card Overlay", floorAction: "Physically check pin-pads for skimmers/tampering.", priority: "High", riskLevel: "High", consequence: "Guest data theft liability.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "F-CS-04", technicalProtocol: "Offline Bill Sync", floorAction: "Confirm zero pending bills waiting for cloud upload.", priority: "High", riskLevel: "Medium", consequence: "Data loss during system reset.", proof: "System Screen", cadence: "daily" },
                { id: "F-CS-05", technicalProtocol: "Fraudulent Coupon Scan", floorAction: "Identify logins using > 10% discount in 1 shift.", priority: "High", riskLevel: "High", consequence: "Discount abuse theft.", proof: "Audit Log", verificationRequired: true, cadence: "weekly" },
                { id: "F-CS-06", technicalProtocol: "Chargeback Recovery", floorAction: "Respond to bank credit disputes < 24h.", priority: "Medium", riskLevel: "Low", consequence: "Financial bad debt.", proof: "System Log", cadence: "daily" },
                { id: "F-CS-07", technicalProtocol: "POS Touch Hygiene", floorAction: "Sanitize screen and pin-pad between shift rotations.", priority: "Low", riskLevel: "Medium", consequence: "Staff disease spread.", proof: "Cleaning Note", cadence: "daily" },
                { id: "F-CS-08", technicalProtocol: "Bill sequence Re-match", floorAction: "Audit 10 random bills against CCTV timestamps.", priority: "High", riskLevel: "High", consequence: "Unrecorded sales.", proof: "Audit Report", verificationRequired: true, cadence: "daily" },
                { id: "F-CS-09", technicalProtocol: "Tax Compliance Scan", floorAction: "Verify GST percentage per item category.", priority: "High", riskLevel: "Medium", consequence: "Statutory penalties.", proof: "Sample Check", cadence: "daily" },
                { id: "F-CS-10", technicalProtocol: "EOD Cash-Drop Seal", floorAction: "Physically witness seal of bank transit bag.", priority: "High", riskLevel: "High", consequence: "Untraceable transit theft.", proof: "Seal Number", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Seasonal Rollout Governance",
            department: "Operations",
            frequency: "Monthly",
            role: "Seasonal Rollout Coordinator",
            summary: "Milestone tracking for collection launches.",
            icon: "calendar-days",
            tasks: [
                { id: "F-SRC-01", technicalProtocol: "Launch Readiness Milestone", floorAction: "Verify 100% inventory arrival 48h pre-launch.", priority: "High", riskLevel: "Low", consequence: "Failed marketing promise.", proof: "System Sync", verificationRequired: true, cadence: "monthly" },
                { id: "F-SRC-02", technicalProtocol: "Markdown Tag Integrity", floorAction: "Sample 50 sale tags for original vs sale price parity.", priority: "High", riskLevel: "Medium", consequence: "Consumer court claims.", proof: "Audit Note", verificationRequired: true, cadence: "daily" },
                { id: "F-SRC-03", technicalProtocol: "Old Season Clearance", floorAction: "Confirm 100% pull of past-season stock from prime racks.", priority: "Medium", riskLevel: "Low", consequence: "Visual clutter and brand decay.", proof: "Visual Audit", cadence: "weekly" },
                { id: "F-SRC-04", technicalProtocol: "Promo Signage Switch", floorAction: "Remove all expired signage < 8 AM on expiry day.", priority: "High", riskLevel: "Low", consequence: "False trade practices penalty.", proof: "Visual Check", cadence: "daily" },
                { id: "F-SRC-05", technicalProtocol: "Regional Campaign Sync", floorAction: "Verify local store marketing matches national ads.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent brand message.", proof: "Photo", cadence: "weekly" },
                { id: "F-SRC-06", technicalProtocol: "Staff Training - New Collection", floorAction: "Verify 100% completion of 'Fabrics & Features' brief.", priority: "Low", riskLevel: "Low", consequence: "Ineffective floor sales.", proof: "Briefing Log", cadence: "monthly" },
                { id: "F-SRC-07", technicalProtocol: "Capsule Placement Audit", floorAction: "Verify hero collections occupy 'Zone 1' sightlines.", priority: "Medium", riskLevel: "Low", consequence: "Lower launch revenue.", proof: "VM Scan", cadence: "daily" },
                { id: "F-SRC-08", technicalProtocol: "Launch Mood Scoring", floorAction: "Assign 1-10 rating to branch rollout quality.", priority: "Low", riskLevel: "Low", consequence: "Loss of soft governance intel.", proof: "Scorecard", cadence: "monthly" }
            ]
        },
        {
            title: "Sustainable Fashion & ESG",
            department: "Compliance",
            frequency: "Daily",
            role: "ESG & Sustainable Fashion Officer",
            summary: "Ethical discipline and resource tracking.",
            icon: "leaf",
            tasks: [
                { id: "F-ESG-01", technicalProtocol: "Textile Waste Log", floorAction: "Log KG of discarded fabric/garment waste.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored environmental footprint.", proof: "Weight Slip", cadence: "daily" },
                { id: "F-ESG-02", technicalProtocol: "Dead-Stock Disposition", floorAction: "Verify ethical clearing of non-sellable inventory.", priority: "Medium", riskLevel: "Medium", consequence: "Unethical incineration / legal risk.", proof: "Registry Note", verificationRequired: true, cadence: "monthly" },
                { id: "F-ESG-03", technicalProtocol: "Packaging Audit", floorAction: "Confirm 100% use of recycled carrier bags.", priority: "Low", riskLevel: "Low", consequence: "Plastic non-compliance fines.", proof: "Visual Check", cadence: "daily" },
                { id: "F-ESG-04", technicalProtocol: "Inclusive Sizing Pulse", floorAction: "Verify stock of size 16+ in 5 key categories.", priority: "Medium", riskLevel: "Low", consequence: "Non-inclusive brand perception.", proof: "Sample Check", cadence: "weekly" },
                { id: "F-ESG-05", technicalProtocol: "Energy Intensity Pulse", floorAction: "Compare daily KWH meter vs occupancy load.", priority: "High", riskLevel: "Low", consequence: "Unmonitored energy waste.", proof: "Meter Match", cadence: "daily" },
                { id: "F-ESG-06", technicalProtocol: "Vendor Sourcing Vetting", floorAction: "Audit 5 random tags for 'Sustainable Material' proof.", priority: "Low", riskLevel: "Medium", consequence: "Greenwashing liability.", proof: "Cert Audit", cadence: "monthly" },
                { id: "F-ESG-07", technicalProtocol: "Hanger Recycling Log", floorAction: "Verify 100% return of broken plastic to recycling unit.", priority: "Low", riskLevel: "Low", consequence: "Inefficient waste.", proof: "Log Entry", cadence: "weekly" },
                { id: "F-ESG-08", technicalProtocol: "EOD Safety Walk", floorAction: "Witness shutdown of all non-essential lighting.", priority: "High", riskLevel: "Low", consequence: "Massive energy overhead.", proof: "Closure Log", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Loss Prevention (Floor)",
            department: "Security",
            frequency: "Hourly",
            role: "Loss Prevention Officer",
            summary: "Perimeter hardening and theft deterrence.",
            icon: "shield-check",
            tasks: [
                { id: "F-LPO-01", technicalProtocol: "EAS Gate Pulse", floorAction: "Test entry sensors with active security tag.", priority: "High", riskLevel: "High", consequence: "Undetected tag-theft at exit.", proof: "Test Log", cadence: "daily" },
                { id: "F-LPO-02", technicalProtocol: "Tag Tamper Sweep", floorAction: "Walk high-value denim; check for loose magnetic tags.", priority: "High", riskLevel: "High", consequence: "Professional shoplifting window.", proof: "Patrol Log", cadence: "hourly" },
                { id: "F-LPO-03", technicalProtocol: "Suspicious Object Search", floorAction: "Inspect foyer planters and benches every 2 hours.", priority: "High", riskLevel: "High", consequence: "Safety/Security threat.", proof: "Walkthrough", cadence: "hourly" },
                { id: "F-LPO-04", technicalProtocol: "Staff Exit Bag-Search", floorAction: "Perform random search of 3 staff bags at EOD.", priority: "Medium", riskLevel: "Medium", consequence: "Systemic internal shrinkage.", proof: "Registry Note", cadence: "daily" },
                { id: "F-LPO-05", technicalProtocol: "Panic Button Test", floorAction: "Execute silent alarm trigger; verify 30s response.", priority: "High", riskLevel: "High", consequence: "Zero response during armed robbery.", proof: "Signal Test", verificationRequired: true, cadence: "daily" },
                { id: "F-LPO-06", technicalProtocol: "CCTV Frame Reconcile", floorAction: "Verify bill-point camera is unobstructed.", priority: "High", riskLevel: "High", consequence: "Loss of theft evidence.", proof: "System Screen", verificationRequired: true, cadence: "daily" },
                { id: "F-LPO-07", technicalProtocol: "Guard Sobriety", floorAction: "Random breathalyzer for 2 AM rotation.", priority: "High", riskLevel: "High", consequence: "Vulnerable night perimeter.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "F-LPO-08", technicalProtocol: "Counter-Clearance Scan", floorAction: "Ensure 100% of non-sold stock is pulled from billing area.", priority: "Low", riskLevel: "Low", consequence: "Theft via confusion.", proof: "Visual Check", cadence: "hourly" },
                { id: "F-LPO-09", technicalProtocol: "Fire-Exit Perimeter", floorAction: "Clear ambulance lane of 100% idle vehicles.", priority: "High", riskLevel: "High", consequence: "Blocked emergency access.", proof: "Visual Audit", verificationRequired: true, cadence: "hourly" },
                { id: "F-LPO-10", technicalProtocol: "Handover ID Match", floorAction: "Confirm 100% guard names match approved agency roster.", priority: "Medium", riskLevel: "Low", consequence: "Unvetted security on-site.", proof: "ID Audit", cadence: "daily" }
            ]
        },
        {
            title: "Category Allocation",
            department: "Stores",
            frequency: "Daily",
            role: "Inventory Replenishment Coordinator",
            summary: "Governance for floor depth and shelf parity.",
            icon: "layout-grid",
            tasks: [
                { id: "F-IRC-01", technicalProtocol: "Shelf-Edge Price Audit", floorAction: "Scan 20 random items; verify 100% POS match.", priority: "High", riskLevel: "Medium", consequence: "Consumer Metrology violations.", proof: "Price Match", verificationRequired: true, cadence: "daily" },
                { id: "F-IRC-02", technicalProtocol: "Back-stock Depth Sweep", floorAction: "Identify 10 high-margin items missing from shelf view.", priority: "High", riskLevel: "Low", consequence: "Zero floor-stock; lost sales.", proof: "Replenish Log", cadence: "daily" },
                { id: "F-IRC-03", technicalProtocol: "Damaged Stock Segregation", floorAction: "Remove stained or torn pieces from hangers < 1h.", priority: "Medium", riskLevel: "Low", consequence: "Slipping brand standards.", proof: "Visual Audit", cadence: "daily" },
                { id: "F-IRC-04", technicalProtocol: "Auto-Replenish Verify", floorAction: "Confirm system 'Pull-Order' matches physical empty shelf.", priority: "Medium", riskLevel: "Low", consequence: "Stockout during peaks.", proof: "System Sync", cadence: "daily" },
                { id: "F-IRC-05", technicalProtocol: "Hanger Orientation", floorAction: "Check 100% of hangers face same direction (C-hook).", priority: "Low", riskLevel: "Low", consequence: "Visual chaos.", proof: "Walkthrough", cadence: "daily" },
                { id: "F-IRC-06", technicalProtocol: "Gift-Box Inventory", floorAction: "Confirm 50+ medium boxes available for premium line.", priority: "Low", riskLevel: "Low", consequence: "Service friction.", proof: "Stock Count", cadence: "weekly" },
                { id: "F-IRC-07", technicalProtocol: "Rider Pickup Lane", floorAction: "Verify clear access for e-com dispatch couriers.", priority: "Medium", riskLevel: "Low", consequence: "E-com delivery lag.", proof: "Visual Check", cadence: "daily" },
                { id: "F-IRC-08", technicalProtocol: "Inventory Access", floorAction: "Witness lock of high-value accessory safe.", priority: "High", riskLevel: "High", consequence: "Internal theft window.", proof: "Visual Confirm", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Customer Experience",
            department: "Service",
            frequency: "Daily",
            role: "Customer Experience Lead",
            summary: "Conversion tracking and sentiment governance.",
            icon: "smile",
            tasks: [
                { id: "F-CX-01", technicalProtocol: "Detractor Recovery Loop", floorAction: "Call 3 guests who left negative kiosk feedback.", priority: "Medium", riskLevel: "Low", consequence: "Viral rating drop.", proof: "Call Log", cadence: "daily" },
                { id: "F-CX-02", technicalProtocol: "Conversion Funnel Pulse", floorAction: "Match footfall sensor vs bill count every 4 hours.", priority: "High", riskLevel: "Low", consequence: "Undetected conversion drop.", proof: "System Log", cadence: "daily" },
                { id: "F-CX-03", technicalProtocol: "Feedback Kiosk Charge", floorAction: "Ensure tablets are charged and app is active.", priority: "Low", riskLevel: "Low", consequence: "Loss of survey data.", proof: "Device Check", cadence: "daily" },
                { id: "F-CX-04", technicalProtocol: "Mystery Shopper Action", floorAction: "Disseminate scorecards to relevant floor section leads.", priority: "Medium", riskLevel: "Low", consequence: "Repeated service fails.", proof: "Briefing Note", cadence: "weekly" },
                { id: "F-CX-05", technicalProtocol: "VIP Loyalty Flag", floorAction: "Notify Store Manager of 'Top 10' customer arrival.", priority: "Low", riskLevel: "Low", consequence: "Generic treatment of high-LTV guest.", proof: "System Alert", cadence: "daily" },
                { id: "F-CX-06", technicalProtocol: "Personal Shopper Ready", floorAction: "Verify setup of premium lounge and water stock.", priority: "Low", riskLevel: "Low", consequence: "Luxury brand failure.", proof: "Visual Check", cadence: "daily" },
                { id: "F-CX-07", technicalProtocol: "Escalated Dispute Loop", floorAction: "Resolve all refund claims < 1 hour.", priority: "High", riskLevel: "Medium", consequence: "Viral complaints.", proof: "Incident Log", verificationRequired: true, cadence: "daily" },
                { id: "F-CX-08", technicalProtocol: "ORM Dashboard Review", floorAction: "Audit response quality to Google mentions.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent brand voice.", proof: "Review Audit", cadence: "daily" }
            ]
        },
        {
            title: "Housekeeping & Presentation",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Housekeeping & Presentation Lead",
            summary: "Ambiance parity and sanitization command.",
            icon: "sparkles",
            tasks: [
                { id: "F-HK-01", technicalProtocol: "Steam Ironing Pulse", floorAction: "Verify 100% display garments are crease-free.", priority: "Low", riskLevel: "Low", consequence: "Cheap brand perception.", proof: "Visual Audit", cadence: "daily" },
                { id: "F-HK-02", technicalProtocol: "Floor Spot Removal", floorAction: "Execute 2-min scrub of detected FOH spills.", priority: "High", riskLevel: "High", consequence: "Slip hazard / grimy feel.", proof: "Patrol Log", cadence: "hourly" },
                { id: "F-HK-03", technicalProtocol: "Hanger Re-alignment", floorAction: "Verify 2-finger spacing between all prime-wall items.", priority: "Low", riskLevel: "Low", consequence: "Cramped visual feel.", proof: "Visual Check", cadence: "hourly" },
                { id: "F-HK-04", technicalProtocol: "Air Quality / Scent", floorAction: "Refill 100% of brand-spec fragrance diffusers.", priority: "Low", riskLevel: "Low", consequence: "Lack of sensory branding.", proof: "Visual Check", cadence: "daily" },
                { id: "F-HK-05", technicalProtocol: "Dust Clearance Scan", floorAction: "Wipe high-gloss acrylic shelves in accessory zone.", priority: "Low", riskLevel: "Low", consequence: "Dust buildup.", proof: "Visual Check", cadence: "daily" },
                { id: "F-HK-06", technicalProtocol: "Trash Compaction", floorAction: "Remove lobby bins every 2 hours during peak surge.", priority: "Low", riskLevel: "Low", consequence: "Overflowing bins.", proof: "Log Entry", cadence: "hourly" },
                { id: "F-HK-07", technicalProtocol: "FOH Mirror Shine", floorAction: "Polish 100% of large column mirrors.", priority: "Low", riskLevel: "Low", consequence: "Dirty trial experience.", proof: "Visual Check", cadence: "daily" },
                { id: "F-HK-08", technicalProtocol: "Carpet Extraction", floorAction: "Verify weekly steam-clean of premium dressing areas.", priority: "Low", riskLevel: "Low", consequence: "Odor buildup.", proof: "Work Log", cadence: "weekly" }
            ]
        },
        {
            title: "Brand Compliance",
            department: "Compliance",
            frequency: "Daily",
            role: "Brand Compliance Officer",
            summary: "Protects the global procedural brand promise.",
            icon: "award",
            tasks: [
                { id: "F-BCO-01", technicalProtocol: "Logo Integrity Scan", floorAction: "Verify correct font/color on 100% of shelf pricing.", priority: "Low", riskLevel: "Low", consequence: "Inconsistent brand voice.", proof: "Sample Check", cadence: "daily" },
                { id: "F-BCO-02", technicalProtocol: "Standard Greeting Audit", floorAction: "Confirm 100% use of scripted brand welcome.", priority: "Low", riskLevel: "Low", consequence: "Cold service culture.", proof: "Audit Score", cadence: "daily" },
                { id: "F-BCO-03", technicalProtocol: "Playlist Sync", floorAction: "Verify music volume matches corporate target (65dB).", priority: "Low", riskLevel: "Low", consequence: "Acoustic discomfort.", proof: "Daily Log", cadence: "daily" },
                { id: "F-BCO-04", technicalProtocol: "Uniform Compliance", floorAction: "Audit 5 associates for ironed shirts and clean name-tags.", priority: "Low", riskLevel: "Low", consequence: "Professional image drop.", proof: "Briefing Log", cadence: "daily" },
                { id: "F-BCO-05", technicalProtocol: "Regional Promo Audit", floorAction: "Verify 100% execution of the 'End-of-Season' launch.", priority: "High", riskLevel: "Low", consequence: "Marketing waste.", proof: "Signed List", verificationRequired: true, cadence: "weekly" },
                { id: "F-BCO-06", technicalProtocol: "Packaging Parity", floorAction: "Confirm zero use of non-branded wrapping paper.", priority: "Low", riskLevel: "Low", consequence: "Luxury brand failure.", proof: "Visual Check", cadence: "daily" },
                { id: "F-BCO-07", technicalProtocol: "Social Media Tag", floorAction: "Review store-tagged photos for VM fails or dirty stalls.", priority: "Medium", riskLevel: "Low", consequence: "Viral reputation damage.", proof: "ORM Pulse", cadence: "weekly" },
                { id: "F-BCO-08", technicalProtocol: "Policy Awareness Quiz", floorAction: "Test 2 staff for knowledge of 'Incident Protocol'.", priority: "Medium", riskLevel: "Low", consequence: "Gaps in institutional memory.", proof: "Quiz Log", cadence: "weekly" }
            ]
        },
        {
            title: "Men's Section Lead",
            department: "Sales",
            frequency: "Daily",
            role: "Men's Section Lead",
            summary: "Category specialized readiness and fit expertise.",
            icon: "shirt",
            tasks: [
                { id: "F-MSL-01", technicalProtocol: "Suit Tailoring TAT", floorAction: "Verify return of altered garments < 48 hours.", priority: "Medium", riskLevel: "Low", consequence: "Delayed delivery promise.", proof: "System Sync", cadence: "daily" },
                { id: "F-MSL-02", technicalProtocol: "Shirt Folding Parity", floorAction: "Re-fold 5 stacks using the 25cm board spec.", priority: "Low", riskLevel: "Low", consequence: "Messy visual standard.", proof: "Visual Check", cadence: "daily" },
                { id: "F-MSL-03", technicalProtocol: "Grooming Kit Inventory", floorAction: "Confirm par levels for 5 primary men's accessories.", priority: "Low", riskLevel: "Low", consequence: "Missed attachment sales.", proof: "Stock Sheet", cadence: "weekly" },
                { id: "F-MSL-04", technicalProtocol: "Formal Shoe Buffing", floorAction: "Wipe dust from 100% of display footwear.", priority: "Low", riskLevel: "Low", consequence: "Sub-par premium feel.", proof: "Walkthrough", cadence: "daily" },
                { id: "F-MSL-05", technicalProtocol: "Size Depth Denim", floorAction: "Verify 32/34/36 waist availability on prime shelf.", priority: "High", riskLevel: "Low", consequence: "Lost sales on top SKUs.", proof: "Shelf Count", cadence: "daily" },
                { id: "F-MSL-06", technicalProtocol: "Cuff-link Pairing", floorAction: "Audit accessory cases for correct pair-matching.", priority: "Low", riskLevel: "Low", consequence: "Incomplete products.", proof: "Visual Scan", cadence: "weekly" },
                { id: "F-MSL-07", technicalProtocol: "Fragrance Sampling", floorAction: "Confirm availability of testers for 5 'Hero' scents.", priority: "Low", riskLevel: "Low", consequence: "Reduced impulse buy.", proof: "Stock Check", cadence: "daily" },
                { id: "F-MSL-08", technicalProtocol: "Closing Fold", floorAction: "Verify 100% of table-top stock is squared.", priority: "Low", riskLevel: "Low", consequence: "Disorganized opening.", proof: "Signed Log", cadence: "daily" }
            ]
        },
        {
            title: "Women's Section Lead",
            department: "Sales",
            frequency: "Daily",
            role: "Women's Section Lead",
            summary: "Category specialized readiness and capsule coordination.",
            icon: "venetian-mask",
            tasks: [
                { id: "F-WSL-01", technicalProtocol: "Capsule Coordination", floorAction: "Verify outfit-matching logic on the 'Power-Wall'.", priority: "Low", riskLevel: "Low", consequence: "Lower bill attachment rate.", proof: "Photo", cadence: "daily" },
                { id: "F-WSL-02", technicalProtocol: "Silk-Fabric Handling", floorAction: "Check 10 random units for zero fabric snags/tears.", priority: "High", riskLevel: "Low", consequence: "Unsaleable luxury stock.", proof: "Visual Audit", cadence: "daily" },
                { id: "F-WSL-03", technicalProtocol: "Lingerie Parity", floorAction: "Ensure 100% privacy-wrap availability for sales.", priority: "Medium", riskLevel: "Low", consequence: "Guest embarrassment.", proof: "Stock Check", cadence: "daily" },
                { id: "F-WSL-04", technicalProtocol: "Makeup Shield Stock", floorAction: "Verify 50+ disposable shields in trial zone.", priority: "High", riskLevel: "Low", consequence: "Foundation-stained stock (100% loss).", proof: "Visual Count", cadence: "daily" },
                { id: "F-WSL-05", technicalProtocol: "Size-Curve Dresses", floorAction: "Verify availability of size 8/10/12 in current hero SKU.", priority: "High", riskLevel: "Low", consequence: "Missed peak sales.", proof: "System Sync", cadence: "daily" },
                { id: "F-WSL-06", technicalProtocol: "Jewelry Accessory Sync", floorAction: "Confirm 100% presence of security strings on display items.", priority: "High", riskLevel: "High", consequence: "Small item theft window.", proof: "Walk Log", verificationRequired: true, cadence: "hourly" },
                { id: "F-WSL-07", technicalProtocol: "Boutique Fragrance", floorAction: "Confirm active scent-diffuser in premium wing.", priority: "Low", riskLevel: "Low", consequence: "Generic experience.", proof: "Visual Check", cadence: "daily" },
                { id: "F-WSL-08", technicalProtocol: "Alteration Tracking", floorAction: "Update 100% of hem-ready clients via SMS.", priority: "Medium", riskLevel: "Low", consequence: "Delayed collection.", proof: "Comms Log", cadence: "daily" }
            ]
        },
        {
            title: "Kids' & Accessories Lead",
            department: "Sales",
            frequency: "Daily",
            role: "Kids' & Accessories Lead",
            summary: "Safety governance and impulse-buy protection.",
            icon: "rabbit",
            tasks: [
                { id: "F-KSL-01", technicalProtocol: "Toy Safety Scan", floorAction: "Remove items with loose small parts < 8 AM.", priority: "High", riskLevel: "High", consequence: "Choking hazard liability.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "F-KSL-02", technicalProtocol: "Gift Wrapping Stock", floorAction: "Verify 100+ branded stickers and ribbons.", priority: "Low", riskLevel: "Low", consequence: "Delayed impulse checkout.", proof: "Stock Check", cadence: "weekly" },
                { id: "F-KSL-03", technicalProtocol: "Accessories Security", floorAction: "Ensure zero-gap tagging on sunglasses/belts.", priority: "High", riskLevel: "Medium", consequence: "High shrinkage category loss.", proof: "Sample Scan", cadence: "hourly" },
                { id: "F-KSL-04", technicalProtocol: "Hanger Safety Check", floorAction: "Replace all cracked or sharp plastic hangers.", priority: "Medium", riskLevel: "Medium", consequence: "Child injury liability.", proof: "Visual Check", cadence: "daily" },
                { id: "F-KSL-05", technicalProtocol: "Battery Toy Pulse", floorAction: "Verify 100% removal of dead batteries from demo units.", priority: "Low", riskLevel: "Medium", consequence: "Battery acid leakage damage.", proof: "Visual Audit", cadence: "weekly" },
                { id: "F-KSL-06", technicalProtocol: "Shelf-Edge Buffer", floorAction: "Confirm zero sharp corners at child eye-level.", priority: "High", riskLevel: "High", consequence: "Laceration never-event.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "F-KSL-07", technicalProtocol: "Small-Item Reconcile", floorAction: "Blind count top 3 earring/accessory SKUs.", priority: "High", riskLevel: "High", consequence: "Undetected shrinkage.", proof: "Count Sheet", verificationRequired: true, cadence: "weekly" },
                { id: "F-KSL-08", technicalProtocol: "Promo Bundle Sync", floorAction: "Verify 'Buy 2 Get 1' tags match current SKU list.", priority: "Medium", riskLevel: "Low", consequence: "Billing disputes.", proof: "POS Match", cadence: "daily" }
            ]
        }
    ]
};
