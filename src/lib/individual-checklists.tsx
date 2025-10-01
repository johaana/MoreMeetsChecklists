
import React from 'react';
import { CookingPot, HardHat, Hospital, Lock, Shield } from 'lucide-react';

export type IndividualChecklist = {
    id: string;
    title: string;
    priceINR: number;
    paymentId: string;
    category: "Restaurant" | "Healthcare" | "Manufacturing" | "Retail" | "Education";
    description: string;
    longDescription: string;
    icon: React.ReactElement;
    relatedPackId: string;
    whoIsItFor: string[];
    painPoints: { title: string; description: string }[];
};

export const individualChecklists: IndividualChecklist[] = [
    {
        id: 'haccp-kitchen-opening',
        title: "Kitchen Opening Checklist (HACCP Focus)",
        priceINR: 1299,
        paymentId: "pl_ROLjNNiQa8G8XJ",
        category: "Restaurant",
        icon: <CookingPot />,
        description: "The critical daily checklist to ensure your kitchen is safe, sanitary, and ready for service, aligned with HACCP principles.",
        longDescription: "This checklist is the foundation of a safe food service operation. It goes beyond simple cleaning tasks to cover critical control points like equipment temperature verification, sanitizer concentration checks, and staff hygiene readiness. By using this checklist daily, you create a verifiable record of due diligence, protecting your business from compliance issues and your customers from foodborne illness.",
        relatedPackId: "restaurant_operations_checklist",
        whoIsItFor: ["Head Chefs", "Restaurant Owners", "Kitchen Managers", "Food Safety Officers"],
        painPoints: [
            {
                title: "Prevent Food Safety Violations",
                description: "Ensures all critical temperatures, sanitation, and hygiene standards are met before the first meal is even prepped, preventing failed health inspections."
            },
            {
                title: "Reduce Costly Food Spoilage",
                description: "By verifying refrigerator and freezer temperatures at the start of each day, you can catch equipment failures early and prevent the loss of thousands in inventory."
            },
            {
                title: "Standardize Your Kitchen Operations",
                description: "Empower your team with a clear, step-by-step process, ensuring that safety standards are consistently met, regardless of who is opening the kitchen."
            }
        ]
    },
    {
        id: 'surgical-safety',
        title: "Surgical Safety Checklist (WHO Aligned)",
        priceINR: 1999,
        paymentId: "pl_ROLnfbmEpZzgZZ",
        category: "Healthcare",
        icon: <Hospital />,
        description: "A life-saving, three-phase protocol (Sign In, Time Out, Sign Out) based on WHO guidelines to prevent surgical errors.",
        longDescription: "In the high-stakes environment of an operating room, there is no margin for error. This checklist operationalizes the globally recognized WHO Surgical Safety guidelines into a clear, actionable protocol for your team. It covers the critical pre-operative 'Sign In', the pre-incision 'Time Out', and the post-operative 'Sign Out', ensuring that every member of the surgical team is aligned on patient identity, surgical site, and procedural details. Implementing this checklist is one of the most effective single actions a hospital can take to improve patient safety and reduce surgical complications.",
        relatedPackId: "healthcare_compliance_suite",
        whoIsItFor: ["Hospital COOs", "Heads of Quality & Compliance", "Chief Medical Officers", "OT In-charges"],
        painPoints: [
            {
                title: "Prevent 'Never Events'",
                description: "Systematically eliminates risks of wrong-patient, wrong-site, or wrong-procedure surgeries, protecting both patients and your hospital's reputation."
            },
            {
                title: "Improve Team Communication",
                description: "The 'Time Out' phase mandates a pause for the entire surgical team to verbally confirm critical details, breaking down silos and fostering a culture of shared responsibility."
            },
            {
                title: "Ensure Audit-Ready Compliance",
                description: "Provides clear, documented evidence of adherence to NABH, JCI, and other international patient safety standards, making audits smoother and less stressful."
            }
        ]
    },
    {
        id: 'lock-out-tag-out',
        title: "Lock-Out Tag-Out (LOTO) Procedure",
        priceINR: 1999,
        paymentId: "pl_ROLnfbmEpZzgZZ",
        category: "Manufacturing",
        icon: <Lock />,
        description: "A crucial safety protocol to ensure machinery is properly de-energized and cannot be restarted during maintenance or repair.",
        longDescription: "The unexpected startup of machinery during service is one of the most severe industrial hazards. This checklist provides a step-by-step procedure for isolating and de-energizing equipment, covering the identification of energy sources, application of locks and tags, verification of zero-energy state, and the safe re-energizing process. This is not just a best practice; it's a life-saving system that is essential for OSHA/EHS compliance and protecting your most valuable asset: your employees.",
        relatedPackId: "manufacturing_plant_pack",
        whoIsItFor: ["Plant Heads", "EHS Officers", "Maintenance Supervisors", "Production Managers"],
        painPoints: [
            {
                title: "Prevent Fatal Accidents",
                description: "Provides a verifiable, systematic process to eliminate the risk of electrocution, crushing, or other severe injuries to maintenance staff."
            },
            {
                title: "Ensure Regulatory Compliance",
                description: "Adhering to a formal LOTO procedure is a mandatory requirement by most occupational safety bodies. This checklist ensures you are compliant."
            },
            {
                title: "Create a Culture of Safety",
                description: "By implementing a non-negotiable safety protocol like LOTO, you send a powerful message to your entire workforce that safety comes first."
            }
        ]
    },
    {
        id: 'retail-loss-prevention',
        title: "Retail Security & Loss Prevention",
        priceINR: 1299,
        paymentId: "pl_ROLjNNiQa8G8XJ",
        category: "Retail",
        icon: <Shield />,
        description: "A proactive checklist to deter theft, reduce inventory shrinkage, and protect your store's bottom line.",
        longDescription: "Inventory shrinkage can be a silent killer of profitability. This checklist provides a multi-layered security framework for your retail store. It covers daily operational checks for CCTV systems and EAS gates, protocols for high-value merchandise, fitting room monitoring procedures to prevent tag removal, and secure opening/closing procedures. It turns your entire staff into active participants in loss prevention, directly protecting your profits.",
        relatedPackId: "retail_operations_pack",
        whoIsItFor: ["Retail Store Owners", "Heads of Loss Prevention", "Store Managers", "District Managers"],
        painPoints: [
            {
                title: "Reduce Inventory Shrinkage",
                description: "Implement daily, actionable steps to deter both external and internal theft, directly increasing your net profit."
            },
            {
                title: "Secure High-Value Items",
                description: "Provides clear protocols for managing and displaying expensive merchandise, from locked cabinets to display-based security."
            },
            {
                title: "Enhance Staff Awareness",
                description: "Trains your staff to spot and deter potential theft in a non-confrontational manner, creating a more secure shopping environment."
            }
        ]
    },
    {
        id: 'campus-security',
        title: "Campus Security & Patrolling",
        priceINR: 1299,
        paymentId: "pl_ROLjNNiQa8G8XJ",
        category: "Education",
        icon: <HardHat />,
        description: "A foundational checklist for ensuring a safe campus, from gate management and visitor verification to perimeter patrols.",
        longDescription: "For any educational institution, the safety of students is the number one priority. This checklist provides a comprehensive framework for your daily security operations. It covers the essential duties of security personnel, including access control at gates, a strict protocol for visitor and vendor management, scheduled patrols of the campus perimeter and buildings, and CCTV monitoring. Implementing this system demonstrates a clear and robust commitment to safety, providing peace of mind to parents, staff, and students.",
        relatedPackId: "education_sector_pack",
        whoIsItFor: ["School Principals", "Head of Administration", "Security Supervisors", "School Trustees"],
        painPoints: [
            {
                title: "Prevent Unauthorized Access",
                description: "Implements a strict, verifiable protocol for managing every person who enters the campus, drastically reducing the risk of intruders."
            },
            {
                title: "Build Parent Trust",
                description: "A visible and systematic approach to security is one of the most powerful ways to build confidence and trust with parents."
            },
            {
                title: "Improve Emergency Preparedness",
                description: "A well-patrolled and monitored campus is the first line of defense in identifying potential threats or safety hazards before they become incidents."
            }
        ]
    }
];

export type IndividualChecklistStub = Omit<IndividualChecklist, 'longDescription' | 'whoIsItFor' | 'painPoints'>;
