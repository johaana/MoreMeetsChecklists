
import React from 'react';
import { HandCoins, Shield, TrendingUp, Users, Bus, Anchor, Trophy, Briefcase, FileCheck, Recycle, Drama, FerrisWheel, Mask, GalleryVertical, Guitar, VenetianMask, Gamepad, Rabbit, Video, Computer, Landmark, Sprout, Wind, Syringe, HeartPulse, BrainCircuit, Lock, KeyRound, Banknote, Bug, UserCog, Siren, Milestone, UserCheck, Stethoscope, Microscope, TestTube, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, CakeSlice, Truck, Pill, Store } from 'lucide-react';

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
    Retail: {
        title: "The Business Case for Retail Excellence",
        points: [
            { icon: <Shield />, title: "Inventory Shrinkage & Return Fraud", description: "Implement ironclad security protocols for high-value items, serial number tracking, and fitting room management to directly protect your bottom line from theft." },
            { icon: <Store />, title: "Fresh Food Spoilage & Wastage", description: "For supermarkets, our HACCP-aligned checklists for fresh departments ensure proper temperature control and stock rotation, drastically reducing spoilage and protecting margins." },
            { icon: <TrendingUp />, title: "Lost Sales Due to Stockouts or Inaccuracy", description: "Streamline your inventory management, from receiving and stocking to daily audits and master data accuracy, ensuring popular items are always available." },
            { icon: <Users />, title: "Inconsistent Customer Experience", description: "Standardize your sales process, visual merchandising, and technical support to ensure every shopper receives the same high-quality experience, building brand loyalty." }
        ]
    },
    "Entertainment & Events": {
        title: "The Business Case for Flawless Event Execution",
        points: [
            { icon: <Shield />, title: "Prevent Crowd Disasters & Stampedes", description: "Tragedies like the Salt Lake Stadium stampede result from poor egress management. Our checklists for crowd flow, barricade placement, and emergency exits are critical for public safety." },
            { icon: <TrendingUp />, title: "Avoid Show-Stopping Technical Failures", description: "Avoid event-killing disasters like the Indiana State Fair stage collapse. Our mandatory technical rehearsal, AV, and rigging checklists ensure every element works perfectly under pressure." },
            { icon: <HandCoins />, title: "Eliminate Vendor Miscommunication & Budget Overruns", description: "Our 'Sales-to-Ops Handover' and 'Critical Vendor Confirmation' checklists ensure what you promise the client is what gets delivered, preventing costly last-minute surprises and disputes." },
            { icon: <Users />, title: "Protect Your Reputation & Brand Image", description: "In the age of social media, any failure goes viral instantly. A systematic, checklist-driven approach is your best insurance against the negative press from safety lapses or vendor violations." }
        ]
    },
    "Corporate & Tech": {
        title: "The Business Case for a More Efficient & Secure Workplace",
        points: [
            { icon: <TrendingUp />, title: "Inefficient Use of Company Resources", description: "Our facility management checklists optimize everything from energy consumption to vendor contracts, cutting operational costs and improving your bottom line." },
            { icon: <Shield />, title: "Cybersecurity & Data Breach Risks", description: "Prevent data breaches with protocols for vendor network access, remote work device security, and proper employee offboarding, closing critical security gaps." },
            { icon: <Users />, title: "Failed Product Launches & Messy Events", description: "Execute flawless product launches and corporate events by managing every detail, from venue booking and AV checks to press kits and social media campaigns." },
            { icon: <HandCoins />, title: "Poor Employee Onboarding & Early Turnover", description: "Create a structured and welcoming onboarding experience. Our checklists ensure new hires have the access, information, and support they need to become productive members of the team from day one." }
        ]
    },
    "Industrial & Transport": {
        title: "The Business Case for a Safer, More Productive Plant",
        points: [
            { icon: <Shield />, title: "Prevent Life-Altering Accidents", description: "A single LOTO failure can lead to a fatality. Our life-saving protocols for Lock-Out Tag-Out, Permit-to-Work, and Confined Space Entry are non-negotiable systems to protect your workforce." },
            { icon: <TrendingUp />, title: "Eliminate Unplanned Downtime & Production Losses", description: "Shift from reactive repairs to data-driven predictive maintenance. Our checklists help you analyze sensor data, avert failures before they happen, and maximize machine uptime and profitability." },
            { icon: <HandCoins />, title: "Stop Costly Quality Control Failures & Rework", description: "Prevent defects at the source. Use robust protocols for raw material inspection, critical spares verification, and tool calibration to reduce waste, improve first-pass yield, and protect your margins." },
            { icon: <Users />, title: "Ensure Vendor & Contractor Safety Compliance", description: "Don't let a contractor's safety lapse become your liability. Our Contractor EHS Management checklist ensures all third-party vendors on your site adhere to your safety standards." }
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
    "Wellness & Beauty": {
        title: "The Business Case for a Premier Wellness Experience",
        points: [
            { icon: <Users />, title: "Ensure Client Safety & Build Trust", description: "A single adverse reaction can destroy your reputation. Our checklists for contraindication screening and equipment sterilization are critical for protecting your clients' safety and building deep, lasting trust." },
            { icon: <TrendingUp />, title: "Deliver Consistent, High-Quality Services", description: "Standardize every aspect of the client journey, from the initial consultation to the post-treatment follow-up, ensuring every client receives the same 5-star experience that justifies premium pricing." },
            { icon: <HandCoins />, title: "Optimize Inventory & Reduce Waste", description: "Implement protocols for managing professional products and supplies, reducing spoilage and ensuring you always have what you need for your services, directly impacting your bottom line." },
            { icon: <Shield />, title: "Enhance Hygiene & Sanitation", description: "In a post-COVID world, visible and verifiable hygiene is paramount. Our cleaning and sanitation checklists provide peace of mind for both your clients and your staff, making them feel safe and cared for." }
        ]
    },
    Agriculture: {
        title: "The Business Case for Modern Farm Operations",
        points: [
            { icon: <TrendingUp />, title: "Maximize Yield & Reduce Crop Loss", description: "Implement data-driven protocols for soil health, irrigation, and pest management to increase your yield and reduce losses from environmental factors." },
            { icon: <Shield />, title: "Ensure Food Safety & Traceability", description: "From farm to fork, our checklists help you comply with global food safety standards (GlobalG.A.P.), ensuring your produce is safe and traceable, opening up premium markets." },
            { icon: <HandCoins />, title: "Optimize Resource Use & Cut Costs", description: "Systematically manage your water, fertilizer, and energy consumption to reduce operational costs and improve the sustainability of your farm." },
            { icon: <Users />, title: "Improve Worker Safety & Farm Efficiency", description: "Protect your most valuable asset—your people. Implement safety protocols for heavy machinery operation, pesticide handling, and daily farm tasks to create a safer and more efficient work environment." }
        ]
    },
    "Specialized Production": {
        title: "The Business Case for Professional Production Workflow",
        points: [
            { icon: <HandCoins />, title: "Prevent Crippling Budget Overruns & Delays", description: "A $2M film was halted for failing to secure life rights. Our pre-production checklists ensure all legal clearances, contracts, and permits are secured before the camera even rolls, saving you from catastrophic financial loss." },
            { icon: <Shield />, title: "Ensure On-Set Safety & Avoid Liability", description: "Accidents on set can be career-ending. Our checklists for equipment handling, stunt coordination, and on-set safety (EHS) create a safer working environment and a clear audit trail of due diligence for your cast and crew." },
            { icon: <TrendingUp />, title: "Eliminate Costly Post-Production Errors", description: "Standardize your entire workflow, from daily call sheets and data management to post-production handovers, to prevent miscommunication, lost footage, and expensive rework." },
            { icon: <Video />, title: "Guarantee Technical Quality for Global Distribution", description: "Ensure your final product meets global distribution standards with checklists for equipment checks (SMPTE), data management, color grading, and final QC, preventing costly rejections from distributors." },
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
    }
};

type PainPoints = typeof painPointsContent;
export type PainPointCategory = keyof PainPoints;

