
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
                { id: "KO-01", description: "Log temperatures of all refrigerators and freezers. Verify against external displays.", priority: "High", riskLevel: "High", consequence: "Temperature abuse leads to rapid bacterial growth and mass food poisoning.", proof: "Temperature Log Sign-off", trainerNotes: "Coaching Tip: Physically touch the condenser coils. If they are dusty or hot, the unit is failing even if the display looks 'ok'." },
                { id: "KO-02", description: "Inspect dry storage for signs of pest activity (droppings, gnawed packaging).", priority: "High", riskLevel: "High", consequence: "A single rodent sighting can lead to immediate health department closure and viral brand damage.", proof: "Pest Inspection Log", trainerNotes: "Coaching Tip: Check behind the bottom-most shelf. This is the first place pests hide." },
                { id: "KO-03", description: "Ensure separate color-coded cutting boards are sanitized and ready for use.", priority: "High", riskLevel: "High", consequence: "Cross-contamination of raw meat pathogens into cooked food is a critical HACCP failure.", proof: "Visual Station Audit", trainerNotes: "Coaching Tip: Look for deep grooves in boards. Deep grooves harbor bacteria." },
                { id: "KO-04", description: "Calibrate food thermometers using the ice-point method.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate thermometers lead to false 'safe' readings, allowing undercooked food.", proof: "Calibration Log" },
                { id: "KO-05", description: "Verify that all cleaning chemicals are properly labeled and stored away from food.", priority: "High", riskLevel: "High", consequence: "Chemical contamination of food is a severe health hazard and legal liability.", proof: "Storage Audit" }
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
                { id: "FOH-01", description: "Check public restrooms for cleanliness, stock levels, and odors.", priority: "High", riskLevel: "Medium", consequence: "Dirty restrooms are the #1 driver of negative reviews.", proof: "Restroom Log", trainerNotes: "Coaching Tip: Check the door handles and light switches." },
                { id: "FOH-02", description: "Inspect table settings and menus for stains or damage.", priority: "Medium", riskLevel: "Low", consequence: "Poor presentation devalues the brand.", proof: "Pre-service Walkthrough" },
                { id: "FOH-03", description: "Test music volume and lighting levels against the brand mood-guide.", priority: "Medium", riskLevel: "Low", consequence: "Incorrect ambiance makes guests uncomfortable.", proof: "Manager Check" },
                { id: "FOH-04", description: "Verify all FOH staff are wearing clean, pressed uniforms and name tags.", priority: "High", riskLevel: "Low", consequence: "Disorganized staff appearance damages guest trust.", proof: "Grooming Check" },
                { id: "FOH-05", description: "Ensure all POS terminals are functional and have receipt paper stocked.", priority: "High", riskLevel: "Medium", consequence: "POS failure during peak causes chaotic queueing.", proof: "System Test" }
            ]
        },
        {
            title: "Bar & Beverage Operations",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Manages beverage quality, stock security, and equipment safety.",
            icon: "wine",
            tasks: [
                { id: "BAR-01", description: "Check draft beer lines and gas pressures.", priority: "High", riskLevel: "Medium", consequence: "Poor pour quality and excessive waste.", proof: "Pressure Log" },
                { id: "BAR-02", description: "Inspect and clean ice machine. Check for mold or slime.", priority: "High", riskLevel: "High", consequence: "Contaminated ice is a major health risk.", proof: "Ice Bin Audit" },
                { id: "BAR-03", description: "Reconcile high-value spirits against previous night's closing stock.", priority: "High", riskLevel: "High", consequence: "Internal theft and 'free-pouring' leaks profit.", proof: "Spirit Inventory Log" },
                { id: "BAR-04", description: "Ensure garnish station is prepped and stored on ice.", priority: "Medium", riskLevel: "Low", consequence: "Wilting garnishes ruin the presentation of expensive drinks.", proof: "Visual Check" },
                { id: "BAR-05", description: "Clean coffee machine group heads and steam wands.", priority: "High", riskLevel: "Medium", consequence: "Bitter coffee and bacterial growth in wands.", proof: "Cleaning Log" }
            ]
        },
        {
            title: "Inventory & Storage Control",
            department: "Stores",
            frequency: "Weekly",
            role: "Stock Manager",
            summary: "Ensures stock integrity, prevents spoilage, and optimizes cash flow.",
            icon: "boxes",
            tasks: [
                { id: "INV-01", description: "Conduct full physical count of all dry stores and proteins.", priority: "High", riskLevel: "High", consequence: "Inaccurate stock leads to over-ordering and tied-up cash.", proof: "Stock Count Sheet" },
                { id: "INV-02", description: "Apply FIFO (First-In, First-Out) to all new deliveries.", priority: "High", riskLevel: "High", consequence: "Failure to rotate causes mass spoilage and profit loss.", proof: "Storage Audit" },
                { id: "INV-03", description: "Verify supplier invoices against physical quantity and quality received.", priority: "High", riskLevel: "High", consequence: "Accepting short-shipments is a direct financial loss.", proof: "GRN Sign-off" },
                { id: "INV-04", description: "Review 'Slow Mover' report and plan menu specials.", priority: "Medium", riskLevel: "Low", consequence: "Dead stock leading to total write-offs.", proof: "Waste Reduction Plan" },
                { id: "INV-05", description: "Check all storage areas for signs of moisture or structural damage.", priority: "High", riskLevel: "Medium", consequence: "Product damage from environmental failures.", proof: "Facility Audit" }
            ]
        },
        {
            title: "Closing & Nightly Security",
            department: "Management",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Ensures the facility is safe, secure, and ready for the next day.",
            icon: "moon",
            tasks: [
                { id: "CLOSE-01", description: "Reconcile total daily sales against bank deposits and digital settlements.", priority: "High", riskLevel: "High", consequence: "Unreconciled tills hide cash theft or billing errors.", proof: "Daily Sales Report" },
                { id: "CLOSE-02", description: "Verify all kitchen gas valves are shut off and electrical appliances are unplugged.", priority: "High", riskLevel: "High", consequence: "Catastrophic fire risk or gas leaks overnight.", proof: "Safety Walkthrough Log" },
                { id: "CLOSE-03", description: "Check that all exterior doors and windows are locked. Activate alarm.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry and burglary.", proof: "Security Log" },
                { id: "CLOSE-04", description: "Empty and clean all bar and floor trash bins. Cordon waste area.", priority: "Medium", riskLevel: "Medium", consequence: "Pest attraction and odors the following morning.", proof: "Visual Check" },
                { id: "CLOSE-05", description: "Update the manager's handover log with any maintenance or staff issues.", priority: "High", riskLevel: "Low", consequence: "Information loss between shifts leads to recurring problems.", proof: "Handover Log" }
            ]
        }
    ]
};
