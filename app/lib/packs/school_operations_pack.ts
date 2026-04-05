
import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c12368-2c26-4e58-b1de-149b80b292e7',
    category: "Education",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v11.9 is the safety safeguard for educational institutions.",
    heroHeadline: "Prevent Campus Tragedies and Administrative Chaos",
    heroSubheadline: "Track transport safety, monitor playground risks, and stay in control of student welfare—across 200+ technical points.",
    pricingUrgency: "In education, a single safety 'never event' isn't just expensive—it's an institutional catastrophe. This system is the safeguard.",
    consultingAnchor: 10000,
    icon: "school",
    badgeText: "Safety Critical",
    badgeVariant: "destructive",
    whoIsItFor: ["School Principals", "Trustees & Board Members", "Heads of Administration", "Transport Managers", "Registrars"],
    sampleItems: [
        { text: "<strong>2-Minute Safety Pulse</strong>: Bus drivers, wardens, and admin staff update status in seconds. Zero-friction reporting.", icon: "timer" },
        { text: "<strong>Transport Command</strong>: Bulletproof protocols for bus maintenance, student drop-offs, and 'no-child-left-behind' walkthroughs.", icon: "bus" },
        { text: "<strong>Visitor Governance</strong>: Strict, logged verification for every individual entering the campus to harden your perimeter.", icon: "shield-check" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show Principals exactly what needs immediate sign-off.", icon: "target" },
        { text: "<strong>Institutional Memory</strong>: Capture expert knowledge so new staff are safety-ready and compliant from Day 1.", icon: "history" },
        { text: "<strong>Canteen & HACCP</strong>: Zero-fail protocols for food hygiene, temperature logs, and allergen separation.", icon: "utensils" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your institutional data forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Principal Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Principal / Director",
            summary: "Institutional risk, academic integrity, and parent reputation oversight.",
            icon: "crown",
            tasks: [
                { id: "SC-EXE-01", technicalProtocol: "Child Protection (POCSO) Audit", floorAction: "Review staff training matrix for child safety compliance.", priority: "High", riskLevel: "High", consequence: "Severe legal liability and criminal charges for the Board.", proof: "Matrix Audit" },
                { id: "SC-EXE-02", technicalProtocol: "Transport Incident Synthesis", floorAction: "Review weekly bus speed alerts and GPS route deviations.", priority: "High", riskLevel: "High", consequence: "Accidents and massive PR damage to school brand.", proof: "GPS Log" },
                { id: "SC-EXE-03", technicalProtocol: "Academic Integrity Backup", floorAction: "Audit digital cloud sync for student marks and history.", priority: "Medium", riskLevel: "Low", consequence: "Total loss of student history during server crash.", proof: "System Log" },
                { id: "SC-EXE-04", technicalProtocol: "Fire NOC & Statutory Display", floorAction: "Verify Fire NOC and affiliation certs are displayed in lobby.", priority: "High", riskLevel: "High", consequence: "Sealing of school premises by authorities.", proof: "Photo" },
                { id: "SC-EXE-05", technicalProtocol: "Sentinel Event Review", floorAction: "Review 'Major Incident' tracker for any bullying or injuries.", priority: "High", riskLevel: "High", consequence: "Escalated disputes and legal exposure.", proof: "Incident Log" },
                { id: "SC-EXE-06", technicalProtocol: "Academic Calendar Parity", floorAction: "Verify today's curriculum delivery against annual plan.", priority: "Low", riskLevel: "Low", consequence: "Incomplete syllabus and parent complaints.", proof: "Progress Log" },
                { id: "SC-EXE-07", technicalProtocol: "Fee Collection Velocity", floorAction: "Review weekly fees collected vs. operational budget.", priority: "Medium", riskLevel: "Medium", consequence: "Salary delays and financial gridlock.", proof: "Finance Chart" },
                { id: "SC-EXE-08", technicalProtocol: "Staff Health Pulse", floorAction: "Verify valid medical checkups for 100% of staff.", priority: "Medium", riskLevel: "Medium", consequence: "Infection risk to children.", proof: "Med File" },
                { id: "SC-EXE-09", technicalProtocol: "Credentialing Audit", floorAction: "Audit 5 teacher files for valid degree certificates.", priority: "High", riskLevel: "High", consequence: "Loss of affiliation/recognition.", proof: "Registry Audit" },
                { id: "SC-EXE-10", technicalProtocol: "Final Board Sign-off", floorAction: "Weekly strategic governance summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of Board oversight.", proof: "Signed Summary" },
                // Monthly Principal Tasks
                { id: "SC-EXE-M1", technicalProtocol: "Staff Churn Analysis", floorAction: "Review teacher exit interview patterns.", priority: "Low", riskLevel: "Low", consequence: "High recruitment costs and academic instability.", proof: "HR Note", frequency: "Monthly" },
                { id: "SC-EXE-M2", technicalProtocol: "Parent Sentiment Audit", floorAction: "Analyze Google/Social keywords for recurring issues.", priority: "Medium", riskLevel: "Low", consequence: "Reputational decay.", proof: "CSAT Report", frequency: "Monthly" }
            ]
        },
        {
            title: "Admin Command",
            department: "Operations",
            frequency: "Daily",
            role: "Head of Administration",
            summary: "Campus uptime, attendance parity, and visitor governance.",
            icon: "building-2",
            tasks: [
                { id: "SC-OPS-01", technicalProtocol: "Staff Deployment Parity", floorAction: "Verify 100% teacher attendance by 8:15 AM.", priority: "High", riskLevel: "Low", consequence: "Unsupervised classrooms and behavior risks.", proof: "Attendance Log" },
                { id: "SC-OPS-02", technicalProtocol: "Campus Ambiance Audit", floorAction: "Walkthrough of Lobby and corridors: check lighting/scent.", priority: "Medium", riskLevel: "Low", consequence: "Poor first impression for parents.", proof: "Walkthrough" },
                { id: "SC-OPS-03", technicalProtocol: "Visitor ID Governance", floorAction: "Verify 100% ID capture for every external visitor.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder on campus.", proof: "Registry Audit" },
                { id: "SC-OPS-04", technicalProtocol: "Public Address Utility", floorAction: "Test school bell and emergency PA system.", priority: "High", riskLevel: "Medium", consequence: "Campus schedule chaos/Crisis comm failure.", proof: "Sound Test" },
                { id: "SC-OPS-05", technicalProtocol: "Grievance Resolution Pulse", floorAction: "Review all 'Open' parent emails received < 24h.", priority: "Medium", riskLevel: "Low", consequence: "Viral reputation damage.", proof: "Issue Log" },
                { id: "SC-OPS-06", technicalProtocol: "Admin Stock Pulse", floorAction: "Check par stock of admission forms and stationery.", priority: "Low", riskLevel: "Low", consequence: "Operational friction.", proof: "Stock Sheet" },
                { id: "SC-OPS-07", technicalProtocol: "Utility Meter Sync", floorAction: "Log electricity and water consumption.", priority: "Low", riskLevel: "Low", consequence: "Unmonitored overhead blowout.", proof: "Meter Log" },
                { id: "SC-OPS-08", technicalProtocol: "Staff Grooming Audit", floorAction: "Check uniforms and ID badges for non-teaching staff.", priority: "Low", riskLevel: "Low", consequence: "Authority brand drop.", proof: "Briefing Log" },
                { id: "SC-OPS-09", technicalProtocol: "Asset Tag Verification", floorAction: "Spot check tags on new IT or Sports equipment.", priority: "Low", riskLevel: "Low", consequence: "Loss of institutional property.", proof: "Asset Register" },
                { id: "SC-OPS-10", technicalProtocol: "Final Admin Closure", floorAction: "Daily operational sign-off initials.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Transport Command",
            department: "Logistics",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "Zero-fail School Bus safety and GPS monitoring.",
            icon: "bus",
            tasks: [
                { id: "SC-LOG-01", technicalProtocol: "Pre-Trip Mechanical Pulse", floorAction: "Check bus brakes, tires, and fuel levels.", priority: "High", riskLevel: "High", consequence: "Mechanical accident during trip.", proof: "Driver Sign-off" },
                { id: "SC-LOG-02", technicalProtocol: "GPS Connectivity Sync", floorAction: "Verify 100% of buses are online on the dashboard.", priority: "High", riskLevel: "High", consequence: "Inability to track bus during crisis.", proof: "System Screen" },
                { id: "SC-LOG-03", technicalProtocol: "Empty Bus Walkthrough", floorAction: "Secondary check: walk to the back seat after drop-off.", priority: "High", riskLevel: "High", consequence: "Child left behind in bus (Fatal Never-Event).", proof: "Secondary Sign-off" },
                { id: "SC-LOG-04", technicalProtocol: "Driver Sobriety Check", floorAction: "Random breathalyzer test for morning shift drivers.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash risk.", proof: "Test Note" },
                { id: "SC-LOG-05", technicalProtocol: "Attendant Presence Audit", floorAction: "Verify female attendant is on-board for all routes.", priority: "High", riskLevel: "High", consequence: "Legal violation and protection risk.", proof: "Roster Check" },
                { id: "SC-LOG-06", technicalProtocol: "Speed Limit Adherence", floorAction: "Log buses exceeding 40km/h limit.", priority: "Medium", riskLevel: "Medium", consequence: "Accidents and parent rage.", proof: "GPS Report" },
                { id: "SC-LOG-07", technicalProtocol: "Pick-up ID Verification", floorAction: "Verify guardian ID match at student handover.", priority: "High", riskLevel: "High", consequence: "Kidnapping/Unauthorized pickup.", proof: "Handover Log" },
                { id: "SC-LOG-08", technicalProtocol: "Bus Hygiene Audit", floorAction: "Inspect interior for dust or trash.", priority: "Low", riskLevel: "Low", consequence: "Poor brand image.", proof: "Visual Check" },
                { id: "SC-LOG-09", technicalProtocol: "Route TAT Tracking", floorAction: "Log first-pick to school-drop duration.", priority: "Low", riskLevel: "Low", consequence: "Student fatigue and parent complaints.", proof: "Log Match" },
                { id: "SC-LOG-10", technicalProtocol: "Spare Key Governance", floorAction: "Confirm all spare bus keys are in master safe.", priority: "Low", riskLevel: "Medium", consequence: "Logistics delay chaos.", proof: "Vault Inventory" }
            ]
        },
        {
            title: "Student Safety & EHS",
            department: "Safety",
            frequency: "Daily",
            role: "EHS & Safety Officer",
            summary: "Infrastructure hardening and life-safety protocols.",
            icon: "shield-check",
            tasks: [
                { id: "SC-SEC-01", technicalProtocol: "CCTV Recording Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for bullying/accidents.", proof: "System Screen" },
                { id: "SC-SEC-02", technicalProtocol: "Fire Exit Path Integrity", floorAction: "Verify all fire exits are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment during emergency.", proof: "Patrol Log" },
                { id: "SC-SEC-03", technicalProtocol: "Playground Structural Audit", floorAction: "Inspect swings/slides for rust or loose bolts.", priority: "High", riskLevel: "High", consequence: "Catastrophic child injury.", proof: "Safety Log" },
                { id: "SC-SEC-04", technicalProtocol: "Fire Extinguisher Gauge Check", floorAction: "Confirm needle is in GREEN zone for all units.", priority: "High", riskLevel: "High", consequence: "Inability to fight fire.", proof: "Gauge Log" },
                { id: "SC-SEC-05", technicalProtocol: "Guard Sobriety Pulse", floorAction: "Random alcohol check for night shift security.", priority: "High", riskLevel: "High", consequence: "Vulnerable campus perimeter.", proof: "Test Note" },
                { id: "SC-SEC-06", technicalProtocol: "Wet Floor Signage Guard", floorAction: "Check availability of signage during mopping.", priority: "Medium", riskLevel: "Medium", consequence: "Slip and fall lawsuits.", proof: "Visual Check" },
                { id: "SC-SEC-07", technicalProtocol: "Perimeter Lock-up", floorAction: "Confirm all roof and back-alley gates are locked.", priority: "High", riskLevel: "High", consequence: "Unauthorized access/Theft.", proof: "Visual Audit" },
                { id: "SC-SEC-08", technicalProtocol: "Science Lab Gas Check", floorAction: "Verify main gas valve is shut after classes.", priority: "High", riskLevel: "High", consequence: "Explosion/Fire risk.", proof: "Pressure Log" },
                { id: "SC-SEC-09", technicalProtocol: "Waste Bay Hygiene", floorAction: "Inspect bins for odors or pest attraction.", priority: "Low", riskLevel: "Medium", consequence: "Infection risk.", proof: "Walkthrough" },
                { id: "SC-SEC-10", technicalProtocol: "Final Nightly Safety Sign-off", floorAction: "Physical perimeter touch-point signature.", priority: "High", riskLevel: "Low", consequence: "Systemic risk gap.", proof: "Manager Initials" }
            ]
        },
        {
            title: "Infirmary & Nurse Command",
            department: "Medical",
            frequency: "Daily",
            role: "School Nurse",
            summary: "Medical readiness and student health governance.",
            icon: "heart-pulse",
            tasks: [
                { id: "SC-MED-01", technicalProtocol: "Emergency Drug Inventory", floorAction: "Verify Epi-pens and inhalers are in stock and in-date.", priority: "High", riskLevel: "High", consequence: "Fatal delay in allergic response.", proof: "Drug Register" },
                { id: "SC-MED-02", technicalProtocol: "Infirmary Hygiene Audit", floorAction: "Sanitize bed and check for clean linens.", priority: "Medium", riskLevel: "Medium", consequence: "Cross-infection.", proof: "Cleaning Log" },
                { id: "SC-MED-03", technicalProtocol: "Student Allergy Matrix", floorAction: "Verify red-flags for today's infirmary visitors.", priority: "High", riskLevel: "High", consequence: "Mismatched medical care.", proof: "Matrix Match" },
                { id: "SC-MED-04", technicalProtocol: "Nurse Presence Clock-in", floorAction: "Confirm desk presence by 8:30 AM.", priority: "High", riskLevel: "High", consequence: "No aid during morning accidents.", proof: "Attendance Log" },
                { id: "SC-MED-05", technicalProtocol: "AED Battery Validation", floorAction: "Test AED status light (must be Green).", priority: "High", riskLevel: "High", consequence: "Rescue failure during cardiac arrest.", proof: "Test Log" }
            ]
        },
        {
            title: "Science Labs & Tech",
            department: "Technical",
            frequency: "Weekly",
            role: "Lab / IT Lead",
            summary: "Specialized safety for labs and digital uptime.",
            icon: "wrench",
            tasks: [
                { id: "SC-TEC-01", technicalProtocol: "Chemical Storage LOTO", floorAction: "Lock all hazardous acid cabinets.", priority: "High", riskLevel: "High", consequence: "Acid burns/toxic ingestion.", proof: "Lock Audit" },
                { id: "SC-TEC-02", technicalProtocol: "Digital Child Filter Audit", floorAction: "Verify 'Content Filter' is active on school PCs.", priority: "High", riskLevel: "High", consequence: "Students seeing inappropriate content.", proof: "System Log" },
                { id: "SC-TEC-03", technicalProtocol: "Server Room Temp", floorAction: "Log server room AC (Target 20°C).", priority: "High", riskLevel: "High", consequence: "Data failure/Hardware crash.", proof: "Temp Reading" },
                { id: "SC-TEC-04", technicalProtocol: "UPS Load Testing", floorAction: "Test backup power for IT lab.", priority: "Medium", riskLevel: "Medium", consequence: "Blackout during exams.", proof: "Voltage Log" },
                { id: "SC-TEC-05", technicalProtocol: "Eye-wash Station Test", floorAction: "Flush lab eye-wash for 1 minute.", priority: "High", riskLevel: "High", consequence: "Permanent student eye damage.", proof: "Test Log" }
            ]
        },
        {
            title: "Canteen & Food Logic",
            department: "Canteen",
            frequency: "Daily",
            role: "Canteen Manager",
            summary: "HACCP protocols for food safety and nutrition.",
            icon: "utensils",
            tasks: [
                { id: "SC-CAN-01", technicalProtocol: "Thermal Audit (Cold)", floorAction: "Log fridge temp: must be < 5°C.", priority: "High", riskLevel: "High", consequence: "Food poisoning outbreak.", proof: "Temp Log" },
                { id: "SC-CAN-02", technicalProtocol: "Handwashing Compliance", floorAction: "Verify canteen staff sanitization frequency.", priority: "High", riskLevel: "Medium", consequence: "Disease transmission.", proof: "Briefing Log" },
                { id: "SC-CAN-03", technicalProtocol: "Allergen Segregation", floorAction: "Audit nut-free prep zones.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction.", proof: "Visual Audit" },
                { id: "SC-CAN-04", technicalProtocol: "Canteen Pest Bait", floorAction: "Check traps near dry storage.", priority: "High", riskLevel: "High", consequence: "Infestation and closure.", proof: "Pest Log" },
                { id: "SC-CAN-05", technicalProtocol: "Oil TPM Testing", floorAction: "Check fryer oil TPM (Target < 25%).", priority: "Low", riskLevel: "Medium", consequence: "Health risk.", proof: "TPM Reading" }
            ]
        },
        {
            title: "Janitorial & Hygiene",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Janitorial Lead",
            summary: "Standardizes institutional hygiene standards.",
            icon: "sparkles",
            tasks: [
                { id: "SC-JAN-01", technicalProtocol: "Washroom Frequency Log", floorAction: "Verify cleaning every 60 mins.", priority: "High", riskLevel: "Low", consequence: "Mass parent dissatisfaction.", proof: "Hourly Sheet" },
                { id: "SC-JAN-02", technicalProtocol: "Drinking Water Drainage", floorAction: "Clear fountain drains and polish mirrors.", priority: "Low", riskLevel: "Low", consequence: "Unhygienic image.", proof: "Visual Check" },
                { id: "SC-JAN-03", technicalProtocol: "Stairwell Dust Sweep", floorAction: "Check for spiderwebs or dust in fire-stairs.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene decay.", proof: "Walkthrough" },
                { id: "SC-JAN-04", technicalProtocol: "Soap & Sanitizer Pulse", floorAction: "Refill all lobby dispensers.", priority: "Medium", riskLevel: "Low", consequence: "Infection risk.", proof: "Stock Check" },
                { id: "SC-JAN-05", technicalProtocol: "Janitorial Closure", floorAction: "Final EOD hygiene sign-off.", priority: "High", riskLevel: "Low", consequence: "Morning grimy start.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Admissions & Reputation",
            department: "Admissions",
            frequency: "Daily",
            role: "Admissions Head",
            summary: "Governs parent inquiries and digital reputation.",
            icon: "megaphone",
            tasks: [
                { id: "SC-ADM-01", technicalProtocol: "Inquiry Response Pulse", floorAction: "Answer all parent WhatsApp/Social inquiries < 2h.", priority: "High", riskLevel: "Low", consequence: "Lost admissions revenue.", proof: "Inbox Clear" },
                { id: "SC-ADM-02", technicalProtocol: "Digital ORM Reply", floorAction: "Reply to Google and Search reviews received < 24h.", priority: "High", riskLevel: "Medium", consequence: "Damaged brand ranking.", proof: "Dashboard" },
                { id: "SC-ADM-03", technicalProtocol: "Holiday Hours Update", floorAction: "Sync Google Maps status for school breaks.", priority: "High", riskLevel: "Low", consequence: "Parents arrive to closed gate.", proof: "System Check" }
            ]
        },
        {
            title: "Revenue & Finance Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Registrar",
            summary: "Fee reconciliation and profit protection.",
            icon: "banknote",
            tasks: [
                { id: "SC-FIN-01", technicalProtocol: "Fee-to-Bank Reconciliation", floorAction: "Match cash/checks in hand to system report.", priority: "High", riskLevel: "High", consequence: "Internal cashier theft.", proof: "Settlement Log" },
                { id: "SC-FIN-02", technicalProtocol: "Cancelled Receipt Audit", floorAction: "Manager sign-off on 100% of deleted receipts.", priority: "High", riskLevel: "Medium", consequence: "Fee fraud.", proof: "POS Audit" },
                { id: "SC-FIN-03", technicalProtocol: "Petty Cash Blind Count", floorAction: "Physical count of coins vs voucher.", priority: "Medium", riskLevel: "High", consequence: "Small-scale theft.", proof: "Audit Note" }
            ]
        },
        {
            title: "Personnel & Certs",
            department: "HR",
            frequency: "Monthly",
            role: "HR Manager",
            summary: "Staff competency and mandatory health certs.",
            icon: "graduation-cap",
            tasks: [
                { id: "SC-HR-01", technicalProtocol: "Teaching License Matrix", floorAction: "Verify B.Ed / valid certs for all teaching staff.", priority: "High", riskLevel: "High", consequence: "Loss of affiliation.", proof: "Cert Registry" },
                { id: "SC-HR-02", technicalProtocol: "POCSO Policy Display", floorAction: "Confirm policy is posted in staff room.", priority: "High", riskLevel: "High", consequence: "Severe legal liability.", proof: "Photo" },
                { id: "SC-HR-03", technicalProtocol: "Staff Training Log", floorAction: "Verify 4h/month training for all assistants.", priority: "Low", riskLevel: "Low", consequence: "Skill decay.", proof: "Matrix File" },
                { id: "SC-HR-04", technicalProtocol: "Uniform Audit", floorAction: "Inspect teacher grooming and ID visibility.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Briefing Log" },
                { id: "SC-HR-05", technicalProtocol: "Final Monthly HR Sign-off", floorAction: "Execute monthly competency initials.", priority: "High", riskLevel: "Low", consequence: "Loss of admin control.", proof: "Signed Matrix" }
            ]
        },
        {
            title: "MEP & Infrastructure",
            department: "Engineering",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "Infrastructure uptime and backbone protection.",
            icon: "wrench",
            tasks: [
                { id: "SC-ENG-01", technicalProtocol: "Back-up Generator Pulse", floorAction: "Inspect DG fuel and test battery.", priority: "High", riskLevel: "High", consequence: "Blackout during campus hours.", proof: "Fuel Log" },
                { id: "SC-ENG-02", technicalProtocol: "RO Water Purity", floorAction: "Verify output TDS (Target < 150).", priority: "High", riskLevel: "High", consequence: "Waterborne illness outbreak.", proof: "TDS Reading" },
                { id: "SC-ENG-03", technicalProtocol: "Fire Pump Auto-Trigger", floorAction: "Verify fire pumps are in 'Auto' mode.", priority: "High", riskLevel: "High", consequence: "Fire-fighting failure.", proof: "Gauge Log" },
                { id: "SC-ENG-04", technicalProtocol: "AC Filter Cleaning", floorAction: "Wipe down classroom vents.", priority: "Low", riskLevel: "Low", consequence: "Inefficiency.", proof: "Maint Sheet" },
                { id: "SC-ENG-05", technicalProtocol: "Technical Closure", floorAction: "Final MEP check initials.", priority: "High", riskLevel: "Low", consequence: "Unmonitored decay.", proof: "Signed Log" }
            ]
        }
    ]
};

    