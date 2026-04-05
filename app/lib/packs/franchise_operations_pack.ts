
import type { PremiumPack } from "@/lib/premium-packs";

export const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Franchise",
    description: "The definitive Sovereign v11.9 technical engine for multi-unit groups. Standardizing 200+ technical control points from Royalty protection to brand standards.",
    heroHeadline: "Scale Your Brand Without Losing Control",
    heroSubheadline: "Track every outlet, monitor brand standards, and protect your royalty stream—across 200+ technical control points.",
    pricingUrgency: "A single failed outlet or one brand-damaging incident costs 100x more than this system.",
    consultingAnchor: 15000,
    icon: "store",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Franchise Owners", "Heads of Operations", "Development Managers", "Regional Managers"],
    sampleItems: [
        { text: "<strong>Royalty Protection</strong>: Daily sales reconciliation against aggregator and bank records.", icon: "banknote" },
        { text: "<strong>Brand Visual QC</strong>: Signage, uniform, and ambiance audits across the group.", icon: "eye" },
        { text: "<strong>Local Marketing Command</strong>: Activation logs for seasonal promos and ORM.", icon: "megaphone" },
        { text: "<strong>Staff Cert Audit</strong>: Tracking franchisee training levels and grooming parity.", icon: "graduation-cap" },
        { text: "<strong>Supply Chain Integrity</strong>: Auditing vendor receiving to stop unvetted sourcing.", icon: "truck" }
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
                { id: "FR-CEO-10", technicalProtocol: "Final Strategic Sign-off", floorAction: "Execute weekly board summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of executive oversight.", proof: "Signed Summary" }
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
                { id: "FR-OPS-10", technicalProtocol: "Final Operational Closure", floorAction: "Daily group command sign-off initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Summary" }
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
                { id: "FR-REG-03", technicalProtocol: "Aggregator Margin Shield", floorAction: "Audit Zomato/Swiggy cancellations for 'Staff Fault'.", priority: "High", riskLevel: "Medium", consequence: "Paying commissions on non-revenue orders.", proof: "Cancel Log" },
                { id: "FR-REG-04", technicalProtocol: "Local Procurement Audit", floorAction: "Verify 100% of sourcing is from approved suppliers.", priority: "High", riskLevel: "High", consequence: "Food safety risk and contract violation.", proof: "Receiving Note" },
                { id: "FR-REG-05", technicalProtocol: "Site Maintenance P1s", floorAction: "Review unresolved technical breakdowns > 4 hours.", priority: "High", riskLevel: "Medium", consequence: "Lost revenue due to equipment failure.", proof: "Wrench Log" }
            ]
        },
        {
            title: "Franchisee Site Command",
            department: "Local Ops",
            frequency: "Daily",
            role: "Local Franchisee / Owner",
            summary: "Local business ownership and asset protection.",
            icon: "store",
            tasks: [
                { id: "FR-LFO-01", technicalProtocol: "Cash-to-Bank Integrity", floorAction: "Witness witnessed seal of cash bags for deposit.", priority: "High", riskLevel: "High", consequence: "Internal revenue theft.", proof: "Bank Slip" },
                { id: "FR-LFO-02", technicalProtocol: "Site Security Lockdown", floorAction: "Physically confirm all external doors and vault locked.", priority: "High", riskLevel: "High", consequence: "After-hours theft or burglary.", proof: "Visual Audit" },
                { id: "FR-LFO-03", technicalProtocol: "Local License Display", floorAction: "Verify current Trade/Health licenses are in public view.", priority: "High", riskLevel: "High", consequence: "Immediate government sealing.", proof: "Photo" },
                { id: "FR-LFO-04", technicalProtocol: "Store Manager Handover", floorAction: "Review Manager's shift report for critical deviations.", priority: "Medium", riskLevel: "Low", consequence: "Loss of operational continuity.", proof: "Signed Log" },
                { id: "FR-LFO-05", technicalProtocol: "Float Reconcile", floorAction: "Verify cash denominations in all cashier drawers.", priority: "High", riskLevel: "High", consequence: "Revenue leakage.", proof: "Float Sheet" }
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
                { id: "FR-SM-05", technicalProtocol: "Closing Gas/Power Seal", floorAction: "Verify all gas valves and non-essential ACs are OFF.", priority: "High", riskLevel: "High", consequence: "Fire hazard.", proof: "Closure Log" }
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
                { id: "FR-KIT-04", technicalProtocol: "Oil Quality Pulse", floorAction: "Check fryer TPM level (Target < 25%).", priority: "Medium", riskLevel: "Low", consequence: "Health risk.", proof: "TPM Reading" },
                { id: "FR-KIT-05", technicalProtocol: "Grease Trap Scan", floorAction: "Inspect traps for overflow risk.", priority: "High", riskLevel: "High", consequence: "Blockage and shutdown.", proof: "Visual Check" }
            ]
        },
        {
            title: "Service & Sales Pulse",
            department: "Service",
            frequency: "Daily",
            role: "Service / Sales Lead",
            summary: "Customer experience and upsell governance.",
            icon: "hand-platter",
            tasks: [
                { id: "FR-SRV-01", technicalProtocol: "Upsell Contest Update", floorAction: "Reward yesterday's top upseller during briefing.", priority: "Low", riskLevel: "Low", consequence: "Unmotivated sales team.", proof: "Leaderboard" },
                { id: "FR-SRV-02", technicalProtocol: "Side-Station Stock Pulse", floorAction: "Check cutlery/napkin par levels before rush.", priority: "Medium", riskLevel: "Low", consequence: "Service delays.", proof: "Visual Check" },
                { id: "FR-SRV-03", technicalProtocol: "Guest Wi-Fi Speed Test", floorAction: "Verify speed in dining area (Target > 20mbps).", priority: "Low", riskLevel: "Low", consequence: "Negative reviews.", proof: "Speed Test" }
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
                { id: "FR-DIG-03", technicalProtocol: "Google Maps Status Sync", floorAction: "Verify 'Live' hours match actual site status.", priority: "High", riskLevel: "Low", consequence: "Guests arrive to closed venue.", proof: "System Check" }
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
                { id: "FR-MNT-03", technicalProtocol: "HVAC Discharge Check", floorAction: "Log AC output temp in dining area (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort.", proof: "BMS Reading" }
            ]
        },
        {
            title: "Sourcing Integrity",
            department: "Stores",
            frequency: "Daily",
            role: "Procurement & Supply Specialist",
            summary: "Profit protection at the entry point.",
            icon: "truck",
            tasks: [
                { id: "FR-SUP-01", technicalProtocol: "Incoming Protein Audit", floorAction: "Check meat/dairy temp on arrival (< 5°C).", priority: "High", riskLevel: "High", consequence: "Foodborne illness.", proof: "Receiving Log" },
                { id: "FR-SUP-02", technicalProtocol: "Scale Calibration Test", floorAction: "Test store scales with 1kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Stock weight leakage.", proof: "Calibration Log" },
                { id: "FR-SUP-03", technicalProtocol: "Supplier FSSAI Verify", floorAction: "Check valid certs for local produce vendors.", priority: "High", riskLevel: "High", consequence: "Audit failure.", proof: "Cert File" }
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
                { id: "FR-FIN-03", technicalProtocol: "Aggregator Fee Match", floorAction: "Reconcile app sales vs. bank settlements.", priority: "Medium", riskLevel: "Low", consequence: "Overpaying platforms.", proof: "Match Note" }
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
                { id: "FR-SEC-03", technicalProtocol: "Wet-Floor Signage Guard", floorAction: "Confirm signage use during mopping.", priority: "Medium", riskLevel: "Medium", consequence: "Liability suits.", proof: "Visual Check" }
            ]
        }
    ]
};
