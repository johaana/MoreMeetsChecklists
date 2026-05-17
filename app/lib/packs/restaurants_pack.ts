
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations System",
    category: "Hospitality",
    description: "The professional standard for multi-unit food and beverage groups. Standardizing 140+ technical control points across 12 distinct floor roles.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "Stop operational drift before it reaches the guest experience.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 3499,
    priceUSD: 49,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "STABLE v4.4",
    badgeVariant: "accent",
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>Owner/COO Command</strong>: High-level visibility into group compliance and profit protection.", icon: "crown" },
        { text: "<strong>Kitchen Opening (HACCP)</strong>: Zero-fail protocols for temperature, hygiene, and allergen separation.", icon: "sunrise" },
        { text: "<strong>Service & Ambiance Logic</strong>: Hourly audits for music, lighting, and hygiene to protect guest scores.", icon: "armchair" },
        { text: "<strong>EHS & Fire Safety</strong>: Mandatory closing protocols for gas and electrical banks.", icon: "flame" }
    ],
    checklists: [
        {
            title: "Executive & Management Command",
            department: "Executive",
            frequency: "Daily",
            role: "General Manager",
            summary: "High-level oversight of branch health and legal standing.",
            icon: "crown",
            tasks: [
                { id: "RES-EXE-01", description: "Review daily task completion logs for all stations.", priority: "High", riskLevel: "Low", consequence: "Loss of control over daily standards.", proof: "Digital Ledger" },
                { id: "RES-EXE-02", description: "Verify previous day's revenue against bank deposit slips.", priority: "High", riskLevel: "High", consequence: "Theft and revenue loss.", proof: "Bank Slip Match" },
                { id: "RES-EXE-03", description: "Check status of unresolved alerts in the incident log.", priority: "High", riskLevel: "High", consequence: "Legal liability and safety risks.", proof: "Log Audit" },
                { id: "RES-EXE-04", description: "Hold morning team huddle to align on today's specials and targets.", priority: "Medium", riskLevel: "Low", consequence: "Poor service and missed sales.", proof: "Briefing Sheet" },
                { id: "RES-EXE-05", description: "Confirm FSSAI and Trade licenses are displayed and valid.", priority: "High", riskLevel: "High", consequence: "Government shutdown of premises.", proof: "Photo Audit" },
                { id: "RES-EXE-06", description: "Audit previous day's voided bills for manager authorization.", priority: "High", riskLevel: "High", consequence: "Cashier-level theft.", proof: "POS Audit" },
                { id: "RES-EXE-07", description: "Check staff grooming and uniform compliance.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional brand image.", proof: "Briefing Log" },
                { id: "RES-EXE-08", description: "Review guest feedback from Google and social media.", priority: "Medium", riskLevel: "Low", consequence: "Damage to online reputation.", proof: "Review Dashboard" },
                { id: "RES-EXE-09", description: "Verify nightly deposit was dropped in the vault.", priority: "High", riskLevel: "High", consequence: "Direct financial loss.", proof: "Vault Log" },
                { id: "RES-EXE-10", description: "Log manager-on-duty handover notes for the evening shift.", priority: "Medium", riskLevel: "Low", consequence: "Loss of communication between teams.", proof: "Handover Log" },
                { id: "RES-EXE-11", description: "Verify pet-friendly seating area (if applicable) is sanitized.", priority: "Low", riskLevel: "Low", consequence: "Hygiene complaints.", proof: "Visual Check" },
                { id: "RES-EXE-12", description: "Audit utility meter readings to detect energy wastage.", priority: "Low", riskLevel: "Low", consequence: "Inflated overhead costs.", proof: "Meter Log" },
                { id: "RES-EXE-13", description: "Check status of ongoing repair maintenance requests.", priority: "Medium", riskLevel: "Low", consequence: "Asset decay.", proof: "Wrench Log" },
                { id: "RES-EXE-14", description: "Verify first-aid kit is fully stocked and unexpired.", priority: "High", riskLevel: "Medium", consequence: "Inability to treat staff injuries.", proof: "Stock Check" },
                { id: "RES-EXE-15", description: "Execute daily operational closure sign-off.", priority: "High", riskLevel: "Low", consequence: "Systemic breakdown of discipline.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Kitchen Readiness (HACCP)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Kitchen Lead",
            summary: "Zero-fail protocols for food safety and prep quality.",
            icon: "sunrise",
            tasks: [
                { id: "RES-KIT-01", description: "Log temperatures of all refrigerators (1°C to 4°C).", priority: "High", riskLevel: "High", consequence: "Food spoilage and pathogen growth.", proof: "Temp Log" },
                { id: "RES-KIT-02", description: "Sanitize all surfaces and verify ppm with test strips.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination risk.", proof: "Test Strip" },
                { id: "RES-KIT-03", description: "Verify all prepped items have expiry labels.", priority: "High", riskLevel: "High", consequence: "Serving expired ingredients.", proof: "Visual Audit" },
                { id: "RES-KIT-04", description: "Check bait stations for signs of pest activity.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Pest Register" },
                { id: "RES-KIT-05", description: "Inspect knives for sharpness and handle integrity.", priority: "Medium", riskLevel: "Medium", consequence: "Staff injury liability.", proof: "Safety Log" },
                { id: "RES-KIT-06", description: "Verify handwashing sink is stocked with soap and tissue.", priority: "High", riskLevel: "High", consequence: "Staff hygiene failure.", proof: "Visual Check" },
                { id: "RES-KIT-07", description: "Confirm hairnets and aprons are worn by all prep staff.", priority: "High", riskLevel: "Medium", consequence: "Physical contamination of food.", proof: "Daily Audit" },
                { id: "RES-KIT-08", description: "Verify segregation of raw and cooked items in cold storage.", priority: "High", riskLevel: "High", consequence: "Salmonella/Listeria risk.", proof: "Storage Walkthrough" },
                { id: "RES-KIT-09", description: "Calibrate food probes using ice-point method.", priority: "Medium", riskLevel: "Medium", consequence: "False temperature readings.", proof: "Calibration Log" },
                { id: "RES-KIT-10", description: "Check dishwashing machine final rinse temperature (82°C).", priority: "High", riskLevel: "High", consequence: "Bacteria survival on plates.", proof: "Temp Reading" },
                { id: "RES-KIT-11", description: "Discard any food containers with chips or cracks.", priority: "Medium", riskLevel: "Low", consequence: "Physical injury to guests.", proof: "Visual Audit" },
                { id: "RES-KIT-12", description: "Verify grease trap was cleaned according to schedule.", priority: "High", riskLevel: "High", consequence: "Drainage blockage and odors.", proof: "Wrench Log" },
                { id: "RES-KIT-13", description: "Audit thawing logs: no items left in room temp.", priority: "High", riskLevel: "High", consequence: "Rapid bacterial growth.", proof: "Log Audit" },
                { id: "RES-KIT-14", description: "Check that chemical storage is away from food prep.", priority: "High", riskLevel: "High", consequence: "Toxic contamination.", proof: "Visual Check" },
                { id: "RES-KIT-15", description: "Verify dishwasher soap and rinse-aid par levels.", priority: "Low", riskLevel: "Low", consequence: "Poor cleaning quality.", proof: "Stock Check" },
                { id: "RES-KIT-16", description: "Inspect floor drains for debris and clear them.", priority: "Low", riskLevel: "Low", consequence: "Clogging and odors.", proof: "Visual Check" },
                { id: "RES-KIT-17", description: "Verify exhaust hood filters were cleaned.", priority: "High", riskLevel: "High", consequence: "Fire hazard.", proof: "Cleaning Note" },
                { id: "RES-KIT-18", description: "Log today's receiving temps for high-risk proteins.", priority: "High", riskLevel: "High", consequence: "Food poisoning risk.", proof: "Receiving Log" },
                { id: "RES-KIT-19", description: "Check for any exposed wires on kitchen equipment.", priority: "High", riskLevel: "High", consequence: "Shock and fire hazard.", proof: "Safety Walkthrough" },
                { id: "RES-KIT-20", description: "Witness witnessed seal of all gas valves at EOD.", priority: "High", riskLevel: "High", consequence: "Fire or explosion risk.", proof: "Signed Log" }
            ]
        },
        {
            title: "Service Ambiance & Hygiene",
            department: "Service",
            frequency: "Daily",
            role: "Shift Manager",
            summary: "Protects the guest experience standard.",
            icon: "hand-platter",
            tasks: [
                { id: "RES-SRV-01", description: "Audit restroom hygiene logs: verify 60-min frequency.", priority: "High", riskLevel: "Low", consequence: "Negative reviews and rating drop.", proof: "Hourly Sheet" },
                { id: "RES-SRV-02", description: "Verify symmetry of table settings and condiments.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional visual standard.", proof: "Visual Check" },
                { id: "RES-SRV-03", description: "Ensure Scent, Music, and Lighting match brand standard.", priority: "Medium", riskLevel: "Low", consequence: "Lower guest dwell time.", proof: "Daily Log" },
                { id: "RES-SRV-04", description: "Test printer connectivity on all billing terminals.", priority: "Medium", riskLevel: "Low", consequence: "Service friction during rush.", proof: "Print Test" },
                { id: "RES-SRV-05", description: "Monitor host stand for 10-foot/10-second greeting rule.", priority: "Medium", riskLevel: "Low", consequence: "Guest feels ignored on arrival.", proof: "Observation Log" },
                { id: "RES-SRV-06", description: "Check for fingerprints or smudges on entrance glass.", priority: "Low", riskLevel: "Low", consequence: "Poor first impression.", proof: "Cleaning Log" },
                { id: "RES-SRV-07", description: "Verify wet-floor signs are used during all mopping.", priority: "High", riskLevel: "High", consequence: "Slip and fall lawsuits.", proof: "Visual Check" },
                { id: "RES-SRV-08", description: "Audit staff phone usage policy compliance on the floor.", priority: "Medium", riskLevel: "Low", consequence: "Unassisted guests.", proof: "Walkthrough" },
                { id: "RES-SRV-09", description: "Verify salt/pepper shakers are wiped and topped up.", priority: "Low", riskLevel: "Low", consequence: "Dirty touchpoints.", proof: "Visual Audit" },
                { id: "RES-SRV-10", description: "Ensure menu cards are clean and free of food stains.", priority: "Medium", riskLevel: "Low", consequence: "Unprofessional hygiene perception.", proof: "Visual Check" },
                { id: "RES-SRV-11", description: "Check air conditioning temp in dining zone (Target 23°C).", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort.", proof: "Temp Reading" },
                { id: "RES-SRV-12", description: "Confirm POS backup bill rolls are at each station.", priority: "Low", riskLevel: "Low", consequence: "Billing delay during peaks.", proof: "Stock Check" },
                { id: "RES-SRV-13", description: "Monitor table-turnaround time (TAT) during peak shift.", priority: "Medium", riskLevel: "Low", consequence: "Lost revenue / long queues.", proof: "TAT Log" },
                { id: "RES-SRV-14", description: "Verify high-chairs are sanitized after every use.", priority: "High", riskLevel: "Medium", consequence: "Hygiene risk for families.", proof: "Cleaning Log" },
                { id: "RES-SRV-15", description: "Wipe and sanitize handheld billing tablets.", priority: "Low", riskLevel: "Low", consequence: "Grisly touchpoints.", proof: "Visual Audit" },
                { id: "RES-SRV-16", description: "Verify all server name-tags are visible.", priority: "Low", riskLevel: "Low", consequence: "Lack of personalization.", proof: "Briefing Log" },
                { id: "RES-SRV-17", description: "Check for burnt-out bulbs in the dining area.", priority: "Low", riskLevel: "Low", consequence: "Poor ambiance.", proof: "Visual Check" },
                { id: "RES-SRV-18", description: "Confirm 100% of staff attended pre-shift briefing.", priority: "Medium", riskLevel: "Low", consequence: "Uninformed service.", proof: "Attendance Log" },
                { id: "RES-SRV-19", description: "Clear all used napkins and debris from floor.", priority: "Medium", riskLevel: "Low", consequence: "Untidy environment.", proof: "Walkthrough" },
                { id: "RES-SRV-20", description: "Final restroom inspection before shift close.", priority: "High", riskLevel: "Low", consequence: "Grimy start for next shift.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Bar & High-Margin Assets",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Lead",
            summary: "Profit protection for alcohol and high-value spirits.",
            icon: "glass-water",
            tasks: [
                { id: "RES-BAR-01", description: "Reconcile high-value bottles against previous shift sales.", priority: "High", riskLevel: "High", consequence: "Internal theft and margin loss.", proof: "Count Sheet" },
                { id: "RES-BAR-02", description: "Discard wilted garnishes and verify prep-date labels.", priority: "Medium", riskLevel: "Low", consequence: "Sub-par drink quality.", proof: "Visual Audit" },
                { id: "RES-BAR-03", description: "Deep clean shakers and strainers in hot water (82°C).", priority: "Medium", riskLevel: "Medium", consequence: "Bacterial cross-infection.", proof: "Cleaning Note" },
                { id: "RES-BAR-04", description: "Verify bar license and age-check signage is visible.", priority: "High", riskLevel: "High", consequence: "License suspension and heavy fines.", proof: "Compliance Note" },
                { id: "RES-BAR-05", description: "Wipe and sanitize the beer tap and drip tray.", priority: "Medium", riskLevel: "Low", consequence: "Fly attraction and hygiene risk.", proof: "Visual Check" },
                { id: "RES-BAR-06", description: "Check fridge temp for kegs and bottled beers.", priority: "Medium", riskLevel: "Low", consequence: "Warm beer and guest complaints.", proof: "Temp Log" },
                { id: "RES-BAR-07", description: "Verify stock of coasters and straws.", priority: "Low", riskLevel: "Low", consequence: "Service friction.", proof: "Stock Check" },
                { id: "RES-BAR-08", description: "Wash and polish glassware: check for spots or chips.", priority: "Medium", riskLevel: "Low", consequence: "Poor luxury perception.", proof: "Sample Audit" },
                { id: "RES-BAR-09", description: "Secure the wine and liquor locker at shift close.", priority: "High", riskLevel: "High", consequence: "Stock misappropriation.", proof: "Vault Log" },
                { id: "RES-BAR-10", description: "Log any bottle breakages or spillages accurately.", priority: "Medium", riskLevel: "High", consequence: "Inaccurate margin reports.", proof: "Waste Sheet" }
            ]
        },
        {
            title: "EHS & Nightly Closure",
            department: "Safety",
            frequency: "Daily",
            role: "Security",
            summary: "Prevents overnight facility disasters.",
            icon: "shield-alert",
            tasks: [
                { id: "RES-SAF-01", description: "Physically verify all main gas valves are shut.", priority: "High", riskLevel: "High", consequence: "Overnight fire or explosion.", proof: "Physical Check" },
                { id: "RES-SAF-02", description: "Turn off all non-essential ACs and lighting panels.", priority: "High", riskLevel: "High", consequence: "Energy waste and fire risk.", proof: "Switch Log" },
                { id: "RES-SAF-03", description: "Confirm all shutters and alley doors are double-locked.", priority: "High", riskLevel: "High", consequence: "Burglary or unauthorized entry.", proof: "Walkthrough Note" },
                { id: "RES-SAF-04", description: "Verify all fire-exit paths are 100% clear of debris.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment risk.", proof: "Patrol Log" },
                { id: "RES-SAF-05", description: "Confirm all wet-waste bags removed from premises.", priority: "Medium", riskLevel: "Medium", consequence: "Pest attraction and odors.", proof: "Visual Audit" },
                { id: "RES-SAF-06", description: "Verify CCTV system is recording across all 8+ nodes.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for insurance.", proof: "System Screen" },
                { id: "RES-SAF-07", description: "Inspect exterior for any loitering or security threats.", priority: "Medium", riskLevel: "High", consequence: "Property vandalism.", proof: "Patrol Log" },
                { id: "RES-SAF-08", description: "Check fire extinguisher pressure gauges.", priority: "High", riskLevel: "High", consequence: "Rescue failure during fire.", proof: "Gauge Log" },
                { id: "RES-SAF-09", description: "Test panic button to local police/security station.", priority: "High", riskLevel: "High", consequence: "No response during crisis.", proof: "Test Log" },
                { id: "RES-SAF-10", description: "Execute final nightly safety seal initials.", priority: "High", riskLevel: "Low", consequence: "Systemic risk gap.", proof: "Signed Summary" }
            ]
        }
    ]
};
