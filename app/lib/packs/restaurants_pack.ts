
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
                    consequence: "Temperature abuse leads to rapid bacterial growth and mass food poisoning. This is a primary cause of health department closure.", 
                    proof: "Temperature Log Sign-off",
                    trainerNotes: "Coaching Tip: Physically touch the condenser coils. If they are dusty or hot, the unit is failing even if the display looks 'ok'."
                },
                { 
                    id: "KO-02", 
                    description: "Inspect dry storage for signs of pest activity (droppings, gnawed packaging).", 
                    priority: "High", 
                    riskLevel: "High", 
                    consequence: "A single rodent sighting can lead to immediate health department closure and viral brand damage.", 
                    proof: "Pest Inspection Log",
                    trainerNotes: "Coaching Tip: Check behind the bottom-most shelf. This is the first place pests hide where standard cleaners usually miss."
                },
                { 
                    id: "KO-03", 
                    description: "Ensure separate color-coded cutting boards are sanitized and ready for use.", 
                    priority: "High", 
                    riskLevel: "High", 
                    consequence: "Cross-contamination of raw meat pathogens into cooked food is a critical HACCP failure. Can be fatal for high-risk guests.", 
                    proof: "Visual Station Audit",
                    trainerNotes: "Coaching Tip: Look for deep grooves in boards. Deep grooves harbor bacteria even after sanitizing; replace if found."
                }
            ]
        },
        {
            title: "FOH Ambiance & Service Audit",
            department: "Service",
            frequency: "Per Shift",
            role: "Restaurant Manager",
            summary: "Ensures the guest environment is consistently perfect.",
            icon: "sparkles",
            tasks: [
                { 
                    id: "FOH-01", 
                    description: "Check public restrooms for cleanliness, stock levels, and odors.", 
                    priority: "High", 
                    riskLevel: "Medium", 
                    consequence: "Dirty restrooms are the #1 driver of negative reviews and suggest poor hygiene standards to guests.", 
                    proof: "Restroom Log",
                    trainerNotes: "Coaching Tip: Check the door handles and light switches. They are high-touch areas that accumulate grime fast."
                },
                { 
                    id: "FOH-02", 
                    description: "Inspect table settings and menus for stains or damage.", 
                    priority: "Medium", 
                    riskLevel: "Low", 
                    consequence: "Poor presentation devalues the brand and suggests a lack of care in the kitchen as well.", 
                    proof: "Pre-service Walkthrough",
                    trainerNotes: "Coaching Tip: Check the bottom of the menus. This is where fingerprints and food drips often go unnoticed."
                }
            ]
        }
    ]
};
