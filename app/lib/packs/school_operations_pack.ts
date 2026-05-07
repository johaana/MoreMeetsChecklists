
import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c12368-2c26-4e58-b1de-149b80b292e7',
    category: "Education",
    description: "The definitive Sovereign v11.9 safety safeguard for educational institutions. Moving beyond admin into Child Safety Infrastructure with 125+ technical control points.",
    heroHeadline: "Child Safety Infrastructure. Zero-Risk Education.",
    heroSubheadline: "Protect students and mitigate institutional liability with forensic protocols for POCSO, Transport, Early Years, and Exam Integrity.",
    pricingUrgency: "In education, a single safety 'never event' isn't just expensive—it's an institutional catastrophe. This system is the safeguard.",
    consultingAnchor: 10000,
    icon: "school",
    badgeText: "Safety Critical",
    badgeVariant: "destructive",
    whoIsItFor: ["School Principals", "Trustees & Board Members", "Heads of Administration", "Transport Managers", "Registrars"],
    sampleItems: [
        { text: "<strong>POCSO & Duty of Care</strong>: Mandatory staff vetting, toilet supervision logs, and classroom blind-spot monitoring.", icon: "shield-check" },
        { text: "<strong>Early Years Welfare</strong>: Authorized pickup guards, toy sanitization, and nap-room hygiene for Pre-Primary wings.", icon: "baby" },
        { text: "<strong>Board Exam Integrity</strong>: Secure storage (dual-key paper safe), hall masking, and invigilator lockdowns.", icon: "file-signature" },
        { text: "<strong>Quiet Signs (Welfare)</strong>: Identifying subtle markers of bullying, distress, or absentee patterns before they escalate.", icon: "eye" },
        { text: "<strong>Transport Command</strong>: 'No-child-left-behind' walkthroughs and breathalyzer logs for all route drivers.", icon: "bus" },
        { text: "<strong>Canteen & FSSAI</strong>: Zero-junk zone patrolling and cold-chain logs for student meal safety.", icon: "utensils" },
        { text: "<strong>Infrastructure Resilience</strong>: Zero-fail fire NOC logs, playground structural audits, and electrical heat scans.", icon: "wrench" }
    ],
    checklists: [
        {
            title: "Principal Governance & POCSO",
            department: "Executive",
            frequency: "Weekly",
            role: "Principal / Director",
            summary: "Institutional risk, child protection (POCSO), and academic integrity oversight.",
            icon: "crown",
            tasks: [
                { id: "SC-EXE-01", technicalProtocol: "POCSO Compliance Audit", floorAction: "Verify 100% staff attendance at quarterly POCSO awareness workshops.", priority: "High", riskLevel: "High", consequence: "Severe legal liability and criminal charges for the Board.", proof: "Training Matrix" },
                { id: "SC-EXE-02", technicalProtocol: "Background Vetting Review", floorAction: "Audit 5 random staff files for valid police verification certificates.", priority: "High", riskLevel: "High", consequence: "Unauthorized person with criminal history on campus.", proof: "Registry Audit" },
                { id: "SC-EXE-03", technicalProtocol: "Abuse Escalation Drill", floorAction: "Verify safe-reporting boxes are functional and privacy is maintained.", priority: "High", riskLevel: "High", consequence: "Undetected student abuse and legal negligence.", proof: "Incident Log" },
                { id: "SC-EXE-04", technicalProtocol: "Statutory Affiliation Sync", floorAction: "Check validity of CBSE/ICSE/State Board recognition papers.", priority: "High", riskLevel: "High", consequence: "Loss of recognition and parent panic.", proof: "License File" },
                { id: "SC-EXE-05", technicalProtocol: "Fire NOC & Insurance Audit", floorAction: "Verify Public Liability insurance and Fire NOC are in-date.", priority: "High", riskLevel: "High", consequence: "Premises sealing by government authorities.", proof: "Cert File" },
                { id: "SC-EXE-06", technicalProtocol: "Staff Churn Pattern Watch", floorAction: "Review resignation patterns: identify potential toxic leadership zones.", priority: "Medium", riskLevel: "Low", consequence: "High recruitment costs and academic drift.", proof: "HR Dashboard" },
                { id: "SC-EXE-07", technicalProtocol: "Parent Feedback Sentiment", floorAction: "Review keywords in official complaints from the last 7 days.", priority: "Medium", riskLevel: "Low", consequence: "Viral reputation damage on social media.", proof: "CSAT Report" },
                { id: "SC-EXE-08", technicalProtocol: "Academic Progress Parity", floorAction: "Verify curriculum delivery timeline against the annual calendar.", priority: "Low", riskLevel: "Low", consequence: "Syllabus lag and parent anxiety.", proof: "Curriculum Log" },
                { id: "SC-EXE-09", technicalProtocol: "Digital Marks Backup", floorAction: "Audit cloud-sync status for all student performance history.", priority: "Medium", riskLevel: "Medium", consequence: "Data loss during server failure.", proof: "System Log" },
                { id: "SC-EXE-10", technicalProtocol: "Final Board Sign-off", floorAction: "Execute weekly strategic governance summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of board-level oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Early Years & Pre-Primary Welfare",
            department: "Pre-Primary",
            frequency: "Daily",
            role: "Head of Pre-Primary",
            summary: "Niche protocols for nursery and kindergarten safety and hygiene.",
            icon: "baby",
            tasks: [
                { id: "SC-EY-01", technicalProtocol: "Authorized Pickup Guard", floorAction: "Verify 100% ID-match for guardian handover at gate.", priority: "High", riskLevel: "High", consequence: "Kidnapping or unauthorized removal of child.", proof: "Handover Register" },
                { id: "SC-EY-02", technicalProtocol: "Choking Hazard Floor Scan", floorAction: "Search floor for small parts/beads before students arrive.", priority: "High", riskLevel: "High", consequence: "Fatal choking incident (Never-event).", proof: "Walkthrough Log" },
                { id: "SC-EY-03", technicalProtocol: "Toy & Sensory Sanitization", floorAction: "Sanitize all common-use toys with non-toxic solution.", priority: "High", riskLevel: "Medium", consequence: "Rapid spread of Hand-Foot-Mouth disease.", proof: "Cleaning Note" },
                { id: "SC-EY-04", technicalProtocol: "Nap Room Hygiene Pulse", floorAction: "Verify fresh bedding and UV-sanitized nap mats.", priority: "Medium", riskLevel: "Low", consequence: "Infection risk and hygiene complaints.", proof: "HK Log" },
                { id: "SC-EY-05", technicalProtocol: "Diapering Area Biosecurity", floorAction: "Verify gloves and sanitized disposal at changing stations.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination and odors.", proof: "Visual Audit" },
                { id: "SC-EY-06", technicalProtocol: "Washroom Assistance Log", floorAction: "Audit attendant sign-offs for child washroom help.", priority: "Medium", riskLevel: "Medium", consequence: "Child left unsupervised in water-zones.", proof: "Supervision Sheet" },
                { id: "SC-EY-07", technicalProtocol: "Allergy Alert Sync", floorAction: "Check red-flag allergy notes for today's snacks.", priority: "High", riskLevel: "High", consequence: "Fatal anaphylactic shock.", proof: "Feeding Matrix" },
                { id: "SC-EY-08", technicalProtocol: "Sand-Pit Safety Sweep", floorAction: "Check sand-pit for debris or animal intrusion.", priority: "Medium", riskLevel: "Medium", consequence: "Bites or skin infections.", proof: "Visual Check" },
                { id: "SC-EY-09", technicalProtocol: "Quiet Room Mood Watch", floorAction: "Check on students in the 'rest zone' for signs of distress.", priority: "Medium", riskLevel: "Low", consequence: "Undetected emotional trauma.", proof: "Observation Log" },
                { id: "SC-EY-10", technicalProtocol: "Evening Dispersal Seal", floorAction: "Final check of lockers and cubbies for forgotten items.", priority: "Low", riskLevel: "Low", consequence: "Parent frustration.", proof: "Closure Log" }
            ]
        },
        {
            title: "Quiet Signs & Student Welfare",
            department: "Welfare",
            frequency: "Daily",
            role: "School Counselor / Lead Warden",
            summary: "Identifying subtle markers of distress, bullying, and patterns of risk.",
            icon: "eye",
            tasks: [
                { id: "SC-WEL-01", technicalProtocol: "Student Mood Watch", floorAction: "Log students showing sudden withdrawal or aggression.", priority: "Medium", riskLevel: "Medium", consequence: "Undetected bullying or mental health crisis.", proof: "Welfare Notes" },
                { id: "SC-WEL-02", technicalProtocol: "Absentee Pattern Pulse", floorAction: "Identify students with >3 consecutive days of absence.", priority: "High", riskLevel: "Medium", consequence: "Undetected illness or child protection risk at home.", proof: "Attendance Report" },
                { id: "SC-WEL-03", technicalProtocol: "Bullying Hotspot Patrol", floorAction: "Audit supervision in back-alleys and gym corridors during recess.", priority: "High", riskLevel: "High", consequence: "Student harassment and PR damage.", proof: "Patrol Log" },
                { id: "SC-WEL-04", technicalProtocol: "Counselling Room Privacy", floorAction: "Verify room is accessible and conversations are unobserved.", priority: "High", riskLevel: "Low", consequence: "Student fear of reporting issues.", proof: "Privacy Audit" },
                { id: "SC-WEL-05", technicalProtocol: "Parent Escalation Bridge", floorAction: "Log all high-stakes parent calls for emotional welfare.", priority: "Medium", riskLevel: "Low", consequence: "Legal dispute over lack of communication.", proof: "Comms Log" },
                { id: "SC-WEL-06", technicalProtocol: "Cyber-Bullying Signal", floorAction: "Check student councils for rumors of online harassment.", priority: "Medium", riskLevel: "High", consequence: "Viral peer-to-peer digital abuse.", proof: "Safe Report" },
                { id: "SC-WEL-07", technicalProtocol: "Safe reporting Access", floorAction: "Check if 'Helpline' numbers are posted in senior washrooms.", priority: "Low", riskLevel: "Low", consequence: "Students don't know where to seek help.", proof: "Photo" },
                { id: "SC-WEL-08", technicalProtocol: "Exam Stress Triage", floorAction: "Check in with board-year students for visible burnout.", priority: "Medium", riskLevel: "Low", consequence: "Student panic/collapse during tests.", proof: "Welfare Diary" },
                { id: "SC-WEL-09", technicalProtocol: "Digital Welfare Monitoring", floorAction: "Audit anonymous reporting channels for peer-to-peer digital abuse.", priority: "High", riskLevel: "High", consequence: "Severe psychological harm and institutional negligence.", proof: "Safe Report Log" },
                { id: "SC-WEL-10", technicalProtocol: "Welfare Closure sign-off", floorAction: "Daily handover of critical mood alerts.", priority: "High", riskLevel: "Low", consequence: "Loss of continuity in student care.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Board Exam & Academic Integrity",
            department: "Academics",
            frequency: "Per Exam Cycle",
            role: "Examination In-charge",
            summary: "Zero-fail protocols for high-stakes testing and paper security.",
            icon: "file-signature",
            tasks: [
                { id: "SC-EXM-01", technicalProtocol: "Paper Safe Room Custody", floorAction: "Verify dual-key access and CCTV focal point on safe.", priority: "High", riskLevel: "High", consequence: "Paper leak and total institutional shutdown.", proof: "Log Audit" },
                { id: "SC-EXM-02", technicalProtocol: "Exam Hall Masking", floorAction: "Ensure all educational charts/maps are covered.", priority: "High", riskLevel: "Medium", consequence: "Audit failure and mass cheating risk.", proof: "Visual Check" },
                { id: "SC-EXM-03", technicalProtocol: "Mobile Lockdown Register", floorAction: "Collect and bag all invigilator phones 30 min pre-exam.", priority: "High", riskLevel: "High", consequence: "Digital leak of question paper.", proof: "Device Log" },
                { id: "SC-EXM-04", technicalProtocol: "Desk Spacing Parity", floorAction: "Verify 1.5m gap between all student desks.", priority: "Medium", riskLevel: "Medium", consequence: "Disqualification of exam center.", proof: "Measurement Log" },
                { id: "SC-EXM-05", technicalProtocol: "Roll No. Parity Audit", floorAction: "Check desk-slips match the master attendance sheet.", priority: "High", riskLevel: "Low", consequence: "Impersonation fraud.", proof: "Audit Sheet" },
                { id: "SC-EXM-06", technicalProtocol: "Toilet Sweep (Pre-Exam)", floorAction: "Inspect cisterns and vents for concealed cheat-sheets.", priority: "High", riskLevel: "Medium", consequence: "Organized cheating.", proof: "Patrol Log" },
                { id: "SC-EXM-07", technicalProtocol: "UPS Load Resilience", floorAction: "Test power backup for hall lighting/fans.", priority: "High", riskLevel: "Low", consequence: "Student panic during power flip.", proof: "Voltage Log" },
                { id: "SC-EXM-08", technicalProtocol: "Invigilator Punctuality", floorAction: "Confirm 100% presence 60 min pre-start.", priority: "Medium", riskLevel: "Low", consequence: "Chaos at the hall gates.", proof: "Attendance Log" },
                { id: "SC-EXM-09", technicalProtocol: "Answer Sheet Sealing", floorAction: "Witness witnessed seal of bundles for transit.", priority: "High", riskLevel: "High", consequence: "Tampering or loss of sheets.", proof: "Seal Witness Log" },
                { id: "SC-EXM-10", technicalProtocol: "Final Integrity Sign-off", floorAction: "Daily exam command summary initials.", priority: "High", riskLevel: "Low", consequence: "Center-head liability.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Transport Command & Safety",
            department: "Transport",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "School bus mechanical safety and 'Child Left Behind' prevention.",
            icon: "bus",
            tasks: [
                { id: "SC-LOG-01", technicalProtocol: "Pre-Trip Mechanical Pulse", floorAction: "Check brakes, tires, and lights on 100% of fleet.", priority: "High", riskLevel: "High", consequence: "Mechanical accident during trip.", proof: "Driver Sign-off" },
                { id: "SC-LOG-02", technicalProtocol: "Empty Bus Walkthrough", floorAction: "Walk to the back seat after every drop-off cycle.", priority: "High", riskLevel: "High", consequence: "Child left behind (Fatal Never-Event).", proof: "Secondary Sign-off" },
                { id: "SC-LOG-03", technicalProtocol: "GPS/CCTV Connectivity", floorAction: "Verify all buses are online on the tracking dash.", priority: "High", riskLevel: "High", consequence: "Inability to find bus during emergency.", proof: "System Screen" },
                { id: "SC-LOG-04", technicalProtocol: "Driver Sobriety Test", floorAction: "Execute random breathalyzer checks at 7:00 AM.", priority: "High", riskLevel: "High", consequence: "Catastrophic mass-casualty crash.", proof: "Test Note" },
                { id: "SC-LOG-05", technicalProtocol: "Attendant Presence Pulse", floorAction: "Verify female attendant is on-board for all junior routes.", priority: "High", riskLevel: "High", consequence: "Safety breach and legal negligence.", proof: "Roster Check" },
                { id: "SC-LOG-06", technicalProtocol: "Identity Mismatch Escalation", floorAction: "Execute 'Lockdown-at-Gate' protocol if guardian ID does not match card.", priority: "High", riskLevel: "High", consequence: "Kidnapping or unauthorized removal of child.", proof: "Incident Log" },
                { id: "SC-LOG-07", technicalProtocol: "First Aid Kit Seal", floorAction: "Verify seals on bus medical and fire gear.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat route injuries.", proof: "Seal Log" },
                { id: "SC-LOG-08", technicalProtocol: "Speed Limit Adherence", floorAction: "Audit GPS reports for any bus > 40km/h.", priority: "Medium", riskLevel: "Medium", consequence: "Increased accident risk.", proof: "Speed Report" },
                { id: "SC-LOG-09", technicalProtocol: "Bus Interior Hygiene", floorAction: "Inspect for dust, sharp metal, or trash in cabins.", priority: "Low", riskLevel: "Low", consequence: "Poor brand image.", proof: "Visual Check" },
                { id: "SC-LOG-10", technicalProtocol: "Transport Handoff", floorAction: "Final signature on vehicle key-log.", priority: "High", riskLevel: "Low", consequence: "Unauthorized vehicle use.", proof: "Signed Log" }
            ]
        },
        {
            title: "Campus Security & Perimeter",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Visitor ID governance and blind-spot monitoring.",
            icon: "shield-check",
            tasks: [
                { id: "SC-SEC-01", technicalProtocol: "Visitor ID Capture", floorAction: "Verify 100% ID verification and log entry at gate.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder on campus.", proof: "Registry Audit" },
                { id: "SC-SEC-02", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for bullying/accidents.", proof: "System Screen" },
                { id: "SC-SEC-03", technicalProtocol: "Classroom Blind-Spot Scan", floorAction: "Adjust cameras to cover locker zones and back-alleys.", priority: "High", riskLevel: "Medium", consequence: "Zones for bullying or abuse go unmonitored.", proof: "Monitor Check" },
                { id: "SC-SEC-04", technicalProtocol: "Toilet Supervision Pulse", floorAction: "Verify attendant presence at entry to student washrooms.", priority: "High", riskLevel: "High", consequence: "Abuse risk in unmonitored areas.", proof: "Patrol Log" },
                { id: "SC-SEC-05", technicalProtocol: "Perimeter Lock-up", floorAction: "Confirm all roof and back-alley gates are locked.", priority: "High", riskLevel: "High", consequence: "Intruder risk.", proof: "Visual Audit" },
                { id: "SC-SEC-06", technicalProtocol: "Staff ID Badge Audit", floorAction: "Verify 100% badge compliance for external contractors.", priority: "Medium", riskLevel: "Low", consequence: "Unknown persons in corridors.", proof: "Briefing Log" },
                { id: "SC-SEC-07", technicalProtocol: "Guard Sobriety Watch", floorAction: "Breathalyzer test for night shift team.", priority: "High", riskLevel: "High", consequence: "Vulnerable property perimeter.", proof: "Test Note" },
                { id: "SC-SEC-08", technicalProtocol: "Back-gate Security Check", floorAction: "Verify delivery gate is shut during school hours.", priority: "High", riskLevel: "High", consequence: "Student absconding risk.", proof: "Photo" },
                { id: "SC-SEC-09", technicalProtocol: "Fire Exit Clearance", floorAction: "Verify all fire-stairs are clear of debris.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment.", proof: "Patrol Log" },
                { id: "SC-SEC-10", technicalProtocol: "Final Security Sign-off", floorAction: "Daily strategic closure initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Canteen & FSSAI Governance",
            department: "Canteen",
            frequency: "Daily",
            role: "Canteen Manager",
            summary: "Food safety, allergen control, and 'Zero Junk' compliance.",
            icon: "utensils",
            tasks: [
                { id: "SC-CAN-01", technicalProtocol: "FSSAI License Display", floorAction: "Verify current license and health certs are posted.", priority: "High", riskLevel: "High", consequence: "Regulatory shutdown.", proof: "Photo" },
                { id: "SC-CAN-02", technicalProtocol: "Zero-Junk Perimeter", floorAction: "Verify no junk food sold within 50m of school gate.", priority: "High", riskLevel: "Medium", consequence: "Non-compliance with FSSAI education rules.", proof: "Patrol Log" },
                { id: "SC-CAN-03", technicalProtocol: "Allergen Segregation", floorAction: "Audit nut-free and gluten-free prep zones.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction.", proof: "Visual Audit" },
                { id: "SC-CAN-04", technicalProtocol: "Thermal Integrity (Cold)", floorAction: "Log fridge temp: must be < 5°C.", priority: "High", riskLevel: "High", consequence: "Food poisoning outbreak.", proof: "Temp Log" },
                { id: "SC-CAN-05", technicalProtocol: "Oil TPM Quality", floorAction: "Check fryer oil TPM (Target < 25%).", priority: "Medium", riskLevel: "Medium", consequence: "Unhealthy food and health risk.", proof: "TPM Reading" },
                { id: "SC-CAN-06", technicalProtocol: "Water Purity Pulse", floorAction: "Verify output TDS from canteen RO (Target < 150).", priority: "High", riskLevel: "High", consequence: "Waterborne illness spread.", proof: "TDS Reading" },
                { id: "SC-CAN-07", technicalProtocol: "Handwashing Compliance", floorAction: "Observe staff sanitization frequency pre-service.", priority: "High", riskLevel: "Medium", consequence: "Disease transmission.", proof: "Briefing Log" },
                { id: "SC-CAN-08", technicalProtocol: "Vendor FSSAI Verify", floorAction: "Check license validity for fresh produce suppliers.", priority: "High", riskLevel: "High", consequence: "Unsafe sourcing liability.", proof: "Cert File" },
                { id: "SC-CAN-09", technicalProtocol: "Canteen Pest Bait", floorAction: "Check traps near dry storage.", priority: "High", riskLevel: "High", consequence: "Infestation.", proof: "Pest Log" },
                { id: "SC-CAN-10", technicalProtocol: "Daily Waste Seal", floorAction: "Verify wet waste is bagged and removed from campus.", priority: "Low", riskLevel: "Low", consequence: "Odors and rodent attraction.", proof: "Cleaning Note" }
            ]
        },
        {
            title: "Assembly & Playground Safety",
            department: "Grounds",
            frequency: "Weekly",
            role: "Grounds Lead",
            summary: "Crowd safety at assembly and mechanical playground audits.",
            icon: "sprout",
            tasks: [
                { id: "SC-GRN-01", technicalProtocol: "Assembly Crowd Flow (Daily)", floorAction: "Verify clear entry/exit paths for 500+ students.", priority: "High", riskLevel: "High", consequence: "Stampede or crush risk during panic.", proof: "Layout Audit", frequency: "Daily" },
                { id: "SC-GRN-02", technicalProtocol: "Playground Structural Scan", floorAction: "Inspect swings and slides for rust or loose bolts.", priority: "High", riskLevel: "High", consequence: "Catastrophic child injury.", proof: "Safety Log" },
                { id: "SC-GRN-03", technicalProtocol: "Fall-Zone Mulch Depth", floorAction: "Check padding depth under climbing frames.", priority: "High", riskLevel: "Medium", consequence: "Fractures from falls.", proof: "Measurement Log" },
                { id: "SC-GRN-04", technicalProtocol: "Drinking Fountain Hygiene", floorAction: "Deep clean fountain drains and sanitize nozzles.", priority: "Medium", riskLevel: "Low", consequence: "Unhygienic student perception.", proof: "Visual Check" },
                { id: "SC-GRN-05", technicalProtocol: "Stage Stability Audit", floorAction: "Check for splinters or loose boards on assembly stage.", priority: "Medium", riskLevel: "Medium", consequence: "Trip hazard.", proof: "Walkthrough" },
                { id: "SC-GRN-06", technicalProtocol: "Shade Structure Integrity", floorAction: "Inspect tensile canopies for tears or loose ropes.", priority: "Low", riskLevel: "Low", consequence: "Asset damage.", proof: "Visual Audit" },
                { id: "SC-GRN-07", technicalProtocol: "Grounds Lighting Check", floorAction: "Verify all exterior security lights are functional.", priority: "Medium", riskLevel: "Medium", consequence: "Security blind spots at night.", proof: "Visual Check" },
                { id: "SC-GRN-08", technicalProtocol: "Tree Branch Risk Audit", floorAction: "Identify overhanging dead branches near walkways.", priority: "Medium", riskLevel: "High", consequence: "Falling hazard (Fatal).", proof: "Walkthrough Log" },
                { id: "SC-GRN-09", technicalProtocol: "Swimming Pool Gate Seal", floorAction: "Verify pool gate self-closes and locks.", priority: "High", riskLevel: "High", consequence: "Accidental drowning.", proof: "Daily Test", frequency: "Daily" },
                { id: "SC-GRN-10", technicalProtocol: "Boundary Wall Integrity", floorAction: "Check for cracks or signs of unauthorized scaling.", priority: "High", riskLevel: "High", consequence: "Campus perimeter breach.", proof: "Photo" }
            ]
        },
        {
            title: "Science Labs & IT Tech",
            department: "Technical",
            frequency: "Weekly",
            role: "Lab / IT Lead",
            summary: "Hazardous materials and digital safety command.",
            icon: "wrench",
            tasks: [
                { id: "SC-TEC-01", technicalProtocol: "Chemical Storage LOTO (Daily)", floorAction: "Lock all hazardous acid cabinets at EOD.", priority: "High", riskLevel: "High", consequence: "Student acid burns or ingestion.", proof: "Lock Audit", frequency: "Daily" },
                { id: "SC-TEC-02", technicalProtocol: "Digital Content Filter", floorAction: "Verify active block of inappropriate sites on lab PCs.", priority: "High", riskLevel: "High", consequence: "Students accessing unsafe content.", proof: "System Log" },
                { id: "SC-TEC-03", technicalProtocol: "Server Room Thermal Pulse (Daily)", floorAction: "Log AC temp (Target exactly 20°C).", priority: "High", riskLevel: "High", consequence: "Data failure and hardware crash.", proof: "Temp Reading", frequency: "Daily" },
                { id: "SC-TEC-04", technicalProtocol: "Eye-wash Station Test", floorAction: "Flush lab eye-wash for 60 seconds.", priority: "High", riskLevel: "High", consequence: "Permanent student eye damage.", proof: "Test Log" },
                { id: "SC-TEC-05", technicalProtocol: "UPS Load Testing", floorAction: "Verify backup runtime for hall lighting.", priority: "Medium", riskLevel: "Low", consequence: "Blackout during campus hours.", proof: "Voltage Log" },
                { id: "SC-TEC-06", technicalProtocol: "Fume Hood Airflow", floorAction: "Test suction velocity in Chemistry lab.", priority: "High", riskLevel: "High", consequence: "Toxic vapor inhalation.", proof: "Meter Reading" },
                { id: "SC-TEC-07", technicalProtocol: "Gas Valve Integrity", floorAction: "Check Bunsen burner valves for leaks.", priority: "High", riskLevel: "High", consequence: "Lab fire/explosion.", proof: "Sniffer Test" },
                { id: "SC-TEC-08", technicalProtocol: "Cyber-Security Patch Scan", floorAction: "Confirm 100% update on admin server.", priority: "High", riskLevel: "High", consequence: "Student data ransom risk.", proof: "System Screen" },
                { id: "SC-TEC-09", technicalProtocol: "Indoor Air Quality (IAQ) Monitor", floorAction: "Log CO2 levels in classrooms with >30 students during peak hours.", priority: "Medium", riskLevel: "Low", consequence: "Reduced cognitive function and student lethargy.", proof: "Sensor Data" },
                { id: "SC-TEC-10", technicalProtocol: "Hardware Asset Tagging", floorAction: "Verify tags on new lab laptops/tablets.", priority: "Low", riskLevel: "Low", consequence: "Inventory theft.", proof: "Registry Match" }
            ]
        },
        {
            title: "Janitorial & Sanitation",
            department: "Facilities",
            frequency: "Daily",
            role: "Facility Manager",
            summary: "Institutional hygiene standards and water safety.",
            icon: "sparkles",
            tasks: [
                { id: "SC-JAN-01", technicalProtocol: "Restroom Standard Audit", floorAction: "Verify 100% cleanliness scores for all blocks.", priority: "High", riskLevel: "Low", consequence: "Major driver of parent dissatisfaction.", proof: "Audit Sheet" },
                { id: "SC-JAN-02", technicalProtocol: "Soap & Sanitizer Pulse", floorAction: "Refill 100% of corridor dispensers.", priority: "Medium", riskLevel: "Low", consequence: "Infection risk.", proof: "Stock Check" },
                { id: "SC-JAN-03", technicalProtocol: "Potable Water Hygiene", floorAction: "Log UV-lamp function and deep-clean water dispensing nozzles.", priority: "High", riskLevel: "Medium", consequence: "Water-borne disease spread.", proof: "Maintenance Log" },
                { id: "SC-JAN-04", technicalProtocol: "Stairwell Dust Sweep", floorAction: "Check for spiderwebs or dust in fire-stairs.", priority: "Low", riskLevel: "Low", consequence: "Poor brand image.", proof: "Walkthrough" },
                { id: "SC-JAN-05", technicalProtocol: "Water Tank Health (Monthly)", floorAction: "Audit chlorine levels and tank-lid locks.", priority: "High", riskLevel: "High", consequence: "Waterborne illness outbreak.", proof: "Lab Report", frequency: "Monthly" },
                { id: "SC-JAN-06", technicalProtocol: "Facade Window Cleaning", floorAction: "Verify status of scheduled exterior washing.", priority: "Low", riskLevel: "Low", consequence: "Grungy campus appearance.", proof: "Photo" },
                { id: "SC-JAN-07", technicalProtocol: "Bin Disposal Protocol", floorAction: "Confirm 100% of wet-waste removed by 4 PM.", priority: "Medium", riskLevel: "Medium", consequence: "Pest attraction.", proof: "Visual Audit" },
                { id: "SC-JAN-08", technicalProtocol: "Staff Change-Room Hygiene", floorAction: "Audit cleaning frequency for support staff zones.", priority: "Low", riskLevel: "Low", consequence: "Low worker morale.", proof: "Cleaning Log" },
                { id: "SC-JAN-09", technicalProtocol: "Chemical Dilution Test", floorAction: "Verify ppm levels in floor cleaner dispensers.", priority: "Medium", riskLevel: "Medium", consequence: "Ineffective sanitization.", proof: "Test Strip" },
                { id: "SC-JAN-10", technicalProtocol: "Final EOD Hygiene Sign-off", floorAction: "Execute nightly deep-mop initials.", priority: "High", riskLevel: "Low", consequence: "Grimy start next morning.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Infirmary & Nurse Command",
            department: "Medical",
            frequency: "Daily",
            role: "School Nurse",
            summary: "Medical readiness and emergency drug governance.",
            icon: "heart-pulse",
            tasks: [
                { id: "SC-MED-01", technicalProtocol: "Anaphylaxis Response Readiness", floorAction: "Conduct monthly mock-drill for Epi-pen administration with class teachers.", priority: "High", riskLevel: "High", consequence: "Fatal delay in allergic reaction response.", proof: "Drill Log" },
                { id: "SC-MED-02", technicalProtocol: "Student Allergy Matrix (Monthly)", floorAction: "Update red-flag list for current month.", priority: "High", riskLevel: "High", consequence: "Mismatched clinical care.", proof: "Matrix File", frequency: "Monthly" },
                { id: "SC-MED-03", technicalProtocol: "AED Battery Validation", floorAction: "Test AED status light (must be Green).", priority: "High", riskLevel: "High", consequence: "Rescue failure during cardiac event.", proof: "Test Log" },
                { id: "SC-MED-04", technicalProtocol: "Medical Stock Expiry (Weekly)", floorAction: "Remove items with < 60 days shelf life.", priority: "Medium", riskLevel: "Medium", consequence: "Ineffective medicine.", proof: "Expiry Audit", frequency: "Weekly" },
                { id: "SC-MED-05", technicalProtocol: "Female Student Welfare Readiness", floorAction: "Verify stock of sanitary napkins and disposal units in secondary wing restrooms.", priority: "High", riskLevel: "Low", consequence: "Student distress and loss of dignity.", proof: "Stock Check" },
                { id: "SC-MED-06", technicalProtocol: "Nebulizer Function Test", floorAction: "Verify suction and steam output.", priority: "Medium", riskLevel: "Low", consequence: "Respiratory aid failure.", proof: "Test Log" },
                { id: "SC-MED-07", technicalProtocol: "Cold Chain Pulse", floorAction: "Log medical fridge temp for insulin/vaccines.", priority: "High", riskLevel: "High", consequence: "Spoiled biologicals.", proof: "Temp Log" },
                { id: "SC-MED-08", technicalProtocol: "Biomedical Waste Seal", floorAction: "Verify sharps containers are sealed for pickup.", priority: "High", riskLevel: "High", consequence: "Needle-stick injury risk.", proof: "Visual Check" },
                { id: "SC-MED-09", technicalProtocol: "Staff Health Matrix (Monthly)", floorAction: "Verify medical certs for 100% of F&B handlers.", priority: "Medium", riskLevel: "Medium", consequence: "Infection risk to students.", proof: "Cert File", frequency: "Monthly" },
                { id: "SC-MED-10", technicalProtocol: "First Aid Kit Refill (Weekly)", floorAction: "Replenish used items in 10 random campus kits.", priority: "Medium", riskLevel: "Low", consequence: "Gaps in safety gear.", proof: "Refill Sheet", frequency: "Weekly" }
            ]
        },
        {
            title: "Finance & Admissions Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Registrar / Admin Head",
            summary: "Revenue reconciliation and reputation response.",
            icon: "banknote",
            tasks: [
                { id: "SC-FIN-01", technicalProtocol: "Fee-to-Bank Integrity", floorAction: "Match cash/checks in hand to system report.", priority: "High", riskLevel: "High", consequence: "Internal revenue theft.", proof: "Settlement Log" },
                { id: "SC-FIN-02", technicalProtocol: "Cancelled Receipt Audit", floorAction: "Manager sign-off on 100% of deleted receipts.", priority: "High", riskLevel: "Medium", consequence: "Fee fraud.", proof: "POS Audit" },
                { id: "SC-FIN-03", technicalProtocol: "Digital Incident Triage", floorAction: "Escalate social media mentions of campus incidents to Principal in < 15m.", priority: "High", riskLevel: "High", consequence: "Uncontrolled viral PR disaster.", proof: "Dashboard Screenshot" },
                { id: "SC-FIN-04", technicalProtocol: "Parent Grievance Resolution TAT", floorAction: "Verify all queries acknowledged in < 2h and resolved in < 24h.", priority: "Medium", riskLevel: "Low", consequence: "Parent attrition and reputational damage.", proof: "Comms Log" },
                { id: "SC-FIN-05", technicalProtocol: "Petty Cash Blind Count (Weekly)", floorAction: "Physical count of coins vs voucher.", priority: "Medium", riskLevel: "High", consequence: "Small-scale theft.", proof: "Audit Note", frequency: "Weekly" }
            ]
        }
    ]
};
