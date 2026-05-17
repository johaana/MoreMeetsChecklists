import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations System",
    category: "Hospitality",
    description: "Standardizing 140+ technical control points across 12 distinct floor roles. The professional standard for multi-unit food and beverage groups.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "Stop operational drift before it reaches the guest experience.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 3499,
    priceUSD: 49,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "STABLE v4.4",
    badgeVariant: "accent",
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>Owner/COO Command</strong>: High-level visibility into group compliance and profit protection.", icon: "crown" },
        { text: "<strong>Kitchen Opening (HACCP)</strong>: Zero-fail protocols for temperature, hygiene, and allergen separation.", icon: "sunrise" },
        { text: "<strong>Service & Ambiance Logic</strong>: Hourly audits for music, lighting, and hygiene to protect guest scores.", icon: "armchair" },
        { text: "<strong>EHS & Fire Safety</strong>: Mandatory closing protocols for gas and electrical banks.", icon: "flame" }
    ],
    checklists: [
        {
            title: "Executive & Management Command",
            department: "Executive",
            frequency: "Daily",
            role: "General Manager",
            summary: "High-level oversight of branch health and legal standing.",
            icon: "crown",
            tasks: [
                { id: "RES-EXE-01", technicalProtocol: "Operational Performance Review", description: "Review daily task completion logs for all stations.", priority: "High", riskLevel: "Low", consequence: "Operational drift and team disconnect.", proof: "Digital Ledger" },
                { id: "RES-EXE-02", technicalProtocol: "Cash-to-Bank Reconciliation", description: "Verify previous day's revenue against bank deposit slips.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue leakage.", proof: "Bank Slip Match" },
                { id: "RES-EXE-03", technicalProtocol: "Incident Log Triage", description: "Check status of unresolved 'Red' alerts in the incident log.", priority: "High", riskLevel: "High", consequence: "Escalated legal liability.", proof: "Log Audit" },
                { id: "RES-EXE-04", technicalProtocol: "Staff Briefing Execution", description: "Hold morning team huddle to align on today's specials and targets.", priority: "Medium", riskLevel: "Low", consequence: "Disconnected service delivery.", proof: "Briefing Sheet" },
                { id: "RES-EXE-05", technicalProtocol: "Statutory License Audit", description: "Confirm FSSAI and Trade licenses are displayed and valid.", priority: "High", riskLevel: "High", consequence: "Government shutdown of premises.", proof: "Photo Audit" }
            ]
        },
        {
            title: "Kitchen Readiness (HACCP)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Kitchen Lead",
            summary: "Zero-fail protocols for food safety and prep quality.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", technicalProtocol: "Cold Chain Integrity", description: "Log temperatures of all refrigerators (1°C to 4°C).", priority: "High", riskLevel: "High", consequence: "Pathogen growth and total stock loss.", proof: "Temp Log" },
                { id: "RES-KIT-02", technicalProtocol: "Sanitization Audit", description: "Sanitize all surfaces and verify ppm with test strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination risk.", proof: "Test Strip" },
                { id: "RES-KIT-03", technicalProtocol: "FIFO Date-Label Sweep", description: "Verify all prepped items have expiry labels.", priority: "High", riskLevel: "High", consequence: "Serving expired ingredients.", proof: "Visual Audit" },
                { id: "RES-KIT-04", technicalProtocol: "Deep Store Pest Patrol", description: "Check bait stations for signs of activity.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Pest Register" },
                { id: "RES-KIT-05", technicalProtocol: "Knife Safety Check", description: "Inspect knives for sharpness and handle integrity.", priority: "Medium", riskLevel: "Medium", consequence: "Staff injury liability.", proof: "Safety Log" }
            ]
        },
        {
            title: "Service Ambiance & Hygiene",
            department: "Service",
            frequency: "Daily",
            role: "Shift Manager",
            summary: "Protects the guest experience standard.",
            icon: "hand-platter",
            tasks: [
                { id: "RES-SRV-01", technicalProtocol: "Restroom Hygiene Pulse", description: "Audit cleaning logs: verify 60-min frequency.", priority: "High", riskLevel: "Low", consequence: "Negative reviews and rating drop.", proof: "Hourly Sheet" },
                { id: "RES-SRV-02", technicalProtocol: "Table Geometry Audit", description: "Verify symmetry of table settings and condiments.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional visual standard.", proof: "Visual Check" },
                { id: "RES-SRV-03", technicalProtocol: "Ambiance Sensory Check", description: "Ensure Scent, Music, and Lighting match brand standard.", priority: "Medium", riskLevel: "Low", consequence: "Lower guest dwell time.", proof: "Daily Log" },
                { id: "RES-SRV-04", technicalProtocol: "POS Terminal Uptime", description: "Test printer connectivity on all billing terminals.", priority: "Medium", riskLevel: "Low", consequence: "Service friction during rush.", proof: "Print Test" },
                { id: "RES-SRV-05", technicalProtocol: "Greeting Standard Audit", description: "Monitor host stand for 10-foot/10-second greeting rule.", priority: "Medium", riskLevel: "Low", consequence: "Cold first touch.", proof: "Observation Log" }
            ]
        },
        {
            title: "Bar & High-Margin Assets",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Lead",
            summary: "Profit protection for alcohol and high-value spirits.",
            icon: "glass-water",
            tasks: [
                { id: "RES-BAR-01", technicalProtocol: "Opening Spirit Count", description: "Reconcile high-value bottles against previous shift sales.", priority: "High", riskLevel: "High", consequence: "Internal theft and margin erosion.", proof: "Count Sheet" },
                { id: "RES-BAR-02", technicalProtocol: "Garnish Freshness Sweep", description: "Discard wilted garnishes and verify cut-dates.", priority: "Medium", riskLevel: "Low", consequence: "Sub-par drink quality.", proof: "Visual Audit" },
                { id: "RES-BAR-03", technicalProtocol: "Bar Tool Sanitization", floorAction: "Deep clean shakers and strainers at 82°C.", priority: "Medium", riskLevel: "Medium", consequence: "Bacterial cross-infection.", proof: "Cleaning Note" }
            ]
        },
        {
            title: "EHS & Nightly Closure",
            department: "Safety",
            frequency: "Daily",
            role: "Security",
            summary: "Prevents overnight facility disasters.",
            icon: "shield-alert",
            tasks: [
                { id: "RES-SAF-01", technicalProtocol: "Gas Valve Seal", description: "Physically verify all main gas valves are shut.", priority: "High", riskLevel: "High", consequence: "Overnight fire or explosion.", proof: "Physical Check" },
                { id: "RES-SAF-02", technicalProtocol: "Electrical Bank Shutdown", description: "Turn off all non-essential ACs and lighting panels.", priority: "High", riskLevel: "High", consequence: "Energy waste and fire risk.", proof: "Switch Log" },
                { id: "RES-SAF-03", technicalProtocol: "External Door Lockdown", description: "Confirm all shutters and alley doors are double-locked.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry and burglary.", proof: "Walkthrough Note" },
                { id: "RES-SAF-04", technicalProtocol: "Fire Exit Clearance", description: "Verify all exit paths are 100% clear of debris.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment (Never-event).", proof: "Patrol Log" },
                { id: "RES-SAF-05", technicalProtocol: "Waste Bay Removal", description: "Confirm all wet-waste bags removed from premises.", priority: "Medium", riskLevel: "Medium", consequence: "Pest attraction.", proof: "Visual Audit" }
            ]
        }
    ]
};
