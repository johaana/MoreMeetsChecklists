
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Healthcare & Hospital Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "Stop audit failures, patient safety incidents, and compliance gaps—before they cost you accreditation or reputation.",
    heroHeadline: "Prevent audit failures and patient safety incidents.",
    heroSubheadline: "Built for NABH & JCI-aligned hospitals that take zero-risk clinical operations seriously.",
    pricingUrgency: "One clinical incident or audit failure costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "hospital",
    badgeText: "Clinical Grade",
    badgeVariant: "destructive",
    bestseller: true,
    whoIsItFor: ["Hospital COOs & CEOs", "Medical Directors", "Quality Assurance Heads", "Nursing Superintendents", "Accreditation Managers"],
    sampleItems: [
        { text: "Stop catastrophic surgical errors with a WHO-aligned Surgical Safety checklist.", icon: "stethoscope" },
        { text: "Combat hospital-acquired infections (HAIs) with rigorous sterilization (CSSD) audits.", icon: "syringe" },
        { text: "Eliminate medication errors with high-alert medication dispensing protocols.", icon: "pill" },
        { text: "Enhance patient safety with a bulletproof identification protocol at every touchpoint.", icon: "user-check" },
        { text: "Ensure regulatory compliance with a systematic biomedical waste management process.", icon: "recycle" },
        { text: "Prepare for any crisis with drilled emergency code and ambulance response SOPs.", icon: "ambulance" }
    ],
    globalStandards: {
        title: "NABH, JCI & WHO ALIGNED",
        standards: [
            { name: "NABH", description: "National Accreditation Board for Hospitals & Healthcare Providers compliance." },
            { name: "JCI", description: "Joint Commission International standards for clinical quality." },
            { name: "WHO", description: "World Health Organization Safe Surgery guidelines." },
            { name: "ISO 15189", description: "Quality and competence in medical laboratories." }
        ]
    },
    checklists: [
        {
            title: "Surgical Safety Checklist (WHO Aligned)",
            department: "Surgery",
            frequency: "Per Procedure",
            role: "Surgeon/Nurse",
            summary: "A three-phase checklist (Sign In, Time Out, Sign Out) to prevent common surgical errors and improve teamwork.",
            icon: "file-check",
            tasks: [
                { id: "H-SSC-01", description: "Confirm patient identity, surgical site, procedure, and consent before anesthesia.", priority: "High", riskLevel: "High", consequence: "Failure to confirm is the primary cause of \"never events\" like wrong-site surgery, leading to patient harm, lawsuits, and loss of accreditation.", proof: "Verbal confirmation log" },
                { id: "H-SSC-02", description: "Mark the surgical site.", priority: "High", riskLevel: "High", consequence: "An unmarked or incorrectly marked site can lead to catastrophic error in the operating room.", proof: "Visual check" },
                { id: "H-SSC-03", description: "Review critical patient history, including allergies and airway risks.", priority: "High", riskLevel: "High", consequence: "Missing a known allergy can lead to anaphylactic shock and death during surgery.", proof: "Anesthesia record" },
                { id: "H-SSC-04", description: "Confirm instrument, sponge, and needle counts before closing.", priority: "High", riskLevel: "High", consequence: "A retained foreign object can lead to severe post-operative complications, infection, and requires a second surgery to remove.", proof: "Count sheet" },
                { id: "H-SSC-05", description: "Verbally confirm the name of the procedure recorded and specimen labeling.", priority: "High", riskLevel: "High", consequence: "Incorrectly labeled specimens can lead to a misdiagnosis (e.g., of cancer), with life-altering consequences for the patient.", proof: "Sign-out log" },
                { id: "H-SSC-06", description: "Ensure all team members have introduced themselves by name and role.", priority: "High", riskLevel: "Medium", consequence: "Promotes teamwork and psychological safety, empowering any team member to speak up if they see a problem.", proof: "Time-out log" },
                { id: "H-SSC-07", description: "Confirm antibiotic prophylaxis has been given within the last 60 minutes.", priority: "High", riskLevel: "High", consequence: "Greatly increases the risk of surgical site infections (SSIs).", proof: "Medication Administration Record (MAR)" },
                { id: "H-SSC-08", description: "Review anticipated critical events with the surgeon and anesthesia team.", priority: "High", riskLevel: "High", consequence: "The team is unprepared for potential complications like major blood loss.", proof: "Verbal confirmation" },
                { id: "H-SSC-09", description: "Verify availability of essential imaging.", priority: "High", riskLevel: "High", consequence: "Proceeding without necessary scans can lead to surgical errors.", proof: "Imaging Display" },
                { id: "H-SSC-10", description: "Check for equipment issues or concerns before starting.", priority: "High", riskLevel: "High", consequence: "Equipment malfunction during surgery can have disastrous consequences.", proof: "Equipment Check Log" }
            ]
        },
        {
            title: "Infection Control & Sterilization (CSSD)",
            department: "Infection Control",
            frequency: "Daily/Per Cycle",
            role: "CSSD Technician",
            summary: "Ensures surgical instruments are properly cleaned, disinfected, sterilized, and stored to prevent Surgical Site Infections (SSIs).",
            icon: "syringe",
            tasks: [
                { id: "H-IC-01", description: "Run biological indicator tests in each autoclave load.", priority: "High", riskLevel: "High", consequence: "The only way to be certain that the sterilization process was effective at killing all microbial life.", proof: "Test strip log" },
                { id: "H-IC-02", description: "Verify autoclave cycle parameters (time, temp, pressure) for each run.", priority: "High", riskLevel: "High", consequence: "Incorrect parameters mean the instruments are not sterile, posing a major infection risk.", proof: "Autoclave printout" },
                { id: "H-IC-03", description: "Check sterile packages for integrity, dryness, and expiry date before dispatch.", priority: "High", riskLevel: "High", consequence: "A compromised package (tear, moisture) means the contents are no longer sterile.", proof: "Package inspection log" },
                { id: "H-IC-04", description: "Monitor hand hygiene compliance in clinical areas.", priority: "High", riskLevel: "High", consequence: "Poor hand hygiene is the number one cause of hospital-acquired infections (HAIs).", proof: "Audit Form" },
                { id: "H-IC-05", description: "Maintain a log for environmental cleaning and disinfection.", priority: "High", riskLevel: "High", consequence: "Contaminated surfaces are a major vector for spreading pathogens between patients.", proof: "Cleaning Log" },
                { id: "H-IC-06", description: "Track hospital-acquired infection (HAI) rates.", priority: "High", riskLevel: "High", consequence: "If you don't track HAI rates, you cannot identify outbreaks or measure the effectiveness of your infection control program.", proof: "HAI Data Report" },
                { id: "H-IC-07", description: "Ensure staff use appropriate PPE in isolation rooms.", priority: "High", riskLevel: "High", consequence: "Failure to use PPE can lead to staff contracting the illness and spreading it to other patients.", proof: "PPE Audit" },
                { id: "H-IC-08", description: "Manage biomedical waste segregation and disposal.", priority: "High", riskLevel: "High", consequence: "Improper disposal can spread disease and lead to severe environmental and legal penalties.", proof: "Waste Log" },
                { id: "H-IC-09", description: "Audit antibiotic stewardship program compliance.", priority: "High", riskLevel: "High", consequence: "Overuse of antibiotics leads to the development of drug-resistant \"superbugs\".", proof: "Stewardship Audit" },
                { id: "H-IC-10", description: "Provide regular infection control training to all staff.", priority: "High", riskLevel: "High", consequence: "Infection control is everyone's responsibility; untrained staff are a weak link.", proof: "Training Records" }
            ]
        },
        {
            title: "High-Alert Medication SOP",
            department: "Pharmacy/Nursing",
            frequency: "Per Administration",
            role: "Nurse",
            summary: "A process to prevent medication errors involving high-risk drugs like insulin, heparin, and chemotherapy agents.",
            icon: "pill",
            tasks: [
                { id: "H-MED-01", description: "Require two licensed nurses to independently verify dosage calculations for high-alert medications.", priority: "High", riskLevel: "High", consequence: "A simple decimal point error in a dosage calculation can be fatal. A second check is a critical safeguard.", proof: "Dual sign-off on MAR" },
                { id: "H-MED-02", description: "Store Look-Alike, Sound-Alike (LASA) drugs in separate, labeled bins.", priority: "High", riskLevel: "High", consequence: "LASA drugs are a common source of medication errors; physical separation is key to prevention.", proof: "Storage audit photo" },
                { id: "H-MED-03", description: "Use smart infusion pumps with dose error reduction software for IV high-alert drugs.", priority: "High", riskLevel: "High", consequence: "Helps to prevent accidental overdoses from incorrect pump programming.", proof: "Pump Log" },
                { id: "H-MED-04", description: "Patient education on high-alert medications before discharge.", priority: "High", riskLevel: "Medium", consequence: "Patients who do not understand their medication (e.g., insulin) are at high risk of self-administering it incorrectly at home.", proof: "Patient Education Form" },
                { id: "H-MED-05", description: "Quarterly audit of high-alert medication incidents and near-misses.", priority: "High", riskLevel: "High", consequence: "Analyzing near-misses helps to identify and fix system flaws before they cause actual harm.", proof: "Audit Report" },
                { id: "H-MED-06", description: "Reconcile medications at every transition of care (admission, transfer, discharge).", priority: "High", riskLevel: "High", consequence: "This is a major point where errors occur, such as a drug being accidentally discontinued or double-dosed.", proof: "Medication Reconciliation Form" },
                { id: "H-MED-07", description: "Label all medications, including those in syringes and basins.", priority: "High", riskLevel: "High", consequence: "An unlabeled syringe is a major patient safety risk.", proof: "Labeling Audit" },
                { id: "H-MED-08", description: "Report all medication errors and near misses.", priority: "High", riskLevel: "High", consequence: "A culture of reporting is essential for learning and improvement.", proof: "Incident Report" },
                { id: "H-MED-09", description: "Ensure concentrated electrolytes are stored only in the pharmacy.", priority: "High", riskLevel: "High", consequence: "Accidental injection of a concentrated electrolyte like potassium chloride is fatal.", proof: "Storage Audit" },
                { id: "H-MED-10", description: "Verify patient allergies before administering any medication.", priority: "High", riskLevel: "High", consequence: "Administering a drug to an allergic patient can cause anaphylactic shock.", proof: "Allergy Check in MAR" }
            ]
        },
        {
            title: "Patient Identification Protocol",
            department: "All Clinical",
            frequency: "Per Interaction",
            role: "All Clinical Staff",
            summary: "Ensures correct patient identification before any procedure, medication, or test to prevent 'never events'.",
            icon: "user-check",
            tasks: [
                { id: "H-PID-01", description: "Verify patient identity using at least two identifiers (e.g., full name and date of birth) before drawing blood.", priority: "High", riskLevel: "High", consequence: "A mislabeled blood sample can lead to a catastrophic transfusion reaction or misdiagnosis.", proof: "Verbal confirmation" },
                { id: "H-PID-02", description: "Match the patient ID band with the medication chart before administering any drug.", priority: "High", riskLevel: "High", consequence: "Giving the wrong medication to a patient can have serious or fatal consequences.", proof: "MAR sign-off" },
                { id: "H-PID-03", description: "Label all laboratory samples in the presence of the patient.", priority: "High", riskLevel: "High", consequence: "Prevents mix-ups where one patient's sample is labeled with another patient's name.", proof: "Procedure Adherence Audit" },
                { id: "H-PID-04", description: "Cross-check patient identifiers before any blood transfusion.", priority: "High", riskLevel: "High", consequence: "A blood transfusion mismatch is a life-threatening medical emergency.", proof: "Transfusion Checklist" },
                { id: "H-PID-05", description: "Use barcode scanning for patient ID and medication verification where available.", priority: "High", riskLevel: "High", consequence: "Technology can help to reduce human error in the identification process.", proof: "Scan Log" },
                { id: "H-PID-06", description: "Verify patient identity before any diagnostic procedure (e.g., X-ray, MRI).", priority: "High", riskLevel: "High", consequence: "Performing a procedure on the wrong patient exposes them to unnecessary radiation or risk.", proof: "Procedure Checklist" },
                { id: "H-PID-07", description: "Ensure all patients have a clear and accurate ID band.", priority: "High", riskLevel: "High", consequence: "A missing or illegible ID band is a major risk factor for identification errors.", proof: "ID Band Audit" },
                { id: "H-PID-08", description: "For non-verbal patients, use alternative identification methods.", priority: "High", riskLevel: "High", consequence: "Extra care must be taken for patients who cannot confirm their own identity.", proof: "Alternative ID Protocol" },
                { id: "H-PID-09", description: "Train all clinical staff on the patient identification policy.", priority: "High", riskLevel: "High", consequence: "This is a fundamental patient safety skill for all healthcare workers.", proof: "Training Records" },
                { id: "H-PID-10", description: "Audit compliance with the patient identification policy monthly.", priority: "High", riskLevel: "High", consequence: "Regular audits are needed to ensure the policy is being followed consistently.", proof: "Audit Report" }
            ]
        },
        {
            title: "Biomedical Waste Management",
            department: "Housekeeping/Compliance",
            frequency: "Daily",
            role: "Bio-medical Waste Officer",
            summary: "A systematic process for safe handling and disposal of hazardous medical waste, as per regulatory guidelines.",
            icon: "recycle",
            tasks: [
                { id: "BMW-01", description: "Audit waste segregation into designated color-coded bins at point of generation.", priority: "High", riskLevel: "High", consequence: "Improper segregation can expose waste handlers to infectious materials and is a major legal violation.", proof: "Segregation Audit Log" },
                { id: "BMW-02", description: "Ensure sharps are disposed of in puncture-proof containers.", priority: "High", riskLevel: "High", consequence: "Needlestick injuries can transmit diseases like HIV and Hepatitis B to staff.", proof: "Sharps Container Check" },
                { id: "BMW-03", description: "Maintain a log of all biomedical waste collected, including weight and category.", priority: "High", riskLevel: "High", consequence: "This is a legal requirement for regulatory reporting and proves due diligence.", proof: "Waste Collection Log" },
                { id: "BMW-04", description: "Hand over waste to authorized disposal vendors and obtain receipts.", priority: "High", riskLevel: "High", consequence: "The hospital is legally responsible for the waste until it is properly destroyed.", proof: "Disposal Manifest/Receipt" },
                { id: "BMW-05", description: "Train all staff on correct biomedical waste segregation and handling.", priority: "High", riskLevel: "High", consequence: "Untrained staff are a primary cause of segregation errors.", proof: "Training Records" },
                { id: "BMW-06", description: "Ensure waste storage area is secure and access-controlled.", priority: "High", riskLevel: "High", consequence: "Prevents unauthorized access and potential misuse of medical waste.", proof: "Storage Area Inspection" },
                { id: "BMW-07", description: "Check that all waste containers are properly labeled with the biohazard symbol.", priority: "High", riskLevel: "High", consequence: "Clear labeling is crucial to prevent accidental exposure.", proof: "Label Audit" },
                { id: "BMW-08", description: "Conduct regular audits of the entire waste management process.", priority: "High", riskLevel: "High", consequence: "Ensures ongoing compliance with complex environmental laws.", proof: "BMW Audit Report" },
                { id: "BMW-09", description: "Have a spill management plan for biomedical waste.", priority: "High", riskLevel: "High", consequence: "A spill of infectious waste must be handled correctly to prevent exposure.", proof: "Spill SOP" },
                { id: "BMW-10", description: "File annual returns as per regulatory requirements.", priority: "High", riskLevel: "High", consequence: "Failure to file can lead to fines and legal action.", proof: "Annual Return Filing" }
            ]
        },
        {
            title: "Medical Equipment Maintenance",
            department: "Biomedical Engineering",
            frequency: "Scheduled",
            role: "Biomedical Engineer",
            summary: "A preventive maintenance program to ensure all medical equipment is safe, accurate, and reliable.",
            icon: "wrench",
            tasks: [
                { id: "MEM-01", description: "Follow a preventive maintenance schedule for all medical equipment.", priority: "High", riskLevel: "High", consequence: "Equipment failure during a critical procedure can be fatal.", proof: "PM Schedule" },
                { id: "MEM-02", description: "Calibrate all diagnostic and therapeutic equipment as per manufacturer guidelines.", priority: "High", riskLevel: "High", consequence: "An uncalibrated device can lead to misdiagnosis or incorrect treatment.", proof: "Calibration Certificates" },
                { id: "MEM-03", description: "Log all maintenance and repair activities for each piece of equipment.", priority: "High", riskLevel: "High", consequence: "Provides a legal record of maintenance and helps track equipment reliability.", proof: "Equipment History Card" },
                { id: "MEM-04", description: "Test defibrillators and ventilators daily.", priority: "High", riskLevel: "High", consequence: "These are life-support devices; they must be ready to use at a moment's notice.", proof: "Daily Check Log" },
                { id: "MEM-05", description: "Ensure backup equipment is available for critical devices.", priority: "High", riskLevel: "High", consequence: "Lack of a backup can be catastrophic if a primary device fails.", proof: "Backup Inventory" },
                { id: "MEM-06", description: "Train clinical staff on the basic use and cleaning of equipment.", priority: "High", riskLevel: "Medium", consequence: "Improper use can damage expensive equipment or cause patient harm.", proof: "Training Records" },
                { id: "MEM-07", description: "Tag and remove any faulty equipment from service immediately.", priority: "High", riskLevel: "High", consequence: "Using faulty equipment is a major patient safety risk.", proof: "Out of Service Tag" },
                { id: "MEM-08", description: "Maintain a stock of critical spare parts.", priority: "High", riskLevel: "High", consequence: "Can significantly reduce downtime for critical equipment.", proof: "Spare Part Inventory" },
                { id: "MEM-09", description: "Review equipment performance and plan for replacement.", priority: "High", riskLevel: "Medium", consequence: "Prevents using outdated technology and helps in capital planning.", proof: "Replacement Plan" },
                { id: "MEM-10", description: "Maintain all equipment manuals and service contracts.", priority: "High", riskLevel: "Medium", consequence: "Essential for troubleshooting and managing vendor SLAs.", proof: "Document Library" }
            ]
        },
        {
            title: "Medical Record & Data Privacy",
            department: "Medical Records Dept.",
            frequency: "Ongoing",
            role: "MRD Officer",
            summary: "A protocol to ensure patient confidentiality and compliance with data privacy laws.",
            icon: "file-lock",
            tasks: [
                { id: "MRD-01", description: "Ensure all patient records are stored in a secure, access-controlled area.", priority: "High", riskLevel: "High", consequence: "Unauthorized access can lead to a major breach of patient confidentiality.", proof: "Access Log" },
                { id: "MRD-02", description: "Audit who is accessing electronic health records (EHR).", priority: "High", riskLevel: "High", consequence: "Helps to detect unauthorized snooping into patient files by staff.", proof: "EHR Access Audit Trail" },
                { id: "MRD-03", description: "Follow a strict protocol for releasing patient information to third parties.", priority: "High", riskLevel: "High", consequence: "Improper release of information is a major legal and ethical violation.", proof: "Information Release Form" },
                { id: "MRD-04", description: "Train all staff on patient confidentiality and data privacy.", priority: "High", riskLevel: "High", consequence: "Human error is a leading cause of data breaches.", proof: "Training Records" },
                { id: "MRD-05", description: "Ensure all records are complete and accurately coded.", priority: "High", riskLevel: "High", consequence: "Inaccurate coding can lead to insurance claim denials and revenue loss.", proof: "Coding Audit Report" },
                { id: "MRD-06", description: "Manage the archival and retrieval of old records.", priority: "High", riskLevel: "Medium", consequence: "A disorganized archive can make it impossible to find critical records when needed.", proof: "Archival Log" },
                { id: "MRD-07", description: "Comply with all legal requirements for medical record retention.", priority: "High", riskLevel: "High", consequence: "Premature destruction of records can have legal consequences.", proof: "Retention Policy" },
                { id: "MRD-08", description: "Use strong passwords and MFA for EHR access.", priority: "High", riskLevel: "High", consequence: "A compromised EHR password can lead to a massive data breach.", proof: "System Security Settings" },
                { id: "MRD-09", description: "Have a plan for downtime of the EHR system.", priority: "High", riskLevel: "High", consequence: "During downtime, a clear paper-based process is needed to maintain patient care.", proof: "Downtime Procedure" },
                { id: "MRD-10", description: "Conduct regular risk assessments for data privacy.", priority: "High", riskLevel: "High", consequence: "Helps to proactively identify and mitigate new privacy risks.", proof: "Risk Assessment Report" }
            ]
        },
        {
            title: "Emergency Code Management",
            department: "Management/Security",
            frequency: "Quarterly",
            role: "Emergency Commander",
            summary: "A systematic approach to managing in-hospital emergencies like cardiac arrest or fire.",
            icon: "siren",
            tasks: [
                { id: "ECM-01", description: "Conduct mock drills for different emergency codes (e.g., Code Blue for cardiac arrest, Code Red for fire).", priority: "High", riskLevel: "High", consequence: "In a real emergency, an untrained team will be slow and disorganized, with fatal consequences.", proof: "Drill Report" },
                { id: "ECM-02", description: "Ensure all staff know the meaning of each code and their specific role.", priority: "High", riskLevel: "High", consequence: "Confusion over codes can lead to the wrong response or no response at all.", proof: "Code Training Log" },
                { id: "ECM-03", description: "Test the emergency code announcement system weekly.", priority: "High", riskLevel: "High", consequence: "If the team is not alerted, they cannot respond.", proof: "System Test Log" },
                { id: "ECM-04", description: "Ensure crash carts are stocked and checked daily.", priority: "High", riskLevel: "High", consequence: "Missing or expired medication on a crash cart during a Code Blue can be fatal.", proof: "Crash Cart Checklist" },
                { id: "ECM-05", description: "Debrief after every real or mock code to identify areas for improvement.", priority: "High", riskLevel: "High", consequence: "The best way to learn and improve response times and effectiveness.", proof: "Debrief Minutes" },
                { id: "ECM-06", description: "Maintain a log of all emergency code activations.", priority: "High", riskLevel: "High", consequence: "Provides data for quality improvement and regulatory review.", proof: "Code Logbook" },
                { id: "ECM-07", description: "Coordinate with local emergency services for external support.", priority: "High", riskLevel: "High", consequence: "Ensures a smooth handover for patients requiring transfer.", proof: "Coordination Plan" },
                { id: "ECM-08", description: "Ensure clear roles are defined for the code team.", priority: "High", riskLevel: "High", consequence: "In a crisis, a clear command structure is essential to avoid chaos.", proof: "Team Role Cards" },
                { id: "ECM-09", description: "Update emergency code protocols annually.", priority: "High", riskLevel: "High", consequence: "Protocols must be updated based on the latest clinical guidelines.", proof: "Updated Protocol Document" },
                { id: "ECM-10", description: "Provide psychological first aid or debriefing for staff after traumatic events.", priority: "High", riskLevel: "Medium", consequence: "Helps staff cope with the stress of emergencies and prevents burnout.", proof: "Debriefing Schedule" }
            ]
        }
    ]
};
