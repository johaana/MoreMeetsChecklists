
export type PackResolution = {
    prevents: string[];
    teamUses: string[];
    mondayMorning: string[];
};

export const packResolutions: Record<string, PackResolution> = {
    'school_operations_pack': {
        prevents: [
            "Visitor access becomes logged and controlled",
            "Emergency readiness becomes scheduled and enforceable",
            "Bus closeouts become mandatory, not assumed",
            "Kitchen hygiene becomes documented, not verbal",
            "Daily execution becomes visible across teams",
            "Managers stop chasing",
            "Work stops depending on memory",
            "Compliance becomes observable"
        ],
        teamUses: [
            "Daily task checklists",
            "Assigned responsibilities",
            "Trainer notes for execution",
            "Consequences for missed tasks",
            "Real-time task updates",
            "Role-based accountability"
        ],
        mondayMorning: [
            "Front office checks are completed and visible",
            "Visitor access is controlled",
            "Safety drills become routine",
            "Bus handovers become verifiable",
            "Kitchen checks become traceable",
            "Teams update execution live",
            "Managers stop chasing for updates",
            "Daily work becomes observable"
        ]
    },
    'restaurants': {
        prevents: [
            "Revenue leakage is identified at the source",
            "HACCP compliance becomes a daily record, not an audit scramble",
            "Manager handovers become zero-gap data transfers",
            "Prep waste is tracked and reduced through par-level logic",
            "Cleaning schedules are verified, not just requested",
            "Staff dependence on 'tribal knowledge' is eliminated",
            "Ambiance standards (music, light, temp) are enforced hourly",
            "Closing safety (gas/power) becomes a mandatory digital seal"
        ],
        teamUses: [
            "Role-specific digital ledgers",
            "HACCP thermal log integration",
            "Shift A/B parity checkpoints",
            "Built-in Trainer's Notes per station",
            "Binary 'Done/Missed' reporting",
            "Direct accountability for high-risk zones"
        ],
        mondayMorning: [
            "Opening protocols are verified by 9:00 AM",
            "Revenue reconciliations are completed without chasing",
            "Kitchen hygiene is observable from your phone",
            "Staff knows exactly why every task matters",
            "Near-miss incidents are logged and triaged",
            "The floor runs on proof, not promises",
            "Service standards become predictable",
            "Closure is secured and verifiable"
        ]
    },
    'hotels_and_resorts': {
        prevents: [
            "Room readiness disputes between FO and HK are eliminated",
            "Guest ID compliance (C-Form) becomes a zero-fail process",
            "Preventive maintenance for high-value assets is automated",
            "Safety incidents at high-risk zones (Pool, Gym) are mitigated",
            "VIP setups are verified before the guest arrives",
            "Operational standards stay when a key HOD resigns",
            "Reputation damage from unaddressed feedback is stopped",
            "Supply chain leakage at the receiving bay is plugged"
        ],
        teamUses: [
            "12-department technical modules",
            "Audit-ready evidence fields",
            "High-alert verification targets",
            "Institutional memory capture",
            "Real-time visibility for the GM",
            "Mobile-optimized reporting"
        ],
        mondayMorning: [
            "Every arrival room has a verified digital sign-off",
            "C-Form compliance is 100% auditable",
            "MEP vitals (DG/Chiller) are logged and monitored",
            "Linen and supply quality is spot-checked systematically",
            "Guest escalations are triaged in under 15 minutes",
            "The shift handover is a clean data transfer",
            "Asset decay is identified before breakdown",
            "The brand standard becomes a physical reality"
        ]
    },
    'healthcare_and_hospital_operations': {
        prevents: [
            "Clinical 'Never-Events' are targeted with WHO-aligned logic",
            "Medication errors are reduced via dual-verification protocols",
            "Bio-medical waste non-compliance risk is mitigated",
            "Wait-time inflation is identified through TAT monitoring",
            "Inventory expiry leakage in the Pharmacy is stopped",
            "Nursing bedside handovers become structured data streams",
            "Statutory license lapses (Fire/O2) are tracked and alert-ready",
            "Operational chaos during emergency codes is eliminated"
        ],
        teamUses: [
            "Critical Control Point (CCP) logs",
            "High-alert drug dual-verification",
            "WHO surgical safety integration",
            "Biomedical waste segregation audits",
            "Clinical TAT tracking engines",
            "Institutional safety memory"
        ],
        mondayMorning: [
            "The Crash Cart seal is verified and verifiable",
            "The OT 'Time-Out' is a mandatory system step",
            "Pharmacy cold-chain logs are 100% compliant",
            "Nursing superintendents see ward vitals instantly",
            "Patient grievances are captured and resolved",
            "Infrastructure (O2/DG) is at 100% readiness",
            "Audit-readiness (NABH/JCI) becomes a permanent state",
            "Patient trust is built through observable control"
        ]
    },
    'facility_management_blueprint': {
        prevents: [
            "Catastrophic utility failures via disciplined MEP checks",
            "Vendor SLA neglect is identified through parity audits",
            "Hidden energy wastage is caught through daily KWH tracking",
            "Safety hazards turn into incidents through lack of reporting",
            "Water quality issues are caught before occupant complaints",
            "Asset life is shortened by missed preventive maintenance",
            "Security perimeter gaps are identified daily",
            "Compliance fines from statutory license lapses are eliminated"
        ],
        teamUses: [
            "Hard FM mechanical vital logs",
            "Soft FM hygiene frequency tracking",
            "Vendor performance scorecards",
            "Utility economics engine",
            "Life-safety infrastructure audits",
            "Incident root-cause mapping"
        ],
        mondayMorning: [
            "Every chiller and DG unit has a verified daily vitals log",
            "Vendor staff presence is reconciled against the SLA",
            "Washroom hygiene is auditable hourly",
            "Energy spikes are identified within 24 hours",
            "Fire exit paths are physically confirmed clear",
            "Elevator auto-rescue systems are tested",
            "Occupant grievances are logged to resolution",
            "Infrastructure risk is mapped and visible"
        ]
    },
    'franchise_operations_pack': {
        prevents: [
            "Royalty leakage through daily sales reconciliations",
            "Brand dilution from inconsistent unit-level standards",
            "Supply chain violations from unvetted sourcing",
            "Regulatory fines from displayed license lapses",
            "Hidden franchisee distress through performance analytics",
            "High-risk behavior from unchecked unit managers",
            "Delayed unit launches through CAPEX milestone tracking",
            "Reputation damage from unmonitored local unit ORM"
        ],
        teamUses: [
            "Multi-unit mood dashboard",
            "Royalty protection reconcilers",
            "Visual standard parity audits",
            "Supply chain integrity trackers",
            "Unit performance leaderboards",
            "Global risk triage maps"
        ],
        mondayMorning: [
            "The CEO sees a unified mood score for all outlets",
            "Unit manager attendance is verified by 9:30 AM",
            "Brand signage and ambiance are photo-verified",
            "High-risk inventory is reconciled against the POS",
            "Local marketing campaigns are auditable",
            "Unit-level hygiene scores are observable",
            "Franchisee grievances are captured",
            "The entire network runs on one standard"
        ]
    },
    'cinema_operations_pack': {
        prevents: [
            "Black-screen events through rigorous DCP/KDM audits",
            "Concession profit leakage through yield logic",
            "Guest complaints via thermal and hygiene monitoring",
            "Life-safety tragedies through daily exit/PA checks",
            "Asset decay of expensive projection equipment",
            "Reputation damage from unmonitored ticket feedback",
            "Staff grooming and brand standard drift",
            "Statutory fines from Entertainment Tax or Fire lapses"
        ],
        teamUses: [
            "Projection sound/media QC logs",
            "Concession yield reconciliation engines",
            "Auditorium hygiene pulse audits",
            "Technical asset uptime trackers",
            "Guest service TAT monitors",
            "Life-safety exit protocols"
        ],
        mondayMorning: [
            "Every screen has a technical readiness sign-off",
            "Concession opening stock is 100% verified",
            "Auditorium temperatures are logged during peak",
            "Housekeeping sweeps are verified between shows",
            "Box office floats are reconciled",
            "Digital reputation signals are answered",
            "Projection rooms are at optimal thermal vitals",
            "Operational risk is visible to the head office"
        ]
    },
    'retail_operations_system': {
        prevents: [
            "Inventory shrinkage through disciplined cycle counts",
            "Brand dilution from inconsistent VM standards",
            "Loss of high-value assets through vault protocols",
            "Safety incidents in fitting rooms or high-load zones",
            "Legal Metrology fines from uncalibrated scales",
            "Revenue loss from dead stock through expiry logic",
            "Security breaches through perimeter lock-down audits",
            "Service collapse during peak hours via roster parity"
        ],
        teamUses: [
            "Visual merchandising planogram audits",
            "High-value asset shield protocols",
            "Inventory integrity cycle counts",
            "Metrology calibration logs",
            "POS and connectivity vitals",
            "Closure thermal/security seals"
        ],
        mondayMorning: [
            "Store opening readiness has a verified sign-off",
            "High-value items are reconciled in under 10 minutes",
            "Store signage and pricing are 100% accurate",
            "Staff grooming represents the brand standard",
            "Safety exits are confirmed clear",
            "Customer grievances are logged and triaged",
            "The daily sales target is briefed and understood",
            "Operational proof replaces manual follow-ups"
        ]
    }
};

export const defaultResolution: PackResolution = {
    prevents: [
        "Operational dependence on memory is eliminated",
        "Routine responsibilities become verifiable data",
        "Managerial chasing for updates is stopped",
        "Operational memory stays when staff resign",
        "Daily execution becomes visible across the group",
        "Assumptions are replaced by operational proof",
        "Compliance becomes a permanent state, not an event",
        "Brand standards are protected from local drift"
    ],
    teamUses: [
        "Daily task execution ledgers",
        "Assigned role-based responsibilities",
        "Built-in Trainer's Notes for every station",
        "Binary 'Done/Missed' verification status",
        "High-risk checkpoint targets",
        "Real-time operational updates"
    ],
    mondayMorning: [
        "Managers stop chasing for basic task updates",
        "Teams start their shift with a clear, assigned list",
        "Operational gaps become visible in minutes",
        "Training time for new staff is reduced significantly",
        "Work stops depending on the memory of key people",
        "Institutional knowledge is captured and protected",
        "Audit-readiness becomes an effortless daily reality",
        "The difference in control is immediate"
    ]
};
