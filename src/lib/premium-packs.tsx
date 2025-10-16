
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket, Wifi, UserCheck, BarChart3, Link, BrainCircuit, Bot, Syringe, DatabaseZap, Megaphone, Siren, Lock, KeyRound, Users, Banknote, Webcam, Bug, UserCog, PackageCheck, Ambulance, FileWarning, Milestone, DoorClosed, CircleDollarSign, Wind, Thermometer, UserCog2, Key, Router, Pallet, Watch, Drama, Barcode, Stethoscope, SyringeIcon, HeartPulse, Microscope, Bus, BookOpen, Car, Drill, Spray, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, Mask, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask, Store, Pill, Ship, Sun, Film, AnchorIcon, Clapperboard, MonitorPlay, Tv, Library, Brain } from "lucide-react";

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
    sampleItems: string[];
    whoIsItFor: string[];
    previewScenario?: PreviewScenario;
    checklists: Checklist[];
    globalStandards?: {
        title: string;
        standards: { name: string; description: string; }[];
    }
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
        whoIsItFor: ["Hotel Owners", "General Managers", "COOs", "VPs of Operations", "Directors", "Heads of Departments", "GMs", "VPs", "and their teams"],
        sampleItems: [
            "Master hotel finance with 'Annual Budgeting' and 'P&L Review' checklists.",
            "Implement a 'Managerial Performance Review' and 'New Hire Onboarding' system.",
            "Includes a 'Brand Standards Audit' and 'Hotel Pre-Opening' checklist.",
            "Manage your brand's online presence with an 'Online Review & Reputation Management' checklist."
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
            "Master food safety with a HACCP-based 'Kitchen Opening' checklist.",
            "Implement a zero-error 'Food Receiving & Storage' protocol.",
            "Includes a 'New Site Feasibility Study' for expansion planning.",
            "Boost sales with a 'Weekly Sales & Revenue Meeting Agenda'."
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
        whoIsItFor: ["Luxury Brand VPs", "Store Owners", "Heads of Retail Operations", "Security Directors", "Compliance Officers", "GMs", "Directors"],
        sampleItems: [
            "Implement a 'Vault Access Control' checklist based on biometric and dual-approval protocols.",
            "Standardize your 'High-Value Exchange & Handling' SOP to prevent internal fraud.",
            "Ensure 'Digital Transaction Security' with daily QR code and POS validation.",
            "Align with 'BIS Hallmarking' and 'Anti-Money Laundering (AML)' compliance."
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
        whoIsItFor: ["Fashion Retail Owners", "Store Managers", "Merchandisers", "Heads of Retail"],
        sampleItems: [
            "Master 'Seasonal Inventory Management' to reduce dead stock.",
            "Implement a 'Visual Merchandising' checklist for stunning displays.",
            "Secure your store with a 'Fitting Room Operations & Security' protocol.",
            "Streamline 'Omni-Channel Operations' for click-and-collect and online returns."
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
                title: "🧑‍🏫 Staff Training & Performance",
                department: "HR/Management",
                frequency: "Monthly",
                role: "Store Manager",
                summary: "Build a high-performing sales team. This checklist focuses on continuous training, performance tracking, and motivation to drive sales and customer satisfaction.",
                tasks: [
                    { id: 'FAS-HR-01', description: "Conduct product knowledge training for new collections.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Training Room' },
                    { id: 'FAS-HR-02', description: "Review individual sales performance and provide coaching.", priority: 'High', riskLevel: 'Medium', proof: 'Performance Review Notes', location: 'Office' },
                    { id: 'FAS-HR-03', description: "Run role-playing sessions on customer service scenarios (e.g., handling a difficult customer).", priority: 'Medium', riskLevel: 'Low', proof: 'Training Session Log', location: 'Sales Floor' },
                    { id: 'FAS-HR-04', description: "Update staff on current promotions, sales targets, and store KPIs.", priority: 'High', riskLevel: 'Low', proof: 'Communication Log', location: 'Staff Huddle' },
                    { id: 'FAS-HR-05', description: "Ensure all staff have completed mandatory compliance training (e.g., POSH, safety).", priority: 'High', riskLevel: 'High', proof: 'Compliance Training Records', location: 'HR Office' },
                    { id: 'FAS-HR-06', description: "Provide training on visual merchandising standards.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Training Room' },
                    { id: 'FAS-HR-07', description: "Recognize and reward top-performing employees.", priority: 'Medium', riskLevel: 'Low', proof: 'Recognition Program Log', location: 'Office' },
                    { id: 'FAS-HR-08', description: "Conduct regular team meetings to foster communication and teamwork.", priority: 'High', riskLevel: 'Low', proof: 'Meeting Minutes', location: 'Staff Area' },
                    { id: 'FAS-HR-09', description: "Monitor staff morale and address any issues.", priority: 'High', riskLevel: 'Medium', proof: 'Morale Survey', location: 'Office' },
                    { id: 'FAS-HR-10', description: "Have a clear career development path for employees.", priority: 'Medium', riskLevel: 'Low', proof: 'Career Path Document', location: 'HR Office' }
                ]
            }
        ]
    },
    {
        id: 'supermarket_hypermarket_ops_pack',
        title: "Supermarket & Hypermarket Operations",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "A comprehensive toolkit for managing high-volume retail, focusing on fresh food safety, inventory accuracy, and checkout efficiency.",
        icon: <ShoppingBasket className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Supermarket Owners", "Store Directors", "Heads of Retail Operations", "Fresh Food Department Heads", "GMs", "VPs", "Directors"],
        sampleItems: [
            "Implement a 'Fresh Food Department' safety and quality checklist (HACCP).",
            "Standardize 'Goods Receiving & Staging' for high-volume inventory.",
            "Optimize 'Front-End Checkout & Cash Management'.",
            "Includes checklists for 'Planogram Compliance' and 'Daily Store Readiness'."
        ],
        previewScenario: {
            title: "Responding to a Cold Chain Breach",
            description: "A refrigerator unit in the dairy section fails overnight. This scenario shows how checklists for Store Readiness, Fresh Food, and Maintenance work together to prevent massive stock loss and protect customer safety.",
            tasks: [
                { id: 'SM-OPEN-08', description: "Morning temperature check reveals a unit is out of the safe zone.", sourceChecklist: "Daily Store Readiness & Opening", priority: 'High' },
                { id: 'SM-FRESH-01', description: "Immediately quarantine all products from the affected unit and check internal product temperatures.", sourceChecklist: "Fresh Food Department Checklist (HACCP)", priority: 'High' },
                { id: 'SM-FRESH-10', description: "Dispose of all products that have fallen outside the safe temperature range for too long, and log the wastage.", sourceChecklist: "Fresh Food Department Checklist (HACCP)", priority: 'High' },
                { id: 'SM-CASH-09', description: "File a maintenance request and do not restock the unit until it has been certified as safe and functional.", sourceChecklist: "Front-End Checkout & Cash Management", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global Retail & Food Safety Standards",
            standards: [
                { name: "Food Safety", description: "HACCP and local food safety authority guidelines for all fresh departments." },
                { name: "Inventory Management", description: "Best practices for high-volume receiving, stock rotation (FIFO), and cycle counting." },
                { name: "Loss Prevention", description: "Strategies for reducing shrinkage from receiving to point-of-sale." },
                { name: "Workplace Safety", description: "OSHA guidelines for warehouse, stocking, and general store safety." }
            ]
        },
        checklists: [
            {
                title: "🛒 Daily Store Readiness & Opening",
                department: "Operations",
                frequency: "Daily",
                role: "Store Manager",
                summary: "Ensure your store is safe, stocked, and welcoming before the first customer walks in. This comprehensive morning checklist covers cleanliness, safety, and promotional readiness.",
                tasks: [
                    { id: 'SM-OPEN-01', description: "Conduct a full store walkthrough to check for cleanliness, safety hazards, and lighting.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Log', location: 'Entire Store' },
                    { id: 'SM-OPEN-02', description: "Ensure all shopping carts and baskets are clean and available at the entrance.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Entrance' },
                    { id: 'SM-OPEN-03', description: "Verify all POS systems, card terminals, and weighing scales are online and functional.", priority: 'High', riskLevel: 'High', proof: 'System Check Log', location: 'Checkout/Depts' },
                    { id: 'SM-OPEN-04', description: "Check that all promotional signage and pricing are correct and up-to-date.", priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Entire Store' },
                    { id: 'SM-OPEN-05', description: "Hold a brief morning huddle with department heads to discuss daily sales targets and priorities.", priority: 'High', riskLevel: 'Low', proof: 'Meeting Log', location: 'Staff Area' },
                    { id: 'SM-OPEN-06', description: "Ensure restrooms are clean and fully stocked.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Log', location: 'Restrooms' },
                    { id: 'SM-OPEN-08', description: "Check that all aisles are clear of obstructions.", priority: 'High', riskLevel: 'High', proof: 'Aisle Inspection Log', location: 'Aisles' },
                    { id: 'SM-OPEN-08', description: "Verify temperature of all refrigerated and frozen units.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'All Units' },
                    { id: 'SM-OPEN-09', description: "Ensure staff are in proper uniform and ready for service.", priority: 'High', riskLevel: 'Low', proof: 'Staff Check', location: 'Staff Area' },
                    { id: 'SM-OPEN-10', description: "Confirm that security personnel are in place.", priority: 'High', riskLevel: 'High', proof: 'Security Roster', location: 'Entrance/Security Office' }
                ]
            },
            {
                title: "🍎 Fresh Food Department Checklist (HACCP)",
                department: "Fresh Produce/Meat/Dairy",
                frequency: "Daily/Hourly",
                role: "Department Head",
                summary: "Protect customers and your bottom line with a food-safety critical checklist. Manage produce, meat, and dairy departments with rigorous controls for temperature, handling, and rotation.",
                tasks: [
                    { id: 'SM-FRESH-01', description: "Log temperatures of all refrigerated display cases and walk-in coolers every 2 hours.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Fresh Depts' },
                    { id: 'SM-FRESH-02', description: "Inspect all fresh produce for spoilage and remove any substandard items from display.", priority: 'High', riskLevel: 'Medium', proof: 'Culling Log', location: 'Produce Section' },
                    { id: 'SM-FRESH-03', description: "Ensure proper FIFO (First-In, First-Out) rotation is being followed for all items, especially dairy and meat.", priority: 'High', riskLevel: 'High', proof: 'Date Check Audit', location: 'Fresh Depts' },
                    { id: 'SM-FRESH-04', description: "Verify that all food handling surfaces, knives, and equipment are being sanitized at scheduled intervals.", priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Fresh Depts' },
                    { id: 'SM-FRESH-05', description: "Check that all staff handling fresh food are wearing gloves, hairnets, and adhering to hygiene standards.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Fresh Depts' },
                    { id: 'SM-FRESH-06', description: "Ensure proper labeling of all prepared foods with ingredients and expiration dates.", priority: 'High', riskLevel: 'High', proof: 'Label Check', location: 'Deli/Bakery' },
                    { id: 'SM-FRESH-07', description: "Monitor for any signs of cross-contamination between raw and ready-to-eat foods.", priority: 'High', riskLevel: 'High', proof: 'Visual Observation', location: 'Meat/Deli' },
                    { id: 'SM-FRESH-08', description: "Check that thermometers are calibrated weekly.", priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Office' },
                    { id: 'SM-FRESH-09', description: "Ensure pest control measures are in place and effective.", priority: 'High', riskLevel: 'High', proof: 'Pest Control Log', location: 'Entire Store' },
                    { id: 'SM-FRESH-10', description: "Dispose of expired or spoiled food according to store policy.", priority: 'High', riskLevel: 'High', proof: 'Disposal Log', location: 'Waste Area' }
                ]
            },
            {
                title: "📦 Goods Receiving & Staging (High Volume)",
                department: "Logistics/Receiving",
                frequency: "Per Delivery",
                role: "Receiving Manager",
                summary: "Handle dozens of daily deliveries with precision and efficiency. This process manages everything from pallet verification to staging for putaway, ensuring inventory accuracy from the dock.",
                tasks: [
                    { id: 'SM-RECV-01', description: "Schedule all deliveries to avoid dock congestion.", priority: 'High', riskLevel: 'Medium', proof: 'Dock Schedule', location: 'Receiving Office' },
                    { id: 'SM-RECV-02', description: "Verify pallet count and check for visible damage before breaking the seal on a truck.", priority: 'High', riskLevel: 'High', proof: 'Delivery Note Sign-off', location: 'Receiving Dock' },
                    { id: 'SM-RECV-03', description: "Use handheld scanners to receive products against the purchase order in real-time.", priority: 'High', riskLevel: 'High', proof: 'System Log', location: 'Receiving Dock' },
                    { id: 'SM-RECV-04', description: "Segregate received goods by temperature requirement (ambient, chilled, frozen) and stage them for immediate putaway.", priority: 'High', riskLevel: 'High', proof: 'Visual Staging Check', location: 'Receiving Area' },
                    { id: 'SM-RECV-05', description: "Process and document any shortages, damages, or discrepancies with the carrier immediately.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Receiving Office' },
                    { id: 'SM-RECV-06', description: "Check temperature of refrigerated and frozen goods upon arrival.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Receiving Dock' },
                    { id: 'SM-RECV-07', description: "Verify expiry dates of all incoming products.", priority: 'High', riskLevel: 'High', proof: 'Expiry Date Check', location: 'Receiving Dock' },
                    { id: 'SM-RECV-08', description: "Ensure the receiving area is clean and clear of debris.", priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Check', location: 'Receiving Area' },
                    { id: 'SM-RECV-09', description: "Secure the receiving area when not in use.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Receiving Area' },
                    { id: 'SM-RECV-10', description: "Communicate any discrepancies to the procurement team.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Email', location: 'Office' }
                ]
            },
            {
                title: "📜 Planogram & Merchandising Compliance",
                department: "Operations/Merchandising",
                frequency: "Weekly",
                role: "Floor Manager",
                summary: "Maximize sales and maintain brand consistency. This checklist ensures shelves are stocked according to the corporate planogram, driving sales and improving the shopping experience.",
                tasks: [
                    { id: 'SM-PLANO-01', description: "Select a different aisle each week and audit product placement against the official planogram.", priority: 'High', riskLevel: 'Medium', proof: 'Planogram Audit Form', location: 'Aisles' },
                    { id: 'SM-PLANO-02', description: "Ensure shelf labels and pricing match the products on display.", priority: 'High', riskLevel: 'High', proof: 'Label Audit', location: 'Aisles' },
                    { id: 'SM-PLANO-03', description: "Check for out-of-stock items and ensure shelf gaps are filled or correctly flagged.", priority: 'High', riskLevel: 'High', proof: 'Stock Gap Report', location: 'Aisles' },
                    { id: 'SM-PLANO-04', description: "Verify that promotional displays and endcaps are set up according to the marketing calendar.", priority: 'High', riskLevel: 'Medium', proof: 'Promo Display Photo', location: 'Endcaps' },
                    { id: 'SM-PLANO-05', description: "Train staff on the importance of planogram compliance and how to read the diagrams.", priority: 'Medium', riskLevel: 'Low', proof: 'Training Log', location: 'Staff Training' },
                    { id: 'SM-PLANO-06', description: "Ensure aisles are clean and well-lit.", priority: 'High', riskLevel: 'Medium', proof: 'Aisle Cleanliness Check', location: 'Aisles' },
                    { id: 'SM-PLANO-07', description: "Remove any damaged or expired products from the shelves.", priority: 'High', riskLevel: 'High', proof: 'Removal Log', location: 'Aisles' },
                    { id: 'SM-PLANO-08', description: "Check that all products are front-facing and neatly arranged.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Aisles' },
                    { id: 'SM-PLANO-09', description: "Update shelf talkers and other in-aisle marketing materials.", priority: 'Medium', riskLevel: 'Low', proof: 'Marketing Material Audit', location: 'Aisles' },
                    { id: 'SM-PLANO-10', description: "Report any recurring stockout issues to the inventory team.", priority: 'High', riskLevel: 'High', proof: 'Stockout Report', location: 'Office' }
                ]
            },
            {
                title: "💰 Front-End Checkout & Cash Management",
                department: "Front-End",
                frequency: "Daily",
                role: "Head Cashier",
                summary: "Optimize the final and most important customer touchpoint. This checklist improves checkout speed, ensures cash security, and reduces transaction errors.",
                tasks: [
                    { id: 'SM-CASH-01', description: "Ensure adequate number of checkout lanes are open based on customer traffic forecasts.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Roster', location: 'Checkout Area' },
                    { id: 'SM-CASH-02', description: "Perform cash float verification for each POS terminal at the start of the shift.", priority: 'High', riskLevel: 'High', proof: 'Float Count Sheet', location: 'Cash Office' },
                    { id: 'SM-CASH-03', description: "Monitor queue lengths and call for additional cashiers as needed.", priority: 'High', riskLevel: 'Medium', proof: 'Supervisor Log', location: 'Checkout Area' },
                    { id: 'SM-CASH-04', description: "Conduct periodic 'cash lifts' from registers to minimize the amount of cash held at the checkout.", priority: 'High', riskLevel: 'High', proof: 'Cash Lift Log', location: 'Checkout Area' },
                    { id: 'SM-CASH-05', description: "At closing, reconcile cash, card, and digital payments for each POS and investigate all discrepancies.", priority: 'High', riskLevel: 'High', proof: 'End-of-Day Reconciliation Report', location: 'Cash Office' },
                    { id: 'SM-CASH-06', description: "Ensure all checkout staff are trained on handling coupons and promotions.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'SM-CASH-07', description: "Check that all POS hardware is clean and functional.", priority: 'High', riskLevel: 'Medium', proof: 'Hardware Check Log', location: 'Checkout Area' },
                    { id: 'SM-CASH-08', description: "Provide excellent customer service at checkout.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Observation', location: 'Checkout Area' },
                    { id: 'SM-CASH-09', description: "Manage the return and exchange process efficiently.", priority: 'High', riskLevel: 'High', proof: 'Return Log', location: 'Customer Service Desk' },
                    { id: 'SM-CASH-10', description: "Implement measures to prevent sweethearting and other forms of POS fraud.", priority: 'High', riskLevel: 'High', proof: 'Loss Prevention Audit', location: 'Checkout Area' }
                ]
            },
            {
                title: "🛡️ Loss Prevention & Store Security",
                department: "Security",
                frequency: "Daily",
                role: "Loss Prevention Officer",
                summary: "Protect your profits and create a safe shopping environment. This proactive checklist helps deter theft, reduce shrinkage, and manage security risks.",
                tasks: [
                    { id: 'SM-LP-01', description: "Audit EAS (Electronic Article Surveillance) gates, deactivators, and security tags to ensure they are functional.", priority: 'High', riskLevel: 'High', proof: 'EAS Test Log', location: 'Entrance/Checkout' },
                    { id: 'SM-LP-02', description: "Review CCTV footage of 'sweethearting' hotspots like checkouts and receiving docks.", priority: 'High', riskLevel: 'High', proof: 'CCTV Review Log', location: 'Security Office' },
                    { id: 'SM-LP-03', description: "Monitor high-value items (e.g., liquor, electronics) and check inventory levels.", priority: 'High', riskLevel: 'High', proof: 'High-Value Count Sheet', location: 'Specific Aisles' },
                    { id: 'SM-LP-04', description: "Ensure all back doors and emergency exits are alarmed and not propped open.", priority: 'High', riskLevel: 'High', proof: 'Door Check Log', location: 'Perimeter' },
                    { id: 'SM-LP-05', description: "Train front-end staff on procedures for handling counterfeit currency and fraudulent returns.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'SM-LP-06', description: "Conduct uniformed staff patrols in high-theft areas.", priority: 'High', riskLevel: 'Medium', proof: 'Patrol Log', location: 'Sales Floor' },
                    { id: 'SM-LP-07', description: "Implement a clear bag policy for employees.", priority: 'Medium', riskLevel: 'Medium', proof: 'Policy Document', location: 'HR' },
                    { id: 'SM-LP-08', description: "Work with local law enforcement on organized retail crime prevention.", priority: 'Medium', riskLevel: 'Low', proof: 'Meeting Notes', location: 'Office' },
                    { id: 'SM-LP-09', description: "Analyze shrinkage data to identify trends and focus areas.", priority: 'High', riskLevel: 'High', proof: 'Shrinkage Report', location: 'Office' },
                    { id: 'SM-LP-10', description: "Perform regular audits of refund and void transactions.", priority: 'High', riskLevel: 'High', proof: 'Transaction Audit', location: 'Office' }
                ]
            },
            {
                title: "🗑️ Waste Management & Recycling",
                department: "Facilities",
                frequency: "Daily",
                role: "Facilities Coordinator",
                summary: "Manage waste streams efficiently to meet sustainability goals and comply with health codes, focusing on recycling, food waste, and sanitation.",
                tasks: [
                    { id: 'SM-WASTE-01', description: "Ensure separate, clearly labeled bins are available for different waste streams (general, recyclable, food waste).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Back of House' },
                    { id: 'SM-WASTE-02', description: "Check that waste compactors and balers are operational and used correctly.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Check Log', location: 'Waste Area' },
                    { id: 'SM-WASTE-03', description: "Monitor and log the weight of food waste to identify opportunities for reduction.", priority: 'Medium', riskLevel: 'Low', proof: 'Waste Log', location: 'Waste Area' },
                    { id: 'SM-WASTE-04', description: "Schedule regular pickups to prevent overflow and pest issues.", priority: 'High', riskLevel: 'Medium', proof: 'Pickup Schedule', location: 'Office' },
                    { id: 'SM-WASTE-05', description: "Keep the waste and recycling area clean and sanitized to comply with health codes.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Waste Area' },
                    { id: 'SM-WASTE-06', description: "Train staff on proper waste segregation.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'SM-WASTE-07', description: "Ensure hazardous waste is disposed of correctly.", priority: 'High', riskLevel: 'High', proof: 'Hazardous Waste Log', location: 'Waste Area' },
                    { id: 'SM-WASTE-08', description: "Track recycling rates and set improvement targets.", priority: 'Medium', riskLevel: 'Low', proof: 'Recycling Report', location: 'Office' },
                    { id: 'SM-WASTE-09', description: "Comply with all local regulations regarding waste disposal.", priority: 'High', riskLevel: 'High', proof: 'Compliance Audit', location: 'Office' },
                    { id: 'SM-WASTE-10', description: "Explore partnerships for food donation to reduce waste.", priority: 'Medium', riskLevel: 'Low', proof: 'Partnership Agreement', location: 'Office' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Compliance",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "Implement a critical checklist for preventing pests in a large food-handling environment, protecting both product and public health.",
                tasks: [
                    { id: 'PEST-SM-01', description: "Inspect receiving docks, garbage areas, and food departments for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Pest Inspection Log', location: 'Store-wide' },
                    { id: 'PEST-SM-02', description: "Ensure all food in storage and on display is properly covered or sealed.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Store-wide' },
                    { id: 'PEST-SM-03', description: "Check for and seal any cracks or holes in walls, floors, and around pipes that could be entry points.", priority: 'High', riskLevel: 'Medium', proof: 'Structural Inspection Log', location: 'Store-wide' },
                    { id: 'PEST-SM-04', description: "Verify that all pest traps and bait stations are in their correct locations and are being serviced by the vendor.", priority: 'High', riskLevel: 'High', proof: 'Vendor Service Report', location: 'Store-wide' },
                    { id: 'PEST-SM-05', description: "Maintain a high standard of cleanliness, ensuring no food debris is left overnight.", priority: 'High', riskLevel: 'High', proof: 'Closing Cleaning Log', location: 'Store-wide' },
                    { id: 'PEST-SM-06', description: "Keep doors to the outside closed as much as possible.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Audit', location: 'Perimeter' },
                    { id: 'PEST-SM-07', description: "Train staff on how to spot and report pest activity.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'Staff Area' },
                    { id: 'PEST-SM-08', description: "Review pest control logs and take corrective action as needed.", priority: 'High', riskLevel: 'High', proof: 'Log Review', location: 'Office' },
                    { id: 'PEST-SM-09', description: "Ensure that the external area around the store is clean and free of pest attractants.", priority: 'High', riskLevel: 'Medium', proof: 'External Area Inspection', location: 'Exterior' },
                    { id: 'PEST-SM-10', description: "Work with the pest control vendor to develop a long-term prevention plan.", priority: 'High', riskLevel: 'Medium', proof: 'Prevention Plan Document', location: 'Office' }
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
        whoIsItFor: ["Store Managers", "Regional Managers", "GMs", "VPs of Retail", "Directors of Operations", "GMs", "VPs", "Directors"],
        sampleItems: [
            "Standardize Store Opening & Closing procedures for security and readiness.",
            "Implement robust Inventory & Stock Management to prevent shrinkage.",
            "Ensure perfect Product Display & Visual Merchandising compliance.",
            "Master secure Cash & Payment Handling with PCI DSS standards."
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
            }
        ]
    },
    // --- Entertainment & Events ---
    {
        id: 'film_production_pack',
        title: "Film & OTT Production Pack",
        priceUSD: 99.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A global-standard SOP toolkit for managing film production, focusing on safety, compliance, and budget control.",
        icon: <Film className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Film Producers", "Studio Executives", "Line Producers", "Heads of Production", "Directors", "GMs", "VPs"],
        sampleItems: [
            "Ensure legal compliance with 'Pre-Production Clearances' checklist.",
            "Implement 'Film Shoot Safety & Equipment Handling' protocols.",
            "Standardize your 'Post-Production Handover' for smooth workflows.",
            "Includes checklists for 'Cast & Crew Compliance'."
        ],
        previewScenario: {
            title: "Pre-Production Legal Crisis Averted",
            description: "Just weeks before a shoot, the team discovers a potential 'life rights' issue with a character in the script. This scenario shows how checklists for Legal and Pre-Production prevent a multi-million dollar lawsuit.",
            tasks: [
                { id: 'FP-LEGAL-01', description: "Verify all script and music clearances, flagging any character based on a real person.", sourceChecklist: "Legal & Compliance", priority: 'High' },
                { id: 'FP-PP-01', description: "Confirm that chain-of-title documents are secured and 'life rights' agreements are signed BEFORE finalizing the budget.", sourceChecklist: "Pre-Production Planning", priority: 'High' },
                { id: 'FP-PP-02', description: "Ensure 'Errors & Omissions' (E&O) insurance is in place, with the policy covering any potential defamation claims.", sourceChecklist: "Pre-Production Planning", priority: 'High' },
                { id: 'FP-LEGAL-08', description: "Log the legal review and clearance for all characters, creating a verifiable audit trail.", sourceChecklist: "Legal & Compliance", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global Production Standards",
            standards: [
                { name: "Safety & Quality", description: "ISO 45001/9001, OSHA for on-set safety and quality management." },
                { name: "Technical Standards", description: "SMPTE guidelines for camera, audio, and post-production formats." },
                { name: "Legal & Compliance", description: "Protocols for copyright, E&O insurance, and union agreements (e.g., SAG-AFTRA, DGA)." },
                { name: "Data Security", description: "Best practices for managing sensitive script and production data."}
            ]
        },
        checklists: [
            {
                title: "🎬 Pre-Production Planning",
                department: "Production",
                frequency: "Per Project",
                role: "Producer",
                summary: "Build a solid foundation for your film. This checklist ensures all legal, financial, and logistical elements are secured before the camera rolls, preventing costly delays.",
                tasks: [
                    { id: 'FP-PP-01', description: "Verify script is locked and all copyright/chain-of-title documents are secured. (ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Legal Clearance Memo', location: 'Production Office' },
                    { id: 'FP-PP-02', description: "Secure 'Errors & Omissions' (E&O) insurance. (Legal Compliance)", priority: 'High', riskLevel: 'High', proof: 'Insurance Certificate', location: 'Production Office' },
                    { id: 'FP-PP-03', description: "Finalize budget and secure funding tranches. (ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Approved Budget', location: 'Production Office' },
                    { id: 'FP-PP-04', description: "Obtain all necessary permits for chosen locations (film commissions, public property).", priority: 'High', riskLevel: 'High', proof: 'Permit Documents', location: 'Production Office' },
                    { id: 'FP-PP-05', description: "Ensure all cast and key crew contracts are signed, including NDA and IP assignment clauses.", priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'Production Office' },
                    { id: 'FP-PP-06', description: "Develop a detailed production schedule.", priority: 'High', riskLevel: 'High', proof: 'Production Schedule', location: 'Production Office' },
                    { id: 'FP-PP-07', description: "Scout and secure all shooting locations.", priority: 'High', riskLevel: 'High', proof: 'Location Agreements', location: 'Production Office' },
                    { id: 'FP-PP-08', description: "Cast all roles and finalize deals.", priority: 'High', riskLevel: 'High', proof: 'Cast Deal Memos', location: 'Production Office' },
                    { id: 'FP-PP-09', description: "Hire all key department heads.", priority: 'High', riskLevel: 'High', proof: 'Crew Deal Memos', location: 'Production Office' },
                    { id: 'FP-PP-10', description: "Create a storyboard and shot list.", priority: 'High', riskLevel: 'Medium', proof: 'Storyboard/Shot List', location: 'Production Office' }
                ]
            },
            {
                title: "📹 Production Setup & Safety",
                department: "Production/Safety",
                frequency: "Pre-Shoot",
                role: "First AD/Safety Officer",
                summary: "Create a safe and efficient set. This protocol covers mandatory safety briefings, structural checks, and stunt/FX testing to protect your cast and crew.",
                tasks: [
                    { id: 'FP-PS-01', description: "Conduct a mandatory safety briefing for all cast and crew. (ISO 45001)", priority: 'High', riskLevel: 'High', proof: 'Safety Meeting Log', location: 'Set' },
                    { id: 'FP-PS-02', description: "Inspect all set constructions and rigging for structural integrity. (ISO 45001)", priority: 'High', riskLevel: 'High', proof: 'Structural Sign-off', location: 'Set' },
                    { id: 'FP-PS-03', description: "Test all special effects, stunts, and pyrotechnics under controlled conditions. (ISO 45001)", priority: 'High', riskLevel: 'High', proof: 'Test Log & Video', location: 'Set' },
                    { id: 'FP-PS-04', description: "Verify that all electrical equipment is properly grounded and cables are safely managed. (OSHA/ISO 45001)", priority: 'High', riskLevel: 'High', proof: 'Electrical Inspection Report', location: 'Set' },
                    { id: 'FP-PS-05', description: "Ensure first aid stations and designated emergency evacuation routes are clearly marked.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Set' },
                    { id: 'FP-PS-06', description: "Check weather conditions and have a contingency plan for outdoor shoots.", priority: 'High', riskLevel: 'High', proof: 'Weather Report & Plan', location: 'Set' },
                    { id: 'FP-PS-07', description: "Ensure all crew members have the required personal protective equipment (PPE).", priority: 'High', riskLevel: 'High', proof: 'PPE Check', location: 'Set' },
                    { id: 'FP-PS-08', description: "Establish clear communication channels for on-set emergencies.", priority: 'High', riskLevel: 'High', proof: 'Communication Plan', location: 'Set' },
                    { id: 'FP-PS-09', description: "Brief security on crowd control and set access procedures.", priority: 'High', riskLevel: 'High', proof: 'Security Briefing', location: 'Set' },
                    { id: 'FP-PS-10', description: "Have a designated safety officer on set at all times.", priority: 'High', riskLevel: 'High', proof: 'Roster', location: 'Set' }
                ]
            },
            {
                title: "🎥 Daily Shooting Protocol",
                department: "Production",
                frequency: "Daily",
                role: "Director/First AD",
                summary: "Run your set like a well-oiled machine. This daily checklist maintains technical consistency, continuity, and efficiency to keep your production on schedule and on budget.",
                tasks: [
                    { id: 'FP-SHOOT-01', description: "Daily call sheets distributed and acknowledged (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Acknowledgment Log', location: 'Set' },
                    { id: 'FP-SHOOT-02', description: "Scene blocking & rehearsal verification (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Rehearsal Log', location: 'Set' },
                    { id: 'FP-SHOOT-03', description: "Camera & lighting setup according to SMPTE standards", priority: 'High', riskLevel: 'High', proof: 'Setup Log', location: 'Set' },
                    { id: 'FP-SHOOT-04', description: "Sound recording & monitoring (SMPTE Standards; ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Sound Report', location: 'Set' },
                    { id: 'FP-SHOOT-05', description: "Continuity and prop tracking (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Continuity Report', location: 'Set' },
                    { id: 'FP-SHOOT-06', description: "Backup all footage at the end of each shooting day.", priority: 'High', riskLevel: 'High', proof: 'Backup Log', location: 'DIT Station' },
                    { id: 'FP-SHOOT-07', description: "Complete and sign off on daily production reports.", priority: 'High', riskLevel: 'Medium', proof: 'Production Report', location: 'Production Office' },
                    { id: 'FP-SHOOT-08', description: "Manage cast and crew welfare (meals, breaks).", priority: 'High', riskLevel: 'Medium', proof: 'Catering Log', location: 'Set' },
                    { id: 'FP-SHOOT-09', description: "Adhere to child labor laws and regulations if minors are on set.", priority: 'High', riskLevel: 'High', proof: 'Compliance Log', location: 'Set' },
                    { id: 'FP-SHOOT-10', description: "Secure the set at the end of the day.", priority: 'High', riskLevel: 'High', proof: 'Closing Log', location: 'Set' }
                ]
            },
            {
                title: "✂️ Post-Production Workflow",
                department: "Post-Production",
                frequency: "End of Shoot",
                role: "Post-Production Supervisor",
                summary: "Ensure a seamless transition from set to suite. This checklist guarantees a smooth handover, quality control, and a final product that meets global technical standards.",
                tasks: [
                    { id: "FP-POST-01", description: "Verify all footage, sound files, and production notes have been received and cataloged. (ISO 9001)", priority: "High", riskLevel: "High", proof: "Handover Sign-off Sheet", location: "Post-Production Suite" },
                    { id: "FP-POST-02", description: "Create low-resolution proxies for the editing process. (SMPTE)", priority: "High", riskLevel: "Medium", proof: "Proxy Generation Log", location: "Post-Production Suite" },
                    { id: "FP-POST-03", description: "Develop a post-production schedule with milestones for picture lock, sound mix, and color grading. (ISO 9001)", priority: "High", riskLevel: "Medium", proof: "Post Schedule", location: "Post-Production Office" },
                    { id: "FP-POST-04", description: "Establish a clear review and feedback loop with the director and producers. (ISO 9001)", priority: "High", riskLevel: "Medium", proof: "Feedback Process Document", location: "Post-Production Office" },
                    { id: "FP-POST-05", description: "Ensure the project is set up correctly for final delivery formats (e.g., DCP, broadcast). (SMPTE)", priority: "High", riskLevel: "High", proof: "Project Setup Screenshot", location: "Post-Production Suite" },
                    { id: "FP-POST-06", description: "Manage visual effects (VFX) workflow and pipeline.", priority: 'High', riskLevel: 'High', proof: 'VFX Tracker', location: 'VFX Department' },
                    { id: "FP-POST-07", description: "Oversee sound design, Foley, and ADR.", priority: 'High', riskLevel: 'Medium', proof: 'Sound Design Schedule', location: 'Sound Department' },
                    { id: "FP-POST-08", description: "Conduct quality control checks at each stage of post-production.", priority: 'High', riskLevel: 'High', proof: 'QC Reports', location: 'Post-Production Suite' },
                    { id: "FP-POST-09", description: "Manage the music composition and licensing process.", priority: 'High', riskLevel: 'High', proof: 'Music Cue Sheet', location: 'Music Department' },
                    { id: "FP-POST-10", description: "Archive all post-production assets upon project completion.", priority: 'High', riskLevel: 'High', proof: 'Archive Log', location: 'Data Center' }
                ]
            },
            {
                title: "📤 Film Distribution & Marketing",
                department: "Distribution",
                frequency: "Post-Completion",
                role: "Distribution Manager",
                summary: "Prepare your film for the world stage. This checklist ensures all technical assets (DCP, subtitles) and marketing materials are prepared correctly for festivals and distributors.",
                tasks: [
                    { id: "FP-DIST-01", description: "Create a Digital Cinema Package (DCP) for theatrical exhibition. (SMPTE)", priority: "High", riskLevel: "High", proof: "DCP File", location: "Post-Production Suite" },
                    { id: "FP-DIST-02", description: "Generate various video formats required by different streaming platforms and broadcasters.", priority: "High", riskLevel: "High", proof: "Transcoding Log", location: "Post-Production Suite" },
                    { id: "FP-DIST-03", description: "Prepare a complete press kit, including synopsis, cast/crew bios, and high-resolution stills.", priority: "High", riskLevel: "Medium", proof: "Press Kit PDF", location: "Marketing Office" },
                    { id: "FP-DIST-04", description: "Create and QC subtitles in multiple languages.", priority: "High", riskLevel: "Medium", proof: "Subtitle Files (.srt)", location: "Post-Production Suite" },
                    { id: "FP-DIST-05", description: "Archive all project files, including raw footage and final masters, in a secure long-term storage solution.", priority: "High", riskLevel: "High", proof: "Archive Log", location: "Data Center" },
                    { id: "FP-DIST-06", description: "Develop a marketing and promotional strategy.", priority: 'High', riskLevel: 'High', proof: 'Marketing Plan', location: 'Marketing Office' },
                    { id: "FP-DIST-07", description: "Submit the film to festivals.", priority: 'High', riskLevel: 'Medium', proof: 'Festival Submission Log', location: 'Marketing Office' },
                    { id: "FP-DIST-08", description: "Secure distribution deals with theaters, streaming platforms, and broadcasters.", priority: 'High', riskLevel: 'High', proof: 'Distribution Agreements', location: 'Legal Department' },
                    { id: "FP-DIST-09", description: "Manage the film's social media presence.", priority: 'High', riskLevel: 'Medium', proof: 'Social Media Calendar', location: 'Marketing Office' },
                    { id: "FP-DIST-10", description: "Track box office and streaming performance.", priority: 'High', riskLevel: 'High', proof: 'Performance Reports', location: 'Marketing Office' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Admin",
                frequency: "Monthly",
                role: "Admin Manager",
                summary: "Protect valuable equipment and ensure a healthy environment for your cast and crew with this proactive pest management protocol for studios and sets.",
                tasks: [
                    { id: 'PEST-FILM-01', description: "Inspect studios, prop rooms, and craft service areas for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Studio-wide' },
                    { id: 'PEST-FILM-02', description: "Ensure all food and catering waste is disposed of in sealed bins and removed daily.", priority: 'High', riskLevel: 'High', proof: 'Waste Management Log', location: 'Catering Area' },
                    { id: 'PEST-FILM-03', description: "Check that storage areas for costumes and props are clean, dry, and sealed.", priority: 'High', riskLevel: 'Medium', proof: 'Storage Inspection Log', location: 'Prop/Costume Depts' },
                    { id: 'PEST-FILM-04', description: "Review reports from the pest control vendor and ensure all recommendations are actioned.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Action Tracker', location: 'Admin Office' },
                    { id: 'PEST-FILM-05', description: "On location shoots, assess pest-related risks and take appropriate preventive measures.", priority: 'High', riskLevel: 'High', proof: 'Location Risk Assessment', location: 'Location' },
                    { id: 'PEST-FILM-06', description: "Keep a log of all pest sightings and the actions taken.", priority: 'High', riskLevel: 'Medium', proof: 'Pest Sighting Log', location: 'Admin Office' },
                    { id: 'PEST-FILM-07', description: "Ensure that exterior areas around the studio are clean and free of debris.", priority: 'High', riskLevel: 'Medium', proof: 'Exterior Inspection Log', location: 'Exterior' },
                    { id: 'PEST-FILM-08', description: "Use only approved, non-toxic pest control methods in sensitive areas.", priority: 'High', riskLevel: 'High', proof: 'Pest Control Product List', location: 'Admin Office' },
                    { id: 'PEST-FILM-09', description: "Train staff on how to identify and report pest issues.", priority: 'Medium', riskLevel: 'Low', proof: 'Training Log', location: 'HR' },
                    { id: 'PEST-FILM-10', description: "Conduct a thorough pest control audit before and after any major event or shoot.", priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'Admin Office' }
                ]
            },
            {
                title: "⚖️ Legal & Compliance Checklist",
                department: "Legal",
                frequency: "Per Project",
                role: "Legal Counsel",
                summary: "Navigate the complex legal landscape of film production. This checklist ensures all contracts, clearances, and insurance are in place to protect your project from legal challenges.",
                tasks: [
                    { id: 'FP-LEGAL-01', description: "Verify all script and music clearances.", priority: 'High', riskLevel: 'High', proof: 'Clearance Reports', location: 'Legal Department' },
                    { id: 'FP-LEGAL-02', description: "Secure all necessary cast, crew, and location agreements.", priority: 'High', riskLevel: 'High', proof: 'Signed Agreements', location: 'Legal Department' },
                    { id: 'FP-LEGAL-03', description: "Ensure compliance with all union and guild regulations.", priority: 'High', riskLevel: 'High', proof: 'Union Agreements', location: 'Legal Department' },
                    { id: 'FP-LEGAL-04', description: "Obtain all necessary production insurance policies.", priority: 'High', riskLevel: 'High', proof: 'Insurance Certificates', location: 'Legal Department' },
                    { id: 'FP-LEGAL-05', description: "Review and approve all vendor and supplier contracts.", priority: 'High', riskLevel: 'High', proof: 'Contract Review Log', location: 'Legal Department' },
                    { id: 'FP-LEGAL-06', description: "Manage all intellectual property rights and registrations.", priority: 'High', riskLevel: 'High', proof: 'IP Registration Documents', location: 'Legal Department' },
                    { id: 'FP-LEGAL-07', description: "Ensure compliance with all data privacy regulations (GDPR, CCPA).", priority: 'High', riskLevel: 'High', proof: 'Data Privacy Audit', location: 'Legal Department' },
                    { id: 'FP-LEGAL-08', description: "Handle any legal disputes or claims that may arise.", priority: 'High', riskLevel: 'High', proof: 'Dispute Resolution Log', location: 'Legal Department' },
                    { id: 'FP-LEGAL-09', description: "Provide legal guidance to all departments throughout the production process.", priority: 'High', riskLevel: 'High', proof: 'Legal Advice Log', location: 'Legal Department' },
                    { id: 'FP-LEGAL-10', description: "Maintain a comprehensive legal file for the project.", priority: 'High', riskLevel: 'High', proof: 'Legal File', location: 'Legal Department' }
                ]
            },
            {
                title: "📡 Platform Operations Checklist",
                department: "Platform",
                frequency: "Daily",
                role: "Platform Manager",
                summary: "Ensure your OTT platform is running smoothly and providing a great user experience. This checklist covers daily checks for platform health, performance, and content delivery.",
                tasks: [
                    { id: 'FP-PLATFORM-01', description: "Monitor platform uptime and performance.", priority: 'High', riskLevel: 'High', proof: 'Uptime Report', location: 'NOC' },
                    { id: 'FP-PLATFORM-02', description: "Check content delivery network (CDN) performance.", priority: 'High', riskLevel: 'High', proof: 'CDN Report', location: 'NOC' },
                    { id: 'FP-PLATFORM-03', description: "Review user feedback and address any platform-related issues.", priority: 'High', riskLevel: 'Medium', proof: 'User Feedback Log', location: 'Support' },
                    { id: 'FP-PLATFORM-04', description: "Ensure all new content is published correctly and on time.", priority: 'High', riskLevel: 'High', proof: 'Content Publishing Log', location: 'CMS' },
                    { id: 'FP-PLATFORM-05', description: "Monitor for any security threats or vulnerabilities.", priority: 'High', riskLevel: 'High', proof: 'Security Scan Report', location: 'Security' },
                    { id: 'FP-PLATFORM-06', description: "Check that all analytics and tracking are working correctly.", priority: 'High', riskLevel: 'Medium', proof: 'Analytics Dashboard', location: 'Marketing' },
                    { id: 'FP-PLATFORM-07', description: "Ensure all payment and subscription systems are functioning properly.", priority: 'High', riskLevel: 'High', proof: 'Payment System Log', location: 'Finance' },
                    { id: 'FP-PLATFORM-08', description: "Manage user accounts and access control.", priority: 'High', riskLevel: 'High', proof: 'User Management Log', location: 'Admin' },
                    { id: 'FP-PLATFORM-09', description: "Conduct regular platform maintenance and updates.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Log', location: 'IT' },
                    { id: 'FP-PLATFORM-10', description: "Have a disaster recovery plan in place and test it regularly.", priority: 'High', riskLevel: 'High', proof: 'Disaster Recovery Test Log', location: 'IT' }
                ]
            }
        ]
    },
    {
        id: 'ott_platform_pack',
        title: "OTT Platform Pack",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A complete toolkit for managing the digital supply chain of a modern streaming service, from content strategy to platform security.",
        icon: <MonitorPlay className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["OTT Founders", "CTOs", "Heads of Content", "Heads of Engineering", "Product Managers", "VPs", "Directors", "GMs"],
        sampleItems: [
            "Develop a data-driven 'Content Strategy' and acquisition plan.",
            "Ensure a secure and scalable platform with 'Platform Development' checklists.",
            "Standardize 'Content Upload & Management' for quality and efficiency.",
            "Implement 'Compliance & Security' protocols for data and content protection."
        ],
        previewScenario: {
            title: "Handling a Live Sports Streaming Surge",
            description: "A major cricket match is heading into a super-over, causing an unexpected 50% surge in viewership. This scenario shows how checklists for Platform Ops and Development prevent a catastrophic crash.",
            tasks: [
                { id: 'OTT-DEV-08', description: "Auto-scaling protocols, verified in pre-event load tests, automatically spin up new servers to handle the traffic spike.", sourceChecklist: "Platform Development", priority: 'High' },
                { id: 'OTT-OPS-001', description: "NOC team monitors server health in real-time, confirming that the load is being distributed effectively.", sourceChecklist: "Platform Operations", priority: 'High' },
                { id: 'OTT-OPS-002', description: "CDN cache-hit ratio is monitored to ensure the content delivery network is absorbing the majority of the load, protecting origin servers.", sourceChecklist: "Platform Operations", priority: 'High' },
                { id: 'OTT-UPL-03', description: "The system remains stable, delivering a flawless stream to millions of users during the most critical moment of the game.", sourceChecklist: "Content Upload & Management", priority: 'High' }
            ]
        },
         globalStandards: {
            title: "Built on Global Streaming & Tech Standards",
            standards: [
                { name: "Digital & Security", description: "WCAG 2.1 (Accessibility), ISO 27001 (Security), GDPR/DPDP (Privacy), PCI DSS (Payments)." },
                { name: "Content & Broadcast", description: "Technical standards for video encoding, delivery (e.g., HLS/DASH), and metadata." },
                { name: "Cloud Infrastructure", description: "Best practices for scalability, reliability, and security on platforms like AWS, Azure, and GCP." },
                { name: "Quality Management", description: "ISO 9001 for process standardization in content operations and customer support."}
            ]
        },
        checklists: [
            {
                title: "Content Strategy",
                department: "Content",
                frequency: "Quarterly",
                role: "Content Strategist",
                summary: "Build a content library that captivates and retains subscribers. This checklist ensures your content planning is data-driven, compliant, and strategically aligned.",
                tasks: [
                    { id: 'OTT-CS-01', description: "Audience analysis & persona development (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Analysis Report', location: 'Office' },
                    { id: 'OTT-CS-02', description: "Content calendar & scheduling (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Content Calendar', location: 'Office' },
                    { id: 'OTT-CS-03', description: "Acquisition of third-party rights (ISO 9001; Copyright compliance)", priority: 'High', riskLevel: 'High', proof: 'License Agreements', location: 'Office' },
                    { id: 'OTT-CS-04', description: "Original production planning & greenlighting (ISO 9001; Union standards)", priority: 'High', riskLevel: 'High', proof: 'Greenlight Document', location: 'Office' },
                    { id: 'OTT-CS-05', description: "Partnerships & influencer agreements (ISO 9001; Contract compliance)", priority: 'Medium', riskLevel: 'Medium', proof: 'Signed Agreements', location: 'Office' },
                    { id: 'OTT-CS-06', description: "Analyze content performance data to inform future decisions.", priority: 'High', riskLevel: 'High', proof: 'Performance Report', location: 'Office' },
                    { id: 'OTT-CS-07', description: "Monitor competitor content strategies.", priority: 'High', riskLevel: 'Medium', proof: 'Competitor Analysis', location: 'Office' },
                    { id: 'OTT-CS-08', description: "Develop a content localization strategy for different regions.", priority: 'High', riskLevel: 'Medium', proof: 'Localization Plan', location: 'Office' },
                    { id: 'OTT-CS-09', description: "Ensure all content meets brand and editorial guidelines.", priority: 'High', riskLevel: 'Medium', proof: 'Content Audit', location: 'Office' },
                    { id: 'OTT-CS-10', description: "Manage the content budget and track ROI.", priority: 'High', riskLevel: 'High', proof: 'Budget Report', location: 'Office' }
                ]
            },
            {
                title: "Platform Development",
                department: "Tech",
                frequency: "Per Sprint",
                role: "Product Manager",
                summary: "Create a world-class streaming experience. This protocol guides you in building a platform that is secure, user-friendly, accessible, and compliant.",
                tasks: [
                    { id: 'OTT-DEV-01', description: "UI/UX design & accessibility (WCAG 2.1)", priority: 'High', riskLevel: 'Medium', proof: 'Accessibility Audit', location: 'Dev Environment' },
                    { id: 'OTT-DEV-02', description: "Device & OS compatibility testing (ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Test Report', location: 'QA Lab' },
                    { id: 'OTT-DEV-03', description: "Adaptive bitrate streaming setup (ISO/IEC 23009)", priority: 'High', riskLevel: 'High', proof: 'Streaming Config', location: 'Dev Environment' },
                    { id: 'OTT-DEV-04', description: "Payment integration & encryption (PCI DSS)", priority: 'High', riskLevel: 'High', proof: 'PCI Compliance Certificate', location: 'Dev Environment' },
                    { id: 'OTT-DEV-05', description: "Analytics & tracking setup (ISO 9001; GDPR compliance)", priority: 'High', riskLevel: 'Medium', proof: 'Analytics Config', location: 'Dev Environment' },
                    { id: 'OTT-DEV-06', description: "Implement a robust search and recommendation engine.", priority: 'High', riskLevel: 'Medium', proof: 'Search/Reco Config', location: 'Dev Environment' },
                    { id: 'OTT-DEV-07', description: "Develop and test user profile and parental control features.", priority: 'High', riskLevel: 'High', proof: 'Feature Test Report', location: 'QA Lab' },
                    { id: 'OTT-DEV-08', description: "Ensure the platform is scalable to handle traffic spikes.", priority: 'High', riskLevel: 'High', proof: 'Load Test Report', location: 'Dev Environment' },
                    { id: 'OTT-DEV-09', description: "Conduct regular code reviews and security testing.", priority: 'High', riskLevel: 'High', proof: 'Code Review/Security Scan Report', location: 'Dev Environment' },
                    { id: 'OTT-DEV-10', description: "Maintain clear and comprehensive documentation for the platform architecture.", priority: 'High', riskLevel: 'Medium', proof: 'Architecture Document', location: 'Dev Environment' }
                ]
            },
            {
                title: "Content Upload & Management",
                department: "Content Ops",
                frequency: "Per Title",
                role: "Content Ops Manager",
                summary: "Streamline your content pipeline. This checklist ensures every piece of content you upload is high-quality, perfectly tagged, accessible, and ready for global audiences.",
                tasks: [
                    { id: 'OTT-UPL-01', description: "Metadata tagging for search optimization (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Metadata Log', location: 'CMS' },
                    { id: 'OTT-UPL-02', description: "Subtitles, dubbing, and captions (WCAG 2.1)", priority: 'High', riskLevel: 'Medium', proof: 'Subtitle Files', location: 'CMS' },
                    { id: 'OTT-UPL-03', description: "Content release scheduling (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Release Schedule', location: 'CMS' },
                    { id: 'OTT-UPL-04', description: "Quality control checks (resolution, audio sync) (ISO/IEC 23009)", priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'CMS' },
                    { id: 'OTT-UPL-05', description: "Archiving & backup (ISO 9001; ISO 27001)", priority: 'High', riskLevel: 'High', proof: 'Archive Log', location: 'CMS' },
                    { id: 'OTT-UPL-06', description: "Transcode video files into multiple formats for different devices.", priority: 'High', riskLevel: 'High', proof: 'Transcoding Log', location: 'CMS' },
                    { id: 'OTT-UPL-07', description: "Create and upload promotional assets (thumbnails, trailers).", priority: 'High', riskLevel: 'Medium', proof: 'Asset Log', location: 'CMS' },
                    { id: 'OTT-UPL-08', description: "Set content geo-restrictions and other access controls.", priority: 'High', riskLevel: 'High', proof: 'Access Control Config', location: 'CMS' },
                    { id: 'OTT-UPL-09', description: "Ensure all content has correct age ratings and advisories.", priority: 'High', riskLevel: 'High', proof: 'Rating Log', location: 'CMS' },
                    { id: 'OTT-UPL-10', description: "Verify that all content is correctly linked and playable on the platform.", priority: 'High', riskLevel: 'High', proof: 'Playback Test', location: 'Platform' }
                ]
            },
            {
                title: "Marketing & Engagement",
                department: "Marketing",
                frequency: "Per Campaign",
                role: "Marketing Manager",
                summary: "Grow your subscriber base and keep them engaged. This checklist helps you manage launch campaigns, analyze user feedback, and build a loyal community.",
                tasks: [
                    { id: 'OTT-MKTG-01', description: "Launch promotional campaigns (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Campaign Plan', location: 'Marketing Platform' },
                    { id: 'OTT-MKTG-02', description: "Collect & analyze user feedback (ISO 9001; GDPR compliance)", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Report', location: 'Analytics Platform' },
                    { id: 'OTT-MKTG-03', description: "Community building & moderation (ISO 9001)", priority: 'Medium', riskLevel: 'Medium', proof: 'Moderation Log', location: 'Social Media' },
                    { id: 'OTT-MKTG-04', description: "Loyalty programs & incentives (ISO 9001)", priority: 'Medium', riskLevel: 'Low', proof: 'Program Document', location: 'Marketing Platform' },
                    { id: 'OTT-MKTG-05', description: "Influencer & social media campaigns (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Campaign Report', location: 'Social Media' },
                    { id: 'OTT-MKTG-06', description: "Manage email and push notification campaigns.", priority: 'High', riskLevel: 'Medium', proof: 'Campaign Log', location: 'Marketing Platform' },
                    { id: 'OTT-MKTG-07', description: "Track key marketing metrics (CAC, LTV, churn).", priority: 'High', riskLevel: 'High', proof: 'Marketing Dashboard', location: 'Analytics Platform' },
                    { id: 'OTT-MKTG-08', description: "Optimize app store listings (ASO).", priority: 'High', riskLevel: 'Medium', proof: 'ASO Report', location: 'App Stores' },
                    { id: 'OTT-MKTG-09', description: "Run A/B tests on marketing messaging and landing pages.", priority: 'High', riskLevel: 'Medium', proof: 'A/B Test Results', location: 'Marketing Platform' },
                    { id: 'OTT-MKTG-10', description: "Coordinate with PR for press releases and media outreach.", priority: 'High', riskLevel: 'Medium', proof: 'PR Plan', location: 'Marketing Office' }
                ]
            },
            {
                title: "Compliance & Security",
                department: "Security",
                frequency: "Quarterly",
                role: "CISO",
                summary: "Protect your content, users, and platform integrity. This comprehensive checklist covers everything from copyright enforcement and data protection to DRM and accessibility.",
                tasks: [
                    { id: 'OTT-SEC-01', description: "Licensing & copyright enforcement (ISO 9001; Copyright laws)", priority: 'High', riskLevel: 'High', proof: 'Enforcement Log', location: 'Legal Dept' },
                    { id: 'OTT-SEC-02', description: "User data protection (ISO 27001; GDPR)", priority: 'High', riskLevel: 'High', proof: 'Data Protection Audit', location: 'IT Dept' },
                    { id: 'OTT-SEC-03', description: "DRM implementation (ISO/IEC 23009; ISO 27001)", priority: 'High', riskLevel: 'High', proof: 'DRM Config', location: 'IT Dept' },
                    { id: 'OTT-SEC-04', description: "Accessibility checks (WCAG 2.1)", priority: 'High', riskLevel: 'Medium', proof: 'Accessibility Report', location: 'QA Dept' },
                    { id: 'OTT-SEC-05', description: "Audit trails & reporting (ISO 27001; ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Audit Log', location: 'IT Dept' },
                    { id: 'OTT-SEC-06', description: "Conduct regular vulnerability scans and penetration tests.", priority: 'High', riskLevel: 'High', proof: 'Security Scan Report', location: 'Security Office' },
                    { id: 'OTT-SEC-07', description: "Implement a secure software development lifecycle (SSDLC).", priority: 'High', riskLevel: 'High', proof: 'SSDLC Policy', location: 'Dev Dept' },
                    { id: 'OTT-SEC-08', description: "Manage incident response and have a clear breach notification process.", priority: 'High', riskLevel: 'High', proof: 'Incident Response Plan', location: 'Security Office' },
                    { id: 'OTT-SEC-09', description: "Ensure all third-party integrations are secure.", priority: 'High', riskLevel: 'High', proof: 'Third-Party Security Audit', location: 'Security Office' },
                    { id: 'OTT-SEC-10', description: "Provide regular security training for all employees.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' }
                ]
            },
             {
                title: "Legal & Compliance",
                department: "Legal",
                frequency: "Quarterly",
                role: "Compliance Officer",
                summary: "Navigate the complex legal landscape of global streaming. This checklist ensures you adhere to all legal and regulatory requirements, from ToS updates to content laws.",
                tasks: [
                    { id: 'OTT-LEGAL-01', description: "Review and update Terms of Service and Privacy Policy.", priority: 'High', riskLevel: 'High', proof: 'Updated Documents', location: 'Legal Dept' },
                    { id: 'OTT-LEGAL-02', description: "Ensure compliance with regional content regulations.", priority: 'High', riskLevel: 'High', proof: 'Compliance Report', location: 'Legal Dept' },
                    { id: 'OTT-LEGAL-03', description: "Conduct training on data privacy for all employees.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR Dept' },
                    { id: 'OTT-LEGAL-04', description: "Manage and respond to legal notices and takedown requests.", priority: 'High', riskLevel: 'High', proof: 'Legal Case File', location: 'Legal Dept' },
                    { id: 'OTT-LEGAL-05', description: "Audit third-party vendor contracts for compliance clauses.", priority: 'High', riskLevel: 'Medium', proof: 'Contract Audit Report', location: 'Legal Dept' },
                    { id: 'OTT-LEGAL-06', description: "Ensure compliance with advertising and marketing laws.", priority: 'High', riskLevel: 'High', proof: 'Ad Compliance Audit', location: 'Legal Dept' },
                    { id: 'OTT-LEGAL-07', description: "Manage intellectual property (trademarks, copyrights).", priority: 'High', riskLevel: 'High', proof: 'IP Portfolio', location: 'Legal Dept' },
                    { id: 'OTT-LEGAL-08', description: "Handle all corporate governance and compliance matters.", priority: 'High', riskLevel: 'High', proof: 'Compliance Calendar', location: 'Legal Dept' },
                    { id: 'OTT-LEGAL-09', description: "Advise on legal risks associated with new features or markets.", priority: 'High', riskLevel: 'High', proof: 'Risk Assessment', location: 'Legal Dept' },
                    { id: 'OTT-LEGAL-10', description: "Maintain records of all legal and compliance activities.", priority: 'High', riskLevel: 'High', proof: 'Legal Records', location: 'Legal Dept' }
                ]
            },
            {
                title: "Platform Operations",
                department: "Operations",
                frequency: "Daily",
                role: "Ops Manager",
                summary: "Keep your platform running smoothly 24/7. This daily checklist focuses on maintaining stability and performance by monitoring servers, CDNs, and critical error logs.",
                tasks: [
                    { id: 'OTT-OPS-001', description: "Monitor server health and load.", priority: 'High', riskLevel: 'High', proof: 'Monitoring Dashboard', location: 'NOC' },
                    { id: 'OTT-OPS-002', description: "Check CDN performance and cache hit ratio.", priority: 'High', riskLevel: 'High', proof: 'CDN Dashboard', location: 'NOC' },
                    { id: 'OTT-OPS-003', description: "Review application error logs for critical issues.", priority: 'High', riskLevel: 'High', proof: 'Log Management System', location: 'NOC' },
                    { id: 'OTT-OPS-004', description: "Verify backup and disaster recovery jobs completed successfully.", priority: 'High', riskLevel: 'High', proof: 'Backup Log', location: 'NOC' },
                    { id: 'OTT-OPS-005', description: "Handle customer support escalations related to platform issues.", priority: 'High', riskLevel: 'Medium', proof: 'Support Ticket System', location: 'Support Dept' },
                    { id: 'OTT-OPS-006', description: "Monitor database performance.", priority: 'High', riskLevel: 'High', proof: 'Database Dashboard', location: 'NOC' },
                    { id: 'OTT-OPS-007', description: "Check for any latency issues in video streaming.", priority: 'High', riskLevel: 'High', proof: 'Streaming Analytics', location: 'NOC' },
                    { id: 'OTT-OPS-008', description: "Ensure all automated jobs and scripts ran successfully.", priority: 'High', riskLevel: 'Medium', proof: 'Job Log', location: 'NOC' },
                    { id: 'OTT-OPS-009', description: "Communicate any platform issues to internal stakeholders.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'NOC' },
                    { id: 'OTT-OPS-010', description: "Plan and coordinate any scheduled maintenance.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Plan', location: 'Office' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Monthly",
                role: "Facility Manager",
                summary: "Protect sensitive electronics and maintain a professional work environment with this proactive pest management protocol for data centers and offices.",
                tasks: [
                    { id: 'PEST-OTT-01', description: "Inspect data centers, offices, and break rooms for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Pest Inspection Log', location: 'Facility-wide' },
                    { id: 'PEST-OTT-02', description: "Ensure a strict 'no food or drink' policy is enforced in data centers and server rooms.", priority: 'High', riskLevel: 'High', proof: 'Policy Signage & Audit', location: 'Data Centers' },
                    { id: 'PEST-OTT-03', description: "Check that all cable and pipe penetrations into the building are properly sealed.", priority: 'High', riskLevel: 'Medium', proof: 'Structural Inspection Log', location: 'Perimeter' },
                    { id: 'PEST-OTT-04', description: "Keep the area around the building's exterior, especially near air intakes, clear of debris.", priority: 'High', riskLevel: 'Medium', proof: 'Exterior Inspection', location: 'Exterior' },
                    { id: 'PEST-OTT-05', description: "Review and action all recommendations from the professional pest control vendor's report.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Action Tracker', location: 'Office' },
                    { id: 'PEST-OTT-06', description: "Use only non-liquid pest control methods in data centers.", priority: 'High', riskLevel: 'High', proof: 'Pest Control Product List', location: 'Office' },
                    { id: 'PEST-OTT-07', description: "Ensure all waste is disposed of in sealed containers.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Waste Area' },
                    { id: 'PEST-OTT-08', description: "Conduct staff awareness training on pest prevention.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'Staff Area' },
                    { id: 'PEST-OTT-09', description: "Maintain a log of all pest sightings and actions taken.", priority: 'High', riskLevel: 'Medium', proof: 'Pest Sighting Log', location: 'Office' },
                    { id: 'PEST-OTT-10', description: "Regularly clean and inspect under raised flooring in data centers.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Data Centers' }
                ]
            }
        ]
    },
    {
        id: 'theme_park_ops_pack',
        title: "Theme Park & Amusement Park Operations",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A comprehensive toolkit for ensuring visitor safety, ride maintenance, and exceptional guest experiences in a high-stakes environment.",
        icon: <FerrisWheel className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Theme Park GMs", "Directors of Operations", "Heads of Safety", "Chief Engineers", "VPs", "Directors"],
        sampleItems: [
            "Implement a 'Daily Ride Safety & Operations' checklist.",
            "Master 'Crowd Control & Emergency Evacuation' protocols.",
            "Standardize 'Food & Beverage Hygiene (HACCP)' for park outlets.",
            "Includes checklists for 'Character & Performer Management' and 'Water Park Safety'."
        ],
        previewScenario: {
            title: "Responding to a Ride Stoppage Mid-Air",
            description: "A popular rollercoaster stops unexpectedly on a high section of track with guests on board. This scenario shows how checklists for Ride Ops, Engineering, and Emergency Response ensure a safe and professional rescue.",
            tasks: [
                { id: 'TP-RIDE-03', description: "The ride operator immediately engages the emergency stop and reports the stoppage to the central control room.", sourceChecklist: "Daily Ride Safety & Operations", priority: 'High' },
                { id: 'TP-ENG-05', description: "The engineering team is dispatched to assess the fault, following the specific maintenance protocol for that ride.", sourceChecklist: "Ride Maintenance & Engineering", priority: 'High' },
                { id: 'TP-CROWD-08', description: "The emergency response team prepares for a potential high-angle rescue, a scenario practiced in drills.", sourceChecklist: "Crowd Control & Emergency Evacuation", priority: 'High' },
                { id: 'TP-PERF-05', description: "Performers are deployed to manage the crowd and keep guests calm while the situation is resolved.", sourceChecklist: "Character & Performer Management", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global Amusement Park Safety Standards",
            standards: [
                { name: "Ride Safety", description: "ASTM F24 standards for amusement ride design, maintenance, and operation." },
                { name: "Guest Safety", description: "Best practices for crowd management, emergency response, and first aid." },
                { name: "Food & Hygiene", description: "HACCP and local health department standards for all food and beverage outlets." },
                { name: "Water Safety", description: "Protocols for water quality and lifeguard operations in aquatic parks." }
            ]
        },
        checklists: [
            {
                title: "🎢 Daily Ride Safety & Operations",
                department: "Ride Operations",
                frequency: "Daily",
                role: "Ride Supervisor",
                summary: "Ensure zero-incident days with a critical pre-opening checklist that verifies all amusement rides are safe for public operation, from restraints to emergency stops.",
                tasks: [
                    { id: 'TP-RIDE-01', description: "Conduct a full cycle test of each ride with no passengers.", priority: 'High', riskLevel: 'High', proof: 'Test Cycle Log', location: 'Each Ride' },
                    { id: 'TP-RIDE-02', description: "Inspect all safety restraints (harnesses, lap bars) for functionality and wear.", priority: 'High', riskLevel: 'High', proof: 'Restraint Inspection Log', location: 'Each Ride' },
                    { id: 'TP-RIDE-03', description: "Verify all emergency stop buttons are functional.", priority: 'High', riskLevel: 'High', proof: 'E-Stop Test Log', location: 'Each Ride Control Booth' },
                    { id: 'TP-RIDE-04', description: "Check communication systems between ride operators and the main control room.", priority: 'High', riskLevel: 'Medium', proof: 'Comms Check Log', location: 'Each Ride' },
                    { id: 'TP-RIDE-05', description: "Ensure all ride signage (height restrictions, health warnings) is clear and visible.", priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Ride Queues' },
                    { id: 'TP-RIDE-06', description: "Inspect the ride structure for any visible damage or loose parts.", priority: 'High', riskLevel: 'High', proof: 'Structural Inspection Log', location: 'Each Ride' },
                    { id: 'TP-RIDE-07', description: "Check that the ride area is clean and free of debris.", priority: 'High', riskLevel: 'Medium', proof: 'Area Inspection', location: 'Each Ride' },
                    { id: 'TP-RIDE-08', description: "Verify that ride operators are trained and certified for the specific ride.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'TP-RIDE-09', description: "Ensure first aid kits are available and stocked at each ride station.", priority: 'High', riskLevel: 'High', proof: 'First Aid Kit Log', location: 'Each Ride Station' },
                    { id: 'TP-RIDE-10', description: "Log the completion of all pre-opening checks before allowing guests on the ride.", priority: 'High', riskLevel: 'High', proof: 'Pre-Opening Checklist Sign-off', location: 'Ride Control Booth' }
                ]
            },
            {
                title: "👨‍👩‍👧‍👦 Crowd Control & Emergency Evacuation",
                department: "Security/Operations",
                frequency: "Ongoing",
                role: "Security Manager",
                summary: "Prevent chaos and ensure safety during peak hours or emergencies. These protocols help you manage large crowds safely and execute orderly evacuations.",
                tasks: [
                    { id: 'TP-CROWD-01', description: "Monitor crowd density in real-time via CCTV and on-ground staff.", priority: 'High', riskLevel: 'High', proof: 'CCTV Monitoring', location: 'Control Room' },
                    { id: 'TP-CROWD-02', description: "Ensure all emergency exit routes are clear, unobstructed, and well-lit.", priority: 'High', riskLevel: 'High', proof: 'Daily Path Inspection Log', location: 'Park-wide' },
                    { id: 'TP-CROWD-03', description: "Brief all staff on the evacuation plan and their specific roles during an emergency.", priority: 'High', riskLevel: 'High', proof: 'Briefing Log', location: 'Staff Areas' },
                    { id: 'TP-CROWD-04', description: "Test the public address system to ensure announcements can be heard clearly throughout the park.", priority: 'High', riskLevel: 'High', proof: 'PA System Test Log', location: 'Control Room' },
                    { id: 'TP-CROWD-05', description: "Maintain designated 'safe zones' or assembly points for evacuation.", priority: 'High', riskLevel: 'High', proof: 'Venue Map', location: 'Park-wide' },
                    { id: 'TP-CROWD-06', description: "Deploy staff to manage queues and prevent overcrowding at popular rides and shows.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Deployment Plan', location: 'Various' },
                    { id: 'TP-CROWD-07', description: "Have a clear protocol for handling lost children.", priority: 'High', riskLevel: 'High', proof: 'Lost Child Protocol', location: 'Security Office' },
                    { id: 'TP-CROWD-08', description: "Conduct regular drills for various emergency scenarios.", priority: 'High', riskLevel: 'High', proof: 'Drill Reports', location: 'Office' },
                    { id: 'TP-CROWD-09', description: "Coordinate with local emergency services (police, fire, ambulance).", priority: 'High', riskLevel: 'High', proof: 'Contact List', location: 'Control Room' },
                    { id: 'TP-CROWD-10', description: "Ensure staff are trained in crowd psychology and communication techniques.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' }
                ]
            },
            {
                title: "🍔 Food & Beverage Hygiene (HACCP)",
                department: "F&B",
                frequency: "Daily",
                role: "F&B Manager",
                summary: "Uphold the highest food safety standards across all park outlets. This checklist ensures your F&B operations meet stringent HACCP guidelines, protecting guests and your brand.",
                tasks: [
                    { id: 'TP-FB-01', description: "Log temperatures of all refrigerated display cases and walk-in coolers at each outlet.", priority: 'High', riskLevel: 'High', proof: 'Temperature Logs', location: 'All F&B Outlets' },
                    { id: 'TP-FB-02', description: "Check for proper food labeling and dating (FIFO) in all storage areas.", priority: 'High', riskLevel: 'Medium', proof: 'Storage Audit', location: 'All F&B Outlets' },
                    { id: 'TP-FB-03', description: "Ensure handwashing stations are stocked and accessible to all food handlers.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'All F&B Outlets' },
                    { id: 'TP-FB-04', description: "Verify that cooking temperatures are being checked with a calibrated thermometer.", priority: 'High', riskLevel: 'High', proof: 'Cooking Temp Log', location: 'Kitchens' },
                    { id: 'TP-FB-05', description: "Ensure waste bins are covered and trash is disposed of regularly to prevent pests.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Log', location: 'F&B Areas' },
                    { id: 'TP-FB-06', description: "Sanitize all food contact surfaces regularly.", priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'All F&B Outlets' },
                    { id: 'TP-FB-07', description: "Train all F&B staff on food safety and hygiene procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'TP-FB-08', description: "Implement an allergen management program.", priority: 'High', riskLevel: 'High', proof: 'Allergen Management Plan', location: 'F&B Office' },
                    { id: 'TP-FB-09', description: "Conduct regular self-inspections of all F&B outlets.", priority: 'High', riskLevel: 'High', proof: 'Inspection Reports', location: 'F&B Office' },
                    { id: 'TP-FB-10', description: "Maintain a pest control program for all F&B areas.", priority: 'High', riskLevel: 'High', proof: 'Pest Control Logs', location: 'F&B Office' }
                ]
            },
            {
                title: "🎭 Character & Performer Management",
                department: "Entertainment",
                frequency: "Daily",
                role: "Entertainment Manager",
                summary: "Protect your most valuable assets: your performers. This checklist manages the welfare, safety, and performance quality of costumed characters and live entertainers.",
                tasks: [
                    { id: 'TP-PERF-01', description: "Inspect all costumes for cleanliness and damage before each shift.", priority: 'High', riskLevel: 'Medium', proof: 'Costume Inspection Log', location: 'Wardrobe' },
                    { id: 'TP-PERF-02', description: "Ensure performers take mandatory breaks in designated cool-down areas, especially in hot weather.", priority: 'High', riskLevel: 'High', proof: 'Break Schedule Log', location: 'Rest Areas' },
                    { id: 'TP-PERF-03', description: "Provide escorts for costumed characters moving through crowded areas to ensure their safety.", priority: 'High', riskLevel: 'High', proof: 'Escort Deployment Plan', location: 'Park-wide' },
                    { id: 'TP-PERF-04', description: "Brief performers on their schedules, locations, and specific interaction guidelines for the day.", priority: 'High', riskLevel: 'Low', proof: 'Briefing Log', location: 'Green Room' },
                    { id: 'TP-PERF-05', description: "Ensure a clear communication channel between performers/escorts and the central control room.", priority: 'High', riskLevel: 'Medium', proof: 'Comms Check', location: 'Control Room' },
                    { id: 'TP-PERF-06', description: "Train performers on how to handle difficult or aggressive guests.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'TP-PERF-07', description: "Provide adequate hydration for all performers.", priority: 'High', riskLevel: 'High', proof: 'Hydration Station Check', location: 'Rest Areas' },
                    { id: 'TP-PERF-08', description: "Monitor performance quality and provide feedback to performers.", priority: 'Medium', riskLevel: 'Low', proof: 'Performance Review', location: 'Office' },
                    { id: 'TP-PERF-09', description: "Have a clear injury reporting protocol for performers.", priority: 'High', riskLevel: 'High', proof: 'Injury Report Form', location: 'Medical Center' },
                    { id: 'TP-PERF-10', description: "Ensure all performance areas are safe and free of hazards.", priority: 'High', riskLevel: 'High', proof: 'Area Inspection Log', location: 'Performance Areas' }
                ]
            },
            {
                title: "💧 Water Park Safety & Hygiene",
                department: "Aquatics",
                frequency: "Daily/Hourly",
                role: "Aquatics Manager",
                summary: "Ensure a safe and hygienic aquatic environment. This specialized checklist covers water chemistry, lifeguard readiness, and the structural integrity of slides and features.",
                tasks: [
                    { id: 'TP-WATER-01', description: "Test and log water chemistry (chlorine, pH levels) in all pools and attractions hourly.", priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Pools' },
                    { id: 'TP-WATER-02', description: "Inspect all water slides and features for any structural damage or hazards before opening.", priority: 'High', riskLevel: 'High', proof: 'Slide Inspection Log', location: 'Water Park' },
                    { id: 'TP-WATER-03', description: "Ensure all lifeguard stations are manned and lifeguards have proper rescue equipment.", priority: 'High', riskLevel: 'High', proof: 'Lifeguard Deployment Sheet', location: 'Pools' },
                    { id: 'TP-WATER-04', description: "Conduct daily skill drills and rescue scenarios with the lifeguard team.", priority: 'High', riskLevel: 'High', proof: 'Drill Log', location: 'Pools' },
                    { id: 'TP-WATER-05', description: "Verify that all water pumps, filters, and circulation systems are operating correctly.", priority: 'High', riskLevel: 'High', proof: 'Pump Room Log', location: 'Pump Room' },
                    { id: 'TP-WATER-06', description: "Check that all drain covers are secure and in good condition.", priority: 'High', riskLevel: 'High', proof: 'Drain Inspection Log', location: 'Pools' },
                    { id: 'TP-WATER-07', description: "Ensure depth markers and safety signs are clearly visible.", priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Pools' },
                    { id: 'TP-WATER-08', description: "Monitor weather conditions and have a protocol for thunderstorms.", priority: 'High', riskLevel: 'High', proof: 'Weather Protocol', location: 'Office' },
                    { id: 'TP-WATER-09', description: "Ensure locker rooms and shower areas are clean and hygienic.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Locker Rooms' },
                    { id: 'TP-WATER-10', description: "Maintain a log of all incidents and rescues.", priority: 'High', riskLevel: 'High', proof: 'Incident Log', location: 'Office' }
                ]
            },
            {
                title: "🔧 Ride Maintenance & Engineering",
                department: "Engineering",
                frequency: "Daily/Weekly",
                role: "Chief Engineer",
                summary: "Go beyond basic checks with a professional-grade protocol for the scheduled inspection and preventive maintenance of every single ride, ensuring long-term safety and reliability.",
                tasks: [
                    { id: 'TP-ENG-01', description: "Follow the manufacturer's daily/weekly maintenance schedule for each ride.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Records', location: 'Workshop' },
                    { id: 'TP-ENG-02', description: "Perform non-destructive testing (NDT) on critical ride components as per schedule.", priority: 'High', riskLevel: 'High', proof: 'NDT Report', location: 'Workshop' },
                    { id: 'TP-ENG-03', description: "Lubricate all moving parts according to the maintenance manual.", priority: 'High', riskLevel: 'High', proof: 'Lubrication Log', location: 'Each Ride' },
                    { id: 'TP-ENG-04', description: "Inspect and torque critical bolts and fasteners.", priority: 'High', riskLevel: 'High', proof: 'Torque Log', location: 'Each Ride' },
                    { id: 'TP-ENG-05', description: "Document all maintenance and repairs in a central logbook for each ride.", priority: 'High', riskLevel: 'High', proof: 'Ride Logbook', location: 'Engineering Office' },
                    { id: 'TP-ENG-06', description: "Inspect hydraulic and pneumatic systems for leaks.", priority: 'High', riskLevel: 'High', proof: 'System Inspection Log', location: 'Each Ride' },
                    { id: 'TP-ENG-07', description: "Check all electrical systems and wiring for wear and tear.", priority: 'High', riskLevel: 'High', proof: 'Electrical Inspection Log', location: 'Each Ride' },
                    { id: 'TP-ENG-08', description: "Maintain an inventory of critical spare parts.", priority: 'High', riskLevel: 'Medium', proof: 'Spare Parts Inventory', location: 'Workshop' },
                    { id: 'TP-ENG-09', description: "Ensure all maintenance staff are properly trained and certified.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'TP-ENG-10', description: "Review maintenance logs weekly to identify any recurring issues.", priority: 'High', riskLevel: 'High', proof: 'Log Review Report', location: 'Engineering Office' }
                ]
            },
            {
                title: "🚑 First Aid & Medical Services",
                department: "Health Services",
                frequency: "Daily",
                role: "Medical Chief",
                summary: "Be prepared for any medical situation. This checklist ensures your park's medical facilities are ready to handle everything from minor scrapes to major emergencies.",
                tasks: [
                    { id: 'TP-MED-01', description: "Check inventory of all first aid stations to ensure they are fully stocked.", priority: 'High', riskLevel: 'High', proof: 'Inventory Checklist', location: 'First Aid Stations' },
                    { id: 'TP-MED-02', description: "Verify all medical staff (nurses, paramedics) are on duty and their certifications are current.", priority: 'High', riskLevel: 'High', proof: 'Staff Roster & Certs', location: 'Medical Center' },
                    { id: 'TP-MED-03', description: "Test all medical equipment (AEDs, oxygen tanks) to ensure they are functional.", priority: 'High', riskLevel: 'High', proof: 'Equipment Test Log', location: 'Medical Center' },
                    { id: 'TP-MED-04', description: "Review and brief the team on protocols for common incidents (heat stroke, minor injuries).", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Medical Center' },
                    { id: 'TP-MED-05', description: "Ensure clear communication pathways exist between medical staff and park security/operations.", priority: 'High', riskLevel: 'High', proof: 'Comms Check', location: 'Medical Center' },
                    { id: 'TP-MED-06', description: "Check the ambulance or medical vehicle is fueled and ready.", priority: 'High', riskLevel: 'High', proof: 'Vehicle Check Log', location: 'Medical Vehicle Bay' },
                    { id: 'TP-MED-07', description: "Maintain a log of all patients treated and the care provided.", priority: 'High', riskLevel: 'High', proof: 'Patient Log', location: 'Medical Center' },
                    { id: 'TP-MED-08', description: "Ensure proper disposal of all medical waste.", priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Medical Center' },
                    { id: 'TP-MED-09', description: "Provide water and rest areas for guests to prevent heat-related illnesses.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Park-wide' },
                    { id: 'TP-MED-10', description: "Have a clear plan for mass casualty incidents.", priority: 'High', riskLevel: 'High', proof: 'MCI Plan Document', location: 'Office' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Admin",
                frequency: "Monthly",
                role: "Admin Manager",
                summary: "Maintain a clean and pleasant guest environment with a proactive pest management program designed for large parks with high foot traffic and numerous food outlets.",
                tasks: [
                    { id: 'PEST-TP-01', description: "Inspect receiving docks, garbage areas, and food departments for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Pest Inspection Log', location: 'Store-wide' },
                    { id: 'PEST-TP-02', description: "Ensure all food in storage and on display is properly covered or sealed.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Store-wide' },
                    { id: 'PEST-TP-03', description: "Check that garbage and refuse areas are clean and bins are tightly covered.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Exterior/Waste Area' },
                    { id: 'PEST-TP-04', description: "Review reports from the professional pest control vendor and ensure all recommended actions are taken.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Review', location: 'Manager Office' },
                    { id: 'PEST-TP-05', description: "Ensure good drainage across the park to prevent standing water, which can attract mosquitoes.", priority: 'High', riskLevel: 'High', proof: 'Drainage Inspection Log', location: 'Park-wide' },
                    { id: 'PEST-TP-06', description: "Use animal-safe pest control methods in all areas.", priority: 'High', riskLevel: 'High', proof: 'Pest Control Product List', location: 'Office' },
                    { id: 'PEST-TP-07', description: "Train staff on how to spot and report pest activity.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'PEST-TP-08', description: "Maintain a log of all pest sightings and actions taken.", priority: 'High', riskLevel: 'Medium', proof: 'Pest Sighting Log', location: 'Office' },
                    { id: 'PEST-TP-09', description: "Ensure that the external area around the store is clean and free of pest attractants.", priority: 'High', riskLevel: 'Medium', proof: 'External Area Inspection', location: 'Exterior' },
                    { id: 'PEST-TP-10', description: "Work with the pest control vendor to develop a long-term prevention plan.", priority: 'High', riskLevel: 'Medium', proof: 'Prevention Plan Document', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'sports_clubs_facilities_pack',
        title: "Sports Clubs & Stadium Operations",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "An advanced compliance and operations suite for managing sports facilities, focusing on athlete safety, event management, and infrastructure.",
        icon: <Trophy className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Sports Club GMs", "Stadium Managers", "Directors of Operations", "Heads of Facilities", "VPs", "Directors"],
        sampleItems: [
            "NEW: Ensure flawless 'Tournament & Event Management' execution.",
            "NEW: Master 'Sports Infrastructure & Equipment Maintenance' for grounds and courts.",
            "Prevent injuries with a 'Member & Guest Safety' checklist.",
            "Includes 'Fire & Emergency Preparedness' and 'Seasonal Readiness' protocols."
        ],
        previewScenario: {
            title: "Hosting a High-Stakes Tournament",
            description: "You're hosting a major regional tournament with live broadcasting. This scenario shows how checklists for Events, Infrastructure, and Safety work in harmony to deliver a flawless, professional, and safe event.",
            tasks: [
                { id: 'SPORT-EVENT-02', description: "Coordinate with all stakeholders (teams, officials, broadcasters, security) in a pre-event briefing.", sourceChecklist: "Tournament & Event Management", priority: 'High' },
                { id: 'SPORT-INFRA-01', description: "Inspect the playing surface for safety and compliance with tournament regulations.", sourceChecklist: "Sports Infrastructure & Equipment Maintenance", priority: 'High' },
                { id: 'SPORT-MEMBER-03', description: "Monitor crowd density and manage entry/exit flows to prevent overcrowding.", sourceChecklist: "Member & Guest Safety", priority: 'High' },
                { id: 'SPORT-FIRE-03', description: "Verify all emergency exits are unobstructed and staff are in position for evacuation, if needed.", sourceChecklist: "Fire & Emergency Preparedness", priority: 'High' }
            ]
        },
         globalStandards: {
            title: "Built on a Global & National Compliance Framework",
            standards: [
                { name: "Health & Safety (ISO 45001)", description: "Ensures workplace safety and accident prevention." },
                { name: "Hygiene & Sanitation (WHO)", description: "Maintains health standards for members and staff." },
                { name: "Access & Data Privacy (GDPR/DPDP)", description: "Protects member data and secures facility access." },
                { name: "Fire & Emergency (NFPA/NBC)", description: "Guarantees readiness for any emergency situation." }
            ]
        },
        checklists: [
            {
                title: "🏅 Sports Infrastructure & Equipment Maintenance",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Supervisor",
                summary: "Ensure the safety and quality of your sports facilities. This checklist covers everything from turf management to goalpost integrity, preventing injuries and extending asset life.",
                tasks: [
                    { id: 'SPORT-INFRA-01', description: "Inspect playing surfaces (turf, courts) for damage, hazards, or wear.", priority: 'High', riskLevel: 'High', proof: 'Surface Inspection Log', location: 'Playing Fields/Courts' },
                    { id: 'SPORT-INFRA-02', description: "Check all sports equipment (goalposts, nets, backboards) for stability and damage.", priority: 'High', riskLevel: 'High', proof: 'Equipment Inspection Log', location: 'Playing Fields/Courts' },
                    { id: 'SPORT-INFRA-03', description: "Verify that field markings are clear and accurate.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Playing Fields/Courts' },
                    { id: 'SPORT-INFRA-04', description: "Ensure proper irrigation and drainage of all natural turf fields.", priority: 'High', riskLevel: 'Medium', proof: 'Irrigation System Check', location: 'Fields' },
                    { id: 'SPORT-INFRA-05', description: "Inspect spectator seating and bleachers for structural integrity and safety.", priority: 'High', riskLevel: 'High', proof: 'Seating Inspection Log', location: 'Spectator Areas' },
                    { id: 'SPORT-INFRA-06', description: "Check sports lighting for functionality and proper alignment.", priority: 'High', riskLevel: 'Medium', proof: 'Lighting Inspection Log', location: 'Playing Fields/Courts' },
                    { id: 'SPORT-INFRA-07', description: "Inspect fencing and perimeter for security and safety.", priority: 'High', riskLevel: 'Medium', proof: 'Fencing Inspection Log', location: 'Perimeter' },
                    { id: 'SPORT-INFRA-08', description: "Ensure player benches and locker rooms are clean and well-maintained.", priority: 'High', riskLevel: 'Medium', proof: 'Locker Room Inspection', location: 'Locker Rooms' },
                    { id: 'SPORT-INFRA-09', description: "Verify that scoreboards and timing systems are operational.", priority: 'High', riskLevel: 'Medium', proof: 'Scoreboard Test Log', location: 'Playing Fields/Courts' },
                    { id: 'SPORT-INFRA-10', description: "Maintain a log of all maintenance and repair activities for sports infrastructure.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Logbook', location: 'Office' }
                ]
            },
            {
                title: "🏟️ Tournament & Event Management",
                department: "Events",
                frequency: "Per Event",
                role: "Event Manager",
                summary: "Execute flawless sporting events. This master checklist covers pre-event setup, on-the-day coordination, and post-event breakdown, ensuring a professional experience for athletes and fans.",
                tasks: [
                    { id: 'SPORT-EVENT-01', description: "Develop a comprehensive event plan, including timelines, responsibilities, and budget.", priority: 'High', riskLevel: 'High', proof: 'Event Plan Document', location: 'Office' },
                    { id: 'SPORT-EVENT-02', description: "Coordinate with all stakeholders (teams, officials, security, medical).", priority: 'High', riskLevel: 'High', proof: 'Stakeholder Meeting Minutes', location: 'Office' },
                    { id: 'SPORT-EVENT-03', description: "Set up all required infrastructure (signage, barricades, registration desks).", priority: 'High', riskLevel: 'Medium', proof: 'Setup Checklist', location: 'Venue' },
                    { id: 'SPORT-EVENT-04', description: "Conduct a pre-event briefing with all staff and volunteers.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Venue' },
                    { id: 'SPORT-EVENT-05', description: "Manage post-event cleanup, breakdown, and final financial reconciliation.", priority: 'High', riskLevel: 'Medium', proof: 'Post-Event Report', location: 'Office' },
                    { id: 'SPORT-EVENT-06', description: "Arrange for ticketing and access control.", priority: 'High', riskLevel: 'High', proof: 'Ticketing Plan', location: 'Office' },
                    { id: 'SPORT-EVENT-07', description: "Plan for media and broadcast requirements.", priority: 'High', riskLevel: 'Medium', proof: 'Media Plan', location: 'Office' },
                    { id: 'SPORT-EVENT-08', description: "Ensure adequate staffing for all event roles.", priority: 'High', riskLevel: 'High', proof: 'Staffing Plan', location: 'Office' },
                    { id: 'SPORT-EVENT-09', description: "Manage transportation and parking for the event.", priority: 'High', riskLevel: 'Medium', proof: 'Transportation Plan', location: 'Office' },
                    { id: 'SPORT-EVENT-10', description: "Have a contingency plan for weather or other disruptions.", priority: 'High', riskLevel: 'High', proof: 'Contingency Plan', location: 'Office' }
                ]
            },
            {
                title: "🛡️ Member & Guest Safety",
                department: "Operations",
                frequency: "Daily",
                role: "Operations Manager",
                summary: "Create a safe and welcoming environment for your members. This daily checklist focuses on facility readiness, from first aid availability to clear safety signage.",
                tasks: [
                    { id: 'SPORT-MEMBER-01', description: "Ensure all first aid kits and AED devices are stocked and accessible.", priority: 'High', riskLevel: 'High', proof: 'First Aid Kit Log', location: 'Various' },
                    { id: 'SPORT-MEMBER-02', description: "Check that all safety rules and regulations are clearly posted.", priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Various' },
                    { id: 'SPORT-MEMBER-03', description: "Monitor facility usage to prevent overcrowding.", priority: 'High', riskLevel: 'Medium', proof: 'Capacity Monitoring Log', location: 'Control Room' },
                    { id: 'SPORT-MEMBER-04', description: "Ensure staff are trained in basic first aid and emergency response.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'SPORT-MEMBER-05', description: "Log and address any member-reported safety concerns promptly.", priority: 'High', riskLevel: 'High', proof: 'Incident/Concern Log', location: 'Front Desk/Office' },
                    { id: 'SPORT-MEMBER-06', description: "Check for any slip, trip, or fall hazards throughout the facility.", priority: 'High', riskLevel: 'High', proof: 'Hazard Inspection Log', location: 'Various' },
                    { id: 'SPORT-MEMBER-07', description: "Ensure adequate lighting in all areas, including parking lots.", priority: 'High', riskLevel: 'Medium', proof: 'Lighting Inspection', location: 'Various' },
                    { id: 'SPORT-MEMBER-08', description: "Have a clear procedure for handling medical emergencies.", priority: 'High', riskLevel: 'High', proof: 'Medical Emergency Protocol', location: 'Office' },
                    { id: 'SPORT-MEMBER-09', description: "Provide access to drinking water for all members and guests.", priority: 'High', riskLevel: 'Medium', proof: 'Water Station Check', location: 'Various' },
                    { id: 'SPORT-MEMBER-10', description: "Ensure all staff are easily identifiable with uniforms or name badges.", priority: 'High', riskLevel: 'Low', proof: 'Staff Appearance Check', location: 'Various' }
                ]
            },
            {
                title: "🔥 Fire & Emergency Preparedness",
                department: "Safety",
                frequency: "Monthly",
                role: "Safety Officer",
                summary: "Be prepared for any crisis. This checklist ensures your facility is always ready for a fire or other emergency, from functional equipment to trained staff.",
                tasks: [
                    { id: 'SPORT-FIRE-01', description: "Inspect all fire extinguishers for charge and accessibility.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Inspection Log', location: 'Various' },
                    { id: 'SPORT-FIRE-02', description: "Test fire alarm systems and emergency lighting.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Control Panel' },
                    { id: 'SPORT-FIRE-03', description: "Ensure all emergency exits and evacuation routes are unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Exit Path Inspection', location: 'Various' },
                    { id: 'SPORT-FIRE-04', description: "Conduct regular fire drills and evacuation exercises with staff.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Office' },
                    { id: 'SPORT-FIRE-05', description: "Maintain an updated emergency contact list for all key personnel and services.", priority: 'High', riskLevel: 'Medium', proof: 'Contact List', location: 'Office/Control Room' },
                    { id: 'SPORT-FIRE-06', description: "Check that sprinkler systems are functional and inspected annually.", priority: 'High', riskLevel: 'High', proof: 'Sprinkler Inspection Report', location: 'Office' },
                    { id: 'SPORT-FIRE-07', description: "Ensure flammable materials are stored safely.", priority: 'High', riskLevel: 'High', proof: 'Storage Area Audit', location: 'Storeroom' },
                    { id: 'SPORT-FIRE-08', description: "Train staff on the use of fire extinguishers.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'SPORT-FIRE-09', description: "Have a clear communication plan for emergencies.", priority: 'High', riskLevel: 'High', proof: 'Communication Plan', location: 'Office' },
                    { id: 'SPORT-FIRE-10', description: "Review and update the fire safety plan annually.", priority: 'High', riskLevel: 'High', proof: 'Plan Review Minutes', location: 'Office' }
                ]
            },
            {
                title: "🤝 Vendor & Contractor Management",
                department: "Procurement/Facilities",
                frequency: "Per Contract",
                role: "Facilities Manager",
                summary: "Ensure third-party vendors meet your standards for quality and safety. This checklist covers everything from vendor selection to on-site work supervision.",
                tasks: [
                    { id: 'SPORT-VENDOR-01', description: "Pre-qualify vendors based on licenses, insurance, and safety records.", priority: 'High', riskLevel: 'High', proof: 'Vendor Qualification Form', location: 'Office' },
                    { id: 'SPORT-VENDOR-02', description: "Establish a clear Service Level Agreement (SLA) for every contract.", priority: 'High', riskLevel: 'High', proof: 'Signed SLA', location: 'Office' },
                    { id: 'SPORT-VENDOR-03', description: "Conduct a safety briefing for all on-site contractors before they begin work.", priority: 'High', riskLevel: 'High', proof: 'Safety Briefing Sign-off', location: 'Site' },
                    { id: 'SPORT-VENDOR-04', description: "Monitor vendor performance against the SLA and provide feedback.", priority: 'High', riskLevel: 'Medium', proof: 'Performance Review Notes', location: 'Office' },
                    { id: 'SPORT-VENDOR-05', description: "Review and approve all vendor invoices against work completed.", priority: 'High', riskLevel: 'Medium', proof: 'Invoice Approval', location: 'Office' },
                    { id: 'SPORT-VENDOR-06', description: "Ensure all contractors have the required work permits.", priority: 'High', riskLevel: 'High', proof: 'Work Permit Log', location: 'Site' },
                    { id: 'SPORT-VENDOR-07', description: "Provide contractors with a copy of the facility's safety rules.", priority: 'High', riskLevel: 'High', proof: 'Policy Acknowledgment', location: 'Site' },
                    { id: 'SPORT-VENDOR-08', description: "Supervise contractor work to ensure compliance with safety standards.", priority: 'High', riskLevel: 'High', proof: 'Supervision Log', location: 'Site' },
                    { id: 'SPORT-VENDOR-09', description: "Conduct a final inspection of contractor work before sign-off.", priority: 'High', riskLevel: 'High', proof: 'Final Inspection Report', location: 'Site' },
                    { id: 'SPORT-VENDOR-10', description: "Maintain a database of approved vendors.", priority: 'Medium', riskLevel: 'Low', proof: 'Vendor Database', location: 'Office' }
                ]
            },
            {
                title: "🔐 Data Privacy & Cybersecurity Compliance",
                department: "IT/Security",
                frequency: "Quarterly",
                role: "IT Manager",
                summary: "Protect your members' data and your club's reputation. This checklist helps you comply with data privacy laws (like GDPR/DPDP) and defend against common cyber threats.",
                tasks: [
                    { id: 'SPORT-CYBER-01', description: "Review and update the club's data privacy policy.", priority: 'High', riskLevel: 'High', proof: 'Privacy Policy Document', location: 'Office' },
                    { id: 'SPORT-CYBER-02', description: "Conduct a quarterly audit of user access rights to member databases.", priority: 'High', riskLevel: 'High', proof: 'Access Rights Audit Report', location: 'IT Office' },
                    { id: 'SPORT-CYBER-03', description: "Ensure all systems processing member data are encrypted and patched.", priority: 'High', riskLevel: 'High', proof: 'System Security Scan', location: 'IT Office' },
                    { id: 'SPORT-CYBER-04', description: "Run a simulated phishing campaign to train staff on cybersecurity awareness.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Campaign Report', location: 'Office' },
                    { id: 'SPORT-CYBER-05', description: "Test the data breach incident response plan.", priority: 'High', riskLevel: 'High', proof: 'Breach Drill Report', location: 'Office' },
                    { id: 'SPORT-CYBER-06', description: "Ensure all member data is backed up securely.", priority: 'High', riskLevel: 'High', proof: 'Backup Log', location: 'IT Office' },
                    { id: 'SPORT-CYBER-07', description: "Use strong passwords and multi-factor authentication for all systems.", priority: 'High', riskLevel: 'High', proof: 'Password Policy', location: 'IT Office' },
                    { id: 'SPORT-CYBER-08', description: "Secure the Wi-Fi network and separate guest and internal networks.", priority: 'High', riskLevel: 'High', proof: 'Network Configuration', location: 'IT Office' },
                    { id: 'SPORT-CYBER-09', description: "Dispose of old hardware securely to prevent data leakage.", priority: 'High', riskLevel: 'High', proof: 'Disposal Certificate', location: 'IT Office' },
                    { id: 'SPORT-CYBER-10', description: "Stay updated on the latest cybersecurity threats and best practices.", priority: 'High', riskLevel: 'Medium', proof: 'Threat Intelligence Report', location: 'Office' }
                ]
            },
            {
                title: "💧 Monsoon & Seasonal Facility Readiness",
                department: "Facilities",
                frequency: "Pre-Season",
                role: "Facility Manager",
                summary: "Prepare your facility for seasonal challenges like heavy rain or extreme heat, preventing flooding, equipment damage, and operational disruptions.",
                tasks: [
                    { id: 'SPORT-SEASON-01', description: "Inspect and clean all roof drains, gutters, and storm water drainage systems.", priority: 'High', riskLevel: 'High', proof: 'Drainage Inspection Log', location: 'Exterior/Roof' },
                    { id: 'SPORT-SEASON-02', description: "Test all sump pumps and backup power systems for drainage.", priority: 'High', riskLevel: 'High', proof: 'Pump Test Log', location: 'Basement/Pump Rooms' },
                    { id: 'SPORT-SEASON-03', description: "Check all external structures (fencing, scoreboards) for wind resistance.", priority: 'High', riskLevel: 'High', proof: 'Structural Integrity Check', location: 'Exterior' },
                    { id: 'SPORT-SEASON-04', description: "Review and update the extreme weather emergency response plan.", priority: 'High', riskLevel: 'High', proof: 'Updated Plan Document', location: 'Office' },
                    { id: 'SPORT-SEASON-05', description: "Stock up on necessary seasonal supplies (e.g., sandbags for flooding, extra water for heatwaves).", priority: 'Medium', riskLevel: 'Medium', proof: 'Inventory Check', location: 'Storage' },
                    { id: 'SPORT-SEASON-06', description: "Inspect waterproofing of all buildings.", priority: 'High', riskLevel: 'High', proof: 'Waterproofing Inspection Report', location: 'Exterior' },
                    { id: 'SPORT-SEASON-07', description: "Check for any trees or branches that could pose a hazard in high winds.", priority: 'High', riskLevel: 'High', proof: 'Tree Survey', location: 'Grounds' },
                    { id: 'SPORT-SEASON-08', description: "Ensure all outdoor furniture and equipment can be secured or moved indoors.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Storage Plan', location: 'Various' },
                    { id: 'SPORT-SEASON-09', description: "Test the facility's lightning protection system.", priority: 'High', riskLevel: 'High', proof: 'Lightning System Test', location: 'Roof' },
                    { id: 'SPORT-SEASON-10', description: "Communicate seasonal safety information to all members and staff.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Office' }
                ]
            },
            {
                title: "🧯 Food Court Fire & Vendor Safety Checklist",
                department: "Safety",
                frequency: "Daily",
                role: "Safety Officer",
                summary: "Manage the high-risk environment of food courts within a stadium. This checklist ensures all vendors are compliant with fire safety and hygiene standards.",
                tasks: [
                    { id: 'SPORT-FOOD-01', description: "Inspect each food stall's gas cylinders and connections for leaks.", priority: 'High', riskLevel: 'High', proof: 'Gas Leak Test Log', location: 'Food Court' },
                    { id: 'SPORT-FOOD-02', description: "Verify that each stall has a functional, in-date fire extinguisher (Class K for kitchens).", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Check', location: 'Food Court' },
                    { id: 'SPORT-FOOD-03', description: "Check that cooking hood suppression systems are clean and serviced.", priority: 'High', riskLevel: 'High', proof: 'Service Tag', location: 'Food Court' },
                    { id: 'SPORT-FOOD-04', description: "Ensure all food vendors have trained their staff on basic fire safety.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Vendor Files' },
                    { id: 'SPORT-FOOD-05', description: "Check for proper food handling and temperature control at each stall.", priority: 'High', riskLevel: 'High', proof: 'Hygiene Inspection', location: 'Food Court' },
                    { id: 'SPORT-FOOD-06', description: "Ensure electrical wiring for stalls is safe and not overloaded.", priority: 'High', riskLevel: 'High', proof: 'Electrical Inspection', location: 'Food Court' },
                    { id: 'SPORT-FOOD-07', description: "Verify that all vendors have the required food handling permits.", priority: 'High', riskLevel: 'High', proof: 'Permit Check', location: 'Vendor Files' },
                    { id: 'SPORT-FOOD-08', description: "Check that waste is being disposed of correctly to prevent pest issues.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Audit', location: 'Food Court' },
                    { id: 'SPORT-FOOD-09', description: "Ensure clear access to all fire hydrants and hose reels in the food court area.", priority: 'High', riskLevel: 'High', proof: 'Access Check', location: 'Food Court' },
                    { id: 'SPORT-FOOD-10', description: "Conduct a daily safety briefing with all food court vendors.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Food Court' }
                ]
            }
        ]
    },
    {
        id: 'fitness_centers_gyms_pack',
        title: "Fitness Centers & Gyms Pack",
        priceUSD: 99.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Wellness & Beauty",
        description: "A complete operational toolkit for gym owners to ensure member safety, equipment reliability, and a premium fitness experience.",
        icon: <Dumbbell className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Gym Owners", "Fitness Center Managers", "Heads of Operations", "Personal Training Directors", "GMs", "VPs", "Directors"],
        sampleItems: [
            "Implement a 'Daily Equipment Safety & Functionality' check.",
            "Standardize 'Facility Hygiene & Cleanliness' to build member trust.",
            "Manage 'Member Onboarding & Health Screening' to reduce risk.",
            "Includes checklists for 'Emergency Response' and 'Staff Certification'."
        ],
        previewScenario: {
            title: "Handling a Member Injury",
            description: "A member reports an injury while using a piece of equipment. This scenario shows how checklists for Equipment Safety, Emergency Response, and Member Onboarding work together to manage the situation professionally and minimize liability.",
            tasks: [
                { id: 'GYM-EMERG-02', description: "Staff immediately retrieve the first aid kit and assess the injury, while another calls for professional medical help if needed.", sourceChecklist: "Emergency Response Protocol", priority: 'High' },
                { id: 'GYM-EQUIP-05', description: "The equipment involved in the incident is immediately put 'Out of Order' and logged for a full maintenance inspection.", sourceChecklist: "Daily Equipment Safety & Functionality", priority: 'High' },
                { id: 'GYM-EMERG-05', description: "An incident report is filed, documenting the time, location, persons involved, and actions taken.", sourceChecklist: "Emergency Response Protocol", priority: 'High' },
                { id: 'GYM-MEMBER-04', description: "The member's signed liability waiver and PAR-Q form are retrieved from their file to review for any pre-existing conditions.", sourceChecklist: "Member Onboarding & Health Screening", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global Fitness & Safety Standards",
            standards: [
                { name: "Equipment Safety", description: "Protocols aligned with manufacturer guidelines and best practices for preventive maintenance." },
                { name: "Member Safety", description: "Best practices for health screening, emergency response, and staff certification (e.g., CPR/AED)." },
                { name: "Hygiene", description: "Standards for facility cleanliness to prevent the spread of infections." },
                { name: "Workplace Safety", description: "OSHA guidelines for gym operations and staff safety." }
            ]
        },
        checklists: [
            {
                title: "🏋️ Daily Equipment Safety & Functionality",
                department: "Operations",
                frequency: "Daily",
                role: "Floor Manager",
                summary: "Prevent member injuries and equipment downtime with a rigorous daily inspection of all fitness machines, weights, and accessories.",
                tasks: [
                    { id: 'GYM-EQUIP-01', description: "Inspect all cardio machines (treadmills, ellipticals) for error codes and smooth operation.", priority: 'High', riskLevel: 'High', proof: 'Equipment Log', location: 'Cardio Area' },
                    { id: 'GYM-EQUIP-02', description: "Check all strength machines for frayed cables, loose bolts, and proper function.", priority: 'High', riskLevel: 'High', proof: 'Equipment Log', location: 'Strength Area' },
                    { id: 'GYM-EQUIP-03', description: "Ensure all free weights, benches, and racks are in good condition and stored correctly.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Free Weight Area' },
                    { id: 'GYM-EQUIP-04', description: "Wipe down and sanitize all equipment touchpoints.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Entire Gym' },
                    { id: 'GYM-EQUIP-05', description: "Place 'Out of Order' signs on any malfunctioning equipment and log it for repair.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Request Log', location: 'Affected Equipment' },
                    { id: 'GYM-EQUIP-06', description: "Test emergency stop buttons on all treadmills.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Cardio Area' },
                    { id: 'GYM-EQUIP-07', description: "Check for any loose or broken parts on spinning bikes.", priority: 'High', riskLevel: 'High', proof: 'Bike Inspection Log', location: 'Spin Studio' },
                    { id: 'GYM-EQUIP-08', description: "Inspect yoga mats, resistance bands, and other accessories for wear and tear.", priority: 'Medium', riskLevel: 'Low', proof: 'Accessory Inspection Log', location: 'Studio' },
                    { id: 'GYM-EQUIP-09', description: "Ensure all equipment is returned to its designated place at the end of the day.", priority: 'High', riskLevel: 'Low', proof: 'Closing Checklist', location: 'Entire Gym' },
                    { id: 'GYM-EQUIP-10', description: "Review equipment maintenance logs and schedule preventive maintenance.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Schedule', location: 'Office' }
                ]
            },
            {
                title: "🧼 Facility Hygiene & Cleanliness",
                department: "Housekeeping",
                frequency: "Daily/Hourly",
                role: "Housekeeping Staff",
                summary: "Build member confidence with a spotless facility. This checklist ensures locker rooms, workout areas, and common spaces meet the highest standards of hygiene.",
                tasks: [
                    { id: 'GYM-HYGIENE-01', description: "Clean and disinfect showers, toilets, and sinks in the locker rooms.", priority: 'High', riskLevel: 'High', proof: 'Locker Room Cleaning Log', location: 'Locker Rooms' },
                    { id: 'GYM-HYGIENE-02', description: "Restock supplies (soap, paper towels, toilet paper) in all restrooms.", priority: 'High', riskLevel: 'Medium', proof: 'Restock Log', location: 'Locker Rooms' },
                    { id: 'GYM-HYGIENE-03', description: "Wipe down all high-touch surfaces (door handles, water fountains, countertops).", priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Entire Gym' },
                    { id: 'GYM-HYGIENE-04', description: "Ensure disinfectant wipes and hand sanitizer stations are full and available for members.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Workout Areas' },
                    { id: 'GYM-HYGIENE-05', description: "Mop floors and vacuum carpets in all areas.", priority: 'High', riskLevel: 'Medium', proof: 'Floor Cleaning Log', location: 'Entire Gym' },
                    { id: 'GYM-HYGIENE-06', description: "Empty all trash and recycling bins.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Log', location: 'Entire Gym' },
                    { id: 'GYM-HYGIENE-07', description: "Deep clean sauna and steam rooms.", priority: 'High', riskLevel: 'High', proof: 'Deep Clean Log', location: 'Spa Area' },
                    { id: 'GYM-HYGIENE-08', description: "Check for and remove any mildew or mold.", priority: 'High', riskLevel: 'High', proof: 'Mold Inspection Log', location: 'Locker Rooms/Pool Area' },
                    { id: 'GYM-HYGIENE-09', description: "Ensure proper ventilation in all areas.", priority: 'High', riskLevel: 'Medium', proof: 'Ventilation System Check', location: 'Entire Gym' },
                    { id: 'GYM-HYGIENE-10', description: "Conduct a final cleanliness walkthrough at the end of the day.", priority: 'High', riskLevel: 'Medium', proof: 'Closing Checklist', location: 'Entire Gym' }
                ]
            },
            {
                title: "📝 Member Onboarding & Health Screening",
                department: "Sales/Membership",
                frequency: "Per New Member",
                role: "Membership Advisor",
                summary: "Protect your members and your business. This onboarding process ensures every new member completes a health screening and understands how to use the gym safely.",
                tasks: [
                    { id: 'GYM-MEMBER-01', description: "Have new member complete a Physical Activity Readiness Questionnaire (PAR-Q).", priority: 'High', riskLevel: 'High', proof: 'Completed PAR-Q Form', location: 'Front Desk' },
                    { id: 'GYM-MEMBER-02', description: "Explain gym rules, etiquette, and emergency procedures.", priority: 'High', riskLevel: 'Medium', proof: 'Onboarding Checklist', location: 'Front Desk' },
                    { id: 'GYM-MEMBER-03', description: "Offer a complimentary orientation session with a trainer to demonstrate proper equipment use.", priority: 'High', riskLevel: 'Medium', proof: 'Orientation Sign-up', location: 'Front Desk' },
                    { id: 'GYM-MEMBER-04', description: "Ensure the membership agreement and liability waiver are signed and filed.", priority: 'High', riskLevel: 'High', proof: 'Signed Agreement', location: 'Office' },
                    { id: 'GYM-MEMBER-05', description: "Take a member photo and issue an access card or key fob.", priority: 'High', riskLevel: 'Low', proof: 'Member Profile Update', location: 'System' },
                    { id: 'GYM-MEMBER-06', description: "Explain the class booking system.", priority: 'Medium', riskLevel: 'Low', proof: 'Verbal Confirmation', location: 'Front Desk' },
                    { id: 'GYM-MEMBER-07', description: "Provide information on personal training packages.", priority: 'Medium', riskLevel: 'Low', proof: 'Brochure Handout', location: 'Front Desk' },
                    { id: 'GYM-MEMBER-08', description: "Introduce the new member to a floor trainer.", priority: 'Medium', riskLevel: 'Low', proof: 'Introduction', location: 'Gym Floor' },
                    { id: 'GYM-MEMBER-09', description: "Follow up with the new member after their first week.", priority: 'Medium', riskLevel: 'Low', proof: 'Follow-up Call Log', location: 'System' },
                    { id: 'GYM-MEMBER-10', description: "Enter all member information accurately into the CRM.", priority: 'High', riskLevel: 'Medium', proof: 'CRM Entry', location: 'System' }
                ]
            },
            {
                title: "🚑 Emergency Response Protocol",
                department: "Operations",
                frequency: "Quarterly Review",
                role: "Manager",
                summary: "Be prepared for any medical emergency. This checklist ensures your staff are trained and your facility is equipped to respond effectively to common gym incidents.",
                tasks: [
                    { id: 'GYM-EMERG-01', description: "Verify all staff have current CPR/AED certifications.", priority: 'High', riskLevel: 'High', proof: 'Certification Records', location: 'HR Files' },
                    { id: 'GYM-EMERG-02', description: "Check that AEDs and first aid kits are fully stocked, accessible, and their locations are clearly marked.", priority: 'High', riskLevel: 'High', proof: 'Emergency Equipment Log', location: 'Various' },
                    { id: 'GYM-EMERG-03', description: "Post emergency contact numbers (ambulance, fire, police) clearly near phones.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Front Desk/Office' },
                    { id: 'GYM-EMERG-04', description: "Conduct a mock emergency drill (e.g., a simulated cardiac arrest) with staff quarterly.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Office' },
                    { id: 'GYM-EMERG-05', description: "Maintain an incident report log for any accidents or medical events.", priority: 'High', riskLevel: 'High', proof: 'Incident Report Log', location: 'Office' },
                    { id: 'GYM-EMERG-06', description: "Ensure staff know the location of all emergency exits.", priority: 'High', riskLevel: 'High', proof: 'Staff Quiz', location: 'Staff Meeting' },
                    { id: 'GYM-EMERG-07', description: "Have a clear protocol for handling bloodborne pathogens.", priority: 'High', riskLevel: 'High', proof: 'BBP Protocol Document', location: 'Office' },
                    { id: 'GYM-EMERG-08', description: "Check that fire extinguishers are inspected and tagged.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Tags', location: 'Various' },
                    { id: 'GYM-EMERG-09', description: "Review and update the emergency response plan annually.", priority: 'High', riskLevel: 'High', proof: 'Plan Review Minutes', location: 'Office' },
                    { id: 'GYM-EMERG-10', description: "Train staff on how to communicate with emergency services.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' }
                ]
            },
            {
                title: "🏊 Swimming Pool Safety & Hygiene",
                department: "Aquatics",
                frequency: "Daily/Hourly",
                role: "Pool Operator",
                summary: "Ensure a safe and sanitary swimming environment. This specialized checklist covers water chemistry, lifeguard readiness, and poolside safety.",
                tasks: [
                    { id: 'GYM-POOL-01', description: "Test and log water chemistry (chlorine, pH levels) every hour.", priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'GYM-POOL-02', description: "Ensure all poolside safety equipment (rescue tubes, backboards) is present and in good condition.", priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Log', location: 'Poolside' },
                    { id: 'GYM-POOL-03', description: "Check that pool decks are clean, dry, and free of slip hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Deck Inspection Log', location: 'Poolside' },
                    { id: 'GYM-POOL-04', description: "Verify that all water pumps, filters, and circulation systems are operating correctly.", priority: 'High', riskLevel: 'High', proof: 'Pump Room Log', location: 'Pump Room' },
                    { id: 'GYM-POOL-05', description: "If lifeguards are on duty, ensure they are alert and positioned correctly.", priority: 'High', riskLevel: 'High', proof: 'Supervisor Observation', location: 'Poolside' },
                    { id: 'GYM-POOL-06', description: "Ensure depth markings are clearly visible.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Poolside' },
                    { id: 'GYM-POOL-07', description: "Check that the pool area is free of any glass containers.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Poolside' },
                    { id: 'GYM-POOL-08', description: "Verify that the pool's emergency shut-off system is functional.", priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'Pump Room' },
                    { id: 'GYM-POOL-09', description: "Ensure ladders and handrails are secure.", priority: 'High', riskLevel: 'High', proof: 'Structural Check', location: 'Poolside' },
                    { id: 'GYM-POOL-10', description: "Maintain a log of all pool-related incidents.", priority: 'High', riskLevel: 'High', proof: 'Incident Log', location: 'Office' }
                ]
            },
            {
                title: "💰 Sales & Membership Management",
                department: "Sales",
                frequency: "Weekly",
                role: "Sales Manager",
                summary: "Drive membership growth and retention with a structured sales process. This checklist covers lead management, tours, and closing techniques.",
                tasks: [
                    { id: 'GYM-SALES-01', description: "Follow up with all new leads within 24 hours.", priority: 'High', riskLevel: 'Medium', proof: 'CRM Log', location: 'CRM' },
                    { id: 'GYM-SALES-02', description: "Conduct gym tours following a standardized script that highlights key features and benefits.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Observation', location: 'Gym Floor' },
                    { id: 'GYM-SALES-03', description: "Track daily sales calls, tours, and closing rates.", priority: 'High', riskLevel: 'Medium', proof: 'Sales Dashboard', location: 'CRM' },
                    { id: 'GYM-SALES-04', description: "Run a weekly sales meeting to review performance and set targets.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Office' },
                    { id: 'GYM-SALES-05', description: "Manage membership renewal and cancellation processes efficiently.", priority: 'High', riskLevel: 'High', proof: 'Renewal/Cancellation Log', location: 'CRM' },
                    { id: 'GYM-SALES-06', description: "Develop and implement lead generation strategies.", priority: 'High', riskLevel: 'Medium', proof: 'Marketing Plan', location: 'Office' },
                    { id: 'GYM-SALES-07', description: "Train sales staff on product knowledge and sales techniques.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'GYM-SALES-08', description: "Analyze membership data to identify trends and opportunities.", priority: 'High', riskLevel: 'Medium', proof: 'Data Analysis Report', location: 'Office' },
                    { id: 'GYM-SALES-09', description: "Handle all billing and payment issues promptly.", priority: 'High', riskLevel: 'High', proof: 'Billing Issue Log', location: 'Office' },
                    { id: 'GYM-SALES-10', description: "Run member referral programs.", priority: 'Medium', riskLevel: 'Low', proof: 'Referral Program Plan', location: 'Office' }
                ]
            },
            {
                title: "💪 Personal Trainer & Staff Compliance",
                department: "Fitness",
                frequency: "Quarterly",
                role: "Fitness Director",
                summary: "Ensure your trainers are certified, professional, and delivering safe and effective programs, protecting your members and your brand.",
                tasks: [
                    { id: 'GYM-PT-01', description: "Verify that all personal trainer certifications are current and valid.", priority: 'High', riskLevel: 'High', proof: 'Certification File', location: 'HR Office' },
                    { id: 'GYM-PT-02', description: "Conduct regular performance reviews and session observations for all trainers.", priority: 'High', riskLevel: 'Medium', proof: 'Review Forms', location: 'Office' },
                    { id: 'GYM-PT-03', description: "Ensure trainers are following a standardized process for client assessment and program design.", priority: 'High', riskLevel: 'High', proof: 'Client File Audit', location: 'Office' },
                    { id: 'GYM-PT-04', description: "Provide ongoing education and training on new fitness trends and safety protocols.", priority: 'Medium', riskLevel: 'Low', proof: 'Training Log', location: 'Training Room' },
                    { id: 'GYM-PT-05', description: "Enforce a professional code of conduct for all training staff.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Code of Conduct', location: 'HR Office' },
                    { id: 'GYM-PT-06', description: "Track client progress and satisfaction.", priority: 'High', riskLevel: 'Medium', proof: 'Client Progress Reports', location: 'Office' },
                    { id: 'GYM-PT-07', description: "Manage trainer schedules and client bookings.", priority: 'High', riskLevel: 'Medium', proof: 'Scheduling System', location: 'Office' },
                    { id: 'GYM-PT-08', description: "Handle any client complaints about trainers.", priority: 'High', riskLevel: 'High', proof: 'Complaint Log', location: 'Office' },
                    { id: 'GYM-PT-09', description: "Ensure trainers are promoting personal training packages correctly.", priority: 'High', riskLevel: 'Medium', proof: 'Sales Training Log', location: 'Office' },
                    { id: 'GYM-PT-10', description: "Set performance targets for all personal trainers.", priority: 'High', riskLevel: 'Medium', proof: 'Target Document', location: 'Office' }
                ]
            },
            {
                title: "🧘 Class & Studio Management",
                department: "Group Fitness",
                frequency: "Daily",
                role: "Group Fitness Coordinator",
                summary: "Deliver exceptional group fitness classes. This checklist covers studio readiness, instructor preparedness, and equipment safety for classes like yoga, spinning, and HIIT.",
                tasks: [
                    { id: 'GYM-CLASS-01', description: "Ensure the studio is clean and set up for the specific class type (e.g., yoga mats, spin bikes).", priority: 'High', riskLevel: 'Medium', proof: 'Studio Readiness Log', location: 'Studio' },
                    { id: 'GYM-CLASS-02', description: "Check that all class-specific equipment (e.g., spin bikes, weights, bands) is functional and safe.", priority: 'High', riskLevel: 'High', proof: 'Equipment Check Log', location: 'Studio' },
                    { id: 'GYM-CLASS-03', description: "Verify the instructor is present, prepared, and has the correct music and class plan.", priority: 'High', riskLevel: 'Medium', proof: 'Instructor Check-in', location: 'Studio' },
                    { id: 'GYM-CLASS-04', description: "Manage class bookings and waitlists to avoid overcrowding.", priority: 'High', riskLevel: 'Medium', proof: 'Booking System', location: 'Front Desk' },
                    { id: 'GYM-CLASS-05', description: "Gather feedback from members about class quality and instructor performance.", priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Forms/System', location: 'Various' },
                    { id: 'GYM-CLASS-06', description: "Check that the sound system is working correctly.", priority: 'High', riskLevel: 'Medium', proof: 'Sound System Check', location: 'Studio' },
                    { id: 'GYM-CLASS-07', description: "Ensure the studio temperature is appropriate for the class type.", priority: 'High', riskLevel: 'Medium', proof: 'Temperature Check', location: 'Studio' },
                    { id: 'GYM-CLASS-08', description: "Sanitize all equipment after each class.", priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Studio' },
                    { id: 'GYM-CLASS-09', description: "Update the class schedule and communicate any changes to members.", priority: 'High', riskLevel: 'Medium', proof: 'Schedule Update Log', location: 'Office' },
                    { id: 'GYM-CLASS-10', description: "Hire and train qualified group fitness instructors.", priority: 'High', riskLevel: 'High', proof: 'Hiring Records', location: 'HR' }
                ]
            }
        ]
    },
    // --- Industrial & Transport ---
    {
        id: 'food_manufacturing_ops',
        title: "Food Manufacturing Operations",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Industrial & Transport",
        description: "A HACCP & ISO 22000-aligned SOP toolkit to manage a modern food manufacturing facility, focusing on safety and throughput.",
        icon: <Factory className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Plant Managers", "Quality Directors", "HACCP Coordinators", "Production Supervisors", "GMs", "VPs", "Directors"],
        sampleItems: [
            "Implement 'Raw Material Receiving & Inspection' to prevent substandard inputs.",
            "Standardize 'Equipment Calibration & Maintenance' for accuracy and uptime.",
            "Monitor and audit 'Cleaning & Sanitation (HACCP)'.",
            "NEW: Global Edition includes checklists for GFSI, FDA, and BRC compliance."
        ],
        previewScenario: {
            title: "Handling a Contamination Alert",
            description: "A lab test on a raw material batch shows a potential contaminant. This scenario demonstrates how checklists for Receiving, Allergen Control, and HACCP work together to prevent a factory-wide recall.",
            tasks: [
                { id: 'FOOD-RM-04', description: "The incoming raw material is immediately placed in a designated, quarantined area, preventing it from entering the production line.", sourceChecklist: "Raw Material Receiving & Inspection", priority: 'High' },
                { id: 'HACCP-VE-04', description: "A corrective action plan is initiated, including re-testing and notifying the supplier.", sourceChecklist: "HACCP Plan Verification", priority: 'High' },
                { id: 'FOOD-ALLERGEN-002', description: "All related materials are clearly labeled and segregated to prevent any cross-contamination.", sourceChecklist: "Allergen Control Program", priority: 'High' },
                { id: 'FOOD-FP-04', description: "The entire incident is documented, providing a clear audit trail for regulators and ensuring the final product remains safe.", sourceChecklist: "Finished Product Testing", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global Food Manufacturing Standards",
            standards: [
                { name: "Food Safety", description: "HACCP, ISO 22000, and GFSI-benchmarked standards for food safety management." },
                { name: "Quality Management", description: "ISO 9001 principles for process control and consistent product quality." },
                { name: "Workplace Safety", description: "OSHA and ISO 45001 standards for safe manufacturing operations, including LOTO and machine guarding." },
                { name: "Traceability", description: "Frameworks for batch tracking and recall management." }
            ]
        },
        checklists: [
            {
                title: "🍎 Raw Material Receiving & Inspection",
                department: "Quality Control",
                frequency: "Per Shipment",
                role: "QC Inspector",
                summary: "Prevent contamination at the source. This is your first line of defense, ensuring no substandard ingredients enter your facility, protecting your entire production line.",
                tasks: [
                    { id: 'FOOD-RM-01', description: "Check delivery vehicle temperature and sanitation before unloading.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Receiving Dock' },
                    { id: 'FOOD-RM-02', description: "Verify supplier certificates for authenticity and compliance.", priority: 'High', riskLevel: 'High', proof: 'Certificate Log', location: 'Receiving Office' },
                    { id: 'FOOD-RM-03', description: "Visually inspect materials for damage, pests, or signs of spoilage.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Receiving Dock' },
                    { id: 'FOOD-RM-04', description: "Collect samples for lab testing (microbial, chemical) according to sampling plan.", priority: 'High', riskLevel: 'High', proof: 'Sampling Log', location: 'Lab' },
                    { id: 'FOOD-RM-05', description: "Approve or reject shipment based on inspection and test results.", priority: 'High', riskLevel: 'High', proof: 'Approval Form', location: 'Receiving Office' },
                    { id: 'FOOD-RM-06', description: "Check that all packaging is intact and sealed.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Receiving Dock' },
                    { id: 'FOOD-RM-07', description: "Verify that the product matches the purchase order.", priority: 'High', riskLevel: 'Medium', proof: 'PO Check', location: 'Receiving Office' },
                    { id: 'FOOD-RM-08', description: "Quarantine all incoming materials until they are approved.", priority: 'High', riskLevel: 'High', proof: 'Quarantine Log', location: 'Quarantine Area' },
                    { id: 'FOOD-RM-09', description: "Label all materials with receiving date and lot number.", priority: 'High', riskLevel: 'Medium', proof: 'Labeling Log', location: 'Receiving Area' },
                    { id: 'FOOD-RM-10', description: "Store materials in the appropriate environment (e.g., refrigerated, dry storage).", priority: 'High', riskLevel: 'High', proof: 'Storage Log', location: 'Storage' }
                ]
            },
            {
                title: "⚙️ Equipment Calibration & Maintenance",
                department: "Maintenance",
                frequency: "Daily/Weekly",
                role: "Maintenance Technician",
                summary: "Maximize uptime and ensure product consistency. This preventive maintenance checklist guarantees all production equipment operates accurately, reliably, and safely.",
                tasks: [
                    { id: 'FOOD-EQ-01', description: "Calibrate weighing scales and check for accuracy.", priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Production Floor' },
                    { id: 'FOOD-EQ-02', description: "Inspect conveyor belts, gears, and other moving parts for wear and tear.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Production Floor' },
                    { id: 'FOOD-EQ-03', description: "Lubricate equipment according to maintenance schedule.", priority: 'High', riskLevel: 'Medium', proof: 'Lubrication Log', location: 'Production Floor' },
                    { id: 'FOOD-EQ-04', description: "Verify functionality of safety guards and interlocks.", priority: 'High', riskLevel: 'High', proof: 'Safety Check Log', location: 'Production Floor' },
                    { id: 'FOOD-EQ-05', description: "Record all maintenance activities in equipment log.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Log', location: 'Maintenance Office' },
                    { id: 'FOOD-EQ-06', description: "Check temperature gauges and thermometers for accuracy.", priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Production Floor' },
                    { id: 'FOOD-EQ-07', description: "Inspect filters and screens and clean or replace as needed.", priority: 'High', riskLevel: 'Medium', proof: 'Filter Log', location: 'Production Floor' },
                    { id: 'FOOD-EQ-08', description: "Test emergency stop buttons.", priority: 'High', riskLevel: 'High', proof: 'E-Stop Test Log', location: 'Production Floor' },
                    { id: 'FOOD-EQ-09', description: "Ensure all equipment is clean before and after use.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Production Floor' },
                    { id: 'FOOD-EQ-10', description: "Maintain a spare parts inventory for critical equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Spare Parts Inventory', location: 'Maintenance Office' }
                ]
            },
             {
                title: "🧼 Cleaning & Sanitation (HACCP)",
                department: "Sanitation",
                frequency: "Daily",
                role: "Sanitation Technician",
                summary: "Achieve uncompromising hygiene with a HACCP-aligned protocol. This critical checklist prevents cross-contamination and ensures all surfaces are sanitary before production begins.",
                tasks: [
                    { id: 'FOOD-SAN-01', description: "Remove all debris and food residue from equipment and surfaces.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Production Floor' },
                    { id: 'FOOD-SAN-02', description: "Apply approved cleaning agents according to manufacturer instructions.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Agent Log', location: 'Production Floor' },
                    { id: 'FOOD-SAN-03', description: "Rinse equipment and surfaces thoroughly with potable water.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Production Floor' },
                    { id: 'FOOD-SAN-04', description: "Apply approved sanitizing agents according to manufacturer instructions.", priority: 'High', riskLevel: 'High', proof: 'Sanitizer Log', location: 'Production Floor' },
                    { id: 'FOOD-SAN-05', description: "Allow equipment and surfaces to air dry before restarting production.", priority: 'High', riskLevel: 'High', proof: 'Air Dry Time Log', location: 'Production Floor' },
                    { id: 'FOOD-SAN-06', description: "Clean all drains and floor surfaces.", priority: 'High', riskLevel: 'Medium', proof: 'Drain Cleaning Log', location: 'Production Floor' },
                    { id: 'FOOD-SAN-07', description: "Sanitize all hand-contact surfaces (e.g., door handles, switches).", priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Production Floor' },
                    { id: 'FOOD-SAN-08', description: "Verify effectiveness of cleaning and sanitation with ATP swabs.", priority: 'High', riskLevel: 'High', proof: 'ATP Swab Results', location: 'Lab' },
                    { id: 'FOOD-SAN-09', description: "Train all sanitation staff on proper procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'FOOD-SAN-10', description: "Maintain detailed records of all cleaning and sanitation activities.", priority: 'High', riskLevel: 'High', proof: 'Sanitation Records', location: 'Office' }
                ]
            },
            {
                title: "🧪 Finished Product Testing",
                department: "Quality Control",
                frequency: "Per Batch",
                role: "QC Technician",
                summary: "Guarantee your product is safe and meets all specifications before it leaves the factory. This final QA check is your last chance to catch issues and protect your brand.",
                tasks: [
                    { id: 'FOOD-FP-01', description: "Collect samples for lab testing (microbial, chemical, sensory) according to sampling plan.", priority: 'High', riskLevel: 'High', proof: 'Sampling Log', location: 'Production Line' },
                    { id: 'FOOD-FP-02', description: "Verify product meets specifications for weight, volume, or count.", priority: 'High', riskLevel: 'Medium', proof: 'Weight/Volume Check', location: 'Lab' },
                    { id: 'FOOD-FP-03', description: "Inspect packaging for proper sealing, labeling, and coding.", priority: 'High', riskLevel: 'High', proof: 'Packaging Inspection Log', location: 'Packaging Line' },
                    { id: 'FOOD-FP-04', description: "Review all production and quality control records for completeness.", priority: 'High', riskLevel: 'High', proof: 'Record Review Log', location: 'QC Office' },
                    { id: 'FOOD-FP-05', description: "Approve or reject product release based on test results and record review.", priority: 'High', riskLevel: 'High', proof: 'Release Form', location: 'QC Office' },
                    { id: 'FOOD-FP-06', description: "Conduct sensory evaluation (taste, smell, appearance).", priority: 'High', riskLevel: 'Medium', proof: 'Sensory Panel Report', location: 'Lab' },
                    { id: 'FOOD-FP-07', description: "Check for any foreign matter in the product.", priority: 'High', riskLevel: 'High', proof: 'Foreign Matter Detection Log', location: 'Production Line' },
                    { id: 'FOOD-FP-08', description: "Verify that the product's shelf life has been determined and is accurate.", priority: 'High', riskLevel: 'High', proof: 'Shelf Life Study Report', location: 'Lab' },
                    { id: 'FOOD-FP-09', description: "Maintain retain samples for each batch.", priority: 'High', riskLevel: 'Medium', proof: 'Retain Sample Log', location: 'Storage' },
                    { id: 'FOOD-FP-10', description: "Ensure all testing equipment is calibrated and in good working order.", priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Lab' }
                ]
            },
             {
                title: "🌱 HACCP Plan Verification",
                department: "Quality Assurance",
                frequency: "Annually",
                role: "HACCP Coordinator",
                summary: "Ensure your food safety system is not just implemented, but effective. This verification checklist confirms your HACCP plan is working as intended and protecting consumers.",
                tasks: [
                    { id: 'HACCP-VE-01', description: "Review to confirm that the team involved has adequate knowledge and skillset.", priority: 'High', riskLevel: 'High', proof: 'Training Report', location: 'HR Department' },
                    { id: 'HACCP-VE-02', description: "Does the pre-requisite program has to be verified as being done effectively", priority: 'High', riskLevel: 'High', proof: 'Pest Control', location: 'All areas' },
                    { id: 'HACCP-VE-03', description: "Verify all the steps by process that is involved from raw to packaging.", priority: 'High', riskLevel: 'Medium', proof: 'Visual', location: 'Production Areas' },
                    { id: 'HACCP-VE-04', description: "Set plan of corrections and do the calibration test frequently.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance logs', location: 'All Areas' },
                    { id: 'HACCP-VE-05', description: "Keep data intact and perform the evaluation to enhance the HACCP plan.", priority: 'High', riskLevel: 'High', proof: 'Records', location: 'Office' },
                    { id: 'HACCP-VE-06', description: "Review and update the HACCP plan whenever there is a change in product, process, or ingredients.", priority: 'High', riskLevel: 'High', proof: 'HACCP Plan Update Log', location: 'Office' },
                    { id: 'HACCP-VE-07', description: "Conduct an annual mock recall.", priority: 'High', riskLevel: 'High', proof: 'Mock Recall Report', location: 'Office' },
                    { id: 'HACCP-VE-08', description: "Review customer complaints related to food safety.", priority: 'High', riskLevel: 'High', proof: 'Complaint Analysis', location: 'Office' },
                    { id: 'HACCP-VE-09', description: "Ensure all monitoring and verification records are complete and accurate.", priority: 'High', riskLevel: 'High', proof: 'Record Audit', location: 'Office' },
                    { id: 'HACCP-VE-10', description: "Present the HACCP plan verification report to management.", priority: 'High', riskLevel: 'Medium', proof: 'Management Review Minutes', location: 'Office' }
                ]
            },
            {
                title: "🛡️ Allergen Control Program",
                department: "Quality Assurance",
                frequency: "Daily",
                role: "Quality Coordinator",
                summary: "Protect sensitive consumers and ensure regulatory compliance. This program minimizes the risk of allergen cross-contamination through strict separation, labeling, and cleaning protocols.",
                tasks: [
                    { id: 'FOOD-ALLERGEN-001', description: "Designate separate equipment for allergen-containing and allergen-free products.", priority: 'High', riskLevel: 'High', proof: 'Equipment Designation List', location: 'All Areas' },
                    { id: 'FOOD-ALLERGEN-002', description: "Label all allergen-containing ingredients and products clearly and prominently.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Warehouse/ Production' },
                    { id: 'FOOD-ALLERGEN-003', description: "Implement strict cleaning and sanitation procedures after processing any allergen-containing product.", priority: 'High', riskLevel: 'High', proof: 'Clearing Log', location: 'All areas' },
                    { id: 'FOOD-ALLERGEN-004', description: "Verify that the product label accurately lists all ingredients, including allergens.", priority: 'High', riskLevel: 'High', proof: 'Verification', location: 'Production Area' },
                    { id: 'FOOD-ALLERGEN-005', description: "Train employees on allergen awareness and control procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR office' },
                    { id: 'FOOD-ALLERGEN-006', description: "Store allergen-containing materials separately from non-allergenic materials.", priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Warehouse' },
                    { id: 'FOOD-ALLERGEN-007', description: "Have a clear protocol for handling allergen spills.", priority: 'High', riskLevel: 'High', proof: 'Spill Protocol', location: 'Office' },
                    { id: 'FOOD-ALLERGEN-008', description: "Conduct regular validation testing to check for allergen residues on equipment.", priority: 'High', riskLevel: 'High', proof: 'Validation Test Report', location: 'Lab' },
                    { id: 'FOOD-ALLERGEN-009', description: "Review and update the allergen control plan annually.", priority: 'High', riskLevel: 'High', proof: 'Plan Review Minutes', location: 'Office' },
                    { id: 'FOOD-ALLERGEN-010', description: "Ensure suppliers have an allergen control program in place.", priority: 'High', riskLevel: 'High', proof: 'Supplier Audit', location: 'Office' }
                ]
            },
            {
                title: "🧹 Glass & Brittle Plastic Control",
                department: "Operations",
                frequency: "Weekly",
                role: "Production Supervisor",
                summary: "Prevent dangerous physical contamination. This system provides a robust method to control, monitor, and manage any glass or hard plastic in the production environment.",
                tasks: [
                    { id: 'FOOD-GLASS-01', description: "Prohibit glass containers in the production area unless absolutely necessary.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Production Floor' },
                    { id: 'FOOD-GLASS-02', description: "Create a Glass Register to Log and Monitor the area.", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Production Floor' },
                    { id: 'FOOD-GLASS-03', description: "Conduct frequent inspections of lighting fixtures, windows, and other glass/plastic objects for damage.", priority: 'High', riskLevel: 'High', proof: 'Audit/logs', location: 'Production Floor' },
                    { id: 'FOOD-GLASS-04', description: "Maintain a log of any glass breakage incidents, including cleanup procedures and disposal.", priority: 'High', riskLevel: 'High', proof: 'Audit/logs', location: 'Office' },
                    { id: 'FOOD-GLASS-05', description: "Ensure that all new equipments or tools are assessed and inspected.", priority: 'High', riskLevel: 'High', proof: 'Inspection form', location: 'Before procurement' },
                    { id: 'FOOD-GLASS-06', description: "Use protective coverings on all lights in the production area.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Production Floor' },
                    { id: 'FOOD-GLASS-07', description: "Train employees on the glass and brittle plastic control policy.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'FOOD-GLASS-08', description: "Have a designated cleanup procedure for glass breakage.", priority: 'High', riskLevel: 'High', proof: 'Cleanup Protocol', location: 'Office' },
                    { id: 'FOOD-GLASS-09', description: "Inspect products for any glass or plastic contamination.", priority: 'High', riskLevel: 'High', proof: 'Product Inspection Log', location: 'QC Lab' },
                    { id: 'FOOD-GLASS-10', description: "Review and update the glass and brittle plastic control policy annually.", priority: 'High', riskLevel: 'High', proof: 'Policy Review Minutes', location: 'Office' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Compliance",
                frequency: "Weekly",
                role: "Facility Manager",
                summary: "Safeguard your facility from contamination. This program establishes a comprehensive defense against insects and rodents, crucial for maintaining hygiene in a food-grade environment.",
                tasks: [
                    { id: 'PEST-FOOD-001', description: "Inspect buildings, premises and equipment weekly for the signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection log', location: 'All Areas' },
                    { id: 'PEST-FOOD-002', description: "Waste and any byproducts must be disposed regularly.", priority: 'High', riskLevel: 'High', proof: 'Work order', location: 'All Areas' },
                    { id: 'PEST-FOOD-003', description: "Ensure sealing is maintained for entries to reduce rodent attraction.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Work Order', location: 'Perimeter' },
                    { id: 'PEST-FOOD-004', description: "Review regular pest reports and make the service based on the history.", priority: 'High', riskLevel: 'Medium', proof: 'Service order', location: 'All Areas' },
                    { id: 'PEST-FOOD-005', description: "Train employees on clean work environment.", priority: 'High', riskLevel: 'Medium', proof: 'Training records', location: 'HR Office' },
                    { id: 'PEST-FOOD-006', description: "Keep all exterior doors and windows closed.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Perimeter' },
                    { id: 'PEST-FOOD-007', description: "Maintain a clean and tidy exterior area.", priority: 'High', riskLevel: 'Medium', proof: 'Exterior Inspection', location: 'Exterior' },
                    { id: 'PEST-FOOD-008', description: "Use only food-safe pest control measures.", priority: 'High', riskLevel: 'High', proof: 'Pest Control Product List', location: 'Office' },
                    { id: 'PEST-FOOD-009', description: "Maintain a log of all pest sightings and actions taken.", priority: 'High', riskLevel: 'High', proof: 'Pest Sighting Log', location: 'Office' },
                    { id: 'PEST-FOOD-010', description: "Work with a certified pest control vendor.", priority: 'High', riskLevel: 'High', proof: 'Vendor Contract', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'manufacturing_operations_ehs_pack',
        title: "Manufacturing Operations & EHS Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Industrial & Transport",
        description: "An ISO 45001 & OSHA-aligned toolkit for plant heads to ensure workforce safety, operational efficiency, and regulatory compliance.",
        icon: <HardHat className="w-8 h-8 text-primary" />,
        badgeText: "Safety Critical",
        badgeVariant: "destructive" as const,
        whoIsItFor: ["Plant Heads", "EHS Directors", "Production Managers", "Quality Control Heads", "VPs of Operations", "GMs", "Directors"],
        sampleItems: [
            "Implement a life-saving 'Lock-Out Tag-Out (LOTO)' checklist.",
            "Manage high-risk tasks with a 'Permit-to-Work' system.",
            "Ensure 'Contractor EHS Management' to prevent third-party incidents.",
            "NEW: Global Edition adds specific checklists for OSHA, ISO 45001, and environmental compliance."
        ],
        previewScenario: {
            title: "Handling a Hazardous Chemical Spill",
            description: "This scenario shows how checklists for emergency response, personal protective equipment (PPE), and waste management work together to safely manage a hazardous spill.",
            tasks: [
                { id: 'EHS-ER-002', description: "Activate the spill response alarm and notify the Emergency Response Team.", sourceChecklist: "Emergency Response Plan", priority: 'High' },
                { id: 'PPE-CHEM-001', description: "Don appropriate PPE (chemical-resistant gloves, goggles, apron) before approaching the spill.", sourceChecklist: "Personal Protective Equipment (PPE) Compliance", priority: 'High' },
                { id: 'WASTE-HAZ-001', description: "Contain the spill using the appropriate absorbent material from the spill kit.", sourceChecklist: "Hazardous Waste Management", priority: 'High' },
                { id: 'INC-REP-001', description: "Log the incident, including time, location, substance, and response actions taken.", sourceChecklist: "Incident Reporting & Investigation", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global Manufacturing & Safety Standards",
            standards: [
                { name: "Occupational Health & Safety", description: "ISO 45001, OSHA standards for workplace safety, including LOTO and machine guarding." },
                { name: "Quality Management", description: "ISO 9001 principles for process control, calibration, and quality assurance." },
                { name: "Environmental Management", description: "ISO 14001 guidelines for waste management and environmental impact control." },
                { name: "Risk Management", description: "ISO 31000 principles applied to operational and safety risk assessment." }
            ]
        },
        checklists: [
             {
                title: "🏭 Production Shift Handover",
                department: "Production",
                frequency: "Per Shift",
                role: "Shift Supervisor",
                summary: "Ensure a seamless and safe transition between shifts. This checklist prevents information gaps that can lead to production errors or safety incidents during handover.",
                tasks: [
                    { id: 'PROD-HAND-01', description: "Review the production status against the daily target with the outgoing supervisor.", priority: 'High', riskLevel: 'Medium', proof: 'Handover Log', location: 'Supervisor Office' },
                    { id: 'PROD-HAND-02', description: "Discuss any equipment issues, maintenance activities, or safety concerns from the previous shift.", priority: 'High', riskLevel: 'High', proof: 'Handover Log', location: 'Supervisor Office' },
                    { id: 'PROD-HAND-03', description: "Conduct a physical walkthrough of the production floor with the outgoing supervisor.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Production Floor' },
                    { id: 'PROD-HAND-04', description: "Verify raw material inventory levels for the upcoming shift.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Check', location: 'Warehouse' },
                    { id: 'PROD-HAND-05', description: "Communicate the shift's priorities and any specific instructions to the incoming team.", priority: 'High', riskLevel: 'Medium', proof: 'Shift Briefing', location: 'Production Floor' },
                    { id: 'PROD-HAND-06', description: "Check that all quality control checks from the previous shift are complete.", priority: 'High', riskLevel: 'High', proof: 'QC Log', location: 'QC Lab' },
                    { id: 'PROD-HAND-07', description: "Review any open work permits.", priority: 'High', riskLevel: 'High', proof: 'Permit Log', location: 'Office' },
                    { id: 'PROD-HAND-08', description: "Ensure the work area is clean and organized.", priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Check', location: 'Production Floor' },
                    { id: 'PROD-HAND-09', description: "Verify that all staff are present and accounted for.", priority: 'High', riskLevel: 'Medium', proof: 'Attendance Log', location: 'HR' },
                    { id: 'PROD-HAND-10', description: "Sign off on the handover checklist.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Checklist', location: 'Supervisor Office' }
                ]
            },
            {
                title: "🔬 Raw Material Inspection & Quality Control",
                department: "Quality Control",
                frequency: "Per Delivery",
                role: "QC Inspector",
                summary: "Prevent defects at the source. This protocol ensures all incoming raw materials meet your exact specifications before they enter the production line.",
                tasks: [
                    { id: 'QC-RM-01', description: "Verify the Certificate of Analysis (COA) for the incoming material matches specifications.", priority: 'High', riskLevel: 'High', proof: 'COA Document', location: 'Receiving Area' },
                    { id: 'QC-RM-02', description: "Take a sample of the material for lab testing as per the defined sampling plan.", priority: 'High', riskLevel: 'High', proof: 'Sample Log', location: 'Lab' },
                    { id: 'QC-RM-03', description: "Visually inspect the material for any contamination, damage, or inconsistencies.", priority: 'High', riskLevel: 'High', proof: 'Inspection Report', location: 'Receiving Area' },
                    { id: 'QC-RM-04', description: "Quarantine the material until all quality checks are complete.", priority: 'High', riskLevel: 'High', proof: 'Quarantine Tag', location: 'Quarantine Area' },
                    { id: 'QC-RM-05', description: "Release or reject the material in the inventory system based on QC results.", priority: 'High', riskLevel: 'High', proof: 'System Entry', location: 'QC Office' },
                    { id: 'QC-RM-06', description: "Check that the delivery vehicle is clean and at the correct temperature.", priority: 'High', riskLevel: 'High', proof: 'Vehicle Inspection Log', location: 'Receiving Dock' },
                    { id: 'QC-RM-07', description: "Verify the supplier is on the approved supplier list.", priority: 'High', riskLevel: 'High', proof: 'Approved Supplier List', location: 'QC Office' },
                    { id: 'QC-RM-08', description: "Ensure all incoming materials are properly labeled.", priority: 'High', riskLevel: 'Medium', proof: 'Label Check', location: 'Receiving Area' },
                    { id: 'QC-RM-09', description: "Store materials in the correct location and environment.", priority: 'High', riskLevel: 'High', proof: 'Storage Log', location: 'Warehouse' },
                    { id: 'QC-RM-10', description: "Maintain a log of all incoming material inspections.", priority: 'High', riskLevel: 'High', proof: 'Inspection Logbook', location: 'QC Office' }
                ]
            },
            {
                title: "🔧 Machine Guarding & Operator Safety",
                department: "EHS/Production",
                frequency: "Weekly",
                role: "Safety Officer",
                summary: "Protect your workforce from machinery-related injuries. This checklist ensures all machine guards are in place, interlocks are functional, and operators are safe.",
                tasks: [
                    { id: 'EHS-MG-01', description: "Inspect all machines to ensure physical guards are in place and not damaged.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Production Floor' },
                    { id: 'EHS-MG-02', description: "Test safety interlocks and emergency stop buttons to ensure they function correctly.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Production Floor' },
                    { id: 'EHS-MG-03', description: "Verify that operators are not bypassing any safety features.", priority: 'High', riskLevel: 'High', proof: 'Operator Observation', location: 'Production Floor' },
                    { id: 'EHS-MG-04', description: "Ensure warning signs and safety instructions are clearly visible on all machinery.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Audit', location: 'Production Floor' },
                    { id: 'EHS-MG-05', description: "Check that the area around machinery is clear of clutter and slip/trip hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Check', location: 'Production Floor' },
                    { id: 'EHS-MG-06', description: "Ensure all operators are trained on machine-specific safety procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'EHS-MG-07', description: "Check that all machines have proper lighting.", priority: 'High', riskLevel: 'Medium', proof: 'Lighting Inspection', location: 'Production Floor' },
                    { id: 'EHS-MG-08', description: "Ensure all operators are using the required personal protective equipment (PPE).", priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Production Floor' },
                    { id: 'EHS-MG-09', description: "Review and update machine risk assessments annually.", priority: 'High', riskLevel: 'High', proof: 'Risk Assessment Report', location: 'Office' },
                    { id: 'EHS-MG-10', description: "Maintain a log of all machine guarding inspections.", priority: 'High', riskLevel: 'High', proof: 'Inspection Logbook', location: 'Office' }
                ]
            },
            {
                title: "⚡ Lock-Out Tag-Out (LOTO) Procedure",
                department: "Maintenance/EHS",
                frequency: "Per Maintenance Task",
                role: "Maintenance Technician",
                summary: "A life-saving checklist for de-energizing machinery before maintenance. This protocol prevents accidental startups, which are a leading cause of severe industrial injuries.",
                tasks: [
                    { id: 'EHS-LOTO-01', description: "Identify and isolate all energy sources for the equipment (electrical, hydraulic, pneumatic).", priority: 'High', riskLevel: 'High', proof: 'LOTO Permit', location: 'Equipment Location' },
                    { id: 'EHS-LOTO-02', description: "Apply locks and tags to all isolation points.", priority: 'High', riskLevel: 'High', proof: 'LOTO Permit', location: 'Equipment Location' },
                    { id: 'EHS-LOTO-03', description: "Release any stored energy (e.g., bleed hydraulic lines, discharge capacitors).", priority: 'High', riskLevel: 'High', proof: 'LOTO Permit', location: 'Equipment Location' },
                    { id: 'EHS-LOTO-04', description: "Attempt to start the equipment to verify that it is fully de-energized (a 'zero-energy state').", priority: 'High', riskLevel: 'High', proof: 'LOTO Permit', location: 'Equipment Location' },
                    { id: 'EHS-LOTO-05', description: "Once work is complete, remove locks/tags and re-energize the equipment according to procedure.", priority: 'High', riskLevel: 'High', proof: 'LOTO Permit Sign-off', location: 'Equipment Location' },
                    { id: 'EHS-LOTO-06', description: "Ensure all personnel are clear of the area before re-energizing.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Equipment Location' },
                    { id: 'EHS-LOTO-07', description: "Train all authorized employees on LOTO procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'EHS-LOTO-08', description: "Conduct periodic inspections of LOTO procedures.", priority: 'High', riskLevel: 'High', proof: 'Inspection Report', location: 'Office' },
                    { id: 'EHS-LOTO-09', description: "Maintain a supply of standardized locks, tags, and devices.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Log', location: 'Maintenance Office' },
                    { id: 'EHS-LOTO-10', description: "Review and update the LOTO policy annually.", priority: 'High', riskLevel: 'High', proof: 'Policy Review Minutes', location: 'Office' }
                ]
            },
            {
                title: "📝 Permit-to-Work System (Hot Work, Confined Space)",
                department: "EHS",
                frequency: "Per High-Risk Task",
                role: "Safety Officer",
                summary: "Manage your highest-risk activities. This checklist provides a formal authorization system for tasks like welding or entering confined spaces, ensuring all safety precautions are taken.",
                tasks: [
                    { id: 'EHS-PTW-01', description: "The person performing the work must complete a Permit-to-Work request form, detailing the task and potential hazards.", priority: 'High', riskLevel: 'High', proof: 'PTW Form', location: 'Work Area' },
                    { id: 'EHS-PTW-02', description: "A qualified Safety Officer must assess the risks and specify the required safety precautions (e.g., fire watch, gas monitoring).", priority: 'High', riskLevel: 'High', proof: 'PTW Form', location: 'Work Area' },
                    { id: 'EHS-PTW-03', description: "Issue the permit for a specific time frame and display it at the work location.", priority: 'High', riskLevel: 'High', proof: 'Issued Permit', location: 'Work Area' },
                    { id: 'EHS-PTW-04', description: "Continuously monitor conditions during the work (e.g., air quality in a confined space).", priority: 'High', riskLevel: 'High', proof: 'Monitoring Log', location: 'Work Area' },
                    { id: 'EHS-PTW-05', description: "Upon completion of work, inspect the area and formally close out the permit.", priority: 'High', riskLevel: 'High', proof: 'Permit Close-out Signature', location: 'Work Area' },
                    { id: 'EHS-PTW-06', description: "Ensure all workers have the required training and certifications for the task.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'EHS-PTW-07', description: "Check that all required equipment is available and in good condition.", priority: 'High', riskLevel: 'High', proof: 'Equipment Inspection Log', location: 'Work Area' },
                    { id: 'EHS-PTW-08', description: "Have an emergency rescue plan in place for confined space entry.", priority: 'High', riskLevel: 'High', proof: 'Rescue Plan', location: 'Work Area' },
                    { id: 'EHS-PTW-09', description: "Conduct a pre-task safety briefing with all workers.", priority: 'High', riskLevel: 'High', proof: 'Briefing Log', location: 'Work Area' },
                    { id: 'EHS-PTW-10', description: "Audit the permit-to-work system regularly for compliance.", priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'logistics_warehouse_pack',
        title: "Logistics & Warehouse Operations",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Industrial & Transport",
        description: "A comprehensive toolkit for warehouse managers to optimize inventory accuracy, improve fulfillment speed, and ensure a safe working environment.",
        icon: <Warehouse className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Warehouse Managers", "Logistics Directors", "Supply Chain Heads", "3PL Owners", "VPs", "GMs", "Directors"],
        sampleItems: [
            "Implement a 'Goods Receiving (GRN)' checklist for 99%+ accuracy.",
            "Ensure forklift and MHE safety with a 'Daily Operator' checklist.",
            "Optimize storage with a '5S for Warehouse' protocol.",
            "Includes 'Shipping & Dispatch' and 'Cycle Counting' SOPs."
        ],
        previewScenario: {
            title: "Resolving a Major Inventory Discrepancy",
            description: "A cycle count reveals a significant shortage of a high-value SKU. This scenario shows how checklists for Cycle Counting, Goods Receiving, and Shipping work together to find the root cause.",
            tasks: [
                { id: 'LW-CYCLE-04', description: "The variance triggers a root cause investigation, starting with a recount of the location.", sourceChecklist: "Inventory Cycle Counting & Audit", priority: 'High' },
                { id: 'LW-GRN-01', description: "The investigation expands to check the original GRN paperwork to ensure the stock was ever received correctly.", sourceChecklist: "Goods Receiving & GRN Process", priority: 'High' },
                { id: 'LW-SHIP-02', description: "Shipping records are audited to see if the items were accidentally shipped to the wrong customer.", sourceChecklist: "Shipping & Dispatch Accuracy", priority: 'High' },
                { id: 'LW-MHE-05', description: "CCTV footage of the item's location is reviewed to check for any unsanctioned movement.", sourceChecklist: "Forklift & MHE Operator Daily Check", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global Logistics & Safety Standards",
            standards: [
                { name: "Quality Management", description: "ISO 9001 principles for process control in receiving, storage, and dispatch." },
                { name: "Workplace Safety", description: "OSHA standards for forklift operation, loading dock safety, and manual handling." },
                { name: "Inventory Management", description: "Best practices for inventory accuracy, cycle counting, and warehouse layout (5S)." },
                { name: "Supply Chain Security", description: "Guidelines for secure packing, shipping, and returns management." }
            ]
        },
        checklists: [
            {
                title: "📦 Goods Receiving & GRN Process",
                department: "Inbound Logistics",
                frequency: "Per Shipment",
                role: "Receiving Clerk",
                summary: "Achieve near-perfect inventory accuracy from the moment goods arrive. This checklist ensures every delivery is accurately counted, inspected, and documented.",
                tasks: [
                    { id: 'LW-GRN-01', description: "Verify the carrier's delivery note against your purchase order before unloading.", priority: 'High', riskLevel: 'High', proof: 'PO/DN Match', location: 'Receiving Dock' },
                    { id: 'LW-GRN-02', description: "Inspect pallets/cartons for any visible damage or signs of tampering.", priority: 'High', riskLevel: 'High', proof: 'Damage Report', location: 'Receiving Dock' },
                    { id: 'LW-GRN-03', description: "Perform a piece count and/or weight check to verify quantity.", priority: 'High', riskLevel: 'High', proof: 'Count Sheet', location: 'Receiving Area' },
                    { id: 'LW-GRN-04', description: "Generate a Goods Received Note (GRN) in the WMS/ERP system.", priority: 'High', riskLevel: 'High', proof: 'GRN in System', location: 'System' },
                    { id: 'LW-GRN-05', description: "Label received goods with internal tracking numbers and move them to the staging area.", priority: 'High', riskLevel: 'Medium', proof: 'Labeled Goods', location: 'Staging Area' },
                    { id: 'LW-GRN-06', description: "Check temperature of temperature-sensitive goods.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Receiving Dock' },
                    { id: 'LW-GRN-07', description: "Verify expiry dates of perishable goods.", priority: 'High', riskLevel: 'High', proof: 'Expiry Date Check', location: 'Receiving Dock' },
                    { id: 'LW-GRN-08', description: "Segregate and quarantine any damaged or disputed items.", priority: 'High', riskLevel: 'High', proof: 'Quarantine Log', location: 'Quarantine Area' },
                    { id: 'LW-GRN-09', description: "Ensure the receiving area is kept clean and clear.", priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Check', location: 'Receiving Area' },
                    { id: 'LW-GRN-10', description: "Communicate any discrepancies to the procurement team.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Email', location: 'Office' }
                ]
            },
            {
                title: "🔢 Inventory Cycle Counting & Audit",
                department: "Inventory Control",
                frequency: "Daily/Weekly",
                role: "Inventory Controller",
                summary: "Maintain a real-time, accurate view of your stock. This protocol implements a continuous cycle counting program to identify and correct discrepancies without shutting down operations.",
                tasks: [
                    { id: 'LW-CYCLE-01', description: "Generate a list of SKUs/locations to be counted for the day based on the cycle count plan.", priority: 'High', riskLevel: 'Medium', proof: 'Count Plan', location: 'Office' },
                    { id: 'LW-CYCLE-02', description: "Perform a 'blind' physical count of the items in the designated locations.", priority: 'High', riskLevel: 'High', proof: 'Physical Count Sheet', location: 'Warehouse Floor' },
                    { id: 'LW-CYCLE-03', description: "Compare the physical count against the system quantity and record any variances.", priority: 'High', riskLevel: 'High', proof: 'Variance Report', location: 'System' },
                    { id: 'LW-CYCLE-04', description: "Investigate the root cause of significant discrepancies (e.g., mis-picks, receiving errors).", priority: 'High', riskLevel: 'High', proof: 'Investigation Notes', location: 'Office' },
                    { id: 'LW-CYCLE-05', description: "Make inventory adjustments in the system with manager approval.", priority: 'High', riskLevel: 'High', proof: 'Adjustment Log', location: 'System' },
                    { id: 'LW-CYCLE-06', description: "Freeze inventory locations during counting to prevent errors.", priority: 'High', riskLevel: 'High', proof: 'System Screenshot', location: 'System' },
                    { id: 'LW-CYCLE-07', description: "Recount any locations with significant discrepancies.", priority: 'High', riskLevel: 'High', proof: 'Recount Sheet', location: 'Warehouse Floor' },
                    { id: 'LW-CYCLE-08', description: "Analyze cycle count accuracy and report on trends.", priority: 'High', riskLevel: 'Medium', proof: 'Accuracy Report', location: 'Office' },
                    { id: 'LW-CYCLE-09', description: "Train all inventory staff on proper counting procedures.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'LW-CYCLE-10', description: "Review and update the cycle counting plan quarterly.", priority: 'High', riskLevel: 'Medium', proof: 'Plan Review Minutes', location: 'Office' }
                ]
            },
            {
                title: "🍴 Forklift & MHE Operator Daily Check",
                department: "Safety/Operations",
                frequency: "Pre-Shift",
                role: "MHE Operator",
                summary: "Prevent accidents and ensure compliance. This mandatory pre-use checklist for forklifts and other material handling equipment is a critical safety requirement.",
                tasks: [
                    { id: 'LW-MHE-01', description: "Check tires for proper inflation and any visible damage.", priority: 'High', riskLevel: 'High', proof: 'Operator Checklist', location: 'MHE Parking' },
                    { id: 'LW-MHE-02', description: "Test horn, lights, and backup alarm.", priority: 'High', riskLevel: 'High', proof: 'Operator Checklist', location: 'MHE Parking' },
                    { id: 'LW-MHE-03', description: "Inspect forks/attachments for cracks or damage.", priority: 'High', riskLevel: 'High', proof: 'Operator Checklist', location: 'MHE Parking' },
                    { id: 'LW-MHE-04', description: "Check fluid levels (hydraulic oil, fuel/battery).", priority: 'High', riskLevel: 'Medium', proof: 'Operator Checklist', location: 'MHE Parking' },
                    { id: 'LW-MHE-05', description: "Report any defects immediately and do not operate faulty equipment.", priority: 'High', riskLevel: 'High', proof: 'Defect Report Log', location: 'Supervisor Office' },
                    { id: 'LW-MHE-06', description: "Check brakes and steering.", priority: 'High', riskLevel: 'High', proof: 'Operator Checklist', location: 'MHE Parking' },
                    { id: 'LW-MHE-07', description: "Ensure the operator's seat and seatbelt are in good condition.", priority: 'High', riskLevel: 'High', proof: 'Operator Checklist', location: 'MHE Parking' },
                    { id: 'LW-MHE-08', description: "Verify that the load capacity plate is visible and legible.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'MHE' },
                    { id: 'LW-MHE-09', description: "Check for any hydraulic leaks.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'MHE Parking' },
                    { id: 'LW-MHE-10', description: "Sign and date the pre-shift inspection checklist.", priority: 'High', riskLevel: 'High', proof: 'Signed Checklist', location: 'Supervisor Office' }
                ]
            },
            {
                title: "✨ 5S for Warehouse & Housekeeping",
                department: "Operations",
                frequency: "Weekly",
                role: "Supervisor",
                summary: "Implement the 5S methodology (Sort, Set in Order, Shine, Standardize, Sustain) to create a cleaner, safer, and more efficient warehouse environment.",
                tasks: [
                    { id: 'LW-5S-01', description: "Sort: Identify and remove any unnecessary items, tools, or debris from the work area.", priority: 'High', riskLevel: 'Medium', proof: 'Photo Before/After', location: 'Designated Area' },
                    { id: 'LW-5S-02', description: "Set in Order: Designate a clear, labeled location for every tool, piece of equipment, and pallet.", priority: 'High', riskLevel: 'Medium', proof: 'Labeled Area Photo', location: 'Designated Area' },
                    { id: 'LW-5S-03', description: "Shine: Conduct a thorough cleaning of the area, including floors, racks, and equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Designated Area' },
                    { id: 'LW-5S-04', description: "Standardize: Create visual guides and checklists for maintaining the new standard.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Guide Document', location: 'Office' },
                    { id: 'LW-5S-05', description: "Sustain: Perform a weekly audit to ensure the 5S standards are being maintained.", priority: 'High', riskLevel: 'Medium', proof: '5S Audit Scorecard', location: 'Designated Area' },
                    { id: 'LW-5S-06', description: "Establish a red tag area for items to be sorted.", priority: 'High', riskLevel: 'Medium', proof: 'Red Tag Area', location: 'Warehouse Floor' },
                    { id: 'LW-5S-07', description: "Use floor markings to designate walkways, storage areas, and work zones.", priority: 'High', riskLevel: 'High', proof: 'Floor Markings', location: 'Warehouse Floor' },
                    { id: 'LW-5S-08', description: "Create a cleaning schedule for all areas.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Schedule', location: 'Office' },
                    { id: 'LW-5S-09', description: "Train all employees on the 5S methodology.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'LW-5S-10', description: "Recognize and reward teams that excel at 5S.", priority: 'Medium', riskLevel: 'Low', proof: 'Recognition Program', location: 'Office' }
                ]
            },
            {
                title: "🚚 Shipping & Dispatch Accuracy",
                department: "Outbound Logistics",
                frequency: "Per Shipment",
                role: "Dispatch Clerk",
                summary: "Eliminate shipping errors and customer complaints. This final check ensures the right product goes to the right customer with the right documentation, every time.",
                tasks: [
                    { id: 'LW-SHIP-01', description: "Pick items according to the picking list/packing slip.", priority: 'High', riskLevel: 'High', proof: 'Picking List', location: 'Warehouse Floor' },
                    { id: 'LW-SHIP-02', description: "Scan each item to verify it matches the customer order.", priority: 'High', riskLevel: 'High', proof: 'Scan Log', location: 'Packing Station' },
                    { id: 'LW-SHIP-03', description: "Pack goods securely to prevent damage in transit.", priority: 'High', riskLevel: 'Medium', proof: 'Packing Check', location: 'Packing Station' },
                    { id: 'LW-SHIP-04', description: "Generate and affix the correct shipping label and any required documentation (e.g., customs forms).", priority: 'High', riskLevel: 'High', proof: 'Shipping Label', location: 'Packing Station' },
                    { id: 'LW-SHIP-05', description: "Load the correct shipment onto the correct carrier's vehicle and obtain driver's signature.", priority: 'High', riskLevel: 'High', proof: 'Signed Manifest', location: 'Loading Dock' },
                    { id: 'LW-SHIP-06', description: "Weigh and measure the final package to ensure accurate shipping costs.", priority: 'High', riskLevel: 'High', proof: 'Weight/Dimension Log', location: 'Packing Station' },
                    { id: 'LW-SHIP-07', description: "Update the order status in the WMS/ERP system.", priority: 'High', riskLevel: 'Medium', proof: 'System Entry', location: 'System' },
                    { id: 'LW-SHIP-08', description: "Provide the customer with a tracking number.", priority: 'High', riskLevel: 'Medium', proof: 'Email Communication', location: 'System' },
                    { id: 'LW-SHIP-09', description: "Ensure all hazardous materials are shipped according to regulations.", priority: 'High', riskLevel: 'High', proof: 'Hazmat Declaration', location: 'Packing Station' },
                    { id: 'LW-SHIP-10', description: "Conduct a final quality check before the shipment leaves the warehouse.", priority: 'High', riskLevel: 'High', proof: 'QC Sign-off', location: 'Loading Dock' }
                ]
            }
        ]
    },
    // --- Social Cause ---
    {
        id: 'animal_shelter_pack',
        title: "Animal Shelter Operations",
        priceUSD: 0,
        priceINR: 0,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Social Cause",
        description: "A comprehensive toolkit for non-profit animal shelters to ensure animal welfare, safety, and effective volunteer management.",
        icon: <PawPrint className="w-8 h-8 text-primary" />,
        badgeText: "Free",
        badgeVariant: "accent",
        whoIsItFor: ["Shelter Managers", "Animal Welfare Officers", "Volunteer Coordinators", "Non-profit Founders", "Vets"],
        sampleItems: [
            "Ensure 'Daily Animal Health & Wellness' checks are never missed.",
            "Implement a 'Kennel & Facility Hygiene' protocol to prevent disease.",
            "Standardize the 'Adoption & Foster Screening' process.",
            "Includes checklists for 'Medication Administration' and 'Volunteer Onboarding'."
        ],
        previewScenario: {
            title: "Handling a New Animal Intake",
            description: "A stray, injured dog is brought to the shelter. This scenario shows how checklists for Health, Hygiene, and Adoption work together to ensure the animal receives immediate care and is set on a path to a new home.",
            tasks: [
                { id: 'AS-HEALTH-01', description: "The incoming animal is immediately checked for injuries and signs of illness by a trained staff member.", sourceChecklist: "Daily Animal Health & Wellness", priority: 'High' },
                { id: 'AS-HYGIENE-08', description: "The animal is placed in a clean, isolated kennel to prevent any potential spread of disease to the general population.", sourceChecklist: "Kennel & Facility Hygiene", priority: 'High' },
                { id: 'AS-HEALTH-04', description: "Veterinary staff administer necessary medical care, and all treatments are logged.", sourceChecklist: "Daily Animal Health & Wellness", priority: 'High' },
                { id: 'AS-ADOPT-07', description: "Once healthy, the animal's history and temperament are documented to create an accurate profile for potential adopters.", sourceChecklist: "Adoption & Foster Screening", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Built on Global Animal Welfare Best Practices",
            standards: [
                { name: "Animal Health", description: "Protocols aligned with veterinary best practices for health checks, medication, and hygiene." },
                { name: "Shelter Operations", description: "Guidelines from leading animal welfare organizations for sanitation and disease control." },
                { name: "Adoption & Foster", description: "Ethical and effective screening processes to ensure safe and permanent homes." },
                { name: "Volunteer Management", description: "Best practices for training and managing volunteers in an animal care setting." }
            ]
        },
        checklists: [
            {
                title: "🐾 Daily Animal Health & Wellness",
                department: "Animal Care",
                frequency: "Daily",
                role: "Animal Caretaker",
                summary: "Provide the best possible care for every animal. This checklist ensures no animal's health needs are overlooked, from feeding to monitoring for signs of illness.",
                tasks: [
                    { id: 'AS-HEALTH-01', description: "Check every animal for signs of illness, injury, or distress.", priority: 'High', riskLevel: 'High', proof: 'Health Log', location: 'Kennels/Cages' },
                    { id: 'AS-HEALTH-02', description: "Ensure every animal has access to fresh, clean water.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Kennels/Cages' },
                    { id: 'AS-HEALTH-03', description: "Feed every animal according to their specific dietary plan.", priority: 'High', riskLevel: 'High', proof: 'Feeding Log', location: 'Kennels/Cages' },
                    { id: 'AS-HEALTH-04', description: "Administer any required medications and log the dosage and time.", priority: 'High', riskLevel: 'High', proof: 'Medication Log', location: 'Medical Room' },
                    { id: 'AS-HEALTH-05', description: "Provide enrichment (e.g., toys, walks) for mental stimulation.", priority: 'Medium', riskLevel: 'Low', proof: 'Enrichment Log', location: 'Play Areas' },
                    { id: 'AS-HEALTH-06', description: "Monitor urination and defecation for any abnormalities.", priority: 'High', riskLevel: 'Medium', proof: 'Health Log', location: 'Kennels/Cages' },
                    { id: 'AS-HEALTH-07', description: "Check for any changes in behavior or appetite.", priority: 'High', riskLevel: 'High', proof: 'Behavior Log', location: 'Kennels/Cages' },
                    { id: 'AS-HEALTH-08', description: "Groom animals as needed (brushing, nail trims).", priority: 'Medium', riskLevel: 'Low', proof: 'Grooming Log', location: 'Grooming Area' },
                    { id: 'AS-HEALTH-09', description: "Socialize animals with staff and volunteers.", priority: 'High', riskLevel: 'Medium', proof: 'Socialization Log', location: 'Play Areas' },
                    { id: 'AS-HEALTH-10', description: "Report any health concerns to the veterinary team immediately.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Medical Room' }
                ]
            },
            {
                title: "🧼 Kennel & Facility Hygiene",
                department: "Facilities/Volunteers",
                frequency: "Daily",
                role: "Kennel Manager",
                summary: "Prevent the spread of disease with a rigorous cleaning protocol. This checklist ensures kennels, common areas, and equipment are properly sanitized every day.",
                tasks: [
                    { id: 'AS-HYGIENE-01', description: "Clean and disinfect all empty kennels/cages before a new animal is placed in them.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kennels/Cages' },
                    { id: 'AS-HYGIENE-02', description: "Wash all food and water bowls with animal-safe disinfectant.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Cleaning Area' },
                    { id: 'AS-HYGIENE-03', description: "Scoop all litter boxes and clean outdoor waste areas.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kennels/Outdoor Areas' },
                    { id: 'AS-HYGIENE-04', description: "Wash and dry all soiled bedding and towels.", priority: 'High', riskLevel: 'Medium', proof: 'Laundry Log', location: 'Laundry Area' },
                    { id: 'AS-HYGIENE-05', description: "Mop and sanitize floors in all animal and public areas.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Entire Facility' },
                    { id: 'AS-HYGIENE-06', description: "Empty and sanitize all trash bins.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Log', location: 'Entire Facility' },
                    { id: 'AS-HYGIENE-07', description: "Ensure proper ventilation in all animal areas.", priority: 'High', riskLevel: 'High', proof: 'Ventilation System Check', location: 'Entire Facility' },
                    { id: 'AS-HYGIENE-08', description: "Have separate cleaning supplies for isolation areas.", priority: 'High', riskLevel: 'High', proof: 'Supply Check', location: 'Isolation Area' },
                    { id: 'AS-HYGIENE-09', description: "Train all staff and volunteers on cleaning protocols.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'AS-HYGIENE-10', description: "Maintain a cleaning schedule and log for all areas.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Schedule', location: 'Office' }
                ]
            },
            {
                title: "❤️ Adoption & Foster Screening",
                department: "Adoptions",
                frequency: "Per Application",
                role: "Adoption Counselor",
                summary: "Find the perfect forever home for every animal. This checklist provides a structured, fair, and thorough process for vetting potential adopters and fosters.",
                tasks: [
                    { id: 'AS-ADOPT-01', description: "Review the adoption/foster application for completeness and red flags.", priority: 'High', riskLevel: 'High', proof: 'Application Review Notes', location: 'Office' },
                    { id: 'AS-ADOPT-02', description: "Conduct an interview with the potential adopter to understand their lifestyle and experience.", priority: 'High', riskLevel: 'High', proof: 'Interview Notes', location: 'Office' },
                    { id: 'AS-ADOPT-03', description: "If applicable, verify landlord approval for pets.", priority: 'High', riskLevel: 'High', proof: 'Landlord Contact Log', location: 'Office' },
                    { id: 'AS-ADOPT-04', description: "Perform a home visit (or virtual home visit) to check for a safe and suitable environment.", priority: 'High', riskLevel: 'High', proof: 'Home Visit Report', location: 'Applicant Home' },
                    { id: 'AS-ADOPT-05', description: "Check veterinary references for existing pets, if any.", priority: 'High', riskLevel: 'High', proof: 'Vet Reference Check Log', location: 'Office' },
                    { id: 'AS-ADOPT-06', description: "Ensure all members of the household meet the animal.", priority: 'High', riskLevel: 'High', proof: 'Meet and Greet Log', location: 'Shelter' },
                    { id: 'AS-ADOPT-07', description: "Provide information on the animal's history, behavior, and medical needs.", priority: 'High', riskLevel: 'High', proof: 'Information Packet', location: 'Shelter' },
                    { id: 'AS-ADOPT-08', description: "Have the adopter sign an adoption contract and pay the adoption fee.", priority: 'High', riskLevel: 'High', proof: 'Signed Contract', location: 'Office' },
                    { id: 'AS-ADOPT-09', description: "Provide post-adoption support and resources.", priority: 'High', riskLevel: 'Medium', proof: 'Resource Handout', location: 'Shelter' },
                    { id: 'AS-ADOPT-10', description: "Follow up with the adopter after a set period to ensure a successful placement.", priority: 'High', riskLevel: 'Medium', proof: 'Follow-up Log', location: 'System' }
                ]
            },
            {
                title: "🤝 Volunteer Onboarding & Management",
                department: "Volunteers",
                frequency: "Per Volunteer",
                role: "Volunteer Coordinator",
                summary: "Empower your volunteers and keep them engaged. This checklist ensures every new volunteer is properly trained, onboarded, and understands their role.",
                tasks: [
                    { id: 'AS-VOL-01', description: "Conduct a volunteer orientation session covering shelter policies and safety procedures.", priority: 'High', riskLevel: 'Medium', proof: 'Orientation Sign-in Sheet', location: 'Meeting Room' },
                    { id: 'AS-VOL-02', description: "Provide hands-on training for specific tasks (e.g., animal handling, cleaning protocols).", priority: 'High', riskLevel: 'High', proof: 'Training Checklist', location: 'Kennels/Facility' },
                    { id: 'AS-VOL-03', description: "Assign a mentor or experienced volunteer to the new recruit for their first few shifts.", priority: 'Medium', riskLevel: 'Low', proof: 'Mentor Assignment', location: 'Office' },
                    { id: 'AS-VOL-04', description: "Ensure the volunteer has signed all necessary waivers and agreements.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Forms', location: 'Office' },
                    { id: 'AS-VOL-05', description: "Schedule the volunteer's first few shifts and add them to the communication system (e.g., email list, WhatsApp group).", priority: 'High', riskLevel: 'Low', proof: 'System Entry', location: 'Office' },
                    { id: 'AS-VOL-06', description: "Provide a volunteer handbook.", priority: 'High', riskLevel: 'Low', proof: 'Handbook Acknowledgment', location: 'Office' },
                    { id: 'AS-VOL-07', description: "Conduct regular check-ins with volunteers to gather feedback.", priority: 'High', riskLevel: 'Medium', proof: 'Check-in Log', location: 'Office' },
                    { id: 'AS-VOL-08', description: "Recognize and appreciate volunteer contributions.", priority: 'High', riskLevel: 'Low', proof: 'Recognition Program', location: 'Office' },
                    { id: 'AS-VOL-09', description: "Offer ongoing training and development opportunities.", priority: 'Medium', riskLevel: 'Low', proof: 'Training Calendar', location: 'Office' },
                    { id: 'AS-VOL-10', description: "Maintain accurate records of volunteer hours.", priority: 'High', riskLevel: 'Medium', proof: 'Volunteer Hour Log', location: 'System' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Operations",
                frequency: "Monthly",
                role: "Shelter Manager",
                summary: "Protect vulnerable animals from fleas, ticks, and other pests. This checklist establishes a preventive and reactive pest control program that is safe for animals.",
                tasks: [
                    { id: 'PEST-ANIMAL-01', description: "Inspect all kennel, quarantine, and food storage areas for signs of pests (e.g., fleas, rodents).", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Facility-wide' },
                    { id: 'PEST-ANIMAL-02', description: "Ensure all food is stored in sealed, chew-proof containers.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Storage Area' },
                    { id: 'PEST-ANIMAL-03', description: "Maintain a regular cleaning schedule for all areas to eliminate food sources and breeding grounds for pests.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Logs', location: 'Facility-wide' },
                    { id: 'PEST-ANIMAL-04', description: "Use only animal-safe pest control products and methods, as approved by a veterinarian.", priority: 'High', riskLevel: 'High', proof: 'Product Approval List', location: 'Manager Office' },
                    { id: 'PEST-ANIMAL-05', description: "Coordinate with a professional pest control service for regular inspections and treatments, ensuring they are aware of the presence of animals.", priority: 'High', riskLevel: 'High', proof: 'Vendor Service Report', location: 'Manager Office' },
                    { id: 'PEST-ANIMAL-06', description: "Implement a flea and tick prevention program for all animals.", priority: 'High', riskLevel: 'High', proof: 'Prevention Program Protocol', location: 'Medical Room' },
                    { id: 'PEST-ANIMAL-07', description: "Isolate any animal with a suspected pest infestation.", priority: 'High', riskLevel: 'High', proof: 'Isolation Log', location: 'Isolation Area' },
                    { id: 'PEST-ANIMAL-08', description: "Keep the exterior of the shelter clean and free of debris.", priority: 'High', riskLevel: 'Medium', proof: 'Exterior Inspection Log', location: 'Exterior' },
                    { id: 'PEST-ANIMAL-09', description: "Train staff and volunteers on how to spot and report pests.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'PEST-ANIMAL-10', description: "Maintain a log of all pest sightings and actions taken.", priority: 'High', riskLevel: 'High', proof: 'Pest Sighting Log', location: 'Office' }
                ]
            }
        ]
    }
]

    