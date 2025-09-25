
import React from 'react';
import { HandCoins, Shield, TrendingUp, Users } from 'lucide-react';

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
            { icon: <HandCoins />, title: "Unproductive Meetings & Wasted Time", description: "Standardize your meeting prep, from board meetings to AGMs, ensuring every session is focused, productive, and achieves its objectives." },
            { icon: <Users />, title: "Failed Product Launches & Messy Events", description: "Execute flawless product launches and corporate events by managing every detail, from venue booking and AV checks to press kits and social media campaigns." },
            { icon: <Shield />, title: "Poor Employee Onboarding & Early Turnover", description: "Create a structured and welcoming onboarding experience. Our checklists ensure new hires have the access, information, and support they need to become productive members of the team from day one." }
        ]
    },
    Retail: {
        title: "Why This Checklist Is Your Key to Retail Dominance",
        points: [
            { icon: <Shield />, title: "Inventory Shrinkage & Theft", description: "Implement ironclad security protocols for high-value items, from dual-control vault procedures to fitting room management, directly protecting your bottom line." },
            { icon: <Users />, title: "Inconsistent Customer Experience", description: "Standardize your sales process, visual merchandising, and customer service to ensure every shopper receives the same high-quality experience, building brand loyalty." },
            { icon: <TrendingUp />, title: "Lost Sales Due to Stockouts", description: "Streamline your inventory management, from receiving and stocking to daily audits, ensuring popular items are always available and reducing lost sales opportunities." },
            { icon: <HandCoins />, title: "Poor Staff Performance & Product Knowledge", description: "Use our checklists for regular staff training on product features, sales techniques, and operational procedures, turning your team into expert brand ambassadors." }
        ]
    },
    Healthcare: {
         title: "Why This Checklist is Critical for Patient Safety & Compliance",
         points: [
            { icon: <Shield />, title: "Risk of Medication Errors", description: "Our pharmacy checklists enforce the 'Five Rights' of medication dispensing and include strict verification protocols to minimize the risk of dangerous errors and protect your patients." },
            { icon: <TrendingUp />, title: "Compliance & Audit Failures", description: "Navigate complex healthcare regulations with confidence. Our checklists for hospitals and labs ensure you are always prepared for audits from bodies like NABH, JCI, and NABL, covering everything from infection control to documentation." },
            { icon: <Users />, title: "Patient Data & Confidentiality Breaches", description: "Implement robust protocols for handling patient information, from admission to billing, ensuring HIPAA/data privacy compliance and building patient trust." },
            { icon: <HandCoins />, title: "Operational Inefficiencies & Delays in Care", description: "Standardize critical workflows in your ER, OT, and diagnostic labs. This reduces bottlenecks, minimizes errors, and ensures patients receive timely, high-quality care." }
         ]
    },
     Education: {
         title: "Why This Checklist is Essential for a Safe & Modern Campus",
         points: [
            { icon: <Shield />, title: "Student Safety & Security Risks", description: "Implement a robust safety framework covering everything from daily campus patrols and visitor verification to student dismissal and emergency drills, ensuring a secure environment for students and staff." },
            { icon: <TrendingUp />, title: "Liability & Compliance Issues", description: "Proactively manage risks by ensuring all safety equipment is functional, playgrounds are hazard-free, and emergency procedures are regularly practiced, protecting your institution from legal and financial liability." },
            { icon: <HandCoins />, title: "Operational Chaos & Inefficiency", description: "Standardize daily operations, from opening procedures to classroom safety checks, freeing up administrative time to focus on educational outcomes rather than firefighting daily issues." },
            { icon: <Users />, title: "Negative Parent Perception", description: "Demonstrate a clear commitment to safety and organization. A well-run, secure campus builds trust and confidence with parents, a key factor in school choice and reputation." }
         ]
    },
};
