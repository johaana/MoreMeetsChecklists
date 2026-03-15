
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
                { id: "FOH-05", description: "Inspect entrance mats and flooring for trip hazards.", priority: "High", riskLevel: "High", consequence: "Customer slip and fall accidents leading to litigation.", proof: "Visual Check", trainerNotes: "Ensure no edges are curling up." }
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
                { id: "BAR-05", description: "Check expiry of juices and dairy in bar fridges.", priority: "High", riskLevel: "Medium", consequence: "Sour drinks and health risk.", proof: "Visual Label Check", trainerNotes: "Open juices only stay fresh for 48 hours." }
            ]
        },
        {
            title: "Inventory & Receiving Control",
            department: "Stores",
            frequency: "Daily",
            role: "Store Keeper",
            summary: "Protects profit margins by ensuring raw materials enter the building accurately.",
            icon: "package-search",
            tasks: [
                { id: "INV-01", description: "Verify item weights against delivery invoices.", priority: "High", riskLevel: "Medium", consequence: "Short-shipment and hidden cost of goods increase.", proof: "Weight Check Log", trainerNotes: "Always weigh high-value items like meats and cheeses individually." },
                { id: "INV-02", description: "Inspect produce for signs of wilt, mold, or pests.", priority: "High", riskLevel: "High", consequence: "Accepting low-quality stock that will spoil within 24 hours.", proof: "Receiving QC Log", trainerNotes: "Check the bottom of crates for trapped moisture or rotten items." },
                { id: "INV-03", description: "Check temp of chilled/frozen items on arrival.", priority: "High", riskLevel: "High", consequence: "Broken cold chain leading to rapid bacterial spoilage.", proof: "Inbound Temp Log", trainerNotes: "Reject any frozen items that show signs of thawing and re-freezing." },
                { id: "INV-04", description: "Update 'Out of Stock' list for FOH.", priority: "Medium", riskLevel: "Low", consequence: "Customer disappointment after ordering unavailable items.", proof: "Communication Log", trainerNotes: "Send a group text/WhatsApp to all servers by 11:30 AM." },
                { id: "INV-05", description: "Reconcile daily linen count (dirty vs clean returned).", priority: "Low", riskLevel: "Medium", consequence: "Theft or loss of expensive napkins and tablecloths.", proof: "Linen Log", trainerNotes: "Count bags before the vendor leaves the site." }
            ]
        },
        {
            title: "Safety & EHS Compliance",
            department: "Engineering",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "Life-safety checks to prevent fire, explosion, or injury.",
            icon: "shield-alert",
            tasks: [
                { id: "EHS-01", description: "Test fire alarm call points and check exit clarity.", priority: "High", riskLevel: "High", consequence: "Catastrophic loss of life during an emergency.", proof: "Safety Walkthrough", trainerNotes: "Walk the entire path. A single chair blocking a fire door is a fatal flaw." },
                { id: "EHS-02", description: "Perform Soap Test on gas line junctions.", priority: "High", riskLevel: "High", consequence: "Undetected gas leaks and explosion risk.", proof: "Leak Test Log", trainerNotes: "Apply soapy water to valves. If bubbles form, shut off the main valve immediately." },
                { id: "EHS-03", description: "Inspect first-aid kit stock levels and expiry.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat minor burns or cuts on the floor.", proof: "Kit Audit", trainerNotes: "Ensure burn gel and antiseptic wipes are always available." },
                { id: "EHS-04", description: "Verify functionality of emergency lighting.", priority: "High", riskLevel: "High", consequence: "Panic and injuries during a power failure.", proof: "Battery Test Log", trainerNotes: "Trip the local breaker to ensure auto-activation." },
                { id: "EHS-05", description: "Check fire extinguisher pressure gauges.", priority: "High", riskLevel: "High", consequence: "Equipment failure when needed most.", proof: "Tag Check", trainerNotes: "Gauge must be in the green zone. If not, notify vendor for recharge." }
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
                { id: "CLOSE-01", description: "Verify all kitchen gas valves are shut off manually.", priority: "High", riskLevel: "High", consequence: "Overnight gas buildup and explosion risk.", proof: "Safety Log", trainerNotes: "Physically check each station knob." },
                { id: "CLOSE-02", description: "Inspect all external doors and windows for secure locking.", priority: "High", riskLevel: "High", consequence: "Unsecured premises vulnerable to burglary.", proof: "Security Walkthrough", trainerNotes: "Don't just check the main door; verify back-of-house exits." },
                { id: "CLOSE-03", description: "Reconcile daily cash and digital payments against POS.", priority: "High", riskLevel: "High", consequence: "Unreconciled tills hide internal theft.", proof: "Reconciliation Report", trainerNotes: "Dual sign-off required for any variance over 500 INR." },
                { id: "CLOSE-04", description: "Set the security alarm system.", priority: "High", riskLevel: "High", consequence: "Insurance voided if alarm is not set.", proof: "Alarm System Code", trainerNotes: "Verify the 'Ready' light is green before entering code." },
                { id: "CLOSE-05", description: "Final walk of restrooms to ensure no guests remain.", priority: "High", riskLevel: "High", consequence: "Safety and security risk if a guest is locked inside.", proof: "Walkthrough Log", trainerNotes: "Check individual stalls and disabled units." }
            ]
        },
        {
            title: "Weekly Deep Cleaning",
            department: "Operations",
            frequency: "Weekly",
            role: "Sanitation Lead",
            summary: "Intensive cleaning of hard-to-reach areas.",
            icon: "bucket",
            tasks: [
                { id: "WEEK-DEEP-01", description: "Scrub and sanitize walk-in fridge floors and walls.", priority: "High", riskLevel: "Medium", consequence: "Listeria growth and food safety audit failure.", proof: "Cleaning Log", trainerNotes: "Use a heavy-duty degreaser then a food-grade sanitizer." },
                { id: "WEEK-DEEP-02", description: "Clean behind and under heavy line equipment (fryers/ovens).", priority: "High", riskLevel: "High", consequence: "Primary attractant for rodents and cockroach infestations.", proof: "Visual Audit", trainerNotes: "Pull equipment forward to expose the wall-floor junction." },
                { id: "WEEK-DEEP-03", description: "Flush all floor drains with boiling water and bleach.", priority: "High", riskLevel: "High", consequence: "Infestation of fruit flies and drain gnats.", proof: "Pest Prevention Log", trainerNotes: "Mix 1 cup of bleach per gallon of water." }
            ]
        },
        {
            title: "Equipment Maintenance (Monthly)",
            department: "Engineering",
            frequency: "Monthly",
            role: "Maintenance Lead",
            summary: "Proactive checks to extend asset life.",
            icon: "settings",
            tasks: [
                { id: "MAIN-01", description: "Clean condenser coils on all refrigeration units.", priority: "High", riskLevel: "High", consequence: "Compressor burnout and total stock loss.", proof: "Maintenance Log", trainerNotes: "Use a soft brush or vacuum. Do not bend the fins." },
                { id: "MAIN-02", description: "Test fire suppression system pressure and nozzles.", priority: "High", riskLevel: "High", consequence: "Failure to control a kitchen fire automatically.", proof: "Safety Tag", trainerNotes: "Ensure nozzles are not blocked by grease buildup." },
                { id: "MAIN-03", description: "Calibrate oven thermostats using an external probe.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent cooking results and wasted product.", proof: "Calibration Log", trainerNotes: "Wait for oven to stabilize for 20 mins before reading." }
            ]
        }
    ]
};
