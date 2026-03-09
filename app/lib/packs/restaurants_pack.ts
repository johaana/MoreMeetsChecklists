
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations Pack",
    category: "Hospitality",
    description: "Stop Health Department closures, viral food-safety scandals, and inconsistent service—before they destroy your restaurant's reputation and bottom line.",
    heroHeadline: "Stop Health Department closures and viral food-safety scandals.",
    heroSubheadline: "Built for FSSAI-aligned establishments that take zero-risk food safety seriously.",
    pricingUrgency: "One food-safety incident or negative viral review costs 100x more than this entire system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "Bestseller",
    badgeVariant: "default",
    bestseller: true,
    whoIsItFor: ["Restaurant Owners", "Cafe Owners", "Cloud Kitchen Operators", "Heads of F&B"],
    sampleItems: [
        { text: "<strong>Stop</strong> catastrophic foodborne illness outbreaks with FSSAI & HACCP-aligned daily kitchen protocols.", icon: "shield-check" },
        { text: "<strong>Eliminate</strong> inventory spoilage and thousands in lost profit with rigorous cold chain monitoring.", icon: "thermometer" },
        { text: "<strong>Prevent</strong> fatal allergen cross-contamination with a bulletproof 'Special Diet' order flow.", icon: "star" },
        { text: "<strong>Shield</strong> your brand from negative viral reviews with a structured service incident and recovery process.", icon: "recycle" },
        { text: "<strong>Guarantee</strong> a pristine environment with verifiable sanitation, waste, and pest control schedules.", icon: "sparkles" },
        { text: "<strong>Secure</strong> your revenue and eliminate cash leakage with daily closing and reconciliation procedures.", icon: "banknote" }
    ],
    checklists: [
        {
            title: "Kitchen Opening & Food Safety",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Critical start-up checks to ensure 100% food safety and operational readiness.",
            icon: "sunrise",
            tasks: [
                { 
                    id: "KO-01", 
                    description: "Log temperatures of all refrigerators and freezers. Verify against external displays.", 
                    priority: "High", 
                    riskLevel: "High", 
                    consequence: "Temperature abuse leads to rapid bacterial growth and mass food poisoning.", 
                    proof: "Temperature Log Sign-off",
                    trainerNotes: "Coach Tip: Physically touch the condenser coils. If they are dusty or hot, the fridge is struggling even if the display looks 'ok'."
                },
                { 
                    id: "KO-02", 
                    description: "Inspect dry storage for signs of pest activity (droppings, gnawed packaging).", 
                    priority: "High", 
                    riskLevel: "High", 
                    consequence: "A single rodent sighting can lead to immediate health department closure and viral brand damage.", 
                    proof: "Pest Inspection Log",
                    trainerNotes: "Coach Tip: Check behind the bottom-most shelf. This is the first place pests hide where cleaners usually miss."
                },
                { 
                    id: "KO-03", 
                    description: "Ensure separate color-coded cutting boards are sanitized and ready for use.", 
                    priority: "High", 
                    riskLevel: "High", 
                    consequence: "Cross-contamination of raw meat into veg or cooked food is a critical HACCP failure.", 
                    proof: "Visual Station Audit",
                    trainerNotes: "Coach Tip: Look for deep grooves in boards. Deep grooves harbor bacteria even after sanitizing; replace if found."
                },
                { 
                    id: "KO-04", 
                    description: "Test chemical concentration in 3-compartment sink using test strips.", 
                    priority: "High", 
                    riskLevel: "Medium", 
                    consequence: "Ineffective sanitizer does not kill pathogens; too much is toxic. Both are major audit failures.", 
                    proof: "Chemical Titration Log",
                    trainerNotes: "Coach Tip: Ensure the water is lukewarm. Hot water breaks down many sanitizers, making them useless."
                },
                { 
                    id: "KO-05", 
                    description: "Check staff grooming: clean aprons, hairnets, and short/clean fingernails.", 
                    priority: "High", 
                    riskLevel: "Medium", 
                    consequence: "Physical contaminants (hair) and bacterial transfer from hands are leading causes of complaints.", 
                    proof: "Daily Staff Inspection",
                    trainerNotes: "Coach Tip: Inspect the undersides of nails. That is the true measure of a staff member's hygiene standard."
                }
            ]
        },
        {
            title: "Cold Chain & Inventory Integrity",
            department: "Operations",
            frequency: "Twice Daily",
            role: "Inventory Manager",
            summary: "Protecting margins and quality through rigorous temperature and rotation control.",
            icon: "thermometer",
            tasks: [
                { 
                    id: "CSM-01", 
                    description: "Verify FIFO rotation in all walk-ins. Check for 'use-by' labels on all prepped items.", 
                    priority: "High", 
                    riskLevel: "Medium", 
                    consequence: "Failure to rotate stock leads to using expired ingredients, posing a health risk and eroding profit.", 
                    proof: "Stock Rotation Audit",
                    trainerNotes: "Coach Tip: If a container doesn't have a label, discard it immediately. Zero tolerance for 'mystery food' in the fridge."
                },
                { 
                    id: "CSM-02", 
                    description: "Perform 'Squeeze Test' on vacuum-packed meats to check for seal failures.", 
                    priority: "Medium", 
                    riskLevel: "Medium", 
                    consequence: "A failed seal allows anaerobic bacteria to grow, causing spoilage before the official expiry date.", 
                    proof: "Quality Check Log",
                    trainerNotes: "Coach Tip: Look for excess liquid (purge) in the bag. High purge means the product was likely temperature-abused during transport."
                },
                { 
                    id: "CSM-03", 
                    description: "Check evaporator fans for ice buildup or restricted airflow.", 
                    priority: "High", 
                    riskLevel: "Medium", 
                    consequence: "Restricted airflow causes uneven cooling, meaning food in the back could be in the danger zone.", 
                    proof: "Mechanical Observation Log",
                    trainerNotes: "Coach Tip: Ensure crates are stacked at least 2 inches away from walls to allow air to circulate around the food."
                }
            ]
        }
    ]
};
