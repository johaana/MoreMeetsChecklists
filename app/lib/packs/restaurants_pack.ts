import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations System",
    category: "Hospitality",
    description: "The definitive Sovereign v16.0 engine for multi-unit food groups. Standardizing 142 technical control points from Owner vision to kitchen hygiene.",
    heroHeadline: "Standardize Your Kitchen. Protect Your Margins.",
    heroSubheadline: "The professional plug for revenue leakage and food safety risks—across every branch in your group.",
    pricingUrgency: "Preventing a single foodborne illness lawsuit or one major theft saves 100x the cost of this system.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V16.0 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Restaurant Group Owners", "COOs", "General Managers", "Kitchen Directors", "Heads of Quality"],
    sampleItems: [
        { text: "<strong>HACCP Control</strong>: Zero-fail protocols for thawing logs, oil quality, and allergen segregation.", icon: "shield-check" },
        { text: "<strong>Revenue Shield</strong>: Void-bill audits, takeaway seals, and yield variance monitoring.", icon: "banknote" },
        { text: "<strong>Facility Safety</strong>: Mandatory gas leak sniffer tests and suppression system pin checks.", icon: "flame" }
    ],
    checklists: [
        {
            title: "Owner & CEO Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "General Manager",
            summary: "High-level strategic oversight of group performance and risk.",
            icon: "crown",
            tasks: [
                { id: "RES-EXE-01", description: "Revenue & Cash Reconcile: Match physical cash drop to POS X-Reading; witness bag seal number in ledger.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue theft.", proof: "Settlement Log" },
                { id: "RES-EXE-02", description: "Void Bill Authorization: Verify 100% of deletions; match kitchen KOT cancel signature to POS timestamp.", priority: "High", riskLevel: "Medium", consequence: "Theft masked as cashier errors.", proof: "Audit Sheet" },
                { id: "RES-EXE-03", description: "Inventory Shrinkage Audit: Perform blind count of Alcohol/Meat stock; match physical pieces vs system par.", priority: "High", riskLevel: "High", consequence: "Significant silent margin erosion.", proof: "Count Sheet" },
                { id: "RES-EXE-04", description: "Statutory License Matrix: Check validity of FSSAI, Fire NOC, and Health licenses for 100% of units.", priority: "High", riskLevel: "High", consequence: "Government shutdown of premises.", proof: "Certificate File" },
                { id: "RES-EXE-05", description: "Aggregator Payout Match: Verify weekly bank settlement matches POS delivery totals within 1% variance.", priority: "Medium", riskLevel: "Medium", consequence: "Hidden financial leakage in delivery platforms.", proof: "Payout Report" },
                { id: "RES-EXE-06", description: "Petty Cash Spot-Audit: Reconcile cash-on-hand against daily vouchers and float baseline.", priority: "Medium", riskLevel: "Medium", consequence: "Cash mismanagement and small-ticket fraud.", proof: "Cash Log" },
                { id: "RES-EXE-07", description: "Utility Intensity Pulse: Review daily KWH usage vs sales footfall for infrastructure efficiency.", priority: "Low", riskLevel: "Low", consequence: "Unmonitored overhead inflation.", proof: "Meter Match" },
                { id: "RES-EXE-08", description: "Mystery Shopper Triage: Review audit reports and assign corrective actions for any score below 85%.", priority: "Medium", riskLevel: "Low", consequence: "Brand standard erosion.", proof: "Action Plan" },
                { id: "RES-EXE-09", description: "Vendor Payment Pipeline: Review aging report for high-priority fresh-protein suppliers.", priority: "Low", riskLevel: "Medium", consequence: "Supply chain halt.", proof: "Aging Report" },
                { id: "RES-EXE-10", description: "Food Cost Variance Audit: Compare theoretical vs actual usage for top 10 signature ingredients.", priority: "High", riskLevel: "High", consequence: "Undetected waste and margin collapse.", proof: "Variance Sheet" },
                { id: "RES-EXE-11", description: "Staff Grievance Pulse: Conduct 5-minute feedback loop with support teams during shift transition.", priority: "Low", riskLevel: "Low", consequence: "High churn and service disruption.", proof: "Diary Note" },
                { id: "RES-EXE-12", description: "CCTV Focal Point Audit: Verify high-res coverage of Cashier and Alcohol storage zones.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for internal theft.", proof: "System Check" },
                { id: "RES-EXE-13", description: "POS User Access Audit: Verify zero unauthorized logins have administrative billing or delete rights.", priority: "High", riskLevel: "High", consequence: "Systemic billing fraud.", proof: "User Matrix" },
                { id: "RES-EXE-14", description: "FSSAI Display Compliance: Confirm 100% visibility of active license and health rating in lobby.", priority: "High", riskLevel: "High", consequence: "Regulatory fines.", proof: "Visual Check" },
                { id: "RES-EXE-15", description: "Final Management Sign-off: Execute daily management summary initials and witness final vault closure.", priority: "High", riskLevel: "Low", consequence: "Loss of institutional oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Kitchen Command (HACCP)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Kitchen Lead",
            summary: "Critical food safety and readiness protocols.",
            icon: "utensils",
            tasks: [
                { id: "RES-KIT-01", description: "Log walk-in chiller temp; physically verify digital thermometer matches internal spirit-bulb sensor.", priority: "High", riskLevel: "High", consequence: "Bacterial growth and food poisoning outbreak.", proof: "Temp Log" },
                { id: "RES-KIT-10", description: "Measure fryer oil TPM using digital meter; discard if reading exceeds 25% threshold.", priority: "High", riskLevel: "Medium", consequence: "Toxin buildup and poor product taste.", proof: "TPM Reading" },
                { id: "RES-KIT-02", description: "Allergen Station Verify: Inspect 100% isolation of nut-free and GF prep boards pre-prep.", priority: "High", riskLevel: "High", consequence: "Fatal anaphylactic shock and lawsuit.", proof: "Visual Audit" },
                { id: "RES-KIT-04", description: "Pest Evidence Sweep: Inspect compressor backs and dry-store corners for droppings or nests.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Search Note" },
                { id: "RES-KIT-06", description: "Hood Filter Grease Load: Slide out filters; verify zero grease accumulation on secondary mesh.", priority: "High", riskLevel: "High", consequence: "Massive grease fire risk.", proof: "Cleaning Card" },
                { id: "RES-KIT-07", description: "Drain Trap Inspection: Check traps for grease blockage and foul bacterial odors.", priority: "Medium", riskLevel: "Medium", consequence: "Kitchen flooding and pest attraction.", proof: "Visual Check" },
                { id: "RES-KIT-08", description: "ATP Handwash Check: Conduct random swab test of 3 prep-staff; verify RLU count below baseline.", priority: "High", riskLevel: "High", consequence: "Cross-contamination of ready-to-eat food.", proof: "Test Result" },
                { id: "RES-KIT-09", description: "Scale Calibration Audit: Test all prep scales with 1kg standard weight for yield accuracy.", priority: "High", riskLevel: "Medium", consequence: "Yield errors and inconsistent recipes.", proof: "Calibration Log" },
                { id: "RES-KIT-11", description: "Cooking Probe Calibration: Conduct ice-point check; digital readout must be 0°C +/- 0.5°C.", priority: "Medium", riskLevel: "High", consequence: "Incorrect internal cook temps.", proof: "Calib Sheet" },
                { id: "RES-KIT-12", description: "Vegetable Sanitization: Verify 50ppm chlorine soak time for all raw produce using test strips.", priority: "High", riskLevel: "High", consequence: "Parasitic transmission to guests.", proof: "Titration Log" },
                { id: "RES-KIT-13", description: "Mise-en-place Parity: Match prep levels to today's forecasted bookings to prevent stock-outs.", priority: "Medium", riskLevel: "Low", consequence: "Service delay / stock wastage.", proof: "Prep Sheet" },
                { id: "RES-KIT-15", description: "Chemical Storage Seal: Verify R1-R6 concentrates are locked in secondary containment away from food.", priority: "High", riskLevel: "High", consequence: "Toxic contamination of food.", proof: "Visual Check" },
                { id: "RES-KIT-17", description: "Dishwasher Rinse Temp: Verify final rinse reaches 82°C for 100% sterilization.", priority: "High", riskLevel: "High", consequence: "Unsanitized utensils reaching guests.", proof: "Temp Reading" },
                { id: "RES-KIT-18", description: "Prep Board Cross-Audit: Reject any board with deep score-lines or surface discoloration.", priority: "Medium", riskLevel: "Medium", consequence: "Bacterial harborage.", proof: "Visual Check" },
                { id: "RES-KIT-19", description: "Ice Machine Sanitation: Empty and scrub bin; check evaporator fins for mold or scale buildup.", priority: "High", riskLevel: "High", consequence: "Viral transmission (Norovirus).", proof: "Cleaning Log" },
                { id: "RES-KIT-21", description: "Refuse Bay Lockdown: Confirm all external waste bins are covered and perimeter mesh is sealed.", priority: "Medium", riskLevel: "Low", consequence: "Rodent attraction.", proof: "Visual Check" },
                { id: "RES-KIT-22", description: "Expiring Batch Takedown: Audit date-labels for items expiring in < 12 hours.", priority: "High", riskLevel: "High", consequence: "Serving expired food.", proof: "Takedown Log" },
                { id: "RES-KIT-25", description: "Final Gas Shutdown: Physically verify all burner valves are off and main manifold is locked.", priority: "High", riskLevel: "High", consequence: "Overnight explosion hazard.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Service & Ambiance Logic",
            department: "Service",
            frequency: "Daily",
            role: "Shift Manager",
            summary: "Protects the guest experience standard and floor hygiene.",
            icon: "armchair",
            tasks: [
                { id: "RES-SRV-01", description: "Restroom Hygiene Pulse: Audit 30-min cleaning frequency; physically verify soap and tissue stock levels.", priority: "High", riskLevel: "Low", consequence: "Primary driver of negative reviews.", proof: "Hourly Sheet" },
                { id: "RES-SRV-02", description: "Takeaway Seal Verify: Physically inspect dispatch bench; verify 100% of bags have double-stapled seals.", priority: "Medium", riskLevel: "Low", consequence: "Tampering risk and complaints.", proof: "Visual Check" },
                { id: "RES-DIN-05", description: "Lobby Ambiance Sync: Confirm lobby scent, music volume, and temp; target thermostat exactly 23°C.", priority: "Medium", riskLevel: "Low", consequence: "Poor first-touch guest experience.", proof: "Daily Log" },
                { id: "RES-SRV-06", description: "Floor Spill Response: Verify 'Wet Floor' signs are deployed at every active service station.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Visual Check" },
                { id: "RES-SRV-08", description: "Water Purity Pulse: Log TDS from guest drinking points; target reading < 150 ppm.", priority: "High", riskLevel: "Medium", consequence: "Health risk and guest complaints.", proof: "TDS Reading" },
                { id: "RES-SRV-12", description: "Guest Escalation Log: Triage all unresolved table disputes from previous shift in the incident registry.", priority: "High", riskLevel: "High", consequence: "Viral reputation damage.", proof: "Incident Log" },
                { id: "RES-SRV-13", description: "Menu Allergen Display: Confirm high-visibility signage for 100% of today's specials.", priority: "High", riskLevel: "High", consequence: "Legal liability and life risk.", proof: "Photo" },
                { id: "RES-SRV-23", description: "Digital Feedback Loop: Verify 100% table QR codes for feedback are active and reachable.", priority: "Medium", riskLevel: "Low", consequence: "Loss of customer data.", proof: "Phone Test" },
                { id: "RES-SRV-35", description: "Final Nightly Floor-Seal: Physically walk perimeter to verify 100% closure of secondary egress points.", priority: "High", riskLevel: "Low", consequence: "Loss of custodial duty.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Bar & Happy Hour Control",
            department: "Bar",
            frequency: "Daily",
            role: "Bar Lead",
            summary: "Governance for high-margin alcohol inventory.",
            icon: "glass-water",
            tasks: [
                { id: "RES-BAR-01", description: "Bottle Variance Count: Measure 5 random high-value spirits by weight; match vs POS consumption.", priority: "High", riskLevel: "High", consequence: "Internal theft and high-value leakage.", proof: "Inventory Sheet" },
                { id: "RES-BAR-02", description: "Garnish Freshness Labels: Verify date-stamping on all sliced citrus and herbs in the prep wells.", priority: "Medium", riskLevel: "Low", consequence: "Sub-par drink quality and spoilage.", proof: "Visual Check" },
                { id: "RES-BAR-03", description: "Glassware Chip Audit: Physically reject and discard any glass with rim-cracks or water-spots.", priority: "High", riskLevel: "High", consequence: "Guest lip injuries and liability.", proof: "Visual Audit" },
                { id: "RES-BAR-07", description: "Age-Check Compliance: Audit gate log; confirm 100% verification for guests appearing under 25.", priority: "High", riskLevel: "High", consequence: "License suspension and police case.", proof: "ID Log" },
                { id: "RES-BAR-11", description: "Cocktail Yield Reconcile: Measure jigger usage vs volume dispensed for 3 signature drinks.", priority: "High", riskLevel: "Medium", consequence: "Over-pouring and margin loss.", proof: "Yield Match" }
            ]
        },
        {
            title: "Facility & Nightly Seal",
            department: "Safety",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the property infrastructure against overnight disasters.",
            icon: "shield-alert",
            tasks: [
                { id: "RES-SAF-01", description: "Gas Sniffer Calibration: Pulse-test sensors near main valves; soap-test joints for active leaks.", priority: "High", riskLevel: "High", consequence: "Catastrophic fire or explosion.", proof: "Visual Check" },
                { id: "RES-SAF-02", description: "Suppression Pin Verify: Physically check safety pins are intact on the main kitchen Ansul system.", priority: "High", riskLevel: "High", consequence: "Zero firefighting capability.", proof: "Gauge Log" },
                { id: "RES-SAF-03", description: "Electrical Bank Shutdown: Physically confirm all non-essential breakers are switched OFF at closing.", priority: "High", riskLevel: "High", consequence: "Overnight short-circuit fire.", proof: "Panel Log" },
                { id: "RES-SAF-10", description: "Staff Bag-Check Registry: Perform 5 random searches of support staff bags at shift exit.", priority: "High", riskLevel: "Medium", consequence: "Internal inventory shrinkage.", proof: "Registry Note" }
            ]
        }
    ]
};
