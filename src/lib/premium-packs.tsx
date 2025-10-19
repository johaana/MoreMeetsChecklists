
import React from "react";
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket, Wifi, UserCheck, BarChart3, Link, BrainCircuit, Bot, Syringe, DatabaseZap, Megaphone, Siren, Lock, KeyRound, Users, Banknote, Webcam, Bug, UserCog, PackageCheck, Ambulance, FileWarning, Milestone, DoorClosed, CircleDollarSign, Wind, Thermometer, UserCog2, Key, Router, Package, Watch, Drama, Barcode, Stethoscope, SyringeIcon, HeartPulse, Microscope, Bus, BookOpen, Car, Drill, SprayCan, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, Mask, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask, Store, Pill, Ship, Sun, Film, AnchorIcon, Clapperboard, MonitorPlay, Tv, Library, BriefcaseBusiness, ShieldCheck, Handshake, Route, CalendarDays, ClipboardList, HelpingHand, Map, DramaIcon, UserRound, Sparkles, Scale, Code, Video, Zap } from "lucide-react";

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
                    { id: 'ALLERGEN-04', description: "Obtain written acknowledgement from guest for complex special orders.", priority: 'Medium', riskLevel: 'Medium', proof: 'Signed Order Slip', location: 'POS' },
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
            { text: "Third-party risk management.", icon: <Handshake /> },
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
                    { id: 'PHARM-CS-03', description: "Report any discrepancies to management immediately.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Office' },
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
                    { id: 'SCH-HR-03', description: "Provide mandatory child-protection policy training during induction.", priority: 'High', riskLevel: 'High', proof: 'Training Acknowledgement Form', location: 'Employee File' },
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
                    {id: 'ULAB-01', description: 'Ensure Material Safety Data Sheets (MSDS) are available for all chemicals.', priority: 'High', riskLevel: 'High', proof: 'MSDS Registry', location: 'Lab'},
                    {id: 'ULAB-02', description: 'Verify all chemicals are correctly labeled and stored.', priority: 'High', riskLevel: 'High', proof: 'Chemical Storage Audit', location: 'Lab'},
                    {id: 'ULAB-03', description: 'Check that appropriate PPE is being used by all lab personnel.', priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Lab'},
                    {id: 'ULAB-04', description: 'Inspect fume hoods for proper airflow and certification.', priority: 'High', riskLevel: 'High', proof: 'Fume Hood Log', location: 'Lab'},
                    {id: 'ULAB-05', description: 'Manage chemical waste segregation and disposal records.', priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Lab'},
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
                    { id: 'LOG-STORE-04', description: 'Check that loads are stable and properly distributed on pallets.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Staging Area' },
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
                    { id: 'LOG-DISP-03', description: 'Confirm driver has completed their pre-trip vehicle inspection.', priority: 'High', riskLevel: 'Medium', proof: 'Driver\'s Log', location: 'Loading Bay' },
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
                { name: "ISO 45001", description: "Framework for occupational health and safety management." },
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
                    { id: 'GYM-EQUIP-02', description: 'Check all strength machine cables and belts for fraying.', priority: 'High', riskLevel: 'High', proof: 'Equipment Log', location: 'Strength Area' },
                    { id: 'GYM-EQUIP-03', description: 'Test emergency stop buttons on all cardio equipment.', priority: 'High', riskLevel: 'High', proof: 'E-Stop Test Log', location: 'Cardio Area' },
                    { id: 'GYM-EQUIP-04', description: 'Tag out and lock any faulty machine, and log it for maintenance.', priority: 'High', riskLevel: 'High', proof: 'Tag Out Log', location: 'Gym Floor' },
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
                ]
            }
        ]
    }
];
