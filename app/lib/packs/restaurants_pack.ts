
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System",
    category: "Hospitality",
    description: "The definitive Sovereign v8.5 engine for multi-unit food and beverage groups. Standardizing 160+ technical control points from Owner vision to kitchen hygiene.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks—across every branch in your group.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 799,
    priceUSD: 9,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V8.5 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>Owner/COO Command</strong>: High-level visibility into group compliance and profit protection dashboards.", icon: "crown" },
        { text: "<strong>Kitchen Command & HACCP</strong>: Zero-fail protocols for temperature, hygiene, and allergen separation.", icon: "sunrise" },
        { text: "<strong>Finance & Cashier Shield</strong>: Unit-level tracking of Revenue, CoGS, and Waste to drive accountability.", icon: "banknote" },
        { text: "<strong>Safety & Asset Protection</strong>: Mandatory closing protocols for gas and electrical banks to prevent overnight disasters.", icon: "shield-check" },
        { text: "<strong>Staff Performance & Certs</strong>: Training matrix and health certification audits for 100% compliance.", icon: "users" },
        { text: "<strong>Maintenance & Equipment</strong>: HVAC, POS Internet, and Kitchen hardware uptime logs.", icon: "wrench" },
        { text: "<strong>Digital ORM & Marketing</strong>: 24-hour response mandatory for all Google and social reviews.", icon: "star" },
        { text: "<strong>Delivery & Logistics</strong>: Tamper-seal audits and aggregator sync for Zomato/Swiggy.", icon: "truck" }
    ],
    checklists: [
        {
            title: "Owner & COO Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "Strategic oversight of group performance and risk.",
            icon: "crown",
            tasks: [
                { id: "RES-EXE-01", description: "Review 'Empire Mood' and Group shift completion across all branches.", priority: "High", riskLevel: "Low", consequence: "Operational drift and lack of accountability.", proof: "Dashboard Review", trainerNotes: "Check every Monday at 10 AM." },
                { id: "RES-EXE-02", description: "Audit 'Incident Log' for any unresolved food safety or legal alerts.", priority: "High", riskLevel: "High", consequence: "Unresolved legal threats leading to business closure.", proof: "Incident Audit", trainerNotes: "Ensure all 'Open' tickets have action plans." },
                { id: "RES-EXE-03", description: "Reconcile 'Financial Shield' savings against actual P&L wastage lines.", priority: "High", riskLevel: "Medium", consequence: "Profit leakage via undetected kitchen theft.", proof: "P&L Match", trainerNotes: "Target < 2% food variance." },
                { id: "RES-EXE-04", description: "Verify license renewal calendar for all units.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "Calendar Audit", trainerNotes: "Check FSSAI, Liquor, and Health Trade." },
                { id: "RES-EXE-05", description: "Review Group-wide Mystery Audit scores.", priority: "Medium", riskLevel: "Low", consequence: "Slow decay of brand standards.", proof: "Audit Report", trainerNotes: "Identify top 3 common failure points." }
            ]
        },
        {
            title: "Kitchen Command & HACCP",
            department: "Kitchen",
            frequency: "Daily",
            role: "General Manager",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", description: "Log temperatures of all walk-in chillers and freezers.", priority: "High", riskLevel: "High", consequence: "Food poisoning and total inventory loss.", proof: "Digital Log", trainerNotes: "Maintain chillers at 1-4°C." },
                { id: "RES-KIT-02", description: "Verify sanitization of all surfaces using 200ppm strips.", priority: "High", riskLevel: "Medium", consequence: "Bacterial cross-contamination.", proof: "Test Strip", trainerNotes: "Change sanitizer every 2 hours." },
                { id: "RES-KIT-03", description: "Audit date-stamping and FIFO compliance in prep areas.", priority: "High", riskLevel: "High", consequence: "Serving expired product and regulatory fines.", proof: "FIFO Audit", trainerNotes: "Discard anything with missing labels." },
                { id: "RES-KIT-04", description: "Calibrate food core thermometers using ice-point test.", priority: "High", riskLevel: "Medium", consequence: "False safety readings during cooking.", proof: "Calibration Log", trainerNotes: "Must read 0°C in ice slurry." },
                { id: "RES-KIT-05", description: "Verify allergen segregation in dry store and prep.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction and legal closure.", proof: "Visual Check", trainerNotes: "Use color-coded boards for nuts/shellfish." }
            ]
        },
        {
            title: "Finance & Cashier Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance & Cashier",
            summary: "Profit protection and margin governance.",
            icon: "banknote",
            tasks: [
                { id: "RES-FIN-01", description: "Reconcile POS digital settlements against bank captures.", priority: "High", riskLevel: "High", consequence: "Untracked revenue loss.", proof: "Settlement Log", trainerNotes: "Report any variance > ₹100 immediately." },
                { id: "RES-FIN-02", description: "Verify physical stock of top 10 expensive ingredients (Blind count).", priority: "High", riskLevel: "High", consequence: "High-value ingredient theft.", proof: "Stock Sheet", trainerNotes: "Check Salmon, Shrimp, and Alcohol." },
                { id: "RES-FIN-03", description: "Audit 'Void' and 'Discount' history for current shift.", priority: "High", riskLevel: "Medium", consequence: "Cashier-driven fraud.", proof: "POS History", trainerNotes: "Every void requires a manager signature." },
                { id: "RES-FIN-04", description: "Log daily kitchen waste weight and value.", priority: "Medium", riskLevel: "Low", consequence: "Hidden CoGS inflation.", proof: "Waste Log", trainerNotes: "Waste should be < 1% of daily sales." }
            ]
        },
        {
            title: "Safety & Asset Protection",
            department: "Security",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Perimeter security and fire-readiness.",
            icon: "shield-check",
            tasks: [
                { id: "RES-SEC-01", description: "Verify CCTV recording status and camera focal points.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance claims.", proof: "System Check", trainerNotes: "Ensure 30-day backup is active." },
                { id: "RES-SEC-02", description: "Final nightly gas and electrical bank shutdown check.", priority: "High", riskLevel: "High", consequence: "Total loss of property due to fire.", proof: "Closure Log", trainerNotes: "Physical verification of main valve." },
                { id: "RES-SEC-03", description: "Test fire alarm panel and fire extinguisher pressure.", priority: "High", riskLevel: "High", consequence: "Life safety catastrophe.", proof: "Gauge Log", trainerNotes: "Pressure must be in 'Green' zone." }
            ]
        },
        {
            title: "Staff Performance & Certs",
            department: "HR",
            frequency: "Weekly",
            role: "HR Manager",
            summary: "Ensures staff are trained and compliant.",
            icon: "users",
            tasks: [
                { id: "RES-HR-01", description: "Audit staff health certificates and FSSAI training records.", priority: "High", riskLevel: "Low", consequence: "Regulatory non-compliance penalties.", proof: "Cert File", trainerNotes: "Renew 15 days before expiry." },
                { id: "RES-HR-02", description: "Verify uniform and grooming standards at morning briefing.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution.", proof: "Attendance Log", trainerNotes: "Check hairnets and nail length." }
            ]
        },
        {
            title: "Maintenance & Equipment",
            department: "Engineering",
            frequency: "Weekly",
            role: "Technical Lead",
            summary: "Protects the technical infrastructure.",
            icon: "wrench",
            tasks: [
                { id: "RES-TEC-01", description: "Check POS internet failover and thermal printer status.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to bill during peak hours.", proof: "System Test", trainerNotes: "Test secondary ISP line." },
                { id: "RES-TEC-02", description: "Clean AC filters and check lobby temperature.", priority: "Low", riskLevel: "Low", consequence: "Guest discomfort.", proof: "Maintenance Log", trainerNotes: "Target lobby temp: 23°C." }
            ]
        },
        {
            title: "Digital ORM & Marketing",
            department: "Admin",
            frequency: "Daily",
            role: "Customer Experience Lead",
            summary: "Protects the online reputation.",
            icon: "star",
            tasks: [
                { id: "RES-CX-01", description: "Review Response Pulse: Reply to all Google reviews <24h.", priority: "High", riskLevel: "Medium", consequence: "Ranking drop and brand damage.", proof: "Dashboard", trainerNotes: "Address 1-star reviews first." },
                { id: "RES-CX-02", description: "Verify Google Maps 'Live Status' and Opening Hours.", priority: "Medium", riskLevel: "Low", consequence: "Guests arriving to a 'Closed' store.", proof: "App Check", trainerNotes: "Update for public holidays." }
            ]
        },
        {
            title: "Delivery & Logistics",
            department: "Logistics",
            frequency: "Daily",
            role: "Logistics Lead",
            summary: "Zero-fail framework for off-premise sales.",
            icon: "truck",
            tasks: [
                { id: "RES-DEL-01", description: "Packaging Audit: Verify bags are tamper-sealed correctly.", priority: "High", riskLevel: "Medium", consequence: "Tampering claims and poor CX.", proof: "Visual Check", trainerNotes: "Use double-fold seals." },
                { id: "RES-DEL-02", description: "Reconcile aggregator settlements against delivery dispatch logs.", priority: "High", riskLevel: "High", consequence: "Undetected commission leakage.", proof: "Log Match", trainerNotes: "Check Zomato/Swiggy reconciliation." }
            ]
        }
    ]
};
