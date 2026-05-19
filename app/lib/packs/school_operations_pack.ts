
import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operations System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c12368-2c26-4e58-b1de-149b80b292e7',
    category: "Education",
    description: "The definitive Sovereign v17.8 engine for educational institutions. Hardening 192 technical control points across Academic Continuity, POCSO Safety, and Campus Infrastructure.",
    heroHeadline: "Protect Your Students. Secure Your Institution.",
    heroSubheadline: "Track academic pacing, monitor student safety, and stay in control of campus operations—across 20 specialized roles.",
    pricingUrgency: "A single safety 'never event' or one board accreditation failure costs 100x more than this entire system.",
    consultingAnchor: 10000,
    icon: "school",
    badgeText: "V17.8 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Principals", "Trustees", "Transport Managers", "School Nurses", "Academic Coordinators"],
    sampleItems: [
        { text: "<strong>Academic Flow Engine</strong>: Syllabus pacing control and lesson plan adherence tracking.", icon: "book-open" },
        { text: "<strong>Student Safety Shield</strong>: POCSO compliance, bullying prevention, and intruder alert protocols.", icon: "shield-alert" },
        { text: "<strong>Examination Command</strong>: Zero-fail paper security and invigilation assignment systems.", icon: "file-lock" },
        { text: "<strong>Infirmary Vitals</strong>: Daily AED status, allergy matrix sync, and clinical drug logs.", icon: "heart-pulse" },
        { text: "<strong>Transport Integrity</strong>: 'No-child-left-behind' bus walkthroughs and driver sobriety logs.", icon: "bus" },
        { text: "<strong>Science Lab Security</strong>: Chemical storage segregation and experiment safety audits.", icon: "test-tube" }
    ],
    checklists: [
        {
            title: "Campus Command & Governance",
            department: "Executive",
            frequency: "Daily",
            role: "Principal / Campus Director",
            summary: "High-level strategic oversight of campus safety, academic pacing, and institutional liability.",
            icon: "crown",
            tasks: [
                { id: "S-EXE-01", technicalProtocol: "Child Protection Audit", floorAction: "Review Behavior Log for any flagged POCSO or safety incidents.", priority: "High", riskLevel: "High", consequence: "Legal prosecution and loss of license.", proof: "Incident Log", verificationRequired: true },
                { id: "S-EXE-02", technicalProtocol: "Academic Pacing Sync", floorAction: "Review syllabus completion report across all grades.", priority: "High", riskLevel: "Medium", consequence: "Failure to meet curriculum deadlines.", proof: "ADE Dashboard" },
                { id: "S-EXE-03", technicalProtocol: "Statutory License Validity", floorAction: "Verify Fire NOC, Building Stability, and Affiliation status.", priority: "High", riskLevel: "High", consequence: "Government sealing of campus.", proof: "License File", verificationRequired: true },
                { id: "S-EXE-04", technicalProtocol: "Parent Escalation Review", floorAction: "Triage all unresolved safety/discipline emails < 12h.", priority: "Medium", riskLevel: "Low", consequence: "Reputational fallout and student attrition.", proof: "Email Log" },
                { id: "S-EXE-05", technicalProtocol: "Staff Background Pulse", floorAction: "Verify 100% vetting completion for any new campus entrants.", priority: "High", riskLevel: "High", consequence: "Entry of blacklisted individuals.", proof: "HR Register", verificationRequired: true }
            ]
        },
        {
            title: "Academic Flow Control",
            department: "Academic",
            frequency: "Daily",
            role: "Vice Principal (Academic Head)",
            summary: "Governance for curriculum delivery and teacher performance.",
            icon: "graduation-cap",
            tasks: [
                { id: "S-ACD-01", technicalProtocol: "Lesson Plan Adherence", floorAction: "Spot check 5 classrooms for lesson plan alignment.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent learning delivery.", proof: "Classroom Log" },
                { id: "S-ACD-02", technicalProtocol: "Teacher Allocation Sync", floorAction: "Confirm 100% coverage for absent staff before first bell.", priority: "High", riskLevel: "Low", consequence: "Unsupervised classrooms.", proof: "Roster Match", verificationRequired: true },
                { id: "S-ACD-03", technicalProtocol: "Academic Calendar Watch", floorAction: "Verify prep status for upcoming unit tests/events.", priority: "Low", riskLevel: "Low", consequence: "Last-minute coordination chaos.", proof: "Calendar Update" }
            ]
        },
        {
            title: "Examination Integrity",
            department: "Academic",
            frequency: "Per Exam",
            role: "Examination Controller",
            summary: "Zero-fail protocols for high-stakes assessments.",
            icon: "file-lock",
            tasks: [
                { id: "S-EXM-01", technicalProtocol: "Paper Custody Chain", floorAction: "Witness physical sealing of question paper envelopes.", priority: "High", riskLevel: "High", consequence: "Exam leak and total re-conduct cost.", proof: "Seal Log", verificationRequired: true },
                { id: "S-EXM-02", technicalProtocol: "Invigilation Grid", floorAction: "Verify staff positioning matches duty roster.", priority: "High", riskLevel: "Medium", consequence: "Examination malpractice.", proof: "Attendance Log" },
                { id: "S-EXM-03", technicalProtocol: "Answer Sheet Archival", floorAction: "Confirm 100% count of collected sheets pre-storage.", priority: "High", riskLevel: "High", consequence: "Lost student results.", proof: "Count Sheet", verificationRequired: true }
            ]
        },
        {
            title: "Student Wellbeing & Counseling",
            department: "Student Support",
            frequency: "Daily",
            role: "School Counselor / Wellbeing Officer",
            summary: "Manages the psychological safety and emotional pulse of students.",
            icon: "heart-handshake",
            tasks: [
                { id: "S-WEL-01", technicalProtocol: "Bullying Signal Scan", floorAction: "Review peer-conflict logs for recurring patterns.", priority: "High", riskLevel: "High", consequence: "Undetected student trauma.", proof: "Conflict Registry" },
                { id: "S-WEL-02", technicalProtocol: "Inclusive Support Log", floorAction: "Update 1-on-1 progress for students with special needs.", priority: "Medium", riskLevel: "Low", consequence: "Learning gap for vulnerable students.", proof: "Progress Note" }
            ]
        },
        {
            title: "Infirmary & Clinical Safety",
            department: "Medical",
            frequency: "Daily",
            role: "Health & Medical Room In-Charge",
            summary: "Zero-fail readiness for on-campus medical events.",
            icon: "heart-pulse",
            tasks: [
                { id: "S-MED-01", technicalProtocol: "AED & Oxygen Pulse", floorAction: "Verify battery status and manifold pressure.", priority: "High", riskLevel: "High", consequence: "Fatal resuscitation failure.", proof: "Vitals Log", verificationRequired: true },
                { id: "S-MED-02", technicalProtocol: "Allergy Matrix Sync", floorAction: "Cross-check cafeteria special-diet list for new alerts.", priority: "High", riskLevel: "High", consequence: "Anaphylactic shock incident.", proof: "Matrix Match", verificationRequired: true },
                { id: "S-MED-03", technicalProtocol: "Medicine Expiry Audit", floorAction: "Physically check dates on 10 random shelf items.", priority: "Medium", riskLevel: "High", consequence: "Ineffective treatment.", proof: "Expiry Log" }
            ]
        },
        {
            title: "Transport & Bus Security",
            department: "Logistics",
            frequency: "Daily",
            role: "Transport Coordinator (Bus Operations)",
            summary: "Governance for the student commute and vehicle safety.",
            icon: "bus",
            tasks: [
                { id: "S-TRA-01", technicalProtocol: "Driver Sobriety Pulse", floorAction: "Execute random breathalyzer test pre-dispatch.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash liability.", proof: "Test Note", verificationRequired: true },
                { id: "S-TRA-02", technicalProtocol: "No-Child-Left-Behind", floorAction: "Physically touch the back seat of every bus post-route.", priority: "High", riskLevel: "High", consequence: "Child entrapment (Fatal).", proof: "Walkthrough Log", verificationRequired: true },
                { id: "S-TRA-03", technicalProtocol: "GPS Route Monitoring", floorAction: "Log any route deviation > 15 minutes.", priority: "Low", riskLevel: "Medium", consequence: "Parental anxiety and trust loss.", proof: "System Screen" }
            ]
        },
        {
            title: "Science Lab Safety",
            department: "Academic",
            frequency: "Daily",
            role: "Lab Assistant (Science Labs)",
            summary: "Manages hazardous materials and experiment protocols.",
            icon: "test-tube",
            tasks: [
                { id: "S-LAB-01", technicalProtocol: "Chemical Storage Seal", floorAction: "Verify Acid/Base segregation in locked cabinets.", priority: "High", riskLevel: "High", consequence: "Toxic gas release / explosion.", proof: "Visual Check", verificationRequired: true },
                { id: "S-LAB-02", technicalProtocol: "Eye-wash Station Test", floorAction: "Run 10s flush; verify clear water flow.", priority: "High", riskLevel: "High", consequence: "Permanent chemical eye damage.", proof: "Test Log", verificationRequired: true }
            ]
        },
        {
            title: "Campus Security & Gate",
            department: "Security",
            frequency: "Daily",
            role: "Security Supervisor",
            summary: "Hardens the perimeter and visitor control.",
            icon: "shield-check",
            tasks: [
                { id: "S-SEC-01", technicalProtocol: "Visitor ID Capture", floorAction: "Verify 100% ID logging at the main entrance.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit", verificationRequired: true },
                { id: "S-SEC-02", technicalProtocol: "CCTV Sync Validation", floorAction: "Confirm 30-day recording backup is operational.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for incidents.", proof: "System Check" }
            ]
        },
        {
            title: "Digital Learning & IT",
            department: "Operations",
            frequency: "Daily",
            role: "IT / Digital Learning Coordinator",
            summary: "Digital infrastructure and cybersecurity.",
            icon: "server",
            tasks: [
                { id: "S-IT-01", technicalProtocol: "Firewall Content Filter", floorAction: "Verify blocking of restricted web categories.", priority: "High", riskLevel: "High", consequence: "Student exposure to harmful content.", proof: "System Log", verificationRequired: true },
                { id: "S-IT-02", technicalProtocol: "Smart-board Readiness", floorAction: "Check connectivity in grade 10-12 wings.", priority: "Low", riskLevel: "Low", consequence: "Teaching interruption.", proof: "Walkthrough" }
            ]
        },
        {
            title: "Facility Vitals & Maintenance",
            department: "Facilities",
            frequency: "Daily",
            role: "Facility & Maintenance Supervisor",
            summary: "MEP assets and infrastructure safety.",
            icon: "wrench",
            tasks: [
                { id: "S-FAC-01", technicalProtocol: "Potable Water TDS", floorAction: "Log purity at main student drinking points.", priority: "High", riskLevel: "High", consequence: "Water-borne disease outbreak.", proof: "TDS Reading", verificationRequired: true },
                { id: "S-FAC-02", technicalProtocol: "Electrical Hotspot Scan", floorAction: "IR scan of main distribution panel.", priority: "High", riskLevel: "High", consequence: "Overnight short-circuit fire.", proof: "Scan Log", verificationRequired: true }
            ]
        },
        {
            title: "Library & Resources",
            department: "Operations",
            frequency: "Daily",
            role: "Library In-Charge",
            summary: "Resource archival and age-appropriate gating.",
            icon: "library",
            tasks: [
                { id: "S-LIB-01", technicalProtocol: "Content Rating Audit", floorAction: "Spot check new arrivals for age-tags.", priority: "Medium", riskLevel: "Low", consequence: "Parental complaints.", proof: "Catalog Match" }
            ]
        },
        {
            title: "Hygiene & Sanitation",
            department: "Facilities",
            frequency: "Hourly",
            role: "Cleanliness & Hygiene Staff Lead",
            summary: "Surface sanitization and washroom parity.",
            icon: "sparkles",
            tasks: [
                { id: "S-HYG-01", technicalProtocol: "Washroom Pulse", floorAction: "Audit 60-min cleaning log for student restrooms.", priority: "High", riskLevel: "Low", consequence: "Primary driver of parent rage.", proof: "Hourly Sheet" }
            ]
        },
        {
            title: "Sustainability & ESG",
            department: "ESG",
            frequency: "Daily",
            role: "Facility & Maintenance Supervisor",
            summary: "Environmental discipline and resource tracking.",
            icon: "leaf",
            tasks: [
                { id: "S-ESG-01", technicalProtocol: "Paper Usage Pulse", floorAction: "Log reams used vs recycling weight.", priority: "Low", riskLevel: "Low", consequence: "Inefficient waste.", proof: "Weight Slip" },
                { id: "S-ESG-02", technicalProtocol: "Electricity Benchmark", floorAction: "Compare daily KWH meter vs occupancy load.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored energy waste.", proof: "Meter Match" }
            ]
        }
    ]
};
