
import React from "react";
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket, Wifi, UserCheck, BarChart3, Link as LinkIcon, BrainCircuit, Bot, Syringe, DatabaseZap, Megaphone, Siren, Lock, KeyRound, Users, Banknote, Webcam, Bug, UserCog, PackageCheck, Ambulance, FileWarning, Milestone, DoorClosed, CircleDollarSign, Wind, Thermometer, UserCog2, Key, Router, Package, Watch, Drama, Barcode, Stethoscope, SyringeIcon, HeartPulse, Microscope, Bus, BookOpen, Car, Drill, SprayCan, FileLock, Projector, Popcorn, Ticket, Lamp, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask, Store, Pill, Ship, Sun, Film, AnchorIcon, Clapperboard, MonitorPlay, Tv, Library, BriefcaseBusiness, ShieldCheck, Handshake, Route, CalendarDays, ClipboardList, HelpingHand, Map, DramaIcon, UserRound, Sparkles, Scale, Code, Video, Zap, ScanFace, HandPlatter, Cog, Scissors, Eye, Fish, Cloud, Theater, Search, TrendingUp, ClipboardCheck, UserPlus, Coins, Mail } from "lucide-react";

export type Checklist = {
    title: string;
    department: string;
    frequency: string;
    role: string;
    summary: string;
    icon: React.ElementType;
    tasks: {
        id: string;
        description: string;
        priority: 'High' | 'Medium' | 'Low';
        riskLevel: 'High' | 'Medium' | 'Low';
        consequence: string;
        proof: string;
        location: string;
        frequency?: string;
        department?: string;
        role?: string;
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
    priceUSD?: number;
    competitorPriceUSD?: number;
    paymentId: string;
    lemonSqueezyUrl?: string;
    listId?: number; // Brevo List ID
    category: "Hospitality" | "Corporate & Tech" | "Retail" | "Healthcare" | "Education" | "Industrial & Transport" | "Entertainment & Events" | "Social Cause" | "Real Estate" | "Compliance" | "Wellness & Beauty" | "Agriculture" | "Specialized Production" | "Food & Beverage" | "Franchise";
    description: string;
    icon: React.ElementType;
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
        icon: PawPrint,
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
        checklists: []
    },
    {
        id: 'hotels_and_resorts',
        title: "Hotels & Resorts Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
        category: "Hospitality",
        description: "The complete operational toolkit for General Managers and Department Heads to achieve 5-star excellence in every guest experience.",
        icon: Building,
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
        checklists: []
    },
    {
        id: 'restaurants',
        title: "Restaurant Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/ee481c02-cd85-430b-bc21-7a574bfea0cb',
        category: "Hospitality",
        description: "An essential HACCP-based toolkit for restaurant owners focused on food safety, quality, and operational efficiency.",
        icon: Utensils,
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
        checklists: []
    },
    // --- Retail ---
    {
        id: 'fashion_and_apparel_retail',
        title: "Fashion & Apparel Retail Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/35c743f7-333a-4fe6-9866-3334172e144b',
        category: "Retail",
        description: "A specialized toolkit for fashion retailers to manage seasonal inventory, optimize visual merchandising, and prevent shrinkage.",
        icon: Shirt,
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
        checklists: []
    },
    {
        id: 'jewelry_and_luxury_retail',
        title: "Jewelry & Luxury Retail Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/bf8a35c9-991d-4471-95f6-e0c7ce285981',
        category: "Retail",
        description: "A specialized toolkit for high-value retail, focusing on vault security, inventory control, and preventing sophisticated fraud.",
        icon: Gem,
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
        checklists: []
    },
    {
        id: 'electronics_showroom_pack',
        title: "Electronics Showroom Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a05cb9ef-51b3-454a-a389-609b314b8338',
        category: "Retail",
        description: "A comprehensive operational pack for electronics retailers to ensure safety, asset security, and a superior customer experience.",
        icon: Tv,
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
        checklists: []
    },
    {
        id: 'supermarket_grocery_retail_pack',
        title: "Supermarket & Grocery Retail Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d6d4dd85-3fb9-4c26-8ec3-cb021ddebfdc',
        category: "Retail",
        description: "An all-in-one operations and compliance pack for supermarkets, hypermarkets, and grocery retail chains, ensuring food safety, quality, and operational efficiency across outlets.",
        icon: ShoppingBasket,
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Supermarket Owners", "Grocery Store Proprietors", "Heads of Retail Operations", "Store Directors", "Department Heads (Fresh Food, Dairy)", "3PL Partners"],
        sampleItems: [
            { text: "Prevent spoilage and foodborne illness with robust cold chain and perishables temperature management.", icon: <Thermometer /> },
            { text: "Minimize waste and ensure freshness with a daily FIFO rotation and expiry date sweep process.", icon: <Recycle /> },
            { text: "Maintain a safe and inviting store with checklists for hygiene, cleaning, and rapid spill response.", icon: <SprayCan /> },
            { text: "Protect your revenue through rigorous point-of-sale security and cash reconciliation.", icon: <DollarSign /> },
            { text: "Guarantee food quality from the source with a stringent raw material receiving and QC process.", icon: <PackageCheck /> },
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
        checklists: []
    },
    // --- Corporate & Tech ---
    {
        id: 'facility_management_blueprint',
        title: "Facility Management Blueprint (Enterprise Edition)",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/ab64c7a0-4341-40a8-bb54-871074a22d10',
        category: "Corporate & Tech",
        description: "An enterprise-grade toolkit for COOs and Heads of Corporate Real Estate to manage large-scale facilities like IT campuses, business parks, and corporate offices.",
        icon: Building2,
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
        checklists: []
    },
    {
        id: 'corporate_legal_compliance_starter_kit',
        title: "Corporate Legal & Compliance Starter Kit",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/721ef593-433a-4d89-b72b-7d4aac27363f',
        category: "Corporate & Tech",
        description: "An essential toolkit for founders and managers to embed basic legal and compliance checks into core business operations, reducing risk without needing a law degree.",
        icon: FileLock,
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
        checklists: []
    },
    {
        id: 'enterprise_risk_cybersecurity_pack',
        title: "Enterprise Risk & Cybersecurity Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/6418c3d7-2101-4433-a337-2d4314c4059a',
        category: "Corporate & Tech",
        description: "An advanced toolkit for CISOs and compliance officers to manage modern enterprise risks, from AI governance and data privacy to cloud security and incident response.",
        icon: ShieldCheck,
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
        checklists: []
    },
    // --- Healthcare ---
    {
        id: 'healthcare_and_hospital_operations',
        title: "Healthcare & Hospital Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
        category: "Healthcare",
        description: "A comprehensive NABH & JCI-aligned toolkit for hospital administrators to ensure patient safety, clinical quality, and operational excellence.",
        icon: Hospital,
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
        checklists: []
    },
    // --- Education ---
    {
        id: 'school_operations_pack',
        title: "School Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/e74bd8ac-23cb-4993-bdeb-bac9dbe9cd67',
        category: "Education",
        description: "A comprehensive safety and compliance toolkit for school principals and administrators to ensure a secure and well-managed learning environment.",
        icon: School,
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
        checklists: []
    },
    {
        id: 'university_college_ops',
        title: "University & College Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/14108350-9e78-4fbc-87cf-a41b9e4ae207',
        category: "Education",
        description: "A comprehensive compliance and safety pack for managing large educational campuses, from hostels and labs to transport and events.",
        icon: GraduationCap,
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
        checklists: []
    },
    // --- Entertainment & Events ---
    {
        id: 'film_production_pack',
        title: "Film & OTT Production Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a17569cb-01d1-4dda-b2e4-c4669fe90d94',
        category: "Entertainment & Events",
        description: "An end-to-end production toolkit for film and OTT producers to manage everything from legal clearances and location permits to on-set safety and post-production workflows.",
        icon: Film,
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
            description: "A film shoot in a public space is shut down by the police because the production team failed to get the right permits, costing a full day of shooting and thousands of dollars. This scenario shows how checklists prevent this.",
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
        checklists: []
    },
    {
        id: 'ott_platform_pack',
        title: "OTT Streaming Platform Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c556c2-51d9-4d6f-812f-359a795fd971',
        category: "Entertainment & Events",
        description: "A comprehensive toolkit for OTT platform operations, covering content ingestion, quality control, live streaming, and infrastructure management.",
        icon: MonitorPlay,
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
        checklists: []
    },
    {
        id: 'sports_clubs_stadium_operations_pack',
        title: "Sports Clubs & Stadium Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f290d8a5-d913-485e-9905-59b922a01490',
        category: "Entertainment & Events",
        description: "A comprehensive operational toolkit for sports clubs, gyms, and stadium managers to ensure safety, compliance, and an excellent member experience.",
        icon: Trophy,
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
        checklists: []
    },
    {
        id: 'cinema_operations_pack',
        title: "Cinema & Multiplex Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/0acf829c-e492-4f66-ae74-0231bfe0bc82',
        category: "Entertainment & Events",
        description: "A complete operational pack for cinema managers to ensure a safe, clean, and high-quality movie-going experience.",
        icon: Popcorn,
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
        checklists: []
    },
    {
        id: 'theme_park_ops_pack',
        title: "Theme Park Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f2873138-038c-4592-8025-5463f87b328a',
        category: "Entertainment & Events",
        description: "A safety-critical toolkit for theme park and amusement park operators, covering ride safety, crowd management, and emergency response.",
        icon: FerrisWheel,
        whoIsItFor: ["Theme Park GMs", "Heads of Operations", "Ride Safety Managers", "Security Directors"],
        sampleItems: [
            { text: "Prevent ride-related accidents with daily, weekly, and monthly ride inspection checklists based on manufacturer guidelines.", icon: <Wrench /> },
            { text: "Ensure guest safety with comprehensive crowd management, queuing, and access control SOPs.", icon: <Users /> },
            { text: "Be prepared for any crisis with emergency response plans for medical incidents, power failures, and ride stoppages.", icon: <Siren /> },
            { text: "Protect children with a robust Lost Child Protocol and designated safe zones.", icon: <HelpingHand /> },
            { text: "Maintain a safe and beautiful park with checklists for park-wide landscaping, housekeeping, and infrastructure safety.", icon: <Recycle /> },
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
        checklists: []
    },
    {
        id: 'logistics_warehouse_pack',
        title: "Logistics & Warehouse Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f48201fb-a708-43ac-a508-7381c32f55c5',
        category: "Industrial & Transport",
        description: "A complete toolkit for warehouse managers and logistics heads to optimize inventory, ensure safety, and improve supply chain resilience.",
        icon: Warehouse,
        whoIsItFor: ["Warehouse Managers", "Logistics Heads", "Supply Chain Directors", "3PL Providers"],
        sampleItems: [
            { text: "Streamline your receiving process with checklists for inbound quality control and documentation.", icon: <ClipboardCheck /> },
            { text: "Maximize space and efficiency with SOPs for stock-keeping, bin location management, and putaway.", icon: <Package /> },
            { text: "Ensure order accuracy and speed with a structured picking, packing, and dispatch process.", icon: <Truck /> },
            { text: "Maintain a safe workplace with checklists for Material Handling Equipment (MHE) safety and operator training.", icon: <HardHat /> },
            { text: "Protect your inventory with robust protocols for security, access control, and cycle counting.", icon: <Shield /> },
            { text: "Build a resilient supply chain with SOPs for vendor management and contingency planning.", icon: <LinkIcon /> }
        ],
        previewScenario: {
            title: "Preventing a Costly Mis-Shipment",
            description: "A large B2B order is incorrectly picked and shipped, leading to a major customer complaint and expensive reverse logistics. This scenario shows how checklists prevent this.",
            tasks: [
                { id: 'PICK-PACK-01', description: "The 'Picking & Packing' SOP requires a two-stage verification: first the picker scans the item and location, then a separate packer re-scans the item before sealing the box.", sourceChecklist: "Picking, Packing & Dispatch", priority: 'High' },
                { id: 'INV-MGMT-03', description: "The 'Inventory Management' checklist ensures that all bin locations are clearly labeled, reducing the chance of a picker going to the wrong location in the first place.", sourceChecklist: "Inventory & Stock Management", priority: 'High' },
                { id: 'DISPATCH-02', description: "The 'Dispatch & Logistics' SOP includes a final weight check against the expected weight in the system, which would flag an order with a missing or extra item before it leaves the warehouse.", sourceChecklist: "Dispatch & Logistics Coordination", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Global Logistics & Safety Standards",
            standards: [
                { name: "ISO 9001", description: "For quality management systems and process control." },
                { name: "ISO 45001", description: "International standard for occupational health and safety." },
                { name: "C-TPAT", description: "Guidelines for supply chain security from the U.S. Customs and Border Protection." },
                { name: "OSHA", description: "Standards for warehouse and MHE safety." }
            ]
        },
        checklists: []
    },
    {
        id: 'manufacturing_operations_ehs_pack',
        title: "Manufacturing Operations & EHS Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/62ae53f1-6966-4746-bf80-69ffb4b0d7dc',
        category: "Industrial & Transport",
        description: "A comprehensive EHS and operational toolkit for plant heads and safety officers to ensure a safe, compliant, and efficient manufacturing environment.",
        icon: Factory,
        badgeText: "Safety Critical",
        badgeVariant: "destructive",
        bestseller: true,
        whoIsItFor: ["Plant Heads", "EHS Officers", "Production Managers", "Maintenance Heads", "Quality Control Managers"],
        sampleItems: [
            { text: "Prevent fatal accidents with a legally compliant Lock-Out Tag-Out (LOTO) procedure for machine maintenance.", icon: <Lock /> },
            { text: "Ensure worker safety with a permit-to-work system for high-risk jobs like hot work and confined space entry.", icon: <FileCheck /> },
            { text: "Boost productivity by tracking Overall Equipment Effectiveness (OEE) to minimize downtime.", icon: <TrendingUp /> },
            { text: "Reduce defects and waste with an In-Process Quality Control (IPQC) system.", icon: <ClipboardCheck /> },
            { text: "Mitigate fire and explosion risks with strict chemical handling and storage protocols.", icon: <Siren /> },
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
        checklists: []
    },
    {
        id: 'pharmacy_ops_pack',
        title: "Pharmacy Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/0ef5fea7-71de-457c-984b-5ba1787351ce',
        category: "Healthcare",
        description: "A compliance and safety toolkit for pharmacies to manage inventory, prevent dispensing errors, and adhere to regulatory standards.",
        icon: Pill,
        whoIsItFor: ["Pharmacists", "Pharmacy Owners", "Hospital Pharmacy Managers", "Retail Pharmacy Chains"],
        sampleItems: [
            { text: "Prevent dispensing errors with a robust prescription verification and double-check system.", icon: <FileCheck /> },
            { text: "Ensure drug efficacy and safety with stringent cold chain management and temperature logging for vaccines and biologics.", icon: <Thermometer /> },
            { text: "Manage narcotics and high-risk drugs with a legally compliant inventory, storage, and dispensing log.", icon: <Lock /> },
            { text: "Maintain regulatory compliance with SOPs for drug procurement, batch tracking, and recall management.", icon: <Barcode /> },
            { text: "Improve patient counseling with checklists for providing clear instructions on medication usage and side effects.", icon: <UserCheck /> },
            { text: "Run a clean and professional pharmacy with daily checklists for hygiene, organization, and stock arrangement.", icon: <Sparkles /> }
        ],
        previewScenario: {
            title: "Preventing a Look-Alike, Sound-Alike (LASA) Drug Error",
            description: "A pharmacist nearly dispenses a sound-alike drug with a similar name but a completely different use, a common and dangerous error. This scenario shows how checklists create a safety net.",
            tasks: [
                { id: 'DISP-ERR-02', description: "The 'Dispensing Error Prevention' SOP requires a mandatory barcode scan of the drug container, which would immediately flag the mismatch with the prescription in the system.", sourceChecklist: "Dispensing Error Prevention", priority: 'High' },
                { id: 'LASA-01', description: "The 'LASA Drugs Management' checklist mandates that look-alike, sound-alike drugs are stored in separate, brightly-labeled bins, making a picking error less likely.", sourceChecklist: "LASA Drugs Management", priority: 'High' },
                { id: 'PAT-COUNSEL-01', description: "The 'Patient Counseling' checklist requires the pharmacist to verbally confirm the name of the drug and its purpose with the patient, providing a final chance to catch the error.", sourceChecklist: "Patient Counseling Checklist", priority: 'High' }
            ]
        },
        globalStandards: {
            title: "Aligned with Pharmacy Council & Drug Safety Standards",
            standards: [
                { name: "Pharmacy Act & Drugs and Cosmetics Act", description: "Compliance with Indian pharmacy and drug laws." },
                { name: "Good Pharmacy Practice (GPP)", description: "Guidelines from the FIP and WHO for quality pharmacy services." },
                { name: "ISMP Guidelines", description: "Best practices for medication safety from the Institute for Safe Medication Practices." },
                { name: "NABH Standards for Pharmacies", description: "Accreditation standards for hospital and retail pharmacies in India." }
            ]
        },
        checklists: []
    }
];

    