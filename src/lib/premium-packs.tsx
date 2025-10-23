
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
                    { id: 'WRM-09', description: 'Handle repair payments and invoicing.', priority: 'High', riskLevel: 'Medium', proof: 'Invoice', location: 'POS' },
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
                    { id: 'FSA-01', description: 'Inspect all fire extinguishers for pressure and expiry date.', priority: 'High', riskLevel: 'High', proof: 'Extinguisher Log', location: 'Store-wide' },
                    { id: 'FSA-02', description: 'Test smoke detectors and fire alarms.', priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Store-wide' },
                    { id: 'FSA-03', description: 'Ensure all emergency exits are clear and accessible.', priority: 'High', riskLevel: 'High', proof: 'Exit Inspection Log', location: 'Store-wide' },
                    { id: 'FSA-04', description: 'Check that all staff are trained on fire evacuation procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'FSA-05', description: 'Maintain a log of all fire safety audits for regulatory inspection.', priority: 'High', riskLevel: 'High', proof: 'Master Audit File', location: 'Office' },
                    { id: 'FSA-06', description: 'Check emergency lighting functionality.', priority: 'High', riskLevel: 'High', proof: 'Lighting Test Log', location: 'Store-wide' },
                    { id: 'FSA-07', description: 'Ensure fire safety signage is visible and correct.', priority: 'High', riskLevel: 'High', proof: 'Signage Audit', location: 'Store-wide' },
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
        description: "An all-in-one operations and compliance pack for supermarkets, hypermarkets, and grocery retail chains, ensuring food safety, loss prevention, hygiene, and operational efficiency across outlets.",
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
                    { id: 'SC-COLD-06', description: 'Ensure goods are moved to cold storage immediately upon receipt.', priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Area' },
                    { id: 'SC-COLD-07', description: 'Clean and sanitize all refrigerated units weekly.', priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Sales Floor/Stockroom' },
                    { id: 'SC-COLD-08', description: 'Do not overload refrigerated units to ensure proper air flow.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor/Stockroom' },
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
                summary: "Shelf audits twice daily for high-risk products, weekly full expiry sweep, discount/quarantine & return flows for near-expiry.",
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
                summary: "Hourly aisle checks, wet-floor signage protocol, immediate spill cleanup and incident logging (including CCTV time).",
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
                    { id: 'LPS-01', description: 'Verify all CCTV cameras are operational and recording.', priority: 'High', riskLevel: 'High', proof: 'CCTV Check Log', location: 'Security Office' },
                    { id: 'LPS-02', description: 'Test EAS (Electronic Article Surveillance) gates at opening.', priority: 'High', riskLevel: 'High', proof: 'EAS Test Log', location: 'Entrance' },
                    { id: 'LPS-03', description: 'Monitor staff entry and exit points for unauthorized item removal.', priority: 'High', riskLevel: 'High', proof: 'Staff Exit Check Log', location: 'Staff Gate' },
                    { id: 'LPS-04', description: 'Conduct random audits in high-theft categories like cosmetics and electronics.', priority: 'High', riskLevel: 'High', proof: 'Random Audit Log', location: 'Sales Floor' },
                    { id: 'LPS-05', description: 'Train staff on identifying and reporting suspicious activity.', priority: 'High', riskLevel: 'Medium', proof: 'Training Record', location: 'Office' },
                    { id: 'LPS-06', description: 'Secure all high-value items in locked cabinets.', priority: 'High', riskLevel: 'High', proof: 'Cabinet Check', location: 'Sales Floor' },
                    { id: 'LPS-07', description: 'Perform bag checks on staff leaving the premises.', priority: 'High', riskLevel: 'High', proof: 'Bag Check Log', location: 'Staff Gate' },
                    { id: 'LPS-08', description: 'Analyze shrinkage data to identify trends.', priority: 'High', riskLevel: 'High', proof: 'Shrinkage Report', location: 'Office' },
                    { id: 'LPS-09', description: 'Ensure all emergency exits are alarmed and monitored.', priority: 'High', riskLevel: 'High', proof: 'Alarm System Check', location: 'Security Office' },
                    { id: 'LPS-10', description: 'Work with law enforcement on organized retail crime.', priority: 'Medium', riskLevel: 'High', proof: 'Police Liaison Log', location: 'Office' },
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
                    {id: 'DFW-08', description: 'Check security desk for any overnight incident reports.', priority: 'High', riskLevel: 'High', proof: 'Incident Log Review', location: 'Security Desk' },
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
                    { id: 'INC-REP-04', description: "Conduct a Root Cause Analysis (RCA) for all major incidents.", priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'System' },
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
            description: "A surgeon is about to operate on the wrong knee due to a mix-up in the pre-op area. This scenario shows how checklists prevent a catastrophic, reputation-destroying 'never event'.",
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
                icon: <FileCheck />,
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
                summary: "Ensures correct segregation, storage, and disposal of biomedical waste as per regulatory norms.",
                tasks: [
                    { id: 'H-BMW-01', description: "Audit waste segregation into correct color-coded bins at point of generation.", priority: 'High', riskLevel: 'High', proof: 'Audit Checklist', location: 'Wards/OT' },
                    { id: 'H-BMW-02', description: "Ensure biomedical waste is stored in a secure, designated area.", priority: 'High', riskLevel: 'High', proof: 'Storage Area Inspection', location: 'Waste Area' },
                    { id: 'H-BMW-03', description: "Maintain a log of all waste handed over to the authorized disposal agency.", priority: 'High', riskLevel: 'High', proof: 'Disposal Log', location: 'Waste Area' },
                    { id: 'H-BMW-04', description: "Check that sharps containers are not overfilled and are sealed correctly.", priority: 'High', riskLevel: 'High', proof: 'Sharps Container Log', location: 'Wards' },
                    { id: 'H-BMW-05', description: "Train all staff on correct biomedical waste handling procedures.", priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'H-BMW-06', description: 'Verify vendor compliance for waste transportation and disposal.', priority: 'High', riskLevel: 'High', proof: 'Vendor Audit', location: 'Office' },
                    { id: 'H-BMW-07', description: 'Ensure all waste containers are properly labeled.', priority: 'High', riskLevel: 'High', proof: 'Label Audit', location: 'Various' },
                    { id: 'H-BMW-08', description: 'Track waste generation quantities.', priority: 'Medium', riskLevel: 'Medium', proof: 'Waste Generation Report', location: 'Office' },
                    { id: 'H-BMW-09', description: 'Manage liquid biomedical waste as per protocol.', priority: 'High', riskLevel: 'High', proof: 'Liquid Waste Log', location: 'Labs' },
                    { id: 'H-BMW-10', description: 'Conduct annual review of the biomedical waste management plan.', priority: 'High', riskLevel: 'High', proof: 'Plan Review Minutes', location: 'Office' },
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
                    { id: 'H-EQUIP-06', description: 'Ensure all equipment alarms are functional.', priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Various' },
                    { id: 'H-EQUIP-07', description: 'Perform safety tests on all electrical medical equipment.', priority: 'High', riskLevel: 'High', proof: 'Safety Test Report', location: 'Biomed Dept' },
                    { id: 'H-EQUIP-08', description: 'Manage inventory of essential spare parts.', priority: 'High', riskLevel: 'High', proof: 'Spares Inventory', location: 'Biomed Dept' },
                    { id: 'H-EQUIP-09', description: 'Train clinical staff on basic equipment troubleshooting.', priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'HR' },
                    { id: 'H-EQUIP-10', description: 'Document all maintenance and repair activities.', priority: 'High', riskLevel: 'High', proof: 'Service Reports', location: 'Biomed Dept' },
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
                    { id: 'H-MRD-06', description: 'Ensure patient consent is obtained for data sharing.', priority: 'High', riskLevel: 'High', proof: 'Consent Forms', location: 'MRD' },
                    { id: 'H-MRD-07', description: 'Manage record retention and destruction policy.', priority: 'High', riskLevel: 'High', proof: 'Retention Policy', location: 'MRD' },
                    { id: 'H-MRD-08', description: 'Handle patient requests for their medical records.', priority: 'High', riskLevel: 'High', proof: 'Request Log', location: 'MRD' },
                    { id: 'H-MRD-09', description: 'Ensure all records are complete and accurate.', priority: 'High', riskLevel: 'High', proof: 'Record Audit', location: 'MRD' },
                    { id: 'H-MRD-10', description: 'Conduct regular privacy risk assessments.', priority: 'High', riskLevel: 'High', proof: 'Risk Assessment Report', location: 'Compliance Office' },
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
                    { id: 'H-DRILL-06', description: 'Test the hospital-wide public address system.', priority: 'High', riskLevel: 'High', proof: 'PA System Test Log', location: 'Control Room' },
                    { id: 'H-DRILL-07', description: 'Drill for Code Pink (Infant Abduction).', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Maternity/Peds' },
                    { id: 'H-DRILL-08', description: 'Drill for Code Yellow (Internal Disaster).', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Various' },
                    { id: 'H-DRILL-09', description: 'Verify all emergency exits are clear.', priority: 'High', riskLevel: 'High', proof: 'Exit Audit', location: 'Various' },
                    { id: 'H-DRILL-10', description: 'Update emergency plans based on drill outcomes.', priority: 'High', riskLevel: 'High', proof: 'Updated Plans', location: 'Safety Office' },
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
            { text: "Eliminate dispensing errors with a multi-stage accuracy and error prevention system.", icon: <FileCheck /> },
            { text: "Ensure strict compliance with logs for controlled substances and narcotics.", icon: <FileLock /> },
            { text: "Protect sensitive medications with a robust cold chain management process for vaccines and biologics.", icon: <Thermometer /> },
            { text: "Minimize waste and prevent stockouts with an efficient inventory, FIFO, and expiry control system.", icon: <Recycle /> },
            { text: "Improve patient outcomes through structured counseling and medication therapy management.", icon: <UserCheck /> },
            { text: "Stay audit-ready with checklists aligned to the Drugs & Cosmetics Act and other regulations.", icon: <Scale /> }
        ],
        previewScenario: {
            title: "Preventing a Controlled Substance Discrepancy",
            description: "During a regulatory audit, an inspector asks for the records of a specific narcotic. This scenario shows how the pack's checklists provide a clear, unimpeachable audit trail.",
            tasks: [
                { id: 'PHARM-CS-02', description: "The 'Controlled Substance Log' shows a daily-reconciled, dual-signed record of the physical count versus the system record, providing immediate proof of control.", sourceChecklist: "Controlled Substance Log", priority: 'High' },
                { id: 'PHARM-DISP-01', description: "The 'Dispensing Accuracy SOP' ensures that every prescription for this drug was verified against a valid prescription, creating a clear chain of custody.", sourceChecklist: "Dispensing Accuracy SOP", priority: 'High' },
                { id: 'PHARM-EXP-01', description: "The 'Expiry Management SOP' provides logs showing how any expired stock of the narcotic was handled and destroyed, completing the lifecycle audit.", sourceChecklist: "Expiry Management SOP", priority: 'High' }
            ]
        },
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
                    { id: 'PHARM-DISP-01', description: "Verify prescription details (drug, strength, dosage) against the label generated.", priority: 'High', riskLevel: 'High', proof: 'Pharmacist initial', location: 'Dispensing Counter', consequence: 'A mismatch can lead to a serious medication error, causing patient harm.' },
                    { id: 'PHARM-DISP-02', description: "Perform a final check of the dispensed medication against the original prescription before bagging.", priority: 'High', riskLevel: 'High', proof: 'Final check initial', location: 'Dispensing Counter', consequence: 'This is the last line of defense to catch a dispensing error before it reaches the patient.' },
                    { id: 'PHARM-DISP-03', description: "Use separate trays for each prescription to avoid mix-ups.", priority: 'High', riskLevel: 'High', proof: 'Visual SOP', location: 'Dispensing Counter', consequence: 'Prevents one patient from accidentally receiving another patient\'s medication.' },
                    { id: 'PHARM-DISP-04', description: 'Counsel patient on the medication being dispensed.', priority: 'High', riskLevel: 'High', proof: 'Counseling Log', location: 'Dispensing Counter', consequence: 'Ensures the patient understands how to take their medication correctly, improving adherence and outcomes.' },
                    { id: 'PHARM-DISP-05', description: 'Check for potential drug interactions for patients with multiple prescriptions.', priority: 'High', riskLevel: 'High', proof: 'System Alert Review', location: 'System', consequence: 'Prevents harmful or fatal drug interactions.' },
                    { id: 'PHARM-DISP-06', description: 'Verify patient identity using two identifiers.', priority: 'High', riskLevel: 'High', proof: 'ID Check Log', location: 'Dispensing Counter' },
                    { id: 'PHARM-DISP-07', description: 'Handle Look-Alike Sound-Alike (LASA) drugs with extra care.', priority: 'High', riskLevel: 'High', proof: 'LASA Drug Handling Log', location: 'Pharmacy' },
                    { id: 'PHARM-DISP-08', description: 'Report any dispensing errors or near misses.', priority: 'High', riskLevel: 'High', proof: 'Error Report', location: 'Office' },
                    { id: 'PHARM-DISP-09', description: 'Ensure proper lighting at the dispensing counter.', priority: 'High', riskLevel: 'Medium', proof: 'Lighting Check', location: 'Dispensing Counter' },
                    { id: 'PHARM-DISP-10', description: 'Maintain a clean and organized dispensing area.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Dispensing Counter' },
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
                    { id: 'PHARM-CS-06', description: 'Verify prescriptions for controlled substances are valid.', priority: 'High', riskLevel: 'High', proof: 'Prescription Check Log', location: 'Dispensing Counter' },
                    { id: 'PHARM-CS-07', description: 'Maintain records of all controlled substance purchases.', priority: 'High', riskLevel: 'High', proof: 'Purchase Invoices', location: 'Office' },
                    { id: 'PHARM-CS-08', description: 'Document destruction of expired controlled substances with a witness.', priority: 'High', riskLevel: 'High', proof: 'Destruction Log', location: 'Office' },
                    { id: 'PHARM-CS-09', description: 'Conduct a surprise audit of controlled substances quarterly.', priority: 'High', riskLevel: 'High', proof: 'Surprise Audit Report', location: 'Office' },
                    { id: 'PHARM-CS-10', description: 'Train staff on controlled substance regulations.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
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
                    { id: 'PHARM-CC-06', description: 'Ensure refrigerator is not overloaded to allow air circulation.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Refrigerator' },
                    { id: 'PHARM-CC-07', description: 'Store vaccines away from the refrigerator door.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Refrigerator' },
                    { id: 'PHARM-CC-08', description: 'Calibrate temperature monitoring devices annually.', priority: 'High', riskLevel: 'High', proof: 'Calibration Certificate', location: 'Office' },
                    { id: 'PHARM-CC-09', description: 'Train staff on cold chain emergency procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'PHARM-CC-10', description: 'Check expiry dates of all cold chain products monthly.', priority: 'High', riskLevel: 'High', proof: 'Expiry Check Log', location: 'Refrigerator' },
                ]
            },
            {
                title: "Expiry Management SOP",
                department: "Inventory",
                frequency: "Monthly",
                role: "Stockist",
                icon: <Recycle />,
                summary: "Monthly sweep for near-expiry drugs, quarantine, and return-to-vendor process.",
                tasks: [
                    { id: 'PHARM-EXP-01', description: "Perform a monthly sweep of shelves to identify drugs expiring within 6 months.", priority: 'High', riskLevel: 'Medium', proof: 'Near-Expiry Log', location: 'Shelves' },
                    { id: 'PHARM-EXP-02', description: "Move near-expiry drugs to a designated quarantine area.", priority: 'High', riskLevel: 'Medium', proof: 'Quarantine Area Log', location: 'Quarantine Area' },
                    { id: 'PHARM-EXP-03', description: "Initiate the return-to-vendor process for eligible expired drugs.", priority: 'High', riskLevel: 'Medium', proof: 'Return Forms', location: 'Office' },
                    { id: 'PHARM-EXP-04', description: 'Document all expired drugs that are destroyed.', priority: 'High', riskLevel: 'High', proof: 'Destruction Log', location: 'Office' },
                    { id: 'PHARM-EXP-05', description: 'Implement FIFO (First-In, First-Out) for all stock.', priority: 'High', riskLevel: 'High', proof: 'Stock Audit', location: 'Shelves' },
                    { id: 'PHARM-EXP-06', description: 'Remove expired drugs from stock immediately.', priority: 'High', riskLevel: 'High', proof: 'Removal Log', location: 'Shelves' },
                    { id: 'PHARM-EXP-07', description: 'Maintain records of all destroyed medications.', priority: 'High', riskLevel: 'High', proof: 'Destruction Records', location: 'Office' },
                    { id: 'PHARM-EXP-08', description: 'Send non-returnable expired drugs for incineration as per regulations.', priority: 'High', riskLevel: 'High', proof: 'Incineration Certificate', location: 'Office' },
                    { id: 'PHARM-EXP-09', description: 'Analyze expired stock data to improve purchasing.', priority: 'Medium', riskLevel: 'Medium', proof: 'Analysis Report', location: 'Office' },
                    { id: 'PHARM-EXP-10', description: 'Train staff on the expiry management policy.', priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'Office' },
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
                    { id: 'PHARM-COMP-06', description: 'Document all compounding activities.', priority: 'High', riskLevel: 'High', proof: 'Compounding Log', location: 'Compounding Room' },
                    { id: 'PHARM-COMP-07', description: 'Ensure proper environmental monitoring of the compounding area.', priority: 'High', riskLevel: 'High', proof: 'Environmental Monitoring Log', location: 'Compounding Room' },
                    { id: 'PHARM-COMP-08', description: 'Validate all equipment used in compounding.', priority: 'High', riskLevel: 'High', proof: 'Equipment Validation Records', location: 'Compounding Room' },
                    { id: 'PHARM-COMP-09', description: 'Train staff on aseptic techniques.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'PHARM-COMP-10', description: 'Review and update compounding procedures regularly.', priority: 'High', riskLevel: 'High', proof: 'Procedure Review Log', location: 'Office' },
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
                    { id: 'VQ-06', description: 'Maintain an approved vendor list.', priority: 'High', riskLevel: 'High', proof: 'Approved Vendor List', location: 'Office' },
                    { id: 'VQ-07', description: 'Review vendor performance annually.', priority: 'High', riskLevel: 'High', proof: 'Performance Review Report', location: 'Office' },
                    { id: 'VQ-08', description: 'Ensure vendor complies with cold chain requirements.', priority: 'High', riskLevel: 'High', proof: 'Cold Chain Agreement', location: 'Vendor File' },
                    { id: 'VQ-09', description: 'Check for any regulatory warnings or actions against the vendor.', priority: 'High', riskLevel: 'High', proof: 'Regulatory Check', location: 'Office' },
                    { id: 'VQ-10', description: 'Document all vendor qualification activities.', priority: 'High', riskLevel: 'High', proof: 'Qualification File', location: 'Office' },
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
                    { id: 'ADR-06', description: 'Train staff on identifying and reporting ADRs.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'ADR-07', description: 'Provide patient with information on how to report ADRs.', priority: 'Medium', riskLevel: 'Low', proof: 'Patient Brochure', location: 'Pharmacy' },
                    { id: 'ADR-08', description: 'Maintain a log of all reported ADRs.', priority: 'High', riskLevel: 'High', proof: 'ADR Logbook', location: 'Office' },
                    { id: 'ADR-09', description: 'Ensure confidentiality of patient information.', priority: 'High', riskLevel: 'High', proof: 'Confidentiality Policy', location: 'Office' },
                    { id: 'ADR-10', description: 'Cooperate with regulatory authorities during any investigation.', priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Office' },
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
                    { id: 'LRC-06', description: 'Verify compliance with prescription handling requirements.', priority: 'High', riskLevel: 'High', proof: 'Prescription Audit', location: 'Pharmacy' },
                    { id: 'LRC-07', description: 'Ensure compliance with pricing regulations.', priority: 'High', riskLevel: 'High', proof: 'Price Audit', location: 'Office' },
                    { id: 'LRC-08', description: 'Manage compliance for online pharmacy operations, if applicable.', priority: 'High', riskLevel: 'High', proof: 'Online Compliance Checklist', location: 'Office' },
                    { id: 'LRC-09', description: 'Prepare for and manage regulatory inspections.', priority: 'High', riskLevel: 'High', proof: 'Inspection Readiness Checklist', location: 'Office' },
                    { id: 'LRC-10', description: 'Maintain all compliance-related documentation.', priority: 'High', riskLevel: 'High', proof: 'Compliance File', location: 'Office' },
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
            { text: "Prevent tragic accidents with rigorous student transport and bus safety protocols.", icon: <Bus /> },
            { text: "Protect every child with mandatory staff background verification and child protection SOPs.", icon: <ShieldCheck /> },
            { text: "Ensure student health with HACCP-aligned canteen hygiene and food safety audits.", icon: <Utensils /> },
            { text: "Prepare for any crisis with fire safety drills and emergency lockdown procedures.", icon: <Siren /> },
            { text: "Maintain a healthy campus through systematic health screening and outbreak control SOPs.", icon: <HeartPulse /> },
            { text: "Create a safe play environment with playground and sports equipment safety inspections.", icon: <FerrisWheel /> }
        ],
        previewScenario: {
            title: "Preventing a School Bus Tragedy",
            description: "A young child is accidentally left on a school bus at the end of the day, a situation that has led to tragic consequences in real life. This scenario shows how checklists create a non-negotiable safety net.",
            tasks: [
                { id: 'SCH-TRANS-01', description: "The 'Transport & Bus Safety' checklist mandates a physical, seat-by-seat check of the bus by the attendant after the last drop-off, making it impossible to miss a sleeping child.", sourceChecklist: "Transport & Bus Safety Checklist", priority: 'High' },
                { id: 'SCH-HR-01', description: "The 'Staff Background & Induction' SOP ensures that the bus attendant has undergone police verification and specific child safety training, increasing their diligence.", sourceChecklist: "Staff Background & Induction SOP", priority: 'High' },
                { id: 'SCH-DRILL-01', description: "The 'Fire & Lockdown Drill' SOP includes scenarios for non-fire emergencies, ensuring staff know how to raise an alarm for a missing child.", sourceChecklist: "Fire & Lockdown Drill SOP", priority: 'Medium' }
            ]
        },
        globalStandards: {
            title: "Aligned with Education Safety Norms",
            standards: [
                { name: "POCSO Guidelines", description: "For child protection and safety in India." },
                { name: "CBSE/ICSE Safety Norms", description: "Adherence to guidelines from major Indian educational boards." },
                { name: "NCPCR Guidelines", description: "Compliance with National Commission for Protection of Child Rights." },
                { name: "UNICEF Child Safety", description: "References UN standards for child safety." }
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
                    { id: 'SCH-TRANS-01', description: "Conduct a seat-by-seat check of the bus after the final drop-off to ensure no child is left behind.", priority: 'High', riskLevel: 'High', proof: 'End-of-Trip Log', location: 'Bus', consequence: 'Failure to do this has led to child fatalities due to heatstroke. It is a critical, non-negotiable life-safety check.' },
                    { id: 'SCH-TRANS-02', description: "Verify GPS is active and the bus is following the approved route.", priority: 'High', riskLevel: 'High', proof: 'GPS Monitoring System', location: 'Transport Office', consequence: 'Prevents unauthorized route deviations which can be a security risk for child abduction.' },
                    { id: 'SCH-TRANS-03', description: "Ensure both the driver and attendant sign the trip log.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Trip Log', location: 'Transport Office', consequence: 'Creates clear accountability for who was responsible for the students on that specific trip.' },
                    { id: 'SCH-TRANS-04', description: "Review CCTV footage from a random bus weekly.", priority: 'High', riskLevel: 'Medium', proof: 'CCTV Review Log', location: 'Security Office', consequence: 'Deters misconduct by staff and provides evidence in case of any incidents on the bus.' },
                    { id: 'SCH-TRANS-05', description: 'Check first aid kit and fire extinguisher on each bus daily.', priority: 'High', riskLevel: 'High', proof: 'Bus Safety Check Log', location: 'Bus', consequence: 'Ensures the bus is equipped to handle minor injuries or a small fire, protecting student welfare.' },
                    { id: 'SCH-TRANS-06', description: 'Verify driver license and vehicle registration are valid.', priority: 'High', riskLevel: 'High', proof: 'Document Check', location: 'Transport Office' },
                    { id: 'SCH-TRANS-07', description: 'Check bus tires, lights, and brakes daily.', priority: 'High', riskLevel: 'High', proof: 'Vehicle Inspection Log', location: 'Bus' },
                    { id: 'SCH-TRANS-08', description: 'Ensure speed governor is functional.', priority: 'High', riskLevel: 'High', proof: 'Speed Governor Test', location: 'Transport Office' },
                    { id: 'SCH-TRANS-09', description: 'Train drivers and attendants on emergency procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Transport Office' },
                    { id: 'SCH-TRANS-10', description: 'Maintain a log of all maintenance done on buses.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Logbook', location: 'Transport Office' },
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
                    { id: 'SCH-HR-06', description: 'Create and maintain a complete personnel file for each employee.', priority: 'High', riskLevel: 'High', proof: 'Personnel File Checklist', location: 'HR Office' },
                    { id: 'SCH-HR-07', description: 'Conduct a medical check-up for all new staff.', priority: 'High', riskLevel: 'High', proof: 'Medical Certificate', location: 'Employee File' },
                    { id: 'SCH-HR-08', description: 'Issue ID cards to all staff.', priority: 'High', riskLevel: 'Medium', proof: 'ID Card Issuance Log', location: 'HR Office' },
                    { id: 'SCH-HR-09', description: 'Enroll staff in provident fund and other statutory schemes.', priority: 'High', riskLevel: 'High', proof: 'Enrollment Forms', location: 'HR Office' },
                    { id: 'SCH-HR-10', description: 'Provide a clear job description and responsibilities.', priority: 'High', riskLevel: 'Medium', proof: 'Job Description', location: 'Employee File' },
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
                    { id: 'SCH-CANTEEN-06', description: 'Ensure raw and cooked foods are stored separately.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Kitchen' },
                    { id: 'SCH-CANTEEN-07', description: 'Maintain a cleaning schedule for all kitchen equipment.', priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'SCH-CANTEEN-08', description: 'Check water quality reports for drinking water.', priority: 'High', riskLevel: 'High', proof: 'Water Test Report', location: 'Office' },
                    { id: 'SCH-CANTEEN-09', description: 'Implement pest control measures.', priority: 'High', riskLevel: 'High', proof: 'Pest Control Log', location: 'Kitchen' },
                    { id: 'SCH-CANTEEN-10', description: 'Train canteen staff on food safety and hygiene.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
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
                    { id: 'SCH-DRILL-06', description: 'Check all fire extinguishers and hydrants monthly.', priority: 'High', riskLevel: 'High', proof: 'Fire Equipment Log', location: 'Campus' },
                    { id: 'SCH-DRILL-07', description: 'Ensure all emergency exits are clear and marked.', priority: 'High', riskLevel: 'High', proof: 'Exit Audit', location: 'Campus' },
                    { id: 'SCH-DRILL-08', description: 'Train staff on their roles during an emergency.', priority: 'High', riskLevel: 'High', proof: 'Emergency Role Training', location: 'Office' },
                    { id: 'SCH-DRILL-09', description: 'Communicate emergency procedures to parents.', priority: 'High', riskLevel: 'Medium', proof: 'Parent Circular', location: 'Office' },
                    { id: 'SCH-DRILL-10', description: 'Coordinate with local fire and police departments.', priority: 'High', riskLevel: 'High', proof: 'Coordination Meeting Minutes', location: 'Office' },
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
                    { id: 'SCH-HEALTH-06', description: 'Maintain student vaccination records.', priority: 'High', riskLevel: 'High', proof: 'Vaccination Records', location: 'Infirmary' },
                    { id: 'SCH-HEALTH-07', description: 'Dispense medication to students only with written parental consent.', priority: 'High', riskLevel: 'High', proof: 'Consent Forms', location: 'Infirmary' },
                    { id: 'SCH-HEALTH-08', description: 'Check first aid kits in classrooms and buses monthly.', priority: 'High', riskLevel: 'High', proof: 'First Aid Kit Log', location: 'Infirmary' },
                    { id: 'SCH-HEALTH-09', description: 'Provide health and hygiene education to students.', priority: 'Medium', riskLevel: 'Low', proof: 'Education Session Plan', location: 'Classrooms' },
                    { id: 'SCH-HEALTH-10', description: 'Train teachers to recognize common signs of illness.', priority: 'High', riskLevel: 'Medium', proof: 'Teacher Training Log', location: 'Office' },
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
                    { id: 'PG-06', description: 'Ensure adequate supervision during playtime.', priority: 'High', riskLevel: 'High', proof: 'Supervisor Roster', location: 'Playground' },
                    { id: 'PG-07', description: 'Check for any water stagnation that could breed mosquitoes.', priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Playground' },
                    { id: 'PG-08', description: 'Verify that equipment is age-appropriate for the children using it.', priority: 'High', riskLevel: 'High', proof: 'Equipment Specs', location: 'Office' },
                    { id: 'PG-09', description: 'Clean and sanitize playground equipment regularly.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Playground' },
                    { id: 'PG-10', description: 'Maintain a record of all inspections and repairs.', priority: 'High', riskLevel: 'High', proof: 'Maintenance File', location: 'Office' },
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
                    { id: 'VMCS-06', description: 'Monitor CCTV cameras for any suspicious activity.', priority: 'High', riskLevel: 'High', proof: 'CCTV Log', location: 'Security Office' },
                    { id: 'VMCS-07', description: 'Ensure all gates and access points are secure.', priority: 'High', riskLevel: 'High', proof: 'Gate Check Log', location: 'Campus' },
                    { id: 'VMCS-08', description: 'Implement a clear policy for parent and guardian pickups.', priority: 'High', riskLevel: 'High', proof: 'Pickup Policy', location: 'Office' },
                    { id: 'VMCS-09', description: 'Train security staff on emergency procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'VMCS-10', description: 'Have a system for emergency communication with all staff.', priority: 'High', riskLevel: 'High', proof: 'Communication System Test', location: 'Office' },
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
                    { id: 'ITDS-06', description: 'Manage student accounts and access levels.', priority: 'High', riskLevel: 'High', proof: 'Account Management Log', location: 'IT Office' },
                    { id: 'ITDS-07', description: 'Implement a policy for the use of personal devices on campus.', priority: 'High', riskLevel: 'Medium', proof: 'BYOD Policy', location: 'Office' },
                    { id: 'ITDS-08', description: 'Back up all critical school data regularly.', priority: 'High', riskLevel: 'High', proof: 'Backup Logs', location: 'IT Office' },
                    { id: 'ITDS-09', description: 'Provide training to staff on cybersecurity best practices.', priority: 'High', riskLevel: 'High', proof: 'Staff Training Records', location: 'Office' },
                    { id: 'ITDS-10', description: 'Have a clear incident response plan for any cyber attacks.', priority: 'High', riskLevel: 'High', proof: 'Incident Response Plan', location: 'Office' },
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
            { text: "Manage high-risk environments with laboratory safety and chemical management protocols.", icon: <TestTube /> },
            { text: "Uphold academic standards with checklists for research ethics, data management, and IRB compliance.", icon: <DatabaseZap /> },
            { text: "Ensure student safety in residences with hostel operations and fire safety audits.", icon: <Home /> },
            { text: "Run safe and successful campus events with risk assessment and crowd management SOPs.", icon: <Users /> },
            { text: "Support your student body with structured grievance, welfare, and anti-harassment processes.", icon: <HeartPulse /> },
            { text: "Protect institutional integrity with robust examination and academic integrity protocols.", icon: <BookOpen /> }
        ],
        previewScenario: {
            title: "Managing a Laboratory Chemical Spill",
            description: "A chemical spill occurs in a university chemistry lab. This scenario shows how checklists ensure a safe, compliant, and rapid response to contain the situation.",
            tasks: [
                { id: 'ULAB-10', description: "The lab user immediately follows the 'Chemical Spill' protocol, using the spill kit and notifying the Lab Supervisor.", sourceChecklist: "Laboratory Safety SOP", priority: 'High' },
                { id: 'UHOSTEL-02', description: "The 'Hostel Daily Inspection' checklist, which includes fire safety, ensures that evacuation routes from the lab building are always clear.", sourceChecklist: "Hostel Daily Inspection", priority: 'High' },
                { id: 'UEVENT-01', description: "The 'Event Safety Permit' process, used for a science fair in an adjacent hall, includes an evacuation plan that accounts for incidents in nearby labs, ensuring a coordinated response.", sourceChecklist: "Event Safety Permit SOP", priority: 'Medium' }
            ]
        },
        globalStandards: {
            title: "Aligned with Higher Education Standards",
            standards: [
                { name: "UGC Advisories", description: "Compliance with University Grants Commission safety and academic integrity guidelines." },
                { name: "OSHA Lab Safety / GLP", description: "For occupational health, safety, and Good Laboratory Practice." },
                { name: "Fire Act", description: "Compliance with national fire safety regulations." },
                { name: "ISO 45001", description: "International standard for occupational health and safety." }
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
                    {id: 'ULAB-01', description: "Ensure Material Safety Data Sheets (MSDS) are available for all chemicals.", priority: 'High', riskLevel: 'High', proof: 'MSDS Registry', location: 'Lab', consequence: 'Lack of access to MSDS information can lead to improper handling and severe injury in case of a spill or exposure.'},
                    {id: 'ULAB-02', description: "Verify all chemicals are correctly labeled and stored.", priority: 'High', riskLevel: 'High', proof: 'Chemical Storage Audit', location: 'Lab', consequence: 'Incorrect storage or labeling can lead to dangerous chemical reactions, fires, or explosions.'},
                    {id: 'ULAB-03', description: "Check that appropriate PPE is being used by all lab personnel.", priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Lab', consequence: 'Failure to use proper PPE (goggles, gloves, lab coats) is a leading cause of chemical burns and injuries.'},
                    {id: 'ULAB-04', description: "Inspect fume hoods for proper airflow and certification.", priority: 'High', riskLevel: 'High', proof: 'Fume Hood Log', location: 'Lab', consequence: 'A malfunctioning fume hood can expose researchers to toxic fumes, leading to long-term health problems.'},
                    {id: 'ULAB-05', description: "Manage chemical waste segregation and disposal records.", priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Lab', consequence: 'Improper disposal of chemical waste can result in environmental damage and severe regulatory penalties.'},
                    {id: 'ULAB-06', description: 'Test emergency eyewash stations and showers weekly.', priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Lab' },
                    {id: 'ULAB-07', description: 'Ensure lab equipment is calibrated and maintained.', priority: 'High', riskLevel: 'High', proof: 'Calibration Records', location: 'Lab' },
                    {id: 'ULAB-08', description: 'Maintain an inventory of all chemicals.', priority: 'High', riskLevel: 'High', proof: 'Chemical Inventory', location: 'Lab' },
                    {id: 'ULAB-09', description: 'Provide safety training to all new lab users.', priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Office' },
                    {id: 'ULAB-10', description: 'Have a clear protocol for chemical spills.', priority: 'High', riskLevel: 'High', proof: 'Spill Response Plan', location: 'Lab' },
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
                    {id: 'URESEARCH-06', description: 'Maintain a secure data backup.', priority: 'High', riskLevel: 'High', proof: 'Backup Log', location: 'IT' },
                    {id: 'URESEARCH-07', description: 'Manage data sharing agreements with external collaborators.', priority: 'High', riskLevel: 'High', proof: 'Data Sharing Agreements', location: 'Research Office' },
                    {id: 'URESEARCH-08', description: 'Ensure compliance with funding agency requirements.', priority: 'High', riskLevel: 'High', proof: 'Grant Compliance Checklist', location: 'Research Office' },
                    {id: 'URESEARCH-09', description: 'Provide ethics training to all researchers.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Research Office' },
                    {id: 'URESEARCH-10', description: 'Audit research projects for ethical compliance.', priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'Research Office' },
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
                    {id: 'UHOSTEL-06', description: 'Check for any maintenance issues and report them.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Request Log', location: 'Warden Office' },
                    {id: 'UHOSTEL-07', description: 'Monitor for any signs of bullying or harassment.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Warden Office' },
                    {id: 'UHOSTEL-08', description: 'Ensure all residents have emergency contact information.', priority: 'High', riskLevel: 'Medium', proof: 'Contact Info Verification', location: 'Warden Office' },
                    {id: 'UHOSTEL-09', description: 'Manage hostel entry and exit logs.', priority: 'High', riskLevel: 'High', proof: 'Entry/Exit Register', location: 'Hostel Entrance' },
                    {id: 'UHOSTEL-10', description: 'Conduct a headcount during fire drills.', priority: 'High', riskLevel: 'High', proof: 'Drill Attendance', location: 'Assembly Point' },
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
                    {id: 'UEVENT-06', description: 'Inspect stage and equipment setup for safety.', priority: 'High', riskLevel: 'High', proof: 'Stage Inspection Log', location: 'Event Venue' },
                    {id: 'UEVENT-07', description: 'Check all fire safety equipment at the venue.', priority: 'High', riskLevel: 'High', proof: 'Fire Equipment Log', location: 'Event Venue' },
                    {id: 'UEVENT-08', description: 'Have a communication plan for all event staff.', priority: 'High', riskLevel: 'High', proof: 'Communication Plan', location: 'Office' },
                    {id: 'UEVENT-09', description: 'Manage crowd control barriers and signage.', priority: 'High', riskLevel: 'High', proof: 'Crowd Control Plan', location: 'Event Venue' },
                    {id: 'UEVENT-10', description: 'Brief all staff on their roles during an emergency.', priority: 'High', riskLevel: 'High', proof: 'Emergency Briefing Log', location: 'Event Venue' },
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
                    {id: 'USUPPORT-06', description: 'Provide resources for mental health support.', priority: 'High', riskLevel: 'High', proof: 'Resource List', location: 'Student Welfare Office' },
                    {id: 'USUPPORT-07', description: 'Conduct awareness campaigns on student support services.', priority: 'High', riskLevel: 'Medium', proof: 'Campaign Material', location: 'Campus' },
                    {id: 'USUPPORT-08', description: 'Maintain confidentiality of all student cases.', priority: 'High', riskLevel: 'High', proof: 'Confidentiality Policy', location: 'Office' },
                    {id: 'USUPPORT-09', description: 'Get feedback from students on the effectiveness of support services.', priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Survey', location: 'System' },
                    {id: 'USUPPORT-10', description: 'Collaborate with external support organizations when needed.', priority: 'High', riskLevel: 'High', proof: 'Collaboration Agreements', location: 'Office' },
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
                    { id: 'AIE-06', description: 'Verify student identity before they enter the exam hall.', priority: 'High', riskLevel: 'High', proof: 'ID Check Log', location: 'Exam Hall Entrance' },
                    { id: 'AIE-07', description: 'Ensure proper seating arrangements to prevent cheating.', priority: 'High', riskLevel: 'Medium', proof: 'Seating Plan', location: 'Exam Hall' },
                    { id: 'AIE-08', description: 'Securely collect and transport answer sheets after the exam.', priority: 'High', riskLevel: 'High', proof: 'Transport Log', location: 'Exam Hall' },
                    { id: 'AIE-09', description: 'Maintain confidentiality of exam questions and results.', priority: 'High', riskLevel: 'High', proof: 'Confidentiality Agreements', location: 'Office' },
                    { id: 'AIE-10', description: 'Have a clear policy for students who miss exams due to illness.', priority: 'High', riskLevel: 'Medium', proof: 'Missed Exam Policy', location: 'Office' },
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
                    { id: 'CIM-06', description: 'Inspect drainage systems to prevent waterlogging.', priority: 'High', riskLevel: 'Medium', proof: 'Drainage Inspection', location: 'Campus-wide' },
                    { id: 'CIM-07', description: 'Check for any unsafe trees or branches.', priority: 'High', riskLevel: 'High', proof: 'Tree Inspection', location: 'Campus-wide' },
                    { id: 'CIM-08', description: 'Ensure all accessibility ramps and features are in good condition.', priority: 'High', riskLevel: 'High', proof: 'Accessibility Audit', location: 'Campus-wide' },
                    { id: 'CIM-09', description: 'Maintain a log of all maintenance activities.', priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Logbook', location: 'Office' },
                    { id: 'CIM-10', description: 'Plan and budget for major infrastructure repairs.', priority: 'High', riskLevel: 'High', proof: 'Budget Plan', location: 'Office' },
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
                    { id: 'LO-06', description: 'Assist students with finding resources.', priority: 'High', riskLevel: 'Low', proof: 'Assistance Log', location: 'Library' },
                    { id: 'LO-07', description: 'Manage library membership and records.', priority: 'High', riskLevel: 'Medium', proof: 'Membership System', location: 'System' },
                    { id: 'LO-08', description: 'Maintain an inventory of all library books.', priority: 'High', riskLevel: 'Medium', proof: 'Inventory Report', location: 'System' },
                    { id: 'LO-09', description: 'Organize library events and workshops.', priority: 'Medium', riskLevel: 'Low', proof: 'Event Calendar', location: 'Library' },
                    { id: 'LO-10', description: 'Ensure all library equipment (computers, printers) is functional.', priority: 'High', riskLevel: 'Medium', proof: 'Equipment Check Log', location: 'Library' },
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
            { text: "Ensure a sterile environment with Good Manufacturing Practice (GMP) and hygiene checklists.", icon: <SprayCan /> },
            { text: "Prevent deadly cross-contamination with a comprehensive allergen management system.", icon: <FileWarning /> },
            { text: "Enable rapid response to quality issues with batch traceability and mock recall drills.", icon: <Barcode /> },
            { text: "Guarantee food safety by managing Critical Control Points (CCPs) with preventive maintenance.", icon: <Wrench /> },
            { text: "Secure your supply chain with a stringent supplier verification and raw material QC process.", icon: <PackageCheck /> },
            { text: "Eliminate physical hazards with a meticulous glass and brittle plastic control program.", icon: <Eye /> }
        ],
        previewScenario: {
            title: "Preventing a Product Recall",
            description: "A routine quality check detects a potential allergen cross-contamination in a batch of cookies. This scenario shows how checklists prevent a costly and brand-damaging product recall.",
            tasks: [
                { id: 'FMAN-ALLERGEN-02', description: "The 'Allergen Control SOP' includes a mandatory check of packaging labels against the production schedule. This check flags that a batch made on a line after a peanut-containing product was accidentally put in non-allergen packaging.", sourceChecklist: "Allergen Control SOP", priority: 'High' },
                { id: 'FMAN-TRACE-03', description: "The 'Batch Traceability' system allows QA to instantly identify all affected raw material lots and finished goods, preventing the contaminated batch from ever leaving the warehouse.", sourceChecklist: "Batch Traceability Checklist", priority: 'High' },
                { id: 'FMAN-SSOP-03', description: "The 'Sanitation' checklist provides a verifiable log proving the line was cleaned, pointing the investigation towards a labeling error, not a cleaning failure, which speeds up the root cause analysis.", sourceChecklist: "Sanitation Standard Operating Procedure (SSOP)", priority: 'Medium' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Food Safety Standards",
            standards: [
                { name: "FSSAI / FSMS", description: "Compliance with Indian food safety regulations and management systems." },
                { name: "ISO 22000 / HACCP", description: "International standard for food safety management." },
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
                    { id: 'FMAN-SSOP-01', description: "Verify cleaning chemical concentrations are correct.", priority: 'High', riskLevel: 'High', proof: 'Concentration Log', location: 'Cleaning Station', consequence: 'Incorrect dilution can render sanitizers ineffective, leading to microbial growth and contamination.' },
                    { id: 'FMAN-SSOP-02', description: "Ensure specified contact time for sanitizers is being followed.", priority: 'High', riskLevel: 'High', proof: 'Supervisor Observation', location: 'Production Line', consequence: 'If contact time is too short, sanitization is incomplete, creating a high risk of foodborne pathogen survival.' },
                    { id: 'FMAN-SSOP-03', description: "Check that equipment is fully disassembled for cleaning as per the schedule.", priority: 'High', riskLevel: 'High', proof: 'Disassembly Log', location: 'Production Line', consequence: 'Failure to disassemble can leave hidden food residues that become a breeding ground for bacteria.' },
                    { id: 'FMAN-SSOP-04', description: "Conduct ATP swabbing or other verification methods to confirm cleanliness.", priority: 'High', riskLevel: 'High', proof: 'Swab Test Results', location: 'Lab', consequence: 'Provides scientific proof that cleaning procedures are effective, a key requirement for any food safety audit.' },
                    { id: 'FMAN-SSOP-05', description: "Supervisor to sign off on all cleaning and sanitation logs.", priority: 'High', riskLevel: 'High', proof: 'Signed Logs', location: 'Office', consequence: 'Creates clear accountability and a legal record of due diligence in maintaining a hygienic environment.' },
                    { id: 'FMAN-SSOP-06', description: 'Maintain a master sanitation schedule.', priority: 'High', riskLevel: 'High', proof: 'Master Schedule', location: 'QA Office' },
                    { id: 'FMAN-SSOP-07', description: 'Train staff on SSOPs.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'FMAN-SSOP-08', description: 'Ensure proper drainage in all production areas.', priority: 'High', riskLevel: 'Medium', proof: 'Drain Inspection Log', location: 'Production Area' },
                    { id: 'FMAN-SSOP-09', description: 'Manage waste disposal to prevent pest attraction.', priority: 'High', riskLevel: 'High', proof: 'Waste Management Log', location: 'Waste Area' },
                    { id: 'FMAN-SSOP-10', description: 'Review and update SSOPs annually.', priority: 'High', riskLevel: 'High', proof: 'Review Log', location: 'QA Office' },
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
                    { id: 'FMAN-ALLERGEN-06', description: 'Use dedicated utensils and equipment for allergens.', priority: 'High', riskLevel: 'High', proof: 'Equipment Audit', location: 'Production Line' },
                    { id: 'FMAN-ALLERGEN-07', description: 'Have a clear spill response plan for allergenic materials.', priority: 'High', riskLevel: 'High', proof: 'Spill Plan', location: 'Production' },
                    { id: 'FMAN-ALLERGEN-08', description: 'Maintain an allergen matrix for all products.', priority: 'High', riskLevel: 'High', proof: 'Allergen Matrix', location: 'QA Office' },
                    { id: 'FMAN-ALLERGEN-09', description: 'Conduct regular audits of allergen controls.', priority: 'High', riskLevel: 'High', proof: 'Allergen Audit Report', location: 'QA Office' },
                    { id: 'FMAN-ALLERGEN-10', description: 'Communicate allergen information to all relevant staff.', priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Office' },
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
                    { id: 'FMAN-TRACE-06', description: 'Maintain records for the required retention period.', priority: 'High', riskLevel: 'High', proof: 'Record Retention Policy', location: 'Office' },
                    { id: 'FMAN-TRACE-07', description: 'Link traceability data to the distribution chain.', priority: 'High', riskLevel: 'High', proof: 'Distribution Log', location: 'System' },
                    { id: 'FMAN-TRACE-08', description: 'Train staff on the importance of accurate record-keeping for traceability.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'FMAN-TRACE-09', description: 'Validate the traceability system annually.', priority: 'High', riskLevel: 'High', proof: 'Validation Report', location: 'Office' },
                    { id: 'FMAN-TRACE-10', description: 'Have a clear system for identifying and holding non-conforming products.', priority: 'High', riskLevel: 'High', proof: 'Hold & Release SOP', location: 'QA Office' },
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
                    { id: 'FMAN-CCP-PM-06', description: 'Inspect seals and gaskets on equipment.', priority: 'High', riskLevel: 'High', proof: 'Seal Inspection Log', location: 'Production Line' },
                    { id: 'FMAN-CCP-PM-07', description: 'Maintain a log of all maintenance activities.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Logbook', location: 'Maintenance Office' },
                    { id: 'FMAN-CCP-PM-08', description: 'Use food-grade lubricants where necessary.', priority: 'High', riskLevel: 'High', proof: 'Lubricant Purchase Records', location: 'Maintenance Office' },
                    { id: 'FMAN-CCP-PM-09', description: 'Train maintenance staff on food safety requirements.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'FMAN-CCP-PM-10', description: 'Have a clear procedure for handling breakdowns of CCP equipment.', priority: 'High', riskLevel: 'High', proof: 'Breakdown SOP', location: 'Maintenance Office' },
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
                    { id: 'FMAN-RECALL-06', description: 'Define roles and responsibilities of the recall team.', priority: 'High', riskLevel: 'High', proof: 'Recall Team Charter', location: 'Office' },
                    { id: 'FMAN-RECALL-07', description: 'Have a plan for handling recalled product.', priority: 'High', riskLevel: 'High', proof: 'Product Disposition Plan', location: 'Office' },
                    { id: 'FMAN-RECALL-08', description: 'Test communication channels for the recall.', priority: 'High', riskLevel: 'High', proof: 'Comms Test Log', location: 'Office' },
                    { id: 'FMAN-RECALL-09', description: 'Train the recall team on their roles.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'FMAN-RECALL-10', description: 'Maintain all recall-related documentation.', priority: 'High', riskLevel: 'High', proof: 'Recall File', location: 'Office' },
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
                    { id: 'GBPC-06', description: 'Use metal-detectable plastic where possible.', priority: 'Medium', riskLevel: 'Medium', proof: 'Material Specs', location: 'Procurement' },
                    { id: 'GBPC-07', description: 'Investigate any incidents of glass or plastic contamination.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'QA Office' },
                    { id: 'GBPC-08', description: 'Restrict the use of glass in production areas.', priority: 'High', riskLevel: 'High', proof: 'Policy Document', location: 'QA Office' },
                    { id: 'GBPC-09', description: 'Perform regular checks of sight glasses on equipment.', priority: 'High', riskLevel: 'High', proof: 'Sight Glass Log', location: 'Production Line' },
                    { id: 'GBPC-10', description: 'Review the policy annually.', priority: 'High', riskLevel: 'High', proof: 'Policy Review Log', location: 'QA Office' },
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
                    { id: 'PCM-06', description: 'Ensure all drains are covered and clean.', priority: 'High', riskLevel: 'High', proof: 'Drain Inspection Log', location: 'Facility-wide' },
                    { id: 'PCM-07', description: 'Manage waste to prevent pest attraction.', priority: 'High', riskLevel: 'High', proof: 'Waste Management Log', location: 'Waste Area' },
                    { id: 'PCM-08', description: 'Train employees to report any pest sightings.', priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
                    { id: 'PCM-09', description: 'Use insect light traps (ILTs) in appropriate areas.', priority: 'High', riskLevel: 'Medium', proof: 'ILT Layout Plan', location: 'QA Office' },
                    { id: 'PCM-10', description: 'Review the pest control program annually.', priority: 'High', riskLevel: 'High', proof: 'Program Review Minutes', location: 'QA Office' },
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
                    { id: 'SAV-06', description: 'Review supplier performance annually.', priority: 'High', riskLevel: 'High', proof: 'Performance Review Report', location: 'Procurement File' },
                    { id: 'SAV-07', description: 'Have a clear agreement on quality and delivery terms.', priority: 'High', riskLevel: 'High', proof: 'Signed Supplier Agreement', location: 'Procurement File' },
                    { id: 'SAV-08', description: 'Test incoming raw materials for quality.', priority: 'High', riskLevel: 'High', proof: 'Incoming QC Report', location: 'Lab' },
                    { id: 'SAV-09', description: 'Track supplier non-conformances.', priority: 'High', riskLevel: 'High', proof: 'Non-Conformance Log', location: 'System' },
                    { id: 'SAV-10', description: 'Ensure suppliers have a traceability system in place.', priority: 'High', riskLevel: 'High', proof: 'Supplier Traceability Audit', location: 'Procurement File' },
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
            { text: "Prevent fatal accidents with a rigorous Lockout-Tagout (LOTO) and machine guarding system.", icon: <Lock /> },
            { text: "Proactively identify risks with a structured Job Hazard Analysis (JHA) and risk assessment process.", icon: <FileWarning /> },
            { text: "Ensure worker safety with a comprehensive Personal Protective Equipment (PPE) compliance program.", icon: <HardHat /> },
            { text: "Learn from mistakes and prevent recurrence with a formal incident investigation and root-cause analysis workflow.", icon: <Bug /> },
            { text: "Manage high-risk tasks safely using a permit-to-work system for confined space and hot work.", icon: <FileCheck /> },
            { text: "Avoid chemical disasters with safe chemical handling and storage procedures.", icon: <TestTube /> }
        ],
        previewScenario: {
            title: "Preventing a Fatal 'Lockout-Tagout' Failure",
            description: "A maintenance worker is severely injured when a machine they are working on is accidentally restarted. This scenario illustrates how checklists prevent catastrophic LOTO failures.",
            tasks: [
                { id: 'MFG-LOTO-03', description: "The 'Lockout-Tagout (LOTO)' checklist requires the worker to physically try to start the machine (verification of zero energy state) after applying their lock, a step that was missed in the real incident.", sourceChecklist: "Lockout-Tagout (LOTO) Procedure", priority: 'High' },
                { id: 'MFG-JHA-03', description: "The 'Job Hazard Analysis' for this specific maintenance task would have identified 'accidental re-energization' as a key hazard and mandated the LOTO procedure as a primary control.", sourceChecklist: "Job Hazard Analysis (JHA)", priority: 'High' },
                { id: 'MFG-INC-04', description: "Even if a near-miss had occurred previously, the 'Incident Investigation' SOP would have triggered a root cause analysis and a CAPA plan to reinforce the LOTO procedure, preventing the future accident.", sourceChecklist: "Incident Investigation SOP", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global EHS Standards",
            standards: [
                { name: "ISO 45001", description: "The international standard for occupational health and safety (OHS)." },
                { name: "OSHA (29 CFR)", description: "Adherence to U.S. Occupational Safety and Health Administration standards." },
                { name: "Factories Act / CPCB", description: "Compliance with India's primary legislation for factory safety & pollution control." },
                { name: "ISO 14001", description: "International standard for environmental management." }
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
                    { id: 'MFG-LOTO-01', description: 'Identify and isolate all energy sources for the equipment.', priority: 'High', riskLevel: 'High', proof: 'Isolation Log', location: 'Equipment', consequence: 'Failure to isolate all energy sources (electrical, hydraulic, pneumatic) can lead to accidental startup and severe injury or death.'},
                    { id: 'MFG-LOTO-02', description: 'Apply personal locks and tags to each isolation point.', priority: 'High', riskLevel: 'High', proof: 'Photo of lock/tag', location: 'Equipment', consequence: 'Ensures that the equipment cannot be re-energized by anyone other than the person performing the maintenance.'},
                    { id: 'MFG-LOTO-03', description: 'Verify zero energy state by attempting to start the machine.', priority: 'High', riskLevel: 'High', proof: 'Zero Energy Check Log', location: 'Equipment', consequence: 'This is the most critical step. It confirms that the isolation was successful and stored energy has been released, preventing unexpected movement.'},
                    { id: 'MFG-LOTO-04', description: 'Use multi-person lock bars for group maintenance tasks.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Equipment', consequence: 'Ensures the machine cannot be restarted until every single person working on it has removed their personal lock.'},
                    { id: 'MFG-LOTO-05', description: 'Complete return-to-service checks before removing locks.', priority: 'High', riskLevel: 'High', proof: 'Return-to-Service Form', location: 'Equipment', consequence: 'Guarantees that all guards are replaced and the area is safe before the machine is powered back on.'},
                    { id: 'MFG-LOTO-06', description: 'Maintain a LOTO registry of all authorized personnel.', priority: 'High', riskLevel: 'High', proof: 'LOTO Registry', location: 'EHS Office' },
                    { id: 'MFG-LOTO-07', description: 'Audit LOTO procedures annually.', priority: 'High', riskLevel: 'High', proof: 'LOTO Audit Report', location: 'EHS Office' },
                    { id: 'MFG-LOTO-08', description: 'Provide LOTO training to all relevant employees.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'MFG-LOTO-09', description: 'Ensure LOTO devices are standardized and readily available.', priority: 'High', riskLevel: 'High', proof: 'Device Inventory', location: 'Stores' },
                    { id: 'MFG-LOTO-10', description: 'Investigate any LOTO violations.', priority: 'High', riskLevel: 'High', proof: 'Investigation Report', location: 'EHS Office' },
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
                    { id: 'MFG-JHA-06', description: 'Communicate the JHA to all workers involved in the task.', priority: 'High', riskLevel: 'High', proof: 'Toolbox Talk Log', location: 'Work Area' },
                    { id: 'MFG-JHA-07', description: 'Update JHA if the task changes.', priority: 'High', riskLevel: 'High', proof: 'Updated JHA Form', location: 'Office' },
                    { id: 'MFG-JHA-08', description: 'Maintain a library of JHAs for common tasks.', priority: 'High', riskLevel: 'Medium', proof: 'JHA Library', location: 'Safety Office' },
                    { id: 'MFG-JHA-09', description: 'Train employees on how to conduct a JHA.', priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
                    { id: 'MFG-JHA-10', description: 'Use JHA findings to improve overall safety procedures.', priority: 'High', riskLevel: 'High', proof: 'Procedure Update Log', location: 'Safety Office' },
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
                    { id: 'MFG-PPE-06', description: 'Ensure PPE is stored correctly.', priority: 'High', riskLevel: 'Medium', proof: 'Storage Audit', location: 'Stores' },
                    { id: 'MFG-PPE-07', description: 'Provide training on the proper use and maintenance of PPE.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'MFG-PPE-08', description: 'Assess new tasks for PPE requirements.', priority: 'High', riskLevel: 'High', proof: 'JHA', location: 'Safety Office' },
                    { id: 'MFG-PPE-09', description: 'Enforce PPE policy with disciplinary action if necessary.', priority: 'High', riskLevel: 'High', proof: 'Disciplinary Records', location: 'HR' },
                    { id: 'MFG-PPE-10', description: 'Regularly get feedback from users on PPE comfort and effectiveness.', priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Survey', location: 'EHS Office' },
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
                    { id: 'MFG-INC-06', description: 'Form an investigation team for serious incidents.', priority: 'High', riskLevel: 'High', proof: 'Team Charter', location: 'Office' },
                    { id: 'MFG-INC-07', description: 'Interview all involved parties and witnesses.', priority: 'High', riskLevel: 'High', proof: 'Interview Notes', location: 'Office' },
                    { id: 'MFG-INC-08', description: 'Share lessons learned with all employees.', priority: 'High', riskLevel: 'Medium', proof: 'Safety Alert', location: 'Company-wide' },
                    { id: 'MFG-INC-09', description: 'Update risk assessments based on incident findings.', priority: 'High', riskLevel: 'High', proof: 'Updated Risk Assessment', location: 'Safety Office' },
                    { id: 'MFG-INC-10', description: 'Maintain an incident database for trend analysis.', priority: 'High', riskLevel: 'High', proof: 'Incident Database', location: 'System' },
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
                    { id: 'MFG-PERMIT-06', description: 'Isolate all energy sources before starting work.', priority: 'High', riskLevel: 'High', proof: 'LOTO Log', location: 'Work Area' },
                    { id: 'MFG-PERMIT-07', description: 'Provide adequate ventilation for confined spaces.', priority: 'High', riskLevel: 'High', proof: 'Ventilation Setup', location: 'Work Area' },
                    { id: 'MFG-PERMIT-08', description: 'Ensure all required PPE is used.', priority: 'High', riskLevel: 'High', proof: 'PPE Check', location: 'Work Area' },
                    { id: 'MFG-PERMIT-09', description: 'Train all personnel involved in permit-required work.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'MFG-PERMIT-10', description: 'Audit permit-to-work system annually.', priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'Safety Office' },
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
                    { id: 'MGA-06', description: 'Ensure emergency stop buttons are accessible and functional.', priority: 'High', riskLevel: 'High', proof: 'E-Stop Test Log', location: 'Shop Floor' },
                    { id: 'MGA-07', description: 'Check for any new hazards created by modifications to machinery.', priority: 'High', riskLevel: 'High', proof: 'Change Management Review', location: 'Office' },
                    { id: 'MGA-08', description: 'Keep the area around machinery clean and free of obstructions.', priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Log', location: 'Shop Floor' },
                    { id: 'MGA-09', description: 'Review machine guarding at least annually.', priority: 'High', riskLevel: 'High', proof: 'Annual Review Report', location: 'Safety Office' },
                    { id: 'MGA-10', description: 'Ensure all guards meet regulatory standards.', priority: 'High', riskLevel: 'High', proof: 'Compliance Certificate', location: 'Safety Office' },
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
                    { id: 'CHS-06', description: 'Check ventilation in chemical storage areas.', priority: 'High', riskLevel: 'High', proof: 'Ventilation Check', location: 'Chemical Store' },
                    { id: 'CHS-07', description: 'Inspect secondary containment for any leaks or damage.', priority: 'High', riskLevel: 'High', proof: 'Containment Inspection', location: 'Chemical Store' },
                    { id: 'CHS-08', description: 'Maintain an inventory of all chemicals.', priority: 'High', riskLevel: 'High', proof: 'Chemical Inventory', location: 'System' },
                    { id: 'CHS-09', description: 'Train staff on safe chemical handling procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'CHS-10', description: 'Have a clear emergency response plan for chemical spills.', priority: 'High', riskLevel: 'High', proof: 'Spill Response Plan', location: 'Safety Office' },
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
                    { id: 'ESA-06', description: 'Conduct thermal imaging of electrical panels to detect hot spots.', priority: 'High', riskLevel: 'High', proof: 'Thermal Imaging Report', location: 'Electrical Rooms' },
                    { id: 'ESA-07', description: 'Ensure all temporary wiring is removed after use.', priority: 'High', riskLevel: 'High', proof: 'Temporary Wiring Log', location: 'Facility-wide' },
                    { id: 'ESA-08', description: 'Check that all staff are trained on electrical safety.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'ESA-09', description: 'Use only certified electricians for electrical work.', priority: 'High', riskLevel: 'High', proof: 'Contractor Records', location: 'Procurement' },
                    { id: 'ESA-10', description: 'Review and update the electrical safety program annually.', priority: 'High', riskLevel: 'High', proof: 'Program Review Minutes', location: 'Safety Office' },
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
            { text: "Prevent rack collapses and storage accidents with rigorous storage, racking, and pallet safety SOPs.", icon: <Package /> },
            { text: "Ensure operator and pedestrian safety with pre-operation checklists for forklifts and MHE.", icon: <HardHat /> },
            { text: "Mitigate fire risks specific to warehouses with fire prevention and electrical safety audits.", icon: <Siren /> },
            { text: "Improve accuracy and reduce errors with stringent QC for inbound receiving and outbound dispatch.", icon: <FileCheck /> },
            { text: "Handle dangerous goods safely with compliant hazardous materials (Hazmat) storage protocols.", icon: <FileWarning /> },
            { text: "Achieve near-perfect stock accuracy with a structured inventory cycle counting system.", icon: <Barcode /> }
        ],
        previewScenario: {
            title: "Preventing a Warehouse Collapse",
            description: "A section of racking in a busy warehouse collapses, causing significant inventory damage and a near-miss injury. This scenario shows how checklists prevent such structural failures.",
            tasks: [
                { id: 'LOG-STORE-05', description: "The 'Storage & Pallet Safety' SOP mandates a weekly audit of racking for signs of damage, overloading, or instability, which would have caught the compromised rack before it failed.", sourceChecklist: "Storage & Pallet Safety SOP", priority: 'High' },
                { id: 'LOG-FORKLIFT-02', description: "The 'Forklift Pre-Op' checklist includes verifying the load capacity plate, preventing operators from accidentally overloading the racks with a weight they didn't realize was too heavy.", sourceChecklist: "Forklift Pre-Op Checklist", priority: 'High' },
                { id: 'LOG-RECV-01', description: "The 'Receiving Inspection' SOP ensures that incoming goods are weighed and checked against the PO, preventing overweight pallets from ever entering the storage system in the first place.", sourceChecklist: "Receiving Inspection SOP", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Logistics Standards",
            standards: [
                { name: "ISO 45001 / OSHA", description: "For occupational health and warehouse safety." },
                { name: "IATA DG / IMDG / ADR", description: "Regulations for transporting dangerous goods by air, sea, and road." },
                { name: "ISO 28000", description: "For supply chain security management systems." },
                { name: "Fire Safety Act", description: "Compliance with local fire safety regulations for storage." }
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
                    { id: 'LOG-STORE-01', description: 'Verify that pallets are not stacked above the marked maximum height.', priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Racking Area', consequence: 'Overstacking can lead to pallet collapse, causing inventory damage and serious injury to workers.' },
                    { id: 'LOG-STORE-02', description: 'Ensure all aisles are clear and meet the minimum width requirement.', priority: 'High', riskLevel: 'High', proof: 'Aisle Inspection Log', location: 'Warehouse Floor', consequence: 'Blocked aisles are a primary cause of forklift accidents and a major fire safety violation that can block evacuation routes.' },
                    { id: 'LOG-STORE-03', description: 'Inspect pallets for damage or instability before storage.', priority: 'High', riskLevel: 'High', proof: 'Pallet Inspection Log', location: 'Receiving Area', consequence: 'Storing goods on a damaged pallet is a ticking time bomb that can lead to rack failure and cascading collapses.' },
                    { id: 'LOG-STORE-04', description: 'Check that loads are stable and properly shrink-wrapped.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Staging Area', consequence: 'Unstable loads can shift and fall during transport or storage, posing a significant risk to personnel.' },
                    { id: 'LOG-STORE-05', description: 'Audit racking systems for any signs of damage or overloading.', priority: 'High', riskLevel: 'High', proof: 'Racking Inspection Log', location: 'Racking Area', consequence: 'Damaged racking can fail without warning, leading to catastrophic inventory loss and potential fatalities.' },
                    { id: 'LOG-STORE-06', description: 'Store heavier items on lower shelves.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Racking Area' },
                    { id: 'LOG-STORE-07', description: 'Ensure proper lighting in all storage areas.', priority: 'High', riskLevel: 'Medium', proof: 'Lighting Check', location: 'Warehouse Floor' },
                    { id: 'LOG-STORE-08', description: 'Keep storage areas clean and free of debris.', priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Log', location: 'Warehouse Floor' },
                    { id: 'LOG-STORE-09', description: 'Train staff on safe stacking and storage practices.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'LOG-STORE-10', description: 'Periodically inspect the structural integrity of the racking.', priority: 'High', riskLevel: 'High', proof: 'Structural Engineer Report', location: 'Office' },
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
                    { id: 'LOG-FORKLIFT-06', description: 'Check tire condition and pressure.', priority: 'High', riskLevel: 'High', proof: 'Tire Check', location: 'Forklift' },
                    { id: 'LOG-FORKLIFT-07', description: 'Ensure forks are in good condition.', priority: 'High', riskLevel: 'High', proof: 'Fork Inspection', location: 'Forklift' },
                    { id: 'LOG-FORKLIFT-08', description: 'Check battery charge or fuel level.', priority: 'High', riskLevel: 'Medium', proof: 'Gauge Check', location: 'Forklift' },
                    { id: 'LOG-FORKLIFT-09', description: 'Report any defects immediately.', priority: 'High', riskLevel: 'High', proof: 'Defect Report', location: 'System' },
                    { id: 'LOG-FORKLIFT-10', description: 'Do not operate a faulty forklift.', priority: 'High', riskLevel: 'High', proof: 'Operator Declaration', location: 'Pre-Op Checklist Form' },
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
                    { id: 'LOG-RECV-06', description: 'Check for correct labeling and marking.', priority: 'High', riskLevel: 'High', proof: 'Label Check', location: 'Receiving Dock' },
                    { id: 'LOG-RECV-07', description: 'Verify temperature for temperature-sensitive goods.', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Receiving Dock' },
                    { id: 'LOG-RECV-08', description: 'Update the inventory system upon receipt.', priority: 'High', riskLevel: 'High', proof: 'System Entry', location: 'System' },
                    { id: 'LOG-RECV-09', description: 'Clean receiving area after each delivery.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Receiving Dock' },
                    { id: 'LOG-RECV-10', description: 'Report any discrepancies to the procurement team.', priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'System' },
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
                    { id: 'LOG-HAZMAT-06', description: 'Train employees on hazmat handling and emergency procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'LOG-HAZMAT-07', description: 'Ensure proper ventilation in hazmat storage areas.', priority: 'High', riskLevel: 'High', proof: 'Ventilation Check', location: 'Hazmat Area' },
                    { id: 'LOG-HAZMAT-08', description: 'Maintain a hazmat inventory.', priority: 'High', riskLevel: 'High', proof: 'Hazmat Inventory Log', location: 'System' },
                    { id: 'LOG-HAZMAT-09', description: 'Have a clear spill response plan.', priority: 'High', riskLevel: 'High', proof: 'Spill Response Plan', location: 'Safety Office' },
                    { id: 'LOG-HAZMAT-10', description: 'Follow all regulations for transporting hazardous materials.', priority: 'High', riskLevel: 'High', proof: 'Transport Checklist', location: 'Dispatch Office' },
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
                    { id: 'ICC-06', description: 'Freeze inventory locations during counting.', priority: 'High', riskLevel: 'High', proof: 'System Screenshot', location: 'System' },
                    { id: 'ICC-07', description: 'Reconcile counts and post adjustments on the same day.', priority: 'High', riskLevel: 'High', proof: 'Reconciliation Log', location: 'System' },
                    { id: 'ICC-08', description: 'Identify root causes of discrepancies.', priority: 'High', riskLevel: 'High', proof: 'Root Cause Analysis', location: 'Office' },
                    { id: 'ICC-09', description: 'Train staff on correct inventory handling.', priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Office' },
                    { id: 'ICC-10', description: 'Audit the cycle counting process itself periodically.', priority: 'High', riskLevel: 'Medium', proof: 'Process Audit Report', location: 'Office' },
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
                    { id: 'WH-06', description: 'Report any spills or leaks immediately.', priority: 'High', riskLevel: 'High', proof: 'Spill Report', location: 'System' },
                    { id: 'WH-07', description: 'Maintain good lighting throughout the warehouse.', priority: 'High', riskLevel: 'Medium', proof: 'Lighting Check', location: 'Warehouse Floor' },
                    { id: 'WH-08', description: 'Ensure proper ventilation.', priority: 'High', riskLevel: 'Medium', proof: 'Ventilation Check', location: 'Warehouse Floor' },
                    { id: 'WH-09', description: 'Implement a "clean as you go" policy.', priority: 'High', riskLevel: 'Medium', proof: 'Policy Document', location: 'Office' },
                    { id: 'WH-10', description: 'Conduct regular housekeeping audits.', priority: 'High', riskLevel: 'Medium', proof: 'Audit Reports', location: 'Office' },
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
                    { id: 'DYM-06', description: 'Enforce speed limits in the yard.', priority: 'High', riskLevel: 'High', proof: 'Speed Limit Signage', location: 'Yard' },
                    { id: 'DYM-07', description: 'Separate pedestrian and vehicle traffic.', priority: 'High', riskLevel: 'High', proof: 'Marked Walkways', location: 'Yard' },
                    { id: 'DYM-08', description: 'Ensure proper lighting in the yard during night operations.', priority: 'High', riskLevel: 'High', proof: 'Lighting Check', location: 'Yard' },
                    { id: 'DYM-09', description: 'Have a clear plan for emergency situations in the yard.', priority: 'High', riskLevel: 'High', proof: 'Yard Emergency Plan', location: 'Office' },
                    { id: 'DYM-10', description: 'Train yard personnel on safe operating procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
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
                    { id: 'SAC-01', description: 'Check ID of everyone entering the facility.', priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Main Gate' },
                    { id: 'SAC-02', description: 'Monitor CCTV cameras for suspicious activity.', priority: 'High', riskLevel: 'High', proof: 'CCTV Log', location: 'Security Office' },
                    { id: 'SAC-03', description: 'Perform regular patrols of the perimeter and internal areas.', priority: 'High', riskLevel: 'Medium', proof: 'Patrol Log', location: 'Facility-wide' },
                    { id: 'SAC-04', description: 'Ensure all doors and gates are secured after hours.', priority: 'High', riskLevel: 'High', proof: 'Closing Log', location: 'Various' },
                    { id: 'SAC-05', description: 'Manage visitor and contractor access through a permit system.', priority: 'High', riskLevel: 'High', proof: 'Visitor Permit Log', location: 'Security Office' },
                    { id: 'SAC-06', description: 'Conduct random vehicle inspections.', priority: 'High', riskLevel: 'High', proof: 'Vehicle Inspection Log', location: 'Main Gate' },
                    { id: 'SAC-07', description: 'Implement a key control system.', priority: 'High', riskLevel: 'High', proof: 'Key Log', location: 'Security Office' },
                    { id: 'SAC-08', description: 'Ensure all security equipment is functional.', priority: 'High', riskLevel: 'High', proof: 'Equipment Check Log', location: 'Security Office' },
                    { id: 'SAC-09', description: 'Train security staff on their duties and responsibilities.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'SAC-10', description: 'Have a clear protocol for responding to security incidents.', priority: 'High', riskLevel: 'High', proof: 'Incident Response Plan', location: 'Security Office' },
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
            { text: "Secure your project from day one with pre-production legal clearances (Title, Script, Life Rights).", icon: <FileLock /> },
            { text: "Create a safe set for cast and crew with robust on-set safety and EHS protocols.", icon: <Siren /> },
            { text: "Manage high-risk scenes safely with a dedicated stunt and special effects coordination checklist.", icon: <Car /> },
            { text: "Protect your intellectual property with post-production data security and NDA compliance.", icon: <Lock /> },
            { text: "Keep your budget on track with a rigorous vendor contract and invoice auditing process.", icon: <DollarSign /> },
            { text: "Streamline logistics with checklists for location scouting, permitting, and management.", icon: <Map /> }
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
                    { id: 'FILM-LEGAL-01', description: "Clear and register the film title.", priority: 'High', riskLevel: 'High', proof: 'Title Registration Certificate', location: 'Legal File', consequence: 'Starting production without a cleared title can lead to costly rebranding or legal disputes with another project of the same name.' },
                    { id: 'FILM-LEGAL-02', description: "Secure chain-of-title for the script (writer agreements, source material rights).", priority: 'High', riskLevel: 'High', proof: 'Writer Agreements', location: 'Legal File', consequence: 'A broken chain-of-title can invalidate your ownership of the script, putting the entire project at risk.' },
                    { id: 'FILM-LEGAL-03', description: "Obtain life rights agreements for any real people depicted.", priority: 'High', riskLevel: 'High', proof: 'Life Rights Agreement', location: 'Legal File', consequence: 'Failure to secure life rights can lead to defamation lawsuits and injunctions that halt production, as seen in many real-life cases.' },
                    { id: 'FILM-LEGAL-04', description: "Secure Errors & Omissions (E&O) insurance.", priority: 'High', riskLevel: 'High', proof: 'E&O Insurance Policy', location: 'Legal File', consequence: 'Distributors will not pick up a film without E&O insurance, making the project commercially unviable.' },
                    { id: 'FILM-LEGAL-05', description: "Ensure all cast and key crew have signed their contracts.", priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'Production Office', consequence: 'Verbal agreements are not enforceable. A lack of signed contracts can lead to disputes over payment, rights, and obligations.' },
                    { id: 'FILM-LEGAL-06', description: 'Clear all music and stock footage rights.', priority: 'High', riskLevel: 'High', proof: 'License Agreements', location: 'Legal File' },
                    { id: 'FILM-LEGAL-07', description: 'Verify locations have been cleared for filming.', priority: 'High', riskLevel: 'High', proof: 'Location Agreements', location: 'Legal File' },
                    { id: 'FILM-LEGAL-08', description: 'Check script for any potential defamation or privacy issues.', priority: 'High', riskLevel: 'High', proof: 'Script Clearance Report', location: 'Legal File' },
                    { id: 'FILM-LEGAL-09', description: 'Ensure compliance with all guild and union agreements.', priority: 'High', riskLevel: 'High', proof: 'Guild Agreements', location: 'Production Office' },
                    { id: 'FILM-LEGAL-10', description: 'Set up the production company and bank accounts.', priority: 'High', riskLevel: 'High', proof: 'Corporate Documents', location: 'Production Office' },
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
                    { id: 'FILM-SAFE-05', description: "Ensure clear access to all emergency exits.", priority: 'High', riskLevel: 'High', proof: 'Exit Path Check', location: 'Set' },
                    { id: 'FILM-SAFE-06', description: 'Inspect all scaffolding and rigging.', priority: 'High', riskLevel: 'High', proof: 'Rigging Inspection Log', location: 'Set' },
                    { id: 'FILM-SAFE-07', description: 'Manage on-set vehicle safety.', priority: 'High', riskLevel: 'High', proof: 'Vehicle Safety Log', location: 'Set' },
                    { id: 'FILM-SAFE-08', description: 'Provide adequate drinking water and sanitation facilities.', priority: 'High', riskLevel: 'Medium', proof: 'Facility Check', location: 'Set' },
                    { id: 'FILM-SAFE-09', description: 'Enforce PPE requirements for all crew.', priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Set' },
                    { id: 'FILM-SAFE-10', description: 'Have a clear plan for adverse weather conditions.', priority: 'High', riskLevel: 'High', proof: 'Weather Contingency Plan', location: 'Production Office' },
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
                    { id: 'FILM-STUNT-05', description: "Clear the set of all non-essential personnel before the stunt.", priority: 'High', riskLevel: 'High', proof: 'Set Clearance Log', location: 'Set' },
                    { id: 'FILM-STUNT-06', description: 'Brief all involved personnel on the stunt procedure.', priority: 'High', riskLevel: 'High', proof: 'Stunt Briefing Log', location: 'Set' },
                    { id: 'FILM-STUNT-07', description: 'Use a qualified stunt coordinator for all stunts.', priority: 'High', riskLevel: 'High', proof: 'Coordinator Contract', location: 'Production Office' },
                    { id: 'FILM-STUNT-08', description: 'Test all special effects and pyrotechnics before filming.', priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Set' },
                    { id: 'FILM-STUNT-09', description: 'Have multiple camera angles to capture the action safely.', priority: 'High', riskLevel: 'Medium', proof: 'Camera Plot', location: 'Production Office' },
                    { id: 'FILM-STUNT-10', description: 'Get sign-off from all key personnel before executing the stunt.', priority: 'High', riskLevel: 'High', proof: 'Sign-off Sheet', location: 'Set' },
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
                    { id: 'FILM-DATA-05', description: "Wipe data from all rented equipment before returning it.", priority: 'High', riskLevel: 'High', proof: 'Data Wipe Certificate', location: 'IT' },
                    { id: 'FILM-DATA-06', description: 'Encrypt all hard drives used for transport of footage.', priority: 'High', riskLevel: 'High', proof: 'Encryption Log', location: 'IT' },
                    { id: 'FILM-DATA-07', description: 'Implement a clean desk policy in the production office.', priority: 'Medium', riskLevel: 'Medium', proof: 'Policy Document', location: 'Production Office' },
                    { id: 'FILM-DATA-08', description: 'Securely store all physical scripts and storyboards.', priority: 'High', riskLevel: 'High', proof: 'Storage Log', location: 'Production Office' },
                    { id: 'FILM-DATA-09', description: 'Have a data breach response plan.', priority: 'High', riskLevel: 'High', proof: 'Breach Response Plan', location: 'Production Office' },
                    { id: 'FILM-DATA-10', description: 'Train staff on data security best practices.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
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
                    { id: 'FILM-BILL-05', description: "Reconcile vendor statements monthly to ensure there are no discrepancies.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Accounts Office' },
                    { id: 'FILM-BILL-06', description: 'Check for duplicate invoices.', priority: 'High', riskLevel: 'High', proof: 'Duplicate Check Log', location: 'Accounts Office' },
                    { id: 'FILM-BILL-07', description: 'Verify all tax calculations are correct.', priority: 'High', riskLevel: 'High', proof: 'Tax Audit', location: 'Accounts Office' },
                    { id: 'FILM-BILL-08', description: 'Process payments within the agreed terms.', priority: 'High', riskLevel: 'Medium', proof: 'Payment Records', location: 'System' },
                    { id: 'FILM-BILL-09', description: 'Have a clear process for disputing invoices.', priority: 'High', riskLevel: 'High', proof: 'Dispute Resolution SOP', location: 'Accounts Office' },
                    { id: 'FILM-BILL-10', description: 'Maintain all financial records for auditing purposes.', priority: 'High', riskLevel: 'High', proof: 'Financial Records File', location: 'Accounts Office' },
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
                    { id: 'LOC-05', description: 'Coordinate with local police for traffic and crowd control.', priority: 'High', riskLevel: 'High', proof: 'Police Coordination Plan', location: 'Production Office' },
                    { id: 'LOC-06', description: 'Arrange for parking for cast and crew.', priority: 'High', riskLevel: 'Medium', proof: 'Parking Plan', location: 'Production Office' },
                    { id: 'LOC-07', description: 'Secure holding areas for cast and crew.', priority: 'High', riskLevel: 'Medium', proof: 'Holding Area Plan', location: 'Production Office' },
                    { id: 'LOC-08', description: 'Ensure sanitation facilities are available.', priority: 'High', riskLevel: 'Medium', proof: 'Facility Plan', location: 'Production Office' },
                    { id: 'LOC-09', description: 'Inform local residents and businesses about filming.', priority: 'High', riskLevel: 'Medium', proof: 'Notification Letter', location: 'Production Office' },
                    { id: 'LOC-10', description: 'Restore location to its original condition after filming.', priority: 'High', riskLevel: 'High', proof: 'Post-shoot Inspection', location: 'Location' },
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
                    { id: 'CAST-05', description: 'Ensure all talent have call sheets and schedules.', priority: 'High', riskLevel: 'High', proof: 'Call Sheets', location: 'Production Office' },
                    { id: 'CAST-06', description: 'Manage talent payments and per diems.', priority: 'High', riskLevel: 'High', proof: 'Payment Records', location: 'Accounts Office' },
                    { id: 'CAST-07', description: 'Handle any special requests or riders from talent.', priority: 'High', riskLevel: 'Medium', proof: 'Rider Fulfillment Log', location: 'Production Office' },
                    { id: 'CAST-08', description: 'Ensure a safe and comfortable environment for talent on set.', priority: 'High', riskLevel: 'High', proof: 'Set Environment Check', location: 'Set' },
                    { id: 'CAST-09', description: 'Coordinate with wardrobe and makeup departments.', priority: 'High', riskLevel: 'Medium', proof: 'Coordination Schedule', location: 'Production Office' },
                    { id: 'CAST-10', description: 'Maintain good relationships with talent and their representatives.', priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Casting Office' },
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
                    { id: 'PROP-05', description: 'Handle returns of all rented items promptly after use.', priority: 'High', riskLevel: 'Medium', proof: 'Rental Return Receipts', location: 'Art/Costume Dept' },
                    { id: 'PROP-06', description: 'Clean and repair costumes as needed.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Costume Dept' },
                    { id: 'PROP-07', description: 'Source props and costumes according to the script.', priority: 'High', riskLevel: 'High', proof: 'Sourcing Log', location: 'Art/Costume Dept' },
                    { id: 'PROP-08', description: 'Ensure all items are labeled and organized.', priority: 'High', riskLevel: 'Medium', proof: 'Labeling System', location: 'Art/Costume Dept' },
                    { id: 'PROP-09', description: 'Coordinate with the director and production designer.', priority: 'High', riskLevel: 'Medium', proof: 'Meeting Notes', location: 'Production Office' },
                    { id: 'PROP-10', description: 'Maintain a petty cash log for small purchases.', priority: 'High', riskLevel: 'High', proof: 'Petty Cash Log', location: 'Accounts Office' },
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
            { text: "Streamline your pipeline with a content ingestion, classification, and release workflow.", icon: <FileCheck /> },
            { text: "Mitigate legal risk with a robust system for managing legal and licensing documentation.", icon: <FileLock /> },
            { text: "Protect your users and your brand with a subscriber data privacy & retention policy (GDPR/DPDP).", icon: <Shield /> },
            { text: "Build a resilient platform with checklists for security, vulnerability, and patch management.", icon: <Siren /> },
            { text: "Navigate complex regulations with a clear process for content takedowns and compliance.", icon: <Recycle /> },
            { text: "Guarantee uptime during major launches with readiness drills for live events and high-concurrency.", icon: <Zap /> }
        ],
        previewScenario: {
            title: "Responding to a Major Content Leak",
            description: "A highly anticipated new series is leaked online a week before its official release, threatening subscription growth and marketing plans. This scenario shows how checklists enable a rapid and coordinated response.",
            tasks: [
                { id: 'OTT-SEC-01', description: "The 'Pre-Publish Security Review' checklist includes a verification of watermarking, which helps trace the source of the leak.", sourceChecklist: "Pre-Publish Security Review", priority: 'High' },
                { id: 'OTT-REG-06', description: "The 'Regulatory Compliance Matrix' has a pre-defined process for issuing DMCA and other legal takedown notices, allowing the legal team to act immediately.", sourceChecklist: "Regulatory Compliance Matrix", priority: 'High' },
                { id: 'OTT-VULN-01', description: "The 'Vulnerability & Patch Management' SOP ensures that all platform components have up-to-date security, minimizing the chance the leak came from an external hack.", sourceChecklist: "Vulnerability & Patch Management", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Tech & Media Standards",
            standards: [
                { name: "IT Act / DPDP Act 2023", description: "Compliance with Indian intermediary and data privacy laws." },
                { name: "ISO 27001 / GDPR", description: "Adherence to global data privacy and information security standards." },
                { name: "SOC 2", description: "Framework for ensuring service organization security and availability." },
                { name: "DMCA", description: "Processes for handling copyright takedown notices in the US." }
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
                    { id: 'OTT-RELEASE-01', description: 'Assign content rating and define region-specific restrictions.', priority: 'High', riskLevel: 'High', proof: 'CMS Entry', location: 'CMS', consequence: 'Incorrect ratings can lead to regulatory fines and brand damage for exposing inappropriate content to minors.'},
                    { id: 'OTT-RELEASE-02', description: 'Verify all metadata is complete and accurate.', priority: 'High', riskLevel: 'Medium', proof: 'Metadata Checklist', location: 'CMS', consequence: 'Inaccurate metadata (e.g., wrong actors, genres) leads to poor user experience and searchability.'},
                    { id: 'OTT-RELEASE-03', description: 'Confirm subtitle and dubbing tracks are approved.', priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'System', consequence: 'Poor quality or unsynchronized audio/subtitles frustrate users and can make content unwatchable.'},
                    { id: 'OTT-RELEASE-04', description: 'Obtain final legal sign-off on content rights and clearances.', priority: 'High', riskLevel: 'High', proof: 'Legal Sign-off Email', location: 'Legal File', consequence: 'Releasing content without proper rights can lead to multi-million dollar lawsuits and immediate takedown orders.'},
                    { id: 'OTT-RELEASE-05', description: 'Schedule the content for release in the CMS.', priority: 'High', riskLevel: 'Medium', proof: 'CMS Schedule', location: 'CMS', consequence: 'A scheduling error could release a flagship show at the wrong time, sabotaging marketing campaigns.'},
                    { id: 'OTT-RELEASE-06', description: 'Perform a final QC of the content before it goes live.', priority: 'High', riskLevel: 'High', proof: 'Final QC Report', location: 'System' },
                    { id: 'OTT-RELEASE-07', description: 'Ensure all promotional materials are ready.', priority: 'High', riskLevel: 'Medium', proof: 'Marketing Checklist', location: 'Marketing Dept' },
                    { id: 'OTT-RELEASE-08', description: 'Check that content is available in all intended regions.', priority: 'High', riskLevel: 'High', proof: 'Geo-availability Test', location: 'System' },
                    { id: 'OTT-RELEASE-09', description: 'Monitor the release for any initial issues.', priority: 'High', riskLevel: 'High', proof: 'Release Monitoring Log', location: 'System' },
                    { id: 'OTT-RELEASE-10', description: 'Archive all release-related documentation.', priority: 'Medium', riskLevel: 'Low', proof: 'Archive Log', location: 'System' },
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
                    { id: 'OTT-SEC-06', description: 'Perform a vulnerability scan on the content delivery pipeline.', priority: 'High', riskLevel: 'High', proof: 'Vulnerability Scan Report', location: 'System' },
                    { id: 'OTT-SEC-07', description: 'Check for any open S3 buckets or insecure storage.', priority: 'High', riskLevel: 'High', proof: 'Storage Security Audit', location: 'Cloud Console' },
                    { id: 'OTT-SEC-08', description: 'Verify that content is served over HTTPS.', priority: 'High', riskLevel: 'High', proof: 'HTTPS Check', location: 'System' },
                    { id: 'OTT-SEC-09', description: 'Ensure all APIs are authenticated and authorized.', priority: 'High', riskLevel: 'High', proof: 'API Security Audit', location: 'System' },
                    { id: 'OTT-SEC-10', description: 'Sign off on the security review before release.', priority: 'High', riskLevel: 'High', proof: 'Security Sign-off', location: 'System' },
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
                    { id: 'OTT-PRIV-06', description: 'Ensure compliance with regional data privacy laws (GDPR, CCPA, etc.).', priority: 'High', riskLevel: 'High', proof: 'Regional Compliance Audit', location: 'Compliance Office' },
                    { id: 'OTT-PRIV-07', description: 'Handle data subject access requests (DSARs) within the legal timeframe.', priority: 'High', riskLevel: 'High', proof: 'DSAR Log', location: 'System' },
                    { id: 'OTT-PRIV-08', description: 'Train staff on data privacy best practices.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'OTT-PRIV-09', description: 'Maintain a record of all data processing activities.', priority: 'High', riskLevel: 'High', proof: 'ROPA Document', location: 'Compliance Office' },
                    { id: 'OTT-PRIV-10', description: 'Review privacy policies and notices annually.', priority: 'High', riskLevel: 'High', proof: 'Policy Review Log', location: 'Compliance Office' },
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
                    { id: 'OTT-VULN-06', description: 'Review and harden server configurations.', priority: 'High', riskLevel: 'High', proof: 'Hardening Checklist', location: 'System' },
                    { id: 'OTT-VULN-07', description: 'Monitor for new threats and vulnerabilities.', priority: 'High', riskLevel: 'High', proof: 'Threat Intelligence Feed', location: 'Security Office' },
                    { id: 'OTT-VULN-08', description: 'Have a responsible disclosure policy for security researchers.', priority: 'High', riskLevel: 'Medium', proof: 'Disclosure Policy', location: 'Website' },
                    { id: 'OTT-VULN-09', description: 'Conduct regular code reviews for security flaws.', priority: 'High', riskLevel: 'High', proof: 'Code Review Log', location: 'Dev Team' },
                    { id: 'OTT-VULN-10', description: 'Train developers on secure coding practices.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
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
                    { id: 'OTT-REG-06', description: 'Manage content takedown requests from authorities.', priority: 'High', riskLevel: 'High', proof: 'Takedown Log', location: 'Legal File' },
                    { id: 'OTT-REG-07', description: 'Ensure compliance with local age verification laws.', priority: 'High', riskLevel: 'High', proof: 'Age Verification Audit', location: 'System' },
                    { id: 'OTT-REG-08', description: 'Review terms of service and privacy policies for compliance.', priority: 'High', riskLevel: 'High', proof: 'Policy Review Log', location: 'Legal File' },
                    { id: 'OTT-REG-09', description: 'Liaise with local counsel in different regions.', priority: 'High', riskLevel: 'High', proof: 'Counsel Communication Log', location: 'Legal File' },
                    { id: 'OTT-REG-10', description: 'Train content teams on regional content sensitivities.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
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
                    { id: 'LER-06', description: 'Freeze all non-essential deployments during the event.', priority: 'High', riskLevel: 'High', proof: 'Deployment Freeze Notice', location: 'Dev Team' },
                    { id: 'LER-07', description: 'Monitor key performance indicators (KPIs) in real-time.', priority: 'High', riskLevel: 'High', proof: 'Monitoring Dashboard', location: 'War Room' },
                    { id: 'LER-08', description: 'Have a rollback plan for any critical failures.', priority: 'High', riskLevel: 'High', proof: 'Rollback Plan', location: 'War Room' },
                    { id: 'LER-09', description: 'Test the entire streaming workflow from ingest to playback.', priority: 'High', riskLevel: 'High', proof: 'End-to-End Test Report', location: 'Staging' },
                    { id: 'LER-10', description: 'Conduct a post-event review to analyze performance.', priority: 'High', riskLevel: 'High', proof: 'Post-Event Report', location: 'Office' },
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
                    { id: 'AD-06', description: 'Troubleshoot any ad delivery issues.', priority: 'High', riskLevel: 'High', proof: 'Troubleshooting Log', location: 'System' },
                    { id: 'AD-07', description: 'Manage relationships with ad networks and partners.', priority: 'High', riskLevel: 'High', proof: 'Partner Communication Log', location: 'Office' },
                    { id: 'AD-08', description: 'Optimize ad placements for user experience and revenue.', priority: 'High', riskLevel: 'High', proof: 'A/B Test Results', location: 'System' },
                    { id: 'AD-09', description: 'Forecast ad inventory and revenue.', priority: 'High', riskLevel: 'High', proof: 'Forecast Report', location: 'Office' },
                    { id: 'AD-10', description: 'Keep up with the latest ad tech trends.', priority: 'Medium', riskLevel: 'Medium', proof: 'Industry News Log', location: 'Office' },
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
                    { id: 'SM-06', description: 'Analyze user behavior to improve retention.', priority: 'High', riskLevel: 'High', proof: 'Behavioral Analysis Report', location: 'System' },
                    { id: 'SM-07', description: 'Send out renewal reminders to subscribers.', priority: 'High', riskLevel: 'Medium', proof: 'Email Campaign Report', location: 'System' },
                    { id: 'SM-08', description: 'Process cancellations and gather feedback.', priority: 'High', riskLevel: 'Medium', proof: 'Cancellation Survey', location: 'System' },
                    { id: 'SM-09', description: 'Work with marketing on acquisition and retention campaigns.', priority: 'High', riskLevel: 'High', proof: 'Campaign Plan', location: 'Marketing Dept' },
                    { id: 'SM-10', description: 'Ensure subscription plans and pricing are displayed correctly.', priority: 'High', riskLevel: 'High', proof: 'Pricing Page Audit', location: 'Platform' },
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
            { text: "Prevent accidents with daily ride inspections, maintenance logs, and safety checks.", icon: <Wrench /> },
            { text: "Manage large crowds effectively with SOPs for guest safety, queuing, and crowd control.", icon: <Users /> },
            { text: "Be prepared for anything with emergency response plans and medical readiness drills.", icon: <Ambulance /> },
            { text: "Ensure food safety and prevent fire hazards with vendor stall and LPG handling checklists.", icon: <Utensils /> },
            { text: "Maintain a safe and clean water park with hygiene protocols and lifeguard safety SOPs.", icon: <Waves /> },
            { text: "Handle sensitive situations professionally with lost child and incident reporting protocols.", icon: <HelpingHand /> }
        ],
        previewScenario: {
            title: "Preventing a Ride Malfunction Catastrophe",
            description: "A sensor on a high-speed roller coaster begins to fail intermittently, a precursor to a major malfunction. This scenario shows how checklists prevent a disaster before it happens.",
            tasks: [
                { id: 'TP-RIDE-01', description: "The 'Daily Ride Pre-Opening Inspection' includes a system diagnostic check. An operator notices an anomalous sensor reading and flags it for immediate maintenance, taking the ride offline before it can open.", sourceChecklist: "Daily Ride Pre-Opening Inspections", priority: 'High' },
                { id: 'TP-QUEUE-09', description: "The 'Guest Safety & Queue SOP' has a clear protocol for managing ride downtime, allowing staff to calmly communicate the delay to guests and offer alternatives, preventing frustration.", sourceChecklist: "Guest Safety & Queue SOP", priority: 'High' },
                { id: 'TP-MED-01', description: "While the ride is down for repair, a guest in the long queue faints from the heat. The 'Emergency Medical Response' plan is activated, and the on-site first aid team responds within minutes.", sourceChecklist: "Emergency Medical Response", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Amusement Park Standards",
            standards: [
                { name: "IS 15475 / ASTM F24", description: "Indian and international standards for amusement ride safety." },
                { name: "ISO 45001 / OSHA", description: "For occupational health and safety management." },
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
                    { id: 'TP-RIDE-01', description: 'Perform a visual inspection of the ride structure.', priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Ride Location', consequence: 'Cracks or loose bolts, if missed, can lead to catastrophic structural failure during operation.' },
                    { id: 'TP-RIDE-02', description: 'Test all safety restraints (lap bars, harnesses).', priority: 'High', riskLevel: 'High', proof: 'Restraint Test Log', location: 'Ride Location', consequence: 'A single failing restraint can lead to a guest being ejected from the ride, resulting in severe injury or death.' },
                    { id: 'TP-RIDE-03', description: 'Conduct a test of the emergency stop function.', priority: 'High', riskLevel: 'High', proof: 'E-Stop Test Log', location: 'Ride Control Booth', consequence: 'If the e-stop fails, the operator has no way to halt the ride in an emergency, trapping guests or worsening a malfunction.' },
                    { id: 'TP-RIDE-04', description: 'Check for any hydraulic or pneumatic leaks.', priority: 'High', riskLevel: 'High', proof: 'Leak Inspection Log', location: 'Ride Location', consequence: 'Leaks can lead to a loss of pressure, causing ride components to fail suddenly and unpredictably.' },
                    { id: 'TP-RIDE-05', description: 'Operator to sign off on the pre-opening checklist before first use.', priority: 'High', riskLevel: 'High', proof: 'Signed Checklist', location: 'Ride Control Booth', consequence: 'Creates a legal and accountable record that all safety checks were performed before putting guests on the ride.' },
                    { id: 'TP-RIDE-06', description: 'Run one full cycle of the ride empty.', priority: 'High', riskLevel: 'High', proof: 'Test Run Log', location: 'Ride Control Booth' },
                    { id: 'TP-RIDE-07', description: 'Clean and sanitize all guest contact surfaces.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Ride Location' },
                    { id: 'TP-RIDE-08', description: 'Check all ride signage for clarity and condition.', priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Ride Entrance' },
                    { id: 'TP-RIDE-09', description: 'Ensure communication systems with the control booth are working.', priority: 'High', riskLevel: 'High', proof: 'Comms Test', location: 'Ride Location' },
                    { id: 'TP-RIDE-10', description: 'Report any issues to maintenance immediately.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Request', location: 'System' },
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
                    { id: 'TP-QUEUE-06', description: 'Manage queue jumpers and unruly behavior.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Security' },
                    { id: 'TP-QUEUE-07', description: 'Provide accurate wait time information.', priority: 'Medium', riskLevel: 'Low', proof: 'Wait Time Board', location: 'Ride Entrance' },
                    { id: 'TP-QUEUE-08', description: 'Ensure queue area is clean and free of hazards.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Queue Area' },
                    { id: 'TP-QUEUE-09', description: 'Have a plan for managing queues during ride breakdowns.', priority: 'High', riskLevel: 'High', proof: 'Breakdown SOP', location: 'Office' },
                    { id: 'TP-QUEUE-10', description: 'Train staff on crowd management techniques.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
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
                    { id: 'TP-MED-06', description: 'Train all park staff on how to report a medical emergency.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'TP-MED-07', description: 'Maintain a log of all medical incidents.', priority: 'High', riskLevel: 'High', proof: 'Medical Incident Log', location: 'Medical Office' },
                    { id: 'TP-MED-08', description: 'Coordinate with local hospitals for serious emergencies.', priority: 'High', riskLevel: 'High', proof: 'Hospital Contact List', location: 'Medical Office' },
                    { id: 'TP-MED-09', description: 'Ensure privacy of patients during treatment.', priority: 'High', riskLevel: 'High', proof: 'Privacy Screens', location: 'First Aid Stations' },
                    { id: 'TP-MED-10', description: 'Conduct a debrief after any major medical incident.', priority: 'High', riskLevel: 'High', proof: 'Debrief Minutes', location: 'Office' },
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
                    { id: 'TP-VENDOR-06', description: 'Ensure vendors have proper waste disposal systems.', priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Check', location: 'Food Stalls' },
                    { id: 'TP-VENDOR-07', description: 'Check that vendors have valid licenses and permits.', priority: 'High', riskLevel: 'High', proof: 'License Check', location: 'Office' },
                    { id: 'TP-VENDOR-08', description: 'Monitor for any unsafe cooking practices.', priority: 'High', riskLevel: 'High', proof: 'Spot Check Log', location: 'Food Stalls' },
                    { id: 'TP-VENDOR-09', description: 'Ensure vendors do not block any fire exits or pathways.', priority: 'High', riskLevel: 'High', proof: 'Pathway Audit', location: 'Food Stalls' },
                    { id: 'TP-VENDOR-10', description: 'Have a clear process for shutting down non-compliant vendors.', priority: 'High', riskLevel: 'High', proof: 'Shutdown SOP', location: 'Office' },
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
                    { id: 'WP-HS-06', description: 'Inspect water play structures for any hazards.', priority: 'High', riskLevel: 'High', proof: 'Structure Inspection Log', location: 'Water Park' },
                    { id: 'WP-HS-07', description: 'Check rescue equipment at all lifeguard stations.', priority: 'High', riskLevel: 'High', proof: 'Rescue Equipment Log', location: 'Lifeguard Stations' },
                    { id: 'WP-HS-08', description: 'Monitor water temperature.', priority: 'High', riskLevel: 'Medium', proof: 'Temperature Log', location: 'Poolside' },
                    { id: 'WP-HS-09', description: 'Conduct regular drills for lifeguards.', priority: 'High', riskLevel: 'High', proof: 'Drill Reports', location: 'Office' },
                    { id: 'WP-HS-10', description: 'Enforce all water park rules with guests.', priority: 'High', riskLevel: 'High', proof: 'Rule Enforcement Log', location: 'Water Park' },
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
                    { id: 'CPS-06', description: 'Provide secure changing and break areas for performers.', priority: 'High', riskLevel: 'Medium', proof: 'Area Inspection', location: 'Green Room' },
                    { id: 'CPS-07', description: 'Manage performer schedules to avoid overexertion.', priority: 'High', riskLevel: 'High', proof: 'Schedule', location: 'Office' },
                    { id: 'CPS-08', description: 'Have first aid available for performers.', priority: 'High', riskLevel: 'High', proof: 'First Aid Kit Check', location: 'Green Room' },
                    { id: 'CPS-09', description: 'Debrief performers after each shift to address any issues.', priority: 'Medium', riskLevel: 'Medium', proof: 'Debrief Log', location: 'Office' },
                    { id: 'CPS-10', description: 'Ensure performers are trained on fire and emergency procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
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
                    { id: 'CHTS-06', description: 'Manager approval required for all refunds.', priority: 'High', riskLevel: 'High', proof: 'Refund Log', location: 'Ticket Office' },
                    { id: 'CHTS-07', description: 'Transport cash to the bank securely.', priority: 'High', riskLevel: 'High', proof: 'Cash Transport Log', location: 'Cash Office' },
                    { id: 'CHTS-08', description: 'Train staff on cash handling procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'CHTS-09', description: 'Ensure CCTV coverage of all cash handling areas.', priority: 'High', riskLevel: 'High', proof: 'CCTV Audit', location: 'Security Office' },
                    { id: 'CHTS-10', description: 'Have a clear policy for handling cash shortages or overages.', priority: 'High', riskLevel: 'High', proof: 'Policy Document', location: 'Office' },
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
                    { id: 'LCP-06', description: 'Take the reporting parent/guardian to a secure location.', priority: 'High', riskLevel: 'High', proof: 'Escort Log', location: 'Guest Services' },
                    { id: 'LCP-07', description: 'If a child is found, bring them to a designated safe area.', priority: 'High', riskLevel: 'High', proof: 'Safe Area SOP', location: 'Guest Services' },
                    { id: 'LCP-08', description: 'Verify the identity of the parent/guardian before reuniting.', priority: 'High', riskLevel: 'High', proof: 'ID Check', location: 'Guest Services' },
                    { id: 'LCP-09', description: 'Document the entire incident from start to finish.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Office' },
                    { id: 'LCP-10', description: 'Conduct a debrief after the incident.', priority: 'High', riskLevel: 'High', proof: 'Debrief Minutes', location: 'Office' },
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
            { text: "Handle massive crowds safely with SOPs for crowd control and emergency evacuation.", icon: <Users /> },
            { text: "Prevent injuries and liability with rigorous gym and fitness equipment safety inspections.", icon: <Dumbbell /> },
            { text: "Maintain world-class playing surfaces with a structured sports field and turf maintenance schedule.", icon: <Sprout /> },
            { text: "Ensure water safety with comprehensive swimming pool hygiene and lifeguard protocols.", icon: <Waves /> },
            { text: "Streamline event entry with a secure system for digital ticketing and validation.", icon: <Ticket /> },
            { text: "Be prepared for any situation with a robust medical and emergency response plan.", icon: <Ambulance /> }
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
                { name: "National Building Code", description: "Compliance with Part 4 for Fire and Life Safety in India." },
                { name: "SAI / NDMA Guidelines", description: "Adherence to Sports Authority of India and National Disaster Management Authority norms." },
                { name: "ISO 45001 / OSHA", description: "International and US standards for occupational health and safety." },
                { name: "FIFA/IOC Venue Safety", description: "Guidelines from global sports bodies for stadium safety." }
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
                    { id: 'SEC-CROWD-01', description: "Review event capacity and ticketing data before the event.", priority: 'High', riskLevel: 'High', proof: 'Capacity Plan', location: 'Control Room', consequence: 'Overlooking capacity can lead to dangerous overcrowding and stampedes.' },
                    { id: 'SEC-CROWD-02', description: "Deploy security personnel and ushers at all entry points, exits, and choke points.", priority: 'High', riskLevel: 'High', proof: 'Deployment Map', location: 'Venue', consequence: 'Inadequate staffing can lead to loss of control over the crowd.' },
                    { id: 'SEC-CROWD-03', description: "Implement a clear queuing system at entry gates.", priority: 'High', riskLevel: 'High', proof: 'Queue Layout Photo', location: 'Entrances', consequence: 'Disorganized queues can cause frustration and crushing injuries.' },
                    { id: 'SEC-CROWD-04', description: "Monitor crowd flow via CCTV and on-ground staff.", priority: 'High', riskLevel: 'High', proof: 'CCTV Monitoring Log', location: 'Control Room', consequence: 'Lack of monitoring means you can\'t react to problems until it\'s too late.' },
                    { id: 'SEC-CROWD-05', description: "Have a clear plan for opening additional gates or redirecting crowds if needed.", priority: 'High', riskLevel: 'High', proof: 'Contingency Plan', location: 'Control Room', consequence: 'Without a contingency plan, a small issue can quickly escalate into a major crisis.' },
                    { id: 'SEC-CROWD-06', description: 'Train staff on crowd management techniques.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'SEC-CROWD-07', description: 'Have clear signage for all gates, sections, and exits.', priority: 'High', riskLevel: 'High', proof: 'Signage Audit', location: 'Venue' },
                    { id: 'SEC-CROWD-08', description: 'Coordinate with local police for traffic and crowd control outside the venue.', priority: 'High', riskLevel: 'High', proof: 'Police Coordination Log', location: 'Office' },
                    { id: 'SEC-CROWD-09', description: 'Have a lost and found system in place.', priority: 'High', riskLevel: 'Medium', proof: 'Lost & Found SOP', location: 'Office' },
                    { id: 'SEC-CROWD-10', description: 'Conduct a post-event debrief on crowd management.', priority: 'High', riskLevel: 'Medium', proof: 'Debrief Minutes', location: 'Office' },
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
                    { id: 'SEC-EMER-06', description: 'Ensure all staff are trained on their roles in an emergency.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'SEC-EMER-07', description: 'Check that all emergency lighting is functional.', priority: 'High', riskLevel: 'High', proof: 'Emergency Lighting Test', location: 'Venue' },
                    { id: 'SEC-EMER-08', description: 'Have a plan for assisting people with disabilities during an evacuation.', priority: 'High', riskLevel: 'High', proof: 'Accessibility Plan', location: 'Office' },
                    { id: 'SEC-EMER-09', description: 'Review and update the emergency plan annually.', priority: 'High', riskLevel: 'High', proof: 'Plan Review Log', location: 'Office' },
                    { id: 'SEC-EMER-10', description: 'Keep a log of all emergency incidents and responses.', priority: 'High', riskLevel: 'High', proof: 'Incident Logbook', location: 'Control Room' },
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
                    { id: 'GYM-SAFE-06', description: 'Clean and sanitize all equipment daily.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Gym Floor' },
                    { id: 'GYM-SAFE-07', description: 'Check floor surfaces for any hazards.', priority: 'High', riskLevel: 'High', proof: 'Floor Inspection Log', location: 'Gym Floor' },
                    { id: 'GYM-SAFE-08', description: 'Ensure proper lighting and ventilation.', priority: 'High', riskLevel: 'Medium', proof: 'Lighting & HVAC Check', location: 'Gym Floor' },
                    { id: 'GYM-SAFE-09', description: 'Have clear safety rules displayed for members.', priority: 'High', riskLevel: 'Medium', proof: 'Safety Signage', location: 'Gym Floor' },
                    { id: 'GYM-SAFE-10', description: 'Maintain a log of all equipment maintenance and repairs.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Logbook', location: 'Gym Office' },
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
                    { id: 'POOL-03', description: "Ensure all safety equipment (life rings, shepherd's crook) is accessible.", priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Check', location: 'Poolside' },
                    { id: 'POOL-04', description: "Verify that lifeguards are on duty and alert.", priority: 'High', riskLevel: 'High', proof: 'Lifeguard Roster', location: 'Poolside' },
                    { id: 'POOL-05', description: "Ensure pool deck is clean and free of slip hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Deck Inspection Log', location: 'Poolside' },
                    { id: 'POOL-SAFE-06', description: 'Check water temperature.', priority: 'High', riskLevel: 'Medium', proof: 'Temperature Log', location: 'Poolside' },
                    { id: 'POOL-SAFE-07', description: 'Inspect pool drains and suction covers.', priority: 'High', riskLevel: 'High', proof: 'Drain Inspection Log', location: 'Pool' },
                    { id: 'POOL-SAFE-08', description: 'Ensure depth markers are clearly visible.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Poolside' },
                    { id: 'POOL-SAFE-09', description: 'Conduct regular lifeguard training and drills.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'POOL-SAFE-10', description: 'Maintain a log of all incidents and actions taken.', priority: 'High', riskLevel: 'High', proof: 'Incident Logbook', location: 'Pool Office' },
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
                    { id: 'FIELD-06', description: 'Aerate and fertilize turf as needed.', priority: 'High', riskLevel: 'Medium', proof: 'Turf Management Plan', location: 'Grounds Office' },
                    { id: 'FIELD-07', description: 'Clean and maintain hard courts (tennis, basketball).', priority: 'High', riskLevel: 'Medium', proof: 'Court Maintenance Log', location: 'Courts' },
                    { id: 'FIELD-08', description: 'Ensure proper drainage of the field.', priority: 'High', riskLevel: 'High', proof: 'Drainage Inspection', location: 'Field' },
                    { id: 'FIELD-09', description: 'Maintain all groundskeeping equipment.', priority: 'High', riskLevel: 'Medium', proof: 'Equipment Maintenance Log', location: 'Grounds Office' },
                    { id: 'FIELD-10', description: 'Keep all surrounding areas clean and tidy.', priority: 'Medium', riskLevel: 'Low', proof: 'Housekeeping Log', location: 'Surrounding Areas' },
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
                    { id: 'TICKET-06', description: 'Ensure all entry points are adequately staffed.', priority: 'High', riskLevel: 'High', proof: 'Staff Roster', location: 'Entrances' },
                    { id: 'TICKET-07', description: 'Secure all ticketing hardware and software.', priority: 'High', riskLevel: 'High', proof: 'Security Audit', location: 'IT Office' },
                    { id: 'TICKET-08', description: 'Manage access control for different ticket types.', priority: 'High', riskLevel: 'High', proof: 'Access Control Plan', location: 'Control Room' },
                    { id: 'TICKET-09', description: 'Have a contingency plan for system failures.', priority: 'High', riskLevel: 'High', proof: 'Contingency Plan', location: 'Office' },
                    { id: 'TICKET-10', description: 'Generate post-event attendance reports.', priority: 'High', riskLevel: 'Medium', proof: 'Attendance Report', location: 'System' },
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
                    { id: 'VENDOR-EHS-06', description: 'Ensure vendors use appropriate PPE.', priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Work Area' },
                    { id: 'VENDOR-EHS-07', description: 'Review vendor\'s JHA for their tasks.', priority: 'High', riskLevel: 'High', proof: 'JHA Review', location: 'Office' },
                    { id: 'VENDOR-EHS-08', description: 'Monitor vendor activities to ensure compliance.', priority: 'High', riskLevel: 'High', proof: 'Monitoring Log', location: 'Work Area' },
                    { id: 'VENDOR-EHS-09', description: 'Have a clear process for stopping unsafe work.', priority: 'High', riskLevel: 'High', proof: 'Stop Work Authority SOP', location: 'Office' },
                    { id: 'VENDOR-EHS-10', description: 'Evaluate vendor safety performance after the job.', priority: 'High', riskLevel: 'High', proof: 'Performance Review', location: 'Office' },
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
                    { id: 'MED-RESP-06', description: 'Train all staff on how to report a medical emergency.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'MED-RESP-07', description: 'Have a clear path for ambulance entry and exit.', priority: 'High', riskLevel: 'High', proof: 'Ambulance Route Plan', location: 'Venue' },
                    { id: 'MED-RESP-08', description: 'Coordinate with local hospitals for patient transfers.', priority: 'High', riskLevel: 'High', proof: 'Hospital Coordination Plan', location: 'Office' },
                    { id: 'MED-RESP-09', description: 'Provide medical services for athletes.', priority: 'High', riskLevel: 'High', proof: 'Athlete Medical Plan', location: 'Medical Room' },
                    { id: 'MED-RESP-10', description: 'Conduct a post-event medical debrief.', priority: 'High', riskLevel: 'Medium', proof: 'Medical Debrief Minutes', location: 'Office' },
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
        listId: 3,
        category: "Social Cause",
        description: "A complete (and free) operational toolkit for animal shelters and NGOs to ensure animal welfare, hygiene, and effective adoption programs.",
        icon: <PawPrint />,
        badgeText: "Free Resource",
        badgeVariant: "accent",
        whoIsItFor: ["Shelter Managers", "NGO Founders", "Animal Welfare Officers", "Volunteers"],
        sampleItems: [
            { text: "Safely process new arrivals with intake and quarantine protocols.", icon: <Home /> },
            { text: "Track every animal's health with vaccination and medical record logs.", icon: <HeartPulse /> },
            { text: "Prevent disease outbreaks with a rigorous kennel sanitation and disease control program.", icon: <Sparkles /> },
            { text: "Protect your team with volunteer onboarding and safe animal handling SOPs.", icon: <Users /> },
            { text: "Ensure successful adoptions with a structured verification and transport process.", icon: <Truck /> },
            { text: "Promote well-being with daily feeding, nutrition, and enrichment schedules.", icon: <Rabbit /> }
        ],
        previewScenario: {
            title: "Preventing a Disease Outbreak",
            description: "A new dog carrying a contagious virus is brought into the shelter. This scenario shows how checklists prevent a devastating outbreak.",
            tasks: [
                { id: 'AS-INTAKE-03', description: "The 'Intake & Quarantine' SOP mandates that the new animal is placed in a separate quarantine area for 14 days, preventing contact with the general population.", sourceChecklist: "Intake & Quarantine SOP", priority: 'High' },
                { id: 'AS-SANIT-08', description: "The 'Daily Sanitation Checklist' requires using dedicated cleaning supplies for the quarantine area, stopping the spread of germs on staff hands or equipment.", sourceChecklist: "Daily Sanitation Checklist", priority: 'High' },
                { id: 'AS-MED-01', description: "The 'Vaccination & Medical Log' ensures the animal receives its initial vaccinations upon intake, reducing the severity and spread of any potential illness.", sourceChecklist: "Vaccination & Medical Log", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Animal Welfare Best Practices",
            standards: [
                { name: "Animal Welfare Board of India", description: "Guidelines for shelter management and animal care." },
                { name: "Prevention of Cruelty to Animals Act", description: "Compliance with India's primary animal welfare legislation." },
                { name: "WHO Rabies Control", description: "Adherence to global guidelines for rabies prevention." },
                { name: "ISO 22000 (Food Storage)", description: "Standards for safe storage of animal feed." }
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
                    { id: 'AS-INTAKE-01', description: "Scan new animal for a microchip.", priority: 'High', riskLevel: 'Medium', proof: 'Scan Log', location: 'Intake Room', consequence: 'Helps reunite lost pets with their owners quickly, reducing shelter overcrowding.' },
                    { id: 'AS-INTAKE-02', description: "Perform a basic health check (check for wounds, parasites, etc.).", priority: 'High', riskLevel: 'High', proof: 'Health Check Form', location: 'Intake Room', consequence: 'Identifies immediate medical needs and prevents the introduction of sick animals into the general population.' },
                    { id: 'AS-INTAKE-03', description: "Place animal in quarantine for the specified period.", priority: 'High', riskLevel: 'High', proof: 'Quarantine Log', location: 'Quarantine Area', consequence: 'This is the single most critical step to prevent the spread of contagious diseases like parvovirus or distemper, which can wipe out a shelter population.' },
                    { id: 'AS-INTAKE-04', description: "Administer initial deworming and vaccinations as per vet protocol.", priority: 'High', riskLevel: 'High', proof: 'Medical Record', location: 'Intake Room', consequence: 'Protects the new animal and the existing shelter population from common preventable diseases.' },
                    { id: 'AS-INTAKE-05', description: 'Create a unique ID and record for the animal in the shelter management system.', priority: 'High', riskLevel: 'High', proof: 'System Entry', location: 'Office', consequence: 'Ensures accurate tracking of the animal\'s medical history, status, and location within the shelter, preventing mix-ups.' },
                    { id: 'AS-INTAKE-06', description: 'Photograph the animal for records.', priority: 'High', riskLevel: 'Medium', proof: 'Photo in System', location: 'Intake Room' },
                    { id: 'AS-INTAKE-07', description: 'Assess the animal\'s temperament.', priority: 'High', riskLevel: 'High', proof: 'Temperament Assessment Form', location: 'Intake Room' },
                    { id: 'AS-INTAKE-08', description: 'Provide food, water, and a clean kennel.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Quarantine Area' },
                    { id: 'AS-INTAKE-09', description: 'Inform relevant staff about the new arrival.', priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Office' },
                    { id: 'AS-INTAKE-10', description: 'Follow specific protocols for neonatal or injured animals.', priority: 'High', riskLevel: 'High', proof: 'Special Care Protocol', location: 'Medical Room' },
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
                    { id: 'AS-MED-06', description: 'Keep a log of all medications dispensed.', priority: 'High', riskLevel: 'High', proof: 'Dispensing Log', location: 'Pharmacy' },
                    { id: 'AS-MED-07', description: 'Monitor animals for any adverse reactions to medications.', priority: 'High', riskLevel: 'High', proof: 'Observation Log', location: 'Kennels' },
                    { id: 'AS-MED-08', description: 'Maintain an inventory of all medical supplies.', priority: 'High', riskLevel: 'High', proof: 'Inventory System', location: 'Pharmacy' },
                    { id: 'AS-MED-09', description: 'Ensure proper storage of all medications.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Pharmacy' },
                    { id: 'AS-MED-10', description: 'Follow protocols for surgical procedures.', priority: 'High', riskLevel: 'High', proof: 'Surgical Checklist', location: 'Operating Room' },
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
                    { id: 'AS-SANIT-06', description: 'Clean and sanitize all food and water bowls.', priority: 'High', riskLevel: 'High', proof: 'Bowl Cleaning Log', location: 'Kitchen' },
                    { id: 'AS-SANIT-07', description: 'Dispose of animal waste properly.', priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Waste Area' },
                    { id: 'AS-SANIT-08', description: 'Keep isolation areas separate and use dedicated cleaning supplies.', priority: 'High', riskLevel: 'High', proof: 'Isolation Cleaning Log', location: 'Isolation Area' },
                    { id: 'AS-SANIT-09', description: 'Maintain a hand sanitizing station for all staff and visitors.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Entrance' },
                    { id: 'AS-SANIT-10', description: 'Conduct a weekly deep clean of the entire facility.', priority: 'High', riskLevel: 'High', proof: 'Deep Clean Log', location: 'Facility-wide' },
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
                    { id: 'AS-VOL-06', description: 'Ensure volunteers sign a liability waiver.', priority: 'High', riskLevel: 'High', proof: 'Signed Waiver', location: 'Office' },
                    { id: 'AS-VOL-07', description: 'Provide a clear schedule and duties for each volunteer.', priority: 'High', riskLevel: 'Medium', proof: 'Volunteer Schedule', location: 'Office' },
                    { id: 'AS-VOL-08', description: 'Have a supervisor present during volunteer hours.', priority: 'High', riskLevel: 'High', proof: 'Supervisor Roster', location: 'Facility' },
                    { id: 'AS-VOL-09', description: 'Recognize and appreciate volunteer contributions.', priority: 'Medium', riskLevel: 'Low', proof: 'Recognition Program', location: 'Office' },
                    { id: 'AS-VOL-10', description: 'Get feedback from volunteers to improve the program.', priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Survey', location: 'System' },
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
                    { id: 'AS-ADOPT-06', description: 'Provide post-adoption support information.', priority: 'High', riskLevel: 'Medium', proof: 'Support Handout', location: 'Office' },
                    { id: 'AS-ADOPT-07', description: 'Counsel the adopter on the animal\'s needs and behavior.', priority: 'High', riskLevel: 'High', proof: 'Counseling Notes', location: 'Adoption File' },
                    { id: 'AS-ADOPT-08', description: 'Microchip the animal with the adopter\'s details.', priority: 'High', riskLevel: 'High', proof: 'Microchip Registration', location: 'System' },
                    { id: 'AS-ADOPT-09', description: 'Follow up with the adopter after a set period.', priority: 'High', riskLevel: 'Medium', proof: 'Follow-up Call Log', location: 'Office' },
                    { id: 'AS-ADOPT-10', description: 'Maintain a complete record of the adoption.', priority: 'High', riskLevel: 'High', proof: 'Adoption File', location: 'Office' },
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
                    { id: 'AS-FEED-06', description: 'Store animal food properly to prevent spoilage and pests.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Kitchen' },
                    { id: 'AS-FEED-07', description: 'Handle food hygienically.', priority: 'High', riskLevel: 'High', proof: 'Hygiene Audit', location: 'Kitchen' },
                    { id: 'AS-FEED-08', description: 'Track food inventory.', priority: 'High', riskLevel: 'Medium', proof: 'Inventory System', location: 'Kitchen' },
                    { id: 'AS-FEED-09', description: 'Consult with a vet on nutrition plans.', priority: 'High', riskLevel: 'High', proof: 'Vet Consultation Notes', location: 'Office' },
                    { id: 'AS-FEED-10', description: 'Ensure feeding times are consistent.', priority: 'High', riskLevel: 'Medium', proof: 'Schedule', location: 'Kennels' },
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
                    { id: 'AS-BEHAV-06', description: 'Provide quiet time and space for animals to rest.', priority: 'High', riskLevel: 'Medium', proof: 'Rest Schedule', location: 'Kennels' },
                    { id: 'AS-BEHAV-07', description: 'Use positive reinforcement training methods.', priority: 'High', riskLevel: 'High', proof: 'Training Policy', location: 'Office' },
                    { id: 'AS-BEHAV-08', description: 'Rotate toys to keep animals engaged.', priority: 'Medium', riskLevel: 'Low', proof: 'Toy Rotation Schedule', location: 'Office' },
                    { id: 'AS-BEHAV-09', description: 'Assess adoptability based on behavior.', priority: 'High', riskLevel: 'High', proof: 'Adoptability Assessment', location: 'Animal File' },
                    { id: 'AS-BEHAV-10', description: 'Provide feedback to potential adopters on animal behavior.', priority: 'High', riskLevel: 'High', proof: 'Adopter Counseling Notes', location: 'Adoption Office' },
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
                    { id: 'AS-DON-06', description: 'Send thank you notes to all donors.', priority: 'High', riskLevel: 'Medium', proof: 'Thank You Log', location: 'Office' },
                    { id: 'AS-DON-07', description: 'Maintain a donor database.', priority: 'High', riskLevel: 'High', proof: 'CRM System', location: 'System' },
                    { id: 'AS-DON-08', description: 'Manage fundraising events and campaigns.', priority: 'High', riskLevel: 'High', proof: 'Event Plan', location: 'Office' },
                    { id: 'AS-DON-09', description: 'Prepare financial reports for the board.', priority: 'High', riskLevel: 'High', proof: 'Financial Reports', location: 'Office' },
                    { id: 'AS-DON-10', description: 'Ensure compliance with all financial regulations for NGOs.', priority: 'High', riskLevel: 'High', proof: 'Compliance Audit', location: 'Office' },
                ]
            }
        ]
    }
];

    

    




  




  
