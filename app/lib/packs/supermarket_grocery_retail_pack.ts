import type { PremiumPack } from "@/lib/premium-packs";

export const supermarket_grocery_retail_pack: PremiumPack = {
    id: 'supermarket_grocery_retail_pack',
    title: "Grocery Operations System v18.0 (Sovereign Pro)",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 899,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/checkout/buy/d6d4dd85-3fb9-4c26-8ec3-cb021ddebfdc',
    category: "Retail",
    description: "The definitive Sovereign v18.0 engine for high-volume grocery, supermarkets, and FMCG retail. Hardening 200 technical control points across Cold Chain, Spoilage Prevention, and Shrinkage Governance. [Frozen Verification Candidate]",
    heroHeadline: "Command Your Freshness. Protect Your Margins.",
    heroSubheadline: "Track cold chain integrity, monitor expiry sweeps, and stop checkout variance—across 20 specialized grocery roles.",
    pricingUrgency: "A single refrigeration breach or one major health department fine costs 100x more than this entire system.",
    consultingAnchor: 8000,
    icon: "shopping-basket",
    badgeText: "V18.0 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Store Managers", "Fresh Produce Leads", "Cold Storage Officers", "Inventory Replenishment Leads", "Grocery Chain Owners"],
    sampleItems: [
        { text: "<strong>Cold Chain Shield</strong>: Zero-fail protocols for refrigeration vitals, freezer seals, and thaw-risk escalation.", icon: "thermometer-snowflake" },
        { text: "<strong>Spoilage & Expiry Engine</strong>: Category-wise expiry sweeps, markdown workflows, and disposal authorization chains.", icon: "recycle" },
        { text: "<strong>Shrinkage & Checkout Control</strong>: Cashier variance audits, high-shrink SKU pulses, and spot-weigh verifications.", icon: "shield-alert" },
        { text: "<strong>Shelf Availability Logic</strong>: Peak-hour replenishment sequencing, shelf-gap detection, and inward reconciliation.", icon: "layout-grid" },
        { text: "<strong>FMCG Logistics Hub</strong>: Receiving-bay temperature audits and vendor SLA breach tracking.", icon: "truck" },
        { text: "<strong>ESG Sustainability</strong>: Food waste KG/day logging and refrigeration energy intensity monitoring.", icon: "leaf" }
    ],
    checklists: [
        {
            title: "Store Executive Command",
            department: "Management",
            frequency: "Daily",
            role: "Store Manager",
            summary: "High-level strategic oversight of margin protection and statutory safety.",
            icon: "crown",
            tasks: [
                { id: "GR-MGR-01", technicalProtocol: "Refrigeration Breach Triage", floorAction: "Review all overnight thermal alerts; verify zero 'Thawed-and-Refrozen' stock.", priority: "High", riskLevel: "High", consequence: "Mass food poisoning and total inventory loss.", proof: "Incident Log", verificationRequired: true, cadence: "daily" },
                { id: "GR-MGR-02", technicalProtocol: "Cash Variance Review", floorAction: "Audit 100% of till reports with variance > ₹100; witness cashier sign-off.", priority: "High", riskLevel: "High", consequence: "Systemic till theft and financial fraud.", proof: "Variance Report", verificationRequired: true, cadence: "daily" },
                { id: "GR-MGR-03", technicalProtocol: "Statutory License Pulse", floorAction: "Verify validity of FSSAI, Fire NOC, and Legal Metrology certs.", priority: "High", riskLevel: "High", consequence: "Store sealing and heavy regulatory fines.", proof: "License File", verificationRequired: true, cadence: "daily" },
                { id: "GR-MGR-04", technicalProtocol: "High-Value Disposal Witness", floorAction: "Physically witness disposal of expired high-margin SKUs (Proteins/Gourmet).", priority: "High", riskLevel: "High", consequence: "Fake disposals masking internal theft.", proof: "Signed Registry", verificationRequired: true, cadence: "daily" },
                { id: "GR-MGR-05", technicalProtocol: "Shelf-Gap Analysis", floorAction: "Review 'Top 50 SKU' availability report; escalate supply chain gaps.", priority: "Medium", riskLevel: "Low", consequence: "Lost revenue on high-velocity items.", proof: "Gap Report", cadence: "daily" },
                { id: "GR-MGR-06", technicalProtocol: "Staff Sobriety Pulse", floorAction: "Confirm zero impairment for incoming heavy-machinery / forklift operators.", priority: "High", riskLevel: "High", consequence: "Fatal workplace accident.", proof: "Briefing Log", verificationRequired: true, cadence: "daily" },
                { id: "GR-MGR-07", technicalProtocol: "Fire Exit Clearance", floorAction: "Physically clear the egress of discarded pallets or crates.", priority: "High", riskLevel: "High", consequence: "Entrapment during emergency.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "GR-MGR-08", technicalProtocol: "Vendor SLA Review", floorAction: "Audit TAT for fresh produce delivery; flag consistency issues.", priority: "Medium", riskLevel: "Low", consequence: "Empty shelves and customer attrition.", proof: "SLA Tracker", cadence: "weekly" },
                { id: "GR-MGR-09", technicalProtocol: "ESG Resource Pulse", floorAction: "Compare daily KWH meter vs refrigeration set-point targets.", priority: "Low", riskLevel: "Low", consequence: "Unmonitored energy waste.", proof: "Meter Match", cadence: "daily" },
                { id: "GR-MGR-10", technicalProtocol: "Daily MOD Summary", floorAction: "Final daily operational and safety status sign-off.", priority: "High", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Summary", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Fresh Produce Governance",
            department: "Fresh",
            frequency: "Hourly",
            role: "Fresh Produce Manager",
            summary: "Atomic freshness control and spoilage mitigation.",
            icon: "leaf",
            tasks: [
                { id: "GR-FPM-01", technicalProtocol: "Morning Cull Wave", floorAction: "Remove all bruised, wilted, or moldy items from prime bins.", priority: "High", riskLevel: "Medium", consequence: "Rapid cross-contamination and poor brand image.", proof: "Visual Audit", cadence: "daily" },
                { id: "GR-FPM-02", technicalProtocol: "Misting Schedule Sync", floorAction: "Verify timer settings on hydration sprays for leafy greens.", priority: "Medium", riskLevel: "Low", consequence: "Premature wilting and high shrinkage.", proof: "System Check", cadence: "daily" },
                { id: "GR-FPM-03", technicalProtocol: "Organic Segregation", floorAction: "Confirm zero contact between organic and conventional produce.", priority: "High", riskLevel: "Medium", consequence: "Legal liability for mislabeling.", proof: "Visual Scan", verificationRequired: true, cadence: "daily" },
                { id: "GR-FPM-04", technicalProtocol: "Weigh-Scale Tare", floorAction: "Verify zero-point accuracy on customer-facing scales.", priority: "High", riskLevel: "Medium", consequence: "Consumer Metrology violation.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "GR-FPM-05", technicalProtocol: "Spoilage Weight Log", floorAction: "Document KG of produce discarded in the 11 AM cull.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored procurement loss.", proof: "Weight Slip", cadence: "daily" },
                { id: "GR-FPM-06", technicalProtocol: "Price Parity Check", floorAction: "Match shelf-edge labels to daily market price updates.", priority: "High", riskLevel: "Low", consequence: "Checkout friction and margin loss.", proof: "Price List", cadence: "daily" },
                { id: "GR-FPM-07", technicalProtocol: "Sanitization Wave", floorAction: "Deep clean plastic crates to prevent bacterial slime.", priority: "Medium", riskLevel: "Medium", consequence: "Pathogen spread.", proof: "Cleaning Log", cadence: "weekly" },
                { id: "GR-FPM-08", technicalProtocol: "Cross-Merch Audit", floorAction: "Verify stock levels of adjacent salad dressings or dips.", priority: "Low", riskLevel: "Low", consequence: "Missed upsell revenue.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-FPM-09", technicalProtocol: "Supplier Quality Sample", floorAction: "Test 1 random box from incoming lot for pulp-temp.", priority: "High", riskLevel: "Medium", consequence: "Entering poor-life inventory.", proof: "Sample Log", cadence: "daily" },
                { id: "GR-FPM-10", technicalProtocol: "EOD Prep Clear", floorAction: "Move all high-risk pre-cut fruit to chill-vault.", priority: "High", riskLevel: "High", consequence: "Overnight spoilage.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Cold Storage Compliance",
            department: "Maintenance",
            frequency: "Hourly",
            role: "Cold Storage Compliance Officer",
            summary: "Zero-fail thermal governance for the cold chain.",
            icon: "thermometer-snowflake",
            tasks: [
                { id: "GR-CSC-01", technicalProtocol: "Chiller Temperature Log", floorAction: "Record digital reading every 4h for all open-deck units.", priority: "High", riskLevel: "High", consequence: "Pathogen growth (Listeria/Salmonella).", proof: "Temp Log", verificationRequired: true, cadence: "hourly" },
                { id: "GR-CSC-02", technicalProtocol: "Freezer Seal Integrity", floorAction: "Check 100% of glass doors for zero frost buildup or air-leaks.", priority: "Medium", riskLevel: "Medium", consequence: "Mechanical strain and energy waste.", proof: "Walkthrough", cadence: "daily" },
                { id: "GR-CSC-03", technicalProtocol: "Thaw-Risk Alert", floorAction: "Identify any unit exceeding 6°C for > 30 mins.", priority: "High", riskLevel: "High", consequence: "Total inventory write-off.", proof: "System Alert", verificationRequired: true, cadence: "daily" },
                { id: "GR-CSC-04", technicalProtocol: "Drainage Clearance", floorAction: "Verify zero ice-blocking in chiller floor-drains.", priority: "Medium", riskLevel: "Medium", consequence: "Slick floors and safety hazard.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-CSC-05", technicalProtocol: "UPS Power Backup", floorAction: "Confirm 15-min backup runtime for temp-monitoring server.", priority: "High", riskLevel: "High", consequence: "Unmonitored breach during blackout.", proof: "Test Note", verificationRequired: true, cadence: "weekly" },
                { id: "GR-CSC-06", technicalProtocol: "Defrost Schedule Sync", floorAction: "Verify off-peak defrost times for walk-in freezers.", priority: "Low", riskLevel: "Low", consequence: "Temp spikes during peak surge.", proof: "BMS Screen", cadence: "weekly" },
                { id: "GR-CSC-07", technicalProtocol: "Load-Line Compliance", floorAction: "Ensure zero stock is stacked above the red limit-line.", priority: "Medium", riskLevel: "Medium", consequence: "Inadequate cooling of top layers.", proof: "Visual Audit", cadence: "daily" },
                { id: "GR-CSC-08", technicalProtocol: "Curtain Closure Audit", floorAction: "Confirm strip-curtains are closed in 100% of walk-ins.", priority: "Medium", riskLevel: "Low", consequence: "Loss of air-curtain efficiency.", proof: "Walkthrough", cadence: "hourly" },
                { id: "GR-CSC-09", technicalProtocol: "Evaporator Fan Test", floorAction: "Listen for bearing noise in 5 random chiller units.", priority: "Low", riskLevel: "Low", consequence: "Unexpected motor failure.", proof: "Acoustic Check", cadence: "daily" },
                { id: "GR-CSC-10", technicalProtocol: "EOD Power Monitor", floorAction: "Verify zero manual overrides on the master thermal panel.", priority: "High", riskLevel: "High", consequence: "Intentional masking of thermal fails.", proof: "Signed Sheet", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Receiving & Inward Command",
            department: "Logistics",
            frequency: "Daily",
            role: "Receiving & Inward Supervisor",
            summary: "Governance for stock intake and supplier parity.",
            icon: "package-check",
            tasks: [
                { id: "GR-RIS-01", technicalProtocol: "Inbound Temp Verify", floorAction: "Scan internal temp of incoming frozen trucks (Target < -18°C).", priority: "High", riskLevel: "High", consequence: "Accepting compromised cold-chain stock.", proof: "Receipt Log", verificationRequired: true, cadence: "daily" },
                { id: "GR-RIS-02", technicalProtocol: "GRN Weight Matching", floorAction: "Test 1 random loose crate for weight vs invoice match.", priority: "High", riskLevel: "Medium", consequence: "Systemic supplier short-weight fraud.", proof: "Scale Match", verificationRequired: true, cadence: "daily" },
                { id: "GR-RIS-03", technicalProtocol: "FSSAI License Vetting", floorAction: "Verify validity of fresh meat supplier certification.", priority: "High", riskLevel: "High", consequence: "Legal liability for unsafe sourcing.", proof: "License File", verificationRequired: true, cadence: "weekly" },
                { id: "GR-RIS-04", technicalProtocol: "Cross-Dock Velocity", floorAction: "Move 100% of dairy arrivals to chill-vault < 15 mins.", priority: "High", riskLevel: "High", consequence: "Ambient exposure spoilage.", proof: "Time Stamp", verificationRequired: true, cadence: "daily" },
                { id: "GR-RIS-05", technicalProtocol: "Packaging Integrity Scan", floorAction: "Reject 100% of boxes with crushed or damp corners.", priority: "Medium", riskLevel: "Low", consequence: "Hidden pest entry or damage.", proof: "Rejection Note", cadence: "daily" },
                { id: "GR-RIS-06", technicalProtocol: "Barcode Readability", floorAction: "Test scan 10 random incoming SKUs for system match.", priority: "Low", riskLevel: "Low", consequence: "Inventory disorganization.", proof: "Scan Log", cadence: "daily" },
                { id: "GR-RIS-07", technicalProtocol: "Pallet Safety Audit", floorAction: "Ensure zero unstable stacks > 6ft in receiving area.", priority: "High", riskLevel: "High", consequence: "Crush injury to staff.", proof: "Walkthrough", cadence: "daily" },
                { id: "GR-RIS-08", technicalProtocol: "Crate Sanitization Audit", floorAction: "Confirm 100% swap of vendor crates to store crates.", priority: "Medium", riskLevel: "Medium", consequence: "Cross-contamination from outside.", proof: "Visual Audit", cadence: "daily" },
                { id: "GR-RIS-09", technicalProtocol: "Receiving Bay Hygiene", floorAction: "Sanitize dock floor every 4 hours or post-spill.", priority: "Low", riskLevel: "Low", consequence: "Foul odors and pest attraction.", proof: "Cleaning Sheet", cadence: "daily" },
                { id: "GR-RIS-10", technicalProtocol: "EOD Dock Lockdown", floorAction: "Witness lock of loading bay shutters and main gate.", priority: "High", riskLevel: "High", consequence: "After-hours theft window.", proof: "Closure Log", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Inventory Replenishment",
            department: "Stores",
            frequency: "Hourly",
            role: "Inventory Replenishment Lead",
            summary: "Shelf-depth governance and peak-hour sequencing.",
            icon: "arrow-up-right",
            tasks: [
                { id: "GR-IRL-01", technicalProtocol: "Peak-Wave Replenish", floorAction: "Execute 100% fill of top 20 SKUs before 6 PM rush.", priority: "High", riskLevel: "Low", consequence: "Lost sales during high traffic.", proof: "Shelf Count", cadence: "daily" },
                { id: "GR-IRL-02", technicalProtocol: "Gap-Scan Pulse", floorAction: "Identify and fill 10 empty facing slots in 'Basics' aisle.", priority: "Medium", riskLevel: "Low", consequence: "Poor visual brand impact.", proof: "Visual Audit", cadence: "hourly" },
                { id: "GR-IRL-03", technicalProtocol: "FIFO Stocking Audit", floorAction: "Verify older stock is moved to front-facing during fill.", priority: "High", riskLevel: "Medium", consequence: "Hidden expiry write-offs.", proof: "Sample Check", cadence: "daily" },
                { id: "GR-IRL-04", technicalProtocol: "Dead-Rack Identification", floorAction: "Flag 5 SKUs with zero movement in > 14 days.", priority: "Low", riskLevel: "Low", consequence: "Blocked prime shelf-space.", proof: "Aging Report", cadence: "weekly" },
                { id: "GR-IRL-05", technicalProtocol: "Promo-End Pull", floorAction: "Remove signage and excess stock for expired offers < 8 AM.", priority: "Medium", riskLevel: "Low", consequence: "Billing disputes.", proof: "Walkthrough", cadence: "daily" },
                { id: "GR-IRL-06", technicalProtocol: "Crate De-clutter", floorAction: "Remove 100% of restock crates from public floor.", priority: "Low", riskLevel: "Medium", consequence: "Tripping hazard and clutter.", proof: "Walkthrough", cadence: "hourly" },
                { id: "GR-IRL-07", technicalProtocol: "Private Label Push", floorAction: "Verify 100% shelf-depth for store-brand hero items.", priority: "Low", riskLevel: "Low", consequence: "Lower net margin capture.", proof: "Visual Audit", cadence: "daily" },
                { id: "GR-IRL-08", technicalProtocol: "OOS Alert Loop", floorAction: "Update 'Out-of-Stock' tags for confirmed supplier gaps.", priority: "Low", riskLevel: "Low", consequence: "Customer frustration.", proof: "Tag Audit", cadence: "daily" },
                { id: "GR-IRL-09", technicalProtocol: "Price Label Check", floorAction: "Replace all torn or illegible shelf-edge labels.", priority: "Low", riskLevel: "Low", consequence: "Price ambiguity.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-IRL-10", technicalProtocol: "EOD Aisle Sweep", floorAction: "Final squaring of all facing stock pre-closing.", priority: "Low", riskLevel: "Low", consequence: "Disorganized morning opening.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "FMCG Category Management",
            department: "Management",
            frequency: "Weekly",
            role: "FMCG Category Manager",
            summary: "Profit optimization and SKU-performance governance.",
            icon: "shopping-bag",
            tasks: [
                { id: "GR-FMCG-01", technicalProtocol: "Category Margin Audit", floorAction: "Identify 5 SKUs with > 5% procurement price drift.", priority: "Medium", riskLevel: "Low", consequence: "Silent margin erosion.", proof: "Financial Log", cadence: "weekly" },
                { id: "GR-FMCG-02", technicalProtocol: "Space-Elasticity Review", floorAction: "Adjust facings for high-velocity seasonal items.", priority: "Low", riskLevel: "Low", consequence: "Inefficient shelf-space use.", proof: "System Update", cadence: "weekly" },
                { id: "GR-FMCG-03", technicalProtocol: "Promotion Parity Sync", floorAction: "Verify local branch offers match national ad flyers.", priority: "High", riskLevel: "Low", consequence: "Customer complaints and trust loss.", proof: "Photo", cadence: "weekly" },
                { id: "GR-FMCG-04", technicalProtocol: "Supplier Rebate Vetting", floorAction: "Audit 5 bills for 'Slotting Allowance' compliance.", priority: "Medium", riskLevel: "Low", consequence: "Unrealized vendor revenue.", proof: "Bill Match", cadence: "monthly" },
                { id: "GR-FMCG-05", technicalProtocol: "New Product Readiness", floorAction: "Confirm shelf positioning and system codes for new launch.", priority: "Medium", riskLevel: "Low", consequence: "Failed product launch.", proof: "Visual Audit", cadence: "weekly" },
                { id: "GR-FMCG-06", technicalProtocol: "Damaged Stock Recovery", floorAction: "Verify return of 100% of defective FMCG to vendor.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored financial credit loss.", proof: "Dispatch Log", cadence: "weekly" },
                { id: "GR-FMCG-07", technicalProtocol: "Product Mix Analysis", floorAction: "Identify top 10 'Basket-Builder' items; verify adjacency.", priority: "Low", riskLevel: "Low", consequence: "Missed attachment revenue.", proof: "Analysis Note", cadence: "weekly" },
                { id: "GR-FMCG-08", technicalProtocol: "Price Competition Sweep", floorAction: "Log prices of 10 'KVIs' (Known Value Items) at neighbor.", priority: "Medium", riskLevel: "Low", consequence: "Lost price-leadership perception.", proof: "Competitive Log", cadence: "weekly" },
                { id: "GR-FMCG-09", technicalProtocol: "Private Label Conversion", floorAction: "Monitor switch rates from national brands to house labels.", priority: "Low", riskLevel: "Low", consequence: "Underperforming margin stream.", proof: "Trend Report", cadence: "monthly" },
                { id: "GR-FMCG-10", technicalProtocol: "Category Safety Review", floorAction: "Confirm 100% removal of recalled batch numbers.", priority: "High", riskLevel: "High", consequence: "Mass legal liability.", proof: "Recall File", verificationRequired: true, cadence: "incident-based" }
            ]
        },
        {
            title: "Dairy & Frozen Command",
            department: "Fresh",
            frequency: "Daily",
            role: "Dairy & Frozen Supervisor",
            summary: "High-risk cold-chain execution and rotation.",
            icon: "snowflake",
            tasks: [
                { id: "GR-DFS-01", technicalProtocol: "Milk Expiry Pulse", floorAction: "Remove items with < 24h life from front-row.", priority: "High", riskLevel: "Medium", consequence: "Customer returns and bad odor.", proof: "Visual Audit", cadence: "daily" },
                { id: "GR-DFS-02", technicalProtocol: "Frozen Leakage Scan", floorAction: "Check 10 random bags for ice-crystals (Thaw/Refreeze sign).", priority: "High", riskLevel: "High", consequence: "Food poisoning from temperature abuse.", proof: "Sample Log", verificationRequired: true, cadence: "daily" },
                { id: "GR-DFS-03", technicalProtocol: "Dairy Sanitization", floorAction: "Wipe down shelves post-spillage with 10% bleach.", priority: "Medium", riskLevel: "Medium", consequence: "Bacterial growth.", proof: "Cleaning Sheet", cadence: "daily" },
                { id: "GR-DFS-04", technicalProtocol: "Case Temperature Match", floorAction: "Verify digital shelf-temp matches physical probe check.", priority: "High", riskLevel: "High", consequence: "False sense of safety.", proof: "Probe Log", verificationRequired: true, cadence: "daily" },
                { id: "GR-DFS-05", technicalProtocol: "Ice-Cream Hardness", floorAction: "Physically check consistency of 2 random tubs.", priority: "Low", riskLevel: "Low", consequence: "Sub-par product texture.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-DFS-06", technicalProtocol: "Frozen Packaging Audit", floorAction: "Remove items with split or torn plastic bags.", priority: "Medium", riskLevel: "Low", consequence: "Freezer burn and waste.", proof: "Visual Audit", cadence: "daily" },
                { id: "GR-DFS-07", technicalProtocol: "Night-Curtain Pulse", floorAction: "Verify deployment of thermal covers post-closing.", priority: "Medium", riskLevel: "Low", consequence: "Massive energy waste.", proof: "Walkthrough", cadence: "daily" },
                { id: "GR-DFS-08", technicalProtocol: "Yogurt Rotation", floorAction: "Execute 100% FEFO (First-Expiry-First-Out).", priority: "High", riskLevel: "Medium", consequence: "Hidden expiries on shelf.", proof: "Signed Sheet", cadence: "daily" },
                { id: "GR-DFS-09", technicalProtocol: "Case Lighting Sync", floorAction: "Confirm 100% illumination of dairy-wing LED bars.", priority: "Low", riskLevel: "Low", consequence: "Dull product display.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-DFS-10", technicalProtocol: "Frozen Back-Stock", floorAction: "Witness lock of the high-security deep-freeze cage.", priority: "High", riskLevel: "High", consequence: "Internal pilferage of high-value stock.", proof: "Visual Confirm", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Bakery & Deli Vitals",
            department: "Fresh",
            frequency: "Daily",
            role: "Bakery/Deli Supervisor",
            summary: "Production hygiene and holding-time governance.",
            icon: "cake",
            tasks: [
                { id: "GR-BDS-01", technicalProtocol: "Batch Cook-off Log", floorAction: "Record time-out for all house-baked bread batches.", priority: "Medium", riskLevel: "Low", consequence: "Stale food complaints.", proof: "Bake Sheet", cadence: "hourly" },
                { id: "GR-BDS-02", technicalProtocol: "Deli Slicer Hygiene", floorAction: "Sanitize blades every 4 hours or post meat-type change.", priority: "High", riskLevel: "High", consequence: "Cross-contamination / Listeria.", proof: "Cleaning Log", verificationRequired: true, cadence: "daily" },
                { id: "GR-BDS-03", technicalProtocol: "Hot-Hold Vitals", floorAction: "Verify internal temp of roast chicken > 65°C.", priority: "High", riskLevel: "High", consequence: "Pathogen growth in thermal 'Danger Zone'.", proof: "Temp Log", verificationRequired: true, cadence: "hourly" },
                { id: "GR-BDS-04", technicalProtocol: "Unsold Write-off", floorAction: "Discard 100% of day-old deli salads post 9 PM.", priority: "High", riskLevel: "High", consequence: "Foodborne illness outbreak.", proof: "Waste Registry", verificationRequired: true, cadence: "daily" },
                { id: "GR-BDS-05", technicalProtocol: "Staff Glove Compliance", floorAction: "Verify 100% use of clean gloves for ready-to-eat items.", priority: "High", riskLevel: "High", consequence: "Pathogen transmission.", proof: "Daily Audit", cadence: "daily" },
                { id: "GR-BDS-06", technicalProtocol: "Counter Allergen Tag", floorAction: "Confirm visibility of 'Contains Nuts' icons on display.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "GR-BDS-07", technicalProtocol: "Scale Tare-Weight", floorAction: "Verify zero-point with empty tray on deli scale.", priority: "Medium", riskLevel: "Low", consequence: "Overcharging / Metrology fines.", proof: "Test Note", cadence: "daily" },
                { id: "GR-BDS-08", technicalProtocol: "Cake Display Temp", floorAction: "Log pastry-case temp; target < 4°C.", priority: "Medium", riskLevel: "Medium", consequence: "Melting / spoilage.", proof: "Temp Log", cadence: "daily" },
                { id: "GR-BDS-09", technicalProtocol: "Packaging Parity", floorAction: "Ensure availability of 50+ grease-proof deli bags.", priority: "Low", riskLevel: "Low", consequence: "Service delay.", proof: "Stock Check", cadence: "daily" },
                { id: "GR-BDS-10", technicalProtocol: "EOD Kitchen Shutdown", floorAction: "Physically witness lock of oven gas-bank.", priority: "High", riskLevel: "High", consequence: "Overnight explosion hazard.", proof: "Closure Log", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Loss Prevention (Shrinkage)",
            department: "Security",
            frequency: "Hourly",
            role: "Loss Prevention Officer",
            summary: "Hardens the perimeter and protects against shoplifting.",
            icon: "shield-alert",
            tasks: [
                { id: "GR-LPO-01", technicalProtocol: "EAS Gate Test", floorAction: "Verify entry gates alarm with active security tag.", priority: "High", riskLevel: "High", consequence: "Undetected tagged items leaving store.", proof: "Test Log", cadence: "daily" },
                { id: "GR-LPO-02", technicalProtocol: "Tag-Tamper Sweep", floorAction: "Walk alcohol/cosmetic aisles for discarded tags.", priority: "High", riskLevel: "High", consequence: "High-shrinkage category loss.", proof: "Patrol Log", cadence: "hourly" },
                { id: "GR-LPO-03", technicalProtocol: "Fitting Room Pulse", floorAction: "Execute 60-min sweep for zero concealed items.", priority: "High", riskLevel: "High", consequence: "Theft hotspot breach.", proof: "Log Entry", verificationRequired: true, cadence: "hourly" },
                { id: "GR-LPO-04", technicalProtocol: "Staff Bag Audit", floorAction: "Perform random check of 3 staff bags at shift exit.", priority: "Medium", riskLevel: "Medium", consequence: "Systemic internal pilferage.", proof: "Registry Note", cadence: "daily" },
                { id: "GR-LPO-05", technicalProtocol: "Cash-Drop Guard", floorAction: "Provide 100% armed/guarded presence for cashier collection.", priority: "High", riskLevel: "High", consequence: "Armed robbery vulnerability.", proof: "Transfer Note", verificationRequired: true, cadence: "daily" },
                { id: "GR-LPO-06", technicalProtocol: "CCTV Angle Match", floorAction: "Verify clear view of main high-value aisles.", priority: "Medium", riskLevel: "Low", consequence: "Blind-spot theft window.", proof: "Monitor Check", cadence: "weekly" },
                { id: "GR-LPO-07", technicalProtocol: "Intruder Perimeter", floorAction: "Inspect external vents and roof-hatches for tamper-signs.", priority: "High", riskLevel: "High", consequence: "Sophisticated burglary window.", proof: "Walk Log", verificationRequired: true, cadence: "weekly" },
                { id: "GR-LPO-08", technicalProtocol: "Guard Sobriety", floorAction: "Random behavior scan of 2 AM guard rotation.", priority: "High", riskLevel: "High", consequence: "Vulnerable night perimeter.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "GR-LPO-09", technicalProtocol: "Panic Trigger Pulse", floorAction: "Test response of under-counter silent alarms.", priority: "High", riskLevel: "High", consequence: "Zero help during duress.", proof: "Signal Test", verificationRequired: true, cadence: "daily" },
                { id: "GR-LPO-10", technicalProtocol: "EOD Safe Reconcile", floorAction: "Match vault inventory to morning issue register.", priority: "High", riskLevel: "High", consequence: "Unresolved stock discrepancy.", proof: "Signed Reconcile", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Checkout Governance",
            department: "Finance",
            frequency: "Daily",
            role: "Cashier Supervisor",
            summary: "Revenue point protection and variance prevention.",
            icon: "banknote",
            tasks: [
                { id: "GR-CSH-01", technicalProtocol: "Till-Point Scan", floorAction: "Physically check 100% of registers for skimmers.", priority: "High", riskLevel: "High", consequence: "Guest data theft and PR scandal.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "GR-CSH-02", technicalProtocol: "Bill Journal Audit", floorAction: "Confirm zero gaps in digital invoice sequence.", priority: "High", riskLevel: "High", consequence: "Revenue exfiltration / Tax fraud.", proof: "Digital Audit", verificationRequired: true, cadence: "daily" },
                { id: "GR-CSH-03", technicalProtocol: "Variance Escalation", floorAction: "Document and investigate any cashier gap > ₹100.", priority: "High", riskLevel: "Medium", consequence: "Systemic till theft.", proof: "Variance Report", verificationRequired: true, cadence: "daily" },
                { id: "GR-CSH-04", technicalProtocol: "Refund Override", floorAction: "Co-sign 100% of on-floor customer refunds.", priority: "High", riskLevel: "High", consequence: "Fake refund fraud by cashiers.", proof: "Signed Slip", verificationRequired: true, cadence: "daily" },
                { id: "GR-CSH-05", technicalProtocol: "Card Machine Battery", floorAction: "Ensure 100% of terminal units are charged and online.", priority: "Low", riskLevel: "Low", consequence: "Checkout gridlock.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-CSH-06", technicalProtocol: "Bagging Efficiency", floorAction: "Observe 10 bills for correct heavy-on-bottom rule.", priority: "Low", riskLevel: "Low", consequence: "Damaged guest goods.", proof: "Supervisor Obs", cadence: "daily" },
                { id: "GR-CSH-07", technicalProtocol: "Coupon Validity", floorAction: "Audit use of high-value discounts against flyer codes.", priority: "Medium", riskLevel: "Low", consequence: "Margin leakage.", proof: "System Sync", cadence: "daily" },
                { id: "GR-CSH-08", technicalProtocol: "POS Touch Hygiene", floorAction: "Sanitize screen and pin-pad every shift rotation.", priority: "Low", riskLevel: "Medium", consequence: "Staff disease spread.", proof: "Cleaning Note", cadence: "daily" },
                { id: "GR-CSH-09", technicalProtocol: "Float Reconcile", floorAction: "Physically count coins and notes at shift start.", priority: "High", riskLevel: "Medium", consequence: "Untraceable shortage.", proof: "Float Sheet", cadence: "daily" },
                { id: "GR-CSH-10", technicalProtocol: "EOD Cash-Drop Witness", floorAction: "Witness dual-person seal of bank transit bag.", priority: "High", riskLevel: "High", consequence: "Untraceable transit theft.", proof: "Seal Number", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Shelf Availability Control",
            department: "Stores",
            frequency: "Hourly",
            role: "Shelf Availability Coordinator",
            summary: "Atomic gap-detection and replenishment pulse.",
            icon: "grid",
            tasks: [
                { id: "GR-SAC-01", technicalProtocol: "KVI Availability Pulse", floorAction: "Check stock levels of Top 20 staples (Milk, Bread, Eggs).", priority: "High", riskLevel: "Low", consequence: "Visible core-stock outs.", proof: "Visual Scan", cadence: "hourly" },
                { id: "GR-SAC-02", technicalProtocol: "Facing Alignment", floorAction: "Verify 'Label-Forward' alignment for all center facings.", priority: "Low", riskLevel: "Low", consequence: "Messy brand image.", proof: "Walkthrough", cadence: "hourly" },
                { id: "GR-SAC-03", technicalProtocol: "OOS Tag Audit", floorAction: "Confirm placement of 'Coming Soon' tags on empty slots.", priority: "Medium", riskLevel: "Low", consequence: "Customer frustration.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-SAC-04", technicalProtocol: "Replenish Cycle", floorAction: "Notify warehouse of any shelf with < 20% stock.", priority: "High", riskLevel: "Low", consequence: "Stockout during surges.", proof: "System Note", cadence: "hourly" },
                { id: "GR-SAC-05", technicalProtocol: "Price Edge Parity", floorAction: "Replace all torn or incorrect price-edge labels.", priority: "High", riskLevel: "Medium", consequence: "Consumer court claims.", proof: "Sample Match", cadence: "daily" },
                { id: "GR-SAC-06", technicalProtocol: "Crate De-clutter", floorAction: "Remove 100% of restock crates from public floor.", priority: "Low", riskLevel: "Medium", consequence: "Tripping hazard and clutter.", proof: "Walkthrough", cadence: "hourly" },
                { id: "GR-SAC-07", technicalProtocol: "New Item Zoning", floorAction: "Confirm signage for 100% of today's new arrivals.", priority: "Low", riskLevel: "Low", consequence: "Poor product trial.", proof: "Photo", cadence: "weekly" },
                { id: "GR-SAC-08", technicalProtocol: "Markdown Visibility", floorAction: "Verify 'Quick-Sale' tags on near-expiry shelf items.", priority: "High", riskLevel: "Low", consequence: "Missed loss-mitigation.", proof: "Visual Audit", cadence: "daily" },
                { id: "GR-SAC-09", technicalProtocol: "Cross-Category Check", floorAction: "Verify presence of batteries/chargers at checkout.", priority: "Low", riskLevel: "Low", consequence: "Missed impulse revenue.", proof: "Visual Count", cadence: "daily" },
                { id: "GR-SAC-10", technicalProtocol: "EOD Shelf Reset", floorAction: "Witness final facings sweep post-closing.", priority: "Low", riskLevel: "Low", consequence: "Disorganized morning opening.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Vendor Relations Sync",
            department: "Admin",
            frequency: "Weekly",
            role: "Vendor Relations Coordinator",
            summary: "Monitors fresh-supply performance and SLA adherence.",
            icon: "handshake",
            tasks: [
                { id: "GR-VRC-01", technicalProtocol: "SLA Breach Logging", floorAction: "Document 100% of delivery lead-time violations > 2h.", priority: "Medium", riskLevel: "Low", consequence: "Persistent network stockouts.", proof: "Variance Report", cadence: "daily" },
                { id: "GR-VRC-02", technicalProtocol: "License Validity Scan", floorAction: "Identify all active vendors with FSSAI expiring < 30 days.", priority: "High", riskLevel: "High", consequence: "Legal sourcing liability.", proof: "Registry Audit", verificationRequired: true, cadence: "weekly" },
                { id: "GR-VRC-03", technicalProtocol: "Credit Note Reconcile", floorAction: "Verify receipt of 100% of credit for rejected produce.", priority: "High", riskLevel: "Low", consequence: "Silent bad-debt erosion.", proof: "Finance Match", verificationRequired: true, cadence: "weekly" },
                { id: "GR-VRC-04", technicalProtocol: "Vendor Hygiene Audit", floorAction: "Perform monthly inspection of poultry delivery truck.", priority: "High", riskLevel: "High", consequence: "Entering contaminated stock.", proof: "Audit Photo", verificationRequired: true, cadence: "monthly" },
                { id: "GR-VRC-05", technicalProtocol: "Packaging Compliance", floorAction: "Verify zero prohibited plastic crates from suppliers.", priority: "Low", riskLevel: "Low", consequence: "Store-level environmental fines.", proof: "Visual Audit", cadence: "weekly" },
                { id: "GR-VRC-06", technicalProtocol: "Order Quantity Accuracy", floorAction: "Compare 10 random invoices to original LPO.", priority: "Medium", riskLevel: "Low", consequence: "Undetected supplier over-billing.", proof: "Bill Audit", cadence: "weekly" },
                { id: "GR-VRC-07", technicalProtocol: "Emerg. Sourcing Prep", floorAction: "Maintain backup list for top 5 fresh SKUs.", priority: "High", riskLevel: "Low", consequence: "Supply chain freeze during strike.", proof: "Contact Sheet", cadence: "weekly" },
                { id: "GR-VRC-08", technicalProtocol: "Payment Auth Chain", floorAction: "Witness HOD approval for vendor payout > ₹50,000.", priority: "Medium", riskLevel: "Medium", consequence: "Unauthorized funds outflow.", proof: "Signed Voucher", verificationRequired: true, cadence: "daily" },
                { id: "GR-VRC-09", technicalProtocol: "Return-to-Vendor TAT", floorAction: "Ensure rejected goods leave the dock < 4 hours.", priority: "Low", riskLevel: "Low", consequence: "Dock clutter and disorganization.", proof: "Registry Note", cadence: "daily" },
                { id: "GR-VRC-10", technicalProtocol: "Vendor Briefing", floorAction: "Sync top 5 suppliers on upcoming peak-festival loads.", priority: "Medium", riskLevel: "Low", consequence: "Stock-out during high demand.", proof: "Meeting Note", cadence: "weekly" }
            ]
        },
        {
            title: "Waste & Disposal Guard",
            department: "Operations",
            frequency: "Daily",
            role: "Waste & Disposal Officer",
            summary: "Governance for organic and hazardous waste streams.",
            icon: "trash-2",
            tasks: [
                { id: "GR-WDO-01", technicalProtocol: "Food Waste Weight Log", floorAction: "Record total KG of discarded perishables twice daily.", priority: "High", riskLevel: "Low", consequence: "Unmonitored environmental footprint.", proof: "Weight Slip", verificationRequired: true, cadence: "daily" },
                { id: "GR-WDO-02", technicalProtocol: "Bio-Waste Removal TAT", floorAction: "Ensure pickup of wet-waste in < 24 hours.", priority: "High", riskLevel: "High", consequence: "Sewer fly and pest infestation.", proof: "Vendor Slip", verificationRequired: true, cadence: "daily" },
                { id: "GR-WDO-03", technicalProtocol: "Waste Segregation Pulse", floorAction: "Audit 10 random bins for paper/plastic accuracy.", priority: "Medium", riskLevel: "Low", consequence: "Environmental score penalty.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-WDO-04", technicalProtocol: "Garbage Room Hygiene", floorAction: "Verify 1% Lysol spray of the waste holding bay.", priority: "Medium", riskLevel: "Medium", consequence: "Foul odors and health risk.", proof: "Cleaning Log", cadence: "daily" },
                { id: "GR-WDO-05", technicalProtocol: "Expiry Disposal Witness", floorAction: "Witness opening of sealed packs pre-disposal to prevent theft.", priority: "High", riskLevel: "High", consequence: "Internal theft masked as waste.", proof: "Visual Confirm", verificationRequired: true, cadence: "daily" },
                { id: "GR-WDO-06", technicalProtocol: "Hazardous Part Segregation", floorAction: "Ensure zero batteries/bulbs in organic waste.", priority: "High", riskLevel: "High", consequence: "Environmental non-compliance fine.", proof: "Visual Audit", cadence: "weekly" },
                { id: "GR-WDO-07", technicalProtocol: "Composter Vitals", floorAction: "Log temp of organic digester unit (Target 55°C).", priority: "Low", riskLevel: "Low", consequence: "Inactive composting process.", proof: "Gauge Reading", cadence: "daily" },
                { id: "GR-WDO-08", technicalProtocol: "Scrap Value Recovery", floorAction: "Document KG of cardboard sold to recycler.", priority: "Low", riskLevel: "Low", consequence: "Unmonitored auxiliary revenue.", proof: "Receipt Note", cadence: "weekly" },
                { id: "GR-WDO-09", technicalProtocol: "Bin-Liner Par-level", floorAction: "Confirm 100+ spare biodegradable liners in stock.", priority: "Low", riskLevel: "Low", consequence: "Unsanitary bin use.", proof: "Stock Count", cadence: "weekly" },
                { id: "GR-WDO-10", technicalProtocol: "EOD Waste Clearance", floorAction: "Verify 100% of FOH bins are empty pre-closing.", priority: "Medium", riskLevel: "Low", consequence: "Overnight odors.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Sustainability & ESG",
            department: "ESG",
            frequency: "Daily",
            role: "ESG & Sustainability Lead",
            summary: "Environmental discipline and resource tracking.",
            icon: "leaf",
            tasks: [
                { id: "GR-ESG-01", technicalProtocol: "Energy Intensity Pulse", floorAction: "Compare daily KWH meter vs refrigeration set-points.", priority: "High", riskLevel: "Low", consequence: "Unmonitored energy wastage.", proof: "Meter Match", verificationRequired: true, cadence: "daily" },
                { id: "GR-ESG-02", technicalProtocol: "Plastic-Free Compliance", floorAction: "Verify zero prohibited bags in 100% of sections.", priority: "High", riskLevel: "High", consequence: "Heavy statutory environmental fines.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "GR-ESG-03", technicalProtocol: "Water Leakage Patrol", floorAction: "Check main meters at 3 AM for zero usage baseline.", priority: "High", riskLevel: "Medium", consequence: "Resource waste and structural damage.", proof: "Leak Log", verificationRequired: true, cadence: "daily" },
                { id: "GR-ESG-04", technicalProtocol: "CSR Activity Log", floorAction: "Document monthly unit-level food donation weights.", priority: "Low", riskLevel: "Low", consequence: "Loss of ESG social data points.", proof: "Registry Entry", cadence: "monthly" },
                { id: "GR-ESG-05", technicalProtocol: "Solar Yield Monitor", floorAction: "Log daily KWH from roof arrays (if applicable).", priority: "Low", riskLevel: "Low", consequence: "Lost renewable savings ROI.", proof: "Dashboard", cadence: "daily" },
                { id: "GR-ESG-06", technicalProtocol: "Night Setback Verify", floorAction: "Confirm AC shutdown in unoccupied staff zones.", priority: "Medium", riskLevel: "Low", consequence: "Massive energy overhead.", proof: "Walkthrough", cadence: "daily" },
                { id: "GR-ESG-07", technicalProtocol: "Refrigerant Leak Test", floorAction: "Execute electronic sniff-test for Gas R404A in plant.", priority: "High", riskLevel: "High", consequence: "Ozone depletion and asset damage.", proof: "Scan Log", verificationRequired: true, cadence: "monthly" },
                { id: "GR-ESG-08", technicalProtocol: "Vendor Sustainability", floorAction: "Verify 10 random invoices for 'Green Sourcing' flags.", priority: "Low", riskLevel: "Low", consequence: "Supply chain ethical drift.", proof: "Sample Check", cadence: "monthly" },
                { id: "GR-ESG-09", technicalProtocol: "Packaging Reduction", floorAction: "Audit use of recycled filler in e-com delivery packs.", priority: "Low", riskLevel: "Low", consequence: "High plastic footprint.", proof: "Sample Check", cadence: "weekly" },
                { id: "GR-ESG-10", technicalProtocol: "EOD Green Sign-off", floorAction: "Daily sustainability status initials.", priority: "Low", riskLevel: "Low", consequence: "Loss of ESG data integrity.", proof: "Signed Sheet", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Customer Support Logic",
            department: "Service",
            frequency: "Daily",
            role: "Customer Service Lead",
            summary: "Dispute resolution and first-touch impression.",
            icon: "smile",
            tasks: [
                { id: "GR-CSL-01", technicalProtocol: "Issue Loop Closure", floorAction: "Resolve 100% of floor complaints < 15 minutes.", priority: "High", riskLevel: "Low", consequence: "Escalated viral complaints.", proof: "Incident Log", cadence: "daily" },
                { id: "GR-CSL-02", technicalProtocol: "Feedback Kiosk Charge", floorAction: "Ensure tablets are operational and app is active.", priority: "Low", riskLevel: "Low", consequence: "Lost survey data.", proof: "Device Check", cadence: "daily" },
                { id: "GR-CSL-03", technicalProtocol: "Greeting Audit", floorAction: "Observe 10 guest interactions for brand greeting.", priority: "Low", riskLevel: "Low", consequence: "Cold service culture.", proof: "Audit Score", cadence: "daily" },
                { id: "GR-CSL-04", technicalProtocol: "Found Item Triage", floorAction: "Verify 100% of found items are tagged and logged.", priority: "Medium", riskLevel: "Low", consequence: "Liability for lost property.", proof: "Registry Audit", cadence: "daily" },
                { id: "GR-CSL-05", technicalProtocol: "Loyalty Registration", floorAction: "Offer program to 10 random non-member guests.", priority: "Low", riskLevel: "Low", consequence: "Lower LTV capture.", proof: "POS Record", cadence: "daily" },
                { id: "GR-CSL-06", technicalProtocol: "Service Recovery Call", floorAction: "Call 3 'detractor' guests to initiate recovery loop.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-LTV customers.", proof: "Call Log", cadence: "weekly" },
                { id: "GR-CSL-07", technicalProtocol: "Queue Engagement", floorAction: "Acknowledge next guest in line if wait > 5 mins.", priority: "Low", riskLevel: "Low", consequence: "Guest irritation.", proof: "Supervisor Obs", cadence: "hourly" },
                { id: "GR-CSL-08", technicalProtocol: "ORM Review Response", floorAction: "Reply to 100% of unit Google reviews < 12 hours.", priority: "Medium", riskLevel: "Low", consequence: "Viral reputation damage.", proof: "Dashboard", cadence: "daily" },
                { id: "GR-CSL-09", technicalProtocol: "Porter Service Ready", floorAction: "Verify availability of 2 staff for heavy-bag help.", priority: "Low", riskLevel: "Low", consequence: "Poor luxury service perception.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-CSL-10", technicalProtocol: "EOD Service Summary", floorAction: "Log top 3 recurring guest requests.", priority: "Low", riskLevel: "Low", consequence: "Zero operational feedback.", proof: "Log Note", cadence: "daily" }
            ]
        },
        {
            title: "Housekeeping & Hygiene",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Housekeeping & Hygiene Supervisor",
            summary: "Atomic zone-level sanitization and safety.",
            icon: "sparkles",
            tasks: [
                { id: "GR-HHS-01", technicalProtocol: "High-Touch Sanitization", floorAction: "Wipe trolley handles and elevator buttons with 70% IPA.", priority: "Medium", riskLevel: "Medium", consequence: "Viral transmission risk.", proof: "Cleaning Sheet", cadence: "hourly" },
                { id: "GR-HHS-02", technicalProtocol: "Restroom Odor Pulse", floorAction: "Audit 30-min cleaning log for public zones.", priority: "High", riskLevel: "Low", consequence: "Primary guest rage driver.", proof: "Hourly Sheet", verificationRequired: true, cadence: "hourly" },
                { id: "GR-HHS-03", technicalProtocol: "Spill Response TAT", floorAction: "Execute 2-min cleanup for all detected FOH spills.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Incident Log", verificationRequired: true, cadence: "incident-based" },
                { id: "GR-HHS-04", technicalProtocol: "Janitor Closet Safety", floorAction: "Confirm 100% of chemicals are in locked cabinets.", priority: "High", riskLevel: "High", consequence: "Accidental staff poisoning.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "GR-HHS-05", technicalProtocol: "Handwash Soap Flow", floorAction: "Refill 100% of dispensers in fresh prep zones.", priority: "Medium", riskLevel: "Medium", consequence: "Hygiene breakdown.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-HHS-06", technicalProtocol: "Floor Shine/Safety Scan", floorAction: "Inspect for slick spots without 'Wet Floor' signs.", priority: "High", riskLevel: "High", consequence: "Injury and lawsuit.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "GR-HHS-07", technicalProtocol: "Deep Clean Milestone", floorAction: "Verify completion of today's high-dusting schedule.", priority: "Low", riskLevel: "Low", consequence: "Dust buildup in air supply.", proof: "Photo", cadence: "daily" },
                { id: "GR-HHS-08", technicalProtocol: "Microfiber Color-Code", floorAction: "Verify red cloths for toilets; blue for surfaces.", priority: "High", riskLevel: "High", consequence: "Gross cross-contamination.", proof: "Visual Audit", cadence: "daily" },
                { id: "GR-HHS-09", technicalProtocol: "Trash Compaction Log", floorAction: "Verify 100% removal of lobby bins every 2 hours.", priority: "Low", riskLevel: "Low", consequence: "Odor and overflowing bins.", proof: "Log Entry", cadence: "hourly" },
                { id: "GR-HHS-10", technicalProtocol: "EOD Facility Reset", floorAction: "Final deep-mop of the produce floor post-closing.", priority: "Low", riskLevel: "Low", consequence: "Persistent store odors.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Night Replenishment Logic",
            department: "Stores",
            frequency: "Daily",
            role: "Night Replenishment Lead",
            summary: "After-hours volume fill and stockroom governance.",
            icon: "moon",
            tasks: [
                { id: "GR-NRL-01", technicalProtocol: "Aisle-100% Fill Seal", floorAction: "Physically verify 'Zero-Gap' status of 5 staple aisles.", priority: "High", riskLevel: "Low", consequence: "Disorganized morning opening.", proof: "Signed Sheet", verificationRequired: true, cadence: "daily" },
                { id: "GR-NRL-02", technicalProtocol: "Night Stock Velocity", floorAction: "Monitor pieces-per-man-hour for the night crew.", priority: "Medium", riskLevel: "Low", consequence: "Unproductive night payroll.", proof: "TAT Dashboard", cadence: "daily" },
                { id: "GR-NRL-03", technicalProtocol: "Staging Lane Safety", floorAction: "Clear 100% of empty pallets from main fire-lane.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment risk.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "GR-NRL-04", technicalProtocol: "Back-stock Aging", floorAction: "Identify 5 pallets with zero movement in > 21 days.", priority: "Low", riskLevel: "Low", consequence: "Hidden dead-stock capital.", proof: "Aging Report", cadence: "weekly" },
                { id: "GR-NRL-05", technicalProtocol: "Price Tag Refresh", floorAction: "Print and update all labels for the 8 AM price change.", priority: "High", riskLevel: "Medium", consequence: "Consumer court penalties.", proof: "System Match", verificationRequired: true, cadence: "daily" },
                { id: "GR-NRL-06", technicalProtocol: "Trash Cardboard Seal", floorAction: "Witness bailing of 100% of night-shift scrap.", priority: "Low", riskLevel: "Low", consequence: "Dock clutter.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-NRL-07", technicalProtocol: "Warehouse Key Custody", floorAction: "Confirm return of all secondary keys to night-safe.", priority: "High", riskLevel: "High", consequence: "Unauthorized after-hours access.", proof: "Seal Number", verificationRequired: true, cadence: "daily" },
                { id: "GR-NRL-08", technicalProtocol: "MHE Charge Cycle", floorAction: "Verify 100% of electric jacks are plugged in at 4 AM.", priority: "Medium", riskLevel: "Low", consequence: "Dead equipment at morning peak.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-NRL-09", technicalProtocol: "Night Security Check", floorAction: "Test 1 random motion sensor for trip-response.", priority: "Medium", riskLevel: "Medium", consequence: "Undetected night-heist.", proof: "Test Note", cadence: "daily" },
                { id: "GR-NRL-10", technicalProtocol: "Morning Handover Log", floorAction: "Initial summary of OOS items for the Store Manager.", priority: "High", riskLevel: "Low", consequence: "Information gap for GM.", proof: "Handover Log", cadence: "daily" }
            ]
        },
        {
            title: "Security & Shrinkage",
            department: "Security",
            frequency: "Daily",
            role: "Security & Shrinkage Officer",
            summary: "Digital and physical hardening for asset protection.",
            icon: "eye",
            tasks: [
                { id: "GR-SSO-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance.", proof: "System Screen", verificationRequired: true, cadence: "daily" },
                { id: "GR-SSO-02", technicalProtocol: "Sweet-hearting Audit", floorAction: "Cross-match 10 random 'High-Value' bills with CCTV.", priority: "High", riskLevel: "High", consequence: "Internal collusion theft at POS.", proof: "Audit Report", verificationRequired: true, cadence: "daily" },
                { id: "GR-SSO-03", technicalProtocol: "Vault Key Witness", floorAction: "Witness physical count of all high-security safe keys.", priority: "High", riskLevel: "High", consequence: "Unauthorized vault entry.", proof: "Dual-Sign Log", verificationRequired: true, cadence: "daily" },
                { id: "GR-SSO-04", technicalProtocol: "Perimeter Lighting", floorAction: "Replace all dark-spot bulbs in back alleyways.", priority: "Low", riskLevel: "Low", consequence: "Theft windows.", proof: "Walk Log", cadence: "daily" },
                { id: "GR-SSO-05", technicalProtocol: "Suspicious Object Sweep", floorAction: "Inspect foyer planters every 4 hours.", priority: "High", riskLevel: "High", consequence: "Safety/Security threat.", proof: "Patrol Log", cadence: "daily" },
                { id: "GR-SSO-06", technicalProtocol: "Visitor ID Capture", floorAction: "Verify 100% ID logging at the staff entrance.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "GR-SSO-07", technicalProtocol: "Alarm Arming Signal", floorAction: "Verify 'Armed' signal at central station post-closing.", priority: "High", riskLevel: "High", consequence: "Unmonitored facility.", proof: "Call Confirm", verificationRequired: true, cadence: "daily" },
                { id: "GR-SSO-08", technicalProtocol: "Security Badge Audit", floorAction: "Check 5 vendors for valid on-site vetting badges.", priority: "Medium", riskLevel: "Low", consequence: "Unvetted persons in stock room.", proof: "Sample Check", cadence: "daily" },
                { id: "GR-SSO-09", technicalProtocol: "Fire-Exit Perimeter", floorAction: "Clear all illegally parked bikes from exit lane.", priority: "High", riskLevel: "High", consequence: "Blocked emergency access.", proof: "Visual Check", verificationRequired: true, cadence: "hourly" },
                { id: "GR-SSO-10", technicalProtocol: "Guard Handover ID", floorAction: "Confirm 100% guard names match approved agency roster.", priority: "Medium", riskLevel: "Low", consequence: "Unvetted security deployment.", proof: "ID Match", cadence: "daily" }
            ]
        },
        {
            title: "Price Integrity Audit",
            department: "Compliance",
            frequency: "Daily",
            role: "Price Integrity Auditor",
            summary: "Governance for billing-to-shelf accuracy.",
            icon: "tag",
            tasks: [
                { id: "GR-PIA-01", technicalProtocol: "Shelf-POS Price Match", floorAction: "Scan 20 random items; verify 100% parity.", priority: "High", riskLevel: "High", consequence: "Consumer Metrology violations / Sealing.", proof: "Sample Match", verificationRequired: true, cadence: "daily" },
                { id: "GR-PIA-02", technicalProtocol: "Weighted SKU Audit", floorAction: "Match POS price/kg vs current board rate.", priority: "High", riskLevel: "Medium", consequence: "Checkout disputes.", proof: "Price List", cadence: "daily" },
                { id: "GR-PIA-03", technicalProtocol: "Promo Expiry Sweep", floorAction: "Remove signage for all campaigns ending tonight.", priority: "Medium", riskLevel: "Low", consequence: "False trade practice penalty.", proof: "Visual Check", cadence: "daily" },
                { id: "GR-PIA-04", technicalProtocol: "KVI Visibility", floorAction: "Confirm price-tags for Bread/Milk are oversized and clear.", priority: "Low", riskLevel: "Low", consequence: "Lost price-leadership.", proof: "Photo", cadence: "daily" },
                { id: "GR-PIA-05", technicalProtocol: "Markdown Label Trace", floorAction: "Verify 100% QR-readability of quick-sale stickers.", priority: "Medium", riskLevel: "Low", consequence: "Checkout delay.", proof: "Scan Note", cadence: "daily" }
            ]
        },
        {
            title: "Logistics & Delivery Control",
            department: "Logistics",
            frequency: "Daily",
            role: "Logistics & Delivery Lead",
            summary: "Governance for off-premise sales and fleet safety.",
            icon: "truck",
            tasks: [
                { id: "GR-LDL-01", technicalProtocol: "Bag-Seal Integrity", floorAction: "Verify 100% of delivery bags possess brand stickers.", priority: "High", riskLevel: "Low", consequence: "Rider tampering incident.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "GR-LDL-02", technicalProtocol: "Rider Sobriety Sample", floorAction: "Random breathalyzer for 5 local delivery bikes.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash liability.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "GR-LDL-03", technicalProtocol: "App Menu Availability", floorAction: "Match app stock-outs to physical shelf-gaps.", priority: "High", riskLevel: "Medium", consequence: "High cancellation penalties.", proof: "App Screen", cadence: "daily" },
                { id: "GR-LDL-04", technicalProtocol: "Delivery TAT Monitor", floorAction: "Target order-to-pickup < 15 mins during peak.", priority: "Medium", riskLevel: "Low", consequence: "Cold-chain abuse / rating drop.", proof: "TAT Log", cadence: "daily" },
                { id: "GR-LDL-05", technicalProtocol: "Packaging hygiene", floorAction: "Sanitize delivery dispatch table every shift.", priority: "Low", riskLevel: "Medium", consequence: "Cross-contamination.", proof: "Cleaning Note", cadence: "daily" }
            ]
        }
    ]
};
