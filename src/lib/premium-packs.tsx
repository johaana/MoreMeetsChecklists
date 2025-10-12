
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
                    { id: 'PEST-EDU-004', description: "Review reports from the pest control vendor and ensure all recommended actions are followed.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Review', location: 'Admin Office' },
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
                { name: "Efficiency", description: "Principles of lean warehousing (5S) to improve flow and reduce waste." },
                { name: "Security", description: "TAPA-FSR standards for freight security requirements."}
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
                { name: "Risk Management", description: "Frameworks for job hazard analysis (JHA), permit-to-work systems, and incident investigation." },
                { name: "Environmental", description: "ISO 14001 for managing construction waste and environmental impact."}
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
                { name: "Data Privacy", description: "Basics of website compliance including terms of service and privacy policies." },
                { name: "Corporate Governance", description: "Principles of asset management and strategic planning."}
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
        id: 'events_management_playbook',
        title: "Concerts & Live Events Playbook",
        priceUSD: 149.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Events",
        description: "For event managers and production heads. A toolkit to manage concerts and live events, focusing on safety, technical execution, and compliance.",
        icon: <Megaphone className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        sampleItems: [
            "Prevent stage collapses with a 'Structural & Rigging Safety' checklist.",
            "Master crowd safety with protocols for 'Barricade & Egress Management'.",
            "Ensure all vendor and local authority permits are in order.",
            "Includes a 'Weather Contingency & Emergency Evacuation Plan'."
        ],
        globalStandards: {
            title: "Aligned with Global Event Safety Standards",
            standards: [
                { name: "Structural & Stage", description: "OSHA guidelines for temporary structures, rigging safety (e.g., ANSI E1.21)." },
                { name: "Crowd Safety", description: "NFPA 101 Life Safety Code, best practices for crowd management and emergency egress." },
                { name: "Electrical Safety", description: "Protocols for temporary power distribution and equipment grounding." },
                { name: "Risk Management", description: "ISO 31000 principles for risk assessment and contingency planning." }
            ]
        },
        checklists: [
            {
                title: "🏗️ Structural & Rigging Safety",
                department: "Production",
                frequency: "Pre-Show",
                role: "Production Manager",
                summary: "Prevents catastrophic failures by ensuring all temporary structures are safely installed and certified.",
                tasks: [
                    { id: 'EVENT-RIG-01', description: "Obtain a structural engineering certificate for the stage and all rigging points.", priority: 'High', riskLevel: 'High', proof: 'Engineering Certificate', location: 'Production Office' },
                    { id: 'EVENT-RIG-02', description: "Inspect all rigging hardware (shackles, motors, trusses) for damage or wear before use.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Stage Area' },
                    { id: 'EVENT-RIG-03', description: "Verify that load calculations are complete and not exceeded for any rigging point.", priority: 'High', riskLevel: 'High', proof: 'Load Calculation Sheet', location: 'Production Office' },
                    { id: 'EVENT-RIG-04', description: "Ensure all personnel working at height are using appropriate fall protection.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Stage Area' },
                    { id: 'EVENT-RIG-05', description: "Check that the stage and all structures are properly grounded.", priority: 'High', riskLevel: 'High', proof: 'Electrical Grounding Report', location: 'Stage Area' }
                ]
            },
            {
                title: "⚡ Electrical & Power Management",
                department: "Production",
                frequency: "Pre-Show",
                role: "Electrical Lead",
                summary: "Ensures a stable and safe power supply for all event equipment, preventing outages and electrical hazards.",
                tasks: [
                    { id: 'EVENT-ELEC-01', description: "Verify that generators are properly sized for the total power load.", priority: 'High', riskLevel: 'High', proof: 'Power Calculation Sheet', location: 'Genset Area' },
                    { id: 'EVENT-ELEC-02', description: "Inspect all power cables for damage and ensure they are properly shielded from public access.", priority: 'High', riskLevel: 'High', proof: 'Cable Inspection Log', location: 'Venue-wide' },
                    { id: 'EVENT-ELEC-03', description: "Ensure all power distribution boxes are covered, protected from weather, and have appropriate circuit breakers.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Venue-wide' },
                    { id: 'EVENT-ELEC-04', description: "Test all connections and power sources before the event begins.", priority: 'High', riskLevel: 'High', proof: 'Power Test Log', location: 'Venue-wide' },
                    { id: 'EVENT-ELEC-05', description: "Have a qualified electrician on standby for the duration of the event.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Roster', location: 'Production Office' }
                ]
            },
            {
                title: "👨‍👩‍👧‍👦 Barricade, Egress & Crowd Flow",
                department: "Security",
                frequency: "Pre-Show",
                role: "Security Manager",
                summary: "A critical checklist for preventing crowd crushes and ensuring swift evacuation in an emergency.",
                tasks: [
                    { id: 'EVENT-CROWD-01', description: "Verify that all barricades are correctly positioned as per the crowd management plan.", priority: 'High', riskLevel: 'High', proof: 'Plan vs. Actual Photo', location: 'Venue-wide' },
                    { id: 'EVENT-CROWD-02', description: "Inspect all emergency exits to ensure they are unlocked, unobstructed, and clearly lit.", priority: 'High', riskLevel: 'High', proof: 'Exit Inspection Log', location: 'Venue-wide' },
                    { id: 'EVENT-CROWD-03', description: "Establish and brief staff on designated entry and exit routes for different ticket tiers.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Briefing Log', location: 'Briefing Area' },
                    { id: 'EVENT-CROWD-04', description: "Position security personnel at critical points (e.g., front of stage, exit routes) to manage crowd density.", priority: 'High', riskLevel: 'High', proof: 'Deployment Map', location: 'Control Room' },
                    { id: 'EVENT-CROWD-05', description: "Test communication systems between security personnel and the event control room.", priority: 'High', riskLevel: 'High', proof: 'Comms Test Log', location: 'Control Room' }
                ]
            },
            {
                title: "📝 Vendor & Permit Compliance",
                department: "Operations",
                frequency: "Pre-Event",
                role: "Operations Manager",
                summary: "Ensures all legal and administrative requirements are met before the event, avoiding fines or shutdowns.",
                tasks: [
                    { id: 'EVENT-PERMIT-01', description: "Verify that all required permits (noise, fire, liquor, etc.) have been obtained and are available on site.", priority: 'High', riskLevel: 'High', proof: 'Permit Binder', location: 'Production Office' },
                    { id: 'EVENT-PERMIT-02', description: "Check that all third-party vendors have submitted their required insurance and licenses.", priority: 'High', riskLevel: 'High', proof: 'Vendor Document Checklist', location: 'Production Office' },
                    { id: 'EVENT-PERMIT-03', description: "Ensure F&B vendors are compliant with local health and hygiene standards.", priority: 'High', riskLevel: 'High', proof: 'Health Inspection Report', location: 'F&B Stalls' },
                    { id: 'EVENT-PERMIT-04', description: "Confirm that security staffing levels meet the requirements stipulated in the event permit.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Roster vs. Permit', location: 'Production Office' },
                    { id: 'EVENT-PERMIT-05', description: "Liaise with local police and fire departments to confirm they are aware of the event plan.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Production Office' }
                ]
            },
            {
                title: "🚑 Medical & Emergency Readiness",
                department: "Safety",
                frequency: "Pre-Show",
                role: "Safety Officer",
                summary: "Prepares the event for medical emergencies and other potential crises.",
                tasks: [
                    { id: 'EVENT-MED-01', description: "Ensure first-aid stations and ambulance standby points are clearly marked and accessible.", priority: 'High', riskLevel: 'High', proof: 'Venue Map', location: 'Venue-wide' },
                    { id: 'EVENT-MED-02', description: "Verify credentials and staffing levels of the medical team.", priority: 'High', riskLevel: 'High', proof: 'Medical Team Roster', location: 'Medical Tent' },
                    { id: 'EVENT-MED-03', description: "Check that first-aid kits are fully stocked and resuscitation equipment is functional.", priority: 'High', riskLevel: 'High', proof: 'Equipment Check Log', location: 'Medical Tent' },
                    { id: 'EVENT-MED-04', description: "Brief all event staff on the procedure for reporting a medical emergency.", priority: 'High', riskLevel: 'High', proof: 'Staff Briefing Log', location: 'Briefing Area' },
                    { id: 'EVENT-MED-05', description: "Establish a clear communication channel between the medical team and event control.", priority: 'High', riskLevel: 'High', proof: 'Comms Test', location: 'Control Room' }
                ]
            },
            {
                title: "⛈️ Weather Contingency & Evacuation Plan",
                department: "Safety/Production",
                frequency: "Pre-Event",
                role: "Event Director",
                summary: "A plan to safely manage the event during adverse weather, including specific triggers for pausing or evacuating.",
                tasks: [
                    { id: 'EVENT-WEATHER-01', description: "Define clear weather-based trigger points (e.g., wind speed > 40mph, lightning within 5 miles) for action.", priority: 'High', riskLevel: 'High', proof: 'Contingency Plan Document', location: 'Production Office' },
                    { id: 'EVENT-WEATHER-02', description: "Designate a primary decision-maker who has the authority to stop or cancel the show for safety.", priority: 'High', riskLevel: 'High', proof: 'Chain of Command Document', location: 'Production Office' },
                    { id: 'EVENT-WEATHER-03', description: "Prepare pre-scripted announcements for weather-related pauses or evacuations.", priority: 'High', riskLevel: 'Medium', proof: 'Announcement Scripts', location: 'Control Room' },
                    { id: 'EVENT-WEATHER-04', description: "Establish a safe shelter area for attendees in case of evacuation.", priority: 'High', riskLevel: 'High', proof: 'Venue Map', location: 'Production Office' },
                    { id: 'EVENT-WEATHER-05', description: "Monitor a reliable weather feed in real-time at the event control room.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Control Room' }
                ]
            },
            {
                title: "🔊 Sound & Lighting Operations",
                department: "Technical",
                frequency: "Pre-Show",
                role: "Technical Director",
                summary: "Ensures all audio-visual equipment is functioning correctly for a flawless show.",
                tasks: [
                    { id: 'EVENT-AV-01', description: "Conduct a full sound check, including all microphones, monitors, and main PA speakers.", priority: 'High', riskLevel: 'Medium', proof: 'Sound Check Log', location: 'Stage/FOH' },
                    { id: 'EVENT-AV-02', description: "Test all lighting fixtures, consoles, and special effects (e.g., strobes, haze).", priority: 'High', riskLevel: 'Medium', proof: 'Lighting Check Log', location: 'Stage/FOH' },
                    { id: 'EVENT-AV-03', description: "Verify that all video screens and projectors are displaying content correctly.", priority: 'High', riskLevel: 'Medium', proof: 'Video Test Pattern', location: 'Stage/Screens' },
                    { id: 'EVENT-AV-04', description: "Ensure communication systems (intercoms, radios) for the technical crew are clear.", priority: 'High', riskLevel: 'Medium', proof: 'Comms Check', location: 'Backstage/FOH' },
                    { id: 'EVENT-AV-05', description: "Check sound levels at various points in the audience area to ensure they are within legal limits and provide a good experience.", priority: 'High', riskLevel: 'Medium', proof: 'SPL Meter Reading Log', location: 'Audience Area' }
                ]
            },
            {
                title: "🎤 Backstage & Artist Management",
                department: "Artist Liaison",
                frequency: "Event Day",
                role: "Stage Manager",
                summary: "Ensures a smooth experience for performers, covering dressing rooms, technical riders, and scheduling.",
                tasks: [
                    { id: 'EVENT-BS-01', description: "Verify that the artist's dressing room is prepared as per their contractual rider (e.g., catering, amenities).", priority: 'Medium', riskLevel: 'Low', proof: 'Rider Checklist', location: 'Dressing Rooms' },
                    { id: 'EVENT-BS-02', description: "Confirm that all technical requirements from the artist's rider have been met on stage.", priority: 'High', riskLevel: 'Medium', proof: 'Technical Rider Checklist', location: 'Stage' },
                    { id: 'EVENT-BS-03', description: "Establish and communicate the day's schedule to the artist and their team (soundcheck time, show time).", priority: 'High', riskLevel: 'Medium', proof: 'Schedule Handout', location: 'Backstage' },
                    { id: 'EVENT-BS-04', description: "Ensure secure and clear pathways for artists to move between dressing rooms and the stage.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Backstage' },
                    { id: 'EVENT-BS-05', description: "Coordinate with security for the artist's arrival and departure.", priority: 'High', riskLevel: 'Medium', proof: 'Security Plan', location: 'Backstage' }
                ]
            }
        ]
    },
    {
        id: 'personal_travel_pack',
        title: "Personal Travel & Pet Care Pack",
        priceUSD: 9.99,
        priceINR: 1299,
        paymentId: 'pl_ROLjNNiQa8G8XJ',
        category: "Personal",
        description: "For the organized individual. A pack to manage your travels and ensure your pets are cared for while you're away.",
        icon: <PawPrint className="w-8 h-8 text-primary" />,
        badgeText: "Bestseller",
        badgeVariant: "default" as const,
        sampleItems: [
            "A comprehensive 'Travel Packing & Prep' checklist.",
            "A detailed 'Pet Sitter Instructions' checklist.",
            "An 'Itinerary & Document' checklist for your trip.",
            "A 'Home Security Checklist' for while you're away."
        ],
        checklists: [
             {
                title: "✈️ Travel Packing & Pre-Departure Checklist",
                department: "Personal",
                frequency: "Per Trip",
                role: "Traveler",
                summary: "The ultimate list to ensure you pack everything you need and prepare your home before you leave for a stress-free vacation.",
                tasks: [
                    { id: 'TVL-PC-01', description: "Pack clothing appropriate for the destination's weather.", priority: 'High', riskLevel: 'Low', proof: 'Packed Luggage', location: 'Home' },
                    { id: 'TVL-PC-02', description: "Gather all necessary travel documents: passports, visas, tickets, and hotel confirmations.", priority: 'High', riskLevel: 'High', proof: 'Document Folder', location: 'Home' },
                    { id: 'TVL-PC-03', description: "Pack essential medications and a basic first-aid kit.", priority: 'High', riskLevel: 'High', proof: 'Packed Bag', location: 'Home' },
                    { id: 'TVL-PC-04', description: "Notify your bank/credit card companies of your travel dates to avoid blocked cards.", priority: 'High', riskLevel: 'Medium', proof: 'Bank Communication', location: 'Home' },
                    { id: 'TVL-PC-05', description: "Arrange for mail to be held or collected.", priority: 'Medium', riskLevel: 'Low', proof: 'Post Office Request', location: 'Home' },
                    { id: 'TVL-PC-06', description: "Unplug non-essential electronics and set thermostat to an energy-saving temperature.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Home' },
                    { id: 'TVL-PC-07', description: "Charge all electronic devices before leaving for the airport.", priority: 'High', riskLevel: 'Low', proof: 'Charged Devices', location: 'Home' },
                    { id: 'TVL-PC-08', description: "Share your itinerary with a family member or friend.", priority: 'High', riskLevel: 'Medium', proof: 'Email/Message', location: 'Home' },
                ]
            },
            {
                title: "🐾 Pet Sitter & Home Care Instructions",
                department: "Personal",
                frequency: "Per Trip",
                role: "Pet Owner",
                summary: "A detailed instruction sheet for your pet sitter to ensure your pet and home are well taken care of while you're away.",
                tasks: [
                    { id: 'PET-SIT-01', description: "Provide detailed feeding instructions: type of food, quantity, and feeding times.", priority: 'High', riskLevel: 'High', proof: 'Written Instructions', location: 'Home' },
                    { id: 'PET-SIT-02', description: "List all medications with dosage and administration times.", priority: 'High', riskLevel: 'High', proof: 'Medication Schedule', location: 'Home' },
                    { id: 'PET-SIT-03', description: "Provide contact information for your veterinarian and a 24-hour emergency vet clinic.", priority: 'High', riskLevel: 'High', proof: 'Contact List', location: 'Home' },
                    { id: 'PET-SIT-04', description: "Explain the pet's daily routine, including walk times, playtime, and sleeping arrangements.", priority: 'High', riskLevel: 'Medium', proof: 'Written Routine', location: 'Home' },
                    { id: 'PET-SIT-05', description: "Leave instructions for home care, such as watering plants or bringing in mail.", priority: 'Medium', riskLevel: 'Low', proof: 'Written Instructions', location: 'Home' },
                    { id: 'PET-SIT-06', description: "Show the sitter where all pet supplies are located (food, leashes, toys, cleaning supplies).", priority: 'High', riskLevel: 'Low', proof: 'Physical Walkthrough', location: 'Home' },
                    { id: 'PET-SIT-07', description: "Provide your contact information and travel itinerary.", priority: 'High', riskLevel: 'Medium', proof: 'Contact Info Sheet', location: 'Home' },
                    { id: 'PET-SIT-08', description: "Inform the sitter of any of your pet's behavioral quirks or fears.", priority: 'Medium', riskLevel: 'Medium', proof: 'Written Notes', location: 'Home' },
                ]
            },
             {
                title: "🏠 Home Cleaning Routine",
                department: "Personal",
                frequency: "Weekly",
                role: "Homeowner",
                summary: "A structured checklist to keep your home clean and organized, breaking down tasks by room and frequency.",
                tasks: [
                    { id: 'CLEAN-WK-01', description: "Change and wash all bed linens and towels.", priority: 'Medium', riskLevel: 'Low', proof: 'Clean Linens', location: 'Bedrooms/Bathrooms' },
                    { id: 'CLEAN-WK-02', description: "Dust all surfaces, including furniture, shelves, and electronics.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'All Rooms' },
                    { id: 'CLEAN-WK-03', description: "Vacuum all carpets and rugs, and mop all hard floors.", priority: 'High', riskLevel: 'Low', proof: 'Clean Floors', location: 'All Rooms' },
                    { id: 'CLEAN-WK-04', description: "Clean and disinfect all bathroom surfaces, including toilet, sink, and shower.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Bathrooms' },
                    { id: 'CLEAN-WK-05', description: "Wipe down all kitchen surfaces, clean the sink, and take out the trash.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' }
                ]
            },
            {
                title: "🎉 Event & Party Planning",
                department: "Personal",
                frequency: "Per Event",
                role: "Host",
                summary: "A step-by-step guide to planning a successful party or event, from budget and guest list to day-of execution.",
                tasks: [
                    { id: 'PARTY-01', description: "Set a budget and create a guest list.", priority: 'High', riskLevel: 'Medium', proof: 'Budget Spreadsheet', location: 'Planning Phase' },
                    { id: 'PARTY-02', description: "Choose a date, time, and venue, and send out invitations.", priority: 'High', riskLevel: 'High', proof: 'Invitations Sent', location: 'Planning Phase' },
                    { id: 'PARTY-03', description: "Plan the menu and arrange for catering or purchase groceries.", priority: 'High', riskLevel: 'Medium', proof: 'Menu Plan', location: 'Planning Phase' },
                    { id: 'PARTY-04', description: "Arrange for entertainment, music, and decorations.", priority: 'Medium', riskLevel: 'Low', proof: 'Booking Confirmations', location: 'Planning Phase' },
                    { id: 'PARTY-05', description: "On the day of the event, set up the venue and do a final check of all arrangements.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Venue' }
                ]
            },
            {
                title: "🛡️ Home Security Checklist (While Away)",
                department: "Personal",
                frequency: "Per Trip",
                role: "Homeowner",
                summary: "A checklist to enhance your home's security and give you peace of mind while you are on vacation.",
                tasks: [
                    { id: 'HOME-SEC-01', description: "Ensure all windows and doors are securely locked.", priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Home' },
                    { id: 'HOME-SEC-02', description: "Set timers for indoor lights to create the appearance of occupancy.", priority: 'High', riskLevel: 'Medium', proof: 'Timers Set', location: 'Home' },
                    { id: 'HOME-SEC-03', description: "Inform a trusted neighbor or friend of your travel dates and ask them to keep an eye on your property.", priority: 'High', riskLevel: 'Medium', proof: 'Neighbor Notified', location: 'Home' },
                    { id: 'HOME-SEC-04', description: "Pause mail and newspaper deliveries to avoid pile-ups.", priority: 'High', riskLevel: 'Medium', proof: 'Delivery Hold Confirmation', location: 'Home' },
                    { id: 'HOME-SEC-05', description: "Test your home security system and ensure monitoring is active.", priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'Home' }
                ]
            },
            {
                title: "🚗 Car Maintenance Checklist",
                department: "Personal",
                frequency: "Monthly/Quarterly",
                role: "Car Owner",
                summary: "A routine checklist to keep your vehicle safe and in good working order, helping to prevent costly breakdowns.",
                tasks: [
                    { id: 'CAR-MAIN-01', description: "Check and top-up all essential fluids (engine oil, coolant, washer fluid).", priority: 'High', riskLevel: 'Medium', proof: 'Fluid Level Check', location: 'Vehicle' },
                    { id: 'CAR-MAIN-02', description: "Inspect tire pressure and tread depth.", priority: 'High', riskLevel: 'High', proof: 'Tire Gauge Reading', location: 'Vehicle' },
                    { id: 'CAR-MAIN-03', description: "Test all exterior and interior lights.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Vehicle' },
                    { id: 'CAR-MAIN-04', description: "Check windshield wipers for wear and tear.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Inspection', location: 'Vehicle' },
                    { id: 'CAR-MAIN-05', description: "Schedule regular professional servicing as per the manufacturer's recommendation.", priority: 'High', riskLevel: 'High', proof: 'Service Record', location: 'Service Center' }
                ]
            },
            {
                title: "💸 Personal Finance & Budgeting",
                department: "Personal",
                frequency: "Monthly",
                role: "Individual",
                summary: "A monthly checklist to manage your finances, track spending, and work towards your financial goals.",
                tasks: [
                    { id: 'FIN-PER-01', description: "Review all bank and credit card statements for accuracy and unauthorized charges.", priority: 'High', riskLevel: 'High', proof: 'Statement Review', location: 'Home Office' },
                    { id: 'FIN-PER-02', description: "Track your income and expenses for the month against your budget.", priority: 'High', riskLevel: 'Medium', proof: 'Budget Spreadsheet', location: 'Home Office' },
                    { id: 'FIN-PER-03', description: "Pay all bills on time to avoid late fees.", priority: 'High', riskLevel: 'High', proof: 'Payment Confirmations', location: 'Home Office' },
                    { id: 'FIN-PER-04', description: "Allocate funds to savings and investment accounts.", priority: 'High', riskLevel: 'Medium', proof: 'Bank Transfers', location: 'Home Office' },
                    { id: 'FIN-PER-05', description: "Review your progress towards short-term and long-term financial goals.", priority: 'Medium', riskLevel: 'Low', proof: 'Goal Tracker', location: 'Home Office' }
                ]
            },
            {
                title: "🌱 Garden & Plant Care Checklist",
                department: "Personal",
                frequency: "Weekly",
                role: "Gardener",
                summary: "A simple checklist to keep your indoor and outdoor plants healthy and thriving.",
                tasks: [
                    { id: 'GARDEN-01', description: "Check soil moisture and water plants as needed.", priority: 'High', riskLevel: 'Low', proof: 'Moisture Check', location: 'Garden/Indoors' },
                    { id: 'GARDEN-02', description: "Inspect plants for signs of pests or diseases and treat them.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Garden/Indoors' },
                    { id: 'GARDEN-03', description: "Remove any dead leaves or weeds.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Garden/Indoors' },
                    { id: 'GARDEN-04', description: "Rotate indoor plants to ensure they get even sunlight.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Indoors' },
                    { id: 'GARDEN-05', description: "Fertilize plants according to their specific needs and season.", priority: 'Medium', riskLevel: 'Low', proof: 'Fertilizing Schedule', location: 'Garden/Indoors' }
                ]
            }
        ]
    },
    {
        id: 'film_production_pack',
        title: "Film Production & Studio Operations",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Film Production",
        description: "For Producers & Studio Heads. A global-standard SOP toolkit for managing film production, focusing on safety, compliance, and budget control.",
        icon: <Video className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        sampleItems: [
            "Ensure legal compliance with 'Pre-Production Clearances' checklist.",
            "Implement 'Film Shoot Safety & Equipment Handling' protocols.",
            "Standardize your 'Post-Production Handover' for smooth workflows.",
            "Includes 'Cast & Crew Compliance' for contracts and NDAs."
        ],
        globalStandards: {
            title: "Aligned with Global Film Production Standards",
            standards: [
                { name: "Safety & Health", description: "ISO 45001 / OSHA for on-set occupational health and safety." },
                { name: "Quality Management", description: "ISO 9001 for process standardization from pre-production to distribution." },
                { name: "Technical Standards", description: "SMPTE guidelines for camera, audio, and post-production formats." },
                { name: "Legal & Compliance", description: "Protocols for copyright, life rights, and union agreements (e.g., SAG-AFTRA, DGA)." }
            ]
        },
        checklists: [
            {
                title: "📝 Pre-Production Planning",
                department: "Production",
                frequency: "Per Project",
                role: "Producer",
                summary: "Ensure smooth planning and international compliance.",
                tasks: [
                    { id: 'FP-PP-01', description: "Verify script is locked and all copyright/chain-of-title documents are secured. (ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Legal Clearance Memo', location: 'Production Office' },
                    { id: 'FP-PP-02', description: "Secure 'Errors & Omissions' (E&O) insurance. (Legal Compliance)", priority: 'High', riskLevel: 'High', proof: 'Insurance Certificate', location: 'Production Office' },
                    { id: 'FP-PP-03', description: "Finalize budget and secure funding tranches. (ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Approved Budget', location: 'Production Office' },
                    { id: 'FP-PP-04', description: "Obtain all necessary permits for chosen locations (film commissions, public property).", priority: 'High', riskLevel: 'High', proof: 'Permit Documents', location: 'Production Office' },
                    { id: 'FP-PP-05', description: "Ensure all cast and key crew contracts are signed, including NDA and IP assignment clauses.", priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'Production Office' }
                ]
            },
            {
                title: "🎬 Production Setup",
                department: "Production/Safety",
                frequency: "Pre-Shoot",
                role: "First AD/Safety Officer",
                summary: "Ensure safety, quality, and technical readiness.",
                tasks: [
                    { id: 'FP-PS-01', description: "Conduct a mandatory safety briefing for all cast and crew. (ISO 45001)", priority: 'High', riskLevel: 'High', proof: 'Safety Meeting Log', location: 'Set' },
                    { id: 'FP-PS-02', description: "Inspect all set constructions and rigging for structural integrity. (ISO 45001)", priority: 'High', riskLevel: 'High', proof: 'Structural Sign-off', location: 'Set' },
                    { id: 'FP-PS-03', description: "Test all special effects, stunts, and pyrotechnics under controlled conditions. (ISO 45001)", priority: 'High', riskLevel: 'High', proof: 'Test Log & Video', location: 'Set' },
                    { id: 'FP-PS-04', description: "Verify that all electrical equipment is properly grounded and cables are safely managed. (OSHA/ISO 45001)", priority: 'High', riskLevel: 'High', proof: 'Electrical Inspection Report', location: 'Set' },
                    { id: 'FP-PS-05', description: "Ensure first aid stations and designated emergency evacuation routes are clearly marked.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Set' }
                ]
            },
            {
                title: "📹 Daily Shooting Protocol",
                department: "Direction/Production",
                frequency: "Daily",
                role: "Director/First AD",
                summary: "Maintain technical consistency and efficiency.",
                tasks: [
                    { id: 'FP-DS-01', description: "Distribute and confirm receipt of daily call sheet to all cast and crew. (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Confirmation Log', location: 'Set' },
                    { id: 'FP-DS-02', description: "Conduct camera, lens, and sound equipment checks against technical specifications. (SMPTE)", priority: 'High', riskLevel: 'High', proof: 'Tech Log', location: 'Set' },
                    { id: 'FP-DS-03', description: "Verify scene continuity (costume, props, makeup) before first shot. (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Continuity Photos', location: 'Set' },
                    { id: 'FP-DS-04', description: "Log all shot footage with scene numbers, take numbers, and director's notes. (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Camera/Sound Reports', location: 'Set' },
                    { id: 'FP-DS-05', description: "Backup all digital footage to at least two separate, secure locations at the end of the day. (Data Security)", priority: 'High', riskLevel: 'High', proof: 'Backup Verification Log', location: 'DIT Station' }
                ]
            },
            {
                title: "✂️ Post-Production",
                department: "Post-Production",
                frequency: "End of Shoot",
                role: "Post-Production Supervisor",
                summary: "Ensure globally compatible content quality.",
                tasks: [
                    { id: 'FP-POST-01', description: "Verify all footage, sound files, and production notes have been received and cataloged. (ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Handover Sign-off Sheet', location: 'Post-Production Suite' },
                    { id: 'FP-POST-02', description: "Create low-resolution proxies for the editing process. (SMPTE)", priority: 'High', riskLevel: 'Medium', proof: 'Proxy Generation Log', location: 'Post-Production Suite' },
                    { id: 'FP-POST-03', description: "Develop a post-production schedule with milestones for picture lock, sound mix, and color grading. (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Post Schedule', location: 'Post-Production Office' },
                    { id: 'FP-POST-04', description: "Establish a clear review and feedback loop with the director and producers. (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Process Document', location: 'Post-Production Office' },
                    { id: 'FP-POST-05', description: "Ensure the project is set up correctly for final delivery formats (e.g., DCP, broadcast). (SMPTE)", priority: 'High', riskLevel: 'High', proof: 'Project Setup Screenshot', location: 'Post-Production Suite' }
                ]
            },
            {
                title: "🌐 Distribution & Marketing",
                department: "Distribution",
                frequency: "Post-Completion",
                role: "Distribution Manager",
                summary: "Ensures all technical and marketing assets are prepared correctly for festival submission and global distribution.",
                tasks: [
                    { id: 'FP-DIST-01', description: "Create a Digital Cinema Package (DCP) for theatrical exhibition. (SMPTE)", priority: 'High', riskLevel: 'High', proof: 'DCP File', location: 'Post-Production Suite' },
                    { id: 'FP-DIST-02', description: "Generate various video formats required by different streaming platforms and broadcasters.", priority: 'High', riskLevel: 'High', proof: 'Transcoding Log', location: 'Post-Production Suite' },
                    { id: 'FP-DIST-03', description: "Prepare a complete press kit, including synopsis, cast/crew bios, and high-resolution stills.", priority: 'High', riskLevel: 'Medium', proof: 'Press Kit PDF', location: 'Marketing Office' },
                    { id: 'FP-DIST-04', description: "Create and QC subtitles in multiple languages.", priority: 'High', riskLevel: 'Medium', proof: 'Subtitle Files (.srt)', location: 'Post-Production Suite' },
                    { id: 'FP-DIST-05', description: "Archive all project files, including raw footage and final masters, in a secure long-term storage solution.", priority: 'High', riskLevel: 'High', proof: 'Archive Log', location: 'Data Center' }
                ]
            },
            {
                title: "🎨 VFX & Animation Pipeline",
                department: "Post-Production",
                frequency: "Per Project",
                role: "VFX Supervisor",
                summary: "A checklist to manage the complex workflow of visual effects and animation, from asset creation to final compositing.",
                tasks: [
                    { id: 'FP-VFX-01', description: "Break down the script into a detailed VFX shot list for bidding and scheduling.", priority: 'High', riskLevel: 'High', proof: 'VFX Shot List', location: 'VFX Office' },
                    { id: 'FP-VFX-02', description: "Establish a version control system for all digital assets (models, textures, animations).", priority: 'High', riskLevel: 'High', proof: 'Version Control System Setup', location: 'VFX Office' },
                    { id: 'FP-VFX-03', description: "Implement a daily/weekly review process for shots in progress with the Director and VFX team.", priority: 'High', riskLevel: 'Medium', proof: 'Review Schedule', location: 'VFX Office' },
                    { id: 'FP-VFX-04', description: "Ensure final renders match the required color space and format for final compositing. (SMPTE)", priority: 'High', riskLevel: 'High', proof: 'Render QC Log', location: 'VFX Suite' },
                    { id: 'FP-VFX-05', description: "Maintain a secure and efficient data transfer protocol with any external VFX vendors.", priority: 'High', riskLevel: 'High', proof: 'Data Transfer SOP', location: 'VFX Office' }
                ]
            },
            {
                title: "🔊 Sound Design & Mixing",
                department: "Post-Production",
                frequency: "Per Project",
                role: "Sound Supervisor",
                summary: "A workflow for creating and mixing the film's soundscape, including dialogue, effects, and music, for global distribution.",
                tasks: [
                    { id: 'FP-SND-01', description: "Perform dialogue cleaning and Automated Dialog Replacement (ADR) as needed.", priority: 'High', riskLevel: 'Medium', proof: 'ADR Schedule', location: 'Sound Studio' },
                    { id: 'FP-SND-02', description: "Create and layer sound effects (Foley, ambiences).", priority: 'High', riskLevel: 'Medium', proof: 'Sound Effects Library Log', location: 'Sound Studio' },
                    { id: 'FP-SND-03', description: "Mix all audio elements (dialogue, music, effects) to meet broadcast loudness standards (e.g., EBU R128).", priority: 'High', riskLevel: 'High', proof: 'Loudness Meter Report', location: 'Mixing Stage' },
                    { id: 'FP-SND-04', description: "Create separate audio stems (dialogue, music, effects) for international distribution and dubbing.", priority: 'High', riskLevel: 'High', proof: 'Stem Export Log', location: 'Mixing Stage' },
                    { id: 'FP-SND-05', description: "Conduct a final QC of the full sound mix in a calibrated theater environment.", priority: 'High', riskLevel: 'High', proof: 'QC Sign-off', location: 'Mixing Stage' }
                ]
            },
            {
                title: "🤝 Cast & Crew Compliance Management",
                department: "HR/Legal",
                frequency: "Per Project",
                role: "Production Coordinator",
                summary: "Manages all administrative and legal compliance for cast and crew, from contracts to on-set conduct.",
                tasks: [
                    { id: 'FP-COMP-01', description: "Verify that all cast and crew have signed contracts and release forms before their first day.", priority: 'High', riskLevel: 'High', proof: 'Signed Document Tracker', location: 'Production Office' },
                    { id: 'FP-COMP-02', description: "Ensure compliance with all relevant union agreements (e.g., working hours, breaks, payments).", priority: 'High', riskLevel: 'High', proof: 'Union Compliance Report', location: 'Production Office' },
                    { id: 'FP-COMP-03', description: "Conduct mandatory anti-harassment and on-set conduct training for all personnel. (ISO 45001)", priority: 'High', riskLevel: 'High', proof: 'Training Attendance Sheet', location: 'Production Office' },
                    { id: 'FP-COMP-04', description: "Maintain accurate records of work hours and process payroll accordingly.", priority: 'High', riskLevel: 'High', proof: 'Timesheet and Payroll Records', location: 'Accounts' },
                    { id: 'FP-COMP-05', description: "Manage visa and work permit requirements for any international cast or crew.", priority: 'High', riskLevel: 'High', proof: 'Visa Application Tracker', location: 'Production Office' }
                ]
            }
        ]
    },
    {
        id: 'ott_platform_pack',
        title: "OTT Platform Production & Compliance",
        priceUSD: 199.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "OTT Platform",
        description: "For Content & Tech Heads at streaming services. A toolkit for managing the digital content pipeline, platform stability, and global compliance.",
        icon: <Computer className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        sampleItems: [
            "Ensure platform stability with 'Infrastructure & Load Testing' SOPs.",
            "Protect content with a 'DRM & Anti-Piracy' checklist.",
            "Comply with global standards using 'WCAG 2.1 Accessibility' audits.",
            "Optimize user experience with a 'UI/UX & Device Compatibility' checklist."
        ],
        globalStandards: {
            title: "Aligned with Global Digital Media & Security Standards",
            standards: [
                { name: "Security", description: "ISO 27001 for Information Security, PCI DSS for payments, DRM for content protection." },
                { name: "Accessibility", description: "WCAG 2.1 guidelines to ensure content is accessible to users with disabilities." },
                { name: "Data Privacy", description: "GDPR (EU), DPDP (India), CCPA (California) and other regional data protection regulations." },
                { name: "Streaming Tech", description: "ISO/IEC 23009 (MPEG-DASH) for adaptive bitrate streaming." }
            ]
        },
        checklists: [
            {
                title: "📈 Content Strategy",
                department: "Content",
                frequency: "Quarterly",
                role: "Content Strategist",
                summary: "Ensure data-driven, compliant content planning.",
                tasks: [
                    { id: 'OTT-CS-01', description: "Analyze user viewing data and search trends to identify content gaps and opportunities. (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Analytics Report', location: 'Content Office' },
                    { id: 'OTT-CS-02', description: "Perform due diligence on third-party content, verifying chain-of-title and distribution rights.", priority: 'High', riskLevel: 'High', proof: 'Rights Verification Document', location: 'Legal Dept' },
                    { id: 'OTT-CS-03', description: "Develop a business case for original productions, including budget and potential ROI.", priority: 'High', riskLevel: 'High', proof: 'Greenlight Document', location: 'Content Office' },
                    { id: 'OTT-CS-04', description: "Negotiate and finalize licensing agreements with content providers.", priority: 'High', riskLevel: 'High', proof: 'Signed Licensing Agreements', location: 'Legal Dept' },
                    { id: 'OTT-CS-05', description: "Maintain a content calendar with planned release dates and promotional windows. (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Content Calendar', location: 'Content Office' }
                ]
            },
            {
                title: "🖥️ Platform Development",
                department: "Tech",
                frequency: "Per Sprint/Release",
                role: "Product Manager",
                summary: "Build a secure, user-friendly, and compliant platform.",
                tasks: [
                    { id: 'OTT-PD-01', description: "Conduct usability testing on new features with a sample group of users. (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Usability Test Report', location: 'UX Lab' },
                    { id: 'OTT-PD-02', description: "Audit the platform against WCAG 2.1 AA accessibility standards. (WCAG 2.1)", priority: 'High', riskLevel: 'High', proof: 'Accessibility Audit Report', location: 'Tech Office' },
                    { id: 'OTT-PD-03', description: "Perform compatibility testing on a range of target devices (iOS, Android, Smart TVs, web browsers).", priority: 'High', riskLevel: 'High', proof: 'Compatibility Test Matrix', location: 'QA Lab' },
                    { id: 'OTT-PD-04', description: "Implement and verify secure payment processing in compliance with PCI DSS. (PCI DSS)", priority: 'High', riskLevel: 'High', proof: 'PCI Compliance Certificate', location: 'Tech Office' },
                    { id: 'OTT-PD-05', description: "Ensure user data collection and consent mechanisms are GDPR/DPDP compliant. (GDPR)", priority: 'High', riskLevel: 'High', proof: 'Data Privacy Audit', location: 'Legal/Tech' }
                ]
            },
            {
                title: "☁️ Content Upload & Management",
                department: "Content Operations",
                frequency: "Per Title",
                role: "Content Ops Manager",
                summary: "Ensure all uploaded content is high-quality, accessible, and compliant.",
                tasks: [
                    { id: 'OTT-CM-01', description: "Perform automated QC checks on incoming video files for technical specs (bitrate, resolution, audio).", priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'Content Ops System' },
                    { id: 'OTT-CM-02', description: "Transcode video files into multiple bitrates for adaptive streaming. (MPEG-DASH)", priority: 'High', riskLevel: 'High', proof: 'Transcoding Log', location: 'Content Ops System' },
                    { id: 'OTT-CM-03', description: "Add and review metadata, subtitles, and captions in all required languages. (WCAG 2.1)", priority: 'High', riskLevel: 'Medium', proof: 'Metadata Sign-off', location: 'Content Ops System' },
                    { id: 'OTT-CM-04', description: "Apply DRM encryption to the content before making it available. (ISO 27001)", priority: 'High', riskLevel: 'High', proof: 'DRM Log', location: 'Content Ops System' },
                    { id: 'OTT-CM-05', description: "Schedule the content for release as per the content calendar and verify its visibility in all target regions.", priority: 'High', riskLevel: 'Medium', proof: 'Release Checklist', location: 'Content Ops System' }
                ]
            },
            {
                title: "📢 Marketing & Engagement",
                department: "Marketing/Data",
                frequency: "Weekly",
                role: "Data Analyst",
                summary: "Increase reach, engagement, and retention.",
                tasks: [
                    { id: 'OTT-UA-01', description: "Analyze key metrics: Monthly Active Users (MAU), churn rate, and average watch time. (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Weekly Metrics Report', location: 'Analytics Dashboard' },
                    { id: 'OTT-UA-02', description: "Identify content that is performing well and content that is underperforming.", priority: 'High', riskLevel: 'Medium', proof: 'Content Performance Report', location: 'Analytics Dashboard' },
                    { id: 'OTT-UA-03', description: "Segment users who are at high risk of churning and target them with re-engagement campaigns.", priority: 'High', riskLevel: 'High', proof: 'Churn-Risk Segment List', location: 'Marketing Automation Tool' },
                    { id: 'OTT-UA-04', description: "Generate reports on the effectiveness of personalized recommendations.", priority: 'High', riskLevel: 'Medium', proof: 'Recommendation ROI Report', location: 'Analytics Dashboard' },
                    { id: 'OTT-UA-05', description: "Ensure all data collection and usage is compliant with the platform's privacy policy and GDPR. (GDPR)", priority: 'High', riskLevel: 'High', proof: 'Data Usage Audit', location: 'Data Office' }
                ]
            },
            {
                title: "🔒 Compliance & Security",
                department: "Security/Tech",
                frequency: "Quarterly",
                role: "Security Lead",
                summary: "Protect content, users, and platform integrity.",
                tasks: [
                    { id: 'OTT-DRM-01', description: "Audit DRM policies to ensure they are correctly applied to all premium content. (ISO 27001)", priority: 'High', riskLevel: 'High', proof: 'DRM Policy Audit Report', location: 'Security Office' },
                    { id: 'OTT-DRM-02', description: "Run automated scans on pirate websites and torrent trackers for your content.", priority: 'High', riskLevel: 'High', proof: 'Scanning Report', location: 'Security Office' },
                    { id: 'OTT-DRM-03', description: "Issue DMCA takedown notices for all identified infringing links.", priority: 'High', riskLevel: 'Medium', proof: 'Takedown Log', location: 'Legal/Security' },
                    { id: 'OTT-DRM-04', description: "Implement and test forensic watermarking to trace the source of leaks.", priority: 'High', riskLevel: 'High', proof: 'Watermarking Test Report', location: 'Tech Office' },
                    { id: 'OTT-DRM-05', description: "Review and update concurrent stream limits per user account to prevent password sharing abuse.", priority: 'High', riskLevel: 'Medium', proof: 'Policy Review Document', location: 'Product Office' }
                ]
            },
            {
                title: "⚙️ Infrastructure & Live Event Readiness",
                department: "DevOps/SRE",
                frequency: "Pre-Live Event",
                role: "SRE Lead",
                summary: "Prevents platform outages during high-traffic live events, like the incident that hit a major OTT service.",
                tasks: [
                    { id: 'OTT-INFRA-01', description: "Perform load testing on streaming servers to simulate peak concurrent viewership. (ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Load Test Report', location: 'Staging Environment' },
                    { id: 'OTT-INFRA-02', description: "Verify that auto-scaling policies for servers are enabled and configured correctly.", priority: 'High', riskLevel: 'High', proof: 'Cloud Config Review', location: 'Cloud Console' },
                    { id: 'OTT-INFRA-03', description: "Test Content Delivery Network (CDN) configuration and caching for the live stream.", priority: 'High', riskLevel: 'High', proof: 'CDN Test Report', location: 'Staging Environment' },
                    { id: 'OTT-INFRA-04', description: "Conduct a disaster recovery drill by simulating a regional server failure. (ISO 27001)", priority: 'High', riskLevel: 'High', proof: 'DR Drill Report', location: 'Staging Environment' },
                    { id: 'OTT-INFRA-05', description: "Establish a 'war room' protocol with on-call engineers for the duration of the live event.", priority: 'High', riskLevel: 'High', proof: 'War Room SOP', location: 'DevOps Office' }
                ]
            },
            {
                title: "💳 Subscription & Billing Management",
                department: "Finance/Product",
                frequency: "Monthly",
                role: "Finance Manager",
                summary: "Ensures accurate and compliant management of user subscriptions, payments, and refunds.",
                tasks: [
                    { id: 'OTT-BILL-01', description: "Reconcile payments received from the payment gateway with subscription records in the database.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Finance Office' },
                    { id: 'OTT-BILL-02', description: "Audit a sample of subscription renewals to ensure correct pricing and billing dates.", priority: 'High', riskLevel: 'Medium', proof: 'Subscription Audit Log', location: 'Finance Office' },
                    { id: 'OTT-BILL-03', description: "Review and process refund requests according to the platform's terms of service.", priority: 'High', riskLevel: 'Medium', proof: 'Refund Tracker', location: 'Customer Support' },
                    { id: 'OTT-BILL-04', description: "Monitor and analyze the reasons for failed payments and implement dunning strategies to recover revenue.", priority: 'High', riskLevel: 'High', proof: 'Failed Payment Report', location: 'Finance Office' },
                    { id: 'OTT-BILL-05', description: "Ensure all invoices and billing communications are compliant with local tax laws. (Tax Compliance)", priority: 'High', riskLevel: 'High', proof: 'Invoice Template Review', location: 'Finance/Legal' }
                ]
            },
            {
                title: "🤝 Partnership & Integration Management",
                department: "Business Development",
                frequency: "Quarterly",
                role: "Partnership Manager",
                summary: "Manages technical and business relationships with partners like telcos, device manufacturers, and content providers.",
                tasks: [
                    { id: 'OTT-PARTNER-01', description: "Review performance and revenue share with content and distribution partners against contractual agreements.", priority: 'High', riskLevel: 'Medium', proof: 'Partner QBR Deck', location: 'BD Office' },
                    { id: 'OTT-PARTNER-02', description: "Test API integrations with partners to ensure data is flowing correctly (e.g., for single sign-on or bundled subscriptions).", priority: 'High', riskLevel: 'High', proof: 'API Test Log', location: 'Tech Office' },
                    { id: 'OTT-PARTNER-03', description: "Conduct a security review of all third-party integrations. (ISO 27001)", priority: 'High', riskLevel: 'High', proof: 'Third-Party Security Audit', location: 'Security Office' },
                    { id: 'OTT-PARTNER-04', description: "Onboard new partners, providing them with technical documentation and support.", priority: 'High', riskLevel: 'Medium', proof: 'Partner Onboarding Checklist', location: 'BD Office' },
                    { id: 'OTT-PARTNER-05', description: "Ensure co-marketing commitments with partners are being met.", priority: 'Medium', riskLevel: 'Low', proof: 'Marketing Activity Report', location: 'Marketing Office' }
                ]
            }
        ]
    },
    {
        id: 'apparel_fashion_retail_pack',
        title: "Apparel & Fashion Retail Operations",
        priceUSD: 89.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "For fashion retail managers. A toolkit to manage store operations, from visual merchandising to loss prevention.",
        icon: <Shirt className="w-8 h-8 text-primary" />,
        badgeText: "Popular",
        badgeVariant: "default",
        sampleItems: [
            "Ensure 'Visual Merchandising' consistency across all stores.",
            "Implement a 'Fitting Room Control' protocol to reduce theft.",
            "Standardize 'Daily Store Opening & Closing' procedures.",
            "Manage 'Stock Transfer & IBT' accurately between stores."
        ],
        checklists: [
             {
                title: "🏬 Daily Store Opening & Closing",
                department: "Operations",
                frequency: "Daily",
                role: "Store Manager",
                summary: "A foundational checklist to ensure the store is ready for business and secure after closing.",
                tasks: [
                    { id: 'AFR-OC-01', description: "Disable/enable alarm systems and verify all doors are locked.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Store Entrance' },
                    { id: 'AFR-OC-02', description: "Check that all POS systems are online and cash floats are correct.", priority: 'High', riskLevel: 'High', proof: 'Cash Reconciliation Sheet', location: 'Cash Desk' },
                    { id: 'AFR-OC-03', description: "Ensure all lighting, music, and digital displays are operational.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'AFR-OC-04', description: "Conduct a brief team huddle to discuss daily targets and promotions.", priority: 'Medium', riskLevel: 'Low', proof: 'Huddle Notes', location: 'Back Office' },
                    { id: 'AFR-OC-05', description: "Secure all high-value items in the safe or designated secure area at closing.", priority: 'High', riskLevel: 'High', proof: 'Closing Log', location: 'Back Office' }
                ]
            },
            {
                title: "🎨 Visual Merchandising Compliance",
                department: "VM/Operations",
                frequency: "Weekly",
                role: "VM Specialist/Store Manager",
                summary: "Ensures that the store's look and feel consistently aligns with the brand's marketing campaigns and aesthetic.",
                tasks: [
                    { id: 'AFR-VM-01', description: "Verify that window displays are set up according to the current campaign directive.", priority: 'High', riskLevel: 'Medium', proof: 'Photo vs. Directive', location: 'Store Front' },
                    { id: 'AFR-VM-02', description: "Check that all mannequins are dressed and styled as per the VM guide.", priority: 'High', riskLevel: 'Medium', proof: 'Photo Audit', location: 'Sales Floor' },
                    { id: 'AFR-VM-03', description: "Ensure all sale and promotional signage is correctly placed and removed when expired.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'AFR-VM-04', description: "Audit product placement to ensure it matches the store layout plan (planogram).", priority: 'High', riskLevel: 'Medium', proof: 'Planogram Check', location: 'Sales Floor' },
                    { id: 'AFR-VM-05', description: "Check for and replace any damaged or worn display fixtures.", priority: 'Medium', riskLevel: 'Low', proof: 'Maintenance Request', location: 'Sales Floor' }
                ]
            },
            {
                title: "🔒 Fitting Room Control & Loss Prevention",
                department: "Loss Prevention/Sales",
                frequency: "Ongoing",
                role: "Sales Associate",
                summary: "A protocol to manage fitting rooms effectively, a high-risk area for theft and merchandise damage.",
                tasks: [
                    { id: 'AFR-FR-01', description: "Greet every customer entering the fitting room area.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Observation', location: 'Fitting Rooms' },
                    { id: 'AFR-FR-02', description: "Enforce a strict item limit for each customer entering a fitting room.", priority: 'High', riskLevel: 'High', proof: 'Policy Signage', location: 'Fitting Rooms' },
                    { id: 'AFR-FR-03', description: "Check the fitting room for any left-behind items or removed security tags immediately after a customer leaves.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Fitting Rooms' },
                    { id: 'AFR-FR-04', description: "Return cleared merchandise to the sales floor promptly.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Fitting Rooms' },
                    { id: 'AFR-FR-05', description: "Report any suspicious behavior or found tags to the store manager immediately.", priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Fitting Rooms' }
                ]
            },
            {
                title: "🔄 Stock Transfer & IBT Management",
                department: "Inventory",
                frequency: "Per Transfer",
                role: "Inventory Clerk",
                summary: "A checklist to ensure accuracy and prevent loss during Inter-Store Transfers (IBT) of stock.",
                tasks: [
                    { id: 'AFR-IBT-01', description: "Generate a transfer request and have it approved by both the sending and receiving store managers.", priority: 'High', riskLevel: 'High', proof: 'Approved Transfer Document', location: 'System' },
                    { id: 'AFR-IBT-02', description: "Scan and pack the items, then have a second person verify the count against the transfer document.", priority: 'High', riskLevel: 'High', proof: 'Two-Person Sign-off', location: 'Sending Store' },
                    { id: 'AFR-IBT-03', description: "Securely seal the transfer box with tamper-evident tape.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sending Store' },
                    { id: 'AFR-IBT-04', description: "Upon receipt, the receiving store must verify the seal is intact before opening.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Store' },
                    { id: 'AFR-IBT-05', description: "The receiving store must scan and count all items and report any discrepancies within 24 hours.", priority: 'High', riskLevel: 'High', proof: 'Goods Received Note', location: 'Receiving Store' }
                ]
            },
            {
                title: "💰 End-of-Day Cash Reconciliation",
                department: "Finance/Operations",
                frequency: "Daily",
                role: "Store Manager",
                summary: "A detailed process for balancing the cash registers at the end of the day to ensure accuracy and prevent fraud.",
                tasks: [
                    { id: 'AFR-EOD-01', description: "Print the Z-report from the POS system showing total sales and payment types.", priority: 'High', riskLevel: 'High', proof: 'Z-Report Printout', location: 'Cash Office' },
                    { id: 'AFR-EOD-02', description: "Count the physical cash in the drawer and record the amount.", priority: 'High', riskLevel: 'High', proof: 'Cash Count Sheet', location: 'Cash Office' },
                    { id: 'AFR-EOD-03', description: "Match the credit card machine's batch total with the POS report.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Sheet', location: 'Cash Office' },
                    { id: 'AFR-EOD-04', description: "Investigate and document any variance between the POS report and the physical counts.", priority: 'High', riskLevel: 'High', proof: 'Variance Report', location: 'Cash Office' },
                    { id: 'AFR-EOD-05', description: "Prepare the bank deposit and store it securely in the safe for collection.", priority: 'High', riskLevel: 'High', proof: 'Deposit Bag Log', location: 'Safe' }
                ]
            },
            {
                title: "🛍️ Customer Return & Exchange Process",
                department: "Sales/Operations",
                frequency: "Per Return",
                role: "Sales Associate",
                summary: "A standardized process for handling returns and exchanges to ensure policy compliance and prevent fraud.",
                tasks: [
                    { id: 'AFR-RET-01', description: "Verify the original purchase with a receipt or through the customer's purchase history in the CRM.", priority: 'High', riskLevel: 'High', proof: 'Receipt/CRM Lookup', location: 'Cash Desk' },
                    { id: 'AFR-RET-02', description: "Inspect the returned item for wear, damage, or removed tags to ensure it is in a saleable condition.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Cash Desk' },
                    { id: 'AFR-RET-03', description: "Process the return or exchange in the POS system, accurately noting the reason.", priority: 'High', riskLevel: 'Medium', proof: 'POS Transaction', location: 'Cash Desk' },
                    { id: 'AFR-RET-04', description: "For high-value returns without a receipt, manager approval is required.", priority: 'High', riskLevel: 'High', proof: 'Manager Sign-off', location: 'Cash Desk' },
                    { id: 'AFR-RET-05', description: "Tag the returned item appropriately (e.g., 'To Sales Floor', 'Damaged', 'To Warehouse') and move it to the designated area.", priority: 'High', riskLevel: 'Medium', proof: 'Tagged Item', location: 'Back Office' }
                ]
            },
             {
                title: "📦 Stock Room Organization (5S)",
                department: "Inventory/Operations",
                frequency: "Weekly",
                role: "Stock Controller",
                summary: "Applies 5S principles (Sort, Set in Order, Shine, Standardize, Sustain) to maintain a highly efficient and organized stock room.",
                tasks: [
                    { id: 'AFR-5S-01', description: "Sort: Remove any old, damaged, or non-sellable stock from the main floor.", priority: 'Medium', riskLevel: 'Low', proof: 'Quarantine Area Log', location: 'Stock Room' },
                    { id: 'AFR-5S-02', description: "Set in Order: Ensure all items are in their designated locations, with clear labels for category, size, and SKU.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Audit', location: 'Stock Room' },
                    { id: 'AFR-5S-03', description: "Shine: Perform a weekly cleaning of all shelves, floors, and storage bins.", priority: 'High', riskLevel: 'Low', proof: 'Cleaning Log', location: 'Stock Room' },
                    { id: 'AFR-5S-04', description: "Standardize: Ensure all staff are following the same procedures for receiving, storing, and picking stock.", priority: 'High', riskLevel: 'Medium', proof: 'Process Observation', location: 'Stock Room' },
                    { id: 'AFR-5S-05', description: "Sustain: Conduct a weekly audit with a checklist to ensure 5S standards are being maintained.", priority: 'High', riskLevel: 'Medium', proof: '5S Audit Scorecard', location: 'Stock Room' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Monthly",
                role: "Store Manager",
                summary: "A proactive checklist for preventing and managing pest infestations in a retail environment to protect merchandise and brand image.",
                tasks: [
                    { id: 'PEST-RETAIL-01', description: "Inspect stock rooms, break rooms, and waste areas for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Store-wide' },
                    { id: 'PEST-RETAIL-02', description: "Ensure no food or drink is consumed or stored in the stock room or on the sales floor.", priority: 'High', riskLevel: 'Medium', proof: 'Policy Reinforcement', location: 'Store-wide' },
                    { id: 'PEST-RETAIL-03', description: "Check that external doors are kept closed and have proper seals to prevent entry.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Entrances/Exits' },
                    { id: 'PEST-RETAIL-04', description: "Review pest control vendor reports and ensure all recommended actions are completed.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Tracker', location: 'Manager Office' },
                    { id: 'PEST-RETAIL-05', description: "Keep all areas free of clutter and debris where pests could hide.", priority: 'Medium', riskLevel: 'Low', proof: 'Housekeeping Audit', location: 'Store-wide' }
                ]
            }
        ]
    },
    {
        id: 'luxury_retail_pack',
        title: "Luxury Retail & Jewellery Operations",
        priceUSD: 199.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Retail",
        description: "For luxury brand managers and store owners. A premium toolkit for delivering impeccable customer experiences and ensuring ironclad security for high-value inventory.",
        icon: <Gem className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        sampleItems: [
            "Implement a 'High-Value Inventory & Vault' security protocol.",
            "Standardize your 'White-Glove Customer Service' experience.",
            "Ensure 'Visual Merchandising & Display' compliance with brand standards.",
            "Includes checklists for 'Cash Handling' and 'Daily Security Audits'."
        ],
        globalStandards: {
            title: "Aligned with Global Luxury & Security Standards",
            standards: [
                { name: "Security", description: "Best practices for physical security, vault management, and high-value inventory control." },
                { name: "Customer Experience", description: "Principles of luxury service, clienteling, and personalized shopping." },
                { name: "Compliance", description: "Protocols for AML (Anti-Money Laundering) in high-value transactions and PCI DSS for payments." },
                { name: "Quality", description: "ISO 9001 for consistent brand presentation and operational excellence." }
            ]
        },
        checklists: [
            {
                title: "🔒 Daily Security & Opening/Closing",
                department: "Security/Operations",
                frequency: "Daily",
                role: "Store Manager",
                summary: "A rigorous protocol to ensure the store is secure at all times, preventing theft and ensuring staff safety.",
                tasks: [
                    { id: 'LUX-SEC-01', description: "Test all alarm systems (panic buttons, door sensors) before opening.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Store' },
                    { id: 'LUX-SEC-02', description: "Verify all CCTV cameras are recording and have unobstructed views, especially over cash counters and vaults.", priority: 'High', riskLevel: 'High', proof: 'CCTV Check Log', location: 'Security Room' },
                    { id: 'LUX-SEC-03', description: "Perform a two-person check to open and close the vault.", priority: 'High', riskLevel: 'High', proof: 'Vault Access Log', location: 'Vault' },
                    { id: 'LUX-SEC-04', description: "Check that all display cases are locked and secured at closing.", priority: 'High', riskLevel: 'High', proof: 'Closing Checklist', location: 'Sales Floor' },
                    { id: 'LUX-SEC-05', description: "Ensure no unauthorized personnel are present during opening and closing procedures.", priority: 'High', riskLevel: 'High', proof: 'Staff Roster Check', location: 'Store' }
                ]
            },
            {
                title: "💎 High-Value Inventory Management",
                department: "Inventory/Security",
                frequency: "Daily",
                role: "Inventory Manager",
                summary: "A precise checklist for tracking and securing high-value items like jewelry and watches to prevent loss or theft.",
                tasks: [
                    { id: 'LUX-INV-01', description: "Conduct a daily count of all items in the vault and high-security display cases.", priority: 'High', riskLevel: 'High', proof: 'Daily Count Sheet', location: 'Vault/Sales Floor' },
                    { id: 'LUX-INV-02', description: "Log every instance an item is removed from or returned to the vault, with two-person sign-off.", priority: 'High', riskLevel: 'High', proof: 'Movement Log', location: 'Vault' },
                    { id: 'LUX-INV-03', description: "When showing items to customers, only present a limited number at a time.", priority: 'High', riskLevel: 'High', proof: 'Staff Training Record', location: 'Sales Floor' },
                    { id: 'LUX-INV-04', description: "Verify authenticity and weight of any returned or trade-in items using certified equipment.", priority: 'High', riskLevel: 'High', proof: 'Verification Log', location: 'Back Office' },
                    { id: 'LUX-INV-05', description: "Perform a blind cycle count of a section of inventory weekly.", priority: 'High', riskLevel: 'High', proof: 'Cycle Count Report', location: 'Vault/Sales Floor' }
                ]
            },
            {
                title: "✨ Visual Merchandising & Store Ambiance",
                department: "Marketing/Operations",
                frequency: "Daily",
                role: "Store Manager",
                summary: "Ensures the store's presentation meets the exacting standards of a luxury brand, creating a consistent and inviting atmosphere.",
                tasks: [
                    { id: 'LUX-VM-01', description: "Ensure all display cases are immaculately clean, fingerprint-free, and well-lit.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'LUX-VM-02', description: "Verify that all product displays adhere to the brand's global visual merchandising guidelines.", priority: 'High', riskLevel: 'Medium', proof: 'VM Guideline Checklist', location: 'Sales Floor' },
                    { id: 'LUX-VM-03', description: "Check that lighting levels, music, and scent are set to the brand's standard.", priority: 'High', riskLevel: 'Low', proof: 'Ambiance Checklist', location: 'Sales Floor' },
                    { id: 'LUX-VM-04', description: "Ensure all signage and price displays are correct, elegant, and perfectly placed.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'LUX-VM-05', description: "Confirm that staff uniforms are pristine and worn according to brand standards.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Appearance Check', location: 'Store' }
                ]
            },
            {
                title: "🤝 White-Glove Customer Service Protocol",
                department: "Sales",
                frequency: "Ongoing",
                role: "Sales Associate",
                summary: "A checklist for delivering an exceptional, personalized service experience to every client.",
                tasks: [
                    { id: 'LUX-CUST-01', description: "Greet every client within 30 seconds of entry and offer a beverage.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Observation', location: 'Sales Floor' },
                    { id: 'LUX-CUST-02', description: "For returning clients, review their purchase history and preferences in the CRM before engaging.", priority: 'High', riskLevel: 'Medium', proof: 'CRM Log', location: 'Back Office/Tablet' },
                    { id: 'LUX-CUST-03', description: "Use gloves when handling all high-value items in front of the client.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'LUX-CUST-04', description: "Offer personalized services like private viewings, custom engraving, or gift wrapping.", priority: 'Medium', riskLevel: 'Low', proof: 'Service Log', location: 'Sales Floor' },
                    { id: 'LUX-CUST-05', description: "Send a personalized thank-you note or email after a significant purchase.", priority: 'High', riskLevel: 'Low', proof: 'Communication Log', location: 'Back Office' }
                ]
            },
            {
                title: "💰 Cash Handling & AML Compliance",
                department: "Finance/Operations",
                frequency: "Daily",
                role: "Cashier/Manager",
                summary: "A checklist to ensure secure cash handling and compliance with Anti-Money Laundering regulations for large transactions.",
                tasks: [
                    { id: 'LUX-AML-01', description: "Perform cash reconciliation at the start and end of each shift with a two-person sign-off.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Sheet', location: 'Cash Office' },
                    { id: 'LUX-AML-02', description: "For any cash transaction above the regulatory threshold (e.g., $10,000), complete a 'Source of Funds' declaration form.", priority: 'High', riskLevel: 'High', proof: 'AML Form', location: 'Cash Office' },
                    { id: 'LUX-AML-03', description: "Verify the identity of any client making a large cash purchase with government-issued ID.", priority: 'High', riskLevel: 'High', proof: 'ID Verification Log', location: 'Cash Office' },
                    { id: 'LUX-AML-04', description: "Report all suspicious transactions to the designated compliance officer.", priority: 'High', riskLevel: 'High', proof: 'STR Filing', location: 'Compliance Office' },
                    { id: 'LUX-AML-05', description: "Ensure cash is stored in a locked safe and deposits are made via a secure, scheduled process.", priority: 'High', riskLevel: 'High', proof: 'Deposit Slips/Log', location: 'Cash Office' }
                ]
            },
            {
                title: "📦 Special Order & Repair Management",
                department: "Operations",
                frequency: "Per Item",
                role: "Service Manager",
                summary: "A detailed process for managing custom orders and repairs, a key part of the luxury customer experience.",
                tasks: [
                    { id: 'LUX-REPAIR-01', description: "Photograph and document the condition of any item received for repair, with client sign-off.", priority: 'High', riskLevel: 'High', proof: 'Intake Form with Photos', location: 'Service Desk' },
                    { id: 'LUX-REPAIR-02', description: "Provide the client with a detailed estimate and timeline for the repair or special order.", priority: 'High', riskLevel: 'Medium', proof: 'Estimate Document', location: 'Service Desk' },
                    { id: 'LUX-REPAIR-03', description: "Tag the item with a unique tracking number that follows it through the entire process.", priority: 'High', riskLevel: 'Medium', proof: 'Tracking Tag', location: 'Service Desk' },
                    { id: 'LUX-REPAIR-04', description: "Conduct a final quality control check on the completed work before notifying the client.", priority: 'High', riskLevel: 'High', proof: 'QC Checklist', location: 'Workshop' },
                    { id: 'LUX-REPAIR-05', description: "Present the finished item to the client in premium packaging and update their purchase history.", priority: 'High', riskLevel: 'Low', proof: 'Client Sign-off', location: 'Service Desk' }
                ]
            },
            {
                title: "🌱 ESG & Responsible Sourcing Audit",
                department: "Compliance",
                frequency: "Quarterly",
                role: "Compliance Officer",
                summary: "Ensures the brand meets modern standards for ethical sourcing and sustainability, a key factor for international partners and discerning clients.",
                tasks: [
                    { id: 'LUX-ESG-01', description: "Verify that diamond and precious metal suppliers provide valid 'Kimberley Process' or other conflict-free sourcing certificates.", priority: 'High', riskLevel: 'High', proof: 'Supplier Certificates', location: 'Procurement Office' },
                    { id: 'LUX-ESG-02', description: "Audit the brand's packaging to ensure it meets sustainability goals (e.g., recycled materials, FSC certified).", priority: 'Medium', riskLevel: 'Low', proof: 'Packaging Audit Report', location: 'Marketing Office' },
                    { id: 'LUX-ESG-03', description: "Review energy and water consumption logs for the store and identify areas for reduction.", priority: 'Medium', riskLevel: 'Low', proof: 'Utility Bill Analysis', location: 'Admin Office' },
                    { id: 'LUX-ESG-04', description: "Ensure compliance with ethical employment practices for all staff.", priority: 'High', riskLevel: 'Medium', proof: 'HR Audit', location: 'HR Office' },
                    { id: 'LUX-ESG-05', description: "Prepare a quarterly ESG report for internal management and brand partners.", priority: 'High', riskLevel: 'Medium', proof: 'ESG Report', location: 'Compliance Office' }
                ]
            },
            {
                title: "🔐 Data & Payment Security (PCI DSS)",
                department: "IT/Operations",
                frequency: "Quarterly",
                role: "Store Manager",
                summary: "A checklist to ensure the store is compliant with PCI DSS standards to protect sensitive customer payment data.",
                tasks: [
                    { id: 'LUX-PCI-01', description: "Ensure the POS system and credit card terminals are running updated, patched software.", priority: 'High', riskLevel: 'High', proof: 'IT System Log', location: 'IT Office' },
                    { id: 'LUX-PCI-02', description: "Verify that the store's Wi-Fi network for payments is separate from the public guest Wi-Fi.", priority: 'High', riskLevel: 'High', proof: 'Network Diagram', location: 'IT Office' },
                    { id: 'LUX-PCI-03', description: "Physically inspect card terminals for any signs of tampering or skimmers.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Cash Desk' },
                    { id: 'LUX-PCI-04', description: "Ensure that full credit card numbers are never written down or stored in non-compliant systems.", priority: 'High', riskLevel: 'High', proof: 'Policy Training Log', location: 'HR' },
                    { id: 'LUX-PCI-05', description: "Restrict physical access to all network ports and payment system hardware.", priority: 'High', riskLevel: 'High', proof: 'Physical Access Log', location: 'Back Office' }
                ]
            }
        ]
    },
    {
        id: 'alternative_medicine_wellness_pack',
        title: "Alternative Medicine & Wellness Center",
        priceUSD: 149.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Wellness",
        description: "For wellness center owners and practitioners. A toolkit for ensuring client safety, treatment consistency, and compliance with standards like Ayush.",
        icon: <Sprout className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        sampleItems: [
            "Ensure 'Client Intake & Contraindication' screening is thorough.",
            "Standardize 'Treatment Room & Equipment Hygiene' protocols.",
            "Implement a 'Herbal/Product Inventory & Expiry' management system.",
            "Includes checklists for 'Yoga Studio Safety' and 'Meditation Hall Ambiance'."
        ],
        globalStandards: {
            title: "Aligned with Wellness & Safety Standards",
            standards: [
                { name: "Client Safety", description: "Protocols for contraindication screening, informed consent, and managing adverse reactions." },
                { name: "Hygiene & Sanitation", description: "Best practices for sterilizing equipment and maintaining a clean treatment environment." },
                { name: "Compliance", description: "Guidelines aligned with local health authorities and bodies like the Ministry of Ayush." },
                { name: "Quality of Care", description: "ISO 9001 principles applied to ensure consistent and high-quality client experiences." }
            ]
        },
        checklists: [
            {
                title: "📋 Client Intake & Contraindication Screening",
                department: "Practitioners",
                frequency: "Per New Client",
                role: "Therapist/Doctor",
                summary: "A critical first step to ensure treatments are safe and appropriate for each client's medical history.",
                tasks: [
                    { id: 'AMW-CI-01', description: "Have the client complete a detailed medical history and consent form.", priority: 'High', riskLevel: 'High', proof: 'Signed Intake Form', location: 'Consultation Room' },
                    { id: 'AMW-CI-02', description: "Screen for specific contraindications related to the proposed therapy (e.g., pregnancy, high blood pressure, allergies).", priority: 'High', riskLevel: 'High', proof: 'Screening Checklist', location: 'Consultation Room' },
                    { id: 'AMW-CI-03', description: "Discuss the client's goals and set realistic expectations for the treatment outcome.", priority: 'High', riskLevel: 'Medium', proof: 'Consultation Notes', location: 'Consultation Room' },
                    { id: 'AMW-CI-04', description: "Explain the procedure, potential benefits, and any possible side effects or discomfort.", priority: 'High', riskLevel: 'Medium', proof: 'Verbal Confirmation', location: 'Consultation Room' },
                    { id: 'AMW-CI-05', description: "If necessary, recommend consulting with a primary care physician before proceeding.", priority: 'Medium', riskLevel: 'High', proof: 'Recommendation Note', location: 'Consultation Room' }
                ]
            },
            {
                title: "🌿 Herbal & Product Inventory Management",
                department: "Pharmacy/Stores",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "Ensures the safety, potency, and compliance of all herbal remedies and wellness products used and sold.",
                tasks: [
                    { id: 'AMW-INV-01', description: "Check expiry dates on all products and quarantine any expired stock.", priority: 'High', riskLevel: 'High', proof: 'Expiry Log', location: 'Storage' },
                    { id: 'AMW-INV-02', description: "Ensure all products are stored in appropriate conditions (e.g., away from direct sunlight, correct temperature).", priority: 'High', riskLevel: 'Medium', proof: 'Storage Condition Log', location: 'Storage' },
                    { id: 'AMW-INV-03', description: "Verify that all custom-prepared herbal formulations are correctly labeled with client name, date, and ingredients.", priority: 'High', riskLevel: 'High', proof: 'Label Audit', location: 'Pharmacy' },
                    { id: 'AMW-INV-04', description: "Maintain a log of raw material sourcing to ensure traceability and quality.", priority: 'High', riskLevel: 'Medium', proof: 'Sourcing Log', location: 'Office' },
                    { id: 'AMW-INV-05', description: "Conduct a weekly inventory count to manage stock levels and prevent shortages.", priority: 'Medium', riskLevel: 'Low', proof: 'Inventory Count Sheet', location: 'Storage' }
                ]
            },
            {
                title: "🧼 Treatment Room & Equipment Hygiene",
                department: "Housekeeping/Therapists",
                frequency: "Per Client",
                role: "Therapist",
                summary: "A strict protocol for cleaning and sanitizing treatment rooms and equipment between clients to prevent cross-contamination.",
                tasks: [
                    { id: 'AMW-HYG-01', description: "Change all linens (sheets, towels) after every client.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Treatment Room' },
                    { id: 'AMW-HYG-02', description: "Disinfect all surfaces the client may have touched (massage table, chairs, door handles) with an approved sanitizer.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Treatment Room' },
                    { id: 'AMW-HYG-03', description: "Sterilize all non-disposable equipment used during the treatment (e.g., cups, stones, needles) according to protocol.", priority: 'High', riskLevel: 'High', proof: 'Sterilization Log', location: 'Sterilization Area' },
                    { id: 'AMW-HYG-04', description: "Ensure the room is well-ventilated between sessions.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Treatment Room' },
                    { id: 'AMW-HYG-05', description: "Restock all necessary supplies (oils, towels, disposable items) for the next client.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Treatment Room' }
                ]
            },
            {
                title: "🧘 Yoga Studio & Meditation Hall Readiness",
                department: "Operations",
                frequency: "Daily",
                role: "Studio Manager",
                summary: "Ensures the yoga and meditation spaces are clean, safe, and conducive to a peaceful practice.",
                tasks: [
                    { id: 'AMW-YOGA-01', description: "Clean and sanitize the floor before the first session of the day.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Studio/Hall' },
                    { id: 'AMW-YOGA-02', description: "Inspect and clean all shared equipment like mats, blocks, and bolsters. Quarantine any damaged equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Inspection Log', location: 'Studio/Hall' },
                    { id: 'AMW-YOGA-03', description: "Set appropriate lighting, temperature, and sound levels to create a calming ambiance.", priority: 'Medium', riskLevel: 'Low', proof: 'Ambiance Check', location: 'Studio/Hall' },
                    { id: 'AMW-YOGA-04', description: "Ensure first-aid kits are available and instructors are aware of their location.", priority: 'High', riskLevel: 'High', proof: 'Safety Briefing Log', location: 'Studio/Hall' },
                    { id: 'AMW-YOGA-05', description: "Check that the space is free from clutter and tripping hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Safety Sweep', location: 'Studio/Hall' }
                ]
            },
            {
                title: "⚠️ Adverse Event & Client Complaint Handling",
                department: "Management",
                frequency: "Per Incident",
                role: "Center Manager",
                summary: "A systematic process for managing any adverse reactions or client complaints with empathy and thorough documentation.",
                tasks: [
                    { id: 'AMW-AE-01', description: "Immediately provide care and comfort to the client experiencing an adverse event or expressing a complaint.", priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Center' },
                    { id: 'AMW-AE-02', description: "Document the full details of the incident or complaint in a dedicated log.", priority: 'High', riskLevel: 'High', proof: 'Incident/Complaint Log', location: 'Office' },
                    { id: 'AMW-AE-03', description: "If medical attention is needed, follow the center's emergency protocol.", priority: 'High', riskLevel: 'High', proof: 'Emergency Protocol Activation Log', location: 'Center' },
                    { id: 'AMW-AE-04', description: "Conduct a root cause analysis to understand why the event or complaint occurred.", priority: 'High', riskLevel: 'Medium', proof: 'RCA Report', location: 'Office' },
                    { id: 'AMW-AE-05', description: "Implement corrective actions to prevent recurrence and follow up with the affected client.", priority: 'High', riskLevel: 'Medium', proof: 'CAPA Log', location: 'Office' }
                ]
            },
            {
                title: "🧑‍🏫 Practitioner Credentialing & Training",
                department: "HR/Management",
                frequency: "Ongoing",
                role: "Center Manager",
                summary: "Ensures all therapists and practitioners are qualified, certified, and up-to-date with their training.",
                tasks: [
                    { id: 'AMW-CRED-01', description: "Verify the qualifications and certifications of all new practitioners before they begin seeing clients.", priority: 'High', riskLevel: 'High', proof: 'Credentialing File', location: 'HR Office' },
                    { id: 'AMW-CRED-02', description: "Maintain a log of all practitioner certifications and their expiry dates.", priority: 'High', riskLevel: 'Medium', proof: 'Certification Tracker', location: 'HR Office' },
                    { id: 'AMW-CRED-03', description: "Conduct regular in-house training on new techniques and safety protocols.", priority: 'Medium', riskLevel: 'Low', proof: 'Training Calendar', location: 'Center' },
                    { id: 'AMW-CRED-04', description: "Perform periodic performance reviews and practical assessments for all practitioners.", priority: 'High', riskLevel: 'Medium', proof: 'Performance Review Forms', location: 'HR Office' },
                    { id: 'AMW-CRED-05', description: "Ensure all practitioners have valid professional liability insurance.", priority: 'High', riskLevel: 'High', proof: 'Insurance Certificates', location: 'HR Office' }
                ]
            },
            {
                title: "💧 Hydrotherapy & Wet Area Safety",
                department: "Operations",
                frequency: "Daily",
                role: "Spa Manager",
                summary: "A specific checklist for managing the risks associated with wet areas like steam rooms, saunas, and hydrotherapy pools.",
                tasks: [
                    { id: 'AMW-WET-01', description: "Test and log the water quality and pH levels of any pools or tubs daily.", priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Wet Area' },
                    { id: 'AMW-WET-02', description: "Check that temperatures in saunas and steam rooms are within safe operating limits.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Wet Area' },
                    { id: 'AMW-WET-03', description: "Ensure all floors are clean, dry (where appropriate), and have anti-slip mats in place.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection Log', location: 'Wet Area' },
                    { id: 'AMW-WET-04', description: "Verify that emergency shut-off buttons and alarms are functional.", priority: 'High', riskLevel: 'High', proof: 'Emergency Test Log', location: 'Wet Area' },
                    { id: 'AMW-WET-05', description: "Ensure clear signage is posted regarding health warnings and usage instructions for each facility.", priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Wet Area' }
                ]
            },
            {
                title: "🌿 Ayush Compliance Audit",
                department: "Compliance",
                frequency: "Quarterly",
                role: "Compliance Officer",
                summary: "A checklist to ensure the center's operations align with the guidelines set forth by the Ministry of Ayush or equivalent local bodies.",
                tasks: [
                    { id: 'AMW-AYUSH-01', description: "Verify that all practitioners have the required qualifications as per Ayush guidelines.", priority: 'High', riskLevel: 'High', proof: 'Practitioner File Audit', location: 'HR Office' },
                    { id: 'AMW-AYUSH-02', description: "Ensure all herbal products and medicines are sourced from GMP-certified suppliers.", priority: 'High', riskLevel: 'High', proof: 'Supplier Audit Log', location: 'Procurement' },
                    { id: 'AMW-AYUSH-03', description: "Audit client documentation to ensure informed consent and treatment records are maintained as per standards.", priority: 'High', riskLevel: 'Medium', proof: 'Client File Audit', location: 'Office' },
                    { id: 'AMW-AYUSH-04', description: "Check that the facility's infrastructure (e.g., room size, ventilation) meets the prescribed norms.", priority: 'High', riskLevel: 'Medium', proof: 'Facility Audit Report', location: 'Center' },
                    { id: 'AMW-AYUSH-05', description: "Review marketing materials to ensure no unsubstantiated claims are being made about treatments.", priority: 'High', riskLevel: 'High', proof: 'Marketing Material Review', location: 'Marketing' }
                ]
            }
        ]
    },
    {
        id: 'ai_cybersecurity_compliance_pack',
        title: "AI, Data & Cybersecurity Compliance",
        priceUSD: 199.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Corporate",
        description: "For C-Suite, CISOs, and DPOs. A toolkit to manage AI ethics, data privacy (GDPR/DPDP), and cybersecurity risks in the modern enterprise.",
        icon: <BrainCircuit className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        sampleItems: [
            "Implement an 'AI Ethics & Model Governance' framework.",
            "Conduct 'GDPR/DPDP Data Privacy' audits.",
            "Run 'Cybersecurity Incident Response Drills' to test readiness.",
            "Includes checklists for 'Vendor Security Assessment' and 'Cloud Security'."
        ],
        globalStandards: {
            title: "Aligned with Global Tech & Security Standards",
            standards: [
                { name: "Info Security", description: "ISO 27001 for Information Security Management Systems." },
                { name: "Data Privacy", description: "GDPR (EU), DPDP (India), CCPA (California) and other major data protection regulations." },
                { name: "AI Ethics", description: "Principles from the OECD AI Principles and NIST AI Risk Management Framework." },
                { name: "Cloud Security", description: "Best practices from the Cloud Security Alliance (CSA) and major cloud providers." }
            ]
        },
        checklists: [
            {
                title: "🤖 AI Ethics & Model Governance",
                department: "Data Science/Compliance",
                frequency: "Per Model",
                role: "AI Ethics Officer",
                summary: "A framework to ensure AI models are developed and deployed responsibly, focusing on fairness, transparency, and accountability.",
                tasks: [
                    { id: 'AI-ETHICS-01', description: "Conduct a bias assessment on the training data to check for demographic skews. (NIST AI RMF)", priority: 'High', riskLevel: 'High', proof: 'Data Bias Report', location: 'Data Science Team' },
                    { id: 'AI-ETHICS-02', description: "Document the model's intended use, limitations, and potential risks in a 'Model Card'.", priority: 'High', riskLevel: 'High', proof: 'Model Card Document', location: 'Data Science Team' },
                    { id: 'AI-ETHICS-03', description: "Establish a 'human-in-the-loop' review process for high-stakes AI decisions.", priority: 'High', riskLevel: 'High', proof: 'Review Process SOP', location: 'Operations Team' },
                    { id: 'AI-ETHICS-04', description: "Test the model's explainability: can it provide a reason for its outputs? (Explainable AI - XAI)", priority: 'High', riskLevel: 'Medium', proof: 'Explainability Test Report', location: 'Data Science Team' },
                    { id: 'AI-ETHICS-05', description: "Define and monitor key performance and fairness metrics for the model post-deployment.", priority: 'High', riskLevel: 'High', proof: 'Monitoring Dashboard', location: 'MLOps Team' }
                ]
            },
            {
                title: "⚖️ GDPR/DPDP Data Privacy Audit",
                department: "Legal/Compliance",
                frequency: "Quarterly",
                role: "Data Protection Officer",
                summary: "An audit to ensure the organization is compliant with major data protection regulations.",
                tasks: [
                    { id: 'PRIV-AUDIT-01', description: "Maintain a 'Record of Processing Activities' (ROPA) that details all personal data being processed.", priority: 'High', riskLevel: 'High', proof: 'ROPA Document', location: 'DPO Office' },
                    { id: 'PRIV-AUDIT-02', description: "Review all public-facing forms to ensure they have clear consent language and link to the privacy policy.", priority: 'High', riskLevel: 'High', proof: 'Form Audit Screenshot', location: 'Website/App' },
                    { id: 'PRIV-AUDIT-03', description: "Test the process for fulfilling Data Subject Access Requests (DSAR) within the legally mandated timeframe.", priority: 'High', riskLevel: 'High', proof: 'DSAR Test Log', location: 'DPO Office' },
                    { id: 'PRIV-AUDIT-04', description: "Conduct a Data Protection Impact Assessment (DPIA) for any new high-risk processing activity. (GDPR Art. 35)", priority: 'High', riskLevel: 'High', proof: 'DPIA Report', location: 'DPO Office' },
                    { id: 'PRIV-AUDIT-05', description: "Verify that data retention policies are being enforced and old data is being properly deleted.", priority: 'High', riskLevel: 'High', proof: 'Data Deletion Log', location: 'IT/Data Team' }
                ]
            },
            {
                title: "🚨 Cybersecurity Incident Response Drill",
                department: "IT Security",
                frequency: "Semi-Annually",
                role: "CISO",
                summary: "A simulation to test the company's readiness to respond to a major cybersecurity incident like a ransomware attack.",
                tasks: [
                    { id: 'CYBER-DRILL-01', description: "Simulate a specific threat scenario (e.g., ransomware detection, data breach alert).", priority: 'High', riskLevel: 'High', proof: 'Drill Scenario Document', location: 'Security Office' },
                    { id: 'CYBER-DRILL-02', description: "Test the effectiveness of the initial detection and alerting systems. (ISO 27001)", priority: 'High', riskLevel: 'High', proof: 'Alert Timeliness Report', location: 'SOC' },
                    { id: 'CYBER-DRILL-03', description: "Evaluate the response team's ability to follow the Incident Response Plan (containment, eradication, recovery).", priority: 'High', riskLevel: 'High', proof: 'Drill Observation Notes', location: 'War Room' },
                    { id: 'CYBER-DRILL-04', description: "Test the communication plan: how are stakeholders (legal, execs, PR) informed?", priority: 'High', riskLevel: 'High', proof: 'Communication Test Log', location: 'War Room' },
                    { id: 'CYBER-DRILL-05', description: "Conduct a post-drill review to identify weaknesses and create an action plan for improvement.", priority: 'High', riskLevel: 'High', proof: 'Post-Mortem Report', location: 'Security Office' }
                ]
            },
            {
                title: "🤝 Vendor & Third-Party Security Assessment",
                department: "Procurement/Security",
                frequency: "Per New Vendor",
                role: "Security Analyst",
                summary: "A due diligence checklist to assess the security posture of new vendors before granting them access to company data or systems.",
                tasks: [
                    { id: 'VEND-SEC-01', description: "Request and review the vendor's security certifications (e.g., SOC 2 Type II, ISO 27001).", priority: 'High', riskLevel: 'High', proof: 'Vendor Certificates', location: 'Procurement Office' },
                    { id: 'VEND-SEC-02', description: "Issue a standardized security questionnaire (e.g., CAIQ, SIG Lite) to the vendor.", priority: 'High', riskLevel: 'High', proof: 'Completed Questionnaire', location: 'Procurement Office' },
                    { id: 'VEND-SEC-03', description: "Review the vendor's data processing agreement to ensure it meets your company's privacy standards.", priority: 'High', riskLevel: 'High', proof: 'Signed DPA', location: 'Legal Office' },
                    { id: 'VEND-SEC-04', description: "Assess the criticality of the data the vendor will access and apply a corresponding level of scrutiny.", priority: 'High', riskLevel: 'High', proof: 'Data Classification Matrix', location: 'Security Office' },
                    { id: 'VEND-SEC-05', description: "Document a final risk assessment and recommendation (Accept, Accept with Conditions, Reject).", priority: 'High', riskLevel: 'High', proof: 'Risk Assessment Report', location: 'Security Office' }
                ]
            },
            {
                title: "☁️ Cloud Security Posture Management (CSPM)",
                department: "Cloud Security/DevOps",
                frequency: "Weekly",
                role: "Cloud Security Engineer",
                summary: "An audit to identify and remediate misconfigurations in your cloud environment (AWS, Azure, GCP).",
                tasks: [
                    { id: 'CSPM-01', description: "Scan for publicly exposed storage buckets (e.g., S3 buckets) and restrict access. (CSA CCM)", priority: 'High', riskLevel: 'High', proof: 'Scan Report', location: 'Cloud Console' },
                    { id: 'CSPM-02', description: "Check for overly permissive IAM roles and enforce the principle of least privilege. (CSA CCM)", priority: 'High', riskLevel: 'High', proof: 'IAM Role Audit', location: 'Cloud Console' },
                    { id: 'CSPM-03', description: "Ensure logging and monitoring (e.g., CloudTrail, Azure Monitor) are enabled for all critical services.", priority: 'High', riskLevel: 'High', proof: 'Logging Config Screenshot', location: 'Cloud Console' },
                    { id: 'CSPM-04', description: "Verify that encryption is enabled for all data at rest (e.g., EBS volumes, RDS databases).", priority: 'High', riskLevel: 'High', proof: 'Encryption Status Report', location: 'Cloud Console' },
                    { id: 'CSPM-05', description: "Audit security group and network firewall rules for any open ports that are not required.", priority: 'High', riskLevel: 'High', proof: 'Firewall Rule Review', location: 'Cloud Console' }
                ]
            },
            {
                title: "💻 Employee Offboarding IT Security",
                department: "IT/HR",
                frequency: "Per Departure",
                role: "IT Admin",
                summary: "A checklist to securely deprovision an employee's access to all company systems, preventing data theft or unauthorized access.",
                tasks: [
                    { id: 'IT-OFFBOARD-01', description: "Immediately disable the employee's primary account (e.g., Active Directory, Google Workspace) upon notification from HR.", priority: 'High', riskLevel: 'High', proof: 'Account Disable Log', location: 'IT Admin Console' },
                    { id: 'IT-OFFBOARD-02', description: "Revoke access to all third-party SaaS applications via SSO or manual de-provisioning.", priority: 'High', riskLevel: 'High', proof: 'Access Revocation Checklist', location: 'IT Admin Console' },
                    { id: 'IT-OFFBOARD-03', description: "Wipe all company data from the employee's corporate-issued devices (laptop, mobile).", priority: 'High', riskLevel: 'High', proof: 'Device Wipe Confirmation', location: 'MDM Software' },
                    { id: 'IT-OFFBOARD-04', description: "Change any shared passwords the employee may have had access to.", priority: 'High', riskLevel: 'High', proof: 'Password Change Log', location: 'Password Manager' },
                    { id: 'IT-OFFBOARD-05', description: "Archive the employee's email and data according to the company's data retention policy.", priority: 'High', riskLevel: 'Medium', proof: 'Archiving Job Log', location: 'IT Admin Console' }
                ]
            },
            {
                title: "🔑 Access Control & Review",
                department: "IT Security",
                frequency: "Quarterly",
                role: "Security Analyst",
                summary: "A periodic review to ensure employees only have access to the data and systems they need to perform their jobs (Principle of Least Privilege).",
                tasks: [
                    { id: 'ACR-01', description: "Generate a list of all users with administrator-level privileges. (ISO 27001)", priority: 'High', riskLevel: 'High', proof: 'Admin User Report', location: 'IT Systems' },
                    { id: 'ACR-02', description: "Have the manager of each 'admin' user re-certify in writing that the access is still required.", priority: 'High', riskLevel: 'High', proof: 'Manager Sign-off Emails', location: 'Security Office' },
                    { id: 'ACR-03', description: "Review access logs for highly sensitive systems for any anomalous activity.", priority: 'High', riskLevel: 'High', proof: 'Log Review Report', location: 'SIEM' },
                    { id: 'ACR-04', description: "Audit user access to critical financial and HR systems.", priority: 'High', riskLevel: 'High', proof: 'Access Audit Report', location: 'Security Office' },
                    { id: 'ACR-05', description: "Remove any dormant accounts that have not been used in over 90 days.", priority: 'High', riskLevel: 'Medium', proof: 'Account Deletion Log', location: 'IT Systems' }
                ]
            },
            {
                title: "PATCH-01",
                department: "IT Operations",
                frequency: "Monthly",
                role: "System Administrator",
                summary: "A systematic process for identifying, testing, and deploying security patches to servers and endpoints to protect against known vulnerabilities.",
                tasks: [
                    { id: 'PATCH-01', description: "Scan all systems for missing critical and high-severity patches.", priority: 'High', riskLevel: 'High', proof: 'Vulnerability Scan Report', location: 'Patch Management System' },
                    { id: 'PATCH-02', description: "Test critical patches in a staging environment before deploying to production.", priority: 'High', riskLevel: 'High', proof: 'Test Report', location: 'Staging Environment' },
                    { id: 'PATCH-03', description: "Deploy patches to production systems within the timeframe defined by the company's SLA.", priority: 'High', riskLevel: 'High', proof: 'Deployment Log', location: 'Patch Management System' },
                    { id: 'PATCH-04', description: "Verify that patches have been successfully installed and report on compliance.", priority: 'High', riskLevel: 'Medium', proof: 'Patch Compliance Report', location: 'Patch Management System' },
                    { id: 'PATCH-05', description: "Document any exceptions for systems that cannot be patched and implement compensating controls.", priority: 'High', riskLevel: 'High', proof: 'Exception Document', location: 'IT Office' }
                ]
            }
        ]
    },
    {
        id: 'cinema_operations_pack',
        title: "Cinema & Multiplex Operations",
        priceUSD: 89.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment",
        description: "For cinema managers. A toolkit to ensure fire safety, a premium customer experience, and F&B hygiene.",
        icon: <Popcorn className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Implement a 'Fire & Life Safety' audit based on the Uphaar Cinema tragedy.",
            "Standardize 'Projector & Sound System' maintenance.",
            "Ensure FSSAI compliance with 'Snack Counter Hygiene' checklists.",
            "Improve guest experience with a 'Customer Area Inspection' checklist."
        ],
        checklists: [
            {
                title: "🔥 Fire & Life Safety Audit",
                department: "Safety/Operations",
                frequency: "Weekly",
                role: "Duty Manager",
                summary: "A critical audit to prevent tragedies like the Uphaar Cinema fire by ensuring all fire safety measures are functional and accessible.",
                tasks: [
                    { id: 'CINE-FS-01', description: "Physically inspect all emergency exits to ensure they are unlocked and unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Exit Inspection Log', location: 'All Auditoriums & Lobbies' },
                    { id: 'CINE-FS-02', description: "Test all emergency lights and exit signage to ensure they illuminate correctly.", priority: 'High', riskLevel: 'High', proof: 'Lighting Test Log', location: 'All Areas' },
                    { id: 'CINE-FS-03', description: "Check that all fire extinguishers are in their designated locations, have not expired, and pressure gauges are in the green.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Inspection Tag', location: 'All Areas' },
                    { id: 'CINE-FS-04', description: "Test the public address (PA) system to ensure announcements are clear in all auditoriums.", priority: 'High', riskLevel: 'High', proof: 'PA System Test Log', location: 'Control Room' },
                    { id: 'CINE-FS-05', description: "Conduct a brief fire safety huddle with staff to review evacuation roles.", priority: 'Medium', riskLevel: 'Medium', proof: 'Huddle Log', location: 'Staff Area' }
                ]
            },
            {
                title: "🎬 Projector & Sound System Maintenance",
                department: "Technical",
                frequency: "Daily",
                role: "Projectionist",
                summary: "Ensures a flawless movie-watching experience by maintaining the core technical equipment of the cinema.",
                tasks: [
                    { id: 'CINE-TECH-01', description: "Clean projector lenses and check lamp life hours.", priority: 'High', riskLevel: 'Medium', proof: 'Projection Log', location: 'Projection Room' },
                    { id: 'CINE-TECH-02', description: "Run a test pattern to check for image focus, brightness, and color accuracy.", priority: 'High', riskLevel: 'Medium', proof: 'Projection Log', location: 'Auditorium' },
                    { id: 'CINE-TECH-03', description: "Conduct a sound check to ensure all surround sound channels are working correctly.", priority: 'High', riskLevel: 'Medium', proof: 'Sound Check Log', location: 'Auditorium' },
                    { id: 'CINE-TECH-04', description: "Verify that the show playlists are loaded correctly for the day's schedule.", priority: 'High', riskLevel: 'High', proof: 'Playlist Screenshot', location: 'Projection Room' },
                    { id: 'CINE-TECH-05', description: "Check the temperature of the projection room to prevent equipment overheating.", priority: 'High', riskLevel: 'Medium', proof: 'Temperature Log', location: 'Projection Room' }
                ]
            },
            {
                title: "🍿 Snack Counter (F&B) Hygiene",
                department: "F&B",
                frequency: "Daily",
                role: "F&B Manager",
                summary: "A checklist aligned with FSSAI/HACCP to prevent food contamination and ensure hygiene at the snack counter.",
                tasks: [
                    { id: 'CINE-FB-01', description: "Check and log temperatures of all refrigerators and warmers.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Snack Counter' },
                    { id: 'CINE-FB-02', description: "Verify that all food handlers are adhering to personal hygiene standards (gloves, hairnets).", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Snack Counter' },
                    { id: 'CINE-FB-03', description: "Ensure all food items are correctly labeled with expiry dates and FIFO is being practiced.", priority: 'High', riskLevel: 'High', proof: 'Date Check Log', location: 'Storage/Counter' },
                    { id: 'CINE-FB-04', description: "Check that popcorn machines, soda dispensers, and other equipment are cleaned and sanitized.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Snack Counter' },
                    { id: 'CINE-FB-05', description: "Ensure waste bins are not overflowing and the area is free of pests.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Snack Counter/Waste Area' }
                ]
            },
            {
                title: "🛋️ Customer Area & Restroom Inspection",
                department: "Housekeeping",
                frequency: "Hourly",
                role: "Housekeeping Supervisor",
                summary: "An hourly checklist to maintain a clean and pleasant environment for guests in all public areas.",
                tasks: [
                    { id: 'CINE-HK-01', description: "Inspect lobbies, hallways, and auditoriums for cleanliness and any spills.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Public Areas' },
                    { id: 'CINE-HK-02', description: "Check and clean restrooms, ensuring they are stocked with soap, paper towels, and toilet paper.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Cleaning Log', location: 'Restrooms' },
                    { id: 'CINE-HK-03', description: "Empty trash bins in all public areas before they become full.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Public Areas' },
                    { id: 'CINE-HK-04', description: "Report any damages (e.g., broken seats, faulty lights) to the maintenance team immediately.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Request Log', location: 'Public Areas' },
                    { id: 'CINE-HK-05', description: "Ensure all posters and promotional materials are up-to-date and in good condition.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Lobby' }
                ]
            },
            {
                title: "🎟️ Ticketing & Box Office Operations",
                department: "Operations",
                frequency: "Daily",
                role: "Box Office Manager",
                summary: "A checklist to ensure smooth and accurate ticketing operations, from cash handling to customer service.",
                tasks: [
                    { id: 'CINE-BO-01', description: "Perform cash reconciliation at the start and end of each shift.", priority: 'High', riskLevel: 'High', proof: 'Cash Count Sheet', location: 'Box Office' },
                    { id: 'CINE-BO-02', description: "Ensure all ticketing equipment (printers, scanners) is functional.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Test Log', location: 'Box Office' },
                    { id: 'CINE-BO-03', description: "Verify that show timings and pricing are correctly displayed on all channels (online and offline).", priority: 'High', riskLevel: 'Medium', proof: 'Display Audit', location: 'Box Office/Website' },
                    { id: 'CINE-BO-04', description: "Review daily sales reports for any discrepancies or unusual patterns.", priority: 'High', riskLevel: 'Medium', proof: 'Sales Report Analysis', location: 'Back Office' },
                    { id: 'CINE-BO-05', description: "Ensure staff are knowledgeable about current promotions, movie ratings, and loyalty programs.", priority: 'High', riskLevel: 'Low', proof: 'Staff Quiz/Observation', location: 'Box Office' }
                ]
            },
            {
                title: "♿ Accessibility Compliance Audit",
                department: "Operations/Compliance",
                frequency: "Quarterly",
                role: "Facility Manager",
                summary: "Ensures the cinema is accessible and compliant with standards for differently-abled patrons.",
                tasks: [
                    { id: 'CINE-ACC-01', description: "Verify that wheelchair ramps and accessible pathways are unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Accessibility Path Audit', location: 'Venue-wide' },
                    { id: 'CINE-ACC-02', description: "Check that designated wheelchair seating areas in auditoriums are clearly marked and accessible.", priority: 'High', riskLevel: 'High', proof: 'Auditorium Audit', location: 'Auditoriums' },
                    { id: 'CINE-ACC-03', description: "Test assistive listening devices to ensure they are functional.", priority: 'High', riskLevel: 'Medium', proof: 'Device Test Log', location: 'Box Office' },
                    { id: 'CINE-ACC-04', description: "Ensure accessible restrooms are clean, stocked, and all fixtures are in working order.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Inspection Log', location: 'Restrooms' },
                    { id: 'CINE-ACC-05', description: "Review website and ticketing portal for accessibility compliance (e.g., screen reader compatibility).", priority: 'Medium', riskLevel: 'Low', proof: 'Web Accessibility Report', location: 'Online' }
                ]
            },
            {
                title: "💨 HVAC & Air Quality Management",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Supervisor",
                summary: "A checklist to ensure a comfortable and healthy environment for guests by maintaining HVAC systems.",
                tasks: [
                    { id: 'CINE-HVAC-01', description: "Check and clean HVAC filters to ensure proper airflow and air quality.", priority: 'High', riskLevel: 'Medium', proof: 'Filter Cleaning Log', location: 'HVAC Rooms' },
                    { id: 'CINE-HVAC-02', description: "Monitor and log auditorium temperatures to ensure they are within a comfortable range.", priority: 'High', riskLevel: 'Low', proof: 'Temperature Log', location: 'Auditoriums' },
                    { id: 'CINE-HVAC-03', description: "Inspect HVAC units for any unusual noises or leaks.", priority: 'High', riskLevel: 'Medium', proof: 'Unit Inspection Log', location: 'HVAC Rooms' },
                    { id: 'CINE-HVAC-04', description: "Ensure that ventilation systems are operating correctly to provide fresh air exchange.", priority: 'High', riskLevel: 'Medium', proof: 'Ventilation Check', location: 'All Areas' },
                    { id: 'CINE-HVAC-05', description: "Schedule and review preventive maintenance by the HVAC vendor.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Service Report', location: 'Back Office' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Housekeeping/Maintenance",
                frequency: "Weekly",
                role: "Duty Manager",
                summary: "A proactive checklist for preventing and managing pest infestations, crucial for hygiene and guest experience.",
                tasks: [
                    { id: 'PEST-CINE-01', description: "Inspect auditoriums, snack counter, and waste areas for signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Pest Inspection Log', location: 'All Areas' },
                    { id: 'PEST-CINE-02', description: "Ensure a strict cleaning schedule is followed after every show to remove food debris.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Auditoriums' },
                    { id: 'PEST-CINE-03', description: "Check that all exterior doors have proper seals and are not left propped open.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Entrances/Exits' },
                    { id: 'PEST-CINE-04', description: "Ensure garbage is stored in sealed bins and disposed of regularly.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Log', location: 'Waste Area' },
                    { id: 'PEST-CINE-05', description: "Review reports from the pest control vendor and action any recommendations.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Review', location: 'Manager Office' }
                ]
            }
        ]
    },
    {
        id: 'theme_park_operations_pack',
        title: "Theme Park & Amusement Park Operations",
        priceUSD: 149.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Entertainment",
        description: "For park managers and safety officers. A comprehensive toolkit for ensuring ride safety, crowd management, and F&B hygiene.",
        icon: <FerrisWheel className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Implement a 'Daily Ride Safety Inspection' checklist for all attractions.",
            "Standardize 'Emergency & Evacuation Drills' to prepare for any incident.",
            "Ensure 'Water Ride & Pool Hygiene' to protect guest health.",
            "Includes checklists for 'Crowd Management' and 'Vendor Hygiene Audits'."
        ],
        checklists: [
            {
                title: "🎢 Daily Ride Safety Inspection",
                department: "Ride Operations/Maintenance",
                frequency: "Daily (Pre-Opening)",
                role: "Ride Technician",
                summary: "A critical pre-opening checklist to ensure every ride is mechanically and electrically safe for operation.",
                tasks: [
                    { id: 'TP-RIDE-01', description: "Perform a visual inspection of the ride structure for any cracks, loose bolts, or wear.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Ride Location' },
                    { id: 'TP-RIDE-02', description: "Check all safety restraints (seatbelts, harnesses, lap bars) for proper function.", priority: 'High', riskLevel: 'High', proof: 'Restraint Test Log', location: 'Ride Location' },
                    { id: 'TP-RIDE-03', description: "Inspect hydraulic and pneumatic systems for leaks.", priority: 'High', riskLevel: 'High', proof: 'System Pressure Check', location: 'Ride Mechanical Room' },
                    { id: 'TP-RIDE-04', description: "Run the ride through a full cycle without passengers to check for smooth operation and unusual noises.", priority: 'High', riskLevel: 'High', proof: 'Test Cycle Log', location: 'Ride Location' },
                    { id: 'TP-RIDE-05', description: "Verify all emergency stop buttons are functional.", priority: 'High', riskLevel: 'High', proof: 'E-Stop Test Log', location: 'Operator Booth' }
                ]
            },
            {
                title: "👨‍👩‍👧‍👦 Crowd Management & Queue Control",
                department: "Park Operations/Security",
                frequency: "Ongoing",
                role: "Area Supervisor",
                summary: "A checklist to manage guest flow, prevent overcrowding, and ensure a safe and pleasant experience in queues and pathways.",
                tasks: [
                    { id: 'TP-CROWD-01', description: "Monitor queue lines and deploy additional barriers if overcrowding occurs.", priority: 'High', riskLevel: 'Medium', proof: 'Supervisor Log', location: 'Queue Lines' },
                    { id: 'TP-CROWD-02', description: "Ensure all pathways and emergency access routes are clear of obstructions.", priority: 'High', riskLevel: 'High', proof: 'Visual Sweep Log', location: 'Park-wide' },
                    { id: 'TP-CROWD-03', description: "Use public address systems to manage crowd flow during peak times or incidents.", priority: 'High', riskLevel: 'Medium', proof: 'PA Announcement Log', location: 'Control Room' },
                    { id: 'TP-CROWD-04', description: "Ensure staff are trained to spot signs of crowd distress and report to security.", priority: 'High', riskLevel: 'High', proof: 'Training Record', location: 'Staff Training' },
                    { id: 'TP-CROWD-05', description: "Deploy additional staff to high-traffic areas during parades or special events.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Deployment Sheet', location: 'Event Areas' }
                ]
            },
            {
                title: "💧 Water Ride & Pool Hygiene",
                department: "Aquatics/Maintenance",
                frequency: "Hourly",
                role: "Aquatics Technician",
                summary: "Maintains the chemical balance and cleanliness of all water attractions to prevent waterborne illnesses.",
                tasks: [
                    { id: 'TP-WATER-01', description: "Test and log chlorine and pH levels of all pools and water rides every hour.", priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Water Attractions' },
                    { id: 'TP-WATER-02', description: "Inspect water filtration systems to ensure they are operating correctly.", priority: 'High', riskLevel: 'High', proof: 'Filter Pressure Log', location: 'Pump Room' },
                    { id: 'TP-WATER-03', description: "Skim surfaces and vacuum pools to remove debris.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Water Attractions' },
                    { id: 'TP-WATER-04', description: "Ensure lifeguards are at their stations and alert.", priority: 'High', riskLevel: 'High', proof: 'Supervisor Observation', location: 'Pools/Water Slides' },
                    { id: 'TP-WATER-05', description: "Check that all safety signage (e.g., depth markers, ride rules) is clearly visible.", priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Water Attractions' }
                ]
            },
            {
                title: "🍔 F&B Vendor Hygiene Audit",
                department: "F&B/Compliance",
                frequency: "Daily",
                role: "F&B Manager",
                summary: "A checklist to ensure all third-party food vendors within the park adhere to strict hygiene and safety standards.",
                tasks: [
                    { id: 'TP-VENDOR-01', description: "Check vendor stalls for general cleanliness and adherence to FSSAI/HACCP norms.", priority: 'High', riskLevel: 'High', proof: 'Vendor Audit Form', location: 'Vendor Stalls' },
                    { id: 'TP-VENDOR-02', description: "Use a probe thermometer to check the temperature of hot and cold food items being held for sale.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Vendor Stalls' },
                    { id: 'TP-VENDOR-03', description: "Verify that vendor staff are following personal hygiene rules (e.g., wearing gloves, hairnets).", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Vendor Stalls' },
                    { id: 'TP-VENDOR-04', description: "Inspect their waste disposal practices to ensure they are not attracting pests.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Vendor Stalls' },
                    { id: 'TP-VENDOR-05', description: "Ensure they have a valid food license displayed prominently.", priority: 'High', riskLevel: 'High', proof: 'License Check', location: 'Vendor Stalls' }
                ]
            },
            {
                title: "🚨 Emergency Preparedness Drill",
                department: "Safety/Security",
                frequency: "Quarterly",
                role: "Safety Manager",
                summary: "A simulated drill to test the park's response to various emergencies like a ride malfunction, medical incident, or evacuation.",
                tasks: [
                    { id: 'TP-DRILL-01', description: "Plan and document a specific drill scenario (e.g., simulated fire near a major ride).", priority: 'High', riskLevel: 'High', proof: 'Drill Plan', location: 'Office' },
                    { id: 'TP-DRILL-02', description: "Test the effectiveness of the park-wide emergency announcement system.", priority: 'High', riskLevel: 'High', proof: 'Test Announcement Log', location: 'Control Room' },
                    { id: 'TP-DRILL-03', description: "Evaluate staff response time and adherence to their assigned emergency roles.", priority: 'High', riskLevel: 'High', proof: 'Drill Observation Report', location: 'Drill Location' },
                    { id: 'TP-DRILL-04', description: "Assess the speed and orderliness of the (simulated) guest evacuation process.", priority: 'High', riskLevel: 'High', proof: 'Evacuation Time Log', location: 'Drill Location' },
                    { id: 'TP-DRILL-05', description: "Conduct a post-drill debrief to identify areas for improvement.", priority: 'High', riskLevel: 'High', proof: 'Debrief Minutes', location: 'Office' }
                ]
            },
            {
                title: "キャラクター Mascot & Character Performer Safety",
                department: "Entertainment",
                frequency: "Per Shift",
                role: "Entertainment Supervisor",
                summary: "Ensures the safety and well-being of character performers, who often work in physically demanding conditions.",
                tasks: [
                    { id: 'TP-MASCOT-01', description: "Inspect costumes for cleanliness, damage, and proper ventilation before each shift.", priority: 'High', riskLevel: 'Medium', proof: 'Costume Inspection Log', location: 'Green Room' },
                    { id: 'TP-MASCOT-02', description: "Ensure performers adhere to mandatory break times to prevent overheating and dehydration.", priority: 'High', riskLevel: 'High', proof: 'Break Schedule Log', location: 'Green Room' },
                    { id: 'TP-MASCOT-03', description: "Provide a designated 'handler' for each costumed character to manage crowds and guide the performer.", priority: 'High', riskLevel: 'High', proof: 'Staff Assignment Sheet', location: 'Park-wide' },
                    { id: 'TP-MASCOT-04', description: "Train performers on non-verbal signals to communicate distress to their handler.", priority: 'High', riskLevel: 'High', proof: 'Training Record', location: 'Training' },
                    { id: 'TP-MASCOT-05', description: "Ensure a private and cool 'de-heading' zone is available for performers.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Backstage Areas' }
                ]
            },
            {
                title: "💰 Cash Control & Ticketing Audit",
                department: "Finance/Operations",
                frequency: "Daily",
                role: "Finance Manager",
                summary: "A checklist to ensure all revenue from ticketing and in-park sales is accounted for and securely handled.",
                tasks: [
                    { id: 'TP-CASH-01', description: "Conduct blind cash reconciliations for all ticketing and retail POS stations at the end of each shift.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Sheets', location: 'Cash Office' },
                    { id: 'TP-CASH-02', description: "Review POS void and discount reports for unusual patterns or excessive use.", priority: 'High', riskLevel: 'High', proof: 'POS Audit Report', location: 'Office' },
                    { id: 'TP-CASH-03', description: "Ensure secure cash collection procedures are followed from all outlets throughout the day.", priority: 'High', riskLevel: 'High', proof: 'Cash Drop Log', location: 'Cash Office' },
                    { id: 'TP-CASH-04', description: "Verify that ticket scanner data matches the number of tickets sold.", priority: 'High', riskLevel: 'Medium', proof: 'Reconciliation Report', location: 'Office' },
                    { id: 'TP-CASH-05', description: "Audit wristband or ticket inventory to ensure no unauthorized access.", priority: 'High', riskLevel: 'High', proof: 'Inventory Count', location: 'Ticket Booth' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Maintenance",
                frequency: "Weekly",
                role: "Facility Manager",
                summary: "A proactive checklist to manage pests in a large, open environment with numerous food sources.",
                tasks: [
                    { id: 'PEST-TP-01', description: "Inspect all F&B outlets, waste disposal areas, and gardens for signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Pest Inspection Log', location: 'Park-wide' },
                    { id: 'PEST-TP-02', description: "Ensure all waste bins across the park are covered and emptied on a frequent schedule.", priority: 'High', riskLevel: 'High', proof: 'Waste Management Schedule', location: 'Park-wide' },
                    { id: 'PEST-TP-03', description: "Check that drainage systems are clear and not providing breeding grounds for mosquitoes.", priority: 'High', riskLevel: 'Medium', proof: 'Drainage Inspection Log', location: 'Park-wide' },
                    { id: 'PEST-TP-04', description: "Review pest control vendor reports and verify that targeted treatments are being carried out effectively.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Analysis', location: 'Office' },
                    { id: 'PEST-TP-05', description: "Train staff, especially in F&B, on proper food storage and spill cleanup procedures to deter pests.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Training Log', location: 'F&B Locations' }
                ]
            }
        ]
    },
    {
        id: 'sports_complex_stadium_pack',
        title: "Sports Complex & Stadium Operations",
        priceUSD: 149.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Events",
        description: "For facility managers of sports complexes and stadiums. A toolkit for managing member safety, equipment maintenance, and event day readiness.",
        icon: <Trophy className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Ensure athlete and spectator safety with a 'Facility Safety & Readiness' audit.",
            "Standardize 'Gym & Fitness Equipment' maintenance to prevent injuries.",
            "Manage 'Event Day Operations' from ticketing to crowd control.",
            "Includes checklists for 'Pool Safety' and 'Emergency Medical Response'."
        ],
        checklists: [
            {
                title: "🏟️ Facility Safety & Readiness Audit",
                department: "Operations",
                frequency: "Daily",
                role: "Duty Manager",
                summary: "A daily walkthrough to ensure the entire complex is safe for members and guests, from turf condition to lighting.",
                tasks: [
                    { id: 'SPORT-FS-01', description: "Inspect playing surfaces (turf, courts) for hazards like holes, debris, or water logging.", priority: 'High', riskLevel: 'High', proof: 'Field Inspection Log', location: 'Playing Fields/Courts' },
                    { id: 'SPORT-FS-02', description: "Check all facility lighting (indoor and outdoor) to ensure proper illumination.", priority: 'High', riskLevel: 'Medium', proof: 'Lighting Check Log', location: 'Facility-wide' },
                    { id: 'SPORT-FS-03', description: "Ensure all spectator seating and railings are secure and free from damage.", priority: 'High', riskLevel: 'High', proof: 'Seating Inspection Log', location: 'Grandstands' },
                    { id: 'SPORT-FS-04', description: "Verify that first-aid stations are stocked and automated external defibrillators (AEDs) are functional.", priority: 'High', riskLevel: 'High', proof: 'First-Aid Kit Log', location: 'Medical Rooms' },
                    { id: 'SPORT-FS-05', description: "Check that all pathways and emergency exits are clear and accessible.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Facility-wide' }
                ]
            },
            {
                title: "🏋️ Gym & Fitness Equipment Maintenance",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Supervisor",
                summary: "A preventive maintenance checklist to prevent equipment-related injuries and ensure longevity.",
                tasks: [
                    { id: 'SPORT-GYM-01', description: "Inspect all cardio machines (treadmills, bikes) for wear and tear on belts and pedals.", priority: 'High', riskLevel: 'Medium', proof: 'Cardio Equipment Log', location: 'Gym' },
                    { id: 'SPORT-GYM-02', description: "Check all strength training machines for frayed cables, loose bolts, and proper operation.", priority: 'High', riskLevel: 'High', proof: 'Strength Equipment Log', location: 'Gym' },
                    { id: 'SPORT-GYM-03', description: "Sanitize all equipment surfaces, grips, and pads.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Gym' },
                    { id: 'SPORT-GYM-04', description: "Ensure free weights are stored correctly and not creating tripping hazards.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Gym' },
                    { id: 'SPORT-GYM-05', description: "Place 'Out of Order' signs on any faulty equipment and log it for repair.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Request Log', location: 'Gym' }
                ]
            },
            {
                title: "🎟️ Event Day Operations",
                department: "Events",
                frequency: "Per Event",
                role: "Event Manager",
                summary: "A checklist to manage the complexities of hosting a sporting event, from pre-event setup to post-event cleanup.",
                tasks: [
                    { id: 'SPORT-EVENT-01', description: "Conduct a final walkthrough of the venue with security and operations heads.", priority: 'High', riskLevel: 'High', proof: 'Walkthrough Sign-off', location: 'Venue' },
                    { id: 'SPORT-EVENT-02', description: "Brief all event staff, security, and volunteers on their roles and emergency procedures.", priority: 'High', riskLevel: 'High', proof: 'Briefing Log', location: 'Briefing Area' },
                    { id: 'SPORT-EVENT-03', description: "Test ticketing scanners, PA systems, and scoreboards.", priority: 'High', riskLevel: 'Medium', proof: 'Tech Check Log', location: 'Venue' },
                    { id: 'SPORT-EVENT-04', description: "Manage crowd flow at entry points, concessions, and restrooms.", priority: 'High', riskLevel: 'High', proof: 'Live Observation', location: 'Venue' },
                    { id: 'SPORT-EVENT-05', description: "Coordinate with waste management for post-event cleanup.", priority: 'High', riskLevel: 'Low', proof: 'Cleanup Plan', location: 'Office' }
                ]
            },
            {
                title: "💧 Swimming Pool Safety & Hygiene",
                department: "Aquatics",
                frequency: "Daily",
                role: "Pool Manager",
                summary: "Ensures the swimming pool is safe, hygienic, and properly supervised.",
                tasks: [
                    { id: 'SPORT-POOL-01', description: "Test and log water chemistry (chlorine, pH) every two hours.", priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'SPORT-POOL-02', description: "Ensure lifeguards are certified, on duty, and actively scanning the pool.", priority: 'High', riskLevel: 'High', proof: 'Lifeguard Roster & Certs', location: 'Poolside' },
                    { id: 'SPORT-POOL-03', description: "Check that all rescue equipment (life rings, spine boards) is accessible and in good condition.", priority: 'High', riskLevel: 'High', proof: 'Rescue Equipment Log', location: 'Poolside' },
                    { id: 'SPORT-POOL-04', description: "Ensure pool decks are clean and free of slip hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Deck Inspection Log', location: 'Poolside' },
                    { id: 'SPORT-POOL-05', description: "Verify that depth markings and safety rules are clearly visible.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Audit', location: 'Poolside' }
                ]
            },
            {
                title: "🪪 Member & Staff Verification",
                department: "Security/Front Desk",
                frequency: "Ongoing",
                role: "Front Desk Staff",
                summary: "A process to ensure that only authorized members and staff have access to the facility.",
                tasks: [
                    { id: 'SPORT-VER-01', description: "Verify the identity and membership status of every person entering the facility.", priority: 'High', riskLevel: 'Medium', proof: 'Access Control System Log', location: 'Front Desk' },
                    { id: 'SPORT-VER-02', description: "Ensure all trainers and coaches have valid certifications and are authorized to conduct sessions.", priority: 'High', riskLevel: 'High', proof: 'Trainer Certification File', location: 'Office' },
                    { id: 'SPORT-VER-03', description: "Issue and manage access cards or wristbands for members and staff.", priority: 'High', riskLevel: 'Medium', proof: 'Access Card Log', location: 'Front Desk' },
                    { id: 'SPORT-VER-04', description: "Implement a guest pass policy with clear rules and tracking.", priority: 'High', riskLevel: 'Low', proof: 'Guest Register', location: 'Front Desk' },
                    { id: 'SPORT-VER-05', description: "Immediately deactivate access for terminated staff or expired memberships.", priority: 'High', riskLevel: 'High', proof: 'Deactivation Log', location: 'System' }
                ]
            },
            {
                title: "🧼 Locker Room & Shower Hygiene",
                department: "Housekeeping",
                frequency: "Hourly",
                role: "Housekeeping Staff",
                summary: "Maintains high standards of hygiene in locker rooms and showers to prevent infections and improve member satisfaction.",
                tasks: [
                    { id: 'SPORT-LR-01', description: "Clean and disinfect all high-touch surfaces (lockers, benches, taps).", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Locker Rooms' },
                    { id: 'SPORT-LR-02', description: "Mop floors to keep them dry and prevent slips.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Locker Rooms' },
                    { id: 'SPORT-LR-03', description: "Restock soap, sanitizer, and paper towels.", priority: 'High', riskLevel: 'Low', proof: 'Restock Log', location: 'Locker Rooms' },
                    { id: 'SPORT-LR-04', description: "Empty trash bins regularly.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Locker Rooms' },
                    { id: 'SPORT-LR-05', description: "Report any plumbing issues or damages immediately.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Request', location: 'Locker Rooms' }
                ]
            },
            {
                title: "🚑 Emergency Medical Response Plan",
                department: "Safety",
                frequency: "Quarterly Drill",
                role: "Safety Officer",
                summary: "A plan to ensure swift and effective response to medical emergencies within the complex.",
                tasks: [
                    { id: 'SPORT-EMR-01', description: "Ensure all staff are trained in basic first aid and CPR.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'SPORT-EMR-02', description: "Establish clear protocols for contacting emergency services and providing directions.", priority: 'High', riskLevel: 'High', proof: 'Emergency Protocol Document', location: 'Office' },
                    { id: 'SPORT-EMR-03', description: "Conduct drills for common scenarios like cardiac arrest or major injuries.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Facility-wide' },
                    { id: 'SPORT-EMR-04', description: "Maintain a log of all medical incidents and review them to identify trends or prevention opportunities.", priority: 'High', riskLevel: 'Medium', proof: 'Incident Logbook', location: 'Medical Room' },
                    { id: 'SPORT-EMR-05', description: "Designate and clearly mark assembly points for evacuation.", priority: 'High', riskLevel: 'High', proof: 'Signage Audit', location: 'Facility-wide' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Monthly",
                role: "Facility Manager",
                summary: "A proactive checklist for managing pests in a facility with high foot traffic and various environments like gyms, cafes, and locker rooms.",
                tasks: [
                    { id: 'PEST-SPORT-01', description: "Inspect locker rooms, cafes, and waste disposal areas for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Pest Inspection Log', location: 'All Areas' },
                    { id: 'PEST-SPORT-02', description: "Ensure any on-site food vendors adhere to strict hygiene and food storage standards.", priority: 'High', riskLevel: 'High', proof: 'Vendor Audit', location: 'F&B Outlets' },
                    { id: 'PEST-SPORT-03', description: "Keep all areas, especially changing rooms and poolside, clean and free of standing water.", priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Logs', location: 'All Areas' },
                    { id: 'PEST-SPORT-04', description: "Ensure waste is managed efficiently, with covered bins that are emptied regularly.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Plan', location: 'Waste Areas' },
                    { id: 'PEST-SPORT-05', description: "Review and action all recommendations from the professional pest control vendor's report.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Follow-up', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'museum_cultural_center_pack',
        title: "Museum & Cultural Institution Management",
        priceUSD: 89.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment",
        description: "For curators and facility heads. A specialized toolkit for artifact preservation, visitor management, and security in museums and galleries.",
        icon: <Landmark className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Implement an 'Artifact Handling & Environment Control' protocol.",
            "Standardize 'Visitor Management & Ticketing' operations.",
            "Ensure security with 'Asset Tagging & Surveillance' checklists.",
            "Includes checklists for 'Fire Safety in Heritage Buildings' and 'Accessibility'."
        ],
        checklists: [
            {
                title: "🖼️ Artifact Handling & Preservation",
                department: "Curatorial/Conservation",
                frequency: "Daily",
                role: "Conservator",
                summary: "A crucial checklist to protect priceless artifacts from damage due to environmental factors or improper handling.",
                tasks: [
                    { id: 'MUS-ART-01', description: "Log temperature and humidity levels in all galleries and storage areas.", priority: 'High', riskLevel: 'High', proof: 'Environmental Log', location: 'Galleries/Storage' },
                    { id: 'MUS-ART-02', description: "Check light levels (lux) in sensitive areas (e.g., textiles, manuscripts) and ensure they are within conservation limits.", priority: 'High', riskLevel: 'High', proof: 'Light Meter Log', location: 'Sensitive Galleries' },
                    { id: 'MUS-ART-03', description: "Ensure all staff handling artifacts wear appropriate gloves and use correct procedures.", priority: 'High', riskLevel: 'High', proof: 'Observation/Training Record', location: 'Backstage' },
                    { id: 'MUS-ART-04', description: "Inspect display cases for seal integrity and any signs of pests.", priority: 'High', riskLevel: 'High', proof: 'Case Inspection Log', location: 'Galleries' },
                    { id: 'MUS-ART-05', description: "Rotate light-sensitive artifacts off display according to a pre-set schedule.", priority: 'High', riskLevel: 'Medium', proof: 'Rotation Schedule', location: 'Curatorial Office' }
                ]
            },
            {
                title: "🔒 Security & Asset Protection",
                department: "Security",
                frequency: "Daily",
                role: "Security Supervisor",
                summary: "A multi-layered security checklist to prevent theft, vandalism, and unauthorized access.",
                tasks: [
                    { id: 'MUS-SEC-01', description: "Test all motion detectors, door contacts, and glass-break sensors before opening.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Control Room' },
                    { id: 'MUS-SEC-02', description: "Verify all CCTV cameras are functional, recording, and covering critical areas.", priority: 'High', riskLevel: 'High', proof: 'CCTV Log', location: 'Control Room' },
                    { id: 'MUS-SEC-03', description: "Conduct regular patrols, paying special attention to high-value exhibit areas.", priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Galleries' },
                    { id: 'MUS-SEC-04', description: "Enforce a strict key control policy for restricted areas and storage rooms.", priority: 'High', riskLevel: 'High', proof: 'Key Issue Register', location: 'Security Office' },
                    { id: 'MUS-SEC-05', description: "Check that all high-value items are physically secured or have asset tags that are reporting correctly.", priority: 'High', riskLevel: 'High', proof: 'Asset Tag System Check', location: 'Galleries' }
                ]
            },
            {
                title: "🚶 Visitor Management & Experience",
                department: "Front of House",
                frequency: "Daily",
                role: "Visitor Services Manager",
                summary: "Ensures a smooth, enjoyable, and safe experience for all visitors, from ticketing to guided tours.",
                tasks: [
                    { id: 'MUS-VIS-01', description: "Ensure ticketing and entry points are adequately staffed to manage queues.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Roster', location: 'Entrance' },
                    { id: 'MUS-VIS-02', description: "Check that all audio guides or interactive displays are charged and functional.", priority: 'High', riskLevel: 'Low', proof: 'Equipment Check Log', location: 'Front Desk' },
                    { id: 'MUS-VIS-03', description: "Brief all guides and docents on the day's schedule and any special exhibitions.", priority: 'High', riskLevel: 'Low', proof: 'Briefing Log', location: 'Staff Area' },
                    { id: 'MUS-VIS-04', description: "Monitor galleries for overcrowding and manage visitor flow as needed.", priority: 'High', riskLevel: 'Medium', proof: 'Supervisor Observation', location: 'Galleries' },
                    { id: 'MUS-VIS-05', description: "Gather visitor feedback through surveys or comment cards.", priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Forms', location: 'Exit' }
                ]
            },
            {
                title: "🔥 Fire Safety in Heritage Buildings",
                department: "Safety/Facilities",
                frequency: "Weekly",
                role: "Facility Manager",
                summary: "A specialized checklist addressing the unique fire safety challenges of older, often irreplaceable buildings.",
                tasks: [
                    { id: 'MUS-FIRE-01', description: "Inspect fire suppression systems (e.g., gas-based systems for sensitive areas) to ensure they are armed and functional.", priority: 'High', riskLevel: 'High', proof: 'System Status Log', location: 'Control Room' },
                    { id: 'MUS-FIRE-02', description: "Check that all fire doors are unobstructed and closing properly.", priority: 'High', riskLevel: 'High', proof: 'Fire Door Inspection', location: 'All Areas' },
                    { id: 'MUS-FIRE-03', description: "Review the 'hot work' permit system for any maintenance involving heat or sparks.", priority: 'High', riskLevel: 'High', proof: 'Hot Work Permit Log', location: 'Office' },
                    { id: 'MUS-FIRE-04', description: "Ensure staff are trained on the specific evacuation procedures for a heritage building, which may be complex.", priority: 'High', riskLevel: 'High', proof: 'Training Record', location: 'HR' },
                    { id: 'MUS-FIRE-05', description: "Verify that electrical wiring and systems are regularly inspected to prevent electrical fires, a common risk in old buildings.", priority: 'High', riskLevel: 'High', proof: 'Electrical Inspection Report', location: 'Facilities Office' }
                ]
            },
            {
                title: "♿ Accessibility & Inclusion Audit",
                department: "Visitor Services/Compliance",
                frequency: "Quarterly",
                role: "Accessibility Officer",
                summary: "Ensures the institution is welcoming and accessible to all visitors, regardless of ability.",
                tasks: [
                    { id: 'MUS-ACC-01', description: "Audit all pathways, ramps, and elevators for accessibility and clear signage.", priority: 'High', riskLevel: 'Medium', proof: 'Accessibility Audit Form', location: 'Public Areas' },
                    { id: 'MUS-ACC-02', description: "Ensure accessible restrooms are unlocked, clean, and functional.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Log', location: 'Restrooms' },
                    { id: 'MUS-ACC-03', description: "Check the availability and functionality of accessibility aids like wheelchairs, audio guides with descriptions, and large-print text.", priority: 'High', riskLevel: 'Medium', proof: 'Aids Inventory', location: 'Front Desk' },
                    { id: 'MUS-ACC-04', description: "Review staff training on assisting visitors with different needs.", priority: 'High', riskLevel: 'Low', proof: 'Training Feedback', location: 'HR' },
                    { id: 'MUS-ACC-05', description: "Ensure the website and digital content are compliant with WCAG accessibility standards.", priority: 'Medium', riskLevel: 'Low', proof: 'Web Accessibility Scan', location: 'Online' }
                ]
            },
            {
                title: "📚 Collection & Archive Management",
                department: "Curatorial",
                frequency: "Monthly",
                role: "Archivist",
                summary: "A checklist for the systematic cataloging, storage, and preservation of collection items not currently on display.",
                tasks: [
                    { id: 'MUS-ARCH-01', description: "Verify that all new acquisitions are cataloged in the collections management system.", priority: 'High', riskLevel: 'Medium', proof: 'CMS Log', location: 'Archive' },
                    { id: 'MUS-ARCH-02', description: "Conduct a spot-check of items in storage against their cataloged location.", priority: 'High', riskLevel: 'High', proof: 'Spot-Check Report', location: 'Storage' },
                    { id: 'MUS-ARCH-03', description: "Monitor environmental controls in the archive (temperature, humidity).", priority: 'High', riskLevel: 'High', proof: 'Environmental Log', location: 'Archive' },
                    { id: 'MUS-ARCH-04', description: "Review the integrated pest management program for the storage areas.", priority: 'High', riskLevel: 'High', proof: 'Pest Control Log', location: 'Archive' },
                    { id: 'MUS-ARCH-05', description: "Ensure the disaster preparedness plan for the collection is up-to-date.", priority: 'High', riskLevel: 'High', proof: 'Disaster Plan Document', location: 'Office' }
                ]
            },
            {
                title: "📅 Exhibition & Event Setup",
                department: "Exhibitions",
                frequency: "Per Event",
                role: "Exhibitions Manager",
                summary: "A comprehensive checklist to manage the complex process of setting up a new exhibition or event.",
                tasks: [
                    { id: 'MUS-EXH-01', description: "Finalize the exhibition layout and object list.", priority: 'High', riskLevel: 'Medium', proof: 'Layout Plan', location: 'Office' },
                    { id: 'MUS-EXH-02', description: "Coordinate with conservation for the safe movement and installation of artifacts.", priority: 'High', riskLevel: 'High', proof: 'Object Movement Plan', location: 'Office' },
                    { id: 'MUS-EXH-03', description: "Install all lighting, signage, and interpretive text.", priority: 'High', riskLevel: 'Medium', proof: 'Installation Check', location: 'Gallery' },
                    { id: 'MUS-EXH-04', description: "Brief security and visitor services staff on the new exhibition's specifics.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Staff Area' },
                    { id: 'MUS-EXH-05', description: "Conduct a final walkthrough to ensure a flawless visitor experience before opening.", priority: 'High', riskLevel: 'High', proof: 'Final Walkthrough Sign-off', location: 'Gallery' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Conservation",
                frequency: "Monthly",
                role: "Facility Manager",
                summary: "A highly specialized pest control plan focused on preventing damage to irreplaceable artifacts.",
                tasks: [
                    { id: 'PEST-MUS-01', description: "Conduct thorough inspections of all galleries, storage rooms, and receiving areas for signs of pest activity (insects, rodents).", priority: 'High', riskLevel: 'High', proof: 'Pest Inspection Log', location: 'All Areas' },
                    { id: 'PEST-MUS-02', description: "Implement a strict 'no food or drink' policy in all non-designated areas.", priority: 'High', riskLevel: 'High', proof: 'Policy Signage & Enforcement', location: 'All Areas' },
                    { id: 'PEST-MUS-03', description: "Check and maintain pest traps and monitoring stations, logging all findings.", priority: 'High', riskLevel: 'High', proof: 'Trap Monitoring Log', location: 'All Areas' },
                    { id: 'PEST-MUS-04', description: "Quarantine and inspect all incoming objects (acquisitions, loans) for pests before they enter the main collection areas.", priority: 'High', riskLevel: 'High', proof: 'Quarantine Log', location: 'Receiving Area' },
                    { id: 'PEST-MUS-05', description: "Review the Integrated Pest Management (IPM) plan with the conservation and facilities teams quarterly.", priority: 'High', riskLevel: 'Medium', proof: 'IPM Review Minutes', location: 'Office' }
                ]
            }
        ]
    }
]

