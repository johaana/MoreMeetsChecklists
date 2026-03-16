
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations Control System (ROCS)",
    category: "Hospitality",
    description: "The definitive governance framework for 5-star restaurant reliability. Includes 150+ technical SOPs, Shift Handovers, and ROI tracking.",
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
        { text: "<strong>Standardize</strong> training with 150+ technical SOPs and expert Trainer's Notes.", icon: "graduation-cap" }
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
                { id: "KO-10", description: "Test all dishwasher chemical levels.", priority: "High", riskLevel: "Medium", consequence: "Dirty plates reaching guests.", proof: "Chemical Log", trainerNotes: "Ensure rinse aid is above 50%." }
            ]
        },
        {
            title: "Bar Opening & Beverage Setup",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Manager",
            summary: "Beverage service readiness and high-value stock protection.",
            icon: "glass-water",
            tasks: [
                { id: "BO-01", description: "Ice machine deep flush and visual hygiene check.", priority: "High", riskLevel: "Medium", consequence: "Ice contamination and poor drink quality.", proof: "Visual Audit", trainerNotes: "Look for pink mold in the top corners." },
                { id: "BO-02", description: "Reconcile premium spirit display bottles against previous night closing.", priority: "High", riskLevel: "Medium", consequence: "Unchecked high-value revenue leakage.", proof: "Stock Sheet", trainerNotes: "Check seals on 'Display Only' rare bottles." },
                { id: "BO-03", description: "Fruit & Garnish prep: Date-code all containers.", priority: "Medium", riskLevel: "Medium", consequence: "Food poisoning from cross-contaminated citrus.", proof: "Date Tags", trainerNotes: "Garnishes must be discarded after 24 hours." },
                { id: "BO-04", description: "Check draft beer line temperatures and pressure.", priority: "High", riskLevel: "Medium", consequence: "Poor pour quality and wastage.", proof: "Pressure Gauge Log", trainerNotes: "Target pressure: 12-14 PSI for most ales." },
                { id: "BO-05", description: "Sanitize all bar tools and glassware.", priority: "High", riskLevel: "Medium", consequence: "Unpleasant odors and bacterial risk.", proof: "Visual Audit", trainerNotes: "Use separate polish cloths for crystal." },
                { id: "BO-06", description: "Restock garnishes and stirrers.", priority: "Low", riskLevel: "Low", consequence: "Service delays.", proof: "Visual Check", trainerNotes: "Keep garnish tray on ice." },
                { id: "BO-07", description: "Test soda fountain syrup levels.", priority: "Medium", riskLevel: "Low", consequence: "Flat or tasteless drinks.", proof: "Visual Check", trainerNotes: "Check CO2 tank pressure." },
                { id: "BO-08", description: "Log opening stock of expensive wines.", priority: "High", riskLevel: "Medium", consequence: "Internal theft.", proof: "Wine Log", trainerNotes: "Check cork status." },
                { id: "BO-09", description: "Clean bar counters and under-bar mats.", priority: "Medium", riskLevel: "Low", consequence: "Fruit fly attraction.", proof: "Cleaning Log", trainerNotes: "Use enzyme cleaner for mats." },
                { id: "BO-10", description: "Check functionality of bar refrigeration.", priority: "High", riskLevel: "High", consequence: "Spoiled garnishes and warm beer.", proof: "Temp Log", trainerNotes: "Maintain at 2-4°C." }
            ]
        },
        {
            title: "FOH Service Readiness",
            department: "Service",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Brand standards and environmental comfort audits.",
            icon: "layout",
            tasks: [
                { id: "FOH-01", description: "Walk-through: Inspect all guest tables for wobble and cleanliness.", priority: "Medium", riskLevel: "Low", consequence: "Poor guest experience / negative reviews.", proof: "Walkthrough Log", trainerNotes: "Check under the table for gum or residue." },
                { id: "FOH-02", description: "Restroom Audit: 10-point check (Paper, Scent, Water, Lights).", priority: "High", riskLevel: "Medium", consequence: "Major driver of low NPS/Google scores.", proof: "Restroom Log", trainerNotes: "Mirror must be streak-free at head height." },
                { id: "FOH-03", description: "Verify current promotional menus and table-talkers are correct.", priority: "Medium", riskLevel: "Low", consequence: "Misleading pricing/expired offers.", proof: "Menu Audit", trainerNotes: "Remove any menu with visible stains or tears." },
                { id: "FOH-04", description: "Check FOH ambient lighting levels for the shift theme.", priority: "Medium", riskLevel: "Low", consequence: "Wrong ambiance.", proof: "Visual Check", trainerNotes: "Use dimmer presets 1-4." },
                { id: "FOH-05", description: "Verify playlist and volume levels are appropriate.", priority: "Low", riskLevel: "Low", consequence: "Atmosphere mismatch.", proof: "Audio Audit", trainerNotes: "Level 3 for lunch, 6 for dinner." },
                { id: "FOH-06", description: "Check host stand readiness (Menus, Tablets, Pens).", priority: "Medium", riskLevel: "Low", consequence: "Chaotic arrivals.", proof: "Visual Check", trainerNotes: "Wipe down leather covers." },
                { id: "FOH-07", description: "Brief servers on VIP reservations and guest preferences.", priority: "High", riskLevel: "Low", consequence: "Missed personalization.", proof: "Briefing Log", trainerNotes: "Mention birthdays and anniversaries." },
                { id: "FOH-08", description: "Inspect staff uniforms and grooming.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution.", proof: "Staff Log", trainerNotes: "Ironed shirts are mandatory." },
                { id: "FOH-09", description: "Verify AC/Heating set points.", priority: "High", riskLevel: "Low", consequence: "Guest discomfort.", proof: "BMS Reading", trainerNotes: "Target: 22°C." },
                { id: "FOH-10", description: "Check server station stock (Cutlery, Napkins).", priority: "Medium", riskLevel: "Low", consequence: "Server frustration/Service lag.", proof: "Visual Check", trainerNotes: "Napkins must be polished-flat." }
            ]
        },
        {
            title: "Environment, Health & Safety (EHS)",
            department: "Compliance",
            frequency: "Weekly",
            role: "General Manager",
            summary: "Mitigating life-safety and legal liability risks.",
            icon: "hard-hat",
            tasks: [
                { id: "EHS-01", description: "Inspect all fire exits for obstructions and functional panic bars.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment in fire emergency.", proof: "Exit Audit Sign-off", trainerNotes: "Ensure no boxes are stored in stairwells." },
                { id: "EHS-02", description: "Full audit of First Aid kits and AED battery status.", priority: "High", riskLevel: "High", consequence: "Inability to respond to guest cardiac event.", proof: "Medical Kit Log", trainerNotes: "Replace any expired dressings immediately." },
                { id: "EHS-03", description: "Check all electrical panels for loose wiring or burning smells.", priority: "High", riskLevel: "High", consequence: "Short circuit and structural fire.", proof: "Electrical Log", trainerNotes: "Use a thermal gun if available to check for hotspots." },
                { id: "EHS-04", description: "Verify floor slip-resistance and proper mat placement.", priority: "High", riskLevel: "Medium", consequence: "Slip and fall litigation.", proof: "Safety Walkthrough", trainerNotes: "Check transitions between kitchen and carpet." },
                { id: "EHS-05", description: "Test emergency lighting backup duration.", priority: "High", riskLevel: "High", consequence: "Blackout panic.", proof: "Test Log", trainerNotes: "Hold button for 10 seconds." },
                { id: "EHS-06", description: "Check fire extinguisher pressure and seal integrity.", priority: "High", riskLevel: "High", consequence: "Non-functional safety equipment.", proof: "Pressure Gauge Log", trainerNotes: "Must be in the green zone." },
                { id: "EHS-07", description: "Audit chemical storage for SDS availability.", priority: "Medium", riskLevel: "Medium", consequence: "Hazardous exposure liability.", proof: "Document Audit", trainerNotes: "Sheets must be in a yellow folder." },
                { id: "EHS-08", description: "Inspect structural boundaries for pest entry points.", priority: "High", riskLevel: "High", consequence: "Infestation closure.", proof: "Visual Audit", trainerNotes: "Check door sweeps and pipe gaps." },
                { id: "EHS-09", description: "Verify gas leak detection alarm status.", priority: "High", riskLevel: "High", consequence: "Explosion risk.", proof: "System Test", trainerNotes: "Test monthly using test gas." },
                { id: "EHS-10", description: "Review staff safety training completion rates.", priority: "High", riskLevel: "Medium", consequence: "Operational negligence.", proof: "Training Dashboard", trainerNotes: "Target: 100% completion." }
            ]
        },
        {
            title: "Delivery & Takeaway Operations",
            department: "Logistics",
            frequency: "Daily",
            role: "Dispatch Coordinator",
            summary: "Managing off-site brand and safety standards.",
            icon: "truck",
            tasks: [
                { id: "DEL-01", description: "Check all delivery thermal bags for hygiene and odors.", priority: "High", riskLevel: "Medium", consequence: "Poor food quality/complaints.", proof: "Visual Audit", trainerNotes: "Wipe inside with alcohol every morning." },
                { id: "DEL-02", description: "Verify tamper-evident seal stock levels.", priority: "High", riskLevel: "High", consequence: "Food tampering risks.", proof: "Stock Sheet", trainerNotes: "Minimum 500 seals on hand." },
                { id: "DEL-03", description: "Audit delivery driver grooming and vehicle cleanliness.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution.", proof: "Driver Log", trainerNotes: "Helmets must be clean." },
                { id: "DEL-04", description: "Verify correct order handoff procedure (Receipt Check).", priority: "High", riskLevel: "Medium", consequence: "Wrong orders/Financial loss.", proof: "Order Log", trainerNotes: "Match order ID 3 times." },
                { id: "DEL-05", description: "Check takeaway packaging for heat retention integrity.", priority: "Medium", riskLevel: "Low", consequence: "Cold food delivery.", proof: "Visual Check", trainerNotes: "Ensure lids are tightly fitted." }
            ]
        },
        {
            title: "Kitchen Closing & Safety",
            department: "Kitchen",
            frequency: "Daily",
            role: "Night Chef",
            summary: "Life-safety and facility protection shutdown.",
            icon: "moon",
            tasks: [
                { id: "KC-01", description: "Main Gas Valve shutdown and visual verification.", priority: "High", riskLevel: "High", consequence: "Overnight gas leak/Explosion risk.", proof: "Valve Photo/Mgr Witness", trainerNotes: "Physical handle must be 90-degrees to pipe." },
                { id: "KC-02", description: "All pilot lights checked and burners off.", priority: "High", riskLevel: "High", consequence: "Fire hazard and energy waste.", proof: "Chef Sign-off", trainerNotes: "Run a hand over burners to check for radiant heat." },
                { id: "KC-03", description: "Deep floor scrub and drain sanitation.", priority: "Medium", riskLevel: "Medium", consequence: "Pest attraction and organic buildup.", proof: "Cleaning Log", trainerNotes: "Use enzyme cleaner in all floor drains." },
                { id: "KC-04", description: "Check all refrigerator doors are tightly closed.", priority: "High", riskLevel: "High", consequence: "Overnight stock loss.", proof: "Visual Check", trainerNotes: "Check seals for gaps." },
                { id: "KC-05", description: "Clean and empty grease traps.", priority: "Medium", riskLevel: "Medium", consequence: "Blockages and odors.", proof: "Maintenance Log", trainerNotes: "Use hot water flush after cleaning." }
            ]
        },
        {
            title: "Bar Closing & Security",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Head",
            summary: "Revenue protection and night-lock protocols.",
            icon: "lock",
            tasks: [
                { id: "BC-01", description: "Secure all premium spirits in the locked cage/vault.", priority: "High", riskLevel: "Medium", consequence: "Overnight internal or external theft.", proof: "Safe Lock Log", trainerNotes: "Count bottles of $100+ value during handover." },
                { id: "BC-02", description: "Coffee machine: Backflush and group head clean.", priority: "Medium", riskLevel: "Low", consequence: "Scale buildup and poor morning coffee quality.", proof: "Cleaning Log", trainerNotes: "Use exactly one scoop of cleaning powder." },
                { id: "BC-03", description: "Clean bar mats and glass-wash area.", priority: "Low", riskLevel: "Low", consequence: "Sour odors.", proof: "Visual Check", trainerNotes: "Hang mats to dry." },
                { id: "BC-04", description: "Dispose of all fruit garnishes.", priority: "Medium", riskLevel: "Medium", consequence: "Fermentation/Health risk.", proof: "Visual Check", trainerNotes: "Never reuse garnish from previous day." },
                { id: "BC-05", description: "Final till reconciliation and cash drop.", priority: "High", riskLevel: "High", consequence: "Theft.", proof: "Cash Drop Slip", trainerNotes: "Manager witness required." }
            ]
        },
        {
            title: "Statutory & Strategic Governance",
            department: "Executive",
            frequency: "Monthly",
            role: "Owner/COO",
            summary: "Deep-layer risk mitigation and statutory review.",
            icon: "landmark",
            tasks: [
                { id: "MSTRAT-01", description: "Review and file statutory licenses (FSSAI, Fire, Health).", priority: "High", riskLevel: "High", consequence: "Legal closure and heavy penalties.", proof: "License Repository Audit", trainerNotes: "Renewals must start 60 days before expiry." },
                { id: "MSTRAT-02", description: "Deep sweep pest control and boundary sealing audit.", priority: "High", riskLevel: "High", consequence: "Structural infestation and reputation loss.", proof: "Vendor Certificate", trainerNotes: "Audit the vendor's bait station placement map." },
                { id: "MSTRAT-03", description: "Oven and Cold-Chain mechanical calibration audit.", priority: "High", riskLevel: "Medium", consequence: "Energy waste and inconsistent product quality.", proof: "Calibration Certificate", trainerNotes: "Use external 3rd party calibrated thermometers." },
                { id: "MSTRAT-04", description: "Full financial P&L review against targets.", priority: "High", riskLevel: "Low", consequence: "Margin erosion.", proof: "P&L Analysis", trainerNotes: "Focus on COGS leakage." },
                { id: "MSTRAT-05", description: "Audit staff payroll and PF compliance.", priority: "High", riskLevel: "High", consequence: "Labour law litigation.", proof: "Payroll Audit", trainerNotes: "Verify bank transfer records." }
            ]
        },
        {
            title: "Valet Parking Safety",
            department: "Valet",
            frequency: "Daily",
            role: "Security Supervisor",
            summary: "Managing high-liability guest asset handling.",
            icon: "car",
            tasks: [
                { id: "VAL-01", description: "Check valet key safe for organization and locks.", priority: "High", riskLevel: "High", consequence: "Theft of guest vehicle.", proof: "Visual Check", trainerNotes: "Keys must never be left on the counter." },
                { id: "VAL-02", description: "Verify drivers have valid licenses.", priority: "High", riskLevel: "High", consequence: "Legal/Insurance failure.", proof: "License Log", trainerNotes: "Monthly license sweep." },
                { id: "VAL-03", description: "Inspect valet signage and visibility lighting.", priority: "Medium", riskLevel: "Low", consequence: "Poor guest arrival experience.", proof: "Visual Check", trainerNotes: "Clean the 'Valet Here' sign." }
            ]
        },
        {
            title: "Garden & Outdoor Maintenance",
            department: "Facilities",
            frequency: "Daily",
            role: "Groundskeeper",
            summary: "Aesthetic and safety audits for outdoor areas.",
            icon: "sprout",
            tasks: [
                { id: "GAR-01", description: "Check outdoor furniture for stability and safety.", priority: "Medium", riskLevel: "Medium", consequence: "Guest injury.", proof: "Visual Check", trainerNotes: "Tighten bolts every Monday." },
                { id: "GAR-02", description: "Inspect perimeter for stagnant water (Mosquito breeding).", priority: "High", riskLevel: "High", consequence: "Health risk/Dengue.", proof: "Visual Audit", trainerNotes: "Check flower pots and drains." },
                { id: "GAR-03", description: "Verify outdoor lighting functionality.", priority: "Medium", riskLevel: "Low", consequence: "Trip hazards/Security risk.", proof: "Visual Check", trainerNotes: "Clean covers for maximum brightness." }
            ]
        },
        {
            title: "Staff Quarters Hygiene",
            department: "HR/Admin",
            frequency: "Daily",
            role: "HR Executive",
            summary: "Managing staff welfare and hygiene standards.",
            icon: "home",
            tasks: [
                { id: "STAFF-01", description: "Inspect staff locker rooms for order and cleaning.", priority: "Medium", riskLevel: "Medium", consequence: "Poor staff morale/Infestation.", proof: "Cleaning Log", trainerNotes: "No food allowed in lockers." },
                { id: "STAFF-02", description: "Audit staff restroom sanitation.", priority: "High", riskLevel: "High", consequence: "Spread of disease among team.", proof: "Cleaning Log", trainerNotes: "Same standard as guest restrooms." },
                { id: "STAFF-03", description: "Check staff pantry for expired personal items.", priority: "Low", riskLevel: "Low", consequence: "Odors and hygiene lapse.", proof: "Visual Check", trainerNotes: "Clear fridge every Friday night." }
            ]
        }
    ]
};
