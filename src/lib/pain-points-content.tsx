
import React from 'react';
import { HandCoins, Shield, TrendingUp, Users, Bus, Anchor, Trophy, Briefcase, FileCheck, Recycle, Drama, FerrisWheel, Mask, GalleryVertical, Guitar, VenetianMask, Gamepad, Rabbit, Video, Computer, Landmark, Sprout, Wind, Syringe, HeartPulse, BrainCircuit, Lock, KeyRound, Banknote, Bug, UserCog, Siren, Milestone, UserCheck, Stethoscope, Microscope, TestTube, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, CakeSlice, Truck, Pill, Store, Gem, Factory, HardHat, GraduationCap, Building2, Warehouse, Utensils, Building, MonitorPlay, Film, PawPrint, Home, Dumbbell, Tv, Shirt, Zap } from 'lucide-react';

export const painPointsContent = {
    jewelry_and_luxury_retail: {
        title: "High-Stakes Retail: How a Single Missed Step Leads to Multi-Crore Losses",
        points: [
            { icon: <Gem />, title: "The ₹3.8 Crore Mumbai Showroom Theft", description: "A premium store was burgled overnight after an alarm was switched off for maintenance with no backup protocol. Our 'End-of-Day Security' checklist prevents this by mandating alarm, CCTV, and patrol verifications before closing." },
            { icon: <Users />, title: "The Fake Return Fraud", description: "A staff member colluded with a customer to process ₹12 lakh in fake refunds. Our 'Sales & Return Authorization' SOP, requiring dual approval for large refunds and weekly POS audits, eliminates this internal threat." },
            { icon: <Lock />, title: "The Vault Access Breach", description: "An employee used a colleague’s access card to enter a gold vault after hours. Our 'Vault Access Control' checklist, mandating biometric entry and daily log reviews, would have made this impossible." },
            { icon: <Shield />, title: "The Payment Gateway Cyber Scam", description: "A luxury watch brand lost sales after fraudsters placed fake QR codes on payment counters. Our 'Digital Transaction Security' checklist includes daily QR code validation to prevent this modern form of theft." }
        ]
    },
    hotels_and_resorts: {
        title: "From Guest Nightmare to 5-Star Experience: Real Incidents SOPs Prevent",
        points: [
            { icon: <Siren />, title: "The Hotel Arpit Palace Fire (Delhi, 2019)", description: "17 lives were lost in a hotel fire due to illegally blocked exits and non-functional alarms. Our daily 'Fire Safety & Exit Inspection' checklist provides a verifiable audit trail to ensure this never happens." },
            { icon: <Stethoscope />, title: "The Legionnaires’ Disease Outbreak (Spain, 2016)", description: "A deadly disease outbreak was traced to a resort's contaminated water systems. Our 'Preventive Maintenance' SOP for HVAC and plumbing ensures water quality is logged and systems are cleaned, preventing biological hazards." },
            { icon: <Bug />, title: "The Bed Bug Infestation & Reputational Damage", description: "A 5-star hotel faced a media storm over a bed bug complaint. Our 'Daily Room Readiness' SOP includes mandatory checks of mattresses and upholstery, catching such issues before a guest ever does." },
            { icon: <HandCoins />, title: "The 'Phantom' Minibar Charges", description: "Inaccurate minibar billing is a top guest complaint. Our 'Housekeeping & Minibar' SOP ensures stock is verified against consumption upon checkout, eliminating billing errors and revenue loss." }
        ]
    },
    restaurants: {
        title: "From Food Poisoning to Profit: Real Incidents Our Checklists Prevent",
        points: [
            { icon: <Bug />, title: "The E. coli Outbreak (Chipotle, USA, 2015)", description: "A nationwide E. coli outbreak cost Chipotle billions in stock value and brand damage. Our 'HACCP Kitchen Checklist' prevents cross-contamination with mandatory, logged checks for food handling and surface sanitation." },
            { icon: <Siren />, title: "The Pune Eatery Sealing (2022)", description: "An FSSAI raid sealed a popular eatery due to unhygienic conditions. Our 'Kitchen Opening & Closing' SOPs create a daily, auditable record of hygiene compliance, ensuring you're always inspection-ready." },
            { icon: <HandCoins />, title: "The Profit-Draining Spoilage Problem", description: "Thousands in produce was wasted due to a faulty walk-in freezer. Our 'Cold Storage Temperature Logs' provide twice-daily, signed verification that your expensive inventory is safe, preventing spoilage." },
            { icon: <Users />, title: "The Inconsistent Service that Kills Reviews", description: "One bad service experience can lead to a 1-star review. Our 'FOH Service Standards' checklist ensures every guest receives the same high level of service, from seating to billing, every single time." }
        ]
    },
    fashion_and_apparel_retail: {
        title: "From Fire Hazards to Profit Protection: Real Retail Disasters",
        points: [
            { icon: <Siren />, title: "The Karol Bagh Garment Fire (Delhi, 2023)", description: "A massive fire in a garment market was fueled by illegally stored, flammable materials. Our 'Store Safety & Fire Audit' mandates checks for proper storage and clear fire exits, preventing a small spark from becoming a disaster." },
            { icon: <Shield />, title: "The Rana Plaza Factory Collapse (Bangladesh, 2013)", description: "Over 1,100 workers died when a structurally unsound garment factory collapsed. Our 'Vendor Compliance Audit' includes checks for structural safety and ethical labor practices in your supply chain, protecting your brand from association with such tragedies." },
            { icon: <TrendingUp />, title: "The Dead Stock Dilemma", description: "Billions are lost globally to unsold seasonal inventory. Our 'Seasonal Inventory Management' SOP provides a framework for timely markdowns and stock consolidation to clear inventory before it becomes worthless." },
            { icon: <Lock />, title: "The Fitting Room Shrinkage", description: "Professional shoplifters often target fitting rooms. Our 'Fitting Room Operations' protocol, requiring item counts and attendant monitoring, is a simple, effective deterrent against this major source of loss." }
        ]
    },
    electronics_showroom_pack: {
        title: "From Short Circuits to Secure Sales: Real Electronics Store Risks",
        points: [
            { icon: <Siren />, title: "The Vijay Sales Fire (Mumbai, 2020)", description: "A devastating fire was traced back to a short circuit from overloaded wiring. Our 'Electrical Safety Audit' mandates checks for wiring loads and prevents the use of unsafe multi-plugs, stopping fires before they start." },
            { icon: <Zap />, title: "The Lithium Battery Explosion (Samsung Store, UK)", description: "A phone's battery exploded while charging, causing an emergency evacuation. Our 'Demo Unit Safety' SOP includes daily checks for battery swelling and heat on all charging devices, preventing fires and injuries." },
            { icon: <Bug />, title: "The Warranty Swap Fraud", description: "Fraudsters buy a new device, swap its internal components with a damaged one, and return it for a refund. Our 'Returns & Warranty' SOP, requiring serial number verification on the device and box, makes this scam impossible." },
            { icon: <HandCoins />, title: "The Shipping Dimension Error", description: "A single wrong digit in a product's weight or dimensions can lead to thousands in shipping chargebacks. Our 'Maker-Checker' data entry SOP for new products prevents these expensive, avoidable errors." }
        ]
    },
    supermarket_grocery_retail_pack: {
        title: "From Expired Goods to Efficient Operations: Real Supermarket Risks",
        points: [
            { icon: <Siren />, title: "The £7.6M Tesco Fine for Expired Food (UK, 2017)", description: "Tesco was hit with a multi-million pound fine for selling expired food. Our 'Expiry Date & FIFO Rotation' checklist provides a daily, verifiable system to ensure expired goods never reach the shelf." },
            { icon: <Bug />, title: "The Big Bazaar Fine for Expired Goods (India, 2022)", description: "A major hypermarket was fined after a customer found expired products. Our SOPs for daily expiry sweeps and proper stock rotation prevent this regulatory and reputational disaster." },
            { icon: <Stethoscope />, title: "The Slip-and-Fall Lawsuit", description: "A simple spill on the floor can lead to a customer injury and a costly lawsuit. Our 'Hourly Floor Inspection & Spill Response' SOP ensures hazards are identified and cleaned up immediately, with a log to prove diligence." },
            { icon: <Recycle />, title: "The Cold Chain Failure", description: "A faulty refrigerator can lead to thousands in spoiled dairy and produce. Our 'Cold Storage Temperature Logs' provide twice-daily, signed verification that your equipment is working, protecting your inventory and customers." }
        ]
    },
    film_production_pack: {
        title: "From Costly Errors to Creative Control: Real Production Disasters & How to Prevent Them",
        points: [
            { icon: <Siren />, title: "The On-Set Electrocution (Hyderabad)", description: "A crew member was fatally electrocuted handling lighting on an outdoor shoot. Our 'Pre-Shoot Electrical & Set Safety' checklist, requiring grounding tests and safety officer sign-offs, prevents this." },
            { icon: <HeartPulse />, title: "The Uninsured Stunt Injury", description: "A stunt double's spinal injury led to a massive lawsuit because the production lacked specific accident insurance. Our 'Stunt & Risk Scene Safety' SOP mandates insurance validation and on-site medical readiness." },
            { icon: <FileLock />, title: "The OTT Script Leak", description: "A major series script was leaked from a freelancer's unsecured cloud folder. Our 'Data Security & NDA Compliance' SOP enforces secure sharing protocols and role-based access to protect your IP." },
            { icon: <Bug />, title: "The ₹50 Lakh Vendor Overbilling", description: "A production was overbilled due to duplicate invoices. Our 'Vendor Billing & Audit' SOP implements a three-way match (Invoice vs. PO vs. GRN) to stop financial leakage." }
        ]
    },
    ott_platform_pack: {
        title: "From Platform Outages to Privacy Breaches: Real OTT Disasters",
        points: [
            { icon: <Users />, title: "The Live Sports Streaming Crash", description: "A major OTT platform crashed during a live cricket match, infuriating millions. Our 'Live Event Readiness' checklist prevents this with mandatory load testing and disaster recovery drills before major events." },
            { icon: <Shield />, title: "The ZEE5 Data Breach (India, 2021)", description: "User data, including emails and phone numbers, was exposed in a major breach. Our 'Data Privacy & Access Control' SOPs, requiring data encryption and least-privilege access, are designed to prevent this." },
            { icon: <Lock />, title: "The Netflix Vendor Data Leak (2020)", description: "Subscriber data was exposed not by Netflix, but by a third-party vendor. Our 'Vendor Compliance Checklist' includes mandatory security assessments of all third-party partners who handle your data." },
            { icon: <FileLock />, title: "The Copyright Takedown Nightmare", description: "A platform faced legal action for hosting content without proper rights. Our 'Content Licensing SOP' ensures a clear, auditable chain-of-title for all assets before they go live." }
        ]
    },
    theme_park_ops_pack: {
        title: "From Ride Malfunctions to Revenue Loss: Real Theme Park Tragedies",
        points: [
            { icon: <Siren />, title: "The Chennai Ride Collapse (2019)", description: "A ride collapsed mid-operation, leading to fatalities. Our 'Daily Ride Inspection' checklist, including checks of structural bolts, safety harnesses, and emergency stops, provides a mandatory, auditable safety verification." },
            { icon: <Shield />, title: "The Stampede Risk", description: "Poor crowd flow management can turn a popular attraction into a dangerous stampede risk. Our 'Crowd Management SOP' provides clear protocols for queue management, barrier setup, and emergency dispersal." },
            { icon: <Bug />, title: "The Food Stall Hygiene Failure", description: "Food poisoning from a single stall can ruin a park's reputation. Our 'Vendor & F&B Stall Safety' checklists enforce the same HACCP-based hygiene standards across your entire park." },
            { icon: <HeartPulse />, title: "The Delayed Medical Response", description: "A guest suffering from heatstroke did not receive timely medical attention. Our 'Emergency Medical Response' plan mandates staffed first-aid posts and clear communication protocols for rapid response." }
        ]
    },
    sports_clubs_facilities_pack: {
        title: "From Minor Lapses to Major Disasters: Real Incidents That SOPs Prevent",
        points: [
            { icon: <Siren />, title: "The Kerala Stadium Stampede", description: "Poor entry/exit flow and no emergency plan led to a fatal stampede. Our 'Crowd Control & Entry Management SOP' with pre-event capacity verification and evacuation drills prevents this." },
            { icon: <HeartPulse />, title: "The Athlete Collapse from Heatstroke", description: "A teenage athlete collapsed with no on-site medical team. Our 'Medical & Emergency Response SOP' mandates certified first-aiders, hydration monitoring, and ambulance readiness checks." },
            { icon: <FileLock />, title: "The Fake Ticket Scandal (Bengaluru)", description: "Chaos erupted at a cricket match due to fake QR code tickets. Our 'Digital Ticketing & Entry Validation SOP' uses real-time scanning and partner sync to eliminate this fraud." },
            { icon: <Wind />, title: "The Monsoon Flooding Disaster (Delhi)", description: "A basement gym's equipment worth ₹25 lakh was destroyed by flooding due to poor drainage. Our 'Facility Maintenance & Seasonal Prep SOP' includes mandatory checks for drainage, sumps, and waterproofing." }
        ]
    },
    fitness_centers_gyms_pack: {
        title: "From Member Injuries to Membership Growth: Real Gym Risks & Solutions",
        points: [
            { icon: <Siren />, title: "The Gym Equipment Fatality (Pune, 2022)", description: "A gym-goer was killed when a machine's cable snapped. Our 'Daily Equipment Inspection' checklist includes mandatory checks for cable wear and tear, preventing such catastrophic failures." },
            { icon: <Stethoscope />, title: "The Trainer Negligence Lawsuit (LA Fitness, US)", description: "A gym was sued after a trainer's negligence led to a member's injury. Our 'Trainer Certification & Safety Induction' SOP ensures all trainers are qualified and follow safe training protocols." },
            { icon: <Bug />, title: "The Locker Room Fungal Outbreak", description: "Unhygienic locker rooms can lead to skin infections and member complaints. Our 'Daily Hygiene & Sanitation' routines provide a verifiable record that all wet areas are cleaned and disinfected multiple times a day." },
            { icon: <Shield />, title: "The Unprepared Medical Emergency", description: "A member suffers a heart attack with no clear response plan. Our 'Emergency & AED Readiness' checklist ensures your AED is functional and staff are trained in CPR, turning chaos into a life-saving response." }
        ]
    },
    facility_management_blueprint: {
        title: "From Costly Breakdowns to Efficient Operations: Real Facility Disasters",
        points: [
            { icon: <Siren />, title: "The Escalator Injury (Mumbai Mall)", description: "An escalator malfunctioned due to poor upkeep, causing serious injury. Our 'Preventive Maintenance' schedule for vertical transport ensures all safety checks and vendor servicing are logged and up-to-date." },
            { icon: <Lock />, title: "The Data Center Overheating Crisis (Bengaluru Tech Park)", description: "A critical data center was threatened when a primary HVAC unit failed. Our 'Critical Systems Redundancy' SOP ensures backup systems are tested weekly, preventing catastrophic downtime." },
            { icon: <Shield />, title: "The Elevator Fatality from Vendor Negligence (UK)", description: "A facility firm was fined millions after an elevator serviced by their vendor malfunctioned, causing a fatality. Our 'Vendor Performance Checklist' includes verification of a vendor's safety record and insurance, protecting you from their liability." },
            { icon: <Zap />, title: "The Silent Energy Drain", description: "Lights and ACs left on in unused floors can cost lakhs annually. Our 'Energy Management' checklist includes daily sweeps and BMS monitoring to eliminate wastage and cut utility costs." }
        ]
    },
    corporate_legal_compliance_starter_kit: {
        title: "From Legal Fines to Investor Readiness: Real Corporate Compliance Failures",
        points: [
            { icon: <Siren />, title: "The €1.2 Billion GDPR Fine (Meta, 2023)", description: "Meta was hit with a record fine for data privacy violations. Our 'Data Privacy Audit Checklist' helps you implement basic GDPR/DPDP principles, like data mapping and consent logs, to demonstrate compliance." },
            { icon: <Briefcase />, title: "The Startup Wrongful Termination Lawsuit", description: "A hastily fired employee can lead to a costly legal battle. Our 'Disciplinary Action' and 'Exit Process' checklists ensure you follow a fair, documented process, creating a strong legal defense." },
            { icon: <FileLock />, title: "The Missed Statutory Filing Penalty", description: "Startups are frequently fined for missing ROC or tax filing deadlines. Our 'Statutory Compliance Calendar' provides a clear, shared schedule with automated reminders to ensure deadlines are never missed." },
            { icon: <HandCoins />, title: "The Due Diligence Failure that Kills a Funding Round", description: "Investors will walk away if your legal house isn't in order. Our checklists for 'Contract Management' and 'Policy Acknowledgement' ensure you have a clean, auditable record, making you investor-ready." }
        ]
    },
    enterprise_risk_cybersecurity_pack: {
        title: "From Ransomware to Resilience: Real-World Cyber Disasters",
        points: [
            { icon: <Siren />, title: "The AIIMS Ransomware Attack (Delhi, 2022)", description: "This attack crippled a major hospital system, exposing massive vulnerabilities. Our 'Cybersecurity Incident Response' checklist, with protocols for isolation, backup restoration, and forensics, helps contain such an attack." },
            { icon: <Lock />, title: "The Colonial Pipeline Hack (USA, 2021)", description: "A single compromised password on an account without MFA shut down critical infrastructure. Our 'Access Control & MFA Audit' SOP mandates quarterly reviews to eliminate stale accounts and enforce multi-factor authentication everywhere." },
            { icon: <BrainCircuit />, title: "The AI Model Bias Lawsuit", description: "An AI hiring tool was found to be biased, leading to a discrimination lawsuit. Our 'AI Governance & Ethics' framework provides a checklist for assessing models for bias and ensuring fairness before deployment." },
            { icon: <Users />, title: "The Employee Phishing Attack", description: "The most common entry point for hackers is a successful phishing email. Our 'Employee Phishing Simulation' SOP provides a framework for training and testing your staff, turning your biggest weakness into a human firewall." }
        ]
    },
    healthcare_and_hospital_operations: {
        title: "Preventing 'Never Events': Real Incidents & The Checklists That Stop Them",
        points: [
            { icon: <Shield />, title: "Prevent Wrong-Site Surgery", description: "A patient in Rhode Island underwent brain surgery on the wrong side due to a communication lapse. Our WHO-aligned Surgical Safety Checklist mandates a 'Time Out' to prevent this catastrophic 'never event'." },
            { icon: <TrendingUp />, title: "Stop Look-Alike Drug Errors", description: "A fatal overdose occurred when a nurse administered a sound-alike drug. Our LASA (Look-Alike, Sound-Alike) Drug Management checklist, with 'Tall Man' lettering and dual sign-offs, prevents this." },
            { icon: <Users />, title: "Eliminate Hospital-Acquired Infections", description: "An unsterile instrument led to a post-operative infection and a costly lawsuit. Our CSSD Sterilization Protocol, with biological indicators and cycle logs, ensures every instrument is safe." },
            { icon: <HandCoins />, title: "Prevent Patient Identification Mix-ups", description: "A blood transfusion was given to the wrong patient, resulting in a severe reaction. Our Patient Identification SOP requires two unique identifiers at every critical point of care, from lab samples to transfusions." }
        ]
    },
    pharmacy_ops_pack: {
        title: "The Business Case for a Safe & Compliant Pharmacy",
        points: [
            { icon: <Shield />, title: "Prevent Dangerous Dispensing Errors", description: "Implement a multi-stage verification process, from prescription intake to a final check, including specific protocols for Look-Alike, Sound-Alike (LASA) drugs, to protect patients." },
            { icon: <FileLock />, title: "Master Controlled Substance & Narcotics Management", description: "Ensure full compliance and prevent diversion with rigorous checklists for logging, daily reconciliation, and secure storage of all controlled substances, ready for any audit." },
            { icon: <TrendingUp />, title: "Protect Product Efficacy with Cold Chain Management", description: "Prevent spoilage of expensive vaccines and biologics with daily temperature logging, alarm checks, and backup power protocols, ensuring medications are both safe and effective." },
            { icon: <Users />, title: "Improve Patient Outcomes with Standardized Counseling", description: "Go beyond just dispensing. Use our patient counseling checklist to ensure every patient understands their medication, leading to better adherence and health outcomes." }
        ]
    },
    school_operations_pack: {
        title: "From School Bus Tragedies to Fire Drills: Real-World School Risks",
        points: [
            { icon: <Siren />, title: "The Surat Coaching Centre Fire (2019)", description: "A fire in a coaching center killed 22 students due to illegal structures and blocked exits. Our 'Fire Safety Drills' and 'Infrastructure Audits' ensure your premises are safe and evacuation-ready." },
            { icon: <Bus />, title: "The 'Forgotten Child' on the School Bus", description: "A child left unattended on a bus is a school's worst nightmare. Our 'Transport Safety' checklist mandates a verifiable, seat-by-seat check by the attendant at the end of every route, preventing this tragedy." },
            { icon: <Bug />, title: "The Mid-Day Meal Food Poisoning", description: "Contaminated food can sicken hundreds of students. Our 'Canteen Hygiene & Food Safety' checklist, based on HACCP principles, ensures that food is stored, prepared, and served safely every day." },
            { icon: <Users />, title: "The Unverified Visitor Security Breach", description: "An unauthorized person on campus is a major security threat. Our 'Visitor Management & Campus Security' SOP provides a strict protocol for verifying and tracking every non-staff member who enters your school." }
        ]
    },
    university_college_ops: {
        title: "From Lab Explosions to Hostel Safety: Managing Campus Risks",
        points: [
            { icon: <Siren />, title: "The College Lab Fire (Coimbatore, 2023)", description: "A fire broke out in a college lab due to improper chemical storage. Our 'Lab & Chemical Safety' SOPs, aligned with OSHA standards, mandate correct storage, labeling, and disposal procedures to prevent fires and exposure." },
            { icon: <Home />, title: "The Hostel Fire Hazard", description: "Illegal use of cooking appliances in hostels is a common cause of fires. Our 'Hostel Inspection SOP' includes regular checks for prohibited items and faulty wiring, ensuring student residential safety." },
            { icon: <FileLock />, title: "The Exam Paper Leak", description: "A leaked exam paper can destroy an institution's academic reputation. Our 'Confidential Document Handling' SOP provides a strict chain-of-custody protocol for exam papers, from printing to distribution." },
            { icon: <HeartPulse />, title: "The Failure to Address Harassment", description: "Not having a clear, accessible anti-harassment policy can lead to regulatory action and a toxic campus culture. Our 'Anti-Harassment & Grievance' checklists help you comply with UGC guidelines and ensure a fair process." }
        ]
    },
    food_manufacturing_ops: {
        title: "From Product Recalls to Production Excellence: Real Food Plant Risks",
        points: [
            { icon: <Bug />, title: "The Ice Cream Plant Contamination (Gujarat, 2021)", description: "A major ice cream brand had to recall products after contamination was found at its plant. Our 'HACCP Production Checklists' help prevent contamination at every Critical Control Point, from raw materials to packaging." },
            { icon: <Users />, title: "The Worker Injury from Unsafe Machinery", description: "A worker losing a hand in a machine without a safety guard is a preventable tragedy. Our 'Machine Safety & EHS' SOPs mandate daily checks for safety guards and emergency stops, complying with the Factories Act." },
            { icon: <Recycle />, title: "The Cross-Contamination Catastrophe", description: "Undeclared allergens from cross-contact can be fatal for consumers. Our 'Allergen Management SOP' provides a rigorous system for production scheduling, cleaning verification, and raw material segregation to prevent this." },
            { icon: <FileLock />, title: "The Failed Export Consignment", description: "A shipment is rejected by a foreign country for not meeting their food safety standards. Our checklists, aligned with BRCGS and ISO 22000, ensure you have the documentation and processes for global market access." }
        ]
    },
    manufacturing_operations_ehs_pack: {
        title: "From Fatal Accidents to Factory Compliance: Real EHS Disasters",
        points: [
            { icon: <Siren />, title: "The LG Polymer Gas Leak (Visakhapatnam, 2020)", description: "A catastrophic chemical leak killed 12 people and affected hundreds due to a failure in maintenance and safety protocols. Our 'Chemical Handling' and 'Preventive Maintenance' SOPs are designed to prevent such disasters." },
            { icon: <Zap />, title: "The Lockout/Tagout (LOTO) Fatality", description: "A worker is killed when a machine is accidentally started during maintenance. Our 'LOTO Procedure' checklist is a life-saving protocol that ensures equipment is de-energized and locked out before any work begins." },
            { icon: <HardHat />, title: "The Confined Space Tragedy", description: "Workers entering a tank without proper checks can suffocate from toxic gases. Our 'Confined Space Entry Permit' mandates gas testing, an attendant, and a rescue plan, making entry safe." },
            { icon: <Shield />, title: "The 'Temporary' Fix That Becomes a Permanent Hazard", description: "An unsafe, temporary bypass on a machine's safety sensor leads to an injury weeks later. Our 'Shift Handover' and 'Maintenance Logs' ensure that such temporary fixes are documented and rectified, not forgotten." }
        ]
    },
    logistics_warehouse_pack: {
        title: "From Warehouse Collapse to Supply Chain Excellence: Real Logistics Risks",
        points: [
            { icon: <Siren />, title: "The Bhiwandi Warehouse Fire (2022)", description: "Lakhs of goods were destroyed in a fire caused by faulty wiring and improper storage of flammable materials. Our 'Warehouse Fire Safety' and 'Hazardous Material Handling' SOPs are designed to prevent this." },
            { icon: <Users />, title: "The Forklift Collision Fatality", description: "A pedestrian worker is hit and killed by a reversing forklift. Our 'Forklift & MHE Operations' checklist includes mandatory pre-operation checks for horns, lights, and designated pedestrian walkways to prevent such accidents." },
            { icon: <Building2 />, title: "The Amazon Warehouse Collapse (USA, 2021)", description: "A warehouse collapsed during a tornado, leading to fatalities and questions about structural safety. While weather can't be controlled, our 'Infrastructure & Racking Inspection' SOPs ensure your facility meets its structural load and safety ratings." },
            { icon: <TrendingUp />, title: "The Inventory 'Black Hole'", description: "Stock that exists in the system but can't be found on the shelf is a major profit drain. Our 'Cycle Counting' and 'Bin Accuracy' SOPs create a disciplined process to achieve over 99% inventory accuracy." }
        ]
    },
    animal_shelter_pack: {
        title: "From Disease Outbreak to Donor Trust: The Case for Shelter SOPs",
        points: [
            { icon: <Bug />, title: "The Parvovirus Outbreak Shutdown (2023)", description: "A shelter was forced to close and euthanize animals after a parvovirus outbreak. Our 'Intake & Quarantine' and 'Daily Sanitation' SOPs are designed specifically to prevent the spread of infectious diseases." },
            { icon: <Stethoscope />, title: "The Neglect Allegation That Drains Donations", description: "Allegations of animal neglect, even if unfounded, can destroy public trust. Our 'Daily Health Check' and 'Medical Record' logs provide a verifiable, timestamped audit trail of the care every single animal receives." },
            { icon: <Users />, title: "The Volunteer Injury & Liability", description: "A volunteer is bitten by a dog with a known history of fear-aggression. Our 'Animal Handling & Safety' SOP for volunteers includes training on reading animal behavior and using correct PPE, protecting your team and your NGO." },
            { icon: <Home />, title: "The 'Failed Adoption' Heartbreak", description: "An animal is returned days after adoption because the home was unsuitable. Our 'Adoption & Home Check' checklist provides a structured, fair process to ensure a better match, reducing returns and creating successful forever homes." }
        ]
    }
};

type PainPoints = typeof painPointsContent;
export type PainPointCategory = keyof PainPoints;
