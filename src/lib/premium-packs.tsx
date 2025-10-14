
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket, Wifi, UserCheck, BarChart3, Link, BrainCircuit, Bot, Syringe, DatabaseZap, Megaphone, Siren, Lock, KeyRound, Users, Banknote, Webcam, Bug, UserCog, PackageCheck, Ambulance, FileWarning, Milestone, DoorClosed, CircleDollarSign, Wind, Thermometer, UserCog2, Key, Router, Pallet, Watch, Drama, Barcode, Stethoscope, SyringeIcon, HeartPulse, Microscope, Bus, BookOpen, Car, Drill, Spray, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, Mask, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask, Store, Pill, Ship, Sun, Film, AnchorIcon, Clapperboard, MonitorPlay, Tv } from "lucide-react";

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
    category: "Hotels & Resorts" | "Restaurants" | "Corporate & Tech" | "Retail" | "Healthcare" | "Education" | "Industrial & Transport" | "Entertainment & Events" | "Social Cause" | "Real Estate" | "Compliance" | "Wellness & Beauty" | "Agriculture" | "Specialized Production";
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
        id: 'hospitality_excellence_suite',
        title: "Hospitality Excellence Suite",
        priceUSD: 99.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Hotels & Resorts",
        description: "For GMs & Dept. Heads. A one-time purchase for a complete toolkit covering operations, finance, and leadership.",
        icon: <Building className="w-8 h-8 text-primary" />,
        badgeText: "Most Popular",
        badgeVariant: "default" as const,
        whoIsItFor: ["Hotel Owners", "General Managers", "COOs", "VPs of Operations", "Directors", "Heads of Departments", "GMs", "VPs", "and their teams"],
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
        id: 'restaurant_operations_checklist',
        title: "Restaurant Operations Checklist",
        priceUSD: 89.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Restaurants",
        description: "The essential HACCP-based toolkit for restaurant owners focused on safety, quality, and efficiency.",
        icon: <Utensils className="w-8 h-8 text-primary" />,
        badgeText: "Essential for F&B",
        badgeVariant: "accent" as const,
        whoIsItFor: ["Restaurant Owners", "Head Chefs", "Kitchen Managers", "F&B Directors", "VPs", "GMs", "Directors"],
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
    // --- Retail ---
    {
        id: 'luxury_retail_pack',
        title: "Luxury Retail & Jewellery Operations",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "For luxury brand managers and store owners. A premium toolkit for delivering impeccable customer experiences and ensuring ironclad security for high-value inventory.",
        icon: <Gem className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Luxury Brand VPs", "Store Owners", "Heads of Retail Operations", "Security Directors", "GMs", "Directors"],
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
        id: 'supermarket_hypermarket_ops_pack',
        title: "Supermarket & Hypermarket Operations",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "For store managers and department heads. A toolkit for managing high-volume retail, focusing on fresh food safety, inventory accuracy, and checkout efficiency.",
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
        checklists: [
            {
                title: "🛒 Daily Store Readiness & Opening",
                department: "Operations",
                frequency: "Daily",
                role: "Store Manager",
                summary: "A comprehensive morning checklist to ensure the store is clean, safe, stocked, and ready for customers.",
                tasks: [
                    { id: 'SM-OPEN-01', description: "Conduct a full store walkthrough to check for cleanliness, safety hazards, and lighting.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Log', location: 'Entire Store' },
                    { id: 'SM-OPEN-02', description: "Ensure all shopping carts and baskets are clean and available at the entrance.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Entrance' },
                    { id: 'SM-OPEN-03', description: "Verify all POS systems, card terminals, and weighing scales are online and functional.", priority: 'High', riskLevel: 'High', proof: 'System Check Log', location: 'Checkout/Depts' },
                    { id: 'SM-OPEN-04', description: "Check that all promotional signage and pricing are correct and up-to-date.", priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Entire Store' },
                    { id: 'SM-OPEN-05', description: "Hold a brief morning huddle with department heads to discuss daily sales targets and priorities.", priority: 'High', riskLevel: 'Low', proof: 'Meeting Log', location: 'Staff Area' }
                ]
            },
            {
                title: "🍎 Fresh Food Department Checklist (HACCP)",
                department: "Fresh Produce/Meat/Dairy",
                frequency: "Daily/Hourly",
                role: "Department Head",
                summary: "A food-safety critical checklist for managing produce, meat, and dairy departments, focusing on temperature, handling, and rotation.",
                tasks: [
                    { id: 'SM-FRESH-01', description: "Log temperatures of all refrigerated display cases and walk-in coolers every 2 hours.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Fresh Depts' },
                    { id: 'SM-FRESH-02', description: "Inspect all fresh produce for spoilage and remove any substandard items from display.", priority: 'High', riskLevel: 'Medium', proof: 'Culling Log', location: 'Produce Section' },
                    { id: 'SM-FRESH-03', description: "Ensure proper FIFO (First-In, First-Out) rotation is being followed for all items, especially dairy and meat.", priority: 'High', riskLevel: 'High', proof: 'Date Check Audit', location: 'Fresh Depts' },
                    { id: 'SM-FRESH-04', description: "Verify that all food handling surfaces, knives, and equipment are being sanitized at scheduled intervals.", priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Fresh Depts' },
                    { id: 'SM-FRESH-05', description: "Check that all staff handling fresh food are wearing gloves, hairnets, and adhering to hygiene standards.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Fresh Depts' }
                ]
            },
            {
                title: "📦 Goods Receiving & Staging (High Volume)",
                department: "Logistics/Receiving",
                frequency: "Per Delivery",
                role: "Receiving Manager",
                summary: "A process for efficiently and accurately receiving dozens of daily deliveries, from pallet verification to staging for putaway.",
                tasks: [
                    { id: 'SM-RECV-01', description: "Schedule all deliveries to avoid dock congestion.", priority: 'High', riskLevel: 'Medium', proof: 'Dock Schedule', location: 'Receiving Office' },
                    { id: 'SM-RECV-02', description: "Verify pallet count and check for visible damage before breaking the seal on a truck.", priority: 'High', riskLevel: 'High', proof: 'Delivery Note Sign-off', location: 'Receiving Dock' },
                    { id: 'SM-RECV-03', description: "Use handheld scanners to receive products against the purchase order in real-time.", priority: 'High', riskLevel: 'High', proof: 'System Log', location: 'Receiving Dock' },
                    { id: 'SM-RECV-04', description: "Segregate received goods by temperature requirement (ambient, chilled, frozen) and stage them for immediate putaway.", priority: 'High', riskLevel: 'High', proof: 'Visual Staging Check', location: 'Receiving Area' },
                    { id: 'SM-RECV-05', description: "Process and document any shortages, damages, or discrepancies with the carrier immediately.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Receiving Office' }
                ]
            },
            {
                title: "📜 Planogram & Merchandising Compliance",
                department: "Operations/Merchandising",
                frequency: "Weekly",
                role: "Floor Manager",
                summary: "Ensures shelves are stocked according to the corporate planogram to maximize sales and maintain brand consistency.",
                tasks: [
                    { id: 'SM-PLANO-01', description: "Select a different aisle each week and audit product placement against the official planogram.", priority: 'High', riskLevel: 'Medium', proof: 'Planogram Audit Form', location: 'Aisles' },
                    { id: 'SM-PLANO-02', description: "Ensure shelf labels and pricing match the products on display.", priority: 'High', riskLevel: 'High', proof: 'Label Audit', location: 'Aisles' },
                    { id: 'SM-PLANO-03', description: "Check for out-of-stock items and ensure shelf gaps are filled or correctly flagged.", priority: 'High', riskLevel: 'High', proof: 'Stock Gap Report', location: 'Aisles' },
                    { id: 'SM-PLANO-04', description: "Verify that promotional displays and endcaps are set up according to the marketing calendar.", priority: 'High', riskLevel: 'Medium', proof: 'Promo Display Photo', location: 'Endcaps' },
                    { id: 'SM-PLANO-05', description: "Train staff on the importance of planogram compliance and how to read the diagrams.", priority: 'Medium', riskLevel: 'Low', proof: 'Training Log', location: 'Staff Area' }
                ]
            },
            {
                title: "💰 Front-End Checkout & Cash Management",
                department: "Front-End",
                frequency: "Daily",
                role: "Head Cashier",
                summary: "A checklist to optimize checkout speed, ensure cash security, and improve the final customer touchpoint.",
                tasks: [
                    { id: 'SM-CASH-01', description: "Ensure adequate number of checkout lanes are open based on customer traffic forecasts.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Roster', location: 'Checkout Area' },
                    { id: 'SM-CASH-02', description: "Perform cash float verification for each POS terminal at the start of the shift.", priority: 'High', riskLevel: 'High', proof: 'Float Count Sheet', location: 'Cash Office' },
                    { id: 'SM-CASH-03', description: "Monitor queue lengths and call for additional cashiers as needed.", priority: 'High', riskLevel: 'Medium', proof: 'Supervisor Log', location: 'Checkout Area' },
                    { id: 'SM-CASH-04', description: "Conduct periodic 'cash lifts' from registers to minimize the amount of cash held at the checkout.", priority: 'High', riskLevel: 'High', proof: 'Cash Lift Log', location: 'Checkout Area' },
                    { id: 'SM-CASH-05', description: "At closing, reconcile cash, card, and digital payments for each POS and investigate all discrepancies.", priority: 'High', riskLevel: 'High', proof: 'End-of-Day Reconciliation Report', location: 'Cash Office' }
                ]
            },
            {
                title: "🛡️ Loss Prevention & Store Security",
                department: "Security",
                frequency: "Daily",
                role: "Loss Prevention Officer",
                summary: "A proactive checklist to deter theft, reduce shrinkage, and ensure a safe shopping environment.",
                tasks: [
                    { id: 'SM-LP-01', description: "Audit EAS (Electronic Article Surveillance) gates, deactivators, and security tags to ensure they are functional.", priority: 'High', riskLevel: 'High', proof: 'EAS Test Log', location: 'Entrance/Checkout' },
                    { id: 'SM-LP-02', description: "Review CCTV footage of 'sweethearting' hotspots like checkouts and receiving docks.", priority: 'High', riskLevel: 'High', proof: 'CCTV Review Log', location: 'Security Office' },
                    { id: 'SM-LP-03', description: "Monitor high-value items (e.g., liquor, electronics) and check inventory levels.", priority: 'High', riskLevel: 'High', proof: 'High-Value Count Sheet', location: 'Specific Aisles' },
                    { id: 'SM-LP-04', description: "Ensure all back doors and emergency exits are alarmed and not propped open.", priority: 'High', riskLevel: 'High', proof: 'Door Check Log', location: 'Perimeter' },
                    { id: 'SM-LP-05', description: "Train front-end staff on procedures for handling counterfeit currency and fraudulent returns.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Staff Training' }
                ]
            },
            {
                title: "🗑️ Waste Management & Recycling",
                department: "Facilities",
                frequency: "Daily",
                role: "Facilities Coordinator",
                summary: "Manages waste streams efficiently, focusing on recycling targets, food waste reduction, and sanitation.",
                tasks: [
                    { id: 'SM-WASTE-01', description: "Ensure separate, clearly labeled bins are available for different waste streams (general, recyclable, food waste).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Back of House' },
                    { id: 'SM-WASTE-02', description: "Check that waste compactors and balers are operational and used correctly.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Check Log', location: 'Waste Area' },
                    { id: 'SM-WASTE-03', description: "Monitor and log the weight of food waste to identify opportunities for reduction.", priority: 'Medium', riskLevel: 'Low', proof: 'Waste Log', location: 'Waste Area' },
                    { id: 'SM-WASTE-04', description: "Schedule regular pickups to prevent overflow and pest issues.", priority: 'High', riskLevel: 'Medium', proof: 'Pickup Schedule', location: 'Office' },
                    { id: 'SM-WASTE-05', description: "Keep the waste and recycling area clean and sanitized to comply with health codes.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Waste Area' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Compliance",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "A critical checklist for preventing pests in a large food-handling environment.",
                tasks: [
                    { id: 'PEST-SM-01', description: "Inspect receiving docks, garbage areas, and food departments for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Pest Inspection Log', location: 'Store-wide' },
                    { id: 'PEST-SM-02', description: "Ensure all food in storage and on display is properly covered or sealed.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Store-wide' },
                    { id: 'PEST-SM-03', description: "Check for and seal any cracks or holes in walls, floors, and around pipes that could be entry points.", priority: 'High', riskLevel: 'Medium', proof: 'Structural Inspection Log', location: 'Store-wide' },
                    { id: 'PEST-SM-04', description: "Verify that all pest traps and bait stations are in their correct locations and are being serviced by the vendor.", priority: 'High', riskLevel: 'High', proof: 'Vendor Service Report', location: 'Store-wide' },
                    { id: 'PEST-SM-05', description: "Maintain a high standard of cleanliness, ensuring no food debris is left overnight.", priority: 'High', riskLevel: 'High', proof: 'Closing Cleaning Log', location: 'Store-wide' }
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
            "Master secure Cash & Payment Handling with PCI DSS standards.",
            "Deliver exceptional Customer Experience from greeting to post-sale support."
        ],
        globalStandards: {
            title: "Aligned with Global Retail & Electronics Standards",
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
                summary: "Core checklists for ensuring smooth, secure, and compliant daily store operations.",
                tasks: [
                    { id: 'ELEC-OPEN-01', description: "Verify store cleanliness, lighting, HVAC systems are optimal.", priority: 'High', riskLevel: 'Medium', proof: 'Opening Log', location: 'Store-wide' },
                    { id: 'ELEC-OPEN-02', description: "Check security systems (CCTV, alarms) are operational.", priority: 'High', riskLevel: 'High', proof: 'Security System Log', location: 'Security Room' },
                    { id: 'ELEC-OPEN-03', description: "Verify cash registers & POS terminals are functional.", priority: 'High', riskLevel: 'High', proof: 'POS Readiness Log', location: 'Cash Counters' },
                    { id: 'ELEC-OPEN-04', description: "Conduct product display readiness check (all demos on, clean).", priority: 'High', riskLevel: 'Medium', proof: 'Display Audit', location: 'Sales Floor' },
                    { id: 'ELEC-OPEN-05', description: "Lock/unlock entry points & log timings.", priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Entrances' }
                ]
            },
            {
                title: "Inventory & Stock Management",
                department: "Inventory",
                frequency: "Daily/Weekly",
                role: "Inventory Manager",
                summary: "Maintain optimal stock levels, prevent shrinkage, and ensure inventory accuracy.",
                tasks: [
                    { id: 'ELEC-INV-01', description: "Conduct daily cycle counts on high-value items.", priority: 'High', riskLevel: 'High', proof: 'Cycle Count Sheet', location: 'Warehouse/Sales Floor' },
                    { id: 'ELEC-INV-02', description: "Update ERP/POS systems with new stock arrivals.", priority: 'High', riskLevel: 'High', proof: 'ERP Update Log', location: 'System' },
                    { id: 'ELEC-INV-03', description: "Verify and log all damaged or returned goods.", priority: 'High', riskLevel: 'Medium', proof: 'Damage/Return Log', location: 'Returns Desk' },
                    { id: 'ELEC-INV-04', description: "Ensure safe handling and storage of high-value electronics.", priority: 'High', riskLevel: 'High', proof: 'Storage Audit Log', location: 'Secure Storage' },
                    { id: 'ELEC-INV-05', description: "Review reorder levels and supplier performance reports weekly.", priority: 'High', riskLevel: 'Medium', proof: 'Supplier Report', location: 'Office' }
                ]
            },
            {
                title: "Product Display & Visual Merchandising",
                department: "Merchandising",
                frequency: "Daily",
                role: "Visual Merchandiser",
                summary: "Maintain consistent brand presentation and ensure all demo units are functional.",
                tasks: [
                    { id: 'ELEC-VM-01', description: "Verify planogram adherence for all brands.", priority: 'High', riskLevel: 'Medium', proof: 'Planogram Compliance Photo', location: 'Sales Floor' },
                    { id: 'ELEC-VM-02', description: "Ensure all demo units are functional, charged, and running correct software.", priority: 'High', riskLevel: 'High', proof: 'Demo Unit Checklist', location: 'Sales Floor' },
                    { id: 'ELEC-VM-03', description: "Check product pricing labels and promotional offers for accuracy.", priority: 'High', riskLevel: 'High', proof: 'Price Audit Sheet', location: 'Sales Floor' },
                    { id: 'ELEC-VM-04', description: "Inspect lighting and signage for proper alignment and function.", priority: 'High', riskLevel: 'Medium', proof: 'Lighting Inspection Log', location: 'Sales Floor' },
                    { id: 'ELEC-VM-05', description: "Clean screens and surfaces of all display devices.", priority: 'High', riskLevel: 'Low', proof: 'Cleaning Log', location: 'Sales Floor' }
                ]
            },
            {
                title: "Cash & Payment Handling",
                department: "Finance",
                frequency: "Per Shift",
                role: "Head Cashier",
                summary: "Ensure secure and compliant payment operations to prevent fraud and discrepancies.",
                tasks: [
                    { id: 'ELEC-CASH-01', description: "Calibrate POS and verify payment gateway functionality.", priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'POS Terminal' },
                    { id: 'ELEC-CASH-02', description: "Verify cash drawer balance before and after each shift.", priority: 'High', riskLevel: 'High', proof: 'Cash Reconciliation Sheet', location: 'Cash Office' },
                    { id: 'ELEC-CASH-03', description: "Reconcile all credit card and digital payment transactions daily.", priority: 'High', riskLevel: 'High', proof: 'Payment Gateway Report', location: 'Cash Office' },
                    { id: 'ELEC-CASH-04', description: "Secure cash transfers to vault or bank drop box with two-person integrity.", priority: 'High', riskLevel: 'High', proof: 'Cash Transfer Log', location: 'Cash Office' },
                    { id: 'ELEC-CASH-05', description: "Log all refunds and cancellations with manager approval.", priority: 'High', riskLevel: 'Medium', proof: 'Refund Log', location: 'POS Terminal' }
                ]
            },
            {
                title: "Store Safety & Maintenance",
                department: "Facilities/EHS",
                frequency: "Weekly",
                role: "Safety Officer",
                summary: "Ensure a safe environment for both staff and customers through regular maintenance and safety checks.",
                tasks: [
                    { id: 'ELEC-SAFETY-01', description: "Inspect electrical fittings and display power points for signs of wear or damage.", priority: 'High', riskLevel: 'High', proof: 'Electrical Inspection Report', location: 'Store-wide' },
                    { id: 'ELEC-SAFETY-02', description: "Verify fire extinguishers are charged, accessible, and emergency exits are clear.", priority: 'High', riskLevel: 'High', proof: 'Fire Safety Log', location: 'Store-wide' },
                    { id: 'ELEC-SAFETY-03', description: "Record maintenance of air conditioning, lighting, and digital signage.", priority: 'Medium', riskLevel: 'Low', proof: 'Maintenance Log', location: 'Facilities Office' },
                    { id: 'ELEC-SAFETY-04', description: "Check safe storage of cleaning chemicals and other hazardous materials.", priority: 'High', riskLevel: 'Medium', proof: 'Chemical Storage Log', location: 'Storage' },
                    { id: 'ELEC-SAFETY-05', description: "Conduct a weekly safety briefing with all staff.", priority: 'High', riskLevel: 'Medium', proof: 'Safety Meeting Minutes', location: 'Staff Room' }
                ]
            },
            {
                title: "Customer Experience & Store Standards",
                department: "Sales",
                frequency: "Ongoing",
                role: "Sales Manager",
                summary: "Checklists to ensure a consistently high-quality customer experience from greeting to checkout.",
                tasks: [
                    { id: 'ELEC-CUST-01', description: "Greet customers within 30 seconds of entry.", priority: 'High', riskLevel: 'Low', proof: 'Manager Observation', location: 'Entrance' },
                    { id: 'ELEC-CUST-02', description: "Ensure staff are trained on key product SKUs and features.", priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
                    { id: 'ELEC-CUST-03', description: "Confirm all items are scanned correctly and discounts applied at checkout.", priority: 'High', riskLevel: 'Medium', proof: 'Checkout Audit', location: 'POS' },
                    { id: 'ELEC-CUST-04', description: "Handle returns and warranty claims transparently and efficiently.", priority: 'High', riskLevel: 'Medium', proof: 'Returns Log', location: 'Customer Service' },
                    { id: 'ELEC-CUST-05', description: "Protect customer data under global privacy laws during transactions.", priority: 'High', riskLevel: 'High', proof: 'Privacy Compliance Audit', location: 'POS' }
                ]
            }
        ]
    },
    // --- Entertainment & Events ---
    {
        id: 'film_production_pack',
        title: "Film Production Pack",
        priceUSD: 99.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "For Producers & Studio Heads. A global-standard SOP toolkit for managing film production, focusing on safety, compliance, and budget control.",
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
        globalStandards: {
            title: "Aligned with Global Production Standards",
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
                title: "📹 Production Setup & Safety",
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
                title: "🎥 Daily Shooting Protocol",
                department: "Production",
                frequency: "Daily",
                role: "Director/First AD",
                summary: "Maintain technical consistency and efficiency on set.",
                tasks: [
                    { id: 'FP-SHOOT-01', description: "Daily call sheets distributed and acknowledged (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Acknowledgment Log', location: 'Set' },
                    { id: 'FP-SHOOT-02', description: "Scene blocking & rehearsal verification (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Rehearsal Log', location: 'Set' },
                    { id: 'FP-SHOOT-03', description: "Camera & lighting setup according to SMPTE standards", priority: 'High', riskLevel: 'High', proof: 'Setup Log', location: 'Set' },
                    { id: 'FP-SHOOT-04', description: "Sound recording & monitoring (SMPTE Standards; ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Sound Report', location: 'Set' },
                    { id: 'FP-SHOOT-05', description: "Continuity and prop tracking (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Continuity Report', location: 'Set' }
                ]
            },
            {
                title: "✂️ Post-Production Workflow",
                department: "Post-Production",
                frequency: "End of Shoot",
                role: "Post-Production Supervisor",
                summary: "Ensures globally compatible content quality and smooth handovers.",
                tasks: [
                    { id: "FP-POST-01", description: "Verify all footage, sound files, and production notes have been received and cataloged. (ISO 9001)", priority: "High", riskLevel: "High", proof: "Handover Sign-off Sheet", location: "Post-Production Suite" },
                    { id: "FP-POST-02", description: "Create low-resolution proxies for the editing process. (SMPTE)", priority: "High", riskLevel: "Medium", proof: "Proxy Generation Log", location: "Post-Production Suite" },
                    { id: "FP-POST-03", description: "Develop a post-production schedule with milestones for picture lock, sound mix, and color grading. (ISO 9001)", priority: "High", riskLevel: "Medium", proof: "Post Schedule", location: "Post-Production Office" },
                    { id: "FP-POST-04", description: "Establish a clear review and feedback loop with the director and producers. (ISO 9001)", priority: "High", riskLevel: "Medium", proof: "Feedback Process Document", location: "Post-Production Office" },
                    { id: "FP-POST-05", description: "Ensure the project is set up correctly for final delivery formats (e.g., DCP, broadcast). (SMPTE)", priority: "High", riskLevel: "High", proof: "Project Setup Screenshot", location: "Post-Production Suite" }
                ]
            },
            {
                title: "📤 Film Distribution & Marketing",
                department: "Distribution",
                frequency: "Post-Completion",
                role: "Distribution Manager",
                summary: "Ensures all technical and marketing assets are prepared correctly for festival submission and global distribution.",
                tasks: [
                    { id: "FP-DIST-01", description: "Create a Digital Cinema Package (DCP) for theatrical exhibition. (SMPTE)", priority: "High", riskLevel: "High", proof: "DCP File", location: "Post-Production Suite" },
                    { id: "FP-DIST-02", description: "Generate various video formats required by different streaming platforms and broadcasters.", priority: "High", riskLevel: "High", proof: "Transcoding Log", location: "Post-Production Suite" },
                    { id: "FP-DIST-03", description: "Prepare a complete press kit, including synopsis, cast/crew bios, and high-resolution stills.", priority: "High", riskLevel: "Medium", proof: "Press Kit PDF", location: "Marketing Office" },
                    { id: "FP-DIST-04", description: "Create and QC subtitles in multiple languages.", priority: "High", riskLevel: "Medium", proof: "Subtitle Files (.srt)", location: "Post-Production Suite" },
                    { id: "FP-DIST-05", description: "Archive all project files, including raw footage and final masters, in a secure long-term storage solution.", priority: "High", riskLevel: "High", proof: "Archive Log", location: "Data Center" }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Admin",
                frequency: "Monthly",
                role: "Admin Manager",
                summary: "A proactive checklist for preventing and managing pest infestations in studios and on sets.",
                tasks: [
                    { id: 'PEST-FILM-01', description: "Inspect studios, prop rooms, and craft service areas for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Studio-wide' },
                    { id: 'PEST-FILM-02', description: "Ensure all food and catering waste is disposed of in sealed bins and removed daily.", priority: 'High', riskLevel: 'High', proof: 'Waste Management Log', location: 'Catering Area' },
                    { id: 'PEST-FILM-03', description: "Check that storage areas for costumes and props are clean, dry, and sealed.", priority: 'High', riskLevel: 'Medium', proof: 'Storage Inspection Log', location: 'Prop/Costume Depts' },
                    { id: 'PEST-FILM-04', description: "Review reports from the pest control vendor and ensure all recommendations are actioned.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Review', location: 'Admin Office' },
                    { id: 'PEST-FILM-05', description: "On location shoots, assess pest-related risks and take appropriate preventive measures.", priority: 'High', riskLevel: 'High', proof: 'Location Risk Assessment', location: 'Location' }
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
        description: "For tech leads and content strategists. A toolkit for managing the digital supply chain of a modern streaming service.",
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
         globalStandards: {
            title: "Aligned with Global Streaming & Tech Standards",
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
                summary: "Ensure data-driven, compliant content planning.",
                tasks: [
                    { id: 'OTT-CS-01', description: "Audience analysis & persona development (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Analysis Report', location: 'Office' },
                    { id: 'OTT-CS-02', description: "Content calendar & scheduling (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Content Calendar', location: 'Office' },
                    { id: 'OTT-CS-03', description: "Acquisition of third-party rights (ISO 9001; Copyright compliance)", priority: 'High', riskLevel: 'High', proof: 'License Agreements', location: 'Office' },
                    { id: 'OTT-CS-04', description: "Original production planning & greenlighting (ISO 9001; Union standards)", priority: 'High', riskLevel: 'High', proof: 'Greenlight Document', location: 'Office' },
                    { id: 'OTT-CS-05', description: "Partnerships & influencer agreements (ISO 9001; Contract compliance)", priority: 'Medium', riskLevel: 'Medium', proof: 'Signed Agreements', location: 'Office' }
                ]
            },
            {
                title: "Platform Development",
                department: "Tech",
                frequency: "Per Sprint",
                role: "Product Manager",
                summary: "Build a secure, user-friendly, and compliant platform.",
                tasks: [
                    { id: 'OTT-DEV-01', description: "UI/UX design & accessibility (WCAG 2.1)", priority: 'High', riskLevel: 'Medium', proof: 'Accessibility Audit', location: 'Dev Environment' },
                    { id: 'OTT-DEV-02', description: "Device & OS compatibility testing (ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Test Report', location: 'QA Lab' },
                    { id: 'OTT-DEV-03', description: "Adaptive bitrate streaming setup (ISO/IEC 23009)", priority: 'High', riskLevel: 'High', proof: 'Streaming Config', location: 'Dev Environment' },
                    { id: 'OTT-DEV-04', description: "Payment integration & encryption (PCI DSS)", priority: 'High', riskLevel: 'High', proof: 'PCI Compliance Certificate', location: 'Dev Environment' },
                    { id: 'OTT-DEV-05', description: "Analytics & tracking setup (ISO 9001; GDPR compliance)", priority: 'High', riskLevel: 'Medium', proof: 'Analytics Config', location: 'Dev Environment' }
                ]
            },
            {
                title: "Content Upload & Management",
                department: "Content Ops",
                frequency: "Per Title",
                role: "Content Ops Manager",
                summary: "Ensure all uploaded content is high-quality, accessible, and compliant.",
                tasks: [
                    { id: 'OTT-UPL-01', description: "Metadata tagging for search optimization (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Metadata Log', location: 'CMS' },
                    { id: 'OTT-UPL-02', description: "Subtitles, dubbing, and captions (WCAG 2.1)", priority: 'High', riskLevel: 'Medium', proof: 'Subtitle Files', location: 'CMS' },
                    { id: 'OTT-UPL-03', description: "Content release scheduling (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Release Schedule', location: 'CMS' },
                    { id: 'OTT-UPL-04', description: "Quality control checks (resolution, audio sync) (ISO/IEC 23009)", priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'CMS' },
                    { id: 'OTT-UPL-05', description: "Archiving & backup (ISO 9001; ISO 27001)", priority: 'High', riskLevel: 'High', proof: 'Archive Log', location: 'CMS' }
                ]
            },
            {
                title: "Marketing & Engagement",
                department: "Marketing",
                frequency: "Per Campaign",
                role: "Marketing Manager",
                summary: "Increase reach, engagement, and retention.",
                tasks: [
                    { id: 'OTT-MKTG-01', description: "Launch promotional campaigns (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Campaign Plan', location: 'Marketing Platform' },
                    { id: 'OTT-MKTG-02', description: "Collect & analyze user feedback (ISO 9001; GDPR compliance)", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Report', location: 'Analytics Platform' },
                    { id: 'OTT-MKTG-03', description: "Community building & moderation (ISO 9001)", priority: 'Medium', riskLevel: 'Medium', proof: 'Moderation Log', location: 'Social Media' },
                    { id: 'OTT-MKTG-04', description: "Loyalty programs & incentives (ISO 9001)", priority: 'Medium', riskLevel: 'Low', proof: 'Program Document', location: 'Marketing Platform' },
                    { id: 'OTT-MKTG-05', description: "Influencer & social media campaigns (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Campaign Report', location: 'Social Media' }
                ]
            },
            {
                title: "Compliance & Security",
                department: "Security",
                frequency: "Quarterly",
                role: "CISO",
                summary: "Protect content, users, and platform integrity.",
                tasks: [
                    { id: 'OTT-SEC-01', description: "Licensing & copyright enforcement (ISO 9001; Copyright laws)", priority: 'High', riskLevel: 'High', proof: 'Enforcement Log', location: 'Legal Dept' },
                    { id: 'OTT-SEC-02', description: "User data protection (ISO 27001; GDPR)", priority: 'High', riskLevel: 'High', proof: 'Data Protection Audit', location: 'IT Dept' },
                    { id: 'OTT-SEC-03', description: "DRM implementation (ISO/IEC 23009; ISO 27001)", priority: 'High', riskLevel: 'High', proof: 'DRM Config', location: 'IT Dept' },
                    { id: 'OTT-SEC-04', description: "Accessibility checks (WCAG 2.1)", priority: 'High', riskLevel: 'Medium', proof: 'Accessibility Report', location: 'QA Dept' },
                    { id: 'OTT-SEC-05', description: "Audit trails & reporting (ISO 27001; ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Audit Log', location: 'IT Dept' }
                ]
            },
             {
                title: "Legal & Compliance",
                department: "Legal",
                frequency: "Quarterly",
                role: "Compliance Officer",
                summary: "Ensure adherence to all legal and regulatory requirements.",
                tasks: [
                    { id: 'OTT-LEGAL-01', description: "Review and update Terms of Service and Privacy Policy.", priority: 'High', riskLevel: 'High', proof: 'Updated Documents', location: 'Legal Dept' },
                    { id: 'OTT-LEGAL-02', description: "Ensure compliance with regional content regulations.", priority: 'High', riskLevel: 'High', proof: 'Compliance Report', location: 'Legal Dept' },
                    { id: 'OTT-LEGAL-03', description: "Conduct training on data privacy for all employees.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR Dept' },
                    { id: 'OTT-LEGAL-04', description: "Manage and respond to legal notices and takedown requests.", priority: 'High', riskLevel: 'High', proof: 'Legal Case File', location: 'Legal Dept' },
                    { id: 'OTT-LEGAL-05', description: "Audit third-party vendor contracts for compliance clauses.", priority: 'High', riskLevel: 'Medium', proof: 'Contract Audit Report', location: 'Legal Dept' }
                ]
            },
            {
                title: "Platform Operations",
                department: "Operations",
                frequency: "Daily",
                role: "Ops Manager",
                summary: "Maintain platform stability and performance.",
                tasks: [
                    { id: 'OTT-OPS-001', description: "Monitor server health and load.", priority: 'High', riskLevel: 'High', proof: 'Monitoring Dashboard', location: 'NOC' },
                    { id: 'OTT-OPS-002', description: "Check CDN performance and cache hit ratio.", priority: 'High', riskLevel: 'High', proof: 'CDN Dashboard', location: 'NOC' },
                    { id: 'OTT-OPS-003', description: "Review application error logs for critical issues.", priority: 'High', riskLevel: 'High', proof: 'Log Management System', location: 'NOC' },
                    { id: 'OTT-OPS-004', description: "Verify backup and disaster recovery jobs completed successfully.", priority: 'High', riskLevel: 'High', proof: 'Backup Log', location: 'NOC' },
                    { id: 'OTT-OPS-005', description: "Handle customer support escalations related to platform issues.", priority: 'High', riskLevel: 'Medium', proof: 'Support Ticket System', location: 'Support Dept' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Monthly",
                role: "Facility Manager",
                summary: "A proactive checklist for preventing and managing pest infestations in technical environments like data centers and offices.",
                tasks: [
                    { id: 'PEST-OTT-01', description: "Inspect data centers, offices, and break rooms for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Pest Inspection Log', location: 'Facility-wide' },
                    { id: 'PEST-OTT-02', description: "Ensure a strict 'no food or drink' policy is enforced in data centers and server rooms.", priority: 'High', riskLevel: 'High', proof: 'Policy Signage & Audit', location: 'Data Centers' },
                    { id: 'PEST-OTT-03', description: "Check that all cable and pipe penetrations into the building are properly sealed.", priority: 'High', riskLevel: 'Medium', proof: 'Structural Inspection Log', location: 'Perimeter' },
                    { id: 'PEST-OTT-04', description: "Keep the area around the building's exterior, especially near air intakes, clear of debris.", priority: 'High', riskLevel: 'Medium', proof: 'Exterior Inspection', location: 'Exterior' },
                    { id: 'PEST-OTT-05', description: "Review and action all recommendations from the professional pest control vendor's report.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Action Log', location: 'Office' }
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
        description: "For park managers and safety officers. A comprehensive toolkit for ensuring visitor safety, ride maintenance, and exceptional guest experiences.",
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
        checklists: [
            {
                title: "🎢 Daily Ride Safety & Operations",
                department: "Ride Operations",
                frequency: "Daily",
                role: "Ride Supervisor",
                summary: "A critical pre-opening checklist to ensure all amusement rides are safe for public operation.",
                tasks: [
                    { id: 'TP-RIDE-01', description: "Conduct a full cycle test of each ride with no passengers.", priority: 'High', riskLevel: 'High', proof: 'Test Cycle Log', location: 'Each Ride' },
                    { id: 'TP-RIDE-02', description: "Inspect all safety restraints (harnesses, lap bars) for functionality and wear.", priority: 'High', riskLevel: 'High', proof: 'Restraint Inspection Log', location: 'Each Ride' },
                    { id: 'TP-RIDE-03', description: "Verify all emergency stop buttons are functional.", priority: 'High', riskLevel: 'High', proof: 'E-Stop Test Log', location: 'Each Ride Control Booth' },
                    { id: 'TP-RIDE-04', description: "Check communication systems between ride operators and the main control room.", priority: 'High', riskLevel: 'Medium', proof: 'Comms Check Log', location: 'Each Ride' },
                    { id: 'TP-RIDE-05', description: "Ensure all ride signage (height restrictions, health warnings) is clear and visible.", priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Ride Queues' }
                ]
            },
            {
                title: "👨‍👩‍👧‍👦 Crowd Control & Emergency Evacuation",
                department: "Security/Operations",
                frequency: "Ongoing",
                role: "Security Manager",
                summary: "Protocols for managing large crowds safely and executing an orderly evacuation in case of an emergency.",
                tasks: [
                    { id: 'TP-CROWD-01', description: "Monitor crowd density in real-time via CCTV and on-ground staff.", priority: 'High', riskLevel: 'High', proof: 'CCTV Monitoring', location: 'Control Room' },
                    { id: 'TP-CROWD-02', description: "Ensure all emergency exit routes are clear, unobstructed, and well-lit.", priority: 'High', riskLevel: 'High', proof: 'Daily Path Inspection Log', location: 'Park-wide' },
                    { id: 'TP-CROWD-03', description: "Brief all staff on the evacuation plan and their specific roles during an emergency.", priority: 'High', riskLevel: 'High', proof: 'Briefing Log', location: 'Staff Areas' },
                    { id: 'TP-CROWD-04', description: "Test the public address system to ensure announcements can be heard clearly throughout the park.", priority: 'High', riskLevel: 'High', proof: 'PA System Test Log', location: 'Control Room' },
                    { id: 'TP-CROWD-05', description: "Maintain designated 'safe zones' or assembly points for evacuation.", priority: 'High', riskLevel: 'High', proof: 'Venue Map', location: 'Park-wide' }
                ]
            },
            {
                title: "🍔 Food & Beverage Hygiene (HACCP)",
                department: "F&B",
                frequency: "Daily",
                role: "F&B Manager",
                summary: "A checklist to ensure all food outlets in the park meet stringent food safety and hygiene standards.",
                tasks: [
                    { id: 'TP-FB-01', description: "Log temperatures of all refrigerators, freezers, and hot-holding units at each outlet.", priority: 'High', riskLevel: 'High', proof: 'Temperature Logs', location: 'All F&B Outlets' },
                    { id: 'TP-FB-02', description: "Check for proper food labeling and dating (FIFO) in all storage areas.", priority: 'High', riskLevel: 'Medium', proof: 'Storage Audit', location: 'All F&B Outlets' },
                    { id: 'TP-FB-03', description: "Ensure handwashing stations are stocked and accessible to all food handlers.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'All F&B Outlets' },
                    { id: 'TP-FB-04', description: "Verify that cooking temperatures are being checked with a calibrated thermometer.", priority: 'High', riskLevel: 'High', proof: 'Cooking Temp Log', location: 'Kitchens' },
                    { id: 'TP-FB-05', description: "Ensure waste bins are covered and trash is disposed of regularly to prevent pests.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Log', location: 'F&B Areas' }
                ]
            },
            {
                title: "🎭 Character & Performer Management",
                department: "Entertainment",
                frequency: "Daily",
                role: "Entertainment Manager",
                summary: "A checklist to manage the welfare and performance quality of costumed characters and live performers.",
                tasks: [
                    { id: 'TP-PERF-01', description: "Inspect all costumes for cleanliness and damage before each shift.", priority: 'High', riskLevel: 'Medium', proof: 'Costume Inspection Log', location: 'Wardrobe' },
                    { id: 'TP-PERF-02', description: "Ensure performers take mandatory breaks in designated cool-down areas, especially in hot weather.", priority: 'High', riskLevel: 'High', proof: 'Break Schedule Log', location: 'Rest Areas' },
                    { id: 'TP-PERF-03', description: "Provide escorts for costumed characters moving through crowded areas to ensure their safety.", priority: 'High', riskLevel: 'High', proof: 'Escort Deployment Plan', location: 'Park-wide' },
                    { id: 'TP-PERF-04', description: "Brief performers on their schedules, locations, and specific interaction guidelines for the day.", priority: 'High', riskLevel: 'Low', proof: 'Briefing Log', location: 'Green Room' },
                    { id: 'TP-PERF-05', description: "Ensure a clear communication channel between performers/escorts and the central control room.", priority: 'High', riskLevel: 'Medium', proof: 'Comms Check', location: 'Control Room' }
                ]
            },
            {
                title: "💧 Water Park Safety & Hygiene",
                department: "Aquatics",
                frequency: "Daily/Hourly",
                role: "Aquatics Manager",
                summary: "A specialized checklist for water parks, focusing on water quality, lifeguard readiness, and slide safety.",
                tasks: [
                    { id: 'TP-WATER-01', description: "Test and log water chemistry (chlorine, pH levels) in all pools and attractions hourly.", priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Pools' },
                    { id: 'TP-WATER-02', description: "Inspect all water slides and features for any structural damage or hazards before opening.", priority: 'High', riskLevel: 'High', proof: 'Slide Inspection Log', location: 'Water Park' },
                    { id: 'TP-WATER-03', description: "Ensure all lifeguard stations are manned and lifeguards have proper rescue equipment.", priority: 'High', riskLevel: 'High', proof: 'Lifeguard Deployment Sheet', location: 'Pools' },
                    { id: 'TP-WATER-04', description: "Conduct daily skill drills and rescue scenarios with the lifeguard team.", priority: 'High', riskLevel: 'High', proof: 'Drill Log', location: 'Pools' },
                    { id: 'TP-WATER-05', description: "Verify that all water pumps, filters, and circulation systems are operating correctly.", priority: 'High', riskLevel: 'High', proof: 'Pump Room Log', location: 'Pump Room' }
                ]
            },
            {
                title: "🔧 Ride Maintenance & Engineering",
                department: "Engineering",
                frequency: "Daily/Weekly",
                role: "Chief Engineer",
                summary: "A checklist for the scheduled inspection and preventive maintenance of all amusement park rides.",
                tasks: [
                    { id: 'TP-ENG-01', description: "Follow the manufacturer's daily/weekly maintenance schedule for each ride.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Records', location: 'Workshop' },
                    { id: 'TP-ENG-02', description: "Perform non-destructive testing (NDT) on critical ride components as per schedule.", priority: 'High', riskLevel: 'High', proof: 'NDT Report', location: 'Workshop' },
                    { id: 'TP-ENG-03', description: "Lubricate all moving parts according to the maintenance manual.", priority: 'High', riskLevel: 'High', proof: 'Lubrication Log', location: 'Each Ride' },
                    { id: 'TP-ENG-04', description: "Inspect and torque critical bolts and fasteners.", priority: 'High', riskLevel: 'High', proof: 'Torque Log', location: 'Each Ride' },
                    { id: 'TP-ENG-05', description: "Document all maintenance and repairs in a central logbook for each ride.", priority: 'High', riskLevel: 'High', proof: 'Ride Logbook', location: 'Engineering Office' }
                ]
            },
            {
                title: "🚑 First Aid & Medical Services",
                department: "Health Services",
                frequency: "Daily",
                role: "Medical Chief",
                summary: "Ensures the park's medical facilities are ready to handle everything from minor scrapes to major emergencies.",
                tasks: [
                    { id: 'TP-MED-01', description: "Check inventory of all first aid stations to ensure they are fully stocked.", priority: 'High', riskLevel: 'High', proof: 'Inventory Checklist', location: 'First Aid Stations' },
                    { id: 'TP-MED-02', description: "Verify all medical staff (nurses, paramedics) are on duty and their certifications are current.", priority: 'High', riskLevel: 'High', proof: 'Staff Roster & Certs', location: 'Medical Center' },
                    { id: 'TP-MED-03', description: "Test all medical equipment (AEDs, oxygen tanks) to ensure they are functional.", priority: 'High', riskLevel: 'High', proof: 'Equipment Test Log', location: 'Medical Center' },
                    { id: 'TP-MED-04', description: "Review and brief the team on protocols for common incidents (heat stroke, minor injuries).", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Medical Center' },
                    { id: 'TP-MED-05', description: "Ensure clear communication pathways exist between medical staff and park security/operations.", priority: 'High', riskLevel: 'High', proof: 'Comms Check', location: 'Medical Center' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Weekly",
                role: "Facility Manager",
                summary: "A proactive checklist for managing pests in a large park with numerous food outlets and high foot traffic.",
                tasks: [
                    { id: 'PEST-TP-01', description: "Inspect all F&B outlets, waste disposal areas, and gardens for signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Pest Inspection Log', location: 'Park-wide' },
                    { id: 'PEST-TP-02', description: "Ensure all trash cans are covered and emptied frequently, especially in food areas.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Audit', location: 'Park-wide' },
                    { id: 'PEST-TP-03', description: "Check that landscaping is maintained to avoid providing habitats for pests near guest areas.", priority: 'Medium', riskLevel: 'Low', proof: 'Landscaping Report', location: 'Gardens' },
                    { id: 'PEST-TP-04', description: "Review reports from the professional pest control vendor and ensure all recommendations are actioned.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Action Plan', location: 'Office' },
                    { id: 'PEST-TP-05', description: "Ensure good drainage across the park to prevent standing water, which can attract mosquitoes.", priority: 'High', riskLevel: 'High', proof: 'Drainage Inspection Log', location: 'Park-wide' }
                ]
            }
        ]
    },
    // --- Corporate & Tech ---
    {
        id: 'facility_management_blueprint',
        title: "Facility Management Blueprint",
        priceUSD: 169.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Corporate & Tech",
        description: "The complete playbook for facility managers to ensure a safe, compliant, and efficient workplace environment across multiple locations.",
        icon: <Building2 className="w-8 h-8 text-primary" />,
        badgeText: "Best for Corporate",
        badgeVariant: "accent" as const,
        whoIsItFor: ["Heads of Facilities", "COOs", "Admin Heads", "Corporate Real Estate Managers", "Founders", "VPs", "Directors", "GMs"],
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
        id: 'corporate_legal_compliance_starter_kit',
        title: "Corporate Legal & Compliance Starter Kit",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Corporate & Tech",
        description: "For founders and managers. A foundational toolkit to ensure your business operations are legally sound and compliant.",
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent" as const,
        whoIsItFor: ["Founders", "COOs", "HR Managers", "Admin Heads", "First-time Managers", "VPs", "Directors", "GMs"],
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
        id: 'enterprise_risk_compliance_pack',
        title: "Enterprise Risk & Compliance",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Corporate & Tech",
        description: "For C-Suite, CISOs, and DPOs. A toolkit to manage AI ethics, data privacy (GDPR/DPDP), and cybersecurity risks in the modern enterprise.",
        icon: <BrainCircuit className="w-8 h-8 text-primary" />,
        badgeText: "Bestseller",
        badgeVariant: "accent",
        whoIsItFor: ["CISOs", "Data Protection Officers (DPOs)", "Heads of AI", "Legal & Compliance VPs", "CTOs", "Founders", "Directors", "GMs", "VPs"],
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
    // --- Healthcare ---
    {
        id: 'healthcare_compliance_suite',
        title: "Healthcare & Hospital Checklist",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Healthcare",
        description: "For Hospital COOs & Quality Heads. An NABH & JCI-aligned toolkit to ensure patient safety and compliance.",
        icon: <Hospital className="w-8 h-8 text-primary" />,
        badgeText: "Popular",
        badgeVariant: "default" as const,
        whoIsItFor: ["Hospital Owners", "COOs", "Chief Medical Officers", "Heads of Quality & Compliance", "Lab Directors", "VPs", "GMs", "Directors"],
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
        id: 'pharmacy_ops_pack',
        title: "Pharmacy Operations",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Healthcare",
        description: "For pharmacy owners and pharmacists-in-charge. A toolkit for ensuring dispensing accuracy, regulatory compliance, and patient safety.",
        icon: <Pill className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Pharmacy Owners", "Pharmacists-in-Charge", "Heads of Quality", "Compliance Officers", "GMs", "VPs", "Directors"],
        sampleItems: [
            "Master a 'Prescription Verification & Dispensing' protocol.",
            "Implement a 'Controlled Substances & Narcotics' management system.",
            "Standardize 'Cold Chain & Vaccine Management' to ensure efficacy.",
            "Includes checklists for 'Patient Counseling' and 'Look-Alike, Sound-Alike Drugs'."
        ],
        checklists: [
            {
                title: "℞ Prescription Intake & Verification",
                department: "Pharmacy",
                frequency: "Per Prescription",
                role: "Pharmacist",
                summary: "The first line of defense against medication errors, ensuring every prescription is valid, clear, and appropriate.",
                tasks: [
                    { id: 'PHARM-RX-01', description: "Verify prescription is valid, dated, and signed by a licensed practitioner.", priority: 'High', riskLevel: 'High', proof: 'Prescription Review', location: 'Dispensing Counter' },
                    { id: 'PHARM-RX-02', description: "Confirm patient identity using two identifiers (e.g., name and date of birth).", priority: 'High', riskLevel: 'High', proof: 'ID Check', location: 'Dispensing Counter' },
                    { id: 'PHARM-RX-03', description: "Check for prescription clarity, including drug name, strength, dosage, and route.", priority: 'High', riskLevel: 'High', proof: 'Prescription Analysis', location: 'Dispensing Counter' },
                    { id: 'PHARM-RX-04', description: "Review patient's profile for allergies, contraindications, or potential drug interactions.", priority: 'High', riskLevel: 'High', proof: 'Patient Profile Review in System', location: 'System' },
                    { id: 'PHARM-RX-05', description: "Contact the prescriber to clarify any ambiguities or concerns.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Phone/System' }
                ]
            },
            {
                title: "💊 Dispensing & Final Check",
                department: "Pharmacy",
                frequency: "Per Prescription",
                role: "Dispensing Technician/Pharmacist",
                summary: "A two-person or tech-assisted final check to ensure the right drug is in the right bottle for the right patient.",
                tasks: [
                    { id: 'PHARM-DISP-01', description: "Select the correct medication from the shelf, verifying the NDC (National Drug Code) or equivalent.", priority: 'High', riskLevel: 'High', proof: 'Visual/Scan Check', location: 'Shelves' },
                    { id: 'PHARM-DISP-02', description: "Accurately count or measure the dosage.", priority: 'High', riskLevel: 'High', proof: 'Counting Tray/Scale', location: 'Dispensing Counter' },
                    { id: 'PHARM-DISP-03', description: "Prepare the label with patient name, drug name, instructions, and auxiliary warnings.", priority: 'High', riskLevel: 'High', proof: 'Label Printout', location: 'Dispensing Counter' },
                    { id: 'PHARM-DISP-04', description: "A second person (or pharmacist) performs a final check of the original prescription, the dispensed drug, and the label before bagging.", priority: 'High', riskLevel: 'High', proof: 'Final Check Sign-off', location: 'Dispensing Counter' },
                    { id: 'PHARM-DISP-05', description: "Include necessary patient information leaflets with the medication.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dispensing Counter' }
                ]
            },
            {
                title: "🔒 Controlled Substances & Narcotics Log",
                department: "Compliance/Pharmacy",
                frequency: "Daily/Per Transaction",
                role: "Pharmacist-in-Charge",
                summary: "A rigorous protocol for managing high-risk medications to prevent diversion and ensure regulatory compliance.",
                tasks: [
                    { id: 'PHARM-NARC-01', description: "Store all controlled substances in a securely locked safe or cabinet with restricted access.", priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Safe' },
                    { id: 'PHARM-NARC-02', description: "Maintain a perpetual inventory log, documenting every dose dispensed and received.", priority: 'High', riskLevel: 'High', proof: 'Narcotics Register/Logbook', location: 'Safe' },
                    { id: 'PHARM-NARC-03', description: "Perform a physical count of all controlled substances at the end of every shift or day, reconciled by two staff members.", priority: 'High', riskLevel: 'High', proof: 'Count Reconciliation Sheet', location: 'Safe' },
                    { id: 'PHARM-NARC-04', description: "Investigate and report any discrepancies to the appropriate regulatory body immediately.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Office' },
                    { id: 'PHARM-NARC-05', description: "Verify patient and prescriber identity rigorously for all controlled substance prescriptions.", priority: 'High', riskLevel: 'High', proof: 'ID Check Log', location: 'Dispensing Counter' }
                ]
            },
            {
                title: "❄️ Cold Chain & Vaccine Management",
                department: "Pharmacy",
                frequency: "Daily",
                role: "Pharmacist",
                summary: "Ensures the efficacy of temperature-sensitive medications like vaccines and insulin.",
                tasks: [
                    { id: 'PHARM-COLD-01', description: "Log the temperature of all refrigerators and freezers twice daily (morning and evening).", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Refrigerators/Freezers' },
                    { id: 'PHARM-COLD-02', description: "Check that a calibrated digital data logger is in use and review its data weekly for any excursions.", priority: 'High', riskLevel: 'High', proof: 'Data Logger Report', location: 'Office' },
                    { id: 'PHARM-COLD-03', description: "Ensure the refrigerator has a backup power source and a temperature alarm system.", priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'Facility' },
                    { id: 'PHARM-COLD-04', description: "Store vaccines in the main body of the refrigerator, not in the door or drawers.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Refrigerator' },
                    { id: 'PHARM-COLD-05', description: "When dispensing, pack cold chain items in an appropriate insulated bag with a coolant pack.", priority: 'High', riskLevel: 'High', proof: 'Packaging Check', location: 'Dispensing Counter' }
                ]
            },
            {
                title: "🗣️ Patient Counseling Protocol",
                department: "Pharmacy",
                frequency: "Per New Prescription",
                role: "Pharmacist",
                summary: "A checklist to ensure every patient receives critical information about their new medication.",
                tasks: [
                    { id: 'PHARM-COUNSEL-01', description: "Verbally confirm the patient's name and the medication being dispensed.", priority: 'High', riskLevel: 'Medium', proof: 'Procedure Adherence', location: 'Counseling Area' },
                    { id: 'PHARM-COUNSEL-02', description: "Explain the purpose of the medication and how to take it (dosage, time, with/without food).", priority: 'High', riskLevel: 'High', proof: 'Procedure Adherence', location: 'Counseling Area' },
                    { id: 'PHARM-COUNSEL-03', description: "Discuss common side effects and what to do if they occur.", priority: 'High', riskLevel: 'High', proof: 'Procedure Adherence', location: 'Counseling Area' },
                    { id: 'PHARM-COUNSEL-04', description: "Ask the patient to repeat the key instructions back to you to ensure understanding ('teach-back' method).", priority: 'High', riskLevel: 'High', proof: 'Procedure Adherence', location: 'Counseling Area' },
                    { id: 'PHARM-COUNSEL-05', description: "Offer written information and ask if the patient has any further questions.", priority: 'High', riskLevel: 'Medium', proof: 'Procedure Adherence', location: 'Counseling Area' }
                ]
            },
            {
                title: "📦 Inventory Management & Expiry Control",
                department: "Stores/Pharmacy",
                frequency: "Monthly",
                role: "Inventory Manager",
                summary: "A systematic approach to manage stock, prevent expiry-related losses, and ensure product availability.",
                tasks: [
                    { id: 'PHARM-INV-01', description: "Conduct a monthly review of all stock, identifying items expiring in the next 3-6 months.", priority: 'High', riskLevel: 'High', proof: 'Expiry Report', location: 'Shelves/System' },
                    { id: 'PHARM-INV-02', description: "Move short-expiry items to the front of the shelf (First-Expiry, First-Out).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Audit', location: 'Shelves' },
                    { id: 'PHARM-INV-03', description: "Remove all expired medications from stock and place them in a designated quarantine area for disposal.", priority: 'High', riskLevel: 'High', proof: 'Quarantine Log', location: 'Quarantine Area' },
                    { id: 'PHARM-INV-04', description: "Perform cycle counts on high-value or fast-moving items weekly.", priority: 'High', riskLevel: 'Medium', proof: 'Cycle Count Log', location: 'Shelves' },
                    { id: 'PHARM-INV-05', description: "Review supplier order levels based on sales data to avoid overstocking or stockouts.", priority: 'High', riskLevel: 'Medium', proof: 'Order Review Log', location: 'Office' }
                ]
            },
            {
                title: "‼️ Look-Alike, Sound-Alike (LASA) Drug Management",
                department: "Quality/Pharmacy",
                frequency: "Quarterly",
                role: "Pharmacist-in-Charge",
                summary: "Specific actions to prevent dangerous errors caused by confusing drug names or packaging.",
                tasks: [
                    { id: 'PHARM-LASA-01', description: "Maintain an updated list of LASA drugs used in the pharmacy.", priority: 'High', riskLevel: 'High', proof: 'LASA Drug List', location: 'Office' },
                    { id: 'PHARM-LASA-02', description: "Physically separate LASA drugs on the shelves, or use 'shelf-talker' visual warnings.", priority: 'High', riskLevel: 'High', proof: 'Shelf Audit', location: 'Shelves' },
                    { id: 'PHARM-LASA-03', description: "Use 'TALL-man' lettering on shelf labels and in the computer system (e.g., vinCRIStine vs. vinBLASTine).", priority: 'High', riskLevel: 'High', proof: 'Label Audit', location: 'Shelves/System' },
                    { id: 'PHARM-LASA-04', description: "Require a mandatory pharmacist double-check for all dispensed LASA drugs.", priority: 'High', riskLevel: 'High', proof: 'Dispensing Log', location: 'Dispensing Counter' },
                    { id: 'PHARM-LASA-05', description: "Include LASA drug safety in regular staff training.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR/Office' }
                ]
            },
            {
                title: "🗑️ Pharmaceutical Waste Disposal",
                department: "Compliance",
                frequency: "Monthly",
                role: "Compliance Officer",
                summary: "Ensures expired and unused medications are disposed of in an environmentally safe and legally compliant manner.",
                tasks: [
                    { id: 'PHARM-WASTE-01', description: "Segregate pharmaceutical waste from general waste into clearly marked, secure bins.", priority: 'High', riskLevel: 'High', proof: 'Waste Bin Audit', location: 'Waste Area' },
                    { id: 'PHARM-WASTE-02', description: "Maintain a log of all expired drugs sent for disposal.", priority: 'High', riskLevel: 'High', proof: 'Disposal Log', location: 'Office' },
                    { id: 'PHARM-WASTE-03', description: "Use a licensed and certified pharmaceutical waste disposal vendor.", priority: 'High', riskLevel: 'High', proof: 'Vendor Contract & License', location: 'Office' },
                    { id: 'PHARM-WASTE-04', description: "Ensure a 'cradle-to-grave' manifest is received from the vendor, confirming destruction.", priority: 'High', riskLevel: 'High', proof: 'Destruction Certificate', location: 'Office' },
                    { id: 'PHARM-WASTE-05', description: "Train all staff on correct waste segregation procedures.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' }
                ]
            }
        ]
    },
    // --- Education ---
    {
        id: 'education_sector_pack',
        title: "School & Campus Operations Checklist",
        priceUSD: 79.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Education",
        description: "For School Principals and Admin Heads. A comprehensive toolkit for ensuring student safety, facility management, and operational excellence.",
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        whoIsItFor: ["School Owners & Trustees", "Principals", "Heads of Administration", "Security Supervisors", "GMs", "VPs", "Directors"],
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
    // --- Industrial & Transport ---
    {
        id: 'manufacturing_operations_ehs_pack',
        title: "Manufacturing Operations & EHS Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Industrial & Transport",
        description: "For Plant Heads and Safety Officers. A toolkit for ensuring production efficiency, worker safety (EHS), and quality control.",
        icon: <Factory className="w-8 h-8 text-primary" />,
        whoIsItFor: ["Plant Heads", "COOs", "VPs of Production", "Heads of Safety & EHS", "Quality Control Managers", "Directors", "GMs", "VPs"],
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
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Industrial & Transport",
        description: "For warehouse managers and logistics heads. A comprehensive toolkit to optimize inventory, ensure safety, and improve fulfillment efficiency.",
        icon: <Warehouse className="w-8 h-8 text-primary" />,
        badgeText: "New & In-Depth",
        badgeVariant: "accent" as const,
        whoIsItFor: ["Warehouse Directors", "Logistics Managers", "Supply Chain VPs", "Inventory Control Managers", "Heads of Facilities", "GMs", "VPs", "Directors"],
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
    // --- Wellness & Beauty ---
    {
        id: 'sports_clubs_facilities_pack',
        title: "Sports Clubs & Multi-sport Facilities",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Wellness & Beauty",
        description: "For club managers and directors. A toolkit for maintaining global standards in safety, hygiene, and crowd management across diverse sports facilities.",
        icon: <Trophy className="w-8 h-8 text-primary" />,
        whoIsItFor: ["Sports Club GMs", "Academy Directors", "Heads of Operations", "Facility Managers"],
        sampleItems: [
            "Implement a 'Facility Safety & Access Audit' for comprehensive security.",
            "Standardize 'Sports Equipment & Infrastructure Maintenance' to prevent injuries.",
            "Master 'Event & Crowd Management' for tournaments and gatherings.",
            "Includes 'Swimming Pool Safety' and 'Emergency Response' protocols."
        ],
        checklists: [
            {
                title: "Facility Safety & Access Audit",
                department: "Security",
                frequency: "Daily",
                role: "Security Supervisor",
                summary: "Ensures controlled access and facility safety, referencing ISO 45001 and NFPA standards.",
                tasks: [
                    { id: 'SC-FAC-01', description: "Verify all entry/exit points are monitored and controlled.", priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Entrances' },
                    { id: 'SC-FAC-02', description: "Check that all CCTV cameras are operational and recording.", priority: 'High', riskLevel: 'High', proof: 'CCTV Log', location: 'Control Room' },
                    { id: 'SC-FAC-03', description: "Ensure visitor and vendor management protocols are being followed.", priority: 'High', riskLevel: 'Medium', proof: 'Visitor Log', location: 'Reception' },
                    { id: 'SC-FAC-04', description: "Inspect all emergency exits to ensure they are unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Egress Path Audit', location: 'Facility-wide' },
                    { id: 'SC-FAC-05', description: "Test panic alarms and other emergency communication systems.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Control Room' }
                ]
            },
            {
                title: "Sports Equipment & Infrastructure Maintenance",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Head",
                summary: "A checklist for regular inspection of all sports infrastructure to ensure safety and quality, aligned with ISO 9001 and OSHA.",
                tasks: [
                    { id: 'SC-EQ-01', description: "Inspect playing surfaces (turf, courts) for wear, tear, or hazards.", priority: 'High', riskLevel: 'High', proof: 'Surface Inspection Log', location: 'Playing Areas' },
                    { id: 'SC-EQ-02', description: "Check goals, nets, and posts for stability and damage.", priority: 'High', riskLevel: 'High', proof: 'Equipment Inspection Log', location: 'Playing Areas' },
                    { id: 'SC-EQ-03', description: "Inspect spectator seating for structural integrity.", priority: 'High', riskLevel: 'Medium', proof: 'Seating Audit', location: 'Grandstands' },
                    { id: 'SC-EQ-04', description: "Verify sports lighting is functional and provides adequate illumination.", priority: 'High', riskLevel: 'Medium', proof: 'Lighting Check', location: 'Playing Areas' },
                    { id: 'SC-EQ-05', description: "Lubricate and maintain any moving parts on equipment like basketball hoops.", priority: 'Medium', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Courts' }
                ]
            },
            {
                title: "First Aid & Medical Readiness",
                department: "Health & Safety",
                frequency: "Monthly",
                role: "Safety Officer",
                summary: "Ensures the facility is prepared for medical emergencies, referencing WHO and OSHA guidelines.",
                tasks: [
                    { id: 'SC-MED-01', description: "Check all first-aid kits for completeness and expiry dates.", priority: 'High', riskLevel: 'High', proof: 'First-Aid Kit Log', location: 'Various' },
                    { id: 'SC-MED-02', description: "Ensure AEDs (Automated External Defibrillators) are charged and accessible.", priority: 'High', riskLevel: 'High', proof: 'AED Log', location: 'Various' },
                    { id: 'SC-MED-03', description: "Verify a list of trained first-aid responders is posted and up-to-date.", priority: 'High', riskLevel: 'Medium', proof: 'Posted List', location: 'Notice Boards' },
                    { id: 'SC-MED-04', description: "Review and update emergency contact numbers for local hospitals/ambulance services.", priority: 'High', riskLevel: 'High', proof: 'Contact List', location: 'Control Room' },
                    { id: 'SC-MED-05', description: "Conduct a mock medical emergency drill quarterly.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Facility-wide' }
                ]
            },
            {
                title: "Coaching & Training Compliance",
                department: "HR/Operations",
                frequency: "Quarterly",
                role: "Head Coach/Director",
                summary: "A checklist to ensure all coaching staff are qualified and provide a safe training environment, per ISO 9001.",
                tasks: [
                    { id: 'SC-COACH-01', description: "Verify all coaches have current, valid certifications for their sport.", priority: 'High', riskLevel: 'High', proof: 'Certification File', location: 'Office' },
                    { id: 'SC-COACH-02', description: "Ensure all coaches have completed mandatory first-aid and child safety training.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'SC-COACH-03', description: "Observe a sample of training sessions to ensure adherence to the club's code of conduct.", priority: 'High', riskLevel: 'Medium', proof: 'Observation Notes', location: 'Playing Areas' },
                    { id: 'SC-COACH-04', description: "Review training plans to ensure they are age and skill-level appropriate.", priority: 'High', riskLevel: 'Medium', proof: 'Training Plan Audit', location: 'Office' },
                    { id: 'SC-COACH-05', description: "Maintain a clear protocol for handling player injuries during training.", priority: 'High', riskLevel: 'High', proof: 'Injury Protocol Document', location: 'Office' }
                ]
            },
            {
                title: "Event & Crowd Management SOP",
                department: "Events/Security",
                frequency: "Per Event",
                role: "Event Manager",
                summary: "A standard operating procedure for safely managing crowds during tournaments and events, aligned with ISO 45001 and NFPA.",
                tasks: [
                    { id: 'SC-EVENT-01', description: "Develop a detailed crowd management plan, including entry/exit flow.", priority: 'High', riskLevel: 'High', proof: 'Crowd Management Plan', location: 'Office' },
                    { id: 'SC-EVENT-02', description: "Ensure adequate and clear signage for seating, restrooms, and emergency exits.", priority: 'High', riskLevel: 'Medium', proof: 'Signage Plan', location: 'Venue' },
                    { id: 'SC-EVENT-03', description: "Brief security and volunteer staff on their roles and positions.", priority: 'High', riskLevel: 'High', proof: 'Briefing Log', location: 'Venue' },
                    { id: 'SC-EVENT-04', description: "Set up barricades and queuing systems to manage flow.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Venue' },
                    { id: 'SC-EVENT-05', description: "Test communication systems between security, medical, and event staff.", priority: 'High', riskLevel: 'High', proof: 'Comms Test Log', location: 'Control Room' }
                ]
            },
            {
                title: "Hygiene & Sanitation Standards",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Housekeeping Supervisor",
                summary: "A daily audit to ensure all member areas meet hygiene standards based on WHO and ISO 9001 guidelines.",
                tasks: [
                    { id: 'SC-HYG-01', description: "Inspect and clean locker rooms, including benches and lockers.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Locker Rooms' },
                    { id: 'SC-HYG-02', description: "Sanitize restrooms, showers, and drinking water stations.", priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Wet Areas' },
                    { id: 'SC-HYG-03', description: "Ensure cafeteria and food-serving areas are clean and compliant with food safety norms.", priority: 'High', riskLevel: 'High', proof: 'F&B Hygiene Log', location: 'Cafeteria' },
                    { id: 'SC-HYG-04', description: "Manage waste disposal effectively to prevent pests and odors.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Log', location: 'Waste Area' },
                    { id: 'SC-HYG-05', description: "Conduct a weekly deep clean of all high-traffic areas.", priority: 'High', riskLevel: 'Medium', proof: 'Deep Clean Schedule', location: 'Facility-wide' }
                ]
            },
            {
                title: "Sustainability & Environmental Management",
                department: "Facilities",
                frequency: "Quarterly",
                role: "Facility Manager",
                summary: "A checklist to track and improve the facility's environmental footprint, referencing ISO 14001.",
                tasks: [
                    { id: 'SC-SUS-01', description: "Audit water usage, especially for pools and landscaping, and check for leaks.", priority: 'High', riskLevel: 'Medium', proof: 'Water Audit Report', location: 'Facility-wide' },
                    { id: 'SC-SUS-02', description: "Review energy consumption and optimize lighting and HVAC schedules.", priority: 'High', riskLevel: 'Medium', proof: 'Energy Analysis', location: 'Office' },
                    { id: 'SC-SUS-03', description: "Monitor waste management and track recycling rates.", priority: 'Medium', riskLevel: 'Low', proof: 'Waste Report', location: 'Waste Area' },
                    { id: 'SC-SUS-04', description: "Ensure sustainable purchasing practices for supplies and equipment.", priority: 'Medium', riskLevel: 'Low', proof: 'Procurement Policy', location: 'Office' },
                    { id: 'SC-SUS-05', description: "Explore opportunities for renewable energy or water harvesting.", priority: 'Low', riskLevel: 'Low', proof: 'Feasibility Study', location: 'Office' }
                ]
            },
             {
                title: "Swimming Pool Safety & Water Quality",
                department: "Aquatics/Facilities",
                frequency: "Daily/Hourly",
                role: "Pool Operator",
                summary: "A detailed checklist for maintaining pristine water quality and ensuring the safety of the swimming pool area.",
                tasks: [
                    { id: 'SC-POOL-01', description: "Test and log chlorine and pH levels of the pool water every 2 hours.", priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'SC-POOL-02', description: "Check that all life-saving equipment (lifebuoys, shepherd's crook) is accessible and in good condition.", priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Log', location: 'Poolside' },
                    { id: 'SC-POOL-03', description: "Inspect pool decks for slip hazards and ensure they are clean.", priority: 'High', riskLevel: 'Medium', proof: 'Deck Inspection Log', location: 'Pool Deck' },
                    { id: 'SC-POOL-04', description: "Verify that pool filtration and circulation systems are running correctly.", priority: 'High', riskLevel: 'High', proof: 'Pump Room Log', location: 'Pump Room' },
                    { id: 'SC-POOL-05', description: "Ensure Material Safety Data Sheets (MSDS) for all pool chemicals are readily available.", priority: 'High', riskLevel: 'High', proof: 'MSDS Binder Check', location: 'Chemical Store' }
                ]
            }
        ]
    },
    {
        id: 'fitness_centers_gyms_pack',
        title: "Fitness Centers & Gyms",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Wellness & Beauty",
        description: "For gym owners and fitness managers. A toolkit to enhance member safety, ensure equipment reliability, and deliver a consistent, high-quality fitness experience.",
        icon: <Dumbbell className="w-8 h-8 text-primary" />,
        whoIsItFor: ["Gym Owners", "Fitness Center Managers", "Personal Training Directors", "Heads of Operations"],
        sampleItems: [
            "Implement a 'Daily Facility Hygiene Audit' for a spotless gym.",
            "Prevent accidents with an 'Equipment Safety & Maintenance' protocol.",
            "Ensure staff are qualified with a 'Trainer & Staff Certification Audit'.",
            "Includes 'Wet Area Safety' for gyms with pools, saunas, or steam rooms."
        ],
        checklists: [
            {
                title: "Daily Facility Hygiene Audit",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Duty Manager",
                summary: "A checklist to ensure the entire facility meets high standards of cleanliness, referencing WHO and ISO 9001.",
                tasks: [
                    { id: 'GYM-HYG-01', description: "Sanitize high-touch surfaces on cardio and strength equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Gym Floor' },
                    { id: 'GYM-HYG-02', description: "Clean and disinfect floors, especially in free weight and stretching areas.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Gym Floor' },
                    { id: 'GYM-HYG-03', description: "Inspect and sanitize locker rooms, showers, and restrooms.", priority: 'High', riskLevel: 'High', proof: 'Restroom Log', location: 'Wet Areas' },
                    { id: 'GYM-HYG-04', description: "Ensure disinfectant wipes and hand sanitizer stations are stocked and available for members.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Gym-wide' },
                    { id: 'GYM-HYG-05', description: "Empty all trash receptacles.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Gym-wide' }
                ]
            },
            {
                title: "Equipment Safety & Maintenance",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Technician",
                summary: "A preventive maintenance checklist to ensure equipment safety and longevity, aligned with OSHA and ISO 45001.",
                tasks: [
                    { id: 'GYM-EQ-01', description: "Inspect all strength machine cables for fraying or damage.", priority: 'High', riskLevel: 'High', proof: 'Cable Inspection Report', location: 'Strength Area' },
                    { id: 'GYM-EQ-02', description: "Test emergency stop functionality on all treadmills.", priority: 'High', riskLevel: 'High', proof: 'E-Stop Test Log', location: 'Cardio Area' },
                    { id: 'GYM-EQ-03', description: "Check all free weights, benches, and racks for structural integrity.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Free Weight Area' },
                    { id: 'GYM-EQ-04', description: "Lubricate guide rods and moving parts as per manufacturer specifications.", priority: 'Medium', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Strength Area' },
                    { id: 'GYM-EQ-05', description: "Calibrate electronic equipment like stationary bikes and ellipticals.", priority: 'Medium', riskLevel: 'Low', proof: 'Calibration Certificate', location: 'Cardio Area' }
                ]
            },
            {
                title: "Fire & Emergency Preparedness",
                department: "Safety",
                frequency: "Monthly",
                role: "Safety Officer",
                summary: "A checklist to ensure readiness for fire or medical emergencies, based on NFPA and ISO 45001.",
                tasks: [
                    { id: 'GYM-FIRE-01', description: "Inspect fire extinguishers for charge and accessibility.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Tag', location: 'Gym-wide' },
                    { id: 'GYM-FIRE-02', description: "Ensure all emergency exits and evacuation paths are unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Egress Path Audit', location: 'Gym-wide' },
                    { id: 'GYM-FIRE-03', description: "Test emergency lighting and exit signs.", priority: 'High', riskLevel: 'High', proof: 'Lighting Test Log', location: 'Gym-wide' },
                    { id: 'GYM-FIRE-04', description: "Check that first-aid kits and AEDs are fully stocked and accessible.", priority: 'High', riskLevel: 'High', proof: 'First-Aid Log', location: 'Reception/Gym Floor' },
                    { id: 'GYM-FIRE-05', description: "Conduct a monthly safety briefing with staff.", priority: 'Medium', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Staff Room' }
                ]
            },
            {
                title: "Trainer & Staff Certification Audit",
                department: "HR/Management",
                frequency: "Quarterly",
                role: "Gym Manager",
                summary: "Ensures all trainers and staff are certified and trained, in line with ISO 9001.",
                tasks: [
                    { id: 'GYM-STAFF-01', description: "Verify all personal trainers have current, valid certifications.", priority: 'High', riskLevel: 'High', proof: 'Certification File', location: 'Office' },
                    { id: 'GYM-STAFF-02', description: "Confirm all staff have completed CPR and First-Aid training.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'GYM-STAFF-03', description: "Review trainer attendance and session delivery logs.", priority: 'Medium', riskLevel: 'Low', proof: 'Session Logs', location: 'System' },
                    { id: 'GYM-STAFF-04', description: "Observe trainers to ensure they are providing safe and effective instruction.", priority: 'High', riskLevel: 'Medium', proof: 'Observation Report', location: 'Gym Floor' },
                    { id: 'GYM-STAFF-05', description: "Provide ongoing training on new equipment or fitness trends.", priority: 'Medium', riskLevel: 'Low', proof: 'Training Calendar', location: 'Office' }
                ]
            },
            {
                title: "Health & Safety Compliance",
                department: "EHS",
                frequency: "Monthly",
                role: "Safety Officer",
                summary: "A monthly audit to ensure the gym complies with all health and safety regulations, per ISO 45001.",
                tasks: [
                    { id: 'GYM-HS-01', description: "Conduct a general risk assessment of the gym floor.", priority: 'High', riskLevel: 'High', proof: 'Risk Assessment Form', location: 'Gym Floor' },
                    { id: 'GYM-HS-02', description: "Ensure safety signage (e.g., 'Re-rack weights') is visible and in good condition.", priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Gym-wide' },
                    { id: 'GYM-HS-03', description: "Check availability and use of PPE for staff where necessary.", priority: 'Medium', riskLevel: 'Medium', proof: 'PPE Stock Check', location: 'Storage' },
                    { id: 'GYM-HS-04', description: "Review and update the gym's incident/accident log.", priority: 'High', riskLevel: 'High', proof: 'Incident Log', location: 'Office' },
                    { id: 'GYM-HS-05', description: "Ensure new members receive a proper orientation on equipment usage.", priority: 'High', riskLevel: 'Medium', proof: 'Member Induction Log', location: 'System' }
                ]
            },
            {
                title: "Energy & Environmental Efficiency",
                department: "Facilities",
                frequency: "Quarterly",
                role: "Facility Manager",
                summary: "A checklist to optimize resource use and promote sustainability, based on ISO 14001.",
                tasks: [
                    { id: 'GYM-ENV-01', description: "Inspect HVAC systems and clean filters for optimal performance.", priority: 'High', riskLevel: 'Medium', proof: 'HVAC Maintenance Log', location: 'HVAC Room' },
                    { id: 'GYM-ENV-02', description: "Audit lighting schedules and promote 'turn off when not in use' policies.", priority: 'Medium', riskLevel: 'Low', proof: 'Lighting Schedule', location: 'Gym-wide' },
                    { id: 'GYM-ENV-03', description: "Check for water leaks in restrooms and drinking fountains.", priority: 'High', riskLevel: 'Medium', proof: 'Leak Inspection Log', location: 'Wet Areas' },
                    { id: 'GYM-ENV-04', description: "Monitor waste and ensure recycling programs are being followed.", priority: 'Medium', riskLevel: 'Low', proof: 'Waste Audit', location: 'Waste Area' },
                    { id: 'GYM-ENV-05', description: "Review utility bills to track consumption trends.", priority: 'High', riskLevel: 'Low', proof: 'Utility Bill Analysis', location: 'Office' }
                ]
            },
            {
                title: "Member Experience & Feedback",
                department: "Customer Service",
                frequency: "Daily",
                role: "Manager",
                summary: "A checklist to ensure high standards of member service and systematically handle feedback, per ISO 9001.",
                tasks: [
                    { id: 'GYM-MEM-01', description: "Ensure staff are greeting members warmly upon entry.", priority: 'High', riskLevel: 'Low', proof: 'Observation', location: 'Reception' },
                    { id: 'GYM-MEM-02', description: "Check that music and TV channels are appropriate and at a suitable volume.", priority: 'Medium', riskLevel: 'Low', proof: 'Ambiance Check', location: 'Gym Floor' },
                    { id: 'GYM-MEM-03', description: "Log all member complaints and suggestions in a central system.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Log', location: 'System' },
                    { id: 'GYM-MEM-04', description: "Follow up on all complaints within 24 hours.", priority: 'High', riskLevel: 'High', proof: 'Follow-up Log', location: 'System' },
                    { id: 'GYM-MEM-05', description: "Analyze feedback weekly to identify recurring issues.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Report', location: 'Office' }
                ]
            },
            {
                title: "Wet Area Safety (Pools, Saunas, Steam Rooms)",
                department: "Facilities",
                frequency: "Daily",
                role: "Duty Manager",
                summary: "A safety checklist for gyms with wet areas, referencing WHO and ISO 14001.",
                tasks: [
                    { id: 'GYM-WET-01', description: "If pool is present, test and log chlorine/pH levels twice daily.", priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'GYM-WET-02', description: "Check temperatures of sauna and steam rooms are within safe limits.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Sauna/Steam Room' },
                    { id: 'GYM-WET-03', description: "Ensure floors are clean and non-slip mats are in place to prevent falls.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Wet Areas' },
                    { id: 'GYM-WET-04', description: "Verify emergency alarms or call buttons inside wet areas are functional.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Wet Areas' },
                    { id: 'GYM-WET-05', description: "Ensure proper ventilation to prevent mold and maintain air quality.", priority: 'High', riskLevel: 'Medium', proof: 'Ventilation System Check', location: 'HVAC Room' }
                ]
            }
        ]
    },
    // --- Social Cause ---
    {
        id: 'animal_shelter_pack',
        title: "Animal Shelter Operations Pack",
        priceUSD: 0,
        priceINR: 0,
        paymentId: '', // No payment needed
        category: "Social Cause",
        description: "A comprehensive toolkit for animal shelters to ensure animal welfare, facility hygiene, and smooth operations. As a small contribution to the incredible work being done for animal welfare, we are offering this pack for free.",
        icon: <PawPrint className="w-8 h-8 text-primary" />,
        whoIsItFor: ["Animal Shelter Managers", "Rescue Coordinators", "Veterinarians", "Volunteer Coordinators", "NGO Staff"],
        sampleItems: [
            "Ensure animal health with a 'Daily Animal Welfare Check'.",
            "Maintain a clean environment with the 'Shelter Hygiene Protocol'.",
            "Streamline the 'Adoption & Foster Care Process'.",
            "Manage your team effectively with a 'Volunteer Onboarding & Management' checklist."
        ],
        checklists: [
            {
                title: "🐶 Daily Animal Health & Welfare Check",
                department: "Animal Care",
                frequency: "Daily",
                role: "Animal Caretaker",
                summary: "A fundamental daily check to monitor the health and well-being of every animal in the shelter.",
                tasks: [
                    { id: 'AS-AHW-01', description: "Check each animal for any signs of illness, injury, or distress (e.g., lethargy, not eating).", priority: 'High', riskLevel: 'High', proof: 'Health Log', location: 'Kennels/Enclosures' },
                    { id: 'AS-AHW-02', description: "Ensure every animal has access to fresh, clean water.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kennels/Enclosures' },
                    { id: 'AS-AHW-03', description: "Provide the correct type and amount of food to each animal according to their diet plan.", priority: 'High', riskLevel: 'Medium', proof: 'Feeding Log', location: 'Kennels/Enclosures' },
                    { id: 'AS-AHW-04', description: "Administer any required medications and document it in the animal's record.", priority: 'High', riskLevel: 'High', proof: 'Medication Administration Record (MAR)', location: 'Medical Room' },
                    { id: 'AS-AHW-05', description: "Observe and log the animal's behavior (e.g., social, fearful, active).", priority: 'Medium', riskLevel: 'Low', proof: 'Behavioral Log', location: 'Kennels/Enclosures' }
                ]
            },
            {
                title: "🧼 Shelter Hygiene & Disease Control Protocol",
                department: "Operations/Hygiene",
                frequency: "Daily",
                role: "Kennel Manager",
                summary: "A strict cleaning and disinfection protocol to prevent the spread of disease within the shelter.",
                tasks: [
                    { id: 'AS-HYG-01', description: "Clean and disinfect every kennel/enclosure daily with a vet-approved disinfectant.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kennels/Enclosures' },
                    { id: 'AS-HYG-02', description: "Wash all food and water bowls with disinfectant after each use.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Kitchen/Cleaning Area' },
                    { id: 'AS-HYG-03', description: "Implement and monitor strict quarantine protocols for all new and sick animals.", priority: 'High', riskLevel: 'High', proof: 'Quarantine Log', location: 'Isolation Area' },
                    { id: 'AS-HYG-04', description: "Ensure staff and volunteers use hand sanitizer or wash hands between handling different animals.", priority: 'High', riskLevel: 'High', proof: 'Observation/Signage', location: 'Throughout Shelter' },
                    { id: 'AS-HYG-05', description: "Properly dispose of all animal waste in designated, sealed bins.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Log', location: 'Waste Disposal Area' }
                ]
            },
            {
                title: "🏡 Adoption & Foster Care Process",
                department: "Adoptions",
                frequency: "Per Adoption/Foster",
                role: "Adoption Counselor",
                summary: "A structured process to ensure animals are placed in safe, loving, and appropriate homes.",
                tasks: [
                    { id: 'AS-ADOPT-01', description: "Have potential adopters fill out a detailed application form, including lifestyle and home environment questions.", priority: 'High', riskLevel: 'High', proof: 'Completed Application Form', location: 'Adoption Office' },
                    { id: 'AS-ADOPT-02', description: "Conduct an interview with the applicant to assess their suitability and expectations.", priority: 'High', riskLevel: 'High', proof: 'Interview Notes', location: 'Adoption Office' },
                    { id: 'AS-ADOPT-03', description: "If required by policy, conduct a home visit (virtual or in-person) before finalizing the adoption.", priority: 'High', riskLevel: 'High', proof: 'Home Visit Report', location: 'Adopter\'s Home' },
                    { id: 'AS-ADOPT-04', description: "Ensure the animal is vaccinated, dewormed, and spayed/neutered before leaving the shelter.", priority: 'High', riskLevel: 'High', proof: 'Veterinary Records', location: 'Medical Records' },
                    { id: 'AS-ADOPT-05', description: "Complete all adoption paperwork, including transfer of ownership and microchip registration.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Adoption Contract', location: 'Adoption Office' }
                ]
            },
            {
                title: "🙋 Volunteer Onboarding & Management",
                department: "Volunteers",
                frequency: "Per Volunteer",
                role: "Volunteer Coordinator",
                summary: "A checklist to recruit, train, and manage volunteers effectively, ensuring they are a valuable and safe asset to the shelter.",
                tasks: [
                    { id: 'AS-VOL-01', description: "Conduct an orientation session for new volunteers covering shelter policies, safety procedures, and basic animal handling.", priority: 'High', riskLevel: 'High', proof: 'Orientation Sign-in Sheet', location: 'Training Room' },
                    { id: 'AS-VOL-02', description: "Have all volunteers sign a liability waiver and code of conduct agreement.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Waiver', location: 'Coordinator\'s Office' },
                    { id: 'AS-VOL-03', description: "Provide specific, hands-on training for different roles (e.g., dog walking, cat socializing, cleaning).", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Various' },
                    { id: 'AS-VOL-04', description: "Maintain a clear and accessible schedule for volunteer shifts.", priority: 'High', riskLevel: 'Low', proof: 'Volunteer Schedule', location: 'Coordinator\'s Office' },
                    { id: 'AS-VOL-05', description: "Provide regular feedback, appreciation, and recognition to keep volunteers engaged and motivated.", priority: 'Medium', riskLevel: 'Low', proof: 'Communication Log', location: 'Coordinator\'s Office' }
                ]
            },
            {
                title: "📥 New Animal Intake & Quarantine",
                department: "Animal Care",
                frequency: "Per New Animal",
                role: "Intake Coordinator",
                summary: "A systematic protocol for safely processing new arrivals to protect the existing shelter population.",
                tasks: [
                    { id: 'AS-INTAKE-01', description: "Assign a unique ID to the new animal and create a record in the shelter management system.", priority: 'High', riskLevel: 'Medium', proof: 'System Record', location: 'Intake Room' },
                    { id: 'AS-INTAKE-02', description: "Conduct an initial health screening for obvious signs of injury or illness.", priority: 'High', riskLevel: 'High', proof: 'Health Screen Form', location: 'Intake Room' },
                    { id: 'AS-INTAKE-03', description: "Place the animal in a designated quarantine area, separate from the general population.", priority: 'High', riskLevel: 'High', proof: 'Location Log', location: 'Isolation Area' },
                    { id: 'AS-INTAKE-04', description: "Administer initial vaccinations and deworming as per shelter protocol.", priority: 'High', riskLevel: 'High', proof: 'Medical Record', location: 'Medical Room' },
                    { id: 'AS-INTAKE-05', description: "Perform a basic behavioral assessment to understand the animal's temperament.", priority: 'Medium', riskLevel: 'Medium', proof: 'Behavioral Notes', location: 'Quarantine Area' }
                ]
            },
            {
                title: "🛡️ Facility & Enclosure Safety Audit",
                department: "Facilities",
                frequency: "Weekly",
                role: "Shelter Manager",
                summary: "A weekly walkthrough to ensure the physical environment is safe for both animals and humans.",
                tasks: [
                    { id: 'AS-FACILITY-01', description: "Inspect all kennel and enclosure doors and latches to ensure they are secure.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Enclosures' },
                    { id: 'AS-FACILITY-02', description: "Check for any sharp edges, broken wires, or potential hazards within enclosures.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Enclosures' },
                    { id: 'AS-FACILITY-03', description: "Ensure outdoor play areas are secure with no gaps in fencing.", priority: 'High', riskLevel: 'High', proof: 'Perimeter Check Log', location: 'Outdoor Areas' },
                    { id: 'AS-FACILITY-04', description: "Verify that fire extinguishers and first-aid kits are accessible and fully stocked.", priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Log', location: 'Facility-wide' },
                    { id: 'AS-FACILITY-05', description: "Check that all cleaning and medical supplies are stored securely away from animals.", priority: 'High', riskLevel: 'High', proof: 'Storage Area Audit', location: 'Storage Rooms' }
                ]
            },
            {
                title: "🎉 Adoption Event & Community Outreach",
                department: "Adoptions/Marketing",
                frequency: "Per Event",
                role: "Outreach Coordinator",
                summary: "A checklist to plan and execute successful off-site adoption events to increase visibility and find more homes for animals.",
                tasks: [
                    { id: 'AS-EVENT-01', description: "Select and book a suitable, safe venue for the event.", priority: 'High', riskLevel: 'Medium', proof: 'Venue Contract', location: 'Office' },
                    { id: 'AS-EVENT-02', description: "Promote the event on social media, community calendars, and with local media.", priority: 'High', riskLevel: 'Medium', proof: 'Marketing Plan', location: 'Office' },
                    { id: 'AS-EVENT-03', description: "Prepare 'adoption-ready' animal profiles and necessary paperwork for the event.", priority: 'High', riskLevel: 'Medium', proof: 'Event Binder', location: 'Office' },
                    { id: 'AS-EVENT-04', description: "Ensure safe transport cages, water, and shade are available for all animals at the event.", priority: 'High', riskLevel: 'High', proof: 'Event Supply Checklist', location: 'Event Site' },
                    { id: 'AS-EVENT-05', description: "Have experienced volunteers or staff on hand to manage animal handling and interact with the public.", priority: 'High', riskLevel: 'High', proof: 'Staff/Volunteer Roster', location: 'Event Site' }
                ]
            },
            {
                title: "📱 Social Media for Adoptions & Donations",
                department: "Marketing",
                frequency: "Weekly",
                role: "Social Media Manager",
                summary: "A checklist to create engaging content that drives adoptions and secures donations for the shelter.",
                tasks: [
                    { id: 'AS-SM-01', description: "Post high-quality photos and compelling stories of at least 3-5 adoptable animals each week.", priority: 'High', riskLevel: 'Medium', proof: 'Social Media Feed', location: 'Online' },
                    { id: 'AS-SM-02', description: "Share 'Happy Tail' success stories of recently adopted animals to encourage other adopters.", priority: 'High', riskLevel: 'Low', proof: 'Social Media Feed', location: 'Online' },
                    { id: 'AS-SM-03', description: "Create a weekly 'urgent needs' post highlighting specific donation requests (e.g., food, blankets, medical funds).", priority: 'High', riskLevel: 'Medium', proof: 'Social Media Feed', location: 'Online' },
                    { id: 'AS-SM-04', description: "Respond to all comments and direct messages from potential adopters or donors within 24 hours.", priority: 'High', riskLevel: 'Medium', proof: 'Inbox Review', location: 'Online' },
                    { id: 'AS-SM-05', description: "Go 'Live' on platforms like Instagram or Facebook to showcase animals and answer questions in real-time.", priority: 'Medium', riskLevel: 'Low', proof: 'Live Video Archive', location: 'Online' }
                ]
            }
        ]
    }
]



    

    
