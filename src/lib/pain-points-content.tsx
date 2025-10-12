
import React from 'react';
import { HandCoins, Shield, TrendingUp, Users, Bus, Anchor, Trophy, Briefcase, FileCheck, Recycle, Drama, FerrisWheel, Mask, GalleryVertical, Guitar, VenetianMask, Gamepad, Rabbit, Video, Computer, Landmark, Sprout, Wind, Syringe, HeartPulse, BrainCircuit, Lock, KeyRound, Banknote, Bug, UserCog, Siren, Milestone, UserCheck, Stethoscope, Microscope, TestTube, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, CakeSlice, Truck } from 'lucide-react';

export const painPointsContent = {
    Hospitality: {
        title: "The Business Case for 5-Star Operational Excellence",
        points: [
            { icon: <Users />, title: "Inconsistent Guest Experience", description: "Standardize every touchpoint, from check-in to room service, ensuring every guest receives the same 5-star treatment, every time. This builds loyalty and drives positive reviews." },
            { icon: <HandCoins />, title: "Revenue Leakage & Cost Overruns", description: "Plug financial leaks by tracking minibar consumption accurately, preventing wastage in F&B, and implementing preventative maintenance to avoid costly emergency repairs." },
            { icon: <Shield />, title: "Compliance Nightmares & Safety Risks", description: "Navigate complex safety regulations with ease. Our checklists ensure you're always compliant with fire safety, food hygiene (HACCP), and security protocols, protecting you from fines and reputational damage." },
            { icon: <TrendingUp />, title: "Inefficient Operations & Staff Turnover", description: "Empower your team with clear, step-by-step SOPs. This reduces training time, minimizes errors, and creates a less stressful work environment, leading to higher staff retention." }
        ]
    },
    Corporate: {
        title: "The Business Case for a More Efficient & Secure Workplace",
        points: [
            { icon: <TrendingUp />, title: "Inefficient Use of Company Resources", description: "Our facility management checklists optimize everything from energy consumption to vendor contracts, cutting operational costs and improving your bottom line." },
            { icon: <Shield />, title: "Cybersecurity & Data Breach Risks", description: "Prevent data breaches with protocols for vendor network access, remote work device security, and proper employee offboarding, closing critical security gaps." },
            { icon: <Users />, title: "Failed Product Launches & Messy Events", description: "Execute flawless product launches and corporate events by managing every detail, from venue booking and AV checks to press kits and social media campaigns." },
            { icon: <HandCoins />, title: "Poor Employee Onboarding & Early Turnover", description: "Create a structured and welcoming onboarding experience. Our checklists ensure new hires have the access, information, and support they need to become productive members of the team from day one." }
        ]
    },
    Retail: {
        title: "The Business Case for Retail Excellence",
        points: [
            { icon: <Shield />, title: "Inventory Shrinkage & Return Fraud", description: "Implement ironclad security protocols for high-value items, serial number tracking, and fitting room management to directly protect your bottom line from theft." },
            { icon: <Users />, title: "Inconsistent Customer Experience", description: "Standardize your sales process, visual merchandising, and technical support to ensure every shopper receives the same high-quality experience, building brand loyalty." },
            { icon: <TrendingUp />, title: "Lost Sales Due to Stockouts or Inaccuracy", description: "Streamline your inventory management, from receiving and stocking to daily audits and master data accuracy, ensuring popular items are always available." },
            { icon: <HandCoins />, title: "Operational Inefficiencies", description: "Optimize everything from delivery scheduling to managing damaged goods, turning operational friction into profitability and smooth customer fulfillment." }
        ]
    },
    Healthcare: {
         title: "The Business Case for Patient Safety & Compliance",
         points: [
            { icon: <Shield />, title: "Prevent 'Never Events' & Medication Errors", description: "A wrong-site surgery or medication error is catastrophic. Our WHO-aligned Surgical Safety and LASA Drug checklists create a safety net to prevent these devastating and legally perilous events." },
            { icon: <TrendingUp />, title: "Pass NABH/JCI/NABL Audits with Confidence", description: "Stop the pre-audit scramble. Our checklists embed global standards into your daily workflow, ensuring you are perpetually audit-ready and compliant, saving you from non-compliance penalties." },
            { icon: <Users />, title: "Eliminate Hospital-Acquired Infections (HAIs)", description: "HAIs are a major cost and safety risk. Our CSSD and Infection Control checklists enforce rigorous sterilization and hygiene protocols, directly reducing infection rates and improving patient outcomes." },
            { icon: <HandCoins />, title: "Stop Revenue Leakage from Inefficiency", description: "Reduce costly delays, sample rejections, and readmissions. Our protocols for ER, lab, and discharge planning streamline operations, improving patient flow and financial health." }
         ]
    },
     Education: {
         title: "The Business Case for a Safer, More Organized Campus",
         points: [
            { icon: <Shield />, title: "Prevent a Parent's Worst Nightmare", description: "An unauthorized pickup or a bus accident is an existential threat to a school's reputation. Our protocols for student pickup and bus safety are your first line of defense against these catastrophic events." },
            { icon: <TrendingUp />, title: "Pass CBSE/ICSE Inspections Without Panic", description: "Stop scrambling for inspections. Our checklists ensure you are always compliant with education board requirements for fire safety, lab safety, and facilities, preventing penalties and last-minute stress." },
            { icon: <HandCoins />, title: "Reduce Operational Chaos & Administrative Burden", description: "Standardize daily operations, from opening procedures and classroom safety checks to managing field trips, freeing up administrative time to focus on educational outcomes." },
            { icon: <Users />, title: "Build Deep Parent Trust & Confidence", description: "A visible and systematic approach to safety and organization is the most powerful marketing tool. Demonstrate your commitment to safety and build the trust that is a key factor in school choice." }
         ]
    },
    Manufacturing: {
        title: "The Business Case for a Safer, More Productive Plant",
        points: [
            { icon: <Shield />, title: "Prevent Life-Altering Accidents", description: "A single LOTO failure can lead to a fatality. Our life-saving protocols for Lock-Out Tag-Out, Permit-to-Work, and Confined Space Entry are non-negotiable systems to protect your workforce." },
            { icon: <TrendingUp />, title: "Eliminate Unplanned Downtime & Production Losses", description: "Shift from reactive repairs to data-driven predictive maintenance. Our checklists help you analyze sensor data, avert failures before they happen, and maximize machine uptime and profitability." },
            { icon: <HandCoins />, title: "Stop Costly Quality Control Failures & Rework", description: "Prevent defects at the source. Use robust protocols for raw material inspection, critical spares verification, and tool calibration to reduce waste, improve first-pass yield, and protect your margins." },
            { icon: <Users />, title: "Ensure Vendor & Contractor Safety Compliance", description: "Don't let a contractor's safety lapse become your liability. Our Contractor EHS Management checklist ensures all third-party vendors on your site adhere to your safety standards." }
        ]
    },
    Events: {
        title: "The Business Case for Flawless Event Execution",
        points: [
            { icon: <Shield />, title: "Prevent Crowd Disasters & Stampedes", description: "Tragedies like the Salt Lake Stadium stampede result from poor egress management. Our checklists for crowd flow, barricade placement, and emergency exits are critical for public safety." },
            { icon: <TrendingUp />, title: "Avoid Show-Stopping Technical Failures", description: "Avoid event-killing disasters like the Indiana State Fair stage collapse. Our mandatory technical rehearsal, AV, and rigging checklists ensure every element works perfectly under pressure." },
            { icon: <HandCoins />, title: "Eliminate Vendor Miscommunication & Budget Overruns", description: "Our 'Sales-to-Ops Handover' and 'Critical Vendor Confirmation' checklists ensure what you promise the client is what gets delivered, preventing costly last-minute surprises and disputes." },
            { icon: <Users />, title: "Protect Your Reputation & Brand Image", description: "In the age of social media, any failure goes viral instantly. A systematic, checklist-driven approach is your best insurance against the negative press from safety lapses or vendor violations." }
        ]
    },
    Entertainment: {
        title: "The Business Case for Unforgettable Entertainment",
        points: [
            { icon: <TrendingUp />, title: "Deliver a Consistently Premium Guest Experience", description: "From the moment a ticket is scanned to the final encore, standardize every touchpoint to create a consistently high-quality and memorable experience for every guest, driving repeat business." },
            { icon: <Shield />, title: "Mitigate Unique Safety Lapses & Liability", description: "Manage the specific risks of entertainment venues, from ride maintenance in theme parks to crowd control at concerts, protecting both your guests and your business from liability." },
            { icon: <Drama />, title: "Prevent Technical Failures & Show-Stoppers", description: "Ensure the show always goes on. Our checklists for projection, sound, and lighting systems prevent technical glitches that can ruin a performance and disappoint a paying audience." },
            { icon: <HandCoins />, title: "Stop Revenue Leakage & Boost Profitability", description: "Optimize everything from concession stand inventory and ticketing operations to staffing levels for peak and off-peak hours, maximizing profitability and reducing waste." }
        ]
    },
    Personal: {
        title: "The Business Case for an Organized Life",
        points: [
            { icon: <TrendingUp />, title: "Reduce Stress & Mental Overload", description: "Stop trying to remember everything. Our personal checklists for travel and moving turn chaotic events into calm, manageable processes, letting you focus on what matters." },
            { icon: <HandCoins />, title: "Avoid Costly Mistakes", description: "Forgetting to cancel a subscription before moving or packing critical medication in the wrong bag can have real financial and health consequences. Our checklists prevent these simple but costly errors." },
            { icon: <Shield />, title: "Peace of Mind for Your Loved Ones", description: "Whether it's for a pet sitter or a family member, a clear set of instructions ensures the ones you care for are looked after exactly the way you want, giving you true peace of mind while you're away." },
            { icon: <Users />, title: "A Happier, More Present You", description: "When you're not worried about forgetting something, you're free to be more present and enjoy the moment—whether that's your vacation or the first night in your new home." }
        ]
    },
     Automotive: {
        title: "The Business Case for a High-Performance Workshop",
        points: [
            { icon: <TrendingUp />, title: "Eliminate Costly Customer Comebacks", description: "Our 'Post-Repair QC Test Drive' protocol ensures the problem is fixed right the first time, boosting customer satisfaction and protecting your profit margins from rework." },
            { icon: <Shield />, title: "Prevent Damage to High-Value Vehicles", description: "With protocols for specialized tool authorization, you prevent technicians from using incorrect equipment that can cause thousands in damage to modern, complex vehicles." },
            { icon: <Users />, title: "Enhance Customer Trust & Transparency", description: "A systematic, checklist-driven approach to service shows customers a level of professionalism that builds deep trust and justifies premium pricing." },
            { icon: <HandCoins />, title: "Increase Technician Efficiency", description: "Clear, standardized procedures for everything from multi-point inspections to final detailing reduce ambiguity and allow technicians to work more efficiently and accurately." }
        ]
    },
    RealEstate: {
        title: "The Business Case for Professional Property Management",
        points: [
            { icon: <TrendingUp />, title: "Maximize Asset Value & Reduce Vacancy", description: "Our 'Rental Property Turnaround' checklist helps you get properties rent-ready faster, while preventive maintenance protocols protect the long-term value of your assets." },
            { icon: <Shield />, title: "Minimize Legal & Compliance Risks", description: "Navigate complex landlord-tenant laws with confidence. Our checklists for lease onboarding, move-out inspections, and safety compliance protect you from disputes and liability." },
            { icon: <Users />, title: "Improve Tenant Satisfaction & Retention", description: "A professional, systematic approach to maintenance requests, communication, and property upkeep leads to happier tenants who stay longer." },
            { icon: <HandCoins />, title: "Streamline Operations & Save Time", description: "Standardize everything from rent collection to vendor management, freeing up your time to focus on growing your portfolio instead of firefighting daily issues." }
        ]
    },
    Compliance: {
        title: "The Business Case for a Culture of Compliance",
        points: [
            { icon: <Shield />, title: "Pass Audits with Confidence", description: "Our ISO-aligned checklists for internal audits, document control, and corrective actions ensure you are always prepared for certification and surveillance audits." },
            { icon: <TrendingUp />, title: "Move from Reactive to Proactive", description: "Implement systematic processes like root cause analysis and risk assessment to prevent non-conformities before they happen, saving time and resources." },
            { icon: <Users />, title: "Embed Compliance into Daily Operations", description: "Our checklists turn complex standards into simple, actionable steps for your team, making compliance a daily habit, not a once-a-year scramble." },
            { icon: <Briefcase />, title: "Achieve & Maintain Certification", description: "Whether you're transitioning to a new standard or aiming for your first certification, our checklists provide a clear roadmap to success." }
        ]
    },
    Wellness: {
        title: "The Business Case for a Premier Wellness Experience",
        points: [
            { icon: <Users />, title: "Ensure Client Safety & Build Trust", description: "A single adverse reaction can destroy your reputation. Our checklists for contraindication screening and equipment sterilization are critical for protecting your clients' safety and building deep, lasting trust." },
            { icon: <TrendingUp />, title: "Deliver Consistent, High-Quality Services", description: "Standardize every aspect of the client journey, from the initial consultation to the post-treatment follow-up, ensuring every client receives the same 5-star experience that justifies premium pricing." },
            { icon: <HandCoins />, title: "Optimize Inventory & Reduce Waste", description: "Implement protocols for managing professional products and supplies, reducing spoilage and ensuring you always have what you need for your services, directly impacting your bottom line." },
            { icon: <Shield />, title: "Enhance Hygiene & Sanitation", description: "In a post-COVID world, visible and verifiable hygiene is paramount. Our cleaning and sanitation checklists provide peace of mind for both your clients and your staff, making them feel safe and cared for." }
        ]
    },
    Maritime: {
        title: "The Business Case for Maritime Excellence",
        points: [
            { icon: <Shield />, title: "Ensure ISPS & ISM Code Compliance", description: "Navigate complex international maritime regulations (SOLAS, MARPOL) with confidence. Our checklists ensure you meet mandatory safety and security standards, preventing costly detentions and fines." },
            { icon: <Anchor />, title: "Prevent Catastrophic Incidents at Sea", description: "From 'Vessel Mooring' to 'Bunkering Operations,' our checklists systematize high-risk procedures to prevent accidents, spills, and injuries, protecting your crew and the environment." },
            { icon: <TrendingUp />, title: "Improve Port Turnaround Efficiency", description: "Standardize cargo operations, customs clearance, and port communications to minimize time in port and maximize vessel utilization and profitability." },
            { icon: <Recycle />, title: "Manage Environmental Obligations Systematically", description: "Implement auditable processes for 'Ballast Water Management' and MARPOL compliance, protecting the environment, avoiding heavy fines, and enhancing your corporate reputation." }
        ]
    },
    Aviation: {
        title: "The Business Case for Aviation Safety & Efficiency",
        points: [
            { icon: <Shield />, title: "Eliminate Catastrophic Foreign Object Debris (FOD) Risks", description: "A single loose bolt on the tarmac can destroy a multi-million dollar engine. Implement a rigorous 'Airside Safety & FOD Prevention' program to protect aircraft and ensure safety." },
            { icon: <TrendingUp />, title: "Optimize Ground Handling & Turnaround Times (TAT)", description: "Streamline everything from passenger trolley management to specialized vehicle maintenance, improving on-time performance and operational flow, which is critical for airline satisfaction." },
            { icon: <Users />, title: "Enhance Passenger Experience & Terminal Ambiance", description: "Ensure a clean, safe, and efficient terminal environment with checklists covering everything from restroom hygiene and queue management to passenger flow analysis, improving airport ratings." },
            { icon: <Recycle />, title: "Drive Sustainability Goals & Reduce Costs", description: "Implement and track waste management and energy-saving initiatives across the airport to meet your ESG targets and reduce operational costs, making your airport a leader in sustainability." }
        ]
    },
    "E-commerce": {
        title: "The Business Case for E-Commerce Excellence",
        points: [
            { icon: <TrendingUp />, title: "Reduce Picking & Packing Errors", description: "Implement a systematic fulfillment process to ensure the right product gets to the right customer, every time, reducing costly returns." },
            { icon: <Shield />, title: "Prevent Shipping Chargebacks", description: "Our 'Master Data' checklists ensure product weights and dimensions are accurate from the start, preventing unexpected and expensive carrier fees." },
            { icon: <Users />, title: "Improve Inventory Accuracy", description: "Master your inventory with checklists for cycle counting, GRN processes, and managing non-conforming stock, ensuring your website reflects what's actually on the shelf." },
            { icon: <HandCoins />, title: "Increase Warehouse Efficiency", description: "Optimize your warehouse layout, streamline returns processing (RMA), and improve overall logistics to get orders out the door faster." }
        ]
    },
    Agency: {
        title: "The Business Case for Agency Efficiency",
        points: [
            { icon: <TrendingUp />, title: "Standardize Client Onboarding", description: "Create a smooth and professional onboarding experience for every new client, ensuring you gather all necessary information and set clear expectations from day one." },
            { icon: <FileCheck />, title: "Deliver Consistent, High-Quality Work", description: "Use checklists to create standardized workflows for your core services, ensuring every team member delivers work that meets your agency's quality standards." },
            { icon: <Shield />, title: "Manage Compliance & Reduce Risk", description: "For travel agencies, our checklists help ensure IATA compliance and proper documentation, protecting you from costly errors and penalties." },
            { icon: <Users />, title: "Improve Project Management & Profitability", description: "Track project milestones, manage resources, and ensure client deliverables are met on time and on budget." }
        ]
    },
    Logistics: {
        title: "The Business Case for Logistics Excellence",
        points: [
            { icon: <Shield />, title: "Prevent Costly Shipping Errors & Chargebacks", description: "A single data entry mistake in dimensions can cost thousands in chargebacks. Our 'New Product Master Data Entry' checklist with a 'maker-checker' protocol prevents this." },
            { icon: <TrendingUp />, title: "Optimize Warehouse Throughput & Accuracy", description: "Implement 5S housekeeping and systematic inventory control (cycle counting) to improve picking accuracy, reduce search time, and get orders out faster, directly impacting your bottom line." },
            { icon: <Truck />, title: "Ensure Fleet Safety & Maximize Uptime", description: "Reduce breakdowns and accidents with mandatory pre-trip inspections for all vehicles and a robust preventive maintenance schedule for your entire fleet, keeping your assets on the road." },
            { icon: <Users />, title: "Improve Worker Safety & Reduce Liability", description: "Minimize accidents with checklists for forklift operations, loading dock safety, and hazardous material handling, creating a safer, more productive work environment and reducing insurance premiums." },
        ]
    },
    Construction: {
        title: "The Business Case for Construction Site Safety",
        points: [
            { icon: <Shield />, title: "Prevent Fatal Accidents & Crippling Lawsuits", description: "A trench collapse is one of the deadliest construction accidents. Our daily 'Excavation & Trenching Permit' ensures protective systems are checked before any worker enters, saving lives and preventing litigation." },
            { icon: <FileCheck />, title: "Ensure Subcontractor Compliance & Mitigate Liability", description: "Don't inherit liability. Our 'Contractor Pre-Qualification' checklist verifies that all subcontractors have the required insurance and safety certifications before they step on site." },
            { icon: <TrendingUp />, title: "Avoid Costly Project Delays & Rework", description: "Systematically manage high-risk tasks like scaffolding, electrical work, and work-at-height with 'Permit-to-Work' systems that prevent incidents and keep your project on schedule and on budget." },
            { icon: <Users />, title: "Build a Proactive Culture of Safety", description: "Daily site audits and mandatory PPE checks transform safety from a binder on a shelf into a daily, verifiable habit for every worker on your site, which is visible to clients and regulators." },
        ]
    },
    "Film Production": {
        title: "The Business Case for a Professional Production Workflow",
        points: [
            { icon: <HandCoins />, title: "Prevent Crippling Budget Overruns & Delays", description: "A $2M film was halted for failing to secure life rights. Our pre-production checklists ensure all legal clearances, contracts, and permits are secured before the camera even rolls, saving you from catastrophic financial loss." },
            { icon: <Shield />, title: "Ensure On-Set Safety & Avoid Liability", description: "Accidents on set can be career-ending. Our checklists for equipment handling, stunt coordination, and on-set safety (EHS) create a safer working environment and a clear audit trail of due diligence for your cast and crew." },
            { icon: <TrendingUp />, title: "Eliminate Costly Post-Production Errors", description: "Standardize your entire workflow, from daily call sheets and data management to post-production handovers, to prevent miscommunication, lost footage, and expensive rework." },
            { icon: <Video />, title: "Guarantee Technical Quality for Global Distribution", description: "Ensure your final product meets global distribution standards with checklists for equipment checks (SMPTE), data management, color grading, and final QC, preventing costly rejections from distributors." },
        ]
    },
    "OTT Platform": {
        title: "The Business Case for a World-Class Streaming Service",
        points: [
            { icon: <Shield />, title: "Prevent Data Breaches & Ensure Global Compliance", description: "Protect your user data and avoid massive fines with checklists for GDPR/DPDP compliance, DRM implementation, and ISO 27001 security protocols. A single breach can destroy user trust." },
            { icon: <TrendingUp />, title: "Reduce User Churn & Improve Engagement", description: "A major OTT outage during a live event highlights the need for robust infrastructure SOPs. Our checklists ensure platform stability, a great UX, and accessible content (WCAG 2.1) to keep subscribers happy." },
            { icon: <FileCheck />, title: "Stop Content Piracy & Licensing Nightmares", description: "Safeguard your most valuable assets. Implement checklists for copyright enforcement, content licensing verification, and secure content delivery networks to protect your revenue streams." },
            { icon: <Computer />, title: "Streamline Your Content Pipeline for Faster Releases", description: "From data-driven content strategy and acquisition to automated QC, metadata tagging, and multi-language support, our checklists optimize your entire content lifecycle, getting new shows to market faster." },
        ]
    },
};

type PainPoints = typeof painPointsContent;
export type PainPointCategory = keyof PainPoints;
