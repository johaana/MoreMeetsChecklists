
import type { PremiumPack } from "@/lib/premium-packs";

export const bakery_confectionery_pack: PremiumPack = {
    id: 'bakery_confectionery_pack',
    title: "Bakery & Confectionery Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d863f69b-8919-4115-b778-831d17d120fb',
    category: "Food & Beverage",
    description: "A specialized toolkit for bakery and confectionery owners to ensure product consistency, food safety, and operational efficiency.",
    icon: "cake-slice",
    badgeText: "Special Offer",
    badgeVariant: "accent",
    whoIsItFor: ["Bakery Owners", "Head Bakers", "Pastry Chefs", "Cafe Owners with in-house baking"],
    sampleItems: [
        { text: "Achieve perfect results every time with recipe scaling and dough management checklists.", icon: "clipboard-list" },
        { text: "Ensure food safety with HACCP-aligned protocols for ingredient handling and allergen control.", icon: "shield-check" },
        { text: "Maintain equipment precision with SOPs for oven calibration and mixer maintenance.", icon: "wrench" },
        { text: "Maximize freshness and minimize waste with a structured display and stock rotation system.", icon: "recycle" },
        { text: "Guarantee compliance with FSSAI regulations for packaging, labeling, and expiry dates.", icon: "file-check" },
        { text: "Streamline your custom order process from client briefing to final delivery.", icon: "package" }
    ],
    checklists: [
        {
            title: "Daily Opening Hygiene & Prep (HACCP)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Opening Baker/Chef",
            summary: "Ensures a safe and sanitary start to the day, focusing on critical food safety points.",
            icon: "sparkles",
            tasks: [
                { id: "BC-OH-01", description: "Record temperatures of all refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Spoilage of dairy, eggs; violation of food safety laws.", proof: "Temperature logbook.", location: "Cold Storage" },
                { id: "BC-OH-02", description: "Sanitize all work surfaces, mixers, and food contact equipment.", priority: "High", riskLevel: "High", consequence: "Cross-contamination, foodborne illness.", proof: "Sanitization log.", location: "Prep Area, Mixing Station" },
                { id: "BC-OH-03", description: "Check staff for clean uniforms, proper hair restraints, and good personal hygiene.", priority: "High", riskLevel: "Medium", consequence: "Contamination of products.", proof: "Supervisor's opening checklist.", location: "Staff Area" },
                { id: "BC-OH-04", description: "Verify handwashing stations are fully stocked with soap, hot water, and paper towels.", priority: "High", riskLevel: "Medium", consequence: "Poor hand hygiene, spread of germs.", proof: "Visual check.", location: "All Hand Sinks" },
                { id: "BC-OH-05", description: "Calibrate food thermometers using ice bath method.", priority: "High", riskLevel: "High", consequence: "Incorrect temperature readings for cooking and cooling, major food safety risk.", proof: "Thermometer calibration log.", location: "Kitchen" },
                { id: "BC-OH-06", description: "Check for any signs of pest activity and log findings.", priority: "High", riskLevel: "High", consequence: "Infestation, health department closure.", proof: "Pest control logbook.", location: "All Areas" },
                { id: "BC-OH-07", description: "Ensure ingredients are stored properly (e.g., flour in sealed containers, dairy separate).", priority: "Medium", riskLevel: "Medium", consequence: "Ingredient spoilage, cross-contamination.", proof: "Visual audit of storage areas.", location: "Dry & Cold Storage" }
            ]
        },
        {
            title: "Ingredient & Allergen Management",
            department: "Kitchen/Stores",
            frequency: "Ongoing",
            role: "Head Baker/Storekeeper",
            summary: "Manages ingredient inventory and prevents life-threatening allergen cross-contact.",
            icon: "file-warning",
            tasks: [
                { id: "BC-AM-01", description: "Maintain an up-to-date allergen matrix for all products, listing common allergens.", priority: "High", riskLevel: "High", consequence: "Anaphylactic shock in a customer, lawsuits, brand ruin.", proof: "Posted and updated allergen chart.", location: "Kitchen & POS" },
                { id: "BC-AM-02", description: "Use designated, color-coded (purple) utensils and containers for allergen-free preparations.", priority: "High", riskLevel: "High", consequence: "Accidental cross-contact leading to allergic reaction.", proof: "Photo of designated allergen kit.", location: "Prep Station" },
                { id: "BC-AM-03", description: "Store allergenic ingredients (like nuts, gluten) in sealed, labeled containers below non-allergens.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination from spills.", proof: "Photo of storage shelves.", location: "Dry Storage" },
                { id: "BC-AM-04", description: "Upon receiving, check all ingredient labels for any changes in allergen information from the supplier.", priority: "High", riskLevel: "High", consequence: "Unknowingly introducing a new allergen into the kitchen.", proof: "Receiving checklist.", location: "Receiving Area" },
                { id: "BC-AM-05", description: "Implement a FIFO (First-In, First-Out) system for all ingredients.", priority: "High", riskLevel: "Medium", consequence: "Ingredient spoilage and wastage.", proof: "Visual check of date labels on shelves.", location: "Storage Areas" },
                { id: "BC-AM-06", description: "Train all staff (kitchen and front-of-house) on the bakery's allergen policy and procedures.", priority: "High", riskLevel: "High", consequence: "Staff giving incorrect information to customers.", proof: "Allergen training records.", location: "HR/Training" },
                { id: "BC-AM-07", description: "When a customer reports an allergy, the order must be communicated to the kitchen on a separate, clearly marked ticket.", priority: "High", riskLevel: "High", consequence: "Miscommunication leading to a contaminated product.", proof: "Copy of an 'allergy alert' order ticket.", location: "POS/Kitchen" }
            ]
        },
        {
            title: "Recipe & Production Consistency",
            department: "Production",
            frequency: "Per Batch",
            role: "Baker/Pastry Chef",
            summary: "Ensures every batch of product is consistent in quality, size, and taste.",
            icon: "clipboard-list",
            tasks: [
                { id: "BC-PC-01", description: "Use standardized, documented recipes for all products.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent product, variable food cost.", proof: "Recipe book/database." },
                { id: "BC-PC-02", description: "Measure all ingredients by weight using a calibrated digital scale, not by volume.", priority: "High", riskLevel: "High", consequence: "Inconsistent texture, taste, and yield.", proof: "Observation of process.", location: "Mixing Station" },
                { id: "BC-PC-03", description: "Log dough/batter mixing times and final temperatures.", priority: "High", riskLevel: "Medium", consequence: "Poor dough development, inconsistent final product.", proof: "Batch production log.", location: "Mixing Station" },
                { id: "BC-PC-04", description: "Use templates or standardized portioning tools (scoops, cutters) for consistent product size.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent appearance and baking times.", proof: "Visual check of portioned products.", location: "Benching Area" },
                { id: "BC-PC-05", description: "Check oven temperatures with an independent thermometer before baking.", priority: "High", riskLevel: "High", consequence: "Under-baked or burnt products, inconsistent results.", proof: "Oven temperature log.", location: "Oven Area" },
                { id: "BC-PC-06", description: "Log baking times and temperatures for each batch.", priority: "Medium", riskLevel: "Low", consequence: "Inability to troubleshoot baking issues.", proof: "Baking log.", location: "Oven Area" },
                { id: "BC-PC-07", description: "Perform a quality check on the first product out of the oven from each batch (color, size, internal temp).", priority: "High", riskLevel: "Medium", consequence: "An entire batch could be wasted if an error is not caught early.", proof: "First-off inspection log.", location: "Cooling Area" }
            ]
        },
        {
            title: "Display & Freshness Management",
            department: "Front of House",
            frequency: "Daily",
            role: "Counter Staff/Manager",
            summary: "Keeps the display attractive, well-stocked, and ensures only fresh products are sold.",
            icon: "cake",
            tasks: [
                { id: "BC-DF-01", description: "Clean and sanitize all display cases, trays, and tongs before stocking.", priority: "High", riskLevel: "Medium", consequence: "Hygiene issues, poor presentation.", proof: "Opening checklist.", location: "Display Counter" },
                { id: "BC-DF-02", description: "Stock the display according to the planogram, ensuring it looks full and appealing.", priority: "Medium", riskLevel: "Low", consequence: "Reduced sales.", proof: "Photo of the display case.", location: "Display Counter" },
                { id: "BC-DF-03", description: "Use a FIFO (First-In, First-Out) system for all displayed products.", priority: "High", riskLevel: "Medium", consequence: "Increased wastage of older products.", proof: "Observation of restocking procedure.", location: "Display Counter" },
                { id: "BC-DF-04", description: "Ensure all products are correctly labeled with name and price.", priority: "High", riskLevel: "Low", consequence: "Customer confusion, pricing errors.", proof: "Visual check.", location: "Display Counter" },
                { id: "BC-DF-05", description: "Log temperatures of refrigerated display cases twice daily.", priority: "High", riskLevel: "High", consequence: "Spoilage of cream-based products.", proof: "Temperature log.", location: "Display Counter" },
                { id: "BC-DF-06", description: "Implement a markdown strategy for items nearing the end of their shelf life (e.g., 'end-of-day special').", priority: "Medium", riskLevel: "Low", consequence: "Lost revenue from unsold items.", proof: "Markdown policy document.", location: "POS" },
                { id: "BC-DF-07", description: "Remove, log, and dispose of any unsold products at the end of the day as per policy.", priority: "High", riskLevel: "Medium", consequence: "Selling stale product, damaging brand reputation.", proof: "End-of-day wastage log.", location: "POS/Waste Area" }
            ]
        },
        {
            title: "Equipment Maintenance & Calibration",
            department: "Maintenance/Kitchen",
            frequency: "Weekly/Monthly",
            role: "Head Baker/Maintenance",
            summary: "A preventive maintenance schedule to keep critical bakery equipment running reliably and accurately.",
            icon: "wrench",
            tasks: [
                { id: "BC-EM-01", description: "Weekly: Deep clean mixers, removing all dough/batter residue.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene issues, equipment strain.", proof: "Cleaning log." },
                { id: "BC-EM-02", description: "Monthly: Calibrate all weighing scales using certified weights.", priority: "High", riskLevel: "High", consequence: "Inconsistent recipes, incorrect food cost.", proof: "Scale calibration log." },
                { id: "BC-EM-03", description: "Monthly: Check and clean oven seals and doors for proper heat retention.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent baking, high energy costs.", proof: "Oven maintenance log." },
                { id: "BC-EM-04", description: "Monthly: Check and clean refrigeration unit condensers and fans.", priority: "High", riskLevel: "High", consequence: "Compressor failure, loss of all cold stock.", proof: "Refrigeration maintenance log." },
                { id: "BC-EM-05", description: "Weekly: Inspect dough sheeters and dividers for cleanliness and safety guard function.", priority: "High", riskLevel: "High", consequence: "Serious entanglement injury.", proof: "Equipment safety checklist." },
                { id: "BC-EM-06", description: "Quarterly: Schedule professional servicing for major equipment like ovens and mixers as per manufacturer's recommendation.", priority: "High", riskLevel: "Medium", consequence: "Major breakdown, costly repairs.", proof: "Vendor service reports." }
            ]
        },
        {
            title: "Custom Order Workflow",
            department: "Sales/Production",
            frequency: "Per Custom Order",
            role: "Manager/Head Baker",
            summary: "A structured process to take, produce, and deliver custom cake or confectionery orders without errors.",
            icon: "package",
            tasks: [
                { id: "BC-CO-01", description: "Use a standardized order form to capture all customer requirements (size, flavor, design, message, delivery date).", priority: "High", riskLevel: "High", consequence: "Wrong cake made, major customer disappointment.", proof: "Completed custom order form." },
                { id: "BC-CO-02", description: "Confirm all details with the customer and get their signature on the order form.", priority: "High", riskLevel: "Medium", consequence: "Disputes over original requirements.", proof: "Signed order form." },
                { id: "BC-CO-03", description: "Collect a deposit and provide a receipt.", priority: "High", riskLevel: "Low", consequence: "Financial loss if customer cancels.", proof: "Payment receipt." },
                { id: "BC-CO-04", description: "Create a detailed production brief for the kitchen team, including a sketch or photo of the design.", priority: "High", riskLevel: "High", consequence: "Bakers do not understand the design requirements.", proof: "Kitchen production brief." },
                { id: "BC-CO-05", description: "Schedule the production tasks in the kitchen calendar.", priority: "Medium", riskLevel: "Low", consequence: "Order is forgotten or rushed.", proof: "Entry in production calendar." },
                { id: "BC-CO-06", description: "Perform a final quality check of the finished product against the order form before packing.", priority: "High", riskLevel: "High", consequence: "Delivering a cake with an error (e.g., misspelled name).", proof: "QC sign-off on the order form." },
                { id: "BC-CO-07", description: "Pack the order in appropriate, stable packaging for transport.", priority: "High", riskLevel: "Medium", consequence: "Product damaged in transit.", proof: "Visual check." },
                { id: "BC-CO-08", description: "Confirm pickup or delivery details with the customer a day in advance.", priority: "Medium", riskLevel: "Low", consequence: "Missed delivery/pickup.", proof: "Log of confirmation call/email." }
            ]
        }
    ]
};

  