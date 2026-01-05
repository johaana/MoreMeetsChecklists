
import type { PremiumPack } from "@/lib/premium-packs";

export const university_college_ops: PremiumPack = {
    id: 'university_college_ops',
    title: "University & College Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f290d8a5-d913-485e-9905-59b922a01490',
    category: "Education",
    description: "A comprehensive toolkit for Deans, Registrars, and Heads of Administration to manage higher education institutions, ensuring student welfare, academic continuity, and regulatory compliance.",
    icon: "graduation-cap",
    whoIsItFor: ["Deans & VCs", "Registrars", "Heads of Administration", "Hostel Wardens", "Campus Security Heads"],
    sampleItems: [
        { text: "Ensure student well-being with robust hostel management, anti-ragging, and mental health SOPs.", icon: "home" },
        { text: "Maintain academic integrity with checklists for examination management, curriculum planning, and faculty evaluation.", icon: "book-open" },
        { text: "Secure your campus with protocols for access control, event security, and emergency response.", icon: "shield" },
        { text: "Uphold safety standards in laboratories with chemical handling and equipment maintenance checklists.", icon: "flask-conical" },
        { text: "Achieve regulatory compliance (UGC, AICTE) with structured processes for reporting and audits.", icon: "file-check" },
        { text: "Streamline administrative functions like admissions, placements, and transport management.", icon: "briefcase" }
    ],
    checklists: [
        {
            title: "Hostel Management & Student Welfare",
            department: "Student Affairs",
            frequency: "Daily/Weekly",
            role: "Chief Warden",
            summary: "Ensures a safe, clean, and supportive living environment for all resident students.",
            icon: "home",
            tasks: [
                { id: "UCO-HM-01", description: "Perform daily rounds to check for cleanliness, hygiene, and any maintenance issues in all hostel blocks.", priority: "High", riskLevel: "Medium", consequence: "Unsanitary conditions leading to illness, student dissatisfaction.", proof: "Daily rounds logbook." },
                { id: "UCO-HM-02", description: "Verify hostel attendance and log any student who has not returned by the designated time.", priority: "High", riskLevel: "High", consequence: "Inability to account for a student's whereabouts, delayed response to a missing student incident.", proof: "Nightly attendance register." },
                { id: "UCO-HM-03", description: "Inspect mess/canteen facilities for food quality, hygiene, and service.", priority: "High", riskLevel: "High", consequence: "Food poisoning outbreak among students.", proof: "Mess inspection checklist." },
                { id: "UCO-HM-04", description: "Conduct weekly checks of all fire safety equipment (extinguishers, alarms) in hostels.", priority: "High", riskLevel: "High", consequence: "Failure of safety equipment during a fire.", proof: "Fire safety log." },
                { id: "UCO-HM-05", description: "Implement and enforce anti-ragging policies through regular briefings and visible signage.", priority: "High", riskLevel: "High", consequence: "Physical or psychological harm to students, severe legal and reputational damage.", proof: "Anti-ragging committee meeting minutes." },
                { id: "UCO-HM-06", description: "Ensure access to counselors and mental health support for students.", priority: "High", riskLevel: "High", consequence: "Failure to support students in distress, risk of self-harm.", proof: "Counselor availability schedule." },
                { id: "UCO-HM-07", description: "Manage room allocation, changes, and resolve any roommate conflicts.", priority: "Medium", riskLevel: "Low", consequence: "Student dissatisfaction and disputes.", proof: "Room allocation records." },
                { id: "UCO-HM-08", description: "Ensure security personnel are present and alert at hostel entry/exit points.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry, theft, security threats to students.", proof: "Guard deployment roster." },
                { id: "UCO-HM-09", description: "Maintain a log of all maintenance requests from hostel residents and track to resolution.", priority: "Medium", riskLevel: "Low", consequence: "Student complaints about unresolved issues like plumbing or electrical faults.", proof: "Hostel Maintenance Log." },
                { id: "UCO-HM-10", description: "Conduct surprise inspections to check for unauthorized appliances or substances.", priority: "High", riskLevel: "Medium", consequence: "Fire hazards, violation of hostel rules.", proof: "Surprise Inspection Report." }
            ]
        },
        {
            title: "Examination Management",
            department: "Controller of Examinations",
            frequency: "Per Exam Cycle",
            role: "COE",
            summary: "A protocol to ensure the integrity, confidentiality, and smooth execution of all university examinations.",
            icon: "file-text",
            tasks: [
                { id: "UCO-EM-01", description: "Ensure confidential printing and secure storage of question papers in a sealed, access-controlled room.", priority: "High", riskLevel: "High", consequence: "Question paper leak, leading to exam cancellation and massive reputational damage.", proof: "Secure storage access log." },
                { id: "UCO-EM-02", description: "Assign and train invigilators on their duties, including handling of malpractice and student queries.", priority: "High", riskLevel: "High", consequence: "Poorly managed exam hall, increased instances of cheating.", proof: "Invigilator training attendance sheet." },
                { id: "UCO-EM-03", description: "Verify student identity against hall tickets and ID cards before allowing entry to the examination hall.", priority: "High", riskLevel: "High", consequence: "Impersonation, fraudulent exam attempts.", proof: "Signed attendance sheet." },
                { id: "UCO-EM-04", description: "Implement a secure process for the collection, coding, and distribution of answer sheets for evaluation.", priority: "High", riskLevel: "High", consequence: "Answer sheets can be lost or tampered with, compromising exam integrity.", proof: "Answer sheet chain-of-custody log." },
                { id: "UCO-EM-05", description: "Have a clear protocol for handling cases of malpractice or cheating, including evidence collection.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent or unfair handling of cheating cases.", proof: "Malpractice reporting forms." },
                { id: "UCO-EM-06", description: "Double-check the data entry and tabulation of marks before result declaration.", priority: "High", riskLevel: "High", consequence: "Incorrect results leading to student grievances and re-evaluation requests.", proof: "Result tabulation audit report." },
                { id: "UCO-EM-07", description: "Publish results on the scheduled date and have a clear process for handling student queries and re-evaluation requests.", priority: "High", riskLevel: "Medium", consequence: "Delayed results cause student anxiety; disorganized query handling leads to chaos.", proof: "Result declaration notice." },
                { id: "UCO-EM-08", description: "Ensure seating arrangements are planned to minimize cheating opportunities.", priority: "High", riskLevel: "Medium", consequence: "Facilitates cheating.", proof: "Seating Arrangement Plan." },
                { id: "UCO-EM-09", description: "Brief invigilators on the specific exam regulations and materials allowed.", priority: "High", riskLevel: "Medium", consequence: "Confusion over rules, inconsistent enforcement.", proof: "Invigilator Briefing Sheet." },
                { id: "UCO-EM-10", description: "Securely archive all exam records (question papers, answer sheets, mark lists) as per university policy.", priority: "High", riskLevel: "Medium", consequence: "Inability to retrieve records for legal or academic purposes.", proof: "Archive Log." }
            ]
        },
        {
            title: "Campus Security & Event Management",
            department: "Security",
            frequency: "Daily/Per Event",
            role: "Chief Security Officer",
            summary: "Manages day-to-day campus security and special protocols for events like festivals or conferences.",
            icon: "shield",
            tasks: [
                { id: "UCO-CS-01", description: "Perform daily patrols of the campus perimeter, checking for security breaches.", priority: "High", riskLevel: "High", consequence: "Intruders on campus, theft, safety risks.", proof: "Patrol logbook." },
                { id: "UCO-CS-02", description: "Monitor CCTV feeds and ensure all cameras are functional, with adequate storage.", priority: "High", riskLevel: "High", consequence: "Inability to investigate security incidents.", proof: "CCTV daily health check." },
                { id: "UCO-CS-03", description: "Manage access control for all buildings, especially after hours.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized access to labs, offices, or sensitive areas.", proof: "Access control system logs." },
                { id: "UCO-CS-04", description: "Develop a specific security and crowd management plan for any large campus event.", priority: "High", riskLevel: "High", consequence: "Stampedes, gate-crashing, or violence at events.", proof: "Event security plan document." },
                { id: "UCO-CS-05", description: "Coordinate with local police and emergency services for major events.", priority: "High", riskLevel: "High", consequence: "Delayed or uncoordinated response in case of an emergency.", proof: "Minutes of coordination meeting." },
                { id: "UCO-CS-06", description: "Manage parking and traffic flow during peak hours and events.", priority: "Medium", riskLevel: "Low", consequence: "Traffic chaos, frustration for students and visitors.", proof: "Traffic management plan." },
                { id: "UCO-CS-07", description: "Enforce a strict visitor verification and registration protocol.", priority: "High", riskLevel: "High", consequence: "Unauthorized individuals on campus posing a risk to students.", proof: "Visitor register audit." },
                { id: "UCO-CS-08", description: "Ensure all security staff have valid licenses and receive regular training.", priority: "High", riskLevel: "Medium", consequence: "Untrained security force is a liability.", proof: "Staff Training Records." },
                { id: "UCO-CS-09", description: "Test campus-wide emergency broadcast/siren system monthly.", priority: "High", riskLevel: "High", consequence: "Inability to alert the entire campus in a major emergency.", proof: "System Test Log." },
                { id: "UCO-CS-10", description: "Maintain a log of all security incidents and report trends to management.", priority: "High", riskLevel: "Medium", consequence: "Failure to identify patterns that could prevent future incidents.", proof: "Incident Analysis Report." }
            ]
        },
        {
            title: "Lab Safety & Chemical Handling",
            department: "Science/Engineering",
            frequency: "Weekly",
            role: "Lab In-charge/Safety Officer",
            summary: "Ensures a safe environment in all science and engineering laboratories.",
            icon: "flask-conical",
            tasks: [
                { id: "UCO-LS-01", description: "Verify that eyewash stations, safety showers, and fire extinguishers are accessible and tested weekly.", priority: "High", riskLevel: "High", consequence: "Inability to respond to a chemical splash or fire, leading to severe injury.", proof: "Lab safety equipment log." },
                { id: "UCO-LS-02", description: "Ensure all chemicals are correctly labeled and stored in designated, ventilated cabinets.", priority: "High", riskLevel: "High", consequence: "Chemical spills, toxic fumes, or dangerous reactions from improper storage.", proof: "Chemical storage audit photos." },
                { id: "UCO-LS-03", description: "Maintain a complete inventory of all chemicals and their Safety Data Sheets (SDS).", priority: "High", riskLevel: "High", consequence: "Inability to know what hazards are present or how to handle a spill.", proof: "SDS folder/database." },
                { id: "UCO-LS-04", description: "Enforce the use of appropriate Personal Protective Equipment (PPE) for all lab users.", priority: "High", riskLevel: "High", consequence: "Chemical burns, eye damage, or other injuries.", proof: "PPE compliance spot checks." },
                { id: "UCO-LS-05", description: "Check that all machinery and equipment have their safety guards in place.", priority: "High", riskLevel: "High", consequence: "Entanglement, amputation, or other severe mechanical injuries.", proof: "Machine safety checklist." },
                { id: "UCO-LS-06", description: "Manage the safe disposal of all chemical and biological waste as per regulations.", priority: "High", riskLevel: "High", consequence: "Environmental contamination, legal penalties.", proof: "Hazardous waste disposal manifest." },
                { id: "UCO-LS-07", description: "Ensure lab ventilation/fume hoods are functional and tested annually.", priority: "High", riskLevel: "High", consequence: "Exposure of students and staff to toxic fumes.", proof: "Ventilation Test Certificate." },
                { id: "UCO-LS-08", description: "Provide mandatory lab safety induction for all new students and staff.", priority: "High", riskLevel: "High", consequence: "Untrained users are a danger to themselves and others.", proof: "Induction Training Records." },
                { id: "UCO-LS-09", description: "Maintain a log of all lab accidents and near misses.", priority: "High", riskLevel: "Medium", consequence: "Failure to learn from mistakes, leading to repeated accidents.", proof: "Lab Incident Log." },
                { id: "UCO-LS-10", description: "Ensure a spill kit appropriate for the chemicals in use is available and stocked.", priority: "High", riskLevel: "High", consequence: "Inability to safely clean up a chemical spill.", proof: "Spill Kit Checklist." }
            ]
        },
        {
            title: "Regulatory Compliance (UGC/AICTE)",
            department: "Administration",
            frequency: "Annual",
            role: "Registrar",
            summary: "A checklist to ensure all data and documentation is ready for annual regulatory submissions.",
            icon: "file-check",
            tasks: [
                { id: "UCO-RC-01", description: "Maintain accurate records of student admissions, enrollment, and diversity as per regulatory formats.", priority: "High", riskLevel: "High", consequence: "Fines, penalties, or loss of affiliation for inaccurate reporting.", proof: "Student data reports." },
                { id: "UCO-RC-02", description: "Ensure faculty qualifications and workload meet regulatory norms.", priority: "High", riskLevel: "High", consequence: "Non-compliance can affect university ranking and accreditation.", proof: "Faculty records audit." },
                { id: "UCO-RC-03", description: "Document and file all required reports for anti-ragging, gender, and other statutory committees.", priority: "High", riskLevel: "High", consequence: "Legal action for non-compliance with social justice mandates.", proof: "Committee report filings." },
                { id: "UCO-RC-04", description: "Maintain records of curriculum development, revisions, and academic council approvals.", priority: "High", riskLevel: "Medium", consequence: "Issues during academic audits.", proof: "Academic council minutes." },
                { id: "UCO-RC-05", description: "Ensure all infrastructure and facilities meet the prescribed standards.", priority: "High", riskLevel: "Medium", consequence: "Negative reports during physical inspections.", proof: "Infrastructure audit report." },
                { id: "UCO-RC-06", description: "Compile and submit the Annual Quality Assurance Report (AQAR) for NAAC/NBA.", priority: "High", riskLevel: "High", consequence: "Loss of accreditation or poor grading.", proof: "AQAR submission copy." },
                { id: "UCO-RC-07", description: "Maintain a public disclosure of all mandatory information on the university website.", priority: "High", riskLevel: "Medium", consequence: "Non-compliance with transparency regulations.", proof: "Website Audit Screenshot." },
                { id: "UCO-RC-08", description: "Track and ensure timely renewal of all accreditations and affiliations.", priority: "High", riskLevel: "High", consequence: "Lapse in accreditation can make degrees invalid.", proof: "Accreditation Tracker." },
                { id: "UCO-RC-09", description: "Prepare all necessary documentation for regulatory inspections (e.g., UGC expert committee visits).", priority: "High", riskLevel: "High", consequence: "A poor showing during an inspection can have severe consequences.", proof: "Inspection Readiness File." },
                { id: "UCO-RC-10", description: "Keep abreast of all changes in higher education regulations and update internal policies accordingly.", priority: "High", riskLevel: "High", consequence: "Non-compliance due to ignorance of new rules.", proof: "Regulatory Update Log." }
            ]
        },
        {
            title: "Admissions & Onboarding",
            department: "Admissions",
            frequency: "Per Admission Cycle",
            role: "Admissions Director",
            summary: "A smooth and compliant process for student admissions and induction.",
            icon: "user-plus",
            tasks: [
                { id: "UCO-AO-01", description: "Ensure the admissions process is fair, transparent, and well-publicized.", priority: "High", riskLevel: "High", consequence: "Allegations of bias, legal challenges.", proof: "Admissions prospectus and policy." },
                { id: "UCO-AO-02", description: "Verify all student documentation (transcripts, certificates) at the time of admission.", priority: "High", riskLevel: "Medium", consequence: "Admission of ineligible students.", proof: "Document verification checklist." },
                { id: "UCO-AO-03", description: "Manage the fee collection process efficiently and provide clear receipts.", priority: "High", riskLevel: "Medium", consequence: "Billing disputes with parents.", proof: "Fee receipts." },
                { id: "UCO-AO-04", description: "Conduct an orientation program for all new students and parents.", priority: "High", riskLevel: "Low", consequence: "New students feel lost and disconnected.", proof: "Orientation schedule and materials." },
                { id: "UCO-AO-05", description: "Create and distribute student ID cards.", priority: "High", riskLevel: "Low", consequence: "Access control issues, inability to identify students.", proof: "ID card issuance log." },
                { id: "UCO-AO-06", description: "Handle all admission-related queries from prospective students and parents professionally.", priority: "High", riskLevel: "Medium", consequence: "Poor communication can lead to loss of potential students.", proof: "Query Response Log." },
                { id: "UCO-AO-07", description: "Ensure compliance with reservation policies as per government norms.", priority: "High", riskLevel: "High", consequence: "Legal action and penalties.", proof: "Reservation Roster." },
                { id: "UCO-AO-08", description: "Publish selection and waitlists on the scheduled dates.", priority: "High", riskLevel: "Medium", consequence: "Delays cause anxiety and frustration.", proof: "Published Lists." },
                { id: "UCO-AO-09", description: "Securely handle all application data in compliance with privacy laws.", priority: "High", riskLevel: "High", consequence: "Data breach of applicant information.", proof: "Data Handling Policy." },
                { id: "UCO-AO-10", description: "Generate unique student enrollment numbers for all new admissions.", priority: "High", riskLevel: "Medium", consequence: "Essential for all future academic and administrative records.", proof: "Enrollment Register." }
            ]
        },
        {
            title: "Placements & Career Services",
            department: "Placements",
            frequency: "Ongoing",
            role: "Placement Officer",
            summary: "A framework to manage corporate relations and help students secure placements.",
            icon: "briefcase",
            tasks: [
                { id: "UCO-PC-01", description: "Maintain an updated database of corporate contacts and recruiting partners.", priority: "High", riskLevel: "Medium", consequence: "Missed placement opportunities.", proof: "Corporate contact database (CRM)." },
                { id: "UCO-PC-02", description: "Conduct training for students on resume writing, interviews, and group discussions.", priority: "High", riskLevel: "Low", consequence: "Students are unprepared for the placement process.", proof: "Training calendar." },
                { id: "UCO-PC-03", description: "Coordinate all on-campus and off-campus recruitment drives.", priority: "High", riskLevel: "Medium", consequence: "Logistical chaos, poor impression on recruiters.", proof: "Recruitment drive schedule." },
                { id: "UCO-PC-04", description: "Track all job offers and maintain accurate placement statistics.", priority: "High", riskLevel: "High", consequence: "Inaccurate reporting of placement data, which is a key marketing metric.", proof: "Placement report." },
                { id: "UCO-PC-05", description: "Gather feedback from recruiters to improve the placement process.", priority: "Medium", riskLevel: "Low", consequence: "Process does not meet corporate expectations.", proof: "Recruiter feedback forms." },
                { id: "UCO-PC-06", description: "Verify job offers before they are communicated to students.", priority: "High", riskLevel: "High", consequence: "Students acting on fraudulent job offers.", proof: "Offer Verification Log." },
                { id: "UCO-PC-07", description: "Manage a student placement portal with updated job listings.", priority: "High", riskLevel: "Medium", consequence: "Students are unaware of available opportunities.", proof: "Placement Portal." },
                { id: "UCO-PC-08", description: "Counsel students on career choices and further studies.", priority: "Medium", riskLevel: "Low", consequence: "Students may not be aware of all their career options.", proof: "Counseling Schedule." },
                { id: "UCO-PC-09", description: "Build and maintain relationships with alumni for mentorship and job opportunities.", priority: "Medium", riskLevel: "Low", consequence: "Untapped resource for current students.", proof: "Alumni Network Database." },
                { id: "UCO-PC-10", description: "Publish an annual, audited placement report.", priority: "High", riskLevel: "High", consequence: "Builds credibility and trust with prospective students and parents.", proof: "Audited Placement Report." }
            ]
        },
        {
            title: "Transport Management",
            department: "Transport",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "Manages the university's fleet of buses for student and staff transport.",
            icon: "bus",
            tasks: [
                { id: "UCO-TM-01", description: "Perform daily pre-trip inspections of all buses (brakes, lights, tires, emergency exit).", priority: "High", riskLevel: "High", consequence: "Mechanical failure during a trip leading to an accident.", proof: "Daily inspection logs." },
                { id: "UCO-TM-02", description: "Ensure all drivers have valid licenses and receive regular training, including defensive driving.", priority: "High", riskLevel: "High", consequence: "Accidents, major legal liability.", proof: "Driver files with license and training records." },
                { id: "UCO-TM-03", description: "Plan and optimize bus routes for efficiency and timeliness.", priority: "Medium", riskLevel: "Low", consequence: "High fuel costs, long travel times for students.", proof: "Route maps and schedules." },
                { id: "UCO-TM-04", description: "Track bus locations and speed using GPS.", priority: "High", riskLevel: "Medium", consequence: "Inability to respond to breakdowns or accidents; cannot verify driver behavior.", proof: "GPS tracking portal." },
                { id: "UCO-TM-05", description: "Maintain all buses according to a preventive maintenance schedule.", priority: "High", riskLevel: "High", consequence: "Breakdowns, safety issues, costly reactive repairs.", proof: "Vehicle maintenance records." },
                { id: "UCO-TM-06", description: "Ensure all buses are equipped with functional first-aid kits and fire extinguishers.", priority: "High", riskLevel: "High", consequence: "Inability to handle a medical emergency or fire on the bus.", proof: "Weekly Safety Kit Check." },
                { id: "UCO-TM-07", description: "Check functionality of on-bus CCTV cameras daily.", priority: "High", riskLevel: "Medium", consequence: "No evidence in case of an incident or misbehavior on the bus.", proof: "CCTV Health Log." },
                { id: "UCO-TM-08", description: "Have a clear protocol for handling breakdowns or accidents.", priority: "High", riskLevel: "High", consequence: "A disorganized response can leave students stranded or delay medical help.", proof: "Breakdown SOP." },
                { id: "UCO-TM-09", description: "Gather feedback from students and staff on transport services.", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunity to improve service quality.", proof: "Feedback Form." },
                { id: "UCO-TM-10", description: "Ensure all buses comply with local RTO fitness and emission norms.", priority: "High", riskLevel: "High", consequence: "Fines, seizure of vehicles, regulatory action.", proof: "Valid Fitness Certificates." }
            ]
        }
    ]
};

    