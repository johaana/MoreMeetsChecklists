
import type { LucideIcon } from "lucide-react";
import type { ReactElement } from 'react';

export type Checklist = {
    title: string;
    department: string;
    frequency: string;
    role: string;
    summary: string;
    icon: string;
    tasks: {
        id: string;
        description: string;
        priority: 'High' | 'Medium' | 'Low';
        riskLevel: 'High' | 'Medium' | 'Low';
        consequence: string;
        proof: string;
        location?: string;
        department?: string;
        role?: string;
        frequency?: string;
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
    category: "Hospitality" | "Corporate & Tech" | "Retail" | "Healthcare" | "Education" | "Industrial & Transport" | "Entertainment & Events" | "Social Cause" | "Real Estate" | "Compliance" | "Wellness & Beauty" | "Agriculture" | "Specialized Production" | "Food & Beverage" | "Franchise" | "Master Access";
    description: string;
    icon: string;
    badgeText?: string;
    badgeVariant?: "default" | "secondary" | "destructive" | "outline" | "accent";
    sampleItems: { text: string; icon: string; }[];
    whoIsItFor: string[];
    previewScenario?: PreviewScenario;
    checklists: Checklist[];
    globalStandards?: {
        title: string;
        standards: { name: string; description: string; }[];
    };
    bestseller?: boolean;
}

const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC', // Placeholder
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/b0b53361-91a3-496a-a169-b5a0344d7328',
    category: "Franchise",
    description: "A complete toolkit for franchisors to ensure brand consistency, operational excellence, and franchisee success across all locations.",
    icon: "store",
    badgeText: "New!",
    badgeVariant: "accent",
    whoIsItFor: ["Franchise Owners", "Heads of Operations", "Franchise Development Managers", "Regional Managers"],
    sampleItems: [
        { text: "Ensure a flawless launch for every new outlet with a 100-point New Franchisee Onboarding checklist.", icon: "rocket" },
        { text: "Protect your brand with rigorous Brand Standards and Marketing Compliance audits.", icon: "shield" },
        { text: "Drive profitability with SOPs for supply chain management, inventory control, and financial reporting.", icon: "trending-up" },
        { text: "Empower franchisee success with structured training programs and performance review templates.", icon: "users" },
        { text: "Maintain quality across the network with checklists for customer service and product consistency.", icon: "star" },
        { text: "Simplify legal and administrative tasks with templates for site selection and agreement management.", icon: "file-check" }
    ],
    checklists: [
        {
            title: "New Franchisee Onboarding",
            department: "Operations",
            frequency: "Per New Franchisee",
            role: "Onboarding Manager",
            summary: "A comprehensive checklist to guide a new franchisee from signing the agreement to grand opening, ensuring no steps are missed.",
            icon: "user-plus",
            tasks: [
                { id: "FO-01", description: "Legal & Financial: Franchise agreement signed and all fees paid.", priority: "High", riskLevel: "High", consequence: "Legal disputes, delayed opening.", proof: "Signed agreement copy, payment receipt.", location: "Head Office" },
                { id: "FO-02", description: "Site Selection: Final site approved based on demographic and feasibility reports.", priority: "High", riskLevel: "High", consequence: "Poor location leading to low sales.", proof: "Signed site approval form.", location: "Field" },
                { id: "FO-03", description: "Store Fit-Out: Interior design and layout approved and vendor assigned.", priority: "High", riskLevel: "Medium", consequence: "Brand inconsistency, construction delays.", proof: "Approved layout drawings.", location: "Head Office" },
                { id: "FO-04", description: "Initial Training: Franchisee and key staff complete mandatory head office training.", priority: "High", riskLevel: "High", consequence: "Operational errors, poor customer service.", proof: "Training completion certificates.", location: "Training Center" },
                { id: "FO-05", description: "Supply Chain Setup: Initial orders for all equipment, raw materials, and inventory placed.", priority: "High", riskLevel: "Medium", consequence: "Store cannot open on time.", proof: "Purchase order copies.", location: "Head Office" },
                { id: "FO-06", description: "Marketing: Pre-launch and grand opening marketing plan approved and budget allocated.", priority: "Medium", riskLevel: "Medium", consequence: "Low footfall during opening week.", proof: "Approved marketing plan.", location: "Marketing Dept." },
                { id: "FO-07", description: "Technology Setup: POS system, CCTV, and other required software installed and tested.", priority: "High", riskLevel: "High", consequence: "Inability to process sales, security gaps.", proof: "IT sign-off document.", location: "Franchise Location" },
                { id: "FO-08", description: "Pre-Opening Audit: Final walkthrough to ensure store is 100% brand compliant and ready for opening.", priority: "High", riskLevel: "High", consequence: "Negative first impression, operational failures.", proof: "Completed pre-opening audit form.", location: "Franchise Location" }
            ]
        },
        {
            title: "Quarterly Brand Standards Audit",
            department: "Operations / Quality Assurance",
            frequency: "Quarterly",
            role: "Area Manager / Auditor",
            summary: "Ensures the franchisee is adhering to all brand standards, from store cleanliness to staff uniform and product presentation.",
            icon: "search",
            tasks: [
                { id: "BSA-01", description: "Exterior & Signage: All external branding is clean, undamaged, and correctly illuminated.", priority: "High", riskLevel: "Medium", consequence: "Poor brand image, customer confusion.", proof: "Dated photo of storefront.", location: "Exterior" },
                { id: "BSA-02", description: "Interior & Ambiance: Store is clean, well-lit, and music/scent protocols are followed.", priority: "Medium", riskLevel: "Low", consequence: "Sub-par customer experience.", proof: "Audit checklist section sign-off.", location: "Interior" },
                { id: "BSA-03", description: "Product & Service: Product quality, portion sizes, and packaging meet brand standards.", priority: "High", riskLevel: "High", consequence: "Brand dilution, customer complaints.", proof: "Test purchase and product inspection notes.", location: "Point of Sale" },
                { id: "BSA-04", description: "Staff Presentation: All on-duty staff are in full, clean uniform with proper grooming.", priority: "Medium", riskLevel: "Low", consequence: "Unprofessional appearance.", proof: "Visual inspection during audit.", location: "All Areas" },
                { id: "BSA-05", description: "Marketing Collateral: Only approved, current marketing materials are on display.", priority: "Low", riskLevel: "Low", consequence: "Outdated offers, brand inconsistency.", proof: "Photo of in-store displays.", location: "Interior" },
                { id: "BSA-06", description: "Hygiene & Cleanliness: Restrooms, kitchen (if any), and seating areas are spotless.", priority: "High", riskLevel: "High", consequence: "Health code violations, customer disgust.", proof: "Hygiene audit score.", location: "All Areas" }
            ]
        },
        {
            title: "Supply Chain & Inventory Audit",
            department: "Supply Chain",
            frequency: "Monthly",
            role: "Franchisee / Store Manager",
            summary: "Verifies that the franchisee is using only approved suppliers and managing inventory effectively to prevent stockouts or wastage.",
            icon: "truck",
            tasks: [
                { id: "SCI-01", description: "Verify all key raw materials are sourced from brand-approved suppliers.", priority: "High", riskLevel: "High", consequence: "Product inconsistency, potential safety issues, breach of contract.", proof: "Review of last 30 days of purchase invoices.", location: "Office" },
                { id: "SCI-02", description: "Check storage conditions (temperature, FIFO) for all perishable and dry goods.", priority: "High", riskLevel: "Medium", consequence: "Food spoilage, wastage, health risks.", proof: "Temperature logs, visual inspection of storage.", location: "Stock Room/Kitchen" },
                { id: "SCI-03", description: "Conduct a physical count of top 10 SKUs and reconcile with POS system data.", priority: "Medium", riskLevel: "Medium", consequence: "Inventory shrinkage, inaccurate ordering.", proof: "Signed stock count sheet.", location: "Stock Room" },
                { id: "SCI-04", description: "Review wastage logs for patterns and identify areas for improvement.", priority: "Medium", riskLevel: "Low", consequence: "Lost profit.", proof: "Wastage log analysis.", location: "Office" }
            ]
        },
        {
            title: "Customer Service & Experience Audit",
            department: "Operations",
            frequency: "Monthly",
            role: "Mystery Shopper / Area Manager",
            summary: "Evaluates the customer experience against brand standards, from greeting to final transaction.",
            icon: "smile",
            tasks: [
                { id: "CSE-01", description: "Greeting: Was the customer greeted within 30 seconds of entering?", priority: "High", riskLevel: "Low", consequence: "Poor first impression.", proof: "Mystery shopper report timestamp.", location: "Entrance" },
                { id: "CSE-02", description: "Order Taking: Was the order taken accurately and efficiently, with upselling attempted?", priority: "Medium", riskLevel: "Low", consequence: "Lost revenue, customer frustration.", proof: "Mystery shopper report.", location: "Point of Sale" },
                { id: "CSE-03", description: "Complaint Handling: Was a test complaint handled politely and according to the brand's service recovery protocol?", priority: "High", riskLevel: "High", consequence: "A small issue escalating into a major online complaint.", proof: "Detailed notes in mystery shopper report.", location: "Point of Sale" },
                { id: "CSE-04", description: "Store Atmosphere: Was the environment clean, welcoming, and safe for customers?", priority: "High", riskLevel: "Medium", consequence: "Customers feel uncomfortable and won't return.", proof: "Mystery shopper rating.", location: "All Areas" },
                { id: "CSE-05", description: "Closing: Was the customer thanked and given a sincere farewell?", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunity to build loyalty.", proof: "Mystery shopper report.", location: "Exit" }
            ]
        },
    ]
};

const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotels & Resorts Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "A complete operational toolkit for General Managers and Department Heads to achieve 5-star excellence in every guest experience.",
    icon: "building",
    badgeText: "Most Popular",
    badgeVariant: "default",
    bestseller: true,
    whoIsItFor: ["Hotel Owners", "General Managers", "COOs", "VPs of Operations", "Directors", "Heads of Departments", "GMs", "VPs", "and their teams"],
    sampleItems: [
            { text: "Ensure flawless room presentation with daily readiness and housekeeping verification.", icon: "home" },
            { text: "Uphold world-class food safety with kitchen hygiene (HACCP) and F&B service standards.", icon: "utensils" },
            { text: "Mitigate water-related risks with pool & spa safety protocols and water quality logs.", icon: "life-buoy" },
            { text: "Guarantee guest and staff safety through rigorous fire safety audits and evacuation drills.", icon: "siren" },
            { text: "Control site access and third-party risk with vendor and work permit SOPs.", icon: "hard-hat" },
            { text: "Prevent costly downtime with a proactive preventive maintenance schedule for all critical assets.", icon: "wrench" }
    ],
    checklists: [
        {
            title: "Daily Housekeeping & Room Readiness",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Housekeeping Supervisor",
            summary: "Ensures every guest room meets the highest standards of cleanliness, functionality, and presentation before check-in and during the stay.",
            icon: "bed-double",
            tasks: [
                { id: "HK-DR-01", description: "Verify all vacant rooms are cleaned, sanitized, and inspected as per the 'Room Cleaning Checklist'.", priority: "High", riskLevel: "Medium", consequence: "Negative guest reviews, potential health risks.", proof: "Supervisor's inspection log (digital/physical).", location: "All Vacant Rooms" },
                { id: "HK-DR-02", description: "Check and restock housekeeping carts with all necessary linens, amenities, and cleaning supplies for the day's operations.", priority: "Medium", riskLevel: "Low", consequence: "Delayed room servicing, inconsistent amenity stocking.", proof: "Signed cart checklist.", location: "Housekeeping Pantry" },
                { id: "HK-DR-03", description: "Conduct a morning briefing with housekeeping staff to assign rooms, discuss VIP arrivals, and highlight any special guest requests.", priority: "Medium", riskLevel: "Low", consequence: "Poor team coordination, missed special requests.", proof: "Briefing log or attendance sheet.", location: "Housekeeping Office" },
                { id: "HK-DR-04", description: "Inspect a random sample of 5 'ready' rooms against the 5-star cleaning standard checklist.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent room quality, guest complaints.", proof: "Completed random inspection forms.", location: "Random Guest Rooms" },
                { id: "HK-DR-05", description: "Log all lost and found items with date, time, location, and description.", priority: "Medium", riskLevel: "Low", consequence: "Guest dissatisfaction, potential theft accusations.", proof: "Lost & Found Register.", location: "Housekeeping Office" },
                { id: "HK-DR-06", description: "Check and clear all housekeeping service corridors of trays and linen.", priority: "Low", riskLevel: "Low", consequence: "Fire hazard, untidy appearance.", proof: "Visual check during rounds.", location: "Service Corridors" }
            ]
        },
        {
            title: "Front Office - Shift Opening & Closing",
            department: "Front Office",
            frequency: "Per Shift",
            role: "Front Office Executive",
            summary: "Ensures a smooth transition between shifts, accurate cash handling, and readiness for guest arrivals/departures.",
            icon: "user",
            tasks: [
                { id: "FO-SC-01", description: "Verify cash float count at the beginning and end of the shift with supervisor signature.", priority: "High", riskLevel: "High", consequence: "Cash discrepancy, theft, financial loss.", proof: "Signed float count form.", location: "Front Desk" },
                { id: "FO-SC-02", description: "Review shift handover log for pending guest requests, complaints, or follow-ups.", priority: "High", riskLevel: "Medium", consequence: "Guest service failures, unresolved issues.", proof: "Initials in handover logbook.", location: "Front Desk" },
                { id: "FO-SC-03", description: "Check PMS for expected arrivals, departures, and VIPs for the upcoming shift.", priority: "High", riskLevel: "Low", consequence: "Unprepared for guest needs, poor first impression.", proof: "PMS review confirmation.", location: "Front Desk" },
                { id: "FO-SC-04", description: "Reconcile all credit card transactions and POS settlements from the shift.", priority: "High", riskLevel: "High", consequence: "Revenue leakage, accounting errors.", proof: "End-of-shift settlement report from PMS/EDC machine.", location: "Front Desk" },
                { id: "FO-SC-05", description: "Ensure all key cards are accounted for and programmed correctly.", priority: "Medium", riskLevel: "Medium", consequence: "Guest security risk, unauthorized access.", proof: "Key card inventory count.", location: "Front Desk" }
            ]
        },
        {
            title: "F&B - Kitchen Opening Hygiene Checklist (HACCP)",
            department: "Food & Beverage",
            frequency: "Daily",
            role: "Sous Chef / Chef de Partie",
            summary: "Based on HACCP principles, this ensures the kitchen is sanitary and safe before food preparation begins.",
            icon: "utensils-crossed",
            tasks: [
                { id: "FB-KO-01", description: "Check and record temperatures of all refrigerators and freezers. Report any deviations from critical limits.", priority: "High", riskLevel: "High", consequence: "Food spoilage, risk of foodborne illness (bacterial growth).", proof: "Temperature Logbook.", location: "All Kitchen Cold Storage" },
                { id: "FB-KO-02", description: "Verify all food contact surfaces (cutting boards, prep tables) are clean and sanitized.", priority: "High", riskLevel: "High", consequence: "Cross-contamination, food poisoning.", proof: "ATP swab test results (weekly) or visual inspection log (daily).", location: "Kitchen Prep Areas" },
                { id: "FB-KO-03", description: "Ensure staff hygiene: clean uniforms, hairnets, and proper handwashing facilities are stocked and accessible.", priority: "High", riskLevel: "Medium", consequence: "Spread of pathogens from staff to food.", proof: "Supervisor's daily staff inspection sign-off.", location: "Kitchen Entrance" },
                { id: "FB-KO-04", description: "Check for any signs of pests (droppings, gnaw marks) and report immediately.", priority: "High", riskLevel: "High", consequence: "Major health code violation, brand damage, closure by authorities.", proof: "Pest Control Logbook.", location: "Entire Kitchen" },
                { id: "FB-KO-05", description: "Confirm calibration of food thermometers using the ice-point or boiling-point method.", priority: "Medium", riskLevel: "High", consequence: "Inaccurate temperature readings leading to undercooked food.", proof: "Thermometer Calibration Log.", location: "Kitchen" }
            ]
        },
        {
            title: "Hotel Fire Safety & Evacuation Audit",
            department: "Security / Engineering",
            frequency: "Weekly",
            role: "Safety Officer",
            summary: "A weekly audit to ensure all fire safety equipment is functional and evacuation routes are clear.",
            icon: "siren",
            tasks: [
                { id: "SEC-FS-01", description: "Physically check that all fire exit doors are unlocked and unobstructed from both sides.", priority: "High", riskLevel: "High", consequence: "Guests and staff trapped during a fire, leading to injury or death.", proof: "Photo log of checked exits.", location: "All Fire Exits" },
                { id: "SEC-FS-02", description: "Inspect a random sample of fire extinguishers for correct pressure and accessibility.", priority: "High", riskLevel: "High", consequence: "Inability to fight a small fire before it spreads.", proof: "Extinguisher inspection checklist.", location: "Guest Corridors, BOH" },
                { id: "SEC-FS-03", description: "Test a different fire alarm call point each week to verify system functionality.", priority: "High", riskLevel: "High", consequence: "Delayed or failed alarm activation in an emergency.", proof: "Fire Alarm Test Log signed by Engineering.", location: "Varies weekly" },
                { id: "SEC-FS-04", description: "Ensure emergency lighting in stairwells and corridors is functional.", priority: "High", riskLevel: "Medium", consequence: "Panic and injury during evacuation in a power failure.", proof: "Emergency light test log.", location: "Evacuation Routes" },
                { id: "SEC-FS-05", description: "Verify that all fire evacuation plans are clearly posted and legible in guest rooms and common areas.", priority: "Medium", riskLevel: "Low", consequence: "Guest confusion during an evacuation.", proof: "Photo audit of posted plans.", location: "Guest Rooms, Lobbies" }
            ]
        },
        {
            title: "Preventive Maintenance - MEP Systems",
            department: "Engineering",
            frequency: "Monthly",
            role: "Chief Engineer",
            summary: "Scheduled maintenance for Mechanical, Electrical, and Plumbing systems to prevent failures and ensure guest comfort and safety.",
            icon: "wrench",
            tasks: [
                { id: "ENG-PM-01", description: "Inspect and clean HVAC filters for all major air handling units (AHUs).", priority: "Medium", riskLevel: "Low", consequence: "Poor air quality, increased energy consumption, system failure.", proof: "Maintenance log for each AHU.", location: "Plant Rooms" },
                { id: "ENG-PM-02", description: "Test the automatic transfer switch (ATS) for the backup generator.", priority: "High", riskLevel: "High", consequence: "Complete power loss during a utility outage, compromising all hotel systems.", proof: "Generator test run log.", location: "Generator Room" },
                { id: "ENG-PM-03", description: "Inspect and test sump pumps and drainage systems in basements and critical areas.", priority: "Medium", riskLevel: "High", consequence: "Flooding, water damage to critical equipment.", proof: "Pump test log.", location: "Basements, Pump Rooms" },
                { id: "ENG-PM-04", description: "Perform thermal imaging scan on main electrical panels to detect hotspots.", priority: "High", riskLevel: "High", consequence: "Electrical fire, catastrophic power failure.", proof: "Thermal imaging report.", location: "Electrical Rooms" },
                { id: "ENG-PM-05", description: "Check water pressure and test booster pumps.", priority: "Medium", riskLevel: "Low", consequence: "Poor water pressure in guest rooms, guest complaints.", proof: "Pump performance log.", location: "Pump Rooms" }
            ]
        },
        {
            title: "Swimming Pool & Spa Safety",
            department: "Recreation / Engineering",
            frequency: "Daily",
            role: "Pool Attendant",
            summary: "Ensures the pool and spa areas are safe, hygienic, and compliant with health regulations.",
            icon: "life-buoy",
            tasks: [
                { id: "REC-PS-01", description: "Test and record water quality (pH, chlorine/bromine levels) three times daily.", priority: "High", riskLevel: "High", consequence: "Skin/eye irritation, spread of waterborne illness, health dept. closure.", proof: "Water quality logbook.", location: "Poolside" },
                { id: "REC-PS-02", description: "Ensure all safety equipment (life rings, shepherd's crook) is present and accessible.", priority: "High", riskLevel: "High", consequence: "Inability to perform a rescue, leading to drowning.", proof: "Daily safety equipment checklist.", location: "Poolside" },
                { id: "REC-PS-03", description: "Verify all pool drain covers are intact and secure to prevent entrapment.", priority: "High", riskLevel: "High", consequence: "Severe injury or drowning due to suction entrapment.", proof: "Visual inspection log with photo.", location: "Pool Deck" },
                { id: "REC-PS-04", description: "Check that all depth markings and safety signage are clearly visible.", priority: "Medium", riskLevel: "Medium", consequence: "Guest misjudging depth, leading to diving accidents.", proof: "Daily visual check.", location: "Pool Area" },
                { id: "REC-PS-05", description: "Ensure pool deck is clean, free of slip hazards, and furniture is in good repair.", priority: "Medium", riskLevel: "Medium", consequence: "Slip and fall injuries, guest lawsuits.", proof: "Hourly attendant rounds log.", location: "Pool Deck" }
            ]
        }
    ]
};

const otherPacks: PremiumPack[] = [
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
        icon: "utensils",
        badgeText: "Essential for F&B",
        badgeVariant: "accent",
        whoIsItFor: ["Restaurant Owners", "Head Chefs", "Kitchen Managers", "F&B Directors", "VPs", "GMs", "Directors"],
        sampleItems: [
            { text: "Prevent foodborne illness with kitchen opening & closing hygiene protocols (HACCP).", icon: "shield-check" },
            { text: "Protect your inventory from spoilage with rigorous cold chain and temperature monitoring.", icon: "thermometer" },
            { text: "Safeguard guests with a robust allergen management and menu labeling system.", icon: "file-warning" },
            { text: "Maintain a spotless, pest-free environment with auditable waste segregation and pest control logs.", icon: "bug" },
            { text: "Build a professional team through verifiable staff hygiene and training protocols.", icon: "user-check" },
            { text: "Guarantee food quality from the source with a stringent raw material receiving and QC process.", icon: "package-check" }
        ],
        checklists: []
    },
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
        icon: "shirt",
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Fashion Retail Owners", "Store Managers", "Merchandisers", "Heads of Retail", "Head of Visual Merchandising", "COO"],
        sampleItems: [
            { text: "Streamline inventory turnover with a seasonal stock & markdown management system.", icon: "recycle" },
            { text: "Create stunning, brand-aligned stores with visual merchandising and display audits.", icon: "gallery-vertical" },
            { text: "Reduce theft with secure fitting room operations and security protocols.", icon: "door-closed" },
            { text: "Master modern retail with seamless omni-channel operations (Click-and-Collect, Returns).", icon: "link" },
            { text: "Protect your assets through rigorous store safety and loss prevention audits.", icon: "shield" },
            { text: "Ensure financial accuracy with daily cash handling and POS reconciliation procedures.", icon: "banknote" }
        ],
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
        icon: "gem",
        badgeText: "High Value",
        badgeVariant: "accent",
        bestseller: true,
        whoIsItFor: ["Jewelry Store Owners", "Luxury Brand Managers", "Asset Protection Directors", "Heads of Retail"],
        sampleItems: [
            { text: "Enforce Fort-Knox level security with vault access control and dual verification SOPs.", icon: "lock" },
            { text: "Protect your most valuable assets with display case and overnight security protocols.", icon: "shield" },
            { text: "Prevent fraud in high-value transactions with rigorous payment verification steps.", icon: "circle-dollar-sign" },
            { text: "Eliminate swap theft and inventory loss with serialized item and watch management.", icon: "watch" },
            { text: "Ensure regulatory compliance with robust customer verification (KYC) processes.", icon: "user-check" },
            { text: "Build customer trust with a secure and transparent repair and service intake process.", icon: "wrench" }
        ],
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
        icon: "tv",
        whoIsItFor: ["Electronics Store Owners", "Showroom Managers", "Heads of Retail Operations", "Asset Protection Managers"],
        sampleItems: [
            { text: "Prevent fires and damage with meticulous demo unit safety and electrical load audits.", icon: "zap" },
            { text: "Secure high-value assets with serialized tagging, warranty management, and inventory control.", icon: "barcode" },
            { text: "Ensure environmental compliance with a formal e-waste handling and disposal process.", icon: "recycle" },
            { text: "Protect customer data and prevent fraud with PCI-DSS compliant payment security.", icon: "shield-check" },
            { text: "Enhance customer trust through a standardized and professional demo and returns process.", icon: "user-check" },
            { text: "Optimize your back-of-house with safe and efficient stockroom organization checklists.", icon: "package" }
        ],
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
        icon: "shopping-basket",
        badgeText: "New!",
        badgeVariant: "accent",
        whoIsItFor: ["Supermarket Owners", "Grocery Store Proprietors", "Heads of Retail Operations", "Store Directors", "Department Heads (Fresh Food, Dairy)", "3PL Partners"],
        sampleItems: [
            { text: "Prevent spoilage and foodborne illness with robust cold chain and perishables temperature management.", icon: "thermometer" },
            { text: "Minimize waste and ensure freshness with a daily FIFO rotation and expiry date sweep process.", icon: "recycle" },
            { text: "Maintain a safe and inviting store with checklists for hygiene, cleaning, and rapid spill response.", icon: "spray-can" },
            { text: "Protect your revenue through rigorous point-of-sale security and cash reconciliation.", icon: "dollar-sign" },
            { text: "Guarantee food quality from the source with a stringent raw material receiving and QC process.", icon: "package-check" },
            { text: "Ensure compliance and fair trade with weighing scale calibration and Legal Metrology checks.", icon: "scale" }
        ],
        checklists: []
    },
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
        icon: "building-2",
        badgeText: "Enterprise Grade",
        bestseller: true,
        whoIsItFor: ["COOs", "Heads of Corporate Real Estate", "Directors of Facilities", "VPs of Administration", "Data Center Managers"],
        sampleItems: [
            { text: "Implement a daily facility walkthrough for proactive issue identification.", icon: "user-check" },
            { text: "Master vendor performance with preventive maintenance planning and SLA tracking.", icon: "wrench" },
            { text: "Ensure a pristine and safe environment with housekeeping, hygiene, and pest control audits.", icon: "sparkles" },
            { text: "Secure your premises with robust visitor management and access control protocols.", icon: "key-round" },
            { text: "Optimize costs and sustainability through a utilities, energy, and water management system.", icon: "zap" },
            { text: "Guarantee business continuity with critical systems (UPS, HVAC) and redundancy testing.", icon: "cog" }
        ],
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
        icon: "file-lock",
        whoIsItFor: ["Founders & CEOs", "HR Managers", "Operations Heads", "Non-lawyer Managers", "Directors"],
        sampleItems: [
            { text: "Never miss a deadline with a master statutory filing calendar and automated reminders.", icon: "calendar-days" },
            { text: "Ensure company policies are consistently enforced with a robust management and employee acknowledgement system.", icon: "user-check" },
            { text: "Minimize legal risk with a structured contract lifecycle management process and clause checklist.", icon: "file-check" },
            { text: "Proactively identify and fix compliance gaps with an internal audit and remediation (CAPA) workflow.", icon: "bug" },
            { text: "Foster a safe and ethical workplace with a formal whistleblowing and investigation process.", icon: "siren" },
            { text: "Improve corporate governance with a professional system for board meeting preparation and minute taking.", icon: "briefcase-business" }
        ],
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
        icon: "shield-check",
        whoIsItFor: ["CISOs", "CTOs", "Data Protection Officers (DPOs)", "Heads of Risk & Compliance", "IT Directors"],
        sampleItems: [
            { text: "Enforce the principle of least privilege with quarterly user access reviews.", icon: "key-round" },
            { text: "Stay ahead of threats with a structured workflow for vulnerability scanning and patch management.", icon: "bug" },
            { text: "Build resilience with proven playbooks for Business Continuity and Disaster Recovery (BC/DR) drills.", icon: "database-zap" },
            { text: "Master crisis management with step-by-step incident response and digital forensics playbooks.", icon: "siren" },
            { text: "Prevent costly data leaks by continuously monitoring and correcting your cloud security posture (CSPM).", icon: "cloud" },
            { text: "De-risk your supply chain with a formal security assessment process for all third-party vendors.", icon: "handshake" }
        ],
        checklists: []
    },
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
        icon: "hospital",
        badgeText: "Clinical Grade",
        badgeVariant: "destructive",
        bestseller: true,
        whoIsItFor: ["Hospital COOs & CEOs", "Medical Directors", "Quality Assurance Heads", "Nursing Superintendents"],
        sampleItems: [
            { text: "Prevent 'never events' with a WHO-aligned Surgical Safety Checklist.", icon: "stethoscope" },
            { text: "Combat hospital-acquired infections (HAIs) with rigorous infection control and sterilization (CSSD) audits.", icon: "syringe" },
            { text: "Eliminate medication errors using SOPs for high-alert medication dispensing and administration.", icon: "pill" },
            { text: "Enhance patient safety with a robust protocol for patient identification at every touchpoint.", icon: "user-check" },
            { text: "Ensure regulatory compliance with a systematic process for biomedical waste management.", icon: "recycle" },
            { text: "Prepare for any crisis with emergency code management and mock drill scenarios.", icon: "ambulance" }
        ],
        checklists: []
    },
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
        icon: "school",
        whoIsItFor: ["School Principals", "Vice-Principals", "Heads of Administration", "School Trustees", "Operations Managers"],
        sampleItems: [
            { text: "Ensure student safety with robust bus transport, drop-off, and pickup SOPs.", icon: "bus" },
            { text: "Prevent unauthorized access with a strict visitor management and gate security protocol.", icon: "key-round" },
            { text: "Maintain a safe campus with daily playground, classroom, and facility safety audits.", icon: "shield" },
            { text: "Prepare for emergencies with comprehensive fire safety drills and first-aid response plans.", icon: "siren" },
            { text: "Protect students with a legally compliant staff background verification and hiring process.", icon: "user-check" },
            { text: "Ensure a smooth and fair admissions process with a standardized enrolment checklist.", icon: "user-plus" },
            { text: "Safeguard academic integrity with a secure examination and report card generation process.", icon: "graduation-cap" },
        ],
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
        icon: "graduation-cap",
        whoIsItFor: ["Deans & Directors", "Registrars", "Heads of Administration", "Chief Wardens", "Campus Security Heads"],
        sampleItems: [
            { text: "Ensure student safety with hostel entry/exit protocols and room inspections.", icon: "home" },
            { text: "Prevent accidents and misuse with rigorous lab safety, chemical handling, and equipment audits.", icon: "test-tube" },
            { text: "Safeguard campus events with protocols for crowd management, permissions, and emergency response.", icon: "theater" },
            { text: "Maintain a compliant campus with audits for fire safety, accessibility (Divyangjan), and infrastructure.", icon: "building-2" },
            { text: "Mitigate foodborne illness risks in large messes with HACCP-aligned kitchen hygiene SOPs.", icon: "utensils" },
            { text: "Protect against cyber threats with IT policies for network access, data privacy, and acceptable use.", icon: "shield" }
        ],
        checklists: []
    },
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
        icon: "film",
        whoIsItFor: ["Film Producers", "Line Producers", "Production Managers", "Heads of Production (OTT)"],
        sampleItems: [
            { text: "Secure your project legally with pre-production checklists for script clearance, life rights, and chain-of-title.", icon: "file-lock" },
            { text: "Streamline location management with SOPs for scouting, permits, and on-location logistics.", icon: "map" },
            { text: "Manage your cast and crew effectively with standardized contracts, call sheets, and travel coordination.", icon: "users" },
            { text: "Ensure a safe set with protocols for stunt coordination, equipment safety, and incident reporting.", icon: "siren" },
            { text: "Keep your budget on track with checklists for cost reporting, vendor payments, and cash flow management.", icon: "banknote" },
            { text: "Create a seamless post-production workflow with SOPs for dailies, editing, VFX handovers, and final delivery.", icon: "scissors" }
        ],
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
        icon: "monitor-play",
        whoIsItFor: ["OTT Platform Owners", "Heads of Content Operations", "Chief Technology Officers (CTOs)", "SRE & DevOps Leads"],
        sampleItems: [
            { text: "Ensure a flawless user experience with a robust content ingestion, transcoding, and QC workflow.", icon: "video" },
            { text: "Guarantee uptime during major events with a live streaming readiness and disaster recovery playbook.", icon: "zap" },
            { text: "Protect your platform with cybersecurity SOPs for DRM, access control, and vulnerability management.", icon: "shield" },
            { text: "Optimize performance with checklists for CDN configuration, cache management, and infrastructure monitoring.", icon: "cloud" },
            { text: "Stay compliant with a structured process for content rating, subtitling, and legal clearances.", icon: "file-check" },
            { text: "Improve user engagement with a data-driven process for personalization, recommendations, and analytics.", icon: "brain-circuit" }
        ],
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
        icon: "trophy",
        whoIsItFor: ["Sports Club GMs", "Stadium Managers", "Heads of Operations", "Gym Owners"],
        sampleItems: [
            { text: "Ensure venue safety with crowd management, ticketing, and emergency evacuation SOPs.", icon: "users" },
            { text: "Maintain world-class turf and pitches with a structured ground maintenance schedule.", icon: "sprout" },
            { text: "Prevent accidents and liability with daily inspections of gym and sports equipment.", icon: "dumbbell" },
            { text: "Guarantee a safe environment with fire safety audits and medical emergency response plans.", icon: "siren" },
            { text: "Protect members with robust hygiene protocols for pools, changing rooms, and F&B areas.", icon: "sparkles" },
            { text: "Manage your team effectively with checklists for staff training, scheduling, and performance.", icon: "clipboard-list" }
        ],
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
        icon: "popcorn",
        whoIsItFor: ["Cinema Owners", "Multiplex Managers", "Heads of Operations", "F&B Managers (Cinema)"],
        sampleItems: [
            { text: "Guarantee a perfect show with pre-screening checklists for projection, sound, and lighting.", icon: "projector" },
            { text: "Prevent fire tragedies with rigorous audits for emergency exits, fire alarms, and staff evacuation training.", icon: "siren" },
            { text: "Serve safe and quality food with F&B concession stand hygiene and inventory management SOPs.", icon: "utensils" },
            { text: "Improve profitability with checklists for ticketing, cash handling, and daily sales reconciliation.", icon: "ticket" },
            { text: "Enhance the guest experience with protocols for auditorium cleaning, seat maintenance, and restroom hygiene.", icon: "sparkles" },
            { text: "Manage your facility effectively with SOPs for housekeeping, security, and preventive maintenance.", icon: "building" }
        ],
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
        icon: "ferris-wheel",
        whoIsItFor: ["Theme Park GMs", "Heads of Operations", "Ride Safety Managers", "Security Directors"],
        sampleItems: [
            { text: "Prevent ride-related accidents with daily, weekly, and monthly ride inspection checklists based on manufacturer guidelines.", icon: "wrench" },
            { text: "Ensure guest safety with comprehensive crowd management, queuing, and access control SOPs.", icon: "users" },
            { text: "Be prepared for any crisis with emergency response plans for medical incidents, power failures, and ride stoppages.", icon: "siren" },
            { text: "Protect children with a robust Lost Child Protocol and designated safe zones.", icon: "helping-hand" },
            { text: "Maintain a safe and beautiful park with checklists for park-wide landscaping, housekeeping, and infrastructure safety.", icon: "recycle" },
            { text: "Guarantee food safety across all park outlets with FSSAI/HACCP-aligned hygiene and food handling checklists.", icon: "utensils" }
        ],
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
        icon: "warehouse",
        whoIsItFor: ["Warehouse Managers", "Logistics Heads", "Supply Chain Directors", "3PL Providers"],
        sampleItems: [
            { text: "Streamline your receiving process with checklists for inbound quality control and documentation.", icon: "clipboard-check" },
            { text: "Maximize space and efficiency with SOPs for stock-keeping, bin location management, and putaway.", icon: "package" },
            { text: "Ensure order accuracy and speed with a structured picking, packing, and dispatch process.", icon: "truck" },
            { text: "Maintain a safe workplace with checklists for Material Handling Equipment (MHE) safety and operator training.", icon: "hard-hat" },
            { text: "Protect your inventory with robust protocols for security, access control, and cycle counting.", icon: "shield" },
            { text: "Build a resilient supply chain with SOPs for vendor management and contingency planning.", icon: "link" }
        ],
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
        icon: "factory",
        badgeText: "Safety Critical",
        badgeVariant: "destructive",
        bestseller: true,
        whoIsItFor: ["Plant Heads", "EHS Officers", "Production Managers", "Maintenance Heads", "Quality Control Managers"],
        sampleItems: [
            { text: "Prevent fatal accidents with a legally compliant Lock-Out Tag-Out (LOTO) procedure for machine maintenance.", icon: "lock" },
            { text: "Ensure worker safety with a permit-to-work system for high-risk jobs like hot work and confined space entry.", icon: "file-check" },
            { text: "Boost productivity by tracking Overall Equipment Effectiveness (OEE) to minimize downtime.", icon: "trending-up" },
            { text: "Reduce defects and waste with an In-Process Quality Control (IPQC) system.", icon: "clipboard-check" },
            { text: "Mitigate fire and explosion risks with strict chemical handling and storage protocols.", icon: "siren" },
            { text: "Maintain compliance with a robust system for environmental monitoring and statutory reporting.", icon: "leaf" }
        ],
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
        icon: "pill",
        whoIsItFor: ["Pharmacists", "Pharmacy Owners", "Hospital Pharmacy Managers", "Retail Pharmacy Chains"],
        sampleItems: [
            { text: "Prevent dispensing errors with a robust prescription verification and double-check system.", icon: "file-check" },
            { text: "Ensure drug efficacy and safety with stringent cold chain management and temperature logging for vaccines and biologics.", icon: "thermometer" },
            { text: "Manage narcotics and high-risk drugs with a legally compliant inventory, storage, and dispensing log.", icon: "lock" },
            { text: "Maintain regulatory compliance with SOPs for drug procurement, batch tracking, and recall management.", icon: "barcode" },
            { text: "Improve patient counseling with checklists for providing clear instructions on medication usage and side effects.", icon: "user-check" },
            { text: "Run a clean and professional pharmacy with daily checklists for hygiene, organization, and stock arrangement.", icon: "sparkles" }
        ],
        checklists: []
    },
    {
        id: 'bakery_confectionery_pack',
        title: "Bakery & Confectionery Operations Pack",
        priceINR: 5999,
        priceUSD: 79,
        competitorPriceUSD: 599,
        paymentId: 'pl_RaWEBHhFLQENxC',
        lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d863f69b-8919-4115-b778-831d17d120fb',
        category: "Food & Beverage",
        description: "A specialized toolkit for bakery and confectionery owners to ensure product consistency, food safety, and operational efficiency.",
        icon: "cake-slice",
        badgeText: "Special Offer",
        badgeVariant: "accent",
        whoIsItFor: ["Bakery Owners", "Head Bakers", "Pastry Chefs", "Cafe Owners with in-house baking"],
        sampleItems: [
            { text: "Achieve perfect results every time with recipe scaling and dough management checklists.", icon: "clipboard-list" },
            { text: "Ensure food safety with HACCP-aligned protocols for ingredient handling and allergen control.", icon: "shield-check" },
            { text: "Maintain equipment precision with SOPs for oven calibration and mixer maintenance.", icon: "wrench" },
            { text: "Maximize freshness and minimize waste with a structured display and stock rotation system.", icon: "recycle" },
            { text: "Guarantee compliance with FSSAI regulations for packaging, labeling, and expiry dates.", icon: "file-check" },
            { text: "Streamline your custom order process from client briefing to final delivery.", icon: "package" }
        ],
        checklists: []
    },
    {
        id: 'animal_shelter_pack',
        title: "Animal Shelter Operations Pack",
        priceINR: 0,
        priceUSD: 0,
        paymentId: '', // No payment ID for free packs
        lemonSqueezyUrl: '', // No payment URL for free packs
        listId: 7,
        category: "Social Cause",
        description: "A comprehensive toolkit for animal shelters and NGOs to ensure animal welfare, disease prevention, and operational efficiency.",
        icon: "paw-print",
        badgeText: "Free Download",
        badgeVariant: "accent",
        whoIsItFor: ["Animal Shelter Managers", "NGO Founders", "Veterinarians", "Volunteer Coordinators"],
        sampleItems: [
            { text: "Prevent disease outbreaks with rigorous cleaning, disinfection, and quarantine protocols.", icon: "sparkles" },
            { text: "Ensure every animal's health with checklists for daily feeding, medication administration, and health monitoring.", icon: "stethoscope" },
            { text: "Manage your population responsibly with SOPs for intake, vaccination, and spay/neuter programs.", icon: "syringe" },
            { text: "Create a safe environment for animals and people with protocols for temperament testing and safe handling.", icon: "users" },
            { text: "Increase adoptions with a structured process for counseling, home checks, and post-adoption follow-up.", icon: "home" },
            { text: "Streamline your operations with checklists for volunteer management, inventory, and fundraising events.", icon: "clipboard-list" }
        ],
        checklists: [
             {
                title: "Daily Cleaning & Disinfection",
                department: "Operations",
                frequency: "Daily",
                role: "Shelter Staff",
                summary: "Ensures a sanitary environment to prevent disease transmission among animals.",
                icon: "spray-can",
                tasks: [
                    { id: "AC-DC-01", description: "Remove all feces, urine, and soiled bedding from every enclosure.", priority: "High", riskLevel: "High", consequence: "Disease outbreak (Parvo, etc.), unpleasant odors, regulatory action.", proof: "Supervisor sign-off on cleaning log.", location: "All Enclosures" },
                    { id: "AC-DC-02", description: "Scrub all food and water bowls with veterinary-grade disinfectant.", priority: "High", riskLevel: "Medium", consequence: "Spread of oral infections, gastrointestinal illness.", proof: "Visual inspection by supervisor.", location: "Kitchen/Cleaning Area" },
                    { id: "AC-DC-03", description: "Disinfect all enclosure surfaces (floors, walls, gates) with approved sanitizer.", priority: "High", riskLevel: "High", consequence: "High risk of communicable disease spread.", proof: "Completed cleaning checklist for each zone.", location: "All Enclosures" },
                    { id: "AC-DC-04", description: "Clean and disinfect all common play areas and meet-and-greet rooms.", priority: "Medium", riskLevel: "Medium", consequence: "Disease transmission between animal groups.", proof: "Logbook entry for common areas.", location: "Play Areas" },
                    { id: "AC-DC-05", description: "Empty and disinfect all waste bins.", priority: "Low", riskLevel: "Low", consequence: "Pest attraction, odor issues.", proof: "Visual confirmation.", location: "Waste Disposal Area" }
                ]
            },
            {
                title: "Animal Intake & Quarantine Protocol",
                department: "Medical",
                frequency: "Per new animal arrival",
                role: "Intake Coordinator / Vet Tech",
                summary: "Safely process new animals, assess their health, and prevent the introduction of diseases to the general population.",
                icon: "shield-check",
                tasks: [
                    { id: "AI-IQ-01", description: "Photograph and log new animal's details (species, breed, age, color, markings).", priority: "High", riskLevel: "Low", consequence: "Inability to track animal, lost/found matching failure.", proof: "Entry in shelter management software with photo.", location: "Intake Room" },
                    { id: "AI-IQ-02", description: "Scan for microchip and check against national databases.", priority: "High", riskLevel: "Low", consequence: "Failure to reunite a lost pet with its owner.", proof: "Microchip scan log.", location: "Intake Room" },
                    { id: "AI-IQ-03", description: "Perform initial health screening (check for wounds, parasites, signs of illness).", priority: "High", riskLevel: "High", consequence: "Undiagnosed injury/illness could worsen or spread.", proof: "Completed intake health assessment form.", location: "Intake Room" },
                    { id: "AI-IQ-04", description: "Administer initial vaccinations and deworming as per shelter protocol.", priority: "High", riskLevel: "High", consequence: "Vulnerability to preventable diseases like distemper or rabies.", proof: "Medical record updated with administered treatments.", location: "Intake Room" },
                    { id: "AI-IQ-05", description: "Place new animal in a designated quarantine enclosure for the required period (e.g., 7-14 days).", priority: "High", riskLevel: "High", consequence: "Introduction of contagious disease to the general population.", proof: "Quarantine placement logged in shelter software.", location: "Quarantine Zone" }
                ]
            },
            {
                title: "Daily Feeding & Health Monitoring",
                department: "Animal Care",
                frequency: "Daily (Twice)",
                role: "Animal Care Attendant",
                summary: "Ensures all animals receive proper nutrition and are monitored for early signs of illness or distress.",
                icon: "heart-pulse",
                tasks: [
                    { id: "AH-DF-01", description: "Feed each animal the correct type and amount of food according to their specific dietary plan.", priority: "High", riskLevel: "Medium", consequence: "Malnutrition, obesity, allergic reactions, medical complications.", proof: "Feeding chart checked off for each animal.", location: "All Enclosures" },
                    { id: "AH-DF-02", description: "Provide fresh, clean water to every animal.", priority: "High", riskLevel: "Medium", consequence: "Dehydration, which can quickly become a medical emergency.", proof: "Visual inspection during feeding rounds.", location: "All Enclosures" },
                    { id: "AH-DF-03", description: "Observe each animal during feeding for changes in appetite, behavior, or stool quality.", priority: "High", riskLevel: "High", consequence: "Missed early signs of illness, leading to delayed treatment.", proof: "Daily observation log completed for each animal.", location: "All Enclosures" },
                    { id: "AH-DF-04", description: "Report any abnormalities (lethargy, vomiting, coughing, etc.) to the vet team immediately.", priority: "High", riskLevel: "High", consequence: "A sick animal's condition could deteriorate rapidly without intervention.", proof: "Entry in medical communication log or direct report.", location: "All Enclosures" }
                ]
            },
                {
                title: "Medication Administration",
                department: "Medical",
                frequency: "As per prescription",
                role: "Vet Tech / Trained Staff",
                summary: "Ensures animals receive their prescribed medications correctly and on time.",
                icon: "pill",
                tasks: [
                    { id: "AM-MA-01", description: "Verify patient identity, medication, dosage, and route before administration (The '5 Rights').", priority: "High", riskLevel: "High", consequence: "Overdose, underdose, or wrong medication can cause harm or death.", proof: "Medication Administration Record (MAR) initialed after each dose.", location: "Treatment Area / Enclosures" },
                    { id: "AM-MA-02", description: "Document the time and date of every medication given in the animal's medical record.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate medical history, risk of double-dosing.", proof: "Signed MAR sheet.", location: "Medical Records" },
                    { id: "AM-MA-03", description: "Observe animal post-administration for any adverse reactions.", priority: "Medium", riskLevel: "High", consequence: "Untreated allergic reaction or side effect could be fatal.", proof: "Note in daily observation log.", location: "Enclosures" },
                    { id: "AM-MA-04", description: "Securely store all medications, especially controlled substances, in a locked cabinet.", priority: "High", riskLevel: "High", consequence: "Theft, misuse, accidental ingestion, regulatory violations.", proof: "Weekly controlled substance inventory log.", location: "Pharmacy/Storage" }
                ]
            },
            {
                title: "Adoption Counseling & Process",
                department: "Adoptions",
                frequency: "Per adoption",
                role: "Adoption Counselor",
                summary: "Ensures responsible and sustainable adoptions by matching the right animal with the right family.",
                icon: "home",
                tasks: [
                    { id: "AP-AC-01", description: "Conduct an adoption interview to understand the potential adopter's lifestyle, home environment, and expectations.", priority: "High", riskLevel: "Medium", consequence: "Mismatched adoption leading to high return rates.", proof: "Completed adoption application/interview form.", location: "Adoption Center" },
                    { id: "AP-AC-02", description: "Provide full disclosure of the animal's history, medical needs, and known behavioral traits.", priority: "High", riskLevel: "Medium", consequence: "Adopter feels misled; animal may be returned due to unexpected issues.", proof: "Counselor's notes in adoption file.", location: "Adoption Center" },
                    { id: "AP-AC-03", description: "Facilitate a supervised meet-and-greet between the animal and all family members (including other pets).", priority: "High", riskLevel: "Medium", consequence: "Conflicts between pets or family members after adoption.", proof: "Check-off on adoption process form.", location: "Meet-and-Greet Area" },
                    { id: "AP-AC-04", description: "Verify adopter's identity and address (e.g., via ID and utility bill).", priority: "Medium", riskLevel: "Low", consequence: "Inability to follow up post-adoption; potential for fraudulent adoption.", proof: "Copies of ID/address proof in adoption file.", location: "Adoption Center" },
                    { id: "AP-AC-05", description: "Complete all adoption paperwork, including transfer of ownership and microchip registration.", priority: "High", riskLevel: "Low", consequence: "Legal ambiguity over ownership.", proof: "Signed adoption contract and microchip form.", location: "Adoption Center" }
                ]
            },
            {
                title: "Volunteer Management",
                department: "Administration",
                frequency: "Ongoing",
                role: "Volunteer Coordinator",
                summary: "Effectively onboard, train, and manage volunteers to support shelter operations.",
                icon: "users",
                tasks: [
                    { id: "AV-VM-01", description: "Conduct orientation for all new volunteers covering shelter policies, safety procedures, and animal handling basics.", priority: "High", riskLevel: "Medium", consequence: "Volunteers may unknowingly violate safety rules or handle animals incorrectly.", proof: "Signed orientation completion form.", location: "Training Room" },
                    { id: "AV-VM-02", description: "Maintain an up-to-date volunteer schedule to ensure all shifts are covered.", priority: "Medium", riskLevel: "Low", consequence: "Staffing shortages leading to compromised animal care.", proof: "Published weekly schedule.", location: "Office" },
                    { id: "AV-VM-03", description: "Provide clear task lists for different volunteer roles (e.g., dog walking, cat socialization, cleaning).", priority: "Medium", riskLevel: "Low", consequence: "Inefficient use of volunteer time, confusion about duties.", proof: "Posted task lists in relevant areas.", location: "All Areas" },
                    { id: "AV-VM-04", description: "Ensure all volunteers sign in and out for every shift.", priority: "Low", riskLevel: "Low", consequence: "Inaccurate tracking of volunteer hours, security risk.", proof: "Daily sign-in/out sheet.", location: "Reception" }
                ]
            }
        ]
    }
];

const allPacks: PremiumPack[] = [
    franchise_operations_pack,
    hotels_and_resorts,
    ...otherPacks,
];

const master_access_pack: PremiumPack = {
    id: 'master_access',
    title: "Master Access: All-in-One Operations Toolkit",
    priceINR: 29999,
    priceUSD: 399,
    competitorPriceUSD: 2999,
    paymentId: 'pl_RaWPoGkH6vA8wS',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f528d9c2-5e6a-4d7a-b73a-4537b01d1c95',
    category: "Master Access",
    description: "Get lifetime access to every current and future checklist pack in the MoreMeets library. The ultimate toolkit for enterprise-level compliance and operational excellence.",
    icon: "library",
    badgeText: "Best Value",
    badgeVariant: "accent",
    whoIsItFor: ["COOs", "VPs of Operations", "Enterprise Leaders", "Consultants", "Serial Entrepreneurs"],
    sampleItems: [
        { text: "Gain access to all 20+ industry packs, covering hospitality, retail, manufacturing, healthcare, and more.", icon: "zap" },
        { text: "Receive every future checklist pack we release, automatically and for free.", icon: "trending-up" },
        { text: "Standardize operations across a diverse portfolio of businesses with a single, unified system.", icon: "briefcase-business" },
        { text: "A one-time purchase for a lifetime of operational knowledge and compliance.", icon: "shield-check" }
    ],
    checklists: allPacks.flatMap(pack => {
        if (pack.id === 'master_access' || pack.id === 'animal_shelter_pack') return [];
        return pack.checklists.map(checklist => ({
            ...checklist,
            tasks: checklist.tasks.map(task => ({
                ...task,
                department: checklist.department,
                role: checklist.role,
                frequency: checklist.frequency
            }))
        }))
    }),
};


export const premiumPacks: PremiumPack[] = [
    ...allPacks,
    master_access_pack,
];

    
