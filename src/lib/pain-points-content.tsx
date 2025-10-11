
import React from 'react';
import { HandCoins, Shield, TrendingUp, Users, Bus, Anchor, Trophy, Briefcase, FileCheck, Recycle, Drama, FerrisWheel, Mask, GalleryVertical, Guitar } from 'lucide-react';

export const painPointsContent = {
    Hospitality: {
        title: "The Business Case for Operational Excellence",
        points: [
            { icon: <Users />, title: "Inconsistent Guest Experience", description: "Standardize every touchpoint, from check-in to room service, ensuring every guest receives the same 5-star treatment, every time. This builds loyalty and drives positive reviews." },
            { icon: <HandCoins />, title: "Revenue Leakage & Cost Overruns", description: "Plug financial leaks by tracking minibar consumption accurately, preventing wastage in F&B, and implementing preventative maintenance to avoid costly emergency repairs." },
            { icon: <Shield />, title: "Compliance Nightmares & Safety Risks", description: "Navigate complex safety regulations with ease. Our checklists ensure you're always compliant with fire safety, food hygiene (HACCP), and security protocols, protecting you from fines and reputational damage." },
            { icon: <TrendingUp />, title: "Inefficient Operations & Staff Turnover", description: "Empower your team with clear, step-by-step SOPs. This reduces training time, minimizes errors, and creates a less stressful work environment, leading to higher staff retention." }
        ]
    },
    Corporate: {
        title: "Why This Checklist Is Your New Strategic Asset",
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
         title: "The Business Case for Clinical & Operational Excellence",
         points: [
            { icon: <Shield />, title: "Patient Safety & Medication Errors", description: "Our checklists for pharmacies and labs enforce strict verification protocols (e.g., 'Look-Alike, Sound-Alike' drugs) to minimize the risk of dangerous errors and protect your patients." },
            { icon: <TrendingUp />, title: "Compliance & Audit Failures (NABH/JCI/NABL)", description: "Navigate complex healthcare regulations with confidence. Our checklists ensure you are always prepared for audits, covering everything from infection control to documentation." },
            { icon: <Users />, title: "Data Integrity & Confidentiality Breaches", description: "Implement robust protocols for handling patient information and ensuring data consistency between LIS, HIS, and EMR, building patient trust and preventing diagnostic errors." },
            { icon: <HandCoins />, title: "Operational Inefficiencies & Delays in Care", description: "Standardize critical workflows in your ER, OT, and diagnostic labs. This reduces bottlenecks, minimizes sample rejection, and ensures patients receive timely, high-quality care." }
         ]
    },
     Education: {
         title: "The Business Case for a Safer, More Organized Campus",
         points: [
            { icon: <Shield />, title: "Student Safety & Security Risks", description: "Implement a robust safety framework covering everything from daily campus patrols and visitor verification to student dismissal, bus safety, and emergency drills, ensuring a secure environment." },
            { icon: <TrendingUp />, title: "Liability & Compliance Issues", description: "Proactively manage risks by ensuring all safety equipment is functional, playgrounds are hazard-free, and emergency procedures are regularly practiced, protecting your institution from legal and financial liability." },
            { icon: <HandCoins />, title: "Operational Chaos & Inefficiency", description: "Standardize daily operations, from opening procedures and classroom safety checks to managing field trips, freeing up administrative time to focus on educational outcomes rather than daily issues." },
            { icon: <Users />, title: "Negative Parent Perception & Trust", description: "Demonstrate a clear, verifiable commitment to safety and organization. A well-run, secure campus builds deep trust and confidence with parents, a key factor in school choice and reputation." }
         ]
    },
    Manufacturing: {
        title: "The Business Case for a Safer, More Productive Plant",
        points: [
            { icon: <Shield />, title: "Worker Safety & Catastrophic Accidents", description: "Implement life-saving protocols like Lock-Out Tag-Out (LOTO) and Permit-to-Work systems. Our checklists prevent injuries, ensure EHS compliance, and create a culture of safety." },
            { icon: <TrendingUp />, title: "Unplanned Downtime & Production Loss", description: "Shift from reactive repairs to data-driven predictive maintenance. Our checklists help you analyze sensor data, avert failures before they happen, and maximize machine uptime." },
            { icon: <HandCoins />, title: "Quality Control Failures & Costly Rework", description: "Prevent defects at the source with robust protocols for raw material inspection, critical spares verification, and tool calibration, reducing waste and improving first-pass yield." },
            { icon: <Users />, title: "Supply Chain Vulnerabilities", description: "Test your resilience with supply chain disruption drills. Our checklists help you identify weaknesses in your logistics and build a more robust, agile production plan." }
        ]
    },
    Events: {
        title: "The Business Case for Flawless Event Execution",
        points: [
            { icon: <Trophy />, title: "On-Stage Failures & Technical Glitches", description: "Avoid event-killing disasters. Our mandatory technical rehearsal and AV checklists ensure every microphone, presentation, and video works perfectly when the spotlight is on." },
            { icon: <Shield />, title: "Crowd Safety & Security Risks", description: "Manage large crowds effectively with protocols for entry screening, real-time density monitoring, and emergency response, ensuring a safe experience for every attendee." },
            { icon: <HandCoins />, title: "Vendor Miscommunication & Budget Overruns", description: "Our 'Sales-to-Ops Handover' and 'Critical Vendor Confirmation' checklists ensure what you promise the client is what gets delivered, preventing costly last-minute surprises." },
            { icon: <TrendingUp />, title: "Poor Fan & Athlete Experience", description: "From ensuring the field of play is safe for athletes to optimizing concession stand flow for fans, our checklists cover every detail that contributes to a world-class event." }
        ]
    },
    Entertainment: {
        title: "The Business Case for Unforgettable Entertainment",
        points: [
            { icon: <TrendingUp />, title: "Inconsistent Guest Experience", description: "From the moment a ticket is scanned to the final encore, standardize every touchpoint to create a consistently high-quality and memorable experience for every guest." },
            { icon: <Shield />, title: "Safety Lapses & Liability", description: "Manage the unique safety challenges of entertainment venues, from ride maintenance in theme parks to crowd control at concerts, protecting both your guests and your business." },
            { icon: <Drama />, title: "Technical Failures & Show-Stoppers", description: "Ensure the show always goes on. Our checklists for projection, sound, and lighting systems prevent technical glitches that can ruin a performance and disappoint an audience." },
            { icon: <HandCoins />, title: "Revenue Leakage & Inefficiency", description: "Optimize everything from concession stand inventory and ticketing operations to staffing levels for peak and off-peak hours, maximizing profitability." }
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
            { icon: <TrendingUp />, title: "Eliminate Costly Customer Comebacks", description: "Our 'Post-Repair QC Test Drive' protocol ensures the problem is fixed right the first time, boosting customer satisfaction and protecting your profit margins." },
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
            { icon: <Users />, title: "Ensure Client Safety & Trust", description: "Our checklists for contraindication screening and equipment sterilization are critical for protecting your clients' safety and building deep, lasting trust." },
            { icon: <TrendingUp />, title: "Deliver Consistent, High-Quality Services", description: "Standardize every aspect of the client journey, from the initial consultation to the post-treatment follow-up, ensuring every client receives the same 5-star experience." },
            { icon: <HandCoins />, title: "Optimize Inventory & Reduce Waste", description: "Implement protocols for managing professional products and supplies, reducing spoilage and ensuring you always have what you need for your services." },
            { icon: <Shield />, title: "Enhance Hygiene & Sanitation", description: "In a post-COVID world, visible and verifiable hygiene is paramount. Our cleaning and sanitation checklists provide peace of mind for both your clients and your staff." }
        ]
    },
    Maritime: {
        title: "The Business Case for Maritime Excellence",
        points: [
            { icon: <Shield />, title: "Ensure ISPS & ISM Code Compliance", description: "Navigate complex international maritime regulations with confidence. Our checklists ensure you meet mandatory safety and security standards, preventing costly detentions." },
            { icon: <Anchor />, title: "Prevent Catastrophic Incidents", description: "From 'Vessel Mooring' to 'Bunkering Operations,' our checklists systematize high-risk procedures to prevent accidents, spills, and injuries." },
            { icon: <TrendingUp />, title: "Improve Turnaround Efficiency", description: "Standardize cargo operations, customs clearance, and port communications to minimize time in port and maximize vessel utilization." },
            { icon: <Recycle />, title: "Manage Environmental Obligations", description: "Implement auditable processes for 'Ballast Water Management' and MARPOL compliance, protecting the environment and avoiding heavy fines." }
        ]
    },
    Aviation: {
        title: "The Business Case for Aviation Safety & Efficiency",
        points: [
            { icon: <Shield />, title: "Eliminate Foreign Object Debris (FOD) Risks", description: "Implement a rigorous 'Airside Safety & FOD Prevention' program to protect aircraft engines from catastrophic and costly damage." },
            { icon: <TrendingUp />, title: "Optimize Ground Operations", description: "Streamline everything from passenger trolley management to specialized vehicle maintenance, improving on-time performance and operational flow." },
            { icon: <Users />, title: "Enhance Passenger Experience", description: "Ensure a clean, safe, and efficient terminal environment with checklists covering everything from restroom hygiene to passenger flow management." },
            { icon: <Recycle />, title: "Drive Sustainability Goals", description: "Implement and track waste management and energy-saving initiatives to meet your airport's ESG targets and reduce operational costs." }
        ]
    },
    ECommerce: {
        title: "The Business Case for E-Commerce Excellence",
        points: [
            { icon: <TrendingUp />, title: "Reduce Picking & Packing Errors", description: "Implement a systematic fulfillment process to ensure the right product gets to the right customer, every time, reducing costly returns." },
            { icon: <Shield />, title: "Prevent Shipping Chargebacks", description: "Our 'Master Data' checklists ensure product weights and dimensions are accurate from the start, preventing unexpected and expensive carrier fees." },
            { icon: "sl", title: "Improve Inventory Accuracy", description: "Master your inventory with checklists for cycle counting, GRN processes, and managing non-conforming stock, ensuring your website reflects what's actually on the shelf." },
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
    }
};

type PainPoints = typeof painPointsContent;
export type PainPointCategory = keyof PainPoints;
