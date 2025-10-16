
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket, Wifi, UserCheck, BarChart3, Link, BrainCircuit, Bot, Syringe, DatabaseZap, Megaphone, Siren, Lock, KeyRound, Users, Banknote, Webcam, Bug, UserCog, PackageCheck, Ambulance, FileWarning, Milestone, DoorClosed, CircleDollarSign, Wind, Thermometer, UserCog2, Key, Router, Pallet, Watch, Drama, Barcode, Stethoscope, SyringeIcon, HeartPulse, Microscope, Bus, BookOpen, Car, Drill, Spray, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, Mask, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask, Store, Pill, Ship, Sun, Film, AnchorIcon, Clapperboard, MonitorPlay, Tv, Library, Brain, BriefcaseBusiness, ShieldCheck } from "lucide-react";

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
    category: "Hospitality" | "Corporate & Tech" | "Retail" | "Healthcare" | "Education" | "Industrial & Transport" | "Entertainment & Events" | "Social Cause" | "Real Estate" | "Compliance" | "Wellness & Beauty" | "Agriculture" | "Specialized Production";
    description: string;
    icon: React.ReactElement;
    badgeText?: string;
    badgeVariant?: "default" | "secondary" | "destructive" | "outline" | "accent";
    sampleItems: { text: string; icon: React.ReactElement; }[];
    whoIsItFor: string[];
    previewScenario?: PreviewScenario;
    checklists: Checklist[];
    globalStandards?: {
        title: string;
        standards: { name: string; description: string; }[];
    };
    bestseller?: boolean;
}


export const premiumPacks: PremiumPack[] = [
    // --- Hospitality ---
    {
        id: 'hotels_and_resorts',
        title: "Hotels & Resorts",
        priceUSD: 99.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Hospitality",
        description: "The complete operational toolkit for General Managers and Department Heads to achieve 5-star excellence in every guest experience.",
        icon: <Building className="w-8 h-8 text-primary" />,
        badgeText: "Most Popular",
        badgeVariant: "default" as const,
        bestseller: true,
        whoIsItFor: ["Hotel Owners", "General Managers", "COOs", "VPs of Operations", "Directors", "Heads of Departments", "GMs", "VPs", "and their teams"],
        sampleItems: [
            { text: "Master hotel finance with 'Annual Budgeting' and 'P&L Review' checklists.", icon: <BarChart3 /> },
            { text: "Implement a 'Managerial Performance Review' and 'New Hire Onboarding' system.", icon: <UserCheck /> },
            { text: "Includes a 'Brand Standards Audit' and 'Hotel Pre-Opening' checklist.", icon: <FileCheck /> },
            { text: "Manage your brand's online presence with an 'Online Review & Reputation Management' checklist.", icon: <Megaphone /> }
        ],
        previewScenario: {
            title: "Responding to a Guest Medical Emergency",
            description: "A guest reports a medical emergency in their room. This scenario shows how checklists for Front Office, Security, and Management work together to ensure a swift, professional, and safe response.",
            tasks: [
                { id: 'FO-DO-010', description: "Immediately dispatch a security officer and a Duty Manager to the guest's room.", sourceChecklist: "Reception Daily Operations", priority: 'High' },
                { id: 'SEC-CSM-001', description: "Alert local emergency medical services with the exact room number and patient condition.", sourceChecklist: "CCTV & Security Monitoring", priority: 'High' },
                { id: 'BRAND-01', description: "Have a staff member meet paramedics at the entrance and escort them directly to the room.", sourceChecklist: "Brand Standards & Guest Experience", priority: 'High' },
                { id: 'HR-PERF-008', description: "Log the entire incident with times and actions taken for legal and insurance purposes.", sourceChecklist: "Managerial Performance Review", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global Hospitality Standards",
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
                summary: "Launch your new property flawlessly. This master plan covers everything from construction handover and licensing to staff recruitment and launch marketing, ensuring a successful opening day.",
                tasks: [
                    { id: 'PRE-OPEN-01', description: "Secure all necessary operational licenses and permits (food, liquor, building, fire).", priority: 'High', riskLevel: 'High', proof: 'License Certificates', location: 'Admin Office' },
                    { id: 'PRE-OPEN-02', description: "Finalize and sign contracts with all key vendors (linen, F&B supplies, security, pest control).", priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'Admin Office' },
                    { id: 'PRE-OPEN-03', description: "Recruit and train all Heads of Department and key staff.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'PRE-OPEN-04', description: "Conduct a full 'snagging' walkthrough of the property to identify and fix construction defects.", priority: 'High', riskLevel: 'High', proof: 'Snag List', location: 'Entire Property' },
                    { id: 'PRE-OPEN-05', description: "Implement and test all software systems (PMS, POS, Keycard System, Wi-Fi).", priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'IT/Admin' },
                    { id: 'PRE-OPEN-06', description: "Stock all departments with initial inventory (linens, amenities, F&B ingredients).", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Records', location: 'All Departments' },
                    { id: 'PRE-OPEN-07', description: "Develop and test the hotel's emergency response plan.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Management' },
                    { id: 'PRE-OPEN-08', description: "Set up and test all guest services (room service, concierge, transport).", priority: 'High', riskLevel: 'Medium', proof: 'Service Test Log', location: 'Operations' },
                    { id: 'PRE-OPEN-09', description: "Launch initial marketing and PR campaigns for the opening.", priority: 'High', riskLevel: 'Medium', proof: 'Marketing Plan', location: 'Marketing' },
                    { id: 'PRE-OPEN-10', description: "Conduct a 'soft opening' with a limited number of guests to test all systems and services.", priority: 'High', riskLevel: 'High', proof: 'Soft Opening Report', location: 'Entire Hotel' }
                ]
            },
            {
                title: "📊 Annual Budgeting & Forecasting",
                department: "Finance",
                frequency: "Annually/Quarterly",
                role: "Financial Controller",
                summary: "Drive profitability with a strategic framework for preparing the hotel's annual budget, focusing on accurate revenue forecasting, departmental cost control, and smart CAPEX planning.",
                tasks: [
                    { id: 'FIN-BUD-01', description: "Analyze previous year's performance and market trends to establish revenue targets.", priority: 'High', riskLevel: 'High', proof: 'Analysis Report', location: 'Finance Office' },
                    { id: 'FIN-BUD-02', description: "Collect and review budget proposals from all department heads.", priority: 'High', riskLevel: 'Medium', proof: 'Departmental Budgets', location: 'Finance Office' },
                    { id: 'FIN-BUD-03', description: "Prepare a consolidated master budget (P&L, Balance Sheet, Cash Flow).", priority: 'High', riskLevel: 'High', proof: 'Master Budget File', location: 'Finance Office' },
                    { id: 'FIN-BUD-04', description: "Present the final budget to ownership or the board for approval.", priority: 'High', riskLevel: 'High', proof: 'Presentation Deck', location: 'Board Room' },
                    { id: 'FIN-BUD-05', description: "Develop departmental KPIs based on the approved budget.", priority: 'High', riskLevel: 'Medium', proof: 'KPI Document', location: 'Finance Office' },
                    { id: 'FIN-BUD-06', description: "Plan for Capital Expenditure (CAPEX) for the upcoming year.", priority: 'High', riskLevel: 'Medium', proof: 'CAPEX Plan', location: 'Finance Office' },
                    { id: 'FIN-BUD-07', description: "Establish a monthly budget review process.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Schedule', location: 'Finance Office' },
                    { id: 'FIN-BUD-08', description: "Set clear targets for cost-saving initiatives.", priority: 'High', riskLevel: 'Medium', proof: 'Cost-Saving Plan', location: 'Finance Office' },
                    { id: 'FIN-BUD-09', description: "Incorporate contingency planning for unexpected events.", priority: 'Medium', riskLevel: 'Medium', proof: 'Contingency Plan', location: 'Finance Office' },
                    { id: 'FIN-BUD-10', description: "Communicate the final approved budget to all department heads.", priority: 'High', riskLevel: 'Low', proof: 'Communication Log', location: 'Finance Office' }
                ]
            },
            {
                title: "📈 Monthly P&L Review & Cost Control",
                department: "Management",
                frequency: "Monthly",
                role: "General Manager",
                summary: "Turn financial data into action. This structured meeting agenda helps you review performance against budget, analyze variances, and implement effective cost-saving measures with your HODs.",
                tasks: [
                    { id: 'FIN-PNL-01', description: "Distribute departmental P&L statements to all HODs 3 days before the meeting.", priority: 'High', riskLevel: 'Medium', proof: 'Email Log', location: 'Finance Office' },
                    { id: 'FIN-PNL-02', description: "In the meeting, each HOD must explain significant variances in their department's revenue and costs.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Conference Room' },
                    { id: 'FIN-PNL-03', description: "Identify and agree upon specific action items for cost control for the upcoming month.", priority: 'High', riskLevel: 'High', proof: 'Action Plan', location: 'Conference Room' },
                    { id: 'FIN-PNL-04', description: "Update the rolling forecast based on the month's performance and future bookings.", priority: 'High', riskLevel: 'Medium', proof: 'Updated Forecast', location: 'Finance Office' },
                    { id: 'FIN-PNL-05', description: "Follow up on action items from the previous month's meeting.", priority: 'Medium', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Conference Room' },
                    { id: 'FIN-PNL-06', description: "Analyze labor costs and staffing levels against occupancy.", priority: 'High', riskLevel: 'Medium', proof: 'Labor Cost Report', location: 'Conference Room' },
                    { id: 'FIN-PNL-07', description: "Review utility consumption and costs.", priority: 'Medium', riskLevel: 'Low', proof: 'Utility Report', location: 'Conference Room' },
                    { id: 'FIN-PNL-08', description: "Discuss impact of any new marketing or sales initiatives on revenue.", priority: 'High', riskLevel: 'Medium', proof: 'Marketing Report', location: 'Conference Room' },
                    { id: 'FIN-PNL-09', description: "Analyze food and beverage costs and margins.", priority: 'High', riskLevel: 'High', proof: 'F&B Cost Report', location: 'Conference Room' },
                    { id: 'FIN-PNL-10', description: "Set revised financial targets for the next month based on the review.", priority: 'High', riskLevel: 'Medium', proof: 'Revised Targets Document', location: 'Conference Room' }
                ]
            },
            {
                title: "⭐ Brand Standards & Guest Experience Audit",
                department: "Quality/Management",
                frequency: "Quarterly",
                role: "Quality Manager",
                summary: "Protect your brand's reputation with a rigorous internal audit. Ensure every guest touchpoint meets the highest standards for service, cleanliness, and experience.",
                tasks: [
                    { id: 'BRAND-01', description: "Audit the check-in process against brand standards for greeting, speed, and efficiency.", priority: 'High', riskLevel: 'Medium', proof: 'Audit Scorecard', location: 'Front Desk' },
                    { id: 'BRAND-02', description: "Inspect a random selection of guest rooms for compliance with brand standards on linen quality, amenity placement, and cleanliness.", priority: 'High', riskLevel: 'High', proof: 'Room Inspection Form', location: 'Guest Rooms' },
                    { id: 'BRAND-03', description: "Review guest feedback from all channels (surveys, online reviews) and identify recurring themes related to brand standards.", priority: 'High', riskLevel: 'High', proof: 'Feedback Analysis Report', location: 'Office' },
                    { id: 'BRAND-04', description: "Create and implement a corrective action plan for any identified gaps in brand standards.", priority: 'High', riskLevel: 'High', proof: 'Action Plan', location: 'Office' },
                    { id: 'BRAND-05', description: "Conduct a mystery shopper audit to get an unbiased view of the guest experience.", priority: 'High', riskLevel: 'Medium', proof: 'Mystery Shopper Report', location: 'Various' },
                    { id: 'BRAND-06', description: "Audit F&B outlets for service standards, presentation, and quality.", priority: 'High', riskLevel: 'High', proof: 'F&B Audit Form', location: 'Restaurants/Bars' },
                    { id: 'BRAND-07', description: "Check public areas (lobby, pools, gym) for cleanliness and ambiance.", priority: 'High', riskLevel: 'Medium', proof: 'Public Area Inspection Form', location: 'Public Areas' },
                    { id: 'BRAND-08', description: "Review staff grooming and uniform standards.", priority: 'High', riskLevel: 'Medium', proof: 'Grooming Audit', location: 'Various' },
                    { id: 'BRAND-09', description: "Ensure brand-specific scents, music, and lighting are correctly implemented.", priority: 'Medium', riskLevel: 'Low', proof: 'Ambiance Check', location: 'Public Areas' },
                    { id: 'BRAND-10', description: "Track resolution of issues identified in previous audits.", priority: 'High', riskLevel: 'High', proof: 'Follow-up Report', location: 'Office' }
                ]
            },
            {
                title: "🧑‍🏫 New Hire Onboarding & Training Plan",
                department: "HR",
                frequency: "Per New Hire",
                role: "HR Manager",
                summary: "Integrate new employees effectively. This 30-day plan ensures new hires are properly onboarded, trained, and aligned with your hotel's culture and operational standards from day one.",
                tasks: [
                    { id: 'HR-ONBOARD-01', description: "Day 1: Conduct company orientation, issue handbook, and complete all legal paperwork.", priority: 'High', riskLevel: 'Medium', proof: 'Onboarding Checklist', location: 'HR Office' },
                    { id: 'HR-ONBOARD-02', description: "Week 1: Assign a 'buddy' or mentor and complete departmental orientation and initial job-specific training.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Department' },
                    { id: 'HR-ONBOARD-03', description: "Week 2: Schedule brief introductory meetings with key department heads.", priority: 'Medium', riskLevel: 'Low', proof: 'Meeting Schedule', location: 'Various' },
                    { id: 'HR-ONBOARD-04', description: "Day 30: Conduct a 30-day check-in meeting to discuss progress, answer questions, and get feedback.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'HR Office' },
                    { id: 'HR-ONBOARD-05', description: "Ensure all system access and necessary equipment (e.g., uniform, keycard) are provided on day one.", priority: 'High', riskLevel: 'Medium', proof: 'Asset Issuance Form', location: 'HR/IT' },
                    { id: 'HR-ONBOARD-06', description: "Provide training on health, safety, and emergency procedures.", priority: 'High', riskLevel: 'High', proof: 'Safety Training Log', location: 'HR Office' },
                    { id: 'HR-ONBOARD-07', description: "Explain the performance review process and timeline.", priority: 'Medium', riskLevel: 'Low', proof: 'Onboarding Checklist', location: 'HR Office' },
                    { id: 'HR-ONBOARD-08', description: "Introduce the new hire to the company's mission, vision, and values.", priority: 'High', riskLevel: 'Low', proof: 'Orientation Slides', location: 'HR Office' },
                    { id: 'HR-ONBOARD-09', description: "Set initial performance goals for the first 90 days.", priority: 'High', riskLevel: 'Medium', proof: 'Goal Setting Form', location: 'Department' },
                    { id: 'HR-ONBOARD-10', description: "Collect feedback from the new hire about the onboarding process.", priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Form', location: 'HR Office' }
                ]
            },
            {
                title: "👔 Managerial Performance Review",
                department: "HR/Management",
                frequency: "Quarterly/Annually",
                role: "General Manager",
                summary: "Develop stronger leaders with a framework for fair and effective performance reviews, focusing on measurable KPIs, leadership skills, and clear goal setting.",
                tasks: [
                    { id: 'HR-PERF-001', description: "Review the manager's performance against their pre-set KPIs (e.g., departmental profit, guest satisfaction scores, employee turnover).", priority: 'High', riskLevel: 'Medium', proof: 'KPI Dashboard', location: 'Office' },
                    { id: 'HR-PERF-002', description: "Gather 360-degree feedback from the manager's direct reports and peers.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Summary', location: 'Office' },
                    { id: 'HR-PERF-003', description: "Discuss strengths, areas for development, and set clear, measurable goals for the next review period.", priority: 'High', riskLevel: 'Medium', proof: 'Review Form', location: 'Office' },
                    { id: 'HR-PERF-004', description: "Identify and agree upon any necessary training or professional development plans.", priority: 'Medium', riskLevel: 'Low', proof: 'Development Plan', location: 'Office' },
                    { id: 'HR-PERF-005', description: "Document the entire review conversation and have both parties sign the review form.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Review Form', location: 'Office' },
                    { id: 'HR-PERF-006', description: "Review the manager's leadership and team management skills.", priority: 'High', riskLevel: 'Medium', proof: '360-Feedback Report', location: 'Office' },
                    { id: 'HR-PERF-007', description: "Discuss manager's contribution to overall hotel goals.", priority: 'High', riskLevel: 'Medium', proof: 'Goal Alignment Discussion', location: 'Office' },
                    { id: 'HR-PERF-008', description: "Review the manager's handling of any major incidents or challenges.", priority: 'High', riskLevel: 'Medium', proof: 'Incident Reports', location: 'Office' },
                    { id: 'HR-PERF-009', description: "Assess the manager's financial acumen and budget management.", priority: 'High', riskLevel: 'High', proof: 'P&L Reports', location: 'Office' },
                    { id: 'HR-PERF-010', description: "Create a career development path for the manager.", priority: 'Medium', riskLevel: 'Low', proof: 'Career Path Document', location: 'Office' }
                ]
            },
            {
                title: "🗣️ Online Review & Reputation Management",
                department: "Marketing/Guest Relations",
                frequency: "Daily",
                role: "Marketing Manager",
                summary: "Take control of your online brand. This daily protocol helps you monitor, manage, and respond to reviews across all platforms, protecting your reputation and driving bookings.",
                tasks: [
                    { id: 'ORM-001', description: "Monitor all major review platforms (TripAdvisor, Google Reviews, OTAs) for new reviews.", priority: 'High', riskLevel: 'Medium', proof: 'Monitoring Tool Screenshot', location: 'Office' },
                    { id: 'ORM-002', description: "Respond to all negative reviews within 24 hours with empathy and a clear action plan.", priority: 'High', riskLevel: 'High', proof: 'Response Log', location: 'Office' },
                    { id: 'ORM-003', description: "Respond to a selection of positive reviews to show engagement.", priority: 'Medium', riskLevel: 'Low', proof: 'Response Log', location: 'Office' },
                    { id: 'ORM-004', description: "Escalate recurring negative themes to the relevant department head for root cause analysis.", priority: 'High', riskLevel: 'High', proof: 'Escalation Email', location: 'Office' },
                    { id: 'ORM-005', description: "Share positive guest feedback and 'shout-outs' with the team to boost morale.", priority: 'Medium', riskLevel: 'Low', proof: 'Internal Communication', location: 'Office' },
                    { id: 'ORM-006', description: "Analyze sentiment trends in reviews to identify areas for improvement.", priority: 'High', riskLevel: 'Medium', proof: 'Sentiment Analysis Report', location: 'Office' },
                    { id: 'ORM-007', description: "Encourage satisfied guests to leave reviews.", priority: 'Medium', riskLevel: 'Low', proof: 'Guest Communication Template', location: 'Office' },
                    { id: 'ORM-008', description: "Track your hotel's ranking on key review sites.", priority: 'Medium', riskLevel: 'Medium', proof: 'Ranking Report', location: 'Office' },
                    { id: 'ORM-009', description: "Report any fraudulent or fake reviews.", priority: 'High', riskLevel: 'High', proof: 'Report Log', location: 'Office' },
                    { id: 'ORM-010', description: "Prepare a monthly summary of reputation management activities and results.", priority: 'High', riskLevel: 'Medium', proof: 'Monthly Report', location: 'Office' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Housekeeping/Maintenance",
                frequency: "Weekly",
                role: "Housekeeping Manager",
                summary: "Protect your guests and your reputation with a proactive checklist for preventing and managing pest infestations, crucial for health standards and guest satisfaction.",
                tasks: [
                    { id: 'PEST-001', description: "Inspect F&B outlets, kitchens, and garbage areas for signs of pest activity (droppings, gnaw marks).", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Back of House' },
                    { id: 'PEST-002', description: "Check that all external doors and windows have proper seals to prevent pest entry.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Perimeter' },
                    { id: 'PEST-003', description: "Review the pest control vendor's service reports and ensure all recommendations are actioned.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Review', location: 'Admin Office' },
                    { id: 'PEST-004', description: "Ensure drains and grease traps are cleaned regularly to eliminate breeding grounds.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Schedule Log', location: 'Kitchen' },
                    { id: 'PEST-005', description: "Train staff on how to identify and report pest sightings immediately.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Record', location: 'All Departments' },
                    { id: 'PEST-006', description: "Inspect guest rooms for any signs of bed bugs or other pests.", priority: 'High', riskLevel: 'High', proof: 'Room Inspection Log', location: 'Guest Rooms' },
                    { id: 'PEST-007', description: "Ensure proper food storage practices are followed in all F&B areas.", priority: 'High', riskLevel: 'High', proof: 'Food Storage Audit', location: 'Kitchen/Stores' },
                    { id: 'PEST-008', description: "Check that exterior lighting does not attract insects towards entrances.", priority: 'Medium', riskLevel: 'Low', proof: 'Exterior Light Inspection', location: 'Exterior' },
                    { id: 'PEST-009', description: "Manage landscaping to remove potential pest habitats near the building.", priority: 'Medium', riskLevel: 'Low', proof: 'Landscaping Report', location: 'Grounds' },
                    { id: 'PEST-010', description: "Maintain a log of all pest sightings and actions taken.", priority: 'High', riskLevel: 'Medium', proof: 'Pest Logbook', location: 'Admin Office' }
                ]
            },
        ]
    },
    {
        id: 'restaurants',
        title: "Restaurants",
        priceUSD: 89.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Hospitality",
        description: "An essential HACCP-based toolkit for restaurant owners focused on food safety, quality, and operational efficiency.",
        icon: <Utensils className="w-8 h-8 text-primary" />,
        badgeText: "Essential for F&B",
        badgeVariant: "accent" as const,
        whoIsItFor: ["Restaurant Owners", "Head Chefs", "Kitchen Managers", "F&B Directors", "VPs", "GMs", "Directors"],
        sampleItems: [
            { text: "Master food safety with a HACCP-based 'Kitchen Opening' checklist.", icon: <ShieldCheck /> },
            { text: "Implement a zero-error 'Food Receiving & Storage' protocol.", icon: <PackageCheck /> },
            { text: "Includes a 'New Site Feasibility Study' for expansion planning.", icon: <Milestone /> },
            { text: "Boost sales with a 'Weekly Sales & Revenue Meeting Agenda'.", icon: <CircleDollarSign /> }
        ],
        previewScenario: {
            title: "Handling a Food Allergy Alert",
            description: "This scenario shows how multiple checklists create a safety net to handle a guest's severe food allergy, preventing a life-threatening incident and protecting your restaurant's reputation.",
            tasks: [
                { id: 'FOH-O-010', description: "Server takes the order and flags the allergy prominently in the POS system.", sourceChecklist: "Front of House Opening Checklist", priority: 'High' },
                { id: 'CK-KO-010', description: "The POS alert prompts the Head Chef to review the ticket and personally supervise the dish's preparation.", sourceChecklist: "Kitchen Opening Checklist", priority: 'High' },
                { id: 'CK-HLC-005', description: "Chef uses designated sanitized utensils and a separate prep area to avoid cross-contamination.", sourceChecklist: "Daily HACCP & Line Check", priority: 'High' },
                { id: 'REST-MEETING-05', description: "The Manager confirms with the chef and server that the allergy protocol was followed before the dish leaves the kitchen.", sourceChecklist: "Weekly Sales & Revenue Meeting", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global Food & Safety Standards",
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
                summary: "De-risk expansion with a structured framework for selecting a new location, ensuring it aligns with your brand, operational needs, and financial goals.",
                tasks: [
                    { id: 'FEAS-001', description: "Conduct a demographic analysis of the target area (e.g., population density, average income).", priority: 'High', riskLevel: 'High', proof: 'Demographic Report', location: 'Office' },
                    { id: 'FEAS-002', description: "Perform a competitive analysis: map all direct and indirect competitors within a 3km radius.", priority: 'High', riskLevel: 'High', proof: 'Competitor Map', location: 'Office' },
                    { id: 'FEAS-003', description: "Analyze foot traffic and visibility of the potential site at different times of day.", priority: 'High', riskLevel: 'High', proof: 'Foot Traffic Report', location: 'Site' },
                    { id: 'FEAS-004', description: "Create a preliminary financial projection (P&L) for the new site, including estimated rent, build-out costs, and revenue forecasts.", priority: 'High', riskLevel: 'High', proof: 'Financial Model', location: 'Office' },
                    { id: 'FEAS-005', description: "Verify zoning regulations and necessary permits for the proposed business type at the location.", priority: 'High', riskLevel: 'High', proof: 'Zoning Report', location: 'Office' },
                    { id: 'FEAS-006', description: "Assess parking availability and accessibility.", priority: 'High', riskLevel: 'Medium', proof: 'Parking Assessment', location: 'Site' },
                    { id: 'FEAS-007', description: "Evaluate local labor market and availability of staff.", priority: 'Medium', riskLevel: 'Medium', proof: 'Labor Market Analysis', location: 'Office' },
                    { id: 'FEAS-008', description: "Check for any local events or attractions that could drive traffic.", priority: 'Medium', riskLevel: 'Low', proof: 'Event Calendar', location: 'Office' },
                    { id: 'FEAS-009', description: "Review utility infrastructure and capacity (gas, electric, water).", priority: 'High', riskLevel: 'High', proof: 'Utility Report', location: 'Site' },
                    { id: 'FEAS-010', description: "Finalize a go/no-go decision based on the feasibility score.", priority: 'High', riskLevel: 'High', proof: 'Decision Document', location: 'Office' }
                ]
            },
            {
                title: "📅 Weekly Sales & Revenue Meeting Agenda",
                department: "Management",
                frequency: "Weekly",
                role: "Restaurant Manager",
                summary: "Run effective weekly sales meetings that go beyond numbers. Analyze data, recognize top performers, and create actionable plans to boost revenue.",
                tasks: [
                    { id: 'REST-MEETING-01', description: "Review previous week's sales performance against target (by day, by meal period).", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'REST-MEETING-02', description: "Recognize top-performing staff for sales, upselling, or positive customer mentions.", priority: 'Medium', riskLevel: 'Low', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'REST-MEETING-03', description: "Discuss top-selling and slow-moving menu items; plan for specials or 86-ing items.", priority: 'High', riskLevel: 'Medium', proof: 'POS Data Report', location: 'Meeting Room' },
                    { id: 'REST-MEETING-04', description: "Set sales focus and promotional strategy for the upcoming week (e.g., push a specific high-margin cocktail).", priority: 'High', riskLevel: 'Medium', proof: 'Action Plan', location: 'Meeting Room' },
                    { id: 'REST-MEETING-05', description: "Review customer feedback and online reviews from the past week.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Summary', location: 'Meeting Room' },
                    { id: 'REST-MEETING-06', description: "Analyze table turnover rates and identify opportunities for improvement.", priority: 'Medium', riskLevel: 'Medium', proof: 'POS Report', location: 'Meeting Room' },
                    { id: 'REST-MEETING-07', description: "Discuss upcoming events, holidays, or local activities that could impact sales.", priority: 'High', riskLevel: 'Low', proof: 'Event Calendar', location: 'Meeting Room' },
                    { id: 'REST-MEETING-08', description: "Review labor costs vs. sales for the previous week.", priority: 'High', riskLevel: 'Medium', proof: 'Labor Report', location: 'Meeting Room' },
                    { id: 'REST-MEETING-09', description: "Share any marketing updates or upcoming campaigns.", priority: 'Medium', riskLevel: 'Low', proof: 'Marketing Update', location: 'Meeting Room' },
                    { id: 'REST-MEETING-10', description: "Assign and document action items for the week.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Meeting Room' }
                ]
            },
            {
                title: "🍳 Kitchen Opening Checklist (HACCP Focus)",
                department: "F&B",
                frequency: "Daily",
                role: "Head Chef",
                summary: "Prevent food safety violations and ensure a perfect start every day with this HACCP-aligned checklist for temperature, sanitation, and equipment readiness.",
                tasks: [
                    { id: 'CK-KO-001', description: "Verify all surfaces (prep tables, cutting boards) are sanitized.", priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Kitchen' },
                    { id: 'CK-KO-002', description: "Check temperatures of all refrigerators and freezers; log readings.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Kitchen' },
                    { id: 'CK-KO-003', description: "Ensure handwashing stations are stocked with soap, paper towels, and hot water.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-KO-004', description: "Calibrate food thermometers using ice-water method.", priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Kitchen' },
                    { id: 'CK-KO-005', description: "Review prep list and conduct a quick check of yesterday's stored prep items for quality and date labels.", priority: 'Medium', riskLevel: 'Medium', proof: 'Prep List Sign-off', location: 'Walk-in' },
                    { id: 'CK-KO-006', description: "Ensure all cooking equipment is clean and turned on.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-KO-007', description: "Check that ventilation hoods are clean and functional.", priority: 'High', riskLevel: 'High', proof: 'Ventilation Check Log', location: 'Kitchen' },
                    { id: 'CK-KO-008', description: "Verify waste bins are empty and have clean liners.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-KO-009', description: "Ensure First Aid kit is stocked and accessible.", priority: 'High', riskLevel: 'High', proof: 'First Aid Kit Log', location: 'Kitchen' },
                    { id: 'CK-KO-010', description: "Hold a brief pre-shift huddle with the kitchen team.", priority: 'High', riskLevel: 'Low', proof: 'Huddle Notes', location: 'Kitchen' }
                ]
            },
            {
                title: "📦 Food Receiving & Storage Protocol",
                department: "F&B",
                frequency: "Daily",
                role: "Store Keeper",
                summary: "Secure the first critical control point in food safety. This checklist guarantees quality by managing temperature checks, quality inspection, and FIFO storage for all incoming goods.",
                tasks: [
                    { id: 'CK-FRS-001', description: "Check temperature of refrigerated/frozen delivery truck upon arrival.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Area' },
                    { id: 'CK-FRS-002', description: "Inspect all incoming products for signs of spoilage, damage, or pest infestation.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Area' },
                    { id: 'CK-FRS-003', description: "Verify that deliveries match the purchase order and invoice.", priority: 'High', riskLevel: 'Medium', proof: 'Invoice Sign-off', location: 'Receiving Area' },
                    { id: 'CK-FRS-004', description: "Check 'use-by' or expiry dates of all items and reject any that are expired.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Area' },
                    { id: 'CK-FRS-005', description: "Move all cold/frozen items to their respective storage areas immediately.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Storage' },
                    { id: 'CK-FRS-006', description: "Ensure all received items are stored off the floor.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Storage' },
                    { id: 'CK-FRS-007', description: "Implement FIFO (First-In, First-Out) by placing new stock behind old stock.", priority: 'High', riskLevel: 'Medium', proof: 'Storage Audit', location: 'Storage' },
                    { id: 'CK-FRS-008', description: "Label all decanted items with name and date.", priority: 'High', riskLevel: 'Medium', proof: 'Label Check', location: 'Storage' },
                    { id: 'CK-FRS-009', description: "Ensure raw meats are stored below ready-to-eat foods to prevent cross-contamination.", priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Walk-in Refrigerator' },
                    { id: 'CK-FRS-010', description: "Log all receiving details accurately in the inventory system.", priority: 'High', riskLevel: 'Medium', proof: 'System Entry', location: 'Office' }
                ]
            },
            {
                title: "🌡️ Daily HACCP & Line Check",
                department: "F&B",
                frequency: "Daily",
                role: "Sous Chef",
                summary: "Maintain impeccable food safety during service. This ongoing check ensures correct holding temperatures, prevents cross-contamination, and reinforces staff hygiene on the line.",
                tasks: [
                    { id: 'CK-HLC-001', description: "Check and log temperatures of all hot and cold holding units on the line every 2 hours.", priority: 'High', riskLevel: 'High', proof: 'Line Check Log', location: 'Service Line' },
                    { id: 'CK-HLC-002', description: "Use a calibrated thermometer to check internal temperatures of food items on the line.", priority: 'High', riskLevel: 'High', proof: 'Line Check Log', location: 'Service Line' },
                    { id: 'CK-HLC-003', description: "Ensure each station is stocked with sanitized utensils and separate cutting boards for raw/cooked food.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Service Line' },
                    { id: 'CK-HLC-004', description: "Verify sanitizer bucket concentrations are correct and test strips are available.", priority: 'High', riskLevel: 'Medium', proof: 'Sanitizer Log', location: 'Service Line' },
                    { id: 'CK-HLC-005', description: "Check that all staff are following proper hygiene practices (handwashing, glove use).", priority: 'High', riskLevel: 'High', proof: 'Visual Observation', location: 'Kitchen' },
                    { id: 'CK-HLC-006', description: "Ensure all food items are properly covered when not in use.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Service Line' },
                    { id: 'CK-HLC-007', description: "Monitor for any signs of cross-contamination between raw and cooked products.", priority: 'High', riskLevel: 'High', proof: 'Visual Observation', location: 'Service Line' },
                    { id: 'CK-HLC-008', description: "Check that garnishes are stored in clean, covered containers.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Service Line' },
                    { id: 'CK-HLC-009', description: "Ensure time-sensitive foods are discarded after the specified holding period.", priority: 'High', riskLevel: 'High', proof: 'Discard Log', location: 'Service Line' },
                    { id: 'CK-HLC-010', description: "Correct any food safety violations immediately and document the corrective action.", priority: 'High', riskLevel: 'High', proof: 'Corrective Action Log', location: 'Service Line' }
                ]
            },
            {
                title: "🧽 Kitchen Closing & Cleaning Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Closing Chef",
                summary: "Ensure a safe, sanitary, and efficient start for the next day. This detailed protocol covers food storage, equipment shutdown, surface sanitization, and waste disposal.",
                tasks: [
                    { id: 'CK-KCC-001', description: "Properly cool, cover, label, and store all leftover food.", priority: 'High', riskLevel: 'High', proof: 'Storage Log', location: 'Kitchen' },
                    { id: 'CK-KCC-002', description: "Turn off all cooking equipment (fryers, ovens, grills).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-KCC-003', description: "Clean and sanitize all food prep surfaces, cutting boards, and slicers.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'CK-KCC-004', description: "Empty and clean all fryers; filter oil as required.", priority: 'Medium', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'CK-KCC-005', description: "Sweep and mop all kitchen floors, including under equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-KCC-006', description: "Run all dishes, utensils, and glassware through the dishwasher.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dishwashing Area' },
                    { id: 'CK-KCC-007', description: "Empty and sanitize all trash and recycling bins.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Waste Area' },
                    { id: 'CK-KCC-008', description: "Clean all floor drains.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Kitchen Floor' },
                    { id: 'CK-KCC-009', description: "Soak and clean ventilation hood filters.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Ventilation Hoods' },
                    { id: 'CK-KCC-010', description: "Perform a final walkthrough to ensure the kitchen is secure and ready for the morning shift.", priority: 'High', riskLevel: 'High', proof: 'Closing Checklist', location: 'Kitchen' }
                ]
            },
            {
                title: "🍽️ Front of House Opening Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Restaurant Manager",
                summary: "Create a perfect first impression. This checklist ensures your dining area is immaculate, correctly set, and has a welcoming ambiance before the first guest arrives.",
                tasks: [
                    { id: 'FOH-O-001', description: "Check cleanliness of dining room, tables, chairs, and floors.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-O-002', description: "Set tables with clean linen, polished cutlery, and glassware.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-O-003', description: "Review reservation list and plan table assignments.", priority: 'High', riskLevel: 'Medium', proof: 'Reservation System', location: 'Host Stand' },
                    { id: 'FOH-O-004', description: "Check that lighting and music levels create the desired ambiance.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-O-005', description: "Ensure restrooms are clean, stocked, and pleasant.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Log', location: 'Restrooms' },
                    { id: 'FOH-O-006', description: "Check POS systems are online and ready for service.", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Host Stand/POS' },
                    { id: 'FOH-O-007', description: "Verify menus are clean and up-to-date.", priority: 'High', riskLevel: 'Low', proof: 'Menu Inspection', location: 'Host Stand' },
                    { id: 'FOH-O-008', description: "Conduct a pre-shift briefing with FOH staff.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Notes', location: 'Staff Area' },
                    { id: 'FOH-O-009', description: "Ensure all service stations are stocked (napkins, cutlery, condiments).", priority: 'High', riskLevel: 'Medium', proof: 'Station Check', location: 'Dining Room' },
                    { id: 'FOH-O-010', description: "Confirm the day's specials and any 86'd items with the kitchen.", priority: 'High', riskLevel: 'Medium', proof: 'Kitchen Communication', location: 'FOH/Kitchen' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Manager",
                summary: "Protect your reputation and prevent health code violations with a proactive system for managing pests in a demanding F&B environment.",
                tasks: [
                    { id: 'PEST-REST-001', description: "Inspect kitchen, storage, and dining areas for signs of pest activity (droppings, gnaw marks).", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Entire Restaurant' },
                    { id: 'PEST-REST-002', description: "Ensure all food containers are sealed and stored off the floor.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Storage/Kitchen' },
                    { id: 'PEST-REST-003', description: "Check that garbage and refuse areas are clean and bins are tightly covered.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Exterior/Waste Area' },
                    { id: 'PEST-REST-004', description: "Review pest control vendor reports and ensure all recommended actions are taken.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Review', location: 'Manager Office' },
                    { id: 'PEST-REST-005', description: "Check for and seal any potential pest entry points in walls, floors, or around pipes.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Entire Restaurant' },
                    { id: 'PEST-REST-006', description: "Ensure floor drains are clean and free of debris.", priority: 'High', riskLevel: 'Medium', proof: 'Drain Cleaning Log', location: 'Kitchen' },
                    { id: 'PEST-REST-007', description: "Check for any standing water inside or outside the restaurant.", priority: 'High', riskLevel: 'Medium', proof: 'Water Source Inspection', location: 'Entire Premises' },
                    { id: 'PEST-REST-008', description: "Train staff on pest awareness and reporting procedures.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'Staff Area' },
                    { id: 'PEST-REST-009', description: "Keep doors and windows closed when not in use.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Audit', location: 'Entire Restaurant' },
                    { id: 'PEST-REST-010', description: "Maintain a pest sighting log and review it weekly.", priority: 'High', riskLevel: 'Medium', proof: 'Pest Sighting Log', location: 'Manager Office' }
                ]
            }
        ]
    },
    // --- Retail ---
    {
        id: 'jewelry_and_luxury_retail',
        title: "Jewelry & Luxury Retail",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "A comprehensive SOP and compliance checklist suite designed for fine jewellery, luxury watch, and premium retail brands.",
        icon: <Gem className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Luxury Brand VPs", "Store Owners", "Heads of Retail Operations", "Security Directors", "Compliance Officers", "COOs"],
        sampleItems: [
            { text: "Implement a 'Vault Access Control' checklist based on biometric and dual-approval protocols.", icon: <Lock /> },
            { text: "Standardize your 'High-Value Exchange & Handling' SOP to prevent internal fraud.", icon: <Banknote /> },
            { text: "Ensure 'Digital Transaction Security' with daily QR code and POS validation.", icon: <Shield /> },
            { text: "Align with 'BIS Hallmarking' and 'Anti-Money Laundering (AML)' compliance.", icon: <FileCheck /> }
        ],
        previewScenario: {
            title: "Handling a High-Value Exchange",
            description: "A customer wants to exchange a high-value diamond necklace. This scenario shows how checklists for Sales, Security, and Documentation work together to prevent fraud and ensure a smooth, secure transaction.",
            tasks: [
                { id: 'LUX-EXCH-02', description: "Require two staff members to be present during the entire exchange process.", sourceChecklist: "High-Value Exchange & Handling SOP", priority: 'High' },
                { id: 'LUX-CERT-01', description: "Match the serial number on the returned item with its original GIA certificate.", sourceChecklist: "Jewelry Certification & Documentation SOP", priority: 'High' },
                { id: 'LUX-SEC-02', description: "Verify all CCTV cameras are recording the transaction with an unobstructed view.", sourceChecklist: "End-of-Day Store Closure & Security", priority: 'High' },
                { id: 'LUX-RET-01', description: "Require manager approval (dual sign-off) before finalizing the exchange in the POS system.", sourceChecklist: "Sales & Return Authorization", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Global & Indian Compliance Standards",
            standards: [
                { name: "Safety & Security", description: "BIS Hallmarking, ISO 28000 (Supply Chain), ISO 18788 (Security Ops), PSARA (India)." },
                { name: "Labour & HR", description: "Shops & Establishment Act, POSH Act, ILO Code of Conduct." },
                { name: "Financial & Anti-Theft", description: "Anti-Money Laundering (PMLA), GST/Income Tax reporting, Insurance Compliance." },
                { name: "ESG & Sustainability", description: "Responsible Jewellery Council (RJC), Kimberley Process (KPCS), ISO 14001." }
            ]
        },
        checklists: [
            {
                title: "🔒 End-of-Day Store Closure & Security",
                department: "Security/Operations",
                frequency: "Daily",
                role: "Store Manager",
                summary: "Establish an ironclad routine to secure your high-value store. This rigorous protocol prevents theft and guarantees staff safety from open to close.",
                tasks: [
                    { id: 'LUX-SEC-01', description: "Test all alarm systems (panic buttons, door sensors) before final exit.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Store' },
                    { id: 'LUX-SEC-02', description: "Verify all CCTV cameras are recording with unobstructed views, especially over cash counters and vaults.", priority: 'High', riskLevel: 'High', proof: 'CCTV Check Log', location: 'Security Room' },
                    { id: 'LUX-SEC-03', description: "Perform a two-person check to lock the vault.", priority: 'High', riskLevel: 'High', proof: 'Vault Access Log', location: 'Vault' },
                    { id: 'LUX-SEC-04', description: "Ensure all high-value display cases are locked and secured.", priority: 'High', riskLevel: 'High', proof: 'Closing Checklist', location: 'Sales Floor' },
                    { id: 'LUX-SEC-05', description: "Conduct final sweep to ensure no unauthorized personnel are present.", priority: 'High', riskLevel: 'High', proof: 'Staff Roster Check', location: 'Store' },
                    { id: 'LUX-SEC-06', description: "Secure all keys and access cards in a designated lockbox.", priority: 'High', riskLevel: 'High', proof: 'Key Log', location: 'Office' },
                    { id: 'LUX-SEC-07', description: "Ensure all computers and POS systems are logged off and shut down.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor/Office' },
                    { id: 'LUX-SEC-08', description: "Check that all external doors and windows are securely locked.", priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Perimeter' },
                    { id: 'LUX-SEC-09', description: "Document any unusual incidents or observations from the day in the store log.", priority: 'Medium', riskLevel: 'Medium', proof: 'Store Logbook', location: 'Office' },
                    { id: 'LUX-SEC-10', description: "Arm the main security system and confirm activation with the monitoring company.", priority: 'High', riskLevel: 'High', proof: 'Activation Confirmation', location: 'Exit' }
                ]
            },
            {
                title: "💎 Vault Access Control",
                department: "Inventory/Security",
                frequency: "Daily",
                role: "Inventory Manager",
                summary: "Protect your most valuable assets from internal and external threats. This precise checklist tracks every high-value item with two-person sign-offs and daily counts to eliminate loss.",
                tasks: [
                    { id: 'LUX-INV-01', description: "Conduct a daily count of all items in the vault and high-security display cases.", priority: 'High', riskLevel: 'High', proof: 'Daily Count Sheet', location: 'Vault/Sales Floor' },
                    { id: 'LUX-INV-02', description: "Log every instance an item is removed from or returned to the vault, with two-person sign-off.", priority: 'High', riskLevel: 'High', proof: 'Movement Log', location: 'Vault' },
                    { id: 'LUX-INV-03', description: "Review vault access logs daily for any unauthorized or unusual activity.", priority: 'High', riskLevel: 'High', proof: 'Access Log Review', location: 'Manager Office' },
                    { id: 'LUX-INV-04', description: "Enforce a strict policy against shared access credentials (biometric or unique PINs preferred).", priority: 'High', riskLevel: 'High', proof: 'Access Policy Document', location: 'HR' },
                    { id: 'LUX-INV-05', description: "Perform a blind cycle count of a section of vault inventory weekly.", priority: 'High', riskLevel: 'High', proof: 'Cycle Count Report', location: 'Vault' },
                    { id: 'LUX-INV-06', description: "Ensure the vault door is always closed and locked when not in use.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Vault' },
                    { id: 'LUX-INV-07', description: "Test the vault's alarm system on a monthly basis.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Vault' },
                    { id: 'LUX-INV-08', description: "Limit vault access to a small, authorized list of personnel.", priority: 'High', riskLevel: 'High', proof: 'Access List Review', location: 'Manager Office' },
                    { id: 'LUX-INV-09', description: "Ensure CCTV provides a clear view of the vault entrance.", priority: 'High', riskLevel: 'High', proof: 'CCTV Check', location: 'Security Room' },
                    { id: 'LUX-INV-10', description: "Reconcile physical inventory with system records monthly.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Office' }
                ]
            },
            {
                title: "✍️ Sales & Return Authorization",
                department: "Sales/Operations",
                frequency: "Per Transaction",
                role: "Store Manager",
                summary: "Prevent internal fraud and ensure every transaction is legitimate. This SOP requires dual approval for high-value refunds and creates a clear audit trail for all returns.",
                tasks: [
                    { id: 'LUX-RET-01', description: "Require manager approval (dual sign-off) for any refund or exchange above a set value (e.g., ₹10,000).", priority: 'High', riskLevel: 'High', proof: 'Signed Refund Form', location: 'POS' },
                    { id: 'LUX-RET-02', description: "Verify the original purchase receipt and inspect the returned item for authenticity and condition.", priority: 'High', riskLevel: 'High', proof: 'Return Inspection Log', location: 'POS' },
                    { id: 'LUX-RET-03', description: "Process all refunds back to the original payment method.", priority: 'High', riskLevel: 'Medium', proof: 'POS Transaction Slip', location: 'POS' },
                    { id: 'LUX-RET-04', description: "Conduct a weekly audit of all refund transactions against physical stock.", priority: 'High', riskLevel: 'High', proof: 'Weekly Audit Report', location: 'Office' },
                    { id: 'LUX-RET-05', description: "Log reasons for all returns to identify potential product quality issues.", priority: 'Medium', riskLevel: 'Low', proof: 'Returns Analysis Report', location: 'Office' },
                    { id: 'LUX-RET-06', description: "Check for signs of tag swapping or fraudulent packaging on returned goods.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'POS' },
                    { id: 'LUX-RET-07', description: "Ensure returned items are immediately logged and secured.", priority: 'High', riskLevel: 'Medium', proof: 'Return Log', location: 'POS' },
                    { id: 'LUX-RET-08', description: "Train staff on the returns policy and fraud detection.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'LUX-RET-09', description: "Review return rates by employee to identify any unusual patterns.", priority: 'High', riskLevel: 'High', proof: 'Employee Performance Report', location: 'Office' },
                    { id: 'LUX-RET-10', description: "Have a clear policy for handling customer disputes over returns.", priority: 'High', riskLevel: 'Medium', proof: 'Policy Document', location: 'Office' }
                ]
            },
            {
                title: "💳 Digital Transaction Security",
                department: "IT/Operations",
                frequency: "Daily",
                role: "Cashier/Manager",
                summary: "Protect your business and customers from modern payment fraud. This checklist ensures the integrity of your digital payment systems, from QR codes to POS terminals.",
                tasks: [
                    { id: 'LUX-PAY-01', description: "Visually inspect QR codes and payment terminals for any signs of tampering or overlays at the start of each day.", priority: 'High', riskLevel: 'High', proof: 'Daily Inspection Log', location: 'POS' },
                    { id: 'LUX-PAY-02', description: "Reconcile digital payment gateway reports with POS transaction records at the end of each day.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Office' },
                    { id: 'LUX-PAY-03', description: "Ensure CCTV cameras have a clear, unobstructed view of all payment counters.", priority: 'High', riskLevel: 'High', proof: 'CCTV View Check', location: 'Security Room' },
                    { id: 'LUX-PAY-04', description: "Train staff on how to identify and respond to suspected payment fraud.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'LUX-PAY-05', description: "Use only secured, password-protected Wi-Fi networks for all POS transactions (PCI DSS compliance).", priority: 'High', riskLevel: 'High', proof: 'Network Configuration', location: 'IT Office' },
                    { id: 'LUX-PAY-06', description: "Ensure POS software is updated with the latest security patches.", priority: 'High', riskLevel: 'High', proof: 'Software Update Log', location: 'IT Office' },
                    { id: 'LUX-PAY-07', description: "Implement two-factor authentication for accessing payment system backends.", priority: 'High', riskLevel: 'High', proof: '2FA Configuration', location: 'IT Office' },
                    { id: 'LUX-PAY-08', description: "Never write down or share passwords for payment systems.", priority: 'High', riskLevel: 'High', proof: 'Policy Acknowledgment', location: 'HR' },
                    { id: 'LUX-PAY-09', description: "Review transaction logs for any unusual patterns (e.g., multiple small transactions).", priority: 'High', riskLevel: 'High', proof: 'Transaction Log Review', location: 'Office' },
                    { id: 'LUX-PAY-10', description: "Have a clear incident response plan for a suspected payment system breach.", priority: 'High', riskLevel: 'High', proof: 'Incident Response Plan', location: 'Office' }
                ]
            },
            {
                title: "🤝 High-Value Exchange & Handling SOP",
                department: "Sales/Security",
                frequency: "Per Exchange",
                role: "Senior Sales Executive",
                summary: "Prevent mishandling and fraud during high-value exchanges with a strict, dual-verification protocol that protects both the customer and the brand.",
                tasks: [
                    { id: 'LUX-EXCH-01', description: "Conduct all high-value exchanges in a dedicated, CCTV-monitored area.", priority: 'High', riskLevel: 'High', proof: 'CCTV Footage', location: 'Exchange Counter' },
                    { id: 'LUX-EXCH-02', description: "Require two staff members to be present during the entire exchange process.", priority: 'High', riskLevel: 'High', proof: 'Staff Log', location: 'Exchange Counter' },
                    { id: 'LUX-EXCH-03', description: "Verify the authenticity and weight of the returned item using certified equipment.", priority: 'High', riskLevel: 'High', proof: 'Verification Log', location: 'Exchange Counter' },
                    { id: 'LUX-EXCH-04', description: "Document the exchange with signatures from the customer and both staff members.", priority: 'High', riskLevel: 'High', proof: 'Signed Exchange Form', location: 'Exchange Counter' },
                    { id: 'LUX-EXCH-05', description: "Securely tag and log the exchanged item for return to inventory or assessment.", priority: 'High', riskLevel: 'Medium', proof: 'Tag and Log Entry', location: 'Exchange Counter' },
                    { id: 'LUX-EXCH-06', description: "Check original sales record to confirm purchase details.", priority: 'High', riskLevel: 'High', proof: 'Sales Record Check', location: 'POS System' },
                    { id: 'LUX-EXCH-07', description: "Photograph the item being returned and the new item being issued.", priority: 'High', riskLevel: 'Medium', proof: 'Photo Log', location: 'Exchange Counter' },
                    { id: 'LUX-EXCH-08', description: "Communicate the exchange policy clearly to the customer before beginning the process.", priority: 'High', riskLevel: 'Low', proof: 'Verbal Confirmation', location: 'Exchange Counter' },
                    { id: 'LUX-EXCH-09', description: "Update inventory records immediately after the exchange is complete.", priority: 'High', riskLevel: 'High', proof: 'Inventory System Log', location: 'System' },
                    { id: 'LUX-EXCH-10', description: "Manager to review and sign off on all high-value exchange forms at the end of the day.", priority: 'High', riskLevel: 'High', proof: 'Manager Sign-off', location: 'Office' }
                ]
            },
            {
                title: "🔥 Fire & Electrical Safety Audit Checklist",
                department: "Safety/Facilities",
                frequency: "Monthly",
                role: "Safety Officer",
                summary: "Mitigate fire risks in a luxury environment where high-powered lighting and electronics are common. This checklist ensures compliance with fire safety regulations.",
                tasks: [
                    { id: 'LUX-FIRE-01', description: "Inspect all fire extinguishers for expiry date, pressure, and accessibility.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Inspection Log', location: 'Store-wide' },
                    { id: 'LUX-FIRE-02', description: "Test all smoke detectors and fire alarms.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Store-wide' },
                    { id: 'LUX-FIRE-03', description: "Check all display lighting and electrical wiring for signs of overheating or wear.", priority: 'High', riskLevel: 'High', proof: 'Electrical Inspection Report', location: 'Sales Floor' },
                    { id: 'LUX-FIRE-04', description: "Ensure flammable materials (cleaning supplies, packaging) are stored away from electrical panels.", priority: 'High', riskLevel: 'Medium', proof: 'Storage Area Audit', location: 'Storeroom' },
                    { id: 'LUX-FIRE-05', description: "Verify that all emergency exits are clear and staff are trained on the evacuation plan.", priority: 'High', riskLevel: 'High', proof: 'Evacuation Drill Log', location: 'Store-wide' },
                    { id: 'LUX-FIRE-06', description: "Ensure emergency lighting is functional.", priority: 'High', riskLevel: 'High', proof: 'Emergency Light Test', location: 'Store-wide' },
                    { id: 'LUX-FIRE-07', description: "Check that all electrical panels are accessible and not blocked.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Electrical Rooms' },
                    { id: 'LUX-FIRE-08', description: "Review the store's hot work permit process.", priority: 'Medium', riskLevel: 'Medium', proof: 'Hot Work Permit Log', location: 'Office' },
                    { id: 'LUX-FIRE-09', description: "Ensure staff know the location and use of fire blankets.", priority: 'Medium', riskLevel: 'Medium', proof: 'Staff Training', location: 'Staff Area' },
                    { id: 'LUX-FIRE-10', description: "Maintain a log of all fire safety inspections and corrective actions.", priority: 'High', riskLevel: 'High', proof: 'Fire Safety Logbook', location: 'Office' }
                ]
            },
            {
                title: "⚖️ POSH & Professional Conduct SOP",
                department: "HR",
                frequency: "Annually",
                role: "HR Manager",
                summary: "Foster a respectful and professional environment. This SOP outlines the process for Prevention of Sexual Harassment (POSH) compliance and professional conduct.",
                tasks: [
                    { id: 'LUX-POSH-01', description: "Ensure the company's POSH policy is displayed and accessible to all employees.", priority: 'High', riskLevel: 'High', proof: 'Policy Display Check', location: 'Staff Area' },
                    { id: 'LUX-POSH-02', description: "Conduct mandatory annual POSH awareness training for all employees.", priority: 'High', riskLevel: 'High', proof: 'Training Attendance Sheet', location: 'Training Room' },
                    { id: 'LUX-POSH-03', description: "Verify that the Internal Complaints Committee (ICC) is properly constituted and members are trained.", priority: 'High', riskLevel: 'High', proof: 'ICC Constitution Document', location: 'HR Office' },
                    { id: 'LUX-POSH-04', description: "Maintain a confidential log of any complaints and the actions taken.", priority: 'High', riskLevel: 'High', proof: 'Grievance Redressal Log', location: 'HR Office' },
                    { id: 'LUX-POSH-05', description: "All employees to sign a code of conduct declaration upon joining.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Declarations', location: 'Employee Files' },
                    { id: 'LUX-POSH-06', description: "Review and update the POSH policy annually.", priority: 'High', riskLevel: 'Medium', proof: 'Policy Review Minutes', location: 'HR Office' },
                    { id: 'LUX-POSH-07', description: "Ensure a clear and confidential process for reporting harassment is communicated to all staff.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'HR Office' },
                    { id: 'LUX-POSH-08', description: "Provide regular refresher training for ICC members.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR Office' },
                    { id: 'LUX-POSH-09', description: "Display contact details of ICC members on notice boards.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Staff Area' },
                    { id: 'LUX-POSH-10', description: "Submit the annual POSH compliance report to the relevant authorities.", priority: 'High', riskLevel: 'High', proof: 'Submission Receipt', location: 'HR Office' }
                ]
            },
            {
                title: "💠 Jewelry Certification & Documentation SOP",
                department: "Sales/Quality",
                frequency: "Per Sale",
                role: "Sales Associate",
                summary: "Build customer trust and prevent disputes by ensuring every piece of certified jewelry is sold with the correct, verified documentation (e.g., GIA, IGI).",
                tasks: [
                    { id: 'LUX-CERT-01', description: "Before completing a sale, match the serial number on the jewelry with the certificate number.", priority: 'High', riskLevel: 'High', proof: 'Physical Match Verification', location: 'POS' },
                    { id: 'LUX-CERT-02', description: "Create a digital record linking the SKU of the sold item to its unique certificate number.", priority: 'High', riskLevel: 'Medium', proof: 'System Log Entry', location: 'POS/System' },
                    { id: 'LUX-CERT-03', description: "Provide the original certificate to the customer in a branded folder.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'POS' },
                    { id: 'LUX-CERT-04', description: "Have the customer sign an acknowledgment form confirming receipt of the correct certificate.", priority: 'High', riskLevel: 'High', proof: 'Signed Acknowledgment Form', location: 'POS' },
                    { id: 'LUX-CERT-05', description: "Maintain a duplicate or digital copy of the certificate in the store's records for future reference.", priority: 'High', riskLevel: 'Medium', proof: 'Digital Archive', location: 'Office' },
                    { id: 'LUX-CERT-06', description: "Explain the importance and details of the certificate to the customer.", priority: 'Medium', riskLevel: 'Low', proof: 'Verbal Confirmation', location: 'POS' },
                    { id: 'LUX-CERT-07', description: "Ensure certificates are stored securely to prevent loss or damage.", priority: 'High', riskLevel: 'Medium', proof: 'Storage Check', location: 'Office' },
                    { id: 'LUX-CERT-08', description: "Verify authenticity of certificates for any jewelry taken in for exchange or buy-back.", priority: 'High', riskLevel: 'High', proof: 'Verification Log', location: 'POS' },
                    { id: 'LUX-CERT-09', description: "Train all sales staff on the different types of certifications and what they mean.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'LUX-CERT-10', description: "Have a clear process for handling lost or damaged customer certificates.", priority: 'Medium', riskLevel: 'Medium', proof: 'Policy Document', location: 'Office' }
                ]
            },
             {
                title: "🏢 EBO Operations Checklist",
                department: "Retail Operations",
                frequency: "Daily/Weekly",
                role: "Store Manager",
                summary: "Run your Exclusive Brand Outlet to perfection. This checklist covers brand compliance, sales training, and inventory management specific to an EBO environment.",
                tasks: [
                    { id: 'EBO-VM-01', description: "Ensure all visual merchandising and product displays strictly adhere to the parent brand's guidelines.", priority: 'High', riskLevel: 'High', proof: 'VM Guideline Check', location: 'Sales Floor' },
                    { id: 'EBO-TRAIN-02', description: "Conduct weekly training on brand story, product features, and the target customer profile.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Staff Room' },
                    { id: 'EBO-INV-03', description: "Report daily sales and inventory data to the parent company using the specified format/portal.", priority: 'High', riskLevel: 'High', proof: 'System Report', location: 'Office' },
                    { id: 'EBO-CUST-04', description: "Audit the customer experience to ensure it aligns with the luxury/premium positioning of the brand.", priority: 'High', riskLevel: 'Medium', proof: 'Experience Audit', location: 'Sales Floor' },
                    { id: 'EBO-MAINT-05', description: "Verify that all store fixtures, furniture, and lighting meet the brand's quality standards and are in perfect condition.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Entire Store' }
                ]
            }
        ]
    },
    {
        id: 'fashion_and_apparel_retail',
        title: "Fashion & Apparel Retail",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "A specialized toolkit for fashion retailers to manage seasonal inventory, optimize visual merchandising, and prevent shrinkage.",
        icon: <Shirt className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Fashion Retail Owners", "Store Managers", "Merchandisers", "Heads of Retail", "Head of Visual Merchandising", "COO"],
        sampleItems: [
            { text: "Master 'Seasonal Inventory Management' to reduce dead stock.", icon: <Thermometer /> },
            { text: "Implement a 'Visual Merchandising' checklist for stunning displays.", icon: <GalleryVertical /> },
            { text: "Secure your store with a 'Fitting Room Operations & Security' protocol.", icon: <DoorClosed /> },
            { text: "Streamline 'Omni-Channel Operations' for click-and-collect and online returns.", icon: <Link /> }
        ],
        previewScenario: {
            title: "Handling a Suspected Theft in the Fitting Room",
            description: "A staff member suspects a customer has concealed items in their bag. This scenario shows how checklists for Fitting Rooms and Loss Prevention guide a delicate but firm response to prevent shrinkage.",
            tasks: [
                { id: 'FAS-FIT-01', description: "Log the exact number of items the customer takes into the fitting room.", sourceChecklist: "Fitting Room Operations & Security", priority: 'High' },
                { id: 'FAS-FIT-02', description: "After the customer leaves, immediately check the room for discarded security tags or packaging.", sourceChecklist: "Fitting Room Operations & Security", priority: 'High' },
                { id: 'FAS-SEC-03', description: "Politely ask to check the customer's bag if a discrepancy is found, following store policy.", sourceChecklist: "Store Safety & Loss Prevention", priority: 'High' },
                { id: 'FAS-SEC-08', description: "Log the incident, including the outcome, regardless of whether a theft occurred.", sourceChecklist: "Store Safety & Loss Prevention", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global Fashion Retail Standards",
            standards: [
                { name: "Inventory Management", description: "Best practices for seasonal stock, markdowns, and omni-channel accuracy." },
                { name: "Loss Prevention", description: "Techniques for shrinkage control, including fitting room monitoring and security tag audits." },
                { name: "Customer Experience", description: "Principles of fashion retail service, including styling advice and fitting room service." },
                { name: "Visual Merchandising", description: "Guidelines for creating compelling window and in-store displays that drive sales." }
            ]
        },
        checklists: [
            {
                title: "👕 Store Opening & Daily Readiness",
                department: "Operations",
                frequency: "Daily",
                role: "Store Manager",
                summary: "Set the stage for a successful sales day. This morning checklist ensures your store is perfectly presented, stocked, and ready for customers the moment your doors open.",
                tasks: [
                    { id: 'FAS-OPEN-01', description: "Ensure all mannequins are dressed according to the current VM guide and are clean.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'FAS-OPEN-02', description: "Verify all lighting is functional and focused correctly on displays.", priority: 'High', riskLevel: 'Medium', proof: 'Lighting Check', location: 'Sales Floor' },
                    { id: 'FAS-OPEN-03', description: "Conduct a 'size sweep' to ensure all items on display have a full range of sizes available.", priority: 'High', riskLevel: 'Medium', proof: 'Size Sweep Log', location: 'Sales Floor' },
                    { id: 'FAS-OPEN-04', description: "Check that fitting rooms are clean, mirrors are spotless, and lighting is flattering.", priority: 'High', riskLevel: 'High', proof: 'Fitting Room Log', location: 'Fitting Rooms' },
                    { id: 'FAS-OPEN-05', description: "Hold a morning huddle to discuss daily sales targets, promotions, and new arrivals.", priority: 'High', riskLevel: 'Low', proof: 'Huddle Notes', location: 'Staff Area' },
                    { id: 'FAS-OPEN-06', description: "Check store cleanliness, including floors, windows, and shelves.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Entire Store' },
                    { id: 'FAS-OPEN-07', description: "Ensure music and scent systems are operational and set to brand standards.", priority: 'Medium', riskLevel: 'Low', proof: 'Ambiance Check', location: 'Entire Store' },
                    { id: 'FAS-OPEN-08', description: "Verify POS systems and credit card terminals are online and functional.", priority: 'High', riskLevel: 'High', proof: 'System Check Log', location: 'POS' },
                    { id: 'FAS-OPEN-09', description: "Confirm all staff are present and in proper uniform.", priority: 'High', riskLevel: 'Medium', proof: 'Attendance Sheet', location: 'Staff Area' },
                    { id: 'FAS-OPEN-10', description: "Review any overnight communications or updates from head office.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Office' }
                ]
            },
            {
                title: "📦 Seasonal Inventory Management",
                department: "Inventory",
                frequency: "Weekly",
                role: "Merchandiser/Manager",
                summary: "Maximize profitability by mastering the fashion cycle. This checklist helps you manage the transition between seasons, optimizing sell-through and avoiding costly end-of-season write-offs.",
                tasks: [
                    { id: 'FAS-INV-01', description: "Review sales data to identify fast and slow-moving items from the current season.", priority: 'High', riskLevel: 'High', proof: 'Sales Report', location: 'Office' },
                    { id: 'FAS-INV-02', description: "Plan and execute timely markdowns for end-of-season stock.", priority: 'High', riskLevel: 'High', proof: 'Markdown Plan', location: 'System' },
                    { id: 'FAS-INV-03', description: "Prepare storage for off-season stock, ensuring it's packed and labeled correctly.", priority: 'High', riskLevel: 'Medium', proof: 'Storage Audit', location: 'Stockroom' },
                    { id: 'FAS-INV-04', description: "Coordinate with the warehouse for the intake of new seasonal collections.", priority: 'High', riskLevel: 'Medium', proof: 'Delivery Schedule', location: 'Stockroom' },
                    { id: 'FAS-INV-05', description: "Update all visual merchandising to reflect the new season's theme.", priority: 'High', riskLevel: 'Medium', proof: 'VM Directive', location: 'Sales Floor' },
                    { id: 'FAS-INV-06', description: "Analyze sell-through rates for all categories.", priority: 'High', riskLevel: 'High', proof: 'Sell-Through Report', location: 'Office' },
                    { id: 'FAS-INV-07', description: "Plan for inter-store transfers to balance inventory.", priority: 'Medium', riskLevel: 'Medium', proof: 'Transfer Plan', location: 'Office' },
                    { id: 'FAS-INV-08', description: "Return any unsold merchandise to the vendor if applicable.", priority: 'High', riskLevel: 'Medium', proof: 'Return Authorization', location: 'Office' },
                    { id: 'FAS-INV-09', description: "Conduct a full physical inventory count at the end of each season.", priority: 'High', riskLevel: 'High', proof: 'Inventory Count Report', location: 'Entire Store' },
                    { id: 'FAS-INV-10', description: "Provide feedback to the buying team on product performance.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Report', location: 'Office' }
                ]
            },
            {
                title: "✨ Visual Merchandising & Window Display",
                department: "Merchandising",
                frequency: "Weekly",
                role: "Visual Merchandiser",
                summary: "Create displays that stop traffic and tell a story. This creative and operational checklist ensures your window and in-store displays are compelling, fresh, and on-brand.",
                tasks: [
                    { id: 'FAS-VM-01', description: "Rotate the main window display according to the marketing calendar.", priority: 'High', riskLevel: 'Medium', proof: 'Photo of Display', location: 'Window' },
                    { id: 'FAS-VM-02', description: "Ensure all displayed apparel is perfectly steamed, pinned, and accessorized.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'FAS-VM-03', description: "Check that 'hero' products are displayed prominently at the front of the store.", priority: 'High', riskLevel: 'Medium', proof: 'Store Layout Check', location: 'Entrance' },
                    { id: 'FAS-VM-04', description: "Refresh and reorganize key displays (e.g., 'New Arrivals' table) mid-week to keep them looking fresh.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'FAS-VM-05', description: "Audit signage to ensure it is clean, current, and consistent with the brand's aesthetic.", priority: 'High', riskLevel: 'Low', proof: 'Signage Audit', location: 'Sales Floor' },
                    { id: 'FAS-VM-06', description: "Ensure all displays are well-lit.", priority: 'High', riskLevel: 'Medium', proof: 'Lighting Check', location: 'Sales Floor' },
                    { id: 'FAS-VM-07', description: "Check that all product categories are clearly defined and easy to navigate.", priority: 'High', riskLevel: 'Medium', proof: 'Layout Check', location: 'Sales Floor' },
                    { id: 'FAS-VM-08', description: "Use props and backdrops to create a compelling story.", priority: 'Medium', riskLevel: 'Low', proof: 'Photo of Display', location: 'Sales Floor' },
                    { id: 'FAS-VM-09', description: "Ensure a consistent color story is told throughout the store.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Audit', location: 'Sales Floor' },
                    { id: 'FAS-VM-10', description: "Get feedback from sales staff on display effectiveness.", priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Log', location: 'Office' }
                ]
            },
            {
                title: "🔒 Fitting Room Operations & Security",
                department: "Sales/Security",
                frequency: "Ongoing",
                role: "Sales Associate",
                summary: "Turn your fitting rooms into a high-conversion sales tool, not a shrinkage hotspot. This protocol helps you provide excellent customer service while implementing key security measures to prevent theft.",
                tasks: [
                    { id: 'FAS-FIT-01', description: "Log the number of items a customer takes into a fitting room.", priority: 'High', riskLevel: 'High', proof: 'Fitting Room Log/Tags', location: 'Fitting Room Entrance' },
                    { id: 'FAS-FIT-02', description: "Check the fitting room for any left-behind items or discarded security tags immediately after a customer leaves.", priority: 'High', riskLevel: 'High', proof: 'Room Check Log', location: 'Fitting Rooms' },
                    { id: 'FAS-FIT-03', description: "Offer styling assistance and suggest alternative sizes or items to customers in the fitting rooms.", priority: 'High', riskLevel: 'Low', proof: 'Manager Observation', location: 'Fitting Rooms' },
                    { id: 'FAS-FIT-04', description: "Return unwanted items from the fitting room to the sales floor promptly.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Fitting Rooms' },
                    { id: 'FAS-FIT-05', description: "Report any suspicious behavior to the store manager or security immediately.", priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Fitting Rooms' },
                    { id: 'FAS-FIT-06', description: "Ensure fitting rooms are always clean and well-lit.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Fitting Rooms' },
                    { id: 'FAS-FIT-07', description: "Limit the number of items allowed in the fitting room at one time.", priority: 'High', riskLevel: 'High', proof: 'Policy Signage', location: 'Fitting Room Entrance' },
                    { id: 'FAS-FIT-08', description: "Check for any damage to mirrors or fixtures in the fitting rooms.", priority: 'Medium', riskLevel: 'Low', proof: 'Maintenance Log', location: 'Fitting Rooms' },
                    { id: 'FAS-FIT-09', description: "Train staff on how to handle fitting room rushes effectively.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'FAS-FIT-10', description: "Have a clear process for handling items that are damaged in the fitting room.", priority: 'High', riskLevel: 'Medium', proof: 'Damage Log', location: 'Office' }
                ]
            },
            {
                title: "🔄 Omni-Channel Operations",
                department: "Operations",
                frequency: "Daily",
                role: "Omni-Channel Lead",
                summary: "Create a seamless bridge between your online and physical stores. This checklist standardizes 'Click and Collect', in-store returns, and inventory syncing for a frustration-free customer experience.",
                tasks: [
                    { id: 'FAS-OMNI-01', description: "Check for new 'Click and Collect' orders every hour.", priority: 'High', riskLevel: 'Medium', proof: 'Order System Log', location: 'System' },
                    { id: 'FAS-OMNI-02', description: "Pick, pack, and stage 'Click and Collect' orders in a designated area within the SLA timeframe.", priority: 'High', riskLevel: 'High', proof: 'Order Fulfillment Log', location: 'Stockroom' },
                    { id: 'FAS-OMNI-03', description: "Process online returns that are brought into the store, inspecting items and updating inventory.", priority: 'High', riskLevel: 'High', proof: 'Returns Log', location: 'POS' },
                    { id: 'FAS-OMNI-04', description: "Perform a daily audit of store inventory levels to ensure they sync accurately with the online store.", priority: 'High', riskLevel: 'High', proof: 'Inventory Sync Report', location: 'System' },
                    { id: 'FAS-OMNI-05', description: "Train all staff on how to handle online orders and returns professionally.", priority: 'High', riskLevel: 'Medium', proof: 'Training Record', location: 'HR' },
                    { id: 'FAS-OMNI-06', description: "Send notification to customer when 'Click and Collect' order is ready for pickup.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'System' },
                    { id: 'FAS-OMNI-07', description: "Handle any customer inquiries related to online orders.", priority: 'High', riskLevel: 'Medium', proof: 'Customer Service Log', location: 'Front Desk' },
                    { id: 'FAS-OMNI-08', description: "Ensure packaging for online orders meets brand standards.", priority: 'Medium', riskLevel: 'Low', proof: 'Packaging Audit', location: 'Stockroom' },
                    { id: 'FAS-OMNI-09', description: "Manage inventory for 'Ship from Store' orders.", priority: 'High', riskLevel: 'High', proof: 'Ship from Store Log', location: 'Stockroom' },
                    { id: 'FAS-OMNI-10', description: "Reconcile online and in-store sales data at the end of the day.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Office' }
                ]
            },
            {
                title: "🛡️ Store Safety & Loss Prevention",
                department: "Security/Operations",
                frequency: "Daily",
                role: "Store Manager",
                summary: "Protect your assets and ensure a safe shopping environment. This checklist covers daily security measures, from CCTV checks to managing EAS systems.",
                tasks: [
                    { id: 'FAS-SEC-01', description: "Verify all CCTV cameras are operational and have clear views of entrances, POS, and high-value areas.", priority: 'High', riskLevel: 'High', proof: 'CCTV Log', location: 'Security Office' },
                    { id: 'FAS-SEC-02', description: "Test EAS (Electronic Article Surveillance) gates at the start of the day.", priority: 'High', riskLevel: 'High', proof: 'EAS Test Log', location: 'Entrance' },
                    { id: 'FAS-SEC-03', description: "Ensure all high-value items are properly tagged with security devices.", priority: 'High', riskLevel: 'High', proof: 'Tagging Audit', location: 'Sales Floor' },
                    { id: 'FAS-SEC-04', description: "Conduct end-of-day checks to ensure all doors, windows, and cash registers are secure.", priority: 'High', riskLevel: 'High', proof: 'Closing Checklist', location: 'Store-wide' },
                    { id: 'FAS-SEC-05', description: "Brief staff on current loss prevention focus areas (e.g., specific types of theft).", priority: 'Medium', riskLevel: 'Medium', proof: 'Briefing Notes', location: 'Staff Huddle' },
                    { id: 'FAS-SEC-06', description: "Check for any signs of tampering with locks or alarms.", priority: 'High', riskLevel: 'High', proof: 'Security Inspection Log', location: 'Store-wide' },
                    { id: 'FAS-SEC-07', description: "Ensure all staff are trained on how to handle a theft incident.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'FAS-SEC-08', description: "Review incident reports and identify any trends.", priority: 'High', riskLevel: 'High', proof: 'Incident Report Analysis', location: 'Office' },
                    { id: 'FAS-SEC-09', description: "Conduct regular audits of cash handling procedures.", priority: 'High', riskLevel: 'High', proof: 'Cash Handling Audit', location: 'Office' },
                    { id: 'FAS-SEC-10', description: "Maintain a good relationship with local law enforcement.", priority: 'Medium', riskLevel: 'Low', proof: 'Contact Log', location: 'Office' }
                ]
            },
            {
                title: "💰 Cash & Payment Handling",
                department: "Finance/Operations",
                frequency: "Per Shift",
                role: "Head Cashier",
                summary: "Secure your revenue with a strict protocol for cash handling, POS operations, and end-of-day reconciliation to prevent fraud and errors.",
                tasks: [
                    { id: 'FAS-CASH-01', description: "Verify cash float at the beginning of each shift.", priority: 'High', riskLevel: 'High', proof: 'Float Count Sheet', location: 'Cash Office' },
                    { id: 'FAS-CASH-02', description: "Reconcile cash, card, and digital payments against POS reports at the end of each shift.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Cash Office' },
                    { id: 'FAS-CASH-03', description: "Process refunds and exchanges only with manager approval and proper documentation.", priority: 'High', riskLevel: 'High', proof: 'Refund Log', location: 'POS' },
                    { id: 'FAS-CASH-04', description: "Securely transport cash deposits to the bank or safe.", priority: 'High', riskLevel: 'High', proof: 'Deposit Slip/Log', location: 'Cash Office' },
                    { id: 'FAS-CASH-05', description: "Regularly check POS hardware (card readers, printers) for tampering or malfunction.", priority: 'High', riskLevel: 'Medium', proof: 'Hardware Check Log', location: 'POS' },
                    { id: 'FAS-CASH-06', description: "Implement a process for handling counterfeit currency.", priority: 'High', riskLevel: 'High', proof: 'Counterfeit Log', location: 'POS' },
                    { id: 'FAS-CASH-07', description: "Ensure all cash drawers are locked when not in use.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'POS' },
                    { id: 'FAS-CASH-08', description: "Train all cashiers on cash handling policies and procedures.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'FAS-CASH-09', description: "Limit access to the cash office.", priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Cash Office' },
                    { id: 'FAS-CASH-10', description: "Conduct surprise cash audits.", priority: 'High', riskLevel: 'High', proof: 'Audit Log', location: 'Office' }
                ]
            },
            {
                title: "🏢 EBO Operations Checklist",
                department: "Retail Operations",
                frequency: "Daily/Weekly",
                role: "Store Manager",
                summary: "Run your Exclusive Brand Outlet to perfection. This checklist covers brand compliance, sales training, and inventory management specific to an EBO environment.",
                tasks: [
                    { id: 'EBO-VM-01', description: "Ensure all visual merchandising and product displays strictly adhere to the parent brand's guidelines.", priority: 'High', riskLevel: 'High', proof: 'VM Guideline Check', location: 'Sales Floor' },
                    { id: 'EBO-TRAIN-02', description: "Conduct weekly training on brand story, product features, and the target customer profile.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Staff Room' },
                    { id: 'EBO-INV-03', description: "Report daily sales and inventory data to the parent company using the specified format/portal.", priority: 'High', riskLevel: 'High', proof: 'System Report', location: 'Office' },
                    { id: 'EBO-CUST-04', description: "Audit the customer experience to ensure it aligns with the luxury/premium positioning of the brand.", priority: 'High', riskLevel: 'Medium', proof: 'Experience Audit', location: 'Sales Floor' },
                    { id: 'EBO-MAINT-05', description: "Verify that all store fixtures, furniture, and lighting meet the brand's quality standards and are in perfect condition.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Entire Store' }
                ]
            }
        ]
    },
    {
        id: 'supermarket_grocery_retail_pack',
        title: "Supermarket & Grocery Retail Operations Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "An all-in-one operations and compliance pack for supermarkets, hypermarkets, and grocery retail chains, ensuring food safety, loss prevention, hygiene, and operational efficiency across outlets.",
        icon: <ShoppingBasket className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Supermarket Owners", "Grocery Store Proprietors", "Heads of Retail Operations", "Store Directors", "Department Heads (Fresh Food, Dairy)", "3PL Partners"],
        sampleItems: [
            { text: "Implement a 'Cold Storage & Food Safety' checklist based on FSSAI/HACCP.", icon: <Thermometer /> },
            { text: "Standardize 'Goods Receiving & Staging' for high-volume inventory.", icon: <PackageCheck /> },
            { text: "Optimize 'Cash Handling & POS Security' to prevent fraud.", icon: <Banknote /> },
            { text: "Includes checklists for 'Expiry & Inventory Rotation' and 'Store Hygiene'.", icon: <Recycle /> }
        ],
        previewScenario: {
            title: "Responding to a Cold Storage Breakdown",
            description: "A Mumbai hypermarket lost ₹18 lakh in perishable inventory after a cold room malfunctioned overnight. This scenario shows how checklists prevent this by ensuring a proactive, systematic response.",
            tasks: [
                { id: 'CS-01', description: "Morning temperature check from the 'Daily Store Readiness' checklist immediately flags a unit is out of the safe zone.", sourceChecklist: "Daily Store Readiness & Audit", priority: 'High' },
                { id: 'CS-02', description: "The 'Cold Storage & Food Safety' SOP is activated: all products are quarantined and internal temperatures are checked.", sourceChecklist: "Cold Storage & Food Safety", priority: 'High' },
                { id: 'CS-03', description: "The 'Inventory, Expiry & Replenishment' checklist is used to log all spoiled items for wastage reports and insurance claims.", sourceChecklist: "Inventory, Expiry & Replenishment", priority: 'High' },
                { id: 'CS-04', description: "Maintenance is called and the unit is not restocked until the 'Cold Storage' checklist certifies it's safe, preventing further loss.", sourceChecklist: "Cold Storage & Food Safety", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global & Indian Compliance Standards",
            standards: [
                { name: "Food Safety & Hygiene", description: "FSSAI (India), ISO 22000 (Food Safety Management), HACCP Guidelines, Codex Alimentarius Standards" },
                { name: "Occupational Health & Safety", description: "ISO 45001, IS 14489 (Occupational Safety Audit), Local Fire & Labour Laws" },
                { name: "Retail & Labour Compliance", description: "Shops & Establishments Act (state-wise), Minimum Wages Act, POSH Act 2013, Working Hours & Shift Scheduling" },
                { name: "Data & Consumer Protection", description: "DPDP Act 2023 (India), GDPR (Global), Consumer Protection Act 2019" }
            ]
        },
        checklists: [
            {
                title: "🧯 Fire & Electrical Safety",
                department: "Safety/Maintenance",
                frequency: "Weekly",
                role: "Safety Officer",
                summary: "A critical checklist to prevent fire incidents in a high-traffic retail environment. Covers electrical load audits, fire equipment readiness, and emergency exit verification to ensure staff and customer safety.",
                tasks: [
                    { id: 'SGR-FES-01', description: "Inspect all fire extinguishers for correct pressure, accessibility, and valid inspection tags.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Log', location: 'Store-wide' },
                    { id: 'SGR-FES-02', description: "Test fire alarm system, including smoke detectors and manual pull stations.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Record', location: 'Control Panel' },
                    { id: 'SGR-FES-03', description: "Walk all emergency exit routes to ensure they are completely clear and unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Exit Path Photo Log', location: 'Store-wide' },
                    { id: 'SGR-FES-04', description: "Check electrical panels and high-load areas (e.g., cold storage units) for signs of overheating or exposed wiring.", priority: 'High', riskLevel: 'High', proof: 'Thermal Scan Report (optional)', location: 'Electrical Rooms/Cold Storage' },
                    { id: 'SGR-FES-05', description: "Ensure emergency lighting is functional and tested.", priority: 'High', riskLevel: 'High', proof: 'Lighting Test Log', location: 'Store-wide' },
                    { id: 'SGR-FES-06', description: "Verify that 'No Smoking' signs are clearly displayed in all designated areas.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Audit', location: 'Store-wide' },
                    { id: 'SGR-FES-07', description: "Ensure staff are trained on the fire evacuation plan and the location of fire equipment.", priority: 'High', riskLevel: 'High', proof: 'Training Attendance Sheet', location: 'Staff Room' },
                    { id: 'SGR-FES-08', description: "Check that sprinkler systems are unobstructed and heads are not painted over.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Store-wide' },
                    { id: 'SGR-FES-09', description: "Document and schedule a quarterly fire drill.", priority: 'High', riskLevel: 'High', proof: 'Drill Schedule', location: 'Manager Office' },
                    { id: 'SGR-FES-10', description: "Ensure vendor-supplied equipment (e.g., promotional refrigerators) are electrically safe and certified.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Compliance Check', location: 'Sales Floor' }
                ]
            },
            {
                title: "🥶 Cold Storage & Food Safety",
                department: "Fresh Food/Dairy",
                frequency: "Hourly/Daily",
                role: "Department Manager",
                summary: "Prevent spoilage and ensure FSSAI/HACCP compliance with this essential checklist for all refrigerated and frozen units. It includes temperature monitoring, alarm testing, and FIFO rotation protocols.",
                tasks: [
                    { id: 'SGR-CSFS-01', description: "Log temperatures of all chillers, freezers, and cold rooms every 2 hours.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log Sheet/Digital Record', location: 'All Cold Units' },
                    { id: 'SGR-CSFS-02', description: "Verify that digital temperature displays match a calibrated handheld thermometer reading (weekly).", priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'All Cold Units' },
                    { id: 'SGR-CSFS-03', description: "Test high/low temperature alarms for all critical cold storage units.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Cold Rooms' },
                    { id: 'SGR-CSFS-04', description: "Check that door seals are intact and doors close properly on all refrigerated units.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection Log', location: 'All Cold Units' },
                    { id: 'SGR-CSFS-05', description: "Ensure raw meat, poultry, and fish are stored separately and below ready-to-eat foods to prevent cross-contamination.", priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Walk-in Chiller' },
                    { id: 'SGR-CSFS-06', description: "Audit stock to ensure FIFO (First-In, First-Out) rotation is being followed.", priority: 'High', riskLevel: 'Medium', proof: 'FIFO Audit Report', location: 'All Cold Units' },
                    { id: 'SGR-CSFS-07', description: "Ensure condenser units are clean and free from dust and debris.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Cold Storage Area' },
                    { id: 'SGR-CSFS-08', description: "Have a clear written procedure for what to do in case of a power failure or equipment breakdown.", priority: 'High', riskLevel: 'High', proof: 'Emergency SOP Document', location: 'Manager Office' },
                    { id:'SGR-CSFS-09', description: "Train all staff on the importance of temperature control and what to do if an alarm sounds.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Staff Room' },
                    { id: 'SGR-CSFS-10', description: "Keep all cold storage areas clean and organized, with products stored off the floor.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'All Cold Units' }
                ]
            },
            {
                title: "🧹 Store Hygiene & Housekeeping",
                department: "Operations/Facilities",
                frequency: "Hourly/Daily",
                role: "Floor Supervisor",
                summary: "Maintain a safe, clean, and welcoming environment for customers. This checklist covers everything from spill response and floor cleaning to restroom sanitation and trolley maintenance.",
                tasks: [
                    { id: 'SGR-SHH-01', description: "Conduct hourly floor walks to check for spills, debris, or any slip-and-fall hazards.", priority: 'High', riskLevel: 'High', proof: 'Floor Walk Log', location: 'Sales Floor' },
                    { id: 'SGR-SHH-02', description: "Ensure 'Wet Floor' signs are used immediately for any spills, and the area is cleaned and dried promptly.", priority: 'High', riskLevel: 'High', proof: 'Incident Log', location: 'Sales Floor' },
                    { id: 'SGR-SHH-03', description: "Check and clean restrooms hourly, ensuring they are stocked with soap, paper towels, and toilet paper.", priority: 'High', riskLevel: 'High', proof: 'Restroom Cleaning Log', location: 'Restrooms' },
                    { id: 'SGR-SHH-04', description: "Sanitize shopping trolley and basket handles at regular intervals.", priority: 'High', riskLevel: 'Medium', proof: 'Sanitization Log', location: 'Entrance' },
                    { id: 'SGR-SHH-05', description: "Empty all trash bins before they become full.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Audit', location: 'Store-wide' },
                    { id: 'SGR-SHH-06', description: "Ensure all shelves and product displays are free of dust and grime.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Sales Floor' },
                    { id: 'SGR-SHH-07', description: "Check that the store entrance is clean and inviting.", priority: 'High', riskLevel: 'Low', proof: 'Visual Inspection', location: 'Entrance' },
                    { id: 'SGR-SHH-08', description: "Perform a deep clean of all floors after closing hours.", priority: 'High', riskLevel: 'Medium', proof: 'End-of-Day Cleaning Report', location: 'Store-wide' },
                    { id: 'SGR-SHH-09', description: "Ensure cleaning supplies are stored safely and correctly.", priority: 'High', riskLevel: 'Medium', proof: 'Storage Audit', location: 'Janitor Closet' },
                    { id: 'SGR-SHH-10', description: "Train all staff on the 'Clean As You Go' policy.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Staff Room' }
                ]
            },
            {
                title: "💰 Cash Handling & POS Security",
                department: "Finance/Front-End",
                frequency: "Per Shift",
                role: "Head Cashier",
                summary: "Prevent theft and ensure accuracy at your most critical transaction point. This SOP covers cash reconciliation, POS audits, and manager approvals to secure your revenue.",
                tasks: [
                    { id: 'SGR-CHPS-01', description: "Verify and sign for the cash float at the start of each shift.", priority: 'High', riskLevel: 'High', proof: 'Float Log', location: 'Cash Office' },
                    { id: 'SGR-CHPS-02', description: "Reconcile cash, card, and digital payments against POS totals at the end of each shift.", priority: 'High', riskLevel: 'High', proof: 'End-of-Shift Report', location: 'Cash Office' },
                    { id: 'SGR-CHPS-03', description: "Require a manager's override or signature for all voided transactions and refunds over a set limit (e.g., ₹1,000).", priority: 'High', riskLevel: 'High', proof: 'Override Log', location: 'POS Terminal' },
                    { id: 'SGR-CHPS-04', description: "Conduct random daily audits of at least one cashier's drawer.", priority: 'High', riskLevel: 'High', proof: 'Random Audit Log', location: 'Cash Office' },
                    { id: 'SGR-CHPS-05', description: "Ensure all cashiers log in with their unique biometric or password credentials.", priority: 'High', riskLevel: 'High', proof: 'POS User Policy', location: 'POS Terminal' },
                    { id: 'SGR-CHPS-06', description: "Inspect payment terminals daily for any signs of tampering or skimming devices.", priority: 'High', riskLevel: 'High', proof: 'Terminal Inspection Log', location: 'POS Terminal' },
                    { id: 'SGR-CHPS-07', description: "Secure cash drops and end-of-day deposits according to a two-person integrity rule.", priority: 'High', riskLevel: 'High', proof: 'Deposit Log', location: 'Cash Office' },
                    { id: 'SGR-CHPS-08', description: "Review daily reports of voids, discounts, and 'no sale' transactions for unusual patterns.", priority: 'High', riskLevel: 'High', proof: 'Exception Report Analysis', location: 'Manager Office' },
                    { id: 'SGR-CHPS-09', description: "Ensure CCTV provides a clear, unobstructed view of all cash registers.", priority: 'High', riskLevel: 'High', proof: 'CCTV Audit', location: 'Security Office' },
                    { id: 'SGR-CHPS-10', description: "Train cashiers on how to identify and handle counterfeit currency.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Staff Room' }
                ]
            },
            {
                title: "📦 Inventory, Expiry & Replenishment",
                department: "Inventory/Floor Staff",
                frequency: "Daily/Weekly",
                role: "Inventory Manager",
                summary: "Optimize stock levels and prevent wastage with a rigorous SOP for inventory management. This checklist ensures FIFO compliance, timely replenishment, and accurate expiry tracking to protect margins.",
                tasks: [
                    { id: 'SGR-IER-01', description: "Perform daily checks in the fresh food department for items nearing their expiry date.", priority: 'High', riskLevel: 'High', proof: 'Expiry Check Log', location: 'Fresh Food Section' },
                    { id: 'SGR-IER-02', description: "Implement and audit a strict FIFO (First-In, First-Out) policy during shelf replenishment.", priority: 'High', riskLevel: 'High', proof: 'FIFO Audit Form', location: 'Sales Floor' },
                    { id: 'SGR-IER-03', description: "Generate daily replenishment reports from the POS/WMS to identify items that need restocking from the warehouse.", priority: 'High', riskLevel: 'Medium', proof: 'Replenishment Report', location: 'System' },
                    { id: 'SGR-IER-04', description: "Conduct weekly cycle counts on high-value or fast-moving product categories.", priority: 'High', riskLevel: 'High', proof: 'Cycle Count Sheets', location: 'Aisles/Warehouse' },
                    { id: 'SGR-IER-05', description: "Log all damaged, spoiled, or expired products in a wastage/shrinkage file.", priority: 'High', riskLevel: 'Medium', proof: 'Wastage Log', location: 'System' },
                    { id: 'SGR-IER-06', description: "Ensure items returned to shelves are in saleable condition.", priority: 'High', riskLevel: 'Medium', proof: 'Returns Inspection', location: 'Customer Service/Sales Floor' },
                    { id: 'SGR-IER-07', description: "Clearly mark down items approaching expiry to encourage quick sale, as per store policy.", priority: 'Medium', riskLevel: 'Low', proof: 'Markdown Log', location: 'Sales Floor' },
                    { id: 'SGR-IER-08', description: "Train staff on how to read and understand date codes (Best Before, Use By, MFD).", priority: 'High', riskLevel: 'Medium', proof: 'Training Record', location: 'Staff Room' },
                    { id: 'SGR-IER-09', description: "Review stock levels of promotional items to prevent stockouts during sale periods.", priority: 'High', riskLevel: 'Medium', proof: 'Promo Stock Report', location: 'System' },
                    { id: 'SGR-IER-10', description: "Analyze inventory turnover rates to optimize reordering.", priority: 'High', riskLevel: 'High', proof: 'Inventory Analysis Report', location: 'Office' }
                ]
            },
            {
                title: "⚖️ Legal & Metrology Compliance",
                department: "Compliance/Legal",
                frequency: "Monthly/Quarterly",
                role: "Compliance Officer",
                summary: "Ensure full compliance with all local laws, from FSSAI licensing to Legal Metrology for weights and measures. This checklist helps avoid fines and builds a foundation of legal integrity.",
                tasks: [
                    { id: 'SGR-LMC-01', description: "Verify that the store's FSSAI license is current and prominently displayed.", priority: 'High', riskLevel: 'High', proof: 'License Display Photo', location: 'Entrance' },
                    { id: 'SGR-LMC-02', description: "Check that all weighing scales are calibrated and certified by the Legal Metrology department, with stamps visible.", priority: 'High', riskLevel: 'High', proof: 'Calibration Certificate', location: 'All Weighing Stations' },
                    { id: 'SGR-LMC-03', description: "Audit a sample of pre-packaged goods to ensure they comply with packaged commodity rules (MRP, mfg date, net weight).", priority: 'High', riskLevel: 'High', proof: 'Packaging Audit Report', location: 'Sales Floor' },
                    { id: 'SGR-LMC-04', description: "Ensure compliance with the Shops & Establishments Act, including store opening/closing times and staff work hours.", priority: 'High', riskLevel: 'High', proof: 'Roster & Time Sheets', location: 'HR Office' },
                    { id: 'SGR-LMC-05', description: "Verify that all fire safety NOCs and equipment inspection certificates are up-to-date.", priority: 'High', riskLevel: 'High', proof: 'Fire Safety File', location: 'Manager Office' },
                    { id: 'SGR-LMC-06', description: "Maintain records of GST filings and other tax compliance documents.", priority: 'High', riskLevel: 'High', proof: 'Tax Filing Receipts', location: 'Accounts Office' },
                    { id: 'SGR-LMC-07', description: "Ensure the store's POSH (Prevention of Sexual Harassment) committee is constituted and policy is displayed.", priority: 'High', riskLevel: 'High', proof: 'POSH Committee List', location: 'Notice Board' },
                    { id: 'SGR-LMC-08', description: "Check that all staff are being paid at or above the minimum wage.", priority: 'High', riskLevel: 'High', proof: 'Payroll Records', location: 'HR Office' },
                    { id: 'SGR-LMC-09', description: "Review and ensure compliance with plastic and e-waste management rules.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Policy', location: 'Manager Office' },
                    { id: 'SGR-LMC-10', description: "Maintain a log of all official inspections and any corrective actions taken.", priority: 'High', riskLevel: 'High', proof: 'Inspection Logbook', location: 'Manager Office' }
                ]
            },
            {
                title: "🔒 Security & Loss Prevention",
                department: "Security",
                frequency: "Daily",
                role: "Loss Prevention Officer",
                summary: "Protect your assets and profits with a multi-layered security approach. This checklist covers everything from CCTV audits and access control to managing shrinkage from receiving to checkout.",
                tasks: [
                    { id: 'SGR-SLP-01', description: "Conduct a daily audit of all CCTV cameras to ensure they are recording and have clear, unobstructed views.", priority: 'High', riskLevel: 'High', proof: 'CCTV Audit Log', location: 'Security Room' },
                    { id: 'SGR-SLP-02', description: "Review footage of high-risk areas like cash counters, receiving docks, and high-value aisles.", priority: 'High', riskLevel: 'High', proof: 'Footage Review Log', location: 'Security Room' },
                    { id: 'SGR-SLP-03', description: "Test EAS (Electronic Article Surveillance) gates at the store entrance/exit daily.", priority: 'High', riskLevel: 'High', proof: 'EAS Test Log', location: 'Entrance' },
                    { id: 'SGR-SLP-04', description: "Ensure all back doors and delivery access points are secured and alarmed.", priority: 'High', riskLevel: 'High', proof: 'Access Control Log', location: 'Perimeter' },
                    { id: 'SGR-SLP-05', description: "Implement and audit a clear bag policy for employees exiting the store.", priority: 'Medium', riskLevel: 'Medium', proof: 'Employee Exit Check Log', location: 'Staff Exit' },
                    { id: 'SGR-SLP-06', description: "Monitor for and investigate any unusual patterns of voids, refunds, or discounts at the POS.", priority: 'High', riskLevel: 'High', proof: 'POS Exception Report', location: 'Manager Office' },
                    { id: 'SGR-SLP-07', description: "Conduct visible security patrols in high-theft areas.", priority: 'High', riskLevel: 'Medium', proof: 'Patrol Log', location: 'Sales Floor' },
                    { id: 'SGR-SLP-08', description: "Train staff on how to identify and report suspicious behavior or potential theft.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Staff Room' },
                    { id: 'SGR-SLP-09', description: "Maintain an incident log for all security-related events, including theft, altercations, and accidents.", priority: 'High', riskLevel: 'High', proof: 'Incident Logbook', location: 'Security Office' },
                    { id: 'SGR-SLP-10', description: "Secure high-value items in locked displays or with security tags.", priority: 'High', riskLevel: 'High', proof: 'High-Value Item Audit', location: 'Sales Floor' }
                ]
            },
            {
                title: "🧑‍🍳 In-Store Food Outlet Management",
                department: "F&B/Operations",
                frequency: "Daily",
                role: "Food Court Manager",
                summary: "Manage the unique risks of in-store food courts or bakeries. This checklist ensures third-party vendors and internal food outlets adhere to strict hygiene, safety, and FSSAI standards.",
                tasks: [
                    { id: 'SGR-IFO-01', description: "Verify FSSAI licenses for all food vendors are valid and displayed.", priority: 'High', riskLevel: 'High', proof: 'License Check Log', location: 'Food Court' },
                    { id: 'SGR-IFO-02', description: "Conduct a daily hygiene inspection of each food stall, checking for cleanliness, proper food handling, and staff hygiene.", priority: 'High', riskLevel: 'High', proof: 'Hygiene Inspection Form', location: 'Food Court' },
                    { id: 'SGR-IFO-03', description: "Check and log temperatures of all food holding units (hot and cold) at each stall.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Food Court' },
                    { id: 'SGR-IFO-04', description: "Ensure each vendor has a functional fire extinguisher (Class K) and staff know how to use it.", priority: 'High', riskLevel: 'High', proof: 'Fire Safety Audit', location: 'Food Court' },
                    { id: 'SGR-IFO-05', description: "Check gas lines and electrical connections for all vendor equipment for safety.", priority: 'High', riskLevel: 'High', proof: 'Utility Safety Check', location: 'Food Court' },
                    { id: 'SGR-IFO-06', description: "Verify that vendors are using approved water sources and have RO systems serviced.", priority: 'High', riskLevel: 'High', proof: 'Water Source Verification', location: 'Food Court' },
                    { id: 'SGR-IFO-07', description: "Ensure proper waste segregation and disposal procedures are being followed by all vendors.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Audit', location: 'Food Court' },
                    { id: 'SGR-IFO-08', description: "Check for correct allergen information display at each food stall.", priority: 'High', riskLevel: 'High', proof: 'Allergen Info Audit', location: 'Food Court' },
                    { id: 'SGR-IFO-09', description: "Review customer complaints related to food court vendors and take corrective action.", priority: 'High', riskLevel: 'High', proof: 'Complaint Log', location: 'Manager Office' },
                    { id: 'SGR-IFO-10', description: "Hold a weekly coordination meeting with all food court vendors to discuss safety and operational issues.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Manager Office' }
                ]
            },
            {
                title: "🌱 Sustainability & Waste Management",
                department: "Facilities/Compliance",
                frequency: "Monthly",
                role: "Sustainability Officer",
                summary: "Meet regulatory requirements and improve your brand's green credentials. This checklist provides a framework for managing plastic, e-waste, and organic waste in compliance with Indian laws.",
                tasks: [
                    { id: 'SGR-SWM-01', description: "Audit waste streams to measure the percentage of plastic, organic, and e-waste being generated.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Audit Report', location: 'Waste Area' },
                    { id: 'SGR-SWM-02', description: "Ensure compliance with Plastic Waste Management Rules, including use of approved carry bags.", priority: 'High', riskLevel: 'High', proof: 'Compliance Certificate', location: 'Checkout' },
                    { id: 'SGR-SWM-03', description: "Maintain a log for e-waste collection and ensure it is handed over to a certified recycler.", priority: 'High', riskLevel: 'High', proof: 'E-Waste Manifest', location: 'Manager Office' },
                    { id: 'SGR-SWM-04', description: "Implement and monitor an in-store composting program or a partnership for managing organic waste.", priority: 'High', riskLevel: 'Medium', proof: 'Organic Waste Log', location: 'Waste Area' },
                    { id: 'SGR-SWM-05', description: "Track and report on energy and water consumption, and set reduction targets.", priority: 'High', riskLevel: 'Medium', proof: 'Utility Consumption Report', location: 'Manager Office' },
                    { id: 'SGR-SWM-06', description: "Train staff on proper waste segregation at source.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Staff Room' },
                    { id: 'SGR-SWM-07', description: "Explore opportunities to reduce packaging from suppliers.", priority: 'Medium', riskLevel: 'Low', proof: 'Supplier Communication', location: 'Procurement Office' },
                    { id: 'SGR-SWM-08', description: "Ensure all waste management vendors are certified and compliant.", priority: 'High', riskLevel: 'High', proof: 'Vendor Compliance File', location: 'Manager Office' },
                    { id: 'SGR-SWM-09', description: "Set up collection points for customers to drop off e-waste or plastic waste.", priority: 'Medium', riskLevel: 'Low', proof: 'In-store Signage', location: 'Entrance' },
                    { id: 'SGR-SWM-10', description: "Prepare and file annual environmental compliance reports as required.", priority: 'High', riskLevel: 'High', proof: 'Filed Report', location: 'Compliance Office' }
                ]
            },
            {
                title: "✅ Daily Store Readiness & Audit",
                department: "Operations",
                frequency: "Daily",
                role: "Store Manager",
                summary: "A master checklist for store managers to conduct a comprehensive daily walkthrough. It ensures the entire store is safe, compliant, and ready for business, covering key points from all departments.",
                tasks: [
                    { id: 'SGR-DSRA-01', description: "Verify all department opening checklists have been completed and signed off.", priority: 'High', riskLevel: 'High', proof: 'Signed Checklists', location: 'Manager Office' },
                    { id: 'SGR-DSRA-02', description: "Conduct a full walk of the sales floor, checking for cleanliness, safety hazards, and planogram compliance.", priority: 'High', riskLevel: 'High', proof: 'Manager Walkthrough Log', location: 'Sales Floor' },
                    { id: 'SGR-DSRA-03', description: "Review previous day's sales reports and current day's targets.", priority: 'High', riskLevel: 'Medium', proof: 'Sales Report', location: 'Manager Office' },
                    { id: 'SGR-DSRA-04', description: "Check that all staff are present, correctly rostered, and in proper uniform.", priority: 'High', riskLevel: 'Medium', proof: 'Roster Sheet', location: 'Staff Room' },
                    { id: 'SGR-DSRA-05', description: "Review any overnight security or maintenance incident reports.", priority: 'High', riskLevel: 'High', proof: 'Incident Logs', location: 'Manager Office' },
                    { id: 'SGR-DSRA-06', description: "Spot-check temperatures in one random cold storage unit.", priority: 'High', riskLevel: 'High', proof: 'Spot Check Log', location: 'Cold Storage' },
                    { id: 'SGR-DSRA-07', description: "Spot-check one aisle for expiry dates and FIFO compliance.", priority: 'High', riskLevel: 'High', proof: 'Spot Check Log', location: 'Sales Floor' },
                    { id: 'SGR-DSRA-08', description: "Hold a daily morning huddle with all department heads.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Notes', location: 'Manager Office' },
                    { id: 'SGR-DSRA-09', description: "Ensure the store's external appearance is clean and welcoming.", priority: 'High', riskLevel: 'Low', proof: 'Visual Inspection', location: 'Exterior' },
                    { id: 'SGR-DSRA-10', description: "Sign off on the store's readiness for business, officially opening for the day.", priority: 'High', riskLevel: 'High', proof: 'Master Readiness Log', location: 'Manager Office' }
                ]
            }
        ]
    },
    {
        id: 'electronics_showroom_pack',
        title: "Electronics Showroom Operations",
        priceUSD: 99.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "A comprehensive SOP toolkit for managing retail electronics showrooms, focusing on inventory, customer experience, and operational compliance.",
        icon: <Tv className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Store Managers", "Regional Managers", "GMs", "VPs of Retail", "Directors of Operations", "COOs"],
        sampleItems: [
            { text: "Standardize Store Opening & Closing procedures for security and readiness.", icon: <DoorClosed /> },
            { text: "Implement robust Inventory & Stock Management to prevent shrinkage.", icon: <Barcode /> },
            { text: "Ensure perfect Product Display & Visual Merchandising compliance.", icon: <GalleryVertical /> },
            { text: "Master secure Cash & Payment Handling with PCI DSS standards.", icon: <Banknote /> }
        ],
        previewScenario: {
            title: "Launching a New Flagship Phone",
            description: "It's launch day for a highly anticipated smartphone. This scenario shows how checklists for Inventory, Visual Merchandising, and Customer Experience come together for a flawless and high-impact launch day.",
            tasks: [
                { id: 'ELEC-INV-01', description: "Conduct a cycle count of the new phone SKU to ensure inventory is 100% accurate before doors open.", sourceChecklist: "Inventory & Stock Management", priority: 'High' },
                { id: 'ELEC-VM-02', description: "Ensure all demo units of the new phone are functional, charged, and running the latest software.", sourceChecklist: "Product Display & Visual Merchandising", priority: 'High' },
                { id: 'ELEC-CUST-02', description: "Ensure all sales staff have completed product training on the new phone's key features.", sourceChecklist: "Customer Experience & Store Standards", priority: 'High' },
                { id: 'ELEC-CASH-01', description: "Verify POS systems are updated with the correct pricing and promotional bundles for the new phone.", sourceChecklist: "Cash & Payment Handling", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global Retail & Electronics Standards",
            standards: [
                { name: "Quality & Process Control", description: "ISO 9001" },
                { name: "Environmental & Sustainability", description: "ISO 14001, ESG" },
                { name: "Safety & Workforce Protection", description: "ISO 45001, OSHA" },
                { name: "Data & Privacy", description: "ISO 27001, GDPR" },
                { name: "Payment Security", description: "PCI DSS" },
                { name: "Accessibility", description: "WCAG 2.1 (for digital in-store kiosks)" },
            ]
        },
        checklists: [
            {
                title: "Store Operations & Compliance",
                department: "Operations",
                frequency: "Daily",
                role: "Store Manager",
                summary: "Ensure smooth, secure, and compliant daily store operations with core checklists for readiness, security, and system checks.",
                tasks: [
                    { id: 'ELEC-OPEN-01', description: "Verify store cleanliness, lighting, HVAC systems are optimal.", priority: 'High', riskLevel: 'Medium', proof: 'Opening Log', location: 'Store-wide' },
                    { id: 'ELEC-OPEN-02', description: "Check security systems (CCTV, alarms) are operational.", priority: 'High', riskLevel: 'High', proof: 'Security System Log', location: 'Security Room' },
                    { id: 'ELEC-OPEN-03', description: "Verify cash registers & POS terminals are functional.", priority: 'High', riskLevel: 'High', proof: 'POS Readiness Log', location: 'Cash Counters' },
                    { id: 'ELEC-OPEN-04', description: "Conduct product display readiness check (all demos on, clean).", priority: 'High', riskLevel: 'Medium', proof: 'Display Audit', location: 'Sales Floor' },
                    { id: 'ELEC-OPEN-05', description: "Lock/unlock entry points & log timings.", priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Entrances' },
                    { id: 'ELEC-OPEN-06', description: "Ensure staff are in uniform and ready for service.", priority: 'High', riskLevel: 'Low', proof: 'Staff Roster', location: 'Staff Room' },
                    { id: 'ELEC-OPEN-07', description: "Review daily sales targets and promotions with staff.", priority: 'High', riskLevel: 'Medium', proof: 'Morning Huddle Notes', location: 'Staff Room' },
                    { id: 'ELEC-OPEN-08', description: "Check that all marketing materials are correctly displayed.", priority: 'Medium', riskLevel: 'Low', proof: 'Marketing Material Audit', location: 'Sales Floor' },
                    { id: 'ELEC-OPEN-09', description: "Ensure restrooms are clean and stocked.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Cleaning Log', location: 'Restrooms' },
                    { id: 'ELEC-OPEN-10', description: "Final walkthrough of the store before opening to the public.", priority: 'High', riskLevel: 'High', proof: 'Manager Sign-off', location: 'Store-wide' }
                ]
            },
            {
                title: "Inventory & Stock Management",
                department: "Inventory",
                frequency: "Daily/Weekly",
                role: "Inventory Manager",
                summary: "Achieve precise inventory control. This checklist helps you maintain optimal stock levels, prevent shrinkage through daily cycle counts, and ensure data accuracy.",
                tasks: [
                    { id: 'ELEC-INV-01', description: "Conduct daily cycle counts on high-value items.", priority: 'High', riskLevel: 'High', proof: 'Cycle Count Sheet', location: 'Warehouse/Sales Floor' },
                    { id: 'ELEC-INV-02', description: "Update ERP/POS systems with new stock arrivals.", priority: 'High', riskLevel: 'High', proof: 'ERP Update Log', location: 'System' },
                    { id: 'ELEC-INV-03', description: "Verify and log all damaged or returned goods.", priority: 'High', riskLevel: 'Medium', proof: 'Damage/Return Log', location: 'Returns Desk' },
                    { id: 'ELEC-INV-04', description: "Ensure safe handling and storage of high-value electronics.", priority: 'High', riskLevel: 'High', proof: 'Storage Audit Log', location: 'Secure Storage' },
                    { id: 'ELEC-INV-05', description: "Review reorder levels and supplier performance reports weekly.", priority: 'High', riskLevel: 'Medium', proof: 'Supplier Report', location: 'Office' },
                    { id: 'ELEC-INV-06', description: "Investigate and resolve any inventory discrepancies.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Office' },
                    { id: 'ELEC-INV-07', description: "Manage the process for inter-store transfers.", priority: 'Medium', riskLevel: 'Medium', proof: 'Transfer Log', location: 'System' },
                    { id: 'ELEC-INV-08', description: "Perform a full physical inventory count quarterly.", priority: 'High', riskLevel: 'High', proof: 'Physical Inventory Report', location: 'Entire Store' },
                    { id: 'ELEC-INV-09', description: "Ensure all items are properly tagged with security devices.", priority: 'High', riskLevel: 'High', proof: 'Security Tag Audit', location: 'Sales Floor' },
                    { id: 'ELEC-INV-10', description: "Train staff on proper stock handling and inventory procedures.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' }
                ]
            },
            {
                title: "Product Display & Visual Merchandising",
                department: "Merchandising",
                frequency: "Daily",
                role: "Visual Merchandiser",
                summary: "Create a compelling and consistent brand presentation. This checklist ensures all demo units are functional, displays are perfect, and pricing is accurate.",
                tasks: [
                    { id: 'ELEC-VM-01', description: "Verify planogram adherence for all brands.", priority: 'High', riskLevel: 'Medium', proof: 'Planogram Compliance Photo', location: 'Sales Floor' },
                    { id: 'ELEC-VM-02', description: "Ensure all demo units are functional, charged, and running correct software.", priority: 'High', riskLevel: 'High', proof: 'Demo Unit Checklist', location: 'Sales Floor' },
                    { id: 'ELEC-VM-03', description: "Check product pricing labels and promotional offers for accuracy.", priority: 'High', riskLevel: 'High', proof: 'Price Audit Sheet', location: 'Sales Floor' },
                    { id: 'ELEC-VM-04', description: "Inspect lighting and signage for proper alignment and function.", priority: 'High', riskLevel: 'Medium', proof: 'Lighting Inspection Log', location: 'Sales Floor' },
                    { id: 'ELEC-VM-05', description: "Clean screens and surfaces of all display devices.", priority: 'High', riskLevel: 'Low', proof: 'Cleaning Log', location: 'Sales Floor' },
                    { id: 'ELEC-VM-06', description: "Ensure all products are clean and free of dust.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'ELEC-VM-07', description: "Check that all security tethers and alarms are correctly attached to demo units.", priority: 'High', riskLevel: 'High', proof: 'Security Device Audit', location: 'Sales Floor' },
                    { id: 'ELEC-VM-08', description: "Update displays with new products or promotions as required.", priority: 'High', riskLevel: 'Medium', proof: 'VM Update Log', location: 'Sales Floor' },
                    { id: 'ELEC-VM-09', description: "Ensure all marketing materials are current and in good condition.", priority: 'High', riskLevel: 'Low', proof: 'Marketing Material Audit', location: 'Sales Floor' },
                    { id: 'ELEC-VM-10', description: "Take photos of key displays to share with management.", priority: 'Medium', riskLevel: 'Low', proof: 'Photo Log', location: 'Sales Floor' }
                ]
            },
            {
                title: "Cash & Payment Handling",
                department: "Finance",
                frequency: "Per Shift",
                role: "Head Cashier",
                summary: "Safeguard your revenue with secure and compliant payment operations. This protocol prevents fraud, ensures accurate reconciliation, and adheres to PCI DSS standards.",
                tasks: [
                    { id: 'ELEC-CASH-01', description: "Calibrate POS and verify payment gateway functionality.", priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'POS Terminal' },
                    { id: 'ELEC-CASH-02', description: "Verify cash drawer balance before and after each shift.", priority: 'High', riskLevel: 'High', proof: 'Cash Reconciliation Sheet', location: 'Cash Office' },
                    { id: 'ELEC-CASH-03', description: "Reconcile all credit card and digital payment transactions daily.", priority: 'High', riskLevel: 'High', proof: 'Payment Gateway Report', location: 'Cash Office' },
                    { id: 'ELEC-CASH-04', description: "Secure cash transfers to vault or bank drop box with two-person integrity.", priority: 'High', riskLevel: 'High', proof: 'Cash Transfer Log', location: 'Cash Office' },
                    { id: 'ELEC-CASH-05', description: "Log all refunds and cancellations with manager approval.", priority: 'High', riskLevel: 'Medium', proof: 'Refund Log', location: 'POS Terminal' },
                    { id: 'ELEC-CASH-06', description: "Ensure all payment terminals are PCI DSS compliant.", priority: 'High', riskLevel: 'High', proof: 'Compliance Certificate', location: 'IT Office' },
                    { id: 'ELEC-CASH-07', description: "Train cashiers on handling fraudulent transactions and counterfeit currency.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'ELEC-CASH-08', description: "Implement a clear process for handling chargebacks.", priority: 'High', riskLevel: 'High', proof: 'Chargeback Policy', location: 'Office' },
                    { id: 'ELEC-CASH-09', description: "Regularly audit cash handling procedures.", priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'Office' },
                    { id: 'ELEC-CASH-10', description: "Ensure CCTV coverage of all cash handling areas.", priority: 'High', riskLevel: 'High', proof: 'CCTV Check', location: 'Security Room' }
                ]
            },
            {
                title: "Store Safety & Maintenance",
                department: "Facilities/EHS",
                frequency: "Weekly",
                role: "Safety Officer",
                summary: "Create a safe and reliable environment for staff and customers. This checklist covers regular maintenance of electrical, fire, and safety systems to prevent accidents.",
                tasks: [
                    { id: 'ELEC-SAFETY-01', description: "Inspect electrical fittings and display power points for signs of wear or damage.", priority: 'High', riskLevel: 'High', proof: 'Electrical Inspection Report', location: 'Store-wide' },
                    { id: 'ELEC-SAFETY-02', description: "Verify fire extinguishers are charged, accessible, and emergency exits are clear.", priority: 'High', riskLevel: 'High', proof: 'Fire Safety Log', location: 'Store-wide' },
                    { id: 'ELEC-SAFETY-03', description: "Record maintenance of air conditioning, lighting, and digital signage.", priority: 'Medium', riskLevel: 'Low', proof: 'Maintenance Log', location: 'Facilities Office' },
                    { id: 'ELEC-SAFETY-04', description: "Check safe storage of cleaning chemicals and other hazardous materials.", priority: 'High', riskLevel: 'Medium', proof: 'Chemical Storage Log', location: 'Storeroom' },
                    { id: 'ELEC-SAFETY-05', description: "Conduct a weekly safety briefing with all staff.", priority: 'High', riskLevel: 'Medium', proof: 'Safety Meeting Minutes', location: 'Staff Room' },
                    { id: 'ELEC-SAFETY-06', description: "Test all emergency lighting.", priority: 'High', riskLevel: 'High', proof: 'Emergency Light Test', location: 'Store-wide' },
                    { id: 'ELEC-SAFETY-07', description: "Ensure all staff are trained in emergency evacuation procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'ELEC-SAFETY-08', description: "Check that all flooring is in good condition and free of trip hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Floor Inspection', location: 'Store-wide' },
                    { id: 'ELEC-SAFETY-09', description: "Verify that first aid kits are stocked and accessible.", priority: 'High', riskLevel: 'High', proof: 'First Aid Kit Log', location: 'Store-wide' },
                    { id: 'ELEC-SAFETY-10', description: "Review and update the store's health and safety policy annually.", priority: 'High', riskLevel: 'High', proof: 'Policy Review Minutes', location: 'Office' }
                ]
            },
            {
                title: "Customer Experience & Store Standards",
                department: "Sales",
                frequency: "Ongoing",
                role: "Sales Manager",
                summary: "Deliver a consistently excellent customer experience. These checklists ensure every interaction, from greeting to checkout, is professional, efficient, and brand-aligned.",
                tasks: [
                    { id: 'ELEC-CUST-01', description: "Greet customers within 30 seconds of entry.", priority: 'High', riskLevel: 'Low', proof: 'Manager Observation', location: 'Entrance' },
                    { id: 'ELEC-CUST-02', description: "Ensure staff are trained on key product SKUs and features.", priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
                    { id: 'ELEC-CUST-03', description: "Confirm all items are scanned correctly and discounts applied at checkout.", priority: 'High', riskLevel: 'Medium', proof: 'Checkout Audit', location: 'POS' },
                    { id: 'ELEC-CUST-04', description: "Handle returns and warranty claims transparently and efficiently.", priority: 'High', riskLevel: 'Medium', proof: 'Returns Log', location: 'Customer Service' },
                    { id: 'ELEC-CUST-05', description: "Protect customer data under global privacy laws during transactions.", priority: 'High', riskLevel: 'High', proof: 'Privacy Compliance Audit', location: 'POS' },
                    { id: 'ELEC-CUST-06', description: "Offer expert advice and product demonstrations to customers.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Observation', location: 'Sales Floor' },
                    { id: 'ELEC-CUST-07', description: "Maintain a clean and professional appearance at all times.", priority: 'High', riskLevel: 'Low', proof: 'Grooming Standard Check', location: 'Staff Room' },
                    { id: 'ELEC-CUST-08', description: "Follow up with customers after a sale to ensure satisfaction.", priority: 'Medium', riskLevel: 'Low', proof: 'Follow-up Log', location: 'System' },
                    { id: 'ELEC-CUST-09', description: "Handle customer complaints with empathy and resolve them promptly.", priority: 'High', riskLevel: 'High', proof: 'Complaint Resolution Log', location: 'Customer Service' },
                    { id: 'ELEC-CUST-10', description: "Collect customer feedback to identify areas for improvement.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Survey Results', location: 'Office' }
                ]
            },
             {
                title: "Vendor & Supplier Management",
                department: "Procurement",
                frequency: "Quarterly",
                role: "Procurement Manager",
                summary: "Ensure your suppliers meet your standards for quality, delivery, and compliance. This checklist helps you manage vendor relationships effectively.",
                tasks: [
                    { id: 'ELEC-VENDOR-01', description: "Review vendor performance against SLAs.", priority: 'High', riskLevel: 'Medium', proof: 'Performance Report', location: 'Office' },
                    { id: 'ELEC-VENDOR-02', description: "Conduct regular business reviews with key suppliers.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Office' },
                    { id: 'ELEC-VENDOR-03', description: "Audit vendor invoices for accuracy.", priority: 'High', riskLevel: 'High', proof: 'Invoice Audit Report', location: 'Office' },
                    { id: 'ELEC-VENDOR-04', description: "Negotiate pricing and terms for new contracts.", priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'Office' },
                    { id: 'ELEC-VENDOR-05', description: "Ensure vendors comply with all legal and ethical standards.", priority: 'High', riskLevel: 'High', proof: 'Compliance Audit', location: 'Office' },
                    { id: 'ELEC-VENDOR-06', description: "Manage a preferred vendor list.", priority: 'Medium', riskLevel: 'Low', proof: 'Vendor List', location: 'Office' },
                    { id: 'ELEC-VENDOR-07', description: "Resolve any disputes with vendors promptly.", priority: 'High', riskLevel: 'High', proof: 'Dispute Resolution Log', location: 'Office' },
                    { id: 'ELEC-VENDOR-08', description: "Assess vendor risk and have contingency plans.", priority: 'High', riskLevel: 'High', proof: 'Risk Assessment Report', location: 'Office' },
                    { id: 'ELEC-VENDOR-09', description: "Scout for new and alternative suppliers.", priority: 'Medium', riskLevel: 'Low', proof: 'Supplier Scouting Report', location: 'Office' },
                    { id: 'ELEC-VENDOR-10', description: "Maintain strong relationships with key suppliers.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Office' }
                ]
            },
            {
                title: "E-Waste Management & Compliance",
                department: "Compliance",
                frequency: "Monthly",
                role: "Compliance Officer",
                summary: "Ensure your showroom complies with all e-waste regulations, protecting the environment and avoiding fines. This checklist covers the collection, storage, and disposal of electronic waste.",
                tasks: [
                    { id: 'ELEC-EWASTE-01', description: "Ensure designated collection bins for e-waste are available and clearly labeled.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Store-wide' },
                    { id: 'ELEC-EWASTE-02', description: "Train staff on the correct procedures for handling and segregating e-waste.", priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
                    { id: 'ELEC-EWASTE-03', description: "Arrange for regular pickups with a certified e-waste recycling vendor.", priority: 'High', riskLevel: 'High', proof: 'Pickup Schedule', location: 'Office' },
                    { id: 'ELEC-EWASTE-04', description: "Maintain all necessary documentation, including collection receipts and disposal certificates.", priority: 'High', riskLevel: 'High', proof: 'E-waste Logbook', location: 'Office' },
                    { id: 'ELEC-EWASTE-05', description: "Store e-waste in a designated, secure area away from new products and customer areas.", priority: 'High', riskLevel: 'High', proof: 'Storage Area Inspection', location: 'Storage' },
                    { id: 'ELEC-EWASTE-06', description: "Ensure compliance with the E-Waste (Management) Rules, 2022.", priority: 'High', riskLevel: 'High', proof: 'Compliance Audit Report', location: 'Office' },
                    { id: 'ELEC-EWASTE-07', description: "Educate customers about the e-waste collection program.", priority: 'Medium', riskLevel: 'Low', proof: 'In-store Signage', location: 'Store-wide' },
                    { id: 'ELEC-EWASTE-08', description: "Review and update the e-waste management policy annually.", priority: 'High', riskLevel: 'Medium', proof: 'Policy Document', location: 'Office' },
                    { id: 'ELEC-EWASTE-09', description: "Track the volume of e-waste collected and report on targets.", priority: 'Medium', riskLevel: 'Low', proof: 'E-waste Report', location: 'Office' },
                    { id: 'ELEC-EWASTE-10', description: "Ensure the recycling vendor provides certificates of destruction for data-bearing devices.", priority: 'High', riskLevel: 'High', proof: 'Certificates of Destruction', location: 'Office' }
                ]
            },
            {
                title: "🏢 EBO Operations Checklist",
                department: "Retail Operations",
                frequency: "Daily/Weekly",
                role: "Store Manager",
                summary: "Run your Exclusive Brand Outlet to perfection. This checklist covers brand compliance, sales training, and inventory management specific to an EBO environment.",
                tasks: [
                    { id: 'EBO-VM-01', description: "Ensure all visual merchandising and product displays strictly adhere to the parent brand's guidelines.", priority: 'High', riskLevel: 'High', proof: 'VM Guideline Check', location: 'Sales Floor' },
                    { id: 'EBO-TRAIN-02', description: "Conduct weekly training on brand story, product features, and the target customer profile.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Staff Room' },
                    { id: 'EBO-INV-03', description: "Report daily sales and inventory data to the parent company using the specified format/portal.", priority: 'High', riskLevel: 'High', proof: 'System Report', location: 'Office' },
                    { id: 'EBO-CUST-04', description: "Audit the customer experience to ensure it aligns with the luxury/premium positioning of the brand.", priority: 'High', riskLevel: 'Medium', proof: 'Experience Audit', location: 'Sales Floor' },
                    { id: 'EBO-MAINT-05', description: "Verify that all store fixtures, furniture, and lighting meet the brand's quality standards and are in perfect condition.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Entire Store' }
                ]
            }
        ]
    },
    // --- Corporate & Tech ---
    {
        id: 'facility_management_blueprint',
        title: "Facility Management Pack (Enterprise Edition)",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Corporate & Tech",
        description: "An enterprise-grade toolkit for COOs and Heads of Corporate Real Estate to manage large-scale facilities like IT campuses, business parks, and corporate offices.",
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        badgeText: "Enterprise Grade",
        bestseller: true,
        whoIsItFor: ["COOs", "Heads of Corporate Real Estate", "Directors of Facilities", "VPs of Administration", "Data Center Managers"],
        sampleItems: [
            { text: "NEW: Includes a 'Data Center Cooling & HVAC' checklist aligned with ASHRAE standards.", icon: <Thermometer /> },
            { text: "Implement a 'Redundancy System Testing SOP' for power and data to prevent downtime.", icon: <DatabaseZap /> },
            { text: "Manage high-stakes vendors with a 'Critical Vendor QBR' protocol.", icon: <Users /> },
            { text: "Ensure compliance with ISO 45001, ISO 41001, and the National Building Code (NBC).", icon: <FileCheck /> }
        ],
        previewScenario: {
            title: "Averting a Data Center Catastrophe",
            description: "A major IT campus in Bengaluru faced a multi-crore loss when an HVAC unit failed, threatening to overheat a critical data center. This scenario shows how our checklists prevent this.",
            tasks: [
                { id: 'MAINT-01', description: "A weekly 'Preventive Maintenance' check identifies a potential fault in a primary HVAC chiller unit during a load test.", sourceChecklist: "MEP & Preventive Maintenance", priority: 'High' },
                { id: 'TSC-01', description: "As the primary unit is taken offline for repair, the 'Redundancy System Testing' SOP ensures a seamless, automatic switch to the backup chiller with no temperature fluctuation.", sourceChecklist: "Critical Systems & Redundancy Testing", priority: 'High' },
                { id: 'MAINT-05', description: "Real-time 'IoT Monitoring' alerts confirm that temperatures in the data center remain stable throughout the switchover.", sourceChecklist: "Smart Building & IoT Management", priority: 'High' },
                { id: 'INC-REP-01', description: "The entire event—from fault detection to resolution—is logged in the 'Facility Downtime Log', providing a clear audit trail for compliance and future planning.", sourceChecklist: "Incident Reporting & Management", priority: 'Medium' }
            ]
        },
        globalStandards: {
            title: "Built on Global & Indian Enterprise Standards",
            standards: [
                { name: "Safety & EHS (ISO 45001)", description: "Ensures occupational health, safety, and a risk-free work environment." },
                { name: "Facility Management (ISO 41001)", description: "Adheres to the global standard for strategic facility management and operational efficiency." },
                { name: "Fire & Life Safety (NFPA / NBC)", description: "Complies with the National Fire Protection Association (US) and National Building Code of India." },
                { name: "Energy & Environment (ISO 14001)", description: "Manages energy consumption and environmental impact, supporting ESG goals." }
            ]
        },
        checklists: [
             {
                title: "🏢 Office Operations & Employee Experience",
                department: "Administration",
                frequency: "Daily",
                role: "Office Manager",
                summary: "Ensure a seamless and productive work environment with daily checks for cleanliness, supplies, and front desk readiness.",
                tasks: [
                    { id: 'ADMIN-OO-01', description: "Conduct a morning walkthrough to ensure office cleanliness and readiness.", priority: 'High', riskLevel: 'Medium', proof: 'Walkthrough Log', location: 'Entire Office' },
                    { id: 'ADMIN-OO-02', description: "Check and restock pantry and coffee machine supplies.", priority: 'High', riskLevel: 'Low', proof: 'Supply Check Log', location: 'Pantry' },
                    { id: 'ADMIN-OO-03', description: "Verify meeting rooms are clean, tidy, and all equipment is functional.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Room Checklist', location: 'Meeting Rooms' },
                    { id: 'ADMIN-OO-04', description: "Manage mail, couriers, and deliveries.", priority: 'High', riskLevel: 'Medium', proof: 'Courier Log', location: 'Front Desk' },
                    { id: 'ADMIN-OO-05', description: "Handle employee requests for stationery and other office supplies.", priority: 'Medium', riskLevel: 'Low', proof: 'Request Log', location: 'Front Desk' }
                ]
            },
            {
                title: "🤝 Front Desk & Visitor Management",
                department: "Administration/Security",
                frequency: "Ongoing",
                role: "Receptionist",
                summary: "Create a professional first impression and maintain security with a robust system for managing visitors, calls, and access.",
                tasks: [
                    { id: 'ADMIN-FD-01', description: "Register all visitors and issue temporary access cards/badges.", priority: 'High', riskLevel: 'High', proof: 'Visitor Log', location: 'Front Desk' },
                    { id: 'ADMIN-FD-02', description: "Answer and route all incoming calls professionally.", priority: 'High', riskLevel: 'Medium', proof: 'Call Log (if applicable)', location: 'Front Desk' },
                    { id: 'ADMIN-FD-03', description: "Ensure the reception area is always clean and presentable.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Reception' },
                    { id: 'ADMIN-FD-04', description: "Inform employees of their visitor's arrival.", priority: 'High', riskLevel: 'Low', proof: 'Communication Log', location: 'Front Desk' },
                    { id: 'ADMIN-FD-05', description: "Collect and log all access cards from departing visitors.", priority: 'High', riskLevel: 'High', proof: 'Visitor Log Sign-out', location: 'Front Desk' }
                ]
            },
            {
                title: "🔧 MEP & Preventive Maintenance",
                department: "Facilities/Maintenance",
                frequency: "Weekly/Monthly",
                role: "Maintenance Supervisor",
                summary: "Prevent costly breakdowns and ensure business continuity with a proactive maintenance schedule for all critical Mechanical, Electrical, and Plumbing (MEP) systems.",
                tasks: [
                    { id: 'ADMIN-MEP-01', description: "Perform weekly checks on HVAC systems, including filters and thermostat settings.", priority: 'High', riskLevel: 'High', proof: 'HVAC Log', location: 'MEP Rooms' },
                    { id: 'ADMIN-MEP-02', description: "Test backup generators and UPS systems weekly under load.", priority: 'High', riskLevel: 'High', proof: 'Generator Test Log', location: 'MEP Rooms' },
                    { id: 'ADMIN-MEP-03', description: "Inspect plumbing systems for leaks and check water pressure.", priority: 'High', riskLevel: 'Medium', proof: 'Plumbing Inspection Log', location: 'Restrooms/Pantry' },
                    { id: 'ADMIN-MEP-04', description: "Conduct monthly electrical inspections of panels, wiring, and outlets.", priority: 'High', riskLevel: 'High', proof: 'Electrical Inspection Report', location: 'Electrical Rooms' },
                    { id: 'ADMIN-MEP-05', description: "Maintain a log of all maintenance activities and service records for all equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Master Maintenance Log', location: 'Facilities Office' }
                ]
            },
            {
                title: "🔥 Fire & Life Safety Compliance",
                department: "EHS/Security",
                frequency: "Monthly",
                role: "Safety Officer",
                summary: "Ensure your facility is compliant with fire safety codes and prepared for any emergency with rigorous checks of all fire prevention and response systems.",
                tasks: [
                    { id: 'ADMIN-FLS-01', description: "Inspect all fire extinguishers for expiry, pressure, and accessibility.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Log', location: 'Entire Office' },
                    { id: 'ADMIN-FLS-02', description: "Test fire alarms, smoke detectors, and sprinkler systems.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Entire Office' },
                    { id: 'ADMIN-FLS-03', description: "Ensure all emergency exit routes and doors are unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Exit Path Audit', location: 'Entire Office' },
                    { id: 'ADMIN-FLS-04', description: "Conduct quarterly fire evacuation drills and log participation.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Entire Office' },
                    { id: 'ADMIN-FLS-05', description: "Verify that all fire safety certificates and NOCs are current.", priority: 'High', riskLevel: 'High', proof: 'Compliance File', location: 'Admin Office' }
                ]
            },
             {
                title: "💡 Energy Management & Sustainability (ESG)",
                department: "Facilities",
                frequency: "Monthly",
                role: "Facility Manager",
                summary: "Reduce operational costs and improve your company's ESG score with a checklist focused on optimizing energy and water consumption and managing waste.",
                tasks: [
                    { id: 'ADMIN-ESG-01', description: "Audit energy consumption data and identify areas for reduction.", priority: 'High', riskLevel: 'Medium', proof: 'Energy Audit Report', location: 'Office' },
                    { id: 'ADMIN-ESG-02', description: "Implement and monitor a waste segregation and recycling program.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Log', location: 'Waste Area' },
                    { id: 'ADMIN-ESG-03', description: "Check for water leakages and promote water conservation.", priority: 'High', riskLevel: 'Medium', proof: 'Water Audit', location: 'Restrooms/Pantry' },
                    { id: 'ADMIN-ESG-04', description: "Promote sustainable procurement of office supplies.", priority: 'Medium', riskLevel: 'Low', proof: 'Procurement Policy', location: 'Office' },
                    { id: 'ADMIN-ESG-05', description: "Track and report on sustainability KPIs.", priority: 'High', riskLevel: 'Medium', proof: 'Sustainability Report', location: 'Office' }
                ]
            },
        ]
    },
    {
        id: 'corporate_legal_compliance_starter_kit',
        title: "Corporate Legal & Compliance Starter Kit",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Corporate & Tech",
        description: "An essential toolkit for founders and managers to embed basic legal and compliance checks into core business operations, reducing risk without needing a law degree.",
        icon: <FileLock className="w-8 h-8 text-primary" />,
        whoIsItFor: ["Founders & CEOs", "HR Managers", "Operations Heads", "Non-lawyer Managers", "Directors"],
        sampleItems: [
            { text: "Legally sound 'New Employee Onboarding' checklist to prevent future disputes.", icon: <Briefcase /> },
            { text: "A simple 'Vendor Contract Review' guide for non-lawyers.", icon: <FileCheck /> },
            { text: "Ensure your 'Website Legal Health' (Privacy Policy, ToS) is up to date.", icon: <HeartPulse /> },
            { text: "Framework for 'Disciplinary Actions' that minimizes legal exposure.", icon: <FileWarning /> }
        ],
        previewScenario: {
            title: "Avoiding a Wrongful Termination Lawsuit",
            description: "An underperforming employee is let go, but the process is handled poorly, leading to a costly legal notice. This scenario shows how SOPs for HR create a defensible, fair process.",
            tasks: [
                { id: 'HR-DISC-01', description: "The manager documents specific instances of underperformance with dates and metrics, as required by the 'Disciplinary Action' checklist.", sourceChecklist: "Employee Disciplinary Actions", priority: 'High' },
                { id: 'HR-DISC-02', description: "A formal 'Performance Improvement Plan' (PIP) is issued, with clear, measurable goals and a defined timeline.", sourceChecklist: "Employee Disciplinary Actions", priority: 'High' },
                { id: 'HR-ONBOARD-01', description: "The original 'New Hire Onboarding' file is reviewed to confirm the employee signed the acknowledgment of the company's performance policies.", sourceChecklist: "New Employee Onboarding (HR & Legal)", priority: 'High' },
                { id: 'HR-DISC-04', description: "When termination occurs, it's based on the documented failure to meet the PIP, creating a clear, non-discriminatory reason and minimizing legal risk.", sourceChecklist: "Employee Disciplinary Actions", priority: 'High' }
            ]
        },
        checklists: [
            {
                title: "🧑‍💼 New Employee Onboarding (HR & Legal)",
                department: "HR",
                frequency: "Per Hire",
                role: "HR Manager",
                summary: "A legally-focused checklist to ensure every new hire is onboarded correctly, minimizing future compliance risks and employment disputes.",
                tasks: [
                    { id: 'HR-ONBOARD-01', description: "Ensure signed offer letter and employment contract are on file before start date.", priority: 'High', riskLevel: 'High', proof: 'Signed Documents', location: 'Employee File' },
                    { id: 'HR-ONBOARD-02', description: "Verify all statutory forms (PF, ESI, tax declarations) are completed and filed.", priority: 'High', riskLevel: 'High', proof: 'Filed Forms', location: 'Employee File' },
                    { id: 'HR-ONBOARD-03', description: "Confirm employee has signed acknowledgment of the Company Handbook, Code of Conduct, and IT Policy.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Acknowledgment', location: 'Employee File' },
                    { id: 'HR-ONBOARD-04', description: "Conduct and document background and reference checks as per policy.", priority: 'High', riskLevel: 'High', proof: 'Background Check Report', location: 'Employee File' },
                    { id: 'HR-ONBOARD-05', description: "Issue and log all company assets (laptop, access cards) with a signed issuance form.", priority: 'High', riskLevel: 'Medium', proof: 'Asset Form', location: 'IT/Admin File' }
                ]
            },
            {
                title: "✍️ Vendor Contract Review for Non-Lawyers",
                department: "Procurement/Any",
                frequency: "Per Contract",
                role: "Manager",
                summary: "Empower your managers to spot critical risks in vendor agreements before they escalate to legal. This checklist covers key clauses like liability, termination, and data privacy.",
                tasks: [
                    { id: 'LEGAL-VEND-01', description: "Identify the legal names of both parties. Are they correct?", priority: 'High', riskLevel: 'Medium', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-02', description: "Is the 'Scope of Work' clearly and precisely defined? Avoid vague language.", priority: 'High', riskLevel: 'High', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-03', description: "Check the 'Termination' clause. Can we terminate for convenience, or only for cause? What is the notice period?", priority: 'High', riskLevel: 'High', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-04', description: "Review the 'Limitation of Liability' clause. Is the vendor's liability capped at an unreasonably low amount (e.g., only 3 months of fees)?", priority: 'High', riskLevel: 'High', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-05', description: "Does the vendor have adequate 'Data Privacy' and 'Confidentiality' obligations, especially if they handle customer or employee data?", priority: 'High', riskLevel: 'High', proof: 'Contract Draft', location: 'Contract' }
                ]
            },
            {
                title: "⚖️ Employee Disciplinary Actions",
                department: "HR/Management",
                frequency: "Per Incident",
                role: "Manager/HR Head",
                summary: "A step-by-step guide to conducting disciplinary actions in a fair, consistent, and legally defensible manner, from verbal warnings to Performance Improvement Plans (PIPs).",
                tasks: [
                    { id: 'HR-DISC-01', description: "Document the specific, objective instances of underperformance or misconduct with dates, times, and measurable impact.", priority: 'High', riskLevel: 'High', proof: 'Incident Documentation', location: 'Manager File' },
                    { id: 'HR-DISC-02', description: "For recurring issues, issue a formal Performance Improvement Plan (PIP) with clear, achievable goals and a defined timeline.", priority: 'High', riskLevel: 'High', proof: 'PIP Document', location: 'Employee File' },
                    { id: 'HR-DISC-03', description: "Conduct a private meeting with the employee (and an HR representative) to discuss the issue and the PIP.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Meeting Room' },
                    { id: 'HR-DISC-04', description: "Ensure the entire process is documented and stored in the employee's official file.", priority: 'High', riskLevel: 'High', proof: 'Complete File', location: 'Employee File' },
                    { id: 'HR-DISC-05', description: "Follow up regularly during the PIP period to provide feedback and support.", priority: 'High', riskLevel: 'Medium', proof: 'Follow-up Emails/Meetings', location: 'Manager File' }
                ]
            },
            {
                title: "🌐 Website Legal Health Check",
                department: "Marketing/Legal",
                frequency: "Quarterly",
                role: "Marketing Manager",
                summary: "A quick audit to ensure your public-facing website meets basic legal requirements, helping you avoid data privacy fines and build user trust.",
                tasks: [
                    { id: 'LEGAL-WEB-01', description: "Is your 'Privacy Policy' link clearly visible in the website footer?", priority: 'High', riskLevel: 'High', proof: 'Website Screenshot', location: 'Website' },
                    { id: 'LEGAL-WEB-02', description: "Is your 'Terms of Service' link clearly visible in the website footer?", priority: 'High', riskLevel: 'High', proof: 'Website Screenshot', location: 'Website' },
                    { id: 'LEGAL-WEB-03', description: "If you use cookies, do you have a cookie consent banner that allows users to accept or decline?", priority: 'High', riskLevel: 'High', proof: 'Website Screenshot', location: 'Website' },
                    { id: 'LEGAL-WEB-04', description: "Does your Privacy Policy accurately reflect the data you collect (e.g., through contact forms, analytics)?", priority: 'High', riskLevel: 'High', proof: 'Policy vs. Practice Review', location: 'Website' },
                    { id: 'LEGAL-WEB-05', description: "Are all marketing email sign-up forms compliant with anti-spam laws (e.g., include an 'unsubscribe' option)?", priority: 'High', riskLevel: 'Medium', proof: 'Email Form Review', location: 'Website' }
                ]
            }
        ]
    },
    {
        id: 'enterprise_risk_compliance_pack',
        title: "Enterprise Risk & Cybersecurity Pack",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Corporate & Tech",
        description: "An advanced toolkit for CISOs and compliance officers to manage modern enterprise risks, from AI governance and data privacy to cloud security and incident response.",
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        whoIsItFor: ["CISOs", "CTOs", "Data Protection Officers (DPOs)", "Heads of Risk & Compliance", "IT Directors"],
        sampleItems: [
            { text: "Implement an 'AI Ethics & Governance' framework for your models.", icon: <BrainCircuit /> },
            { text: "Conduct a 'Data Privacy Audit' aligned with GDPR and DPDP.", icon: <FileLock /> },
            { text: "Strengthen defenses with a 'Cloud Security Posture Management' checklist.", icon: <DatabaseZap /> },
            { text: "Practice your 'Cybersecurity Incident Response' plan with drills.", icon: <Siren /> }
        ],
        previewScenario: {
            title: "Responding to a Suspected Data Breach",
            description: "An engineer reports unusual activity on a production database, suggesting a potential data breach. This scenario shows how checklists for Incident Response, Cloud Security, and Access Control enable a swift, coordinated, and compliant response.",
            tasks: [
                { id: 'CYBER-IR-01', description: "The 'Cybersecurity Incident Response Plan' is immediately activated, and the core incident response team is assembled.", sourceChecklist: "Cybersecurity Incident Response Plan", priority: 'High' },
                { id: 'CLOUD-SEC-03', description: "Using the 'Cloud Security' checklist, the team immediately isolates the affected database and rotates all access credentials.", sourceChecklist: "Cloud Security Posture Management", priority: 'High' },
                { id: 'CYBER-AC-02', description: "An 'Employee Offboarding' protocol is triggered for the suspected user account to revoke all access system-wide.", sourceChecklist: "Employee Offboarding & Access Control", priority: 'High' },
                { id: 'PRIV-AUDIT-04', description: "The 'Data Privacy Audit' checklist guides the legal and compliance team in determining if the incident meets the threshold for mandatory reporting to regulators under GDPR/DPDP.", sourceChecklist: "Data Privacy (GDPR/DPDP) Audit", priority: 'High' }
            ]
        },
        checklists: [
            {
                title: "🤖 AI Ethics & Governance Framework",
                department: "Technology/Ethics",
                frequency: "Per Model",
                role: "AI Ethics Officer",
                summary: "Build trust and mitigate risk in your AI systems. This checklist helps you assess models for bias, ensure transparency, and create a governance structure for responsible AI development.",
                tasks: [
                    { id: 'AI-ETHICS-01', description: "Define and document the intended use case and potential societal impact of the AI model.", priority: 'High', riskLevel: 'High', proof: 'Impact Assessment Document', location: 'AI Governance File' },
                    { id: 'AI-ETHICS-02', description: "Assess the training data for potential sources of bias (e.g., demographic, historical).", priority: 'High', riskLevel: 'High', proof: 'Data Bias Report', location: 'AI Governance File' },
                    { id: 'AI-ETHICS-03', description: "Test the model's performance across different demographic subgroups to identify fairness gaps.", priority: 'High', riskLevel: 'High', proof: 'Fairness Metrics Report', location: 'AI Governance File' },
                    { id: 'AI-ETHICS-04', description: "Create a 'Model Card' or 'Explainability Statement' that clearly describes how the model works for non-technical stakeholders.", priority: 'High', riskLevel: 'Medium', proof: 'Model Card Document', location: 'Public/Internal Documentation' },
                    { id: 'AI-ETHICS-05', description: "Establish a process for human oversight and intervention in the AI's decisions.", priority: 'High', riskLevel: 'High', proof: 'Human-in-the-Loop Protocol', location: 'Operational SOPs' }
                ]
            },
            {
                title: "🔐 Data Privacy (GDPR/DPDP) Audit",
                department: "Compliance/Legal",
                frequency: "Quarterly",
                role: "Data Protection Officer (DPO)",
                summary: "Ensure your organization complies with global data privacy regulations. This checklist covers key requirements like maintaining a Record of Processing Activities (ROPA) and handling Data Subject Access Requests (DSARs).",
                tasks: [
                    { id: 'PRIV-AUDIT-01', description: "Review and update the company's Record of Processing Activities (ROPA) to ensure it reflects all current data processing.", priority: 'High', riskLevel: 'High', proof: 'Updated ROPA Document', location: 'Compliance Office' },
                    { id: 'PRIV-AUDIT-02', description: "Audit the process for obtaining and managing user consent.", priority: 'High', riskLevel: 'High', proof: 'Consent Management Audit', location: 'Website/App' },
                    { id: 'PRIV-AUDIT-03', description: "Test the procedure for handling Data Subject Access Requests (DSARs) within the legally mandated timeframe.", priority: 'High', riskLevel: 'High', proof: 'DSAR Test Report', location: 'Compliance Office' },
                    { id: 'PRIV-AUDIT-04', description: "Verify that Data Protection Impact Assessments (DPIAs) are conducted for all new high-risk processing activities.", priority: 'High', riskLevel: 'High', proof: 'DPIA Log', location: 'Compliance Office' },
                    { id: 'PRIV-AUDIT-05', description: "Ensure data retention policies are being enforced and old data is being securely deleted.", priority: 'High', riskLevel: 'High', proof: 'Data Deletion Log', location: 'IT/Compliance' }
                ]
            },
            {
                title: "☁️ Cloud Security Posture Management",
                department: "IT/Security",
                frequency: "Weekly",
                role: "Cloud Security Engineer",
                summary: "Prevent misconfigurations, a leading cause of data breaches. This checklist helps you audit your cloud environment (AWS, Azure, GCP) for common security weaknesses.",
                tasks: [
                    { id: 'CLOUD-SEC-01', description: "Scan for publicly exposed storage buckets (e.g., S3 buckets) or databases.", priority: 'High', riskLevel: 'High', proof: 'Cloud Security Scan Report', location: 'Security Dashboard' },
                    { id: 'CLOUD-SEC-02', description: "Audit Identity and Access Management (IAM) roles for overly permissive policies (principle of least privilege).", priority: 'High', riskLevel: 'High', proof: 'IAM Audit Report', location: 'Security Dashboard' },
                    { id: 'CLOUD-SEC-03', description: "Ensure multi-factor authentication (MFA) is enabled for all administrative users.", priority: 'High', riskLevel: 'High', proof: 'MFA Status Report', location: 'Security Dashboard' },
                    { id: 'CLOUD-SEC-04', description: "Verify that logging and monitoring (e.g., CloudTrail, Azure Monitor) are enabled for all critical resources.", priority: 'High', riskLevel: 'High', proof: 'Logging Configuration', location: 'Security Dashboard' },
                    { id: 'CLOUD-SEC-05', description: "Check that all data stored at rest is encrypted.", priority: 'High', riskLevel: 'High', proof: 'Encryption Status Report', location: 'Security Dashboard' }
                ]
            },
            {
                title: "🚨 Cybersecurity Incident Response Plan",
                department: "Security",
                frequency: "Quarterly",
                role: "CISO",
                summary: "Prepare for the inevitable. This checklist provides a step-by-step framework for responding to a cyber attack, from initial detection to post-incident review, minimizing damage and recovery time.",
                tasks: [
                    { id: 'CYBER-IR-01', description: "Conduct a quarterly tabletop exercise or drill to test the incident response plan with the core team.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Conference Room' },
                    { id: 'CYBER-IR-02', description: "Update the contact list for the incident response team and external experts (legal counsel, forensics).", priority: 'High', riskLevel: 'Medium', proof: 'Updated Contact List', location: 'Incident Response Plan' },
                    { id: 'CYBER-IR-03', description: "Verify that all required logging is in place to support a forensic investigation.", priority: 'High', riskLevel: 'High', proof: 'Log Source Audit', location: 'SIEM/Log Management System' },
                    { id: 'CYBER-IR-04', description: "Review and update playbooks for common attack scenarios (e.g., ransomware, phishing).", priority: 'High', riskLevel: 'High', proof: 'Updated Playbooks', location: 'Incident Response Plan' },
                    { id: 'CYBER-IR-05', description: "Ensure a secure, out-of-band communication channel is available for the incident response team.", priority: 'High', riskLevel: 'High', proof: 'Communication Channel Test', location: 'Various' }
                ]
            },
            {
                title: "👋 Employee Offboarding & Access Control",
                department: "HR/IT",
                frequency: "Per Departure",
                role: "IT Admin",
                summary: "Prevent departing employees from becoming your next data breach. This time-sensitive checklist ensures all physical and digital access is revoked immediately upon employee exit.",
                tasks: [
                    { id: 'CYBER-AC-01', description: "Immediately disable all of the employee's system accounts (email, Slack, CRM, etc.) upon notification of termination.", priority: 'High', riskLevel: 'High', proof: 'Account Deactivation Log', location: 'IT Helpdesk' },
                    { id: 'CYBER-AC-02', description: "Revoke all VPN and remote access privileges.", priority: 'High', riskLevel: 'High', proof: 'Access Control System Log', location: 'IT Helpdesk' },
                    { id: 'CYBER-AC-03', description: "Deactivate physical access cards and change relevant door codes.", priority: 'High', riskLevel: 'High', proof: 'Physical Access System Log', location: 'Security Office' },
                    { id: 'CYBER-AC-04', description: "Wipe all company data from the employee's corporate devices (laptop, phone).", priority: 'High', riskLevel: 'High', proof: 'Device Wipe Confirmation', location: 'IT Helpdesk' },
                    { id: 'CYBER-AC-05', description: "Conduct an exit interview to recover all company assets and knowledge.", priority: 'High', riskLevel: 'Medium', proof: 'Exit Interview Form', location: 'HR Office' }
                ]
            }
        ]
    },
    // --- Healthcare ---
    {
        id: 'healthcare_and_hospital_operations',
        title: "Healthcare & Hospital Operations",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Healthcare",
        description: "A comprehensive JCI & NABH-aligned SOP toolkit for hospital administrators to ensure patient safety, clinical quality, and operational efficiency.",
        icon: <Stethoscope className="w-8 h-8 text-primary" />,
        badgeText: "Bestseller",
        bestseller: true,
        whoIsItFor: ["Hospital COOs", "Chief Medical Officers", "Heads of Quality", "Nursing Directors", "VPs", "GMs", "Directors"],
        sampleItems: [
            { text: "Prevent 'Never Events' with a WHO-aligned 'Surgical Safety' checklist.", icon: <SyringeIcon /> },
            { text: "Ensure NABH/JCI compliance with a 'Patient Safety & Risk Management' framework.", icon: <ShieldCheck /> },
            { text: "Master infection control with 'CSSD & Sterilization' protocols.", icon: <Microscope /> },
            { text: "Includes 'ER Triage' and 'LASA Drug Management' checklists.", icon: <Ambulance /> }
        ],
        previewScenario: {
            title: "Preventing a Wrong-Site Surgery",
            description: "A patient is prepped for surgery, but a discrepancy is found in the consent form. This scenario shows how checklists for Surgical Safety, Patient ID, and Pre-Op Assessment create a safety net to prevent a catastrophic 'never event'.",
            tasks: [
                { id: 'SAFE-ID-01', description: "The nurse confirms the patient's identity using two identifiers (name and MRN) and checks the wristband, as per the 'Patient Identification' SOP.", sourceChecklist: "Patient Identification & Safety", priority: 'High' },
                { id: 'PRE-OP-02', description: "During the 'Pre-operative Assessment', the anesthesiologist notices the surgical site marked on the patient does not match the consent form.", sourceChecklist: "Pre-Operative Patient Assessment", priority: 'High' },
                { id: 'SURG-SS-03', description: "The 'Surgical Safety Checklist' cannot proceed. A hard stop is initiated, and the entire 'Time Out' procedure is halted.", sourceChecklist: "Surgical Safety Checklist (WHO)", priority: 'High' },
                { id: 'RISK-INC-01', description: "The near-miss is reported as a non-punitive incident, triggering a root cause analysis to prevent future occurrences, fulfilling a key NABH requirement.", sourceChecklist: "Patient Safety & Risk Management", priority: 'High' }
            ]
        },
        checklists: [
             {
                title: "⚕️ Surgical Safety Checklist (WHO)",
                department: "Surgery",
                frequency: "Per Procedure",
                role: "Circulating Nurse",
                summary: "The foundational checklist to prevent wrong-site, wrong-patient, and wrong-procedure errors. Aligned with WHO, JCI, and NABH standards.",
                tasks: [
                    { id: 'SURG-SS-01', description: "Sign In (Before Anesthesia): Confirm patient identity, site, procedure, and consent.", priority: 'High', riskLevel: 'High', proof: 'Signed Checklist', location: 'Operating Room' },
                    { id: 'SURG-SS-02', description: "Sign In: Check site marking and anesthesia safety check completion.", priority: 'High', riskLevel: 'High', proof: 'Signed Checklist', location: 'Operating Room' },
                    { id: 'SURG-SS-03', description: "Time Out (Before Incision): Team introduction and confirmation of patient, site, and procedure.", priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation in Log', location: 'Operating Room' },
                    { id: 'SURG-SS-04', description: "Time Out: Review of critical events, anticipated blood loss, and sterility concerns.", priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation in Log', location: 'Operating Room' },
                    { id: 'SURG-SS-05', description: "Sign Out (Before Patient Leaves): Confirm name of procedure, sponge/instrument count, and equipment issues.", priority: 'High', riskLevel: 'High', proof: 'Signed Checklist', location: 'Operating Room' }
                ]
            },
            {
                title: "💊 LASA Drug Management",
                department: "Pharmacy/Nursing",
                frequency: "Daily/Per Dispensing",
                role: "Pharmacist/Nurse",
                summary: "Prevent medication errors with a strict protocol for managing Look-Alike, Sound-Alike (LASA) drugs, a major focus area for NABH and JCI.",
                tasks: [
                    { id: 'LASA-01', description: "Store LASA drugs in separate, clearly labeled locations.", priority: 'High', riskLevel: 'High', proof: 'Storage Audit Log', location: 'Pharmacy/Ward' },
                    { id: 'LASA-02', description: "Use 'Tall Man' lettering (e.g., hydrOXYzine vs. hydrALAZINE) on all labels and storage bins.", priority: 'High', riskLevel: 'High', proof: 'Label Audit', location: 'Pharmacy/Ward' },
                    { id: 'LASA-03', description: "Require a 'read-back' confirmation for all verbal or telephonic orders involving LASA drugs.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Nursing Station' },
                    { id: 'LASA-04', description: "Implement a two-person check system for dispensing and administering high-alert LASA medications.", priority: 'High', riskLevel: 'High', proof: 'Dual Sign-off Log', location: 'Pharmacy/Bedside' },
                    { id: 'LASA-05', description: "Regularly audit LASA drug storage and labeling for compliance.", priority: 'High', riskLevel: 'High', proof: 'Monthly Audit Report', location: 'Pharmacy/Wards' }
                ]
            },
             {
                title: "🔬 CSSD & Sterilization Protocol",
                department: "CSSD/Infection Control",
                frequency: "Per Cycle",
                role: "CSSD Technician",
                summary: "Ensure every surgical instrument is sterile and safe. This checklist covers the entire sterilization cycle, from decontamination to sterile storage, preventing hospital-acquired infections.",
                tasks: [
                    { id: 'CSSD-01', description: "Perform daily check of sterilizer (autoclave) performance using biological and chemical indicators.", priority: 'High', riskLevel: 'High', proof: 'Sterilizer Log', location: 'CSSD' },
                    { id: 'CSSD-02', description: "Ensure all instruments are thoroughly cleaned and decontaminated before sterilization.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'CSSD' },
                    { id: 'CSSD-03', description: "Properly pack and label all instrument sets with sterilization date and expiry.", priority: 'High', riskLevel: 'High', proof: 'Package Labels', location: 'CSSD' },
                    { id: 'CSSD-04', description: "Maintain a detailed log for each sterilization cycle, including load contents and cycle parameters.", priority: 'High', riskLevel: 'High', proof: 'Cycle Logbook', location: 'CSSD' },
                    { id: 'CSSD-05', description: "Store sterile packs in a clean, dry, and controlled environment.", priority: 'High', riskLevel: 'High', proof: 'Storage Area Log', location: 'Sterile Storage' }
                ]
            },
            {
                title: "🚑 Emergency Room Triage & Patient Flow",
                department: "Emergency",
                frequency: "Per Patient",
                role: "Triage Nurse",
                summary: "Manage chaos in the ER. This checklist provides a standardized triage system to quickly identify and prioritize critical patients, improving patient flow and outcomes.",
                tasks: [
                    { id: 'ER-01', description: "Perform initial patient assessment within 5 minutes of arrival.", priority: 'High', riskLevel: 'High', proof: 'Triage Form', location: 'Triage Area' },
                    { id: 'ER-02', description: "Assign a triage level (e.g., Red, Yellow, Green) based on severity.", priority: 'High', riskLevel: 'High', proof: 'Triage Form', location: 'Triage Area' },
                    { id: 'ER-03', description: "Immediately move critical (Red) patients to the resuscitation area.", priority: 'High', riskLevel: 'High', proof: 'Patient Chart', location: 'Resuscitation Bay' },
                    { id: 'ER-04', description: "Regularly reassess patients in the waiting area.", priority: 'High', riskLevel: 'High', proof: 'Reassessment Log', location: 'Waiting Area' },
                    { id: 'ER-05', description: "Maintain clear communication between triage, nursing, and medical staff.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'ER' }
                ]
            },
            {
                title: "⚠️ Patient Safety & Risk Management",
                department: "Quality",
                frequency: "Monthly",
                role: "Quality Manager",
                summary: "A proactive framework for identifying and mitigating patient safety risks. This checklist helps you run an effective patient safety committee and manage incident reporting.",
                tasks: [
                    { id: 'RISK-01', description: "Review all incident reports (falls, medication errors, etc.) from the previous month.", priority: 'High', riskLevel: 'High', proof: 'Incident Report Analysis', location: 'Quality Office' },
                    { id: 'RISK-02', description: "Conduct a root cause analysis (RCA) for any sentinel events.", priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'Quality Office' },
                    { id: 'RISK-03', description: "Implement and track corrective and preventive actions (CAPA).", priority: 'High', riskLevel: 'High', proof: 'CAPA Log', location: 'Quality Office' },
                    { id: 'RISK-04', description: "Conduct monthly patient safety walkthroughs in different departments.", priority: 'High', riskLevel: 'High', proof: 'Walkthrough Report', location: 'Various Departments' },
                    { id: 'RISK-INC-01', description: "Promote a non-punitive culture for incident reporting.", priority: 'High', riskLevel: 'Medium', proof: 'Policy Document', location: 'HR/Quality' }
                ]
            },
            {
                title: "🆔 Patient Identification & Safety",
                department: "Nursing",
                frequency: "Per Interaction",
                role: "Nurse",
                summary: "A critical checklist to ensure the right patient gets the right care every time, preventing errors in medication administration, transfusions, and procedures.",
                tasks: [
                    { id: 'SAFE-ID-01', description: "Use at least two patient identifiers (e.g., name and MRN) before administering any medication or procedure.", priority: 'High', riskLevel: 'High', proof: 'Patient Chart Sign-off', location: 'Bedside' },
                    { id: 'SAFE-ID-02', description: "Check the patient's wristband against the medical record.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Bedside' },
                    { id: 'SAFE-ID-03', description: "Label all specimens in the presence of the patient.", priority: 'High', riskLevel: 'High', proof: 'Specimen Label', location: 'Bedside' },
                    { id: 'SAFE-ID-04', description: "Perform a 'read-back' of verbal orders to confirm accuracy.", priority: 'High', riskLevel: 'High', proof: 'Verbal Order Log', location: 'Nursing Station' },
                    { id: 'SAFE-ID-05', description: "Conduct a two-person verification for blood transfusions.", priority: 'High', riskLevel: 'High', proof: 'Transfusion Checklist', location: 'Bedside' }
                ]
            },
            {
                title: "📋 Pre-Operative Patient Assessment",
                department: "Anesthesia/Surgery",
                frequency: "Per Patient",
                role: "Anesthesiologist",
                summary: "Ensure every patient is fully assessed and prepared for surgery. This checklist covers all critical checks from allergy verification to consent form review.",
                tasks: [
                    { id: 'PRE-OP-01', description: "Review patient's medical history and current medications.", priority: 'High', riskLevel: 'High', proof: 'Patient File', location: 'Pre-op Area' },
                    { id: 'PRE-OP-02', description: "Confirm surgical consent form is correctly filled and signed.", priority: 'High', riskLevel: 'High', proof: 'Signed Consent Form', location: 'Pre-op Area' },
                    { id: 'PRE-OP-03', description: "Verify patient's allergy status.", priority: 'High', riskLevel: 'High', proof: 'Patient File', location: 'Pre-op Area' },
                    { id: 'PRE-OP-04', description: "Check results of all pre-operative investigations (blood work, ECG).", priority: 'High', riskLevel: 'High', proof: 'Lab Reports', location: 'Pre-op Area' },
                    { id: 'PRE-OP-05', description: "Ensure the surgical site has been marked by the operating surgeon.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Pre-op Area' }
                ]
            }
        ]
    },
     {
        id: 'pharmacy_ops_pack',
        title: "Pharmacy Operations Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Healthcare",
        description: "A comprehensive SOP toolkit for retail and hospital pharmacies to ensure patient safety, regulatory compliance, and efficient inventory management.",
        icon: <Pill className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Pharmacy Owners", "Chief Pharmacists", "Hospital Pharmacy Managers", "Compliance Officers", "Heads of Quality"],
        sampleItems: [
            { text: "Prevent dispensing errors with a 'Look-Alike, Sound-Alike (LASA) Drug' checklist.", icon: <FileWarning /> },
            { text: "Master 'Controlled Substance & Narcotics Management' for full compliance.", icon: <Lock /> },
            { text: "Ensure medication efficacy with a 'Cold Chain Management' protocol.", icon: <Thermometer /> },
            { text: "Standardize 'Patient Counseling' to improve medication adherence.", icon: <UserCheck /> }
        ],
        previewScenario: {
            title: "Preventing a High-Risk Dispensing Error",
            description: "A pharmacist receives a handwritten prescription for a high-alert LASA drug. This scenario shows how checklists prevent a potentially fatal medication error.",
            tasks: [
                { id: 'LASA-03', description: "The pharmacist calls the prescribing doctor to verbally confirm the drug and dosage, as mandated by the 'LASA Drug Management' SOP.", sourceChecklist: "LASA Drug Management", priority: 'High' },
                { id: 'DISPENSE-02', description: "A second pharmacist performs an independent double-check of the prescription, the selected drug, and the label before it's dispensed.", sourceChecklist: "Dispensing Accuracy", priority: 'High' },
                { id: 'COUNSEL-02', description: "During 'Patient Counseling', the pharmacist confirms the patient's understanding of what the medication is for, catching any final potential discrepancy.", sourceChecklist: "Patient Counseling", priority: 'High' },
                { id: 'NARC-05', description: "The entire dispensing process, including the two-person check, is logged, creating a defensible audit trail.", sourceChecklist: "Controlled Substance & Narcotics Management", priority: 'High' }
            ]
        },
        checklists: [
            {
                title: "Dispensing Accuracy",
                department: "Pharmacy",
                frequency: "Per Prescription",
                role: "Pharmacist",
                summary: "Ensure the right patient gets the right drug at the right dose, every time. This is the core checklist for safe pharmacy operations.",
                tasks: [
                    { id: 'DISPENSE-01', description: "Verify patient identity using two identifiers.", priority: 'High', riskLevel: 'High', proof: 'Patient Record', location: 'Dispensing Counter' },
                    { id: 'DISPENSE-02', description: "Perform a two-person check for all high-alert medications.", priority: 'High', riskLevel: 'High', proof: 'Dual Sign-off Log', location: 'Dispensing Counter' },
                    { id: 'DISPENSE-03', description: "Check prescription for completeness and legality.", priority: 'High', riskLevel: 'High', proof: 'Prescription Review', location: 'Dispensing Counter' },
                    { id: 'DISPENSE-04', description: "Confirm drug allergies with the patient or their record.", priority: 'High', riskLevel: 'High', proof: 'Patient Record Check', location: 'Dispensing Counter' },
                    { id: 'DISPENSE-05', description: "Label medication clearly with patient name, drug name, strength, and instructions.", priority: 'High', riskLevel: 'High', proof: 'Printed Label', location: 'Dispensing Counter' }
                ]
            },
            {
                title: "Controlled Substance & Narcotics Management",
                department: "Pharmacy/Compliance",
                frequency: "Daily",
                role: "Chief Pharmacist",
                summary: "Ensure 100% compliance with narcotics regulations. This checklist covers secure storage, perpetual inventory, and discrepancy reporting.",
                tasks: [
                    { id: 'NARC-01', description: "Conduct a daily reconciliation of all controlled substance inventory with two staff members present.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Log', location: 'Narcotics Vault' },
                    { id: 'NARC-02', description: "Store all controlled substances in a locked, secure safe or vault with restricted access.", priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Narcotics Vault' },
                    { id: 'NARC-03', description: "Maintain a perpetual inventory log for all narcotics dispensed.", priority: 'High', riskLevel: 'High', proof: 'Perpetual Logbook', location: 'Narcotics Vault' },
                    { id: 'NARC-04', description: "Report any discrepancies to the appropriate regulatory body within 24 hours.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Office' },
                    { id: 'NARC-05', description: "Verify prescriptions for controlled substances for authenticity.", priority: 'High', riskLevel: 'High', proof: 'Prescription Verification Log', location: 'Dispensing Counter' }
                ]
            },
            {
                title: "Cold Chain Management",
                department: "Pharmacy/Logistics",
                frequency: "Daily",
                role: "Pharmacist",
                summary: "Protect the efficacy of vaccines and other temperature-sensitive medications with this rigorous cold chain protocol.",
                tasks: [
                    { id: 'COLD-01', description: "Log refrigerator and freezer temperatures twice daily.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Cold Storage' },
                    { id: 'COLD-02', description: "Test temperature alarm systems weekly.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Cold Storage' },
                    { id: 'COLD-03', description: "Have a clear action plan for power failures, including backup power sources.", priority: 'High', riskLevel: 'High', proof: 'Emergency Plan', location: 'Office' },
                    { id: 'COLD-04', description: "Use validated cold packs and containers for transporting temperature-sensitive drugs.", priority: 'High', riskLevel: 'High', proof: 'Transport Log', location: 'Dispatch Area' },
                    { id: 'COLD-05', description: "Check temperature upon receiving cold chain shipments.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Area' }
                ]
            },
            {
                title: "Patient Counseling",
                department: "Pharmacy",
                frequency: "Per New Prescription",
                role: "Pharmacist",
                summary: "Improve patient adherence and safety with a standardized counseling checklist to ensure every patient understands their medication.",
                tasks: [
                    { id: 'COUNSEL-01', description: "Explain the name of the medication and what it is for.", priority: 'High', riskLevel: 'Medium', proof: 'Counseling Checklist', location: 'Counseling Area' },
                    { id: 'COUNSEL-02', description: "Clearly explain the dosage, route, and frequency.", priority: 'High', riskLevel: 'High', proof: 'Counseling Checklist', location: 'Counseling Area' },
                    { id: 'COUNSEL-03', description: "Discuss potential common side effects and what to do if they occur.", priority: 'High', riskLevel: 'High', proof: 'Counseling Checklist', location: 'Counseling Area' },
                    { id: 'COUNSEL-04', description: "Ask the patient to repeat back the key instructions to confirm understanding (teach-back method).", priority: 'High', riskLevel: 'High', proof: 'Counseling Checklist', location: 'Counseling Area' },
                    { id: 'COUNSEL-05', description: "Provide written information to supplement verbal counseling.", priority: 'High', riskLevel: 'Medium', proof: 'Patient Information Leaflet', location: 'Counseling Area' }
                ]
            }
        ]
    },
    {
        id: 'school_operations_pack',
        title: "School Operations Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Education",
        description: "A complete safety and compliance toolkit for K-12 schools, ensuring the well-being of every student and staff member.",
        icon: <School className="w-8 h-8 text-primary" />,
        whoIsItFor: ["School Principals", "Admin Heads", "Trustees", "Heads of Security"],
        sampleItems: [
            { text: "Mandatory 'End-of-Route' check for school buses to prevent 'forgotten child' incidents.", icon: <Bus /> },
            { text: "A robust 'Campus Security & Visitor Management' protocol to control access.", icon: <UserCog2 /> },
            { text: "HACCP-aligned 'Cafeteria & Food Safety' checklists.", icon: <Sprout /> },
            { text: "Protocols for 'Emergency Preparedness' including fire, medical, and evacuation drills.", icon: <Siren /> }
        ],
        previewScenario: {
            title: "Responding to an Unauthorized Person on Campus",
            description: "A person attempts to enter school grounds without authorization. This scenario shows how checklists for Security, Visitor Management, and Emergency Response work together to neutralize the threat.",
            tasks: [
                { id: 'CSVM-01', description: "The security guard at the gate denies entry because the person is not on the pre-approved visitor list, as per the 'Visitor Management' SOP.", sourceChecklist: "Campus Security & Visitor Management", priority: 'High' },
                { id: 'CSVM-04', description: "When the person becomes agitated, the guard triggers a silent alarm to alert the Principal and Head of Security.", sourceChecklist: "Campus Security & Visitor Management", priority: 'High' },
                { id: 'EPD-03', description: "The 'Emergency Response' protocol for an intruder is activated, and all external doors are remotely locked.", sourceChecklist: "Emergency Preparedness & Drills", priority: 'High' },
                { id: 'CSVM-06', description: "The incident is logged in detail, including CCTV timestamps, providing a clear record for law enforcement.", sourceChecklist: "Campus Security & Visitor Management", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on National & Global Safety Standards",
            standards: [
                { name: "Student Safety", description: "Guidelines from the National Commission for Protection of Child Rights (NCPCR) and POSCO Act." },
                { name: "Campus Security", description: "CBSE & State Board safety guidelines, local police recommendations." },
                { name: "Health & Hygiene", description: "FSSAI standards for school canteens, National School Health Programme guidelines." },
                { name: "Infrastructure Safety", description: "National Building Code (NBC) for fire safety and structural integrity." }
            ]
        },
        checklists: [
            {
                title: "🚌 School Bus Safety & Transport",
                department: "Transport",
                frequency: "Daily",
                role: "Transport Manager",
                summary: "Ensure every child's journey to and from school is safe with rigorous daily checks for vehicle fitness, driver readiness, and student safety protocols.",
                tasks: [
                    { id: 'SBST-01', description: "Conduct a pre-trip inspection of the bus (tires, lights, brakes, first-aid kit).", priority: 'High', riskLevel: 'High', proof: 'Pre-Trip Inspection Log', location: 'Bus Depot' },
                    { id: 'SBST-02', description: "Verify the driver's fitness for duty (no signs of illness or fatigue).", priority: 'High', riskLevel: 'High', proof: 'Driver Fitness Log', location: 'Bus Depot' },
                    { id: 'SBST-03', description: "Ensure the on-board GPS and CCTV are functional.", priority: 'High', riskLevel: 'High', proof: 'System Check Log', location: 'Bus' },
                    { id: 'SBST-04', description: "Check that a female attendant is present on every bus route with female students.", priority: 'High', riskLevel: 'High', proof: 'Attendant Roster', location: 'Bus' },
                    { id: 'SBST-05', description: "Perform a mandatory 'end-of-route' sweep of the entire bus to ensure no child is left behind.", priority: 'High', riskLevel: 'High', proof: 'End-of-Route Log', location: 'Bus' }
                ]
            },
            {
                title: "🛡️ Campus Security & Visitor Management",
                department: "Security",
                frequency: "Ongoing",
                role: "Head of Security",
                summary: "Control access to your campus and protect students with a strict protocol for managing visitors, verifying identities, and monitoring perimeters.",
                tasks: [
                    { id: 'CSVM-01', description: "Verify the identity of all visitors and check them against a pre-approved list.", priority: 'High', riskLevel: 'High', proof: 'Visitor Log', location: 'Main Gate' },
                    { id: 'CSVM-02', description: "Issue temporary ID badges to all authorized visitors.", priority: 'High', riskLevel: 'High', proof: 'Visitor Log', location: 'Main Gate' },
                    { id: 'CSVM-03', description: "Conduct regular patrols of the campus perimeter and check for any breaches.", priority: 'High', riskLevel: 'Medium', proof: 'Patrol Log', location: 'Campus Perimeter' },
                    { id: 'CSVM-04', description: "Monitor CCTV feeds for any suspicious activity.", priority: 'High', riskLevel: 'High', proof: 'CCTV Monitoring Log', location: 'Security Room' },
                    { id: 'CSVM-06', description: "Maintain a detailed log of all security incidents.", priority: 'High', riskLevel: 'High', proof: 'Incident Logbook', location: 'Security Office' }
                ]
            },
            {
                title: "🍎 Cafeteria & Food Safety (HACCP)",
                department: "F&B/Admin",
                frequency: "Daily",
                role: "Cafeteria Manager",
                summary: "Prevent foodborne illness and ensure compliance with FSSAI standards using this HACCP-based checklist for kitchen hygiene, food storage, and preparation.",
                tasks: [
                    { id: 'CFS-01', description: "Check and log temperatures of all refrigerators and freezers.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Kitchen' },
                    { id: 'CFS-02', description: "Ensure all food handlers are following proper hygiene practices (hairnets, gloves, handwashing).", priority: 'High', riskLevel: 'High', proof: 'Hygiene Audit', location: 'Kitchen' },
                    { id: 'CFS-03', description: "Verify that raw and cooked foods are stored separately to prevent cross-contamination.", priority: 'High', riskLevel: 'High', proof: 'Storage Inspection', location: 'Kitchen/Storage' },
                    { id: 'CFS-04', description: "Check that all food is cooked to the correct internal temperature.", priority: 'High', riskLevel: 'High', proof: 'Cooking Temperature Log', location: 'Kitchen' },
                    { id: 'CFS-05', description: "Ensure the dining area is cleaned and sanitized before and after each meal service.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Cafeteria' }
                ]
            },
            {
                title: "🚨 Emergency Preparedness & Drills",
                department: "Administration",
                frequency: "Quarterly",
                role: "Admin Head",
                summary: "Prepare your school for any crisis. This checklist covers the planning and execution of drills for fire, medical emergencies, and evacuations.",
                tasks: [
                    { id: 'EPD-01', description: "Conduct a fire drill each quarter and record evacuation times.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Campus-wide' },
                    { id: 'EPD-02', description: "Inspect all fire safety equipment (extinguishers, alarms) monthly.", priority: 'High', riskLevel: 'High', proof: 'Fire Equipment Log', location: 'Campus-wide' },
                    { id: 'EPD-03', description: "Ensure a documented emergency response plan is in place for various scenarios (intruder, medical, natural disaster).", priority: 'High', riskLevel: 'High', proof: 'Emergency Plan Document', location: 'Admin Office' },
                    { id: 'EPD-04', description: "Verify that first-aid kits are fully stocked and accessible.", priority: 'High', riskLevel: 'High', proof: 'First-Aid Kit Log', location: 'Various Locations' },
                    { id: 'EPD-05', description: "Train staff and students on the emergency evacuation routes and assembly points.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Campus-wide' }
                ]
            }
        ]
    },
    {
        id: 'university_college_ops',
        title: "University & College Operations Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Education",
        description: "A comprehensive toolkit for higher education institutions to manage complex operations, from lab safety and hostel management to academic integrity and compliance.",
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        whoIsItFor: ["Deans & Registrars", "Heads of Administration", "Chief Wardens", "Heads of Security", "EHS Officers"],
        sampleItems: [
            { text: "Ensure 'Lab Safety & Chemical Management' aligns with OECD GLP and local regulations.", icon: <TestTube /> },
            { text: "Implement a 'Hostel Safety & Security' protocol to protect resident students.", icon: <Home /> },
            { text: "Protect academic integrity with a 'Confidential Exam Material Handling' SOP.", icon: <FileLock /> },
            { text: "A framework for 'Student Well-being & Anti-Ragging' compliance.", icon: <Users /> }
        ],
        previewScenario: {
            title: "Preventing an Exam Paper Leak",
            description: "A prestigious university faces a reputation crisis after an exam paper is leaked. This scenario shows how a strict chain-of-custody protocol prevents this.",
            tasks: [
                { id: 'CEMH-01', description: "The exam papers are printed in a secure, access-controlled room, as mandated by the 'Confidential Material Handling' SOP.", sourceChecklist: "Confidential Exam Material Handling", priority: 'High' },
                { id: 'CEMH-02', description: "The sealed packets are transported to the exam center in a locked container, with a documented chain-of-custody form signed at each handover point.", sourceChecklist: "Confidential Exam Material Handling", priority: 'High' },
                { id: 'CEMH-04', description: "Two authorized personnel are required to be present when the sealed packets are opened just before the exam begins.", sourceChecklist: "Confidential Exam Material Handling", priority: 'High' },
                { id: 'CEMH-05', description: "After the exam, all unused papers are accounted for and shredded under supervision, completing the secure lifecycle.", sourceChecklist: "Confidential Exam Material Handling", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Accreditation & Safety Standards",
            standards: [
                { name: "Academic Integrity", description: "NAAC & UGC guidelines for fair examinations and academic practices." },
                { name: "Lab & Research Safety", description: "OECD Principles of Good Laboratory Practice (GLP), ISO 17025." },
                { name: "Student Welfare", description: "UGC regulations on anti-ragging, guidelines for student mental health and well-being." },
                { name: "Campus Safety", description: "National Building Code (NBC) for fire safety, local EHS regulations for campus facilities." }
            ]
        },
        checklists: [
            {
                title: "🧪 Lab Safety & Chemical Management (GLP)",
                department: "EHS/Academics",
                frequency: "Monthly",
                role: "Lab Manager",
                summary: "Ensure a safe and compliant research environment with this checklist for chemical storage, equipment maintenance, and personal protective equipment (PPE) usage.",
                tasks: [
                    { id: 'LSCM-01', description: "Audit chemical storage to ensure proper segregation (e.g., flammables, corrosives).", priority: 'High', riskLevel: 'High', proof: 'Storage Audit Log', location: 'Chemical Storeroom' },
                    { id: 'LSCM-02', description: "Verify that all safety equipment (showers, eyewash stations, fire extinguishers) is functional and accessible.", priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Log', location: 'Lab' },
                    { id: 'LSCM-03', description: "Ensure all lab personnel are using the correct Personal Protective Equipment (PPE).", priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Lab' },
                    { id: 'LSCM-04', description: "Check that all hazardous waste is being disposed of according to regulations.", priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Waste Area' },
                    { id: 'LSCM-05', description: "Maintain a log of all equipment calibration and maintenance.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Logbook', location: 'Lab' }
                ]
            },
            {
                title: "🏠 Hostel Safety & Security",
                department: "Student Affairs/Admin",
                frequency: "Weekly",
                role: "Chief Warden",
                summary: "Ensure a safe and secure living environment for students with weekly checks for electrical safety, fire preparedness, and access control.",
                tasks: [
                    { id: 'HSS-01', description: "Conduct a walkthrough of all floors to check for fire hazards (e.g., illegal cooking, blocked corridors).", priority: 'High', riskLevel: 'High', proof: 'Walkthrough Log', location: 'Hostel' },
                    { id: 'HSS-02', description: "Test fire alarms and check expiry dates of fire extinguishers on each floor.", priority: 'High', riskLevel: 'High', proof: 'Fire Safety Log', location: 'Hostel' },
                    { id: 'HSS-03', description: "Review visitor logs and enforce rules regarding guest entry and exit times.", priority: 'High', riskLevel: 'Medium', proof: 'Visitor Log Review', location: 'Hostel Entrance' },
                    { id: 'HSS-04', description: "Inspect electrical fittings in common areas and a random selection of rooms for unsafe modifications.", priority: 'High', riskLevel: 'High', proof: 'Electrical Inspection Log', location: 'Hostel' },
                    { id: 'HSS-05', description: "Ensure all hostel staff and student volunteers are trained in emergency response.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Warden Office' }
                ]
            },
            {
                title: "🔒 Confidential Exam Material Handling",
                department: "Academics/Admin",
                frequency: "Per Exam",
                role: "Controller of Examinations",
                summary: "Protect academic integrity with a strict chain-of-custody protocol for exam papers, from secure printing and storage to supervised distribution and destruction.",
                tasks: [
                    { id: 'CEMH-01', description: "Print exam papers in a secure, access-controlled room.", priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Secure Printing Room' },
                    { id: 'CEMH-02', description: "Store sealed exam packets in a dual-lock vault or safe.", priority: 'High', riskLevel: 'High', proof: 'Vault Log', location: 'Exam Vault' },
                    { id: 'CEMH-03', description: "Document the chain of custody for any movement of the exam papers.", priority: 'High', riskLevel: 'High', proof: 'Chain of Custody Form', location: 'Exam Office' },
                    { id: 'CEMH-04', description: "Require two authorized personnel to be present during the opening of sealed packets.", priority: 'High', riskLevel: 'High', proof: 'Dual Sign-off Sheet', location: 'Exam Hall' },
                    { id: 'CEMH-05', description: "Account for and shred all unused exam papers immediately after the exam.", priority: 'High', riskLevel: 'High', proof: 'Destruction Log', location: 'Secure Area' }
                ]
            },
            {
                title: "😊 Student Well-being & Anti-Ragging",
                department: "Student Affairs",
                frequency: "Monthly",
                role: "Dean of Student Affairs",
                summary: "A proactive framework to ensure compliance with anti-ragging regulations and promote a positive, supportive campus environment for all students.",
                tasks: [
                    { id: 'SWAR-01', description: "Verify that anti-ragging posters and contact numbers for the helpline are prominently displayed.", priority: 'High', riskLevel: 'High', proof: 'Display Audit', location: 'Hostels/Common Areas' },
                    { id: 'SWAR-02', description: "Conduct regular, surprise checks in hostels and common areas.", priority: 'High', riskLevel: 'High', proof: 'Surprise Check Log', location: 'Hostels' },
                    { id: 'SWAR-03', description: "Hold monthly meetings of the Anti-Ragging Committee to review any incidents or concerns.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Committee Room' },
                    { id: 'SWAR-04', description: "Ensure a confidential and accessible process for students to report incidents.", priority: 'High', riskLevel: 'High', proof: 'Reporting Process Document', location: 'Student Affairs Office' },
                    { id: 'SWAR-05', description: "Organize awareness workshops on mental health and anti-ragging for new students.", priority: 'High', riskLevel: 'Medium', proof: 'Workshop Attendance', location: 'Auditorium' }
                ]
            }
        ]
    }
]
  

