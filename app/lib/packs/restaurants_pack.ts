
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
                { id: "KO-01", description: "Check and log temperatures of all refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Failure can lead to bacterial growth and foodborne illness outbreaks.", proof: "Temp Log", trainerNotes: "Check behind the rubber seals for mold buildup during this walkthrough." },
                { id: "KO-02", description: "Ensure separate cutting boards and utensils are used for veg/non-veg prep.", priority: "High", riskLevel: "High", consequence: "Prevents cross-contamination, which can cause severe allergic reactions.", proof: "Visual Audit", trainerNotes: "Verify that the red boards are kept at least 2 feet away from green boards." },
                { id: "KO-03", description: "Verify all cleaning chemical bottles are correctly labeled.", priority: "High", riskLevel: "Medium", consequence: "Prevents accidental chemical contamination of food.", proof: "Visual Check", trainerNotes: "Ensure labels are legible and not peeling off due to moisture." },
                { id: "KO-04", description: "Check that all equipment safety guards are in place and functional.", priority: "High", riskLevel: "High", consequence: "Missing guards can lead to severe injuries and regulatory fines.", proof: "Equipment Check Log", trainerNotes: "Test the emergency stop button on the heavy-duty mixer." },
                { id: "KO-05", description: "Ensure handwash stations are stocked with soap and sanitizer.", priority: "High", riskLevel: "Medium", consequence: "Lack of hand hygiene is a primary cause of foodborne illness.", proof: "Visual Check", trainerNotes: "If the dispenser is broken, raise a maintenance ticket immediately." },
                { id: "KO-06", description: "Calibrate food thermometers.", priority: "High", riskLevel: "High", consequence: "Inaccurate readings lead to serving undercooked, unsafe food.", proof: "Calibration Log", trainerNotes: "Use the ice-point method (0°C) for maximum precision." },
                { id: "KO-07", description: "Check that exhaust hoods and ventilation are working.", priority: "High", riskLevel: "Medium", consequence: "Poor ventilation is a fire risk and creates an unsafe environment.", proof: "System Check", trainerNotes: "Check for rattling sounds that indicate motor failure." },
                { id: "KO-08", description: "Ensure first aid kit is stocked.", priority: "High", riskLevel: "Medium", consequence: "Inability to treat common kitchen injuries like cuts and burns.", proof: "First Aid Kit Log", trainerNotes: "Check expiry dates on burn gels and sterile wipes." },
                { id: "KO-09", description: "Check that the fire suppression system is armed and ready.", priority: "High", riskLevel: "High", consequence: "A failed system can lead to a catastrophic kitchen fire.", proof: "System Check", trainerNotes: "Verify the pressure gauge is in the green zone." },
                { id: "KO-10", description: "Brief the kitchen team on the day's menu and any specials.", priority: "Medium", riskLevel: "Low", consequence: "Lack of communication leads to inconsistency and errors.", proof: "Briefing Notes", trainerNotes: "Call out specific allergens in the 'Special of the Day'." }
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
                { id: "CSM-01", description: "Log cold storage temperatures twice daily.", priority: "High", riskLevel: "High", consequence: "Failure to monitor can lead to thousands in spoiled inventory.", proof: "Temperature Log", trainerNotes: "Log must be signed off by 10 AM and 10 PM daily." },
                { id: "CSM-02", description: "Verify digital logs if available.", priority: "High", riskLevel: "High", consequence: "Provides continuous records and identifies faults.", proof: "Digital Log Review", trainerNotes: "Look for 'sawtooth' patterns indicating door left open." },
                { id: "CSM-03", description: "Test temperature alarms weekly.", priority: "High", riskLevel: "High", consequence: "Failed alarms mean failures overnight go unnoticed.", proof: "Alarm Test Log", trainerNotes: "Hold the probe in warm water to verify trigger." },
                { id: "CSM-04", description: "Follow escalation procedure for any temperature deviations.", priority: "High", riskLevel: "High", consequence: "Slow response results in loss of all stock in the unit.", proof: "Incident Report", trainerNotes: "Move high-value meats to backup freezer if temp exceeds 5°C for >1hr." }
            ]
        }
    ]
};
