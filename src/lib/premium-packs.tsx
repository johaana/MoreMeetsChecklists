
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
    category: "Hospitality" | "Corporate & Tech" | "Retail" | "Healthcare" | "Education" | "Industrial & Transport" | "Entertainment & Events" | "Social Cause" | "Real Estate" | "Compliance" | "Wellness & Beauty" | "Agriculture" | "Specialized Production" | "Free Resources" | "Franchise" | "Food & Beverage";
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
        id: 'animal_shelter_pack',
        title: "Animal Shelter Operations Pack",
        priceUSD: 0,
        priceINR: 0,
        paymentId: '',
        listId: 7,
        category: "Social Cause",
        description: "A comprehensive toolkit for animal shelters and NGOs to ensure animal welfare, disease prevention, and operational efficiency.",
        icon: <PawPrint />,
        badgeText: "Free Download",
        badgeVariant: "accent",
        whoIsItFor: ["Animal Shelter Managers", "NGO Founders", "Veterinarians", "Volunteer Coordinators"],
        sampleItems: [
            { text: "Prevent disease outbreaks with rigorous cleaning, disinfection, and quarantine protocols.", icon: <Sparkles /> },
            { text: "Ensure every animal's health with checklists for daily feeding, medication administration, and health monitoring.", icon: <Stethoscope /> },
            { text: "Manage your population responsibly with SOPs for intake, vaccination, and spay/neuter programs.", icon: <Syringe /> },
            { text: "Create a safe environment for animals and people with protocols for temperament testing and safe handling.", icon: <Users /> },
            { text: "Increase adoptions with a structured process for counseling, home checks, and post-adoption follow-up.", icon: <Home /> },
            { text: "Streamline your operations with checklists for volunteer management, inventory, and fundraising events.", icon: <ClipboardList /> }
        ],
        previewScenario: {
            title: "Preventing a Parvovirus Outbreak",
            description: "A newly rescued puppy is brought to the shelter, unknowingly carrying the highly contagious parvovirus. This scenario shows how checklists prevent a devastating outbreak.",
            tasks: [
                { id: 'INTAKE-03', description: "The 'Animal Intake' protocol mandates that all new animals are placed in a separate quarantine area for a minimum of 7 days, preventing immediate contact with the general population.", sourceChecklist: "Animal Intake & Quarantine", priority: 'High' },
                { id: 'VET-CARE-01', description: "The 'Veterinary Care' checklist requires a vet to examine the new puppy within 24 hours. The vet spots the early symptoms and initiates a parvo test.", sourceChecklist: "Veterinary Care & Health Monitoring", priority: 'High' },
                { id: 'CLEAN-DIS-05', description: "Once confirmed, the 'Cleaning & Disinfection' SOP is activated. The quarantine area is deep-cleaned with a parvocidal disinfectant, and foot baths are placed, containing the virus and saving the lives of other animals.", sourceChecklist: "Cleaning & Disinfection Protocol", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Animal Welfare Best Practices",
            standards: [
                { name: "ASPCA Guidelines", description: "References best practices from the American Society for the Prevention of Cruelty to Animals." },
                { name: "Humane Society Standards", description: "Guidelines for shelter operations and animal care." },
                { name: "AWBI (India) Norms", description: "Compliance with the Animal Welfare Board of India regulations." },
                { name: "Global Alliance for Rabies Control", description: "Protocols for vaccination and rabies prevention." }
            ]
        },
        checklists: [
             {
                title: "Animal Intake & Quarantine",
                department: "Operations",
                frequency: "Per Animal",
                role: "Intake Coordinator",
                icon: <PackageCheck />,
                summary: "SOP for safely admitting new animals, including health screening and quarantine.",
                tasks: [
                    { id: 'INTAKE-01', description: 'Log all details of the incoming animal (source, species, age, condition).', priority: 'High', riskLevel: 'High', proof: 'Intake Form', location: 'Reception' },
                    { id: 'INTAKE-02', description: 'Perform an initial health screening for obvious injuries or signs of disease.', priority: 'High', riskLevel: 'High', proof: 'Health Screening Form', location: 'Intake Room' },
                    { id: 'INTAKE-03', description: 'Place all new animals in a designated quarantine area for a minimum period.', priority: 'High', riskLevel: 'High', proof: 'Quarantine Log', location: 'Quarantine Area' },
                    { id: 'INTAKE-04', description: 'Provide fresh food, water, and clean bedding.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Quarantine Area' },
                    { id: 'INTAKE-05', description: 'Administer prophylactic treatments (deworming, flea/tick) as per vet protocol.', priority: 'High', riskLevel: 'High', proof: 'Medication Log', location: 'Quarantine Area' },
                    { id: 'INTAKE-06', description: 'Assign a unique ID number or tag to the animal.', priority: 'High', riskLevel: 'Medium', proof: 'ID Tag Application', location: 'Intake Room' },
                    { id: 'INTAKE-07', description: 'Take a clear photograph of the animal for records and adoption profiles.', priority: 'High', riskLevel: 'Low', proof: 'Photo in System', location: 'Intake Room' },
                    { id: 'INTAKE-08', description: 'Observe the animal\'s behavior and temperament.', priority: 'High', riskLevel: 'High', proof: 'Behavioral Notes', location: 'Quarantine Area' },
                    { id: 'INTAKE-09', description: 'Create a file for the animal with all intake documentation.', priority: 'High', riskLevel: 'High', proof: 'Animal File', location: 'Office' },
                    { id: 'INTAKE-10', description: 'Update the shelter management software with the new animal\'s details.', priority: 'High', riskLevel: 'High', proof: 'System Entry', location: 'System' },
                ]
            },
            {
                title: "Cleaning & Disinfection Protocol",
                department: "Hygiene",
                frequency: "Daily",
                role: "Kennel Staff",
                icon: <Sparkles />,
                summary: "Daily cleaning schedules and use of appropriate disinfectants to prevent disease spread.",
                tasks: [
                    { id: 'CLEAN-DIS-01', description: 'Clean and disinfect all animal enclosures daily.', priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Enclosures' },
                    { id: 'CLEAN-DIS-02', description: 'Use a veterinarian-approved disinfectant at the correct dilution.', priority: 'High', riskLevel: 'High', proof: 'Chemical Log', location: 'Storage' },
                    { id: 'CLEAN-DIS-03', description: 'Clean food and water bowls thoroughly every day.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Enclosures' },
                    { id: 'CLEAN-DIS-04', description: 'Wash all bedding and toys regularly.', priority: 'High', riskLevel: 'Medium', proof: 'Laundry Log', location: 'Laundry Area' },
                    { id: 'CLEAN-DIS-05', description: 'Implement strict cleaning protocols for the quarantine and isolation areas.', priority: 'High', riskLevel: 'High', proof: 'Isolation Cleaning SOP', location: 'Quarantine/Isolation' },
                    { id: 'CLEAN-DIS-06', description: 'Dispose of animal waste properly and hygienically.', priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Waste Area' },
                    { id: 'CLEAN-DIS-07', description: 'Clean common areas, including staff and visitor areas.', priority: 'High', riskLevel: 'Medium', proof: 'Common Area Cleaning Log', location: 'Entire Facility' },
                    { id: 'CLEAN-DIS-08', description: 'Use separate cleaning equipment for different areas (e.g., quarantine, general population).', priority: 'High', riskLevel: 'High', proof: 'Equipment Color Coding', location: 'Storage' },
                    { id: 'CLEAN-DIS-09', description: 'Train staff on all cleaning and disinfection procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'CLEAN-DIS-10', description: 'Perform a deep clean of the entire facility monthly.', priority: 'High', riskLevel: 'High', proof: 'Deep Clean Log', location: 'Entire Facility' },
                ]
            },
            {
                title: "Veterinary Care & Health Monitoring",
                department: "Medical",
                frequency: "Daily",
                role: "Vet/Para-Vet",
                icon: <Stethoscope />,
                summary: "Daily health checks, medication logs, and protocols for managing sick animals.",
                tasks: [
                    { id: 'VET-CARE-01', description: 'Conduct a daily health check of every animal in the shelter.', priority: 'High', riskLevel: 'High', proof: 'Daily Health Log', location: 'Enclosures' },
                    { id: 'VET-CARE-02', description: 'Administer all prescribed medications and log them accurately.', priority: 'High', riskLevel: 'High', proof: 'Medication Administration Record (MAR)', location: 'Enclosures' },
                    { id: 'VET-CARE-03', description: 'Isolate any animal showing signs of infectious disease immediately.', priority: 'High', riskLevel: 'High', proof: 'Isolation Log', location: 'Isolation Area' },
                    { id: 'VET-CARE-04', description: 'Maintain a vaccination and deworming schedule for all animals.', priority: 'High', riskLevel: 'High', proof: 'Vaccination Records', location: 'System' },
                    { id: 'VET-CARE-05', description: 'Manage a spay/neuter program for all eligible animals.', priority: 'High', riskLevel: 'High', proof: 'Surgery Log', location: 'Clinic' },
                    { id: 'VET-CARE-06', description: 'Keep detailed medical records for every animal.', priority: 'High', riskLevel: 'High', proof: 'Medical Files', location: 'Office' },
                    { id: 'VET-CARE-07', description: 'Maintain a well-stocked and organized veterinary clinic.', priority: 'High', riskLevel: 'High', proof: 'Clinic Inventory', location: 'Clinic' },
                    { id: 'VET-CARE-08', description: 'Have a clear protocol for veterinary emergencies.', priority: 'High', riskLevel: 'High', proof: 'Emergency SOP', location: 'Office' },
                    { id: 'VET-CARE-09', description: 'Coordinate with external veterinary specialists when needed.', priority: 'High', riskLevel: 'High', proof: 'Specialist Referral Log', location: 'Office' },
                    { id: 'VET-CARE-10', description: 'Provide special care for geriatric, pediatric, or special needs animals.', priority: 'High', riskLevel: 'High', proof: 'Special Needs Care Plan', location: 'Special Care Area' },
                ]
            },
            {
                title: "Adoption & Counseling Process",
                department: "Adoptions",
                frequency: "Per Adoption",
                role: "Adoption Counselor",
                icon: <Home />,
                summary: "A structured process to ensure animals are placed in suitable, loving homes.",
                tasks: [
                    { id: 'ADOPT-01', description: 'Counsel potential adopters on the responsibilities of pet ownership.', priority: 'High', riskLevel: 'Medium', proof: 'Counseling Checklist', location: 'Adoption Office' },
                    { id: 'ADOPT-02', description: 'Have potential adopters fill out a detailed application form.', priority: 'High', riskLevel: 'Medium', proof: 'Adoption Application', location: 'Adoption Office' },
                    { id: 'ADOPT-03', description: 'Conduct a home check (virtual or physical) for first-time pet owners.', priority: 'High', riskLevel: 'Medium', proof: 'Home Check Report', location: 'Office' },
                    { id: 'ADOPT-04', description: 'Match the right animal with the right family based on temperament and lifestyle.', priority: 'High', riskLevel: 'Medium', proof: 'Matchmaking Notes', location: 'Adoption Office' },
                    { id: 'ADOPT-05', description: 'Complete all adoption paperwork, including an adoption contract.', priority: 'High', riskLevel: 'High', proof: 'Signed Adoption Contract', location: 'Adoption Office' },
                    { id: 'ADOPT-06', description: 'Provide the adopter with the animal\'s medical history and vaccination records.', priority: 'High', riskLevel: 'High', proof: 'Medical File Handover', location: 'Adoption Office' },
                    { id: 'ADOPT-07', description: 'Educate the adopter on the animal\'s diet, exercise, and grooming needs.', priority: 'High', riskLevel: 'Medium', proof: 'Adopter Education Checklist', location: 'Adoption Office' },
                    { id: 'ADOPT-08', description: 'Conduct a post-adoption follow-up call or visit within two weeks.', priority: 'High', riskLevel: 'Medium', proof: 'Follow-up Log', location: 'System' },
                    { id: 'ADOPT-09', description: 'Have a clear policy for handling returned animals.', priority: 'High', riskLevel: 'High', proof: 'Return Policy Document', location: 'Office' },
                    { id: 'ADOPT-10', description: 'Update the animal\'s status to "Adopted" in the shelter management system.', priority: 'High', riskLevel: 'High', proof: 'System Update', location: 'System' },
                ]
            },
        ]
    },
    {
        id: 'franchise_operations_pack',
        title: "Franchise Operations Pack",
        priceUSD: 49.99,
        priceINR: 1999,
        paymentId: 'pl_RMnb42oApd90f0',
        category: "Franchise",
        description: "A complete toolkit for franchisors to ensure brand consistency, operational excellence, and compliance across all franchise locations.",
        icon: <Store />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Franchise Owners", "Heads of Franchise Operations", "Regional Managers", "Franchise Business Coaches"],
        sampleItems: [
            { text: "Ensure a consistent brand experience with a detailed brand and visual identity audit.", icon: <Eye /> },
            { text: "Maintain quality standards with SOPs for product/service delivery and customer service.", icon: <Sparkles /> },
            { text: "Improve franchisee performance with a structured process for monthly reporting and business reviews.", icon: <BarChart3 /> },
            { text: "Protect your brand with a system for local marketing compliance and approvals.", icon: <Megaphone /> },
            { text: "Streamline franchisee onboarding with a comprehensive checklist for new location setup.", icon: <KeyRound /> },
            { text: "Ensure financial health with royalty fee reconciliation and financial audit procedures.", icon: <DollarSign /> }
        ],
        previewScenario: {
            title: "Handling a Rogue Franchisee",
            description: "A franchisee starts using unapproved marketing materials and discounting products, damaging the brand. This scenario shows how checklists help regain control.",
            tasks: [
                { id: 'BRAND-AUDIT-01', description: "The 'Brand & Visual Identity Audit' checklist, used during a surprise visit, immediately flags the non-compliant marketing materials and store signage.", sourceChecklist: "Brand & Visual Identity Audit", priority: 'High' },
                { id: 'FIN-AUDIT-03', description: "The 'Financial Audit' SOP identifies unauthorized discounting by reconciling POS data against the standard pricing.", sourceChecklist: "Franchisee Financial Audit", priority: 'High' },
                { id: 'PERF-REVIEW-04', description: "The 'Performance Review' process provides a formal framework to present these breaches to the franchisee and create a time-bound corrective action plan, with clear consequences for non-compliance as per the franchise agreement.", sourceChecklist: "Monthly Performance Review", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with International Franchise Standards",
            standards: [
                { name: "IFA Code of Ethics", description: "Principles from the International Franchise Association." },
                { name: "FTC Franchise Rule", description: "References disclosure requirements from the U.S. Federal Trade Commission." },
                { name: "Franchise Agreement Law", description: "Ensures compliance with general principles of contract and commercial law." },
                { name: "ISO 9001", description: "For ensuring consistent quality management across locations." }
            ]
        },
        checklists: [
             {
                title: "New Franchisee Onboarding",
                department: "Onboarding",
                frequency: "Per New Franchisee",
                role: "Onboarding Manager",
                icon: <KeyRound />,
                summary: "A complete checklist from site selection and legal paperwork to staff training and grand opening.",
                tasks: [
                    { id: 'FR-ONBOARD-01', description: 'Verify final site selection and lease agreement.', priority: 'High', riskLevel: 'High', proof: 'Signed Lease', location: 'Legal File' },
                    { id: 'FR-ONBOARD-02', description: 'Execute the franchise agreement and collect initial fees.', priority: 'High', riskLevel: 'High', proof: 'Signed Agreement & Receipt', location: 'Legal File' },
                    { id: 'FR-ONBOARD-03', description: 'Provide the franchisee with the complete operations manual.', priority: 'High', riskLevel: 'High', proof: 'Manual Handover Form', location: 'Office' },
                    { id: 'FR-ONBOARD-04', description: 'Manage the store fit-out process according to brand guidelines.', priority: 'High', riskLevel: 'High', proof: 'Fit-out Completion Report', location: 'New Location' },
                    { id: 'FR-ONBOARD-05', description: 'Train the franchisee and their key staff on all operational procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Certificates', location: 'Training Center' },
                    { id: 'FR-ONBOARD-06', description: 'Set up POS, inventory, and other required software systems.', priority: 'High', riskLevel: 'High', proof: 'System Setup Log', location: 'New Location' },
                    { id: 'FR-ONBOARD-07', description: 'Coordinate initial inventory and supply chain setup.', priority: 'High', riskLevel: 'High', proof: 'First PO', location: 'New Location' },
                    { id: 'FR-ONBOARD-08', description: 'Plan and execute a grand opening marketing campaign.', priority: 'High', riskLevel: 'Medium', proof: 'Marketing Plan', location: 'Marketing Dept' },
                    { id: 'FR-ONBOARD-09', description: 'Provide on-site support for the first week of operations.', priority: 'High', riskLevel: 'High', proof: 'Support Log', location: 'New Location' },
                    { id: 'FR-ONBOARD-10', description: 'Schedule the first 90-day performance review.', priority: 'High', riskLevel: 'Medium', proof: 'Calendar Invite', location: 'Office' },
                ]
            },
            {
                title: "Brand & Visual Identity Audit",
                department: "Operations",
                frequency: "Quarterly",
                role: "Field Manager",
                icon: <Eye />,
                summary: "A quarterly audit to ensure every franchise location is perfectly aligned with the brand's look and feel.",
                tasks: [
                    { id: 'BRAND-AUDIT-01', description: 'Check that all interior and exterior signage is correct and in good condition.', priority: 'High', riskLevel: 'High', proof: 'Photo Audit', location: 'Franchise Location' },
                    { id: 'BRAND-AUDIT-02', description: 'Verify staff uniforms are clean, correct, and worn properly.', priority: 'High', riskLevel: 'Medium', proof: 'Staff Inspection', location: 'Franchise Location' },
                    { id: 'BRAND-AUDIT-03', description: 'Ensure all marketing materials on display are current and brand-approved.', priority: 'High', riskLevel: 'High', proof: 'Marketing Material Audit', location: 'Franchise Location' },
                    { id: 'BRAND-AUDIT-04', description: 'Audit store cleanliness, lighting, and ambiance.', priority: 'High', riskLevel: 'High', proof: 'Ambiance Checklist', location: 'Franchise Location' },
                    { id: 'BRAND-AUDIT-05', description: 'Check that product/service presentation meets brand standards.', priority: 'High', riskLevel: 'High', proof: 'Product Display Audit', location: 'Franchise Location' },
                    { id: 'BRAND-AUDIT-06', description: 'Review local social media and advertising for brand compliance.', priority: 'High', riskLevel: 'High', proof: 'Social Media Review', location: 'Online' },
                    { id: 'BRAND-AUDIT-07', description: 'Ensure the correct brand music or scent profile is being used, if applicable.', priority: 'Medium', riskLevel: 'Low', proof: 'Sensory Audit', location: 'Franchise Location' },
                    { id: 'BRAND-AUDIT-08', description: 'Provide a detailed report to the franchisee with required corrective actions.', priority: 'High', riskLevel: 'High', proof: 'Audit Report', location: 'System' },
                    { id: 'BRAND-AUDIT-09', description: 'Follow up to ensure all corrective actions are completed.', priority: 'High', riskLevel: 'High', proof: 'Follow-up Report', location: 'System' },
                    { id: 'BRAND-AUDIT-10', description: 'Share best practices from high-performing franchisees.', priority: 'Medium', riskLevel: 'Low', proof: 'Best Practice Email', location: 'System' },
                ]
            },
            {
                title: "Monthly Performance Review",
                department: "Operations",
                frequency: "Monthly",
                role: "Franchise Manager",
                icon: <BarChart3 />,
                summary: "A structured agenda for monthly review meetings to discuss sales, operations, and marketing performance.",
                tasks: [
                    { id: 'PERF-REVIEW-01', description: 'Review franchisee\'s monthly sales data against targets.', priority: 'High', riskLevel: 'High', proof: 'Sales Report', location: 'Meeting' },
                    { id: 'PERF-REVIEW-02', description: 'Analyze key operational KPIs (e.g., customer satisfaction, speed of service).', priority: 'High', riskLevel: 'High', proof: 'KPI Dashboard', location: 'Meeting' },
                    { id: 'PERF-REVIEW-03', description: 'Discuss successes, challenges, and support needed from the franchisor.', priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Meeting' },
                    { id: 'PERF-REVIEW-04', description: 'Develop a joint action plan for the upcoming month.', priority: 'High', riskLevel: 'High', proof: 'Action Plan Document', location: 'Meeting' },
                    { id: 'PERF-REVIEW-05', description: 'Review local marketing initiatives and results.', priority: 'High', riskLevel: 'Medium', proof: 'Marketing Report', location: 'Meeting' },
                    { id: 'PERF-REVIEW-06', description: 'Address any outstanding compliance issues from previous audits.', priority: 'High', riskLevel: 'High', proof: 'Compliance Tracker', location: 'Meeting' },
                    { id: 'PERF-REVIEW-07', description: 'Provide updates on new products, services, or brand-wide campaigns.', priority: 'High', riskLevel: 'Medium', proof: 'Update Presentation', location: 'Meeting' },
                    { id: 'PERF-REVIEW-08', description: 'Review franchisee\'s P&L statement and discuss profitability.', priority: 'High', riskLevel: 'High', proof: 'P&L Statement', location: 'Meeting' },
                    { id: 'PERF-REVIEW-09', description: 'Document all discussions and action items.', priority: 'High', riskLevel: 'High', proof: 'Signed Meeting Minutes', location: 'System' },
                    { id: 'PERF-REVIEW-10', description: 'Schedule the next performance review meeting.', priority: 'High', riskLevel: 'Low', proof: 'Calendar Invite', location: 'System' },
                ]
            },
        ]
    },
    {
        id: 'bakery_confectionery_pack',
        title: "Bakery & Confectionery Operations Pack",
        priceUSD: 49.99,
        priceINR: 1999,
        paymentId: 'pl_RMnaU5w95a7x3k',
        category: "Food & Beverage",
        description: "A specialized toolkit for bakery and confectionery owners to ensure product consistency, food safety, and operational efficiency.",
        icon: <CakeSlice />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Bakery Owners", "Head Bakers", "Pastry Chefs", "Cafe Owners with in-house baking"],
        sampleItems: [
            { text: "Achieve perfect results every time with recipe scaling and dough management checklists.", icon: <ClipboardList /> },
            { text: "Ensure food safety with HACCP-aligned protocols for ingredient handling and allergen control.", icon: <ShieldCheck /> },
            { text: "Maintain equipment precision with SOPs for oven calibration and mixer maintenance.", icon: <Wrench /> },
            { text: "Maximize freshness and minimize waste with a structured display and stock rotation system.", icon: '🔄' },
            { text: "Guarantee compliance with FSSAI regulations for packaging, labeling, and expiry dates.", icon: <FileCheck /> },
            { text: "Streamline your custom order process from client briefing to final delivery.", icon: <Package /> }
        ],
        previewScenario: {
            title: "Handling a Major Allergen Incident",
            description: "A customer with a severe nut allergy has a reaction after eating a product they were told was nut-free. This shows how checklists prevent this critical failure.",
            tasks: [
                { id: 'ALLERGEN-BAKE-01', description: "The 'Allergen Management' SOP requires a clear, color-coded system separating allergen-free production from regular production, preventing cross-contamination.", sourceChecklist: "Allergen Management & Control", priority: 'High' },
                { id: 'LABEL-01', description: "The 'Packaging & Labeling' checklist mandates that every single product is labeled with a full ingredient list and bolded allergens, providing a final safety net for the customer.", sourceChecklist: "Packaging & Labeling Compliance", priority: 'High' },
                { id: 'TRAIN-BAKE-04', description: "The 'Staff Training' SOP includes mandatory training on how to answer customer questions about allergens, ensuring staff never give incorrect information.", sourceChecklist: "Staff Hygiene & Training", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Baking & Food Safety Standards",
            standards: [
                { name: "FSSAI", description: "Compliance with Indian food safety and labeling laws." },
                { name: "HACCP", description: "System for managing food safety hazards in baking." },
                { name: "BRCGS", description: "Global standard for food safety, often required by major retailers." },
                { name: "Codex Alimentarius", description: "International food standards, guidelines, and codes of practice." }
            ]
        },
        checklists: [
             {
                title: "Opening & Baking Prep Checklist",
                department: "Production",
                frequency: "Daily",
                role: "Head Baker",
                icon: <ClipboardList />,
                summary: "A checklist to start the day right: oven pre-heating, mixer inspection, and preparing the day's production schedule.",
                tasks: [
                    { id: 'BAKE-OPEN-01', description: 'Pre-heat all ovens to their required temperatures for the first bake.', priority: 'High', riskLevel: 'Medium', proof: 'Oven Temperature Log', location: 'Oven Area' },
                    { id: 'BAKE-OPEN-02', description: 'Inspect mixers and other equipment for cleanliness and functionality.', priority: 'High', riskLevel: 'High', proof: 'Equipment Check Log', location: 'Production Area' },
                    { id: 'BAKE-OPEN-03', description: 'Review the day\'s production schedule and special orders.', priority: 'High', riskLevel: 'High', proof: 'Production Sheet', location: 'Office' },
                    { id: 'BAKE-OPEN-04', description: 'Pull all required ingredients from storage based on the production plan.', priority: 'High', riskLevel: 'Medium', proof: 'Ingredient Pull Sheet', location: 'Stores' },
                    { id: 'BAKE-OPEN-05', description: 'Calibrate weighing scales.', priority: 'High', riskLevel: 'High', proof: 'Scale Calibration Log', location: 'Weighing Area' },
                    { id: 'BAKE-OPEN-06', description: 'Ensure all staff are present and have their hairnets and aprons on.', priority: 'High', riskLevel: 'Medium', proof: 'Staff Hygiene Check', location: 'Production Area' },
                    { id: 'BAKE-OPEN-07', description: 'Check that all work surfaces are sanitized before starting.', priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Production Area' },
                    { id: 'BAKE-OPEN-08', description: 'Prepare and scale out base doughs and batters for the day.', priority: 'High', riskLevel: 'High', proof: 'Scaling Sheets', location: 'Mixing Area' },
                    { id: 'BAKE-OPEN-09', description: 'Check proofer and retarder temperatures and humidity.', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Proofing Area' },
                    { id: 'BAKE-OPEN-10', description: 'Brief the team on the daily plan and any specific instructions.', priority: 'High', riskLevel: 'Medium', proof: 'Briefing Notes', location: 'Production Area' },
                ]
            },
            {
                title: "Allergen Management & Control",
                department: "Quality/Production",
                frequency: "Ongoing",
                role: "QA Manager",
                icon: <ShieldCheck />,
                summary: "SOPs to prevent cross-contamination, including separate storage, color-coded utensils, and clear labeling.",
                tasks: [
                    { id: 'ALLERGEN-BAKE-01', description: 'Store allergenic ingredients (like nuts, soy, dairy) in separate, clearly labeled containers.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit Photo', location: 'Stores' },
                    { id: 'ALLERGEN-BAKE-02', description: 'Use color-coded utensils and equipment for preparing allergen-free items.', priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Production Area' },
                    { id: 'ALLERGEN-BAKE-03', description: 'Thoroughly clean and sanitize surfaces and equipment between batches with and without allergens.', priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Production Area' },
                    { id: 'ALLERGEN-BAKE-04', description: 'Schedule production of allergen-free items first thing in the morning after a deep clean.', priority: 'High', riskLevel: 'High', proof: 'Production Schedule', location: 'Office' },
                    { id: 'ALLERGEN-BAKE-05', description: 'Maintain an accurate allergen matrix for all products.', priority: 'High', riskLevel: 'High', proof: 'Allergen Matrix Document', location: 'Office' },
                    { id: 'ALLERGEN-BAKE-06', description: 'Train all staff on the risks of cross-contamination and how to handle allergen-related queries.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'ALLERGEN-BAKE-07', description: 'Clearly label all finished products with allergen warnings.', priority: 'High', riskLevel: 'High', proof: 'Label Check', location: 'Packaging Area' },
                    { id: 'ALLERGEN-BAKE-08', description: 'Have a clear procedure for handling a customer allergen reaction incident.', priority: 'High', riskLevel: 'High', proof: 'Incident SOP', location: 'Office' },
                    { id: 'ALLERGEN-BAKE-09', description: 'Verify raw material specs with suppliers to check for hidden allergens.', priority: 'High', riskLevel: 'High', proof: 'Supplier Spec Sheet', location: 'Procurement' },
                    { id: 'ALLERGEN-BAKE-10', description: 'Conduct periodic allergen testing on surfaces and finished products.', priority: 'High', riskLevel: 'High', proof: 'Lab Test Report', location: 'Lab' },
                ]
            },
            {
                title: "Packaging & Labeling Compliance",
                department: "Packaging",
                frequency: "Per Batch",
                role: "Packaging Supervisor",
                icon: <FileCheck />,
                summary: "A checklist to ensure all packaging complies with FSSAI regulations, including ingredient lists, nutritional info, and expiry dates.",
                tasks: [
                    { id: 'LABEL-01', description: 'Verify the ingredient list is accurate and complete for the specific batch.', priority: 'High', riskLevel: 'High', proof: 'Label vs Recipe Check', location: 'Packaging Area' },
                    { id: 'LABEL-02', description: 'Ensure all allergens are correctly declared and highlighted as per FSSAI norms.', priority: 'High', riskLevel: 'High', proof: 'Allergen Declaration Check', location: 'Packaging Area' },
                    { id: 'LABEL-03', description: 'Check that the manufacturing date and "Best Before" date are correctly printed.', priority: 'High', riskLevel: 'High', proof: 'Date Code Verification', location: 'Packaging Area' },
                    { id: 'LABEL-04', description: 'Ensure the nutritional information is accurate and formatted correctly.', priority: 'High', riskLevel: 'Medium', proof: 'Nutritional Panel Audit', location: 'Packaging Area' },
                    { id: 'LABEL-05', description: 'Verify the FSSAI license number is correctly displayed on the package.', priority: 'High', riskLevel: 'High', proof: 'FSSAI License Check', location: 'Packaging Area' },
                    { id: 'LABEL-06', description: 'Check for the vegetarian/non-vegetarian logo.', priority: 'High', riskLevel: 'High', proof: 'Logo Check', location: 'Packaging Area' },
                    { id: 'LABEL-07', description: 'Ensure the net weight is correctly stated.', priority: 'High', riskLevel: 'High', proof: 'Weight Check', location: 'Packaging Area' },
                    { id: 'LABEL-08', description: 'Inspect packaging for tears, correct sealing, and overall quality.', priority: 'High', riskLevel: 'Medium', proof: 'Package Integrity Check', location: 'Packaging Area' },
                    { id: 'LABEL-09', description: 'Store packaging materials in a clean, dry, and pest-free environment.', priority: 'High', riskLevel: 'Medium', proof: 'Storage Audit', location: 'Packaging Store' },
                    { id: 'LABEL-10', description: 'Maintain a record of each batch\'s packaging and labeling checks.', priority: 'High', riskLevel: 'High', proof: 'Packaging QC Log', location: 'System' },
                ]
            },
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
                    { id: 'JLR-SALE-01', description: "Verify government-issued ID for any purchase over a set threshold.", priority: 'High', riskLevel: 'High', proof: 'ID Scan/Copy', location: 'POS' },
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
                    {id: 'WB-06', description: 'Maintain confidentiality throughout the process.', priority: 'High', riskLevel: 'High', proof: 'Confidentiality Agreements', location: 'Office' },
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
    // --- Education ---
    {
        id: 'school_operations_pack',
        title: "School Operations Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Education",
        description: "A comprehensive safety and compliance toolkit for school principals and administrators to ensure a secure and well-managed learning environment.",
        icon: <School />,
        whoIsItFor: ["School Principals", "Vice-Principals", "Heads of Administration", "School Trustees", "Operations Managers"],
        sampleItems: [
            { text: "Ensure student safety with robust bus transport, drop-off, and pickup SOPs.", icon: <Bus /> },
            { text: "Prevent unauthorized access with a strict visitor management and gate security protocol.", icon: <KeyRound /> },
            { text: "Maintain a safe campus with daily playground, classroom, and facility safety audits.", icon: <Shield /> },
            { text: "Prepare for emergencies with comprehensive fire safety drills and first-aid response plans.", icon: <Siren /> },
            { text: "Protect students with a legally compliant staff background verification and hiring process.", icon: <UserCheck /> },
            { text: "Safeguard health with kitchen hygiene audits and clean water testing schedules.", icon: <Utensils /> }
        ],
        previewScenario: {
            title: "Preventing a Student Abduction Scare",
            description: "A non-custodial parent attempts to pick up a child from school without authorization. This scenario shows how checklists prevent a potential kidnapping.",
            tasks: [
                { id: 'VIS-MG-03', description: "The 'Visitor Management' checklist requires security to verify the visitor's ID against a pre-approved pickup list for each child. The unauthorized parent is denied entry.", sourceChecklist: "Visitor Management & Security", priority: 'High' },
                { id: 'TRAN-05', description: "The 'Student Transport' SOP mandates that the class teacher only hands over the child to a registered guardian, providing a second layer of verification.", sourceChecklist: "Student Transport & Safety", priority: 'High' },
                { id: 'INC-HDLG-01', description: "The 'Incident Handling' protocol provides a clear protocol for the principal to follow, including immediately notifying the custodial parent and documenting the incident.", sourceChecklist: "Incident Handling Protocol", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with CBSE, ICSE, and International School Safety Norms",
            standards: [
                { name: "CBSE Guidelines", description: "Compliance with safety mandates from the Central Board of Secondary Education." },
                { name: "POCSO Act", description: "Protocols for the Protection of Children from Sexual Offences." },
                { name: "NDMA School Safety", description: "Guidelines from the National Disaster Management Authority." },
                { name: "Fire Safety Act", description: "Adherence to local fire safety and evacuation norms." }
            ]
        },
        checklists: [
             {
                title: "Student Transport & Safety",
                department: "Transport",
                frequency: "Daily",
                role: "Transport Manager",
                icon: <Bus />,
                summary: "Daily bus checks, GPS tracking, speed monitoring, and a mandatory post-trip check to ensure no child is left behind.",
                tasks: [
                    { id: 'TRAN-01', description: 'Perform daily pre-trip inspection of the bus (brakes, tires, lights).', priority: 'High', riskLevel: 'High', proof: 'Pre-trip Checklist', location: 'Bus Depot' },
                    { id: 'TRAN-02', description: 'Ensure the GPS tracker and CCTV inside the bus are functional.', priority: 'High', riskLevel: 'High', proof: 'System Health Check', location: 'Bus' },
                    { id: 'TRAN-03', description: 'Verify driver and conductor have valid licenses and IDs.', priority: 'High', riskLevel: 'High', proof: 'ID Check Log', location: 'Bus Depot' },
                    { id: 'TRAN-04', description: 'Check that a female attendant is present on every bus route.', priority: 'High', riskLevel: 'High', proof: 'Attendance Log', location: 'Bus' },
                    { id: 'TRAN-05', description: 'Perform a mandatory walkthrough of the bus at the end of each trip to ensure no child is left behind.', priority: 'High', riskLevel: 'High', proof: 'Post-trip Clearance Log', location: 'Bus' },
                    { id: 'TRAN-06', description: 'Ensure first-aid kit is available and stocked in every bus.', priority: 'High', riskLevel: 'Medium', proof: 'First-Aid Kit Log', location: 'Bus' },
                    { id: 'TRAN-07', description: 'Monitor bus speed and route adherence through GPS tracking.', priority: 'High', riskLevel: 'Medium', proof: 'GPS Report', location: 'Transport Office' },
                    { id: 'TRAN-08', description: 'Train drivers and attendants on emergency procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'TRAN-09', description: 'Maintain a log of all student drop-offs and pickups.', priority: 'High', riskLevel: 'High', proof: 'Drop-off Log', location: 'Bus' },
                    { id: 'TRAN-10', description: 'Conduct regular maintenance of all buses.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Records', location: 'Workshop' },
                ]
            },
            {
                title: "Visitor Management & Security",
                department: "Security",
                frequency: "Ongoing",
                role: "Security Head",
                icon: <KeyRound />,
                summary: "ID verification, logbook maintenance, and background checks for all non-parent visitors.",
                tasks: [
                    { id: 'VIS-MG-01', description: 'Verify government-issued ID for every visitor.', priority: 'High', riskLevel: 'High', proof: 'Visitor Logbook', location: 'Main Gate' },
                    { id: 'VIS-MG-02', description: 'Issue a visitor pass and ensure it is worn at all times.', priority: 'High', riskLevel: 'Medium', proof: 'Pass Issue Log', location: 'Main Gate' },
                    { id: 'VIS-MG-03', description: 'Check visitor against a pre-approved list for student pickups.', priority: 'High', riskLevel: 'High', proof: 'Approved List', location: 'Main Gate' },
                    { id: 'VIS-MG-04', description: 'Escort all maintenance staff and vendors within the school premises.', priority: 'High', riskLevel: 'High', proof: 'Escort Log', location: 'Campus' },
                    { id: 'VIS-MG-05', description: 'Conduct background checks for all long-term vendors and contractors.', priority: 'High', riskLevel: 'High', proof: 'Background Check Report', location: 'Admin Office' },
                    { id: 'VIS-MG-06', description: 'Monitor CCTV cameras covering entry/exit points.', priority: 'High', riskLevel: 'High', proof: 'CCTV Log', location: 'Security Room' },
                    { id: 'VIS-MG-07', description: 'Ensure all visitors sign out upon leaving.', priority: 'High', riskLevel: 'Medium', proof: 'Visitor Logbook', location: 'Main Gate' },
                    { id: 'VIS-MG-08', description: 'Secure all gates and entrances after school hours.', priority: 'High', riskLevel: 'High', proof: 'Gate Lock Log', location: 'Campus' },
                    { id: 'VIS-MG-09', description: 'Train security staff on handling unauthorized entry attempts.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'VIS-MG-10', description: 'Maintain a lost and found register.', priority: 'Medium', riskLevel: 'Low', proof: 'Lost & Found Log', location: 'Reception' },
                ]
            },
            {
                title: "Campus & Playground Safety",
                department: "Facilities",
                frequency: "Daily",
                role: "Facility Manager",
                icon: <Shield />,
                summary: "Daily inspection of playground equipment, classroom furniture, and building hazards.",
                tasks: [
                    { id: 'CPS-01', description: 'Inspect playground equipment for sharp edges, rust, or loose parts.', priority: 'High', riskLevel: 'High', proof: 'Playground Inspection Log', location: 'Playground' },
                    { id: 'CPS-02', description: 'Check classroom furniture for stability and any defects.', priority: 'High', riskLevel: 'Medium', proof: 'Classroom Furniture Log', location: 'Classrooms' },
                    { id: 'CPS-03', description: 'Inspect all campus areas for trip hazards, water logging, or other dangers.', priority: 'High', riskLevel: 'High', proof: 'Campus Walkthrough Log', location: 'Campus' },
                    { id: 'CPS-04', description: 'Ensure all electrical sockets are covered and wires are concealed.', priority: 'High', riskLevel: 'High', proof: 'Electrical Safety Log', location: 'Classrooms' },
                    { id: 'CPS-05', description: 'Check that all chemicals in labs are stored safely and labeled.', priority: 'High', riskLevel: 'High', proof: 'Lab Safety Audit', location: 'Laboratories' },
                    { id: 'CPS-06', description: 'Verify that first-aid kits are available in designated areas.', priority: 'High', riskLevel: 'Medium', proof: 'First-Aid Kit Check', location: 'Various' },
                    { id: 'CPS-07', description: 'Inspect fire extinguishers and alarms.', priority: 'High', riskLevel: 'High', proof: 'Fire Safety Log', location: 'Campus' },
                    { id: 'CPS-08', description: 'Ensure all areas are adequately lit.', priority: 'High', riskLevel: 'Medium', proof: 'Lighting Check', location: 'Campus' },
                    { id: 'CPS-09', description: 'Check water coolers for hygiene and functionality.', priority: 'High', riskLevel: 'Medium', proof: 'Water Cooler Log', location: 'Various' },
                    { id: 'CPS-10', description: 'Report and cordon off any unsafe areas immediately.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Campus' },
                ]
            },
            {
                title: "Emergency Preparedness",
                department: "Admin",
                frequency: "Quarterly",
                role: "Admin Head",
                icon: <Siren />,
                summary: "Quarterly fire drills, first-aid training, and maintaining an updated emergency contact list for all students.",
                tasks: [
                    { id: 'EP-01', description: 'Conduct a fire evacuation drill every quarter.', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Campus' },
                    { id: 'EP-02', description: 'Ensure all staff are trained in basic first-aid and CPR.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'EP-03', description: 'Maintain an updated emergency contact list for every student.', priority: 'High', riskLevel: 'High', proof: 'Contact List', location: 'Admin Office' },
                    { id: 'EP-04', description: 'Ensure emergency alarms and public address systems are working.', priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'Control Room' },
                    { id: 'EP-05', description: 'Have a clear protocol for medical emergencies.', priority: 'High', riskLevel: 'High', proof: 'Medical Emergency SOP', location: 'Office' },
                    { id: 'EP-06', description: 'Keep emergency supplies (food, water, blankets) stocked.', priority: 'High', riskLevel: 'Medium', proof: 'Emergency Kit Log', location: 'Store Room' },
                    { id: 'EP-07', description: 'Establish a communication plan for parents during emergencies.', priority: 'High', riskLevel: 'High', proof: 'Communication Plan', location: 'Office' },
                    { id: 'EP-08', description: 'Coordinate with local emergency services (fire, police, hospital).', priority: 'High', riskLevel: 'High', proof: 'Contact List', location: 'Office' },
                    { id: 'EP-09', description: 'Designate and mark clear assembly points for evacuation.', priority: 'High', riskLevel: 'High', proof: 'Signage', location: 'Campus' },
                    { id: 'EP-10', description: 'Review and update the emergency plan annually.', priority: 'High', riskLevel: 'High', proof: 'Updated Plan', location: 'Office' },
                ]
            },
            {
                title: "Staff Hiring & Verification",
                department: "HR",
                frequency: "Per Hire",
                role: "HR Manager",
                icon: <UserCheck />,
                summary: "Mandatory police verification, reference checks, and qualification verification for all new hires.",
                tasks: [
                    { id: 'SHV-01', description: 'Conduct mandatory police verification for all new staff.', priority: 'High', riskLevel: 'High', proof: 'Police Verification Report', location: 'HR File' },
                    { id: 'SHV-02', description: 'Perform at least two professional reference checks.', priority: 'High', riskLevel: 'High', proof: 'Reference Check Forms', location: 'HR File' },
                    { id: 'SHV-03', description: 'Verify educational qualifications and past employment.', priority: 'High', riskLevel: 'High', proof: 'Verification Report', location: 'HR File' },
                    { id: 'SHV-04', description: 'Conduct a medical fitness check for all new hires.', priority: 'High', riskLevel: 'Medium', proof: 'Medical Report', location: 'HR File' },
                    { id: 'SHV-05', description: 'Ensure all new staff sign the child protection policy.', priority: 'High', riskLevel: 'High', proof: 'Signed Policy', location: 'HR File' },
                    { id: 'SHV-06', description: 'Provide a formal induction and training on school policies.', priority: 'High', riskLevel: 'Medium', proof: 'Induction Log', location: 'HR' },
                    { id: 'SHV-07', description: 'Issue a formal employment contract.', priority: 'High', riskLevel: 'High', proof: 'Signed Contract', location: 'HR File' },
                    { id: 'SHV-08', description: 'Maintain a complete file for each employee with all required documents.', priority: 'High', riskLevel: 'High', proof: 'Employee File Audit', location: 'HR Office' },
                    { id: 'SHV-09', description: 'Collect and verify ID and address proofs.', priority: 'High', riskLevel: 'High', proof: 'ID/Address Proofs', location: 'HR File' },
                    { id: 'SHV-10', description: 'Onboard staff into the payroll and HR management system.', priority: 'High', riskLevel: 'Medium', proof: 'System Entry', location: 'System' },
                ]
            },
            {
                title: "Kitchen & Water Safety",
                department: "Admin/Health",
                frequency: "Daily/Scheduled",
                role: "Admin Manager",
                icon: <Utensils />,
                summary: "Daily checks for kitchen hygiene, staff health, and scheduled testing of drinking water.",
                tasks: [
                    { id: 'KWS-01', description: 'Inspect kitchen for cleanliness and hygiene.', priority: 'High', riskLevel: 'High', proof: 'Kitchen Hygiene Log', location: 'Kitchen' },
                    { id: 'KWS-02', description: 'Check health and hygiene of all kitchen staff daily.', priority: 'High', riskLevel: 'High', proof: 'Staff Health Log', location: 'Kitchen' },
                    { id: 'KWS-03', description: 'Conduct quarterly testing of all drinking water sources.', priority: 'High', riskLevel: 'High', proof: 'Water Test Report', location: 'Lab' },
                    { id: 'KWS-04', description: 'Ensure raw and cooked foods are stored separately.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Kitchen' },
                    { id: 'KWS-05', description: 'Log temperatures of refrigerators and freezers.', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Kitchen' },
                    { id: 'KWS-06', description: 'Check expiry dates of all food ingredients.', priority: 'High', riskLevel: 'High', proof: 'Expiry Date Log', location: 'Kitchen' },
                    { id: 'KWS-07', description: 'Ensure kitchen staff use hairnets, gloves, and aprons.', priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Kitchen' },
                    { id: 'KWS-08', description: 'Clean and sanitize all food preparation surfaces.', priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'KWS-09', description: 'Manage waste disposal and pest control.', priority: 'High', riskLevel: 'High', proof: 'Waste & Pest Log', location: 'Kitchen' },
                    { id: 'KWS-10', description: 'Maintain a clean and functional water purifier system.', priority: 'High', riskLevel: 'High', proof: 'Purifier Maintenance Log', location: 'Water Station' },
                ]
            },
            {
                title: "Incident Handling Protocol",
                department: "Management",
                frequency: "Per Incident",
                role: "Principal",
                icon: <FileWarning />,
                summary: "A step-by-step guide for handling any student injury, safety breach, or other incidents.",
                tasks: [
                    { id: 'INC-HDLG-01', description: 'Provide immediate first aid and notify parents.', priority: 'High', riskLevel: 'High', proof: 'First Aid & Notification Log', location: 'Incident Site/Office' },
                    { id: 'INC-HDLG-02', description: 'Document the incident in detail with witness statements.', priority: 'High', riskLevel: 'High', proof: 'Incident Report Form', location: 'Office' },
                    { id: 'INC-HDLG-03', description: 'Escalate the incident to senior management or trustees if required.', priority: 'High', riskLevel: 'High', proof: 'Escalation Communication', location: 'Office' },
                    { id: 'INC-HDLG-04', description: 'Conduct a root cause analysis to prevent recurrence.', priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'Office' },
                    { id: 'INC-HDLG-05', description: 'Implement corrective and preventive actions (CAPA).', priority: 'High', riskLevel: 'High', proof: 'CAPA Plan', location: 'Office' },
                    { id: 'INC-HDLG-06', description: 'Preserve any CCTV footage or other evidence.', priority: 'High', riskLevel: 'High', proof: 'Evidence Log', location: 'Security Room' },
                    { id: 'INC-HDLG-07', description: 'Communicate with parents transparently and empathetically.', priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Office' },
                    { id: 'INC-HDLG-08', description: 'File any required reports with regulatory bodies.', priority: 'High', riskLevel: 'High', proof: 'Regulatory Filing', location: 'Office' },
                    { id: 'INC-HDLG-09', description: 'Debrief with involved staff to learn from the incident.', priority: 'High', riskLevel: 'Medium', proof: 'Debrief Meeting Minutes', location: 'Office' },
                    { id: 'INC-HDLG-10', description: 'Review and update relevant policies based on the incident.', priority: 'High', riskLevel: 'High', proof: 'Policy Update Log', location: 'Office' },
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
        description: "A comprehensive compliance and safety pack for managing large educational campuses, from hostels and labs to transport and events.",
        icon: <GraduationCap />,
        whoIsItFor: ["Deans & Directors", "Registrars", "Heads of Administration", "Chief Wardens", "Campus Security Heads"],
        sampleItems: [
            { text: "Ensure student safety with hostel entry/exit protocols and room inspections.", icon: <Home /> },
            { text: "Prevent accidents and misuse with rigorous lab safety, chemical handling, and equipment audits.", icon: <TestTube /> },
            { text: "Safeguard campus events with protocols for crowd management, permissions, and emergency response.", icon: <Theater /> },
            { text: "Maintain a compliant campus with audits for fire safety, accessibility (Divyangjan), and infrastructure.", icon: <Building2 /> },
            { text: "Mitigate foodborne illness risks in large messes with HACCP-aligned kitchen hygiene SOPs.", icon: <Utensils /> },
            { text: "Protect against cyber threats with IT policies for network access, data privacy, and acceptable use.", icon: <Shield /> }
        ],
        previewScenario: {
            title: "Handling a Hostel Medical Emergency",
            description: "A student has a medical emergency in their hostel room late at night. This scenario shows how checklists ensure a swift and coordinated response.",
            tasks: [
                { id: 'HOSTEL-SEC-04', description: "The 'Hostel Security' SOP provides the warden with a clear protocol to assess the situation and immediately call the campus ambulance.", sourceChecklist: "Hostel Security & Entry Protocol", priority: 'High' },
                { id: 'TRANSPORT-EMER-01', description: "The 'Emergency Transport' checklist ensures the on-campus ambulance is always ready, with a driver on call and equipment checked daily.", sourceChecklist: "Emergency Transport SOP", priority: 'High' },
                { id: 'INC-HDLG-UNIV-02', description: "The 'Incident Handling' protocol mandates that the student's emergency contact is notified immediately and the entire incident is logged for official records.", sourceChecklist: "Campus Incident Handling", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with UGC, AICTE, and NAAC Safety & Compliance Norms",
            standards: [
                { name: "UGC Guidelines", description: "Compliance with University Grants Commission safety and anti-ragging mandates." },
                { name: "AICTE Norms", description: "Adherence to standards for technical education infrastructure and safety." },
                { name: "NAAC Criteria", description: "Meeting criteria for governance, leadership, and student support for accreditation." },
                { name: "ISO 21001", description: "International standard for educational organizations management systems." }
            ]
        },
        checklists: [
             {
                title: "Hostel Security & Entry Protocol",
                department: "Hostel/Security",
                frequency: "Daily",
                role: "Chief Warden",
                icon: <KeyRound />,
                summary: "Entry/exit log, guest verification, room checks, and emergency response.",
                tasks: [
                    { id: 'HOSTEL-SEC-01', description: 'Maintain a log of all entries and exits from the hostel.', priority: 'High', riskLevel: 'High', proof: 'Entry/Exit Register', location: 'Hostel Entrance' },
                    { id: 'HOSTEL-SEC-02', description: 'Verify the identity of all guests and ensure they sign in.', priority: 'High', riskLevel: 'High', proof: 'Guest Register', location: 'Hostel Entrance' },
                    { id: 'HOSTEL-SEC-03', description: 'Conduct surprise room checks for prohibited items (e.g., heaters, drugs).', priority: 'High', riskLevel: 'High', proof: 'Room Check Log', location: 'Hostel Rooms' },
                    { id: 'HOSTEL-SEC-04', description: 'Have a clear protocol for handling medical emergencies or disturbances.', priority: 'High', riskLevel: 'High', proof: 'Emergency SOP', location: 'Warden Office' },
                    { id: 'HOSTEL-SEC-05', description: 'Ensure all security cameras in common areas are functional.', priority: 'High', riskLevel: 'High', proof: 'CCTV Health Check', location: 'Security Room' },
                    { id: 'HOSTEL-SEC-06', description: 'Check fire extinguishers and emergency exits in the hostel.', priority: 'High', riskLevel: 'High', proof: 'Fire Safety Log', location: 'Hostel' },
                    { id: 'HOSTEL-SEC-07', description: 'Ensure all hostel staff are trained in emergency procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'HOSTEL-SEC-08', description: 'Secure the hostel premises at a designated time each night.', priority: 'High', riskLevel: 'High', proof: 'Lock-up Log', location: 'Hostel' },
                    { id: 'HOSTEL-SEC-09', description: 'Monitor for and prevent ragging incidents.', priority: 'High', riskLevel: 'High', proof: 'Anti-Ragging Patrol Log', location: 'Hostel' },
                    { id: 'HOSTEL-SEC-10', description: 'Maintain an emergency contact list for all resident students.', priority: 'High', riskLevel: 'High', proof: 'Contact List', location: 'Warden Office' },
                ]
            },
            {
                title: "Lab Safety & Chemical Handling",
                department: "Academics/Labs",
                frequency: "Daily/Per Lab",
                role: "Lab Technician",
                icon: <TestTube />,
                summary: "PPE checks, chemical inventory, fume hood functionality, and waste disposal.",
                tasks: [
                    { id: 'LAB-01', description: 'Ensure all students and staff wear appropriate Personal Protective Equipment (PPE).', priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Laboratory' },
                    { id: 'LAB-02', description: 'Maintain an up-to-date inventory of all chemicals with MSDS sheets.', priority: 'High', riskLevel: 'High', proof: 'Chemical Inventory', location: 'Lab Store' },
                    { id: 'LAB-03', description: 'Check that fume hoods and ventilation systems are working correctly.', priority: 'High', riskLevel: 'High', proof: 'Fume Hood Test Log', location: 'Laboratory' },
                    { id: 'LAB-04', description: 'Follow correct procedures for chemical and biological waste disposal.', priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Waste Area' },
                    { id: 'LAB-05', description: 'Ensure emergency showers and eyewash stations are accessible and functional.', priority: 'High', riskLevel: 'High', proof: 'Emergency Equipment Log', location: 'Laboratory' },
                    { id: 'LAB-06', description: 'Inspect lab equipment for any damage or malfunction before use.', priority: 'High', riskLevel: 'High', proof: 'Equipment Check Log', location: 'Laboratory' },
                    { id: 'LAB-07', description: 'Provide safety training to all new lab users.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'LAB-08', description: 'Label all chemicals and solutions clearly.', priority: 'High', riskLevel: 'High', proof: 'Label Audit', location: 'Laboratory' },
                    { id: 'LAB-09', description: 'Have a spill response kit ready and accessible.', priority: 'High', riskLevel: 'High', proof: 'Spill Kit Check', location: 'Laboratory' },
                    { id: 'LAB-10', description: 'Restrict access to the lab to authorized personnel only.', priority: 'High', riskLevel: 'High', proof: 'Access Log', location: 'Laboratory' },
                ]
            },
            {
                title: "Campus Event Management",
                department: "Student Affairs",
                frequency: "Per Event",
                role: "Event Coordinator",
                icon: <Theater />,
                summary: "Permissions, crowd control plan, emergency medical support, and post-event cleanup.",
                tasks: [
                    { id: 'EVENT-01', description: 'Obtain all necessary internal and external permissions for the event.', priority: 'High', riskLevel: 'High', proof: 'Permission Documents', location: 'Office' },
                    { id: 'EVENT-02', description: 'Develop a detailed crowd management and security plan.', priority: 'High', riskLevel: 'High', proof: 'Crowd Management Plan', location: 'Office' },
                    { id: 'EVENT-03', description: 'Arrange for on-site emergency medical support (ambulance, first-aid).', priority: 'High', riskLevel: 'High', proof: 'Medical Support Contract', location: 'Office' },
                    { id: 'EVENT-04', description: 'Coordinate with campus security and local police if required.', priority: 'High', riskLevel: 'High', proof: 'Security Coordination Plan', location: 'Office' },
                    { id: 'EVENT-05', description: 'Inspect the event venue for safety hazards before the event.', priority: 'High', riskLevel: 'High', proof: 'Venue Inspection Log', location: 'Event Venue' },
                    { id: 'EVENT-06', description: 'Ensure clear signage for entries, exits, and emergency routes.', priority: 'High', riskLevel: 'High', proof: 'Signage Plan', location: 'Event Venue' },
                    { id: 'EVENT-07', description: 'Have a communication plan for attendees in case of an emergency.', priority: 'High', riskLevel: 'High', proof: 'Communication Plan', location: 'Office' },
                    { id: 'EVENT-08', description: 'Manage sound levels to comply with local regulations.', priority: 'Medium', riskLevel: 'Low', proof: 'Sound Level Log', location: 'Event Venue' },
                    { id: 'EVENT-09', description: 'Ensure adequate sanitation facilities are available.', priority: 'High', riskLevel: 'Medium', proof: 'Facility Check', location: 'Event Venue' },
                    { id: 'EVENT-10', description: 'Plan and execute post-event cleanup.', priority: 'High', riskLevel: 'Low', proof: 'Cleanup Log', location: 'Event Venue' },
                ]
            },
            {
                title: "Campus Infrastructure & Safety Audit",
                department: "Facilities/Admin",
                frequency: "Quarterly",
                role: "Admin Head",
                icon: <Building2 />,
                summary: "Quarterly audits of building structural safety, fire compliance, and accessibility for disabled persons.",
                tasks: [
                    { id: 'CISA-01', description: 'Conduct a quarterly audit of building structural integrity.', priority: 'High', riskLevel: 'High', proof: 'Structural Audit Report', location: 'Campus' },
                    { id: 'CISA-02', description: 'Inspect all fire safety equipment and evacuation routes.', priority: 'High', riskLevel: 'High', proof: 'Fire Safety Audit', location: 'Campus' },
                    { id: 'CISA-03', description: 'Audit campus accessibility for disabled persons (ramps, lifts, restrooms).', priority: 'High', riskLevel: 'Medium', proof: 'Accessibility Audit', location: 'Campus' },
                    { id: 'CISA-04', description: 'Check for any electrical hazards across the campus.', priority: 'High', riskLevel: 'High', proof: 'Electrical Safety Audit', location: 'Campus' },
                    { id: 'CISA-05', description: 'Ensure all campus lighting is functional, especially at night.', priority: 'High', riskLevel: 'Medium', proof: 'Lighting Audit', location: 'Campus' },
                    { id: 'CISA-06', description: 'Inspect water supply and sanitation systems.', priority: 'High', riskLevel: 'High', proof: 'Water & Sanitation Audit', location: 'Campus' },
                    { id: 'CISA-07', description: 'Check road conditions and signage within the campus.', priority: 'High', riskLevel: 'Medium', proof: 'Road Safety Audit', location: 'Campus' },
                    { id: 'CISA-08', description: 'Maintain records of all maintenance and repair work.', priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Office' },
                    { id: 'CISA-09', description: 'Manage waste disposal and recycling programs.', priority: 'High', riskLevel: 'Medium', proof: 'Waste Management Audit', location: 'Campus' },
                    { id: 'CISA-10', description: 'Address any safety concerns raised by students or staff.', priority: 'High', riskLevel: 'High', proof: 'Concern Resolution Log', location: 'Office' },
                ]
            },
             {
                title: "Mess/Canteen Food Safety (HACCP)",
                department: "Hospitality/Admin",
                frequency: "Daily",
                role: "Mess Manager",
                icon: <Utensils />,
                summary: "Daily checks for food safety in large-scale canteens, based on HACCP principles.",
                tasks: [
                    { id: 'MESS-01', description: 'Log temperatures of all refrigerators, freezers, and hot holding units.', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Mess/Canteen' },
                    { id: 'MESS-02', description: 'Check all raw material deliveries for quality and expiry.', priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Stores' },
                    { id: 'MESS-03', description: 'Ensure proper segregation of raw, cooked, vegetarian, and non-vegetarian food.', priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Kitchen/Stores' },
                    { id: 'MESS-04', description: 'Verify hygiene of all food handlers (uniform, nails, health).', priority: 'High', riskLevel: 'High', proof: 'Staff Hygiene Log', location: 'Kitchen' },
                    { id: 'MESS-05', description: 'Ensure the kitchen and dining areas are clean and pest-free.', priority: 'High', riskLevel: 'High', proof: 'Cleaning & Pest Control Log', location: 'Mess/Canteen' },
                    { id: 'MESS-06', description: 'Calibrate food thermometers daily.', priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Kitchen' },
                    { id: 'MESS-07', description: 'Check that water used for cooking and drinking is safe.', priority: 'High', riskLevel: 'High', proof: 'Water Test Report', location: 'Office' },
                    { id: 'MESS-08', description: 'Maintain a food sample from each meal for 48 hours.', priority: 'High', riskLevel: 'High', proof: 'Sample Log', location: 'Kitchen' },
                    { id: 'MESS-09', description: 'Manage waste disposal effectively to prevent pests.', priority: 'High', riskLevel: 'High', proof: 'Waste Log', location: 'Waste Area' },
                    { id: 'MESS-10', description: 'Train all kitchen staff on food safety and hygiene.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                ]
            },
            {
                title: "IT & Network Acceptable Use Policy",
                department: "IT",
                frequency: "Ongoing",
                role: "IT Administrator",
                icon: <Shield />,
                summary: "Policies for student and staff use of campus Wi-Fi, computer labs, and data privacy.",
                tasks: [
                    { id: 'IT-AUP-01', description: 'Enforce strong password policies for all network users.', priority: 'High', riskLevel: 'High', proof: 'Password Policy Document', location: 'System' },
                    { id: 'IT-AUP-02', description: 'Block access to malicious or inappropriate websites on the campus network.', priority: 'High', riskLevel: 'High', proof: 'Firewall/Filter Logs', location: 'System' },
                    { id: 'IT-AUP-03', description: 'Monitor network for unusual activity or security threats.', priority: 'High', riskLevel: 'High', proof: 'Network Monitoring Logs', location: 'System' },
                    { id: 'IT-AUP-04', description: 'Ensure all campus computers have up-to-date antivirus software.', priority: 'High', riskLevel: 'High', proof: 'Antivirus Dashboard', location: 'System' },
                    { id: 'IT-AUP-05', description: 'Have all users agree to an Acceptable Use Policy upon first login.', priority: 'High', riskLevel: 'Medium', proof: 'AUP Acceptance Log', location: 'System' },
                    { id: 'IT-AUP-06', description: 'Manage student data in compliance with data privacy laws.', priority: 'High', riskLevel: 'High', proof: 'Data Privacy Audit', location: 'System' },
                    { id: 'IT-AUP-07', description: 'Provide secure Wi-Fi access for students, staff, and guests.', priority: 'High', riskLevel: 'High', proof: 'Wi-Fi Configuration', location: 'System' },
                    { id: 'IT-AUP-08', description: 'Back up all critical university data regularly.', priority: 'High', riskLevel: 'High', proof: 'Backup Logs', location: 'System' },
                    { id: 'IT-AUP-09', description: 'Have a clear policy for software installation on campus computers.', priority: 'High', riskLevel: 'Medium', proof: 'Software Policy', location: 'System' },
                    { id: 'IT-AUP-10', description: 'Provide IT support to students and staff.', priority: 'High', riskLevel: 'Medium', proof: 'Helpdesk Tickets', location: 'System' },
                ]
            },
            {
                title: "Emergency Transport SOP",
                department: "Health/Transport",
                frequency: "Daily",
                role: "Transport Manager",
                icon: <Ambulance />,
                summary: "Checklists for maintaining an on-campus ambulance, driver readiness, and coordination with local hospitals.",
                tasks: [
                    { id: 'TRANSPORT-EMER-01', description: 'Check on-campus ambulance daily (fuel, tires, medical supplies).', priority: 'High', riskLevel: 'High', proof: 'Ambulance Check Log', location: 'Ambulance Bay' },
                    { id: 'TRANSPORT-EMER-02', description: 'Ensure an ambulance driver is available on call 24/7.', priority: 'High', riskLevel: 'High', proof: 'Driver Roster', location: 'Transport Office' },
                    { id: 'TRANSPORT-EMER-03', description: 'Maintain a list of nearby hospitals and their contact numbers.', priority: 'High', riskLevel: 'High', proof: 'Hospital Contact List', location: 'Ambulance/Office' },
                    { id: 'TRANSPORT-EMER-04', description: 'Train drivers on the fastest routes to designated hospitals.', priority: 'High', riskLevel: 'Medium', proof: 'Route Training Log', location: 'Office' },
                    { id: 'TRANSPORT-EMER-05', description: 'Have a clear protocol for dispatching the ambulance.', priority: 'High', riskLevel: 'High', proof: 'Dispatch SOP', location: 'Security/Health Center' },
                    { id: 'TRANSPORT-EMER-06', description: 'Log all ambulance trips with details of the patient and incident.', priority: 'High', riskLevel: 'High', proof: 'Ambulance Trip Log', location: 'Transport Office' },
                    { id: 'TRANSPORT-EMER-07', description: 'Regularly service the ambulance.', priority: 'High', riskLevel: 'High', proof: 'Service Records', location: 'Workshop' },
                    { id: 'TRANSPORT-EMER-08', description: 'Ensure ambulance staff are trained in first-aid.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'TRANSPORT-EMER-09', description: 'Test ambulance siren and lights daily.', priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Ambulance Bay' },
                    { id: 'TRANSPORT-EMER-10', description: 'Coordinate with campus security for clear passage during emergencies.', priority: 'High', riskLevel: 'High', proof: 'Coordination Plan', location: 'Security Office' },
                ]
            },
             {
                title: "Campus Incident Handling",
                department: "Management",
                frequency: "Per Incident",
                role: "Registrar/Dean",
                icon: <FileWarning />,
                summary: "Step-by-step procedures for handling various campus incidents like student conflicts, medical emergencies, or security breaches.",
                tasks: [
                    { id: 'INC-HDLG-UNIV-01', description: 'Log every incident in a central incident management system.', priority: 'High', riskLevel: 'High', proof: 'Incident Log', location: 'System' },
                    { id: 'INC-HDLG-UNIV-02', description: 'Immediately notify parents/guardians in case of a student medical emergency.', priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Office' },
                    { id: 'INC-HDLG-UNIV-03', description: 'Follow a fair and documented process for investigating student conflicts.', priority: 'High', riskLevel: 'Medium', proof: 'Investigation Report', location: 'Office' },
                    { id: 'INC-HDLG-UNIV-04', description: 'Escalate major security breaches to senior management and police.', priority: 'High', riskLevel: 'High', proof: 'Escalation Log', location: 'Office' },
                    { id: 'INC-HDLG-UNIV-05', description: 'Maintain confidentiality of all parties involved in an incident.', priority: 'High', riskLevel: 'High', proof: 'Confidentiality Agreement', location: 'Office' },
                    { id: 'INC-HDLG-UNIV-06', description: 'Conduct a root cause analysis for all significant incidents.', priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'Office' },
                    { id: 'INC-HDLG-UNIV-07', description: 'Implement corrective actions to prevent recurrence.', priority: 'High', riskLevel: 'High', proof: 'CAPA Plan', location: 'System' },
                    { id: 'INC-HDLG-UNIV-08', description: 'Provide support and counseling to affected students/staff.', priority: 'High', riskLevel: 'Medium', proof: 'Counseling Log', location: 'Counseling Center' },
                    { id: 'INC-HDLG-UNIV-09', description: 'Document all communications with external parties (police, media).', priority: 'High', riskLevel: 'High', proof: 'External Communication Log', location: 'Office' },
                    { id: 'INC-HDLG-UNIV-10', description: 'Review and update incident handling procedures annually.', priority: 'High', riskLevel: 'High', proof: 'Updated Procedures', location: 'Office' },
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
        description: "A comprehensive EHS and operational toolkit for plant heads and safety officers to ensure a safe, compliant, and efficient manufacturing environment.",
        icon: <Factory />,
        badgeText: "Safety Critical",
        badgeVariant: "destructive",
        bestseller: true,
        whoIsItFor: ["Plant Heads", "EHS Officers", "Production Managers", "Maintenance Heads", "Quality Control Managers"],
        sampleItems: [
            { text: "Prevent fatal accidents with a legally compliant Lock-Out Tag-Out (LOTO) procedure for machine maintenance.", icon: <Lock /> },
            { text: "Ensure worker safety with a permit-to-work system for high-risk jobs like hot work and confined space entry.", icon: <FileCheck /> },
            { text: "Mitigate fire and explosion risks with strict chemical handling and storage protocols.", icon: <Siren /> },
            { text: "Guarantee product quality and traceability with raw material inspection and batch tracking SOPs.", icon: <PackageCheck /> },
            { text: "Build a culture of safety with daily shift-start safety briefings and machine readiness checklists.", icon: <ClipboardList /> },
            { text: "Maintain compliance with a robust system for environmental monitoring and statutory reporting.", icon: <Leaf /> }
        ],
        previewScenario: {
            title: "Preventing a Fatal Maintenance Accident",
            description: "A maintenance worker is severely injured when a machine they are working on is accidentally started by another employee. This scenario shows how checklists prevent this.",
            tasks: [
                { id: 'LOTO-01', description: "The 'LOTO' procedure mandates that the worker must apply their personal lock and tag to the machine's power source before starting work, making an accidental startup impossible.", sourceChecklist: "Lock-Out Tag-Out (LOTO) SOP", priority: 'High' },
                { id: 'PTW-01', description: "The 'Permit-to-Work' system requires a signed permit from a supervisor that verifies the machine is de-energized and isolated before any maintenance can begin.", sourceChecklist: "Permit-To-Work (PTW) System", priority: 'High' },
                { id: 'SHIFT-H-01', description: "The 'Shift Handover' checklist includes a section to communicate all ongoing maintenance activities, ensuring the incoming shift is aware of the work and the LOTO in place.", sourceChecklist: "Shift Handover Protocol", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Key Industrial & Safety Standards",
            standards: [
                { name: "OSHA 29 CFR 1910", description: "The US standard for occupational safety, including LOTO and PTW." },
                { name: "Factories Act, 1948", description: "Compliance with Indian laws for worker health and safety in factories." },
                { name: "ISO 45001", description: "The international standard for occupational health and safety management." },
                { name: "ISO 14001", description: "For environmental management and compliance." }
            ]
        },
        checklists: [
             {
                title: "Lock-Out Tag-Out (LOTO) SOP",
                department: "Maintenance/Safety",
                frequency: "Per Maintenance Task",
                role: "Maintenance Technician",
                icon: <Lock />,
                summary: "A legally compliant procedure to ensure machinery is safely de-energized before maintenance.",
                tasks: [
                    { id: 'LOTO-01', description: 'Identify all energy sources for the equipment.', priority: 'High', riskLevel: 'High', proof: 'Energy Source List', location: 'Machine' },
                    { id: 'LOTO-02', description: 'Isolate the energy sources (e.g., turn off breaker, close valve).', priority: 'High', riskLevel: 'High', proof: 'Visual Confirmation', location: 'Energy Source' },
                    { id: 'LOTO-03', description: 'Apply a personal lock and tag to the energy isolating device.', priority: 'High', riskLevel: 'High', proof: 'Lock & Tag Photo', location: 'Energy Source' },
                    { id: 'LOTO-04', description: 'Dissipate any stored energy (e.g., bleed pressure, discharge capacitors).', priority: 'High', riskLevel: 'High', proof: 'Energy Dissipation Log', location: 'Machine' },
                    { id: 'LOTO-05', description: 'Verify the equipment is de-energized by trying to start it.', priority: 'High', riskLevel: 'High', proof: 'Zero Energy Test Log', location: 'Machine' },
                    { id: 'LOTO-06', description: 'After work, ensure all tools and personnel are clear.', priority: 'High', riskLevel: 'High', proof: 'Clearance Check', location: 'Machine' },
                    { id: 'LOTO-07', description: 'Remove your lock and tag.', priority: 'High', riskLevel: 'High', proof: 'Lock Removal Log', location: 'Energy Source' },
                    { id: 'LOTO-08', description: 'Re-energize the equipment and test for normal operation.', priority: 'High', riskLevel: 'High', proof: 'Operational Test Log', location: 'Machine' },
                    { id: 'LOTO-09', description: 'Document the entire LOTO procedure in the maintenance log.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Log', location: 'System' },
                    { id: 'LOTO-10', description: 'Provide annual LOTO training to all affected employees.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                ]
            },
            {
                title: "Permit-To-Work (PTW) System",
                department: "Safety",
                frequency: "Per High-Risk Job",
                role: "Safety Officer",
                icon: <FileCheck />,
                summary: "A formal permit system for hot work, confined space entry, and working at height.",
                tasks: [
                    { id: 'PTW-01', description: 'Issue a specific permit for any high-risk work (hot work, confined space, height).', priority: 'High', riskLevel: 'High', proof: 'Signed Permit', location: 'Work Area' },
                    { id: 'PTW-02', description: 'Conduct a job safety analysis (JSA) before issuing the permit.', priority: 'High', riskLevel: 'High', proof: 'JSA Document', location: 'Office' },
                    { id: 'PTW-03', description: 'Verify all safety precautions listed on the permit are in place.', priority: 'High', riskLevel: 'High', proof: 'Pre-work Inspection', location: 'Work Area' },
                    { id: 'PTW-04', description: 'Ensure all personnel involved have signed the permit.', priority: 'High', riskLevel: 'High', proof: 'Signed Permit', location: 'Work Area' },
                    { id: 'PTW-05', description: 'Display the permit prominently at the work location.', priority: 'High', riskLevel: 'Medium', proof: 'Photo of Displayed Permit', location: 'Work Area' },
                    { id: 'PTW-06', description: 'For confined space, test the atmosphere for oxygen and toxic gases.', priority: 'High', riskLevel: 'High', proof: 'Gas Test Log', location: 'Confined Space' },
                    { id: 'PTW-07', description: 'For hot work, ensure a fire watch is present and fire extinguishers are ready.', priority: 'High', riskLevel: 'High', proof: 'Fire Watch Log', location: 'Work Area' },
                    { id: 'PTW-08', description: 'Close the permit upon completion of work and verify the area is safe.', priority: 'High', riskLevel: 'High', proof: 'Closed Permit', location: 'Office' },
                    { id: 'PTW-09', description: 'Audit the PTW system quarterly for compliance.', priority: 'High', riskLevel: 'High', proof: 'PTW Audit Report', location: 'Office' },
                    { id: 'PTW-10', description: 'Train all relevant staff on the PTW system.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                ]
            },
            {
                title: "Chemical Handling & Storage",
                department: "EHS",
                frequency: "Daily/Weekly",
                role: "Chemical Handler",
                icon: <TestTube />,
                summary: "Checks for proper labeling, segregation of incompatible chemicals, and availability of spill kits.",
                tasks: [
                    { id: 'CHS-01', description: 'Ensure all chemical containers are properly labeled with contents and hazards.', priority: 'High', riskLevel: 'High', proof: 'Labeling Audit', location: 'Chemical Store' },
                    { id: 'CHS-02', description: 'Store incompatible chemicals in separate, designated areas.', priority: 'High', riskLevel: 'High', proof: 'Storage Segregation Audit', location: 'Chemical Store' },
                    { id: 'CHS-03', description: 'Check that spill kits are fully stocked and accessible.', priority: 'High', riskLevel: 'High', proof: 'Spill Kit Inventory', location: 'Chemical Store' },
                    { id: 'CHS-04', description: 'Maintain an inventory of all chemicals with updated MSDS sheets.', priority: 'High', riskLevel: 'High', proof: 'Chemical Register', location: 'Office' },
                    { id: 'CHS-05', description: 'Inspect storage areas for leaks, spills, or damaged containers.', priority: 'High', riskLevel: 'High', proof: 'Storage Inspection Log', location: 'Chemical Store' },
                    { id: 'CHS-06', description: 'Ensure proper ventilation in chemical storage areas.', priority: 'High', riskLevel: 'High', proof: 'Ventilation System Check', location: 'Chemical Store' },
                    { id: 'CHS-07', description: 'Verify that all personnel handling chemicals are wearing the correct PPE.', priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Handling Area' },
                    { id: 'CHS-08', description: 'Follow correct procedures for disposing of chemical waste.', priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Waste Area' },
                    { id: 'CHS-09', description: 'Train employees on chemical handling safety and emergency procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'CHS-10', description: 'Ensure eyewash stations and safety showers are functional and tested weekly.', priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Handling Area' },
                ]
            },
             {
                title: "Shift Handover Protocol",
                department: "Production",
                frequency: "Per Shift",
                role: "Shift Supervisor",
                icon: <ClipboardList />,
                summary: "A structured handover process to communicate production status, safety issues, and maintenance activities.",
                tasks: [
                    { id: 'SHIFT-H-01', description: 'Review production targets and performance of the outgoing shift.', priority: 'High', riskLevel: 'Medium', proof: 'Production Log', location: 'Control Room' },
                    { id: 'SHIFT-H-02', description: 'Communicate any ongoing safety issues or maintenance work (LOTO).', priority: 'High', riskLevel: 'High', proof: 'Handover Logbook', location: 'Control Room' },
                    { id: 'SHIFT-H-03', description: 'Discuss any quality issues or deviations from the previous shift.', priority: 'High', riskLevel: 'High', proof: 'Quality Log', location: 'Control Room' },
                    { id: 'SHIFT-H-04', description: 'Check inventory levels of raw materials and finished goods.', priority: 'High', riskLevel: 'Medium', proof: 'Inventory Report', location: 'System' },
                    { id: 'SHIFT-H-05', description: 'Conduct a brief walkthrough of the production floor with the incoming supervisor.', priority: 'High', riskLevel: 'Medium', proof: 'Walkthrough Sign-off', location: 'Production Floor' },
                    { id: 'SHIFT-H-06', description: 'Assign tasks and positions to the incoming shift personnel.', priority: 'High', riskLevel: 'Medium', proof: 'Shift Roster', location: 'Control Room' },
                    { id: 'SHIFT-H-07', description: 'Ensure all logbooks and records are signed and up-to-date.', priority: 'High', riskLevel: 'High', proof: 'Logbook Audit', location: 'Control Room' },
                    { id: 'SHIFT-H-08', description: 'Brief the incoming team on any changes in procedure or schedule.', priority: 'High', riskLevel: 'Medium', proof: 'Briefing Notes', location: 'Control Room' },
                    { id: 'SHIFT-H-09', description: 'Verify that all necessary tools and equipment are available.', priority: 'High', riskLevel: 'Medium', proof: 'Tool Inventory', location: 'Tool Room' },
                    { id: 'SHIFT-H-10', description: 'Both outgoing and incoming supervisors must sign the handover log.', priority: 'High', riskLevel: 'High', proof: 'Signed Handover Log', location: 'Control Room' },
                ]
            },
            {
                title: "Raw Material & Inbound QC",
                department: "Quality/Stores",
                frequency: "Per Delivery",
                role: "QC Inspector",
                icon: <PackageCheck />,
                summary: "Verification of materials against specifications, sampling for testing, and quarantine of non-conforming goods.",
                tasks: [
                    { id: 'RM-QC-01', description: 'Verify incoming material against PO and supplier Certificate of Analysis (COA).', priority: 'High', riskLevel: 'High', proof: 'COA and PO Match', location: 'Receiving Bay' },
                    { id: 'RM-QC-02', description: 'Take a sample for quality testing as per the sampling plan.', priority: 'High', riskLevel: 'High', proof: 'Sample Log', location: 'Lab' },
                    { id: 'RM-QC-03', description: 'Quarantine the material until QC results are available.', priority: 'High', riskLevel: 'High', proof: 'Quarantine Tag', location: 'Quarantine Area' },
                    { id: 'RM-QC-04', description: 'Reject and return any material that does not meet specifications.', priority: 'High', riskLevel: 'High', proof: 'Rejection Note', location: 'Receiving Bay' },
                    { id: 'RM-QC-05', description: 'Release the material for production only after QC approval.', priority: 'High', riskLevel: 'High', proof: 'QC Release Note', location: 'System' },
                    { id: 'RM-QC-06', description: 'Inspect packaging for damage or contamination.', priority: 'High', riskLevel: 'High', proof: 'Packaging Inspection Log', location: 'Receiving Bay' },
                    { id: 'RM-QC-07', description: 'Check for correct labeling, including batch numbers and expiry dates.', priority: 'High', riskLevel: 'High', proof: 'Label Check Log', location: 'Receiving Bay' },
                    { id: 'RM-QC-08', description: 'Maintain a log of all incoming material inspections.', priority: 'High', riskLevel: 'High', proof: 'Inbound QC Log', location: 'System' },
                    { id: 'RM-QC-09', description: 'Audit supplier performance based on QC results.', priority: 'High', riskLevel: 'High', proof: 'Supplier Scorecard', location: 'Office' },
                    { id: 'RM-QC-10', description: 'Store materials in the correct environmental conditions.', priority: 'High', riskLevel: 'High', proof: 'Storage Condition Log', location: 'Stores' },
                ]
            },
            {
                title: "Incident Investigation & CAPA",
                department: "EHS/Management",
                frequency: "Per Incident",
                role: "Safety Manager",
                icon: <FileWarning />,
                summary: "A formal process for investigating accidents and near-misses to prevent recurrence.",
                tasks: [
                    { id: 'INC-CAPA-01', description: 'Log the incident or near-miss immediately.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'System' },
                    { id: 'INC-CAPA-02', description: 'Form an investigation team for serious incidents.', priority: 'High', riskLevel: 'High', proof: 'Team Charter', location: 'Office' },
                    { id: 'INC-CAPA-03', description: 'Conduct a root cause analysis (e.g., 5 Whys, Fishbone).', priority: 'High', riskLevel: 'High', proof: 'RCA Report', location: 'Office' },
                    { id: 'INC-CAPA-04', description: 'Develop a Corrective and Preventive Action (CAPA) plan.', priority: 'High', riskLevel: 'High', proof: 'CAPA Plan', location: 'System' },
                    { id: 'INC-CAPA-05', description: 'Assign owners and deadlines for each action in the CAPA plan.', priority: 'High', riskLevel: 'High', proof: 'CAPA Tracker', location: 'System' },
                    { id: 'INC-CAPA-06', description: 'Track all CAPA items to completion.', priority: 'High', riskLevel: 'High', proof: 'CAPA Status Report', location: 'System' },
                    { id: 'INC-CAPA-07', description: 'Verify the effectiveness of the implemented actions.', priority: 'High', riskLevel: 'High', proof: 'Effectiveness Review', location: 'System' },
                    { id: 'INC-CAPA-08', description: 'Share lessons learned with all relevant personnel.', priority: 'High', riskLevel: 'Medium', proof: 'Safety Alert/Toolbox Talk', location: 'Plant-wide' },
                    { id: 'INC-CAPA-09', description: 'Update SOPs or risk assessments based on findings.', priority: 'High', riskLevel: 'High', proof: 'Updated Documents', location: 'System' },
                    { id: 'INC-CAPA-10', description: 'Report incident statistics to management monthly.', priority: 'High', riskLevel: 'Medium', proof: 'Monthly Safety Report', location: 'Office' },
                ]
            },
        ]
    },
    {
        id: 'food_manufacturing_ops',
        title: "Food Manufacturing Operations",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Industrial & Transport",
        description: "A HACCP and FSSAI-compliant toolkit for food processing plants to ensure food safety, quality, and traceability from farm to fork.",
        icon: <Sprout />,
        badgeText: "FSSAI Compliant",
        badgeVariant: "accent",
        whoIsItFor: ["Food Plant Owners", "Quality Assurance Managers", "Production Heads", "F&B Entrepreneurs"],
        sampleItems: [
            { text: "Ensure end-to-end food safety with a comprehensive HACCP plan implementation checklist.", icon: <ShieldCheck /> },
            { text: "Prevent cross-contamination with color-coded zoning and sanitation protocols.", icon: <SprayCan /> },
            { text: "Guarantee full traceability with a robust batch coding and recall procedure.", icon: <Barcode /> },
            { text: "Maintain product integrity with strict cold chain management and temperature logging.", icon: <Thermometer /> },
            { text: "Meet regulatory standards with a complete supplier verification and raw material QC process.", icon: <PackageCheck /> },
            { text: "Protect your brand with a formal procedure for handling customer complaints and food safety incidents.", icon: <FileWarning /> }
        ],
        previewScenario: {
            title: "Executing a Mock Product Recall",
            description: "A regulator asks the plant to demonstrate its ability to trace a specific batch of product from a consumer back to the raw material source within 4 hours. This scenario shows how checklists make this possible.",
            tasks: [
                { id: 'TRACE-01', description: "The 'Traceability & Recall' SOP provides a step-by-step guide to use the batch number to identify all related production, QC, and raw material records.", sourceChecklist: "Traceability & Recall Procedure", priority: 'High' },
                { id: 'BATCH-01', description: "The 'Batch Production Record' for that batch contains all the necessary links to the raw material batch codes used.", sourceChecklist: "Batch Production Record", priority: 'High' },
                { id: 'RM-QC-08', description: "The 'Inbound QC' log for the raw material provides the final link back to the supplier and their Certificate of Analysis, completing the trace in well under the required time.", sourceChecklist: "Raw Material & Inbound QC", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Food Safety Standards",
            standards: [
                { name: "FSSAI (FoSTaC)", description: "Compliance with Indian food safety training and certification." },
                { name: "ISO 22000", description: "The international standard for food safety management systems." },
                { name: "HACCP", description: "Hazard Analysis and Critical Control Points system." },
                { name: "BRCGS", description: "Global standard for food safety, recognized by retailers worldwide." }
            ]
        },
        checklists: [
             {
                title: "HACCP Plan Implementation",
                department: "Quality",
                frequency: "Ongoing",
                role: "QA Manager",
                icon: <ShieldCheck />,
                summary: "A master checklist to ensure all elements of the HACCP plan are implemented and monitored.",
                tasks: [
                    { id: 'HACCP-IMP-01', description: 'Review and update the HACCP plan annually or when processes change.', priority: 'High', riskLevel: 'High', proof: 'Updated HACCP Plan', location: 'Office' },
                    { id: 'HACCP-IMP-02', description: 'Monitor all Critical Control Points (CCPs) as defined in the plan.', priority: 'High', riskLevel: 'High', proof: 'CCP Monitoring Records', location: 'Production Line' },
                    { id: 'HACCP-IMP-03', description: 'Take immediate corrective action for any CCP deviation.', priority: 'High', riskLevel: 'High', proof: 'Corrective Action Report', location: 'System' },
                    { id: 'HACCP-IMP-04', description: 'Verify that the HACCP system is working effectively through regular audits.', priority: 'High', riskLevel: 'High', proof: 'HACCP Verification Report', location: 'Office' },
                    { id: 'HACCP-IMP-05', description: 'Maintain all records related to the HACCP plan.', priority: 'High', riskLevel: 'High', proof: 'HACCP Record File', location: 'Office' },
                    { id: 'HACCP-IMP-06', description: 'Train all employees on their roles in the HACCP plan.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'HACCP-IMP-07', description: 'Conduct a hazard analysis for any new products or processes.', priority: 'High', riskLevel: 'High', proof: 'Hazard Analysis Report', location: 'Office' },
                    { id: 'HACCP-IMP-08', description: 'Validate critical limits for CCPs.', priority: 'High', riskLevel: 'High', proof: 'Validation Study', location: 'Lab' },
                    { id: 'HACCP-IMP-09', description: 'Review prerequisite programs (e.g., sanitation, pest control).', priority: 'High', riskLevel: 'High', proof: 'PRP Review Report', location: 'Office' },
                    { id: 'HACCP-IMP-10', description: 'Hold regular HACCP team meetings.', priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Office' },
                ]
            },
            {
                title: "Zoning & Cross-Contamination Control",
                department: "Production/Hygiene",
                frequency: "Daily",
                role: "Hygiene Supervisor",
                icon: <SprayCan />,
                summary: "Ensures physical separation and color-coding between raw material, processing, and packaging zones.",
                tasks: [
                    { id: 'ZCC-01', description: 'Ensure clear physical separation between raw and cooked/ready-to-eat areas.', priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Production Area' },
                    { id: 'ZCC-02', description: 'Use color-coded uniforms, tools, and cleaning equipment for different zones.', priority: 'High', riskLevel: 'High', proof: 'Color Coding Chart', location: 'Production Area' },
                    { id: 'ZCC-03', description: 'Control personnel movement between zones.', priority: 'High', riskLevel: 'High', proof: 'Access Control Log', location: 'Production Area' },
                    { id: 'ZCC-04', description: 'Manage airflow to prevent airborne contamination from raw to clean areas.', priority: 'High', riskLevel: 'High', proof: 'Air Pressure Monitoring', location: 'HVAC System' },
                    { id: 'ZCC-05', description: 'Have separate cleaning procedures for different zones.', priority: 'High', riskLevel: 'High', proof: 'Cleaning SOPs', location: 'Office' },
                    { id: 'ZCC-06', description: 'Ensure waste from raw areas does not pass through finished product areas.', priority: 'High', riskLevel: 'High', proof: 'Waste Movement Path', location: 'Plant Layout' },
                    { id: 'ZCC-07', description: 'Train employees on the importance of zoning and cross-contamination control.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'ZCC-08', description: 'Audit zoning compliance weekly.', priority: 'High', riskLevel: 'High', proof: 'Zoning Audit Report', location: 'Office' },
                    { id: 'ZCC-09', description: 'Use foot baths or sanitizing mats at the entrance to high-risk areas.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'High-Risk Area Entrance' },
                    { id: 'ZCC-10', description: 'Test for allergens in finished products to verify control measures.', priority: 'High', riskLevel: 'High', proof: 'Allergen Test Results', location: 'Lab' },
                ]
            },
            {
                title: "Traceability & Recall Procedure",
                department: "Quality",
                frequency: "Per Batch/Recall Drill",
                role: "QA Manager",
                icon: <Barcode />,
                summary: "A step-by-step procedure for tracing a product batch and executing a mock or real product recall.",
                tasks: [
                    { id: 'TRACE-01', description: 'Assign a unique batch code to every batch of finished product.', priority: 'High', riskLevel: 'High', proof: 'Batch Code Log', location: 'System' },
                    { id: 'TRACE-02', description: 'Link finished product batch codes to the raw material batch codes used.', priority: 'High', riskLevel: 'High', proof: 'Batch Production Record', location: 'System' },
                    { id: 'TRACE-03', description: 'Conduct a mock recall drill twice a year.', priority: 'High', riskLevel: 'High', proof: 'Mock Recall Report', location: 'Office' },
                    { id: 'TRACE-04', description: 'Maintain an up-to-date contact list for all distributors and regulators.', priority: 'High', riskLevel: 'High', proof: 'Contact List', location: 'Office' },
                    { id: 'TRACE-05', description: 'Have a pre-approved public communication template for recalls.', priority: 'High', riskLevel: 'Medium', proof: 'Communication Template', location: 'Office' },
                    { id: 'TRACE-06', description: 'Define a clear recall team with roles and responsibilities.', priority: 'High', riskLevel: 'High', proof: 'Recall Team Chart', location: 'Office' },
                    { id: 'TRACE-07', description: 'Test the ability to trace a batch forward (to customer) and backward (to supplier).', priority: 'High', riskLevel: 'High', proof: 'Traceability Test Report', location: 'System' },
                    { id: 'TRACE-08', description: 'Have a clear procedure for product destruction or return during a recall.', priority: 'High', riskLevel: 'High', proof: 'Destruction/Return SOP', location: 'Office' },
                    { id: 'TRACE-09', description: 'Investigate the root cause of any recall and implement corrective actions.', priority: 'High', riskLevel: 'High', proof: 'CAPA Report', location: 'System' },
                    { id: 'TRACE-10', description: 'Notify regulators within the required timeframe during a recall.', priority: 'High', riskLevel: 'High', proof: 'Regulatory Notification', location: 'Office' },
                ]
            },
        ]
    },
    {
        id: 'logistics_warehouse_pack',
        title: "Logistics & Warehouse Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Industrial & Transport",
        description: "A complete operational toolkit for warehouse managers and logistics heads to improve efficiency, safety, and inventory accuracy.",
        icon: <Warehouse />,
        badgeText: "Bestseller",
        badgeVariant: "default",
        bestseller: true,
        whoIsItFor: ["Warehouse Managers", "Logistics Heads", "Supply Chain Directors", "3PL Providers"],
        sampleItems: [
            { text: "Optimize space and speed with a systematic inbound receiving and putaway process.", icon: <PackageCheck /> },
            { text: "Ensure worker safety with daily checks for Material Handling Equipment (MHE) like forklifts.", icon: <HardHat /> },
            { text: "Achieve near-perfect inventory accuracy with a structured cycle counting and reconciliation SOP.", icon: <Barcode /> },
            { text: "Improve dispatch accuracy and speed with a clear order picking, packing, and shipping workflow.", icon: <Truck /> },
            { text: "Maintain a safe and efficient warehouse with daily housekeeping and safety inspection checklists.", icon: <Shield /> },
            { text: "Enhance security and prevent theft with robust visitor control and CCTV monitoring protocols.", icon: <KeyRound /> }
        ],
        previewScenario: {
            title: "Preventing a Major Shipping Error",
            description: "A large, high-value order is shipped to the wrong customer, resulting in significant financial loss and customer dissatisfaction. This scenario shows how checklists prevent this.",
            tasks: [
                { id: 'PICK-01', description: "The 'Order Picking' checklist requires the picker to scan the location and the product barcode, ensuring the correct item is picked.", sourceChecklist: "Order Picking & Packing SOP", priority: 'High' },
                { id: 'SHIP-03', description: "The 'Shipping & Dispatch' process mandates a final scan of the shipping label and the packed items, which would flag a mismatch before the truck is loaded.", sourceChecklist: "Shipping & Dispatch Workflow", priority: 'High' },
                { id: 'INV-07', description: "Real-time 'Inventory Management' updates from scanning would immediately show the discrepancy, allowing for correction before dispatch.", sourceChecklist: "Inventory & Cycle Count Management", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Logistics & Safety Standards",
            standards: [
                { name: "OSHA 1910.178", description: "Safety standards for powered industrial trucks (forklifts)." },
                { name: "ISO 9001", description: "For quality management in logistics processes." },
                { name: "ISO 45001", description: "For occupational health and safety in warehouse environments." },
                { name: "C-TPAT Principles", description: "References security principles for supply chain management." }
            ]
        },
        checklists: [
             {
                title: "Inbound & Receiving",
                department: "Receiving",
                frequency: "Per Shipment",
                role: "Receiving Clerk",
                icon: <PackageCheck />,
                summary: "Verifying shipments against POs, inspecting for damage, and accurate system updates.",
                tasks: [
                    { id: 'INB-01', description: 'Verify physical shipment against the Purchase Order (PO).', priority: 'High', riskLevel: 'High', proof: 'PO & Delivery Note Match', location: 'Receiving Bay' },
                    { id: 'INB-02', description: 'Inspect all incoming packages for damage or tampering.', priority: 'High', riskLevel: 'High', proof: 'Damage Report', location: 'Receiving Bay' },
                    { id: 'INB-03', description: 'Count and verify the quantity of items received.', priority: 'High', riskLevel: 'High', proof: 'Count Sheet', location: 'Receiving Bay' },
                    { id: 'INB-04', description: 'Update the Warehouse Management System (WMS) with received quantities.', priority: 'High', riskLevel: 'High', proof: 'WMS Entry Log', location: 'System' },
                    { id: 'INB-05', description: 'Assign items to a putaway location in the WMS.', priority: 'High', riskLevel: 'Medium', proof: 'Putaway Ticket', location: 'System' },
                    { id: 'INB-06', description: 'Generate and apply labels/barcodes if required.', priority: 'High', riskLevel: 'Medium', proof: 'Labeling Log', location: 'Receiving Bay' },
                    { id: 'INB-07', description: 'Move goods from receiving to the putaway or staging area promptly.', priority: 'High', riskLevel: 'Medium', proof: 'Movement Log', location: 'Receiving Bay' },
                    { id: 'INB-08', description: 'Handle and document any discrepancies or short shipments.', priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'System' },
                    { id: 'INB-09', description: 'Keep the receiving area clean and clear of obstructions.', priority: 'High', riskLevel: 'Medium', proof: 'Housekeeping Log', location: 'Receiving Bay' },
                    { id: 'INB-10', description: 'Sign and stamp the delivery driver\'s paperwork.', priority: 'High', riskLevel: 'Medium', proof: 'Signed Proof of Delivery', location: 'Receiving Bay' },
                ]
            },
            {
                title: "Material Handling Equipment (MHE) Safety",
                department: "Safety/Operations",
                frequency: "Daily",
                role: "MHE Operator",
                icon: <HardHat />,
                summary: "Daily pre-use inspection for forklifts, reach trucks, and other MHE.",
                tasks: [
                    { id: 'MHE-01', description: 'Perform a pre-use inspection of the forklift/MHE (brakes, horn, lights, tires).', priority: 'High', riskLevel: 'High', proof: 'Pre-use Inspection Checklist', location: 'MHE Parking Area' },
                    { id: 'MHE-02', description: 'Check battery charge or fuel level.', priority: 'High', riskLevel: 'Medium', proof: 'Inspection Checklist', location: 'MHE Parking Area' },
                    { id: 'MHE-03', description: 'Report any defects or malfunctions immediately and do not use the MHE.', priority: 'High', riskLevel: 'High', proof: 'Defect Report Form', location: 'Supervisor Office' },
                    { id: 'MHE-04', description: 'Ensure all operators have a valid MHE license.', priority: 'High', riskLevel: 'High', proof: 'License Verification Log', location: 'HR/Safety Office' },
                    { id: 'MHE-05', description: 'Follow designated pathways and speed limits within the warehouse.', priority: 'High', riskLevel: 'High', proof: 'CCTV Monitoring', location: 'Warehouse' },
                    { id: 'MHE-06', description: 'Use horn at intersections and blind spots.', priority: 'High', riskLevel: 'High', proof: 'Operator Observation', location: 'Warehouse' },
                    { id: 'MHE-07', description: 'Ensure loads are stable and within the MHE\'s capacity.', priority: 'High', riskLevel: 'High', proof: 'Load Check', location: 'Warehouse' },
                    { id: 'MHE-08', description: 'Park MHE in designated areas with forks lowered.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'MHE Parking Area' },
                    { id: 'MHE-09', description: 'Conduct refresher training for all MHE operators annually.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'MHE-10', description: 'Maintain a log of all MHE-related incidents and near-misses.', priority: 'High', riskLevel: 'High', proof: 'Incident Log', location: 'Safety Office' },
                ]
            },
            {
                title: "Inventory & Cycle Count Management",
                department: "Inventory",
                frequency: "Daily/Weekly",
                role: "Inventory Controller",
                icon: <Barcode />,
                summary: "A structured process for regular cycle counting to maintain inventory accuracy.",
                tasks: [
                    { id: 'INV-01', description: 'Generate a daily cycle count list based on ABC analysis or location.', priority: 'High', riskLevel: 'High', proof: 'Cycle Count Sheet', location: 'System' },
                    { id: 'INV-02', description: 'Conduct blind counts without showing system quantity to the counter.', priority: 'High', riskLevel: 'Medium', proof: 'Counting Procedure', location: 'Office' },
                    { id: 'INV-03', description: 'Investigate discrepancies between physical and system counts on the same day.', priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'System' },
                    { id: 'INV-04', description: 'Perform a recount for any disputed locations.', priority: 'High', riskLevel: 'High', proof: 'Recount Log', location: 'System' },
                    { id: 'INV-05', description: 'Process inventory adjustments with manager approval and reason codes.', priority: 'High', riskLevel: 'High', proof: 'Adjustment Form', location: 'System' },
                    { id: 'INV-06', description: 'Track inventory accuracy as a key performance indicator (KPI).', priority: 'High', riskLevel: 'High', proof: 'KPI Dashboard', location: 'System' },
                    { id: 'INV-07', description: 'Freeze locations in the WMS during counting to prevent movement.', priority: 'High', riskLevel: 'High', proof: 'WMS Setting', location: 'System' },
                    { id: 'INV-08', description: 'Analyze root causes of inventory inaccuracies.', priority: 'High', riskLevel: 'High', proof: 'Root Cause Analysis Report', location: 'Office' },
                    { id: 'INV-09', description: 'Conduct a full physical inventory count annually or biannually.', priority: 'High', riskLevel: 'High', proof: 'Full Count Plan', location: 'Office' },
                    { id: 'INV-10', description: 'Reconcile and post the results of the full physical count.', priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'System' },
                ]
            },
            {
                title: "Shipping & Dispatch Workflow",
                department: "Dispatch",
                frequency: "Per Shipment",
                role: "Dispatch Clerk",
                icon: <Truck />,
                summary: "A checklist to ensure orders are picked, packed, and shipped accurately and on time.",
                tasks: [
                    { id: 'SHIP-01', description: 'Generate a consolidated pick list for all orders to be dispatched.', priority: 'High', riskLevel: 'Medium', proof: 'Pick List', location: 'System' },
                    { id: 'SHIP-02', description: 'Pick items accurately using a handheld scanner or pick list.', priority: 'High', riskLevel: 'High', proof: 'Scan Log/Signed Pick List', location: 'Warehouse' },
                    { id: 'SHIP-03', description: 'Pack orders securely and apply the correct shipping label.', priority: 'High', riskLevel: 'High', proof: 'Packing Slip & Label', location: 'Packing Station' },
                    { id: 'SHIP-04', description: 'Verify the packed items against the customer order one last time.', priority: 'High', riskLevel: 'High', proof: 'Final Check Log', location: 'Packing Station' },
                    { id: 'SHIP-05', description: 'Load items onto the correct truck for delivery.', priority: 'High', riskLevel: 'High', proof: 'Loading Manifest', location: 'Dispatch Bay' },
                    { id: 'SHIP-06', description: 'Generate all necessary shipping documents (invoice, manifest, e-way bill).', priority: 'High', riskLevel: 'High', proof: 'Shipping Documents', location: 'System' },
                    { id: 'SHIP-07', description: 'Update the order status in the system to "Shipped".', priority: 'High', riskLevel: 'High', proof: 'System Update Log', location: 'System' },
                    { id: 'SHIP-08', description: 'Seal the truck and record the seal number.', priority: 'High', riskLevel: 'High', proof: 'Seal Log', location: 'Dispatch Bay' },
                    { id: 'SHIP-09', description: 'Hand over documents to the driver and get acknowledgment.', priority: 'High', riskLevel: 'High', proof: 'Signed Acknowledgment', location: 'Dispatch Bay' },
                    { id: 'SHIP-10', description: 'Track shipments and handle any delivery exceptions.', priority: 'High', riskLevel: 'Medium', proof: 'Tracking System', location: 'System' },
                ]
            },
            {
                title: "Warehouse Safety & Housekeeping",
                department: "Safety/Operations",
                frequency: "Daily",
                role: "Safety Officer",
                icon: <Shield />,
                summary: "Daily walkthroughs to check for common warehouse hazards and ensure a clean, safe environment.",
                tasks: [
                    { id: 'WSH-01', description: 'Ensure all aisles and emergency exits are clear of obstructions.', priority: 'High', riskLevel: 'High', proof: 'Daily Walkthrough Log', location: 'Warehouse' },
                    { id: 'WSH-02', description: 'Check that fire extinguishers and first aid stations are accessible.', priority: 'High', riskLevel: 'High', proof: 'Safety Equipment Log', location: 'Warehouse' },
                    { id: 'WSH-03', description: 'Inspect for any spills or leaks and ensure they are cleaned up immediately.', priority: 'High', riskLevel: 'High', proof: 'Spill Report', location: 'Warehouse' },
                    { id: 'WSH-04', description: 'Verify that all staff in the operational area are wearing required PPE.', priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Warehouse' },
                    { id: 'WSH-05', description: 'Check that pallets are stacked safely and not leaning.', priority: 'High', riskLevel: 'High', proof: 'Stacking Audit', location: 'Warehouse' },
                    { id: 'WSH-06', description: 'Ensure proper lighting throughout the warehouse.', priority: 'High', riskLevel: 'Medium', proof: 'Lighting Check', location: 'Warehouse' },
                    { id: 'WSH-07', description: 'Manage waste and scrap disposal effectively.', priority: 'High', riskLevel: 'Medium', proof: 'Waste Disposal Log', location: 'Waste Area' },
                    { id: 'WSH-08', description: 'Check battery charging areas for safety compliance.', priority: 'High', riskLevel: 'High', proof: 'Charging Area Audit', location: 'Charging Bay' },
                    { id: 'WSH-09', description: 'Conduct a brief safety toolbox talk at the start of each shift.', priority: 'High', riskLevel: 'Medium', proof: 'Toolbox Talk Record', location: 'Shift Briefing Area' },
                    { id: 'WSH-10', description: 'Report all safety incidents and near-misses.', priority: 'High', riskLevel: 'High', proof: 'Incident Reporting System', location: 'Safety Office' },
                ]
            },
        ]
    },
    // --- Entertainment & Events ---
    {
        id: 'film_production_pack',
        title: "Film & OTT Production Pack",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "An end-to-end production toolkit for film and OTT producers to manage everything from legal clearances and location permits to on-set safety and post-production workflows.",
        icon: <Film />,
        whoIsItFor: ["Film Producers", "Line Producers", "Production Managers", "Heads of Production (OTT)"],
        sampleItems: [
            { text: "Secure your project legally with pre-production checklists for script clearance, life rights, and chain-of-title.", icon: <FileLock /> },
            { text: "Streamline location management with SOPs for scouting, permits, and on-location logistics.", icon: <Map /> },
            { text: "Manage your cast and crew effectively with standardized contracts, call sheets, and travel coordination.", icon: <Users /> },
            { text: "Ensure a safe set with protocols for stunt coordination, equipment safety, and incident reporting.", icon: <Siren /> },
            { text: "Keep your budget on track with checklists for cost reporting, vendor payments, and cash flow management.", icon: <Banknote /> },
            { text: "Create a seamless post-production workflow with SOPs for dailies, editing, VFX handovers, and final delivery.", icon: <Scissors /> }
        ],
        previewScenario: {
            title: "Avoiding a Location Shutdown",
            description: "A film shoot in a public space is shut down by the police because the production team failed to get the right permits, costing a full day of shooting and thousands of dollars. This shows how checklists prevent this.",
            tasks: [
                { id: 'LOC-01', description: "The 'Location Scouting & Permitting' checklist requires the location manager to obtain and file all necessary permits (police, municipal, traffic) before the shoot is scheduled.", sourceChecklist: "Location Scouting & Permitting", priority: 'High' },
                { id: 'PRE-PROD-05', description: "The 'Pre-Production Planning' SOP includes a mandatory gate where all key permits must be in place before the final shooting schedule is locked and released.", sourceChecklist: "Pre-Production Planning", priority: 'High' },
                { id: 'CALL-03', description: "The daily 'Call Sheet Generation' process includes a check to ensure a copy of the day's location permit is attached for the on-set production manager.", sourceChecklist: "Call Sheet & Scheduling SOP", priority: 'Medium' }
            ]
        },
        globalStandards: {
            title: "Aligned with Industry Best Practices",
            standards: [
                { name: "Producers Guild of America (PGA)", description: "References best practices for production safety and management." },
                { name: "Motion Picture Association (MPA)", description: "Guidelines for content, safety, and intellectual property." },
                { name: "Indian Film & TV Producers Council (IFTPC)", description: "Compliance with local production guidelines." },
                { name: "Safety for Stunts & Action (Intl.)", description: "Follows international standards for high-risk scene coordination." }
            ]
        },
        checklists: [
             {
                title: "Pre-Production Planning",
                department: "Production",
                frequency: "Pre-Production Phase",
                role: "Line Producer",
                icon: <ClipboardList />,
                summary: "Script breakdown, budgeting, scheduling, and crewing up.",
                tasks: [
                    { id: 'PRE-PROD-01', description: 'Finalize and lock the shooting script.', priority: 'High', riskLevel: 'High', proof: 'Locked Script Document', location: 'Office' },
                    { id: 'PRE-PROD-02', description: 'Create a detailed script breakdown (scenes, characters, props, locations).', priority: 'High', riskLevel: 'High', proof: 'Breakdown Sheets', location: 'Office' },
                    { id: 'PRE-PROD-03', description: 'Develop a comprehensive production budget.', priority: 'High', riskLevel: 'High', proof: 'Budget Document', location: 'Office' },
                    { id: 'PRE-PROD-04', description: 'Create a detailed production schedule.', priority: 'High', riskLevel: 'High', proof: 'Production Schedule', location: 'Office' },
                    { id: 'PRE-PROD-05', description: 'Secure all key production crew (DOP, Director, Production Designer).', priority: 'High', riskLevel: 'High', proof: 'Crew Deal Memos', location: 'Office' },
                    { id: 'PRE-PROD-06', description: 'Cast all principal actors.', priority: 'High', riskLevel: 'High', proof: 'Cast Deal Memos', location: 'Office' },
                    { id: 'PRE-PROD-07', description: 'Secure production insurance (E&O, general liability).', priority: 'High', riskLevel: 'High', proof: 'Insurance Certificates', location: 'Office' },
                    { id: 'PRE-PROD-08', description: 'Set up production bank accounts and accounting systems.', priority: 'High', riskLevel: 'High', proof: 'Bank Account Details', location: 'Office' },
                    { id: 'PRE-PROD-09', description: 'Establish the production office.', priority: 'High', riskLevel: 'Medium', proof: 'Office Lease', location: 'Office' },
                    { id: 'PRE-PROD-10', description: 'Develop a health and safety plan for the production.', priority: 'High', riskLevel: 'High', proof: 'Safety Plan Document', location: 'Office' },
                ]
            },
            {
                title: "Legal & Clearances",
                department: "Legal",
                frequency: "Pre-Production",
                role: "Legal Counsel",
                icon: <FileLock />,
                summary: "Chain-of-title, script clearance, life rights, and E&O insurance.",
                tasks: [
                    { id: 'LEGAL-01', description: 'Secure a complete chain-of-title for the script.', priority: 'High', riskLevel: 'High', proof: 'Chain-of-Title Documents', location: 'Legal File' },
                    { id: 'LEGAL-02', description: 'Conduct a script clearance report to identify potential legal issues.', priority: 'High', riskLevel: 'High', proof: 'Script Clearance Report', location: 'Legal File' },
                    { id: 'LEGAL-03', description: 'Obtain life rights agreements for any real people depicted.', priority: 'High', riskLevel: 'High', proof: 'Life Rights Agreements', location: 'Legal File' },
                    { id: 'LEGAL-04', description: 'Secure Errors & Omissions (E&O) insurance.', priority: 'High', riskLevel: 'High', proof: 'E&O Insurance Policy', location: 'Legal File' },
                    { id: 'LEGAL-05', description: 'Clear all copyrighted materials (music, art, logos) that appear in the film.', priority: 'High', riskLevel: 'High', proof: 'Clearance Licenses', location: 'Legal File' },
                    { id: 'LEGAL-06', description: 'Draft and execute cast and crew contracts.', priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'HR File' },
                    { id: 'LEGAL-07', description: 'Ensure compliance with all guild and union agreements.', priority: 'High', riskLevel: 'High', proof: 'Union Agreement', location: 'Legal File' },
                    { id: 'LEGAL-08', description: 'Verify compliance with child labor laws if minors are employed.', priority: 'High', riskLevel: 'High', proof: 'Child Labor Permit', location: 'Legal File' },
                    { id: 'LEGAL-09', description: 'Draft location agreements and releases.', priority: 'High', riskLevel: 'High', proof: 'Location Agreements', location: 'Legal File' },
                    { id: 'LEGAL-10', description: 'Register the script with the copyright office.', priority: 'High', riskLevel: 'Medium', proof: 'Copyright Registration', location: 'Legal File' },
                ]
            },
            {
                title: "Location Scouting & Permitting",
                department: "Locations",
                frequency: "Per Location",
                role: "Location Manager",
                icon: <Map />,
                summary: "Scouting, negotiations, permits, and tech recces for all locations.",
                tasks: [
                    { id: 'LOC-01', description: 'Scout potential locations based on script requirements.', priority: 'High', riskLevel: 'Medium', proof: 'Location Photos/Videos', location: 'Office' },
                    { id: 'LOC-02', description: 'Negotiate and finalize location agreements and fees.', priority: 'High', riskLevel: 'High', proof: 'Signed Location Agreement', location: 'Office' },
                    { id: 'LOC-03', description: 'Obtain all necessary filming permits (municipal, police, fire).', priority: 'High', riskLevel: 'High', proof: 'Filming Permits', location: 'Office' },
                    { id: 'LOC-04', description: 'Conduct a technical recce with key department heads.', priority: 'High', riskLevel: 'High', proof: 'Recce Report', location: 'Location' },
                    { id: 'LOC-05', description: 'Arrange for parking, power, and facilities at each location.', priority: 'High', riskLevel: 'Medium', proof: 'Logistics Plan', location: 'Office' },
                    { id: 'LOC-06', description: 'Notify residents and businesses near the location.', priority: 'High', riskLevel: 'Medium', proof: 'Notification Letter', location: 'Office' },
                    { id: 'LOC-07', description: 'Plan for weather contingencies.', priority: 'High', riskLevel: 'High', proof: 'Weather Contingency Plan', location: 'Office' },
                    { id: 'LOC-08', description: 'Ensure location is safe and secure for cast and crew.', priority: 'High', riskLevel: 'High', proof: 'Safety Assessment', location: 'Location' },
                    { id: 'LOC-09', description: 'Restore the location to its original condition after the shoot.', priority: 'High', riskLevel: 'Medium', proof: 'Restoration Photos', location: 'Location' },
                    { id: 'LOC-10', description: 'Get a final sign-off from the location owner.', priority: 'High', riskLevel: 'High', proof: 'Sign-off Form', location: 'Location' },
                ]
            },
            {
                title: "Call Sheet & Scheduling SOP",
                department: "Production",
                frequency: "Daily",
                role: "Assistant Director",
                icon: <CalendarDays />,
                summary: "Daily creation and distribution of call sheets with all essential information.",
                tasks: [
                    { id: 'CALL-01', description: 'Create the daily call sheet with scenes, cast, and crew call times.', priority: 'High', riskLevel: 'High', proof: 'Call Sheet Document', location: 'Office' },
                    { id: 'CALL-02', description: 'Include weather forecasts, location address, and hospital details.', priority: 'High', riskLevel: 'High', proof: 'Call Sheet Document', location: 'Office' },
                    { id: 'CALL-03', description: 'Distribute the call sheet to all cast and crew.', priority: 'High', riskLevel: 'High', proof: 'Distribution Log', location: 'Office' },
                    { id: 'CALL-04', description: 'Confirm receipt of the call sheet with key personnel.', priority: 'High', riskLevel: 'Medium', proof: 'Confirmation Log', location: 'Office' },
                    { id: 'CALL-05', description: 'Update the schedule based on daily progress.', priority: 'High', riskLevel: 'High', proof: 'Updated Schedule', location: 'Office' },
                    { id: 'CALL-06', description: 'Coordinate with transport for cast and crew pickups.', priority: 'High', riskLevel: 'High', proof: 'Transport Schedule', location: 'Office' },
                    { id: 'CALL-07', description: 'List all required props, costumes, and equipment for the day.', priority: 'High', riskLevel: 'High', proof: 'Call Sheet Document', location: 'Office' },
                    { id: 'CALL-08', description: 'Include a detailed meal schedule.', priority: 'High', riskLevel: 'Medium', proof: 'Call Sheet Document', location: 'Office' },
                    { id: 'CALL-09', description: 'Double-check all information on the call sheet for accuracy.', priority: 'High', riskLevel: 'High', proof: 'Signed-off Call Sheet', location: 'Office' },
                    { id: 'CALL-10', description: 'Archive all call sheets for production records.', priority: 'High', riskLevel: 'Medium', proof: 'Call Sheet Archive', location: 'System' },
                ]
            },
            {
                title: "On-Set Safety Protocol",
                department: "Safety",
                frequency: "Daily",
                role: "Safety Officer",
                icon: <Siren />,
                summary: "Daily safety briefings, high-risk scene protocols, and incident reporting.",
                tasks: [
                    { id: 'SAFETY-01', description: 'Conduct a daily safety briefing at the start of the shoot.', priority: 'High', riskLevel: 'High', proof: 'Briefing Attendance', location: 'Set' },
                    { id: 'SAFETY-02', description: 'Implement specific protocols for stunts, fire, and other high-risk scenes.', priority: 'High', riskLevel: 'High', proof: 'High-Risk SOPs', location: 'Set' },
                    { id: 'SAFETY-03', description: 'Ensure a qualified medic and first-aid station are on set.', priority: 'High', riskLevel: 'High', proof: 'Medic Contract', location: 'Set' },
                    { id: 'SAFETY-04', description: 'Inspect all rigging, electricals, and equipment for safety.', priority: 'High', riskLevel: 'High', proof: 'Safety Inspection Log', location: 'Set' },
                    { id: 'SAFETY-05', description: 'Have a clear incident reporting and investigation procedure.', priority: 'High', riskLevel: 'High', proof: 'Incident Report Form', location: 'Office' },
                    { id: 'SAFETY-06', description: 'Ensure all crew members are wearing appropriate PPE.', priority: 'High', riskLevel: 'High', proof: 'PPE Audit', location: 'Set' },
                    { id: 'SAFETY-07', description: 'Manage on-set vehicle and MHE safety.', priority: 'High', riskLevel: 'High', proof: 'Vehicle Safety Log', location: 'Set' },
                    { id: 'SAFETY-08', description: 'Provide adequate hydration and rest areas for cast and crew.', priority: 'High', riskLevel: 'Medium', proof: 'Rest Area Photos', location: 'Set' },
                    { id: 'SAFETY-09', description: 'Secure the set from unauthorized access.', priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Set' },
                    { id: 'SAFETY-10', description: 'Comply with all local health and safety regulations.', priority: 'High', riskLevel: 'High', proof: 'Compliance Audit', location: 'Office' },
                ]
            },
            {
                title: "Post-Production Workflow",
                department: "Post-Production",
                frequency: "Phase-based",
                role: "Post-Production Supervisor",
                icon: <Scissors />,
                summary: "A workflow for managing footage, editing, VFX, sound design, and final delivery.",
                tasks: [
                    { id: 'POST-01', description: 'Ingest and back up all raw footage daily.', priority: 'High', riskLevel: 'High', proof: 'Backup Logs', location: 'Post-Production Facility' },
                    { id: 'POST-02', description: 'Generate and distribute dailies for review.', priority: 'High', riskLevel: 'Medium', proof: 'Dailies Distribution Log', location: 'System' },
                    { id: 'POST-03', description: 'Manage the editing workflow from assembly to final cut.', priority: 'High', riskLevel: 'High', proof: 'Edit Schedule', location: 'Editing Suite' },
                    { id: 'POST-04', description: 'Coordinate with VFX vendors, managing plates and delivery schedules.', priority: 'High', riskLevel: 'High', proof: 'VFX Tracker', location: 'System' },
                    { id: 'POST-05', description: 'Oversee sound design, mixing, and music scoring.', priority: 'High', riskLevel: 'High', proof: 'Sound Schedule', location: 'Sound Studio' },
                    { id: 'POST-06', description: 'Manage the color grading process.', priority: 'High', riskLevel: 'High', proof: 'Color Grade Schedule', location: 'DI Suite' },
                    { id: 'POST-07', description: 'Conduct a final QC of the master file before delivery.', priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'Post-Production Facility' },
                    { id: 'POST-08', description: 'Create all required deliverables for distributors (trailers, posters, etc.).', priority: 'High', riskLevel: 'High', proof: 'Deliverables List', location: 'Office' },
                    { id: 'POST-09', description: 'Archive the final project and all related assets securely.', priority: 'High', riskLevel: 'High', proof: 'Archive Log', location: 'System/LTO' },
                    { id: 'POST-10', description: 'Manage the post-production budget and vendor payments.', priority: 'High', riskLevel: 'High', proof: 'Post Budget Report', location: 'Office' },
                ]
            },
        ]
    },
    {
        id: 'ott_platform_pack',
        title: "OTT Platform Operations Pack",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A comprehensive toolkit for OTT platform operations, covering content ingestion, quality control, live streaming, and infrastructure management.",
        icon: <MonitorPlay />,
        whoIsItFor: ["OTT Platform Owners", "Heads of Content Operations", "Chief Technology Officers (CTOs)", "SRE & DevOps Leads"],
        sampleItems: [
            { text: "Ensure a flawless user experience with a robust content ingestion, transcoding, and QC workflow.", icon: <Video /> },
            { text: "Guarantee uptime during major events with a live streaming readiness and disaster recovery playbook.", icon: <Zap /> },
            { text: "Protect your platform with cybersecurity SOPs for DRM, access control, and vulnerability management.", icon: <Shield /> },
            { text: "Optimize performance with checklists for CDN configuration, cache management, and infrastructure monitoring.", icon: <Cloud /> },
            { text: "Stay compliant with a structured process for content rating, subtitling, and legal clearances.", icon: <FileCheck /> },
            { text: "Improve user engagement with a data-driven process for personalization, recommendations, and analytics.", icon: <BrainCircuit /> }
        ],
        previewScenario: {
            title: "Surviving a Live Sports Streaming Peak",
            description: "A major cricket match is expected to draw record concurrent viewers. This scenario shows how checklists prevent a platform crash.",
            tasks: [
                { id: 'LIVE-01', description: "The 'Live Streaming Readiness' SOP mandates a full load test simulating 150% of the expected traffic, identifying and fixing bottlenecks a week before the event.", sourceChecklist: "Live Streaming Readiness", priority: 'High' },
                { id: 'INFRA-04', description: "The 'Infrastructure & CDN' checklist ensures that auto-scaling policies are in place and the CDN is correctly configured to handle the massive load.", sourceChecklist: "Infrastructure & CDN Management", priority: 'High' },
                { id: 'MONITOR-01', description: "The 'Platform Monitoring' checklist establishes a 'war room' protocol for the event, with key engineers monitoring real-time dashboards for any performance degradation.", sourceChecklist: "Platform Monitoring & Alerting", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Digital Broadcasting & Tech Standards",
            standards: [
                { name: "DVB/ATSC Standards", description: "References principles from digital video broadcasting standards." },
                { name: "ISO 27001", description: "For information security management and data protection." },
                { name: "SRE Principles (Google)", description: "Based on Site Reliability Engineering best practices for platform stability." },
                { name: "NIST Cybersecurity Framework", description: "For managing cybersecurity risks." }
            ]
        },
        checklists: [
             {
                title: "Content Ingestion & QC",
                department: "Content Ops",
                frequency: "Per Asset",
                role: "Content Operator",
                icon: <Video />,
                summary: "A workflow for receiving, quality checking, and processing all video assets before they go live.",
                tasks: [
                    { id: 'CIQC-01', description: 'Verify incoming video files against the delivery specifications (format, bitrate, resolution).', priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'Ingestion Server' },
                    { id: 'CIQC-02', description: 'Run an automated QC check for video/audio errors (e.g., freezes, silence, corruption).', priority: 'High', riskLevel: 'High', proof: 'Automated QC Log', location: 'System' },
                    { id: 'CIQC-03', description: 'Check subtitle and audio language files for sync and accuracy.', priority: 'High', riskLevel: 'High', proof: 'Subtitle QC Report', location: 'System' },
                    { id: 'CIQC-04', description: 'Transcode the master file into all required adaptive bitrate (ABR) profiles.', priority: 'High', riskLevel: 'High', proof: 'Transcoding Job Log', location: 'System' },
                    { id: 'CIQC-05', description: 'Apply DRM (Digital Rights Management) encryption.', priority: 'High', riskLevel: 'High', proof: 'DRM Log', location: 'System' },
                    { id: 'CIQC-06', description: 'Ingest all metadata (title, description, cast, thumbnails).', priority: 'High', riskLevel: 'Medium', proof: 'Metadata Sheet', location: 'CMS' },
                    { id: 'CIQC-07', description: 'Perform a final spot-check of the content on a staging environment.', priority: 'High', riskLevel: 'High', proof: 'Staging QC Sign-off', location: 'System' },
                    { id: 'CIQC-08', description: 'Schedule the content for publishing in the Content Management System (CMS).', priority: 'High', riskLevel: 'Medium', proof: 'CMS Schedule', location: 'System' },
                    { id: 'CIQC-09', description: 'Archive the master file securely.', priority: 'High', riskLevel: 'High', proof: 'Archive Log', location: 'Storage' },
                    { id: 'CIQC-10', description: 'Update the content library and notify relevant teams.', priority: 'High', riskLevel: 'Medium', proof: 'Notification Email', location: 'System' },
                ]
            },
            {
                title: "Live Streaming Readiness",
                department: "Broadcast Ops/SRE",
                frequency: "Per Live Event",
                role: "Live Ops Engineer",
                icon: <Zap />,
                summary: "A pre-flight checklist for major live events to ensure platform stability.",
                tasks: [
                    { id: 'LIVE-01', description: 'Conduct a full load test on the streaming infrastructure before the event.', priority: 'High', riskLevel: 'High', proof: 'Load Test Report', location: 'Staging Environment' },
                    { id: 'LIVE-02', description: 'Verify primary and backup encoder and ingest paths.', priority: 'High', riskLevel: 'High', proof: 'Path Test Log', location: 'System' },
                    { id: 'LIVE-03', description: 'Set up a "war room" with key personnel for the duration of the event.', priority: 'High', riskLevel: 'High', proof: 'War Room Roster', location: 'Office' },
                    { id: 'LIVE-04', description: 'Confirm CDN configuration and purge any old cache.', priority: 'High', riskLevel: 'High', proof: 'CDN Config Screenshot', location: 'System' },
                    { id: 'LIVE-05', description: 'Have a pre-defined communication plan for any service disruptions.', priority: 'High', riskLevel: 'High', proof: 'Communication Plan', location: 'Office' },
                    { id: 'LIVE-06', description: 'Test failover mechanisms for all critical components.', priority: 'High', riskLevel: 'High', proof: 'Failover Drill Report', location: 'System' },
                    { id: 'LIVE-07', description: 'Set up real-time monitoring dashboards for key metrics (rebuffering, latency, etc.).', priority: 'High', riskLevel: 'High', proof: 'Dashboard Links', location: 'System' },
                    { id: 'LIVE-08', description: 'Brief all on-call staff on their roles and responsibilities.', priority: 'High', riskLevel: 'High', proof: 'Briefing Notes', location: 'Office' },
                    { id: 'LIVE-09', description: 'Ensure sufficient cloud capacity and that auto-scaling is enabled.', priority: 'High', riskLevel: 'High', proof: 'Cloud Console Screenshot', location: 'System' },
                    { id: 'LIVE-10', description: 'Conduct a post-event review to analyze performance and identify improvements.', priority: 'High', riskLevel: 'Medium', proof: 'Post-Event Review Report', location: 'Office' },
                ]
            },
            {
                title: "Cybersecurity & DRM",
                department: "Security",
                frequency: "Quarterly",
                role: "Security Engineer",
                icon: <Shield />,
                summary: "Regular audits of security posture, including DRM, access control, and vulnerability management.",
                tasks: [
                    { id: 'CYBER-01', description: 'Conduct a quarterly vulnerability scan of the entire platform.', priority: 'High', riskLevel: 'High', proof: 'Vulnerability Scan Report', location: 'System' },
                    { id: 'CYBER-02', description: 'Review user access controls and enforce the principle of least privilege.', priority: 'High', riskLevel: 'High', proof: 'Access Review Log', location: 'System' },
                    { id: 'CYBER-03', description: 'Verify that DRM keys are securely stored and managed.', priority: 'High', riskLevel: 'High', proof: 'DRM Key Management Policy', location: 'System' },
                    { id: 'CYBER-04', description: 'Perform a penetration test at least annually.', priority: 'High', riskLevel: 'High', proof: 'Pen Test Report', location: 'Office' },
                    { id: 'CYBER-05', description: 'Review and update the incident response plan.', priority: 'High', riskLevel: 'High', proof: 'Updated IR Plan', location: 'Office' },
                    { id: 'CYBER-06', description: 'Ensure all sensitive data is encrypted at rest and in transit.', priority: 'High', riskLevel: 'High', proof: 'Encryption Audit Report', location: 'System' },
                    { id: 'CYBER-07', description: 'Monitor for and respond to security alerts from SIEM/monitoring tools.', priority: 'High', riskLevel: 'High', proof: 'Alert Triage Log', location: 'SIEM' },
                    { id: 'CYBER-08', description: 'Provide security awareness training to all employees.', priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
                    { id: 'CYBER-09', description: 'Assess the security of all third-party integrations and vendors.', priority: 'High', riskLevel: 'High', proof: 'Vendor Security Assessment', location: 'Office' },
                    { id: 'CYBER-10', description: 'Stay updated on the latest security threats and vulnerabilities.', priority: 'High', riskLevel: 'High', proof: 'Threat Intelligence Subscription', location: 'System' },
                ]
            },
            {
                title: "Infrastructure & CDN Management",
                department: "DevOps/SRE",
                frequency: "Weekly",
                role: "SRE",
                icon: <Cloud />,
                summary: "Checklists for managing cloud infrastructure, CDN configurations, and ensuring platform scalability.",
                tasks: [
                    { id: 'INFRA-01', description: 'Review cloud costs and identify optimization opportunities.', priority: 'High', riskLevel: 'Medium', proof: 'Cost Analysis Report', location: 'Cloud Console' },
                    { id: 'INFRA-02', description: 'Check health and performance of all production servers and databases.', priority: 'High', riskLevel: 'High', proof: 'Monitoring Dashboard', location: 'System' },
                    { id: 'INFRA-03', description: 'Review and tune auto-scaling policies.', priority: 'High', riskLevel: 'High', proof: 'Auto-scaling Config', location: 'Cloud Console' },
                    { id: 'INFRA-04', description: 'Audit CDN cache-hit ratio and configuration.', priority: 'High', riskLevel: 'High', proof: 'CDN Analytics', location: 'CDN Provider' },
                    { id: 'INFRA-05', description: 'Apply infrastructure-as-code (IaC) principles for all changes.', priority: 'High', riskLevel: 'High', proof: 'Terraform/CloudFormation Code', location: 'Git Repo' },
                    { id: 'INFRA-06', description: 'Test backup and restore procedures for critical infrastructure.', priority: 'High', riskLevel: 'High', proof: 'Restore Test Log', location: 'Test Environment' },
                    { id: 'INFRA-07', description: 'Update system documentation after any infrastructure changes.', priority: 'High', riskLevel: 'Medium', proof: 'Updated Documentation', location: 'Wiki' },
                    { id: 'INFRA-08', description: 'Plan for capacity and future growth.', priority: 'High', riskLevel: 'High', proof: 'Capacity Plan', location: 'Office' },
                    { id: 'INFRA-09', description: 'Manage DNS and SSL certificate renewals.', priority: 'High', riskLevel: 'High', proof: 'Certificate Expiry Tracker', location: 'System' },
                    { id: 'INFRA-10', description: 'Implement a blue-green or canary deployment strategy for updates.', priority: 'High', riskLevel: 'High', proof: 'Deployment Scripts', location: 'CI/CD System' },
                ]
            },
        ]
    },
    {
        id: 'sports_clubs_stadium_operations_pack',
        title: "Sports Clubs & Stadium Operations Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A comprehensive operational toolkit for sports clubs, gyms, and stadium managers to ensure safety, compliance, and an excellent member experience.",
        icon: <Trophy />,
        whoIsItFor: ["Sports Club GMs", "Stadium Managers", "Heads of Operations", "Gym Owners"],
        sampleItems: [
            { text: "Ensure venue safety with crowd management, ticketing, and emergency evacuation SOPs.", icon: <Users /> },
            { text: "Maintain world-class turf and pitches with a structured ground maintenance schedule.", icon: <Sprout /> },
            { text: "Prevent accidents and liability with daily inspections of gym and sports equipment.", icon: <Dumbbell /> },
            { text: "Guarantee a safe environment with fire safety audits and medical emergency response plans.", icon: <Siren /> },
            { text: "Protect members with robust hygiene protocols for pools, changing rooms, and F&B areas.", icon: <Sparkles /> },
            { text: "Manage your team effectively with checklists for staff training, scheduling, and performance.", icon: <ClipboardList /> }
        ],
        previewScenario: {
            title: "Handling a Medical Emergency During a Match",
            description: "A spectator collapses in the stands during a crowded match. This scenario shows how checklists ensure a rapid, coordinated response.",
            tasks: [
                { id: 'CROWD-04', description: "The 'Crowd Management' SOP ensures stewards are trained to spot medical issues and use radios to immediately alert the central control room.", sourceChecklist: "Crowd Management & Safety", priority: 'High' },
                { id: 'MED-EMER-01', description: "The 'Medical Emergency Plan' is activated, dispatching the on-site medical team to the exact location within minutes.", sourceChecklist: "Medical Emergency Response Plan", priority: 'High' },
                { id: 'SEC-EMER-03', description: "The 'Security & Emergency' checklist ensures that security personnel clear a path for paramedics to access the patient and transport them to the ambulance, all without causing a panic.", sourceChecklist: "Security & Emergency Procedures", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with International Sports Safety Standards",
            standards: [
                { name: "FIFA Stadium Safety Regulations", description: "Guidelines for football stadium safety and security." },
                { name: "ICC Venue Standards", description: "Standards for cricket grounds and facilities." },
                { name: "Sports Ground Safety Authority (UK)", description: "Best practices for spectator safety at sports grounds." },
                { name: "OSHA", description: "General guidelines for worker and public safety." }
            ]
        },
        checklists: [
             {
                title: "Crowd Management & Safety",
                department: "Security/Operations",
                frequency: "Per Event",
                role: "Head of Security",
                icon: <Users />,
                summary: "SOPs for ticketing, entry/exit flow, stewarding, and handling overcrowding.",
                tasks: [
                    { id: 'CROWD-01', description: 'Develop a crowd management plan based on expected attendance.', priority: 'High', riskLevel: 'High', proof: 'Crowd Management Plan', location: 'Office' },
                    { id: 'CROWD-02', description: 'Brief all stewards and security staff on their positions and responsibilities.', priority: 'High', riskLevel: 'High', proof: 'Briefing Log', location: 'Briefing Room' },
                    { id: 'CROWD-03', description: 'Ensure ticketing and entry systems are working to prevent long queues.', priority: 'High', riskLevel: 'High', proof: 'System Test Report', location: 'Entry Gates' },
                    { id: 'CROWD-04', description: 'Monitor crowd density and flow via CCTV and on-ground staff.', priority: 'High', riskLevel: 'High', proof: 'CCTV Monitoring Log', location: 'Control Room' },
                    { id: 'CROWD-05', description: 'Have a clear protocol for handling drunk or disorderly spectators.', priority: 'High', riskLevel: 'High', proof: 'Ejection SOP', location: 'Security Office' },
                    { id: 'CROWD-06', description: 'Ensure clear signage for seating areas, amenities, and exits.', priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Venue' },
                    { id: 'CROWD-07', description: 'Manage vehicle and pedestrian traffic outside the venue.', priority: 'High', riskLevel: 'High', proof: 'Traffic Management Plan', location: 'Exterior' },
                    { id: 'CROWD-08', description: 'Have a lost child protocol in place.', priority: 'High', riskLevel: 'High', proof: 'Lost Child SOP', location: 'Security Office' },
                    { id: 'CROWD-09', description: 'Plan for phased exit of the crowd after the event.', priority: 'High', riskLevel: 'High', proof: 'Exit Plan', location: 'Office' },
                    { id: 'CROWD-10', description: 'Debrief after each event to identify and improve crowd management issues.', priority: 'High', riskLevel: 'Medium', proof: 'Debrief Report', location: 'Office' },
                ]
            },
            {
                title: "Ground & Pitch Maintenance",
                department: "Groundskeeping",
                frequency: "Daily/Weekly",
                role: "Head Groundskeeper",
                icon: <Sprout />,
                summary: "Schedules for mowing, irrigation, pest control, and pre-match pitch preparation.",
                tasks: [
                    { id: 'GROUND-01', description: 'Perform daily inspection of the pitch/turf for any damage or disease.', priority: 'High', riskLevel: 'High', proof: 'Daily Inspection Log', location: 'Pitch/Field' },
                    { id: 'GROUND-02', description: 'Follow a regular mowing and rolling schedule.', priority: 'High', riskLevel: 'Medium', proof: 'Mowing Log', location: 'Pitch/Field' },
                    { id: 'GROUND-03', description: 'Manage irrigation schedule based on weather and soil moisture.', priority: 'High', riskLevel: 'Medium', proof: 'Irrigation Log', location: 'System' },
                    { id: 'GROUND-04', description: 'Apply fertilizers and pesticides as per the schedule.', priority: 'High', riskLevel: 'High', proof: 'Application Log', location: 'Pitch/Field' },
                    { id: 'GROUND-05', description: 'Prepare the pitch according to the specific requirements of the sport (e.g., cricket pitch preparation).', priority: 'High', riskLevel: 'High', proof: 'Pitch Prep Report', location: 'Pitch/Field' },
                    { id: 'GROUND-06', description: 'Mark the field of play accurately.', priority: 'High', riskLevel: 'High', proof: 'Marking Check', location: 'Pitch/Field' },
                    { id: 'GROUND-07', description: 'Maintain all groundskeeping equipment.', priority: 'High', riskLevel: 'Medium', proof: 'Equipment Maintenance Log', location: 'Workshop' },
                    { id: 'GROUND-08', description: 'Cover the pitch during rain.', priority: 'High', riskLevel: 'High', proof: 'Covering Log', location: 'Pitch/Field' },
                    { id: 'GROUND-09', description: 'Conduct soil testing periodically.', priority: 'High', riskLevel: 'Medium', proof: 'Soil Test Report', location: 'Lab' },
                    { id: 'GROUND-10', description: 'Manage lighting for evening matches.', priority: 'High', riskLevel: 'High', proof: 'Lighting Test Log', location: 'Venue' },
                ]
            },
            {
                title: "Gym & Equipment Safety",
                department: "Fitness",
                frequency: "Daily",
                role: "Gym Manager",
                icon: <Dumbbell />,
                summary: "Daily checks for equipment stability, cable wear, and hygiene.",
                tasks: [
                    { id: 'GYM-01', description: 'Perform a daily visual inspection of all gym equipment for damage or wear.', priority: 'High', riskLevel: 'High', proof: 'Daily Inspection Log', location: 'Gym Floor' },
                    { id: 'GYM-02', description: 'Check all cables, belts, and pulleys on weight machines.', priority: 'High', riskLevel: 'High', proof: 'Cable Inspection Log', location: 'Gym Floor' },
                    { id: 'GYM-03', description: 'Ensure all free weights are stored correctly and not left as trip hazards.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Gym Floor' },
                    { id: 'GYM-04', description: 'Wipe down and sanitize all equipment regularly.', priority: 'High', riskLevel: 'Medium', proof: 'Sanitization Log', location: 'Gym Floor' },
                    { id: 'GYM-05', description: 'Check that safety features on treadmills and other cardio machines are working.', priority: 'High', riskLevel: 'High', proof: 'Safety Stop Test', location: 'Gym Floor' },
                    { id: 'GYM-06', description: 'Ensure first-aid kits and AEDs are accessible and functional.', priority: 'High', riskLevel: 'High', proof: 'Emergency Kit Log', location: 'Gym' },
                    { id: 'GYM-07', description: 'Conduct preventive maintenance on all equipment as per manufacturer schedule.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Records', location: 'Office' },
                    { id: 'GYM-08', description: 'Provide clear instructions and warnings on all equipment.', priority: 'High', riskLevel: 'Medium', proof: 'Signage Audit', location: 'Gym Floor' },
                    { id: 'GYM-09', description: 'Train staff to assist members and spot incorrect usage of equipment.', priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Office' },
                    { id: 'GYM-10', description: 'Have a clear procedure for handling injuries or medical emergencies.', priority: 'High', riskLevel: 'High', proof: 'Emergency SOP', location: 'Office' },
                ]
            },
             {
                title: "Pool & Spa Hygiene",
                department: "Recreation",
                frequency: "Daily",
                role: "Pool Supervisor",
                icon: <Waves />,
                summary: "Daily testing of water quality, safety equipment checks, and hygiene protocols for changing rooms.",
                tasks: [
                    { id: 'POOL-HYGIENE-01', description: 'Test and log pool water chlorine and pH levels at least 3 times a day.', priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'POOL-HYGIENE-02', description: 'Inspect and clean changing rooms and showers hourly.', priority: 'High', riskLevel: 'Medium', proof: 'Changing Room Log', location: 'Changing Rooms' },
                    { id: 'POOL-HY-03', description: 'Check all rescue equipment (lifebuoys, first-aid kits) is in place.', priority: 'High', riskLevel: 'High', proof: 'Rescue Equipment Log', location: 'Poolside' },
                    { id: 'POOL-HYGIENE-04', description: 'Ensure lifeguards are on duty and alert.', priority: 'High', riskLevel: 'High', proof: 'Lifeguard Roster', location: 'Poolside' },
                    { id: 'POOL-HYGIENE-05', description: 'Clean and backwash pool filters as per schedule.', priority: 'High', riskLevel: 'Medium', proof: 'Filter Maintenance Log', location: 'Pump Room' },
                    { id: 'POOL-HYGIENE-06', description: 'Enforce shower-before-entry rules.', priority: 'High', riskLevel: 'Medium', proof: 'Signage and Staff Monitoring', location: 'Pool Entrance' },
                    { id: 'POOL-HYGIENE-07', description: 'Check for any slip hazards around the pool deck.', priority: 'High', riskLevel: 'High', proof: 'Deck Inspection Log', location: 'Pool Deck' },
                    { id: 'POOL-HYGIENE-08', description: 'Maintain water temperature in heated pools and spas.', priority: 'High', riskLevel: 'Medium', proof: 'Temperature Log', location: 'Spa' },
                    { id: 'POOL-HYGIENE-09', description: 'Manage chemical storage and handling safely.', priority: 'High', riskLevel: 'High', proof: 'Chemical Store Audit', location: 'Chemical Store' },
                    { id: 'POOL-HYGIENE-10', description: 'Have a clear procedure for responding to a water contamination incident.', priority: 'High', riskLevel: 'High', proof: 'Contamination SOP', location: 'Office' },
                ]
            },
        ]
    },
    {
        id: 'cinema_operations_pack',
        title: "Cinema & Multiplex Operations Pack",
        priceUSD: 149.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A complete operational pack for cinema managers to ensure a safe, clean, and high-quality movie-going experience.",
        icon: <Popcorn />,
        whoIsItFor: ["Cinema Owners", "Multiplex Managers", "Heads of Operations", "F&B Managers (Cinema)"],
        sampleItems: [
            { text: "Guarantee a perfect show with pre-screening checklists for projection, sound, and lighting.", icon: <Projector /> },
            { text: "Prevent fire tragedies with rigorous audits for emergency exits, fire alarms, and staff evacuation training.", icon: <Siren /> },
            { text: "Serve safe and quality food with F&B concession stand hygiene and inventory management SOPs.", icon: <Utensils /> },
            { text: "Improve profitability with checklists for ticketing, cash handling, and daily sales reconciliation.", icon: <Ticket /> },
            { text: "Enhance the guest experience with protocols for auditorium cleaning, seat maintenance, and restroom hygiene.", icon: <Sparkles /> },
            { text: "Manage your facility effectively with SOPs for housekeeping, security, and preventive maintenance.", icon: <Building /> }
        ],
        previewScenario: {
            title: "Preventing a Fire Tragedy",
            description: "Inspired by the Uphaar Cinema fire, this scenario shows how checklists prevent the chain of failures that lead to such a disaster.",
            tasks: [
                { id: 'FIRE-CIN-01', description: "The 'Fire Safety' checklist mandates a daily physical check to ensure all emergency exits are unlocked and completely unobstructed, preventing the main cause of the Uphaar tragedy.", sourceChecklist: "Fire Safety & Evacuation", priority: 'High' },
                { id: 'PROJ-SOUND-04', description: "The 'Projection & Sound' checklist includes testing the Public Address (PA) system before the first show, ensuring emergency announcements can be made.", sourceChecklist: "Projection & Sound QC", priority: 'High' },
                { id: 'STAFF-TRAIN-02', description: "The 'Staff Training' SOP requires quarterly evacuation drills, ensuring staff know how to guide patrons to safety instead of panicking.", sourceChecklist: "Staff Training & Grooming", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Cinema Safety & Operational Standards",
            standards: [
                { name: "National Cinema Regulations", description: "Compliance with local laws for public entertainment venues." },
                { name: "Fire Safety Act", description: "Adherence to fire prevention and life safety codes." },
                { name: "FSSAI (for F&B)", description: "Food safety standards for concession stands." },
                { name: "THX/Dolby Standards", description: "References principles for audio-visual quality." }
            ]
        },
        checklists: [
             {
                title: "Projection & Sound QC",
                department: "Technical",
                frequency: "Per Show",
                role: "Projectionist",
                icon: <Projector />,
                summary: "Pre-show checks for picture focus, sound levels, and format compatibility.",
                tasks: [
                    { id: 'PROJ-SOUND-01', description: 'Check projector for correct focus and brightness.', priority: 'High', riskLevel: 'Medium', proof: 'QC Log', location: 'Projection Room' },
                    { id: 'PROJ-SOUND-02', description: 'Test audio system for correct channel separation and volume levels (as per Dolby/THX spec).', priority: 'High', riskLevel: 'Medium', proof: 'Sound Check Log', location: 'Auditorium' },
                    { id: 'PROJ-SOUND-03', description: 'Verify the correct film version and language is loaded.', priority: 'High', riskLevel: 'High', proof: 'Playlist Check', location: 'System' },
                    { id: 'PROJ-SOUND-04', description: 'Test the Public Address (PA) system for emergency announcements.', priority: 'High', riskLevel: 'High', proof: 'PA System Test', location: 'Projection Room' },
                    { id: 'PROJ-SOUND-05', description: 'Clean projector lens and port glass daily.', priority: 'High', riskLevel: 'Low', proof: 'Cleaning Log', location: 'Projection Room' },
                    { id: 'PROJ-SOUND-06', description: 'Log lamp hours and schedule replacements.', priority: 'High', riskLevel: 'Medium', proof: 'Lamp Hour Log', location: 'Projection Room' },
                    { id: 'PROJ-SOUND-07', description: 'Check auditorium lighting controls (house lights, emergency lights).', priority: 'High', riskLevel: 'High', proof: 'Lighting Control Check', location: 'Projection Room' },
                    { id: 'PROJ-SOUND-08', description: 'Ensure subtitles are enabled and correctly displayed for relevant shows.', priority: 'High', riskLevel: 'Medium', proof: 'Subtitle Check', location: 'Auditorium' },
                    { id: 'PROJ-SOUND-09', description: 'Monitor the show for any technical issues.', priority: 'High', riskLevel: 'High', proof: 'Show Monitoring Log', location: 'Projection Room' },
                    { id: 'PROJ-SOUND-10', description: 'Report any technical faults immediately.', priority: 'High', riskLevel: 'High', proof: 'Fault Report', location: 'System' },
                ]
            },
            {
                title: "Fire Safety & Evacuation",
                department: "Safety/Security",
                frequency: "Daily/Quarterly",
                role: "Duty Manager",
                icon: <Siren />,
                summary: "Daily exit checks, alarm tests, and quarterly evacuation drills.",
                tasks: [
                    { id: 'FIRE-CIN-01', description: 'Ensure all emergency exits are unlocked and unobstructed.', priority: 'High', riskLevel: 'High', proof: 'Exit Inspection Log', location: 'Auditoriums/Lobby' },
                    { id: 'FIRE-CIN-02', description: 'Test fire alarms and smoke detectors weekly.', priority: 'High', riskLevel: 'High', proof: 'Alarm Test Log', location: 'Control Panel' },
                    { id: 'FIRE-CIN-03', description: 'Conduct a staff evacuation drill quarterly.', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Venue' },
                    { id: 'FIRE-CIN-04', description: 'Check all fire extinguishers for pressure and accessibility monthly.', priority: 'High', riskLevel: 'High', proof: 'Extinguisher Log', location: 'Venue' },
                    { id: 'FIRE-CIN-05', description: 'Ensure evacuation maps are displayed and accurate.', priority: 'High', riskLevel: 'High', proof: 'Map Audit', location: 'Lobby/Auditoriums' },
                    { id: 'FIRE-CIN-06', description: 'Test emergency lighting daily.', priority: 'High', riskLevel: 'High', proof: 'Lighting Test Log', location: 'Venue' },
                    { id: 'FIRE-CIN-07', description: 'Train staff on their roles during an evacuation.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'FIRE-CIN-08', description: 'Keep fire lanes and access for fire trucks clear.', priority: 'High', riskLevel: 'High', proof: 'Exterior Inspection', location: 'Outside Venue' },
                    { id: 'FIRE-CIN-09', description: 'Inspect kitchen fire suppression systems monthly.', priority: 'High', riskLevel: 'High', proof: 'Suppression System Log', location: 'Kitchen' },
                    { id: 'FIRE-CIN-10', description: 'Maintain all fire safety records for regulatory audits.', priority: 'High', riskLevel: 'High', proof: 'Fire Safety File', location: 'Office' },
                ]
            },
            {
                title: "F&B Concession Hygiene",
                department: "F&B",
                frequency: "Daily",
                role: "F&B Supervisor",
                icon: <Utensils />,
                summary: "HACCP-based checks for food temperature, expiry dates, and cleanliness of service areas.",
                tasks: [
                    { id: 'FNB-CIN-01', description: 'Log temperatures of all food holding units (hot and cold).', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Concession Stand' },
                    { id: 'FNB-CIN-02', description: 'Check expiry dates of all food products and ingredients.', priority: 'High', riskLevel: 'High', proof: 'Expiry Date Sweep', location: 'Concession Stand/Storage' },
                    { id: 'FNB-CIN-03', description: 'Clean and sanitize all food contact surfaces hourly.', priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Concession Stand' },
                    { id: 'FNB-CIN-04', description: 'Ensure staff follow handwashing and glove usage policies.', priority: 'High', riskLevel: 'High', proof: 'Hygiene Audit', location: 'Concession Stand' },
                    { id: 'FNB-CIN-05', description: 'Manage waste disposal to prevent pests and odors.', priority: 'High', riskLevel: 'Medium', proof: 'Waste Log', location: 'Waste Area' },
                    { id: 'FNB-CIN-06', description: 'Check popcorn machines, soda fountains, and other equipment for cleanliness.', priority: 'High', riskLevel: 'Medium', proof: 'Equipment Cleaning Log', location: 'Concession Stand' },
                    { id: 'FNB-CIN-07', description: 'Follow FIFO principles for all inventory.', priority: 'High', riskLevel: 'High', proof: 'Stock Rotation Audit', location: 'Storage' },
                    { id: 'FNB-CIN-08', description: 'Calibrate food thermometers weekly.', priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Concession Stand' },
                    { id: 'FNB-CIN-09', description: 'Maintain a clean and organized storage area.', priority: 'High', riskLevel: 'Medium', proof: 'Storage Inspection', location: 'Storage' },
                    { id: 'FNB-CIN-10', description: 'Train all F&B staff on food safety standards.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                ]
            },
            {
                title: "Ticketing & Cash Handling",
                department: "Box Office/Finance",
                frequency: "Daily",
                role: "Box Office Manager",
                icon: <Ticket />,
                summary: "Daily reconciliation of ticket sales, cash management, and fraud prevention.",
                tasks: [
                    { id: 'TICK-CASH-01', description: 'Reconcile daily ticket sales against system reports.', priority: 'High', riskLevel: 'High', proof: 'Sales Reconciliation Report', location: 'Box Office' },
                    { id: 'TICK-CASH-02', description: 'Reconcile cash drawers at the end of each shift.', priority: 'High', riskLevel: 'High', proof: 'Cash Reconciliation Form', location: 'Box Office' },
                    { id: 'TICK-CASH-03', description: 'Use counterfeit detection for all large currency notes.', priority: 'High', riskLevel: 'High', proof: 'Counterfeit Check', location: 'Box Office' },
                    { id: 'TICK-CASH-04', description: 'Securely deposit daily cash earnings.', priority: 'High', riskLevel: 'High', proof: 'Bank Deposit Slip', location: 'Office' },
                    { id: 'TICK-CASH-05', description: 'Require manager approval for all refunds and voids.', priority: 'High', riskLevel: 'High', proof: 'Refund/Void Log', location: 'Box Office' },
                    { id: 'TICK-CASH-06', description: 'Monitor online ticketing for fraudulent activity.', priority: 'High', riskLevel: 'High', proof: 'Fraud Monitoring Report', location: 'System' },
                    { id: 'TICK-CASH-07', description: 'Ensure pricing is correctly configured in the ticketing system.', priority: 'High', riskLevel: 'High', proof: 'Pricing Audit', location: 'System' },
                    { id: 'TICK-CASH-08', description: 'Track and reconcile complimentary tickets and vouchers.', priority: 'High', riskLevel: 'Medium', proof: 'Voucher Log', location: 'System' },
                    { id: 'TICK-CASH-09', description: 'Train staff on all cash handling and ticketing procedures.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'Office' },
                    { id: 'TICK-CASH-10', description: 'Ensure PCI DSS compliance for all card transactions.', priority: 'High', riskLevel: 'High', proof: 'PCI Compliance Certificate', location: 'Office' },
                ]
            },
            {
                title: "Auditorium Cleaning & Maintenance",
                department: "Housekeeping/Facilities",
                frequency: "Per Show",
                role: "Housekeeping Supervisor",
                icon: <Sparkles />,
                summary: "A checklist for cleaning and preparing auditoriums between shows.",
                tasks: [
                    { id: 'AUD-CLEAN-01', description: 'Clean floors of all food and drink spillage after every show.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Auditorium' },
                    { id: 'AUD-CLEAN-02', description: 'Wipe down all seats and armrests.', priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Auditorium' },
                    { id: 'AUD-CLEAN-03', description: 'Collect all trash and lost property.', priority: 'High', riskLevel: 'Low', proof: 'Lost & Found Log', location: 'Auditorium' },
                    { id: 'AUD-CLEAN-04', description: 'Check for any damaged seats or carpet and report for repair.', priority: 'High', riskLevel: 'Medium', proof: 'Damage Report', location: 'Auditorium' },
                    { id: 'AUD-CLEAN-05', description: 'Ensure 3D glasses (if any) are collected and sanitized.', priority: 'High', riskLevel: 'Medium', proof: 'Sanitization Log', location: 'Exit' },
                    { id: 'AUD-CLEAN-06', description: 'Check and clean auditorium restrooms.', priority: 'High', riskLevel: 'Medium', proof: 'Restroom Cleaning Log', location: 'Restrooms' },
                    { id: 'AUD-CLEAN-07', description: 'Verify that the auditorium is at a comfortable temperature.', priority: 'High', riskLevel: 'Low', proof: 'Temperature Check', location: 'Auditorium' },
                    { id: 'AUD-CLEAN-08', description: 'Deep clean all auditoriums weekly.', priority: 'High', riskLevel: 'Medium', proof: 'Deep Clean Schedule', location: 'Office' },
                    { id: 'AUD-CLEAN-09', description: 'Ensure cleaning supplies are stocked.', priority: 'High', riskLevel: 'Low', proof: 'Supply Inventory', location: 'Janitor Closet' },
                    { id: 'AUD-CLEAN-10', 'description': 'Supervisor to sign off on cleanliness before the next show.', priority: 'High', riskLevel: 'Medium', proof: 'Supervisor Sign-off', location: 'Auditorium' },
                ]
            },
        ]
    },
    {
        id: 'theme_park_ops_pack',
        title: "Theme Park Operations Pack",
        priceUSD: 199.99,
        priceINR: 7999,
        paymentId: 'pl_RMnYKoxjfq5XCx',
        category: "Entertainment & Events",
        description: "A safety-critical toolkit for theme park and amusement park operators, covering ride safety, crowd management, and emergency response.",
        icon: <FerrisWheel />,
        whoIsItFor: ["Theme Park GMs", "Heads of Operations", "Ride Safety Managers", "Security Directors"],
        sampleItems: [
            { text: "Prevent ride-related accidents with daily, weekly, and monthly ride inspection checklists based on manufacturer guidelines.", icon: <Wrench /> },
            { text: "Ensure guest safety with comprehensive crowd management, queuing, and access control SOPs.", icon: <Users /> },
            { text: "Be prepared for any crisis with emergency response plans for medical incidents, power failures, and ride stoppages.", icon: <Siren /> },
            { text: "Protect children with a robust Lost Child Protocol and designated safe zones.", icon: <HelpingHand /> },
            { text: "Maintain a safe and beautiful park with checklists for park-wide landscaping, housekeeping, and infrastructure safety.", icon: '🌳' },
            { text: "Guarantee food safety across all park outlets with FSSAI/HACCP-aligned hygiene and food handling checklists.", icon: <Utensils /> }
        ],
        previewScenario: {
            title: "Responding to a Ride Stoppage",
            description: "A roller coaster stops mid-ride due to a minor sensor malfunction, leaving guests stranded 50 feet in the air. This scenario shows how checklists ensure a safe and professional response.",
            tasks: [
                { id: 'RIDE-SAFETY-07', description: "The 'Ride Safety' SOP immediately triggers the pre-defined ride evacuation protocol. The ride operator makes a calm announcement to the stranded guests.", sourceChecklist: "Ride Safety & Maintenance", priority: 'High' },
                { id: 'EMER-RESP-03', description: "The 'Emergency Response' team is dispatched. Since this is a trained-for scenario, they arrive with the necessary harnesses and equipment for a safe evacuation.", sourceChecklist: "Emergency Response & Evacuation", priority: 'High' },
                { id: 'GUEST-SVC-05', description: "The 'Guest Services' checklist provides a clear protocol for handling the evacuated guests, including providing water, a place to rest, and complimentary park passes to turn a negative experience into a positive one.", sourceChecklist: "Guest Services & Complaint Handling", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Amusement Park Safety Standards",
            standards: [
                { name: "ASTM F24", description: "International standards for amusement rides and devices." },
                { name: "IAAPA Standards", description: "Best practices from the International Association of Amusement Parks and Attractions." },
                { name: "ISO 17842", description: "Safety requirements for amusement rides and devices." },
                { name: "Local Safety Regulations", description: "Compliance with all national and local laws for public amusement venues." }
            ]
        },
        checklists: [
             {
                title: "Ride Safety & Maintenance",
                department: "Maintenance/Operations",
                frequency: "Daily/Scheduled",
                role: "Ride Engineer",
                icon: <Wrench />,
                summary: "Daily pre-opening ride inspections, scheduled preventive maintenance, and operator training.",
                tasks: [
                    { id: 'RIDE-SAFETY-01', description: 'Perform a daily pre-opening operational test of each ride.', priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Each Ride' },
                    { id: 'RIDE-SAFETY-02', description: 'Inspect all safety harnesses, lap bars, and restraints.', priority: 'High', riskLevel: 'High', proof: 'Restraint Inspection Log', location: 'Each Ride' },
                    { id: 'RIDE-SAFETY-03', description: 'Check all emergency stop buttons and systems.', priority: 'High', riskLevel: 'High', proof: 'E-Stop Test Log', location: 'Each Ride' },
                    { id: 'RIDE-SAFETY-04', description: 'Follow a scheduled preventive maintenance plan based on manufacturer guidelines.', priority: 'High', riskLevel: 'High', proof: 'PM Records', location: 'Workshop' },
                    { id: 'RIDE-SAFETY-05', description: 'Log all maintenance activities, repairs, and part replacements.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Logbook', location: 'System' },
                    { id: 'RIDE-SAFETY-06', description: 'Train and certify all ride operators.', priority: 'High', riskLevel: 'High', proof: 'Training Certificates', location: 'HR' },
                    { id: 'RIDE-SAFETY-07', description: 'Have a documented procedure for ride evacuation.', priority: 'High', riskLevel: 'High', proof: 'Evacuation SOP', location: 'Office' },
                    { id: 'RIDE-SAFETY-08', description: 'Conduct non-destructive testing (NDT) on critical components annually.', priority: 'High', riskLevel: 'High', proof: 'NDT Report', location: 'Office' },
                    { id: 'RIDE-SAFETY-09', description: 'Lock out and tag out any ride that is undergoing maintenance.', priority: 'High', riskLevel: 'High', proof: 'LOTO Log', location: 'Ride Control Panel' },
                    { id: 'RIDE-SAFETY-10', description: 'Review ride incident reports to identify trends and potential issues.', priority: 'High', riskLevel: 'High', proof: 'Incident Analysis Report', location: 'Office' },
                ]
            },
            {
                title: "Emergency Response & Evacuation",
                department: "Safety/Security",
                frequency: "Quarterly",
                role: "Emergency Commander",
                icon: <Siren />,
                summary: "Drills for various emergencies (fire, power failure, ride stoppage) and coordination with local services.",
                tasks: [
                    { id: 'EMER-RESP-01', description: 'Conduct quarterly mock drills for different emergency scenarios.', priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Park-wide' },
                    { id: 'EMER-RESP-02', description: 'Ensure a clear chain of command is established for any emergency.', priority: 'High', riskLevel: 'High', proof: 'Emergency Command Structure', location: 'Office' },
                    { id: 'EMER-RESP-03', description: 'Have a trained first-response team on-site at all times.', priority: 'High', riskLevel: 'High', proof: 'Team Roster & Certifications', location: 'First Aid Station' },
                    { id: 'EMER-RESP-04', description: 'Maintain clear and accessible evacuation routes and assembly points.', priority: 'High', riskLevel: 'High', proof: 'Evacuation Map', location: 'Park-wide' },
                    { id: 'EMER-RESP-05', description: 'Test park-wide public address and alarm systems weekly.', priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'Control Room' },
                    { id: 'EMER-RESP-06', description: 'Coordinate with local fire, police, and medical services.', priority: 'High', riskLevel: 'High', proof: 'Coordination Meeting Minutes', location: 'Office' },
                    { id: 'EMER-RESP-07', description: 'Have backup power for all critical systems.', priority: 'High', riskLevel: 'High', proof: 'Generator Test Log', location: 'Utility Rooms' },
                    { id: 'EMER-RESP-08', description: 'Provide emergency communication devices (radios) to all key staff.', priority: 'High', riskLevel: 'High', proof: 'Radio Inventory', location: 'Security' },
                    { id: 'EMER-RESP-09', description: 'Train all staff on their roles during an emergency.', priority: 'High', riskLevel: 'High', proof: 'Training Records', location: 'HR' },
                    { id: 'EMER-RESP-10', description: 'Review and update the emergency response plan annually.', priority: 'High', riskLevel: 'High', proof: 'Updated Plan Document', location: 'Office' },
                ]
            },
            {
                title: "Guest Services & Complaint Handling",
                department: "Guest Services",
                frequency: "Daily",
                role: "Guest Services Manager",
                icon: <HelpingHand />,
                summary: "Protocols for managing lost children, handling guest complaints, and providing accessibility services.",
                tasks: [
                    { id: 'GUEST-SVC-01', description: 'Have a clear and practiced Lost Child Protocol.', priority: 'High', riskLevel: 'High', proof: 'Lost Child SOP', location: 'Guest Services Office' },
                    { id: 'GUEST-SVC-02', description: 'Log and track every guest complaint to resolution.', priority: 'High', riskLevel: 'Medium', proof: 'Complaint Log', location: 'System' },
                    { id: 'GUEST-SVC-03', description: 'Empower front-line staff to resolve minor issues on the spot.', priority: 'High', riskLevel: 'Low', proof: 'Empowerment Policy', location: 'Office' },
                    { id: 'GUEST-SVC-04', description: 'Provide services for guests with disabilities (wheelchairs, accessibility maps).', priority: 'High', riskLevel: 'Medium', proof: 'Accessibility Plan', location: 'Guest Services Office' },
                    { id: 'GUEST-SVC-05', description: 'Have a protocol for providing assistance to guests affected by a ride stoppage or other incident.', priority: 'High', riskLevel: 'High', proof: 'Incident Guest Handling SOP', location: 'Office' },
                    { id: 'GUEST-SVC-06', description: 'Train staff on empathetic communication and de-escalation techniques.', priority: 'High', riskLevel: 'Medium', proof: 'Training Records', location: 'HR' },
                    { id: 'GUEST-SVC-07', description: 'Monitor social media and review sites for guest feedback.', priority: 'High', riskLevel: 'Medium', proof: 'Social Media Monitoring Report', location: 'Marketing' },
                    { id: 'GUEST-SVC-08', description: 'Collect and analyze guest feedback to identify areas for improvement.', priority: 'High', riskLevel: 'Medium', proof: 'Feedback Analysis Report', location: 'Office' },
                    { id: 'GUEST-SVC-09', description: 'Maintain a lost and found system.', priority: 'High', riskLevel: 'Low', proof: 'Lost & Found Log', location: 'Guest Services Office' },
                    { id: 'GUEST-SVC-10', description: 'Ensure all guest-facing staff are knowledgeable about the park.', priority: 'High', riskLevel: 'Low', proof: 'Staff Quiz Results', location: 'HR' },
                ]
            },
        ]
    }
];

    

    




  




  

    






