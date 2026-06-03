export type PackResolution = {
    heroTitle?: string;
    heroSubline: string;
    strategicParagraph: string;
    whyExecutionBreaksParagraph: string;
    narrative?: string;
    blueprint?: string[];
    risks: { title: string; description: string; }[];
    consequences?: { title: string; fallout: string; }[];
    compliance?: string[];
    builtFor?: string[];
    whatChangesDaily: string[];
    mondayMorning: string[];
    outcomes: string[];
    ctaTitle?: string;
    ctaSubline?: string;
    reassuranceTrustTitle?: string;
    reassuranceTrustDescription?: string;
};

export const packResolutions: Record<string, PackResolution> = {
    'supermarket_grocery_retail_pack': {
        heroTitle: "GROCERY OPERATIONS SYSTEM",
        heroSubline: "Command Your Freshness. Protect Your Margins.",
        strategicParagraph: "The definitive Sovereign v18.0 engine for grocery and FMCG retail. Hardening 200 technical control points across Cold Chain, Spoilage Prevention, and Shrinkage Governance.",
        whyExecutionBreaksParagraph: "Grocery retail fails when cold storage vitals are unlogged, expiry sweeps are inconsistent, and cashier variance goes unmonitored by management.",
        narrative: "A well-run grocery store does not rely on assumptions about freshness. It follows a repeatable operating rhythm that reduces wastage, improves stock availability, and creates a consistent customer experience. Receiving protocols ensure supply chain quality from the dock. Freshness checks and expiry monitoring protect perishable margins. Temperature logs maintain cold-chain integrity 24/7. Shelf replenishment routines ensure product availability during peak traffic waves.",
        blueprint: ["Receiving deliveries", "Freshness checks", "Expiry monitoring", "Shelf replenishment", "Temperature logs", "Inventory counts", "Opening checks", "Closing procedures"],
        risks: [
            { title: "Cold Chain Breach", description: "Unmonitored temp spikes in chillers/freezers leading to massive pathogen growth and total stock loss." },
            { title: "Expiry Slip-ups", description: "Expired perishables remaining on shelves due to lack of daily FEFO (First-Expiry-First-Out) audits." },
            { title: "Cashier Variance", description: "Internal till fraud and billing errors silently eroding 2-3% of daily net revenue." },
            { title: "Inventory Shrinkage", description: "High-volume pilferage in alcohol, gourmet, and personal care categories due to weak patrol logs." }
        ],
        whatChangesDaily: [
            "Refrigeration vitals become mandatory data",
            "Expiry sweeps turn into auditable logs",
            "Cashier variance is reconciled shift-wise",
            "Receiving temperatures have a verified seal",
            "Waste weights are logged for margin parity",
            "Store managers gain live visibility into execution"
        ],
        mondayMorning: [
            "Morning freshness cull is signed by 9 AM",
            "Cold storage vitals are within green zones",
            "High-shrinkage SKUs have been cycle-counted",
            "Vendor SLAs for fresh protein are verified",
            "Checkout till floats are reconciled and secured",
            "The regional standard is visible to the head office"
        ],
        outcomes: [
            "Pathogen risk mitigated",
            "Margin leakage plugged",
            "Statutory logs audit-ready",
            "Shelf availability secured",
            "FSSAI compliance verified"
        ],
        reassuranceTrustTitle: "STATION DISCIPLINE",
        reassuranceTrustDescription: "Operational consistency customers notice across every aisle and chill-zone."
    },
    'electronics_showroom_pack': {
        heroTitle: "ELECTRONICS OPERATIONS SYSTEM",
        heroSubline: "Command Your Device Integrity. Protect Your Inventory.",
        strategicParagraph: "The definitive Sovereign v18.0 engine for electronics retail. Hardening 180 technical control points across Serial Governance, Demo Asset Safety, and Warranty Fraud Prevention.",
        whyExecutionBreaksParagraph: "Electronics retail fails when unique serial IDs are unmonitored, demo units become fire hazards, and warranty fraud goes undetected at the return counter.",
        narrative: "A well-run electronics showroom does not rely on verbal serial tracking. It follows a repeatable operating rhythm that protects device integrity and inventory security. Unique ID (IMEI/Serial) verification ensures accurate delivery and warranty validity. Demo asset safety checks prevent technical hazards and battery risks. Warranty claim validation stops return fraud at the counter. Data wipe certifications protect customer privacy during repairs and resets. Technical uptime audits ensure the floor is ready for live demonstrations.",
        blueprint: ["Unique ID (IMEI/Serial) verification", "Demo asset safety", "Warranty claim validation", "Customer data wipes", "Battery thermal logs", "E-waste segregation", "High-value inventory counts", "Installation TAT"],
        risks: [
            { title: "Serial Mismatch", description: "Inaccurate IMEI/Serial tracking leading to voided manufacturer warranties and untraceable stock loss." },
            { title: "Demo Battery Fire", description: "Overheating lithium-ion batteries in bloated demo units causing catastrophic showroom fire incidents." },
            { title: "Warranty Swap Fraud", description: "Accepting tampered or swapped high-value devices during 'Dead on Arrival' return claims." },
            { title: "Data Privacy Breach", description: "Failure to perform certified data wipes on repair intake or demo resets, exposing customer PII." }
        ],
        whatChangesDaily: [
            "Serial IDs have a verified technical seal",
            "Demo battery thermals are logged shift-wise",
            "DOA returns require manager co-sign logic",
            "Customer data wipes are certified daily",
            "IMEI activation parity is confirmed 24h prior",
            "Operations directors see group readiness instantly"
        ],
        mondayMorning: [
            "Every flagship has a serial sign-off by 9 AM",
            "Demo wall vitals are within green thermal zones",
            "Vault inventory matches the IMEI billed-list",
            "Service-center data logs are secured and audited",
            "Old battery e-waste is manifested for recycling",
            "The group standard is visible to the head office"
        ],
        outcomes: [
            "IMEI mismatches prevented",
            "Lithium fire risk mitigated",
            "Warranty fraud protected",
            "Technical uptime tracked",
            "Guest data secured"
        ]
    },
    'fashion_and_apparel_retail': {
        heroTitle: "FASHION OPERATIONS SYSTEM",
        heroSubline: "Command Your Inventory Velocity. Protect Your Brand Standards.",
        strategicParagraph: "The definitive Sovereign v18.0 engine for apparel and fashion retail. Hardening 182 technical control points across Inventory Velocity, VM Discipline, and Return-Fraud Prevention.",
        whyExecutionBreaksParagraph: "Fashion retail fails when visual standards become suggestions, size-curves are ignored, and return-fraud goes unmonitored by the management tier.",
        narrative: "A well-run fashion store does not rely on visual intuition alone. It follows a repeatable operating rhythm that protects inventory velocity and brand standards. Visual standards audits ensure mannequin and display consistency. Inventory velocity tracking prevents dead-stock accumulation and optimizes floor space. Size-curve audits maintain stock availability for core customers. Return-fraud prevention protocols protect net margins from swap abuse. Seasonal launch readiness ensures the floor is prepared for peak sales waves.",
        blueprint: ["Visual standards audits", "Inventory velocity", "Size-curve availability", "Trial room hygiene", "Return-fraud prevention", "Tag-tamper sweeps", "POS deletions", "Seasonal launch readiness"],
        risks: [
            { title: "Inventory Shrinkage", description: "Internal pilferage and shoplifting masked by poor cycle-count discipline and trial-room gaps." },
            { title: "Visual Standards Drift", description: "Mannequin non-compliance and poor lighting maintenance destroying premium brand authority." },
            { title: "Size-Curve Gaps", description: "Lost sales through unmonitored stock-outs of core sizes (M/L) while over-stocking slow movers." },
            { title: "Return & Swap Fraud", description: "Accepting counterfeit swaps or 'wardrobed' garments due to weak receipt and tag verification." }
        ],
        whatChangesDaily: [
            "Mannequin compliance becomes verified",
            "Size-curve audits become daily logs",
            "Trial room sweeps become mandatory pulses",
            "Returns require manager co-sign logic",
            "Markdown tagging has a secondary seal",
            "Inventory velocity is tracked by section"
        ],
        mondayMorning: [
            "Opening visual readiness is physically signed",
            "Size-curve gaps for the week are identified",
            "Trial room hygiene cycle is already active",
            "Weekend return volume is reconciled",
            "Launch readiness for new collections is verified",
            "Managers stop chasing for basic visual checks"
        ],
        outcomes: [
            "Inventory velocity tracked",
            "Brand parity enforced",
            "Fraud risk mitigated",
            "Markdown losses reduced",
            "Trial room conversion optimized"
        ]
    },
    'school_operations_pack': {
        heroTitle: "SCHOOL OPERATING SYSTEM",
        heroSubline: "Bring structure, visibility, and accountability to the responsibilities schools cannot afford to miss.",
        strategicParagraph: "Built for schools where student safety, operational discipline, and duty of care cannot depend on verbal follow-ups.",
        whyExecutionBreaksParagraph: "Schools rarely fail because of one catastrophic event. They fail when routine responsibilities slowly become informal, verbal, and dependent on memory.",
        narrative: "A well-run school does not rely on verbal follow-ups. It follows a repeatable operating rhythm that protects student safety and ensures administrative continuity. Student arrival and dispersal protocols manage perimeter security during rush hours. Transport safety checks ensure a zero-fail commute. Classroom readiness checks maintain high-quality learning environments. Maintenance logs protect campus infrastructure and student welfare daily.",
        blueprint: ["Student arrival and dispersal", "Transport safety checks", "Classroom readiness", "Maintenance logs", "Attendance procedures", "Incident reporting", "Campus security sweeps", "Exam paper security"],
        risks: [
            { title: "Playground safety checks becoming assumed", description: "Rushed mornings lead to verbal check-ins instead of physical 'child-left-behind' sweeps and route verification." },
            { title: "Visitor verification skipped during rush hours", description: "Visitor verification becomes inconsistent during peak arrival and dispersal surges, creating unmonitored entry windows." },
            { title: "Maintenance drift in critical zones", description: "Playground structural checks and electrical thermal scans often drift into the background until an incident trigger an audit." },
            { title: "Student welfare concerns staying undocumented", description: "Welfare signals or subtle markers of student distress often stay as hallway conversations instead of being structured for intervention." }
        ],
        whatChangesDaily: [
            "Visitor access becomes logged and visible",
            "Bus closeouts become mandatory and traceable",
            "Hygiene checks become documented",
            "Responsibilities become assigned by role",
            "Managers gain live visibility without chasing teams.",
            "Daily execution becomes visible across teams."
        ],
        mondayMorning: [
            "Transport checks are already completed",
            "Visitor access is verified at the gate",
            "Nurse confirms emergency supplies",
            "Kitchen hygiene logs are updated before breakfast",
            "Daily responsibilities are already visible to teams",
            "Managers stop chasing for updates"
        ],
        outcomes: [
            "Visitor access visible",
            "Bus checks verified",
            "Teams aligned daily",
            "Managers stop chasing",
            "Daily execution tracked"
        ]
    },
    'restaurants': {
        heroTitle: "RESTAURANT OPERATING SYSTEM",
        heroSubline: "Stop operational drift before it reaches the guest experience.",
        strategicParagraph: "Built for high-volume groups where consistency and food safety cannot be left to shift-lead coordination alone.",
        whyExecutionBreaksParagraph: "Service standards rarely collapse during slow hours. They break when high compression removes the time to verify critical steps.",
        narrative: "A well-run restaurant does not rely on managers remembering tasks. It follows a repeatable operating rhythm that maintains food safety, service consistency, and operational discipline. Opening checks ensure equipment, hygiene standards, and stock levels are ready before service begins. Food preparation procedures reduce waste and maintain recipe parity. Temperature logs protect HACCP standards. Cleaning schedules ensure compliance and customer confidence every shift. Shift handovers prevent information from being lost between teams.",
        blueprint: ["Opening checks", "Food preparation standards", "Temperature logs", "Cleaning schedules", "Inventory counts", "Shift handovers", "Closing procedures", "Customer complaints"],
        risks: [
            { title: "Revenue Leakage", description: "Void bills, uncontrolled portioning, and unverified ingredient yields silently erode net margins every shift." },
            { title: "HACCP Lapses", description: "Critical temperature logs are often back-filled at the end of shifts instead of being recorded during active receiving." },
            { title: "Shift Drift", description: "Opening and closing protocols vary wildly between Shift leads, creating inconsistent guest experiences and utility wastage." },
            { title: "Untracked Waste", description: "Prep waste and spoilage stay hidden in bin bags instead of being data-anchored for procurement optimization." }
        ],
        whatChangesDaily: [
            "HACCP thermal logs become real-time data",
            "Void authorizations require technical proof",
            "Prep yields are reconciled at 11:00 AM",
            "Shift handovers become zero-gap data transfers",
            "Managers see station execution from their phones",
            "Cold-chain failures become visible before stock loss occurs"
        ],
        mondayMorning: [
            "Opening protocols are verified by 9:00 AM",
            "Kitchen hygiene is observable from your office",
            "Inventory waste for Sunday is already logged",
            "Prep levels match today's forecast exactly",
            "Music, lighting, scent, and temperature match brand standard",
            "Managers stop waiting for verbal status reports"
        ],
        outcomes: [
            "HACCP compliance logged",
            "Margin leakage plugged",
            "Station consistency verified",
            "Managers stop chasing",
            "Shift handovers secured"
        ],
        reassuranceTrustTitle: "STATION DISCIPLINE",
        reassuranceTrustDescription: "The brand standard becomes visible across every station and shift.",
        ctaTitle: "High-volume service requires \n operational discipline, not verbal coordination.",
        ctaSubline: "The standard should survive the rush."
    },
    'hotels_and_resorts': {
        heroTitle: "HOTEL OPERATING SYSTEM",
        heroSubline: "Zero-drift operational governance for hotels, resorts, and hospitality groups.",
        strategicParagraph: "Brand standards collapse quietly when execution becomes verbal, informal, and impossible to verify.",
        whyExecutionBreaksParagraph: "Luxury standards decay when execution depends on memory instead of verification.",
        narrative: "A well-run hotel does not rely on memory or verbal instructions. It follows a repeatable operating rhythm that delivers a consistent guest experience across every room and shift. Room inspections ensure luxury standards are met before guest arrival. Housekeeping protocols maintain hygiene and presentation. Maintenance requests are tracked for asset uptime. Shift handovers ensure seamless continuity between teams. Guest complaint recovery is documented for institutional learning.",
        blueprint: ["Room inspections", "Housekeeping standards", "Guest check-ins", "Maintenance requests", "Safety checks", "Shift handovers", "Guest complaints", "Service recovery"],
        risks: [
            { title: "Reputation Drift", description: "Unaddressed OTA reviews and unverified room setup standards lead to a slow, visible slide in property ratings." },
            { title: "Privacy Exposure", description: "Weak master-keycard governance and lack of hidden camera sweeps create critical guest security windows." },
            { title: "Infrastructure Decay", description: "MEP vitals for boilers and chillers go unlogged until a catastrophic failure forces guest relocations." },
            { title: "Linen Greying", description: "Poor vendor SLA command and lack of grey-scale audits lead to a visible drop in luxury touchpoints." }
        ],
        whatChangesDaily: [
            "Room readiness has a verified digital sign-off",
            "C-Form compliance is 100% auditable hourly",
            "MEP vitals (DG/Chiller) are logged and monitored",
            "Guest escalations are triaged in under 15 minutes",
            "Privacy sweeps become part of the checkout cycle",
            "The brand standard becomes a physical, logged reality"
        ],
        mondayMorning: [
            "Arrival rooms have been physically verified",
            "Night audit reconciles to the bank by 8:00 AM",
            "Boiler and pump room vitals are within green zones",
            "VIP amenities are already placed and photographed",
            "Grooming compliance is verified across all guest-facing teams",
            "The GM sees property health without a walkthrough"
        ],
        outcomes: [
            "Guest privacy secured",
            "Room standards verified",
            "MEP uptime monitored",
            "Rating drift prevented",
            "Statutory logs audit-ready"
        ],
        reassuranceTrustTitle: "LUXURY CONSISTENCY",
        reassuranceTrustDescription: "Consistency guests feel from lobby arrival to room checkout.",
        ctaTitle: "The property standard should \n not depend on who is on shift.",
        ctaSubline: "Protect the standard guests are paying for."
    },
    'franchise_operations_pack': {
        heroTitle: "FRANCHISE OPERATING SYSTEM",
        heroSubline: "Protect brand parity, royalty integrity, and operational control across every franchise unit.",
        strategicParagraph: "Built for franchisors where one weak unit damages the entire network.",
        whyExecutionBreaksParagraph: "Networks collapse when local franchisees begin to 'improvise' on the standard. This Network Drift starts small and ends in total brand dilution.",
        narrative: "A well-run franchise network does not rely on local improvisation. It follows a repeatable operating rhythm that protects brand parity and royalty integrity across every unit. Brand audits verify visual and service consistency. Royalty reconciliations prevent revenue leakage. Standardized opening checks ensure a zero-drift start to every shift. Inventory movement tracking maintains supply chain visibility and network health. Quality scorecards provide the network with objective performance data.",
        blueprint: ["Brand parity audits", "Royalty reconciliation", "Standardized opening checks", "Inventory movement", "Quality scorecards", "Training completion", "Local marketing compliance", "Multi-unit reporting"],
        risks: [
            { title: "Royalty Leakage", description: "Voided bills, aggregator mismatches, and off-book sales silently erode royalty visibility and franchisor revenue." },
            { title: "Brand Adulteration", description: "Local improvisation slowly destroys the consistency customers expect from the brand standard." },
            { title: "Compliance Liability", description: "Local partner negligence regarding FSSAI, fire licenses, or labor laws puts the entire network at risk." },
            { title: "Unit Distress", description: "Weak units usually show warning signals weeks before collapse — but nobody sees them in time without data architecture." }
        ],
        whatChangesDaily: [
            "Unit managers report to the Sovereign Dashboard",
            "Royalty protection reconciles daily bills",
            "Visual standard parity is photo-verified",
            "Supply chain integrity is auditable remotely",
            "Network Drift in local pricing is identified in minutes",
            "Critical compliance expiries become visible before they become liabilities"
        ],
        mondayMorning: [
            "CEO sees network readiness before stores open",
            "High-risk units are visible before the first rush",
            "Weekend performance drift is already identified",
            "Operational exceptions are escalated before noon",
            "Sunday revenue is reconciled and verified",
            "The network runs on one institutional standard"
        ],
        outcomes: [
            "Royalty stream secured",
            "Brand parity enforced",
            "Network risk triaged",
            "Managers stop chasing",
            "Unit health observable"
        ],
        reassuranceTrustTitle: "NETWORK INTEGRITY",
        reassuranceTrustDescription: "Consistency customers feel across the entire network.",
        ctaTitle: "Scale without losing \n operational discipline.",
        ctaSubline: "Bring the network back under operational control."
    },
    'healthcare_and_hospital_operations': {
        heroTitle: "HOSPITAL OPERATING SYSTEM",
        heroSubline: "Zero-fail governance for surgical safety, medication control, and clinical risk.",
        strategicParagraph: "Built for hospitals where patient safety, surgical discipline, and clinical accountability cannot depend on memory.",
        whyExecutionBreaksParagraph: "Clinical environments fail when verbal handovers become thin and critical control points are assumed rather than verified.",
        narrative: "A well-run healthcare facility does not rely on individual memory. It follows a repeatable operating rhythm that protects patient safety and maintains regulatory compliance. Patient intake procedures ensure accurate record-keeping. Clinical safety checks reduce medical errors. Equipment sterilization is verified through audit trails. Medication logs prevent dispensing errors. Shift briefings ensure zero-gap care transitions for patient welfare. These routines provide clinical teams with a structured framework for excellence.",
        blueprint: ["Patient intake and consent", "Clinical safety checks", "Equipment sterilization", "Medication logs", "Bed management", "Shift briefings", "Infection control", "Statutory documentation"],
        risks: [
            { title: "Clinical Never-Events", description: "Lack of pre-incision 'Time Outs' and dual-verification for high-alert drugs creates fatal windows of clinical error." },
            { title: "Infection Outbreaks", description: "Hygiene frequency drift in ICUs and poor CSSD indicator tracking lead to hospital-acquired infection spikes." },
            { title: "Narcotic Diversion", description: "Weak vault access governance and lack of blind-counts enable internal drug theft and criminal liability." },
            { title: "Billing Leakage", description: "Unlogged ward consumables and delayed TPA pre-auths result in significant unrecoverable financial loss." }
        ],
        whatChangesDaily: [
            "WHO surgical checklists become mandatory logs",
            "Narcotics safe is double-blind counted daily",
            "Bedside handovers become structured data streams",
            "Waste segregation is verified at the source",
            "Pharmacy cold-chain is 100% auditable",
            "Medical directors see ward vitals instantly"
        ],
        mondayMorning: [
            "The Crash Cart seal is physically verified",
            "High-alert medication dual-check is active",
            "OT sterility indicators are logged and valid",
            "Bio-medical waste manifests are updated",
            "ER wait-time TAT is within green thresholds",
            "Institutional safety memory is secured"
        ],
        outcomes: [
            "Never-events targeted",
            "Infection risk mitigated",
            "Narcotics control secured",
            "Audit-readiness permanent",
            "Patient safety observable"
        ],
        reassuranceTrustTitle: "CLINICAL CONFIDENCE",
        reassuranceTrustDescription: "Clinical discipline patients experience. Institutional consistency families trust."
    },
    'facility_management_blueprint': {
        heroTitle: "FACILITY OPERATING SYSTEM",
        heroSubline: "Sovereign technical command for MEP assets, vendor SLAs, and life safety.",
        strategicParagraph: "Buildings don’t fail suddenly. They fail after weeks of invisible neglect. When maintenance becomes verbal, infrastructure becomes unstable.",
        whyExecutionBreaksParagraph: "Buildings fail when routine maintenance moves from scheduled execution into 'firefighting' once a fault occurs.",
        narrative: "A well-run facility does not rely on firefighting. It follows a repeatable operating rhythm that protects MEP assets and ensures life safety compliance. MEP vitals are logged for predictive maintenance. Vendor SLA audits ensure service delivery. Energy intensity monitoring reduces operational waste. Fire safety audits protect occupants and legal standing. Permit-to-work checks govern high-risk contractor activities.",
        blueprint: ["MEP asset vitals", "Preventive maintenance", "Vendor SLA compliance", "Energy intensity logs", "Fire safety audits", "Permit-to-work checks", "Water purity levels", "Campus security sweeps"],
        builtFor: [
            "Commercial Towers", "Malls & Retail", "Hospitals", "Schools & Universities", "Hotels & Resorts", "Industrial Sites", "Corporate Campuses"
        ],
        risks: [
            { title: "Utility Blackouts", description: "Untested DG fuel levels and ignored ARD battery vitals lead to elevator entrapment and total power collapse." },
            { title: "Contractor Liability", description: "Unverified Permits-to-Work for high-risk jobs (Hot-work/Height) create massive fire and safety exposure." },
            { title: "Energy Spikes", description: "Lack of sub-meter KWH tracking hides equipment inefficiency and creates unmonitored cost blowouts." },
            { title: "HVAC Decay", description: "Ignored discharge temperatures and filter cleaning cycles lead to guest discomfort and asset shortened-life." }
        ],
        consequences: [
            { title: "Power failure during occupancy", fallout: "Tenant escalation + DG emergency dependency" },
            { title: "Unapproved hot-work", fallout: "Fire liability exposure + insurance complications" },
            { title: "Untracked HVAC inefficiency", fallout: "Utility cost inflation + asset life reduction" },
            { title: "Missed pump-room inspections", fallout: "Flooding risk + infrastructure downtime" }
        ],
        compliance: [
            "Fire & Life Safety Readiness", "Permit-To-Work Governance", "Contractor Safety Discipline", "Emergency Exit Compliance", "Electrical Panel Safety Checks", "Lift & DG Audit Preparedness", "Vendor SLA Documentation", "Duty-of-Care Visibility"
        ],
         whatChangesDaily: [
            "MEP asset vitals become a daily data stream",
            "Vendor staff presence is verified against SLA",
            "Fire exit paths are physically confirmed clear",
            "High-load panel heat scans become routine",
            "Permit-to-work logs become 100% auditable",
            "Facility directors gain live infrastructure visibility"
        ],
        mondayMorning: [
            "DG and Chiller health logs are already signed",
            "Vendor teams are checked-in and briefed",
            "Washroom hygiene cycle is already active",
            "Utility meters are logged for Sunday's usage",
            "Emergency light batteries are tested and green",
            "The building feels calm because systems are already under control."
        ],
        outcomes: [
            "DG readiness becomes observable",
            "Permit-to-work violations become visible",
            "Vendor accountability becomes enforceable",
            "Energy spikes become traceable",
            "Infrastructure dependency on memory disappears"
        ],
        reassuranceTrustTitle: "INSTITUTIONAL MEMORY",
        reassuranceTrustDescription: "Operational history remains visible even when teams change or vendors rotate."
    },
    'cinema_operations_pack': {
        heroTitle: "CINEMA OPERATING SYSTEM",
        heroSubline: "Technical command for show readiness, crowd flow, and concession yield.",
        strategicParagraph: "Built for multiplex leadership where black-screens and crowd-safety incidents are business-ending events.",
        whyExecutionBreaksParagraph: "Cinemas fail when technical readiness is assumed and interval rushes become disorganized coordination exercises.",
        narrative: "A well-run cinema does not rely on technical guesswork. It follows a repeatable operating rhythm that protects show readiness and concession yields. Technical show checks ensure zero-fail projection and sound. Concession yield counts prevent margin leakage. Interval wave management ensures crowd safety and flow. Emergency egress checks protect audience welfare and institutional safety memory. These routines ensure the audience never sees the complexity behind the scenes.",
        blueprint: ["Technical show readiness", "Concession yield counts", "Interval wave management", "Auditorium hygiene", "Projection & sound calibration", "Emergency egress checks", "Ticketing reconciliation", "VIP lounge standards"],
        risks: [
            { title: "Expired KDM Keys", description: "Unverified digital decryption keys lead to show cancellations during blockbuster openings." },
            { title: "Concession Yield Leakage", description: "Lack of raw-corn-to-bucket yield logic creates massive internal profit theft at the counter." },
            { title: "Interval Surge Congestion", description: "Washroom congestion and concession queue overload damaging guest satisfaction scores." },
            { title: "Emergency Comms Failure", description: "Emergency announcement systems or fire doors failing unnoticed until a crisis occurs." }
        ],
        whatChangesDaily: [
            "Show readiness has a mandatory technical seal",
            "Concession yields are reconciled shift-wise",
            "Auditorium temperatures are logged during peak",
            "Egress safety patrols are verified pre-credits",
            "DCP/KDM status is confirmed 24h prior",
            "Operations heads see group readiness instantly"
        ],
        mondayMorning: [
            "Every screen has a technical sign-off by 9 AM",
            "Concession opening stock is 100% verified",
            "Projection room thermals are within green zones",
            "Box office floats are reconciled and secured",
            "Digital reviews from the weekend are answered",
            "The group standard is visible to the head office"
        ],
        outcomes: [
            "Black-screens prevented",
            "Concession yields protected",
            "Crowd safety secured",
            "Technical uptime tracked",
            "Guest scores protected"
        ],
        ctaTitle: "The audience never sees the chaos behind the curtain.",
        ctaSubline: "Calm operations before the lights go down."
    },
    'retail_operations_system': {
        heroTitle: "RETAIL OPERATING SYSTEM",
        heroSubline: "Margin Protection Infrastructure. Not Store Management.",
        strategicParagraph: "Protect your margin, stock, and store control daily with forensic protocols for Loss Prevention, Compliance, and Duty of Care.",
        whyExecutionBreaksParagraph: "Stores fail when visual standards become suggestions and inventory control depends on trust instead of verifiable logic.",
        blueprint: ["Inventory tracking", "Opening readiness", "Metrology calibration", "Fitting room patrols", "Staff grooming", "Cash reconciliation", "Loss prevention sweeps", "Safety exit checks"],
        risks: [
            { title: "Inventory Shrinkage", description: "Weak cycle-count discipline and unverified POS deletions enable systemic internal and external theft." },
            { title: "Visual Standards Drift", description: "Planogram non-compliance and poor lighting maintenance lead to a slow decline in premium brand authority." },
            { title: "Metrology Fines", description: "Uncalibrated weighing scales and unverified shelf-edge pricing lead to severe consumer court penalties." },
            { title: "Duty of Care Gaps", description: "Blocked fire exits and unlogged floor-spill responses create significant legal and safety exposure." }
        ],
         whatChangesDaily: [
            "High-value cycle counts become mandatory logs",
            "Store opening readiness has a verified seal",
            "Metrology calibration is checked weekly",
            "Fitting room patrols become auditable pulses",
            "Staff grooming is checked against brand SOPs",
            "Store managers gain live visibility into execution"
        ],
        mondayMorning: [
            "Opening readiness has been physically signed",
            "High-value assets are reconciled by 10 AM",
            "Shelf-edge pricing matches the POS system",
            "Safety exits are confirmed clear and functional",
            "Staff targets for the week are briefed and set",
            "Operational proof replaces manual follow-ups"
        ],
        outcomes: [
            "Inventory theft prevented",
            "Brand parity enforced",
            "Shrinkage identified early",
            "Compliance risk mitigated",
            "Service standards verified"
        ],
        reassuranceTrustTitle: "STATION DISCIPLINE",
        reassuranceTrustDescription: "Operational consistency customers notice across every zone."
    },
    'retail_jewellery_operations_pack': {
        heroTitle: "JEWELLERY OPERATIONS SYSTEM",
        heroSubline: "Protect Your Inventory. Secure Your Custody Chain.",
        strategicParagraph: "The definitive Sovereign v19.2 custody-chain engine for high-value retail. Hardening 198 technical control points across Vault Governance, Transaction Integrity, and Hallmark Compliance.",
        whyExecutionBreaksParagraph: "Jewellery stores fail when dual-custody discipline is bypassed, swap thefts go undetected during peak waves, and gram-variance is ignored.",
        narrative: "A well-run jewellery store does not rely on memory, individual experience, or verbal instructions. It follows a repeatable operating rhythm that protects inventory, maintains compliance, and preserves customer trust. Vault access is controlled through dual-authorization procedures. Inventory movements are verified through gram-weight reconciliation. Hallmark and certification checks reduce compliance risk. Trial-piece controls help prevent substitution losses. Transaction reviews ensure accountability for high-value sales. These routines help convert tribal knowledge into permanent operational infrastructure.",
        blueprint: ["Vault dual-authorization", "Gram-weight reconciliation", "Trial piece substitution checks", "Empty-holder anomaly scans", "Hallmark verification", "Diamond certificate mapping", "High-value transaction vetting", "Security panic tests"],
        risks: [
            { title: "Sophisticated Swap Theft", description: "Counter-substitution of high-value diamonds with fakes during trial sessions due to single-piece handling lapses." },
            { title: "Internal Pilferage", description: "Gram-level inventory exfiltration hidden by weak vault-return weighing protocols and collusion." },
            { title: "Hallmark Non-Compliance", description: "Selling unvetted or improperly hallmarked goods leading to BIS regulatory sealing and mass penalties." },
            { title: "Transaction Fraud", description: "Unauthorized discount overrides and unvetted buyback valuations eroding high-value net margins." }
        ],
        whatChangesDaily: [
            "Vault access requires dual-sign digital seals",
            "Trial pieces are weighed pre-and-post presentation",
            "Gram-variance is reconciled shift-wise",
            "BIS Hallmark validity is verified for inward stock",
            "Security panic pulses are tested daily",
            "High-value discounts require technical auth"
        ],
        mondayMorning: [
            "Vault opening witness log is signed by 9 AM",
            "Showcase piece counts match morning issue slips",
            "Precision scales are calibrated to standard weight",
            "Loose gem inventory is double-blind counted",
            "Night security CCTV footage is reviewed for gaps",
            "The group standard is visible to the head office"
        ],
        outcomes: [
            "Swap theft neutralized",
            "Gram leakage plugged",
            "BIS compliance secured",
            "Transaction integrity verified",
            "Luxury brand authority protected"
        ]
    }
};

export const defaultResolution: PackResolution = {
    heroSubline: "Reduce operational dependence on memory. Bring structure to daily execution.",
    strategicParagraph: "Built for elite leadership where operational discipline and duty of care cannot depend on verbal follow-ups.",
    whyExecutionBreaksParagraph: "Operations rarely fail because of one catastrophic event. They fail when routine responsibilities slowly become informal and dependent on memory.",
    blueprint: ["Standardized opening checks", "Routine safety sweeps", "Inventory tracking", "Shift handovers", "Cleaning schedules", "Closing procedures", "Statutory documentation", "Team briefings"],
    risks: [
        { title: "Verbal Assumptions", description: "Critical tasks lead to verbal check-ins instead of physical verification and route mapping." },
        { title: "Perimeter Gaps", description: "Verification becomes inconsistent during peak arrival and dispersal surges." },
        { title: "Maintenance Drift", description: "Structural checks and electrical scans often drift into the background until an incident occurs." },
        { title: "Undocumented Concerns", description: "Critical signals stay as hallway conversations instead of being structured for intervention." }
    ],
    whatChangesDaily: [
        "Responsibilities become assigned by role",
        "Execution becomes logged and visible",
        "Managers gain live visibility without chasing teams",
        "Accountability becomes mandatory and traceable",
        "Daily execution becomes visible across teams."
    ],
    mondayMorning: [
        "Critical checks are already completed",
        "Teams start with a clear assigned list",
        "Managers stop chasing for basic updates",
        "Daily responsibilities are already visible to teams",
        "Training time for new staff is reduced",
        "Work stops depending on the memory of key people"
    ],
    outcomes: [
        "Visibility secured",
        "Teams aligned daily",
        "Managers stop chasing",
        "Execution tracked",
        "Compliance verified"
  ]
};
