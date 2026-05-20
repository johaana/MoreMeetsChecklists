
export type PackResolution = {
    heroTitle?: string;
    heroSubline: string;
    strategicParagraph: string;
    whyExecutionBreaksParagraph: string;
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
    'fashion_and_apparel_retail': {
        heroTitle: "FASHION OPERATIONS SYSTEM",
        heroSubline: "Command Your Inventory Velocity. Protect Your Brand Standards.",
        strategicParagraph: "The definitive Sovereign v18.0 engine for apparel and fashion retail. Hardening 182 technical control points across Inventory Velocity, VM Discipline, and Return-Fraud Prevention.",
        whyExecutionBreaksParagraph: "Fashion retail fails when visual standards become suggestions, size-curves are ignored, and return-fraud goes unmonitored by the management tier.",
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
        risks: [
            { title: "Playground safety checks becoming assumed", description: "Rushed mornings lead to verbal check-ins instead of physical 'child-left-behind' sweeps and route verification." },
            { title: "Visitor verification skipped during rush hours", description: "Visitor verification becomes inconsistent during peak arrival and dispersal surges, creating unmonitored entry windows." },
            { title: "Maintenance drift in critical zones", description: "Playground structural checks and electrical thermal scans often drift into the background until an incident triggers an audit." },
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
    }
};

export const defaultResolution: PackResolution = {
    heroSubline: "Reduce operational dependence on memory. Bring structure to daily execution.",
    strategicParagraph: "Built for elite leadership where operational discipline and duty of care cannot depend on verbal follow-ups.",
    whyExecutionBreaksParagraph: "Operations rarely fail because of one catastrophic event. They fail when routine responsibilities slowly become informal and dependent on memory.",
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
