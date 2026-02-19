
import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c12368-2c26-4e58-b1de-149b80b292e7',
    category: "Education",
    description: "Stop student safety incidents, administrative chaos, and transport tragedies—before they destroy your school's reputation and legal standing.",
    heroHeadline: "Prevent student safety incidents and transport tragedies.",
    heroSubheadline: "Built for Principals and Trustees who take zero-risk campus security and operational excellence seriously.",
    pricingUrgency: "A single campus safety failure or transport 'never event' costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "school",
    badgeText: "Safety Critical",
    badgeVariant: "destructive",
    whoIsItFor: ["School Principals", "Trustees & Board Members", "Heads of Administration", "Transport Managers"],
    sampleItems: [
        { text: "<strong>Ensure</strong> student safety with robust transport, visitor management, and emergency response protocols.", icon: "bus" },
        { text: "<strong>Prevent</strong> accidents with checklists for campus safety, playground inspections, and lab safety.", icon: "shield" },
        { text: "<strong>Guarantee</strong> a healthy environment with SOPs for kitchen hygiene, food safety, and water testing.", icon: "sparkles" },
        { text: "<strong>Maintain</strong> educational standards with tools for staff hiring, vetting, and code of conduct.", icon: "user-check" },
        { text: "<strong>Manage</strong> administrative complexity with structured admissions, enrolment, and examination processes.", icon: "clipboard-list" }
    ],
    checklists: [
        {
            title: "Student Transport & Safety",
            department: "Transport",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "A comprehensive checklist to ensure the safe transportation of all students.",
            icon: "bus",
            tasks: [
                { id: "TRAN-01", description: "Perform daily pre-trip inspection of the bus (brakes, tires, lights).", priority: "High", riskLevel: "High", consequence: "A mechanical failure during a trip can lead to a serious accident.", proof: "Pre-trip Checklist" },
                { id: "TRAN-02", description: "Ensure the GPS tracker and CCTV inside the bus are functional.", priority: "High", riskLevel: "High", consequence: "In an emergency or for a complaint, this provides crucial evidence and tracking.", proof: "System Health Check" },
                { id: "TRAN-03", description: "Verify driver and conductor have valid licenses and IDs.", priority: "High", riskLevel: "High", consequence: "Using an unlicensed driver is a major legal and safety violation.", proof: "ID Check Log" },
                { id: "TRAN-04", description: "Check that a female attendant is present on every bus route.", priority: "High", riskLevel: "High", consequence: "A mandatory safety requirement in many jurisdictions to protect children.", proof: "Attendance Log" },
                { id: "TRAN-05", description: "Perform a mandatory walkthrough of the bus at the end of each trip to ensure no child is left behind.", priority: "High", riskLevel: "High", consequence: "Failure can lead to a child being locked in the bus, a potentially fatal 'never event'.", proof: "Post-trip Clearance Log" },
                { id: "TRAN-06", description: "Ensure first-aid kit is available and stocked in every bus.", priority: "High", riskLevel: "Medium", consequence: "Inability to provide basic first aid for injuries during transit.", proof: "First-Aid Kit Log" },
                { id: "TRAN-07", description: "Monitor bus speed and route adherence through GPS tracking.", priority: "High", riskLevel: "Medium", consequence: "Helps to curb rash driving and unauthorized route deviations.", proof: "GPS Report" },
                { id: "TRAN-08", description: "Train drivers and attendants on emergency procedures.", priority: "High", riskLevel: "High", consequence: "An untrained crew can cause panic and confusion in an emergency.", proof: "Training Records" },
                { id: "TRAN-09", description: "Maintain a log of all student drop-offs and pickups.", priority: "High", riskLevel: "High", consequence: "Crucial for accountability and investigating any disputes about pickups.", proof: "Drop-off Log" },
                { id: "TRAN-10", description: "Conduct regular maintenance of all buses.", priority: "High", riskLevel: "High", consequence: "Prevents breakdowns and ensures the fleet is safe.", proof: "Maintenance Records" }
            ]
        },
        {
            title: "Visitor Management & Security",
            department: "Security",
            frequency: "Ongoing",
            role: "Security Head",
            summary: "A strict protocol to screen and track all visitors on campus.",
            icon: "user-check",
            tasks: [
                { id: "VIS-MG-01", description: "Verify government-issued ID for every visitor.", priority: "High", riskLevel: "High", consequence: "The first and most basic step to preventing unauthorized entry.", proof: "Visitor Logbook" },
                { id: "VIS-MG-02", description: "Issue a visitor pass and ensure it is worn at all times.", priority: "High", riskLevel: "Medium", consequence: "Allows staff to quickly identify who is a visitor and who is not.", proof: "Pass Issue Log" },
                { id: "VIS-MG-03", description: "Check visitor against a pre-approved pickup list for student pickups.", priority: "High", riskLevel: "High", consequence: "The primary control to prevent a child from being picked up by an unauthorized person.", proof: "Approved List" },
                { id: "VIS-MG-04", description: "Escort all maintenance staff and vendors within the school premises.", priority: "High", riskLevel: "High", consequence: "Prevents unknown individuals from wandering the campus unsupervised.", proof: "Escort Log" },
                { id: "VIS-MG-05", description: "Conduct background checks for all long-term vendors and contractors.", priority: "High", riskLevel: "High", consequence: "A crucial step to ensure individuals with a criminal history do not have regular access to children.", proof: "Background Check Report" },
                { id: "VIS-MG-06", description: "Monitor CCTV cameras covering entry/exit points.", priority: "High", riskLevel: "High", consequence: "Provides a record of everyone who enters and leaves the campus.", proof: "CCTV Log" },
                { id: "VIS-MG-07", description: "Ensure all visitors sign out upon leaving.", priority: "High", riskLevel: "Medium", consequence: "Helps to know who is still on campus in case of an emergency lockdown.", proof: "Visitor Logbook" },
                { id: "VIS-MG-08", description: "Secure all gates and entrances after school hours.", priority: "High", riskLevel: "High", consequence: "Prevents trespassing and vandalism overnight.", proof: "Gate Lock Log" },
                { id: "VIS-MG-09", description: "Train security staff on handling unauthorized entry attempts.", priority: "High", riskLevel: "High", consequence: "An untrained guard may not respond correctly to a security threat.", proof: "Training Records" },
                { id: "VIS-MG-10", description: "Maintain a lost and found register.", priority: "Medium", riskLevel: "Low", consequence: "A simple process that improves parent and student experience.", proof: "Lost & Found Log" }
            ]
        },
        {
            title: "Campus & Playground Safety",
            department: "Facilities",
            frequency: "Daily",
            role: "Facility Manager",
            summary: "Ensures all learning spaces are safe and free from hazards.",
            icon: "shield",
            tasks: [
                { id: "CPS-01", description: "Inspect playground equipment for sharp edges, rust, or loose parts.", priority: "High", riskLevel: "High", consequence: "Faulty equipment is a leading cause of injuries to children.", proof: "Playground Inspection Log" },
                { id: "CPS-02", description: "Check classroom furniture for stability and any defects.", priority: "High", riskLevel: "Medium", consequence: "A broken desk or chair can cause injuries.", proof: "Classroom Furniture Log" },
                { id: "CPS-03", description: "Inspect all campus areas for trip hazards, water logging, or other dangers.", priority: "High", riskLevel: "High", consequence: "Proactively prevents slip, trip, and fall accidents.", proof: "Campus Walkthrough Log" },
                { id: "CPS-04", description: "Ensure all electrical sockets are covered and wires are concealed.", priority: "High", riskLevel: "High", consequence: "A critical step to prevent electrical shocks to curious children.", proof: "Electrical Safety Log" },
                { id: "CPS-05", description: "Check that all chemicals in labs are stored safely and labeled.", priority: "High", riskLevel: "High", consequence: "Improper storage can lead to dangerous spills or accidental ingestion.", proof: "Lab Safety Audit" },
                { id: "CPS-06", description: "Verify that first-aid kits are available in designated areas.", priority: "High", riskLevel: "Medium", consequence: "In an injury, a missing first-aid kit can delay crucial initial care.", proof: "First-Aid Kit Check" },
                { id: "CPS-07", description: "Inspect fire extinguishers and alarms.", priority: "High", riskLevel: "High", consequence: "A non-functional fire safety system is a major life-safety failure.", proof: "Fire Safety Log" },
                { id: "CPS-08", description: "Ensure all areas are adequately lit.", priority: "High", riskLevel: "Medium", consequence: "Poor lighting can lead to accidents and can be a security risk.", proof: "Lighting Check" },
                { id: "CPS-09", description: "Check water coolers for hygiene and functionality.", priority: "High", riskLevel: "Medium", consequence: "Prevents the spread of waterborne illnesses.", proof: "Water Cooler Log" },
                { id: "CPS-10", description: "Report and cordon off any unsafe areas immediately.", priority: "High", riskLevel: "High", consequence: "Prevents students from accessing a hazardous area before it can be repaired.", proof: "Incident Report" }
            ]
        },
        {
            title: "Emergency Preparedness",
            department: "Admin",
            frequency: "Quarterly",
            role: "Admin Head",
            summary: "A protocol for handling on-campus emergencies like medical issues, fires, or security threats.",
            icon: "siren",
            tasks: [
                { id: "EP-01", description: "Conduct a fire evacuation drill every quarter.", priority: "High", riskLevel: "High", consequence: "Without drills, an evacuation will be chaotic and slow, costing precious time.", proof: "Drill Report" },
                { id: "EP-02", description: "Ensure all staff are trained in basic first-aid and CPR.", priority: "High", riskLevel: "High", consequence: "A trained first responder can save a life in the critical minutes before an ambulance arrives.", proof: "Training Records" },
                { id: "EP-03", description: "Maintain an updated emergency contact list for every student.", priority: "High", riskLevel: "High", consequence: "In an emergency, the inability to contact a parent causes immense distress and can delay medical decisions.", proof: "Contact List" },
                { id: "EP-04", description: "Ensure emergency alarms and public address systems are working.", priority: "High", riskLevel: "High", consequence: "If you cannot alert the campus, you cannot execute the emergency plan.", proof: "System Test Log" },
                { id: "EP-05", description: "Have a clear protocol for medical emergencies.", priority: "High", riskLevel: "High", consequence: "A defined process ensures a swift and correct response to a medical crisis.", proof: "Medical Emergency SOP" },
                { id: "EP-06", description: "Keep emergency supplies (food, water, blankets) stocked.", priority: "High", riskLevel: "Medium", consequence: "Crucial for a lockdown or shelter-in-place scenario.", proof: "Emergency Kit Log" },
                { id: "EP-07", description: "Establish a communication plan for parents during emergencies.", priority: "High", riskLevel: "High", consequence: "Lack of clear communication leads to panic and parents rushing to the school, which can hinder emergency services.", proof: "Communication Plan" },
                { id: "EP-08", description: "Coordinate with local emergency services (fire, police, hospital).", priority: "High", riskLevel: "High", consequence: "Ensures a seamless response when external help is needed.", proof: "Contact List" },
                { id: "EP-09", description: "Designate and mark clear assembly points for evacuation.", priority: "High", riskLevel: "High", consequence: "Students and staff need to know exactly where to go in an evacuation.", proof: "Signage" },
                { id: "EP-10", description: "Review and update the emergency plan annually.", priority: "High", riskLevel: "High", consequence: "An outdated plan can be worse than no plan at all.", proof: "Updated Plan" }
            ]
        },
        {
            title: "Staff Hiring & Verification",
            department: "HR",
            frequency: "Per Hire",
            role: "HR Manager",
            summary: "Ensures all staff are properly vetted and qualified before interacting with students.",
            icon: "user-check",
            tasks: [
                { id: "SHV-01", description: "Conduct mandatory police verification for all new staff.", priority: "High", riskLevel: "High", consequence: "The most critical step to prevent individuals with a criminal history from being hired.", proof: "Police Verification Report" },
                { id: "SHV-02", description: "Perform at least two professional reference checks.", priority: "High", riskLevel: "High", consequence: "Can uncover past issues of misconduct or poor performance.", proof: "Reference Check Forms" },
                { id: "SHV-03", description: "Verify educational qualifications and past employment.", priority: "High", riskLevel: "High", consequence: "Prevents hiring of unqualified individuals based on fraudulent resumes.", proof: "Verification Report" },
                { id: "SHV-04", description: "Conduct a medical fitness check for all new hires.", priority: "High", riskLevel: "Medium", consequence: "Ensures the individual is physically capable of performing their duties and is not a health risk.", proof: "Medical Report" },
                { id: "SHV-05", description: "Ensure all new staff sign the child protection policy.", priority: "High", riskLevel: "High", consequence: "Creates a legally binding acknowledgement that they understand and will abide by the school's safety rules.", proof: "Signed Policy" },
                { id: "SHV-06", description: "Provide a formal induction and training on school policies.", priority: "High", riskLevel: "Medium", consequence: "Ensures new hires understand the school's culture and rules from day one.", proof: "Induction Log" },
                { id: "SHV-07", description: "Issue a formal employment contract.", priority: "High", riskLevel: "High", consequence: "Defines the legal relationship and terms of employment.", proof: "Signed Contract" },
                { id: "SHV-08", description: "Maintain a complete file for each employee with all required documents.", priority: "High", riskLevel: "High", consequence: "Essential for regulatory audits and legal compliance.", proof: "Employee File Audit" },
                { id: "SHV-09", description: "Collect and verify ID and address proofs.", priority: "High", riskLevel: "High", consequence: "A basic but essential step in verifying an individual's identity.", proof: "ID/Address Proofs" },
                { id: "SHV-10", description: "Onboard staff into the payroll and HR management system.", priority: "High", riskLevel: "Medium", consequence: "Ensures timely and accurate salary payments.", proof: "System Entry" }
            ]
        },
        {
            title: "Kitchen & Water Safety",
            department: "Admin/Health",
            frequency: "Daily/Scheduled",
            role: "Admin Manager",
            summary: "Ensures that food and water served in the school are safe and hygienic.",
            icon: "utensils-crossed",
            tasks: [
                { id: "KWS-01", description: "Inspect kitchen for cleanliness and hygiene.", priority: "High", riskLevel: "High", consequence: "A dirty kitchen is a breeding ground for bacteria and can cause food poisoning outbreaks.", proof: "Kitchen Hygiene Log" },
                { id: "KWS-02", description: "Check health and hygiene of all kitchen staff daily.", priority: "High", riskLevel: "High", consequence: "A sick food handler can transmit illness to hundreds of students.", proof: "Staff Health Log" },
                { id: "KWS-03", description: "Conduct quarterly testing of all drinking water sources.", priority: "High", riskLevel: "High", consequence: "Contaminated water can cause widespread illness across the entire school.", proof: "Water Test Report" },
                { id: "KWS-04", description: "Ensure raw and cooked foods are stored separately.", priority: "High", riskLevel: "High", consequence: "Prevents cross-contamination, a major cause of food poisoning.", proof: "Storage Audit" },
                { id: "KWS-05", description: "Log temperatures of refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Improper temperatures allow harmful bacteria to grow in perishable foods.", proof: "Temperature Log" },
                { id: "KWS-06", description: "Check expiry dates of all food ingredients.", priority: "High", riskLevel: "High", consequence: "Using expired ingredients is a major food safety risk.", proof: "Expiry Date Log" },
                { id: "KWS-07", description: "Ensure kitchen staff use hairnets, gloves, and aprons.", priority: "High", riskLevel: "High", consequence: "Prevents physical contamination of food.", proof: "PPE Audit" },
                { id: "KWS-08", description: "Clean and sanitize all food preparation surfaces.", priority: "High", riskLevel: "High", consequence: "Prevents the spread of bacteria between different food items.", proof: "Cleaning Log" },
                { id: "KWS-09", description: "Manage waste disposal and pest control.", priority: "High", riskLevel: "High", consequence: "Improper waste management attracts pests, which carry disease.", proof: "Waste & Pest Log" },
                { id: "KWS-10", description: "Maintain a clean and functional water purifier system.", priority: "High", riskLevel: "High", consequence: "A faulty purifier can dispense contaminated water.", proof: "Purifier Maintenance Log" }
            ]
        },
        {
            title: "Incident Handling Protocol",
            department: "Management",
            frequency: "Per Incident",
            role: "Principal",
            summary: "A protocol for investigating and resolving campus incidents.",
            icon: "siren",
            tasks: [
                { id: "INC-HDLG-01", description: "Provide immediate first aid and notify parents.", priority: "High", riskLevel: "High", consequence: "Delaying medical care or parent notification can worsen the situation and create legal liability.", proof: "First Aid & Notification Log" },
                { id: "INC-HDLG-02", description: "Document the incident in detail with witness statements.", priority: "High", riskLevel: "High", consequence: "A poorly documented incident is difficult to investigate or defend legally.", proof: "Incident Report Form" },
                { id: "INC-HDLG-03", description: "Escalate the incident to senior management or trustees if required.", priority: "High", riskLevel: "High", consequence: "Keeps leadership informed of significant risks and events.", proof: "Escalation Communication" },
                { id: "INC-HDLG-04", description: "Conduct a root cause analysis to prevent recurrence.", priority: "High", riskLevel: "High", consequence: "Without an RCA, the school is likely to repeat the same mistakes.", proof: "RCA Report" },
                { id: "INC-HDLG-05", description: "Implement corrective and preventive actions (CAPA).", priority: "High", riskLevel: "High", consequence: "Turns the incident into a concrete plan for improvement.", proof: "CAPA Plan" },
                { id: "INC-HDLG-06", description: "Preserve any CCTV footage or other evidence.", priority: "High", riskLevel: "High", consequence: "Loss of evidence can compromise any investigation.", proof: "Evidence Log" },
                { id: "INC-HDLG-07", description: "Communicate with parents transparently and empathetically.", priority: "High", riskLevel: "High", consequence: "Poor communication can destroy trust between parents and the school.", proof: "Communication Log" },
                { id: "INC-HDLG-08", description: "File any required reports with regulatory bodies.", priority: "High", riskLevel: "High", consequence: "Failure to report can lead to legal penalties.", proof: "Regulatory Filing" },
                { id: "INC-HDLG-09", description: "Debrief with involved staff to learn from the incident.", priority: "High", riskLevel: "Medium", consequence: "A crucial step for organizational learning and staff support.", proof: "Debrief Meeting Minutes" },
                { id: "INC-HDLG-10", description: "Review and update relevant policies based on the incident.", priority: "High", riskLevel: "High", consequence: "Ensures the school adapts and improves its safety systems over time.", proof: "Policy Update Log" }
            ]
        },
        {
            title: "Admissions & Enrolment Process",
            department: "Admissions",
            frequency: "Per Admission Cycle",
            role: "Admissions Officer",
            summary: "A compliant and organized process for managing student admissions and records.",
            icon: "user-plus",
            tasks: [
                { id: "ADM-01", description: "Publish clear admission criteria and timelines.", priority: "High", riskLevel: "Medium", consequence: "Ambiguous criteria can lead to allegations of unfairness or bias.", proof: "Admissions Prospectus" },
                { id: "ADM-02", description: "Use a standardized application form to collect all necessary student and parent information.", priority: "High", riskLevel: "High", consequence: "Inconsistent data collection makes it difficult to compare applicants fairly.", proof: "Application Form" },
                { id: "ADM-03", description: "Track all applications in a centralized admissions management system.", priority: "High", riskLevel: "High", consequence: "Lost applications or missed deadlines can damage the school's reputation.", proof: "Admissions Dashboard" },
                { id: "ADM-04", description: "Schedule and conduct parent interviews or student assessments in a fair and consistent manner.", priority: "High", riskLevel: "High", consequence: "An unstandardized process can lead to accusations of favoritism.", proof: "Interview Schedule & Scorecards" },
                { id: "ADM-05", description: "Communicate admission decisions (offers, waitlists, rejections) to all applicants on a specified date.", priority: "High", riskLevel: "High", consequence: "Poor communication creates anxiety for parents and reflects badly on the school.", proof: "Communication Log" },
                { id: "ADM-06", description: "Collect all required documents (birth certificate, previous school records) for admitted students.", priority: "High", riskLevel: "High", consequence: "Missing documents can lead to regulatory compliance issues later.", proof: "Document Checklist" },
                { id: "ADM-07", description: "Process admission fees and issue receipts.", priority: "High", riskLevel: "High", consequence: "Errors in fee collection can lead to financial and accounting problems.", proof: "Fee Receipt" },
                { id: "ADM-08", description: "Conduct an orientation program for new students and parents.", priority: "High", riskLevel: "Medium", consequence: "A poor onboarding experience can lead to early dissatisfaction.", proof: "Orientation Schedule" },
                { id: "ADM-09", description: "Ensure a smooth handover of student data to the academic department.", priority: "High", riskLevel: "Medium", consequence: "Crucial information about the student may not reach their new teachers.", proof: "Handover Document" },
                { id: "ADM-10", description: "Analyze admissions data to inform future outreach strategies.", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunity to understand admission trends and improve marketing.", proof: "Data Analysis Report" }
            ]
        },
        {
            title: "Examination & Report Card SOP",
            department: "Academics",
            frequency: "Per Examination Cycle",
            role: "Examination Controller",
            summary: "Manages all aspects of school examinations and reporting.",
            icon: "file-text",
            tasks: [
                { id: "EXAM-01", description: "Ensure secure handling and storage of question papers before the exam.", priority: "High", riskLevel: "High", consequence: "A leaked question paper can compromise the integrity of the entire examination.", proof: "Secure Storage Log" },
                { id: "EXAM-02", description: "Follow a strict protocol for exam invigilation to prevent cheating.", priority: "High", riskLevel: "High", consequence: "Widespread cheating devalues the examination and the school's reputation.", proof: "Invigilation Duty Roster" },
                { id: "EXAM-03", description: "Implement a fair and anonymous process for grading answer sheets.", priority: "High", riskLevel: "High", consequence: "A biased grading process can lead to parent complaints and loss of trust.", proof: "Grading Policy Document" },
                { id: "EXAM-04", description: "Have a dual-check or verification process for tabulating marks and grades.", priority: "High", riskLevel: "High", consequence: "A simple calculation error can lead to an incorrect report card and immense student distress.", proof: "Verification Log" },
                { id: "EXAM-05", description: "Generate and print report cards with a final QC check for any errors.", priority: "High", riskLevel: "High", consequence: "Errors on a report card reflect poorly on the school's professionalism.", proof: "QC Sign-off Sheet" },
                { id: "EXAM-06", description: "Publish results and distribute report cards on a pre-announced date.", priority: "High", riskLevel: "Medium", consequence: "Delays can cause significant anxiety for students and parents.", proof: "Distribution Log" },
                { id: "EXAM-07", description: "Have a clear process for handling student requests for re-evaluation or grade clarifications.", priority: "High", riskLevel: "Medium", consequence: "A lack of a clear process can lead to disputes and feelings of unfairness.", proof: "Re-evaluation Policy" },
                { id: "EXAM-08", description: "Securely archive all examination records as per regulatory requirements.", priority: "High", riskLevel: "High", consequence: "Failure to maintain records can be a major compliance issue.", proof: "Archive Log" },
                { id: "EXAM-09", description: "Ensure seating arrangement prevents cheating.", priority: "High", riskLevel: "High", consequence: "A poorly planned seating chart can facilitate cheating.", proof: "Seating Plan" },
                { id: "EXAM-10", description: "Provide necessary accommodations for students with special needs.", priority: "High", riskLevel: "High", consequence: "Failure to do so can be a violation of disability rights laws.", proof: "Accommodations Log" }
            ]
        }
    ]
};
