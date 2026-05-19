
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations System",
    priceINR: 3499,
    priceUSD: 49,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Hospitality",
    description: "The definitive Sovereign v17.6 engine for multi-unit restaurant groups. Hardening 170+ technical control points across Kitchen, Bar, FOH, and Delivery.",
    icon: "utensils-crossed",
    badgeText: "V17.6 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Restaurant Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>HACCP Control</strong>: Zero-fail protocols for thawing logs, oil quality, and allergen segregation.", icon: "shield-check" },
        { text: "<strong>Revenue Shield</strong>: Void-bill audits, takeaway seals, and yield variance monitoring.", icon: "banknote" },
        { text: "<strong>ESG Sustainability</strong>: Daily food waste logging, oil disposal tracking, and plastic-free audits.", icon: "leaf" }
    ],
    checklists: [
        {
            title: "Management & Governance",
            department: "Executive",
            frequency: "Daily",
            role: "General Manager",
            summary: "High-level strategic oversight and financial reconciliation.",
            icon: "crown",
            tasks: [
                { id: "RES-GM-01", description: "Match physical cash-on-hand to POS X-Reading report; witness cashier reconciliation.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue theft.", proof: "Settlement Log", verificationRequired: true },
                { id: "RES-GM-02", description: "Audit 100% of bill deletions/voids; verify manager ID login for every override.", priority: "High", riskLevel: "High", consequence: "Theft masked as cashier errors.", proof: "Void Registry", verificationRequired: true },
                { id: "RES-GM-03", description: "Verify response to 100% of guest reviews/complaints from previous 24h.", priority: "Medium", riskLevel: "Medium", consequence: "Viral reputation damage.", proof: "ORM Dashboard" },
                { id: "RES-GM-04", description: "Execute weekly board governance summary; witness network risk triage.", priority: "Medium", riskLevel: "Low", consequence: "Loss of oversight.", proof: "Signed Summary" },
                { id: "RES-GM-05", description: "Verify valid FSSAI, Liquor, and Fire NOC licenses are displayed.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License File", verificationRequired: true }
            ]
        },
        {
            title: "Shift Command",
            department: "Management",
            frequency: "Daily",
            role: "Restaurant Manager",
            summary: "Site-level readiness and operational parity.",
            icon: "activity",
            tasks: [
                { id: "RES-RM-01", description: "Lobby Ambiance Pulse: Log temp (Target 23°C), scent, and music volume.", priority: "Low", riskLevel: "Low", consequence: "Reduced guest dwell time.", proof: "Daily Log" },
                { id: "RES-RM-02", description: "Verify zero-gap data transfer in the shift handover registry.", priority: "High", riskLevel: "Medium", consequence: "Lost instructions / service failure.", proof: "Handover Log", verificationRequired: true },
                { id: "RES-RM-03", description: "Monitor queue TAT; flag any wait-time exceeding 15 minutes.", priority: "Medium", riskLevel: "Low", consequence: "Basket abandonment.", proof: "Queue Log" },
                { id: "RES-RM-04", description: "Verify manager-on-duty presence at pass during peak rush (1 PM / 8 PM).", priority: "High", riskLevel: "Low", consequence: "Service gridlock.", proof: "Attendance Log" }
            ]
        },
        {
            title: "Floor Supervision",
            department: "Front of House",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Governance for table standards and service flow.",
            icon: "eye",
            tasks: [
                { id: "RES-SUP-01", description: "Audit 5 tables for brand-standard cutlery and glassware alignment.", priority: "Low", riskLevel: "Low", consequence: "Professional brand dilution.", proof: "Visual Audit" },
                { id: "RES-SUP-02", description: "Inspect restrooms every 30 mins; verify soap and tissue par-levels.", priority: "High", riskLevel: "Low", consequence: "Primary driver of guest rage.", proof: "Hourly Sheet", verificationRequired: true },
                { id: "RES-SUP-03", description: "Verify availability of high-chairs and child-safety gear.", priority: "Low", riskLevel: "Low", consequence: "Failed family-friendly promise.", proof: "Stock Check" },
                { id: "RES-SUP-04", description: "Confirm all QR-code menus and digital order links are active.", priority: "Medium", riskLevel: "Low", consequence: "Ordering friction.", proof: "Phone Test" }
            ]
        },
        {
            title: "Kitchen Executive Command",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Food safety, yield governance, and production readiness.",
            icon: "utensils",
            tasks: [
                { id: "RES-CHEF-01", description: "Recipe Deviation Pulse: Physically weigh 3 random signature dishes.", priority: "Medium", riskLevel: "Medium", consequence: "Inconsistent guest experience.", proof: "Weight Sheet", verificationRequired: true },
                { id: "RES-CHEF-02", description: "Mise-en-place Parity: Match prep levels to today's forecasted bookings.", priority: "High", riskLevel: "Low", consequence: "Stock-outs during peak rush.", proof: "Prep Sheet" },
                { id: "RES-CHEF-03", description: "Allergen Station Verify: Inspect 100% isolation of nut-free/GF prep boards.", priority: "High", riskLevel: "High", consequence: "Fatal guest reaction (Never-event).", proof: "Visual Audit", verificationRequired: true },
                { id: "RES-CHEF-04", description: "Pest Evidence Sweep: Inspect compressor backs and storage corners.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Search Note", verificationRequired: true },
                { id: "RES-CHEF-05", description: "Final Gas Shutdown: Physically verify all manifold valves are locked.", priority: "High", riskLevel: "High", consequence: "Overnight explosion hazard.", proof: "Signed Summary", verificationRequired: true }
            ]
        },
        {
            title: "Production Command",
            department: "Kitchen",
            frequency: "Daily",
            role: "Sous Chef",
            summary: "Atomic oversight of prep quality and hygiene.",
            icon: "settings",
            tasks: [
                { id: "RES-SOUS-01", description: "Log chiller/freezer temps; verify digital vs spirit-bulb parity.", priority: "High", riskLevel: "High", consequence: "Bacterial growth / mass food poisoning.", proof: "Temp Log", verificationRequired: true },
                { id: "RES-SOUS-02", description: "Measure fryer oil TPM; discard if reading exceeds 25%.", priority: "High", riskLevel: "Medium", consequence: "Toxin buildup and poor taste.", proof: "TPM Reading", verificationRequired: true },
                { id: "RES-SOUS-03", description: "Verify 50ppm chlorine soak time for 100% of raw produce.", priority: "High", riskLevel: "High", consequence: "Parasitic transmission to guests.", proof: "Titration Log", verificationRequired: true },
                { id: "RES-SOUS-04", description: "Scale Calibration: Test all prep scales with 1kg standard weight.", priority: "Medium", riskLevel: "Medium", consequence: "Inaccurate yields and recipe cost drift.", proof: "Calibration Log" }
            ]
        },
        {
            title: "Station Execution",
            department: "Kitchen",
            frequency: "Daily",
            role: "Line Cook",
            summary: "Zero-fail execution at the station level.",
            icon: "flame",
            tasks: [
                { id: "RES-LINE-01", description: "Verify station knife safety; check for loose handles or dull blades.", priority: "High", riskLevel: "Medium", consequence: "Staff injury liability.", proof: "Visual Check" },
                { id: "RES-LINE-02", description: "Check under-counter fridge seals for gaps or moisture.", priority: "Low", riskLevel: "Medium", consequence: "Temp fluctuation / spoilage.", proof: "Visual Audit" },
                { id: "RES-LINE-03", description: "Ensure 100% of prep containers possess dated 'Expiring' labels.", priority: "High", riskLevel: "High", consequence: "Serving expired food.", proof: "Label Audit", verificationRequired: true }
            ]
        },
        {
            title: "Prep & Commis Logic",
            department: "Kitchen",
            frequency: "Daily",
            role: "Commis / Prep Cook",
            summary: "Volume prep and rotation governance.",
            icon: "knife",
            tasks: [
                { id: "RES-PREP-01", description: "Execute dry-store FIFO; rotate stock to ensure oldest used first.", priority: "Medium", riskLevel: "Medium", consequence: "Invisible stock spoilage.", proof: "FIFO Walk" },
                { id: "RES-PREP-02", description: "Refill 100% of hand-wash soap and sanitizer stations.", priority: "High", riskLevel: "Medium", consequence: "Hygiene breakdown.", proof: "Stock Check" }
            ]
        },
        {
            title: "Stewarding & Hygiene",
            department: "Kitchen",
            frequency: "Hourly",
            role: "Kitchen Steward",
            summary: "Dish sterilization and refuse governance.",
            icon: "sparkles",
            tasks: [
                { id: "RES-STW-01", description: "Confirm dishwasher final rinse reaches 82°C for sterilization.", priority: "High", riskLevel: "High", consequence: "Unsanitized utensils reaching guests.", proof: "Temp Reading", verificationRequired: true },
                { id: "RES-STW-02", description: "Clear grease trap filters to prevent floor flooding.", priority: "Medium", riskLevel: "Medium", consequence: "Kitchen operational halt.", proof: "Visual Check" },
                { id: "RES-STW-03", description: "Verify wet-waste bag seal integrity pre-dispatch.", priority: "Low", riskLevel: "Low", consequence: "Pest attraction.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Service Protocol",
            department: "Front of House",
            frequency: "Daily",
            role: "Waiter / Steward",
            summary: "Guest-facing standard and revenue accuracy.",
            icon: "user-round",
            tasks: [
                { id: "RES-WAIT-01", description: "Check 100% of glassware for chips or water-spots pre-service.", priority: "High", riskLevel: "High", consequence: "Guest lip injury liability.", proof: "Visual Audit", verificationRequired: true },
                { id: "RES-WAIT-02", description: "Verify order accuracy at the pass before delivering to table.", priority: "Medium", riskLevel: "Low", consequence: "Re-fires and lost margin.", proof: "Ticket Match" }
            ]
        },
        {
            title: "Host & Reception",
            department: "Front of House",
            frequency: "Daily",
            role: "Host / Hostess",
            summary: "First-touch impression and reservation command.",
            icon: "concierge-bell",
            tasks: [
                { id: "RES-HOST-01", description: "Triage 100% of today's table reservations for VIP flags.", priority: "Medium", riskLevel: "Low", consequence: "Loss of high-LTV loyalty.", proof: "System Sync" },
                { id: "RES-HOST-02", description: "Verify menu cleanliness; discard any stained or torn inserts.", priority: "Low", riskLevel: "Low", consequence: "Grimy brand perception.", proof: "Visual Check" }
            ]
        },
        {
            title: "Bar Command",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Governance for high-margin alcohol inventory.",
            icon: "glass-water",
            tasks: [
                { id: "RES-BARM-01", description: "Blind Stock Count: Match physical spirits vs POS ledger.", priority: "High", riskLevel: "High", consequence: "High-value internal theft.", proof: "Count Sheet", verificationRequired: true },
                { id: "RES-BARM-02", description: "Verify age-check logs for guests appearing under 25.", priority: "High", riskLevel: "High", consequence: "Liquor license suspension.", proof: "Compliance Log", verificationRequired: true }
            ]
        },
        {
            title: "Bartending Vitals",
            department: "Bar",
            frequency: "Daily",
            role: "Bartender",
            summary: "Pour-cost protection and drink quality.",
            icon: "beaker",
            tasks: [
                { id: "RES-BART-01", description: "Measure cocktail yield for 3 random signature drinks.", priority: "High", riskLevel: "Medium", consequence: "Over-pouring and margin loss.", proof: "Yield Match" },
                { id: "RES-BART-02", description: "Sanitize garnish prep board and check fruit labels.", priority: "Medium", riskLevel: "Low", consequence: "Sub-par drink taste.", proof: "Visual Check" }
            ]
        },
        {
            title: "Barback Support",
            department: "Bar",
            frequency: "Daily",
            role: "Barback",
            summary: "Lounge readiness and draft-line health.",
            icon: "cup-soda",
            tasks: [
                { id: "RES-BB-01", description: "Flush draft-beer lines to prevent yeast buildup.", priority: "Medium", riskLevel: "Low", consequence: "Poor beer taste / waste.", proof: "Flush Log" }
            ]
        },
        {
            title: "Inventory Control",
            department: "Stores",
            frequency: "Daily",
            role: "Inventory Controller",
            summary: "Profit protection at the point of entry.",
            icon: "package",
            tasks: [
                { id: "RES-INV-01", description: "GRN Audit: Match incoming vendor invoice to physical weight.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight.", proof: "Receiving Note", verificationRequired: true },
                { id: "RES-INV-02", description: "Verify FSSAI license validity for 100% of meat suppliers.", priority: "High", riskLevel: "High", consequence: "Legal liability for unsafe sourcing.", proof: "License Registry", verificationRequired: true }
            ]
        },
        {
            title: "Compliance & Safety",
            department: "Safety",
            frequency: "Daily",
            role: "Hygiene & Compliance Officer",
            summary: "Infrastructure hardening and safety readiness.",
            icon: "shield-alert",
            tasks: [
                { id: "RES-SAF-01", description: "Gas Sniffer Calibration: Test sensors near main manifold.", priority: "High", riskLevel: "High", consequence: "Undetected gas leak (Fatal).", proof: "Test Log", verificationRequired: true },
                { id: "RES-SAF-02", description: "Suppression Pin Check: Verify fire pins are intact on hood.", priority: "High", riskLevel: "High", consequence: "Zero firefighting capability.", proof: "Visual Check", verificationRequired: true }
            ]
        },
        {
            title: "Delivery & Digital",
            department: "Operations",
            frequency: "Daily",
            role: "Delivery Coordinator",
            summary: "Off-premise revenue protection.",
            icon: "smartphone",
            tasks: [
                { id: "RES-DIG-01", description: "Aggregator Sync: Match menu availability to physical stock.", priority: "High", riskLevel: "Medium", consequence: "High cancellation penalties.", proof: "App Check" },
                { id: "RES-DIG-02", description: "Payout Mismatch: Reconcile daily settlement vs POS total.", priority: "High", riskLevel: "High", consequence: "Revenue leakage.", proof: "System Sync", verificationRequired: true }
            ]
        },
        {
            title: "Sustainability & ESG",
            department: "ESG",
            frequency: "Daily",
            role: "Waste Segregation Lead",
            summary: "Environmental discipline and resource tracking.",
            icon: "leaf",
            tasks: [
                { id: "RES-ESG-01", description: "Log total food waste (KG) discarded from prep vs plates.", priority: "Medium", riskLevel: "Low", consequence: "Inefficient procurement.", proof: "Weight Slip" },
                { id: "RES-ESG-02", description: "Verify used cooking oil disposal into sealed haz-drums.", priority: "High", riskLevel: "High", consequence: "Illegal resale / toxic reuse fraud.", proof: "Registry Note", verificationRequired: true },
                { id: "RES-ESG-03", description: "Water Meter Pulse: Log 3 AM reading to detect leaks.", priority: "High", riskLevel: "Medium", consequence: "Resource wastage.", proof: "Meter Log", verificationRequired: true }
            ]
        }
    ]
};
