
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
    description: "The definitive Sovereign v15.4 technical engine for multi-unit groups. Hardening 130 technical control points from Royalty protection to Network Drift Detection.",
    icon: "store",
    badgeText: "V15.4 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Franchisors", "Heads of Operations", "Regional Managers", "Brand Expansion Directors", "Franchisees"],
    sampleItems: [
        { text: "<strong>Royalty Shield</strong>: Daily void-bill audits and aggregator payout mismatch logs to protect revenue.", icon: "banknote" },
        { text: "<strong>Network Drift Detection</strong>: Audit protocols for recipe deviation and menu photo mismatches across branches.", icon: "eye" },
        { text: "<strong>Expansion Command</strong>: Site vetting, fit-out timelines, and fit-for-trade handover checklists.", icon: "layout-grid" }
    ],
    checklists: [
        {
            title: "Network Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "CEO",
            summary: "High-level strategic oversight of brand equity and royalty health.",
            icon: "crown",
            tasks: [
                { id: "FR-CEO-01", description: "Audit week-to-date royalty collection vs total POS network sales.", priority: "High", riskLevel: "High", consequence: "Significant undetected royalty leakage.", proof: "Bank Reconcile" },
                { id: "FR-CEO-02", description: "Review 'Red' flags in Global Incident Registry for litigation risk.", priority: "High", riskLevel: "High", consequence: "Systemic legal exposure across the brand.", proof: "Notice Log" },
                { id: "FR-CEO-03", description: "Verify validity of Public Liability insurance for 100% of units.", priority: "High", riskLevel: "High", consequence: "Unmitigated catastrophe liability.", proof: "Policy Registry" },
                { id: "FR-CEO-04", description: "Monitor CAPEX budget for new Regional Training Centers.", priority: "Medium", riskLevel: "Low", consequence: "Delayed network expansion.", proof: "Project Log" },
                { id: "FR-CEO-05", description: "Audit mystery shopper scores for network-wide brand parity.", priority: "Medium", riskLevel: "Medium", consequence: "Systemic brand dilution.", proof: "Audit Report" },
                { id: "FR-CEO-06", description: "Verify POSH committee visibility in all regional staff rooms.", priority: "High", riskLevel: "High", consequence: "Statutory non-compliance.", proof: "Photo Audit" },
                { id: "FR-CEO-07", description: "Review Global Profitability Dashboard for unit distress signals.", priority: "High", riskLevel: "Medium", consequence: "Unmonitored franchisee bankruptcy risk.", proof: "P&L Heatmap" },
                { id: "FR-CEO-08", description: "Final weekly network governance sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of institutional oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Strategic Operations",
            department: "Management",
            frequency: "Weekly",
            role: "Operations Director",
            summary: "Command for network drift and tech infrastructure.",
            icon: "cpu",
            tasks: [
                { id: "FR-OPS-01", description: "Audit 'Network Drift' alerts: identify pricing deviations.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent customer pricing perception.", proof: "Drift Report" },
                { id: "FR-OPS-02", description: "Verify tech stack uptime (POS/CRM/BI) across all regions.", priority: "High", riskLevel: "High", consequence: "Operational halt and data loss.", proof: "System Screen" },
                { id: "FR-OPS-03", description: "Review Regional Manager unit-visit logs for completion.", priority: "Medium", riskLevel: "Low", consequence: "Slipping unit-level standards.", proof: "Visit Registry" },
                { id: "FR-OPS-04", description: "Analyze 'Aggregator Dispatch Lag' for dark kitchen modules.", priority: "Medium", riskLevel: "Low", consequence: "Poor rating and delivery volume drop.", proof: "TAT Dashboard" },
                { id: "FR-OPS-05", description: "Verify central supply chain inventory par levels.", priority: "High", riskLevel: "Medium", consequence: "Stockouts across the entire network.", proof: "Inventory Sync" },
                { id: "FR-OPS-06", description: "Audit SOP versioning: ensure 100% units have V4.3 manuals.", priority: "High", riskLevel: "Low", consequence: "Outdated protocols being followed.", proof: "Version Log" },
                { id: "FR-OPS-07", description: "Monitor regional warehouse temperature logs (Cold chain).", priority: "High", riskLevel: "High", consequence: "Mass product spoilage and recall.", proof: "Temp Log" },
                { id: "FR-OPS-08", description: "Final operations strategy sign-off.", priority: "High", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Log" }
            ]
        },
        {
            title: "Regional Control",
            department: "Operations",
            frequency: "Daily",
            role: "Regional Manager",
            summary: "Unit-level readiness and standard parity.",
            icon: "map",
            tasks: [
                { id: "FR-REG-01", description: "Verify 100% presence of Unit Managers by 9:00 AM.", priority: "High", riskLevel: "Low", consequence: "Service gridlock during morning rush.", proof: "Attendance Log" },
                { id: "FR-REG-02", description: "Audit unit ambiance remotely: check CCTV for scent/music.", priority: "Medium", riskLevel: "Low", consequence: "Poor brand sensory experience.", proof: "Audit Score" },
                { id: "FR-REG-03", description: "Match daily cash-to-bank deposit slips for high-risk units.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue fraud.", proof: "Deposit Match" },
                { id: "FR-REG-04", description: "Triage unit-level escalations unresolved for > 12 hours.", priority: "High", riskLevel: "Medium", consequence: "Viral reputation damage.", proof: "Incident Log" },
                { id: "FR-REG-05", description: "Verify menu photo parity: match plate to brand guide.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent guest experience.", proof: "Photo Match" },
                { id: "FR-REG-06", description: "Log 'Network Drift' alerts for local discounting errors.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized revenue drain.", proof: "Price Check" },
                { id: "FR-REG-07", description: "Confirm unit signage lighting functional at 6:00 PM.", priority: "Low", riskLevel: "Low", consequence: "Loss of footfall visibility.", proof: "Visual Check" },
                { id: "FR-REG-08", description: "Audit unit restroom cleaning frequency logs (60m).", priority: "High", riskLevel: "Low", consequence: "Primary complaint driver.", proof: "Hourly Sheet" },
                { id: "FR-REG-09", description: "Verify aggregator menu sync (POS vs Zomato/Swiggy).", priority: "Medium", riskLevel: "Medium", consequence: "Order loss.", proof: "App Match" },
                { id: "FR-REG-10", description: "Execute EOD regional readiness summary sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Expansion & Project Command",
            department: "Projects",
            frequency: "Ongoing",
            role: "Expansion Lead",
            summary: "Governance for new site launches and fit-outs.",
            icon: "rocket",
            tasks: [
                { id: "FR-EXP-01", description: "Site Vetting: Verify footfall sensors and electricity load.", priority: "High", riskLevel: "Medium", consequence: "Failed unit launch after high CAPEX.", proof: "Vetting Report" },
                { id: "FR-EXP-02", description: "Audit fit-out timeline: check vendor delay penalties.", priority: "Medium", riskLevel: "Low", consequence: "Delayed ROI on new site.", proof: "Project Log" },
                { id: "FR-EXP-03", description: "Execute 'Fit-for-Trade' handover seal with franchisee.", priority: "High", riskLevel: "High", consequence: "Opening with unaddressed defects.", proof: "Signed Handover" },
                { id: "FR-EXP-04", description: "Verify Internet/POS failover test for new site.", priority: "High", riskLevel: "Medium", consequence: "Operational halt on Day 1.", proof: "Ping Test" },
                { id: "FR-EXP-05", description: "Confirm initial stock-level match for Grand Opening.", priority: "Medium", riskLevel: "Low", consequence: "Stockouts during launch rush.", proof: "Inventory Check" },
                { id: "FR-EXP-06", description: "Verify FSSAI license transfer completion for new unit.", priority: "High", riskLevel: "High", consequence: "Opening illegal premises.", proof: "License File" },
                { id: "FR-EXP-07", description: "Conduct site signage visibility test pre-launch.", priority: "Low", riskLevel: "Low", consequence: "Zero launch awareness.", proof: "Visual Check" },
                { id: "FR-EXP-08", description: "Final project milestone sign-off initials.", priority: "High", riskLevel: "Low", consequence: "Audit trail gap.", proof: "Signed Doc" }
            ]
        },
        {
            title: "Audit & Compliance Engine",
            department: "Audit",
            frequency: "Daily",
            role: "Audit Controller",
            summary: "Strict field audits for standard integrity.",
            icon: "search-check",
            tasks: [
                { id: "FR-AUD-01", description: "Surprise Audit: Conduct unannounced unit inspection.", priority: "High", riskLevel: "High", consequence: "Slipping standards behind management back.", proof: "Audit Scorecard" },
                { id: "FR-AUD-02", description: "Recipe Deviation Pulse: Weigh 3 random signature dishes.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent taste and food-cost leakage.", proof: "Weight Sheet" },
                { id: "FR-AUD-03", description: "Blind Stock Count: Count 10 high-value SKUs in unit stores.", priority: "High", riskLevel: "High", consequence: "Systemic internal theft.", proof: "Count Log" },
                { id: "FR-AUD-04", description: "Audit CCTV 30-day retention status at unit level.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance.", proof: "System Log" },
                { id: "FR-AUD-05", description: "Verify 100% of staff possess valid health-handler certs.", priority: "High", riskLevel: "High", consequence: "Health department sealing.", proof: "Cert Registry" },
                { id: "FR-AUD-06", description: "Check unit-level weighing scale metrology stamps.", priority: "Medium", riskLevel: "Medium", consequence: "Regulatory consumer court fines.", proof: "Visual Audit" },
                { id: "FR-AUD-07", description: "Audit 'Promo Leakage': verify valid redemption codes.", priority: "Medium", riskLevel: "Low", consequence: "Financial loss through fake promos.", proof: "IT Report" },
                { id: "FR-AUD-08", description: "Conduct night-shift guard alertness/sobriety challenge.", priority: "High", riskLevel: "High", consequence: "Vulnerable premises.", proof: "Test Note" },
                { id: "FR-AUD-09", description: "Log unresolved non-conformances (NC) into master registry.", priority: "High", riskLevel: "Low", consequence: "Recurring operational failures.", proof: "NC Tracker" },
                { id: "FR-AUD-10", description: "Final audit shift summary sign-off.", priority: "Medium", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Franchise Partner Bridge",
            department: "Partners",
            frequency: "Monthly",
            role: "Franchise Partner Manager",
            summary: "Governance for partner relations and compliance.",
            icon: "handshake",
            tasks: [
                { id: "FR-PTN-01", description: "Conduct Monthly Partner Performance Pulse (1-on-1 call).", priority: "Medium", riskLevel: "Low", consequence: "Partner attrition and brand disengagement.", proof: "Meeting Note" },
                { id: "FR-PTN-02", description: "Verify 100% royalty payment clearing < 5th of month.", priority: "High", riskLevel: "High", consequence: "Cash-flow halt for franchisor.", proof: "Bank Statement" },
                { id: "FR-PTN-03", description: "Audit partner training completion for new menu items.", priority: "High", riskLevel: "Low", consequence: "Poor product launch execution.", proof: "Matrix Log" },
                { id: "FR-PTN-04", description: "Verify renewal status of franchise legal agreement.", priority: "High", riskLevel: "High", consequence: "Operating without valid legal rights.", proof: "Contract Registry" },
                { id: "FR-PTN-05", description: "Check status of unresolved partner IT/Support tickets.", priority: "Low", riskLevel: "Low", consequence: "Partner frustration.", proof: "Support Log" },
                { id: "FR-PTN-06", description: "Distribute 'Empire News' quarterly bulletin.", priority: "Low", riskLevel: "Low", consequence: "Lack of brand news alignment.", proof: "Email Log" },
                { id: "FR-PTN-07", description: "Audit unit-level marketing spend compliance.", priority: "Medium", riskLevel: "Low", consequence: "Under-spending on brand growth.", proof: "Expense Report" },
                { id: "FR-PTN-08", description: "Final monthly partner governance sign-off.", priority: "Medium", riskLevel: "Low", consequence: "Oversight gap.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Unit-Level Readiness",
            department: "Operations",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Daily mission command for the unit.",
            icon: "clipboard-check",
            tasks: [
                { id: "FR-UNT-01", description: "Witness and seal nightly cash-drop bag for bank.", priority: "High", riskLevel: "High", consequence: "Untraceable unit-level theft.", proof: "Seal Register" },
                { id: "FR-UNT-02", description: "Audit 100% of bill voids/cancellations for shift.", priority: "High", riskLevel: "High", consequence: "Revenue leakage at the till.", proof: "Void Log" },
                { id: "FR-UNT-03", description: "Verify opening ambiance: Music, Scent, and Temp (23°C).", priority: "Medium", riskLevel: "Low", consequence: "Slipping guest standard.", proof: "Visual Check" },
                { id: "FR-UNT-04", description: "Check staff biometric attendance matches roster.", priority: "High", riskLevel: "Low", consequence: "Payroll fraud.", proof: "System Match" },
                { id: "FR-UNT-05", description: "Monitor 'Waste Log' for Sunday prep items.", priority: "Medium", riskLevel: "Medium", consequence: "Profit erosion.", proof: "Wastage Book" },
                { id: "FR-UNT-06", description: "Verify POS stations are functional and connected.", priority: "High", riskLevel: "Low", consequence: "Delayed billing during rush.", proof: "Test Print" },
                { id: "FR-UNT-07", description: "Inspect entrance signage for bulbs/dirt.", priority: "Low", riskLevel: "Low", consequence: "Poor brand facade.", proof: "Walkthrough" },
                { id: "FR-UNT-08", description: "Test emergency exit panic bar functionality.", priority: "High", riskLevel: "High", consequence: "Entrapment during crisis.", proof: "Test Log" },
                { id: "FR-UNT-09", description: "Brief staff on today's 'Hero Dish' upsell target.", priority: "Low", riskLevel: "Low", consequence: "Missed margin opportunity.", proof: "Briefing Log" },
                { id: "FR-UNT-10", description: "Final nightly unit seal initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Kitchen & HACCP Engine",
            department: "Kitchen",
            frequency: "Daily",
            role: "Kitchen Lead",
            summary: "Food safety and supply integrity.",
            icon: "utensils",
            tasks: [
                { id: "FR-KIT-01", description: "Log temperatures of all refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Stock loss and foodborne illness.", proof: "Digital Log" },
                { id: "FR-KIT-02", description: "Verify allergen segregation on prep boards.", priority: "High", riskLevel: "High", consequence: "Fatal guest reaction.", proof: "Visual Audit" },
                { id: "FR-KIT-03", description: "Measure cooking oil TPM; discard if > 25%.", priority: "Medium", riskLevel: "Medium", consequence: "Toxin buildup / poor taste.", proof: "TPM Reading" },
                { id: "FR-KIT-04", description: "Audit ingredient date-labels for FIFO compliance.", priority: "High", riskLevel: "Medium", consequence: "Serving expired food.", proof: "Walkthrough" },
                { id: "FR-KIT-05", description: "Inspect hood filters for grease accumulation.", priority: "High", riskLevel: "High", consequence: "Kitchen fire risk.", proof: "Cleaning Card" },
                { id: "FR-KIT-06", description: "Log receiving temp for bulk central-kitchen stock.", priority: "High", riskLevel: "High", consequence: "Cold-chain failure in transit.", proof: "Receiving Log" },
                { id: "FR-KIT-07", description: "Check par levels of cleaning chemicals (R1-R6).", priority: "Low", riskLevel: "Low", consequence: "Hygiene breakdown.", proof: "Stock Sheet" },
                { id: "FR-KIT-08", description: "Verify handwashing ATP swab (Random 3 staff).", priority: "High", riskLevel: "High", consequence: "Cross-contamination.", proof: "Test Result" },
                { id: "FR-KIT-09", description: "Inspect dishwasher rinse temp (Target 82°C).", priority: "High", riskLevel: "High", consequence: "Unsanitized plates reaching guests.", proof: "Temp Reading" },
                { id: "FR-KIT-10", description: "Final gas burner valve shutdown verification.", priority: "High", riskLevel: "High", consequence: "Overnight explosion hazard.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Brand & CX Command",
            department: "Service",
            frequency: "Daily",
            role: "CX Lead",
            summary: "Protects the guest score and brand parity.",
            icon: "smile",
            tasks: [
                { id: "FR-CX-01", description: "Reply to all unit-level Google reviews < 12 hours.", priority: "High", riskLevel: "Low", consequence: "Rating drop and poor reputation.", proof: "ORM Dashboard" },
                { id: "FR-CX-02", description: "Verify 'Table Side Feedback' QR codes are active.", priority: "Medium", riskLevel: "Low", consequence: "Loss of customer data.", proof: "Phone Test" },
                { id: "FR-CX-03", description: "Audit lobby music playlist vs brand standard.", priority: "Low", riskLevel: "Low", consequence: "Inconsistent brand vibe.", proof: "Walkthrough" },
                { id: "FR-CX-04", description: "Check par levels of feedback cards and pens.", priority: "Low", riskLevel: "Low", consequence: "CX friction.", proof: "Stock Check" },
                { id: "FR-CX-05", description: "Verify staff grooming: match brand uniform guide.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Briefing Log" },
                { id: "FR-CX-06", description: "Inspect entrance mat for positioning and debris.", priority: "Low", riskLevel: "Low", consequence: "Poor first touch.", proof: "Visual Check" },
                { id: "FR-CX-07", description: "Triage Guest Escalation Log from previous shift.", priority: "High", riskLevel: "Medium", consequence: "Unresolved disputes.", proof: "Incident Log" },
                { id: "FR-CX-08", description: "Final daily guest sentiment summary.", priority: "Medium", riskLevel: "Low", consequence: "Loss of oversight.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Digital & Delivery Shield",
            department: "Digital",
            frequency: "Daily",
            role: "Digital Lead",
            summary: "Governance for off-premise revenue.",
            icon: "smartphone",
            tasks: [
                { id: "FR-DIG-01", description: "Reconcile aggregator payout vs POS daily report.", priority: "High", riskLevel: "High", consequence: "Unrecoverable financial loss.", proof: "System Reconcile" },
                { id: "FR-DIG-02", description: "Verify 100% menu item availability on delivery apps.", priority: "High", riskLevel: "Medium", consequence: "Lost sales / High cancellations.", proof: "App Check" },
                { id: "FR-DIG-03", description: "Audit 'Geo-fence' radius for fast-delivery units.", priority: "Medium", riskLevel: "Low", consequence: "Rider overlap / cold food.", proof: "Map Audit" },
                { id: "FR-DIG-04", description: "Confirm digital promo codes are valid and capped.", priority: "High", riskLevel: "Medium", consequence: "Revenue drainage via promo-hack.", proof: "Promo Log" },
                { id: "FR-DIG-05", description: "Test 'Order-Ready' signal button connectivity.", priority: "Medium", riskLevel: "Low", consequence: "Rider wait-time increase.", proof: "Signal Test" },
                { id: "FR-DIG-06", description: "Verify takeaway bag-seals match brand standard.", priority: "High", riskLevel: "Low", consequence: "Tampering risk.", proof: "Visual Check" },
                { id: "FR-DIG-07", description: "Check digital menu photo parity vs plate.", priority: "Low", riskLevel: "Low", consequence: "Misleading marketing claims.", proof: "Audit Match" },
                { id: "FR-DIG-08", description: "Final digital revenue settlement sign-off.", priority: "High", riskLevel: "Low", consequence: "Cash flow delay.", proof: "Signed Summary" }
            ]
        },
        {
            title: "IT Infrastructure Hub",
            department: "Technical",
            frequency: "Daily",
            role: "IT Support",
            summary: "Digital backbone and data security.",
            icon: "server",
            tasks: [
                { id: "FR-IT-01", description: "Verify POS firewall status is ACTIVE and updated.", priority: "High", riskLevel: "High", consequence: "Malware/Skimming cyber-attack.", proof: "Dashboard" },
                { id: "FR-IT-02", description: "Audit CCTV timestamp sync: match current time.", priority: "High", riskLevel: "High", consequence: "Invalid evidence for legal suits.", proof: "System Screen" },
                { id: "FR-IT-03", description: "Test Internet failover (Primary to 4G backup).", priority: "High", riskLevel: "High", consequence: "Billing halt during outage.", proof: "Ping Test" },
                { id: "FR-IT-04", description: "Check server room temp (Target exactly 20°C).", priority: "High", riskLevel: "High", consequence: "System crash / hardware damage.", proof: "Temp Log" },
                { id: "FR-IT-05", description: "Verify daily cloud backup completion of unit logs.", priority: "High", riskLevel: "High", consequence: "Total data loss during disk fail.", proof: "Backup Sheet" },
                { id: "FR-IT-06", description: "Inspect POS terminals for unauthorized USB devices.", priority: "High", riskLevel: "High", consequence: "Data exfiltration fraud.", proof: "Visual Audit" },
                { id: "FR-IT-07", description: "Update 'Admin Access' log for staff rotation.", priority: "Medium", riskLevel: "Medium", consequence: "Unauthorized login window.", proof: "Registry Update" },
                { id: "FR-IT-08", description: "Final IT vitals integrity sign-off.", priority: "High", riskLevel: "Low", consequence: "Digital governance gap.", proof: "Signed Sheet" }
            ]
        },
        {
            title: "Sourcing & Supply Integrity",
            department: "Stores",
            frequency: "Daily",
            role: "Sourcing Lead",
            summary: "Vendor governance and supply chain uptime.",
            icon: "package",
            tasks: [
                { id: "FR-SRC-01", description: "Monitor 'Lead-time Breach' reports for bulk ingredients.", priority: "High", riskLevel: "Medium", consequence: "Stockouts across multiple sites.", proof: "Vendor Log" },
                { id: "FR-SRC-02", description: "Verify quality certs (FSSAI) for new ingredient vendors.", priority: "High", riskLevel: "High", consequence: "Legal liability for unsafe sourcing.", proof: "Cert File" },
                { id: "FR-SRC-03", description: "Audit receiving weight: test scales at warehouse.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight.", proof: "Calibration Log" },
                { id: "FR-SRC-04", description: "Check par levels of brand-critical custom packaging.", priority: "Medium", riskLevel: "Low", consequence: "Opening with plain/generic packaging.", proof: "Stock Sheet" },
                { id: "FR-SRC-05", description: "Track vendor delivery accuracy (Quantity Match).", priority: "Medium", riskLevel: "Low", consequence: "Silent financial leakage.", proof: "Match Note" },
                { id: "FR-SRC-06", description: "Verify AMC renewal for central cold-storage chillers.", priority: "High", riskLevel: "High", consequence: "Mass product loss during failure.", proof: "Contract File" },
                { id: "FR-SRC-07", description: "Inspect loading bay shutter seal at EOD.", priority: "Medium", riskLevel: "High", consequence: "Warehouse burglary.", proof: "Visual Check" },
                { id: "FR-SRC-08", description: "Final supply-chain mission sign-off.", priority: "Medium", riskLevel: "Low", consequence: "Oversight gap.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Royalty & Financial Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance Controller",
            summary: "Protects the revenue stream and payout parity.",
            icon: "banknote",
            tasks: [
                { id: "FR-FIN-01", description: "Reconcile group royalty collection vs POS data.", priority: "High", riskLevel: "High", consequence: "Undetected partner revenue theft.", proof: "Bank Reconcile" },
                { id: "FR-FIN-02", description: "Audit aggregator settlement sync for top 5 units.", priority: "Medium", riskLevel: "Medium", consequence: "Unrecoverable financial loss.", proof: "System Sync" },
                { id: "FR-FIN-03", description: "Verify 'Tax Invoice' seriality for gaps in sequence.", priority: "High", riskLevel: "High", consequence: "GST audit failure / fines.", proof: "Registry Match" },
                { id: "FR-FIN-04", description: "Audit 10 random 'Refunds' for valid MOD initials.", priority: "High", riskLevel: "Medium", consequence: "Internal till fraud.", proof: "Sample Check" },
                { id: "FR-FIN-05", description: "Verify batch settlement on 100% of unit card machines.", priority: "High", riskLevel: "Low", consequence: "Cash flow delay.", proof: "Settlement Print" },
                { id: "FR-FIN-06", description: "Check par levels of unit cash floats.", priority: "Low", riskLevel: "Low", consequence: "Billing friction.", proof: "Cash Log" },
                { id: "FR-FIN-07", description: "Audit employee discount usage for outliers.", priority: "Low", riskLevel: "Medium", consequence: "Unauthorized revenue drain.", proof: "Audit Report" },
                { id: "FR-FIN-08", description: "Monitor aged-debtors for corporate catering accounts.", priority: "Low", riskLevel: "Low", consequence: "Working capital pressure.", proof: "Aging Report" },
                { id: "FR-FIN-09", description: "Witness weekly vault-drop seals for regional HQ.", priority: "High", riskLevel: "High", consequence: "Untraceable theft.", proof: "Signed Log" },
                { id: "FR-FIN-10", description: "Final daily group finance sign-off.", priority: "High", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Safety & Risk Governance",
            department: "Safety",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Infrastructure safety and risk mitigation.",
            icon: "shield-alert",
            tasks: [
                { id: "FR-SAF-01", description: "Verify 100% fire exits are clear and unlocked.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment (Never-event).", proof: "Patrol Log" },
                { id: "FR-SAF-02", description: "Audit extinguisher gauge pressure across the unit.", priority: "High", riskLevel: "High", consequence: "Zero suppression during crisis.", proof: "Gauge Log" },
                { id: "FR-SAF-03", description: "Test emergency PA announcement system volume.", priority: "High", riskLevel: "Medium", consequence: "Evacuation chaos.", proof: "Sound Test" },
                { id: "FR-SAF-04", description: "Check first-aid field kits for stocking and expiry.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat accidents.", proof: "Stock Check" },
                { id: "FR-SAF-05", description: "Verify gas-leak detector sensor is ON and functional.", priority: "High", riskLevel: "High", consequence: "Kitchen explosion hazard.", proof: "Visual Check" },
                { id: "FR-SAF-06", description: "Audit LOTO status for active electrical/gas repairs.", priority: "High", riskLevel: "High", consequence: "Fatal industrial accident.", proof: "Permit Registry" },
                { id: "FR-SAF-07", description: "Perform IR heat scan of main electrical panel banks.", priority: "High", riskLevel: "High", consequence: "Overnight short-circuit fire.", proof: "Scan Log" },
                { id: "FR-SAF-08", description: "Final daily safety command sign-off.", priority: "High", riskLevel: "Low", consequence: "Systemic risk gap.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Personnel & Training Hub",
            department: "HR",
            frequency: "Monthly",
            role: "HR Coordinator",
            summary: "Vetting, training, and staff health parity.",
            icon: "graduation-cap",
            tasks: [
                { id: "FR-HR-01", description: "Audit Training Completion Matrix for all unit leads.", priority: "High", riskLevel: "Low", consequence: "Unqualified management leading units.", proof: "Matrix Log" },
                { id: "FR-HR-02", description: "Verify 100% staff background vetting for new hires.", priority: "High", riskLevel: "High", consequence: "Hiring blacklisted individuals.", proof: "Vetting File" },
                { id: "FR-HR-03", description: "POSH Policy Display: Confirm visibility in staff rooms.", priority: "High", riskLevel: "High", consequence: "Severe legal liability.", proof: "Photo Audit" },
                { id: "FR-HR-04", description: "Audit biometric logs against manual OT payroll claims.", priority: "Medium", riskLevel: "Low", consequence: "Payroll fraud.", proof: "Match Note" },
                { id: "FR-HR-05", description: "Verify health-handler certs for 100% of kitchen staff.", priority: "High", riskLevel: "Medium", consequence: "Regulatory closure.", proof: "Cert Registry" },
                { id: "FR-HR-06", description: "Review staff grievance logs for unresolved issues.", priority: "Medium", riskLevel: "Low", consequence: "High institutional churn.", proof: "Grievance Book" },
                { id: "FR-HR-07", description: "Check availability of labor-law posters in locker zones.", priority: "Low", riskLevel: "Low", consequence: "Regulatory fines.", proof: "Visual Check" },
                { id: "FR-HR-08", description: "Verify unit ID badge expiry dates.", priority: "Low", riskLevel: "Low", consequence: "Security risk.", proof: "Database Sync" },
                { id: "FR-HR-09", description: "Conduct spot-check of 'Food Safety' training records.", priority: "High", riskLevel: "High", consequence: "HACCP failure.", proof: "Training Log" },
                { id: "FR-HR-10", description: "Final monthly HR compliance sign-off.", priority: "Medium", riskLevel: "Low", consequence: "Loss of oversight.", proof: "Signed Summary" }
            ]
        }
    ]
};
