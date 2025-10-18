
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket, Wifi, UserCheck, BarChart3, Link, BrainCircuit, Bot, Syringe, DatabaseZap, Megaphone, Siren, Lock, KeyRound, Users, Banknote, Webcam, Bug, UserCog, PackageCheck, Ambulance, FileWarning, Milestone, DoorClosed, CircleDollarSign, Wind, Thermometer, UserCog2, Key, Router, Pallet, Watch, Drama, Barcode, Stethoscope, SyringeIcon, HeartPulse, Microscope, Bus, BookOpen, Car, Drill, SprayCan, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, Mask, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask, Store, Pill, Ship, Sun, Film, AnchorIcon, Clapperboard, MonitorPlay, Tv, Library, Brain, BriefcaseBusiness, ShieldCheck, Handshake, Route, CalendarDays, ClipboardList, HelpingHand, Map, DramaIcon, UserRound, Sparkles, Scale, Code, Video } from "lucide-react";

export type Checklist = {
    title: string;
    department: string;
    frequency: string;
    role: string;
    summary: string;
    icon: React.ReactElement;
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

// DEFINITIVE FIX: This array now defines and exports all 22 packs directly.
// No .filter() method is applied at export, ensuring the full, unfiltered list is available to the application.
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
        icon: <Building />,
        badgeText: "Most Popular",
        badgeVariant: "default",
        bestseller: true,
        whoIsItFor: ["Hotel Owners", "General Managers", "COOs", "VPs of Operations", "Directors", "Heads of Departments", "GMs", "VPs", "and their teams"],
        sampleItems: [
            { text: "Master hotel finance with 'Annual Budgeting' and 'P&L Review' checklists.", icon: <BarChart3 /> },
            { text: "Implement a 'Managerial Performance Review' and 'New Hire Onboarding' system.", icon: <UserCheck /> },
            { text: "Includes a 'Brand Standards Audit' and 'Hotel Pre-Opening' checklist.", icon: <FileCheck /> },
            { text: "Manage your brand's online presence with an 'Online Review & Reputation Management' checklist.", icon: <Megaphone /> },
            { text: "Ensure top-tier security with 'CCTV & Security Monitoring'.", icon: <Webcam /> }
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
        checklists: [
            {
                title: "Hotel Pre-Opening Checklist",
                department: "Management",
                frequency: "Project-Based",
                role: "General Manager",
                icon: <Milestone />,
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
                title: "Annual Budgeting & Forecasting",
                department: "Finance",
                frequency: "Annually/Quarterly",
                role: "Financial Controller",
                icon: <BarChart3 />,
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
                title: "Monthly P&L Review & Cost Control",
                department: "Management",
                frequency: "Monthly",
                role: "General Manager",
                icon: <DollarSign />,
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
                title: "Brand Standards & Guest Experience Audit",
                department: "Quality/Management",
                frequency: "Quarterly",
                role: "Quality Manager",
                icon: <Trophy />,
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
                title: "New Hire Onboarding & Training Plan",
                department: "HR",
                frequency: "Per New Hire",
                role: "HR Manager",
                icon: <UserCheck />,
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
                title: "Managerial Performance Review",
                department: "HR/Management",
                frequency: "Quarterly/Annually",
                role: "General Manager",
                icon: <BriefcaseBusiness />,
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
                title: "Online Review & Reputation Management",
                department: "Marketing/Guest Relations",
                frequency: "Daily",
                role: "Marketing Manager",
                icon: <Megaphone />,
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
                title: "Pest Control Management",
                department: "Housekeeping/Maintenance",
                frequency: "Weekly",
                role: "Housekeeping Manager",
                icon: <Bug />,
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
            {
                title: "Vendor & Contract Management",
                department: "Procurement/Finance",
                frequency: "Quarterly",
                role: "Procurement Manager",
                icon: <Handshake />,
                summary: "Maximize value and minimize risk from your vendors. This SOP helps you manage contracts, review performance, and ensure compliance from all third-party suppliers.",
                tasks: [
                    { id: 'VEND-001', description: "Maintain a central repository of all vendor contracts.", priority: 'High', riskLevel: 'Medium', proof: 'Contract Database', location: 'Office' },
                    { id: 'VEND-002', description: "Track key contract dates, such as renewals and expirations.", priority: 'High', riskLevel: 'High', proof: 'Contract Calendar', location: 'Office' },
                    { id: 'VEND-003', description: "Conduct quarterly business reviews (QBRs) with critical vendors.", priority: 'High', riskLevel: 'High', proof: 'QBR Minutes', location: 'Meeting Room' },
                    { id: 'VEND-004', description: "Audit vendor invoices against contract terms and services rendered.", priority: 'High', riskLevel: 'High', proof: 'Invoice Audit Report', location: 'Finance Office' },
                    { id: 'VEND-005', description: "Assess vendor performance against agreed-upon SLAs.", priority: 'High', riskLevel: 'High', proof: 'SLA Performance Report', location: 'Office' },
                    { id: 'VEND-006', description: "Ensure all vendors have adequate insurance and liability coverage.", priority: 'High', riskLevel: 'High', proof: 'Insurance Certificates', location: 'Office' },
                    { id: 'VEND-007', description: "Evaluate new vendors through a standardized selection process.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Selection Form', location: 'Office' },
                    { id: 'VEND-008', description: "Maintain a record of all vendor communications.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Office' },
                    { id: 'VEND-009', description: "Have a clear process for resolving vendor disputes.", priority: 'High', riskLevel: 'High', proof: 'Dispute Resolution Policy', location: 'Office' },
                    { id: 'VEND-010', description: "Regularly benchmark vendor pricing against the market.", priority: 'High', riskLevel: 'Medium', proof: 'Benchmarking Report', location: 'Office' }
                ]
            },
            {
                title: "CCTV & Security Monitoring",
                department: "Security",
                frequency: "Daily",
                role: "Security Supervisor",
                icon: <Webcam />,
                summary: "Ensure your surveillance system is a proactive security tool, not just a reactive one. This checklist covers daily functionality checks, footage review, and incident reporting.",
                tasks: [
                    { id: 'SEC-CSM-001', description: "Verify all cameras are online, recording, and have unobstructed views.", priority: 'High', riskLevel: 'High', proof: 'Camera Status Log', location: 'Security Room' },
                    { id: 'SEC-CSM-002', description: "Check that recording servers have adequate storage space.", priority: 'High', riskLevel: 'High', proof: 'Storage Report', location: 'Security Room' },
                    { id: 'SEC-CSM-003', description: "Review footage of critical areas (entrances, cash counters) from the previous day.", priority: 'High', riskLevel: 'High', proof: 'Footage Review Log', location: 'Security Room' },
                    { id: 'SEC-CSM-004', description: "Export and save footage related to any reported incidents.", priority: 'High', riskLevel: 'High', proof: 'Incident Footage Archive', location: 'Security Room' },
                    { id: 'SEC-CSM-005', description: "Test pan-tilt-zoom (PTZ) functionality of relevant cameras.", priority: 'Medium', riskLevel: 'Medium', proof: 'PTZ Test Log', location: 'Security Room' },
                    { id: 'SEC-CSM-006', description: "Ensure the time and date stamp on all cameras is accurate.", priority: 'High', riskLevel: 'High', proof: 'Timestamp Verification', location: 'Security Room' },
                    { id: 'SEC-CSM-007', description: "Clean camera lenses in dusty or outdoor areas.", priority: 'Medium', riskLevel: 'Low', proof: 'Cleaning Log', location: 'Various' },
                    { id: 'SEC-CSM-008', description: "Maintain a log of all security personnel who access the monitoring room.", priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Security Room' },
                    { id: 'SEC-CSM-009', description: "Report any system malfunctions to the maintenance team immediately.", priority: 'High', riskLevel: 'High', proof: 'Malfunction Report', location: 'Security Room' },
                    { id: 'SEC-CSM-010', description: "Ensure compliance with all local laws regarding video surveillance and privacy.", priority: 'High', riskLevel: 'High', proof: 'Legal Compliance Audit', location: 'Office' }
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
        icon: <Utensils />,
        badgeText: "Essential for F&B",
        badgeVariant: "accent",
        whoIsItFor: ["Restaurant Owners", "Head Chefs", "Kitchen Managers", "F&B Directors", "VPs", "GMs", "Directors"],
        sampleItems: [
            { text: "Master food safety with a HACCP-based 'Kitchen Opening' checklist.", icon: <ShieldCheck /> },
            { text: "Implement a zero-error 'Food Receiving & Storage' protocol.", icon: <PackageCheck /> },
            { text: "Includes a 'New Site Feasibility Study' for expansion planning.", icon: <Milestone /> },
            { text: "Boost sales with a 'Weekly Sales & Revenue Meeting Agenda'.", icon: <CircleDollarSign /> },
            { text: "Handle complaints effectively with the 'Customer Feedback' SOP.", icon: <UserRound /> },
            { text: "Ensure bar profitability and compliance with the 'Bar Opening & Closing' checklist.", icon: <Landmark /> },
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
        checklists: [
            {
                title: "New Site/Location Feasibility Study",
                department: "Management/Strategy",
                frequency: "Per Potential Site",
                role: "Owner/Director",
                icon: <Milestone />,
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
                title: "Weekly Sales & Revenue Meeting Agenda",
                department: "Management",
                frequency: "Weekly",
                role: "Restaurant Manager",
                icon: <BarChart3 />,
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
                title: "Kitchen Opening Checklist (HACCP Focus)",
                department: "F&B",
                frequency: "Daily",
                role: "Head Chef",
                icon: <ShieldCheck />,
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
                title: "Food Receiving & Storage Protocol",
                department: "F&B",
                frequency: "Daily",
                role: "Store Keeper",
                icon: <PackageCheck />,
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
                title: "Daily HACCP & Line Check",
                department: "F&B",
                frequency: "Daily",
                role: "Sous Chef",
                icon: <Thermometer />,
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
                title: "Kitchen Closing & Cleaning Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Closing Chef",
                icon: <SprayCan />,
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
                title: "Front of House Opening Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Restaurant Manager",
                icon: <DoorClosed />,
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
                title: "Pest Control Management",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Manager",
                icon: <Bug />,
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
                    { id: 'PEST-REST-10', description: "Maintain a pest sighting log and review it weekly.", priority: 'High', riskLevel: 'Medium', proof: 'Pest Sighting Log', location: 'Manager Office' }
                ]
            },
            {
                title: "Bar Opening & Closing",
                department: "F&B",
                frequency: "Daily",
                role: "Head Bartender",
                icon: <Landmark />,
                summary: "Ensure your bar is profitable, clean, and compliant. This checklist covers inventory control, cash handling, hygiene, and equipment readiness.",
                tasks: [
                    { id: 'BAR-OC-01', description: "Verify opening and closing cash float.", priority: 'High', riskLevel: 'High', proof: 'Cash Float Log', location: 'POS' },
                    { id: 'BAR-OC-02', description: "Check and log temperatures of all bar refrigerators and freezers.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Bar Area' },
                    { id: 'BAR-OC-03', description: "Restock bar with liquor, mixers, and garnishes based on par levels.", priority: 'High', riskLevel: 'Medium', proof: 'Restock Sheet', location: 'Bar Area' },
                    { id: 'BAR-OC-04', description: "Clean and sanitize all bar surfaces, tools, and glassware.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Bar Area' },
                    { id: 'BAR-OC-05', description: "Check functionality of all bar equipment (blenders, POS, draft taps).", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Check Log', location: 'Bar Area' },
                    { id: 'BAR-OC-06', description: "Perform daily inventory count of top-10 high-value liquor bottles.", priority: 'High', riskLevel: 'High', proof: 'Inventory Count Sheet', location: 'Bar Area' },
                    { id: 'BAR-OC-07', description: "Secure all liquor bottles at closing time.", priority: 'High', riskLevel: 'High', proof: 'Closing Visual Check', location: 'Bar Area' },
                    { id: 'BAR-OC-08', description: "Ensure proper disposal of waste and empty bottles.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Log', location: 'Waste Area' },
                    { id: 'BAR-OC-09', description: "Review any special promotions or events for the shift.", priority: 'Medium', riskLevel: 'Low', proof: 'Briefing Notes', location: 'Bar Area' },
                    { id: 'BAR-OC-10', description: "Reconcile daily sales against POS reports at closing.", priority: 'High', riskLevel: 'High', proof: 'Sales Reconciliation Report', location: 'Office' }
                ]
            },
            {
                title: "Customer Complaint Handling",
                department: "Management",
                frequency: "Per Complaint",
                role: "Restaurant Manager",
                icon: <UserRound />,
                summary: "Turn unhappy customers into loyal advocates with a structured and empathetic approach to handling complaints, ensuring every issue is resolved and logged.",
                tasks: [
                    { id: 'COMP-01', description: "Listen to the customer's complaint fully without interrupting.", priority: 'High', riskLevel: 'High', proof: 'Manager Observation', location: 'Dining Room' },
                    { id: 'COMP-02', description: "Empathize with the customer and apologize for their negative experience.", priority: 'High', riskLevel: 'High', proof: 'Manager Observation', location: 'Dining Room' },
                    { id: 'COMP-03', description: "Offer an immediate solution (e.g., replace the dish, offer a discount).", priority: 'High', riskLevel: 'High', proof: 'POS Record / Manager Log', location: 'Dining Room' },
                    { id: 'COMP-04', description: "Log the complaint in a centralized logbook with details of the issue and resolution.", priority: 'High', riskLevel: 'Medium', proof: 'Complaint Logbook', location: 'Office' },
                    { id: 'COMP-05', description: "Inform the relevant department (kitchen, service) about the complaint to prevent recurrence.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Office' },
                    { id: 'COMP-06', description: "If the complaint is serious (e.g., foreign object in food), escalate to senior management immediately.", priority: 'High', riskLevel: 'High', proof: 'Escalation Report', location: 'Office' },
                    { id: 'COMP-07', description: "Follow up with the customer before they leave to ensure they are satisfied with the resolution.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Observation', location: 'Dining Room' },
                    { id: 'COMP-08', description: "Review complaint logs weekly to identify recurring issues.", priority: 'High', riskLevel: 'High', proof: 'Weekly Review Minutes', location: 'Office' },
                    { id: 'COMP-09', description: "Train all staff on the basics of complaint handling and when to escalate to a manager.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'COMP-10', description: "Use feedback from complaints to improve processes.", priority: 'High', riskLevel: 'High', proof: 'Process Improvement Document', location: 'Office' }
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
        icon: <Gem />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Luxury Brand VPs", "Store Owners", "Heads of Retail Operations", "Security Directors", "Compliance Officers", "COOs"],
        sampleItems: [
            { text: "Implement a 'Vault Access Control' checklist based on biometric and dual-approval protocols.", icon: <Lock /> },
            { text: "Standardize your 'High-Value Exchange & Handling' SOP to prevent internal fraud.", icon: <Banknote /> },
            { text: "Ensure 'Digital Transaction Security' with daily QR code and POS validation.", icon: <Shield /> },
            { text: "Align with 'BIS Hallmarking' and 'Anti-Money Laundering (AML)' compliance.", icon: <FileCheck /> },
            { text: "Manage inventory with 'High-Value Item Auditing' protocols.", icon: <Barcode /> },
            { text: "Master 'Visual Merchandising & Display Standards' for a luxury feel.", icon: <Sparkles /> },
        ],
        checklists: [
            {
                title: "End-of-Day Store Closure & Security",
                department: "Security/Operations",
                frequency: "Daily",
                role: "Store Manager",
                icon: <Shield />,
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
                title: "Vault Access Control",
                department: "Inventory/Security",
                frequency: "Daily",
                role: "Inventory Manager",
                icon: <Lock />,
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
                title: "Sales & Return Authorization",
                department: "Sales/Operations",
                frequency: "Per Transaction",
                role: "Store Manager",
                icon: <Banknote />,
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
                title: "Digital Transaction Security",
                department: "IT/Operations",
                frequency: "Daily",
                role: "Cashier/Manager",
                icon: <ShieldCheck />,
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
                title: "High-Value Exchange & Handling SOP",
                department: "Sales/Security",
                frequency: "Per Exchange",
                role: "Senior Sales Executive",
                icon: <Gem />,
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
                title: "Fire & Electrical Safety Audit Checklist",
                department: "Safety/Facilities",
                frequency: "Monthly",
                role: "Safety Officer",
                icon: <Siren />,
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
                title: "POSH & Professional Conduct SOP",
                department: "HR",
                frequency: "Annually",
                role: "HR Manager",
                icon: <Users />,
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
                title: "Jewelry Certification & Documentation SOP",
                department: "Sales/Quality",
                frequency: "Per Sale",
                role: "Sales Associate",
                icon: <FileCheck />,
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
                title: "Visual Merchandising & Display Standards",
                department: "Merchandising",
                frequency: "Daily",
                role: "Visual Merchandiser",
                icon: <Sparkles />,
                summary: "Maintain a luxury ambiance with a checklist that ensures perfect lighting, cleanliness, and presentation of every item on display.",
                tasks: [
                    { id: 'LUX-VM-01', description: "Check that all display case lighting is functional and correctly angled.", priority: 'High', riskLevel: 'Medium', proof: 'Lighting Audit Log', location: 'Sales Floor' },
                    { id: 'LUX-VM-02', description: "Wipe down all glass display cases and surfaces for fingerprints and dust.", priority: 'High', riskLevel: 'Low', proof: 'Cleaning Log', location: 'Sales Floor' },
                    { id: 'LUX-VM-03', description: "Ensure all items are displayed on their correct, branded stands.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'LUX-VM-04', description: "Verify that all price tags are discreet, accurate, and professionally presented.", priority: 'High', riskLevel: 'Medium', proof: 'Price Tag Audit', location: 'Sales Floor' },
                    { id: 'LUX-VM-05', description: "Rotate featured items in the window display weekly.", priority: 'High', riskLevel: 'Medium', proof: 'Window Display Log', location: 'Window' },
                    { id: 'LUX-VM-06', description: "Check for any burnt-out bulbs and replace them immediately.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Sales Floor' },
                    { id: 'LUX-VM-07', description: "Ensure the store's ambiance (music, scent) is consistent with brand standards.", priority: 'Medium', riskLevel: 'Low', proof: 'Ambiance Check Log', location: 'Store-wide' },
                    { id: 'LUX-VM-08', description: "Ensure props and decorative elements are clean and in good condition.", priority: 'High', riskLevel: 'Low', proof: 'Props Audit', location: 'Sales Floor' },
                    { id: 'LUX-VM-09', description: "Review and implement new visual merchandising directives from corporate.", priority: 'High', riskLevel: 'Medium', proof: 'Directive Sign-off', location: 'Office' },
                    { id: 'LUX-VM-10', description: "Take high-quality photos of the displays for internal review.", priority: 'Medium', riskLevel: 'Low', proof: 'Photo Archive', location: 'Office' }
                ]
            },
            {
                title: "AML & High-Value Transaction Reporting",
                department: "Compliance",
                frequency: "Per Transaction",
                role: "Compliance Officer",
                icon: <Scale />,
                summary: "Ensure compliance with Anti-Money Laundering (AML) regulations by flagging and reporting high-value cash transactions as per legal requirements.",
                tasks: [
                    { id: 'LUX-AML-01', description: "Identify any single transaction or series of related transactions exceeding the AML threshold.", priority: 'High', riskLevel: 'High', proof: 'POS Alert', location: 'POS' },
                    { id: 'LUX-AML-02', description: "Collect and verify the customer's identity documents (e.g., PAN card) for all such transactions.", priority: 'High', riskLevel: 'High', proof: 'ID Document Copy', location: 'Office' },
                    { id: 'LUX-AML-03', description: "Fill out the required Suspicious Transaction Report (STR) or Cash Transaction Report (CTR) form.", priority: 'High', riskLevel: 'High', proof: 'Completed Form', location: 'Office' },
                    { id: 'LUX-AML-04', description: "Submit the report to the Financial Intelligence Unit (FIU) within the stipulated timeline.", priority: 'High', riskLevel: 'High', proof: 'Submission Receipt', location: 'Office' },
                    { id: 'LUX-AML-05', description: "Maintain a confidential internal log of all reported transactions.", priority: 'High', riskLevel: 'High', proof: 'AML Logbook', location: 'Office' },
                    { id: 'LUX-AML-06', description: "Train all sales and cashier staff on identifying and flagging suspicious transactions.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'LUX-AML-07', description: "Do not 'tip off' the customer that a report is being filed.", priority: 'High', riskLevel: 'High', proof: 'Policy Document', location: 'Office' },
                    { id: 'LUX-AML-08', description: "Regularly update knowledge of AML regulations and thresholds.", priority: 'High', riskLevel: 'Medium', proof: 'Legal Update Subscription', location: 'Legal' },
                    { id: 'LUX-AML-09', description: "Appoint a Principal Officer responsible for AML compliance.", priority: 'High', riskLevel: 'High', proof: 'Appointment Letter', location: 'HR' },
                    { id: 'LUX-AML-10', description: "Conduct an annual independent audit of AML compliance procedures.", priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'Office' }
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
        icon: <Shirt />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Fashion Retail Owners", "Store Managers", "Merchandisers", "Heads of Retail", "Head of Visual Merchandising", "COO"],
        sampleItems: [
            { text: "Master 'Seasonal Inventory Management' to reduce dead stock.", icon: <Thermometer /> },
            { text: "Implement a 'Visual Merchandising' checklist for stunning displays.", icon: <GalleryVertical /> },
            { text: "Secure your store with a 'Fitting Room Operations & Security' protocol.", icon: <DoorClosed /> },
            { text: "Streamline 'Omni-Channel Operations' for click-and-collect and online returns.", icon: <Link /> },
            { text: "Prevent theft with 'Store Safety & Loss Prevention'.", icon: <Shield /> },
            { text: "Ensure secure and accurate 'Cash & Payment Handling'.", icon: <DollarSign /> },
        ],
        checklists: [
            {
                title: "Store Opening & Daily Readiness",
                department: "Operations",
                frequency: "Daily",
                role: "Store Manager",
                icon: <Key />,
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
                title: "Seasonal Inventory Management",
                department: "Inventory",
                frequency: "Weekly",
                role: "Merchandiser/Manager",
                icon: <Thermometer />,
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
                title: "Visual Merchandising & Window Display",
                department: "Merchandising",
                frequency: "Weekly",
                role: "Visual Merchandiser",
                icon: <GalleryVertical />,
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
                title: "Fitting Room Operations & Security",
                department: "Sales/Security",
                frequency: "Ongoing",
                role: "Sales Associate",
                icon: <DoorClosed />,
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
                title: "Omni-Channel Operations",
                department: "Operations",
                frequency: "Daily",
                role: "Omni-Channel Lead",
                icon: <Link />,
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
                title: "Store Safety & Loss Prevention",
                department: "Security/Operations",
                frequency: "Daily",
                role: "Store Manager",
                icon: <Shield />,
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
                title: "Cash & Payment Handling",
                department: "Finance/Operations",
                frequency: "Per Shift",
                role: "Head Cashier",
                icon: <DollarSign />,
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
                title: "Vendor Collaboration",
                department: "Merchandising/Buying",
                frequency: "Quarterly",
                role: "Brand Manager",
                icon: <Handshake />,
                summary: "Strengthen relationships with brand partners through structured business reviews, joint marketing planning, and performance analysis.",
                tasks: [
                    { id: 'FAS-VEND-01', description: "Conduct Quarterly Business Reviews (QBRs) with key brand partners.", priority: 'High', riskLevel: 'Medium', proof: 'QBR Minutes', location: 'Office' },
                    { id: 'FAS-VEND-02', description: "Share and review sell-through data with vendors.", priority: 'High', riskLevel: 'Medium', proof: 'Data Report', location: 'Office' },
                    { id: 'FAS-VEND-03', description: "Plan joint marketing campaigns and in-store promotions.", priority: 'High', riskLevel: 'Medium', proof: 'Marketing Plan', location: 'Office' },
                    { id: 'FAS-VEND-04', description: "Negotiate terms for stock returns or buy-backs.", priority: 'High', riskLevel: 'High', proof: 'Negotiation Notes', location: 'Office' },
                    { id: 'FAS-VEND-05', description: "Coordinate on new product launches and staff training.", priority: 'High', riskLevel: 'Medium', proof: 'Launch Plan', location: 'Office' },
                    { id: 'FAS-VEND-06', description: "Set joint business goals for the upcoming season.", priority: 'High', riskLevel: 'Medium', proof: 'Goal Document', location: 'Office' },
                    { id: 'FAS-VEND-07', description: "Ensure vendor compliance with ethical sourcing and labor standards.", priority: 'High', riskLevel: 'High', proof: 'Compliance Audit', location: 'Office' },
                    { id: 'FAS-VEND-08', description: "Review vendor performance against SLAs.", priority: 'High', riskLevel: 'Medium', proof: 'SLA Report', location: 'Office' },
                    { id: 'FAS-VEND-09', description: "Manage vendor-supplied fixtures and marketing materials.", priority: 'Medium', riskLevel: 'Low', proof: 'Fixture Inventory', location: 'Store' },
                    { id: 'FAS-VEND-10', description: "Resolve any invoicing or payment disputes promptly.", priority: 'High', riskLevel: 'High', proof: 'Dispute Resolution Log', location: 'Finance' }
                ]
            },
            {
                title: "Stockroom Organization (5S)",
                department: "Inventory/Operations",
                frequency: "Weekly",
                role: "Stockroom Manager",
                icon: <Recycle />,
                summary: "Implement the 5S methodology to create a hyper-efficient and organized stockroom, reducing picking times and inventory errors.",
                tasks: [
                    { id: 'FAS-5S-01', description: "Sort: Identify and remove all non-essential items from the stockroom.", priority: 'High', riskLevel: 'Medium', proof: 'Red Tag Area', location: 'Stockroom' },
                    { id: 'FAS-5S-02', description: "Set in Order: Designate and label specific locations for every SKU and category.", priority: 'High', riskLevel: 'Medium', proof: 'Location Map', location: 'Stockroom' },
                    { id: 'FAS-5S-03', description: "Shine: Conduct a weekly cleaning of all shelves, floors, and storage bins.", priority: 'High', riskLevel: 'Low', proof: 'Cleaning Log', location: 'Stockroom' },
                    { id: 'FAS-5S-04', description: "Standardize: Create clear visual labels and floor markings for all areas.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Standards Document', location: 'Stockroom' },
                    { id: 'FAS-5S-05', description: "Sustain: Perform a weekly 5S audit and post the score.", priority: 'High', riskLevel: 'Medium', proof: '5S Audit Scorecard', location: 'Stockroom' },
                    { id: 'FAS-5S-06', description: "Ensure all new stock is put away in its designated location within 24 hours of receipt.", priority: 'High', riskLevel: 'Medium', proof: 'Put-away Log', location: 'Stockroom' },
                    { id: 'FAS-5S-07', description: "Keep pathways and fire exits clear at all times.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Stockroom' },
                    { id: 'FAS-5S-08', description: "Train all staff on the 5S principles for the stockroom.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'FAS-5S-09', description: "Have a designated area for damaged or returned stock.", priority: 'High', riskLevel: 'Medium', proof: 'Designated Area Photo', location: 'Stockroom' },
                    { id: 'FAS-5S-10', description: "Regularly review and optimize the stockroom layout for efficiency.", priority: 'High', riskLevel: 'Medium', proof: 'Layout Review Minutes', location: 'Office' }
                ]
            },
            {
                title: "Customer Relationship Management (CRM)",
                department: "Sales/Marketing",
                frequency: "Daily",
                role: "CRM Executive",
                icon: <Users />,
                summary: "Build lasting customer relationships by systematically capturing customer data, preferences, and purchase history to personalize the shopping experience.",
                tasks: [
                    { id: 'FAS-CRM-01', description: "Ensure every new customer is offered the opportunity to join the loyalty program.", priority: 'High', riskLevel: 'Medium', proof: 'CRM Sign-up Log', location: 'POS' },
                    { id: 'FAS-CRM-02', description: "Update customer profiles with purchase history and preferences after each sale.", priority: 'High', riskLevel: 'Medium', proof: 'CRM Entry', location: 'System' },
                    { id: 'FAS-CRM-03', description: "Use CRM data to send personalized marketing emails (e.g., birthday offers, new arrivals).", priority: 'High', riskLevel: 'Medium', proof: 'Email Campaign Report', location: 'System' },
                    { id: 'FAS-CRM-04', description: "Segment customers based on their purchase behavior (e.g., high-spenders, frequent visitors).", priority: 'High', riskLevel: 'Medium', proof: 'Customer Segments', location: 'System' },
                    { id: 'FAS-CRM-05', description: "Train sales staff to use the CRM to look up customer preferences in-store.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'FAS-CRM-06', description: "Manage and respond to customer inquiries received through the CRM.", priority: 'High', riskLevel: 'Medium', proof: 'Inquiry Log', location: 'System' },
                    { id: 'FAS-CRM-07', description: "Ensure all data collection and usage is compliant with privacy laws (e.g., GDPR, DPDP).", priority: 'High', riskLevel: 'High', proof: 'Privacy Policy', location: 'Legal' },
                    { id: 'FAS-CRM-08', description: "Analyze CRM data to identify sales trends and opportunities.", priority: 'High', riskLevel: 'High', proof: 'Analysis Report', location: 'Office' },
                    { id: 'FAS-CRM-09', description: "Run loyalty program promotions and manage points redemption.", priority: 'High', riskLevel: 'Medium', proof: 'Promotion Plan', location: 'Marketing' },
                    { id: 'FAS-CRM-10', description: "Cleanse the CRM database regularly to remove duplicate or inactive contacts.", priority: 'Medium', riskLevel: 'Low', proof: 'Database Cleanse Report', location: 'System' }
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
        icon: <ShoppingBasket />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Supermarket Owners", "Grocery Store Proprietors", "Heads of Retail Operations", "Store Directors", "Department Heads (Fresh Food, Dairy)", "3PL Partners"],
        sampleItems: [
            { text: "Implement a 'Cold Storage & Food Safety' checklist based on FSSAI/HACCP.", icon: <Thermometer /> },
            { text: "Standardize 'Goods Receiving & Staging' for high-volume inventory.", icon: <PackageCheck /> },
            { text: "Optimize 'Cash Handling & POS Security' to prevent fraud.", icon: <Banknote /> },
            { text: "Includes checklists for 'Expiry & Inventory Rotation' and 'Store Hygiene'.", icon: <Recycle /> },
            { text: "Ensure full 'Legal & Metrology Compliance'.", icon: <FileCheck /> },
            { text: "Manage in-store food counters with the 'Food Outlet Management' checklist.", icon: <CakeSlice /> },
        ],
        checklists: [
            {
                title: "Fire & Electrical Safety",
                department: "Safety/Maintenance",
                frequency: "Weekly",
                role: "Safety Officer",
                icon: <Siren />,
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
                title: "Cold Storage & Food Safety",
                department: "Fresh Food/Dairy",
                frequency: "Hourly/Daily",
                role: "Department Manager",
                icon: <Thermometer />,
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
                    { id: 'SGR-CSFS-09', description: "Train all staff on the importance of temperature control and what to do if an alarm sounds.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Staff Room' },
                    { id: 'SGR-CSFS-10', description: "Keep all cold storage areas clean and organized, with products stored off the floor.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'All Cold Units' }
                ]
            },
            {
                title: "Store Hygiene & Housekeeping",
                department: "Operations/Facilities",
                frequency: "Hourly/Daily",
                role: "Floor Supervisor",
                icon: <SprayCan />,
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
                title: "Cash Handling & POS Security",
                department: "Finance/Front-End",
                frequency: "Per Shift",
                role: "Head Cashier",
                icon: <Banknote />,
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
                title: "Inventory, Expiry & Replenishment",
                department: "Inventory/Floor Staff",
                frequency: "Daily/Weekly",
                role: "Inventory Manager",
                icon: <Recycle />,
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
                title: "Legal & Metrology Compliance",
                department: "Compliance/Legal",
                frequency: "Monthly/Quarterly",
                role: "Compliance Officer",
                icon: <FileCheck />,
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
                title: "Security & Loss Prevention",
                department: "Security",
                frequency: "Daily",
                role: "Loss Prevention Officer",
                icon: <Lock />,
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
                title: "In-Store Food Outlet Management",
                department: "F&B/Operations",
                frequency: "Daily",
                role: "Food Court Manager",
                icon: <CakeSlice />,
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
                title: "Vendor & Supplier Management",
                department: "Procurement",
                frequency: "Quarterly",
                role: "Procurement Manager",
                icon: <Handshake />,
                summary: "Ensure supply chain integrity and product quality with a robust vendor management system. This checklist covers vendor selection, performance reviews, and compliance verification.",
                tasks: [
                    { id: 'SGR-VM-01', description: "Conduct due diligence on new vendors (financial stability, reputation).", priority: 'High', riskLevel: 'High', proof: 'Due Diligence Report', location: 'Office' },
                    { id: 'SGR-VM-02', description: "Ensure all vendors sign a formal service level agreement (SLA).", priority: 'High', riskLevel: 'High', proof: 'Signed SLA', location: 'Office' },
                    { id: 'SGR-VM-03', description: "Verify vendor compliance with food safety (FSSAI) and other legal requirements.", priority: 'High', riskLevel: 'High', proof: 'Compliance Certificates', location: 'Office' },
                    { id: 'SGR-VM-04', description: "Set up vendors in the accounting system with correct payment terms.", priority: 'High', riskLevel: 'Medium', proof: 'System Screenshot', location: 'Finance' },
                    { id: 'SGR-VM-05', description: "Track vendor performance against SLAs quarterly.", priority: 'High', riskLevel: 'High', proof: 'Performance Report', location: 'Office' },
                    { id: 'SGR-VM-06', description: "Maintain a central database of all vendor contracts and documents.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Database', location: 'System' },
                    { id: 'SGR-VM-07', description: "Audit vendor invoices for accuracy before payment.", priority: 'High', riskLevel: 'High', proof: 'Invoice Audit Log', location: 'Finance' },
                    { id: 'SGR-VM-08', description: "Have a clear process for resolving disputes with vendors.", priority: 'High', riskLevel: 'High', proof: 'Dispute Resolution Policy', location: 'Office' },
                    { id: 'SGR-VM-09', description: "Regularly benchmark vendor pricing against the market.", priority: 'High', riskLevel: 'Medium', proof: 'Benchmarking Report', location: 'Office' },
                    { id: 'SGR-VM-10', description: "Plan for alternative suppliers for critical product categories.", priority: 'High', riskLevel: 'High', proof: 'Contingency Plan', location: 'Office' }
                ]
            },
            {
                title: "Bakery & Fresh Food Production",
                department: "Bakery/Production",
                frequency: "Daily",
                role: "Head Baker",
                icon: <CakeSlice />,
                summary: "Ensure quality, consistency, and safety in your in-store bakery or fresh food production unit with this comprehensive daily checklist.",
                tasks: [
                    { id: 'SGR-BFP-01', description: "Verify all ingredients meet quality standards and are within expiry.", priority: 'High', riskLevel: 'High', proof: 'Ingredient Inspection Log', location: 'Production Area' },
                    { id: 'SGR-BFP-02', description: "Follow standardized recipes for all products to ensure consistency.", priority: 'High', riskLevel: 'Medium', proof: 'Recipe Adherence Check', location: 'Production Area' },
                    { id: 'SGR-BFP-03', description: "Calibrate ovens, mixers, and other equipment daily.", priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Production Area' },
                    { id: 'SGR-BFP-04', description: "Implement and monitor cleaning and sanitation schedules for all equipment and surfaces.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Production Area' },
                    { id: 'SGR-BFP-05', description: "Log production quantities and track wastage.", priority: 'High', riskLevel: 'Medium', proof: 'Production & Wastage Report', location: 'Office' },
                    { id: 'SGR-BFP-06', description: "Ensure proper allergen management procedures are in place to prevent cross-contamination.", priority: 'High', riskLevel: 'High', proof: 'Allergen Management Plan', location: 'Production Area' },
                    { id: 'SGR-BFP-07', description: "Conduct quality checks on finished products for taste, appearance, and texture.", priority: 'High', riskLevel: 'Medium', proof: 'QC Report', location: 'Production Area' },
                    { id: 'SGR-BFP-08', description: "Ensure all staff are trained in food safety and personal hygiene.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'SGR-BFP-09', description: "Properly label all finished products with ingredients, allergens, and expiry dates.", priority: 'High', riskLevel: 'High', proof: 'Labeling Audit', location: 'Packaging Area' },
                    { id: 'SGR-BFP-10', description: "Manage inventory of raw materials and packaging supplies.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Report', location: 'Storeroom' }
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
        icon: <Building2 />,
        badgeText: "Enterprise Grade",
        bestseller: true,
        whoIsItFor: ["COOs", "Heads of Corporate Real Estate", "Directors of Facilities", "VPs of Administration", "Data Center Managers"],
        sampleItems: [
            { text: "Includes a 'Data Center Cooling & HVAC' checklist aligned with ASHRAE standards.", icon: <Thermometer /> },
            { text: "Implement a 'Redundancy System Testing SOP' for power and data to prevent downtime.", icon: <DatabaseZap /> },
            { text: "Manage high-stakes vendors with a 'Critical Vendor QBR' protocol.", icon: <Users /> },
            { text: "Ensure compliance with ISO 45001, ISO 41001, and the National Building Code (NBC).", icon: <FileCheck /> },
            { text: "Master 'Smart Building & IoT Management' for efficiency.", icon: <Router /> },
        ],
        previewScenario: {
            title: "Averting a Data Center Catastrophe",
            description: "A major IT campus in Bengaluru faced a multi-crore loss when an HVAC unit failed, threatening to overheat a critical data center. This scenario shows how our checklists prevent this.",
            tasks: [
                { id: 'ADMIN-MEP-01', description: "A weekly 'Preventive Maintenance' check identifies a potential fault in a primary HVAC chiller unit during a load test.", sourceChecklist: "MEP & Preventive Maintenance", priority: 'High' },
                { id: 'TSC-01', description: "As the primary unit is taken offline for repair, the 'Redundancy System Testing' SOP ensures a seamless, automatic switch to the backup chiller with no temperature fluctuation.", sourceChecklist: "Critical Systems & Redundancy Testing", priority: 'High' },
                { id: 'IOT-05', description: "Real-time 'IoT Monitoring' alerts confirm that temperatures in the data center remain stable throughout the switchover.", sourceChecklist: "Smart Building & IoT Management", priority: 'High' },
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
                title: "Office Operations & Employee Experience",
                department: "Administration",
                frequency: "Daily",
                role: "Office Manager",
                icon: <Briefcase />,
                summary: "Ensure a seamless and productive work environment with daily checks for cleanliness, supplies, and front desk readiness.",
                tasks: [
                    { id: 'ADMIN-OO-01', description: "Conduct a morning walkthrough to ensure office cleanliness and readiness.", priority: 'High', riskLevel: 'Medium', proof: 'Walkthrough Log', location: 'Entire Office' },
                    { id: 'ADMIN-OO-02', description: "Check and restock pantry and coffee machine supplies.", priority: 'High', riskLevel: 'Low', proof: 'Supply Check Log', location: 'Pantry' },
                    { id: 'ADMIN-OO-03', description: "Verify meeting rooms are clean, tidy, and all equipment is functional.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Room Checklist', location: 'Meeting Rooms' },
                    { id: 'ADMIN-OO-04', description: "Manage mail, couriers, and deliveries.", priority: 'High', riskLevel: 'Medium', proof: 'Courier Log', location: 'Front Desk' },
                    { id: 'ADMIN-OO-05', description: "Handle employee requests for stationery and other office supplies.", priority: 'Medium', riskLevel: 'Low', proof: 'Request Log', location: 'Front Desk' },
                    { id: 'ADMIN-OO-06', description: "Coordinate with housekeeping staff to ensure cleaning schedules are met.", priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Log', location: 'Entire Office' },
                    { id: 'ADMIN-OO-07', description: "Ensure printers and other shared office equipment are operational.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Check Log', location: 'Office' },
                    { id: 'ADMIN-OO-08', description: "Manage access card issuance and revocation for employees and visitors.", priority: 'High', riskLevel: 'High', proof: 'Access Card Log', location: 'Security' },
                    { id: 'ADMIN-OO-09', description: "Oversee the office transportation services, if applicable.", priority: 'High', riskLevel: 'Medium', proof: 'Transport Log', location: 'Transport Desk' },
                    { id: 'ADMIN-OO-10', description: "Gather feedback from employees on office facilities and services.", priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Form', location: 'Office' }
                ]
            },
            {
                title: "Front Desk & Visitor Management",
                department: "Administration/Security",
                frequency: "Ongoing",
                role: "Receptionist",
                icon: <UserCog />,
                summary: "Create a professional first impression and maintain security with a robust system for managing visitors, calls, and access.",
                tasks: [
                    { id: 'ADMIN-FD-01', description: "Register all visitors and issue temporary access cards/badges.", priority: 'High', riskLevel: 'High', proof: 'Visitor Log', location: 'Front Desk' },
                    { id: 'ADMIN-FD-02', description: "Answer and route all incoming calls professionally.", priority: 'High', riskLevel: 'Medium', proof: 'Call Log (if applicable)', location: 'Front Desk' },
                    { id: 'ADMIN-FD-03', description: "Ensure the reception area is always clean and presentable.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Reception' },
                    { id: 'ADMIN-FD-04', description: "Inform employees of their visitor's arrival.", priority: 'High', riskLevel: 'Low', proof: 'Communication Log', location: 'Front Desk' },
                    { id: 'ADMIN-FD-05', description: "Collect and log all access cards from departing visitors.", priority: 'High', riskLevel: 'High', proof: 'Visitor Log Sign-out', location: 'Front Desk' },
                    { id: 'ADMIN-FD-06', description: "Handle incoming and outgoing mail and couriers.", priority: 'High', riskLevel: 'Medium', proof: 'Mail Log', location: 'Front Desk' },
                    { id: 'ADMIN-FD-07', description: "Maintain a directory of employee extensions and contact information.", priority: 'High', riskLevel: 'Low', proof: 'Contact Directory', location: 'Front Desk' },
                    { id: 'ADMIN-FD-08', description: "Assist with booking meeting rooms for employees and visitors.", priority: 'Medium', riskLevel: 'Low', proof: 'Booking System', location: 'Front Desk' },
                    { id: 'ADMIN-FD-09', description: "Be aware of emergency procedures and be the first point of contact during an incident.", priority: 'High', riskLevel: 'High', proof: 'Emergency Training Certificate', location: 'Front Desk' },
                    { id: 'ADMIN-FD-10', description: "Report any security concerns or suspicious activity immediately.", priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Front Desk' }
                ]
            },
            {
                title: "MEP & Preventive Maintenance",
                department: "Facilities/Maintenance",
                frequency: "Weekly/Monthly",
                role: "Maintenance Supervisor",
                icon: <Wrench />,
                summary: "Prevent costly breakdowns and ensure business continuity with a proactive maintenance schedule for all critical Mechanical, Electrical, and Plumbing (MEP) systems.",
                tasks: [
                    { id: 'ADMIN-MEP-01', description: "Perform weekly checks on HVAC systems, including filters and thermostat settings.", priority: 'High', riskLevel: 'High', proof: 'HVAC Log', location: 'MEP Rooms' },
                    { id: 'ADMIN-MEP-02', description: "Test backup generators and UPS systems weekly under load.", priority: 'High', riskLevel: 'High', proof: 'Generator Test Log', location: 'MEP Rooms' },
                    { id: 'ADMIN-MEP-03', description: "Inspect plumbing systems for leaks and check water pressure.", priority: 'High', riskLevel: 'Medium', proof: 'Plumbing Inspection Log', location: 'Restrooms/Pantry' },
                    { id: 'ADMIN-MEP-04', description: "Conduct monthly electrical inspections of panels, wiring, and outlets.", priority: 'High', riskLevel: 'High', proof: 'Electrical Inspection Report', location: 'Electrical Rooms' },
                    { id: 'ADMIN-MEP-05', description: "Maintain a log of all maintenance activities and service records for all equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Master Maintenance Log', location: 'Facilities Office' },
                    { id: 'ADMIN-MEP-06', description: "Check fire suppression systems (sprinklers, hydrants) as per schedule.", priority: 'High', riskLevel: 'High', proof: 'Fire System Log', location: 'MEP Rooms' },
                    { id: 'ADMIN-MEP-07', description: "Service and clean water tanks and pumps.", priority: 'High', riskLevel: 'Medium', proof: 'Water System Log', location: 'Water Tank Area' },
                    { id: 'ADMIN-MEP-08', description: "Inspect and maintain elevators and escalators.", priority: 'High', riskLevel: 'High', proof: 'Lift Maintenance Log', location: 'Elevator Shafts' },
                    { id: 'ADMIN-MEP-09', description: "Manage vendor contracts for all MEP services.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Contracts', location: 'Facilities Office' },
                    { id: 'ADMIN-MEP-10', description: "Track spare parts inventory for critical equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Spares Inventory', location: 'Storeroom' }
                ]
            },
            {
                title: "Fire & Life Safety Compliance",
                department: "EHS/Security",
                frequency: "Monthly",
                role: "Safety Officer",
                icon: <Siren />,
                summary: "Ensure your facility is compliant with fire safety codes and prepared for any emergency with rigorous checks of all fire prevention and response systems.",
                tasks: [
                    { id: 'ADMIN-FLS-01', description: "Inspect all fire extinguishers for expiry, pressure, and accessibility.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Log', location: 'Entire Office' },
                    { id: 'ADMIN-FLS-02', description: "Test fire alarms, smoke detectors, and sprinkler systems.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Entire Office' },
                    { id: 'ADMIN-FLS-03', description: "Ensure all emergency exit routes and doors are unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Exit Path Audit', location: 'Entire Office' },
                    { id: 'ADMIN-FLS-04', description: "Conduct quarterly fire evacuation drills and log participation.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Entire Office' },
                    { id: 'ADMIN-FLS-05', description: "Verify that all fire safety certificates and NOCs are current.", priority: 'High', riskLevel: 'High', proof: 'Compliance File', location: 'Admin Office' },
                    { id: 'ADMIN-FLS-06', description: "Check emergency lighting and signage.", priority: 'High', riskLevel: 'High', proof: 'Emergency Light Log', location: 'Entire Office' },
                    { id: 'ADMIN-FLS-07', description: "Ensure first aid kits are fully stocked and accessible.", priority: 'High', riskLevel: 'High', proof: 'First Aid Kit Log', location: 'Office' },
                    { id: 'ADMIN-FLS-08', description: "Train staff on fire safety and evacuation procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'ADMIN-FLS-09', description: "Maintain a log of all fire incidents and near misses.", priority: 'High', riskLevel: 'High', proof: 'Incident Log', location: 'Safety Office' },
                    { id: 'ADMIN-FLS-10', description: "Coordinate with local fire department for inspections and drills.", priority: 'Medium', riskLevel: 'Medium', proof: 'Communication Log', location: 'Safety Office' }
                ]
            },
             {
                title: "Energy Management & Sustainability (ESG)",
                department: "Facilities",
                frequency: "Monthly",
                role: "Facility Manager",
                icon: <Leaf />,
                summary: "Reduce operational costs and improve your company's ESG score with a checklist focused on optimizing energy and water consumption and managing waste.",
                tasks: [
                    { id: 'ADMIN-ESG-01', description: "Audit energy consumption data and identify areas for reduction.", priority: 'High', riskLevel: 'Medium', proof: 'Energy Audit Report', location: 'Office' },
                    { id: 'ADMIN-ESG-02', description: "Implement and monitor a waste segregation and recycling program.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Log', location: 'Waste Area' },
                    { id: 'ADMIN-ESG-03', description: "Check for water leakages and promote water conservation.", priority: 'High', riskLevel: 'Medium', proof: 'Water Audit', location: 'Restrooms/Pantry' },
                    { id: 'ADMIN-ESG-04', description: "Promote sustainable procurement of office supplies.", priority: 'Medium', riskLevel: 'Low', proof: 'Procurement Policy', location: 'Office' },
                    { id: 'ADMIN-ESG-05', description: "Track and report on sustainability KPIs.", priority: 'High', riskLevel: 'Medium', proof: 'Sustainability Report', location: 'Office' },
                    { id: 'ADMIN-ESG-06', description: "Optimize HVAC schedules to match office occupancy.", priority: 'High', riskLevel: 'Medium', proof: 'HVAC Schedule', location: 'Facilities Office' },
                    { id: 'ADMIN-ESG-07', description: "Promote energy-saving behaviors among employees (e.g., turning off lights and monitors).", priority: 'Medium', riskLevel: 'Low', proof: 'Awareness Campaign', location: 'Office' },
                    { id: 'ADMIN-ESG-08', description: "Explore options for renewable energy sources.", priority: 'Low', riskLevel: 'Low', proof: 'Feasibility Study', location: 'Office' },
                    { id: 'ADMIN-ESG-09', description: "Participate in e-waste recycling programs.", priority: 'High', riskLevel: 'Medium', proof: 'E-waste Certificate', location: 'Office' },
                    { id: 'ADMIN-ESG-10', description: "Set annual targets for reducing carbon footprint.", priority: 'High', riskLevel: 'Medium', proof: 'Target Document', location: 'Office' }
                ]
            },
            {
                title: "Critical Systems & Redundancy Testing",
                department: "IT/Facilities",
                frequency: "Quarterly",
                role: "Data Center Manager",
                icon: <DatabaseZap />,
                summary: "Ensure 100% uptime for critical infrastructure. This checklist validates the functionality of your backup power, cooling, and data redundancy systems through rigorous testing.",
                tasks: [
                    { id: 'TSC-01', description: "Simulate a power outage to test the automatic transfer switch (ATS) and UPS functionality.", priority: 'High', riskLevel: 'High', proof: 'Power Failure Drill Report', location: 'Data Center' },
                    { id: 'TSC-02', description: "Run backup generators under full load for a minimum of one hour.", priority: 'High', riskLevel: 'High', proof: 'Generator Load Test Log', location: 'Generator Room' },
                    { id: 'TSC-03', description: "Test redundant HVAC units by simulating a failure of the primary unit.", priority: 'High', riskLevel: 'High', proof: 'HVAC Failover Test Report', location: 'Data Center' },
                    { id: 'TSC-04', description: "Verify data replication and failover for critical servers and databases.", priority: 'High', riskLevel: 'High', proof: 'Data Failover Test Log', location: 'IT Office' },
                    { id: 'TSC-05', description: "Check and log fuel levels for backup generators.", priority: 'High', riskLevel: 'High', proof: 'Fuel Level Log', location: 'Generator Room' },
                    { id: 'TSC-06', description: "Inspect and test fire suppression systems in the data center (e.g., FM-200, Novec 1230).", priority: 'High', riskLevel: 'High', proof: 'Suppression System Test Report', location: 'Data Center' },
                    { id: 'TSC-07', description: "Review and update the disaster recovery (DR) plan.", priority: 'High', riskLevel: 'High', proof: 'Updated DR Plan', location: 'Office' },
                    { id: 'TSC-08', description: "Test the functionality of environmental monitoring sensors (temperature, humidity).", priority: 'High', riskLevel: 'High', proof: 'Sensor Test Log', location: 'Data Center' },
                    { id: 'TSC-09', description: "Ensure the emergency power off (EPO) button is clearly marked and personnel are trained on its use.", priority: 'High', riskLevel: 'High', proof: 'EPO Drill Log', location: 'Data Center' },
                    { id: 'TSC-10', description: "Maintain detailed records of all redundancy tests for compliance and auditing.", priority: 'High', riskLevel: 'Medium', proof: 'Test Record Archive', location: 'Office' }
                ]
            },
            {
                title: "Smart Building & IoT Management",
                department: "Facilities/IT",
                frequency: "Monthly",
                role: "Smart Building Manager",
                icon: <Router />,
                summary: "Optimize your building's performance by managing its network of IoT devices, from smart lighting and HVAC to security sensors and access control systems.",
                tasks: [
                    { id: 'IOT-01', description: "Audit the IoT network for any unauthorized or rogue devices.", priority: 'High', riskLevel: 'High', proof: 'Network Scan Report', location: 'IT Office' },
                    { id: 'IOT-02', description: "Apply latest security patches and firmware updates to all IoT devices.", priority: 'High', riskLevel: 'High', proof: 'Patch Management Log', location: 'IT Office' },
                    { id: 'IOT-03', description: "Review access logs for all smart building systems.", priority: 'High', riskLevel: 'High', proof: 'Access Log Review Report', location: 'IT Office' },
                    { id: 'IOT-04', description: "Analyze data from sensors (e.g., occupancy, temperature) to optimize energy consumption.", priority: 'High', riskLevel: 'Medium', proof: 'Energy Optimization Report', location: 'Office' },
                    { id: 'IOT-05', description: "Test the functionality of automated systems (e.g., smart lighting schedules, automated blinds).", priority: 'High', riskLevel: 'Medium', proof: 'System Functionality Test Log', location: 'Building-wide' },
                    { id: 'IOT-06', description: "Ensure all IoT devices are on a separate, secured network segment.", priority: 'High', riskLevel: 'High', proof: 'Network Architecture Diagram', location: 'IT Office' },
                    { id: 'IOT-07', description: "Maintain an inventory of all IoT devices and their purpose.", priority: 'High', riskLevel: 'Medium', proof: 'IoT Device Inventory', location: 'System' },
                    { id: 'IOT-08', description: "Change default passwords on all IoT devices upon installation.", priority: 'High', riskLevel: 'High', proof: 'Password Policy', location: 'IT Office' },
                    { id: 'IOT-09', description: "Have a plan for decommissioning and securely disposing of old IoT devices.", priority: 'High', riskLevel: 'Medium', proof: 'Decommissioning Plan', location: 'Office' },
                    { id: 'IOT-10', description: "Monitor the health and connectivity of all critical IoT sensors.", priority: 'High', riskLevel: 'High', proof: 'Device Health Dashboard', location: 'System' }
                ]
            },
            {
                title: "Incident Reporting & Management",
                department: "Security/Facilities",
                frequency: "Per Incident",
                role: "Duty Manager",
                icon: <FileWarning />,
                summary: "A systematic approach to managing and learning from any facility-related incident, from a safety breach to a major equipment failure.",
                tasks: [
                    { id: 'INC-REP-01', description: "Log the incident immediately with date, time, location, and a detailed description.", priority: 'High', riskLevel: 'High', proof: 'Incident Report Form', location: 'Office' },
                    { id: 'INC-REP-02', description: "Take immediate steps to secure the area and ensure there is no ongoing danger.", priority: 'High', riskLevel: 'High', proof: 'Action Log', location: 'Incident Site' },
                    { id: 'INC-REP-03', description: "Notify all relevant stakeholders (e.g., Head of Security, Facility Head, HR).", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Office' },
                    { id: 'INC-REP-04', description: "Collect evidence, including photos, CCTV footage, and witness statements.", priority: 'High', riskLevel: 'High', proof: 'Evidence Folder', location: 'Office' },
                    { id: 'INC-REP-05', description: "Conduct a Root Cause Analysis (RCA) to determine why the incident occurred.", priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'Office' },
                    { id: 'INC-REP-06', description: "Develop and assign Corrective and Preventive Actions (CAPAs) to prevent recurrence.", priority: 'High', riskLevel: 'High', proof: 'CAPA Plan', location: 'Office' },
                    { id: 'INC-REP-07', description: "Track the implementation and completion of all CAPAs.", priority: 'High', riskLevel: 'High', proof: 'CAPA Tracker', location: 'Office' },
                    { id: 'INC-REP-08', description: "Share lessons learned from the incident with all relevant staff.", priority: 'High', riskLevel: 'Medium', proof: 'Safety Bulletin/Meeting', location: 'Office' },
                    { id: 'INC-REP-09', description: "File any necessary reports with external bodies (e.g., insurance, regulatory agencies).", priority: 'High', riskLevel: 'High', proof: 'Submission Receipt', location: 'Office' },
                    { id: 'INC-REP-10', description: "Review incident trends quarterly to identify systemic risks.", priority: 'High', riskLevel: 'High', proof: 'Trend Analysis Report', location: 'Office' }
                ]
            },
            {
                title: "Mailroom & Courier Management",
                department: "Administration",
                frequency: "Daily",
                role: "Mailroom Clerk",
                icon: <Truck />,
                summary: "Ensure secure and efficient handling of all incoming and outgoing mail and packages for a large corporate campus.",
                tasks: [
                    { id: 'MAIL-01', description: "Scan all incoming packages for security threats before accepting them.", priority: 'High', riskLevel: 'High', proof: 'X-ray/Scanner Log', location: 'Mailroom' },
                    { id: 'MAIL-02', description: "Log every incoming and outgoing package into a centralized tracking system.", priority: 'High', riskLevel: 'Medium', proof: 'Tracking System Log', location: 'System' },
                    { id: 'MAIL-03', description: "Sort mail and packages by department or individual recipient.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Mailroom' },
                    { id: 'MAIL-04', description: "Conduct timely internal delivery runs to all departments.", priority: 'High', riskLevel: 'Medium', proof: 'Delivery Route Log', location: 'Building-wide' },
                    { id: 'MAIL-05', description: "Obtain a signature for all high-value or confidential deliveries.", priority: 'High', riskLevel: 'High', proof: 'Signed Delivery Receipt', location: 'Recipient Desk' },
                    { id: 'MAIL-06', description: "Manage relationships and accounts with multiple courier vendors.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Meeting Minutes', location: 'Office' },
                    { id: 'MAIL-07', description: "Process outgoing mail, including weighing, stamping, and scheduling pickups.", priority: 'High', riskLevel: 'Medium', proof: 'Outgoing Mail Log', location: 'Mailroom' },
                    { id: 'MAIL-08', description: "Handle returned or undeliverable mail according to a defined procedure.", priority: 'High', riskLevel: 'Medium', proof: 'Returned Mail Log', location: 'Mailroom' },
                    { id: 'MAIL-09', description: "Ensure the mailroom is secure and access is restricted to authorized personnel.", priority: 'High', riskLevel: 'High', proof: 'Access Control Log', location: 'Mailroom' },
                    { id: 'MAIL-10', description: "Reconcile courier invoices against shipping logs.", priority: 'High', riskLevel: 'High', proof: 'Invoice Reconciliation Report', location: 'Finance' }
                ]
            },
            {
                title: "Housekeeping & Janitorial Services Audit",
                department: "Facilities",
                frequency: "Weekly",
                role: "Housekeeping Supervisor",
                icon: <Sparkles />,
                summary: "Maintain a pristine and hygienic corporate environment by auditing the performance of your housekeeping vendor against a defined SLA.",
                tasks: [
                    { id: 'HK-AUDIT-01', description: "Conduct a random inspection of different areas (restrooms, pantry, workstations) against a cleaning checklist.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Scorecard', location: 'Building-wide' },
                    { id: 'HK-AUDIT-02', description: "Verify that cleaning chemicals are being used correctly and stored safely.", priority: 'High', riskLevel: 'High', proof: 'Chemical Storage Audit', location: 'Janitor Closet' },
                    { id: 'HK-AUDIT-03', description: "Check that all housekeeping staff are in proper uniform and using appropriate PPE.", priority: 'High', riskLevel: 'Medium', proof: 'PPE Audit', location: 'Building-wide' },
                    { id: 'HK-AUDIT-04', description: "Review attendance records of the vendor's staff against the contractual requirement.", priority: 'High', riskLevel: 'High', proof: 'Attendance Log', location: 'Vendor File' },
                    { id: 'HK-AUDIT-05', description: "Audit the stock levels of housekeeping supplies (e.g., soap, paper towels).", priority: 'High', riskLevel: 'Medium', proof: 'Supply Inventory', location: 'Storeroom' },
                    { id: 'HK-AUDIT-06', description: "Ensure specialized cleaning tasks (e.g., window washing, floor polishing) are being done as per schedule.", priority: 'High', riskLevel: 'Medium', proof: 'Specialized Cleaning Schedule', location: 'Office' },
                    { id: 'HK-AUDIT-07', description: "Collect feedback on housekeeping services from employees.", priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Survey', location: 'Office' },
                    { id: 'HK-AUDIT-08', description: "Hold a weekly review meeting with the housekeeping vendor's supervisor.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Office' },
                    { id: 'HK-AUDIT-09', description: "Document any non-compliance or performance issues and share with the vendor for corrective action.", priority: 'High', riskLevel: 'High', proof: 'Non-Compliance Report', location: 'Office' },
                    { id: 'HK-AUDIT-10', description: "Verify vendor invoices against attendance and service records.", priority: 'High', riskLevel: 'High', proof: 'Invoice Verification', location: 'Finance' }
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
        category: "Corporate & Tech",
        description: "An essential toolkit for founders and managers to embed basic legal and compliance checks into core business operations, reducing risk without needing a law degree.",
        icon: <FileLock />,
        whoIsItFor: ["Founders & CEOs", "HR Managers", "Operations Heads", "Non-lawyer Managers", "Directors"],
        sampleItems: [
            { text: "Legally sound 'New Employee Onboarding' checklist to prevent future disputes.", icon: <Briefcase /> },
            { text: "A simple 'Vendor Contract Review' guide for non-lawyers.", icon: <FileCheck /> },
            { text: "Ensure your 'Website Legal Health' (Privacy Policy, ToS) is up to date.", icon: <HeartPulse /> },
            { text: "Framework for 'Disciplinary Actions' that minimizes legal exposure.", icon: <FileWarning /> },
            { text: "Manage intellectual property with the 'IP & Trademark' checklist.", icon: <BrainCircuit /> },
            { text: "Run effective 'Board Meeting Preparation' for better governance.", icon: <BriefcaseBusiness /> },
        ],
        checklists: [
            {
                title: "New Employee Onboarding (HR & Legal)",
                department: "HR",
                frequency: "Per Hire",
                role: "HR Manager",
                icon: <Briefcase />,
                summary: "A legally-focused checklist to ensure every new hire is onboarded correctly, minimizing future compliance risks and employment disputes.",
                tasks: [
                    { id: 'HR-ONBOARD-01', description: "Ensure signed offer letter and employment contract are on file before start date.", priority: 'High', riskLevel: 'High', proof: 'Signed Documents', location: 'Employee File' },
                    { id: 'HR-ONBOARD-02', description: "Verify all statutory forms (PF, ESI, tax declarations) are completed and filed.", priority: 'High', riskLevel: 'High', proof: 'Filed Forms', location: 'Employee File' },
                    { id: 'HR-ONBOARD-03', description: "Confirm employee has signed acknowledgment of the Company Handbook, Code of Conduct, and IT Policy.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Acknowledgment', location: 'Employee File' },
                    { id: 'HR-ONBOARD-04', description: "Conduct and document background and reference checks as per policy.", priority: 'High', riskLevel: 'High', proof: 'Background Check Report', location: 'Employee File' },
                    { id: 'HR-ONBOARD-05', description: "Issue and log all company assets (laptop, access cards) with a signed issuance form.", priority: 'High', riskLevel: 'Medium', proof: 'Asset Form', location: 'IT/Admin File' },
                    { id: 'HR-ONBOARD-06', description: "Add employee to payroll and insurance schemes.", priority: 'High', riskLevel: 'Medium', proof: 'Payroll Confirmation', location: 'HR' },
                    { id: 'HR-ONBOARD-07', description: "Provide mandatory POSH (Prevention of Sexual Harassment) training.", priority: 'High', riskLevel: 'High', proof: 'Training Certificate', location: 'HR' },
                    { id: 'HR-ONBOARD-08', description: "Ensure Non-Disclosure Agreement (NDA) is signed.", priority: 'High', riskLevel: 'High', proof: 'Signed NDA', location: 'Employee File' },
                    { id: 'HR-ONBOARD-09', description: "Create official email and system accounts.", priority: 'High', riskLevel: 'Medium', proof: 'IT Log', location: 'IT' },
                    { id: 'HR-ONBOARD-10', description: "Schedule a 30-day check-in to review progress and address concerns.", priority: 'Medium', riskLevel: 'Low', proof: 'Calendar Invite', location: 'HR' }
                ]
            },
            {
                title: "Vendor Contract Review for Non-Lawyers",
                department: "Procurement/Any",
                frequency: "Per Contract",
                role: "Manager",
                icon: <FileCheck />,
                summary: "Empower your managers to spot critical risks in vendor agreements before they escalate to legal. This checklist covers key clauses like liability, termination, and data privacy.",
                tasks: [
                    { id: 'LEGAL-VEND-01', description: "Identify the legal names of both parties. Are they correct?", priority: 'High', riskLevel: 'Medium', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-02', description: "Is the 'Scope of Work' clearly and precisely defined? Avoid vague language.", priority: 'High', riskLevel: 'High', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-03', description: "Check the 'Termination' clause. Can we terminate for convenience, or only for cause? What is the notice period?", priority: 'High', riskLevel: 'High', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-04', description: "Review the 'Limitation of Liability' clause. Is the vendor's liability capped at an unreasonably low amount (e.g., only 3 months of fees)?", priority: 'High', riskLevel: 'High', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-05', description: "Does the vendor have adequate 'Data Privacy' and 'Confidentiality' obligations, especially if they handle customer or employee data?", priority: 'High', riskLevel: 'High', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-06', description: "What are the payment terms? Are there penalties for late payment?", priority: 'High', riskLevel: 'Medium', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-07', description: "Is there a clear 'Governing Law' and 'Jurisdiction' clause?", priority: 'High', riskLevel: 'Medium', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-08', description: "Does the contract include an 'Indemnity' clause? Who indemnifies whom?", priority: 'High', riskLevel: 'High', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-09', description: "Is there an 'Intellectual Property' clause? Who owns what is created?", priority: 'High', riskLevel: 'High', proof: 'Contract Draft', location: 'Contract' },
                    { id: 'LEGAL-VEND-10', description: "Flag any clauses that seem unfair or one-sided for legal review.", priority: 'High', riskLevel: 'High', proof: 'Review Notes', location: 'Contract' }
                ]
            },
            {
                title: "Employee Disciplinary Actions",
                department: "HR/Management",
                frequency: "Per Incident",
                role: "Manager/HR Head",
                icon: <FileWarning />,
                summary: "A step-by-step guide to conducting disciplinary actions in a fair, consistent, and legally defensible manner, from verbal warnings to Performance Improvement Plans (PIPs).",
                tasks: [
                    { id: 'HR-DISC-01', description: "Document the specific, objective instances of underperformance or misconduct with dates, times, and measurable impact.", priority: 'High', riskLevel: 'High', proof: 'Incident Documentation', location: 'Manager File' },
                    { id: 'HR-DISC-02', description: "For recurring issues, issue a formal Performance Improvement Plan (PIP) with clear, achievable goals and a defined timeline.", priority: 'High', riskLevel: 'High', proof: 'PIP Document', location: 'Employee File' },
                    { id: 'HR-DISC-03', description: "Conduct a private meeting with the employee (and an HR representative) to discuss the issue and the PIP.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Meeting Room' },
                    { id: 'HR-DISC-04', description: "Ensure the entire process is documented and stored in the employee's official file.", priority: 'High', riskLevel: 'High', proof: 'Complete File', location: 'Employee File' },
                    { id: 'HR-DISC-05', description: "Follow up regularly during the PIP period to provide feedback and support.", priority: 'High', riskLevel: 'Medium', proof: 'Follow-up Emails/Meetings', location: 'Manager File' },
                    { id: 'HR-DISC-06', description: "Issue a formal written warning if performance does not improve.", priority: 'High', riskLevel: 'High', proof: 'Written Warning', location: 'Employee File' },
                    { id: 'HR-DISC-07', description: "Ensure all actions are consistent with company policy and past practices.", priority: 'High', riskLevel: 'High', proof: 'Policy Review', location: 'HR' },
                    { id: 'HR-DISC-08', description: "Give the employee an opportunity to respond to the allegations.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Meeting Room' },
                    { id: 'HR-DISC-09', description: "Consult with legal counsel before any termination decision.", priority: 'High', riskLevel: 'High', proof: 'Legal Consultation Log', location: 'HR' },
                    { id: 'HR-DISC-10', description: "Prepare a final settlement and release agreement if termination is the outcome.", priority: 'High', riskLevel: 'High', proof: 'Settlement Agreement', location: 'HR' }
                ]
            },
            {
                title: "Website Legal Health Check",
                department: "Marketing/Legal",
                frequency: "Quarterly",
                role: "Marketing Manager",
                icon: <HeartPulse />,
                summary: "A quick audit to ensure your public-facing website meets basic legal requirements, helping you avoid data privacy fines and build user trust.",
                tasks: [
                    { id: 'LEGAL-WEB-01', description: "Is your 'Privacy Policy' link clearly visible in the website footer?", priority: 'High', riskLevel: 'High', proof: 'Website Screenshot', location: 'Website' },
                    { id: 'LEGAL-WEB-02', description: "Is your 'Terms of Service' link clearly visible in the website footer?", priority: 'High', riskLevel: 'High', proof: 'Website Screenshot', location: 'Website' },
                    { id: 'LEGAL-WEB-03', description: "If you use cookies, do you have a cookie consent banner that allows users to accept or decline?", priority: 'High', riskLevel: 'High', proof: 'Website Screenshot', location: 'Website' },
                    { id: 'LEGAL-WEB-04', description: "Does your Privacy Policy accurately reflect the data you collect (e.g., through contact forms, analytics)?", priority: 'High', riskLevel: 'High', proof: 'Policy vs. Practice Review', location: 'Website' },
                    { id: 'LEGAL-WEB-05', description: "Are all marketing email sign-up forms compliant with anti-spam laws (e.g., include an 'unsubscribe' option)?", priority: 'High', riskLevel: 'Medium', proof: 'Email Form Review', location: 'Website' },
                    { id: 'LEGAL-WEB-06', description: "Are testimonials and endorsements compliant with advertising standards?", priority: 'Medium', riskLevel: 'Medium', proof: 'Testimonial Review', location: 'Website' },
                    { id: 'LEGAL-WEB-07', description: "Is your company's legal name and registered address mentioned in the terms or contact page?", priority: 'High', riskLevel: 'Medium', proof: 'Website Audit', location: 'Website' },
                    { id: 'LEGAL-WEB-08', description: "Do you have a clear process for handling copyright (DMCA) takedown notices?", priority: 'Medium', riskLevel: 'Medium', proof: 'DMCA Policy', location: 'Website' },
                    { id: 'LEGAL-WEB-09', description: "Is your website accessible to people with disabilities (WCAG compliance)?", priority: 'Medium', riskLevel: 'Medium', proof: 'Accessibility Scan', location: 'Website' },
                    { id: 'LEGAL-WEB-10', description: "Review and update all legal policies at least annually.", priority: 'High', riskLevel: 'High', proof: 'Policy Review Log', location: 'Legal' }
                ]
            },
            {
                title: "IP & Trademark Management",
                department: "Legal/Marketing",
                frequency: "Quarterly",
                role: "Marketing Head",
                icon: <BrainCircuit />,
                summary: "Protect your most valuable assets. This checklist helps you track your trademarks, monitor for infringement, and ensure all creative work is properly owned by the company.",
                tasks: [
                    { id: 'LEGAL-IP-01', description: "Maintain a central register of all company trademarks, copyrights, and patents.", priority: 'High', riskLevel: 'High', proof: 'IP Register', location: 'Legal Files' },
                    { id: 'LEGAL-IP-02', description: "Track all trademark renewal deadlines.", priority: 'High', riskLevel: 'High', proof: 'Renewal Calendar', location: 'Legal Files' },
                    { id: 'LEGAL-IP-03', description: "Ensure all new marketing materials use the correct trademark symbols (™ or ®).", priority: 'High', riskLevel: 'Medium', proof: 'Marketing Material Audit', location: 'Marketing' },
                    { id: 'LEGAL-IP-04', description: "Conduct quarterly searches for potential infringement of your trademarks online.", priority: 'High', riskLevel: 'Medium', proof: 'Infringement Search Report', location: 'Legal' },
                    { id: 'LEGAL-IP-05', description: "Ensure all employee and contractor agreements have clear IP assignment clauses.", priority: 'High', riskLevel: 'High', proof: 'Contract Template', location: 'HR/Legal' },
                    { id: 'LEGAL-IP-06', description: "Document the creation process for all original creative works (e.g., software, designs).", priority: 'High', riskLevel: 'Medium', proof: 'Creation Log', location: 'R&D/Marketing' },
                    { id: 'LEGAL-IP-07', description: "Have a clear policy for the use of open-source software.", priority: 'High', riskLevel: 'High', proof: 'Open Source Policy', location: 'IT/Legal' },
                    { id: 'LEGAL-IP-08', description: "Register copyrights for all significant original works.", priority: 'High', riskLevel: 'Medium', proof: 'Copyright Registration Certificates', location: 'Legal Files' },
                    { id: 'LEGAL-IP-09', description: "Ensure NDAs are in place before discussing confidential information with third parties.", priority: 'High', riskLevel: 'High', proof: 'Signed NDAs', location: 'Legal Files' },
                    { id: 'LEGAL-IP-10', description: "Conduct an annual IP audit to identify and protect all intellectual property assets.", priority: 'High', riskLevel: 'High', proof: 'Annual IP Audit Report', location: 'Legal' }
                ]
            },
            {
                title: "Board Meeting Preparation",
                department: "Management",
                frequency: "Per Meeting",
                role: "CEO/Founder",
                icon: <BriefcaseBusiness />,
                summary: "Run efficient and productive board meetings with a structured preparation checklist that ensures all materials are ready and directors are well-informed.",
                tasks: [
                    { id: 'LEGAL-BM-01', description: "Finalize the meeting agenda in consultation with the board chairman.", priority: 'High', riskLevel: 'Medium', proof: 'Final Agenda', location: 'Office' },
                    { id: 'LEGAL-BM-02', description: "Distribute the board pack (agenda, previous minutes, reports) at least one week in advance.", priority: 'High', riskLevel: 'High', proof: 'Distribution Email', location: 'Office' },
                    { id: 'LEGAL-BM-03', description: "Ensure all financial reports and performance dashboards are accurate and up-to-date.", priority: 'High', riskLevel: 'High', proof: 'Financial Reports', location: 'Finance' },
                    { id: 'LEGAL-BM-04', description: "Prepare a concise presentation on key business updates and strategic decisions needed.", priority: 'High', riskLevel: 'Medium', proof: 'Presentation Deck', location: 'Office' },
                    { id: 'LEGAL-BM-05', description: "Draft minutes of the meeting and circulate for comments within 48 hours.", priority: 'High', riskLevel: 'Medium', proof: 'Draft Minutes', location: 'Office' },
                    { id: 'LEGAL-BM-06', description: "Track action items from previous meetings to report on their status.", priority: 'High', riskLevel: 'High', proof: 'Action Tracker', location: 'Office' },
                    { id: 'LEGAL-BM-07', description: "Confirm attendance and logistics (venue, video conferencing) for all directors.", priority: 'High', riskLevel: 'Low', proof: 'Confirmation Log', location: 'Office' },
                    { id: 'LEGAL-BM-08', description: "Ensure compliance with all legal requirements for holding a board meeting.", priority: 'High', riskLevel: 'High', proof: 'Compliance Checklist', location: 'Legal' },
                    { id: 'LEGAL-BM-09', description: "Prepare a formal resolution for any major decisions to be voted on.", priority: 'High', riskLevel: 'High', proof: 'Draft Resolutions', location: 'Legal' },
                    { id: 'LEGAL-BM-10', description: "File the finalized minutes in the company's statutory records.", priority: 'High', riskLevel: 'High', proof: 'Statutory Register', location: 'Legal' }
                ]
            },
            {
                title: "Data Backup & Recovery Drill",
                department: "IT",
                frequency: "Quarterly",
                role: "IT Manager",
                icon: <DatabaseZap />,
                summary: "Ensure business continuity by regularly testing your data backup and recovery procedures, so you're prepared for a real disaster.",
                tasks: [
                    { id: 'LEGAL-DR-01', description: "Verify that automated backups for all critical systems are completing successfully.", priority: 'High', riskLevel: 'High', proof: 'Backup Logs', location: 'System' },
                    { id: 'LEGAL-DR-02', description: "Conduct a quarterly test restore of a sample dataset to a separate environment.", priority: 'High', riskLevel: 'High', proof: 'Restore Test Report', location: 'IT Office' },
                    { id: 'LEGAL-DR-03', description: "Check the integrity of the restored data.", priority: 'High', riskLevel: 'High', proof: 'Data Integrity Check Log', location: 'IT Office' },
                    { id: 'LEGAL-DR-04', description: "Time the recovery process to ensure it meets the Recovery Time Objective (RTO).", priority: 'High', riskLevel: 'High', proof: 'Timing Log', location: 'IT Office' },
                    { id: 'LEGAL-DR-05', description: "Review and update the disaster recovery (DR) plan document.", priority: 'High', riskLevel: 'High', proof: 'Updated DR Plan', location: 'Office' },
                    { id: 'LEGAL-DR-06', description: "Ensure backup media is stored in a secure, off-site location.", priority: 'High', riskLevel: 'High', proof: 'Off-site Storage Log', location: 'Vendor' },
                    { id: 'LEGAL-DR-07', description: "Train the IT team on the disaster recovery procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'LEGAL-DR-08', description: "Verify that all critical software licenses and installation media are available for a recovery.", priority: 'High', riskLevel: 'High', proof: 'License Inventory', location: 'Office' },
                    { id: 'LEGAL-DR-09', description: "Test the functionality of critical applications after a test restore.", priority: 'High', riskLevel: 'High', proof: 'Application Test Log', location: 'IT Office' },
                    { id: 'LEGAL-DR-10', description: "Document the results of the DR drill and any lessons learned.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Office' }
                ]
            },
            {
                title: "Statutory & Tax Compliance Calendar",
                department: "Finance/Legal",
                frequency: "Monthly",
                role: "Finance Controller",
                icon: <CalendarDays />,
                summary: "Never miss a deadline. This checklist helps you track and manage all statutory and tax filing deadlines (GST, TDS, PF, ESI, etc.) to avoid penalties.",
                tasks: [
                    { id: 'LEGAL-TAX-01', description: "Verify timely filing of monthly/quarterly GST returns.", priority: 'High', riskLevel: 'High', proof: 'GST Filing Receipt', location: 'Finance' },
                    { id: 'LEGAL-TAX-02', description: "Ensure TDS is deducted and deposited on time.", priority: 'High', riskLevel: 'High', proof: 'TDS Challan', location: 'Finance' },
                    { id: 'LEGAL-TAX-03', description: "File quarterly TDS returns.", priority: 'High', riskLevel: 'High', proof: 'TDS Return Filing', location: 'Finance' },
                    { id: 'LEGAL-TAX-04', description: "Ensure timely deposit of employee and employer contributions for PF and ESI.", priority: 'High', riskLevel: 'High', proof: 'PF/ESI Challans', location: 'HR/Finance' },
                    { id: 'LEGAL-TAX-05', description: "File annual income tax returns for the company.", priority: 'High', riskLevel: 'High', proof: 'ITR Filing Receipt', location: 'Finance' },
                    { id: 'LEGAL-TAX-06', description: "File all required annual forms with the Registrar of Companies (ROC).", priority: 'High', riskLevel: 'High', proof: 'ROC Filing Forms', location: 'Legal/CS' },
                    { id: 'LEGAL-TAX-07', description: "Maintain a calendar of all statutory due dates.", priority: 'High', riskLevel: 'Medium', proof: 'Compliance Calendar', location: 'Office' },
                    { id: 'LEGAL-TAX-08', description: "Reconcile tax payments with accounting records.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Statement', location: 'Finance' },
                    { id: 'LEGAL-TAX-09', description: "Address any notices or queries from tax authorities promptly.", priority: 'High', riskLevel: 'High', proof: 'Notice Response File', location: 'Finance/Legal' },
                    { id: 'LEGAL-TAX-10', description: "Stay updated on any changes in tax laws and regulations.", priority: 'High', riskLevel: 'Medium', proof: 'Legal Update Subscription', location: 'Legal' }
                ]
            },
            {
                title: "Physical Asset Management",
                department: "Admin/IT",
                frequency: "Quarterly",
                role: "Admin Manager",
                icon: <Computer />,
                summary: "Track and manage all company assets, from laptops to office furniture, to prevent loss and ensure accountability.",
                tasks: [
                    { id: 'LEGAL-PAM-01', description: "Maintain a master asset register with details of each asset (serial no, owner, location).", priority: 'High', riskLevel: 'High', proof: 'Asset Register', location: 'System' },
                    { id: 'LEGAL-PAM-02', description: "Tag all new assets with a unique asset ID upon procurement.", priority: 'High', riskLevel: 'Medium', proof: 'Asset Tag Photo', location: 'Asset Location' },
                    { id: 'LEGAL-PAM-03', description: "Conduct a full physical verification of all assets annually.", priority: 'High', riskLevel: 'High', proof: 'Physical Verification Report', location: 'Office' },
                    { id: 'LEGAL-PAM-04', description: "Use an asset issuance form, signed by the employee, for all assigned assets like laptops.", priority: 'High', riskLevel: 'High', proof: 'Signed Issuance Form', location: 'Employee File' },
                    { id: 'LEGAL-PAM-05', description: "Have a clear process for handling lost, stolen, or damaged assets.", priority: 'High', riskLevel: 'High', proof: 'Asset Policy', location: 'Office' },
                    { id: 'LEGAL-PAM-06', description: "Update the asset register when an asset is transferred between employees or locations.", priority: 'High', riskLevel: 'Medium', proof: 'Transfer Form', location: 'System' },
                    { id: 'LEGAL-PAM-07', description: "Log all asset disposals and obtain a certificate of destruction for data-bearing devices.", priority: 'High', riskLevel: 'High', proof: 'Disposal Certificate', location: 'Office' },
                    { id: 'LEGAL-PAM-08', description: "Reconcile the physical asset count with the financial records.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Finance' },
                    { id: 'LEGAL-PAM-09', description: "Ensure all high-value assets are covered by insurance.", priority: 'High', riskLevel: 'High', proof: 'Insurance Policy', location: 'Office' },
                    { id: 'LEGAL-PAM-10', description: "Conduct random spot checks of assets quarterly.", priority: 'Medium', riskLevel: 'Medium', proof: 'Spot Check Report', location: 'Office' }
                ]
            },
            {
                title: "Employee Exit & Offboarding",
                department: "HR",
                frequency: "Per Exit",
                role: "HR Manager",
                icon: <UserCog2 />,
                summary: "Ensure a smooth and secure exit process for departing employees, protecting company assets and data while fulfilling all legal obligations.",
                tasks: [
                    { id: 'HR-EXIT-01', description: "Obtain a formal resignation letter from the employee.", priority: 'High', riskLevel: 'High', proof: 'Resignation Letter', location: 'Employee File' },
                    { id: 'HR-EXIT-02', description: "Conduct an exit interview to gather feedback.", priority: 'High', riskLevel: 'Medium', proof: 'Exit Interview Form', location: 'Employee File' },
                    { id: 'HR-EXIT-03', description: "Coordinate with IT to disable all system access on the employee's last day.", priority: 'High', riskLevel: 'High', proof: 'IT Offboarding Checklist', location: 'IT' },
                    { id: 'HR-EXIT-04', description: "Recover all company assets (laptop, phone, access card) and get a signed recovery form.", priority: 'High', riskLevel: 'High', proof: 'Asset Recovery Form', location: 'Employee File' },
                    { id: 'HR-EXIT-05', description: "Process the full and final settlement of salary and dues within the statutory timeline.", priority: 'High', riskLevel: 'High', proof: 'Final Settlement Statement', location: 'Finance' },
                    { id: 'HR-EXIT-06', description: "Issue the experience letter and other relieving documents.", priority: 'High', riskLevel: 'Medium', proof: 'Document Issuance Log', location: 'HR' },
                    { id: 'HR-EXIT-07', description: "Remove the employee from all insurance and benefits schemes.", priority: 'High', riskLevel: 'Medium', proof: 'Insurance Deletion Confirmation', location: 'HR' },
                    { id: 'HR-EXIT-08', description: "Ensure transfer of knowledge and responsibilities to the new owner.", priority: 'High', riskLevel: 'Medium', proof: 'KT Plan', location: 'Department' },
                    { id: 'HR-EXIT-09', description: "Communicate the employee's departure to the team.", priority: 'Medium', riskLevel: 'Low', proof: 'Internal Announcement', location: 'HR' },
                    { id: 'HR-EXIT-10', description: "Archive the employee's file as per data retention policies.", priority: 'High', riskLevel: 'Medium', proof: 'Archiving Log', location: 'HR' }
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
        icon: <ShieldCheck />,
        whoIsItFor: ["CISOs", "CTOs", "Data Protection Officers (DPOs)", "Heads of Risk & Compliance", "IT Directors"],
        sampleItems: [
            { text: "Implement an 'AI Ethics & Governance' framework for your models.", icon: <BrainCircuit /> },
            { text: "Conduct a 'Data Privacy Audit' aligned with GDPR and DPDP.", icon: <FileLock /> },
            { text: "Strengthen defenses with a 'Cloud Security Posture Management' checklist.", icon: <DatabaseZap /> },
            { text: "Practice your 'Cybersecurity Incident Response' plan with drills.", icon: <Siren /> },
            { text: "Manage 'Third-Party Vendor Security Risk'.", icon: <Handshake /> },
            { text: "Run 'Phishing Simulation & Awareness' campaigns.", icon: <Ear /> },
        ],
        checklists: [
            {
                title: "AI Ethics & Governance Framework",
                department: "Technology/Ethics",
                frequency: "Per Model",
                role: "AI Ethics Officer",
                icon: <BrainCircuit />,
                summary: "Build trust and mitigate risk in your AI systems. This checklist helps you assess models for bias, ensure transparency, and create a governance structure for responsible AI development.",
                tasks: [
                    { id: 'AI-ETHICS-01', description: "Define and document the intended use case and potential societal impact of the AI model.", priority: 'High', riskLevel: 'High', proof: 'Impact Assessment Document', location: 'AI Governance File' },
                    { id: 'AI-ETHICS-02', description: "Assess the training data for potential sources of bias (e.g., demographic, historical).", priority: 'High', riskLevel: 'High', proof: 'Data Bias Report', location: 'AI Governance File' },
                    { id: 'AI-ETHICS-03', description: "Test the model's performance across different demographic subgroups to identify fairness gaps.", priority: 'High', riskLevel: 'High', proof: 'Fairness Metrics Report', location: 'AI Governance File' },
                    { id: 'AI-ETHICS-04', description: "Create a 'Model Card' or 'Explainability Statement' that clearly describes how the model works for non-technical stakeholders.", priority: 'High', riskLevel: 'Medium', proof: 'Model Card Document', location: 'Public/Internal Documentation' },
                    { id: 'AI-ETHICS-05', description: "Establish a process for human oversight and intervention in the AI's decisions.", priority: 'High', riskLevel: 'High', proof: 'Human-in-the-Loop Protocol', location: 'Operational SOPs' },
                    { id: 'AI-ETHICS-06', description: "Implement a feedback mechanism for users to report issues with the AI's output.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback System', location: 'Application' },
                    { id: 'AI-ETHICS-07', description: "Conduct a security assessment of the AI model to prevent adversarial attacks.", priority: 'High', riskLevel: 'High', proof: 'Security Assessment Report', location: 'Security Files' },
                    { id: 'AI-ETHICS-08', description: "Ensure compliance with any industry-specific regulations on AI usage.", priority: 'High', riskLevel: 'High', proof: 'Compliance Checklist', location: 'Legal Files' },
                    { id: 'AI-ETHICS-09', description: "Establish a clear accountability framework for AI-driven decisions.", priority: 'High', riskLevel: 'High', proof: 'Accountability Matrix', location: 'Governance Documents' },
                    { id: 'AI-ETHICS-10', description: "Regularly review and update the AI governance framework as regulations evolve.", priority: 'High', riskLevel: 'Medium', proof: 'Review Minutes', location: 'Ethics Committee' }
                ]
            },
            {
                title: "Data Privacy (GDPR/DPDP) Audit",
                department: "Compliance/Legal",
                frequency: "Quarterly",
                role: "Data Protection Officer (DPO)",
                icon: <FileLock />,
                summary: "Ensure your organization complies with global data privacy regulations. This checklist covers key requirements like maintaining a Record of Processing Activities (ROPA) and handling Data Subject Access Requests (DSARs).",
                tasks: [
                    { id: 'PRIV-AUDIT-01', description: "Review and update the company's Record of Processing Activities (ROPA) to ensure it reflects all current data processing.", priority: 'High', riskLevel: 'High', proof: 'Updated ROPA Document', location: 'Compliance Office' },
                    { id: 'PRIV-AUDIT-02', description: "Audit the process for obtaining and managing user consent.", priority: 'High', riskLevel: 'High', proof: 'Consent Management Audit', location: 'Website/App' },
                    { id: 'PRIV-AUDIT-03', description: "Test the procedure for handling Data Subject Access Requests (DSARs) within the legally mandated timeframe.", priority: 'High', riskLevel: 'High', proof: 'DSAR Test Report', location: 'Compliance Office' },
                    { id: 'PRIV-AUDIT-04', description: "Verify that Data Protection Impact Assessments (DPIAs) are conducted for all new high-risk processing activities.", priority: 'High', riskLevel: 'High', proof: 'DPIA Log', location: 'Compliance Office' },
                    { id: 'PRIV-AUDIT-05', description: "Ensure data retention policies are being enforced and old data is being securely deleted.", priority: 'High', riskLevel: 'High', proof: 'Data Deletion Log', location: 'IT/Compliance' },
                    { id: 'PRIV-AUDIT-06', description: "Review vendor contracts to ensure they have adequate data protection clauses.", priority: 'High', riskLevel: 'High', proof: 'Vendor Contract Review', location: 'Legal' },
                    { id: 'PRIV-AUDIT-07', description: "Conduct data privacy training for all employees.", priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
                    { id: 'PRIV-AUDIT-08', description: "Verify that the company's privacy policy is up-to-date and easily accessible.", priority: 'High', riskLevel: 'Medium', proof: 'Website Audit', location: 'Website' },
                    { id: 'PRIV-AUDIT-09', description: "Audit data transfer mechanisms for international data transfers.", priority: 'High', riskLevel: 'High', proof: 'Data Transfer Audit', location: 'Compliance Office' },
                    { id: 'PRIV-AUDIT-10', description: "Review the incident response plan for data breaches.", priority: 'High', riskLevel: 'High', proof: 'Incident Response Plan', location: 'Security' }
                ]
            },
            {
                title: "Cloud Security Posture Management",
                department: "IT/Security",
                frequency: "Weekly",
                role: "Cloud Security Engineer",
                icon: <DatabaseZap />,
                summary: "Prevent misconfigurations, a leading cause of data breaches. This checklist helps you audit your cloud environment (AWS, Azure, GCP) for common security weaknesses.",
                tasks: [
                    { id: 'CLOUD-SEC-01', description: "Scan for publicly exposed storage buckets (e.g., S3 buckets) or databases.", priority: 'High', riskLevel: 'High', proof: 'Cloud Security Scan Report', location: 'Security Dashboard' },
                    { id: 'CLOUD-SEC-02', description: "Audit Identity and Access Management (IAM) roles for overly permissive policies (principle of least privilege).", priority: 'High', riskLevel: 'High', proof: 'IAM Audit Report', location: 'Security Dashboard' },
                    { id: 'CLOUD-SEC-03', description: "Ensure multi-factor authentication (MFA) is enabled for all administrative users.", priority: 'High', riskLevel: 'High', proof: 'MFA Status Report', location: 'Security Dashboard' },
                    { id: 'CLOUD-SEC-04', description: "Verify that logging and monitoring (e.g., CloudTrail, Azure Monitor) are enabled for all critical resources.", priority: 'High', riskLevel: 'High', proof: 'Logging Configuration', location: 'Security Dashboard' },
                    { id: 'CLOUD-SEC-05', description: "Check that all data stored at rest is encrypted.", priority: 'High', riskLevel: 'High', proof: 'Encryption Status Report', location: 'Security Dashboard' },
                    { id: 'CLOUD-SEC-06', description: "Review network security groups and firewalls for overly permissive inbound rules.", priority: 'High', riskLevel: 'High', proof: 'Firewall Rule Review', location: 'Security Dashboard' },
                    { id: 'CLOUD-SEC-07', description: "Ensure that secrets and credentials are not hard-coded in applications.", priority: 'High', riskLevel: 'High', proof: 'Code Scan Report', location: 'DevOps' },
                    { id: 'CLOUD-SEC-08', description: "Check for and disable any unused or dormant user accounts.", priority: 'High', riskLevel: 'Medium', proof: 'User Account Audit', location: 'Security Dashboard' },
                    { id: 'CLOUD-SEC-09', description: "Verify that backup and disaster recovery plans are in place and tested.", priority: 'High', riskLevel: 'High', proof: 'DR Test Report', location: 'IT' },
                    { id: 'CLOUD-SEC-10', description: "Regularly patch and update all virtual machine images and containers.", priority: 'High', riskLevel: 'High', proof: 'Patch Management Log', location: 'IT' }
                ]
            },
            {
                title: "Cybersecurity Incident Response Plan",
                department: "Security",
                frequency: "Quarterly",
                role: "CISO",
                icon: <Siren />,
                summary: "Prepare for the inevitable. This checklist provides a step-by-step framework for responding to a cyber attack, from initial detection to post-incident review, minimizing damage and recovery time.",
                tasks: [
                    { id: 'CYBER-IR-01', description: "Conduct a quarterly tabletop exercise or drill to test the incident response plan with the core team.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Conference Room' },
                    { id: 'CYBER-IR-02', description: "Update the contact list for the incident response team and external experts (legal counsel, forensics).", priority: 'High', riskLevel: 'Medium', proof: 'Updated Contact List', location: 'Incident Response Plan' },
                    { id: 'CYBER-IR-03', description: "Verify that all required logging is in place to support a forensic investigation.", priority: 'High', riskLevel: 'High', proof: 'Log Source Audit', location: 'SIEM/Log Management System' },
                    { id: 'CYBER-IR-04', description: "Review and update playbooks for common attack scenarios (e.g., ransomware, phishing).", priority: 'High', riskLevel: 'High', proof: 'Updated Playbooks', location: 'Incident Response Plan' },
                    { id: 'CYBER-IR-05', description: "Ensure a secure, out-of-band communication channel is available for the incident response team.", priority: 'High', riskLevel: 'High', proof: 'Communication Channel Test', location: 'Various' },
                    { id: 'CYBER-IR-06', description: "Define roles and responsibilities for the incident response team.", priority: 'High', riskLevel: 'Medium', proof: 'RACI Chart', location: 'Incident Response Plan' },
                    { id: 'CYBER-IR-07', description: "Establish communication templates for internal and external stakeholders.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Templates', location: 'Incident Response Plan' },
                    { id: 'CYBER-IR-08', description: "Ensure that tools for network isolation and forensic imaging are readily available.", priority: 'High', riskLevel: 'High', proof: 'Tool Inventory', location: 'Security Office' },
                    { id: 'CYBER-IR-09', description: "Have a clear process for engaging with law enforcement and regulatory bodies.", priority: 'High', riskLevel: 'High', proof: 'Engagement Protocol', location: 'Legal' },
                    { id: 'CYBER-IR-10', description: "Conduct a post-incident review after every major event to identify lessons learned.", priority: 'High', riskLevel: 'High', proof: 'Post-Incident Review Report', location: 'Security Office' }
                ]
            },
            {
                title: "Employee Offboarding & Access Control",
                department: "HR/IT",
                frequency: "Per Departure",
                role: "IT Admin",
                icon: <UserCog />,
                summary: "Prevent departing employees from becoming your next data breach. This time-sensitive checklist ensures all physical and digital access is revoked immediately upon employee exit.",
                tasks: [
                    { id: 'CYBER-AC-01', description: "Immediately disable all of the employee's system accounts (email, Slack, CRM, etc.) upon notification of termination.", priority: 'High', riskLevel: 'High', proof: 'Account Deactivation Log', location: 'IT Helpdesk' },
                    { id: 'CYBER-AC-02', description: "Revoke all VPN and remote access privileges.", priority: 'High', riskLevel: 'High', proof: 'Access Control System Log', location: 'IT Helpdesk' },
                    { id: 'CYBER-AC-03', description: "Deactivate physical access cards and change relevant door codes.", priority: 'High', riskLevel: 'High', proof: 'Physical Access System Log', location: 'Security Office' },
                    { id: 'CYBER-AC-04', description: "Wipe all company data from the employee's corporate devices (laptop, phone).", priority: 'High', riskLevel: 'High', proof: 'Device Wipe Confirmation', location: 'IT Helpdesk' },
                    { id: 'CYBER-AC-05', description: "Conduct an exit interview to recover all company assets and knowledge.", priority: 'High', riskLevel: 'Medium', proof: 'Exit Interview Form', location: 'HR Office' },
                    { id: 'CYBER-AC-06', description: "Transfer ownership of all files and projects from the departing employee's account.", priority: 'High', riskLevel: 'Medium', proof: 'File Transfer Log', location: 'IT' },
                    { id: 'CYBER-AC-07', description: "Remove the employee from all internal communication channels and distribution lists.", priority: 'High', riskLevel: 'Medium', proof: 'Distribution List Audit', location: 'IT' },
                    { id: 'CYBER-AC-08', description: "Change any shared passwords the employee may have had access to.", priority: 'High', riskLevel: 'High', proof: 'Password Change Log', location: 'IT' },
                    { id: 'CYBER-AC-09', description: "Communicate the departure to relevant team members.", priority: 'Medium', riskLevel: 'Low', proof: 'Internal Announcement', location: 'HR' },
                    { id: 'CYBER-AC-10', description: "Document the completion of the offboarding process in the employee's file.", priority: 'High', riskLevel: 'Medium', proof: 'Offboarding Checklist', location: 'HR' }
                ]
            },
            {
                title: "Third-Party Vendor Security Risk Management",
                department: "Security/Procurement",
                frequency: "Per Vendor & Annually",
                role: "Risk Manager",
                icon: <Handshake />,
                summary: "Manage the risk posed by your supply chain. This checklist ensures all third-party vendors meet your security standards before and during their engagement.",
                tasks: [
                    { id: 'VEND-SEC-01', description: "Conduct a security risk assessment for all new vendors before onboarding.", priority: 'High', riskLevel: 'High', proof: 'Risk Assessment Report', location: 'Security Office' },
                    { id: 'VEND-SEC-02', description: "Ensure vendor contracts include strong data protection and security clauses.", priority: 'High', riskLevel: 'High', proof: 'Contract Review', location: 'Legal' },
                    { id: 'VEND-SEC-03', description: "Review vendor's security certifications (e.g., SOC 2, ISO 27001).", priority: 'High', riskLevel: 'High', proof: 'Certification Copies', location: 'Security Office' },
                    { id: 'VEND-SEC-04', description: "Limit vendor access to only the systems and data necessary for their function.", priority: 'High', riskLevel: 'High', proof: 'Access Control Policy', location: 'IT' },
                    { id: 'VEND-SEC-05', description: "Conduct annual security reviews of all critical vendors.", priority: 'High', riskLevel: 'High', proof: 'Annual Review Report', location: 'Security Office' },
                    { id: 'VEND-SEC-06', description: "Have a clear process for responding to a security breach at a vendor.", priority: 'High', riskLevel: 'High', proof: 'Vendor Breach Response Plan', location: 'Security Office' },
                    { id: 'VEND-SEC-07', description: "Monitor public sources for news of security incidents involving your vendors.", priority: 'Medium', riskLevel: 'Medium', proof: 'Monitoring Log', location: 'Security Office' },
                    { id: 'VEND-SEC-08', description: "Ensure secure methods are used for transferring data to and from vendors.", priority: 'High', riskLevel: 'High', proof: 'Data Transfer Policy', location: 'IT' },
                    { id: 'VEND-SEC-09', description: "Classify vendors based on their level of risk to your organization.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Risk Matrix', location: 'Security Office' },
                    { id: 'VEND-SEC-10', description: "Have a secure offboarding process for terminating vendor relationships.", priority: 'High', riskLevel: 'High', proof: 'Vendor Offboarding Checklist', location: 'Security Office' }
                ]
            },
            {
                title: "Phishing Simulation & Awareness",
                department: "Security/HR",
                frequency: "Quarterly",
                role: "Security Awareness Manager",
                icon: <Ear />,
                summary: "Strengthen your human firewall. This checklist guides you through planning, executing, and following up on phishing simulation campaigns to train employees.",
                tasks: [
                    { id: 'PHISH-01', description: "Plan the phishing campaign, including the scenario, template, and target audience.", priority: 'High', riskLevel: 'Medium', proof: 'Campaign Plan', location: 'Security Office' },
                    { id: 'PHISH-02', description: "Obtain management approval for the campaign.", priority: 'High', riskLevel: 'Medium', proof: 'Approval Email', location: 'Security Office' },
                    { id: 'PHISH-03', description: "Launch the phishing simulation email to the target group.", priority: 'High', riskLevel: 'Medium', proof: 'Launch Confirmation', location: 'System' },
                    { id: 'PHISH-04', description: "Monitor the results: track open rates, click rates, and reporting rates.", priority: 'High', riskLevel: 'Medium', proof: 'Campaign Dashboard', location: 'System' },
                    { id: 'PHISH-05', description: "Enroll employees who failed the test into remedial security awareness training.", priority: 'High', riskLevel: 'Medium', proof: 'Training Enrollment Log', location: 'System' },
                    { id: 'PHISH-06', description: "Analyze the campaign results to identify trends and vulnerable departments.", priority: 'High', riskLevel: 'Medium', proof: 'Analysis Report', location: 'Security Office' },
                    { id: 'PHISH-07', description: "Share anonymized results with management.", priority: 'High', riskLevel: 'Medium', proof: 'Management Report', location: 'Security Office' },
                    { id: 'PHISH-08', description: "Recognize employees or departments with high reporting rates.", priority: 'Medium', riskLevel: 'Low', proof: 'Recognition Email', location: 'Internal Comms' },
                    { id: 'PHISH-09', description: "Vary the types of phishing tests used each quarter.", priority: 'High', riskLevel: 'Medium', proof: 'Campaign Calendar', location: 'Security Office' },
                    { id: 'PHISH-10', description: "Do not penalize employees for failing a phishing test; focus on education.", priority: 'High', riskLevel: 'High', proof: 'Program Policy', location: 'Security Office' }
                ]
            },
            {
                title: "Insider Threat Program Management",
                department: "Security/HR",
                frequency: "Quarterly",
                role: "Insider Threat Program Manager",
                icon: <UserCog2 />,
                summary: "Develop a program to deter, detect, and respond to security threats originating from within the organization.",
                tasks: [
                    { id: 'INSIDER-01', description: "Define what constitutes an insider threat for your organization.", priority: 'High', riskLevel: 'High', proof: 'Policy Document', location: 'Security Office' },
                    { id: 'INSIDER-02', description: "Implement User and Entity Behavior Analytics (UEBA) tools to monitor for anomalous activity.", priority: 'High', riskLevel: 'High', proof: 'UEBA Tool Dashboard', location: 'Security Operations Center' },
                    { id: 'INSIDER-03', description: "Conduct regular training for managers on recognizing indicators of insider risk.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Training Log', location: 'HR' },
                    { id: 'INSIDER-04', description: "Establish a cross-functional team (Security, HR, Legal) to manage the program.", priority: 'High', riskLevel: 'High', proof: 'Committee Charter', location: 'Office' },
                    { id: 'INSIDER-05', description: "Review access logs for critical systems for unauthorized or unusual access patterns.", priority: 'High', riskLevel: 'High', proof: 'Access Log Review Report', location: 'Security Office' },
                    { id: 'INSIDER-06', description: "Have a clear and confidential channel for employees to report concerns.", priority: 'High', riskLevel: 'High', proof: 'Whistleblower Policy', location: 'Legal' },
                    { id: 'INSIDER-07', description: "Ensure HR processes (e.g., performance reviews, terminations) feed into the insider threat program.", priority: 'High', riskLevel: 'High', proof: 'Process Integration Document', location: 'HR/Security' },
                    { id: 'INSIDER-08', description: "Develop response playbooks for different types of insider threat scenarios.", priority: 'High', riskLevel: 'High', proof: 'Response Playbooks', location: 'Security Office' },
                    { id: 'INSIDER-09', description: "Balance monitoring with employee privacy, in consultation with legal counsel.", priority: 'High', riskLevel: 'High', proof: 'Privacy Impact Assessment', location: 'Legal' },
                    { id: 'INSIDER-10', description: "Review the effectiveness of the program quarterly and report to senior leadership.", priority: 'High', riskLevel: 'High', proof: 'Quarterly Report', location: 'Office' }
                ]
            },
            {
                title: "Business Continuity Planning (BCP)",
                department: "Risk/Operations",
                frequency: "Annually",
                role: "BCP Manager",
                icon: <Route />,
                summary: "Ensure your business can continue to operate during and after a major disruption with a comprehensive BCP that covers people, processes, and technology.",
                tasks: [
                    { id: 'BCP-01', description: "Conduct a Business Impact Analysis (BIA) to identify critical business processes.", priority: 'High', riskLevel: 'High', proof: 'BIA Report', location: 'Office' },
                    { id: 'BCP-02', description: "Develop recovery strategies for each critical process.", priority: 'High', riskLevel: 'High', proof: 'Recovery Strategy Document', location: 'Office' },
                    { id: 'BCP-03', description: "Create and maintain a Business Continuity Plan document.", priority: 'High', riskLevel: 'High', proof: 'BCP Document', location: 'Office' },
                    { id: 'BCP-04', description: "Conduct annual BCP drills or tabletop exercises.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Office' },
                    { id: 'BCP-05', description: "Update the BCP based on the results of drills and any organizational changes.", priority: 'High', riskLevel: 'High', proof: 'Updated BCP', location: 'Office' },
                    { id: 'BCP-06', description: "Maintain an emergency communication plan and contact lists.", priority: 'High', riskLevel: 'High', proof: 'Communication Plan', location: 'Office' },
                    { id: 'BCP-07', description: "Identify and set up alternate work sites if necessary.", priority: 'High', riskLevel: 'High', proof: 'Alternate Site Agreement', location: 'Office' },
                    { id: 'BCP-08', description: "Train all employees on their roles and responsibilities during a disruption.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'BCP-09', description: "Ensure critical vendor continuity plans are in place.", priority: 'High', riskLevel: 'High', proof: 'Vendor BCP Review', location: 'Procurement' },
                    { id: 'BCP-10', description: "Present the BCP status to senior management annually.", priority: 'High', riskLevel: 'Medium', proof: 'Management Presentation', location: 'Office' }
                ]
            },
            {
                title: "Software Development Lifecycle (SDLC) Security",
                department: "Engineering/Security",
                frequency: "Per Release",
                role: "Application Security Engineer",
                icon: <Code />,
                summary: "Integrate security into every phase of your software development process ('Shift Left') to build more secure applications from the start.",
                tasks: [
                    { id: 'SDLC-01', description: "Conduct threat modeling for all new features.", priority: 'High', riskLevel: 'High', proof: 'Threat Model Document', location: 'Design Phase' },
                    { id: 'SDLC-02', description: "Use static application security testing (SAST) tools to scan code for vulnerabilities.", priority: 'High', riskLevel: 'High', proof: 'SAST Scan Report', location: 'Development Phase' },
                    { id: 'SDLC-03', description: "Use software composition analysis (SCA) tools to identify vulnerabilities in open-source libraries.", priority: 'High', riskLevel: 'High', proof: 'SCA Scan Report', location: 'Development Phase' },
                    { id: 'SDLC-04', description: "Provide secure coding training to all developers.", priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR/Security' },
                    { id: 'SDLC-05', description: "Conduct dynamic application security testing (DAST) before release.", priority: 'High', riskLevel: 'High', proof: 'DAST Scan Report', location: 'Testing Phase' },
                    { id: 'SDLC-06', description: "Perform a manual penetration test for all major releases.", priority: 'High', riskLevel: 'High', proof: 'Penetration Test Report', location: 'Testing Phase' },
                    { id: 'SDLC-07', description: "Have a vulnerability management process to track and remediate findings.", priority: 'High', riskLevel: 'High', proof: 'Vulnerability Tracker', location: 'System' },
                    { id: 'SDLC-08', description: "Implement security gates in the CI/CD pipeline to block vulnerable builds.", priority: 'High', riskLevel: 'High', proof: 'CI/CD Configuration', location: 'DevOps' },
                    { id: 'SDLC-09', description: "Maintain a secure coding standard for the organization.", priority: 'High', riskLevel: 'Medium', proof: 'Secure Coding Standard Document', location: 'Security Office' },
                    { id: 'SDLC-10', description: "Review and update the SDLC security process annually.", priority: 'High', riskLevel: 'Medium', proof: 'Process Review Minutes', location: 'Security Office' }
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
        icon: <Stethoscope />,
        badgeText: "Bestseller",
        bestseller: true,
        whoIsItFor: ["Hospital COOs", "Chief Medical Officers", "Heads of Quality", "Nursing Directors", "VPs", "GMs", "Directors"],
        sampleItems: [
            { text: "Prevent 'Never Events' with a WHO-aligned 'Surgical Safety' checklist.", icon: <SyringeIcon /> },
            { text: "Ensure NABH/JCI compliance with a 'Patient Safety & Risk Management' framework.", icon: <ShieldCheck /> },
            { text: "Master infection control with 'CSSD & Sterilization' protocols.", icon: <Microscope /> },
            { text: "Includes 'ER Triage' and 'LASA Drug Management' checklists.", icon: <Ambulance /> },
            { text: "Manage 'Biomedical Waste' as per regulatory standards.", icon: <Recycle /> },
            { text: "Implement a robust 'Patient Identification & Safety' protocol.", icon: <UserCheck /> },
        ],
        checklists: [
             {
                title: "Surgical Safety Checklist (WHO)",
                department: "Surgery",
                frequency: "Per Procedure",
                role: "Circulating Nurse",
                icon: <SyringeIcon />,
                summary: "The foundational checklist to prevent wrong-site, wrong-patient, and wrong-procedure errors. Aligned with WHO, JCI, and NABH standards.",
                tasks: [
                    { id: 'SURG-SS-01', description: "Sign In (Before Anesthesia): Confirm patient identity, site, procedure, and consent.", priority: 'High', riskLevel: 'High', proof: 'Signed Checklist', location: 'Operating Room' },
                    { id: 'SURG-SS-02', description: "Sign In: Check site marking and anesthesia safety check completion.", priority: 'High', riskLevel: 'High', proof: 'Signed Checklist', location: 'Operating Room' },
                    { id: 'SURG-SS-03', description: "Time Out (Before Incision): Team introduction and confirmation of patient, site, and procedure.", priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation in Log', location: 'Operating Room' },
                    { id: 'SURG-SS-04', description: "Time Out: Review of critical events, anticipated blood loss, and sterility concerns.", priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation in Log', location: 'Operating Room' },
                    { id: 'SURG-SS-05', description: "Sign Out (Before Patient Leaves): Confirm name of procedure, sponge/instrument count, and equipment issues.", priority: 'High', riskLevel: 'High', proof: 'Signed Checklist', location: 'Operating Room' },
                    { id: 'SURG-SS-06', description: "Confirm antibiotic prophylaxis has been given within the last 60 minutes.", priority: 'High', riskLevel: 'High', proof: 'Medication Chart', location: 'Operating Room' },
                    { id: 'SURG-SS-07', description: "Review any patient allergies.", priority: 'High', riskLevel: 'High', proof: 'Patient File', location: 'Operating Room' },
                    { id: 'SURG-SS-08', description: "Ensure all essential imaging is displayed in the operating room.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Operating Room' },
                    { id: 'SURG-SS-09', description: "Document the completion of the checklist in the patient's medical record.", priority: 'High', riskLevel: 'High', proof: 'Medical Record Entry', location: 'System' },
                    { id: 'SURG-SS-10', description: "Hold a post-operative debrief to discuss any issues.", priority: 'Medium', riskLevel: 'Medium', proof: 'Debrief Notes', location: 'Operating Room' }
                ]
            },
            {
                title: "LASA Drug Management",
                department: "Pharmacy/Nursing",
                frequency: "Daily/Per Dispensing",
                role: "Pharmacist/Nurse",
                icon: <Pill />,
                summary: "Prevent medication errors with a strict protocol for managing Look-Alike, Sound-Alike (LASA) drugs, a major focus area for NABH and JCI.",
                tasks: [
                    { id: 'LASA-01', description: "Store LASA drugs in separate, clearly labeled locations.", priority: 'High', riskLevel: 'High', proof: 'Storage Audit Log', location: 'Pharmacy/Ward' },
                    { id: 'LASA-02', description: "Use 'Tall Man' lettering (e.g., hydrOXYzine vs. hydrALAZINE) on all labels and storage bins.", priority: 'High', riskLevel: 'High', proof: 'Label Audit', location: 'Pharmacy/Ward' },
                    { id: 'LASA-03', description: "Require a 'read-back' confirmation for all verbal or telephonic orders involving LASA drugs.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Nursing Station' },
                    { id: 'LASA-04', description: "Implement a two-person check system for dispensing and administering high-alert LASA medications.", priority: 'High', riskLevel: 'High', proof: 'Dual Sign-off Log', location: 'Pharmacy/Bedside' },
                    { id: 'LASA-05', description: "Regularly audit LASA drug storage and labeling for compliance.", priority: 'High', riskLevel: 'High', proof: 'Monthly Audit Report', location: 'Pharmacy/Wards' },
                    { id: 'LASA-06', description: "Use warning labels on LASA drug containers.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Pharmacy/Ward' },
                    { id: 'LASA-07', description: "Educate clinical staff about the risks of LASA drugs.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'LASA-08', description: "Include LASA drug safety in new employee orientation.", priority: 'High', riskLevel: 'Medium', proof: 'Onboarding Checklist', location: 'HR' },
                    { id: 'LASA-09', description: "Report and analyze any near misses involving LASA drugs.", priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Quality Office' },
                    { id: 'LASA-10', description: "Review and update the list of LASA drugs annually.", priority: 'High', riskLevel: 'Medium', proof: 'List Review Minutes', location: 'Pharmacy Committee' }
                ]
            },
             {
                title: "CSSD & Sterilization Protocol",
                department: "CSSD/Infection Control",
                frequency: "Per Cycle",
                role: "CSSD Technician",
                icon: <Microscope />,
                summary: "Ensure every surgical instrument is sterile and safe. This checklist covers the entire sterilization cycle, from decontamination to sterile storage, preventing hospital-acquired infections.",
                tasks: [
                    { id: 'CSSD-01', description: "Perform daily check of sterilizer (autoclave) performance using biological and chemical indicators.", priority: 'High', riskLevel: 'High', proof: 'Sterilizer Log', location: 'CSSD' },
                    { id: 'CSSD-02', description: "Ensure all instruments are thoroughly cleaned and decontaminated before sterilization.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'CSSD' },
                    { id: 'CSSD-03', description: "Properly pack and label all instrument sets with sterilization date and expiry.", priority: 'High', riskLevel: 'High', proof: 'Package Labels', location: 'CSSD' },
                    { id: 'CSSD-04', description: "Maintain a detailed log for each sterilization cycle, including load contents and cycle parameters.", priority: 'High', riskLevel: 'High', proof: 'Cycle Logbook', location: 'CSSD' },
                    { id: 'CSSD-05', description: "Store sterile packs in a clean, dry, and controlled environment.", priority: 'High', riskLevel: 'High', proof: 'Storage Area Log', location: 'Sterile Storage' },
                    { id: 'CSSD-06', description: "Implement a tracking system for all sterilized instruments.", priority: 'High', riskLevel: 'High', proof: 'Tracking System Log', location: 'CSSD' },
                    { id: 'CSSD-07', description: "Check integrity of sterile packaging before dispensing.", priority: 'High', riskLevel: 'High', proof: 'Dispensing Log', location: 'CSSD' },
                    { id: 'CSSD-08', description: "Ensure staff follow proper aseptic technique when handling sterile items.", priority: 'High', riskLevel: 'High', proof: 'Observation Checklist', location: 'CSSD' },
                    { id: 'CSSD-09', description: "Conduct regular training on sterilization procedures.", priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
                    { id: 'CSSD-10', description: "Have a recall procedure for any suspected sterile processing failure.", priority: 'High', riskLevel: 'High', proof: 'Recall Procedure Document', location: 'Quality Office' }
                ]
            },
            {
                title: "Emergency Room Triage & Patient Flow",
                department: "Emergency",
                frequency: "Per Patient",
                role: "Triage Nurse",
                icon: <Ambulance />,
                summary: "Manage chaos in the ER. This checklist provides a standardized triage system to quickly identify and prioritize critical patients, improving patient flow and outcomes.",
                tasks: [
                    { id: 'ER-01', description: "Perform initial patient assessment within 5 minutes of arrival.", priority: 'High', riskLevel: 'High', proof: 'Triage Form', location: 'Triage Area' },
                    { id: 'ER-02', description: "Assign a triage level (e.g., Red, Yellow, Green) based on severity.", priority: 'High', riskLevel: 'High', proof: 'Triage Form', location: 'Triage Area' },
                    { id: 'ER-03', description: "Immediately move critical (Red) patients to the resuscitation area.", priority: 'High', riskLevel: 'High', proof: 'Patient Chart', location: 'Resuscitation Bay' },
                    { id: 'ER-04', description: "Regularly reassess patients in the waiting area.", priority: 'High', riskLevel: 'High', proof: 'Reassessment Log', location: 'Waiting Area' },
                    { id: 'ER-05', description: "Maintain clear communication between triage, nursing, and medical staff.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'ER' },
                    { id: 'ER-06', description: "Ensure triage area is always stocked with necessary supplies.", priority: 'High', riskLevel: 'Medium', proof: 'Stock Checklist', location: 'Triage Area' },
                    { id: 'ER-07', description: "Provide comfort and information to waiting patients and their families.", priority: 'High', riskLevel: 'Low', proof: 'Manager Observation', location: 'Waiting Area' },
                    { id: 'ER-08', description: "Log patient arrival and departure times to track wait times.", priority: 'High', riskLevel: 'Medium', proof: 'Patient Flow Log', location: 'System' },
                    { id: 'ER-09', description: "Have a clear protocol for managing patient surges.", priority: 'High', riskLevel: 'High', proof: 'Surge Protocol Document', location: 'ER' },
                    { id: 'ER-10', description: "Train triage staff on recognizing subtle signs of critical illness.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' }
                ]
            },
            {
                title: "Patient Safety & Risk Management",
                department: "Quality",
                frequency: "Monthly",
                role: "Quality Manager",
                icon: <ShieldCheck />,
                summary: "A proactive framework for identifying and mitigating patient safety risks. This checklist helps you run an effective patient safety committee and manage incident reporting.",
                tasks: [
                    { id: 'RISK-01', description: "Review all incident reports (falls, medication errors, etc.) from the previous month.", priority: 'High', riskLevel: 'High', proof: 'Incident Report Analysis', location: 'Quality Office' },
                    { id: 'RISK-02', description: "Conduct a root cause analysis (RCA) for any sentinel events.", priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'Quality Office' },
                    { id: 'RISK-03', description: "Implement and track corrective and preventive actions (CAPA).", priority: 'High', riskLevel: 'High', proof: 'CAPA Log', location: 'Quality Office' },
                    { id: 'RISK-INC-01', description: "Promote a non-punitive culture for incident reporting.", priority: 'High', riskLevel: 'Medium', proof: 'Policy Document', location: 'HR/Quality' },
                    { id: 'RISK-06', description: "Analyze patient fall data and implement fall prevention strategies.", priority: 'High', riskLevel: 'High', proof: 'Fall Prevention Plan', location: 'Quality Office' },
                    { id: 'RISK-07', description: "Review hospital-acquired infection (HAI) rates and trends.", priority: 'High', riskLevel: 'High', proof: 'HAI Report', location: 'Infection Control' },
                    { id: 'RISK-08', description: "Ensure compliance with National Patient Safety Goals.", priority: 'High', riskLevel: 'High', proof: 'Compliance Audit', location: 'Quality Office' },
                    { id: 'RISK-09', description: "Conduct failure mode and effects analysis (FMEA) for high-risk processes.", priority: 'High', riskLevel: 'High', proof: 'FMEA Report', location: 'Quality Office' },
                    { id: 'RISK-10', description: "Share lessons learned from incidents across the organization.", priority: 'High', riskLevel: 'Medium', proof: 'Safety Bulletin', location: 'Internal Communication' }
                ]
            },
            {
                title: "Patient Identification & Safety",
                department: "Nursing",
                frequency: "Per Interaction",
                role: "Nurse",
                icon: <UserCheck />,
                summary: "A critical checklist to ensure the right patient gets the right care every time, preventing errors in medication administration, transfusions, and procedures.",
                tasks: [
                    { id: 'SAFE-ID-01', description: "Use at least two patient identifiers (e.g., name and MRN) before administering any medication or procedure.", priority: 'High', riskLevel: 'High', proof: 'Patient Chart Sign-off', location: 'Bedside' },
                    { id: 'SAFE-ID-02', description: "Check the patient's wristband against the medical record.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Bedside' },
                    { id: 'SAFE-ID-03', description: "Label all specimens in the presence of the patient.", priority: 'High', riskLevel: 'High', proof: 'Specimen Label', location: 'Bedside' },
                    { id: 'SAFE-ID-04', description: "Perform a 'read-back' of verbal orders to confirm accuracy.", priority: 'High', riskLevel: 'High', proof: 'Verbal Order Log', location: 'Nursing Station' },
                    { id: 'SAFE-ID-05', description: "Conduct a two-person verification for blood transfusions.", priority: 'High', riskLevel: 'High', proof: 'Transfusion Checklist', location: 'Bedside' },
                    { id: 'SAFE-ID-06', description: "Ensure correct patient positioning for all procedures.", priority: 'High', riskLevel: 'High', proof: 'Positioning Checklist', location: 'Procedure Room' },
                    { id: 'SAFE-ID-07', description: "Verify patient allergies before administering any new medication.", priority: 'High', riskLevel: 'High', proof: 'Allergy Check in Chart', location: 'Bedside' },
                    { id: 'SAFE-ID-08', description: "Use barcoding technology for medication administration where available.", priority: 'High', riskLevel: 'High', proof: 'Barcode Scan Log', location: 'Bedside' },
                    { id: 'SAFE-ID-09', description: "Ensure patient handovers between shifts include clear identification.", priority: 'High', riskLevel: 'High', proof: 'Handover Checklist', location: 'Nursing Station' },
                    { id: 'SAFE-ID-10', description: "Educate patients on the importance of verifying their identity.", priority: 'Medium', riskLevel: 'Low', proof: 'Patient Education Log', location: 'Bedside' }
                ]
            },
            {
                title: "Pre-Operative Patient Assessment",
                department: "Anesthesia/Surgery",
                frequency: "Per Patient",
                role: "Anesthesiologist",
                icon: <Stethoscope />,
                summary: "Ensure every patient is fully assessed and prepared for surgery. This checklist covers all critical checks from allergy verification to consent form review.",
                tasks: [
                    { id: 'PRE-OP-01', description: "Review patient's medical history and current medications.", priority: 'High', riskLevel: 'High', proof: 'Patient File', location: 'Pre-op Area' },
                    { id: 'PRE-OP-02', description: "Confirm surgical consent form is correctly filled and signed.", priority: 'High', riskLevel: 'High', proof: 'Signed Consent Form', location: 'Pre-op Area' },
                    { id: 'PRE-OP-03', description: "Verify patient's allergy status.", priority: 'High', riskLevel: 'High', proof: 'Patient File', location: 'Pre-op Area' },
                    { id: 'PRE-OP-04', description: "Check results of all pre-operative investigations (blood work, ECG).", priority: 'High', riskLevel: 'High', proof: 'Lab Reports', location: 'Pre-op Area' },
                    { id: 'PRE-OP-05', description: "Ensure the surgical site has been marked by the operating surgeon.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Pre-op Area' },
                    { id: 'PRE-OP-06', description: "Assess airway and potential difficult intubation.", priority: 'High', riskLevel: 'High', proof: 'Airway Assessment Form', location: 'Pre-op Area' },
                    { id: 'PRE-OP-07', description: "Confirm patient's NPO (nothing by mouth) status.", priority: 'High', riskLevel: 'High', proof: 'Patient Confirmation', location: 'Pre-op Area' },
                    { id: 'PRE-OP-08', description: "Ensure availability of cross-matched blood if required.", priority: 'High', riskLevel: 'High', proof: 'Blood Bank Confirmation', location: 'Pre-op Area' },
                    { id: 'PRE-OP-09', description: "Discuss the anesthesia plan with the patient and obtain consent.", priority: 'High', riskLevel: 'High', proof: 'Anesthesia Consent Form', location: 'Pre-op Area' },
                    { id: 'PRE-OP-10', description: "Document the complete pre-anesthetic evaluation in the patient's record.", priority: 'High', riskLevel: 'High', proof: 'Evaluation Note', location: 'Patient Record' }
                ]
            },
            {
                title: "Infection Control & Prevention",
                department: "Infection Control",
                frequency: "Daily/Weekly",
                role: "Infection Control Nurse",
                icon: <Bug />,
                summary: "A hospital-wide checklist to prevent healthcare-associated infections (HAIs) through hand hygiene audits, environmental cleaning, and surveillance.",
                tasks: [
                    { id: 'INF-01', description: "Conduct hand hygiene audits in various departments.", priority: 'High', riskLevel: 'High', proof: 'Audit Form', location: 'Wards/ICU' },
                    { id: 'INF-02', description: "Monitor compliance with standard precautions (e.g., use of PPE).", priority: 'High', riskLevel: 'High', proof: 'Observation Checklist', location: 'Wards/ICU' },
                    { id: 'INF-03', description: "Review environmental cleaning and disinfection protocols.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log Review', location: 'Various' },
                    { id: 'INF-04', description: "Track rates of healthcare-associated infections (HAIs).", priority: 'High', riskLevel: 'High', proof: 'HAI Data Report', location: 'Office' },
                    { id: 'INF-05', description: "Ensure proper implementation of isolation precautions for infectious patients.", priority: 'High', riskLevel: 'High', proof: 'Isolation Room Audit', location: 'Isolation Ward' },
                    { id: 'INF-06', description: "Provide ongoing training to staff on infection control practices.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'INF-07', description: "Audit the process for handling and disposal of biomedical waste.", priority: 'High', riskLevel: 'High', proof: 'Waste Audit Report', location: 'Waste Area' },
                    { id: 'INF-08', description: "Ensure policies are in place for managing outbreaks.", priority: 'High', riskLevel: 'High', proof: 'Outbreak Policy', location: 'Office' },
                    { id: 'INF-09', description: "Review antibiotic stewardship program data.", priority: 'High', riskLevel: 'High', proof: 'Antibiotic Use Report', location: 'Pharmacy' },
                    { id: 'INF-10', description: "Investigate any clusters of infections to identify the source.", priority: 'High', riskLevel: 'High', proof: 'Investigation Report', location: 'Office' }
                ]
            },
            {
                title: "Biomedical Waste Management",
                department: "Housekeeping/Infection Control",
                frequency: "Daily",
                role: "Supervisor",
                icon: <Recycle />,
                summary: "Ensure safe and compliant segregation, collection, and disposal of all biomedical waste, protecting staff and the community from exposure.",
                tasks: [
                    { id: 'BIOW-01', description: "Ensure proper color-coded bins are used for waste segregation at the point of generation.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Wards/OT' },
                    { id: 'BIOW-02', description: "Check that sharps are disposed of in puncture-proof containers.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Wards/OT' },
                    { id: 'BIOW-03', description: "Verify that waste bags are sealed and labeled correctly before transport.", priority: 'High', riskLevel: 'High', proof: 'Label Check', location: 'Waste Collection Point' },
                    { id: 'BIOW-04', description: "Ensure biomedical waste is stored in a secure, designated area.", priority: 'High', riskLevel: 'High', proof: 'Storage Area Audit', location: 'Waste Storage' },
                    { id: 'BIOW-05', description: "Maintain a log of all biomedical waste generated and handed over to the licensed vendor.", priority: 'High', riskLevel: 'High', proof: 'Waste Logbook', location: 'Office' },
                    { id: 'BIOW-06', description: "Ensure staff handling waste are wearing appropriate Personal Protective Equipment (PPE).", priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Waste Area' },
                    { id: 'BIOW-07', description: "Train all healthcare workers on the correct procedures for biomedical waste management.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'BIOW-08', description: "Verify the credentials and license of the biomedical waste disposal vendor.", priority: 'High', riskLevel: 'High', proof: 'Vendor File', location: 'Office' },
                    { id: 'BIOW-09', description: "Have a clear procedure for managing spills of biomedical waste.", priority: 'High', riskLevel: 'High', proof: 'Spill Management SOP', location: 'Office' },
                    { id: 'BIOW-10', description: "File annual reports with the State Pollution Control Board as required.", priority: 'High', riskLevel: 'High', proof: 'Report Filing Receipt', location: 'Office' }
                ]
            },
            {
                title: "Radiology & Imaging Safety",
                department: "Radiology",
                frequency: "Daily/Monthly",
                role: "Head Radiographer",
                icon: <Brain />,
                summary: "Ensure patient and staff safety in the radiology department with protocols for radiation safety, equipment quality control, and patient handling.",
                tasks: [
                    { id: 'RAD-01', description: "Perform daily quality control checks on all imaging equipment (X-ray, CT, MRI).", priority: 'High', riskLevel: 'High', proof: 'QC Logbook', location: 'Imaging Rooms' },
                    { id: 'RAD-02', description: "Ensure all staff wear and use their personal radiation dosimeters (e.g., TLD badges).", priority: 'High', riskLevel: 'High', proof: 'Dosimeter Log', location: 'Radiology Dept' },
                    { id: 'RAD-03', description: "Verify that radiation warning signs are correctly displayed.", priority: 'High', riskLevel: 'High', proof: 'Signage Audit', location: 'Imaging Rooms' },
                    { id: 'RAD-04', description: "Use lead shields and other protective equipment for patients and staff.", priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Imaging Rooms' },
                    { id: 'RAD-05', description: "Follow ALARA (As Low As Reasonably Achievable) principles to minimize radiation exposure.", priority: 'High', riskLevel: 'High', proof: 'Technique Chart Review', location: 'Office' },
                    { id: 'RAD-06', description: "Have a clear protocol for managing pregnant patients or staff in the radiology department.", priority: 'High', riskLevel: 'High', proof: 'Pregnancy Protocol', location: 'Office' },
                    { id: 'RAD-07', description: "Check MRI safety procedures, including screening for metallic implants.", priority: 'High', riskLevel: 'High', proof: 'MRI Screening Form', location: 'MRI Suite' },
                    { id: 'RAD-08', description: "Maintain records of equipment servicing and radiation safety audits.", priority: 'High', riskLevel: 'High', proof: 'Service Records', location: 'Office' },
                    { id: 'RAD-09', description: "Provide regular radiation safety training for all radiology staff.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'RAD-10', description: "Report and investigate any radiation-related incidents.", priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Office' }
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
        icon: <Pill />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Pharmacy Owners", "Chief Pharmacists", "Hospital Pharmacy Managers", "Compliance Officers", "Heads of Quality"],
        sampleItems: [
            { text: "Prevent dispensing errors with a 'Look-Alike, Sound-Alike (LASA) Drug' checklist.", icon: <FileWarning /> },
            { text: "Master 'Controlled Substance & Narcotics Management' for full compliance.", icon: <Lock /> },
            { text: "Ensure medication efficacy with a 'Cold Chain Management' protocol.", icon: <Thermometer /> },
            { text: "Standardize 'Patient Counseling' to improve medication adherence.", icon: <UserCheck /> },
            { text: "Streamline inventory with 'Expiry Date Management'.", icon: <CalendarDays /> },
            { text: "Ensure 'Dispensing Accuracy' with a multi-stage verification process.", icon: <Syringe /> },
        ],
        checklists: [
            {
                title: "Dispensing Accuracy",
                department: "Pharmacy",
                frequency: "Per Prescription",
                role: "Pharmacist",
                icon: <Syringe />,
                summary: "Ensure the right patient gets the right drug at the right dose, every time. This is the core checklist for safe pharmacy operations.",
                tasks: [
                    { id: 'DISPENSE-01', description: "Verify patient identity using two identifiers.", priority: 'High', riskLevel: 'High', proof: 'Patient Record', location: 'Dispensing Counter' },
                    { id: 'DISPENSE-02', description: "Perform a two-person check for all high-alert medications.", priority: 'High', riskLevel: 'High', proof: 'Dual Sign-off Log', location: 'Dispensing Counter' },
                    { id: 'DISPENSE-03', description: "Check prescription for completeness and legality.", priority: 'High', riskLevel: 'High', proof: 'Prescription Review', location: 'Dispensing Counter' },
                    { id: 'DISPENSE-04', description: "Confirm drug allergies with the patient or their record.", priority: 'High', riskLevel: 'High', proof: 'Patient Record Check', location: 'Dispensing Counter' },
                    { id: 'DISPENSE-05', description: "Label medication clearly with patient name, drug name, strength, and instructions.", priority: 'High', riskLevel: 'High', proof: 'Printed Label', location: 'Dispensing Counter' },
                    { id: 'DISPENSE-06', description: "Check for potential drug interactions.", priority: 'High', riskLevel: 'High', proof: 'Drug Interaction Software', location: 'System' },
                    { id: 'DISPENSE-07', description: "Ensure the correct dosage form (tablet, capsule, liquid) is dispensed.", priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Dispensing Counter' },
                    { id: 'DISPENSE-08', description: "Provide patient counseling for all new prescriptions.", priority: 'High', riskLevel: 'Medium', proof: 'Counseling Log', location: 'Counseling Area' },
                    { id: 'DISPENSE-09', description: "Document the dispensing process in the pharmacy management system.", priority: 'High', riskLevel: 'Medium', proof: 'System Log', location: 'System' },
                    { id: 'DISPENSE-10', description: "Have a final check of the dispensed medication against the prescription before handing it to the patient.", priority: 'High', riskLevel: 'High', proof: 'Final Check Log', location: 'Dispensing Counter' }
                ]
            },
            {
                title: "Controlled Substance & Narcotics Management",
                department: "Pharmacy/Compliance",
                frequency: "Daily",
                role: "Chief Pharmacist",
                icon: <Lock />,
                summary: "Ensure 100% compliance with narcotics regulations. This checklist covers secure storage, perpetual inventory, and discrepancy reporting.",
                tasks: [
                    { id: 'NARC-01', description: "Conduct a daily reconciliation of all controlled substance inventory with two staff members present.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Log', location: 'Narcotics Vault' },
                    { id: 'NARC-02', description: "Store all controlled substances in a locked, secure safe or vault with restricted access.", priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Narcotics Vault' },
                    { id: 'NARC-03', description: "Maintain a perpetual inventory log for all narcotics dispensed.", priority: 'High', riskLevel: 'High', proof: 'Perpetual Logbook', location: 'Narcotics Vault' },
                    { id: 'NARC-04', description: "Report any discrepancies to the appropriate regulatory body within 24 hours.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Office' },
                    { id: 'NARC-05', description: "Verify prescriptions for controlled substances for authenticity.", priority: 'High', riskLevel: 'High', proof: 'Prescription Verification Log', location: 'Dispensing Counter' },
                    { id: 'NARC-06', description: "Ensure all records related to controlled substances are maintained for the required period.", priority: 'High', riskLevel: 'High', proof: 'Record Retention Policy', location: 'Office' },
                    { id: 'NARC-07', description: "Conduct regular audits of controlled substance records.", priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'Office' },
                    { id: 'NARC-08', description: "Have a clear procedure for handling the destruction of expired or damaged controlled substances.", priority: 'High', riskLevel: 'High', proof: 'Destruction Protocol', location: 'Office' },
                    { id: 'NARC-09', description: "Train all pharmacy staff on controlled substance regulations and procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'NARC-10', description: "Limit the quantity of controlled substances stored outside the main vault.", priority: 'High', riskLevel: 'High', proof: 'Storage Policy', location: 'Pharmacy' }
                ]
            },
            {
                title: "Cold Chain Management",
                department: "Pharmacy/Logistics",
                frequency: "Daily",
                role: "Pharmacist",
                icon: <Thermometer />,
                summary: "Protect the efficacy of vaccines and other temperature-sensitive medications with this rigorous cold chain protocol.",
                tasks: [
                    { id: 'COLD-01', description: "Log refrigerator and freezer temperatures twice daily.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Cold Storage' },
                    { id: 'COLD-02', description: "Test temperature alarm systems weekly.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Cold Storage' },
                    { id: 'COLD-03', description: "Have a clear action plan for power failures, including backup power sources.", priority: 'High', riskLevel: 'High', proof: 'Emergency Plan', location: 'Office' },
                    { id: 'COLD-04', description: "Use validated cold packs and containers for transporting temperature-sensitive drugs.", priority: 'High', riskLevel: 'High', proof: 'Transport Log', location: 'Dispatch Area' },
                    { id: 'COLD-05', description: "Check temperature upon receiving cold chain shipments.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Area' },
                    { id: 'COLD-06', description: "Ensure cold storage units are not overloaded to allow for proper air circulation.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Audit', location: 'Cold Storage' },
                    { id: 'COLD-07', description: "Calibrate temperature monitoring devices annually.", priority: 'High', riskLevel: 'High', proof: 'Calibration Certificate', location: 'Office' },
                    { id: 'COLD-08', description: "Store temperature-sensitive drugs away from doors and vents.", priority: 'High', riskLevel: 'Medium', proof: 'Storage Audit', location: 'Cold Storage' },
                    { id: 'COLD-09', description: "Train staff on the importance of maintaining the cold chain.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'COLD-10', description: "Document any temperature excursions and take appropriate action.", priority: 'High', riskLevel: 'High', proof: 'Excursion Report', location: 'Office' }
                ]
            },
            {
                title: "Patient Counseling",
                department: "Pharmacy",
                frequency: "Per New Prescription",
                role: "Pharmacist",
                icon: <UserCheck />,
                summary: "Improve patient adherence and safety with a standardized counseling checklist to ensure every patient understands their medication.",
                tasks: [
                    { id: 'COUNSEL-01', description: "Explain the name of the medication and what it is for.", priority: 'High', riskLevel: 'Medium', proof: 'Counseling Checklist', location: 'Counseling Area' },
                    { id: 'COUNSEL-02', description: "Clearly explain the dosage, route, and frequency.", priority: 'High', riskLevel: 'High', proof: 'Counseling Checklist', location: 'Counseling Area' },
                    { id: 'COUNSEL-03', description: "Discuss potential common side effects and what to do if they occur.", priority: 'High', riskLevel: 'High', proof: 'Counseling Checklist', location: 'Counseling Area' },
                    { id: 'COUNSEL-04', description: "Ask the patient to repeat back the key instructions to confirm understanding (teach-back method).", priority: 'High', riskLevel: 'High', proof: 'Counseling Checklist', location: 'Counseling Area' },
                    { id: 'COUNSEL-05', description: "Provide written information to supplement verbal counseling.", priority: 'High', riskLevel: 'Medium', proof: 'Patient Information Leaflet', location: 'Counseling Area' },
                    { id: 'COUNSEL-06', description: "Advise on proper storage of the medication.", priority: 'High', riskLevel: 'Medium', proof: 'Counseling Checklist', location: 'Counseling Area' },
                    { id: 'COUNSEL-07', description: "Discuss any potential interactions with other medications or foods.", priority: 'High', riskLevel: 'High', proof: 'Counseling Checklist', location: 'Counseling Area' },
                    { id: 'COUNSEL-08', description: "Explain what to do if a dose is missed.", priority: 'High', riskLevel: 'High', proof: 'Counseling Checklist', location: 'Counseling Area' },
                    { id: 'COUNSEL-09', description: "Provide contact information for any follow-up questions.", priority: 'Medium', riskLevel: 'Low', proof: 'Business Card/Leaflet', location: 'Counseling Area' },
                    { id: 'COUNSEL-10', description: "Document that counseling was provided in the patient's record.", priority: 'High', riskLevel: 'Medium', proof: 'Patient Record Entry', location: 'System' }
                ]
            },
            {
                title: "Expiry Date Management",
                department: "Inventory",
                frequency: "Monthly",
                role: "Inventory Manager",
                icon: <CalendarDays />,
                summary: "Prevent financial loss and patient safety risks from expired drugs. This checklist ensures all stock is monitored and short-expiry items are handled correctly.",
                tasks: [
                    { id: 'EXP-01', description: "Conduct a monthly check of all shelves for items expiring in the next 3-6 months.", priority: 'High', riskLevel: 'High', proof: 'Short-Expiry Report', location: 'Shelves' },
                    { id: 'EXP-02', description: "Physically separate short-expiry items in a designated area.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Short-Expiry Area' },
                    { id: 'EXP-03', description: "Implement a 'First-Expiry, First-Out' (FEFO) system for dispensing.", priority: 'High', riskLevel: 'High', proof: 'Dispensing SOP', location: 'Pharmacy' },
                    { id: 'EXP-04', description: "Attempt to return short-expiry stock to the supplier based on agreements.", priority: 'High', riskLevel: 'Medium', proof: 'Return Request Log', location: 'Office' },
                    { id: 'EXP-05', description: "Remove all expired medications from shelves immediately.", priority: 'High', riskLevel: 'High', proof: 'Removal Log', location: 'Shelves' },
                    { id: 'EXP-06', description: "Store expired drugs in a secure, clearly marked 'Do Not Use' area pending disposal.", priority: 'High', riskLevel: 'High', proof: 'Expired Drug Quarantine', location: 'Secure Storeroom' },
                    { id: 'EXP-07', description: "Maintain a log of all expired and disposed-of medications.", priority: 'High', riskLevel: 'High', proof: 'Disposal Log', location: 'Office' },
                    { id: 'EXP-08', description: "Follow regulatory guidelines for the environmentally safe disposal of pharmaceutical waste.", priority: 'High', riskLevel: 'High', proof: 'Disposal Vendor Certificate', location: 'Office' },
                    { id: 'EXP-09', description: "Generate reports on financial losses due to expired stock to improve purchasing.", priority: 'High', riskLevel: 'Medium', proof: 'Expiry Loss Report', location: 'Office' },
                    { id: 'EXP-10', description: "Train all staff on the importance of checking expiry dates during receiving, stocking, and dispensing.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' }
                ]
            },
            {
                title: "Procurement & Inventory Control",
                department: "Procurement/Inventory",
                frequency: "Weekly",
                role: "Procurement Officer",
                icon: <ShoppingCart />,
                summary: "Optimize your purchasing and inventory levels to reduce carrying costs, prevent stockouts, and improve profitability.",
                tasks: [
                    { id: 'PROC-01', description: "Analyze sales data and stock levels to generate purchase orders.", priority: 'High', riskLevel: 'High', proof: 'Purchase Order Generation Log', location: 'System' },
                    { id: 'PROC-02', description: "Set and regularly review min/max inventory levels for all SKUs.", priority: 'High', riskLevel: 'High', proof: 'Min/Max Level Report', location: 'System' },
                    { id: 'PROC-03', description: "Verify goods received against purchase orders for accuracy.", priority: 'High', riskLevel: 'High', proof: 'GRN Reconciliation', location: 'Receiving Area' },
                    { id: 'PROC-04', description: "Perform weekly cycle counts on high-value and fast-moving drugs.", priority: 'High', riskLevel: 'High', proof: 'Cycle Count Report', location: 'Pharmacy' },
                    { id: 'PROC-05', description: "Analyze inventory turnover ratios to identify slow-moving or dead stock.", priority: 'High', riskLevel: 'High', proof: 'Inventory Analysis Report', location: 'Office' },
                    { id: 'PROC-06', description: "Manage relationships with pharmaceutical suppliers.", priority: 'High', riskLevel: 'Medium', proof: 'Supplier Meeting Minutes', location: 'Office' },
                    { id: 'PROC-07', description: "Negotiate pricing and payment terms with suppliers.", priority: 'High', riskLevel: 'High', proof: 'Supplier Agreements', location: 'Office' },
                    { id: 'PROC-08', description: "Track supplier performance on lead times and order fill rates.", priority: 'High', riskLevel: 'Medium', proof: 'Supplier Scorecard', location: 'Office' },
                    { id: 'PROC-09', description: "Process purchase returns for damaged or incorrect supplies.", priority: 'High', riskLevel: 'Medium', proof: 'Purchase Return Log', location: 'Office' },
                    { id: 'PROC-10', description: "Reconcile physical stock with system stock annually.", priority: 'High', riskLevel: 'High', proof: 'Annual Stock Take Report', location: 'Pharmacy' }
                ]
            },
            {
                title: "Regulatory Compliance Audit",
                department: "Compliance",
                frequency: "Quarterly",
                role: "Compliance Officer",
                icon: <FileCheck />,
                summary: "Ensure your pharmacy meets all legal and regulatory requirements, from licensing and record-keeping to pharmacist qualifications.",
                tasks: [
                    { id: 'REG-01', description: "Verify that the pharmacy license is valid and displayed prominently.", priority: 'High', riskLevel: 'High', proof: 'License Photo', location: 'Pharmacy' },
                    { id: 'REG-02', description: "Ensure all practicing pharmacists have valid, up-to-date registrations.", priority: 'High', riskLevel: 'High', proof: 'Pharmacist Registration Files', location: 'HR' },
                    { id: 'REG-03', description: "Audit prescription records to ensure they are maintained for the required duration.", priority: 'High', riskLevel: 'High', proof: 'Record Audit Report', location: 'Office' },
                    { id: 'REG-04', description: "Check compliance with regulations for labeling and packaging of medicines.", priority: 'High', riskLevel: 'High', proof: 'Labeling Audit', location: 'Pharmacy' },
                    { id: 'REG-05', description: "Verify compliance with narcotics and psychotropic substances regulations.", priority: 'High', riskLevel: 'High', proof: 'Narcotics Audit Report', location: 'Office' },
                    { id: 'REG-06', description: "Ensure compliance with biomedical waste disposal rules.", priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Records', location: 'Office' },
                    { id: 'REG-07', description: "Verify compliance with the Pharmacy Act and Drugs & Cosmetics Act.", priority: 'High', riskLevel: 'High', proof: 'Compliance Checklist', location: 'Office' },
                    { id: 'REG-08', description: "Maintain a log of all inspections by regulatory bodies.", priority: 'High', riskLevel: 'High', proof: 'Inspection Logbook', location: 'Office' },
                    { id: 'REG-09', description: "Review and update all pharmacy SOPs annually.", priority: 'High', riskLevel: 'Medium', proof: 'SOP Review Log', location: 'Office' },
                    { id: 'REG-10', description: "Conduct regular staff training on regulatory compliance.", priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' }
                ]
            },
            {
                title: "Emergency Preparedness",
                department: "Management",
                frequency: "Annually",
                role: "Pharmacy Manager",
                icon: <Siren />,
                summary: "Prepare your pharmacy to handle emergencies like power outages, fires, or medical incidents safely and effectively.",
                tasks: [
                    { id: 'EMER-01', description: "Develop and display an emergency contact list (fire, police, ambulance).", priority: 'High', riskLevel: 'High', proof: 'Contact List Display', location: 'Pharmacy' },
                    { id: 'EMER-02', description: "Ensure fire extinguishers are inspected, certified, and accessible.", priority: 'High', riskLevel: 'High', proof: 'Fire Extinguisher Log', location: 'Pharmacy' },
                    { id: 'EMER-03', description: "Check that first aid kits are stocked and easily accessible.", priority: 'High', riskLevel: 'High', proof: 'First Aid Kit Log', location: 'Pharmacy' },
                    { id: 'EMER-04', description: "Conduct annual fire and emergency evacuation drills.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Office' },
                    { id: 'EMER-05', description: "Have a clear plan for protecting refrigerated medicines during a power outage.", priority: 'High', riskLevel: 'High', proof: 'Power Outage SOP', location: 'Office' },
                    { id: 'EMER-06', description: "Train all staff on basic first aid and emergency response procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'EMER-07', description: "Ensure emergency exits are clearly marked and unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Exit Audit', location: 'Pharmacy' },
                    { id: 'EMER-08', description: "Have a communication plan for staff and customers during an emergency.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Plan', location: 'Office' },
                    { id: 'EMER-09', description: "Test emergency lighting systems monthly.", priority: 'High', riskLevel: 'High', proof: 'Lighting Test Log', location: 'Pharmacy' },
                    { id: 'EMER-10', description: "Maintain a backup of all critical data off-site.", priority: 'High', riskLevel: 'High', proof: 'Backup Log', location: 'IT' }
                ]
            },
            {
                title: "Compounding & Aseptic Preparation",
                department: "Pharmacy",
                frequency: "Per Compounding",
                role: "Compounding Pharmacist",
                icon: <TestTube />,
                summary: "Ensure safety and sterility in the preparation of custom medications with this checklist for aseptic technique, equipment use, and documentation.",
                tasks: [
                    { id: 'COMP-01', description: "Verify the prescription and calculate all dosages before starting.", priority: 'High', riskLevel: 'High', proof: 'Calculation Sheet', location: 'Compounding Lab' },
                    { id: 'COMP-02', description: "Ensure the compounding area is clean and sanitized.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Compounding Lab' },
                    { id: 'COMP-03', description: "Use appropriate PPE (gloves, gown, mask).", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Compounding Lab' },
                    { id: 'COMP-04', description: "Perform all aseptic manipulations within a certified laminar air flow hood.", priority: 'High', riskLevel: 'High', proof: 'Hood Certification', location: 'Compounding Lab' },
                    { id: 'COMP-05', description: "Document every ingredient, lot number, and expiry date used in the compound.", priority: 'High', riskLevel: 'High', proof: 'Compounding Record', location: 'Compounding Lab' },
                    { id: 'COMP-06', description: "Label the final product clearly with all required information.", priority: 'High', riskLevel: 'High', proof: 'Final Label', location: 'Compounding Lab' },
                    { id: 'COMP-07', description: "Conduct quality control tests on compounded products as required.", priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'QC Lab' },
                    { id: 'COMP-08', description: "Maintain a master formula record for all regularly compounded products.", priority: 'High', riskLevel: 'Medium', proof: 'Master Formula File', location: 'Office' },
                    { id: 'COMP-09', description: "Regularly service and certify all compounding equipment.", priority: 'High', riskLevel: 'High', proof: 'Service Records', location: 'Office' },
                    { id: 'COMP-10', description: "Train and validate the competency of all staff involved in compounding.", priority: 'High', riskLevel: 'High', proof: 'Competency Validation Record', location: 'HR' }
                ]
            },
            {
                title: "Home Delivery Service",
                department: "Logistics/Retail",
                frequency: "Per Delivery",
                role: "Delivery Executive",
                icon: <Truck />,
                summary: "Ensure safe, compliant, and professional home delivery of medications, maintaining patient privacy and product integrity.",
                tasks: [
                    { id: 'HD-01', description: "Verify patient name and address before leaving the pharmacy.", priority: 'High', riskLevel: 'High', proof: 'Delivery Manifest', location: 'Pharmacy' },
                    { id: 'HD-02', description: "Package medications in a tamper-evident and confidential manner.", priority: 'High', riskLevel: 'High', proof: 'Packaging Check', location: 'Pharmacy' },
                    { id: 'HD-03', description: "For cold chain items, use validated containers with temperature monitoring.", priority: 'High', riskLevel: 'High', proof: 'Cold Chain Log', location: 'Pharmacy' },
                    { id: 'HD-04', description: "Confirm identity of the person receiving the medication at the delivery location.", priority: 'High', riskLevel: 'High', proof: 'ID Verification', location: 'Customer Premise' },
                    { id: 'HD-05', description: "Obtain a signature upon delivery.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Delivery Receipt', location: 'Customer Premise' },
                    { id: 'HD-06', description: "Process payments securely using a mobile POS if applicable.", priority: 'High', riskLevel: 'High', proof: 'Payment Receipt', location: 'Customer Premise' },
                    { id: 'HD-07', description: "Have a clear protocol for what to do if the patient is not available.", priority: 'High', riskLevel: 'High', proof: 'Non-delivery SOP', location: 'Office' },
                    { id: 'HD-08', description: "Ensure delivery personnel are trained in patient privacy and confidentiality.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'HD-09', description: "Maintain a log of all deliveries, including times and recipient details.", priority: 'High', riskLevel: 'Medium', proof: 'Delivery Logbook', location: 'System' },
                    { id: 'HD-10', description: "Reconcile delivery records and payments at the end of the day.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Office' }
                ]
            }
        ]
    },
    // --- Education ---
    {
        id: 'school_operations_pack',
        title: "School Operations Pack (K-12)",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Education",
        description: "A comprehensive compliance and safety toolkit for school principals and administrators to ensure a secure and efficient learning environment.",
        icon: <School />,
        badgeText: "Safety First",
        whoIsItFor: ["School Principals", "Trustees", "Administrators", "Heads of Security", "Transport Managers"],
        sampleItems: [
            { text: "Ensure a zero-tolerance 'School Bus Safety' checklist.", icon: <Bus /> },
            { text: "Manage 'Visitor & Entry Security' to protect your campus.", icon: <Shield /> },
            { text: "Ensure 'Classroom Safety & Hygiene' with daily audits.", icon: <ClipboardList /> },
            { text: "Includes checklists for 'Fire Safety' and 'Emergency Evacuation'.", icon: <Siren /> },
            { text: "Align with CBSE/ICSE/State Board safety and infrastructure guidelines.", icon: <FileCheck /> },
        ],
        checklists: [
            {
                title: "Daily School Opening & Closing",
                department: "Administration/Security",
                frequency: "Daily",
                role: "Admin Officer",
                icon: <Key />,
                summary: "A foundational checklist to ensure the school campus is secure, clean, and ready for students and staff each day.",
                tasks: [
                    { id: 'SCH-OC-01', description: "Unlock all main gates and building entrances.", priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Campus-wide' },
                    { id: 'SCH-OC-02', description: "Conduct a campus sweep to check for any security issues or overnight incidents.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Campus-wide' },
                    { id: 'SCH-OC-03', description: "Verify cleanliness of classrooms, restrooms, and common areas.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Campus-wide' },
                    { id: 'SCH-OC-04', description: "Ensure all classroom equipment (smart boards, lights) is functional.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Check Log', location: 'Classrooms' },
                    { id: 'SCH-OC-05', description: "At closing, ensure all students have departed.", priority: 'High', riskLevel: 'High', proof: 'Departure Log', location: 'Exit Gates' },
                    { id: 'SCH-OC-06', description: "Turn off all non-essential lights and AC units.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Campus-wide' },
                    { id: 'SCH-OC-07', description: "Lock all classrooms, labs, and administrative offices.", priority: 'High', riskLevel: 'High', proof: 'Lock Check Log', location: 'Campus-wide' },
                    { id: 'SCH-OC-08', description: "Secure main gates and activate any perimeter alarms.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Perimeter' },
                    { id: 'SCH-OC-09', description: "Check that all water taps are turned off.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Restrooms/Labs' },
                    { id: 'SCH-OC-10', description: "Log any maintenance issues reported during the day.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Admin Office' }
                ]
            },
            {
                title: "School Bus Safety & Transport",
                department: "Transport/Security",
                frequency: "Daily",
                role: "Transport Manager",
                icon: <Bus />,
                summary: "A non-negotiable checklist to ensure the safety of every child on their way to and from school, aligned with Supreme Court guidelines.",
                tasks: [
                    { id: 'SCH-BUS-01', description: "Perform a pre-trip inspection of the bus (tires, lights, brakes).", priority: 'High', riskLevel: 'High', proof: 'Pre-trip Inspection Form', location: 'Bus Depot' },
                    { id: 'SCH-BUS-02', description: "Verify the bus's GPS and CCTV cameras are functional.", priority: 'High', riskLevel: 'High', proof: 'System Check Log', location: 'Bus' },
                    { id: 'SCH-BUS-03', description: "Ensure a female attendant is on board for all routes with female students.", priority: 'High', riskLevel: 'High', proof: 'Staff Roster', location: 'Bus' },
                    { id: 'SCH-BUS-04', description: "Check that the first aid kit is stocked and the fire extinguisher is not expired.", priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Log', location: 'Bus' },
                    { id: 'SCH-BUS-05', description: "At the end of each trip, walk the entire length of the bus to ensure no child is left behind.", priority: 'High', riskLevel: 'High', proof: 'End-of-Trip Log', location: 'Bus' },
                    { id: 'SCH-BUS-06', description: "Ensure the driver has a valid license and has undergone required training.", priority: 'High', riskLevel: 'High', proof: 'Driver File', location: 'Transport Office' },
                    { id: 'SCH-BUS-07', description: "Maintain a log of all students on each bus route.", priority: 'High', riskLevel: 'Medium', proof: 'Student Roster', location: 'Bus' },
                    { id: 'SCH-BUS-08', description: "Speed governor must be functional and set to the prescribed limit.", priority: 'High', riskLevel: 'High', proof: 'Vehicle Inspection Report', location: 'Bus Depot' },
                    { id: 'SCH-BUS-09', description: "Emergency exit must be clearly marked and functional.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Bus' },
                    { id: 'SCH-BUS-10', description: "Conduct regular driver training on safety and emergency procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' }
                ]
            },
            {
                title: "Visitor & Entry Security",
                department: "Security",
                frequency: "Ongoing",
                role: "Security Supervisor",
                icon: <Shield />,
                summary: "Protect your campus from unauthorized entry with a strict protocol for visitor registration, verification, and monitoring.",
                tasks: [
                    { id: 'SCH-VIS-01', description: "All visitors must register at the main gate and provide photo ID.", priority: 'High', riskLevel: 'High', proof: 'Visitor Logbook', location: 'Main Gate' },
                    { id: 'SCH-VIS-02', description: "Verify the purpose of the visit with the concerned staff member before allowing entry.", priority: 'High', riskLevel: 'High', proof: 'Intercom/Phone Log', location: 'Main Gate' },
                    { id: 'SCH-VIS-03', description: "Issue a temporary visitor's badge which must be worn at all times.", priority: 'High', riskLevel: 'Medium', proof: 'Badge Issuance Log', location: 'Main Gate' },
                    { id: 'SCH-VIS-04', description: "Escort visitors to their destination within the campus.", priority: 'Medium', riskLevel: 'Medium', proof: 'Security Patrol Log', location: 'Campus' },
                    { id: 'SCH-VIS-05', description: "Ensure visitors do not access restricted areas.", priority: 'High', riskLevel: 'High', proof: 'Visual Monitoring', location: 'Campus' },
                    { id: 'SCH-VIS-06', description: "Collect the visitor's badge upon their departure.", priority: 'High', riskLevel: 'High', proof: 'Visitor Log Sign-out', location: 'Main Gate' },
                    { id: 'SCH-VIS-07', description: "Monitor CCTV feeds of all entry and exit points.", priority: 'High', riskLevel: 'High', proof: 'CCTV Monitoring Log', location: 'Security Room' },
                    { id: 'SCH-VIS-08', description: "Have a clear protocol for handling unauthorized individuals.", priority: 'High', riskLevel: 'High', proof: 'Security SOP', location: 'Security Office' },
                    { id: 'SCH-VIS-09', description: "Regularly check the perimeter fencing for any breaches.", priority: 'High', riskLevel: 'High', proof: 'Perimeter Inspection Log', location: 'Campus Boundary' },
                    { id: 'SCH-VIS-10', description: "Train security staff on polite but firm communication with visitors.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' }
                ]
            },
            {
                title: "Classroom Safety & Hygiene",
                department: "Academics/Admin",
                frequency: "Daily",
                role: "Teacher/Supervisor",
                icon: <ClipboardList />,
                summary: "Create a safe and healthy learning environment for students with this daily checklist for classroom readiness.",
                tasks: [
                    { id: 'SCH-CR-01', description: "Ensure the classroom is clean and well-ventilated before students arrive.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Classroom' },
                    { id: 'SCH-CR-02', description: "Check for any sharp edges or unsafe furniture.", priority: 'High', riskLevel: 'High', proof: 'Safety Inspection Log', location: 'Classroom' },
                    { id: 'SCH-CR-03', description: "Verify that fire extinguishers and first aid kits are accessible and not expired.", priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Log', location: 'Classroom' },
                    { id: 'SCH-CR-04', description: "Ensure electrical outlets are safe and not overloaded.", priority: 'High', riskLevel: 'High', proof: 'Electrical Safety Check', location: 'Classroom' },
                    { id: 'SCH-CR-05', description: "Maintain clear pathways and emergency exits.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Classroom' },
                    { id: 'SCH-CR-06', description: "Ensure hand sanitizers and soaps are available.", priority: 'High', riskLevel: 'Medium', proof: 'Supply Check', location: 'Classroom' },
                    { id: 'SCH-CR-07', description: "Report any maintenance issues immediately.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Request Log', location: 'Admin Office' },
                    { id: 'SCH-CR-08', description: "For labs, ensure all safety equipment (goggles, showers) is functional.", priority: 'High', riskLevel: 'High', proof: 'Lab Safety Log', location: 'Science Labs' },
                    { id: 'SCH-CR-09', description: "Supervise students during activities to prevent accidents.", priority: 'High', riskLevel: 'High', proof: 'Teacher Observation', location: 'Classroom' },
                    { id: 'SCH-CR-10', description: "Educate students on classroom safety rules.", priority: 'High', riskLevel: 'Medium', proof: 'Lesson Plan', location: 'Classroom' }
                ]
            },
            {
                title: "Fire Safety & Evacuation Drills",
                department: "Safety/Admin",
                frequency: "Quarterly",
                role: "Safety Officer",
                icon: <Siren />,
                summary: "Prepare your entire school to respond calmly and effectively to a fire emergency with this comprehensive checklist for drills and equipment maintenance.",
                tasks: [
                    { id: 'SCH-FIRE-01', description: "Inspect all fire extinguishers for charge and accessibility.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Inspection Log', location: 'Campus-wide' },
                    { id: 'SCH-FIRE-02', description: "Test fire alarms and smoke detectors.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Campus-wide' },
                    { id: 'SCH-FIRE-03', description: "Ensure all evacuation maps are clearly displayed in every classroom.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Classrooms' },
                    { id: 'SCH-FIRE-04', description: "Conduct a full-campus fire drill at least once per term.", priority: 'High', riskLevel: 'High', proof: 'Fire Drill Report', location: 'Campus-wide' },
                    { id: 'SCH-FIRE-05', description: "Time the evacuation and identify any bottlenecks.", priority: 'High', riskLevel: 'High', proof: 'Drill Timing Log', location: 'Assembly Point' },
                    { id: 'SCH-FIRE-06', description: "Train staff and students on the 'Stop, Drop, and Roll' technique.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'Classrooms' },
                    { id: 'SCH-FIRE-07', description: "Ensure all fire exits are unlocked and unobstructed during school hours.", priority: 'High', riskLevel: 'High', proof: 'Daily Exit Check', location: 'Campus-wide' },
                    { id: 'SCH-FIRE-08', description: "Appoint and train fire wardens for each floor/zone.", priority: 'High', riskLevel: 'High', proof: 'Fire Warden List', location: 'Admin Office' },
                    { id: 'SCH-FIRE-09', description: "Check that the fire department has easy access to the campus.", priority: 'High', riskLevel: 'High', proof: 'Access Route Audit', location: 'Perimeter' },
                    { id: 'SCH-FIRE-10', description: "Maintain all fire safety records for regulatory audits.", priority: 'High', riskLevel: 'High', proof: 'Compliance File', location: 'Admin Office' }
                ]
            },
            {
                title: "Playground & Sports Safety",
                department: "Sports/Admin",
                frequency: "Daily",
                role: "Physical Education Teacher",
                icon: <Trophy />,
                summary: "Prevent injuries during play and sports with this daily checklist for equipment inspection, ground maintenance, and supervision.",
                tasks: [
                    { id: 'SCH-PLAY-01', description: "Inspect all playground equipment (swings, slides) for any damage or sharp edges before use.", priority: 'High', riskLevel: 'High', proof: 'Playground Inspection Log', location: 'Playground' },
                    { id: 'SCH-PLAY-02', description: "Check the playground surface for any hazards (e.g., broken glass, stones).", priority: 'High', riskLevel: 'High', proof: 'Surface Inspection Log', location: 'Playground' },
                    { id: 'SCH-PLAY-03', description: "Ensure all sports equipment (e.g., goalposts, basketball hoops) is stable and secure.", priority: 'High', riskLevel: 'High', proof: 'Sports Equipment Log', location: 'Sports Field' },
                    { id: 'SCH-PLAY-04', description: "Verify that a first aid kit is readily available during all sports activities.", priority: 'High', riskLevel: 'High', proof: 'First Aid Kit Check', location: 'Sports Field' },
                    { id: 'SCH-PLAY-05', description: "Ensure adequate supervision of students at all times during play.", priority: 'High', riskLevel: 'High', proof: 'Supervisor Roster', location: 'Playground/Field' },
                    { id: 'SCH-PLAY-06', description: "Enforce rules for safe play and use of equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Teacher Observation', location: 'Playground/Field' },
                    { id: 'SCH-PLAY-07', description: "Ensure students are properly warmed up before any strenuous activity.", priority: 'High', riskLevel: 'Medium', proof: 'Warm-up Routine', location: 'Sports Field' },
                    { id: 'SCH-PLAY-08', description: "Check for and remove any standing water on play surfaces.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Playground/Field' },
                    { id: 'SCH-PLAY-09', description: "Report any equipment damage or safety concerns immediately.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Request', location: 'Admin Office' },
                    { id: 'SCH-PLAY-10', description: "Have a clear procedure for handling injuries.", priority: 'High', riskLevel: 'High', proof: 'Injury Response SOP', location: 'Admin Office' }
                ]
            },
            {
                title: "Cafeteria & Food Safety",
                department: "Cafeteria/Admin",
                frequency: "Daily",
                role: "Cafeteria Manager",
                icon: <Utensils />,
                summary: "Prevent foodborne illness and ensure compliance with food safety regulations with this HACCP-based checklist for school cafeterias.",
                tasks: [
                    { id: 'SCH-FOOD-01', description: "Check and log temperatures of refrigerators and freezers.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Kitchen' },
                    { id: 'SCH-FOOD-02', description: "Ensure all food handlers practice proper handwashing and wear hairnets/gloves.", priority: 'High', riskLevel: 'High', proof: 'Hygiene Audit', location: 'Kitchen' },
                    { id: 'SCH-FOOD-03', description: "Verify that raw and cooked foods are stored separately to prevent cross-contamination.", priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Kitchen' },
                    { id: 'SCH-FOOD-04', description: "Use a calibrated thermometer to check final cooking temperatures of all hot meals.", priority: 'High', riskLevel: 'High', proof: 'Cooking Temp Log', location: 'Kitchen' },
                    { id: 'SCH-FOOD-05', description: "Ensure all serving surfaces and utensils are sanitized before service.", priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Cafeteria' },
                    { id: 'SCH-FOOD-06', description: "Check expiry dates of all ingredients and discard any expired items.", priority: 'High', riskLevel: 'High', proof: 'Expiry Check Log', location: 'Storeroom' },
                    { id: 'SCH-FOOD-07', description: "Maintain a clean and pest-free kitchen and dining area.", priority: 'High', riskLevel: 'High', proof: 'Pest Control Log', location: 'Kitchen/Cafeteria' },
                    { id: 'SCH-FOOD-08', description: "Ensure all food is sourced from licensed and approved vendors.", priority: 'High', riskLevel: 'High', proof: 'Vendor License File', location: 'Admin Office' },
                    { id: 'SCH-FOOD-09', description: "Have a clear system for managing student food allergies.", priority: 'High', riskLevel: 'High', proof: 'Allergy Management Plan', location: 'Cafeteria' },
                    { id: 'SCH-FOOD-10', description: "Log all food samples for a 48-hour period as per regulations.", priority: 'High', riskLevel: 'High', proof: 'Food Sample Log', location: 'Kitchen' }
                ]
            },
            {
                title: "New Admission & Documentation",
                department: "Admissions/Admin",
                frequency: "Per Admission",
                role: "Admissions Officer",
                icon: <BookOpen />,
                summary: "Ensure a smooth and compliant admission process for every new student with this checklist for documentation, fee collection, and record creation.",
                tasks: [
                    { id: 'SCH-ADM-01', description: "Collect and verify all required documents (birth certificate, previous school records, address proof).", priority: 'High', riskLevel: 'High', proof: 'Document Checklist', location: 'Admissions Office' },
                    { id: 'SCH-ADM-02', description: "Create a new student file, both physical and in the school management system.", priority: 'High', riskLevel: 'Medium', proof: 'Student File/System Entry', location: 'Admin Office' },
                    { id: 'SCH-ADM-03', description: "Process admission fees and issue a receipt.", priority: 'High', riskLevel: 'High', proof: 'Fee Receipt', location: 'Accounts Office' },
                    { id: 'SCH-ADM-04', description: "Assign the student to a class and section.", priority: 'High', riskLevel: 'Medium', proof: 'Class Roster', location: 'Admin Office' },
                    { id: 'SCH-ADM-05', description: "Provide parents with the school handbook, uniform details, and academic calendar.", priority: 'High', riskLevel: 'Low', proof: 'Welcome Kit Issuance Log', location: 'Admissions Office' },
                    { id: 'SCH-ADM-06', description: "Collect emergency contact and medical information.", priority: 'High', riskLevel: 'High', proof: 'Emergency Form', location: 'Student File' },
                    { id: 'SCH-ADM-07', description: "Arrange for a student ID card.", priority: 'High', riskLevel: 'Medium', proof: 'ID Card Request', location: 'Admin Office' },
                    { id: 'SCH-ADM-08', description: "Brief parents on school policies and communication channels.", priority: 'Medium', riskLevel: 'Low', proof: 'Parent Orientation Log', location: 'Admissions Office' },
                    { id: 'SCH-ADM-09', description: "Add the new student to the transport roster if applicable.", priority: 'High', riskLevel: 'Medium', proof: 'Transport Roster', location: 'Transport Office' },
                    { id: 'SCH-ADM-10', description: "Ensure all admission data is entered correctly for government reporting.", priority: 'High', riskLevel: 'High', proof: 'Data Entry Audit', location: 'Admin Office' }
                ]
            },
            {
                title: "Student Health & Wellness",
                department: "Medical/Admin",
                frequency: "Ongoing",
                role: "School Nurse",
                icon: <HeartPulse />,
                summary: "A protocol for managing student health, from daily first aid and medication administration to handling medical emergencies.",
                tasks: [
                    { id: 'SCH-HW-01', description: "Maintain an updated medical record for every student, including allergies and chronic conditions.", priority: 'High', riskLevel: 'High', proof: 'Student Medical File', location: 'Infirmary' },
                    { id: 'SCH-HW-02', description: "Administer medication to students only with written parental consent and a doctor's prescription.", priority: 'High', riskLevel: 'High', proof: 'Medication Administration Log', location: 'Infirmary' },
                    { id: 'SCH-HW-03', description: "Log all student visits to the infirmary, noting the complaint and action taken.", priority: 'High', riskLevel: 'Medium', proof: 'Infirmary Logbook', location: 'Infirmary' },
                    { id: 'SCH-HW-04', description: "Contact parents immediately in case of any significant injury or illness.", priority: 'High', riskLevel: 'High', proof: 'Parent Communication Log', location: 'Infirmary' },
                    { id: 'SCH-HW-05', description: "Ensure the infirmary is clean, and all medical supplies are stocked and not expired.", priority: 'High', riskLevel: 'High', proof: 'Supply & Expiry Log', location: 'Infirmary' },
                    { id: 'SCH-HW-06', description: "Conduct regular health check-ups for students.", priority: 'Medium', riskLevel: 'Low', proof: 'Health Check-up Schedule', location: 'Infirmary' },
                    { id: 'SCH-HW-07', description: "Have a clear protocol for handling medical emergencies, including ambulance access.", priority: 'High', riskLevel: 'High', proof: 'Emergency SOP', location: 'Admin Office' },
                    { id: 'SCH-HW-08', description: "Promote health and hygiene awareness among students.", priority: 'Medium', riskLevel: 'Low', proof: 'Awareness Campaign Plan', location: 'Campus-wide' },
                    { id: 'SCH-HW-09', description: "Provide first aid support during sports events and excursions.", priority: 'High', riskLevel: 'High', proof: 'Event Duty Roster', location: 'Event Location' },
                    { id: 'SCH-HW-10', description: "Manage and report any communicable disease outbreaks as per health department guidelines.", priority: 'High', riskLevel: 'High', proof: 'Outbreak Report', location: 'Admin Office' }
                ]
            },
            {
                title: "Parent-Teacher Meeting Coordination",
                department: "Academics/Admin",
                frequency: "Per PTM",
                role: "Academic Coordinator",
                icon: <Users />,
                summary: "Run smooth, efficient, and productive Parent-Teacher Meetings with this planning and execution checklist.",
                tasks: [
                    { id: 'SCH-PTM-01', description: "Announce the PTM date and time to parents well in advance.", priority: 'High', riskLevel: 'Low', proof: 'Communication Circular', location: 'Admin Office' },
                    { id: 'SCH-PTM-02', description: "Prepare and send student progress reports to teachers before the PTM.", priority: 'High', riskLevel: 'Medium', proof: 'Report Distribution Log', location: 'Admin Office' },
                    { id: 'SCH-PTM-03', description: "Set up the venue with adequate seating and clear signage for each classroom.", priority: 'High', riskLevel: 'Medium', proof: 'Venue Setup Check', location: 'PTM Venue' },
                    { id: 'SCH-PTM-04', description: "Create a time-slot system to manage parent flow and reduce waiting times.", priority: 'High', riskLevel: 'Medium', proof: 'Time-slot Schedule', location: 'Admissions Office' },
                    { id: 'SCH-PTM-05', description: "Ensure all teachers have the necessary materials (report cards, attendance records).", priority: 'High', riskLevel: 'Medium', proof: 'Teacher Material Checklist', location: 'Classrooms' },
                    { id: 'SCH-PTM-06', description: "Arrange for administrative staff to be present to handle fee payments or other queries.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Roster', location: 'PTM Venue' },
                    { id: 'SCH-PTM-07', description: "Collect feedback from parents about the school and their child's progress.", priority: 'High', riskLevel: 'Medium', proof: 'Parent Feedback Forms', location: 'PTM Venue' },
                    { id: 'SCH-PTM-08', description: "Document key discussion points for each student during the PTM.", priority: 'High', riskLevel: 'Medium', proof: 'Teacher\'s PTM Log', location: 'Classrooms' },
                    { id: 'SCH-PTM-09', description: "Have a clear process for parents who need to meet the Principal or Coordinator.", priority: 'High', riskLevel: 'Medium', proof: 'Escalation Protocol', location: 'Admin Office' },
                    { id: 'SCH-PTM-10', description: "Follow up on any action items or concerns raised during the PTMs.", priority: 'High', riskLevel: 'High', proof: 'Action Taken Report', location: 'Admin Office' }
                ]
            }
        ]
    },
    {
        id: 'university_college_ops',
        title: "University & College Ops",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Education",
        description: "A comprehensive toolkit for higher education administrators to manage campus safety, academic integrity, and student welfare.",
        icon: <GraduationCap />,
        badgeText: "Higher Ed",
        badgeVariant: "accent",
        whoIsItFor: ["University Registrars", "Deans of Administration", "Heads of Student Affairs", "Campus Safety Directors"],
        sampleItems: [
            { text: "Ensure 'Lab Safety & EHS Compliance' (OSHA, OECD GLP).", icon: <TestTube /> },
            { text: "Protect academic integrity with an 'Exam Paper Security' protocol.", icon: <FileLock /> },
            { text: "Manage 'Hostel Safety & Security' for student welfare.", icon: <Home /> },
            { text: "Implement an 'Anti-Ragging & Student Grievance' process.", icon: <Users /> },
        ],
        checklists: [
            {
                title: "Lab Safety & EHS Compliance",
                department: "Science/Engineering",
                frequency: "Weekly",
                role: "Lab Supervisor",
                icon: <TestTube />,
                summary: "Ensure a safe and compliant environment in all science and engineering labs, meeting OSHA and OECD GLP standards.",
                tasks: [
                    { id: 'UNI-LAB-01', description: "Verify all safety equipment (showers, eyewash stations, fire extinguishers) is functional and accessible.", priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Log', location: 'Lab' },
                    { id: 'UNI-LAB-02', description: "Check chemical inventory and ensure all substances are correctly labeled and stored.", priority: 'High', riskLevel: 'High', proof: 'Chemical Inventory Log', location: 'Lab' },
                    { id: 'UNI-LAB-03', description: "Ensure all lab personnel are using appropriate Personal Protective Equipment (PPE).", priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Lab' },
                    { id: 'UNI-LAB-04', description: "Maintain a log of all equipment calibration and maintenance.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Log', location: 'Lab' },
                    { id: 'UNI-LAB-05', description: "Dispose of chemical and biological waste according to regulations.", priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Lab' }
                ]
            },
            {
                title: "Exam Paper Security & Confidentiality",
                department: "Examinations",
                frequency: "Per Exam",
                role: "Controller of Examinations",
                icon: <FileLock />,
                summary: "Protect academic integrity with a strict chain-of-custody protocol for confidential exam materials.",
                tasks: [
                    { id: 'UNI-EXAM-01', description: "Ensure exam papers are stored in a locked, secure room with restricted access.", priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Exam Control Room' },
                    { id: 'UNI-EXAM-02', description: "Use a two-person integrity rule for handling and transporting sealed exam packets.", priority: 'High', riskLevel: 'High', proof: 'Movement Log', location: 'Exam Halls' },
                    { id: 'UNI-EXAM-03', description: "Log the distribution of exam papers to each invigilator.", priority: 'High', riskLevel: 'High', proof: 'Distribution Log', location: 'Exam Control Room' },
                    { id: 'UNI-EXAM-04', description: "Supervise the destruction of any unused or surplus exam papers.", priority: 'High', riskLevel: 'High', proof: 'Destruction Certificate', location: 'Secure Area' },
                    { id: 'UNI-EXAM-05', description: "Ensure digital exam files are encrypted and access is logged.", priority: 'High', riskLevel: 'High', proof: 'Digital Access Log', location: 'Server' }
                ]
            },
            {
                title: "Hostel Safety & Security",
                department: "Student Affairs/Security",
                frequency: "Weekly",
                role: "Hostel Warden",
                icon: <Home />,
                summary: "Ensure a safe and secure living environment for all resident students.",
                tasks: [
                    { id: 'UNI-HOST-01', description: "Conduct weekly inspections of all floors for fire safety compliance (clear corridors, functional alarms).", priority: 'High', riskLevel: 'High', proof: 'Fire Safety Log', location: 'Hostel' },
                    { id: 'UNI-HOST-02', description: "Check visitor logs and enforce visiting hour regulations.", priority: 'High', riskLevel: 'Medium', proof: 'Visitor Log', location: 'Hostel Entrance' },
                    { id: 'UNI-HOST-03', description: "Inspect electrical fittings and prohibit unauthorized appliances in rooms.", priority: 'High', riskLevel: 'High', proof: 'Room Inspection Log', location: 'Hostel Rooms' },
                    { id: 'UNI-HOST-04', description: "Ensure all security personnel are on duty and alert.", priority: 'High', riskLevel: 'High', proof: 'Duty Roster Check', location: 'Hostel' },
                    { id: 'UNI-HOST-05', description: "Verify that all hostel entry and exit points are secure.", priority: 'High', riskLevel: 'High', proof: 'Access Control Audit', location: 'Hostel' }
                ]
            },
            {
                title: "Anti-Ragging & Student Grievance",
                department: "Student Affairs",
                frequency: "Monthly",
                role: "Dean of Student Affairs",
                icon: <Users />,
                summary: "A proactive framework to prevent ragging and address student grievances effectively.",
                tasks: [
                    { id: 'UNI-RAG-01', description: "Ensure the Anti-Ragging Committee and Squad are constituted as per UGC regulations.", priority: 'High', riskLevel: 'High', proof: 'Committee Charter', location: 'Office' },
                    { id: 'UNI-RAG-02', description: "Conduct surprise visits to hostels and common areas.", priority: 'High', riskLevel: 'High', proof: 'Visit Log', location: 'Campus' },
                    { id: 'UNI-RAG-03', description: "Ensure anti-ragging posters with helpline numbers are displayed prominently.", priority: 'High', riskLevel: 'Medium', proof: 'Display Audit', location: 'Campus' },
                    { id: 'UNI-RAG-04', description: "Review and act upon any complaints received through the grievance redressal system.", priority: 'High', riskLevel: 'High', proof: 'Grievance Log', location: 'Office' },
                    { id: 'UNI-RAG-05', description: "Conduct awareness workshops and collect anti-ragging affidavits from all students.", priority: 'High', riskLevel: 'High', proof: 'Affidavit File', location: 'Office' }
                ]
            }
        ]
    },
    // --- Industrial & Transport ---
    {
        id: 'manufacturing_operations_ehs_pack',
        title: "Manufacturing & EHS Pack",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Industrial & Transport",
        description: "An ISO 45001-aligned toolkit for plant heads and safety officers to ensure a safe, compliant, and efficient manufacturing environment.",
        icon: <Factory />,
        bestseller: true,
        whoIsItFor: ["Plant Heads", "EHS Directors", "Production Managers", "Maintenance Heads", "Quality Control Managers"],
        sampleItems: [
            { text: "Implement a life-saving 'Lock-Out Tag-Out (LOTO)' protocol.", icon: <Lock /> },
            { text: "Manage high-risk tasks with a 'Permit-to-Work' system.", icon: <FileCheck /> },
            { text: "Ensure 'Machine Guarding & Operator Safety'.", icon: <Shield /> },
            { text: "Includes checklists for 'Preventive Maintenance' and 'Shift Handover'.", icon: <Wrench /> },
            { text: "Manage 'Contractor Safety' to reduce third-party risk.", icon: <HardHat /> },
        ],
        checklists: [
            {
                title: "Lock-Out Tag-Out (LOTO)",
                department: "EHS/Maintenance",
                frequency: "Per Task",
                role: "Maintenance Technician",
                icon: <Lock />,
                summary: "A life-saving protocol to ensure machinery is properly shut off and de-energized during maintenance or repair.",
                tasks: [
                    { id: 'MFG-LOTO-01', description: "Identify and isolate all energy sources for the equipment.", priority: 'High', riskLevel: 'High', proof: 'Energy Source Log', location: 'Equipment' },
                    { id: 'MFG-LOTO-02', description: "Apply locks and tags to all isolation points.", priority: 'High', riskLevel: 'High', proof: 'Photo of Lock/Tag', location: 'Equipment' },
                    { id: 'MFG-LOTO-03', description: "Verify that the equipment is de-energized by trying to start it.", priority: 'High', riskLevel: 'High', proof: 'Zero Energy Check Log', location: 'Equipment' },
                    { id: 'MFG-LOTO-04', description: "Each person working on the equipment must apply their own lock.", priority: 'High', riskLevel: 'High', proof: 'Lock Count Verification', location: 'Equipment' },
                    { id: 'MFG-LOTO-05', description: "Remove locks and tags only after the work is complete and all personnel are clear.", priority: 'High', riskLevel: 'High', proof: 'Removal Log', location: 'Equipment' }
                ]
            },
            {
                title: "Permit-to-Work System",
                department: "EHS/Operations",
                frequency: "Per High-Risk Task",
                role: "Safety Officer",
                icon: <FileCheck />,
                summary: "A formal system for authorizing and managing high-risk activities like hot work, confined space entry, and working at height.",
                tasks: [
                    { id: 'MFG-PTW-01', description: "Issue a specific permit for each high-risk task.", priority: 'High', riskLevel: 'High', proof: 'Permit Document', location: 'Safety Office' },
                    { id: 'MFG-PTW-02', description: "Conduct a job safety analysis (JSA) before issuing the permit.", priority: 'High', riskLevel: 'High', proof: 'JSA Form', location: 'Work Area' },
                    { id: 'MFG-PTW-03', description: "Verify that all required safety precautions are in place before work begins.", priority: 'High', riskLevel: 'High', proof: 'Pre-work Checklist', location: 'Work Area' },
                    { id: 'MFG-PTW-04', description: "Ensure the permit is displayed at the work location.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Work Area' },
                    { id: 'MFG-PTW-05', description: "Close out the permit once the work is completed and the area is safe.", priority: 'High', riskLevel: 'High', proof: 'Permit Closure Form', location: 'Safety Office' }
                ]
            },
            {
                title: "Machine Guarding & Operator Safety",
                department: "Production/EHS",
                frequency: "Daily",
                role: "Shift Supervisor",
                icon: <Shield />,
                summary: "Prevent amputations and other severe injuries with daily checks to ensure all machine guards are in place and emergency stops are functional.",
                tasks: [
                    { id: 'MFG-MG-01', description: "Verify that all guards and safety shields are in place and not damaged.", priority: 'High', riskLevel: 'High', proof: 'Guard Inspection Log', location: 'Production Floor' },
                    { id: 'MFG-MG-02', description: "Test all emergency stop buttons and safety interlocks.", priority: 'High', riskLevel: 'High', proof: 'E-Stop Test Log', location: 'Production Floor' },
                    { id: 'MFG-MG-03', description: "Ensure operators are trained on the specific safety features of their machine.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'MFG-MG-04', description: "Check that the area around machinery is clear of trip hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Log', location: 'Production Floor' },
                    { id: 'MFG-MG-05', description: "Ensure operators are not wearing loose clothing or jewelry.", priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Production Floor' }
                ]
            },
            {
                title: "Preventive Maintenance",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Engineer",
                icon: <Wrench />,
                summary: "Move from reactive repairs to proactive maintenance to increase uptime and extend the life of your critical machinery.",
                tasks: [
                    { id: 'MFG-PM-01', description: "Follow the weekly maintenance schedule for all critical equipment.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Schedule', location: 'Maintenance Office' },
                    { id: 'MFG-PM-02', description: "Check and log lubrication levels, hydraulic fluid, and coolant.", priority: 'High', riskLevel: 'Medium', proof: 'Fluid Level Log', location: 'Equipment' },
                    { id: 'MFG-PM-03', description: "Inspect belts, chains, and gears for wear and tear.", priority: 'High', riskLevel: 'High', proof: 'Wear and Tear Report', location: 'Equipment' },
                    { id: 'MFG-PM-04', description: "Calibrate all sensors and measuring instruments.", priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Equipment' },
                    { id: 'MFG-PM-05', description: "Maintain a log of all maintenance activities and parts used.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Logbook', location: 'Maintenance Office' }
                ]
            },
            {
                title: "Shift Handover",
                department: "Production",
                frequency: "Per Shift",
                role: "Shift Supervisor",
                icon: <Users />,
                summary: "Ensure a seamless and safe transition between shifts with a structured handover process that covers production status, maintenance issues, and safety concerns.",
                tasks: [
                    { id: 'MFG-SHIFT-01', description: "Review the production status and any quality issues from the outgoing shift.", priority: 'High', riskLevel: 'Medium', proof: 'Shift Logbook', location: 'Supervisor Office' },
                    { id: 'MFG-SHIFT-02', description: "Discuss any ongoing maintenance or safety issues.", priority: 'High', riskLevel: 'High', proof: 'Shift Logbook', location: 'Supervisor Office' },
                    { id: 'MFG-SHIFT-03', description: "Conduct a joint walkthrough of the production floor.", priority: 'High', riskLevel: 'Medium', proof: 'Walkthrough Log', location: 'Production Floor' },
                    { id: 'MFG-SHIFT-04', description: "Verify the status of any active work permits.", priority: 'High', riskLevel: 'High', proof: 'Permit Review', location: 'Supervisor Office' },
                    { id: 'MFG-SHIFT-05', description: "Both incoming and outgoing supervisors must sign the handover log.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Handover Log', location: 'Supervisor Office' }
                ]
            }
        ]
    },
    {
        id: 'logistics_warehouse_pack',
        title: "Logistics & Warehouse Operations Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Industrial & Transport",
        description: "An ISO 9001-aligned toolkit for warehouse managers to drive accuracy, efficiency, and safety in all aspects of logistics operations.",
        icon: <Warehouse />,
        badgeText: "Bestseller",
        badgeVariant: "default",
        bestseller: true,
        whoIsItFor: ["Warehouse Managers", "Logistics Heads", "Supply Chain Directors", "E-commerce Operations Managers"],
        sampleItems: [
            { text: "Achieve 99%+ inventory accuracy with a 'Cycle Counting' SOP.", icon: <Barcode /> },
            { text: "Implement a 'Goods Receiving & GRN' process to prevent shortages.", icon: <PackageCheck /> },
            { text: "Ensure 'Forklift & MHE Safety' with daily operator checklists.", icon: <HardHat /> },
            { text: "Master '5S for Warehouse' for ultimate organization.", icon: <Recycle /> },
            { text: "Prevent costly errors with a 'Maker-Checker' data entry protocol.", icon: <FileCheck /> },
        ],
        checklists: [
            {
                title: "Cycle Counting & Inventory Accuracy",
                department: "Inventory",
                frequency: "Daily",
                role: "Inventory Controller",
                icon: <Barcode />,
                summary: "Stop losing money to lost stock. This checklist implements a perpetual inventory counting system to achieve over 99% stock accuracy.",
                tasks: [
                    { id: 'LOG-CC-01', description: "Generate a daily list of SKUs for cycle counting based on ABC analysis.", priority: 'High', riskLevel: 'High', proof: 'Cycle Count Plan', location: 'System' },
                    { id: 'LOG-CC-02', description: "Physically count the selected SKUs without referring to the system stock.", priority: 'High', riskLevel: 'High', proof: 'Count Sheet', location: 'Warehouse' },
                    { id: 'LOG-CC-03', description: "Compare the physical count with the system stock and investigate any discrepancies.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Office' },
                    { id: 'LOG-CC-04', description: "Adjust system stock levels with proper authorization for any verified discrepancies.", priority: 'High', riskLevel: 'High', proof: 'Adjustment Log', location: 'System' },
                    { id: 'LOG-CC-05', description: "Analyze the root cause of discrepancies to prevent recurrence.", priority: 'High', riskLevel: 'High', proof: 'Root Cause Analysis Report', location: 'Office' }
                ]
            },
            {
                title: "Goods Receiving & GRN Process",
                department: "Inbound Logistics",
                frequency: "Per Shipment",
                role: "Receiving Clerk",
                icon: <PackageCheck />,
                summary: "Ensure you get exactly what you paid for. This protocol for receiving goods prevents shortages and damages from entering your supply chain.",
                tasks: [
                    { id: 'LOG-GRN-01', description: "Verify the incoming shipment against the purchase order.", priority: 'High', riskLevel: 'High', proof: 'PO vs. Invoice Check', location: 'Receiving Dock' },
                    { id: 'LOG-GRN-02', description: "Inspect for any visible damage to the shipment.", priority: 'High', riskLevel: 'High', proof: 'Damage Report with Photos', location: 'Receiving Dock' },
                    { id: 'LOG-GRN-03', description: "Count and verify the quantity of items received.", priority: 'High', riskLevel: 'High', proof: 'Signed Delivery Challan', location: 'Receiving Dock' },
                    { id: 'LOG-GRN-04', description: "Generate a Goods Received Note (GRN) in the system.", priority: 'High', riskLevel: 'Medium', proof: 'GRN in System', location: 'System' },
                    { id: 'LOG-GRN-05', description: "Move the received goods to the designated staging or storage area.", priority: 'High', riskLevel: 'Medium', proof: 'System Location Update', location: 'Warehouse' }
                ]
            },
            {
                title: "Forklift & MHE Safety",
                department: "Safety/Operations",
                frequency: "Daily (Pre-shift)",
                role: "Forklift Operator",
                icon: <HardHat />,
                summary: "Prevent serious accidents with a mandatory pre-use checklist for all Material Handling Equipment (MHE), including forklifts and pallet jacks.",
                tasks: [
                    { id: 'LOG-MHE-01', description: "Check tires, horn, lights, and brakes.", priority: 'High', riskLevel: 'High', proof: 'Pre-use Checklist', location: 'MHE Parking' },
                    { id: 'LOG-MHE-02', description: "Inspect forks for cracks or damage.", priority: 'High', riskLevel: 'High', proof: 'Pre-use Checklist', location: 'MHE Parking' },
                    { id: 'LOG-MHE-03', description: "Verify fluid levels (hydraulic, battery).", priority: 'High', riskLevel: 'Medium', proof: 'Pre-use Checklist', location: 'MHE Parking' },
                    { id: 'LOG-MHE-04', description: "Report any defects immediately and do not operate the equipment.", priority: 'High', riskLevel: 'High', proof: 'Defect Report', location: 'Supervisor Office' },
                    { id: 'LOG-MHE-05', description: "Ensure operators have a valid license and have completed training.", priority: 'High', riskLevel: 'High', proof: 'License & Training Record', location: 'HR' }
                ]
            },
            {
                title: "5S for Warehouse Organization",
                department: "Operations",
                frequency: "Weekly",
                role: "Warehouse Supervisor",
                icon: <Recycle />,
                summary: "Implement the 5S methodology (Sort, Set in Order, Shine, Standardize, Sustain) to create a hyper-efficient and organized warehouse.",
                tasks: [
                    { id: 'LOG-5S-01', description: "Sort: Remove all unnecessary items from the warehouse floor.", priority: 'High', riskLevel: 'Medium', proof: 'Red Tag Area Log', location: 'Warehouse' },
                    { id: 'LOG-5S-02', description: "Set in Order: Ensure every item and location has a clear, designated label.", priority: 'High', riskLevel: 'Medium', proof: 'Labeling Audit', location: 'Warehouse' },
                    { id: 'LOG-5S-03', description: "Shine: Conduct a weekly cleaning of all aisles, racks, and equipment.", priority: 'High', riskLevel: 'Low', proof: 'Cleaning Log', location: 'Warehouse' },
                    { id: 'LOG-5S-04', description: "Standardize: Create visual standards for how areas should be maintained.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Standards Document', location: 'Warehouse' },
                    { id: 'LOG-5S-05', description: "Sustain: Perform a weekly 5S audit and display the score.", priority: 'High', riskLevel: 'Medium', proof: '5S Audit Scorecard', location: 'Notice Board' }
                ]
            },
            {
                title: "Maker-Checker for Critical Data Entry",
                department: "Data Management",
                frequency: "Per Entry",
                role: "Data Entry Operator",
                icon: <FileCheck />,
                summary: "Prevent costly errors in shipping and inventory with a two-person 'maker-checker' protocol for all new SKU creations and master data updates.",
                tasks: [
                    { id: 'LOG-MC-01', description: "The 'Maker' enters the new product data (e.g., dimensions, weight, HSN code).", priority: 'High', riskLevel: 'High', proof: 'System Entry Log (Maker)', location: 'System' },
                    { id: 'LOG-MC-02', description: "A second person, the 'Checker', independently verifies the data against the source document.", priority: 'High', riskLevel: 'High', proof: 'System Entry Log (Checker)', location: 'System' },
                    { id: 'LOG-MC-03', description: "The 'Checker' approves or rejects the entry in the system.", priority: 'High', riskLevel: 'High', proof: 'Approval/Rejection Log', location: 'System' },
                    { id: 'LOG-MC-04', description: "The product cannot go live until it has been approved by the 'Checker'.", priority: 'High', riskLevel: 'High', proof: 'System Status', location: 'System' },
                    { id: 'LOG-MC-05', description: "Maintain a log of all data entry errors found during the checking process.", priority: 'High', riskLevel: 'Medium', proof: 'Error Log', location: 'Office' }
                ]
            }
        ]
    },
    // --- Entertainment & Events ---
    {
        id: 'film_production_pack',
        title: "Film & OTT Production Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A comprehensive compliance and operational toolkit for film and OTT production houses to manage everything from pre-production legal to on-set safety.",
        icon: <Film />,
        whoIsItFor: ["Producers", "Line Producers", "Production Managers", "Heads of Production"],
        sampleItems: [
            { text: "Secure your project with a 'Pre-production Legal & Clearances' checklist.", icon: <FileLock /> },
            { text: "Ensure on-set safety with 'Stunt & High-Risk Scene' protocols.", icon: <Siren /> },
            { text: "Manage your budget with 'Vendor Billing & Invoice Auditing'.", icon: <DollarSign /> },
            { text: "Protect your IP with a 'Data Security & NDA Compliance' SOP.", icon: <Lock /> },
        ],
        checklists: [
            {
                title: "Pre-production Legal & Clearances",
                department: "Legal/Production",
                frequency: "Pre-production",
                role: "Line Producer",
                icon: <FileLock />,
                summary: "Build a solid legal foundation for your project before you shoot a single frame. This checklist covers all critical clearances, from script and title to life rights and E&O insurance.",
                tasks: [
                    { id: 'FILM-LEGAL-01', description: "Clear and register the film title.", priority: 'High', riskLevel: 'High', proof: 'Title Registration Certificate', location: 'Legal File' },
                    { id: 'FILM-LEGAL-02', description: "Secure chain-of-title for the script (writer agreements, source material rights).", priority: 'High', riskLevel: 'High', proof: 'Writer Agreements', location: 'Legal File' },
                    { id: 'FILM-LEGAL-03', description: "Obtain life rights agreements for any real people depicted.", priority: 'High', riskLevel: 'High', proof: 'Life Rights Agreement', location: 'Legal File' },
                    { id: 'FILM-LEGAL-04', description: "Secure Errors & Omissions (E&O) insurance.", priority: 'High', riskLevel: 'High', proof: 'E&O Insurance Policy', location: 'Legal File' },
                    { id: 'FILM-LEGAL-05', description: "Ensure all cast and key crew have signed their contracts.", priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'Production Office' }
                ]
            },
            {
                title: "On-Set Safety (EHS)",
                department: "Production/Safety",
                frequency: "Daily",
                role: "First AD/Safety Officer",
                icon: <Siren />,
                summary: "A daily checklist to ensure a safe working environment for all cast and crew on set, covering electrical, fire, and general safety.",
                tasks: [
                    { id: 'FILM-SAFE-01', description: "Conduct a daily safety briefing with all cast and crew.", priority: 'High', riskLevel: 'High', proof: 'Safety Meeting Log', location: 'Set' },
                    { id: 'FILM-SAFE-02', description: "Ensure all electrical cables are properly secured and not creating trip hazards.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Set' },
                    { id: 'FILM-SAFE-03', description: "Verify that fire extinguishers are accessible and staff know how to use them.", priority: 'High', riskLevel: 'High', proof: 'Fire Safety Check', location: 'Set' },
                    { id: 'FILM-SAFE-04', description: "Have a qualified medic and first aid kit on set at all times.", priority: 'High', riskLevel: 'High', proof: 'Medic Presence Log', location: 'Set' },
                    { id: 'FILM-SAFE-05', description: "Ensure clear access to all emergency exits.", priority: 'High', riskLevel: 'High', proof: 'Exit Path Check', location: 'Set' }
                ]
            },
            {
                title: "Stunt & High-Risk Scene Protocol",
                department: "Production/Stunts",
                frequency: "Per Stunt",
                role: "Stunt Coordinator",
                icon: <Car />,
                summary: "A rigorous protocol for planning and executing stunts and other high-risk scenes to ensure the safety of performers and crew.",
                tasks: [
                    { id: 'FILM-STUNT-01', description: "Conduct a specific risk assessment for the stunt.", priority: 'High', riskLevel: 'High', proof: 'Stunt Risk Assessment Form', location: 'Production Office' },
                    { id: 'FILM-STUNT-02', description: "Ensure all performers involved are properly trained and rehearsed.", priority: 'High', riskLevel: 'High', proof: 'Rehearsal Log', location: 'Set' },
                    { id: 'FILM-STUNT-03', description: "Have a dedicated ambulance and medical team on standby.", priority: 'High', riskLevel: 'High', proof: 'Ambulance Standby Confirmation', location: 'Set' },
                    { id: 'FILM-STUNT-04', description: "Verify all safety equipment (harnesses, pads) is certified and in good condition.", priority: 'High', riskLevel: 'High', proof: 'Equipment Inspection Log', location: 'Set' },
                    { id: 'FILM-STUNT-05', description: "Clear the set of all non-essential personnel before the stunt.", priority: 'High', riskLevel: 'High', proof: 'Set Clearance Log', location: 'Set' }
                ]
            },
            {
                title: "Data Security & NDA Compliance",
                department: "Post-Production/Legal",
                frequency: "Ongoing",
                role: "Post-Production Supervisor",
                icon: <Lock />,
                summary: "Protect your film's valuable intellectual property, from script to final cut, with this checklist for data security and NDA management.",
                tasks: [
                    { id: 'FILM-DATA-01', description: "Ensure all cast, crew, and vendors have signed a Non-Disclosure Agreement (NDA).", priority: 'High', riskLevel: 'High', proof: 'Signed NDA Folder', location: 'Legal File' },
                    { id: 'FILM-DATA-02', description: "Use watermarked scripts and dailies with individual names.", priority: 'High', riskLevel: 'High', proof: 'Sample Watermarked Script', location: 'System' },
                    { id: 'FILM-DATA-03', description: "Restrict access to sensitive footage to authorized personnel only.", priority: 'High', riskLevel: 'High', proof: 'Access Control Logs', location: 'Post-production Suite' },
                    { id: 'FILM-DATA-04', description: "Use secure, encrypted platforms for sharing files with vendors.", priority: 'High', riskLevel: 'High', proof: 'File Sharing Policy', location: 'IT' },
                    { id: 'FILM-DATA-05', description: "Wipe data from all rented equipment before returning it.", priority: 'High', riskLevel: 'High', proof: 'Data Wipe Certificate', location: 'IT' }
                ]
            },
            {
                title: "Vendor Billing & Invoice Auditing",
                department: "Accounts/Production",
                frequency: "Weekly",
                role: "Production Accountant",
                icon: <DollarSign />,
                summary: "Prevent budget overruns with a systematic process for auditing and approving all vendor invoices, ensuring you only pay for what you've received.",
                tasks: [
                    { id: 'FILM-BILL-01', description: "Match every invoice against a corresponding Purchase Order (PO) and Goods Received Note (GRN).", priority: 'High', riskLevel: 'High', proof: 'Three-way Match Log', location: 'Accounts Office' },
                    { id: 'FILM-BILL-02', description: "Verify that all costs are within the approved budget.", priority: 'High', riskLevel: 'High', proof: 'Budget vs. Actual Report', location: 'Accounts Office' },
                    { id: 'FILM-BILL-03', description: "Get approval from the relevant Head of Department before processing payment.", priority: 'High', riskLevel: 'High', proof: 'Signed Invoice', location: 'Accounts Office' },
                    { id: 'FILM-BILL-04', description: "Track all payments in a centralized accounting system.", priority: 'High', riskLevel: 'Medium', proof: 'Accounting Software Log', location: 'System' },
                    { id: 'FILM-BILL-05', description: "Reconcile vendor statements monthly to ensure there are no discrepancies.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Accounts Office' }
                ]
            }
        ]
    },
    {
        id: 'ott_platform_pack',
        title: "OTT Platform Operations Pack",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A comprehensive toolkit for OTT platform managers to ensure content compliance, platform stability, and a seamless user experience.",
        icon: <MonitorPlay />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["CTOs", "Heads of Content", "Product Managers", "Heads of Ad-Ops", "SRE Leads"],
        sampleItems: [
            { text: "Ensure platform stability with 'Live Event & Infrastructure Readiness'.", icon: <Siren /> },
            { text: "Manage 'Content Ingestion, QC & Metadata'.", icon: <Video /> },
            { text: "Comply with global standards using the 'Content Compliance & Standards' checklist.", icon: <FileCheck /> },
            { text: "Protect your service with 'Cybersecurity & DRM'.", icon: <Shield /> },
        ],
        checklists: [
            {
                title: "Live Event & Infrastructure Readiness",
                department: "SRE/DevOps",
                frequency: "Per Live Event",
                role: "SRE Lead",
                icon: <Siren />,
                summary: "Prevent crashes during high-traffic live events. This checklist ensures your infrastructure is load-tested, redundant, and ready for peak viewership.",
                tasks: [
                    { id: 'OTT-LIVE-01', description: "Conduct a load test simulating at least 1.5x the expected concurrent users.", priority: 'High', riskLevel: 'High', proof: 'Load Test Report', location: 'Staging Environment' },
                    { id: 'OTT-LIVE-02', description: "Verify that auto-scaling policies for servers are active and correctly configured.", priority: 'High', riskLevel: 'High', proof: 'Cloud Console Screenshot', location: 'Cloud Platform' },
                    { id: 'OTT-LIVE-03', description: "Test CDN failover and origin shield performance.", priority: 'High', riskLevel: 'High', proof: 'CDN Test Report', location: 'CDN Dashboard' },
                    { id: 'OTT-LIVE-04', description: "Establish a 'war room' with a clear communication plan and on-call roster.", priority: 'High', riskLevel: 'High', proof: 'War Room Plan', location: 'Office' },
                    { id: 'OTT-LIVE-05', description: "Have a disaster recovery drill completed within the last quarter.", priority: 'High', riskLevel: 'High', proof: 'DR Drill Report', location: 'Office' }
                ]
            },
            {
                title: "Content Ingestion, QC & Metadata",
                department: "Content Operations",
                frequency: "Per Title",
                role: "Content Manager",
                icon: <Video />,
                summary: "A systematic workflow for ingesting, quality-checking, and tagging new content to ensure a flawless user experience.",
                tasks: [
                    { id: 'OTT-CONT-01', description: "Verify that the received video and audio files meet technical specifications.", priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'Ingestion System' },
                    { id: 'OTT-CONT-02', description: "Check for any quality issues like frozen frames, audio sync problems, or compression artifacts.", priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'Ingestion System' },
                    { id: 'OTT-CONT-03', description: "Ensure all required metadata (title, synopsis, cast, genre) is complete and accurate.", priority: 'High', riskLevel: 'Medium', proof: 'Metadata Sheet', location: 'CMS' },
                    { id: 'OTT-CONT-04', description: "Verify that all subtitle and audio tracks are present and correctly synced.", priority: 'High', riskLevel: 'High', proof: 'Subtitle QC Report', location: 'Ingestion System' },
                    { id: 'OTT-CONT-05', description: "Generate and assign a unique content ID to the title.", priority: 'High', riskLevel: 'Medium', proof: 'CMS Entry', location: 'CMS' }
                ]
            },
            {
                title: "Content Compliance & Standards",
                department: "Legal/Compliance",
                frequency: "Per Title",
                role: "Compliance Officer",
                icon: <FileCheck />,
                summary: "Navigate the complex web of global content regulations. This checklist ensures every title is compliant with regional age ratings, content codes, and legal requirements.",
                tasks: [
                    { id: 'OTT-COMP-01', description: "Assign a content rating based on the relevant regulatory framework (e.g., I&B Ministry, CARA).", priority: 'High', riskLevel: 'High', proof: 'Rating Certificate', location: 'Compliance File' },
                    { id: 'OTT-COMP-02', description: "Verify that all necessary content warnings (e.g., violence, language) are displayed.", priority: 'High', riskLevel: 'High', proof: 'Platform Screenshot', location: 'Platform' },
                    { id: 'OTT-COMP-03', description: "Check for compliance with accessibility standards (e.g., WCAG 2.1 for subtitles).", priority: 'High', riskLevel: 'Medium', proof: 'Accessibility Audit', location: 'Platform' },
                    { id: 'OTT-COMP-04', description: "Ensure music and footage rights are cleared for all intended regions.", priority: 'High', riskLevel: 'High', proof: 'Rights Clearance Document', location: 'Legal File' },
                    { id: 'OTT-COMP-05', description: "Review content for any violations of local cultural or legal sensitivities.", priority: 'High', riskLevel: 'High', proof: 'Cultural Review Report', location: 'Compliance File' }
                ]
            },
            {
                title: "Cybersecurity & DRM",
                department: "Security/IT",
                frequency: "Quarterly",
                role: "CISO",
                icon: <Shield />,
                summary: "Protect your content from piracy and your platform from cyber attacks with this security-focused checklist.",
                tasks: [
                    { id: 'OTT-CYB-01', description: "Ensure Digital Rights Management (DRM) is correctly implemented on all premium content.", priority: 'High', riskLevel: 'High', proof: 'DRM Configuration', location: 'System' },
                    { id: 'OTT-CYB-02', description: "Conduct regular penetration testing of the platform and APIs.", priority: 'High', riskLevel: 'High', proof: 'Pen Test Report', location: 'Security Office' },
                    { id: 'OTT-CYB-03', description: "Review and update the incident response plan for data breaches and service attacks.", priority: 'High', riskLevel: 'High', proof: 'Updated IR Plan', location: 'Security Office' },
                    { id: 'OTT-CYB-04', description: "Audit vendor security to ensure your partners meet your security standards.", priority: 'High', riskLevel: 'High', proof: 'Vendor Security Audit', location: 'Procurement' },
                    { id: 'OTT-CYB-05', description: "Enforce strong password policies and multi-factor authentication for all user accounts.", priority: 'High', riskLevel: 'High', proof: 'Security Policy Document', location: 'IT' }
                ]
            },
            {
                title: "Ad Operations & Monetization",
                department: "Ad-Ops",
                frequency: "Daily",
                role: "Ad-Ops Manager",
                icon: <DollarSign />,
                summary: "Maximize your ad revenue and ensure a good user experience with this daily checklist for managing ad campaigns, tracking performance, and troubleshooting issues.",
                tasks: [
                    { id: 'OTT-AD-01', description: "Verify that ad campaigns are delivering as per the booking orders.", priority: 'High', riskLevel: 'High', proof: 'Ad Server Report', location: 'Ad Server' },
                    { id: 'OTT-AD-02', description: "Monitor fill rates and CPMs to identify any revenue-impacting issues.", priority: 'High', riskLevel: 'High', proof: 'Ad Performance Dashboard', location: 'System' },
                    { id: 'OTT-AD-03', description: "Troubleshoot any ad-serving discrepancies or bugs.", priority: 'High', riskLevel: 'High', proof: 'Troubleshooting Log', location: 'Ad-Ops Office' },
                    { id: 'OTT-AD-04', description: "Ensure that ad frequency capping is set correctly to avoid annoying users.", priority: 'High', riskLevel: 'Medium', proof: 'Frequency Cap Settings', location: 'Ad Server' },
                    { id: 'OTT-AD-05', description: "Reconcile ad revenue reports with finance.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Statement', location: 'Finance' }
                ]
            }
        ]
    },
    {
        id: 'cinema_operations_pack',
        title: "Cinema & Multiplex Operations Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A complete operational toolkit for cinema managers to ensure a flawless movie-going experience, from projection quality and safety to F&B and ticketing.",
        icon: <Popcorn />,
        whoIsItFor: ["Cinema Managers", "Multiplex Operations Heads", "Regional Directors of Cinema", "Heads of F&B"],
        sampleItems: [
            { text: "Ensure 'Projection & Sound Quality' with daily calibration checks.", icon: <Projector /> },
            { text: "Master 'Box Office & Ticketing' operations to prevent fraud.", icon: <Ticket /> },
            { text: "Implement a 'Fire & Life Safety' protocol based on the Uphaar tragedy lessons.", icon: <Siren /> },
            { text: "Manage 'F&B Concessions' for profitability and hygiene.", icon: <CakeSlice /> },
        ],
        checklists: [
            {
                title: "Projection & Sound Quality",
                department: "Projection",
                frequency: "Daily",
                role: "Projectionist",
                icon: <Projector />,
                summary: "Deliver a perfect cinematic experience with this daily checklist for calibrating and testing all projection and sound equipment before the first show.",
                tasks: [
                    { id: 'CIN-PROJ-01', description: "Check projector lamp life and brightness levels.", priority: 'High', riskLevel: 'Medium', proof: 'Projector Log', location: 'Projection Room' },
                    { id: 'CIN-PROJ-02', description: "Run a test pattern to check for focus, framing, and alignment.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Auditorium' },
                    { id: 'CIN-PROJ-03', description: "Test the sound system, checking all channels (left, right, center, surround).", priority: 'High', riskLevel: 'High', proof: 'Sound Check Log', location: 'Auditorium' },
                    { id: 'CIN-PROJ-04', description: "Verify that the correct movie file (DCP) and sound format are loaded for each screen.", priority: 'High', riskLevel: 'High', proof: 'Show Playlist', location: 'TMS' },
                    { id: 'CIN-PROJ-05', description: "Clean projector lenses and portholes.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Projection Room' }
                ]
            },
            {
                title: "Box Office & Ticketing",
                department: "Front of House",
                frequency: "Per Shift",
                role: "Box Office Manager",
                icon: <Ticket />,
                summary: "Prevent revenue leakage and fraud with a strict protocol for cash handling, ticket issuance, and end-of-day reconciliation.",
                tasks: [
                    { id: 'CIN-TIX-01', description: "Reconcile cash, card, and online ticket sales against the ticketing system at the end of each shift.", priority: 'High', riskLevel: 'High', proof: 'Sales Reconciliation Report', location: 'Box Office' },
                    { id: 'CIN-TIX-02', description: "Require manager approval for all manual comps, voids, or refunds.", priority: 'High', riskLevel: 'High', proof: 'Approval Log', location: 'Box Office' },
                    { id: 'CIN-TIX-03', description: "Verify the cash float at the beginning and end of each shift.", priority: 'High', riskLevel: 'High', proof: 'Cash Float Log', location: 'Box Office' },
                    { id: 'CIN-TIX-04', description: "Ensure correct movie, showtime, and seat numbers are printed on every ticket.", priority: 'High', riskLevel: 'High', proof: 'Ticket Audit', location: 'Box Office' },
                    { id: 'CIN-TIX-05', description: "Train staff on handling counterfeit currency and payment fraud.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' }
                ]
            },
            {
                title: "Fire & Life Safety (Uphaar Lessons)",
                department: "Safety/Operations",
                frequency: "Daily",
                role: "Duty Manager",
                icon: <Siren />,
                summary: "A checklist born from the lessons of the Uphaar cinema tragedy. This non-negotiable protocol ensures all fire exits, gangways, and safety systems are always functional.",
                tasks: [
                    { id: 'CIN-FIRE-01', description: "Physically walk all emergency exit routes to ensure they are 100% unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Exit Path Log with Photos', location: 'Auditoriums/Corridors' },
                    { id: 'CIN-FIRE-02', description: "Check that all exit doors are unlocked and can be easily opened from the inside.", priority: 'High', riskLevel: 'High', proof: 'Door Check Log', location: 'Exits' },
                    { id: 'CIN-FIRE-03', description: "Test emergency lighting and exit signage before the first show.", priority: 'High', riskLevel: 'High', proof: 'Emergency Light Test Log', location: 'Campus-wide' },
                    { id: 'CIN-FIRE-04', description: "Verify that the public address (PA) system is functional and can be heard in all auditoriums.", priority: 'High', riskLevel: 'High', proof: 'PA System Test Log', location: 'Control Room' },
                    { id: 'CIN-FIRE-05', description: "Ensure ushers are trained on evacuation procedures and their specific roles during an emergency.", priority: 'High', riskLevel: 'High', proof: 'Drill Attendance Sheet', location: 'Staff Room' }
                ]
            },
            {
                title: "F&B Concessions Management",
                department: "F&B",
                frequency: "Daily",
                role: "F&B Manager",
                icon: <CakeSlice />,
                summary: "Maximize profitability and ensure hygiene at your concessions stand with this checklist for inventory, cash handling, and food safety.",
                tasks: [
                    { id: 'CIN-FNB-01', description: "Conduct opening and closing inventory counts for all key items (popcorn, drinks, candy).", priority: 'High', riskLevel: 'High', proof: 'Inventory Count Sheet', location: 'Concessions Stand' },
                    { id: 'CIN-FNB-02', description: "Check and log temperatures of all refrigerators, freezers, and warmers.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Concessions Stand' },
                    { id: 'CIN-FNB-03', description: "Reconcile daily sales with inventory consumed to calculate Cost of Goods Sold (COGS).", priority: 'High', riskLevel: 'High', proof: 'Sales vs. Inventory Report', location: 'Office' },
                    { id: 'CIN-FNB-04', description: "Ensure all food handling staff are following hygiene protocols (handwashing, gloves).", priority: 'High', riskLevel: 'High', proof: 'Hygiene Audit', location: 'Concessions Stand' },
                    { id: 'CIN-FNB-05', description: "Clean and sanitize all equipment (popcorn machine, soda fountains) at the end of the day.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Concessions Stand' }
                ]
            },
            {
                title: "Housekeeping & Auditorium Cleaning",
                department: "Housekeeping",
                frequency: "Between Shows",
                role: "Housekeeping Supervisor",
                icon: <SprayCan />,
                summary: "Ensure a clean and pleasant experience for every guest with a rapid-turnaround cleaning checklist for use between movie shows.",
                tasks: [
                    { id: 'CIN-HK-01', description: "Sweep and clear all food and trash from the auditorium floor.", priority: 'High', riskLevel: 'Medium', proof: 'Supervisor Check', location: 'Auditorium' },
                    { id: 'CIN-HK-02', description: "Wipe down all seats and cup holders.", priority: 'High', riskLevel: 'Medium', proof: 'Supervisor Check', location: 'Auditorium' },
                    { id: 'CIN-HK-03', description: "Clean and sanitize restrooms.", priority: 'High', riskLevel: 'High', proof: 'Restroom Cleaning Log', location: 'Restrooms' },
                    { id: 'CIN-HK-04', description: "Empty all trash bins in the lobby and auditoriums.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Campus-wide' },
                    { id: 'CIN-HK-05', description: "Report any damage to seats or carpets for repair.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Request', location: 'Auditorium' }
                ]
            }
        ]
    },
    {
        id: 'events_management_playbook',
        title: "Events Management Playbook",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A comprehensive toolkit for event managers to flawlessly execute everything from corporate conferences to large-scale public events.",
        icon: <Megaphone />,
        bestseller: true,
        whoIsItFor: ["Event Managers", "Production Heads", "Agency Owners", "Corporate Event Planners"],
        sampleItems: [
            { text: "Plan flawlessly with a 'Pre-Event Planning & Budgeting' checklist.", icon: <ClipboardList /> },
            { text: "Ensure safety with 'Crowd Management & Security' protocols.", icon: <Users /> },
            { text: "Manage 'On-Site Production & Technicals' with precision.", icon: <Projector /> },
            { text: "Includes 'Post-Event Reconciliation & Feedback' for continuous improvement.", icon: <BarChart3 /> },
        ],
        checklists: [
            {
                title: "Pre-Event Planning & Budgeting",
                department: "Planning",
                frequency: "Pre-Event",
                role: "Event Planner",
                icon: <ClipboardList />,
                summary: "Build a solid foundation for your event with this master checklist covering everything from venue selection and budgeting to vendor contracts.",
                tasks: [
                    { id: 'EV-PLAN-01', description: "Define event objectives, target audience, and KPIs.", priority: 'High', riskLevel: 'High', proof: 'Event Brief Document', location: 'Office' },
                    { id: 'EV-PLAN-02', description: "Create a detailed event budget, including contingencies.", priority: 'High', riskLevel: 'High', proof: 'Budget Spreadsheet', location: 'Office' },
                    { id: 'EV-PLAN-03', description: "Select and book the venue, and sign the contract.", priority: 'High', riskLevel: 'High', proof: 'Venue Contract', location: 'Office' },
                    { id: 'EV-PLAN-04', description: "Hire and sign contracts with all key vendors (catering, AV, security).", priority: 'High', riskLevel: 'High', proof: 'Vendor Contracts', location: 'Office' },
                    { id: 'EV-PLAN-05', description: "Obtain all necessary permits and licenses for the event.", priority: 'High', riskLevel: 'High', proof: 'Permit Documents', location: 'Office' }
                ]
            },
            {
                title: "Crowd Management & Security",
                department: "Security",
                frequency: "Event Day",
                role: "Security Head",
                icon: <Users />,
                summary: "Ensure the safety of all attendees with this protocol for managing entry, exits, crowd flow, and emergency response.",
                tasks: [
                    { id: 'EV-CROWD-01', description: "Brief all security personnel on their positions and responsibilities.", priority: 'High', riskLevel: 'High', proof: 'Security Briefing Log', location: 'Venue' },
                    { id: 'EV-CROWD-02', description: "Ensure clear and adequate signage for entry, exits, and emergency routes.", priority: 'High', riskLevel: 'High', proof: 'Signage Audit', location: 'Venue' },
                    { id: 'EV-CROWD-03', description: "Manage entry queues to prevent crushing and ensure smooth flow.", priority: 'High', riskLevel: 'High', proof: 'Visual Monitoring', location: 'Entrance' },
                    { id: 'EV-CROWD-04', description: "Have a clear protocol for handling medical emergencies.", priority: 'High', riskLevel: 'High', proof: 'Medical Emergency SOP', location: 'First Aid Post' },
                    { id: 'EV-CROWD-05', description: "Monitor crowd density and have a plan for managing overcrowding.", priority: 'High', riskLevel: 'High', proof: 'Crowd Density Monitoring Log', location: 'Control Room' }
                ]
            },
            {
                title: "On-Site Production & Technicals",
                department: "Production",
                frequency: "Event Day",
                role: "Production Manager",
                icon: <Projector />,
                summary: "Run a technically flawless show with this checklist for managing sound, lighting, video, and stage production.",
                tasks: [
                    { id: 'EV-PROD-01', description: "Conduct a full technical rehearsal of all AV elements (sound, light, video).", priority: 'High', riskLevel: 'High', proof: 'Tech Rehearsal Log', location: 'Venue' },
                    { id: 'EV-PROD-02', description: "Verify that all microphones, speakers, and mixers are working correctly.", priority: 'High', riskLevel: 'High', proof: 'Sound Check Log', location: 'AV Control' },
                    { id: 'EV-PROD-03', description: "Ensure all presentations and video files are loaded and tested.", priority: 'High', riskLevel: 'High', proof: 'Content Check Log', location: 'AV Control' },
                    { id: 'EV-PROD-04', description: "Confirm the event's run-of-show with the stage manager and all presenters.", priority: 'High', riskLevel: 'Medium', proof: 'Run-of-Show Sign-off', location: 'Backstage' },
                    { id: 'EV-PROD-05', description: "Have backup equipment ready for critical components (e.g., microphones, laptops).", priority: 'High', riskLevel: 'High', proof: 'Backup Equipment Check', location: 'AV Control' }
                ]
            },
            {
                title: "Post-Event Reconciliation & Feedback",
                department: "Planning/Finance",
                frequency: "Post-Event",
                role: "Event Planner",
                icon: <BarChart3 />,
                summary: "Maximize your event's ROI by properly closing it out. This checklist covers final payments, budget reconciliation, and collecting feedback for future improvement.",
                tasks: [
                    { id: 'EV-POST-01', description: "Reconcile all final invoices from vendors against the budget.", priority: 'High', riskLevel: 'High', proof: 'Final Budget Report', location: 'Office' },
                    { id: 'EV-POST-02', description: "Process all final payments to vendors.", priority: 'High', riskLevel: 'High', proof: 'Payment Vouchers', location: 'Finance' },
                    { id: 'EV-POST-03', description: "Send a post-event feedback survey to all attendees.", priority: 'High', riskLevel: 'Medium', proof: 'Survey Report', location: 'Office' },
                    { id: 'EV-POST-04', description: "Conduct a post-mortem meeting with the event team to discuss successes and failures.", priority: 'High', riskLevel: 'Medium', proof: 'Post-Mortem Minutes', location: 'Office' },
                    { id: 'EV-POST-05', description: "Archive all event documentation for future reference.", priority: 'High', riskLevel: 'Low', proof: 'Archive Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'sports_clubs_facilities_pack',
        title: "Sports Clubs & Facilities Operations",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A comprehensive safety and operational pack for managing sports clubs, gyms, stadiums, and training facilities.",
        icon: <Trophy />,
        bestseller: true,
        whoIsItFor: ["Sports Facility Managers", "Club Owners", "Stadium Operations Heads", "Safety Officers"],
        sampleItems: [
            { text: "Ensure 'Crowd Control & Emergency Evacuation' readiness for large events.", icon: <Users /> },
            { text: "Implement a 'Gym & Equipment Safety' checklist to prevent accidents.", icon: <Dumbbell /> },
            { text: "Manage 'Sports Field & Turf Maintenance' for optimal playing conditions.", icon: <Sprout /> },
            { text: "Includes 'Swimming Pool Hygiene & Safety' to meet health standards.", icon: <Waves /> },
            { text: "Secure events with 'Digital Ticketing & Entry Validation'.", icon: <Ticket /> },
        ],
        globalStandards: {
            title: "Aligned with Global Safety Standards",
            standards: [
                { name: "Occupational Safety (OSHA)", description: "Ensures workplace safety and accident prevention." },
                { name: "Fire & Life Safety (NFPA)", description: "Adheres to fire prevention and emergency evacuation codes." },
                { name: "Water Quality (WHO)", description: "Follows World Health Organization guidelines for swimming pool safety." },
                { name: "Quality Management (ISO 9001)", description: "Implements processes for consistent service and operational quality." }
            ]
        },
        previewScenario: {
            title: "Averting a Pre-Match Crisis",
            description: "Hours before a major football match, a severe weather alert is issued for high winds and heavy rain. This scenario shows how checklists prevent a potential disaster like the Indiana State Fair stage collapse.",
            tasks: [
                { id: 'SEC-EMER-01', description: "The 'Emergency Response' checklist is activated by the Safety Officer upon receiving the weather alert.", sourceChecklist: "Fire Safety & Emergency Preparedness", priority: 'High' },
                { id: 'SEC-CROWD-01', description: "The 'Crowd Management' protocol is initiated to prepare for a possible delayed entry or evacuation, with staff moved to key positions.", sourceChecklist: "Crowd Control & Entry Management", priority: 'High' },
                { id: 'FAC-MAINT-05', description: "The 'Facility Maintenance' SOP ensures all drainage systems are checked and cleared to prevent flooding of the field and lower levels.", sourceChecklist: "Facility Maintenance & Seasonal Prep", priority: 'High' },
                { id: 'SEC-VENDOR-01', description: "The 'Vendor Safety' checklist is used to confirm that all temporary structures, like broadcast towers and sponsor tents, are secured for high winds.", sourceChecklist: "Vendor & Contractor EHS Audit", priority: 'High' }
            ]
        },
        checklists: [
            {
                title: "Crowd Control & Entry Management",
                department: "Security",
                frequency: "Per Event",
                role: "Security Head",
                icon: <Users />,
                summary: "Manage large crowds safely and efficiently during events, preventing stampedes and ensuring a smooth entry/exit experience.",
                tasks: [
                    { id: 'SEC-CROWD-01', description: "Review event capacity and ticketing data before the event.", priority: 'High', riskLevel: 'High', proof: 'Capacity Plan', location: 'Control Room' },
                    { id: 'SEC-CROWD-02', description: "Deploy security personnel and ushers at all entry points, exits, and choke points.", priority: 'High', riskLevel: 'High', proof: 'Deployment Map', location: 'Venue' },
                    { id: 'SEC-CROWD-03', description: "Implement a clear queuing system at entry gates.", priority: 'High', riskLevel: 'High', proof: 'Queue Layout Photo', location: 'Entrances' },
                    { id: 'SEC-CROWD-04', description: "Monitor crowd flow via CCTV and on-ground staff.", priority: 'High', riskLevel: 'High', proof: 'CCTV Monitoring Log', location: 'Control Room' },
                    { id: 'SEC-CROWD-05', description: "Have a clear plan for opening additional gates or redirecting crowds if needed.", priority: 'High', riskLevel: 'High', proof: 'Contingency Plan', location: 'Control Room' },
                ]
            },
            {
                title: "Fire Safety & Emergency Preparedness",
                department: "Safety/EHS",
                frequency: "Monthly",
                role: "Safety Officer",
                icon: <Siren />,
                summary: "A comprehensive checklist to ensure your facility is always ready for a fire or other emergency, aligned with NFPA and local fire codes.",
                tasks: [
                    { id: 'SEC-EMER-01', description: "Inspect all fire extinguishers, hydrants, and sprinkler systems.", priority: 'High', riskLevel: 'High', proof: 'Fire Equipment Log', location: 'Venue' },
                    { id: 'SEC-EMER-02', description: "Test fire alarms and the public address system.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Control Room' },
                    { id: 'SEC-EMER-03', description: "Ensure all emergency exit routes are clear and well-lit.", priority: 'High', riskLevel: 'High', proof: 'Exit Route Audit', location: 'Venue' },
                    { id: 'SEC-EMER-04', description: "Conduct quarterly evacuation drills with staff.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Venue' },
                    { id: 'SEC-EMER-05', description: "Maintain an updated emergency contact list for all key personnel and local authorities.", priority: 'High', riskLevel: 'High', proof: 'Emergency Contact List', location: 'Control Room' },
                ]
            },
            {
                title: "Gym Equipment & Safety",
                department: "Fitness",
                frequency: "Daily",
                role: "Gym Manager",
                icon: <Dumbbell />,
                summary: "Prevent accidents and ensure member safety with a rigorous daily inspection checklist for all gym equipment.",
                tasks: [
                    { id: 'GYM-SAFE-01', description: "Inspect all cardio machines for functionality and wear.", priority: 'High', riskLevel: 'High', proof: 'Cardio Equipment Log', location: 'Gym Floor' },
                    { id: 'GYM-SAFE-02', description: "Check all strength-training machines, cables, and pulleys for fraying or damage.", priority: 'High', riskLevel: 'High', proof: 'Strength Equipment Log', location: 'Gym Floor' },
                    { id: 'GYM-SAFE-03', description: "Ensure free weights are stored correctly and not creating trip hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Gym Floor' },
                    { id: 'GYM-SAFE-04', description: "Report any faulty equipment immediately and label it 'Out of Order'.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Request', location: 'Gym Floor' },
                    { id: 'GYM-SAFE-05', description: "Ensure first aid kits are stocked and trainers are certified in CPR/First Aid.", priority: 'High', riskLevel: 'High', proof: 'Certification Records', location: 'Gym Office' },
                ]
            },
            {
                title: "Swimming Pool Hygiene & Safety",
                department: "Aquatics",
                frequency: "Hourly/Daily",
                role: "Pool Supervisor",
                icon: <Waves />,
                summary: "Meet WHO health standards and ensure guest safety with this comprehensive checklist for pool operations.",
                tasks: [
                    { id: 'POOL-SAFE-01', description: "Test and log water pH and chlorine levels every 2 hours.", priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'POOL-SAFE-02', description: "Check filtration and pump systems for correct operation.", priority: 'High', riskLevel: 'High', proof: 'Pump Room Log', location: 'Pump Room' },
                    { id: 'POOL-SAFE-03', description: "Ensure all safety equipment (life rings, shepherd's crook) is accessible.", priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Check', location: 'Poolside' },
                    { id: 'POOL-SAFE-04', description: "Verify that lifeguards are on duty and alert.", priority: 'High', riskLevel: 'High', proof: 'Lifeguard Roster', location: 'Poolside' },
                    { id: 'POOL-SAFE-05', description: "Ensure pool deck is clean and free of slip hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Deck Inspection Log', location: 'Poolside' },
                ]
            },
        ]
    },
    // --- Social Cause ---
    {
        id: 'animal_shelter_pack',
        title: "Animal Shelter Operations Pack",
        priceUSD: 0,
        priceINR: 0,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Social Cause",
        description: "A complete (and free) operational toolkit for animal shelters and NGOs to ensure animal welfare, hygiene, and effective adoption programs.",
        icon: <PawPrint />,
        badgeText: "Free Resource",
        badgeVariant: "accent",
        whoIsItFor: ["Shelter Managers", "NGO Founders", "Animal Welfare Officers", "Volunteers"],
        sampleItems: [
            { text: "Ensure 'Daily Animal Health & Wellness' with systematic checks.", icon: <HeartPulse /> },
            { text: "Implement a 'Kennel & Shelter Hygiene' protocol.", icon: <SprayCan /> },
            { text: "Manage 'Adoption & Foster Program' applications effectively.", icon: <Home /> },
            { text: "Includes 'Volunteer Management & Training' checklists.", icon: <Users /> },
        ],
        checklists: [
            {
                title: "Daily Animal Health & Wellness",
                department: "Animal Care",
                frequency: "Daily",
                role: "Kennel Technician",
                icon: <HeartPulse />,
                summary: "A fundamental checklist to ensure every animal is observed for health and behavioral issues daily.",
                tasks: [
                    { id: 'AS-HW-01', description: "Observe each animal for signs of illness (lethargy, loss of appetite, etc.).", priority: 'High', riskLevel: 'High', proof: 'Health Observation Log', location: 'Kennels' },
                    { id: 'AS-HW-02', description: "Administer any required medications as per the vet's instructions.", priority: 'High', riskLevel: 'High', proof: 'Medication Log', location: 'Kennels' },
                    { id: 'AS-HW-03', description: "Ensure every animal has fresh water and food.", priority: 'High', riskLevel: 'Medium', proof: 'Feeding Log', location: 'Kennels' },
                    { id: 'AS-HW-04', description: "Log any unusual behavior and report to the shelter manager.", priority: 'High', riskLevel: 'High', proof: 'Behavioral Log', location: 'Kennels' },
                    { id: 'AS-HW-05', description: "Provide daily enrichment or exercise for each animal.", priority: 'High', riskLevel: 'Medium', proof: 'Enrichment Log', location: 'Play Area' }
                ]
            },
            {
                title: "Kennel & Shelter Hygiene",
                department: "Animal Care",
                frequency: "Daily",
                role: "Kennel Cleaner",
                icon: <SprayCan />,
                summary: "Prevent the spread of disease with a rigorous daily cleaning and disinfection protocol for all animal enclosures and common areas.",
                tasks: [
                    { id: 'AS-HYG-01', description: "Clean and disinfect every kennel/enclosure daily.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kennels' },
                    { id: 'AS-HYG-02', description: "Wash all food and water bowls with disinfectant.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'AS-HYG-03', description: "Launder all bedding and towels.", priority: 'High', riskLevel: 'Medium', proof: 'Laundry Log', location: 'Laundry Area' },
                    { id: 'AS-HYG-04', description: "Properly dispose of all animal waste.", priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Waste Area' },
                    { id: 'AS-HYG-05', description: "Maintain a separate isolation area for sick animals and follow strict quarantine protocols.", priority: 'High', riskLevel: 'High', proof: 'Isolation Log', location: 'Isolation Ward' }
                ]
            },
            {
                title: "Adoption & Foster Program",
                department: "Adoptions",
                frequency: "Per Application",
                role: "Adoption Counselor",
                icon: <Home />,
                summary: "Ensure every animal goes to a safe and loving home with this structured process for vetting applications and managing adoptions.",
                tasks: [
                    { id: 'AS-AD-01', description: "Review the adoption application for completeness and red flags.", priority: 'High', riskLevel: 'High', proof: 'Application Review Form', location: 'Office' },
                    { id: 'AS-AD-02', description: "Conduct an interview with the potential adopter.", priority: 'High', riskLevel: 'High', proof: 'Interview Notes', location: 'Office' },
                    { id: 'AS-AD-03', description: "Perform a home check (virtual or physical) for first-time pet owners.", priority: 'High', riskLevel: 'High', proof: 'Home Check Report', location: 'Adopter\'s Home' },
                    { id: 'AS-AD-04', description: "Complete all adoption paperwork, including the contract and medical records.", priority: 'High', riskLevel: 'High', proof: 'Signed Adoption Contract', location: 'Office' },
                    { id: 'AS-AD-05', description: "Schedule a follow-up call a week after adoption to check on the animal's adjustment.", priority: 'High', riskLevel: 'Medium', proof: 'Follow-up Log', location: 'Office' }
                ]
            },
            {
                title: "Volunteer Management & Training",
                department: "HR/Admin",
                frequency: "Per Volunteer",
                role: "Volunteer Coordinator",
                icon: <Users />,
                summary: "Effectively manage your most valuable resource—your volunteers. This checklist covers onboarding, training, and scheduling.",
                tasks: [
                    { id: 'AS-VOL-01', description: "Conduct an orientation for all new volunteers covering shelter policies and safety procedures.", priority: 'High', riskLevel: 'High', proof: 'Orientation Sign-in Sheet', location: 'Training Room' },
                    { id: 'AS-VOL-02', description: "Provide hands-on training for animal handling and cleaning protocols.", priority: 'High', riskLevel: 'High', proof: 'Training Checklist', location: 'Kennels' },
                    { id: 'AS-VOL-03', description: "Maintain a schedule for all volunteer shifts.", priority: 'High', riskLevel: 'Medium', proof: 'Volunteer Schedule', location: 'Office' },
                    { id: 'AS-VOL-04', description: "Ensure all volunteers have signed a liability waiver.", priority: 'High', riskLevel: 'High', proof: 'Signed Waivers', location: 'Office' },
                    { id: 'AS-VOL-05', description: "Recognize and appreciate volunteer contributions regularly.", priority: 'Medium', riskLevel: 'Low', proof: 'Appreciation Program', location: 'Office' }
                ]
            }
        ]
    }
];
