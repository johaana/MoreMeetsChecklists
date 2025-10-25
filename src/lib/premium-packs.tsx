
import React from "react";
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket, Wifi, UserCheck, BarChart3, Link, BrainCircuit, Bot, Syringe, DatabaseZap, Megaphone, Siren, Lock, KeyRound, Users, Banknote, Webcam, Bug, UserCog, PackageCheck, Ambulance, FileWarning, Milestone, DoorClosed, CircleDollarSign, Wind, Thermometer, UserCog2, Key, Router, Package, Watch, Drama, Barcode, Stethoscope, SyringeIcon, HeartPulse, Microscope, Bus, BookOpen, Car, Drill, SprayCan, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask, Store, Pill, Ship, Sun, Film, AnchorIcon, Clapperboard, MonitorPlay, Tv, Library, BriefcaseBusiness, ShieldCheck, Handshake, Route, CalendarDays, ClipboardList, HelpingHand, Map, DramaIcon, UserRound, Sparkles, Scale, Code, Video, Zap, ScanFace, HandPlatter, Cog, Scissors, Eye, Fish, Cloud, Theater, Search } from "lucide-react";

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
        consequence?: string;
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
    listId?: number; // Brevo List ID
    category: "Hospitality" | "Corporate & Tech" | "Retail" | "Healthcare" | "Education" | "Industrial & Transport" | "Entertainment & Events" | "Social Cause" | "Real Estate" | "Compliance" | "Wellness & Beauty" | "Agriculture" | "Specialized Production" | "Free Resources";
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
    {
        id: 'business-safety-essentials-kit',
        title: "Business Safety Essentials Kit",
        priceUSD: 0,
        priceINR: 0,
        paymentId: '',
        listId: 6,
        category: "Free Resources",
        description: "A free starter kit with 5 essential safety checklists that every business needs to ensure a safe and compliant workplace.",
        icon: <ShieldCheck />,
        badgeText: "Free Download",
        badgeVariant: "accent",
        whoIsItFor: ["Business Owners", "Office Managers", "HR Professionals", "Facility Managers"],
        sampleItems: [
            { text: "Monthly fire safety audit to prevent hazards.", icon: <Siren /> },
            { text: "First-aid kit stocking and inspection log.", icon: <HeartPulse /> },
            { text: "General workplace hazard inspection checklist.", icon: <Search /> },
            { text: "Basic electrical safety checks for non-electricians.", icon: <Zap /> },
            { text: "Visitor & contractor sign-in protocol for security.", icon: <UserCheck /> },
        ],
        checklists: [
            {
                title: "Monthly Fire Safety Audit",
                department: "Safety",
                frequency: "Monthly",
                role: "Safety Officer",
                icon: <Siren />,
                summary: "A universal checklist to ensure your workplace is compliant with basic fire safety standards, covering extinguishers, exits, and alarms.",
                tasks: [
                    { id: 'FSA-01', description: 'Check that all fire extinguishers are in their designated locations and unobstructed.', priority: 'High', riskLevel: 'High', proof: 'Visual Confirmation Log', location: 'All Areas' },
                    { id: 'FSA-02', description: 'Inspect extinguisher pressure gauges to ensure they are in the green zone.', priority: 'High', riskLevel: 'High', proof: 'Gauge Photo Log', location: 'All Areas' },
                    { id: 'FSA-03', description: 'Verify that all emergency exit paths and doorways are completely clear of obstructions.', priority: 'High', riskLevel: 'High', proof: 'Photo of Exit Paths', location: 'All Areas' },
                    { id: 'FSA-04', description: 'Test smoke detectors and fire alarms to ensure they are functional.', priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Control Panel' },
                    { id: 'FSA-05', description: 'Check that all emergency lighting fixtures illuminate when tested.', priority: 'High', riskLevel: 'High', proof: 'Lighting Test Log', location: 'All Areas' },
                ]
            },
            {
                title: "Workplace First-Aid Kit Checklist",
                department: "HR/Admin",
                frequency: "Monthly",
                role: "Admin Manager",
                icon: <HeartPulse />,
                summary: "A checklist to ensure your workplace first-aid kit is always stocked, compliant, and ready for any minor medical incident.",
                tasks: [
                    { id: 'FAK-01', description: 'Check inventory of all items against the standard first-aid kit contents list.', priority: 'High', riskLevel: 'Medium', proof: 'Inventory Sheet', location: 'First-Aid Station' },
                    { id: 'FAK-02', description: 'Check expiry dates of all medications and ointments (e.g., antiseptic wipes, pain relievers).', priority: 'High', riskLevel: 'Medium', proof: 'Expiry Date Log', location: 'First-Aid Station' },
                    { id: 'FAK-03', description: 'Restock any used items (e.g., bandages, gauze, adhesive tape).', priority: 'High', riskLevel: 'Medium', proof: 'Restock Order Form', location: 'First-Aid Station' },
                    { id: 'FAK-04', description: 'Ensure the first-aid kit is stored in a clearly marked and easily accessible location.', priority: 'High', riskLevel: 'Medium', proof: 'Location Photo', location: 'First-Aid Station' },
                    { id: 'FAK-05', description: 'Verify the incident log book is present with the kit and has blank pages.', priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'First-Aid Station' },
                ]
            },
            {
                title: "General Workplace Hazard Inspection",
                department: "Facilities/Safety",
                frequency: "Weekly",
                role: "Facility Manager",
                icon: <Search />,
                summary: "A weekly walk-around checklist to proactively identify and mitigate common workplace hazards before they cause an accident.",
                tasks: [
                    { id: 'GWH-01', description: 'Inspect all walkways and floors for trip hazards (e.g., loose cables, carpets, spills).', priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Areas' },
                    { id: 'GWH-02', description: 'Check that heavy items are not stored on high shelves.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit Photo', location: 'Storage Rooms' },
                    { id: 'GWH-03', description: 'Ensure all areas are adequately lit.', priority: 'Medium', riskLevel: 'Medium', proof: 'Lighting Check Log', location: 'All Areas' },
                    { id: 'GWH-04', description: 'Verify that all wet floor signs are available and in good condition.', priority: 'High', riskLevel: 'Medium', proof: 'Signage Check', location: 'Janitor Closet' },
                    { id: 'GWH-05', description: 'Check that office furniture (chairs, desks) is stable and in good repair.', priority: 'Medium', riskLevel: 'Medium', proof: 'Furniture Audit', location: 'Office Areas' },
                ]
            },
            {
                title: "Basic Electrical Safety Checklist",
                department: "Admin/Facilities",
                frequency: "Monthly",
                role: "Admin Supervisor",
                icon: <Zap />,
                summary: "A non-technical checklist to spot common electrical hazards that are a leading cause of workplace fires and accidents.",
                tasks: [
                    { id: 'BES-01', description: 'Inspect for any "daisy-chained" multi-plugs or extension cords plugged into other extension cords.', priority: 'High', riskLevel: 'High', proof: 'Photo of Violation', location: 'All Areas' },
                    { id: 'BES-02', description: 'Check for any frayed, cracked, or damaged electrical cords on equipment.', priority: 'High', riskLevel: 'High', proof: 'Damage Report', location: 'All Areas' },
                    { id: 'BES-03', description: 'Ensure electrical panels are unobstructed and easily accessible (at least 3 feet of clearance).', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Utility Areas' },
                    { id: 'BES-04', description: 'Verify that no electrical cords are running under carpets or across doorways where they can be damaged.', priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'All Areas' },
                    { id: 'BES-05', description: 'Report any outlets or switches that are hot to the touch to facility maintenance immediately.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Ticket', location: 'All Areas' },
                ]
            },
            {
                title: "Visitor & Contractor Sign-In Protocol",
                department: "Security/Reception",
                frequency: "Per Visitor",
                role: "Receptionist",
                icon: <UserCheck />,
                summary: "A simple protocol to ensure every non-employee is accounted for, enhancing security and accountability.",
                tasks: [
                    { id: 'VCS-01', description: 'Ensure every visitor signs the logbook with their name, company, contact person, and time of entry.', priority: 'High', riskLevel: 'Medium', proof: 'Visitor Logbook', location: 'Reception' },
                    { id: 'VCS-02', description: 'Issue a numbered visitor badge to every guest.', priority: 'High', riskLevel: 'Medium', proof: 'Badge Issue Log', location: 'Reception' },
                    { id: 'VCS-03', description: 'Verify the identity of contractors against a pre-approved list from facility management.', priority: 'High', riskLevel: 'High', proof: 'Contractor Verification', location: 'Reception' },
                    { id: 'VCS-04', description: 'Ensure every visitor is escorted by an employee or has their host notified.', priority: 'High', riskLevel: 'Medium', proof: 'Host Notification Log', location: 'Reception' },
                    { id: 'VCS-05', description: 'Ensure every visitor signs out and returns their badge upon exiting.', priority: 'High', riskLevel: 'Medium', proof: 'Visitor Logbook', location: 'Reception' },
                ]
            }
        ]
    },
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
             { text: "Ensure flawless room presentation with daily readiness and housekeeping verification.", icon: <Home /> },
             { text: "Uphold world-class food safety with kitchen hygiene (HACCP) and F&B service standards.", icon: <Utensils /> },
             { text: "Mitigate water-related risks with pool & spa safety protocols and water quality logs.", icon: <LifeBuoy /> },
             { text: "Guarantee guest and staff safety through rigorous fire safety audits and evacuation drills.", icon: <Siren /> },
             { text: "Control site access and third-party risk with vendor and work permit SOPs.", icon: <HardHat /> },
             { text: "Prevent costly downtime with a proactive preventive maintenance schedule for all critical assets.", icon: <Wrench /> }
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
                { name: "NFPA 101", description: "Life Safety Code for fire and building safety." },
                { name: "ISO 45001", description: "Occupational Health and Safety." },
                { name: "ISO 22000", description: "Food Safety Management (for F&B)." },
                { name: "OSHA", description: "General workplace safety standards." }
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
                     { id: 'HRR-01', description: 'Check bed linen for stains, tears, and proper placement.', priority: 'High', riskLevel: 'Medium', proof: 'Photo of made bed', location: 'Guest Room', consequence: 'Poor guest experience and negative reviews due to unclean or damaged linen.' },
                     { id: 'HRR-02', description: 'Verify minibar stock against the standard list and check for expired items.', priority: 'High', riskLevel: 'Medium', proof: 'Minibar Restock Sheet', location: 'Guest Room', consequence: 'Guest dissatisfaction and potential health risk if expired items are consumed.' },
                     { id: 'HRR-03', description: 'Test the functionality of the in-room safe and ensure it is empty and open.', priority: 'High', riskLevel: 'High', proof: 'Safe Test Log', location: 'Guest Room', consequence: 'Guest cannot secure valuables, leading to security concerns and complaints.' },
                     { id: 'HRR-04', description: 'Check all plumbing (taps, shower, toilet) for leaks and proper function. Check water pressure.', priority: 'High', riskLevel: 'High', proof: 'Plumbing Check Log', location: 'Guest Bathroom', consequence: 'A minor leak can cause major water damage, while a non-functional toilet is a major service failure.' },
                     { id: 'HRR-05', description: 'Inspect all surfaces (tables, counters, mirrors) for cleanliness and dust.', priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room', consequence: 'Reflects poorly on the hotel\'s hygiene standards and attention to detail.' },
                     { id: 'HRR-06', description: 'Test TV, AC remote controls, and all light switches.', priority: 'High', riskLevel: 'Medium', proof: 'Functional Test Log', location: 'Guest Room' },
                     { id: 'HRR-07', description: 'Replenish all guest amenities (toiletries, tea/coffee, water bottles).', priority: 'Medium', riskLevel: 'Low', proof: 'Amenity Checklist', location: 'Guest Room' },
                     { id: 'HRR-08', description: 'Check functionality of the door lock and key card access.', priority: 'High', riskLevel: 'High', proof: 'Lock Test Log', location: 'Guest Room Door' },
                     { id: 'HRR-09', description: 'Ensure the room is free of any odors. Use air freshener if necessary.', priority: 'Medium', riskLevel: 'Low', proof: 'Olfactory Check', location: 'Guest Room' },
                     { id: 'HRR-10', description: 'Final supervisor check and sign-off with photo uploaded to system.', priority: 'High', riskLevel: 'Medium', proof: 'Supervisor Sign-off', location: 'System' },
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
                    { id: 'HACCP-01', description: 'Log temperatures of all walk-in chillers, freezers, and reach-in refrigerators.', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Kitchen' },
                    { id: 'HACCP-02', description: 'Verify raw material deliveries against supplier documentation, checking for temperature and quality.', priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Bay' },
                    { id: 'HACCP-03', description: 'Ensure all handwashing stations are stocked with soap, sanitizer, and paper towels.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'HACCP-04', description: 'Check knife sanitation station for correct chemical concentration and temperature.', priority: 'High', riskLevel: 'High', proof: 'Sanitizer Log', location: 'Kitchen' },
                    { id: 'HACCP-05', description: 'Ensure allergen segregation is maintained in storage (separate shelves) and prep areas (color-coded boards).', priority: 'High', riskLevel: 'High', proof: 'Storage Audit Photo', location: 'Kitchen/Stores' },
                    { id: 'HACCP-06', description: 'Calibrate food thermometers using ice-point or boiling-point method.', priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Kitchen' },
                    { id: 'HACCP-07', description: 'Inspect all food contact surfaces for cleanliness before starting prep.', priority: 'High', riskLevel: 'High', proof: 'Surface Swab Test (optional)', location: 'Prep Stations' },
                    { id: 'HACCP-08', description: 'Brief staff on the day\'s menu, highlighting any potential allergens.', priority: 'High', riskLevel: 'Medium', proof: 'Briefing Notes', location: 'Kitchen' },
                    { id: 'HACCP-09', description: 'Check that trash bins are clean, lined, and covered.', priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Waste Area' },
                    { id: 'HACCP-10', description: 'Ensure pest control traps are in place and not disturbed.', priority: 'High', riskLevel: 'High', proof: 'Pest Control Log', location: 'Kitchen Perimeter' },
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
                    { id: 'POOL-01', description: 'Test and record chlorine and pH levels of the pool water at least 3 times daily.', priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'POOL-02', description: 'Verify lifeguard duty roster and ensure certified lifeguards are present and alert.', priority: 'High', riskLevel: 'High', proof: 'Duty Roster Sign-off', location: 'Poolside' },
                    { id: 'POOL-03', description: 'Check all rescue equipment (life rings, first aid kit, spine board) is present and in good condition.', priority: 'High', riskLevel: 'High', proof: 'Equipment Checklist', location: 'Poolside' },
                    { id: 'POOL-04', description: 'Inspect pool deck for slip hazards, damage, or broken tiles.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection Log', location: 'Pool Deck' },
                    { id: 'POOL-05', description: 'Check and log the temperature of the spa/jacuzzi.', priority: 'High', riskLevel: 'Medium', proof: 'Temperature Log', location: 'Spa' },
                    { id: 'POOL-06', description: 'Ensure depth markers and safety signage are clearly visible.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Poolside' },
                    { id: 'POOL-07', description: 'Inspect pool drains and suction fittings for any blockages or damage.', priority: 'High', riskLevel: 'High', proof: 'Drain Inspection Log', location: 'Pool' },
                    { id: 'POOL-08', description: 'Test the emergency phone or alarm system.', priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Poolside' },
                    { id: 'POOL-09', description: 'Skim the pool surface to remove debris.', priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Pool' },
                    { id: 'POOL-10', description: 'Backwash the pool filters as per the schedule.', priority: 'High', riskLevel: 'Medium', proof: 'Backwash Log', location: 'Pump Room' },
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
                    { id: 'PM-01', description: 'Perform scheduled HVAC filter cleaning/replacement as per the master schedule.', priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'HVAC Rooms' },
                    { id: 'PM-02', description: 'Conduct weekly load test of backup generators and log fuel levels.', priority: 'High', riskLevel: 'High', proof: 'Generator Test Log', location: 'Generator Room' },
                    { id: 'PM-03', description: 'Verify monthly elevator certification and maintenance by vendor, and check the in-lift emergency phone.', priority: 'High', riskLevel: 'High', proof: 'Vendor Certificate & Test Call Log', location: 'Elevator Shafts' },
                    { id: 'PM-04', description: 'Log all preventive maintenance activities with vendor reports and schedule next due dates.', priority: 'High', riskLevel: 'Medium', proof: 'Master PM Log', location: 'Maintenance Office' },
                    { id: 'PM-05', description: 'Inspect water pumps and tanks for leaks, pressure, and functionality.', priority: 'High', riskLevel: 'Medium', proof: 'Pump Inspection Log', location: 'Pump Room' },
                    { id: 'PM-06', description: 'Check and clean kitchen exhaust hoods and ducts quarterly.', priority: 'High', riskLevel: 'High', proof: 'Cleaning Certificate', location: 'Kitchen' },
                    { id: 'PM-07', description: 'Test the hotel\'s fire pump and sprinkler system monthly.', priority: 'High', riskLevel: 'High', proof: 'Fire Pump Test Log', location: 'Fire Pump Room' },
                    { id: 'PM-08', description: 'Inspect and test all gas lines and valves for leaks semi-annually.', priority: 'High', riskLevel: 'High', proof: 'Gas Leak Test Report', location: 'Various' },
                    { id: 'PM-09', description: 'Service all laundry equipment as per manufacturer guidelines.', priority: 'Medium', riskLevel: 'Medium', proof: 'Laundry Maintenance Log', location: 'Laundry' },
                    { id: 'PM-10', description: 'Check and maintain the central hot water system.', priority: 'High', riskLevel: 'Medium', proof: 'Boiler Inspection Log', location: 'Boiler Room' },
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
                    { id: 'FIRE-01', description: 'Conduct monthly inspection of all fire extinguishers (pressure, expiry, accessibility).', priority: 'High', riskLevel: 'High', proof: 'Extinguisher Log', location: 'Entire Property' },
                    { id: 'FIRE-02', description: 'Perform a quarterly mock evacuation drill with a specific scenario (e.g., kitchen fire).', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Entire Property' },
                    { id: 'FIRE-03', description: 'Log attendance and time-to-evacuate for each drill, and note any delays.', priority: 'High', riskLevel: 'High', proof: 'Drill Attendance Sheet', location: 'Assembly Point' },
                    { id: 'FIRE-04', description: 'Perform daily checks of all stairwells and fire exits to ensure they are clear and unlocked.', priority: 'High', riskLevel: 'High', proof: 'Exit Clearance Log', location: 'Entire Property' },
                    { id: 'FIRE-05', description: 'Test the public address system and emergency lighting weekly.', priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'Control Room' },
                    { id: 'FIRE-06', description: 'Check that fire safety signage (exit signs, floor plans) is in place and visible.', priority: 'High', riskLevel: 'High', proof: 'Signage Audit', location: 'Entire Property' },
                    { id: 'FIRE-07', description: 'Ensure kitchen fire suppression systems (e.g., Ansul) are certified and serviced annually.', priority: 'High', riskLevel: 'High', proof: 'Vendor Certificate', location: 'Kitchen' },
                    { id: 'FIRE-08', description: 'Train staff on the different types of fire and how to use the correct extinguisher.', priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Training Room' },
                    { id: 'FIRE-09', description: 'Ensure Fire Marshals are appointed and trained for each floor/department.', priority: 'High', riskLevel: 'High', proof: 'Marshal List', location: 'HR' },
                    { id: 'FIRE-10', description: 'Review and update the fire emergency plan annually.', priority: 'High', riskLevel: 'High', proof: 'Updated Plan', location: 'Safety Office' },
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
                    { id: 'VENDOR-02', description: 'Obtain and file a copy of the vendor\'s liability insurance and any required licenses.', priority: 'High', riskLevel: 'High', proof: 'Insurance & License Copy', location: 'Security Office' },
                    { id: 'VENDOR-03', description: 'Issue a time-bound work permit for a specific area, detailing the scope of work.', priority: 'High', riskLevel: 'Medium', proof: 'Work Permit', location: 'Security Office' },
                    { id: 'VENDOR-04', description: 'Log all tools and equipment brought in and out by the contractor.', priority: 'High', riskLevel: 'Medium', proof: 'Tool Inventory Log', location: 'Security Gate' },
                    { id: 'VENDOR-05', description: 'Assign a supervisor to escort vendors in sensitive areas (e.g., server rooms, cash office).', priority: 'High', riskLevel: 'High', proof: 'Escort Log', location: 'Various' },
                    { id: 'VENDOR-06', description: 'Conduct a safety briefing before any high-risk work (e.g., hot work, electrical).', priority: 'High', riskLevel: 'High', proof: 'Safety Briefing Sign-off', location: 'Work Area' },
                    { id: 'VENDOR-07', description: 'Inspect the work area after completion to ensure it is clean and safe.', priority: 'High', riskLevel: 'Medium', proof: 'Work Area Clearance Form', location: 'Work Area' },
                    { id: 'VENDOR-08', description: 'Ensure vendors follow all hotel safety and conduct policies.', priority: 'High', riskLevel: 'High', proof: 'Policy Acknowledgement Form', location: 'Security Office' },
                    { id: 'VENDOR-09', description: 'Check vendor vehicles for any unauthorized materials.', priority: 'Medium', riskLevel: 'High', proof: 'Vehicle Check Log', location: 'Security Gate' },
                    { id: 'VENDOR-10', description: 'Review vendor performance and log any issues for future reference.', priority: 'Medium', riskLevel: 'Medium', proof: 'Vendor Performance Log', location: 'Procurement' },
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
                    { id: 'INC-01', description: 'Perform immediate triage (e.g., provide first aid, secure the area, offer assistance).', priority: 'High', riskLevel: 'High', proof: 'First Action Log', location: 'Incident Site' },
                    { id: 'INC-02', description: 'Fill out a detailed incident report with photos, witness statements, and timestamps.', priority: 'High', riskLevel: 'High', proof: 'Incident Report Form', location: 'Office' },
                    { id: 'INC-03', description: 'Follow the defined escalation path for notifying GM, legal, and insurance within 1 hour.', priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Office' },
                    { id: 'INC-04', description: 'Conduct a root-cause analysis (RCA) for the incident within 24 hours.', priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'Office' },
                    { id: 'INC-05', description: 'Develop and track a Corrective and Preventive Action (CAPA) plan.', priority: 'High', riskLevel: 'High', proof: 'CAPA Plan', location: 'Office' },
                    { id: 'INC-06', description: 'Preserve any relevant evidence, such as CCTV footage.', priority: 'High', riskLevel: 'High', proof: 'Evidence Log', location: 'Security' },
                    { id: 'INC-07', description: 'Offer a resolution to the guest if appropriate and document it.', priority: 'High', riskLevel: 'High', proof: 'Guest Resolution Form', location: 'Office' },
                    { id: 'INC-08', description: 'Communicate with the guest to show empathy and provide updates.', priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Office' },
                    { id: 'INC-09', description: 'Brief the team on the incident to prevent recurrence.', priority: 'Medium', riskLevel: 'Medium', proof: 'Briefing Notes', location: 'Office' },
                    { id: 'INC-10', description: 'Review the incident report for trends and update risk assessments.', priority: 'Medium', riskLevel: 'Medium', proof: 'Risk Assessment Update', location: 'Safety Office' },
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
                    { id: 'SEC-CCTV-01', description: 'Perform hourly patrols or virtual tours of key areas (lobby, perimeter, parking) via CCTV.', priority: 'High', riskLevel: 'High', proof: 'CCTV Log', location: 'Control Room' },
                    { id: 'SEC-CCTV-02', description: 'Log any suspicious activity with timestamps, descriptions, and save relevant footage.', priority: 'High', riskLevel: 'High', proof: 'Incident Log', location: 'Control Room' },
                    { id: 'SEC-CCTV-03', description: 'Verify all cameras are recording, have clear views, and correct timestamp.', priority: 'High', riskLevel: 'High', proof: 'System Health Check', location: 'Control Room' },
                    { id: 'SEC-CCTV-04', description: 'Ensure footage is backed up according to the data retention policy (e.g., 30 days).', priority: 'High', riskLevel: 'High', proof: 'Backup Log', location: 'Server Room' },
                    { id: 'SEC-CCTV-05', description: 'Test panic alarm functionality and response weekly.', priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Various' },
                    { id: 'SEC-CCTV-06', description: 'Monitor baggage screening process for any threats.', priority: 'High', riskLevel: 'High', proof: 'Screening Log', location: 'Entrance' },
                    { id: 'SEC-CCTV-07', description: 'Check access control system logs for any unauthorized access attempts.', priority: 'High', riskLevel: 'High', proof: 'Access Control Log', location: 'System' },
                    { id: 'SEC-CCTV-08', description: 'Ensure all security personnel are at their posts.', priority: 'High', riskLevel: 'High', proof: 'Roster Check', location: 'Control Room' },
                    { id: 'SEC-CCTV-09', description: 'Coordinate with local law enforcement during any major incident.', priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Control Room' },
                    { id: 'SEC-CCTV-10', description: 'Maintain confidentiality of all security footage and information.', priority: 'High', riskLevel: 'High', proof: 'Confidentiality Agreement', location: 'HR' },
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
            { text: "Prevent foodborne illness with kitchen opening & closing hygiene protocols (HACCP).", icon: <ShieldCheck /> },
            { text: "Protect your inventory from spoilage with rigorous cold chain and temperature monitoring.", icon: <Thermometer /> },
            { text: "Safeguard guests with a robust allergen management and menu labeling system.", icon: <FileWarning /> },
            { text: "Maintain a spotless, pest-free environment with auditable waste segregation and pest control logs.", icon: <Bug /> },
            { text: "Build a professional team through verifiable staff hygiene and training protocols.", icon: <UserCheck /> },
            { text: "Guarantee food quality from the source with a stringent raw material receiving and QC process.", icon: <PackageCheck /> }
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
                    { id: 'KO-01', description: 'Check and log temperatures of all refrigerators and freezers.', priority: 'High', riskLevel: 'High', proof: 'Temp Log', location: 'Kitchen', consequence: 'Failure can lead to bacterial growth and foodborne illness outbreaks.' },
                    { id: 'KO-02', description: 'Ensure separate cutting boards and utensils are used for veg/non-veg prep.', priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Prep Stations', consequence: 'Prevents cross-contamination, which can cause severe allergic reactions or food poisoning.' },
                    { id: 'KO-03', description: 'Verify all cleaning chemical bottles are correctly labeled.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Chemical Store', consequence: 'Prevents accidental chemical contamination of food, which can be toxic.' },
                    { id: 'KO-04', description: 'Check that all equipment safety guards are in place and functional.', priority: 'High', riskLevel: 'High', proof: 'Equipment Check Log', location: 'Kitchen', consequence: 'Missing guards can lead to severe injuries, amputations, and regulatory fines.' },
                    { id: 'KO-05', description: 'Ensure handwash stations are stocked with soap and sanitizer.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen', consequence: 'Lack of hand hygiene is a primary cause of foodborne illness transmission.' },
                    { id: 'KO-06', description: 'Calibrate food thermometers.', priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Kitchen' },
                    { id: 'KO-07', description: 'Check that exhaust hoods and ventilation are working.', priority: 'High', riskLevel: 'Medium', proof: 'System Check', location: 'Kitchen' },
                    { id: 'KO-08', description: 'Ensure first aid kit is stocked.', priority: 'High', riskLevel: 'Medium', proof: 'First Aid Kit Log', location: 'Kitchen' },
                    { id: 'KO-09', description: 'Check that the fire suppression system is armed and ready.', priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Kitchen' },
                    { id: 'KO-10', description: 'Brief the kitchen team on the day\'s menu and any specials.', priority: 'Medium', riskLevel: 'Low', proof: 'Briefing Notes', location: 'Kitchen' },
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
                    { id: 'CSM-01', description: 'Log cold storage temperatures twice daily.', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Cold Storage' },
                    { id: 'CSM-02', description: 'Verify digital logs if available.', priority: 'High', riskLevel: 'High', proof: 'Digital Log Review', location: 'System' },
                    { id: 'CSM-03', description: 'Test temperature alarms weekly.', priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Cold Storage' },
                    { id: 'CSM-04', description: 'Follow escalation procedure for any temperature deviations.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Office' },
                    { id: 'CSM-05', description: 'Check for any signs of frost buildup or door seal damage.', priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Inspection Log', location: 'Cold Storage' },
                    { id: 'CSM-06', description: 'Ensure cold storage units are clean and organized.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Cold Storage' },
                    { id: 'CSM-07', description: 'Keep raw and cooked foods stored separately.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Cold Storage' },
                    { id: 'CSM-08', description: 'Ensure all items are labeled with date of receipt.', priority: 'High', riskLevel: 'Medium', proof: 'Labeling Audit', location: 'Cold Storage' },
                    { id: 'CSM-09', description: 'Do not overload shelves to allow for proper air circulation.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Cold Storage' },
                    { id: 'CSM-10', description: 'Report any maintenance issues with the units immediately.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Request', location: 'System' },
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
                    { id: 'ALLERGEN-04', description: "Maintain an up-to-date allergen matrix for all menu items.", priority: 'High', riskLevel: 'High', proof: 'Allergen Matrix Document', location: 'POS/Kitchen' },
                    { id: 'ALLERGEN-05', description: "Change gloves and wash hands before and after handling an allergen-free order.", priority: 'High', riskLevel: 'High', proof: 'CCTV/Supervisor Audit', location: 'Kitchen' },
                    { id: 'ALLERGEN-06', description: "Use dedicated utensils for preparing allergen-free meals.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'ALLERGEN-07', description: "Server confirms the special meal with the guest upon delivery.", priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation', location: 'Guest Table' },
                    { id: 'ALLERGEN-08', description: "Train all staff on common allergens and their sources.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
                    { id: 'ALLERGEN-09', description: "Clearly communicate with the guest about potential cross-contamination risks.", priority: 'High', riskLevel: 'High', proof: 'Verbal Script', location: 'Guest Table' },
                    { id: 'ALLERGEN-10', description: "Document any incidents related to allergies.", priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Office' },
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
                    { id: 'SANIT-06', description: "Sanitize all food contact surfaces between tasks.", priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Kitchen' },
                    { id: 'SANIT-07', description: "Deep clean floors and drains weekly.", priority: 'High', riskLevel: 'Medium', proof: 'Floor Cleaning Log', location: 'Kitchen' },
                    { id: 'SANIT-08', description: "Clean and descale dishwashers monthly.", priority: 'High', riskLevel: 'Medium', proof: 'Dishwasher Log', location: 'Dishwashing Area' },
                    { id: 'SANIT-09', description: "Check that cleaning chemicals are stored safely and correctly.", priority: 'High', riskLevel: 'High', proof: 'Chemical Store Audit', location: 'Chemical Store' },
                    { id: 'SANIT-10', description: "Train staff on correct cleaning procedures and chemical use.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'HR' },
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
                    { id: 'INC-REST-06', description: "Collect contact information from the affected guest for follow-up.", priority: 'High', riskLevel: 'High', proof: 'Contact Form', location: 'Office' },
                    { id: 'INC-REST-07', description: "Preserve any food samples for testing if necessary.", priority: 'High', riskLevel: 'High', proof: 'Sample Log', location: 'Lab/Kitchen' },
                    { id: 'INC-REST-08', description: "Interview all staff involved in the incident.", priority: 'High', riskLevel: 'High', proof: 'Interview Notes', location: 'Office' },
                    { id: 'INC-REST-09', description: "Implement corrective actions to prevent recurrence.", priority: 'High', riskLevel: 'High', proof: 'CAPA Plan', location: 'Office' },
                    { id: 'INC-REST-10', description: "Review similar incidents to identify trends.", priority: 'Medium', riskLevel: 'Medium', proof: 'Trend Analysis Report', location: 'Office' },
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
                    { id: 'RM-06', description: "Check for signs of pests in packaging.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection Log', location: 'Receiving' },
                    { id: 'RM-07', description: "Verify that packaging is intact and not damaged.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Receiving' },
                    { id: 'RM-08', description: "Match the delivery challan with the purchase order.", priority: 'High', riskLevel: 'High', proof: 'Document Match', location: 'Receiving' },
                    { id: 'RM-09', description: "Check the 'best before' or expiry dates of all products.", priority: 'High', riskLevel: 'High', proof: 'Date Check Log', location: 'Receiving' },
                    { id: 'RM-10', description: "Record all received goods in the inventory system.", priority: 'High', riskLevel: 'High', proof: 'System Entry', location: 'System' },
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
                    { id: 'SH-06', description: "Provide and enforce the use of gloves for handling ready-to-eat foods.", priority: 'High', riskLevel: 'High', proof: 'Glove Usage Audit', location: 'Kitchen' },
                    { id: 'SH-07', description: "Ensure a 'no jewelry' policy is followed by kitchen staff.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'SH-08', description: "Maintain records of all staff hygiene training.", priority: 'High', riskLevel: 'Medium', proof: 'Master Training File', location: 'HR' },
                    { id: 'SH-09', description: "Have a clear policy for staff who are sick.", priority: 'High', riskLevel: 'High', proof: 'Sick Leave Policy', location: 'HR' },
                    { id: 'SH-10', description: "Ensure staff have access to and use hand sanitizers.", priority: 'High', riskLevel: 'Medium', proof: 'Supply Check', location: 'Kitchen' },
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
                    { id: 'WP-06', description: "Ensure all drains are clean and free-flowing.", priority: 'High', riskLevel: 'Medium', proof: 'Drain Cleaning Log', location: 'Kitchen' },
                    { id: 'WP-07', description: "Check for any signs of pest activity (droppings, gnaw marks).", priority: 'High', riskLevel: 'High', proof: 'Pest Activity Log', location: 'Various' },
                    { id: 'WP-08', description: "Ensure all doors and windows are properly sealed to prevent pest entry.", priority: 'High', riskLevel: 'High', proof: 'Structural Audit', location: 'Perimeter' },
                    { id: 'WP-09', description: "Train staff on pest awareness and reporting.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'WP-10', description: "Dispose of waste in a timely manner to avoid accumulation.", priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Waste Area' },
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
                    { id: 'EOD-06', description: "Store all perishable food items correctly.", priority: 'High', riskLevel: 'High', proof: 'Storage Check', location: 'Kitchen' },
                    { id: 'EOD-07', description: "Empty all trash cans and clean the waste area.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Area Log', location: 'Waste Area' },
                    { id: 'EOD-08', description: "Turn off all non-essential lights and electronics.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Entire Premises' },
                    { id: 'EOD-09', description: "Lock up all alcoholic beverages.", priority: 'High', riskLevel: 'High', proof: 'Liquor Storage Log', location: 'Bar/Storage' },
                    { id: 'EOD-10', description: "Check that all restrooms are clean and stocked for the next day.", priority: 'Medium', riskLevel: 'Low', proof: 'Restroom Check', location: 'Restrooms' },
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
            { text: "Streamline inventory turnover with a seasonal stock & markdown management system.", icon: <Thermometer /> },
            { text: "Create stunning, brand-aligned stores with visual merchandising and display audits.", icon: <GalleryVertical /> },
            { text: "Reduce theft with secure fitting room operations and security protocols.", icon: <DoorClosed /> },
            { text: "Master modern retail with seamless omni-channel operations (Click-and-Collect, Returns).", icon: <Link /> },
            { text: "Protect your assets through rigorous store safety and loss prevention audits.", icon: <Shield /> },
            { text: "Ensure financial accuracy with daily cash handling and POS reconciliation procedures.", icon: <Banknote /> }
        ],
        previewScenario: {
            title: "Preventing End-of-Season Stock Write-Offs",
            description: "A fashion store is left with a massive amount of unsold winter wear at the end of the season, forcing a huge write-off. This scenario shows how checklists create a proactive process to manage seasonal inventory and maximize profit.",
            tasks: [
                { id: 'SIM-02', description: "The 'Seasonal Inventory Management' checklist schedules markdowns to start 6 weeks before the season ends, clearing stock progressively.", sourceChecklist: "Seasonal Inventory Management", priority: 'High' },
                { id: 'VM-AUDIT-05', description: "The 'Visual Merchandising' SOP ensures that discounted items are moved to a high-traffic 'Sale' section to increase visibility and sell-through.", sourceChecklist: "VM & Display Audit", priority: 'High' },
                { id: 'INV-RECON-05', description: "'Inventory Reconciliation' provides real-time data on what's selling, allowing for targeted promotions on slow-moving items before the season ends.", sourceChecklist: "Inventory Reconciliation SOP", priority: 'Medium' }
            ]
        },
        globalStandards: {
            title: "Aligned with Retail Best Practices",
            standards: [
                { name: "ISO 9001", description: "For quality management and customer satisfaction." },
                { name: "Shops & Establishment Act", description: "Ensures compliance with local labor and operational laws." },
                { name: "OSHA 29 CFR", description: "Guidelines for retail workplace safety." },
                { name: "ILO Safety Standards", description: "International Labour Organization standards for worker safety." }
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
                    { id: 'FA-OPEN-01', description: 'Boot up POS systems and verify connectivity.', priority: 'High', riskLevel: 'Medium', proof: 'POS Login Screen', location: 'Cash Desk', consequence: 'Inability to process sales at opening, leading to customer frustration and lost revenue.' },
                    { id: 'FA-OPEN-02', description: 'Verify and log the opening cash float.', priority: 'High', riskLevel: 'High', proof: 'Float Log', location: 'Cash Office', consequence: 'Can lead to cash discrepancies and makes it difficult to track theft or errors.' },
                    { id: 'FA-OPEN-03', description: 'Check CCTV system is recording and all cameras are operational.', priority: 'High', riskLevel: 'High', proof: 'CCTV Monitor', location: 'Security Office', consequence: 'A non-functional camera creates a security blind spot, making the store vulnerable to theft and providing no evidence for incidents.' },
                    { id: 'FA-OPEN-04', description: 'Check store displays against the current Visual Merchandising planogram.', priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor', consequence: 'Inconsistent branding and missed promotional opportunities, leading to lower sales.' },
                    { id: 'FA-OPEN-05', description: 'Ensure fitting rooms are clean and clear of merchandise.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Fitting Rooms', consequence: 'A messy fitting room creates a poor customer experience and can be a hiding place for stolen items.' },
                    { id: 'FA-OPEN-06', description: 'Turn on all lights and music.', priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'FA-OPEN-07', description: 'Ensure all staff are in position for store opening.', priority: 'High', riskLevel: 'Low', proof: 'Staff Roster Check', location: 'Sales Floor' },
                    { id: 'FA-OPEN-08', description: 'Brief staff on daily targets and promotions.', priority: 'High', riskLevel: 'Medium', proof: 'Briefing Notes', location: 'Back Office' },
                    { id: 'FA-OPEN-09', description: 'Check that all signage is correct and in place.', priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Sales Floor' },
                    { id: 'FA-OPEN-10', description: 'Unlock all necessary doors for customer access.', priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Entrance' },
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
                    { id: 'VM-AUDIT-06', description: 'Check that merchandise is folded or hung correctly.', priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-07', description: 'Ensure sizing information is clearly visible.', priority: 'High', riskLevel: 'Low', proof: 'Sizing Check', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-08', description: 'Replenish stock on displays as needed.', priority: 'High', riskLevel: 'Medium', proof: 'Replenishment Log', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-09', description: 'Rotate displays to keep the store looking fresh.', priority: 'Medium', riskLevel: 'Low', proof: 'Rotation Schedule', location: 'Office' },
                    { id: 'VM-AUDIT-10', description: 'Get feedback from the store manager on the displays.', priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Form', location: 'Office' },
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
                    { id: 'INV-RECON-06', description: 'Conduct a full stock take bi-annually.', priority: 'High', riskLevel: 'High', proof: 'Stock Take Report', location: 'Store-wide' },
                    { id: 'INV-RECON-07', description: 'Reconcile physical stock with system stock after a full count.', priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Office' },
                    { id: 'INV-RECON-08', description: 'Implement corrective actions to address shrinkage issues.', priority: 'High', riskLevel: 'High', proof: 'CAPA Plan', location: 'Office' },
                    { id: 'INV-RECON-09', description: 'Train staff on correct inventory handling procedures.', priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Office' },
                    { id: 'INV-RECON-10', description: 'Secure the stockroom and restrict access.', priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Stockroom' },
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
                    { id: 'TRIAL-06', description: 'Count items before and after the customer uses the trial room.', priority: 'High', riskLevel: 'High', proof: 'Item Count Log', location: 'Fitting Room Entrance' },
                    { id: 'TRIAL-07', description: 'Handle returned items from the trial room correctly (re-hang, return to floor).', priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Fitting Room Area' },
                    { id: 'TRIAL-08', description: 'Report any suspicious behavior to security.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Security' },
                    { id: 'TRIAL-09', description: 'Ensure fitting rooms are well-lit and mirrors are clean.', priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Fitting Rooms' },
                    { id: 'TRIAL-10', description: 'Provide assistance to customers in the fitting rooms.', priority: 'High', riskLevel: 'Low', proof: 'Customer Feedback', location: 'Fitting Room Area' },
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
                    { id: 'RETURN-06', description: 'Handle defective items correctly.', priority: 'High', riskLevel: 'High', proof: 'Defective Item Log', location: 'Back Office' },
                    { id: 'RETURN-07', description: 'Inform customers of the return policy clearly.', priority: 'High', riskLevel: 'Low', proof: 'Policy Signage', location: 'POS' },
                    { id: 'RETURN-08', description: 'Handle returns from online purchases according to the omni-channel policy.', priority: 'High', riskLevel: 'High', proof: 'Omni-channel SOP', location: 'POS' },
                    { id: 'RETURN-09', description: 'Quarantine returned items before placing them back on the floor.', priority: 'High', riskLevel: 'Medium', proof: 'Quarantine Log', location: 'Back Office' },
                    { id: 'RETURN-10', description: 'Train staff on handling difficult return situations.', priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Office' },
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
                    { id: 'LP-06', description: 'Conduct bag checks for staff leaving the store.', priority: 'High', riskLevel: 'High', proof: 'Bag Check Log', location: 'Staff Exit' },
                    { id: 'LP-07', description: 'Monitor fitting rooms for theft.', priority: 'High', riskLevel: 'High', proof: 'Fitting Room Log', location: 'Fitting Rooms' },
                    { id: 'LP-08', description: 'Have a clear protocol for handling a theft incident.', priority: 'High', riskLevel: 'High', proof: 'Theft Protocol', location: 'Security Office' },
                    { id: 'LP-09', description: 'Work with local law enforcement on organized retail crime.', priority: 'Medium', riskLevel: 'High', proof: 'Police Liaison Log', location: 'Security Office' },
                    { id: 'LP-10', description: 'Analyze shrinkage data to identify patterns.', priority: 'High', riskLevel: 'High', proof: 'Shrinkage Report', location: 'Office' },
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
                    { id: 'CH-06', description: 'Limit the amount of cash kept in the POS drawer.', priority: 'High', riskLevel: 'High', proof: 'Cash Limit Policy', location: 'POS' },
                    { id: 'CH-07', description: 'Handle credit card transactions securely according to PCI DSS standards.', priority: 'High', riskLevel: 'High', proof: 'PCI Compliance Audit', location: 'POS' },
                    { id: 'CH-08', description: 'Process gift card transactions correctly.', priority: 'High', riskLevel: 'Medium', proof: 'Gift Card Log', location: 'POS' },
                    { id: 'CH-09', description: 'Train cashiers on all payment handling procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Office' },
                    { id: 'CH-10', description: 'Investigate any cash shortages or overages immediately.', priority: 'High', riskLevel: 'High', proof: 'Investigation Report', location: 'Office' },
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
                    { id: 'SIM-06', description: 'Plan marketing campaigns for seasonal sales.', priority: 'High', riskLevel: 'Medium', proof: 'Marketing Plan', location: 'Marketing Office' },
                    { id: 'SIM-07', description: 'Update visual merchandising for new seasons.', priority: 'High', riskLevel: 'Low', proof: 'VM Plan', location: 'VM Office' },
                    { id: 'SIM-08', description: 'Train staff on the key features of the new collection.', priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Office' },
                    { id: 'SIM-09', description: 'Clear old stock from the stockroom to make space.', priority: 'High', riskLevel: 'Medium', proof: 'Stockroom Audit', location: 'Stockroom' },
                    { id: 'SIM-10', description: 'Donate or write off any remaining unsold stock.', priority: 'Medium', riskLevel: 'Low', proof: 'Donation/Write-off Form', location: 'Office' },
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
                    { id: 'OC-06', description: 'Communicate with customers about the status of their orders.', priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'CRM' },
                    { id: 'OC-07', description: 'Have a designated area for Click & Collect pickups.', priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'OC-08', description: 'Handle packaging and shipping for store-fulfilled orders.', priority: 'High', riskLevel: 'Medium', proof: 'Shipping Log', location: 'Back Office' },
                    { id: 'OC-09', description: 'Reconcile omni-channel sales with store sales.', priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Office' },
                    { id: 'OC-10', description: 'Gather customer feedback on the omni-channel experience.', priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Survey', location: 'System' },
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
            { text: "Enforce Fort-Knox level security with vault access control and dual verification SOPs.", icon: <Lock /> },
            { text: "Protect your most valuable assets with display case and overnight security protocols.", icon: <Shield /> },
            { text: "Prevent fraud in high-value transactions with rigorous payment verification steps.", icon: <CircleDollarSign /> },
            { text: "Eliminate swap theft and inventory loss with serialized item and watch management.", icon: <Watch /> },
            { text: "Ensure regulatory compliance with robust customer verification (KYC) processes.", icon: <UserCheck /> },
            { text: "Build customer trust with a secure and transparent repair and service intake process.", icon: <Wrench /> }
        ],
        previewScenario: {
            title: "Foiling a High-Value Swap Theft",
            description: "A criminal posing as a wealthy customer attempts to swap a genuine luxury watch with a high-quality counterfeit during a viewing. This scenario shows how integrated checklists prevent this common high-value theft.",
            tasks: [
                { id: 'JLR-SALE-01', description: "The 'High-Value Transaction' SOP requires showing only one item at a time, preventing the sleight-of-hand needed for a swap.", sourceChecklist: "High-Value Transaction SOP", priority: 'High' },
                { id: 'JLR-INV-05', description: "The 'Serialized Item Management' process mandates that the item's serial number is scanned and verified against the box and certificate before and after the viewing, making a swap impossible to hide.", sourceChecklist: "Serialized Item & Watch Management", priority: 'High' },
                { id: 'JLR-SEC-04', description: "The 'Opening & Closing Security' SOP ensures high-resolution CCTV covers the viewing area, providing clear evidence of the attempt.", sourceChecklist: "Opening & Closing Security Protocol", priority: 'High' }
            ]
        },
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
                    { id: 'JLR-SEC-01', description: 'Perform dual-person vault opening and closing procedure.', priority: 'High', riskLevel: 'High', proof: 'Vault Access Log', location: 'Vault', consequence: 'Prevents single-person access to high-value inventory, drastically reducing the risk of internal theft.' },
                    { id: 'JLR-SEC-02', description: 'Log deactivation and activation of the main security alarm.', priority: 'High', riskLevel: 'High', proof: 'Alarm Log', location: 'Security Panel', consequence: 'Creates a clear audit trail for any after-hours security events and ensures the store is never left unprotected.' },
                    { id: 'JLR-SEC-03', description: 'Conduct a full inventory count of all display cases at opening and closing.', priority: 'High', riskLevel: 'High', proof: 'Display Inventory Sheet', location: 'Sales Floor', consequence: 'Immediately identifies any missing items, allowing for rapid investigation before evidence is lost or CCTV footage is overwritten.' },
                    { id: 'JLR-SEC-04', description: 'Verify all CCTV cameras are recording and have unobstructed views.', priority: 'High', riskLevel: 'High', proof: 'CCTV Check Log', location: 'Security Room', consequence: 'Ensures that in the event of a robbery or theft, there is clear, usable evidence for law enforcement and insurance claims.' },
                    { id: 'JLR-SEC-05', description: 'Test silent panic alarms daily before opening.', priority: 'High', riskLevel: 'High', proof: 'Panic Alarm Test Log', location: 'Security Office', consequence: 'Guarantees that staff can silently alert security or police during a robbery without escalating the situation.' },
                    { id: 'JLR-SEC-06', description: 'Check entry/exit logs from previous day.', priority: 'Medium', riskLevel: 'Medium', proof: 'Log Review', location: 'Security Office' },
                    { id: 'JLR-SEC-07', description: 'Confirm all display cases are locked and secure.', priority: 'High', riskLevel: 'High', proof: 'Visual Confirmation', location: 'Sales Floor' },
                    { id: 'JLR-SEC-08', description: 'Ensure all staff have their IDs visible.', priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'JLR-SEC-09', description: 'Verify alarm system communication with monitoring center.', priority: 'High', riskLevel: 'High', proof: 'System Test', location: 'Security Office' },
                    { id: 'JLR-SEC-10', description: 'Document any security anomalies from the previous night.', priority: 'High', riskLevel: 'Medium', proof: 'Incident Report', location: 'Security Office' },
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
                    { id: 'JLR-SALE-06', description: 'Confirm customer contact information for high-value sales.', priority: 'Medium', riskLevel: 'Medium', proof: 'CRM Entry', location: 'POS' },
                    { id: 'JLR-SALE-07', description: 'For international cards, call for authorization.', priority: 'High', riskLevel: 'High', proof: 'Call Log', location: 'POS' },
                    { id: 'JLR-SALE-08', description: 'Ensure proper documentation for tax-free sales.', priority: 'High', riskLevel: 'Medium', proof: 'Tax Form', location: 'POS' },
                    { id: 'JLR-SALE-09', description: 'Double-check packaging and boxing in front of customer.', priority: 'High', riskLevel: 'Low', proof: 'Visual Confirmation', location: 'POS' },
                    { id: 'JLR-SALE-10', description: 'Provide customer with all necessary certificates and warranty cards.', priority: 'High', riskLevel: 'Low', proof: 'Document Handover', location: 'POS' },
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
                    { id: 'JLR-INV-06', description: 'Photograph each serialized item upon receipt.', priority: 'High', riskLevel: 'Medium', proof: 'Photo Log', location: 'Receiving' },
                    { id: 'JLR-INV-07', description: 'Update inventory system immediately upon sale.', priority: 'High', riskLevel: 'High', proof: 'System Entry', location: 'POS' },
                    { id: 'JLR-INV-08', description: 'Report any serial number discrepancies immediately.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Office' },
                    { id: 'JLR-INV-09', description: 'Verify serial number matches on box, certificate, and item.', priority: 'High', riskLevel: 'High', proof: 'Triple Check Log', location: 'Receiving/POS' },
                    { id: 'JLR-INV-10', description: 'Securely destroy old serial number records after statutory period.', priority: 'Medium', riskLevel: 'Low', proof: 'Destruction Log', location: 'Office' },
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
                    { id: 'JLR-DISP-06', description: 'Ensure display case glass is clean and free of cracks.', priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'JLR-DISP-07', description: 'Check for any signs of tampering with display cases.', priority: 'High', riskLevel: 'High', proof: 'Tamper Check Log', location: 'Sales Floor' },
                    { id: 'JLR-DISP-08', description: 'Verify that vault combination is changed periodically.', priority: 'High', riskLevel: 'High', proof: 'Combination Change Log', location: 'Security Office' },
                    { id: 'JLR-DISP-09', description: 'Ensure vault is clean and organized.', priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Vault' },
                    { id: 'JLR-DISP-10', description: 'Review vault access logs for any unauthorized entries.', priority: 'High', riskLevel: 'High', proof: 'Log Review', location: 'Security Office' },
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
                    { id: 'JA-AUDIT-06', description: 'Use barcode scanners for accuracy during counts.', priority: 'High', riskLevel: 'High', proof: 'Scan Logs', location: 'System' },
                    { id: 'JA-AUDIT-07', description: 'Freeze system inventory during full stock takes.', priority: 'High', riskLevel: 'High', proof: 'System Setting', location: 'System' },
                    { id: 'JA-AUDIT-08', description: 'Document reasons for all inventory adjustments.', priority: 'High', riskLevel: 'High', proof: 'Adjustment Notes', location: 'System' },
                    { id: 'JA-AUDIT-09', description: 'Rotate audit locations and categories regularly.', priority: 'Medium', riskLevel: 'Medium', proof: 'Audit Schedule', location: 'Office' },
                    { id: 'JA-AUDIT-10', description: 'Manager to sign off on all final audit reports.', priority: 'High', riskLevel: 'High', proof: 'Signed Report', location: 'Office' },
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
                    { id: 'CV-06', description: 'Follow AML (Anti-Money Laundering) guidelines for large cash transactions.', priority: 'High', riskLevel: 'High', proof: 'AML Form', location: 'POS' },
                    { id: 'CV-07', description: 'Record customer details accurately for future communication.', priority: 'High', riskLevel: 'Medium', proof: 'CRM Entry', location: 'POS' },
                    { id: 'CV-08', description: 'Check against any internal watchlists for known fraudsters.', priority: 'High', riskLevel: 'High', proof: 'Watchlist Check', location: 'System' },
                    { id: 'CV-09', description: 'For corporate purchases, verify business registration details.', priority: 'High', riskLevel: 'High', proof: 'Business Document Copy', location: 'POS' },
                    { id: 'CV-10', description: 'Retain verification documents securely and in compliance with privacy laws.', priority: 'High', riskLevel: 'High', proof: 'Secure Storage Log', location: 'Office' },
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
                    { id: 'RSM-06', description: 'Track repair status and provide updates to the customer.', priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'CRM' },
                    { id: 'RSM-07', description: 'Inspect the item after repair to ensure quality.', priority: 'High', riskLevel: 'High', proof: 'QC Check', location: 'Service Desk' },
                    { id: 'RSM-08', description: 'Securely package the item for return to the customer.', priority: 'High', riskLevel: 'Low', proof: 'Packaging Check', location: 'Service Desk' },
                    { id: 'RSM-09', description: 'Process payment for repairs accurately.', priority: 'High', riskLevel: 'Medium', proof: 'Invoice', location: 'POS' },
                    { id: 'RSM-10', description: 'Log all repair details for future reference and warranty claims.', priority: 'High', riskLevel: 'Medium', proof: 'Service History', location: 'System' },
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
                    { id: 'STSP-06', description: 'Train staff on the use of panic buttons.', priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Training Room' },
                    { id: 'STSP-07', description: 'Role-play different security scenarios with staff.', priority: 'High', riskLevel: 'High', proof: 'Role-play Log', location: 'Training Room' },
                    { id: 'STSP-08', description: 'Ensure all staff know the emergency contact numbers.', priority: 'High', riskLevel: 'High', proof: 'Contact List Check', location: 'Sales Floor' },
                    { id: 'STSP-09', description: 'Provide training on handling difficult customers.', priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'Training Room' },
                    { id: 'STSP-10', description: 'Update training materials based on new threats or incidents.', priority: 'High', riskLevel: 'Medium', proof: 'Updated Materials', location: 'Office' },
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
                    { id: 'IC-06', description: 'Ensure compliance with anti-money laundering (AML) regulations.', priority: 'High', riskLevel: 'High', proof: 'AML Policy Review', location: 'Legal Office' },
                    { id: 'IC-07', description: 'Review data privacy policies for customer data.', priority: 'High', riskLevel: 'High', proof: 'Privacy Policy Review', location: 'Legal Office' },
                    { id: 'IC-08', description: 'Verify compliance with labor laws for all staff.', priority: 'High', riskLevel: 'High', proof: 'Labor Law Audit', location: 'HR Office' },
                    { id: 'IC-09', description: 'Maintain records of all compliance-related training.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR Office' },
                    { id: 'IC-10', description: 'Conduct an annual compliance risk assessment.', priority: 'High', riskLevel: 'High', proof: 'Risk Assessment Report', location: 'Compliance Office' },
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
            { text: "Prevent fires and damage with meticulous demo unit safety and electrical load audits.", icon: <Zap /> },
            { text: "Secure high-value assets with serialized tagging, warranty management, and inventory control.", icon: <Barcode /> },
            { text: "Ensure environmental compliance with a formal e-waste handling and disposal process.", icon: <Recycle /> },
            { text: "Protect customer data and prevent fraud with PCI-DSS compliant payment security.", icon: <ShieldCheck /> },
            { text: "Enhance customer trust through a standardized and professional demo and returns process.", icon: <UserCheck /> },
            { text: "Optimize your back-of-house with safe and efficient stockroom organization checklists.", icon: <Package /> }
        ],
        previewScenario: {
            title: "Preventing a Showroom Fire",
            description: "An electrical fire breaks out overnight in a showroom, caused by a faulty demo laptop. This scenario demonstrates how checklists for electrical safety and closing procedures can prevent such a catastrophe.",
            tasks: [
                { id: 'DEMO-08', description: "The 'Demo Unit' checklist includes a daily check for overheating charging stations, which would have identified the faulty laptop charger before it could cause a fire.", sourceChecklist: "Demo Unit Pre-Opening Checklist", priority: 'High' },
                { id: 'ELEC-01', description: "The 'Electrical Safety' SOP mandates periodic Portable Appliance Testing (PAT), which would have formally identified the faulty device and removed it from service.", sourceChecklist: "Electrical Safety & PAT Testing", priority: 'High' },
                { id: 'POS-RECON-03', description: "The 'POS Reconciliation' checklist includes verifying that CCTV is operational, providing crucial evidence for any incident investigation.", sourceChecklist: "POS & Payment Reconciliation", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Electronics & Safety Standards",
            standards: [
                { name: "Electrical Safety Standards", description: "Compliance with national and local electrical codes." },
                { name: "Fire Safety Act", description: "Adherence to fire prevention and safety regulations." },
                { name: "ISO 45001", description: "International standard for occupational health and safety." },
                { name: "OSHA", description: "Guidelines for electrical safety in the workplace." }
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
                    { id: 'DEMO-01', description: 'Check all power cables for frays or damage.', priority: 'High', riskLevel: 'High', proof: 'Visual Inspection Log', location: 'Sales Floor', consequence: 'Prevents electrical shorts and potential fire hazards.' },
                    { id: 'DEMO-02', description: 'Ensure all demo units are connected via surge protectors.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor', consequence: 'Protects expensive demo units from power surges, reducing equipment loss.' },
                    { id: 'DEMO-03', description: 'Verify all wiring is neatly concealed to prevent trip hazards.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor', consequence: 'Prevents customer or staff injuries and potential lawsuits.' },
                    { id: 'DEMO-04', description: 'Check that all demo devices have the latest firmware and demo content loaded.', priority: 'High', riskLevel: 'Low', proof: 'Firmware Version Check', location: 'Sales Floor', consequence: 'Ensures a consistent and positive customer experience with the latest features.' },
                    { id: 'DEMO-05', description: 'Ensure all security straps and covers for demo units are intact.', priority: 'High', riskLevel: 'High', proof: 'Security Device Log', location: 'Sales Floor', consequence: 'Deters theft of high-value demo merchandise.' },
                    { id: 'DEMO-06', description: 'Clean screens and surfaces of all demo units.', priority: 'Medium', riskLevel: 'Low', proof: 'Cleaning Log', location: 'Sales Floor' },
                    { id: 'DEMO-07', description: 'Verify all demo units are powered on and functional.', priority: 'High', riskLevel: 'Medium', proof: 'Functionality Check', location: 'Sales Floor' },
                    { id: 'DEMO-08', description: 'Check for any signs of overheating on charging stations.', priority: 'High', riskLevel: 'High', proof: 'Thermal Check', location: 'Sales Floor' },
                    { id: 'DEMO-09', description: 'Ensure all pricing and feature labels are correct and visible.', priority: 'High', riskLevel: 'Low', proof: 'Label Audit', location: 'Sales Floor' },
                    { id: 'DEMO-10', description: 'Report any faulty demo units for immediate replacement.', priority: 'High', riskLevel: 'Medium', proof: 'Fault Report', location: 'System' },
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
                    { id: 'ELEC-06', description: 'Inspect all extension cords and power strips for damage.', priority: 'High', riskLevel: 'High', proof: 'Cord Inspection Log', location: 'Store-wide' },
                    { id: 'ELEC-07', description: 'Ensure all electrical panels are accessible and not blocked.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Electrical Rooms' },
                    { id: 'ELEC-08', description: 'Train staff on basic electrical safety and how to report issues.', priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Office' },
                    { id: 'ELEC-09', description: 'Use only certified electricians for any repair work.', priority: 'High', riskLevel: 'High', proof: 'Vendor Certification', location: 'Office' },
                    { id: 'ELEC-10', description: 'Conduct an annual thermal imaging audit of electrical panels.', priority: 'High', riskLevel: 'High', proof: 'Thermal Imaging Report', location: 'Office' },
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
                    { id: 'ASSET-06', description: 'Use barcode scanners for accurate inventory counts.', priority: 'High', riskLevel: 'High', proof: 'Scan Logs', location: 'System' },
                    { id: 'ASSET-07', description: 'Secure the stockroom with restricted access.', priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Stockroom' },
                    { id: 'ASSET-08', description: 'Track items sent for repair or to other locations.', priority: 'High', riskLevel: 'High', proof: 'Movement Log', location: 'System' },
                    { id: 'ASSET-09', description: 'Investigate root causes of inventory discrepancies.', priority: 'High', riskLevel: 'High', proof: 'Investigation Report', location: 'Office' },
                    { id: 'ASSET-10', description: 'Manager to sign off on all inventory adjustments.', priority: 'High', riskLevel: 'High', proof: 'Signed Adjustment Form', location: 'System' },
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
                    { id: 'POS-RECON-06', description: 'Reconcile gift card and voucher sales.', priority: 'High', riskLevel: 'Medium', proof: 'Voucher Log', location: 'System' },
                    { id: 'POS-RECON-07', description: 'Verify cashier logins and logouts for each shift.', priority: 'High', riskLevel: 'Medium', proof: 'Shift Log', location: 'System' },
                    { id: 'POS-RECON-08', description: 'Report any cash discrepancies immediately.', priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Office' },
                    { id: 'POS-RECON-09', description: 'Follow PCI DSS guidelines for all card transactions.', priority: 'High', riskLevel: 'High', proof: 'PCI Compliance Audit', location: 'Office' },
                    { id: 'POS-RECON-10', description: 'Use counterfeit detection on all cash transactions.', priority: 'High', riskLevel: 'High', proof: 'Counterfeit Check', location: 'POS' },
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
                    { id: 'EWaste-06', description: 'Securely wipe data from all devices before disposal.', priority: 'High', riskLevel: 'High', proof: 'Data Wipe Log', location: 'IT Office' },
                    { id: 'EWaste-07', description: 'Store e-waste in a secure, designated area.', priority: 'High', riskLevel: 'Medium', proof: 'Storage Area Check', location: 'Stockroom' },
                    { id: 'EWaste-08', description: 'Follow all local environmental regulations for e-waste.', priority: 'High', riskLevel: 'High', proof: 'Regulatory Checklist', location: 'Office' },
                    { id: 'EWaste-09', description: 'Schedule regular pickups with the e-waste vendor.', priority: 'High', riskLevel: 'Medium', proof: 'Pickup Schedule', location: 'Office' },
                    { id: 'EWaste-10', description: 'Audit the e-waste process annually for compliance.', priority: 'High', riskLevel: 'High', proof: 'Annual Audit Report', location: 'Office' },
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
                    { id: 'WRM-06', description: 'Obtain customer sign-off upon collection of repaired item.', priority: 'High', riskLevel: 'Medium', proof: 'Collection Form', location: 'Service Desk' },
                    { id: 'WRM-07', description: 'Manage inventory of spare parts for common repairs.', priority: 'High', riskLevel: 'Medium', proof: 'Spare Parts Inventory', location: 'Stockroom' },
                    { id: 'WRM-08', description: 'Provide customer with a clear timeline for repairs.', priority: 'High', riskLevel: 'Low', proof: 'Repair Estimate Form', location: 'Service Desk' },
                    { id: 'WRM-09', description: 'Process payment for repairs accurately.', priority: 'High', riskLevel: 'Medium', proof: 'Invoice', location: 'POS' },
                    { id: 'WRM-10', description: 'Log all repair details for warranty and history purposes.', priority: 'High', riskLevel: 'Medium', proof: 'Service History', location: 'System' },
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
                    { id: 'SO-06', description: 'Maintain a clean and dust-free environment.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Stockroom' },
                    { id: 'SO-07', description: 'Check for any pest activity.', priority: 'High', riskLevel: 'High', proof: 'Pest Control Log', location: 'Stockroom' },
                    { id: 'SO-08', description: 'Ensure proper lighting in all areas of the stockroom.', priority: 'High', riskLevel: 'Medium', proof: 'Lighting Check', location: 'Stockroom' },
                    { id: 'SO-09', description: 'Organize items by brand, category, or SKU for easy picking.', priority: 'High', riskLevel: 'Medium', proof: 'Organization Plan', location: 'Stockroom' },
                    { id: 'SO-10', description: 'Conduct a weekly safety audit of the stockroom.', priority: 'High', riskLevel: 'High', proof: 'Safety Audit Report', location: 'Office' },
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
                    { id: 'FSA-01', description: 'Conduct monthly inspection of all fire extinguishers (pressure, expiry, accessibility).', priority: 'High', riskLevel: 'High', proof: 'Extinguisher Log', location: 'Store-wide' },
                    { id: 'FSA-02', description: 'Test smoke detectors and fire alarms.', priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Store-wide' },
                    { id: 'FSA-03', description: 'Ensure all emergency exits are clear and accessible.', priority: 'High', riskLevel: 'High', proof: 'Exit Inspection Log', location: 'Store-wide' },
                    { id: 'FSA-04', description: 'Check that all staff are trained on fire evacuation procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'FSA-05', description: 'Maintain a log of all fire safety audits for regulatory inspection.', priority: 'High', riskLevel: 'High', proof: 'Master Audit File', location: 'Office' },
                    { id: 'FSA-06', description: 'Check emergency lighting functionality.', priority: 'High', riskLevel: 'High', proof: 'Lighting Test Log', location: 'Store-wide' },
                    { id: 'FSA-07', description: 'Ensure fire safety signage is visible and correct.', priority: 'High', riskLevel: 'High', proof: 'Signage Audit', location: 'Entire Property' },
                    { id: 'FSA-08', description: 'Conduct a fire drill at least once every six months.', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Office' },
                    { id: 'FSA-09', description: 'Ensure sprinkler system is inspected annually by a certified vendor.', priority: 'High', riskLevel: 'High', proof: 'Vendor Certificate', location: 'Office' },
                    { id: 'FSA-10', description: 'Review and update the fire emergency plan annually.', priority: 'High', riskLevel: 'High', proof: 'Updated Plan', location: 'Office' },
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
        description: "An all-in-one operations and compliance pack for supermarkets, hypermarkets, and grocery retail chains, ensuring food safety, quality, and operational efficiency across outlets.",
        icon: <ShoppingBasket />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Supermarket Owners", "Grocery Store Proprietors", "Heads of Retail Operations", "Store Directors", "Department Heads (Fresh Food, Dairy)", "3PL Partners"],
        sampleItems: [
            { text: "Prevent spoilage and foodborne illness with robust cold chain and perishables temperature management.", icon: <Thermometer /> },
            { text: "Minimize waste and ensure freshness with a daily FIFO rotation and expiry date sweep process.", icon: <Recycle /> },
            { text: "Maintain a safe and inviting store with checklists for hygiene, cleaning, and rapid spill response.", icon: <SprayCan /> },
            { text: "Protect your revenue through rigorous point-of-sale security and cash reconciliation.", icon: <DollarSign /> },
            { text: "Guarantee quality from the start with inbound supplier QC and receiving protocols.", icon: <PackageCheck /> },
            { text: "Ensure compliance and fair trade with weighing scale calibration and Legal Metrology checks.", icon: <Scale /> }
        ],
        previewScenario: {
            title: "Averting a Food Poisoning Outbreak",
            description: "A batch of expired yogurt remains on the shelf, leading to a customer complaint of food poisoning. This scenario shows how checklists work together to prevent a brand-damaging outbreak.",
            tasks: [
                { id: 'SC-FIFO-01', description: "The 'FIFO & Expiry Sweep' SOP mandates a daily check of high-risk items like dairy, ensuring the yogurt would have been removed before it could be sold.", sourceChecklist: "FIFO & Expiry Sweep SOP", priority: 'High' },
                { id: 'SC-COLD-01', description: "The 'Cold Chain Management' log would provide a verifiable record of the chiller's temperature, proving the product was stored correctly and the issue was expiry, not spoilage.", sourceChecklist: "Cold Chain & Perishables Management", priority: 'High' },
                { id: 'SC-POS-02', description: "If a complaint is made, the 'POS Security' checklist, which includes CCTV monitoring at billing, can help trace the transaction and identify the exact product batch involved.", sourceChecklist: "POS Security & Reconciliation", priority: 'Medium' }
            ]
        },
        globalStandards: {
            title: "Aligned with Food & Retail Standards",
            standards: [
                { name: "FSSAI", description: "Compliance with Indian food safety regulations." },
                { name: "Legal Metrology", description: "Ensures accurate weights and measures for packaged goods." },
                { name: "ISO 22000 / HACCP", description: "International standard for food safety management." },
                { name: "OSHA Retail Safety", description: "Guidelines for workplace safety in retail environments." }
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
                    { id: 'SC-COLD-01', description: 'Log temperatures of all chillers and freezers twice daily.', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Sales Floor/Stockroom', consequence: 'A temperature failure can lead to rapid bacterial growth, causing food spoilage, waste, and severe foodborne illness outbreaks.' },
                    { id: 'SC-COLD-02', description: 'Verify functionality of temperature alarms weekly.', priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Cold Storage', consequence: 'A non-functional alarm means a temperature failure can go unnoticed for hours, leading to catastrophic inventory loss.' },
                    { id: 'SC-COLD-03', description: 'Check door seals on all refrigerated units daily.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'Sales Floor', consequence: 'Damaged seals lead to energy waste and make it harder to maintain safe temperatures, increasing operational costs and spoilage risk.' },
                    { id: 'SC-COLD-04', description: 'Ensure backup power for cold storage is tested weekly.', priority: 'High', riskLevel: 'High', proof: 'Generator Test Log', location: 'Back of House', consequence: 'During a power outage, failure of backup power can result in the loss of all perishable inventory, a major financial blow.' },
                    { id: 'SC-COLD-05', description: 'Document any temperature excursions and the corrective actions taken.', priority: 'High', riskLevel: 'High', proof: 'Corrective Action Report', location: 'Office', consequence: 'Lack of documentation makes it impossible to prove due diligence during a health inspection or trace the cause of a spoilage event.' },
                    { id: 'SC-COLD-06', description: 'Ensure goods are moved to cold storage immediately upon receipt.', priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Bay' },
                    { id: 'SC-COLD-07', description: 'Clean and sanitize all refrigerated units weekly.', priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Sales Floor/Stockroom' },
                    { id: 'SC-COLD-08', description: 'Do not overload refrigerated units to allow for proper air circulation.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor/Stockroom' },
                    { id: 'SC-COLD-09', description: 'Train staff on cold chain management procedures.', priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'Office' },
                    { id: 'SC-COLD-10', description: 'Calibrate thermometers quarterly.', priority: 'High', riskLevel: 'High', proof: 'Calibration Certificates', location: 'Office' },
                ]
            },
            {
                title: "FIFO & Expiry Sweep SOP",
                department: "Inventory",
                frequency: "Daily",
                role: "Floor Staff",
                icon: <Recycle />,
                summary: "Continuous temperature log (digital preferred), manual twice-daily checks with signatures, alarm escalation to manager when outside threshold.",
                tasks: [
                    { id: 'SC-FIFO-01', description: 'Conduct daily expiry sweeps for high-risk items like dairy and bread.', priority: 'High', riskLevel: 'High', proof: 'Sweep Log', location: 'Sales Floor' },
                    { id: 'SC-FIFO-02', description: 'Ensure First-In, First-Out (FIFO) rotation during shelf replenishment.', priority: 'High', riskLevel: 'High', proof: 'Supervisor Audit', location: 'Sales Floor' },
                    { id: 'SC-FIFO-03', description: 'Follow markdown or quarantine procedures for near-expiry items.', priority: 'High', riskLevel: 'Medium', proof: 'Markdown Log', location: 'Sales Floor' },
                    { id: 'SC-FIFO-04', description: 'Remove and log all expired products from shelves immediately.', priority: 'High', riskLevel: 'High', proof: 'Expired Goods Log', location: 'Back of House' },
                    { id: 'SC-FIFO-05', description: 'Train staff on how to read and interpret expiry date codes.', priority: 'High', riskLevel: 'Medium', proof: 'Training Record', location: 'Office' },
                    { id: 'SC-FIFO-06', description: 'Donate or dispose of expired goods according to policy.', priority: 'High', riskLevel: 'Medium', proof: 'Donation/Disposal Log', location: 'Back of House' },
                    { id: 'SC-FIFO-07', description: 'Audit stockroom for FIFO compliance weekly.', priority: 'High', riskLevel: 'High', proof: 'Stockroom Audit Log', location: 'Stockroom' },
                    { id: 'SC-FIFO-08', description: 'Review reports on expired goods to identify purchasing issues.', priority: 'High', riskLevel: 'Medium', proof: 'Analysis Report', location: 'Office' },
                    { id: 'SC-FIFO-09', description: 'Ensure near-expiry items are clearly marked for customers.', priority: 'High', riskLevel: 'Low', proof: 'Signage Check', location: 'Sales Floor' },
                    { id: 'SC-FIFO-10', description: 'Manager to sign off on all expired goods disposal.', priority: 'High', riskLevel: 'High', proof: 'Signed Disposal Form', location: 'Office' },
                ]
            },
            {
                title: "Store Cleaning & Spill Response",
                department: "Housekeeping",
                frequency: "Hourly",
                role: "Housekeeping Staff",
                icon: <SprayCan />,
                summary: "Daily surface sanitization, weekly deep clean of hood & ducting, monthly pest control report signed by vendor.",
                tasks: [
                    { id: 'SC-CLEAN-01', description: 'Perform and log hourly checks of all aisles for spills or hazards.', priority: 'High', riskLevel: 'High', proof: 'Aisle Check Log', location: 'Sales Floor' },
                    { id: 'SC-CLEAN-02', description: 'Deploy "Wet Floor" signs immediately for any spills.', priority: 'High', riskLevel: 'High', proof: 'CCTV Footage', location: 'Sales Floor' },
                    { id: 'SC-CLEAN-03', description: 'Log all spill incidents with time, location, and cleanup action.', priority: 'High', riskLevel: 'Medium', proof: 'Spill Incident Log', location: 'Office' },
                    { id: 'SC-CLEAN-04', description: 'Inspect and clean restrooms hourly.', priority: 'High', riskLevel: 'Medium', proof: 'Restroom Cleaning Log', location: 'Restrooms' },
                    { id: 'SC-CLEAN-05', description: 'Ensure cleaning equipment is sanitized and stored correctly.', priority: 'Medium', riskLevel: 'Low', proof: 'Storage Inspection', location: 'Janitor Closet' },
                    { id: 'SC-CLEAN-06', description: 'Deep clean high-traffic areas daily after closing.', priority: 'High', riskLevel: 'Medium', proof: 'Deep Clean Log', location: 'Sales Floor' },
                    { id: 'SC-CLEAN-07', description: 'Check and empty all trash bins regularly.', priority: 'High', riskLevel: 'Low', proof: 'Waste Bin Check', location: 'Sales Floor' },
                    { id: 'SC-CLEAN-08', description: 'Sanitize shopping carts and baskets daily.', priority: 'High', riskLevel: 'Medium', proof: 'Sanitization Log', location: 'Entrance' },
                    { id: 'SC-CLEAN-09', description: 'Use correct cleaning chemicals for different surfaces.', priority: 'High', riskLevel: 'Medium', proof: 'Chemical Usage Log', location: 'Janitor Closet' },
                    { id: 'SC-CLEAN-10', description: 'Train staff on spill response procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
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
                    { id: 'SC-INBOUND-06', description: 'Reject deliveries that do not meet quality standards.', priority: 'High', riskLevel: 'High', proof: 'Rejection Note', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-07', description: 'Verify FSSAI license and other required documents from supplier.', priority: 'High', riskLevel: 'High', proof: 'Document Check', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-08', description: 'Update inventory system upon receipt of goods.', priority: 'High', riskLevel: 'High', proof: 'System Entry Log', location: 'System' },
                    { id: 'SC-INBOUND-09', description: 'Clean receiving area after each delivery.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-10', description: 'Report any discrepancies to the procurement team.', priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'System' },
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
                    { id: 'SC-POS-06', description: 'Securely store cash in a safe.', priority: 'High', riskLevel: 'High', proof: 'Safe Log', location: 'Cash Office' },
                    { id: 'SC-POS-07', description: 'Use counterfeit detection for large cash transactions.', priority: 'High', riskLevel: 'High', proof: 'Counterfeit Check', location: 'POS' },
                    { id: 'SC-POS-08', description: 'Train cashiers on fraud prevention techniques.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'SC-POS-09', description: 'Limit cash in drawers to a minimum amount.', priority: 'High', riskLevel: 'High', proof: 'Cash Limit Policy', location: 'Office' },
                    { id: 'SC-POS-10', description: 'Investigate cash discrepancies immediately.', priority: 'High', riskLevel: 'High', proof: 'Investigation Report', location: 'Office' },
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
                    { id: 'WSC-06', description: 'Keep scales clean and free of debris.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Sales Floor' },
                    { id: 'WSC-07', description: 'Verify scale accuracy with standard weights weekly.', priority: 'High', riskLevel: 'High', proof: 'Weight Check Log', location: 'Office' },
                    { id: 'WSC-08', description: 'Ensure scales are on a level surface.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'WSC-09', description: 'Protect scales from physical damage.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'WSC-10', description: 'Comply with all Legal Metrology regulations.', priority: 'High', riskLevel: 'High', proof: 'Compliance Audit', location: 'Office' },
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
                    { id: 'BHF-06', description: 'Label all prepared foods with preparation time and date.', priority: 'High', riskLevel: 'High', proof: 'Label Check', location: 'Bakery/Kitchen' },
                    { id: 'BHF-07', description: 'Clean and sanitize all surfaces and equipment after use.', priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Bakery/Kitchen' },
                    { id: 'BHF-08', description: 'Check for allergens and provide clear labeling.', priority: 'High', riskLevel: 'High', proof: 'Allergen Label Audit', location: 'Hot Food Section' },
                    { id: 'BHF-09', description: 'Calibrate food thermometers daily.', priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Bakery/Kitchen' },
                    { id: 'BHF-10', description: 'Train staff on food safety procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
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
                    { id: 'WP-01', description: "Ensure CCTV is working well all the time", priority: 'High', riskLevel: 'High', proof: 'Waste Segregation Audit', location: 'Waste Area' },
                    { id: 'WP-02', description: "Follow a schedule for cleaning and sanitizing all waste bins.", priority: 'High', riskLevel: 'Medium', proof: 'Bin Cleaning Log', location: 'Waste Area' },
                    { id: 'WP-03', description: "Inspect pest control traps and bait stations weekly.", priority: 'High', riskLevel: 'High', proof: 'Pest Trap Log', location: 'Various' },
                    { id: 'WP-04', description: "Review and file the monthly service report from the pest control vendor.", priority: 'High', riskLevel: 'High', proof: 'Vendor Report', location: 'Office' },
                    { id: 'WP-05', description: "Keep external waste area clean to deter pests.", priority: 'High', riskLevel: 'High', proof: 'Photo Log', location: 'External Area' },
                    { id: 'WP-06', description: "Ensure all drains are clean and free-flowing.", priority: 'High', riskLevel: 'Medium', proof: 'Drain Cleaning Log', location: 'Kitchen' },
                    { id: 'WP-07', description: "Check for any signs of pest activity (droppings, gnaw marks).", priority: 'High', riskLevel: 'High', proof: 'Pest Activity Log', location: 'Various' },
                    { id: 'WP-08', description: "Ensure all doors and windows are properly sealed to prevent pest entry.", priority: 'High', riskLevel: 'High', proof: 'Structural Audit', location: 'Perimeter' },
                    { id: 'WP-09', description: "Train staff on pest awareness and reporting.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'WP-10', description: "Dispose of waste in a timely manner to avoid accumulation.", priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Waste Area' },
                ]
            },
                
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
            { text: "Implement a daily facility walkthrough for proactive issue identification.", icon: <UserCheck /> },
            { text: "Master vendor performance with preventive maintenance planning and SLA tracking.", icon: <Wrench /> },
            { text: "Ensure a pristine and safe environment with housekeeping, hygiene, and pest control audits.", icon: <Sparkles /> },
            { text: "Secure your premises with robust visitor management and access control protocols.", icon: <KeyRound /> },
            { text: "Optimize costs and sustainability through a utilities, energy, and water management system.", icon: <Zap /> },
            { text: "Guarantee business continuity with critical systems (UPS, HVAC) and redundancy testing.", icon: <Cog /> }
        ],
        previewScenario: {
            title: "Averting a Data Center Catastrophe",
            description: "A major IT campus in Hyderabad faced a multi-crore loss when an HVAC unit failed, threatening to overheat a critical data center. This scenario shows how our checklists prevent this.",
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
                { name: "NBC / Fire Safety Act", description: "Compliance with National Building Code and fire safety laws." },
                { name: "ISO 45001 / BOCW", description: "For occupational health, safety, and construction worker welfare." },
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
                    {id: 'DFW-01', description: "Check cleanliness and orderliness of all common areas (lobbies, cafeterias).", priority: 'High', riskLevel: 'Low', proof: 'Photo Log', location: 'Common Areas', consequence: 'Ensures a positive impression for employees and visitors and maintains brand standards.'},
                    {id: 'DFW-02', description: "Inspect restrooms for hygiene, supplies, and any plumbing issues.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Log', location: 'Restrooms', consequence: 'Prevents health issues and addresses plumbing problems before they become major leaks.'},
                    {id: 'DFW-03', description: "Verify HVAC system status from BMS and check for any alarms.", priority: 'High', riskLevel: 'High', proof: 'BMS Screenshot', location: 'BMS Room', consequence: 'Early detection of HVAC faults prevents system failures that can impact employee comfort or damage critical equipment like servers.'},
                    {id: 'DFW-04', description: "Check for any fused lights or faulty signage and raise a ticket.", priority: 'Medium', riskLevel: 'Low', proof: 'Maintenance Ticket', location: 'Entire Facility', consequence: 'Maintains a safe and professional environment. Faulty exit signs are a major fire safety violation.'},
                    {id: 'DFW-05', description: "Ensure all emergency exit paths are clear and unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Photo of exit path', location: 'Stairwells/Exits', consequence: 'This is a critical life-safety task. A blocked exit can be fatal during a fire or other emergency evacuation.'},
                    {id: 'DFW-06', description: "Check status of water coolers and pantry equipment.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Pantries'},
                    {id: 'DFW-07', description: 'Inspect exterior of the building for any issues (e.g., broken glass, leaks).', priority: 'Medium', riskLevel: 'Medium', proof: 'Exterior Check Log', location: 'Building Perimeter' },
                    {id: 'DFW-08', description: "Check security desk for any overnight incident reports.", priority: 'High', riskLevel: 'High', proof: 'Incident Log Review', location: 'Security Desk' },
                    {id: 'DFW-09', description: 'Ensure landscaping is well-maintained.', priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Exterior' },
                    {id: 'DFW-10', description: 'Confirm all access control systems are functional.', priority: 'High', riskLevel: 'High', proof: 'Access Control System Check', location: 'Entrances' },
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
                    {id: 'PM-SLA-06', description: 'Review vendor invoices against work completed.', priority: 'High', riskLevel: 'High', proof: 'Invoice Audit', location: 'Finance Office' },
                    {id: 'PM-SLA-07', description: 'Ensure all vendor contracts are current and valid.', priority: 'High', riskLevel: 'High', proof: 'Contract Review', location: 'Legal Office' },
                    {id: 'PM-SLA-08', description: 'Plan PM activities to minimize disruption to operations.', priority: 'High', riskLevel: 'Medium', proof: 'PM Schedule', location: 'Office' },
                    {id: 'PM-SLA-09', description: 'Maintain a stock of critical spare parts.', priority: 'High', riskLevel: 'High', proof: 'Spares Inventory', location: 'Stores' },
                    {id: 'PM-SLA-10', description: 'Analyze breakdown trends to optimize PM schedule.', priority: 'High', riskLevel: 'High', proof: 'Trend Analysis Report', location: 'Office' },
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
                    {id: 'HKV-06', description: 'Ensure pest control measures are in place and effective.', priority: 'High', riskLevel: 'High', proof: 'Pest Control Log', location: 'Various' },
                    {id: 'HKV-07', description: 'Check for any damages or stains on furniture and carpets.', priority: 'Medium', riskLevel: 'Low', proof: 'Damage Report', location: 'Various' },
                    {id: 'HKV-08', description: 'Verify that cleaning staff are using the correct PPE.', priority: 'High', riskLevel: 'Medium', proof: 'PPE Audit', location: 'Various' },
                    {id: 'HKV-09', description: 'Train housekeeping staff on new cleaning techniques or chemicals.', priority: 'Medium', riskLevel: 'Low', proof: 'Training Log', location: 'Office' },
                    {id: 'HKV-10', description: 'Get feedback from employees on the cleanliness of the facility.', priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Survey', location: 'System' },
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
                    {id: 'SEC-VIS-06', description: 'Perform regular patrols of the facility perimeter.', priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Perimeter' },
                    {id: 'SEC-VIS-07', description: 'Test alarm systems weekly.', priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Security Room' },
                    {id: 'SEC-VIS-08', description: 'Manage parking and vehicle access.', priority: 'High', riskLevel: 'Medium', proof: 'Parking Log', location: 'Parking Area' },
                    {id: 'SEC-VIS-09', description: 'Screen all incoming mail and packages.', priority: 'High', riskLevel: 'High', proof: 'Mail Screening Log', location: 'Mail Room' },
                    {id: 'SEC-VIS-10', description: 'Maintain an incident log for all security-related events.', priority: 'High', riskLevel: 'High', proof: 'Security Incident Log', location: 'Security Room' },
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
                    {id: 'UTIL-06', description: 'Check HVAC system for unusual noises or vibrations.', priority: 'High', riskLevel: 'High', proof: 'HVAC Inspection Log', location: 'HVAC Rooms' },
                    {id: 'UTIL-07', description: 'Monitor lighting system for any faults.', priority: 'Medium', riskLevel: 'Low', proof: 'Lighting Log', location: 'Entire Facility' },
                    {id: 'UTIL-08', description: 'Analyze water usage to detect any potential leaks.', priority: 'High', riskLevel: 'Medium', proof: 'Water Usage Report', location: 'Office' },
                    {id: 'UTIL-09', description: 'Ensure all utility rooms are clean and accessible.', priority: 'High', riskLevel: 'Medium', proof: 'Room Inspection', location: 'Utility Rooms' },
                    {id: 'UTIL-10', description: 'Report any utility-related issues immediately.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'System' },
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
                    { id: 'TSC-06', description: 'Review and update the disaster recovery plan.', priority: 'High', riskLevel: 'High', proof: 'Updated DR Plan', location: 'Office' },
                    { id: 'TSC-07', description: 'Ensure all critical staff are trained on the DR plan.', priority: 'High', riskLevel: 'High', proof: 'DR Training Log', location: 'Office' },
                    { id: 'TSC-08', description: 'Verify offsite backup integrity.', priority: 'High', riskLevel: 'High', proof: 'Backup Restore Test', location: 'Test Environment' },
                    { id: 'TSC-09', description: 'Test emergency communication systems.', priority: 'High', riskLevel: 'High', proof: 'Comms Test Log', location: 'Office' },
                    { id: 'TSC-10', description: 'Document all test results and corrective actions.', priority: 'High', riskLevel: 'High', proof: 'Test Report', location: 'Office' },
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
                    { id: 'INC-REP-04', description: "Conduct a root-cause analysis (RCA) for all major incidents.", priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'Office' },
                    { id: 'INC-REP-05', description: "Track all corrective and preventive actions (CAPAs) to closure.", priority: 'High', riskLevel: 'High', proof: 'CAPA Tracker', location: 'System' },
                    { id: 'INC-REP-06', description: 'Communicate incident status to relevant stakeholders.', priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'System' },
                    { id: 'INC-REP-07', description: 'Preserve all evidence related to the incident.', priority: 'High', riskLevel: 'High', proof: 'Evidence Log', location: 'System' },
                    { id: 'INC-REP-08', description: 'Generate incident reports for management review.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'System' },
                    { id: 'INC-REP-09', description: 'Review incident trends to identify recurring issues.', priority: 'High', riskLevel: 'High', proof: 'Trend Analysis', location: 'System' },
                    { id: 'INC-REP-10', description: 'Update procedures based on lessons learned from incidents.', priority: 'High', riskLevel: 'High', proof: 'Procedure Update Log', location: 'System' },
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
                    { id: 'EHS-06', description: 'Check PPE availability and usage.', priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Various' },
                    { id: 'EHS-07', description: 'Inspect fire safety equipment.', priority: 'High', riskLevel: 'High', proof: 'Fire Equipment Log', location: 'Entire Facility' },
                    { id: 'EHS-08', description: 'Ensure proper handling and storage of chemicals.', priority: 'High', riskLevel: 'High', proof: 'Chemical Safety Audit', location: 'Stores' },
                    { id: 'EHS-09', description: 'Check ergonomics of workstations.', priority: 'Medium', riskLevel: 'Medium', proof: 'Ergonomics Audit', location: 'Workstations' },
                    { id: 'EHS-10', description: 'Maintain all EHS records for regulatory audits.', priority: 'High', riskLevel: 'High', proof: 'EHS Record File', location: 'Office' },
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
            { text: "Never miss a deadline with a master statutory filing calendar and automated reminders.", icon: <CalendarDays /> },
            { text: "Ensure company policies are consistently enforced with a robust management and employee acknowledgement system.", icon: <UserCheck /> },
            { text: "Minimize legal risk with a structured contract lifecycle management process and clause checklist.", icon: <FileCheck /> },
            { text: "Proactively identify and fix compliance gaps with an internal audit and remediation (CAPA) workflow.", icon: <Bug /> },
            { text: "Foster a safe and ethical workplace with a formal whistleblowing and investigation process.", icon: <Siren /> },
            { text: "Improve corporate governance with a professional system for board meeting preparation and minute taking.", icon: <BriefcaseBusiness /> }
        ],
        previewScenario: {
            title: "Surviving a Surprise Regulatory Audit",
            description: "A regulatory body arrives for a surprise audit, requesting all compliance documents for the past year. Instead of panic, this scenario shows how checklists ensure you are always audit-ready.",
            tasks: [
                { id: 'CAL-08', description: "The 'Statutory Calendar' SOP ensures a central repository of all filed returns and acknowledgements is maintained and easily accessible.", sourceChecklist: "Statutory Calendar SOP", priority: 'High' },
                { id: 'CON-03', description: "The 'Contract Intake & Approval' checklist means all key contracts are stored in a central register, ready for inspection.", sourceChecklist: "Contract Intake & Approval", priority: 'High' },
                { id: 'POL-03', description: "The 'Policy Review & Acknowledgement' log provides digital proof that all employees have read and acknowledged critical policies, a key audit requirement.", sourceChecklist: "Policy Review & Acknowledgement", priority: 'High' }
            ]
        },
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
                    {id: 'CAL-01', description: "Update master calendar with all statutory filing due dates.", priority: 'High', riskLevel: 'High', proof: 'Compliance Calendar', location: 'System', consequence: 'Missing a statutory deadline can result in significant financial penalties and legal action.'},
                    {id: 'CAL-02', description: "Assign an owner for each compliance task.", priority: 'High', riskLevel: 'High', proof: 'Responsibility Matrix', location: 'System', consequence: 'Without clear ownership, critical tasks can be missed, leading to non-compliance.'},
                    {id: 'CAL-03', description: "Set automated reminders for 15, 7, and 2 days before each due date.", priority: 'High', riskLevel: 'Medium', proof: 'Reminder System Config', location: 'System', consequence: 'Prevents last-minute rushes and reduces the risk of human error in forgetting a deadline.'},
                    {id: 'CAL-04', description: 'Confirm filings are completed and save acknowledgement receipts.', priority: 'High', riskLevel: 'High', proof: 'Filed Returns Folder', location: 'System', consequence: 'Provides a clear, auditable trail to prove compliance during any regulatory inspection.' },
                    {id: 'CAL-05', description: 'Hold a monthly meeting to review upcoming compliance deadlines.', priority: 'Medium', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Office', consequence: 'Ensures cross-functional alignment and proactive management of compliance tasks.' },
                    {id: 'CAL-06', description: 'Review any changes in tax or corporate law.', priority: 'High', riskLevel: 'High', proof: 'Legal Update Summary', location: 'System' },
                    {id: 'CAL-07', description: 'Liaise with external auditors/consultants for filings.', priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'System' },
                    {id: 'CAL-08', description: 'Maintain a central repository for all filed documents.', priority: 'High', riskLevel: 'High', proof: 'Document Repository', location: 'System' },
                    {id: 'CAL-09', description: 'Track payment of statutory dues.', priority: 'High', riskLevel: 'High', proof: 'Payment Records', location: 'System' },
                    {id: 'CAL-10', description: 'Prepare a monthly compliance report for management.', priority: 'High', riskLevel: 'High', proof: 'Compliance Report', location: 'System' },
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
                    {id: 'POL-06', description: 'Communicate policy changes to all employees.', priority: 'High', riskLevel: 'Medium', proof: 'Communication Record', location: 'System' },
                    {id: 'POL-07', description: 'Train employees on new or complex policies.', priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'System' },
                    {id: 'POL-08', description: 'Ensure policies are aligned with current laws and regulations.', priority: 'High', riskLevel: 'High', proof: 'Legal Review', location: 'System' },
                    {id: 'POL-09', description: 'Archive old policy versions.', priority: 'Medium', riskLevel: 'Low', proof: 'Archive Log', location: 'System' },
                    {id: 'POL-10', description: 'Get feedback from employees on policy clarity and effectiveness.', priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Survey', location: 'System' },
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
                    {id: 'CON-06', description: 'Ensure all contracts are reviewed by the legal department.', priority: 'High', riskLevel: 'High', proof: 'Legal Approval', location: 'System' },
                    {id: 'CON-07', description: 'Standardize contract templates where possible.', priority: 'High', riskLevel: 'Medium', proof: 'Template Library', location: 'System' },
                    {id: 'CON-08', description: 'Track contract negotiations and versions.', priority: 'High', riskLevel: 'Medium', proof: 'Version History', location: 'System' },
                    {id: 'CON-09', description: 'Ensure proper execution of contracts (signing, stamping).', priority: 'High', riskLevel: 'High', proof: 'Executed Contract', location: 'System' },
                    {id: 'CON-10', description: 'Audit contracts periodically for compliance.', priority: 'High', riskLevel: 'High', proof: 'Contract Audit Report', location: 'System' },
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
                    {id: 'AUD-06', description: 'Prepare a formal audit report for management.', priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'System' },
                    {id: 'AUD-07', description: 'Hold an audit closing meeting with the auditee.', priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Office' },
                    {id: 'AUD-08', description: 'Maintain all audit records for future reference.', priority: 'High', riskLevel: 'Medium', proof: 'Audit File', location: 'System' },
                    {id: 'AUD-09', description: 'Ensure auditors are independent of the process being audited.', priority: 'High', riskLevel: 'High', proof: 'Auditor Assignment', location: 'System' },
                    {id: 'AUD-10', description: 'Train internal auditors on audit methodologies.', priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'System' },
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
                    {id: 'WB-06', description: 'Maintain confidentiality of the investigation.', priority: 'High', riskLevel: 'High', proof: 'Confidentiality Agreements', location: 'Office' },
                    {id: 'WB-07', description: 'Document all investigation steps and evidence.', priority: 'High', riskLevel: 'High', proof: 'Investigation File', location: 'Office' },
                    {id: 'WB-08', description: 'Communicate the outcome to the whistleblower, if appropriate.', priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Office' },
                    {id: 'WB-09', description: 'Take disciplinary action if the complaint is substantiated.', priority: 'High', riskLevel: 'High', proof: 'Disciplinary Action Record', location: 'HR' },
                    {id: 'WB-10', description: 'Train all employees on the whistleblowing policy.', priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
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
                    { id: 'BM-06', description: 'Get minutes confirmed and signed in the next meeting.', priority: 'High', riskLevel: 'High', proof: 'Signed Minutes', location: 'Minute Book' },
                    { id: 'BM-07', description: 'Track action items from the meeting.', priority: 'High', riskLevel: 'Medium', proof: 'Action Tracker', location: 'System' },
                    { id: 'BM-08', description: 'Maintain all board meeting records.', priority: 'High', riskLevel: 'High', proof: 'Board Records File', location: 'Office' },
                    { id: 'BM-09', description: 'Ensure compliance with all secretarial standards.', priority: 'High', riskLevel: 'High', proof: 'Compliance Certificate', location: 'Office' },
                    { id: 'BM-10', description: 'Arrange logistics for the board meeting (venue, tech).', priority: 'Medium', riskLevel: 'Low', proof: 'Logistics Plan', location: 'Office' },
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
                    { id: 'DP-06', description: 'Ensure privacy policy is up-to-date and accessible.', priority: 'High', riskLevel: 'High', proof: 'Privacy Policy on Website', location: 'Website' },
                    { id: 'DP-07', description: 'Conduct a Data Protection Impact Assessment (DPIA) for new projects.', priority: 'High', riskLevel: 'High', proof: 'DPIA Report', location: 'System' },
                    { id: 'DP-08', description: 'Review and test data breach response plan.', priority: 'High', riskLevel: 'High', proof: 'Breach Drill Report', location: 'System' },
                    { id: 'DP-09', description: 'Verify data is retained only as long as necessary.', priority: 'High', riskLevel: 'High', proof: 'Data Retention Policy Audit', location: 'System' },
                    { id: 'DP-10', description: 'Ensure cross-border data transfers are compliant.', priority: 'High', riskLevel: 'High', proof: 'Transfer Mechanism documentation', location: 'System' },
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
                    { id: 'DA-06', description: 'Maintain confidentiality throughout the process.', priority: 'High', riskLevel: 'High', proof: 'Confidentiality Undertaking', location: 'HR File' },
                    { id: 'DA-07', description: 'Provide the employee with a copy of all relevant documents.', priority: 'High', riskLevel: 'High', proof: 'Acknowledgement of Receipt', location: 'Employee File' },
                    { id: 'DA-08', description: 'Ensure consistency in disciplinary actions for similar offenses.', priority: 'High', riskLevel: 'High', proof: 'Precedent Review', location: 'HR File' },
                    { id: 'DA-09', description: 'Consult with legal counsel for serious cases.', priority: 'High', riskLevel: 'High', proof: 'Legal Consultation Log', location: 'Legal Dept' },
                    { id: 'DA-10', description: 'Properly document the entire process from start to finish.', priority: 'High', riskLevel: 'High', proof: 'Complete Case File', location: 'HR File' },
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
            { text: "Enforce the principle of least privilege with quarterly user access reviews.", icon: <KeyRound /> },
            { text: "Stay ahead of threats with a structured workflow for vulnerability scanning and patch management.", icon: <Bug /> },
            { text: "Build resilience with proven playbooks for Business Continuity and Disaster Recovery (BC/DR) drills.", icon: <DatabaseZap /> },
            { text: "Master crisis management with step-by-step incident response and digital forensics playbooks.", icon: <Siren /> },
            { text: "Prevent costly data leaks by continuously monitoring and correcting your cloud security posture (CSPM).", icon: <Cloud /> },
            { text: "De-risk your supply chain with a formal security assessment process for all third-party vendors.", icon: <Handshake /> }
        ],
        previewScenario: {
            title: "Surviving a Ransomware Attack",
            description: "A ransomware attack encrypts critical company servers. Instead of paying the ransom, this scenario shows how a multi-layered checklist approach enables a swift recovery.",
            tasks: [
                { id: 'IR-02', description: "The 'Incident Response' checklist immediately triggers the isolation of affected servers, preventing the ransomware from spreading across the network.", sourceChecklist: "Incident Response Checklist", priority: 'High' },
                { id: 'BCDR-03', description: "The 'BC/DR & Backup' SOP, which mandates quarterly test restores, ensures the company has a recent, clean backup ready to be deployed.", sourceChecklist: "BC/DR & Backup SOP", priority: 'High' },
                { id: 'PMW-04', description: "After recovery, the 'Patch Management' workflow ensures the vulnerability that allowed the attack is immediately patched, preventing re-infection.", sourceChecklist: "Patch Management Workflow", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Cybersecurity Frameworks",
            standards: [
                { name: "ISO 27001", description: "The international standard for information security management." },
                { name: "NIST CSF", description: "The U.S. National Institute of Standards and Technology Cybersecurity Framework." },
                { name: "GDPR / DPDP Act 2023", description: "For data privacy compliance in Europe and India." },
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
                    {id: 'AR-01', description: "Generate a list of all users with privileged access.", priority: 'High', riskLevel: 'High', proof: 'User Access Report', location: 'System', consequence: 'Failing to review privileged access can lead to "privilege creep," where ex-employees or users who changed roles retain unnecessary, high-risk access.'},
                    {id: 'AR-02', description: "Manager of each privileged user to re-approve access quarterly.", priority: 'High', riskLevel: 'High', proof: 'Approval Emails/Tickets', location: 'System', consequence: 'Without business owner approval, IT may not know if access is still required, creating a significant security gap.'},
                    {id: 'AR-03', description: "Remove access for any stale accounts (e.g., inactive for 90 days).", priority: 'High', riskLevel: 'High', proof: 'Deactivation Log', location: 'System', consequence: 'Dormant or orphaned accounts are a primary target for hackers to gain a foothold in the network undetected.'},
                    {id: 'AR-04', description: "Verify that Multi-Factor Authentication (MFA) is enforced for all admin accounts.", priority: 'High', riskLevel: 'High', proof: 'MFA Configuration Report', location: 'System', consequence: 'A single compromised password for an admin account without MFA can lead to a full network takeover.'},
                    {id: 'AR-05', description: "Implement Just-In-Time (JIT) access for critical administrative tasks where possible.", priority: 'Medium', riskLevel: 'High', proof: 'JIT System Logs', location: 'System', consequence: 'Without JIT, admin accounts have standing privileges, increasing the window of opportunity for an attacker if the account is compromised.'},
                    {id: 'AR-06', description: 'Review third-party vendor access to your systems.', priority: 'High', riskLevel: 'High', proof: 'Vendor Access Review', location: 'System' },
                    {id: 'AR-07', description: 'Ensure the principle of least privilege is applied to all accounts.', priority: 'High', riskLevel: 'High', proof: 'Role-Based Access Control (RBAC) Audit', location: 'System' },
                    {id: 'AR-08', description: 'Audit changes to user access rights.', priority: 'High', riskLevel: 'High', proof: 'Access Change Log', location: 'System' },
                    {id: 'AR-09', description: 'Train staff on the importance of access control.', priority: 'Medium', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
                    {id: 'AR-10', description: 'Log all access attempts, both successful and failed.', priority: 'High', riskLevel: 'High', proof: 'Access Logs', location: 'SIEM' },
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
                    {id: 'PMW-06', description: 'Maintain an inventory of all software and versions.', priority: 'High', riskLevel: 'Medium', proof: 'Software Inventory', location: 'System' },
                    {id: 'PMW-07', description: 'Subscribe to vendor security advisories.', priority: 'High', riskLevel: 'High', proof: 'Subscription Confirmation', location: 'System' },
                    {id: 'PMW-08', description: 'Automate patch deployment where possible.', priority: 'High', riskLevel: 'Medium', proof: 'Automation Script/Tool Config', location: 'System' },
                    {id: 'PMW-09', description: 'Verify successful patch installation.', priority: 'High', riskLevel: 'High', proof: 'Verification Scan', location: 'System' },
                    {id: 'PMW-10', description: 'Report on patch compliance to management.', priority: 'High', riskLevel: 'High', proof: 'Compliance Report', location: 'System' },
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
                    {id: 'BCDR-06', description: 'Review and update the DR plan annually.', priority: 'High', riskLevel: 'High', proof: 'Updated DR Plan', location: 'Office' },
                    {id: 'BCDR-07', description: 'Test failover of redundant systems.', priority: 'High', riskLevel: 'High', proof: 'Failover Test Report', location: 'Production' },
                    {id: 'BCDR-08', description: 'Ensure all critical data is included in backup jobs.', priority: 'High', riskLevel: 'High', proof: 'Backup Job Configuration', location: 'System' },
                    {id: 'BCDR-09', description: 'Verify integrity of backup media.', priority: 'High', riskLevel: 'High', proof: 'Media Check Log', location: 'System' },
                    {id: 'BCDR-10', description: 'Train staff on their roles in the DR plan.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
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
                    {id: 'IR-07', description: 'Eradicate the threat and restore systems from a clean backup.', priority: 'High', riskLevel: 'High', proof: 'Eradication Report', location: 'System' },
                    {id: 'IR-08', description: 'Conduct a post-incident review to identify lessons learned.', priority: 'High', riskLevel: 'High', proof: 'Post-Incident Report', location: 'Office' },
                    {id: 'IR-09', description: 'Update security controls based on the incident.', priority: 'High', riskLevel: 'High', proof: 'Control Change Log', location: 'System' },
                    {id: 'IR-10', description: 'Communicate with affected parties (customers, employees) as required.', priority: 'High', riskLevel: 'High', proof: 'Communication Plan Execution', location: 'Office' },
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
                    {id: 'VSA-06', description: 'Review vendor access to your systems and data.', priority: 'High', riskLevel: 'High', proof: 'Vendor Access Audit', location: 'System' },
                    {id: 'VSA-07', description: 'Assess the vendor\'s own supply chain security.', priority: 'Medium', riskLevel: 'High', proof: 'Supply Chain Assessment', location: 'Vendor File' },
                    {id: 'VSA-08', description: 'Ensure vendor has a data breach notification process.', priority: 'High', riskLevel: 'High', proof: 'Breach Notification Clause', location: 'Contract' },
                    {id: 'VSA-09', description: 'Classify vendors based on their risk level.', priority: 'High', riskLevel: 'High', proof: 'Vendor Risk Classification', location: 'System' },
                    {id: 'VSA-10', description: 'Terminate contracts with non-compliant vendors.', priority: 'High', riskLevel: 'High', proof: 'Termination Record', location: 'Legal' },
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
                    { id: 'FRR-06', description: 'Validate firewall rules after any network changes.', priority: 'High', riskLevel: 'High', proof: 'Validation Report', location: 'System' },
                    { id: 'FRR-07', description: 'Ensure firewall software is up-to-date.', priority: 'High', riskLevel: 'High', proof: 'Firmware Version Check', location: 'System' },
                    { id: 'FRR-08', description: 'Test firewall failover capabilities.', priority: 'High', riskLevel: 'High', proof: 'Failover Test Report', location: 'System' },
                    { id: 'FRR-09', description: 'Review and approve all new firewall rule requests.', priority: 'High', riskLevel: 'High', proof: 'Approval Workflow', location: 'System' },
                    { id: 'FRR-10', description: 'Conduct an annual external penetration test of the firewall.', priority: 'High', riskLevel: 'High', proof: 'Pen Test Report', location: 'System' },
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
                    { id: 'PST-06', description: 'Conduct spear-phishing simulations for high-risk users.', priority: 'High', riskLevel: 'High', proof: 'Spear-phishing Campaign Report', location: 'Simulation Platform' },
                    { id: 'PST-07', description: 'Provide regular security awareness newsletters.', priority: 'Medium', riskLevel: 'Low', proof: 'Newsletter Archive', location: 'System' },
                    { id: 'PST-08', description: 'Train employees on how to report phishing emails.', priority: 'High', riskLevel: 'Medium', proof: 'Reporting Instructions', location: 'Intranet' },
                    { id: 'PST-09', description: 'Recognize employees who report phishing attempts.', priority: 'Low', riskLevel: 'Low', proof: 'Recognition Program', location: 'HR' },
                    { id: 'PST-10', description: 'Analyze the effectiveness of training and simulations.', priority: 'High', riskLevel: 'Medium', proof: 'Effectiveness Report', location: 'Office' },
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
                    { id: 'CSPM-06', description: 'Check for unused or stale cloud resources.', priority: 'Medium', riskLevel: 'Medium', proof: 'Resource Audit', location: 'System' },
                    { id: 'CSPM-07', description: 'Ensure data encryption is enabled for all sensitive data stores.', priority: 'High', riskLevel: 'High', proof: 'Encryption Audit', location: 'System' },
                    { id: 'CSPM-08', description: 'Monitor for unauthorized API calls.', priority: 'High', riskLevel: 'High', proof: 'API Log Analysis', location: 'SIEM' },
                    { id: 'CSPM-09', description: 'Regularly review and update security baselines for cloud services.', priority: 'High', riskLevel: 'High', proof: 'Baseline Documents', location: 'System' },
                    { id: 'CSPM-10', description: 'Automate remediation of common misconfigurations.', priority: 'High', riskLevel: 'High', proof: 'Automation Scripts', location: 'System' },
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
            { text: "Prevent 'never events' with a WHO-aligned Surgical Safety Checklist.", icon: <Stethoscope /> },
            { text: "Combat hospital-acquired infections (HAIs) with rigorous infection control and sterilization (CSSD) audits.", icon: <SyringeIcon /> },
            { text: "Eliminate medication errors using SOPs for high-alert medication dispensing and administration.", icon: <Pill /> },
            { text: "Enhance patient safety with a robust protocol for patient identification at every touchpoint.", icon: <UserCheck /> },
            { text: "Ensure regulatory compliance with a systematic process for biomedical waste management.", icon: <Recycle /> },
            { text: "Prepare for any crisis with emergency code management and mock drill scenarios.", icon: <Ambulance /> }
        ],
        previewScenario: {
            title: "Preventing a 'Never Event': Wrong-Site Surgery",
            description: "A surgeon is about to operate on the wrong knee due to a mix-up in the pre-op area. This scenario shows how our checklists prevent this.",
            tasks: [
                { id: 'H-SSC-01', description: "The 'Surgical Safety Checklist' mandates a final 'Time Out' where the entire team must verbally confirm the patient, site, and procedure. The nurse notices the discrepancy with the marked site and halts the procedure.", sourceChecklist: "Surgical Safety Checklist (WHO Aligned)", priority: 'High' },
                { id: 'H-PID-02', description: "The 'Patient Identification Protocol' would have flagged the error earlier, as it requires matching the patient's ID band with the surgical consent form before entering the OT.", sourceChecklist: "Patient Identification Protocol", priority: 'High' },
                { id: 'H-MED-01', description: "The 'High-Alert Medication' SOP, which requires dual checks, instills a culture of verification that makes staff more likely to question and catch errors in other areas.", sourceChecklist: "High-Alert Medication SOP", priority: 'High' }
            ]
        },
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
                icon: <Stethoscope />,
                summary: "Mandatory 'Time Out' before incision, confirming patient, site, and procedure. Prevents wrong-site surgery and is a core JCI/NABH requirement.",
                tasks: [
                    { id: 'H-SSC-01', description: 'Confirm patient identity, surgical site, procedure, and consent before anesthesia.', priority: 'High', riskLevel: 'High', proof: 'Verbal confirmation log', location: 'OT', consequence: 'Failure to confirm is the primary cause of "never events" like wrong-site surgery, leading to patient harm, lawsuits, and loss of accreditation.' },
                    { id: 'H-SSC-02', description: 'Mark the surgical site.', priority: 'High', riskLevel: 'High', proof: 'Visual check', location: 'Pre-op', consequence: 'An unmarked or incorrectly marked site can lead to catastrophic error in the operating room.' },
                    { id: 'H-SSC-03', description: 'Review critical patient history, including allergies and airway risks.', priority: 'High', riskLevel: 'High', proof: 'Anesthesia record', location: 'OT', consequence: 'Missing a known allergy can lead to anaphylactic shock and death during surgery.' },
                    { id: 'H-SSC-04', description: 'Confirm instrument, sponge, and needle counts before closing.', priority: 'High', riskLevel: 'High', proof: 'Count sheet', location: 'OT', consequence: 'A retained foreign object can lead to severe post-operative complications, infection, and requires a second surgery to remove.' },
                    { id: 'H-SSC-05', description: 'Verbally confirm the name of the procedure recorded and specimen labeling.', priority: 'High', riskLevel: 'High', proof: 'Sign-out log', location: 'OT', consequence: 'Incorrectly labeled specimens can lead to a misdiagnosis (e.g., of cancer), with life-altering consequences for the patient.' },
                    { id: 'H-SSC-06', description: 'Ensure all team members have introduced themselves by name and role.', priority: 'High', riskLevel: 'Medium', proof: 'Time-out log', location: 'OT' },
                    { id: 'H-SSC-07', description: 'Confirm antibiotic prophylaxis has been given within the last 60 minutes.', priority: 'High', riskLevel: 'High', proof: 'Medication Administration Record (MAR)', location: 'OT' },
                    { id: 'H-SSC-08', description: 'Review anticipated critical events with the surgeon and anesthesia team.', priority: 'High', riskLevel: 'High', proof: 'Verbal confirmation', location: 'OT' },
                    { id: 'H-SSC-09', description: 'Verify availability of essential imaging.', priority: 'High', riskLevel: 'High', proof: 'Imaging Display', location: 'OT' },
                    { id: 'H-SSC-10', description: 'Check for equipment issues or concerns before starting.', priority: 'High', riskLevel: 'High', proof: 'Equipment Check Log', location: 'OT' },
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
                    { id: 'H-IC-06', description: 'Track hospital-acquired infection (HAI) rates.', priority: 'High', riskLevel: 'High', proof: 'HAI Data Report', location: 'Infection Control Office' },
                    { id: 'H-IC-07', description: 'Ensure staff use appropriate PPE in isolation rooms.', priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Isolation Rooms' },
                    { id: 'H-IC-08', description: 'Manage biomedical waste segregation and disposal.', priority: 'High', riskLevel: 'High', proof: 'Waste Log', location: 'Waste Area' },
                    { id: 'H-IC-09', description: 'Audit antibiotic stewardship program compliance.', priority: 'High', riskLevel: 'High', proof: 'Stewardship Audit', location: 'Pharmacy' },
                    { id: 'H-IC-10', description: 'Provide regular infection control training to all staff.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
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
                    { id: 'H-MED-06', description: 'Reconcile medications at every transition of care (admission, transfer, discharge).', priority: 'High', riskLevel: 'High', proof: 'Medication Reconciliation Form', location: 'Patient Ward' },
                    { id: 'H-MED-07', description: 'Label all medications, including those in syringes and basins.', priority: 'High', riskLevel: 'High', proof: 'Labeling Audit', location: 'Medication Room' },
                    { id: 'H-MED-08', description: 'Report all medication errors and near misses.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Quality Dept' },
                    { id: 'H-MED-09', description: 'Ensure concentrated electrolytes are stored only in the pharmacy.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Pharmacy' },
                    { id: 'H-MED-10', description: 'Verify patient allergies before administering any medication.', priority: 'High', riskLevel: 'High', proof: 'Allergy Check in MAR', location: 'Patient Bedside' },
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
                    { id: 'H-PID-06', description: 'Verify patient identity before any diagnostic procedure (e.g., X-ray, MRI).', priority: 'High', riskLevel: 'High', proof: 'Procedure Checklist', location: 'Radiology' },
                    { id: 'H-PID-07', description: 'Ensure all patients have a clear and accurate ID band.', priority: 'High', riskLevel: 'High', proof: 'ID Band Audit', location: 'Wards' },
                    { id: 'H-PID-08', description: 'For non-verbal patients, use alternative identification methods.', priority: 'High', riskLevel: 'High', proof: 'Alternative ID Protocol', location: 'Wards' },
                    { id: 'H-PID-09', description: 'Train all clinical staff on the patient identification policy.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'H-PID-10', description: 'Audit compliance with the patient identification policy monthly.', priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'Quality Dept' },
                ]
            },
            {
                title: "Biomedical Waste Management",
                department: "Housekeeping/Compliance",
                frequency: "Daily",
                role: "Bio-medical Waste Officer",
                icon: <Recycle />,
                summary: "Immediate triage steps, incident report with photos, escalation path (GM/legal/insurance), root-cause & corrective action.",
                tasks: [
                    { id: 'BMW-01', description: 'Audit waste segregation into designated bins (wet, dry, recyclable).', priority: 'High', riskLevel: 'Medium', proof: 'First Action Log', location: 'Incident Site' },
                    { id: 'BMW-02', description: 'Quarantine and label any suspected contaminated food batch.', priority: 'High', riskLevel: 'High', proof: 'Quarantine Log & Photo', location: 'Kitchen' },
                    { id: 'BMW-03', description: 'Notify the local health authority if the incident is severe (e.g., multiple cases of food poisoning).', priority: 'High', riskLevel: 'High', proof: 'Notification Record', location: 'Office' },
                    { id: 'BMW-04', description: 'Conduct a root cause analysis of the incident with the kitchen team.', priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'Office' },
                    { id: 'BMW-05', description: 'Offer a resolution to the guest (e.g., refund, complimentary meal) and document it.', priority: 'High', riskLevel: 'Medium', proof: 'Guest Resolution Log', location: 'Office' },
                    { id: 'BMW-06', description: 'Collect contact information from the affected guest for follow-up.', priority: 'High', riskLevel: 'High', proof: 'Contact Form', location: 'Office' },
                    { id: 'BMW-07', description: 'Preserve any food samples for testing if necessary.', priority: 'High', riskLevel: 'High', proof: 'Sample Log', location: 'Lab/Kitchen' },
                    { id: 'BMW-08', description: 'Interview all staff involved in the incident.', priority: 'High', riskLevel: 'High', proof: 'Interview Notes', location: 'Office' },
                    { id: 'BMW-09', description: 'Implement corrective actions to prevent recurrence.', priority: 'High', riskLevel: 'High', proof: 'CAPA Plan', location: 'Office' },
                    { id: 'BMW-10', description: 'Review similar incidents to identify trends.', priority: 'Medium', riskLevel: 'Medium', proof: 'Trend Analysis Report', location: 'Office' },
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
                    { id: 'EOD-01', description: "Reconcile all cash, card, and digital payments against POS sales.", priority: 'High', riskLevel: 'High', proof: 'Sales Reconciliation Report', location: 'Office' },
                    { id: 'EOD-02', description: "Ensure all kitchen equipment is properly shut down and cleaned.", priority: 'High', riskLevel: 'High', proof: 'Kitchen Closing Checklist', location: 'Kitchen' },
                    { id: 'EOD-03', description: "Verify that the main gas line to the kitchen is turned off.", priority: 'High', riskLevel: 'High', proof: 'Gas Valve Check Log', location: 'Kitchen' },
                    { id: 'EOD-04', description: "Secure all doors and windows, and activate the security alarm.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Premises' },
                    { id: 'EOD-05', description: "Complete the manager's closing report, noting any incidents or issues.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Logbook', location: 'Office' },
                    { id: 'EOD-06', description: "Store all perishable food items correctly.", priority: 'High', riskLevel: 'High', proof: 'Storage Check', location: 'Kitchen' },
                    { id: 'EOD-07', description: "Empty all trash cans and clean the waste area.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Area Log', location: 'Waste Area' },
                    { id: 'EOD-08', description: "Turn off all non-essential lights and electronics.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Entire Premises' },
                    { id: 'EOD-09', description: "Lock up all alcoholic beverages.", priority: 'High', riskLevel: 'High', proof: 'Liquor Storage Log', location: 'Bar/Storage' },
                    { id: 'EOD-10', description: "Check that all restrooms are clean and stocked for the next day.", priority: 'Medium', riskLevel: 'Low', proof: 'Restroom Check', location: 'Restrooms' },
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
                    { id: 'EOD-01', description: "Reconcile all cash, card, and digital payments against POS sales.", priority: 'High', riskLevel: 'High', proof: 'Sales Reconciliation Report', location: 'Office' },
                    { id: 'EOD-02', description: "Ensure all kitchen equipment is properly shut down and cleaned.", priority: 'High', riskLevel: 'High', proof: 'Kitchen Closing Checklist', location: 'Kitchen' },
                    { id: 'EOD-03', description: "Verify that the main gas line to the kitchen is turned off.", priority: 'High', riskLevel: 'High', proof: 'Gas Valve Check Log', location: 'Kitchen' },
                    { id: 'EOD-04', description: "Secure all doors and windows, and activate the security alarm.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Premises' },
                    { id: 'EOD-05', description: "Complete the manager's closing report, noting any incidents or issues.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Logbook', location: 'Office' },
                    { id: 'EOD-06', description: "Store all perishable food items correctly.", priority: 'High', riskLevel: 'High', proof: 'Storage Check', location: 'Kitchen' },
                    { id: 'EOD-07', description: "Empty all trash cans and clean the waste area.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Area Log', location: 'Waste Area' },
                    { id: 'EOD-08', description: "Turn off all non-essential lights and electronics.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Entire Premises' },
                    { id: 'EOD-09', description: "Lock up all alcoholic beverages.", priority: 'High', riskLevel: 'High', proof: 'Liquor Storage Log', location: 'Bar/Storage' },
                    { id: 'EOD-10', description: "Check that all restrooms are clean and stocked for the next day.", priority: 'Medium', riskLevel: 'Low', proof: 'Restroom Check', location: 'Restrooms' },
                ]
            },
            {
                title: "Staff Training on Security Protocols",
                department: "HR/Security",
                frequency: "Quarterly",
                role: "Training Manager",
                icon: <Users />,
                summary: "Regular training on robbery response, identifying suspicious behavior, and handling high-value items.",
                tasks: [
                    { id: 'EOD-01', description: "Reconcile all cash, card, and digital payments against POS sales.", priority: 'High', riskLevel: 'High', proof: 'Sales Reconciliation Report', location: 'Office' },
                    { id: 'EOD-02', description: "Ensure all kitchen equipment is properly shut down and cleaned.", priority: 'High', riskLevel: 'High', proof: 'Kitchen Closing Checklist', location: 'Kitchen' },
                    { id: 'EOD-03', description: "Verify that the main gas line to the kitchen is turned off.", priority: 'High', riskLevel: 'High', proof: 'Gas Valve Check Log', location: 'Kitchen' },
                    { id: 'EOD-04', description: "Secure all doors and windows, and activate the security alarm.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Premises' },
                    { id: 'EOD-05', description: "Complete the manager's closing report, noting any incidents or issues.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Logbook', location: 'Office' },
                    { id: 'EOD-06', description: "Store all perishable food items correctly.", priority: 'High', riskLevel: 'High', proof: 'Storage Check', location: 'Kitchen' },
                    { id: 'EOD-07', description: "Empty all trash cans and clean the waste area.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Area Log', location: 'Waste Area' },
                    { id: 'EOD-08', description: "Turn off all non-essential lights and electronics.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Entire Premises' },
                    { id: 'EOD-09', description: "Lock up all alcoholic beverages.", priority: 'High', riskLevel: 'High', proof: 'Liquor Storage Log', location: 'Bar/Storage' },
                    { id: 'EOD-10', description: "Check that all restrooms are clean and stocked for the next day.", priority: 'Medium', riskLevel: 'Low', proof: 'Restroom Check', location: 'Restrooms' },
                ]
            }
        ]
    },
     // --- Social Cause ---
    {
        id: 'shelter_operations',
        title: "Shelter Operations",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Social Cause",
        description: "A basic (and free) operational toolkit for NGO shelter managers to ensure the safety and well-being of beneficiaries.",
        icon: <PersonStanding />,
        badgeText: "Free Resource",
        badgeVariant: "accent",
        whoIsItFor: ["Shelter Managers", "NGO Founders", "Social Workers"],
        sampleItems: [
            { text: "Safely process new admissions with intake and assessment protocols.", icon: <Home /> },
            { text: "Manage health with medication and medical logs.", icon: <HeartPulse /> },
            { text: "Create clean shelter.", icon: <Sparkles /> },
            { text: "Protect with volunteer onboarding and ground rules.", icon: <Users /> },
            { text: "Enable by skill learning and job search", icon: <Briefcase /> },
            { text: "Promote well-being with a hygiene and nutrition plan.", icon: <Utensils /> }
        ],
        previewScenario: {
            title: "Intake & Assessment",
            description: "Here is intake workflow. This scenario shows how checklists prevent this.",
            tasks: [
                { id: 'A-SSC-01', description: "Immediate dispatch. This is source. ", sourceChecklist: "A Surgical Safety Checklist (WHO Aligned)", priority: 'High' },
                { id: 'B-SSC-02', description: "The  check with the  surgical consent form before entering the OT.", sourceChecklist: "B Patient Identification Protocol", priority: 'High' },
                { id: 'C-SSC-03', description: "The Manager confirms that the allergy protocol was followed before the dish leaves the kitchen.", sourceChecklist: "C High-Alert Medication SOP", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Add global for social",
            standards: [
                { name: "Add name", description: "Description" },
            ]
        },
        checklists: [
            {
                title: "Intake & Assessment Protocol",
                department: "Operations",
                frequency: "Daily",
                role: "Manager",
                icon: <Home />,
                summary: "1. ID & background, 2. Health assessment, 3. Assign Bed , 4. Key contact",
                tasks: [
                    {id: 'ABC-01', description: "New benificiary has ID , take copy", priority: 'High', riskLevel: 'Low', proof: 'Notes', location: 'Bed', consequence: 'impact.'},
                    {id: 'ABC-02', description: "Take details of health issues", priority: 'High', riskLevel: 'Medium', proof: 'Photo Log', location: 'Bed', consequence: 'impact.'},
                    {id: 'ABC-03', description: "Allot a bed", priority: 'High', riskLevel: 'High', proof: 'BMS Screenshot', location: 'Bed', consequence: 'impact.'},
                    {id: 'ABC-04', description: "Add emergency contect details", priority: 'Medium', riskLevel: 'Low', proof: 'Maintenance Ticket', location: 'Bed', consequence: 'impact.'},
                ]
            },
            {
                title: "Medicine protocols",
                department: "Medical",
                frequency: "Weekly",
                role: "Doc",
                icon: <HeartPulse />,
                summary: "1. Log, 2. Verify , 3. Confirm",
                tasks: [
                    {id: 'XYZ-01', description: "Log temperature is maintained", priority: 'High', riskLevel: 'Medium', proof: 'Asset Register', location: 'System'},
                    {id: 'XYZ-02', description: "Weekly", priority: 'High', riskLevel: 'High', proof: 'PM Compliance Report', location: 'System'},
                    {id: 'XYZ-03', description: "Escalate", priority: 'High', riskLevel: 'High', proof: 'SLA Tracker', location: 'System'},
                ]
            },
            {
                title: "Deep Clean",
                department: "Admin",
                frequency: "Daily",
                role: "Cleaner",
                icon: <Sparkles />,
                summary: "Zone-wise cleaning checklist, deep-clean schedule, consumable restock logs (soap, sanitizer).",
                tasks: [
                    {id: 'PQR-01', description: "Deep clean", priority: 'High', riskLevel: 'Medium', proof: 'Audit Scorecard', location: 'Various'},
                    {id: 'PQR-02', description: "Verify consumables", priority: 'High', riskLevel: 'Medium', proof: 'Deep Clean Log', location: 'Various'},
                    {id: 'PQR-03', description: "Check stock", priority: 'High', riskLevel: 'Low', proof: 'Restock Log', location: 'Janitor Room'},
                ]
            },
            {
                title: "Support Staff",
                department: "Security",
                frequency: "Ongoing",
                role: "Security Supervisor",
                icon: <Users />,
                summary: "Contractor verification, access card issuance/return, CCTV health monitoring and retention policy.",
                tasks: [
                    {id: 'LMN-01', description: "ID check", priority: 'High', riskLevel: 'High', proof: 'Visitor Log', location: 'Reception'},
                    {id: 'LMN-02', description: "Issue Cards", priority: 'High', riskLevel: 'High', proof: 'Access Card Log', location: 'Reception'},
                    {id: 'LMN-03', description: "Recieved cards", priority: 'High', riskLevel: 'High', proof: 'Access Card Log', location: 'Reception'},
                ]
            },
            {
                title: "Skills & Training",
                department: "Training",
                frequency: "Weekly",
                role: "Trainer",
                icon: <Briefcase />,
                summary: "BMS data review, meter readings, energy usage anomaly alerts.",
                tasks: [
                    {id: 'EFG-01', description: "Conduct session", priority: 'High', riskLevel: 'High', proof: 'BMS Log', location: 'BMS Room'},
                    {id: 'EFG-02', description: "Track attendence", priority: 'High', riskLevel: 'Medium', proof: 'Meter Reading Log', location: 'Meter Rooms'},
                    {id: 'EFG-03', description: "Get Feedback", priority: 'High', riskLevel: 'Medium', proof: 'Usage Analysis Report', location: 'Office'},
                ]
            },
            {
                title: "Hygiene",
                department: "Hygien",
                frequency: "Daily",
                role: "Cleaner",
                icon: <Utensils />,
                summary: "Hygien check",
                tasks: [
                    { id: 'OPQ-01', description: "Clean surface", priority: 'High', riskLevel: 'High', proof: 'Cycle Count Sheets', location: 'Sales Floor/Vault' },
                    { id: 'OPQ-02', description: "Check area", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Office' },
                ]
            }
        ]
    }
];

    

    




  




  

    



