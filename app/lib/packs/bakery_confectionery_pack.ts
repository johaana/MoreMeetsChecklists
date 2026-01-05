
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
            title: "Opening & Baking Prep Checklist",
            department: "Production",
            frequency: "Daily",
            role: "Head Baker",
            summary: "Ensures the kitchen is ready and safe for service, aligning with daily production goals.",
            icon: "sunrise",
            tasks: [
                { id: "BAKE-OPEN-01", description: "Pre-heat all ovens to their required temperatures for the first bake.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent baking results, wasted product.", proof: "Oven Temperature Log" },
                { id: "BAKE-OPEN-02", description: "Inspect mixers and other equipment for cleanliness and functionality.", priority: "High", riskLevel: "High", consequence: "Equipment malfunction causes downtime; poor hygiene is a food safety risk.", proof: "Equipment Check Log" },
                { id: "BAKE-OPEN-03", description: "Review the day's production schedule and special orders.", priority: "High", riskLevel: "High", consequence: "Missing a special order or producing wrong quantities leads to customer dissatisfaction.", proof: "Production Sheet" },
                { id: "BAKE-OPEN-04", description: "Pull all required ingredients from storage based on the production plan.", priority: "High", riskLevel: "Medium", consequence: "Production delays due to missing ingredients.", proof: "Ingredient Pull Sheet" },
                { id: "BAKE-OPEN-05", description: "Calibrate weighing scales.", priority: "High", riskLevel: "High", consequence: "Inaccurate measurements lead to inconsistent product quality and recipe failure.", proof: "Scale Calibration Log" },
                { id: "BAKE-OPEN-06", description: "Ensure all staff are present and in correct uniform (hairnets, aprons).", priority: "High", riskLevel: "Medium", consequence: "Hygiene violations and foreign object risk.", proof: "Staff Hygiene Check" },
                { id: "BAKE-OPEN-07", description: "Check that all work surfaces are sanitized before starting.", priority: "High", riskLevel: "High", consequence: "Risk of cross-contamination and foodborne illness.", proof: "Sanitization Log" },
                { id: "BAKE-OPEN-08", description: "Prepare and scale out base doughs and batters for the day.", priority: "High", riskLevel: "High", consequence: "Inefficient workflow and delays during peak production.", proof: "Scaling Sheets" },
                { id: "BAKE-OPEN-09", description: "Verify availability of all required packaging materials.", priority: "Medium", riskLevel: "Low", consequence: "Delays in packaging finished goods.", proof: "Packaging Inventory" },
                { id: "BAKE-OPEN-10", description: "Check functionality of display cases and refrigerators.", priority: "High", riskLevel: "Medium", consequence: "Malfunctioning displays can lead to spoiled product and lost sales.", proof: "Display Temp Log" }
            ]
        },
        {
            title: "Allergen Management & Control",
            department: "Quality/Production",
            frequency: "Ongoing",
            role: "QA Manager",
            summary: "A critical safety protocol to prevent allergen cross-contamination.",
            icon: "file-warning",
            tasks: [
                { id: "ALLERGEN-BAKE-01", description: "Store allergenic ingredients (nuts, soy, dairy) in separate, clearly labeled containers.", priority: "High", riskLevel: "High", consequence: "Primary cause of fatal allergen cross-contamination.", proof: "Storage Audit Photo" },
                { id: "ALLERGEN-BAKE-02", description: "Use color-coded utensils and equipment for preparing allergen-free items.", priority: "High", riskLevel: "High", consequence: "Mixing utensils can transfer allergens to 'safe' products.", proof: "Visual Audit" },
                { id: "ALLERGEN-BAKE-03", description: "Thoroughly clean and sanitize surfaces between batches with and without allergens.", priority: "High", riskLevel: "High", consequence: "Residual allergens can contaminate the next batch.", proof: "Cleaning Log" },
                { id: "ALLERGEN-BAKE-04", description: "Schedule production of allergen-free items first thing in the morning after a deep clean.", priority: "High", riskLevel: "High", consequence: "Reduces risk of airborne flour or nut dust contamination.", proof: "Production Schedule" },
                { id: "ALLERGEN-BAKE-05", description: "Maintain an accurate, updated allergen matrix for all products.", priority: "High", riskLevel: "High", consequence: "Inability to provide accurate allergen information to customers.", proof: "Allergen Matrix Document" },
                { id: "ALLERGEN-BAKE-06", description: "Train all staff on cross-contamination risks and handling allergen queries.", priority: "High", riskLevel: "High", consequence: "Untrained staff may give incorrect information, with potentially fatal results.", proof: "Training Records" },
                { id: "ALLERGEN-BAKE-07", description: "Clearly label all finished products with allergen warnings as per regulations.", priority: "High", riskLevel: "High", consequence: "Legal violation and a major health risk (e.g., Natasha's Law).", proof: "Label Check" },
                { id: "ALLERGEN-BAKE-08", description: "Have a clear procedure for handling a customer allergen reaction incident.", priority: "High", riskLevel: "High", consequence: "Chaotic response worsens medical outcome and increases legal liability.", proof: "Incident SOP" },
                { id: "ALLERGEN-BAKE-09", description: "Review supplier allergen information for all raw materials.", priority: "High", riskLevel: "High", consequence: "Hidden allergens in raw materials can be passed on to the final product.", proof: "Supplier Document Review" },
                { id: "ALLERGEN-BAKE-10", description: "Conduct periodic allergen testing on surfaces and finished products.", priority: "High", riskLevel: "High", consequence: "Verifies that cleaning procedures are effective.", proof: "Allergen Test Report" }
            ]
        },
        {
            title: "Packaging & Labeling Compliance",
            department: "Packaging",
            frequency: "Per Batch",
            role: "Packaging Supervisor",
            summary: "Ensures all product packaging is compliant with FSSAI and other legal standards.",
            icon: "package-check",
            tasks: [
                { id: "LABEL-01", description: "Verify the ingredient list is accurate and complete for the specific batch.", priority: "High", riskLevel: "High", consequence: "Incorrect ingredients list is a major legal and safety violation.", proof: "Label vs Recipe Check" },
                { id: "LABEL-02", description: "Ensure all allergens are correctly declared and highlighted as per FSSAI norms.", priority: "High", riskLevel: "High", consequence: "Failure to declare allergens can lead to severe health incidents and recalls.", proof: "Allergen Declaration Check" },
                { id: "LABEL-03", description: "Check that manufacturing and 'Best Before' dates are correctly printed.", priority: "High", riskLevel: "High", consequence: "Selling expired products can cause illness and lead to legal action.", proof: "Date Code Verification" },
                { id: "LABEL-04", description: "Ensure nutritional information is accurate and formatted correctly.", priority: "High", riskLevel: "Medium", consequence: "Misleading nutritional claims can result in regulatory fines.", proof: "Nutritional Panel Audit" },
                { id: "LABEL-05", description: "Verify the FSSAI license number is correctly displayed on the package.", priority: "High", riskLevel: "High", consequence: "Mandatory legal requirement in India.", proof: "FSSAI License Check" },
                { id: "LABEL-06", description: "Check for the vegetarian/non-vegetarian logo.", priority: "High", riskLevel: "High", consequence: "Incorrect labeling is a serious cultural and legal offense.", proof: "Logo Check" },
                { id: "LABEL-07", description: "Ensure the net weight is correctly stated.", priority: "High", riskLevel: "High", consequence: "Violation of Legal Metrology laws, leading to fines.", proof: "Weight Check" },
                { id: "LABEL-08", description: "Inspect packaging for tears, correct sealing, and overall quality.", priority: "High", riskLevel: "Medium", consequence: "Poor packaging can lead to product contamination and spoilage.", proof: "Package Integrity Check" },
                { id: "LABEL-09", description: "Ensure manufacturer's name and address are correctly printed.", priority: "High", riskLevel: "High", consequence: "Mandatory FSSAI labeling requirement.", proof: "Address Check" },
                { id: "LABEL-10", description: "Verify batch code is printed correctly for traceability.", priority: "High", riskLevel: "High", consequence: "Without a batch code, a product recall is impossible to execute effectively.", proof: "Batch Code Check" }
            ]
        },
        {
            title: "Ingredient Sourcing & QC",
            department: "Procurement",
            frequency: "Per Delivery",
            role: "Store Manager",
            summary: "A protocol to ensure all incoming raw materials are of high quality and safe for use.",
            icon: "shopping-basket",
            tasks: [
                { id: "BAKE-QC-01", description: "Verify supplier's FSSAI license and COA (Certificate of Analysis).", priority: "High", riskLevel: "High", consequence: "Using ingredients from an unlicensed vendor is a major compliance violation.", proof: "Supplier Documents" },
                { id: "BAKE-QC-02", description: "Check raw materials for freshness, signs of pests, or damage upon receipt.", priority: "High", riskLevel: "High", consequence: "Poor quality ingredients lead to a poor quality final product.", proof: "Receiving Log" },
                { id: "BAKE-QC-03", description: "Verify ingredient expiry dates and reject any near-expiry stock.", priority: "High", riskLevel: "High", consequence: "Using expired ingredients is a food safety risk.", proof: "Expiry Check Log" },
                { id: "BAKE-QC-04", description: "Store ingredients at correct temperatures (e.g., cold chain for dairy).", priority: "High", riskLevel: "High", consequence: "Improper storage can cause spoilage and bacterial growth.", proof: "Storage Temp Log" },
                { id: "BAKE-QC-05", description: "Ensure traceability with batch numbers for all key ingredients.", priority: "High", riskLevel: "High", consequence: "Makes it impossible to trace the source of a contamination.", proof: "Batch Log" },
                { id: "BAKE-QC-06", description: "Use FIFO (First-In, First-Out) for all ingredient usage.", priority: "High", riskLevel: "Medium", consequence: "Leads to ingredient wastage due to expiry.", proof: "Stock Rotation Audit" },
                { id: "BAKE-QC-07", description: "Maintain a register of approved suppliers.", priority: "High", riskLevel: "Medium", consequence: "Allows purchasing from unvetted, potentially unsafe sources.", proof: "Approved Supplier List" },
                { id: "BAKE-QC-08", description: "Check for any signs of adulteration in raw materials.", priority: "High", riskLevel: "High", consequence: "Adulterated ingredients can be a major health hazard.", proof: "Visual/Sensory Check" },
                { id: "BAKE-QC-09", description: "Verify weight of incoming goods against the invoice.", priority: "High", riskLevel: "Medium", consequence: "Can lead to financial loss from short-weight deliveries.", proof: "Weight Check Log" },
                { id: "BAKE-QC-10", description: "Reject any delivery that does not meet temperature requirements.", priority: "High", riskLevel: "High", consequence: "Accepting a compromised cold chain delivery is a major food safety risk.", proof: "Temperature Log" }
            ]
        },
        {
            title: "Dough Management & Proofing",
            department: "Production",
            frequency: "Daily",
            role: "Baker",
            summary: "Ensures consistent dough quality through proper handling, fermentation, and proofing.",
            icon: "wind",
            tasks: [
                { id: "BAKE-DOUGH-01", description: "Log dough mixing times and final dough temperature.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent dough temperature affects fermentation and final product texture.", proof: "Dough Log" },
                { id: "BAKE-DOUGH-02", description: "Monitor proofing box temperature and humidity.", priority: "High", riskLevel: "High", consequence: "Incorrect proofing conditions lead to flat, dense, or misshapen products.", proof: "Proofer Log" },
                { id: "BAKE-DOUGH-03", description: "Follow standardized fermentation and resting times for each product.", priority: "High", riskLevel: "High", consequence: "Deviations result in inconsistent flavor and texture.", proof: "Production Schedule" },
                { id: "BAKE-DOUGH-04", description: "Visually check dough for proper rise and volume before baking.", priority: "High", riskLevel: "Medium", consequence: "Baking improperly proofed dough leads to wasted product.", proof: "Visual Check Log" },
                { id: "BAKE-DOUGH-05", description: "Use timers to ensure consistent proofing times.", priority: "High", riskLevel: "Medium", consequence: "Guesswork leads to inconsistent results.", proof: "Timer Usage Audit" },
                { id: "BAKE-DOUGH-06", description: "Protect dough from drafts or temperature fluctuations.", priority: "High", riskLevel: "Medium", consequence: "Can cause a crust to form on the dough, inhibiting rise.", proof: "Visual Check" },
                { id: "BAKE-DOUGH-07", description: "Clean all dough handling equipment between batches.", priority: "High", riskLevel: "High", consequence: "Risk of allergen cross-contamination and bacterial growth.", proof: "Cleaning Log" },
                { id: "BAKE-DOUGH-08", description: "Label all doughs with type and production time.", priority: "High", riskLevel: "Medium", consequence: "Can lead to using the wrong dough or over-fermenting it.", proof: "Label Check" },
                { id: "BAKE-DOUGH-09", description: "Ensure correct yeast activation.", priority: "High", riskLevel: "High", consequence: "Dead yeast means the dough will not rise, wasting the entire batch.", proof: "Yeast Activity Test" },
                { id: "BAKE-DOUGH-10", description: "Log any deviations in dough handling.", priority: "High", riskLevel: "High", consequence: "Without logs, it's impossible to troubleshoot quality issues.", proof: "Deviation Log" }
            ]
        },
        {
            title: "Oven Calibration & Maintenance",
            department: "Maintenance",
            frequency: "Weekly",
            role: "Maintenance Technician",
            summary: "A preventive maintenance schedule to keep ovens accurate and reliable.",
            icon: "wrench",
            tasks: [
                { id: "BAKE-OVEN-01", description: "Calibrate oven thermostats weekly with an independent thermometer.", priority: "High", riskLevel: "High", consequence: "Inaccurate oven thermostat is a primary cause of burnt or undercooked product.", proof: "Calibration Log" },
                { id: "BAKE-OVEN-02", description: "Check for even heat distribution by test-baking a tray of products.", priority: "High", riskLevel: "Medium", consequence: "Uneven baking leads to inconsistent quality and high levels of waste.", proof: "Test Bake Photos" },
                { id: "BAKE-OVEN-03", description: "Clean oven interiors and doors daily to prevent carbon buildup.", priority: "High", riskLevel: "Medium", consequence: "Carbon buildup can create off-flavors and is a fire hazard.", proof: "Cleaning Log" },
                { id: "BAKE-OVEN-04", description: "Inspect door seals for leaks that can cause temperature fluctuations.", priority: "High", riskLevel: "High", consequence: "Leaky seals waste energy and make baking times unpredictable.", proof: "Seal Inspection Log" },
                { id: "BAKE-OVEN-05", description: "Check and clean oven ventilation systems.", priority: "High", riskLevel: "Medium", consequence: "Blocked vents are a fire risk and can affect baking performance.", proof: "Ventilation Log" },
                { id: "BAKE-OVEN-06", description: "Log all maintenance and repairs.", priority: "High", riskLevel: "High", consequence: "Lack of records makes it difficult to track recurring issues or prove due diligence.", proof: "Maintenance Records" },
                { id: "BAKE-OVEN-07", description: "Ensure oven timers are accurate.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate timers lead to inconsistent baking.", proof: "Timer Test" },
                { id: "BAKE-OVEN-08", description: "Train staff on safe oven operation.", priority: "High", riskLevel: "High", consequence: "Untrained staff can cause accidents or damage equipment.", proof: "Training Records" },
                { id: "BAKE-OVEN-09", description: "Check functionality of oven lights.", priority: "Medium", riskLevel: "Low", consequence: "Makes it difficult for bakers to monitor products visually.", proof: "Light Check Log" },
                { id: "BAKE-OVEN-10", description: "Review energy consumption of ovens.", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunity to identify energy inefficiencies and reduce costs.", proof: "Energy Report" }
            ]
        },
        {
            title: "Display & Freshness Management",
            department: "Sales/FOH",
            frequency: "Daily",
            role: "Sales Associate",
            summary: "Manages product display to maximize sales and ensure freshness.",
            icon: "cake",
            tasks: [
                { id: "BAKE-DISP-01", description: "Follow FIFO (First-In, First-Out) when arranging the display counter.", priority: "High", riskLevel: "Medium", consequence: "Failure to rotate stock is a major cause of food waste.", proof: "Visual Audit" },
                { id: "BAKE-DISP-02", description: "Remove any products that appear stale or damaged from display.", priority: "High", riskLevel: "Medium", consequence: "Selling stale products damages brand reputation.", proof: "Removal Log" },
                { id: "BAKE-DISP-03", description: "Implement a markdown or donation strategy for day-old products.", priority: "High", riskLevel: "Medium", consequence: "High levels of unsold goods directly impact profitability.", proof: "Markdown/Donation Log" },
                { id: "BAKE-DISP-04", description: "Clean display cases and trays throughout the day.", priority: "High", riskLevel: "Low", consequence: "A dirty display case gives a poor impression of hygiene.", proof: "Cleaning Schedule" },
                { id: "BAKE-DISP-05", description: "Ensure products are displayed attractively.", priority: "Medium", riskLevel: "Low", consequence: "Poor presentation can negatively impact sales.", proof: "Visual Check" },
                { id: "BAKE-DISP-06", description: "Check temperatures of refrigerated display units.", priority: "High", riskLevel: "High", consequence: "Temperature deviations can lead to spoilage and food safety risks.", proof: "Temperature Log" },
                { id: "BAKE-DISP-07", description: "Use correct labels and price tags.", priority: "High", riskLevel: "Medium", consequence: "Incorrect pricing leads to customer disputes and financial loss.", proof: "Label Audit" },
                { id: "BAKE-DISP-08", description: "Replenish stock as needed to keep displays full.", priority: "High", riskLevel: "Low", consequence: "Empty displays give the impression of poor management and lead to lost sales.", proof: "Replenishment Check" },
                { id: "BAKE-DISP-09", description: "Ensure allergen information is available for all displayed items.", priority: "High", riskLevel: "High", consequence: "A critical food safety requirement; failure can lead to severe health incidents.", proof: "Allergen Info Signage" },
                { id: "BAKE-DISP-10", description: "Track and analyze sales data from the display to optimize offerings.", priority: "High", riskLevel: "Medium", consequence: "Missed opportunity to stock more of what sells and less of what doesn't.", proof: "Sales Report" }
            ]
        },
        {
            title: "Custom Cake Order Process",
            department: "Sales/Production",
            frequency: "Per Order",
            role: "Order Taker/Baker",
            summary: "A structured workflow for handling custom orders from request to delivery.",
            icon: "package",
            tasks: [
                { id: "BAKE-CUST-01", description: "Use a standardized order form to capture all customer requirements (size, flavor, design, message).", priority: "High", riskLevel: "High", consequence: "Getting a detail wrong on a custom cake leads to high customer dissatisfaction.", proof: "Completed Order Form" },
                { id: "BAKE-CUST-02", description: "Confirm all details with the customer before finalizing the order.", priority: "High", riskLevel: "Medium", consequence: "Prevents misunderstandings and ensures customer expectations are met.", proof: "Confirmation Email/Message" },
                { id: "BAKE-CUST-03", description: "Create a detailed production brief for the baking team.", priority: "High", riskLevel: "High", consequence: "Miscommunication between sales and production is a major cause of errors.", proof: "Production Brief" },
                { id: "BAKE-CUST-04", description: "Final QC check of the finished cake against the order form before delivery.", priority: "High", riskLevel: "High", consequence: "The last chance to catch an error before it reaches the customer.", proof: "Final QC Photos" },
                { id: "BAKE-CUST-05", description: "Take a deposit for all custom orders.", priority: "High", riskLevel: "Medium", consequence: "Reduces financial loss from last-minute cancellations.", proof: "Deposit Receipt" },
                { id: "BAKE-CUST-06", description: "Communicate clearly about pickup/delivery times.", priority: "High", riskLevel: "Medium", consequence: "Poor communication can lead to missed pickups and frustrated customers.", proof: "Communication Log" },
                { id: "BAKE-CUST-07", description: "Package the cake securely for transport.", priority: "High", riskLevel: "High", consequence: "A damaged cake in transit can ruin a customer's special event.", proof: "Packaging Check" },
                { id: "BAKE-CUST-08", description: "Provide instructions for storage and handling to the customer.", priority: "High", riskLevel: "Medium", consequence: "Improper storage by the customer can lead to the cake spoiling.", proof: "Instruction Card" },
                { id: "BAKE-CUST-09", description: "Confirm final payment upon pickup/delivery.", priority: "High", riskLevel: "High", consequence: "Failure to collect final payment is a direct financial loss.", proof: "Final Invoice" },
                { id: "BAKE-CUST-10", description: "Follow up with the customer for feedback.", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunity to get testimonials and improve the process.", proof: "Feedback Request" }
            ]
        },
        {
            title: "Staff Hygiene & Training",
            department: "HR/Management",
            frequency: "Ongoing",
            role: "Manager",
            summary: "Ensures all staff adhere to strict hygiene standards and are trained in food safety.",
            icon: "user-check",
            tasks: [
                { id: "BAKE-TRAIN-01", description: "Conduct daily checks for clean uniforms, aprons, and hairnets.", priority: "High", riskLevel: "Medium", consequence: "Poor staff presentation reflects badly on the brand's hygiene standards.", proof: "Daily Staff Check Log" },
                { id: "BAKE-TRAIN-02", description: "Enforce handwashing protocols before starting work and between tasks.", priority: "High", riskLevel: "High", consequence: "Hand-to-food contamination is a primary cause of foodborne illness.", proof: "Hygiene Audit" },
                { id: "BAKE-TRAIN-03", description: "Train staff on the 'no jewelry' policy in production areas.", priority: "High", riskLevel: "High", consequence: "Jewelry can fall into food, creating a physical hazard.", proof: "Policy Acknowledgement" },
                { id: "BAKE-TRAIN-04", description: "Provide documented training on food safety and allergen management.", priority: "High", riskLevel: "High", consequence: "A critical step to prevent life-threatening allergen incidents.", proof: "Training Records" },
                { id: "BAKE-TRAIN-05", description: "Ensure staff report any illness and are not allowed to work with food if sick.", priority: "High", riskLevel: "High", consequence: "A sick employee can easily transmit illness to customers through food.", proof: "Sick Leave Policy" },
                { id: "BAKE-TRAIN-06", description: "Keep training records up to date for all employees.", priority: "High", riskLevel: "Medium", consequence: "In an audit, lack of records is equivalent to lack of training.", proof: "Master Training File" },
                { id: "BAKE-TRAIN-07", description: "Conduct refresher training annually.", priority: "High", riskLevel: "Medium", consequence: "Staff can forget critical procedures over time.", proof: "Refresher Training Log" },
                { id: "BAKE-TRAIN-08", description: "Post hygiene reminders in staff areas.", priority: "Medium", riskLevel: "Low", consequence: "Keeps food safety top-of-mind for all staff.", proof: "Visual Check" },
                { id: "BAKE-TRAIN-09", description: "Ensure new hires complete food safety certification (e.g. FoSTaC).", priority: "High", riskLevel: "High", consequence: "A legal requirement in many jurisdictions and a food safety best practice.", proof: "FoSTaC Certificate" },
                { id: "BAKE-TRAIN-10", description: "Monitor staff for compliance with all hygiene policies.", priority: "High", riskLevel: "High", consequence: "Policies are useless if not enforced.", proof: "Supervisor Log" }
            ]
        },
        {
            title: "Pest Control Management",
            department: "Hygiene",
            frequency: "Weekly",
            role: "Hygiene Supervisor",
            summary: "A preventive program to keep the bakery free of pests like rodents and insects.",
            icon: "bug",
            tasks: [
                { id: "BAKE-PEST-01", description: "Inspect for signs of pests (droppings, gnaw marks) weekly.", priority: "High", riskLevel: "High", consequence: "A pest infestation can lead to closure by health authorities and severe brand damage.", proof: "Pest Inspection Log" },
                { id: "BAKE-PEST-02", description: "Ensure all doors and windows have screens and are kept closed.", priority: "High", riskLevel: "High", consequence: "Prevents entry points for flying insects and rodents.", proof: "Structural Audit" },
                { id: "BAKE-PEST-03", description: "Manage waste disposal to not attract pests.", priority: "High", riskLevel: "High", consequence: "Overflowing bins are a primary food source for pests.", proof: "Waste Management Log" },
                { id: "BAKE-PEST-04", description: "Review and file the monthly report from the professional pest control vendor.", priority: "High", riskLevel: "High", consequence: "Provides a professional, third-party audit of your pest control status.", proof: "Vendor Report" },
                { id: "BAKE-PEST-05", description: "Keep ingredients in sealed containers.", priority: "High", riskLevel: "High", consequence: "Open containers of flour and sugar are a magnet for pests.", proof: "Storage Audit" },
                { id: "BAKE-PEST-06", description: "Eliminate any standing water sources.", priority: "High", riskLevel: "Medium", consequence: "Standing water attracts pests like mosquitoes and cockroaches.", proof: "Water Source Check" },
                { id: "BAKE-PEST-07", description: "Install and maintain insect light traps.", priority: "High", riskLevel: "Medium", consequence: "An effective way to control flying insects in production areas.", proof: "Trap Maintenance Log" },
                { id: "BAKE-PEST-08", description: "Seal any cracks or holes in walls and floors.", priority: "High", riskLevel: "High", consequence: "Denies entry points for rodents and other pests.", proof: "Structural Maintenance Log" },
                { id: "BAKE-PEST-09", description: "Maintain a pest sighting log.", priority: "High", riskLevel: "High", consequence: "Helps identify patterns and hotspots for pest activity.", proof: "Sighting Log" },
                { id: "BAKE-PEST-10", description: "Ensure receiving area is inspected for pests with every delivery.", priority: "High", riskLevel: "High", consequence: "Prevents pests from being introduced via suppliers.", proof: "Receiving Log" }
            ]
        }
    ]
};

    