import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 899,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/checkout/buy/e74bd8ac-23cb-4993-bdeb-bac9dbe9cd67',
    category: "Education",
    description: "The definitive Sovereign v18.0 engine for K-12 and multi-campus institutions. Hardening 200 technical control points across Student Safety, Academic Continuity, and Statutory Compliance. [Frozen Verification Candidate]",
    heroHeadline: "Protect Your Students. Secure Your Institution.",
    heroSubheadline: "Track academic pacing, monitor student safety, and stay in control of campus operations—across 20 specialized institutional roles.",
    pricingUrgency: "A single safety 'never event' or one board accreditation failure costs 100x more than this entire system.",
    consultingAnchor: 10000,
    icon: "school",
    badgeText: "V18.0 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["Principals", "Trustees", "Transport Managers", "School Nurses", "Academic Coordinators", "Campus GMs"],
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
            role: "Principal",
            summary: "High-level strategic oversight of campus safety, academic pacing, and institutional liability.",
            icon: "crown",
            tasks: [
                { id: "S-EXE-01", technicalProtocol: "Child Protection Audit", floorAction: "Review Behavior Log for any flagged POCSO or safety incidents.", priority: "High", riskLevel: "High", consequence: "Legal prosecution and loss of license.", proof: "Incident Log", verificationRequired: true, cadence: "daily" },
                { id: "S-EXE-02", technicalProtocol: "Academic Pacing Sync", floorAction: "Review syllabus completion report across all grades; flag lags > 1 week.", priority: "High", riskLevel: "Medium", consequence: "Failure to meet curriculum deadlines.", proof: "ADE Dashboard", cadence: "daily" },
                { id: "S-EXE-03", technicalProtocol: "Statutory License Validity", floorAction: "Verify Fire NOC, Building Stability, and Board Affiliation status.", priority: "High", riskLevel: "High", consequence: "Government sealing of campus.", proof: "License File", verificationRequired: true, cadence: "daily" },
                { id: "S-EXE-04", technicalProtocol: "Parent Escalation Review", floorAction: "Triage all unresolved safety or discipline emails < 12h.", priority: "Medium", riskLevel: "Low", consequence: "Reputational fallout and student attrition.", proof: "Email Log", cadence: "daily" },
                { id: "S-EXE-05", technicalProtocol: "Staff Background Pulse", floorAction: "Verify 100% vetting completion for any new campus entrants.", priority: "High", riskLevel: "High", consequence: "Entry of blacklisted individuals.", proof: "HR Register", verificationRequired: true, cadence: "daily" },
                { id: "S-EXE-06", technicalProtocol: "Board Governance Reconcile", floorAction: "Match minutes of last Trustee meeting to action-item status.", priority: "Medium", riskLevel: "Low", consequence: "Strategic drift.", proof: "Minutes File", cadence: "weekly" },
                { id: "S-EXE-07", technicalProtocol: "Strategic CAPEX Review", floorAction: "Check status of critical lab or transport asset repairs.", priority: "Medium", riskLevel: "Low", consequence: "Infrastructure decay.", proof: "Mnt Tracker", cadence: "weekly" },
                { id: "S-EXE-08", technicalProtocol: "Public Liability Audit", floorAction: "Confirm valid insurance cover for 100% of campus and trips.", priority: "High", riskLevel: "High", consequence: "Unrecoverable loss during disaster.", proof: "Policy Registry", verificationRequired: true, cadence: "monthly" },
                { id: "S-EXE-09", technicalProtocol: "Institutional Compliance Walk", floorAction: "Randomly walk 1 classroom wing to verify grooming and discipline.", priority: "Low", riskLevel: "Low", consequence: "Loss of soft standards.", proof: "Walk Log", cadence: "daily" },
                { id: "S-EXE-10", technicalProtocol: "Daily MOD Summary", floorAction: "Final daily summary of campus status and incidents.", priority: "High", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Summary", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Academic Strategy",
            department: "Academic",
            frequency: "Daily",
            role: "Vice Principal",
            summary: "Management of teaching staff discipline and academic delivery parity.",
            icon: "graduation-cap",
            tasks: [
                { id: "S-VP-01", technicalProtocol: "Staff Attendance Parity", floorAction: "Confirm 100% substitute coverage for absent staff < 15 mins post-bell.", priority: "High", riskLevel: "Low", consequence: "Unsupervised classrooms and learning loss.", proof: "Roster Match", verificationRequired: true, cadence: "daily" },
                { id: "S-VP-02", technicalProtocol: "Lesson Plan Drift Audit", floorAction: "Review 5 random teacher journals for alignment with syllabus.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent learning delivery.", proof: "Journal Audit", cadence: "daily" },
                { id: "S-VP-03", technicalProtocol: "Student Attendance Pulse", floorAction: "Verify SMS alerts sent to 100% of absent student parents < 10 AM.", priority: "High", riskLevel: "Medium", consequence: "Student welfare/safety risk off-site.", proof: "System Log", verificationRequired: true, cadence: "daily" },
                { id: "S-VP-04", technicalProtocol: "Teacher Grooming Pulse", floorAction: "Verify attire and ID compliance for 100% of teaching staff.", priority: "Low", riskLevel: "Low", consequence: "Professional brand dilution.", proof: "Briefing Log", cadence: "daily" },
                { id: "S-VP-05", technicalProtocol: "Observation Loop", floorAction: "Conduct 15-min unannounced class observation; log feedback.", priority: "Medium", riskLevel: "Low", consequence: "Undetected teaching failure.", proof: "Observation Note", cadence: "daily" },
                { id: "S-VP-06", technicalProtocol: "Special Needs Sync", floorAction: "Verify 1-on-1 support for 100% of students on IEP/Inclusive list.", priority: "High", riskLevel: "Medium", consequence: "Academic neglect of vulnerable students.", proof: "Support Log", verificationRequired: true, cadence: "daily" },
                { id: "S-VP-07", technicalProtocol: "Department Head Pulse", floorAction: "Lead 5-min HOD huddle to identify syllabus bottlenecks.", priority: "Low", riskLevel: "Low", consequence: "Academic disorganization.", proof: "Meeting Note", cadence: "weekly" },
                { id: "S-VP-08", technicalProtocol: "Student Behavior Triage", floorAction: "Resolve all escalated disciplinary cases < 4 hours.", priority: "High", riskLevel: "Medium", consequence: "Chronic discipline breakdown.", proof: "Incident Log", verificationRequired: true, cadence: "daily" },
                { id: "S-VP-09", technicalProtocol: "Academic Resource Audit", floorAction: "Verify availability of 100% of required textbooks in the store.", priority: "Low", riskLevel: "Low", consequence: "Learning delays.", proof: "Stock Check", cadence: "weekly" },
                { id: "S-VP-10", technicalProtocol: "Shift Handover Verify", floorAction: "Digital sign-off on afternoon duties for the closing admin.", priority: "Medium", riskLevel: "Low", consequence: "Lost instructions.", proof: "Handover Log", cadence: "daily" }
            ]
        },
        {
            title: "Curriculum Coordination",
            department: "Academic",
            frequency: "Daily",
            role: "Academic Coordinator",
            summary: "Atomic-level syllabus management and resource alignment.",
            icon: "book-open",
            tasks: [
                { id: "S-AC-01", technicalProtocol: "Syllabus Tracker Match", floorAction: "Cross-check physical logs with the digital academic dashboard.", priority: "Medium", riskLevel: "Low", consequence: "Inaccurate reporting to board.", proof: "Digital Match", cadence: "daily" },
                { id: "S-AC-02", technicalProtocol: "Assignment Load Balance", floorAction: "Ensure students do not exceed 2 hours of home-task load per grade.", priority: "Low", riskLevel: "Low", consequence: "Student burnout and parent pushback.", proof: "Task Review", cadence: "weekly" },
                { id: "S-AC-03", technicalProtocol: "Worksheet Parity", floorAction: "Verify 100% of class worksheets match current learning outcomes.", priority: "Medium", riskLevel: "Low", consequence: "Ineffective learning materials.", proof: "Sample Audit", cadence: "daily" },
                { id: "S-AC-04", technicalProtocol: "Library Resource Link", floorAction: "Verify books required for next week's unit are in 'Open Access'.", priority: "Low", riskLevel: "Low", consequence: "Research bottlenecks.", proof: "Visual Check", cadence: "weekly" },
                { id: "S-AC-05", technicalProtocol: "Remedial Class Roster", floorAction: "Verify 100% attendance for students on the 'Academic Support' list.", priority: "High", riskLevel: "Low", consequence: "Failure of low-performing students.", proof: "Attendance Log", cadence: "daily" },
                { id: "S-AC-06", technicalProtocol: "Language Lab Uptime", floorAction: "Test connectivity for 5 headsets in the language center.", priority: "Low", riskLevel: "Low", consequence: "Teaching interruption.", proof: "Tech Note", cadence: "weekly" },
                { id: "S-AC-07", technicalProtocol: "Field Trip Pre-auth", floorAction: "Verify academic relevance and safety map for upcoming trips.", priority: "High", riskLevel: "High", consequence: "Unauthorized/Unsafe student movement.", proof: "Permit File", verificationRequired: true, cadence: "weekly" },
                { id: "S-AC-08", technicalProtocol: "Faculty Substitution", floorAction: "Assign 100% of 'Free Period' coverages pre-9 AM.", priority: "High", riskLevel: "Low", consequence: "Unsupervised noise and safety risk.", proof: "Roster Note", cadence: "daily" },
                { id: "S-AC-09", technicalProtocol: "Teaching Aid Pulse", floorAction: "Verify availability of maps/charts for today's geography list.", priority: "Low", riskLevel: "Low", consequence: "Dull classroom delivery.", proof: "Visual Check", cadence: "daily" },
                { id: "S-AC-10", technicalProtocol: "End-of-Unit Summary", floorAction: "Log average scores for Grade 10 math pre-assessment.", priority: "Medium", riskLevel: "Low", consequence: "Lost data for interventions.", proof: "Score Report", cadence: "weekly" }
            ]
        },
        {
            title: "Examination Command",
            department: "Academic",
            frequency: "Per Exam",
            role: "Examination Controller",
            summary: "Zero-fail governance for high-stakes assessments.",
            icon: "file-lock",
            tasks: [
                { id: "S-EXM-01", technicalProtocol: "Paper Custody Chain", floorAction: "Physically witness sealing of paper envelopes in the vault.", priority: "High", riskLevel: "High", consequence: "Exam leak and total re-conduct cost.", proof: "Seal Registry", verificationRequired: true, cadence: "incident-based" },
                { id: "S-EXM-02", technicalProtocol: "Invigilator Positioning", floorAction: "Verify staff presence matches the board-spec duty roster.", priority: "High", riskLevel: "Medium", consequence: "Malpractice.", proof: "Attendance Log", verificationRequired: true, cadence: "daily" },
                { id: "S-EXM-03", technicalProtocol: "Candidate ID Match", floorAction: "Verify 100% of Hall-Tickets match candidate photos.", priority: "High", riskLevel: "High", consequence: "Proxy-candidate fraud.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "S-EXM-04", technicalProtocol: "Digital Clock Sync", floorAction: "Verify hall clocks match the official start-time master.", priority: "Medium", riskLevel: "Low", consequence: "Disputes over duration.", proof: "Visual Check", cadence: "daily" },
                { id: "S-EXM-05", technicalProtocol: "Seating Density Pulse", floorAction: "Verify 3ft min spacing between candidates in Hall 1.", priority: "High", riskLevel: "Low", consequence: "Cheating windows.", proof: "Visual Audit", cadence: "daily" },
                { id: "S-EXM-06", technicalProtocol: "Question-Error Triage", floorAction: "Confirm 100% communication of typo-corrections to all halls.", priority: "Medium", riskLevel: "Low", consequence: "Unfair student penalty.", proof: "Comms Log", cadence: "daily" },
                { id: "S-EXM-07", technicalProtocol: "Mobile/Device Jam", floorAction: "Verify 100% of staff phones are in the locker pre-entry.", priority: "High", riskLevel: "High", consequence: "Content leak via social media.", proof: "Locker Registry", verificationRequired: true, cadence: "daily" },
                { id: "S-EXM-08", technicalProtocol: "Answer Sheet Reconcile", floorAction: "Match sheets collected vs student signatures pre-dispatch.", priority: "High", riskLevel: "High", consequence: "Missing student results.", proof: "Count Sheet", verificationRequired: true, cadence: "daily" },
                { id: "S-EXM-09", technicalProtocol: "Malpractice Escaltion", floorAction: "Document all 'Caught-Red-Handed' cases with physical evidence.", priority: "High", riskLevel: "High", consequence: "Legal reversal of student penalty.", proof: "Incident File", verificationRequired: true, cadence: "incident-based" },
                { id: "S-EXM-10", technicalProtocol: "Secure Transit Seal", floorAction: "Witness seal of evaluated sheets for board courier.", priority: "High", riskLevel: "High", consequence: "Tampering during courier transit.", proof: "Seal Number", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Site & Campus Management",
            department: "Operations",
            frequency: "Daily",
            role: "School Operations Manager",
            summary: "Site-level readiness and non-academic resource governance.",
            icon: "activity",
            tasks: [
                { id: "S-OPS-01", technicalProtocol: "Campus Readiness Seal", floorAction: "Physically sign-off on 100% of morning zone checks.", priority: "High", riskLevel: "Low", consequence: "Delayed school opening.", proof: "Signed Summary", verificationRequired: true, cadence: "daily" },
                { id: "S-OPS-02", technicalProtocol: "Vendor SLA Attendance", floorAction: "Verify outsourced cleaning/security staff count matches contract.", priority: "Medium", riskLevel: "Low", consequence: "Paying for unrendered labor.", proof: "Biometric Log", cadence: "daily" },
                { id: "S-OPS-03", technicalProtocol: "Utility Meter Match", floorAction: "Compare daily KWH and Water usage against branch targets.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored utility cost blowouts.", proof: "Meter Match", cadence: "daily" },
                { id: "S-OPS-04", technicalProtocol: "Event Safety Permit", floorAction: "Review floor plan for upcoming Annual Day for fire-lane clear.", priority: "High", riskLevel: "High", consequence: "Fire hazard during event.", proof: "Permit Note", verificationRequired: true, cadence: "weekly" },
                { id: "S-OPS-05", technicalProtocol: "Parent Feedback Triage", floorAction: "Analyze top 3 non-academic complaints from helpdesk.", priority: "Low", riskLevel: "Low", consequence: "Service quality decay.", proof: "Sentiment Report", cadence: "weekly" },
                { id: "S-OPS-06", technicalProtocol: "Store Inventory Pulse", floorAction: "Reconcile issue of 10 random stationery SKUs.", priority: "Medium", riskLevel: "Low", consequence: "Internal shrinkage.", proof: "Audit Sheet", cadence: "weekly" },
                { id: "S-OPS-07", technicalProtocol: "Canteen Audit (Admin)", floorAction: "Verify FSSAI license display and hygiene cert validity.", priority: "High", riskLevel: "High", consequence: "Regulatory closure.", proof: "License File", verificationRequired: true, cadence: "weekly" },
                { id: "S-OPS-08", technicalProtocol: "Campus Perimeter Scan", floorAction: "Identify and fix any loose boundary wall/fence sections.", priority: "High", riskLevel: "High", consequence: "Unauthorized access.", proof: "Walk Log", verificationRequired: true, cadence: "weekly" },
                { id: "S-OPS-09", technicalProtocol: "Accessibility Sync", floorAction: "Test 100% of wheelchair ramps for zero obstructions.", priority: "Medium", riskLevel: "Low", consequence: "Legal discrimination liability.", proof: "Visual Audit", cadence: "daily" },
                { id: "S-OPS-10", technicalProtocol: "EOD Campus Lockdown", floorAction: "Witness lock of all computer labs and science vaults.", priority: "High", riskLevel: "High", consequence: "Overnight theft.", proof: "Closure Log", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Student Discipline & Behavior",
            department: "Student Support",
            frequency: "Daily",
            role: "Student Discipline Officer",
            summary: "Governance for on-campus behavior and anti-bullying protocols.",
            icon: "users",
            tasks: [
                { id: "S-DIS-01", technicalProtocol: "Bullying Signal Scan", floorAction: "Review peer-conflict logs for patterns or names.", priority: "High", riskLevel: "High", consequence: "Undetected student trauma and parent lawsuit.", proof: "Conflict Registry", verificationRequired: true, cadence: "daily" },
                { id: "S-DIS-02", technicalProtocol: "Uniform Parity Pulse", floorAction: "Audit 5 classrooms for grooming and uniform compliance.", priority: "Low", riskLevel: "Low", consequence: "Erosion of institutional discipline.", proof: "Briefing Log", cadence: "daily" },
                { id: "S-DIS-03", technicalProtocol: "Anti-Ragging Patrol", floorAction: "Conduct 15-min sweep of senior-wing corridors during lunch.", priority: "High", riskLevel: "High", consequence: "Violent behavior incident.", proof: "Patrol Log", verificationRequired: true, cadence: "daily" },
                { id: "S-DIS-04", technicalProtocol: "Digital Behavior Audit", floorAction: "Review reported instances of cyber-bullying in the student app.", priority: "High", riskLevel: "High", consequence: "Out-of-hours student harm.", proof: "Incident Note", verificationRequired: true, cadence: "daily" },
                { id: "S-DIS-05", technicalProtocol: "Confiscated Item Log", floorAction: "Match physical items in locker to the 'Seizure Registry'.", priority: "Medium", riskLevel: "Low", consequence: "Parent disputes.", proof: "Locker Match", cadence: "weekly" },
                { id: "S-DIS-06", technicalProtocol: "Suspension Registry Audit", floorAction: "Verify zero-entry for students on active suspension list.", priority: "High", riskLevel: "Low", consequence: "Unauthorized campus presence.", proof: "Gate Registry", cadence: "daily" },
                { id: "S-DIS-07", technicalProtocol: "Restorative Justice Loop", floorAction: "Conduct 1-on-1 counseling for students involved in yesterday's fight.", priority: "Medium", riskLevel: "Low", consequence: "Repeated failure.", proof: "Counseling Note", cadence: "daily" },
                { id: "S-DIS-08", technicalProtocol: "CCTV Behavioral Check", floorAction: "Review 10-min footage of playground to spot isolation cases.", priority: "Medium", riskLevel: "Low", consequence: "Social neglect of students.", proof: "Review Note", cadence: "weekly" },
                { id: "S-DIS-09", technicalProtocol: "Escalated Parent Huddle", floorAction: "Lead mediation meeting for 2-party student conflict.", priority: "High", riskLevel: "Medium", consequence: "PR crisis.", proof: "Meeting Minutes", verificationRequired: true, cadence: "incident-based" },
                { id: "S-DIS-10", technicalProtocol: "EOD Discipline Summary", floorAction: "Final log of 'Behavior Incident Points' for the day.", priority: "Low", riskLevel: "Low", consequence: "Zero trend visibility.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Fleet & Transport Command",
            department: "Logistics",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "Fleet uptime and driver compliance governance.",
            icon: "bus",
            tasks: [
                { id: "S-TMG-01", technicalProtocol: "Driver Sobriety Pulse", floorAction: "Execute random breathalyzer test for 5 incoming drivers.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash liability.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "S-TMG-02", technicalProtocol: "License Validity Sync", floorAction: "Identify any driver/attendant with license expiry < 30 days.", priority: "High", riskLevel: "High", consequence: "Mass legal liability.", proof: "Registry File", verificationRequired: true, cadence: "weekly" },
                { id: "S-TMG-03", technicalProtocol: "Tyre & Brake Audit", floorAction: "Inspect 2 random buses for thread depth and air pressure.", priority: "High", riskLevel: "High", consequence: "Mechanical failure during route.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "S-TMG-04", technicalProtocol: "GPS Signal Validation", floorAction: "Verify live tracking is online for 100% of fleet.", priority: "Medium", riskLevel: "Low", consequence: "Inability to respond to breakdown.", proof: "System Screen", cadence: "daily" },
                { id: "S-TMG-05", technicalProtocol: "RTO Permit Audit", floorAction: "Confirm 100% active status of institutional permits.", priority: "High", riskLevel: "High", consequence: "Vehicle seizure.", proof: "Permit File", verificationRequired: true, cadence: "monthly" },
                { id: "S-TMG-06", technicalProtocol: "Fuel Card Reconcile", floorAction: "Match fuel liters billed vs KM traveled.", priority: "Medium", riskLevel: "Medium", consequence: "Fuel theft.", proof: "Audit Report", cadence: "weekly" },
                { id: "S-TMG-07", technicalProtocol: "Driver Briefing", floorAction: "Conduct 5-min huddle on 'Safe Drop-off' compliance.", priority: "Low", riskLevel: "Low", consequence: "Brand damage.", proof: "Briefing Log", cadence: "daily" },
                { id: "S-TMG-08", technicalProtocol: "Maint. Downtime Track", floorAction: "Update ETA for buses in the workshop (> 24h).", priority: "Medium", riskLevel: "Low", consequence: "Inadequate route coverage.", proof: "Status Log", cadence: "daily" },
                { id: "S-TMG-09", technicalProtocol: "Incident Post-Mortem", floorAction: "Analyze root-cause for any 'Minor Dent' or fender-bender.", priority: "Medium", riskLevel: "Medium", consequence: "Repeated failure.", proof: "Analysis Log", cadence: "incident-based" },
                { id: "S-TMG-10", technicalProtocol: "EOD Transport Summary", floorAction: "Final sign-off on 100% student arrival/dispersal success.", priority: "High", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Sheet", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Route Execution & Safety",
            department: "Logistics",
            frequency: "Per Trip",
            role: "Bus Route Supervisor",
            summary: "Atomic-level student safety during commute.",
            icon: "bus-front",
            tasks: [
                { id: "S-BRS-01", technicalProtocol: "Boarding ID Match", floorAction: "Verify 100% of student IDs match the route master list.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized student on board.", proof: "Registry Entry", verificationRequired: true, cadence: "daily" },
                { id: "S-BRS-02", technicalProtocol: "Attendance SMS Pulse", floorAction: "Log boarding status; verify automated parent alerts sent.", priority: "Medium", riskLevel: "Low", consequence: "Parental anxiety.", proof: "System Sync", cadence: "daily" },
                { id: "S-BRS-03", technicalProtocol: "Emergency Kit Check", floorAction: "Verify presence of medicine box and functional fire extinguisher.", priority: "High", riskLevel: "High", consequence: "Inability to treat injury.", proof: "Visual Check", cadence: "daily" },
                { id: "S-BRS-04", technicalProtocol: "Safe-Stop Adherence", floorAction: "Confirm 100% of drops occur at designated yellow zones.", priority: "High", riskLevel: "High", consequence: "Accident during de-boarding.", proof: "Supervisor Obs", verificationRequired: true, cadence: "daily" },
                { id: "S-BRS-05", technicalProtocol: "No-Child-Left-Behind", floorAction: "Physically touch the back seat of the bus post-route.", priority: "High", riskLevel: "High", consequence: "[Fatal: Entrapment never-event].", proof: "Walkthrough Log", verificationRequired: true, cadence: "daily" },
                { id: "S-BRS-06", technicalProtocol: "Female Attendant Presence", floorAction: "Confirm on-board position of designated matron.", priority: "High", riskLevel: "High", consequence: "Legal non-compliance.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "S-BRS-07", technicalProtocol: "Behavior Monitoring", floorAction: "Log any student conflict or bullying instances < 1 hour.", priority: "Medium", riskLevel: "Medium", consequence: "Unresolved bullying.", proof: "Log Note", verificationRequired: true, cadence: "daily" },
                { id: "S-BRS-08", technicalProtocol: "CCTV Lens Sweep", floorAction: "Wipe dust from internal bus camera housing.", priority: "Low", riskLevel: "Low", consequence: "Blurry incident evidence.", proof: "Visual Check", cadence: "daily" },
                { id: "S-BRS-09", technicalProtocol: "Hygienic Seat Pulse", floorAction: "Spray sanitizer on high-touch handrails post-trip.", priority: "Low", riskLevel: "Medium", consequence: "Disease spread.", proof: "Cleaning Sheet", cadence: "daily" },
                { id: "S-BRS-10", technicalProtocol: "Authorized Pickup Vetting", floorAction: "Verify 100% of guardian ID cards before releasing child.", priority: "High", riskLevel: "High", consequence: "Kidnapping risk.", proof: "Visual Match", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Infirmary & Student Health",
            department: "Medical",
            frequency: "Daily",
            role: "School Nurse",
            summary: "Zero-fail readiness for on-campus medical events.",
            icon: "heart-pulse",
            tasks: [
                { id: "S-MED-01", technicalProtocol: "AED & Oxygen Pulse", floorAction: "Verify battery status and manifold pressure pre-opening.", priority: "High", riskLevel: "High", consequence: "Fatal resuscitation failure.", proof: "Vitals Log", verificationRequired: true, cadence: "daily" },
                { id: "S-MED-02", technicalProtocol: "Allergy Matrix Sync", floorAction: "Cross-check cafeteria special-diet list for new medical alerts.", priority: "High", riskLevel: "High", consequence: "Anaphylactic shock incident.", proof: "Matrix Match", verificationRequired: true, cadence: "daily" },
                { id: "S-MED-03", technicalProtocol: "Medicine Expiry Audit", floorAction: "Physically check dates on 10 random shelf items.", priority: "Medium", riskLevel: "High", consequence: "Serving ineffective drugs.", proof: "Expiry Log", verificationRequired: true, cadence: "weekly" },
                { id: "S-MED-04", technicalProtocol: "Nebulizer Sterility", floorAction: "Sanitize masks and verify 100% function.", priority: "Medium", riskLevel: "Medium", consequence: "Bacterial spread.", proof: "Cleaning Sheet", cadence: "daily" },
                { id: "S-MED-05", technicalProtocol: "Incident Triage Speed", floorAction: "Log time from 'Call' to 'Nurse Arrival' (Target < 3 mins).", priority: "High", riskLevel: "High", consequence: "Fatal delay in aid.", proof: "TAT Dashboard", verificationRequired: true, cadence: "monthly" },
                { id: "S-MED-06", technicalProtocol: "Chronic Student Log", floorAction: "Verify 100% of students on medication have updated logs.", priority: "High", riskLevel: "Medium", consequence: "Missed doses.", proof: "Patient Chart", verificationRequired: true, cadence: "daily" },
                { id: "S-MED-07", technicalProtocol: "Medical Bay Hygiene", floorAction: "Deep mop infirmary floor with 1% hypochlorite.", priority: "Medium", riskLevel: "High", consequence: "Cross-infection zone.", proof: "Cleaning Log", cadence: "daily" },
                { id: "S-MED-08", technicalProtocol: "Sharps Disposal Audit", floorAction: "Verify needle containers are < 75% full and sealed.", priority: "High", riskLevel: "High", consequence: "Needle-stick injury.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "S-MED-09", technicalProtocol: "Staff First-Aid Pulse", floorAction: "Confirm presence of 2 'Certified Responders' in sports wing.", priority: "Medium", riskLevel: "Low", consequence: "Lack of aid.", proof: "Roster Match", cadence: "daily" },
                { id: "S-MED-10", technicalProtocol: "EOD Medical Summary", floorAction: "Final log of total student visitations and outcomes.", priority: "Low", riskLevel: "Low", consequence: "Zero trend visibility.", proof: "Signed Sheet", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Safety & Compliance Control",
            department: "Safety",
            frequency: "Daily",
            role: "Safety & Compliance Officer",
            summary: "Infrastructure hardening and institutional legal protection.",
            icon: "shield-alert",
            tasks: [
                { id: "S-SAF-01", technicalProtocol: "Fire Exit Clearance", floorAction: "Verify 100% of fire escapes are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment.", proof: "Patrol Log", verificationRequired: true, cadence: "daily" },
                { id: "S-SAF-02", technicalProtocol: "Smoke Detector Sample", floorAction: "Test 5 random heads in junior wing using spray.", priority: "High", riskLevel: "High", consequence: "Undetected fire.", proof: "Test Note", verificationRequired: true, cadence: "weekly" },
                { id: "S-SAF-03", technicalProtocol: "Extinguisher Green-Zone", floorAction: "Confirm needle position for 100% of floor units.", priority: "High", riskLevel: "High", consequence: "Zero firefighting pressure.", proof: "Gauge Log", cadence: "weekly" },
                { id: "S-SAF-04", technicalProtocol: "Panic Button Pulse", floorAction: "Test silent alarms in Admin and Principal's office.", priority: "High", riskLevel: "High", consequence: "Zero response during violence.", proof: "Signal Test", verificationRequired: true, cadence: "daily" },
                { id: "S-SAF-05", technicalProtocol: "Lift Emergency Test", floorAction: "Verify ARD rescue logic and intercom functionality.", priority: "High", riskLevel: "High", consequence: "Student entrapment.", proof: "Test Log", verificationRequired: true, cadence: "weekly" },
                { id: "S-SAF-06", technicalProtocol: "Campus Hazard Sweep", floorAction: "Identify loose tiles or sharp corners near stairs.", priority: "Medium", riskLevel: "Medium", consequence: "Student injury claims.", proof: "Walkthrough", cadence: "daily" },
                { id: "S-SAF-07", technicalProtocol: "Structural Audit Pulse", floorAction: "Identify wall cracks in pre-school wing.", priority: "High", riskLevel: "High", consequence: "Building collapse risk.", proof: "Photo Registry", verificationRequired: true, cadence: "monthly" },
                { id: "S-SAF-08", technicalProtocol: "Emergency Signage Lux", floorAction: "Check night visibility of exit signs.", priority: "Medium", riskLevel: "High", consequence: "Disorientation during smoke.", proof: "Visual Audit", verificationRequired: true, cadence: "weekly" },
                { id: "S-SAF-09", technicalProtocol: "Compliance Expiry Watch", floorAction: "Identify licenses expiring in < 60 days.", priority: "High", riskLevel: "High", consequence: "Institution shutdown.", proof: "Registry Audit", verificationRequired: true, cadence: "monthly" },
                { id: "S-SAF-10", technicalProtocol: "Evacuation Drill Gaps", floorAction: "Confirm closure of 100% of NCs from last drill.", priority: "High", riskLevel: "Medium", consequence: "Repeated failure.", proof: "Correction Log", verificationRequired: true, cadence: "monthly" }
            ]
        },
        {
            title: "IT & Smart Infrastructure",
            department: "IT",
            frequency: "Daily",
            role: "IT & Smart Classroom Coordinator",
            summary: "Digital safety and educational technology uptime.",
            icon: "server",
            tasks: [
                { id: "S-IT-01", technicalProtocol: "Content Filter Pulse", floorAction: "Verify blocking of restricted web categories at Lab-1.", priority: "High", riskLevel: "High", consequence: "Harmful content exposure.", proof: "System Log", verificationRequired: true, cadence: "daily" },
                { id: "S-IT-02", technicalProtocol: "Smart-board Uptime", floorAction: "Check connectivity for 5 prime classrooms.", priority: "Low", riskLevel: "Low", consequence: "Teaching interruption.", proof: "Walkthrough", cadence: "daily" },
                { id: "S-IT-03", technicalProtocol: "Cybersecurity Patch", floorAction: "Verify 100% update of server-room security gateway.", priority: "High", riskLevel: "High", consequence: "Ransomware / PII leak.", proof: "Dashboard Note", verificationRequired: true, cadence: "weekly" },
                { id: "S-IT-04", technicalProtocol: "UPS Battery Pulse", floorAction: "Confirm 15-min backup for the master data switch.", priority: "High", riskLevel: "Medium", consequence: "Internet blackout.", proof: "Voltage Log", verificationRequired: true, cadence: "weekly" },
                { id: "S-IT-05", technicalProtocol: "CCTV RAID Health", floorAction: "Confirm zero 'Red' lights on the storage array.", priority: "High", riskLevel: "High", consequence: "Loss of incident recordings.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "S-IT-06", technicalProtocol: "Student Account Audit", floorAction: "Reset passwords for 10 random student logins.", priority: "Low", riskLevel: "Low", consequence: "Account sharing.", proof: "Audit Log", cadence: "weekly" },
                { id: "S-IT-07", technicalProtocol: "Lab Computer Reset", floorAction: "Execute deep-clean of browsing history on 100% units.", priority: "Medium", riskLevel: "Low", consequence: "Privacy breach.", proof: "System Script", cadence: "daily" },
                { id: "S-IT-08", technicalProtocol: "Digital Signage Sync", floorAction: "Confirm correct lobby content and bell-times.", priority: "Low", riskLevel: "Low", consequence: "Outdated info.", proof: "Visual Check", cadence: "daily" },
                { id: "S-IT-09", technicalProtocol: "Wi-Fi Strength Pulse", floorAction: "Measure signal at farthest corridor corner (> 10Mbps).", priority: "Low", riskLevel: "Low", consequence: "Teaching dead zones.", proof: "App Reading", cadence: "weekly" },
                { id: "S-IT-10", technicalProtocol: "EOD Hardware Shutdown", floorAction: "Verify power-off for all non-essential projection tech.", priority: "Low", riskLevel: "Low", consequence: "Energy waste.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Science & STEAM Labs",
            department: "Academic",
            frequency: "Daily",
            role: "Laboratory Supervisor",
            summary: "Hazardous material governance and experiment safety.",
            icon: "test-tube",
            tasks: [
                { id: "S-LAB-01", technicalProtocol: "Chemical Storage Seal", floorAction: "Verify Acid/Base segregation in locked cabinets.", priority: "High", riskLevel: "High", consequence: "Toxic gas release.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "S-LAB-02", technicalProtocol: "Eye-wash Station Test", floorAction: "Run 10s flush; verify clear water flow.", priority: "High", riskLevel: "High", consequence: "Permanent eye damage.", proof: "Test Log", verificationRequired: true, cadence: "daily" },
                { id: "S-LAB-03", technicalProtocol: "Inventory Reconcile", floorAction: "Match high-risk chemical volumes against usage ledger.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized chemical removal.", proof: "Count Sheet", verificationRequired: true, cadence: "weekly" },
                { id: "S-LAB-04", technicalProtocol: "PPE Availability Pulse", floorAction: "Confirm 50 pairs of nitrile gloves in junior lab.", priority: "Medium", riskLevel: "Low", consequence: "Skin exposure.", proof: "Visual Count", cadence: "daily" },
                { id: "S-LAB-05", technicalProtocol: "Experiment Pre-auth", floorAction: "Verify safety map for today's Grade 12 lab.", priority: "High", riskLevel: "High", consequence: "Uncontrolled reaction.", proof: "Permit Note", verificationRequired: true, cadence: "daily" },
                { id: "S-LAB-06", technicalProtocol: "Lab Gas-Bank Shutdown", floorAction: "Physically witness lock of main Bunsen gas valves.", priority: "High", riskLevel: "High", consequence: "Fire risk.", proof: "Closure Log", verificationRequired: true, cadence: "daily" },
                { id: "S-LAB-07", technicalProtocol: "Specimen Disposal Log", floorAction: "Confirm 100% autoclaving of bio-hazard waste.", priority: "High", riskLevel: "Medium", consequence: "Pathogen spread.", proof: "Disposal Note", cadence: "weekly" },
                { id: "S-LAB-08", technicalProtocol: "Ventilation Hood Pulse", floorAction: "Verify airflow draft in the chemistry wing.", priority: "Medium", riskLevel: "Medium", consequence: "Toxic fume accumulation.", proof: "Test Strip", cadence: "daily" },
                { id: "S-LAB-09", technicalProtocol: "Sharp Tool Audit", floorAction: "Verify 100% count of scalpels in biology store.", priority: "High", riskLevel: "Medium", consequence: "Weaponization risk.", proof: "Stock Sheet", verificationRequired: true, cadence: "daily" },
                { id: "S-LAB-10", technicalProtocol: "EOD Lab Reset", floorAction: "Verify 100% of sinks are clear and stations dry.", priority: "Low", riskLevel: "Low", consequence: "Pest attraction.", proof: "Walkthrough", cadence: "daily" }
            ]
        },
        {
            title: "Parent Relations & PR",
            department: "Front Office",
            frequency: "Daily",
            role: "Parent Relations Executive",
            summary: "Protects institutional reputation and enquiry conversion.",
            icon: "megaphone",
            tasks: [
                { id: "S-PR-01", technicalProtocol: "Enquiry Triage TAT", floorAction: "Reply to 100% of new leads < 2 hours.", priority: "Medium", riskLevel: "Low", consequence: "Conversion drop.", proof: "CRM Dashboard", cadence: "daily" },
                { id: "S-PR-02", technicalProtocol: "Parent Issue Loop", floorAction: "Resolve all admin complaints < 24h.", priority: "High", riskLevel: "Low", consequence: "Viral PR damage.", proof: "Incident Log", cadence: "daily" },
                { id: "S-PR-03", technicalProtocol: "Lobby Ambiance Pulse", floorAction: "Verify air-freshener and lighting pre-opening.", priority: "Low", riskLevel: "Low", consequence: "Poor first-impression.", proof: "Visual Check", cadence: "daily" },
                { id: "S-PR-04", technicalProtocol: "Digital Review Scan", floorAction: "Reply to 100% of unit Google/FB reviews < 12h.", priority: "Medium", riskLevel: "Low", consequence: "Undetected viral decay.", proof: "ORM Dashboard", cadence: "daily" },
                { id: "S-PR-05", technicalProtocol: "Reception Grooming", floorAction: "Audit 5 associates for brand attire compliance.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional image.", proof: "Briefing Log", cadence: "daily" },
                { id: "S-PR-06", technicalProtocol: "Parent ID Verification", floorAction: "Confirm 100% match of visitor to student record.", priority: "High", riskLevel: "High", consequence: "Unauthorized family access.", proof: "Visual Match", verificationRequired: true, cadence: "daily" },
                { id: "S-PR-07", technicalProtocol: "School App Broadcast", floorAction: "Verify 100% success of morning 'Bell-Update' signal.", priority: "Low", riskLevel: "Low", consequence: "Communication gap.", proof: "System Screen", cadence: "daily" },
                { id: "S-PR-08", technicalProtocol: "Waitlist Update", floorAction: "Contact 5 parents on the Grade 1 waitlist.", priority: "Low", riskLevel: "Low", consequence: "Empty revenue seats.", proof: "Call Log", cadence: "weekly" },
                { id: "S-PR-09", technicalProtocol: "Display Screen Parity", floorAction: "Confirm correct achievement slides are playing.", priority: "Low", riskLevel: "Low", consequence: "Marketing disconnect.", proof: "Visual Check", cadence: "daily" },
                { id: "S-PR-10", technicalProtocol: "EOD Enquiry Reconcile", floorAction: "Final count of walk-ins vs conversions.", priority: "Medium", riskLevel: "Low", consequence: "Zero ROI visibility.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Admissions Governance",
            department: "Admissions",
            frequency: "Daily",
            role: "Admissions Coordinator",
            summary: "Document integrity and fee-compliance governance.",
            icon: "user-plus",
            tasks: [
                { id: "S-ADM-01", technicalProtocol: "KYC Document Vetting", floorAction: "Verify 100% original birth-certs for new enrollments.", priority: "High", riskLevel: "High", consequence: "Board audit failure.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "S-ADM-02", technicalProtocol: "Fee Clearance Seal", floorAction: "Verify 100% payment receipt before issuing Hall Tickets.", priority: "High", riskLevel: "Medium", consequence: "Revenue bad-debt.", proof: "Finance Sync", verificationRequired: true, cadence: "daily" },
                { id: "S-ADM-03", technicalProtocol: "Waitlist Integrity", floorAction: "Cross-check 10 entries for first-come-first-serve parity.", priority: "Medium", riskLevel: "Low", consequence: "Favoritism claims.", proof: "Audit Report", cadence: "weekly" },
                { id: "S-ADM-04", technicalProtocol: "Student File Archival", floorAction: "Verify presence of medical forms in 100% of new folders.", priority: "High", riskLevel: "High", consequence: "Medical emergency liability.", proof: "File Match", verificationRequired: true, cadence: "daily" },
                { id: "S-ADM-05", technicalProtocol: "Scholarship Vetting", floorAction: "Audit proof of income for 100% of waiver cases.", priority: "High", riskLevel: "Medium", consequence: "Revenue leakage via fraud.", proof: "Signed Form", verificationRequired: true, cadence: "monthly" },
                { id: "S-ADM-06", technicalProtocol: "Admissions CRM Sync", floorAction: "Ensure zero pending leads > 48h without contact.", priority: "Medium", riskLevel: "Low", consequence: "Conversion drop.", proof: "System Dashboard", cadence: "daily" },
                { id: "S-ADM-07", technicalProtocol: "Sibling Preference", floorAction: "Verify 100% mapping of sibling pairs for route optimization.", priority: "Low", riskLevel: "Low", consequence: "Inefficiency.", proof: "Sample Check", cadence: "weekly" },
                { id: "S-ADM-08", technicalProtocol: "Fee Journal Seriality", floorAction: "Confirm zero gaps in digital receipt sequence.", priority: "High", riskLevel: "High", consequence: "Embezzlement.", proof: "Journal Audit", verificationRequired: true, cadence: "daily" },
                { id: "S-ADM-09", technicalProtocol: "Mailing List Pulse", floorAction: "Update 100% of new parent emails for the group newsletter.", priority: "Low", riskLevel: "Low", consequence: "Communication breakdown.", proof: "System Screen", cadence: "daily" },
                { id: "S-ADM-10", technicalProtocol: "EOD Admissions Summary", floorAction: "Final sign-off on total enrollment units for the day.", priority: "Medium", riskLevel: "Low", consequence: "Loss of capacity intel.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Janitorial & Sanitation",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Hygiene Supervisor",
            summary: "Hourly hygiene command for high-traffic student zones.",
            icon: "sparkles",
            tasks: [
                { id: "S-HYG-01", technicalProtocol: "Washroom Odor Pulse", floorAction: "Audit 30-min cleaning log for junior-wing restrooms.", priority: "High", riskLevel: "Low", consequence: "Parent complaints.", proof: "Hourly Sheet", verificationRequired: true, cadence: "hourly" },
                { id: "S-HYG-02", technicalProtocol: "Consumable Stock Audit", floorAction: "Check par levels for handwash and tissue in Lab zones.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene breakdown.", proof: "Stock Check", cadence: "daily" },
                { id: "S-HYG-03", technicalProtocol: "Deep Clean Milestone", floorAction: "Verify completion of today's high-dusting schedule.", priority: "Low", riskLevel: "Low", consequence: "Airborne bacterial load surge.", proof: "Photo", cadence: "daily" },
                { id: "S-HYG-04", technicalProtocol: "Drinking Water Hygiene", floorAction: "Inspect cooler spouts for zero mold buildup.", priority: "High", riskLevel: "High", consequence: "Disease outbreak.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "S-HYG-05", technicalProtocol: "Spill Response TAT", floorAction: "Execute 2-min cleanup for all detected FOH spills.", priority: "High", riskLevel: "High", consequence: "Student fall injury.", proof: "Incident Log", verificationRequired: true, cadence: "incident-based" },
                { id: "S-HYG-06", technicalProtocol: "Chemical Dilution Ratio", floorAction: "Audit dispenser flow-rates for floor sanitizers.", priority: "High", riskLevel: "Medium", consequence: "Ineffective cleaning.", proof: "Titration Check", cadence: "weekly" },
                { id: "S-HYG-07", technicalProtocol: "Trash Compaction Wave", floorAction: "Execute 2-hourly removal of playground and cafe bins.", priority: "Low", riskLevel: "Low", consequence: "Odor and pest attraction.", proof: "Log Entry", cadence: "hourly" },
                { id: "S-HYG-08", technicalProtocol: "Microfiber Color-Code", floorAction: "Verify red cloths for toilets; blue for desks.", priority: "High", riskLevel: "High", consequence: "Gross cross-contamination.", proof: "Visual Audit", cadence: "daily" },
                { id: "S-HYG-09", technicalProtocol: "Gym Mat Sanitization", floorAction: "Verify steam-cleaning of high-touch sports mats.", priority: "Medium", riskLevel: "Medium", consequence: "Skin infection transmission.", proof: "Cleaning Note", cadence: "daily" },
                { id: "S-HYG-10", technicalProtocol: "Janitor Closet Lock", floorAction: "Verify 100% of chemicals are in locked cabinets.", priority: "High", riskLevel: "High", consequence: "Accidental student poisoning.", proof: "Visual Check", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Perimeter Security",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and protects student safety.",
            icon: "shield-check",
            tasks: [
                { id: "S-SEC-01", technicalProtocol: "CCTV Sync Validation", floorAction: "Verify 30-day recording backup and time sync.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for board audits.", proof: "System Screen", verificationRequired: true, cadence: "daily" },
                { id: "S-SEC-02", technicalProtocol: "Visitor ID Registry", floorAction: "Audit 100% of guest entries for govt ID matching.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder access.", proof: "Registry Audit", verificationRequired: true, cadence: "daily" },
                { id: "S-SEC-03", technicalProtocol: "Guard Sobriety Pulse", floorAction: "Random breathalyzer for 2 AM rotation.", priority: "High", riskLevel: "High", consequence: "Vulnerable night perimeter.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "S-SEC-04", technicalProtocol: "Patrol Frequency Scan", floorAction: "Verify guard tour tags match the boundary patrol roster.", priority: "Medium", riskLevel: "Low", consequence: "Physical security gaps.", proof: "NFC Log", cadence: "daily" },
                { id: "S-SEC-05", technicalProtocol: "Intruder Alarm Test", floorAction: "Trigger 1 random zone; verify 30s response.", priority: "High", riskLevel: "High", consequence: "Failure to stop breach.", proof: "Test Note", cadence: "weekly" },
                { id: "S-SEC-06", technicalProtocol: "Back-gate Lockdown", floorAction: "Physically verify lock status post-staff entry (8:30 AM).", priority: "High", riskLevel: "High", consequence: "Unauthorized student exit.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "S-SEC-07", technicalProtocol: "Incident CCTV Match", floorAction: "Retrieve footage for 100% of reported 'Playground Conflict'.", priority: "Medium", riskLevel: "Low", consequence: "Unresolved behavioral issues.", proof: "Review Registry", cadence: "daily" },
                { id: "S-SEC-08", technicalProtocol: "Security Badge Audit", floorAction: "Check 5 vendors for active on-site vetting badges.", priority: "Medium", riskLevel: "Low", consequence: "Unvetted persons near students.", proof: "Sample Check", cadence: "daily" },
                { id: "S-SEC-09", technicalProtocol: "Entrance Flow Guard", floorAction: "Clear all illegally parked private vehicles from bus lane.", priority: "High", riskLevel: "High", consequence: "Delayed arrival/exit.", proof: "Patrol Log", cadence: "hourly" },
                { id: "S-SEC-10", technicalProtocol: "EOD Facility Lockdown", floorAction: "Final sign-off on 100% door/gate closures.", priority: "High", riskLevel: "Low", consequence: "Theft window.", proof: "Signed Sheet", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Cafeteria & Nutrition",
            department: "Canteen",
            frequency: "Daily",
            role: "Cafeteria Manager",
            summary: "Food safety and student nutritional parity.",
            icon: "utensils",
            tasks: [
                { id: "S-CAN-01", technicalProtocol: "HACCP Thermal Log", floorAction: "Verify holding temps for hot meals (Target > 63°C).", priority: "High", riskLevel: "High", consequence: "Mass food poisoning in students.", proof: "Temp Log", verificationRequired: true, cadence: "hourly" },
                { id: "S-CAN-02", technicalProtocol: "Cold Chain Pulse", floorAction: "Log morning fridge temps for dairy/meats (Target < 4°C).", priority: "High", riskLevel: "High", consequence: "Serving spoiled ingredients.", proof: "Temp Log", verificationRequired: true, cadence: "daily" },
                { id: "S-CAN-03", technicalProtocol: "Allergen Segregation", floorAction: "Verify 100% isolation of GF and Nut-free prep zones.", priority: "High", riskLevel: "High", consequence: "Fatal anaphylactic reaction.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "S-CAN-04", technicalProtocol: "Vegetable Wash", floorAction: "Perform 50ppm chlorine soak for raw salad items.", priority: "High", riskLevel: "High", consequence: "Parasitic transmission.", proof: "Log Entry", cadence: "daily" },
                { id: "S-CAN-05", technicalProtocol: "Staff Health Vetting", floorAction: "Verify zero open wounds for cafeteria servers.", priority: "High", riskLevel: "High", consequence: "Pathogen transmission to students.", proof: "Daily Audit", verificationRequired: true, cadence: "daily" },
                { id: "S-CAN-06", technicalProtocol: "Canteen Waste Weight", floorAction: "Log KG of food discarded to identify yield issues.", priority: "Low", riskLevel: "Low", consequence: "Inefficient procurement.", proof: "Weight Slip", cadence: "daily" },
                { id: "S-CAN-07", technicalProtocol: "Water Purity for Cooking", floorAction: "Log TDS at main kitchen RO point (Target < 100).", priority: "Medium", riskLevel: "High", consequence: "Water-borne outbreak.", proof: "TDS Reading", cadence: "daily" },
                { id: "S-CAN-08", technicalProtocol: "Detergent Storage", floorAction: "Confirm 100% lock-up of dishwashing chemicals.", priority: "High", riskLevel: "High", consequence: "Accidental student ingestion.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "S-CAN-09", technicalProtocol: "Supplier FSSAI Audit", floorAction: "Verify validity of fresh meat/dairy vendor license.", priority: "Medium", riskLevel: "High", consequence: "Unsafe sourcing liability.", proof: "License Registry", cadence: "weekly" },
                { id: "S-CAN-10", technicalProtocol: "EOD Kitchen Shutdown", floorAction: "Witness lock of gas-bank and oven power.", priority: "High", riskLevel: "High", consequence: "Overnight fire risk.", proof: "Closure Log", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Sports & Activities",
            department: "Student Support",
            frequency: "Daily",
            role: "Sports Coordinator",
            summary: "Equipment safety and pitch infrastructure command.",
            icon: "volleyball",
            tasks: [
                { id: "S-SPT-01", technicalProtocol: "Equipment Safety Scan", floorAction: "Inspect posts and gymnastics mats for tears/cracks.", priority: "High", riskLevel: "High", consequence: "Student injury during PE.", proof: "Safety Log", verificationRequired: true, cadence: "daily" },
                { id: "S-SPT-02", technicalProtocol: "Field-side Med Kit", floorAction: "Confirm presence and seal of stocked trauma bag.", priority: "High", riskLevel: "Medium", consequence: "Inability to treat pitch-side injuries.", proof: "Kit Inventory", cadence: "daily" },
                { id: "S-SPT-03", technicalProtocol: "Aquatic Chemistry Pulse", floorAction: "Log Pool pH and Chlorine (Target pH 7.4).", priority: "High", riskLevel: "High", consequence: "Skin infection outbreak.", proof: "Water Log", verificationRequired: true, cadence: "hourly" },
                { id: "S-SPT-04", technicalProtocol: "Lifeguard Readiness", floorAction: "Verify on-site position of 2 certified rescue staff.", priority: "High", riskLevel: "High", consequence: "Fatal drowning liability.", proof: "Roster Match", verificationRequired: true, cadence: "daily" },
                { id: "S-SPT-05", technicalProtocol: "Pool Deck Friction", floorAction: "Inspect for algae or slick zones pre-swim sessions.", priority: "High", riskLevel: "High", consequence: "Slip and fall litigation.", proof: "Patrol Log", verificationRequired: true, cadence: "daily" },
                { id: "S-SPT-06", technicalProtocol: "Sports Store Lock", floorAction: "Witness lock of high-value gym/tech inventory.", priority: "Low", riskLevel: "Low", consequence: "Internal asset shrinkage.", proof: "Visual Check", cadence: "daily" },
                { id: "S-SPT-07", technicalProtocol: "Activity Pre-auth", floorAction: "Verify safety waivers for 100% of high-impact sports.", priority: "High", riskLevel: "High", consequence: "Legal defense failure.", proof: "Waiver Registry", verificationRequired: true, cadence: "weekly" },
                { id: "S-SPT-08", technicalProtocol: "Sports Lighting Test", floorAction: "Verify 100% illumination of pitch floodlights.", priority: "Low", riskLevel: "Low", consequence: "Collision risk.", proof: "Meter Reading", cadence: "daily" },
                { id: "S-SPT-09", technicalProtocol: "Staff Sobriety Pulse", floorAction: "Verify zero impairment for 100% of coaching staff.", priority: "High", riskLevel: "High", consequence: "Safety breach in aquatic zones.", proof: "Briefing Log", verificationRequired: true, cadence: "daily" },
                { id: "S-SPT-10", technicalProtocol: "EOD Field Clear", floorAction: "Ensure 100% of balls and hurdles are returned to store.", priority: "Low", riskLevel: "Low", consequence: "Weather damage to assets.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Inclusive Access & ESG",
            department: "ESG",
            frequency: "Weekly",
            role: "Sustainability Officer",
            summary: "Environmental discipline and resource tracking.",
            icon: "leaf",
            tasks: [
                { id: "S-ESG-01", technicalProtocol: "Paper Usage Pulse", floorAction: "Log reams used vs recycling weight per semester.", priority: "Low", riskLevel: "Low", consequence: "Inefficient waste.", proof: "Weight Slip", cadence: "monthly" },
                { id: "S-ESG-02", technicalProtocol: "Electricity Benchmark", floorAction: "Compare daily KWH meter vs occupancy load.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored energy wastage.", proof: "Meter Match", cadence: "daily" },
                { id: "S-ESG-03", technicalProtocol: "Water Leakage Patrol", floorAction: "Check 3 AM meter for zero-usage baseline.", priority: "High", riskLevel: "Medium", consequence: "Resource waste and structural damage.", proof: "Leak Log", verificationRequired: true, cadence: "daily" },
                { id: "S-ESG-04", technicalProtocol: "Inclusive Access Audit", floorAction: "Verify 100% functionality of braille signage and lifts.", priority: "Medium", riskLevel: "Low", consequence: "Non-inclusive campus perception.", proof: "Visual Audit", cadence: "monthly" },
                { id: "S-ESG-05", technicalProtocol: "Student Green-Talk", floorAction: "Log completion of monthly 'Eco-Awareness' assembly.", priority: "Low", riskLevel: "Low", consequence: "Loss of ESG data points.", proof: "Registry Entry", cadence: "monthly" },
                { id: "S-ESG-06", technicalProtocol: "Vendor Ethics Vetting", floorAction: "Audit 5 random invoices for 'Sustainable Sourcing' flags.", priority: "Low", riskLevel: "Low", consequence: "Supply chain ethical drift.", proof: "Sample Check", cadence: "monthly" },
                { id: "S-ESG-07", technicalProtocol: "Plastic-Free Campus", floorAction: "Verify zero single-use plastics in canteen stores.", priority: "Medium", riskLevel: "High", consequence: "Environmental fines.", proof: "Visual Check", verificationRequired: true, cadence: "weekly" },
                { id: "S-ESG-08", technicalProtocol: "EOD Safety Walk", floorAction: "Witness shutdown of all non-essential hallway lighting.", priority: "High", riskLevel: "Low", consequence: "Massive energy overhead.", proof: "Closure Log", verificationRequired: true, cadence: "daily" },
                { id: "S-ESG-09", technicalProtocol: "Tree Health Survey", floorAction: "Identify any overhanging branches near junior wing.", priority: "Medium", riskLevel: "High", consequence: "Fatal branch fall injury.", proof: "Walk Log", verificationRequired: true, cadence: "weekly" },
                { id: "S-ESG-10", technicalProtocol: "ESG Dashboard Update", floorAction: "Final monthly sign-off on campus sustainability score.", priority: "Low", riskLevel: "Low", consequence: "Zero reporting visibility.", proof: "Signed Sheet", cadence: "monthly" }
            ]
        },
        {
            title: "Facility Maintenance",
            department: "Facilities",
            frequency: "Daily",
            role: "Maintenance Supervisor",
            summary: "MEP assets and infrastructure safety.",
            icon: "wrench",
            tasks: [
                { id: "S-MNT-01", technicalProtocol: "Electrical Panel IR", floorAction: "Perform heat scan of main distribution bank.", priority: "High", riskLevel: "High", consequence: "Overnight fire.", proof: "Scan Log", verificationRequired: true, cadence: "weekly" },
                { id: "S-MNT-02", technicalProtocol: "Potable Water TDS", floorAction: "Log purity at 3 student drinking points.", priority: "High", riskLevel: "High", consequence: "Disease outbreak.", proof: "TDS Reading", verificationRequired: true, cadence: "daily" },
                { id: "S-MNT-03", technicalProtocol: "Generator Load Test", floorAction: "Verify automatic DG switchover < 30 seconds.", priority: "High", riskLevel: "High", consequence: "Campus-wide blackout.", proof: "Test Note", verificationRequired: true, cadence: "weekly" },
                { id: "S-MNT-04", technicalProtocol: "HVAC Return Grille", floorAction: "Clean dust from AHU vents to prevent airflow drag.", priority: "Low", riskLevel: "Low", consequence: "Energy wastage.", proof: "Visual Check", cadence: "weekly" },
                { id: "S-MNT-05", technicalProtocol: "Pump Seal Integrity", floorAction: "Inspect for drips in the campus pump room.", priority: "Medium", riskLevel: "Medium", consequence: "Motor seizure.", proof: "Walkthrough", cadence: "daily" },
                { id: "S-MNT-06", technicalProtocol: "Roof Drain Clearance", floorAction: "Verify zero debris in storm gratings pre-monsoon.", priority: "High", riskLevel: "High", consequence: "Campus flooding.", proof: "Photo", verificationRequired: true, cadence: "weekly" },
                { id: "S-MNT-07", technicalProtocol: "LOTO Enforcement", floorAction: "Confirm 100% of MEP repairs possess lock-out tags.", priority: "High", riskLevel: "High", consequence: "Fatal injury.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "S-MNT-08", technicalProtocol: "Asset Tag Sync", floorAction: "Verify QR link for 5 new items in the IT lab.", priority: "Low", riskLevel: "Low", consequence: "Loss of digital tracking.", proof: "Scan Log", cadence: "weekly" },
                { id: "S-MNT-09", technicalProtocol: "Emergency Signage Illum", floorAction: "Confirm exit sign batteries are healthy.", priority: "Medium", riskLevel: "High", consequence: "Exit panic during power loss.", proof: "Test Note", verificationRequired: true, cadence: "monthly" },
                { id: "S-MNT-10", technicalProtocol: "EOD Power Log", floorAction: "Record daily KWH for the central chiller plant.", priority: "Medium", riskLevel: "Low", consequence: "Zero efficiency visibility.", proof: "Meter Sheet", cadence: "daily" }
            ]
        }
    ]
};
