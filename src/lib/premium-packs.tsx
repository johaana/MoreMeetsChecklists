
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket, Wifi, UserCheck, BarChart3, Link, BrainCircuit, Bot, Syringe, DatabaseZap, Megaphone, Siren, Lock, KeyRound, Users, Banknote, Webcam, Bug, UserCog, PackageCheck, Ambulance, FileWarning, Milestone, DoorClosed, CircleDollarSign, Wind, Thermometer, UserCog2, Key, Router, Pallet, Watch, Drama, Barcode, Stethoscope, SyringeIcon, HeartPulse, Microscope, Bus, BookOpen, Car, Drill, Spray, FileLock, Projector, Popcorn, Ticket, Lamp, Video, LandPlot, Trash, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, Mask, GalleryVertical, Guitar, VenetianMask, Gamepad, Rabbit } from "lucide-react";

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
    category: "Hospitality" | "Corporate" | "Retail" | "Healthcare" | "Education" | "Manufacturing" | "Events" | "Personal" | "Automotive" | "Real Estate" | "Compliance" | "Wellness" | "Maritime" | "E-commerce" | "Agency" | "Aviation" | "Entertainment" | "Logistics" | "Construction";
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
                title: "🧹 Daily Room Cleaning Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Housekeeper",
                summary: "Ensures every guest room meets the highest standards of cleanliness and comfort, covering everything from dusting and sanitizing to linen changes and amenity replenishment.",
                tasks: [
                    { id: 'HK-DRC-001', description: "Knock and announce 'Housekeeping' before entering", priority: 'High', riskLevel: 'Medium', proof: 'Log Entry', location: 'Guest Room' },
                    { id: 'HK-DRC-002', description: "Check room occupancy status in PMS", priority: 'Medium', riskLevel: 'Low', proof: 'System Check', location: 'Guest Room' },
                    { id: 'HK-DRC-003', description: "Open curtains and windows for ventilation", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-DRC-004', description: "Empty trash bins and replace liners", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-DRC-005', description: "Dust all surfaces including tables, lamps, and shelves", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' }
                ]
            },
            {
                title: "🛜 Guest Wi-Fi Triage & Escalation",
                department: "Front Office/IT",
                frequency: "Per Incident",
                role: "Front Desk Agent",
                summary: "A tiered troubleshooting guide to quickly resolve guest Wi-Fi issues, improving guest satisfaction and freeing up IT resources.",
                tasks: [
                    { id: 'WIFI-001', description: "Level 1: Instruct guest to 'forget network' and reconnect. Verbally confirm if this resolved the issue.", priority: 'Low', riskLevel: 'Low', proof: 'Verbal Confirmation', location: 'Front Desk' },
                    { id: 'WIFI-002', description: "Level 2: Check the network monitoring dashboard for any known outages in the guest's specific floor or zone.", priority: 'Medium', riskLevel: 'Medium', proof: 'Dashboard Check', location: 'Front Desk' },
                    { id: 'WIFI-003', description: "Level 3: Log a detailed IT ticket including guest's name, room number, device type, and exact time of issue.", priority: 'High', riskLevel: 'Medium', proof: 'IT Ticket Log', location: 'Front Desk' },
                    { id: 'WIFI-004', description: "Offer guest a temporary solution, such as a portable hotspot or access to the business center.", priority: 'Medium', riskLevel: 'Low', proof: 'Service Log', location: 'Front Desk' },
                    { id: 'WIFI-005', description: "Follow up with the guest after IT has resolved the issue to ensure satisfaction.", priority: 'High', riskLevel: 'Medium', proof: 'Follow-up Log', location: 'Front Desk' }
                ]
            },
            {
                title: "🔑 Keycard Security & Access Control Audit",
                department: "Security",
                frequency: "Weekly",
                role: "Security Manager",
                summary: "A weekly audit to prevent unauthorized access by ensuring all master keycards are accounted for and their digital access is valid.",
                tasks: [
                    { id: 'KEY-001', description: "Run a report of all active 'master' and 'sub-master' keycards from the access control system.", priority: 'High', riskLevel: 'High', proof: 'System Report', location: 'Security Office' },
                    { id: 'KEY-002', description: "Physically verify possession of each master keycard with its assigned holder (e.g., Head of Engineering, Exec. Housekeeper).", priority: 'High', riskLevel: 'High', proof: 'Physical Audit Log', location: 'Various Departments' },
                    { id: 'KEY-003', description: "Any card that cannot be physically presented within 10 minutes must be immediately deactivated in the system.", priority: 'High', riskLevel: 'High', proof: 'Deactivation Log', location: 'Security Office' },
                    { id: 'KEY-004', description: "Review access logs for one master keycard for any unusual activity (e.g., access to guest floors at odd hours).", priority: 'Medium', riskLevel: 'Medium', proof: 'Log Review Report', location: 'Security Office' },
                    { id: 'KEY-005', description: "Audit keycard creation process to ensure proper authorization is being obtained.", priority: 'High', riskLevel: 'High', proof: 'Process Audit', location: 'Front Desk' }
                ]
            },
            {
                title: "🧼 Floor Care & Slip Prevention Audit",
                department: "Housekeeping/Safety",
                frequency: "Weekly",
                role: "Housekeeping Manager",
                summary: "A proactive checklist to prevent slip-and-fall incidents by ensuring cleaning chemicals and procedures don't compromise floor safety.",
                tasks: [
                    { id: 'SLIP-001', description: "Verify that the correct, approved cleaning agent is being used for each floor type (marble, tile, wood).", priority: 'High', riskLevel: 'High', proof: 'Chemical Inventory Check', location: 'Janitor Closet' },
                    { id: 'SLIP-002', description: "Observe cleaning process to ensure staff are adhering to correct chemical dilution ratios and dwell times.", priority: 'High', riskLevel: 'Medium', proof: 'Observation Log', location: 'Lobby/Corridors' },
                    { id: 'SLIP-003', description: "Use a slip-resistance tester (tribometer) on a small patch of recently cleaned floor to check the static coefficient of friction.", priority: 'High', riskLevel: 'High', proof: 'Slip Test Log', location: 'Lobby' },
                    { id: 'SLIP-004', description: "Ensure 'Wet Floor' signs are used correctly and removed only after the floor is completely dry.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Public Areas' },
                    { id: 'SLIP-005', description: "Review incident reports for any recent slips or falls and investigate the location.", priority: 'High', riskLevel: 'High', proof: 'Incident Report Review', location: 'Safety Office' }
                ]
            },
            {
                title: "🛌 Turn-down Service Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Housekeeper",
                summary: "Provides a touch of luxury and prepares the guest room for a restful evening, including adjusting lighting, turning down the bed, and refreshing amenities.",
                tasks: [
                    { id: 'HK-TDS-001', description: "Knock and announce 'Housekeeping' before entering", priority: 'High', riskLevel: 'Medium', proof: 'Log Entry', location: 'Guest Room' },
                    { id: 'HK-TDS-002', description: "Close curtains and adjust lighting to a relaxing ambiance", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-TDS-003', description: "Turn down bed linen neatly on one side", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-TDS-004', description: "Place slippers by the bedside", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-TDS-005', description: "Arrange bedside table with a bottle of water and a glass", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' }
                ]
            },
            {
                title: "🧺 Laundry Operations Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Laundry Attendant",
                summary: "Manages the entire laundry workflow from collection to delivery, ensuring hygiene, quality, and timely service for both hotel linen and guest clothing.",
                tasks: [
                    { id: 'HK-LO-001', description: "Collect laundry from guest rooms and service points at scheduled times", priority: 'High', riskLevel: 'Medium', proof: 'Collection Log', location: 'Laundry Dept' },
                    { id: 'HK-LO-002', description: "Sort laundry by type (linen, towels, uniforms, guest clothing) and color", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Laundry Dept' },
                    { id: 'HK-LO-003', description: "Check for and treat stains before washing", priority: 'High', riskLevel: 'Medium', proof: 'Log Entry', location: 'Laundry Dept' },
                    { id: 'HK-LO-004', description: "Load washing machines without overloading, as per machine capacity", priority: 'Medium', riskLevel: 'Low', proof: 'Log Entry', location: 'Laundry Dept' },
                    { id: 'HK-LO-005', description: "Select proper wash cycle, temperature, and detergent for each load", priority: 'High', riskLevel: 'Medium', proof: 'Log Entry', location: 'Laundry Dept' }
                ]
            },
            {
                title: "🧾 Linen Room Management Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Linen Keeper",
                summary: "Focuses on inventory control for one of the hotel's biggest assets. This checklist ensures accurate tracking, proper storage, and quality control of all linen.",
                tasks: [
                    { id: 'HK-LRM-001', description: "Maintain an accurate record of all linen issued and received", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Log', location: 'Linen Room' },
                    { id: 'HK-LRM-002', description: "Sort and store clean linen by type and size", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Linen Room' },
                    { id: 'HK-LRM-003', description: "Inspect returned linen for damages or stubborn stains; segregate for repair or discard", priority: 'High', riskLevel: 'Medium', proof: 'Damage Log', location: 'Linen Room' },
                    { id: 'HK-LRM-004', description: "Ensure all shelves and storage areas are clean, dry, and organized", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Linen Room' },
                    { id: 'HK-LRM-005', description: "Maintain a clear separation between clean and soiled linen storage", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Linen Room' }
                ]
            },
            {
                title: "🍸 Minibar Restocking & Auditing Protocol",
                department: "F&B/Housekeeping",
                frequency: "Daily",
                role: "Minibar Attendant",
                summary: "A revenue-protection checklist to accurately track minibar consumption, prevent charge disputes, and ensure proper restocking.",
                tasks: [
                    { id: 'MBAR-001', description: "Before restocking, take a timestamped photo of the minibar's current contents.", priority: 'High', riskLevel: 'Medium', proof: 'Photo Log', location: 'Guest Room' },
                    { id: 'MBAR-002', description: "Scan the barcode of each item being restocked to add it to the guest's bill in the PMS.", priority: 'High', riskLevel: 'High', proof: 'PMS Log', location: 'Guest Room' },
                    { id: 'MBAR-003', description: "Both the restocking attendant and the floor supervisor must co-sign the daily minibar consumption report.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Report', location: 'Floor Pantry' },
                    { id: 'MBAR-004', description: "Check expiry dates of all items in the minibar and replace any items nearing expiry.", priority: 'Medium', riskLevel: 'Medium', proof: 'Expiry Log', location: 'Guest Room' },
                    { id: 'MBAR-005', description: "Ensure the minibar fridge is functioning at the correct temperature.", priority: 'Medium', riskLevel: 'Medium', proof: 'Temperature Check', location: 'Guest Room' }
                ]
            },
            {
                title: "🔑 Valet & Guest Vehicle Key Management",
                department: "Security/Front Office",
                frequency: "Per Vehicle",
                role: "Valet/Bell Captain",
                summary: "A high-stakes protocol to prevent key misplacement and vehicle theft, ensuring a secure and auditable chain of custody for all guest vehicles.",
                tasks: [
                    { id: 'VALET-001', description: "Log all vehicle keys into a key-tracking system with a timestamp upon guest arrival.", priority: 'High', riskLevel: 'High', proof: 'Key System Log', location: 'Valet Desk' },
                    { id: 'VALET-002', description: "The key must be physically scanned by both the valet receiving the car and the valet retrieving the car.", priority: 'High', riskLevel: 'High', proof: 'Scan Log', location: 'Valet Desk' },
                    { id: 'VALET-003', description: "Store all keys in a locked, access-controlled key cabinet.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Key Cabinet' },
                    { id: 'VALET-004', description: "Perform a random daily audit of 5 physical keys against the system log to ensure accuracy.", priority: 'Medium', riskLevel: 'Medium', proof: 'Audit Log', location: 'Key Cabinet' },
                    { id: 'VALET-005', description: "Verify guest identity before handing over vehicle keys at departure.", priority: 'High', riskLevel: 'High', proof: 'ID Check', location: 'Valet Desk' }
                ]
            },
            {
                title: "🧼 Public Area Cleaning Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Public Area Attendant",
                summary: "Maintains the all-important first impression of the hotel. This covers the regular cleaning and sanitization of lobbies, elevators, restrooms, and other common areas.",
                tasks: [
                    { id: 'HK-PAC-001', description: "Clean, sweep, and mop lobby floors", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Lobby' },
                    { id: 'HK-PAC-002', description: "Dust all furniture, fixtures, and decorative items in public areas", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Public Areas' },
                    { id: 'HK-PAC-003', description: "Wipe and polish mirrors, glass doors, and windows", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Public Areas' },
                    { id: 'HK-PAC-004', description: "Clean and sanitize elevators, including buttons and handrails", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Elevators' },
                    { id: 'HK-PAC-005', description: "Empty all trash bins and replace liners in public areas", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Public Areas' }
                ]
            },
            {
                title: "✨ Deep Cleaning Checklist",
                department: "Housekeeping",
                frequency: "Weekly",
                role: "Housekeeping Supervisor",
                summary: "Goes beyond daily cleaning to tackle areas that need periodic, intensive attention, such as shampooing carpets, washing curtains, and descaling bathrooms.",
                tasks: [
                    { id: 'HK-DC-001', description: "Move furniture for full floor cleaning and vacuuming", priority: 'Medium', riskLevel: 'Low', proof: 'Photo', location: 'Guest Room' },
                    { id: 'HK-DC-002', description: "Clean behind and under beds, sofas, and cabinets", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Guest Room' },
                    { id: 'HK-DC-003', description: "Wash or dry-clean curtains and drapes as per schedule", priority: 'Medium', riskLevel: 'Low', proof: 'Cleaning Log', location: 'Guest Room' },
                    { id: 'HK-DC-004', description: "Shampoo carpets and rugs in high-traffic areas", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Guest Room' },
                    { id: 'HK-DC-005', description: "Polish all wooden furniture and fixtures", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' }
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
            {
                title: "📦 Lost & Found Documentation Checklist",
                department: "Security",
                frequency: "As-Needed",
                role: "Security Officer",
                summary: "A standardized, secure process to ensure guest trust and minimize hotel liability. Covers logging, storage, and returning items.",
                tasks: [
                    { id: 'SEC-LF-001', description: "Log the date, time, and exact location where the item was found to create a clear chain of custody.", priority: 'High', riskLevel: 'Medium', proof: 'Logbook Entry', location: 'Security Office' },
                    { id: 'SEC-LF-002', description: "Describe the found item in detail, including brand, color, and any unique marks", priority: 'High', riskLevel: 'Medium', proof: 'Logbook Entry', location: 'Security Office' },
                    { id: 'SEC-LF-003', description: "Record the name and department of the person who found the item", priority: 'Medium', riskLevel: 'Low', proof: 'Logbook Entry', location: 'Security Office' },
                    { id: 'SEC-LF-004', description: "Store the item securely in a locked lost & found room or cabinet", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Security Office' },
                    { id: 'SEC-LF-005', description: "Tag the item with a unique reference number corresponding to the log entry", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Security Office' }
                ]
            },
            {
                title: "😡 Guest Complaint Escalation & Resolution",
                department: "Guest Relations",
                frequency: "As-Needed",
                role: "Duty Manager",
                summary: "A crisis management protocol for a single guest issue to ensure rapid and effective resolution, preventing escalation and reputational damage.",
                tasks: [
                    { id: 'GCER-001', description: "For any 'Severity 1' complaint (e.g., ruined special occasion, safety concern), immediately notify the Duty Manager and Guest Relations Head.", priority: 'High', riskLevel: 'High', proof: 'Escalation Log', location: 'Front Office' },
                    { id: 'GCER-002', description: "Empower front-line staff to offer immediate service recovery up to a pre-approved limit (e.g., complimentary dinner) without needing multiple approvals.", priority: 'High', riskLevel: 'Medium', proof: 'Service Recovery Log', location: 'Front Office' },
                    { id: 'GCER-003', description: "Log every step of the resolution process with timestamps in the guest's CRM profile to create a single source of truth.", priority: 'High', riskLevel: 'Medium', proof: 'CRM Entry', location: 'Front Office' },
                    { id: 'GCER-004', description: "After resolution, the Guest Relations Head must personally follow up with the guest within 24 hours.", priority: 'High', riskLevel: 'Medium', proof: 'Follow-up Call Log', location: 'Guest Relations Office' },
                    { id: 'GCER-005', description: "Conduct a root cause analysis for the complaint to prevent recurrence.", priority: 'High', riskLevel: 'Medium', proof: 'RCA Document', location: 'Management Office' }
                ]
            },
            {
                title: "📢 Social Media Crisis Response Drill",
                department: "Marketing/PR",
                frequency: "Quarterly",
                role: "Marketing Head",
                summary: "A simulation to test the hotel's readiness to handle a viral negative review or social media crisis, ensuring a swift, coordinated, and brand-safe response.",
                tasks: [
                    { id: 'SMCR-001', description: "Simulate a negative viral post (e.g., TikTok video of a dirty room) and activate the crisis response team.", priority: 'High', riskLevel: 'High', proof: 'Drill Scenario Document', location: 'Marketing Office' },
                    { id: 'SMCR-002', description: "Draft and get approval for a public-facing holding statement within 30 minutes.", priority: 'High', riskLevel: 'High', proof: 'Drafted Statement', location: 'Marketing Office' },
                    { id: 'SMCR-003', description: "Activate the social listening team to monitor mentions, sentiment, and the spread of the issue.", priority: 'High', riskLevel: 'Medium', proof: 'Social Listening Report', location: 'Marketing Office' },
                    { id: 'SMCR-004', description: "Prepare internal communication for all staff on how to respond if asked by guests.", priority: 'Medium', riskLevel: 'Medium', proof: 'Internal Memo Draft', location: 'HR/Internal Comms' },
                    { id: 'SMCR-005', description: "Conduct a post-drill debrief to identify weaknesses in the response plan.", priority: 'High', riskLevel: 'Medium', proof: 'Debrief Minutes', location: 'Conference Room' }
                ]
            },
            {
                title: "📱 Guest-Facing Technology Audit",
                department: "IT/Operations",
                frequency: "Weekly",
                role: "Duty Manager",
                summary: "Ensures all modern guest-facing technology is functional, providing a seamless and frustration-free digital experience for guests.",
                tasks: [
                    { id: 'TECH-GFT-001', description: "Verify mobile key functionality for a test room.", priority: 'High', riskLevel: 'Medium', proof: 'Test Log', location: 'Front Office' },
                    { id: 'TECH-GFT-002', description: "Test in-room tablet/smart hub for ordering, room control, and information.", priority: 'High', riskLevel: 'Medium', proof: 'Test Log', location: 'Guest Room' },
                    { id: 'TECH-GFT-003', description: "Confirm hotel's guest-facing chatbot/messaging platform is online and check response time.", priority: 'Medium', riskLevel: 'Medium', proof: 'Test Interaction Log', location: 'Front Office' },
                    { id: 'TECH-GFT-004', description: "Check OTA booking channel integration for new reservations; ensure they appear correctly in PMS.", priority: 'High', riskLevel: 'High', proof: 'System Sync Check', location: 'Reservations' },
                    { id: 'TECH-GFT-005', description: "Verify that the guest Wi-Fi network is stable and provides adequate speed in various locations (lobby, room, restaurant).", priority: 'High', riskLevel: 'Medium', proof: 'Speed Test Log', location: 'Campus-wide' }
                ]
            },
            {
                title: "📊 Pre-Arrival Personalization Protocol",
                department: "Front Office",
                frequency: "Daily",
                role: "Guest Relations Manager",
                summary: "Proactively uses guest data to personalize stays, enhance guest experience, and drive ancillary revenue before the guest even arrives.",
                tasks: [
                    { id: 'FO-PAP-001', description: "Review incoming guest profiles (next 48 hours) for loyalty status, past preferences, and special requests.", priority: 'High', riskLevel: 'Medium', proof: 'PMS Review Log', location: 'Front Office' },
                    { id: 'FO-PAP-002', description: "Send pre-arrival email with targeted offers (e.g., spa package, restaurant reservation, room upgrade).", priority: 'Medium', riskLevel: 'Low', proof: 'CRM Send Log', location: 'Front Office' },
                    { id: 'FO-PAP-003', description: "Flag VIP, repeat guest, and special occasion arrivals for a personal welcome note or amenity.", priority: 'High', riskLevel: 'Medium', proof: 'PMS Alert/Note', location: 'Front Office' },
                    { id: 'FO-PAP-004', description: "Coordinate with housekeeping and F&B for any pre-stocked minibar preferences or special amenities.", priority: 'Medium', riskLevel: 'Medium', proof: 'Inter-departmental Memo', location: 'Front Office' },
                    { id: 'FO-PAP-005', description: "Check if any pre-arrival requests (e.g., extra pillows, crib) have been actioned.", priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Coordination Log', location: 'Front Office' }
                ]
            },
            {
                title: "🌿 Weekly Sustainability & Utility Audit",
                department: "Engineering/Sustainability",
                frequency: "Weekly",
                role: "Chief Engineer",
                summary: "Tracks and audits the hotel's environmental footprint, ensuring compliance with ESG goals and identifying cost-saving opportunities.",
                tasks: [
                    { id: 'SUST-WUA-001', description: "Log water and energy meter readings; compare against previous week and benchmarks.", priority: 'High', riskLevel: 'Medium', proof: 'Utility Logbook', location: 'Utility Rooms' },
                    { id: 'SUST-WUA-002', description: "Audit waste segregation in kitchens and back-of-house areas to ensure proper recycling.", priority: 'Medium', riskLevel: 'Medium', proof: 'Audit Form', location: 'Back of House' },
                    { id: 'SUST-WUA-003', description: "Check for compliance with 'green' purchasing policies (e.g., no single-use plastics in service areas).", priority: 'Medium', riskLevel: 'Low', proof: 'Purchase Order Review', location: 'Stores' },
                    { id: 'SUST-WUA-004', description: "Inspect a sample of guest rooms for water leaks (taps, toilets) or inefficient lighting.", priority: 'Medium', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Guest Rooms' },
                    { id: 'SUST-WUA-005', description: "Review food wastage logs from F&B to identify trends and opportunities for reduction.", priority: 'High', riskLevel: 'Medium', proof: 'Wastage Log Analysis', location: 'F&B Office' }
                ]
            },
            {
                title: "🌳 Landscaping & Grounds Maintenance",
                department: "Facilities",
                frequency: "Weekly",
                role: "Horticulturist/Grounds Manager",
                summary: "Maintains all hotel green spaces, ensuring they are aesthetically pleasing, safe, and managed sustainably, crucial for resorts.",
                tasks: [
                    { id: 'LAND-001', description: "Inspect irrigation systems for leaks and correct operation, adjusting schedules based on weather.", priority: 'High', riskLevel: 'Medium', proof: 'Irrigation Log', location: 'Grounds' },
                    { id: 'LAND-002', description: "Check landscaped areas for plant health, signs of pests, or disease, and take corrective action.", priority: 'Medium', riskLevel: 'Low', proof: 'Horticulture Log', location: 'Grounds' },
                    { id: 'LAND-003', description: "Ensure pedestrian pathways are clear of overgrowth, debris, or any tripping hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Safety Sweep Log', location: 'Grounds' },
                    { id: 'LAND-004', description: "Manage mowing, pruning, and fertilization schedules for lawns and gardens.", priority: 'Medium', riskLevel: 'Low', proof: 'Work Schedule', location: 'Grounds' },
                    { id: 'LAND-005', description: "Ensure outdoor lighting is functional and provides adequate safety at night.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Grounds' }
                ]
            }
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
                title: "🛜 Third-Party Vendor Network Access Policy",
                department: "IT/Security",
                frequency: "Per Vendor Access",
                role: "IT Security",
                summary: "A critical cybersecurity protocol to prevent supply-chain attacks originating from vendor equipment.",
                tasks: [
                    { id: 'VENDOR-NET-001', description: "Vendors are prohibited from connecting their own laptops to the internal corporate or operational (BMS) network.", priority: 'High', riskLevel: 'High', proof: 'Policy Document', location: 'All' },
                    { id: 'VENDOR-NET-002', description: "For diagnostics, provide a company-issued, hardened 'guest laptop' with limited access.", priority: 'High', riskLevel: 'High', proof: 'Asset Log', location: 'IT Department' },
                    { id: 'VENDOR-NET-003', description: "Any vendor access must be to a segmented, isolated guest Wi-Fi network with no access to internal servers.", priority: 'High', riskLevel: 'High', proof: 'Network Configuration', location: 'IT Department' },
                    { id: 'VENDOR-NET-004', description: "Log all vendor access requests, including purpose, duration, and systems accessed.", priority: 'Medium', riskLevel: 'Medium', proof: 'Access Log', location: 'IT Security' },
                    { id: 'VENDOR-NET-005', description: "All vendor remote access must be done via a secure, audited VPN with multi-factor authentication.", priority: 'High', riskLevel: 'High', proof: 'VPN Configuration', location: 'IT Department' }
                ]
            },
            {
                title: "💻 Remote Work & Device Security Protocol",
                department: "IT",
                frequency: "Quarterly",
                role: "IT Security Analyst",
                summary: "Ensures that employee devices used for remote work do not become a security risk to the company.",
                tasks: [
                    { id: 'REMOTE-SEC-001', description: "Remotely verify that every company-issued laptop has full-disk encryption enabled.", priority: 'High', riskLevel: 'High', proof: 'Encryption Status Report', location: 'IT Dashboard' },
                    { id: 'REMOTE-SEC-002', description: "Confirm that anti-malware software on all remote devices is active and has the latest definitions.", priority: 'High', riskLevel: 'High', proof: 'Antivirus Console Report', location: 'IT Dashboard' },
                    { id: 'REMOTE-SEC-003', description: "Revoke VPN access for any device that fails the quarterly security compliance check.", priority: 'High', riskLevel: 'Medium', proof: 'VPN Access Log', location: 'IT Dashboard' },
                    { id: 'REMOTE-SEC-004', description: "Send a reminder to all remote employees about the policy of not using personal devices for company work.", priority: 'Medium', riskLevel: 'Low', proof: 'Email Send Log', location: 'IT Department' },
                    { id: 'REMOTE-SEC-005', description: "Audit user access rights and permissions for remote employees, applying the principle of least privilege.", priority: 'High', riskLevel: 'High', proof: 'Access Rights Audit Report', location: 'IT Security' }
                ]
            },
            {
                title: "🔥 Employee Emergency Role & Evacuation Route Audit",
                department: "Safety/HR",
                frequency: "Annually",
                role: "Safety Officer",
                summary: "Ensures every employee, especially those with mobility issues, knows their specific role and route in an emergency.",
                tasks: [
                    { id: 'EVAC-ROLE-001', description: "Review and update the list of designated fire wardens and first-aiders for each floor.", priority: 'High', riskLevel: 'Medium', proof: 'Warden List', location: 'Safety Office' },
                    { id: 'EVAC-ROLE-002', description: "Personally meet with any employees with mobility issues to review their specific evacuation plan and designated 'Area of Refuge'.", priority: 'High', riskLevel: 'High', proof: 'Meeting Log', location: 'Employee Desk' },
                    { id: 'EVAC-ROLE-003', description: "Introduce these employees to their primary and secondary 'evacuation assistance' wardens.", priority: 'High', riskLevel: 'High', proof: 'Introduction Confirmation', location: 'Employee Desk' },
                    { id: 'EVAC-ROLE-004', description: "Walk the evacuation route from a specific department to the assembly point, checking for any obstructions.", priority: 'High', riskLevel: 'Medium', proof: 'Route Inspection Log', location: 'Office Floors' },
                    { id: 'EVAC-ROLE-005', description: "Ensure evacuation maps are posted in visible locations on every floor.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Office Floors' }
                ]
            },
            {
                title: "💾 Disaster Recovery & Backup Restoration Drill",
                department: "IT",
                frequency: "Quarterly",
                role: "IT Manager",
                summary: "A test that goes beyond checking if backups ran, by proving that the entire system can be restored from backup within an acceptable timeframe.",
                tasks: [
                    { id: 'DR-DRILL-001', description: "Select a non-critical server for the restoration test.", priority: 'High', riskLevel: 'Medium', proof: 'Drill Plan', location: 'IT Department' },
                    { id: 'DR-DRILL-002', description: "Perform a full restoration of the server (OS, configuration, and data) to a sandboxed environment.", priority: 'High', riskLevel: 'High', proof: 'Restoration Log', location: 'IT Lab' },
                    { id: 'DR-DRILL-003', description: "Measure and document the time taken for the complete restoration (Recovery Time Objective).", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'IT Department' },
                    { id: 'DR-DRILL-004', description: "Verify the integrity of the restored data and the functionality of the server.", priority: 'High', riskLevel: 'High', proof: 'Data Verification Log', location: 'IT Lab' },
                    { id: 'DR-DRILL-005', description: "Update the disaster recovery plan with lessons learned from the drill.", priority: 'High', riskLevel: 'Medium', proof: 'Updated DR Plan', location: 'IT Department' },
                ]
            },
            {
                title: "🧹 Clean Desk & Visual Data Security Policy",
                department: "Security/Compliance",
                frequency: "Daily",
                role: "Floor Warden",
                summary: "A crucial daily sweep to prevent data breaches caused by sensitive information being left visible in the office.",
                tasks: [
                    { id: 'CDP-001', description: "At end of day, ensure all whiteboards in meeting rooms and common areas are erased.", priority: 'High', riskLevel: 'Medium', proof: 'Photo Log', location: 'Office Area' },
                    { id: 'CDP-002', description: "Check that no documents containing sensitive information are left on desks.", priority: 'High', riskLevel: 'High', proof: 'Visual Sweep Log', location: 'Office Area' },
                    { id: 'CDP-003', description: "Verify no sensitive documents are left in printer trays.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Printer Area' },
                    { id: 'CDP-004', description: "Ensure all visitors are using privacy screens on laptops in common areas.", priority: 'Medium', riskLevel: 'Medium', proof: 'Observation', location: 'Lobby' },
                    { id: 'CDP-005', description: "Confirm that all unattended computers are locked or logged off.", priority: 'High', riskLevel: 'High', proof: 'Visual Sweep Log', location: 'Office Area' }
                ]
            },
            {
                title: "🚪 Employee & Vendor Offboarding Protocol",
                department: "HR/IT/Security",
                frequency: "Per Offboarding",
                role: "HR Manager",
                summary: "A security-critical checklist to ensure that terminated employees or vendors cannot access company systems or premises, preventing data theft and sabotage.",
                tasks: [
                    { id: 'OFFB-001', description: "Deactivate all of the user's network and system access credentials within one hour of termination.", priority: 'High', riskLevel: 'High', proof: 'IT Ticket', location: 'IT Department' },
                    { id: 'OFFB-002', description: "Revoke physical access by deactivating their access card.", priority: 'High', riskLevel: 'High', proof: 'Access Control Log', location: 'Security Office' },
                    { id: 'OFFB-003', description: "Retrieve all company assets (laptop, phone, ID card) and get a signed acknowledgement.", priority: 'High', riskLevel: 'Medium', proof: 'Asset Return Form', location: 'HR Department' },
                    { id: 'OFFB-004', description: "Forward user's email to their manager and set up an auto-reply.", priority: 'Medium', riskLevel: 'Low', proof: 'IT Ticket', location: 'IT Department' },
                    { id: 'OFFB-005', description: "Schedule and conduct an exit interview.", priority: 'Medium', riskLevel: 'Low', proof: 'HR Record', location: 'HR Department' }
                ]
            },
            {
                title: "🔧 Weekly Maintenance & Safety",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Supervisor",
                summary: "A systematic review of all critical systems and safety protocols to identify and close vulnerabilities before they become incidents.",
                tasks: [
                    { id: 'WMS-001', description: "Test generator and power backup systems", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'WMS-002', description: "Inspect HVAC system and air quality", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'WMS-003', description: "Review water management systems", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'WMS-004', description: "Check elevator and escalator functionality", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'WMS-005', description: "Inspect fire safety equipment", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Common Areas' }
                ]
            },
            {
                title: "📋 Monthly Vendor & Compliance",
                department: "Admin",
                frequency: "Monthly",
                role: "Facility Manager",
                summary: "Ensures all third-party vendors meet their contractual obligations and comply with all statutory and legal requirements, minimizing company risk.",
                tasks: [
                    { id: 'MVC-001', description: "Audit vendor service level agreements (SLAs)", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'MVC-002', description: "Review vendor invoices and payments", priority: 'High', riskLevel: 'Medium', proof: 'Invoice', location: 'Facility Office' },
                    { id: 'MVC-003', description: "Schedule vendor performance review meetings", priority: 'Medium', riskLevel: 'Low', proof: 'Photo / Log', location: 'Facility Office' },
                    { id: 'MVC-004', description: "Update vendor documentation and contracts", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'MVC-005', description: "Conduct a labor law compliance audit", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Facility Office' }
                ]
            },
            {
                title: "📈 Quarterly & Annual Tasks",
                department: "Management",
                frequency: "Quarterly",
                role: "Head of Facilities",
                summary: "High-level strategic tasks focusing on budget management, long-term asset planning, and comprehensive operational reviews.",
                tasks: [
                    { id: 'QAT-001', description: "Conduct quarterly business reviews", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Facility Office' },
                    { id: 'QAT-002', description: "Develop and review capex and opex budgets", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'QAT-003', description: "Assess space utilization and planning", priority: 'Medium', riskLevel: 'Low', proof: 'Photo / Log', location: 'Office Area' },
                    { id: 'QAT-004', description: "Perform an asset condition audit", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'QAT-005', description: "Review and update insurance policies", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Facility Office' }
                ]
            },
            {
                title: "💡 Electrical Systems",
                department: "Engineering",
                frequency: "Weekly",
                role: "Electrician",
                summary: "Critical safety inspections of all electrical infrastructure to prevent outages, ensure equipment longevity, and mitigate fire hazards.",
                tasks: [
                    { id: 'ELS-001', description: "Daily Shared Electrical Loads Check", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'ELS-002', description: "Daily DG set and Fuel Management", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'ELS-003', description: "Test functionality of Transformers", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'ELS-004', description: "UPS Health and Load Test", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'ELS-005', description: "Inspect LT & HT Panel Maintenance", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' }
                ]
            },
            {
                title: "💧 Plumbing & Water Systems",
                department: "Engineering",
                frequency: "Weekly",
                role: "Plumber",
                summary: "Preventive maintenance for all water-related systems, including plumbing, sewage, and water treatment, to ensure hygiene and prevent disruptions.",
                tasks: [
                    { id: 'PWS-001', description: "Maintain all Water Supply & Plumbing", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'PWS-002', description: "Weekly Hydro-Pneumatic System Check", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'PWS-003', description: "Manage all Drainage & Sewage Systems", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'PWS-004', description: "Operate and Maintain WTP and STP", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'PWS-005', description: "Ensure Irrigation System Health", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Exterior' }
                ]
            },
            {
                title: "💨 HVAC & BMS",
                department: "Engineering",
                frequency: "Weekly",
                role: "HVAC Technician",
                summary: "Ensures optimal performance of HVAC and Building Management Systems for employee comfort, air quality, and energy efficiency.",
                tasks: [
                    { id: 'HVB-001', description: "Daily HVAC System Operation", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'HVB-002', description: "Weekly Chiller Plant Maintenance", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'HVB-003', description: "Quarterly AHUs & FCUs Maintenance", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'HVB-004', description: "Calibrate and Maintain VFDs", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'HVB-005', description: "Check all Pumps, Motors and Valves", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Utility Rooms' }
                ]
            },
            {
                title: "🏢 Hybrid Workplace Readiness",
                department: "Operations",
                frequency: "Daily",
                role: "Facility Coordinator",
                summary: "A modern checklist to manage the complexities of a flexible, hybrid work environment, ensuring both technology and space are ready for employees.",
                tasks: [
                    { id: 'HWR-001', description: "Audit hot desk booking system; resolve any discrepancies between bookings and actual usage.", priority: 'High', riskLevel: 'Medium', proof: 'System Audit Log', location: 'Office Area' },
                    { id: 'HWR-002', description: "Test AV and video conferencing equipment in all reservable meeting rooms.", priority: 'High', riskLevel: 'Medium', proof: 'Test Log', location: 'Meeting Rooms' },
                    { id: 'HWR-003', description: "Review occupancy sensor data to identify underutilized areas for potential reconfiguration.", priority: 'Medium', riskLevel: 'Low', proof: 'Occupancy Report', location: 'Facility Office' },
                    { id: 'HWR-004', description: "Ensure 'collaboration zones' are clean, fully stocked with supplies (whiteboards, markers), and properly configured.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Collaboration Zones' },
                    { id: 'HWR-005', description: "Check that lockers and personal storage areas are clear and available for daily users.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Common Areas' }
                ]
            },
            {
                title: "🤖 Smart Building & IoT Systems Check",
                department: "Engineering/IT",
                frequency: "Weekly",
                role: "BMS Engineer",
                summary: "A technical checklist to ensure all smart building systems are online, calibrated, and providing accurate data for efficient facility management.",
                tasks: [
                    { id: 'IOT-001', description: "Review BMS/IoT dashboard for critical alerts, including predictive maintenance flags for HVAC and electrical systems.", priority: 'High', riskLevel: 'High', proof: 'Dashboard Screenshot', location: 'BMS Room' },
                    { id: 'IOT-002', description: "Verify data accuracy from a sample of occupancy sensors by comparing with a physical headcount.", priority: 'Medium', riskLevel: 'Medium', proof: 'Calibration Log', location: 'Office Area' },
                    { id: 'IOT-003', description: "Test automated lighting and HVAC responses to sensor triggers in a designated zone.", priority: 'Medium', riskLevel: 'Medium', proof: 'Test Log', location: 'Test Zone' },
                    { id: 'IOT-004', description: "Check network connectivity and health of all IoT gateways and endpoints.", priority: 'High', riskLevel: 'High', proof: 'Network Health Report', location: 'Server Room' },
                    { id: 'IOT-005', description: "Ensure the automated fault detection and diagnostics (FDD) system is running and analyze top 5 recurring faults.", priority: 'High', riskLevel: 'Medium', proof: 'FDD Report', location: 'BMS Room' }
                ]
            },
            {
                title: "🚨 Critical Systems Alert & Response Protocol",
                department: "Facilities/IT",
                frequency: "As-Needed",
                role: "Chief Engineer",
                summary: "Defines the human response to an automated critical alert (e.g., from a BMS), ensuring rapid acknowledgement, escalation, and resolution to prevent catastrophic failures.",
                tasks: [
                    { id: 'CSAR-001', description: "For any 'Red' alert from the BMS (e.g., server room temp > 25°C), the system must trigger an SMS and a phone call to the on-duty Chief Engineer, not just an email.", priority: 'High', riskLevel: 'High', proof: 'System Alert Configuration', location: 'BMS Room' },
                    { id: 'CSAR-002', description: "Acknowledge the critical alert within 5 minutes via the system. If no acknowledgement, the system automatically escalates to the Head of Facilities.", priority: 'High', riskLevel: 'High', proof: 'Acknowledgement Log', location: 'BMS/Mobile' },
                    { id: 'CSAR-003', description: "Update the central incident log every 15 minutes with status updates ('Technician on-site,' 'Root cause identified') until the issue is resolved.", priority: 'High', riskLevel: 'Medium', proof: 'Incident Log', location: 'BMS' },
                    { id: 'CSAR-004', description: "Conduct a post-incident review within 24 hours to analyze the root cause of the alert, not just the fix.", priority: 'High', riskLevel: 'Medium', proof: 'Post-Incident Report', location: 'Conference Room' },
                    { id: 'CSAR-005', description: "Test the alert escalation path quarterly to ensure it's working as designed.", priority: 'Medium', riskLevel: 'Medium', proof: 'Drill Log', location: 'BMS Room' }
                ]
            },
            {
                title: "🌿 Weekly Sustainability & Utility Audit",
                department: "Engineering/Sustainability",
                frequency: "Weekly",
                role: "Chief Engineer",
                summary: "Tracks and audits the facility's environmental footprint, ensuring compliance with ESG goals and identifying cost-saving opportunities.",
                tasks: [
                    { id: 'SUST-WUA-001', description: "Log water and energy meter readings; compare against previous week and benchmarks.", priority: 'High', riskLevel: 'Medium', proof: 'Utility Logbook', location: 'Utility Rooms' },
                    { id: 'SUST-WUA-002', description: "Audit waste segregation in pantries and back-of-house areas to ensure proper recycling.", priority: 'Medium', riskLevel: 'Medium', proof: 'Audit Form', location: 'Back of House' },
                    { id: 'SUST-WUA-003', description: "Check for compliance with 'green' purchasing policies for office supplies and cleaning materials.", priority: 'Medium', riskLevel: 'Low', proof: 'Purchase Order Review', location: 'Stores' },
                    { id: 'SUST-WUA-004', description: "Inspect a sample of workstations and common areas for energy wastage (e.g., lights left on, inefficient equipment).", priority: 'Medium', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Office Floors' },
                    { id: 'SUST-WUA-005', description: "Review and optimize HVAC schedules to align with current occupancy patterns.", priority: 'High', riskLevel: 'Medium', proof: 'BMS Schedule Review', location: 'BMS Room' }
                ]
            },
            {
                title: "🚚 Fleet & Heavy Equipment Management",
                department: "Engineering/Maintenance",
                frequency: "Daily/Weekly",
                role: "Fleet Manager",
                summary: "Manages the maintenance and operational readiness of all company vehicles and heavy equipment, ensuring safety and reliability.",
                tasks: [
                    { id: 'FLEET-HEM-001', description: "Conduct mandatory pre-use safety checks for all specialized vehicles (e.g., forklifts, aerial work platforms).", priority: 'High', riskLevel: 'High', proof: 'Pre-use Checklist Form', location: 'Vehicle Depot' },
                    { id: 'FLEET-HEM-002', description: "Track and schedule preventive maintenance based on vehicle running hours or calendar dates.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Schedule', location: 'Workshop' },
                    { id: 'FLEET-HEM-003', description: "Verify operator licenses and certifications for all specialized equipment.", priority: 'High', riskLevel: 'High', proof: 'License Audit Log', location: 'Fleet Office' },
                    { id: 'FLEET-HEM-004', description: "Maintain a log of all vehicle breakdowns and repairs to identify recurring issues.", priority: 'Medium', riskLevel: 'Medium', proof: 'Breakdown Log', location: 'Workshop' },
                    { id: 'FLEET-HEM-005', description: "Ensure all safety features (e.g., backup alarms, lights) are functional.", priority: 'High', riskLevel: 'High', proof: 'Safety Check Log', location: 'Vehicle Depot' }
                ]
            },
            {
                title: "📦 Central Stores & Inventory Control",
                department: "Procurement/Logistics",
                frequency: "Daily/Weekly",
                role: "Store Keeper/Manager",
                summary: "Manages the central warehouse for all operational supplies, from critical engineering spares to office consumables, ensuring accuracy and availability.",
                tasks: [
                    { id: 'STORE-001', description: "Receive incoming goods, verifying them against purchase orders and checking for damage (GRN process).", priority: 'High', riskLevel: 'High', proof: 'Signed GRN', location: 'Receiving Bay' },
                    { id: 'STORE-002', description: "Ensure all received items are correctly binned to their designated storage location.", priority: 'High', riskLevel: 'Medium', proof: 'Binning Log', location: 'Warehouse' },
                    { id: 'STORE-003', description: "Conduct daily cycle counts for a designated section of inventory to ensure system accuracy.", priority: 'High', riskLevel: 'High', proof: 'Cycle Count Sheet', location: 'Warehouse' },
                    { id: 'STORE-004', description: "Process material requisitions from departments, ensuring proper authorization.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Requisition Form', location: 'Stores Counter' },
                    { id: 'STORE-005', description: "Maintain a log and secure storage for critical spares with a 'two-person sign-out' rule.", priority: 'High', riskLevel: 'High', proof: 'Critical Spares Log', location: 'Secure Area' }
                ]
            },
            {
                title: "🌳 Landscaping & Grounds Maintenance",
                department: "Facilities",
                frequency: "Weekly",
                role: "Horticulturist/Grounds Manager",
                summary: "Maintains all company green spaces, ensuring they are aesthetically pleasing, safe, and managed sustainably.",
                tasks: [
                    { id: 'LAND-001', description: "Inspect irrigation systems for leaks and correct operation, adjusting schedules based on weather.", priority: 'High', riskLevel: 'Medium', proof: 'Irrigation Log', location: 'Grounds' },
                    { id: 'LAND-002', description: "Check landscaped areas for plant health, signs of pests, or disease, and take corrective action.", priority: 'Medium', riskLevel: 'Low', proof: 'Horticulture Log', location: 'Grounds' },
                    { id: 'LAND-003', description: "Ensure pedestrian pathways are clear of overgrowth, debris, or any tripping hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Safety Sweep Log', location: 'Grounds' },
                    { id: 'LAND-004', description: "Manage mowing, pruning, and fertilization schedules for lawns and gardens.", priority: 'Medium', riskLevel: 'Low', proof: 'Work Schedule', location: 'Grounds' },
                    { id: 'LAND-005', description: "Ensure all outdoor lighting is functional and provides adequate illumination for safety.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Grounds' }
                ]
            },
            {
                title: "🍽️ Pantry & Cafeteria Management",
                department: "Admin/HR",
                frequency: "Daily",
                role: "Admin Manager",
                summary: "Ensures the office pantry and cafeteria are clean, well-stocked, and comply with food safety standards.",
                tasks: [
                    { id: 'PANTRY-001', description: "Check hygiene and cleanliness of the pantry/cafeteria area, including countertops and equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Pantry/Cafeteria' },
                    { id: 'PANTRY-002', description: "Verify that food and beverage vending machines are stocked and functional.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Pantry/Cafeteria' },
                    { id: 'PANTRY-003', description: "Audit the cafeteria vendor for food quality, hygiene, and service standards.", priority: 'High', riskLevel: 'High', proof: 'Vendor Audit Form', location: 'Cafeteria' },
                    { id: 'PANTRY-004', description: "Ensure water dispensers are clean and have sufficient supply.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Pantry/Cafeteria' },
                    { id: 'PANTRY-005', description: "Check for and dispose of any expired food items in refrigerators or storage.", priority: 'High', riskLevel: 'Medium', proof: 'Disposal Log', location: 'Pantry/Cafeteria' }
                ]
            },
            {
                title: "👷 Contractor EHS Management & Onboarding",
                department: "EHS/Procurement",
                frequency: "Per Contract",
                role: "EHS Officer",
                summary: "A critical protocol to ensure that third-party contractors do not introduce safety risks to your site.",
                tasks: [
                    { id: 'CON-EHS-001', description: "Verify that the contractor has provided their company safety policy and relevant insurance certificates.", priority: 'High', riskLevel: 'High', proof: 'Document Review Log', location: 'Office' },
                    { id: 'CON-EHS-002', description: "Conduct a mandatory safety induction for all contractor staff before they begin work on site.", priority: 'High', riskLevel: 'High', proof: 'Training Attendance Sheet', location: 'Site' },
                    { id: 'CON-EHS-003', description: "Review and approve the contractor's risk assessment and method statement (RAMS) for their scope of work.", priority: 'High', riskLevel: 'High', proof: 'Approved RAMS', location: 'Office' },
                    { id: 'CON-EHS-004', description: "Perform random daily spot-checks on the contractor's work area to ensure compliance with safety rules.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Site' },
                    { id: 'CON-EHS-005', description: "Issue and track permits-to-work for any high-risk activities (e.g., hot work, confined space entry).", priority: 'High', riskLevel: 'High', proof: 'PTW Log', location: 'Site' }
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
                title: "🧊 Thawing & Tempering Protocol (HACCP)",
                department: "F&B",
                frequency: "Daily",
                role: "Prep Chef",
                summary: "Prevents bacterial growth by ensuring a strict, auditable process for safely thawing frozen food items.",
                tasks: [
                    { id: 'THAW-001', description: "Move all items required for tomorrow's prep from the freezer to a designated 'thawing refrigerator' (at or below 5°C).", priority: 'High', riskLevel: 'High', proof: 'Transfer Log', location: 'Freezer/Thawing Fridge' },
                    { id: 'THAW-002', description: "Log the item and the date/time it was moved to the thawing fridge.", priority: 'High', riskLevel: 'Medium', proof: 'Thawing Log', location: 'Thawing Fridge' },
                    { id: 'THAW-003', description: "Explicitly forbid unsafe thawing methods: running under hot water, leaving at room temperature, or microwaving from frozen.", priority: 'High', riskLevel: 'High', proof: 'Training Record', location: 'Kitchen' },
                    { id: 'THAW-004', description: "Place raw meat and poultry on the lowest shelves of the thawing fridge to prevent drips from contaminating other foods.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Thawing Fridge' },
                    { id: 'THAW-005', description: "Once thawed, items must be used within 24 hours or disposed of.", priority: 'High', riskLevel: 'Medium', proof: 'Usage/Disposal Log', location: 'Kitchen' }
                ]
            },
            {
                title: "🥜 Kitchen Allergy Handling Protocol",
                department: "F&B",
                frequency: "Per Allergy Order",
                role: "Head Chef/Line Cook",
                summary: "A life-saving checklist to prevent cross-contamination and ensure guests with allergies can dine safely.",
                tasks: [
                    { id: 'ALLERGY-001', description: "Upon receiving an allergy-flagged order, the Head Chef must verbally confirm the allergy with the server.", priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation', location: 'Kitchen' },
                    { id: 'ALLERGY-002', description: "The station handling the order must be completely wiped down and sanitized.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Kitchen Station' },
                    { id: 'ALLERGY-003', description: "A new set of designated, purple-colored utensils (tongs, spoons) and a separate cutting board must be used.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Kitchen Station' },
                    { id: 'ALLERGY-004', description: "The cook must change their gloves before preparing the allergy-safe meal.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Kitchen Station' },
                    { id: 'ALLERGY-005', description: "The finished allergy-safe dish must be clearly marked (e.g., with a purple pick) before it leaves the kitchen.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Kitchen Pass' },
                ]
            },
            {
                title: "🤒 Staff 'Fit to Work' & Illness Reporting Protocol",
                department: "HR/F&B",
                frequency: "Daily",
                role: "Sous Chef/Manager",
                summary: "A critical public health checklist to prevent sick employees from handling food and causing a foodborne illness outbreak.",
                tasks: [
                    { id: 'FIT-001', description: "Before each shift, conduct a brief, confidential huddle where each team member gives a verbal 'fit to work' confirmation.", priority: 'High', riskLevel: 'High', proof: 'Shift Huddle Log', location: 'Kitchen/Staff Area' },
                    { id: 'FIT-002', description: "Any staff reporting symptoms of GI illness (vomiting, diarrhea) are immediately sent home.", priority: 'High', riskLevel: 'High', proof: 'Illness Log', location: "Manager's Office" },
                    { id: 'FIT-003', description: "Shifts for sick employees must be covered from a pre-approved 'on-call' list, not by pressuring other staff.", priority: 'Medium', riskLevel: 'Medium', proof: 'Roster Change Log', location: "Manager's Office" },
                    { id: 'FIT-004', description: "An employee sent home cannot return to work until they have been symptom-free for at least 24 hours.", priority: 'High', riskLevel: 'High', proof: 'Return to Work Form', location: "Manager's Office" },
                    { id: 'FIT-005', description: "Educate staff on the importance of reporting illness and the company's non-punitive policy for doing so.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: "HR" }
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
                title: "🧑‍🍳 Staff Personal Hygiene Checklist",
                department: "Compliance",
                frequency: "Daily",
                role: "Manager",
                summary: "A checklist to ensure all food handlers are adhering to strict personal hygiene standards to prevent foodborne illness.",
                tasks: [
                    { id: 'CK-SPH-001', description: "Staff are in clean, proper uniform at the start of shift.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-SPH-002', description: "Fingernails are short, clean, and free of nail polish.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-SPH-003', description: "Hair is properly restrained (hat, hairnet).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-SPH-004', description: "No jewelry (except plain wedding band) is worn on hands or wrists.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-SPH-005', description: "Staff wash hands thoroughly at designated times (e.g., after touching face, before starting new task).", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Kitchen' }
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
                title: "🚪 Front of House Closing Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Closing Manager",
                summary: "Ensures the dining area is properly cleaned, reset, and secured at the end of the day.",
                tasks: [
                    { id: 'FOH-C-001', description: "Clear and sanitize all tables.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-C-002', description: "Vacuum or sweep and mop the dining room floor.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-C-003', description: "Reconcile all cash and credit card transactions for the shift.", priority: 'High', riskLevel: 'High', proof: 'POS Report', location: 'Office' },
                    { id: 'FOH-C-004', description: "Lock all doors and windows.", priority: 'High', riskLevel: 'High', proof: 'Security Check', location: 'All' },
                    { id: 'FOH-C-005', description: "Set alarm system if applicable.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Office' }
                ]
            },
            {
                title: "🍸 Bar Opening & Closing Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Bartender",
                summary: "Covers the complete cycle of bar operations from setup and stocking to cleaning and securing inventory.",
                tasks: [
                    { id: 'BAR-OC-001', description: "Check and stock all liquor, beer, wine, and mixers to par levels.", priority: 'High', riskLevel: 'Medium', proof: 'Stock Sheet', location: 'Bar' },
                    { id: 'BAR-OC-002', description: "Prepare fresh garnishes and juices for service.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Bar' },
                    { id: 'BAR-OC-003', description: "Clean and sanitize bar surfaces, tools, and glassware.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Bar' },
                    { id: 'BAR-OC-004', description: "Conduct cash count and reconcile with POS at end of shift.", priority: 'High', riskLevel: 'High', proof: 'POS Report', location: 'Bar' },
                    { id: 'BAR-OC-005', description: "Secure all liquor inventory and lock coolers at close.", priority: 'High', riskLevel: 'High', proof: 'Security Check', location: 'Bar' }
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
        id: 'cinema_operations_pack',
        title: "Cinema & Multiplex Operations",
        priceUSD: 119.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment",
        description: "For cinema managers and regional heads. A comprehensive toolkit for ensuring a seamless movie-goer experience, from box office to end credits.",
        icon: <Ticket className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent" as const,
        sampleItems: [
            "NEW: Includes a 'New Site Feasibility Study' for expansion planning.",
            "Master the 'Film Projection & AV Systems' pre-show checklist.",
            "Standardize 'Box Office & Concessions' management.",
            "Implement a 'Theatre Cleaning & Sanitization' protocol between shows."
        ],
        globalStandards: {
            title: "Aligned with Cinema & Entertainment Industry Standards",
            standards: [
                { name: "Technical", description: "Best practices for digital cinema projection (DCI), sound calibration, and AV system maintenance." },
                { name: "Guest Experience", description: "Protocols for ticketing, crowd flow, concessions management, and theatre cleanliness." },
                { name: "Safety", description: "Procedures for crowd management, emergency evacuations, and health/sanitation." }
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
                title: "📽️ Film Projection & AV Systems Pre-Show Check",
                department: "Technical",
                frequency: "Before First Show",
                role: "Projectionist",
                summary: "Ensures a flawless cinematic experience by verifying all technical aspects of projection and sound before the first audience arrives.",
                tasks: [
                    { id: 'AV-001', description: "Confirm the correct film and showtime playlist is loaded in the server.", priority: 'High', riskLevel: 'High', proof: 'Server Log', location: 'Projection Booth' },
                    { id: 'AV-002', description: "Check projector focus, framing, and brightness using a test pattern.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Auditorium' },
                    { id: 'AV-003', description: "Test sound system by playing an audio sample, checking all speakers (L, C, R, surrounds).", priority: 'High', riskLevel: 'High', proof: 'Audio Test Log', location: 'Auditorium' },
                    { id: 'AV-004', description: "Verify that house lights and automation cues are working correctly with the playlist.", priority: 'High', riskLevel: 'Medium', proof: 'Automation Test', location: 'Projection Booth' },
                    { id: 'AV-005', description: "Ensure server and projector temperatures are within normal operating range.", priority: 'Medium', riskLevel: 'Medium', proof: 'System Health Check', location: 'Projection Booth' }
                ]
            },
            {
                title: "🍿 Box Office & Concessions Opening/Closing",
                department: "Operations",
                frequency: "Daily",
                role: "Lobby Manager",
                summary: "Manages the critical revenue centers of the cinema, ensuring readiness for service and accurate end-of-day financial reconciliation.",
                tasks: [
                    { id: 'BOC-001', description: "Verify opening cash float in all POS terminals.", priority: 'High', riskLevel: 'High', proof: 'Cash Count Sheet', location: 'Box Office/Concessions' },
                    { id: 'BOC-002', description: "Check that all ticketing and POS systems are online and functioning.", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Lobby' },
                    { id: 'BOC-003', description: "Ensure popcorn machines, warmers, and soda fountains are clean and operational.", priority: 'High', riskLevel: 'Medium', proof: 'Visual & Temp Log', location: 'Concessions' },
                    { id: 'BOC-004', description: "Stock all concession items, cups, and packaging to par levels.", priority: 'High', riskLevel: 'Medium', proof: 'Stock Check', location: 'Concessions' },
                    { id: 'BOC-005', description: "Conduct end-of-day cash reconciliation and prepare bank deposits.", priority: 'High', riskLevel: 'High', proof: 'POS Closing Report', location: 'Back Office' }
                ]
            },
            {
                title: "🧹 Theatre Cleaning & Sanitization (Between Shows)",
                department: "Housekeeping",
                frequency: "Between Each Show",
                role: "Usher/Cleaner",
                summary: "A time-sensitive checklist to ensure each auditorium is clean and ready for the next group of guests, enhancing customer experience.",
                tasks: [
                    { id: 'CLEAN-001', description: "Sweep floors to remove popcorn and other debris.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Auditorium' },
                    { id: 'CLEAN-002', description: "Wipe down all seats, armrests, and cup holders with sanitizer.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Auditorium' },
                    { id: 'CLEAN-003', description: "Collect all trash and replace bin liners.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Auditorium' },
                    { id: 'CLEAN-004', description: "Check for and report any damage to seats or the screen.", priority: 'Medium', riskLevel: 'Medium', proof: 'Damage Report Log', location: 'Auditorium' },
                    { id: 'CLEAN-005', description: "Perform a final walkthrough to ensure the theatre is guest-ready.", priority: 'High', riskLevel: 'Low', proof: 'Supervisor Sign-off', location: 'Auditorium' }
                ]
            },
            {
                title: "🔥 Fire & Life Safety Audit",
                department: "Facility/Safety",
                frequency: "Weekly",
                role: "Safety Officer",
                summary: "A critical safety checklist to ensure all fire prevention and evacuation systems are functional and compliant with regulations.",
                tasks: [
                    { id: 'FIRE-001', description: "Check that all emergency exit lights are illuminated and pathways are unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Areas' },
                    { id: 'FIRE-002', description: "Inspect fire extinguishers for correct pressure and ensure they are not expired and are easily accessible.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Tags', location: 'All Areas' },
                    { id: 'FIRE-003', description: "Test the fire alarm system (annunciator panel check).", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Control Room' },
                    { id: 'FIRE-004', description: "Verify that sprinkler system pressure gauges are in the correct range.", priority: 'High', riskLevel: 'High', proof: 'Gauge Photo Log', location: 'Riser Rooms' },
                    { id: 'FIRE-005', description: "Ensure staff are familiar with evacuation routes and assembly points.", priority: 'Medium', riskLevel: 'High', proof: 'Staff Quiz', location: 'All Departments' }
                ]
            },
            {
                title: "🚽 Restroom & Lobby Hygiene Check",
                department: "Housekeeping",
                frequency: "Hourly",
                role: "Housekeeper",
                summary: "Maintains a high standard of cleanliness in public areas, a key driver of customer satisfaction and perception of quality.",
                tasks: [
                    { id: 'HYGIENE-001', description: "Clean and sanitize all toilets, urinals, and sinks.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Restrooms' },
                    { id: 'HYGIENE-002', description: "Restock toilet paper, soap, and paper towels.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Restrooms' },
                    { id: 'HYGIENE-003', description: "Mop floors to clean spills and remove dirt.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Restrooms/Lobby' },
                    { id: 'HYGIENE-004', description: "Empty all waste bins in the lobby and restrooms.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Lobby/Restrooms' },
                    { id: 'HYGIENE-005', description: "Wipe down lobby tables, counters, and other high-touch surfaces.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Lobby' }
                ]
            },
            {
                title: "♿ Accessibility Compliance Audit",
                department: "Operations",
                frequency: "Quarterly",
                role: "Manager",
                summary: "Ensures the cinema is compliant with accessibility regulations and provides a welcoming experience for all guests.",
                tasks: [
                    { id: 'ACCESS-001', description: "Ensure designated wheelchair-accessible seating areas are clear and available.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Auditoriums' },
                    { id: 'ACCESS-002', description: "Verify that ramps and lifts are functional and free of obstructions.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Areas' },
                    { id: 'ACCESS-003', description: "Check that accessible restrooms are clean, stocked, and all grab bars are secure.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Restrooms' },
                    { id: 'ACCESS-004', description: "Test assistive listening devices and ensure staff know how to operate them.", priority: 'Medium', riskLevel: 'Medium', proof: 'Test Log', location: 'Box Office' },
                    { id: 'ACCESS-005', description: "Ensure all accessibility signage is present and clearly visible.", priority: 'High', riskLevel: 'Low', proof: 'Visual Audit', location: 'All Areas' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Weekly",
                role: "Facility Manager",
                summary: "A proactive checklist for preventing and managing pest infestations, crucial for hygiene in a food-service environment like a cinema.",
                tasks: [
                    { id: 'PEST-CINE-001', description: "Inspect auditoriums, concession stands, and storage areas for signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Areas' },
                    { id: 'PEST-CINE-002', description: "Ensure all food ingredients in the concession stand are stored in sealed containers.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Concessions' },
                    { id: 'PEST-CINE-003', description: "Check that garbage and refuse areas are kept clean and bins are tightly covered to deter pests.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Waste Area' },
                    { id: 'PEST-CINE-004', description: "Review pest control vendor service reports and ensure all recommendations are actioned.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Review', location: 'Manager Office' },
                    { id: 'PEST-CINE-005', description: "Ensure deep cleaning schedules under seating and in service areas are being followed to eliminate food sources.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log Review', location: 'Manager Office' }
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
                title: "⚕️ Surgical Safety Checklist (WHO Aligned)",
                department: "Surgery",
                frequency: "Per Surgery",
                role: "Surgical Team",
                summary: "A three-phase checklist (Sign In, Time Out, Sign Out) based on WHO guidelines to prevent surgical errors, covering patient ID, site marking, and instrument counts.",
                tasks: [
                    { id: 'SURG-SS-001', description: "(Sign In) Confirm patient identity, surgical site, and procedure.", priority: 'High', riskLevel: 'High', proof: 'Team Verbal Confirmation', location: 'Operating Room' },
                    { id: 'SURG-SS-002', description: "(Sign In) Confirm surgical site is marked.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Operating Room' },
                    { id: 'SURG-SS-003', description: "(Time Out) All team members introduce themselves by name and role.", priority: 'High', riskLevel: 'Medium', proof: 'Team Verbal Confirmation', location: 'Operating Room' },
                    { id: 'SURG-SS-004', description: "(Time Out) Confirm critical events, anticipated blood loss, and relevant patient information.", priority: 'High', riskLevel: 'High', proof: 'Team Verbal Confirmation', location: 'Operating Room' },
                    { id: 'SURG-SS-005', description: "(Sign Out) Confirm name of procedure, and completion of instrument, sponge, and needle counts.", priority: 'High', riskLevel: 'High', proof: 'Count Confirmation', location: 'Operating Room' }
                ]
            },
            {
                title: "🔬 Infection Control in Wards & ICUs",
                department: "Infection Control",
                frequency: "Daily",
                role: "Infection Control Nurse",
                summary: "Daily audit to ensure adherence to infection prevention protocols, covering hand hygiene, use of PPE, and environmental sanitation.",
                tasks: [
                    { id: 'IC-WICU-001', description: "Audit hand hygiene compliance among staff.", priority: 'High', riskLevel: 'High', proof: 'Audit Form', location: 'Wards/ICUs' },
                    { id: 'IC-WICU-002', description: "Check availability and correct use of Personal Protective Equipment (PPE).", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Wards/ICUs' },
                    { id: 'IC-WICU-003', description: "Verify that cleaning and disinfection of high-touch surfaces are being done as per schedule.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Logs', location: 'Wards/ICUs' },
                    { id: 'IC-WICU-004', description: "Ensure proper disposal of biomedical waste in color-coded bins.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Wards/ICUs' },
                    { id: 'IC-WICU-005', description: "Monitor and enforce isolation precautions for infected patients.", priority: 'High', riskLevel: 'High', proof: 'Isolation Room Audit', location: 'Isolation Rooms' }
                ]
            },
            {
                title: "🧪 Critical Test Result Communication",
                department: "Quality/Nursing",
                frequency: "Per Critical Result",
                role: "Lab Tech/Nurse",
                summary: "A closed-loop communication protocol to ensure that life-threatening lab results are acted upon immediately.",
                tasks: [
                    { id: 'CTR-001', description: "Lab technician must verbally call the patient's ward/unit to report any 'panic value' result.", priority: 'High', riskLevel: 'High', proof: 'Call Log', location: 'Laboratory' },
                    { id: 'CTR-002', description: "The receiving nurse must document the result and perform a 'read-back' to the lab tech to confirm accuracy.", priority: 'High', riskLevel: 'High', proof: 'EMR/Log Note', location: 'Nursing Station' },
                    { id: 'CTR-003', description: "The nurse must notify the responsible physician of the critical result within 15 minutes.", priority: 'High', riskLevel: 'High', proof: 'Physician Communication Log', location: 'Nursing Station' },
                    { id: 'CTR-004', description: "The lab system must flag the result as 'acknowledged' only after the read-back is complete.", priority: 'High', riskLevel: 'Medium', proof: 'System Log', location: 'LIS' },
                    { id: 'CTR-005', description: "Document the action taken by the physician in response to the critical result.", priority: 'High', riskLevel: 'High', proof: 'EMR Note', location: 'Nursing Station' }
                ]
            },
            {
                title: "🧪 Laboratory Sample Handling & Labeling",
                department: "Laboratory",
                frequency: "Per Sample",
                role: "Lab Technician",
                summary: "A critical checklist to prevent sample rejection or misidentification. Covers sample collection, labeling, transport, and accessioning.",
                tasks: [
                    { id: 'LAB-SHL-001', description: "Verify patient identity before sample collection using two identifiers.", priority: 'High', riskLevel: 'High', proof: 'Patient Confirmation', location: 'Collection Point' },
                    { id: 'LAB-SHL-002', description: "Label sample container in front of the patient immediately after collection.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Collection Point' },
                    { id: 'LAB-SHL-003', description: "Ensure sample is transported to the lab under correct temperature conditions.", priority: 'High', riskLevel: 'Medium', proof: 'Transport Log', location: 'Lab' },
                    { id: 'LAB-SHL-004', description: "Check sample for quality (e.g., no hemolysis, sufficient quantity) upon receipt.", priority: 'High', riskLevel: 'Medium', proof: 'Receiving Log', location: 'Lab' },
                    { id: 'LAB-SHL-005', description: "Accurately log sample details into the Laboratory Information System (LIS).", priority: 'High', riskLevel: 'High', proof: 'LIS Entry', location: 'Lab' }
                ]
            },
            {
                title: "📄 In-Patient Admission & Discharge Protocol",
                department: "Front Office",
                frequency: "Per Patient",
                role: "Admissions Officer",
                summary: "Ensures a smooth, informed, and error-free patient journey from admission to discharge, covering consent, financial counseling, and discharge instructions.",
                tasks: [
                    { id: 'ADM-AD-001', description: "(Admission) Obtain informed consent and complete all admission paperwork.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Forms', location: 'Admissions' },
                    { id: 'ADM-AD-002', description: "(Admission) Provide financial counseling regarding estimated costs and insurance coverage.", priority: 'High', riskLevel: 'Medium', proof: 'Counseling Form', location: 'Admissions' },
                    { id: 'ADM-AD-003', description: "(Discharge) Verify that the discharge summary is complete and signed by the physician.", priority: 'High', riskLevel: 'High', proof: 'Discharge Summary', location: 'Nursing Station' },
                    { id: 'ADM-AD-004', description: "(Discharge) Explain all post-discharge medications and follow-up appointments to the patient/family.", priority: 'High', riskLevel: 'High', proof: 'Discharge Counseling Form', location: 'Bedside' },
                    { id: 'ADM-AD-005', description: "(Discharge) Settle the final bill and complete all financial formalities.", priority: 'High', riskLevel: 'High', proof: 'Final Bill', location: 'Billing' }
                ]
            },
            {
                title: "🔒 Controlled Substance Inventory",
                department: "Pharmacy",
                frequency: "Daily",
                role: "Pharmacist",
                summary: "A high-stakes checklist for managing narcotics and other controlled substances, ensuring 100% accountability and compliance with legal requirements.",
                tasks: [
                    { id: 'PH-CSI-001', description: "Conduct a physical count of all controlled substances at the beginning and end of each shift.", priority: 'High', riskLevel: 'High', proof: 'Count Log', location: 'Pharmacy Vault' },
                    { id: 'PH-CSI-002', description: "Ensure two pharmacists verify the count and sign the register.", priority: 'High', riskLevel: 'High', proof: 'Signed Register', location: 'Pharmacy Vault' },
                    { id: 'PH-CSI-003', description: "Reconcile the physical count with the perpetual inventory record in the system.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Pharmacy' },
                    { id: 'PH-CSI-004', description: "Investigate and report any discrepancies immediately to the pharmacy head.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Pharmacy' },
                    { id: 'PH-CSI-005', description: "Ensure all controlled substances are stored in a securely locked, dedicated vault or cabinet.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Pharmacy Vault' }
                ]
            },
            {
                title: "🧲 MRI Suite Safety & Access Control",
                department: "Radiology/Safety",
                frequency: "Per Patient/Entry",
                role: "MRI Technician",
                summary: "A critical protocol to prevent dangerous 'projectile effect' incidents by ensuring no metallic objects enter the magnet room.",
                tasks: [
                    { id: 'MRI-001', description: "Before any patient or staff enters Zone IV (the magnet room), they must pass through a ferromagnetic detector.", priority: 'High', riskLevel: 'High', proof: 'Detector Log', location: 'MRI Suite Entrance' },
                    { id: 'MRI-002', description: "A second, verbal checklist must be completed by the MRI tech confirming the removal of all metal objects (jewelry, phones, belts, etc.).", priority: 'High', riskLevel: 'High', proof: 'Verbal Checklist Log', location: 'MRI Suite Zone III' },
                    { id: 'MRI-003', description: "For in-patients on gurneys or wheelchairs, a physical search for metal objects (e.g., oxygen tanks) must be performed.", priority: 'High', riskLevel: 'High', proof: 'Search Confirmation', location: 'MRI Suite Zone III' },
                    { id: 'MRI-004', description: "Ensure the 'Magnet is Always On' sign is clearly visible at all entry points to Zone IV.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'MRI Suite Entrance' },
                    { id: 'MRI-005', description: "Provide hearing protection to all patients and anyone remaining in the room.", priority: 'High', riskLevel: 'Medium', proof: 'Provision Log', location: 'MRI Suite Zone III' }
                ]
            },
            {
                title: "🚨 Emergency Code Blue Response",
                department: "Emergency",
                frequency: "Per Event/Drill",
                role: "Code Blue Team Leader",
                summary: "A time-critical checklist for managing cardiac emergencies (Code Blue). Covers team roles, crash cart readiness, and post-event documentation.",
                tasks: [
                    { id: 'ER-CB-001', description: "Verify the crash cart is fully stocked, and the defibrillator is charged and functional (checked daily).", priority: 'High', riskLevel: 'High', proof: 'Crash Cart Log', location: 'ER/Wards' },
                    { id: 'ER-CB-002', description: "Announce 'Code Blue' with the exact location clearly.", priority: 'High', riskLevel: 'High', proof: 'PA System Log', location: 'Hospital-wide' },
                    { id: 'ER-CB-003', description: "Assign roles clearly at the start of the event (e.g., compressor, airway, recorder).", priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation', location: 'Bedside' },
                    { id: 'ER-CB-004', description: "Document all interventions, medications, and timings accurately on the Code Blue record.", priority: 'High', riskLevel: 'High', proof: 'Code Blue Form', location: 'Bedside' },
                    { id: 'ER-CB-005', description: "Conduct a post-event debrief to identify areas for improvement.", priority: 'Medium', riskLevel: 'Medium', proof: 'Debrief Minutes', location: 'Conference Room' }
                ]
            },
            {
                title: "🗣️ High-Risk Patient Handover (Nursing)",
                department: "Nursing",
                frequency: "Per Shift Change",
                role: "Nurse",
                summary: "A mandatory, verbal checklist performed at every shift change at the patient's bedside to ensure critical risk information is never missed.",
                tasks: [
                    { id: 'HRPH-001', description: "Verbally confirm the patient's identity and wristband with the incoming nurse.", priority: 'High', riskLevel: 'High', proof: 'Handover Log', location: 'Bedside' },
                    { id: 'HRPH-002', description: "Explicitly state the patient's 'High-Risk' status (e.g., 'This is Mr. Smith, he is a high fall risk and has a severe allergy to penicillin').", priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation', location: 'Bedside' },
                    { id: 'HRPH-003', description: "Physically point out any visual cues in the room indicating this risk (e.g., the red 'Fall Risk' sticker, 'Allergy' wristband).", priority: 'High', riskLevel: 'High', proof: 'Visual Confirmation', location: 'Bedside' },
                    { id: 'HRPH-004', description: "Review any critical events or changes from the previous shift.", priority: 'High', riskLevel: 'High', proof: 'Chart Review', location: 'Bedside' },
                    { id: 'HRPH-005', description: "Both outgoing and incoming nurses sign off on the handover in the patient's chart or a dedicated log.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Log', location: 'Bedside' }
                ]
            },
            {
                title: "💻 Telemedicine Consultation Protocol",
                department: "OPD",
                frequency: "Per Consultation",
                role: "Clinician",
                summary: "Ensures quality, security, and compliance in virtual patient consultations, a growing part of modern healthcare.",
                tasks: [
                    { id: 'TELE-001', description: "Verify patient identity via video using at least two unique identifiers.", priority: 'High', riskLevel: 'High', proof: 'EMR Note', location: 'Virtual' },
                    { id: 'TELE-002', description: "Obtain and document patient's verbal consent for the virtual consultation.", priority: 'High', riskLevel: 'Medium', proof: 'EMR Note', location: 'Virtual' },
                    { id: 'TELE-003', description: "Ensure a secure, private, and stable internet connection before beginning the consultation.", priority: 'High', riskLevel: 'Medium', proof: 'Platform Check', location: 'Clinician Office' },
                    { id: 'TELE-004', description: "Provide clear instructions for post-consultation follow-up and e-prescription access.", priority: 'Medium', riskLevel: 'Medium', proof: 'Verbal Confirmation', location: 'Virtual' },
                    { id: 'TELE-005', description: "Document the consultation fully in the EMR, using a specific 'telemedicine' tag for audit purposes.", priority: 'High', riskLevel: 'Medium', proof: 'EMR Entry', location: 'EMR' }
                ]
            },
            {
                title: "🔄 Daily Data Integrity Audit (LIS-HIS-EMR)",
                department: "IT/Quality",
                frequency: "Daily",
                role: "IT Analyst",
                summary: "A crucial back-end check to prevent medical errors caused by data inconsistencies between different hospital information systems.",
                tasks: [
                    { id: 'DATA-001', description: "Run a daily script to identify and reconcile any demographic mismatches between HIS and EMR for new admissions.", priority: 'High', riskLevel: 'High', proof: 'Script Log', location: 'Server' },
                    { id: 'DATA-002', description: "Audit a random sample of 10 lab reports to ensure results in LIS match what is displayed in the EMR.", priority: 'High', riskLevel: 'High', proof: 'Audit Log', location: 'IT Office' },
                    { id: 'DATA-003', description: "Check the system interface message queue for any failed or unprocessed data transfers between systems.", priority: 'High', riskLevel: 'High', proof: 'Queue Monitoring Tool', location: 'Server' },
                    { id: 'DATA-004', description: "Verify that critical/panic value alerts from the LIS are being successfully flagged in the EMR for clinicians.", priority: 'High', riskLevel: 'High', proof: 'Test Patient Record', location: 'IT Office' },
                    { id: 'DATA-005', description: "Confirm that nightly data backups for all clinical systems have completed successfully.", priority: 'High', riskLevel: 'High', proof: 'Backup Log', location: 'Server' }
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
                title: "🚶 Student Dismissal & Handover",
                department: "Academics/Security",
                frequency: "Daily",
                role: "Supervising Teacher",
                summary: "A high-stakes protocol to ensure every child is handed over safely to the correct parent or guardian.",
                tasks: [
                    { id: 'DIS-001', description: "Verify identity of the person picking up the child against the authorized pick-up list/ID card.", priority: 'High', riskLevel: 'High', proof: 'ID Card Check', location: 'Dismissal Area' },
                    { id: 'DIS-002', description: "Ensure children are handed over only in the designated, supervised area.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Observation', location: 'Dismissal Area' },
                    { id: 'DIS-003', description: "Maintain an orderly line and prevent crowding at the gate.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Observation', location: 'Gate' },
                    { id: 'DIS-004', description: "Do not release a child to an unauthorized person without explicit permission from the parent.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Dismissal Area' },
                    { id: 'DIS-005', description: "Account for all children before the final staff member leaves the dispersal point.", priority: 'High', riskLevel: 'High', proof: 'Final Count Log', location: 'Dismissal Area' }
                ]
            },
            {
                title: "🧹 End-of-Day Campus Clearing Procedure",
                department: "Admin/Security",
                frequency: "Daily",
                role: "Admin Supervisor",
                summary: "A liability-prevention checklist to ensure no students are left unsupervised on campus after school hours.",
                tasks: [
                    { id: 'EOD-001', description: "A designated staff member must perform a final sweep of all common areas (playground, library, hallways) 30 minutes after the final bell.", priority: 'High', riskLevel: 'High', proof: 'Sweep Log', location: 'Campus-wide' },
                    { id: 'EOD-002', description: "Check all restrooms to ensure no student is left behind.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Restrooms' },
                    { id: 'EOD-003', description: "Ensure all remaining students are moved to the official after-care program or the front office for supervised waiting.", priority: 'High', riskLevel: 'High', proof: 'Supervision Log', location: 'Designated Areas' },
                    { id: 'EOD-004', description: "Verify that all classrooms are locked after the last teacher leaves.", priority: 'High', riskLevel: 'Medium', proof: 'Lock Check Log', location: 'Academic Buildings' },
                    { id: 'EOD-005', description: "Confirm with security that the campus is clear before the last admin staff departs.", priority: 'High', riskLevel: 'Medium', proof: 'Security Confirmation Log', location: 'Admin Office' }
                ]
            },
            {
                title: "🛡️ Campus Security & Patrolling",
                department: "Security",
                frequency: "Daily",
                role: "Security Supervisor",
                summary: "Daily security operations to maintain a safe campus environment, including patrolling, monitoring CCTV, and managing access.",
                tasks: [
                    { id: 'SEC-001', description: "Check that all security guards are on duty and at their designated posts.", priority: 'High', riskLevel: 'Medium', proof: 'Attendance Log', location: 'Campus-wide' },
                    { id: 'SEC-002', description: "Conduct regular patrols of the campus perimeter, including boundary walls.", priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Perimeter' },
                    { id: 'SEC-003', description: "Monitor CCTV cameras for any suspicious activity, especially near entry/exit points.", priority: 'High', riskLevel: 'Medium', proof: 'CCTV Log', location: 'Security Room' },
                    { id: 'SEC-004', description: "Monitor the gate and surrounding area for any unauthorized or suspicious persons.", priority: 'High', riskLevel: 'High', proof: 'Observation Log', location: 'Gate' },
                    { id: 'SEC-005', description: "Ensure all non-essential gates are locked during school hours.", priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Gates' }
                ]
            },
            {
                title: "🧑‍🏫 Classroom Safety & Hygiene",
                department: "Academics/Admin",
                frequency: "Weekly",
                role: "Admin Manager",
                summary: "A checklist for teachers and admin to ensure classrooms are safe, hygienic, and conducive to learning.",
                tasks: [
                    { id: 'CSH-001', description: "Check for any sharp edges or broken furniture in the classroom.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Classroom' },
                    { id: 'CSH-002', description: "Ensure classroom is clean and dust-free.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Classroom' },
                    { id: 'CSH-003', description: "Verify that fire extinguisher and first-aid kit are present and accessible.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Classroom' },
                    { id: 'CSH-004', description: "Ensure electrical sockets are safe and not overloaded.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Classroom' },
                    { id: 'CSH-005', description: "Confirm proper ventilation and lighting in the classroom.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Classroom' }
                ]
            },
            {
                title: "🚑 Student Medical Emergency Response",
                department: "Admin/Health",
                frequency: "Per Incident/Drill",
                role: "School Nurse/Admin",
                summary: "A critical protocol to ensure a swift and correct response to a student medical emergency, such as an allergic reaction.",
                tasks: [
                    { id: 'SMER-001', description: "For any student with a documented life-threatening allergy, their photo and emergency action plan must be posted in the staff room.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Staff Room' },
                    { id: 'SMER-002', description: "The location of the student's EpiPen (or other emergency medication) must be clearly labeled and known to all relevant staff.", priority: 'High', riskLevel: 'High', proof: 'Location Log', location: "Nurse's Office/Classroom" },
                    { id: 'SMER-003', description: "Conduct a drill at the start of each semester on the procedure for responding to an anaphylactic shock.", priority: 'High', riskLevel: 'Medium', proof: 'Drill Log', location: 'Campus-wide' },
                    { id: 'SMER-004', description: "After administering emergency medication, immediately call emergency services and then the parent/guardian.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Office' },
                    { id: 'SMER-005', description: "Document every step of the incident, including times and actions taken, for legal and review purposes.", priority: 'High', riskLevel: 'High', proof: 'Incident Report Form', location: 'Nurse Office' }
                ]
            },
            {
                title: "📋 Visitor & Vendor Management",
                department: "Security",
                frequency: "As-Needed",
                role: "Security Guard",
                summary: "A strict protocol for managing all non-staff entries to the campus, ensuring safety and accountability.",
                tasks: [
                    { id: 'VIS-001', description: "Politely stop all visitors at the gate and inquire about the purpose of their visit.", priority: 'High', riskLevel: 'Medium', proof: 'Gate Log', location: 'Gate' },
                    { id: 'VIS-002', description: "Verify visitor identity with a valid photo ID.", priority: 'High', riskLevel: 'High', proof: 'ID Check', location: 'Gate' },
                    { id: 'VIS-003', description: "Log visitor details (name, contact, purpose, person to meet) in the register.", priority: 'High', riskLevel: 'Medium', proof: 'Visitor Register', location: 'Gate' },
                    { id: 'VIS-004', description: "Issue a visitor pass which must be worn at all times.", priority: 'High', riskLevel: 'Medium', proof: 'Pass Issuance', location: 'Gate' },
                    { id: 'VIS-005', description: "Ensure the visitor is escorted or directed to the concerned person/department.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Confirmation', location: 'Gate' }
                ]
            },
            {
                title: "🔥 Fire & Emergency Drill Protocol",
                department: "Safety",
                frequency: "Quarterly",
                role: "Safety Officer",
                summary: "A step-by-step guide to conducting effective emergency drills, ensuring staff and students know exactly what to do in a real crisis.",
                tasks: [
                    { id: 'DRILL-001', description: "Pre-plan the drill scenario (e.g., fire, earthquake) and inform key staff.", priority: 'High', riskLevel: 'Medium', proof: 'Drill Plan', location: 'Office' },
                    { id: 'DRILL-002', description: "Sound the emergency alarm and observe reaction time.", priority: 'High', riskLevel: 'High', proof: 'Time Log', location: 'Campus-wide' },
                    { id: 'DRILL-003', description: "Ensure teachers lead students out in an orderly fashion using designated escape routes.", priority: 'High', riskLevel: 'High', proof: 'Drill Observation', location: 'Campus-wide' },
                    { id: 'DRILL-004', description: "Conduct a head count at the designated assembly point to ensure everyone is evacuated.", priority: 'High', riskLevel: 'High', proof: 'Head Count Sheet', location: 'Assembly Point' },
                    { id: 'DRILL-005', description: "Conduct a post-drill review to identify gaps and areas for improvement.", priority: 'High', riskLevel: 'Medium', proof: 'Review Minutes', location: 'Office' }
                ]
            },
            {
                title: "⚽ Playground & Sports Safety",
                department: "Admin/Sports",
                frequency: "Weekly",
                role: "Admin Manager",
                summary: "Weekly inspection of all playground and sports equipment to prevent injuries.",
                tasks: [
                    { id: 'PLAY-001', description: "Inspect all swings, slides, and climbing structures for sharp edges, rust, or instability.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Playground' },
                    { id: 'PLAY-002', description: "Check the playground surface (sand, rubber matting) for adequate depth and hazards.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Playground' },
                    { id: 'PLAY-003', description: "Ensure sports equipment (goalposts, basketball hoops) is securely anchored.", priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Sports Ground' },
                    { id: 'PLAY-004', description: "Remove any broken or unsafe equipment from use immediately.", priority: 'High', riskLevel: 'High', proof: 'Removal Log', location: 'Playground/Sports Ground' },
                    { id: 'PLAY-005', description: "Ensure adequate supervision is present during play times.", priority: 'High', riskLevel: 'Medium', proof: 'Roster Check', location: 'Playground/Sports Ground' }
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
                title: "🔧 Machine Maintenance & Safety",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Technician",
                summary: "Preventive maintenance checks to ensure machinery is running efficiently and safely, covering lubrication, guarding, and emergency stops.",
                tasks: [
                    { id: 'MAINT-001', description: "Obtain a 'Permit to Work' before starting any non-routine maintenance task.", priority: 'High', riskLevel: 'High', proof: 'Permit Form', location: 'Machine Location' },
                    { id: 'MAINT-002', description: "Ensure all machine guards are in place and functional.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Machine Location' },
                    { id: 'MAINT-003', description: "Check and test all emergency stop buttons.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Machine Location' },
                    { id: 'MAINT-004', description: "Lubricate moving parts as per the manufacturer's schedule.", priority: 'Medium', riskLevel: 'Medium', proof: 'Lubrication Log', location: 'Machine Location' },
                    { id: 'MAINT-005', description: "Clean machine and surrounding area of debris and oil spills after maintenance.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Machine Location' }
                ]
            },
            {
                title: "🔒 Lock-Out Tag-Out (LOTO) Procedure",
                department: "EHS/Maintenance",
                frequency: "Per Use",
                role: "Authorized Employee",
                summary: "A life-saving procedure to ensure machinery is properly shut off and not restarted prior to the completion of maintenance or repair work.",
                tasks: [
                    { id: 'LOTO-001', description: "Identify all energy sources for the machine to be serviced (electrical, pneumatic, hydraulic).", priority: 'High', riskLevel: 'High', proof: 'Energy Source List', location: 'Machine Location' },
                    { id: 'LOTO-002', description: "De-energize and lock out all power sources using an approved lock and tag.", priority: 'High', riskLevel: 'High', proof: 'Physical Lock/Tag', location: 'Energy Source' },
                    { id: 'LOTO-003', description: "Dissipate any stored energy (e.g., bleed pneumatic lines).", priority: 'High', riskLevel: 'High', proof: 'Verification', location: 'Machine Location' },
                    { id: 'LOTO-004', description: "Attempt to start the machine to verify that it is fully de-energized (verification step).", priority: 'High', riskLevel: 'High', proof: 'Test Attempt', location: 'Machine Location' },
                    { id: 'LOTO-005', description: "Only the employee who placed the lock is authorized to remove it after work is complete.", priority: 'High', riskLevel: 'High', proof: 'Policy', location: 'Machine Location' }
                ]
            },
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
                title: "🧪 Hazardous Material Handling & Storage",
                department: "EHS",
                frequency: "Weekly",
                role: "EHS Officer",
                summary: "Ensures that all hazardous chemicals are stored and handled in compliance with safety regulations to prevent spills, fires, and exposure.",
                tasks: [
                    { id: 'HAZMAT-001', description: "Verify all hazardous materials are stored in designated, well-ventilated areas.", priority: 'High', riskLevel: 'High', proof: 'Storage Area Inspection', location: 'Chemical Store' },
                    { id: 'HAZMAT-002', description: "Ensure all containers are properly labeled with chemical name and hazard warnings.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Chemical Store' },
                    { id: 'HAZMAT-003', description: "Check that Safety Data Sheets (SDS) are available for all hazardous chemicals on site.", priority: 'High', riskLevel: 'High', proof: 'SDS Binder Check', location: 'Supervisor Office' },
                    { id: 'HAZMAT-004', description: "Inspect for and clean up any leaks or spills immediately.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Chemical Store' },
                    { id: 'HAZMAT-005', description: "Ensure spill kits and emergency eyewash/shower stations are accessible and functional.", priority: 'High', riskLevel: 'High', proof: 'Weekly Test Log', location: 'Near Chemical Store' }
                ]
            },
            {
                title: "📦 Non-Conforming Material Control",
                department: "Quality",
                frequency: "Per Non-conformance",
                role: "QC Inspector",
                summary: "A crucial protocol to prevent defective products or raw materials from being accidentally used or shipped.",
                tasks: [
                    { id: 'NCM-001', description: "All non-conforming or quarantined material must be physically moved to a separate, red-taped 'Quarantine Cage' or area.", priority: 'High', riskLevel: 'High', proof: 'Photo', location: 'Quarantine Area' },
                    { id: 'NCM-002', description: "The material must be digitally flagged in the inventory system to make it impossible to generate a shipping label or work order for it.", priority: 'High', riskLevel: 'High', proof: 'System Screenshot', location: 'Inventory System' },
                    { id: 'NCM-003', description: "A Non-Conformance Report (NCR) must be raised and attached to the physical material.", priority: 'High', riskLevel: 'Medium', proof: 'NCR Form', location: 'Quarantine Area' },
                    { id: 'NCM-004', description: "Disposition of the material (scrap, rework, return to vendor) must be decided by the Material Review Board and documented.", priority: 'High', riskLevel: 'Medium', proof: 'MRB Minutes', location: 'Office' },
                    { id: 'NCM-005', description: "Ensure operators are trained on how to identify and report non-conforming materials.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Records', location: 'Production Floor' }
                ]
            },
            {
                title: "📦 Raw Material Quality Control",
                department: "Quality Control",
                frequency: "Per Delivery",
                role: "QC Inspector",
                summary: "A checklist for inspecting incoming raw materials to ensure they meet specifications before they enter the production process.",
                tasks: [
                    { id: 'RMQC-001', description: "Verify material certificates from the supplier against required specifications.", priority: 'High', riskLevel: 'High', proof: 'Certificate Review', location: 'Receiving Area' },
                    { id: 'RMQC-002', description: "Take a sample of the material for laboratory testing if required.", priority: 'High', riskLevel: 'High', proof: 'Sample Log', location: 'Receiving Area' },
                    { id: 'RMQC-003', description: "Visually inspect the material for any defects, damage, or contamination.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Report', location: 'Receiving Area' },
                    { id: 'RMQC-004', description: "Quarantine any non-conforming material and raise a non-conformance report (NCR).", priority: 'High', riskLevel: 'High', proof: 'NCR Form', location: 'Quarantine Area' },
                    { id: 'RMQC-005', description: "Release approved materials to the main store with proper identification.", priority: 'High', riskLevel: 'Medium', proof: 'Release Note', location: 'Receiving Area' }
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
                title: "🔗 Supply Chain Disruption Drill",
                department: "Logistics/Planning",
                frequency: "Quarterly",
                role: "Supply Chain Manager",
                summary: "A simulation checklist to test and improve the plant's resilience to supply chain shocks, such as a primary supplier failing.",
                tasks: [
                    { id: 'SCD-001', description: "Simulate primary supplier failure for a critical raw material.", priority: 'High', riskLevel: 'High', proof: 'Drill Scenario Document', location: 'Planning Office' },
                    { id: 'SCD-002', description: "Identify and contact pre-approved secondary/backup suppliers.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Planning Office' },
                    { id: 'SCD-003', description: "Calculate the impact on the production schedule based on the alternate supplier's lead times.", priority: 'High', riskLevel: 'Medium', proof: 'Revised Schedule', location: 'Planning Office' },
                    { id: 'SCD-004', description: "Test the emergency raw material release protocol from buffer stock.", priority: 'High', riskLevel: 'Medium', proof: 'Stock Release Form', location: 'Warehouse' },
                    { id: 'SCD-005', description: "Conduct a post-drill review to identify weaknesses in the contingency plan.", priority: 'High', riskLevel: 'Medium', proof: 'Post-Drill Report', location: 'Conference Room' }
                ]
            },
            {
                title: "📈 Predictive Maintenance Analysis",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Head",
                summary: "Shifts maintenance from a reactive/preventive model to a data-driven predictive model, reducing downtime and costs.",
                tasks: [
                    { id: 'PDM-001', description: "Review vibration, temperature, and power consumption sensor data from critical machinery.", priority: 'High', riskLevel: 'High', proof: 'Sensor Data Dashboard', location: 'Maintenance Office' },
                    { id: 'PDM-002', description: "Analyze trends and identify any anomalies that deviate from baseline performance.", priority: 'High', riskLevel: 'Medium', proof: 'Trend Analysis Report', location: 'Maintenance Office' },
                    { id: 'PDM-003', description: "Create maintenance work orders based on predictive alerts, not just fixed schedules.", priority: 'High', riskLevel: 'Medium', proof: 'Work Order System', location: 'Maintenance Office' },
                    { id: 'PDM-004', description: "Analyze recent failure data to update and refine the predictive models.", priority: 'Medium', riskLevel: 'Medium', proof: 'Model Update Log', location: 'Maintenance Office' },
                    { id: 'PDM-005', description: "Present a summary of predictive alerts and averted failures in the weekly production meeting.", priority: 'Medium', riskLevel: 'Low', proof: 'Meeting Presentation', location: 'Conference Room' }
                ]
            },
            {
                title: "🚚 Fleet & Heavy Equipment Management",
                department: "Engineering/Maintenance",
                frequency: "Daily/Weekly",
                role: "Fleet Manager",
                summary: "Manages the maintenance and operational readiness of all company vehicles and heavy equipment, ensuring safety and reliability.",
                tasks: [
                    { id: 'FLEET-HEM-001', description: "Conduct mandatory pre-use safety checks for all specialized vehicles (e.g., forklifts, aerial work platforms).", priority: 'High', riskLevel: 'High', proof: 'Pre-use Checklist Form', location: 'Vehicle Depot' },
                    { id: 'FLEET-HEM-002', description: "Track and schedule preventive maintenance based on vehicle running hours or calendar dates.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Schedule', location: 'Workshop' },
                    { id: 'FLEET-HEM-003', description: "Verify operator licenses and certifications for all specialized equipment.", priority: 'High', riskLevel: 'High', proof: 'License Audit Log', location: 'Fleet Office' },
                    { id: 'FLEET-HEM-004', description: "Maintain a log of all vehicle breakdowns and repairs to identify recurring issues.", priority: 'Medium', riskLevel: 'Medium', proof: 'Breakdown Log', location: 'Workshop' },
                    { id: 'FLEET-HEM-005', description: "Ensure all vehicles are equipped with required safety equipment (fire extinguisher, first aid).", priority: 'High', riskLevel: 'High', proof: 'Safety Kit Log', location: 'Vehicle Depot' }
                ]
            },
            {
                title: "📦 Central Stores & Inventory Control",
                department: "Procurement/Logistics",
                frequency: "Daily/Weekly",
                role: "Store Keeper/Manager",
                summary: "Manages the central warehouse for all operational supplies, from critical engineering spares to office consumables, ensuring accuracy and availability.",
                tasks: [
                    { id: 'STORE-001', description: "Receive incoming goods, verifying them against purchase orders and checking for damage (GRN process).", priority: 'High', riskLevel: 'High', proof: 'Signed GRN', location: 'Receiving Bay' },
                    { id: 'STORE-002', description: "Ensure all received items are correctly binned to their designated storage location.", priority: 'High', riskLevel: 'Medium', proof: 'Binning Log', location: 'Warehouse' },
                    { id: 'STORE-003', description: "Conduct daily cycle counts for a designated section of inventory to ensure system accuracy.", priority: 'High', riskLevel: 'High', proof: 'Cycle Count Sheet', location: 'Warehouse' },
                    { id: 'STORE-004', description: "Process material requisitions from departments, ensuring proper authorization.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Requisition Form', location: 'Stores Counter' },
                    { id: 'STORE-005', description: "Maintain a log and secure storage for critical spares with a 'two-person sign-out' rule.", priority: 'High', riskLevel: 'High', proof: 'Critical Spares Log', location: 'Secure Area' }
                ]
            },
            {
                title: "👷 Contractor EHS Management & Onboarding",
                department: "EHS/Procurement",
                frequency: "Per Contract",
                role: "EHS Officer",
                summary: "A critical protocol to ensure that third-party contractors do not introduce safety risks to your site.",
                tasks: [
                    { id: 'CON-EHS-001', description: "Verify that the contractor has provided their company safety policy and relevant insurance certificates.", priority: 'High', riskLevel: 'High', proof: 'Document Review Log', location: 'Office' },
                    { id: 'CON-EHS-002', description: "Conduct a mandatory safety induction for all contractor staff before they begin work on site.", priority: 'High', riskLevel: 'High', proof: 'Training Attendance Sheet', location: 'Site' },
                    { id: 'CON-EHS-003', description: "Review and approve the contractor's risk assessment and method statement (RAMS) for their scope of work.", priority: 'High', riskLevel: 'High', proof: 'Approved RAMS', location: 'Office' },
                    { id: 'CON-EHS-004', description: "Perform random daily spot-checks on the contractor's work area to ensure compliance with safety rules.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Site' },
                    { id: 'CON-EHS-005', description: "Hold a close-out meeting to review safety performance and log any incidents.", priority: 'Medium', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Office' }
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
        id: 'events_management_playbook',
        title: "Event Management Playbook",
        priceUSD: 129.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Events",
        description: "For event planners and agencies. A comprehensive toolkit for flawless execution of corporate events, weddings, and conferences.",
        icon: <Trophy className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Master 'Venue Selection & Contracting' to protect your clients and budget.",
            "Implement a 'Pre-Event AV & Tech Check' to avoid on-stage disasters.",
            "NEW: Includes a 'Speaker Rehearsal' and 'Critical Vendor Confirmation' checklists."
        ],
        globalStandards: {
            title: "Aligned with Global Event Management Standards",
            standards: [
                { name: "Safety & Risk", description: "Event safety protocols (e.g., UK's Purple Guide), crowd management best practices, and risk assessment frameworks." },
                { name: "Technical Production", description: "Best practices for audio-visual (AV) setup, power redundancy, and broadcast integration." },
                { name: "Project Management", description: "Principles of project management for timelines, budgets, and vendor coordination." },
                { name: "Sustainability", description: "ISO 20121 for sustainable event management, focusing on waste reduction and responsible sourcing." }
            ]
        },
        checklists: [
             {
                title: "🤝 Sales-to-Operations Handover for Events",
                department: "Management",
                frequency: "Per Event",
                role: "Sales/Ops Manager",
                summary: "A critical checklist to ensure that what the sales team promised the client is achievable and clearly understood by the operations team that has to deliver it.",
                tasks: [
                    { id: 'S2O-001', description: "The sales and operations heads must jointly review the signed client contract and Banquet Event Order (BEO).", priority: 'High', riskLevel: 'High', proof: 'Signed BEO', location: 'Office' },
                    { id: 'S2O-002', description: "The Operations Manager must physically sign off on the 'Special Requests' section of the BEO, confirming that every specific brand, dietary need, or setup requirement is achievable and has been sourced.", priority: 'High', riskLevel: 'High', proof: 'Signed BEO Section', location: 'Office' },
                    { id: 'S2O-003', description: "Discuss and document potential operational challenges and contingency plans (e.g., weather backup for outdoor event).", priority: 'High', riskLevel: 'Medium', proof: 'Handover Document', location: 'Office' },
                    { id: 'S2O-004', description: "Finalize the budget allocation for operations based on the sold contract.", priority: 'High', riskLevel: 'Medium', proof: 'Budget Sheet', location: 'Office' },
                    { id: 'S2O-005', description: "Introduce the client to the dedicated Operations Manager who will be their point of contact going forward.", priority: 'High', riskLevel: 'Low', proof: 'Introductory Email', location: 'Office' }
                ]
            },
            {
                title: "🎤 Speaker & Presentation Technical Rehearsal",
                department: "AV/Production",
                frequency: "Per Speaker",
                role: "AV Technician",
                summary: "A mandatory rehearsal to prevent on-stage technical failures during keynotes and presentations.",
                tasks: [
                    { id: 'SPKR-TECH-001', description: "Schedule a 30-minute tech rehearsal for every main-stage speaker, the day before their talk.", priority: 'High', riskLevel: 'High', proof: 'Speaker Schedule', location: 'Main Stage/Venue' },
                    { id: 'SPKR-TECH-002', description: "Load and test the speaker's actual presentation file on the actual presentation laptop.", priority: 'High', riskLevel: 'High', proof: 'AV Log', location: 'Main Stage/Venue' },
                    { id: 'SPKR-TECH-003', description: "Have the speaker click through the first 5 slides and test any embedded video or audio.", priority: 'High', riskLevel: 'High', proof: 'AV Log', location: 'Main Stage/Venue' },
                    { id: 'SPKR-TECH-004', description: "Test the slide advancer, microphones, and confidence monitors with the speaker.", priority: 'High', riskLevel: 'Medium', proof: 'AV Log', location: 'Main Stage/Venue' },
                    { id: 'SPKR-TECH-005', description: "Confirm the speaker's preferred lighting and sound levels.", priority: 'Medium', riskLevel: 'Low', proof: 'AV Log', location: 'Main Stage/Venue' }
                ]
            },
            {
                title: "📞 Critical Vendor Pre-Event Confirmation",
                department: "Operations",
                frequency: "48-Hours Pre-Event",
                role: "Operations Head",
                summary: "A verbal confirmation checklist to ensure critical vendors are aligned on deliverables, preventing last-minute failures.",
                tasks: [
                    { id: 'VENDOR-CONF-001', description: "Verbally contact the account manager for each critical vendor (Security, Power, AV, Waste).", priority: 'High', riskLevel: 'High', proof: 'Call Log', location: 'Office' },
                    { id: 'VENDOR-CONF-002', description: "Confirm, line by line, the key deliverables from the contract (e.g., 'Confirming 10 guards on-site by 7 AM').", priority: 'High', riskLevel: 'High', proof: 'Call Log with Notes', location: 'Office' },
                    { id: 'VENDOR-CONF-003', description: "Confirm the name and mobile number of the vendor's on-site supervisor for the day of the event.", priority: 'High', riskLevel: 'Medium', proof: 'Contact Sheet', location: 'Office' },
                    { id: 'VENDOR-CONF-004', description: "Log the name of the person you spoke with and the time of the confirmation call.", priority: 'High', riskLevel: 'Medium', proof: 'Call Log', location: 'Office' },
                    { id: 'VENDOR-CONF-005', description: "Send a summary email of the verbal confirmation to the vendor for a written record.", priority: 'High', riskLevel: 'Medium', proof: 'Sent Email', location: 'Office' }
                ]
            }
        ] 
    },
    {
        id: 'automotive_workshop_pack',
        title: "Automotive Workshop & Service Center Checklist",
        priceUSD: 89.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Automotive",
        description: "For workshop owners and service directors. A toolkit to standardize vehicle servicing, improve quality control, and enhance customer trust.",
        icon: <Wrench className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Implement a 'Multi-Point Vehicle Inspection' for thorough diagnostics.",
            "NEW: Includes a 'Post-Repair QC Test Drive' and 'Specialized Tool Authorization' to prevent customer comebacks and expensive mistakes."
        ],
        globalStandards: {
            title: "Aligned with Automotive Service Standards",
            standards: [
                { name: "Service Quality", description: "Best practices for vehicle inspection, diagnostics, and repair verification." },
                { name: "Safety", description: "Occupational safety guidelines for workshop environments, including tool handling and vehicle lifts." },
                { name: "Technical", description: "Protocols for using OEM-approved tools and handling specialized vehicle systems (EVs, ADAS)." }
            ]
        },
        checklists: [
            {
                title: "🚗 Post-Repair Quality Control & Test Drive",
                department: "Quality Control/Service",
                frequency: "Per Repair",
                role: "QC Manager/Senior Tech",
                summary: "A structured test drive to confirm the root cause of a customer's complaint is fixed before returning the vehicle.",
                tasks: [
                    { id: 'QC-TD-001', description: "The QC driver must review the original customer complaint on the job card.", priority: 'High', riskLevel: 'High', proof: 'Job Card Review', location: 'Workshop' },
                    { id: 'QC-TD-002', description: "Perform a test drive under specific conditions relevant to the complaint (e.g., highway speed for vibration, hard stops for brake noise).", priority: 'High', riskLevel: 'High', proof: 'Test Drive Log', location: 'Road Test' },
                    { id: 'QC-TD-003', description: "Verify that the specific symptom reported by the customer is gone.", priority: 'High', riskLevel: 'High', proof: 'Test Drive Log', location: 'Road Test' },
                    { id: 'QC-TD-004', description: "Both the technician who did the repair and the separate QC manager must sign off on the job card confirming the fix.", priority: 'High', riskLevel: 'High', proof: 'Signed Job Card', location: 'Workshop' },
                    { id: 'QC-TD-005', description: "Perform a final visual inspection for any grease marks or untidiness inside the vehicle.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Inspection', location: 'Workshop' }
                ]
            },
            {
                title: "🛠️ Specialized Tool & Equipment Authorization",
                department: "Service",
                frequency: "Per Use",
                role: "Technician",
                summary: "A protocol to prevent damage to modern vehicles by ensuring only brand-approved diagnostic tools are used.",
                tasks: [
                    { id: 'SPEC-TOOL-001', description: "For work on high-end or specialized vehicles (EVs, luxury), scan a QR code on the work order to see a list of required/forbidden tools.", priority: 'High', riskLevel: 'High', proof: 'System Scan Log', location: 'Workshop Bay' },
                    { id: 'SPEC-TOOL-002', description: "Technician must check a box confirming they have the authorized diagnostic tool before connecting to the vehicle's OBD-II port.", priority: 'High', riskLevel: 'High', proof: 'Digital Checklist', location: 'Workshop Bay' },
                    { id: 'SPEC-TOOL-003', description: "Use of unapproved, generic diagnostic tools on vehicles under warranty is strictly forbidden.", priority: 'High', riskLevel: 'High', proof: 'Policy Acknowledgment', location: 'Workshop' },
                    { id: 'SPEC-TOOL-004', description: "Ensure all specialized tools are returned to their designated secure storage after use.", priority: 'High', riskLevel: 'Medium', proof: 'Tool Return Log', location: 'Tool Crib' },
                    { id: 'SPEC-TOOL-005', description: "Audit calibration dates for all diagnostic and measurement tools weekly.", priority: 'High', riskLevel: 'High', proof: 'Calibration Audit Log', location: 'Tool Crib' }
                ]
            }
        ]
    },
    {
        id: 'jewelry_retail_pack',
        title: "Jewelry Store Security & Operations",
        priceUSD: 199.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Retail",
        description: "For jewelry store owners and security heads. A toolkit for managing high-value inventory, preventing fraud, and training staff.",
        icon: <Gem className="w-8 h-8 text-primary" />,
        sampleItems: [
            "NEW: Implement a 'Customer Experience Audit' and 'Sales Performance Review' for staff.",
            "Master the 'Vault Opening & Closing' dual-control procedure.",
            "Implement a 'High-Value Gemstone Verification' protocol to prevent swapping.",
            "NEW: Includes a 'Show-Me & Distraction Theft Prevention' protocol."
        ],
        globalStandards: {
            title: "Aligned with High-Value Retail Security Standards",
            standards: [
                { name: "Inventory Security", description: "Protocols for vault management, dual-control procedures, and gemstone verification." },
                { name: "Loss Prevention", description: "Best practices for deterring theft, including surveillance, display case management, and staff training." },
                { name: "Compliance", description: "Adherence to regulations regarding anti-money laundering (AML) and responsible sourcing." }
            ]
        },
        checklists: [
            {
                title: "💎 High-Value Gemstone & Inventory Verification",
                department: "Security/Inventory",
                frequency: "Daily",
                role: "Store Manager",
                summary: "A protocol to prevent the sophisticated internal theft of swapping real gemstones with fakes.",
                tasks: [
                    { id: 'GEM-VER-001', description: "During vault opening, randomly select 5 high-value items for detailed verification.", priority: 'High', riskLevel: 'High', proof: 'Selection Log', location: 'Vault' },
                    { id: 'GEM-VER-002', description: "Use a diamond tester to confirm the authenticity of the primary stone.", priority: 'High', riskLevel: 'High', proof: 'Tester Log', location: 'Vault' },
                    { id: 'GEM-VER-003', description: "Using a jeweler's loupe, check the laser inscription on the gem's girdle and match it to the GIA certificate.", priority: 'High', riskLevel: 'High', proof: 'Verification Log', location: 'Vault' },
                    { id: 'GEM-VER-004', description: "Two staff members must witness the verification process and co-sign the daily log.", priority: 'High', riskLevel: 'High', proof: 'Signed Log', location: 'Vault' },
                    { id: 'GEM-VER-005', description: "Weigh the item on a calibrated scale and compare it to the weight listed in the inventory system.", priority: 'High', riskLevel: 'High', proof: 'Weight Log', location: 'Vault' }
                ]
            },
            {
                title: "👀 Show-Me & Distraction Theft Prevention",
                department: "Sales/Security",
                frequency: "Ongoing",
                role: "All Sales Staff",
                summary: "A customer service protocol designed to prevent common distraction and grab-and-run theft scenarios.",
                tasks: [
                    { id: 'SHOW-ME-001', description: "The 'One-Touch, One-Show' Rule: Only one high-value item is out of a locked display at a time.", priority: 'High', riskLevel: 'High', proof: 'Training Record', location: 'Sales Floor' },
                    { id: 'SHOW-ME-002', description: "To show a second item, the first must be returned to the display case and locked before the second is removed.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Sales Floor' },
                    { id: 'SHOW-ME-003', description: "The 'Zone Defense' Rule: A single staff member is never alone on the sales floor with two or more customers. If necessary, lock the main door until another staff member is available.", priority: 'High', riskLevel: 'High', proof: 'Training Record', location: 'Sales Floor' },
                    { id: 'SHOW-ME-004', description: "Verbally greet every customer who enters, making eye contact. This signals to potential thieves that they have been seen.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Sales Floor' },
                    { id: 'SHOW-ME-005', description: "Never leave a customer unattended with high-value merchandise.", priority: 'High', riskLevel: 'High', proof: 'Policy Adherence', location: 'Sales Floor' }
                ]
            },
            {
                title: "🧑‍💼 Retail Sales Associate Performance Review",
                department: "Management",
                frequency: "Quarterly",
                role: "Store Manager",
                summary: "A structured checklist to review sales staff performance, covering sales targets, customer service quality, and product knowledge.",
                tasks: [
                    { id: 'RETAIL-PERF-01', description: "Review sales data for the associate, including total sales, conversion rate, and average transaction value.", priority: 'High', riskLevel: 'Medium', proof: 'Sales Report', location: 'Office' },
                    { id: 'RETAIL-PERF-02', description: "Review customer feedback scores or comments related to the associate.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback System', location: 'Office' },
                    { id: 'RETAIL-PERF-03', description: "Assess product knowledge through a brief quiz or role-play scenario.", priority: 'Medium', riskLevel: 'Low', proof: 'Assessment Score', location: 'Office' },
                    { id: 'RETAIL-PERF-04', description: "Set clear and measurable goals for the next quarter.", priority: 'High', riskLevel: 'Medium', proof: 'Goal Sheet', location: 'Office' },
                    { id: 'RETAIL-PERF-05', description: "Discuss adherence to security and inventory handling protocols.", priority: 'High', riskLevel: 'High', proof: 'Performance Notes', location: 'Office' }
                ]
            },
            {
                title: "🌟 Customer Experience Audit",
                department: "Management",
                frequency: "Monthly",
                role: "Store Manager",
                summary: "An audit checklist to evaluate the end-to-end customer journey in the store, from initial greeting to post-sale follow-up.",
                tasks: [
                    { id: 'RETAIL-CUSTEX-01', description: "Observe and rate the customer greeting for warmth and professionalism.", priority: 'High', riskLevel: 'Medium', proof: 'Observation Scorecard', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-02', description: "Assess the quality of the sales consultation: Were needs properly understood? Was the presentation of products compelling?", priority: 'High', riskLevel: 'High', proof: 'Observation Scorecard', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-03', description: "Check the cleanliness and presentation of the sales floor, displays, and checkout counter.", priority: 'High', riskLevel: 'Medium', proof: 'Store Audit Form', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-004', description: "Review if post-sale follow-up procedures (e.g., thank you notes, care instructions) are being followed.", priority: 'Medium', riskLevel: 'Low', proof: 'Follow-up Log', location: 'Office' },
                    { id: 'RETAIL-CUSTEX-005', description: "Ensure the store ambiance (lighting, music, scent) aligns with the luxury brand image.", priority: 'High', riskLevel: 'Low', proof: 'Ambiance Check Log', location: 'Sales Floor' }
                ]
            },
            {
                title: "📅 Weekly Sales & Revenue Meeting Agenda",
                department: "Management",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "A structured agenda to run effective weekly sales meetings that focus on analyzing data, recognizing performance, and planning for the week ahead.",
                tasks: [
                    { id: 'RETAIL-MEETING-01', description: "Review previous week's sales performance against target.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-02', description: "Recognize top-performing staff for sales, customer feedback, or teamwork.", priority: 'Medium', riskLevel: 'Low', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-03', description: "Discuss key product movers and slow-moving inventory.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Report', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-04', description: "Set sales focus and promotional strategy for the upcoming week.", priority: 'High', riskLevel: 'Medium', proof: 'Action Plan', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-05', description: "Share any security updates or loss prevention reminders.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Meeting Room' }
                ]
            },
            {
                title: "🎨 Visual Merchandising Standards Audit",
                department: "Management/VM",
                frequency: "Weekly",
                role: "Store Manager/VM Lead",
                summary: "Ensures the store is visually appealing and aligns with brand standards. Covers window displays, mannequin styling, and in-store signage.",
                tasks: [
                    { id: 'VM-001', description: "Ensure window displays are clean, well-lit, and feature current promotions or seasonal themes.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Storefront' },
                    { id: 'VM-002', description: "Check that all mannequins are styled according to the current season's lookbook and are in good condition.", priority: 'Medium', riskLevel: 'Low', proof: 'Photo', location: 'Sales Floor' },
                    { id: 'VM-003', description: "Verify that all promotional signage and price tickets are accurate, correctly placed, and not damaged.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'VM-004', description: "Ensure feature tables and focus areas are styled to highlight key products and tell a cohesive story.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Sales Floor' },
                    { id: 'VM-005', description: "Walk the store to identify and fix any messy or disorganized displays, ensuring size-blocking and folding standards are met.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' }
                ]
            },
            {
                title: "📦 High-Value Item Return Verification",
                department: "Operations/Loss Prevention",
                frequency: "Per High-Value Return",
                role: "Store Manager",
                summary: "A fraud-prevention protocol to stop customers from returning counterfeit or old goods for a full refund.",
                tasks: [
                    { id: 'HVIR-001', description: "For any return over a set value (e.g., $200), the item's SKU/barcode must be scanned.", priority: 'High', riskLevel: 'High', proof: 'POS Scan Log', location: 'Cash Counter' },
                    { id: 'HVIR-002', description: "The item must be visually verified against the product image in the POS or inventory system by a manager.", priority: 'High', riskLevel: 'High', proof: 'Manager Sign-off', location: 'Cash Counter' },
                    { id: 'HVIR-003', description: "Check the item for signs of wear, use, or tampering that would disqualify it from being returned.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Cash Counter' },
                    { id: 'HVIR-004', description: "For electronics, verify the serial number of the returned item matches the serial number on the original sales receipt.", priority: 'High', riskLevel: 'High', proof: 'Serial Number Match Log', location: 'Cash Counter' },
                    { id: 'HVIR-005', description: "For high-value goods, consider a policy of issuing credit pending expert verification rather than an immediate refund.", priority: 'High', riskLevel: 'High', proof: 'Policy Document', location: 'Management' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Monthly",
                role: "Store Manager",
                summary: "A proactive checklist for preventing and managing pest infestations to maintain a pristine luxury retail environment.",
                tasks: [
                    { id: 'PEST-LUX-001', description: "Inspect stock rooms, staff areas, and pantry for any signs of pest activity.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Back of House' },
                    { id: 'PEST-LUX-002', description: "Ensure no food or drinks are left in staff lockers or back rooms overnight.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Back of House' },
                    { id: 'PEST-LUX-003', description: "Check that exterior doors have proper seals and are not left propped open.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Perimeter' },
                    { id: 'PEST-LUX-004', description: "Review reports from the pest control vendor and action any recommendations.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Review', location: 'Office' },
                    { id: 'PEST-LUX-005', description: "Ensure daily trash removal schedules are strictly followed.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Waste Area' }
                ]
            }
        ]
    },
    {
        id: 'apparel_fashion_retail_pack',
        title: "Apparel & Fashion Store Operations",
        priceUSD: 79.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "For apparel store managers. A toolkit focused on visual merchandising, inventory management, and loss prevention.",
        icon: <Shirt className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent" as const,
        sampleItems: [
            "Implement a 'Fitting Room Security & Monitoring' protocol.",
            "Standardize 'Visual Merchandising' to maintain brand image.",
            "Master 'Inventory Receiving & Stocking' to prevent errors.",
            "NEW: Includes a 'Weekly Sales Meeting' agenda and a 'Customer Experience Audit'."
        ],
        globalStandards: {
            title: "Aligned with Fashion Retail Best Practices",
            standards: [
                { name: "Loss Prevention", description: "Protocols for managing fitting rooms, tagging, and high-theft items." },
                { name: "Visual Merchandising", description: "Guidelines for creating compelling displays and maintaining a consistent brand image." },
                { name: "Inventory Management", description: "Best practices for handling apparel inventory, including receiving, returns, and cycle counting." }
            ]
        },
        checklists: [
             {
                title: "🎨 Visual Merchandising Standards Audit",
                department: "Management/VM",
                frequency: "Weekly",
                role: "Store Manager/VM Lead",
                summary: "Ensures the store is visually appealing and aligns with brand standards. Covers window displays, mannequin styling, and in-store signage.",
                tasks: [
                    { id: 'VM-001', description: "Ensure window displays are clean, well-lit, and feature current promotions or seasonal themes.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Storefront' },
                    { id: 'VM-002', description: "Check that all mannequins are styled according to the current season's lookbook and are in good condition.", priority: 'Medium', riskLevel: 'Low', proof: 'Photo', location: 'Sales Floor' },
                    { id: 'VM-003', description: "Verify that all promotional signage and price tickets are accurate, correctly placed, and not damaged.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'VM-004', description: "Ensure feature tables and focus areas are styled to highlight key products and tell a cohesive story.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Sales Floor' },
                    { id: 'VM-005', description: "Walk the store to identify and fix any messy or disorganized displays, ensuring size-blocking and folding standards are met.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' }
                ]
            },
            {
                title: "🧑‍💼 Retail Sales Associate Performance Review",
                department: "Management",
                frequency: "Quarterly",
                role: "Store Manager",
                summary: "A structured checklist to review sales staff performance, covering sales targets, customer service quality, and product knowledge.",
                tasks: [
                    { id: 'RETAIL-PERF-01', description: "Review sales data for the associate, including total sales, conversion rate, and average transaction value.", priority: 'High', riskLevel: 'Medium', proof: 'Sales Report', location: 'Office' },
                    { id: 'RETAIL-PERF-02', description: "Review customer feedback scores or comments related to the associate.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback System', location: 'Office' },
                    { id: 'RETAIL-PERF-03', description: "Assess product knowledge through a brief quiz or role-play scenario.", priority: 'Medium', riskLevel: 'Low', proof: 'Assessment Score', location: 'Office' },
                    { id: 'RETAIL-PERF-04', description: "Set clear and measurable goals for the next quarter.", priority: 'High', riskLevel: 'Medium', proof: 'Goal Sheet', location: 'Office' },
                    { id: 'RETAIL-PERF-05', description: "Discuss adherence to store policies and procedures.", priority: 'High', riskLevel: 'Medium', proof: 'Performance Notes', location: 'Office' }
                ]
            },
            {
                title: "🌟 Customer Experience Audit",
                department: "Management",
                frequency: "Monthly",
                role: "Store Manager",
                summary: "An audit checklist to evaluate the end-to-end customer journey in the store, from initial greeting to post-sale follow-up.",
                tasks: [
                    { id: 'RETAIL-CUSTEX-01', description: "Observe and rate the customer greeting for warmth and professionalism.", priority: 'High', riskLevel: 'Medium', proof: 'Observation Scorecard', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-02', description: "Assess the quality of the sales consultation: Were needs properly understood? Was the presentation of products compelling?", priority: 'High', riskLevel: 'High', proof: 'Observation Scorecard', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-03', description: "Check the cleanliness and presentation of the sales floor, displays, and checkout counter.", priority: 'High', riskLevel: 'Medium', proof: 'Store Audit Form', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-04', description: "Review if post-sale follow-up procedures (e.g., thank you notes, care instructions) are being followed.", priority: 'Medium', riskLevel: 'Low', proof: 'Follow-up Log', location: 'Office' },
                    { id: 'RETAIL-CUSTEX-005', description: "Check fitting room wait times and cleanliness during peak hours.", priority: 'High', riskLevel: 'Medium', proof: 'Observation Log', location: 'Fitting Rooms' }
                ]
            },
            {
                title: "📅 Weekly Sales & Revenue Meeting Agenda",
                department: "Management",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "A structured agenda to run effective weekly sales meetings that focus on analyzing data, recognizing performance, and planning for the week ahead.",
                tasks: [
                    { id: 'RETAIL-MEETING-01', description: "Review previous week's sales performance against target.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-02', description: "Recognize top-performing staff for sales, customer feedback, or teamwork.", priority: 'Medium', riskLevel: 'Low', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-03', description: "Discuss key product movers and slow-moving inventory.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Report', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-04', description: "Set sales focus and promotional strategy for the upcoming week.", priority: 'High', riskLevel: 'Medium', proof: 'Action Plan', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-05', description: "Review upcoming visual merchandising changes.", priority: 'Medium', riskLevel: 'Low', proof: 'VM Plan', location: 'Meeting Room' }
                ]
            },
             {
                title: "📦 High-Value Item Return Verification",
                department: "Operations/Loss Prevention",
                frequency: "Per High-Value Return",
                role: "Store Manager",
                summary: "A fraud-prevention protocol to stop customers from returning counterfeit or old goods for a full refund.",
                tasks: [
                    { id: 'HVIR-001', description: "For any return over a set value (e.g., $200), the item's SKU/barcode must be scanned.", priority: 'High', riskLevel: 'High', proof: 'POS Scan Log', location: 'Cash Counter' },
                    { id: 'HVIR-002', description: "The item must be visually verified against the product image in the POS or inventory system by a manager.", priority: 'High', riskLevel: 'High', proof: 'Manager Sign-off', location: 'Cash Counter' },
                    { id: 'HVIR-003', description: "Check the item for signs of wear, use, or tampering that would disqualify it from being returned.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Cash Counter' },
                    { id: 'HVIR-004', description: "For electronics, verify the serial number of the returned item matches the serial number on the original sales receipt.", priority: 'High', riskLevel: 'High', proof: 'Serial Number Match Log', location: 'Cash Counter' },
                    { id: 'HVIR-005', description: "Repackage and return the item to the sales floor or quarantine area as per policy.", priority: 'Medium', riskLevel: 'Medium', proof: 'Restocking Log', location: 'Back Room' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Monthly",
                role: "Store Manager",
                summary: "A proactive checklist for preventing and managing pest infestations to protect apparel and maintain store hygiene.",
                tasks: [
                    { id: 'PEST-APP-001', description: "Inspect stock rooms, fitting rooms, and staff areas for signs of pests (e.g., moths, silverfish).", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Back of House / Sales Floor' },
                    { id: 'PEST-APP-002', description: "Ensure all returned garments are inspected before being put back on the floor.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Fitting Rooms / POS' },
                    { id: 'PEST-APP-003', description: "Keep stock rooms clean, dry, and free of clutter where pests can hide.", priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Log', location: 'Stock Room' },
                    { id: 'PEST-APP-004', description: "Review pest control vendor reports and ensure any issues are promptly addressed.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Tracker', location: 'Office' },
                    { id: 'PEST-APP-005', description: "Ensure staff do not leave food or unsealed drinks in non-designated areas.", priority: 'High', riskLevel: 'Medium', proof: 'Policy Reminder / Observation', location: 'Back of House' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'electronics_store_pack',
        title: "Electronics & Gadget Store Operations",
        priceUSD: 79.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "For electronics retailers. Manage high-value inventory, prevent fraud, and standardize technical customer service.",
        icon: <Computer className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        sampleItems: [
            "NEW: Implement a 'Customer Experience Audit' and 'Sales Performance Review' for staff.",
            "Implement a 'Serial Number Tracking' protocol from receiving to sale.",
            "Standardize the 'Open-Box & Demo Unit' management process.",
            "Master the 'High-Value Return & Counterfeit Verification' checklist."
        ],
        globalStandards: {
            title: "Aligned with Electronics Retail Standards",
            standards: [
                { name: "Loss Prevention", description: "Protocols for serial number tracking, high-value inventory control, and return fraud prevention." },
                { name: "Customer Service", description: "Best practices for technical support triage, product demonstrations, and managing open-box items." },
                { name: "Inventory Management", description: "Procedures for handling fragile, high-value electronics and managing demo units." }
            ]
        },
        checklists: [
            {
                title: "📦 High-Value Item Return Verification",
                department: "Operations/Loss Prevention",
                frequency: "Per High-Value Return",
                role: "Store Manager",
                summary: "A fraud-prevention protocol to stop customers from returning counterfeit or old goods for a full refund.",
                tasks: [
                    { id: 'HVIR-001', description: "For any return over a set value (e.g., $200), the item's SKU/barcode must be scanned.", priority: 'High', riskLevel: 'High', proof: 'POS Scan Log', location: 'Cash Counter' },
                    { id: 'HVIR-002', description: "The item must be visually verified against the product image in the POS or inventory system by a manager.", priority: 'High', riskLevel: 'High', proof: 'Manager Sign-off', location: 'Cash Counter' },
                    { id: 'HVIR-003', description: "Check the item for signs of wear, use, or tampering that would disqualify it from being returned.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Cash Counter' },
                    { id: 'HVIR-004', description: "For electronics, verify the serial number of the returned item matches the serial number on the original sales receipt.", priority: 'High', riskLevel: 'High', proof: 'Serial Number Match Log', location: 'Cash Counter' },
                    { id: 'HVIR-005', description: "Power on the device to ensure it is functional before accepting the return.", priority: 'High', riskLevel: 'High', proof: 'Functional Test', location: 'Cash Counter' }
                ]
            },
            {
                title: "🧑‍💼 Retail Sales Associate Performance Review",
                department: "Management",
                frequency: "Quarterly",
                role: "Store Manager",
                summary: "A structured checklist to review sales staff performance, covering sales targets, customer service quality, and product knowledge.",
                tasks: [
                    { id: 'RETAIL-PERF-01', description: "Review sales data for the associate, including total sales, conversion rate, and average transaction value.", priority: 'High', riskLevel: 'Medium', proof: 'Sales Report', location: 'Office' },
                    { id: 'RETAIL-PERF-02', description: "Review customer feedback scores or comments related to the associate.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback System', location: 'Office' },
                    { id: 'RETAIL-PERF-03', description: "Assess product knowledge through a brief quiz or role-play scenario.", priority: 'Medium', riskLevel: 'Low', proof: 'Assessment Score', location: 'Office' },
                    { id: 'RETAIL-PERF-04', description: "Set clear and measurable goals for the next quarter.", priority: 'High', riskLevel: 'Medium', proof: 'Goal Sheet', location: 'Office' },
                    { id: 'RETAIL-PERF-05', description: "Evaluate upselling and cross-selling performance (e.g., attachment rate of accessories/warranties).", priority: 'High', riskLevel: 'Medium', proof: 'Sales Data', location: 'Office' }
                ]
            },
            {
                title: "🌟 Customer Experience Audit",
                department: "Management",
                frequency: "Monthly",
                role: "Store Manager",
                summary: "An audit checklist to evaluate the end-to-end customer journey in the store, from initial greeting to post-sale follow-up.",
                tasks: [
                    { id: 'RETAIL-CUSTEX-01', description: "Observe and rate the customer greeting for warmth and professionalism.", priority: 'High', riskLevel: 'Medium', proof: 'Observation Scorecard', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-02', description: "Assess the quality of the sales consultation: Were needs properly understood? Was the presentation of products compelling?", priority: 'High', riskLevel: 'High', proof: 'Observation Scorecard', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-03', description: "Check the cleanliness and presentation of the sales floor, displays, and checkout counter.", priority: 'High', riskLevel: 'Medium', proof: 'Store Audit Form', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-04', description: "Review if post-sale follow-up procedures (e.g., thank you notes, care instructions) are being followed.", priority: 'Medium', riskLevel: 'Low', proof: 'Follow-up Log', location: 'Office' },
                    { id: 'RETAIL-CUSTEX-005', description: "Evaluate the technical support/service desk experience for efficiency and problem resolution.", priority: 'High', riskLevel: 'High', proof: 'Customer Survey', location: 'Service Desk' }
                ]
            },
            {
                title: "📅 Weekly Sales & Revenue Meeting Agenda",
                department: "Management",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "A structured agenda to run effective weekly sales meetings that focus on analyzing data, recognizing performance, and planning for the week ahead.",
                tasks: [
                    { id: 'RETAIL-MEETING-01', description: "Review previous week's sales performance against target.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-02', description: "Recognize top-performing staff for sales, customer feedback, or teamwork.", priority: 'Medium', riskLevel: 'Low', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-03', description: "Discuss key product movers and slow-moving inventory.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Report', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-04', description: "Set sales focus and promotional strategy for the upcoming week.", priority: 'High', riskLevel: 'Medium', proof: 'Action Plan', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-05', description: "Provide updates on new products or technologies.", priority: 'High', riskLevel: 'Medium', proof: 'Training Material', location: 'Meeting Room' }
                ]
            },
             {
                title: "🎨 Visual Merchandising Standards Audit",
                department: "Management/VM",
                frequency: "Weekly",
                role: "Store Manager/VM Lead",
                summary: "Ensures the store is visually appealing and aligns with brand standards. Covers window displays, mannequin styling, and in-store signage.",
                tasks: [
                    { id: 'VM-001', description: "Ensure window displays are clean, well-lit, and feature current promotions or seasonal themes.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Storefront' },
                    { id: 'VM-002', description: "Check that all mannequins are styled according to the current season's lookbook and are in good condition.", priority: 'Medium', riskLevel: 'Low', proof: 'Photo', location: 'Sales Floor' },
                    { id: 'VM-003', description: "Verify that all promotional signage and price tickets are accurate, correctly placed, and not damaged.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'VM-004', description: "Ensure feature tables and focus areas are styled to highlight key products and tell a cohesive story.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Sales Floor' },
                    { id: 'VM-005', description: "Walk the store to identify and fix any messy or disorganized displays, ensuring size-blocking and folding standards are met.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Monthly",
                role: "Store Manager",
                summary: "A proactive checklist for preventing and managing pest infestations to protect sensitive electronics and maintain store hygiene.",
                tasks: [
                    { id: 'PEST-ELEC-001', description: "Inspect stock rooms and service areas for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Back of House' },
                    { id: 'PEST-ELEC-002', description: "Ensure no food or drink is consumed or stored near product inventory or repair areas.", priority: 'High', riskLevel: 'High', proof: 'Policy Reminder / Observation', location: 'All Areas' },
                    { id: 'PEST-ELEC-003', description: "Keep storage areas clean, dry, and free of cardboard clutter where pests can nest.", priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Log', location: 'Stock Room' },
                    { id: 'PEST-ELEC-004', description: "Check that exterior doors and cable entry points are properly sealed.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Perimeter' },
                    { id: 'PEST-ELEC-005', description: "Review pest control vendor reports and ensure recommendations are implemented.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report Tracker', location: 'Office' }
                ]
            },
             {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'furniture_home_goods_pack',
        title: "Furniture & Home Goods Store Operations",
        priceUSD: 79.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "For furniture retailers. A toolkit to manage large inventory, coordinate delivery & assembly, and handle damaged goods.",
        icon: <Landmark className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        sampleItems: [
            "NEW: Implement a 'Customer Experience Audit' and 'Sales Performance Review' for staff.",
            "Implement a 'Damaged Goods & Showpiece' management protocol.",
            "Standardize the 'Home Delivery & Assembly Scheduling' process.",
            "NEW: Includes a 'Visual Merchandising Standards Audit' for store layout."
        ],
        globalStandards: {
            title: "Aligned with Large-Format Retail Standards",
            standards: [
                { name: "Inventory Logistics", description: "Best practices for managing bulky inventory, coordinating home delivery, and handling assembly services." },
                { name: "Damage Control", description: "Protocols for managing damaged items, processing claims, and managing showpiece/floor models." },
                { name: "Customer Management", description: "Procedures for handling custom orders, managing delivery expectations, and post-sale support." }
            ]
        },
        checklists: [
             {
                title: "🎨 Visual Merchandising Standards Audit",
                department: "Management/VM",
                frequency: "Weekly",
                role: "Store Manager/VM Lead",
                summary: "Ensures the store is visually appealing and aligns with brand standards. Covers window displays, mannequin styling, and in-store signage.",
                tasks: [
                    { id: 'VM-001', description: "Ensure window displays are clean, well-lit, and feature current promotions or seasonal themes.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Storefront' },
                    { id: 'VM-002', description: "Check that all mannequins are styled according to the current season's lookbook and are in good condition.", priority: 'Medium', riskLevel: 'Low', proof: 'Photo', location: 'Sales Floor' },
                    { id: 'VM-003', description: "Verify that all promotional signage and price tickets are accurate, correctly placed, and not damaged.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'VM-004', description: "Ensure feature tables and focus areas are styled to highlight key products and tell a cohesive story.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Sales Floor' },
                    { id: 'VM-005', description: "Walk the store to identify and fix any messy or disorganized displays, ensuring size-blocking and folding standards are met.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' }
                ]
            },
            {
                title: "🧑‍💼 Retail Sales Associate Performance Review",
                department: "Management",
                frequency: "Quarterly",
                role: "Store Manager",
                summary: "A structured checklist to review sales staff performance, covering sales targets, customer service quality, and product knowledge.",
                tasks: [
                    { id: 'RETAIL-PERF-01', description: "Review sales data for the associate, including total sales, conversion rate, and average transaction value.", priority: 'High', riskLevel: 'Medium', proof: 'Sales Report', location: 'Office' },
                    { id: 'RETAIL-PERF-02', description: "Review customer feedback scores or comments related to the associate.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback System', location: 'Office' },
                    { id: 'RETAIL-PERF-03', description: "Assess product knowledge through a brief quiz or role-play scenario.", priority: 'Medium', riskLevel: 'Low', proof: 'Assessment Score', location: 'Office' },
                    { id: 'RETAIL-PERF-04', description: "Set clear and measurable goals for the next quarter.", priority: 'High', riskLevel: 'Medium', proof: 'Goal Sheet', location: 'Office' },
                    { id: 'RETAIL-PERF-05', description: "Evaluate performance on lead generation for design services or custom orders.", priority: 'High', riskLevel: 'Medium', proof: 'CRM Data', location: 'Office' }
                ]
            },
            {
                title: "🌟 Customer Experience Audit",
                department: "Management",
                frequency: "Monthly",
                role: "Store Manager",
                summary: "An audit checklist to evaluate the end-to-end customer journey in the store, from initial greeting to post-sale follow-up.",
                tasks: [
                    { id: 'RETAIL-CUSTEX-01', description: "Observe and rate the customer greeting for warmth and professionalism.", priority: 'High', riskLevel: 'Medium', proof: 'Observation Scorecard', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-02', description: "Assess the quality of the sales consultation: Were needs properly understood? Was the presentation of products compelling?", priority: 'High', riskLevel: 'High', proof: 'Observation Scorecard', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-03', description: "Check the cleanliness and presentation of the sales floor, displays, and checkout counter.", priority: 'High', riskLevel: 'Medium', proof: 'Store Audit Form', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-04', description: "Review if post-sale follow-up procedures (e.g., thank you notes, care instructions) are being followed.", priority: 'Medium', riskLevel: 'Low', proof: 'Follow-up Log', location: 'Office' },
                    { id: 'RETAIL-CUSTEX-005', description: "Review the clarity and management of delivery and assembly scheduling.", priority: 'High', riskLevel: 'High', proof: 'Customer Survey', location: 'Office' }
                ]
            },
            {
                title: "📅 Weekly Sales & Revenue Meeting Agenda",
                department: "Management",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "A structured agenda to run effective weekly sales meetings that focus on analyzing data, recognizing performance, and planning for the week ahead.",
                tasks: [
                    { id: 'RETAIL-MEETING-01', description: "Review previous week's sales performance against target.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-02', description: "Recognize top-performing staff for sales, customer feedback, or teamwork.", priority: 'Medium', riskLevel: 'Low', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-03', description: "Discuss key product movers and slow-moving inventory.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Report', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-04', description: "Set sales focus and promotional strategy for the upcoming week.", priority: 'High', riskLevel: 'Medium', proof: 'Action Plan', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-05', description: "Review delivery and assembly schedules and capacity for the upcoming week.", priority: 'High', riskLevel: 'Medium', proof: 'Logistics Report', location: 'Meeting Room' }
                ]
            },
             {
                title: "📦 High-Value Item Return Verification",
                department: "Operations/Loss Prevention",
                frequency: "Per High-Value Return",
                role: "Store Manager",
                summary: "A fraud-prevention protocol to stop customers from returning counterfeit or old goods for a full refund.",
                tasks: [
                    { id: 'HVIR-001', description: "For any return over a set value (e.g., $200), the item's SKU/barcode must be scanned.", priority: 'High', riskLevel: 'High', proof: 'POS Scan Log', location: 'Cash Counter' },
                    { id: 'HVIR-002', description: "The item must be visually verified against the product image in the POS or inventory system by a manager.", priority: 'High', riskLevel: 'High', proof: 'Manager Sign-off', location: 'Cash Counter' },
                    { id: 'HVIR-003', description: "Check the item for signs of wear, use, or tampering that would disqualify it from being returned.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Cash Counter' },
                    { id: 'HVIR-004', description: "For electronics, verify the serial number of the returned item matches the serial number on the original sales receipt.", priority: 'High', riskLevel: 'High', proof: 'Serial Number Match Log', location: 'Cash Counter' },
                    { id: 'HVIR-005', description: "Ensure returned items are processed for restock or quarantine based on condition.", priority: 'Medium', riskLevel: 'Medium', proof: 'Return Log', location: 'Back Room' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Monthly",
                role: "Store Manager",
                summary: "A proactive checklist for preventing and managing pest infestations to protect valuable stock like wood furniture and upholstery.",
                tasks: [
                    { id: 'PEST-FURN-001', description: "Inspect warehouse and stockroom areas, especially dark corners, for signs of pests like termites or rodents.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Warehouse/Stock Room' },
                    { id: 'PEST-FURN-002', description: "Ensure all incoming shipments of wood furniture are inspected for signs of wood-boring insects upon arrival.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Bay' },
                    { id: 'PEST-FURN-003', description: "Keep storage areas clean, dry, and well-ventilated to discourage pests.", priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Log', location: 'Warehouse' },
                    { id: 'PEST-FURN-004', description: "Review reports from a professional pest control service and ensure all actions are taken.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report', location: 'Office' },
                    { id: 'PEST-FURN-005', description: "Prohibit food and drink in inventory storage areas.", priority: 'High', riskLevel: 'Medium', proof: 'Policy Signage/Observation', location: 'Warehouse' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'supermarket_grocery_pack',
        title: "Supermarket & Grocery Operations",
        priceUSD: 79.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "For grocery store managers. A toolkit focused on fresh produce management, cold chain integrity, and high-volume checkout efficiency.",
        icon: <ShoppingBasket className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        sampleItems: [
            "NEW: Includes a 'New Site Feasibility Study' for expansion planning.",
            "Implement a 'Fresh Produce Quality & Culling' daily checklist.",
            "Standardize 'Cold Chain & Refrigeration Temperature' logs (HACCP).",
            "Master 'Spill Response & Slip Prevention' for customer safety."
        ],
        globalStandards: {
            title: "Aligned with Grocery & Food Retail Standards",
            standards: [
                { name: "Food Safety", description: "HACCP principles for temperature control, fresh produce handling, and sanitation." },
                { name: "Inventory Management", description: "First-In-First-Out (FIFO) rotation, managing perishables, and reducing spoilage." },
                { name: "Safety", description: "Protocols for slip prevention, spill response, and customer safety in a high-traffic environment." }
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
                title: "🧑‍💼 Retail Sales Associate Performance Review",
                department: "Management",
                frequency: "Quarterly",
                role: "Store Manager",
                summary: "A structured checklist to review sales staff performance, covering sales targets, customer service quality, and product knowledge.",
                tasks: [
                    { id: 'RETAIL-PERF-01', description: "Review sales data for the associate, including total sales, conversion rate, and average transaction value.", priority: 'High', riskLevel: 'Medium', proof: 'Sales Report', location: 'Office' },
                    { id: 'RETAIL-PERF-02', description: "Review customer feedback scores or comments related to the associate.", priority: 'High', riskLevel: 'Medium', proof: 'Feedback System', location: 'Office' },
                    { id: 'RETAIL-PERF-03', description: "Assess product knowledge through a brief quiz or role-play scenario.", priority: 'Medium', riskLevel: 'Low', proof: 'Assessment Score', location: 'Office' },
                    { id: 'RETAIL-PERF-04', description: "Set clear and measurable goals for the next quarter.", priority: 'High', riskLevel: 'Medium', proof: 'Goal Sheet', location: 'Office' },
                    { id: 'RETAIL-PERF-05', description: "Evaluate checkout speed and accuracy.", priority: 'High', riskLevel: 'Medium', proof: 'POS Data', location: 'Office' }
                ]
            },
            {
                title: "🌟 Customer Experience Audit",
                department: "Management",
                frequency: "Monthly",
                role: "Store Manager",
                summary: "An audit checklist to evaluate the end-to-end customer journey in the store, from initial greeting to post-sale follow-up.",
                tasks: [
                    { id: 'RETAIL-CUSTEX-01', description: "Observe and rate the customer greeting for warmth and professionalism.", priority: 'High', riskLevel: 'Medium', proof: 'Observation Scorecard', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-02', description: "Assess the quality of the sales consultation: Were needs properly understood? Was the presentation of products compelling?", priority: 'High', riskLevel: 'High', proof: 'Observation Scorecard', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-03', description: "Check the cleanliness and presentation of the sales floor, displays, and checkout counter.", priority: 'High', riskLevel: 'Medium', proof: 'Store Audit Form', location: 'Sales Floor' },
                    { id: 'RETAIL-CUSTEX-04', description: "Review if post-sale follow-up procedures (e.g., thank you notes, care instructions) are being followed.", priority: 'Medium', riskLevel: 'Low', proof: 'Follow-up Log', location: 'Office' },
                    { id: 'RETAIL-CUSTEX-005', description: "Monitor queue lengths at checkout during peak hours.", priority: 'High', riskLevel: 'Medium', proof: 'Observation Log', location: 'Checkout Area' }
                ]
            },
            {
                title: "📅 Weekly Sales & Revenue Meeting Agenda",
                department: "Management",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "A structured agenda to run effective weekly sales meetings that focus on analyzing data, recognizing performance, and planning for the week ahead.",
                tasks: [
                    { id: 'RETAIL-MEETING-01', description: "Review previous week's sales performance against target.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-02', description: "Recognize top-performing staff for sales, customer feedback, or teamwork.", priority: 'Medium', riskLevel: 'Low', proof: 'Meeting Agenda', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-03', description: "Discuss key product movers and slow-moving inventory.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Report', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-04', description: "Set sales focus and promotional strategy for the upcoming week.", priority: 'High', riskLevel: 'Medium', proof: 'Action Plan', location: 'Meeting Room' },
                    { id: 'RETAIL-MEETING-05', description: "Review stock levels of key items and plan for reordering.", priority: 'High', riskLevel: 'High', proof: 'Inventory System', location: 'Meeting Room' }
                ]
            },
             {
                title: "📦 High-Value Item Return Verification",
                department: "Operations/Loss Prevention",
                frequency: "Per High-Value Return",
                role: "Store Manager",
                summary: "A fraud-prevention protocol to stop customers from returning counterfeit or old goods for a full refund.",
                tasks: [
                    { id: 'HVIR-001', description: "For any return over a set value (e.g., $200), the item's SKU/barcode must be scanned.", priority: 'High', riskLevel: 'High', proof: 'POS Scan Log', location: 'Cash Counter' },
                    { id: 'HVIR-002', description: "The item must be visually verified against the product image in the POS or inventory system by a manager.", priority: 'High', riskLevel: 'High', proof: 'Manager Sign-off', location: 'Cash Counter' },
                    { id: 'HVIR-003', description: "Check the item for signs of wear, use, or tampering that would disqualify it from being returned.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Cash Counter' },
                    { id: 'HVIR-004', description: "For electronics, verify the serial number of the returned item matches the serial number on the original sales receipt.", priority: 'High', riskLevel: 'High', proof: 'Serial Number Match Log', location: 'Cash Counter' },
                    { id: 'HVIR-005', description: "Check for expiry dates on returned food items and handle as per policy.", priority: 'High', riskLevel: 'High', proof: 'Date Check', location: 'Cash Counter' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Food Safety",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "A critical checklist to prevent pest infestations in a grocery environment, ensuring food safety and compliance.",
                tasks: [
                    { id: 'PEST-GROC-001', description: "Inspect dry goods aisles, bakeries, and warehouses for any signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Areas' },
                    { id: 'PEST-GROC-002', description: "Ensure all bulk food bins are sealed and cleaned regularly.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Sales Floor' },
                    { id: 'PEST-GROC-003', description: "Maintain a clean and tidy waste disposal area, with all bins tightly lidded.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Waste Area' },
                    { id: 'PEST-GROC-004', description: "Check for and seal any gaps in walls, floors, or around loading docks that could be entry points.", priority: 'High', riskLevel: 'Medium', proof: 'Structural Inspection Log', location: 'Perimeter' },
                    { id: 'PEST-GROC-005', description: "Review professional pest control service reports and ensure all recommendations are implemented.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'audiology_clinic_pack',
        title: "Audiology & Hearing Aid Clinic Checklist",
        priceUSD: 89.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Healthcare",
        description: "For audiologists and clinic owners. A toolkit to standardize patient care, equipment maintenance, and clinic operations.",
        icon: <Ear className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Standardize the 'Audiometry &amp; Diagnostic Test' procedure.",
            "Implement a 'Hearing Aid Trial &amp; Fitting' protocol.",
            "Master 'Equipment Calibration &amp; Maintenance' for audiometers and tympanometers.",
            "Includes 'Patient Counseling' and 'Follow-up Scheduling' checklists."
        ],
        globalStandards: {
            title: "Aligned with Audiology Practice Standards",
            standards: [
                { name: "Clinical Practice", description: "Guidelines from ASHA and AAA for diagnostic testing and hearing aid fitting." },
                { name: "Equipment & Calibration", description: "ANSI standards for audiometer calibration and maintenance." },
                { name: "Patient Care", description: "Protocols for patient counseling, documentation, and follow-up care." }
            ]
        },
        checklists: [
            {
                title: "Placeholder Checklist 1",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC1-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 2",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC2-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 3",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC3-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'salon_wellness_pack',
        title: "Salon & Wellness Operations",
        priceUSD: 79.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Wellness",
        description: "For salon, spa, and wellness center owners. A toolkit to ensure a serene, hygienic, and luxurious guest experience.",
        icon: <Dumbbell className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent",
        sampleItems: [
            "Implement a 'Therapy Room &amp; Tool Sterilization' protocol.",
            "Standardize 'Guest Consultation &amp; Contraindication' checks to ensure client safety.",
            "Master 'Professional Product &amp; Linen Inventory' management.",
            "Includes 'Therapist Training &amp; Performance' and 'Appointment Scheduling' checklists."
        ],
        globalStandards: {
            title: "Aligned with Global Wellness & Spa Standards",
            standards: [
                { name: "Hygiene & Sanitation", description: "Best practices for sanitation of treatment rooms, tools, and linens to prevent infections." },
                { name: "Guest Safety", description: "Protocols for client consultation, identifying contraindications, and managing adverse reactions." },
                { name: "Service Quality", description: "Standards for therapist training, treatment consistency, and maintaining a high-end client experience." }
            ]
        },
        checklists: [
            {
                title: "Placeholder Checklist 1",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC1-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 2",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC2-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 3",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC3-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'esg_compliance_pack',
        title: "ESG & Sustainability Compliance",
        priceUSD: 199.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Compliance",
        description: "For CCOs and Heads of ESG. A comprehensive toolkit to implement, track, and report on Environmental, Social, and Governance metrics.",
        icon: <Recycle className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent" as const,
        sampleItems: [
            "Implement an 'Energy &amp; Water Consumption Audit' checklist.",
            "Standardize 'Waste Management &amp; Recycling' protocols.",
            "NEW: Includes a 'Corporate Social Responsibility (CSR) Program Management' framework.",
            "Master 'Ethical Sourcing &amp; Vendor Audits' for your supply chain."
        ],
        globalStandards: {
            title: "Aligned with Global ESG Frameworks",
            standards: [
                { name: "Environmental", description: "ISO 14001, GHG Protocol for carbon accounting, GRI Standards for reporting." },
                { name: "Social", description: "SA8000 for social accountability, labor laws, diversity &amp; inclusion metrics." },
                { name: "Governance", description: "Anti-bribery (FCPA, UK Bribery Act), corporate governance codes, whistleblower policies." }
            ]
        },
        checklists: [
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
                title: "Placeholder Checklist 2",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC2-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 3",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC3-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'iso_compliance_pack',
        title: "ISO Compliance & Audit Checklist",
        priceUSD: 199.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Compliance",
        description: "For Heads of Quality and Management Representatives. A toolkit to prepare for and pass ISO 9001, 14001, and 45001 certification audits.",
        icon: <FileCheck className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Standardize 'Document Control &amp; Record Keeping' as per ISO standards.",
            "Implement a 'Corrective &amp; Preventive Action (CAPA)' process.",
            "Master the 'Internal Audit &amp; Management Review' cycle.",
            "NEW: Includes an 'Incident Investigation &amp; Root Cause Analysis' protocol."
        ],
        globalStandards: {
            title: "Aligned with ISO Certification Standards",
            standards: [
                { name: "ISO 9001", description: "Quality Management Systems." },
                { name: "ISO 14001", description: "Environmental Management Systems." },
                { name: "ISO 45001", description: "Occupational Health and Safety Management Systems." },
                { name: "ISO 27001", description: "Information Security Management Systems." }
            ]
        },
        checklists: [
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
                title: "Placeholder Checklist 2",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC2-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 3",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC3-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'maritime_shipping_pack',
        title: "Maritime Shipping & Port Operations",
        priceUSD: 249.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Maritime",
        description: "For port captains and shipping line managers. A high-stakes toolkit for ensuring safety, security, and efficiency in port and vessel operations.",
        icon: <Anchor className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Implement the 'ISPS Code' security protocols for port facilities and vessels.",
            "Standardize 'Vessel Mooring &amp; Berthing' operations.",
            "Master 'Cargo Loading &amp; Discharge' safety checklists.",
            "Includes 'Bunkering Operations' and 'Ballast Water Management' checklists."
        ],
        globalStandards: {
            title: "Aligned with International Maritime Standards",
            standards: [
                { name: "Safety", description: "SOLAS (Safety of Life at Sea), ISM Code (International Safety Management)." },
                { name: "Security", description: "ISPS Code (International Ship and Port Facility Security)." },
                { name: "Environmental", description: "MARPOL for pollution prevention, Ballast Water Management Convention." },
                { name: "Labor", description: "MLC (Maritime Labour Convention) for seafarer welfare." }
            ]
        },
        checklists: [
            {
                title: "Placeholder Checklist 1",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC1-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 2",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC2-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 3",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC3-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'finance_accounting_pack',
        title: "Finance & Accounting Ops Checklist",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Corporate",
        description: "For CFOs and finance controllers. A toolkit to ensure accuracy, compliance, and efficiency in financial operations.",
        icon: <DollarSign className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Standardize the 'Month-End Closing' process.",
            "Implement a robust 'Accounts Payable &amp; Vendor Payment' protocol.",
            "NEW: Includes a 'Critical Payment Authorization' protocol to prevent payroll delays and fraud."
        ],
        globalStandards: {
            title: "Aligned with Financial & Accounting Standards",
            standards: [
                { name: "Reporting", description: "GAAP (Generally Accepted Accounting Principles), IFRS (International Financial Reporting Standards)." },
                { name: "Internal Controls", description: "COSO framework, Sarbanes-Oxley (SOX) compliance for public companies." },
                { name: "Security", description: "Protocols to prevent fraud, including Business Email Compromise (BEC) and payment verification." }
            ]
        },
        checklists: [
            {
                title: "💸 Out-of-Band Payment Verification",
                department: "Finance",
                frequency: "Per Request",
                role: "Controller/Finance Manager",
                summary: "A critical anti-fraud checklist to prevent Business Email Compromise (BEC) and other scams leading to fraudulent wire transfers.",
                tasks: [
                    { id: 'PAYV-001', description: "Any email request for an urgent or non-standard wire transfer, regardless of the sender, must be verbally confirmed.", priority: 'High', riskLevel: 'High', proof: 'Call Log', location: 'Office' },
                    { id: 'PAYV-002', description: "The verbal confirmation must be made via a phone call to a known, pre-verified number, not a number listed in the email.", priority: 'High', riskLevel: 'High', proof: 'Call Log', location: 'Office' },
                    { id: 'PAYV-003', description: "Any request to change vendor bank details must be confirmed with the vendor via a video call or in-person meeting.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Office' },
                    { id: 'PAYV-004', description: "Implement a dual-approval system for all payments over a certain threshold.", priority: 'High', riskLevel: 'High', proof: 'System Log', location: 'Accounting System' },
                    { id: 'PAYV-005', description: "Regularly train finance staff on current BEC and phishing scams.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' }
                ]
            },
            {
                title: "💳 Critical Payment & Payroll Authorization Protocol",
                department: "Finance/HR",
                frequency: "Per Critical Payment",
                role: "CFO/Controller",
                summary: "Establishes a clear chain of command for time-sensitive payments like payroll to prevent delays if a primary approver is unavailable.",
                tasks: [
                    { id: 'CRIT-PAY-001', description: "For every 'primary approver' in the banking portal, a designated and pre-authorized 'secondary approver' must be configured.", priority: 'High', riskLevel: 'High', proof: 'Bank Portal Screenshot', location: 'Finance Office' },
                    { id: 'CRIT-PAY-002', description: "If the primary approver is unresponsive for more than 60 minutes during a critical payment window (e.g., payroll processing time), the protocol for activating the secondary approver is triggered.", priority: 'High', riskLevel: 'High', proof: 'Protocol Document', location: 'Finance Office' },
                    { id: 'CRIT-PAY-003', description: "Activating the secondary approver requires a notification to be sent to a designated group email (e.g., 'finance_leadership').", priority: 'Medium', riskLevel: 'Medium', proof: 'Email Log', location: 'Finance Office' },
                    { id: 'CRIT-PAY-004', description: "Conduct quarterly drills to test the secondary approver workflow.", priority: 'Medium', riskLevel: 'Medium', proof: 'Drill Log', location: 'Finance Office' },
                    { id: 'CRIT-PAY-005', description: "Review and update approver lists every six months or upon a change in role.", priority: 'High', riskLevel: 'Medium', proof: 'Review Log', location: 'Finance Office' }
                ]
            },
            {
                title: "Placeholder Checklist 3",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC3-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'agritech_pack',
        title: "Agriculture & Farm Operations",
        priceUSD: 89.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Manufacturing",
        description: "For farm managers and agronomists. A toolkit for optimizing crop management, resource usage, and harvest operations.",
        icon: <Sprout className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Implement a 'Soil Health &amp; irrigation' management checklist.",
            "Standardize 'Pest &amp; Disease Control' application logs.",
            "Master the 'Pre-Harvest &amp; Post-Harvest' handling process.",
            "Includes 'Farm Equipment Maintenance' and 'Worker Safety' checklists."
        ],
        globalStandards: {
            title: "Aligned with Agricultural Best Practices",
            standards: [
                { name: "Good Agricultural Practices (GAP)", description: "Frameworks for safe and sustainable food production." },
                { name: "Safety", description: "Worker protection standards (WPS) for pesticide handling and equipment safety." },
                { name: "Environmental", description: "Protocols for water management, soil conservation, and integrated pest management (IPM)." }
            ]
        },
        checklists: [
            {
                title: "Placeholder Checklist 1",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC1-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 2",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC2-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 3",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC3-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'cloud_kitchen_pack',
        title: "Cloud Kitchen & Food Delivery Checklist",
        priceUSD: 79.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Hospitality",
        description: "For cloud kitchen owners. A HACCP-based toolkit optimized for delivery-only food businesses, focusing on speed, safety, and packaging.",
        icon: <CloudRain className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Master 'Order to Dispatch' time with a streamlined workflow.",
            "Implement a 'Tamper-Proof Packaging &amp; Handover' protocol.",
            "Standardize 'Ingredient Batch Management' for consistency.",
            "Includes 'Rider Management' and 'Online Review Management' checklists."
        ],
        globalStandards: {
            title: "Aligned with Food Delivery & Safety Standards",
            standards: [
                { name: "Food Safety", description: "HACCP principles adapted for a delivery-first model, focusing on cook-chill-reheat cycles." },
                { name: "Delivery & Packaging", description: "Protocols for tamper-evident packaging and safe handovers to third-party delivery riders." },
                { name: "Efficiency", description: "Lean principles to minimize order-to-dispatch time and maximize order throughput." }
            ]
        },
        checklists: [
            {
                title: "Placeholder Checklist 1",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC1-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 2",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC2-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 3",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC3-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'personal_travel_pack',
        title: "Personal Travel & Vacation Checklist",
        priceUSD: 19.99,
        priceINR: 1299,
        paymentId: 'pl_ROLjNNiQa8G8XJ',
        category: "Personal",
        description: "For frequent travelers. A personal toolkit to ensure you never forget the essentials, from packing to pre-departure home checks.",
        icon: <Plane className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Use the 'Ultimate Packing List' categorized by item type.",
            "Implement the 'Pre-Departure Home Security' checklist.",
            "Standardize your 'Digital Document &amp; Currency' preparation.",
            "Includes a 'Return Home' checklist for a smooth re-entry."
        ],
        checklists: [
            {
                title: "Placeholder Checklist 1",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC1-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 2",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC2-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 3",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC3-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'pet_care_pack',
        title: "Pet Care & Pet Sitter Checklist",
        priceUSD: 19.99,
        priceINR: 1299,
        paymentId: 'pl_ROLjNNiQa8G8XJ',
        category: "Personal",
        description: "For pet owners. A comprehensive guide for leaving your pet with a sitter, ensuring their safety, health, and happiness.",
        icon: <PawPrint className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Standardize the 'Feeding Schedule &amp; Diet' instructions.",
            "Implement the 'Medication &amp; Emergency Contact' list.",
            "Master the 'Daily Routine &amp; Exercise' plan.",
            "Includes a 'House Rules for Pet Sitter' checklist."
        ],
        checklists: [
            {
                title: "Placeholder Checklist 1",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC1-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC1-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 2",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC2-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 3",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC3-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'gym_fitness_pack',
        title: "Gym & Fitness Center Operations",
        priceUSD: 79.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Wellness",
        description: "For gym owners and managers. A toolkit to ensure member safety, equipment maintenance, and a clean, motivating environment.",
        icon: <Dumbbell className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Implement a 'Daily Equipment Safety &amp; Cleaning' protocol.",
            "Standardize the 'New Member Onboarding &amp; Induction' process.",
            "Master 'Locker Room &amp; Shower Hygiene' checklists.",
            "Includes 'Personal Trainer Performance' and 'Class Scheduling' checklists."
        ],
        globalStandards: {
            title: "Aligned with Health & Fitness Club Standards",
            standards: [
                { name: "Safety", description: "Protocols for equipment maintenance, user safety, and emergency response." },
                { name: "Hygiene", description: "Standards for cleaning and sanitation of high-contact surfaces, locker rooms, and pools." },
                { name: "Member Service", description: "Best practices for new member induction, personal training quality, and class management." }
            ]
        },
        checklists: [
            {
                title: "🏋️ Gym Equipment Safety Inspection",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Facility Manager",
                summary: "A weekly check of all gym equipment to prevent injuries and ensure member safety.",
                tasks: [
                    { id: 'GYM-ESI-001', description: "Inspect all cables and pulleys on weight machines for fraying or wear.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Gym Floor' },
                    { id: 'GYM-ESI-002', description: "Check that all treadmills, ellipticals, and bikes are functioning correctly and emergency stops work.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Cardio Area' },
                    { id: 'GYM-ESI-003', description: "Wipe down and sanitize all equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Gym Floor' },
                    { id: 'GYM-ESI-004', description: "Place 'Out of Order' signs on any faulty equipment and log for repair.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Request', location: 'Gym Floor' },
                    { id: 'GYM-ESI-005', description: "Check all free weights for damage and ensure they are stored correctly.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Weights Area' }
                ]
            },
            {
                title: "💧 Pool & Water Quality Management",
                department: "Facilities",
                frequency: "Daily",
                role: "Pool Operator",
                summary: "Ensures pool water is safe and hygienic for members by testing and logging key chemical levels.",
                tasks: [
                    { id: 'POOL-WQM-001', description: "Test and log chlorine and pH levels at least twice daily.", priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'POOL-WQM-002', description: "Check that all safety equipment (life rings, first aid kits) is present and in good condition.", priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Log', location: 'Poolside' },
                    { id: 'POOL-WQM-003', description: "Verify lifeguard certifications are current and posted.", priority: 'High', riskLevel: 'High', proof: 'Certification File', location: 'Office' },
                    { id: 'POOL-WQM-004', description: "Clean pool filters and skimmer baskets as per schedule.", priority: 'Medium', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Pump Room' },
                    { id: 'POOL-WQM-005', description: "Ensure deck area is clean and free of slip hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Poolside' }
                ]
            },
            {
                title: "Placeholder Checklist 3",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC3-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'real_estate_pack',
        title: "Real Estate & Property Management",
        priceUSD: 119.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Real Estate",
        description: "For property managers and landlords. A toolkit for managing residential and commercial properties, focusing on maintenance, tenant relations, and compliance.",
        icon: <Home className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Standardize the 'Tenant Move-In &amp; Move-Out' inspection process.",
            "Implement a 'Preventive Maintenance' schedule for building systems.",
            "Master 'Rent Collection &amp; Arrears Management'.",
            "NEW: Includes 'Landscaping &amp; Grounds Maintenance'."
        ],
        globalStandards: {
            title: "Aligned with Property Management Best Practices",
            standards: [
                { name: "Leasing & Tenancy", description: "Protocols for tenant screening, lease agreements, and move-in/move-out procedures." },
                { name: "Maintenance", description: "Best practices for preventive maintenance, vendor management, and safety inspections." },
                { name: "Financial", description: "Procedures for rent collection, arrears management, and financial reporting." },
                { name: "Legal", description: "Adherence to local landlord-tenant laws and fair housing regulations." }
            ]
        },
        checklists: [
             {
                title: "🏢 Commercial Lease Onboarding",
                department: "Property Management",
                frequency: "Per New Lease",
                role: "Property Manager",
                summary: "Manages the complex process of onboarding a new commercial tenant, from legal review to fit-out approvals and security deposits.",
                tasks: [
                    { id: 'CLO-001', description: "Verify receipt of signed lease agreement and security deposit.", priority: 'High', riskLevel: 'High', proof: 'Financial Statement', location: 'Office' },
                    { id: 'CLO-002', description: "Review tenant's proposed fit-out plans for compliance with building codes and regulations.", priority: 'High', riskLevel: 'High', proof: 'Plan Review Sign-off', location: 'Office' },
                    { id: 'CLO-003', description: "Provide tenant with building rules, emergency procedures, and access card request forms.", priority: 'High', riskLevel: 'Medium', proof: 'Welcome Packet Handover', location: 'Office' },
                    { id: 'CLO-004', description: "Conduct a pre-occupancy inspection of the premises with the tenant and document the initial condition.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Inspection Form', location: 'Leased Premises' },
                    { id: 'CLO-005', description: "Coordinate with building engineering for any required utility connections or modifications.", priority: 'High', riskLevel: 'Medium', proof: 'Engineering Work Order', location: 'Office' }
                ]
            },
            {
                title: "🔑 Property Sale & Handover Protocol",
                department: "Real Estate Sales",
                frequency: "Per Sale",
                role: "Agent/Manager",
                summary: "Ensures a smooth and legally sound transfer of property to a new owner, covering documentation, keys, and final inspections.",
                tasks: [
                    { id: 'PSH-001', description: "Confirm receipt of all final payments and legal clearances.", priority: 'High', riskLevel: 'High', proof: 'Closing Statement', location: 'Office' },
                    { id: 'PSH-002', description: "Assemble a handover package including all keys, warranties, and original property documents.", priority: 'High', riskLevel: 'High', proof: 'Handover Package Checklist', location: 'Office' },
                    { id: 'PSH-003', description: "Conduct a final walkthrough with the new owner to demonstrate systems and confirm property condition.", priority: 'High', riskLevel: 'Medium', proof: 'Walkthrough Sign-off', location: 'Property' },
                    { id: 'PSH-004', description: "Transfer all utility accounts and property management responsibilities to the new owner.", priority: 'High', riskLevel: 'Medium', proof: 'Utility Transfer Confirmations', location: 'Office' },
                    { id: 'PSH-005', description: "Provide new owner with contact information for building management and emergency services.", priority: 'High', riskLevel: 'Low', proof: 'Contact Sheet', location: 'Property' }
                ]
            },
            {
                title: "🔄 Rental Property Turnaround",
                department: "Property Management",
                frequency: "Per Vacancy",
                role: "Property Manager",
                summary: "A time-sensitive checklist to manage the period between tenants, minimizing vacancy and preparing the unit for the next resident.",
                tasks: [
                    { id: 'RPT-001', description: "Conduct a move-out inspection with the outgoing tenant and document any damages against the security deposit.", priority: 'High', riskLevel: 'High', proof: 'Move-out Inspection Report', location: 'Rental Unit' },
                    { id: 'RPT-002', description: "Schedule and coordinate all necessary repairs, painting, and professional cleaning.", priority: 'High', riskLevel: 'Medium', proof: 'Work Orders', location: 'Office' },
                    { id: 'RPT-003', description: "Change all locks and security codes.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Log', location: 'Rental Unit' },
                    { id: 'RPT-004', description: "Perform a final 'rent-ready' inspection before listing the property or handing it over to the new tenant.", priority: 'High', riskLevel: 'Medium', proof: 'Rent-Ready Checklist', location: 'Rental Unit' },
                    { id: 'RPT-005', description: "Photograph the rent-ready unit to document its condition before the new tenant moves in.", priority: 'High', riskLevel: 'Medium', proof: 'Photo Log', location: 'Rental Unit' }
                ]
            },
            {
                title: "🌳 Landscaping & Grounds Maintenance",
                department: "Facilities",
                frequency: "Weekly",
                role: "Horticulturist/Grounds Manager",
                summary: "Maintains all property green spaces, ensuring they are aesthetically pleasing, safe, and managed sustainably.",
                tasks: [
                    { id: 'LAND-001', description: "Inspect irrigation systems for leaks and correct operation, adjusting schedules based on weather.", priority: 'High', riskLevel: 'Medium', proof: 'Irrigation Log', location: 'Grounds' },
                    { id: 'LAND-002', description: "Check landscaped areas for plant health, signs of pests, or disease, and take corrective action.", priority: 'Medium', riskLevel: 'Low', proof: 'Horticulture Log', location: 'Grounds' },
                    { id: 'LAND-003', description: "Ensure pedestrian pathways are clear of overgrowth, debris, or any tripping hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Safety Sweep Log', location: 'Grounds' },
                    { id: 'LAND-004', description: "Manage mowing, pruning, and fertilization schedules for lawns and gardens.", priority: 'Medium', riskLevel: 'Low', proof: 'Work Schedule', location: 'Grounds' },
                    { id: 'LAND-005', description: "Ensure exterior lighting in common areas and pathways is functional.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Grounds' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
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
                title: "Placeholder Checklist 2",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC2-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC2-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 3",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC3-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC3-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
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
                title: "Placeholder Checklist 4",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC4-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC4-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 5",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC5-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC5-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 6",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC6-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC6-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 7",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC7-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC7-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
                ]
            },
            {
                title: "Placeholder Checklist 8",
                department: "Admin",
                frequency: "Daily",
                role: "Admin",
                summary: "Placeholder summary.",
                tasks: [
                    { id: 'PC8-001', description: "Placeholder Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-002', description: "Placeholder Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-003', description: "Placeholder Task 3", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-004', description: "Placeholder Task 4", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' },
                    { id: 'PC8-005', description: "Placeholder Task 5", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }
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
                    { id: 'HR-DISC-01', description: "Document the specific policy violation and gather all relevant evidence (e.g., emails, witness statements).", priority: 'High', riskLevel: 'High', proof: 'Investigation File', location: 'HR Office' },
                    { id: 'HR-DISC-02', description: "Conduct a formal meeting with the employee, ensuring a witness is present, and clearly explain the issue.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'HR Office' },
                    { id: 'HR-DISC-03', description: "Issue the appropriate level of warning (verbal, written, final) and have the employee sign an acknowledgment.", priority: 'High', riskLevel: 'High', proof: 'Signed Warning Letter', location: 'HR Office' },
                    { id: 'HR-DISC-04', description: "Clearly document the required improvement and the consequences of further violations.", priority: 'High', riskLevel: 'High', proof: 'Performance Improvement Plan', location: 'HR Office' },
                    { id: 'HR-DISC-05', description: "Consult with legal counsel before any termination decision is made.", priority: 'High', riskLevel: 'High', proof: 'Legal Consultation Log', location: 'HR Office' }
                ]
            }
        ]
    },
    {
        id: 'film_production_studio_operations',
        title: "Film Production & Studio Operations",
        priceUSD: 149.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Entertainment",
        description: "For producers and studio managers. A toolkit for managing the entire film production lifecycle, from pre-production to on-set safety and post-production.",
        icon: <Video className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent" as const,
        sampleItems: [
            "Implement a 'Location Scouting & Safety' checklist.",
            "Standardize 'On-Set Safety (EHS)' protocols, including electrical and rigging.",
            "Master 'Equipment Rental & Management' to prevent loss and damage.",
            "Includes checklists for 'Daily Call Sheet Verification' and 'Post-Production Workflow'."
        ],
        globalStandards: {
            title: "Aligned with Film & Production Industry Standards",
            standards: [
                { name: "On-Set Safety", description: "Best practices for electrical safety, stunts, rigging, and managing work hours to prevent accidents." },
                { name: "Production Management", description: "Protocols for budgeting, scheduling, call sheets, and managing cast and crew." },
                { name: "Equipment Handling", description: "Procedures for managing expensive camera, lighting, and sound equipment." },
                { name: "Post-Production", description: "Workflows for data management, editing, color grading, and final delivery." }
            ]
        },
        checklists: [
            {
                title: "🎬 Pre-Production Planning",
                department: "Production",
                frequency: "Pre-Production",
                role: "Producer",
                summary: "A master checklist to ensure all foundational elements are in place before principal photography begins.",
                tasks: [
                    { id: 'FILM-PREPROD-01', description: "Finalize and lock the shooting script.", priority: 'High', riskLevel: 'High', proof: 'Locked Script PDF', location: 'Production Office' },
                    { id: 'FILM-PREPROD-02', description: "Create a detailed production budget and schedule.", priority: 'High', riskLevel: 'High', proof: 'Budget & Schedule Docs', location: 'Production Office' },
                    { id: 'FILM-PREPROD-03', description: "Secure all necessary financing and complete legal paperwork.", priority: 'High', riskLevel: 'High', proof: 'Financing Agreements', location: 'Production Office' },
                    { id: 'FILM-PREPROD-04', description: "Cast all principal roles and finalize crew contracts.", priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'Production Office' },
                    { id: 'FILM-PREPROD-05', description: "Obtain production insurance.", priority: 'High', riskLevel: 'High', proof: 'Insurance Certificate', location: 'Production Office' }
                ]
            },
            {
                title: "📍 Location Scouting & Safety Clearance",
                department: "Locations",
                frequency: "Per Location",
                role: "Location Manager",
                summary: "Ensures that potential filming locations are not only visually suitable but also safe and logistically viable.",
                tasks: [
                    { id: 'FILM-LOC-001', description: "Secure all necessary permits from local authorities.", priority: 'High', riskLevel: 'High', proof: 'Permit Documents', location: 'Location' },
                    { id: 'FILM-LOC-002', description: "Conduct a technical scout with key department heads (Director, DP, Sound).", priority: 'High', riskLevel: 'Medium', proof: 'Scout Report', location: 'Location' },
                    { id: 'FILM-LOC-003', description: "Perform a safety risk assessment of the location.", priority: 'High', riskLevel: 'High', proof: 'Risk Assessment Form', location: 'Location' },
                    { id: 'FILM-LOC-004', description: "Arrange for facilities like parking, restrooms, and catering space.", priority: 'High', riskLevel: 'Medium', proof: 'Logistics Plan', location: 'Location' },
                    { id: 'FILM-LOC-005', description: "Notify residents or businesses in the vicinity of the filming schedule.", priority: 'Medium', riskLevel: 'Low', proof: 'Notification Letter', location: 'Location' }
                ]
            },
            {
                title: "🛡️ On-Set Safety & EHS Protocol",
                department: "Safety/EHS",
                frequency: "Daily",
                role: "Safety Officer",
                summary: "A daily checklist to mitigate common on-set hazards, from electrical safety to stunt coordination.",
                tasks: [
                    { id: 'FILM-EHS-001', description: "Conduct a safety briefing with all cast and crew at the start of the day.", priority: 'High', riskLevel: 'High', proof: 'Briefing Sign-in Sheet', location: 'Set' },
                    { id: 'FILM-EHS-002', description: "Inspect all electrical wiring and ensure it is properly grounded and protected from weather.", priority: 'High', riskLevel: 'High', proof: 'Electrical Log', location: 'Set' },
                    { id: 'FILM-EHS-003', description: "Ensure fire extinguishers and first-aid kits are accessible and clearly marked.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Set' },
                    { id: 'FILM-EHS-004', description: "For stunts, review the stunt plan and ensure all safety equipment is in place.", priority: 'High', riskLevel: 'High', proof: 'Stunt Plan Sign-off', location: 'Set' },
                    { id: 'FILM-EHS-005', description: "Ensure clear pathways and that equipment is not creating tripping hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Set' }
                ]
            },
            {
                title: "🎥 Equipment Rental & Management",
                department: "Camera/Grip/Electric",
                frequency: "Per Shoot",
                role: "Line Producer",
                summary: "Manages the lifecycle of rented equipment, from checking it in to ensuring its safe return, preventing loss and damage claims.",
                tasks: [
                    { id: 'FILM-EQUIP-001', description: "Check in all rented equipment against the rental agreement, noting any pre-existing damage.", priority: 'High', riskLevel: 'High', proof: 'Check-in Report', location: 'Studio/Location' },
                    { id: 'FILM-EQUIP-002', description: "Ensure all equipment is securely stored when not in use.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Studio/Location' },
                    { id: 'FILM-EQUIP-003', description: "Log any equipment malfunctions during the shoot.", priority: 'Medium', riskLevel: 'Medium', proof: 'Malfunction Log', location: 'Set' },
                    { id: 'FILM-EQUIP-004', description: "Check out all equipment at the end of the shoot, verifying all components are present.", priority: 'High', riskLevel: 'High', proof: 'Check-out Report', location: 'Studio/Location' },
                    { id: 'FILM-EQUIP-005', description: "Report any new damage to the production office immediately.", priority: 'High', riskLevel: 'High', proof: 'Damage Report', location: 'Set' }
                ]
            },
            {
                title: "📋 Daily Call Sheet Verification",
                department: "Production",
                frequency: "Daily",
                role: "Assistant Director",
                summary: "A final check to ensure the next day's call sheet is accurate and has been distributed to all cast and crew.",
                tasks: [
                    { id: 'FILM-CALL-001', description: "Verify call times for all cast and crew with department heads.", priority: 'High', riskLevel: 'High', proof: 'Department Head Sign-off', location: 'Production Office' },
                    { id: 'FILM-CALL-002', description: "Check that the scene numbers and script pages for the day are correct.", priority: 'High', riskLevel: 'High', proof: 'Cross-reference with Script', location: 'Production Office' },
                    { id: 'FILM-CALL-003', description: "Include weather forecast and any specific safety notes for the day.", priority: 'Medium', riskLevel: 'Medium', proof: 'Call Sheet Content', location: 'Production Office' },
                    { id: 'FILM-CALL-004', description: "Distribute the call sheet via email and get delivery confirmations.", priority: 'High', riskLevel: 'Medium', proof: 'Email Log', location: 'Production Office' },
                    { id: 'FILM-CALL-005', description: "Post a physical copy of the call sheet in a designated area on set.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Set' }
                ]
            },
            {
                title: "💾 Data Management & DIT Workflow",
                department: "Post-Production/Data",
                frequency: "Daily",
                role: "Digital Imaging Technician (DIT)",
                summary: "A critical on-set checklist to ensure footage is safely backed up and prepared for the post-production pipeline.",
                tasks: [
                    { id: 'FILM-DIT-001', description: "Offload camera cards to a primary hard drive as soon as they are full.", priority: 'High', riskLevel: 'High', proof: 'Offload Log', location: 'DIT Station' },
                    { id: 'FILM-DIT-002', description: "Create a second, identical backup on a separate drive (3-2-1 backup rule).", priority: 'High', riskLevel: 'High', proof: 'Backup Log', location: 'DIT Station' },
                    { id: 'FILM-DIT-003', description: "Perform a checksum verification to ensure data integrity of the copied files.", priority: 'High', riskLevel: 'High', proof: 'Checksum Report', location: 'DIT Station' },
                    { id: 'FILM-DIT-004', description: "Generate daily proxies and upload them for the director and editor.", priority: 'High', riskLevel: 'Medium', proof: 'Upload Log', location: 'DIT Station' },
                    { id: 'FILM-DIT-005', description: "Physically separate the primary and backup drives at the end of the day.", priority: 'High', riskLevel: 'High', proof: 'Storage Log', location: 'DIT Station' }
                ]
            },
            {
                title: "✂️ Post-Production Workflow Management",
                department: "Post-Production",
                frequency: "Per Project",
                role: "Post-Production Supervisor",
                summary: "Manages the complex process from editing to final delivery, ensuring technical standards are met at every stage.",
                tasks: [
                    { id: 'FILM-POST-001', description: "Conform the edited timeline with the original high-resolution footage.", priority: 'High', riskLevel: 'High', proof: 'Conform Log', location: 'Edit Suite' },
                    { id: 'FILM-POST-002', description: "Manage the workflow for VFX, color grading, and sound mixing.", priority: 'High', riskLevel: 'Medium', proof: 'Post-Production Schedule', location: 'Post-Production House' },
                    { id: 'FILM-POST-003', description: "Conduct a Quality Control (QC) review of the final master for any technical errors.", priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'Screening Room' },
                    { id: 'FILM-POST-004', description: "Create all required deliverables (e.g., theatrical print, broadcast version, web version).", priority: 'High', riskLevel: 'High', proof: 'Deliverables List', location: 'Post-Production House' },
                    { id: 'FILM-POST-005', description: "Archive the final project and all its assets securely.", priority: 'High', riskLevel: 'Medium', proof: 'Archive Log', location: 'Data Storage' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities",
                frequency: "Monthly",
                role: "Studio Manager",
                summary: "A checklist to prevent pest infestations that could damage expensive equipment, props, or costumes.",
                tasks: [
                    { id: 'PEST-FILM-001', description: "Inspect sound stages, prop houses, and costume storage for signs of pests.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Studio' },
                    { id: 'PEST-FILM-002', description: "Ensure catering and craft service areas are cleaned thoroughly at the end of each day.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Set/Studio' },
                    { id: 'PEST-FILM-003', description: "Keep all exterior doors to sound stages closed when not in use.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Studio' },
                    { id: 'PEST-FILM-004', description: "Review reports from the studio's pest control vendor and action all recommendations.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Report', location: 'Studio Office' },
                    { id: 'PEST-FILM-005', description: "Prohibit food and drink in sensitive areas like edit suites and equipment rooms.", priority: 'High', riskLevel: 'Medium', proof: 'Policy Signage', location: 'Studio' }
                ]
            }
        ]
    },
    {
        id: 'theme_park_amusement_park_operations',
        title: "Theme Park & Amusement Park Operations",
        priceUSD: 249.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Entertainment",
        description: "For park managers and safety officers. An essential toolkit for ensuring guest safety, ride reliability, and an magical visitor experience.",
        icon: <FerrisWheel className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent" as const,
        sampleItems: [
            "Master the 'Daily Ride Safety & Operations' checklist for all attractions.",
            "Implement a 'Water Park Hygiene & Water Quality' protocol.",
            "Standardize 'Crowd Management & Queue Line' procedures for a better guest experience.",
            "Includes 'F&B Hygiene' for food stalls and 'Emergency Preparedness' drills."
        ],
        globalStandards: {
            title: "Aligned with International Amusement Park Standards",
            standards: [
                { name: "Ride Safety", description: "ASTM F24 standards for amusement ride design, maintenance, and operation." },
                { name: "Aquatic Safety", description: "Protocols for water quality, lifeguard certification, and aquatic facility safety." },
                { name: "Guest Safety", description: "Best practices for crowd management, emergency evacuation, and general park safety." },
                { name: "Food Hygiene", description: "HACCP and local food safety standards for all food and beverage outlets." }
            ]
        },
        checklists: [
            {
                title: "🎢 Daily Ride Safety & Operations Check",
                department: "Ride Operations/Maintenance",
                frequency: "Daily (Pre-Opening)",
                role: "Ride Supervisor",
                summary: "A critical pre-opening checklist to ensure every ride is mechanically sound and safe for guests.",
                tasks: [
                    { id: 'RIDE-001', description: "Perform a full test cycle of the ride with no passengers.", priority: 'High', riskLevel: 'High', proof: 'Test Cycle Log', location: 'Ride Station' },
                    { id: 'RIDE-002', description: "Check all safety restraints (lap bars, seatbelts, harnesses) for proper function.", priority: 'High', riskLevel: 'High', proof: 'Restraint Check Log', location: 'Ride Vehicles' },
                    { id: 'RIDE-003', description: "Inspect ride structure, hydraulics, and brakes for any visible leaks or damage.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection Log', location: 'Ride Structure' },
                    { id: 'RIDE-004', description: "Verify that all ride operator communication systems are working.", priority: 'High', riskLevel: 'Medium', proof: 'Comms Test Log', location: 'Ride Station' },
                    { id: 'RIDE-005', description: "Sign the daily ride logbook, clearing the ride for public operation.", priority: 'High', riskLevel: 'High', proof: 'Signed Logbook', location: 'Ride Station' }
                ]
            },
            {
                title: "💧 Water Park & Pool Hygiene",
                department: "Aquatics/Facilities",
                frequency: "Hourly/Daily",
                role: "Aquatics Manager",
                summary: "Ensures water quality and hygiene in water parks to prevent illness and ensure a safe guest experience.",
                tasks: [
                    { id: 'WATER-001', description: "Test and log chlorine and pH levels in all pools and water attractions hourly.", priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'WATER-002', description: "Inspect slides and water features for any damage or unsafe conditions.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Water Park' },
                    { id: 'WATER-003', description: "Ensure lifeguard stations are properly staffed and all lifeguards are certified.", priority: 'High', riskLevel: 'High', proof: 'Staffing Roster & Certs', location: 'Poolside' },
                    { id: 'WATER-004', description: "Check that all filtration and pumping systems are operating correctly.", priority: 'High', riskLevel: 'Medium', proof: 'System Check Log', location: 'Pump Room' },
                    { id: 'WATER-005', description: "Ensure deck surfaces are clean and free of slip hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Water Park' }
                ]
            },
            {
                title: "🍔 F&B Stall & Kiosk Hygiene Audit",
                department: "Food & Beverage",
                frequency: "Daily",
                role: "F&B Manager",
                summary: "A HACCP-based checklist to ensure all food stalls meet hygiene standards, preventing foodborne illness.",
                tasks: [
                    { id: 'FNB-001', description: "Check and log temperatures of all refrigerators, freezers, and hot-holding units.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Food Stalls' },
                    { id: 'FNB-002', description: "Verify that all food handlers are adhering to personal hygiene standards (clean uniform, hair nets).", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Food Stalls' },
                    { id: 'FNB-003', description: "Ensure sanitizer buckets are at the correct concentration and test strips are used.", priority: 'High', riskLevel: 'High', proof: 'Sanitizer Log', location: 'Food Stalls' },
                    { id: 'FNB-004', description: "Check for proper food labeling with dates and times.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Food Stalls' },
                    { id: 'FNB-005', description: "Ensure a clear separation between raw and cooked food preparation areas.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Food Stalls' }
                ]
            },
            {
                title: "👨‍👩‍👧‍👦 Crowd Management & Queue Line Operations",
                department: "Operations",
                frequency: "Hourly (Peak Times)",
                role: "Park Supervisor",
                summary: "Manages guest flow and queue lines to enhance experience, ensure safety, and manage wait times.",
                tasks: [
                    { id: 'CROWD-001', description: "Monitor queue lines and deploy staff to manage choke points.", priority: 'High', riskLevel: 'Medium', proof: 'Observation Log', location: 'Ride Queues' },
                    { id: 'CROWD-002', description: "Ensure wait time signage is accurate and updated regularly.", priority: 'High', riskLevel: 'Low', proof: 'Signage Check', location: 'Ride Entrances' },
                    { id: 'CROWD-003', description: "Ensure barricades and queue line ropes are secure and properly configured.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Ride Queues' },
                    { id: 'CROWD-004', description: "Monitor guest behavior in queues and intervene to prevent line-jumping or disputes.", priority: 'Medium', riskLevel: 'Medium', proof: 'Staff Observation', location: 'Ride Queues' },
                    { id: 'CROWD-005', description: "Coordinate with ride operators to manage guest flow during temporary ride closures.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Park-wide' }
                ]
            },
            {
                title: "🔥 Fire & Emergency Preparedness Drill",
                department: "Safety/Security",
                frequency: "Quarterly",
                role: "Safety Manager",
                summary: "Conducts drills to test the park's response to emergencies like fires or medical incidents.",
                tasks: [
                    { id: 'DRILL-001', description: "Conduct a simulated emergency drill (e.g., fire, medical emergency).", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Designated Zone' },
                    { id: 'DRILL-002', description: "Test the park-wide public address system for clarity and volume.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Control Room' },
                    { id: 'DRILL-003', description: "Ensure staff are familiar with evacuation routes and their roles during an emergency.", priority: 'High', riskLevel: 'High', proof: 'Staff Drill Participation Log', location: 'Park-wide' },
                    { id: 'DRILL-004', description: "Check that all first-aid stations are fully stocked and accessible.", priority: 'High', riskLevel: 'High', proof: 'First Aid Kit Log', location: 'First Aid Stations' },
                    { id: 'DRILL-005', description: "Review and update the emergency response plan based on drill outcomes.", priority: 'High', riskLevel: 'Medium', proof: 'Updated Plan', location: 'Safety Office' }
                ]
            },
            {
                title: "🧹 Park Cleanliness & Waste Management",
                department: "Housekeeping/Facilities",
                frequency: "Daily",
                role: "Housekeeping Supervisor",
                summary: "Maintains the overall cleanliness and appearance of the park, which is critical for guest satisfaction.",
                tasks: [
                    { id: 'PARK-CLEAN-001', description: "Ensure all pathways and common areas are free of litter and spills.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Park-wide' },
                    { id: 'PARK-CLEAN-002', description: "Empty trash and recycling bins regularly to prevent overflow.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Park-wide' },
                    { id: 'PARK-CLEAN-003', description: "Clean and sanitize all restrooms on a frequent, scheduled basis.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Cleaning Log', location: 'Restrooms' },
                    { id: 'PARK-CLEAN-004', description: "Manage a segregated waste disposal system to maximize recycling.", priority: 'Medium', riskLevel: 'Low', proof: 'Waste Management Log', location: 'Waste Disposal Area' },
                    { id: 'PARK-CLEAN-005', description: "Respond immediately to any cleaning or spill-related guest complaints.", priority: 'High', riskLevel: 'Medium', proof: 'Incident Log', location: 'Park-wide' }
                ]
            },
            {
                title: "🎭 Character & Entertainment Performance",
                department: "Entertainment",
                frequency: "Daily",
                role: "Entertainment Manager",
                summary: "Ensures the quality and safety of all live entertainment, from character meet-and-greets to stage shows.",
                tasks: [
                    { id: 'ENT-001', description: "Inspect all character costumes for cleanliness and condition.", priority: 'High', riskLevel: 'Low', proof: 'Costume Log', location: 'Costume Department' },
                    { id: 'ENT-002', description: "Ensure character performers adhere to their scheduled break times to prevent overheating.", priority: 'High', riskLevel: 'High', proof: 'Schedule Adherence Log', location: 'Backstage' },
                    { id: 'ENT-003', description: "Conduct sound and lighting checks for all stage shows before the first performance.", priority: 'High', riskLevel: 'Medium', proof: 'Tech Check Log', location: 'Theaters' },
                    { id: 'ENT-004', description: "Verify that all show props and set pieces are secure and in good repair.", priority: 'High', riskLevel: 'High', proof: 'Prop Inspection Log', location: 'Backstage' },
                    { id: 'ENT-005', description: "Monitor performances to ensure they meet brand and quality standards.", priority: 'Medium', riskLevel: 'Medium', proof: 'Performance Audit', location: 'Performance Venues' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Facilities/Health & Safety",
                frequency: "Weekly",
                role: "Facility Manager",
                summary: "A proactive checklist for preventing and managing pest infestations in a high-traffic environment with numerous food sources.",
                tasks: [
                    { id: 'PEST-PARK-001', description: "Inspect all F&B stalls, kitchens, and waste areas for signs of pest activity.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'F&B Areas' },
                    { id: 'PEST-PARK-002', description: "Ensure all food and ingredients are stored in sealed, pest-proof containers.", priority: 'High', riskLevel: 'High', proof: 'Storage Inspection', location: 'F&B Storage' },
                    { id: 'PEST-PARK-003', description: "Verify that all trash receptacles across the park are covered and emptied on a strict schedule.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Log', location: 'Park-wide' },
                    { id: 'PEST-PARK-004', description: "Review reports from the pest control vendor and ensure all recommendations are tracked to completion.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Action Tracker', location: 'Facility Office' },
                    { id: 'PEST-PARK-005', description: "Check landscaped areas and water bodies for signs of pest breeding grounds.", priority: 'Medium', riskLevel: 'Medium', proof: 'Grounds Inspection Log', location: 'Park Grounds' }
                ]
            }
        ]
    },
    {
        id: 'sports_complex_stadium_operations',
        title: "Sports Complex & Stadium Operations",
        priceUSD: 199.99,
        priceINR: 11999,
        paymentId: 'pl_RMncDLAlms69Pd',
        category: "Entertainment",
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
                title: " crowd Crowd Management & Security Screening",
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
    },
    {
        id: 'museum_cultural_institution_management',
        title: "Museum & Cultural Institution Management",
        priceUSD: 119.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment",
        description: "For curators and directors. A specialized toolkit for protecting priceless artifacts, managing visitor experience, and ensuring the safety of heritage buildings.",
        icon: <GalleryVertical className="w-8 h-8 text-primary" />,
        badgeText: "New!",
        badgeVariant: "accent" as const,
        sampleItems: [
            "Master 'Artifact Handling & Preservation' protocols.",
            "Implement a 'Climate & Environmental Control' logging system.",
            "Standardize 'Visitor Management & Accessibility' to enhance the guest experience.",
            "Includes checklists for 'Exhibition Installation' and 'Archive Management'."
        ],
        globalStandards: {
            title: "Aligned with International Museum & Conservation Standards",
            standards: [
                { name: "Conservation", description: "Best practices for environmental control (temperature, humidity, lux levels) and artifact handling." },
                { name: "Collections Management", description: "Protocols for accessioning, deaccessioning, and inventory control." },
                { name: "Security", description: "Standards for asset protection, surveillance, and access control in a public-facing institution." },
                { name: "Visitor Services", description: "Guidelines for accessibility, interpretation, and educational programming." }
            ]
        },
        checklists: [
            {
                title: "🖼️ Artifact Handling & Preservation",
                department: "Collections/Conservation",
                frequency: "Per Movement/Daily",
                role: "Curator/Conservator",
                summary: "A critical protocol to prevent damage to priceless artifacts during handling, storage, and display.",
                tasks: [
                    { id: 'ART-001', description: "Verify that anyone handling artifacts is wearing appropriate gloves (e.g., nitrile).", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Collections Storage/Gallery' },
                    { id: 'ART-002', description: "Log the movement of any artifact from storage to display or conservation.", priority: 'High', riskLevel: 'High', proof: 'Movement Log', location: 'Collections Management System' },
                    { id: 'ART-003', description: "Use designated padded carts and supports when moving objects.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Museum-wide' },
                    { id: 'ART-004', description: "Complete a condition report before and after any artifact is moved.", priority: 'High', riskLevel: 'High', proof: 'Condition Report Form', location: 'Conservation Lab/Storage' },
                    { id: 'ART-005', description: "Ensure display cases are properly sealed and materials used are archival-safe.", priority: 'High', riskLevel: 'High', proof: 'Display Case Log', location: 'Galleries' }
                ]
            },
            {
                title: "🌡️ Climate & Environmental Control Log",
                department: "Facilities/Conservation",
                frequency: "Daily",
                role: "Facility Manager",
                summary: "Monitors and logs environmental conditions to prevent long-term degradation of sensitive artifacts.",
                tasks: [
                    { id: 'CLIMATE-001', description: "Log temperature and relative humidity readings from data loggers in all gallery and storage areas.", priority: 'High', riskLevel: 'High', proof: 'Environmental Log', location: 'Control Room/Office' },
                    { id: 'CLIMATE-002', description: "Check that HVAC systems are maintaining conditions within the set parameters.", priority: 'High', riskLevel: 'High', proof: 'BMS Check', location: 'Control Room' },
                    { id: 'CLIMATE-003', description: "Measure and log light levels (lux) in galleries displaying light-sensitive materials like textiles or works on paper.", priority: 'High', riskLevel: 'High', proof: 'Lux Meter Log', location: 'Galleries' },
                    { id: 'CLIMATE-004', description: "Report any deviations from set parameters to the conservation department immediately.", priority: 'High', riskLevel: 'High', proof: 'Deviation Report', location: 'Facility Office' },
                    { id: 'CLIMATE-005', description: "Calibrate environmental monitoring equipment annually.", priority: 'High', riskLevel: 'Medium', proof: 'Calibration Certificates', location: 'Facility Office' }
                ]
            },
            {
                title: "🔒 Security & Surveillance Audit",
                department: "Security",
                frequency: "Daily/Weekly",
                role: "Security Manager",
                summary: "Ensures all security systems are operational and protocols are being followed to protect the collection and visitors.",
                tasks: [
                    { id: 'MUSEUM-SEC-001', description: "Verify all CCTV cameras are recording and have clear lines of sight.", priority: 'High', riskLevel: 'High', proof: 'CCTV Log', location: 'Security Control Room' },
                    { id: 'MUSEUM-SEC-002', description: "Test motion detectors and door alarms in restricted areas before and after opening hours.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Galleries/Storage' },
                    { id: 'MUSEUM-SEC-003', description: "Conduct regular patrols and log any unusual activity or unattended bags.", priority: 'High', riskLevel: 'Medium', proof: 'Patrol Log', location: 'Museum-wide' },
                    { id: 'MUSEUM-SEC-004', description: "Audit access logs for secure areas like collections storage and conservation labs.", priority: 'High', riskLevel: 'High', proof: 'Access Log Review', location: 'Security Control Room' },
                    { id: 'MUSEUM-SEC-005', description: "Ensure all security staff are at their posts and are actively monitoring their designated areas.", priority: 'High', riskLevel: 'Medium', proof: 'Roster & Post Check', location: 'Museum-wide' }
                ]
            },
            {
                title: "🖼️ Exhibition Installation & De-installation",
                department: "Exhibitions",
                frequency: "Per Exhibition",
                role: "Exhibitions Manager",
                summary: "A project management checklist to ensure exhibitions are installed and removed safely, on time, and on budget.",
                tasks: [
                    { id: 'EXHIB-001', description: "Finalize the exhibition layout and object list.", priority: 'High', riskLevel: 'Medium', proof: 'Final Layout Plan', location: 'Curatorial Office' },
                    { id: 'EXHIB-002', description: "Coordinate with conservation for any specific object mounting and display requirements.", priority: 'High', riskLevel: 'High', proof: 'Mounting Brief', location: 'Conservation Lab' },
                    { id: 'EXHIB-003', description: "Schedule and manage all vendors for wall construction, painting, lighting, and graphics.", priority: 'High', riskLevel: 'Medium', proof: 'Project Schedule', location: 'Exhibition Hall' },
                    { id: 'EXHIB-004', description: "Install all artifacts according to the layout, following strict handling protocols.", priority: 'High', riskLevel: 'High', proof: 'Installation Log', location: 'Exhibition Hall' },
                    { id: 'EXHIB-005', description: "Conduct a final walkthrough and snag list before the exhibition opens to the public.", priority: 'High', riskLevel: 'Medium', proof: 'Snag List Sign-off', location: 'Exhibition Hall' }
                ]
            },
            {
                title: "📚 Archive & Collection Management",
                department: "Collections",
                frequency: "Ongoing",
                role: "Registrar/Archivist",
                summary: "Manages the heart of the museum's collection, covering the process of acquiring new objects and maintaining existing records.",
                tasks: [
                    { id: 'ARCHIVE-001', description: "Process new acquisitions by assigning a unique accession number and creating a record in the collection management system.", priority: 'High', riskLevel: 'Medium', proof: 'New Accession Record', location: 'Registrar Office' },
                    { id: 'ARCHIVE-002', description: "Photograph and document the condition of all new acquisitions.", priority: 'High', riskLevel: 'Medium', proof: 'Condition Report & Photos', location: 'Photography Studio' },
                    { id: 'ARCHIVE-003', description: "Ensure all objects in storage are properly housed in archival-safe materials.", priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Collections Storage' },
                    { id: 'ARCHIVE-004', description: "Conduct a cycle count of a section of the collection to verify inventory accuracy.", priority: 'High', riskLevel: 'Medium', proof: 'Cycle Count Report', location: 'Collections Storage' },
                    { id: 'ARCHIVE-005', description: "Manage loan requests and track the movement of objects leaving the museum.", priority: 'High', riskLevel: 'High', proof: 'Loan Agreements & Tracking', location: 'Registrar Office' }
                ]
            },
            {
                title: "👨‍👩‍👧‍👦 Visitor Services & Accessibility",
                department: "Visitor Services",
                frequency: "Daily",
                role: "Visitor Services Manager",
                summary: "Ensures a positive and accessible experience for every visitor, from ticketing to navigating the galleries.",
                tasks: [
                    { id: 'VISITOR-001', description: "Ensure ticketing and front desk staff are knowledgeable about current exhibitions and daily programs.", priority: 'High', riskLevel: 'Low', proof: 'Morning Briefing Log', location: 'Front Desk' },
                    { id: 'VISITOR-002', description: "Check that all audio guides or other interpretive technology are charged and functional.", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Check Log', location: 'Front Desk' },
                    { id: 'VISITOR-003', description: "Verify that accessible routes are clear and any lifts or ramps are operational.", priority: 'High', riskLevel: 'High', proof: 'Accessibility Audit', location: 'Museum-wide' },
                    { id: 'VISITOR-004', description: "Monitor galleries to ensure they are not overcrowded and visitor flow is smooth.", priority: 'High', riskLevel: 'Medium', proof: 'Floor Supervisor Log', location: 'Galleries' },
                    { id: 'VISITOR-005', description: "Gather and review visitor feedback from comment cards or digital surveys.", priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Summary', location: 'Office' }
                ]
            },
            {
                title: "🔥 Heritage Building Fire Safety",
                department: "Safety/Facilities",
                frequency: "Weekly",
                role: "Chief Engineer",
                summary: "A specialized fire safety checklist for heritage structures, which often have unique challenges and restrictions.",
                tasks: [
                    { id: 'HERITAGE-FIRE-001', description: "Inspect wireless smoke and heat detectors to ensure they are online and battery levels are sufficient.", priority: 'High', riskLevel: 'High', proof: 'System Log', location: 'Control Room' },
                    { id: 'HERITAGE-FIRE-002', description: "Test fire suppression systems (e.g., gas-based systems for sensitive areas) to ensure they are armed and ready.", priority: 'High', riskLevel: 'High', proof: 'Suppression System Log', location: 'Control Room' },
                    { id: 'HERITAGE-FIRE-003', description: "Ensure evacuation routes are clear of any temporary exhibits or equipment.", priority: 'High', riskLevel: 'High', proof: 'Route Inspection Log', location: 'Museum-wide' },
                    { id: 'HERITAGE-FIRE-004', description: "Review the 'hot work' permit system to ensure no unauthorized work (welding, grinding) is happening.", priority: 'High', riskLevel: 'High', proof: 'Permit Audit', location: 'Office' },
                    { id: 'HERITAGE-FIRE-005', description: "Coordinate with the local fire brigade on the specific challenges of the heritage building.", priority: 'Medium', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Office' }
                ]
            },
            {
                title: "🐜 Pest Control Management",
                department: "Conservation/Facilities",
                frequency: "Weekly",
                role: "Conservator",
                summary: "A critical checklist for preventing pests that can cause irreparable damage to organic artifacts like wood, paper, and textiles.",
                tasks: [
                    { id: 'PEST-MUSEUM-001', description: "Inspect collections storage and gallery spaces for any signs of pest activity (insects, droppings).", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Areas' },
                    { id: 'PEST-MUSEUM-002', description: "Check and replace sticky traps and pheromone traps, logging any findings.", priority: 'High', riskLevel: 'High', proof: 'Trap Log', location: 'All Areas' },
                    { id: 'PEST-MUSEUM-003', description: "Quarantine and inspect all incoming objects (acquisitions, loans) for pests before they enter main storage.", priority: 'High', riskLevel: 'High', proof: 'Quarantine Log', location: 'Receiving Area' },
                    { id: 'PEST-MUSEUM-004', description: "Ensure that no food or drink is allowed in gallery or storage areas.", priority: 'High', riskLevel: 'High', proof: 'Policy Enforcement', location: 'Galleries' },
                    { id: 'PEST-MUSEUM-005', description: "Coordinate with pest control vendor to use only museum-safe, archival-friendly treatments.", priority: 'High', riskLevel: 'High', proof: 'Vendor Protocol Agreement', location: 'Office' }
                ]
            }
        ]
    }
]
