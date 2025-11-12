

import React from "react";
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket, Wifi, UserCheck, BarChart3, Link as LinkIcon, BrainCircuit, Bot, Syringe, DatabaseZap, Megaphone, Siren, Lock, KeyRound, Users, Banknote, Webcam, Bug, UserCog, PackageCheck, Ambulance, FileWarning, Milestone, DoorClosed, CircleDollarSign, Wind, Thermometer, UserCog2, Key, Router, Package, Watch, Drama, Barcode, Stethoscope, SyringeIcon, HeartPulse, Microscope, Bus, BookOpen, Car, Drill, SprayCan, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask, Store, Pill, Ship, Sun, Film, AnchorIcon, Clapperboard, MonitorPlay, Tv, Library, BriefcaseBusiness, ShieldCheck, Handshake, Route, CalendarDays, ClipboardList, HelpingHand, Map, DramaIcon, UserRound, Sparkles, Scale, Code, Video, Zap, ScanFace, HandPlatter, Cog, Scissors, Eye, Fish, Cloud, Theater, Search, TrendingUp, ClipboardCheck, UserPlus, Coins, Mail } from "lucide-react";

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
        consequence: string;
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
    priceINR: number;
    priceUSD: number;
    paymentId: string; // Razorpay Payment ID
    lemonSqueezyUrl: string; // Lemon Squeezy Checkout URL
    listId?: number; // Brevo List ID
    category: "Hospitality" | "Corporate & Tech" | "Retail" | "Healthcare" | "Education" | "Industrial & Transport" | "Entertainment & Events" | "Social Cause" | "Real Estate" | "Compliance" | "Wellness & Beauty" | "Agriculture" | "Specialized Production" | "Food & Beverage" | "Franchise";
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
        priceINR: 0,
        priceUSD: 0,
        paymentId: '',
        lemonSqueezyUrl: '',
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
                    { id: 'INTAKE-01', description: 'Log all details of the incoming animal (source, species, age, condition).', priority: 'High', riskLevel: 'High', consequence: 'Incomplete records hinder tracking, medical history, and potential owner reunification.', proof: 'Intake Form', location: 'Reception' },
                    { id: 'INTAKE-02', description: 'Perform an initial health screening for obvious injuries or signs of disease.', priority: 'High', riskLevel: 'High', consequence: 'Failure to screen can lead to the spread of disease to the general shelter population.', proof: 'Health Screening Form', location: 'Intake Room' },
                    { id: 'INTAKE-03', description: 'Place all new animals in a designated quarantine area for a minimum period.', priority: 'High', riskLevel: 'High', consequence: 'Bypassing quarantine is the number one cause of infectious disease outbreaks (e.g., parvo, distemper) in shelters.', proof: 'Quarantine Log', location: 'Quarantine Area' },
                    { id: 'INTAKE-04', description: 'Provide fresh food, water, and clean bedding.', priority: 'High', riskLevel: 'Medium', consequence: 'Neglecting basic needs causes stress and weakens the animal\'s immune system.', proof: 'Visual Check', location: 'Quarantine Area' },
                    { id: 'INTAKE-05', description: 'Administer prophylactic treatments (deworming, flea/tick) as per vet protocol.', priority: 'High', riskLevel: 'High', consequence: 'Allows preventable parasites to spread throughout the facility.', proof: 'Medication Log', location: 'Quarantine Area' },
                    { id: 'INTAKE-06', description: 'Assign a unique ID number or tag to the animal.', priority: 'High', riskLevel: 'Medium', consequence: 'Risk of mistaken identity for medical treatment or adoption.', proof: 'ID Tag Application', location: 'Intake Room' },
                    { id: 'INTAKE-07', description: 'Take a clear photograph of the animal for records and adoption profiles.', priority: 'High', riskLevel: 'Low', consequence: 'Reduces chances of adoption and makes it harder to identify lost pets.', proof: 'Photo in System', location: 'Intake Room' },
                    { id: 'INTAKE-08', description: 'Observe the animal\'s behavior and temperament.', priority: 'High', riskLevel: 'High', consequence: 'Failure to note aggression can lead to bites and injuries to staff or other animals.', proof: 'Behavioral Notes', location: 'Quarantine Area' },
                    { id: 'INTAKE-09', description: 'Create a file for the animal with all intake documentation.', priority: 'High', riskLevel: 'High', consequence: 'Missing paperwork can lead to legal issues or incorrect medical treatment.', proof: 'Animal File', location: 'Office' },
                    { id: 'INTAKE-10', description: 'Update the shelter management software with the new animal\'s details.', priority: 'High', riskLevel: 'High', consequence: 'Leads to inaccurate shelter census and poor resource planning.', proof: 'System Entry', location: 'System' },
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
                    { id: 'CLEAN-DIS-01', description: 'Clean and disinfect all animal enclosures daily.', priority: 'High', riskLevel: 'High', consequence: 'Directly leads to the spread of fecal-oral diseases like parvovirus.', proof: 'Cleaning Log', location: 'Enclosures' },
                    { id: 'CLEAN-DIS-02', description: 'Use a veterinarian-approved disinfectant at the correct dilution.', priority: 'High', riskLevel: 'High', consequence: 'Wrong dilution makes disinfectant ineffective or potentially toxic to animals.', proof: 'Chemical Log', location: 'Storage' },
                    { id: 'CLEAN-DIS-03', description: 'Clean food and water bowls thoroughly every day.', priority: 'High', riskLevel: 'High', consequence: 'Biofilm buildup in bowls can harbor harmful bacteria.', proof: 'Visual Check', location: 'Enclosures' },
                    { id: 'CLEAN-DIS-04', description: 'Wash all bedding and toys regularly.', priority: 'High', riskLevel: 'Medium', consequence: 'Can harbor parasites like fleas and ticks.', proof: 'Laundry Log', location: 'Laundry Area' },
                    { id: 'CLEAN-DIS-05', description: 'Implement strict cleaning protocols for the quarantine and isolation areas.', priority: 'High', riskLevel: 'High', consequence: 'Failure to do so defeats the purpose of quarantine, spreading disease.', proof: 'Isolation Cleaning SOP', location: 'Quarantine/Isolation' },
                    { id: 'CLEAN-DIS-06', description: 'Dispose of animal waste properly and hygienically.', priority: 'High', riskLevel: 'High', consequence: 'Improper disposal attracts pests and creates a public health hazard.', proof: 'Waste Disposal Log', location: 'Waste Area' },
                    { id: 'CLEAN-DIS-07', description: 'Clean common areas, including staff and visitor areas.', priority: 'High', riskLevel: 'Medium', consequence: 'A dirty facility gives a poor impression to potential adopters and donors.', proof: 'Common Area Cleaning Log', location: 'Entire Facility' },
                    { id: 'CLEAN-DIS-08', description: 'Use separate cleaning equipment for different areas (e.g., quarantine, general population).', priority: 'High', riskLevel: 'High', consequence: 'A primary vector for spreading disease from sick animals to healthy ones.', proof: 'Equipment Color Coding', location: 'Storage' },
                    { id: 'CLEAN-DIS-09', description: 'Train staff on all cleaning and disinfection procedures.', priority: 'High', riskLevel: 'High', consequence: 'Untrained staff can make critical mistakes that lead to outbreaks.', proof: 'Training Records', location: 'HR' },
                    { id: 'CLEAN-DIS-10', description: 'Perform a deep clean of the entire facility monthly.', priority: 'High', riskLevel: 'High', consequence: 'Allows for gradual buildup of pathogens in hard-to-reach areas.', proof: 'Deep Clean Log', location: 'Entire Facility' },
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
                    { id: 'VET-CARE-01', description: 'Conduct a daily health check of every animal in the shelter.', priority: 'High', riskLevel: 'High', consequence: 'Missing early signs of illness can lead to an outbreak or a preventable death.', proof: 'Daily Health Log', location: 'Enclosures' },
                    { id: 'VET-CARE-02', description: 'Administer all prescribed medications and log them accurately.', priority: 'High', riskLevel: 'High', consequence: 'Missed doses can lead to treatment failure; double doses can be toxic.', proof: 'Medication Administration Record (MAR)', location: 'Enclosures' },
                    { id: 'VET-CARE-03', description: 'Isolate any animal showing signs of infectious disease immediately.', priority: 'High', riskLevel: 'High', consequence: 'Failure to isolate is the fastest way to spread disease through the shelter.', proof: 'Isolation Log', location: 'Isolation Area' },
                    { id: 'VET-CARE-04', description: 'Maintain a vaccination and deworming schedule for all animals.', priority: 'High', riskLevel: 'High', consequence: 'Leads to outbreaks of preventable diseases like rabies or distemper.', proof: 'Vaccination Records', location: 'System' },
                    { id: 'VET-CARE-05', description: 'Manage a spay/neuter program for all eligible animals.', priority: 'High', riskLevel: 'High', consequence: 'Fails the shelter\'s mission to control the stray population.', proof: 'Surgery Log', location: 'Clinic' },
                    { id: 'VET-CARE-06', description: 'Keep detailed medical records for every animal.', priority: 'High', riskLevel: 'High', consequence: 'Inaccurate records can lead to incorrect treatment or misinforming adopters.', proof: 'Medical Files', location: 'Office' },
                    { id: 'VET-CARE-07', description: 'Maintain a well-stocked and organized veterinary clinic.', priority: 'High', riskLevel: 'High', consequence: 'Inability to respond to a medical emergency due to missing supplies.', proof: 'Clinic Inventory', location: 'Clinic' },
                    { id: 'VET-CARE-08', description: 'Have a clear protocol for veterinary emergencies.', priority: 'High', riskLevel: 'High', consequence: 'Chaotic response during an emergency can be fatal for the animal.', proof: 'Emergency SOP', location: 'Office' },
                    { id: 'VET-CARE-09', description: 'Coordinate with external veterinary specialists when needed.', priority: 'High', riskLevel: 'High', consequence: 'Delays in getting specialized care can worsen an animal\'s condition.', proof: 'Specialist Referral Log', location: 'Office' },
                    { id: 'VET-CARE-10', description: 'Provide special care for geriatric, pediatric, or special needs animals.', priority: 'High', riskLevel: 'High', consequence: 'Neglecting their specific needs leads to poor quality of life and health decline.', proof: 'Special Needs Care Plan', location: 'Special Care Area' },
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
                    { id: 'ADOPT-01', description: 'Counsel potential adopters on the responsibilities of pet ownership.', priority: 'High', riskLevel: 'Medium', consequence: 'Leads to higher rates of animal returns due to adopter unpreparedness.', proof: 'Counseling Checklist', location: 'Adoption Office' },
                    { id: 'ADOPT-02', description: 'Have potential adopters fill out a detailed application form.', priority: 'High', riskLevel: 'Medium', consequence: 'Inability to screen for unsuitable homes (e.g., landlord restrictions, allergies).', proof: 'Adoption Application', location: 'Adoption Office' },
                    { id: 'ADOPT-03', description: 'Conduct a home check (virtual or physical) for first-time pet owners.', priority: 'High', riskLevel: 'Medium', consequence: 'Placing an animal in an unsafe or unsuitable home environment.', proof: 'Home Check Report', location: 'Office' },
                    { id: 'ADOPT-04', description: 'Match the right animal with the right family based on temperament and lifestyle.', priority: 'High', riskLevel: 'Medium', consequence: 'Mismatching energy levels or needs is a primary driver of animal returns.', proof: 'Matchmaking Notes', location: 'Adoption Office' },
                    { id: 'ADOPT-05', description: 'Complete all adoption paperwork, including an adoption contract.', priority: 'High', riskLevel: 'High', consequence: 'Creates legal ambiguity over the ownership and care of the animal.', proof: 'Signed Adoption Contract', location: 'Adoption Office' },
                    { id: 'ADOPT-06', description: 'Provide the adopter with the animal\'s medical history and vaccination records.', priority: 'High', riskLevel: 'High', consequence: 'New owner is unaware of medical needs, leading to gaps in care.', proof: 'Medical File Handover', location: 'Adoption Office' },
                    { id: 'ADOPT-07', description: 'Educate the adopter on the animal\'s diet, exercise, and grooming needs.', priority: 'High', riskLevel: 'Medium', consequence: 'New owner may inadvertently cause health issues through improper care.', proof: 'Adopter Education Checklist', location: 'Adoption Office' },
                    { id: 'ADOPT-08', description: 'Conduct a post-adoption follow-up call or visit within two weeks.', priority: 'High', riskLevel: 'Medium', consequence: 'Missed opportunity to solve early-stage problems before they lead to a return.', proof: 'Follow-up Log', location: 'System' },
                    { id: 'ADOPT-09', description: 'Have a clear policy for handling returned animals.', priority: 'High', riskLevel: 'High', consequence: 'A chaotic return process can be stressful for both the animal and the owner.', proof: 'Return Policy Document', location: 'Office' },
                    { id: 'ADOPT-10', description: 'Update the animal\'s status to "Adopted" in the shelter management system.', priority: 'High', riskLevel: 'High', consequence: 'Leads to inaccurate data and wasted resources on promoting an already-adopted animal.', proof: 'System Update', location: 'System' },
                ]
            },
            {
                title: "Volunteer Management",
                department: "Admin/HR",
                frequency: "Ongoing",
                role: "Volunteer Coordinator",
                icon: <Users />,
                summary: "SOP for recruiting, training, and managing volunteers to ensure they are a productive and safe part of the team.",
                tasks: [
                    { id: 'VOL-01', description: 'Conduct an orientation and training session for all new volunteers.', priority: 'High', riskLevel: 'Medium', consequence: 'Untrained volunteers can be a safety risk to themselves and the animals.', proof: 'Training Attendance', location: 'Office' },
                    { id: 'VOL-02', description: 'Have all volunteers sign a waiver and code of conduct.', priority: 'High', riskLevel: 'High', consequence: 'Exposes the shelter to legal liability in case of an accident.', proof: 'Signed Waiver', location: 'Office' },
                    { id: 'VOL-03', description: 'Maintain a schedule and log volunteer hours accurately.', priority: 'High', riskLevel: 'Medium', consequence: 'Leads to staffing shortages and an inability to track volunteer contributions.', proof: 'Volunteer Roster', location: 'System' },
                    { id: 'VOL-04', description: 'Assign tasks to volunteers based on their skills and comfort level.', priority: 'High', riskLevel: 'Medium', consequence: 'Poor volunteer experience leads to high turnover and negative word-of-mouth.', proof: 'Task Assignment Sheet', location: 'Office' },
                    { id: 'VOL-05', description: 'Provide ongoing training on animal handling and safety.', priority: 'High', riskLevel: 'High', consequence: 'Increases the risk of bites, scratches, or other injuries.', proof: 'Training Log', location: 'System' },
                    { id: 'VOL-06', description: 'Supervise volunteers, especially when interacting with animals.', priority: 'High', riskLevel: 'High', consequence: 'Lack of supervision can lead to unsafe situations for both volunteers and animals.', proof: 'Supervision Log', location: 'On-site' },
                    { id: 'VOL-07', description: 'Recognize and appreciate volunteer contributions.', priority: 'Medium', riskLevel: 'Low', consequence: 'Leads to low morale and high volunteer attrition.', proof: 'Recognition Program', location: 'Office' },
                    { id: 'VOL-08', description: 'Gather feedback from volunteers to improve the program.', priority: 'Medium', riskLevel: 'Low', consequence: 'Missed opportunity to improve operations and volunteer satisfaction.', proof: 'Feedback Survey', location: 'System' },
                    { id: 'VOL-09', description: 'Ensure volunteers know emergency procedures.', priority: 'High', riskLevel: 'High', consequence: 'In an emergency, untrained volunteers can become a liability instead of an asset.', proof: 'Emergency Drill', location: 'On-site' },
                    { id: 'VOL-10', description: 'Maintain a database of all active and past volunteers.', priority: 'High', riskLevel: 'Medium', consequence: 'Inability to communicate with or reactivate past volunteers.', proof: 'Volunteer Database', location: 'System' },
                ]
            },
            {
                title: "Fundraising & Donor Management",
                department: "Fundraising",
                frequency: "Ongoing",
                role: "Fundraising Manager",
                icon: <Coins />,
                summary: "A process for tracking donations, acknowledging donors, and managing fundraising campaigns.",
                tasks: [
                    { id: 'FUND-01', description: 'Log every donation (cash and in-kind) into a central database.', priority: 'High', riskLevel: 'High', consequence: 'Leads to inaccurate financial records and potential for misappropriation.', proof: 'Donation Log', location: 'System' },
                    { id: 'FUND-02', description: 'Send a thank you note or receipt to every donor within 48 hours.', priority: 'High', riskLevel: 'Medium', consequence: 'Failing to acknowledge donors quickly reduces the likelihood of future donations.', proof: 'Communication Log', location: 'System' },
                    { id: 'FUND-03', description: 'Plan and execute at least two major fundraising campaigns per year.', priority: 'High', riskLevel: 'High', consequence: 'Lack of a campaign strategy leads to inconsistent and unpredictable funding.', proof: 'Campaign Plan', location: 'Office' },
                    { id: 'FUND-04', description: 'Maintain a donor database with contact details and donation history.', priority: 'High', riskLevel: 'High', consequence: 'Inability to build relationships with recurring donors.', proof: 'CRM/Database', location: 'System' },
                    { id: 'FUND-05', description: 'Apply for grants and corporate funding opportunities.', priority: 'High', riskLevel: 'High', consequence: 'Missed opportunities for significant funding streams.', proof: 'Grant Application Log', location: 'Office' },
                    { id: 'FUND-06', description: 'Provide regular updates to donors on how their contributions are being used.', priority: 'High', riskLevel: 'Medium', consequence: 'Donors feel disconnected and are less likely to give again.', proof: 'Donor Newsletter', location: 'System' },
                    { id: 'FUND-07', description: 'Ensure all fundraising activities comply with local laws.', priority: 'High', riskLevel: 'High', consequence: 'Can lead to legal penalties and loss of non-profit status.', proof: 'Legal Compliance Check', location: 'Office' },
                    { id: 'FUND-08', description: 'Manage online donation portals and platforms.', priority: 'High', riskLevel: 'High', consequence: 'A broken donation link can lead to significant lost revenue.', proof: 'Platform Admin Panel', location: 'System' },
                    { id: 'FUND-09', description: 'Organize and manage fundraising events.', priority: 'High', riskLevel: 'High', consequence: 'Poorly run events can lose money and damage the shelter\'s reputation.', proof: 'Event Plan', location: 'Office' },
                    { id: 'FUND-10', description: 'Prepare and present fundraising reports to the board.', priority: 'High', riskLevel: 'High', consequence: 'Lack of transparency can lead to poor governance and decision-making.', proof: 'Board Report', location: 'Office' },
                ]
            },
            {
                title: "Social Media & Community Outreach",
                department: "Marketing",
                frequency: "Weekly",
                role: "Social Media Manager",
                icon: <Megaphone />,
                summary: "A content calendar and process for promoting adoptable animals and engaging with the community online.",
                tasks: [
                    { id: 'SOC-MED-01', description: 'Post profiles of adoptable animals at least 3 times a week.', priority: 'High', riskLevel: 'Medium', consequence: 'Reduces adoption rates and increases length of stay for animals.', proof: 'Social Media Feed', location: 'Online' },
                    { id: 'SOC-MED-02', description: 'Respond to all comments and messages within 24 hours.', priority: 'High', riskLevel: 'Medium', consequence: 'Ignoring inquiries leads to missed adoption opportunities and a poor public image.', proof: 'Message Inbox', location: 'Online' },
                    { id: 'SOC-MED-03', description: 'Share success stories of adopted animals weekly.', priority: 'High', riskLevel: 'Low', consequence: 'Missed opportunity to build community and encourage more adoptions.', proof: 'Social Media Feed', location: 'Online' },
                    { id: 'SOC-MED-04', description: 'Create and share educational content about animal welfare.', priority: 'Medium', riskLevel: 'Low', consequence: 'Fails to position the shelter as a community resource.', proof: 'Content Calendar', location: 'System' },
                    { id: 'SOC-MED-05', description: 'Promote fundraising campaigns and events.', priority: 'High', riskLevel: 'High', consequence: 'Reduces reach and effectiveness of fundraising efforts.', proof: 'Campaign Posts', location: 'Online' },
                    { id: 'SOC-MED-06', description: 'Engage with local community groups and influencers.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Missed opportunities for partnerships and increased visibility.', proof: 'Engagement Log', location: 'Online' },
                    { id: 'SOC-MED-07', description: 'Monitor online reputation and respond to reviews.', priority: 'High', riskLevel: 'High', consequence: 'Unanswered negative reviews can severely damage the shelter\'s reputation.', proof: 'Review Platform', location: 'Online' },
                    { id: 'SOC-MED-08', description: 'Track key metrics like engagement rate and follower growth.', priority: 'High', riskLevel: 'Low', consequence: 'Inability to measure effectiveness and optimize social media strategy.', proof: 'Analytics Report', location: 'System' },
                    { id: 'SOC-MED-09', description: 'Maintain a consistent brand voice and visual style.', priority: 'High', riskLevel: 'Low', consequence: 'A messy, inconsistent feed looks unprofessional.', proof: 'Brand Guidelines', location: 'Office' },
                    { id: 'SOC-MED-10', description: 'Run online adoption drives and awareness campaigns.', priority: 'High', riskLevel: 'High', consequence: 'Slower adoption rates and lower community engagement.', proof: 'Campaign Plan', location: 'Office' },
                ]
            },
            {
                title: "Facility Maintenance & Safety",
                department: "Facilities",
                frequency: "Weekly",
                role: "Facility Manager",
                icon: <Wrench />,
                summary: "Regular checks to ensure the shelter is safe and well-maintained for animals, staff, and visitors.",
                tasks: [
                    { id: 'FAC-01', description: 'Inspect all enclosures for structural integrity and safety.', priority: 'High', riskLevel: 'High', consequence: 'A broken latch or fence can lead to animal escapes or fights.', proof: 'Enclosure Inspection Log', location: 'Enclosures' },
                    { id: 'FAC-02', description: 'Check all locks, gates, and fences for security.', priority: 'High', riskLevel: 'High', consequence: 'A security lapse can lead to theft of supplies or, worse, animals.', proof: 'Security Hardware Log', location: 'Perimeter' },
                    { id: 'FAC-03', description: 'Ensure proper ventilation and temperature control in all animal areas.', priority: 'High', riskLevel: 'High', consequence: 'Poor ventilation can lead to spread of respiratory illness; extreme temperatures can be fatal.', proof: 'HVAC Log', location: 'Facility' },
                    { id: 'FAC-04', description: 'Check for and repair any slip, trip, or fall hazards.', priority: 'High', riskLevel: 'High', consequence: 'Can lead to injuries to staff, volunteers, or visitors and potential liability.', proof: 'Safety Walkthrough Log', location: 'Facility' },
                    { id: 'FAC-05', description: 'Inspect plumbing and drainage systems to prevent water logging.', priority: 'High', riskLevel: 'Medium', consequence: 'Poor drainage creates unsanitary conditions and can cause water damage.', proof: 'Plumbing Inspection Log', location: 'Facility' },
                    { id: 'FAC-06', description: 'Verify fire extinguishers and smoke alarms are functional.', priority: 'High', riskLevel: 'High', consequence: 'A non-functional fire safety system can have catastrophic results.', proof: 'Fire Safety Log', location: 'Facility' },
                    { id: 'FAC-07', description: 'Maintain a clean and organized storage area for food and supplies.', priority: 'High', riskLevel: 'Medium', consequence: 'Disorganization can lead to pest infestations and wasted supplies.', proof: 'Storage Audit', location: 'Storage' },
                    { id: 'FAC-08', description: 'Ensure all electrical systems are safe and up to code.', priority: 'High', riskLevel: 'High', consequence: 'Faulty wiring is a major fire hazard.', proof: 'Electrical Safety Audit', location: 'Facility' },
                    { id: 'FAC-09', description: 'Schedule regular pest control services.', priority: 'High', riskLevel: 'High', consequence: 'Pests can spread disease and contaminate food supplies.', proof: 'Pest Control Contract', location: 'Office' },
                    { id: 'FAC-10', description: 'Maintain a log of all repairs and maintenance work.', priority: 'High', riskLevel: 'Medium', consequence: 'Lack of records makes it difficult to track recurring problems or prove due diligence.', proof: 'Maintenance Logbook', location: 'Office' },
                ]
            },
        ]
    },
    {
        id: 'franchise_operations_pack',
        title: "Franchise Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d8b3b441-f923-455b-90a7-4b7f8374d6c6',
        category: "Franchise",
        description: "The foundational legal and operational toolkit to enforce brand standards, ensure quality control, and empower franchisee success.",
        icon: <Store />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Franchise Founders", "Franchise Operations Heads", "Franchise Business Coaches", "Multi-unit Franchisees"],
        sampleItems: [
            { text: "Enforce brand consistency with a visual identity and store operations audit.", icon: <Eye /> },
            { text: "Provide a legal framework for quality control and franchisee performance management.", icon: <FileCheck /> },
            { text: "Streamline franchisee onboarding from site selection to grand opening.", icon: <KeyRound /> },
            { text: "Standardize financials with SOPs for royalty reconciliation and supplier audits.", icon: <DollarSign /> },
            { text: "Empower franchisees with a clear guide for day-to-day operations.", icon: <BookOpen /> },
            { text: "Protect your brand with a system for local marketing compliance and approvals.", icon: <Megaphone /> },
        ],
        previewScenario: {
            title: "Onboarding a New Franchisee & Preventing Brand Dilution",
            description: "A new franchisee is about to open their first store. This scenario shows how the operations pack ensures they launch successfully while perfectly maintaining your brand standards, preventing common new-franchisee errors.",
            tasks: [
                { id: 'FR-ONBOARD-04', description: "The 'New Franchisee Onboarding' checklist provides a step-by-step guide for store fit-out, ensuring the new location is an exact replica of the brand's look and feel, preventing inconsistent design.", sourceChecklist: "New Franchisee Onboarding", priority: 'High' },
                { id: 'LSM-01', description: "Before their grand opening, the 'LSM Compliance' SOP requires the franchisee to submit their local marketing plan for approval, preventing the use of off-brand messaging or unauthorized discounts.", sourceChecklist: "Local Store Marketing (LSM) Compliance", priority: 'High' },
                { id: 'CSSA-01', description: "The 'Customer Service Standards Audit' checklist is used by the franchise coach in the first week to train staff on the exact greeting and service script, ensuring a consistent customer experience network-wide.", sourceChecklist: "Customer Service Standards Audit", priority: 'High' }
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
                summary: "The master guide for a successful launch. This covers everything from site selection and legal paperwork to staff training and grand opening, ensuring every new franchisee starts strong.",
                tasks: [
                    { id: 'FR-ONBOARD-01', description: 'Verify final site selection and lease agreement.', priority: 'High', riskLevel: 'High', consequence: 'A poor location is a primary cause of franchise failure.', proof: 'Signed Lease', location: 'Legal File' },
                    { id: 'FR-ONBOARD-02', description: 'Execute the franchise agreement and collect initial fees.', priority: 'High', riskLevel: 'High', consequence: 'Without a signed agreement, there is no legal basis for the franchise relationship.', proof: 'Signed Agreement & Receipt', location: 'Legal File' },
                    { id: 'FR-ONBOARD-03', description: 'Provide the franchisee with the complete operations manual.', priority: 'High', riskLevel: 'High', consequence: 'Inconsistent operations from day one, leading to brand dilution.', proof: 'Manual Handover Form', location: 'Office' },
                    { id: 'FR-ONBOARD-04', description: 'Manage the store fit-out process according to brand guidelines.', priority: 'High', riskLevel: 'High', consequence: 'Inconsistent store design damages brand image and customer experience.', proof: 'Fit-out Completion Report', location: 'New Location' },
                    { id: 'FR-ONBOARD-05', description: 'Train the franchisee and their key staff on all operational procedures.', priority: 'High', riskLevel: 'High', consequence: 'Untrained staff leads to poor service, quality issues, and customer complaints.', proof: 'Training Certificates', location: 'Training Center' },
                    { id: 'FR-ONBOARD-06', description: 'Set up POS, inventory, and other required software systems.', priority: 'High', riskLevel: 'High', consequence: 'Inability to process sales or track inventory from opening day.', proof: 'System Setup Log', location: 'New Location' },
                    { id: 'FR-ONBOARD-07', description: 'Coordinate initial inventory and supply chain setup.', priority: 'High', riskLevel: 'High', consequence: 'Store cannot open without initial stock, causing delays and lost revenue.', proof: 'First PO', location: 'New Location' },
                    { id: 'FR-ONBOARD-08', description: 'Plan and execute a grand opening marketing campaign.', priority: 'High', riskLevel: 'Medium', consequence: 'A weak opening fails to generate initial buzz and customer traffic.', proof: 'Marketing Plan', location: 'Marketing Dept' },
                    { id: 'FR-ONBOARD-09', description: 'Ensure all required licenses and permits are in place.', priority: 'High', riskLevel: 'High', consequence: 'Operating without permits can lead to fines and forced closure by authorities.', proof: 'Permit File', location: 'Legal Dept'},
                    { id: 'FR-ONBOARD-10', description: 'Conduct a final pre-opening audit to ensure readiness.', priority: 'High', riskLevel: 'High', consequence: 'Opening with unresolved issues leads to a poor customer first impression.', proof: 'Pre-opening Audit Report', location: 'New Location'}
                ]
            },
            {
                title: "Brand & Visual Identity Audit",
                department: "Operations",
                frequency: "Quarterly",
                role: "Field Manager",
                icon: <Eye />,
                summary: "Your brand's first line of defense. A quarterly audit to ensure every franchise location perfectly reflects the brand's look and feel, from signage and uniforms to product displays and ambiance.",
                tasks: [
                    { id: 'BRAND-AUDIT-01', description: 'Check that all interior and exterior signage is correct and in good condition.', priority: 'High', riskLevel: 'High', consequence: 'Damaged or incorrect signage makes the brand look unprofessional and cheap.', proof: 'Photo Audit', location: 'Franchise Location' },
                    { id: 'BRAND-AUDIT-02', description: 'Verify staff uniforms are clean, correct, and worn properly.', priority: 'High', riskLevel: 'Medium', consequence: 'Sloppy uniforms give a poor impression of brand standards.', proof: 'Staff Inspection', location: 'Franchise Location' },
                    { id: 'BRAND-AUDIT-03', description: 'Ensure all marketing materials on display are current and brand-approved.', priority: 'High', riskLevel: 'High', consequence: 'Using outdated materials can confuse customers and promote incorrect offers.', proof: 'Marketing Material Audit', location: 'Franchise Location' },
                    { id: 'BRAND-AUDIT-04', description: 'Audit store cleanliness, lighting, and ambiance.', priority: 'High', riskLevel: 'High', consequence: 'A dirty or poorly-lit store directly impacts customer experience and sales.', proof: 'Ambiance Checklist', location: 'Franchise Location' },
                    { id: 'BRAND-AUDIT-05', description: 'Check that product/service presentation meets brand standards.', priority: 'High', riskLevel: 'High', consequence: 'Inconsistent presentation leads to a disjointed brand experience.', proof: 'Product Display Audit', location: 'Franchise Location' },
                    { id: 'BRAND-AUDIT-06', description: 'Review local social media and advertising for brand compliance.', priority: 'High', riskLevel: 'High', consequence: 'Off-brand local marketing can damage the entire brand\'s reputation.', proof: 'Social Media Review', location: 'Online' },
                    { id: 'BRAND-AUDIT-07', description: 'Ensure the correct brand music or scent profile is being used, if applicable.', priority: 'Medium', riskLevel: 'Low', consequence: 'Inconsistent sensory branding dilutes the customer experience.', proof: 'Sensory Audit', location: 'Franchise Location' },
                    { id: 'BRAND-AUDIT-08', description: 'Provide a detailed report to the franchisee with required corrective actions.', priority: 'High', riskLevel: 'High', consequence: 'Without a formal report, compliance issues are likely to be ignored.', proof: 'Audit Report', location: 'System' },
                    { id: 'BRAND-AUDIT-09', description: 'Check window displays for compliance with current campaign.', priority: 'High', riskLevel: 'Medium', consequence: 'Failure to update window displays leads to missed sales opportunities.', proof: 'Photo Audit', location: 'Franchise Location'},
                    { id: 'BRAND-AUDIT-10', description: 'Verify correct use of brand packaging.', priority: 'High', riskLevel: 'Medium', consequence: 'Inconsistent packaging degrades brand perception.', proof: 'Packaging Check', location: 'Franchise Location'}
                ]
            },
            {
                title: "Monthly Performance Review",
                department: "Operations",
                frequency: "Monthly",
                role: "Franchise Manager",
                icon: <BarChart3 />,
                summary: "The engine of continuous improvement. A structured agenda for monthly review meetings to discuss sales, KPIs, and challenges, ensuring franchisees feel supported and are held accountable.",
                tasks: [
                    { id: 'PERF-REVIEW-01', description: 'Review franchisee\'s monthly sales data against targets.', priority: 'High', riskLevel: 'High', consequence: 'Failure to track sales makes it impossible to manage performance or identify struggling franchisees.', proof: 'Sales Report', location: 'Meeting' },
                    { id: 'PERF-REVIEW-02', description: 'Analyze key operational KPIs (e.g., customer satisfaction, speed of service).', priority: 'High', riskLevel: 'High', consequence: 'Ignoring operational KPIs allows service quality to degrade over time.', proof: 'KPI Dashboard', location: 'Meeting' },
                    { id: 'PERF-REVIEW-03', description: 'Discuss successes, challenges, and support needed from the franchisor.', priority: 'High', riskLevel: 'Medium', consequence: 'Lack of communication leads to franchisee dissatisfaction and feeling unsupported.', proof: 'Meeting Minutes', location: 'Meeting' },
                    { id: 'PERF-REVIEW-04', description: 'Develop a joint action plan for the upcoming month.', priority: 'High', riskLevel: 'High', consequence: 'Without an action plan, performance issues are unlikely to be resolved.', proof: 'Action Plan Document', location: 'Meeting' },
                    { id: 'PERF-REVIEW-05', description: 'Review local marketing initiatives and results.', priority: 'High', riskLevel: 'Medium', consequence: 'Franchisees may waste money on ineffective marketing without guidance.', proof: 'Marketing Report', location: 'Meeting' },
                    { id: 'PERF-REVIEW-06', description: 'Address any outstanding compliance issues from previous audits.', priority: 'High', riskLevel: 'High', consequence: 'Repeated compliance failures can lead to penalties or franchise termination.', proof: 'Compliance Tracker', location: 'Meeting' },
                    { id: 'PERF-REVIEW-07', description: 'Provide updates on new products, services, or brand-wide campaigns.', priority: 'High', riskLevel: 'Medium', consequence: 'Franchisees feel disconnected from the brand and miss opportunities.', proof: 'Update Presentation', location: 'Meeting' },
                    { id: 'PERF-REVIEW-08', description: 'Review franchisee\'s P&L statement and discuss profitability.', priority: 'High', riskLevel: 'High', consequence: 'Unprofitable franchisees are at high risk of failure, which hurts the entire network.', proof: 'P&L Statement', location: 'Meeting' },
                    { id: 'PERF-REVIEW-09', description: 'Discuss staff training and development needs.', priority: 'High', riskLevel: 'Medium', consequence: 'Untrained staff leads to poor performance and high turnover.', proof: 'Training Plan', location: 'Meeting'},
                    { id: 'PERF-REVIEW-10', description: 'Set goals for the next review period.', priority: 'High', riskLevel: 'High', consequence: 'Without clear goals, performance stagnates.', proof: 'Goal Sheet', location: 'Meeting'}
                ]
            },
            {
                title: "Franchisee Financial Audit",
                department: "Finance",
                frequency: "Annually",
                role: "Auditor",
                icon: <DollarSign />,
                summary: "Protect your revenue streams. A formal SOP for auditing franchisee financials, reconciling royalty fees, verifying sales data against POS records, and ensuring financial reporting standards are met.",
                tasks: [
                    { id: 'FIN-AUDIT-01', description: 'Verify accuracy of franchisee\'s reported gross sales.', priority: 'High', riskLevel: 'High', consequence: 'Under-reported sales directly lead to loss of royalty revenue for the franchisor.', proof: 'Sales Records vs POS Data', location: 'Franchisee Office' },
                    { id: 'FIN-AUDIT-02', description: 'Reconcile royalty fee payments against reported sales.', priority: 'High', riskLevel: 'High', consequence: 'Failure to reconcile can lead to significant revenue leakage.', proof: 'Royalty Calculation Sheet', location: 'Franchisor Office' },
                    { id: 'FIN-AUDIT-03', description: 'Audit compliance with approved pricing and discount policies.', priority: 'High', riskLevel: 'High', consequence: 'Unauthorized discounts can erode brand value and profitability.', proof: 'POS Transaction Audit', location: 'Franchisee Office' },
                    { id: 'FIN-AUDIT-04', description: 'Check contributions to the national marketing fund.', priority: 'High', riskLevel: 'Medium', consequence: 'Non-payment by some franchisees unfairly burdens others.', proof: 'Marketing Fund Ledger', location: 'Franchisor Office' },
                    { id: 'FIN-AUDIT-05', description: 'Review franchisee P&L statements for any red flags.', priority: 'High', riskLevel: 'Medium', consequence: 'Financial distress in a franchisee can be an early warning sign of failure.', proof: 'P&L Analysis', location: 'Franchisor Office' },
                    { id: 'FIN-AUDIT-06', description: 'Ensure timely submission of all required financial reports.', priority: 'High', riskLevel: 'Medium', consequence: 'Late reports make it impossible for the franchisor to manage the network effectively.', proof: 'Submission Log', location: 'System' },
                    { id: 'FIN-AUDIT-07', description: 'Verify purchases are made from approved suppliers.', priority: 'High', riskLevel: 'Medium', consequence: 'Purchasing from unapproved suppliers can lead to quality issues and brand damage.', proof: 'Supplier Invoice Audit', location: 'Franchisee Office' },
                    { id: 'FIN-AUDIT-08', description: 'Issue an audit report with findings and required actions.', priority: 'High', riskLevel: 'High', consequence: 'Without a formal report, financial irregularities may not be corrected.', proof: 'Audit Report', location: 'System' },
                    { id: 'FIN-AUDIT-09', description: 'Audit petty cash and expense reports.', priority: 'High', riskLevel: 'Medium', consequence: 'Can uncover internal fraud or misuse of funds.', proof: 'Expense Audit', location: 'Franchisee Office'},
                    { id: 'FIN-AUDIT-10', description: 'Verify bank reconciliations.', priority: 'High', riskLevel: 'High', consequence: 'Unreconciled accounts can hide cash flow problems or fraud.', proof: 'Bank Statements', location: 'Franchisee Office'}
                ]
            },
            {
                title: "Local Store Marketing (LSM) Compliance",
                department: "Marketing",
                frequency: "Per Campaign",
                role: "Marketing Manager",
                icon: <Megaphone />,
                summary: "Empower local marketing while protecting the brand. This workflow provides franchisees with pre-approved templates and a clear process for getting their local marketing initiatives approved.",
                tasks: [
                    { id: 'LSM-01', description: 'Require franchisees to submit all local marketing plans for approval.', priority: 'High', riskLevel: 'High', consequence: 'Unapproved marketing can damage the brand\'s image and messaging.', proof: 'LSM Submission Form', location: 'System' },
                    { id: 'LSM-02', description: 'Review submitted plans for brand consistency and messaging.', priority: 'High', riskLevel: 'High', consequence: 'Allows off-brand or unprofessional advertising to go live.', proof: 'Approval Checklist', location: 'Marketing Office' },
                    { id: 'LSM-03', description: 'Provide feedback or approval within a defined SLA (e.g., 5 business days).', priority: 'High', riskLevel: 'Medium', consequence: 'Slow approvals can cause franchisees to miss local marketing opportunities.', proof: 'Communication Log', location: 'System' },
                    { id: 'LSM-04', description: 'Provide franchisees with a library of pre-approved marketing templates.', priority: 'High', riskLevel: 'Medium', consequence: 'Without templates, franchisees may create low-quality, off-brand materials.', proof: 'Asset Library', location: 'System' },
                    { id: 'LSM-05', description: 'Monitor franchisee social media accounts for compliance.', priority: 'High', riskLevel: 'High', consequence: 'Unmonitored accounts can spread misinformation or damage the brand.', proof: 'Social Media Audit', location: 'Online' },
                    { id: 'LSM-06', description: 'Ensure correct usage of logos, fonts, and brand colors.', priority: 'High', riskLevel: 'High', consequence: 'Leads to brand dilution and a fragmented brand identity.', proof: 'Brand Guideline Check', location: 'System' },
                    { id: 'LSM-07', description: 'Track the ROI of local marketing campaigns.', priority: 'Medium', riskLevel: 'Low', consequence: 'Inability to identify which local marketing tactics work best.', proof: 'ROI Report', location: 'System' },
                    { id: 'LSM-08', description: 'Share successful LSM ideas across the franchise network.', priority: 'Medium', riskLevel: 'Low', consequence: 'Valuable knowledge remains siloed within one franchise.', proof: 'Best Practice Newsletter', location: 'System' },
                    { id: 'LSM-09', description: 'Review in-store promotional displays.', priority: 'High', riskLevel: 'Medium', consequence: 'Cluttered or off-brand displays can confuse customers.', proof: 'Display Audit', location: 'Franchise Location'},
                    { id: 'LSM-10', description: 'Approve any local PR or media interactions.', priority: 'High', riskLevel: 'High', consequence: 'A franchisee giving an unauthorized press statement can cause a brand crisis.', proof: 'PR Approval Form', location: 'System'}
                ]
            },
            {
                title: "Customer Service Standards Audit",
                department: "Operations",
                frequency: "Quarterly",
                role: "Mystery Shopper/Field Manager",
                icon: <Sparkles />,
                summary: "The tool for measuring what matters most: the customer experience. An audit checklist, often used for mystery shopping, to evaluate service quality, staff knowledge, cleanliness, and complaint handling.",
                tasks: [
                    { id: 'CSSA-01', description: 'Audit staff greeting and welcome procedure.', priority: 'High', riskLevel: 'Medium', consequence: 'A poor first impression can cause a customer to leave immediately.', proof: 'Mystery Shopper Report', location: 'Franchise Location' },
                    { id: 'CSSA-02', description: 'Evaluate staff product knowledge and ability to answer questions.', priority: 'High', riskLevel: 'High', consequence: 'Lack of knowledge leads to lost sales and damages customer confidence.', proof: 'Mystery Shopper Report', location: 'Franchise Location' },
                    { id: 'CSSA-03', description: 'Check speed of service and queue management.', priority: 'High', riskLevel: 'High', consequence: 'Long waits are a major driver of customer dissatisfaction.', proof: 'Timing Log', location: 'Franchise Location' },
                    { id: 'CSSA-04', description: 'Assess cleanliness and presentation of the customer-facing areas.', priority: 'High', riskLevel: 'High', consequence: 'A dirty environment is a major deterrent for customers and a health hazard.', proof: 'Cleanliness Scorecard', location: 'Franchise Location' },
                    { id: 'CSSA-05', description: 'Evaluate how staff handle customer complaints or difficult situations.', priority: 'High', riskLevel: 'High', consequence: 'Poor complaint handling can lead to negative online reviews and lost customers.', proof: 'Scenario Test', location: 'Franchise Location' },
                    { id: 'CSSA-06', description: 'Check if staff are attempting to upsell or cross-sell.', priority: 'Medium', riskLevel: 'Low', consequence: 'Missed revenue opportunities.', proof: 'Upsell Attempt Log', location: 'Franchise Location' },
                    { id: 'CSSA-07', description: 'Review customer feedback scores (e.g., NPS, Google Reviews).', priority: 'High', riskLevel: 'High', consequence: 'Ignoring customer feedback allows problems to fester.', proof: 'Feedback Dashboard', location: 'System' },
                    { id: 'CSSA-08', description: 'Provide a detailed report and coaching plan to the franchisee.', priority: 'High', riskLevel: 'High', consequence: 'Without a feedback loop, service standards will not improve.', proof: 'Audit Report & Action Plan', location: 'System' },
                    { id: 'CSSA-09', description: 'Check telephone etiquette and responsiveness.', priority: 'High', riskLevel: 'Medium', consequence: 'A poor phone experience can lose a customer before they even visit.', proof: 'Call Monitoring Report', location: 'Remote'},
                    { id: 'CSSA-10', description: 'Evaluate the end-of-transaction closing and farewell.', priority: 'High', riskLevel: 'Low', consequence: 'A poor last impression can sour an otherwise good experience.', proof: 'Mystery Shopper Report', location: 'Franchise Location'}
                ]
            },
            {
                title: "Supply Chain & Inventory Audit",
                department: "Supply Chain",
                frequency: "Quarterly",
                role: "Supply Chain Analyst",
                icon: <Truck />,
                summary: "Ensures franchisees maintain profitability and quality by ordering from approved suppliers, managing stock levels correctly, and adhering to the franchisor's supply chain policies.",
                tasks: [
                    { id: 'SCIA-01', description: 'Audit franchisee purchase orders to ensure they are using approved suppliers.', priority: 'High', riskLevel: 'High', consequence: 'Use of unapproved suppliers can lead to quality control issues and brand damage.', proof: 'PO Audit', location: 'System' },
                    { id: 'SCIA-02', description: 'Analyze inventory turnover rates to identify overstocking or understocking.', priority: 'High', riskLevel: 'High', consequence: 'Poor inventory management ties up cash and leads to stockouts or waste.', proof: 'Inventory Turnover Report', location: 'System' },
                    { id: 'SCIA-03', description: 'Check for compliance with stock storage and handling procedures (e.g., FIFO).', priority: 'High', riskLevel: 'High', consequence: 'Improper storage can lead to product damage, spoilage, and financial loss.', proof: 'Stockroom Inspection', location: 'Franchise Location' },
                    { id: 'SCIA-04', description: 'Verify that shrinkage (loss) levels are within acceptable limits.', priority: 'High', riskLevel: 'High', consequence: 'High shrinkage directly impacts profitability and may indicate theft.', proof: 'Shrinkage Report', location: 'System' },
                    { id: 'SCIA-05', description: 'Ensure franchisee is participating in mandatory promotional buys.', priority: 'High', riskLevel: 'Medium', consequence: 'Non-participation weakens the impact of national marketing campaigns.', proof: 'Promo Purchase Report', location: 'System' },
                    { id: 'SCIA-06', description: 'Review logistics and delivery processes for efficiency.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Inefficient logistics can increase costs for the franchisee.', proof: 'Delivery Time Analysis', location: 'System' },
                    { id: 'SCIA-07', description: 'Identify and address any unauthorized product sourcing.', priority: 'High', riskLevel: 'High', consequence: 'Can introduce counterfeit or low-quality goods into the system.', proof: 'Product Sourcing Audit', location: 'Franchise Location' },
                    { id: 'SCIA-08', description: 'Provide guidance on optimizing inventory levels.', priority: 'Medium', riskLevel: 'Low', consequence: 'Franchisees may struggle with stock management without support.', proof: 'Recommendation Report', location: 'System' },
                    { id: 'SCIA-09', description: 'Audit returned goods process.', priority: 'High', riskLevel: 'High', consequence: 'A poor returns process can lead to financial loss and inaccurate inventory.', proof: 'Returns Log', location: 'Franchise Location'},
                    { id: 'SCIA-10', description: 'Check for expired or damaged stock.', priority: 'High', riskLevel: 'High', consequence: 'Selling expired goods is a major health and safety risk and can lead to legal action.', proof: 'Expired Stock Report', location: 'Franchise Location'}
                ]
            },
            {
                title: "Franchisee Staff Training SOP",
                department: "Training",
                frequency: "Ongoing",
                role: "Training Manager",
                icon: <Users />,
                summary: "Standardize excellence across your network. A complete process to ensure that all franchisee staff are certified on brand standards, product knowledge, and operational procedures.",
                tasks: [
                    { id: 'FST-01', description: 'Provide a mandatory training curriculum for all new franchisee employees.', priority: 'High', riskLevel: 'High', consequence: 'Inconsistent training leads to inconsistent service and quality.', proof: 'Training Curriculum', location: 'LMS' },
                    { id: 'FST-02', description: 'Require staff to pass a certification test on product knowledge and brand standards.', priority: 'High', riskLevel: 'Medium', consequence: 'Without certification, there is no proof that training was effective.', proof: 'Certification Test Results', location: 'LMS' },
                    { id: 'FST-03', description: 'Track training completion for all staff across the network.', priority: 'High', riskLevel: 'Medium', consequence: 'Inability to identify which locations have untrained staff.', proof: 'Training Completion Report', location: 'System' },
                    { id: 'FST-04', description: 'Conduct "Train the Trainer" sessions for franchisee managers.', priority: 'High', riskLevel: 'High', consequence: 'If managers can\'t train effectively, new hires will not be properly onboarded.', proof: 'Trainer Certification', location: 'Training Center' },
                    { id: 'FST-05', description: 'Provide regular refresher training on new products or procedures.', priority: 'High', riskLevel: 'Medium', consequence: 'Staff knowledge becomes outdated, leading to errors.', proof: 'Refresher Training Log', location: 'LMS' },
                    { id: 'FST-06', description: 'Audit training records during franchisee performance reviews.', priority: 'High', riskLevel: 'Medium', consequence: 'Holds franchisees accountable for training their teams.', proof: 'Audit Checklist', location: 'Meeting' },
                    { id: 'FST-07', description: 'Use a mix of online modules, in-person workshops, and on-the-job training.', priority: 'Medium', riskLevel: 'Low', consequence: 'A single training method may not be effective for all learners.', proof: 'Blended Learning Plan', location: 'System' },
                    { id: 'FST-08', description: 'Gather feedback from franchisees on the effectiveness of training programs.', priority: 'Medium', riskLevel: 'Low', consequence: 'Training programs may not address the real-world needs of the franchisees.', proof: 'Feedback Survey', location: 'System' },
                    { id: 'FST-09', description: 'Include customer service and complaint handling in training.', priority: 'High', riskLevel: 'High', consequence: 'Untrained staff can turn a minor complaint into a major brand issue.', proof: 'Training Module', location: 'LMS'},
                    { id: 'FST-10', description: 'Certify staff on health and safety procedures.', priority: 'High', riskLevel: 'High', consequence: 'Lack of safety training can lead to workplace accidents and liability.', proof: 'Safety Certification', location: 'LMS'}
                ]
            },
            {
                title: "IT Systems & POS Management",
                department: "IT",
                frequency: "Quarterly",
                role: "IT Support Lead",
                icon: <Computer />,
                summary: "The technical backbone of your franchise. This SOP ensures all franchise locations are using approved, secure, and up-to-date IT systems, from POS software to payment security.",
                tasks: [
                    { id: 'IT-POS-01', description: 'Ensure all locations are using the mandated POS software version.', priority: 'High', riskLevel: 'High', consequence: 'Different versions can lead to data inconsistencies and security vulnerabilities.', proof: 'Software Version Report', location: 'System' },
                    { id: 'IT-POS-02', description: 'Verify that antivirus and security software is installed and updated on all systems.', priority: 'High', riskLevel: 'High', consequence: 'Unprotected systems are vulnerable to malware and ransomware.', proof: 'Security Software Dashboard', location: 'System' },
                    { id: 'IT-POS-03', description: 'Audit POS data for signs of fraudulent activity (e.g., excessive voids, unusual discounts).', priority: 'High', riskLevel: 'High', consequence: 'Internal fraud can go undetected, leading to significant financial loss.', proof: 'POS Exception Report', location: 'System' },
                    { id: 'IT-POS-04', description: 'Ensure franchisees are compliant with data privacy and payment security (PCI DSS) standards.', priority: 'High', riskLevel: 'High', consequence: 'Non-compliance can result in massive fines and loss of payment processing ability.', proof: 'Compliance Audit', location: 'System' },
                    { id: 'IT-POS-05', description: 'Provide a centralized IT helpdesk for franchisee support.', priority: 'High', riskLevel: 'Medium', consequence: 'Without support, franchisees may struggle with technical issues, impacting sales.', proof: 'Helpdesk SLA Report', location: 'System' },
                    { id: 'IT-POS-06', description: 'Manage user access controls for all corporate systems.', priority: 'High', riskLevel: 'High', consequence: 'Unrestricted access can lead to data breaches or unauthorized changes.', proof: 'User Access Review', location: 'System' },
                    { id: 'IT-POS-07', description: 'Ensure regular data backups are being performed.', priority: 'High', riskLevel: 'High', consequence: 'A system failure without backups can lead to total loss of sales and operational data.', proof: 'Backup Logs', location: 'System' },
                    { id: 'IT-POS-08', description: 'Manage the rollout of any new software or hardware to the network.', priority: 'High', riskLevel: 'High', consequence: 'A poorly managed rollout can cause system-wide disruptions.', proof: 'Rollout Plan', location: 'System' },
                    { id: 'IT-POS-09', description: 'Audit franchisees for use of unauthorized software.', priority: 'High', riskLevel: 'High', consequence: 'Unauthorized software can introduce security risks and licensing issues.', proof: 'Software Audit Report', location: 'System'},
                    { id: 'IT-POS-10', description: 'Provide a disaster recovery plan for IT systems.', priority: 'High', riskLevel: 'High', consequence: 'Without a DR plan, a major IT failure can shut down a franchise for an extended period.', proof: 'DR Plan', location: 'System'}
                ]
            },
            {
                title: "Health, Safety & Compliance Audit",
                department: "Compliance",
                frequency: "Annually",
                role: "Compliance Officer",
                icon: <ShieldCheck />,
                summary: "Your legal shield. An annual audit to ensure franchisees comply with all local health, safety, and operational regulations, from fire safety to labor laws, protecting the entire brand from liability.",
                tasks: [
                    { id: 'HSC-01', description: 'Verify the franchisee holds all required local licenses and permits (e.g., Shop & Establishment, FSSAI).', priority: 'High', riskLevel: 'High', consequence: 'Operating without a license can lead to immediate closure by authorities.', proof: 'License and Permit File', location: 'Franchisee Office' },
                    { id: 'HSC-02', description: 'Inspect for fire safety compliance (extinguishers, exits, alarms).', priority: 'High', riskLevel: 'High', consequence: 'Non-compliance is a major life-safety risk and can invalidate insurance.', proof: 'Fire Safety Audit Checklist', location: 'Franchise Location' },
                    { id: 'HSC-03', description: 'Check for workplace safety hazards (trip hazards, electrical safety).', priority: 'High', riskLevel: 'High', consequence: 'Can lead to employee or customer injuries and lawsuits.', proof: 'Workplace Safety Audit', location: 'Franchise Location' },
                    { id: 'HSC-04', description: 'Ensure compliance with all labor laws (e.g., minimum wage, working hours).', priority: 'High', riskLevel: 'High', consequence: 'Labor law violations can result in significant fines and legal battles.', proof: 'Labor Law Compliance Audit', location: 'HR File' },
                    { id: 'HSC-05', description: 'Verify that staff have received mandatory safety training.', priority: 'High', riskLevel: 'High', consequence: 'Increases the risk of accidents and demonstrates negligence.', proof: 'Training Records', location: 'System' },
                    { id: 'HSC-06', description: 'Check first-aid kits are stocked and accessible.', priority: 'High', riskLevel: 'Medium', consequence: 'Inability to provide basic first aid during an incident.', proof: 'First-Aid Kit Log', location: 'Franchise Location' },
                    { id: 'HSC-07', description: 'Document all findings and create a corrective action plan with the franchisee.', priority: 'High', riskLevel: 'High', consequence: 'Without a CAPA, compliance issues will not be resolved.', proof: 'Compliance Report & CAPA', location: 'System' },
                    { id: 'HSC-08', description: 'Follow up to ensure all compliance issues are resolved.', priority: 'High', riskLevel: 'High', consequence: 'Allows franchisees to ignore critical safety and legal requirements.', proof: 'Follow-up Report', location: 'System' },
                    { id: 'HSC-09', description: 'Review insurance coverage (public liability, fire, etc.).', priority: 'High', riskLevel: 'High', consequence: 'Inadequate insurance can bankrupt a franchisee after a single incident.', proof: 'Insurance Policies', location: 'Franchisee Office'},
                    { id: 'HSC-10', description: 'Ensure adherence to all brand-specific operational standards.', priority: 'High', riskLevel: 'High', consequence: 'Undermines the entire purpose of the franchise system.', proof: 'Operational Audit', location: 'Franchise Location'}
                ]
            }
        ]
    },
    {
        id: 'bakery_confectionery_pack',
        title: "Bakery & Confectionery Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d20b66a6-f2b6-4b2a-b733-14930983d97d',
        category: "Food & Beverage",
        description: "A specialized toolkit for bakery and confectionery owners to ensure product consistency, food safety, and operational efficiency.",
        icon: <CakeSlice />,
        badgeText: "Special Offer",
        badgeVariant: "accent",
        whoIsItFor: ["Bakery Owners", "Head Bakers", "Pastry Chefs", "Cafe Owners with in-house baking"],
        sampleItems: [
            { text: "Achieve perfect results every time with recipe scaling and dough management checklists.", icon: <ClipboardList /> },
            { text: "Ensure food safety with HACCP-aligned protocols for ingredient handling and allergen control.", icon: <ShieldCheck /> },
            { text: "Maintain equipment precision with SOPs for oven calibration and mixer maintenance.", icon: <Wrench /> },
            { text: "Maximize freshness and minimize waste with a structured display and stock rotation system.", icon: <Recycle /> },
            { text: "Guarantee compliance with FSSAI regulations for packaging, labeling, and expiry dates.", icon: <FileCheck /> },
            { text: "Streamline your custom order process from client briefing to final delivery.", icon: <Package /> }
        ],
        previewScenario: {
            title: "Handling a Major Allergen Incident",
            description: "A customer with a severe nut allergy has a reaction after eating a product they were told was nut-free. This shows how checklists prevent this critical failure.",
            tasks: [
                { id: 'ALLERGEN-BAKE-01', description: "The 'Allergen Management' SOP requires a clear, color-coded system separating allergen-free production from regular production, preventing cross-contamination.", sourceChecklist: "Allergen Management & Control", priority: 'High' },
                { id: 'LABEL-01', description: "The 'Packaging & Labeling' checklist mandates that every single product is labeled with a full ingredient list and bolded allergens, providing a final safety net for the customer.", sourceChecklist: "Packaging & Labeling Compliance", priority: 'High' },
                { id: 'BAKE-TRAIN-04', description: "The 'Staff Training' SOP includes mandatory training on how to answer customer questions about allergens, ensuring staff never give incorrect information.", sourceChecklist: "Staff Hygiene & Training", priority: 'High' }
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
                    { id: 'BAKE-OPEN-01', description: 'Pre-heat all ovens to their required temperatures for the first bake.', priority: 'High', riskLevel: 'Medium', consequence: 'Inconsistent baking results, leading to wasted product and poor quality.', proof: 'Oven Temperature Log', location: 'Oven Area' },
                    { id: 'BAKE-OPEN-02', description: 'Inspect mixers and other equipment for cleanliness and functionality.', priority: 'High', riskLevel: 'High', consequence: 'Equipment malfunction can cause downtime; lack of cleanliness is a food safety risk.', proof: 'Equipment Check Log', location: 'Production Area' },
                    { id: 'BAKE-OPEN-03', description: 'Review the day\'s production schedule and special orders.', priority: 'High', riskLevel: 'High', consequence: 'Missing a special order or producing the wrong quantities leads to customer dissatisfaction and waste.', proof: 'Production Sheet', location: 'Office' },
                    { id: 'BAKE-OPEN-04', description: 'Pull all required ingredients from storage based on the production plan.', priority: 'High', riskLevel: 'Medium', consequence: 'Production delays due to missing ingredients.', proof: 'Ingredient Pull Sheet', location: 'Stores' },
                    { id: 'BAKE-OPEN-05', description: 'Calibrate weighing scales.', priority: 'High', riskLevel: 'High', consequence: 'Inaccurate measurements lead to inconsistent product quality and recipe failure.', proof: 'Scale Calibration Log', location: 'Weighing Area' },
                    { id: 'BAKE-OPEN-06', description: 'Ensure all staff are present and have their hairnets and aprons on.', priority: 'High', riskLevel: 'Medium', consequence: 'Hygiene violations and potential for hair or foreign objects in food.', proof: 'Staff Hygiene Check', location: 'Production Area' },
                    { id: 'BAKE-OPEN-07', description: 'Check that all work surfaces are sanitized before starting.', priority: 'High', riskLevel: 'High', consequence: 'Risk of cross-contamination and foodborne illness.', proof: 'Sanitization Log', location: 'Production Area' },
                    { id: 'BAKE-OPEN-08', description: 'Prepare and scale out base doughs and batters for the day.', priority: 'High', riskLevel: 'High', consequence: 'Inefficient workflow and delays during peak production.', proof: 'Scaling Sheets', location: 'Mixing Area' },
                    { id: 'BAKE-OPEN-09', description: 'Verify availability of all required packaging materials.', priority: 'Medium', riskLevel: 'Low', consequence: 'Delays in packaging finished goods.', proof: 'Packaging Inventory', location: 'Storage'},
                    { id: 'BAKE-OPEN-10', description: 'Check functionality of display cases and refrigerators.', priority: 'High', riskLevel: 'Medium', consequence: 'Malfunctioning displays can lead to spoiled product and lost sales.', proof: 'Display Temp Log', location: 'Front of House'}
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
                    { id: 'ALLERGEN-BAKE-01', description: 'Store allergenic ingredients (like nuts, soy, dairy) in separate, clearly labeled containers.', priority: 'High', riskLevel: 'High', consequence: 'The primary cause of allergen cross-contamination, which can be fatal to customers.', proof: 'Storage Audit Photo', location: 'Stores' },
                    { id: 'ALLERGEN-BAKE-02', description: 'Use color-coded utensils and equipment for preparing allergen-free items.', priority: 'High', riskLevel: 'High', consequence: 'Mixing utensils can transfer allergens to "safe" products.', proof: 'Visual Audit', location: 'Production Area' },
                    { id: 'ALLERGEN-BAKE-03', description: 'Thoroughly clean and sanitize surfaces and equipment between batches with and without allergens.', priority: 'High', riskLevel: 'High', consequence: 'Residual allergens can contaminate the next batch.', proof: 'Cleaning Log', location: 'Production Area' },
                    { id: 'ALLERGEN-BAKE-04', description: 'Schedule production of allergen-free items first thing in the morning after a deep clean.', priority: 'High', riskLevel: 'High', consequence: 'Reduces the risk of airborne flour or nut dust contaminating allergen-free products.', proof: 'Production Schedule', location: 'Office' },
                    { id: 'ALLERGEN-BAKE-05', description: 'Maintain an accurate allergen matrix for all products.', priority: 'High', riskLevel: 'High', consequence: 'Inability to provide accurate allergen information to customers.', proof: 'Allergen Matrix Document', location: 'Office' },
                    { id: 'ALLERGEN-BAKE-06', description: 'Train all staff on the risks of cross-contamination and how to handle allergen-related queries.', priority: 'High', riskLevel: 'High', consequence: 'Untrained staff may give incorrect information to customers, with potentially fatal results.', proof: 'Training Records', location: 'HR' },
                    { id: 'ALLERGEN-BAKE-07', description: 'Clearly label all finished products with allergen warnings.', priority: 'High', riskLevel: 'High', consequence: 'Failure to label is a legal violation and a major health risk (e.g., Natasha\'s Law).', proof: 'Label Check', location: 'Packaging Area' },
                    { id: 'ALLERGEN-BAKE-08', description: 'Have a clear procedure for handling a customer allergen reaction incident.', priority: 'High', riskLevel: 'High', consequence: 'A chaotic response can worsen the medical outcome and increase legal liability.', proof: 'Incident SOP', location: 'Office' },
                    { id: 'ALLERGEN-BAKE-09', description: 'Review supplier allergen information for all raw materials.', priority: 'High', riskLevel: 'High', consequence: 'Hidden allergens in raw materials can be passed on to the final product.', proof: 'Supplier Document Review', location: 'Procurement'},
                    { id: 'ALLERGEN-BAKE-10', description: 'Conduct periodic allergen testing on surfaces and finished products.', priority: 'High', riskLevel: 'High', consequence: 'Without testing, there is no verification that cleaning procedures are effective.', proof: 'Allergen Test Report', location: 'Lab'}
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
                    { id: 'LABEL-01', description: 'Verify the ingredient list is accurate and complete for the specific batch.', priority: 'High', riskLevel: 'High', consequence: 'Incorrect ingredients list is a major legal and safety violation.', proof: 'Label vs Recipe Check', location: 'Packaging Area' },
                    { id: 'LABEL-02', description: 'Ensure all allergens are correctly declared and highlighted as per FSSAI norms.', priority: 'High', riskLevel: 'High', consequence: 'Failure to declare allergens can lead to severe health incidents and product recalls.', proof: 'Allergen Declaration Check', location: 'Packaging Area' },
                    { id: 'LABEL-03', description: 'Check that the manufacturing date and "Best Before" date are correctly printed.', priority: 'High', riskLevel: 'High', consequence: 'Selling expired products can cause illness and lead to legal action.', proof: 'Date Code Verification', location: 'Packaging Area' },
                    { id: 'LABEL-04', description: 'Ensure the nutritional information is accurate and formatted correctly.', priority: 'High', riskLevel: 'Medium', consequence: 'Misleading nutritional claims can result in regulatory fines.', proof: 'Nutritional Panel Audit', location: 'Packaging Area' },
                    { id: 'LABEL-05', description: 'Verify the FSSAI license number is correctly displayed on the package.', priority: 'High', riskLevel: 'High', consequence: 'This is a mandatory legal requirement in India.', proof: 'FSSAI License Check', location: 'Packaging Area' },
                    { id: 'LABEL-06', description: 'Check for the vegetarian/non-vegetarian logo.', priority: 'High', riskLevel: 'High', consequence: 'Incorrectly labeling a non-veg item as veg is a serious cultural and legal offense.', proof: 'Logo Check', location: 'Packaging Area' },
                    { id: 'LABEL-07', description: 'Ensure the net weight is correctly stated.', priority: 'High', riskLevel: 'High', consequence: 'Violation of Legal Metrology laws, leading to fines.', proof: 'Weight Check', location: 'Packaging Area' },
                    { id: 'LABEL-08', description: 'Inspect packaging for tears, correct sealing, and overall quality.', priority: 'High', riskLevel: 'Medium', consequence: 'Poor packaging can lead to product contamination and spoilage.', proof: 'Package Integrity Check', location: 'Packaging Area' },
                    { id: 'LABEL-09', description: 'Ensure manufacturer\'s name and address are correctly printed.', priority: 'High', riskLevel: 'High', consequence: 'A mandatory FSSAI labeling requirement.', proof: 'Address Check', location: 'Packaging Area'},
                    { id: 'LABEL-10', description: 'Verify batch code is printed correctly for traceability.', priority: 'High', riskLevel: 'High', consequence: 'Without a batch code, a product recall is impossible to execute effectively.', proof: 'Batch Code Check', location: 'Packaging Area'}
                ]
            },
            {
                title: "Ingredient Sourcing & QC",
                department: "Procurement",
                frequency: "Per Delivery",
                role: "Store Manager",
                icon: <PackageCheck />,
                summary: "Ensures all raw materials meet quality standards before they enter production.",
                tasks: [
                    { id: 'BAKE-QC-01', description: "Verify supplier's FSSAI license and COA (Certificate of Analysis).", priority: 'High', riskLevel: 'High', consequence: 'Using ingredients from an unlicensed vendor is a major compliance violation.', proof: 'Supplier Documents', location: 'Receiving' },
                    { id: 'BAKE-QC-02', description: "Check raw materials for freshness, signs of pests, or damage upon receipt.", priority: 'High', riskLevel: 'High', consequence: 'Accepting poor quality ingredients directly leads to a poor quality final product.', proof: 'Receiving Log', location: 'Receiving' },
                    { id: 'BAKE-QC-03', description: "Verify ingredient expiry dates and reject any near-expiry stock.", priority: 'High', riskLevel: 'High', consequence: 'Using expired ingredients is a food safety risk.', proof: 'Expiry Check Log', location: 'Receiving' },
                    { id: 'BAKE-QC-04', description: "Store ingredients at correct temperatures (e.g., cold chain for dairy).", priority: 'High', riskLevel: 'High', consequence: 'Improper storage can cause spoilage and bacterial growth.', proof: 'Storage Temp Log', location: 'Stores' },
                    { id: 'BAKE-QC-05', description: "Ensure traceability with batch numbers for all key ingredients.", priority: 'High', riskLevel: 'High', consequence: 'Makes it impossible to trace the source of a contamination.', proof: 'Batch Log', location: 'Stores' },
                    { id: 'BAKE-QC-06', description: "Use FIFO (First-In, First-Out) for all ingredient usage.", priority: 'High', riskLevel: 'Medium', consequence: 'Leads to ingredient wastage due to expiry.', proof: 'Stock Rotation Audit', location: 'Stores' },
                    { id: 'BAKE-QC-07', description: "Maintain a register of approved suppliers.", priority: 'High', riskLevel: 'Medium', consequence: 'Allows for purchasing from unvetted, potentially unsafe sources.', proof: 'Approved Supplier List', location: 'Office' },
                    { id: 'BAKE-QC-08', description: "Check for any signs of adulteration in raw materials.", priority: 'High', riskLevel: 'High', consequence: 'Adulterated ingredients can be a major health hazard.', proof: 'Visual/Sensory Check', location: 'Receiving' },
                    { id: 'BAKE-QC-09', description: 'Verify weight of incoming goods against the invoice.', priority: 'High', riskLevel: 'Medium', consequence: 'Can lead to financial loss from short-weight deliveries.', proof: 'Weight Check Log', location: 'Receiving'},
                    { id: 'BAKE-QC-10', description: 'Reject any delivery that does not meet temperature requirements.', priority: 'High', riskLevel: 'High', consequence: 'Accepting a compromised cold chain delivery is a major food safety risk.', proof: 'Temperature Log', location: 'Receiving'}
                ]
            },
            {
                title: "Dough Management & Proofing",
                department: "Production",
                frequency: "Daily",
                role: "Baker",
                icon: <Thermometer />,
                summary: "Controls for dough temperature, fermentation times, and proofing conditions to ensure consistent texture and volume.",
                tasks: [
                    { id: 'BAKE-DOUGH-01', description: "Log dough mixing times and final dough temperature.", priority: 'High', riskLevel: 'Medium', consequence: 'Inconsistent dough temperature affects fermentation and final product texture.', proof: 'Dough Log', location: 'Mixing Station' },
                    { id: 'BAKE-DOUGH-02', description: "Monitor proofing box temperature and humidity.", priority: 'High', riskLevel: 'High', consequence: 'Incorrect proofing conditions lead to flat, dense, or misshapen products.', proof: 'Proofer Log', location: 'Proofing Area' },
                    { id: 'BAKE-DOUGH-03', description: "Follow standardized fermentation and resting times for each product.", priority: 'High', riskLevel: 'High', consequence: 'Deviations result in inconsistent flavor and texture.', proof: 'Production Schedule', location: 'Production' },
                    { id: 'BAKE-DOUGH-04', description: "Visually check dough for proper rise and volume before baking.", priority: 'High', riskLevel: 'Medium', consequence: 'Baking improperly proofed dough leads to wasted product.', proof: 'Visual Check Log', location: 'Proofing Area' },
                    { id: 'BAKE-DOUGH-05', description: "Use timers to ensure consistent proofing times.", priority: 'High', riskLevel: 'Medium', consequence: 'Guesswork leads to inconsistent results.', proof: 'Timer Usage Audit', location: 'Proofing Area' },
                    { id: 'BAKE-DOUGH-06', description: "Protect dough from drafts or temperature fluctuations.", priority: 'High', riskLevel: 'Medium', consequence: 'Can cause a crust to form on the dough, inhibiting rise.', proof: 'Visual Check', location: 'Production Area' },
                    { id: 'BAKE-DOUGH-07', description: "Clean all dough handling equipment between batches.", priority: 'High', riskLevel: 'High', consequence: 'Risk of allergen cross-contamination and bacterial growth.', proof: 'Cleaning Log', location: 'Mixing Station' },
                    { id: 'BAKE-DOUGH-08', description: "Label all doughs with type and production time.", priority: 'High', riskLevel: 'Medium', consequence: 'Can lead to using the wrong dough or over-fermenting it.', proof: 'Label Check', location: 'Production Area' },
                    { id: 'BAKE-DOUGH-09', description: 'Ensure correct yeast activation.', priority: 'High', riskLevel: 'High', consequence: 'Dead yeast means the dough will not rise, wasting the entire batch.', proof: 'Yeast Activity Test', location: 'Mixing Station'},
                    { id: 'BAKE-DOUGH-10', description: 'Log any deviations in dough handling.', priority: 'High', riskLevel: 'High', consequence: 'Without logs, it\'s impossible to troubleshoot quality issues.', proof: 'Deviation Log', location: 'Production'}
                ]
            },
            {
                title: "Oven Calibration & Maintenance",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Technician",
                icon: <Wrench />,
                summary: "Ensures ovens bake evenly and accurately, preventing undercooked or burnt products.",
                tasks: [
                    { id: 'BAKE-OVEN-01', description: "Calibrate oven thermostats weekly with an independent thermometer.", priority: 'High', riskLevel: 'High', consequence: 'An inaccurate oven thermostat is a primary cause of burnt or undercooked product.', proof: 'Calibration Log', location: 'Oven Area' },
                    { id: 'BAKE-OVEN-02', description: "Check for even heat distribution by test-baking a tray of products.", priority: 'High', riskLevel: 'Medium', consequence: 'Uneven baking leads to inconsistent quality and high levels of waste.', proof: 'Test Bake Photos', location: 'Oven Area' },
                    { id: 'BAKE-OVEN-03', description: "Clean oven interiors and doors daily to prevent carbon buildup.", priority: 'High', riskLevel: 'Medium', consequence: 'Carbon buildup can create off-flavors and is a fire hazard.', proof: 'Cleaning Log', location: 'Oven Area' },
                    { id: 'BAKE-OVEN-04', description: "Inspect door seals for leaks that can cause temperature fluctuations.", priority: 'High', riskLevel: 'High', consequence: 'Leaky seals waste energy and make baking times unpredictable.', proof: 'Seal Inspection Log', location: 'Oven Area' },
                    { id: 'BAKE-OVEN-05', description: "Check and clean oven ventilation systems.", priority: 'High', riskLevel: 'Medium', consequence: 'Blocked vents are a fire risk and can affect baking performance.', proof: 'Ventilation Log', location: 'Oven Area' },
                    { id: 'BAKE-OVEN-06', description: "Log all maintenance and repairs.", priority: 'High', riskLevel: 'High', consequence: 'Lack of records makes it difficult to track recurring issues or prove due diligence.', proof: 'Maintenance Records', location: 'Office' },
                    { id: 'BAKE-OVEN-07', description: "Ensure oven timers are accurate.", priority: 'High', riskLevel: 'Medium', consequence: 'Inaccurate timers lead to inconsistent baking.', proof: 'Timer Test', location: 'Oven Area' },
                    { id: 'BAKE-OVEN-08', description: "Train staff on safe oven operation.", priority: 'High', riskLevel: 'High', consequence: 'Untrained staff can cause accidents or damage equipment.', proof: 'Training Records', location: 'HR' },
                    { id: 'BAKE-OVEN-09', description: 'Check functionality of oven lights.', priority: 'Medium', riskLevel: 'Low', consequence: 'Makes it difficult for bakers to monitor products visually.', proof: 'Light Check Log', location: 'Oven Area'},
                    { id: 'BAKE-OVEN-10', description: 'Review energy consumption of ovens.', priority: 'Medium', riskLevel: 'Low', consequence: 'Missed opportunity to identify energy inefficiencies and reduce costs.', proof: 'Energy Report', location: 'Office'}
                ]
            },
            {
                title: "Display & Freshness Management",
                department: "Sales/FOH",
                frequency: "Daily",
                role: "Sales Associate",
                icon: <Eye />,
                summary: "Protocols for rotating stock, managing display appearance, and handling day-old products.",
                tasks: [
                    { id: 'BAKE-DISP-01', description: "Follow FIFO (First-In, First-Out) when arranging the display counter.", priority: 'High', riskLevel: 'Medium', consequence: 'Failure to rotate stock is a major cause of food waste.', proof: 'Visual Audit', location: 'Display Counter' },
                    { id: 'BAKE-DISP-02', description: "Remove any products that appear stale or damaged from display.", priority: 'High', riskLevel: 'Medium', consequence: 'Selling stale products damages brand reputation.', proof: 'Removal Log', location: 'Display Counter' },
                    { id: 'BAKE-DISP-03', description: "Implement a markdown or donation strategy for day-old products.", priority: 'High', riskLevel: 'Medium', consequence: 'High levels of unsold goods directly impact profitability.', proof: 'Markdown/Donation Log', location: 'POS' },
                    { id: 'BAKE-DISP-04', description: "Clean display cases and trays throughout the day.", priority: 'High', riskLevel: 'Low', consequence: 'A dirty display case gives a poor impression of hygiene.', proof: 'Cleaning Schedule', location: 'Display Counter' },
                    { id: 'BAKE-DISP-05', description: "Ensure products are displayed attractively.", priority: 'Medium', riskLevel: 'Low', consequence: 'Poor presentation can negatively impact sales.', proof: 'Visual Check', location: 'Display Counter' },
                    { id: 'BAKE-DISP-06', description: "Check temperatures of refrigerated display units.", priority: 'High', riskLevel: 'High', consequence: 'Temperature deviations can lead to spoilage and food safety risks.', proof: 'Temperature Log', location: 'Display Counter' },
                    { id: 'BAKE-DISP-07', description: "Use correct labels and price tags.", priority: 'High', riskLevel: 'Medium', consequence: 'Incorrect pricing leads to customer disputes and financial loss.', proof: 'Label Audit', location: 'Display Counter' },
                    { id: 'BAKE-DISP-08', description: "Replenish stock as needed to keep displays full.", priority: 'High', riskLevel: 'Low', consequence: 'Empty displays give the impression of poor management and lead to lost sales.', proof: 'Replenishment Check', location: 'Display Counter' },
                    { id: 'BAKE-DISP-09', description: 'Ensure allergen information is available for all displayed items.', priority: 'High', riskLevel: 'High', consequence: 'A critical food safety requirement; failure can lead to severe health incidents.', proof: 'Allergen Info Signage', location: 'Display Counter'},
                    { id: 'BAKE-DISP-10', description: 'Track and analyze sales data from the display to optimize offerings.', priority: 'High', riskLevel: 'Medium', consequence: 'Missed opportunity to stock more of what sells and less of what doesn\'t.', proof: 'Sales Report', location: 'System'}
                ]
            },
            {
                title: "Custom Cake Order Process",
                department: "Sales/Production",
                frequency: "Per Order",
                role: "Order Taker/Baker",
                icon: <CakeSlice />,
                summary: "A workflow from order taking to delivery to prevent errors in custom cake orders.",
                tasks: [
                    { id: 'BAKE-CUST-01', description: "Use a standardized order form to capture all customer requirements (size, flavor, design, message).", priority: 'High', riskLevel: 'High', consequence: 'Getting a detail wrong on a custom cake leads to high customer dissatisfaction.', proof: 'Completed Order Form', location: 'POS' },
                    { id: 'BAKE-CUST-02', description: "Confirm all details with the customer before finalizing the order.", priority: 'High', riskLevel: 'Medium', consequence: 'Prevents misunderstandings and ensures customer expectations are met.', proof: 'Confirmation Email/Message', location: 'System' },
                    { id: 'BAKE-CUST-03', description: "Create a detailed production brief for the baking team.", priority: 'High', riskLevel: 'High', consequence: 'Miscommunication between sales and production is a major cause of errors.', proof: 'Production Brief', location: 'Production' },
                    { id: 'BAKE-CUST-04', description: "Final QC check of the finished cake against the order form before delivery.", priority: 'High', riskLevel: 'High', consequence: 'The last chance to catch an error before it reaches the customer.', proof: 'Final QC Photos', location: 'Dispatch' },
                    { id: 'BAKE-CUST-05', description: "Take a deposit for all custom orders.", priority: 'High', riskLevel: 'Medium', consequence: 'Reduces financial loss from last-minute cancellations.', proof: 'Deposit Receipt', location: 'POS' },
                    { id: 'BAKE-CUST-06', description: "Communicate clearly about pickup/delivery times.", priority: 'High', riskLevel: 'Medium', consequence: 'Poor communication can lead to missed pickups and frustrated customers.', proof: 'Communication Log', location: 'System' },
                    { id: 'BAKE-CUST-07', description: "Package the cake securely for transport.", priority: 'High', riskLevel: 'High', consequence: 'A damaged cake in transit can ruin a customer\'s special event.', proof: 'Packaging Check', location: 'Dispatch' },
                    { id: 'BAKE-CUST-08', description: "Provide instructions for storage and handling to the customer.", priority: 'High', riskLevel: 'Medium', consequence: 'Improper storage by the customer can lead to the cake spoiling.', proof: 'Instruction Card', location: 'Dispatch' },
                    { id: 'BAKE-CUST-09', description: 'Confirm final payment upon pickup/delivery.', priority: 'High', riskLevel: 'High', consequence: 'Failure to collect final payment is a direct financial loss.', proof: 'Final Invoice', location: 'POS'},
                    { id: 'BAKE-CUST-10', description: 'Follow up with the customer for feedback.', priority: 'Medium', riskLevel: 'Low', consequence: 'Missed opportunity to get testimonials and improve the process.', proof: 'Feedback Request', location: 'System'}
                ]
            },
            {
                title: "Staff Hygiene & Training",
                department: "HR/Management",
                frequency: "Ongoing",
                role: "Manager",
                icon: <UserCheck />,
                summary: "Ensures all staff follow strict hygiene protocols to maintain food safety.",
                tasks: [
                    { id: 'BAKE-TRAIN-01', description: "Conduct daily checks for clean uniforms, aprons, and hairnets.", priority: 'High', riskLevel: 'Medium', consequence: 'Poor staff presentation reflects badly on the brand\'s hygiene standards.', proof: 'Daily Staff Check Log', location: 'Entry Point' },
                    { id: 'BAKE-TRAIN-02', description: "Enforce handwashing protocols before starting work and between tasks.", priority: 'High', riskLevel: 'High', consequence: 'Hand-to-food contamination is a primary cause of foodborne illness.', proof: 'Hygiene Audit', location: 'Production' },
                    { id: 'BAKE-TRAIN-03', description: "Train staff on the \"no jewelry\" policy in production areas.", priority: 'High', riskLevel: 'High', consequence: 'Jewelry can fall into food, creating a physical hazard.', proof: 'Policy Acknowledgement', location: 'HR File' },
                    { id: 'BAKE-TRAIN-04', description: "Provide documented training on food safety and allergen management.", priority: 'High', riskLevel: 'High', consequence: 'A critical step to prevent life-threatening allergen incidents.', proof: 'Training Records', location: 'HR File' },
                    { id: 'BAKE-TRAIN-05', description: "Ensure staff report any illness and are not allowed to work with food if sick.", priority: 'High', riskLevel: 'High', consequence: 'A sick employee can easily transmit illness to customers through food.', proof: 'Sick Leave Policy', location: 'HR' },
                    { id: 'BAKE-TRAIN-06', description: "Keep training records up to date for all employees.", priority: 'High', riskLevel: 'Medium', consequence: 'In an audit, lack of records is equivalent to lack of training.', proof: 'Master Training File', location: 'HR' },
                    { id: 'BAKE-TRAIN-07', description: "Conduct refresher training annually.", priority: 'High', riskLevel: 'Medium', consequence: 'Staff can forget critical procedures over time.', proof: 'Refresher Training Log', location: 'HR' },
                    { id: 'BAKE-TRAIN-08', description: "Post hygiene reminders in staff areas.", priority: 'Medium', riskLevel: 'Low', consequence: 'Keeps food safety top-of-mind for all staff.', proof: 'Visual Check', location: 'Staff Areas' },
                    { id: 'BAKE-TRAIN-09', description: 'Ensure new hires complete food safety certification (e.g. FoSTaC).', priority: 'High', riskLevel: 'High', consequence: 'A legal requirement in many jurisdictions and a food safety best practice.', proof: 'FoSTaC Certificate', location: 'HR File'},
                    { id: 'BAKE-TRAIN-10', description: 'Monitor staff for compliance with all hygiene policies.', priority: 'High', riskLevel: 'High', consequence: 'Policies are useless if not enforced.', proof: 'Supervisor Log', location: 'Production'}
                ]
            },
            {
                title: "Pest Control Management",
                department: "Hygiene",
                frequency: "Weekly",
                role: "Hygiene Supervisor",
                icon: <Bug />,
                summary: "A proactive approach to keep the bakery free of pests.",
                tasks: [
                    { id: 'BAKE-PEST-01', description: "Inspect for signs of pests (droppings, gnaw marks) weekly.", priority: 'High', riskLevel: 'High', consequence: 'A pest infestation can lead to closure by health authorities and severe brand damage.', proof: 'Pest Inspection Log', location: 'All Areas' },
                    { id: 'BAKE-PEST-02', description: "Ensure all doors and windows have screens and are kept closed.", priority: 'High', riskLevel: 'High', consequence: 'Prevents entry points for flying insects and rodents.', proof: 'Structural Audit', location: 'Perimeter' },
                    { id: 'BAKE-PEST-03', description: "Manage waste disposal to not attract pests.", priority: 'High', riskLevel: 'High', consequence: 'Overflowing bins are a primary food source for pests.', proof: 'Waste Management Log', location: 'Waste Area' },
                    { id: 'BAKE-PEST-04', description: "Review and file the monthly report from the professional pest control vendor.", priority: 'High', riskLevel: 'High', consequence: 'Provides a professional, third-party audit of your pest control status.', proof: 'Vendor Report', location: 'Office' },
                    { id: 'BAKE-PEST-05', description: "Keep ingredients in sealed containers.", priority: 'High', riskLevel: 'High', consequence: 'Open containers of flour and sugar are a magnet for pests.', proof: 'Storage Audit', location: 'Stores' },
                    { id: 'BAKE-PEST-06', description: "Eliminate any standing water sources.", priority: 'High', riskLevel: 'Medium', consequence: 'Standing water attracts pests like mosquitoes and cockroaches.', proof: 'Water Source Check', location: 'All Areas' },
                    { id: 'BAKE-PEST-07', description: "Install and maintain insect light traps.", priority: 'High', riskLevel: 'Medium', consequence: 'An effective way to control flying insects in production areas.', proof: 'Trap Maintenance Log', location: 'Production Area' },
                    { id: 'BAKE-PEST-08', description: "Seal any cracks or holes in walls and floors.", priority: 'High', riskLevel: 'High', consequence: 'Denies entry points for rodents and other pests.', proof: 'Structural Maintenance Log', location: 'All Areas' },
                    { id: 'BAKE-PEST-09', description: 'Maintain a pest sighting log.', priority: 'High', riskLevel: 'High', consequence: 'Helps identify patterns and hotspots for pest activity.', proof: 'Sighting Log', location: 'Office'},
                    { id: 'BAKE-PEST-10', description: 'Ensure receiving area is inspected for pests with every delivery.', priority: 'High', riskLevel: 'High', consequence: 'Prevents pests from being introduced via suppliers.', proof: 'Receiving Log', location: 'Receiving'}
                ]
            }
        ]
    },
    // --- Hospitality ---
    {
        id: 'hotels_and_resorts',
        title: "Hotels & Resorts Pack",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f9b98b4f-9036-46f9-924e-6883bc01760e',
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
                     { id: 'HRR-01', description: 'Check bed linen for stains, tears, and proper placement.', priority: 'High', riskLevel: 'Medium', consequence: 'Poor guest experience and negative reviews due to unclean or damaged linen.', proof: 'Photo of made bed', location: 'Guest Room' },
                     { id: 'HRR-02', description: 'Verify minibar stock against the standard list and check for expired items.', priority: 'High', riskLevel: 'Medium', consequence: 'Guest dissatisfaction and potential health risk if expired items are consumed.', proof: 'Minibar Restock Sheet', location: 'Guest Room' },
                     { id: 'HRR-03', description: 'Test the functionality of the in-room safe and ensure it is empty and open.', priority: 'High', riskLevel: 'High', consequence: 'Guest cannot secure valuables, leading to security concerns and complaints.', proof: 'Safe Test Log', location: 'Guest Room' },
                     { id: 'HRR-04', description: 'Check all plumbing (taps, shower, toilet) for leaks and proper function. Check water pressure.', priority: 'High', riskLevel: 'High', consequence: 'A minor leak can cause major water damage, while a non-functional toilet is a major service failure.', proof: 'Plumbing Check Log', location: 'Guest Bathroom' },
                     { id: 'HRR-05', description: 'Inspect all surfaces (tables, counters, mirrors) for cleanliness and dust.', priority: 'High', riskLevel: 'Low', consequence: 'Reflects poorly on the hotel\'s hygiene standards and attention to detail.', proof: 'Visual Check', location: 'Guest Room' },
                     { id: 'HRR-06', description: 'Test TV, AC remote controls, and all light switches.', priority: 'High', riskLevel: 'Medium', consequence: 'Non-functional amenities are a common source of guest complaints.', proof: 'Functional Test Log', location: 'Guest Room' },
                     { id: 'HRR-07', description: 'Replenish all guest amenities (toiletries, tea/coffee, water bottles).', priority: 'Medium', riskLevel: 'Low', consequence: 'Failure to replenish amenities shows a lack of attention to detail.', proof: 'Amenity Checklist', location: 'Guest Room' },
                     { id: 'HRR-08', description: 'Check functionality of the door lock and key card access.', priority: 'High', riskLevel: 'High', consequence: 'A faulty lock compromises guest safety and security.', proof: 'Lock Test Log', location: 'Guest Room Door' },
                     { id: 'HRR-09', description: 'Ensure the room is free of any odors. Use air freshener if necessary.', priority: 'Medium', riskLevel: 'Low', consequence: 'Unpleasant odors can ruin a guest\'s first impression of the room.', proof: 'Olfactory Check', location: 'Guest Room' },
                     { id: 'HRR-10', description: 'Final supervisor check and sign-off with photo uploaded to system.', priority: 'High', riskLevel: 'Medium', consequence: 'Provides a layer of accountability and ensures standards are consistently met.', proof: 'Supervisor Sign-off', location: 'System' },
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
                    { id: 'HACCP-01', description: 'Log temperatures of all walk-in chillers, freezers, and reach-in refrigerators.', priority: 'High', riskLevel: 'High', consequence: 'Temperature deviations can lead to bacterial growth and foodborne illness.', proof: 'Temperature Log', location: 'Kitchen' },
                    { id: 'HACCP-02', description: 'Verify raw material deliveries against supplier documentation, checking for temperature and quality.', priority: 'High', riskLevel: 'High', consequence: 'Accepting compromised raw materials introduces risk at the very start of the food chain.', proof: 'Receiving Log', location: 'Receiving Bay' },
                    { id: 'HACCP-03', description: 'Ensure all handwashing stations are stocked with soap, sanitizer, and paper towels.', priority: 'High', riskLevel: 'Medium', consequence: 'Lack of hand hygiene is a primary cause of foodborne illness transmission.', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'HACCP-04', description: 'Check knife sanitation station for correct chemical concentration and temperature.', priority: 'High', riskLevel: 'High', consequence: 'Ineffective sanitation can lead to cross-contamination between food items.', proof: 'Sanitizer Log', location: 'Kitchen' },
                    { id: 'HACCP-05', description: 'Ensure allergen segregation is maintained in storage (separate shelves) and prep areas (color-coded boards).', priority: 'High', riskLevel: 'High', consequence: 'Cross-contamination can cause severe or fatal allergic reactions.', proof: 'Storage Audit Photo', location: 'Kitchen/Stores' },
                    { id: 'HACCP-06', description: 'Calibrate food thermometers using ice-point or boiling-point method.', priority: 'High', riskLevel: 'High', consequence: 'Inaccurate thermometers can lead to cooking food at unsafe temperatures.', proof: 'Calibration Log', location: 'Kitchen' },
                    { id: 'HACCP-07', description: 'Inspect all food contact surfaces for cleanliness before starting prep.', priority: 'High', riskLevel: 'High', consequence: 'Dirty surfaces can contaminate food with bacteria from previous preparations.', proof: 'Surface Swab Test (optional)', location: 'Prep Stations' },
                    { id: 'HACCP-08', description: 'Brief staff on the day\'s menu, highlighting any potential allergens.', priority: 'High', riskLevel: 'Medium', consequence: 'Uninformed staff may give incorrect information to guests with allergies.', proof: 'Briefing Notes', location: 'Kitchen' },
                    { id: 'HACCP-09', description: 'Check that trash bins are clean, lined, and covered.', priority: 'Medium', riskLevel: 'Low', consequence: 'Open or dirty bins attract pests, which are a major food safety risk.', proof: 'Visual Check', location: 'Waste Area' },
                    { id: 'HACCP-10', description: 'Ensure pest control traps are in place and not disturbed.', priority: 'High', riskLevel: 'High', consequence: 'Failure to manage pest control can lead to infestations and closure by health authorities.', proof: 'Pest Control Log', location: 'Kitchen Perimeter' },
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
                    { id: 'POOL-01', description: 'Test and record chlorine and pH levels of the pool water at least 3 times daily.', priority: 'High', riskLevel: 'High', consequence: 'Incorrect levels can cause skin irritation, eye infections, and allow harmful bacteria to grow.', proof: 'Water Quality Log', location: 'Poolside' },
                    { id: 'POOL-02', description: 'Verify lifeguard duty roster and ensure certified lifeguards are present and alert.', priority: 'High', riskLevel: 'High', consequence: 'Absence of a qualified lifeguard can turn a minor incident into a fatal drowning.', proof: 'Duty Roster Sign-off', location: 'Poolside' },
                    { id: 'POOL-03', description: 'Check all rescue equipment (life rings, first aid kit, spine board) is present and in good condition.', priority: 'High', riskLevel: 'High', consequence: 'Missing or broken rescue equipment can be the difference between life and death in an emergency.', proof: 'Equipment Checklist', location: 'Poolside' },
                    { id: 'POOL-04', description: 'Inspect pool deck for slip hazards, damage, or broken tiles.', priority: 'High', riskLevel: 'Medium', consequence: 'Slip and fall accidents are a major source of guest injuries and lawsuits.', proof: 'Visual Inspection Log', location: 'Pool Deck' },
                    { id: 'POOL-05', description: 'Check and log the temperature of the spa/jacuzzi.', priority: 'High', riskLevel: 'Medium', consequence: 'Water that is too hot can be dangerous, especially for children and the elderly.', proof: 'Temperature Log', location: 'Spa' },
                    { id: 'POOL-06', description: 'Ensure depth markers and safety signage are clearly visible.', priority: 'High', riskLevel: 'High', consequence: 'Lack of clear depth markers can lead to non-swimmers accidentally entering deep water.', proof: 'Visual Check', location: 'Poolside' },
                    { id: 'POOL-07', description: 'Inspect pool drains and suction fittings for any blockages or damage.', priority: 'High', riskLevel: 'High', consequence: 'A broken or blocked drain can cause powerful suction, leading to severe injury or drowning (entrapment).', proof: 'Drain Inspection Log', location: 'Pool' },
                    { id: 'POOL-08', description: 'Test the emergency phone or alarm system.', priority: 'High', riskLevel: 'High', consequence: 'In an emergency, a non-working alarm can delay response times critically.', proof: 'Test Log', location: 'Poolside' },
                    { id: 'POOL-09', description: 'Skim the pool surface to remove debris.', priority: 'Medium', riskLevel: 'Low', consequence: 'Debris is unsightly and can clog filtration systems.', proof: 'Visual Check', location: 'Pool' },
                    { id: 'POOL-10', description: 'Backwash the pool filters as per the schedule.', priority: 'High', riskLevel: 'Medium', consequence: 'Clogged filters lead to poor water quality and cloudy water.', proof: 'Backwash Log', location: 'Pump Room' },
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
                    { id: 'PM-01', description: 'Perform scheduled HVAC filter cleaning/replacement as per the master schedule.', priority: 'High', riskLevel: 'Medium', consequence: 'Clogged filters reduce cooling efficiency, increase electricity costs, and lead to poor air quality.', proof: 'Maintenance Log', location: 'HVAC Rooms' },
                    { id: 'PM-02', description: 'Conduct weekly load test of backup generators and log fuel levels.', priority: 'High', riskLevel: 'High', consequence: 'Generator failure during a power outage can disrupt the entire hotel operation, from guest check-ins to life-safety systems.', proof: 'Generator Test Log', location: 'Generator Room' },
                    { id: 'PM-03', description: 'Verify monthly elevator certification and maintenance by vendor, and check the in-lift emergency phone.', priority: 'High', riskLevel: 'High', consequence: 'Elevator malfunction can lead to guest entrapment, a major safety incident, and regulatory action.', proof: 'Vendor Certificate & Test Call Log', location: 'Elevator Shafts' },
                    { id: 'PM-04', description: 'Log all preventive maintenance activities with vendor reports and schedule next due dates.', priority: 'High', riskLevel: 'Medium', consequence: 'Without a log, there is no proof of due diligence for insurance or legal purposes, and PM tasks get missed.', proof: 'Master PM Log', location: 'Maintenance Office' },
                    { id: 'PM-05', description: 'Inspect water pumps and tanks for leaks, pressure, and functionality.', priority: 'High', riskLevel: 'Medium', consequence: 'Pump failure can lead to a complete loss of water supply to guest rooms.', proof: 'Pump Inspection Log', location: 'Pump Room' },
                    { id: 'PM-06', description: 'Check and clean kitchen exhaust hoods and ducts quarterly.', priority: 'High', riskLevel: 'High', consequence: 'Grease buildup in kitchen ducts is a major fire hazard.', proof: 'Cleaning Certificate', location: 'Kitchen' },
                    { id: 'PM-07', description: 'Test the hotel\'s fire pump and sprinkler system monthly.', priority: 'High', riskLevel: 'High', consequence: 'Failure of the fire suppression system during a fire can have catastrophic consequences.', proof: 'Fire Pump Test Log', location: 'Fire Pump Room' },
                    { id: 'PM-08', description: 'Inspect and test all gas lines and valves for leaks semi-annually.', priority: 'High', riskLevel: 'High', consequence: 'An undetected gas leak can lead to a deadly explosion.', proof: 'Gas Leak Test Report', location: 'Various' },
                    { id: 'PM-09', description: 'Service all laundry equipment as per manufacturer guidelines.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Breakdowns can halt the supply of clean linen to rooms and restaurants.', proof: 'Laundry Maintenance Log', location: 'Laundry' },
                    { id: 'PM-10', description: 'Check and maintain the central hot water system.', priority: 'High', riskLevel: 'Medium', consequence: 'Boiler failure leads to no hot water, a major source of guest complaints.', proof: 'Boiler Inspection Log', location: 'Boiler Room' },
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
                    { id: 'FIRE-01', description: 'Conduct monthly inspection of all fire extinguishers (pressure, expiry, accessibility).', priority: 'High', riskLevel: 'High', consequence: 'A non-functional extinguisher is useless in a fire.', proof: 'Extinguisher Log', location: 'Entire Property' },
                    { id: 'FIRE-02', description: 'Perform a quarterly mock evacuation drill with a specific scenario (e.g., kitchen fire).', priority: 'High', riskLevel: 'High', consequence: 'Untrained staff will panic, leading to a chaotic and dangerous evacuation.', proof: 'Drill Report', location: 'Entire Property' },
                    { id: 'FIRE-03', description: 'Log attendance and time-to-evacuate for each drill, and note any delays.', priority: 'High', riskLevel: 'High', consequence: 'Without measuring, you cannot improve evacuation times.', proof: 'Drill Attendance Sheet', location: 'Assembly Point' },
                    { id: 'FIRE-04', description: 'Perform daily checks of all stairwells and fire exits to ensure they are clear and unlocked.', priority: 'High', riskLevel: 'High', consequence: 'A blocked fire exit is a death trap and a major legal violation (e.g., Uphaar Cinema tragedy).', proof: 'Exit Clearance Log', location: 'Entire Property' },
                    { id: 'FIRE-05', description: 'Test the public address system and emergency lighting weekly.', priority: 'High', riskLevel: 'High', consequence: 'In a dark, smoke-filled building, PA announcements and emergency lights are critical for guiding people to safety.', proof: 'System Test Log', location: 'Control Room' },
                    { id: 'FIRE-06', description: 'Check that fire safety signage (exit signs, floor plans) is in place and visible.', priority: 'High', riskLevel: 'High', consequence: 'Guests and staff cannot evacuate if they don\'t know where to go.', proof: 'Signage Audit', location: 'Entire Property' },
                    { id: 'FIRE-07', description: 'Ensure kitchen fire suppression systems (e.g., Ansul) are certified and serviced annually.', priority: 'High', riskLevel: 'High', consequence: 'The most likely place for a fire to start must have a functional, automated suppression system.', proof: 'Vendor Certificate', location: 'Kitchen' },
                    { id: 'FIRE-08', description: 'Train staff on the different types of fire and how to use the correct extinguisher.', priority: 'High', riskLevel: 'High', consequence: 'Using the wrong extinguisher (e.g., water on an electrical fire) can make the situation worse.', proof: 'Training Log', location: 'Training Room' },
                    { id: 'FIRE-09', description: 'Ensure Fire Marshals are appointed and trained for each floor/department.', priority: 'High', riskLevel: 'High', consequence: 'In an evacuation, designated marshals are needed to ensure everyone gets out safely.', proof: 'Marshal List', location: 'HR' },
                    { id: 'FIRE-10', description: 'Review and update the fire emergency plan annually.', priority: 'High', riskLevel: 'High', consequence: 'An outdated plan may have incorrect contact numbers or procedures.', proof: 'Updated Plan', location: 'Safety Office' },
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
                    { id: 'VENDOR-01', description: 'Verify contractor ID and check against approved vendor list.', priority: 'High', riskLevel: 'High', consequence: 'Allows unauthorized and potentially dangerous individuals access to the property.', proof: 'Visitor Log', location: 'Security Gate' },
                    { id: 'VENDOR-02', description: 'Obtain and file a copy of the vendor\'s liability insurance and any required licenses.', priority: 'High', riskLevel: 'High', consequence: 'If an uninsured contractor causes damage or injury, the hotel could be held liable.', proof: 'Insurance & License Copy', location: 'Security Office' },
                    { id: 'VENDOR-03', description: 'Issue a time-bound work permit for a specific area, detailing the scope of work.', priority: 'High', riskLevel: 'Medium', consequence: 'Vendors may wander into guest areas or perform unauthorized work.', proof: 'Work Permit', location: 'Security Office' },
                    { id: 'VENDOR-04', description: 'Log all tools and equipment brought in and out by the contractor.', priority: 'High', riskLevel: 'Medium', consequence: 'Prevents theft of hotel property and disputes over vendor equipment.', proof: 'Tool Inventory Log', location: 'Security Gate' },
                    { id: 'VENDOR-05', description: 'Assign a supervisor to escort vendors in sensitive areas (e.g., server rooms, cash office).', priority: 'High', riskLevel: 'High', consequence: 'Leaving vendors unescorted in critical areas is a major security risk.', proof: 'Escort Log', location: 'Various' },
                    { id: 'VENDOR-06', description: 'Conduct a safety briefing before any high-risk work (e.g., hot work, electrical).', priority: 'High', riskLevel: 'High', consequence: 'Failure to brief can lead to accidents, fires, or damage to hotel systems.', proof: 'Safety Briefing Sign-off', location: 'Work Area' },
                    { id: 'VENDOR-07', description: 'Inspect the work area after completion to ensure it is clean and safe.', priority: 'High', riskLevel: 'Medium', consequence: 'Vendors may leave behind hazards that could injure guests or staff.', proof: 'Work Area Clearance Form', location: 'Work Area' },
                    { id: 'VENDOR-08', description: 'Ensure vendors follow all hotel safety and conduct policies.', priority: 'High', riskLevel: 'High', consequence: 'Vendors who don\'t follow rules can create liability and disrupt operations.', proof: 'Policy Acknowledgement Form', location: 'Security Office' },
                    { id: 'VENDOR-09', description: 'Check vendor vehicles for any unauthorized materials.', priority: 'Medium', riskLevel: 'High', consequence: 'Prevents theft of hotel assets or bringing contraband onto the property.', proof: 'Vehicle Check Log', location: 'Security Gate' },
                    { id: 'VENDOR-10', description: 'Review vendor performance and log any issues for future reference.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Failure to track performance leads to repeatedly hiring unreliable vendors.', proof: 'Vendor Performance Log', location: 'Procurement' },
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
                    { id: 'INC-01', description: 'Perform immediate triage (e.g., provide first aid, secure the area, offer assistance).', priority: 'High', riskLevel: 'High', consequence: 'A slow or incorrect initial response can worsen the situation and increase liability.', proof: 'First Action Log', location: 'Incident Site' },
                    { id: 'INC-02', description: 'Fill out a detailed incident report with photos, witness statements, and timestamps.', priority: 'High', riskLevel: 'High', consequence: 'A poorly documented incident is impossible to defend legally or for insurance claims.', proof: 'Incident Report Form', location: 'Office' },
                    { id: 'INC-03', description: 'Follow the defined escalation path for notifying GM, legal, and insurance within 1 hour.', priority: 'High', riskLevel: 'High', consequence: 'Delaying notification can breach insurance policies and hinder crisis management.', proof: 'Communication Log', location: 'Office' },
                    { id: 'INC-04', description: 'Conduct a root-cause analysis (RCA) for the incident within 24 hours.', priority: 'High', riskLevel: 'High', consequence: 'Without an RCA, the same incident is likely to happen again.', proof: 'RCA Report', location: 'Office' },
                    { id: 'INC-05', description: 'Develop and track a Corrective and Preventive Action (CAPA) plan.', priority: 'High', riskLevel: 'High', consequence: 'Lessons from the incident are not translated into concrete improvements.', proof: 'CAPA Plan', location: 'Office' },
                    { id: 'INC-06', description: 'Preserve any relevant evidence, such as CCTV footage.', priority: 'High', riskLevel: 'High', consequence: 'Loss of evidence can cripple legal defense and investigation.', proof: 'Evidence Log', location: 'Security' },
                    { id: 'INC-07', description: 'Offer a resolution to the guest if appropriate and document it.', priority: 'High', riskLevel: 'High', consequence: 'Poor handling of the guest can lead to negative publicity and lawsuits.', proof: 'Guest Resolution Form', location: 'Office' },
                    { id: 'INC-08', description: 'Communicate with the guest to show empathy and provide updates.', priority: 'High', riskLevel: 'High', consequence: 'Lack of communication makes the hotel seem uncaring and can escalate guest anger.', proof: 'Communication Log', location: 'Office' },
                    { id: 'INC-09', description: 'Brief the team on the incident to prevent recurrence.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Fails to spread organizational learning from the event.', proof: 'Briefing Notes', location: 'Office' },
                    { id: 'INC-10', description: 'Review the incident report for trends and update risk assessments.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Missed opportunity to identify recurring problems and systemic risks.', proof: 'Risk Assessment Update', location: 'Safety Office' },
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
                    { id: 'SEC-CCTV-01', description: 'Perform hourly patrols or virtual tours of key areas (lobby, perimeter, parking) via CCTV.', priority: 'High', riskLevel: 'High', consequence: 'Passive monitoring misses critical incidents as they happen.', proof: 'CCTV Log', location: 'Control Room' },
                    { id: 'SEC-CCTV-02', description: 'Log any suspicious activity with timestamps, descriptions, and save relevant footage.', priority: 'High', riskLevel: 'High', consequence: 'Untracked activity provides no intelligence for preventing future incidents.', proof: 'Incident Log', location: 'Control Room' },
                    { id: 'SEC-CCTV-03', description: 'Verify all cameras are recording, have clear views, and correct timestamp.', priority: 'High', riskLevel: 'High', consequence: 'A non-functional camera creates a blind spot; incorrect time makes footage useless as evidence.', proof: 'System Health Check', location: 'Control Room' },
                    { id: 'SEC-CCTV-04', description: 'Ensure footage is backed up according to the data retention policy (e.g., 30 days).', priority: 'High', riskLevel: 'High', consequence: 'Footage may be overwritten before an investigation is complete, resulting in loss of crucial evidence.', proof: 'Backup Log', location: 'Server Room' },
                    { id: 'SEC-CCTV-05', description: 'Test panic alarm functionality and response weekly.', priority: 'High', riskLevel: 'High', consequence: 'A failed panic alarm can delay response in a robbery or other emergency.', proof: 'Test Log', location: 'Various' },
                    { id: 'SEC-CCTV-06', description: 'Monitor baggage screening process for any threats.', priority: 'High', riskLevel: 'High', consequence: 'Allows weapons or other contraband to enter the hotel.', proof: 'Screening Log', location: 'Entrance' },
                    { id: 'SEC-CCTV-07', description: 'Check access control system logs for any unauthorized access attempts.', priority: 'High', riskLevel: 'High', consequence: 'Misses early warning signs of a potential breach.', proof: 'Access Control Log', location: 'System' },
                    { id: 'SEC-CCTV-08', description: 'Ensure all security personnel are at their posts.', priority: 'High', riskLevel: 'High', consequence: 'An unmanned post creates a vulnerability in the security layer.', proof: 'Roster Check', location: 'Control Room' },
                    { id: 'SEC-CCTV-09', description: 'Coordinate with local law enforcement during any major incident.', priority: 'High', riskLevel: 'High', consequence: 'A disorganized response can lead to delays and conflicting actions.', proof: 'Communication Log', location: 'Control Room' },
                    { id: 'SEC-CCTV-10', description: 'Maintain confidentiality of all security footage and information.', priority: 'High', riskLevel: 'High', consequence: 'Leaking footage can violate guest privacy and compromise investigations.', proof: 'Confidentiality Agreement', location: 'HR' },
                ]
            }
        ]
    },
    {
        id: 'restaurants',
        title: "Restaurant Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/c8b2a3c7-60f6-4a41-8c46-17c38586c9d1',
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
                { name: "FSSAI", description: "Compliance with Food Safety and Standards Authority of India regulations." },
                { name: "HACCP", description: "Follows Hazard Analysis and Critical Control Points principles." },
                { name: "ISO 22000", description: "Adheres to international standards for food safety management." },
                { name: "Codex Alimentarius", description: "International food standards from the WHO/FAO." }
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
                    { id: 'KO-01', description: 'Check and log temperatures of all refrigerators and freezers.', priority: 'High', riskLevel: 'High', consequence: 'Failure can lead to bacterial growth and foodborne illness outbreaks.', proof: 'Temp Log', location: 'Kitchen' },
                    { id: 'KO-02', description: 'Ensure separate cutting boards and utensils are used for veg/non-veg prep.', priority: 'High', riskLevel: 'High', consequence: 'Prevents cross-contamination, which can cause severe allergic reactions or food poisoning.', proof: 'Visual Audit', location: 'Prep Stations' },
                    { id: 'KO-03', description: 'Verify all cleaning chemical bottles are correctly labeled.', priority: 'High', riskLevel: 'Medium', consequence: 'Prevents accidental chemical contamination of food, which can be toxic.', proof: 'Visual Check', location: 'Chemical Store' },
                    { id: 'KO-04', description: 'Check that all equipment safety guards are in place and functional.', priority: 'High', riskLevel: 'High', consequence: 'Missing guards can lead to severe injuries, amputations, and regulatory fines.', proof: 'Equipment Check Log', location: 'Kitchen' },
                    { id: 'KO-05', description: 'Ensure handwash stations are stocked with soap and sanitizer.', priority: 'High', riskLevel: 'Medium', consequence: 'Lack of hand hygiene is a primary cause of foodborne illness transmission.', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'KO-06', description: 'Calibrate food thermometers.', priority: 'High', riskLevel: 'High', consequence: 'Inaccurate readings can lead to serving undercooked, unsafe food.', proof: 'Calibration Log', location: 'Kitchen' },
                    { id: 'KO-07', description: 'Check that exhaust hoods and ventilation are working.', priority: 'High', riskLevel: 'Medium', consequence: 'Poor ventilation is a fire risk and creates an unsafe working environment.', proof: 'System Check', location: 'Kitchen' },
                    { id: 'KO-08', description: 'Ensure first aid kit is stocked.', priority: 'High', riskLevel: 'Medium', consequence: 'Inability to treat common kitchen injuries like cuts and burns.', proof: 'First Aid Kit Log', location: 'Kitchen' },
                    { id: 'KO-09', description: 'Check that the fire suppression system is armed and ready.', priority: 'High', riskLevel: 'High', consequence: 'A failed system can lead to a catastrophic kitchen fire.', proof: 'System Check', location: 'Kitchen' },
                    { id: 'KO-10', description: 'Brief the kitchen team on the day\'s menu and any specials.', priority: 'Medium', riskLevel: 'Low', consequence: 'Lack of communication leads to inconsistency and errors during service.', proof: 'Briefing Notes', location: 'Kitchen' },
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
                    { id: 'CSM-01', description: 'Log cold storage temperatures twice daily.', priority: 'High', riskLevel: 'High', consequence: 'Failure to monitor can lead to thousands of dollars in spoiled inventory.', proof: 'Temperature Log', location: 'Cold Storage' },
                    { id: 'CSM-02', description: 'Verify digital logs if available.', priority: 'High', riskLevel: 'High', consequence: 'Provides a continuous record and helps identify intermittent faults.', proof: 'Digital Log Review', location: 'System' },
                    { id: 'CSM-03', description: 'Test temperature alarms weekly.', priority: 'High', riskLevel: 'High', consequence: 'A non-functional alarm means a temperature failure overnight goes unnoticed.', proof: 'Alarm Test Log', location: 'Cold Storage' },
                    { id: 'CSM-04', description: 'Follow escalation procedure for any temperature deviations.', priority: 'High', riskLevel: 'High', consequence: 'A slow response can result in the loss of all stock in the unit.', proof: 'Incident Report', location: 'Office' },
                    { id: 'CSM-05', description: 'Check for any signs of frost buildup or door seal damage.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Indicates poor efficiency and potential temperature problems.', proof: 'Visual Inspection Log', location: 'Cold Storage' },
                    { id: 'CSM-06', description: 'Ensure cold storage units are clean and organized.', priority: 'High', riskLevel: 'Medium', consequence: 'Disorganization can lead to cross-contamination and wasted food.', proof: 'Cleaning Log', location: 'Cold Storage' },
                    { id: 'CSM-07', description: 'Keep raw and cooked foods stored separately.', priority: 'High', riskLevel: 'High', consequence: 'A primary cause of bacterial cross-contamination.', proof: 'Storage Audit', location: 'Cold Storage' },
                    { id: 'CSM-08', description: 'Ensure all items are labeled with date of receipt.', priority: 'High', riskLevel: 'Medium', consequence: 'Makes it impossible to follow FIFO and increases spoilage.', proof: 'Labeling Audit', location: 'Cold Storage' },
                    { id: 'CSM-09', description: 'Do not overload shelves to allow for proper air circulation.', priority: 'High', riskLevel: 'Medium', consequence: 'Overloading creates hot spots where food can spoil.', proof: 'Visual Check', location: 'Cold Storage' },
                    { id: 'CSM-10', description: 'Report any maintenance issues with the units immediately.', priority: 'High', riskLevel: 'High', consequence: 'Delaying repairs can lead to complete equipment failure.', proof: 'Maintenance Request', location: 'System' },
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
                    { id: 'ALLERGEN-01', description: 'Server to clearly flag allergy on the order ticket (KOT).', priority: 'High', riskLevel: 'High', consequence: 'If the kitchen is not alerted, no special precautions will be taken.', proof: 'KOT with Allergy Flag', location: 'POS' },
                    { id: 'ALLERGEN-02', description: 'Chef to use designated, sanitized utensils and a separate prep area for the allergy order.', priority: 'High', riskLevel: 'High', consequence: 'Cross-contamination is a primary cause of allergic reactions in restaurants.', proof: 'CCTV/Visual Check', location: 'Kitchen' },
                    { id: 'ALLERGEN-03', description: 'Manager to double-check the special diet plate against the ticket before it leaves the kitchen.', priority: 'High', riskLevel: 'High', consequence: 'Provides a final, critical safety check to catch any errors.', proof: 'Dispatch Log', location: 'Kitchen Pass' },
                    { id: 'ALLERGEN-04', description: 'Maintain an up-to-date allergen matrix for all menu items and share with service staff.', priority: 'High', riskLevel: 'High', consequence: 'Servers giving incorrect information to guests can have fatal consequences.', proof: 'Allergen Matrix Document', location: 'POS/Kitchen' },
                    { id: 'ALLERGEN-05', description: 'Server verbally confirms the special meal with the guest upon delivery to the table.', priority: 'High', riskLevel: 'High', consequence: 'Ensures the correct person receives the specially prepared meal.', proof: 'Verbal Confirmation Protocol', location: 'Guest Table' },
                    { id: 'ALLERGEN-06', description: 'Change gloves and wash hands before and after handling an allergen-free order.', priority: 'High', riskLevel: 'High', consequence: 'Prevents transfer of allergens from other dishes.', proof: 'CCTV/Supervisor Audit', location: 'Kitchen' },
                    { id: 'ALLERGEN-07', description: 'Use a special plate or marker for allergy-safe dishes.', priority: 'High', riskLevel: 'Medium', consequence: 'Provides a clear visual cue to all staff and the guest.', proof: 'Special Plate Photo', location: 'Kitchen' },
                    { id: 'ALLERGEN-08', description: 'Train all FOH and BOH staff on the severity of food allergies.', priority: 'High', riskLevel: 'High', consequence: 'Lack of training leads to a casual attitude and dangerous mistakes.', proof: 'Training Log', location: 'HR' },
                    { id: 'ALLERGEN-09', description: 'If unsure about an ingredient, always assume it contains the allergen and inform the guest.', priority: 'High', riskLevel: 'High', consequence: 'Guessing can be fatal. The "if in doubt, leave it out" rule is paramount.', proof: 'Policy Document', location: 'Kitchen' },
                    { id: 'ALLERGEN-10', description: 'Document any incidents related to allergies for review.', priority: 'High', riskLevel: 'High', consequence: 'Failure to learn from near-misses will eventually lead to a major incident.', proof: 'Incident Report', location: 'Office' },
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
                    { id: 'SANIT-01', description: 'Log completion of daily surface sanitization.', priority: 'High', riskLevel: 'High', consequence: 'Buildup of bacteria on surfaces can lead to cross-contamination.', proof: 'Daily Cleaning Log', location: 'Kitchen/Dining' },
                    { id: 'SANIT-02', description: 'Perform and log weekly deep clean of kitchen hoods and ducts.', priority: 'High', riskLevel: 'High', consequence: 'Grease buildup in hoods is a major fire hazard.', proof: 'Weekly Deep Clean Log', location: 'Kitchen' },
                    { id: 'SANIT-03', description: 'Review and file monthly pest control vendor report.', priority: 'High', riskLevel: 'High', consequence: 'Pest infestations can lead to closure by health authorities and massive brand damage.', proof: 'Vendor Report', location: 'Office' },
                    { id: 'SANIT-04', description: 'Check and clean grease traps weekly.', priority: 'High', riskLevel: 'Medium', consequence: 'Blocked grease traps can cause foul odors and drainage blockages.', proof: 'Grease Trap Log', location: 'Kitchen' },
                    { id: 'SANIT-05', description: 'Ensure waste bins are emptied and sanitized daily.', priority: 'High', riskLevel: 'Medium', consequence: 'Overflowing bins attract pests and create unsanitary conditions.', proof: 'Waste Management Log', location: 'Waste Area' },
                    { id: 'SANIT-06', description: 'Sanitize all food contact surfaces between tasks.', priority: 'High', riskLevel: 'High', consequence: 'Prevents cross-contamination between different food types.', proof: 'Visual Audit', location: 'Kitchen' },
                    { id: 'SANIT-07', description: 'Deep clean floors and drains weekly.', priority: 'High', riskLevel: 'Medium', consequence: 'Dirty floors and drains can harbor bacteria and attract pests.', proof: 'Floor Cleaning Log', location: 'Kitchen' },
                    { id: 'SANIT-08', description: 'Clean and descale dishwashers monthly.', priority: 'High', riskLevel: 'Medium', consequence: 'Ensures dishes are being sanitized at the correct temperature.', proof: 'Dishwasher Log', location: 'Dishwashing Area' },
                    { id: 'SANIT-09', description: 'Check that cleaning chemicals are stored safely and correctly.', priority: 'High', riskLevel: 'High', consequence: 'Improper storage can lead to chemical contamination of food.', proof: 'Chemical Store Audit', location: 'Chemical Store' },
                    { id: 'SANIT-10', description: 'Train staff on correct cleaning procedures and chemical use.', priority: 'High', riskLevel: 'High', consequence: 'Improper use of chemicals can be ineffective or dangerous.', proof: 'Training Log', location: 'HR' },
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
                    { id: 'INC-REST-01', description: 'Document customer complaint in the incident log.', priority: 'High', riskLevel: 'High', consequence: 'Lack of documentation makes it impossible to track trends or defend against legal claims.', proof: 'Incident Log', location: 'Office' },
                    { id: 'INC-REST-02', description: 'Quarantine and label any suspected contaminated food batch.', priority: 'High', riskLevel: 'High', consequence: 'Failure to quarantine can lead to more customers being affected.', proof: 'Quarantine Log & Photo', location: 'Kitchen' },
                    { id: 'INC-REST-03', description: 'Notify the local health authority if the incident is severe (e.g., multiple cases of food poisoning).', priority: 'High', riskLevel: 'High', consequence: 'Failure to report can lead to severe legal penalties.', proof: 'Notification Record', location: 'Office' },
                    { id: 'INC-REST-04', description: 'Offer a resolution to the guest (e.g., refund, complimentary meal) and document it.', priority: 'High', riskLevel: 'Medium', consequence: 'Poor handling of the complaint can escalate the situation.', proof: 'Guest Resolution Log', location: 'Office' },
                    { id: 'INC-REST-05', description: 'Conduct a root cause analysis of the incident with the kitchen team.', priority: 'High', riskLevel: 'High', consequence: 'Without RCA, the same mistake is likely to happen again.', proof: 'RCA Report', location: 'Office' },
                    { id: 'INC-REST-06', description: 'Collect contact information from the affected guest for follow-up.', priority: 'High', riskLevel: 'High', consequence: 'Shows accountability and allows for follow-up communication.', proof: 'Contact Form', location: 'Office' },
                    { id: 'INC-REST-07', description: 'Preserve any food samples for testing if necessary.', priority: 'High', riskLevel: 'High', consequence: 'Crucial evidence for determining the cause of the incident.', proof: 'Sample Log', location: 'Lab/Kitchen' },
                    { id: 'INC-REST-08', description: 'Interview all staff involved in the incident.', priority: 'High', riskLevel: 'High', consequence: 'Helps to understand the sequence of events and identify process gaps.', proof: 'Interview Notes', location: 'Office' },
                    { id: 'INC-REST-09', description: 'Implement corrective actions to prevent recurrence.', priority: 'High', riskLevel: 'High', consequence: 'Turns a negative incident into a process improvement opportunity.', proof: 'CAPA Plan', location: 'Office' },
                    { id: 'INC-REST-10', description: 'Review similar incidents to identify trends.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Helps to identify systemic problems rather than just isolated mistakes.', proof: 'Trend Analysis Report', location: 'Office' },
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
                    { id: 'RM-01', description: 'Verify vendor FSSAI license is valid.', priority: 'High', riskLevel: 'High', consequence: 'Using ingredients from an unlicensed vendor is a major legal violation.', proof: 'Vendor File', location: 'Receiving' },
                    { id: 'RM-02', description: 'Inspect delivery vehicle for cleanliness and temperature control.', priority: 'High', riskLevel: 'High', consequence: 'A dirty or warm truck can contaminate the entire delivery.', proof: 'Vehicle Inspection Log', location: 'Receiving' },
                    { id: 'RM-03', description: 'Check temperature of perishable goods upon arrival.', priority: 'High', riskLevel: 'High', consequence: 'Accepting goods outside the safe temperature range is a major food safety risk.', proof: 'Temperature Log', location: 'Receiving' },
                    { id: 'RM-04', description: 'Reject and document any items that do not meet quality standards.', priority: 'High', riskLevel: 'High', consequence: 'Accepting sub-par ingredients leads to a sub-par final product.', proof: 'Rejection Note', location: 'Receiving' },
                    { id: 'RM-05', description: 'Ensure goods are moved to appropriate storage immediately after receipt.', priority: 'High', riskLevel: 'Medium', consequence: 'Leaving perishable items in the "danger zone" allows bacteria to grow.', proof: 'CCTV review', location: 'Receiving/Storage' },
                    { id: 'RM-06', description: 'Check for signs of pests in packaging.', priority: 'High', riskLevel: 'High', consequence: 'Can introduce a pest infestation into your facility.', proof: 'Visual Inspection Log', location: 'Receiving' },
                    { id: 'RM-07', description: 'Verify that packaging is intact and not damaged.', priority: 'High', riskLevel: 'High', consequence: 'Damaged packaging can lead to contamination.', proof: 'Visual Check', location: 'Receiving' },
                    { id: 'RM-08', description: 'Match the delivery challan with the purchase order.', priority: 'High', riskLevel: 'High', consequence: 'Prevents incorrect deliveries and billing errors.', proof: 'Document Match', location: 'Receiving' },
                    { id: 'RM-09', description: 'Check the "best before" or expiry dates of all products.', priority: 'High', riskLevel: 'High', consequence: 'Accepting near-expiry goods leads to waste and potential safety issues.', proof: 'Date Check Log', location: 'Receiving' },
                    { id: 'RM-10', description: 'Record all received goods in the inventory system.', priority: 'High', riskLevel: 'High', consequence: 'Inaccurate receiving leads to incorrect inventory levels.', proof: 'System Entry', location: 'System' },
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
                    { id: 'SH-01', description: "Conduct daily checks for clean uniforms, nails, and hairnets.", priority: 'High', riskLevel: 'Medium', consequence: 'Poor personal hygiene can lead to food contamination.', proof: 'Daily Staff Audit Log', location: 'Entry Point' },
                    { id: 'SH-02', description: "Perform random audits of handwashing procedures.", priority: 'High', riskLevel: 'High', consequence: 'Improper handwashing is a leading cause of foodborne illness.', proof: 'Handwashing Audit', location: 'Kitchen' },
                    { id: 'SH-03', description: "Conduct and document monthly refresher training on hygiene.", priority: 'High', riskLevel: 'Medium', consequence: 'Staff forget procedures over time; regular training reinforces good habits.', proof: 'Training Records', location: 'Training Room' },
                    { id: 'SH-04', description: "Screen new staff for any communicable diseases.", priority: 'High', riskLevel: 'High', consequence: 'A sick food handler can cause a major outbreak.', proof: 'Medical Fitness Certificate', location: 'HR File' },
                    { id: 'SH-05', description: "Ensure 'Staff Only' areas are clearly marked and access is restricted.", priority: 'Medium', riskLevel: 'Low', consequence: 'Prevents unauthorized personnel from entering food prep areas.', proof: 'Visual check and signage', location: 'Back of House' },
                    { id: 'SH-06', description: "Provide and enforce the use of gloves for handling ready-to-eat foods.", priority: 'High', riskLevel: 'High', consequence: 'Prevents direct hand-to-food contamination.', proof: 'Glove Usage Audit', location: 'Kitchen' },
                    { id: 'SH-07', description: "Ensure a 'no jewelry' policy is followed by kitchen staff.", priority: 'High', riskLevel: 'High', consequence: 'Jewelry can fall into food, creating a physical hazard.', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'SH-08', description: "Maintain records of all staff hygiene training.", priority: 'High', riskLevel: 'Medium', consequence: 'Crucial for proving due diligence during a health inspection.', proof: 'Master Training File', location: 'HR' },
                    { id: 'SH-09', description: "Have a clear policy for staff who are sick.", priority: 'High', riskLevel: 'High', consequence: 'Prevents sick employees from coming to work and spreading illness.', proof: 'Sick Leave Policy', location: 'HR' },
                    { id: 'SH-10', description: "Ensure staff have access to and use hand sanitizers.", priority: 'High', riskLevel: 'Medium', consequence: 'Provides an extra layer of hygiene control.', proof: 'Supply Check', location: 'Kitchen' },
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
                    { id: 'WP-01', description: "Ensure waste is segregated into designated bins (wet, dry, recyclable).", priority: 'High', riskLevel: 'Medium', consequence: 'Required by law in many areas and better for the environment.', proof: 'Waste Segregation Audit', location: 'Waste Area' },
                    { id: 'WP-02', description: "Follow a schedule for cleaning and sanitizing all waste bins.", priority: 'High', riskLevel: 'Medium', consequence: 'Dirty bins attract pests and create foul odors.', proof: 'Bin Cleaning Log', location: 'Waste Area' },
                    { id: 'WP-03', description: "Inspect pest control traps and bait stations weekly.", priority: 'High', riskLevel: 'High', consequence: 'Allows for early detection of pest activity.', proof: 'Pest Trap Log', location: 'Various' },
                    { id: 'WP-04', description: "Review and file the monthly service report from the pest control vendor.", priority: 'High', riskLevel: 'High', consequence: 'Provides a professional assessment and is crucial for health audits.', proof: 'Vendor Report', location: 'Office' },
                    { id: 'WP-05', description: "Keep external waste area clean to deter pests.", priority: 'High', riskLevel: 'High', consequence: 'An overflowing external bin is an open invitation for rodents and flies.', proof: 'Photo Log', location: 'External Area' },
                    { id: 'WP-06', description: "Ensure all drains are clean and free-flowing.", priority: 'High', riskLevel: 'Medium', consequence: 'Blocked drains can harbor bacteria and create pest breeding grounds.', proof: 'Drain Cleaning Log', location: 'Kitchen' },
                    { id: 'WP-07', description: "Check for any signs of pest activity (droppings, gnaw marks).", priority: 'High', riskLevel: 'High', consequence: 'Early detection is key to preventing a full-blown infestation.', proof: 'Pest Activity Log', location: 'Various' },
                    { id: 'WP-08', description: "Ensure all doors and windows are properly sealed to prevent pest entry.", priority: 'High', riskLevel: 'High', consequence: 'Prevents pests from entering the premises.', proof: 'Structural Audit', location: 'Perimeter' },
                    { id: 'WP-09', description: "Train staff on pest awareness and reporting.", priority: 'Medium', riskLevel: 'Medium', consequence: 'Staff are the first line of defense in spotting pest issues.', proof: 'Training Log', location: 'HR' },
                    { id: 'WP-10', description: "Dispose of waste in a timely manner to avoid accumulation.", priority: 'High', riskLevel: 'High', consequence: 'Accumulated waste is a primary attractant for pests.', proof: 'Waste Disposal Log', location: 'Waste Area' },
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
                    { id: 'EOD-01', description: "Reconcile all cash, card, and digital payments against POS sales.", priority: 'High', riskLevel: 'High', consequence: 'Failure to reconcile can hide theft or major accounting errors.', proof: 'Sales Reconciliation Report', location: 'Office' },
                    { id: 'EOD-02', description: "Ensure all kitchen equipment is properly shut down and cleaned.", priority: 'High', riskLevel: 'High', consequence: 'Leaving equipment on overnight is a fire hazard and wastes energy.', proof: 'Kitchen Closing Checklist', location: 'Kitchen' },
                    { id: 'EOD-03', description: "Verify that the main gas line to the kitchen is turned off.", priority: 'High', riskLevel: 'High', consequence: 'A gas leak overnight can lead to a catastrophic explosion.', proof: 'Gas Valve Check Log', location: 'Kitchen' },
                    { id: 'EOD-04', description: "Secure all doors and windows, and activate the security alarm.", priority: 'High', riskLevel: 'High', consequence: 'Leaving the premises unsecured is an open invitation for burglary.', proof: 'Security Log', location: 'Premises' },
                    { id: 'EOD-05', description: "Complete the manager's closing report, noting any incidents or issues.", priority: 'High', riskLevel: 'Medium', consequence: 'Loses valuable information for the next day\'s team.', proof: 'Manager Logbook', location: 'Office' },
                    { id: 'EOD-06', description: "Store all perishable food items correctly.", priority: 'High', riskLevel: 'High', consequence: 'Improper storage leads to spoilage and waste.', proof: 'Storage Check', location: 'Kitchen' },
                    { id: 'EOD-07', description: "Empty all trash cans and clean the waste area.", priority: 'High', riskLevel: 'Medium', consequence: 'Prevents overnight pest activity and odors.', proof: 'Waste Area Log', location: 'Waste Area' },
                    { id: 'EOD-08', description: "Turn off all non-essential lights and electronics.", priority: 'High', riskLevel: 'Low', consequence: 'Wastes energy and increases utility costs.', proof: 'Visual Check', location: 'Entire Premises' },
                    { id: 'EOD-09', description: "Lock up all alcoholic beverages.", priority: 'High', riskLevel: 'High', consequence: 'Prevents theft of high-value liquor stock.', proof: 'Liquor Storage Log', location: 'Bar/Storage' },
                    { id: 'EOD-10', description: "Check that all restrooms are clean and stocked for the next day.", priority: 'Medium', riskLevel: 'Low', consequence: 'Ensures the restaurant is ready for the first customers of the day.', proof: 'Restroom Check', location: 'Restrooms' },
                ]
            }
        ]
    },
    // --- Retail ---
    {
        id: 'fashion_and_apparel_retail',
        title: "Fashion & Apparel Retail Pack",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f135b131-7b02-466a-9311-6c518b5c9077',
        category: "Retail",
        description: "A specialized toolkit for fashion retailers to manage seasonal inventory, optimize visual merchandising, and prevent shrinkage.",
        icon: <Shirt />,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Fashion Retail Owners", "Store Managers", "Merchandisers", "Heads of Retail", "Head of Visual Merchandising", "COO"],
        sampleItems: [
            { text: "Streamline inventory turnover with a seasonal stock & markdown management system.", icon: <Recycle /> },
            { text: "Create stunning, brand-aligned stores with visual merchandising and display audits.", icon: <GalleryVertical /> },
            { text: "Reduce theft with secure fitting room operations and security protocols.", icon: <DoorClosed /> },
            { text: "Master modern retail with seamless omni-channel operations (Click-and-Collect, Returns).", icon: <LinkIcon /> },
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
                { name: "WRAP", description: "A leading standard for ethical manufacturing in the apparel industry." },
                { name: "OSHA Retail Safety", description: "Guidelines for workplace safety in retail environments." }
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
                    { id: 'FA-OPEN-01', description: 'Boot up POS systems and verify connectivity.', priority: 'High', riskLevel: 'Medium', consequence: 'Inability to process sales at opening, leading to customer frustration and lost revenue.', proof: 'POS Login Screen', location: 'Cash Desk' },
                    { id: 'FA-OPEN-02', description: 'Verify and log the opening cash float.', priority: 'High', riskLevel: 'High', consequence: 'Can lead to cash discrepancies and makes it difficult to track theft or errors.', proof: 'Float Log', location: 'Cash Office' },
                    { id: 'FA-OPEN-03', description: 'Check CCTV system is recording and all cameras are operational.', priority: 'High', riskLevel: 'High', consequence: 'A non-functional camera creates a security blind spot, making the store vulnerable to theft and providing no evidence for incidents.', proof: 'CCTV Monitor', location: 'Security Office' },
                    { id: 'FA-OPEN-04', description: 'Check store displays against the current Visual Merchandising planogram.', priority: 'High', riskLevel: 'Low', consequence: 'Inconsistent branding and missed promotional opportunities, leading to lower sales.', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'FA-OPEN-05', description: 'Ensure fitting rooms are clean and clear of merchandise.', priority: 'High', riskLevel: 'Medium', consequence: 'A messy fitting room creates a poor customer experience and can be a hiding place for stolen items.', proof: 'Visual Check', location: 'Fitting Rooms' },
                    { id: 'FA-OPEN-06', description: 'Turn on all lights and music.', priority: 'Medium', riskLevel: 'Low', consequence: 'A dark or silent store is uninviting to customers.', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'FA-OPEN-07', description: 'Ensure all staff are in position for store opening.', priority: 'High', riskLevel: 'Low', consequence: 'Lack of staff on the floor leads to poor customer service at opening.', proof: 'Staff Roster Check', location: 'Sales Floor' },
                    { id: 'FA-OPEN-08', description: 'Brief staff on daily targets and promotions.', priority: 'High', riskLevel: 'Medium', consequence: 'Uninformed staff cannot effectively sell promotions or work towards targets.', proof: 'Briefing Notes', location: 'Back Office' },
                    { id: 'FA-OPEN-09', description: 'Check that all signage is correct and in place.', priority: 'High', riskLevel: 'Medium', consequence: 'Incorrect pricing or promotional signs can lead to customer disputes.', proof: 'Signage Audit', location: 'Sales Floor' },
                    { id: 'FA-OPEN-10', description: 'Unlock all necessary doors for customer access.', priority: 'High', riskLevel: 'High', consequence: 'Failure to open on time leads to lost sales and customer frustration.', proof: 'Physical Check', location: 'Entrance' },
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
                    { id: 'VM-AUDIT-01', description: 'Ensure all mannequins are styled according to the weekly VM guide.', priority: 'High', riskLevel: 'Low', consequence: 'Poor styling makes the product look unappealing and hurts sales.', proof: 'Photo of Mannequins', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-02', description: 'Check all display lighting is functional and correctly focused.', priority: 'High', riskLevel: 'Medium', consequence: 'Poor lighting can make expensive merchandise look cheap.', proof: 'Lighting Audit', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-03', description: 'Verify all promotional and price signage is accurate and in good condition.', priority: 'High', riskLevel: 'Medium', consequence: 'Incorrect prices lead to customer disputes and legal compliance issues.', proof: 'Signage Check', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-04', description: 'Inspect all fixtures for safety, ensuring no loose parts or sharp edges.', priority: 'High', riskLevel: 'High', consequence: 'A broken fixture can cause injury to a customer or staff member, leading to a lawsuit.', proof: 'Fixture Safety Log', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-05', description: 'Ensure window displays are clean and compelling.', priority: 'High', riskLevel: 'Low', consequence: 'The window display is the store\'s primary advertisement; a poor display loses customers.', proof: 'Photo of Window', location: 'Storefront' },
                    { id: 'VM-AUDIT-06', description: 'Check that merchandise is folded or hung correctly.', priority: 'High', riskLevel: 'Low', consequence: 'A messy store looks unprofessional and makes it hard for customers to shop.', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-07', description: 'Ensure sizing information is clearly visible.', priority: 'High', riskLevel: 'Low', consequence: 'Customers get frustrated if they cannot easily find their size.', proof: 'Sizing Check', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-08', description: 'Replenish stock on displays as needed.', priority: 'High', riskLevel: 'Medium', consequence: 'Empty displays mean lost sales opportunities.', proof: 'Replenishment Log', location: 'Sales Floor' },
                    { id: 'VM-AUDIT-09', description: 'Rotate displays to keep the store looking fresh.', priority: 'Medium', riskLevel: 'Low', consequence: 'A static store layout becomes boring for regular customers.', proof: 'Rotation Schedule', location: 'Office' },
                    { id: 'VM-AUDIT-10', description: 'Get feedback from the store manager on the displays.', priority: 'Medium', riskLevel: 'Low', consequence: 'Missed opportunity to align VM efforts with sales data and store traffic.', proof: 'Feedback Form', location: 'Office' },
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
                    { id: 'INV-RECON-01', description: 'Perform daily cycle counts on designated high-value items.', priority: 'High', riskLevel: 'High', consequence: 'Failure to count high-value items daily can allow major theft to go unnoticed for weeks.', proof: 'Daily Count Sheet', location: 'Stockroom/Floor' },
                    { id: 'INV-RECON-02', description: 'Conduct scheduled weekly cycle counts for other categories.', priority: 'High', riskLevel: 'Medium', consequence: 'Less frequent counts lead to larger discrepancies and harder investigations.', proof: 'Weekly Count Sheet', location: 'Stockroom/Floor' },
                    { id: 'INV-RECON-03', description: 'Investigate any count variances within 24 hours.', priority: 'High', riskLevel: 'High', consequence: 'The longer the delay, the harder it is to find the root cause of the discrepancy (theft, damage, or mis-shipment).', proof: 'Variance Report', location: 'Office' },
                    { id: 'INV-RECON-04', description: 'Process inventory adjustments only with supervisor sign-off.', priority: 'High', riskLevel: 'High', consequence: 'Unauthorized adjustments can be used to cover up theft.', proof: 'Signed Adjustment Form', location: 'System' },
                    { id: 'INV-RECON-05', description: 'Analyze shrinkage report monthly to identify trends.', priority: 'High', riskLevel: 'High', consequence: 'Without analysis, you cannot identify patterns of theft or process errors to fix them.', proof: 'Shrinkage Analysis', location: 'Office' },
                    { id: 'INV-RECON-06', description: 'Conduct a full stock take bi-annually.', priority: 'High', riskLevel: 'High', consequence: 'A necessary step for accurate financial reporting and identifying systemic issues.', proof: 'Stock Take Report', location: 'Store-wide' },
                    { id: 'INV-RECON-07', description: 'Reconcile physical stock with system stock after a full count.', priority: 'High', riskLevel: 'High', consequence: 'The final step to ensure inventory data is accurate for financial accounting.', proof: 'Reconciliation Report', location: 'Office' },
                    { id: 'INV-RECON-08', description: 'Implement corrective actions to address shrinkage issues.', priority: 'High', riskLevel: 'High', consequence: 'Identified problems will persist and continue to cause losses.', proof: 'CAPA Plan', location: 'Office' },
                    { id: 'INV-RECON-09', description: 'Train staff on correct inventory handling procedures.', priority: 'High', riskLevel: 'Medium', consequence: 'Untrained staff are a major source of inventory errors.', proof: 'Training Log', location: 'Office' },
                    { id: 'INV-RECON-10', description: 'Secure the stockroom and restrict access.', priority: 'High', riskLevel: 'High', consequence: 'An open stockroom is a major opportunity for theft.', proof: 'Access Log', location: 'Stockroom' },
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
                    { id: 'TRIAL-01', description: 'Limit customers to a set number of items per trial.', priority: 'High', riskLevel: 'High', consequence: 'Allowing too many items at once makes it easy for thieves to conceal unpaid merchandise.', proof: 'Policy Signage', location: 'Fitting Room Entrance' },
                    { id: 'TRIAL-02', description: 'Staff to be present at fitting room entrance to monitor items.', priority: 'High', riskLevel: 'High', consequence: 'An unmanned fitting room is a prime target for theft.', proof: 'Staff Roster', location: 'Fitting Room Area' },
                    { id: 'TRIAL-03', description: 'Check and sanitize each trial room after use.', priority: 'High', riskLevel: 'Medium', consequence: 'Creates a poor, unhygienic experience for the next customer.', proof: 'Cleaning Log', location: 'Fitting Rooms' },
                    { id: 'TRIAL-04', description: 'Log any lost property found in the trial rooms.', priority: 'Medium', riskLevel: 'Low', consequence: 'Failure to log lost property makes it difficult to return items to their owners.', proof: 'Lost Property Log', location: 'Cash Desk' },
                    { id: 'TRIAL-05', description: 'Inspect rooms for hidden tags or security device tampering.', priority: 'High', riskLevel: 'High', consequence: 'Missed opportunity to detect theft attempts in progress.', proof: 'Inspection Log', location: 'Fitting Rooms' },
                    { id: 'TRIAL-06', description: 'Count items before and after the customer uses the trial room.', priority: 'High', riskLevel: 'High', consequence: 'The most effective way to prevent items from being stolen from the fitting room.', proof: 'Item Count Log', location: 'Fitting Room Entrance' },
                    { id: 'TRIAL-07', description: 'Handle returned items from the trial room correctly (re-hang, return to floor).', priority: 'High', riskLevel: 'Low', consequence: 'A pile of unhandled clothes looks messy and makes items unavailable for sale.', proof: 'Visual Check', location: 'Fitting Room Area' },
                    { id: 'TRIAL-08', description: 'Report any suspicious behavior to security.', priority: 'High', riskLevel: 'High', consequence: 'Allows potential thieves to continue operating without challenge.', proof: 'Incident Report', location: 'Security' },
                    { id: 'TRIAL-09', description: 'Ensure fitting rooms are well-lit and mirrors are clean.', priority: 'Medium', riskLevel: 'Low', consequence: 'A poor fitting room experience can discourage a customer from buying.', proof: 'Visual Check', location: 'Fitting Rooms' },
                    { id: 'TRIAL-10', description: 'Provide assistance to customers in the fitting rooms.', priority: 'High', riskLevel: 'Low', consequence: 'Good service in the fitting room can significantly increase the chances of a sale.', proof: 'Customer Feedback', location: 'Fitting Room Area' },
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
                    { id: 'RETURN-01', description: 'Verify original receipt and SKU for all returns/exchanges.', priority: 'High', riskLevel: 'High', consequence: 'Accepting returns without proof of purchase can lead to fraudulent returns of stolen goods.', proof: 'Receipt Check', location: 'POS' },
                    { id: 'RETURN-02', description: 'Inspect returned product for wear, damage, or tag removal.', priority: 'High', riskLevel: 'High', consequence: 'Accepting worn or damaged goods results in a direct financial loss.', proof: 'Inspection Log', location: 'POS' },
                    { id: 'RETURN-03', description: 'Require manager approval for returns above a specified value.', priority: 'High', riskLevel: 'High', consequence: 'Prevents junior staff from being pressured into accepting a large, fraudulent return.', proof: 'Manager Sign-off', location: 'POS' },
                    { id: 'RETURN-04', description: 'Take photo evidence for any suspicious or high-value returns.', priority: 'Medium', riskLevel: 'High', consequence: 'Lack of evidence makes it hard to prove fraud later.', proof: 'Photo Log', location: 'POS' },
                    { id: 'RETURN-05', description: 'Process refund/exchange in POS system accurately.', priority: 'High', riskLevel: 'High', consequence: 'Errors can lead to financial loss or customer disputes.', proof: 'POS Transaction ID', location: 'POS' },
                    { id: 'RETURN-06', description: 'Handle defective items correctly.', priority: 'High', riskLevel: 'High', consequence: 'Defective items need to be tracked for vendor claims and quality control.', proof: 'Defective Item Log', location: 'Back Office' },
                    { id: 'RETURN-07', description: 'Inform customers of the return policy clearly.', priority: 'High', riskLevel: 'Low', consequence: 'Ambiguity leads to arguments and customer dissatisfaction.', proof: 'Policy Signage', location: 'POS' },
                    { id: 'RETURN-08', description: 'Handle returns from online purchases according to the omni-channel policy.', priority: 'High', riskLevel: 'High', consequence: 'Inconsistent policies between online and offline create customer confusion.', proof: 'Omni-channel SOP', location: 'POS' },
                    { id: 'RETURN-09', description: 'Quarantine returned items before placing them back on the floor.', priority: 'High', riskLevel: 'Medium', consequence: 'Ensures items are clean and properly retagged before being resold.', proof: 'Quarantine Log', location: 'Back Office' },
                    { id: 'RETURN-10', description: 'Train staff on handling difficult return situations.', priority: 'High', riskLevel: 'Medium', consequence: 'Untrained staff can escalate a simple dispute into a major customer service failure.', proof: 'Training Log', location: 'Office' },
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
                    { id: 'LP-01', description: 'Test Electronic Article Surveillance (EAS) gates at opening.', priority: 'High', riskLevel: 'High', consequence: 'A non-functional EAS system means a key layer of theft detection is missing.', proof: 'EAS Test Log', location: 'Store Entrance' },
                    { id: 'LP-02', description: 'Review CCTV footage for blind spots or camera tampering.', priority: 'High', riskLevel: 'High', consequence: 'Thieves actively look for and exploit camera blind spots.', proof: 'CCTV Review Log', location: 'Security Office' },
                    { id: 'LP-03', description: 'Audit high-value items to ensure security tags are correctly attached.', priority: 'High', riskLevel: 'High', consequence: 'An untagged high-value item is a prime target for theft.', proof: 'Tag Audit', location: 'Sales Floor' },
                    { id: 'LP-04', description: 'Train staff on identifying and reporting suspicious behavior.', priority: 'High', riskLevel: 'Medium', consequence: 'Alert staff are the best defense against theft.', proof: 'Training Log', location: 'Office' },
                    { id: 'LP-05', description: 'Secure all fire exits and staff entrances.', priority: 'High', riskLevel: 'High', consequence: 'Unsecured exits are a common method for organized retail crime.', proof: 'Exit Check Log', location: 'Entire Store' },
                    { id: 'LP-06', description: 'Conduct bag checks for staff leaving the store.', priority: 'High', riskLevel: 'High', consequence: 'A necessary deterrent against internal theft.', proof: 'Bag Check Log', location: 'Staff Exit' },
                    { id: 'LP-07', description: 'Monitor fitting rooms for theft.', priority: 'High', riskLevel: 'High', consequence: 'Fitting rooms are the #1 location for tag removal and merchandise concealment.', proof: 'Fitting Room Log', location: 'Fitting Rooms' },
                    { id: 'LP-08', description: 'Have a clear protocol for handling a theft incident.', priority: 'High', riskLevel: 'High', consequence: 'An inconsistent or unsafe response can lead to staff injury or legal issues.', proof: 'Theft Protocol', location: 'Security Office' },
                    { id: 'LP-09', description: 'Work with local law enforcement on organized retail crime.', priority: 'Medium', riskLevel: 'High', consequence: 'Sharing intelligence helps prevent future incidents.', proof: 'Police Liaison Log', location: 'Security Office' },
                    { id: 'LP-10', description: 'Analyze shrinkage data to identify patterns.', priority: 'High', riskLevel: 'High', consequence: 'Data analysis can reveal if a specific item or area of the store is being targeted.', proof: 'Shrinkage Report', location: 'Office' },
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
                    { id: 'CH-01', description: 'Reconcile cash drawer against POS report at end of shift.', priority: 'High', riskLevel: 'High', consequence: 'Unreconciled drawers can hide cash theft or major accounting errors.', proof: 'Shift Reconciliation Form', location: 'Cash Office' },
                    { id: 'CH-02', description: 'Prepare and log daily cash deposits for bank.', priority: 'High', riskLevel: 'High', consequence: 'Delays in deposits increase the risk of theft from the store.', proof: 'Deposit Slip', location: 'Cash Office' },
                    { id: 'CH-03', description: 'Use counterfeit detection methods for all large bills.', priority: 'High', riskLevel: 'High', consequence: 'Accepting counterfeit currency is a direct financial loss.', proof: 'Counterfeit Check', location: 'POS' },
                    { id: 'CH-04', description: 'Store cash securely in a locked safe.', priority: 'High', riskLevel: 'High', consequence: 'Leaving cash unsecured is a major theft risk.', proof: 'Safe Access Log', location: 'Cash Office' },
                    { id: 'CH-05', description: 'Manager to verify and sign off on all daily cash reports.', priority: 'High', riskLevel: 'High', consequence: 'Provides a second layer of accountability for all cash handling.', proof: 'Signed Report', location: 'Office' },
                    { id: 'CH-06', description: 'Limit the amount of cash kept in the POS drawer.', priority: 'High', riskLevel: 'High', consequence: 'Minimizes the potential loss during a till snatch or robbery.', proof: 'Cash Limit Policy', location: 'POS' },
                    { id: 'CH-07', description: 'Handle credit card transactions securely according to PCI DSS standards.', priority: 'High', riskLevel: 'High', consequence: 'Non-compliance can lead to massive fines and loss of ability to accept cards.', proof: 'PCI Compliance Audit', location: 'POS' },
                    { id: 'CH-08', description: 'Process gift card transactions correctly.', priority: 'High', riskLevel: 'Medium', consequence: 'Errors can lead to customer disputes and financial loss.', proof: 'Gift Card Log', location: 'POS' },
                    { id: 'CH-09', description: 'Train cashiers on all payment handling procedures.', priority: 'High', riskLevel: 'High', consequence: 'Untrained cashiers are more likely to make errors or fall victim to scams.', proof: 'Training Log', location: 'Office' },
                    { id: 'CH-10', description: 'Investigate any cash shortages or overages immediately.', priority: 'High', riskLevel: 'High', consequence: 'Uninvestigated discrepancies can be a sign of ongoing theft.', proof: 'Investigation Report', location: 'Office' },
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
                    { id: 'SIM-01', description: 'Plan storage space for incoming seasonal collections.', priority: 'High', riskLevel: 'Medium', consequence: 'Lack of planning leads to a cluttered and inefficient stockroom.', proof: 'Storage Plan', location: 'Stockroom' },
                    { id: 'SIM-02', description: 'Implement scheduled markdowns for end-of-season items.', priority: 'High', riskLevel: 'Medium', consequence: 'Failure to mark down stock in time leads to deep discounts later or total write-offs.', proof: 'Markdown Schedule', location: 'Office' },
                    { id: 'SIM-03', description: 'Consolidate last-season stock to a designated sale area.', priority: 'High', riskLevel: 'Low', consequence: 'Mixing sale items with full-price items can devalue the new collection.', proof: 'Photo of Sale Area', location: 'Sales Floor' },
                    { id: 'SIM-04', description: 'Analyze sell-through rates to inform future buying.', priority: 'High', riskLevel: 'Medium', consequence: 'Leads to repeating buying mistakes season after season.', proof: 'Sell-Through Report', location: 'Office' },
                    { id: 'SIM-05', description: 'Process returns to vendor for any unsold guaranteed stock.', priority: 'High', riskLevel: 'Medium', consequence: 'A missed RTV deadline means the store is stuck with unwanted inventory.', proof: 'Vendor Return Forms', location: 'Office' },
                    { id: 'SIM-06', description: 'Plan marketing campaigns for seasonal sales.', priority: 'High', riskLevel: 'Medium', consequence: 'Without marketing, even discounted stock may not sell.', proof: 'Marketing Plan', location: 'Marketing Office' },
                    { id: 'SIM-07', description: 'Update visual merchandising for new seasons.', priority: 'High', riskLevel: 'Low', consequence: 'The store looks stale and outdated.', proof: 'VM Plan', location: 'VM Office' },
                    { id: 'SIM-08', description: 'Train staff on the key features of the new collection.', priority: 'High', riskLevel: 'Medium', consequence: 'Staff cannot effectively sell products they don\'t understand.', proof: 'Training Log', location: 'Office' },
                    { id: 'SIM-09', description: 'Clear old stock from the stockroom to make space.', priority: 'High', riskLevel: 'Medium', consequence: 'A cluttered stockroom leads to inefficiency and damaged goods.', proof: 'Stockroom Audit', location: 'Stockroom' },
                    { id: 'SIM-10', description: 'Donate or write off any remaining unsold stock.', priority: 'Medium', riskLevel: 'Low', consequence: 'A necessary final step to clear the books and stockroom.', proof: 'Donation/Write-off Form', location: 'Office' },
                ]
            },
            {
                title: "Omni-Channel Operations",
                department: "Operations",
                frequency: "Daily",
                role: "Store Manager",
                icon: <LinkIcon />,
                summary: "Procedures for handling 'Click & Collect' orders, processing online returns in-store, and managing store-fulfilled online orders.",
                tasks: [
                    { id: 'OC-01', description: 'Check system for new Click & Collect orders every hour.', priority: 'High', riskLevel: 'Medium', consequence: 'Delayed order picking leads to long customer wait times at pickup.', proof: 'System Log', location: 'System' },
                    { id: 'OC-02', description: 'Pick and pack orders within the defined SLA.', priority: 'High', riskLevel: 'Medium', consequence: 'Breaching the SLA leads to a poor customer experience.', proof: 'Picking Ticket', location: 'Stockroom' },
                    { id: 'OC-03', description: 'Process online returns according to the return policy.', priority: 'High', riskLevel: 'High', consequence: 'Inconsistent return policies frustrate customers and can lead to financial loss.', proof: 'Return Transaction Log', location: 'POS' },
                    { id: 'OC-04', description: 'Manage inventory for store-fulfilled online orders to avoid stockouts.', priority: 'High', riskLevel: 'High', consequence: 'Selling an item online that is not actually in stock creates a very poor customer experience.', proof: 'Inventory Sync Report', location: 'System' },
                    { id: 'OC-05', description: 'Train staff on all omni-channel processes.', priority: 'High', riskLevel: 'Medium', consequence: 'Untrained staff can give incorrect information or process transactions incorrectly.', proof: 'Training Log', location: 'Office' },
                    { id: 'OC-06', description: 'Communicate with customers about the status of their orders.', priority: 'High', riskLevel: 'Medium', consequence: 'Lack of communication leads to customer anxiety and support calls.', proof: 'Communication Log', location: 'CRM' },
                    { id: 'OC-07', description: 'Have a designated area for Click & Collect pickups.', priority: 'High', riskLevel: 'Low', consequence: 'A disorganized pickup process creates a chaotic in-store experience.', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'OC-08', description: 'Handle packaging and shipping for store-fulfilled orders.', priority: 'High', riskLevel: 'Medium', consequence: 'Poor packaging can lead to items being damaged in transit.', proof: 'Shipping Log', location: 'Back Office' },
                    { id: 'OC-09', description: 'Reconcile omni-channel sales with store sales.', priority: 'High', riskLevel: 'High', consequence: 'Leads to inaccurate financial reporting.', proof: 'Reconciliation Report', location: 'Office' },
                    { id: 'OC-10', description: 'Gather customer feedback on the omni-channel experience.', priority: 'Medium', riskLevel: 'Low', consequence: 'Missed opportunity to improve a critical and growing part of the business.', proof: 'Feedback Survey', location: 'System' },
                ]
            }
        ]
    },
    {
        id: 'jewelry_and_luxury_retail',
        title: "Jewelry & Luxury Retail Pack",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/98045618-18e9-4e78-a24a-195964a2754c',
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
                    { id: 'JLR-SEC-01', description: 'Perform dual-person vault opening and closing procedure.', priority: 'High', riskLevel: 'High', consequence: 'Prevents single-person access to high-value inventory, drastically reducing the risk of internal theft.', proof: 'Vault Access Log', location: 'Vault' },
                    { id: 'JLR-SEC-02', description: 'Log deactivation and activation of the main security alarm.', priority: 'High', riskLevel: 'High', consequence: 'Creates a clear audit trail for any after-hours security events and ensures the store is never left unprotected.', proof: 'Alarm Log', location: 'Security Panel' },
                    { id: 'JLR-SEC-03', description: 'Conduct a full inventory count of all display cases at opening and closing.', priority: 'High', riskLevel: 'High', consequence: 'Immediately identifies any missing items, allowing for rapid investigation before evidence is lost or CCTV footage is overwritten.', proof: 'Display Inventory Sheet', location: 'Sales Floor' },
                    { id: 'JLR-SEC-04', description: 'Verify all CCTV cameras are recording and have unobstructed views.', priority: 'High', riskLevel: 'High', consequence: 'Ensures that in the event of a robbery or theft, there is clear, usable evidence for law enforcement and insurance claims.', proof: 'CCTV Check Log', location: 'Security Room' },
                    { id: 'JLR-SEC-05', description: 'Test silent panic alarms daily before opening.', priority: 'High', riskLevel: 'High', consequence: 'Guarantees that staff can silently alert security or police during a robbery without escalating the situation.', proof: 'Panic Alarm Test Log', location: 'Security Office' },
                    { id: 'JLR-SEC-06', description: 'Check entry/exit logs from previous day.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Helps identify any unusual after-hours activity.', proof: 'Log Review', location: 'Security Office' },
                    { id: 'JLR-SEC-07', description: 'Confirm all display cases are locked and secure.', priority: 'High', riskLevel: 'High', consequence: 'An unlocked case is an easy target for a smash-and-grab theft.', proof: 'Visual Confirmation', location: 'Sales Floor' },
                    { id: 'JLR-SEC-08', description: 'Ensure all staff have their IDs visible.', priority: 'Medium', riskLevel: 'Low', consequence: 'Helps quickly identify any unauthorized individuals on the floor.', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'JLR-SEC-09', description: 'Verify alarm system communication with monitoring center.', priority: 'High', riskLevel: 'High', consequence: 'A system that isn\'t communicating provides a false sense of security.', proof: 'System Test', location: 'Security Office' },
                    { id: 'JLR-SEC-10', description: 'Document any security anomalies from the previous night.', priority: 'High', riskLevel: 'Medium', consequence: 'Provides data for identifying patterns or recurring security weaknesses.', proof: 'Incident Report', location: 'Security Office' },
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
                    { id: 'JLR-SALE-01', description: "Verify government-issued ID for any purchase over a set threshold.", priority: 'High', riskLevel: 'High', consequence: 'A primary defense against the use of stolen credit cards or fraudulent identities.', proof: 'ID Scan/Copy', location: 'POS' },
                    { id: 'JLR-SALE-02', description: "Require secondary manager approval for very large or unusual transactions.", priority: 'High', riskLevel: 'High', consequence: 'Provides a second set of eyes to spot red flags that a junior employee might miss under pressure.', proof: 'Manager Sign-off', location: 'POS' },
                    { id: 'JLR-SALE-03', description: "Use counterfeit detection pens/machines for all large cash transactions.", priority: 'High', riskLevel: 'High', consequence: 'Accepting counterfeit currency is a direct and unrecoverable financial loss.', proof: 'Counterfeit Check Log', location: 'POS' },
                    { id: 'JLR-SALE-04', description: "Follow specific protocols for verifying digital payments and flagging potential fraud.", priority: 'High', riskLevel: 'High', consequence: 'Digital payment fraud is sophisticated; a checklist ensures all verification steps are taken.', proof: 'Payment Verification Checklist', location: 'POS' },
                    { id: 'JLR-SALE-05', description: 'Log details of any suspicious transaction attempts.', priority: 'High', riskLevel: 'High', consequence: 'This data is invaluable for training staff and sharing with other stores or law enforcement.', proof: 'Suspicious Activity Report', location: 'Office' },
                    { id: 'JLR-SALE-06', description: 'Confirm customer contact information for high-value sales.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Essential for follow-up, clienteling, and in case of any transaction issues.', proof: 'CRM Entry', location: 'POS' },
                    { id: 'JLR-SALE-07', description: 'For international cards, call for authorization.', priority: 'High', riskLevel: 'High', consequence: 'A common vector for high-value credit card fraud.', proof: 'Call Log', location: 'POS' },
                    { id: 'JLR-SALE-08', description: 'Ensure proper documentation for tax-free sales.', priority: 'High', riskLevel: 'Medium', consequence: 'Failure to do so can lead to tax penalties.', proof: 'Tax Form', location: 'POS' },
                    { id: 'JLR-SALE-09', description: 'Double-check packaging and boxing in front of customer.', priority: 'High', riskLevel: 'Low', consequence: 'Prevents claims that the wrong item was boxed.', proof: 'Visual Confirmation', location: 'POS' },
                    { id: 'JLR-SALE-10', description: 'Provide customer with all necessary certificates and warranty cards.', priority: 'High', riskLevel: 'Low', consequence: 'Essential for customer satisfaction and future service needs.', proof: 'Document Handover', location: 'POS' },
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
                    { id: 'JLR-INV-01', description: "Log the unique serial number of every watch and serialized item upon receipt.", priority: 'High', riskLevel: 'High', consequence: 'Without this, inventory tracking is impossible and theft is easy to conceal.', proof: 'GRN Serial Log', location: 'Receiving' },
                    { id: 'JLR-INV-02', description: "Store high-value watches and items in a separate, access-controlled area.", priority: 'High', riskLevel: 'High', consequence: 'Leaving high-value items in general storage increases theft risk.', proof: 'Secure Storage Log', location: 'Vault/Safe' },
                    { id: 'JLR-INV-03', description: "Maintain a detailed chain-of-custody log for items sent out for repair or certification.", priority: 'High', riskLevel: 'High', consequence: 'An item can be "lost" or swapped while outside the store without a clear log.', proof: 'Chain of Custody Form', location: 'Office' },
                    { id: 'JLR-INV-04', description: 'Conduct weekly audits of serialized inventory against system records.', priority: 'High', riskLevel: 'High', consequence: 'Allows for rapid detection of missing items.', proof: 'Audit Report', location: 'System' },
                    { id: 'JLR-INV-05', description: 'Match serial number at point of sale to prevent swapping.', priority: 'High', riskLevel: 'High', consequence: 'The final check to ensure a customer is not leaving with a swapped, fake item.', proof: 'POS Scan Log', location: 'POS' },
                    { id: 'JLR-INV-06', description: 'Photograph each serialized item upon receipt.', priority: 'High', riskLevel: 'Medium', consequence: 'Provides a visual record of condition to prevent fraudulent damage claims.', proof: 'Photo Log', location: 'Receiving' },
                    { id: 'JLR-INV-07', description: 'Update inventory system immediately upon sale.', priority: 'High', riskLevel: 'High', consequence: 'A delay can lead to the system showing stock that has already been sold.', proof: 'System Entry', location: 'POS' },
                    { id: 'JLR-INV-08', description: 'Report any serial number discrepancies immediately.', priority: 'High', riskLevel: 'High', consequence: 'Delay allows a thief to get away or evidence to be lost.', proof: 'Incident Report', location: 'Office' },
                    { id: 'JLR-INV-09', description: 'Verify serial number matches on box, certificate, and item.', priority: 'High', riskLevel: 'High', consequence: 'A mismatch can indicate a counterfeit item or a swapped component.', proof: 'Triple Check Log', location: 'Receiving/POS' },
                    { id: 'JLR-INV-10', description: 'Securely destroy old serial number records after statutory period.', priority: 'Medium', riskLevel: 'Low', consequence: 'Old records can pose a data privacy risk if not handled correctly.', proof: 'Destruction Log', location: 'Office' },
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
                    { id: 'JLR-DISP-01', description: 'Physically check the locks on every display case at the end of the day.', priority: 'High', riskLevel: 'High', consequence: 'An unlocked case is the single biggest vulnerability to a simple "smash and grab" theft.', proof: 'Lock Check Log', location: 'Sales Floor' },
                    { id: 'JLR-DISP-02', description: 'Verify the vault door is properly locked and secured after closing.', priority: 'High', riskLevel: 'High', consequence: 'The final and most critical security layer; failure here is catastrophic.', proof: 'Vault Security Log', location: 'Vault' },
                    { id: 'JLR-DISP-03', description: 'Test motion sensors and panic buttons weekly.', priority: 'High', riskLevel: 'High', consequence: 'A malfunctioning sensor or button provides a false sense of security and will fail when needed most.', proof: 'Alarm Test Log', location: 'Store-wide' },
                    { id: 'JLR-DISP-04', description: 'Ensure all keys are accounted for and stored securely.', priority: 'High', riskLevel: 'High', consequence: 'A missing key can compromise the entire store\'s security.', proof: 'Key Log', location: 'Safe' },
                    { id: 'JLR-DISP-05', description: 'Audit display lighting to ensure all items are well-illuminated.', priority: 'Medium', riskLevel: 'Low', consequence: 'Poor lighting not only hurts sales but can also obscure the view of CCTV cameras.', proof: 'Lighting Check', location: 'Sales Floor' },
                    { id: 'JLR-DISP-06', description: 'Ensure display case glass is clean and free of cracks.', priority: 'Medium', riskLevel: 'Medium', consequence: 'A crack can compromise the integrity of the glass, making it easier to break.', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'JLR-DISP-07', description: 'Check for any signs of tampering with display cases.', priority: 'High', riskLevel: 'High', consequence: 'Thieves may attempt to subtly disable locks or alarms before a robbery attempt.', proof: 'Tamper Check Log', location: 'Sales Floor' },
                    { id: 'JLR-DISP-08', description: 'Verify that vault combination is changed periodically.', priority: 'High', riskLevel: 'High', consequence: 'Old combinations known by former employees pose a major internal threat.', proof: 'Combination Change Log', location: 'Security Office' },
                    { id: 'JLR-DISP-09', description: 'Ensure vault is clean and organized.', priority: 'Medium', riskLevel: 'Low', consequence: 'A disorganized vault can lead to misplaced or damaged inventory.', proof: 'Visual Check', location: 'Vault' },
                    { id: 'JLR-DISP-10', description: 'Review vault access logs for any unauthorized entries.', priority: 'High', riskLevel: 'High', consequence: 'Helps detect internal security breaches or unauthorized access attempts.', proof: 'Log Review', location: 'Security Office' },
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
                    { id: 'JA-AUDIT-01', description: 'Perform daily random cycle counts on selected high-value categories.', priority: 'High', riskLevel: 'High', consequence: 'Allows for the immediate detection of theft or loss of the most valuable items.', proof: 'Cycle Count Sheets', location: 'Sales Floor/Vault' },
                    { id: 'JA-AUDIT-02', description: 'Investigate and resolve any discrepancies within 24 hours.', priority: 'High', riskLevel: 'High', consequence: 'The trail goes cold quickly; immediate investigation is key to recovery or identifying the cause.', proof: 'Discrepancy Report', location: 'Office' },
                    { id: 'JA-AUDIT-03', description: 'Conduct counts in teams of two for high-value areas.', priority: 'High', riskLevel: 'High', consequence: 'The two-person rule prevents a single individual from falsifying count records to conceal theft.', proof: 'Count Team Roster', location: 'Office' },
                    { id: 'JA-AUDIT-04', description: 'Secure the area being audited to prevent stock movement.', priority: 'High', riskLevel: 'Medium', consequence: 'Items being moved during a count can lead to inaccurate results.', proof: 'Audit Procedure', location: 'Audit Area' },
                    { id: 'JA-AUDIT-05', description: 'Reconcile physical counts with system inventory and report to management.', priority: 'High', riskLevel: 'High', consequence: 'Provides management with an accurate picture of inventory health and shrinkage.', proof: 'Final Audit Report', location: 'Office' },
                    { id: 'JA-AUDIT-06', description: 'Use barcode scanners for accuracy during counts.', priority: 'High', riskLevel: 'High', consequence: 'Manual counting is prone to human error.', proof: 'Scan Logs', location: 'System' },
                    { id: 'JA-AUDIT-07', description: 'Freeze system inventory during full stock takes.', priority: 'High', riskLevel: 'High', consequence: 'Transactions during a count will lead to incorrect final numbers.', proof: 'System Setting', location: 'System' },
                    { id: 'JA-AUDIT-08', description: 'Document reasons for all inventory adjustments.', priority: 'High', riskLevel: 'High', consequence: 'An undocumented adjustment can be a way to hide theft.', proof: 'Adjustment Notes', location: 'System' },
                    { id: 'JA-AUDIT-09', description: 'Rotate audit locations and categories regularly.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Predictable audits can be exploited by knowledgeable thieves.', proof: 'Audit Schedule', location: 'Office' },
                    { id: 'JA-AUDIT-10', description: 'Manager to sign off on all final audit reports.', priority: 'High', riskLevel: 'High', consequence: 'Ensures management accountability for inventory accuracy.', proof: 'Signed Report', location: 'Office' },
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
                    { id: 'CV-01', description: 'Collect and verify government-issued photo ID for purchases over the KYC threshold.', priority: 'High', riskLevel: 'High', consequence: 'A legal requirement for high-value transactions to prevent money laundering.', proof: 'ID Scan/Copy', location: 'POS' },
                    { id: 'CV-02', description: 'Match the name on the credit card to the customer\'s ID.', priority: 'High', riskLevel: 'High', consequence: 'The most basic and effective check against credit card fraud.', proof: 'Visual Check', location: 'POS' },
                    { id: 'CV-03', description: 'For large transactions, perform a quick online search to verify customer profile.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Can help spot red flags or inconsistencies in a customer\'s story.', proof: 'Search Log', location: 'POS' },
                    { id: 'CV-04', description: 'Document all verification steps in the customer\'s transaction record.', priority: 'High', riskLevel: 'High', consequence: 'Creates an audit trail to prove due diligence was performed.', proof: 'Transaction Notes', location: 'CRM/POS' },
                    { id: 'CV-05', description: 'Flag any suspicious behavior for a manager\'s review before proceeding.', priority: 'High', riskLevel: 'High', consequence: 'Empowers staff to pause a transaction they feel is suspicious.', proof: 'Manager Alert', location: 'POS' },
                    { id: 'CV-06', description: 'Follow AML (Anti-Money Laundering) guidelines for large cash transactions.', priority: 'High', riskLevel: 'High', consequence: 'Non-compliance can lead to severe legal penalties for the business.', proof: 'AML Form', location: 'POS' },
                    { id: 'CV-07', description: 'Record customer details accurately for future communication.', priority: 'High', riskLevel: 'Medium', consequence: 'Critical for building a long-term client relationship.', proof: 'CRM Entry', location: 'POS' },
                    { id: 'CV-08', description: 'Check against any internal watchlists for known fraudsters.', priority: 'High', riskLevel: 'High', consequence: 'Prevents repeat fraud attempts by known individuals.', proof: 'Watchlist Check', location: 'System' },
                    { id: 'CV-09', description: 'For corporate purchases, verify business registration details.', priority: 'High', riskLevel: 'High', consequence: 'Ensures the purchase is legitimate and authorized by the company.', proof: 'Business Document Copy', location: 'POS' },
                    { id: 'CV-10', description: 'Retain verification documents securely and in compliance with privacy laws.', priority: 'High', riskLevel: 'High', consequence: 'Mishandling customer data can lead to privacy violations and fines.', proof: 'Secure Storage Log', location: 'Office' },
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
                    { id: 'RSM-01', description: 'Photograph and document the condition of every item received for repair.', priority: 'High', riskLevel: 'High', consequence: 'Prevents fraudulent claims that the store damaged the item.', proof: 'Intake Form with Photos', location: 'Service Desk' },
                    { id: 'RSM-02', description: 'Create a detailed job sheet with estimated costs and timeline.', priority: 'High', riskLevel: 'Medium', consequence: 'Prevents disputes over repair costs and duration.', proof: 'Job Sheet', location: 'System' },
                    { id: 'RSM-03', description: 'Obtain written customer approval before proceeding with any work.', priority: 'High', riskLevel: 'High', consequence: 'Protects the store from claims of unauthorized repairs.', proof: 'Signed Approval', location: 'System' },
                    { id: 'RSM-04', description: 'Store all customer items in a dedicated, secure, and insured location.', priority: 'High', riskLevel: 'High', consequence: 'Losing or having a customer\'s high-value item stolen is a major financial and reputational disaster.', proof: 'Storage Log', location: 'Safe' },
                    { id: 'RSM-05', description: 'Verify customer identity upon collection of the serviced item.', priority: 'High', riskLevel: 'High', consequence: 'Prevents handing over a valuable item to the wrong person.', proof: 'ID Check Log', location: 'Service Desk' },
                    { id: 'RSM-06', description: 'Track repair status and provide updates to the customer.', priority: 'High', riskLevel: 'Medium', consequence: 'Lack of communication leads to customer frustration.', proof: 'Communication Log', location: 'CRM' },
                    { id: 'RSM-07', description: 'Inspect the item after repair to ensure quality.', priority: 'High', riskLevel: 'High', consequence: 'Returning an item that is still faulty leads to extreme customer dissatisfaction.', proof: 'QC Check', location: 'Service Desk' },
                    { id: 'RSM-08', description: 'Securely package the item for return to the customer.', priority: 'High', riskLevel: 'Low', consequence: 'Protects the item from damage after it leaves the store.', proof: 'Packaging Check', location: 'Service Desk' },
                    { id: 'RSM-09', description: 'Process payment for repairs accurately.', priority: 'High', riskLevel: 'Medium', consequence: 'Billing errors can lead to customer disputes.', proof: 'Invoice', location: 'POS' },
                    { id: 'RSM-10', description: 'Log all repair details for future reference and warranty claims.', priority: 'High', riskLevel: 'Medium', consequence: 'Provides a valuable service history for the item.', proof: 'Service History', location: 'System' },
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
                    { id: 'STSP-01', description: 'Conduct quarterly training on robbery response procedures.', priority: 'High', riskLevel: 'High', consequence: 'In a robbery, untrained staff can panic and make dangerous mistakes.', proof: 'Training Attendance Sheet', location: 'Training Room' },
                    { id: 'STSP-02', description: 'Train staff to identify common signs of suspicious customer behavior.', priority: 'High', riskLevel: 'High', consequence: 'Staff are the first line of defense; if they can\'t spot a threat, the store is vulnerable.', proof: 'Training Module', location: 'Training Room' },
                    { id: 'STSP-03', description: 'Drill staff on the correct procedure for showing high-value items to customers.', priority: 'High', riskLevel: 'High', consequence: 'Prevents common theft tactics like "swap" or "grab and run".', proof: 'Drill Log', location: 'Sales Floor' },
                    { id: 'STSP-04', description: 'Review recent security incidents or attempts with the team.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Sharing information helps everyone learn and stay vigilant.', proof: 'Meeting Minutes', location: 'Office' },
                    { id: 'STSP-05', description: 'Test staff knowledge with quizzes on security protocols.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Verifies that training has been understood and retained.', proof: 'Quiz Results', location: 'System' },
                    { id: 'STSP-06', description: 'Train staff on the use of panic buttons.', priority: 'High', riskLevel: 'High', consequence: 'Ensures a rapid and silent call for help during an emergency.', proof: 'Training Log', location: 'Training Room' },
                    { id: 'STSP-07', description: 'Role-play different security scenarios with staff.', priority: 'High', riskLevel: 'High', consequence: 'Builds muscle memory for how to react in a crisis.', proof: 'Role-play Log', location: 'Training Room' },
                    { id: 'STSP-08', description: 'Ensure all staff know the emergency contact numbers.', priority: 'High', riskLevel: 'High', consequence: 'Critical for a fast response from police or management.', proof: 'Contact List Check', location: 'Sales Floor' },
                    { id: 'STSP-09', description: 'Provide training on handling difficult customers.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Helps de-escalate situations before they become security incidents.', proof: 'Training Log', location: 'Training Room' },
                    { id: 'STSP-10', description: 'Update training materials based on new threats or incidents.', priority: 'High', riskLevel: 'Medium', consequence: 'Training must evolve as criminal tactics change.', proof: 'Updated Materials', location: 'Office' },
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
                    { id: 'IC-01', description: 'Review all insurance policies annually to ensure adequate coverage.', priority: 'High', riskLevel: 'High', consequence: 'Being underinsured can lead to financial ruin after a major theft or incident.', proof: 'Insurance Policy Review', location: 'Finance Office' },
                    { id: 'IC-02', description: 'Verify compliance with all local laws regarding the sale of precious metals and gems.', priority: 'High', riskLevel: 'High', consequence: 'Non-compliance can lead to heavy fines and loss of license.', proof: 'Legal Compliance Checklist', location: 'Legal Office' },
                    { id: 'IC-03', description: 'Maintain all necessary documentation for potential police or tax audits.', priority: 'High', riskLevel: 'High', consequence: 'Disorganized records can create major problems during an audit.', proof: 'Audit File', location: 'Office' },
                    { id: 'IC-04', description: 'Ensure BIS hallmarking compliance for all relevant jewelry.', priority: 'High', riskLevel: 'High', consequence: 'A legal requirement in India that proves the purity of gold.', proof: 'Hallmarking Records', location: 'Inventory' },
                    { id: 'IC-05', description: 'Track and comply with any changes in import/export regulations.', priority: 'High', riskLevel: 'High', consequence: 'Can lead to shipments being seized by customs.', proof: 'Regulatory Update Log', location: 'Office' },
                    { id: 'IC-06', description: 'Ensure compliance with anti-money laundering (AML) regulations.', priority: 'High', riskLevel: 'High', consequence: 'High-value retail is a target for money laundering; non-compliance carries severe penalties.', proof: 'AML Policy Review', location: 'Legal Office' },
                    { id: 'IC-07', description: 'Review data privacy policies for customer data.', priority: 'High', riskLevel: 'High', consequence: 'Mishandling high-net-worth individual data is a major legal risk.', proof: 'Privacy Policy Review', location: 'Legal Office' },
                    { id: 'IC-08', description: 'Verify compliance with labor laws for all staff.', priority: 'High', riskLevel: 'High', consequence: 'Can lead to lawsuits and fines.', proof: 'Labor Law Audit', location: 'HR Office' },
                    { id: 'IC-09', description: 'Maintain records of all compliance-related training.', priority: 'High', riskLevel: 'High', consequence: 'Proves due diligence to regulators.', proof: 'Training Records', location: 'HR Office' },
                    { id: 'IC-10', description: 'Conduct an annual compliance risk assessment.', priority: 'High', riskLevel: 'High', consequence: 'Helps to proactively identify and mitigate new legal and regulatory risks.', proof: 'Risk Assessment Report', location: 'Compliance Office' },
                ]
            }
        ]
    },
    {
        id: 'electronics_showroom_pack',
        title: "Electronics Showroom Pack",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/9099c279-b148-4395-9388-c7e411a141d4',
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
                { id: 'POS-RECON-03', description: "The 'POS Reconciliation' checklist, which includes verifying that CCTV is operational, provides crucial evidence for any incident investigation.", sourceChecklist: "POS & Payment Reconciliation", priority: 'Medium' }
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
                    { id: 'DEMO-01', description: 'Check all power cables for frays or damage.', priority: 'High', riskLevel: 'High', consequence: 'Prevents electrical shorts and potential fire hazards.', proof: 'Visual Inspection Log', location: 'Sales Floor' },
                    { id: 'DEMO-02', description: 'Ensure all demo units are connected via surge protectors.', priority: 'High', riskLevel: 'Medium', consequence: 'Protects expensive demo units from power surges, reducing equipment loss.', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'DEMO-03', description: 'Verify all wiring is neatly concealed to prevent trip hazards.', priority: 'High', riskLevel: 'Medium', consequence: 'Prevents customer or staff injuries and potential lawsuits.', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'DEMO-04', description: 'Check that all demo devices have the latest firmware and demo content loaded.', priority: 'High', riskLevel: 'Low', consequence: 'Ensures a consistent and positive customer experience with the latest features.', proof: 'Firmware Version Check', location: 'Sales Floor' },
                    { id: 'DEMO-05', description: 'Ensure all security straps and covers for demo units are intact.', priority: 'High', riskLevel: 'High', consequence: 'Deters theft of high-value demo merchandise.', proof: 'Security Device Log', location: 'Sales Floor' },
                    { id: 'DEMO-06', description: 'Clean screens and surfaces of all demo units.', priority: 'Medium', riskLevel: 'Low', consequence: 'A dirty display looks unprofessional and can deter customers.', proof: 'Cleaning Log', location: 'Sales Floor' },
                    { id: 'DEMO-07', description: 'Verify all demo units are powered on and functional.', priority: 'High', riskLevel: 'Medium', consequence: 'A non-working demo unit is a lost sales opportunity.', proof: 'Functionality Check', location: 'Sales Floor' },
                    { id: 'DEMO-08', description: 'Check for any signs of overheating on charging stations.', priority: 'High', riskLevel: 'High', consequence: 'Overheating is a major fire risk, especially with lithium-ion batteries.', proof: 'Thermal Check', location: 'Sales Floor' },
                    { id: 'DEMO-09', description: 'Ensure all pricing and feature labels are correct and visible.', priority: 'High', riskLevel: 'Low', consequence: 'Incorrect information can mislead customers and cause disputes.', proof: 'Label Audit', location: 'Sales Floor' },
                    { id: 'DEMO-10', description: 'Report any faulty demo units for immediate replacement.', priority: 'High', riskLevel: 'Medium', consequence: 'A broken demo unit reflects poorly on the brand and the store.', proof: 'Fault Report', location: 'System' },
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
                    { id: 'ELEC-01', description: 'Conduct scheduled Portable Appliance Testing (PAT) for all plug-in devices.', priority: 'High', riskLevel: 'High', consequence: 'Identifies faulty electrical equipment that could cause shocks or fires.', proof: 'PAT Test Report', location: 'Store-wide' },
                    { id: 'ELEC-02', description: 'Perform quarterly earth leakage circuit breaker (ELCB) tests.', priority: 'High', riskLevel: 'High', consequence: 'A faulty ELCB will not trip during an electrical fault, a major life-safety risk.', proof: 'ELCB Test Log', location: 'Electrical Panels' },
                    { id: 'ELEC-03', description: 'Maintain records of all electrical grounding tests and certifications.', priority: 'High', riskLevel: 'High', consequence: 'Proper grounding is essential for preventing electrical shocks.', proof: 'Grounding Test Records', location: 'Office' },
                    { id: 'ELEC-04', description: 'Check load on all circuits to prevent overloading.', priority: 'High', riskLevel: 'High', consequence: 'Overloaded circuits are a primary cause of electrical fires.', proof: 'Load Test Report', location: 'Electrical Panels' },
                    { id: 'ELEC-05', description: 'Ensure fire extinguishers are suitable for electrical fires (Class C).', priority: 'High', riskLevel: 'High', consequence: 'Using the wrong type of extinguisher on an electrical fire can be fatal.', proof: 'Extinguisher Inspection Log', location: 'Store-wide' },
                    { id: 'ELEC-06', description: 'Inspect all extension cords and power strips for damage.', priority: 'High', riskLevel: 'High', consequence: 'Damaged cords are a common cause of electrical fires.', proof: 'Cord Inspection Log', location: 'Store-wide' },
                    { id: 'ELEC-07', description: 'Ensure all electrical panels are accessible and not blocked.', priority: 'High', riskLevel: 'High', consequence: 'In an emergency, access to the panel is critical to shut off power.', proof: 'Visual Check', location: 'Electrical Rooms' },
                    { id: 'ELEC-08', description: 'Train staff on basic electrical safety and how to report issues.', priority: 'High', riskLevel: 'Medium', consequence: 'Untrained staff may not recognize or report dangerous electrical hazards.', proof: 'Training Log', location: 'Office' },
                    { id: 'ELEC-09', description: 'Use only certified electricians for any repair work.', priority: 'High', riskLevel: 'High', consequence: 'Improper electrical work can create hidden fire hazards.', proof: 'Vendor Certification', location: 'Office' },
                    { id: 'ELEC-10', description: 'Conduct an annual thermal imaging audit of electrical panels.', priority: 'High', riskLevel: 'High', consequence: 'Identifies "hot spots" that are invisible to the naked eye but indicate a potential fire risk.', proof: 'Thermal Imaging Report', location: 'Office' },
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
                    { id: 'ASSET-01', description: 'Record the unique serial number of every item at goods receipt.', priority: 'High', riskLevel: 'High', consequence: 'Without serial numbers, it is impossible to track individual units, making theft easy to conceal.', proof: 'GRN Log', location: 'Receiving Area' },
                    { id: 'ASSET-02', description: 'Apply a unique asset tag to each display and stock item.', priority: 'High', riskLevel: 'High', consequence: 'Provides a clear, scannable identity for each piece of inventory.', proof: 'Asset Tagging Log', location: 'Stockroom' },
                    { id: 'ASSET-03', description: 'Perform daily high-value item inventory verification.', priority: 'High', riskLevel: 'High', consequence: 'Allows for immediate detection of theft of the most expensive items.', proof: 'High-Value Count Sheet', location: 'Store-wide' },
                    { id: 'ASSET-04', description: 'Implement an immediate escalation process for any missing items.', priority: 'High', riskLevel: 'High', consequence: 'A delay in reporting allows thieves to get away and evidence to be lost.', proof: 'Escalation SOP', location: 'Office' },
                    { id: 'ASSET-05', description: 'Reconcile physical inventory with system records monthly.', priority: 'High', riskLevel: 'High', consequence: 'Catches discrepancies and helps maintain accurate stock levels for ordering.', proof: 'Monthly Stock Take Report', location: 'Office' },
                    { id: 'ASSET-06', description: 'Use barcode scanners for accurate inventory counts.', priority: 'High', riskLevel: 'High', consequence: 'Manual counting is slow and highly prone to human error.', proof: 'Scan Logs', location: 'System' },
                    { id: 'ASSET-07', description: 'Secure the stockroom with restricted access.', priority: 'High', riskLevel: 'High', consequence: 'An open stockroom is the number one source of inventory shrinkage.', proof: 'Access Log', location: 'Stockroom' },
                    { id: 'ASSET-08', description: 'Track items sent for repair or to other locations.', priority: 'High', riskLevel: 'High', consequence: 'Items can easily get "lost" in transit without a clear chain of custody.', proof: 'Movement Log', location: 'System' },
                    { id: 'ASSET-09', description: 'Investigate root causes of inventory discrepancies.', priority: 'High', riskLevel: 'High', consequence: 'Failing to investigate means the underlying problem (theft, process error) will continue.', proof: 'Investigation Report', location: 'Office' },
                    { id: 'ASSET-10', description: 'Manager to sign off on all inventory adjustments.', priority: 'High', riskLevel: 'High', consequence: 'Prevents fraudulent adjustments to cover up theft.', proof: 'Signed Adjustment Form', location: 'System' },
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
                    { id: 'POS-RECON-01', description: 'Perform end-of-day reconciliation of cash, card, and digital payments against POS reports.', priority: 'High', riskLevel: 'High', consequence: 'Unreconciled tills can hide cash theft or payment processing errors.', proof: 'Reconciliation Report', location: 'Cash Office' },
                    { id: 'POS-RECON-02', description: 'Check payment terminals daily for signs of tampering.', priority: 'High', riskLevel: 'High', consequence: 'Criminals can install skimmers to steal customer card data.', proof: 'Device Inspection Log', location: 'POS' },
                    { id: 'POS-RECON-03', description: 'Verify CCTV cameras at billing lanes are operational and have a clear view.', priority: 'High', riskLevel: 'High', consequence: 'Provides crucial evidence in case of cash disputes, theft, or scams.', proof: 'CCTV Check Log', location: 'Security Office' },
                    { id: 'POS-RECON-04', description: 'Require dual approval from a manager for all refunds.', priority: 'High', riskLevel: 'High', consequence: 'A common method for internal fraud is processing fake refunds.', proof: 'Refund/Void Log', location: 'POS' },
                    { id: 'POS-RECON-05', description: 'Securely store and transport daily cash deposits.', priority: 'High', riskLevel: 'High', consequence: 'Reduces the risk of robbery or internal theft of cash.', proof: 'Cash Deposit Log', location: 'Cash Office' },
                    { id: 'POS-RECON-06', description: 'Reconcile gift card and voucher sales.', priority: 'High', riskLevel: 'Medium', consequence: 'Prevents fraud related to gift card issuance and redemption.', proof: 'Voucher Log', location: 'System' },
                    { id: 'POS-RECON-07', description: 'Verify cashier logins and logouts for each shift.', priority: 'High', riskLevel: 'Medium', consequence: 'Ensures accountability for all transactions processed on a specific till.', proof: 'Shift Log', location: 'System' },
                    { id: 'POS-RECON-08', description: 'Report any cash discrepancies immediately.', priority: 'High', riskLevel: 'High', consequence: 'A small discrepancy could be a test for a larger theft.', proof: 'Discrepancy Report', location: 'Office' },
                    { id: 'POS-RECON-09', description: 'Follow PCI DSS guidelines for all card transactions.', priority: 'High', riskLevel: 'High', consequence: 'Non-compliance can lead to massive fines and loss of ability to accept cards.', proof: 'PCI Compliance Certificate', location: 'Office' },
                    { id: 'POS-RECON-10', description: 'Use counterfeit detection on all cash transactions.', priority: 'High', riskLevel: 'High', consequence: 'Accepting fake currency is a direct financial loss.', proof: 'Counterfeit Check', location: 'POS' },
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
                    { id: 'EWaste-01', description: 'Maintain segregated and clearly labeled bins for e-waste.', priority: 'High', riskLevel: 'Medium', consequence: 'Mixing e-waste with general waste is an environmental and legal violation.', proof: 'Visual Check', location: 'Stockroom' },
                    { id: 'EWaste-02', description: 'Use only authorized, certified e-waste disposal vendors.', priority: 'High', riskLevel: 'High', consequence: 'Using an uncertified vendor can lead to illegal dumping and fines for your company.', proof: 'Vendor Contract', location: 'Office' },
                    { id: 'EWaste-03', description: 'Maintain a detailed log of all e-waste disposals.', priority: 'High', riskLevel: 'High', consequence: 'Provides a legal audit trail to prove compliant disposal.', proof: 'Disposal Log', location: 'Office' },
                    { id: 'EWaste-04', description: 'Obtain and file disposal/destruction certificates from the vendor.', priority: 'High', riskLevel: 'High', consequence: 'This is the legal proof that your e-waste was handled correctly.', proof: 'Disposal Certificates', location: 'Office' },
                    { id: 'EWaste-05', description: 'Train staff on identifying and segregating e-waste correctly.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Untrained staff may incorrectly dispose of hazardous materials.', proof: 'Training Log', location: 'Office' },
                    { id: 'EWaste-06', description: 'Securely wipe data from all devices before disposal.', priority: 'High', riskLevel: 'High', consequence: 'Failure to wipe data can lead to major data breaches from discarded hard drives.', proof: 'Data Wipe Log', location: 'IT Office' },
                    { id: 'EWaste-07', description: 'Store e-waste in a secure, designated area.', priority: 'High', riskLevel: 'Medium', consequence: 'Prevents theft or scavenging of discarded electronics.', proof: 'Storage Area Check', location: 'Stockroom' },
                    { id: 'EWaste-08', description: 'Follow all local environmental regulations for e-waste.', priority: 'High', riskLevel: 'High', consequence: 'Non-compliance can result in large fines and brand damage.', proof: 'Regulatory Checklist', location: 'Office' },
                    { id: 'EWaste-09', description: 'Schedule regular pickups with the e-waste vendor.', priority: 'High', riskLevel: 'Medium', consequence: 'Prevents accumulation of hazardous materials on site.', proof: 'Pickup Schedule', location: 'Office' },
                    { id: 'EWaste-10', description: 'Audit the e-waste process annually for compliance.', priority: 'High', riskLevel: 'High', consequence: 'Ensures the process remains compliant with changing regulations.', proof: 'Annual Audit Report', location: 'Office' },
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
                    { id: 'WRM-01', description: 'Log every repair request with customer details and item serial number.', priority: 'High', riskLevel: 'High', consequence: 'Poor record-keeping can lead to lost items or disputes with customers.', proof: 'Repair Log', location: 'Service Desk' },
                    { id: 'WRM-02', description: 'Track the status of all items sent to authorized service centers.', priority: 'High', riskLevel: 'Medium', consequence: 'Inability to provide customers with updates on their repair status.', proof: 'Service Center Tracking Sheet', location: 'System' },
                    { id: 'WRM-03', description: 'Process warranty claims with manufacturers according to their policies.', priority: 'High', riskLevel: 'High', consequence: 'Failure to follow policy can lead to claim rejection and financial loss.', proof: 'Warranty Claim Forms', location: 'Office' },
                    { id: 'WRM-04', description: 'Communicate repair status updates to customers.', priority: 'High', riskLevel: 'Medium', consequence: 'Lack of communication is a major source of customer dissatisfaction.', proof: 'Communication Log', location: 'CRM' },
                    { id: 'WRM-05', description: 'Inspect repaired items before returning them to the customer.', priority: 'High', riskLevel: 'High', consequence: 'Returning an item that is still faulty creates a very poor customer experience.', proof: 'Final Inspection Checklist', location: 'Service Desk' },
                    { id: 'WRM-06', description: 'Obtain customer sign-off upon collection of repaired item.', priority: 'High', riskLevel: 'Medium', consequence: 'Protects against later claims that the item was not returned or was still faulty.', proof: 'Collection Form', location: 'Service Desk' },
                    { id: 'WRM-07', description: 'Manage inventory of spare parts for common repairs.', priority: 'High', riskLevel: 'Medium', consequence: 'Lack of spares leads to longer repair times.', proof: 'Spare Parts Inventory', location: 'Stockroom' },
                    { id: 'WRM-08', description: 'Provide customer with a clear timeline for repairs.', priority: 'High', riskLevel: 'Low', consequence: 'Unclear timelines lead to customer frustration and repeated follow-up calls.', proof: 'Repair Estimate Form', location: 'Service Desk' },
                    { id: 'WRM-09', description: 'Process payment for repairs accurately.', priority: 'High', riskLevel: 'Medium', consequence: 'Billing errors can lead to customer disputes.', proof: 'Invoice', location: 'POS' },
                    { id: 'WRM-10', description: 'Log all repair details for warranty and history purposes.', priority: 'High', riskLevel: 'Medium', consequence: 'A detailed service history is valuable for diagnosing future problems.', proof: 'Service History', location: 'System' },
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
                    { id: 'SO-01', description: 'Ensure all items are stored in their designated bins or locations.', priority: 'High', riskLevel: 'Medium', consequence: 'A disorganized stockroom makes order picking slow and inefficient.', proof: 'Bin Audit', location: 'Stockroom' },
                    { id: 'SO-02', description: 'Keep all aisles and walkways clear of obstructions.', priority: 'High', riskLevel: 'High', consequence: 'Blocked aisles are a major safety hazard and can cause serious injuries.', proof: 'Visual Inspection', location: 'Stockroom' },
                    { id: 'SO-03', description: 'Check for any damaged or open boxes and report them.', priority: 'High', riskLevel: 'High', consequence: 'Damaged stock leads to financial loss and may be a safety hazard.', proof: 'Damage Report', location: 'Stockroom' },
                    { id: 'SO-04', description: 'Implement FIFO (First-In, First-Out) stock rotation.', priority: 'High', riskLevel: 'Medium', consequence: 'Failure to use FIFO can lead to older models becoming obsolete and unsellable.', proof: 'Stock Rotation Audit', location: 'Stockroom' },
                    { id: 'SO-05', description: 'Ensure the stockroom is locked and access is restricted.', priority: 'High', riskLevel: 'High', consequence: 'The stockroom is a primary target for internal and external theft.', proof: 'Access Log', location: 'Stockroom' },
                    { id: 'SO-06', description: 'Maintain a clean and dust-free environment.', priority: 'High', riskLevel: 'Medium', consequence: 'Dust and dirt can damage sensitive electronic components.', proof: 'Cleaning Log', location: 'Stockroom' },
                    { id: 'SO-07', description: 'Check for any pest activity.', priority: 'High', riskLevel: 'High', consequence: 'Pests can chew through wiring and packaging, causing significant damage.', proof: 'Pest Control Log', location: 'Stockroom' },
                    { id: 'SO-08', description: 'Ensure proper lighting in all areas of the stockroom.', priority: 'High', riskLevel: 'Medium', consequence: 'Poor lighting increases the risk of accidents and picking errors.', proof: 'Lighting Check', location: 'Stockroom' },
                    { id: 'SO-09', description: 'Organize items by brand, category, or SKU for easy picking.', priority: 'High', riskLevel: 'Medium', consequence: 'A logical layout is key to fast and accurate order fulfillment.', proof: 'Organization Plan', location: 'Stockroom' },
                    { id: 'SO-10', description: 'Conduct a weekly safety audit of the stockroom.', priority: 'High', riskLevel: 'High', consequence: 'Proactively identifies and mitigates safety risks like unsafe stacking or fire hazards.', proof: 'Safety Audit Report', location: 'Office' },
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
                    { id: 'FSA-01', description: 'Conduct monthly inspection of all fire extinguishers (pressure, expiry, accessibility).', priority: 'High', riskLevel: 'High', consequence: 'A non-functional extinguisher is useless in a fire.', proof: 'Extinguisher Log', location: 'Store-wide' },
                    { id: 'FSA-02', description: 'Test smoke detectors and fire alarms.', priority: 'High', riskLevel: 'High', consequence: 'Failure to get an early warning can be fatal.', proof: 'Alarm Test Log', location: 'Store-wide' },
                    { id: 'FSA-03', description: 'Ensure all emergency exits are clear and accessible.', priority: 'High', riskLevel: 'High', consequence: 'A blocked exit can trap people in a fire.', proof: 'Exit Inspection Log', location: 'Store-wide' },
                    { id: 'FSA-04', description: 'Check that all staff are trained on fire evacuation procedures.', priority: 'High', riskLevel: 'High', consequence: 'Untrained staff can cause panic and confusion during an evacuation.', proof: 'Training Records', location: 'Office' },
                    { id: 'FSA-05', description: 'Maintain a log of all fire safety audits for regulatory inspection.', priority: 'High', riskLevel: 'High', consequence: 'Failure to produce records can lead to fines and legal action.', proof: 'Master Audit File', location: 'Office' },
                    { id: 'FSA-06', description: 'Check emergency lighting functionality.', priority: 'High', riskLevel: 'High', consequence: 'In a power outage during a fire, this is the only way to see the exit path.', proof: 'Lighting Test Log', location: 'Store-wide' },
                    { id: 'FSA-07', description: 'Ensure fire safety signage is visible and correct.', priority: 'High', riskLevel: 'High', consequence: 'People will not know where to go in an emergency.', proof: 'Signage Audit', location: 'Entire Property' },
                    { id: 'FSA-08', description: 'Conduct a fire drill at least once every six months.', priority: 'High', riskLevel: 'High', consequence: 'Drills are essential for ensuring the evacuation plan actually works.', proof: 'Drill Report', location: 'Office' },
                    { id: 'FSA-09', description: 'Ensure sprinkler system is inspected annually by a certified vendor.', priority: 'High', riskLevel: 'High', consequence: 'The primary fire suppression system must be reliable.', proof: 'Vendor Certificate', location: 'Office' },
                    { id: 'FSA-10', description: 'Review and update the fire emergency plan annually.', priority: 'High', riskLevel: 'High', consequence: 'An outdated plan can be ineffective.', proof: 'Updated Plan', location: 'Office' },
                ]
            }
        ]
    },
    {
        id: 'supermarket_grocery_retail_pack',
        title: "Supermarket & Grocery Retail Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f29f04d7-1300-410a-8a4b-014f3b614838',
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
            { text: "Guarantee food quality from the start with a stringent raw material receiving and QC process.", icon: <PackageCheck /> },
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
                    { id: 'SC-COLD-01', description: 'Log temperatures of all chillers and freezers twice daily.', priority: 'High', riskLevel: 'High', consequence: 'A temperature failure can lead to rapid bacterial growth, causing food spoilage, waste, and severe foodborne illness outbreaks.', proof: 'Temperature Log', location: 'Sales Floor/Stockroom' },
                    { id: 'SC-COLD-02', description: 'Verify functionality of temperature alarms weekly.', priority: 'High', riskLevel: 'High', consequence: 'A non-functional alarm means a temperature failure can go unnoticed for hours, leading to catastrophic inventory loss.', proof: 'Alarm Test Log', location: 'Cold Storage' },
                    { id: 'SC-COLD-03', description: 'Check door seals on all refrigerated units daily.', priority: 'High', riskLevel: 'Medium', consequence: 'Damaged seals lead to energy waste and make it harder to maintain safe temperatures, increasing operational costs and spoilage risk.', proof: 'Visual Inspection', location: 'Sales Floor' },
                    { id: 'SC-COLD-04', description: 'Ensure backup power for cold storage is tested weekly.', priority: 'High', riskLevel: 'High', consequence: 'During a power outage, failure of backup power can result in the loss of all perishable inventory, a major financial blow.', proof: 'Generator Test Log', location: 'Back of House' },
                    { id: 'SC-COLD-05', description: 'Document any temperature excursions and the corrective actions taken.', priority: 'High', riskLevel: 'High', consequence: 'Lack of documentation makes it impossible to prove due diligence during a health inspection or trace the cause of a spoilage event.', proof: 'Corrective Action Report', location: 'Office' },
                    { id: 'SC-COLD-06', description: 'Ensure goods are moved to cold storage immediately upon receipt.', priority: 'High', riskLevel: 'High', consequence: 'Delays break the cold chain, promoting bacterial growth.', proof: 'Receiving Log', location: 'Receiving Bay' },
                    { id: 'SC-COLD-07', description: 'Clean and sanitize all refrigerated units weekly.', priority: 'High', riskLevel: 'High', consequence: 'Prevents mold, bacteria buildup, and cross-contamination.', proof: 'Cleaning Log', location: 'Sales Floor/Stockroom' },
                    { id: 'SC-COLD-08', description: 'Do not overload refrigerated units to allow for proper air circulation.', priority: 'High', riskLevel: 'Medium', consequence: 'Overloading creates "hot spots" where food can spoil.', proof: 'Visual Check', location: 'Sales Floor/Stockroom' },
                    { id: 'SC-COLD-09', description: 'Train staff on cold chain management procedures.', priority: 'High', riskLevel: 'Medium', consequence: 'Untrained staff may unknowingly break the cold chain protocols.', proof: 'Training Records', location: 'Office' },
                    { id: 'SC-COLD-10', description: 'Calibrate thermometers quarterly.', priority: 'High', riskLevel: 'High', consequence: 'Inaccurate thermometers give a false sense of safety.', proof: 'Calibration Certificates', location: 'Office' },
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
                    { id: 'SC-FIFO-01', description: 'Conduct daily expiry sweeps for high-risk items like dairy and bread.', priority: 'High', riskLevel: 'High', consequence: 'Selling expired food is a major health risk and can lead to severe legal penalties.', proof: 'Sweep Log', location: 'Sales Floor' },
                    { id: 'SC-FIFO-02', description: 'Ensure First-In, First-Out (FIFO) rotation during shelf replenishment.', priority: 'High', riskLevel: 'High', consequence: 'Failure to rotate stock is a primary cause of food wastage and selling expired products.', proof: 'Supervisor Audit', location: 'Sales Floor' },
                    { id: 'SC-FIFO-03', description: 'Follow markdown or quarantine procedures for near-expiry items.', priority: 'High', riskLevel: 'Medium', consequence: 'Reduces financial loss from unsold expired goods.', proof: 'Markdown Log', location: 'Sales Floor' },
                    { id: 'SC-FIFO-04', description: 'Remove and log all expired products from shelves immediately.', priority: 'High', riskLevel: 'High', consequence: 'Leaving expired products on shelves poses a direct risk to consumer health.', proof: 'Expired Goods Log', location: 'Back of House' },
                    { id: 'SC-FIFO-05', description: 'Train staff on how to read and interpret expiry date codes.', priority: 'High', riskLevel: 'Medium', consequence: 'Staff may misinterpret codes and leave expired products on the shelf.', proof: 'Training Record', location: 'Office' },
                    { id: 'SC-FIFO-06', description: 'Donate or dispose of expired goods according to policy.', priority: 'High', riskLevel: 'Medium', consequence: 'Improper disposal can lead to legal issues or brand damage.', proof: 'Donation/Disposal Log', location: 'Back of House' },
                    { id: 'SC-FIFO-07', description: 'Audit stockroom for FIFO compliance weekly.', priority: 'High', riskLevel: 'High', consequence: 'Ensures older stock is moved to the front line.', proof: 'Stockroom Audit Log', location: 'Stockroom' },
                    { id: 'SC-FIFO-08', description: 'Review reports on expired goods to identify purchasing issues.', priority: 'High', riskLevel: 'Medium', consequence: 'Helps to adjust order quantities and prevent future over-ordering.', proof: 'Analysis Report', location: 'Office' },
                    { id: 'SC-FIFO-09', description: 'Ensure near-expiry items are clearly marked for customers.', priority: 'High', riskLevel: 'Low', consequence: 'Provides transparency to customers and helps sell items faster.', proof: 'Signage Check', location: 'Sales Floor' },
                    { id: 'SC-FIFO-10', description: 'Manager to sign off on all expired goods disposal.', priority: 'High', riskLevel: 'High', consequence: 'Prevents unauthorized removal of stock under the guise of "expiry".', proof: 'Signed Disposal Form', location: 'Office' },
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
                    { id: 'SC-CLEAN-01', description: 'Perform and log hourly checks of all aisles for spills or hazards.', priority: 'High', riskLevel: 'High', consequence: 'A liquid spill is a major slip-and-fall hazard, leading to customer injuries and lawsuits.', proof: 'Aisle Check Log', location: 'Sales Floor' },
                    { id: 'SC-CLEAN-02', description: 'Deploy "Wet Floor" signs immediately for any spills.', priority: 'High', riskLevel: 'High', consequence: 'Failure to warn customers is a major point of legal liability.', proof: 'CCTV Footage', location: 'Sales Floor' },
                    { id: 'SC-CLEAN-03', description: 'Log all spill incidents with time, location, and cleanup action.', priority: 'High', riskLevel: 'Medium', consequence: 'Provides a legal record of due diligence in case of a lawsuit.', proof: 'Spill Incident Log', location: 'Office' },
                    { id: 'SC-CLEAN-04', description: 'Inspect and clean restrooms hourly.', priority: 'High', riskLevel: 'Medium', consequence: 'Dirty restrooms are a major source of customer complaints and reflect poorly on the store.', proof: 'Restroom Cleaning Log', location: 'Restrooms' },
                    { id: 'SC-CLEAN-05', description: 'Ensure cleaning equipment is sanitized and stored correctly.', priority: 'Medium', riskLevel: 'Low', consequence: 'Dirty equipment can spread germs instead of cleaning.', proof: 'Storage Inspection', location: 'Janitor Closet' },
                    { id: 'SC-CLEAN-06', description: 'Deep clean high-traffic areas daily after closing.', priority: 'High', riskLevel: 'Medium', consequence: 'Prevents gradual buildup of dirt and grime.', proof: 'Deep Clean Log', location: 'Sales Floor' },
                    { id: 'SC-CLEAN-07', description: 'Check and empty all trash bins regularly.', priority: 'High', riskLevel: 'Low', consequence: 'Overflowing bins are unsightly and can attract pests.', proof: 'Waste Bin Check', location: 'Sales Floor' },
                    { id: 'SC-CLEAN-08', description: 'Sanitize shopping carts and baskets daily.', priority: 'High', riskLevel: 'Medium', consequence: 'Carts and baskets are high-touch surfaces that can spread germs.', proof: 'Sanitization Log', location: 'Entrance' },
                    { id: 'SC-CLEAN-09', description: 'Use correct cleaning chemicals for different surfaces.', priority: 'High', riskLevel: 'Medium', consequence: 'Using the wrong chemicals can damage surfaces or be ineffective.', proof: 'Chemical Usage Log', location: 'Janitor Closet' },
                    { id: 'SC-CLEAN-10', description: 'Train staff on spill response procedures.', priority: 'High', riskLevel: 'High', consequence: 'A slow or improper response increases the risk of accidents.', proof: 'Training Records', location: 'Office' },
                ]
            },
            {
                title: "Inbound Supplier QC",
                department: "Receiving",
                frequency: "Per Delivery",
                role: "Receiving Clerk",
                icon: <PackageCheck />,
                summary: "Check for FSSAI license, vehicle condition, product temperature, and reject non-compliant items with documentation.",
                tasks: [
                    { id: 'SC-INBOUND-01', description: 'Verify delivery quantity and items against the Purchase Order (PO).', priority: 'High', riskLevel: 'High', consequence: 'Accepting incorrect quantities leads to inventory errors and financial discrepancies.', proof: 'Signed Delivery Note', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-02', description: 'Check batch numbers and expiry dates of all incoming products.', priority: 'High', riskLevel: 'High', consequence: 'Accepting near-expiry goods leads to increased waste and potential safety issues.', proof: 'Receiving Log', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-03', description: 'Quarantine and document any non-conforming or damaged products.', priority: 'High', riskLevel: 'High', consequence: 'Allowing damaged goods into stock leads to selling unsafe or low-quality products.', proof: 'Quarantine Report', location: 'Quarantine Area' },
                    { id: 'SC-INBOUND-04', description: 'Check temperature of chilled and frozen goods on arrival.', priority: 'High', riskLevel: 'High', consequence: 'Accepting a delivery that has broken the cold chain is a critical food safety failure.', proof: 'Inbound Temperature Log', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-05', description: 'Inspect packaging for signs of pest activity or tampering.', priority: 'High', riskLevel: 'High', consequence: 'Can introduce a pest infestation into the store.', proof: 'Visual Inspection Log', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-06', description: 'Reject deliveries that do not meet quality standards.', priority: 'High', riskLevel: 'High', consequence: 'The receiving dock is the first and most important line of defense for quality.', proof: 'Rejection Note', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-07', description: 'Verify FSSAI license and other required documents from supplier.', priority: 'High', riskLevel: 'High', consequence: 'Using an unlicensed supplier is a major legal and safety risk.', proof: 'Document Check', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-08', description: 'Update inventory system upon receipt of goods.', priority: 'High', riskLevel: 'High', consequence: 'Delays in updating lead to inaccurate stock levels and potential stockouts.', proof: 'System Entry Log', location: 'System' },
                    { id: 'SC-INBOUND-09', description: 'Clean receiving area after each delivery.', priority: 'High', riskLevel: 'Medium', consequence: 'A dirty receiving area can attract pests and lead to contamination.', proof: 'Cleaning Log', location: 'Receiving Bay' },
                    { id: 'SC-INBOUND-10', description: 'Report any discrepancies to the procurement team.', priority: 'High', riskLevel: 'High', consequence: 'Allows procurement to address issues with the supplier.', proof: 'Discrepancy Report', location: 'System' },
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
                    { id: 'SC-POS-01', description: 'Ensure all POS receipts have a clear timestamp.', priority: 'High', riskLevel: 'Medium', consequence: 'Required for handling customer disputes and returns accurately.', proof: 'Sample Receipt', location: 'POS' },
                    { id: 'SC-POS-02', description: 'Require manager sign-off for all voided transactions or high-value refunds.', priority: 'High', riskLevel: 'High', consequence: 'A key control to prevent internal theft through fraudulent voids/refunds.', proof: 'Void/Refund Log', location: 'POS' },
                    { id: 'SC-POS-03', description: 'Verify CCTV cameras at billing lanes are operational and have a clear view.', priority: 'High', riskLevel: 'High', consequence: 'Provides critical evidence in case of cash disputes, theft, or scams.', proof: 'CCTV Check Log', location: 'Security Office' },
                    { id: 'SC-POS-04', description: 'Reconcile each cash drawer at the end of every shift.', priority: 'High', riskLevel: 'High', consequence: 'The only way to accurately track cash and identify shortages or overages.', proof: 'Shift Reconciliation Report', location: 'Cash Office' },
                    { id: 'SC-POS-05', description: 'Check for any signs of tampering on card payment devices.', priority: 'High', riskLevel: 'High', consequence: 'Criminals can install skimmers to steal customer card data, leading to massive liability.', proof: 'Device Inspection Log', location: 'POS' },
                    { id: 'SC-POS-06', description: 'Securely store cash in a safe.', priority: 'High', riskLevel: 'High', consequence: 'Leaving cash in the till overnight is a major theft risk.', proof: 'Safe Log', location: 'Cash Office' },
                    { id: 'SC-POS-07', description: 'Use counterfeit detection for large cash transactions.', priority: 'High', riskLevel: 'High', consequence: 'Accepting counterfeit notes is a direct financial loss.', proof: 'Counterfeit Check', location: 'POS' },
                    { id: 'SC-POS-08', description: 'Train cashiers on fraud prevention techniques.', priority: 'High', riskLevel: 'High', consequence: 'Untrained cashiers are more likely to make costly mistakes.', proof: 'Training Records', location: 'Office' },
                    { id: 'SC-POS-09', description: 'Limit cash in drawers to a minimum amount.', priority: 'High', riskLevel: 'High', consequence: 'Reduces the potential loss in case of a till-snatch or robbery.', proof: 'Cash Limit Policy', location: 'Office' },
                    { id: 'SC-POS-10', description: 'Investigate cash discrepancies immediately.', priority: 'High', riskLevel: 'High', consequence: 'A small, unresolved discrepancy can be an indicator of a larger, ongoing theft problem.', proof: 'Investigation Report', location: 'Office' },
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
                    { id: 'WSC-01', description: 'Perform a daily zero-check on all weighing scales before use.', priority: 'High', riskLevel: 'High', consequence: 'An uncalibrated scale can lead to overcharging or undercharging customers, a major legal violation.', proof: 'Daily Check Log', location: 'Sales Floor' },
                    { id: 'WSC-02', description: 'Schedule and document annual calibration by a certified vendor.', priority: 'High', riskLevel: 'High', consequence: 'This is a mandatory legal requirement under the Legal Metrology Act.', proof: 'Calibration Certificate', location: 'Office' },
                    { id: 'WSC-03', description: 'Ensure the calibration certificate is displayed near the scale.', priority: 'High', riskLevel: 'Medium', consequence: 'Provides transparency to customers and proof of compliance to inspectors.', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'WSC-04', description: 'Train staff on correct usage and cleaning of scales.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Improper use can damage the scales or lead to inaccurate readings.', proof: 'Training Log', location: 'Office' },
                    { id: 'WSC-05', description: 'Immediately remove any malfunctioning scale from service and label it.', priority: 'High', riskLevel: 'High', consequence: 'Using a faulty scale is a serious legal violation.', proof: 'Out of Service Log', location: 'Sales Floor' },
                    { id: 'WSC-06', description: 'Keep scales clean and free of debris.', priority: 'High', riskLevel: 'Medium', consequence: 'Debris can affect the accuracy of the weight.', proof: 'Cleaning Log', location: 'Sales Floor' },
                    { id: 'WSC-07', description: 'Verify scale accuracy with standard weights weekly.', priority: 'High', riskLevel: 'High', consequence: 'Provides an internal check on the scale\'s accuracy between official calibrations.', proof: 'Weight Check Log', location: 'Office' },
                    { id: 'WSC-08', description: 'Ensure scales are on a level surface.', priority: 'High', riskLevel: 'Medium', consequence: 'An unlevel surface will produce inaccurate readings.', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'WSC-09', description: 'Protect scales from physical damage.', priority: 'High', riskLevel: 'Medium', consequence: 'Damage can affect accuracy and require costly repairs.', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'WSC-10', description: 'Comply with all Legal Metrology regulations.', priority: 'High', riskLevel: 'High', consequence: 'Non-compliance can lead to heavy fines and store closure.', proof: 'Compliance Audit', location: 'Office' },
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
                    { id: 'BHF-01', description: 'Log temperatures of hot holding units every 2 hours.', priority: 'High', riskLevel: 'High', consequence: 'Food held below 60°C can enter the temperature "danger zone" and grow harmful bacteria.', proof: 'Temperature Log', location: 'Hot Food Section' },
                    { id: 'BHF-02', description: 'Trace all ingredients used back to their source batch.', priority: 'High', riskLevel: 'High', consequence: 'In case of a food poisoning complaint, traceability is essential to identify the source.', proof: 'Ingredient Traceability Log', location: 'Bakery/Kitchen' },
                    { id: 'BHF-03', description: 'Use separate equipment for raw and cooked food preparation.', priority: 'High', riskLevel: 'High', consequence: 'Prevents cross-contamination, a leading cause of foodborne illness.', proof: 'Visual Audit', location: 'Bakery/Kitchen' },
                    { id: 'BHF-04', description: 'Discard any food held below the safe temperature for more than 2 hours.', priority: 'High', riskLevel: 'High', consequence: 'Serving this food is a major health risk.', proof: 'Discard Log', location: 'Hot Food Section' },
                    { id: 'BHF-05', description: 'Ensure staff follow correct handwashing and glove usage protocols.', priority: 'High', riskLevel: 'High', consequence: 'Poor hygiene is a primary vector for spreading pathogens.', proof: 'Hygiene Audit', location: 'Bakery/Kitchen' },
                    { id: 'BHF-06', description: 'Label all prepared foods with preparation time and date.', priority: 'High', riskLevel: 'High', consequence: 'Ensures that older food is used or discarded first.', proof: 'Label Check', location: 'Bakery/Kitchen' },
                    { id: 'BHF-07', description: 'Clean and sanitize all surfaces and equipment after use.', priority: 'High', riskLevel: 'High', consequence: 'Prevents buildup of bacteria and allergens.', proof: 'Cleaning Log', location: 'Bakery/Kitchen' },
                    { id: 'BHF-08', description: 'Check for allergens and provide clear labeling.', priority: 'High', riskLevel: 'High', consequence: 'Undeclared allergens can cause severe reactions in sensitive customers.', proof: 'Allergen Label Audit', location: 'Hot Food Section' },
                    { id: 'BHF-09', description: 'Calibrate food thermometers daily.', priority: 'High', riskLevel: 'High', consequence: 'Inaccurate thermometers give a false sense of safety.', proof: 'Calibration Log', location: 'Bakery/Kitchen' },
                    { id: 'BHF-10', description: 'Train staff on food safety procedures.', priority: 'High', riskLevel: 'High', consequence: 'Untrained staff are a major liability in any food handling environment.', proof: 'Training Records', location: 'Office' },
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
                    { id: 'LP-AUDIT-01', description: "Review CCTV footage of cash counters and entry/exit points.", priority: 'High', riskLevel: 'High', consequence: 'Helps identify internal fraud, sweethearting, and external theft.', proof: 'CCTV Review Log', location: 'Security Office' },
                    { id: 'LP-AUDIT-02', description: "Test EAS gates at opening and closing.", priority: 'High', riskLevel: 'High', consequence: 'A non-functional EAS system removes a key layer of theft deterrence.', proof: 'EAS Test Log', location: 'Entrance' },
                    { id: 'LP-AUDIT-03', description: "Conduct random bag checks for staff exiting the store.", priority: 'High', riskLevel: 'High', consequence: 'A necessary deterrent against employee theft.', proof: 'Bag Check Log', location: 'Staff Exit' },
                    { id: 'LP-AUDIT-04', description: "Monitor high-theft categories (e.g., cosmetics, electronics) more frequently.", priority: 'High', riskLevel: 'High', consequence: 'Proactive monitoring can deter organized shoplifting gangs.', proof: 'Aisle Patrol Log', location: 'Sales Floor' },
                    { id: 'LP-AUDIT-05', description: "Ensure all fire exits are alarmed and monitored.", priority: 'High', riskLevel: 'High', consequence: 'Unmonitored fire exits are a common route for large-scale theft.', proof: 'Alarm System Check', location: 'Security Office' },
                    { id: 'LP-AUDIT-06', description: "Audit for empty packaging on shelves.", priority: 'High', riskLevel: 'High', consequence: 'A common sign of theft where the product has been removed and the packaging left behind.', proof: 'Empty Package Log', location: 'Sales Floor' },
                    { id: 'LP-AUDIT-07', description: "Secure and monitor the receiving bay to prevent collusion.", priority: 'High', riskLevel: 'High', consequence: 'Collusion between delivery drivers and receiving staff is a major source of shrinkage.', proof: 'Receiving Bay Audit', location: 'Receiving Bay' },
                    { id: 'LP-AUDIT-08', description: "Train staff on identifying and reporting suspicious activity.", priority: 'High', riskLevel: 'High', consequence: 'Staff are the eyes and ears of the store; they must be empowered to report issues.', proof: 'Training Records', location: 'Office' },
                    { id: 'LP-AUDIT-09', description: "Analyze POS data for fraudulent trends (e.g., excessive voids, returns).", priority: 'High', riskLevel: 'High', consequence: 'Data analysis can uncover sophisticated internal fraud schemes.', proof: 'POS Data Analysis', location: 'System' },
                    { id: 'LP-AUDIT-10', description: "Maintain a log of all security incidents and actions taken.", priority: 'High', riskLevel: 'High', consequence: 'Provides a legal record and helps in identifying repeat offenders and security weaknesses.', proof: 'Incident Logbook', location: 'Security Office' },
                ]
            },
                
        ]
    },
    // --- Corporate & Tech ---
    {
        id: 'facility_management_blueprint',
        title: "Facility Management Blueprint (Enterprise Edition)",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/4214470d-7043-4a0d-b4f0-459223793f41',
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
                    {id: 'DFW-01', description: "Check cleanliness and orderliness of all common areas (lobbies, cafeterias).", priority: 'High', riskLevel: 'Low', consequence: 'Ensures a positive impression for employees and visitors and maintains brand standards.', proof: 'Photo Log', location: 'Common Areas'},
                    {id: 'DFW-02', description: "Inspect restrooms for hygiene, supplies, and any plumbing issues.", priority: 'High', riskLevel: 'Medium', consequence: 'Prevents health issues and addresses plumbing problems before they become major leaks.', proof: 'Restroom Log', location: 'Restrooms'},
                    {id: 'DFW-03', description: "Verify HVAC system status from BMS and check for any alarms.", priority: 'High', riskLevel: 'High', consequence: 'Early detection of HVAC faults prevents system failures that can impact employee comfort or damage critical equipment like servers.', proof: 'BMS Screenshot', location: 'BMS Room'},
                    {id: 'DFW-04', description: "Check for any fused lights or faulty signage and raise a ticket.", priority: 'Medium', riskLevel: 'Low', consequence: 'Maintains a safe and professional environment. Faulty exit signs are a major fire safety violation.', proof: 'Maintenance Ticket', location: 'Entire Facility'},
                    {id: 'DFW-05', description: "Ensure all emergency exit paths are clear and unobstructed.", priority: 'High', riskLevel: 'High', consequence: 'This is a critical life-safety task. A blocked exit can be fatal during a fire or other emergency evacuation.', proof: 'Photo of exit path', location: 'Stairwells/Exits'},
                    {id: 'DFW-06', description: "Check status of water coolers and pantry equipment.", priority: 'Medium', riskLevel: 'Low', consequence: 'Ensures basic amenities for employees are always available.', proof: 'Visual Check', location: 'Pantries'},
                    {id: 'DFW-07', description: 'Inspect exterior of the building for any issues (e.g., broken glass, leaks).', priority: 'Medium', riskLevel: 'Medium', consequence: 'Prevents small issues from becoming large, expensive repairs.', proof: 'Exterior Check Log', location: 'Building Perimeter' },
                    {id: 'DFW-08', description: "Check security desk for any overnight incident reports.", priority: 'High', riskLevel: 'High', consequence: 'Ensures management is aware of any security issues that occurred overnight.', proof: 'Incident Log Review', location: 'Security Desk' },
                    {id: 'DFW-09', description: 'Ensure landscaping is well-maintained.', priority: 'Low', riskLevel: 'Low', consequence: 'A well-maintained exterior contributes to a professional corporate image.', proof: 'Visual Check', location: 'Exterior' },
                    {id: 'DFW-10', description: 'Confirm all access control systems are functional.', priority: 'High', riskLevel: 'High', consequence: 'A faulty access system can compromise the security of the entire facility.', proof: 'Access Control System Check', location: 'Entrances' },
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
                    {id: 'PM-SLA-01', description: "Update the master asset register with any new equipment.", priority: 'High', riskLevel: 'Medium', consequence: 'An inaccurate asset list makes it impossible to plan or track maintenance effectively.', proof: 'Asset Register', location: 'System'},
                    {id: 'PM-SLA-02', description: "Track completion of scheduled preventive maintenance tasks against the calendar.", priority: 'High', riskLevel: 'High', consequence: 'Missed PM tasks lead to unexpected breakdowns, costly repairs, and operational downtime.', proof: 'PM Compliance Report', location: 'System'},
                    {id: 'PM-SLA-03', description: "Update vendor SLA tracker with response and resolution times for recent tickets.", priority: 'High', riskLevel: 'High', consequence: 'Without tracking, you cannot hold vendors accountable for poor performance.', proof: 'SLA Tracker', location: 'System'},
                    {id: 'PM-SLA-04', description: "Review and escalate any SLA breaches to the vendor.", priority: 'High', riskLevel: 'High', consequence: 'Failure to escalate means accepting poor service and potential financial losses from penalties.', proof: 'Escalation Email', location: 'Office'},
                    {id: 'PM-SLA-05', description: "Hold quarterly performance reviews with critical vendors.", priority: 'High', riskLevel: 'High', consequence: 'A crucial step for managing relationships and driving vendor performance improvements.', proof: 'Meeting Minutes', location: 'Office' },
                    {id: 'PM-SLA-06', description: 'Review vendor invoices against work completed.', priority: 'High', riskLevel: 'High', consequence: 'Prevents over-billing and ensures you only pay for services rendered.', proof: 'Invoice Audit', location: 'Finance Office' },
                    {id: 'PM-SLA-07', description: 'Ensure all vendor contracts are current and valid.', priority: 'High', riskLevel: 'High', consequence: 'Working with a vendor on an expired contract creates legal and liability risks.', proof: 'Contract Review', location: 'Legal Office' },
                    {id: 'PM-SLA-08', description: 'Plan PM activities to minimize disruption to operations.', priority: 'High', riskLevel: 'Medium', consequence: 'Poorly planned maintenance can disrupt business and annoy employees.', proof: 'PM Schedule', location: 'Office' },
                    {id: 'PM-SLA-09', description: 'Maintain a stock of critical spare parts.', priority: 'High', riskLevel: 'High', consequence: 'Lack of spares for critical equipment can turn a minor issue into a multi-day outage.', proof: 'Spares Inventory', location: 'Stores' },
                    {id: 'PM-SLA-10', description: 'Analyze breakdown trends to optimize PM schedule.', priority: 'High', riskLevel: 'High', consequence: 'Moves the team from reactive firefighting to proactive, data-driven maintenance.', proof: 'Trend Analysis Report', location: 'Office' },
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
                    {id: 'HKV-01', description: "Conduct random audits of cleaned areas using a zone-wise checklist.", priority: 'High', riskLevel: 'Medium', consequence: 'Ensures cleaning vendor is meeting their contractual obligations.', proof: 'Audit Scorecard', location: 'Various'},
                    {id: 'HKV-02', description: "Verify completion of scheduled deep-cleaning tasks.", priority: 'High', riskLevel: 'Medium', consequence: 'Prevents gradual buildup of dirt in high-traffic areas.', proof: 'Deep Clean Log', location: 'Various'},
                    {id: 'HKV-03', description: "Check consumable stock levels and log restocks.", priority: 'High', riskLevel: 'Low', consequence: 'Empty soap or sanitizer dispensers create a poor impression and a health risk.', proof: 'Restock Log', location: 'Janitor Room'},
                    {id: 'HKV-04', description: 'Review cleaning chemical inventory and dilution logs.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Ensures correct, safe, and cost-effective use of cleaning agents.', proof: 'Chemical Log', location: 'Janitor Room' },
                    {id: 'HKV-05', description: 'Inspect waste management area for cleanliness and proper segregation.', priority: 'High', riskLevel: 'Medium', consequence: 'A dirty waste area attracts pests and can be an environmental compliance issue.', proof: 'Waste Area Audit', location: 'Waste Yard' },
                    {id: 'HKV-06', description: 'Ensure pest control measures are in place and effective.', priority: 'High', riskLevel: 'High', consequence: 'A pest infestation can damage property and corporate reputation.', proof: 'Pest Control Log', location: 'Various' },
                    {id: 'HKV-07', description: 'Check for any damages or stains on furniture and carpets.', priority: 'Medium', riskLevel: 'Low', consequence: 'Maintains a professional appearance for the facility.', proof: 'Damage Report', location: 'Various' },
                    {id: 'HKV-08', description: 'Verify that cleaning staff are using the correct PPE.', priority: 'High', riskLevel: 'Medium', consequence: 'Ensures worker safety and compliance with labor laws.', proof: 'PPE Audit', location: 'Various' },
                    {id: 'HKV-09', description: 'Train housekeeping staff on new cleaning techniques or chemicals.', priority: 'Medium', riskLevel: 'Low', consequence: 'Improves efficiency and ensures safe operation.', proof: 'Training Log', location: 'Office' },
                    {id: 'HKV-10', description: 'Get feedback from employees on the cleanliness of the facility.', priority: 'Medium', riskLevel: 'Low', consequence: 'Helps identify problem areas and improves employee satisfaction.', proof: 'Feedback Survey', location: 'System' },
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
                    {id: 'SEC-VIS-01', description: "Verify identity and pre-authorization for all contractors and visitors.", priority: 'High', riskLevel: 'High', consequence: 'The most critical step to prevent unauthorized individuals from gaining access to the facility.', proof: 'Visitor Log', location: 'Reception'},
                    {id: 'SEC-VIS-02', description: "Issue and log time-bound access cards.", priority: 'High', riskLevel: 'High', consequence: 'Prevents ex-visitors or contractors from retaining access after their work is complete.', proof: 'Access Card Log', location: 'Reception'},
                    {id: 'SEC-VIS-03', description: "Ensure all issued cards are returned upon exit.", priority: 'High', riskLevel: 'High', consequence: 'A missing access card is a major security breach that may require re-keying doors.', proof: 'Access Card Log', location: 'Reception'},
                    {id: 'SEC-VIS-04', description: "Perform daily health check of CCTV system, ensuring all cameras are recording.", priority: 'High', riskLevel: 'High', consequence: 'A non-recording camera provides a false sense of security and no evidence for investigations.', proof: 'CCTV Health Log', location: 'Security Room'},
                    {id: 'SEC-VIS-05', description: "Verify CCTV footage is retained as per the company's retention policy.", priority: 'High', riskLevel: 'High', consequence: 'Crucial footage may be overwritten before an investigation is complete.', proof: 'Storage Audit', location: 'Server Room'},
                    {id: 'SEC-VIS-06', description: 'Perform regular patrols of the facility perimeter.', priority: 'High', riskLevel: 'High', consequence: 'Deters potential intruders and allows for early detection of security breaches.', proof: 'Patrol Log', location: 'Perimeter' },
                    {id: 'SEC-VIS-07', description: 'Test alarm systems weekly.', priority: 'High', riskLevel: 'High', consequence: 'A faulty alarm system will fail when it is needed most.', proof: 'Alarm Test Log', location: 'Security Room' },
                    {id: 'SEC-VIS-08', description: 'Manage parking and vehicle access.', priority: 'High', riskLevel: 'Medium', consequence: 'Prevents unauthorized vehicles from accessing sensitive areas.', proof: 'Parking Log', location: 'Parking Area' },
                    {id: 'SEC-VIS-09', description: 'Screen all incoming mail and packages.', priority: 'High', riskLevel: 'High', consequence: 'Prevents dangerous or unauthorized materials from entering the facility.', proof: 'Mail Screening Log', location: 'Mail Room' },
                    {id: 'SEC-VIS-10', description: 'Maintain an incident log for all security-related events.', priority: 'High', riskLevel: 'High', consequence: 'Provides a legal record and data for analyzing security trends.', proof: 'Security Incident Log', location: 'Security Room' },
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
                    {id: 'UTIL-01', description: "Review Building Management System (BMS) data for any alarms.", priority: 'High', riskLevel: 'High', consequence: 'BMS alarms are the earliest warning of a potential system failure.', proof: 'BMS Log', location: 'BMS Room'},
                    {id: 'UTIL-02', description: "Record daily readings from all major utility meters (electricity, water, gas).", priority: 'High', riskLevel: 'Medium', consequence: 'Provides baseline data for tracking consumption and identifying anomalies.', proof: 'Meter Reading Log', location: 'Meter Rooms'},
                    {id: 'UTIL-03', description: "Analyze daily energy usage and investigate any anomalies.", priority: 'High', riskLevel: 'Medium', consequence: 'A sudden spike in usage can indicate a major leak or equipment malfunction.', proof: 'Usage Analysis Report', location: 'Office'},
                    {id: 'UTIL-04', description: 'Check water treatment plant (WTP) and sewage treatment plant (STP) operational parameters.', priority: 'High', riskLevel: 'High', consequence: 'Failure of these systems can lead to environmental compliance issues and health hazards.', proof: 'WTP/STP Log', location: 'Plant Room' },
                    {id: 'UTIL-05', description: 'Inspect backup generator fuel levels weekly.', priority: 'High', riskLevel: 'High', consequence: 'A generator without fuel is useless in a power outage.', proof: 'Fuel Log', location: 'Generator Room' },
                    {id: 'UTIL-06', description: 'Check HVAC system for unusual noises or vibrations.', priority: 'High', riskLevel: 'High', consequence: 'These are often the first signs of an impending mechanical failure.', proof: 'HVAC Inspection Log', location: 'HVAC Rooms' },
                    {id: 'UTIL-07', description: 'Monitor lighting system for any faults.', priority: 'Medium', riskLevel: 'Low', consequence: 'Ensures a safe and productive work environment.', proof: 'Lighting Log', location: 'Entire Facility' },
                    {id: 'UTIL-08', description: 'Analyze water usage to detect any potential leaks.', priority: 'High', riskLevel: 'Medium', consequence: 'An undetected leak can waste thousands of liters of water and cause structural damage.', proof: 'Water Usage Report', location: 'Office' },
                    {id: 'UTIL-09', description: 'Ensure all utility rooms are clean and accessible.', priority: 'High', riskLevel: 'Medium', consequence: 'Blocked access can delay emergency repairs.', proof: 'Room Inspection', location: 'Utility Rooms' },
                    {id: 'UTIL-10', description: 'Report any utility-related issues immediately.', priority: 'High', riskLevel: 'High', consequence: 'A small issue can quickly escalate into a major system failure.', proof: 'Incident Report', location: 'System' },
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
                    { id: 'TSC-01', description: "Perform a live failover test for the data center UPS system.", priority: 'High', riskLevel: 'High', consequence: 'If the UPS fails to kick in during a power flicker, the entire data center will go down.', proof: 'UPS Test Report', location: 'Data Center' },
                    { id: 'TSC-02', description: "Simulate a power outage to test automatic generator switchover.", priority: 'High', riskLevel: 'High', consequence: 'Ensures the facility can run for an extended period during a city-wide power outage.', proof: 'Generator Failover Test Log', location: 'Generator Room' },
                    { id: 'TSC-03', description: "Test redundant cooling units in the data center.", priority: 'High', riskLevel: 'High', consequence: 'The primary cooling unit failing without a backup will lead to servers overheating and shutting down within minutes.', proof: 'Cooling Test Report', location: 'Data Center' },
                    { id: 'TSC-04', description: "Verify fire suppression system in critical areas is active and certified.", priority: 'High', riskLevel: 'High', consequence: 'A fire in a data center can cause millions of dollars in damage.', proof: 'Fire System Certificate', location: 'Data Center' },
                    { id: 'TSC-05', description: "Check network redundancy by simulating a primary link failure.", priority: 'High', riskLevel: 'High', consequence: 'Ensures business connectivity is maintained if a primary internet line fails.', proof: 'Network Failover Test', location: 'Network Room' },
                    { id: 'TSC-06', description: 'Review and update the disaster recovery plan.', priority: 'High', riskLevel: 'High', consequence: 'An outdated DR plan is ineffective in a real disaster.', proof: 'Updated DR Plan', location: 'Office' },
                    { id: 'TSC-07', description: 'Ensure all critical staff are trained on the DR plan.', priority: 'High', riskLevel: 'High', consequence: 'A great plan is useless if nobody knows how to execute it.', proof: 'DR Training Log', location: 'Office' },
                    { id: 'TSC-08', description: 'Verify offsite backup integrity.', priority: 'High', riskLevel: 'High', consequence: 'The last line of defense against a catastrophic data loss event like ransomware.', proof: 'Backup Restore Test', location: 'Test Environment' },
                    { id: 'TSC-09', description: 'Test emergency communication systems.', priority: 'High', riskLevel: 'High', consequence: 'In a crisis, you must be able to communicate with your response team.', proof: 'Comms Test Log', location: 'Office' },
                    { id: 'TSC-10', description: 'Document all test results and corrective actions.', priority: 'High', riskLevel: 'High', consequence: 'Provides an audit trail of due diligence and a plan for continuous improvement.', proof: 'Test Report', location: 'Office' },
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
                    { id: 'INC-REP-01', description: "Log every incident in a centralized system with timestamps.", priority: 'High', riskLevel: 'Medium', consequence: 'Without a log, incidents are forgotten and patterns cannot be identified.', proof: 'Incident Management System', location: 'System' },
                    { id: 'INC-REP-02', description: "Triage the incident based on its impact and urgency.", priority: 'High', riskLevel: 'High', consequence: 'Failure to prioritize means critical incidents may not get the immediate attention they need.', proof: 'Triage Notes', location: 'System' },
                    { id: 'INC-REP-03', description: "Escalate critical incidents to senior management per the escalation matrix.", priority: 'High', riskLevel: 'High', consequence: 'Management is kept in the dark about major issues, preventing effective crisis management.', proof: 'Escalation Communication', location: 'System' },
                    { id: 'INC-REP-04', description: "Conduct a root-cause analysis (RCA) for all major incidents.", priority: 'High', riskLevel: 'High', consequence: 'Without an RCA, you fix the symptom, not the problem, and the incident will recur.', proof: 'RCA Report', location: 'Office' },
                    { id: 'INC-REP-05', description: "Track all corrective and preventive actions (CAPAs) to closure.", priority: 'High', riskLevel: 'High', consequence: 'Good ideas from the RCA are never implemented, and no real improvement occurs.', proof: 'CAPA Tracker', location: 'System' },
                    { id: 'INC-REP-06', description: 'Communicate incident status to relevant stakeholders.', priority: 'High', riskLevel: 'High', consequence: 'Lack of communication creates confusion and frustration among affected parties.', proof: 'Communication Log', location: 'System' },
                    { id: 'INC-REP-07', description: 'Preserve all evidence related to the incident.', priority: 'High', riskLevel: 'High', consequence: 'Loss of evidence can compromise legal and insurance claims.', proof: 'Evidence Log', location: 'System' },
                    { id: 'INC-REP-08', description: 'Generate incident reports for management review.', priority: 'High', riskLevel: 'High', consequence: 'Provides management with visibility into operational risks.', proof: 'Incident Report', location: 'System' },
                    { id: 'INC-REP-09', description: 'Review incident trends to identify recurring issues.', priority: 'High', riskLevel: 'High', consequence: 'Helps to identify and fix systemic problems.', proof: 'Trend Analysis', location: 'System' },
                    { id: 'INC-REP-10', description: 'Update procedures based on lessons learned from incidents.', priority: 'High', riskLevel: 'High', consequence: 'The final step in turning a negative event into a positive organizational change.', proof: 'Procedure Update Log', location: 'System' },
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
                    { id: 'EHS-01', description: "Inspect for any workplace hazards (e.g., trip hazards, unsafe storage).", priority: 'High', riskLevel: 'High', consequence: 'Unaddressed hazards can lead to employee injuries and regulatory fines.', proof: 'Safety Audit Report', location: 'Entire Facility' },
                    { id: 'EHS-02', description: "Verify compliance with environmental regulations (e.g., waste disposal, emissions).", priority: 'High', riskLevel: 'High', consequence: 'Non-compliance can result in heavy fines and brand damage.', proof: 'Environmental Compliance Log', location: 'Office' },
                    { id: 'EHS-03', description: "Check that first aid kits are fully stocked and accessible.", priority: 'High', riskLevel: 'High', consequence: 'Inability to provide immediate first aid can worsen an injury.', proof: 'First Aid Kit Log', location: 'Various' },
                    { id: 'EHS-04', description: "Ensure all staff have completed mandatory safety training.", priority: 'High', riskLevel: 'High', consequence: 'Untrained staff are a major liability and a root cause of accidents.', proof: 'Training Records', location: 'Office' },
                    { id: 'EHS-05', description: "Review and update risk assessments for all facility activities.", priority: 'High', riskLevel: 'High', consequence: 'An outdated risk assessment does not reflect the current operational reality.', proof: 'Risk Assessment Register', location: 'Office' },
                    { id: 'EHS-06', description: 'Check PPE availability and usage.', priority: 'High', riskLevel: 'High', consequence: 'Failure to provide or enforce PPE usage can lead to serious injuries.', proof: 'PPE Audit', location: 'Various' },
                    { id: 'EHS-07', description: 'Inspect fire safety equipment.', priority: 'High', riskLevel: 'High', consequence: 'A critical life-safety system that must be 100% reliable.', proof: 'Fire Equipment Log', location: 'Entire Facility' },
                    { id: 'EHS-08', description: 'Ensure proper handling and storage of chemicals.', priority: 'High', riskLevel: 'High', consequence: 'Improper storage can lead to spills, hazardous reactions, or fires.', proof: 'Chemical Safety Audit', location: 'Stores' },
                    { id: 'EHS-09', description: 'Check ergonomics of workstations.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Poor ergonomics can lead to long-term repetitive strain injuries.', proof: 'Ergonomics Audit', location: 'Workstations' },
                    { id: 'EHS-10', description: 'Maintain all EHS records for regulatory audits.', priority: 'High', riskLevel: 'High', consequence: 'Lack of records equals lack of compliance in the eyes of an auditor.', proof: 'EHS Record File', location: 'Office' },
                ]
            }
        ]
    },
    {
        id: 'corporate_legal_compliance_starter_kit',
        title: "Corporate Legal & Compliance Starter Kit",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/6487d559-0f62-4217-a006-2580556f8f7c',
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
                { name: "COSO Framework", description: "The global standard for designing and implementing internal controls." }
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
                    {id: 'CAL-01', description: "Update master calendar with all statutory filing due dates.", priority: 'High', riskLevel: 'High', consequence: 'Missing a statutory deadline can result in significant financial penalties and legal action.', proof: 'Compliance Calendar', location: 'System'},
                    {id: 'CAL-02', description: "Assign an owner for each compliance task.", priority: 'High', riskLevel: 'High', consequence: 'Without clear ownership, critical tasks can be missed, leading to non-compliance.', proof: 'Responsibility Matrix', location: 'System'},
                    {id: 'CAL-03', description: "Set automated reminders for 15, 7, and 2 days before each due date.", priority: 'High', riskLevel: 'Medium', consequence: 'Prevents last-minute rushes and reduces the risk of human error in forgetting a deadline.', proof: 'Reminder System Config', location: 'System'},
                    {id: 'CAL-04', description: 'Confirm filings are completed and save acknowledgement receipts.', priority: 'High', riskLevel: 'High', consequence: 'Provides a clear, auditable trail to prove compliance during any regulatory inspection.', proof: 'Filed Returns Folder', location: 'System' },
                    {id: 'CAL-05', description: 'Hold a monthly meeting to review upcoming compliance deadlines.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Ensures cross-functional alignment and proactive management of compliance tasks.', proof: 'Meeting Minutes', location: 'Office' },
                    {id: 'CAL-06', description: 'Review any changes in tax or corporate law.', priority: 'High', riskLevel: 'High', consequence: 'Failure to adapt to new laws leads to non-compliance.', proof: 'Legal Update Summary', location: 'System' },
                    {id: 'CAL-07', description: 'Liaise with external auditors/consultants for filings.', priority: 'High', riskLevel: 'High', consequence: 'Ensures filings are accurate and professionally handled.', proof: 'Communication Log', location: 'System' },
                    {id: 'CAL-08', description: 'Maintain a central repository for all filed documents.', priority: 'High', riskLevel: 'High', consequence: 'Crucial for easily retrieving documents during audits.', proof: 'Document Repository', location: 'System' },
                    {id: 'CAL-09', description: 'Track payment of statutory dues.', priority: 'High', riskLevel: 'High', consequence: 'Late payments result in penalties and interest.', proof: 'Payment Records', location: 'System' },
                    {id: 'CAL-10', description: 'Prepare a monthly compliance report for management.', priority: 'High', riskLevel: 'High', consequence: 'Provides management with visibility into the company\'s compliance posture.', proof: 'Compliance Report', location: 'System' },
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
                    {id: 'POL-01', description: "Ensure all new policies are signed off by a review committee.", priority: 'High', riskLevel: 'Medium', consequence: 'Prevents poorly thought-out policies from being implemented.', proof: 'Signed Policy Document', location: 'System'},
                    {id: 'POL-02', description: "Maintain a version control system for all policies.", priority: 'High', riskLevel: 'Medium', consequence: 'Causes confusion over which version of a policy is currently in effect.', proof: 'Version History Log', location: 'System'},
                    {id: 'POL-03', description: "Track digital acknowledgement from all employees for new/updated policies.", priority: 'High', riskLevel: 'High', consequence: 'Without acknowledgement, it is difficult to enforce a policy or prove an employee was aware of it.', proof: 'Acknowledgement Report', location: 'System'},
                    {id: 'POL-04', description: 'Schedule annual reviews for all key company policies.', priority: 'High', riskLevel: 'Medium', consequence: 'Policies can become outdated and no longer reflect current laws or business practices.', proof: 'Review Calendar', location: 'System' },
                    {id: 'POL-05', description: 'Make all current policies easily accessible to employees on an intranet or portal.', priority: 'High', riskLevel: 'Low', consequence: 'If employees cannot find the policies, they cannot follow them.', proof: 'Intranet Page Link', location: 'System' },
                    {id: 'POL-06', description: 'Communicate policy changes to all employees.', priority: 'High', riskLevel: 'Medium', consequence: 'Employees cannot follow policies they are not aware of.', proof: 'Communication Record', location: 'System' },
                    {id: 'POL-07', description: 'Train employees on new or complex policies.', priority: 'High', riskLevel: 'Medium', consequence: 'Ensures that policies are understood, not just acknowledged.', proof: 'Training Records', location: 'System' },
                    {id: 'POL-08', description: 'Ensure policies are aligned with current laws and regulations.', priority: 'High', riskLevel: 'High', consequence: 'An illegal policy can expose the company to significant legal risk.', proof: 'Legal Review', location: 'System' },
                    {id: 'POL-09', description: 'Archive old policy versions.', priority: 'Medium', riskLevel: 'Low', consequence: 'Keeps the policy library clean and avoids confusion.', proof: 'Archive Log', location: 'System' },
                    {id: 'POL-10', description: 'Get feedback from employees on policy clarity and effectiveness.', priority: 'Medium', riskLevel: 'Low', consequence: 'Helps to write better, more practical policies in the future.', proof: 'Feedback Survey', location: 'System' },
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
                    {id: 'CON-01', description: "Check every contract against a checklist of minimum required legal clauses.", priority: 'High', riskLevel: 'High', consequence: 'Signing a contract without key clauses (e.g., liability, termination) can be disastrous.', proof: 'Contract Review Checklist', location: 'System'},
                    {id: 'CON-02', description: "Verify the signatory has the authority to sign based on the authority matrix.", priority: 'High', riskLevel: 'High', consequence: 'A contract signed by an unauthorized person may not be legally binding.', proof: 'Authority Matrix', location: 'System'},
                    {id: 'CON-03', description: "Store all signed contracts in a central, secure repository.", priority: 'High', riskLevel: 'High', consequence: 'Inability to find a contract when it\'s needed for a dispute or renewal.', proof: 'Contract Register', location: 'System'},
                    {id: 'CON-04', description: "Set reminders for all contract expiry or renewal dates.", priority: 'High', riskLevel: 'Medium', consequence: 'A critical contract could expire unexpectedly, disrupting business operations.', proof: 'Calendar System', location: 'System'},
                    {id: 'CON-05', description: 'Log key obligations and dates from each contract into a summary sheet.', priority: 'High', riskLevel: 'Medium', consequence: 'Key deliverables or deadlines can be missed if they are buried in legal text.', proof: 'Contract Summary Sheet', location: 'System' },
                    {id: 'CON-06', description: 'Ensure all contracts are reviewed by the legal department.', priority: 'High', riskLevel: 'High', consequence: 'Signing contracts without legal review is a major source of corporate risk.', proof: 'Legal Approval', location: 'System' },
                    {id: 'CON-07', description: 'Standardize contract templates where possible.', priority: 'High', riskLevel: 'Medium', consequence: 'Speeds up the contracting process and reduces legal review time.', proof: 'Template Library', location: 'System' },
                    {id: 'CON-08', description: 'Track contract negotiations and versions.', priority: 'High', riskLevel: 'Medium', consequence: 'Prevents confusion over which version is the final one.', proof: 'Version History', location: 'System' },
                    {id: 'CON-09', description: 'Ensure proper execution of contracts (signing, stamping).', priority: 'High', riskLevel: 'High', consequence: 'An improperly executed contract may not be legally enforceable.', proof: 'Executed Contract', location: 'System' },
                    {id: 'CON-10', description: 'Audit contracts periodically for compliance.', priority: 'High', riskLevel: 'High', consequence: 'Ensures that obligations within the contracts are being met.', proof: 'Contract Audit Report', location: 'System' },
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
                    {id: 'AUD-01', description: "Define and agree on the audit scope and criteria.", priority: 'High', riskLevel: 'Medium', consequence: 'An unclear scope leads to an ineffective and unfocused audit.', proof: 'Audit Scope Document', location: 'Office'},
                    {id: 'AUD-02', description: "Execute the audit using a standardized checklist.", priority: 'High', riskLevel: 'Medium', consequence: 'Ensures consistency and that all key areas are covered.', proof: 'Completed Audit Checklist', location: 'Audit Site'},
                    {id: 'AUD-03', description: "Issue a Non-Conformance Report (NCR) for any findings.", priority: 'High', riskLevel: 'High', consequence: 'Without a formal NCR, issues are not officially documented and can be ignored.', proof: 'NCR Form', location: 'System'},
                    {id: 'AUD-04', description: "Track all Corrective and Preventive Actions (CAPAs) to closure.", priority: 'High', riskLevel: 'High', consequence: 'The most critical step; without it, the audit is just a report with no action.', proof: 'CAPA Tracker', location: 'System'},
                    {id: 'AUD-05', description: 'Verify the effectiveness of implemented CAPAs in a follow-up audit.', priority: 'High', riskLevel: 'High', consequence: 'Ensures that the fix was effective and the problem is truly solved.', proof: 'Verification Report', location: 'System' },
                    {id: 'AUD-06', description: 'Prepare a formal audit report for management.', priority: 'High', riskLevel: 'High', consequence: 'Provides management with visibility into compliance and operational risks.', proof: 'Audit Report', location: 'System' },
                    {id: 'AUD-07', description: 'Hold an audit closing meeting with the auditee.', priority: 'High', riskLevel: 'Medium', consequence: 'Ensures alignment on findings and the path forward.', proof: 'Meeting Minutes', location: 'Office' },
                    {id: 'AUD-08', description: 'Maintain all audit records for future reference.', priority: 'High', riskLevel: 'Medium', consequence: 'Essential for tracking trends and for external regulatory audits.', proof: 'Audit File', location: 'System' },
                    {id: 'AUD-09', description: 'Ensure auditors are independent of the process being audited.', priority: 'High', riskLevel: 'High', consequence: 'An audit conducted by the process owner is not credible.', proof: 'Auditor Assignment', location: 'System' },
                    {id: 'AUD-10', description: 'Train internal auditors on audit methodologies.', priority: 'High', riskLevel: 'Medium', consequence: 'Untrained auditors can miss critical issues or conduct unfair audits.', proof: 'Training Records', location: 'System' },
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
                    {id: 'WB-01', description: "Provide a clear and anonymous channel for employees to report concerns.", priority: 'High', riskLevel: 'High', consequence: 'If there is no safe channel, serious issues like fraud or harassment will go unreported.', proof: 'Whistleblower Policy', location: 'Intranet'},
                    {id: 'WB-02', description: "Acknowledge receipt of a complaint within a defined timeline (e.g., 48 hours).", priority: 'High', riskLevel: 'High', consequence: 'Failure to acknowledge discourages future reporting.', proof: 'Acknowledgement Log', location: 'System'},
                    {id: 'WB-03', description: "Conduct a confidential investigation within a set timeline.", priority: 'High', riskLevel: 'High', consequence: 'Delayed investigations can lead to loss of evidence and continued wrongdoing.', proof: 'Investigation Plan', location: 'Office'},
                    {id: 'WB-04', description: "Provide protection against retaliation for the whistleblower.", priority: 'High', riskLevel: 'High', consequence: 'Fear of retaliation is the number one reason people do not report misconduct.', proof: 'Policy Document', location: 'HR'},
                    {id: 'WB-05', description: "Report findings and actions to the board's audit committee.", priority: 'High', riskLevel: 'High', consequence: 'Ensures top-level oversight and accountability.', proof: 'Board Report', location: 'Office'},
                    {id: 'WB-06', description: 'Maintain confidentiality throughout the process.', priority: 'High', riskLevel: 'High', consequence: 'A breach of confidentiality can destroy trust in the system.', proof: 'Confidentiality Agreements', location: 'Office' },
                    {id: 'WB-07', description: 'Document all investigation steps and evidence.', priority: 'High', riskLevel: 'High', consequence: 'Creates a defensible record in case of legal challenges.', proof: 'Investigation File', location: 'Office' },
                    {id: 'WB-08', description: 'Communicate the outcome to the whistleblower, if appropriate.', priority: 'High', riskLevel: 'High', consequence: 'Provides closure and shows that the report was taken seriously.', proof: 'Communication Log', location: 'Office' },
                    {id: 'WB-09', description: 'Take disciplinary action if the complaint is substantiated.', priority: 'High', riskLevel: 'High', consequence: 'Failure to act on findings makes the entire process meaningless.', proof: 'Disciplinary Action Record', location: 'HR' },
                    {id: 'WB-10', description: 'Train all employees on the whistleblowing policy.', priority: 'High', riskLevel: 'Medium', consequence: 'Employees cannot use a policy they are not aware of.', proof: 'Training Records', location: 'HR' },
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
                    { id: 'BM-01', description: 'Send out meeting notice and agenda within the statutory notice period.', priority: 'High', riskLevel: 'High', consequence: 'Failure to do so can invalidate the entire meeting and its resolutions.', proof: 'Meeting Notice', location: 'Email' },
                    { id: 'BM-02', description: 'Compile and circulate the board pack with all relevant documents.', priority: 'High', riskLevel: 'Medium', consequence: 'A late or incomplete board pack leads to unprepared directors and poor decision-making.', proof: 'Board Pack', location: 'Portal' },
                    { id: 'BM-03', description: 'Ensure quorum is present at the start of the meeting.', priority: 'High', riskLevel: 'High', consequence: 'A meeting without quorum is legally invalid.', proof: 'Attendance Sheet', location: 'Meeting' },
                    { id: 'BM-04', description: 'Take detailed minutes of the meeting, recording all resolutions.', priority: 'High', riskLevel: 'High', consequence: 'Poor minutes create ambiguity and are a major corporate governance failure.', proof: 'Draft Minutes', location: 'Office' },
                    { id: 'BM-05', description: 'File any necessary forms with the ROC post-meeting.', priority: 'High', riskLevel: 'High', consequence: 'Failure to file can lead to penalties.', proof: 'ROC Filing Receipt', location: 'System' },
                    { id: 'BM-06', description: 'Get minutes confirmed and signed in the next meeting.', priority: 'High', riskLevel: 'High', consequence: 'Creates the final, legally binding record of the meeting.', proof: 'Signed Minutes', location: 'Minute Book' },
                    { id: 'BM-07', description: 'Track action items from the meeting.', priority: 'High', riskLevel: 'Medium', consequence: 'Board decisions are not implemented if actions are not tracked.', proof: 'Action Tracker', location: 'System' },
                    { id: 'BM-08', description: 'Maintain all board meeting records.', priority: 'High', riskLevel: 'High', consequence: 'Essential for legal, regulatory, and historical purposes.', proof: 'Board Records File', location: 'Office' },
                    { id: 'BM-09', description: 'Ensure compliance with all secretarial standards.', priority: 'High', riskLevel: 'High', consequence: 'Non-compliance can lead to regulatory action.', proof: 'Compliance Certificate', location: 'Office' },
                    { id: 'BM-10', description: 'Arrange logistics for the board meeting (venue, tech).', priority: 'Medium', riskLevel: 'Low', consequence: 'Poor logistics can disrupt the meeting.', proof: 'Logistics Plan', location: 'Office' },
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
                    { id: 'DP-01', description: 'Maintain a data map of all personal data collected and processed.', priority: 'High', riskLevel: 'High', consequence: 'You cannot protect data if you don\'t know where it is.', proof: 'Data Map Document', location: 'System' },
                    { id: 'DP-02', description: 'Review all public-facing forms to ensure clear consent is taken.', priority: 'High', riskLevel: 'High', consequence: 'Collecting data without valid consent is a primary violation of privacy laws.', proof: 'Form Audit', location: 'Website/App' },
                    { id: 'DP-03', description: 'Audit Data Processing Agreements (DPAs) with all vendors handling personal data.', priority: 'High', riskLevel: 'High', consequence: 'Your company is liable for data breaches caused by your vendors if you don\'t have a DPA.', proof: 'DPA Register', location: 'System' },
                    { id: 'DP-04', description: 'Test the process for handling data subject access requests (DSARs).', priority: 'High', riskLevel: 'High', consequence: 'Failure to respond to a DSAR within the legal timeframe can lead to fines.', proof: 'DSAR Test Log', location: 'System' },
                    { id: 'DP-05', description: 'Conduct privacy awareness training for all employees.', priority: 'High', riskLevel: 'Medium', consequence: 'Human error is a leading cause of data breaches.', proof: 'Training Records', location: 'HR' },
                    { id: 'DP-06', description: 'Ensure privacy policy is up-to-date and accessible.', priority: 'High', riskLevel: 'High', consequence: 'An outdated privacy policy is a legal and transparency failure.', proof: 'Privacy Policy on Website', location: 'Website' },
                    { id: 'DP-07', description: 'Conduct a Data Protection Impact Assessment (DPIA) for new projects.', priority: 'High', riskLevel: 'High', consequence: 'Required by law for high-risk data processing activities.', proof: 'DPIA Report', location: 'System' },
                    { id: 'DP-08', description: 'Review and test data breach response plan.', priority: 'High', riskLevel: 'High', consequence: 'A chaotic response to a data breach will worsen the financial and reputational damage.', proof: 'Breach Drill Report', location: 'System' },
                    { id: 'DP-09', description: 'Verify data is retained only as long as necessary.', priority: 'High', riskLevel: 'High', consequence: 'Keeping data forever ("data hoarding") increases risk and violates data minimization principles.', proof: 'Data Retention Policy Audit', location: 'System' },
                    { id: 'DP-10', description: 'Ensure cross-border data transfers are compliant.', priority: 'High', riskLevel: 'High', consequence: 'Illegal data transfers can lead to major international fines.', proof: 'Transfer Mechanism documentation', location: 'System' },
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
                    { id: 'DA-01', description: 'Issue a formal show-cause notice to the employee, detailing the allegations.', priority: 'High', riskLevel: 'High', consequence: 'Failure to provide a formal notice can be grounds for a wrongful termination lawsuit.', proof: 'Show-Cause Notice', location: 'Employee File' },
                    { id: 'DA-02', description: 'Conduct a neutral and documented investigation into the matter.', priority: 'High', riskLevel: 'High', consequence: 'A biased or poorly documented investigation will not stand up in court.', proof: 'Investigation Report', location: 'HR File' },
                    { id: 'DA-03', description: 'Give the employee a chance to respond to the allegations.', priority: 'High', riskLevel: 'High', consequence: 'This is a fundamental principle of natural justice and a legal requirement.', proof: 'Employee Response', location: 'Employee File' },
                    { id: 'DA-04', description: 'Document the final decision and the reasoning behind it.', priority: 'High', riskLevel: 'High', consequence: 'Provides a clear record of why a particular action was taken.', proof: 'Final Decision Letter', location: 'Employee File' },
                    { id: 'DA-05', description: 'Ensure all actions comply with company policy and local labor laws.', priority: 'High', riskLevel: 'High', consequence: 'Non-compliance can lead to reinstatement of the employee and penalties.', proof: 'Legal Review', location: 'Legal Dept' },
                    { id: 'DA-06', description: 'Maintain confidentiality throughout the process.', priority: 'High', riskLevel: 'High', consequence: 'Breaches of confidentiality can lead to defamation claims.', proof: 'Confidentiality Undertaking', location: 'HR File' },
                    { id: 'DA-07', description: 'Provide the employee with a copy of all relevant documents.', priority: 'High', riskLevel: 'High', consequence: 'Ensures transparency and fairness in the process.', proof: 'Acknowledgement of Receipt', location: 'Employee File' },
                    { id: 'DA-08', description: 'Ensure consistency in disciplinary actions for similar offenses.', priority: 'High', riskLevel: 'High', consequence: 'Inconsistency can be seen as discrimination.', proof: 'Precedent Review', location: 'HR File' },
                    { id: 'DA-09', description: 'Consult with legal counsel for serious cases.', priority: 'High', riskLevel: 'High', consequence: 'Crucial for managing high-risk terminations.', proof: 'Legal Consultation Log', location: 'Legal Dept' },
                    { id: 'DA-10', description: 'Properly document the entire process from start to finish.', priority: 'High', riskLevel: 'High', consequence: 'A complete file is your best defense in any future legal challenge.', proof: 'Complete Case File', location: 'HR File' },
                ]
            }
        ]
    },
    {
        id: 'enterprise_risk_cybersecurity_pack',
        title: "Enterprise Risk & Cybersecurity Pack",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/97193699-548c-4443-8517-4343169829f2',
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
                    {id: 'AR-01', description: "Generate a list of all users with privileged access.", priority: 'High', riskLevel: 'High', consequence: 'Failing to review privileged access can lead to "privilege creep," where ex-employees or users who changed roles retain unnecessary, high-risk access.', proof: 'User Access Report', location: 'System'},
                    {id: 'AR-02', description: "Manager of each privileged user to re-approve access quarterly.", priority: 'High', riskLevel: 'High', consequence: 'Without business owner approval, IT may not know if access is still required, creating a significant security gap.', proof: 'Approval Emails/Tickets', location: 'System'},
                    {id: 'AR-03', description: "Remove access for any stale accounts (e.g., inactive for 90 days).", priority: 'High', riskLevel: 'High', consequence: 'Dormant or orphaned accounts are a primary target for hackers to gain a foothold in the network undetected.', proof: 'Deactivation Log', location: 'System'},
                    {id: 'AR-04', description: "Verify that Multi-Factor Authentication (MFA) is enforced for all admin accounts.", priority: 'High', riskLevel: 'High', consequence: 'A single compromised password for an admin account without MFA can lead to a full network takeover.', proof: 'MFA Configuration Report', location: 'System'},
                    {id: 'AR-05', description: "Implement Just-In-Time (JIT) access for critical administrative tasks where possible.", priority: 'Medium', riskLevel: 'High', consequence: 'Without JIT, admin accounts have standing privileges, increasing the window of opportunity for an attacker if the account is compromised.', proof: 'JIT System Logs', location: 'System'},
                    {id: 'AR-06', description: 'Review third-party vendor access to your systems.', priority: 'High', riskLevel: 'High', consequence: 'Vendors are a common vector for breaches; their access must be strictly controlled.', proof: 'Vendor Access Review', location: 'System' },
                    {id: 'AR-07', description: 'Ensure the principle of least privilege is applied to all accounts.', priority: 'High', riskLevel: 'High', consequence: 'Giving users more access than they need for their job creates unnecessary risk.', proof: 'Role-Based Access Control (RBAC) Audit', location: 'System' },
                    {id: 'AR-08', description: 'Audit changes to user access rights.', priority: 'High', riskLevel: 'High', consequence: 'Unauthorized changes to permissions can indicate a security breach.', proof: 'Access Change Log', location: 'System' },
                    {id: 'AR-09', description: 'Train staff on the importance of access control.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Users who do not understand security may share passwords or request excessive permissions.', proof: 'Training Records', location: 'HR' },
                    {id: 'AR-10', description: 'Log all access attempts, both successful and failed.', priority: 'High', riskLevel: 'High', consequence: 'Failed login attempts can be an early indicator of a brute-force attack.', proof: 'Access Logs', location: 'SIEM' },
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
                    {id: 'PMW-01', description: "Scan all systems for missing patches weekly.", priority: 'High', riskLevel: 'High', consequence: 'Unpatched systems are the most common way hackers gain entry into networks.', proof: 'Vulnerability Scan Report', location: 'System'},
                    {id: 'PMW-02', description: "Classify patches based on severity (e.g., critical, high, medium).", priority: 'High', riskLevel: 'High', consequence: 'Failure to prioritize allows critical vulnerabilities to remain unpatched for too long.', proof: 'Patch Classification Matrix', location: 'System'},
                    {id: 'PMW-03', description: "Test all critical patches in a staging environment before production deployment.", priority: 'High', riskLevel: 'High', consequence: 'A faulty patch can bring down a critical production system, causing a major outage.', proof: 'Test Report', location: 'Staging Environment'},
                    {id: 'PMW-04', description: "Deploy critical patches within a defined SLA (e.g., 14 days).", priority: 'High', riskLevel: 'High', consequence: 'The longer a critical vulnerability is open, the higher the chance it will be exploited.', proof: 'Deployment Logs', location: 'Production Systems'},
                    {id: 'PMW-05', description: "Have a documented rollback plan for any patch that causes issues.", priority: 'High', riskLevel: 'Medium', consequence: 'Without a plan, recovering from a bad patch can take hours or days.', proof: 'Rollback Plan Document', location: 'System'},
                    {id: 'PMW-06', description: 'Maintain an inventory of all software and versions.', priority: 'High', riskLevel: 'Medium', consequence: 'You cannot patch what you do not know you have.', proof: 'Software Inventory', location: 'System' },
                    {id: 'PMW-07', description: 'Subscribe to vendor security advisories.', priority: 'High', riskLevel: 'High', consequence: 'You may not be aware of a critical vulnerability until it is too late.', proof: 'Subscription Confirmation', location: 'System' },
                    {id: 'PMW-08', description: 'Automate patch deployment where possible.', priority: 'High', riskLevel: 'Medium', consequence: 'Manual patching is slow, error-prone, and does not scale.', proof: 'Automation Script/Tool Config', location: 'System' },
                    {id: 'PMW-09', description: 'Verify successful patch installation.', priority: 'High', riskLevel: 'High', consequence: 'A failed patch installation provides a false sense of security.', proof: 'Verification Scan', location: 'System' },
                    {id: 'PMW-10', description: 'Report on patch compliance to management.', priority: 'High', riskLevel: 'High', consequence: 'Provides visibility into the organization\'s risk posture.', proof: 'Compliance Report', location: 'System' },
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
                    {id: 'BCDR-01', description: "Define and document Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).", priority: 'High', riskLevel: 'High', consequence: 'Without clear objectives, you cannot design an effective backup and recovery strategy.', proof: 'BIA Document', location: 'Office'},
                    {id: 'BCDR-02', description: "Verify weekly that all critical system backups completed successfully.", priority: 'High', riskLevel: 'High', consequence: 'A failed backup means you have no data to restore in a disaster.', proof: 'Backup Logs', location: 'System'},
                    {id: 'BCDR-03', description: "Perform a quarterly test restore of a critical system from backup.", priority: 'High', riskLevel: 'High', consequence: 'Backups are useless if they cannot be restored. This is the only way to prove they work.', proof: 'Test Restore Report', location: 'Test Environment'},
                    {id: 'BCDR-04', description: "Ensure a copy of critical backups is stored in an offsite, encrypted location.", priority: 'High', riskLevel: 'High', consequence: 'An on-site fire or flood could destroy both your primary data and your backups.', proof: 'Offsite Storage Log', location: 'Vendor/Cloud'},
                    {id: 'BCDR-05', description: "Conduct an annual disaster recovery drill with a full playbook.", priority: 'High', riskLevel: 'High', consequence: 'A drill identifies gaps in your plan and trains the team to respond effectively under pressure.', proof: 'DR Drill Report', location: 'Office'},
                    {id: 'BCDR-06', description: 'Review and update the DR plan annually.', priority: 'High', riskLevel: 'High', consequence: 'An outdated DR plan may have incorrect contact details or procedures.', proof: 'Updated DR Plan', location: 'Office' },
                    {id: 'BCDR-07', description: 'Test failover of redundant systems.', priority: 'High', riskLevel: 'High', consequence: 'Proves that your high-availability systems will actually work in a real failure.', proof: 'Failover Test Report', location: 'Production' },
                    {id: 'BCDR-08', description: 'Ensure all critical data is included in backup jobs.', priority: 'High', riskLevel: 'High', consequence: 'Forgetting to back up a critical database can be catastrophic.', proof: 'Backup Job Configuration', location: 'System' },
                    {id: 'BCDR-09', description: 'Verify integrity of backup media.', priority: 'High', riskLevel: 'High', consequence: 'Corrupt backup tapes or files cannot be restored.', proof: 'Media Check Log', location: 'System' },
                    {id: 'BCDR-10', description: 'Train staff on their roles in the DR plan.', priority: 'High', riskLevel: 'High', consequence: 'A plan is useless if the team does not know how to execute it.', proof: 'Training Records', location: 'HR' },
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
                    {id: 'IR-01', description: "Triage the incident to determine its severity and scope.", priority: 'High', riskLevel: 'High', consequence: 'Misclassifying a major incident as minor can lead to a delayed and inadequate response.', proof: 'Triage Report', location: 'War Room'},
                    {id: 'IR-02', description: "Isolate the affected systems from the network to prevent spread.", priority: 'High', riskLevel: 'High', consequence: 'The single most important step to contain a ransomware or malware outbreak.', proof: 'Network Change Log', location: 'System'},
                    {id: 'IR-03', description: "Preserve all relevant logs and create forensic images of affected systems.", priority: 'High', riskLevel: 'High', consequence: 'Destroying evidence makes it impossible to investigate the incident or pursue legal action.', proof: 'Chain of Custody Form', location: 'System'},
                    {id: 'IR-04', description: "Notify key stakeholders (legal, management, comms) according to the plan.", priority: 'High', riskLevel: 'High', consequence: 'A disorganized communication strategy leads to chaos and conflicting messages.', proof: 'Communication Log', location: 'War Room'},
                    {id: 'IR-05', description: "Engage external forensics or legal counsel if required.", priority: 'High', riskLevel: 'High', consequence: 'Delaying expert help can worsen the incident and increase legal liability.', proof: 'Engagement Letter', location: 'Office'},
                    {id: 'IR-06', description: "Notify regulatory bodies (e.g., CERT-In) within the required timeframe.", priority: 'High', riskLevel: 'High', consequence: 'Failure to report a breach within the legal window (e.g., 72 hours for GDPR) leads to massive fines.', proof: 'Regulatory Filing', location: 'Office'},
                    {id: 'IR-07', description: 'Eradicate the threat and restore systems from a clean backup.', priority: 'High', riskLevel: 'High', consequence: 'Restoring from a compromised backup will just re-infect the system.', proof: 'Eradication Report', location: 'System' },
                    {id: 'IR-08', description: 'Conduct a post-incident review to identify lessons learned.', priority: 'High', riskLevel: 'High', consequence: 'Failure to learn from an incident makes it likely to happen again.', proof: 'Post-Incident Report', location: 'Office' },
                    {id: 'IR-09', description: 'Update security controls based on the incident.', priority: 'High', riskLevel: 'High', consequence: 'Turns the incident into a driver for security improvement.', proof: 'Control Change Log', location: 'System' },
                    {id: 'IR-10', description: 'Communicate with affected parties (customers, employees) as required.', priority: 'High', riskLevel: 'High', consequence: 'Poor communication can destroy customer trust and lead to regulatory action.', proof: 'Communication Plan Execution', location: 'Office' },
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
                    {id: 'VSA-01', description: "Send a standardized security questionnaire to the vendor before onboarding.", priority: 'High', riskLevel: 'High', consequence: 'Onboarding a vendor without assessing their security is a major supply chain risk.', proof: 'Completed Questionnaire', location: 'Vendor File'},
                    {id: 'VSA-02', description: "For critical vendors, request their latest penetration test report or SOC 2 report.", priority: 'High', riskLevel: 'High', consequence: 'Trusting a vendor\'s claims without third-party validation is negligent.', proof: 'Vendor Security Reports', location: 'Vendor File'},
                    {id: 'VSA-03', description: "Ensure the vendor contract includes robust security and data protection clauses.", priority: 'High', riskLevel: 'High', consequence: 'A weak contract provides no legal recourse if the vendor causes a data breach.', proof: 'Signed Contract', location: 'Legal'},
                    {id: 'VSA-04', description: "Conduct an annual security review for all critical vendors.", priority: 'High', riskLevel: 'High', consequence: 'A vendor\'s security posture can degrade over time; it must be re-verified.', proof: 'Annual Review Report', location: 'Vendor File'},
                    {id: 'VSA-05', description: 'Define clear SLAs for vulnerability remediation for all vendors.', priority: 'High', riskLevel: 'High', consequence: 'Holds the vendor contractually accountable for fixing security flaws in their product.', proof: 'Contract Clause', location: 'Legal' },
                    {id: 'VSA-06', description: 'Review vendor access to your systems and data.', priority: 'High', riskLevel: 'High', consequence: 'Vendors should only have the minimum necessary access to do their job.', proof: 'Vendor Access Audit', location: 'System' },
                    {id: 'VSA-07', description: 'Assess the vendor\'s own supply chain security.', priority: 'High', riskLevel: 'High', consequence: 'A vendor can be secure, but if their suppliers are not, it creates a risk for you.', proof: 'Supply Chain Assessment', location: 'Vendor File' },
                    {id: 'VSA-08', description: 'Ensure vendor has a data breach notification process.', priority: 'High', riskLevel: 'High', consequence: 'The vendor must be contractually obligated to notify you immediately of a breach.', proof: 'Breach Notification Clause', location: 'Contract' },
                    {id: 'VSA-09', description: 'Classify vendors based on their risk level.', priority: 'High', riskLevel: 'High', consequence: 'Allows you to focus security resources on the highest-risk vendors.', proof: 'Vendor Risk Classification', location: 'System' },
                    {id: 'VSA-10', description: 'Terminate contracts with non-compliant vendors.', priority: 'High', riskLevel: 'High', consequence: 'The ultimate tool for enforcing security standards in your supply chain.', proof: 'Termination Record', location: 'Legal' },
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
                    { id: 'FRR-01', description: 'Review all firewall rules against business justification.', priority: 'High', riskLevel: 'High', consequence: 'Rules without a business justification can be a security hole left by a previous project.', proof: 'Rule Review Log', location: 'System' },
                    { id: 'FRR-02', description: 'Remove any obsolete or overly permissive rules.', priority: 'High', riskLevel: 'High', consequence: 'Reduces the attack surface of the network.', proof: 'Change Request Ticket', location: 'System' },
                    { id: 'FRR-03', description: 'Ensure an implicit deny rule is at the bottom of the ACL.', priority: 'High', riskLevel: 'High', consequence: 'The foundational principle of firewall security: what is not expressly permitted is denied.', proof: 'Firewall Configuration', location: 'System' },
                    { id: 'FRR-04', description: 'Document the purpose and owner of every rule.', priority: 'High', riskLevel: 'Medium', consequence: 'Without documentation, it is impossible to conduct a meaningful review.', proof: 'Rule Base Documentation', location: 'System' },
                    { id: 'FRR-05', description: 'Analyze firewall logs for unusual traffic patterns.', priority: 'High', riskLevel: 'High', consequence: 'Can help detect malware command-and-control traffic or data exfiltration.', proof: 'Log Analysis Report', location: 'SIEM' },
                    { id: 'FRR-06', description: 'Validate firewall rules after any network changes.', priority: 'High', riskLevel: 'High', consequence: 'Prevents accidental misconfigurations that could open security holes.', proof: 'Validation Report', location: 'System' },
                    { id: 'FRR-07', description: 'Ensure firewall software is up-to-date.', priority: 'High', riskLevel: 'High', consequence: 'Firewalls themselves can have vulnerabilities that need to be patched.', proof: 'Firmware Version Check', location: 'System' },
                    { id: 'FRR-08', description: 'Test firewall failover capabilities.', priority: 'High', riskLevel: 'High', consequence: 'Ensures business continuity if the primary firewall fails.', proof: 'Failover Test Report', location: 'System' },
                    { id: 'FRR-09', description: 'Review and approve all new firewall rule requests.', priority: 'High', riskLevel: 'High', consequence: 'Prevents ad-hoc, insecure rules from being added.', proof: 'Approval Workflow', location: 'System' },
                    { id: 'FRR-10', description: 'Conduct an annual external penetration test of the firewall.', priority: 'High', riskLevel: 'High', consequence: 'Provides an independent, real-world test of your firewall\'s effectiveness.', proof: 'Pen Test Report', location: 'System' },
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
                    { id: 'PST-01', description: 'Design and launch a quarterly phishing simulation campaign.', priority: 'High', riskLevel: 'High', consequence: 'The only way to measure how susceptible your employees are to real-world phishing attacks.', proof: 'Campaign Report', location: 'Simulation Platform' },
                    { id: 'PST-02', description: 'Track click rates and other metrics.', priority: 'High', riskLevel: 'Medium', consequence: 'Provides data to measure the effectiveness of your training program over time.', proof: 'Campaign Dashboard', location: 'Simulation Platform' },
                    { id: 'PST-03', description: 'Assign remedial training to employees who failed the simulation.', priority: 'High', riskLevel: 'Medium', consequence: 'Targets training resources to the most vulnerable users.', proof: 'Training Assignment Log', location: 'LMS' },
                    { id: 'PST-04', description: 'Share anonymized results with management to show trends.', priority: 'Medium', riskLevel: 'Low', consequence: 'Demonstrates the value of the security awareness program to leadership.', proof: 'Management Report', location: 'Office' },
                    { id: 'PST-05', description: 'Update simulation templates to reflect current phishing trends.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Using the same old templates makes the simulations too easy and unrealistic.', proof: 'Template Library', location: 'Simulation Platform' },
                    { id: 'PST-06', description: 'Conduct spear-phishing simulations for high-risk users.', priority: 'High', riskLevel: 'High', consequence: 'Executives and finance personnel are high-value targets and need targeted testing.', proof: 'Spear-phishing Campaign Report', location: 'Simulation Platform' },
                    { id: 'PST-07', description: 'Provide regular security awareness newsletters.', priority: 'Medium', riskLevel: 'Low', consequence: 'Keeps security top-of-mind for all employees.', proof: 'Newsletter Archive', location: 'System' },
                    { id: 'PST-08', description: 'Train employees on how to report phishing emails.', priority: 'High', riskLevel: 'Medium', consequence: 'Turns employees from potential victims into part of the defense system.', proof: 'Reporting Instructions', location: 'Intranet' },
                    { id: 'PST-09', description: 'Recognize employees who report phishing attempts.', priority: 'Low', riskLevel: 'Low', consequence: 'Positive reinforcement encourages good security behavior.', proof: 'Recognition Program', location: 'HR' },
                    { id: 'PST-10', description: 'Analyze the effectiveness of training and simulations.', priority: 'High', riskLevel: 'Medium', consequence: 'Helps to fine-tune the program for better results.', proof: 'Effectiveness Report', location: 'Office' },
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
                    { id: 'CSPM-01', description: 'Review CSPM tool dashboard for critical alerts daily.', priority: 'High', riskLevel: 'High', consequence: 'A critical misconfiguration can be exploited by attackers within minutes.', proof: 'CSPM Dashboard', location: 'Cloud Security Tool' },
                    { id: 'CSPM-02', description: 'Remediate any public S3 buckets or equivalent storage exposures immediately.', priority: 'High', riskLevel: 'High', consequence: 'This is one of the most common causes of major data breaches.', proof: 'Remediation Ticket', location: 'System' },
                    { id: 'CSPM-03', description: 'Audit security groups/NSGs for overly permissive inbound rules (e.g., 0.0.0.0/0).', priority: 'High', riskLevel: 'High', consequence: 'An open port can allow an attacker to bypass firewalls and access internal systems.', proof: 'Audit Report', location: 'System' },
                    { id: 'CSPM-04', description: 'Ensure logging and monitoring are enabled for all cloud resources.', priority: 'High', riskLevel: 'High', consequence: 'Without logs, you have no visibility into what is happening in your cloud environment.', proof: 'Logging Configuration Audit', location: 'System' },
                    { id: 'CSPM-05', description: 'Verify IAM roles and policies follow the principle of least privilege.', priority: 'High', riskLevel: 'High', consequence: 'Overly permissive IAM roles can allow an attacker to move laterally across your cloud environment.', proof: 'IAM Audit Report', location: 'System' },
                    { id: 'CSPM-06', description: 'Check for unused or stale cloud resources.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Forgotten servers or resources can become unpatched and vulnerable.', proof: 'Resource Audit', location: 'System' },
                    { id: 'CSPM-07', description: 'Ensure data encryption is enabled for all sensitive data stores.', priority: 'High', riskLevel: 'High', consequence: 'Protects data even if an attacker gains access to the storage system.', proof: 'Encryption Audit', location: 'System' },
                    { id: 'CSPM-08', description: 'Monitor for unauthorized API calls.', priority: 'High', riskLevel: 'High', consequence: 'Can be an indicator of a compromised access key.', proof: 'API Log Analysis', location: 'SIEM' },
                    { id: 'CSPM-09', description: 'Regularly review and update security baselines for cloud services.', priority: 'High', riskLevel: 'High', consequence: 'Ensures that your security posture keeps up with new cloud services and features.', proof: 'Baseline Documents', location: 'System' },
                    { id: 'CSPM-10', description: 'Automate remediation of common misconfigurations.', priority: 'High', riskLevel: 'High', consequence: 'Manual remediation is too slow to be effective in a large cloud environment.', proof: 'Automation Scripts', location: 'System' },
                ]
            }
        ]
    },
    // --- Healthcare ---
    {
        id: 'healthcare_and_hospital_operations',
        title: "Healthcare & Hospital Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/15c7a52f-1c83-41a4-9214-41d3c01372b8',
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
            description: "A surgeon is about to operate on the wrong knee due to a mix-up in the pre-op area. This scenario shows how checklists prevent this.",
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
                    { id: 'H-SSC-01', description: 'Confirm patient identity, surgical site, procedure, and consent before anesthesia.', priority: 'High', riskLevel: 'High', consequence: 'Failure to confirm is the primary cause of "never events" like wrong-site surgery, leading to patient harm, lawsuits, and loss of accreditation.', proof: 'Verbal confirmation log', location: 'OT' },
                    { id: 'H-SSC-02', description: 'Mark the surgical site.', priority: 'High', riskLevel: 'High', consequence: 'An unmarked or incorrectly marked site can lead to catastrophic error in the operating room.', proof: 'Visual check', location: 'Pre-op' },
                    { id: 'H-SSC-03', description: 'Review critical patient history, including allergies and airway risks.', priority: 'High', riskLevel: 'High', consequence: 'Missing a known allergy can lead to anaphylactic shock and death during surgery.', proof: 'Anesthesia record', location: 'OT' },
                    { id: 'H-SSC-04', description: 'Confirm instrument, sponge, and needle counts before closing.', priority: 'High', riskLevel: 'High', consequence: 'A retained foreign object can lead to severe post-operative complications, infection, and requires a second surgery to remove.', proof: 'Count sheet', location: 'OT' },
                    { id: 'H-SSC-05', description: 'Verbally confirm the name of the procedure recorded and specimen labeling.', priority: 'High', riskLevel: 'High', consequence: 'Incorrectly labeled specimens can lead to a misdiagnosis (e.g., of cancer), with life-altering consequences for the patient.', proof: 'Sign-out log', location: 'OT' },
                    { id: 'H-SSC-06', description: 'Ensure all team members have introduced themselves by name and role.', priority: 'High', riskLevel: 'Medium', consequence: 'Promotes teamwork and psychological safety, empowering any team member to speak up if they see a problem.', proof: 'Time-out log', location: 'OT' },
                    { id: 'H-SSC-07', description: 'Confirm antibiotic prophylaxis has been given within the last 60 minutes.', priority: 'High', riskLevel: 'High', consequence: 'Greatly increases the risk of surgical site infections (SSIs).', proof: 'Medication Administration Record (MAR)', location: 'OT' },
                    { id: 'H-SSC-08', description: 'Review anticipated critical events with the surgeon and anesthesia team.', priority: 'High', riskLevel: 'High', consequence: 'The team is unprepared for potential complications like major blood loss.', proof: 'Verbal confirmation', location: 'OT' },
                    { id: 'H-SSC-09', description: 'Verify availability of essential imaging.', priority: 'High', riskLevel: 'High', consequence: 'Proceeding without necessary scans can lead to surgical errors.', proof: 'Imaging Display', location: 'OT' },
                    { id: 'H-SSC-10', description: 'Check for equipment issues or concerns before starting.', priority: 'High', riskLevel: 'High', consequence: 'Equipment malfunction during surgery can have disastrous consequences.', proof: 'Equipment Check Log', location: 'OT' },
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
                    { id: 'H-IC-01', description: 'Run biological indicator tests in each autoclave load.', priority: 'High', riskLevel: 'High', consequence: 'The only way to be certain that the sterilization process was effective at killing all microbial life.', proof: 'Test strip log', location: 'CSSD' },
                    { id: 'H-IC-02', description: 'Verify autoclave cycle parameters (time, temp, pressure) for each run.', priority: 'High', riskLevel: 'High', consequence: 'Incorrect parameters mean the instruments are not sterile, posing a major infection risk.', proof: 'Autoclave printout', location: 'CSSD' },
                    { id: 'H-IC-03', description: 'Check sterile packages for integrity, dryness, and expiry date before dispatch.', priority: 'High', riskLevel: 'High', consequence: 'A compromised package (tear, moisture) means the contents are no longer sterile.', proof: 'Package inspection log', location: 'CSSD' },
                    { id: 'H-IC-04', description: 'Monitor hand hygiene compliance in clinical areas.', priority: 'High', riskLevel: 'High', consequence: 'Poor hand hygiene is the number one cause of hospital-acquired infections (HAIs).', proof: 'Audit Form', location: 'Wards/ICU' },
                    { id: 'H-IC-05', description: 'Maintain a log for environmental cleaning and disinfection.', priority: 'High', riskLevel: 'High', consequence: 'Contaminated surfaces are a major vector for spreading pathogens between patients.', proof: 'Cleaning Log', location: 'All Areas' },
                    { id: 'H-IC-06', description: 'Track hospital-acquired infection (HAI) rates.', priority: 'High', riskLevel: 'High', consequence: 'If you don\'t track HAI rates, you cannot identify outbreaks or measure the effectiveness of your infection control program.', proof: 'HAI Data Report', location: 'Infection Control Office' },
                    { id: 'H-IC-07', description: 'Ensure staff use appropriate PPE in isolation rooms.', priority: 'High', riskLevel: 'High', consequence: 'Failure to use PPE can lead to staff contracting the illness and spreading it to other patients.', proof: 'PPE Audit', location: 'Isolation Rooms' },
                    { id: 'H-IC-08', description: 'Manage biomedical waste segregation and disposal.', priority: 'High', riskLevel: 'High', consequence: 'Improper disposal can spread disease and lead to severe environmental and legal penalties.', proof: 'Waste Log', location: 'Waste Area' },
                    { id: 'H-IC-09', description: 'Audit antibiotic stewardship program compliance.', priority: 'High', riskLevel: 'High', consequence: 'Overuse of antibiotics leads to the development of drug-resistant "superbugs".', proof: 'Stewardship Audit', location: 'Pharmacy' },
                    { id: 'H-IC-10', description: 'Provide regular infection control training to all staff.', priority: 'High', riskLevel: 'High', consequence: 'Infection control is everyone\'s responsibility; untrained staff are a weak link.', proof: 'Training Records', location: 'HR' },
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
                    { id: 'H-MED-01', description: 'Require two licensed nurses to independently verify dosage calculations for high-alert medications.', priority: 'High', riskLevel: 'High', consequence: 'A simple decimal point error in a dosage calculation can be fatal. A second check is a critical safeguard.', proof: 'Dual sign-off on MAR', location: 'Medication Room' },
                    { id: 'H-MED-02', description: 'Store Look-Alike, Sound-Alike (LASA) drugs in separate, labeled bins.', priority: 'High', riskLevel: 'High', consequence: 'LASA drugs are a common source of medication errors; physical separation is key to prevention.', proof: 'Storage audit photo', location: 'Pharmacy' },
                    { id: 'H-MED-03', description: 'Use smart infusion pumps with dose error reduction software for IV high-alert drugs.', priority: 'High', riskLevel: 'High', consequence: 'Helps to prevent accidental overdoses from incorrect pump programming.', proof: 'Pump Log', location: 'Patient Bedside' },
                    { id: 'H-MED-04', description: 'Patient education on high-alert medications before discharge.', priority: 'High', riskLevel: 'Medium', consequence: 'Patients who do not understand their medication (e.g., insulin) are at high risk of self-administering it incorrectly at home.', proof: 'Patient Education Form', location: 'Discharge Lounge' },
                    { id: 'H-MED-05', description: 'Quarterly audit of high-alert medication incidents and near-misses.', priority: 'High', riskLevel: 'High', consequence: 'Analyzing near-misses helps to identify and fix system flaws before they cause actual harm.', proof: 'Audit Report', location: 'Quality Dept' },
                    { id: 'H-MED-06', description: 'Reconcile medications at every transition of care (admission, transfer, discharge).', priority: 'High', riskLevel: 'High', consequence: 'This is a major point where errors occur, such as a drug being accidentally discontinued or double-dosed.', proof: 'Medication Reconciliation Form', location: 'Patient Ward' },
                    { id: 'H-MED-07', description: 'Label all medications, including those in syringes and basins.', priority: 'High', riskLevel: 'High', consequence: 'An unlabeled syringe is a major patient safety risk.', proof: 'Labeling Audit', location: 'Medication Room' },
                    { id: 'H-MED-08', description: 'Report all medication errors and near misses.', priority: 'High', riskLevel: 'High', consequence: 'A culture of reporting is essential for learning and improvement.', proof: 'Incident Report', location: 'Quality Dept' },
                    { id: 'H-MED-09', description: 'Ensure concentrated electrolytes are stored only in the pharmacy.', priority: 'High', riskLevel: 'High', consequence: 'Accidental injection of a concentrated electrolyte like potassium chloride is fatal.', proof: 'Storage Audit', location: 'Pharmacy' },
                    { id: 'H-MED-10', description: 'Verify patient allergies before administering any medication.', priority: 'High', riskLevel: 'High', consequence: 'Administering a drug to an allergic patient can cause anaphylactic shock.', proof: 'Allergy Check in MAR', location: 'Patient Bedside' },
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
                    { id: 'H-PID-01', description: 'Verify patient identity using at least two identifiers (e.g., full name and date of birth) before drawing blood.', priority: 'High', riskLevel: 'High', consequence: 'A mislabeled blood sample can lead to a catastrophic transfusion reaction or misdiagnosis.', proof: 'Verbal confirmation', location: 'Patient Bedside' },
                    { id: 'H-PID-02', description: 'Match the patient ID band with the medication chart before administering any drug.', priority: 'High', riskLevel: 'High', consequence: 'Giving the wrong medication to a patient can have serious or fatal consequences.', proof: 'MAR sign-off', location: 'Patient Bedside' },
                    { id: 'H-PID-03', description: 'Label all laboratory samples in the presence of the patient.', priority: 'High', riskLevel: 'High', consequence: 'Prevents mix-ups where one patient\'s sample is labeled with another patient\'s name.', proof: 'Procedure Adherence Audit', location: 'Patient Bedside' },
                    { id: 'H-PID-04', description: 'Cross-check patient identifiers before any blood transfusion.', priority: 'High', riskLevel: 'High', consequence: 'A blood transfusion mismatch is a life-threatening medical emergency.', proof: 'Transfusion Checklist', location: 'Patient Bedside' },
                    { id: 'H-PID-05', description: 'Use barcode scanning for patient ID and medication verification where available.', priority: 'High', riskLevel: 'High', consequence: 'Technology can help to reduce human error in the identification process.', proof: 'Scan Log', location: 'System' },
                    { id: 'H-PID-06', description: 'Verify patient identity before any diagnostic procedure (e.g., X-ray, MRI).', priority: 'High', riskLevel: 'High', consequence: 'Performing a procedure on the wrong patient exposes them to unnecessary radiation or risk.', proof: 'Procedure Checklist', location: 'Radiology' },
                    { id: 'H-PID-07', description: 'Ensure all patients have a clear and accurate ID band.', priority: 'High', riskLevel: 'High', consequence: 'A missing or illegible ID band is a major risk factor for identification errors.', proof: 'ID Band Audit', location: 'Wards' },
                    { id: 'H-PID-08', description: 'For non-verbal patients, use alternative identification methods.', priority: 'High', riskLevel: 'High', consequence: 'Extra care must be taken for patients who cannot confirm their own identity.', proof: 'Alternative ID Protocol', location: 'Wards' },
                    { id: 'H-PID-09', description: 'Train all clinical staff on the patient identification policy.', priority: 'High', riskLevel: 'High', consequence: 'This is a fundamental patient safety skill for all healthcare workers.', proof: 'Training Records', location: 'HR' },
                    { id: 'H-PID-10', description: 'Audit compliance with the patient identification policy monthly.', priority: 'High', riskLevel: 'High', consequence: 'Regular audits are needed to ensure the policy is being followed consistently.', proof: 'Audit Report', location: 'Quality Dept' },
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
                    { id: 'BMW-01', description: 'Audit waste segregation into designated color-coded bins at point of generation.', priority: 'High', riskLevel: 'High', consequence: 'Improper segregation can expose waste handlers to infectious materials and is a major legal violation.', proof: 'Segregation Audit Log', location: 'All Clinical Areas' },
                    { id: 'BMW-02', description: 'Ensure sharps are disposed of in puncture-proof containers.', priority: 'High', riskLevel: 'High', consequence: 'Needlestick injuries can transmit diseases like HIV and Hepatitis B to staff.', proof: 'Sharps Container Check', location: 'All Clinical Areas' },
                    { id: 'BMW-03', description: 'Maintain a log of all biomedical waste collected, including weight and category.', priority: 'High', riskLevel: 'High', consequence: 'This is a legal requirement for regulatory reporting and proves due diligence.', proof: 'Waste Collection Log', location: 'Waste Collection Point' },
                    { id: 'BMW-04', description: 'Hand over waste to authorized disposal vendors and obtain receipts.', priority: 'High', riskLevel: 'High', consequence: 'The hospital is legally responsible for the waste until it is properly destroyed.', proof: 'Disposal Manifest/Receipt', location: 'Waste Area' },
                    { id: 'BMW-05', description: 'Train all staff on correct biomedical waste segregation and handling.', priority: 'High', riskLevel: 'High', consequence: 'Untrained staff are a primary cause of segregation errors.', proof: 'Training Records', location: 'HR' },
                    { id: 'BMW-06', description: 'Ensure waste storage area is secure and access-controlled.', priority: 'High', riskLevel: 'High', consequence: 'Prevents unauthorized access and potential misuse of medical waste.', proof: 'Storage Area Inspection', location: 'Waste Storage' },
                    { id: 'BMW-07', description: 'Check that all waste containers are properly labeled with the biohazard symbol.', priority: 'High', riskLevel: 'High', consequence: 'Clear labeling is crucial to prevent accidental exposure.', proof: 'Label Audit', location: 'All Clinical Areas' },
                    { id: 'BMW-08', description: 'Conduct regular audits of the entire waste management process.', priority: 'High', riskLevel: 'High', consequence: 'Ensures ongoing compliance with complex environmental laws.', proof: 'BMW Audit Report', location: 'Office' },
                    { id: 'BMW-09', description: 'Have a spill management plan for biomedical waste.', priority: 'High', riskLevel: 'High', consequence: 'A spill of infectious waste must be handled correctly to prevent exposure.', proof: 'Spill SOP', location: 'Office' },
                    { id: 'BMW-10', description: 'File annual returns as per regulatory requirements.', priority: 'High', riskLevel: 'High', consequence: 'Failure to file can lead to fines and legal action.', proof: 'Annual Return Filing', location: 'Compliance Office' },
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
                    { id: 'MEM-01', description: 'Follow a preventive maintenance schedule for all medical equipment.', priority: 'High', riskLevel: 'High', consequence: 'Equipment failure during a critical procedure can be fatal.', proof: 'PM Schedule', location: 'System' },
                    { id: 'MEM-02', description: 'Calibrate all diagnostic and therapeutic equipment as per manufacturer guidelines.', priority: 'High', riskLevel: 'High', consequence: 'An uncalibrated device can lead to misdiagnosis or incorrect treatment.', proof: 'Calibration Certificates', location: 'Office' },
                    { id: 'MEM-03', description: 'Log all maintenance and repair activities for each piece of equipment.', priority: 'High', riskLevel: 'High', consequence: 'Provides a legal record of maintenance and helps track equipment reliability.', proof: 'Equipment History Card', location: 'System' },
                    { id: 'MEM-04', description: 'Test defibrillators and ventilators daily.', priority: 'High', riskLevel: 'High', consequence: 'These are life-support devices; they must be ready to use at a moment\'s notice.', proof: 'Daily Check Log', location: 'ICU/ER' },
                    { id: 'MEM-05', description: 'Ensure backup equipment is available for critical devices.', priority: 'High', riskLevel: 'High', consequence: 'Lack of a backup can be catastrophic if a primary device fails.', proof: 'Backup Inventory', location: 'Biomedical Dept' },
                    { id: 'MEM-06', description: 'Train clinical staff on the basic use and cleaning of equipment.', priority: 'High', riskLevel: 'Medium', consequence: 'Improper use can damage expensive equipment or cause patient harm.', proof: 'Training Records', location: 'HR' },
                    { id: 'MEM-07', description: 'Tag and remove any faulty equipment from service immediately.', priority: 'High', riskLevel: 'High', consequence: 'Using faulty equipment is a major patient safety risk.', proof: 'Out of Service Tag', location: 'Clinical Areas' },
                    { id: 'MEM-08', description: 'Maintain a stock of critical spare parts.', priority: 'High', riskLevel: 'High', consequence: 'Can significantly reduce downtime for critical equipment.', proof: 'Spare Part Inventory', location: 'Biomedical Dept' },
                    { id: 'MEM-09', description: 'Review equipment performance and plan for replacement.', priority: 'High', riskLevel: 'Medium', consequence: 'Prevents using outdated technology and helps in capital planning.', proof: 'Replacement Plan', location: 'Office' },
                    { id: 'MEM-10', description: 'Maintain all equipment manuals and service contracts.', priority: 'High', riskLevel: 'Medium', consequence: 'Essential for troubleshooting and managing vendor SLAs.', proof: 'Document Library', location: 'Office' },
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
                    { id: 'MRD-01', description: 'Ensure all patient records are stored in a secure, access-controlled area.', priority: 'High', riskLevel: 'High', consequence: 'Unauthorized access can lead to a major breach of patient confidentiality.', proof: 'Access Log', location: 'MRD Room' },
                    { id: 'MRD-02', description: 'Audit who is accessing electronic health records (EHR).', priority: 'High', riskLevel: 'High', consequence: 'Helps to detect unauthorized snooping into patient files by staff.', proof: 'EHR Access Audit Trail', location: 'System' },
                    { id: 'MRD-03', description: 'Follow a strict protocol for releasing patient information to third parties.', priority: 'High', riskLevel: 'High', consequence: 'Improper release of information is a major legal and ethical violation.', proof: 'Information Release Form', location: 'MRD Room' },
                    { id: 'MRD-04', description: 'Train all staff on patient confidentiality and data privacy.', priority: 'High', riskLevel: 'High', consequence: 'Human error is a leading cause of data breaches.', proof: 'Training Records', location: 'HR' },
                    { id: 'MRD-05', description: 'Ensure all records are complete and accurately coded.', priority: 'High', riskLevel: 'High', consequence: 'Inaccurate coding can lead to insurance claim denials and revenue loss.', proof: 'Coding Audit Report', location: 'Office' },
                    { id: 'MRD-06', description: 'Manage the archival and retrieval of old records.', priority: 'High', riskLevel: 'Medium', consequence: 'A disorganized archive can make it impossible to find critical records when needed.', proof: 'Archival Log', location: 'Record Room' },
                    { id: 'MRD-07', description: 'Comply with all legal requirements for medical record retention.', priority: 'High', riskLevel: 'High', consequence: 'Premature destruction of records can have legal consequences.', proof: 'Retention Policy', location: 'Office' },
                    { id: 'MRD-08', description: 'Use strong passwords and MFA for EHR access.', priority: 'High', riskLevel: 'High', consequence: 'A compromised EHR password can lead to a massive data breach.', proof: 'System Security Settings', location: 'System' },
                    { id: 'MRD-09', description: 'Have a plan for downtime of the EHR system.', priority: 'High', riskLevel: 'High', consequence: 'During downtime, a clear paper-based process is needed to maintain patient care.', proof: 'Downtime Procedure', location: 'Office' },
                    { id: 'MRD-10', description: 'Conduct regular risk assessments for data privacy.', priority: 'High', riskLevel: 'High', consequence: 'Helps to proactively identify and mitigate new privacy risks.', proof: 'Risk Assessment Report', location: 'Office' },
                ]
            },
            {
                title: "Emergency Code Management",
                department: "Management/Security",
                frequency: "Quarterly",
                role: "Emergency Commander",
                icon: <Ambulance />,
                summary: "Drills and protocols for handling emergency codes (Code Blue, Code Red, etc.).",
                tasks: [
                    { id: 'ECM-01', description: 'Conduct mock drills for different emergency codes (e.g., Code Blue for cardiac arrest, Code Red for fire).', priority: 'High', riskLevel: 'High', consequence: 'In a real emergency, an untrained team will be slow and disorganized, with fatal consequences.', proof: 'Drill Report', location: 'Hospital-wide' },
                    { id: 'ECM-02', description: 'Ensure all staff know the meaning of each code and their specific role.', priority: 'High', riskLevel: 'High', consequence: 'Confusion over codes can lead to the wrong response or no response at all.', proof: 'Code Training Log', location: 'HR' },
                    { id: 'ECM-03', description: 'Test the emergency code announcement system weekly.', priority: 'High', riskLevel: 'High', consequence: 'If the team is not alerted, they cannot respond.', proof: 'System Test Log', location: 'Control Room' },
                    { id: 'ECM-04', description: 'Ensure crash carts are stocked and checked daily.', priority: 'High', riskLevel: 'High', consequence: 'Missing or expired medication on a crash cart during a Code Blue can be fatal.', proof: 'Crash Cart Checklist', location: 'All Wards' },
                    { id: 'ECM-05', description: 'Debrief after every real or mock code to identify areas for improvement.', priority: 'High', riskLevel: 'High', consequence: 'The best way to learn and improve response times and effectiveness.', proof: 'Debrief Minutes', location: 'Office' },
                    { id: 'ECM-06', description: 'Maintain a log of all emergency code activations.', priority: 'High', riskLevel: 'High', consequence: 'Provides data for quality improvement and regulatory review.', proof: 'Code Logbook', location: 'Control Room' },
                    { id: 'ECM-07', description: 'Coordinate with local emergency services for external support.', priority: 'High', riskLevel: 'High', consequence: 'Ensures a smooth handover for patients requiring transfer.', proof: 'Coordination Plan', location: 'Office' },
                    { id: 'ECM-08', description: 'Ensure clear roles are defined for the code team.', priority: 'High', riskLevel: 'High', consequence: 'In a crisis, a clear command structure is essential to avoid chaos.', proof: 'Team Role Cards', location: 'Office' },
                    { id: 'ECM-09', description: 'Update emergency code protocols annually.', priority: 'High', riskLevel: 'High', consequence: 'Protocols must be updated based on the latest clinical guidelines.', proof: 'Updated Protocol Document', location: 'Office' },
                    { id: 'ECM-10', description: 'Provide psychological first aid or debriefing for staff after traumatic events.', priority: 'High', riskLevel: 'Medium', consequence: 'Helps staff cope with the stress of emergencies and prevents burnout.', proof: 'Debriefing Schedule', location: 'HR' },
                ]
            }
        ]
    },
    // --- Education ---
    {
        id: 'school_operations_pack',
        title: "School Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/03126f55-1175-4813-80b1-419b62d3a39b',
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
            { text: "Ensure a smooth and fair admissions process with a standardized enrolment checklist.", icon: <UserPlus /> },
            { text: "Safeguard academic integrity with a secure examination and report card generation process.", icon: <GraduationCap /> },
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
                    { id: 'TRAN-01', description: 'Perform daily pre-trip inspection of the bus (brakes, tires, lights).', priority: 'High', riskLevel: 'High', consequence: 'A mechanical failure during a trip can lead to a serious accident.', proof: 'Pre-trip Checklist', location: 'Bus Depot' },
                    { id: 'TRAN-02', description: 'Ensure the GPS tracker and CCTV inside the bus are functional.', priority: 'High', riskLevel: 'High', consequence: 'In an emergency or for a complaint, this provides crucial evidence and tracking.', proof: 'System Health Check', location: 'Bus' },
                    { id: 'TRAN-03', description: 'Verify driver and conductor have valid licenses and IDs.', priority: 'High', riskLevel: 'High', consequence: 'Using an unlicensed driver is a major legal and safety violation.', proof: 'ID Check Log', location: 'Bus Depot' },
                    { id: 'TRAN-04', description: 'Check that a female attendant is present on every bus route.', priority: 'High', riskLevel: 'High', consequence: 'A mandatory safety requirement in many jurisdictions to protect children.', proof: 'Attendance Log', location: 'Bus' },
                    { id: 'TRAN-05', description: 'Perform a mandatory walkthrough of the bus at the end of each trip to ensure no child is left behind.', priority: 'High', riskLevel: 'High', consequence: 'Failure can lead to a child being locked in the bus, a potentially fatal "never event".', proof: 'Post-trip Clearance Log', location: 'Bus' },
                    { id: 'TRAN-06', description: 'Ensure first-aid kit is available and stocked in every bus.', priority: 'High', riskLevel: 'Medium', consequence: 'Inability to provide basic first aid for injuries during transit.', proof: 'First-Aid Kit Log', location: 'Bus' },
                    { id: 'TRAN-07', description: 'Monitor bus speed and route adherence through GPS tracking.', priority: 'High', riskLevel: 'Medium', consequence: 'Helps to curb rash driving and unauthorized route deviations.', proof: 'GPS Report', location: 'Transport Office' },
                    { id: 'TRAN-08', description: 'Train drivers and attendants on emergency procedures.', priority: 'High', riskLevel: 'High', consequence: 'An untrained crew can cause panic and confusion in an emergency.', proof: 'Training Records', location: 'Office' },
                    { id: 'TRAN-09', description: 'Maintain a log of all student drop-offs and pickups.', priority: 'High', riskLevel: 'High', consequence: 'Crucial for accountability and investigating any disputes about pickups.', proof: 'Drop-off Log', location: 'Bus' },
                    { id: 'TRAN-10', description: 'Conduct regular maintenance of all buses.', priority: 'High', riskLevel: 'High', consequence: 'Prevents breakdowns and ensures the fleet is safe.', proof: 'Maintenance Records', location: 'Workshop' },
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
                    { id: 'VIS-MG-01', description: 'Verify government-issued ID for every visitor.', priority: 'High', riskLevel: 'High', consequence: 'The most basic and essential step to preventing unauthorized entry.', proof: 'Visitor Logbook', location: 'Main Gate' },
                    { id: 'VIS-MG-02', description: 'Issue a visitor pass and ensure it is worn at all times.', priority: 'High', riskLevel: 'Medium', consequence: 'Allows staff to quickly identify who is a visitor and who is not.', proof: 'Pass Issue Log', location: 'Main Gate' },
                    { id: 'VIS-MG-03', description: 'Check visitor against a pre-approved pickup list for student pickups.', priority: 'High', riskLevel: 'High', consequence: 'The primary control to prevent a child from being picked up by an unauthorized person.', proof: 'Approved List', location: 'Main Gate' },
                    { id: 'VIS-MG-04', description: 'Escort all maintenance staff and vendors within the school premises.', priority: 'High', riskLevel: 'High', consequence: 'Prevents unknown individuals from wandering the campus unsupervised.', proof: 'Escort Log', location: 'Campus' },
                    { id: 'VIS-MG-05', description: 'Conduct background checks for all long-term vendors and contractors.', priority: 'High', riskLevel: 'High', consequence: 'A crucial step to ensure individuals with a criminal history do not have regular access to children.', proof: 'Background Check Report', location: 'Admin Office' },
                    { id: 'VIS-MG-06', description: 'Monitor CCTV cameras covering entry/exit points.', priority: 'High', riskLevel: 'High', consequence: 'Provides a record of everyone who enters and leaves the campus.', proof: 'CCTV Log', location: 'Security Room' },
                    { id: 'VIS-MG-07', description: 'Ensure all visitors sign out upon leaving.', priority: 'High', riskLevel: 'Medium', consequence: 'Helps to know who is still on campus in case of an emergency lockdown.', proof: 'Visitor Logbook', location: 'Main Gate' },
                    { id: 'VIS-MG-08', description: 'Secure all gates and entrances after school hours.', priority: 'High', riskLevel: 'High', consequence: 'Prevents trespassing and vandalism overnight.', proof: 'Gate Lock Log', location: 'Campus' },
                    { id: 'VIS-MG-09', description: 'Train security staff on handling unauthorized entry attempts.', priority: 'High', riskLevel: 'High', consequence: 'An untrained guard may not respond correctly to a security threat.', proof: 'Training Records', location: 'Office' },
                    { id: 'VIS-MG-10', description: 'Maintain a lost and found register.', priority: 'Medium', riskLevel: 'Low', consequence: 'A simple process that improves parent and student experience.', proof: 'Lost & Found Log', location: 'Reception' },
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
                    { id: 'CPS-01', description: 'Inspect playground equipment for sharp edges, rust, or loose parts.', priority: 'High', riskLevel: 'High', consequence: 'Faulty equipment is a leading cause of injuries to children.', proof: 'Playground Inspection Log', location: 'Playground' },
                    { id: 'CPS-02', description: 'Check classroom furniture for stability and any defects.', priority: 'High', riskLevel: 'Medium', consequence: 'A broken desk or chair can cause injuries.', proof: 'Classroom Furniture Log', location: 'Classrooms' },
                    { id: 'CPS-03', description: 'Inspect all campus areas for trip hazards, water logging, or other dangers.', priority: 'High', riskLevel: 'High', consequence: 'Proactively prevents slip, trip, and fall accidents.', proof: 'Campus Walkthrough Log', location: 'Campus' },
                    { id: 'CPS-04', description: 'Ensure all electrical sockets are covered and wires are concealed.', priority: 'High', riskLevel: 'High', consequence: 'A critical step to prevent electrical shocks to curious children.', proof: 'Electrical Safety Log', location: 'Classrooms' },
                    { id: 'CPS-05', description: 'Check that all chemicals in labs are stored safely and labeled.', priority: 'High', riskLevel: 'High', consequence: 'Improper storage can lead to dangerous spills or accidental ingestion.', proof: 'Lab Safety Audit', location: 'Laboratories' },
                    { id: 'CPS-06', description: 'Verify that first-aid kits are available in designated areas.', priority: 'High', riskLevel: 'Medium', consequence: 'In an injury, a missing first-aid kit can delay crucial initial care.', proof: 'First-Aid Kit Check', location: 'Various' },
                    { id: 'CPS-07', description: 'Inspect fire extinguishers and alarms.', priority: 'High', riskLevel: 'High', consequence: 'A non-functional fire safety system is a major life-safety failure.', proof: 'Fire Safety Log', location: 'Campus' },
                    { id: 'CPS-08', description: 'Ensure all areas are adequately lit.', priority: 'High', riskLevel: 'Medium', consequence: 'Poor lighting can lead to accidents and can be a security risk.', proof: 'Lighting Check', location: 'Campus' },
                    { id: 'CPS-09', description: 'Check water coolers for hygiene and functionality.', priority: 'High', riskLevel: 'Medium', consequence: 'Prevents the spread of waterborne illnesses.', proof: 'Water Cooler Log', location: 'Various' },
                    { id: 'CPS-10', description: 'Report and cordon off any unsafe areas immediately.', priority: 'High', riskLevel: 'High', consequence: 'Prevents students from accessing a hazardous area before it can be repaired.', proof: 'Incident Report', location: 'Campus' },
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
                    { id: 'EP-01', description: 'Conduct a fire evacuation drill every quarter.', priority: 'High', riskLevel: 'High', consequence: 'Without drills, an evacuation will be chaotic and slow, costing precious time.', proof: 'Drill Report', location: 'Campus' },
                    { id: 'EP-02', description: 'Ensure all staff are trained in basic first-aid and CPR.', priority: 'High', riskLevel: 'High', consequence: 'A trained first responder can save a life in the critical minutes before an ambulance arrives.', proof: 'Training Records', location: 'Office' },
                    { id: 'EP-03', description: 'Maintain an updated emergency contact list for every student.', priority: 'High', riskLevel: 'High', consequence: 'In an emergency, the inability to contact a parent causes immense distress and can delay medical decisions.', proof: 'Contact List', location: 'Admin Office' },
                    { id: 'EP-04', description: 'Ensure emergency alarms and public address systems are working.', priority: 'High', riskLevel: 'High', consequence: 'If you cannot alert the campus, you cannot execute the emergency plan.', proof: 'System Test Log', location: 'Control Room' },
                    { id: 'EP-05', description: 'Have a clear protocol for medical emergencies.', priority: 'High', riskLevel: 'High', consequence: 'A defined process ensures a swift and correct response to a medical crisis.', proof: 'Medical Emergency SOP', location: 'Office' },
                    { id: 'EP-06', description: 'Keep emergency supplies (food, water, blankets) stocked.', priority: 'High', riskLevel: 'Medium', consequence: 'Crucial for a lockdown or shelter-in-place scenario.', proof: 'Emergency Kit Log', location: 'Store Room' },
                    { id: 'EP-07', description: 'Establish a communication plan for parents during emergencies.', priority: 'High', riskLevel: 'High', consequence: 'Lack of clear communication leads to panic and parents rushing to the school, which can hinder emergency services.', proof: 'Communication Plan', location: 'Office' },
                    { id: 'EP-08', description: 'Coordinate with local emergency services (fire, police, hospital).', priority: 'High', riskLevel: 'High', consequence: 'Ensures a seamless response when external help is needed.', proof: 'Contact List', location: 'Office' },
                    { id: 'EP-09', description: 'Designate and mark clear assembly points for evacuation.', priority: 'High', riskLevel: 'High', consequence: 'Students and staff need to know exactly where to go in an evacuation.', proof: 'Signage', location: 'Campus' },
                    { id: 'EP-10', description: 'Review and update the emergency plan annually.', priority: 'High', riskLevel: 'High', consequence: 'An outdated plan can be worse than no plan at all.', proof: 'Updated Plan', location: 'Office' },
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
                    { id: 'SHV-01', description: 'Conduct mandatory police verification for all new staff.', priority: 'High', riskLevel: 'High', consequence: 'The most critical step to prevent individuals with a criminal history from being hired.', proof: 'Police Verification Report', location: 'HR File' },
                    { id: 'SHV-02', description: 'Perform at least two professional reference checks.', priority: 'High', riskLevel: 'High', consequence: 'Can uncover past issues of misconduct or poor performance.', proof: 'Reference Check Forms', location: 'HR File' },
                    { id: 'SHV-03', description: 'Verify educational qualifications and past employment.', priority: 'High', riskLevel: 'High', consequence: 'Prevents hiring of unqualified individuals based on fraudulent resumes.', proof: 'Verification Report', location: 'HR File' },
                    { id: 'SHV-04', description: 'Conduct a medical fitness check for all new hires.', priority: 'High', riskLevel: 'Medium', consequence: 'Ensures the individual is physically capable of performing their duties and is not a health risk.', proof: 'Medical Report', location: 'HR File' },
                    { id: 'SHV-05', description: 'Ensure all new staff sign the child protection policy.', priority: 'High', riskLevel: 'High', consequence: 'Creates a legally binding acknowledgement that they understand and will abide by the school\'s safety rules.', proof: 'Signed Policy', location: 'HR File' },
                    { id: 'SHV-06', description: 'Provide a formal induction and training on school policies.', priority: 'High', riskLevel: 'Medium', consequence: 'Ensures new hires understand the school\'s culture and rules from day one.', proof: 'Induction Log', location: 'HR' },
                    { id: 'SHV-07', description: 'Issue a formal employment contract.', priority: 'High', riskLevel: 'High', consequence: 'Defines the legal relationship and terms of employment.', proof: 'Signed Contract', location: 'HR File' },
                    { id: 'SHV-08', description: 'Maintain a complete file for each employee with all required documents.', priority: 'High', riskLevel: 'High', consequence: 'Essential for regulatory audits and legal compliance.', proof: 'Employee File Audit', location: 'HR Office' },
                    { id: 'SHV-09', description: 'Collect and verify ID and address proofs.', priority: 'High', riskLevel: 'High', consequence: 'A basic but essential step in verifying an individual\'s identity.', proof: 'ID/Address Proofs', location: 'HR File' },
                    { id: 'SHV-10', description: 'Onboard staff into the payroll and HR management system.', priority: 'High', riskLevel: 'Medium', consequence: 'Ensures timely and accurate salary payments.', proof: 'System Entry', location: 'System' },
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
                    { id: 'KWS-01', description: 'Inspect kitchen for cleanliness and hygiene.', priority: 'High', riskLevel: 'High', consequence: 'A dirty kitchen is a breeding ground for bacteria and can cause food poisoning outbreaks.', proof: 'Kitchen Hygiene Log', location: 'Kitchen' },
                    { id: 'KWS-02', description: 'Check health and hygiene of all kitchen staff daily.', priority: 'High', riskLevel: 'High', consequence: 'A sick food handler can transmit illness to hundreds of students.', proof: 'Staff Health Log', location: 'Kitchen' },
                    { id: 'KWS-03', description: 'Conduct quarterly testing of all drinking water sources.', priority: 'High', riskLevel: 'High', consequence: 'Contaminated water can cause widespread illness across the entire school.', proof: 'Water Test Report', location: 'Lab' },
                    { id: 'KWS-04', description: 'Ensure raw and cooked foods are stored separately.', priority: 'High', riskLevel: 'High', consequence: 'Prevents cross-contamination, a major cause of food poisoning.', proof: 'Storage Audit', location: 'Kitchen' },
                    { id: 'KWS-05', description: 'Log temperatures of refrigerators and freezers.', priority: 'High', riskLevel: 'High', consequence: 'Improper temperatures allow harmful bacteria to grow in perishable foods.', proof: 'Temperature Log', location: 'Kitchen' },
                    { id: 'KWS-06', description: 'Check expiry dates of all food ingredients.', priority: 'High', riskLevel: 'High', consequence: 'Using expired ingredients is a major food safety risk.', proof: 'Expiry Date Log', location: 'Kitchen' },
                    { id: 'KWS-07', description: 'Ensure kitchen staff use hairnets, gloves, and aprons.', priority: 'High', riskLevel: 'High', consequence: 'Prevents physical contamination of food.', proof: 'PPE Audit', location: 'Kitchen' },
                    { id: 'KWS-08', description: 'Clean and sanitize all food preparation surfaces.', priority: 'High', riskLevel: 'High', consequence: 'Prevents the spread of bacteria between different food items.', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'KWS-09', description: 'Manage waste disposal and pest control.', priority: 'High', riskLevel: 'High', consequence: 'Improper waste management attracts pests, which carry disease.', proof: 'Waste & Pest Log', location: 'Kitchen' },
                    { id: 'KWS-10', description: 'Maintain a clean and functional water purifier system.', priority: 'High', riskLevel: 'High', consequence: 'A faulty purifier can dispense contaminated water.', proof: 'Purifier Maintenance Log', location: 'Water Station' },
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
                    { id: 'INC-HDLG-01', description: 'Provide immediate first aid and notify parents.', priority: 'High', riskLevel: 'High', consequence: 'Delaying medical care or parent notification can worsen the situation and create legal liability.', proof: 'First Aid & Notification Log', location: 'Incident Site/Office' },
                    { id: 'INC-HDLG-02', description: 'Document the incident in detail with witness statements.', priority: 'High', riskLevel: 'High', consequence: 'A poorly documented incident is difficult to investigate or defend legally.', proof: 'Incident Report Form', location: 'Office' },
                    { id: 'INC-HDLG-03', description: 'Escalate the incident to senior management or trustees if required.', priority: 'High', riskLevel: 'High', consequence: 'Keeps leadership informed of significant risks and events.', proof: 'Escalation Communication', location: 'Office' },
                    { id: 'INC-HDLG-04', description: 'Conduct a root cause analysis to prevent recurrence.', priority: 'High', riskLevel: 'High', consequence: 'Without an RCA, the school is likely to repeat the same mistakes.', proof: 'RCA Report', location: 'Office' },
                    { id: 'INC-HDLG-05', description: 'Implement corrective and preventive actions (CAPA).', priority: 'High', riskLevel: 'High', consequence: 'Turns the incident into a concrete plan for improvement.', proof: 'CAPA Plan', location: 'System' },
                    { id: 'INC-HDLG-06', description: 'Preserve any CCTV footage or other evidence.', priority: 'High', riskLevel: 'High', consequence: 'Loss of evidence can compromise any investigation.', proof: 'Evidence Log', location: 'Security Room' },
                    { id: 'INC-HDLG-07', description: 'Communicate with parents transparently and empathetically.', priority: 'High', riskLevel: 'High', consequence: 'Poor communication can destroy trust between parents and the school.', proof: 'Communication Log', location: 'Office' },
                    { id: 'INC-HDLG-08', description: 'File any required reports with regulatory bodies.', priority: 'High', riskLevel: 'High', consequence: 'Failure to report can lead to legal penalties.', proof: 'Regulatory Filing', location: 'Office' },
                    { id: 'INC-HDLG-09', description: 'Debrief with involved staff to learn from the incident.', priority: 'High', riskLevel: 'Medium', consequence: 'A crucial step for organizational learning and staff support.', proof: 'Debrief Meeting Minutes', location: 'Office' },
                    { id: 'INC-HDLG-10', description: 'Review and update relevant policies based on the incident.', priority: 'High', riskLevel: 'High', consequence: 'Ensures the school adapts and improves its safety systems over time.', proof: 'Policy Update Log', location: 'Office' },
                ]
            },
            {
                title: "Admissions & Enrolment Process",
                department: "Admissions",
                frequency: "Per Admission Cycle",
                role: "Admissions Officer",
                icon: <UserPlus />,
                summary: "A standardized workflow for managing student applications, from inquiry to final enrolment.",
                tasks: [
                    { id: 'ADM-01', description: "Publish clear admission criteria and timelines.", priority: 'High', riskLevel: 'Medium', consequence: 'Ambiguous criteria can lead to allegations of unfairness or bias.', proof: 'Admissions Prospectus', location: 'Website/Office'},
                    { id: 'ADM-02', description: "Use a standardized application form to collect all necessary student and parent information.", priority: 'High', riskLevel: 'High', consequence: 'Inconsistent data collection makes it difficult to compare applicants fairly.', proof: 'Application Form', location: 'System'},
                    { id: 'ADM-03', description: "Track all applications in a centralized admissions management system.", priority: 'High', riskLevel: 'High', consequence: 'Lost applications or missed deadlines can damage the school\'s reputation.', proof: 'Admissions Dashboard', location: 'System'},
                    { id: 'ADM-04', description: "Schedule and conduct parent interviews or student assessments in a fair and consistent manner.", priority: 'High', riskLevel: 'High', consequence: 'An unstandardized process can lead to accusations of favoritism.', proof: 'Interview Schedule & Scorecards', location: 'System'},
                    { id: 'ADM-05', description: "Communicate admission decisions (offers, waitlists, rejections) to all applicants on a specified date.", priority: 'High', riskLevel: 'High', consequence: 'Poor communication creates anxiety for parents and reflects badly on the school.', proof: 'Communication Log', location: 'System'},
                    { id: 'ADM-06', description: "Collect all required documents (birth certificate, previous school records) for admitted students.", priority: 'High', riskLevel: 'High', consequence: 'Missing documents can lead to regulatory compliance issues later.', proof: 'Document Checklist', location: 'Admissions Office'},
                    { id: 'ADM-07', description: "Process admission fees and issue receipts.", priority: 'High', riskLevel: 'High', consequence: 'Errors in fee collection can lead to financial and accounting problems.', proof: 'Fee Receipt', location: 'Accounts Office'},
                    { id: 'ADM-08', description: "Conduct an orientation program for new students and parents.", priority: 'High', riskLevel: 'Medium', consequence: 'A poor onboarding experience can lead to early dissatisfaction.', proof: 'Orientation Schedule', location: 'Campus' },
                    { id: 'ADM-09', description: "Ensure a smooth handover of student data to the academic department.", priority: 'High', riskLevel: 'Medium', consequence: 'Crucial information about the student may not reach their new teachers.', proof: 'Handover Document', location: 'System'},
                    { id: 'ADM-10', description: "Analyze admissions data to inform future outreach strategies.", priority: 'Medium', riskLevel: 'Low', consequence: 'Missed opportunity to understand admission trends and improve marketing.', proof: 'Data Analysis Report', location: 'Office'}
                ]
            },
            {
                title: "Examination & Report Card SOP",
                department: "Academics",
                frequency: "Per Examination Cycle",
                role: "Examination Controller",
                icon: <GraduationCap />,
                summary: "A secure and accurate process for conducting exams and publishing results.",
                tasks: [
                    { id: 'EXAM-01', description: "Ensure secure handling and storage of question papers before the exam.", priority: 'High', riskLevel: 'High', consequence: 'A leaked question paper can compromise the integrity of the entire examination.', proof: 'Secure Storage Log', location: 'Examination Room'},
                    { id: 'EXAM-02', description: "Follow a strict protocol for exam invigilation to prevent cheating.", priority: 'High', riskLevel: 'High', consequence: 'Widespread cheating devalues the examination and the school\'s reputation.', proof: 'Invigilation Duty Roster', location: 'Exam Halls'},
                    { id: 'EXAM-03', description: "Implement a fair and anonymous process for grading answer sheets.", priority: 'High', riskLevel: 'High', consequence: 'A biased grading process can lead to parent complaints and loss of trust.', proof: 'Grading Policy Document', location: 'Office'},
                    { id: 'EXAM-04', description: "Have a dual-check or verification process for tabulating marks and grades.", priority: 'High', riskLevel: 'High', consequence: 'A simple calculation error can lead to an incorrect report card and immense student distress.', proof: 'Verification Log', location: 'System'},
                    { id: 'EXAM-05', description: "Generate and print report cards with a final QC check for any errors.", priority: 'High', riskLevel: 'High', consequence: 'Errors on a report card reflect poorly on the school\'s professionalism.', proof: 'QC Sign-off Sheet', location: 'Office'},
                    { id: 'EXAM-06', description: "Publish results and distribute report cards on a pre-announced date.", priority: 'High', riskLevel: 'Medium', consequence: 'Delays can cause significant anxiety for students and parents.', proof: 'Distribution Log', location: 'System'},
                    { id: 'EXAM-07', description: "Have a clear process for handling student requests for re-evaluation or grade clarifications.", priority: 'High', riskLevel: 'Medium', consequence: 'A lack of a clear process can lead to disputes and feelings of unfairness.', proof: 'Re-evaluation Policy', location: 'Office'},
                    { id: 'EXAM-08', description: "Securely archive all examination records as per regulatory requirements.", priority: 'High', riskLevel: 'High', consequence: 'Failure to maintain records can be a major compliance issue.', proof: 'Archive Log', location: 'Record Room' },
                    { id: 'EXAM-09', description: "Ensure seating arrangement prevents cheating.", priority: 'High', riskLevel: 'High', consequence: 'A poorly planned seating chart can facilitate cheating.', proof: 'Seating Plan', location: 'Exam Halls'},
                    { id: 'EXAM-10', description: "Provide necessary accommodations for students with special needs.", priority: 'High', riskLevel: 'High', consequence: 'Failure to do so can be a violation of disability rights laws.', proof: 'Accommodations Log', location: 'Examination Room'}
                ]
            }
        ]
    },
    {
        id: 'university_college_ops',
        title: "University & College Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/c03522f2-3957-4584-a131-002711d945e4',
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
                    { id: 'HOSTEL-SEC-01', description: 'Maintain a log of all entries and exits from the hostel.', priority: 'High', riskLevel: 'High', consequence: 'Inability to track who is in the building during an emergency or security incident.', proof: 'Entry/Exit Register', location: 'Hostel Entrance' },
                    { id: 'HOSTEL-SEC-02', description: 'Verify the identity of all guests and ensure they sign in.', priority: 'High', riskLevel: 'High', consequence: 'Allows unauthorized individuals to gain access, posing a security risk to students.', proof: 'Guest Register', location: 'Hostel Entrance' },
                    { id: 'HOSTEL-SEC-03', description: 'Conduct surprise room checks for prohibited items (e.g., heaters, drugs).', priority: 'High', riskLevel: 'High', consequence: 'Failure to curb prohibited items can lead to fire hazards or illegal activities.', proof: 'Room Check Log', location: 'Hostel Rooms' },
                    { id: 'HOSTEL-SEC-04', description: 'Have a clear protocol for handling medical emergencies or disturbances.', priority: 'High', riskLevel: 'High', consequence: 'A chaotic response can delay medical care or escalate a conflict.', proof: 'Emergency SOP', location: 'Warden Office' },
                    { id: 'HOSTEL-SEC-05', description: 'Ensure all security cameras in common areas are functional.', priority: 'High', riskLevel: 'High', consequence: 'Provides crucial evidence for investigations into theft, ragging, or other incidents.', proof: 'CCTV Health Check', location: 'Security Room' },
                    { id: 'HOSTEL-SEC-06', description: 'Check fire extinguishers and emergency exits in the hostel.', priority: 'High', riskLevel: 'High', consequence: 'A blocked exit or faulty extinguisher can be fatal in a fire.', proof: 'Fire Safety Log', location: 'Hostel' },
                    { id: 'HOSTEL-SEC-07', description: 'Ensure all hostel staff are trained in emergency procedures.', priority: 'High', riskLevel: 'High', consequence: 'Untrained staff can worsen an emergency situation.', proof: 'Training Records', location: 'Office' },
                    { id: 'HOSTEL-SEC-08', description: 'Secure the hostel premises at a designated time each night.', priority: 'High', riskLevel: 'High', consequence: 'An unsecured hostel is vulnerable to intruders.', proof: 'Lock-up Log', location: 'Hostel' },
                    { id: 'HOSTEL-SEC-09', description: 'Monitor for and prevent ragging incidents.', priority: 'High', riskLevel: 'High', consequence: 'Failure to prevent ragging can lead to severe physical and psychological harm, and major legal liability.', proof: 'Anti-Ragging Patrol Log', location: 'Hostel' },
                    { id: 'HOSTEL-SEC-10', description: 'Maintain an emergency contact list for all resident students.', priority: 'High', riskLevel: 'High', consequence: 'Inability to contact parents during a medical emergency.', proof: 'Contact List', location: 'Warden Office' },
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
                    { id: 'LAB-01', description: 'Ensure all students and staff wear appropriate Personal Protective Equipment (PPE).', priority: 'High', riskLevel: 'High', consequence: 'The most basic failure, leading to chemical splashes, burns, or eye injuries.', proof: 'PPE Audit', location: 'Laboratory' },
                    { id: 'LAB-02', description: 'Maintain an up-to-date inventory of all chemicals with MSDS sheets.', priority: 'High', riskLevel: 'High', consequence: 'In a spill or fire, inability to provide crucial safety information to first responders.', proof: 'Chemical Inventory', location: 'Lab Store' },
                    { id: 'LAB-03', description: 'Check that fume hoods and ventilation systems are working correctly.', priority: 'High', riskLevel: 'High', consequence: 'Exposure of students and staff to toxic fumes.', proof: 'Fume Hood Test Log', location: 'Laboratory' },
                    { id: 'LAB-04', description: 'Follow correct procedures for chemical and biological waste disposal.', priority: 'High', riskLevel: 'High', consequence: 'Improper disposal can cause environmental damage and lead to heavy regulatory fines.', proof: 'Waste Disposal Log', location: 'Waste Area' },
                    { id: 'LAB-05', description: 'Ensure emergency showers and eyewash stations are accessible and functional.', priority: 'High', riskLevel: 'High', consequence: 'In a chemical splash, a non-functional eyewash station can lead to permanent eye damage.', proof: 'Emergency Equipment Log', location: 'Laboratory' },
                    { id: 'LAB-06', description: 'Inspect lab equipment for any damage or malfunction before use.', priority: 'High', riskLevel: 'High', consequence: 'Using faulty equipment can lead to inaccurate results or dangerous failures (e.g., glassware cracking).', proof: 'Equipment Check Log', location: 'Laboratory' },
                    { id: 'LAB-07', description: 'Provide safety training to all new lab users.', priority: 'High', riskLevel: 'High', consequence: 'Untrained users are a danger to themselves and others.', proof: 'Training Records', location: 'Office' },
                    { id: 'LAB-08', description: 'Label all chemicals and solutions clearly.', priority: 'High', riskLevel: 'High', consequence: 'An unlabeled chemical is an unknown hazard and can lead to dangerous mix-ups.', proof: 'Label Audit', location: 'Laboratory' },
                    { id: 'LAB-09', description: 'Have a spill response kit ready and accessible.', priority: 'High', riskLevel: 'High', consequence: 'A small spill can become a major incident without the right response materials.', proof: 'Spill Kit Check', location: 'Laboratory' },
                    { id: 'LAB-10', description: 'Restrict access to the lab to authorized personnel only.', priority: 'High', riskLevel: 'High', consequence: 'Unauthorized individuals can cause accidents or interfere with experiments.', proof: 'Access Log', location: 'Laboratory' },
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
                    { id: 'EVENT-01', description: 'Obtain all necessary internal and external permissions for the event.', priority: 'High', riskLevel: 'High', consequence: 'An unapproved event can be shut down by authorities, causing reputational damage.', proof: 'Permission Documents', location: 'Office' },
                    { id: 'EVENT-02', description: 'Develop a detailed crowd management and security plan.', priority: 'High', riskLevel: 'High', consequence: 'Failure to manage crowds can lead to stampedes and mass casualty incidents.', proof: 'Crowd Management Plan', location: 'Office' },
                    { id: 'EVENT-03', description: 'Arrange for on-site emergency medical support (ambulance, first-aid).', priority: 'High', riskLevel: 'High', consequence: 'Delayed medical response to an injury or illness can be fatal.', proof: 'Medical Support Contract', location: 'Office' },
                    { id: 'EVENT-04', description: 'Coordinate with campus security and local police if required.', priority: 'High', riskLevel: 'High', consequence: 'A lack of coordination can lead to a chaotic and ineffective emergency response.', proof: 'Security Coordination Plan', location: 'Office' },
                    { id: 'EVENT-05', description: 'Inspect the event venue for safety hazards before the event.', priority: 'High', riskLevel: 'High', consequence: 'Unidentified hazards (e.g., exposed wiring) can cause accidents.', proof: 'Venue Inspection Log', location: 'Event Venue' },
                    { id: 'EVENT-06', description: 'Ensure clear signage for entries, exits, and emergency routes.', priority: 'High', riskLevel: 'High', consequence: 'Confused crowds can create blockages and panic during an evacuation.', proof: 'Signage Plan', location: 'Event Venue' },
                    { id: 'EVENT-07', description: 'Have a communication plan for attendees in case of an emergency.', priority: 'High', riskLevel: 'High', consequence: 'Lack of clear communication leads to rumors and panic.', proof: 'Communication Plan', location: 'Office' },
                    { id: 'EVENT-08', description: 'Manage sound levels to comply with local regulations.', priority: 'Medium', riskLevel: 'Low', consequence: 'Can lead to noise complaints and fines.', proof: 'Sound Level Log', location: 'Event Venue' },
                    { id: 'EVENT-09', description: 'Ensure adequate sanitation facilities are available.', priority: 'High', riskLevel: 'Medium', consequence: 'Poor sanitation can be a public health issue for large gatherings.', proof: 'Facility Check', location: 'Event Venue' },
                    { id: 'EVENT-10', description: 'Plan and execute post-event cleanup.', priority: 'High', riskLevel: 'Low', consequence: 'Leaving a venue messy reflects poorly on the institution.', proof: 'Cleanup Log', location: 'Event Venue' },
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
                    { id: 'CISA-01', description: 'Conduct a quarterly audit of building structural integrity.', priority: 'High', riskLevel: 'High', consequence: 'Missing signs of structural distress can lead to a building collapse.', proof: 'Structural Audit Report', location: 'Campus' },
                    { id: 'CISA-02', description: 'Inspect all fire safety equipment and evacuation routes.', priority: 'High', riskLevel: 'High', consequence: 'The most critical life-safety system; failure is not an option.', proof: 'Fire Safety Audit', location: 'Campus' },
                    { id: 'CISA-03', description: 'Audit campus accessibility for disabled persons (ramps, lifts, restrooms).', priority: 'High', riskLevel: 'Medium', consequence: 'Non-compliance can lead to legal action and denies equal access to education.', proof: 'Accessibility Audit', location: 'Campus' },
                    { id: 'CISA-04', description: 'Check for any electrical hazards across the campus.', priority: 'High', riskLevel: 'High', consequence: 'Faulty wiring is a leading cause of fires.', proof: 'Electrical Safety Audit', location: 'Campus' },
                    { id: 'CISA-05', description: 'Ensure all campus lighting is functional, especially at night.', priority: 'High', riskLevel: 'Medium', consequence: 'Poorly lit areas are a major security and safety risk.', proof: 'Lighting Audit', location: 'Campus' },
                    { id: 'CISA-06', description: 'Inspect water supply and sanitation systems.', priority: 'High', riskLevel: 'High', consequence: 'Contaminated water or poor sanitation can cause widespread illness.', proof: 'Water & Sanitation Audit', location: 'Campus' },
                    { id: 'CISA-07', description: 'Check road conditions and signage within the campus.', priority: 'High', riskLevel: 'Medium', consequence: 'Poor roads or signage can lead to traffic accidents.', proof: 'Road Safety Audit', location: 'Campus' },
                    { id: 'CISA-08', description: 'Maintain records of all maintenance and repair work.', priority: 'High', riskLevel: 'Medium', consequence: 'Provides a legal record of due diligence and helps track recurring issues.', proof: 'Maintenance Log', location: 'Office' },
                    { id: 'CISA-09', description: 'Manage waste disposal and recycling programs.', priority: 'High', riskLevel: 'Medium', consequence: 'Improper waste management is an environmental and health hazard.', proof: 'Waste Management Audit', location: 'Campus' },
                    { id: 'CISA-10', description: 'Address any safety concerns raised by students or staff.', priority: 'High', riskLevel: 'High', consequence: 'Ignoring safety concerns creates a culture of negligence.', proof: 'Concern Resolution Log', location: 'Office' },
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
                    { id: 'MESS-01', description: 'Log temperatures of all refrigerators, freezers, and hot holding units.', priority: 'High', riskLevel: 'High', consequence: 'The most critical step in preventing bacterial growth in food.', proof: 'Temperature Log', location: 'Mess/Canteen' },
                    { id: 'MESS-02', description: 'Check all raw material deliveries for quality and expiry.', priority: 'High', riskLevel: 'High', consequence: 'Garbage in, garbage out. Poor quality ingredients lead to poor quality, unsafe food.', proof: 'Receiving Log', location: 'Stores' },
                    { id: 'MESS-03', description: 'Ensure proper segregation of raw, cooked, vegetarian, and non-vegetarian food.', priority: 'High', riskLevel: 'High', consequence: 'A primary cause of cross-contamination and food poisoning.', proof: 'Storage Audit', location: 'Kitchen/Stores' },
                    { id: 'MESS-04', description: 'Verify hygiene of all food handlers (uniform, nails, health).', priority: 'High', riskLevel: 'High', consequence: 'Sick or unhygienic food handlers are a major vector for disease.', proof: 'Staff Hygiene Log', location: 'Kitchen' },
                    { id: 'MESS-05', description: 'Ensure the kitchen and dining areas are clean and pest-free.', priority: 'High', riskLevel: 'High', consequence: 'Pests carry disease and their presence is a major red flag for health inspectors.', proof: 'Cleaning & Pest Control Log', location: 'Mess/Canteen' },
                    { id: 'MESS-06', description: 'Calibrate food thermometers daily.', priority: 'High', riskLevel: 'High', consequence: 'An inaccurate thermometer gives a false sense of safety.', proof: 'Calibration Log', location: 'Kitchen' },
                    { id: 'MESS-07', description: 'Check that water used for cooking and drinking is safe.', priority: 'High', riskLevel: 'High', consequence: 'Contaminated water can make hundreds of students sick at once.', proof: 'Water Test Report', location: 'Office' },
                    { id: 'MESS-08', description: 'Maintain a food sample from each meal for 48 hours.', priority: 'High', riskLevel: 'High', consequence: 'Crucial evidence for investigation in case of a food poisoning outbreak.', proof: 'Sample Log', location: 'Kitchen' },
                    { id: 'MESS-09', description: 'Manage waste disposal effectively to prevent pests.', priority: 'High', riskLevel: 'High', consequence: 'Improperly managed waste is a primary attractant for pests.', proof: 'Waste Log', location: 'Waste Area' },
                    { id: 'MESS-10', description: 'Train all kitchen staff on food safety and hygiene.', priority: 'High', riskLevel: 'High', consequence: 'The entire system relies on staff following the correct procedures.', proof: 'Training Records', location: 'Office' },
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
                    { id: 'IT-AUP-01', description: 'Enforce strong password policies for all network users.', priority: 'High', riskLevel: 'High', consequence: 'Weak passwords are the easiest way for hackers to gain unauthorized access.', proof: 'Password Policy Document', location: 'System' },
                    { id: 'IT-AUP-02', description: 'Block access to malicious or inappropriate websites on the campus network.', priority: 'High', riskLevel: 'High', consequence: 'Protects students from harmful content and protects the network from malware.', proof: 'Firewall/Filter Logs', location: 'System' },
                    { id: 'IT-AUP-03', description: 'Monitor network for unusual activity or security threats.', priority: 'High', riskLevel: 'High', consequence: 'Early detection of threats can prevent a major breach.', proof: 'Network Monitoring Logs', location: 'System' },
                    { id: 'IT-AUP-04', description: 'Ensure all campus computers have up-to-date antivirus software.', priority: 'High', riskLevel: 'High', consequence: 'A single infected machine can spread malware across the entire network.', proof: 'Antivirus Dashboard', location: 'System' },
                    { id: 'IT-AUP-05', description: 'Have all users agree to an Acceptable Use Policy upon first login.', priority: 'High', riskLevel: 'Medium', consequence: 'Sets clear expectations for behavior and provides grounds for disciplinary action.', proof: 'AUP Acceptance Log', location: 'System' },
                    { id: 'IT-AUP-06', description: 'Manage student data in compliance with data privacy laws.', priority: 'High', riskLevel: 'High', consequence: 'A breach of student data can have severe legal and reputational consequences.', proof: 'Data Privacy Audit', location: 'System' },
                    { id: 'IT-AUP-07', description: 'Provide secure Wi-Fi access for students, staff, and guests.', priority: 'High', riskLevel: 'High', consequence: 'An unsecured Wi-Fi network can be a gateway for attackers.', proof: 'Wi-Fi Configuration', location: 'System' },
                    { id: 'IT-AUP-08', description: 'Back up all critical university data regularly.', priority: 'High', riskLevel: 'High', consequence: 'A ransomware attack or server failure can lead to catastrophic data loss without backups.', proof: 'Backup Logs', location: 'System' },
                    { id: 'IT-AUP-09', description: 'Have a clear policy for software installation on campus computers.', priority: 'High', riskLevel: 'Medium', consequence: 'Unauthorized software can introduce security risks and licensing issues.', proof: 'Software Policy', location: 'System' },
                    { id: 'IT-AUP-10', description: 'Provide IT support to students and staff.', priority: 'High', riskLevel: 'Medium', consequence: 'Lack of support leads to frustration and users finding insecure workarounds.', proof: 'Helpdesk Tickets', location: 'System' },
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
                    { id: 'TRANSPORT-EMER-01', description: 'Check on-campus ambulance daily (fuel, tires, medical supplies).', priority: 'High', riskLevel: 'High', consequence: 'An ambulance that is not ready can be a fatal weak link in an emergency.', proof: 'Ambulance Check Log', location: 'Ambulance Bay' },
                    { id: 'TRANSPORT-EMER-02', description: 'Ensure an ambulance driver is available on call 24/7.', priority: 'High', riskLevel: 'High', consequence: 'A patient needing urgent hospital transfer is stranded.', proof: 'Driver Roster', location: 'Transport Office' },
                    { id: 'TRANSPORT-EMER-03', description: 'Maintain a list of nearby hospitals and their contact numbers.', priority: 'High', riskLevel: 'High', consequence: 'Wasting time searching for a hospital number during an emergency.', proof: 'Hospital Contact List', location: 'Ambulance/Office' },
                    { id: 'TRANSPORT-EMER-04', description: 'Train drivers on the fastest routes to designated hospitals.', priority: 'High', riskLevel: 'Medium', consequence: 'Every minute saved can make a difference in a medical emergency.', proof: 'Route Training Log', location: 'Office' },
                    { id: 'TRANSPORT-EMER-05', description: 'Have a clear protocol for dispatching the ambulance.', priority: 'High', riskLevel: 'High', consequence: 'A clear, single point of contact for dispatch prevents confusion.', proof: 'Dispatch SOP', location: 'Security/Health Center' },
                    { id: 'TRANSPORT-EMER-06', description: 'Log all ambulance trips with details of the patient and incident.', priority: 'High', riskLevel: 'High', consequence: 'Provides a legal record of the emergency response.', proof: 'Ambulance Trip Log', location: 'Transport Office' },
                    { id: 'TRANSPORT-EMER-07', description: 'Regularly service the ambulance.', priority: 'High', riskLevel: 'High', consequence: 'A breakdown during a patient transfer can be catastrophic.', proof: 'Service Records', location: 'Workshop' },
                    { id: 'TRANSPORT-EMER-08', description: 'Ensure ambulance staff are trained in first-aid.', priority: 'High', riskLevel: 'High', consequence: 'The team can provide care en route to the hospital.', proof: 'Training Records', location: 'HR' },
                    { id: 'TRANSPORT-EMER-09', description: 'Test ambulance siren and lights daily.', priority: 'High', riskLevel: 'High', consequence: 'Crucial for clearing traffic during an emergency.', proof: 'Test Log', location: 'Ambulance Bay' },
                    { id: 'TRANSPORT-EMER-10', description: 'Coordinate with campus security for clear passage during emergencies.', priority: 'High', riskLevel: 'High', consequence: 'Security must be ready to clear gates and roads for the ambulance.', proof: 'Coordination Plan', location: 'Security Office' },
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
                    { id: 'INC-HDLG-UNIV-01', description: 'Log every incident in a central incident management system.', priority: 'High', riskLevel: 'High', consequence: 'Without a log, there is no institutional memory of past incidents.', proof: 'Incident Log', location: 'System' },
                    { id: 'INC-HDLG-UNIV-02', description: 'Immediately notify parents/guardians in case of a student medical emergency.', priority: 'High', riskLevel: 'High', consequence: 'A delay in notification is a major source of parental anger and legal claims.', proof: 'Communication Log', location: 'Office' },
                    { id: 'INC-HDLG-UNIV-03', description: 'Follow a fair and documented process for investigating student conflicts.', priority: 'High', riskLevel: 'Medium', consequence: 'A biased investigation can lead to accusations of unfairness and legal challenges.', proof: 'Investigation Report', location: 'Office' },
                    { id: 'INC-HDLG-UNIV-04', description: 'Escalate major security breaches to senior management and police.', priority: 'High', riskLevel: 'High', consequence: 'Keeps leadership and authorities informed to manage the crisis.', proof: 'Escalation Log', location: 'Office' },
                    { id: 'INC-HDLG-UNIV-05', description: 'Maintain confidentiality of all parties involved in an incident.', priority: 'High', riskLevel: 'High', consequence: 'Breaching confidentiality can violate privacy and lead to legal action.', proof: 'Confidentiality Agreement', location: 'Office' },
                    { id: 'INC-HDLG-UNIV-06', description: 'Conduct a root cause analysis for all significant incidents.', priority: 'High', riskLevel: 'High', consequence: 'Essential for preventing the same incident from happening again.', proof: 'RCA Report', location: 'Office' },
                    { id: 'INC-HDLG-UNIV-07', description: 'Implement corrective actions to prevent recurrence.', priority: 'High', riskLevel: 'High', consequence: 'The most important step to show that the institution learns from its mistakes.', proof: 'CAPA Plan', location: 'System' },
                    { id: 'INC-HDLG-UNIV-08', description: 'Provide support and counseling to affected students/staff.', priority: 'High', riskLevel: 'Medium', consequence: 'Crucial for the well-being of the campus community after a traumatic event.', proof: 'Counseling Log', location: 'Counseling Center' },
                    { id: 'INC-HDLG-UNIV-09', description: 'Document all communications with external parties (police, media).', priority: 'High', riskLevel: 'High', consequence: 'Creates a clear record of who said what and when.', proof: 'External Communication Log', location: 'Office' },
                    { id: 'INC-HDLG-UNIV-10', description: 'Review and update incident handling procedures annually.', priority: 'High', riskLevel: 'High', consequence: 'Ensures the procedures remain effective and relevant.', proof: 'Updated Procedures', location: 'Office' },
                ]
            }
        ]
    }
];

    

    




  




  

    
























