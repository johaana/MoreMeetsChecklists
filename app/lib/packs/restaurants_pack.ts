
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations Control System (ROCS)",
    category: "Hospitality",
    description: "The definitive governance framework for 5-star restaurant reliability. Includes 155+ technical SOPs, Shift Handovers, and ROI tracking.",
    heroHeadline: "Stop operational leakage and viral food-safety scandals.",
    heroSubheadline: "Built for COOs and Owners who take zero-risk governance and P&L protection seriously.",
    pricingUrgency: "One health department closure or a single 'never event' costs 100x more than this entire system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V4.2 ENTERPRISE",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Owners", "Group COOs", "Multi-Unit Managers", "Executive Chefs"],
    sampleItems: [
        { text: "<strong>Eliminate</strong> memory-dependency with an Interval-Aware 365-day operational matrix.", icon: "calendar-check" },
        { text: "<strong>Protect</strong> margins with an Integrated Incident Log and Estimated Loss tracker.", icon: "banknote" },
        { text: "<strong>Ensure</strong> continuity with a Shift Handover Bridge between Morning and Night teams.", icon: "history" },
        { text: "<strong>Facility Switchboard</strong>: Toggle Bar, Garden, Valet, and Pool modules ON/OFF per branch.", icon: "layout-grid" },
        { text: "<strong>Harden</strong> compliance with high-risk Verification layers for managers and chefs.", icon: "shield-check" },
        { text: "<strong>Standardize</strong> training with 155+ technical SOPs and expert Trainer's Notes.", icon: "graduation-cap" }
    ],
    checklists: [
        {
            title: "Kitchen Opening (HACCP)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: [
                { id: "KO-01", description: "Log temperatures of all walk-in chillers and freezers.", priority: "High", riskLevel: "High", consequence: "Bacterial growth and total stock loss.", proof: "Digital Temp Log", trainerNotes: "Check the condenser. If hot, call maintenance immediately." },
                { id: "KO-02", description: "Inspect dry storage for signs of rodents or pests.", priority: "High", riskLevel: "High", consequence: "Immediate health department closure.", proof: "Pest Log", trainerNotes: "Check corner junctions and behind bottom shelves." },
                { id: "KO-03", description: "Verify sanitization of all surfaces using 200ppm strips.", priority: "High", riskLevel: "High", consequence: "Cross-contamination of meat pathogens.", proof: "Sanitizer Audit", trainerNotes: "Test strip must match the benchmark on the bottle." },
                { id: "KO-04", description: "Calibrate all food probes using ice-point method.", priority: "High", riskLevel: "Medium", consequence: "False safe readings leading to raw food service.", proof: "Calibration Log", trainerNotes: "Must read 0°C in a 50/50 ice-water slurry." },
                { id: "KO-05", description: "Audit staff health and grooming (nails, wounds, hair).", priority: "High", riskLevel: "High", consequence: "Pathogen transmission to guests.", proof: "Staff Log", trainerNotes: "Any open wound must be blue-bandaged and gloved." },
                { id: "KO-06", description: "Check inventory of all high-risk perishable items.", priority: "High", riskLevel: "Medium", consequence: "Stockouts during peak service.", proof: "Inventory Sheet", trainerNotes: "Focus on proteins and fresh dairy." },
                { id: "KO-07", description: "Verify functionality of all kitchen exhaust systems.", priority: "High", riskLevel: "High", consequence: "Smoke buildup and fire risk.", proof: "Visual Check", trainerNotes: "Listen for unusual motor noise." },
                { id: "KO-08", description: "Prepare sanitized sanitizer buckets for all workstations.", priority: "Medium", riskLevel: "Medium", consequence: "Poor hygiene during prep.", proof: "Visual Audit", trainerNotes: "Change water every 2 hours." },
                { id: "KO-09", description: "Organize raw prep area according to color-coding rules.", priority: "High", riskLevel: "High", consequence: "Cross-contamination.", proof: "Visual Check", trainerNotes: "Red boards for meat, green for veg." },
                { id: "KO-10", description: "Test all dishwasher chemical levels.", priority: "High", riskLevel: "Medium", consequence: "Dirty plates reaching guests.", proof: "Chemical Log", trainerNotes: "Ensure rinse aid is above 50%." },
                { id: "KO-11", description: "Check availability of blue detectable band-aids.", priority: "Medium", riskLevel: "Low", consequence: "Contaminated food reaching guests.", proof: "Visual Check", trainerNotes: "Mandatory for food handlers." },
                { id: "KO-12", description: "Verify pest control bait station placement.", priority: "High", riskLevel: "High", consequence: "Infestation risks.", proof: "Pest Log", trainerNotes: "Do not move stations." },
                { id: "KO-13", description: "Check water filter pressure for ice machine.", priority: "Medium", riskLevel: "Low", consequence: "Poor ice quality.", proof: "Pressure Gauge", trainerNotes: "Filter change req every 6 months." },
                { id: "KO-14", description: "Inspect grease trap for capacity/odors.", priority: "Medium", riskLevel: "Medium", consequence: "Drainage blockages.", proof: "Maintenance Log", trainerNotes: "Schedule pump out if >75% full." },
                { id: "KO-15", description: "Check oven gaskets for heat leaks.", priority: "Medium", riskLevel: "Low", consequence: "Energy waste/Uneven cooking.", proof: "Visual Check", trainerNotes: "Seals must be supple and intact." }
            ]
        },
        {
            title: "Kitchen Closing & Safety",
            department: "Kitchen",
            frequency: "Daily",
            role: "Sous Chef",
            summary: "End-of-shift safety and sanitation shutdown.",
            icon: "sunset",
            tasks: [
                { id: "KC-01", description: "Perform mandatory main gas valve shutdown.", priority: "High", riskLevel: "High", consequence: "Explosion or overnight fire.", proof: "Physical Log", trainerNotes: "Smell for leaks before leaving." },
                { id: "KC-02", description: "Empty and deep-clean all deep fryers.", priority: "High", riskLevel: "High", consequence: "Oil fire or rancid flavor.", proof: "Visual Audit", trainerNotes: "Filter oil while warm, not hot." },
                { id: "KC-03", description: "Label and date-stamp all prepped items (FIFO).", priority: "High", riskLevel: "Medium", consequence: "Food waste or expired service.", proof: "Visual Check", trainerNotes: "Use only brand-approved labels." },
                { id: "KC-04", description: "Clean and sanitize all walk-in floor drains.", priority: "Medium", riskLevel: "Medium", consequence: "Pest attraction and odors.", proof: "Hygiene Log", trainerNotes: "Use hot water flush first." },
                { id: "KC-05", description: "Organize and secure chemical storage locker.", priority: "High", riskLevel: "High", consequence: "Unauthorized use or spill.", proof: "Visual Check", trainerNotes: "Keep key with Duty Manager." },
                { id: "KC-06", description: "Empty all trash bins and sanitize interiors.", priority: "Medium", riskLevel: "Low", consequence: "Fly infestation.", proof: "Visual Audit", trainerNotes: "Bins must be bone-dry." },
                { id: "KC-07", description: "Check all pilot lights are extinguished.", priority: "High", riskLevel: "High", consequence: "Gas buildup.", proof: "Visual Check", trainerNotes: "Blow out manually if needed." },
                { id: "KC-08", description: "Sanitize meat slicer and disassemble.", priority: "High", riskLevel: "High", consequence: "Listeria growth.", proof: "Visual Audit", trainerNotes: "Blades require specialized care." },
                { id: "KC-09", description: "Secure all knife magnets and sharpen.", priority: "Medium", riskLevel: "Low", consequence: "Theft or dull-blade injury.", proof: "Visual Check", trainerNotes: "Check count against board." },
                { id: "KC-10", description: "Final walk-in door seal verification.", priority: "High", riskLevel: "Medium", consequence: "Overnight stock spoilage.", proof: "Temp Log", trainerNotes: "Listen for the 'hiss' of the seal." }
            ]
        },
        {
            title: "Bar Opening & Setup",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Beverage service readiness and revenue protection.",
            icon: "glass-water",
            tasks: [
                { id: "BO-01", description: "Ice machine deep flush and visual hygiene check.", priority: "High", riskLevel: "Medium", consequence: "Ice contamination.", proof: "Visual Audit", trainerNotes: "Look for pink mold." },
                { id: "BO-02", description: "Reconcile spirit inventory against previous closing.", priority: "High", riskLevel: "Medium", consequence: "Internal theft/leakage.", proof: "Stock Sheet", trainerNotes: "Check seals on rare malts." },
                { id: "BO-03", description: "Date-code all fresh fruit garnishes.", priority: "Medium", riskLevel: "Medium", consequence: "Food poisoning risk.", proof: "Date Tags", trainerNotes: "Discard after 24 hours." },
                { id: "BO-04", description: "Check draft beer line pressure (12-14 PSI).", priority: "High", riskLevel: "Medium", consequence: "Waste/Poor pour.", proof: "Pressure Log", trainerNotes: "Check gas tank level." },
                { id: "BO-05", description: "Sanitize all speed pours and jiggers.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination.", proof: "Visual Check", trainerNotes: "Soak in hot sanitizer." },
                { id: "BO-06", description: "Test soda fountain syrup concentrations.", priority: "Medium", riskLevel: "Low", consequence: "Poor drink quality.", proof: "Taste Test", trainerNotes: "Ensure 5:1 ratio." },
                { id: "BO-07", description: "Check wine fridge temperature (8-12°C).", priority: "High", riskLevel: "Medium", consequence: "Spoiled wine inventory.", proof: "Temp Log", trainerNotes: "Red wine at 16°C." },
                { id: "BO-08", description: "Clean coffee group heads and backflush.", priority: "Medium", riskLevel: "Low", consequence: "Bitter coffee/Scaling.", proof: "Cleaning Log", trainerNotes: "Use specialized powder." },
                { id: "BO-09", description: "Verify garnish ice-well is stocked and clean.", priority: "Low", riskLevel: "Low", consequence: "Warm garnishes.", proof: "Visual Check", trainerNotes: "Use filtered water ice." },
                { id: "BO-10", description: "Inspect glassware for chips and cracks.", priority: "High", riskLevel: "High", consequence: "Guest injury/Lip cuts.", proof: "Visual Audit", trainerNotes: "Discard chipped glass instantly." }
            ]
        },
        {
            title: "Bar Closing & Security",
            department: "Bar",
            frequency: "Daily",
            role: "Head Bartender",
            summary: "Revenue and stock security shutdown.",
            icon: "lock",
            tasks: [
                { id: "BC-01", description: "Perform blind-count of high-value malts.", priority: "High", riskLevel: "High", consequence: "Inventory theft.", proof: "Stock Sheet", trainerNotes: "Manager to verify deviations >2%." },
                { id: "BC-02", description: "Deep-clean and sanitize all bar wells and drains.", priority: "Medium", riskLevel: "Medium", consequence: "Fruit fly infestation.", proof: "Visual Audit", trainerNotes: "Drains require boiling water." },
                { id: "BC-03", description: "Lock spirit cages and secure key in safe.", priority: "High", riskLevel: "High", consequence: "Unauthorised access/Theft.", proof: "Visual Check", trainerNotes: "Double-lock the premium shelf." },
                { id: "BC-04", description: "Flush draft beer lines with cleaning solution.", priority: "Medium", riskLevel: "Medium", consequence: "Sour beer/Yeast buildup.", proof: "Cleaning Log", trainerNotes: "Required once every 7 days." },
                { id: "BC-05", description: "Wipe down all leather menus and tablet PCs.", priority: "Low", riskLevel: "Low", consequence: "Poor hygiene perception.", proof: "Visual Check", trainerNotes: "Use alcohol-free wipes for leather." }
            ]
        },
        {
            title: "FOH Service Readiness",
            department: "Service",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Brand standards and guest comfort audits.",
            icon: "layout",
            tasks: [
                { id: "FOH-01", description: "Table Wobble & Cleanliness Walkthrough.", priority: "Medium", riskLevel: "Low", consequence: "Negative guest reviews.", proof: "Walkthrough Log", trainerNotes: "Check under table edges." },
                { id: "FOH-02", description: "Restroom 10-Point Audit (Paper, Scent, Water).", priority: "High", riskLevel: "Medium", consequence: "Low Google/NPS scores.", proof: "Restroom Log", trainerNotes: "Mirror must be streak-free." },
                { id: "FOH-03", description: "Verify Menu & Table Talker pricing accuracy.", priority: "High", riskLevel: "Medium", consequence: "Legal billing disputes.", proof: "Menu Audit", trainerNotes: "Remove stained menus." },
                { id: "FOH-04", description: "Check ambient lighting/Dimmer presets.", priority: "Medium", riskLevel: "Low", consequence: "Wrong ambiance.", proof: "Visual Check", trainerNotes: "Level 4 for dinner." },
                { id: "FOH-05", description: "Test Playlist & Volume Levels.", priority: "Low", riskLevel: "Low", consequence: "Atmosphere mismatch.", proof: "Audio Audit", trainerNotes: "Background, not foreground." },
                { id: "FOH-06", description: "Host Stand Readiness (Tablets, Menus).", priority: "Medium", riskLevel: "Low", consequence: "Chaotic arrival.", proof: "Visual Check", trainerNotes: "Clean leather folders." },
                { id: "FOH-07", description: "VIP/Reservation Briefing with Team.", priority: "High", riskLevel: "Low", consequence: "Missed personalization.", proof: "Briefing Log", trainerNotes: "Mention regular guests." },
                { id: "FOH-08", description: "Grooming & Uniform Audit.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution.", proof: "Staff Log", trainerNotes: "Ironed shirts mandatory." },
                { id: "FOH-09", description: "AC/Heating Set Point Check (22°C).", priority: "High", riskLevel: "Low", consequence: "Guest discomfort.", proof: "BMS Reading", trainerNotes: "Adjust 1hr before open." },
                { id: "FOH-10", description: "Server Station Polish & Restock.", priority: "Medium", riskLevel: "Low", consequence: "Service lag.", proof: "Visual Check", trainerNotes: "Steam-polish cutlery." }
            ]
        },
        {
            title: "EHS & Safety Audit",
            department: "Compliance",
            frequency: "Weekly",
            role: "General Manager",
            summary: "Life-safety and legal liability mitigation.",
            icon: "hard-hat",
            tasks: [
                { id: "EHS-01", description: "Fire Exit Clearance & Panic Bar Test.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment risk.", proof: "Exit Log", trainerNotes: "No storage in stairwells." },
                { id: "EHS-02", description: "First Aid & AED Battery/Stock Audit.", priority: "High", riskLevel: "High", consequence: "Medical response failure.", proof: "Medical Log", trainerNotes: "Check expiry on pads." },
                { id: "EHS-03", description: "Electrical Panel Hotspot/Odor Audit.", priority: "High", riskLevel: "High", consequence: "Structural fire.", proof: "Electrical Log", trainerNotes: "Use thermal gun." },
                { id: "EHS-04", description: "Floor Slip-Resistance & Mat Audit.", priority: "High", riskLevel: "Medium", consequence: "Slip & Fall litigation.", proof: "Walkthrough", trainerNotes: "Check kitchen thresholds." },
                { id: "EHS-05", description: "Emergency Lighting Backup Test.", priority: "High", riskLevel: "High", consequence: "Blackout panic.", proof: "Test Log", trainerNotes: "10-second hold test." },
                { id: "EHS-06", description: "Review OSHA Accident Register.", priority: "High", riskLevel: "High", consequence: "Regulatory fines.", proof: "Register Audit", trainerNotes: "Verify zero-entry if no incidents." },
                { id: "EHS-07", description: "Kitchen Fire Suppression System Gauge Check.", priority: "High", riskLevel: "High", consequence: "Total asset loss in fire.", proof: "Visual Log", trainerNotes: "Needle must be in green zone." },
                { id: "EHS-08", description: "Inspect all Staff PPE (Gloves, Aprons).", priority: "Medium", riskLevel: "Medium", consequence: "Workplace injuries.", proof: "PPE Log", trainerNotes: "Replace any frayed items." },
                { id: "EHS-09", description: "Test Backup Generator fuel & load.", priority: "High", riskLevel: "High", consequence: "Operational shutdown.", proof: "Test Report", trainerNotes: "Run for 15 minutes." },
                { id: "EHS-10", description: "Verify pest control boundary sealing.", priority: "High", riskLevel: "High", consequence: "Infestation closure.", proof: "Visual Audit", trainerNotes: "Look for gaps around pipes." }
            ]
        },
        {
            title: "Statutory & Licensing",
            department: "Executive",
            frequency: "Monthly",
            role: "Owner/COO",
            summary: "License renewal and legal governance.",
            icon: "landmark",
            tasks: [
                { id: "MSTRAT-01", description: "FSSAI & Health License Expiry Review.", priority: "High", riskLevel: "High", consequence: "Operational closure.", proof: "Document Audit", trainerNotes: "Renew 60 days before." },
                { id: "MSTRAT-02", description: "Pest Control Boundary Sealing Audit.", priority: "High", riskLevel: "High", consequence: "Infestation closure.", proof: "Vendor Report", trainerNotes: "Audit bait map." },
                { id: "MSTRAT-03", description: "Equipment Calibration Audit (Scale/Temp).", priority: "High", riskLevel: "Medium", consequence: "Weight/Quality failures.", proof: "Calibration Cert", trainerNotes: "Use 3rd party labs." },
                { id: "MSTRAT-04", description: "Financial P&L Review vs Budget.", priority: "High", riskLevel: "Low", consequence: "Margin erosion.", proof: "P&L Analysis", trainerNotes: "Focus on COGS." },
                { id: "MSTRAT-05", description: "Labour Law / PF Compliance Audit.", priority: "High", riskLevel: "High", consequence: "Litigation risk.", proof: "Payroll Audit", trainerNotes: "Verify bank transfers." },
                { id: "MSTRAT-06", description: "Fire NOC Status Verification.", priority: "High", riskLevel: "High", consequence: "Forced closure.", proof: "Document File", trainerNotes: "Check equipment service dates." },
                { id: "MSTRAT-07", description: "Alcohol Excise Register Reconciliation.", priority: "High", riskLevel: "High", consequence: "Loss of bar license.", proof: "Register vs Stock", trainerNotes: "Zero error tolerance." },
                { id: "MSTRAT-08", description: "Public Liability Insurance Review.", priority: "High", riskLevel: "High", consequence: "Legal ruin after injury.", proof: "Policy File", trainerNotes: "Verify coverage limits." },
                { id: "MSTRAT-09", description: "Review Customer Feedback Trends.", priority: "Medium", riskLevel: "Low", consequence: "Brand irrelevance.", proof: "NPS Report", trainerNotes: "Focus on bottom 10% reviews." },
                { id: "MSTRAT-10", description: "Trade Waste Disposal Certificate Audit.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental penalties.", proof: "Disposal Slip", trainerNotes: "Collect from vendor monthly." }
            ]
        },
        {
            title: "Delivery & Takeaway Control",
            department: "Logistics",
            frequency: "Daily",
            role: "Dispatch Coordinator",
            summary: "Off-site brand and safety management.",
            icon: "truck",
            tasks: [
                { id: "DEL-01", description: "Thermal Bag Hygiene & Odor Audit.", priority: "High", riskLevel: "Medium", consequence: "Food quality complaints.", proof: "Visual Audit", trainerNotes: "Wipe with alcohol." },
                { id: "DEL-02", description: "Verify Tamper-Evident Seal Inventory.", priority: "High", riskLevel: "High", consequence: "Tampering risks.", proof: "Stock Sheet", trainerNotes: "Min 500 on hand." },
                { id: "DEL-03", description: "Driver Grooming & Vehicle Cleanliness Check.", priority: "Medium", riskLevel: "Low", consequence: "Brand damage.", proof: "Driver Log", trainerNotes: "Helmets must be clean." },
                { id: "DEL-04", description: "Order ID Handoff Procedure (3-Point Match).", priority: "High", riskLevel: "Medium", consequence: "Wrong orders/Financial loss.", proof: "Order Log", trainerNotes: "Receipt, Bag, System." },
                { id: "DEL-05", description: "Packaging Heat-Retention Integrity Check.", priority: "Medium", riskLevel: "Low", consequence: "Cold food delivery.", proof: "Visual Check", trainerNotes: "Lids must be airtight." }
            ]
        },
        {
            title: "Valet & Parking Security",
            department: "Security",
            frequency: "Daily",
            role: "Security Manager",
            summary: "Vehicle security and liability management.",
            icon: "car",
            tasks: [
                { id: "VAL-01", description: "Log existing vehicle damage at intake.", priority: "High", riskLevel: "Medium", consequence: "Fraudulent repair claims.", proof: "Damage Card", trainerNotes: "Circle all dents on arrival." },
                { id: "VAL-02", description: "Key Safe 2-Person Verification.", priority: "High", riskLevel: "High", consequence: "Vehicle theft.", proof: "Safe Log", trainerNotes: "Never leave keys on board." },
                { id: "VAL-03", description: "CCTV Blindspot & Night-Lighting Check.", priority: "Medium", riskLevel: "Medium", consequence: "Unrecorded theft/vandalism.", proof: "Visual Audit", trainerNotes: "Check after 7 PM." }
            ]
        },
        {
            title: "Garden & Outdoor Maintenance",
            department: "Facilities",
            frequency: "Weekly",
            role: "Facility Manager",
            summary: "Outdoor ambiance and pest control.",
            icon: "sprout",
            tasks: [
                { id: "GAR-01", description: "Outdoor Pest Boundary Treatment Log.", priority: "High", riskLevel: "High", consequence: "Guest bites/Infestation.", proof: "Vendor Log", trainerNotes: "Focus on standing water." },
                { id: "GAR-02", description: "Weatherproofing & Umbrella Anchor Audit.", priority: "High", riskLevel: "High", consequence: "Wind-related injury.", proof: "Visual Check", trainerNotes: "Check weights on base." }
            ]
        },
        {
            title: "Staff Quarters & Hygiene",
            department: "HR",
            frequency: "Daily",
            role: "HR Supervisor",
            summary: "Internal welfare and back-of-house hygiene.",
            icon: "home",
            tasks: [
                { id: "SQ-01", description: "Staff Locker & Changing Room Deep Clean.", priority: "Medium", riskLevel: "Medium", consequence: "Internal infection spread.", proof: "Cleaning Log", trainerNotes: "Flush floor drains daily." },
                { id: "SQ-02", description: "Uniform Laundry Sanitization Check.", priority: "Medium", riskLevel: "Low", consequence: "Staff cross-contamination.", proof: "Laundry Log", trainerNotes: "Wash temp must be >60°C." }
            ]
        }
    ]
};
