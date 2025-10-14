
import React from 'react';
import { HandCoins, Shield, TrendingUp, Users, Bus, Anchor, Trophy, Briefcase, FileCheck, Recycle, Drama, FerrisWheel, Mask, GalleryVertical, Guitar, VenetianMask, Gamepad, Rabbit, Video, Computer, Landmark, Sprout, Wind, Syringe, HeartPulse, BrainCircuit, Lock, KeyRound, Banknote, Bug, UserCog, Siren, Milestone, UserCheck, Stethoscope, Microscope, TestTube, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, CakeSlice, Truck, Pill, Store, Gem, Factory, HardHat, GraduationCap, Building2, Warehouse, Utensils, Building, MonitorPlay, Film, PawPrint, Home, Dumbbell, Tv } from 'lucide-react';

export const painPointsContent = {
    hotels_and_resorts: {
        title: "The Business Case for 5-Star Operational Excellence",
        points: [
            { icon: <Users />, title: "Inconsistent Guest Experience", description: "Standardize every touchpoint, from check-in to room service, ensuring every guest receives the same 5-star treatment, every time. This builds loyalty and drives positive reviews." },
            { icon: <HandCoins />, title: "Revenue Leakage & Cost Overruns", description: "Plug financial leaks by tracking minibar consumption accurately, preventing wastage in F&B, and implementing preventative maintenance to avoid costly emergency repairs." },
            { icon: <Shield />, title: "Compliance Nightmares & Safety Risks", description: "Navigate complex safety regulations with ease. Our checklists ensure you're always compliant with fire safety, food hygiene (HACCP), and security protocols, protecting you from fines and reputational damage." },
            { icon: <TrendingUp />, title: "Inefficient Operations & Staff Turnover", description: "Empower your team with clear, step-by-step SOPs. This reduces training time, minimizes errors, and creates a less stressful work environment, leading to higher staff retention." }
        ]
    },
    restaurants: {
        title: "The Business Case for a More Profitable & Compliant Restaurant",
        points: [
            { icon: <Shield />, title: "Prevent Food Safety Violations", description: "A single food poisoning incident can destroy your reputation. Our HACCP-based checklists for opening, line checks, and closing create a verifiable system to prevent this." },
            { icon: <HandCoins />, title: "Stop Kitchen Profit Drain", description: "Reduce costly food spoilage with rigorous temperature logging and FIFO protocols, and control portion sizes to protect your margins on every plate." },
            { icon: <TrendingUp />, title: "Eliminate Service Inconsistency", description: "Ensure every guest gets the same high-quality experience with standardized checklists for FOH opening, closing, and service standards, leading to better reviews and repeat business." },
            { icon: <Users />, title: "Reduce Back-of-House Chaos", description: "Empower your kitchen staff with clear, repeatable processes for everything from receiving goods to closing down, reducing errors and staff stress." }
        ]
    },
    luxury_retail_pack: {
        title: "The Business Case for Luxury Retail Excellence",
        points: [
            { icon: <Gem />, title: "Prevent High-Value Inventory Loss", description: "Implement ironclad, two-person protocols for vault access, daily counts, and client presentations to eliminate the risk of theft or loss of high-value items." },
            { icon: <Users />, title: "Uphold Brand Prestige with Every Interaction", description: "Standardize the 'white-glove' service experience, from clienteling and private viewings to store ambiance, ensuring your brand's luxury promise is always delivered." },
            { icon: <FileLock />, title: "Comply with Anti-Money Laundering (AML) Regulations", description: "Navigate complex regulations for high-value cash transactions with a clear protocol for identity verification and 'Source of Funds' documentation, protecting your business from legal risk." },
            { icon: <Shield />, title: "Protect Against Internal & External Threats", description: "From robust opening/closing security procedures to daily CCTV audits and secure cash handling, our checklists provide a multi-layered defense system for your store." }
        ]
    },
    electronics_showroom_pack: {
        title: "The Business Case for a High-Performing Electronics Showroom",
        points: [
            { icon: <Tv />, title: "Prevent Demo Unit Failures & Inconsistent Displays", description: "A non-functional demo unit or a messy display is a lost sale. Our checklists ensure every product is perfectly presented and functional, maintaining brand standards and boosting customer confidence." },
            { icon: <HandCoins />, title: "Stop Inventory & Cash Shrinkage", description: "Small, high-value electronics are prime targets for theft. Our protocols for inventory cycle counting, cash handling, and security audits protect your most valuable assets and your bottom line." },
            { icon: <Bug />, title: "Eliminate Costly Data Entry & Shipping Errors", description: "One wrong digit in a product's weight or dimensions can lead to thousands in shipping chargebacks. Our 'maker-checker' data entry SOP prevents these expensive errors before they happen." },
            { icon: <Shield />, title: "Reduce Compliance & Safety Risks", description: "Faulty wiring on displays is a fire hazard, and non-compliance with payment security (PCI DSS) can lead to crippling fines. Our safety and payment handling checklists mitigate these critical risks." }
        ]
    },
    supermarket_hypermarket_ops_pack: {
        title: "The Business Case for Supermarket & Hypermarket Efficiency",
        points: [
            { icon: <Recycle />, title: "Reduce Fresh Food Spoilage & Wastage", description: "Our HACCP-aligned checklists for fresh departments ensure proper temperature control, handling, and stock rotation, drastically reducing spoilage and protecting thin margins." },
            { icon: <TrendingUp />, title: "Improve On-Shelf Availability & Reduce Stockouts", description: "Streamline your inventory management with checklists for high-volume receiving, planogram compliance, and daily stock audits, ensuring popular items are always available to customers." },
            { icon: <HandCoins />, title: "Increase Checkout Speed & Reduce Shrinkage", description: "Optimize front-end efficiency with checklists for cash management, queue monitoring, and loss prevention at the point of sale, improving customer experience and protecting profits." },
            { icon: <Shield />, title: "Ensure a Safe & Clean Shopping Environment", description: "Implement daily store readiness and housekeeping checklists to ensure your store is always safe, hygienic, and welcoming, building customer trust and loyalty." }
        ]
    },
    film_production_pack: {
        title: "The Business Case for Professional Film & OTT Production",
        points: [
            { icon: <FileLock />, title: "Prevent Costly Legal & Compliance Disasters", description: "A $2M film was halted for failing to secure life rights. Our pre-production checklists ensure all clearances (E&O, copyright, life rights) are secured before you spend, preventing catastrophic losses." },
            { icon: <Shield />, title: "Ensure On-Set Safety & Avoid Liability", description: "Accidents on set can be career-ending. Our checklists for equipment handling, stunt coordination, and on-set EHS create a safer working environment and a clear audit trail of due diligence." },
            { icon: <TrendingUp />, title: "Eliminate Expensive Post-Production Errors", description: "Standardize your entire workflow—from daily call sheets and data management to post-production handovers—to prevent miscommunication, lost footage, and expensive rework." },
            { icon: <Video />, title: "Guarantee Technical Quality for Global Distribution", description: "Ensure your final product meets global distribution standards (SMPTE, DCP) with checklists for equipment checks, data management, and final QC, preventing costly rejections from distributors." }
        ]
    },
    ott_platform_pack: {
        title: "The Business Case for a Scalable & Compliant OTT Platform",
        points: [
            { icon: <TrendingUp />, title: "Prevent Show-Stopping Platform Outages", description: "When a cricket streaming app crashed, it lost millions in trust. Our checklists for load testing, disaster recovery, and infrastructure readiness prevent these public failures." },
            { icon: <FileLock />, title: "Navigate Global Content & Data Regulations", description: "Ensure compliance with regional content laws, accessibility standards (WCAG 2.1), and data privacy regulations (GDPR/DPDP) to avoid fines and geo-restrictions." },
            { icon: <Shield />, title: "Secure Your Content and User Data", description: "Implement a robust security framework with checklists for DRM implementation, vendor security assessments, and cybersecurity incident response to protect your content and user data from breaches." },
            { icon: <Video />, title: "Streamline Your Content Supply Chain", description: "Standardize your content pipeline from acquisition and metadata tagging to QC and release scheduling, improving efficiency and reducing time-to-market for new content." }
        ]
    },
    theme_park_ops_pack: {
        title: "The Business Case for Theme Park Safety & Guest Experience",
        points: [
            { icon: <Shield />, title: "Prevent Catastrophic Ride Failures", description: "Implement rigorous daily ride safety checks, maintenance logs, and operator readiness protocols to prevent accidents and ensure the highest level of guest safety." },
            { icon: <Users />, title: "Master Crowd Control & Emergency Response", description: "Manage large crowds effectively and execute orderly evacuations with checklists for crowd flow, emergency exits, and staff response drills, preventing stampedes and ensuring public safety." },
            { icon: <HeartPulse />, title: "Deliver a Flawless Guest Experience", description: "Standardize everything from park cleanliness and F&B hygiene to character interactions and show quality, ensuring every visitor has a magical and memorable experience." },
            { icon: <FileCheck />, title: "Ensure Regulatory & Safety Compliance", description: "Maintain a constant state of readiness for safety audits with documented checklists for ride maintenance, water park hygiene, and emergency preparedness, aligned with international standards." }
        ]
    },
    sports_clubs_facilities_pack: {
        title: "The Business Case for World-Class Sports Club & Facility Operations",
        points: [
            { icon: <Shield />, title: "Prevent Member Injuries & Reduce Liability", description: "Worn-out turf or a faulty goalpost can lead to lawsuits. Our checklists for equipment and infrastructure maintenance create a verifiable safety record, protecting your members and your business." },
            { icon: <Users />, title: "Master Event & Crowd Management", description: "Inconsistent security and poor crowd flow during tournaments create chaos. Standardize event setup, security briefing, and evacuation plans to ensure every event is safe and professional." },
            { icon: <TrendingUp />, title: "Ensure Fire & Emergency Readiness", description: "Blocked exits and expired extinguishers are a catastrophic liability. Our fire safety checklists ensure you are always prepared for an emergency, protecting lives and property." },
            { icon: <FileCheck />, title: "Optimize Facility Hygiene & Vendor Performance", description: "Poor hygiene in locker rooms or pools leads to member complaints and health risks. Manage facility cleanliness, vendor SLAs, and sustainability with our comprehensive checklists." }
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
    enterprise_risk_compliance_pack: {
        title: "The Business Case for AI & Cybersecurity Governance",
        points: [
            { icon: <BrainCircuit />, title: "Build Trust & Mitigate AI Risk", description: "Implement an AI Ethics framework to govern your models, assess for bias, and ensure transparency, building trust with users and regulators before you face scrutiny." },
            { icon: <FileLock />, title: "Avoid Crippling Data Privacy Fines", description: "Use our GDPR/DPDP audit checklists to maintain a Record of Processing Activities (ROPA), manage consent, and handle Data Subject Access Requests (DSARs) efficiently." },
            { icon: <Shield />, title: "Strengthen Your Defenses Against Cyber Attacks", description: "Move from reactive to proactive security. Use checklists for incident response drills, vendor security assessments, and cloud security posture management to find and fix weaknesses before they are exploited." },
            { icon: <Users />, title: "Secure the Human Element", description: "Your biggest vulnerability is often your people. Implement secure employee offboarding and access control reviews to ensure departing employees don't become your next data breach." }
        ]
    },
    healthcare_compliance_suite: {
        title: "The Business Case for Patient Safety & Compliance",
        points: [
            { icon: <Shield />, title: "Prevent 'Never Events' & Medication Errors", description: "A wrong-site surgery or medication error is catastrophic. Our WHO-aligned Surgical Safety and LASA Drug checklists create a safety net to prevent these devastating and legally perilous events." },
            { icon: <TrendingUp />, title: "Pass NABH/JCI/NABL Audits with Confidence", description: "Stop the pre-audit scramble. Our checklists embed global standards into your daily workflow, ensuring you are perpetually audit-ready and compliant, saving you from non-compliance penalties." },
            { icon: <Users />, title: "Eliminate Hospital-Acquired Infections (HAIs)", description: "HAIs are a major cost and safety risk. Our CSSD and Infection Control checklists enforce rigorous sterilization and hygiene protocols, directly reducing infection rates and improving patient outcomes." },
            { icon: <HandCoins />, title: "Stop Revenue Leakage from Inefficiency", description: "Reduce costly delays, sample rejections, and readmissions. Our protocols for ER, lab, and discharge planning streamline operations, improving patient flow and financial health." }
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
    education_sector_pack: {
        title: "The Business Case for a Safer, More Organized Campus",
        points: [
            { icon: <Shield />, title: "Prevent a Parent's Worst Nightmare", description: "An unauthorized pickup or a bus accident is an existential threat to a school's reputation. Our protocols for student pickup verification and bus safety are your first line of defense." },
            { icon: <TrendingUp />, title: "Pass CBSE/ICSE Inspections Without Panic", description: "Stop scrambling for inspections. Our checklists ensure you are always compliant with education board requirements for fire safety, lab safety, and facilities, preventing penalties." },
            { icon: <FileLock />, title: "Protect Students in the Digital World", description: "Implement our 'Student Digital Safety Audit' to review network traffic, web filters, and device settings, creating a safer online learning environment for your students." },
            { icon: <Users />, title: "Build Deep Parent Trust & Confidence", description: "A visible and systematic approach to safety and organization is the most powerful marketing tool. Demonstrate your commitment to safety and build the trust that is a key factor in school choice." }
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
            { icon: 'x', title: "Improve Order Fulfillment Speed & Accuracy", description: "A well-organized warehouse is a fast warehouse. Our 5S and inventory management checklists ensure that your pick-and-pack operations are efficient, accurate, and scalable." }
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
