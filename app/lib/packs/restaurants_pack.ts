
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
                { id: "KO-06", description: "Test industrial dishwasher final rinse temperature.", priority: "High", riskLevel: "High", consequence: "Improperly sanitized plates and cutlery reaching guests.", proof: "Dishwasher Log", trainerNotes: "Final rinse must reach 82°C (180°F) for thermal sanitization. Check the digital display." },
                { id: "KO-07", description: "Check vegetable wash concentration.", priority: "High", riskLevel: "Medium", consequence: "Ingestion of pesticides or soil-borne pathogens.", proof: "Chemical Log", trainerNotes: "Vegetables must soak for 5 mins in 50ppm chlorine solution then be rinsed." },
                { id: "KO-08", description: "Verify 'Use-By' labels on all prepped items.", priority: "High", riskLevel: "High", consequence: "Serving expired or spoiled ingredients.", proof: "Visual Label Check", trainerNotes: "Any item without a prep-date and use-by label must be discarded immediately." },
                { id: "KO-09", description: "Empty and clean fat traps/grease interceptors.", priority: "Medium", riskLevel: "Low", consequence: "Drainage blockages and foul odors in the kitchen.", proof: "Maintenance Log", trainerNotes: "Scrape out solid fats and dispose of in solid waste, never down the drain." },
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
                { id: "FOH-01", description: "Audit restrooms for cleanliness and consumable stock levels.", priority: "High", riskLevel: "Medium", consequence: "The #1 driver of negative guest reviews and hygiene perception failure.", proof: "Restroom Log", trainerNotes: "Check the door handles and light switches. They are the most touched and often missed areas." },
                { id: "FOH-02", description: "Inspect every menu cover and page for smudges or damage.", priority: "Medium", riskLevel: "Low", consequence: "Poor presentation devalues the brand and signals low management standards.", proof: "Menu Check", trainerNotes: "Wipe down every menu cover with a sanitized cloth before the shift starts." },
                { id: "FOH-03", description: "Calibrate dining room music volume and lighting dimmers.", priority: "Medium", riskLevel: "Low", consequence: "Incorrect ambiance makes guests uncomfortable, shortening their stay.", proof: "Ambiance Check", trainerNotes: "Lights should be dimmed 20% further for dinner service to create intimacy." },
                { id: "FOH-04", description: "Verify POS connectivity and receipt paper stock levels.", priority: "High", riskLevel: "Medium", consequence: "POS failure during peak hours causes chaotic billing and lost guest trust.", proof: "System Test", trainerNotes: "Keep two spare rolls of paper under every terminal. Never let a roll run out mid-bill." },
                { id: "FOH-05", description: "Inspect entrance mats and flooring for trip hazards.", priority: "High", riskLevel: "High", consequence: "Customer slip and fall accidents leading to litigation and injury.", proof: "Visual Check", trainerNotes: "Ensure no edges are curling up. Mop up any tracked-in rain moisture immediately." },
                { id: "FOH-06", description: "Check salt/pepper shakers and condiments for cleanliness.", priority: "Low", riskLevel: "Low", consequence: "Sticky containers give a poor impression of hygiene.", proof: "Visual Check", trainerNotes: "Shakers must be wiped daily. Do not top up; finish one and replace with a clean one." },
                { id: "FOH-07", description: "Verify reservation list and table assignments.", priority: "High", riskLevel: "Low", consequence: "Double-bookings and frustrated VIP guests.", proof: "Reservation Log", trainerNotes: "Ensure high-chair or special request notes are clearly marked on the table." },
                { id: "FOH-08", description: "Inspect cutlery and glassware for water spots or chips.", priority: "Medium", riskLevel: "Low", consequence: "Perception of low-grade hygiene and physical injury risk.", proof: "Polish Log", trainerNotes: "Use steam and a lint-free microfiber cloth for all wine glasses." },
                { id: "FOH-09", description: "Wipe down high-chairs and booster seats.", priority: "High", riskLevel: "Medium", consequence: "Spread of germs to vulnerable infants.", proof: "Cleaning Log", trainerNotes: "Use a baby-safe sanitizer. These are the most bacteria-heavy items in FOH." },
                { id: "FOH-10", description: "Check sidewalk/entrance curb appeal.", priority: "Low", riskLevel: "Low", consequence: "Lost walk-in traffic due to poor first impression.", proof: "Visual Check", trainerNotes: "Sweep the entrance and clean glass doors every 2 hours." }
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
                { id: "BAR-04", description: "Clean coffee machine group heads and steam wands.", priority: "High", riskLevel: "Medium", consequence: "Bitter coffee quality and bacterial growth in old milk residue.", proof: "Cleaning Log", trainerNotes: "Backflush with detergent every night. Clean wands after *every* use." },
                { id: "BAR-05", description: "Check expiry of juices and dairy in bar fridges.", priority: "High", riskLevel: "Medium", consequence: "Sour drinks and health risk.", proof: "Visual Label Check", trainerNotes: "Open juices only stay fresh for 48 hours. Label with date/time." },
                { id: "BAR-06", description: "Sanitize garnish containers and cutting boards.", priority: "Medium", riskLevel: "Medium", consequence: "Fruit flies and cross-contamination.", proof: "Visual Check", trainerNotes: "Cut garnishes fresh daily. Never mix old garnishes with new ones." },
                { id: "BAR-07", description: "Test glasswasher chemical levels.", priority: "High", riskLevel: "High", consequence: "Lipstick marks and bacteria on glasses.", proof: "Chemical Log", trainerNotes: "Verify that rinse aid and detergent levels are moving through the tubes." },
                { id: "BAR-08", description: "Inventory check of wine cellar/cooler.", priority: "Medium", riskLevel: "Low", consequence: "Running out of top-selling varietals.", proof: "Stock Sheet", trainerNotes: "Ensure white wines are at 8-10°C and reds at 16-18°C." },
                { id: "BAR-09", description: "Check for fruit flies/pests under bar counters.", priority: "Medium", riskLevel: "Medium", consequence: "Infestation and closure risk.", proof: "Pest Audit", trainerNotes: "Pour boiling water and bleach down floor drains nightly to kill larvae." },
                { id: "BAR-10", description: "Verify bar mat and counter sanitization.", priority: "Low", riskLevel: "Low", consequence: "Odors and sticky surfaces.", proof: "Visual Check", trainerNotes: "Mats must be scrubbed and air-dried overnight." }
            ]
        },
        {
            title: "Inventory & Receiving",
            department: "Inventory",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Ensures raw material quality and prevents financial leakage at the dock.",
            icon: "package",
            tasks: [
                { id: "INV-01", description: "Verify incoming weights of high-value proteins (Meat/Fish).", priority: "High", riskLevel: "High", consequence: "Invoiced for weight not received; direct financial loss.", proof: "Weight Log", trainerNotes: "Always use your own calibrated scale. Do not trust the supplier's invoice weight." },
                { id: "INV-02", description: "Check temperature of chilled/frozen deliveries.", priority: "High", riskLevel: "High", consequence: "Breach of cold chain leading to bacteria and spoilage.", proof: "Inbound Temp Log", trainerNotes: "Reject any chilled item over 5°C or frozen item that shows signs of thawing." },
                { id: "INV-03", description: "Inspect for 'Look-Alike' brand substitutes from vendors.", priority: "Medium", riskLevel: "Low", consequence: "Lower quality product for premium price.", proof: "Visual Audit", trainerNotes: "Check labels against the Approved Product List (APL) in your contract." },
                { id: "INV-04", description: "Reconcile invoices against physical count immediately.", priority: "High", riskLevel: "High", consequence: "Inability to claim for short-shipments after driver leaves.", proof: "Signed Invoice", trainerNotes: "Note any missing items on the invoice *before* signing. Take a photo." },
                { id: "INV-05", description: "Check for damaged packaging or dented cans.", priority: "Medium", riskLevel: "Medium", consequence: "Botulism risk in dented cans; contamination in torn bags.", proof: "Visual Check", trainerNotes: "Dented cans on the seam must be rejected immediately. No exceptions." },
                { id: "INV-06", description: "Verify FSSAI license numbers on vendor delivery notes.", priority: "High", riskLevel: "High", consequence: "Regulatory non-compliance if sourcing from unvetted vendors.", proof: "Compliance Log", frequency: "Weekly" },
                { id: "INV-07", description: "Audit the dry-store for FIFO compliance.", priority: "High", riskLevel: "Medium", consequence: "Stock expiration and waste.", proof: "Visual Audit", frequency: "Weekly" },
                { id: "INV-08", description: "Conduct a blind-count of top 10 high-value items.", priority: "High", riskLevel: "High", consequence: "Detection of internal theft or wastage.", proof: "Variance Report", frequency: "Weekly" },
                { id: "INV-09", description: "Review waste-log for trends.", priority: "Medium", riskLevel: "Low", consequence: "Unchecked kitchen waste eroding margins.", proof: "Waste Analysis", frequency: "Weekly" },
                { id: "INV-10", description: "Clean and sanitize the receiving bay.", priority: "Low", riskLevel: "Low", consequence: "Pest entry point.", proof: "Cleaning Log", frequency: "Daily" }
            ]
        },
        {
            title: "Safety, EHS & Fire Compliance",
            department: "Safety",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Ensures the facility complies with all safety and fire regulations.",
            icon: "shield-alert",
            tasks: [
                { id: "SAFE-01", description: "Verify all kitchen gas valves are shut off manually.", priority: "High", riskLevel: "High", consequence: "Overnight gas buildup and catastrophic explosion risk.", proof: "Safety Log", trainerNotes: "Physically check each station. The main solenoid should also be tripped." },
                { id: "SAFE-02", description: "Inspect all fire extinguishers for pressure and accessibility.", priority: "High", riskLevel: "High", consequence: "Non-functional safety equipment during a real kitchen fire.", proof: "Safety Log", frequency: "Weekly" },
                { id: "SAFE-03", description: "Test all smoke detectors and emergency fire alarms.", priority: "High", riskLevel: "High", consequence: "No early warning during a fire, leading to potential loss of life.", proof: "Test Log", frequency: "Monthly" },
                { id: "SAFE-04", description: "Verify all emergency fire exits are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Guest and staff entrapment during a fire or emergency evacuation.", proof: "Exit Audit", trainerNotes: "Walk the path. If you have to move a single chair to reach the door, it is a fail." },
                { id: "SAFE-05", description: "Inspect electrical wiring behind high-heat appliances.", priority: "High", riskLevel: "High", consequence: "Short-circuit fires in the kitchen area.", proof: "Maintenance Log", frequency: "Monthly" },
                { id: "SAFE-06", description: "Audit the First Aid Kit for stock and expiry.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat minor staff injuries.", proof: "Stock Log", frequency: "Monthly" },
                { id: "SAFE-07", description: "Check stability of high-shelf storage.", priority: "High", riskLevel: "High", consequence: "Falling items injuring staff.", proof: "Visual Check", frequency: "Weekly" },
                { id: "SAFE-08", description: "Test the emergency lighting system.", priority: "High", riskLevel: "High", consequence: "Panic during a power outage.", proof: "Battery Test Log", frequency: "Monthly" },
                { id: "SAFE-09", description: "Verify occupancy limits are not exceeded.", priority: "Medium", riskLevel: "High", consequence: "Public order issues and fire risk.", proof: "Count Check", frequency: "Daily" },
                { id: "SAFE-10", description: "Review incident reports and update risk register.", priority: "High", riskLevel: "Low", consequence: "Recurring accidents not addressed.", proof: "Management Review", frequency: "Monthly" }
            ]
        },
        {
            title: "Equipment Deep-Care",
            department: "Maintenance",
            frequency: "Monthly",
            role: "Chief Engineer",
            summary: "Extends asset life and prevents mid-shift service failures.",
            icon: "wrench",
            tasks: [
                { id: "MAIN-01", description: "De-scale the commercial dishwasher.", priority: "Medium", riskLevel: "Low", consequence: "Heating element failure and poor wash quality.", proof: "Maintenance Log" },
                { id: "MAIN-02", description: "Clean condenser coils on all refrigerators.", priority: "High", riskLevel: "High", consequence: "Compressor burnout and massive inventory loss.", proof: "Maintenance Log" },
                { id: "MAIN-03", description: "Inspect and lubricate mixer and slicer bearings.", priority: "Medium", riskLevel: "Medium", consequence: "Motor failure and physical hazard to staff.", proof: "Maintenance Log" },
                { id: "MAIN-04", description: "Calibrate oven thermostats using external probe.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent cooking and food safety risk.", proof: "Calibration Log" },
                { id: "MAIN-05", description: "Test the backup generator under load.", priority: "High", riskLevel: "High", consequence: "Total business shutdown during power cut.", proof: "Load Test Log" },
                { id: "MAIN-06", description: "Inspect water filtration systems and replace filters.", priority: "Medium", riskLevel: "Medium", consequence: "Poor taste quality and scaling in expensive equipment.", proof: "Filter Log" },
                { id: "MAIN-07", description: "Check gas burner efficiency (blue flame vs orange).", priority: "High", riskLevel: "Medium", consequence: "Wasted fuel and carbon monoxide risk.", proof: "Visual Check" },
                { id: "MAIN-08", description: "Tighten loose table legs and chair screws.", priority: "Low", riskLevel: "Medium", consequence: "Guest injury and liability.", proof: "Visual Check" },
                { id: "MAIN-09", description: "Inspect POS wiring for wear or rodent damage.", priority: "Low", riskLevel: "Medium", consequence: "System outage during service.", proof: "Visual Check" },
                { id: "MAIN-10", description: "Audit the spare parts inventory.", priority: "Medium", riskLevel: "Low", consequence: "Delayed repairs for critical items.", proof: "Inventory Sheet" }
            ]
        },
        {
            title: "Staff Training & Compliance",
            department: "HR",
            frequency: "Monthly",
            role: "Owner / GM",
            summary: "Ensures the team's skills don't drift from the institutional standard.",
            icon: "users",
            tasks: [
                { id: "TRAIN-01", description: "Conduct a 15-min fire evacuation refresher.", priority: "High", riskLevel: "High", consequence: "Staff confusion during a real fire.", proof: "Attendance Sheet" },
                { id: "TRAIN-02", description: "Audit staff handwashing technique (Observed).", priority: "High", riskLevel: "High", consequence: "Bacterial spread via food handlers.", proof: "Scorecard" },
                { id: "TRAIN-03", description: "Perform a menu-knowledge quiz for all servers.", priority: "Medium", riskLevel: "Medium", consequence: "Allergen errors and poor guest service.", proof: "Quiz Scores" },
                { id: "TRAIN-04", description: "Verify all staff FoSTaC/FSSAI certificates are valid.", priority: "High", riskLevel: "High", consequence: "Regulatory fines and legal non-compliance.", proof: "Certificate File" },
                { id: "TRAIN-05", description: "Conduct an 'Upselling' workshop for FOH.", priority: "Low", riskLevel: "Low", consequence: "Lower average check size.", proof: "Workshop Notes" },
                { id: "TRAIN-06", description: "Review and sign-off the POS access logs.", priority: "High", riskLevel: "High", consequence: "Undetected internal theft or fraud.", proof: "Signed Log" },
                { id: "TRAIN-07", description: "Audit staff appearance and uniform standards.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Visual Check", frequency: "Weekly" },
                { id: "TRAIN-08", description: "Update the 'Hero model' dependency matrix.", priority: "High", riskLevel: "Medium", consequence: "Business risk when key staff resign.", proof: "Document Update" },
                { id: "TRAIN-09", description: "One-on-one performance review with Sous Chef.", priority: "Medium", riskLevel: "Low", consequence: "High staff turnover.", proof: "Meeting Notes" },
                { id: "TRAIN-10", description: "Verify all new hires signed the Code of Conduct.", priority: "High", riskLevel: "High", consequence: "Legal difficulty during termination.", proof: "Signed Docs" }
            ]
        }
    ]
};
