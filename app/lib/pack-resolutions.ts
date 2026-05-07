
export type PackResolution = {
    heroTitle?: string;
    heroSubline: string;
    strategicParagraph: string;
    whyExecutionBreaksParagraph: string;
    risks: { title: string; description: string; }[];
    whatChangesDaily: string[];
    mondayMorning: string[];
    outcomes: string[];
    ctaTitle?: string;
    ctaSubline?: string;
};

export const packResolutions: Record<string, PackResolution> = {
    'school_operations_pack': {
        heroTitle: "SCHOOL OPERATING SYSTEM",
        heroSubline: "Stop depending on memory for transport safety, visitor control, hygiene, and daily school operations.",
        strategicParagraph: "Built for schools where student safety, operational discipline, and duty of care cannot depend on verbal follow-ups.",
        whyExecutionBreaksParagraph: "Schools rarely fail because of one catastrophic event. They fail when routine responsibilities slowly become informal, verbal, and dependent on memory.",
        risks: [
            { title: "Verbal Assumptions", description: "Rushed mornings lead to verbal check-ins instead of physical 'child-left-behind' sweeps and route verification." },
            { title: "Perimeter Gaps", description: "Visitor verification becomes inconsistent during peak arrival and dispersal surges, creating unmonitored entry windows." },
            { title: "Maintenance Drift", description: "Playground structural checks and electrical thermal scans often drift into the background until an incident triggers an audit." },
            { title: "Undocumented Concerns", description: "Welfare signals or subtle markers of student distress often stay as hallway conversations instead of being structured for intervention." }
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
        heroSubline: "Stop margin leakage and safety drift across your kitchen and floor stations.",
        strategicParagraph: "Built for high-volume groups where consistency and food safety cannot be left to shift-lead coordination alone.",
        whyExecutionBreaksParagraph: "Service standards rarely collapse during slow hours. They break when high compression removes the time to verify critical steps.",
        risks: [
            { title: "Revenue Leakage", description: "Unmonitored void bills and unverified ingredient yields create a silent daily drain on net margins." },
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
            "Cleaning standards are verified, not assumed"
        ],
        mondayMorning: [
            "Opening protocols are verified by 9:00 AM",
            "Kitchen hygiene is observable from your office",
            "Inventory waste for Sunday is already logged",
            "Prep levels match today's forecast exactly",
            "Ambiance vitals are uniform across all branches",
            "Managers stop waiting for verbal status reports"
        ],
        outcomes: [
            "HACCP compliance logged",
            "Margin leakage plugged",
            "Station consistency verified",
            "Managers stop chasing",
            "Shift handovers secured"
        ]
    },
    'hotels_and_resorts': {
        heroTitle: "HOTEL OPERATING SYSTEM",
        heroSubline: "Sovereign governance for Front Office, Housekeeping, and Engineering infrastructure.",
        strategicParagraph: "Built for luxury properties where brand standard drift and privacy gaps represent business-ending liability.",
        whyExecutionBreaksParagraph: "Hospitality standards don't fail because staff don't care; they fail because verbal orientation is asuggestion that expires within 48 hours.",
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
            "Staff grooming is uniform across all departments",
            "The GM sees property health without a walkthrough"
        ],
        outcomes: [
            "Guest privacy secured",
            "Room standards verified",
            "MEP uptime monitored",
            "Rating drift prevented",
            "Statutory logs audit-ready"
        ]
    },
    'franchise_operations_pack': {
        heroTitle: "FRANCHISE OPERATING SYSTEM",
        heroSubline: "Protect royalty integrity and brand parity across your entire multi-unit network.",
        strategicParagraph: "Built for franchisors who need to see operational performance without walking every unit floor every day.",
        whyExecutionBreaksParagraph: "Networks collapse when local franchisees begin to 'improvise' on the standard. Drift starts small and ends in brand dilution.",
        risks: [
            { title: "Royalty Leakage", description: "Unverified bill deletions and aggregator mismatches lead to significant untracked revenue theft at the unit level." },
            { title: "Brand Adulteration", description: "Unauthorized local ingredient sourcing and unvetted promos destroy the uniformity of the brand promise." },
            { title: "Compliance Liability", description: "Local unit manager negligence regarding FSSAI or fire licenses puts the entire network's reputation at risk." },
            { title: "Unit Distress", description: "Operational failure signals are often hidden until a unit is on the brink of closure, making intervention impossible." }
        ],
        whatChangesDaily: [
            "Unit managers report to the Sovereign Dashboard",
            "Royalty protection reconciles daily bills",
            "Visual standard parity is photo-verified",
            "Supply chain integrity is auditable remotely",
            "Drift in local pricing is identified in minutes",
            "Managers gain live network visibility without travel"
        ],
        mondayMorning: [
            "CEO sees a unified mood score for all units",
            "Unit manager attendance is verified by 9:30 AM",
            "Sunday revenue is reconciled and verified",
            "Critical stock levels for the network are visible",
            "High-risk incidents from the weekend are triaged",
            "The network runs on one institutional standard"
        ],
        outcomes: [
            "Royalty stream secured",
            "Brand parity enforced",
            "Network risk triaged",
            "Managers stop chasing",
            "Unit health observable"
        ]
    },
    'healthcare_and_hospital_operations': {
        heroTitle: "HOSPITAL OPERATING SYSTEM",
        heroSubline: "Zero-fail governance for surgical safety, medication control, and clinical risk.",
        strategicParagraph: "Built for medical leadership where 'never-events' and audit failures are not an option.",
        whyExecutionBreaksParagraph: "Clinical environments fail when verbal handovers become thin and critical control points are assumed rather than verified.",
        risks: [
            { title: "Clinical Never-Events", description: "Lack of pre-incision 'Time Outs' and dual-verification for high-alert drugs creates fatal windows of error." },
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
        ]
    },
    'facility_management_blueprint': {
        heroTitle: "FACILITY OPERATING SYSTEM",
        heroSubheadline: "Sovereign technical command for MEP assets, vendor SLAs, and life safety.",
        strategicParagraph: "Built for infrastructure leads where downtime, liability, and energy wastage are the primary risks.",
        whyExecutionBreaksParagraph: "Buildings fail when routine maintenance moves from scheduled execution into 'firefighting' once a fault occurs.",
        risks: [
            { title: "Utility Blackouts", description: "Untested DG fuel levels and ignored ARD battery vitals lead to elevator entrapment and total power collapse." },
            { title: "Contractor Liability", description: "Unverified Permits-to-Work for high-risk jobs (Hot-work/Height) create massive fire and safety exposure." },
            { title: "Energy Spikes", description: "Lack of sub-meter KWH tracking hides equipment inefficiency and creates unmonitored cost blowouts." },
            { title: "HVAC Decay", description: "Ignored discharge temperatures and filter cleaning cycles lead to guest discomfort and asset shortened-life." }
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
            "Managers stop waiting for technician reports"
        ],
        outcomes: [
            "Critical uptime secured",
            "Vendor SLAs verified",
            "Energy wastage identified",
            "Safety liability mitigated",
            "Asset life protected"
        ]
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
        heroSubline: "Unified governance for inventory integrity, loss prevention, and brand standards.",
        strategicParagraph: "Built for physical retail leaders where shrinkage, standard drift, and service collapse are daily threats.",
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
        ]
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
