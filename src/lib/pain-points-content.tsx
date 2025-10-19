
import React from 'react';
import { HandCoins, Shield, TrendingUp, Users, Bus, Anchor, Trophy, Briefcase, FileCheck, Recycle, Drama, FerrisWheel, Mask, GalleryVertical, Guitar, VenetianMask, Gamepad, Rabbit, Video, Computer, Landmark, Sprout, Wind, Syringe, HeartPulse, BrainCircuit, Lock, KeyRound, Banknote, Bug, UserCog, Siren, Milestone, UserCheck, Stethoscope, Microscope, TestTube, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, CakeSlice, Truck, Pill, Store, Gem, Factory, HardHat, GraduationCap, Building2, Warehouse, Utensils, Building, MonitorPlay, Film, PawPrint, Home, Dumbbell, Tv, Shirt } from 'lucide-react';

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
        title: "The Business Case for 5-Star Operational Excellence",
        points: [
            { icon: <Users />, title: "Prevent Bad Reviews from Single Incidents", description: "A faulty AC or expired minibar item can ruin a stay and lead to a negative review. Daily room checks catch these failures before the guest does." },
            { icon: <HandCoins />, title: "Stop Revenue Leakage", description: "Prevent wastage in F&B, ensure accurate minibar billing, and use preventive maintenance to avoid costly emergency repairs, directly impacting your bottom line." },
            { icon: <Shield />, title: "Avoid Health & Safety Crises", description: "Rigorous HACCP (food) and water quality (pool) logs prevent foodborne or waterborne illnesses, protecting guests and avoiding catastrophic legal and reputational damage." },
            { icon: <TrendingUp />, title: "Reduce Staff Chaos & Turnover", description: "Empower your team with clear, step-by-step SOPs. This reduces training time, minimizes errors, and creates a less stressful work environment, leading to higher staff retention." }
        ]
    },
    restaurants: {
        title: "The Business Case for a More Profitable & Compliant Restaurant",
        points: [
            { icon: <Shield />, title: "Prevent Food Safety Violations", description: "A single food poisoning incident can destroy your reputation. Our HACCP-based temperature and handling logs create a verifiable system to prevent this." },
            { icon: <HandCoins />, title: "Stop Kitchen Profit Drain", description: "Reduce costly food spoilage with rigorous temperature logging and FIFO protocols, and control portion sizes to protect your margins on every plate." },
            { icon: <TrendingUp />, title: "Eliminate Service Inconsistency", description: "Ensure every guest gets the same high-quality experience with standardized checklists for FOH opening, closing, and service standards, leading to better reviews and repeat business." },
            { icon: <Users />, title: "Reduce Back-of-House Chaos", description: "Empower your kitchen staff with clear, repeatable processes for everything from receiving goods to closing down, reducing errors and staff stress." }
        ]
    },
    fashion_and_apparel_retail: {
        title: "The Business Case for a More Profitable Fashion Store",
        points: [
            { icon: <TrendingUp />, title: "Reduce Seasonal Dead Stock", description: "Implement checklists for managing seasonal inventory, running timely markdowns, and analyzing sales data to prevent costly end-of-season write-offs." },
            { icon: <Shirt />, title: "Master Omni-Channel Operations", description: "Seamlessly integrate your online and offline stores with protocols for 'Click and Collect', processing online returns in-store, and maintaining accurate cross-channel inventory." },
            { icon: <Shield />, title: "Prevent Shrinkage in Fitting Rooms & on the Floor", description: "Use our checklists for fitting room monitoring, security tag audits, and daily cycle counts to significantly reduce losses from theft." },
            { icon: <Users />, title: "Deliver a Consistent, High-Touch Customer Experience", description: "Standardize your sales process from greeting and style consultation to fitting room service and final sale, turning browsers into loyal customers." }
        ]
    },
    electronics_showroom_pack: {
        title: "The Business Case for a High-Performing Electronics Showroom",
        points: [
            { icon: <Zap />, title: "Prevent Electrical Fires & Shocks", description: "A faulty demo unit's wiring can cause a fire. Our daily electrical checks and periodic PAT testing SOPs prevent shocks and fires, ensuring customer and staff safety." },
            { icon: <HandCoins />, title: "Stop Inventory & Warranty Fraud", description: "An untagged asset can be easily stolen or swapped for warranty fraud. Our asset tagging and daily high-value inventory checks prevent theft and protect against warranty abuse." },
            { icon: <Bug />, title: "Eliminate Costly Data Entry & Shipping Errors", description: "One wrong digit in a product's weight or dimensions can lead to thousands in shipping chargebacks. Our 'maker-checker' data entry SOP prevents these expensive errors before they happen." },
            { icon: <Shield />, title: "Avoid E-Waste & Compliance Fines", description: "Improper disposal of electronics is a regulatory violation. Our e-waste handling SOP ensures you follow all rules, avoid fines, and protect the environment." }
        ]
    },
    supermarket_grocery_retail_pack: {
        title: "The Business Case for Supermarket & Hypermarket Efficiency",
        points: [
            { icon: <Recycle />, title: "Reduce Fresh Food Spoilage & Wastage", description: "Our HACCP-aligned checklists for fresh departments ensure proper temperature control, handling, and stock rotation (FIFO), drastically reducing spoilage and protecting thin margins." },
            { icon: <TrendingUp />, title: "Improve On-Shelf Availability & Reduce Stockouts", description: "Streamline your inventory management with checklists for high-volume receiving, planogram compliance, and daily stock audits, ensuring popular items are always available to customers." },
            { icon: <HandCoins />, title: "Increase Checkout Speed & Reduce Shrinkage", description: "Optimize front-end efficiency with checklists for cash management, queue monitoring, and loss prevention at the point of sale, improving customer experience and protecting profits." },
            { icon: <Shield />, title: "Ensure a Safe & Clean Shopping Environment", description: "A simple slip-and-fall incident can lead to a major lawsuit. Implement daily store readiness and hourly spill-check protocols to ensure your store is always safe, hygienic, and welcoming." }
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
        title: "The Business Case for a Scalable & Compliant OTT Platform",
        points: [
            { icon: <TrendingUp />, title: "Prevent Show-Stopping Platform Outages", description: "When a cricket streaming app crashed, it lost millions in trust. Our checklists for load testing, disaster recovery, and infrastructure readiness prevent these public failures." },
            { icon: <FileLock />, title: "Navigate Global Content & Data Regulations", description: "Ensure compliance with regional content laws (like IT Rules 2021), accessibility standards (WCAG 2.1), and data privacy regulations (GDPR/DPDP) to avoid fines and geo-restrictions." },
            { icon: <Shield />, title: "Secure Your Content and User Data", description: "Implement a robust security framework with checklists for DRM implementation, vendor security assessments, and cybersecurity incident response to protect your content and user data from breaches." },
            { icon: <Video />, title: "Streamline Your Content Supply Chain", description: "Standardize your content pipeline from acquisition and metadata tagging to QC and release scheduling, improving efficiency and reducing time-to-market for new content." }
        ]
    },
    theme_park_ops_pack: {
        title: "The Business Case for Theme Park Safety & Guest Experience",
        points: [
            { icon: <Shield />, title: "Prevent Catastrophic Ride Failures", description: "A single missed check on a safety restraint or emergency stop can be fatal. Implement rigorous daily ride safety checks, maintenance logs, and operator readiness protocols to prevent accidents." },
            { icon: <Users />, title: "Master Crowd Control & Emergency Response", description: "A stampede is a theme park's worst nightmare. Manage large crowds effectively and execute orderly evacuations with checklists for crowd flow, emergency exits, and staff response drills." },
            { icon: <HeartPulse />, title: "Deliver a Flawless Guest Experience", description: "Inconsistent cleanliness, poor F&B hygiene, or a grumpy character actor can ruin a family's expensive day out. Standardize every touchpoint to ensure a magical and memorable experience." },
            { icon: <FileCheck />, title: "Ensure Regulatory & Safety Compliance", description: "Maintain a constant state of readiness for safety audits with documented checklists for ride maintenance (ASTM F24), water park hygiene, and emergency preparedness." }
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
        title: "The Business Case for a Safer, More Profitable Fitness Center",
        points: [
            { icon: <Shield />, title: "Prevent Member Injuries & Reduce Liability", description: "A snapped cable or an unmaintained treadmill can lead to serious injury and lawsuits. Our checklists for daily equipment safety checks and preventive maintenance protect your members and your business." },
            { icon: <Users />, title: "Deliver a Consistent, Premium Member Experience", description: "Inconsistent cleaning, poor staff accountability, and broken equipment lead to member churn. Standardize facility hygiene, staff certifications, and member feedback to ensure a 5-star experience." },
            { icon: <TrendingUp />, title: "Ensure Fire & Emergency Readiness", description: "Blocked exits and expired extinguishers are common failures. Our fire safety checklists ensure you are always prepared for an emergency, protecting lives and your facility." },
            { icon: <FileCheck />, title: "Improve Staff Performance & Accountability", description: "Lack of clear processes leads to inconsistent service. Empower your team with clear checklists for opening, closing, and cleaning, and use our audit checklists to ensure standards are met." }
        ]
    },
    facility_management_blueprint: {
        title: "The Business Case for a More Efficient & Secure Workplace",
        points: [
            { icon: <TrendingUp />, title: "Reduce Operational Costs & Improve Efficiency", description: "Our facility management checklists optimize everything from energy consumption and vendor contracts to preventive maintenance, cutting operational costs and improving your bottom line." },
            { icon: <Shield />, title: "Mitigate Safety & Compliance Risks", description: "Ensure a safe and compliant workplace with protocols for fire safety, electrical systems (LOTO), EHS, and contractor management, reducing liability and protecting your employees." },
            { icon: <Users />, title: "Enhance Employee Experience & Productivity", description: "Create a seamless and productive work environment with checklists for office operations, front desk management, and efficient handling of maintenance requests." },
            { icon: <FileCheck />, title: "Achieve Strategic Goals with Data-Driven Management", description: "Implement frameworks for Quarterly Business Reviews (QBRs) and Annual Strategic Planning to align facility operations with company objectives and demonstrate value to leadership." }
        ]
    },
    corporate_legal_compliance_starter_kit: {
        title: "The Business Case for a Legally Sound Business Foundation",
        points: [
            { icon: <FileLock />, title: "Reduce Legal Risk in Hiring & Firing", description: "Implement legally sound checklists for new employee onboarding and disciplinary actions to ensure fair processes and protect your company from wrongful termination claims." },
            { icon: <Briefcase />, title: "Empower Managers to Make Smarter Decisions", description: "Use the 'Vendor Contract Review for Non-Lawyers' checklist to train your managers to spot key risks in contracts before they escalate to the legal team, saving time and money." },
            { icon: <Shield />, title: "Prevent Data Privacy Fines", description: "Ensure your public-facing website is compliant with basic data privacy principles with a health check for your Privacy Policy, Terms of Service, and cookie consent." },
            { icon: <TrendingUp />, title: "Build a Foundation for Scalable Growth", description: "By embedding basic legal and compliance checks into your core operations (like asset management and strategic planning), you build a robust company that is more attractive to investors and partners." }
        ]
    },
    enterprise_risk_cybersecurity_pack: {
        title: "The Business Case for AI & Cybersecurity Governance",
        points: [
            { icon: <BrainCircuit />, title: "Build Trust & Mitigate AI Risk", description: "Implement an AI Ethics framework to govern your models, assess for bias, and ensure transparency, building trust with users and regulators before you face scrutiny." },
            { icon: <FileLock />, title: "Avoid Crippling Data Privacy Fines", description: "Use our GDPR/DPDP audit checklists to maintain a Record of Processing Activities (ROPA), manage consent, and handle Data Subject Access Requests (DSARs) efficiently." },
            { icon: <Shield />, title: "Strengthen Your Defenses Against Cyber Attacks", description: "Move from reactive to proactive security. Use checklists for incident response drills, vendor security assessments, and cloud security posture management to find and fix weaknesses before they are exploited." },
            { icon: 'logo' in Users ? <Users /> : <Users />, title: "Secure the Human Element", description: "Your biggest vulnerability is often your people. Implement secure employee offboarding and access control reviews to ensure departing employees don't become your next data breach." }
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
        title: "From Minor Lapses to Major Disasters: Real Incidents That SOPs Prevent",
        points: [
            { icon: <Siren />, title: "The 'Forgotten Child' Nightmare", description: "A child left on a bus is a catastrophic failure that can destroy your school's reputation forever. Our mandatory, verifiable end-of-route check prevents this." },
            { icon: <Shield />, title: "The Unseen Intruder on Campus", description: "An unauthorized person on school grounds is a terrifying security breach. Our strict visitor management and perimeter control checklists are your first line of defense." },
            { icon: <HeartPulse />, title: "The Cafeteria Food Poisoning Outbreak", description: "One food safety lapse can sicken dozens of students and trigger a public health crisis. Our HACCP-based kitchen hygiene SOPs prevent this disaster." },
            { icon: <TrendingUp />, title: "Failing a Surprise Inspection", description: "Failing a fire safety or academic board inspection can result in fines, public embarrassment, or loss of affiliation. Our checklists ensure you are perpetually compliant." }
        ]
    },
    university_college_ops: {
        title: "The Business Case for a World-Class Campus Operation",
        points: [
            { icon: <TestTube />, title: "Prevent Viral Lab Accidents", description: "A lab fire caused by an expired extinguisher can ruin your reputation. Our EHS checklists ensure equipment is maintained, chemicals are managed, and staff are trained, meeting OSHA and OECD GLP standards." },
            { icon: <FileLock />, title: "Stop Exam Paper Leaks", description: "Protect academic integrity with a strict chain-of-custody protocol for confidential materials, from secure printing and storage to supervised distribution and destruction." },
            { icon: <Home />, title: "Mitigate Hostel Safety Breaches", description: "Weekly electrical safety audits, functional smoke detectors, and clear enforcement of appliance policies prevent fires and ensure a safe living environment for students." },
            { icon: <Users />, title: "Build a Culture of Well-being & Anti-Ragging", description: "Go beyond compliance with proactive checklists for anonymous reporting, awareness workshops, and a responsive committee, ensuring student mental and emotional safety is a priority." }
        ]
    },
    food_manufacturing_ops: {
        title: "The Business Case for a Safer, More Productive Plant",
        points: [
            { icon: <Shield />, title: "Prevent Contamination & Ensure Food Safety", description: "Implement HACCP-based checklists for raw material receiving, sanitation, and allergen control to prevent costly recalls and protect consumer health." },
            { icon: <TrendingUp />, title: "Maximize Uptime & Production Throughput", description: "Move from reactive repairs to proactive maintenance with protocols for equipment calibration, lubrication, and daily checks, ensuring your lines are always running." },
            { icon: <FileCheck />, title: "Achieve & Maintain GFSI/ISO 22000 Certification", description: "Our checklists are aligned with global food safety standards, providing the documentation and process control needed to pass audits and access new markets." },
            { icon: <Users />, title: "Improve Quality & Reduce Product Waste", description: "Use robust protocols for finished product testing and quality control to reduce defects, minimize rework, and protect your profit margins." }
        ]
    },
    manufacturing_operations_ehs_pack: {
        title: "The Business Case for a Safer, More Productive Plant",
        points: [
            { icon: <Shield />, title: "Prevent Life-Altering Accidents", description: "A single LOTO failure can lead to a fatality. Our life-saving protocols for Lock-Out Tag-Out, Permit-to-Work, and Confined Space Entry are non-negotiable systems to protect your workforce." },
            { icon: <TrendingUp />, title: "Eliminate Unplanned Downtime & Production Losses", description: "Move from reactive repairs to proactive maintenance. Our checklists for shift handovers, critical spares verification, and tool calibration help avert failures before they happen, maximizing uptime." },
            { icon: <FileCheck />, title: "Ensure Vendor & Contractor Safety Compliance", description: "Don't let a contractor's safety lapse become your liability. Our Contractor EHS Management checklist ensures all third-party vendors on your site are pre-qualified and adhere to your safety standards." },
            { icon: <Users />, title: "Improve Quality & Reduce Rework", description: "Prevent defects at the source. Use robust protocols for raw material inspection and 'maker-checker' systems for critical data entry to reduce waste, improve first-pass yield, and protect your margins." }
        ]
    },
    logistics_warehouse_pack: {
        title: "The Business Case for a More Accurate & Efficient Warehouse",
        points: [
            { icon: <TrendingUp />, title: "Achieve 99%+ Inventory Accuracy", description: "Stop losing money to lost stock. Implement systematic checklists for Goods Receiving (GRN), cycle counting, and returns management to get a true, real-time picture of your inventory." },
            { icon: <Shield />, title: "Create a Safer Warehouse Environment", description: "Prevent costly accidents with daily safety checklists for forklifts, loading docks, and general housekeeping, reducing injuries and potential compliance fines." },
            { icon: <HandCoins />, title: "Eliminate Costly Shipping & Data Entry Errors", description: "A single typo in product dimensions can lead to thousands in shipping chargebacks. Our 'maker-checker' protocol for new product data entry prevents these expensive mistakes." },
            { icon: <FileCheck />, title: "Improve Order Fulfillment Speed & Accuracy", description: "A well-organized warehouse is a fast warehouse. Our 5S and inventory management checklists ensure that your pick-and-pack operations are efficient, accurate, and scalable." }
        ]
    },
    animal_shelter_pack: {
        title: "The Case for Operational Excellence in Animal Welfare",
        points: [
            { icon: <HeartPulse />, title: "Ensure Animal Health & Safety", description: "A systematic approach to daily health checks, medication logs, and hygiene protocols prevents the spread of disease and ensures every animal receives the care it deserves." },
            { icon: <Users />, title: "Empower Volunteers & Staff", description: "Clear, simple checklists for cleaning, feeding, and enrichment empower your team and volunteers to provide consistent, high-quality care, even with limited resources." },
            { icon: <Shield />, title: "Build Public Trust & Donor Confidence", description: "A well-run, transparent operation demonstrates that you are responsible stewards of donor funds, encouraging more adoptions, volunteers, and financial support." },
            { icon: <Home />, title: "Improve Adoption & Foster Outcomes", description: "A structured process for vetting potential homes ensures that animals are placed in safe, loving environments, reducing the chance of returns and creating successful, lifelong matches." }
        ]
    }
};

type PainPoints = typeof painPointsContent;
export type PainPointCategory = keyof PainPoints;
