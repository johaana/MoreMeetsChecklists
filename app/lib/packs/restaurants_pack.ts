
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
                { id: "KO-05", description: "Perform staff health and grooming checks.", priority: "High", riskLevel: "High", consequence: "Staff-to-food transmission of pathogens like Norovirus or Staph.", proof: "Grooming Check", trainerNotes: "Look for open wounds or coughs. If present, staff must be reassigned to non-food duties." },
                { id: "KO-06", description: "Test industrial dishwasher final rinse temperature.", priority: "High", riskLevel: "High", consequence: "Improperly sanitized plates and cutlery reaching guests.", proof: "Dishwasher Log", trainerNotes: "Final rinse must reach 82°C (180°F) for thermal sanitization." },
                { id: "KO-07", description: "Check vegetable wash concentration.", priority: "High", riskLevel: "Medium", consequence: "Ingestion of pesticides or soil-borne pathogens.", proof: "Chemical Log", trainerNotes: "Vegetables must soak for 5 mins in 50ppm chlorine solution then be rinsed." },
                { id: "KO-08", description: "Verify 'Use-By' labels on all prepped items.", priority: "High", riskLevel: "High", consequence: "Serving expired or spoiled ingredients.", proof: "Visual Label Check", trainerNotes: "Any item without a prep-date and use-by label must be discarded immediately." },
                { id: "KO-09", description: "Empty and clean fat traps/grease interceptors.", priority: "Medium", riskLevel: "Low", consequence: "Drainage blockages and foul odors in the kitchen.", proof: "Maintenance Log", trainerNotes: "Scrape out solid fats and dispose of in solid waste." },
                { id: "KO-10", description: "Ensure sharp knives are safely stored.", priority: "Medium", riskLevel: "Medium", consequence: "Staff cuts and workplace accidents.", proof: "Visual Check", trainerNotes: "Knives must be in magnetic strips or blocks, never loose in drawers." }
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
                { id: "FOH-01", description: "Audit restrooms for cleanliness and consumable stock levels.", priority: "High", riskLevel: "Medium", consequence: "The #1 driver of negative guest reviews.", proof: "Restroom Log", trainerNotes: "Check the door handles and light switches. They are often missed." },
                { id: "FOH-02", description: "Inspect every menu cover and page for smudges or damage.", priority: "Medium", riskLevel: "Low", consequence: "Poor presentation devalues the brand.", proof: "Menu Check", trainerNotes: "Wipe down every menu cover with a sanitized cloth before the shift." },
                { id: "FOH-03", description: "Calibrate dining room music volume and lighting dimmers.", priority: "Medium", riskLevel: "Low", consequence: "Incorrect ambiance makes guests uncomfortable.", proof: "Ambiance Check", trainerNotes: "Lights should be dimmed 20% further for dinner service." },
                { id: "FOH-04", description: "Verify POS connectivity and receipt paper stock levels.", priority: "High", riskLevel: "Medium", consequence: "POS failure during peak hours causes chaotic billing.", proof: "System Test", trainerNotes: "Keep two spare rolls of paper under every terminal." },
                { id: "FOH-05", description: "Inspect entrance mats and flooring for trip hazards.", priority: "High", riskLevel: "High", consequence: "Customer slip and fall accidents leading to litigation.", proof: "Visual Check", trainerNotes: "Ensure no edges are curling up." },
                { id: "FOH-06", description: "Check salt/pepper shakers and condiments for cleanliness.", priority: "Low", riskLevel: "Low", consequence: "Sticky containers give a poor impression.", proof: "Visual Check", trainerNotes: "Shakers must be wiped daily. Replace empty ones with clean ones." },
                { id: "FOH-07", description: "Verify reservation list and table assignments.", priority: "High", riskLevel: "Low", consequence: "Double-bookings and frustrated VIP guests.", proof: "Reservation Log", trainerNotes: "Ensure high-chair or special request notes are clearly marked." },
                { id: "FOH-08", description: "Inspect cutlery and glassware for water spots or chips.", priority: "Medium", riskLevel: "Low", consequence: "Perception of low-grade hygiene.", proof: "Polish Log", trainerNotes: "Use steam and a lint-free microfiber cloth for all wine glasses." },
                { id: "FOH-09", description: "Wipe down high-chairs and booster seats.", priority: "High", riskLevel: "Medium", consequence: "Spread of germs to vulnerable infants.", proof: "Cleaning Log", trainerNotes: "Use a baby-safe sanitizer." },
                { id: "FOH-10", description: "Check sidewalk/entrance curb appeal.", priority: "Low", riskLevel: "Low", consequence: "Lost walk-in traffic due to poor first impression.", proof: "Visual Check", trainerNotes: "Sweep the entrance every 2 hours." }
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
                { id: "BAR-01", description: "Check draft beer line pressures and gas cylinder levels.", priority: "High", riskLevel: "Medium", consequence: "Excessive foam and wasted product.", proof: "Pressure Log", trainerNotes: "Co2 should be set to 12-14 psi for standard lager." },
                { id: "BAR-02", description: "Inspect and clean ice machine bin. Check for slime or mold.", priority: "High", riskLevel: "High", consequence: "Contaminated ice is a major health risk.", proof: "Ice Bin Audit", trainerNotes: "Empty the bin weekly for a full deep clean." },
                { id: "BAR-03", description: "Reconcile high-value spirits against previous night's closing.", priority: "High", riskLevel: "High", consequence: "Internal theft and 'free-pouring' leaks profit.", proof: "Spirit Inventory", trainerNotes: "Use a weighing scale for open bottles to calculate exact pour cost." },
                { id: "BAR-04", description: "Clean coffee machine group heads and steam wands.", priority: "High", riskLevel: "Medium", consequence: "Bitter coffee quality and bacterial growth.", proof: "Cleaning Log", trainerNotes: "Backflush with detergent every night." },
                { id: "BAR-05", description: "Check expiry of juices and dairy in bar fridges.", priority: "High", riskLevel: "Medium", consequence: "Sour drinks and health risk.", proof: "Visual Label Check", trainerNotes: "Open juices only stay fresh for 48 hours." },
                { id: "BAR-06", description: "Sanitize garnish containers and cutting boards.", priority: "Medium", riskLevel: "Medium", consequence: "Fruit flies and cross-contamination.", proof: "Visual Check", trainerNotes: "Cut garnishes fresh daily." },
                { id: "BAR-07", description: "Test glasswasher chemical levels.", priority: "High", riskLevel: "High", consequence: "Bacterial spread via glasses.", proof: "Chemical Log", trainerNotes: "Verify that rinse aid and detergent levels are sufficient." },
                { id: "BAR-08", description: "Inventory check of wine cellar/cooler.", priority: "Medium", riskLevel: "Low", consequence: "Running out of top-selling varietals.", proof: "Stock Sheet", trainerNotes: "Ensure white wines are at 8-10°C." },
                { id: "BAR-09", description: "Check for fruit flies/pests under bar counters.", priority: "Medium", riskLevel: "Medium", consequence: "Infestation and closure risk.", proof: "Pest Audit", trainerNotes: "Pour boiling water down drains nightly to kill larvae." },
                { id: "BAR-10", description: "Verify bar mat and counter sanitization.", priority: "Low", riskLevel: "Low", consequence: "Odors and sticky surfaces.", proof: "Visual Check", trainerNotes: "Scrub mats and air-dry overnight." }
            ]
        },
        {
            title: "Nightly Closing & Security",
            department: "Operations",
            frequency: "Daily",
            role: "Duty Manager",
            summary: "Ensures the facility is secure and fire-safe before the team departs.",
            icon: "moon",
            tasks: [
                { id: "CLOSE-01", description: "Verify all kitchen gas valves are shut off manually.", priority: "High", riskLevel: "High", consequence: "Overnight gas buildup and catastrophic explosion risk.", proof: "Safety Log", trainerNotes: "Physically check each station knob." },
                { id: "CLOSE-02", description: "Inspect all external doors and windows for secure locking.", priority: "High", riskLevel: "High", consequence: "Unsecured premises vulnerable to burglary.", proof: "Security Walkthrough", trainerNotes: "Don't just check the main door; verify back-of-house exits." },
                { id: "CLOSE-03", description: "Ensure all high-heat equipment (fryers, ovens) is powered down.", priority: "High", riskLevel: "High", consequence: "Electrical fire risk from unattended appliances.", proof: "Power Log", trainerNotes: "Fryers must be turned off at the main switch." },
                { id: "CLOSE-04", description: "Reconcile daily cash and digital payments against POS.", priority: "High", riskLevel: "High", consequence: "Unreconciled tills hide internal theft or billing errors.", proof: "Reconciliation Report", trainerNotes: "Dual sign-off required for any variance over 500 INR." },
                { id: "CLOSE-05", description: "Audit trash area for unauthorized items (hidden stock).", priority: "Medium", riskLevel: "High", consequence: "Common method for employee theft of inventory.", proof: "Visual Audit", trainerNotes: "Check large bags for sealed product before disposal." },
                { id: "CLOSE-06", description: "Turn off all non-essential lighting and HVAC.", priority: "Medium", riskLevel: "Low", consequence: "Excessive energy costs and equipment wear.", proof: "Energy Log", trainerNotes: "Dining room AC should be off 15 mins after last guest leaves." },
                { id: "CLOSE-07", description: "Final walk of restrooms to ensure no guests remain.", priority: "High", riskLevel: "High", consequence: "Safety and security risk if a guest is locked inside.", proof: "Walkthrough Log", trainerNotes: "Check individual stalls and disabled units." },
                { id: "CLOSE-08", description: "Set the security alarm system.", priority: "High", riskLevel: "High", consequence: "Insurance voided if alarm is not set during an incident.", proof: "Alarm System Code", trainerNotes: "Verify the 'Ready' light is green before entering code." },
                { id: "CLOSE-09", description: "Ensure all staff have safely exited or have transport.", priority: "Medium", riskLevel: "Medium", consequence: "Staff safety and welfare liability.", proof: "Attendance Log", trainerNotes: "Verify late-shift transport has arrived for female staff." },
                { id: "CLOSE-10", description: "Log any operational issues for the morning shift.", priority: "Medium", riskLevel: "Low", consequence: "Loss of continuity and delayed morning repairs.", proof: "Handover Log", trainerNotes: "Note any equipment that acted up during peak service." }
            ]
        },
        {
            title: "Weekly Deep Cleaning",
            department: "Operations",
            frequency: "Weekly",
            role: "Sanitation Lead",
            summary: "Beyond daily hygiene; focusing on hard-to-reach areas and heavy grease buildup.",
            icon: "bucket",
            tasks: [
                { id: "WEEK-DEEP-01", description: "Scrub and sanitize walk-in fridge floors and walls.", priority: "High", riskLevel: "Medium", consequence: "Listeria growth and food safety audit failure.", proof: "Cleaning Log", trainerNotes: "Use a heavy-duty degreaser then a food-grade sanitizer." },
                { id: "WEEK-DEEP-02", description: "Clean behind and under heavy line equipment (fryers/ovens).", priority: "High", riskLevel: "High", consequence: "Primary attractant for rodents and cockroach infestations.", proof: "Visual Audit", trainerNotes: "Pull equipment forward to expose the wall-floor junction." },
                { id: "WEEK-DEEP-03", description: "Wash and sanitize all dry-store shelving units.", priority: "Medium", riskLevel: "Low", consequence: "Dust and pest attraction in storage areas.", proof: "Visual Check", trainerNotes: "Remove all stock before wiping shelves." },
                { id: "WEEK-DEEP-04", description: "Deep clean and de-scale all FOH restroom floor drains.", priority: "Medium", riskLevel: "Low", consequence: "Foul odors deterring guests from returning.", proof: "Cleaning Log", trainerNotes: "Use an enzyme-based drain cleaner to break down organic matter." },
                { id: "WEEK-DEEP-05", description: "Clean and polish all decorative lighting and ceiling fans.", priority: "Low", riskLevel: "Low", consequence: "Visible dust falling on guest food; poor brand image.", proof: "Visual Check", trainerNotes: "Use a damp cloth to prevent dust from flying." },
                { id: "WEEK-DEEP-06", description: "Sanitize high-touch back-of-house surfaces (phones, handles).", priority: "Medium", riskLevel: "Medium", consequence: "Internal spread of illness among staff.", proof: "Sanitization Log", trainerNotes: "Wipe all door handles and computer keyboards." },
                { id: "WEEK-DEEP-07", description: "Flush and sanitize all floor drains with boiling water.", priority: "High", riskLevel: "High", consequence: "Infestation of fruit flies and drain gnats.", proof: "Pest Prevention Log", trainerNotes: "Mix 1 cup of bleach per gallon of water." },
                { id: "WEEK-DEEP-08", description: "Clean the exterior signage and entrance glass.", priority: "Low", riskLevel: "Low", consequence: "Poor first impression for walk-in guests.", proof: "Photo of entrance", trainerNotes: "Focus on cobwebs in the top corners of the doorway." },
                { id: "WEEK-DEEP-09", description: "Deep clean the ice machine following manufacturer SOP.", priority: "High", riskLevel: "High", consequence: "Slime buildup in ice; FSSAI violation.", proof: "Maintenance Log", trainerNotes: "Empty ice, use de-scaler, then sanitize twice." },
                { id: "WEEK-DEEP-10", description: "Inventory check of all cleaning chemicals.", priority: "Medium", riskLevel: "Low", consequence: "Running out of essential sanitizers mid-week.", proof: "Chemical Stock Sheet", trainerNotes: "Order if levels are below 25%." }
            ]
        },
        {
            title: "Equipment Maintenance (Monthly)",
            department: "Engineering",
            frequency: "Monthly",
            role: "Maintenance Lead",
            summary: "Proactive engineering checks to extend asset life and prevent failures.",
            icon: "settings",
            tasks: [
                { id: "MAIN-01", description: "Clean condenser coils on all refrigeration units.", priority: "High", riskLevel: "High", consequence: "Compressor burnout and total stock loss.", proof: "Maintenance Log", trainerNotes: "Use a soft brush or vacuum. Do not bend the fins." },
                { id: "MAIN-02", description: "Inspect and lubricate commercial mixer planetary gears.", priority: "Medium", riskLevel: "Medium", consequence: "Gear failure halting prep operations.", proof: "Maintenance Log", trainerNotes: "Use only food-grade grease." },
                { id: "MAIN-03", description: "Test fire suppression system pressure and nozzles.", priority: "High", riskLevel: "High", consequence: "Failure to control a kitchen fire automatically.", proof: "Safety Tag", trainerNotes: "Ensure nozzles are not blocked by grease buildup." },
                { id: "MAIN-04", description: "Calibrate oven thermostats using an external probe.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent cooking results and wasted product.", proof: "Calibration Log", trainerNotes: "Wait for oven to stabilize for 20 mins before reading." },
                { id: "MAIN-05", description: "Check gas lines for leaks using soapy water test.", priority: "High", riskLevel: "High", consequence: "Undetected gas leaks and explosion risk.", proof: "Safety Log", trainerNotes: "Check all flexible hose connections." },
                { id: "MAIN-06", description: "Inspect dishwashers for scale buildup and clear nozzles.", priority: "Medium", riskLevel: "Low", consequence: "Poor wash quality and heater element failure.", proof: "Visual Audit", trainerNotes: "Run a de-scaling cycle if white powder is visible." },
                { id: "MAIN-07", description: "Verify emergency lighting battery backup (30 min test).", priority: "High", riskLevel: "High", consequence: "Panic during a power outage or fire.", proof: "Battery Test Log", trainerNotes: "Tripping the breaker should activate lights immediately." },
                { id: "MAIN-08", description: "Check all fire extinguisher expiry dates and pressures.", priority: "High", riskLevel: "High", consequence: "Non-functional safety equipment during an emergency.", proof: "Inspection Tag", trainerNotes: "Gauge must be in the green zone." },
                { id: "MAIN-09", description: "Inspect POS hardware and wiring for rodent damage.", priority: "Low", riskLevel: "Medium", consequence: "System outage during peak service.", proof: "Visual Check", trainerNotes: "Check wires behind the server station." },
                { id: "MAIN-10", description: "Audit spare parts inventory (bulbs, fuses, filters).", priority: "Medium", riskLevel: "Low", consequence: "Extended downtime for simple repairs.", proof: "Inventory List", trainerNotes: "Keep 2 spare bulbs for every type of FOH light." }
            ]
        }
    ]
};
