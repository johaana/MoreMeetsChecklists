
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operating System",
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "The Sovereign v8.9 clinical engine. Hardening 200+ control points from WHO Surgical Safety to Mass Casualty protocols.",
    heroHeadline: "Zero-Risk Medical Operations. Audit-Ready.",
    heroSubheadline: "Standardize clinical and operational governance across every department in your facility with a logically-aware data engine.",
    pricingUrgency: "A single clinical error or one NABH/JCI audit failure costs 1000x more than this system.",
    consultingAnchor: 15000,
    icon: "hospital",
    badgeText: "V8.9 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads", "Admin Directors"],
    sampleItems: [
        { text: "<strong>Clinical Safety (WHO)</strong>: Pre-incision time-outs and dual-verification for high-alert drugs.", icon: "shield-check" },
        { text: "<strong>ICU & Ward Command</strong>: Bedside handover audits and crash-cart integrity tracking.", icon: "heart-pulse" },
        { text: "<strong>ER & Group Accident</strong>: Mass casualty triage protocols and ambulance dispatch vitals.", icon: "ambulance" },
        { text: "<strong>Pharmacy & Narcotics</strong>: Strict access logs and double-blind stock counts for controlled drugs.", icon: "pill" },
        { text: "<strong>TPA & Insurance Shield</strong>: 4-hour pre-auth pulse and unbilled consumable reconciliation.", icon: "banknote" },
        { text: "<strong>Diagnostics (Scanning)</strong>: X-ray/MRI uptime logs and radiation safety (AERB) compliance.", icon: "microscope" },
        { text: "<strong>Hospital Canteen (HACCP)</strong>: Zero-fail patient meal hygiene and vendor FSSAI audits.", icon: "utensils" },
        { text: "<strong>Reception & Queue</strong>: OPD wait-time monitoring and digital appointment sync.", icon: "users" }
    ],
    checklists: [
        {
            title: "Executive & Clinical Governance",
            department: "Clinical",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "High-level risk, sentinel events, and disaster readiness oversight.",
            icon: "crown",
            tasks: [
                { id: "H-EXE-01", description: "Review Sentinel Event Log for 100% root cause closure.", priority: "High", riskLevel: "High", consequence: "Recurring fatal errors and loss of license.", proof: "Log Audit", trainerNotes: "Check for 'Near-Miss' reporting frequency." },
                { id: "H-EXE-02", description: "Test 'Mass Casualty' siren and disaster command center.", priority: "High", riskLevel: "High", consequence: "Chaos during group accident arrival.", proof: "Drill Log", trainerNotes: "Verify backup communication line." },
                { id: "H-EXE-03", description: "Audit Consultant Credentialing: verify active council reg.", priority: "High", riskLevel: "High", consequence: "Criminal liability for the hospital.", proof: "Registry Audit", trainerNotes: "Cross-check with State Council portal." },
                { id: "H-EXE-04", description: "Review HAI (Infection) rates against JCI/NABH benchmarks.", priority: "High", riskLevel: "High", consequence: "Audit failure and increased patient stay.", proof: "Infection Log", trainerNotes: "Target HAI < 1% per 1000 bed days." },
                { id: "H-EXE-05", description: "Verify Professional Indemnity insurance for all consultants.", priority: "High", riskLevel: "High", consequence: "Uncovered litigation payout risk.", proof: "Policy File", trainerNotes: "Check expiry 60 days early." }
            ]
        },
        {
            title: "ER, ICU & Ward Command",
            department: "Operations",
            frequency: "Daily",
            role: "General Manager",
            summary: "Manages life-critical triage and bedside infrastructure.",
            icon: "heart-pulse",
            tasks: [
                { id: "H-ER-01", description: "ER Triage: Verify TAT from arrival to MD first-touch.", priority: "High", riskLevel: "High", consequence: "Death in waiting area; legal disaster.", proof: "TAT Log", trainerNotes: "Target triage in < 5 minutes." },
                { id: "H-ER-02", description: "Crash Cart: Verify lock-seal integrity and O2 pressure.", priority: "High", riskLevel: "High", consequence: "Failed resuscitation during cardiac arrest.", proof: "Seal Check", trainerNotes: "Replace cylinder if pressure < 1000 PSI." },
                { id: "H-ER-03", description: "Bedside Handover: SBAR protocol audit for 100% patients.", priority: "High", riskLevel: "High", consequence: "Critical info loss during shift change.", proof: "Handover Log", trainerNotes: "Must happen at the patient's bed." },
                { id: "H-ER-04", description: "High-Fall Risk: Verify side-rail and signage presence.", priority: "High", riskLevel: "Medium", consequence: "Patient injury and negligence claims.", proof: "Visual Check", trainerNotes: "Mandatory for all 65+ age patients." },
                { id: "H-ER-05", description: "Ambulance Vitals: Check AED battery and O2 levels.", priority: "High", riskLevel: "High", consequence: "Death during transit.", proof: "Fleet Check", trainerNotes: "Run engine test for 5 mins daily." }
            ]
        },
        {
            title: "TPA & Insurance Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Finance & Cashier",
            summary: "Protects the revenue pipeline and approval speed.",
            icon: "banknote",
            tasks: [
                { id: "H-TPA-01", description: "TPA Pre-Auth Pulse: Check status for all IP admissions.", priority: "High", riskLevel: "Medium", consequence: "Claim denial after expensive treatment.", proof: "Portal Sync", trainerNotes: "Target pre-auth in < 4 hours." },
                { id: "H-TPA-02", description: "Unbilled Consumable Audit: Reconcile Ward vs. Bill.", priority: "High", riskLevel: "Medium", consequence: "Silent profit leakage worth millions.", proof: "Match Sheet", trainerNotes: "Audit 10% of discharge files randomly." },
                { id: "H-TPA-03", description: "Insurance Query Pulse: Resolve deficiencies in < 24h.", priority: "Medium", riskLevel: "Low", consequence: "Delayed payments and cash-flow crunch.", proof: "Query Log", trainerNotes: "Escalate 'Deficiency' to doctor instantly." },
                { id: "H-TPA-04", description: "Reconcile POS digital settlements against bank captures.", priority: "High", riskLevel: "High", consequence: "Cashier-driven revenue theft.", proof: "Settlement Log", trainerNotes: "Report variance > ₹100." },
                { id: "H-TPA-05", description: "Verify advance deposit for elective surgery schedule.", priority: "High", riskLevel: "Low", consequence: "Post-surgery recovery disputes.", proof: "Deposit Log", trainerNotes: "Target 80% of estimated cost." }
            ]
        },
        {
            title: "Cleaning, Waste & Safety",
            department: "Safety",
            frequency: "Hourly",
            role: "EHS Officer",
            summary: "Bio-hazard compliance and facility sanitation command.",
            icon: "sparkles",
            tasks: [
                { id: "H-WST-01", description: "Bio-waste: Verify color-coded segregation at source.", priority: "High", riskLevel: "High", consequence: "PCB fines and infection outbreak.", proof: "Visual Audit", trainerNotes: "Check yellow bins for non-bio waste." },
                { id: "H-WST-02", description: "Sharps Management: Verify bins are < 75% full.", priority: "High", riskLevel: "High", consequence: "Needle-stick injury to staff.", proof: "Visual Check", trainerNotes: "Do not shake or overfill bins." },
                { id: "H-WST-03", description: "Hourly Restroom Audit: Verify sanitation frequency.", priority: "High", riskLevel: "Low", consequence: "Major driver of negative CX scores.", proof: "Hourly Sheet", trainerNotes: "Check soap and sanitizer stock." },
                { id: "H-WST-04", description: "Fire Exit Pulse: Ensure corridors are 100% trolley-free.", priority: "High", riskLevel: "High", consequence: "Fatal trap during Code Red.", proof: "Patrol Log", trainerNotes: "Physically open every exit door." },
                { id: "H-WST-05", description: "Spill Kit Audit: Verify availability in Lab/OT/Chemo.", priority: "High", riskLevel: "High", consequence: "Fatal exposure to toxic fluids.", proof: "Stock Check", trainerNotes: "Check for goggles and bleach." }
            ]
        },
        {
            title: "Clinical Training & Certs",
            department: "HR",
            frequency: "Monthly",
            role: "HR Manager",
            summary: "Governs staff competency and legal medical licenses.",
            icon: "graduation-cap",
            tasks: [
                { id: "H-HR-01", description: "Verify active Nursing Registration for 100% staff.", priority: "High", riskLevel: "High", consequence: "Criminal liability for unlicensed care.", proof: "Cert Registry", trainerNotes: "No floor duty without active ID." },
                { id: "H-HR-02", description: "Audit BLS/ACLS certification for ICU/ER roster.", priority: "High", riskLevel: "High", consequence: "Failure to perform life support.", proof: "Matrix File", trainerNotes: "Renew 30 days before expiry." },
                { id: "H-HR-03", description: "Conduct training on 'Read-Back' for verbal orders.", priority: "High", riskLevel: "High", consequence: "Wrong drug/dose administration.", proof: "Quiz Log", trainerNotes: "Test nurse's phonetic clarity." },
                { id: "H-HR-04", description: "Staff Health Pulse: verify Med-Certs for F&B handlers.", priority: "Medium", riskLevel: "Medium", consequence: "Infection spread to patients.", proof: "Med File", trainerNotes: "Includes stool test yearly." },
                { id: "H-HR-05", description: "Uniform & Grooming Audit at morning briefings.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional brand image.", proof: "Attendance Log", trainerNotes: "Check ID badges and hairnets." }
            ]
        },
        {
            title: "Imaging, MEP & Engineering",
            department: "Technical",
            frequency: "Daily",
            role: "Technical Lead",
            summary: "Uptime governance for scanning and life-support assets.",
            icon: "wrench",
            tasks: [
                { id: "H-TEC-01", description: "Verify OT/ICU UPS load-test and battery bank health.", priority: "High", riskLevel: "High", consequence: "Patient death during blackout.", proof: "Voltage Log", trainerNotes: "Run 10-min load test weekly." },
                { id: "H-TEC-02", description: "Oxygen Plant: Log purity and pressure hourly.", priority: "High", riskLevel: "High", consequence: "Total supply failure (Fatal).", proof: "Digital Screen", trainerNotes: "Target purity > 93%." },
                { id: "H-TEC-03", description: "Inspect MRI/CT scan area for radiation safety leakage.", priority: "High", riskLevel: "High", consequence: "AERB non-compliance and health risk.", proof: "TLD Report", trainerNotes: "Verify lead apron integrity." },
                { id: "H-TEC-04", description: "Check RO water TDS for Dialysis Unit (Target <50).", priority: "High", riskLevel: "High", consequence: "Patient blood contamination.", proof: "TDS Reading", trainerNotes: "Check pre-filter pressure." },
                { id: "H-TEC-05", description: "Verify HIS/PACS server backup and cloud sync.", priority: "High", riskLevel: "High", consequence: "Irrecoverable loss of medical history.", proof: "Backup Log", trainerNotes: "Check sync at 2 AM daily." }
            ]
        },
        {
            title: "Reception, Queue & ORM",
            department: "Admin",
            frequency: "Daily",
            role: "Customer Experience Lead",
            summary: "Protects the reputation and OPD pipeline flow.",
            icon: "megaphone",
            tasks: [
                { id: "H-CX-01", description: "OPD Wait-Time Pulse: verify TAT is < 30 minutes.", priority: "Medium", riskLevel: "Low", consequence: "Patient walk-outs and review drop.", proof: "Token Report", trainerNotes: "Alert GM if queue exceeds 1 hour." },
                { id: "H-CX-02", description: "Review Pulse: Reply to Google/Practo feedback <24h.", priority: "High", riskLevel: "Medium", consequence: "Reputation damage and volume drop.", proof: "Dashboard", trainerNotes: "Address 1-star reviews first." },
                { id: "H-CX-03", description: "Doctor Arrival: Verify MDs match appointment starts.", priority: "High", riskLevel: "Low", consequence: "Massive queue frustration.", proof: "Roster Match", trainerNotes: "Notify patients if MD is > 15m late." },
                { id: "H-CX-04", description: "Social Media: Answer all appointment DMs in < 30m.", priority: "Medium", riskLevel: "Low", consequence: "Lost revenue via unread inquiries.", proof: "Inbox Clear", trainerNotes: "Confirm appointments via WhatsApp." },
                { id: "H-CX-05", description: "Check availability of drinking water in wait areas.", priority: "Low", riskLevel: "Low", consequence: "Poor patient experience scores.", proof: "Visual Check", trainerNotes: "Stock clean cups every 2 hours." }
            ]
        },
        {
            title: "Pharmacy, Vendors & Canteen",
            department: "Logistics",
            frequency: "Daily",
            role: "Logistics Lead",
            summary: "Profit protection and supplier quality command.",
            icon: "truck",
            tasks: [
                { id: "H-LOG-01", description: "Narcotics Vault: Witnessed double-count of all units.", priority: "High", riskLevel: "High", consequence: "Criminal theft and diversion.", proof: "Dual-Sign Log", trainerNotes: "Conduct at end of every shift." },
                { id: "H-LOG-02", description: "Canteen HACCP: Verify patient meal temp is > 65°C.", priority: "High", riskLevel: "High", consequence: "Food poisoning in sick patients.", proof: "Food Log", trainerNotes: "Check trolleys before dispatch." },
                { id: "H-LOG-03", description: "Vendor Audit: Verify FSSAI certs for canteen dairy/meat.", priority: "High", riskLevel: "High", consequence: "Legal liability for unvetted sourcing.", proof: "License File", trainerNotes: "Update repository every 6 months." },
                { id: "H-LOG-04", description: "Cold Chain: Log Pharmacy fridge temps (2-8°C).", priority: "High", riskLevel: "High", consequence: "Ineffective high-cost biologics.", proof: "Temp Log", trainerNotes: "Log at 8 AM and 8 PM." },
                { id: "H-LOG-05", description: "Receiving: Reconcile weight vs. invoice for bulk meds.", priority: "Medium", riskLevel: "Medium", consequence: "Paying for missing high-value stock.", proof: "Scale Note", trainerNotes: "Check for box-seal tampering." }
            ]
        }
    ]
};
