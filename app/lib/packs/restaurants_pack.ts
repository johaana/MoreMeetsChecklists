
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
            title: "Kitchen Opening & HACCP Safety",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Critical start-up checks to ensure 100% food safety and operational readiness.",
            icon: "sunrise",
            tasks: [
                { id: "KO-01", description: "Log temperatures of all refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Bacterial growth and mass food poisoning outbreak.", proof: "Temperature Log", trainerNotes: "Physically check the condenser coils. If they are dusty or hot, the compressor is failing." },
                { id: "KO-02", description: "Inspect dry storage for signs of pest activity (droppings, gnaw marks).", priority: "High", riskLevel: "High", consequence: "Immediate health department closure and viral brand damage.", proof: "Pest Log", trainerNotes: "Check behind the bottom-most shelf and corner junctions. This is where rodents hide first." },
                { id: "KO-03", description: "Verify sanitization of all work surfaces using test strips.", priority: "High", riskLevel: "High", consequence: "Cross-contamination of raw meat pathogens to ready-to-eat food.", proof: "Sanitization Audit", trainerNotes: "Use 200ppm chlorine or 400ppm Quat. Test strips must change color to match the benchmark." },
                { id: "KO-04", description: "Calibrate food thermometers using ice-point method.", priority: "High", riskLevel: "Medium", consequence: "False 'safe' readings allowing undercooked food to reach guests.", proof: "Calibration Log", trainerNotes: "Temp must read 0°C in a 50/50 ice-water slurry. Adjust the nut under the dial if it drifts." },
                { id: "KO-05", description: "Perform staff health and grooming checks.", priority: "High", riskLevel: "High", consequence: "Staff-to-food transmission of Norovirus, Staph, or Typhoid.", proof: "Grooming Check", trainerNotes: "Look for open wounds or coughs. If present, staff must be reassigned to non-food duties." },
                { id: "KO-06", description: "Test industrial dishwasher final rinse temperature.", priority: "High", riskLevel: "High", consequence: "Improperly sanitized plates and cutlery reaching guests.", proof: "Dishwasher Log", trainerNotes: "Final rinse must reach 82°C (180°F) for thermal sanitization. Check the digital display." }
            ]
        },
        {
            title: "FOH Ambiance & Dining Room",
            department: "FOH",
            frequency: "Daily",
            role: "Restaurant Manager",
            summary: "Ensures the guest environment is consistently perfect and safe.",
            icon: "sparkles",
            tasks: [
                { id: "FOH-01", description: "Audit restrooms for cleanliness and consumable stock levels.", priority: "High", riskLevel: "Medium", consequence: "The #1 driver of negative guest reviews and hygiene perception failure.", proof: "Restroom Log", trainerNotes: "Check the door handles and light switches. They are the most touched and often missed areas." },
                { id: "FOH-02", description: "Inspect every menu cover and page for smudges or damage.", priority: "Medium", riskLevel: "Low", consequence: "Poor presentation devalues the brand and signals low management standards.", proof: "Menu Check", trainerNotes: "Wipe down every menu cover with a sanitized cloth before the shift starts." },
                { id: "FOH-03", description: "Calibrate dining room music volume and lighting dimmers.", priority: "Medium", riskLevel: "Low", consequence: "Incorrect ambiance makes guests uncomfortable, shortening their stay.", proof: "Ambiance Check", trainerNotes: "Lights should be dimmed 20% further for dinner service to create intimacy." },
                { id: "FOH-04", description: "Verify POS connectivity and receipt paper stock levels.", priority: "High", riskLevel: "Medium", consequence: "POS failure during peak hours causes chaotic billing and lost guest trust.", proof: "System Test", trainerNotes: "Keep two spare rolls of paper under every terminal. Never let a roll run out mid-bill." },
                { id: "FOH-05", description: "Inspect entrance mats and flooring for trip hazards.", priority: "High", riskLevel: "High", consequence: "Customer slip and fall accidents leading to litigation and injury.", proof: "Visual Check", trainerNotes: "Ensure no edges are curling up. Mop up any tracked-in rain moisture immediately." }
            ]
        },
        {
            title: "Bar & Beverage Governance",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Manages beverage quality, stock security, and equipment safety.",
            icon: "wine",
            tasks: [
                { id: "BAR-01", description: "Check draft beer line pressures and gas cylinder levels.", priority: "High", riskLevel: "Medium", consequence: "Excessive foam and wasted product, directly cutting into profit margins.", proof: "Pressure Log", trainerNotes: "Co2 should be set to 12-14 psi for standard lager. Check for 'burping' sounds in the lines." },
                { id: "BAR-02", description: "Inspect and clean ice machine bin. Check for slime or mold.", priority: "High", riskLevel: "High", consequence: "Contaminated ice is a major health risk and FSSAI violation.", proof: "Ice Bin Audit", trainerNotes: "Empty the bin weekly for a full deep clean with a food-grade descaler." },
                { id: "BAR-03", description: "Reconcile high-value spirits against previous night's closing.", priority: "High", riskLevel: "High", consequence: "Internal theft and 'free-pouring' leaks thousands in profit monthly.", proof: "Spirit Inventory", trainerNotes: "Use a weighing scale for open bottles to calculate exact pour cost vs sales." },
                { id: "BAR-04", description: "Clean coffee machine group heads and steam wands.", priority: "High", riskLevel: "Medium", consequence: "Bitter coffee quality and bacterial growth in old milk residue.", proof: "Cleaning Log", trainerNotes: "Backflush with detergent every night. Clean wands after *every* use." }
            ]
        },
        {
            title: "Safety, EHS & Fire Compliance",
            department: "Safety",
            frequency: "Weekly",
            role: "Safety Officer",
            summary: "Ensures the facility complies with all safety and fire regulations.",
            icon: "shield-alert",
            tasks: [
                { id: "SAFE-01", description: "Inspect all fire extinguishers for pressure and accessibility.", priority: "High", riskLevel: "High", consequence: "Non-functional safety equipment during a real kitchen fire.", proof: "Safety Log", trainerNotes: "Needle must be in the green zone. Ensure no boxes are blocking the extinguisher." },
                { id: "SAFE-02", description: "Test all smoke detectors and emergency fire alarms.", priority: "High", riskLevel: "High", consequence: "No early warning during a fire, leading to potential loss of life.", proof: "Test Log", trainerNotes: "Use the test button on each unit. Change batteries on a fixed 6-month schedule." },
                { id: "SAFE-03", description: "Verify all emergency fire exits are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Guest and staff entrapment during a fire or emergency evacuation.", proof: "Exit Audit", trainerNotes: "Walk the path. If you have to move a single chair to reach the door, it is a fail." },
                { id: "SAFE-04", description: "Inspect electrical wiring behind high-heat appliances.", priority: "High", riskLevel: "High", consequence: "Short-circuit fires in the kitchen area.", proof: "Maintenance Log", trainerNotes: "Look for charred plugs or frayed wires. These must be replaced immediately." }
            ]
        },
        {
            title: "Nightly Closing & Security",
            department: "Closing",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Ensures the facility is safe, secure, and ready for the next day.",
            icon: "moon",
            tasks: [
                { id: "CLOSE-01", description: "Verify all kitchen gas valves are shut off manually.", priority: "High", riskLevel: "High", consequence: "Overnight gas buildup and catastrophic explosion risk.", proof: "Safety Log", trainerNotes: "Physically check each station. The main solenoid should also be tripped." },
                { id: "CLOSE-02", description: "Reconcile daily sales reports against physical cash/deposits.", priority: "High", riskLevel: "High", consequence: "Unchecked theft or massive accounting errors.", proof: "Sales Report", trainerNotes: "Two people must witness the final cash count. Lock the safe immediately after." },
                { id: "CLOSE-03", description: "Ensure all exterior doors and windows are dead-bolted.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry, burglary, or vandalism.", proof: "Security Log", trainerNotes: "Check the back-door and loading bay specifically. They are the common weak points." },
                { id: "CLOSE-04", description: "Final manager walkthrough and handover signature.", priority: "High", riskLevel: "High", consequence: "Total breakdown of institutional accountability.", proof: "Master Log", trainerNotes: "Check the dishwasher drain and the walk-in fridge doors one last time." }
            ]
        }
    ]
};
