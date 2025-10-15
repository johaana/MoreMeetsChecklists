
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
                summary: "Drive profitability with a strategic framework for preparing the hotel's annual budget, focusing on accurate revenue forecasting, departmental cost control, and smart CAPEX planning.",
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
                summary: "Turn financial data into action. This structured meeting agenda helps you review performance against budget, analyze variances, and implement effective cost-saving measures with your HODs.",
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
                summary: "Protect your brand's reputation with a rigorous internal audit. Ensure every guest touchpoint meets the highest standards for service, cleanliness, and experience.",
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
                summary: "Integrate new employees effectively. This 30-day plan ensures new hires are properly onboarded, trained, and aligned with your hotel's culture and operational standards from day one.",
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
                summary: "Develop stronger leaders with a framework for fair and effective performance reviews, focusing on measurable KPIs, leadership skills, and clear goal setting.",
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
                summary: "Take control of your online brand. This daily protocol helps you monitor, manage, and respond to reviews across all platforms, protecting your reputation and driving bookings.",
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
                summary: "Protect your guests and your reputation with a proactive checklist for preventing and managing pest infestations, crucial for health standards and guest satisfaction.",
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
                    { id: 'REST-MEETING-05', description: "Review customer feedback and online reviews from the past week.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Summary', location: 'Meeting Room' }
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
                    { id: 'CK-KO-005', description: "Review prep list and conduct a quick check of yesterday's stored prep items for quality and date labels.", priority: 'Medium', riskLevel: 'Medium', proof: 'Prep List Sign-off', location: 'Walk-in' }
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
                    { id: 'CK-FRS-005', description: "Move all cold/frozen items to their respective storage areas immediately.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Storage' }
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
                    { id: 'CK-HLC-005', description: "Check that all staff are following proper hygiene practices (handwashing, glove use).", priority: 'High', riskLevel: 'High', proof: 'Visual Observation', location: 'Kitchen' }
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
                    { id: 'CK-KCC-005', description: "Sweep and mop all kitchen floors, including under equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' }
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
                    { id: 'FOH-O-005', description: "Ensure restrooms are clean, stocked, and pleasant.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Log', location: 'Restrooms' }
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
                    { id: 'PEST-REST-005', description: "Check for and seal any potential pest entry points in walls, floors, or around pipes.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Entire Restaurant' }
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
        description: "A premium toolkit for luxury brand managers to deliver impeccable service and ensure ironclad security for high-value inventory.",
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
            title: "Built on Global Luxury & Security Standards",
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
                summary: "Establish an ironclad routine to secure your high-value store. This rigorous protocol prevents theft and guarantees staff safety from open to close.",
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
                summary: "Protect your most valuable assets from internal and external threats. This precise checklist tracks every high-value item with two-person sign-offs and daily counts to eliminate loss.",
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
                summary: "Deliver a flawless brand experience that justifies a premium price point. This checklist ensures your store's presentation meets the exacting standards of a luxury brand, from lighting and scent to display cleanliness.",
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
                summary: "Turn high-net-worth clients into lifelong brand advocates. This protocol guides your team in delivering an exceptional, personalized service experience that defines luxury.",
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
                summary: "Protect your business from financial crime and regulatory penalties. This checklist ensures secure cash handling and strict compliance with Anti-Money Laundering (AML) regulations for large transactions.",
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
                summary: "Elevate your after-sales service to build unbreakable client trust. This detailed process for managing custom orders and repairs turns a potential pain point into a loyalty-building experience.",
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
                summary: "Build a brand that discerning clients can trust. This checklist ensures you meet modern standards for ethical sourcing and sustainability, a key differentiator in the luxury market.",
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
                summary: "Protect your high-net-worth clients and your business from cyber threats. This checklist ensures your store is compliant with PCI DSS standards to safeguard sensitive payment data.",
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
                    { id: 'FAS-OPEN-05', description: "Hold a morning huddle to discuss daily sales targets, promotions, and new arrivals.", priority: 'High', riskLevel: 'Low', proof: 'Huddle Notes', location: 'Staff Area' }
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
                    { id: 'FAS-INV-05', description: "Update all visual merchandising to reflect the new season's theme.", priority: 'High', riskLevel: 'Medium', proof: 'VM Directive', location: 'Sales Floor' }
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
                    { id: 'FAS-VM-05', description: "Audit signage to ensure it is clean, current, and consistent with the brand's aesthetic.", priority: 'High', riskLevel: 'Low', proof: 'Signage Audit', location: 'Sales Floor' }
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
                    { id: 'FAS-FIT-05', description: "Report any suspicious behavior to the store manager or security immediately.", priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Fitting Rooms' }
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
                    { id: 'FAS-OMNI-05', description: "Train all staff on how to handle online orders and returns professionally.", priority: 'High', riskLevel: 'Medium', proof: 'Training Record', location: 'HR' }
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
                    { id: 'SM-OPEN-05', description: "Hold a brief morning huddle with department heads to discuss daily sales targets and priorities.", priority: 'High', riskLevel: 'Low', proof: 'Meeting Log', location: 'Staff Area' }
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
                    { id: 'SM-FRESH-05', description: "Check that all staff handling fresh food are wearing gloves, hairnets, and adhering to hygiene standards.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Fresh Depts' }
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
                    { id: 'SM-RECV-05', description: "Process and document any shortages, damages, or discrepancies with the carrier immediately.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Receiving Office' }
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
                    { id: 'SM-PLANO-05', description: "Train staff on the importance of planogram compliance and how to read the diagrams.", priority: 'Medium', riskLevel: 'Low', proof: 'Training Log', location: 'Staff Training' }
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
                    { id: 'SM-CASH-05', description: "At closing, reconcile cash, card, and digital payments for each POS and investigate all discrepancies.", priority: 'High', riskLevel: 'High', proof: 'End-of-Day Reconciliation Report', location: 'Cash Office' }
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
                    { id: 'SM-LP-05', description: "Train front-end staff on procedures for handling counterfeit currency and fraudulent returns.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Staff Training' }
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
                    { id: 'SM-WASTE-05', description: "Keep the waste and recycling area clean and sanitized to comply with health codes.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Waste Area' }
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
                    { id: 'ELEC-OPEN-05', description: "Lock/unlock entry points & log timings.", priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Entrances' }
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
                    { id: 'ELEC-INV-05', description: "Review reorder levels and supplier performance reports weekly.", priority: 'High', riskLevel: 'Medium', proof: 'Supplier Report', location: 'Office' }
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
                    { id: 'ELEC-VM-05', description: "Clean screens and surfaces of all display devices.", priority: 'High', riskLevel: 'Low', proof: 'Cleaning Log', location: 'Sales Floor' }
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
                    { id: 'ELEC-CASH-05', description: "Log all refunds and cancellations with manager approval.", priority: 'High', riskLevel: 'Medium', proof: 'Refund Log', location: 'POS Terminal' }
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
                    { id: 'ELEC-SAFETY-04', description: "Check safe storage of cleaning chemicals and other hazardous materials.", priority: 'High', riskLevel: 'Medium', proof: 'Chemical Storage Log', location: 'Storage' },
                    { id: 'ELEC-SAFETY-05', description: "Conduct a weekly safety briefing with all staff.", priority: 'High', riskLevel: 'Medium', proof: 'Safety Meeting Minutes', location: 'Staff Room' }
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
                    { id: 'ELEC-CUST-05', description: "Protect customer data under global privacy laws during transactions.", priority: 'High', riskLevel: 'High', proof: 'Privacy Compliance Audit', location: 'POS' }
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
                    { id: 'FP-PP-05', description: "Ensure all cast and key crew contracts are signed, including NDA and IP assignment clauses.", priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'Production Office' }
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
                    { id: 'FP-PS-05', description: "Ensure first aid stations and designated emergency evacuation routes are clearly marked.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Set' }
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
                    { id: 'FP-SHOOT-05', description: "Continuity and prop tracking (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Continuity Report', location: 'Set' }
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
                    { id: "FP-POST-05", description: "Ensure the project is set up correctly for final delivery formats (e.g., DCP, broadcast). (SMPTE)", priority: "High", riskLevel: "High", proof: "Project Setup Screenshot", location: "Post-Production Suite" }
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
                    { id: "FP-DIST-05", description: "Archive all project files, including raw footage and final masters, in a secure long-term storage solution.", priority: "High", riskLevel: "High", proof: "Archive Log", location: "Data Center" }
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
                    { id: 'OTT-CS-05', description: "Partnerships & influencer agreements (ISO 9001; Contract compliance)", priority: 'Medium', riskLevel: 'Medium', proof: 'Signed Agreements', location: 'Office' }
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
                    { id: 'OTT-DEV-05', description: "Analytics & tracking setup (ISO 9001; GDPR compliance)", priority: 'High', riskLevel: 'Medium', proof: 'Analytics Config', location: 'Dev Environment' }
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
                    { id: 'OTT-UPL-05', description: "Archiving & backup (ISO 9001; ISO 27001)", priority: 'High', riskLevel: 'High', proof: 'Archive Log', location: 'CMS' }
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
                    { id: 'OTT-MKTG-05', description: "Influencer & social media campaigns (ISO 9001)", priority: 'High', riskLevel: 'Medium', proof: 'Campaign Report', location: 'Social Media' }
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
                    { id: 'OTT-SEC-05', description: "Audit trails & reporting (ISO 27001; ISO 9001)", priority: 'High', riskLevel: 'High', proof: 'Audit Log', location: 'IT Dept' }
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
                    { id: 'OTT-LEGAL-05', description: "Audit third-party vendor contracts for compliance clauses.", priority: 'High', riskLevel: 'Medium', proof: 'Contract Audit Report', location: 'Legal Dept' }
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
                    { id: 'OTT-OPS-005', description: "Handle customer support escalations related to platform issues.", priority: 'High', riskLevel: 'Medium', proof: 'Support Ticket System', location: 'Support Dept' }
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
                    { id: 'TP-RIDE-05', description: "Ensure all ride signage (height restrictions, health warnings) is clear and visible.", priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Ride Queues' }
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
                    { id: 'TP-CROWD-05', description: "Maintain designated 'safe zones' or assembly points for evacuation.", priority: 'High', riskLevel: 'High', proof: 'Venue Map', location: 'Park-wide' }
                ]
            },
            {
                title: "🍔 Food & Beverage Hygiene (HACCP)",
                department: "F&B",
                frequency: "Daily",
                role: "F&B Manager",
                summary: "Uphold the highest food safety standards across all park outlets. This checklist ensures your F&B operations meet stringent HACCP guidelines, protecting guests and your brand.",
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
                summary: "Protect your most valuable assets: your performers. This checklist manages the welfare, safety, and performance quality of costumed characters and live entertainers.",
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
                summary: "Ensure a safe and hygienic aquatic environment. This specialized checklist covers water chemistry, lifeguard readiness, and the structural integrity of slides and features.",
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
                summary: "Go beyond basic checks with a professional-grade protocol for the scheduled inspection and preventive maintenance of every single ride, ensuring long-term safety and reliability.",
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
                summary: "Be prepared for any medical situation. This checklist ensures your park's medical facilities are ready to handle everything from minor scrapes to major emergencies.",
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
                summary: "Maintain a clean and pleasant guest environment with a proactive pest management program designed for large parks with high foot traffic and numerous food outlets.",
                tasks: [
                    { id: 'PEST-TP-01', description: "Inspect all F&B outlets, waste disposal areas, and gardens for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Pest Inspection Log', location: 'Park-wide' },
                    { id: 'PEST-TP-02', description: "Ensure all food in storage and on display is properly covered or sealed.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Park-wide' },
                    { id: 'PEST-TP-03', description: "Check that garbage and refuse areas are clean and bins are tightly covered.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Exterior/Waste Area' },
                    { id: 'PEST-TP-04', description: "Review reports from the professional pest control vendor and ensure all recommended actions are taken.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Review', location: 'Office' },
                    { id: 'PEST-TP-05', description: "Ensure good drainage across the park to prevent standing water, which can attract mosquitoes.", priority: 'High', riskLevel: 'High', proof: 'Drainage Inspection Log', location: 'Park-wide' }
                ]
            }
        ]
    },
    {
        id: 'sports_clubs_facilities_pack',
        title: "Sports Clubs & Facilities",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A comprehensive toolkit for managing sports facilities, focusing on member safety, event management, and infrastructure maintenance.",
        icon: <Trophy className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Sports Club GMs", "Stadium Managers", "Directors of Operations", "Heads of Facilities", "VPs", "Directors"],
        sampleItems: [
            "Prevent injuries with our 'Daily Equipment Safety' checklist.",
            "Master 'Event & Crowd Management' for flawless execution.",
            "Ensure member safety and data privacy with 'Access Control & Cybersecurity' SOPs.",
            "Includes 'Fire & Emergency Preparedness' and 'Seasonal Readiness' protocols."
        ],
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
                    { id: 'SPORT-INFRA-05', description: "Inspect seating areas and bleachers for structural integrity and safety.", priority: 'High', riskLevel: 'High', proof: 'Seating Inspection Log', location: 'Spectator Areas' }
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
                    { id: 'SPORT-EVENT-05', description: "Manage post-event cleanup, breakdown, and final financial reconciliation.", priority: 'High', riskLevel: 'Medium', proof: 'Post-Event Report', location: 'Office' }
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
                    { id: 'SPORT-MEMBER-05', description: "Log and address any member-reported safety concerns promptly.", priority: 'High', riskLevel: 'High', proof: 'Incident/Concern Log', location: 'Front Desk/Office' }
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
                    { id: 'SPORT-FIRE-05', description: "Maintain an updated emergency contact list for all key personnel and services.", priority: 'High', riskLevel: 'Medium', proof: 'Contact List', location: 'Office/Control Room' }
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
                    { id: 'SPORT-VENDOR-05', description: "Review and approve all vendor invoices against work completed.", priority: 'High', riskLevel: 'Medium', proof: 'Invoice Approval', location: 'Office' }
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
                    { id: 'SPORT-CYBER-05', description: "Test the data breach incident response plan.", priority: 'High', riskLevel: 'High', proof: 'Breach Drill Report', location: 'Office' }
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
                    { id: 'SPORT-SEASON-05', description: "Stock up on necessary seasonal supplies (e.g., sandbags for flooding, extra water for heatwaves).", priority: 'Medium', riskLevel: 'Medium', proof: 'Inventory Check', location: 'Storage' }
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
                    { id: 'GYM-EQUIP-05', description: "Place 'Out of Order' signs on any malfunctioning equipment and log it for repair.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Request Log', location: 'Affected Equipment' }
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
                    { id: 'GYM-HYGIENE-05', description: "Mop floors and vacuum carpets in all areas.", priority: 'High', riskLevel: 'Medium', proof: 'Floor Cleaning Log', location: 'Entire Gym' }
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
                    { id: 'GYM-MEMBER-05', description: "Take a member photo and issue an access card or key fob.", priority: 'High', riskLevel: 'Low', proof: 'Member Profile Update', location: 'System' }
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
                    { id: 'GYM-EMERG-05', description: "Maintain an incident report log for any accidents or medical events.", priority: 'High', riskLevel: 'High', proof: 'Incident Report Log', location: 'Office' }
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
                    { id: 'GYM-POOL-04', description: "Verify that pool drains are covered and filtration systems are running correctly.", priority: 'High', riskLevel: 'High', proof: 'Pump Room Log', location: 'Pump Room' },
                    { id: 'GYM-POOL-05', description: "If lifeguards are on duty, ensure they are alert and positioned correctly.", priority: 'High', riskLevel: 'High', proof: 'Supervisor Observation', location: 'Poolside' }
                ]
            }
        ]
    },
    {
        id: 'cinema_operations_pack',
        title: "Cinema & Multiplex Operations",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "An essential toolkit for cinema managers to ensure a flawless movie-going experience, from projection quality to crowd safety.",
        icon: <Ticket className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Cinema Managers", "Multiplex Owners", "Heads of Operations", "Projectionists", "VPs", "GMs", "Directors"],
        sampleItems: [
            "Ensure perfect screenings with a 'Projection & Sound Quality' check.",
            "Implement a 'Fire & Life Safety Audit' to prevent disasters.",
            "Manage 'Box Office & Concessions' for efficiency and profit.",
            "Includes a 'Crowd Management & Entry/Exit' protocol."
        ],
        globalStandards: {
            title: "Built on Global Cinema & Safety Standards",
            standards: [
                { name: "Technical Quality", description: "Protocols for projection and sound aligned with DCI (Digital Cinema Initiatives) specifications." },
                { name: "Public Safety", description: "Best practices for fire safety (NFPA), crowd management, and emergency evacuation." },
                { name: "Food Hygiene", description: "HACCP principles for concessions stands." },
                { name: "Accessibility", description: "Guidelines for ensuring an accessible experience for all guests." }
            ]
        },
        checklists: [
            {
                title: "🎬 Daily Opening & Readiness",
                department: "Operations",
                frequency: "Daily",
                role: "Duty Manager",
                summary: "Prepare your cinema for a perfect show day. This checklist covers everything from lobby cleanliness to ensuring all systems are go for the first screening.",
                tasks: [
                    { id: 'CINE-OPEN-01', description: "Power on all systems: POS, projectors, sound systems, and digital signage.", priority: 'High', riskLevel: 'Medium', proof: 'System Boot-up Log', location: 'Control Room/Box Office' },
                    { id: 'CINE-OPEN-02', description: "Conduct a walkthrough of all auditoriums, lobbies, and restrooms for cleanliness.", priority: 'High', riskLevel: 'Medium', proof: 'Cleanliness Inspection Log', location: 'Entire Cinema' },
                    { id: 'CINE-OPEN-03', description: "Check that all lighting, from lobby to emergency exits, is functional.", priority: 'High', riskLevel: 'High', proof: 'Lighting Check Log', location: 'Entire Cinema' },
                    { id: 'CINE-OPEN-04', description: "Verify film schedules and showtimes are displayed correctly on all digital and physical signage.", priority: 'High', riskLevel: 'High', proof: 'Schedule Verification', location: 'Lobby/Box Office' },
                    { id: 'CINE-OPEN-05', description: "Hold a pre-shift briefing with all staff to review schedules, promotions, and any operational issues.", priority: 'High', riskLevel: 'Low', proof: 'Briefing Notes', location: 'Staff Area' }
                ]
            },
            {
                title: "📽️ Projection & Sound Quality Check",
                department: "Technical",
                frequency: "Before First Show",
                role: "Projectionist",
                summary: "Guarantee a flawless technical presentation for every movie. This critical check ensures audio and video are perfectly calibrated for an immersive experience.",
                tasks: [
                    { id: 'CINE-TECH-01', description: "Run a test pattern on each screen to check for focus, brightness, and color accuracy.", priority: 'High', riskLevel: 'High', proof: 'Test Pattern Log', location: 'Each Auditorium' },
                    { id: 'CINE-TECH-02', description: "Play a test audio clip to verify all speakers (including surround and subwoofers) are working.", priority: 'High', riskLevel: 'High', proof: 'Sound Check Log', location: 'Each Auditorium' },
                    { id: 'CINE-TECH-03', description: "Confirm that the correct film file (DCP) and audio track (e.g., 5.1, Dolby Atmos) are loaded for each show.", priority: 'High', riskLevel: 'High', proof: 'Playlist Verification', location: 'Projection Booth' },
                    { id: 'CINE-TECH-04', description: "Check that screen masking is correctly set for the aspect ratio of the film.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Each Auditorium' },
                    { id: 'CINE-TECH-05', description: "Clean projector lenses and port glass.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Projection Booth' }
                ]
            },
            {
                title: "🍿 Box Office & Concessions Operations",
                department: "Sales",
                frequency: "Per Shift",
                role: "F&B/Box Office Manager",
                summary: "Maximize your highest-margin revenue streams. This checklist ensures your front-of-house is efficient, well-stocked, and ready to serve customers quickly.",
                tasks: [
                    { id: 'CINE-SALES-01', description: "Verify cash float and credit card machine functionality at the box office and concessions.", priority: 'High', riskLevel: 'High', proof: 'Opening/Closing Float Form', location: 'POS' },
                    { id: 'CINE-SALES-02', description: "Check inventory levels of all concession items (popcorn, drinks, candy) and restock as needed.", priority: 'High', riskLevel: 'Medium', proof: 'Stock Count Sheet', location: 'Concessions' },
                    { id: 'CINE-SALES-03', description: "Ensure all food equipment (popcorn popper, warmers) is clean and operational.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Check Log', location: 'Concessions' },
                    { id: 'CINE-SALES-04', description: "Verify all promotional combos and pricing are correctly programmed in the POS.", priority: 'High', riskLevel: 'High', proof: 'POS Audit', location: 'POS' },
                    { id: 'CINE-SALES-05', description: "Reconcile all sales (cash, card) at the end of the shift.", priority: 'High', riskLevel: 'High', proof: 'End-of-Shift Report', location: 'Office' }
                ]
            },
            {
                title: "🔥 Fire & Life Safety Audit",
                department: "Safety",
                frequency: "Weekly",
                role: "Duty Manager",
                summary: "Prevent a tragedy before it happens. This essential checklist, inspired by lessons from incidents like the Uphaar fire, ensures your cinema meets all critical life safety standards.",
                tasks: [
                    { id: 'CINE-FIRE-01', description: "Physically walk all emergency exit routes to ensure they are completely clear and unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Exit Path Log', location: 'Entire Cinema' },
                    { id: 'CINE-FIRE-02', description: "Check that all emergency exit doors are unlocked and can be easily opened from the inside.", priority: 'High', riskLevel: 'High', proof: 'Door Check Log', location: 'All Exits' },
                    { id: 'CINE-FIRE-03', description: "Test emergency lighting and exit signs to ensure they illuminate upon power failure.", priority: 'High', riskLevel: 'High', proof: 'Lighting Test Log', location: 'Entire Cinema' },
                    { id: 'CINE-FIRE-04', description: "Inspect fire extinguishers to ensure they are charged, in date, and accessible.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Inspection Tag', location: 'Various' },
                    { id: 'CINE-FIRE-05', description: "Brief staff on their specific roles during an evacuation.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Staff Meeting' }
                ]
            },
            {
                title: "👨‍👩‍👧‍👦 Crowd Management & Entry/Exit Flow",
                department: "Operations",
                frequency: "Per Show",
                role: "Usher/Floor Staff",
                summary: "Ensure a smooth and safe flow of guests, especially during sold-out shows. This protocol manages queues, ticket checks, and the crucial period between shows.",
                tasks: [
                    { id: 'CINE-CROWD-01', description: "Set up stanchions or ropes to create orderly queues for box office and concessions.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Lobby' },
                    { id: 'CINE-CROWD-02', description: "Position staff at auditorium entrances to check tickets and guide guests to their seats.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Position Plan', location: 'Auditorium Entrances' },
                    { id: 'CINE-CROWD-03', description: "Monitor lobby congestion between showtimes and manage flow.", priority: 'High', riskLevel: 'Medium', proof: 'Supervisor Observation', location: 'Lobby' },
                    { id: 'CINE-CROWD-04', description: "Ensure the 'house emptying' and 'house filling' processes are managed to prevent crossover and delays.", priority: 'High', riskLevel: 'Medium', proof: 'Flow Management Plan', location: 'Auditoriums' },
                    { id: 'CINE-CROWD-05', description: "Have a clear plan for handling sold-out shows and managing guest expectations.", priority: 'High', riskLevel: 'High', proof: 'Sold-Out Show Protocol', location: 'Box Office' }
                ]
            }
        ]
    },
    // --- Healthcare ---
    {
        id: 'healthcare_and_hospital_operations',
        title: "Healthcare & Hospital Operations",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Healthcare",
        description: "An NABH & JCI-aligned toolkit for Hospital COOs & Quality Heads to ensure the highest standards of patient safety and compliance.",
        icon: <Hospital className="w-8 h-8 text-primary" />,
        badgeText: "Popular",
        badgeVariant: "default" as const,
        whoIsItFor: ["Hospital Owners", "COOs", "Chief Medical Officers", "Heads of Quality & Compliance", "Lab Directors", "VPs", "GMs", "Directors"],
        sampleItems: [
            "Ensure secure 'Telemedicine Consultations' & audit 'LIS-HIS-EMR Data Integrity'.",
            "Prevent medication errors with a 'Look-Alike, Sound-Alike Drug' protocol.",
            "Ensure 'Critical Test Result Communication' is timely and logged.",
            "Master the 'High-Risk Patient Handover' to prevent information loss.",
            "NEW: Global Edition includes checklists aligned with JCI, WHO, and HIPAA."
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
            title: "Built on Global Healthcare Standards",
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
                summary: "Eliminate dispensing errors with a rigorous protocol that enforces the 'Five Rights' of medication safety, from prescription verification to patient counseling.",
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
                summary: "Prevent hospital-acquired infections (HAIs) at the source. This checklist audits your sterilization process, verifying cycle effectiveness, water quality, and sterile pack management.",
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
                summary: "Protect vulnerable patients from painful and costly pressure ulcers. This bedside protocol ensures at-risk patients are turned regularly and that the process is documented.",
                tasks: [
                    { id: 'PU-PREV-001', description: "For at-risk patients, place a 'turning clock' or log sheet visibly at the bedside.", priority: 'High', riskLevel: 'High', proof: 'Log Sheet Presence', location: 'Bedside' },
                    { id: 'PU-PREV-002', description: "The nurse or aide who repositions the patient must initial the log every two hours.", priority: 'High', riskLevel: 'High', proof: 'Signed Log', location: 'Bedside' },
                    { id: 'PU-PREV-003', description: "During handover, the outgoing and incoming nurse must verbally confirm the patient's repositioning schedule.", priority: 'High', riskLevel: 'Medium', proof: 'Handover Confirmation', location: 'Bedside' },
                    { id: 'PU-PREV-004', description: "Inspect patient's skin for redness or early signs of pressure sores during each turn.", priority: 'High', riskLevel: 'High', proof: 'Skin Assessment Log', location: 'Bedside' },
                    { id: 'PU-PREV-05', description: "Ensure pressure-relieving mattresses or cushions are used for high-risk patients.", priority: 'High', riskLevel: 'High', proof: 'Equipment Check', location: 'Bedside' }
                ]
            },
            {
                title: "❓ Unidentified Patient Intake Protocol (ER)",
                department: "Emergency",
                frequency: "Per Unidentified Patient",
                role: "ER Nurse/Doctor",
                summary: "Save a life in the critical first minutes. This intake checklist ensures that for non-responsive patients, every step is taken to find life-saving medical information.",
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
                summary: "Reduce costly readmissions with a discharge process that works. This protocol ensures no patient leaves without a clear, scheduled follow-up plan.",
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
                summary: "Prevent one of the most common and dangerous types of medication errors. This critical safety checklist provides a system for managing drugs with confusing names or packaging.",
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
                summary: "Guarantee patient safety at the bedside. This checklist is the final, critical safety check before a patient receives medication, ensuring the 'Five Rights' are always followed.",
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
                summary: "Maintain a sterile and safe healthcare environment. This proactive protocol prevents and manages pest infestations, which is critical for infection control and patient safety.",
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
        description: "A comprehensive toolkit for ensuring dispensing accuracy, regulatory compliance, and patient safety in a pharmacy setting.",
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
        globalStandards: {
            title: "Built on Global Pharmacy Best Practices",
            standards: [
                { name: "Dispensing Safety", description: "Protocols aligned with ISMP (Institute for Safe Medication Practices) guidelines, including for LASA drugs." },
                { name: "Regulatory Compliance", description: "Frameworks for managing controlled substances according to DEA (US) and local narcotics control regulations." },
                { name: "Quality & Storage", description: "Based on USP (United States Pharmacopeia) standards for drug storage, handling, and cold chain management." },
                { name: "Patient Care", description: "Best practices for patient counseling and medication therapy management." }
            ]
        },
        checklists: [
            {
                title: "℞ Prescription Intake & Verification",
                department: "Pharmacy",
                frequency: "Per Prescription",
                role: "Pharmacist",
                summary: "Serve as the first line of defense against medication errors. This checklist ensures every prescription is valid, clear, and clinically appropriate before it's filled.",
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
                summary: "Ensure zero-error dispensing with a two-person (or tech-assisted) final check, guaranteeing the right drug is in the right bottle for the right patient.",
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
                summary: "Prevent drug diversion and ensure 100% compliance. This rigorous protocol manages high-risk medications with perpetual inventory logs and shift-based reconciliations.",
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
                department: "Compliance",
                frequency: "Daily",
                role: "Pharmacist",
                summary: "Protect the efficacy of temperature-sensitive vaccines and biologics. This checklist ensures your cold chain is unbroken, from temperature logging to emergency power planning.",
                tasks: [
                    { id: 'PHARM-COLD-01', description: "Monitor refrigerator and freezer temperatures at least twice daily, logging the minimum and maximum readings.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Refrigerator/Freezer' },
                    { id: 'PHARM-COLD-02', description: "Use calibrated thermometers and document the calibration schedule.", priority: 'High', riskLevel: 'High', proof: 'Calibration Records', location: 'Office' },
                    { id: 'PHARM-COLD-03', description: "Store vaccines in the center of the refrigerator, away from walls, floor, or vents.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Refrigerator' },
                    { id: 'PHARM-COLD-04', description: "Have a backup plan in case of power failure or equipment malfunction.", priority: 'High', riskLevel: 'High', proof: 'Emergency Plan Document', location: 'Office' },
                    { id: 'PHARM-COLD-05', description: "During transport, use validated containers and temperature monitoring devices.", priority: 'High', riskLevel: 'High', proof: 'Transport Log', location: 'Transport' }
                ]
            },
            {
                title: "🗣️ Patient Counseling & Education",
                department: "Patient Care",
                frequency: "Per Patient",
                role: "Pharmacist",
                summary: "Improve patient adherence and health outcomes. This checklist ensures patients leave not just with a prescription, but with a clear understanding of how to take it safely.",
                tasks: [
                    { id: 'PHARM-COUNSEL-01', description: "Verify the patient understands the drug name, dosage, frequency, and route of administration.", priority: 'High', riskLevel: 'Medium', proof: 'Patient Questioning', location: 'Counseling Area' },
                    { id: 'PHARM-COUNSEL-02', description: "Explain the purpose of the medication and what the patient should expect.", priority: 'High', riskLevel: 'Medium', proof: 'Education Checklist', location: 'Counseling Area' },
                    { id: 'PHARM-COUNSEL-03', description: "Discuss potential side effects and what to do if they occur.", priority: 'High', riskLevel: 'Medium', proof: 'Education Checklist', location: 'Counseling Area' },
                    { id: 'PHARM-COUNSEL-04', description: "Provide guidance on proper storage and disposal of the medication.", priority: 'High', riskLevel: 'Medium', proof: 'Education Checklist', location: 'Counseling Area' },
                    { id: 'PHARM-COUNSEL-05', description: "Ask the patient if they have any questions.", priority: 'High', riskLevel: 'Low', proof: 'Counseling Log', location: 'Counseling Area' }
                ]
            },
             {
                title: "💊 Look-Alike, Sound-Alike (LASA) Drug Management",
                department: "Operations",
                frequency: "Ongoing",
                role: "Pharmacy Technician",
                summary: "Prevent dangerous medication errors with a perpetual system for managing drugs with confusing names or packaging—a leading cause of harm in pharmacies.",
                tasks: [
                    { id: 'PHARM-LASA-01', description: "Maintain an updated list of all identified LASA drugs in the pharmacy.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Office' },
                    { id: 'PHARM-LASA-02', description: "Store LASA drugs separately, using different shelf markers or bins.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Shelves' },
                    { id: 'PHARM-LASA-03', description: "Highlight LASA drug names in the computer system for both dispensing and prescription entry.", priority: 'High', riskLevel: 'High', proof: 'System Review', location: 'All areas' },
                    { id: 'PHARM-LASA-04', description: "Use 'Tall Man' lettering to differentiate drug names.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Shelves' },
                    { id: 'PHARM-LASA-05', description: "Require a mandatory second check for LASA drugs.", priority: 'High', riskLevel: 'High', proof: 'Dispense Point', location: 'Every Dose Dispensed' }
                ]
            },
            {
                title: "🛡️ HIPAA & Patient Data Protection",
                department: "Operations",
                frequency: "Quarterly",
                role: "Compliance Officer",
                summary: "Protect patient information and ensure compliance with US HIPAA, PIPEDA, or GDPR (as applicable) with data-level SOPs.",
                tasks: [
                    { id: 'PHARM-HIPAA-01', description: "Conduct a regular review of all physical and electronic access control mechanisms.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'All areas' },
                    { id: 'PHARM-HIPAA-02', description: "Review and Update data-sharing Agreements and ensure to use latest templates and version.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Office' },
                    { id: 'PHARM-HIPAA-03', description: "Conduct frequent staff training on privacy and safety protocols.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'All ADC users' },
                    { id: 'PHARM-HIPAA-04', description: "Report and log and breach that threatens data or security.", priority: 'High', riskLevel: 'High', proof: 'As applicable', location: 'All areas' },
                    { id: 'PHARM-HIPAA-05', description: "Ensure that all staff must adhere to the least-access principal.", priority: 'High', riskLevel: 'High', proof: 'As applicable', location: 'All areas' }
                ]
            },
            {
                title: "🤖 Automated Dispensing Cabinet (ADC) Management",
                department: "Inventory",
                frequency: "Daily",
                role: "Pharmacy Technician",
                summary: "Ensure strict supervision and accuracy even with automation. This checklist governs the management of automated dispensing cabinets.",
                tasks: [
                    { id: 'PHARM-ADC-01', description: "Verify accuracy of stock that has been supplied.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Automated Dispensing Cabinet' },
                    { id: 'PHARM-ADC-02', description: "Ensure staff has been well trained and must demonstrate competence.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'All ADC users' },
                    { id: 'PHARM-ADC-03', description: "Regularly audit the drug-expiry in ADC's. As per policies.", priority: 'High', riskLevel: 'Medium', proof: 'Audit/logs', location: 'Automated Dispensing Cabinet' },
                    { id: 'PHARM-ADC-04', description: "Establish 24/7 surveillance of ADC and create alert mechanism for potential threats.", priority: 'High', riskLevel: 'Medium', proof: 'Review records regularly', location: 'Security' },
                    { id: 'PHARM-ADC-05', description: "Report incidents and security gaps.", priority: 'High', riskLevel: 'High', proof: 'As applicable', location: 'Everywhere' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Monthly",
                role: "Manager",
                summary: "Protect your sterile environment from contamination. This checklist outlines regular inspections and preventive measures against pests.",
                tasks: [
                    { id: 'PEST-PHARM-01', description: "Inspect the physical structure for entry points of pests or insects.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'All Areas' },
                    { id: 'PEST-PHARM-02', description: "Ensure to clean all the spills from water coolers or other resources.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Staff Areas' },
                    { id: 'PEST-PHARM-03', description: "Make sure the food and the medicine aren't stored togather.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'All storage units' },
                    { id: 'PEST-PHARM-04', description: "Engage professional pest control regularly.", priority: 'High', riskLevel: 'Medium', proof: 'Service Records', location: 'Office' },
                    { id: 'PEST-PHARM-05', description: "Check for cleanliness in the garbage areas", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Gabbage Area' }
                ]
            }
        ]
    },
    // --- Education ---
    {
        id: 'school_operations_pack',
        title: "School Operations & Safety",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Education",
        description: "A complete toolkit for school principals and admin heads to ensure student safety, operational efficiency, and a secure learning environment.",
        icon: <School className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent" as const,
        whoIsItFor: ["School Owners", "School Principals", "Admin Heads", "Heads of Security", "Transport Managers"],
        sampleItems: [
            "Implement a 'Student Transport & Bus Safety' protocol.",
            "Manage 'Visitor & Access Control' to secure your campus.",
            "Ensure 'Playground & Sports Equipment Safety'.",
            "NEW: Global Edition includes checklists for Anti-Bullying, Digital Safety, and international curriculum compliance."
        ],
        globalStandards: {
            title: "Global Compliance Framework for Schools",
            standards: [
                { name: "Child Safety & Protection", description: "UNCRC, ISO 45001, NSPCC" },
                { name: "Health, Hygiene & Food Safety", description: "WHO, HACCP, ISO 22000" },
                { name: "Infrastructure & Emergency", description: "NFPA 101, UNESCO, ISO 22301" },
                { name: "Data Privacy & Digital Learning", description: "GDPR, FERPA, ISO 27001" },
            ]
        },
        checklists: [
            {
                title: "Student Safety & Child Protection Audit – Global Edition",
                department: "Transport",
                frequency: "Daily",
                role: "Transport Manager",
                summary: "Ensure every child's journey to and from school is safe. This checklist covers daily bus inspections, driver readiness, and student boarding/de-boarding procedures.",
                tasks: [
                    { id: 'SCH-BUS-01', description: "Conduct a pre-trip inspection of the bus (tires, lights, brakes, first-aid kit).", priority: 'High', riskLevel: 'High', proof: 'Bus Inspection Log', location: 'Bus Depot' },
                    { id: 'SCH-BUS-02', description: "Verify the driver's fitness for duty (no signs of fatigue or illness).", priority: 'High', riskLevel: 'High', proof: 'Driver Self-Declaration', location: 'Bus Depot' },
                    { id: 'SCH-BUS-03', description: "Ensure a designated attendant is present on the bus to supervise students.", priority: 'High', riskLevel: 'High', proof: 'Staff Roster', location: 'Bus' },
                    { id: 'SCH-BUS-04', description: "Take attendance as students board and de-board the bus.", priority: 'High', riskLevel: 'High', proof: 'Attendance Register', location: 'Bus' },
                    { id: 'SCH-BUS-05', description: "Check that all students are seated and the bus doors are securely closed before moving.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Bus' }
                ]
            },
            {
                title: "Visitor Management & Access Control",
                department: "Security/Admin",
                frequency: "Ongoing",
                role: "Security Head",
                summary: "Protect your campus from unauthorized access. This protocol establishes a strict but welcoming process for managing all visitors, from parents to vendors.",
                tasks: [
                    { id: 'SCH-VIS-01', description: "All visitors must sign in and provide photo ID at the main gate.", priority: 'High', riskLevel: 'High', proof: 'Visitor Logbook', location: 'Main Gate' },
                    { id: 'SCH-VIS-02', description: "Issue a temporary visitor's badge that must be worn at all times.", priority: 'High', riskLevel: 'High', proof: 'Badge Issuance Log', location: 'Main Gate' },
                    { id: 'SCH-VIS-03', description: "Verify the visitor's appointment with the concerned staff member before granting access.", priority: 'High', riskLevel: 'Medium', proof: 'Phone/Intercom Log', location: 'Main Gate' },
                    { id: 'SCH-VIS-04', description: "Escort visitors to and from their destination within the campus.", priority: 'High', riskLevel: 'Medium', proof: 'Escort Assignment', location: 'Campus' },
                    { id: 'SCH-VIS-05', description: "Ensure visitors sign out and return their badge upon departure.", priority: 'High', riskLevel: 'Medium', proof: 'Visitor Logbook', location: 'Main Gate' }
                ]
            },
            {
                title: "Playground & Sports Equipment Safety",
                department: "Facilities/Sports",
                frequency: "Weekly",
                role: "Admin Manager",
                summary: "Prevent injuries during playtime. This checklist ensures all playground and sports equipment is safe, well-maintained, and free from hazards.",
                tasks: [
                    { id: 'SCH-PLAY-01', description: "Inspect all playground equipment (swings, slides) for sharp edges, rust, or loose parts.", priority: 'High', riskLevel: 'High', proof: 'Playground Inspection Log', location: 'Playground' },
                    { id: 'SCH-PLAY-02', description: "Check the ground surface under equipment for adequate cushioning (e.g., sand, rubber matting).", priority: 'High', riskLevel: 'High', proof: 'Surface Check', location: 'Playground' },
                    { id: 'SCH-PLAY-03', description: "Inspect sports equipment (goalposts, basketball hoops) for stability and damage.", priority: 'High', riskLevel: 'High', proof: 'Sports Equipment Log', location: 'Sports Fields' },
                    { id: 'SCH-PLAY-04', description: "Ensure the playground area is free of debris, litter, or any hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Playground' },
                    { id: 'SCH-PLAY-05', description: "Report and cordon off any unsafe equipment immediately until it is repaired.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Request', location: 'Playground' }
                ]
            },
            {
                title: "Safe School Infrastructure & Emergency Response SOP",
                department: "Safety/Admin",
                frequency: "Quarterly",
                role: "Principal/Safety Officer",
                summary: "Prepare your students and staff to act decisively in a crisis. This checklist provides a framework for conducting effective fire, earthquake, and lockdown drills.",
                tasks: [
                    { id: 'SCH-DRILL-01', description: "Plan and announce the drill schedule for the academic year.", priority: 'High', riskLevel: 'Medium', proof: 'Drill Schedule', location: 'Office' },
                    { id: 'SCH-DRILL-02', description: "Brief staff on their specific roles and responsibilities before the drill.", priority: 'High', riskLevel: 'High', proof: 'Briefing Log', location: 'Staff Meeting' },
                    { id: 'SCH-DRILL-03', description: "Execute the drill, timing the evacuation or lockdown process.", priority: 'High', riskLevel: 'High', proof: 'Drill Execution Log', location: 'Campus-wide' },
                    { id: 'SCH-DRILL-04', description: "Conduct a post-drill review to identify successes and areas for improvement.", priority: 'High', riskLevel: 'High', proof: 'Post-Drill Report', location: 'Office' },
                    { id: 'SCH-DRILL-05', description: "Communicate the outcomes and learnings from the drill to parents.", priority: 'Medium', riskLevel: 'Low', proof: 'Parent Circular', location: 'Office' }
                ]
            },
            {
                title: "Classroom Safety & Hygiene",
                department: "Academics/Admin",
                frequency: "Daily",
                role: "Teacher/Supervisor",
                summary: "Create a safe and healthy learning space. This checklist covers daily checks for classroom safety, cleanliness, and readiness for students.",
                tasks: [
                    { id: 'SCH-CLASS-01', description: "Ensure the classroom is clean and free of clutter or trip hazards before students arrive.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Classroom' },
                    { id: 'SCH-CLASS-02', description: "Check that all furniture (desks, chairs, shelves) is stable and not damaged.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Classroom' },
                    { id: 'SCH-CLASS-03', description: "Verify that first-aid kits are accessible and stocked.", priority: 'High', riskLevel: 'High', proof: 'First-Aid Kit Log', location: 'Classroom' },
                    { id: 'SCH-CLASS-04', description: "Ensure electrical outlets are not overloaded and cords are safely tucked away.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Classroom' },
                    { id: 'SCH-CLASS-05', description: "Ensure hand sanitizer or handwashing facilities are available and stocked.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Classroom' }
                ]
            },
            {
                title: "School Hygiene & Canteen Safety (WHO–HACCP Integrated)",
                department: "F&B/Admin",
                frequency: "Daily",
                role: "Cafeteria Manager",
                summary: "Ensure student meals are safe and nutritious with a HACCP-based protocol for your school cafeteria, from food storage to serving.",
                tasks: [
                    { id: 'SCH-FOOD-01', description: "Check and log temperatures of all refrigerators, freezers, and hot-holding units.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Kitchen/Cafeteria' },
                    { id: 'SCH-FOOD-02', description: "Ensure all food handlers adhere to strict hygiene standards (handwashing, hairnets, gloves).", priority: 'High', riskLevel: 'High', proof: 'Supervisor Observation', location: 'Kitchen' },
                    { id: 'SCH-FOOD-03', description: "Verify that food is cooked to the correct internal temperatures.", priority: 'High', riskLevel: 'High', proof: 'Cooking Temperature Log', location: 'Kitchen' },
                    { id: 'SCH-FOOD-04', description: "Implement a clear system for managing student food allergies.", priority: 'High', riskLevel: 'High', proof: 'Allergy Management Plan', location: 'Cafeteria' },
                    { id: 'SCH-FOOD-05', description: "Ensure all kitchen and serving surfaces are cleaned and sanitized after each meal service.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kitchen/Cafeteria' },
                ]
            },
            {
                title: "Laboratory EHS & Research Ethics Compliance",
                department: "Academics/Safety",
                frequency: "Per Lab Session",
                role: "Science Teacher",
                summary: "Prevent accidents in a hands-on environment. This checklist ensures all safety equipment is ready and students follow protocols for handling chemicals and equipment.",
                tasks: [
                    { id: 'SCH-LAB-01', description: "Ensure all students are wearing appropriate Personal Protective Equipment (PPE) like goggles and lab coats.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Science Lab' },
                    { id: 'SCH-LAB-02', description: "Verify that eyewash stations and safety showers are unobstructed and functional before the session begins.", priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Log', location: 'Science Lab' },
                    { id: 'SCH-LAB-03', description: "Brief students on the specific hazards of the chemicals and equipment being used in the experiment.", priority: 'High', riskLevel: 'High', proof: 'Pre-Lab Briefing', location: 'Science Lab' },
                    { id: 'SCH-LAB-04', description: "Ensure proper ventilation systems are active, especially when working with fumes.", priority: 'High', riskLevel: 'High', proof: 'Ventilation System Check', location: 'Science Lab' },
                    { id: 'SCH-LAB-05', description: "Supervise the correct disposal of all chemical waste and broken glassware.", priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Science Lab' },
                ]
            },
            {
                title: "Data Privacy & Digital Learning Safety Checklist",
                department: "IT/Admin",
                frequency: "Quarterly",
                role: "IT Manager",
                summary: "Create a safe and productive digital learning environment. This protocol covers network security, content filtering, and responsible use policies for student devices.",
                tasks: [
                    { id: 'SCH-IT-01', description: "Audit and update web content filters to block inappropriate websites.", priority: 'High', riskLevel: 'High', proof: 'Filter Policy Review', location: 'Firewall/Server Room' },
                    { id: 'SCH-IT-02', description: "Review network access logs for any unusual activity or policy violations.", priority: 'High', riskLevel: 'Medium', proof: 'Network Log Analysis', location: 'SIEM/Log Server' },
                    { id: 'SCH-IT-03', description: "Ensure all school-owned devices have up-to-date antivirus software and security patches.", priority: 'High', riskLevel: 'High', proof: 'Patch Management Report', location: 'IT Office' },
                    { id: 'SCH-IT-04', description: "Conduct a digital citizenship and online safety session for all students.", priority: 'High', riskLevel: 'Medium', proof: 'Training Schedule', location: 'Classrooms' },
                    { id: 'SCH-IT-05', description: "Review and enforce the school's 'Acceptable Use Policy' for technology.", priority: 'High', riskLevel: 'Medium', proof: 'Policy Acknowledgment Forms', location: 'Admin Office' },
                ]
            }
        ]
    },
    {
        id: 'university_college_ops',
        title: "University & College Operations",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Education",
        description: "A comprehensive toolkit for Deans and Operations Managers to manage a modern campus, from classroom readiness to student safety.",
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["University Presidents", "Deans", "Directors of Operations", "Heads of Facilities", "Registrars", "VPs", "Directors"],
        sampleItems: [
            "Manage 'Classroom Readiness & Technology' for seamless lectures.",
            "Ensure 'Lab Safety & Compliance' with chemical and equipment checks.",
            "Implement 'Student Housing & Residence Life' protocols.",
            "Includes checklists for 'Emergency Response' and 'Campus Security'."
        ],
        globalStandards: {
            title: "Global Compliance Framework for Colleges & Universities",
            standards: [
                { name: "Lab & Research Safety", description: "OSHA, ISO 45001, OECD GLP" },
                { name: "Hostel & Campus Safety", description: "NFPA 101, ISO 31000, UNESCO" },
                { name: "Academic Integrity & Data Security", description: "GDPR, FERPA, ISO 27001" },
                { name: "Student Well-being", description: "UNESCO, Title IX (US), UGC (India)" },
                { name: "Sustainability & ESG", description: "UN SDGs, ISO 14001, Green Campus" }
            ]
        },
        checklists: [
            {
                title: "🚸 Classroom Readiness & Technology",
                department: "Operations",
                frequency: "Daily",
                role: "Facility Manager",
                summary: "Create an optimal learning environment. This checklist ensures every classroom is ready for instruction, with working technology and a clean, comfortable space.",
                tasks: [
                    { id: 'CLASS-01', description: "Verify that all desks and chairs are clean, undamaged, and properly arranged.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Classrooms' },
                    { id: 'CLASS-02', description: "Test the projector, sound system, and lighting to ensure they are functional.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Test Log', location: 'Classrooms' },
                    { id: 'CLASS-03', description: "Ensure whiteboard or chalkboard is clean and markers/chalk are available.", priority: 'High', riskLevel: 'Medium', proof: 'Supplies Check', location: 'Classrooms' },
                    { id: 'CLASS-04', description: "Check that temperature controls are working and the classroom is comfortable.", priority: 'High', riskLevel: 'Medium', proof: 'Temperature Log', location: 'Classrooms' },
                    { id: 'CLASS-05', description: "Confirm that Wi-Fi access is available and functioning correctly.", priority: 'High', riskLevel: 'High', proof: 'Network Test Log', location: 'Classrooms' }
                ]
            },
            {
                title: "Laboratory EHS & Research Ethics Compliance",
                department: "Lab Operations",
                frequency: "Weekly",
                role: "Lab Manager",
                summary: "Ensure a safe and compliant laboratory environment. This checklist guarantees that all safety equipment is functional and students adhere to strict protocols.",
                tasks: [
                    { id: 'LAB-01', description: "Verify that all safety equipment (eyewash stations, showers) is functional and accessible.", priority: 'High', riskLevel: 'High', proof: 'Equipment Test Log', location: 'Labs' },
                    { id: 'LAB-02', description: "Ensure that all chemicals are properly labeled, stored, and handled.", priority: 'High', riskLevel: 'High', proof: 'Chemical Inventory', location: 'Chemical Storage' },
                    { id: 'LAB-03', description: "Check that all equipment is properly grounded and electrical safety is maintained.", priority: 'High', riskLevel: 'High', proof: 'Equipment Test Log', location: 'Labs' },
                    { id: 'LAB-04', description: "Verify that all students are following safety protocols (wearing PPE, proper waste disposal).", priority: 'High', riskLevel: 'High', proof: 'Observation Log', location: 'Labs' },
                    { id: 'LAB-05', description: "Ensure first aid kits are fully stocked, and emergency contact information is posted.", priority: 'High', riskLevel: 'High', proof: 'Supplies Check', location: 'Labs' }
                ]
            },
            {
                title: "Safe Campus & Hostel Operations (Global Safety Benchmark)",
                department: "Residence Life",
                frequency: "Weekly",
                role: "Residence Manager",
                summary: "Foster a safe and supportive living environment. This protocol ensures dorms are clean, secure, and that student welfare issues are addressed promptly.",
                tasks: [
                    { id: 'DORM-01', description: "Inspect all common areas (lounges, laundry rooms, kitchens) for cleanliness and safety.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Dorms' },
                    { id: 'DORM-02', description: "Check fire safety equipment (smoke detectors, extinguishers) to ensure they are functional.", priority: 'High', riskLevel: 'High', proof: 'Equipment Test Log', location: 'Dorms' },
                    { id: 'DORM-03', description: "Verify that all access control systems (keycards, locks) are working correctly.", priority: 'High', riskLevel: 'High', proof: 'Security Check Log', location: 'Dorms' },
                    { id: 'DORM-04', description: "Conduct routine health check", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Dorms' },
                    { id: 'DORM-05', description: "Log incidents and take action to address violations or needs.", priority: 'High', riskLevel: 'High', proof: 'Incidents Reported', location: 'Dorms' }
                ]
            },
            {
                title: "Emergency Response",
                department: "Security",
                frequency: "Bi-Annually",
                role: "Security Manager",
                summary: "Prepare for the unexpected. This checklist provides a framework for creating and testing emergency plans for weather, violence, fire, and other threats.",
                tasks: [
                    { id: 'UNIV-EMERG-01', description: "Conduct risk analyses for weather, violence, fire and other emergency scenarios.", priority: 'High', riskLevel: 'High', proof: 'Report', location: 'Security Head' },
                    { id: 'UNIV-EMERG-02', description: "Run tests and document if it needs improvement.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Security Head' },
                    { id: 'UNIV-EMERG-03', description: "Make sure the emergency contacts have been trained and know the steps and procedures", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'HR Office' },
                    { id: 'UNIV-EMERG-04', description: "Review access control systems.", priority: 'High', riskLevel: 'High', proof: 'Record', location: 'Security head office' },
                    { id: 'UNIV-EMERG-05', description: "Keep the communication clear to ensure smooth execution when an emergency is announced", priority: 'High', riskLevel: 'High', proof: 'Mock tests', location: 'Everywhere' }
                ]
            },
            {
                title: "🔐 Campus Security & Surveillance",
                department: "Security",
                frequency: "Daily",
                role: "Security Manager",
                summary: "Protect your students and faculty with a multi-layered security approach, from perimeter checks to incident response protocols.",
                tasks: [
                    { id: 'UNIV-SEC-01', description: "Test alarm systems and security equipment to ensure it functions properly", priority: 'High', riskLevel: 'High', proof: 'Record', location: 'Various location' },
                    { id: 'UNIV-SEC-02', description: "Report any suspicious or unusual activity.", priority: 'High', riskLevel: 'High', proof: 'Alerting all officials', location: 'Various location' },
                    { id: 'UNIV-SEC-03', description: "Take action on incidents by contacting the right department.", priority: 'High', riskLevel: 'High', proof: 'Logs', location: 'Security Office' },
                    { id: 'UNIV-SEC-04', description: "Conduct regular patrols of buildings.", priority: 'High', riskLevel: 'Medium', proof: 'Patrol logs', location: 'Various' },
                    { id: 'UNIV-SEC-05', description: "Check all the access control system logs.", priority: 'High', riskLevel: 'High', proof: 'Access log', location: 'Security Office' }
                ]
            },
            {
                title: "Landscape & Grounds Maintenance",
                department: "Facilities",
                frequency: "Monthly",
                role: "Supervisor",
                summary: "Maintain a safe, beautiful, and welcoming campus. This checklist covers everything from landscape aesthetics to irrigation and pest control.",
                tasks: [
                    { id: 'UNIV-LAND-01', description: "Cleanliness and safe routes on campus. ", priority: 'High', riskLevel: 'Medium', proof: 'Pictures', location: 'Perimeter' },
                    { id: 'UNIV-LAND-02', description: "Equipment Inspection for all landscape tasks.", priority: 'High', riskLevel: 'High', proof: 'logs', location: 'Facility office' },
                    { id: 'UNIV-LAND-03', description: "Evaluate the irrigation needs.", priority: 'High', riskLevel: 'High', proof: 'Water usage review', location: 'All Areas' },
                    { id: 'UNIV-LAND-04', description: "Address pests, insects by regular maintenance", priority: 'High', riskLevel: 'High', proof: 'Pest control', location: 'Gardens' },
                    { id: 'UNIV-LAND-05', description: "Schedule tree and other landscape features for safety", priority: 'High', riskLevel: 'Medium', proof: 'work order', location: 'All Areas' }
                ]
            },
            {
                title: "Academic Integrity & Data Privacy Compliance",
                department: "IT",
                frequency: "Bi Annually",
                role: "IT administrator",
                summary: "Ensure a reliable and secure digital campus. This checklist helps you manage network integrity, apply security patches, and plan for disaster recovery.",
                tasks: [
                    { id: 'UNIV-IT-01', description: "Apply security patches to servers and all network devices", priority: 'High', riskLevel: 'High', proof: 'Upgrade history', location: 'IT department' },
                    { id: 'UNIV-IT-02', description: "Enforce all safety data and information by reviewing security policy.", priority: 'High', riskLevel: 'Medium', proof: 'Approval of stakeholders', location: 'IT department' },
                    { id: 'UNIV-IT-03', description: "Analyze and Upgrade network.", priority: 'High', riskLevel: 'High', proof: 'New purchase logs', location: 'IT department' },
                    { id: 'UNIV-IT-04', description: "Review Backup plans and data retention policies", priority: 'High', riskLevel: 'Medium', proof: 'Approval of team', location: 'IT department' },
                    { id: 'UNIV-IT-05', description: "Run disaster Recovery", priority: 'High', riskLevel: 'High', proof: 'Log report', location: 'Data center' }
                ]
            },
            {
                title: "🧹 Janitorial Services",
                department: "Facilities",
                frequency: "Daily",
                role: "Facility Head",
                summary: "Maintain a clean and hygienic campus. This checklist ensures that all areas, from restrooms to common spaces, are consistently well-maintained.",
                tasks: [
                    { id: 'UNIV-JAN-01', description: "Restrooms must be cleaned.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection logs', location: 'All bathrooms' },
                    { id: 'UNIV-JAN-02', description: "Garbage has to be emptied.", priority: 'High', riskLevel: 'Medium', proof: 'Schedule', location: 'All the Areas' },
                    { id: 'UNIV-JAN-03', description: "Check for cleanliness of all floors and surfaces.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection List', location: 'All areas' },
                    { id: 'UNIV-JAN-04', description: "Proper PPE is used for the employees that work.", priority: 'High', riskLevel: 'High', proof: 'Visual check', location: 'All Areas' },
                    { id: 'UNIV-JAN-05', description: "Check that the common areas are well maintained and cleaned", priority: 'High', riskLevel: 'Medium', proof: 'logs', location: 'All Areas' }
                ]
            },
            {
                title: "📝 Admissions & Enrollment Process",
                department: "Admissions",
                frequency: "Per Applicant",
                role: "Admissions Officer",
                summary: "Create a smooth and professional admissions experience. This checklist ensures every applicant is managed consistently from initial inquiry to final enrollment decision.",
                tasks: [
                    { id: 'UNIV-ADMIT-01', description: "Acknowledge receipt of application within 48 hours.", priority: 'High', riskLevel: 'Medium', proof: 'Email Log', location: 'Admissions CRM' },
                    { id: 'UNIV-ADMIT-02', description: "Verify all required documents (transcripts, essays, recommendations) have been received.", priority: 'High', riskLevel: 'High', proof: 'Applicant File Checklist', location: 'Admissions CRM' },
                    { id: 'UNIV-ADMIT-03', description: "Schedule and conduct applicant interviews according to a standardized format.", priority: 'High', riskLevel: 'Medium', proof: 'Interview Schedule', location: 'Admissions Office' },
                    { id: 'UNIV-ADMIT-04', description: "Record admission committee decisions and reasoning in the applicant's file.", priority: 'High', riskLevel: 'High', proof: 'Decision Log', location: 'Admissions CRM' },
                    { id: 'UNIV-ADMIT-05', description: "Send out official decision letters (acceptance, waitlist, rejection) on the published date.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Admissions CRM' },
                ]
            },
            {
                title: "Student Well-being & Anti-Harassment Global SOP",
                department: "Student Services",
                frequency: "Ongoing",
                role: "Wellness Counselor",
                summary: "Provide accessible and confidential mental health support. This protocol ensures students can easily access services and that counselors follow best practices for care.",
                tasks: [
                    { id: 'UNIV-WELL-01', description: "Ensure information on how to access counseling services is clearly available on the university website and student portals.", priority: 'High', riskLevel: 'High', proof: 'Website Audit', location: 'Digital Platforms' },
                    { id: 'UNIV-WELL-02', description: "Conduct a confidential initial assessment for every student seeking help to determine their needs.", priority: 'High', riskLevel: 'High', proof: 'Initial Assessment Form', location: 'Counseling Center' },
                    { id: 'UNIV-WELL-03', description: "Maintain secure and confidential case notes for all counseling sessions, compliant with privacy laws.", priority: 'High', riskLevel: 'High', proof: 'Case Note Audit', location: 'Counseling Center' },
                    { id: 'UNIV-WELL-04', description: "Have a clear protocol for escalating high-risk cases (e.g., self-harm risk) to appropriate emergency services.", priority: 'High', riskLevel: 'High', proof: 'Escalation Protocol Document', location: 'Counseling Center' },
                    { id: 'UNIV-WELL-05', description: "Run proactive wellness campaigns and workshops on topics like stress management and exam anxiety.", priority: 'Medium', riskLevel: 'Low', proof: 'Event Calendar', location: 'Campus-wide' },
                ]
            },
            {
                title: "📚 Library Operations & Resource Management",
                department: "Library Services",
                frequency: "Weekly",
                role: "Head Librarian",
                summary: "Manage the heart of the campus. This checklist ensures the library is a quiet, productive, and resource-rich environment for students and faculty.",
                tasks: [
                    { id: 'UNIV-LIB-01', description: "Audit a section of the shelves each week to ensure books are correctly cataloged and placed.", priority: 'Medium', riskLevel: 'Low', proof: 'Shelf Audit Log', location: 'Library Shelves' },
                    { id: 'UNIV-LIB-02', description: "Check that all public computers, printers, and scanners are functional.", priority: 'High', riskLevel: 'Medium', proof: 'IT Equipment Check', location: 'Library' },
                    { id: 'UNIV-LIB-03', description: "Review and manage inter-library loan requests and digital resource subscriptions.", priority: 'High', riskLevel: 'Medium', proof: 'Subscription Review', location: 'Librarian Office' },
                    { id: 'UNIV-LIB-04', description: "Ensure the library environment is quiet and conducive to study in designated zones.", priority: 'High', riskLevel: 'Medium', proof: 'Hourly Walkthrough Log', location: 'Library' },
                    { id: 'UNIV-LIB-05', description: "Manage the process for overdue books and fines in a consistent manner.", priority: 'High', riskLevel: 'Low', proof: 'Fines and Overdue Report', location: 'Library System' },
                ]
            },
             {
                title: "Green Campus & ESG Compliance",
                department: "Sustainability",
                frequency: "Quarterly",
                role: "Sustainability Officer",
                summary: "Drive your campus towards a greener future. This checklist helps you track key environmental metrics and implement sustainable practices across the university.",
                tasks: [
                    { id: 'UNIV-ESG-01', description: "Track and analyze campus-wide energy and water consumption data.", priority: 'High', riskLevel: 'Medium', proof: 'Consumption Report', location: 'Facilities Office' },
                    { id: 'UNIV-ESG-02', description: "Audit waste management processes to measure recycling rates and identify areas for reduction.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Audit Report', location: 'Campus-wide' },
                    { id: 'UNIV-ESG-03', description: "Review procurement policies to prioritize sustainable and ethically sourced products.", priority: 'Medium', riskLevel: 'Low', proof: 'Procurement Policy', location: 'Admin Office' },
                    { id: 'UNIV-ESG-04', description: "Promote and manage campus sustainability initiatives (e.g., carpooling, plastic-free campaigns).", priority: 'Medium', riskLevel: 'Low', proof: 'Campaign Report', location: 'Sustainability Office' },
                    { id: 'UNIV-ESG-05', description: "Prepare a quarterly ESG report for university leadership and stakeholders.", priority: 'High', riskLevel: 'Medium', proof: 'ESG Report', location: 'Sustainability Office' }
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
                    { id: 'FOOD-RM-05', description: "Approve or reject shipment based on inspection and test results.", priority: 'High', riskLevel: 'High', proof: 'Approval Form', location: 'Receiving Office' }
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
                    { id: 'FOOD-EQ-05', description: "Record all maintenance activities in equipment log.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Log', location: 'Maintenance Office' }
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
                    { id: 'FOOD-SAN-05', description: "Allow equipment and surfaces to air dry before restarting production.", priority: 'High', riskLevel: 'High', proof: 'Air Dry Time Log', location: 'Production Floor' }
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
                    { id: 'FOOD-FP-05', description: "Approve or reject product release based on test results and record review.", priority: 'High', riskLevel: 'High', proof: 'Release Form', location: 'QC Office' }
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
                    { id: 'HACCP-VE-05', description: "Keep data intact and perform the evaluation to enhance the HACCP plan.", priority: 'High', riskLevel: 'High', proof: 'Records', location: 'Office' }
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
                    { id: 'FOOD-ALLERGEN-005', description: "Train employees on allergen awareness and control procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR office' }
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
                    { id: 'FOOD-GLASS-05', description: "Ensure that all new equipments or tools are assessed and inspected.", priority: 'High', riskLevel: 'High', proof: 'Inspection form', location: 'Before procurement' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Compliance",
                frequency: "Weekly",
                role: "Facility Manager",
                summary: "Safeguard your facility from contamination. This program establishes a comprehensive defense against insects and rodents, crucial for maintaining hygiene in a food-grade environment.",
                tasks: [
                    { id: 'PEST-FOOD-001', description: "Inspect buildings, premises and equipment weekly for the sings of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection log', location: 'All Areas' },
                    { id: 'PEST-FOOD-002', description: "Waste and any byproducts must be disposed regularly.", priority: 'High', riskLevel: 'High', proof: 'Work order', location: 'All Areas' },
                    { id: 'PEST-FOOD-003', description: "Ensure sealing is maintained for entries to reduce rodent attraction.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Work Order', location: 'Perimeter' },
                    { id: 'PEST-FOOD-004', description: "Review regular pest reports and make the service based on the history.", priority: 'High', riskLevel: 'Medium', proof: 'Service order', location: 'All Areas' },
                    { id: 'PEST-FOOD-005', description: "Train employees on clean work environment.", priority: 'High', riskLevel: 'Medium', proof: 'Training records', location: 'HR Office' }
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
                    { id: 'PROD-HAND-05', description: "Communicate the shift's priorities and any specific instructions to the incoming team.", priority: 'High', riskLevel: 'Medium', proof: 'Shift Briefing', location: 'Production Floor' }
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
                    { id: 'QC-RM-05', description: "Release or reject the material in the inventory system based on QC results.", priority: 'High', riskLevel: 'High', proof: 'System Entry', location: 'QC Office' }
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
                    { id: 'EHS-MG-05', description: "Check that the area around machinery is clear of clutter and slip/trip hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Check', location: 'Production Floor' }
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
                    { id: 'EHS-LOTO-05', description: "Once work is complete, remove locks/tags and re-energize the equipment according to procedure.", priority: 'High', riskLevel: 'High', proof: 'LOTO Permit Sign-off', location: 'Equipment Location' }
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
                    { id: 'EHS-PTW-05', description: "Upon completion of work, inspect the area and formally close out the permit.", priority: 'High', riskLevel: 'High', proof: 'Permit Close-out Signature', location: 'Work Area' }
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
                    { id: 'LW-GRN-05', description: "Label received goods with internal tracking numbers and move them to the staging area.", priority: 'High', riskLevel: 'Medium', proof: 'Labeled Goods', location: 'Staging Area' }
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
                    { id: 'LW-CYCLE-05', description: "Make inventory adjustments in the system with manager approval.", priority: 'High', riskLevel: 'High', proof: 'Adjustment Log', location: 'System' }
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
                    { id: 'LW-MHE-05', description: "Report any defects immediately and do not operate faulty equipment.", priority: 'High', riskLevel: 'High', proof: 'Defect Report Log', location: 'Supervisor Office' }
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
                    { id: 'LW-5S-05', description: "Sustain: Perform a weekly audit to ensure the 5S standards are being maintained.", priority: 'High', riskLevel: 'Medium', proof: '5S Audit Scorecard', location: 'Designated Area' }
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
                    { id: 'LW-SHIP-05', description: "Load the correct shipment onto the correct carrier's vehicle and obtain driver's signature.", priority: 'High', riskLevel: 'High', proof: 'Signed Manifest', location: 'Loading Dock' }
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
            "Includes 'Quarterly Business Review' and 'Annual Strategic Planning' frameworks.",
            "Added a 'New Office Build-Out & Project Management' checklist for expansions.",
            "Includes a 'Corporate Social Responsibility (CSR) Program Management' framework.",
            "Added a 'Contractor EHS Management & Onboarding' protocol to ensure vendor safety."
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
            title: "Built on Global Facility Management Standards",
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
                summary: "Manage complex office build-outs with confidence. This master checklist covers the entire lifecycle from site selection and budgeting to final handover, ensuring your project stays on time and on budget.",
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
                summary: "Build a CSR program that makes a real impact. This framework helps you plan, execute, and report on your company's social and community initiatives effectively.",
                tasks: [
                    { id: 'CSR-001', description: "Align CSR initiatives with the company's values and business goals.", priority: 'High', riskLevel: 'Medium', proof: 'Strategy Document', location: 'Office' },
                    { id: 'CSR-002', description: "Identify and vet potential NGO or community partners.", priority: 'High', riskLevel: 'Medium', proof: 'Partner Assessment Report', location: 'Office' },
                    { id: 'CSR-003', description: "Develop a budget and resource plan for each CSR activity.", priority: 'High', riskLevel: 'Medium', proof: 'Budget Plan', location: 'Office' },
                    { id: 'CSR-004', description: "Track key metrics (e.g., volunteer hours, funds raised, community impact) for each program.", priority: 'High', riskLevel: 'Medium', proof: 'Impact Report', location: 'Office' },
                    { id: 'CSR-005', description: "Prepare an annual CSR report for internal and external stakeholders.", priority: 'High', riskLevel: 'Medium', proof: 'CSR Report', location: 'Office' }
                ]
            },
            {
                title: "📊 Quarterly Business Review (QBR) Framework",
                department: "Management",
                frequency: "Quarterly",
                role: "Head of Facilities",
                summary: "Demonstrate the value of your department to leadership. This structured agenda helps you conduct a data-driven review of facility operations, focusing on KPIs, budget, and strategic goals.",
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
                summary: "Align your facility goals with the company's vision. This checklist guides you through the annual strategic planning process, from SWOT analysis to creating a project roadmap.",
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
                summary: "Gain full control over your company's physical assets. This checklist helps you track everything from laptops to furniture, from procurement to secure disposal.",
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
                summary: "Navigate difficult conversations with a fair and legally sound process. This checklist ensures consistency and documentation when managing employee disciplinary issues.",
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
                summary: "Ensure your facility is perfectly prepared for a productive day. This comprehensive walkthrough covers everything from lighting and HVAC to restrooms and access control.",
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
                summary: "Maintain a healthy and professional workplace. This proactive checklist for preventing and managing pests is essential for employee well-being and facility hygiene.",
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
        description: "A foundational toolkit for founders and managers to ensure business operations are legally sound, compliant, and ready for growth.",
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent" as const,
        whoIsItFor: ["Founders", "COOs", "HR Managers", "Admin Heads", "First-time Managers", "VPs", "Directors", "GMs"],
        sampleItems: [
            "Includes 'Quarterly Business Review' and 'Annual Strategic Planning' frameworks.",
            "Added a 'New Office Build-Out & Project Management' checklist.",
            "Standardize your 'New Employee Legal Onboarding' from a legal perspective.",
            "Implement a 'Vendor Contract Review' checklist for non-lawyers."
        ],
        globalStandards: {
            title: "Built on Foundational Legal & HR Best Practices",
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
                summary: "Manage complex office build-outs with confidence. This master checklist covers the entire lifecycle from site selection and budgeting to final handover, ensuring your project stays on time and on budget.",
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
                summary: "Protect your company from future disputes with a legally compliant onboarding process. This ensures every critical document is signed and filed from day one.",
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
                summary: "Empower your managers to be the first line of defense. This simple checklist helps non-lawyers spot major red flags in vendor contracts before they become legal problems.",
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
                summary: "Avoid easy-to-miss compliance fines. This checklist ensures your public website has the necessary legal notices (Privacy Policy, ToS, Cookies) to comply with data privacy laws.",
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
                summary: "Lead data-driven performance reviews. This structured agenda helps you conduct quarterly reviews focusing on KPIs, budget variance, and strategic goal alignment.",
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
                summary: "Align your department's goals with the company's vision. This checklist guides you through the annual strategic planning process, from SWOT analysis to creating a project roadmap.",
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
                summary: "Gain full control over your company's physical assets. This checklist helps you track everything from laptops to furniture, from procurement to secure disposal.",
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
                summary: "Navigate difficult conversations with a fair and legally sound process. This checklist ensures consistency and documentation when managing employee disciplinary issues.",
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
        description: "A C-suite level toolkit to manage AI ethics, data privacy (GDPR/DPDP), and cybersecurity risks in the modern enterprise.",
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
            title: "Built on Global Tech & Security Standards",
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
                summary: "Deploy AI responsibly. This framework ensures your models are fair, transparent, and accountable, building trust with users and regulators before issues arise.",
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
                summary: "Stay compliant and avoid crippling fines. This audit checklist helps you maintain your Record of Processing Activities (ROPA) and manage Data Subject Access Requests (DSARs) efficiently.",
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
                summary: "Test your defenses before a real attack. This simulation checklist tests your company's readiness to respond to a major cybersecurity incident like a ransomware attack.",
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
                summary: "Don't let your vendors become your weakest link. This due diligence checklist assesses the security posture of new vendors before you grant them access to company data.",
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
                summary: "Find and fix cloud misconfigurations before they're exploited. This audit identifies common but critical risks like public S3 buckets and overly permissive IAM roles.",
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
                summary: "Secure your digital assets when an employee leaves. This checklist ensures all access is revoked immediately and company data is protected from theft or unauthorized use.",
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
                summary: "Enforce the Principle of Least Privilege. This periodic review ensures employees only have access to the data and systems they absolutely need, reducing your internal attack surface.",
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
                summary: "Close security gaps before they can be exploited. This systematic process ensures you identify, test, and deploy critical security patches across all servers and endpoints.",
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
                    { id: 'AS-HEALTH-05', description: "Provide enrichment (e.g., toys, walks) for mental stimulation.", priority: 'Medium', riskLevel: 'Low', proof: 'Enrichment Log', location: 'Play Areas' }
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
                    { id: 'AS-HYGIENE-05', description: "Mop and sanitize floors in all animal and public areas.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Entire Facility' }
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
                    { id: 'AS-ADOPT-05', description: "Check veterinary references for existing pets, if any.", priority: 'High', riskLevel: 'High', proof: 'Vet Reference Check Log', location: 'Office' }
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
                    { id: 'AS-VOL-05', description: "Schedule the volunteer's first few shifts and add them to the communication system (e.g., email list, WhatsApp group).", priority: 'High', riskLevel: 'Low', proof: 'System Entry', location: 'Office' }
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
                    { id: 'PEST-ANIMAL-05', description: "Coordinate with a professional pest control service for regular inspections and treatments, ensuring they are aware of the presence of animals.", priority: 'High', riskLevel: 'High', proof: 'Vendor Service Report', location: 'Manager Office' }
                ]
            }
        ]
    }
]
