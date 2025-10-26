

import React from 'react';
import { CookingPot, HardHat, Hospital, Lock, Shield, Search, Briefcase, Home, Building, Leaf, FileText } from 'lucide-react';

export type IndividualChecklist = {
    id: string;
    title: string;
    priceINR: number;
    paymentId: string;
    category: "Restaurant" | "Healthcare" | "Manufacturing" | "Retail" | "Education" | "Marketing" | "Startup" | "Corporate";
    description: string;
    longDescription: string;
    icon: React.ReactElement;
    relatedPackId: string;
    whoIsItFor: string[];
    painPoints: { title: string; description: string }[];
    tasks: { id: string; description: string; priority: 'High' | 'Medium' | 'Low'; riskLevel: 'High' | 'Medium' | 'Low'; proof: string; location: string; }[];
};

export const individualChecklists: IndividualChecklist[] = [
    {
        id: 'corporate-office-security',
        title: "Corporate Office Opening/Closing Security Protocol",
        priceINR: 1299,
        paymentId: "pl_ROLjNNiQa8G8XJ",
        category: "Corporate",
        icon: <Shield />,
        description: "An essential daily checklist to ensure your office is secure, energy-efficient, and ready for the next business day.",
        longDescription: "This checklist provides a systematic protocol for opening and closing a corporate office. It covers everything from disabling/enabling security alarms and checking access points to ensuring energy conservation by switching off non-essential equipment. Implementing this SOP reduces the risk of security breaches, prevents energy waste, and creates a safe and prepared environment for employees.",
        relatedPackId: "facility_management_blueprint",
        whoIsItFor: ["Facility Managers", "Admin Heads", "Office Managers", "Security Supervisors"],
        painPoints: [
            {
                title: "Prevent Overnight Security Lapses",
                description: "Eliminate the risk of doors being left unlocked or alarms not being set. A simple documented error, like the one that led to the 2019 WeWork mass key-card failure, highlights the need for robust physical security SOPs."
            },
            {
                title: "Reduce Energy Waste & Costs",
                description: "Creates a verifiable process to ensure all non-essential lights, computers, and HVAC systems are turned off, significantly lowering utility bills."
            },
            {
                title: "Standardize Daily Operations",
                description: "Empowers any authorized staff member to securely open and close the office, removing dependency on a single person and ensuring consistency."
            }
        ],
        tasks: [
            { id: 'COS-O-01', description: "[Opening] Deactivate the main security alarm system and log the entry time.", priority: 'High', riskLevel: 'High', proof: 'Security System Log', location: 'Entrance' },
            { id: 'COS-O-02', description: "[Opening] Conduct a walkthrough to check for any signs of overnight disturbance or security issues.", priority: 'High', riskLevel: 'High', proof: 'Walkthrough Log', location: 'Entire Office' },
            { id: 'COS-O-03', description: "[Opening] Turn on all necessary lights, HVAC systems, and office equipment.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Entire Office' },
            { id: 'COS-O-04', description: "[Opening] Unlock all required internal doors and meeting rooms.", priority: 'Medium', riskLevel: 'Medium', proof: 'Physical Check', location: 'Internal Areas' },
            { id: 'COS-C-01', description: "[Closing] Ensure all employees and visitors have left the premises.", priority: 'High', riskLevel: 'High', proof: 'Headcount/Sweep', location: 'Entire Office' },
            { id: 'COS-C-02', description: "[Closing] Turn off all non-essential lights, monitors, and office equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Entire Office' },
            { id: 'COS-C-03', description: "[Closing] Check and lock all windows, internal office doors, and server room doors.", priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Perimeter/Internal' },
            { id: 'COS-C-04', description: "[Closing] Secure all sensitive documents and clear desks as per clean desk policy.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Audit', location: 'Workstations' },
            { id: 'COS-C-05', description: "[Closing] Activate the main security alarm system and log the exit time.", priority: 'High', riskLevel: 'High', proof: 'Security System Log', location: 'Exit' },
        ]
    },
    {
        id: 'new-employee-onboarding-legal',
        title: "New Employee Onboarding (Legal Focus)",
        priceINR: 1999,
        paymentId: "pl_ROLnfbmEpZzgZZ",
        category: "Corporate",
        icon: <Briefcase />,
        description: "A legally-focused checklist to ensure every new hire is onboarded correctly, minimizing future compliance risks and disputes.",
        longDescription: "A flawed onboarding process can expose your company to significant legal risks down the line. This checklist ensures every critical legal and compliance step is covered when hiring a new employee. It includes verification of employment contracts, NDAs, statutory form submissions, and background checks, creating a robust, auditable record that protects your business from day one.",
        relatedPackId: "corporate_legal_compliance_starter_kit",
        whoIsItFor: ["HR Managers", "Founders", "COOs", "Admin Heads"],
        painPoints: [
            {
                title: "Prevent Future IP & Contract Disputes",
                description: "Ensures critical documents like IP assignment clauses are signed on day one. The landmark Oracle vs. Google lawsuit, which hinged on intellectual property, proves the multi-billion dollar importance of getting this right from the start."
            },
            {
                title: "Ensure Statutory Compliance",
                description: "Provides a clear process for collecting and filing all legally required government forms (tax, social security, etc.), avoiding penalties for non-compliance."
            },
            {
                title: "Create an Auditable Record",
                description: "Builds a clear, consistent, and verifiable onboarding file for every employee, which is crucial for due diligence, audits, or in the event of a legal challenge."
            }
        ],
        tasks: [
            { id: 'NEO-01', description: "Ensure a signed offer letter detailing position, compensation, and start date is in the employee's file.", priority: 'High', riskLevel: 'High', proof: 'Signed Offer Letter', location: 'HR File' },
            { id: 'NEO-02', description: "Verify the employment contract is signed, including clauses for confidentiality, IP assignment, and non-compete.", priority: 'High', riskLevel: 'High', proof: 'Signed Employment Contract', location: 'HR File' },
            { id: 'NEO-03', description: "Complete and file all required statutory forms (e.g., PF, ESI, Tax Declarations).", priority: 'High', riskLevel: 'High', proof: 'Filed Forms', location: 'HR File' },
            { id: 'NEO-04', description: "Ensure the employee has acknowledged receipt of the company handbook and key policies (e.g., Code of Conduct, Anti-Harassment).", priority: 'High', riskLevel: 'Medium', proof: 'Acknowledgement Form', location: 'HR File' },
            { id: 'NEO-05', description: "Conduct and document background and reference checks as per company policy.", priority: 'High', riskLevel: 'High', proof: 'Background Check Report', location: 'HR File' },
            { id: 'NEO-06', description: "Issue and log all company assets (laptop, phone, access cards) provided to the employee.", priority: 'High', riskLevel: 'Medium', proof: 'Asset Issuance Form', location: 'IT/Admin File' },
            { id: 'NEO-07', description: "Add the new employee to the payroll and relevant insurance policies.", priority: 'High', riskLevel: 'Medium', proof: 'System Entry Confirmation', location: 'Finance/HR' }
        ]
    },
    {
        id: 'esg-sustainability-audit',
        title: "ESG & Sustainability Audit (Office)",
        priceINR: 1299,
        paymentId: "pl_ROLjNNiQa8G8XJ",
        category: "Corporate",
        icon: <Leaf />,
        description: "An actionable checklist for offices to measure and improve their environmental footprint, focusing on energy, water, and waste.",
        longDescription: "This checklist provides a framework for any office to conduct an internal ESG and sustainability audit. It helps you identify key areas for improvement, from reducing energy consumption and managing waste streams to promoting sustainable procurement. This is the perfect starting point for any company looking to build a more environmentally responsible workplace.",
        relatedPackId: "facility_management_blueprint",
        whoIsItFor: ["Facility Managers", "Admin Heads", "HR Managers", "Founders"],
        painPoints: [
            {
                title: "Reduce Utility Costs",
                description: "Identify and eliminate energy and water wastage through systematic audits of lighting, HVAC, and plumbing, leading to direct cost savings."
            },
            {
                title: "Enhance Brand Reputation",
                description: "Demonstrate a tangible commitment to sustainability, which can improve your brand image for customers, employees, and investors."
            },
            {
                title: "Improve Employee Engagement",
                description: "Involve employees in sustainability initiatives like recycling programs, creating a more positive and purpose-driven company culture."
            }
        ],
        tasks: [
            { id: 'ESG-E-01', description: "Audit lighting: Identify all non-LED lights and create a replacement plan.", priority: 'High', riskLevel: 'Low', proof: 'Lighting Audit Report', location: 'Office-wide' },
            { id: 'ESG-E-02', description: "Review HVAC settings and schedules. Ensure they are optimized for occupancy hours.", priority: 'High', riskLevel: 'Medium', proof: 'HVAC Schedule', location: 'Facility Office' },
            { id: 'ESG-W-01', description: "Audit all waste bins to check for proper segregation of wet, dry, and recyclable waste.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Audit Report', location: 'Office-wide' },
            { id: 'ESG-W-02', description: "Track monthly waste generation and set a target for reduction.", priority: 'Medium', riskLevel: 'Low', proof: 'Waste Log', location: 'Facility Office' },
            { id: 'ESG-P-01', description: "Review procurement policy to prioritize vendors with sustainable practices and recycled products.", priority: 'Medium', riskLevel: 'Low', proof: 'Procurement Policy Document', location: 'Admin Office' },
            { id: 'ESG-P-02', description: "Implement a 'no single-use plastic' policy in the office pantry.", priority: 'High', riskLevel: 'Low', proof: 'Policy Communication', location: 'Pantry' },
        ]
    },
    {
        id: 'surgical-safety',
        title: "WHO Surgical Safety Checklist",
        priceINR: 1999,
        paymentId: "pl_ROLnfbmEpZzgZZ",
        category: "Healthcare",
        icon: <FileText />,
        description: "A JCI & NABH-aligned checklist based on the WHO's life-saving protocol to prevent 'never events' in the operating room.",
        longDescription: "Wrong-site, wrong-procedure, and wrong-patient surgeries are catastrophic but preventable failures. This checklist operationalizes the globally recognized World Health Organization (WHO) Surgical Safety protocol. It enforces a mandatory 'Time Out' before incision, where the entire surgical team—surgeons, anesthetists, and nurses—verbally confirm the patient's identity, the surgical site, and the procedure. Implementing this is a foundational requirement for JCI and NABH accreditation and is proven to significantly reduce surgical complications and mortality.",
        relatedPackId: "healthcare_and_hospital_operations",
        whoIsItFor: ["Hospital COOs", "Chief Medical Officers", "Heads of Surgery", "Quality Managers"],
        painPoints: [
            {
                title: "Prevent Catastrophic Surgical Errors",
                description: "Eliminates the communication gaps that lead to wrong-site or wrong-patient surgeries, like the infamous Rhode Island Hospital case. This forces a final, verbal team confirmation, preventing 'never events'."
            },
            {
                title: "Meet JCI/NABH Accreditation Standards",
                description: "Provides a clear, documented system that fulfills a core patient safety requirement for all major hospital accreditations."
            },
            {
                title: "Reduce Post-Operative Complications",
                description: "Studies in The New England Journal of Medicine show that implementing this simple checklist dramatically reduces infection rates and mortality by improving teamwork."
            }
        ],
        tasks: [
            { id: 'SSC-01', description: "Before induction of anesthesia ('Sign In'): Confirm patient identity, site, procedure, and consent.", priority: 'High', riskLevel: 'High', proof: 'Signed Consent Form', location: 'Operating Room' },
            { id: 'SSC-02', description: "Before induction of anesthesia: Check if the surgical site is marked.", priority: 'High', riskLevel: 'High', proof: 'Visual Confirmation', location: 'Operating Room' },
            { id: 'SSC-03', description: "Before skin incision ('Time Out'): All team members introduce themselves by name and role.", priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation', location: 'Operating Room' },
            { id: 'SSC-04', description: "Before skin incision: Surgeon, anesthesia professional, and nurse verbally confirm patient, site, and procedure.", priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation', location: 'Operating Room' },
            { id: 'SSC-05', description: "Before patient leaves room ('Sign Out'): Nurse verbally confirms the name of the procedure recorded, that instrument/sponge counts are correct, and any equipment problems to be addressed.", priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation', location: 'Operating Room' }
        ]
    }
];

export type IndividualChecklistStub = Omit<IndividualChecklist, 'longDescription' | 'whoIsItFor' | 'painPoints'>;




