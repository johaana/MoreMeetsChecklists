
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
            title: "Kitchen Opening Checklist",
            department: "F&B",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Ensures the kitchen is ready and safe for service.",
            icon: "sunrise",
            tasks: [
                { id: "KO-01", description: "Check and log temperatures of all refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Prevents bacteria growth and food spoilage which leads to poisoning.", proof: "Temp Log Entry", trainerNotes: "Check the rubber seals for mold and ensure the internal thermometer matches the outside display." },
                { id: "KO-02", description: "Ensure separate cutting boards are ready for Veg vs Non-Veg prep.", priority: "High", riskLevel: "High", consequence: "Avoids cross-contamination and respects guest dietary choices.", proof: "Visual Check", trainerNotes: "Green for Veg, Red for Raw Meat. Keep them separated by at least 2 feet." },
                { id: "KO-03", description: "Verify all cleaning chemicals are clearly labeled.", priority: "High", riskLevel: "Medium", consequence: "Prevents accidental poisonings if a chemical is mistaken for an ingredient.", proof: "Visual Audit", trainerNotes: "If a label is peeling, replace it immediately. Never use handwritten labels." },
                { id: "KO-04", description: "Check that all equipment safety guards are active.", priority: "High", riskLevel: "High", consequence: "Prevents severe finger and hand injuries during operation.", proof: "Safety Log", trainerNotes: "Physically press the Emergency Stop button on the mixer to confirm it works." },
                { id: "KO-05", description: "Refill all handwash stations with soap and sanitizer.", priority: "High", riskLevel: "Medium", consequence: "Basic hygiene prevents the spread of Salmonella and E. coli.", proof: "Visual Check", trainerNotes: "If the dispenser is empty, it means the staff isn't washing hands. Fix the supply immediately." },
                { id: "KO-06", description: "Calibrate food thermometers using the ice-point method.", priority: "High", riskLevel: "High", consequence: "Inaccurate tools lead to serving raw or unsafe food.", proof: "Calibration Log", trainerNotes: "Dip in ice water; it must show 0°C. If it's off by 1 degree, it's failed." },
                { id: "KO-07", description: "Ensure fire suppression system pressure is in the green.", priority: "High", riskLevel: "High", consequence: "Failure could lead to a total loss of the building in a fire.", proof: "Gauge Check", trainerNotes: "Show the team where the manual pull station is located." },
                { id: "KO-08", description: "Stock up the first-aid kit with burn gel and bandages.", priority: "Medium", riskLevel: "Medium", consequence: "Minor injuries can become infected if not treated on the spot.", proof: "Stock Check", trainerNotes: "Focus on burn treatments; they are the most common kitchen injury." }
            ]
        },
        {
            title: "Cold Storage Monitoring SOP",
            department: "F&B",
            frequency: "Daily",
            role: "Kitchen Manager",
            summary: "Ensures the freshness and safety of all temperature-sensitive inventory.",
            icon: "thermometer",
            tasks: [
                { id: "CSM-01", description: "Log cold storage temperatures twice daily (Morning/Night).", priority: "High", riskLevel: "High", consequence: "Saves thousands in profit by catching refrigeration failure early.", proof: "Temperature Log", trainerNotes: "Sign-off must happen by 10 AM. Don't let staff 'pencil whip' (fake) the numbers." },
                { id: "CSM-02", description: "Check for ice buildup on evaporator coils.", priority: "High", riskLevel: "Medium", consequence: "Ice buildup means the fridge is working too hard and will fail soon.", proof: "Visual Check", trainerNotes: "If you see ice, call the technician before the compressor dies." },
                { id: "CSM-03", description: "Test the temperature alarm siren.", priority: "High", riskLevel: "High", consequence: "A silent failure at night means a total loss of expensive stock.", proof: "Alarm Test Log", trainerNotes: "Hold a warm cup near the sensor to trigger the siren and verify it's loud." },
                { id: "CSM-04", description: "Follow the 'Safe Transfer' plan if temp stays above 5°C.", priority: "High", riskLevel: "High", consequence: "Critical limit for safety; failure results in food poisoning risk.", proof: "Transfer Log", trainerNotes: "Move high-value meats and dairy first. Don't wait for the temp to reach 10°C." }
            ]
        }
    ]
};
