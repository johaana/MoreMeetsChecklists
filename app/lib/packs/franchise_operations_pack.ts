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
    description: "The definitive Sovereign v16.0 engine for multi-unit groups. Hardening 130 technical control points across Royalty and Network Drift.",
    icon: "store",
    badgeText: "V16.0 SOVEREIGN",
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
            summary: "High-level strategic oversight of brand equity.",
            icon: "crown",
            tasks: [
                { id: "FR-CEO-01", description: "Equity Protection: Review global P&L dashboard for units with > 3 days of pending royalties.", priority: "High", riskLevel: "High", consequence: "Significant royalty leakage.", proof: "Dashboard Review" },
                { id: "FR-CEO-08", description: "Final Weekly Sign-off: Execute board governance summary; witness network risk triage.", priority: "High", riskLevel: "Low", consequence: "Loss of oversight.", proof: "Signed Summary" }
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
                { id: "FR-OPS-01", description: "Network Drift Audit: Analyze unit-level pricing reports; verify zero deviations from brand master.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent brand perception.", proof: "Drift Report" }
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
                { id: "FR-REG-01", description: "Unit MOD Presence: Remote CCTV verification of Manager-on-Duty at 1:00 PM peak rush.", priority: "High", riskLevel: "Low", consequence: "Service gridlock.", proof: "Attendance Log" },
                { id: "FR-REG-02", description: "Regional Escalation Ladder: Verify HOD contact list is active and displayed in unit office.", priority: "Medium", riskLevel: "Low", consequence: "Delayed recovery.", proof: "Visual Check" }
            ]
        },
        {
            title: "Expansion Command",
            department: "Projects",
            frequency: "Ongoing",
            role: "Expansion Lead",
            summary: "Governance for new site launches.",
            icon: "rocket",
            tasks: [
                { id: "FR-EXP-01", description: "Site Vetting: Verify electrical load capacity and footfall sensors for new location approval.", priority: "High", riskLevel: "Medium", consequence: "Failed ROI on launch.", proof: "Vetting Report" }
            ]
        },
        {
            title: "Field Audit Engine",
            department: "Audit",
            frequency: "Daily",
            role: "Audit Controller",
            summary: "Strict field audits for standard integrity.",
            icon: "search-check",
            tasks: [
                { id: "FR-AUD-01", description: "Surprise Unit Audit: Conduct unannounced site inspection; score visual parity vs brand guide.", priority: "High", riskLevel: "High", consequence: "Slipping standards.", proof: "Audit Scorecard" },
                { id: "FR-AUD-02", description: "Blind Stock Count: Count top 5 SKUs (e.g., Syrup/Meat); match physical vs system par-levels.", priority: "High", riskLevel: "High", consequence: "Internal theft.", proof: "Count Log" },
                { id: "FR-AUD-03", description: "CCTV Retention Pulse: Verify 30-day recording logs are available and synced at branch level.", priority: "High", riskLevel: "High", consequence: "Loss of evidence.", proof: "System Log" },
                { id: "FR-AUD-04", description: "Weighing Scale Metrology: Verify 100% of unit scales possess valid government stamps.", priority: "High", riskLevel: "Medium", consequence: "Regulatory fines.", proof: "Visual Audit" },
                { id: "FR-AUD-05", description: "Hygiene ATP Swab: Conduct random surface test in high-care prep zone; verify RLU < 100.", priority: "High", riskLevel: "High", consequence: "Infection risk.", proof: "Test Result" }
            ]
        },
        {
            title: "Partner Bridge",
            department: "Partners",
            frequency: "Monthly",
            role: "Franchise Partner Manager",
            summary: "Governance for partner relations.",
            icon: "handshake",
            tasks: [
                { id: "FR-PTN-01", description: "Partner Satisfaction Pulse: Conduct 15-min performance coaching call with Unit Franchisee.", priority: "Medium", riskLevel: "Low", consequence: "Partner attrition.", proof: "Meeting Note" }
            ]
        },
        {
            title: "Kitchen Lead (HACCP)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Kitchen Lead",
            summary: "Food safety and yield governance.",
            icon: "utensils",
            tasks: [
                { id: "FR-KIT-01", description: "Recipe Deviation Pulse: Physically weigh 3 random signature dishes; match prep-manual spec.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent taste.", proof: "Weight Sheet" },
                { id: "FR-KIT-02", description: "Allergen Board Verify: Inspect 100% segregation of Prep Zone-A vs Zone-B.", priority: "High", riskLevel: "High", consequence: "Fatal reaction.", proof: "Visual Audit" },
                { id: "FR-KIT-03", description: "Cold-Chain Audit: Log receiving temp for bulk stock; reject if > 5°C.", priority: "High", riskLevel: "High", consequence: "Compromised stock.", proof: "Receiving Note" },
                { id: "FR-KIT-04", description: "TPM Oil Quality: Measure cooking oil polar compounds; discard if reading > 25%.", priority: "High", riskLevel: "Medium", consequence: "Toxin buildup.", proof: "TPM Log" }
            ]
        },
        {
            title: "CX Command",
            department: "Service",
            frequency: "Daily",
            role: "CX Lead",
            summary: "Protects the guest score and brand parity.",
            icon: "smile",
            tasks: [
                { id: "FR-CX-01", description: "Review Triage: Reply to 100% of unit Google reviews < 12 hours.", priority: "High", riskLevel: "Low", consequence: "Rating drop.", proof: "ORM Dashboard" }
            ]
        },
        {
            title: "Digital Shield",
            department: "Digital",
            frequency: "Daily",
            role: "Digital Lead",
            summary: "Governance for off-premise revenue.",
            icon: "smartphone",
            tasks: [
                { id: "FR-DIG-01", description: "Aggregator Sync: Verify 100% menu item availability matches physical stock-outs.", priority: "High", riskLevel: "Medium", consequence: "Cancellations.", proof: "App Check" },
                { id: "FR-DIG-02", description: "Payout Mismatch: Reconcile aggregator daily payout vs POS delivery report; flag > ₹500 gap.", priority: "High", riskLevel: "High", consequence: "Financial loss.", proof: "System Sync" },
                { id: "FR-DIG-03", description: "Geo-fence Verification: Test delivery radius limits on aggregator apps for 2 units.", priority: "Medium", riskLevel: "Low", consequence: "Rider overlap.", proof: "Map Audit" },
                { id: "FR-DIG-04", description: "Bag-Seal Audit: Verify 100% of orders leave with intact high-security brand seals.", priority: "High", riskLevel: "Low", consequence: "Tampering.", proof: "Visual Check" }
            ]
        },
        {
            title: "IT Support Hub",
            department: "Technical",
            frequency: "Daily",
            role: "IT Support",
            summary: "Digital backbone and data security.",
            icon: "server",
            tasks: [
                { id: "FR-IT-01", description: "Firewall Uptime: Verify unit-level POS firewalls are active and firmware is current.", priority: "High", riskLevel: "High", consequence: "Cyber attack.", proof: "Dashboard" }
            ]
        },
        {
            title: "Sourcing Integrity",
            department: "Stores",
            frequency: "Daily",
            role: "Sourcing Lead",
            summary: "Vendor governance.",
            icon: "package",
            tasks: [
                { id: "FR-SRC-01", description: "Vendor Lead-time Breach: Document any delivery exceeding contract SLA by > 4 hours.", priority: "High", riskLevel: "Medium", consequence: "Network stockouts.", proof: "Vendor Log" }
            ]
        },
        {
            title: "Financial Controller",
            department: "Finance",
            frequency: "Daily",
            role: "Finance Controller",
            summary: "Protects the revenue stream.",
            icon: "banknote",
            tasks: [
                { id: "FR-FIN-01", description: "Royalty Variance: Match aggregator settlements vs physical bank credit; flag gaps > 1%.", priority: "High", riskLevel: "High", consequence: "Partner revenue theft.", proof: "Bank Reconcile" },
                { id: "FR-FIN-02", description: "Tax Seriality Audit: Check POS bill sequence for any missing invoice numbers in the last 24h.", priority: "High", riskLevel: "High", consequence: "GST audit failure.", proof: "Registry Match" },
                { id: "FR-FIN-03", description: "Promo Leakage: Audit 10 random coupon redemptions for valid customer ID/phone mapping.", priority: "Medium", riskLevel: "Low", consequence: "Financial loss.", proof: "IT Report" },
                { id: "FR-FIN-04", description: "Unauthorized Discounting: Review POS logs for high-frequency usage of 'Manager Comp' keys.", priority: "High", riskLevel: "High", consequence: "Till fraud.", proof: "Audit Report" },
                { id: "FR-FIN-05", description: "Vault Drop Witness: Physically observe shift-end cash-bag sealing for Regional HQ transit.", priority: "High", riskLevel: "High", consequence: "Theft.", proof: "Signed Log" }
            ]
        },
        {
            title: "Life Safety Pulse",
            department: "Safety",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Infrastructure safety.",
            icon: "shield-alert",
            tasks: [
                { id: "FR-SAF-01", description: "Extinguisher Gauge Pulse: Physically verify all unit suppression units are in the GREEN zone.", priority: "High", riskLevel: "High", consequence: "Suppression failure.", proof: "Gauge Log" }
            ]
        },
        {
            title: "HR & Training",
            department: "HR",
            frequency: "Monthly",
            role: "HR Coordinator",
            summary: "Staff health and vetting.",
            icon: "graduation-cap",
            tasks: [
                { id: "FR-HR-01", description: "Training Completion Matrix: Verify 100% certification for all newly onboarded unit staff.", priority: "High", riskLevel: "Low", consequence: "Incompetent care.", proof: "Matrix Log" },
                { id: "FR-HR-10", description: "Biometric Audit: Reconcile shift attendance logs vs payroll OT claims.", priority: "Medium", riskLevel: "Low", consequence: "Payroll fraud.", proof: "Match Note" }
            ]
        }
    ]
};
