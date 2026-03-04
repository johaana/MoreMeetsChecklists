
import type { PremiumPack } from "@/lib/premium-packs";

export const university_college_ops: PremiumPack = {
    id: 'university_college_ops',
    title: "University & College Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f290d8a5-d913-485e-9905-59b922a01490',
    category: "Education",
    description: "Stop student safety incidents, administrative chaos, and accreditation failures: before they destroy your institution's reputation and standing.",
    heroHeadline: "Prevent student safety incidents and administrative chaos.",
    heroSubheadline: "Built for Deans and Registrars who take zero-risk campus security and academic continuity seriously.",
    pricingUrgency: "A single campus safety failure or accreditation lapse costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "graduation-cap",
    whoIsItFor: ["Deans & VCs", "Registrars", "Heads of Administration", "Hostel Wardens", "Campus Security Heads"],
    sampleItems: [
        { text: "<strong>Stop</strong> campus safety tragedies with robust hostel, visitor, and anti-ragging protocols.", icon: "shield" },
        { text: "<strong>Ensure</strong> researcher safety with checklists for lab hygiene and chemical handling.", icon: "flask-conical" },
        { text: "<strong>Guarantee</strong> safe campus gatherings with professional event management and crowd control.", icon: "users" },
        { text: "<strong>Maintain</strong> institutional resilience with infrastructure, fire safety, and electrical audits.", icon: "building-2" },
        { text: "<strong>Protect</strong> student health with FSSAI/HACCP aligned mess and canteen hygiene SOPs.", icon: "utensils" },
        { text: "<strong>Secure</strong> digital assets with network acceptable use and student data privacy checks.", icon: "wifi" }
    ],
    checklists: [
        {
            title: "Hostel Security & Entry Protocol",
            department: "Hostel/Security",
            frequency: "Daily",
            role: "Chief Warden",
            summary: "Ensures a safe and controlled living environment for resident students.",
            icon: "home",
            tasks: [
                { id: "HOSTEL-SEC-01", description: "Maintain a log of all entries and exits from the hostel.", priority: "High", riskLevel: "High", consequence: "Inability to track who is in the building during an emergency or security incident.", proof: "Entry/Exit Register" },
                { id: "HOSTEL-SEC-02", description: "Verify the identity of all guests and ensure they sign in.", priority: "High", riskLevel: "High", consequence: "Allows unauthorized individuals to gain access, posing a security risk to students.", proof: "Guest Register" },
                { id: "HOSTEL-SEC-03", description: "Conduct surprise room checks for prohibited items (e.g., heaters, drugs).", priority: "High", riskLevel: "High", consequence: "Failure to curb prohibited items can lead to fire hazards or illegal activities.", proof: "Room Check Log" },
                { id: "HOSTEL-SEC-04", description: "Have a clear protocol for handling medical emergencies or disturbances.", priority: "High", riskLevel: "High", consequence: "A chaotic response can delay medical care or escalate a conflict.", proof: "Emergency SOP" },
                { id: "HOSTEL-SEC-05", description: "Ensure all security cameras in common areas are functional.", priority: "High", riskLevel: "High", consequence: "Provides crucial evidence for investigations into theft, ragging, or other incidents.", proof: "CCTV Health Check" },
                { id: "HOSTEL-SEC-06", description: "Check fire extinguishers and emergency exits in the hostel.", priority: "High", riskLevel: "High", consequence: "A blocked exit or faulty extinguisher can be fatal in a fire.", proof: "Fire Safety Log" },
                { id: "HOSTEL-SEC-07", description: "Ensure all hostel staff are trained in emergency procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff can worsen an emergency situation.", proof: "Training Records" },
                { id: "HOSTEL-SEC-08", description: "Secure the hostel premises at a designated time each night.", priority: "High", riskLevel: "High", consequence: "An unsecured hostel is vulnerable to intruders.", proof: "Lock-up Log" },
                { id: "HOSTEL-SEC-09", description: "Monitor for and prevent ragging incidents.", priority: "High", riskLevel: "High", consequence: "Failure to prevent ragging can lead to severe physical and psychological harm, and major legal liability.", proof: "Anti-Ragging Patrol Log" },
                { id: "HOSTEL-SEC-10", description: "Maintain an emergency contact list for all resident students.", priority: "High", riskLevel: "High", consequence: "Inability to contact parents during a medical emergency.", proof: "Contact List" }
            ]
        },
        {
            title: "Lab Safety & Chemical Handling",
            department: "Academics/Labs",
            frequency: "Daily/Per Lab",
            role: "Lab Technician",
            summary: "Ensures a safe environment in all science and engineering laboratories.",
            icon: "flask-conical",
            tasks: [
                { id: "LAB-01", description: "Ensure all students and staff wear appropriate Personal Protective Equipment (PPE).", priority: "High", riskLevel: "High", consequence: "The most basic failure, leading to chemical splashes, burns, or eye injuries.", proof: "PPE Audit" },
                { id: "LAB-02", description: "Maintain an up-to-date inventory of all chemicals with MSDS sheets.", priority: "High", riskLevel: "High", consequence: "In a spill or fire, inability to provide crucial safety information to first responders.", proof: "Chemical Inventory" },
                { id: "LAB-03", description: "Check that fume hoods and ventilation systems are working correctly.", priority: "High", riskLevel: "High", consequence: "Exposure of students and staff to toxic fumes.", proof: "Fume Hood Test Log" },
                { id: "LAB-04", description: "Follow correct procedures for chemical and biological waste disposal.", priority: "High", riskLevel: "High", consequence: "Improper disposal can cause environmental damage and lead to heavy regulatory fines.", proof: "Waste Disposal Log" },
                { id: "LAB-05", description: "Ensure emergency showers and eyewash stations are accessible and functional.", priority: "High", riskLevel: "High", consequence: "In a chemical splash, a non-functional eyewash station can lead to permanent eye damage.", proof: "Emergency Equipment Log" },
                { id: "LAB-06", description: "Inspect lab equipment for any damage or malfunction before use.", priority: "High", riskLevel: "High", consequence: "Using faulty equipment can lead to inaccurate results or dangerous failures (e.g., glassware cracking).", proof: "Equipment Check Log" },
                { id: "LAB-07", description: "Provide safety training to all new lab users.", priority: "High", riskLevel: "High", consequence: "Untrained users are a danger to themselves and others.", proof: "Training Records" },
                { id: "LAB-08", description: "Label all chemicals and solutions clearly.", priority: "High", riskLevel: "High", consequence: "An unlabeled chemical is an unknown hazard and can lead to dangerous mix-ups.", proof: "Label Audit" },
                { id: "LAB-09", description: "Have a spill response kit ready and accessible.", priority: "High", riskLevel: "High", consequence: "A small spill can become a major incident without the right response materials.", proof: "Spill Kit Check" },
                { id: "LAB-10", description: "Restrict access to the lab to authorized personnel only.", priority: "High", riskLevel: "High", consequence: "Unauthorized individuals can cause accidents or interfere with experiments.", proof: "Access Log" }
            ]
        },
        {
            title: "Campus Event Management",
            department: "Student Affairs",
            frequency: "Per Event",
            role: "Event Coordinator",
            summary: "Manages safety and logistics for large campus gatherings.",
            icon: "drama",
            tasks: [
                { id: "EVENT-01", description: "Obtain all necessary internal and external permissions for the event.", priority: "High", riskLevel: "High", consequence: "An unapproved event can be shut down by authorities, causing reputational damage.", proof: "Permission Documents" },
                { id: "EVENT-02", description: "Develop a detailed crowd management and security plan.", priority: "High", riskLevel: "High", consequence: "Failure to manage crowds can lead to stampedes and mass casualty incidents.", proof: "Crowd Management Plan" },
                { id: "EVENT-03", description: "Arrange for on-site emergency medical support (ambulance, first-aid).", priority: "High", riskLevel: "High", consequence: "Delayed medical response to an injury or illness can be fatal.", proof: "Medical Support Contract" },
                { id: "EVENT-04", description: "Coordinate with campus security and local police if required.", priority: "High", riskLevel: "High", consequence: "A lack of coordination can lead to a chaotic and ineffective emergency response.", proof: "Security Coordination Plan" },
                { id: "EVENT-05", description: "Inspect the event venue for safety hazards before the event.", priority: "High", riskLevel: "High", consequence: "Unidentified hazards (e.g., exposed wiring) can cause accidents.", proof: "Venue Inspection Log" },
                { id: "EVENT-06", description: "Ensure clear signage for entries, exits, and emergency routes.", priority: "High", riskLevel: "High", consequence: "Confused crowds can create blockages and panic during an evacuation.", proof: "Signage Plan" },
                { id: "EVENT-07", description: "Have a communication plan for attendees in case of an emergency.", priority: "High", riskLevel: "High", consequence: "Lack of clear communication leads to rumors and panic.", proof: "Communication Plan" },
                { id: "EVENT-08", description: "Manage sound levels to comply with local regulations.", priority: "Medium", riskLevel: "Low", consequence: "Can lead to noise complaints and fines.", proof: "Sound Level Log" },
                { id: "EVENT-09", description: "Ensure adequate sanitation facilities are available.", priority: "High", riskLevel: "Medium", consequence: "Poor sanitation can be a public health issue for large gatherings.", proof: "Facility Check" },
                { id: "EVENT-10", description: "Plan and execute post-event cleanup.", priority: "High", riskLevel: "Low", consequence: "Leaving a venue messy reflects poorly on the institution.", proof: "Cleanup Log" }
            ]
        },
        {
            title: "Campus Infrastructure & Safety Audit",
            department: "Facilities/Admin",
            frequency: "Quarterly",
            role: "Admin Head",
            summary: "Regular audit of institutional assets and safety systems.",
            icon: "building-2",
            tasks: [
                { id: "CISA-01", description: "Conduct a quarterly audit of building structural integrity.", priority: "High", riskLevel: "High", consequence: "Missing signs of structural distress can lead to a building collapse.", proof: "Structural Audit Report" },
                { id: "CISA-02", description: "Inspect all fire safety equipment and evacuation routes.", priority: "High", riskLevel: "High", consequence: "The most critical life-safety system; failure is not an option.", proof: "Fire Safety Audit" },
                { id: "CISA-03", description: "Audit campus accessibility for disabled persons (ramps, lifts, restrooms).", priority: "High", riskLevel: "Medium", consequence: "Non-compliance can lead to legal action and denies equal access to education.", proof: "Accessibility Audit" },
                { id: "CISA-04", description: "Check for any electrical hazards across the campus.", priority: "High", riskLevel: "High", consequence: "Faulty wiring is a leading cause of fires.", proof: "Electrical Safety Audit" },
                { id: "CISA-05", description: "Ensure all campus lighting is functional, especially at night.", priority: "High", riskLevel: "Medium", consequence: "Poorly lit areas are a major security and safety risk.", proof: "Lighting Audit" },
                { id: "CISA-06", description: "Inspect water supply and sanitation systems.", priority: "High", riskLevel: "High", consequence: "Contaminated water or poor sanitation can cause widespread illness.", proof: "Water & Sanitation Audit" },
                { id: "CISA-07", description: "Check road conditions and signage within the campus.", priority: "High", riskLevel: "Medium", consequence: "Poor roads or signage can lead to traffic accidents.", proof: "Road Safety Audit" },
                { id: "CISA-08", description: "Maintain records of all maintenance and repair work.", priority: "High", riskLevel: "Medium", consequence: "Provides a legal record of due diligence and helps track recurring issues.", proof: "Maintenance Log" },
                { id: "CISA-09", description: "Manage waste disposal and recycling programs.", priority: "High", riskLevel: "Medium", consequence: "Improper waste management is an environmental and health hazard.", proof: "Waste Management Audit" },
                { id: "CISA-10", description: "Address any safety concerns raised by students or staff.", priority: "High", riskLevel: "High", consequence: "Ignoring safety concerns creates a culture of negligence.", proof: "Concern Resolution Log" }
            ]
        },
        {
            title: "Mess/Canteen Food Safety (HACCP)",
            department: "Hospitality/Admin",
            frequency: "Daily",
            role: "Mess Manager",
            summary: "Ensures that food served in the institution is safe and hygienic.",
            icon: "utensils-crossed",
            tasks: [
                { id: "MESS-01", description: "Log temperatures of all refrigerators, freezers, and hot holding units.", priority: "High", riskLevel: "High", consequence: "The most critical step in preventing bacterial growth in food.", proof: "Temperature Log" },
                { id: "MESS-02", description: "Check all raw material deliveries for quality and expiry.", priority: "High", riskLevel: "High", consequence: "Garbage in, garbage out. Poor quality ingredients lead to poor quality, unsafe food.", proof: "Receiving Log" },
                { id: "MESS-03", description: "Ensure proper segregation of raw, cooked, vegetarian, and non-vegetarian food.", priority: "High", riskLevel: "High", consequence: "A primary cause of cross-contamination and food poisoning.", proof: "Storage Audit" },
                { id: "MESS-04", description: "Verify hygiene of all food handlers (uniform, nails, health).", priority: "High", riskLevel: "High", consequence: "Sick or unhygienic food handlers are a major vector for disease.", proof: "Staff Hygiene Log" },
                { id: "MESS-05", description: "Ensure the kitchen and dining areas are clean and pest-free.", priority: "High", riskLevel: "High", consequence: "Pests carry disease and their presence is a major red flag for health inspectors.", proof: "Cleaning & Pest Control Log" },
                { id: "MESS-06", description: "Calibrate food thermometers daily.", priority: "High", riskLevel: "High", consequence: "An inaccurate thermometer gives a false sense of safety.", proof: "Calibration Log" },
                { id: "MESS-07", description: "Check that water used for cooking and drinking is safe.", priority: "High", riskLevel: "High", consequence: "Contaminated water can make hundreds of students sick at once.", proof: "Water Test Report" },
                { id: "MESS-08", description: "Maintain a food sample from each meal for 48 hours.", priority: "High", riskLevel: "High", consequence: "Crucial evidence for investigation in case of a food poisoning outbreak.", proof: "Sample Log" },
                { id: "MESS-09", description: "Manage waste disposal effectively to prevent pests.", priority: "High", riskLevel: "High", consequence: "Improperly managed waste is a primary attractant for pests.", proof: "Waste Log" },
                { id: "MESS-10", description: "Train all kitchen staff on food safety and hygiene.", priority: "High", riskLevel: "High", consequence: "The entire system relies on staff following the correct procedures.", proof: "Training Records" }
            ]
        },
        {
            title: "IT & Network Acceptable Use Policy",
            department: "IT",
            frequency: "Ongoing",
            role: "IT Administrator",
            summary: "Manages digital safety and network integrity.",
            icon: "computer",
            tasks: [
                { id: "IT-AUP-01", description: "Enforce strong password policies for all network users.", priority: "High", riskLevel: "High", consequence: "Weak passwords are the easiest way for hackers to gain unauthorized access.", proof: "Password Policy Document" },
                { id: "IT-AUP-02", description: "Block access to malicious or inappropriate websites on the campus network.", priority: "High", riskLevel: "High", consequence: "Protects students from harmful content and protects the network from malware.", proof: "Firewall/Filter Logs" },
                { id: "IT-AUP-03", description: "Monitor network for unusual activity or security threats.", priority: "High", riskLevel: "High", consequence: "Early detection of threats can prevent a major breach.", proof: "Network Monitoring Logs" },
                { id: "IT-AUP-04", description: "Ensure all campus computers have up-to-date antivirus software.", priority: "High", riskLevel: "High", consequence: "A single infected machine can spread malware across the entire network.", proof: "Antivirus Dashboard" },
                { id: "IT-AUP-05", description: "Have all users agree to an Acceptable Use Policy upon first login.", priority: "High", riskLevel: "Medium", consequence: "Sets clear expectations for behavior and provides grounds for disciplinary action.", proof: "AUP Acceptance Log" },
                { id: "IT-AUP-06", description: "Manage student data in compliance with data privacy laws.", priority: "High", riskLevel: "High", consequence: "A breach of student data can have severe legal and reputational consequences.", proof: "Data Privacy Audit" },
                { id: "IT-AUP-07", description: "Provide secure Wi-Fi access for students, staff, and guests.", priority: "High", riskLevel: "High", consequence: "An unsecured Wi-Fi network can be a gateway for attackers.", proof: "Wi-Fi Configuration" },
                { id: "IT-AUP-08", description: "Back up all critical university data regularly.", priority: "High", riskLevel: "High", consequence: "A ransomware attack or server failure can lead to catastrophic data loss without backups.", proof: "Backup Logs" },
                { id: "IT-AUP-09", description: "Have a clear policy for software installation on campus computers.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized software can introduce security risks and licensing issues.", proof: "Software Policy" },
                { id: "IT-AUP-10", description: "Provide IT support to students and staff.", priority: "High", riskLevel: "Medium", consequence: "Lack of support leads to frustration and users finding insecure workarounds.", proof: "Helpdesk Tickets" }
            ]
        },
        {
            title: "Emergency Transport SOP",
            department: "Health/Transport",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "Manages on-campus ambulance and emergency medical transport.",
            icon: "ambulance",
            tasks: [
                { id: "TRANSPORT-EMER-01", description: "Check on-campus ambulance daily (fuel, tires, medical supplies).", priority: "High", riskLevel: "High", consequence: "An ambulance that is not ready can be a fatal weak link in an emergency.", proof: "Ambulance Check Log" },
                { id: "TRANSPORT-EMER-02", description: "Ensure an ambulance driver is available on call 24/7.", priority: "High", riskLevel: "High", consequence: "A patient needing urgent hospital transfer is stranded.", proof: "Driver Roster" },
                { id: "TRANSPORT-EMER-03", description: "Maintain a list of nearby hospitals and their contact numbers.", priority: "High", riskLevel: "High", consequence: "Wasting time searching for a hospital number during an emergency.", proof: "Hospital Contact List" },
                { id: "TRANSPORT-EMER-04", description: "Train drivers on the fastest routes to designated hospitals.", priority: "High", riskLevel: "Medium", consequence: "Every minute saved can make a difference in a medical emergency.", proof: "Route Training Log" },
                { id: "TRANSPORT-EMER-05", description: "Have a clear protocol for dispatching the ambulance.", priority: "High", riskLevel: "High", consequence: "A clear, single point of contact for dispatch prevents confusion.", proof: "Dispatch SOP" },
                { id: "TRANSPORT-EMER-06", description: "Log all ambulance trips with details of the patient and incident.", priority: "High", riskLevel: "High", consequence: "Provides a legal record of the emergency response.", proof: "Ambulance Trip Log" },
                { id: "TRANSPORT-EMER-07", description: "Regularly service the ambulance.", priority: "High", riskLevel: "High", consequence: "A breakdown during a patient transfer can be catastrophic.", proof: "Service Records" },
                { id: "TRANSPORT-EMER-08", description: "Ensure ambulance staff are trained in first-aid.", priority: "High", riskLevel: "High", consequence: "The team can provide care en route to the hospital.", proof: "Training Records" },
                { id: "TRANSPORT-EMER-09", description: "Test ambulance siren and lights daily.", priority: "High", riskLevel: "High", consequence: "Crucial for clearing traffic during an emergency.", proof: "Test Log" },
                { id: "TRANSPORT-EMER-10", description: "Coordinate with campus security for clear passage during emergencies.", priority: "High", riskLevel: "High", consequence: "Security must be ready to clear gates and roads for the ambulance.", proof: "Coordination Plan" }
            ]
        },
        {
            title: "Campus Incident Handling",
            department: "Management",
            frequency: "Per Incident",
            role: "Registrar/Dean",
            summary: "A protocol for investigating and resolving campus incidents.",
            icon: "siren",
            tasks: [
                { id: "INC-HDLG-UNIV-01", description: "Log every incident in a central incident management system.", priority: "High", riskLevel: "High", consequence: "Without a log, there is no institutional memory of past incidents.", proof: "Incident Log" },
                { id: "INC-HDLG-UNIV-02", description: "Immediately notify parents/guardians in case of a student medical emergency.", priority: "High", riskLevel: "High", consequence: "A delay in notification is a major source of parental anger and legal claims.", proof: "Communication Log" },
                { id: "INC-HDLG-UNIV-03", description: "Follow a fair and documented process for investigating student conflicts.", priority: "High", riskLevel: "Medium", consequence: "A biased investigation can lead to accusations of unfairness and legal challenges.", proof: "Investigation Report" },
                { id: "INC-HDLG-UNIV-04", description: "Escalate major security breaches to senior management and police.", priority: "High", riskLevel: "High", consequence: "Keeps leadership and authorities informed to manage the crisis.", proof: "Escalation Log" },
                { id: "INC-HDLG-UNIV-05", description: "Maintain confidentiality of all parties involved in an incident.", priority: "High", riskLevel: "High", consequence: "Breaching confidentiality can violate privacy and lead to legal action.", proof: "Confidentiality Agreement" },
                { id: "INC-HDLG-UNIV-06", description: "Conduct a root cause analysis for all significant incidents.", priority: "High", riskLevel: "High", consequence: "Essential for preventing the same incident from happening again.", proof: "RCA Report" },
                { id: "INC-HDLG-UNIV-07", description: "Implement corrective actions to prevent recurrence.", priority: "High", riskLevel: "High", consequence: "The most important step to show that the institution learns from its mistakes.", proof: "CAPA Plan" },
                { id: "INC-HDLG-UNIV-08", description: "Provide support and counseling to affected students/staff.", priority: "High", riskLevel: "Medium", consequence: "Crucial for the well-being of the campus community after a traumatic event.", proof: "Counseling Log" },
                { id: "INC-HDLG-UNIV-09", description: "Document all communications with external parties (police, media).", priority: "High", riskLevel: "High", consequence: "Creates a clear record of who said what and when.", proof: "External Communication Log" },
                { id: "INC-HDLG-UNIV-10", description: "Review and update incident handling procedures annually.", priority: "High", riskLevel: "High", consequence: "Ensures the procedures remain effective and relevant.", proof: "Updated Procedures" }
            ]
        }
    ]
};
