
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
    description: "A comprehensive toolkit for school principals and administrators to ensure student safety, regulatory compliance, and operational excellence.",
    icon: "school",
    whoIsItFor: ["School Principals", "Trustees & Board Members", "Heads of Administration", "Transport Managers"],
    sampleItems: [
        { text: "Ensure student safety with robust transport, visitor management, and emergency response protocols.", icon: "bus" },
        { text: "Prevent accidents with checklists for campus safety, playground inspections, and lab safety.", icon: "shield" },
        { text: "Guarantee a healthy environment with SOPs for kitchen hygiene, food safety, and classroom cleanliness.", icon: "sparkles" },
        { text: "Maintain educational standards with tools for teacher evaluation and curriculum delivery audits.", icon: "book-open" },
        { text: "Manage admissions, fees, and parent communication with structured, professional processes.", icon: "users" },
        { text: "Ensure legal compliance with templates for staff hiring, background checks, and regulatory filings.", icon: "file-check" }
    ],
    checklists: [
        {
            title: "Student Transport Safety",
            department: "Transport",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "A comprehensive checklist to ensure the safe transportation of all students.",
            icon: "bus",
            tasks: [
                { id: "SOP-ST-01", description: "Perform a daily pre-trip inspection of each bus (brakes, lights, tires, emergency exit).", priority: "High", riskLevel: "High", consequence: "Mechanical failure leading to an accident.", proof: "Signed pre-trip inspection checklist for each bus." },
                { id: "SOP-ST-02", description: "Verify that all drivers have a valid commercial license and have undergone required training.", priority: "High", riskLevel: "High", consequence: "Unqualified driver causing an accident, major legal liability.", proof: "Driver qualification file with license copy." },
                { id: "SOP-ST-03", description: "Ensure a trained female attendant is present on every bus route.", priority: "High", riskLevel: "High", consequence: "Violation of student safety norms, risk to student well-being.", proof: "Attendant duty roster." },
                { id: "SOP-ST-04", description: "Post-trip 'Bus Clear' check: Driver/attendant must walk the bus aisle to ensure no child is left behind.", priority: "High", riskLevel: "High", consequence: "Child left on bus, leading to potential heatstroke or fatality.", proof: "Signed 'Bus Clear' checklist for every trip." },
                { id: "SOP-ST-05", description: "Maintain a log of student attendance for both morning and afternoon trips.", priority: "High", riskLevel: "Medium", consequence: "Inability to account for a missing child.", proof: "Student attendance register." },
                { id: "SOP-ST-06", description: "Check that first-aid kits and fire extinguishers on all buses are stocked and not expired.", priority: "High", riskLevel: "High", consequence: "Inability to respond to a medical emergency or fire.", proof: "Weekly bus safety checklist." },
                { id: "SOP-ST-07", description: "Ensure drivers adhere to speed limits and safe driving practices.", priority: "High", riskLevel: "High", consequence: "Accidents, injuries.", proof: "GPS speed monitoring reports, random inspections." },
                { id: "SOP-ST-08", description: "Drop-off only to authorized guardians at designated stops.", priority: "High", riskLevel: "High", consequence: "Child handed over to an unauthorized person.", proof: "Guardian ID card verification." },
                { id: "SOP-ST-09", description: "Check functionality of on-bus CCTV cameras and GPS trackers daily.", priority: "High", riskLevel: "Medium", consequence: "Lack of evidence for incidents, inability to track bus location.", proof: "System health check log." },
                { id: "SOP-ST-10", description: "Conduct quarterly evacuation drills for each bus route.", priority: "Medium", riskLevel: "High", consequence: "Panic and chaos during a real emergency evacuation from the bus.", proof: "Drill report." }
            ]
        },
        {
            title: "Campus Safety & Security Audit",
            department: "Security",
            frequency: "Weekly",
            role: "Security Supervisor",
            summary: "A weekly audit to ensure the entire campus is safe and secure for students and staff.",
            icon: "shield",
            tasks: [
                { id: "SOP-CS-01", description: "Inspect perimeter fencing/walls for any breaches or potential unauthorized entry points.", priority: "High", riskLevel: "High", consequence: "Intruder access to campus.", proof: "Perimeter patrol log." },
                { id: "SOP-CS-02", description: "Verify all CCTV cameras are functional, recording, and have clear lines of sight.", priority: "High", riskLevel: "High", consequence: "Inability to investigate incidents.", proof: "CCTV health check report." },
                { id: "SOP-CS-03", description: "Check that all security guards are at their posts, alert, and in proper uniform.", priority: "High", riskLevel: "Medium", consequence: "Security gaps, unprofessional appearance.", proof: "Guard duty roster and spot checks." },
                { id: "SOP-CS-04", description: "Test a sample of emergency alarms (fire, lockdown) to ensure they are audible.", priority: "High", riskLevel: "High", consequence: "Alarm failure in a real emergency.", proof: "Alarm test log." },
                { id: "SOP-CS-05", description: "Inspect playground equipment for any damage, sharp edges, or structural issues.", priority: "High", riskLevel: "High", consequence: "Child injury.", proof: "Playground inspection checklist with photos." },
                { id: "SOP-CS-06", description: "Ensure all restricted areas (e.g., utility rooms, chemical stores) are locked and access-controlled.", priority: "High", riskLevel: "Medium", consequence: "Student access to hazardous areas.", proof: "Physical check of doors." },
                { id: "SOP-CS-07", description: "Verify that visitor management procedures are being followed at the main gate.", priority: "High", riskLevel: "High", consequence: "Unauthorized visitors on campus.", proof: "Audit of visitor logbook." },
                { id: "SOP-CS-08", description: "Check that all fire extinguishers are accessible, inspected, and not expired.", priority: "High", riskLevel: "High", consequence: "Inability to control a fire.", proof: "Fire extinguisher inspection tags." },
                { id: "SOP-CS-09", description: "Ensure walkways are free from slip/trip hazards.", priority: "High", riskLevel: "Medium", consequence: "Student or staff injuries.", proof: "Campus walk-through log." },
                { id: "SOP-CS-10", description: "Check that all exterior lighting is functional for evening safety.", priority: "Medium", riskLevel: "Medium", consequence: "Poor visibility, increased security risk after dark.", proof: "Night patrol report." }
            ]
        },
        {
            title: "Visitor Management Protocol",
            department: "Security/Admin",
            frequency: "Ongoing",
            role: "Security Guard/Receptionist",
            summary: "A strict protocol to screen and track all visitors on campus.",
            icon: "user-check",
            tasks: [
                { id: "SOP-VM-01", description: "All visitors must enter through a single, designated entry point.", priority: "High", riskLevel: "High", consequence: "Uncontrolled access to the campus.", proof: "Gate procedure document." },
                { id: "SOP-VM-02", description: "Verify visitor's identity with a government-issued photo ID.", priority: "High", riskLevel: "High", consequence: "Anonymous or fraudulent entry.", proof: "Visitor logbook." },
                { id: "SOP-VM-03", description: "Confirm the purpose of the visit and verify the appointment with the relevant staff member.", priority: "High", riskLevel: "Medium", consequence: "Unscheduled visitors disrupting school activities.", proof: "Log of verification calls." },
                { id: "SOP-VM-04", description: "Log visitor details (name, photo, contact, person to meet, time in) in a digital or physical register.", priority: "High", riskLevel: "Medium", consequence: "No record of who is on campus.", proof: "Visitor register." },
                { id: "SOP-VM-05", description: "Issue a clearly identifiable visitor's badge to be worn at all times.", priority: "High", riskLevel: "Low", consequence: "Inability to distinguish visitors from staff.", proof: "Badge issuance log." },
                { id: "SOP-VM-06", description: "Visitors must be escorted by a staff member in all student areas.", priority: "High", riskLevel: "High", consequence: "Unsupervised contact between visitors and students.", proof: "CCTV footage review." },
                { id: "SOP-VM-07", description: "Log the visitor's exit time and retrieve the visitor's badge.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate record of who is still on campus during an emergency.", proof: "Visitor register." },
                { id: "SOP-VM-08", description: "Prohibit unauthorized photography or videography on campus.", priority: "Medium", riskLevel: "High", consequence: "Student privacy violations.", proof: "Signage and verbal instructions to visitors." },
                { id: "SOP-VM-09", description: "Perform random bag checks for visitors carrying large bags.", priority: "Medium", riskLevel: "Medium", consequence: "Deterrent against contraband or prohibited items.", proof: "Bag check log." },
                { id: "SOP-VM-10", description: "Have a clear protocol for denying entry to suspicious individuals.", priority: "High", riskLevel: "High", consequence: "Allowing a potential threat onto campus.", proof: "Denial of entry incident report." }
            ]
        },
        {
            title: "Classroom & Lab Safety",
            department: "Academics/Admin",
            frequency: "Monthly",
            role: "Admin Supervisor",
            summary: "Ensures all learning spaces are safe and free from hazards.",
            icon: "school",
            tasks: [
                { id: "SOP-CL-01", description: "Inspect classroom furniture for stability and sharp edges.", priority: "Medium", riskLevel: "Medium", consequence: "Student injury from broken furniture.", proof: "Classroom inspection form." },
                { id: "SOP-CL-02", description: "Ensure all electrical outlets are covered and wiring is not exposed.", priority: "High", riskLevel: "High", consequence: "Electric shock.", proof: "Classroom inspection form." },
                { id: "SOP-CL-03", description: "Check that heavy items (e.g., projectors, shelves) are securely mounted.", priority: "High", riskLevel: "High", consequence: "Falling objects causing injury.", proof: "Classroom inspection form." },
                { id: "SOP-CL-04", description: "Science Labs: Verify eyewash stations and safety showers are functional and tested weekly.", priority: "High", riskLevel: "High", consequence: "Inability to treat chemical splashes.", proof: "Lab safety logbook." },
                { id: "SOP-CL-05", description: "Science Labs: Ensure all chemicals are correctly labeled and stored in locked cabinets.", priority: "High", riskLevel: "High", consequence: "Chemical spills, student access to hazardous materials.", proof: "Photo of chemical storage." },
                { id: "SOP-CL-06", description: "Science Labs: Check availability and condition of Personal Protective Equipment (PPE) like goggles and lab coats.", priority: "High", riskLevel: "Medium", consequence: "Student injuries during experiments.", proof: "PPE inventory checklist." },
                { id: "SOP-CL-07", description: "Ensure all fire extinguishers in labs and classrooms are accessible and inspected.", priority: "High", riskLevel: "High", consequence: "Inability to control a fire.", proof: "Fire extinguisher inspection tags." },
                { id: "SOP-CL-08", description: "Verify that emergency evacuation maps are posted in every classroom and lab.", priority: "Medium", riskLevel: "Low", consequence: "Confusion during an evacuation.", proof: "Visual check." },
                { id: "SOP-CL-09", description: "Computer Labs: Ensure proper cable management to prevent trip hazards.", priority: "Medium", riskLevel: "Low", consequence: "Trip and fall injuries.", proof: "Visual inspection." },
                { id: "SOP-CL-10", description: "Art Rooms: Ensure proper ventilation and safe storage of art supplies.", priority: "Medium", riskLevel: "Medium", consequence: "Exposure to fumes, misuse of materials.", proof: "Storage inspection." }
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
                { id: "SH-01", description: "Conduct a thorough background check, including criminal record verification, for all new hires.", priority: "High", riskLevel: "High", consequence: "Hiring an individual with a history of child abuse or violence.", proof: "Background check report." },
                { id: "SH-02", description: "Verify all educational qualifications and previous employment history.", priority: "High", riskLevel: "High", consequence: "Hiring unqualified staff.", proof: "Verification call logs and emails." },
                { id: "SH-03", description: "Ensure all teaching staff have the required certifications.", priority: "High", riskLevel: "High", consequence: "Non-compliance with educational board regulations.", proof: "Copies of certificates." },
                { id: "SH-04", description: "Conduct a medical fitness check for all new employees.", priority: "High", riskLevel: "Medium", consequence: "Hiring someone unfit for the job's physical demands.", proof: "Medical report." },
                { id: "SH-05", description: "Provide a formal induction on the school's code of conduct and child protection policy.", priority: "High", riskLevel: "High", consequence: "Staff unaware of their legal and ethical obligations.", proof: "Signed policy acknowledgement form." },
                { id: "SH-06", description: "Issue a formal employment contract outlining all terms and conditions.", priority: "High", riskLevel: "Medium", consequence: "Future disputes over salary, duties, or termination.", proof: "Signed employment contract." },
                { id: "SH-07", description: "Create an employee file with all required documentation.", priority: "High", riskLevel: "Low", consequence: "Disorganized HR records, issues during audits.", proof: "Employee file checklist." },
                { id: "SH-08", description: "Provide new hires with a staff handbook.", priority: "High", riskLevel: "Low", consequence: "Staff unaware of school policies.", proof: "Handbook acknowledgement." },
                { id: "SH-09", description: "Assign a mentor or buddy for the new hire's first week.", priority: "Medium", riskLevel: "Low", consequence: "New hire feels isolated and struggles to adapt.", proof: "Mentor assignment email." },
                { id: "SH-10", description: "Collect references from previous employers.", priority: "High", riskLevel: "High", consequence: "Missed opportunity to uncover potential red flags.", proof: "Reference check forms." }
            ]
        },
        {
            title: "Emergency Response & Drills",
            department: "Admin/Security",
            frequency: "Quarterly",
            role: "Principal/Safety Officer",
            summary: "A protocol for handling on-campus emergencies like medical issues, fires, or security threats.",
            icon: "siren",
            tasks: [
                { id: "SOP-ER-01", description: "Conduct a fire evacuation drill each quarter.", priority: "High", riskLevel: "High", consequence: "Panic and chaos during a real fire.", proof: "Fire drill report with evacuation time." },
                { id: "SOP-ER-02", description: "Conduct a lockdown drill for security threats each semester.", priority: "High", riskLevel: "High", consequence: "Disorderly response to a security threat.", proof: "Lockdown drill report." },
                { id: "SOP-ER-03", description: "Ensure all staff are trained in basic first aid and CPR.", priority: "High", riskLevel: "High", consequence: "Delayed medical response to an injured student.", proof: "First aid training certificates." },
                { id: "SOP-ER-04", description: "Verify that all emergency contact information for students is up-to-date.", priority: "High", riskLevel: "High", consequence: "Inability to contact parents during an emergency.", proof: "Annual data verification drive." },
                { id: "SOP-ER-05", description: "Have a clear communication plan for notifying parents during a crisis.", priority: "High", riskLevel: "Medium", consequence: "Rumors and panic among parents.", proof: "Parent communication tree/plan." },
                { id: "SOP-ER-06", description: "Coordinate emergency plans with local police, fire, and medical services.", priority: "High", riskLevel: "Medium", consequence: "Uncoordinated response with external agencies.", proof: "Minutes of meeting with local authorities." },
                { id: "SOP-ER-07", description: "Check that emergency supplies (food, water, medical) are stocked and not expired.", priority: "Medium", riskLevel: "Medium", consequence: "Lack of resources during a prolonged lockdown.", proof: "Emergency kit inventory." },
                { id: "SOP-ER-08", description: "Debrief after every drill to identify areas for improvement.", priority: "High", riskLevel: "Medium", consequence: "Failure to learn from drills makes them ineffective.", proof: "Debrief meeting minutes." },
                { id: "SOP-ER-09", description: "Test the school's public address (PA) system weekly.", priority: "High", riskLevel: "High", consequence: "Inability to communicate with the entire campus during an emergency.", proof: "PA system test log." },
                { id: "SOP-ER-10", description: "Appoint and train floor wardens for evacuation.", priority: "High", riskLevel: "High", consequence: "Lack of leadership during an evacuation can lead to chaos.", proof: "Warden appointment letters." }
            ]
        },
        {
            title: "Canteen & Food Safety Audit",
            department: "Admin/Health",
            frequency: "Monthly",
            role: "Admin Manager",
            summary: "Ensures that food served in the school canteen is safe, hygienic, and nutritious.",
            icon: "utensils-crossed",
            tasks: [
                { id: "SOP-FS-01", description: "Inspect kitchen for overall cleanliness and hygiene.", priority: "High", riskLevel: "High", consequence: "Foodborne illness outbreak.", proof: "Kitchen inspection checklist." },
                { id: "SOP-FS-02", description: "Check temperatures of refrigerators, freezers, and hot-holding equipment.", priority: "High", riskLevel: "High", consequence: "Bacterial growth in food.", proof: "Temperature logs." },
                { id: "SOP-FS-03", description: "Verify that raw and cooked foods are stored separately to prevent cross-contamination.", priority: "High", riskLevel: "High", consequence: "Food poisoning.", proof: "Photo of storage arrangement." },
                { id: "SOP-FS-04", description: "Check that all food handlers have clean uniforms, hairnets, and follow handwashing protocols.", priority: "High", riskLevel: "High", consequence: "Contamination of food by staff.", proof: "Hygiene audit of staff." },
                { id: "SOP-FS-05", description: "Ensure all food ingredients are within their expiry dates and sourced from approved vendors.", priority: "High", riskLevel: "High", consequence: "Use of expired or unsafe ingredients.", proof: "Stock inspection log." },
                { id: "SOP-FS-06", description: "Check for any signs of pest infestation in the kitchen or storage areas.", priority: "High", riskLevel: "High", consequence: "Pests spreading disease.", proof: "Pest control logbook." },
                { id: "SOP-FS-07", description: "Verify that clean and safe drinking water is available for students.", priority: "High", riskLevel: "High", consequence: "Waterborne diseases.", proof: "Water quality test report." },
                { id: "SOP-FS-08", description: "Ensure canteen vendor has a valid FSSAI license.", priority: "High", riskLevel: "High", consequence: "Operating with an unlicensed vendor is a major legal violation.", proof: "Copy of FSSAI license." },
                { id: "SOP-FS-09", description: "Review menu for nutritional balance.", priority: "Medium", riskLevel: "Low", consequence: "Providing unhealthy food to children.", proof: "Menu review by nutritionist." },
                { id: "SOP-FS-10", description: "Handle and log any food-related complaints from students or parents.", priority: "High", riskLevel: "High", consequence: "Ignoring a complaint could mean missing an early sign of a food safety issue.", proof: "Complaint log." }
            ]
        },
        {
            title: "Parent-Teacher Meeting & Communication",
            department: "Academics/Admin",
            frequency: "Per Term",
            role: "Principal/Coordinator",
            summary: "A structured process for managing parent-teacher interactions and school communications.",
            icon: "users",
            tasks: [
                { id: "SOP-PTM-01", description: "Publish the academic calendar, including PTM dates, at the start of the year.", priority: "High", riskLevel: "Low", consequence: "Parents unaware of key dates.", proof: "School Almanac/Calendar." },
                { id: "SOP-PTM-02", description: "Send reminders to parents at least one week before each PTM.", priority: "High", riskLevel: "Low", consequence: "Low PTM attendance.", proof: "Copy of reminder circular/email." },
                { id: "SOP-PTM-03", description: "Prepare student progress reports and talking points before the PTM.", priority: "High", riskLevel: "Medium", consequence: "Unproductive meetings, parents feel their time is wasted.", proof: "Sample student report." },
                { id: "SOP-PTM-04", description: "Use a structured format for all official school-to-parent communication.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent and unprofessional communication.", proof: "Communication templates." },
                { id: "SOP-PTM-05", description: "Maintain a log of all individual parent communications and complaints.", priority: "High", riskLevel: "Medium", consequence: "Inability to track and resolve parent issues.", proof: "Parent communication log." },
                { id: "SOP-PTM-06", description: "Conduct surveys to gather parent feedback on school operations.", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunities for improvement.", proof: "Parent survey results." },
                { id: "SOP-PTM-07", description: "Ensure teachers are prepared and have access to all student records for the PTM.", priority: "High", riskLevel: "Medium", consequence: "Teachers seem unprepared, frustrating parents.", proof: "PTM prep checklist for teachers." },
                { id: "SOP-PTM-08", description: "Have a clear process for scheduling and managing PTM appointments.", priority: "High", riskLevel: "Low", consequence: "Chaos and long waiting times on PTM day.", proof: "Appointment booking system." }
            ]
        },
        {
            title: "Admissions & Record Management",
            department: "Admin",
            frequency: "Annual Cycle",
            role: "Admissions Officer",
            summary: "A compliant and organized process for managing student admissions and records.",
            icon: "file-text",
            tasks: [
                { id: "SOP-ADM-01", description: "Follow a fair and transparent admissions process as per regulatory guidelines.", priority: "High", riskLevel: "High", consequence: "Legal challenges, reputational damage.", proof: "Admissions policy document." },
                { id: "SOP-ADM-02", description: "Verify all required documents (birth certificate, transfer certificate, etc.) during admission.", priority: "High", riskLevel: "Medium", consequence: "Incomplete student records.", proof: "Admission document checklist." },
                { id: "SOP-ADM-03", description: "Maintain a secure and confidential physical and digital record for every student.", priority: "High", riskLevel: "High", consequence: "Breach of student data privacy.", proof: "Record room access log/EHR audit trail." },
                { id: "SOP-ADM-04", description: "Manage the fee collection process, including receipts and reminders.", priority: "High", riskLevel: "Medium", consequence: "Financial discrepancies, parent disputes.", proof: "Fee collection software records." },
                { id: "SOP-ADM-05", description: "Have a clear process for issuing transfer certificates and other documents.", priority: "High", riskLevel: "Low", consequence: "Delays and frustration for departing parents.", proof: "Document issuance SOP." },
                { id: "SOP-ADM-06", description: "Ensure compliance with data retention policies for student records.", priority: "High", riskLevel: "Medium", consequence: "Legal issues from improper handling of old records.", proof: "Data retention policy." },
                { id: "SOP-ADM-07", description: "Manage student database and ensure data integrity.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate data leads to errors in reporting and communication.", proof: "Database audit log." },
                { id: "SOP-ADM-08", description: "Provide new parents with an information handbook.", priority: "High", riskLevel: "Low", consequence: "Parents are unaware of school rules and procedures.", proof: "Parent Handbook." }
            ]
        }
    ]
};

    

    