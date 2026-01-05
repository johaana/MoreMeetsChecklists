
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
                { id: "SOP-HM-01", description: "Perform daily rounds to check for cleanliness, hygiene, and any maintenance issues in all hostel blocks.", priority: "High", riskLevel: "Medium", consequence: "Unsanitary conditions leading to illness, student dissatisfaction.", proof: "Daily rounds logbook." },
                { id: "SOP-HM-02", description: "Verify hostel attendance and log any student who has not returned by the designated time.", priority: "High", riskLevel: "High", consequence: "Inability to account for a student's whereabouts, delayed response to a missing student incident.", proof: "Nightly attendance register." },
                { id: "SOP-HM-03", description: "Inspect mess/canteen facilities for food quality, hygiene, and service.", priority: "High", riskLevel: "High", consequence: "Food poisoning outbreak among students.", proof: "Mess inspection checklist." },
                { id: "SOP-HM-04", description: "Conduct weekly checks of all fire safety equipment (extinguishers, alarms) in hostels.", priority: "High", riskLevel: "High", consequence: "Failure of safety equipment during a fire.", proof: "Fire safety log." },
                { id: "SOP-HM-05", description: "Implement and enforce anti-ragging policies through regular briefings and visible signage.", priority: "High", riskLevel: "High", consequence: "Physical or psychological harm to students, severe legal and reputational damage.", proof: "Anti-ragging committee meeting minutes." },
                { id: "SOP-HM-06", description: "Ensure access to counselors and mental health support for students.", priority: "High", riskLevel: "High", consequence: "Failure to support students in distress, risk of self-harm.", proof: "Counselor availability schedule." },
                { id: "SOP-HM-07", description: "Manage room allocation, changes, and resolve any roommate conflicts.", priority: "Medium", riskLevel: "Low", consequence: "Student dissatisfaction and disputes.", proof: "Room allocation records." },
                { id: "SOP-HM-08", description: "Ensure security personnel are present and alert at hostel entry/exit points.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry, theft, security threats to students.", proof: "Guard deployment roster." }
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
                { id: "SOP-EM-01", description: "Ensure confidential printing and secure storage of question papers.", priority: "High", riskLevel: "High", consequence: "Question paper leak, leading to exam cancellation and massive reputational damage.", proof: "Secure storage access log." },
                { id: "SOP-EM-02", description: "Assign and train invigilators on their duties and responsibilities.", priority: "High", riskLevel: "High", consequence: "Poorly managed exam hall, increased instances of cheating.", proof: "Invigilator training attendance sheet." },
                { id: "SOP-EM-03", description: "Verify student identity against hall tickets and ID cards before allowing entry.", priority: "High", riskLevel: "High", consequence: "Impersonation, fraudulent exam attempts.", proof: "Signed attendance sheet." },
                { id: "SOP-EM-04", description: "Implement a secure process for the collection, coding, and distribution of answer sheets for evaluation.", priority: "High", riskLevel: "High", consequence: "Answer sheets can be lost or tampered with, compromising exam integrity.", proof: "Answer sheet chain-of-custody log." },
                { id: "SOP-EM-05", description: "Have a clear protocol for handling cases of malpractice or cheating.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent or unfair handling of cheating cases.", proof: "Malpractice reporting forms." },
                { id: "SOP-EM-06", description: "Double-check the data entry and tabulation of marks before result declaration.", priority: "High", riskLevel: "High", consequence: "Incorrect results leading to student grievances and re-evaluation requests.", proof: "Result tabulation audit report." },
                { id: "SOP-EM-07", description: "Publish results on the scheduled date and have a clear process for handling student queries.", priority: "High", riskLevel: "Medium", consequence: "Delayed results cause student anxiety, disorganized query handling leads to chaos.", proof: "Result declaration notice." }
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
                { id: "SOP-CS-01", description: "Perform daily patrols of the campus perimeter, checking for security breaches.", priority: "High", riskLevel: "High", consequence: "Intruders on campus, theft, safety risks.", proof: "Patrol logbook." },
                { id: "SOP-CS-02", description: "Monitor CCTV feeds and ensure all cameras are functional.", priority: "High", riskLevel: "High", consequence: "Inability to investigate security incidents.", proof: "CCTV daily health check." },
                { id: "SOP-CS-03", description: "Manage access control for all buildings, especially after hours.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized access to labs, offices, or sensitive areas.", proof: "Access control system logs." },
                { id: "SOP-CS-04", description: "Develop a specific security and crowd management plan for any large campus event.", priority: "High", riskLevel: "High", consequence: "Stampedes, gate-crashing, or violence at events.", proof: "Event security plan document." },
                { id: "SOP-CS-05", description: "Coordinate with local police and emergency services for major events.", priority: "High", riskLevel: "High", consequence: "Delayed or uncoordinated response in case of an emergency.", proof: "Minutes of coordination meeting." },
                { id: "SOP-CS-06", description: "Manage parking and traffic flow during peak hours and events.", priority: "Medium", riskLevel: "Low", consequence: "Traffic chaos, frustration for students and visitors.", proof: "Traffic management plan." },
                { id: "SOP-CS-07", description: "Enforce a strict visitor verification and registration protocol.", priority: "High", riskLevel: "High", consequence: "Unauthorized individuals on campus posing a risk to students.", proof: "Visitor register audit." }
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
                { id: "SOP-LS-01", description: "Verify that eyewash stations, safety showers, and fire extinguishers are accessible and tested weekly.", priority: "High", riskLevel: "High", consequence: "Inability to respond to a chemical splash or fire, leading to severe injury.", proof: "Lab safety equipment log." },
                { id: "SOP-LS-02", description: "Ensure all chemicals are correctly labeled and stored in designated, ventilated cabinets.", priority: "High", riskLevel: "High", consequence: "Chemical spills, toxic fumes, or dangerous reactions from improper storage.", proof: "Chemical storage audit photos." },
                { id: "SOP-LS-03", description: "Maintain a complete inventory of all chemicals and their Safety Data Sheets (SDS).", priority: "High", riskLevel: "High", consequence: "Inability to know what hazards are present or how to handle a spill.", proof: "SDS folder/database." },
                { id: "SOP-LS-04", description: "Enforce the use of appropriate Personal Protective Equipment (PPE) for all lab users.", priority: "High", riskLevel: "High", consequence: "Chemical burns, eye damage, or other injuries.", proof: "PPE compliance spot checks." },
                { id: "SOP-LS-05", description: "Check that all machinery and equipment have their safety guards in place.", priority: "High", riskLevel: "High", consequence: "Entanglement, amputation, or other severe mechanical injuries.", proof: "Machine safety checklist." },
                { id: "SOP-LS-06", description: "Manage the safe disposal of all chemical and biological waste as per regulations.", priority: "High", riskLevel: "High", consequence: "Environmental contamination, legal penalties.", proof: "Hazardous waste disposal manifest." }
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
                { id: "SOP-RC-01", description: "Maintain accurate records of student admissions, enrollment, and diversity as per regulatory formats.", priority: "High", riskLevel: "High", consequence: "Fines, penalties, or loss of affiliation for inaccurate reporting.", proof: "Student data reports." },
                { id: "SOP-RC-02", description: "Ensure faculty qualifications and workload meet regulatory norms.", priority: "High", riskLevel: "High", consequence: "Non-compliance can affect university ranking and accreditation.", proof: "Faculty records audit." },
                { id: "SOP-RC-03", description: "Document and file all required reports for anti-ragging, gender, and other statutory committees.", priority: "High", riskLevel: "High", consequence: "Legal action for non-compliance with social justice mandates.", proof: "Committee report filings." },
                { id: "SOP-RC-04", description: "Maintain records of curriculum development, revisions, and academic council approvals.", priority: "High", riskLevel: "Medium", consequence: "Issues during academic audits.", proof: "Academic council minutes." },
                { id: "SOP-RC-05", description: "Ensure all infrastructure and facilities meet the prescribed standards.", priority: "High", riskLevel: "Medium", consequence: "Negative reports during physical inspections.", proof: "Infrastructure audit report." },
                { id: "SOP-RC-06", description: "Compile and submit the Annual Quality Assurance Report (AQAR) for NAAC/NBA.", priority: "High", riskLevel: "High", consequence: "Loss of accreditation or poor grading.", proof: "AQAR submission copy." }
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
                { id: "SOP-AO-01", description: "Ensure the admissions process is fair, transparent, and well-publicized.", priority: "High", riskLevel: "High", consequence: "Allegations of bias, legal challenges.", proof: "Admissions prospectus and policy." },
                { id: "SOP-AO-02", description: "Verify all student documentation (transcripts, certificates) at the time of admission.", priority: "High", riskLevel: "Medium", consequence: "Admission of ineligible students.", proof: "Document verification checklist." },
                { id: "SOP-AO-03", description: "Manage the fee collection process efficiently and provide clear receipts.", priority: "High", riskLevel: "Medium", consequence: "Billing disputes with parents.", proof: "Fee receipts." },
                { id: "SOP-AO-04", description: "Conduct an orientation program for all new students and parents.", priority: "High", riskLevel: "Low", consequence: "New students feel lost and disconnected.", proof: "Orientation schedule and materials." },
                { id: "SOP-AO-05", description: "Create and distribute student ID cards.", priority: "High", riskLevel: "Low", consequence: "Access control issues, inability to identify students.", proof: "ID card issuance log." }
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
                { id: "SOP-PC-01", description: "Maintain an updated database of corporate contacts and recruiting partners.", priority: "High", riskLevel: "Medium", consequence: "Missed placement opportunities.", proof: "Corporate contact database (CRM)." },
                { id: "SOP-PC-02", description: "Conduct training for students on resume writing, interviews, and group discussions.", priority: "High", riskLevel: "Low", consequence: "Students are unprepared for the placement process.", proof: "Training calendar." },
                { id: "SOP-PC-03", description: "Coordinate all on-campus and off-campus recruitment drives.", priority: "High", riskLevel: "Medium", consequence: "Logistical chaos, poor impression on recruiters.", proof: "Recruitment drive schedule." },
                { id: "SOP-PC-04", description: "Track all job offers and maintain accurate placement statistics.", priority: "High", riskLevel: "High", consequence: "Inaccurate reporting of placement data, which is a key marketing metric.", proof: "Placement report." },
                { id: "SOP-PC-05", description: "Gather feedback from recruiters to improve the placement process.", priority: "Medium", riskLevel: "Low", consequence: "Process does not meet corporate expectations.", proof: "Recruiter feedback forms." }
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
                { id: "SOP-TM-01", description: "Perform daily pre-trip inspections of all buses.", priority: "High", riskLevel: "High", consequence: "Mechanical failure during a trip.", proof: "Daily inspection logs." },
                { id: "SOP-TM-02", description: "Ensure all drivers have valid licenses and receive regular training.", priority: "High", riskLevel: "High", consequence: "Accidents, legal liability.", proof: "Driver files." },
                { id: "SOP-TM-03", description: "Plan and optimize bus routes for efficiency.", priority: "Medium", riskLevel: "Low", consequence: "High fuel costs, long travel times.", proof: "Route maps." },
                { id: "SOP-TM-04", description: "Track bus locations and speed using GPS.", priority: "High", riskLevel: "Medium", consequence: "Inability to respond to breakdowns or accidents.", proof: "GPS tracking portal." },
                { id: "SOP-TM-05", description: "Maintain all buses according to a preventive maintenance schedule.", priority: "High", riskLevel: "High", consequence: "Breakdowns, safety issues.", proof: "Vehicle maintenance records." }
            ]
        }
    ]
};

    