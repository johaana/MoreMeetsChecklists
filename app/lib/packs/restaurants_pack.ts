
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
                { id: "KO-01", description: "Log temperatures of all refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Bacterial growth and mass food poisoning.", proof: "Temperature Log", trainerNotes: "Physically touch the condenser coils. If they are dusty or hot, the unit is failing." },
                { id: "KO-02", description: "Inspect dry storage for signs of pest activity.", priority: "High", riskLevel: "High", consequence: "Health department closure and viral brand damage.", proof: "Pest Log", trainerNotes: "Check behind the bottom-most shelf. This is the first place pests hide." },
                { id: "KO-03", description: "Verify sanitization of all work surfaces.", priority: "High", riskLevel: "High", consequence: "Cross-contamination of raw meat pathogens.", proof: "Visual Audit", trainerNotes: "Use 200ppm chlorine or equivalent. Check with test strips." },
                { id: "KO-04", description: "Calibrate food thermometers using ice-point method.", priority: "High", riskLevel: "Medium", consequence: "False 'safe' readings allowing undercooked food.", proof: "Calibration Log", trainerNotes: "Temp must read 0°C in a 50/50 ice-water slurry." },
                { id: "KO-05", description: "Check health and grooming of all kitchen staff.", priority: "High", riskLevel: "High", consequence: "Staff-to-food transmission of Norovirus/Staph.", proof: "Grooming Check", trainerNotes: "Look for open wounds or coughs. If present, staff must be reassigned." },
                { id: "KO-06", description: "Verify availability of clean uniforms and hairnets.", priority: "Medium", riskLevel: "Low", consequence: "Physical contaminants (hair) in guest meals.", proof: "Visual Check", trainerNotes: "Hair must be fully enclosed. No stray strands." },
                { id: "KO-07", description: "Test industrial dishwashers for correct temperature.", priority: "High", riskLevel: "High", consequence: "Improperly sanitized plates and cutlery.", proof: "Dishwasher Log", trainerNotes: "Final rinse must reach 82°C (180°F) for sanitation." },
                { id: "KO-08", description: "Prepare fresh sanitizing solution buckets.", priority: "High", riskLevel: "Medium", consequence: "Spread of germs via dirty cloths.", proof: "Bucket Check", trainerNotes: "Change solution every 2 hours or when visibly dirty." },
                { id: "KO-09", description: "Review daily production/prep list against bookings.", priority: "Medium", riskLevel: "Low", consequence: "Inefficient prep leading to service delays.", proof: "Prep Sheet", trainerNotes: "Check for high-labor items like hand-rolled pasta or aged meats." },
                { id: "KO-10", description: "Inspect gas lines and burner ignition.", priority: "High", riskLevel: "High", consequence: "Gas leaks or catastrophic kitchen fires.", proof: "Safety Walkthrough", trainerNotes: "Smell for gas before lighting any equipment." }
            ]
        },
        {
            title: "FOH Ambiance & Service Excellence",
            department: "Service",
            frequency: "Daily",
            role: "Restaurant Manager",
            summary: "Ensures the guest environment is consistently perfect.",
            icon: "sparkles",
            tasks: [
                { id: "FOH-01", description: "Audit restrooms for cleanliness and stock levels.", priority: "High", riskLevel: "Medium", consequence: "The #1 driver of negative guest reviews.", proof: "Restroom Log", trainerNotes: "Check the door handles and light switches. They must be spotless." },
                { id: "FOH-02", description: "Inspect table settings and menus for damage.", priority: "Medium", riskLevel: "Low", consequence: "Poor presentation devalues the luxury positioning.", proof: "Pre-service Check", trainerNotes: "Wipe down every menu cover with sanitizer." },
                { id: "FOH-03", description: "Calibrate music volume and lighting levels.", priority: "Medium", riskLevel: "Low", consequence: "Incorrect ambiance makes guests uncomfortable.", proof: "Manager Check", trainerNotes: "Lights should be dimmed 20% further for dinner service." },
                { id: "FOH-04", description: "Verify POS connectivity and receipt paper stock.", priority: "High", riskLevel: "Medium", consequence: "POS failure during peak causes chaotic billing.", proof: "System Test", trainerNotes: "Keep two spare rolls of paper under every terminal." },
                { id: "FOH-05", description: "Brief staff on daily specials and 86'd items.", priority: "High", riskLevel: "Low", consequence: "Guest disappointment when items are ordered but unavailable.", proof: "Briefing Notes", trainerNotes: "Test one server on the ingredients of the special." },
                { id: "FOH-06", description: "Check all glass surfaces and mirrors for smudges.", priority: "Low", riskLevel: "Low", consequence: "Dirty mirrors signal overall poor management.", proof: "Visual Check", trainerNotes: "Use a microfiber cloth and dedicated glass cleaner." },
                { id: "FOH-07", description: "Verify temperature of guest areas (Dining Room).", priority: "Medium", riskLevel: "Low", consequence: "Guests leave early if the room is too cold or hot.", proof: "AC Check", trainerNotes: "Ideal dining temp is 22-24°C." },
                { id: "FOH-08", description: "Inspect cutlery and glassware for water spots.", priority: "Medium", riskLevel: "Low", consequence: "Unappetizing presentation.", proof: "Polishing Check", trainerNotes: "Steam glassware before polishing for a perfect finish." },
                { id: "FOH-09", description: "Ensure first-aid kit and AED are accessible.", priority: "High", riskLevel: "High", consequence: "Inability to respond to a guest medical emergency.", proof: "Safety Audit", trainerNotes: "Check expiry dates on bandages and pads." },
                { id: "FOH-10", description: "Confirm staff grooming and uniform compliance.", priority: "High", riskLevel: "Low", consequence: "Disorganized appearance damages brand trust.", proof: "Staff Roster", trainerNotes: "No wrinkled shirts. No visible facial hair beyond policy." }
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
                { id: "BAR-01", description: "Check draft beer lines and gas pressures.", priority: "High", riskLevel: "Medium", consequence: "Excessive foam and wasted product profit.", proof: "Pressure Log", trainerNotes: "Co2 should be set to 12-14 psi for standard lager." },
                { id: "BAR-02", description: "Inspect and clean ice machine. Check for mold.", priority: "High", riskLevel: "High", consequence: "Contaminated ice is a major health risk.", proof: "Ice Bin Audit", trainerNotes: "Empty the bin weekly for a full deep clean." },
                { id: "BAR-03", description: "Reconcile high-value spirits against opening stock.", priority: "High", riskLevel: "High", consequence: "Internal theft and 'free-pouring' leaks profit.", proof: "Spirit Inventory", trainerNotes: "Weigh open bottles to calculate exact pour cost." },
                { id: "BAR-04", description: "Ensure garnish station is prepped and stored on ice.", priority: "Medium", riskLevel: "Low", consequence: "Wilting garnishes ruin expensive cocktails.", proof: "Visual Check", trainerNotes: "Cut garnishes fresh every 4 hours." },
                { id: "BAR-05", description: "Clean coffee machine group heads and steam wands.", priority: "High", riskLevel: "Medium", consequence: "Bitter coffee and bacterial growth in milk residue.", proof: "Cleaning Log", trainerNotes: "Backflush with detergent every night." },
                { id: "BAR-06", description: "Check refrigeration temps for wine and beer chillers.", priority: "High", riskLevel: "Medium", consequence: "Warm beverages lead to guest dissatisfaction.", proof: "Temp Log", trainerNotes: "Red wine at 16°C, Whites at 8°C." },
                { id: "BAR-07", description: "Verify glass washer chemical levels.", priority: "High", riskLevel: "Medium", consequence: "Greasy glassware ruins beer head and flavor.", proof: "Chemical Check", trainerNotes: "Check both detergent and rinse-aid levels." },
                { id: "BAR-08", description: "Inspect bar stools and counters for safety.", priority: "Medium", riskLevel: "Medium", consequence: "Guest injury from loose screws or splinters.", proof: "Safety Walkthrough", trainerNotes: "Tighten stool bolts monthly." },
                { id: "BAR-09", description: "Monitor 'Duty of Care' - identify intoxicated guests.", priority: "High", riskLevel: "High", consequence: "Over-serving leads to legal liability and fights.", proof: "Incident Log", trainerNotes: "Offer water and food to guests showing signs of intoxication." },
                { id: "BAR-10", description: "Organize back-bar for peak speed/service.", priority: "Low", riskLevel: "Low", consequence: "Slow service during busy shifts.", proof: "Visual Check", trainerNotes: "Fastest-moving spirits must be in the 'speed rail'." }
            ]
        },
        {
            title: "Inventory & Receiving",
            department: "Stores",
            frequency: "Weekly",
            role: "Stock Manager",
            summary: "Ensures stock integrity, prevents spoilage, and optimizes cash flow.",
            icon: "boxes",
            tasks: [
                { id: "INV-01", description: "Conduct full physical count of all dry stores.", priority: "High", riskLevel: "High", consequence: "Inaccurate stock leads to over-ordering and tied-up cash.", proof: "Stock Sheet", trainerNotes: "Count top-to-bottom, left-to-right." },
                { id: "INV-02", description: "Apply FIFO (First-In, First-Out) to all new deliveries.", priority: "High", riskLevel: "High", consequence: "Mass spoilage and significant profit loss.", proof: "Storage Audit", trainerNotes: "Place newest items behind existing stock." },
                { id: "INV-03", description: "Verify supplier invoices against physical weight.", priority: "High", riskLevel: "High", consequence: "Accepting short-shipments is a direct financial loss.", proof: "GRN Sign-off", trainerNotes: "Always weigh meat and expensive seafood yourself." },
                { id: "INV-04", description: "Review 'Slow Mover' report and plan menu specials.", priority: "Medium", riskLevel: "Low", consequence: "Dead stock leading to total write-offs.", proof: "Waste Plan", trainerNotes: "If protein is 2 days from expiry, run a chef's special." },
                { id: "INV-05", description: "Check all storage for moisture or structural damage.", priority: "High", riskLevel: "Medium", consequence: "Product damage from leaking pipes or roof.", proof: "Facility Audit", trainerNotes: "Look for water stains on ceiling tiles." },
                { id: "INV-06", description: "Audit security of high-value items (Saffron, Truffles).", priority: "High", riskLevel: "High", consequence: "Internal shrinkage of expensive ingredients.", proof: "Secure Log", trainerNotes: "Keep these items in a locked cabinet with 1 key holder." },
                { id: "INV-07", description: "Clean and reorganize shelves.", priority: "Low", riskLevel: "Low", consequence: "Disorganized stores lead to ordering errors.", proof: "Visual Check", trainerNotes: "Group items by category (e.g., all oils together)." },
                { id: "INV-08", description: "Inspect loading bay for pests and hygiene.", priority: "High", riskLevel: "High", consequence: "Pests entering the building via deliveries.", proof: "Receiving Log", trainerNotes: "Break down external cardboard boxes outside the kitchen." },
                { id: "INV-09", description: "Verify all frozen goods are rock-solid on delivery.", priority: "High", riskLevel: "High", consequence: "Refrozen food is a major food safety hazard.", proof: "Temp Probe Log", trainerNotes: "Reject if items show signs of thawing (softness/fluid)." },
                { id: "INV-10", description: "Track and log all kitchen waste by category.", priority: "High", riskLevel: "Medium", consequence: "Unknown profit leakages from over-prepping.", proof: "Waste Tracker", trainerNotes: "Separate 'Spoilage' waste from 'Prep' waste." }
            ]
        },
        {
            title: "Nightly Closing & Security",
            department: "Management",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Ensures the facility is safe, secure, and ready for the next day.",
            icon: "moon",
            tasks: [
                { id: "CLOSE-01", description: "Reconcile total sales against bank deposits.", priority: "High", riskLevel: "High", consequence: "Unreconciled tills hide cash theft or billing errors.", proof: "Sales Report", trainerNotes: "Count cash in the back office, never on the floor." },
                { id: "CLOSE-02", description: "Verify all kitchen gas valves are shut off.", priority: "High", riskLevel: "High", consequence: "Catastrophic fire risk or gas leaks overnight.", proof: "Safety Log", trainerNotes: "Physically check the main valve handle." },
                { id: "CLOSE-03", description: "Ensure all exterior doors/windows are locked.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry and burglary.", proof: "Security Log", trainerNotes: "Check the back-alley delivery door twice." },
                { id: "CLOSE-04", description: "Empty and clean all bar and floor trash bins.", priority: "Medium", riskLevel: "Medium", consequence: "Pest attraction and odors the following morning.", proof: "Visual Check", trainerNotes: "Wash bins with disinfectant twice weekly." },
                { id: "CLOSE-05", description: "Update the manager's handover log.", priority: "High", riskLevel: "Low", consequence: "Information loss leads to recurring shift problems.", proof: "Handover Log", trainerNotes: "Note any 'Near Miss' incidents or guest complaints." },
                { id: "CLOSE-06", description: "Unplug non-essential electrical appliances.", priority: "Medium", riskLevel: "Medium", consequence: "Fire risk and high utility costs.", proof: "Power Walkthrough", trainerNotes: "Toasters, blenders, and POS screens must be off." },
                { id: "CLOSE-07", description: "Check that all cold storage doors are tightly shut.", priority: "High", riskLevel: "High", consequence: "Massive inventory loss from temperature rise.", proof: "Fridge Check", trainerNotes: "Listen for the seal 'hiss' when closing." },
                { id: "CLOSE-08", description: "Turn off all AC and lighting zones.", priority: "Low", riskLevel: "Low", consequence: "Excessive energy waste.", proof: "BMS/Visual", trainerNotes: "Keep only emergency lighting active." },
                { id: "CLOSE-09", description: "Set the security alarm system.", priority: "High", riskLevel: "High", consequence: "Insurance claims may be denied if the alarm is off.", proof: "Alarm Log", trainerNotes: "Ensure you have the 'Armed' confirmation beep." },
                { id: "CLOSE-10", description: "Clear and sanitize the staff lockers/break room.", priority: "Low", riskLevel: "Low", consequence: "Pests and low morale among the team.", proof: "Visual Check", trainerNotes: "No food items to be left in lockers overnight." }
            ]
        }
    ]
};
