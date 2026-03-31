
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System",
    category: "Hospitality",
    description: "The definitive Sovereign v4.4 engine for multi-unit food and beverage groups. Standardizing 150+ technical control points from Owner vision to kitchen hygiene.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks—across every branch in your group.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 799,
    priceUSD: 9,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V4.4 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>Owner/COO Command</strong>: High-level visibility into group compliance and profit protection dashboards.", icon: "crown" },
        { text: "<strong>Kitchen Opening (HACCP)</strong>: Zero-fail protocols for temperature, hygiene, and allergen separation.", icon: "sunrise" },
        { text: "<strong>Service & Ambiance Logic</strong>: Hourly audits for music, lighting, and bathroom hygiene to protect guest scores.", icon: "armchair" },
        { text: "<strong>Delivery & Aggregator Command</strong>: Technical sync for Swiggy/Zomato and tamper-seal audits.", icon: "truck" },
        { text: "<strong>Financial Shield</strong>: Unit-level tracking of Revenue, CoGS, and Waste to drive accountability.", icon: "banknote" },
        { text: "<strong>Institutional Memory</strong>: Digital instructions that stay with the brand even when your best chef resigns.", icon: "history" }
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
                { id: "RES-EXE-01", description: "Review 'Empire Mood' and Group shift completion across all branches.", priority: "High", riskLevel: "Low", consequence: "Drift in operational discipline.", proof: "Dashboard Review", trainerNotes: "Check every Monday at 10 AM." },
                { id: "RES-EXE-02", description: "Audit 'Incident Log' for any unresolved food safety or legal alerts.", priority: "High", riskLevel: "High", consequence: "Massive legal liability and brand collapse.", proof: "Incident Audit", trainerNotes: "Verify all OPEN incidents have a resolution path." },
                { id: "RES-EXE-03", description: "Reconcile 'Financial Shield' savings against actual P&L wastage lines.", priority: "Medium", riskLevel: "Medium", consequence: "Profit erosion through unmonitored waste.", proof: "Financial Match", trainerNotes: "Target < 2% wastage total." },
                { id: "RES-EXE-04", description: "Verify next-quarter expansion site fit-out schedule.", priority: "Low", riskLevel: "Low", consequence: "Delayed growth timelines.", proof: "Project Calendar" },
                { id: "RES-EXE-05", description: "Audit regional manager field-visit logs for consistency.", priority: "High", riskLevel: "Medium", consequence: "Slipping standards in remote units.", proof: "Visit Register" },
                { id: "RES-EXE-06", description: "Review top 10% guest complaints for systemic patterns.", priority: "High", riskLevel: "Medium", consequence: "Repetitive failure and brand decay.", proof: "CRM Report" },
                { id: "RES-EXE-07", description: "Validate quarterly statutory license renewals (FSSAI, Fire, Health).", priority: "High", riskLevel: "High", consequence: "Immediate business closure and legal fines.", proof: "License Ledger" },
                { id: "RES-EXE-08", description: "Approve Capex for critical equipment replacement.", priority: "Medium", riskLevel: "Low", consequence: "Operational bottleneck due to old machines.", proof: "Approval Note" },
                { id: "RES-EXE-09", description: "Conduct blind-audit of a random branch kitchen.", priority: "High", riskLevel: "High", consequence: "False sense of compliance.", proof: "Audit Score" },
                { id: "RES-EXE-10", description: "Review Labor Cost % parity across the group.", priority: "High", riskLevel: "Medium", consequence: "Unidentified inefficiency or ghost-staffing.", proof: "Payroll Audit" }
            ]
        },
        {
            title: "Kitchen Opening & Prep",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", description: "Log temperatures of all walk-in chillers and freezers.", priority: "High", riskLevel: "High", consequence: "Pathogen growth and total stock loss.", proof: "Digital Log", trainerNotes: "Check at 8 AM daily." },
                { id: "RES-KIT-02", description: "Inspect dry storage for signs of rodents or pests.", priority: "High", riskLevel: "High", consequence: "Regulatory closure and contamination.", proof: "Visual Check" },
                { id: "RES-KIT-03", description: "Verify sanitization of all surfaces using 200ppm strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination risk.", proof: "Test Strip" },
                { id: "RES-KIT-04", description: "Calibrate all food probes using ice-point method.", priority: "Medium", riskLevel: "Medium", consequence: "False safety readings.", proof: "Calibration Log" },
                { id: "RES-KIT-05", description: "Audit staff health and grooming (nails, wounds, hair).", priority: "High", riskLevel: "Medium", consequence: "Hygiene failure.", proof: "Daily Audit" },
                { id: "RES-KIT-06", description: "Log TPM (Total Polar Materials) of frying oil (Target < 25%).", priority: "High", riskLevel: "High", consequence: "Carcinogenic oil use and FSSAI penalties.", proof: "Oil Vitals Log" },
                { id: "RES-KIT-07", description: "Verify correct thawing procedure for frozen proteins.", priority: "High", riskLevel: "High", consequence: "High bacterial load in cooked food.", proof: "Thaw Log" },
                { id: "RES-KIT-08", description: "Check vegetable wash concentration (50-100ppm chlorine).", priority: "Medium", riskLevel: "Medium", consequence: "Chemical burn or microbial presence.", proof: "Strip Test" },
                { id: "RES-KIT-09", description: "Inspect dishwashing machine final rinse temp (Target: 82°C).", priority: "High", riskLevel: "High", consequence: "Ineffective sanitization of plates.", proof: "Gauge Reading" },
                { id: "RES-KIT-10", description: "Verify label compliance: Prep Date / Use By on all containers.", priority: "High", riskLevel: "High", consequence: "Expired goods reaching the line.", proof: "Visual Sweep" },
                { id: "RES-KIT-11", description: "Audit knife sharpening and structural integrity.", priority: "Medium", riskLevel: "Medium", consequence: "Accidental cuts and poor yield.", proof: "Tool Audit" },
                { id: "RES-KIT-12", description: "Confirm separate cutting boards for raw vs cooked.", priority: "High", riskLevel: "High", consequence: "Fatal food poisoning risk.", proof: "Visual Check" },
                { id: "RES-KIT-13", description: "Log today's yield for specialty items (e.g., Dough, Gravy).", priority: "Medium", riskLevel: "Low", consequence: "Unexpected 86 list/shortage.", proof: "Yield Sheet" },
                { id: "RES-KIT-14", description: "Inspect grease traps for cleanliness and drainage.", priority: "Medium", riskLevel: "High", consequence: "Drainage backup and hygiene shutdown.", proof: "Visual Check" },
                { id: "RES-KIT-15", description: "Verify first-aid kit in kitchen is stocked with burn-gel.", priority: "High", riskLevel: "Medium", consequence: "Inability to treat line-injuries.", proof: "Kit Inventory" }
            ]
        },
        {
            title: "Delivery & Logistics Command",
            department: "Logistics",
            frequency: "Daily",
            role: "Dispatch Lead",
            summary: "Zero-fail framework for Swiggy, Zomato and Home Delivery.",
            icon: "truck",
            tasks: [
                { id: "RES-DEL-01", description: "Packaging Audit: Verify bags are tamper-sealed correctly.", priority: "High", riskLevel: "Medium", consequence: "Tampering risk and poor rating.", proof: "Visual Check" },
                { id: "RES-DEL-02", description: "Monitor Rider TAT: Time from order ready to pickup.", priority: "Medium", riskLevel: "Low", consequence: "Cold food and rating drop.", proof: "TAT Log" },
                { id: "RES-DEL-03", description: "Menu Sync: Check availability on Zomato/Swiggy against 86 list.", priority: "High", riskLevel: "Medium", consequence: "High cancellation rates and platform penalties.", proof: "App Check" },
                { id: "RES-DEL-04", description: "Audit delivery-bag thermal integrity and sanitization.", priority: "Medium", riskLevel: "Low", consequence: "Temperature drop and contamination.", proof: "Physical Check" },
                { id: "RES-DEL-05", description: "Reconcile aggregator dashboard payouts against POS records.", priority: "High", riskLevel: "High", consequence: "Unidentified commission leakage.", proof: "Financial Match" },
                { id: "RES-DEL-06", description: "Log feedback for 'No-Show' or 'Rash' delivery riders.", priority: "Medium", riskLevel: "Low", consequence: "Service failure due to external logistics.", proof: "Portal Log" },
                { id: "RES-DEL-07", description: "Verify availability of tamper-evident seal stock.", priority: "High", riskLevel: "Low", consequence: "Packaging security compromise.", proof: "Stock Check" },
                { id: "RES-DEL-08", description: "Inspect delivery bike fleet fuel and maintenance (if owned).", priority: "High", riskLevel: "Medium", consequence: "Delivery interruption.", proof: "MHE Log" },
                { id: "RES-DEL-09", description: "Conduct temperature audit of packed hot-bags (Target: > 60°C).", priority: "High", riskLevel: "Medium", consequence: "Safety risk during transit.", proof: "Probe Log" },
                { id: "RES-DEL-10", description: "Monitor peak-hour order density and deploy extra runners.", priority: "Medium", riskLevel: "Low", consequence: "Missed sales and long wait times.", proof: "Roster Check" }
            ]
        },
        {
            title: "Security & Asset Protection",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Command for the physical perimeter and internal shrinkage.",
            icon: "shield-check",
            tasks: [
                { id: "RES-SEC-01", description: "Verify CCTV recording status and camera focal points.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or accidents.", proof: "System Check" },
                { id: "RES-SEC-02", description: "Audit cash-drop schedule and vault security protocols.", priority: "High", riskLevel: "High", consequence: "Vulnerability to armed robbery.", proof: "Cash Log" },
                { id: "RES-SEC-03", description: "Patrol external exits and fire-escape clearance.", priority: "High", riskLevel: "High", consequence: "Fatal trap during emergency.", proof: "Patrol Log" },
                { id: "RES-SEC-04", description: "Inspect staff locker area for unauthorized items.", priority: "Medium", riskLevel: "Medium", consequence: "Internal theft hiding spots.", proof: "Visual Audit" },
                { id: "RES-SEC-05", description: "Verify functionality of silent panic buttons at POS.", priority: "High", riskLevel: "High", consequence: "Failure to alert during crisis.", proof: "Test Log" }
            ]
        },
        {
            title: "Financial Shield & Inventory",
            department: "Finance",
            frequency: "Daily",
            role: "Accountant",
            summary: "Profit protection and margin governance.",
            icon: "banknote",
            tasks: [
                { id: "RES-FIN-01", description: "Log Daily Gross Sales into the Financial Shield ledger.", priority: "High", riskLevel: "Medium", consequence: "Unidentified revenue gaps.", proof: "Ledger Entry" },
                { id: "RES-FIN-02", description: "Audit Raw Material Invoices against Ledger entry.", priority: "High", riskLevel: "High", consequence: "Inflated CoGS due to invoice errors.", proof: "Match Note" },
                { id: "RES-FIN-03", description: "Update Daily Waste Valuation from BOH incident logs.", priority: "High", riskLevel: "Medium", consequence: "Silent profit leakage through unmeasured waste.", proof: "Waste Log" },
                { id: "RES-FIN-04", description: "Reconcile POS digital settlements against bank captures.", priority: "High", riskLevel: "High", consequence: "Uncaptured payment gateway failures.", proof: "Bank Reconcile" },
                { id: "RES-FIN-05", description: "Audit petty cash float and emergency repair bills.", priority: "Medium", riskLevel: "Low", consequence: "Internal theft.", proof: "Voucher Audit" }
            ]
        }
    ]
};
