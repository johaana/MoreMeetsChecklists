
import type { PremiumPack } from "@/lib/premium-packs";

export const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operations System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Franchise",
    description: "The definitive Sovereign v11.9 technical engine for multi-unit groups. Hardening 130 technical control points from Royalty protection and Brand Parity to Franchisee Drift Detection.",
    heroHeadline: "Protect Brand Consistency and Revenue Across Every Outlet.",
    heroSubheadline: "Track 130+ technical control points to eliminate royalty leakage and brand dilution—without constant manual supervision.",
    pricingUrgency: "A single failed outlet or one brand-damaging legal incident costs 100x more than this system.",
    consultingAnchor: 15000,
    icon: "store",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Franchise Group Owners", "Heads of Operations", "Regional Managers", "Brand Expansion Directors", "Franchisees"],
    sampleItems: [
        { text: "<strong>Royalty Leakage Shield</strong>: Daily void-bill audits and aggregator parity logs to protect your revenue stream.", icon: "banknote" },
        { text: "<strong>Brand Parity Engine</strong>: Mandatory sensory audits for Scent, Music, and Temp to ensure a identical guest experience.", icon: "eye" },
        { text: "<strong>Unit Compliance Tracker</strong>: Verification for Legal Display Boards, FSSAI, and POSH policy visibility.", icon: "shield-check" },
        { text: "<strong>Supply Chain Integrity</strong>: Auditing vendor receiving to stop unvetted sourcing and protect food safety.", icon: "truck" },
        { text: "<strong>Franchise Drift Detection</strong>: Identifying unauthorized local promos or pricing deviations before they damage the brand.", icon: "alert-triangle" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure standards stay when local unit managers resign.", icon: "history" }
    ],
    checklists: [
        {
            title: "Global Brand Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Franchisor CEO / MD",
            summary: "High-level strategic oversight of brand equity and royalty health.",
            icon: "crown",
            tasks: [
                { id: "FR-CEO-01", technicalProtocol: "Royalty Collection Synthesis", floorAction: "Audit group royalty payments against POS reported sales.", priority: "High", riskLevel: "High", consequence: "Direct revenue loss and financial leakage from the network.", proof: "Financial Audit" },
                { id: "FR-CEO-02", technicalProtocol: "Network Risk Triage", floorAction: "Review 'Red' flags in the Global Incident Tracker for all units.", priority: "High", riskLevel: "High", consequence: "Systemic legal exposure and PR brand damage.", proof: "Incident Log" },
                { id: "FR-CEO-03", technicalProtocol: "Brand Standard Parity", floorAction: "Audit mystery shopper scores for bottom 10% of outlets.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution and inconsistent customer experience.", proof: "Audit Report" },
                { id: "FR-CEO-04", technicalProtocol: "Territory Expansion Pulse", floorAction: "Verify project milestones for units under construction.", priority: "Medium", riskLevel: "Medium", consequence: "Delayed launch and ROI gridlock.", proof: "Project Log" },
                { id: "FR-CEO-05", technicalProtocol: "Insurance Compliance Audit", floorAction: "Confirm valid Public Liability policies for 100% of franchisees.", priority: "High", riskLevel: "High", consequence: "Catastrophic financial liability for the franchisor.", proof: "Policy Registry" },
                { id: "FR-CEO-06", technicalProtocol: "Supply Chain Integrity", floorAction: "Review vendor pricing trends for core ingredients.", priority: "Low", riskLevel: "Low", consequence: "Franchisee dissatisfaction due to inflated costs.", proof: "Procurement Log" },
                { id: "FR-CEO-07", technicalProtocol: "Trademark Display Audit", floorAction: "Check photo evidence of correct signage usage in new units.", priority: "Medium", riskLevel: "Low", consequence: "IP legal risk and brand confusion.", proof: "Photo Audit" },
                { id: "FR-CEO-08", technicalProtocol: "Network CSAT Sentiment", floorAction: "Analyze Google/BMS keywords across the entire group.", priority: "High", riskLevel: "Low", consequence: "Lowering of overall brand ranking.", proof: "ORM Dashboard" },
                { id: "FR-CEO-09", technicalProtocol: "Franchisee Churn Risk", floorAction: "Review satisfaction surveys from franchise owners.", priority: "Low", riskLevel: "Low", consequence: "High owner turnover and litigation.", proof: "CSAT Report" },
                { id: "FR-CEO-10", technicalProtocol: "Unit Performance Leaderboard", floorAction: "Analyze bottom 3 units for immediate regional intervention.", priority: "High", riskLevel: "Medium", consequence: "Unit failure and closure.", proof: "Leaderboard" },
                { id: "FR-CEO-11", technicalProtocol: "Statutory License Matrix", floorAction: "Verify validity of master FSSAI and Trade certificates.", priority: "High", riskLevel: "High", consequence: "Legal shutdown of the entire brand.", proof: "Registry" },
                { id: "FR-CEO-12", technicalProtocol: "Marketing ROI Audit", floorAction: "Track seasonal campaign adoption across all units.", priority: "Medium", riskLevel: "Low", consequence: "Wasted corporate marketing spend.", proof: "Campaign Report" },
                { id: "FR-CEO-13", technicalProtocol: "Asset Depreciation Watch", floorAction: "Audit 2-year old units for scheduled CAPEX refresh/renovation.", priority: "Low", riskLevel: "Low", consequence: "Stale property appearance.", proof: "Walkthrough" },
                { id: "FR-CEO-14", technicalProtocol: "Labor Compliance Guard", floorAction: "Verify 100% of unit staff are on authorized payroll systems.", priority: "High", riskLevel: "High", consequence: "Labor law suits and strikes.", proof: "Payroll Sync" },
                { id: "FR-CEO-15", technicalProtocol: "Final Strategic Sign-off", floorAction: "Execute weekly board summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of executive oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Network Audit Command",
            department: "Operations",
            frequency: "Daily",
            role: "Head of Operations",
            summary: "Site-level readiness and operational parity enforcement.",
            icon: "shield-check",
            tasks: [
                { id: "FR-OPS-01", technicalProtocol: "Group Attendance Parity", floorAction: "Verify 100% presence of Unit Managers by 9:00 AM.", priority: "High", riskLevel: "Low", consequence: "Leadership gaps leading to morning chaos.", proof: "Attendance Log" },
                { id: "FR-OPS-02", technicalProtocol: "Ambiance Standard Check", floorAction: "Audit lobby temp and scent across 3 random units remotely.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent guest experience.", proof: "Daily Log" },
                { id: "FR-OPS-03", technicalProtocol: "Menu Availability Sync", floorAction: "Verify '86' items on aggregators match kitchen stock.", priority: "High", riskLevel: "Medium", consequence: "High cancellation rates and guest rage.", proof: "App Check" },
                { id: "FR-OPS-04", technicalProtocol: "Unit Hygiene Pulse", floorAction: "Review restroom hourly logs for high-traffic units.", priority: "High", riskLevel: "Low", consequence: "Primary driver of 1-star reviews.", proof: "Hourly Sheet" },
                { id: "FR-OPS-05", technicalProtocol: "Grooming & Uniform Parity", floorAction: "Audit staff grooming scores from morning briefings.", priority: "Low", riskLevel: "Low", consequence: "Professional brand dilution.", proof: "Briefing Log" },
                { id: "FR-OPS-06", technicalProtocol: "Local Marketing Pulse", floorAction: "Verify today's campaign posters are displayed in units.", priority: "Medium", riskLevel: "Low", consequence: "Campaign failure and wasted spend.", proof: "Campaign Log" },
                { id: "FR-OPS-07", technicalProtocol: "Unit Waste Validation", floorAction: "Reconcile daily waste logs from 2 random sites.", priority: "High", riskLevel: "Medium", consequence: "Untracked profit leakage.", proof: "Waste Sheet" },
                { id: "FR-OPS-08", technicalProtocol: "Complaints Resolve TAT", floorAction: "Verify 100% of guest issues resolved in < 4 hours.", priority: "High", riskLevel: "High", consequence: "Viral reputation damage.", proof: "Issue Log" },
                { id: "FR-OPS-09", technicalProtocol: "POS System Health", floorAction: "Confirm 100% cloud-sync for all billing terminals.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate real-time sales reporting.", proof: "System Screen" },
                { id: "FR-OPS-10", technicalProtocol: "SOP Drift Detection", floorAction: "Random check of 5 tasks in the daily ledger for any unit.", priority: "Medium", riskLevel: "Medium", consequence: "Slipping standards.", proof: "Audit Score" },
                { id: "FR-OPS-11", technicalProtocol: "Inventory Stockout Alert", floorAction: "Review 'Critical Low' alerts for group supply chain.", priority: "High", riskLevel: "High", consequence: "Operational halt.", proof: "Stock Report" },
                { id: "FR-OPS-12", technicalProtocol: "Aggregator Margin Shield", floorAction: "Audit Zomato/Swiggy cancellations for 'Staff Fault'.", priority: "High", riskLevel: "Medium", consequence: "Wasted commission fees.", proof: "Cancel Log" },
                { id: "FR-OPS-13", technicalProtocol: "Unit Ambiance Logic", floorAction: "Verify music playlist matches current brand daypart.", priority: "Low", riskLevel: "Low", consequence: "Wrong energy in outlet.", proof: "Visual Check" },
                { id: "FR-OPS-14", technicalProtocol: "Shift Handover Bridge", floorAction: "Verify 100% completion of Manager handover logs.", priority: "Medium", riskLevel: "Low", consequence: "Loss of continuity.", proof: "Signed Log" },
                { id: "FR-OPS-15", technicalProtocol: "Final Operational Closure", floorAction: "Daily group command sign-off initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "P&L & Performance Shield",
            department: "Regional",
            frequency: "Daily",
            role: "Regional Manager",
            summary: "Profit protection and unit-level performance coaching.",
            icon: "trending-up",
            tasks: [
                { id: "FR-REG-01", technicalProtocol: "Unit Yield Analysis", floorAction: "Reconcile high-value protein usage vs. POS sales.", priority: "High", riskLevel: "High", consequence: "Internal theft and margin erosion.", proof: "Yield Sheet" },
                { id: "FR-REG-02", technicalProtocol: "Upsell Performance Pulse", floorAction: "Check today's 'Top Upseller' leaderboard for the region.", priority: "Low", riskLevel: "Low", consequence: "Stagnant per-capita spending.", proof: "Leaderboard" },
                { id: "FR-REG-03", technicalProtocol: "Aggregator Parity Sync", floorAction: "Match platform orders against physical dispatch logs.", priority: "High", riskLevel: "Medium", consequence: "Unbilled revenue loss.", proof: "Match Note" },
                { id: "FR-REG-04", technicalProtocol: "Local Procurement Audit", floorAction: "Verify 100% of sourcing is from approved suppliers.", priority: "High", riskLevel: "High", consequence: "Food safety risk and contract violation.", proof: "Receiving Note" },
                { id: "FR-REG-05", technicalProtocol: "Site Maintenance P1s", floorAction: "Review unresolved technical breakdowns > 4 hours.", priority: "High", riskLevel: "Medium", consequence: "Lost revenue due to equipment failure.", proof: "Wrench Log" },
                { id: "FR-REG-06", technicalProtocol: "Manager Onboarding Progress", floorAction: "Verify training completion for new Unit leads.", priority: "Medium", riskLevel: "Low", consequence: "Under-skilled leadership.", proof: "Matrix" },
                { id: "FR-REG-07", technicalProtocol: "Regional Hygiene Pulse", floorAction: "Review restroom scores for all 5 units.", priority: "High", riskLevel: "Low", consequence: "Mass reputation drop.", proof: "Scorecard" },
                { id: "FR-REG-08", technicalProtocol: "Cash-to-Bank Verification", floorAction: "Audit deposit slips for 2 random units.", priority: "High", riskLevel: "High", consequence: "Direct theft.", proof: "Bank Slip" },
                { id: "FR-REG-09", technicalProtocol: "Local Promo Compliance", floorAction: "Check for unauthorized discounting in units.", priority: "Medium", riskLevel: "Medium", consequence: "Margin leakage.", proof: "Audit Sheet" },
                { id: "FR-REG-10", technicalProtocol: "Regional Summary sign-off", floorAction: "Final daily regional command initials.", priority: "High", riskLevel: "Low", consequence: "Loss of oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Territory Expansion Readiness",
            department: "Expansion",
            frequency: "Pre-opening",
            role: "Brand Expansion Director",
            summary: "Governance for new unit launches and territory integrity.",
            icon: "map-pin",
            tasks: [
                { id: "FR-EXP-01", technicalProtocol: "Franchise Launch Readiness Audit", floorAction: "Execute final 100-point pre-opening physical audit.", priority: "High", riskLevel: "High", consequence: "Sub-par launch and immediate brand damage.", proof: "Audit Score" },
                { id: "FR-EXP-02", technicalProtocol: "Vendor Onboarding Validation", floorAction: "Verify all local vendors are approved by HQ Procurement.", priority: "High", riskLevel: "Medium", consequence: "Unvetted supply chain risks.", proof: "Vendor List" },
                { id: "FR-EXP-03", technicalProtocol: "Brand Signage Approval", floorAction: "Photo-verify correct placement and lighting of main storefront sign.", priority: "High", riskLevel: "Low", consequence: "Trademark misuse and visual inconsistency.", proof: "Photo" },
                { id: "FR-EXP-04", technicalProtocol: "Staff Certification Completion", floorAction: "Verify 100% of launch staff have completed HQ training.", priority: "High", riskLevel: "High", consequence: "Operational collapse on Day 1.", proof: "Training Matrix" },
                { id: "FR-EXP-05", technicalProtocol: "Launch Inventory Verification", floorAction: "Audit opening stock levels for core ingredients and packaging.", priority: "High", riskLevel: "Medium", consequence: "Stockouts during grand opening.", proof: "Count Sheet" },
                { id: "FR-EXP-06", technicalProtocol: "Local Compliance Clearance", floorAction: "Confirm all municipal and fire NOCs are active for the site.", priority: "High", riskLevel: "High", consequence: "Immediate government closure.", proof: "Cert File" },
                { id: "FR-EXP-07", technicalProtocol: "Soft-Launch Rehearsal Audit", floorAction: "Simulate peak-hour orders and log kitchen/service TAT.", priority: "Medium", riskLevel: "Low", consequence: "Slow service during real launch.", proof: "Drill Log" },
                { id: "FR-EXP-08", technicalProtocol: "Territory Cannibalization Review", floorAction: "Audit delivery zone overlap with existing units.", priority: "Medium", riskLevel: "Low", consequence: "Franchisee disputes and split revenue.", proof: "Map Sync" },
                { id: "FR-EXP-09", technicalProtocol: "IT Infrastructure Dry-Run", floorAction: "Test POS, KDS, and Wi-Fi load stability.", priority: "High", riskLevel: "Medium", consequence: "Billing failure during first rush.", proof: "System Test" },
                { id: "FR-EXP-10", technicalProtocol: "Final Launch Sign-off", floorAction: "Executive authorization to open to public.", priority: "High", riskLevel: "Low", consequence: "Unauthorized launch.", proof: "Signed Form" }
            ]
        },
        {
            title: "Brand Parity Intelligence",
            department: "Brand",
            frequency: "Weekly",
            role: "Brand Auditor",
            summary: "Monitors visual and sensory consistency across the network.",
            icon: "eye",
            tasks: [
                { id: "FR-BPI-01", technicalProtocol: "Menu Parity Audit", floorAction: "Verify zero unauthorized menu items or price deviations.", priority: "High", riskLevel: "Medium", consequence: "Brand dilution and royalty confusion.", proof: "Menu Scan" },
                { id: "FR-BPI-02", technicalProtocol: "Uniform Compliance Pulse", floorAction: "Audit 5 staff photos for correct uniform and grooming.", priority: "Low", riskLevel: "Low", consequence: "Loss of professional brand image.", proof: "Photo Audit" },
                { id: "FR-BPI-03", technicalProtocol: "Packaging Consistency Check", floorAction: "Verify current version of branded boxes/bags in use.", priority: "Medium", riskLevel: "Low", consequence: "Stale or incorrect branding.", proof: "Visual Check" },
                { id: "FR-BPI-04", technicalProtocol: "Local Promo Approval Triage", floorAction: "Audit store-specific offers for HQ alignment.", priority: "High", riskLevel: "Medium", consequence: "Margin-eroding unauthorized discounts.", proof: "Registry" },
                { id: "FR-BPI-05", technicalProtocol: "Brand Music & Scent Sync", floorAction: "Confirm playlist and diffuser match current season.", priority: "Low", riskLevel: "Low", consequence: "Inconsistent sensory experience.", proof: "Visual Audit" },
                { id: "FR-BPI-06", technicalProtocol: "Storefront Visual Parity", floorAction: "Audit VM displays vs. national planogram.", priority: "Medium", riskLevel: "Low", consequence: "Poor visual consistency.", proof: "Photo" },
                { id: "FR-BPI-07", technicalProtocol: "Social Media Violation Scan", floorAction: "Check local unit social handles for unauthorized content.", priority: "High", riskLevel: "Medium", consequence: "PR damage and brand misuse.", proof: "Dashboard" },
                { id: "FR-BPI-08", technicalProtocol: "Pricing Deviation Watch", floorAction: "Match system prices against printed menu and aggregators.", priority: "High", riskLevel: "High", consequence: "Customer disputes and legal risk.", proof: "Audit Sheet" },
                { id: "FR-BPI-09", technicalProtocol: "In-Store Photography Audit", floorAction: "Random check of store cleanliness via live video/photos.", priority: "Medium", riskLevel: "Low", consequence: "Slipping hygiene standards.", proof: "Photo Log" },
                { id: "FR-BPI-10", technicalProtocol: "Final Parity Sign-off", floorAction: "Weekly brand integrity initials.", priority: "High", riskLevel: "Low", consequence: "Loss of brand control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Franchisee Financial Risk",
            department: "Finance",
            frequency: "Weekly",
            role: "Group Financial Controller",
            summary: "Advanced detection of financial stress and royalty anomalies.",
            icon: "trending-down",
            tasks: [
                { id: "FR-FFR-01", technicalProtocol: "Royalty Delay Tracker", floorAction: "Identify units with > 48h payment lag.", priority: "High", riskLevel: "High", consequence: "Network-wide cash flow strain.", proof: "Aging Report" },
                { id: "FR-FFR-02", technicalProtocol: "Sales Suppression Anomaly", floorAction: "Audit units with high 'No-Sale' or 'Drawer-Open' counts.", priority: "High", riskLevel: "High", consequence: "Systemic royalty theft.", proof: "System Log" },
                { id: "FR-FFR-03", technicalProtocol: "Cash Deposit Compliance", floorAction: "Match bank deposit slips against EOD cash logs.", priority: "High", riskLevel: "High", consequence: "Internal theft and risk of robbery.", proof: "Bank Slip" },
                { id: "FR-FFR-04", technicalProtocol: "Sudden Sales-Drop Detection", floorAction: "Review units with > 20% WoW drop in revenue.", priority: "High", riskLevel: "Medium", consequence: "Hidden unit distress or local competition.", proof: "Variance Report" },
                { id: "FR-FFR-05", technicalProtocol: "Vendor Debt Escalation", floorAction: "Check for unpaid vendor invoices at the unit level.", priority: "High", riskLevel: "High", consequence: "Supply chain cut-off for the unit.", proof: "Statement" },
                { id: "FR-FFR-06", technicalProtocol: "Inventory Shrinkage Pattern", floorAction: "Analyze units with high raw-material vs sales variance.", priority: "High", riskLevel: "High", consequence: "Unmonitored internal theft.", proof: "Yield Sheet" },
                { id: "FR-FFR-07", technicalProtocol: "Refund Spike Analysis", floorAction: "Audit reason codes for units with high refund volume.", priority: "High", riskLevel: "Medium", consequence: "Theft masked as customer returns.", proof: "System Report" },
                { id: "FR-FFR-08", technicalProtocol: "Labor-Cost Variance Review", floorAction: "Audit units with labor cost > 25% of gross sales.", priority: "Medium", riskLevel: "Low", consequence: "Unit unprofitability.", proof: "Payroll Log" },
                { id: "FR-FFR-09", technicalProtocol: "High-Discount Transaction Check", floorAction: "Audit bills with > 50% discount applied.", priority: "High", riskLevel: "Medium", consequence: "Royalty leakage via fake discounts.", proof: "Audit Sheet" },
                { id: "FR-FFR-10", technicalProtocol: "Final Risk Sign-off", floorAction: "Weekly financial risk summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of financial oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Franchise Partner Site Command",
            department: "Local Ops",
            frequency: "Daily",
            role: "Franchise Partner",
            summary: "Local business ownership and asset protection.",
            icon: "store",
            tasks: [
                { id: "FR-LFO-01", technicalProtocol: "Cash-to-Bank Integrity", floorAction: "Witness witnessed seal of cash bags for deposit.", priority: "High", riskLevel: "High", consequence: "Internal revenue theft.", proof: "Bank Slip" },
                { id: "FR-LFO-02", technicalProtocol: "Site Security Lockdown", floorAction: "Physically confirm all external doors and vault locked.", priority: "High", riskLevel: "High", consequence: "After-hours theft or burglary.", proof: "Visual Audit" },
                { id: "FR-LFO-03", technicalProtocol: "Local License Display", floorAction: "Verify current Trade/Health licenses are in public view.", priority: "High", riskLevel: "High", consequence: "Immediate government sealing.", proof: "Photo" },
                { id: "FR-LFO-04", technicalProtocol: "Store Manager Handover", floorAction: "Review Manager's shift report for critical deviations.", priority: "Medium", riskLevel: "Low", consequence: "Loss of operational continuity.", proof: "Signed Log" },
                { id: "FR-LFO-05", technicalProtocol: "Float Reconcile", floorAction: "Verify cash denominations in all cashier drawers.", priority: "High", riskLevel: "High", consequence: "Revenue leakage.", proof: "Float Sheet" },
                { id: "FR-LFO-06", technicalProtocol: "Utility Vitals Sync", floorAction: "Log KWH meter to identify energy wastage.", priority: "Low", riskLevel: "Low", consequence: "Inflated overheads.", proof: "Meter Log" },
                { id: "FR-LFO-07", technicalProtocol: "Staff Grievance Pulse", floorAction: "Hold 2-min chat with kitchen staff to check morale.", priority: "Low", riskLevel: "Low", consequence: "Staff churn.", proof: "Diary Note" },
                { id: "FR-LFO-08", technicalProtocol: "Legal Board Accuracy", floorAction: "Verify staff wages and hours posted as per law.", priority: "High", riskLevel: "High", consequence: "Labor dept fines.", proof: "Photo" },
                { id: "FR-LFO-09", technicalProtocol: "Perimeter Lighting Audit", floorAction: "Verify alley and roof lighting active.", priority: "Medium", riskLevel: "Medium", consequence: "Theft concealment.", proof: "Visual Check" },
                { id: "FR-LFO-10", technicalProtocol: "Daily Owner sign-off", floorAction: "Final site strategic closure initials.", priority: "High", riskLevel: "Low", consequence: "Loss of control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Store Management Command",
            department: "Local Ops",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Daily floor command and service readiness.",
            icon: "concierge-bell",
            tasks: [
                { id: "FR-SM-01", technicalProtocol: "Shift Briefing Execution", floorAction: "Brief team on daily target and 'Special of the Day'.", priority: "High", riskLevel: "Low", consequence: "Disconnected service team.", proof: "Briefing Log" },
                { id: "FR-SM-02", technicalProtocol: "Lobby Ambiance Audit", floorAction: "Check music, scent, and temp (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Poor guest first-touch.", proof: "Daily Log" },
                { id: "FR-SM-03", technicalProtocol: "Bathroom Hygiene Scan", floorAction: "Verify toilets cleaned every 60 mins.", priority: "High", riskLevel: "Low", consequence: "Negative reviews.", proof: "Hourly Sheet" },
                { id: "FR-SM-04", technicalProtocol: "Uniform & ID Check", floorAction: "Inspect staff grooming and name-tag visibility.", priority: "Low", riskLevel: "Low", consequence: "Brand image drop.", proof: "Visual Audit" },
                { id: "FR-SM-05", technicalProtocol: "Closing Gas/Power Seal", floorAction: "Verify all gas valves and non-essential ACs are OFF.", priority: "High", riskLevel: "High", consequence: "Fire hazard.", proof: "Closure Log" },
                { id: "FR-SM-06", technicalProtocol: "Counter Presentation QC", floorAction: "Check for crumbs or fingerprints on billing desk.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional image.", proof: "Visual Check" },
                { id: "FR-SM-07", technicalProtocol: "POS Paper Backup", floorAction: "Ensure 2 spare bill rolls at every terminal.", priority: "Low", riskLevel: "Low", consequence: "Rush-hour service halt.", proof: "Stock Check" },
                { id: "FR-SM-08", technicalProtocol: "Wet Floor Signage Guard", floorAction: "Ensure signs used during all mopping cycles.", priority: "High", riskLevel: "High", consequence: "Liability suit.", proof: "Visual Check" },
                { id: "FR-SM-09", technicalProtocol: "Staff Meal Discipline", floorAction: "Verify staff eat only in designated break zone.", priority: "Low", riskLevel: "Low", consequence: "Hygiene risk in service areas.", proof: "Walkthrough" },
                { id: "FR-SM-10", technicalProtocol: "Manager Shift Closure", floorAction: "Final site operational initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Kitchen & HACCP Parity",
            department: "Production",
            frequency: "Daily",
            role: "Kitchen / Production Lead",
            summary: "Product quality and zero-fail food safety protocols.",
            icon: "utensils-crossed",
            tasks: [
                { id: "FR-KIT-01", technicalProtocol: "Thermal Integrity Pulse (CCP)", floorAction: "Log fridge/freezer temps (Target < 5°C).", priority: "High", riskLevel: "High", consequence: "Mass food poisoning and brand collapse.", proof: "Temp Log" },
                { id: "FR-KIT-02", technicalProtocol: "Sanitization Validation", floorAction: "Sanitize counters and verify ppm with test strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination.", proof: "Test Strip" },
                { id: "FR-KIT-03", technicalProtocol: "FIFO Inventory Sweep", floorAction: "Verify date-labels on all prepped ingredients.", priority: "High", riskLevel: "High", consequence: "Serving expired product.", proof: "Visual Audit" },
                { id: "FR-KIT-04", technicalProtocol: "Oil Quality Pulse", floorAction: "Check fryer oil TPM level (Target < 25%).", priority: "Medium", riskLevel: "Low", consequence: "Health risk.", proof: "TPM Reading" },
                { id: "FR-KIT-05", technicalProtocol: "Grease Trap Scan", floorAction: "Inspect traps for overflow risk.", priority: "High", riskLevel: "High", consequence: "Blockage and shutdown.", proof: "Visual Check" },
                { id: "FR-KIT-06", technicalProtocol: "Knife Sharpness Audit", floorAction: "Verify safety and balance of all prep knives.", priority: "Low", riskLevel: "Medium", consequence: "Cuts and injury.", proof: "Visual Audit" },
                { id: "FR-KIT-07", technicalProtocol: "Allergen Station Audit", floorAction: "Ensure zero contact between nut-free and general prep.", priority: "High", riskLevel: "High", consequence: "Fatal shock.", proof: "Visual Check" },
                { id: "FR-KIT-08", technicalProtocol: "Dishwasher Final Rinse", floorAction: "Log rinse temp (must reach 82°C).", priority: "High", riskLevel: "High", consequence: "Audit failure.", proof: "Temp Reading" },
                { id: "FR-KIT-09", technicalProtocol: "Pest Bait Monitor", floorAction: "Check traps in dry-store corner.", priority: "High", riskLevel: "High", consequence: "Infestation.", proof: "Pest Log" },
                { id: "FR-KIT-10", technicalProtocol: "Kitchen Shutdown Seal", floorAction: "Witness witnessed seal of all gas valves.", priority: "High", riskLevel: "High", consequence: "Fire.", proof: "Signed Log" }
            ]
        },
        {
            title: "Customer Experience & CX",
            department: "Service",
            frequency: "Daily",
            role: "Customer Experience Lead",
            summary: "Customer experience and upsell governance.",
            icon: "hand-platter",
            tasks: [
                { id: "FR-SRV-01", technicalProtocol: "Upsell Briefing", floorAction: "Set target for 'Combo of the Day' during briefing.", priority: "Low", riskLevel: "Low", consequence: "Lost revenue opportunity.", proof: "Briefing Note" },
                { id: "FR-SRV-02", technicalProtocol: "Cutlery Polish Audit", floorAction: "Spot check 10 forks for smudges or spots.", priority: "Medium", riskLevel: "Low", consequence: "Luxury brand dilution.", proof: "Sample Check" },
                { id: "FR-SV-03", technicalProtocol: "Guest Wi-Fi Speed Test", floorAction: "Verify speed in dining area (Target > 20mbps).", priority: "Low", riskLevel: "Low", consequence: "Negative reviews.", proof: "Speed Test" },
                { id: "FR-SRV-04", technicalProtocol: "Side-Station Par Level", floorAction: "Verify stock of napkins and sugar sachets.", priority: "Medium", riskLevel: "Low", consequence: "Service delay.", proof: "Stock Check" },
                { id: "FR-SRV-05", technicalProtocol: "Table Turning TAT", floorAction: "Monitor time from guest exit to 'Table Ready'.", priority: "Medium", riskLevel: "Low", consequence: "Revenue bottleneck.", proof: "TAT Log" }
            ]
        },
        {
            title: "Digital Reputation Shield",
            department: "Marketing",
            frequency: "Daily",
            role: "Digital & ORM Lead",
            summary: "Protects the digital brand and reservation pipeline.",
            icon: "globe",
            tasks: [
                { id: "FR-DIG-01", technicalProtocol: "Review Response Pulse", floorAction: "Reply to all Google/BMS reviews < 24h.", priority: "High", riskLevel: "Medium", consequence: "Ranking drop.", proof: "Dashboard" },
                { id: "FR-DIG-02", technicalProtocol: "Social Inquiry TAT", floorAction: "Answer all DMs/WhatsApp inquiries < 30m.", priority: "Medium", riskLevel: "Low", consequence: "Lost booking revenue.", proof: "Inbox Clear" },
                { id: "FR-DIG-03", technicalProtocol: "Google Maps Status Sync", floorAction: "Verify 'Live' hours match actual site status.", priority: "High", riskLevel: "Low", consequence: "Guests arrive to closed venue.", proof: "System Check" },
                { id: "FR-DIG-04", technicalProtocol: "Instagram Content Hub", floorAction: "Post today's 'Kitchen-Behind-The-Scenes' story.", priority: "Low", riskLevel: "Low", consequence: "Stale marketing presence.", proof: "Screenshot" },
                { id: "FR-DIG-05", technicalProtocol: "Local SEO Audit", floorAction: "Check local keywords for 'Best [Cuisine] in [City]'.", priority: "Low", riskLevel: "Low", consequence: "Lost traffic.", proof: "Dashboard" }
            ]
        },
        {
            title: "Maintenance & IT Uptime",
            department: "Technical",
            frequency: "Daily",
            role: "Maintenance & IT Lead",
            summary: "Digital backbone and infrastructure protection.",
            icon: "wrench",
            tasks: [
                { id: "FR-MNT-01", technicalProtocol: "POS Uptime Audit", floorAction: "Verify all printers and tablets are connected.", priority: "High", riskLevel: "Low", consequence: "Billing failure during rush.", proof: "Print Test" },
                { id: "FR-MNT-02", technicalProtocol: "Emergency Power Readiness", floorAction: "Inspect DG fuel and battery status.", priority: "High", riskLevel: "High", consequence: "Total blackout.", proof: "Fuel Log" },
                { id: "FR-MNT-03", technicalProtocol: "HVAC Discharge Check", floorAction: "Log AC output temp in dining area (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort.", proof: "BMS Reading" },
                { id: "FR-MNT-04", technicalProtocol: "Internet Failover Test", floorAction: "Confirm backup ISP is functional.", priority: "High", riskLevel: "Medium", consequence: "Operational halt.", proof: "Ping Test" },
                { id: "FR-MNT-05", technicalProtocol: "CCTV Node Check", floorAction: "Confirm 100% camera visibility on admin phone.", priority: "High", riskLevel: "High", consequence: "Blind spots.", proof: "System Screen" }
            ]
        },
        {
            title: "Sourcing Integrity",
            department: "Stores",
            frequency: "Daily",
            role: "Procurement Specialist",
            summary: "Profit protection at the entry point.",
            icon: "truck",
            tasks: [
                { id: "FR-SUP-01", technicalProtocol: "Incoming Protein Audit", floorAction: "Check meat/dairy temp on arrival (< 5°C).", priority: "High", riskLevel: "High", consequence: "Foodborne illness.", proof: "Receiving Log" },
                { id: "FR-SUP-02", technicalProtocol: "Scale Calibration Test", floorAction: "Test store scales with 1kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Stock weight leakage.", proof: "Calibration Log" },
                { id: "FR-SUP-03", technicalProtocol: "Supplier FSSAI Verify", floorAction: "Check valid certs for local produce vendors.", priority: "High", riskLevel: "High", consequence: "Audit failure.", proof: "Cert File" },
                { id: "FR-SUP-04", technicalProtocol: "Inventory Blind Count", floorAction: "Random audit of 5 high-value SKUs.", priority: "High", riskLevel: "High", consequence: "Internal theft.", proof: "Count Sheet" },
                { id: "FR-SUP-05", technicalProtocol: "Delivery Punctuality", floorAction: "Log vendor arrival time vs window.", priority: "Low", riskLevel: "Low", consequence: "Prep delays.", proof: "Log Match" }
            ]
        },
        {
            title: "Finance & Accounts Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance & Accounts",
            summary: "Revenue reconciliation and royalty governance.",
            icon: "banknote",
            tasks: [
                { id: "FR-FIN-01", technicalProtocol: "Revenue Reconcile Pulse", floorAction: "Match cash in hand to POS daily report.", priority: "High", riskLevel: "High", consequence: "Internal cashier theft.", proof: "Settlement Log" },
                { id: "FR-FIN-02", technicalProtocol: "Void Bill Authorization", floorAction: "Audit 100% of deleted bills for shift.", priority: "High", riskLevel: "Medium", consequence: "Theft masked as errors.", proof: "POS Audit" },
                { id: "FR-FIN-03", technicalProtocol: "Aggregator Fee Match", floorAction: "Reconcile app sales vs. bank settlements.", priority: "Medium", riskLevel: "Low", consequence: "Overpaying platforms.", proof: "Match Note" },
                { id: "FR-FIN-04", technicalProtocol: "Petty Cash Blind Count", floorAction: "Witness witnessed seal of cash bags.", priority: "High", riskLevel: "High", consequence: "Loss of profit.", proof: "Signed Note" },
                { id: "FR-FIN-05", technicalProtocol: "Vendor Payment TAT", floorAction: "Verify all invoices entered in < 24h.", priority: "Medium", riskLevel: "Low", consequence: "Inaccurate stock value.", proof: "Ledger Audit" }
            ]
        },
        {
            title: "Occupancy Safety & EHS",
            department: "Safety",
            frequency: "Daily",
            role: "Safety & EHS Officer",
            summary: "Perimeter hardening and life-safety protocols.",
            icon: "shield-alert",
            tasks: [
                { id: "FR-SEC-01", technicalProtocol: "Fire Exit Clearance Pulse", floorAction: "Verify all fire exits are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment.", proof: "Patrol Log" },
                { id: "FR-SEC-02", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence.", proof: "System Screen" },
                { id: "FR-SEC-03", technicalProtocol: "Wet-Floor Signage Guard", floorAction: "Confirm signage use during all mopping cycles.", priority: "High", riskLevel: "High", consequence: "Liability suit.", proof: "Visual Check" },
                { id: "FR-SEC-04", technicalProtocol: "POSH Policy Display", floorAction: "Confirm policy is posted in staff break-rooms.", priority: "High", riskLevel: "High", consequence: "Severe legal liability.", proof: "Photo" },
                { id: "FR-SEC-05", technicalProtocol: "Staff Health Matrix", floorAction: "Verify health certs for 100% of food handlers.", priority: "High", riskLevel: "High", consequence: "Regulatory shutdown.", proof: "Cert File" }
            ]
        }
    ]
};
