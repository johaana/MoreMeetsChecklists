
import React from "react";
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket, Wifi, UserCheck, BarChart3, Link, BrainCircuit, Bot, Syringe, DatabaseZap, Megaphone, Siren, Lock, KeyRound, Users, Banknote, Webcam, Bug, UserCog, PackageCheck, Ambulance, FileWarning, Milestone, DoorClosed, CircleDollarSign, Wind, Thermometer, UserCog2, Key, Router, Package, Watch, Drama, Barcode, Stethoscope, SyringeIcon, HeartPulse, Microscope, Bus, BookOpen, Car, Drill, SprayCan, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, Theater, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask, Store, Pill, Ship, Sun, Film, AnchorIcon, Clapperboard, MonitorPlay, Tv, Library, BriefcaseBusiness, ShieldCheck, Handshake, Route, CalendarDays, ClipboardList, HelpingHand, Map, DramaIcon, UserRound, Sparkles, Scale, Code, Video, Zap, ScanFace, HandPlatter, Cog, Scissors, Eye, Fish, Cloud } from "lucide-react";

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
            { text: "Guest room readiness & housekeeping.", icon: <Home /> },
            { text: "Food & beverage / kitchen hygiene (HACCP).", icon: <Utensils /> },
            { text: "Pool & spa safety.", icon: <LifeBuoy /> },
            { text: "Fire safety & evacuation drills.", icon: <Siren /> },
            { text: "Vendor & contractor control.", icon: <HardHat /> }
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
            title: "Aligned with Global Hospitality Standards",
            standards: [
                { name: "FSSAI / HACCP", description: "Food safety for kitchens and catering." },
                { name: "ISO 45001", description: "Occupational Health and Safety." },
                { name: "NFPA / NBC", description: "Fire safety and evacuation norms." },
                { name: "JCI Accreditation", description: "References for hospitality excellence." }
            ]
        },
        checklists: [
            {
                title: "Daily Room Readiness Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Supervisor",
                icon: <Home />,
                summary: "Housekeeping verifies: bed linen condition, minibar stock, in-room safe test, plumbing check, minibar expiry, TV/AC operation. Sign-off: housekeeper + supervisor (photo + timestamp).",
                tasks: [
                     { id: 'HRR-01', description: 'Check bed linen for stains and tears.', priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Guest Room' },
                     { id: 'HRR-02', description: 'Verify minibar stock against the standard list.', priority: 'High', riskLevel: 'Medium', proof: 'Stock Checklist', location: 'Guest Room' },
                     { id: 'HRR-03', description: 'Test the functionality of the in-room safe.', priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Guest Room' },
                     { id: 'HRR-04', description: 'Check all plumbing (taps, shower, toilet) for leaks and proper function.', priority: 'High', riskLevel: 'High', proof: 'Visual & Functional Check', location: 'Guest Room' },
                     { id: 'HRR-05', description: 'Audit minibar items for expiry dates.', priority: 'High', riskLevel: 'High', proof: 'Expiry Log', location: 'Guest Room' },
                     { id: 'HRR-06', description: 'Test TV and AC remote controls and functionality.', priority: 'High', riskLevel: 'Medium', proof: 'Functional Test', location: 'Guest Room' },
                ]
            },
            {
                title: "Pre-Service Kitchen HACCP Start-Up",
                department: "F&B",
                frequency: "Daily",
                role: "Head Chef",
                icon: <Utensils />,
                summary: "Verify cold-room temps, raw material receipts (with supplier docs), handwashing stations, knife sanitation, allergen segregation tags. Responsible: Head Chef, Kitchen Manager.",
                tasks: [
                    { id: 'HACCP-01', description: 'Log temperatures of all cold rooms and freezers.', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Kitchen' },
                    { id: 'HACCP-02', description: 'Verify raw material deliveries against supplier documentation and quality standards.', priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Bay' },
                    { id: 'HACCP-03', description: 'Ensure all handwashing stations are stocked with soap and sanitizer.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'HACCP-04', description: 'Check knife sanitation station for correct chemical concentration.', priority: 'High', riskLevel: 'High', proof: 'Sanitizer Log', location: 'Kitchen' },
                    { id: 'HACCP-05', description: 'Ensure allergen segregation is maintained in storage and prep areas.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Kitchen' },
                ]
            },
            {
                title: "Pool & Spa Daily Safety Inspection",
                department: "Recreation",
                frequency: "Daily",
                role: "Pool Supervisor",
                icon: <LifeBuoy />,
                summary: "Test chlorine/pH, lifeguard rosters, rescue equipment check, pool deck anti-slip visual check; record readings and corrective actions if out of range.",
                tasks: [
                    { id: 'POOL-01', description: 'Test and record chlorine and pH levels of the pool water.', priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'POOL-02', description: 'Verify lifeguard duty roster and presence.', priority: 'High', riskLevel: 'High', proof: 'Duty Roster', location: 'Poolside' },
                    { id: 'POOL-03', description: 'Check all rescue equipment (life rings, first aid kit) is present and in good condition.', priority: 'High', riskLevel: 'High', proof: 'Equipment Checklist', location: 'Poolside' },
                    { id: 'POOL-04', description: 'Inspect pool deck for slip hazards or damage.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection Log', location: 'Pool Deck' },
                    { id: 'POOL-05', description: 'Document any corrective actions taken for out-of-range readings.', priority: 'High', riskLevel: 'High', proof: 'Corrective Action Log', location: 'Pool Office' },
                ]
            },
             {
                title: "Preventive Maintenance (PM) Calendar",
                department: "Maintenance",
                frequency: "Scheduled",
                role: "Maintenance Manager",
                icon: <Wrench />,
                summary: "HVAC filter replacement, generator test, elevator monthly certification; each PM logged with vendor certificate and next due date.",
                tasks: [
                    { id: 'PM-01', description: 'Perform scheduled HVAC filter cleaning/replacement.', priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'HVAC Rooms' },
                    { id: 'PM-02', description: 'Conduct weekly load test of backup generators.', priority: 'High', riskLevel: 'High', proof: 'Generator Test Log', location: 'Generator Room' },
                    { id: 'PM-03', description: 'Verify monthly elevator certification and maintenance by vendor.', priority: 'High', riskLevel: 'High', proof: 'Vendor Certificate', location: 'Elevator Shafts' },
                    { id: 'PM-04', description: 'Log all preventive maintenance activities with vendor reports and schedule next due dates.', priority: 'High', riskLevel: 'Medium', proof: 'Master PM Log', location: 'Maintenance Office' },
                    { id: 'PM-05', description: 'Inspect water pumps and tanks for leaks and functionality.', priority: 'High', riskLevel: 'Medium', proof: 'Pump Inspection Log', location: 'Pump Room' },
                ]
            },
            {
                title: "Fire Safety & Evacuation Drill SOP",
                department: "Security",
                frequency: "Monthly/Quarterly",
                role: "Safety Officer",
                icon: <Siren />,
                summary: "Monthly extinguisher inspections, quarterly mock evacuation (attendance + time-to-evacuate), stairwell/exit clearance log.",
                tasks: [
                    { id: 'FIRE-01', description: 'Conduct monthly inspection of all fire extinguishers.', priority: 'High', riskLevel: 'High', proof: 'Extinguisher Log', location: 'Entire Property' },
                    { id: 'FIRE-02', description: 'Perform a quarterly mock evacuation drill with staff.', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Entire Property' },
                    { id: 'FIRE-03', description: 'Log attendance and time-to-evacuate for each drill.', priority: 'High', riskLevel: 'High', proof: 'Drill Attendance Sheet', location: 'Assembly Point' },
                    { id: 'FIRE-04', description: 'Perform daily checks of all stairwells and fire exits to ensure they are clear.', priority: 'High', riskLevel: 'High', proof: 'Exit Clearance Log', location: 'Entire Property' },
                    { id: 'FIRE-05', description: 'Test the public address system and emergency lighting weekly.', priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'Control Room' },
                ]
            },
            {
                title: "Vendor Access & Work Permit",
                department: "Security/Maintenance",
                frequency: "Per Vendor Visit",
                role: "Security Supervisor",
                icon: <HardHat />,
                summary: "Contractor ID, insurance copy, area-of-work permit, start/end time, tool inventory, supervisor escort.",
                tasks: [
                    { id: 'VENDOR-01', description: 'Verify contractor ID and check against approved vendor list.', priority: 'High', riskLevel: 'High', proof: 'Visitor Log', location: 'Security Gate' },
                    { id: 'VENDOR-02', description: 'Obtain and file a copy of the vendor\'s liability insurance.', priority: 'High', riskLevel: 'High', proof: 'Insurance Copy', location: 'Security Office' },
                    { id: 'VENDOR-03', description: 'Issue a time-bound work permit for a specific area.', priority: 'High', riskLevel: 'Medium', proof: 'Work Permit', location: 'Security Office' },
                    { id: 'VENDOR-04', description: 'Log all tools brought in and out by the contractor.', priority: 'High', riskLevel: 'Medium', proof: 'Tool Inventory Log', location: 'Security Gate' },
                    { id: 'VENDOR-05', description: 'Assign a supervisor to escort vendors in sensitive areas.', priority: 'High', riskLevel: 'High', proof: 'Escort Log', location: 'Various' },
                ]
            },
            {
                title: "Guest Incident Response",
                department: "Management/Security",
                frequency: "Per Incident",
                role: "Duty Manager",
                icon: <FileWarning />,
                summary: "Immediate triage steps, incident report with photos, escalation path (GM/legal/insurance), root-cause & corrective action.",
                tasks: [
                    { id: 'INC-01', description: 'Perform immediate triage (e.g., provide first aid, secure the area).', priority: 'High', riskLevel: 'High', proof: 'First Action Log', location: 'Incident Site' },
                    { id: 'INC-02', description: 'Fill out a detailed incident report with photos and witness statements.', priority: 'High', riskLevel: 'High', proof: 'Incident Report Form', location: 'Office' },
                    { id: 'INC-03', description: 'Follow the defined escalation path for notifying GM, legal, and insurance.', priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Office' },
                    { id: 'INC-04', description: 'Conduct a root-cause analysis (RCA) for the incident.', priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'Office' },
                    { id: 'INC-05', description: 'Develop and track a Corrective and Preventive Action (CAPA) plan.', priority: 'High', riskLevel: 'High', proof: 'CAPA Plan', location: 'Office' },
                ]
            },
            {
                title: "Front Office Operations",
                department: "Front Office",
                frequency: "Daily",
                role: "Front Office Manager",
                icon: <UserCheck />,
                summary: "Ensures smooth check-in/check-out, accurate billing, and exceptional guest service at the first point of contact.",
                tasks: [
                    { id: 'FO-01', description: 'Verify daily arrivals list against reservations.', priority: 'High', riskLevel: 'Medium', proof: 'PMS Report', location: 'Front Desk' },
                    { id: 'FO-02', description: 'Reconcile cash and credit card transactions at end of shift.', priority: 'High', riskLevel: 'High', proof: 'Shift Closing Report', location: 'Front Desk' },
                    { id: 'FO-03', description: 'Review guest feedback from the previous day and assign follow-up actions.', priority: 'High', riskLevel: 'Medium', proof: 'Feedback Log', location: 'Office' },
                    { id: 'FO-04', description: 'Check inventory of key cards and other front desk supplies.', priority: 'Medium', riskLevel: 'Low', proof: 'Inventory Sheet', location: 'Front Desk' },
                    { id: 'FO-05', description: 'Brief staff on VIP arrivals and special requests for the day.', priority: 'High', riskLevel: 'Medium', proof: 'Briefing Notes', location: 'Front Desk' },
                ]
            },
            {
                title: "Security & CCTV Monitoring",
                department: "Security",
                frequency: "Ongoing",
                role: "CCTV Operator",
                icon: <ScanFace />,
                summary: "Active monitoring of key areas, incident logging, and ensuring data retention policies are met to maintain a secure environment.",
                tasks: [
                    { id: 'SEC-CCTV-01', description: 'Perform hourly patrols or virtual tours of key areas via CCTV.', priority: 'High', riskLevel: 'High', proof: 'CCTV Log', location: 'Control Room' },
                    { id: 'SEC-CCTV-02', description: 'Log any suspicious activity with timestamps and descriptions.', priority: 'High', riskLevel: 'High', proof: 'Incident Log', location: 'Control Room' },
                    { id: 'SEC-CCTV-03', description: 'Verify all cameras are recording and have clear views.', priority: 'High', riskLevel: 'High', proof: 'System Health Check', location: 'Control Room' },
                    { id: 'SEC-CCTV-04', description: 'Ensure footage is backed up according to the data retention policy.', priority: 'High', riskLevel: 'High', proof: 'Backup Log', location: 'Server Room' },
                    { id: 'SEC-CCTV-05', description: 'Test panic alarm functionality weekly.', priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Various' },
                ]
            },
            {
                title: "Concierge & Guest Services",
                department: "Front Office",
                frequency: "Daily",
                role: "Head Concierge",
                icon: <HandPlatter />,
                summary: "Manages guest requests, transportation, and local recommendations to enhance the overall guest experience.",
                tasks: [
                    { id: 'CON-01', description: 'Review daily log of guest requests and ensure all have been actioned.', priority: 'High', riskLevel: 'Medium', proof: 'Request Log', location: 'Concierge Desk' },
                    { id: 'CON-02', description: 'Verify transportation bookings and confirm with vendors.', priority: 'High', riskLevel: 'Medium', proof: 'Booking Confirmations', location: 'Concierge Desk' },
                    { id: 'CON-03', description: 'Update information on local events, restaurants, and attractions.', priority: 'Medium', riskLevel: 'Low', proof: 'Information Binder', location: 'Concierge Desk' },
                    { id: 'CON-04', description: 'Check luggage storage area for security and correct tagging.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Bell Desk' },
                    { id: 'CON-05', description: 'Follow up with guests on special arrangements made.', priority: 'High', riskLevel: 'Medium', proof: 'Follow-up Call Log', location: 'Concierge Desk' },
                ]
            }
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
            { text: "Kitchen opening/closing & HACCP controls.", icon: <ShieldCheck /> },
            { text: "Cold chain & temperature monitoring.", icon: <Thermometer /> },
            { text: "Allergen management & menu labeling.", icon: <FileWarning /> },
            { text: "Waste & pest control.", icon: <Bug /> },
            { text: "Staff hygiene & training.", icon: <UserCheck /> }
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
            title: "Aligned with Food Safety Standards",
            standards: [
                { name: "FSSAI", description: "Complies with Food Safety and Standards Authority of India regulations." },
                { name: "HACCP", description: "Follows Hazard Analysis and Critical Control Points principles." },
                { name: "ISO 22000", description: "Adheres to international standards for food safety management." },
                { name: "FDA Food Code", description: "References guidelines from the U.S. Food and Drug Administration." }
            ]
        },
        checklists: [
            {
                title: "Kitchen Opening Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Head Chef",
                icon: <ShieldCheck />,
                summary: "Check refrigeration temp logs, separate prepping counters (veg/non-veg), verify cleaning chemicals are labeled, equipment safety guards fitted.",
                tasks: [
                    { id: 'KO-01', description: "Check and log temperatures of all refrigerators and freezers.", priority: 'High', riskLevel: 'High', proof: 'Temp Log', location: 'Kitchen' },
                    { id: 'KO-02', description: "Ensure separate cutting boards and utensils are used for veg/non-veg prep.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Prep Stations' },
                    { id: 'KO-03', description: "Verify all cleaning chemical bottles are correctly labeled.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Chemical Store' },
                    { id: 'KO-04', description: "Check that all equipment safety guards are in place and functional.", priority: 'High', riskLevel: 'High', proof: 'Equipment Check Log', location: 'Kitchen' },
                    { id: 'KO-05', description: "Ensure handwash stations are stocked with soap and sanitizer.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                ]
            },
            {
                title: "Cold Storage Monitoring SOP",
                department: "F&B",
                frequency: "Daily",
                role: "Kitchen Manager",
                icon: <Thermometer />,
                summary: "Continuous temperature log (digital preferred), manual twice-daily checks with signatures, alarm escalation to manager when outside threshold.",
                tasks: [
                    { id: 'CSM-01', description: "Log cold storage temperatures twice daily.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Cold Storage' },
                    { id: 'CSM-02', description: "Verify digital logs if available.", priority: 'High', riskLevel: 'High', proof: 'Digital Log Review', location: 'System' },
                    { id: 'CSM-03', description: "Test temperature alarms weekly.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Cold Storage' },
                    { id: 'CSM-04', description: "Follow escalation procedure for any temperature deviations.", priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Office' },
                    { id: 'CSM-05', description: "Check for any signs of frost buildup or door seal damage.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Inspection Log', location: 'Cold Storage' },
                ]
            },
            {
                title: "Allergen & Special Diet Order Flow",
                department: "Service/Kitchen",
                frequency: "Per Order",
                role: "Server/Chef",
                icon: <FileWarning />,
                summary: "Chef brief before service, labeled cooking lines, double-check on plate dispatch, written acknowledgement for special orders.",
                tasks: [
                    { id: 'ALLERGEN-01', description: "Brief chefs on any special diet orders before service begins.", priority: 'High', riskLevel: 'High', proof: 'Briefing Notes', location: 'Kitchen' },
                    { id: 'ALLERGEN-02', description: "Use designated, labeled cooking stations for allergen-free orders.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'ALLERGEN-03', description: "Manager to double-check special diet plates before they leave the kitchen.", priority: 'High', riskLevel: 'High', proof: 'Dispatch Log', location: 'Kitchen Pass' },
                    { id: 'ALLERGEN-08', description: "Maintain an up-to-date allergen matrix for all menu items.", priority: 'High', riskLevel: 'High', proof: 'Allergen Matrix Document', location: 'POS/Kitchen' },
                    { id: 'ALLERGEN-09', description: "Change gloves and wash hands before and after handling an allergen-free order.", priority: 'High', riskLevel: 'High', proof: 'CCTV/Supervisor Audit', location: 'Kitchen' },
                ]
            },
            {
                title: "Sanitation & Deep-Clean Schedule",
                department: "Hygiene",
                frequency: "Daily/Weekly",
                role: "Hygiene Supervisor",
                icon: <SprayCan />,
                summary: "Daily surface sanitization, weekly deep clean of hood & ducting, monthly pest control report signed by vendor.",
                tasks: [
                    { id: 'SANIT-01', description: "Log completion of daily surface sanitization.", priority: 'High', riskLevel: 'High', proof: 'Daily Cleaning Log', location: 'Kitchen/Dining' },
                    { id: 'SANIT-02', description: "Perform and log weekly deep clean of kitchen hoods and ducts.", priority: 'High', riskLevel: 'High', proof: 'Weekly Deep Clean Log', location: 'Kitchen' },
                    { id: 'SANIT-03', description: "Review and file monthly pest control vendor report.", priority: 'High', riskLevel: 'High', proof: 'Vendor Report', location: 'Office' },
                    { id: 'SANIT-04', description: "Check and clean grease traps weekly.", priority: 'High', riskLevel: 'Medium', proof: 'Grease Trap Log', location: 'Kitchen' },
                    { id: 'SANIT-05', description: "Ensure waste bins are emptied and sanitized daily.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Log', location: 'Waste Area' },
                ]
            },
            {
                title: "Service Incident Procedure",
                department: "Management",
                frequency: "Per Incident",
                role: "Restaurant Manager",
                icon: <FileWarning />,
                summary: "Customer complaint handling, documentation, disposal/quarantine of suspected batch, notification to health authority if required.",
                tasks: [
                    { id: 'INC-REST-01', description: "Document customer complaint in the incident log.", priority: 'High', riskLevel: 'High', proof: 'Incident Log', location: 'Office' },
                    { id: 'INC-REST-02', description: "Quarantine and label any suspected contaminated food batch.", priority: 'High', riskLevel: 'High', proof: 'Quarantine Log & Photo', location: 'Kitchen' },
                    { id: 'INC-REST-03', description: "Notify the local health authority if the incident is severe (e.g., multiple cases of food poisoning).", priority: 'High', riskLevel: 'High', proof: 'Notification Record', location: 'Office' },
                    { id: 'INC-REST-04', description: "Offer a resolution to the guest (e.g., refund, complimentary meal) and document it.", priority: 'High', riskLevel: 'Medium', proof: 'Guest Resolution Log', location: 'Office' },
                    { id: 'INC-REST-05', description: "Conduct a root cause analysis of the incident with the kitchen team.", priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'Office' },
                ]
            },
             {
                title: "Raw Material Receiving",
                department: "Stores/Kitchen",
                frequency: "Per Delivery",
                role: "Storekeeper",
                icon: <PackageCheck />,
                summary: "Check for FSSAI license, vehicle condition, product temperature, and reject non-compliant items with documentation.",
                tasks: [
                    { id: 'RM-01', description: "Verify vendor FSSAI license is valid.", priority: 'High', riskLevel: 'High', proof: 'Vendor File', location: 'Receiving' },
                    { id: 'RM-02', description: "Inspect delivery vehicle for cleanliness and temperature control.", priority: 'High', riskLevel: 'High', proof: 'Vehicle Inspection Log', location: 'Receiving' },
                    { id: 'RM-03', description: "Check temperature of perishable goods upon arrival.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Receiving' },
                    { id: 'RM-04', description: "Reject and document any items that do not meet quality standards.", priority: 'High', riskLevel: 'High', proof: 'Rejection Note', location: 'Receiving' },
                    { id: 'RM-05', description: "Ensure goods are moved to appropriate storage immediately after receipt.", priority: 'High', riskLevel: 'Medium', proof: 'CCTV review', location: 'Receiving/Storage' },
                ]
            },
            {
                title: "Staff Hygiene & Training",
                department: "HR/Hygiene",
                frequency: "Ongoing",
                role: "Hygiene Officer",
                icon: <UserCheck />,
                summary: "Daily uniform check, handwashing audit, monthly hygiene training, and health screening for new staff.",
                tasks: [
                    { id: 'SH-01', description: "Conduct daily checks for clean uniforms, nails, and hairnets.", priority: 'High', riskLevel: 'Medium', proof: 'Daily Staff Audit Log', location: 'Entry Point' },
                    { id: 'SH-02', description: "Perform random audits of handwashing procedures.", priority: 'High', riskLevel: 'High', proof: 'Handwashing Audit', location: 'Kitchen' },
                    { id: 'SH-03', description: "Conduct and document monthly refresher training on hygiene.", priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'Training Room' },
                    { id: 'SH-04', description: "Screen new staff for any communicable diseases.", priority: 'High', riskLevel: 'High', proof: 'Medical Fitness Certificate', location: 'HR File' },
                    { id: 'SH-05', description: "Ensure 'Staff Only' areas are clearly marked and access is restricted.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual check and signage', location: 'Back of House' },
                ]
            },
            {
                title: "Waste Management & Pest Control",
                department: "Hygiene",
                frequency: "Daily/Weekly",
                role: "Supervisor",
                icon: <Bug />,
                summary: "Segregated waste disposal, bin cleaning schedule, weekly pest trap inspection, and vendor service reports.",
                tasks: [
                    { id: 'WP-01', description: "Ensure waste is segregated into designated bins (wet, dry, recyclable).", priority: 'High', riskLevel: 'Medium', proof: 'Waste Segregation Audit', location: 'Waste Area' },
                    { id: 'WP-02', description: "Follow a schedule for cleaning and sanitizing all waste bins.", priority: 'High', riskLevel: 'Medium', proof: 'Bin Cleaning Log', location: 'Waste Area' },
                    { id: 'WP-03', description: "Inspect pest control traps and bait stations weekly.", priority: 'High', riskLevel: 'High', proof: 'Pest Trap Log', location: 'Various' },
                    { id: 'WP-04', description: "Review and file the monthly service report from the pest control vendor.", priority: 'High', riskLevel: 'High', proof: 'Vendor Report', location: 'Office' },
                    { id: 'WP-05', description: "Keep external waste area clean to deter pests.", priority: 'High', riskLevel: 'High', proof: 'Photo Log', location: 'External Area' },
                ]
            },
            {
                title: "Front of House (FOH) Service Standards",
                department: "Service",
                frequency: "Daily",
                role: "Restaurant Manager",
                icon: <HandPlatter />,
                summary: "Table setup check, staff briefing on specials, POS readiness, and restroom hygiene audit before opening.",
                tasks: [
                    { id: 'FOH-01', description: "Inspect all tables to ensure they are set according to standard.", priority: 'High', riskLevel: 'Low', proof: 'Visual Audit', location: 'Dining Area' },
                    { id: 'FOH-02', description: "Brief service staff on daily specials, menu changes, and 86'd items.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Notes', location: 'Pre-service Huddle' },
                    { id: 'FOH-03', description: "Verify all POS terminals are online and functional.", priority: 'High', riskLevel: 'Medium', proof: 'System Check', location: 'POS Stations' },
                    { id: 'FOH-04', description: "Conduct a pre-opening check of restroom cleanliness and supplies.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Checklist', location: 'Restrooms' },
                    { id: 'FOH-05', description: "Ensure music and lighting levels are set to the correct ambiance.", priority: 'Medium', riskLevel: 'Low', proof: 'Ambiance Check Log', location: 'Dining Area' },
                ]
            },
            {
                title: "Closing & End-of-Day Procedure",
                department: "Management",
                frequency: "Daily",
                role: "Closing Manager",
                icon: <DoorClosed />,
                summary: "Cash reconciliation, kitchen shutdown, gas line check, securing premises, and manager's closing report.",
                tasks: [
                    { id: 'EOD-01', description: "Reconcile all cash, card, and digital payments against POS sales.", priority: 'High', riskLevel: 'High', proof: 'Sales Reconciliation Report', location: 'Office' },
                    { id: 'EOD-02', description: "Ensure all kitchen equipment is properly shut down and cleaned.", priority: 'High', riskLevel: 'High', proof: 'Kitchen Closing Checklist', location: 'Kitchen' },
                    { id: 'EOD-03', description: "Verify that the main gas line to the kitchen is turned off.", priority: 'High', riskLevel: 'High', proof: 'Gas Valve Check Log', location: 'Kitchen' },
                    { id: 'EOD-04', description: "Secure all doors and windows, and activate the security alarm.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Premises' },
                    { id: 'EOD-05', description: "Complete the manager's closing report, noting any incidents or issues.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Logbook', location: 'Office' },
                ]
            }
        ]
    },
    // --- Retail ---
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
        globalStandards: {
            title: "Aligned with Retail Best Practices",
            standards: [
                { name: "ISO 9001", description: "For quality management and customer satisfaction." },
                { name: "Shops & Establishment Act", description: "Ensures compliance with local labor and operational laws." }
            ]
        },
        checklists: [
            {
                title: "Opening Checklist",
                department: "Operations",
                frequency: "Daily",
                role: "Store Manager",
                icon: <Key />,
                summary: "POS booted, cash float verified, CCTV working, store displays checked against VM planogram, fitting room clean.",
                tasks: [
                    { id: 'FA-OPEN-01', description: 'Boot up POS systems and verify connectivity.', priority: 'High', riskLevel: 'Medium', proof: 'POS Login Screen', location: 'Cash Desk' },
                    { id: 'FA-OPEN-02', description: 'Verify and log the opening cash float.', priority: 'High', riskLevel: 'High', proof: 'Float Log', location: 'Cash Office' },
                    { id: 'FA-OPEN-03', description: 'Check CCTV system is recording and all cameras are operational.', priority: 'High', riskLevel: 'High', proof: 'CCTV Monitor', location: 'Security Office' },
                    { id: 'FA-OPEN-04', description: 'Check store displays against the current Visual Merchandising planogram.', priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'FA-OPEN-05', description: 'Ensure fitting rooms are clean and clear of merchandise.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Fitting Rooms' },
                ]
            },
            {
                title: "VM & Display Audit",
                department: "Merchandising",
                frequency: "Weekly",
                role: "Visual Merchandiser",
                icon: <GalleryVertical />,
                summary: "Weekly checklist to verify brand standards: mannequin styling, lighting, signage, safety of fixtures (no loose glass).",
                tasks: [
                    { id: 'VM-AUDIT-01', description: 'Ensure all mannequins are styled according to the weekly VM guide.', priority: 'High', riskLevel: 'Low', proof: 'Photo of Mannequins', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-02', description: 'Check all display lighting is functional and correctly focused.', priority: 'High', riskLevel: 'Medium', proof: 'Lighting Audit', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-03', description: 'Verify all promotional and price signage is accurate and in good condition.', priority: 'High', riskLevel: 'Medium', proof: 'Signage Check', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-04', description: 'Inspect all fixtures for safety, ensuring no loose parts or sharp edges.', priority: 'High', riskLevel: 'High', proof: 'Fixture Safety Log', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-05', description: 'Ensure window displays are clean and compelling.', priority: 'High', riskLevel: 'Low', proof: 'Photo of Window', location: 'Storefront' },
                ]
            },
            {
                title: "Inventory Reconciliation SOP",
                department: "Inventory",
                frequency: "Scheduled",
                role: "Inventory Manager",
                icon: <Barcode />,
                summary: "Cycle counts schedule (daily high-value, weekly others), variance investigation steps, supervisor sign-off for adjustments.",
                tasks: [
                    { id: 'INV-RECON-01', description: 'Perform daily cycle counts on designated high-value items.', priority: 'High', riskLevel: 'High', proof: 'Daily Count Sheet', location: 'Stockroom/Floor' },
                    { id: 'INV-RECON-02', description: 'Conduct scheduled weekly cycle counts for other categories.', priority: 'High', riskLevel: 'Medium', proof: 'Weekly Count Sheet', location: 'Stockroom/Floor' },
                    { id: 'INV-RECON-03', description: 'Investigate any count variances within 24 hours.', priority: 'High', riskLevel: 'High', proof: 'Variance Report', location: 'Office' },
                    { id: 'INV-RECON-04', description: 'Process inventory adjustments only with supervisor sign-off.', priority: 'High', riskLevel: 'High', proof: 'Signed Adjustment Form', location: 'System' },
                    { id: 'INV-RECON-05', description: 'Analyze shrinkage report monthly to identify trends.', priority: 'High', riskLevel: 'High', proof: 'Shrinkage Analysis', location: 'Office' },
                ]
            },
            {
                title: "Trial Room Procedure",
                department: "Sales/Security",
                frequency: "Ongoing",
                role: "Sales Associate",
                icon: <DoorClosed />,
                summary: "Limit number of items per trial, staff monitor trial area, sanitization of trials and hangers after use, lost property log.",
                tasks: [
                    { id: 'TRIAL-01', description: 'Limit customers to a set number of items per trial.', priority: 'High', riskLevel: 'High', proof: 'Policy Signage', location: 'Fitting Room Entrance' },
                    { id: 'TRIAL-02', description: 'Staff to be present at fitting room entrance to monitor items.', priority: 'High', riskLevel: 'High', proof: 'Staff Roster', location: 'Fitting Room Area' },
                    { id: 'TRIAL-03', description: 'Check and sanitize each trial room after use.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Fitting Rooms' },
                    { id: 'TRIAL-04', description: 'Log any lost property found in the trial rooms.', priority: 'Medium', riskLevel: 'Low', proof: 'Lost Property Log', location: 'Cash Desk' },
                    { id: 'TRIAL-05', description: 'Inspect rooms for hidden tags or security device tampering.', priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Fitting Rooms' },
                ]
            },
            {
                title: "Return & Exchange SOP",
                department: "Customer Service",
                frequency: "Per Transaction",
                role: "Store Manager",
                icon: <PackageCheck />,
                summary: "Verification of receipt & SKU, product inspection, manager approval for high-value returns (>threshold), photo evidence for suspicious returns.",
                tasks: [
                    { id: 'RETURN-01', description: 'Verify original receipt and SKU for all returns/exchanges.', priority: 'High', riskLevel: 'High', proof: 'Receipt Check', location: 'POS' },
                    { id: 'RETURN-02', description: 'Inspect returned product for wear, damage, or tag removal.', priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'POS' },
                    { id: 'RETURN-03', description: 'Require manager approval for returns above a specified value.', priority: 'High', riskLevel: 'High', proof: 'Manager Sign-off', location: 'POS' },
                    { id: 'RETURN-04', description: 'Take photo evidence for any suspicious or high-value returns.', priority: 'Medium', riskLevel: 'High', proof: 'Photo Log', location: 'POS' },
                    { id: 'RETURN-05', description: 'Process refund/exchange in POS system accurately.', priority: 'High', riskLevel: 'High', proof: 'POS Transaction ID', location: 'POS' },
                ]
            },
            {
                title: "Loss Prevention & Security",
                department: "Security",
                frequency: "Daily",
                role: "Security Supervisor",
                icon: <Shield />,
                summary: "Daily checks of EAS gates, CCTV blind spots, and security tag compliance on high-value items.",
                tasks: [
                    { id: 'LP-01', description: 'Test Electronic Article Surveillance (EAS) gates at opening.', priority: 'High', riskLevel: 'High', proof: 'EAS Test Log', location: 'Store Entrance' },
                    { id: 'LP-02', description: 'Review CCTV footage for blind spots or camera tampering.', priority: 'High', riskLevel: 'High', proof: 'CCTV Review Log', location: 'Security Office' },
                    { id: 'LP-03', description: 'Audit high-value items to ensure security tags are correctly attached.', priority: 'High', riskLevel: 'High', proof: 'Tag Audit', location: 'Sales Floor' },
                    { id: 'LP-04', description: 'Train staff on identifying and reporting suspicious behavior.', priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Office' },
                    { id: 'LP-05', description: 'Secure all fire exits and staff entrances.', priority: 'High', riskLevel: 'High', proof: 'Exit Check Log', location: 'Entire Store' },
                ]
            },
            {
                title: "Cash Handling & Reconciliation",
                department: "Finance/Operations",
                frequency: "Daily",
                role: "Head Cashier",
                icon: <DollarSign />,
                summary: "End-of-day POS reconciliation, cash deposit procedures, and counterfeit checks.",
                tasks: [
                    { id: 'CH-01', description: 'Reconcile cash drawer against POS report at end of shift.', priority: 'High', riskLevel: 'High', proof: 'Shift Reconciliation Form', location: 'Cash Office' },
                    { id: 'CH-02', description: 'Prepare and log daily cash deposits for bank.', priority: 'High', riskLevel: 'High', proof: 'Deposit Slip', location: 'Cash Office' },
                    { id: 'CH-03', description: 'Use counterfeit detection methods for all large bills.', priority: 'High', riskLevel: 'High', proof: 'Counterfeit Log', location: 'POS' },
                    { id: 'CH-04', description: 'Store cash securely in a locked safe.', priority: 'High', riskLevel: 'High', proof: 'Safe Access Log', location: 'Cash Office' },
                    { id: 'CH-05', description: 'Manager to verify and sign off on all daily cash reports.', priority: 'High', riskLevel: 'High', proof: 'Signed Report', location: 'Office' },
                ]
            },
            {
                title: "Seasonal Inventory Management",
                department: "Merchandising",
                frequency: "Seasonal",
                role: "Merchandiser",
                icon: <Package />,
                summary: "Plan for incoming seasonal stock, execute markdowns on old stock, and manage stock consolidation.",
                tasks: [
                    { id: 'SIM-01', description: 'Plan storage space for incoming seasonal collections.', priority: 'High', riskLevel: 'Medium', proof: 'Storage Plan', location: 'Stockroom' },
                    { id: 'SIM-02', description: 'Implement scheduled markdowns for end-of-season items.', priority: 'High', riskLevel: 'Medium', proof: 'Markdown Schedule', location: 'Office' },
                    { id: 'SIM-03', description: 'Consolidate last-season stock to a designated sale area.', priority: 'High', riskLevel: 'Low', proof: 'Photo of Sale Area', location: 'Sales Floor' },
                    { id: 'SIM-04', description: 'Analyze sell-through rates to inform future buying.', priority: 'High', riskLevel: 'Medium', proof: 'Sell-Through Report', location: 'Office' },
                    { id: 'SIM-05', description: 'Process returns to vendor for any unsold guaranteed stock.', priority: 'High', riskLevel: 'Medium', proof: 'Vendor Return Forms', location: 'Office' },
                ]
            },
            {
                title: "Omni-Channel Operations",
                department: "Operations",
                frequency: "Daily",
                role: "Store Manager",
                icon: <Link />,
                summary: "Procedures for handling 'Click & Collect' orders, processing online returns in-store, and managing store-fulfilled online orders.",
                tasks: [
                    { id: 'OC-01', description: 'Check system for new Click & Collect orders every hour.', priority: 'High', riskLevel: 'Medium', proof: 'System Log', location: 'System' },
                    { id: 'OC-02', description: 'Pick and pack orders within the defined SLA.', priority: 'High', riskLevel: 'Medium', proof: 'Picking Ticket', location: 'Stockroom' },
                    { id: 'OC-03', description: 'Process online returns according to the return policy.', priority: 'High', riskLevel: 'High', proof: 'Return Transaction Log', location: 'POS' },
                    { id: 'OC-04', description: 'Manage inventory for store-fulfilled online orders to avoid stockouts.', priority: 'High', riskLevel: 'High', proof: 'Inventory Sync Report', location: 'System' },
                    { id: 'OC-05', description: 'Train staff on all omni-channel processes.', priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Office' },
                ]
            },
            {
                title: "Staff Training & Performance",
                department: "HR/Management",
                frequency: "Monthly",
                role: "Store Manager",
                icon: <Trophy />,
                summary: "Monthly reviews of sales targets, product knowledge training, and customer service skill development.",
                tasks: [
                    { id: 'STP-01', description: 'Conduct monthly performance reviews with each sales associate.', priority: 'High', riskLevel: 'Medium', proof: 'Review Forms', location: 'Office' },
                    { id: 'STP-02', description: 'Hold weekly training sessions on new products and collections.', priority: 'High', riskLevel: 'Medium', proof: 'Training Calendar', location: 'Store' },
                    { id: 'STP-03', description: 'Role-play customer service scenarios to improve skills.', priority: 'Medium', riskLevel: 'Low', proof: 'Training Activity Log', location: 'Store' },
                    { id: 'STP-04', description: 'Track sales performance against individual and store targets.', priority: 'High', riskLevel: 'Medium', proof: 'Sales Dashboard', location: 'System' },
                    { id: 'STP-05', description: 'Recognize and reward top-performing staff.', priority: 'High', riskLevel: 'Low', proof: 'Recognition Program', location: 'Store' },
                ]
            }
        ]
    },
    {
        id: 'jewelry_and_luxury_retail',
        title: "Jewelry & Luxury Retail",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "A specialized toolkit for high-value retail, focusing on vault security, inventory control, and preventing sophisticated fraud.",
        icon: <Gem />,
        badgeText: "High Value",
        badgeVariant: "accent",
        bestseller: true,
        whoIsItFor: ["Jewelry Store Owners", "Luxury Brand Managers", "Asset Protection Directors", "Heads of Retail"],
        sampleItems: [
            { text: "Vault access control & dual verification.", icon: <Lock /> },
            { text: "Display case & overnight security.", icon: <Shield /> },
            { text: "High-value transaction & payment verification.", icon: <CircleDollarSign /> },
            { text: "NEW: Watch & serialized item management.", icon: <Watch /> },
        ],
        globalStandards: {
            title: "Aligned with High-Value Retail Security Standards",
            standards: [
                { name: "Jewelers' Security Alliance", description: "Best practices for crime prevention in the jewelry industry." },
                { name: "PCI DSS", description: "Security standards for handling payment card information." },
                { name: "ISO 28000", description: "For supply chain security management." }
            ]
        },
        checklists: [
            {
                title: "Opening & Closing Security Protocol",
                department: "Security/Operations",
                frequency: "Daily",
                role: "Store Manager",
                icon: <KeyRound />,
                summary: "Dual-person vault access, alarm deactivation/activation log, display case inventory count, CCTV operational check.",
                tasks: [
                    { id: 'JLR-SEC-01', description: 'Perform dual-person vault opening and closing procedure.', priority: 'High', riskLevel: 'High', proof: 'Vault Access Log', location: 'Vault' },
                    { id: 'JLR-SEC-02', description: 'Log deactivation and activation of the main security alarm.', priority: 'High', riskLevel: 'High', proof: 'Alarm Log', location: 'Security Panel' },
                    { id: 'JLR-SEC-03', description: 'Conduct a full inventory count of all display cases at opening and closing.', priority: 'High', riskLevel: 'High', proof: 'Display Inventory Sheet', location: 'Sales Floor' },
                    { id: 'JLR-SEC-04', description: 'Verify all CCTV cameras are recording and have unobstructed views.', priority: 'High', riskLevel: 'High', proof: 'CCTV Check Log', location: 'Security Room' },
                    { id: 'JLR-SEC-05', description: 'Test silent panic alarms daily before opening.', priority: 'High', riskLevel: 'High', proof: 'Panic Alarm Test Log', location: 'Security Office' },
                ]
            },
            {
                title: "High-Value Transaction SOP",
                department: "Sales",
                frequency: "Per Transaction",
                role: "Senior Sales Associate",
                icon: <CircleDollarSign />,
                summary: "ID verification for large purchases, secondary manager approval, counterfeit currency checks, fraud flags for payment processing.",
                tasks: [
                    { id: 'JLR-SALE-01', description: "Verify government-issued ID for any purchase over a set threshold.", priority: 'High', riskLevel: 'High', proof: 'ID Copy', location: 'POS' },
                    { id: 'JLR-SALE-02', description: "Require secondary manager approval for very large or unusual transactions.", priority: 'High', riskLevel: 'High', proof: 'Manager Sign-off', location: 'POS' },
                    { id: 'JLR-SALE-03', description: "Use counterfeit detection pens/machines for all large cash transactions.", priority: 'High', riskLevel: 'High', proof: 'Counterfeit Check Log', location: 'POS' },
                    { id: 'JLR-SALE-04', description: "Follow specific protocols for verifying digital payments and flagging potential fraud.", priority: 'High', riskLevel: 'High', proof: 'Payment Verification Checklist', location: 'POS' },
                    { id: 'JLR-SALE-05', description: 'Log details of any suspicious transaction attempts.', priority: 'High', riskLevel: 'High', proof: 'Suspicious Activity Report', location: 'Office' },
                ]
            },
            {
                title: "Serialized Item & Watch Management",
                department: "Inventory",
                frequency: "Ongoing",
                role: "Inventory Manager",
                icon: <Watch />,
                summary: "Track unique serial numbers from intake to sale, secure storage protocols, and detailed logs for any items sent for repair or certification.",
                tasks: [
                    { id: 'JLR-INV-01', description: "Log the unique serial number of every watch and serialized item upon receipt.", priority: 'High', riskLevel: 'High', proof: 'GRN Serial Log', location: 'Receiving' },
                    { id: 'JLR-INV-02', description: "Store high-value watches and items in a separate, access-controlled area.", priority: 'High', riskLevel: 'High', proof: 'Secure Storage Log', location: 'Vault/Safe' },
                    { id: 'JLR-INV-03', description: "Maintain a detailed chain-of-custody log for items sent out for repair or certification.", priority: 'High', riskLevel: 'High', proof: 'Chain of Custody Form', location: 'Office' },
                    { id: 'JLR-INV-04', description: 'Conduct weekly audits of serialized inventory against system records.', priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'System' },
                    { id: 'JLR-INV-05', description: 'Match serial number at point of sale to prevent swapping.', priority: 'High', riskLevel: 'High', proof: 'POS Scan Log', location: 'POS' },
                ]
            },
            {
                title: "Display Case & Vault Security",
                department: "Security",
                frequency: "Daily",
                role: "Security Supervisor",
                icon: <Shield />,
                summary: "Check locks on all display cases, verify vault door is secured after hours, test motion sensors and panic buttons.",
                tasks: [
                    { id: 'JLR-DISP-01', description: 'Physically check the locks on every display case at the end of the day.', priority: 'High', riskLevel: 'High', proof: 'Lock Check Log', location: 'Sales Floor' },
                    { id: 'JLR-DISP-02', description: 'Verify the vault door is properly locked and secured after closing.', priority: 'High', riskLevel: 'High', proof: 'Vault Security Log', location: 'Vault' },
                    { id: 'JLR-DISP-03', description: 'Test motion sensors and panic buttons weekly.', priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Store-wide' },
                    { id: 'JLR-DISP-04', description: 'Ensure all keys are accounted for and stored securely.', priority: 'High', riskLevel: 'High', proof: 'Key Log', location: 'Safe' },
                    { id: 'JLR-DISP-05', description: 'Audit display lighting to ensure all items are well-illuminated.', priority: 'Medium', riskLevel: 'Low', proof: 'Lighting Check', location: 'Sales Floor' },
                ]
            },
            {
                title: "Inventory Auditing (Cycle Count)",
                department: "Inventory",
                frequency: "Daily",
                role: "Auditor",
                icon: <Barcode />,
                summary: "Daily random cycle counts, discrepancy investigation, and secure handling of stock during counts.",
                tasks: [
                    { id: 'JA-AUDIT-01', description: 'Perform daily random cycle counts on selected high-value categories.', priority: 'High', riskLevel: 'High', proof: 'Cycle Count Sheets', location: 'Sales Floor/Vault' },
                    { id: 'JA-AUDIT-02', description: 'Investigate and resolve any discrepancies within 24 hours.', priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Office' },
                    { id: 'JA-AUDIT-03', description: 'Conduct counts in teams of two for high-value areas.', priority: 'High', riskLevel: 'High', proof: 'Count Team Roster', location: 'Office' },
                    { id: 'JA-AUDIT-04', description: 'Secure the area being audited to prevent stock movement.', priority: 'High', riskLevel: 'Medium', proof: 'Audit Procedure', location: 'Audit Area' },
                    { id: 'JA-AUDIT-05', description: 'Reconcile physical counts with system inventory and report to management.', priority: 'High', riskLevel: 'High', proof: 'Final Audit Report', location: 'Office' },
                ]
            },
            {
                title: "Customer Verification",
                department: "Sales",
                frequency: "Per High-Value Transaction",
                role: "Senior Sales Associate",
                icon: <UserCheck />,
                summary: "Protocols for verifying identity of high-value purchasers to prevent fraud and comply with regulations.",
                tasks: [
                    { id: 'CV-01', description: 'Collect and verify government-issued photo ID for purchases over the KYC threshold.', priority: 'High', riskLevel: 'High', proof: 'ID Scan/Copy', location: 'POS' },
                    { id: 'CV-02', description: 'Match the name on the credit card to the customer\'s ID.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'POS' },
                    { id: 'CV-03', description: 'For large transactions, perform a quick online search to verify customer profile.', priority: 'Medium', riskLevel: 'Medium', proof: 'Search Log', location: 'POS' },
                    { id: 'CV-04', description: 'Document all verification steps in the customer\'s transaction record.', priority: 'High', riskLevel: 'High', proof: 'Transaction Notes', location: 'CRM/POS' },
                    { id: 'CV-05', description: 'Flag any suspicious behavior for a manager\'s review before proceeding.', priority: 'High', riskLevel: 'High', proof: 'Manager Alert', location: 'POS' },
                ]
            },
            {
                title: "Repair & Service Management",
                department: "After-Sales",
                frequency: "Per Item",
                role: "Service Manager",
                icon: <Wrench />,
                summary: "Secure intake, detailed job sheets, customer approvals for work, and secure return of serviced items.",
                tasks: [
                    { id: 'RSM-01', description: 'Photograph and document the condition of every item received for repair.', priority: 'High', riskLevel: 'High', proof: 'Intake Form with Photos', location: 'Service Desk' },
                    { id: 'RSM-02', description: 'Create a detailed job sheet with estimated costs and timeline.', priority: 'High', riskLevel: 'Medium', proof: 'Job Sheet', location: 'System' },
                    { id: 'RSM-03', description: 'Obtain written customer approval before proceeding with any work.', priority: 'High', riskLevel: 'High', proof: 'Signed Approval', location: 'System' },
                    { id: 'RSM-04', description: 'Store all customer items in a dedicated, secure, and insured location.', priority: 'High', riskLevel: 'High', proof: 'Storage Log', location: 'Safe' },
                    { id: 'RSM-05', description: 'Verify customer identity upon collection of the serviced item.', priority: 'High', riskLevel: 'High', proof: 'ID Check Log', location: 'Service Desk' },
                ]
            },
            {
                title: "Staff Training on Security Protocols",
                department: "HR/Security",
                frequency: "Quarterly",
                role: "Security Manager",
                icon: <Users />,
                summary: "Regular training on robbery response, identifying suspicious behavior, and handling high-value items.",
                tasks: [
                    { id: 'STSP-01', description: 'Conduct quarterly training on robbery response procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Attendance Sheet', location: 'Training Room' },
                    { id: 'STSP-02', description: 'Train staff to identify common signs of suspicious customer behavior.', priority: 'High', riskLevel: 'High', proof: 'Training Module', location: 'Training Room' },
                    { id: 'STSP-03', description: 'Drill staff on the correct procedure for showing high-value items to customers.', priority: 'High', riskLevel: 'High', proof: 'Drill Log', location: 'Sales Floor' },
                    { id: 'STSP-04', description: 'Review recent security incidents or attempts with the team.', priority: 'Medium', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Office' },
                    { id: 'STSP-05', description: 'Test staff knowledge with quizzes on security protocols.', priority: 'Medium', riskLevel: 'Medium', proof: 'Quiz Results', location: 'System' },
                ]
            },
            {
                title: "Vendor & Supplier Verification",
                department: "Procurement",
                frequency: "Per New Vendor",
                role: "Procurement Manager",
                icon: <Handshake />,
                summary: "Background checks and verification for all suppliers of high-value goods to prevent sourcing of conflict minerals or stolen items.",
                tasks: [
                    { id: 'VSV-01', description: 'Conduct a thorough background check on all new high-value suppliers.', priority: 'High', riskLevel: 'High', proof: 'Background Check Report', location: 'Procurement File' },
                    { id: 'VSV-02', description: 'Verify supplier compliance with anti-money laundering (AML) regulations.', priority: 'High', riskLevel: 'High', proof: 'AML Compliance Certificate', location: 'Procurement File' },
                    { id: 'VSV-03', description: 'Require certification ensuring metals and gems are conflict-free (e.g., Kimberley Process).', priority: 'High', riskLevel: 'High', proof: 'Supplier Certification', location: 'Procurement File' },
                    { id: 'VSV-04', description: 'Establish a secure protocol for all high-value deliveries.', priority: 'High', riskLevel: 'High', proof: 'Delivery Protocol Document', location: 'Procurement Office' },
                    { id: 'VSV-05', description: 'Periodically audit suppliers to ensure ongoing compliance.', priority: 'Medium', riskLevel: 'High', proof: 'Supplier Audit Report', location: 'Procurement File' },
                ]
            },
            {
                title: "Insurance & Compliance",
                department: "Finance/Legal",
                frequency: "Annually",
                role: "Compliance Officer",
                icon: <FileCheck />,
                summary: "Annual review of insurance policies, compliance with local laws, and documentation for audits.",
                tasks: [
                    { id: 'IC-01', description: 'Review all insurance policies annually to ensure adequate coverage.', priority: 'High', riskLevel: 'High', proof: 'Insurance Policy Review', location: 'Finance Office' },
                    { id: 'IC-02', description: 'Verify compliance with all local laws regarding the sale of precious metals and gems.', priority: 'High', riskLevel: 'High', proof: 'Legal Compliance Checklist', location: 'Legal Office' },
                    { id: 'IC-03', description: 'Maintain all necessary documentation for potential police or tax audits.', priority: 'High', riskLevel: 'High', proof: 'Audit File', location: 'Office' },
                    { id: 'IC-04', description: 'Ensure BIS hallmarking compliance for all relevant jewelry.', priority: 'High', riskLevel: 'High', proof: 'Hallmarking Records', location: 'Inventory' },
                    { id: 'IC-05', description: 'Track and comply with any changes in import/export regulations.', priority: 'High', riskLevel: 'High', proof: 'Regulatory Update Log', location: 'Office' },
                ]
            }
        ]
    },
    {
        id: 'electronics_showroom_pack',
        title: "Electronics Showroom Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Retail",
        description: "A comprehensive operational pack for electronics retailers to ensure safety, asset security, and a superior customer experience.",
        icon: <Tv />,
        whoIsItFor: ["Electronics Store Owners", "Showroom Managers", "Heads of Retail Operations", "Asset Protection Managers"],
        sampleItems: [
            { text: "Demo unit safety & electrical checks.", icon: <Zap /> },
            { text: "Asset tagging & warranty management.", icon: <Barcode /> },
            { text: "E-waste handling & disposal.", icon: <Recycle /> },
            { text: "POS & payment security.", icon: <ShieldCheck /> },
            { text: "Customer demo & returns SOP.", icon: <UserCheck /> }
        ],
        globalStandards: {
            title: "Aligned with Electronics & Safety Standards",
            standards: [
                { name: "BIS", description: "Compliance with Bureau of Indian Standards for appliances." },
                { name: "E-Waste Rules", description: "Adherence to India's E-Waste (Management) Rules." },
                { name: "CE/RoHS", description: "References EU directives for safety and hazardous substances." },
                { name: "ISO 9001", description: "For quality management and customer satisfaction." }
            ]
        },
        checklists: [
            {
                title: "Demo Unit Pre-Opening Checklist",
                department: "Sales/Operations",
                frequency: "Daily",
                role: "Floor Manager",
                icon: <Zap />,
                summary: "Check power cables, surge protectors, wiring concealed, device firmware updated, demo straps/covers intact.",
                tasks: [
                    { id: 'DEMO-01', description: 'Check all power cables for frays or damage.', priority: 'High', riskLevel: 'High', proof: 'Visual Inspection Log', location: 'Sales Floor' },
                    { id: 'DEMO-02', description: 'Ensure all demo units are connected via surge protectors.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'DEMO-03', description: 'Verify all wiring is neatly concealed to prevent trip hazards.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'DEMO-04', description: 'Check that all demo devices have the latest firmware and demo content loaded.', priority: 'High', riskLevel: 'Low', proof: 'Firmware Version Check', location: 'Sales Floor' },
                    { id: 'DEMO-05', description: 'Ensure all security straps and covers for demo units are intact.', priority: 'High', riskLevel: 'High', proof: 'Security Device Log', location: 'Sales Floor' },
                ]
            },
            {
                title: "Electrical Safety & PAT Testing",
                department: "Facilities/Safety",
                frequency: "Scheduled",
                role: "Safety Officer",
                icon: <Zap />,
                summary: "Scheduled Portable Appliance Testing, earth leakage checks, and grounding records.",
                tasks: [
                    { id: 'ELEC-01', description: 'Conduct scheduled Portable Appliance Testing (PAT) for all plug-in devices.', priority: 'High', riskLevel: 'High', proof: 'PAT Test Report', location: 'Store-wide' },
                    { id: 'ELEC-02', description: 'Perform quarterly earth leakage circuit breaker (ELCB) tests.', priority: 'High', riskLevel: 'High', proof: 'ELCB Test Log', location: 'Electrical Panels' },
                    { id: 'ELEC-03', description: 'Maintain records of all electrical grounding tests and certifications.', priority: 'High', riskLevel: 'High', proof: 'Grounding Test Records', location: 'Office' },
                    { id: 'ELEC-04', description: 'Check load on all circuits to prevent overloading.', priority: 'High', riskLevel: 'High', proof: 'Load Test Report', location: 'Electrical Panels' },
                    { id: 'ELEC-05', description: 'Ensure fire extinguishers are suitable for electrical fires (Class C).', priority: 'High', riskLevel: 'High', proof: 'Extinguisher Inspection Log', location: 'Store-wide' },
                ]
            },
            {
                title: "Asset Tagging & Inventory",
                department: "Inventory",
                frequency: "Ongoing",
                role: "Inventory Manager",
                icon: <Barcode />,
                summary: "Unique tag/serial recorded at dispatch/receive, daily verification, missing item escalation.",
                tasks: [
                    { id: 'ASSET-01', description: 'Record the unique serial number of every item at goods receipt.', priority: 'High', riskLevel: 'High', proof: 'GRN Log', location: 'Receiving Area' },
                    { id: 'ASSET-02', description: 'Apply a unique asset tag to each display and stock item.', priority: 'High', riskLevel: 'High', proof: 'Asset Tagging Log', location: 'Stockroom' },
                    { id: 'ASSET-03', description: 'Perform daily high-value item inventory verification.', priority: 'High', riskLevel: 'High', proof: 'High-Value Count Sheet', location: 'Store-wide' },
                    { id: 'ASSET-04', description: 'Implement an immediate escalation process for any missing items.', priority: 'High', riskLevel: 'High', proof: 'Escalation SOP', location: 'Office' },
                    { id: 'ASSET-05', description: 'Reconcile physical inventory with system records monthly.', priority: 'High', riskLevel: 'High', proof: 'Monthly Stock Take Report', location: 'Office' },
                ]
            },
            {
                title: "POS & Payment Reconciliation",
                department: "Finance",
                frequency: "Daily",
                role: "Head Cashier",
                icon: <ShieldCheck />,
                summary: "End-of-day reconciliation, device tag checks, CCTV on bill area, dual-approval for refunds.",
                tasks: [
                    { id: 'POS-RECON-01', description: 'Perform end-of-day reconciliation of cash, card, and digital payments against POS reports.', priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Cash Office' },
                    { id: 'POS-RECON-02', description: 'Check payment terminals daily for signs of tampering.', priority: 'High', riskLevel: 'High', proof: 'Device Inspection Log', location: 'POS' },
                    { id: 'POS-RECON-03', description: 'Ensure CCTV covers all billing areas clearly.', priority: 'High', riskLevel: 'High', proof: 'CCTV View Audit', location: 'Security Office' },
                    { id: 'POS-RECON-04', description: 'Require dual approval from a manager for all refunds.', priority: 'High', riskLevel: 'High', proof: 'Refund Approval Log', location: 'POS' },
                    { id: 'POS-RECON-05', description: 'Securely store and transport daily cash deposits.', priority: 'High', riskLevel: 'High', proof: 'Cash Deposit Log', location: 'Cash Office' },
                ]
            },
            {
                title: "E-waste Handling SOP",
                department: "Compliance",
                frequency: "As needed",
                role: "Compliance Officer",
                icon: <Recycle />,
                summary: "Segregated bins, authorized vendor pickup, record of disposals and certificates.",
                tasks: [
                    { id: 'EWaste-01', description: 'Maintain segregated and clearly labeled bins for e-waste.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Stockroom' },
                    { id: 'EWaste-02', description: 'Use only authorized, certified e-waste disposal vendors.', priority: 'High', riskLevel: 'High', proof: 'Vendor Contract', location: 'Office' },
                    { id: 'EWaste-03', description: 'Maintain a detailed log of all e-waste disposals.', priority: 'High', riskLevel: 'High', proof: 'Disposal Log', location: 'Office' },
                    { id: 'EWaste-04', description: 'Obtain and file disposal/destruction certificates from the vendor.', priority: 'High', riskLevel: 'High', proof: 'Disposal Certificates', location: 'Office' },
                    { id: 'EWaste-05', description: 'Train staff on identifying and segregating e-waste correctly.', priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'Office' },
                ]
            },
            {
                title: "Warranty & Repair Management",
                department: "Customer Service",
                frequency: "Per Case",
                role: "Service Manager",
                icon: <Wrench />,
                summary: "Log all repair requests, track items sent to service centers, and manage warranty claims with manufacturers.",
                tasks: [
                    { id: 'WRM-01', description: 'Log every repair request with customer details and item serial number.', priority: 'High', riskLevel: 'High', proof: 'Repair Log', location: 'Service Desk' },
                    { id: 'WRM-02', description: 'Track the status of all items sent to authorized service centers.', priority: 'High', riskLevel: 'Medium', proof: 'Service Center Tracking Sheet', location: 'System' },
                    { id: 'WRM-03', description: 'Process warranty claims with manufacturers according to their policies.', priority: 'High', riskLevel: 'High', proof: 'Warranty Claim Forms', location: 'Office' },
                    { id: 'WRM-04', description: 'Communicate repair status updates to customers.', priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'CRM' },
                    { id: 'WRM-05', description: 'Inspect repaired items before returning them to the customer.', priority: 'High', riskLevel: 'High', proof: 'Final Inspection Checklist', location: 'Service Desk' },
                ]
            },
            {
                title: "Customer Demonstration Protocol",
                department: "Sales",
                frequency: "Ongoing",
                role: "Sales Associate",
                icon: <UserCheck />,
                summary: "Standardized scripts for demonstrating key product features, ensuring a consistent and effective sales pitch.",
                tasks: [
                    { id: 'CDP-01', description: 'Follow a standardized script for demonstrating flagship products.', priority: 'High', riskLevel: 'Low', proof: 'Demo Script', location: 'Sales Floor' },
                    { id: 'CDP-02', description: 'Ensure demo units are fully charged and functional before a demonstration.', priority: 'High', riskLevel: 'Medium', proof: 'Pre-Demo Check', location: 'Sales Floor' },
                    { id: 'CDP-03', description: 'Highlight key features and benefits as outlined in sales training.', priority: 'High', riskLevel: 'Medium', proof: 'Manager Observation', location: 'Sales Floor' },
                    { id: 'CDP-04', description: 'Answer customer questions accurately using the provided FAQ document.', priority: 'High', riskLevel: 'Medium', proof: 'FAQ Document', location: 'System' },
                    { id: 'CDP-05', description: 'Offer to demonstrate related accessories to upsell.', priority: 'Medium', riskLevel: 'Low', proof: 'Upsell Training', location: 'Sales Floor' },
                ]
            },
            {
                title: "Stockroom Organization",
                department: "Inventory",
                frequency: "Weekly",
                role: "Stockroom Manager",
                icon: <Package />,
                summary: "Weekly audits for stockroom cleanliness, organization, and safety to ensure efficient picking and prevent damage.",
                tasks: [
                    { id: 'SO-01', description: 'Ensure all items are stored in their designated bins or locations.', priority: 'High', riskLevel: 'Medium', proof: 'Bin Audit', location: 'Stockroom' },
                    { id: 'SO-02', description: 'Keep all aisles and walkways clear of obstructions.', priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Stockroom' },
                    { id: 'SO-03', description: 'Check for any damaged or open boxes and report them.', priority: 'High', riskLevel: 'High', proof: 'Damage Report', location: 'Stockroom' },
                    { id: 'SO-04', description: 'Implement FIFO (First-In, First-Out) stock rotation.', priority: 'High', riskLevel: 'Medium', proof: 'Stock Rotation Audit', location: 'Stockroom' },
                    { id: 'SO-05', description: 'Ensure the stockroom is locked and access is restricted.', priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Stockroom' },
                ]
            },
            {
                title: "Fire Safety Audit",
                department: "Safety",
                frequency: "Monthly",
                role: "Safety Officer",
                icon: <Siren />,
                summary: "Monthly checks of fire extinguishers, smoke detectors, and emergency exits to comply with fire safety regulations.",
                tasks: [
                    { id: 'FSA-01', description: 'Inspect all fire extinguishers for pressure and expiry date.', priority: 'High', riskLevel: 'High', proof: 'Extinguisher Log', location: 'Store-wide' },
                    { id: 'FSA-02', description: 'Test smoke detectors and fire alarms.', priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Store-wide' },
                    { id: 'FSA-03', description: 'Ensure all emergency exits are clear and accessible.', priority: 'High', riskLevel: 'High', proof: 'Exit Inspection Log', location: 'Store-wide' },
                    { id: 'FSA-04', description: 'Check that all staff are trained on fire evacuation procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'FSA-05', description: 'Maintain a log of all fire safety audits for regulatory inspection.', priority: 'High', riskLevel: 'High', proof: 'Master Audit File', location: 'Office' },
                ]
            },
            {
                title: "Anti-Theft Device Management",
                department: "Security",
                frequency: "Daily",
                role: "Security Staff",
                icon: <Lock />,
                summary: "Daily checks to ensure all high-value items have active anti-theft devices attached and that deactivation tools are secure.",
                tasks: [
                    { id: 'ATD-01', description: 'Audit a sample of high-value items to ensure anti-theft tags are attached.', priority: 'High', riskLevel: 'High', proof: 'Tag Audit Log', location: 'Sales Floor' },
                    { id: 'ATD-02', description: 'Test EAS (Electronic Article Surveillance) gates at opening and closing.', priority: 'High', riskLevel: 'High', proof: 'EAS Test Log', location: 'Entrance' },
                    { id: 'ATD-03', description: 'Keep all tag deactivation tools securely stored at the POS.', priority: 'High', riskLevel: 'High', proof: 'Tool Security Log', location: 'POS' },
                    { id: 'ATD-04', description: 'Log any instances of tags being tampered with or removed.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Security Office' },
                    { id: 'ATD-05', description: 'Train staff on the correct procedure for attaching and removing tags.', priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Office' },
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
            { text: "Cold chain & perishables management.", icon: <Thermometer /> },
            { text: "Expiry & FIFO rotation process.", icon: <Recycle /> },
            { text: "Cleaning, hygiene & pest control.", icon: <SprayCan /> },
            { text: "POS & cash reconciliation.", icon: <DollarSign /> },
            { text: "Supplier inbound inspection.", icon: <PackageCheck /> },
        ],
        globalStandards: {
            title: "Aligned with Food & Retail Standards",
            standards: [
                { name: "FSSAI", description: "Compliance with Indian food safety regulations." },
                { name: "Legal Metrology", description: "Ensures accurate weights and measures for packaged goods." },
                { name: "HACCP", description: "International standard for food safety management." },
                { name: "BRCGS", description: "Global standard for retail food safety." }
            ]
        },
        checklists: [
            {
                title: "Cold Chain & Perishables Management",
                department: "Fresh Produce/Dairy",
                frequency: "Daily",
                role: "Department Manager",
                icon: <Thermometer />,
                summary: "Continuous digital logging for chiller/freezer, automatic alerts, daily opening/closing checklist verifying overnight temps.",
                tasks: [
                    { id: 'SC-COLD-01', description: 'Log temperatures of all chillers and freezers twice daily.', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Sales Floor/Stockroom' },
                    { id: 'SC-COLD-02', description: 'Verify functionality of temperature alarms weekly.', priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Cold Storage' },
                    { id: 'SC-COLD-03', description: 'Check door seals on all refrigerated units daily.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Sales Floor' },
                    { id: 'SC-COLD-04', description: 'Ensure backup power for cold storage is tested weekly.', priority: 'High', riskLevel: 'High', proof: 'Generator Test Log', location: 'Back of House' },
                    { id: 'SC-COLD-05', description: 'Document any temperature excursions and the corrective actions taken.', priority: 'High', riskLevel: 'High', proof: 'Corrective Action Report', location: 'Office' },
                ]
            },
            {
                title: "FIFO & Expiry Sweep SOP",
                department: "Inventory",
                frequency: "Daily",
                role: "Floor Staff",
                icon: <Recycle />,
                summary: "Shelf audits twice daily for high-risk products, weekly full expiry sweep, discount/quarantine & return flows for near-expiry.",
                tasks: [
                    { id: 'SC-FIFO-01', description: 'Conduct daily expiry sweeps for high-risk items like dairy and bread.', priority: 'High', riskLevel: 'High', proof: 'Sweep Log', location: 'Sales Floor' },
                    { id: 'SC-FIFO-02', description: 'Ensure First-In, First-Out (FIFO) rotation during shelf replenishment.', priority: 'High', riskLevel: 'High', proof: 'Supervisor Audit', location: 'Sales Floor' },
                    { id: 'SC-FIFO-03', description: 'Follow markdown or quarantine procedures for near-expiry items.', priority: 'High', riskLevel: 'Medium', proof: 'Markdown Log', location: 'Sales Floor' },
                    { id: 'SC-FIFO-04', description: 'Remove and log all expired products from shelves immediately.', priority: 'High', riskLevel: 'High', proof: 'Expired Goods Log', location: 'Back of House' },
                    { id: 'SC-FIFO-05', description: 'Train staff on how to read and interpret expiry date codes.', priority: 'High', riskLevel: 'Medium', proof: 'Training Record', location: 'Office' },
                ]
            },
            {
                title: "Store Cleaning & Spill Response",
                department: "Housekeeping",
                frequency: "Hourly",
                role: "Housekeeping Staff",
                icon: <SprayCan />,
                summary: "Hourly aisle checks, wet-floor signage protocol, immediate spill cleanup and incident logging (including CCTV time).",
                tasks: [
                    { id: 'SC-CLEAN-01', description: 'Perform and log hourly checks of all aisles for spills or hazards.', priority: 'High', riskLevel: 'High', proof: 'Aisle Check Log', location: 'Sales Floor' },
                    { id: 'SC-CLEAN-02', description: 'Deploy "Wet Floor" signs immediately for any spills.', priority: 'High', riskLevel: 'High', proof: 'CCTV Footage', location: 'Sales Floor' },
                    { id: 'SC-CLEAN-03', description: 'Log all spill incidents with time, location, and cleanup action.', priority: 'High', riskLevel: 'Medium', proof: 'Spill Incident Log', location: 'Office' },
                    { id: 'SC-CLEAN-04', description: 'Inspect and clean restrooms hourly.', priority: 'High', riskLevel: 'Medium', proof: 'Restroom Cleaning Log', location: 'Restrooms' },
                    { id: 'SC-CLEAN-05', description: 'Ensure cleaning equipment is sanitized and stored correctly.', priority: 'Medium', riskLevel: 'Low', proof: 'Storage Inspection', location: 'Janitor Closet' },
                ]
            },
            {
                title: "Inbound Supplier QC",
                department: "Receiving",
                frequency: "Per Delivery",
                role: "Receiving Clerk",
                icon: <PackageCheck />,
                summary: "Check delivery against PO, verify batch & expiry dates, reject & quarantine non-conforming lots with vendor return process.",
                tasks: [
                    { id: 'SC-INBOUND-01', description: 'Verify delivery quantity and items against the Purchase Order (PO).', priority: 'High', riskLevel: 'High', proof: 'Signed Delivery Note', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-02', description: 'Check batch numbers and expiry dates of all incoming products.', priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-03', description: 'Quarantine and document any non-conforming or damaged products.', priority: 'High', riskLevel: 'High', proof: 'Quarantine Report', location: 'Quarantine Area' },
                    { id: 'SC-INBOUND-04', description: 'Check temperature of chilled and frozen goods on arrival.', priority: 'High', riskLevel: 'High', proof: 'Inbound Temperature Log', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-05', description: 'Inspect packaging for signs of pest activity or tampering.', priority: 'High', riskLevel: 'High', proof: 'Visual Inspection Log', location: 'Receiving Bay' },
                ]
            },
            {
                title: "POS Security & Reconciliation",
                department: "Cash/Finance",
                frequency: "Daily",
                role: "Head Cashier",
                icon: <DollarSign />,
                summary: "Timestamped POS receipts, manager sign-off on voids/refunds, CCTV maintained at billing lanes.",
                tasks: [
                    { id: 'SC-POS-01', description: 'Ensure all POS receipts have a clear timestamp.', priority: 'High', riskLevel: 'Medium', proof: 'Sample Receipt', location: 'POS' },
                    { id: 'SC-POS-02', description: 'Require manager sign-off for all voided transactions or high-value refunds.', priority: 'High', riskLevel: 'High', proof: 'Void/Refund Log', location: 'POS' },
                    { id: 'SC-POS-03', description: 'Verify CCTV cameras at billing lanes are operational and have a clear view.', priority: 'High', riskLevel: 'High', proof: 'CCTV Check Log', location: 'Security Office' },
                    { id: 'SC-POS-04', description: 'Reconcile each cash drawer at the end of every shift.', priority: 'High', riskLevel: 'High', proof: 'Shift Reconciliation Report', location: 'Cash Office' },
                    { id: 'SC-POS-05', description: 'Check for any signs of tampering on card payment devices.', priority: 'High', riskLevel: 'High', proof: 'Device Inspection Log', location: 'POS' },
                ]
            },
             {
                title: "Weighing Scale Calibration",
                department: "Operations",
                frequency: "Daily/Scheduled",
                role: "Department Manager",
                icon: <Scale />,
                summary: "Daily zero-check on all scales and scheduled calibration by a certified vendor as per Legal Metrology.",
                tasks: [
                    { id: 'WSC-01', description: 'Perform a daily zero-check on all weighing scales before use.', priority: 'High', riskLevel: 'High', proof: 'Daily Check Log', location: 'Sales Floor' },
                    { id: 'WSC-02', description: 'Schedule and document annual calibration by a certified vendor.', priority: 'High', riskLevel: 'High', proof: 'Calibration Certificate', location: 'Office' },
                    { id: 'WSC-03', description: 'Ensure the calibration certificate is displayed near the scale.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'WSC-04', description: 'Train staff on correct usage and cleaning of scales.', priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'Office' },
                    { id: 'WSC-05', description: 'Immediately remove any malfunctioning scale from service and label it.', priority: 'High', riskLevel: 'High', proof: 'Out of Service Log', location: 'Sales Floor' },
                ]
            },
            {
                title: "Shopping Cart & Basket Hygiene",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Housekeeping Supervisor",
                icon: <ShoppingCart />,
                summary: "Daily cleaning schedule for carts and baskets, and maintenance checks for safety.",
                tasks: [
                    { id: 'SCBH-01', description: 'Sanitize all shopping cart handles and baskets daily.', priority: 'High', riskLevel: 'Medium', proof: 'Sanitization Log', location: 'Cart Bay' },
                    { id: 'SCBH-02', description: 'Perform a weekly deep clean of all carts and baskets.', priority: 'Medium', riskLevel: 'Medium', proof: 'Deep Clean Log', location: 'Wash Area' },
                    { id: 'SCBH-03', description: 'Inspect carts for safety issues like broken wheels or sharp edges.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Log', location: 'Cart Bay' },
                    { id: 'SCBH-04', description: 'Remove any damaged carts from circulation immediately.', priority: 'High', riskLevel: 'High', proof: 'Damaged Cart Log', location: 'Maintenance Area' },
                    { id: 'SCBH-05', description: 'Ensure cart collection points are tidy and do not obstruct traffic.', priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Parking/Entrance' },
                ]
            },
            {
                title: "Bakery & Hot Food Safety",
                department: "F&B",
                frequency: "Daily",
                role: "Bakery/Kitchen Head",
                icon: <CakeSlice />,
                summary: "Checklists for food temperature holding, ingredient traceability, and cross-contamination prevention in in-store kitchens.",
                tasks: [
                    { id: 'BHF-01', description: 'Log temperatures of hot holding units every 2 hours.', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Hot Food Section' },
                    { id: 'BHF-02', description: 'Trace all ingredients used back to their source batch.', priority: 'High', riskLevel: 'High', proof: 'Ingredient Traceability Log', location: 'Bakery/Kitchen' },
                    { id: 'BHF-03', description: 'Use separate equipment for raw and cooked food preparation.', priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Bakery/Kitchen' },
                    { id: 'BHF-04', description: 'Discard any food held below the safe temperature for more than 2 hours.', priority: 'High', riskLevel: 'High', proof: 'Discard Log', location: 'Hot Food Section' },
                    { id: 'BHF-05', description: 'Ensure staff follow correct handwashing and glove usage protocols.', priority: 'High', riskLevel: 'High', proof: 'Hygiene Audit', location: 'Bakery/Kitchen' },
                ]
            },
            {
                title: "Loss Prevention & Security Audit",
                department: "Security",
                frequency: "Daily",
                role: "Loss Prevention Officer",
                icon: <Shield />,
                summary: "Daily checks for CCTV, EAS gates, staff entrance security, and monitoring of high-theft item areas.",
                tasks: [
                    { id: 'LPS-01', description: 'Verify all CCTV cameras are operational and recording.', priority: 'High', riskLevel: 'High', proof: 'CCTV Check Log', location: 'Security Office' },
                    { id: 'LPS-02', description: 'Test EAS (Electronic Article Surveillance) gates at opening.', priority: 'High', riskLevel: 'High', proof: 'EAS Test Log', location: 'Entrance' },
                    { id: 'LPS-03', description: 'Monitor staff entry and exit points for unauthorized item removal.', priority: 'High', riskLevel: 'High', proof: 'Staff Exit Check Log', location: 'Staff Gate' },
                    { id: 'LPS-04', description: 'Conduct random audits in high-theft categories like cosmetics and electronics.', priority: 'High', riskLevel: 'High', proof: 'Random Audit Log', location: 'Sales Floor' },
                    { id: 'LPS-05', description: 'Train staff on identifying and reporting suspicious activity.', priority: 'High', riskLevel: 'Medium', proof: 'Training Record', location: 'Office' },
                ]
            },
            {
                title: "Customer Safety & Floor Walk",
                department: "Operations",
                frequency: "Hourly",
                role: "Floor Manager",
                icon: <PersonStanding />,
                summary: "Hourly floor walks to identify and mitigate slip, trip, and fall hazards.",
                tasks: [
                    { id: 'CSF-01', description: 'Conduct and log a floor walk every hour to check for hazards.', priority: 'High', riskLevel: 'High', proof: 'Floor Walk Log', location: 'Sales Floor' },
                    { id: 'CSF-02', description: 'Immediately address any spills or dropped items.', priority: 'High', riskLevel: 'High', proof: 'Spill Response Log', location: 'Sales Floor' },
                    { id: 'CSF-03', description: 'Ensure all promotional displays are stable and not obstructing aisles.', priority: 'High', riskLevel: 'Medium', proof: 'Display Safety Check', location: 'Sales Floor' },
                    { id: 'CSF-04', description: 'Check that floor mats are flat and not curled up.', priority: 'High', riskLevel: 'Medium', proof: 'Mat Inspection', location: 'Entrance/Wet Areas' },
                    { id: 'CSF-05', description: 'Log any customer accidents and follow the incident reporting procedure.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Office' },
                ]
            }
        ]
    },
    // --- Corporate & Tech ---
    {
        id: 'facility_management_blueprint',
        title: "Facility Management Blueprint (Enterprise Edition)",
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
            { text: "Daily facility walkthrough & verification.", icon: <UserCheck /> },
            { text: "Preventive maintenance planning & SLA tracking.", icon: <Wrench /> },
            { text: "Housekeeping & hygiene audits.", icon: <Sparkles /> },
            { text: "Security & access control.", icon: <KeyRound /> },
            { text: "Utilities & energy management.", icon: <Zap /> },
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
                { name: "ISO 41001", description: "Global standard for strategic facility management." },
                { name: "ISO 50001", description: "Framework for energy management and efficiency." },
                { name: "ISO 45001 / NBC", description: "For occupational health, safety, and fire codes." },
                { name: "Contract Labour Act", description: "Compliance with Indian labor laws for vendors." }
            ]
        },
        checklists: [
             {
                title: "Daily Facility Walkthrough",
                department: "Facilities",
                frequency: "Daily",
                role: "Facility Manager",
                icon: <UserCheck />,
                summary: "Common areas, restrooms, HVAC status, lighting, signage; photo evidence and supervisor signature.",
                tasks: [
                    {id: 'DFW-01', description: "Check cleanliness and orderliness of all common areas.", priority: 'High', riskLevel: 'Low', proof: 'Photo Log', location: 'Common Areas'},
                    {id: 'DFW-02', description: "Inspect restrooms for hygiene and supplies.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Log', location: 'Restrooms'},
                    {id: 'DFW-03', description: "Verify HVAC system status from BMS.", priority: 'High', riskLevel: 'High', proof: 'BMS Screenshot', location: 'BMS Room'},
                    {id: 'DFW-04', description: "Check for any fused lights or faulty signage.", priority: 'Medium', riskLevel: 'Low', proof: 'Maintenance Request', location: 'Entire Facility'},
                    {id: 'DFW-05', description: "Supervisor to sign off on the walkthrough report with photo evidence.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Report', location: 'Office'},
                ]
            },
            {
                title: "PM & SLA Management",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Manager",
                icon: <Wrench />,
                summary: "Asset register, PM frequencies, vendor SLA KPI tracker (response times, resolution times), escalation matrix.",
                tasks: [
                    {id: 'PM-SLA-01', description: "Update the master asset register with any new equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Asset Register', location: 'System'},
                    {id: 'PM-SLA-02', description: "Track completion of scheduled preventive maintenance tasks against the calendar.", priority: 'High', riskLevel: 'High', proof: 'PM Compliance Report', location: 'System'},
                    {id: 'PM-SLA-03', description: "Update vendor SLA tracker with response and resolution times for recent tickets.", priority: 'High', riskLevel: 'High', proof: 'SLA Tracker', location: 'System'},
                    {id: 'PM-SLA-04', description: "Review and escalate any SLA breaches to the vendor.", priority: 'High', riskLevel: 'High', proof: 'Escalation Email', location: 'Office'},
                    {id: 'PM-SLA-05', description: "Hold quarterly performance reviews with critical vendors.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Office' },
                ]
            },
            {
                title: "Housekeeping Verification",
                department: "Admin",
                frequency: "Daily",
                role: "Admin Supervisor",
                icon: <Sparkles />,
                summary: "Zone-wise cleaning checklist, deep-clean schedule, consumable restock logs (soap, sanitizer).",
                tasks: [
                    {id: 'HKV-01', description: "Conduct random audits of cleaned areas using a zone-wise checklist.", priority: 'High', riskLevel: 'Medium', proof: 'Audit Scorecard', location: 'Various'},
                    {id: 'HKV-02', description: "Verify completion of scheduled deep-cleaning tasks.", priority: 'High', riskLevel: 'Medium', proof: 'Deep Clean Log', location: 'Various'},
                    {id: 'HKV-03', description: "Check consumable stock levels and log restocks.", priority: 'High', riskLevel: 'Low', proof: 'Restock Log', location: 'Janitor Room'},
                    {id: 'HKV-04', description: 'Review cleaning chemical inventory and dilution logs.', priority: 'Medium', riskLevel: 'Medium', proof: 'Chemical Log', location: 'Janitor Room' },
                    {id: 'HKV-05', description: 'Inspect waste management area for cleanliness and proper segregation.', priority: 'High', riskLevel: 'Medium', proof: 'Waste Area Audit', location: 'Waste Yard' },
                ]
            },
            {
                title: "Security & Visitor SOP",
                department: "Security",
                frequency: "Ongoing",
                role: "Security Supervisor",
                icon: <KeyRound />,
                summary: "Contractor verification, access card issuance/return, CCTV health monitoring and retention policy.",
                tasks: [
                    {id: 'SEC-VIS-01', description: "Verify identity and pre-authorization for all contractors and visitors.", priority: 'High', riskLevel: 'High', proof: 'Visitor Log', location: 'Reception'},
                    {id: 'SEC-VIS-02', description: "Issue and log time-bound access cards.", priority: 'High', riskLevel: 'High', proof: 'Access Card Log', location: 'Reception'},
                    {id: 'SEC-VIS-03', description: "Ensure all issued cards are returned upon exit.", priority: 'High', riskLevel: 'High', proof: 'Access Card Log', location: 'Reception'},
                    {id: 'SEC-VIS-04', description: "Perform daily health check of CCTV system, ensuring all cameras are recording.", priority: 'High', riskLevel: 'High', proof: 'CCTV Health Log', location: 'Security Room'},
                    {id: 'SEC-VIS-05', description: "Verify CCTV footage is retained as per the company's retention policy.", priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Server Room'},
                ]
            },
            {
                title: "Utilities Monitoring",
                department: "Facilities",
                frequency: "Daily",
                role: "Facility Engineer",
                icon: <Zap />,
                summary: "BMS data review, meter readings, energy usage anomaly alerts.",
                tasks: [
                    {id: 'UTIL-01', description: "Review Building Management System (BMS) data for any alarms.", priority: 'High', riskLevel: 'High', proof: 'BMS Log', location: 'BMS Room'},
                    {id: 'UTIL-02', description: "Record daily readings from all major utility meters (electricity, water, gas).", priority: 'High', riskLevel: 'Medium', proof: 'Meter Reading Log', location: 'Meter Rooms'},
                    {id: 'UTIL-03', description: "Analyze daily energy usage and investigate any anomalies.", priority: 'High', riskLevel: 'Medium', proof: 'Usage Analysis Report', location: 'Office'},
                    {id: 'UTIL-04', description: 'Check water treatment plant (WTP) and sewage treatment plant (STP) operational parameters.', priority: 'High', riskLevel: 'High', proof: 'WTP/STP Log', location: 'Plant Room' },
                    {id: 'UTIL-05', description: 'Inspect backup generator fuel levels weekly.', priority: 'High', riskLevel: 'High', proof: 'Fuel Log', location: 'Generator Room' },
                ]
            },
            {
                title: "Critical Systems & Redundancy Testing",
                department: "IT/Facilities",
                frequency: "Quarterly",
                role: "Data Center Manager",
                icon: <Cog />,
                summary: "Quarterly tests of UPS, backup generators, and data center cooling to ensure business continuity.",
                tasks: [
                    { id: 'TSC-01', description: "Perform a live failover test for the data center UPS system.", priority: 'High', riskLevel: 'High', proof: 'UPS Test Report', location: 'Data Center' },
                    { id: 'TSC-02', description: "Simulate a power outage to test automatic generator switchover.", priority: 'High', riskLevel: 'High', proof: 'Generator Failover Test Log', location: 'Generator Room' },
                    { id: 'TSC-03', description: "Test redundant cooling units in the data center.", priority: 'High', riskLevel: 'High', proof: 'Cooling Test Report', location: 'Data Center' },
                    { id: 'TSC-04', description: "Verify fire suppression system in critical areas is active and certified.", priority: 'High', riskLevel: 'High', proof: 'Fire System Certificate', location: 'Data Center' },
                    { id: 'TSC-05', description: "Check network redundancy by simulating a primary link failure.", priority: 'High', riskLevel: 'High', proof: 'Network Failover Test', location: 'Network Room' },
                ]
            },
            {
                title: "Incident Reporting & Management",
                department: "Management",
                frequency: "Per Incident",
                role: "Incident Manager",
                icon: <FileWarning />,
                summary: "A formal process for logging, triaging, escalating, and resolving any facility-related incident.",
                tasks: [
                    { id: 'INC-REP-01', description: "Log every incident in a centralized system with timestamps.", priority: 'High', riskLevel: 'Medium', proof: 'Incident Management System', location: 'System' },
                    { id: 'INC-REP-02', description: "Triage the incident based on its impact and urgency.", priority: 'High', riskLevel: 'High', proof: 'Triage Notes', location: 'System' },
                    { id: 'INC-REP-03', description: "Escalate critical incidents to senior management per the escalation matrix.", priority: 'High', riskLevel: 'High', proof: 'Escalation Communication', location: 'System' },
                    { id: 'INC-REP-04', description: "Conduct a Root Cause Analysis (RCA) for all major incidents.", priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'System' },
                    { id: 'INC-REP-05', description: "Track all corrective and preventive actions (CAPAs) to closure.", priority: 'High', riskLevel: 'High', proof: 'CAPA Tracker', location: 'System' },
                ]
            },
            {
                title: "Vendor Performance Review",
                department: "Procurement/Facilities",
                frequency: "Quarterly",
                role: "Vendor Manager",
                icon: <BarChart3 />,
                summary: "Quarterly reviews with key vendors to discuss SLA compliance, performance, and strategic alignment.",
                tasks: [
                    { id: 'VPR-01', description: "Prepare a performance report based on SLA tracker data.", priority: 'High', riskLevel: 'Medium', proof: 'Performance Report', location: 'Office' },
                    { id: 'VPR-02', description: "Schedule and conduct quarterly business review (QBR) meetings.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Invite', location: 'Office' },
                    { id: 'VPR-03', description: "Document meeting minutes and agreed action items.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Office' },
                    { id: 'VPR-04', description: "Track completion of all vendor-assigned action items.", priority: 'High', riskLevel: 'High', proof: 'Action Tracker', location: 'System' },
                    { id: 'VPR-05', description: "Review and update vendor contracts or scope based on performance.", priority: 'Medium', riskLevel: 'Medium', proof: 'Contract Amendment', location: 'Office' },
                ]
            },
            {
                title: "EHS (Environment, Health, Safety) Audit",
                department: "EHS",
                frequency: "Monthly",
                role: "EHS Officer",
                icon: <ShieldCheck />,
                summary: "Monthly audits covering workplace safety, environmental compliance, and emergency preparedness.",
                tasks: [
                    { id: 'EHS-01', description: "Inspect for any workplace hazards (e.g., trip hazards, unsafe storage).", priority: 'High', riskLevel: 'High', proof: 'Safety Audit Report', location: 'Entire Facility' },
                    { id: 'EHS-02', description: "Verify compliance with environmental regulations (e.g., waste disposal, emissions).", priority: 'High', riskLevel: 'High', proof: 'Environmental Compliance Log', location: 'Office' },
                    { id: 'EHS-03', description: "Check that first aid kits are fully stocked and accessible.", priority: 'High', riskLevel: 'High', proof: 'First Aid Kit Log', location: 'Various' },
                    { id: 'EHS-04', description: "Ensure all staff have completed mandatory safety training.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'EHS-05', description: "Review and update risk assessments for all facility activities.", priority: 'High', riskLevel: 'High', proof: 'Risk Assessment Register', location: 'Office' },
                ]
            },
            {
                title: "Space & Occupancy Management",
                department: "Admin/Real Estate",
                frequency: "Quarterly",
                role: "Space Planner",
                icon: <Users />,
                summary: "Manages seating allocation, departmental moves, and ensures optimal use of office real estate.",
                tasks: [
                    { id: 'SOM-01', description: "Audit current seating plan against employee headcount.", priority: 'High', riskLevel: 'Medium', proof: 'Occupancy Report', location: 'System' },
                    { id: 'SOM-02', description: "Plan and coordinate any inter-departmental moves.", priority: 'High', riskLevel: 'Medium', proof: 'Move Plan', location: 'Office' },
                    { id: 'SOM-03', description: "Update floor plans after any changes.", priority: 'High', riskLevel: 'Low', proof: 'Updated Floor Plan', location: 'System' },
                    { id: 'SOM-04', description: "Analyze space utilization data to identify underused areas.", priority: 'Medium', riskLevel: 'Medium', proof: 'Utilization Report', location: 'System' },
                    { id: 'SOM-05', description: "Gather feedback from departments on their space requirements.", priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Survey', location: 'System' },
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
            { text: "Statutory filing calendar & reminders.", icon: <CalendarDays /> },
            { text: "Policy management & employee acknowledgements.", icon: <UserCheck /> },
            { text: "Contract lifecycle management.", icon: <FileCheck /> },
            { text: "Internal audit & non-compliance remediation.", icon: <Bug /> },
            { text: "Whistleblowing & investigations.", icon: <Siren /> },
        ],
        globalStandards: {
            title: "Aligned with Corporate Governance Principles",
            standards: [
                { name: "Companies Act", description: "For board meetings, statutory filings, and governance." },
                { name: "Indian Labour Laws", description: "For HR processes like onboarding and disciplinary actions." },
                { name: "ISO 37301", description: "International standard for compliance management systems." },
                { name: "SOX Principles", description: "References Sarbanes-Oxley principles for internal controls." }
            ]
        },
        checklists: [
            {
                title: "Statutory Calendar SOP",
                department: "Legal/Finance",
                frequency: "Monthly",
                role: "Compliance Officer",
                icon: <CalendarDays />,
                summary: "Master calendar (GST, TDS, PF/ESI, annual returns), owner, date, pre-check reminders (15/7/2 days).",
                tasks: [
                    {id: 'CAL-01', description: "Update master calendar with all statutory filing due dates.", priority: 'High', riskLevel: 'High', proof: 'Compliance Calendar', location: 'System'},
                    {id: 'CAL-02', description: "Assign an owner for each compliance task.", priority: 'High', riskLevel: 'High', proof: 'Responsibility Matrix', location: 'System'},
                    {id: 'CAL-03', description: "Set automated reminders for 15, 7, and 2 days before each due date.", priority: 'High', riskLevel: 'Medium', proof: 'Reminder System Config', location: 'System'},
                    {id: 'CAL-04', description: 'Confirm filings are completed and save acknowledgement receipts.', priority: 'High', riskLevel: 'High', proof: 'Filed Returns Folder', location: 'System' },
                    {id: 'CAL-05', description: 'Hold a monthly meeting to review upcoming compliance deadlines.', priority: 'Medium', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Office' },
                ]
            },
            {
                title: "Policy Review & Acknowledgement",
                department: "HR/Compliance",
                frequency: "Per Policy Update",
                role: "HR Manager",
                icon: <UserCheck />,
                summary: "Policy versioning, review committee sign-off, employee digital acknowledgement tracked.",
                tasks: [
                    {id: 'POL-01', description: "Ensure all new policies are signed off by a review committee.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Policy Document', location: 'System'},
                    {id: 'POL-02', description: "Maintain a version control system for all policies.", priority: 'High', riskLevel: 'Medium', proof: 'Version History Log', location: 'System'},
                    {id: 'POL-03', description: "Track digital acknowledgement from all employees for new/updated policies.", priority: 'High', riskLevel: 'High', proof: 'Acknowledgement Report', location: 'System'},
                    {id: 'POL-04', description: 'Schedule annual reviews for all key company policies.', priority: 'High', riskLevel: 'Medium', proof: 'Review Calendar', location: 'System' },
                    {id: 'POL-05', description: 'Make all current policies easily accessible to employees on an intranet or portal.', priority: 'High', riskLevel: 'Low', proof: 'Intranet Page Link', location: 'System' },
                ]
            },
            {
                title: "Contract Intake & Approval",
                department: "Legal/Procurement",
                frequency: "Per Contract",
                role: "Manager",
                icon: <Handshake />,
                summary: "Minimum legal clauses, signatory authority matrix, central storage with expiry reminders.",
                tasks: [
                    {id: 'CON-01', description: "Check every contract against a checklist of minimum required legal clauses.", priority: 'High', riskLevel: 'High', proof: 'Contract Review Checklist', location: 'System'},
                    {id: 'CON-02', description: "Verify the signatory has the authority to sign based on the authority matrix.", priority: 'High', riskLevel: 'High', proof: 'Authority Matrix', location: 'System'},
                    {id: 'CON-03', description: "Store all signed contracts in a central, secure repository.", priority: 'High', riskLevel: 'High', proof: 'Contract Register', location: 'System'},
                    {id: 'CON-04', description: "Set reminders for all contract expiry or renewal dates.", priority: 'High', riskLevel: 'Medium', proof: 'Calendar System', location: 'System'},
                    {id: 'CON-05', description: 'Log key obligations and dates from each contract into a summary sheet.', priority: 'High', riskLevel: 'Medium', proof: 'Contract Summary Sheet', location: 'System' },
                ]
            },
            {
                title: "Internal Audit Flow",
                department: "Audit",
                frequency: "Per Audit",
                role: "Auditor",
                icon: <Bug />,
                summary: "Audit scope, checklist execution, non-conformance report (NCR), CAPA tracking (Corrective & Preventive Action).",
                tasks: [
                    {id: 'AUD-01', description: "Define and agree on the audit scope and criteria.", priority: 'High', riskLevel: 'Medium', proof: 'Audit Scope Document', location: 'Office'},
                    {id: 'AUD-02', description: "Execute the audit using a standardized checklist.", priority: 'High', riskLevel: 'Medium', proof: 'Completed Audit Checklist', location: 'Audit Site'},
                    {id: 'AUD-03', description: "Issue a Non-Conformance Report (NCR) for any findings.", priority: 'High', riskLevel: 'High', proof: 'NCR Form', location: 'System'},
                    {id: 'AUD-04', description: "Track all Corrective and Preventive Actions (CAPAs) to closure.", priority: 'High', riskLevel: 'High', proof: 'CAPA Tracker', location: 'System'},
                    {id: 'AUD-05', description: 'Verify the effectiveness of implemented CAPAs in a follow-up audit.', priority: 'High', riskLevel: 'High', proof: 'Verification Report', location: 'System' },
                ]
            },
            {
                title: "Whistleblowing Procedure",
                department: "Ethics/Legal",
                frequency: "Per Incident",
                role: "Ethics Officer",
                icon: <Siren />,
                summary: "Anonymous reporting, investigation timeline, protection and reporting to board.",
                tasks: [
                    {id: 'WB-01', description: "Provide a clear and anonymous channel for employees to report concerns.", priority: 'High', riskLevel: 'High', proof: 'Whistleblower Policy', location: 'Intranet'},
                    {id: 'WB-02', description: "Acknowledge receipt of a complaint within a defined timeline (e.g., 48 hours).", priority: 'High', riskLevel: 'High', proof: 'Acknowledgement Log', location: 'System'},
                    {id: 'WB-03', description: "Conduct a confidential investigation within a set timeline.", priority: 'High', riskLevel: 'High', proof: 'Investigation Plan', location: 'Office'},
                    {id: 'WB-04', description: "Provide protection against retaliation for the whistleblower.", priority: 'High', riskLevel: 'High', proof: 'Policy Document', location: 'HR'},
                    {id: 'WB-05', description: "Report findings and actions to the board's audit committee.", priority: 'High', riskLevel: 'High', proof: 'Board Report', location: 'Office'},
                ]
            },
            {
                title: "Board Meeting Preparation",
                department: "Secretarial",
                frequency: "Per Meeting",
                role: "Company Secretary",
                icon: <BriefcaseBusiness />,
                summary: "Ensures all legal requirements for board meetings are met, from notice periods to minute-taking.",
                tasks: [
                    { id: 'BM-01', description: 'Send out meeting notice and agenda within the statutory notice period.', priority: 'High', riskLevel: 'High', proof: 'Meeting Notice', location: 'Email' },
                    { id: 'BM-02', description: 'Compile and circulate the board pack with all relevant documents.', priority: 'High', riskLevel: 'Medium', proof: 'Board Pack', location: 'Portal' },
                    { id: 'BM-03', description: 'Ensure quorum is present at the start of the meeting.', priority: 'High', riskLevel: 'High', proof: 'Attendance Sheet', location: 'Meeting' },
                    { id: 'BM-04', description: 'Take detailed minutes of the meeting, recording all resolutions.', priority: 'High', riskLevel: 'High', proof: 'Draft Minutes', location: 'Office' },
                    { id: 'BM-05', description: 'File any necessary forms with the ROC post-meeting.', priority: 'High', riskLevel: 'High', proof: 'ROC Filing Receipt', location: 'System' },
                ]
            },
            {
                title: "Data Privacy (DPDP/GDPR) Compliance",
                department: "Compliance",
                frequency: "Quarterly",
                role: "DPO",
                icon: <ShieldCheck />,
                summary: "Quarterly review of data collection points, consent mechanisms, and data processing agreements.",
                tasks: [
                    { id: 'DP-01', description: 'Maintain a data map of all personal data collected and processed.', priority: 'High', riskLevel: 'High', proof: 'Data Map Document', location: 'System' },
                    { id: 'DP-02', description: 'Review all public-facing forms to ensure clear consent is taken.', priority: 'High', riskLevel: 'High', proof: 'Form Audit', location: 'Website/App' },
                    { id: 'DP-03', description: 'Audit Data Processing Agreements (DPAs) with all vendors handling personal data.', priority: 'High', riskLevel: 'High', proof: 'DPA Register', location: 'System' },
                    { id: 'DP-04', description: 'Test the process for handling data subject access requests (DSARs).', priority: 'High', riskLevel: 'High', proof: 'DSAR Test Log', location: 'System' },
                    { id: 'DP-05', description: 'Conduct privacy awareness training for all employees.', priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
                ]
            },
            {
                title: "Disciplinary Action Process",
                department: "HR",
                frequency: "Per Case",
                role: "HR Manager",
                icon: <UserCog />,
                summary: "A fair and legally sound process for handling employee misconduct, from investigation to resolution.",
                tasks: [
                    { id: 'DA-01', description: 'Issue a formal show-cause notice to the employee, detailing the allegations.', priority: 'High', riskLevel: 'High', proof: 'Show-Cause Notice', location: 'Employee File' },
                    { id: 'DA-02', description: 'Conduct a neutral and documented investigation into the matter.', priority: 'High', riskLevel: 'High', proof: 'Investigation Report', location: 'HR File' },
                    { id: 'DA-03', description: 'Give the employee a chance to respond to the allegations.', priority: 'High', riskLevel: 'High', proof: 'Employee Response', location: 'Employee File' },
                    { id: 'DA-04', description: 'Document the final decision and the reasoning behind it.', priority: 'High', riskLevel: 'High', proof: 'Final Decision Letter', location: 'Employee File' },
                    { id: 'DA-05', description: 'Ensure all actions comply with company policy and local labor laws.', priority: 'High', riskLevel: 'High', proof: 'Legal Review', location: 'Legal Dept' },
                ]
            },
            {
                title: "Intellectual Property (IP) Management",
                department: "Legal",
                frequency: "Ongoing",
                role: "IP Counsel",
                icon: <BrainCircuit />,
                summary: "Protect your company's most valuable assets by tracking trademarks, patents, and copyrights.",
                tasks: [
                    { id: 'IPM-01', description: 'Maintain a register of all company trademarks, patents, and copyrights.', priority: 'High', riskLevel: 'High', proof: 'IP Register', location: 'Legal File' },
                    { id: 'IPM-02', description: 'Set reminders for all renewal deadlines.', priority: 'High', riskLevel: 'High', proof: 'Calendar System', location: 'System' },
                    { id: 'IPM-03', description: 'Ensure all employees sign IP assignment agreements upon joining.', priority: 'High', riskLevel: 'High', proof: 'Signed Agreements', location: 'HR File' },
                    { id: 'IPM-04', description: 'Monitor the market for any potential infringement of your IP.', priority: 'Medium', riskLevel: 'Medium', proof: 'Monitoring Report', location: 'System' },
                    { id: 'IPM-05', description: 'Review and update IP strategy annually.', priority: 'High', riskLevel: 'Medium', proof: 'Strategy Document', location: 'Legal Office' },
                ]
            },
            {
                title: "Employee Exit & Offboarding",
                department: "HR",
                frequency: "Per Exit",
                role: "HR Specialist",
                icon: <UserCog2 />,
                summary: "A smooth and compliant offboarding process that protects company assets and data.",
                tasks: [
                    { id: 'EEO-01', description: 'Collect all company assets (laptop, ID card, etc.) on the last day.', priority: 'High', riskLevel: 'High', proof: 'Asset Return Form', location: 'HR/IT' },
                    { id: 'EEO-02', description: 'Revoke access to all company systems and accounts immediately upon exit.', priority: 'High', riskLevel: 'High', proof: 'Access Revocation Log', location: 'IT' },
                    { id: 'EEO-03', description: 'Conduct an exit interview to gather feedback.', priority: 'Medium', riskLevel: 'Low', proof: 'Exit Interview Notes', location: 'HR File' },
                    { id: 'EEO-04', description: 'Process the full and final settlement within the statutory timeline.', priority: 'High', riskLevel: 'High', proof: 'Settlement Document', location: 'Finance' },
                    { id: 'EEO-05', description: 'Issue the experience letter and other relieving documents.', priority: 'High', riskLevel: 'Medium', proof: 'Document Issue Log', location: 'HR' },
                ]
            }
        ]
    },
    {
        id: 'enterprise_risk_cybersecurity_pack',
        title: "Enterprise Risk & Cybersecurity Pack",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Corporate & Tech",
        description: "An advanced toolkit for CISOs and compliance officers to manage modern enterprise risks, from AI governance and data privacy to cloud security and incident response.",
        icon: <ShieldCheck />,
        whoIsItFor: ["CISOs", "CTOs", "Data Protection Officers (DPOs)", "Heads of Risk & Compliance", "IT Directors"],
        sampleItems: [
            { text: "Access management & least privilege.", icon: <KeyRound /> },
            { text: "Patch & vulnerability lifecycle.", icon: <Bug /> },
            { text: "Backup, business continuity & disaster recovery (BC/DR).", icon: <DatabaseZap /> },
            { text: "Incident response & forensics.", icon: <Siren /> },
            { text: "Cloud security posture & misconfigurations.", icon: <Cloud /> },
        ],
        globalStandards: {
            title: "Aligned with Global Cybersecurity Frameworks",
            standards: [
                { name: "ISO 27001", description: "The international standard for information security management." },
                { name: "NIST CSF", description: "The U.S. National Institute of Standards and Technology Cybersecurity Framework." },
                { name: "GDPR / DPDP", description: "For data privacy compliance in Europe and India." },
                { name: "SOC 2", description: "For ensuring security and availability for service providers." }
            ]
        },
        checklists: [
            {
                title: "Access Review SOP",
                department: "IT Security",
                frequency: "Quarterly",
                role: "IT Security Analyst",
                icon: <KeyRound />,
                summary: "Quarterly review of privileged accounts, remove stale accounts, MFA enforced, JIT (just-in-time) access for admins.",
                tasks: [
                    {id: 'AR-01', description: "Generate a list of all users with privileged access.", priority: 'High', riskLevel: 'High', proof: 'User Access Report', location: 'System'},
                    {id: 'AR-02', description: "Manager of each privileged user to re-approve access quarterly.", priority: 'High', riskLevel: 'High', proof: 'Approval Emails/Tickets', location: 'System'},
                    {id: 'AR-03', description: "Remove access for any stale accounts (e.g., inactive for 90 days).", priority: 'High', riskLevel: 'High', proof: 'Deactivation Log', location: 'System'},
                    {id: 'AR-04', description: "Verify that Multi-Factor Authentication (MFA) is enforced for all admin accounts.", priority: 'High', riskLevel: 'High', proof: 'MFA Configuration Report', location: 'System'},
                    {id: 'AR-05', description: "Implement Just-In-Time (JIT) access for critical administrative tasks where possible.", priority: 'Medium', riskLevel: 'High', proof: 'JIT System Logs', location: 'System'},
                ]
            },
            {
                title: "Patch Management Workflow",
                department: "IT Operations",
                frequency: "Weekly/Monthly",
                role: "System Administrator",
                icon: <Bug />,
                summary: "Classify patches, test in staging, deploy by priority, rollback plan, proof of deployment logs.",
                tasks: [
                    {id: 'PMW-01', description: "Scan all systems for missing patches weekly.", priority: 'High', riskLevel: 'High', proof: 'Vulnerability Scan Report', location: 'System'},
                    {id: 'PMW-02', description: "Classify patches based on severity (e.g., critical, high, medium).", priority: 'High', riskLevel: 'High', proof: 'Patch Classification Matrix', location: 'System'},
                    {id: 'PMW-03', description: "Test all critical patches in a staging environment before production deployment.", priority: 'High', riskLevel: 'High', proof: 'Test Report', location: 'Staging Environment'},
                    {id: 'PMW-04', description: "Deploy critical patches within a defined SLA (e.g., 14 days).", priority: 'High', riskLevel: 'High', proof: 'Deployment Logs', location: 'Production Systems'},
                    {id: 'PMW-05', description: "Have a documented rollback plan for any patch that causes issues.", priority: 'High', riskLevel: 'Medium', proof: 'Rollback Plan Document', location: 'System'},
                ]
            },
            {
                title: "BC/DR & Backup SOP",
                department: "IT Infrastructure",
                frequency: "Quarterly/Annually",
                role: "IT Manager",
                icon: <DatabaseZap />,
                summary: "RTO/RPO defined, weekly backup verification restores, offsite encrypted storage, disaster playbook.",
                tasks: [
                    {id: 'BCDR-01', description: "Define and document Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).", priority: 'High', riskLevel: 'High', proof: 'BIA Document', location: 'Office'},
                    {id: 'BCDR-02', description: "Verify weekly that all critical system backups completed successfully.", priority: 'High', riskLevel: 'High', proof: 'Backup Logs', location: 'System'},
                    {id: 'BCDR-03', description: "Perform a quarterly test restore of a critical system from backup.", priority: 'High', riskLevel: 'High', proof: 'Test Restore Report', location: 'Test Environment'},
                    {id: 'BCDR-04', description: "Ensure a copy of critical backups is stored in an offsite, encrypted location.", priority: 'High', riskLevel: 'High', proof: 'Offsite Storage Log', location: 'Vendor/Cloud'},
                    {id: 'BCDR-05', description: "Conduct an annual disaster recovery drill with a full playbook.", priority: 'High', riskLevel: 'High', proof: 'DR Drill Report', location: 'Office'},
                ]
            },
            {
                title: "Incident Response Checklist",
                department: "Cybersecurity",
                frequency: "Per Incident",
                role: "Incident Commander",
                icon: <Siren />,
                summary: "Triage, isolate, preserve logs, notify stakeholders, forensics engagement, regulatory notifications.",
                tasks: [
                    {id: 'IR-01', description: "Triage the incident to determine its severity and scope.", priority: 'High', riskLevel: 'High', proof: 'Triage Report', location: 'War Room'},
                    {id: 'IR-02', description: "Isolate the affected systems from the network to prevent spread.", priority: 'High', riskLevel: 'High', proof: 'Network Change Log', location: 'System'},
                    {id: 'IR-03', description: "Preserve all relevant logs and create forensic images of affected systems.", priority: 'High', riskLevel: 'High', proof: 'Chain of Custody Form', location: 'System'},
                    {id: 'IR-04', description: "Notify key stakeholders (legal, management, comms) according to the plan.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'War Room'},
                    {id: 'IR-05', description: "Engage external forensics or legal counsel if required.", priority: 'High', riskLevel: 'High', proof: 'Engagement Letter', location: 'Office'},
                    {id: 'IR-06', description: "Notify regulatory bodies (e.g., CERT-In) within the required timeframe.", priority: 'High', riskLevel: 'High', proof: 'Regulatory Filing', location: 'Office'},
                ]
            },
            {
                title: "Vendor Security Assessment",
                department: "Security/Procurement",
                frequency: "Per Vendor",
                role: "Risk Analyst",
                icon: <Handshake />,
                summary: "Pre-onboard questionnaire, penetration test requirements, SLA security clauses.",
                tasks: [
                    {id: 'VSA-01', description: "Send a standardized security questionnaire to the vendor before onboarding.", priority: 'High', riskLevel: 'High', proof: 'Completed Questionnaire', location: 'Vendor File'},
                    {id: 'VSA-02', description: "For critical vendors, request their latest penetration test report or SOC 2 report.", priority: 'High', riskLevel: 'High', proof: 'Vendor Security Reports', location: 'Vendor File'},
                    {id: 'VSA-03', description: "Ensure the vendor contract includes robust security and data protection clauses.", priority: 'High', riskLevel: 'High', proof: 'Signed Contract', location: 'Legal'},
                    {id: 'VSA-04', description: "Conduct an annual security review for all critical vendors.", priority: 'High', riskLevel: 'High', proof: 'Annual Review Report', location: 'Vendor File'},
                    {id: 'VSA-05', description: 'Define clear SLAs for vulnerability remediation for all vendors.', priority: 'High', riskLevel: 'High', proof: 'Contract Clause', location: 'Legal' },
                ]
            },
             {
                title: "Firewall Rule Review",
                department: "Network Security",
                frequency: "Quarterly",
                role: "Network Engineer",
                icon: <Shield />,
                summary: "Quarterly audit of firewall rules to remove obsolete entries and ensure alignment with security policy.",
                tasks: [
                    { id: 'FRR-01', description: 'Review all firewall rules against business justification.', priority: 'High', riskLevel: 'High', proof: 'Rule Review Log', location: 'System' },
                    { id: 'FRR-02', description: 'Remove any obsolete or overly permissive rules.', priority: 'High', riskLevel: 'High', proof: 'Change Request Ticket', location: 'System' },
                    { id: 'FRR-03', description: 'Ensure an implicit deny rule is at the bottom of the ACL.', priority: 'High', riskLevel: 'High', proof: 'Firewall Configuration', location: 'System' },
                    { id: 'FRR-04', description: 'Document the purpose and owner of every rule.', priority: 'High', riskLevel: 'Medium', proof: 'Rule Base Documentation', location: 'System' },
                    { id: 'FRR-05', description: 'Analyze firewall logs for unusual traffic patterns.', priority: 'High', riskLevel: 'High', proof: 'Log Analysis Report', location: 'SIEM' },
                ]
            },
            {
                title: "Phishing Simulation & Training",
                department: "Security Awareness",
                frequency: "Quarterly",
                role: "Security Analyst",
                icon: <Fish />,
                summary: "Conduct quarterly phishing campaigns to test employee awareness and provide targeted training.",
                tasks: [
                    { id: 'PST-01', description: 'Design and launch a quarterly phishing simulation campaign.', priority: 'High', riskLevel: 'High', proof: 'Campaign Report', location: 'Simulation Platform' },
                    { id: 'PST-02', description: 'Track click rates and other metrics.', priority: 'High', riskLevel: 'Medium', proof: 'Campaign Dashboard', location: 'Simulation Platform' },
                    { id: 'PST-03', description: 'Assign remedial training to employees who failed the simulation.', priority: 'High', riskLevel: 'Medium', proof: 'Training Assignment Log', location: 'LMS' },
                    { id: 'PST-04', description: 'Share anonymized results with management to show trends.', priority: 'Medium', riskLevel: 'Low', proof: 'Management Report', location: 'Office' },
                    { id: 'PST-05', description: 'Update simulation templates to reflect current phishing trends.', priority: 'Medium', riskLevel: 'Medium', proof: 'Template Library', location: 'Simulation Platform' },
                ]
            },
            {
                title: "Cloud Security Posture Management (CSPM)",
                department: "Cloud Security",
                frequency: "Daily",
                role: "Cloud Security Engineer",
                icon: <Cloud />,
                summary: "Daily review of cloud security posture to identify misconfigurations like public S3 buckets or open security groups.",
                tasks: [
                    { id: 'CSPM-01', description: 'Review CSPM tool dashboard for critical alerts daily.', priority: 'High', riskLevel: 'High', proof: 'CSPM Dashboard', location: 'Cloud Security Tool' },
                    { id: 'CSPM-02', description: 'Remediate any public S3 buckets or equivalent storage exposures immediately.', priority: 'High', riskLevel: 'High', proof: 'Remediation Ticket', location: 'System' },
                    { id: 'CSPM-03', description: 'Audit security groups/NSGs for overly permissive inbound rules (e.g., 0.0.0.0/0).', priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'System' },
                    { id: 'CSPM-04', description: 'Ensure logging and monitoring are enabled for all cloud resources.', priority: 'High', riskLevel: 'High', proof: 'Logging Configuration Audit', location: 'System' },
                    { id: 'CSPM-05', description: 'Verify IAM roles and policies follow the principle of least privilege.', priority: 'High', riskLevel: 'High', proof: 'IAM Audit Report', location: 'System' },
                ]
            },
            {
                title: "AI Governance & Ethics Review",
                department: "AI/ML Ethics",
                frequency: "Per Model",
                role: "AI Ethics Officer",
                icon: <BrainCircuit />,
                summary: "A framework for assessing new AI/ML models for bias, fairness, and transparency before deployment.",
                tasks: [
                    { id: 'AIGE-01', description: 'Conduct a bias and fairness assessment on the model\'s training data.', priority: 'High', riskLevel: 'High', proof: 'Data Assessment Report', location: 'Data Science Platform' },
                    { id: 'AIGE-02', description: 'Test the model for biased outcomes across different demographics.', priority: 'High', riskLevel: 'High', proof: 'Model Bias Test Results', location: 'Data Science Platform' },
                    { id: 'AIGE-03', description: 'Document the model\'s purpose, limitations, and intended use.', priority: 'High', riskLevel: 'High', proof: 'Model Card', location: 'System' },
                    { id: 'AIGE-04', description: 'Develop a plan for monitoring the model for performance drift and emergent bias post-deployment.', priority: 'High', riskLevel: 'High', proof: 'Monitoring Plan', location: 'System' },
                    { id: 'AIGE-05', description: 'Obtain sign-off from the AI Ethics committee before production deployment.', priority: 'High', riskLevel: 'High', proof: 'Committee Sign-off', location: 'Office' },
                ]
            },
            {
                title: "Security Operations Center (SOC) Daily Brief",
                department: "SOC",
                frequency: "Daily",
                role: "SOC Analyst",
                icon: <Megaphone />,
                summary: "Daily process for reviewing critical alerts, escalating incidents, and briefing management on the current threat landscape.",
                tasks: [
                    { id: 'SOC-01', description: 'Review all P1/P2 alerts from the SIEM at the start of the shift.', priority: 'High', riskLevel: 'High', proof: 'SIEM Dashboard', location: 'SOC' },
                    { id: 'SOC-02', description: 'Triage and investigate alerts according to the incident response plan.', priority: 'High', riskLevel: 'High', proof: 'Incident Tickets', location: 'Ticketing System' },
                    { id: 'SOC-03', description: 'Escalate confirmed incidents to the appropriate teams.', priority: 'High', riskLevel: 'High', proof: 'Escalation Log', location: 'SOC' },
                    { id: 'SOC-04', description: 'Prepare a daily shift handover report summarizing all activities.', priority: 'High', riskLevel: 'Medium', proof: 'Handover Report', location: 'SOC' },
                    { id: 'SOC-05', description: 'Review threat intelligence feeds for new and relevant threats.', priority: 'High', riskLevel: 'Medium', proof: 'Threat Intel Report', location: 'SOC' },
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
        description: "A comprehensive NABH & JCI-aligned toolkit for hospital administrators to ensure patient safety, clinical quality, and operational excellence.",
        icon: <Hospital />,
        badgeText: "Clinical Grade",
        badgeVariant: "destructive",
        bestseller: true,
        whoIsItFor: ["Hospital COOs & CEOs", "Medical Directors", "Quality Assurance Heads", "Nursing Superintendents"],
        sampleItems: [
            { text: "Surgical safety & operating theatre (OT) protocols.", icon: <Stethoscope /> },
            { text: "Infection control & sterilization (CSSD).", icon: <SyringeIcon /> },
            { text: "Medication management & high-alert drugs.", icon: <Pill /> },
            { text: "Patient identification & safety.", icon: <UserCheck /> },
            { text: "Medical records & data privacy.", icon: <FileLock /> },
        ],
        globalStandards: {
            title: "Aligned with Leading Healthcare Accreditations",
            standards: [
                { name: "NABH", description: "National Accreditation Board for Hospitals & Healthcare Providers (India)." },
                { name: "JCI", description: "Joint Commission International standards for patient safety." },
                { name: "WHO Guidelines", description: "Protocols from the World Health Organization." },
                { name: "ISO 15189", description: "For quality and competence in medical laboratories." }
            ]
        },
        checklists: [
            {
                title: "Surgical Safety Checklist (WHO Aligned)",
                department: "Surgery",
                frequency: "Per Procedure",
                role: "Surgeon/Nurse",
                icon: <FileCheck />,
                summary: "Mandatory 'Time Out' before incision, confirming patient, site, and procedure. Prevents wrong-site surgery and is a core JCI/NABH requirement.",
                tasks: [
                    { id: 'H-SSC-01', description: 'Confirm patient identity, surgical site, procedure, and consent before anesthesia.', priority: 'High', riskLevel: 'High', proof: 'Verbal confirmation log', location: 'OT' },
                    { id: 'H-SSC-02', description: 'Mark the surgical site.', priority: 'High', riskLevel: 'High', proof: 'Visual check', location: 'Pre-op' },
                    { id: 'H-SSC-03', description: 'Review critical patient history, including allergies and airway risks.', priority: 'High', riskLevel: 'High', proof: 'Anesthesia record', location: 'OT' },
                    { id: 'H-SSC-04', description: 'Confirm instrument, sponge, and needle counts before closing.', priority: 'High', riskLevel: 'High', proof: 'Count sheet', location: 'OT' },
                    { id: 'H-SSC-05', description: 'Verbally confirm the name of the procedure recorded and specimen labeling.', priority: 'High', riskLevel: 'High', proof: 'Sign-out log', location: 'OT' },
                ]
            },
            {
                title: "Infection Control & Sterilization (CSSD)",
                department: "Infection Control",
                frequency: "Daily/Per Cycle",
                role: "CSSD Technician",
                icon: <Sparkles />,
                summary: "Daily checks for autoclave performance, biological indicator tests, and sterile package integrity. Prevents hospital-acquired infections (HAIs).",
                tasks: [
                    { id: 'H-IC-01', description: 'Run biological indicator tests in each autoclave load.', priority: 'High', riskLevel: 'High', proof: 'Test strip log', location: 'CSSD' },
                    { id: 'H-IC-02', description: 'Verify autoclave cycle parameters (time, temp, pressure) for each run.', priority: 'High', riskLevel: 'High', proof: 'Autoclave printout', location: 'CSSD' },
                    { id: 'H-IC-03', description: 'Check sterile packages for integrity, dryness, and expiry date before dispatch.', priority: 'High', riskLevel: 'High', proof: 'Package inspection log', location: 'CSSD' },
                    { id: 'H-IC-04', description: 'Monitor hand hygiene compliance in clinical areas.', priority: 'High', riskLevel: 'High', proof: 'Audit Form', location: 'Wards/ICU' },
                    { id: 'H-IC-05', description: 'Maintain a log for environmental cleaning and disinfection.', priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'All Areas' },
                ]
            },
            {
                title: "High-Alert Medication SOP",
                department: "Pharmacy/Nursing",
                frequency: "Per Administration",
                role: "Nurse",
                icon: <Pill />,
                summary: "Independent double-check for dosage calculation and administration of high-alert drugs like insulin and heparin.",
                tasks: [
                    { id: 'H-MED-01', description: 'Require two licensed nurses to independently verify dosage calculations for high-alert medications.', priority: 'High', riskLevel: 'High', proof: 'Dual sign-off on MAR', location: 'Medication Room' },
                    { id: 'H-MED-02', description: 'Store Look-Alike, Sound-Alike (LASA) drugs in separate, labeled bins.', priority: 'High', riskLevel: 'High', proof: 'Storage audit photo', location: 'Pharmacy' },
                    { id: 'H-MED-03', description: 'Use smart infusion pumps with dose error reduction software for IV high-alert drugs.', priority: 'High', riskLevel: 'High', proof: 'Pump Log', location: 'Patient Bedside' },
                    { id: 'H-MED-04', description: 'Patient education on high-alert medications before discharge.', priority: 'High', riskLevel: 'Medium', proof: 'Patient Education Form', location: 'Discharge Lounge' },
                    { id: 'H-MED-05', description: 'Quarterly audit of high-alert medication incidents and near-misses.', priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'Quality Dept' },
                ]
            },
            {
                title: "Patient Identification Protocol",
                department: "All Clinical",
                frequency: "Per Interaction",
                role: "All Clinical Staff",
                icon: <UserCheck />,
                summary: "Use at least two patient identifiers (e.g., name and MRN) before any procedure, sample collection, or medication administration.",
                tasks: [
                    { id: 'H-PID-01', description: 'Verify patient identity using at least two identifiers (e.g., full name and date of birth) before drawing blood.', priority: 'High', riskLevel: 'High', proof: 'Verbal confirmation', location: 'Patient Bedside' },
                    { id: 'H-PID-02', description: 'Match the patient ID band with the medication chart before administering any drug.', priority: 'High', riskLevel: 'High', proof: 'MAR sign-off', location: 'Patient Bedside' },
                    { id: 'H-PID-03', description: 'Label all laboratory samples in the presence of the patient.', priority: 'High', riskLevel: 'High', proof: 'Procedure Adherence Audit', location: 'Patient Bedside' },
                    { id: 'H-PID-04', description: 'Cross-check patient identifiers before any blood transfusion.', priority: 'High', riskLevel: 'High', proof: 'Transfusion Checklist', location: 'Patient Bedside' },
                    { id: 'H-PID-05', description: 'Use barcode scanning for patient ID and medication verification where available.', priority: 'High', riskLevel: 'High', proof: 'Scan Log', location: 'System' },
                ]
            },
            {
                title: "Biomedical Waste Management",
                department: "Housekeeping/Compliance",
                frequency: "Daily",
                role: "Bio-medical Waste Officer",
                icon: <Recycle />,
                summary: "Ensures correct segregation, storage, and disposal of biomedical waste as per regulatory norms.",
                tasks: [
                    { id: 'H-BMW-01', description: "Audit waste segregation into correct color-coded bins at point of generation.", priority: 'High', riskLevel: 'High', proof: 'Audit Checklist', location: 'Wards/OT' },
                    { id: 'H-BMW-02', description: "Ensure biomedical waste is stored in a secure, designated area.", priority: 'High', riskLevel: 'High', proof: 'Storage Area Inspection', location: 'Waste Area' },
                    { id: 'H-BMW-03', description: "Maintain a log of all waste handed over to the authorized disposal agency.", priority: 'High', riskLevel: 'High', proof: 'Disposal Log', location: 'Waste Area' },
                    { id: 'H-BMW-04', description: "Check that sharps containers are not overfilled and are sealed correctly.", priority: 'High', riskLevel: 'High', proof: 'Sharps Container Log', location: 'Wards' },
                    { id: 'H-BMW-05', description: "Train all staff on correct biomedical waste handling procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                ]
            },
            {
                title: "Medical Equipment Maintenance",
                department: "Biomedical Engineering",
                frequency: "Scheduled",
                role: "Biomedical Engineer",
                icon: <Wrench />,
                summary: "Preventive maintenance and calibration schedule for all critical medical equipment like ventilators, defibrillators, and monitors.",
                tasks: [
                    { id: 'H-EQUIP-01', description: 'Follow the preventive maintenance schedule for all critical equipment.', priority: 'High', riskLevel: 'High', proof: 'PM Schedule', location: 'System' },
                    { id: 'H-EQUIP-02', description: 'Calibrate all diagnostic equipment as per manufacturer recommendations.', priority: 'High', riskLevel: 'High', proof: 'Calibration Certificates', location: 'Biomed Dept' },
                    { id: 'H-EQUIP-03', description: 'Maintain a detailed service history for each piece of equipment.', priority: 'High', riskLevel: 'High', proof: 'Equipment Logbook', location: 'Biomed Dept' },
                    { id: 'H-EQUIP-04', description: 'Tag any faulty equipment as "Out of Service" immediately.', priority: 'High', riskLevel: 'High', proof: 'Tag Log', location: 'Various' },
                    { id: 'H-EQUIP-05', description: 'Check battery backup for critical life-support equipment daily.', priority: 'High', riskLevel: 'High', proof: 'Battery Check Log', location: 'ICU/OT' },
                ]
            },
            {
                title: "Medical Record & Data Privacy",
                department: "Medical Records Dept.",
                frequency: "Ongoing",
                role: "MRD Officer",
                icon: <FileLock />,
                summary: "Ensures patient confidentiality through access controls, secure storage, and compliant data sharing.",
                tasks: [
                    { id: 'H-MRD-01', description: 'Audit access logs to the Hospital Information System (HIS) weekly.', priority: 'High', riskLevel: 'High', proof: 'Access Log Audit Report', location: 'System' },
                    { id: 'H-MRD-02', description: 'Ensure physical records are stored in a secure, access-controlled area.', priority: 'High', riskLevel: 'High', proof: 'Storage Area Inspection', location: 'MRD' },
                    { id: 'H-MRD-03', description: 'Follow a strict protocol for releasing patient information to third parties.', priority: 'High', riskLevel: 'High', proof: 'Information Release Log', location: 'MRD' },
                    { id: 'H-MRD-04', description: 'Train all staff on patient data confidentiality and privacy laws.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'H-MRD-05', description: 'Ensure all digital patient data is encrypted both at rest and in transit.', priority: 'High', riskLevel: 'High', proof: 'Encryption Policy', location: 'IT Dept' },
                ]
            },
            {
                title: "Emergency Code & Drill Management",
                department: "Quality/Safety",
                frequency: "Quarterly",
                role: "Safety Officer",
                icon: <Siren />,
                summary: "Manages mock drills for various emergency codes (Code Blue, Code Red) to ensure staff are prepared and response is effective.",
                tasks: [
                    { id: 'H-DRILL-01', description: 'Conduct a quarterly mock drill for Code Blue (Medical Emergency).', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Various' },
                    { id: 'H-DRILL-02', description: 'Conduct a quarterly mock drill for Code Red (Fire).', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Various' },
                    { id: 'H-DRILL-03', description: 'Debrief with the team after each drill to identify areas for improvement.', priority: 'High', riskLevel: 'High', proof: 'Debrief Minutes', location: 'Office' },
                    { id: 'H-DRILL-04', description: 'Check that emergency carts (crash carts) are fully stocked and sealed.', priority: 'High', riskLevel: 'High', proof: 'Crash Cart Checklist', location: 'Wards/ICU' },
                    { id: 'H-DRILL-05', description: 'Ensure all staff know the emergency contact numbers and codes.', priority: 'High', riskLevel: 'High', proof: 'Staff Quiz/Survey', location: 'HR' },
                ]
            },
            {
                title: "Laboratory Quality Control",
                department: "Laboratory",
                frequency: "Daily",
                role: "Lab Manager",
                icon: <Microscope />,
                summary: "Daily checks to ensure accuracy and reliability of lab tests, covering equipment, reagents, and sample handling.",
                tasks: [
                    { id: 'H-LAB-01', description: 'Run daily quality control samples for all analysers.', priority: 'High', riskLevel: 'High', proof: 'QC Log', location: 'Lab' },
                    { id: 'H-LAB-02', description: 'Check and log temperatures of all refrigerators and incubators.', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Lab' },
                    { id: 'H-LAB-03', description: 'Verify reagent expiry dates and lot numbers.', priority: 'High', riskLevel: 'High', proof: 'Reagent Log', location: 'Lab' },
                    { id: 'H-LAB-04', description: 'Follow a strict protocol for sample collection, labeling, and rejection.', priority: 'High', riskLevel: 'High', proof: 'Sample Rejection Log', location: 'Lab' },
                    { id: 'H-LAB-05', description: 'Participate in external quality assurance schemes (EQAS).', priority: 'High', riskLevel: 'High', proof: 'EQAS Participation Certificate', location: 'Lab Office' },
                ]
            },
            {
                title: "Patient Discharge Process",
                department: "Nursing/Billing",
                frequency: "Per Patient",
                role: "Discharge Nurse",
                icon: <Milestone />,
                summary: "A coordinated process to ensure a safe and smooth patient discharge, covering medication counseling, follow-up appointments, and final billing.",
                tasks: [
                    { id: 'H-DIS-01', description: 'Finalize the discharge summary with the treating doctor.', priority: 'High', riskLevel: 'High', proof: 'Signed Discharge Summary', location: 'Patient File' },
                    { id: 'H-DIS-02', description: 'Counsel the patient and family on post-discharge medications and care.', priority: 'High', riskLevel: 'High', proof: 'Counseling Form', location: 'Patient Room' },
                    { id: 'H-DIS-03', description: 'Schedule any required follow-up appointments.', priority: 'High', riskLevel: 'Medium', proof: 'Appointment Card', location: 'Discharge Lounge' },
                    { id: 'H-DIS-04', description: 'Coordinate with the billing department to ensure final bill is ready.', priority: 'High', riskLevel: 'Medium', proof: 'Billing Clearance', location: 'Billing Dept' },
                    { id: 'H-DIS-05', description: 'Ensure the patient has all necessary prescriptions and reports before leaving.', priority: 'High', riskLevel: 'High', proof: 'Discharge Checklist', location: 'Discharge Lounge' },
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
        description: "An essential compliance toolkit for retail and hospital pharmacies to ensure medication safety, inventory control, and regulatory adherence.",
        icon: <Pill />,
        whoIsItFor: ["Pharmacists-in-Charge", "Pharmacy Owners", "Hospital Pharmacy Directors", "Compliance Officers"],
        sampleItems: [
            { text: "Dispensing accuracy & error prevention.", icon: <FileCheck /> },
            { text: "Controlled substance & narcotics logs.", icon: <FileLock /> },
            { text: "Cold chain management for vaccines.", icon: <Thermometer /> },
            { text: "Inventory management & expiry control.", icon: <Recycle /> },
            { text: "Patient counseling & medication therapy management.", icon: <UserCheck /> },
        ],
        globalStandards: {
            title: "Aligned with Pharmacy & Drug Regulations",
            standards: [
                { name: "Drugs & Cosmetics Act", description: "Compliance with Indian laws governing drug dispensing and storage." },
                { name: "NABH Pharmacy Standards", description: "Adherence to accreditation standards for hospital pharmacies." },
                { name: "USP Guidelines", description: "References from the United States Pharmacopeia for compounding and handling." },
                { name: "WHO Good Pharmacy Practice", description: "International guidelines for quality pharmacy services." }
            ]
        },
        checklists: [
            {
                title: "Dispensing Accuracy SOP",
                department: "Pharmacy",
                frequency: "Per Prescription",
                role: "Pharmacist",
                icon: <FileCheck />,
                summary: "Multi-stage verification: prescription vs. label, drug vs. prescription, final check before handing over to patient.",
                tasks: [
                    { id: 'PHARM-DISP-01', description: "Verify prescription details (drug, strength, dosage) against the label generated.", priority: 'High', riskLevel: 'High', proof: 'Pharmacist initial', location: 'Dispensing Counter' },
                    { id: 'PHARM-DISP-02', description: "Perform a final check of the dispensed medication against the original prescription before bagging.", priority: 'High', riskLevel: 'High', proof: 'Final check initial', location: 'Dispensing Counter' },
                    { id: 'PHARM-DISP-03', description: "Use separate trays for each prescription to avoid mix-ups.", priority: 'High', riskLevel: 'High', proof: 'Visual SOP', location: 'Dispensing Counter' },
                    { id: 'PHARM-DISP-04', description: 'Counsel patient on the medication being dispensed.', priority: 'High', riskLevel: 'High', proof: 'Counseling Log', location: 'Dispensing Counter' },
                    { id: 'PHARM-DISP-05', description: 'Check for potential drug interactions for patients with multiple prescriptions.', priority: 'High', riskLevel: 'High', proof: 'System Alert Review', location: 'System' },
                ]
            },
            {
                title: "Controlled Substance Log",
                department: "Compliance",
                frequency: "Daily",
                role: "Pharmacist-in-Charge",
                icon: <FileLock />,
                summary: "Daily physical count vs. system record, dual sign-off, immediate reporting of discrepancies.",
                tasks: [
                    { id: 'PHARM-CS-01', description: "Perform a daily physical count of all controlled substances.", priority: 'High', riskLevel: 'High', proof: 'Physical Count Log', location: 'Safe' },
                    { id: 'PHARM-CS-02', description: "Reconcile physical count with the system record, with dual sign-off.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Log', location: 'System/Logbook' },
                    { id: 'PHARM-CS-03', description: "Report any discrepancies to management and regulatory bodies immediately.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Office' },
                    { id: 'PHARM-CS-04', description: 'Review dispensing records for any unusual patterns.', priority: 'High', riskLevel: 'High', proof: 'Audit Trail Report', location: 'System' },
                    { id: 'PHARM-CS-05', description: 'Ensure controlled substances are stored in a locked safe with restricted access.', priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Safe' },
                ]
            },
            {
                title: "Cold Chain Management",
                department: "Operations",
                frequency: "Twice Daily",
                role: "Pharmacist",
                icon: <Thermometer />,
                summary: "Twice-daily temperature logging for vaccine refrigerators, backup power checks, and cool-box validation for transport.",
                tasks: [
                    { id: 'PHARM-CC-01', description: "Log refrigerator temperatures in the morning and evening.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Refrigerator' },
                    { id: 'PHARM-CC-02', description: "Test the temperature alarm system weekly.", priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Refrigerator' },
                    { id: 'PHARM-CC-03', description: "Check backup power source (UPS/generator) weekly.", priority: 'High', riskLevel: 'High', proof: 'Backup Power Test Log', location: 'Back Office' },
                    { id: 'PHARM-CC-04', description: 'Document corrective actions for any temperature excursions.', priority: 'High', riskLevel: 'High', proof: 'Corrective Action Log', location: 'Office' },
                    { id: 'PHARM-CC-05', description: 'Validate cool boxes used for transport before each use.', priority: 'High', riskLevel: 'High', proof: 'Cool Box Validation Log', location: 'Transport Area' },
                ]
            },
            {
                title: "Expiry Management SOP",
                department: "Inventory",
                frequency: "Monthly",
                role: "Stockist",
                icon: <Recycle />,
                summary: "Monthly sweep for near-expiry drugs (3-6 months), quarantine, and return-to-vendor process.",
                tasks: [
                    { id: 'PHARM-EXP-01', description: "Perform a monthly sweep of shelves to identify drugs expiring within 6 months.", priority: 'High', riskLevel: 'Medium', proof: 'Near-Expiry Log', location: 'Shelves' },
                    { id: 'PHARM-EXP-02', description: "Move near-expiry drugs to a designated quarantine area.", priority: 'High', riskLevel: 'Medium', proof: 'Quarantine Area Log', location: 'Quarantine Area' },
                    { id: 'PHARM-EXP-03', description: "Initiate the return-to-vendor process for eligible expired drugs.", priority: 'High', riskLevel: 'Medium', proof: 'Return Forms', location: 'Office' },
                    { id: 'PHARM-EXP-04', description: 'Document all expired drugs that are destroyed.', priority: 'High', riskLevel: 'High', proof: 'Destruction Log', location: 'Office' },
                    { id: 'PHARM-EXP-05', description: 'Implement FIFO (First-In, First-Out) for all stock.', priority: 'High', riskLevel: 'High', proof: 'Stock Audit', location: 'Shelves' },
                ]
            },
             {
                title: "Compounding & Aseptic Technique",
                department: "Pharmacy",
                frequency: "Per Compounding",
                role: "Compounding Pharmacist",
                icon: <TestTube />,
                summary: "Checklist for sterile compounding, including hood cleaning, garbing, and ingredient verification.",
                tasks: [
                    { id: 'PHARM-COMP-01', description: 'Clean and sanitize the laminar flow hood before each use.', priority: 'High', riskLevel: 'High', proof: 'Hood Cleaning Log', location: 'Compounding Room' },
                    { id: 'PHARM-COMP-02', description: 'Follow the correct garbing procedure (gloves, gown, mask).', priority: 'High', riskLevel: 'High', proof: 'Garbing Checklist', location: 'Compounding Room' },
                    { id: 'PHARM-COMP-03', description: 'Verify all ingredients and their quantities before compounding.', priority: 'High', riskLevel: 'High', proof: 'Compounding Worksheet', location: 'Compounding Room' },
                    { id: 'PHARM-COMP-04', description: 'Perform final product testing for sterility and potency as required.', priority: 'High', riskLevel: 'High', proof: 'QC Test Results', location: 'Lab' },
                    { id: 'PHARM-COMP-05', description: 'Label all compounded products accurately with beyond-use dates.', priority: 'High', riskLevel: 'High', proof: 'Label Verification', location: 'Compounding Room' },
                ]
            },
            {
                title: "Patient Counseling Checklist",
                department: "Pharmacy",
                frequency: "Per New Prescription",
                role: "Pharmacist",
                icon: <UserCheck />,
                summary: "A checklist to ensure all key points are covered during patient counseling for new medications.",
                tasks: [
                    { id: 'PC-01', description: 'Explain the name of the drug and what it is for.', priority: 'High', riskLevel: 'High', proof: 'Counseling Log', location: 'Counseling Area' },
                    { id: 'PC-02', description: 'Explain the dosage, route, and frequency of administration.', priority: 'High', riskLevel: 'High', proof: 'Counseling Log', location: 'Counseling Area' },
                    { id: 'PC-03', description: 'Discuss common side effects and what to do if they occur.', priority: 'High', riskLevel: 'High', proof: 'Counseling Log', location: 'Counseling Area' },
                    { id: 'PC-04', description: 'Explain any special instructions (e.g., take with food).', priority: 'High', riskLevel: 'High', proof: 'Counseling Log', location: 'Counseling Area' },
                    { id: 'PC-05', description: 'Ask the patient to repeat back the instructions to confirm understanding.', priority: 'High', riskLevel: 'High', proof: 'Teach-back Confirmation', location: 'Counseling Area' },
                ]
            },
            {
                title: "Vendor Qualification",
                department: "Procurement",
                frequency: "Per New Vendor",
                role: "Procurement Manager",
                icon: <Handshake />,
                summary: "A process to verify the credentials and quality standards of new drug suppliers.",
                tasks: [
                    { id: 'VQ-01', description: 'Verify the vendor has a valid drug license.', priority: 'High', riskLevel: 'High', proof: 'License Copy', location: 'Vendor File' },
                    { id: 'VQ-02', description: 'Check the vendor\'s reputation and history.', priority: 'Medium', riskLevel: 'Medium', proof: 'Reference Checks', location: 'Office' },
                    { id: 'VQ-03', description: 'Ensure the vendor can provide a Certificate of Analysis (COA) for products.', priority: 'High', riskLevel: 'High', proof: 'Sample COA', location: 'Vendor File' },
                    { id: 'VQ-04', description: 'Establish a quality agreement with the vendor.', priority: 'High', riskLevel: 'High', proof: 'Signed Quality Agreement', location: 'Vendor File' },
                    { id: 'VQ-05', description: 'Audit the vendor\'s storage and transport facilities if possible.', priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'Vendor File' },
                ]
            },
            {
                title: "Adverse Drug Reaction (ADR) Reporting",
                department: "Pharmacovigilance",
                frequency: "Per Incident",
                role: "Pharmacist",
                icon: <FileWarning />,
                summary: "A procedure for documenting and reporting adverse drug reactions to the relevant authorities.",
                tasks: [
                    { id: 'ADR-01', description: 'Document the patient\'s details and the suspected ADR in the ADR form.', priority: 'High', riskLevel: 'High', proof: 'ADR Form', location: 'System' },
                    { id: 'ADR-02', description: 'Gather all relevant information, including other medications being taken.', priority: 'High', riskLevel: 'High', proof: 'Patient History', location: 'System' },
                    { id: 'ADR-03', description: 'Report the ADR to the national pharmacovigilance program (e.g., PvPI in India).', priority: 'High', riskLevel: 'High', proof: 'Reporting Confirmation', location: 'System' },
                    { id: 'ADR-04', description: 'Follow up with the patient as needed.', priority: 'Medium', riskLevel: 'Medium', proof: 'Follow-up Log', location: 'System' },
                    { id: 'ADR-05', description: 'Analyze ADR data quarterly to identify trends.', priority: 'Medium', riskLevel: 'Medium', proof: 'ADR Analysis Report', location: 'Office' },
                ]
            },
            {
                title: "Emergency Kit & Crash Cart Audit",
                department: "Pharmacy/Clinical",
                frequency: "Monthly",
                role: "Senior Pharmacist",
                icon: <Ambulance />,
                summary: "Monthly audit of emergency drug kits and hospital crash carts to ensure all drugs are present and in-date.",
                tasks: [
                    { id: 'EKIT-01', description: 'Check all emergency kits against the standard inventory list.', priority: 'High', riskLevel: 'High', proof: 'Kit Checklist', location: 'Various' },
                    { id: 'EKIT-02', description: 'Verify the expiry dates of all medications in the kits.', priority: 'High', riskLevel: 'High', proof: 'Expiry Log', location: 'Various' },
                    { id: 'EKIT-03', description: 'Replace any used or expired items immediately.', priority: 'High', riskLevel: 'High', proof: 'Replacement Log', location: 'Pharmacy' },
                    { id: 'EKIT-04', description: 'Ensure all kits are sealed and have a valid inspection tag.', priority: 'High', riskLevel: 'High', proof: 'Inspection Tag', location: 'Various' },
                    { id: 'EKIT-05', description: 'Document the audit for each kit.', priority: 'High', riskLevel: 'High', proof: 'Master Audit Log', location: 'Pharmacy' },
                ]
            },
            {
                title: "Legal & Regulatory Compliance",
                department: "Compliance",
                frequency: "Quarterly",
                role: "Compliance Officer",
                icon: <Scale />,
                summary: "Quarterly review to ensure the pharmacy is compliant with all local and national drug laws.",
                tasks: [
                    { id: 'LRC-01', description: 'Verify that the pharmacy license is current and displayed.', priority: 'High', riskLevel: 'High', proof: 'License Photo', location: 'Pharmacy' },
                    { id: 'LRC-02', description: 'Check that pharmacist registrations are up to date.', priority: 'High', riskLevel: 'High', proof: 'Registration Certificates', location: 'Office' },
                    { id: 'LRC-03', description: 'Review record-keeping practices for compliance with the Drugs & Cosmetics Act.', priority: 'High', riskLevel: 'High', proof: 'Record Audit', location: 'Office' },
                    { id: 'LRC-04', description: 'Ensure all advertising and promotional materials are compliant.', priority: 'High', riskLevel: 'Medium', proof: 'Material Review', location: 'Office' },
                    { id: 'LRC-05', description: 'Stay updated on any changes to pharmacy laws and regulations.', priority: 'High', riskLevel: 'High', proof: 'Regulatory Update Log', location: 'Office' },
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
            { text: "Student attendance & transport safety.", icon: <Bus /> },
            { text: "Child protection & background verification.", icon: <ShieldCheck /> },
            { text: "Canteen hygiene & food safety.", icon: <Utensils /> },
            { text: "Fire & lockdown drills.", icon: <Siren /> },
            { text: "Health screening & outbreak control.", icon: <HeartPulse /> },
        ],
        globalStandards: {
            title: "Aligned with Education Safety Norms",
            standards: [
                { name: "POCSO Guidelines", description: "For child protection and safety in India." },
                { name: "CBSE/ICSE Safety Norms", description: "Adherence to guidelines from major Indian educational boards." },
                { name: "RTE Act", description: "Compliance with the Right to Education Act where applicable." },
                { name: "UNCRC Principles", description: "References the UN Convention on the Rights of the Child." }
            ]
        },
        checklists: [
            {
                title: "Transport & Bus Safety Checklist",
                department: "Transport",
                frequency: "Daily",
                role: "Transport Manager",
                icon: <Bus />,
                summary: "Seat-by-seat check upon deboarding, GPS route verification, driver + attendant sign-off, CCTV logs.",
                tasks: [
                    { id: 'SCH-TRANS-01', description: "Conduct a seat-by-seat check of the bus after the final drop-off to ensure no child is left behind.", priority: 'High', riskLevel: 'High', proof: 'End-of-Trip Log', location: 'Bus' },
                    { id: 'SCH-TRANS-02', description: "Verify GPS is active and the bus is following the approved route.", priority: 'High', riskLevel: 'High', proof: 'GPS Monitoring System', location: 'Transport Office' },
                    { id: 'SCH-TRANS-03', description: "Ensure both the driver and attendant sign the trip log.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Trip Log', location: 'Transport Office' },
                    { id: 'SCH-TRANS-04', description: "Review CCTV footage from a random bus weekly.", priority: 'High', riskLevel: 'Medium', proof: 'CCTV Review Log', location: 'Security Office' },
                    { id: 'SCH-TRANS-05', description: 'Check first aid kit and fire extinguisher on each bus daily.', priority: 'High', riskLevel: 'High', proof: 'Bus Safety Check Log', location: 'Bus' },
                ]
            },
            {
                title: "Staff Background & Induction SOP",
                department: "HR",
                frequency: "Per Hire",
                role: "HR Manager",
                icon: <UserCheck />,
                summary: "Police verification, reference checks, child-safety induction, mandatory child-protection training.",
                tasks: [
                    { id: 'SCH-HR-01', description: "Complete police verification for all new staff before they interact with students.", priority: 'High', riskLevel: 'High', proof: 'Police Verification Report', location: 'Employee File' },
                    { id: 'SCH-HR-02', description: "Conduct and document at least two professional reference checks.", priority: 'High', riskLevel: 'High', proof: 'Reference Check Forms', location: 'Employee File' },
                    { id: 'SCH-HR-03', description: "Provide mandatory child-protection policy (POCSO) training during induction.", priority: 'High', riskLevel: 'High', proof: 'Training Acknowledgement Form', location: 'Employee File' },
                    { id: 'SCH-HR-04', description: 'Verify educational qualifications and past employment.', priority: 'High', riskLevel: 'High', proof: 'Document Verification', location: 'Employee File' },
                    { id: 'SCH-HR-05', description: 'Ensure all staff sign the code of conduct.', priority: 'High', riskLevel: 'High', proof: 'Signed Code of Conduct', location: 'Employee File' },
                ]
            },
            {
                title: "Canteen HACCP Checklist",
                department: "Cafeteria",
                frequency: "Daily",
                role: "Canteen Manager",
                icon: <Utensils />,
                summary: "Supplier proof, fridge temp logs, hygienic handling, allergen notices for parents.",
                tasks: [
                    { id: 'SCH-CANTEEN-01', description: "Verify FSSAI license of all food suppliers.", priority: 'High', riskLevel: 'High', proof: 'Supplier File', location: 'Admin Office' },
                    { id: 'SCH-CANTEEN-02', description: "Log refrigerator and freezer temperatures twice daily.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Kitchen' },
                    { id: 'SCH-CANTEEN-03', description: "Audit staff for hygienic handling of food (gloves, hairnets).", priority: 'High', riskLevel: 'High', proof: 'Hygiene Audit Log', location: 'Kitchen' },
                    { id: 'SCH-CANTEEN-04', description: "Display a clear allergen information chart.", priority: 'High', riskLevel: 'High', proof: 'Photo of Display', location: 'Canteen' },
                    { id: 'SCH-CANTEEN-05', description: 'Check that food is cooked to the correct internal temperatures.', priority: 'High', riskLevel: 'High', proof: 'Cooking Temperature Log', location: 'Kitchen' },
                ]
            },
            {
                title: "Fire & Lockdown Drill SOP",
                department: "Safety",
                frequency: "Termly",
                role: "Safety Officer",
                icon: <Siren />,
                summary: "Term-wise drills, assembly point logs, disabled-access evacuation plan.",
                tasks: [
                    { id: 'SCH-DRILL-01', description: "Conduct and document a fire drill and a lockdown drill each term.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Office' },
                    { id: 'SCH-DRILL-02', description: "Take attendance at the designated assembly point during drills.", priority: 'High', riskLevel: 'High', proof: 'Assembly Point Log', location: 'Assembly Point' },
                    { id: 'SCH-DRILL-03', description: "Have a specific, documented evacuation plan for students with disabilities.", priority: 'High', riskLevel: 'High', proof: 'Special Needs Evacuation Plan', location: 'Office' },
                    { id: 'SCH-DRILL-04', description: 'Test all alarm systems before conducting a drill.', priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Control Room' },
                    { id: 'SCH-DRILL-05', description: 'Debrief with staff after each drill to identify improvements.', priority: 'High', riskLevel: 'Medium', proof: 'Debrief Minutes', location: 'Office' },
                ]
            },
            {
                title: "Sickness Screening & Isolation SOP",
                department: "Health",
                frequency: "Daily/As needed",
                role: "School Nurse",
                icon: <HeartPulse />,
                summary: "Temperature checks, isolation room readiness, parent notification and record.",
                tasks: [
                    { id: 'SCH-HEALTH-01', description: "Conduct temperature checks for students showing signs of illness.", priority: 'High', riskLevel: 'Medium', proof: 'Screening Log', location: 'Infirmary' },
                    { id: 'SCH-HEALTH-02', description: "Ensure the designated isolation room is clean and ready with basic supplies.", priority: 'High', riskLevel: 'High', proof: 'Room Readiness Checklist', location: 'Isolation Room' },
                    { id: 'SCH-HEALTH-03', description: "Notify parents immediately if a child is isolated.", priority: 'High', riskLevel: 'High', proof: 'Parent Communication Log', location: 'Infirmary' },
                    { id: 'SCH-HEALTH-04', description: "Log all details of the sickness and actions taken.", priority: 'High', riskLevel: 'Medium', proof: 'Student Health Record', location: 'Infirmary' },
                    { id: 'SCH-HEALTH-05', description: 'Follow protocol for notifying health authorities in case of a notifiable disease.', priority: 'High', riskLevel: 'High', proof: 'Notification Record', location: 'Office' },
                ]
            },
            {
                title: "Playground Safety Inspection",
                department: "Facilities",
                frequency: "Weekly",
                role: "Facilities Manager",
                icon: <FerrisWheel />,
                summary: "Weekly checks of playground equipment for damage, sharp edges, and fall surface adequacy.",
                tasks: [
                    { id: 'PG-01', description: 'Inspect all playground equipment for structural integrity and damage.', priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Playground' },
                    { id: 'PG-02', description: 'Check for any sharp edges or protrusion hazards.', priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Playground' },
                    { id: 'PG-03', description: 'Ensure fall surfaces (e.g., rubber mats, sand) are adequate and well-maintained.', priority: 'High', riskLevel: 'High', proof: 'Surface Depth Check', location: 'Playground' },
                    { id: 'PG-04', description: 'Report and cordon off any unsafe equipment immediately.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Request', location: 'Playground' },
                    { id: 'PG-05', description: 'Check for any foreign objects or debris in the play area.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Playground' },
                ]
            },
            {
                title: "Visitor Management & Campus Security",
                department: "Security",
                frequency: "Daily",
                role: "Security Guard",
                icon: <UserCog />,
                summary: "Strict protocol for verifying and tracking all visitors to ensure student safety.",
                tasks: [
                    { id: 'VMCS-01', description: 'Verify the identity of every visitor against a photo ID.', priority: 'High', riskLevel: 'High', proof: 'Visitor Log', location: 'Main Gate' },
                    { id: 'VMCS-02', description: 'Issue a visitor pass that must be worn at all times.', priority: 'High', riskLevel: 'High', proof: 'Pass Issue Log', location: 'Main Gate' },
                    { id: 'VMCS-03', description: 'Log the entry and exit times of all visitors.', priority: 'High', riskLevel: 'High', proof: 'Visitor Log', location: 'Main Gate' },
                    { id: 'VMCS-04', description: 'Escort visitors to their destination within the campus.', priority: 'High', riskLevel: 'Medium', proof: 'Escort Protocol', location: 'Campus' },
                    { id: 'VMCS-05', description: 'Perform regular patrols of the campus perimeter.', priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Campus' },
                ]
            },
            {
                title: "Classroom Safety & Hygiene",
                department: "Academics/Housekeeping",
                frequency: "Daily",
                role: "Teacher/Supervisor",
                icon: <Home />,
                summary: "Daily checks to ensure classrooms are safe, clean, and conducive to learning.",
                tasks: [
                    { id: 'CSH-01', description: 'Ensure classroom is clean and sanitized before students arrive.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Classroom' },
                    { id: 'CSH-02', description: 'Check for any unsafe furniture or equipment.', priority: 'High', riskLevel: 'High', proof: 'Safety Check Log', location: 'Classroom' },
                    { id: 'CSH-03', description: 'Ensure proper ventilation and lighting.', priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Classroom' },
                    { id: 'CSH-04', description: 'Keep walkways and emergency exits clear of obstructions.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Classroom' },
                    { id: 'CSH-05', description: 'Report any maintenance issues immediately.', priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Request', location: 'Classroom' },
                ]
            },
            {
                title: "IT & Digital Safety",
                department: "IT",
                frequency: "Ongoing",
                role: "IT Administrator",
                icon: <Computer />,
                summary: "Managing internet content filters, student data privacy, and responsible use of technology.",
                tasks: [
                    { id: 'ITDS-01', description: 'Ensure internet content filters are active and updated.', priority: 'High', riskLevel: 'High', proof: 'Filter Logs', location: 'Server Room' },
                    { id: 'ITDS-02', description: 'Implement and enforce a strict student data privacy policy.', priority: 'High', riskLevel: 'High', proof: 'Privacy Policy', location: 'Office' },
                    { id: 'ITDS-03', description: 'Conduct digital citizenship and online safety workshops for students.', priority: 'High', riskLevel: 'Medium', proof: 'Workshop Schedule', location: 'School' },
                    { id: 'ITDS-04', description: 'Monitor network for any unauthorized access or activity.', priority: 'High', riskLevel: 'High', proof: 'Network Monitoring Tool', location: 'IT Office' },
                    { id: 'ITDS-05', description: 'Ensure all school devices have up-to-date antivirus software.', priority: 'High', riskLevel: 'High', proof: 'Software Audit', location: 'IT Office' },
                ]
            },
            {
                title: "Admissions & Record Management",
                department: "Admissions",
                frequency: "Per Admission",
                role: "Admissions Officer",
                icon: <FileCheck />,
                summary: "A compliant and organized process for managing student admissions and maintaining records.",
                tasks: [
                    { id: 'ARM-01', description: 'Verify all required documents (birth certificate, previous school records) are submitted.', priority: 'High', riskLevel: 'High', proof: 'Document Checklist', location: 'Admissions Office' },
                    { id: 'ARM-02', description: 'Create a secure physical and digital file for each student.', priority: 'High', riskLevel: 'High', proof: 'Student File', location: 'Admissions Office' },
                    { id: 'ARM-03', description: 'Ensure all data is entered correctly into the Student Information System (SIS).', priority: 'High', riskLevel: 'High', proof: 'Data Entry Audit', location: 'System' },
                    { id: 'ARM-04', description: 'Follow a strict protocol for handling and storing sensitive student data.', priority: 'High', riskLevel: 'High', proof: 'Data Handling Policy', location: 'Office' },
                    { id: 'ARM-05', description: 'Maintain a clear record of all communications with parents during the admission process.', priority: 'Medium', riskLevel: 'Medium', proof: 'Communication Log', location: 'CRM' },
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
            { text: "Laboratory safety & chemical management.", icon: <TestTube /> },
            { text: "Research ethics & data management.", icon: <DatabaseZap /> },
            { text: "Hostel operations & fire safety.", icon: <Home /> },
            { text: "Campus event risk & crowd management.", icon: <Users /> },
            { text: "Student welfare & anti-harassment.", icon: <HeartPulse /> },
        ],
        globalStandards: {
            title: "Aligned with Higher Education Standards",
            standards: [
                { name: "UGC Advisories", description: "Compliance with University Grants Commission safety and academic integrity guidelines." },
                { name: "ISO 45001 / GLP", description: "For occupational health, safety, and Good Laboratory Practice." },
                { name: "GDPR / DPDP", description: "For handling student and research data with privacy." },
                { name: "AICTE Norms", description: "Adherence to norms from the All India Council for Technical Education." }
            ]
        },
        checklists: [
            {
                title: "Laboratory Safety SOP",
                department: "Science/Engineering",
                frequency: "Weekly",
                role: "Lab Supervisor",
                icon: <TestTube />,
                summary: "MSDS registry, chemical labeling, proper PPE, chemical waste segregation, fume hood checks, authorized personnel list.",
                tasks: [
                    {id: 'ULAB-01', description: "Ensure Material Safety Data Sheets (MSDS) are available for all chemicals.", priority: 'High', riskLevel: 'High', proof: 'MSDS Registry', location: 'Lab'},
                    {id: 'ULAB-02', description: "Verify all chemicals are correctly labeled and stored.", priority: 'High', riskLevel: 'High', proof: 'Chemical Storage Audit', location: 'Lab'},
                    {id: 'ULAB-03', description: "Check that appropriate PPE is being used by all lab personnel.", priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Lab'},
                    {id: 'ULAB-04', description: "Inspect fume hoods for proper airflow and certification.", priority: 'High', riskLevel: 'High', proof: 'Fume Hood Log', location: 'Lab'},
                    {id: 'ULAB-05', description: "Manage chemical waste segregation and disposal records.", priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Lab'},
                ]
            },
            {
                title: "Research Data & Ethics SOP",
                department: "Research",
                frequency: "Per Project",
                role: "Ethics Committee",
                icon: <DatabaseZap />,
                summary: "IRB approvals, data access controls, storage encryption, conflict-of-interest disclosures.",
                tasks: [
                    {id: 'URESEARCH-01', description: "Verify Institutional Review Board (IRB) approval is obtained for all research involving human subjects.", priority: 'High', riskLevel: 'High', proof: 'IRB Approval Letter', location: 'Research Office'},
                    {id: 'URESEARCH-02', description: "Ensure research data is stored in an encrypted and access-controlled environment.", priority: 'High', riskLevel: 'High', proof: 'Data Management Plan', location: 'IT'},
                    {id: 'URESEARCH-03', description: "Collect and file conflict-of-interest disclosures from all researchers.", priority: 'High', riskLevel: 'High', proof: 'Disclosure Forms', location: 'Research Office'},
                    {id: 'URESEARCH-04', description: 'Ensure informed consent is properly documented for all participants.', priority: 'High', riskLevel: 'High', proof: 'Consent Forms', location: 'Research Office' },
                    {id: 'URESEARCH-05', description: 'Follow data anonymization protocols where required.', priority: 'High', riskLevel: 'High', proof: 'Anonymization Log', location: 'IT' },
                ]
            },
            {
                title: "Hostel Daily Inspection",
                department: "Student Affairs",
                frequency: "Daily",
                role: "Hostel Warden",
                icon: <Home />,
                summary: "Electrical plugs check, prohibited items enforcement, night-warden log, fire extinguisher checks.",
                tasks: [
                    {id: 'UHOSTEL-01', description: "Inspect rooms for unauthorized or unsafe electrical appliances.", priority: 'High', riskLevel: 'High', proof: 'Room Inspection Log', location: 'Hostel Rooms'},
                    {id: 'UHOSTEL-02', description: "Enforce the policy on prohibited items.", priority: 'High', riskLevel: 'Medium', proof: 'Confiscation Log', location: 'Warden Office'},
                    {id: 'UHOSTEL-03', description: "Review the night-warden's log for any incidents.", priority: 'High', riskLevel: 'Medium', proof: 'Warden Logbook', location: 'Warden Office'},
                    {id: 'UHOSTEL-04', description: "Check that fire extinguishers on all floors are accessible and have valid inspection tags.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Check Log', location: 'Hostel Corridors'},
                    {id: 'UHOSTEL-05', description: 'Ensure all common areas are clean and hygienic.', priority: 'High', riskLevel: 'Medium', proof: 'Hygiene Log', location: 'Common Rooms' },
                ]
            },
            {
                title: "Event Safety Permit SOP",
                department: "Events",
                frequency: "Per Event",
                role: "Campus Safety Officer",
                icon: <FileCheck />,
                summary: "Capacity evaluation, medical post, emergency exit plan, vendor induction.",
                tasks: [
                    {id: 'UEVENT-01', description: "Evaluate the event plan for capacity and crowd density risks.", priority: 'High', riskLevel: 'High', proof: 'Risk Assessment Form', location: 'Office'},
                    {id: 'UEVENT-02', description: "Ensure a dedicated medical post is set up for large events.", priority: 'High', riskLevel: 'High', proof: 'Medical Post Setup', location: 'Event Venue'},
                    {id: 'UEVENT-03', description: "Approve the emergency exit and evacuation plan.", priority: 'High', riskLevel: 'High', proof: 'Approved Evacuation Plan', location: 'Office'},
                    {id: 'UEVENT-04', description: "Conduct a safety induction for all third-party event vendors.", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Induction Log', location: 'Event Venue'},
                    {id: 'UEVENT-05', description: 'Verify security deployment as per the event plan.', priority: 'High', riskLevel: 'High', proof: 'Security Deployment Plan', location: 'Event Venue' },
                ]
            },
            {
                title: "Student Support & Grievance SOP",
                department: "Student Welfare",
                frequency: "Ongoing",
                role: "Dean of Students",
                icon: <HeartPulse />,
                summary: "Confidential reporting, counseling appointment protocol, escalation tree.",
                tasks: [
                    {id: 'USUPPORT-01', description: "Maintain a confidential system for students to report grievances.", priority: 'High', riskLevel: 'High', proof: 'Grievance System Portal', location: 'Online'},
                    {id: 'USUPPORT-02', description: "Follow a clear protocol for scheduling counseling appointments.", priority: 'High', riskLevel: 'Medium', proof: 'Appointment Protocol', location: 'Counseling Center'},
                    {id: 'USUPPORT-03', description: "Have a documented escalation tree for handling severe student issues.", priority: 'High', riskLevel: 'High', proof: 'Escalation Document', location: 'Office'},
                    {id: 'USUPPORT-04', description: 'Ensure all staff are trained on the anti-ragging and anti-harassment policies.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    {id: 'USUPPORT-05', description: 'Track resolution times for all reported grievances.', priority: 'High', riskLevel: 'Medium', proof: 'Grievance Tracker', location: 'System' },
                ]
            },
            {
                title: "Academic Integrity & Examinations",
                department: "Academics",
                frequency: "Per Exam",
                role: "Controller of Examinations",
                icon: <BookOpen />,
                summary: "Secure handling of exam papers, invigilator duties, and plagiarism checks.",
                tasks: [
                    { id: 'AIE-01', description: 'Ensure exam papers are stored in a secure, sealed location.', priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Exam Room' },
                    { id: 'AIE-02', description: 'Brief all invigilators on their duties and responsibilities.', priority: 'High', riskLevel: 'High', proof: 'Briefing Sheet', location: 'Exam Hall' },
                    { id: 'AIE-03', description: 'Implement a strict protocol for handling cases of cheating.', priority: 'High', riskLevel: 'High', proof: 'Academic Misconduct Policy', location: 'Office' },
                    { id: 'AIE-04', description: 'Use plagiarism detection software for all major submissions.', priority: 'High', riskLevel: 'Medium', proof: 'Plagiarism Scan Reports', location: 'System' },
                    { id: 'AIE-05', description: 'Follow a secure process for the evaluation and moderation of results.', priority: 'High', riskLevel: 'High', proof: 'Evaluation Protocol', location: 'Office' },
                ]
            },
            {
                title: "Campus Infrastructure & Maintenance",
                department: "Facilities",
                frequency: "Weekly",
                role: "Campus Engineer",
                icon: <Building />,
                summary: "Weekly checks of campus infrastructure including buildings, roads, and lighting.",
                tasks: [
                    { id: 'CIM-01', description: 'Inspect building exteriors for any structural issues.', priority: 'High', riskLevel: 'High', proof: 'Building Inspection Log', location: 'Campus-wide' },
                    { id: 'CIM-02', description: 'Check campus roads and pathways for potholes or hazards.', priority: 'High', riskLevel: 'Medium', proof: 'Road Inspection Log', location: 'Campus-wide' },
                    { id: 'CIM-03', description: 'Inspect all campus lighting and replace faulty bulbs.', priority: 'High', riskLevel: 'Medium', proof: 'Lighting Log', location: 'Campus-wide' },
                    { id: 'CIM-04', description: 'Verify that all fire hydrants and water sources are accessible.', priority: 'High', riskLevel: 'High', proof: 'Hydrant Check', location: 'Campus-wide' },
                    { id: 'CIM-05', description: 'Check campus signage for visibility and accuracy.', priority: 'Medium', riskLevel: 'Low', proof: 'Signage Audit', location: 'Campus-wide' },
                ]
            },
            {
                title: "Library Operations",
                department: "Library",
                frequency: "Daily",
                role: "Librarian",
                icon: <Library />,
                summary: "Checklists for book issuance, return, shelving, and maintaining a quiet study environment.",
                tasks: [
                    { id: 'LO-01', description: 'Process daily book returns and update the library management system.', priority: 'High', riskLevel: 'Low', proof: 'System Log', location: 'Circulation Desk' },
                    { id: 'LO-02', description: 'Shelve returned books in their correct locations.', priority: 'High', riskLevel: 'Low', proof: 'Shelving Log', location: 'Shelves' },
                    { id: 'LO-03', description: 'Monitor the library to ensure a quiet environment is maintained.', priority: 'High', riskLevel: 'Medium', proof: 'Patrol Log', location: 'Library' },
                    { id: 'LO-04', description: 'Manage overdue notices and fines.', priority: 'High', riskLevel: 'Medium', proof: 'Overdue Report', location: 'System' },
                    { id: 'LO-05', description: 'Inspect books for damage upon return.', priority: 'Medium', riskLevel: 'Medium', proof: 'Damage Log', location: 'Circulation Desk' },
                ]
            },
            {
                title: "Student Transportation",
                department: "Transport",
                frequency: "Daily",
                role: "Transport Manager",
                icon: <Bus />,
                summary: "Daily checks for university buses to ensure student safety and route compliance.",
                tasks: [
                    { id: 'ST-01', description: 'Perform a pre-trip inspection of each bus (brakes, tires, lights).', priority: 'High', riskLevel: 'High', proof: 'Pre-trip Checklist', location: 'Bus Depot' },
                    { id: 'ST-02', description: 'Ensure the driver has a valid license and is not under the influence.', priority: 'High', riskLevel: 'High', proof: 'Driver Check Log', location: 'Bus Depot' },
                    { id: 'ST-03', description: 'Verify the bus GPS is active and tracking.', priority: 'High', riskLevel: 'High', proof: 'GPS System', location: 'Transport Office' },
                    { id: 'ST-04', description: 'Check that the first aid kit and fire extinguisher are on board.', priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Check', location: 'Bus' },
                    { id: 'ST-05', description: 'Ensure student conduct on the bus is orderly.', priority: 'Medium', riskLevel: 'Medium', proof: 'On-board CCTV/Attendant Report', location: 'Bus' },
                ]
            },
            {
                title: "Admissions & Counseling",
                department: "Admissions",
                frequency: "Per Student",
                role: "Admissions Counselor",
                icon: <UserRound />,
                summary: "A structured process for counseling prospective students and managing admission applications.",
                tasks: [
                    { id: 'AC-01', description: 'Provide accurate information about courses and eligibility criteria.', priority: 'High', riskLevel: 'High', proof: 'Counseling Script', location: 'Admissions Office' },
                    { id: 'AC-02', description: 'Verify all application documents for authenticity and completeness.', priority: 'High', riskLevel: 'High', proof: 'Document Verification Checklist', location: 'Admissions Office' },
                    { id: 'AC-03', description: 'Log all interactions with prospective students in the CRM.', priority: 'High', riskLevel: 'Medium', proof: 'CRM Log', location: 'System' },
                    { id: 'AC-04', description: 'Follow up with applicants at key stages of the admission process.', priority: 'High', riskLevel: 'Medium', proof: 'Follow-up Schedule', location: 'System' },
                    { id: 'AC-05', description: 'Maintain confidentiality of all applicant data.', priority: 'High', riskLevel: 'High', proof: 'Data Privacy Policy', location: 'Office' },
                ]
            }
        ]
    },
    // --- Industrial & Transport ---
    {
        id: 'food_manufacturing_ops',
        title: "Food Manufacturing Operations",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Industrial & Transport",
        description: "An essential toolkit for food processing plants to ensure safety, quality, and compliance with FSSAI and global standards like ISO 22000.",
        icon: <Factory />,
        whoIsItFor: ["Plant Heads", "Quality Assurance Managers", "Production Managers", "Food Safety Officers"],
        sampleItems: [
            { text: "GMP/GHP sanitation & cleaning regimes.", icon: <SprayCan /> },
            { text: "Allergen management & segregation.", icon: <FileWarning /> },
            { text: "Batch traceability & recall readiness.", icon: <Barcode /> },
            { text: "Preventive maintenance on production lines.", icon: <Wrench /> },
            { text: "Supplier verification & inbound QC.", icon: <PackageCheck /> },
        ],
        globalStandards: {
            title: "Aligned with Global Food Safety Standards",
            standards: [
                { name: "FSSAI / FSMS", description: "Compliance with Indian food safety regulations and management systems." },
                { name: "ISO 22000", description: "International standard for food safety management." },
                { name: "BRCGS", description: "Global Food Safety Initiative (GFSI) recognized standard." },
                { name: "FDA (21 CFR)", description: "Adherence to U.S. Food and Drug Administration regulations for exporters." }
            ]
        },
        checklists: [
            {
                title: "Sanitation Standard Operating Procedure (SSOP)",
                department: "Hygiene/QA",
                frequency: "Daily/Weekly",
                role: "Hygiene Supervisor",
                icon: <SprayCan />,
                summary: "Cleaning chemical concentration, contact time, equipment disassembly, verification swabs, sign-off.",
                tasks: [
                    { id: 'FMAN-SSOP-01', description: "Verify cleaning chemical concentrations are correct.", priority: 'High', riskLevel: 'High', proof: 'Concentration Log', location: 'Cleaning Station' },
                    { id: 'FMAN-SSOP-02', description: "Ensure specified contact time for sanitizers is being followed.", priority: 'High', riskLevel: 'High', proof: 'Supervisor Observation', location: 'Production Line' },
                    { id: 'FMAN-SSOP-03', description: "Check that equipment is fully disassembled for cleaning as per the schedule.", priority: 'High', riskLevel: 'High', proof: 'Disassembly Log', location: 'Production Line' },
                    { id: 'FMAN-SSOP-04', description: "Conduct ATP swabbing or other verification methods to confirm cleanliness.", priority: 'High', riskLevel: 'High', proof: 'Swab Test Results', location: 'Lab' },
                    { id: 'FMAN-SSOP-05', description: "Supervisor to sign off on all cleaning and sanitation logs.", priority: 'High', riskLevel: 'High', proof: 'Signed Logs', location: 'Office' },
                ]
            },
            {
                title: "Allergen Control SOP",
                department: "Production/QA",
                frequency: "Per Batch",
                role: "Production Supervisor",
                icon: <FileWarning />,
                summary: "Dedicated lines or validated clean-down, labeling verification, segregation in storage.",
                tasks: [
                    { id: 'FMAN-ALLERGEN-01', description: "Use dedicated production lines for allergenic products or perform a validated clean-down between batches.", priority: 'High', riskLevel: 'High', proof: 'Clean-down Validation Report', location: 'Production Line' },
                    { id: 'FMAN-ALLERGEN-02', description: "Verify final product packaging has the correct allergen declaration.", priority: 'High', riskLevel: 'High', proof: 'Label Verification Log', location: 'Packaging Line' },
                    { id: 'FMAN-ALLERGEN-03', description: "Ensure allergenic raw materials are stored in a segregated, clearly marked area.", priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Warehouse' },
                    { id: 'FMAN-ALLERGEN-04', description: 'Train all production staff on allergen handling protocols.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'FMAN-ALLERGEN-05', description: 'Manage rework of allergen-containing products to prevent cross-contamination.', priority: 'High', riskLevel: 'High', proof: 'Rework Log', location: 'Production' },
                ]
            },
            {
                title: "Batch Traceability Checklist",
                department: "QA/Inventory",
                frequency: "Per Batch",
                role: "QA Officer",
                icon: <Barcode />,
                summary: "Raw material lot -> processing -> packaging -> finished goods; QR/barcode records for each batch.",
                tasks: [
                    { id: 'FMAN-TRACE-01', description: "Record all incoming raw material lot numbers for each production batch.", priority: 'High', riskLevel: 'High', proof: 'Batch Production Record', location: 'System' },
                    { id: 'FMAN-TRACE-02', description: "Track the batch through all processing and packaging steps.", priority: 'High', riskLevel: 'High', proof: 'Batch Production Record', location: 'System' },
                    { id: 'FMAN-TRACE-03', description: "Assign a unique finished good batch number that links back to all raw materials.", priority: 'High', riskLevel: 'High', proof: 'Finished Goods Log', location: 'System' },
                    { id: 'FMAN-TRACE-04', description: 'Conduct a mock traceability exercise quarterly.', priority: 'High', riskLevel: 'High', proof: 'Mock Traceability Report', location: 'Office' },
                    { id: 'FMAN-TRACE-05', description: 'Ensure finished product labels have correct batch codes and expiry dates.', priority: 'High', riskLevel: 'High', proof: 'Label Audit', location: 'Packaging Line' },
                ]
            },
            {
                title: "CCP Preventive Maintenance",
                department: "Maintenance",
                frequency: "Scheduled",
                role: "Maintenance Engineer",
                icon: <Wrench />,
                summary: "CIP (Clean-in-Place) schedules, filter changes, safety interlocks test.",
                tasks: [
                    { id: 'FMAN-CCP-PM-01', description: "Perform scheduled maintenance on Critical Control Points (CCPs) like metal detectors or pasteurizers.", priority: 'High', riskLevel: 'High', proof: 'CCP Maintenance Log', location: 'Production Line' },
                    { id: 'FMAN-CCP-PM-02', description: "Follow schedule for changing critical filters.", priority: 'High', riskLevel: 'High', proof: 'Filter Change Log', location: 'Production Line' },
                    { id: 'FMAN-CCP-PM-03', description: "Test all safety interlocks on equipment weekly.", priority: 'High', riskLevel: 'High', proof: 'Interlock Test Log', location: 'Production Line' },
                    { id: 'FMAN-CCP-PM-04', description: 'Calibrate all monitoring equipment (e.g., thermometers, pressure gauges) as per schedule.', priority: 'High', riskLevel: 'High', proof: 'Calibration Records', location: 'Maintenance Office' },
                    { id: 'FMAN-CCP-PM-05', description: 'Lubricate all moving parts as per manufacturer specifications.', priority: 'High', riskLevel: 'Medium', proof: 'Lubrication Log', location: 'Production Line' },
                ]
            },
            {
                title: "Recall Simulation SOP",
                department: "Management/QA",
                frequency: "Annually",
                role: "Recall Coordinator",
                icon: <Ambulance />,
                summary: "Annual mock recall, traceability drill, communication template for regulators/customers.",
                tasks: [
                    { id: 'FMAN-RECALL-01', description: "Conduct an annual mock recall drill.", priority: 'High', riskLevel: 'High', proof: 'Mock Recall Report', location: 'Office' },
                    { id: 'FMAN-RECALL-02', description: "Test the traceability system by tracking a mock batch from raw material to finished product.", priority: 'High', riskLevel: 'High', proof: 'Traceability Drill Report', location: 'Office' },
                    { id: 'FMAN-RECALL-03', description: "Have pre-approved communication templates ready for notifying regulators and customers.", priority: 'High', riskLevel: 'High', proof: 'Communication Templates', location: 'Office' },
                    { id: 'FMAN-RECALL-04', description: 'Verify contact details for the recall team and regulatory bodies are up to date.', priority: 'High', riskLevel: 'High', proof: 'Contact List', location: 'Office' },
                    { id: 'FMAN-RECALL-05', description: 'Evaluate the effectiveness of the mock recall and identify areas for improvement.', priority: 'High', riskLevel: 'High', proof: 'Post-Drill Review Minutes', location: 'Office' },
                ]
            },
            {
                title: "Glass & Brittle Plastic Control",
                department: "QA",
                frequency: "Monthly",
                role: "QA Inspector",
                icon: <Eye />,
                summary: "Monthly audit to identify and manage the risk of physical contamination from glass or brittle plastics.",
                tasks: [
                    { id: 'GBPC-01', description: 'Maintain a register of all glass and brittle plastic items in the facility.', priority: 'High', riskLevel: 'High', proof: 'Glass Register', location: 'QA Office' },
                    { id: 'GBPC-02', description: 'Conduct a monthly inspection of all registered items for damage.', priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Facility-wide' },
                    { id: 'GBPC-03', description: 'Follow a documented procedure for handling any breakage.', priority: 'High', riskLevel: 'High', proof: 'Breakage Procedure', location: 'QA Office' },
                    { id: 'GBPC-04', description: 'Ensure all light fixtures in production areas have protective covers.', priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Production Area' },
                    { id: 'GBPC-05', description: 'Train staff on the glass and brittle plastic policy.', priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
                ]
            },
            {
                title: "Pest Control Management",
                department: "Hygiene/QA",
                frequency: "Weekly",
                role: "Hygiene Officer",
                icon: <Bug />,
                summary: "Weekly inspection of pest traps and overall plant hygiene to prevent infestations.",
                tasks: [
                    { id: 'PCM-01', description: 'Inspect all internal and external pest traps weekly.', priority: 'High', riskLevel: 'High', proof: 'Pest Trap Log', location: 'Facility-wide' },
                    { id: 'PCM-02', description: 'Review the pest control vendor\'s service reports.', priority: 'High', riskLevel: 'High', proof: 'Vendor Reports', location: 'QA Office' },
                    { id: 'PCM-03', description: 'Ensure there are no gaps in doors, windows, or walls that could allow pest entry.', priority: 'High', riskLevel: 'High', proof: 'Structural Audit', location: 'Facility-wide' },
                    { id: 'PCM-04', description: 'Keep all external areas free of debris and standing water.', priority: 'High', riskLevel: 'High', proof: 'External Area Inspection Log', location: 'Plant Perimeter' },
                    { id: 'PCM-05', description: 'Analyze pest activity trends to identify and address root causes.', priority: 'High', riskLevel: 'High', proof: 'Trend Analysis Report', location: 'QA Office' },
                ]
            },
            {
                title: "Supplier Approval & Verification",
                department: "Procurement/QA",
                frequency: "Per New Supplier",
                role: "Procurement Manager",
                icon: <Handshake />,
                summary: "A robust process for approving new raw material suppliers to ensure food safety and quality from the source.",
                tasks: [
                    { id: 'SAV-01', description: 'Require all new suppliers to complete a self-assessment questionnaire.', priority: 'High', riskLevel: 'High', proof: 'Completed Questionnaire', location: 'Procurement File' },
                    { id: 'SAV-02', description: 'Obtain and verify the supplier\'s food safety certifications (e.g., FSSAI, ISO 22000).', priority: 'High', riskLevel: 'High', proof: 'Certificates', location: 'Procurement File' },
                    { id: 'SAV-03', description: 'Request product specifications and a Certificate of Analysis (COA) for all raw materials.', priority: 'High', riskLevel: 'High', proof: 'Spec Sheets & COAs', location: 'Procurement File' },
                    { id: 'SAV-04', description: 'Conduct a physical audit of critical suppliers\' facilities if possible.', priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'Procurement File' },
                    { id: 'SAV-05', description: 'Maintain an approved supplier list.', priority: 'High', riskLevel: 'High', proof: 'Approved Supplier List', location: 'System' },
                ]
            },
            {
                title: "Water Quality Management",
                department: "Utilities/QA",
                frequency: "Scheduled",
                role: "Utility Manager",
                icon: <Waves />,
                summary: "Scheduled testing of water used in production to ensure it is potable and free from contaminants.",
                tasks: [
                    { id: 'WQM-01', description: 'Follow a schedule for testing water potability from an accredited lab.', priority: 'High', riskLevel: 'High', proof: 'Lab Test Reports', location: 'QA Office' },
                    { id: 'WQM-02', description: 'Check and log chlorine levels or other disinfectant residuals daily.', priority: 'High', riskLevel: 'High', proof: 'Chlorine Log', location: 'Water Treatment Plant' },
                    { id: 'WQM-03', description: 'Inspect water storage tanks quarterly for cleanliness.', priority: 'High', riskLevel: 'Medium', proof: 'Tank Inspection Log', location: 'Water Tanks' },
                    { id: 'WQM-04', description: 'Maintain the water treatment plant (WTP) as per the maintenance schedule.', priority: 'High', riskLevel: 'High', proof: 'WTP Maintenance Log', location: 'WTP' },
                    { id: 'WQM-05', description: 'Have a contingency plan for water supply interruptions.', priority: 'High', riskLevel: 'High', proof: 'Contingency Plan', location: 'Office' },
                ]
            },
            {
                title: "Finished Product Inspection",
                department: "QA",
                frequency: "Per Batch",
                role: "QA Inspector",
                icon: <PackageCheck />,
                summary: "Final check of finished goods before dispatch, covering packaging, labeling, and quality parameters.",
                tasks: [
                    { id: 'FPI-01', description: 'Inspect packaging for integrity (seals, damage).', priority: 'High', riskLevel: 'High', proof: 'Packaging Inspection Log', location: 'Dispatch Area' },
                    { id: 'FPI-02', description: 'Verify labels for accuracy (batch code, expiry date, allergen info).', priority: 'High', riskLevel: 'High', proof: 'Label Check Log', location: 'Dispatch Area' },
                    { id: 'FPI-03', description: 'Check product appearance, color, and texture against standards.', priority: 'High', riskLevel: 'Medium', proof: 'Sensory Evaluation Report', location: 'Lab' },
                    { id: 'FPI-04', description: 'Collect and store control samples from each batch.', priority: 'High', riskLevel: 'High', proof: 'Control Sample Log', location: 'Lab' },
                    { id: 'FPI-05', description: 'Release the batch for dispatch only after all checks are passed.', priority: 'High', riskLevel: 'High', proof: 'Batch Release Form', location: 'QA Office' },
                ]
            }
        ]
    },
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
            { text: "Lockout-Tagout (LOTO) & machine guarding.", icon: <Lock /> },
            { text: "Hazard identification & risk assessment (JHA).", icon: <FileWarning /> },
            { text: "PPE & training logs.", icon: <HardHat /> },
            { text: "Incident investigation & root-cause analysis.", icon: <Bug /> },
            { text: "Confined space & hot work permits.", icon: <FileCheck /> },
        ],
        globalStandards: {
            title: "Aligned with Global EHS Standards",
            standards: [
                { name: "ISO 45001", description: "The international standard for occupational health and safety (OHS)." },
                { name: "OSHA (29 CFR)", description: "Adherence to U.S. Occupational Safety and Health Administration standards." },
                { name: "Factories Act", description: "Compliance with India's primary legislation for factory safety." },
                { name: "EHS Guidelines", description: "Follows general Environmental, Health, and Safety best practices." }
            ]
        },
        checklists: [
            {
                title: "Lockout-Tagout (LOTO) Procedure",
                department: "EHS/Maintenance",
                frequency: "Per Task",
                role: "Maintenance Technician",
                icon: <Lock />,
                summary: "Isolation steps, multi-person lock bars, verification of zero energy, pre-work sign-off, return-to-service checks.",
                tasks: [
                    { id: 'MFG-LOTO-01', description: 'Identify and isolate all energy sources for the equipment.', priority: 'High', riskLevel: 'High', proof: 'Isolation Log', location: 'Equipment' },
                    { id: 'MFG-LOTO-02', description: 'Apply personal locks and tags to each isolation point.', priority: 'High', riskLevel: 'High', proof: 'Photo of lock/tag', location: 'Equipment' },
                    { id: 'MFG-LOTO-03', description: 'Verify zero energy state by attempting to start the machine.', priority: 'High', riskLevel: 'High', proof: 'Zero Energy Check Log', location: 'Equipment' },
                    { id: 'MFG-LOTO-04', description: 'Use multi-person lock bars for group maintenance tasks.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Equipment' },
                    { id: 'MFG-LOTO-05', description: 'Complete return-to-service checks before removing locks.', priority: 'High', riskLevel: 'High', proof: 'Return-to-Service Form', location: 'Equipment' },
                ]
            },
            {
                title: "Job Hazard Analysis (JHA)",
                department: "Safety",
                frequency: "Per New Task",
                role: "Safety Officer",
                icon: <FileWarning />,
                summary: "Identify hazards per task, mitigation controls, required PPE, sign-off by supervisor and safety officer.",
                tasks: [
                    { id: 'MFG-JHA-01', description: 'Break down the job into a sequence of steps.', priority: 'High', riskLevel: 'High', proof: 'JHA Form', location: 'Office' },
                    { id: 'MFG-JHA-02', description: 'Identify potential hazards for each step.', priority: 'High', riskLevel: 'High', proof: 'JHA Form', location: 'Office' },
                    { id: 'MFG-JHA-03', description: 'Determine preventive measures and required PPE for each hazard.', priority: 'High', riskLevel: 'High', proof: 'JHA Form', location: 'Office' },
                    { id: 'MFG-JHA-04', description: 'Get sign-off on the completed JHA from the area supervisor and safety officer.', priority: 'High', riskLevel: 'High', proof: 'Signed JHA Form', location: 'Office' },
                    { id: 'MFG-JHA-05', description: 'Review JHAs annually or after any incident.', priority: 'High', riskLevel: 'High', proof: 'Review Log', location: 'Office' },
                ]
            },
            {
                title: "PPE Compliance & Fit Testing",
                department: "EHS",
                frequency: "Ongoing",
                role: "Supervisor",
                icon: <HardHat />,
                summary: "Issue logs, replacement schedule, fit test records for respirators.",
                tasks: [
                    { id: 'MFG-PPE-01', description: 'Maintain a log of all PPE issued to each employee.', priority: 'High', riskLevel: 'Medium', proof: 'PPE Issue Log', location: 'Stores' },
                    { id: 'MFG-PPE-02', description: 'Conduct regular checks to ensure employees are using the correct PPE.', priority: 'High', riskLevel: 'High', proof: 'Spot Check Log', location: 'Shop Floor' },
                    { id: 'MFG-PPE-03', description: 'Maintain a replacement schedule for PPE with a limited lifespan.', priority: 'Medium', riskLevel: 'Medium', proof: 'Replacement Schedule', location: 'Office' },
                    { id: 'MFG-PPE-04', description: 'Keep records of respirator fit testing for all relevant employees.', priority: 'High', riskLevel: 'High', proof: 'Fit Test Records', location: 'EHS Office' },
                    { id: 'MFG-PPE-05', description: 'Inspect communal PPE (e.g., face shields) daily for damage.', priority: 'High', riskLevel: 'High', proof: 'Communal PPE Log', location: 'Shop Floor' },
                ]
            },
            {
                title: "Incident Investigation SOP",
                department: "EHS",
                frequency: "Per Incident",
                role: "Safety Officer",
                icon: <Bug />,
                summary: "Immediate containment, evidence preservation, 5-why root cause, CAPA tracking.",
                tasks: [
                    { id: 'MFG-INC-01', description: 'Immediately secure the incident area to prevent further harm.', priority: 'High', riskLevel: 'High', proof: 'Area Secure Log', location: 'Incident Site' },
                    { id: 'MFG-INC-02', description: 'Preserve evidence, including taking photos and collecting witness statements.', priority: 'High', riskLevel: 'High', proof: 'Evidence Log', location: 'Incident Site' },
                    { id: 'MFG-INC-03', description: 'Conduct a 5-Why or similar root cause analysis (RCA).', priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'Office' },
                    { id: 'MFG-INC-04', description: 'Develop and track Corrective and Preventive Actions (CAPAs) to closure.', priority: 'High', riskLevel: 'High', proof: 'CAPA Tracker', location: 'Office' },
                    { id: 'MFG-INC-05', description: 'Report notifiable accidents to the relevant authorities within the timeline.', priority: 'High', riskLevel: 'High', proof: 'Regulatory Filing', location: 'Office' },
                ]
            },
            {
                title: "Hot Work & Confined Space Permit",
                department: "Safety",
                frequency: "Per Task",
                role: "Safety Officer",
                icon: <FileCheck />,
                summary: "Gas testing, attendant assigned, rescue plan, permit expiry and close-out logs.",
                tasks: [
                    { id: 'MFG-PERMIT-01', description: 'Conduct atmospheric gas testing before confined space entry.', priority: 'High', riskLevel: 'High', proof: 'Gas Test Log', location: 'Work Area' },
                    { id: 'MFG-PERMIT-02', description: 'Assign a dedicated attendant for all confined space entries.', priority: 'High', riskLevel: 'High', proof: 'Permit Form', location: 'Work Area' },
                    { id: 'MFG-PERMIT-03', description: 'Have a documented rescue plan in place.', priority: 'High', riskLevel: 'High', proof: 'Rescue Plan Document', location: 'Safety Office' },
                    { id: 'MFG-PERMIT-04', description: 'Ensure fire watch is assigned for all hot work.', priority: 'High', riskLevel: 'High', proof: 'Permit Form', location: 'Work Area' },
                    { id: 'MFG-PERMIT-05', description: 'Close out and file all permits upon work completion.', priority: 'High', riskLevel: 'Medium', proof: 'Closed Permit File', location: 'Safety Office' },
                ]
            },
            {
                title: "Machine Guarding Audit",
                department: "EHS/Production",
                frequency: "Weekly",
                role: "Supervisor",
                icon: <Shield />,
                summary: "Weekly checks to ensure all safety guards on machinery are in place and functional.",
                tasks: [
                    { id: 'MGA-01', description: 'Visually inspect all machines to ensure safety guards are in place.', priority: 'High', riskLevel: 'High', proof: 'Guard Inspection Log', location: 'Shop Floor' },
                    { id: 'MGA-02', description: 'Test any interlock switches connected to safety guards.', priority: 'High', riskLevel: 'High', proof: 'Interlock Test Log', location: 'Shop Floor' },
                    { id: 'MGA-03', description: 'Ensure no guards have been improperly bypassed or removed.', priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'Shop Floor' },
                    { id: 'MGA-04', description: 'Report any damaged or missing guards immediately.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Request', location: 'System' },
                    { id: 'MGA-05', description: 'Train operators not to use any machine with a faulty guard.', priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Office' },
                ]
            },
            {
                title: "Chemical Handling & Storage",
                department: "EHS/Stores",
                frequency: "Monthly",
                role: "Stores Manager",
                icon: <TestTube />,
                summary: "Audit of chemical storage areas for proper labeling, segregation, and availability of spill kits.",
                tasks: [
                    { id: 'CHS-01', description: 'Ensure all chemical containers are properly labeled.', priority: 'High', riskLevel: 'High', proof: 'Label Audit Log', location: 'Chemical Store' },
                    { id: 'CHS-02', description: 'Verify that incompatible chemicals are segregated.', priority: 'High', riskLevel: 'High', proof: 'Segregation Audit', location: 'Chemical Store' },
                    { id: 'CHS-03', description: 'Check that Material Safety Data Sheets (MSDS) are available for all chemicals.', priority: 'High', riskLevel: 'High', proof: 'MSDS Binder Check', location: 'Chemical Store' },
                    { id: 'CHS-04', description: 'Inspect spill kits to ensure they are fully stocked and accessible.', priority: 'High', riskLevel: 'High', proof: 'Spill Kit Log', location: 'Various' },
                    { id: 'CHS-05', description: 'Ensure proper PPE is available and used when handling chemicals.', priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Chemical Store' },
                ]
            },
            {
                title: "Electrical Safety Audit",
                department: "Maintenance/EHS",
                frequency: "Quarterly",
                role: "Electrical Engineer",
                icon: <Zap />,
                summary: "Quarterly audits of electrical panels, wiring, and grounding to prevent shocks and fires.",
                tasks: [
                    { id: 'ESA-01', description: 'Inspect electrical panels for any signs of overheating or damage.', priority: 'High', riskLevel: 'High', proof: 'Panel Inspection Log', location: 'Electrical Rooms' },
                    { id: 'ESA-02', description: 'Check all wiring for proper insulation and support.', priority: 'High', riskLevel: 'High', proof: 'Wiring Inspection Log', location: 'Facility-wide' },
                    { id: 'ESA-03', description: 'Verify that all electrical equipment is properly grounded.', priority: 'High', riskLevel: 'High', proof: 'Grounding Test Report', location: 'Facility-wide' },
                    { id: 'ESA-04', description: 'Ensure all electrical panels are properly labeled and accessible.', priority: 'High', riskLevel: 'High', proof: 'Panel Label Audit', location: 'Electrical Rooms' },
                    { id: 'ESA-05', description: 'Test Earth Leakage Circuit Breakers (ELCBs) for functionality.', priority: 'High', riskLevel: 'High', proof: 'ELCB Test Log', location: 'Electrical Panels' },
                ]
            },
            {
                title: "Environmental Compliance",
                department: "EHS",
                frequency: "Monthly",
                role: "Environmental Officer",
                icon: <Leaf />,
                summary: "Monthly checks to ensure compliance with air, water, and waste disposal regulations.",
                tasks: [
                    { id: 'EC-01', description: 'Monitor and log air emissions to ensure they are within permissible limits.', priority: 'High', riskLevel: 'High', proof: 'Emissions Log', location: 'Stacks' },
                    { id: 'EC-02', description: 'Check wastewater treatment plant (ETP) parameters daily.', priority: 'High', riskLevel: 'High', proof: 'ETP Log', location: 'ETP' },
                    { id: 'EC-03', description: 'Ensure hazardous waste is segregated, stored, and disposed of correctly.', priority: 'High', riskLevel: 'High', proof: 'Hazardous Waste Log', location: 'Waste Yard' },
                    { id: 'EC-04', description: 'Maintain all records for regulatory submissions.', priority: 'High', riskLevel: 'High', proof: 'Regulatory File', location: 'EHS Office' },
                    { id: 'EC-05', description: 'Conduct noise level monitoring in high-noise areas.', priority: 'High', riskLevel: 'Medium', proof: 'Noise Survey Report', location: 'Shop Floor' },
                ]
            },
            {
                title: "Emergency Response Plan",
                department: "EHS/Management",
                frequency: "Annually",
                role: "Chief Safety Officer",
                icon: <Siren />,
                summary: "Annual review and drill of the emergency response plan covering fire, medical, and chemical spill emergencies.",
                tasks: [
                    { id: 'ERP-01', description: 'Review and update the site Emergency Response Plan annually.', priority: 'High', riskLevel: 'High', proof: 'Updated ERP Document', location: 'Office' },
                    { id: 'ERP-02', description: 'Conduct an annual site-wide evacuation drill.', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Facility-wide' },
                    { id: 'ERP-03', description: 'Drill the response for a simulated medical emergency.', priority: 'High', riskLevel: 'High', proof: 'Medical Drill Report', location: 'Facility-wide' },
                    { id: 'ERP-04', description: 'Drill the response for a simulated chemical spill.', priority: 'High', riskLevel: 'High', proof: 'Spill Drill Report', location: 'Facility-wide' },
                    { id: 'ERP-05', description: 'Ensure emergency contact numbers are updated and displayed.', priority: 'High', riskLevel: 'High', proof: 'Contact List Photo', location: 'Various' },
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
            { text: "Storage & stacking safety.", icon: <Package /> },
            { text: "Forklift & vehicle operation checks.", icon: <HardHat /> },
            { text: "Fire & electrical safety for warehouses.", icon: <Siren /> },
            { text: "Receiving & dispatch documentation control.", icon: <FileCheck /> },
            { text: "Hazardous goods handling.", icon: <FileWarning /> },
        ],
        globalStandards: {
            title: "Aligned with Global Logistics Standards",
            standards: [
                { name: "ISO 28000", description: "For supply chain security management systems." },
                { name: "ADR/IMDG/IATA", description: "Regulations for transporting dangerous goods." },
                { name: "OSHA Standards", description: "Guidelines for forklift and warehouse safety." },
                { name: "Factories Act", description: "Compliance with Indian laws for warehouse safety." }
            ]
        },
        checklists: [
            {
                title: "Storage & Pallet Safety SOP",
                department: "Operations",
                frequency: "Daily",
                role: "Supervisor",
                icon: <Package />,
                summary: "Max stacking heights, aisle widths, pallet integrity checks, load distribution diagrams.",
                tasks: [
                    { id: 'LOG-STORE-01', description: 'Verify that pallets are not stacked above the marked maximum height.', priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Racking Area' },
                    { id: 'LOG-STORE-02', description: 'Ensure all aisles are clear and meet the minimum width requirement.', priority: 'High', riskLevel: 'High', proof: 'Aisle Inspection Log', location: 'Warehouse Floor' },
                    { id: 'LOG-STORE-03', description: 'Inspect pallets for damage or instability before storage.', priority: 'High', riskLevel: 'High', proof: 'Pallet Inspection Log', location: 'Receiving Area' },
                    { id: 'LOG-STORE-04', description: 'Check that loads are stable and properly shrink-wrapped.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Staging Area' },
                    { id: 'LOG-STORE-05', description: 'Audit racking systems for any signs of damage or overloading.', priority: 'High', riskLevel: 'High', proof: 'Racking Inspection Log', location: 'Racking Area' },
                ]
            },
            {
                title: "Forklift Pre-Op Checklist",
                department: "Operations",
                frequency: "Per Shift",
                role: "Forklift Operator",
                icon: <HardHat />,
                summary: "Brakes, steering, lights, horn, load capacity plate verification; operator licence check.",
                tasks: [
                    { id: 'LOG-FORKLIFT-01', description: 'Test brakes, steering, lights, and horn before starting operation.', priority: 'High', riskLevel: 'High', proof: 'Pre-Op Checklist Form', location: 'MHE Area' },
                    { id: 'LOG-FORKLIFT-02', description: 'Verify the load capacity plate is visible and legible.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Forklift' },
                    { id: 'LOG-FORKLIFT-03', description: 'Supervisor to verify operator has a valid license.', priority: 'High', riskLevel: 'High', proof: 'License Check Log', location: 'Office' },
                    { id: 'LOG-FORKLIFT-04', description: 'Check for any hydraulic leaks.', priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Forklift' },
                    { id: 'LOG-FORKLIFT-05', description: 'Ensure the operator is wearing the required PPE.', priority: 'High', riskLevel: 'High', proof: 'PPE Check', location: 'MHE Area' },
                ]
            },
            {
                title: "Receiving Inspection SOP",
                department: "Inbound",
                frequency: "Per Shipment",
                role: "Receiving Clerk",
                icon: <PackageCheck />,
                summary: "Match to PO, inspect packaging for damage, quarantine nonconforming goods, upload photos to system.",
                tasks: [
                    { id: 'LOG-RECV-01', description: 'Match delivery challan against the Purchase Order in the system.', priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Receiving Dock' },
                    { id: 'LOG-RECV-02', description: 'Inspect packaging for any signs of damage or tampering.', priority: 'High', riskLevel: 'High', proof: 'Photo of damage', location: 'Receiving Dock' },
                    { id: 'LOG-RECV-03', description: 'Quarantine any non-conforming goods in a designated area.', priority: 'High', riskLevel: 'High', proof: 'Quarantine Log', location: 'Quarantine Area' },
                    { id: 'LOG-RECV-04', description: 'Upload photos of any damaged goods to the system.', priority: 'High', riskLevel: 'High', proof: 'System Upload', location: 'System' },
                    { id: 'LOG-RECV-05', description: 'Count and verify the quantity of goods received.', priority: 'High', riskLevel: 'High', proof: 'Count Sheet', location: 'Receiving Dock' },
                ]
            },
            {
                title: "Dispatch & Truck Loading Checklist",
                department: "Outbound",
                frequency: "Per Shipment",
                role: "Dispatch Supervisor",
                icon: <Truck />,
                summary: "Load restraint verification, weight distribution checks, driver pre-trip inspection.",
                tasks: [
                    { id: 'LOG-DISP-01', description: 'Verify load is properly restrained and secured inside the truck.', priority: 'High', riskLevel: 'High', proof: 'Photo of Secured Load', location: 'Loading Bay' },
                    { id: 'LOG-DISP-02', description: 'Ensure weight is evenly distributed to prevent tipping.', priority: 'High', riskLevel: 'High', proof: 'Weight Distribution Plan', location: 'Loading Bay' },
                    { id: 'LOG-DISP-03', description: 'Match the physical goods being loaded with the dispatch documentation.', priority: 'High', riskLevel: 'High', proof: 'Dispatch Note Sign-off', location: 'Loading Bay' },
                    { id: 'LOG-DISP-04', description: 'Ensure the truck is sealed (if required) and the seal number is recorded.', priority: 'High', riskLevel: 'High', proof: 'Seal Log', location: 'Loading Bay' },
                    { id: 'LOG-DISP-05', description: 'Finalize and hand over all shipping documents to the driver.', priority: 'High', riskLevel: 'Medium', proof: 'Document Handover Log', location: 'Dispatch Office' },
                    { id: 'LOG-DISP-06', description: 'Verify the truck\'s registration and driver\'s license are valid.', priority: 'High', riskLevel: 'Medium', proof: 'Document Check', location: 'Security Gate' },
                    { id: 'LOG-DISP-07', description: 'Check the condition of the truck to ensure it is roadworthy (tires, lights).', priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Loading Bay' },
                    { id: 'LOG-DISP-08', description: 'Photograph the sealed truck before it departs.', priority: 'High', riskLevel: 'Medium', proof: 'Photo Archive', location: 'Loading Bay' },
                    { id: 'LOG-DISP-09', description: 'Confirm the driver has completed their pre-trip vehicle inspection.', priority: 'High', riskLevel: 'Medium', proof: 'Driver\'s Logbook Check', location: 'Loading Bay' },
                    { id: 'LOG-DISP-10', description: "Update the shipment status to 'Dispatched' in the WMS/TMS.", priority: 'High', riskLevel: 'Medium', proof: 'System Status Update', location: 'System' },
                ]
            },
            {
                title: "Hazmat Handling & Segregation SOP",
                department: "Safety",
                frequency: "Ongoing",
                role: "Safety Officer",
                icon: <FileWarning />,
                summary: "Segregation maps, PPE, SDS/MSDS availability, appropriate signage.",
                tasks: [
                    { id: 'LOG-HAZMAT-01', description: 'Store hazardous goods according to the chemical segregation map.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Hazmat Area' },
                    { id: 'LOG-HAZMAT-02', description: 'Ensure appropriate PPE is used when handling hazardous materials.', priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Hazmat Area' },
                    { id: 'LOG-HAZMAT-03', description: 'Verify that Safety Data Sheets (SDS/MSDS) are available for all hazardous goods.', priority: 'High', riskLevel: 'High', proof: 'SDS Binder Check', location: 'Hazmat Area' },
                    { id: 'LOG-HAZMAT-04', description: 'Check that all hazardous areas are marked with appropriate signage.', priority: 'High', riskLevel: 'High', proof: 'Signage Audit', location: 'Hazmat Area' },
                    { id: 'LOG-HAZMAT-05', description: 'Inspect spill containment kits monthly.', priority: 'High', riskLevel: 'High', proof: 'Spill Kit Log', location: 'Hazmat Area' },
                ]
            },
            {
                title: "Inventory Cycle Counting",
                department: "Inventory",
                frequency: "Daily/Weekly",
                role: "Inventory Controller",
                icon: <Barcode />,
                summary: "A structured approach to cycle counting to maintain high inventory accuracy.",
                tasks: [
                    { id: 'ICC-01', description: 'Generate a list of items for daily cycle counting based on ABC analysis.', priority: 'High', riskLevel: 'High', proof: 'Count Sheet', location: 'System' },
                    { id: 'ICC-02', description: 'Perform blind counts to ensure accuracy.', priority: 'High', riskLevel: 'High', proof: 'Blind Count Procedure', location: 'Office' },
                    { id: 'ICC-03', description: 'Investigate discrepancies between system and physical count immediately.', priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'System' },
                    { id: 'ICC-04', description: 'Process inventory adjustments with manager approval.', priority: 'High', riskLevel: 'High', proof: 'Adjustment Form', location: 'System' },
                    { id: 'ICC-05', description: 'Track and report inventory accuracy percentage weekly.', priority: 'High', riskLevel: 'High', proof: 'Accuracy Report', location: 'System' },
                ]
            },
            {
                title: "Warehouse Housekeeping",
                department: "Operations",
                frequency: "Daily",
                role: "Supervisor",
                icon: <Sparkles />,
                summary: "Daily checks for cleanliness and order to ensure a safe and efficient working environment.",
                tasks: [
                    { id: 'WH-01', description: 'Ensure all floors are clean and free of debris.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Warehouse Floor' },
                    { id: 'WH-02', description: 'Keep all aisles and emergency exits clear of obstructions.', priority: 'High', riskLevel: 'High', proof: 'Aisle Inspection Log', location: 'Warehouse Floor' },
                    { id: 'WH-03', description: 'Empty all trash and recycling bins daily.', priority: 'High', riskLevel: 'Low', proof: 'Waste Log', location: 'Waste Area' },
                    { id: 'WH-04', description: 'Organize and store all equipment in its designated place.', priority: 'Medium', riskLevel: 'Low', proof: 'Equipment Storage Audit', location: 'Various' },
                    { id: 'WH-05', description: 'Conduct a weekly deep clean of the entire warehouse.', priority: 'Medium', riskLevel: 'Medium', proof: 'Deep Clean Schedule', location: 'Office' },
                ]
            },
            {
                title: "Dock & Yard Management",
                department: "Operations",
                frequency: "Ongoing",
                role: "Yard Marshal",
                icon: <Truck />,
                summary: "Managing the flow of trucks in the yard to ensure safety and efficiency.",
                tasks: [
                    { id: 'DYM-01', description: 'Direct incoming and outgoing trucks to the correct docks.', priority: 'High', riskLevel: 'High', proof: 'Yard Log', location: 'Yard' },
                    { id: 'DYM-02', description: 'Ensure trucks are chocked and secured before loading/unloading.', priority: 'High', riskLevel: 'High', proof: 'Chocking Log', location: 'Docks' },
                    { id: 'DYM-03', description: 'Manage yard traffic to prevent congestion and accidents.', priority: 'High', riskLevel: 'High', proof: 'Yard Traffic Plan', location: 'Yard' },
                    { id: 'DYM-04', description: 'Inspect the yard for any hazards or debris.', priority: 'High', riskLevel: 'Medium', proof: 'Yard Inspection Log', location: 'Yard' },
                    { id: 'DYM-05', description: 'Communicate with warehouse staff about truck arrival and departure.', priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'System' },
                ]
            },
            {
                title: "Security & Access Control",
                department: "Security",
                frequency: "Ongoing",
                role: "Security Supervisor",
                icon: <Shield />,
                summary: "Controlling access to the warehouse to prevent theft and ensure only authorized personnel are present.",
                tasks: [
                    { id: 'SAC-01', description: 'Check membership status of everyone entering the facility.', priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Main Gate' },
                    { id: 'SAC-02', description: 'Monitor CCTV cameras for suspicious activity.', priority: 'High', riskLevel: 'High', proof: 'CCTV Log', location: 'Security Office' },
                    { id: 'SAC-03', description: 'Perform regular patrols of the locker rooms and other areas.', priority: 'High', riskLevel: 'Medium', proof: 'Patrol Log', location: 'Facility-wide' },
                    { id: 'SAC-04', description: 'Ensure all lockers are functional and report any broken ones.', priority: 'Medium', riskLevel: 'Medium', proof: 'Locker Inspection Log', location: 'Locker Rooms' },
                    { id: 'SAC-05', description: 'Manage a lost and found system for member belongings.', priority: 'High', riskLevel: 'Low', proof: 'Lost and Found Log', location: 'Reception' },
                ]
            },
            {
                title: "Order Picking & Packing",
                department: "Outbound",
                frequency: "Per Order",
                role: "Picker/Packer",
                icon: <PackageCheck />,
                summary: "Ensuring orders are picked accurately and packed securely to prevent errors and damage.",
                tasks: [
                    { id: 'OPP-01', description: 'Use a pick list or handheld scanner to pick the correct items.', priority: 'High', riskLevel: 'High', proof: 'Picking Accuracy Report', location: 'Picking Area' },
                    { id: 'OPP-02', description: 'Double-check items and quantities before packing.', priority: 'High', riskLevel: 'High', proof: 'QC Check Log', location: 'Packing Station' },
                    { id: 'OPP-03', description: 'Use appropriate packing materials to prevent damage in transit.', priority: 'High', riskLevel: 'Medium', proof: 'Packing Guidelines', location: 'Packing Station' },
                    { id: 'OPP-04', description: 'Label all packages correctly with shipping information.', priority: 'High', riskLevel: 'High', proof: 'Label Audit', location: 'Packing Station' },
                    { id: 'OPP-05', description: 'Update the order status in the system once packed.', priority: 'High', riskLevel: 'Medium', proof: 'System Log', location: 'System' },
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
            { text: "Pre-production legal & clearances.", icon: <FileLock /> },
            { text: "On-set safety (EHS).", icon: <Siren /> },
            { text: "Stunt & high-risk scene protocols.", icon: <Car /> },
            { text: "Data security & NDA compliance.", icon: <Lock /> },
            { text: "Vendor billing & invoice auditing.", icon: <DollarSign /> }
        ],
        previewScenario: {
            title: "The $2M Mistake: Averting a 'Life Rights' Disaster",
            description: "A biopic is about to start shooting when the subject's family threatens a lawsuit, claiming life rights were not secured. This scenario shows how checklists prevent a project-killing legal catastrophe.",
            tasks: [
                { id: 'FILM-LEGAL-03', description: "The 'Pre-production Legal' checklist has a mandatory item to obtain signed life rights agreements, which would have flagged this issue in the planning stage.", sourceChecklist: "Pre-production Legal & Clearances", priority: 'High' },
                { id: 'FILM-LEGAL-04', description: "The 'Errors & Omissions (E&O) Insurance' checklist item would fail because insurers require proof of life rights clearance before issuing a policy.", sourceChecklist: "Pre-production Legal & Clearances", priority: 'High' },
                { id: 'FILM-DATA-01', description: "The 'NDA Compliance' SOP ensures that even initial scripts shared with cast would have been done under an NDA, limiting early-stage leaks.", sourceChecklist: "Data Security & NDA Compliance", priority: 'High' }
            ]
        },
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
            },
            {
                title: "Location Scouting & Permitting",
                department: "Locations",
                frequency: "Per Location",
                role: "Location Manager",
                icon: <Map />,
                summary: "A comprehensive checklist for finding, securing, and managing film locations.",
                tasks: [
                    { id: 'LOC-01', description: 'Scout potential locations based on script requirements.', priority: 'High', riskLevel: 'Medium', proof: 'Location Photos', location: 'Various' },
                    { id: 'LOC-02', description: 'Obtain all necessary filming permits from local authorities.', priority: 'High', riskLevel: 'High', proof: 'Filming Permits', location: 'Legal File' },
                    { id: 'LOC-03', description: 'Negotiate and sign location agreements with property owners.', priority: 'High', riskLevel: 'High', proof: 'Location Agreements', location: 'Legal File' },
                    { id: 'LOC-04', description: 'Assess locations for logistical challenges (power, access, noise).', priority: 'High', riskLevel: 'High', proof: 'Location Tech Recce Report', location: 'Production Office' },
                    { id: 'LOC-05', description: 'Coordinate with local police for traffic and crowd control.', priority: 'High', riskLevel: 'High', proof: 'Police Coordination Plan', location: 'Production Office' }
                ]
            },
            {
                title: "Casting & Talent Management",
                department: "Casting",
                frequency: "Pre-production",
                role: "Casting Director",
                icon: <Users />,
                summary: "A structured process for auditioning, casting, and managing actors for the project.",
                tasks: [
                    { id: 'CAST-01', description: 'Develop character breakdowns based on the script.', priority: 'High', riskLevel: 'Medium', proof: 'Character Breakdowns', location: 'Casting Office' },
                    { id: 'CAST-02', description: 'Hold auditions and screen tests for key roles.', priority: 'High', riskLevel: 'High', proof: 'Audition Tapes', location: 'Casting Office' },
                    { id: 'CAST-03', description: 'Negotiate contracts with actors and their agents.', priority: 'High', riskLevel: 'High', proof: 'Actor Contracts', location: 'Legal File' },
                    { id: 'CAST-04', description: 'Coordinate travel and accommodation for out-of-town talent.', priority: 'High', riskLevel: 'Medium', proof: 'Travel Itineraries', location: 'Production Office' },
                    { id: 'CAST-05', description: 'Ensure all talent have call sheets and schedules.', priority: 'High', riskLevel: 'High', proof: 'Call Sheets', location: 'Production Office' }
                ]
            },
            {
                title: "Props & Wardrobe Management",
                department: "Art/Costume",
                frequency: "Daily",
                role: "Prop Master/Costume Supervisor",
                icon: <Shirt />,
                summary: "Checklists for tracking props and costumes to ensure continuity and prevent loss or damage.",
                tasks: [
                    { id: 'PROP-01', description: 'Create a detailed inventory of all props and wardrobe items.', priority: 'High', riskLevel: 'High', proof: 'Inventory List', location: 'Art/Costume Dept' },
                    { id: 'PROP-02', description: 'Track the continuity of props and wardrobe for each scene.', priority: 'High', riskLevel: 'High', proof: 'Continuity Photos/Notes', location: 'Set' },
                    { id: 'PROP-03', description: 'Securely store all items at the end of each shooting day.', priority: 'High', riskLevel: 'High', proof: 'End-of-Day Storage Log', location: 'Art/Costume Dept' },
                    { id: 'PROP-04', description: 'Manage the budget for props and wardrobe.', priority: 'High', riskLevel: 'Medium', proof: 'Budget Tracker', location: 'Accounts Office' },
                    { id: 'PROP-05', description: 'Handle returns of all rented items promptly after use.', priority: 'High', riskLevel: 'Medium', proof: 'Rental Return Receipts', location: 'Art/Costume Dept' }
                ]
            },
            {
                title: "Post-Production Workflow",
                department: "Post-Production",
                frequency: "Ongoing",
                role: "Post-Production Supervisor",
                icon: <Scissors />,
                summary: "A workflow to manage the entire post-production process, from editing to final delivery.",
                tasks: [
                    { id: 'POST-01', description: 'Log and backup all footage from the shoot.', priority: 'High', riskLevel: 'High', proof: 'Dailies Log', location: 'Post-production Suite' },
                    { id: 'POST-02', description: 'Manage the editing, sound design, and VFX pipelines.', priority: 'High', riskLevel: 'High', proof: 'Post-production Schedule', location: 'Post-production Suite' },
                    { id: 'POST-03', description: 'Coordinate color grading and final sound mixing.', priority: 'High', riskLevel: 'High', proof: 'Post-production Schedule', location: 'Post-production Suite' },
                    { id: 'POST-04', description: 'Deliver the final master in all required formats.', priority: 'High', riskLevel: 'High', proof: 'Delivery Specs Sheet', location: 'Post-production Suite' },
                    { id: 'POST-05', description: 'Archive all project files securely after delivery.', priority: 'High', riskLevel: 'High', proof: 'Archive Log', location: 'System' }
                ]
            },
            {
                title: "Marketing & Distribution Strategy",
                department: "Marketing",
                frequency: "Pre-release",
                role: "Marketing Head",
                icon: <Megaphone />,
                summary: "A strategic checklist for planning the marketing and distribution of the film.",
                tasks: [
                    { id: 'MKTG-01', description: 'Develop a comprehensive marketing plan and budget.', priority: 'High', riskLevel: 'High', proof: 'Marketing Plan', location: 'Marketing Office' },
                    { id: 'MKTG-02', description: 'Create all marketing assets (posters, trailers, social media content).', priority: 'High', riskLevel: 'High', proof: 'Asset Checklist', location: 'Marketing Office' },
                    { id: 'MKTG-03', description: 'Plan and execute the PR and media campaign.', priority: 'High', riskLevel: 'High', proof: 'PR Plan', location: 'Marketing Office' },
                    { id: 'MKTG-04', description: 'Secure distribution deals for theatrical, broadcast, and streaming.', priority: 'High', riskLevel: 'High', proof: 'Distribution Agreements', location: 'Legal File' },
                    { id: 'MKTG-05', description: 'Coordinate the release schedule across all territories.', priority: 'High', riskLevel: 'High', proof: 'Release Schedule', location: 'Marketing Office' }
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
            { text: "Content classification & release workflow.", icon: <FileCheck /> },
            { text: "Legal & licensing documentation SOP.", icon: <FileLock /> },
            { text: "Data privacy & subscriber data handling.", icon: <Shield /> },
            { text: "Platform security & incident response.", icon: <Siren /> },
            { text: "Content takedown & compliance with local regulations.", icon: <Recycle /> }
        ],
        globalStandards: {
            title: "Aligned with Global Tech & Media Standards",
            standards: [
                { name: "IT Rules / DPDP", description: "Compliance with Indian intermediary and data privacy laws." },
                { name: "GDPR / ISO 27001", description: "Adherence to global data privacy and information security standards." },
                { name: "DMCA", description: "Processes for handling copyright takedown notices in the US." },
                { name: "Local Broadcast Codes", description: "Framework for managing content across different regions." }
            ]
        },
        checklists: [
            {
                title: "Content Classification & Release Checklist",
                department: "Content Ops",
                frequency: "Per Release",
                role: "Content Manager",
                icon: <FileCheck />,
                summary: "Rating, region restrictions, metadata completeness, subtitle and dubbing approvals, legal sign-off on rights and clearances.",
                tasks: [
                    { id: 'OTT-RELEASE-01', description: 'Assign content rating and define region-specific restrictions.', priority: 'High', riskLevel: 'High', proof: 'CMS Entry', location: 'CMS' },
                    { id: 'OTT-RELEASE-02', description: 'Verify all metadata is complete and accurate.', priority: 'High', riskLevel: 'Medium', proof: 'Metadata Checklist', location: 'CMS' },
                    { id: 'OTT-RELEASE-03', description: 'Confirm subtitle and dubbing tracks are approved.', priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'System' },
                    { id: 'OTT-RELEASE-04', description: 'Obtain final legal sign-off on content rights and clearances.', priority: 'High', riskLevel: 'High', proof: 'Legal Sign-off Email', location: 'Legal File' },
                    { id: 'OTT-RELEASE-05', description: 'Schedule the content for release in the CMS.', priority: 'High', riskLevel: 'Medium', proof: 'CMS Schedule', location: 'CMS' },
                ]
            },
            {
                title: "Pre-Publish Security Review",
                department: "Security",
                frequency: "Per Release",
                role: "Security Engineer",
                icon: <ShieldCheck />,
                summary: "Check for sensitive PII in metadata, ensure CDN credentials rotated, access keys limited to roles.",
                tasks: [
                    { id: 'OTT-SEC-01', description: 'Scan all metadata for personally identifiable information (PII).', priority: 'High', riskLevel: 'High', proof: 'Scan Report', location: 'System' },
                    { id: 'OTT-SEC-02', description: 'Ensure CDN credentials used for publishing are rotated regularly.', priority: 'High', riskLevel: 'High', proof: 'Credential Rotation Log', location: 'System' },
                    { id: 'OTT-SEC-03', description: 'Verify access keys are role-based and limited in scope.', priority: 'High', riskLevel: 'High', proof: 'IAM Policy Review', location: 'Cloud Console' },
                    { id: 'OTT-SEC-04', description: 'Check for any hardcoded secrets in the content package.', priority: 'High', riskLevel: 'High', proof: 'Code Scan Report', location: 'System' },
                    { id: 'OTT-SEC-05', description: 'Ensure DRM is correctly applied to the content.', priority: 'High', riskLevel: 'High', proof: 'DRM Log', location: 'System' },
                ]
            },
            {
                title: "Data Privacy & Retention SOP",
                department: "Compliance",
                frequency: "Quarterly",
                role: "DPO",
                icon: <FileLock />,
                summary: "Encrypted storage, retention schedules, consent capture flows, breach-notification plan.",
                tasks: [
                    { id: 'OTT-PRIV-01', description: 'Audit subscriber data storage to ensure it is encrypted.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit Report', location: 'System' },
                    { id: 'OTT-PRIV-02', description: 'Review data retention schedules and verify old data is being purged.', priority: 'High', riskLevel: 'High', proof: 'Data Purge Log', location: 'System' },
                    { id: 'OTT-PRIV-03', description: 'Test the consent capture and withdrawal flows.', priority: 'High', riskLevel: 'High', proof: 'Test Report', location: 'Platform' },
                    { id: 'OTT-PRIV-04', description: 'Review and update the data breach notification plan.', priority: 'High', riskLevel: 'High', proof: 'Updated Plan', location: 'Compliance Office' },
                    { id: 'OTT-PRIV-05', description: 'Conduct a Data Protection Impact Assessment (DPIA) for new features.', priority: 'High', riskLevel: 'High', proof: 'DPIA Report', location: 'Compliance Office' },
                ]
            },
            {
                title: "Vulnerability & Patch Management",
                department: "IT Security",
                frequency: "Monthly",
                role: "Security Manager",
                icon: <Bug />,
                summary: "Scheduled security scans, patch validation, SSO/OAuth review.",
                tasks: [
                    { id: 'OTT-VULN-01', description: 'Run scheduled vulnerability scans on all platform components.', priority: 'High', riskLevel: 'High', proof: 'Scan Report', location: 'Security System' },
                    { id: 'OTT-VULN-02', description: 'Validate and deploy critical security patches within the defined SLA.', priority: 'High', riskLevel: 'High', proof: 'Patch Deployment Log', location: 'System' },
                    { id: 'OTT-VULN-03', description: 'Review SSO and OAuth configurations for any security gaps.', priority: 'High', riskLevel: 'High', proof: 'Configuration Review Report', location: 'System' },
                    { id: 'OTT-VULN-04', description: 'Perform penetration testing on the platform annually.', priority: 'High', riskLevel: 'High', proof: 'Pen Test Report', location: 'Security Office' },
                    { id: 'OTT-VULN-05', description: 'Track all identified vulnerabilities to closure.', priority: 'High', riskLevel: 'High', proof: 'Vulnerability Tracker', location: 'System' },
                ]
            },
            {
                title: "Regulatory Compliance Matrix",
                department: "Legal",
                frequency: "Quarterly",
                role: "Legal Counsel",
                icon: <Scale />,
                summary: "Mapping content to local rules (e.g., region-specific bans) and process for geo-blocking.",
                tasks: [
                    { id: 'OTT-REG-01', description: 'Update the compliance matrix with any new regulations for operating regions.', priority: 'High', riskLevel: 'High', proof: 'Updated Matrix', location: 'Legal File' },
                    { id: 'OTT-REG-02', description: 'Audit content library against the matrix to identify non-compliant titles.', priority: 'High', riskLevel: 'High', proof: 'Content Audit Report', location: 'System' },
                    { id: 'OTT-REG-03', description: 'Test the geo-blocking functionality to ensure it works as expected.', priority: 'High', riskLevel: 'High', proof: 'Geo-blocking Test Report', location: 'System' },
                    { id: 'OTT-REG-04', description: 'Ensure all required content advisories are displayed.', priority: 'High', riskLevel: 'High', proof: 'Advisory Check', location: 'Platform' },
                    { id: 'OTT-REG-05', description: 'File any necessary compliance reports with regulatory bodies.', priority: 'High', riskLevel: 'High', proof: 'Filed Reports', location: 'Legal File' },
                ]
            },
            {
                title: "Live Event Readiness",
                department: "SRE/Ops",
                frequency: "Per Live Event",
                role: "SRE Lead",
                icon: <Zap />,
                summary: "A checklist to ensure platform stability during high-concurrency live events like sports matches.",
                tasks: [
                    { id: 'LER-01', description: 'Perform load testing to simulate peak viewership.', priority: 'High', riskLevel: 'High', proof: 'Load Test Report', location: 'Staging Environment' },
                    { id: 'LER-02', description: 'Verify auto-scaling policies for all backend services.', priority: 'High', riskLevel: 'High', proof: 'Scaling Policy Review', location: 'Cloud Console' },
                    { id: 'LER-03', description: 'Conduct a disaster recovery drill by failing a regional cluster.', priority: 'High', riskLevel: 'High', proof: 'DR Drill Report', location: 'Production' },
                    { id: 'LER-04', description: 'Establish a "war room" with key personnel for the duration of the event.', priority: 'High', riskLevel: 'High', proof: 'War Room Roster', location: 'Office' },
                    { id: 'LER-05', description: 'Brief customer support on potential issues and communication protocols.', priority: 'High', riskLevel: 'Medium', proof: 'Support Briefing', location: 'Office' },
                ]
            },
            {
                title: "Ad-Ops & Monetization",
                department: "Ad-Ops",
                frequency: "Daily",
                role: "Ad-Ops Manager",
                icon: <DollarSign />,
                summary: "Checklists for managing ad inventory, campaign delivery, and revenue reconciliation.",
                tasks: [
                    { id: 'AD-01', description: 'Monitor ad fill rates and CPMs daily.', priority: 'High', riskLevel: 'High', proof: 'Ad Server Dashboard', location: 'System' },
                    { id: 'AD-02', description: 'Reconcile ad revenue with finance reports weekly.', priority: 'High', riskLevel: 'High', proof: 'Revenue Reconciliation Report', location: 'Office' },
                    { id: 'AD-03', description: 'Test new ad creatives for compatibility and performance.', priority: 'High', riskLevel: 'Medium', proof: 'Creative Test Report', location: 'Staging' },
                    { id: 'AD-04', description: 'Manage ad campaign pacing to ensure delivery targets are met.', priority: 'High', riskLevel: 'High', proof: 'Pacing Report', location: 'System' },
                    { id: 'AD-05', description: 'Ensure compliance with ad industry standards (e.g., IAB).', priority: 'High', riskLevel: 'High', proof: 'Compliance Audit', location: 'Office' },
                ]
            },
            {
                title: "Subscriber Management",
                department: "Product/CRM",
                frequency: "Ongoing",
                role: "Product Manager",
                icon: <Users />,
                summary: "Manages the user lifecycle from signup and payment to subscription renewals and cancellations.",
                tasks: [
                    { id: 'SM-01', description: 'Test the user signup and payment flows weekly.', priority: 'High', riskLevel: 'High', proof: 'Test Report', location: 'Platform' },
                    { id: 'SM-02', description: 'Monitor subscription renewal and churn rates.', priority: 'High', riskLevel: 'High', proof: 'Subscription Dashboard', location: 'System' },
                    { id: 'SM-03', description: 'Manage promotional offers and coupon codes.', priority: 'High', riskLevel: 'Medium', proof: 'Promotion Calendar', location: 'System' },
                    { id: 'SM-04', description: 'Handle customer support escalations related to billing and access.', priority: 'High', riskLevel: 'High', proof: 'Escalation Log', location: 'CRM' },
                    { id: 'SM-05', description: 'Ensure compliance with payment card industry (PCI) standards.', priority: 'High', riskLevel: 'High', proof: 'PCI Compliance Certificate', location: 'Compliance Office' },
                ]
            },
            {
                title: "Content Ingestion & QC",
                department: "Content Ops",
                frequency: "Per Asset",
                role: "Ingestion Specialist",
                icon: <Video />,
                summary: "A workflow for ingesting, transcoding, and quality-checking all video assets before they go live.",
                tasks: [
                    { id: 'CIQ-01', description: 'Verify video and audio specifications of the source file.', priority: 'High', riskLevel: 'High', proof: 'Source File Spec Sheet', location: 'System' },
                    { id: 'CIQ-02', description: 'Transcode the video into all required formats and bitrates.', priority: 'High', riskLevel: 'High', proof: 'Transcoding Log', location: 'System' },
                    { id: 'CIQ-03', description: 'Perform a full QC of the transcoded files for any artifacts or errors.', priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'System' },
                    { id: 'CIQ-04', description: 'Ingest all subtitle and audio dubbing files and sync them.', priority: 'High', riskLevel: 'High', proof: 'Sync Check', location: 'System' },
                    { id: 'CIQ-05', description: 'Publish the final content package to the CDN.', priority: 'High', riskLevel: 'High', proof: 'Publish Log', location: 'System' },
                ]
            },
            {
                title: "Analytics & Reporting",
                department: "Data/BI",
                frequency: "Daily/Weekly",
                role: "Data Analyst",
                icon: <BarChart3 />,
                summary: "Ensures that all viewership and engagement data is being collected and reported accurately.",
                tasks: [
                    { id: 'AR-01', description: 'Verify that data pipelines are running and up to date.', priority: 'High', riskLevel: 'High', proof: 'Pipeline Monitoring Tool', location: 'System' },
                    { id: 'AR-02', description: 'Generate daily viewership and engagement reports.', priority: 'High', riskLevel: 'Medium', proof: 'Daily Reports', location: 'BI Tool' },
                    { id: 'AR-03', description: 'Reconcile data with third-party analytics platforms.', priority: 'High', riskLevel: 'Medium', proof: 'Reconciliation Sheet', location: 'System' },
                    { id: 'AR-04', description: 'Fulfill ad-hoc data requests from other departments.', priority: 'Medium', riskLevel: 'Low', proof: 'Request Tracker', location: 'System' },
                    { id: 'AR-05', description: 'Build and maintain dashboards for key business metrics.', priority: 'High', riskLevel: 'Medium', proof: 'Dashboards', location: 'BI Tool' },
                ]
            }
        ]
    },
    {
        id: 'theme_park_ops_pack',
        title: "Theme Park Operations Pack",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A complete safety and operational toolkit for theme parks and amusement centers, focusing on ride safety, crowd management, and guest experience.",
        icon: <FerrisWheel />,
        whoIsItFor: ["Theme Park GMs", "Heads of Operations", "Safety Directors", "Maintenance Heads", "F&B Managers"],
        sampleItems: [
            { text: "Ride inspection & maintenance.", icon: <Wrench /> },
            { text: "Guest safety & queue/crowd management.", icon: <Users /> },
            { text: "Emergency response & medical readiness.", icon: <Ambulance /> },
            { text: "Vendor / F&B stall safety.", icon: <Utensils /> },
            { text: "Seasonal preparedness.", icon: <Wind /> },
        ],
        globalStandards: {
            title: "Aligned with Global Amusement Park Standards",
            standards: [
                { name: "ASTM F24", description: "International standard for amusement ride and device safety." },
                { name: "ISO 45001", description: "For occupational health and safety management." },
                { name: "NFPA", description: "Adherence to fire safety and life safety codes." },
                { name: "Factories Act", description: "Compliance with Indian laws for mechanical and electrical safety." }
            ]
        },
        checklists: [
            {
                title: "Daily Ride Pre-Opening Inspections",
                department: "Maintenance/Operations",
                frequency: "Daily",
                role: "Ride Operator/Engineer",
                icon: <Wrench />,
                summary: "Visual check, safety restraints, emergency stop test, hydraulic/pneumatic leak checks, log with operator signature.",
                tasks: [
                    { id: 'TP-RIDE-01', description: 'Perform a visual inspection of the ride structure.', priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Ride Location' },
                    { id: 'TP-RIDE-02', description: 'Test all safety restraints (lap bars, harnesses).', priority: 'High', riskLevel: 'High', proof: 'Restraint Test Log', location: 'Ride Location' },
                    { id: 'TP-RIDE-03', description: 'Conduct a test of the emergency stop function.', priority: 'High', riskLevel: 'High', proof: 'E-Stop Test Log', location: 'Ride Control Booth' },
                    { id: 'TP-RIDE-04', description: 'Check for any hydraulic or pneumatic leaks.', priority: 'High', riskLevel: 'High', proof: 'Leak Inspection Log', location: 'Ride Location' },
                    { id: 'TP-RIDE-05', description: 'Operator to sign off on the pre-opening checklist before first use.', priority: 'High', riskLevel: 'High', proof: 'Signed Checklist', location: 'Ride Control Booth' },
                ]
            },
            {
                title: "Guest Safety & Queue SOP",
                department: "Operations",
                frequency: "Ongoing",
                role: "Queue Manager",
                icon: <Users />,
                summary: "Capacity indicators, rope/barrier checks, signage for minimum height, incident capturing at exit.",
                tasks: [
                    { id: 'TP-QUEUE-01', description: 'Monitor queue lines to ensure they do not exceed capacity.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Monitoring', location: 'Queue Area' },
                    { id: 'TP-QUEUE-02', description: 'Check all queue ropes and barriers for stability.', priority: 'High', riskLevel: 'Medium', proof: 'Barrier Inspection Log', location: 'Queue Area' },
                    { id: 'TP-QUEUE-03', description: 'Verify minimum height and other safety restriction signage is clearly visible.', priority: 'High', riskLevel: 'High', proof: 'Signage Audit', location: 'Ride Entrance' },
                    { id: 'TP-QUEUE-04', description: 'Log any guest incidents that occur in the queue area.', priority: 'High', riskLevel: 'High', proof: 'Incident Log', location: 'Ride Exit' },
                    { id: 'TP-QUEUE-05', description: 'Ensure staff are making safety announcements at regular intervals.', priority: 'High', riskLevel: 'Medium', proof: 'Announcement Log', location: 'Queue Area' },
                ]
            },
            {
                title: "Emergency Medical Response",
                department: "Health & Safety",
                frequency: "Ongoing",
                role: "Medical Team",
                icon: <Ambulance />,
                summary: "On-site first aid, dedicated ambulance contracts for major events, communication tree for incident escalation.",
                tasks: [
                    { id: 'TP-MED-01', description: 'Ensure all first aid posts are stocked and staffed.', priority: 'High', riskLevel: 'High', proof: 'First Aid Post Log', location: 'First Aid Stations' },
                    { id: 'TP-MED-02', description: 'For major events, confirm dedicated ambulance is on-site or on standby.', priority: 'High', riskLevel: 'High', proof: 'Ambulance Confirmation', location: 'Event Control' },
                    { id: 'TP-MED-03', description: 'Test the emergency communication system (walkie-talkies, phones).', priority: 'High', riskLevel: 'High', proof: 'Comms Test Log', location: 'Control Room' },
                    { id: 'TP-MED-04', description: 'Review and update the medical emergency response plan quarterly.', priority: 'High', riskLevel: 'High', proof: 'Updated Plan', location: 'Office' },
                    { id: 'TP-MED-05', description: 'Check AEDs (Automated External Defibrillators) monthly.', priority: 'High', riskLevel: 'High', proof: 'AED Check Log', location: 'Various' },
                ]
            },
            {
                title: "Vendor Stall Safety & LPG Handling",
                department: "Vendor Management",
                frequency: "Daily",
                role: "Vendor Manager",
                icon: <Utensils />,
                summary: "Gas leak checks, fire extinguisher close at hand, vendor induction training.",
                tasks: [
                    { id: 'TP-VENDOR-01', description: 'Perform daily checks for LPG gas leaks at all food stalls.', priority: 'High', riskLevel: 'High', proof: 'Gas Leak Test Log', location: 'Food Stalls' },
                    { id: 'TP-VENDOR-02', description: 'Ensure each stall has a certified and accessible fire extinguisher.', priority: 'High', riskLevel: 'High', proof: 'Extinguisher Check', location: 'Food Stalls' },
                    { id: 'TP-VENDOR-03', description: 'Conduct safety induction training for all new vendors.', priority: 'High', riskLevel: 'Medium', proof: 'Induction Training Log', location: 'Office' },
                    { id: 'TP-VENDOR-04', description: 'Check electrical wiring for all stalls.', priority: 'High', riskLevel: 'High', proof: 'Electrical Safety Audit', location: 'Food Stalls' },
                    { id: 'TP-VENDOR-05', description: 'Verify vendors are complying with food hygiene standards.', priority: 'High', riskLevel: 'High', proof: 'Hygiene Audit', location: 'Food Stalls' },
                ]
            },
            {
                title: "Water Park Hygiene & Safety",
                department: "Aquatics",
                frequency: "Hourly/Daily",
                role: "Water Park Supervisor",
                icon: <Waves />,
                summary: "Hourly water quality tests, slide inspections, and lifeguard positioning for water parks.",
                tasks: [
                    { id: 'WP-HS-01', description: 'Test and log water pH and disinfectant levels every hour.', priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'WP-HS-02', description: 'Inspect all water slides for structural integrity and surface smoothness.', priority: 'High', riskLevel: 'High', proof: 'Slide Inspection Log', location: 'Slides' },
                    { id: 'WP-HS-03', description: 'Ensure lifeguards are positioned at all key points.', priority: 'High', riskLevel: 'High', proof: 'Lifeguard Deployment Plan', location: 'Water Park' },
                    { id: 'WP-HS-04', description: 'Check all wave pools and lazy rivers for correct operation.', priority: 'High', riskLevel: 'High', proof: 'System Check Log', location: 'Pump Room' },
                    { id: 'WP-HS-05', description: 'Verify all safety signage is clear and visible.', priority: 'High', riskLevel: 'High', proof: 'Signage Audit', location: 'Water Park' },
                ]
            },
            {
                title: "Character & Performer Safety",
                department: "Entertainment",
                frequency: "Per Shift",
                role: "Entertainment Manager",
                icon: <Theater />,
                summary: "Ensures the safety and well-being of costumed characters and performers.",
                tasks: [
                    { id: 'CPS-01', description: 'Ensure characters take mandatory rest and hydration breaks.', priority: 'High', riskLevel: 'High', proof: 'Break Log', location: 'Green Room' },
                    { id: 'CPS-02', description: 'Inspect costumes for visibility, ventilation, and any damage.', priority: 'High', riskLevel: 'High', proof: 'Costume Inspection Log', location: 'Green Room' },
                    { id: 'CPS-03', description: 'Provide a designated "handler" for each costumed character in crowded areas.', priority: 'High', riskLevel: 'High', proof: 'Handler Assignment Sheet', location: 'Park' },
                    { id: 'CPS-04', description: 'Train performers on managing crowds and interacting safely with children.', priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Office' },
                    { id: 'CPS-05', description: 'Have a clear protocol for performers to signal for assistance.', priority: 'High', riskLevel: 'High', proof: 'Emergency Signal Protocol', location: 'Entertainment Dept' },
                ]
            },
            {
                title: "Cash Handling & Ticketing Security",
                department: "Finance/Security",
                frequency: "Daily",
                role: "Ticketing Supervisor",
                icon: <Ticket />,
                summary: "Secure procedures for cash handling, ticket sales, and preventing fraud.",
                tasks: [
                    { id: 'CHTS-01', description: 'Reconcile cash from ticket counters at the end of each shift.', priority: 'High', riskLevel: 'High', proof: 'Cash Reconciliation Report', location: 'Cash Office' },
                    { id: 'CHTS-02', description: 'Audit ticket sales against entry scans to identify discrepancies.', priority: 'High', riskLevel: 'High', proof: 'Sales vs. Scan Report', location: 'System' },
                    { id: 'CHTS-03', description: 'Use counterfeit detection for all cash transactions.', priority: 'High', riskLevel: 'High', proof: 'Counterfeit Log', location: 'Ticket Counters' },
                    { id: 'CHTS-04', description: 'Securely store all cash and unsold ticket stock.', priority: 'High', riskLevel: 'High', proof: 'Safe Log', location: 'Cash Office' },
                    { id: 'CHTS-05', description: 'Monitor for any unusual void or discount patterns.', priority: 'High', riskLevel: 'High', proof: 'POS Audit Report', location: 'System' },
                ]
            },
            {
                title: "Lost Child Procedure",
                department: "Security/Guest Services",
                frequency: "As Needed",
                role: "Security Supervisor",
                icon: <HelpingHand />,
                summary: "A critical, time-sensitive protocol for responding to a report of a lost child.",
                tasks: [
                    { id: 'LCP-01', description: 'Immediately get a detailed description of the child and their clothing.', priority: 'High', riskLevel: 'High', proof: 'Lost Child Report Form', location: 'Guest Services' },
                    { id: 'LCP-02', description: 'Broadcast a "Code Adam" or similar alert to all staff with the description.', priority: 'High', riskLevel: 'High', proof: 'Radio Log', location: 'Control Room' },
                    { id: 'LCP-03', description: 'Monitor all exits and inform exit staff.', priority: 'High', riskLevel: 'High', proof: 'Exit Staff Communication Log', location: 'Control Room' },
                    { id: 'LCP-04', description: 'Dispatch staff to search specific zones of the park.', priority: 'High', riskLevel: 'High', proof: 'Search Team Deployment Log', location: 'Control Room' },
                    { id: 'LCP-05', description: 'Notify local police after a set period of time (e.g., 10 minutes).', priority: 'High', riskLevel: 'High', proof: 'Police Notification Log', location: 'Control Room' },
                ]
            },
            {
                title: "Park Opening & Closing Checklist",
                department: "Operations",
                frequency: "Daily",
                role: "Duty Manager",
                icon: <Key />,
                summary: "A master checklist to ensure the entire park is ready and safe for guests at opening and secure after closing.",
                tasks: [
                    { id: 'POCC-01', description: 'Confirm all departments have completed their pre-opening checklists.', priority: 'High', riskLevel: 'High', proof: 'Master Checklist', location: 'Control Room' },
                    { id: 'POCC-02', description: 'Conduct a final sweep of the park before opening to check for hazards.', priority: 'High', riskLevel: 'High', proof: 'Sweep Log', location: 'Park-wide' },
                    { id: 'POCC-03', description: 'Ensure all staff are at their designated positions before gates open.', priority: 'High', riskLevel: 'High', proof: 'Staff Position Check', location: 'Park-wide' },
                    { id: 'POCC-04', description: 'At closing, perform a sweep to ensure all guests have left.', priority: 'High', riskLevel: 'High', proof: 'Closing Sweep Log', location: 'Park-wide' },
                    { id: 'POCC-05', description: 'Secure all cash, valuable items, and lock all gates.', priority: 'High', riskLevel: 'High', proof: 'Closing Security Log', location: 'Various' },
                ]
            },
            {
                title: "Seasonal Preparedness (Monsoon/Winter)",
                department: "Maintenance/Safety",
                frequency: "Seasonal",
                role: "Head of Maintenance",
                icon: <Wind />,
                summary: "Pre-season checklists to prepare the park for specific weather challenges like monsoons or extreme heat.",
                tasks: [
                    { id: 'SP-01', description: 'Inspect and clear all drainage systems before the monsoon season.', priority: 'High', riskLevel: 'High', proof: 'Drainage Inspection Log', location: 'Park-wide' },
                    { id: 'SP-02', description: 'Secure or store all temporary structures that could be affected by high winds.', priority: 'High', riskLevel: 'High', proof: 'Wind Safety Log', location: 'Park-wide' },
                    { id: 'SP-03', description: 'Check all outdoor electrical systems for waterproofing.', priority: 'High', riskLevel: 'High', proof: 'Electrical Audit', location: 'Park-wide' },
                    { id: 'SP-04', description: 'Increase frequency of water quality tests during peak summer heat.', priority: 'High', riskLevel: 'High', proof: 'Water Quality Schedule', location: 'Water Park' },
                    { id: 'SP-05', description: 'Ensure all indoor areas have adequate cooling and ventilation for summer.', priority: 'High', riskLevel: 'Medium', proof: 'HVAC Test Report', location: 'Buildings' },
                ]
            }
        ]
    },
    {
        id: 'fitness_centers_gyms_pack',
        title: "Fitness Centers & Gyms Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Wellness & Beauty",
        description: "A comprehensive safety and operational pack for gyms and fitness centers to ensure member safety, equipment reliability, and a premium experience.",
        icon: <Dumbbell />,
        whoIsItFor: ["Gym Owners", "Fitness Center Managers", "Personal Training Directors", "Heads of Operations"],
        sampleItems: [
            { text: "Equipment inspection & PM.", icon: <Wrench /> },
            { text: "Member onboarding & health risk assessment.", icon: <UserCheck /> },
            { text: "Hygiene & locker room cleaning.", icon: <Sparkles /> },
            { text: "Trainer certification & conduct.", icon: <Trophy /> },
            { text: "Emergency & AED readiness.", icon: <HeartPulse /> },
        ],
        globalStandards: {
            title: "Aligned with Fitness Industry Safety Standards",
            standards: [
                { name: "OSHA Guidance", description: "Follows guidelines for facility and equipment safety." },
                { name: 'ISO 45001', description: "Framework for occupational health and safety management." },
                { name: "Local Health Codes", description: "Ensures compliance with local regulations for hygiene and sanitation." },
                { name: "Consumer Protection", description: "Best practices for member agreements and service delivery." }
            ]
        },
        checklists: [
            {
                title: "Pre-Opening Gym Equipment Checklist",
                department: "Operations",
                frequency: "Daily",
                role: "Gym Manager",
                icon: <Wrench />,
                summary: "Belts, cables, emergency stop, lubrication, treadmill belt alignment; tag out and lock for any faulty machine.",
                tasks: [
                    { id: 'GYM-EQUIP-01', description: 'Inspect treadmill belts for alignment and wear.', priority: 'High', riskLevel: 'High', proof: 'Equipment Log', location: 'Cardio Area' },
                    { id: 'GYM-EQUIP-02', description: 'Check all strength machine cables and pulleys for fraying.', priority: 'High', riskLevel: 'High', proof: 'Equipment Log', location: 'Strength Area' },
                    { id: 'GYM-EQUIP-03', description: 'Test emergency stop buttons on all cardio equipment.', priority: 'High', riskLevel: 'High', proof: 'E-Stop Test Log', location: 'Cardio Area' },
                    { id: 'GYM-EQUIP-04', description: 'Tag out and lock any faulty machine, and log it for maintenance.', priority: 'High', riskLevel: 'High', proof: 'Tag Out Log', location: 'Gym Floor' },
                    { id: 'GYM-EQUIP-05', description: 'Wipe down and sanitize all equipment upholstery and handles.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Gym Floor' },
                ]
            },
            {
                title: "Member Health Screening & Waiver SOP",
                department: "Sales/Membership",
                frequency: "Per New Member",
                role: "Membership Advisor",
                icon: <UserCheck />,
                summary: "Pre-membership health questionnaire, documented restrictions, emergency contact info; special handling for minors.",
                tasks: [
                    { id: 'GYM-MEMBER-01', description: 'Complete a pre-membership health questionnaire (PAR-Q) for every new member.', priority: 'High', riskLevel: 'High', proof: 'Completed PAR-Q Form', location: 'Member File' },
                    { id: 'GYM-MEMBER-02', description: 'Have every member sign a liability waiver.', priority: 'High', riskLevel: 'High', proof: 'Signed Waiver', location: 'Member File' },
                    { id: 'GYM-MEMBER-03', description: 'Document any health restrictions and emergency contact information.', priority: 'High', riskLevel: 'High', proof: 'Member Record', location: 'System' },
                    { id: 'GYM-MEMBER-04', description: 'Obtain parental consent for all members who are minors.', priority: 'High', riskLevel: 'High', proof: 'Parental Consent Form', location: 'Member File' },
                    { id: 'GYM-MEMBER-05', description: 'Offer a basic fitness assessment and orientation to new members.', priority: 'Medium', riskLevel: 'Low', proof: 'Orientation Log', location: 'Gym Floor' },
                ]
            },
            {
                title: "Locker Room Sanitation Schedule",
                department: "Housekeeping",
                frequency: "Multiple times daily",
                role: "Housekeeping Staff",
                icon: <Sparkles />,
                summary: "Multiple daily cycles with supervisor sign-off, disinfectant concentration checks, humidity/ventilation check.",
                tasks: [
                    { id: 'GYM-HYGIENE-01', description: 'Clean and sanitize all surfaces (benches, lockers, showers) on a scheduled basis.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Locker Rooms' },
                    { id: 'GYM-HYGIENE-02', description: 'Supervisor to sign off on each cleaning cycle.', priority: 'High', riskLevel: 'Medium', proof: 'Supervisor Signature', location: 'Cleaning Log' },
                    { id: 'GYM-HYGIENE-03', description: 'Check and log disinfectant concentrations.', priority: 'High', riskLevel: 'Medium', proof: 'Concentration Log', location: 'Janitor Closet' },
                    { id: 'GYM-HYGIENE-04', description: 'Verify ventilation system is working to control humidity.', priority: 'High', riskLevel: 'Medium', proof: 'Ventilation Check', location: 'Locker Rooms' },
                    { id: 'GYM-HYGIENE-05', description: 'Restock all supplies like soap, towels, and sanitizer.', priority: 'High', riskLevel: 'Low', proof: 'Restock Log', location: 'Locker Rooms' },
                ]
            },
            {
                title: "Trainer Credentialing",
                department: "HR/Fitness",
                frequency: "Per Hire",
                role: "Fitness Director",
                icon: <Trophy />,
                summary: "Verify certificates, first-aid training, background checks, probation performance review.",
                tasks: [
                    { id: 'GYM-TRAINER-01', description: 'Verify all personal training certifications are current.', priority: 'High', riskLevel: 'High', proof: 'Certificate Copies', location: 'Trainer File' },
                    { id: 'GYM-TRAINER-02', description: 'Ensure all trainers have valid CPR and First Aid certification.', priority: 'High', riskLevel: 'High', proof: 'First Aid Certificate', location: 'Trainer File' },
                    { id: 'GYM-TRAINER-03', description: 'Conduct background checks for all new trainers.', priority: 'High', riskLevel: 'High', proof: 'Background Check Report', location: 'Trainer File' },
                    { id: 'GYM-TRAINER-04', description: 'Perform a performance review at the end of the probationary period.', priority: 'High', riskLevel: 'Medium', proof: 'Probation Review Form', location: 'Trainer File' },
                    { id: 'GYM-TRAINER-05', description: 'Conduct regular in-house training on new techniques and safety.', priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'Office' },
                ]
            },
            {
                title: "Defibrillator & First Aid Checks",
                department: "Safety",
                frequency: "Monthly",
                role: "Safety Officer",
                icon: <HeartPulse />,
                summary: "AED monthly check, first-aid kit inventory, staff trained in CPR on each shift.",
                tasks: [
                    { id: 'GYM-AED-01', description: 'Perform a monthly check of the Automated External Defibrillator (AED), including battery and pad expiry.', priority: 'High', riskLevel: 'High', proof: 'AED Check Log', location: 'AED Location' },
                    { id: 'GYM-AED-02', description: 'Check and restock all first-aid kits monthly.', priority: 'High', riskLevel: 'High', proof: 'First-Aid Kit Inventory', location: 'First-Aid Stations' },
                    { id: 'GYM-AED-03', description: 'Ensure at least one staff member trained in CPR is present on every shift.', priority: 'High', riskLevel: 'High', proof: 'Staff Roster vs. Training Records', location: 'Office' },
                    { id: 'GYM-AED-04', description: 'Post clear emergency contact numbers and procedures.', priority: 'High', riskLevel: 'High', proof: 'Photo of Signage', location: 'Various' },
                    { id: 'GYM-AED-05', description: 'Conduct a mock medical emergency drill quarterly.', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Office' },
                ]
            },
            {
                title: "Personal Training Session Log",
                department: "Fitness",
                frequency: "Per Session",
                role: "Personal Trainer",
                icon: <ClipboardList />,
                summary: "A log to document each personal training session, tracking progress and ensuring consistency.",
                tasks: [
                    { id: 'PTSL-01', description: 'Log the date, time, and duration of the session.', priority: 'High', riskLevel: 'Medium', proof: 'Session Log', location: 'System/Logbook' },
                    { id: 'PTSL-02', description: 'Document the exercises performed, including sets, reps, and weights.', priority: 'High', riskLevel: 'Medium', proof: 'Session Log', location: 'System/Logbook' },
                    { id: 'PTSL-03', description: 'Note any client feedback or issues.', priority: 'High', riskLevel: 'Medium', proof: 'Session Log', location: 'System/Logbook' },
                    { id: 'PTSL-04', description: 'Plan the next session and set goals with the client.', priority: 'Medium', riskLevel: 'Low', proof: 'Session Log', location: 'System/Logbook' },
                    { id: 'PTSL-05', description: 'Get client signature to confirm the session was completed.', priority: 'High', riskLevel: 'High', proof: 'Signed Log', location: 'System/Logbook' },
                ]
            },
            {
                title: "Membership Sales & Renewals",
                department: "Sales",
                frequency: "Ongoing",
                role: "Membership Advisor",
                icon: <DollarSign />,
                summary: "A process for managing membership sales, renewals, and cancellations.",
                tasks: [
                    { id: 'MSR-01', description: 'Follow a standard script for sales presentations.', priority: 'High', riskLevel: 'Medium', proof: 'Sales Script', location: 'Sales Desk' },
                    { id: 'MSR-02', description: 'Process new membership agreements and payments accurately.', priority: 'High', riskLevel: 'High', proof: 'Signed Agreement', location: 'Member File' },
                    { id: 'MSR-03', description: 'Follow up with members before their renewal date.', priority: 'High', riskLevel: 'Medium', proof: 'CRM Log', location: 'System' },
                    { id: 'MSR-04', description: 'Handle membership cancellations according to company policy.', priority: 'High', riskLevel: 'High', proof: 'Cancellation Form', location: 'Office' },
                    { id: 'MSR-05', description: 'Track sales targets and conversion rates.', priority: 'High', riskLevel: 'Medium', proof: 'Sales Dashboard', location: 'System' },
                ]
            },
            {
                title: "Pool & Spa Safety (if applicable)",
                department: "Aquatics",
                frequency: "Daily",
                role: "Pool Supervisor",
                icon: <Waves />,
                summary: "Daily checks for water quality, safety equipment, and hygiene in pool and spa areas.",
                tasks: [
                    { id: 'PSS-01', description: 'Test and log water pH and chlorine levels.', priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'PSS-02', description: 'Check all safety equipment (life rings, first aid kits).', priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Log', location: 'Poolside' },
                    { id: 'PSS-03', description: 'Ensure pool deck is clean and free of slip hazards.', priority: 'High', riskLevel: 'High', proof: 'Deck Inspection Log', location: 'Pool Deck' },
                    { id: 'PSS-04', description: 'Verify lifeguard is on duty during peak hours.', priority: 'High', riskLevel: 'High', proof: 'Lifeguard Roster', location: 'Poolside' },
                    { id: 'PSS-05', description: 'Inspect sauna and steam rooms for correct temperature and cleanliness.', priority: 'High', riskLevel: 'Medium', proof: 'Spa Inspection Log', location: 'Spa Area' },
                ]
            },
            {
                title: "Guest & Member Feedback",
                department: "Management",
                frequency: "Weekly",
                role: "Gym Manager",
                icon: <Megaphone />,
                summary: "A system for collecting, analyzing, and acting on member feedback to improve services.",
                tasks: [
                    { id: 'GMF-01', description: 'Review all feedback from suggestion boxes, surveys, and online reviews.', priority: 'High', riskLevel: 'Medium', proof: 'Feedback Summary Report', location: 'Office' },
                    { id: 'GMF-02', description: 'Log all feedback and assign action items for resolution.', priority: 'High', riskLevel: 'Medium', proof: 'Action Tracker', location: 'System' },
                    { id: 'GMF-03', description: 'Follow up with members who provided negative feedback.', priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'CRM' },
                    { id: 'GMF-04', description: 'Analyze feedback trends to identify systemic issues.', priority: 'High', riskLevel: 'High', proof: 'Trend Analysis Report', location: 'Office' },
                    { id: 'GMF-05', description: 'Share key feedback points with staff during weekly meetings.', priority: 'Medium', riskLevel: 'Low', proof: 'Meeting Minutes', location: 'Office' },
                ]
            },
            {
                title: "Security & Access Control",
                department: "Security",
                frequency: "Daily",
                role: "Security Staff",
                icon: <Shield />,
                summary: "Procedures to control access to the gym and protect member belongings.",
                tasks: [
                    { id: 'SAC-01', description: 'Check membership status of everyone entering the facility.', priority: 'High', riskLevel: 'High', proof: 'Access Control System Log', location: 'Entrance' },
                    { id: 'SAC-02', description: 'Monitor CCTV cameras for any suspicious activity.', priority: 'High', riskLevel: 'High', proof: 'CCTV Log', location: 'Security Office' },
                    { id: 'SAC-03', description: 'Perform regular patrols of the locker rooms and other areas.', priority: 'High', riskLevel: 'Medium', proof: 'Patrol Log', location: 'Facility-wide' },
                    { id: 'SAC-04', description: 'Ensure all lockers are functional and report any broken ones.', priority: 'Medium', riskLevel: 'Medium', proof: 'Locker Inspection Log', location: 'Locker Rooms' },
                    { id: 'SAC-05', description: 'Manage a lost and found system for member belongings.', priority: 'High', riskLevel: 'Low', proof: 'Lost and Found Log', location: 'Reception' },
                ]
            }
        ]
    },
    {
        id: 'sports_clubs_stadium_operations_pack',
        title: "Sports Clubs & Stadium Operations Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "An advanced compliance and operations suite for gyms, sports academies, and stadiums, focusing on athlete safety, crowd control, EHS, and facility compliance.",
        icon: <Trophy />,
        bestseller: true,
        whoIsItFor: ["Sports Facility Managers", "Club Owners", "Stadium Operations Heads", "Safety Officers"],
        sampleItems: [
            { text: "Crowd Control & Emergency Evacuation readiness.", icon: <Users /> },
            { text: "Gym & Equipment Safety checklist to prevent accidents.", icon: <Dumbbell /> },
            { text: "Sports Field & Turf Maintenance for optimal playing conditions.", icon: <Sprout /> },
            { text: "Swimming Pool Hygiene & Safety to meet health standards.", icon: <Waves /> },
            { text: "Digital Ticketing & Entry Validation for secure events.", icon: <Ticket /> },
        ],
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
        globalStandards: {
            title: "Aligned with Global Safety Standards",
            standards: [
                { name: "Occupational Safety (OSHA)", description: "Ensures workplace safety and accident prevention." },
                { name: "Fire & Life Safety (NFPA)", description: "Adheres to fire prevention and emergency evacuation codes." },
                { name: "Water Quality (WHO)", description: "Follows World Health Organization guidelines for swimming pool safety." },
                { name: "Quality Management (ISO 9001)", description: "Implements processes for consistent service and operational quality." }
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
                title: "Gym & Equipment Safety",
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
            {
                title: "Sports Field & Turf Maintenance",
                department: "Groundskeeping",
                frequency: "Daily/Weekly",
                role: "Head Groundskeeper",
                icon: <Sprout />,
                summary: "Maintain pristine and safe playing surfaces with this checklist for turf, pitch, and court maintenance.",
                tasks: [
                    { id: 'FIELD-01', description: "Inspect playing surface for hazards (holes, debris).", priority: 'High', riskLevel: 'High', proof: 'Field Inspection Log', location: 'Field/Court' },
                    { id: 'FIELD-02', description: "Check irrigation system for proper function.", priority: 'High', riskLevel: 'Medium', proof: 'Irrigation System Check', location: 'Field' },
                    { id: 'FIELD-03', description: "Mow and line-mark the field as per schedule.", priority: 'High', riskLevel: 'Low', proof: 'Groundskeeping Log', location: 'Field' },
                    { id: 'FIELD-04', description: "Inspect goalposts, nets, and other field equipment for safety.", priority: 'High', riskLevel: 'High', proof: 'Equipment Safety Check', location: 'Field/Court' },
                    { id: 'FIELD-05', description: "Manage pest and weed control schedule.", priority: 'Medium', riskLevel: 'Medium', proof: 'Pest Control Log', location: 'Grounds Office' },
                ]
            },
            {
                title: "Digital Ticketing & Entry Validation",
                department: "Ticketing/IT",
                frequency: "Per Event",
                role: "Ticketing Manager",
                icon: <Ticket />,
                summary: "A modern checklist to manage digital tickets, prevent fraud, and ensure smooth entry for thousands of fans.",
                tasks: [
                    { id: 'TICKET-01', description: "Test all ticket scanners and POS systems before gates open.", priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'Entrances' },
                    { id: 'TICKET-02', description: "Reconcile ticket sales with issued tickets.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Ticketing Office' },
                    { id: 'TICKET-03', description: "Train staff on handling fraudulent or duplicate tickets.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Office' },
                    { id: 'TICKET-04', description: "Monitor entry flow and scanner performance in real-time.", priority: 'High', riskLevel: 'Medium', proof: 'Live Dashboard', location: 'Control Room' },
                    { id: 'TICKET-05', description: "Have a clear process for resolving customer ticketing issues on-site.", priority: 'High', riskLevel: 'High', proof: 'Issue Resolution Protocol', location: 'Box Office' },
                ]
            },
            {
                title: "Vendor & Contractor EHS Audit",
                department: "Safety/EHS",
                frequency: "Per Vendor",
                role: "Safety Officer",
                icon: <HardHat />,
                summary: "Ensure that all third-party vendors and contractors working on your premises comply with your safety standards.",
                tasks: [
                    { id: 'VENDOR-EHS-01', description: "Verify vendor's insurance and safety certifications.", priority: 'High', riskLevel: 'High', proof: 'Vendor File', location: 'Office' },
                    { id: 'VENDOR-EHS-02', description: "Conduct a safety induction for all contractor staff.", priority: 'High', riskLevel: 'High', proof: 'Induction Log', location: 'Site Office' },
                    { id: 'VENDOR-EHS-03', description: "Issue work permits for high-risk activities (e.g., hot work, working at height).", priority: 'High', riskLevel: 'High', proof: 'Work Permit System', location: 'Site Office' },
                    { id: 'VENDOR-EHS-04', description: "Inspect contractor work areas for compliance with safety rules.", priority: 'High', riskLevel: 'High', proof: 'Site Inspection Report', location: 'Work Area' },
                    { id: 'VENDOR-EHS-05', description: "Hold a close-out meeting to ensure the work area is left safe and clean.", priority: 'High', riskLevel: 'Medium', proof: 'Close-out Form', location: 'Site Office' },
                ]
            },
            {
                title: "Medical & Emergency Response",
                department: "Health & Safety",
                frequency: "Per Event/Daily",
                role: "Chief Medical Officer",
                icon: <Ambulance />,
                summary: "A plan to ensure immediate and effective medical response for both athletes and spectators.",
                tasks: [
                    { id: 'MED-RESP-01', description: "Ensure first aid stations are stocked and staffed by certified personnel.", priority: 'High', riskLevel: 'High', proof: 'First Aid Station Log', location: 'Venue' },
                    { id: 'MED-RESP-02', description: "Have a dedicated ambulance on standby for major events.", priority: 'High', riskLevel: 'High', proof: 'Ambulance Contract', location: 'Office' },
                    { id: 'MED-RESP-03', description: "Check all AEDs (defibrillators) are functional and accessible.", priority: 'High', riskLevel: 'High', proof: 'AED Check Log', location: 'Venue' },
                    { id: 'MED-RESP-04', description: "Maintain a clear communication protocol for medical emergencies.", priority: 'High', riskLevel: 'High', proof: 'Emergency Protocol', location: 'Control Room' },
                    { id: 'MED-RESP-05', description: "Log all medical incidents and the response provided.", priority: 'High', riskLevel: 'High', proof: 'Medical Incident Log', location: 'First Aid Station' },
                ]
            },
            {
                title: "Facility Maintenance & Seasonal Prep",
                department: "Facilities",
                frequency: "Weekly/Seasonal",
                role: "Facilities Manager",
                icon: <Wrench />,
                summary: "Proactive maintenance to keep the facility in top condition and prepare for seasonal challenges.",
                tasks: [
                    { id: 'FAC-MAINT-01', description: "Inspect HVAC and electrical systems weekly.", priority: 'High', riskLevel: 'Medium', proof: 'MEP Log', location: 'Plant Rooms' },
                    { id: 'FAC-MAINT-02', description: "Check all plumbing and sanitation systems.", priority: 'High', riskLevel: 'Medium', proof: 'Plumbing Log', location: 'Venue' },
                    { id: 'FAC-MAINT-03', description: "Inspect the building structure, roof, and facade quarterly.", priority: 'High', riskLevel: 'High', proof: 'Structural Report', location: 'Office' },
                    { id: 'FAC-MAINT-04', description: "Prepare for monsoon season by checking drainage and waterproofing.", priority: 'High', riskLevel: 'High', proof: 'Monsoon Prep Checklist', location: 'Venue' },
                    { id: 'FAC-MAINT-05', description: "Manage the preventive maintenance schedule for all key assets.", priority: 'High', riskLevel: 'High', proof: 'PM Schedule', location: 'System' },
                ]
            },
            {
                title: "POSH & Ethical Conduct SOP",
                department: "HR/Compliance",
                frequency: "Ongoing",
                role: "POSH Committee Head",
                icon: <ShieldCheck />,
                summary: "Establish a robust framework for preventing and addressing harassment, ensuring a safe and respectful environment for all athletes and staff.",
                tasks: [
                    { id: 'POSH-01', description: "Form and document the Internal Complaints Committee (ICC) as per the POSH Act.", priority: 'High', riskLevel: 'High', proof: 'ICC Formation Order', location: 'HR Office' },
                    { id: 'POSH-02', description: "Conduct mandatory POSH awareness and sensitization training for all staff, coaches, and athletes annually.", priority: 'High', riskLevel: 'High', proof: 'Training Attendance Records', location: 'HR Office' },
                    { id: 'POSH-03', description: "Display posters and notices about the POSH policy and ICC members in prominent locations.", priority: 'High', riskLevel: 'Medium', proof: 'Photographs of Displays', location: 'Venue' },
                    { id: 'POSH-04', description: "Establish a confidential and accessible complaint lodging mechanism (email, physical box, designated person).", priority: 'High', riskLevel: 'High', proof: 'Policy Document', location: 'HR/Website' },
                    { id: 'POSH-05', description: "Review and act upon any complaint received within the timelines prescribed by the POSH Act.", priority: 'High', riskLevel: 'High', proof: 'Complaint Register & Action Taken Report', location: 'ICC Files' },
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
        paymentId: '',
        category: "Social Cause",
        description: "A complete (and free) operational toolkit for animal shelters and NGOs to ensure animal welfare, hygiene, and effective adoption programs.",
        icon: <PawPrint />,
        badgeText: "Free Resource",
        badgeVariant: "accent",
        whoIsItFor: ["Shelter Managers", "NGO Founders", "Animal Welfare Officers", "Volunteers"],
        sampleItems: [
            { text: "Animal intake & quarantine.", icon: <Home /> },
            { text: "Vaccination & medical records.", icon: <HeartPulse /> },
            { text: "Sanitation & disease control.", icon: <Sparkles /> },
            { text: "Volunteer & staff safety.", icon: <Users /> },
            { text: "Adoption & transport procedures.", icon: <Truck /> },
        ],
        globalStandards: {
            title: "Aligned with Animal Welfare Best Practices",
            standards: [
                { name: "AWBI Advisories", description: "Guidelines from the Animal Welfare Board of India." },
                { name: "PCA Act", description: "Compliance with the Prevention of Cruelty to Animals Act." },
                { name: "OIE Standards", description: "References for animal health from the World Organisation for Animal Health." },
                { name: "Local Vet Regulations", description: "Adherence to local veterinary and health codes." }
            ]
        },
        checklists: [
            {
                title: "Intake & Quarantine SOP",
                department: "Animal Care",
                frequency: "Per Animal",
                role: "Intake Coordinator",
                icon: <Home />,
                summary: "Check for microchip, health check, quarantine for 7–14 days depending on species/condition, basic deworming and vaccination schedule.",
                tasks: [
                    { id: 'AS-INTAKE-01', description: "Scan new animal for a microchip.", priority: 'High', riskLevel: 'Medium', proof: 'Scan Log', location: 'Intake Room' },
                    { id: 'AS-INTAKE-02', description: "Perform a basic health check (check for wounds, parasites, etc.).", priority: 'High', riskLevel: 'High', proof: 'Health Check Form', location: 'Intake Room' },
                    { id: 'AS-INTAKE-03', description: "Place animal in quarantine for the specified period.", priority: 'High', riskLevel: 'High', proof: 'Quarantine Log', location: 'Quarantine Area' },
                    { id: 'AS-INTAKE-04', description: "Administer initial deworming and vaccinations as per vet protocol.", priority: 'High', riskLevel: 'High', proof: 'Medical Record', location: 'Intake Room' },
                    { id: 'AS-INTAKE-05', description: 'Create a unique ID and record for the animal in the shelter management system.', priority: 'High', riskLevel: 'High', proof: 'System Entry', location: 'Office' },
                ]
            },
            {
                title: "Vaccination & Medical Log",
                department: "Medical",
                frequency: "Ongoing",
                role: "Vet/Nurse",
                icon: <HeartPulse />,
                summary: "Vaccine type, batch, vet signature, booster reminders.",
                tasks: [
                    { id: 'AS-MED-01', description: "Log the vaccine type, batch number, and date for every vaccination.", priority: 'High', riskLevel: 'High', proof: 'Vaccination Record', location: 'Medical File' },
                    { id: 'AS-MED-02', description: "Ensure a veterinarian signs off on all medical treatments.", priority: 'High', riskLevel: 'High', proof: 'Vet Signature', location: 'Medical File' },
                    { id: 'AS-MED-03', description: "Set reminders for all upcoming booster shots.", priority: 'High', riskLevel: 'Medium', proof: 'Calendar/System Reminder', location: 'System' },
                    { id: 'AS-MED-04', description: 'Administer regular parasite control (fleas, ticks, worms).', priority: 'High', riskLevel: 'High', proof: 'Treatment Log', location: 'Medical File' },
                    { id: 'AS-MED-05', description: 'Maintain a detailed medical history for each animal.', priority: 'High', riskLevel: 'High', proof: 'Medical Chart', location: 'Medical File' },
                ]
            },
            {
                title: "Daily Sanitation Checklist",
                department: "Hygiene",
                frequency: "Daily",
                role: "Kennel Staff",
                icon: <Sparkles />,
                summary: "Kennel cleaning, bedding change schedule, disinfectant contact times, pest control vendor logs.",
                tasks: [
                    { id: 'AS-SANIT-01', description: "Clean and disinfect all kennels and enclosures daily.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kennels' },
                    { id: 'AS-SANIT-02', description: "Change and launder all animal bedding daily.", priority: 'High', riskLevel: 'Medium', proof: 'Laundry Log', location: 'Laundry' },
                    { id: 'AS-SANIT-03', description: "Ensure correct disinfectant contact times are followed.", priority: 'High', riskLevel: 'High', proof: 'Supervisor Check', location: 'Kennels' },
                    { id: 'AS-SANIT-04', description: "Review monthly pest control logs.", priority: 'High', riskLevel: 'Medium', proof: 'Pest Control Report', location: 'Office' },
                    { id: 'AS-SANIT-05', description: 'Ensure proper ventilation in all animal housing areas.', priority: 'High', riskLevel: 'High', proof: 'Ventilation System Check', location: 'Kennels' },
                ]
            },
            {
                title: "Volunteer Safety & Handling SOP",
                department: "Volunteers",
                frequency: "Per Volunteer",
                role: "Volunteer Coordinator",
                icon: <Users />,
                summary: "Animal handling training, bite prevention, PPE, incident reporting.",
                tasks: [
                    { id: 'AS-VOL-01', description: "Provide mandatory animal handling and safety training to all new volunteers.", priority: 'High', riskLevel: 'High', proof: 'Training Acknowledgement', location: 'Training Room' },
                    { id: 'AS-VOL-02', description: "Instruct on bite prevention techniques and reading animal body language.", priority: 'High', riskLevel: 'High', proof: 'Training Module', location: 'Training Room' },
                    { id: 'AS-VOL-03', description: "Ensure volunteers use appropriate PPE (gloves, boots).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kennels' },
                    { id: 'AS-VOL-04', description: "Have a clear process for reporting any bites or scratches.", priority: 'High', riskLevel: 'High', proof: 'Incident Report Form', location: 'Office' },
                    { id: 'AS-VOL-05', description: 'Match volunteers with animals appropriate for their skill level.', priority: 'High', riskLevel: 'High', proof: 'Assignment Log', location: 'Office' },
                ]
            },
            {
                title: "Adoption Verification & Transport SOP",
                department: "Adoptions",
                frequency: "Per Adoption",
                role: "Adoption Counselor",
                icon: <Truck />,
                summary: "ID verification of adopter, home-check process (if applicable), secure transport crates and health certificate.",
                tasks: [
                    { id: 'AS-ADOPT-01', description: "Verify the adopter's government-issued ID and address proof.", priority: 'High', riskLevel: 'High', proof: 'ID Copies', location: 'Adoption File' },
                    { id: 'AS-ADOPT-02', description: "Conduct and document a home check for first-time adopters.", priority: 'High', riskLevel: 'High', proof: 'Home Check Report', location: 'Adoption File' },
                    { id: 'AS-ADOPT-03', description: "Use secure and appropriately sized transport crates for the animal.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Transport Vehicle' },
                    { id: 'AS-ADOPT-04', description: "Provide the adopter with the animal's health and vaccination certificate.", priority: 'High', riskLevel: 'Medium', proof: 'Document Handover Log', location: 'Office' },
                    { id: 'AS-ADOPT-05', description: 'Have the adopter sign the adoption agreement.', priority: 'High', riskLevel: 'High', proof: 'Signed Agreement', location: 'Adoption File' },
                ]
            },
            {
                title: "Daily Feeding & Nutrition",
                department: "Animal Care",
                frequency: "Daily",
                role: "Kennel Staff",
                icon: <Utensils />,
                summary: "Ensures all animals receive the correct food and fresh water according to their needs.",
                tasks: [
                    { id: 'AS-FEED-01', description: "Follow the feeding schedule for each animal.", priority: 'High', riskLevel: 'High', proof: 'Feeding Chart', location: 'Kennels' },
                    { id: 'AS-FEED-02', description: "Provide special diets to animals with specific medical needs.", priority: 'High', riskLevel: 'High', proof: 'Special Diet Log', location: 'Kitchen' },
                    { id: 'AS-FEED-03', description: "Ensure fresh, clean water is available to all animals at all times.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Kennels' },
                    { id: 'AS-FEED-04', description: "Clean all food and water bowls daily.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'AS-FEED-05', description: "Monitor food intake and report any animals not eating.", priority: 'High', riskLevel: 'High', proof: 'Feeding Log', location: 'Kennels' },
                ]
            },
            {
                title: "Behavioral & Enrichment Program",
                department: "Animal Care",
                frequency: "Daily",
                role: "Enrichment Coordinator",
                icon: <Rabbit />,
                summary: "Provides mental and physical stimulation to improve animal well-being and adoptability.",
                tasks: [
                    { id: 'AS-BEHAV-01', description: 'Provide daily exercise and playtime for all dogs.', priority: 'High', riskLevel: 'Medium', proof: 'Exercise Log', location: 'Play Area' },
                    { id: 'AS-BEHAV-02', description: 'Offer enrichment toys and activities to all animals.', priority: 'High', riskLevel: 'Medium', proof: 'Enrichment Log', location: 'Kennels' },
                    { id: 'AS-BEHAV-03', description: 'Socialize animals with other animals and humans where appropriate.', priority: 'High', riskLevel: 'High', proof: 'Socialization Log', location: 'Play Area' },
                    { id: 'AS-BEHAV-04', description: 'Identify and work on behavioral issues with a trainer.', priority: 'High', riskLevel: 'High', proof: 'Training Plan', location: 'Training Area' },
                    { id: 'AS-BEHAV-05', description: 'Document behavioral assessments and progress.', priority: 'High', riskLevel: 'High', proof: 'Behavioral Notes', location: 'Animal File' },
                ]
            },
            {
                title: "Donation & Inventory Management",
                department: "Admin/Finance",
                frequency: "Weekly",
                role: "Admin Manager",
                icon: <DollarSign />,
                summary: "A system for tracking monetary and in-kind donations and managing shelter inventory.",
                tasks: [
                    { id: 'AS-DON-01', description: 'Log all monetary donations and issue receipts.', priority: 'High', riskLevel: 'High', proof: 'Donation Log', location: 'Office' },
                    { id: 'AS-DON-02', description: 'Inventory and log all in-kind donations (food, blankets, etc.).', priority: 'High', riskLevel: 'Medium', proof: 'In-Kind Donation Log', location: 'Storage' },
                    { id: 'AS-DON-03', description: 'Track inventory levels of food, medicine, and other supplies.', priority: 'High', riskLevel: 'High', proof: 'Inventory System', location: 'System' },
                    { id: 'AS-DON-04', description: 'Place orders for supplies when they reach reorder levels.', priority: 'High', riskLevel: 'Medium', proof: 'Purchase Orders', location: 'Office' },
                    { id: 'AS-DON-05', description: 'Reconcile donation records with bank statements monthly.', priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Office' },
                ]
            },
            {
                title: "Foster Care Program",
                department: "Adoptions",
                frequency: "Per Foster Case",
                role: "Foster Coordinator",
                icon: <Home />,
                summary: "A program to place animals in temporary homes, increasing their chances of adoption.",
                tasks: [
                    { id: 'AS-FOSTER-01', description: 'Screen and approve all foster parent applications.', priority: 'High', riskLevel: 'High', proof: 'Foster Application', location: 'Office' },
                    { id: 'AS-FOSTER-02', description: 'Provide foster parents with all necessary supplies and instructions.', priority: 'High', riskLevel: 'Medium', proof: 'Supply Checklist', location: 'Office' },
                    { id: 'AS-FOSTER-03', description: 'Conduct regular check-ins with foster parents.', priority: 'High', riskLevel: 'Medium', proof: 'Check-in Log', location: 'System' },
                    { id: 'AS-FOSTER-04', description: 'Manage the medical care of animals in foster homes.', priority: 'High', riskLevel: 'High', proof: 'Medical Records', location: 'System' },
                    { id: 'AS-FOSTER-05', description: 'Coordinate the return of foster animals to the shelter for adoption events.', priority: 'High', riskLevel: 'Medium', proof: 'Transport Log', location: 'Office' },
                ]
            },
            {
                title: "Emergency & Disaster Plan",
                department: "Management/Safety",
                frequency: "Annually",
                role: "Shelter Director",
                icon: <Siren />,
                summary: "A plan to ensure the safety of all animals and staff during emergencies like fires, floods, or disease outbreaks.",
                tasks: [
                    { id: 'AS-EDP-01', description: 'Develop and review the emergency evacuation plan annually.', priority: 'High', riskLevel: 'High', proof: 'Evacuation Plan', location: 'Office' },
                    { id: 'AS-EDP-02', description: 'Maintain an emergency contact list for all staff and volunteers.', priority: 'High', riskLevel: 'High', proof: 'Contact List', location: 'Office' },
                    { id: 'AS-EDP-03', description: 'Have transport crates and emergency supplies ready.', priority: 'High', riskLevel: 'High', proof: 'Emergency Kit Checklist', location: 'Storage' },
                    { id: 'AS-EDP-04', description: 'Conduct an annual emergency drill.', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Office' },
                    { id: 'AS-EDP-05', description: 'Establish a temporary shelter location in case of evacuation.', priority: 'High', riskLevel: 'High', proof: 'MoU with temp shelter', location: 'Office' },
                ]
            }
        ]
    }
];

    

    
