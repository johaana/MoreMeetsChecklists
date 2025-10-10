
import React from 'react';
import { HandCoins, Shield, TrendingUp, Users, Bus, Anchor, Trophy, Briefcase, FileCheck, Recycle } from 'lucide-react';

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
    Personal: {
        title: "The Business Case for an Organized Life",
        points: [
            { icon: <TrendingUp />, title: "Reduce Stress & Mental Overload", description: "Stop trying to remember everything. Our personal checklists for travel and moving turn chaotic events into calm, manageable processes, letting you focus on what matters." },
            { icon: <HandCoins />, title: "Avoid Costly Mistakes", description: "Forgetting to cancel a subscription before moving or packing critical medication in the wrong bag can be expensive. Our lists ensure you don't miss the small details that have big consequences." },
            { icon: <Users />, title: "Ensure Peace of Mind for Loved Ones", description: "Our Pet Sitter checklist ensures your furry family members are cared for exactly as you'd wish, covering everything from feeding schedules to emergency contacts." },
            { icon: <Shield />, title: "Save Time & Effort", description: "We've done the thinking for you. Use our expert-curated lists to streamline complex personal projects, saving you hours of planning and worry." }
        ]
    },
    Automotive: {
        title: "The Business Case for a More Profitable Workshop",
        points: [
            { icon: <TrendingUp />, title: "Eliminate Costly Customer Comebacks", description: "Our 'Post-Repair QC Test Drive' protocol ensures the customer's original problem is actually solved, drastically reducing free rework and boosting your first-time-fix rate." },
            { icon: <Shield />, title: "Prevent Damage to Modern Vehicles", description: "Using the wrong tool on a new EV or luxury car can cause thousands in damage. Our checklists enforce the use of authorized, specialized tools for high-value jobs." },
            { icon: <Users />, title: "Increase Customer Trust & Transparency", description: "A structured, multi-point inspection process provides customers with a clear, professional report of their vehicle's health, justifying repair recommendations and building long-term trust." },
            { icon: <HandCoins />, title: "Improve Technician Efficiency", description: "Standardized workflows for common jobs, from diagnostics to final inspection, reduce wasted time and allow your technicians to complete more jobs per day, increasing billable hours." }
        ]
    },
    "Real Estate": {
        title: "The Business Case for Smarter Property Management",
        points: [
            { icon: <TrendingUp />, title: "Minimize Costly Vacancy Periods", description: "Our 'Rental Property Turnaround' checklist streamlines the entire process from move-out inspection to repairs and cleaning, getting your property 'rent-ready' in record time." },
            { icon: <Shield />, title: "Reduce Legal & Compliance Risks", description: "Navigate the complexities of lease agreements, tenant onboarding, and property handovers with structured checklists that ensure all legal and contractual obligations are met." },
            { icon: <HandCoins />, title: "Protect Your Asset Value", description: "Implement a preventive maintenance schedule for critical building systems. Our checklists help you proactively manage your property, avoiding costly emergency repairs and preserving its long-term value." },
            { icon: <Users />, title: "Improve Tenant Relations", description: "A professional, documented process for everything from maintenance requests to move-out inspections reduces disputes and builds a positive relationship with tenants, leading to longer tenancies." }
        ]
    },
    Compliance: {
        title: "The Business Case for Proactive Compliance",
        points: [
            { icon: <FileCheck />, title: "Pass Audits with Confidence", description: "Our checklists are built around major global standards (ISO, ESG, etc.). They turn audit preparation from a last-minute scramble into a continuous, controlled process." },
            { icon: <TrendingUp />, title: "Move from Reactive to Preventive", description: "Implement a structured system for document control, internal audits, and Corrective/Preventive Actions (CAPA) to identify and fix issues before they become major non-conformities." },
            { icon: <Briefcase />, title: "Simplify Complex Regulations", description: "We distill complex regulations into clear, actionable tasks for your team, making it easier to implement and sustain compliance across your entire organization." },
            { icon: <Shield />, title: "Reduce Risk of Fines & Reputational Damage", description: "Demonstrate due diligence and build a robust, auditable trail of compliance activities, protecting your organization from costly fines and the damage of a failed audit." }
        ]
    },
    Wellness: {
        title: "The Business Case for Excellence in Wellness",
        points: [
            { icon: <Users />, title: "Ensure Client Safety & Trust", description: "Our 'Guest Consultation & Contraindication' checklists ensure you understand each client's needs and limitations, preventing injuries and building deep trust." },
            { icon: <Shield />, title: "Guarantee Hygiene & Sanitation", description: "From therapy rooms to gym equipment, our protocols ensure your facility meets the highest standards of cleanliness, protecting your members and your reputation." },
            { icon: <TrendingUp />, title: "Deliver Consistent, High-Quality Service", description: "Standardize new member onboarding, personal trainer performance, and therapy protocols to ensure every client receives the same outstanding experience, every time." },
            { icon: <HandCoins />, title: "Optimize Operations & Reduce Waste", description: "Implement efficient systems for managing product inventory, linens, and class scheduling, reducing operational costs and improving profitability." }
        ]
    },
    Maritime: {
        title: "The Business Case for Maritime Safety & Compliance",
        points: [
            { icon: <Shield />, title: "Meet Demanding ISPS & SOLAS Standards", description: "Navigate complex international regulations with confidence. Our checklists cover vessel security, berthing, cargo operations, and more to ensure you are always audit-ready." },
            { icon: <Anchor />, title: "Prevent Catastrophic Safety Failures", description: "From 'Bunkering Operations' to 'Ballast Water Management,' our protocols are designed to mitigate the highest-risk operations in a maritime environment, protecting crew, cargo, and vessel." },
            { icon: <TrendingUp />, title: "Improve Operational Efficiency", description: "Standardize procedures for vessel mooring, cargo discharge, and port communication to reduce turnaround times and optimize port calls." },
            { icon: <Users />, title: "Ensure Crew Welfare & Compliance (MLC)", description: "Implement checklists that help you meet Maritime Labour Convention standards, ensuring proper crew welfare, safety, and documentation." }
        ]
    },
    'E-commerce': {
        title: "The Business Case for E-commerce Excellence",
        points: [
            { icon: <TrendingUp />, title: "Maximize Conversion Rates", description: "A slow website or broken checkout costs you money. Our 'Website Performance & UX Audit' helps you find and fix the friction points that are killing your sales." },
            { icon: <Shield />, title: "Prevent Costly Shipping Errors & Fraud", description: "From 'Master Data Management' to 'Return Fraud Prevention,' our checklists secure your backend operations, preventing chargebacks and inventory loss." },
            { icon: <Users />, title: "Enhance Customer Experience", description: "Standardize your customer service responses, manage online reviews effectively, and ensure your 'Order Fulfillment' process is fast and accurate, building customer loyalty." },
            { icon: <HandCoins />, title: "Optimize Marketing Spend", description: "Use our 'SEO Audit' and 'PPC Campaign Launch' checklists to ensure your marketing budget is spent effectively, attracting the right customers and maximizing ROI." }
        ]
    },
    Agency: {
        title: "The Business Case for Agency Efficiency & Growth",
        points: [
            { icon: <TrendingUp />, title: "Deliver Consistent, High-Quality Client Work", description: "Standardize your core services—from 'New Client Onboarding' to 'Campaign Reporting'—ensuring every client receives the same level of excellence." },
            { icon: <HandCoins />, title: "Improve Profitability & Project Management", description: "Implement checklists for project kick-offs, budget tracking, and scope management to prevent 'scope creep' and ensure projects are delivered on time and on budget." },
            { icon: <Users />, title: "Streamline Client Communication", description: "Use our protocols for client updates, performance reviews, and issue escalation to build trust and create a smooth, professional client relationship." },
            { icon: <Shield />, title: "Reduce Errors & Scale with Confidence", description: "Codify your agency's best practices into repeatable processes, reducing reliance on individual 'heroes' and making it easier to train new employees and scale your operations." }
        ]
    }
};
