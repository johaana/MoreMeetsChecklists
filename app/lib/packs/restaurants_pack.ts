
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System",
    category: "Hospitality",
    description: "The definitive Sovereign v4.4 engine for multi-unit food and beverage groups. Standardizing 120+ control points from Owner vision to kitchen hygiene.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks—across every branch in your group.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V4.4 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>Accountant / Inventory Shield</strong>: Blind stock counts and PO matching to stop high-value profit leakage.", icon: "banknote" },
        { text: "<strong>EHS & Hard Safety</strong>: Technical logs for gas banks, LOTO, and fire-pathway clearance handled by a dedicated officer.", icon: "shield-check" },
        { text: "<strong>Kitchen Opening (HACCP)</strong>: Zero-fail protocols for temperature, hygiene, and allergen separation.", icon: "sunrise" },
        { text: "<strong>Digital Command & ORM</strong>: Protect your ratings with 24h response mandates for Google and Zomato.", icon: "globe" },
        { text: "<strong>Engineering & MEP Vitals</strong>: Proactive maintenance for HVAC, plumbing, and electrical banks to ensure zero downtime.", icon: "wrench" },
        { text: "<strong>Institutional Memory</strong>: Digital instructions that stay with the brand even when your best chef resigns.", icon: "history" }
    ],
    checklists: [
        {
            title: "Kitchen Opening & Food Safety",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", description: "Log temperatures of all walk-in chillers and freezers.", priority: "High", riskLevel: "High", consequence: "Pathogen growth and total stock loss.", proof: "Digital Log", trainerNotes: "Check at 8 AM daily. Reject if > 5°C." },
                { id: "RES-KIT-02", description: "Inspect dry storage for signs of rodents or pests.", priority: "High", riskLevel: "High", consequence: "Regulatory closure and contamination.", proof: "Visual Check", trainerNotes: "Look for droppings or chewed bags." },
                { id: "RES-KIT-03", description: "Verify sanitization of all surfaces using 200ppm strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination risk.", proof: "Test Strip", trainerNotes: "Dip strip for 10 seconds." },
                { id: "RES-KIT-04", description: "Calibrate all food probes using ice-point method.", priority: "Medium", riskLevel: "Medium", consequence: "False safety readings.", proof: "Calibration Log", trainerNotes: "Must read 0°C in ice slurry." },
                { id: "RES-KIT-05", description: "Audit staff health and grooming (nails, wounds, hair).", priority: "High", riskLevel: "Medium", consequence: "Hygiene failure.", proof: "Daily Audit", trainerNotes: "No open wounds allowed." },
                { id: "RES-KIT-06", description: "Verify oil quality using TPM meter (Target < 25%).", priority: "High", riskLevel: "Medium", consequence: "Carcinogenic buildup and poor food taste.", proof: "TPM Reading", trainerNotes: "Discard oil if TPM exceeds 25%." },
                { id: "RES-KIT-07", description: "Check dishwashing machine final rinse temperature (Min 82°C).", priority: "High", riskLevel: "High", consequence: "Ineffective sanitization of guest utensils.", proof: "Gauge Check", trainerNotes: "Verify steam is visible." },
                { id: "RES-KIT-08", description: "Verify allergen segregation in prep zones (Color-coded boards).", priority: "High", riskLevel: "High", consequence: "Fatal anaphylactic shock liability.", proof: "Visual Audit", trainerNotes: "Purple boards for allergens ONLY." },
                { id: "RES-KIT-09", description: "Inspect walk-in chiller gaskets for mold or tears.", priority: "Medium", riskLevel: "Low", consequence: "Energy loss and bacterial growth.", proof: "Visual Check", trainerNotes: "Clean with 10% bleach solution." },
                { id: "RES-KIT-10", description: "Confirm grease trap clear and functional.", priority: "High", riskLevel: "Medium", consequence: "Drainage backup and hygiene shutdown.", proof: "Physical Check", trainerNotes: "Clear before morning rush." }
            ]
        },
        {
            title: "Cold Chain & TPM Protocol",
            department: "Quality",
            frequency: "Daily",
            role: "Sous Chef",
            summary: "Advanced technical monitoring for production stability.",
            icon: "thermometer-snowflake",
            tasks: [
                { id: "RES-COLD-01", description: "Log walk-in chiller defrost cycle completion.", priority: "Medium", riskLevel: "Medium", consequence: "Ice buildup and compressor failure.", proof: "System Log", trainerNotes: "Defrost should trigger every 6h." },
                { id: "RES-COLD-02", description: "Verify Blast Chiller core-temp records for morning prep.", priority: "High", riskLevel: "High", consequence: "Slow cooling allows spore germination.", proof: "Core Log", trainerNotes: "Target: 70°C to 3°C in <90 mins." },
                { id: "RES-COLD-03", description: "Check temperature of high-risk delivery (Milk/Meat) on arrival.", priority: "High", riskLevel: "High", consequence: "Accepting spoiled stock.", proof: "Inward Log", trainerNotes: "Must be < 4°C at dock." },
                { id: "RES-COLD-04", description: "Audit date-labeling compliance (Prep Date vs. Expiry).", priority: "High", riskLevel: "High", consequence: "Serving expired product; FSSAI violation.", proof: "Shelf Audit", trainerNotes: "Use 'Discard' labels for end-of-day." },
                { id: "RES-COLD-05", description: "Log freezer air-curtain and door-seal integrity.", priority: "Low", riskLevel: "Low", consequence: "High energy bills and freezer burn.", proof: "Visual Check", trainerNotes: "Check for condensation on exterior." },
                { id: "RES-COLD-06", description: "Verify functionality of digital temp-data loggers.", priority: "High", riskLevel: "Medium", consequence: "Loss of auditable safety records.", proof: "App Sync", trainerNotes: "Check battery levels on sensors." },
                { id: "RES-COLD-07", description: "Check ice-machine for slime or mold buildup.", priority: "High", riskLevel: "High", consequence: "Contaminated ice and guest illness.", proof: "Visual Check", trainerNotes: "Sanitize bin monthly." },
                { id: "RES-COLD-08", description: "Monitor refrigerator condenser coils for dust.", priority: "Low", riskLevel: "Low", consequence: "Reduced efficiency and compressor burnout.", proof: "Maintenance Log", trainerNotes: "Vacuum coils every 30 days." },
                { id: "RES-COLD-09", description: "Verify storage of raw eggs on the bottom shelf.", priority: "High", riskLevel: "High", consequence: "Salmonella cross-contamination.", proof: "Shelf Audit", trainerNotes: "Never store above cooked food." },
                { id: "RES-COLD-10", description: "Ensure walk-in door handles are sanitized every 4h.", priority: "Medium", riskLevel: "Low", consequence: "Surface pathogen spread.", proof: "Sanitization Log", trainerNotes: "Use quaternary ammonium sanitizer." }
            ]
        },
        {
            title: "Service & Dining Logic",
            department: "Service",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Protects the guest experience standard.",
            icon: "armchair",
            tasks: [
                { id: "RES-DIN-01", description: "Verify table alignment against brand planogram.", priority: "Low", riskLevel: "Low", consequence: "Disorganized brand appearance.", proof: "Visual Check", trainerNotes: "Use tile lines for alignment." },
                { id: "RES-DIN-02", description: "Inspect restrooms hourly for cleanliness and stock.", priority: "High", riskLevel: "Medium", consequence: "Major driver of negative reviews.", proof: "Hourly Log", trainerNotes: "Check for odors and mirror spots." },
                { id: "RES-DIN-03", description: "Check ambiance vitals: Scent, Music Volume, Lighting.", priority: "Medium", riskLevel: "Low", consequence: "Lower guest dwell time.", proof: "Daily Log", trainerNotes: "Music should be background, not lead." },
                { id: "RES-DIN-04", description: "Conduct pre-shift briefing: review 86'd items and specials.", priority: "High", riskLevel: "Low", consequence: "Misinformed staff and guest frustration.", proof: "Briefing Log", trainerNotes: "Quiz one server on ingredients." },
                { id: "RES-DIN-05", description: "Check all POS terminals are functional and paper is stocked.", priority: "High", riskLevel: "Medium", consequence: "Billing delays during peak rush.", proof: "System Check", trainerNotes: "Test credit card machine signal." },
                { id: "RES-DIN-06", description: "Verify first-aid kit presence and AED battery status.", priority: "High", riskLevel: "High", consequence: "Inability to respond to guest medical emergency.", proof: "Visual Check", trainerNotes: "Replace AED pads if expired." },
                { id: "RES-DIN-07", description: "Audit uniform grooming (ironed, no stains, clean shoes).", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution and poor first impression.", proof: "Grooming Log", trainerNotes: "Check hairnets if applicable." },
                { id: "RES-DIN-08", description: "Monitor water-station hygiene and pitcher cleanliness.", priority: "High", riskLevel: "Medium", consequence: "Water-borne illness transmission.", proof: "Visual Audit", trainerNotes: "Pitchers must be sanitized every 4h." },
                { id: "RES-DIN-09", description: "Verify all floor menu QR codes are functional.", priority: "Medium", riskLevel: "Low", consequence: "Friction at ordering.", proof: "Digital Test", trainerNotes: "Test link on both iOS and Android." },
                { id: "RES-DIN-10", description: "Audit table-top condiment freshness (Salt/Pepper/Oil).", priority: "Low", riskLevel: "Low", consequence: "Poor quality signals.", proof: "Visual Check", trainerNotes: "Wipe bottles to remove sticky residue." }
            ]
        },
        {
            title: "Bar & Happy Hour Control",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Governance for high-margin alcohol and regulated stock.",
            icon: "glass-water",
            tasks: [
                { id: "RES-BAR-01", description: "Reconcile opening bottle counts against POS sales.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue leakage.", proof: "Inventory Sheet", trainerNotes: "Check weight of open bottles." },
                { id: "RES-BAR-02", description: "Verify garnish freshness and prep date labels.", priority: "Medium", riskLevel: "Low", consequence: "Poor drink quality.", proof: "Visual Check", trainerNotes: "Discard garnishes older than 24h." },
                { id: "RES-BAR-03", description: "Audit Bar License display and age-check compliance.", priority: "High", riskLevel: "High", consequence: "Legal closure and massive fines.", proof: "Compliance Note", trainerNotes: "Shadow one ID check daily." },
                { id: "RES-BAR-04", description: "Clean beer draught lines and inspect keg dates.", priority: "High", riskLevel: "Medium", consequence: "Sour taste and wastage.", proof: "Line Log", trainerNotes: "Flush with cleaning solution weekly." },
                { id: "RES-BAR-05", description: "Execute Narcotics-tier control for high-value liqueurs.", priority: "High", riskLevel: "High", consequence: "Inventory loss of premium assets.", proof: "Dual-Verification", trainerNotes: "Verify seals on 'top-shelf' stock." },
                { id: "RES-BAR-06", description: "Log waste/breakage bottles with manager signature.", priority: "High", riskLevel: "Medium", consequence: "Fraudulent breakage logs masking theft.", proof: "Waste Sheet", trainerNotes: "Manager must see the broken bottle." },
                { id: "RES-BAR-07", description: "Verify glass-washer final rinse temp (Target 82°C).", priority: "High", riskLevel: "High", consequence: "Lipstick and bacterial residue on glasses.", proof: "Temp Reading", trainerNotes: "Check for spotted glassware." },
                { id: "RES-BAR-08", description: "Check bar-mat and floor-drain for foul odors.", priority: "Medium", riskLevel: "Low", consequence: "Negative ambiance.", proof: "Physical Check", trainerNotes: "Pour 1L water + bleach in drain daily." },
                { id: "RES-BAR-09", description: "Audit straw and napkin inventory.", priority: "Low", riskLevel: "Low", consequence: "Service friction.", proof: "Stock Sheet", trainerNotes: "Ensure eco-friendly straws only." },
                { id: "RES-BAR-10", description: "Confirm POS 'No-Sale' button usage logs.", priority: "High", riskLevel: "High", consequence: "Unauthorized cash drawer access.", proof: "Void Log Audit", trainerNotes: "Investigate any code usage > 3 times." }
            ]
        },
        {
            title: "EHS & Safety Infrastructure",
            department: "Safety",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Mandatory protocols to prevent overnight disasters and ensure worker safety.",
            icon: "hard-hat",
            tasks: [
                { id: "RES-SAFE-01", description: "Verify all gas bank valves are closed and locked.", priority: "High", riskLevel: "High", consequence: "Catastrophic gas leak or explosion.", proof: "Physical Check", trainerNotes: "Sniff check at the manifold." },
                { id: "RES-SAFE-02", description: "Shutdown all non-essential electrical equipment.", priority: "High", riskLevel: "High", consequence: "Short-circuit fire risk and energy waste.", proof: "Breaker Walkthrough", trainerNotes: "Don't turn off refrigerators." },
                { id: "RES-SAFE-03", description: "Confirm all external exits are locked and alarms armed.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry and burglary.", proof: "Alarm Signal", trainerNotes: "Check back-alley door twice." },
                { id: "RES-SAFE-04", description: "Execute LOTO (Lock-Out Tag-Out) for any equipment in repair.", priority: "High", riskLevel: "High", consequence: "Fatal electrical shock or mechanical injury.", proof: "LOTO Log", trainerNotes: "Verify zero-energy state before repair." },
                { id: "RES-SAFE-05", description: "Inspect fire extinguishers for pressure and accessibility.", priority: "High", riskLevel: "High", consequence: "Inability to fight fire during critical minutes.", proof: "Pressure Gauge", trainerNotes: "Extinguishers must be clear of boxes." },
                { id: "RES-SAFE-06", description: "Audit waste segregation at source (Wet/Dry/Hazardous).", priority: "Medium", riskLevel: "Low", consequence: "Environmental fines.", proof: "Visual Audit", trainerNotes: "Check for leaking oil drums." },
                { id: "RES-SAFE-07", description: "Test emergency lighting battery backup.", priority: "Medium", riskLevel: "Medium", consequence: "Panic during power outage.", proof: "Test Log", trainerNotes: "Press test button for 5s." },
                { id: "RES-SAFE-08", description: "Check PPE availability for stewards (Gloves/Cut-resistant).", priority: "Medium", riskLevel: "Low", consequence: "Worker injury and turnover.", proof: "Stock Audit", trainerNotes: "Replace torn gloves immediately." },
                { id: "RES-SAFE-09", description: "Monitor water-tank potability (Chlorine residual check).", priority: "High", riskLevel: "High", consequence: "Water-borne disease outbreak.", proof: "Test Strip", trainerNotes: "Target: 0.5ppm residual." },
                { id: "RES-SAFE-10", description: "Final manager walkthrough signature.", priority: "High", riskLevel: "High", consequence: "Gaps in daily discipline.", proof: "Manual Sign-off", trainerNotes: "Walk the 'S' path across the floor." }
            ]
        },
        {
            title: "Financial & Inventory Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Accountant",
            summary: "Profit protection and inventory integrity governance.",
            icon: "banknote",
            tasks: [
                { id: "RES-FIN-01", description: "Reconcile daily POS gross sales against bank settlement reports.", priority: "High", riskLevel: "High", consequence: "Unidentified revenue leakage or banking error.", proof: "Settlement Sheet" },
                { id: "RES-FIN-02", description: "Perform 'Blind Stock Count' of top 5 high-value SKUs (e.g., Salmon, Liqueur).", priority: "High", riskLevel: "High", consequence: "Internal theft masking as consumption.", proof: "Audit Sheet" },
                { id: "RES-FIN-03", description: "Audit 'Cancelled Bill' and 'Void' reports for unauthorized patterns.", priority: "High", riskLevel: "High", consequence: "Cashier-level fraud.", proof: "Void Log Audit" },
                { id: "RES-FIN-04", description: "Verify petty cash balance against daily vouchers.", priority: "Medium", riskLevel: "Medium", consequence: "Mismanagement of operational cash.", proof: "Cash Count" },
                { id: "RES-FIN-05", description: "Reconcile delivery partner (Zomato/Swiggy) payouts against POS orders.", priority: "High", riskLevel: "Medium", consequence: "Over-commission billing errors.", proof: "Aggregator Match" },
                { id: "RES-FIN-06", description: "Check for 'Manual' bill entries in the system.", priority: "High", riskLevel: "High", consequence: "Bypassing fiscal controls.", proof: "System Report" },
                { id: "RES-FIN-07", description: "Verify daily cash-drop to secure vault/pickup.", priority: "High", riskLevel: "High", consequence: "Loss of liquid assets during robbery.", proof: "Deposit Slip" },
                { id: "RES-FIN-08", description: "Audit vendor invoice pricing against signed master contracts.", priority: "Medium", riskLevel: "Low", consequence: "Silent margin erosion via vendor price-creep.", proof: "Pricing Match" },
                { id: "RES-FIN-09", description: "Verify validity of all active business licenses (Insurance/Trade).", priority: "High", riskLevel: "High", consequence: "Legal closure or insurance denial.", proof: "License Tracker" },
                { id: "RES-FIN-10", description: "Reconcile monthly utility bills against daily meter logs.", priority: "Low", riskLevel: "Low", consequence: "Undetected energy waste or leaks.", proof: "Utility Audit" }
            ]
        },
        {
            title: "HR, Training & Grooming",
            department: "HR",
            frequency: "Daily",
            role: "HR Manager",
            summary: "Ensures staff readiness and compliance with labor standards.",
            icon: "users",
            tasks: [
                { id: "RES-HR-01", description: "Audit daily attendance and biometric sync.", priority: "Medium", riskLevel: "Low", consequence: "Payroll errors and labor law gaps.", proof: "Roster Sheet" },
                { id: "RES-HR-02", description: "Conduct grooming parade for incoming shift staff.", priority: "Medium", riskLevel: "Low", consequence: "Poor brand image and hygiene signals.", proof: "Grooming Log" },
                { id: "RES-HR-03", description: "Verify medical fitness certificates for all active food handlers.", priority: "High", riskLevel: "High", consequence: "Communicable disease outbreak; FSSAI violation.", proof: "File Audit" },
                { id: "RES-HR-04", description: "Confirm one 'Technical Skill' spot-check performed today.", priority: "Low", riskLevel: "Low", consequence: "Slipping service quality.", proof: "Quiz Log" },
                { id: "RES-HR-05", description: "Audit staff locker room hygiene and lock integrity.", priority: "Low", riskLevel: "Low", consequence: "Internal theft and morale drop.", proof: "Walkthrough" },
                { id: "RES-HR-06", description: "Check status of 'Staff Meal' quality and hygiene.", priority: "Medium", riskLevel: "Low", consequence: "High absenteeism and low morale.", proof: "Visual Check" },
                { id: "RES-HR-07", description: "Verify training records for new hires (onboarding compliance).", priority: "High", riskLevel: "Medium", consequence: "Unsafe work practices by untrained staff.", proof: "Training Matrix" },
                { id: "RES-HR-08", description: "Audit labor law display boards (Min Wage/Working Hours).", priority: "Medium", riskLevel: "High", consequence: "Heavy fines during labor inspection.", proof: "Visual Audit" },
                { id: "RES-HR-09", description: "Track and log any staff grievances or conflicts.", priority: "Medium", riskLevel: "Medium", consequence: "Internal churn and legal risk.", proof: "Grievance Log" },
                { id: "RES-HR-10", description: "Manage monthly staff award/recognition program.", priority: "Low", riskLevel: "Low", consequence: "Loss of top talent.", proof: "Announcement" }
            ]
        },
        {
            title: "Digital Command & ORM",
            department: "Marketing",
            frequency: "Daily",
            role: "Admin Manager",
            summary: "Protects online reputation and ranking.",
            icon: "globe",
            tasks: [
                { id: "RES-ORM-01", description: "Reply to all Google My Business reviews < 24h.", priority: "High", riskLevel: "Medium", consequence: "Ranking drop and brand damage.", proof: "Admin Dashboard", trainerNotes: "Personalize every response." },
                { id: "RES-ORM-02", description: "Review and resolve Zomato/Swiggy order complaints.", priority: "High", riskLevel: "High", consequence: "Merchant platform penalties.", proof: "App Log", trainerNotes: "Call guest if order was cancelled." },
                { id: "RES-ORM-03", description: "Audit 'Table Service' survey scores.", priority: "Medium", riskLevel: "Low", consequence: "Undetected drop in server quality.", proof: "Survey Sheet", trainerNotes: "Focus on 'Speed' score." },
                { id: "RES-ORM-04", description: "Check Instagram DM inbox for guest inquiries.", priority: "Medium", riskLevel: "Low", consequence: "Missed booking opportunities.", proof: "Inbox Clear", trainerNotes: "Target < 30 min response." },
                { id: "RES-ORM-05", description: "Verify 'Today's Specials' are updated on social stories.", priority: "Low", riskLevel: "Low", consequence: "Lower sales of high-margin specials.", proof: "Story Post", trainerNotes: "Use high-quality video/photos." },
                { id: "RES-ORM-06", description: "Audit website reservation widget functionality.", priority: "High", riskLevel: "Medium", consequence: "Lost guest revenue.", proof: "Digital Test", trainerNotes: "Try booking a table for 4." },
                { id: "RES-ORM-07", description: "Monitor competitor mentions and local trends.", priority: "Low", riskLevel: "Low", consequence: "Loss of market relevance.", proof: "Trend Log", trainerNotes: "Check local hashtags daily." },
                { id: "RES-ORM-08", description: "Update Google My Business 'Holiday Hours' if needed.", priority: "High", riskLevel: "Medium", consequence: "Guests arriving at a closed outlet.", proof: "System Sync", trainerNotes: "Update 7 days in advance." },
                { id: "RES-ORM-09", description: "Check for unauthorized usage of brand logos online.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution.", proof: "Search Log", trainerNotes: "Report fake profiles." },
                { id: "RES-ORM-10", description: "Execute weekly 'Loyalty Pulse' email to VIP guests.", priority: "Medium", riskLevel: "Low", consequence: "Loss of recurring business.", proof: "Campaign Log", trainerNotes: "Include an exclusive offer." }
            ]
        },
        {
            title: "Engineering & MEP Vitals",
            department: "Maintenance",
            frequency: "Daily",
            role: "Admin Manager",
            summary: "Infrastructure readiness and utility uptime.",
            icon: "wrench",
            tasks: [
                { id: "RES-MEP-01", description: "Log daily electricity and water meter readings.", priority: "Medium", riskLevel: "Low", consequence: "Undetected leaks or energy spikes.", proof: "Meter Log" },
                { id: "RES-MEP-02", description: "Verify backup generator fuel levels and battery voltage.", priority: "High", riskLevel: "High", consequence: "Blackout during peak weekend shift.", proof: "Test Log" },
                { id: "RES-MEP-03", description: "Check all floor and kitchen drains for blockage/odors.", priority: "High", riskLevel: "Medium", consequence: "Flooding and hygiene closure.", proof: "Visual Check" },
                { id: "RES-MEP-04", description: "Inspect HVAC air-filters and monitor lobby temp.", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort and high energy load.", proof: "BMS Reading" },
                { id: "RES-MEP-05", description: "Audit light-bulb functionality in the dining area.", priority: "Low", riskLevel: "Low", consequence: "Poor ambiance signals.", proof: "Visual Audit" },
                { id: "RES-MEP-06", description: "Test emergency exit push-bars and pathway lighting.", priority: "High", riskLevel: "High", consequence: "Safety violation during evacuation.", proof: "Physical Test" },
                { id: "RES-MEP-07", description: "Verify closure of all maintenance service tickets.", priority: "Medium", riskLevel: "Low", consequence: "Accumulated facility decay.", proof: "Ticket Log" },
                { id: "RES-MEP-08", description: "Check refrigerator condenser coils for dust buildup.", priority: "Low", riskLevel: "Low", consequence: "Compressor burnout risk.", proof: "Maintenance Log" },
                { id: "RES-MEP-09", description: "Monitor water-purifier (RO) TDS and filter status.", priority: "High", riskLevel: "Medium", consequence: "Waterborne illness liability.", proof: "TDS Reading" },
                { id: "RES-MEP-10", description: "Final facility shutdown check (excluding fridges).", priority: "High", riskLevel: "High", consequence: "Fire risk and utility waste.", proof: "Switch-off Log" }
            ]
        },
        {
            title: "Deep Cleaning & Hygiene",
            department: "Kitchen",
            frequency: "Weekly",
            role: "Head Chef",
            summary: "Advanced sanitation for back-of-house infrastructure.",
            icon: "sparkles",
            tasks: [
                { id: "RES-CLN-01", description: "Deep clean of exhaust hoods and grease filters.", priority: "High", riskLevel: "High", consequence: "Major fire hazard and airflow failure.", proof: "Visual Audit", trainerNotes: "Soak filters in degreaser overnight." },
                { id: "RES-CLN-02", description: "Pressure wash floor drains and grease traps.", priority: "High", riskLevel: "Medium", consequence: "Foul odors and drain backups.", proof: "Cleaning Log", trainerNotes: "Check for fruit-fly breeding." },
                { id: "RES-CLN-03", description: "Sanitize interiors of all refrigeration units.", priority: "High", riskLevel: "High", consequence: "Listeria and mold growth on shelving.", proof: "ATP Swab", trainerNotes: "Empty one unit at a time." },
                { id: "RES-CLN-04", description: "De-scale dishwashing machine and check nozzles.", priority: "Medium", riskLevel: "Low", consequence: "Poor cleaning of guest utensils.", proof: "Service Report", trainerNotes: "Use industrial descaling agent." },
                { id: "RES-CLN-05", description: "Wash and sanitize all vegetable wash crates.", priority: "High", riskLevel: "Medium", consequence: "Bacterial cross-contamination.", proof: "Visual Check", trainerNotes: "Air-dry before stacking." },
                { id: "RES-CLN-06", description: "Sanitize chemical storage shelves and bottles.", priority: "Medium", riskLevel: "Low", consequence: "Chemical contamination of food area.", proof: "Storage Audit", trainerNotes: "Check for leaking sprayers." },
                { id: "RES-CLN-07", description: "Clean behind and under all heavy equipment.", priority: "High", riskLevel: "High", consequence: "Pest breeding grounds.", proof: "Supervisor Walkthrough", trainerNotes: "Look for old food debris." },
                { id: "RES-CLN-08", description: "Wipe and sanitize dry-store shelving.", priority: "Low", riskLevel: "Low", consequence: "Dust and weevil attraction.", proof: "Shelf Check", trainerNotes: "Wipe with 70% alcohol." },
                { id: "RES-CLN-09", description: "Deep clean staff locker room and washrooms.", priority: "Medium", riskLevel: "Low", consequence: "Poor staff morale and hygiene signals.", proof: "Cleaning Log", trainerNotes: "Check locker tops for dust." },
                { id: "RES-CLN-10", description: "Final hygiene sign-off for the weekly cycle.", priority: "High", riskLevel: "Low", consequence: "Loss of baseline standards.", proof: "Signature", trainerNotes: "Conduct final walkthrough with GM." }
            ]
        },
        {
            title: "Security & Perimeter Control",
            department: "Security",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Hardens the perimeter and protects facility assets.",
            icon: "shield",
            tasks: [
                { id: "RES-SEC-01", description: "Verify CCTV recording status and camera focal points.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or unauthorized entry.", proof: "DVR Dashboard" },
                { id: "RES-SEC-02", description: "Patrol boundary walls and parking levels for suspicious activity.", priority: "High", riskLevel: "Medium", consequence: "Theft of tenant property or facility vandalism.", proof: "Patrol Log" },
                { id: "RES-SEC-03", description: "Audit visitor management logs for 100% ID verification.", priority: "High", riskLevel: "High", consequence: "Unidentified persons gaining facility access.", proof: "Registry Audit" },
                { id: "RES-SEC-04", description: "Check all panic buttons and silent alarms.", priority: "High", riskLevel: "High", consequence: "Inability to alert authorities during a robbery.", proof: "Alarm Test Log" },
                { id: "RES-SEC-05", description: "Audit key cabinet and verify all keys are accounted for.", priority: "High", riskLevel: "High", consequence: "Unauthorized access to display inventory.", proof: "Key Inventory" }
            ]
        },
        {
            title: "Supply Chain Integrity",
            department: "Procurement",
            frequency: "Daily",
            role: "Accountant",
            summary: "Profit protection at the point of entry.",
            icon: "package-search",
            tasks: [
                { id: "RES-SUP-01", description: "Scale Calibration: Test with 1kg standard weight.", priority: "High", riskLevel: "Medium", consequence: "Paying for missing weight.", proof: "Calibration Log", trainerNotes: "Scale must read exactly 1.000kg." },
                { id: "RES-SUP-02", description: "Check temp of incoming high-risk dairy/protein.", priority: "High", riskLevel: "High", consequence: "Accepting compromised stock.", proof: "Receiving Log" },
                { id: "RES-SUP-03", description: "Verify FSSAI license of fresh meat suppliers.", priority: "High", riskLevel: "High", consequence: "Legal liability for unsafe sourcing.", proof: "License File" },
                { id: "RES-SUP-04", description: "Verify LPG/Gas cylinder weight and seal integrity.", priority: "High", riskLevel: "High", consequence: "Financial loss and gas leak risk.", proof: "Receipt Log" },
                { id: "RES-SUP-05", description: "Audit dry-store inventory against purchase orders.", priority: "High", riskLevel: "High", consequence: "Stock leakage and over-billing.", proof: "PO Match" }
            ]
        }
    ]
};
