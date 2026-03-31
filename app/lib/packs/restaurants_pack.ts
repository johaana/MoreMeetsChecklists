
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System",
    category: "Hospitality",
    description: "The definitive Sovereign v4.4 engine for multi-unit food and beverage groups. Standardizing 150+ technical control points from Owner vision to financial vitality.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks—across every branch in your group.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V4.4 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>Owner/COO Command</strong>: High-level visibility into group compliance and profit protection dashboards.", icon: "crown" },
        { text: "<strong>Financial Shield Hub</strong>: Unit-level tracking of Revenue, CoGS, and Waste to drive team accountability.", icon: "banknote" },
        { text: "<strong>Kitchen Opening (HACCP)</strong>: Zero-fail protocols for temperature, hygiene, and allergen separation.", icon: "sunrise" },
        { text: "<strong>Delivery & Aggregator Logic</strong>: Menu sync for Swiggy/Zomato, tamper-seal audits, and commission reconciliation.", icon: "truck" },
        { text: "<strong>EHS & Hard Safety</strong>: Technical logs for gas banks, LOTO, and fire-pathway clearance.", icon: "shield-check" },
        { text: "<strong>Engineering & MEP Vitals</strong>: Proactive maintenance for HVAC, plumbing, and electrical banks.", icon: "wrench" },
        { text: "<strong>Institutional Memory</strong>: Digital instructions that stay with the brand even when your best chef resigns.", icon: "history" }
    ],
    checklists: [
        {
            title: "Kitchen Opening & Prep",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", description: "Log temperatures of all walk-in chillers and freezers.", priority: "High", riskLevel: "High", consequence: "Pathogen growth and total stock loss.", proof: "Digital Log", trainerNotes: "Check at 8 AM daily. Reject if > 5°C." },
                { id: "RES-KIT-02", description: "Inspect dry storage for signs of rodents or pests.", priority: "High", riskLevel: "High", consequence: "Regulatory closure and contamination.", proof: "Visual Check", trainerNotes: "Look for droppings or chewed bags." },
                { id: "RES-KIT-03", description: "Verify sanitization of all surfaces using 200ppm strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination risk.", proof: "Test Strip", trainerNotes: "Dip strip for 10 seconds." },
                { id: "RES-KIT-04", description: "Calibrate all food probes using ice-point method.", priority: "Medium", riskLevel: "Medium", consequence: "False safety readings.", proof: "Calibration Log", trainerNotes: "Must read 0°C in ice slurry." },
                { id: "RES-KIT-05", description: "Audit staff health and grooming (nails, wounds, hair).", priority: "High", riskLevel: "Medium", consequence: "Hygiene failure.", proof: "Daily Audit", trainerNotes: "No open wounds allowed." },
                { id: "RES-KIT-06", description: "Verify oil quality using TPM meter (Target < 25%).", priority: "High", riskLevel: "Medium", consequence: "Carcinogenic buildup and poor food taste.", proof: "TPM Reading", trainerNotes: "Discard oil if TPM exceeds 25%." },
                { id: "RES-KIT-07", description: "Check dishwashing machine final rinse temperature (Min 82°C).", priority: "High", riskLevel: "High", consequence: "Ineffective sanitization of guest utensils.", proof: "Gauge Check", trainerNotes: "Verify steam is visible." },
                { id: "RES-KIT-08", description: "Verify allergen segregation in prep zones (Color-coded boards).", priority: "High", riskLevel: "High", consequence: "Fatal anaphylactic shock liability.", proof: "Visual Audit", trainerNotes: "Purple boards for allergens ONLY." },
                { id: "RES-KIT-09", description: "Inspect walk-in chiller gaskets for mold or tears.", priority: "Medium", riskLevel: "Low", consequence: "Energy loss and bacterial growth.", proof: "Visual Check", trainerNotes: "Clean with 10% bleach solution." },
                { id: "RES-KIT-10", description: "Confirm grease trap clear and functional.", priority: "High", riskLevel: "Medium", consequence: "Drainage backup and hygiene shutdown.", proof: "Physical Check", trainerNotes: "Clear before morning rush." },
                { id: "RES-KIT-11", description: "Log core temp of first batch of high-risk items (e.g. protein).", priority: "High", riskLevel: "High", consequence: "Undercooked food poisoning risk.", proof: "Core Log" },
                { id: "SCH-KIT-12", description: "Audit handwashing station soap and paper towel stock.", priority: "Medium", riskLevel: "Low", consequence: "Staff hygiene breakdown.", proof: "Visual Check" },
                { id: "SCH-KIT-13", description: "Check labeling of all prepped sauces (Prep vs Expiry).", priority: "High", riskLevel: "High", consequence: "Serving expired product.", proof: "Label Audit" },
                { id: "SCH-KIT-14", description: "Verify knife sharpening status and blade safety.", priority: "Medium", riskLevel: "Low", consequence: "Slower prep and staff injury.", proof: "Visual Audit" },
                { id: "SCH-KIT-15", description: "Inspect ceiling and fixtures for dust or flaking paint.", priority: "High", riskLevel: "Medium", consequence: "Physical contamination of food.", proof: "Walkthrough" }
            ]
        },
        {
            title: "Financial & Inventory Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Accountant",
            summary: "Profit protection and income/expense governance.",
            icon: "banknote",
            tasks: [
                { id: "RES-FIN-01", description: "Log Daily Gross Sales in the Financial Shield hub.", priority: "High", riskLevel: "Medium", consequence: "Loss of executive visibility into performance.", proof: "System Report", trainerNotes: "Match with POS daily close." },
                { id: "RES-FIN-02", description: "Reconcile POS digital settlements (UPI/Card) against captures.", priority: "High", riskLevel: "High", consequence: "Unidentified banking error or theft.", proof: "Bank Statement Sync" },
                { id: "RES-FIN-03", description: "Audit 'Cancelled Bill' report for fraud patterns.", priority: "High", riskLevel: "High", consequence: "Cashier-level bill-deletion theft.", proof: "Void Log" },
                { id: "RES-FIN-04", description: "Update Daily Raw Material purchase value.", priority: "High", riskLevel: "High", consequence: "Untracked margin erosion.", proof: "Purchase Ledger" },
                { id: "RES-FIN-05", description: "Perform 'Blind Stock Count' of top 5 high-value SKUs.", priority: "High", riskLevel: "High", consequence: "Internal theft masking as consumption.", proof: "Count Sheet" },
                { id: "RES-FIN-06", description: "Update Daily Waste Valuation from BOH incident logs.", priority: "High", riskLevel: "Medium", consequence: "Silent profit leaks remain hidden.", proof: "Waste Sheet" },
                { id: "RES-FIN-07", description: "Verify Petty Cash vouchers against manager initials.", priority: "Medium", riskLevel: "Low", consequence: "Unauthorized misc spending.", proof: "Voucher Audit" },
                { id: "RES-FIN-08", description: "Audit vendor invoices for price discrepancies (理论 vs 实际).", priority: "Medium", riskLevel: "Medium", consequence: "Supplier over-billing.", proof: "Match Note" },
                { id: "RES-FIN-09", description: "Verify status of vendor payments vs. credit terms.", priority: "Low", riskLevel: "Low", consequence: "Supply chain disruption.", proof: "Ageing Report" },
                { id: "RES-FIN-10", description: "Final daily reconciliation of Unit Contribution (GP).", priority: "High", riskLevel: "High", consequence: "Inaccurate business health data.", proof: "Shield Update" },
                { id: "RES-FIN-11", description: "Audit delivery aggregator payouts vs dashboard.", priority: "High", riskLevel: "Medium", consequence: "Missing commission credits.", proof: "Aggregator Log" },
                { id: "RES-FIN-12", description: "Check cash-drop vault schedule and dual-verification.", priority: "High", riskLevel: "High", consequence: "Armed robbery vulnerability.", proof: "Vault Log" },
                { id: "RES-FIN-13", description: "Verify labor cost % based on daily roster.", priority: "Medium", riskLevel: "Low", consequence: "Overstaffing during low demand.", proof: "Roster Audit" },
                { id: "RES-FIN-14", description: "Inspect inventory storage for proper FIFO and tagging.", priority: "Medium", riskLevel: "Medium", consequence: "Stock spoilage.", proof: "Walkthrough" },
                { id: "RES-FIN-15", description: "Verify calibration of main weighing scales.", priority: "High", riskLevel: "Medium", consequence: "Inventory and portion errors.", proof: "Calibration Note" }
            ]
        }
    ]
};
