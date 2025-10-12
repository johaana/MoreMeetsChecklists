
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket, Wifi, UserCheck, BarChart3, Link, BrainCircuit, Bot, Syringe, DatabaseZap, Megaphone, Siren, Lock, KeyRound, Users, Banknote, Webcam, Bug, UserCog, PackageCheck, Ambulance, FileWarning, Milestone, DoorClosed, CircleDollarSign, Wind, Thermometer, UserCog2, Key, Router, Pallet, Watch, Drama, Barcode, Stethoscope, SyringeIcon, HeartPulse, Microscope, Bus, BookOpen, Car, Drill, Spray, FileLock, Projector, Popcorn, Ticket, Lamp, Video, LandPlot, Trash, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, Mask, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask } from "lucide-react";

export type Checklist = {
    title: string;
    department: string;
    frequency: string;
    role: string;
    summary: string;
    tasks: {
        id: string;
        description: string;
        priority: 'High' | 'Medium' | 'Low';
        riskLevel: 'High' | 'Medium' | 'Low';
        proof: string;
        location: string;
    }[];
};

export type PreviewScenario = {
    title: string;
    description: string;
    tasks: {
        id: string;
        description: string;
        sourceChecklist: string;
        priority: 'High' | 'Medium' | 'Low';
    }[];
};


export type PremiumPack = {
    id: string;
    title: string;
    priceUSD: number;
    priceINR: number;
    paymentId: string;
    category: "Hospitality" | "Corporate" | "Retail" | "Healthcare" | "Education" | "Manufacturing" | "Events" | "Personal" | "Automotive" | "Real Estate" | "Compliance" | "Wellness" | "Maritime" | "E-commerce" | "Agency" | "Aviation" | "Entertainment" | "Logistics" | "Construction" | "Film Production" | "OTT Platform";
    description: string;
    icon: React.ReactElement;
    badgeText?: string;
    badgeVariant?: "default" | "secondary" | "destructive" | "outline" | "accent";
    sampleItems: string[];
    previewScenario?: PreviewScenario;
    checklists: Checklist[];
    globalStandards?: {
        title: string;
        standards: { name: string; description: string; }[];
    }
}


export const premiumPacks: PremiumPack[] = [
    {
        id: 'hospitality_excellence_suite',
        title: "Hotel & Resort Operations Checklist",
        priceUSD: 99.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Hospitality",
        description: "For GMs & Dept. Heads. A one-time purchase for a complete toolkit covering operations, finance, and leadership.",
        icon: <Building className="w-8 h-8 text-primary" />,
        badgeText: "Most Popular",
        badgeVariant: "default" as const,
        sampleItems: [
            "NEW: Master hotel finance with 'Annual Budgeting' and 'P&L Review' checklists.",
            "NEW: Implement a 'Managerial Performance Review' and 'New Hire Onboarding' system.",
            "NEW: Includes a 'Brand Standards Audit' and 'Hotel Pre-Opening' checklist.",
            "NEW: Manage your brand's online presence with an 'Online Review & Reputation Management' checklist."
        ],
        previewScenario: {
            title: "Executing a Flawless 5-Star Guest Check-In",
            description: "This scenario shows how different departments work together to create a seamless guest arrival experience, from front desk to housekeeping. Here are a few key tasks from different checklists that make it happen:",
            tasks: [
                { id: 'FO-CI-002', description: "Verify the guest's identity with a valid government-issued ID proof.", sourceChecklist: "Guest Check-In Process", priority: 'High' },
                { id: 'HK-DRC-018', description: "Perform final inspection of the room before leaving.", sourceChecklist: "Daily Room Cleaning", priority: 'High' },
                { id: 'FO-DO-010', description: "Prepare detailed shift handover notes for the next team, highlighting any pending issues.", sourceChecklist: "Reception Daily Operations", priority: 'High' },
                { id: 'SEC-CSM-001', description: "Check that all CCTV cameras are operational and recording.", sourceChecklist: "CCTV & Security Monitoring", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Hospitality Standards",
            standards: [
                { name: "Health & Safety", description: "HACCP, ISO 22000 for food safety; NFPA for fire safety; local health department regulations." },
                { name: "Guest Experience", description: "ISO 9001 for quality management; star-rating criteria; brand-specific Standard Operating Procedures." },
                { name: "Security & Data", description: "PCI DSS for payment card security; GDPR/CCPA for guest data privacy." },
                { name: "Environmental", description: "ISO 14001 for environmental management; LEED for green building standards." }
            ]
        },
        checklists: [
            {
                title: "🏨 Hotel Pre-Opening Checklist",
                department: "Management",
                frequency: "Project-Based",
                role: "General Manager",
                summary: "A master checklist for launching a new hotel, covering everything from construction handover and licensing to staff recruitment and marketing launch.",
                tasks: [
                    { id: 'PRE-OPEN-01', description: "Secure all necessary operational licenses and permits (food, liquor, building).", priority: 'High', riskLevel: 'High', proof: 'License Certificates', location: 'Admin Office' },
                    { id: 'PRE-OPEN-02', description: "Finalize and sign contracts with all key vendors (linen, F&B supplies, security).", priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'Admin Office' },
                    { id: 'PRE-OPEN-03', description: "Recruit and train all Heads of Department.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'PRE-OPEN-04', description: "Conduct a full 'snagging' walkthrough of the property to identify and fix construction defects.", priority: 'High', riskLevel: 'High', proof: 'Snag List', location: 'Entire Property' },
                    { id: 'PRE-OPEN-05', description: "Implement and test all software systems (PMS, POS, Keycard System).", priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'IT/Admin' }
                ]
            },
            {
                title: "📊 Annual Budgeting & Forecasting",
                department: "Finance",
                frequency: "Annually/Quarterly",
                role: "Financial Controller",
                summary: "A strategic checklist for preparing the hotel's annual budget, focusing on revenue forecasting, departmental cost allocation, and capital expenditure planning.",
                tasks: [
                    { id: 'FIN-BUD-01', description: "Analyze previous year's performance and market trends to establish revenue targets.", priority: 'High', riskLevel: 'High', proof: 'Analysis Report', location: 'Finance Office' },
                    { id: 'FIN-BUD-02', description: "Collect and review budget proposals from all department heads.", priority: 'High', riskLevel: 'Medium', proof: 'Departmental Budgets', location: 'Finance Office' },
                    { id: 'FIN-BUD-03', description: "Prepare a consolidated master budget (P&L, Balance Sheet, Cash Flow).", priority: 'High', riskLevel: 'High', proof: 'Master Budget File', location: 'Finance Office' },
                    { id: 'FIN-BUD-04', description: "Present the final budget to ownership or the board for approval.", priority: 'High', riskLevel: 'High', proof: 'Presentation Deck', location: 'Board Room' },
                    { id: 'FIN-BUD-05', description: "Develop departmental KPIs based on the approved budget.", priority: 'High', riskLevel: 'Medium', proof: 'KPI Document', location: 'Finance Office' }
                ]
            },
            {
                title: "📈 Monthly P&L Review & Cost Control",
                department: "Management",
                frequency: "Monthly",
                role: "General Manager",
                summary: "A checklist for the monthly meeting with department heads to review financial performance against budget, analyze variances, and implement corrective cost-saving measures.",
                tasks: [
                    { id: 'FIN-PNL-01', description: "Distribute departmental P&L statements to all HODs 3 days before the meeting.", priority: 'High', riskLevel: 'Medium', proof: 'Email Log', location: 'Finance Office' },
                    { id: 'FIN-PNL-02', description: "In the meeting, each HOD must explain significant variances in their department's revenue and costs.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Conference Room' },
                    { id: 'FIN-PNL-03', description: "Identify and agree upon specific action items for cost control for the upcoming month.", priority: 'High', riskLevel: 'High', proof: 'Action Plan', location: 'Conference Room' },
                    { id: 'FIN-PNL-04', description: "Update the rolling forecast based on the month's performance and future bookings.", priority: 'High', riskLevel: 'Medium', proof: 'Updated Forecast', location: 'Finance Office' },
                    { id: 'FIN-PNL-05', description: "Follow up on action items from the previous month's meeting.", priority: 'Medium', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Conference Room' }
                ]
            },
            {
                title: "⭐ Brand Standards & Guest Experience Audit",
                department: "Quality/Management",
                frequency: "Quarterly",
                role: "Quality Manager",
                summary: "An internal audit to ensure the hotel is consistently meeting the brand's specific standards for service, cleanliness, and guest interaction.",
                tasks: [
                    { id: 'BRAND-01', description: "Audit the check-in process against brand standards for greeting, speed, and efficiency.", priority: 'High', riskLevel: 'Medium', proof: 'Audit Scorecard', location: 'Front Desk' },
                    { id: 'BRAND-02', description: "Inspect a random selection of guest rooms for compliance with brand standards on linen quality, amenity placement, and cleanliness.", priority: 'High', riskLevel: 'High', proof: 'Room Inspection Form', location: 'Guest Rooms' },
                    { id: 'BRAND-03', description: "Review guest feedback from all channels (surveys, online reviews) and identify recurring themes related to brand standards.", priority: 'High', riskLevel: 'High', proof: 'Feedback Analysis Report', location: 'Office' },
                    { id: 'BRAND-04', description: "Create and implement a corrective action plan for any identified gaps in brand standards.", priority: 'High', riskLevel: 'High', proof: 'Action Plan', location: 'Office' },
                    { id: 'BRAND-05', description: "Conduct a mystery shopper audit to get an unbiased view of the guest experience.", priority: 'High', riskLevel: 'Medium', proof: 'Mystery Shopper Report', location: 'Various' }
                ]
            },
            {
                title: "🧑‍🏫 New Hire Onboarding & Training Plan",
                department: "HR",
                frequency: "Per New Hire",
                role: "HR Manager",
                summary: "A structured 30-day plan to ensure new employees are properly onboarded, trained, and integrated into the hotel's culture and operational standards.",
                tasks: [
                    { id: 'HR-ONBOARD-01', description: "Day 1: Conduct company orientation, issue handbook, and complete all legal paperwork.", priority: 'High', riskLevel: 'Medium', proof: 'Onboarding Checklist', location: 'HR Office' },
                    { id: 'HR-ONBOARD-02', description: "Week 1: Assign a 'buddy' or mentor and complete departmental orientation and initial job-specific training.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Department' },
                    { id: 'HR-ONBOARD-03', description: "Week 2: Schedule brief introductory meetings with key department heads.", priority: 'Medium', riskLevel: 'Low', proof: 'Meeting Schedule', location: 'Various' },
                    { id: 'HR-ONBOARD-04', description: "Day 30: Conduct a 30-day check-in meeting to discuss progress, answer questions, and get feedback.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'HR Office' },
                    { id: 'HR-ONBOARD-05', description: "Ensure all system access and necessary equipment (e.g., uniform, keycard) are provided on day one.", priority: 'High', riskLevel: 'Medium', proof: 'Asset Issuance Form', location: 'HR/IT' }
                ]
            },
            {
                title: "👔 Managerial Performance Review",
                department: "HR/Management",
                frequency: "Quarterly/Annually",
                role: "General Manager",
                summary: "A framework for conducting fair and effective performance reviews for department heads, focusing on KPIs, leadership skills, and goal setting.",
                tasks: [
                    { id: 'HR-PERF-001', description: "Review the manager's performance against their pre-set KPIs (e.g., departmental profit, guest satisfaction scores, employee turnover).", priority: 'High', riskLevel: 'Medium', proof: 'KPI Dashboard', location: 'Office' },
                    { id: 'HR-PERF-002', description: "Gather 360-degree feedback from the manager's direct reports and peers.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Summary', location: 'Office' },
                    { id: 'HR-PERF-003', description: "Discuss strengths, areas for development, and set clear, measurable goals for the next review period.", priority: 'High', riskLevel: 'Medium', proof: 'Review Form', location: 'Office' },
                    { id: 'HR-PERF-004', description: "Identify and agree upon any necessary training or professional development plans.", priority: 'Medium', riskLevel: 'Low', proof: 'Development Plan', location: 'Office' },
                    { id: 'HR-PERF-005', description: "Document the entire review conversation and have both parties sign the review form.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Review Form', location: 'Office' }
                ]
            },
            {
                title: "🗣️ Online Review & Reputation Management",
                department: "Marketing/Guest Relations",
                frequency: "Daily",
                role: "Marketing Manager",
                summary: "A daily protocol to monitor and manage the hotel's online reputation across all major review platforms and social media.",
                tasks: [
                    { id: 'ORM-001', description: "Monitor all major review platforms (TripAdvisor, Google Reviews, OTAs) for new reviews.", priority: 'High', riskLevel: 'Medium', proof: 'Monitoring Tool Screenshot', location: 'Office' },
                    { id: 'ORM-002', description: "Respond to all negative reviews within 24 hours with empathy and a clear action plan.", priority: 'High', riskLevel: 'High', proof: 'Response Log', location: 'Office' },
                    { id: 'ORM-003', description: "Respond to a selection of positive reviews to show engagement.", priority: 'Medium', riskLevel: 'Low', proof: 'Response Log', location: 'Office' },
                    { id: 'ORM-004', description: "Escalate recurring negative themes to the relevant department head for root cause analysis.", priority: 'High', riskLevel: 'High', proof: 'Escalation Email', location: 'Office' },
                    { id: 'ORM-005', description: "Share positive guest feedback and 'shout-outs' with the team to boost morale.", priority: 'Medium', riskLevel: 'Low', proof: 'Internal Communication', location: 'Office' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Housekeeping/Maintenance",
                frequency: "Weekly",
                role: "Housekeeping Manager",
                summary: "A proactive checklist for preventing and managing pest infestations, crucial for guest satisfaction and health standards.",
                tasks: [
                    { id: 'PEST-001', description: "Inspect F&B outlets, kitchens, and garbage areas for signs of pest activity (droppings, gnaw marks).", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Back of House' },
                    { id: 'PEST-002', description: "Check that all external doors and windows have proper seals to prevent pest entry.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Perimeter' },
                    { id: 'PEST-003', description: "Review the pest control vendor's service reports and ensure all recommendations are actioned.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Review', location: 'Admin Office' },
                    { id: 'PEST-004', description: "Ensure drains and grease traps are cleaned regularly to eliminate breeding grounds.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Schedule Log', location: 'Kitchen' },
                    { id: 'PEST-005', description: "Train staff on how to identify and report pest sightings immediately.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Record', location: 'All Departments' }
                ]
            },
        ]
    },
    {
        id: 'facility_management_blueprint',
        title: "Facility Management Checklist",
        priceUSD: 169.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Corporate",
        description: "The complete playbook for facility managers to ensure a safe, compliant, and efficient workplace environment across multiple locations.",
        icon: <Building2 className="w-8 h-8 text-primary" />,
        badgeText: "Best for Corporate",
        badgeVariant: "accent" as const,
        sampleItems: [
            "NEW: Includes 'Quarterly Business Review' and 'Annual Strategic Planning' frameworks.",
            "NEW: Added a 'New Office Build-Out & Project Management' checklist for expansions.",
            "NEW: Includes a 'Corporate Social Responsibility (CSR) Program Management' framework.",
            "NEW: Added a 'Contractor EHS Management & Onboarding' protocol to ensure vendor safety."
        ],
        previewScenario: {
            title: "Managing a Critical Power Outage",
            description: "This scenario shows how various facility management checklists work in concert to ensure business continuity during an unexpected power failure.",
            tasks: [
                { id: 'ELS-002', description: "Daily DG set and Fuel Management", sourceChecklist: "Electrical Systems", priority: 'High' },
                { id: 'WMS-001', description: "Test generator and power backup systems", sourceChecklist: "Weekly Maintenance & Safety", priority: 'High' },
                { id: 'QAT-006', description: "Execute emergency response and BCP drills", sourceChecklist: "Quarterly & Annual Tasks", priority: 'High' },
                { id: 'FSE-007', description: "Test Emergency Lights and Power Backup", sourceChecklist: "Fire Safety & Emergency", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Facility Management Standards",
            standards: [
                { name: "Safety", description: "OSHA (US), NEBOSH/IOSH (UK) for workplace safety; NFPA for fire safety." },
                { name: "Quality & Process", description: "ISO 9001 for quality management; ISO 41001 for Facility Management standards." },
                { name: "Security", description: "ISO 27001 for information security (IT/Data); Physical access control best practices." },
                { name: "Energy & Environment", description: "ISO 50001 for energy management; ISO 14001 for environmental impact." }
            ]
        },
        checklists: [
             {
                title: "🏗️ New Office Build-Out & Project Management",
                department: "Projects/Admin",
                frequency: "Per Project",
                role: "Project Manager",
                summary: "A master checklist for managing the complex process of building out a new office space, from site selection to final handover.",
                tasks: [
                    { id: 'BUILD-001', description: "Develop a detailed project budget and timeline.", priority: 'High', riskLevel: 'High', proof: 'Project Plan', location: 'Office' },
                    { id: 'BUILD-002', description: "Select and contract with architects, contractors, and other vendors.", priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'Office' },
                    { id: 'BUILD-003', description: "Conduct weekly progress meetings with all stakeholders and track milestones against the plan.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Site/Office' },
                    { id: 'BUILD-004', description: "Manage the procurement and installation of furniture, fixtures, and equipment (FF&E).", priority: 'High', riskLevel: 'Medium', proof: 'Procurement Log', location: 'Office' },
                    { id: 'BUILD-005', description: "Perform a final 'snagging' list and ensure all defects are rectified before final payment and handover.", priority: 'High', riskLevel: 'High', proof: 'Snag List', location: 'New Site' },
                ]
            },
            {
                title: "🤝 Corporate Social Responsibility (CSR) Program Management",
                department: "CSR/HR",
                frequency: "Quarterly/Annually",
                role: "CSR Manager",
                summary: "A framework for planning, executing, and reporting on the company's social and community engagement initiatives.",
                tasks: [
                    { id: 'CSR-001', description: "Align CSR initiatives with the company's values and business goals.", priority: 'High', riskLevel: 'Medium', proof: 'Strategy Document', location: 'Office' },
                    { id: 'CSR-002', description: "Identify and vet potential NGO or community partners.", priority: 'High', riskLevel: 'Medium', proof: 'Partner Assessment Report', location: 'Office' },
                    { id: 'CSR-003', description: "Develop a budget and resource plan for each CSR activity.", priority: 'High', riskLevel: 'Medium', proof: 'Budget Plan', location: 'Office' },
                    { id: 'CSR-004', description: "Track key metrics (e.g., volunteer hours, funds raised, community impact) for each program.", priority: 'High', riskLevel: 'Medium', proof: 'Impact Report', location: 'Office' },
                    { id: 'CSR-005', description: "Prepare an annual CSR report for internal and external stakeholders.", priority: 'High', riskLevel: 'Medium', proof: 'CSR Report', location: 'Office' },
                ]
            },
            {
                title: "📊 Quarterly Business Review (QBR) Framework",
                department: "Management",
                frequency: "Quarterly",
                role: "Head of Facilities",
                summary: "A structured agenda to conduct a quarterly review of facility operations, focusing on performance against KPIs, budget variance, and strategic goals.",
                tasks: [
                    { id: 'QBR-01', description: "Review performance against key KPIs (e.g., uptime, energy cost per sq ft, ticket resolution time).", priority: 'High', riskLevel: 'Medium', proof: 'KPI Dashboard', location: 'Meeting' },
                    { id: 'QBR-02', description: "Analyze budget vs. actual spend for the quarter and explain variances.", priority: 'High', riskLevel: 'High', proof: 'Financial Report', location: 'Meeting' },
                    { id: 'QBR-03', description: "Present a summary of major incidents or achievements from the quarter.", priority: 'High', riskLevel: 'Medium', proof: 'Presentation', location: 'Meeting' },
                    { id: 'QBR-04', description: "Set strategic priorities and objectives for the upcoming quarter.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Meeting' },
                    { id: 'QBR-05', description: "Review vendor performance and contracts up for renewal.", priority: 'Medium', riskLevel: 'Medium', proof: 'Vendor Performance Report', location: 'Meeting' }
                ]
            },
            {
                title: "🎯 Annual Strategic Planning & Objective Setting",
                department: "Management",
                frequency: "Annually",
                role: "Head of Facilities",
                summary: "A checklist to guide the annual strategic planning process for the facility management department, aligning its goals with the broader company objectives.",
                tasks: [
                    { id: 'STRAT-01', description: "Review the company's overall strategic goals for the upcoming year.", priority: 'High', riskLevel: 'Medium', proof: 'Company Strategy Doc', location: 'Office' },
                    { id: 'STRAT-02', description: "Conduct a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for the facilities department.", priority: 'High', riskLevel: 'Medium', proof: 'SWOT Analysis Document', location: 'Office' },
                    { id: 'STRAT-03', description: "Define clear, measurable objectives (e.g., reduce energy costs by 10%, achieve ISO 41001 certification).", priority: 'High', riskLevel: 'High', proof: 'Objectives List', location: 'Office' },
                    { id: 'STRAT-04', description: "Develop a high-level budget and resource plan to support the defined objectives.", priority: 'High', riskLevel: 'High', proof: 'Budget Plan', location: 'Office' },
                    { id: 'STRAT-05', description: "Create a roadmap of key initiatives and projects for the year.", priority: 'High', riskLevel: 'Medium', proof: 'Roadmap Document', location: 'Office' }
                ]
            },
            {
                title: "🏢 Corporate Asset Lifecycle Management",
                department: "Admin/Finance",
                frequency: "Ongoing",
                role: "Asset Manager",
                summary: "A checklist to track and manage critical company assets (e.g., laptops, furniture, equipment) from procurement to disposal.",
                tasks: [
                    { id: 'ASSET-01', description: "Assign a unique asset tag and log all new assets into the central asset register.", priority: 'High', riskLevel: 'Medium', proof: 'Asset Register', location: 'Office' },
                    { id: 'ASSET-02', description: "Conduct a physical audit of all assets on a semi-annual basis to verify existence and condition.", priority: 'High', riskLevel: 'Medium', proof: 'Audit Report', location: 'Company-wide' },
                    { id: 'ASSET-03', description: "Implement a process for managing the transfer of assets between employees or departments.", priority: 'Medium', riskLevel: 'Low', proof: 'Transfer Form', location: 'Office' },
                    { id: 'ASSET-04', description: "Follow a formal disposal process for retired assets, including data wiping for IT equipment and documenting disposal certificates.", priority: 'High', riskLevel: 'High', proof: 'Disposal Certificate', location: 'Office' },
                    { id: 'ASSET-05', description: "Calculate and record asset depreciation on a regular basis.", priority: 'High', riskLevel: 'Medium', proof: 'Accounting Records', location: 'Finance Office' }
                ]
            },
            {
                title: "🧑‍⚖️ Employee Disciplinary Action Protocol",
                department: "HR",
                frequency: "Per Incident",
                role: "HR Manager",
                summary: "A legally sound checklist to ensure a fair and consistent process for managing employee disciplinary issues, from verbal warnings to termination.",
                tasks: [
                    { id: 'HR-DISC-01', description: "Document the specific policy violation and gather all relevant evidence (e.g., emails, witness statements).", priority: 'High', riskLevel: 'High', proof: 'Investigation File', location: 'HR Office' },
                    { id: 'HR-DISC-02', description: "Conduct a formal meeting with the employee, ensuring a witness is present, and clearly explain the issue.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'HR Office' },
                    { id: 'HR-DISC-03', description: "Issue the appropriate level of warning (verbal, written, final) and have the employee sign an acknowledgment.", priority: 'High', riskLevel: 'High', proof: 'Signed Warning Letter', location: 'HR Office' },
                    { id: 'HR-DISC-04', description: "Clearly document the required improvement and the consequences of further violations.", priority: 'High', riskLevel: 'High', proof: 'Performance Improvement Plan', location: 'HR Office' },
                    { id: 'HR-DISC-05', description: "Ensure the entire process is documented and stored securely in the employee's file.", priority: 'High', riskLevel: 'High', proof: 'Employee File Audit', location: 'HR Office' }
                ]
            },
            {
                title: "✔️ Daily Site Operations",
                department: "Operations",
                frequency: "Daily",
                role: "Facility Coordinator",
                summary: "A comprehensive walkthrough to ensure the facility is ready for employees, covering lighting, HVAC, restrooms, and access control systems.",
                tasks: [
                    { id: 'DSO-001', description: "Validate Housekeeping Service Delivery", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'DSO-002', description: "Check Front Desk Operations", priority: 'Medium', riskLevel: 'Low', proof: 'Log / Register', location: 'Front Office' },
                    { id: 'DSO-003', description: "Inspect general office area", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Office Area' },
                    { id: 'DSO-004', description: "Check and verify meeting rooms", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Meeting Rooms' },
                    { id: 'DSO-005', description: "Verify Cafeteria / Pantry Readiness", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Cafeteria' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Admin",
                frequency: "Weekly",
                role: "Facility Coordinator",
                summary: "A proactive checklist for preventing and managing pest infestations in a corporate environment.",
                tasks: [
                    { id: 'PEST-CORP-001', description: "Inspect pantry, cafeteria, and waste disposal areas for signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Common Areas' },
                    { id: 'PEST-CORP-002', description: "Ensure all food waste bins are covered and emptied daily.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'PEST-CORP-003', description: "Check building perimeter, including doors and windows, for potential pest entry points and seal them.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Perimeter' },
                    { id: 'PEST-CORP-004', description: "Review the pest control vendor's service reports and ensure recommendations are implemented.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Analysis', location: 'Facility Office' },
                    { id: 'PEST-CORP-005', description: "Educate employees on clean desk policies to avoid leaving food out overnight.", priority: 'Medium', riskLevel: 'Low', proof: 'Internal Communication', location: 'Office-wide' }
                ]
            }
        ]
    },
    {
        id: 'restaurant_operations_checklist',
        title: "Restaurant Operations Checklist",
        priceUSD: 89.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Hospitality",
        description: "The essential HACCP-based toolkit for restaurant owners focused on safety, quality, and efficiency.",
        icon: <Utensils className="w-8 h-8 text-primary" />,
        badgeText: "Essential for F&B",
        badgeVariant: "accent" as const,
        sampleItems: [
            "Master food safety with a HACCP-based 'Kitchen Opening' checklist.",
            "Implement a zero-error 'Food Receiving & Storage' protocol.",
            "NEW: Includes a 'New Site Feasibility Study' for expansion planning.",
            "NEW: Boost sales with a 'Weekly Sales & Revenue Meeting Agenda'."
        ],
        previewScenario: {
            title: "Ensuring Food Safety from Kitchen to Customer",
            description: "This scenario highlights how multiple checklists work together to maintain food safety and prevent foodborne illness, a critical process for any restaurant.",
            tasks: [
                { id: 'CK-FRS-001', description: "Check temperature of refrigerated/frozen delivery truck upon arrival.", sourceChecklist: "Food Receiving & Storage Protocol", priority: 'High' },
                { id: 'CK-KO-002', description: "Check temperatures of all refrigerators and freezers; log readings.", sourceChecklist: "Kitchen Opening Checklist (HACCP Focus)", priority: 'High' },
                { id: 'CK-HLC-002', description: "Use a calibrated thermometer to check internal temperatures of food items on the line.", sourceChecklist: "Daily HACCP & Line Check", priority: 'High' },
                { id: 'CK-SPH-005', description: "Staff wash hands thoroughly at designated times (e.g., after touching face, before starting new task).", sourceChecklist: "Staff Personal Hygiene Checklist", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Food & Safety Standards",
            standards: [
                { name: "Food Safety", description: "HACCP principles, ISO 22000, local regulations (FDA, FSSAI, EFSA)." },
                { name: "Quality Management", description: "ISO 9001 for consistent service and quality." },
                { name: "Occupational Health", description: "OSHA and local workplace safety standards for kitchen environments." }
            ]
        },
        checklists: [
            {
                title: "📍 New Site/Location Feasibility Study",
                department: "Management/Strategy",
                frequency: "Per Potential Site",
                role: "Owner/Director",
                summary: "A structured framework to de-risk the process of selecting a new location, ensuring it aligns with brand, operational, and financial requirements.",
                tasks: [
                    { id: 'FEAS-001', description: "Conduct a demographic analysis of the target area (e.g., population density, average income).", priority: 'High', riskLevel: 'High', proof: 'Demographic Report', location: 'Office' },
                    { id: 'FEAS-002', description: "Perform a competitive analysis: map all direct and indirect competitors within a 3km radius.", priority: 'High', riskLevel: 'High', proof: 'Competitor Map', location: 'Office' },
                    { id: 'FEAS-003', description: "Analyze foot traffic and visibility of the potential site at different times of day.", priority: 'High', riskLevel: 'High', proof: 'Foot Traffic Report', location: 'Site' },
                    { id: 'FEAS-004', description: "Create a preliminary financial projection (P&L) for the new site, including estimated rent, build-out costs, and revenue forecasts.", priority: 'High', riskLevel: 'High', proof: 'Financial Model', location: 'Office' },
                    { id: 'FEAS-005', description: "Verify zoning regulations and necessary permits for the proposed business type at the location.", priority: 'High', riskLevel: 'High', proof: 'Zoning Report', location: 'Office' },
                ]
            },
            {
                title: "📅 Weekly Sales & Revenue Meeting Agenda",
                department: "Management",
                frequency: "Weekly",
                role: "Restaurant Manager",
                summary: "A structured agenda to run effective weekly sales meetings that focus on analyzing data, recognizing performance, and planning for the week ahead.",
                tasks: [
                    { id: 'REST-MEETING-01', description: "Review previous week's sales performance against target (by day, by meal period).", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'REST-MEETING-02', description: "Recognize top-performing staff for sales, upselling, or positive customer mentions.", priority: 'Medium', riskLevel: 'Low', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'REST-MEETING-03', description: "Discuss top-selling and slow-moving menu items; plan for specials or 86-ing items.", priority: 'High', riskLevel: 'Medium', proof: 'POS Data Report', location: 'Meeting Room' },
                    { id: 'REST-MEETING-04', description: "Set sales focus and promotional strategy for the upcoming week (e.g., push a specific high-margin cocktail).", priority: 'High', riskLevel: 'Medium', proof: 'Action Plan', location: 'Meeting Room' },
                    { id: 'REST-MEETING-05', description: "Review customer feedback and online reviews from the past week.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Summary', location: 'Meeting Room' }
                ]
            },
            {
                title: "🍳 Kitchen Opening Checklist (HACCP Focus)",
                department: "F&B",
                frequency: "Daily",
                role: "Head Chef",
                summary: "A critical daily checklist to ensure the kitchen is safe, sanitary, and ready for service, focusing on temperature controls, sanitation, and equipment readiness as per HACCP guidelines.",
                tasks: [
                    { id: 'CK-KO-001', description: "Verify all surfaces (prep tables, cutting boards) are sanitized.", priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Kitchen' },
                    { id: 'CK-KO-002', description: "Check temperatures of all refrigerators and freezers; log readings.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Kitchen' },
                    { id: 'CK-KO-003', description: "Ensure handwashing stations are stocked with soap, paper towels, and hot water.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-KO-004', description: "Calibrate food thermometers using ice-water method.", priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Kitchen' },
                    { id: 'CK-KO-005', description: "Review prep list and conduct a quick check of yesterday's stored prep items for quality and date labels.", priority: 'Medium', riskLevel: 'Medium', proof: 'Prep List Sign-off', location: 'Walk-in' }
                ]
            },
            {
                title: "📦 Food Receiving & Storage Protocol",
                department: "F&B",
                frequency: "Daily",
                role: "Store Keeper",
                summary: "Manages the first critical control point in food safety. This checklist covers temperature checks, quality inspection, and FIFO storage principles for all incoming goods.",
                tasks: [
                    { id: 'CK-FRS-001', description: "Check temperature of refrigerated/frozen delivery truck upon arrival.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Area' },
                    { id: 'CK-FRS-002', description: "Inspect all incoming products for signs of spoilage, damage, or pest infestation.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Area' },
                    { id: 'CK-FRS-003', description: "Verify that deliveries match the purchase order and invoice.", priority: 'High', riskLevel: 'Medium', proof: 'Invoice Sign-off', location: 'Receiving Area' },
                    { id: 'CK-FRS-004', description: "Check 'use-by' or expiry dates of all items and reject any that are expired.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Area' },
                    { id: 'CK-FRS-005', description: "Move all cold/frozen items to their respective storage areas immediately.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Storage' }
                ]
            },
            {
                title: "🌡️ Daily HACCP & Line Check",
                department: "F&B",
                frequency: "Daily",
                role: "Sous Chef",
                summary: "An ongoing check during service to ensure food safety is maintained on the service line. It covers holding temperatures, staff hygiene, and prevention of cross-contamination.",
                tasks: [
                    { id: 'CK-HLC-001', description: "Check and log temperatures of all hot and cold holding units on the line every 2 hours.", priority: 'High', riskLevel: 'High', proof: 'Line Check Log', location: 'Service Line' },
                    { id: 'CK-HLC-002', description: "Use a calibrated thermometer to check internal temperatures of food items on the line.", priority: 'High', riskLevel: 'High', proof: 'Line Check Log', location: 'Service Line' },
                    { id: 'CK-HLC-003', description: "Ensure each station is stocked with sanitized utensils and separate cutting boards for raw/cooked food.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Service Line' },
                    { id: 'CK-HLC-004', description: "Verify sanitizer bucket concentrations are correct and test strips are available.", priority: 'High', riskLevel: 'Medium', proof: 'Sanitizer Log', location: 'Service Line' },
                    { id: 'CK-HLC-005', description: "Check that all staff are following proper hygiene practices (handwashing, glove use).", priority: 'High', riskLevel: 'High', proof: 'Visual Observation', location: 'Kitchen' }
                ]
            },
            {
                title: "🧽 Kitchen Closing & Cleaning Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Closing Chef",
                summary: "A detailed protocol for cleaning and shutting down the kitchen to ensure hygiene and safety. It covers food storage, equipment cleaning, surface sanitization, and waste disposal.",
                tasks: [
                    { id: 'CK-KCC-001', description: "Properly cool, cover, label, and store all leftover food.", priority: 'High', riskLevel: 'High', proof: 'Storage Log', location: 'Kitchen' },
                    { id: 'CK-KCC-002', description: "Turn off all cooking equipment (fryers, ovens, grills).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-KCC-003', description: "Clean and sanitize all food prep surfaces, cutting boards, and slicers.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'CK-KCC-004', description: "Empty and clean all fryers; filter oil as required.", priority: 'Medium', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'CK-KCC-005', description: "Sweep and mop all kitchen floors, including under equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' }
                ]
            },
            {
                title: "🍽️ Front of House Opening Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Restaurant Manager",
                summary: "Prepares the dining area for guests, ensuring cleanliness, correct table settings, and a welcoming ambiance.",
                tasks: [
                    { id: 'FOH-O-001', description: "Check cleanliness of dining room, tables, chairs, and floors.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-O-002', description: "Set tables with clean linen, polished cutlery, and glassware.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-O-003', description: "Review reservation list and plan table assignments.", priority: 'High', riskLevel: 'Medium', proof: 'Reservation System', location: 'Host Stand' },
                    { id: 'FOH-O-004', description: "Check that lighting and music levels create the desired ambiance.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-O-005', description: "Ensure restrooms are clean, stocked, and pleasant.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Log', location: 'Restrooms' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Manager",
                summary: "A proactive checklist for preventing and managing pest infestations, crucial for F&B hygiene standards.",
                tasks: [
                    { id: 'PEST-REST-001', description: "Inspect kitchen, storage, and dining areas for signs of pest activity (droppings, gnaw marks).", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Entire Restaurant' },
                    { id: 'PEST-REST-002', description: "Ensure all food containers are sealed and stored off the floor.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Storage/Kitchen' },
                    { id: 'PEST-REST-003', description: "Check that garbage and refuse areas are clean and bins are tightly covered.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Exterior/Waste Area' },
                    { id: 'PEST-REST-004', description: "Review pest control vendor reports and ensure all recommended actions are taken.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Review', location: 'Manager Office' },
                    { id: 'PEST-REST-005', description: "Check for and seal any potential pest entry points in walls, floors, or around pipes.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Entire Restaurant' }
                ]
            }
        ]
    },
    {
        id: 'healthcare_compliance_suite',
        title: "Healthcare & Hospital Checklist",
        priceUSD: 149.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Healthcare",
        description: "For Hospital COOs & Quality Heads. An NABH & JCI-aligned toolkit to ensure patient safety and compliance.",
        icon: <Hospital className="w-8 h-8 text-primary" />,
        sampleItems: [
            "NEW: Ensure secure 'Telemedicine Consultations' & audit 'LIS-HIS-EMR Data Integrity'.",
            "Prevent medication errors with a 'Look-Alike, Sound-Alike Drug' protocol.",
            "Ensure 'Critical Test Result Communication' is timely and logged.",
            "Master the 'High-Risk Patient Handover' to prevent information loss.",
            "NEW: Includes a 'CSSD Audit' and 'Unidentified Patient Intake' protocol."
        ],
        previewScenario: {
            title: "Preventing a Medication Error",
            description: "This scenario shows how multiple checklists work in tandem to create a robust system that prevents dangerous medication errors, a critical patient safety goal.",
            tasks: [
                { id: 'PH-PV-001', description: "Verify patient identity using at least two identifiers (e.g., name and MRN).", sourceChecklist: "Prescription Verification", priority: 'High' },
                { id: 'PH-PV-002', description: "Check prescription for legibility, completeness, and for any contraindications.", sourceChecklist: "Prescription Verification", priority: 'High' },
                { id: 'LASA-001', description: "For designated LASA drugs, store them in separate, labeled bins with 'TALL-man' lettering.", sourceChecklist: "Look-Alike, Sound-Alike Drug Protocol", priority: 'High' },
                { id: 'NUR-MA-002', description: "Cross-verify medication label against the patient's chart at the bedside before administration.", sourceChecklist: "Medication Administration", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Healthcare Standards",
            standards: [
                { name: "Clinical Quality", description: "JCI (Joint Commission International), NABH (India) for hospital accreditation." },
                { name: "Patient Safety", description: "WHO Surgical Safety Guidelines, protocols for medication safety and infection control." },
                { name: "Laboratory", description: "ISO 15189, NABL (India) for quality and competence in medical laboratories." },
                { name: "Data Privacy", description: "HIPAA (US), GDPR (EU), and local data protection laws for patient information." }
            ]
        },
        checklists: [
            {
                title: "💊 Prescription Verification & Dispensing",
                department: "Pharmacy",
                frequency: "Per Prescription",
                role: "Pharmacist",
                summary: "Ensures adherence to the 'Five Rights' of medication dispensing to prevent errors. Covers verification, labeling, and patient counseling.",
                tasks: [
                    { id: 'PH-PV-001', description: "Verify patient identity using at least two identifiers (e.g., name and MRN).", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Pharmacy' },
                    { id: 'PH-PV-002', description: "Check prescription for legibility, completeness, and for any contraindications.", priority: 'High', riskLevel: 'High', proof: 'Prescription Review', location: 'Pharmacy' },
                    { id: 'PH-PV-003', description: "Accurately dispense the correct medication, dosage, and quantity.", priority: 'High', riskLevel: 'High', proof: 'Dispensing Log', location: 'Pharmacy' },
                    { id: 'PH-PV-004', description: "Label the medication clearly with patient name, drug name, strength, and instructions.", priority: 'High', riskLevel: 'High', proof: 'Label Check', location: 'Pharmacy' },
                    { id: 'PH-PV-005', description: "Provide counseling to the patient or caregiver on how to take the medication.", priority: 'Medium', riskLevel: 'Medium', proof: 'Counseling Log', location: 'Pharmacy' }
                ]
            },
            {
                title: "💨 Central Sterile Services Department (CSSD) Audit",
                department: "Quality/Infection Control",
                frequency: "Weekly",
                role: "Quality Officer",
                summary: "Audits the sterilization process itself to prevent hospital-acquired infections from contaminated equipment.",
                tasks: [
                    { id: 'CSSD-001', description: "Check autoclave printouts to verify that cycles reached the required temperature, pressure, and duration.", priority: 'High', riskLevel: 'High', proof: 'Autoclave Log Review', location: 'CSSD' },
                    { id: 'CSSD-002', description: "Use biological indicators (spore tests) in a sample load to confirm sterilization effectiveness.", priority: 'High', riskLevel: 'High', proof: 'Biological Indicator Log', location: 'CSSD' },
                    { id: 'CSSD-003', description: "Test the water quality used for cleaning instruments to ensure it's free from contaminants.", priority: 'Medium', riskLevel: 'Medium', proof: 'Water Quality Report', location: 'CSSD' },
                    { id: 'CSSD-004', description: "Verify that sterilized packs are correctly labeled with sterilization date and expiry date.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Audit', location: 'CSSD' },
                    { id: 'CSSD-005', description: "Ensure physical separation between 'clean' and 'dirty' zones in the CSSD.", priority: 'High', riskLevel: 'High', proof: 'Layout Audit', location: 'CSSD' }
                ]
            },
            {
                title: "🛌 Patient Repositioning & Pressure Ulcer Prevention",
                department: "Nursing",
                frequency: "Per Shift",
                role: "Nurse",
                summary: "A bedside protocol to ensure at-risk patients are turned regularly, preventing painful and costly pressure ulcers.",
                tasks: [
                    { id: 'PU-PREV-001', description: "For at-risk patients, place a 'turning clock' or log sheet visibly at the bedside.", priority: 'High', riskLevel: 'High', proof: 'Log Sheet Presence', location: 'Bedside' },
                    { id: 'PU-PREV-002', description: "The nurse or aide who repositions the patient must initial the log every two hours.", priority: 'High', riskLevel: 'High', proof: 'Signed Log', location: 'Bedside' },
                    { id: 'PU-PREV-003', description: "During handover, the outgoing and incoming nurse must verbally confirm the patient's repositioning schedule.", priority: 'High', riskLevel: 'Medium', proof: 'Handover Confirmation', location: 'Bedside' },
                    { id: 'PU-PREV-004', description: "Inspect patient's skin for redness or early signs of pressure sores during each turn.", priority: 'High', riskLevel: 'High', proof: 'Skin Assessment Log', location: 'Bedside' },
                    { id: 'PU-PREV-005', description: "Ensure pressure-relieving mattresses or cushions are used for high-risk patients.", priority: 'High', riskLevel: 'High', proof: 'Equipment Check', location: 'Bedside' }
                ]
            },
            {
                title: "❓ Unidentified Patient Intake Protocol (ER)",
                department: "Emergency",
                frequency: "Per Unidentified Patient",
                role: "ER Nurse/Doctor",
                summary: "A critical intake checklist for non-responsive patients to ensure life-saving information is not missed.",
                tasks: [
                    { id: 'UNID-001', description: "As part of the primary survey, physically check both wrists and neck for medical alert jewelry.", priority: 'High', riskLevel: 'High', proof: 'Primary Survey Form', location: 'ER Bay' },
                    { id: 'UNID-002', description: "Search wallet or purse specifically for a 'medical information' card.", priority: 'High', riskLevel: 'High', proof: 'Patient Belongings Log', location: 'ER Bay' },
                    { id: 'UNID-003', description: "Assign a 'John/Jane Doe' temporary name and unique MRN in the system immediately.", priority: 'High', riskLevel: 'Medium', proof: 'System Entry', location: 'ER Registration' },
                    { id: 'UNID-004', description: "Take a digital photo of the patient for internal identification purposes as soon as feasible.", priority: 'Medium', riskLevel: 'Medium', proof: 'EMR Photo', location: 'ER Bay' },
                    { id: 'UNID-005', description: "Log all patient belongings and store them securely.", priority: 'High', riskLevel: 'Medium', proof: 'Belongings Log', location: 'ER' }
                ]
            },
            {
                title: "🚪 Patient Discharge & Follow-up Scheduling Protocol",
                department: "Admin/Nursing",
                frequency: "Per Discharge",
                role: "Discharge Nurse",
                summary: "Ensures no patient leaves without a clear follow-up plan, preventing readmissions and missed care.",
                tasks: [
                    { id: 'DISCH-FU-001', description: "The patient's next follow-up appointment must be scheduled before they leave the clinic/hospital.", priority: 'High', riskLevel: 'High', proof: 'Appointment System Log', location: 'Discharge Lounge/Room' },
                    { id: 'DISCH-FU-002', description: "If an appointment cannot be made, the reason must be documented (e.g., 'Patient prefers to call later').", priority: 'High', riskLevel: 'Medium', proof: 'Discharge Form Note', location: 'Discharge Lounge/Room' },
                    { id: 'DISCH-FU-003', description: "The final discharge summary handed to the patient must have the date and time of the next appointment printed clearly on it.", priority: 'High', riskLevel: 'Medium', proof: 'Printed Summary', location: 'Discharge Lounge/Room' },
                    { id: 'DISCH-FU-004', description: "Verbally confirm the follow-up details with the patient and their caregiver.", priority: 'High', riskLevel: 'Medium', proof: 'Verbal Confirmation Log', location: 'Discharge Lounge/Room' },
                    { id: 'DISCH-FU-005', description: "Provide clear, written instructions on medication, diet, and activity restrictions.", priority: 'High', riskLevel: 'High', proof: 'Discharge Packet', location: 'Bedside' }
                ]
            },
            {
                title: "💊 Look-Alike, Sound-Alike (LASA) Drug Protocol",
                department: "Pharmacy/Quality",
                frequency: "Ongoing",
                role: "Pharmacist",
                summary: "A critical safety checklist to prevent medication errors caused by confusing drug names or packaging.",
                tasks: [
                    { id: 'LASA-001', description: "For designated LASA drugs, store them in separate, distinctively labeled bins with 'TALL-man' lettering (e.g., hydrOXYzine vs. hydrALAZINE).", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Pharmacy' },
                    { id: 'LASA-002', description: "Require a 'two-person sign-off' for the dispensing of any LASA drug.", priority: 'High', riskLevel: 'High', proof: 'Dispensing Log', location: 'Pharmacy' },
                    { id: 'LASA-003', description: "Place visual alerts in the EMR/pharmacy system to flag LASA drugs during order entry.", priority: 'High', riskLevel: 'Medium', proof: 'System Screenshot', location: 'EMR/Pharmacy System' },
                    { id: 'LASA-004', description: "Conduct a monthly audit of LASA drug storage and labeling.", priority: 'Medium', riskLevel: 'Medium', proof: 'Audit Log', location: 'Pharmacy' },
                    { id: 'LASA-005', description: "Include LASA drug awareness in the regular training for all pharmacy and nursing staff.", priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' }
                ]
            },
            {
                title: "💉 Medication Administration (Nursing)",
                department: "Nursing",
                frequency: "Per Administration",
                role: "Nurse",
                summary: "The final safety check before a patient receives medication. Ensures the right patient gets the right drug at the right time at the bedside.",
                tasks: [
                    { id: 'NUR-MA-001', description: "Verify the 'Five Rights': Right Patient, Right Drug, Right Dose, Right Route, Right Time.", priority: 'High', riskLevel: 'High', proof: 'Chart Review', location: 'Bedside' },
                    { id: 'NUR-MA-002', description: "Cross-verify medication label against the patient's chart at the bedside before administration.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Bedside' },
                    { id: 'NUR-MA-003', description: "Document the administration immediately in the Medication Administration Record (MAR).", priority: 'High', riskLevel: 'Medium', proof: 'MAR Entry', location: 'Bedside' },
                    { id: 'NUR-MA-004', description: "Monitor the patient for any adverse reactions after administration.", priority: 'High', riskLevel: 'High', proof: 'Patient Observation', location: 'Bedside' },
                    { id: 'NUR-MA-005', description: "Educate the patient about the medication they are receiving.", priority: 'Medium', riskLevel: 'Low', proof: 'Verbal Confirmation', location: 'Bedside' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Housekeeping/Facilities",
                frequency: "Weekly",
                role: "Facility Manager",
                summary: "A proactive checklist for preventing and managing pest infestations in a sensitive healthcare environment.",
                tasks: [
                    { id: 'PEST-HEALTH-001', description: "Inspect patient rooms, kitchens, and waste disposal areas for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Areas' },
                    { id: 'PEST-HEALTH-002', description: "Ensure food in pantries and kitchens is stored in sealed, pest-proof containers.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'F&B Areas' },
                    { id: 'PEST-HEALTH-003', description: "Check that all biomedical and general waste is managed and disposed of according to a strict schedule.", priority: 'High', riskLevel: 'High', proof: 'Waste Management Log', location: 'Waste Area' },
                    { id: 'PEST-HEALTH-004', description: "Review reports from the pest control vendor and ensure all recommended actions are implemented and documented.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Action Tracker', location: 'Facility Office' },
                    { id: 'PEST-HEALTH-005', description: "Seal any identified cracks or openings in walls, floors, and around pipes to prevent pest entry.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Work Order', location: 'All Areas' }
                ]
            }
        ]
    },
    {
        id: 'education_sector_pack',
        title: "School & Campus Operations Checklist",
        priceUSD: 79.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Education",
        description: "For School Principals and Admin Heads. A comprehensive toolkit for ensuring student safety, facility management, and operational excellence.",
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        sampleItems: [
            "NEW: Includes a 'Student Digital Safety Audit' and 'Off-Campus Field Trip' protocol.",
            "Prevent unauthorized access with a 'Non-Standard Student Pickup Verification' protocol.",
            "Manage medical emergencies with a 'Student Medical Emergency Response' checklist.",
            "Ensure a safe campus with 'Playground Safety' and 'Bus Safety' checks."
        ],
        previewScenario: {
            title: "Executing a Safe Student Dismissal",
            description: "A chaotic dismissal is a major safety and reputational risk. This scenario shows how checklists ensure every child is handed over safely and accounted for.",
            tasks: [
                { id: 'NSPU-001', description: "Any change to a student's regular pickup plan must be submitted in writing and then verbally confirmed by calling the custodial parent on the number listed in the school's official records.", sourceChecklist: "Non-Standard Student Pickup Verification", priority: 'High' },
                { id: 'BUS-003', description: "Ensure a staff member takes attendance as children board the bus.", sourceChecklist: "School Bus Safety & Operations", priority: 'High' },
                { id: 'SEC-004', description: "Monitor the gate and surrounding area for any unauthorized or suspicious persons during dispersal.", sourceChecklist: "Campus Security & Patrolling", priority: 'High' },
                { id: 'EOD-001', description: "A designated staff member must perform a final sweep of all common areas 30 minutes after the final bell to ensure no child is left behind.", sourceChecklist: "End-of-Day Campus Clearing Procedure", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Education & Safety Standards",
            standards: [
                { name: "Child Safety", description: "Protocols aligned with child protection policies and safe transportation guidelines." },
                { name: "Health & Safety", description: "EHS guidelines for facilities, including fire drills, playground safety, and medical emergency response." },
                { name: "Security", description: "Best practices for access control, visitor management, and campus security." },
                { name: "Digital Safety", description: "Standards for protecting students online and ensuring data privacy on school-issued devices." }
            ]
        },
        checklists: [
            {
                title: "🌅 School Opening Procedure",
                department: "Admin",
                frequency: "Daily",
                role: "Admin Officer",
                summary: "A daily morning checklist to ensure the campus is safe, clean, and ready for students and staff.",
                tasks: [
                    { id: 'OPEN-001', description: "Unlock all required gates and classroom doors.", priority: 'High', riskLevel: 'Medium', proof: 'Physical Check', location: 'Campus-wide' },
                    { id: 'OPEN-002', description: "Perform a safety sweep of playgrounds and common areas for any hazards.", priority: 'High', riskLevel: 'High', proof: 'Sweep Log', location: 'Outdoor Areas' },
                    { id: 'OPEN-003', description: "Ensure all lights are working and set to energy-efficient schedules to reduce consumption.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Indoor Areas' },
                    { id: 'OPEN-004', description: "Check that restrooms are clean and stocked with soap and toilet paper.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Log', location: 'Restrooms' },
                    { id: 'OPEN-005', description: "Verify that the security guard and support staff are at their posts.", priority: 'High', riskLevel: 'Medium', proof: 'Attendance Register', location: 'Gate/Office' }
                ]
            },
            {
                title: "🚌 School Bus Safety & Operations",
                department: "Transport",
                frequency: "Daily",
                role: "Transport Manager",
                summary: "A critical checklist for ensuring the safety of students during transit. Covers vehicle checks, driver fitness, and student conduct.",
                tasks: [
                    { id: 'BUS-001', description: "Driver conducts a pre-trip inspection of the bus (tires, lights, brakes, first-aid kit).", priority: 'High', riskLevel: 'High', proof: 'Vehicle Checklist', location: 'Bus Parking' },
                    { id: 'BUS-002', description: "Verify the driver's fitness for duty (no signs of illness or intoxication).", priority: 'High', riskLevel: 'High', proof: 'Supervisor Observation', location: 'Bus Parking' },
                    { id: 'BUS-003', description: "Ensure a staff member takes attendance as children board the bus.", priority: 'High', riskLevel: 'Medium', proof: 'Attendance Sheet', location: 'Bus' },
                    { id: 'BUS-004', description: "Check that all students are seated before the bus starts moving.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Bus' },
                    { id: 'BUS-005', description: "Ensure the bus speed limit is adhered to and the GPS is active.", priority: 'High', riskLevel: 'High', proof: 'GPS Report', location: 'On Route' }
                ]
            },
            {
                title: "🎒 Off-Campus Trip & Field Trip Protocol",
                department: "Academics/Admin",
                frequency: "Per Trip",
                role: "Lead Teacher",
                summary: "A pre-departure checklist to ensure student safety and medical preparedness during off-campus activities.",
                tasks: [
                    { id: 'TRIP-001', description: "Create a 'trip binder' containing parent consent forms and contact information for all attending students.", priority: 'High', riskLevel: 'Medium', proof: 'Binder', location: 'Office' },
                    { id: 'TRIP-002', description: "The binder must contain a printed copy of the Emergency Action Plan for every student with a known medical condition.", priority: 'High', riskLevel: 'High', proof: 'Binder', location: 'Office' },
                    { id: 'TRIP-003', description: "The lead teacher and a school administrator must co-sign a form confirming the binder has been reviewed and is on the bus.", priority: 'High', riskLevel: 'High', proof: 'Signed Form', location: 'Office' },
                    { id: 'TRIP-004', description: "Perform a head-count before departure, upon arrival at destination, before leaving destination, and upon return to school.", priority: 'High', riskLevel: 'High', proof: 'Headcount Log', location: 'Bus/Venue' },
                    { id: 'TRIP-005', description: "Ensure a fully stocked first-aid kit is taken on the trip.", priority: 'High', riskLevel: 'High', proof: 'Kit Inspection Log', location: 'Office' }
                ]
            },
            {
                title: "🔒 Student Digital Safety & Device Audit",
                department: "IT/Admin",
                frequency: "Quarterly",
                role: "IT Director",
                summary: "A proactive audit to protect students from online harms by reviewing device settings and network traffic.",
                tasks: [
                    { id: 'DIGI-SAFE-001', description: "Review network traffic logs for the most-accessed non-academic domains and apps by students.", priority: 'High', riskLevel: 'Medium', proof: 'Traffic Report', location: 'IT Office' },
                    { id: 'DIGI-SAFE-002', description: "Audit the web filter to ensure it is blocking new and emerging inappropriate site categories.", priority: 'High', riskLevel: 'Medium', proof: 'Filter Configuration', location: 'IT Office' },
                    { id: 'DIGI-SAFE-003', description: "Ensure that features like anonymous commenting are disabled on all official school learning platforms.", priority: 'Medium', riskLevel: 'Medium', proof: 'Platform Settings', location: 'IT Office' },
                    { id: 'DIGI-SAFE-004', description: "Review a sample of school-issued devices to ensure security software is active and cannot be disabled by students.", priority: 'High', riskLevel: 'High', proof: 'Device Audit Log', location: 'IT Office' },
                    { id: 'DIGI-SAFE-005', description: "Send a quarterly reminder to parents and students about digital citizenship and online safety best practices.", priority: 'Medium', riskLevel: 'Low', proof: 'Email Send Log', location: 'IT Office' }
                ]
            },
            {
                title: "📞 Non-Standard Student Pickup Verification",
                department: "Security/Admin",
                frequency: "Per Instance",
                role: "Front Desk/Guard",
                summary: "A high-stakes protocol to prevent unauthorized pickup of a child by ensuring strict verification.",
                tasks: [
                    { id: 'NSPU-001', description: "Any change to a student's regular pickup plan must be submitted in writing (email) and then verbally confirmed by calling the custodial parent on the number listed in the school's official records.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Front Office' },
                    { id: 'NSPU-002', description: "The person making the non-standard pickup must present a photo ID that matches the name provided by the parent.", priority: 'High', riskLevel: 'High', proof: 'ID Verification', location: 'Gate' },
                    { id: 'NSPU-003', description: "Log the details of the non-standard pickup, including the name of the person and the time.", priority: 'High', riskLevel: 'Medium', proof: 'Pickup Log', location: 'Gate' },
                    { id: 'NSPU-004', description: "If there's any doubt, hold the child and re-verify with the parent.", priority: 'High', riskLevel: 'High', proof: 'Policy Adherence', location: 'Front Office' },
                    { id: 'NSPU-005', description: "Ensure the authorized pickup list for each student is reviewed and updated at the start of each academic year.", priority: 'High', riskLevel: 'Medium', proof: 'Annual Review Log', location: 'Admin Office' }
                ]
            },
            {
                title: "🧪 Lab Safety Checklist",
                department: "Science/Admin",
                frequency: "Weekly",
                role: "Lab Technician",
                summary: "Ensures science labs are safe for students by checking equipment, chemical storage, and emergency facilities.",
                tasks: [
                    { id: 'LAB-001', description: "Ensure all safety equipment (fire extinguisher, first aid, eyewash station) is present and functional.", priority: 'High', riskLevel: 'High', proof: 'Safety Log', location: 'Lab' },
                    { id: 'LAB-002', description: "Check that all chemicals are properly labeled and stored in designated cabinets.", priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Lab' },
                    { id: 'LAB-003', description: "Verify that gas lines and Bunsen burners are free from leaks and damage.", priority: 'High', riskLevel: 'High', proof: 'Leak Test Log', location: 'Lab' },
                    { id: 'LAB-004', description: "Ensure proper ventilation systems are operational.", priority: 'High', riskLevel: 'Medium', proof: 'System Check', location: 'Lab' },
                    { id: 'LAB-005', description: "Dispose of chemical waste according to established safety protocols.", priority: 'High', riskLevel: 'High', proof: 'Disposal Log', location: 'Lab' }
                ]
            },
            {
                title: "🏨 Hostel Hygiene & Maintenance Checklist",
                department: "Admin/Facilities",
                frequency: "Weekly",
                role: "Hostel Warden",
                summary: "A comprehensive checklist for maintaining a clean, safe, and well-managed student hostel or dormitory.",
                tasks: [
                    { id: 'HOSTEL-001', description: "Inspect all rooms for cleanliness, damage, and unauthorized appliances.", priority: 'High', riskLevel: 'Medium', proof: 'Room Inspection Log', location: 'Hostel Rooms' },
                    { id: 'HOSTEL-002', description: "Check common areas, including restrooms and lounges, for hygiene and functionality.", priority: 'High', riskLevel: 'Medium', proof: 'Common Area Log', location: 'Hostel Common Areas' },
                    { id: 'HOSTEL-003', description: "Verify that fire safety equipment is in place and functional.", priority: 'High', riskLevel: 'High', proof: 'Fire Safety Log', location: 'Hostel' },
                    { id: 'HOSTEL-004', description: "Ensure security protocols, like visitor logs and curfew checks, are being followed.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Hostel Entrance' },
                    { id: 'HOSTEL-005', description: "Review and address any maintenance requests from residents promptly.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Ticket System', location: 'Hostel' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Admin",
                frequency: "Monthly",
                role: "Admin Manager",
                summary: "A proactive checklist for preventing and managing pest infestations in a school environment.",
                tasks: [
                    { id: 'PEST-EDU-001', description: "Inspect canteen, classrooms, and waste areas for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Campus-wide' },
                    { id: 'PEST-EDU-002', description: "Ensure food in the canteen is stored in sealed containers and practice good kitchen hygiene.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Canteen' },
                    { id: 'PEST-EDU-003', description: "Check that all garbage bins are covered and emptied daily, especially in food areas.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Campus-wide' },
                    { id: 'PEST-EDU-004', description: "Review reports from the pest control vendor and ensure all recommendations are followed.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Review', location: 'Admin Office' },
                    { id: 'PEST-EDU-005', description: "Seal cracks and holes in walls and around pipes to eliminate pest entry points.", priority: 'Medium', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Campus-wide' }
                ]
            }
        ]
    },
    {
        id: 'manufacturing_plant_pack',
        title: "Manufacturing Plant Checklist",
        priceUSD: 149.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Manufacturing",
        description: "For Plant Heads and Safety Officers. A toolkit for ensuring production efficiency, worker safety (EHS), and quality control.",
        icon: <Factory className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Implement a life-saving 'Lock-Out Tag-Out' (LOTO) procedure.",
            "Master 'Fleet & Heavy Equipment' management, including forklifts and cranes.",
            "Systematize your 'Central Stores & Inventory Control'.",
            "NEW: Ensure vendor safety with a 'Contractor EHS Management' protocol."
        ],
        globalStandards: {
            title: "Aligned with Global Manufacturing & Safety Standards",
            standards: [
                { name: "Safety", description: "OSHA (US), IOSH (UK), local factory acts, and protocols for LOTO, PTW, and hazardous materials." },
                { name: "Quality Management", description: "ISO 9001, principles of lean manufacturing (5S), and quality control for raw materials." },
                { name: "Environmental", description: "ISO 14001 for environmental management and waste control." },
                { name: "Energy Management", description: "ISO 50001 for optimizing energy consumption of plant and machinery." }
            ]
        },
        checklists: [
            {
                title: "🌅 Production Shift Handover",
                department: "Production",
                frequency: "Per Shift",
                role: "Shift Supervisor",
                summary: "Ensures a smooth transition between shifts, covering production status, quality issues, and any maintenance or safety concerns.",
                tasks: [
                    { id: 'SHIFT-001', description: "Review previous shift's production numbers against targets.", priority: 'High', riskLevel: 'Medium', proof: 'Production Log', location: 'Supervisor Office' },
                    { id: 'SHIFT-002', description: "Discuss any quality issues or rejections that occurred.", priority: 'High', riskLevel: 'High', proof: 'Handover Meeting', location: 'Supervisor Office' },
                    { id: 'SHIFT-003', description: "Communicate any machine breakdowns or pending maintenance tasks.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Log', location: 'Supervisor Office' },
                    { id: 'SHIFT-004', description: "Verify raw material availability for the current shift's production plan.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Check', location: 'Shop Floor' },
                    { id: 'SHIFT-005', description: "Conduct a brief tool-box talk with the incoming shift on safety and production priorities.", priority: 'Medium', riskLevel: 'Medium', proof: 'Meeting Log', location: 'Shop Floor' }
                ]
            },
            {
                title: "🛡️ Personal Protective Equipment (PPE) Audit",
                department: "EHS (Safety)",
                frequency: "Daily",
                role: "Safety Officer",
                summary: "A daily walk-through to ensure all workers are using the required PPE correctly, preventing workplace injuries.",
                tasks: [
                    { id: 'PPE-001', description: "Check that workers in designated areas are wearing safety helmets.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Shop Floor' },
                    { id: 'PPE-002', description: "Verify that safety glasses are being used during grinding, cutting, or chemical handling.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Workstations' },
                    { id: 'PPE-003', description: "Ensure workers have and are using the correct type of gloves for their task.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Workstations' },
                    { id: 'PPE-004', description: "Check for correct use of safety footwear across the plant floor.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Shop Floor' },
                    { id: 'PPE-005', description: "Confirm that high-visibility vests are worn in areas with vehicle movement.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Yard/Loading Bays' }
                ]
            },
            {
                title: "🔩 Critical Spares & Consumables Verification",
                department: "Maintenance/Engineering",
                frequency: "Per Use",
                role: "Technician/Storekeeper",
                summary: "A 'two-person rule' checklist to prevent catastrophic failures caused by using incorrect parts in critical systems.",
                tasks: [
                    { id: 'CRIT-SPARE-001', description: "Before a critical spare (e.g., high-pressure gasket, specific bolt type) is issued, its part number must be cross-checked against the work order.", priority: 'High', riskLevel: 'High', proof: 'Stores Issue Log', location: 'Stores' },
                    { id: 'CRIT-SPARE-002', description: "The technician installing the part must perform a second verification of the part number before installation.", priority: 'High', riskLevel: 'High', proof: 'Technician Log', location: 'Job Site' },
                    { id: 'CRIT-SPARE-003', description: "Both the storekeeper and the technician must co-sign the work order, confirming the correct part was issued and installed.", priority: 'High', riskLevel: 'High', proof: 'Signed Work Order', location: 'Job Site' },
                    { id: 'CRIT-SPARE-004', description: "Photograph the installed part with its part number visible for critical applications.", priority: 'Medium', riskLevel: 'High', proof: 'Photo Log', location: 'Job Site' },
                    { id: 'CRIT-SPARE-005', description: "Tag and quarantine any parts removed from service to prevent accidental reuse.", priority: 'High', riskLevel: 'Medium', proof: 'Quarantine Tag', location: 'Workshop' }
                ]
            },
            {
                title: "🧑‍🔧 Daily Fitness-for-Duty Check (Heavy Equipment)",
                department: "EHS/Operations",
                frequency: "Daily",
                role: "Operator/Supervisor",
                summary: "A pre-shift self-declaration to ensure operators of forklifts and other heavy machinery are fit to work.",
                tasks: [
                    { id: 'FFD-001', description: "Operator must complete a daily self-declaration form confirming they are not impaired by medication, fatigue, or stress.", priority: 'High', riskLevel: 'High', proof: 'Signed Form', location: 'Supervisor Office' },
                    { id: 'FFD-002', description: "The supervisor must have a brief, face-to-face conversation with the operator to visually assess for any signs of impairment.", priority: 'High', riskLevel: 'High', proof: 'Supervisor Log', location: 'Shop Floor' },
                    { id: 'FFD-003', description: "Any operator reporting unfitness must be assigned to non-critical duties for the day, with no penalty.", priority: 'High', riskLevel: 'Medium', proof: 'Duty Change Log', location: 'Supervisor Office' },
                    { id: 'FFD-004', description: "Verify that the operator holds a valid, current license for the specific equipment they will operate.", priority: 'High', riskLevel: 'High', proof: 'License Check Log', location: 'Supervisor Office' },
                    { id: 'FFD-005', description: "Conduct random breathalyzer tests as per company policy.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Medical Room' }
                ]
            },
            {
                title: "📏 Tool Calibration & Metrology Control",
                department: "Quality",
                frequency: "Per Use",
                role: "QC Inspector/Technician",
                summary: "An automated or manual check to ensure that no uncalibrated measurement tools are ever used for quality control.",
                tasks: [
                    { id: 'CALIB-001', description: "Every precision tool (caliper, micrometer) must have a unique ID and a calibration sticker with the due date.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'QC Lab/Workstation' },
                    { id: 'CALIB-002', description: "Before use, the operator must check the sticker to ensure calibration is not expired.", priority: 'High', riskLevel: 'High', proof: 'Usage Log', location: 'Workstation' },
                    { id: 'CALIB-003', description: "Alternatively, scan a QR code on the tool to bring up its live calibration status in a central system.", priority: 'High', riskLevel: 'High', proof: 'System Scan Log', location: 'Workstation' },
                    { id: 'CALIB-004', description: "Any tool found to be out of calibration must be immediately removed from service and sent for recalibration.", priority: 'High', riskLevel: 'High', proof: 'Recalibration Request Form', location: 'QC Lab' },
                    { id: 'CALIB-005', description: "Maintain a master calibration record for all measurement instruments.", priority: 'High', riskLevel: 'Medium', proof: 'Master Record', location: 'QC Office' }
                ]
            },
            {
                title: "⚡ Electrical Permit to Work (PTW)",
                department: "EHS/Maintenance",
                frequency: "Per Electrical Job",
                role: "Safety Officer",
                summary: "A specialized permit to prevent electrocution and arc flash incidents during work on live electrical panels.",
                tasks: [
                    { id: 'EPTW-001', description: "The Electrical PTW must include a mandatory 'Arc Flash Hazard Analysis' section that calculates the incident energy.", priority: 'High', riskLevel: 'High', proof: 'PTW Form', location: 'Job Site' },
                    { id: 'EPTW-002', description: "Define the required PPE level (e.g., arc-rated face shield, balaclava, gloves) for that specific task based on the analysis.", priority: 'High', riskLevel: 'High', proof: 'PTW Form', location: 'Job Site' },
                    { id: 'EPTW-003', description: "Ensure the area is barricaded and warning signs are posted before work begins.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Job Site' },
                    { id: 'EPTW-004', description: "Verify that the electrician is using insulated tools and equipment.", priority: 'High', riskLevel: 'High', proof: 'Tool Inspection', location: 'Job Site' },
                    { id: 'EPTW-005', description: "A safety standby person must be present for all high-voltage work.", priority: 'High', riskLevel: 'High', proof: 'Standby Log', location: 'Job Site' }
                ]
            },
            {
                title: "🚚 Loading Dock & Trailer Safety",
                department: "Logistics/EHS",
                frequency: "Per Truck",
                role: "Loading Supervisor",
                summary: "Prevents catastrophic falls and crushing incidents by ensuring trailers are completely secured before forklift entry.",
                tasks: [
                    { id: 'LDS-001', description: "The truck's wheels must be chocked before any loading or unloading begins.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Loading Dock' },
                    { id: 'LDS-002', description: "An external 'dock lock' must be engaged, physically preventing the truck from pulling away.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Loading Dock' },
                    { id: 'LDS-003', description: "The key for the dock lock is given to the forklift operator and only returned to the driver once operations are complete.", priority: 'High', riskLevel: 'High', proof: 'Key Handover Log', location: 'Loading Dock' },
                    { id: 'LDS-004', description: "Inspect the trailer floor for stability and holes before the forklift enters.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Loading Dock' },
                    { id: 'LDS-005', description: "Ensure the dock leveler is properly seated on the trailer bed.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Loading Dock' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/EHS",
                frequency: "Monthly",
                role: "EHS Officer",
                summary: "A proactive checklist for preventing and managing pest infestations in a manufacturing plant, focusing on hygiene and structural integrity.",
                tasks: [
                    { id: 'PEST-MFG-001', description: "Inspect canteen, locker rooms, and waste disposal areas for signs of pests.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Non-Production Areas' },
                    { id: 'PEST-MFG-002', description: "Inspect raw material and finished goods warehouses for any pest activity or contamination.", priority: 'High', riskLevel: 'High', proof: 'Warehouse Inspection Log', location: 'Warehouses' },
                    { id: 'PEST-MFG-003', description: "Ensure all external doors, windows, and pipe penetrations are properly sealed.", priority: 'High', riskLevel: 'Medium', proof: 'Structural Audit Log', location: 'Building Perimeter' },
                    { id: 'PEST-MFG-004', description: "Review reports from the pest control vendor and verify all recommended actions have been completed.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Tracker', location: 'EHS Office' },
                    { id: 'PEST-MFG-005', description: "Maintain clear zones around the building exterior, free of vegetation and debris that could harbor pests.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Exterior' }
                ]
            }
        ]
    },
    {
        id: 'logistics_warehouse_pack',
        title: "Logistics & Warehouse Operations",
        priceUSD: 149.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Logistics",
        description: "For warehouse managers and logistics heads. A comprehensive toolkit to optimize inventory, ensure safety, and improve fulfillment efficiency.",
        icon: <Warehouse className="w-8 h-8 text-primary" />,
        badgeText: "New & In-Depth",
        badgeVariant: "accent" as const,
        sampleItems: [
            "Implement a 'Warehouse Safety & Housekeeping' daily audit.",
            "Standardize 'Inbound & GRN' processes to prevent receiving errors.",
            "Master 'Inventory & Cycle Counting' to ensure accuracy.",
            "Includes 'Forklift Safety' and 'Fleet Maintenance' checklists."
        ],
        globalStandards: {
            title: "Aligned with Global Logistics & Warehousing Standards",
            standards: [
                { name: "Safety", description: "OSHA guidelines for warehouse operations, including forklift safety, material handling, and loading dock procedures." },
                { name: "Quality & Inventory", description: "ISO 9001 for quality management and best practices for inventory accuracy and cycle counting." },
                { name: "Efficiency", description: "Principles of lean warehousing (5S) to improve flow and reduce waste." }
            ]
        },
        checklists: [
            {
                title: "🚚 Forklift Safety Operations",
                department: "Logistics",
                frequency: "Daily",
                role: "Forklift Operator",
                summary: "A pre-use checklist to ensure forklifts are safe to operate, preventing accidents and injuries in the warehouse and production areas.",
                tasks: [
                    { id: 'FORK-001', description: "Check tires, horn, lights, and brakes before first use of the shift.", priority: 'High', riskLevel: 'High', proof: 'Pre-use Checklist Form', location: 'Warehouse' },
                    { id: 'FORK-002', description: "Inspect forks for cracks or damage.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Warehouse' },
                    { id: 'FORK-003', description: "Ensure the operator is certified and authorized to use the forklift.", priority: 'High', riskLevel: 'High', proof: 'Certification Record', location: 'Supervisor Office' },
                    { id: 'FORK-004', description: "Adhere to speed limits and use the horn at blind corners.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Plant-wide' },
                    { id: 'FORK-005', description: "Ensure loads are stable, within capacity, and do not obstruct the operator's view.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Plant-wide' }
                ]
            },
            {
                title: "📦 New Product Master Data Entry",
                department: "Data/Inventory",
                frequency: "Per New SKU",
                role: "Data Analyst",
                summary: "A 'maker-checker' protocol to prevent costly data entry errors for new products, which can lead to massive shipping chargebacks and inventory chaos.",
                tasks: [
                    { id: 'MDM-001', description: "The 'Maker' enters all new product data (dimensions, weight, HS code) into the system.", priority: 'High', riskLevel: 'High', proof: 'System Entry Log', location: 'Office' },
                    { id: 'MDM-002', description: "The SKU remains 'inactive' in the system, preventing any orders or shipments.", priority: 'High', riskLevel: 'High', proof: 'System Status', location: 'System' },
                    { id: 'MDM-003', description: "A separate 'Checker' must independently verify every field against the product spec sheet.", priority: 'High', riskLevel: 'High', proof: 'Checker Sign-off', location: 'Office' },
                    { id: 'MDM-004', description: "Only after the 'Checker' approves does the SKU become 'active' in the system.", priority: 'High', riskLevel: 'High', proof: 'Approval Log', location: 'System' },
                    { id: 'MDM-005', description: "Conduct a weekly audit of all new SKUs created to ensure the protocol was followed.", priority: 'Medium', riskLevel: 'Medium', proof: 'Audit Report', location: 'Office' }
                ]
            },
            {
                title: "🏭 5S Housekeeping Audit",
                department: "Operations",
                frequency: "Weekly",
                role: "Supervisor",
                summary: "A lean manufacturing tool to maintain a clean and organized workplace, focusing on Sort, Set in Order, Shine, Standardize, and Sustain.",
                tasks: [
                    { id: '5S-001', description: "(Sort) Identify and remove unnecessary items from the work area.", priority: 'Medium', riskLevel: 'Low', proof: 'Photo before/after', location: 'Workstation' },
                    { id: '5S-002', description: "(Set in Order) Arrange all necessary items so they can be easily selected for use.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Workstation' },
                    { id: '5S-003', description: "(Shine) Clean the work area, tools, and equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Workstation' },
                    { id: '5S-004', description: "(Standardize) Ensure standardized procedures and work instructions are being followed.", priority: 'High', riskLevel: 'Medium', proof: 'Process Audit', location: 'Workstation' },
                    { id: '5S-005', description: "(Sustain) Review previous audit findings and ensure improvements have been sustained.", priority: 'High', riskLevel: 'Medium', proof: 'Audit Review', location: 'Workstation' }
                ]
            },
            {
                title: "📋 Inventory Cycle Counting",
                department: "Inventory",
                frequency: "Daily",
                role: "Inventory Controller",
                summary: "A systematic process for regularly counting a subset of inventory to ensure high accuracy without shutting down the entire warehouse.",
                tasks: [
                    { id: 'ICC-001', description: "Generate a daily list of SKUs to be counted based on a pre-defined cycle count plan.", priority: 'High', riskLevel: 'Medium', proof: 'Count Sheet', location: 'Office' },
                    { id: 'ICC-002', description: "Perform a 'blind count' where the counter does not know the expected system quantity.", priority: 'High', riskLevel: 'High', proof: 'Count Sheet Entry', location: 'Warehouse' },
                    { id: 'ICC-003', description: "Enter the physical count into the inventory system.", priority: 'High', riskLevel: 'High', proof: 'System Entry', location: 'Office' },
                    { id: 'ICC-004', description: "Investigate and resolve any discrepancies between the physical count and system quantity.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Office' },
                    { id: 'ICC-005', description: "Adjust system inventory based on the root cause analysis of the discrepancy.", priority: 'High', riskLevel: 'High', proof: 'Adjustment Log', location: 'System' }
                ]
            },
            {
                title: "📥 Goods Receiving Note (GRN) & Inbound Logistics",
                department: "Receiving",
                frequency: "Per Delivery",
                role: "Receiving Clerk",
                summary: "A checklist to ensure all incoming shipments are accurately received, inspected, and documented.",
                tasks: [
                    { id: 'GRN-001', description: "Verify the received goods against the supplier's packing list and our purchase order.", priority: 'High', riskLevel: 'High', proof: 'PO & Packing List', location: 'Receiving Bay' },
                    { id: 'GRN-002', description: "Inspect the shipment for any visible damage and note it on the delivery receipt before signing.", priority: 'High', riskLevel: 'High', proof: 'Signed Delivery Receipt', location: 'Receiving Bay' },
                    { id: 'GRN-003', description: "Count the items and verify the quantity received matches the documentation.", priority: 'High', riskLevel: 'High', proof: 'Count Sheet', location: 'Receiving Bay' },
                    { id: 'GRN-004', description: "Generate a Goods Received Note (GRN) in the inventory system.", priority: 'High', riskLevel: 'Medium', proof: 'GRN in System', location: 'Office' },
                    { id: 'GRN-005', description: "Move the received goods to the designated putaway or QC inspection area.", priority: 'High', riskLevel: 'Medium', proof: 'System Location Update', location: 'Receiving Bay' }
                ]
            },
            {
                title: "↩️ Returns Management (RMA) Process",
                department: "Returns",
                frequency: "Per Return",
                role: "Returns Associate",
                summary: "A systematic process for handling returned goods, from inspection and grading to restocking or disposal.",
                tasks: [
                    { id: 'RMA-001', description: "Log the returned item against the Return Merchandise Authorization (RMA) number.", priority: 'High', riskLevel: 'Medium', proof: 'RMA System Log', location: 'Returns Area' },
                    { id: 'RMA-002', description: "Inspect the returned item for condition (e.g., unopened, used, damaged).", priority: 'High', riskLevel: 'High', proof: 'Inspection Report', location: 'Returns Area' },
                    { id: 'RMA-003', description: "Grade the item and determine its disposition (restock, sell as open-box, quarantine, scrap).", priority: 'High', riskLevel: 'High', proof: 'Disposition Log', location: 'Returns Area' },
                    { id: 'RMA-004', description: "Process the customer refund or credit based on the item's condition.", priority: 'High', riskLevel: 'High', proof: 'Financial Transaction', location: 'Office' },
                    { id: 'RMA-005', description: "Update the inventory system to reflect the returned item's status and location.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory System Log', location: 'Office' }
                ]
            },
            {
                title: "❄️ Cold Storage & Temperature Monitoring",
                department: "Warehouse/QC",
                frequency: "Daily",
                role: "QC Inspector",
                summary: "Ensures the integrity of the cold chain for perishable goods, preventing spoilage and ensuring food safety.",
                tasks: [
                    { id: 'CS-001', description: "Log the temperature of all cold storage units (chillers, freezers) at least three times per day.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Cold Storage Units' },
                    { id: 'CS-002', description: "Check that automated temperature alert systems are armed and functional.", priority: 'High', riskLevel: 'High', proof: 'System Health Check', location: 'Office' },
                    { id: 'CS-003', description: "Inspect door seals on all cold storage units for damage or leaks.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection Log', location: 'Cold Storage Units' },
                    { id: 'CS-004', description: "Ensure goods are not stored directly against walls to allow for proper air circulation.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Cold Storage Units' },
                    { id: 'CS-005', description: "Review temperature data logs weekly to identify any trends or potential equipment issues.", priority: 'Medium', riskLevel: 'Medium', proof: 'Data Review Report', location: 'Office' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/EHS",
                frequency: "Monthly",
                role: "EHS Officer",
                summary: "A proactive checklist for preventing and managing pest infestations in a warehouse, focusing on hygiene and structural integrity.",
                tasks: [
                    { id: 'PEST-WH-001', description: "Inspect receiving docks, storage racks, and employee areas for signs of pests.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Warehouse' },
                    { id: 'PEST-WH-002', description: "Ensure no food or drink is stored or consumed in product storage areas.", priority: 'High', riskLevel: 'High', proof: 'Policy Enforcement', location: 'Warehouse' },
                    { id: 'PEST-WH-003', description: "Keep the area around the warehouse perimeter clear of debris and vegetation.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Exterior' },
                    { id: 'PEST-WH-004', description: "Check that all loading dock doors and entry points have proper seals.", priority: 'High', riskLevel: 'Medium', proof: 'Structural Inspection', location: 'Loading Docks' },
                    { id: 'PEST-WH-005', description: "Review reports from the pest control vendor and ensure all recommendations are implemented.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'construction_site_pack',
        title: "Construction Site Safety (EHS)",
        priceUSD: 149.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Construction",
        description: "For site managers and EHS officers. A crucial toolkit to ensure worker safety and regulatory compliance on construction sites.",
        icon: <HardHat className="w-8 h-8 text-primary" />,
        badgeText: "Safety Critical",
        badgeVariant: "destructive" as const,
        sampleItems: [
            "Implement a daily 'Site Safety Audit'.",
            "Standardize 'Scaffolding & Work-at-Height' safety checks.",
            "Master 'Excavation & Trenching' permits to prevent collapses.",
            "Includes 'Contractor Pre-Qualification' and 'Incident Reporting' checklists."
        ],
        globalStandards: {
            title: "Aligned with Global Construction Safety Standards",
            standards: [
                { name: "Worker Safety", description: "OSHA (US), NEBOSH/IOSH (UK), and local building code authority safety regulations." },
                { name: "Equipment Safety", description: "Protocols for heavy machinery, electrical systems, and scaffolding as per international best practices." },
                { name: "Risk Management", description: "Frameworks for job hazard analysis (JHA), permit-to-work systems, and incident investigation." }
            ]
        },
        checklists: [
            {
                title: "🛠️ EHS Daily Site Audit",
                department: "EHS",
                frequency: "Daily",
                role: "Safety Officer",
                summary: "A comprehensive daily walkthrough to identify and mitigate hazards on the construction site.",
                tasks: [
                    { id: 'EHS-DSA-001', description: "Verify all workers are wearing appropriate PPE.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit Log', location: 'Entire Site' },
                    { id: 'EHS-DSA-002', description: "Inspect scaffolding for stability, proper planking, and guardrails.", priority: 'High', riskLevel: 'High', proof: 'Scaffolding Tag', location: 'Scaffolds' },
                    { id: 'EHS-DSA-003', description: "Check electrical connections for proper grounding and protection from water.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Entire Site' },
                    { id: 'EHS-DSA-004', description: "Ensure good housekeeping practices are followed, with clear access routes and no tripping hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Entire Site' },
                    { id: 'EHS-DSA-005', description: "Confirm that first aid stations are stocked and accessible.", priority: 'High', riskLevel: 'High', proof: 'First Aid Log', location: 'Site Office' }
                ]
            },
            {
                title: "📝 Contractor Pre-Qualification Checklist",
                department: "Procurement/EHS",
                frequency: "Per Contractor",
                role: "EHS Manager",
                summary: "A due diligence checklist to ensure that subcontractors have adequate safety policies and insurance before being allowed on site.",
                tasks: [
                    { id: 'EHS-CPQ-001', description: "Obtain and review contractor's written safety program/policy.", priority: 'High', riskLevel: 'High', proof: 'Document Review', location: 'Office' },
                    { id: 'EHS-CPQ-002', description: "Verify contractor's insurance certificates (worker's compensation, general liability).", priority: 'High', riskLevel: 'High', proof: 'Certificate Copies', location: 'Office' },
                    { id: 'EHS-CPQ-003', description: "Check contractor's safety record (e.g., OSHA 300 logs or equivalent).", priority: 'Medium', riskLevel: 'Medium', proof: 'Record Review', location: 'Office' },
                    { id: 'EHS-CPQ-004', description: "Ensure contractor provides a list of competent persons for their scope of work.", priority: 'High', riskLevel: 'Medium', proof: 'List of Personnel', location: 'Office' },
                    { id: 'EHS-CPQ-005', description: "Verify that contractor's employees have undergone required safety training.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' }
                ]
            },
             {
                title: "🔍 Incident Investigation & Root Cause Analysis",
                department: "EHS/Quality",
                frequency: "Per Incident",
                role: "Investigator/Manager",
                summary: "A systematic approach to investigate incidents, identify root causes using methods like '5 Whys', and implement effective corrective and preventive actions (CAPA).",
                tasks: [
                    { id: 'INC-INV-001', description: "Secure the incident scene and preserve evidence.", priority: 'High', riskLevel: 'High', proof: 'Scene Photos/Log', location: 'Incident Site' },
                    { id: 'INC-INV-002', description: "Gather information through witness interviews and document review.", priority: 'High', riskLevel: 'High', proof: 'Interview Notes', location: 'Office' },
                    { id: 'INC-INV-003', description: "Use a structured method (e.g., 5 Whys, Fishbone Diagram) to determine the root cause(s).", priority: 'High', riskLevel: 'High', proof: 'Root Cause Analysis Report', location: 'Office' },
                    { id: 'INC-INV-004', description: "Develop and assign Corrective and Preventive Actions (CAPA) with clear deadlines.", priority: 'High', riskLevel: 'High', proof: 'CAPA Plan', location: 'Office' },
                    { id: 'INC-INV-005', description: "Track CAPA implementation to closure and verify effectiveness.", priority: 'High', riskLevel: 'Medium', proof: 'CAPA Tracker', location: 'Office' }
                ]
            },
             {
                title: "🧗 Work-at-Height Permit",
                department: "EHS",
                frequency: "Per Task",
                role: "Safety Officer",
                summary: "A permit-to-work system for any work performed at height to prevent falls.",
                tasks: [
                    { id: 'WAH-001', description: "Ensure the worker is using a full-body harness that has been inspected.", priority: 'High', riskLevel: 'High', proof: 'Harness Inspection Log', location: 'Job Site' },
                    { id: 'WAH-002', description: "Verify that the anchor point is secure and rated for fall arrest.", priority: 'High', riskLevel: 'High', proof: 'Anchor Point Certification', location: 'Job Site' },
                    { id: 'WAH-003', description: "Inspect lifelines, lanyards, and connectors for wear and tear.", priority: 'High', riskLevel: 'High', proof: 'Equipment Inspection', location: 'Job Site' },
                    { id: 'WAH-004', description: "Cordon off the area below to protect workers from falling objects.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Job Site' },
                    { id: 'WAH-005', description: "Confirm a rescue plan is in place before work begins.", priority: 'High', riskLevel: 'High', proof: 'Rescue Plan Document', location: 'Job Site' }
                ]
            },
            {
                title: "🧱 Scaffolding Inspection Checklist",
                department: "EHS",
                frequency: "Daily",
                role: "Scaffold Inspector",
                summary: "A daily inspection checklist to ensure scaffolding is stable, safe, and compliant before use.",
                tasks: [
                    { id: 'SCAF-001', description: "Check that the scaffold is on a firm, level foundation.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Scaffold Base' },
                    { id: 'SCAF-002', description: "Verify that all guardrails and toeboards are in place.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Scaffold Decks' },
                    { id: 'SCAF-003', description: "Ensure scaffold planks are fully decked and secured.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Scaffold Decks' },
                    { id: 'SCAF-004', description: "Confirm that a competent person has inspected and tagged the scaffold as safe for use.", priority: 'High', riskLevel: 'High', proof: 'Green Tag', location: 'Scaffold Access Point' },
                    { id: 'SCAF-005', description: "Check for safe access and egress, such as a properly installed ladder.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Scaffold' }
                ]
            },
            {
                title: "🔥 Hot Work Permit (Welding, Cutting)",
                department: "EHS",
                frequency: "Per Task",
                role: "Safety Officer",
                summary: "A permit system to prevent fires from welding, cutting, or other spark-producing activities.",
                tasks: [
                    { id: 'HWP-001', description: "Clear the surrounding area of all flammable materials.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Job Site' },
                    { id: 'HWP-002', description: "Ensure a fire extinguisher is present and a designated 'fire watch' is assigned.", priority: 'High', riskLevel: 'High', proof: 'Permit Sign-off', location: 'Job Site' },
                    { id: 'HWP-003', description: "Use fire-resistant blankets to cover nearby materials that cannot be moved.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Job Site' },
                    { id: 'HWP-004', description: "The fire watch must remain on site for at least 30 minutes after the work is complete.", priority: 'High', riskLevel: 'High', proof: 'Fire Watch Log', location: 'Job Site' },
                    { id: 'HWP-005', description: "Check that welding equipment is in good condition with no frayed cables.", priority: 'High', riskLevel: 'High', proof: 'Equipment Inspection', location: 'Job Site' }
                ]
            },
            {
                title: "⛓️ Crane & Rigging Lift Plan",
                department: "Operations/EHS",
                frequency: "Per Critical Lift",
                role: "Lift Supervisor",
                summary: "A detailed plan for any critical or heavy lift to ensure it is executed safely.",
                tasks: [
                    { id: 'LIFT-001', description: "Calculate the total load weight, including rigging.", priority: 'High', riskLevel: 'High', proof: 'Lift Plan Document', location: 'Office' },
                    { id: 'LIFT-002', description: "Verify crane capacity at the required radius and boom angle.", priority: 'High', riskLevel: 'High', proof: 'Crane Load Chart', location: 'Crane Cab' },
                    { id: 'LIFT-003', description: "Inspect all rigging equipment (slings, shackles) before use.", priority: 'High', riskLevel: 'High', proof: 'Rigging Inspection Log', location: 'Job Site' },
                    { id: 'LIFT-004', description: "Barricade the entire lift zone and establish an exclusion zone.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Job Site' },
                    { id: 'LIFT-005', description: "Conduct a pre-lift briefing with the entire lift team (operator, rigger, signal person).", priority: 'High', riskLevel: 'High', proof: 'Briefing Sign-off', location: 'Job Site' }
                ]
            },
            {
                title: "Excavation & Trenching Safety Permit",
                department: "EHS",
                frequency: "Daily",
                role: "Site Engineer",
                summary: "A daily permit to prevent trench collapses, one of the most deadly construction hazards.",
                tasks: [
                    { id: 'TRENCH-001', description: "Before entry, verify that a protective system (shoring, sloping) is in place for any trench deeper than 5 feet.", priority: 'High', riskLevel: 'High', proof: 'Permit Sign-off', location: 'Trench Site' },
                    { id: 'TRENCH-002', description: "Ensure spoil piles are placed at least 2 feet from the trench edge.", priority: 'High', riskLevel: 'High', proof: 'Visual Measurement', location: 'Trench Site' },
                    { id: 'TRENCH-003', description: "Provide a safe means of access and egress, such as a ladder, every 25 feet.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Trench' },
                    { id: 'TRENCH-004', description: "Test for hazardous atmospheres (low oxygen, toxic gases) before entry.", priority: 'High', riskLevel: 'High', proof: 'Gas Monitor Log', location: 'Trench' },
                    { id: 'TRENCH-005', description: "A competent person must inspect the trench daily and sign the permit before work begins.", priority: 'High', riskLevel: 'High', proof: 'Signed Permit', location: 'Trench Site' }
                ]
            }
        ]
    },
    {
        id: 'corporate_legal_compliance_starter_kit',
        title: "Corporate Legal & Compliance Starter Kit",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Compliance",
        description: "For founders and managers. A foundational toolkit to ensure your business operations are legally sound and compliant.",
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent" as const,
        sampleItems: [
            "NEW: Includes 'Quarterly Business Review' and 'Annual Strategic Planning' frameworks.",
            "NEW: Added a 'New Office Build-Out & Project Management' checklist.",
            "Standardize your 'New Employee Legal Onboarding' from a legal perspective.",
            "Implement a 'Vendor Contract Review' checklist for non-lawyers."
        ],
        globalStandards: {
            title: "Aligned with Foundational Legal & HR Best Practices",
            standards: [
                { name: "Employment Law", description: "Basics of hiring, contracts, and HR policy deployment." },
                { name: "Contract Law", description: "Fundamentals of reviewing vendor agreements for key risks." },
                { name: "Data Privacy", description: "Basics of website compliance including terms of service and privacy policies." }
            ]
        },
        checklists: [
            {
                title: "🏗️ New Office Build-Out & Project Management",
                department: "Projects/Admin",
                frequency: "Per Project",
                role: "Project Manager",
                summary: "A master checklist for managing the complex process of building out a new office space, from site selection to final handover.",
                tasks: [
                    { id: 'BUILD-001', description: "Develop a detailed project budget and timeline.", priority: 'High', riskLevel: 'High', proof: 'Project Plan', location: 'Office' },
                    { id: 'BUILD-002', description: "Select and contract with architects, contractors, and other vendors.", priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'Office' },
                    { id: 'BUILD-003', description: "Conduct weekly progress meetings with all stakeholders and track milestones against the plan.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Site/Office' },
                    { id: 'BUILD-004', description: "Manage the procurement and installation of furniture, fixtures, and equipment (FF&E).", priority: 'High', riskLevel: 'Medium', proof: 'Procurement Log', location: 'Office' },
                    { id: 'BUILD-005', description: "Perform a final 'snagging' list and ensure all defects are rectified before final payment and handover.", priority: 'High', riskLevel: 'High', proof: 'Snag List', location: 'New Site' },
                ]
            },
            {
                title: "🧑‍⚖️ New Employee Legal Onboarding",
                department: "HR/Legal",
                frequency: "Per Hire",
                role: "HR Manager",
                summary: "Ensures every new hire is onboarded in a legally compliant manner, protecting the company from future disputes.",
                tasks: [
                    { id: 'LEGAL-HR-01', description: "Ensure the signed offer letter is on file, including start date, compensation, and position.", priority: 'High', riskLevel: 'High', proof: 'Signed Offer Letter', location: 'Employee File' },
                    { id: 'LEGAL-HR-02', description: "Verify a signed Non-Disclosure and Confidentiality Agreement is executed.", priority: 'High', riskLevel: 'High', proof: 'Signed NDA', location: 'Employee File' },
                    { id: 'LEGAL-HR-03', description: "Confirm the new hire has received and acknowledged the company's employee handbook.", priority: 'High', riskLevel: 'Medium', proof: 'Acknowledgement Form', location: 'Employee File' },
                    { id: 'LEGAL-HR-04', description: "Complete all required statutory paperwork (e.g., tax forms, social security).", priority: 'High', riskLevel: 'High', proof: 'Completed Forms', location: 'Employee File' },
                    { id: 'LEGAL-HR-005', description: "Conduct background verification as per company policy and document the results.", priority: 'High', riskLevel: 'High', proof: 'Background Check Report', location: 'Employee File' }
                ]
            },
            {
                title: "✍️ Vendor Contract Review (For Non-Lawyers)",
                department: "Procurement/Management",
                frequency: "Per Contract",
                role: "Manager",
                summary: "A basic checklist for managers to spot red flags in standard vendor contracts before escalating to legal.",
                tasks: [
                    { id: 'LEGAL-VEND-01', description: "Check the 'Term' and 'Termination' clauses. Can we exit the contract if needed?", priority: 'High', riskLevel: 'High', proof: 'Contract Review Notes', location: 'Contract Doc' },
                    { id: 'LEGAL-VEND-02', description: "Review the 'Limitation of Liability' clause. Is their liability capped at an unreasonably low amount?", priority: 'High', riskLevel: 'High', proof: 'Contract Review Notes', location: 'Contract Doc' },
                    { id: 'LEGAL-VEND-03', description: "Identify the 'Payment Terms'. Are they aligned with our company's payment cycle?", priority: 'High', riskLevel: 'Medium', proof: 'Contract Review Notes', location: 'Contract Doc' },
                    { id: 'LEGAL-VEND-04', description: "Check the 'Confidentiality' clause to ensure it protects our company's data.", priority: 'High', riskLevel: 'Medium', proof: 'Contract Review Notes', location: 'Contract Doc' },
                    { id: 'LEGAL-VEND-005', description: "Look for any 'Auto-Renewal' clauses that could lock the company into an unwanted long-term agreement.", priority: 'High', riskLevel: 'High', proof: 'Contract Review Notes', location: 'Contract Doc' }
                ]
            },
            {
                title: "🌐 Website Legal Health Check",
                department: "Marketing/Legal",
                frequency: "Quarterly",
                role: "Marketing Manager",
                summary: "Ensures your public-facing website has the necessary legal notices to comply with data privacy and other regulations.",
                tasks: [
                    { id: 'LEGAL-WEB-01', description: "Verify that a 'Privacy Policy' link is clearly visible in the website footer.", priority: 'High', riskLevel: 'High', proof: 'Website Screenshot', location: 'Website Footer' },
                    { id: 'LEGAL-WEB-02', description: "Ensure a 'Terms of Service' link is present in the website footer.", priority: 'High', riskLevel: 'High', proof: 'Website Screenshot', location: 'Website Footer' },
                    { id: 'LEGAL-WEB-03', description: "Check that any form collecting user data links to the Privacy Policy and includes a consent checkbox.", priority: 'High', riskLevel: 'High', proof: 'Website Screenshot', location: 'Contact/Signup Forms' },
                    { id: 'LEGAL-WEB-04', description: "If using cookies, ensure a cookie consent banner is active and functional.", priority: 'High', riskLevel: 'High', proof: 'Website Screenshot', location: 'Website Homepage' },
                    { id: 'LEGAL-WEB-005', description: "Review marketing copy to ensure it does not contain misleading claims or guarantees.", priority: 'High', riskLevel: 'Medium', proof: 'Content Audit', location: 'Website' }
                ]
            },
            {
                title: "📊 Quarterly Business Review (QBR) Framework",
                department: "Management",
                frequency: "Quarterly",
                role: "Head of Department",
                summary: "A structured agenda to conduct a quarterly review of departmental performance, focusing on performance against KPIs, budget variance, and strategic goals.",
                tasks: [
                    { id: 'QBR-01', description: "Review performance against key KPIs.", priority: 'High', riskLevel: 'Medium', proof: 'KPI Dashboard', location: 'Meeting' },
                    { id: 'QBR-02', description: "Analyze budget vs. actual spend for the quarter and explain variances.", priority: 'High', riskLevel: 'High', proof: 'Financial Report', location: 'Meeting' },
                    { id: 'QBR-03', description: "Present a summary of major incidents or achievements from the quarter.", priority: 'High', riskLevel: 'Medium', proof: 'Presentation', location: 'Meeting' },
                    { id: 'QBR-04', description: "Set strategic priorities and objectives for the upcoming quarter.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Meeting' },
                    { id: 'QBR-05', description: "Review progress on strategic initiatives from the previous quarter.", priority: 'High', riskLevel: 'Medium', proof: 'Progress Report', location: 'Meeting' }
                ]
            },
            {
                title: "🎯 Annual Strategic Planning & Objective Setting",
                department: "Management",
                frequency: "Annually",
                role: "Head of Department",
                summary: "A checklist to guide the annual strategic planning process, aligning its goals with the broader company objectives.",
                tasks: [
                    { id: 'STRAT-01', description: "Review the company's overall strategic goals for the upcoming year.", priority: 'High', riskLevel: 'Medium', proof: 'Company Strategy Doc', location: 'Office' },
                    { id: 'STRAT-02', description: "Conduct a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for the department.", priority: 'High', riskLevel: 'Medium', proof: 'SWOT Analysis Document', location: 'Office' },
                    { id: 'STRAT-03', description: "Define clear, measurable objectives for the department.", priority: 'High', riskLevel: 'High', proof: 'Objectives List', location: 'Office' },
                    { id: 'STRAT-04', description: "Develop a high-level budget and resource plan to support the defined objectives.", priority: 'High', riskLevel: 'High', proof: 'Budget Plan', location: 'Office' },
                    { id: 'STRAT-05', description: "Present the strategic plan to senior leadership for alignment and approval.", priority: 'High', riskLevel: 'High', proof: 'Presentation Deck', location: 'Board Room' }
                ]
            },
            {
                title: "🏢 Corporate Asset Lifecycle Management",
                department: "Admin/Finance",
                frequency: "Ongoing",
                role: "Asset Manager",
                summary: "A checklist to track and manage critical company assets (e.g., laptops, furniture, equipment) from procurement to disposal.",
                tasks: [
                    { id: 'ASSET-01', description: "Assign a unique asset tag and log all new assets into the central asset register.", priority: 'High', riskLevel: 'Medium', proof: 'Asset Register', location: 'Office' },
                    { id: 'ASSET-02', description: "Conduct a physical audit of all assets on a semi-annual basis to verify existence and condition.", priority: 'High', riskLevel: 'Medium', proof: 'Audit Report', location: 'Company-wide' },
                    { id: 'ASSET-03', description: "Implement a process for managing the transfer of assets between employees or departments.", priority: 'Medium', riskLevel: 'Low', proof: 'Transfer Form', location: 'Office' },
                    { id: 'ASSET-04', description: "Follow a formal disposal process for retired assets, including data wiping for IT equipment and documenting disposal certificates.", priority: 'High', riskLevel: 'High', proof: 'Disposal Certificate', location: 'Office' },
                    { id: 'ASSET-05', description: "Update the asset register immediately upon transfer or disposal of an asset.", priority: 'High', riskLevel: 'Medium', proof: 'Register Update Log', location: 'Office' }
                ]
            },
            {
                title: "🧑‍⚖️ Employee Disciplinary Action Protocol",
                department: "HR",
                frequency: "Per Incident",
                role: "HR Manager",
                summary: "A legally sound checklist to ensure a fair and consistent process for managing employee disciplinary issues, from verbal warnings to termination.",
                tasks: [
                    { id: 'HR-DISC-001', description: "Document the specific policy violation and gather all relevant evidence (e.g., emails, witness statements).", priority: 'High', riskLevel: 'High', proof: 'Investigation File', location: 'HR Office' },
                    { id: 'HR-DISC-002', description: "Conduct a formal meeting with the employee, ensuring a witness is present, and clearly explain the issue.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'HR Office' },
                    { id: 'HR-DISC-003', description: "Issue the appropriate level of warning (verbal, written, final) and have the employee sign an acknowledgment.", priority: 'High', riskLevel: 'High', proof: 'Signed Warning Letter', location: 'HR Office' },
                    { id: 'HR-DISC-004', description: "Clearly document the required improvement and the consequences of further violations.", priority: 'High', riskLevel: 'High', proof: 'Performance Improvement Plan', location: 'HR Office' },
                    { id: 'HR-DISC-005', description: "Consult with legal counsel before any termination decision is made.", priority: 'High', riskLevel: 'High', proof: 'Legal Consultation Log', location: 'HR Office' }
                ]
            }
        ]
    },
    {
        id: 'stadium_operations_pack',
        title: "Sports Complex & Stadium Operations",
        priceUSD: 199.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Events",
        description: "For venue managers and event producers. An essential toolkit for managing large-scale public venues, focusing on crowd safety, structural integrity, and event readiness.",
        icon: <Trophy className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent" as const,
        sampleItems: [
            "Master 'Crowd Control & Emergency Egress' planning.",
            "Implement a 'Structural & Seating Inspection' protocol.",
            "Standardize 'Event-Day Readiness' checks for vendors and staff.",
            "Includes checklists for 'Field of Play Safety' and 'Post-Event Cleanup'."
        ],
        globalStandards: {
            title: "Aligned with International Venue Management Standards",
            standards: [
                { name: "Public Safety", description: "Best practices for crowd management, emergency evacuation (e.g., NFPA 101), and security screening." },
                { name: "Structural Safety", description: "Guidelines for regular inspection of seating, barricades, and public structures." },
                { name: "Event Operations", description: "Protocols for vendor management, ticketing, and post-event cleanup." },
                { name: "Sporting Integrity", description: "Standards for maintaining the field of play and ensuring fair competition." }
            ]
        },
        checklists: [
            {
                title: "🏟️ Event-Day Readiness Checklist",
                department: "Operations",
                frequency: "Pre-Event",
                role: "Event Manager",
                summary: "A final readiness check on the day of the event to ensure all systems, staff, and vendors are in place for a successful event.",
                tasks: [
                    { id: 'STAD-EDR-01', description: "Confirm all security and stewarding staff are at their posts.", priority: 'High', riskLevel: 'High', proof: 'Staff Roster Check', location: 'Venue-wide' },
                    { id: 'STAD-EDR-02', description: "Test all public address (PA) systems and emergency announcement channels.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Control Room' },
                    { id: 'STAD-EDR-03', description: "Verify all food and beverage vendors are operational and compliant with hygiene standards.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Audit', location: 'Concession Areas' },
                    { id: 'STAD-EDR-04', description: "Ensure all emergency exits are unobstructed and clearly marked.", priority: 'High', riskLevel: 'High', proof: 'Exit Inspection Log', location: 'Venue-wide' },
                    { id: 'STAD-EDR-05', description: "Check that ticketing and access control systems are fully functional.", priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'Entry Gates' }
                ]
            },
            {
                title: "⚽ Field of Play & Sports Equipment Safety",
                department: "Groundskeeping/Operations",
                frequency: "Pre-Game/Daily",
                role: "Grounds Manager",
                summary: "Ensures the playing surface and all related equipment are safe for athletes and meet competition standards.",
                tasks: [
                    { id: 'FOP-001', description: "Inspect the playing surface for any hazards (e.g., holes, debris, uneven turf).", priority: 'High', riskLevel: 'High', proof: 'Surface Inspection Log', location: 'Field/Court' },
                    { id: 'FOP-002', description: "Ensure goalposts, nets, or other fixed equipment are securely anchored.", priority: 'High', riskLevel: 'High', proof: 'Structural Check', location: 'Field/Court' },
                    { id: 'FOP-003', description: "Verify that all field markings are correct and clearly visible as per sport regulations.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Field/Court' },
                    { id: 'FOP-004', description: "Check team benches and technical areas for safety and cleanliness.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Inspection', location: 'Dugouts/Benches' },
                    { id: 'FOP-005', description: "Confirm that any on-field branding or equipment does not pose a hazard to players.", priority: 'High', riskLevel: 'Medium', proof: 'Safety Walkthrough', location: 'Field/Court' }
                ]
            },
            {
                title: "👨‍👩‍👧‍👦 Crowd Management & Security Screening",
                department: "Security",
                frequency: "Event Day",
                role: "Security Manager",
                summary: "Manages the safe and efficient entry of guests, including security screening and ticket validation.",
                tasks: [
                    { id: 'CROWD-SEC-001', description: "Brief all security staff on their positions and responsibilities for the event.", priority: 'High', riskLevel: 'High', proof: 'Briefing Log', location: 'Security Office' },
                    { id: 'CROWD-SEC-002', description: "Ensure all metal detectors and bag check stations are operational and properly staffed.", priority: 'High', riskLevel: 'High', proof: 'Equipment Check Log', location: 'Entry Gates' },
                    { id: 'CROWD-SEC-003', description: "Monitor crowd flow and queue lengths in real-time to prevent bottlenecks and crushing.", priority: 'High', riskLevel: 'High', proof: 'CCTV Observation', location: 'Entry Gates' },
                    { id: 'CROWD-SEC-004', description: "Ensure staff are trained on the protocol for handling prohibited items.", priority: 'High', riskLevel: 'Medium', proof: 'Training Refresher', location: 'Entry Gates' },
                    { id: 'CROWD-SEC-005', description: "Coordinate with local police or emergency services as per the event plan.", priority: 'High', riskLevel: 'High', proof: 'Communication Check', location: 'Control Room' }
                ]
            },
            {
                title: "🪑 Structural & Seating Inspection",
                department: "Facilities/Maintenance",
                frequency: "Weekly/Pre-Event",
                role: "Facility Manager",
                summary: "A routine check to ensure the structural integrity of stands, railings, and seats to prevent collapses or injuries.",
                tasks: [
                    { id: 'STRUCT-001', description: "Visually inspect a section of seating for loose bolts, cracks, or other damage.", priority: 'High', riskLevel: 'High', proof: 'Seating Inspection Log', location: 'Grandstands' },
                    { id: 'STRUCT-002', description: "Check all safety railings and barricades for stability and structural integrity.", priority: 'High', riskLevel: 'High', proof: 'Railing Inspection Log', location: 'Venue-wide' },
                    { id: 'STRUCT-003', description: "Inspect walkways, stairs, and aisles for any tripping hazards or damage.", priority: 'High', riskLevel: 'Medium', proof: 'Walkway Inspection Log', location: 'Venue-wide' },
                    { id: 'STRUCT-004', description: "Review reports from any third-party structural engineers.", priority: 'High', riskLevel: 'High', proof: 'Report Review', location: 'Office' },
                    { id: 'STRUCT-005', description: "Immediately cordon off and report any areas found to be unsafe.", priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Affected Area' }
                ]
            },
            {
                title: "🤝 Vendor & Concessionaire Management",
                department: "Operations",
                frequency: "Event Day",
                role: "Operations Manager",
                summary: "Audits all third-party vendors operating within the stadium to ensure they comply with safety, hygiene, and contractual obligations.",
                tasks: [
                    { id: 'VENDOR-STAD-001', description: "Verify that all vendors have submitted the required permits and insurance certificates.", priority: 'High', riskLevel: 'High', proof: 'Document Check', location: 'Office' },
                    { id: 'VENDOR-STAD-002', description: "Audit food and beverage stalls for compliance with hygiene and food safety standards.", priority: 'High', riskLevel: 'High', proof: 'Hygiene Audit Form', location: 'Concession Areas' },
                    { id: 'VENDOR-STAD-003', description: "Check that vendors are only operating within their designated space.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Venue-wide' },
                    { id: 'VENDOR-STAD-004', description: "Ensure all temporary structures or electrical connections used by vendors are safe.", priority: 'High', riskLevel: 'High', proof: 'Safety Inspection', location: 'Vendor Stalls' },
                    { id: 'VENDOR-STAD-005', description: "Monitor vendor staff for proper conduct and adherence to venue rules.", priority: 'Medium', riskLevel: 'Medium', proof: 'Observation Log', location: 'Venue-wide' }
                ]
            },
            {
                title: "🧹 Post-Event Cleanup & Waste Management",
                department: "Facilities",
                frequency: "Post-Event",
                role: "Facility Manager",
                summary: "A systematic approach to cleaning the venue after an event, focusing on efficiency and environmental compliance.",
                tasks: [
                    { id: 'STAD-PEC-001', description: "Deploy cleaning crews to all zones according to a pre-defined schedule.", priority: 'High', riskLevel: 'Medium', proof: 'Deployment Plan', location: 'Venue-wide' },
                    { id: 'STAD-PEC-002', description: "Segregate waste into recyclables, compostables, and general waste streams.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Log', location: 'Waste Management Area' },
                    { id: 'STAD-PEC-003', description: "Conduct a final inspection of seating areas, restrooms, and common areas for cleanliness.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Report', location: 'Venue-wide' },
                    { id: 'STAD-PEC-004', description: "Report any damages to seats, railings, or other infrastructure for repair.", priority: 'High', riskLevel: 'Medium', proof: 'Damage Report', location: 'Venue-wide' },
                    { id: 'STAD-PEC-005', description: "Ensure all vendor areas are cleared and cleaned as per their agreement.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Checkout Form', location: 'Vendor Areas' }
                ]
            },
            {
                title: "🚑 Medical & First Aid Services",
                department: "Health & Safety",
                frequency: "Pre-Event",
                role: "Medical Coordinator",
                summary: "Ensures the venue is prepared to handle medical emergencies, from minor injuries to major incidents.",
                tasks: [
                    { id: 'MED-001', description: "Ensure all first-aid stations are clearly marked and fully stocked.", priority: 'High', riskLevel: 'High', proof: 'Stock Checklist', location: 'First Aid Stations' },
                    { id: 'MED-002', description: "Verify the credentials and staffing levels of the contracted medical provider.", priority: 'High', riskLevel: 'High', proof: 'Contract & Roster Check', location: 'Medical Office' },
                    { id: 'MED-003', description: "Confirm ambulance and paramedic teams are on standby and know their designated positions.", priority: 'High', riskLevel: 'High', proof: 'Briefing Log', location: 'Medical Office' },
                    { id: 'MED-004', description: "Brief all security and event staff on how to report a medical incident and the locations of first-aid posts.", priority: 'High', riskLevel: 'High', proof: 'Staff Briefing', location: 'Briefing Room' },
                    { id: 'MED-005', description: "Test communication channels between medical teams, security, and the event control room.", priority: 'High', riskLevel: 'High', proof: 'Comms Test Log', location: 'Control Room' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Monthly",
                role: "Facility Manager",
                summary: "A proactive checklist for preventing and managing pest infestations in a large, open venue with many food sources.",
                tasks: [
                    { id: 'PEST-STAD-001', description: "Inspect F&B kitchens, commissaries, and waste disposal areas for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'F&B Areas' },
                    { id: 'PEST-STAD-002', description: "Ensure all waste bins across the stadium have lids and are emptied on a strict schedule during and after events.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Plan', location: 'Venue-wide' },
                    { id: 'PEST-STAD-003', description: "Check and maintain structural integrity, sealing gaps in walls, floors, and utility entry points.", priority: 'High', riskLevel: 'Medium', proof: 'Structural Maintenance Log', location: 'Venue-wide' },
                    { id: 'PEST-STAD-004', description: "Review and verify the action plan from the professional pest control vendor's reports.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Action Log', location: 'Facility Office' },
                    { id: 'PEST-STAD-005', description: "Implement a strict cleaning schedule for seating areas to remove food debris after every event.", priority: 'High', riskLevel: 'High', proof: 'Post-Event Cleaning Report', location: 'Grandstands' }
                ]
            }
        ]
    }
]
