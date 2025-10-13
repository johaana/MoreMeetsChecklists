
import React from 'react';
import { HandCoins, Shield, TrendingUp, Users, Bus, Anchor, Trophy, Briefcase, FileCheck, Recycle, Drama, FerrisWheel, Mask, GalleryVertical, Guitar, VenetianMask, Gamepad, Rabbit, Video, Computer, Landmark, Sprout, Wind, Syringe, HeartPulse, BrainCircuit, Lock, KeyRound, Banknote, Bug, UserCog, Siren, Milestone, UserCheck, Stethoscope, Microscope, TestTube, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, CakeSlice, Truck, Pill, Store, Gem, Factory, HardHat, GraduationCap, Building2, Warehouse, Utensils, Building, MonitorPlay, Film, PawPrint, Home, Dumbbell } from 'lucide-react';

export const painPointsContent = {
    hospitality_excellence_suite: {
        title: "The Business Case for 5-Star Operational Excellence",
        points: [
            { icon: <Users />, title: "Inconsistent Guest Experience", description: "Standardize every touchpoint, from check-in to room service, ensuring every guest receives the same 5-star treatment, every time. This builds loyalty and drives positive reviews." },
            { icon: <HandCoins />, title: "Revenue Leakage & Cost Overruns", description: "Plug financial leaks by tracking minibar consumption accurately, preventing wastage in F&B, and implementing preventative maintenance to avoid costly emergency repairs." },
            { icon: <Shield />, title: "Compliance Nightmares & Safety Risks", description: "Navigate complex safety regulations with ease. Our checklists ensure you're always compliant with fire safety, food hygiene (HACCP), and security protocols, protecting you from fines and reputational damage." },
            { icon: <TrendingUp />, title: "Inefficient Operations & Staff Turnover", description: "Empower your team with clear, step-by-step SOPs. This reduces training time, minimizes errors, and creates a less stressful work environment, leading to higher staff retention." }
        ]
    },
    restaurant_operations_checklist: {
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
            { icon: '💰', title: "Comply with Anti-Money Laundering (AML) Regulations", description: "Navigate complex regulations for high-value cash transactions with a clear protocol for identity verification and 'Source of Funds' documentation, protecting your business from legal risk." },
            { icon: <Shield />, title: "Protect Against Internal & External Threats", description: "From robust opening/closing security procedures to daily CCTV audits and secure cash handling, our checklists provide a multi-layered defense system for your store." }
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
    retail_mall_ops_pack: {
        title: "The Business Case for World-Class Mall Management",
        points: [
            { icon: <Users />, title: "Enhance Shopper Experience & Increase Dwell Time", description: "Use checklists for common area maintenance, ambiance, and cleanliness to create a welcoming environment that encourages shoppers to stay longer and spend more." },
            { icon: <Shield />, title: "Mitigate Liability with Robust Safety Protocols", description: "Implement comprehensive security, emergency response, and parking management checklists to ensure a safe environment for millions of visitors, protecting your asset from liability." },
            { icon: <Building2 />, title: "Improve Tenant Relations & Satisfaction", description: "Streamline tenant onboarding, fit-out management, and communication with clear, professional processes, making your mall a preferred location for top-tier brands." },
            { icon: <HandCoins />, title: "Optimize Operational Costs & Vendor Performance", description: "Manage your third-party vendors for housekeeping, security, and maintenance effectively with SLA-based checklists, ensuring you get the service you pay for and optimizing CAM charges." }
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
    sports_complex_stadium_ops: {
        title: "The Business Case for World-Class Stadium Operations",
        points: [
            { icon: <Shield />, title: "Ensure Public Safety & Prevent Crowd Disasters", description: "Implement comprehensive protocols for pre-event security sweeps, crowd management, and emergency egress planning to prevent tragedies and ensure a safe environment for thousands of fans." },
            { icon: <Trophy />, title: "Deliver a Professional Sporting & Broadcast Experience", description: "Maintain pristine playing fields with turf management checklists and ensure flawless media coverage with broadcast operations protocols, meeting the standards of professional leagues." },
            { icon: <Users />, title: "Maximize VIP & Corporate Hospitality Revenue", description: "Standardize the premium experience for corporate boxes and VIP lounges, from catering and service to ambiance, ensuring satisfaction and renewal of high-value clients." },
            { icon: <FileCheck />, title: "Optimize Facility Management & Event Turnover", description: "Efficiently manage everything from parking and traffic to post-event cleaning and restoration, ensuring the venue is always ready for the next big event and operating at peak efficiency." }
        ]
    },
    museum_cultural_ops_pack: {
        title: "The Business Case for Preserving Culture & Engaging Visitors",
        points: [
            { icon: <FileLock />, title: "Protect Priceless Artifacts from Damage", description: "Implement strict, conservationist-approved protocols for artifact handling, climate control, and pest management to preserve your collection for future generations." },
            { icon: <Users />, title: "Enhance the Visitor & Educational Experience", description: "Standardize exhibit installation, visitor services, and accessibility (WCAG) to create an engaging, informative, and welcoming experience for every guest." },
            { icon: <Shield />, title: "Ensure Security & Emergency Preparedness", description: "Protect your collection and visitors with comprehensive checklists for museum security, alarm testing, and emergency response for scenarios like theft or fire." },
            { icon: <FileCheck />, title: "Streamline Curatorial & Exhibition Management", description: "Manage your collection effectively with protocols for archiving, loans, and new acquisitions, while running complex temporary exhibitions on time and on budget." }
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
    ai_cybersecurity_compliance_pack: {
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
    dental_clinic_ops_pack: {
        title: "The Business Case for a Safer & More Efficient Dental Practice",
        points: [
            { icon: <Shield />, title: "Eliminate Infection Control Lapses", description: "Prevent cross-contamination and build patient trust with CDC-aligned checklists for instrument sterilization and operatory disinfection between every patient." },
            { icon: <FileLock />, title: "Reduce Legal Risk with Ironclad Consent", description: "Implement a robust process for client intake, medical history review, and signed informed consent to protect your practice from liability." },
            { icon: <TrendingUp />, title: "Optimize Clinic Flow & Revenue", description: "Streamline your front office with checklists for efficient appointment scheduling, accurate billing, and proactive follow-up on insurance claims to maximize revenue and reduce administrative burden." },
            { icon: <Users />, title: "Ensure Patient & Staff Safety", description: "From X-ray safety protocols to monthly emergency medical kit checks and compliant biomedical waste management, our checklists create a verifiable system of safety for everyone in your clinic." }
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
    manufacturing_plant_pack: {
        title: "The Business Case for a Safer, More Productive Plant",
        points: [
            { icon: <Shield />, title: "Prevent Life-Altering Accidents", description: "A single LOTO failure can lead to a fatality. Our life-saving protocols for Lock-Out Tag-Out, Permit-to-Work, and Confined Space Entry are non-negotiable systems to protect your workforce." },
            { icon: <TrendingUp />, title: "Eliminate Unplanned Downtime & Production Losses", description: "Move from reactive repairs to proactive maintenance. Our checklists for shift handovers, critical spares verification, and tool calibration help avert failures before they happen, maximizing uptime." },
            { icon: <FileLock />, title: "Ensure Vendor & Contractor Safety Compliance", description: "Don't let a contractor's safety lapse become your liability. Our Contractor EHS Management checklist ensures all third-party vendors on your site are pre-qualified and adhere to your safety standards." },
            { icon: <Users />, title: "Improve Quality & Reduce Rework", description: "Prevent defects at the source. Use robust protocols for raw material inspection and 'maker-checker' systems for critical data entry to reduce waste, improve first-pass yield, and protect your margins." }
        ]
    },
    logistics_warehouse_pack: {
        title: "The Business Case for a More Accurate & Efficient Warehouse",
        points: [
            { icon: <TrendingUp />, title: "Achieve 99%+ Inventory Accuracy", description: "Stop losing money to lost stock. Implement systematic checklists for Goods Receiving (GRN), cycle counting, and returns management to get a true, real-time picture of your inventory." },
            { icon: <Shield />, title: "Create a Safer Warehouse Environment", description: "Prevent costly accidents with daily safety checklists for forklifts, loading docks, and general housekeeping, reducing injuries and potential compliance fines." },
            { icon: '💰', title: "Eliminate Costly Shipping & Data Entry Errors", description: "A single typo in product dimensions can lead to thousands in shipping chargebacks. Our 'maker-checker' protocol for new product data entry prevents these expensive mistakes." },
            { icon: <FileCheck />, title: "Improve Order Fulfillment Speed & Accuracy", description: "A well-organized warehouse is a fast warehouse. Our 5S and inventory management checklists ensure that your pick-and-pack operations are efficient, accurate, and scalable." }
        ]
    },
    construction_site_pack: {
        title: "The Business Case for a Zero-Incident Construction Site",
        points: [
            { icon: <Shield />, title: "Prevent Fatalities with Permit-to-Work Systems", description: "Falls, trench collapses, and electrocutions are leading causes of death in construction. Our permit systems for Work-at-Height, Excavation, and Hot Work are essential controls to save lives." },
            { icon: <FileCheck />, title: "Ensure Subcontractor Compliance & Reduce Liability", description: "Don't inherit a subcontractor's safety risk. Our 'Contractor Pre-Qualification' checklist ensures every vendor on your site has the right insurance, training, and safety record." },
            { icon: <TrendingUp />, title: "Improve Site Productivity with Daily Audits", description: "A safe site is a productive site. Our 'Daily Site Safety Audit' checklist helps you proactively identify and fix hazards, from poor housekeeping to improper PPE use, preventing stop-work orders." },
            { icon: <Users />, title: "Build a Powerful Safety Culture", description: "Move beyond compliance to culture. By using systematic tools like incident investigations, toolbox talks, and daily checks, you build a site where every worker is a safety leader." }
        ]
    },
    alternative_medicine_wellness_pack: {
        title: "The Business Case for a Trusted & Compliant Wellness Center",
        points: [
            { icon: <Shield />, title: "Protect Your Clients & Your Practice", description: "A single adverse reaction can destroy trust. Our 'Client Intake & Contraindication Screening' checklist is your most critical tool to ensure treatments are safe for every individual." },
            { icon: <FileCheck />, title: "Meet Ayush & Global Hygiene Standards", description: "Ensure your center is compliant with regulatory bodies like the Ministry of Ayush and meets global standards for hygiene with our checklists for sterilization and facility management." },
            { icon: <TrendingUp />, title: "Deliver Consistent, High-Quality Treatments", description: "Standardize your client journey from consultation to post-treatment care. Checklists for treatment room readiness and practitioner protocols ensure every client receives the same 5-star experience." },
            { icon: <Sprout />, title: "Ensure Product Safety & Efficacy", description: "Manage your herbal remedies and wellness products with precision. Our inventory checklists cover expiry management, sourcing, and storage to ensure the products you use are safe and potent." }
        ]
    },
    beauty_wellness_pack: {
        title: "The Business Case for a Premier Salon, Spa & Fitness Studio",
        points: [
            { icon: <Shield />, title: "Guarantee Client Safety & Hygiene", description: "Prevent infections and build unshakable client trust with rigorous checklists for tool sterilization, equipment disinfection, and contraindication screening." },
            { icon: <TrendingUp />, title: "Deliver a Consistent, 5-Star Experience", description: "Standardize everything from the client consultation and treatment protocol to the spa ambiance, ensuring every client receives the same premium service that justifies your pricing." },
            { icon: <HandCoins />, title: "Optimize Bookings & Reduce No-Shows", description: "Streamline your front desk with checklists for smart appointment scheduling, automated reminders, and waitlist management to maximize your capacity and revenue." },
            { icon: <FileCheck />, title: "Improve Staff Performance & Reduce Errors", description: "Empower your team with clear, step-by-step protocols for every service. This reduces training time, minimizes mistakes, and creates a less stressful, more professional work environment." }
        ]
    },
    personal_travel_pack: {
        title: "The Business Case for an Organized & Stress-Free Life",
        points: [
            { icon: <TrendingUp />, title: "Reduce Stress & Mental Overload", description: "Stop trying to remember everything. Our personal checklists for travel and moving turn chaotic events into calm, manageable processes, letting you focus on what matters." },
            { icon: <HandCoins />, title: "Avoid Costly Mistakes", description: "Forgetting to cancel a subscription before moving or packing critical medication in the wrong bag can have real financial and health consequences. Our checklists prevent these simple but costly errors." },
            { icon: <Shield />, title: "Peace of Mind for Your Loved Ones", description: "Whether it's for a pet sitter or a family member, a clear set of instructions ensures the ones you care for are looked after exactly the way you want, giving you true peace of mind while you're away." },
            { icon: <Users />, title: "A Happier, More Present You", description: "When you're not worried about forgetting something, you're free to be more present and enjoy the moment—whether that's your vacation or the first night in your new home." }
        ]
    }
};

type PainPoints = typeof painPointsContent;
export type PainPointCategory = keyof PainPoints;
