
import React from 'react';
import { HandCoins, Shield, TrendingUp, Users, Bus, Anchor, Trophy, Briefcase, FileCheck, Recycle, Drama, FerrisWheel, Theater, GalleryVertical, Guitar, VenetianMask, Gamepad, Rabbit, Video, Computer, Landmark, Sprout, Wind, Syringe, HeartPulse, BrainCircuit, Lock, KeyRound, Banknote, Bug, UserCog, Siren, Milestone, UserCheck, Stethoscope, Microscope, TestTube, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, CakeSlice, Truck, Pill, Store, Gem, Factory, HardHat, GraduationCap, Building2, Warehouse, Utensils, Building, MonitorPlay, Film, PawPrint, Home, Dumbbell, Tv, Shirt, Zap, Package, Fish, Cloud } from 'lucide-react';

export const painPointsContent = {
    jewelry_and_luxury_retail: {
        title: "High-Stakes Retail: How a Single Missed Step Leads to Multi-Crore Losses",
        points: [
            { icon: <Siren />, title: "The ₹3.8 Crore Mumbai Showroom Theft", description: "A premium store was burgled overnight after an alarm was switched off for maintenance with no backup protocol. Our 'End-of-Day Security' checklist prevents this by mandating alarm, CCTV, and patrol verifications before closing." },
            { icon: <Users />, title: "The Fake Return Fraud", description: "A staff member colluded with a customer to process ₹12 lakh in fake refunds. Our 'Sales & Return Authorization' SOP, requiring dual approval for large refunds and weekly POS audits, eliminates this internal threat." },
            { icon: <Lock />, title: "The Vault Access Breach", description: "An employee used a colleague’s access card to enter a gold vault after hours. Our 'Vault Access Control' checklist, mandating biometric entry and daily log reviews, would have made this impossible." },
            { icon: <Shield />, title: "The Payment Gateway Cyber Scam", description: "A luxury watch brand lost sales after fraudsters placed fake QR codes on payment counters. Our 'Digital Transaction Security' checklist includes daily QR code validation to prevent this modern form of theft." }
        ]
    },
    hotels_and_resorts: {
        title: "From Guest Nightmare to 5-Star Experience: Real Incidents SOPs Prevent",
        points: [
            { icon: <Siren />, title: "The Hotel Arpit Palace Fire (Delhi, 2019)", description: "17 lives were lost in a hotel fire due to illegally blocked exits and non-functional alarms. Our daily 'Fire Safety & Exit Inspection' checklist provides a verifiable audit trail to ensure this never happens." },
            { icon: <Bug />, title: "The Hyatt Regency Pune Contamination (2017)", description: "Over 80 guests, including airline crew, fell ill from food poisoning, leading to a major health crisis. Our 'Kitchen HACCP' checklists for food handling and storage are designed to prevent such mass contamination events." },
            { icon: <Shield />, title: "The Marriott (Starwood) Data Breach (2018)", description: "The personal details of 500 million guests were exposed in one of history's largest data breaches. Our 'Data Privacy SOPs' enforce access controls and encryption, forming a first line of defense against such cyber-attacks." },
            { icon: <HandCoins />, title: "The 'Phantom' Minibar Charges", description: "Inaccurate minibar billing is a top guest complaint and a source of revenue loss. Our 'Housekeeping & Minibar' SOP ensures stock is verified against consumption upon checkout, eliminating billing errors and financial leakage." }
        ]
    },
    restaurants: {
        title: "From Food Poisoning to Profit: Real Incidents Our Checklists Prevent",
        points: [
            { icon: <Bug />, title: "The E. coli Outbreak (Chipotle, USA, 2015)", description: "A nationwide E. coli outbreak cost Chipotle billions in stock value and brand damage. Our 'HACCP Kitchen Checklist' prevents cross-contamination with mandatory, logged checks for food handling and surface sanitation." },
            { icon: <Siren />, title: "The Kamala Mills Fire (Mumbai, 2017)", description: "A fire originating in a rooftop restaurant killed 14 people due to illegal structures and blocked exits. Our 'Fire Safety' and 'Infrastructure' audits ensure compliance with fire codes, preventing such tragedies." },
            { icon: <HandCoins />, title: "The Profit-Draining Spoilage Problem", description: "A major restaurant chain reported losing over ₹25 Lakhs per year to spoilage from faulty walk-in freezers. Our 'Cold Storage Temperature Logs' provide twice-daily, signed verification that your expensive inventory is safe, preventing spoilage." },
            { icon: <Users />, title: "The Inconsistent Service that Kills Reviews", description: "A single viral video of poor service can destroy a restaurant's reputation overnight. Our 'FOH Service Standards' checklist ensures every guest receives the same high level of service, from seating to billing, every single time." }
        ]
    },
    fashion_and_apparel_retail: {
        title: "From Fire Hazards to Profit Protection: Real Retail Disasters",
        points: [
            { icon: <Siren />, title: "The Karol Bagh Garment Fire (Delhi, 2023)", description: "A massive fire in a garment market was fueled by illegally stored, flammable materials. Our 'Store Safety & Fire Audit' mandates checks for proper storage and clear fire exits, preventing a small spark from becoming a disaster." },
            { icon: <Shield />, title: "The Rana Plaza Factory Collapse (Bangladesh, 2013)", description: "Over 1,100 workers died when a structurally unsound garment factory collapsed, creating a global brand crisis for retailers sourcing from it. Our 'Vendor Compliance Audit' includes checks for structural safety and ethical labor practices in your supply chain, protecting your brand from association with such tragedies." },
            { icon: <TrendingUp />, title: "The Dead Stock Dilemma That Cripples Cash Flow", description: "Major fashion brands have had to write off hundreds of crores in unsold seasonal inventory. Our 'Seasonal Inventory Management' SOP provides a framework for timely markdowns and stock consolidation to clear inventory before it becomes worthless." },
            { icon: <Lock />, title: "The Fitting Room 'Shrinkage' That Isn't So Small", description: "Retailers estimate that organized theft from fitting rooms accounts for millions in annual losses. Our 'Fitting Room Operations' protocol, requiring item counts and attendant monitoring, is a simple, effective deterrent against this major source of loss." }
        ]
    },
    electronics_showroom_pack: {
        title: "From Short Circuits to Secure Sales: Real Electronics Store Risks",
        points: [
            { icon: <Siren />, title: "The Vijay Sales Fire (Mumbai, 2020)", description: "A devastating fire was traced back to a short circuit from overloaded wiring on demo units. Our 'Electrical Safety Audit' mandates checks for wiring loads and prevents the use of unsafe multi-plugs, stopping fires before they start." },
            { icon: <Zap />, title: "The Lithium Battery Explosion (Samsung Store, UK)", description: "A phone's battery exploded while charging, causing an emergency evacuation. Our 'Demo Unit Safety' SOP includes daily checks for battery swelling and heat on all charging devices, preventing fires and injuries." },
            { icon: <Bug />, title: "The Warranty Swap Fraud", description: "Fraudsters buy a new device, swap its internal components with a damaged one, and return it for a refund. Our 'Returns & Warranty' SOP, requiring serial number verification on the device and box, makes this scam impossible." },
            { icon: <HandCoins />, title: "The Shipping Dimension Error That Costs Lakhs", description: "A major e-commerce seller was hit with lakhs in shipping chargebacks after an employee entered wrong product dimensions for a new TV model. Our 'Maker-Checker' data entry SOP for new products prevents these expensive, avoidable errors." }
        ]
    },
    supermarket_grocery_retail_pack: {
        title: "From Expired Goods to Efficient Operations: Real Supermarket Risks",
        points: [
            { icon: <Siren />, title: "The £7.6M Tesco Fine for Expired Food (UK, 2017)", description: "Tesco was hit with a multi-million pound fine for selling expired food across multiple stores. Our 'Expiry Date & FIFO Rotation' checklist provides a daily, verifiable system to ensure expired goods never reach the shelf." },
            { icon: <Bug />, title: "The Big Bazaar Fine for Expired Goods (India, 2022)", description: "A major hypermarket was fined after a customer found and reported expired products. Our SOPs for daily expiry sweeps and proper stock rotation prevent this regulatory and reputational disaster." },
            { icon: <Stethoscope />, title: "The Slip-and-Fall Lawsuit That Costs Millions", description: "A simple spill on the floor can lead to a customer injury and a multi-crore lawsuit, a common occurrence in retail. Our 'Hourly Floor Inspection & Spill Response' SOP ensures hazards are identified and cleaned up immediately, with a log to prove diligence." },
            { icon: <Recycle />, title: "The Cold Chain Failure That Spoils a Truckload", description: "A leading grocery chain had to discard an entire truckload of dairy products after a refrigerator failed overnight. Our 'Cold Storage Temperature Logs' provide twice-daily, signed verification that your equipment is working, protecting your inventory and customers." }
        ]
    },
    film_production_pack: {
        title: "From Costly Errors to Creative Control: Real Production Disasters & How to Prevent Them",
        points: [
            { icon: <Siren />, title: "The 'Rust' Movie Set Tragedy (USA, 2021)", description: "A fatal on-set shooting occurred due to lapses in firearms safety protocols. Our 'On-Set Safety (EHS)' checklists, including prop weapon handling, mandate multiple verifications to prevent such catastrophic failures." },
            { icon: <HeartPulse />, title: "The Uninsured Stunt Injury That Bankrupts a Film", description: "A stunt double's spinal injury led to a massive lawsuit that bankrupted a small production because it lacked specific accident insurance. Our 'Stunt & Risk Scene Safety' SOP mandates insurance validation and on-site medical readiness." },
            { icon: <FileLock />, title: "The HBO Script & Episode Leaks (2017)", description: "Unaired episodes of major shows like 'Game of Thrones' were stolen by hackers, causing massive spoilers and PR damage. Our 'Data Security & NDA Compliance' SOP enforces secure sharing protocols and role-based access to protect your IP." },
            { icon: <Bug />, title: "The ₹50 Lakh Vendor Overbilling on a Major Bollywood Film", description: "A production was overbilled due to duplicate invoices from a transportation vendor. Our 'Vendor Billing & Audit' SOP implements a three-way match (Invoice vs. PO vs. GRN) to stop financial leakage." }
        ]
    },
    ott_platform_pack: {
        title: "From Platform Outages to Privacy Breaches: Real OTT Disasters",
        points: [
            { icon: <Users />, title: "The Hotstar Cricket World Cup Crash (2019)", description: "The platform crashed during the final moments of a crucial India-New Zealand match, infuriating millions. Our 'Live Event Readiness' checklist prevents this with mandatory load testing and disaster recovery drills before major events." },
            { icon: <Shield />, title: "The ZEE5 Data Breach (India, 2021)", description: "User data, including emails and phone numbers, was exposed in a major breach, leading to regulatory scrutiny. Our 'Data Privacy & Access Control' SOPs, requiring data encryption and least-privilege access, are designed to prevent this." },
            { icon: <Lock />, title: "The Netflix Vendor Data Leak (2020)", description: "Subscriber data was exposed not by Netflix, but by a third-party vendor with weak security. Our 'Vendor Compliance Checklist' includes mandatory security assessments of all third-party partners who handle your data." },
            { icon: <FileLock />, title: "The Amazon Prime Copyright Takedown Nightmare", description: "A platform can face legal action and be forced to remove content for hosting material without proper rights. Our 'Content Licensing SOP' ensures a clear, auditable chain-of-title for all assets before they go live." }
        ]
    },
    theme_park_ops_pack: {
        title: "From Ride Malfunctions to Revenue Loss: Real Theme Park Tragedies",
        points: [
            { icon: <Siren />, title: "The Chennai Ride Collapse (2019)", description: "A ride collapsed mid-operation, leading to fatalities and immediate shutdown. Our 'Daily Ride Inspection' checklist, including checks of structural bolts, safety harnesses, and emergency stops, provides a mandatory, auditable safety verification." },
            { icon: <Shield />, title: "The Stampede at Imagicaa (2018)", description: "Poor crowd flow management at a popular attraction led to a near-stampede situation. Our 'Crowd Management SOP' provides clear protocols for queue management, barrier setup, and emergency dispersal." },
            { icon: <Bug />, title: "The Water Park Contamination", description: "A water park was forced to close after guests reported skin infections due to poor water quality. Our 'Water Quality & Hygiene' checklists enforce the same HACCP-based standards across your entire park." },
            { icon: <HeartPulse />, title: "The Delayed Medical Response Fatality", description: "A guest suffering a heart attack did not receive timely medical attention due to unclear communication. Our 'Emergency Medical Response' plan mandates staffed first-aid posts and clear communication protocols for rapid response." }
        ]
    },
    sports_clubs_stadium_operations_pack: {
        title: "Sports Clubs &amp; Stadium Operations Pack",
        points: [
            { icon: <Users />, title: "The Kerala Stadium Stampede", description: "Poor entry/exit flow and no emergency plan led to a fatal stampede. Our 'Crowd Control &amp; Entry Management SOP' with pre-event capacity verification and evacuation drills prevents this." },
            { icon: <Dumbbell />, title: "The Gym Equipment Injury", description: "A gym member tore a ligament due to faulty treadmill calibration in a leading Mumbai sports club. Our 'Equipment Safety &amp; Maintenance Checklist' with daily inspection logs prevents this." },
            { icon: <Stethoscope />, title: "The Athlete Collapse During Training", description: "A teenage athlete collapsed from heatstroke; no first aid or paramedic available. Our 'Medical &amp; Emergency Response SOP' mandates certified first-aiders and hydration monitoring." },
            { icon: <Ticket />, title: "The Fake Ticket Scandal (Bengaluru)", description: "Chaos erupted at a cricket match due to fake QR code tickets. Our 'Digital Ticketing &amp; Entry Validation SOP' uses real-time scanning and partner sync to eliminate this fraud." }
        ]
    },
    fitness_centers_gyms_pack: {
        title: "From Member Injuries to Membership Growth: Real Gym Risks &amp; Solutions",
        points: [
            { icon: <Siren />, title: "The Gym Equipment Fatality (Delhi, 2023)", description: "A 32-year-old gym-goer died after a cable snapped on a machine. Our 'Daily Equipment Inspection' checklist includes mandatory checks for cable wear and tear, preventing such catastrophic failures." },
            { icon: <Stethoscope />, title: "The Trainer Negligence Lawsuit (LA Fitness, US)", description: "A gym was sued after a trainer's negligence led to a member's injury. Our 'Trainer Certification &amp; Safety Induction' SOP ensures all trainers are qualified and follow safe training protocols." },
            { icon: <Bug />, title: "The Locker Room Fungal Outbreak", description: "A top sports club faced lawsuits after a fungal skin infection outbreak linked to unhygienic locker rooms. Our 'Daily Hygiene &amp; Sanitation' routines provide a verifiable record that all wet areas are cleaned and disinfected." },
            { icon: <Shield />, title: "The Unprepared Medical Emergency", description: "A member suffers a heart attack with no clear response plan. Our 'Emergency &amp; AED Readiness' checklist ensures your AED is functional and staff are trained in CPR, turning chaos into a life-saving response." }
        ]
    },
    facility_management_blueprint: {
        title: "From Costly Breakdowns to Efficient Operations: Real Facility Disasters",
        points: [
            { icon: <Siren />, title: "The Escalator Injury (Mumbai Mall)", description: "An escalator malfunctioned due to poor upkeep, causing serious injury. Our 'Preventive Maintenance' schedule for vertical transport ensures all safety checks and vendor servicing are logged and up-to-date." },
            { icon: <Lock />, title: "The Data Center Overheating Crisis (Bengaluru Tech Park)", description: "A critical data center was threatened when a primary HVAC unit failed. Our 'Critical Systems Redundancy' SOP ensures backup systems are tested weekly, preventing catastrophic downtime." },
            { icon: <Shield />, title: "The Elevator Fatality from Vendor Negligence (UK)", description: "A facility firm was fined millions after an elevator serviced by their vendor malfunctioned, causing a fatality. Our 'Vendor Performance Checklist' includes verification of a vendor's safety record and insurance, protecting you from their liability." },
            { icon: <Zap />, title: "The Generator Fuel Blunder at a Bengaluru Tech Park", description: "A major tech park lost millions in productivity when a backup generator failed during a power cut because its fuel levels were never checked. Our 'Preventive Maintenance' SOP includes a weekly generator load test and fuel level verification." }
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
            { icon: <Lock />, title: "The Colonial Pipeline Hack (USA, 2021)", description: "A single compromised password on an account without MFA shut down critical infrastructure. Our 'Access Control &amp; MFA Audit' SOP mandates quarterly reviews to eliminate stale accounts and enforce multi-factor authentication everywhere." },
            { icon: <BrainCircuit />, title: "The AI Model Bias Lawsuit", description: "An AI hiring tool was found to be biased, leading to a discrimination lawsuit. Our 'AI Governance &amp; Ethics' framework provides a checklist for assessing models for bias and ensuring fairness before deployment." },
            { icon: <Fish />, title: "The Employee Phishing Attack that Compromised a Unicorn", description: "The most common entry point for hackers is a successful phishing email. Our 'Employee Phishing Simulation' SOP provides a framework for training and testing your staff, turning your biggest weakness into a human firewall." }
        ]
    },
    healthcare_and_hospital_operations: {
        title: "Preventing 'Never Events': Real Incidents &amp; The Checklists That Stop Them",
        points: [
            { icon: <Shield />, title: "Prevent Wrong-Site Surgery", description: "A patient in Rhode Island underwent brain surgery on the wrong side due to a communication lapse. Our WHO-aligned Surgical Safety Checklist mandates a 'Time Out' to prevent this catastrophic 'never event'." },
            { icon: <TrendingUp />, title: "Stop Look-Alike Drug Errors", description: "A fatal overdose occurred when a nurse administered a sound-alike drug. Our LASA (Look-Alike, Sound-Alike) Drug Management checklist, with 'Tall Man' lettering and dual sign-offs, prevents this." },
            { icon: <Users />, title: "Eliminate Hospital-Acquired Infections", description: "An unsterile instrument led to a post-operative infection and a costly lawsuit. Our CSSD Sterilization Protocol, with biological indicators and cycle logs, ensures every instrument is safe." },
            { icon: <HandCoins />, title: "Prevent Patient Identification Mix-ups", description: "A blood transfusion was given to the wrong patient, resulting in a severe reaction. Our Patient Identification SOP requires two unique identifiers at every critical point of care, from lab samples to transfusions." }
        ]
    },
    pharmacy_ops_pack: {
        title: "From Dispensing Errors to Compliance Certainty: Real Pharmacy Risks",
        points: [
            { icon: <Shield />, title: "The Look-Alike Drug Tragedy", description: "A patient in the UK died after being dispensed the wrong medication due to a similar name. Our 'Dispensing Accuracy' SOP with 'Tall Man' lettering and dual-verification prevents these fatal errors." },
            { icon: <FileLock />, title: "The Narcotics Diversion Scheme", description: "A pharmacist in the US was jailed for diverting controlled substances. Our 'Controlled Substance Log' with daily dual-signatory reconciliation makes such internal theft nearly impossible." },
            { icon: <TrendingUp />, title: "The Vaccine Cold Chain Failure", description: "Thousands of vaccines were rendered useless after a pharmacy fridge failed overnight. Our 'Cold Chain Management' checklist, with twice-daily temperature logs and alarm checks, protects your most valuable inventory." },
            { icon: <Users />, title: "The Incomplete Counseling Lawsuit", description: "A patient sued a pharmacy for failing to counsel on severe side effects. Our 'Patient Counseling' checklist ensures every patient receives standardized, documented advice, improving adherence and reducing liability." }
        ]
    },
    school_operations_pack: {
        title: "From School Bus Tragedies to Fire Drills: Real-World School Risks",
        points: [
            { icon: <Siren />, title: "The Surat Coaching Centre Fire (2019)", description: "A fire in a coaching center killed 22 students due to illegal structures and blocked exits. Our 'Fire Safety Drills' and 'Infrastructure Audits' ensure your premises are safe and evacuation-ready." },
            { icon: <Bus />, title: "The 'Forgotten Child' on the School Bus", description: "A child left unattended on a bus is a school's worst nightmare. Our 'Transport Safety' checklist mandates a verifiable, seat-by-seat check by the attendant at the end of every route, preventing this tragedy." },
            { icon: <Bug />, title: "The Mid-Day Meal Food Poisoning", description: "Contaminated food can sicken hundreds of students. Our 'Canteen Hygiene &amp; Food Safety' checklist, based on HACCP principles, ensures that food is stored, prepared, and served safely every day." },
            { icon: <Users />, title: "The Unverified Visitor Security Breach", description: "An unauthorized person on campus is a major security threat. Our 'Visitor Management &amp; Campus Security' SOP provides a strict protocol for verifying and tracking every non-staff member who enters your school." }
        ]
    },
    university_college_ops: {
        title: "From Lab Explosions to Hostel Safety: Managing Campus Risks",
        points: [
            { icon: <Siren />, title: "The College Lab Fire (Coimbatore, 2023)", description: "A fire broke out in a college lab due to improper chemical storage. Our 'Lab &amp; Chemical Safety' SOPs, aligned with OSHA standards, mandate correct storage, labeling, and disposal procedures to prevent fires and exposure." },
            { icon: <Home />, title: "The Hostel Fire Hazard", description: "Illegal use of cooking appliances in hostels is a common cause of fires. Our 'Hostel Inspection SOP' includes regular checks for prohibited items and faulty wiring, ensuring student residential safety." },
            { icon: <FileLock />, title: "The Exam Paper Leak", description: "A leaked exam paper can destroy an institution's academic reputation. Our 'Confidential Document Handling' SOP provides a strict chain-of-custody protocol for exam papers, from printing to distribution." },
            { icon: <HeartPulse />, title: "The Failure to Address Harassment", description: "Not having a clear, accessible anti-harassment policy can lead to regulatory action and a toxic campus culture. Our 'Anti-Harassment &amp; Grievance' checklists help you comply with UGC guidelines and ensure a fair process." }
        ]
    },
    food_manufacturing_ops: {
        title: "From Product Recalls to Production Excellence: Real Food Plant Risks",
        points: [
            { icon: <Bug />, title: "The Cadbury Worm Controversy (India, 2003)", description: "Cadbury faced a major crisis when insects were found in its chocolates, traced to storage issues. Our 'HACCP Production Checklists' help prevent contamination at every Critical Control Point, from raw materials to packaging." },
            { icon: <Siren />, title: "The Factory Worker Injury That Stops Production", description: "A worker losing a hand in a machine without a safety guard is a preventable tragedy that halts operations for days. Our 'Machine Safety &amp; EHS' SOPs mandate daily checks for safety guards and emergency stops, complying with the Factories Act." },
            { icon: <Recycle />, title: "The Cross-Contamination Catastrophe", description: "Undeclared allergens from cross-contact can be fatal for consumers and lead to massive product recalls. Our 'Allergen Management SOP' provides a rigorous system for production scheduling, cleaning verification, and raw material segregation to prevent this." },
            { icon: <FileLock />, title: "The Failed Export Consignment", description: "A shipment is rejected by a foreign country for not meeting their food safety standards, costing lakhs. Our checklists, aligned with BRCGS and ISO 22000, ensure you have the documentation and processes for global market access." }
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
            { icon: <Users />, title: "The Forklift Collision Fatality", description: "A pedestrian worker is hit and killed by a reversing forklift, a common warehouse accident. Our 'Forklift &amp; MHE Operations' checklist includes mandatory pre-operation checks for horns, lights, and designated pedestrian walkways to prevent such accidents." },
            { icon: <Building2 />, title: "The Amazon Warehouse Collapse (USA, 2021)", description: "A warehouse collapsed during a tornado, leading to fatalities and questions about structural safety. While weather can't be controlled, our 'Infrastructure &amp; Racking Inspection' SOPs ensure your facility meets its structural load and safety ratings." },
            { icon: <TrendingUp />, title: "The Inventory 'Black Hole' That Sinks Profits", description: "Stock that exists in the system but can't be found on the shelf is a major profit drain. Our 'Cycle Counting' and 'Bin Accuracy' SOPs create a disciplined process to achieve over 99% inventory accuracy." }
        ]
    },
    animal_shelter_pack: {
        title: "From Disease Outbreak to Donor Trust: The Case for Shelter SOPs",
        points: [
            { icon: <Bug />, title: "The Parvovirus Outbreak Shutdown (2023)", description: "A shelter was forced to close and euthanize animals after a parvovirus outbreak. Our 'Intake &amp; Quarantine' and 'Daily Sanitation' SOPs are designed specifically to prevent the spread of infectious diseases." },
            { icon: <Stethoscope />, title: "The Neglect Allegation That Drains Donations", description: "Allegations of animal neglect, even if unfounded, can destroy public trust. Our 'Daily Health Check' and 'Medical Record' logs provide a verifiable, timestamped audit trail of the care every single animal receives." },
            { icon: <Users />, title: "The Volunteer Injury &amp; Liability", description: "A volunteer is bitten by a dog with a known history of fear-aggression. Our 'Animal Handling &amp; Safety' SOP for volunteers includes training on reading animal behavior and using correct PPE, protecting your team and your NGO." },
            { icon: <Home />, title: "The 'Failed Adoption' Heartbreak", description: "An animal is returned days after adoption because the home was unsuitable. Our 'Adoption &amp; Home Check' checklist provides a structured, fair process to ensure a better match, reducing returns and creating successful forever homes." }
        ]
    }
};

type PainPoints = typeof painPointsContent;
export type PainPointCategory = keyof PainPoints;

    
    
