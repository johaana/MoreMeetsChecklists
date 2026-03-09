
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
                { id: "KO-01", description: "Check and log temperatures of all refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Failure leads to bacterial growth, spoilage, and potential food poisoning outbreaks.", proof: "Temp Log Entry", trainerNotes: "Check behind the rubber seals for mold buildup and verify the internal thermometer matches the digital display." },
                { id: "KO-02", description: "Ensure separate cutting boards and utensils are used for veg/non-veg prep.", priority: "High", riskLevel: "High", consequence: "Prevents cross-contamination which can lead to severe allergic reactions or religious violations.", proof: "Visual Supervisor Audit", trainerNotes: "Verify that red boards (meat) are stored at least 2 feet away from green boards (veg)." },
                { id: "KO-03", description: "Verify all cleaning chemical bottles are correctly labeled.", priority: "High", riskLevel: "Medium", consequence: "Prevents accidental chemical contamination of food and ensures safe usage by staff.", proof: "Visual Check", trainerNotes: "Ensure labels are legible and not peeling due to moisture; replace any handwritten labels with printed ones." },
                { id: "KO-04", description: "Check that all equipment safety guards are in place and functional.", priority: "High", riskLevel: "High", consequence: "Missing guards can lead to severe finger/hand injuries and massive regulatory fines.", proof: "Equipment Check Log", trainerNotes: "Physically test the emergency stop button on the heavy-duty dough mixer." },
                { id: "KO-05", description: "Ensure handwash stations are stocked with soap and sanitizer.", priority: "High", riskLevel: "Medium", consequence: "Lack of hand hygiene is the primary vector for spreading pathogens like Salmonella.", proof: "Visual Check", trainerNotes: "If a dispenser is empty, investigate if the stockroom is out or if the staff simply forgot to refill." },
                { id: "KO-06", description: "Calibrate all food thermometers using the ice-point method.", priority: "High", riskLevel: "High", consequence: "Inaccurate readings lead to undercooked food being served, creating a major safety risk.", proof: "Calibration Log", trainerNotes: "Place the probe in a glass of crushed ice and water; it must read exactly 0°C (32°F)." },
                { id: "KO-07", description: "Check that exhaust hoods and fire suppression systems are armed.", priority: "High", riskLevel: "High", consequence: "A failed suppression system can turn a small flare-up into a total building fire.", proof: "Pressure Gauge Check", trainerNotes: "Ensure the pressure needle is firmly in the green zone." },
                { id: "KO-08", description: "Verify first aid kit is accessible and fully stocked.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat minor cuts or burns can escalate injuries and decrease morale.", proof: "First Aid Kit Log", trainerNotes: "Pay special attention to the quantity of burn gels and sterile eye-wash." }
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
                { id: "CSM-01", description: "Log cold storage temperatures twice daily (Opening/Closing).", priority: "High", riskLevel: "High", consequence: "Failure to monitor can lead to thousands in lost profit due to overnight spoilage.", proof: "Temperature Log", trainerNotes: "Log must be signed off by 10 AM and 10 PM daily by the manager on duty." },
                { id: "CSM-02", description: "Verify digital logs and check for temperature spikes.", priority: "High", riskLevel: "Medium", consequence: "Identifies early signs of compressor failure before the unit actually breaks down.", proof: "Digital Log Review", trainerNotes: "Look for 'sawtooth' patterns on the graph indicating doors being left open too long." },
                { id: "CSM-03", description: "Test temperature alarms weekly.", priority: "High", riskLevel: "High", consequence: "A silent alarm means a breakdown at 2 AM won't be caught until all stock is warm and ruined.", proof: "Alarm Test Log", trainerNotes: "Gently warm the probe with a warm cloth to verify the audible siren triggers at 5°C." },
                { id: "CSM-04", description: "Follow evacuation/transfer procedure if temp exceeds 5°C for >1 hour.", priority: "High", riskLevel: "High", consequence: "Critical limit for food safety; stock must be moved or discarded to prevent poisoning.", proof: "Incident Transfer Log", trainerNotes: "Move high-value seafood and meats first to the backup walk-in." }
            ]
        }
    ]
};
