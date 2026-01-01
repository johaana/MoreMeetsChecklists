
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
                { id: "FO-08", description: "Pre-Opening Audit: Final walkthrough to ensure store is 100% brand compliant and ready for opening.", priority: "High", riskLevel: "High", consequence: "Negative first impression, operational failures.", proof: "Completed pre-opening audit form.", location: "Franchise Location" },
                { id: "FO-09", description: "Staffing: Key positions (e.g., Store Manager) hired and trained.", priority: "High", riskLevel: "Medium", consequence: "Lack of leadership on opening day.", proof: "Employment contracts and training records.", location: "HR Department" },
                { id: "FO-10", description: "Licensing & Permits: All local operating licenses and health permits secured.", priority: "High", riskLevel: "High", consequence: "Forced closure, legal penalties.", proof: "Copies of all permits and licenses.", location: "Franchise Location" },
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
                { id: "BSA-06", description: "Hygiene & Cleanliness: Restrooms, kitchen (if any), and seating areas are spotless.", priority: "High", riskLevel: "High", consequence: "Health code violations, customer disgust.", proof: "Hygiene audit score.", location: "All Areas" },
                { id: "BSA-07", description: "Promotional Compliance: Current promotions are correctly displayed and executed at POS.", priority: "Medium", riskLevel: "Medium", consequence: "Customer confusion, legal issues with advertising.", proof: "Review of POS system and promotional signage.", location: "Point of Sale" },
                { id: "BSA-08", description: "Service Speed & Friendliness: Staff follows greeting, ordering, and closing scripts.", priority: "High", riskLevel: "Medium", consequence: "Poor customer reviews, reduced repeat business.", proof: "Mystery shopper report or direct observation.", location: "Point of Sale" }
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
                { id: "SCI-04", description: "Review wastage logs for patterns and identify areas for improvement.", priority: "Medium", riskLevel: "Low", consequence: "Lost profit.", proof: "Wastage log analysis.", location: "Office" },
                { id: "SCI-05", description: "Ensure ordering pars are set correctly based on sales velocity.", priority: "Medium", riskLevel: "Medium", consequence: "Stockouts of popular items or overstocking of slow movers.", proof: "Review of par levels in ordering system vs. sales data.", location: "Office" },
                { id: "SCI-06", description: "Check for expired stock in all storage and display areas.", priority: "High", riskLevel: "High", consequence: "Health risk, customer complaints, legal action.", proof: "Physical check of a sample of products.", location: "Stock Room/Display Areas" },
                { id: "SCI-07", description: "Review supplier delivery logs for timeliness and accuracy.", priority: "Low", riskLevel: "Low", consequence: "Operational disruptions due to late deliveries.", proof: "Delivery logbook review.", location: "Receiving Area" },
                { id: "SCI-08", description: "Confirm proper handling and storage of returned or damaged goods.", priority: "Medium", riskLevel: "Low", consequence: "Inaccurate inventory, loss of credit from supplier.", proof: "Inspection of returns area and logs.", location: "Returns Area" },
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
                { id: "CSE-05", description: "Closing: Was the customer thanked and given a sincere farewell?", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunity to build loyalty.", proof: "Mystery shopper report.", location: "Exit" },
                { id: "CSE-06", description: "Product Knowledge: Could staff answer basic questions about the products/services?", priority: "Medium", riskLevel: "Medium", consequence: "Lack of confidence from customer, lost sales.", proof: "Mystery shopper Q&A section.", location: "Point of Sale" },
                { id: "CSE-07", description: "Wait Times: Was the queue time within the brand's acceptable limit?", priority: "High", riskLevel: "Medium", consequence: "Customer abandonment, negative reviews.", proof: "Timestamped observations in mystery shopper report.", location: "Queue Area" },
                { id: "CSE-08", description: "Digital Experience: If applicable, was the in-store digital kiosk/app experience smooth?", priority: "Medium", riskLevel: "Medium", consequence: "Frustration with technology, channel abandonment.", proof: "Mystery shopper report on digital interaction.", location: "Kiosk/App" },
            ]
        },
        {
            title: "Monthly Financial & Performance Review",
            department: "Finance",
            frequency: "Monthly",
            role: "Franchisor Analyst",
            summary: "A review of the franchisee's financial health, sales performance, and royalty payments.",
            icon: "dollar-sign",
            tasks: [
                { id: "FPR-01", description: "Royalty & Ad Fund: Verify royalty and marketing fund payments are accurate and paid on time.", priority: "High", riskLevel: "High", consequence: "Revenue loss for franchisor, breach of contract.", proof: "Bank statements and franchise agreement.", location: "Finance Dept." },
                { id: "FPR-02", description: "Sales Reporting: Ensure daily/weekly sales reports have been submitted accurately.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate data for network-wide planning.", proof: "POS sales reports vs. submitted reports.", location: "Finance Dept." },
                { id: "FPR-03", description: "P&L Statement Review: Review franchisee's monthly Profit & Loss statement for signs of financial distress.", priority: "High", riskLevel: "High", consequence: "Franchisee failure, loss of future royalties.", proof: "Franchisee-submitted P&L statement.", location: "Finance Dept." },
                { id: "FPR-04", description: "Cost of Goods Sold (COGS) Analysis: Compare COGS against brand benchmark to identify purchasing or wastage issues.", priority: "Medium", riskLevel: "Medium", consequence: "Reduced franchisee profitability.", proof: "P&L statement and supplier invoices.", location: "Finance Dept." },
                { id: "FPR-05", description: "Labor Cost Analysis: Compare labor costs as a percentage of sales against benchmark.", priority: "Medium", riskLevel: "Low", consequence: "Inefficient staffing, reduced profitability.", proof: "P&L statement and staff rosters.", location: "Finance Dept." },
                { id: "FPR-06", description: "Local Marketing Spend: Verify franchisee is meeting local marketing spend requirements as per agreement.", priority: "Low", riskLevel: "Low", consequence: "Underperforming location due to lack of local awareness.", proof: "Marketing invoices and receipts.", location: "Marketing Dept." },
                { id: "FPR-07", description: "Review of Outstanding Invoices: Check for any overdue payments to the franchisor or approved suppliers.", priority: "High", riskLevel: "Medium", consequence: "Cash flow issues, supplier relationship damage.", proof: "Accounts receivable aging report.", location: "Finance Dept." },
                { id: "FPR-08", description: "Compliance with Tax Filings: Confirm all necessary tax filings (GST, etc.) are up to date.", priority: "High", riskLevel: "High", consequence: "Legal and financial penalties for both franchisee and potentially franchisor.", proof: "Copies of tax filing receipts.", location: "Finance Dept." }
            ]
        },
        {
            title: "Health, Safety & Environment (HSE) Audit",
            department: "Compliance",
            frequency: "Quarterly",
            role: "HSE Officer",
            summary: "Ensures the franchise location is compliant with all local health, safety, and environmental regulations.",
            icon: "shield-check",
            tasks: [
                { id: "HSE-01", description: "Fire Safety: All fire extinguishers and alarms are inspected, tagged, and accessible.", priority: "High", riskLevel: "High", consequence: "Catastrophic fire risk, loss of life, legal action.", proof: "Fire safety logbook, inspection tags.", location: "All Areas" },
                { id: "HSE-02", description: "First Aid: First aid kits are fully stocked and accessible.", priority: "High", riskLevel: "Medium", consequence: "Inability to treat minor injuries, worsening of medical situations.", proof: "First aid kit checklist.", location: "Staff Area" },
                { id: "HSE-03", description: "Slip, Trip & Fall Hazards: All floors are clean, dry, and free of obstructions.", priority: "High", riskLevel: "Medium", consequence: "Customer or employee injuries, lawsuits.", proof: "Dated photos of floor areas.", location: "All Areas" },
                { id: "HSE-04", description: "Electrical Safety: All wiring is secure, no overloaded outlets, and equipment is PAT tested.", priority: "High", riskLevel: "High", consequence: "Risk of electrical shock or fire.", proof: "PAT testing records, visual inspection log.", location: "All Areas" },
                { id: "HSE-05", description: "Waste Management: Waste is segregated and disposed of according to local regulations.", priority: "Medium", riskLevel: "Medium", consequence: "Fines, environmental damage.", proof: "Waste disposal logs and contractor receipts.", location: "Waste Area" },
                { id: "HSE-06", description: "Chemical Handling: All cleaning chemicals are correctly labeled and stored in a designated, secure area.", priority: "Medium", riskLevel: "High", consequence: "Chemical burns, poisoning, environmental contamination.", proof: "Photo of chemical storage area.", location: "Storage" },
                { id: "HSE-07", description: "Emergency Exits: All emergency exit lighting and signage is functional and visible.", priority: "High", riskLevel: "High", consequence: "Failure to evacuate safely during an emergency.", proof: "Emergency light test log.", location: "All Areas" },
                { id: "HSE-08", description: "Staff Training: Staff have received basic HSE training, including fire evacuation procedures.", priority: "High", riskLevel: "Medium", consequence: "Panic and incorrect response during an emergency.", proof: "Staff training records.", location: "Office" }
            ]
        },
        {
            title: "IT & Cybersecurity Audit",
            department: "IT",
            frequency: "Quarterly",
            role: "IT Manager",
            summary: "Verifies that the franchisee's IT systems are secure, compliant, and protected against data breaches.",
            icon: "lock",
            tasks: [
                { id: "IT-01", description: "POS Security: Point-of-Sale system software is up-to-date and has strong access controls.", priority: "High", riskLevel: "High", consequence: "Financial data theft, PCI-DSS violations.", proof: "POS software version and user access list.", location: "Point of Sale" },
                { id: "IT-02", description: "Network Security: Wi-Fi network is secure, with separate networks for guest and corporate use.", priority: "High", riskLevel: "High", consequence: "Unauthorized access to corporate network, data breaches.", proof: "Network configuration screenshot.", location: "IT Room" },
                { id: "IT-03", description: "Data Backup: All critical data (sales, customer info) is backed up daily to a secure, off-site location.", priority: "High", riskLevel: "High", consequence: "Total loss of business data in case of hardware failure or ransomware.", proof: "Backup logs from the last 7 days.", location: "Office" },
                { id: "IT-04", description: "Antivirus & Malware: Antivirus software is installed and up-to-date on all computers.", priority: "High", riskLevel: "Medium", consequence: "Ransomware infection, system downtime.", proof: "Antivirus console status page.", location: "Office" },
                { id: "IT-05", description: "Password Policy: All staff are using strong, unique passwords and are required to change them periodically.", priority: "Medium", riskLevel: "Medium", consequence: "Account compromise through weak passwords.", proof: "Review of Active Directory password policy settings.", location: "IT Room" },
                { id: "IT-06", description: "CCTV System: CCTV cameras are functional, recording, and have adequate storage.", priority: "High", riskLevel: "Medium", consequence: "Inability to provide evidence for theft or incidents.", proof: "Live view and playback test from CCTV recorder.", location: "All Areas" },
                { id: "IT-07", description: "Physical Security: Server racks and network equipment are in a locked, access-controlled room.", priority: "Medium", riskLevel: "Medium", consequence: "Physical tampering or theft of equipment.", proof: "Photo of locked IT rack/room.", location: "IT Room" },
                { id: "IT-08", description: "Employee Offboarding: Access for former employees is immediately revoked upon termination.", priority: "High", riskLevel: "High", consequence: "Unauthorized access by disgruntled ex-employees.", proof: "Cross-reference termination list with active user accounts.", location: "HR/IT" }
            ]
        },
        {
            title: "Lease & Agreement Compliance",
            department: "Legal / Real Estate",
            frequency: "Annually",
            role: "Compliance Officer",
            summary: "Ensures the franchisee is compliant with the terms of their lease and franchise agreement.",
            icon: "file-text",
            tasks: [
                { id: "LAC-01", description: "Verify that insurance coverage (property, liability) meets the minimums required by the franchise agreement.", priority: "High", riskLevel: "High", consequence: "Uncovered losses, legal liability for franchisor.", proof: "Copy of current insurance certificates.", location: "Office" },
                { id: "LAC-02", description: "Confirm business operating hours are in compliance with lease agreement and local ordinances.", priority: "Low", riskLevel: "Low", consequence: "Lease violation notices.", proof: "Posted hours vs. lease agreement.", location: "Storefront" },
                { id: "LAC-03", description: "Check for any unauthorized alterations to the premises.", priority: "Medium", riskLevel: "Medium", consequence: "Lease violation, cost of restoration.", proof: "Physical inspection against original approved plans.", location: "All Areas" },
                { id: "LAC-04", description: "Ensure all signage is in compliance with both brand standards and landlord's criteria.", priority: "Medium", riskLevel: "Low", consequence: "Fines from landlord or authorities.", proof: "Photo of all exterior signage.", location: "Exterior" },
                { id: "LAC-05", description: "Review any sub-leasing arrangements for compliance with the master lease.", priority: "High", riskLevel: "Medium", consequence: "Breach of master lease, potential eviction.", proof: "Copies of any sub-lease agreements.", location: "Office" },
                { id: "LAC-06", description: "Confirm renewal deadlines for lease and franchise agreement are noted and planned for.", priority: "High", riskLevel: "High", consequence: "Accidental lapse of lease or franchise rights.", proof: "Review of key dates in agreements.", location: "Office" }
            ]
        }
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
                { id: "HK-DR-06", description: "Check and clear all housekeeping service corridors of trays and linen.", priority: "Low", riskLevel: "Low", consequence: "Fire hazard, untidy appearance.", proof: "Visual check during rounds.", location: "Service Corridors" },
                { id: "HK-DR-07", description: "Report any maintenance issues (e.g., dripping faucet, faulty TV) found during cleaning to Engineering.", priority: "Medium", riskLevel: "Medium", consequence: "Guest complaints, worsening of maintenance problems.", proof: "Copy of maintenance request ticket/log.", location: "Guest Rooms" },
                { id: "HK-DR-08", description: "Ensure all public areas (lobby, hallways, restrooms) are cleaned as per schedule.", priority: "High", riskLevel: "Low", consequence: "Poor first impression, negative guest perception of cleanliness.", proof: "Public area cleaning log.", location: "Public Areas" },
                { id: "HK-DR-09", description: "Verify pest control measures in back-of-house areas are effective.", priority: "Medium", riskLevel: "Medium", consequence: "Pest infestation spreading to guest areas.", proof: "Pest control logbook review.", location: "Back of House" },
                { id: "HK-DR-10", description: "End-of-day reconciliation of room status between Housekeeping and Front Office systems.", priority: "High", riskLevel: "Medium", consequence: "Incorrect room assignments, guest walk-ins being turned away.", proof: "Signed discrepancy report.", location: "Housekeeping/Front Office" }
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
                { id: "FO-SC-05", description: "Ensure all key cards are accounted for and programmed correctly.", priority: "Medium", riskLevel: "Medium", consequence: "Guest security risk, unauthorized access.", proof: "Key card inventory count.", location: "Front Desk" },
                { id: "FO-SC-06", description: "Review and respond to new emails in the general reservations/front office inbox.", priority: "Medium", riskLevel: "Low", consequence: "Delayed response to guest inquiries.", proof: "Email inbox screenshot or log.", location: "Front Office" },
                { id: "FO-SC-07", description: "Check availability and status of meeting rooms and banquet halls.", priority: "Low", riskLevel: "Low", consequence: "Double bookings, incorrect setup for events.", proof: "Review of event management software.", location: "Front Office" },
                { id: "FO-SC-08", description: "Print and prepare registration cards for all expected arrivals.", priority: "Medium", riskLevel: "Low", consequence: "Slow check-in process.", proof: "Stack of prepared registration cards.", location: "Front Desk" },
                { id: "FO-SC-09", description: "Process any pending no-show charges from the previous night.", priority: "Medium", riskLevel: "Medium", consequence: "Loss of revenue from no-shows.", proof: "PMS no-show report.", location: "Front Desk" },
                { id: "FO-SC-10", description: "Ensure the lobby and front desk area are clean, tidy, and well-presented.", priority: "High", riskLevel: "Low", consequence: "Negative first impression on guests.", proof: "Visual inspection by shift leader.", location: "Lobby Area" }
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
                { id: "FB-KO-05", description: "Confirm calibration of food thermometers using the ice-point or boiling-point method.", priority: "Medium", riskLevel: "High", consequence: "Inaccurate temperature readings leading to undercooked food.", proof: "Thermometer Calibration Log.", location: "Kitchen" },
                { id: "FB-KO-06", description: "Ensure raw and cooked foods are stored separately to prevent cross-contamination.", priority: "High", riskLevel: "High", consequence: "Serious food poisoning outbreaks.", proof: "Photo of refrigerator storage arrangement.", location: "Cold Storage" },
                { id: "FB-KO-07", description: "Verify that all cleaning chemicals are stored correctly and away from food areas.", priority: "High", riskLevel: "Medium", consequence: "Risk of chemical contamination of food.", proof: "Photo of chemical storage cabinet.", location: "Chemical Store" },
                { id: "FB-KO-08", description: "Check that waste bins are clean, lined, and covered.", priority: "Medium", riskLevel: "Low", consequence: "Pest attraction and odor issues.", proof: "Visual inspection.", location: "Waste Area" },
                { id: "FB-KO-09", description: "Inspect grease traps to ensure they are not overflowing.", priority: "Medium", riskLevel: "Medium", consequence: "Drainage issues, fire hazard, pest attraction.", proof: "Grease trap inspection log.", location: "Kitchen Drains" },
                { id: "FB-KO-10", description: "Review raw material delivery log for any items received outside of safe temperature ranges.", priority: "High", riskLevel: "High", consequence: "Accepting compromised food into inventory.", proof: "Receiving log with temperature records.", location: "Receiving Area" }
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
                { id: "SEC-FS-05", description: "Verify that all fire evacuation plans are clearly posted and legible in guest rooms and common areas.", priority: "Medium", riskLevel: "Low", consequence: "Guest confusion during an evacuation.", proof: "Photo audit of posted plans.", location: "Guest Rooms, Lobbies" },
                { id: "SEC-FS-06", description: "Check sprinkler heads for any obstructions (e.g., decorations, stored items).", priority: "High", riskLevel: "High", consequence: "Sprinkler system failure during a fire.", proof: "Visual inspection.", location: "Guest Rooms, Common Areas" },
                { id: "SEC-FS-07", description: "Ensure kitchen fire suppression system (Ansul) is inspected and certified.", priority: "High", riskLevel: "High", consequence: "Failure to contain a kitchen fire, the most common type of hotel fire.", proof: "Certification tag on system.", location: "Kitchen" },
                { id: "SEC-FS-08", description: "Review log of last fire drill and note any corrective actions needed.", priority: "Medium", riskLevel: "Medium", consequence: "Repeating the same mistakes in a real emergency.", proof: "Fire drill report.", location: "Security Office" },
                { id: "SEC-FS-09", description: "Check that access to fire pump and riser rooms is clear.", priority: "High", riskLevel: "High", consequence: "Fire department cannot access critical equipment.", proof: "Photo of clear access path.", location: "MEP Rooms" },
                { id: "SEC-FS-10", description: "Verify that staff in key roles (e.g., Front Office, Security) are trained on their specific evacuation duties.", priority: "High", riskLevel: "Medium", consequence: "Disorganized evacuation leading to panic.", proof: "Review of training records.", location: "HR/Training" }
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
                { id: "ENG-PM-05", description: "Check water pressure and test booster pumps.", priority: "Medium", riskLevel: "Low", consequence: "Poor water pressure in guest rooms, guest complaints.", proof: "Pump performance log.", location: "Pump Rooms" },
                { id: "ENG-PM-06", description: "Inspect elevators for smooth operation, safety features (e.g., phone), and valid certification.", priority: "High", riskLevel: "High", consequence: "Elevator entrapment, guest injury, legal non-compliance.", proof: "Elevator maintenance log and posted certificate.", location: "Elevator Machine Rooms" },
                { id: "ENG-PM-07", description: "Check boiler and hot water systems for leaks, pressure, and temperature.", priority: "High", riskLevel: "Medium", consequence: "No hot water for guests, potential for scalding or explosion.", proof: "Boiler room logbook.", location: "Boiler Room" },
                { id: "ENG-PM-08", description: "Inspect roof for leaks, damage, and clear drainage after any heavy rains.", priority: "Medium", riskLevel: "Medium", consequence: "Water damage to top-floor rooms and building structure.", proof: "Roof inspection report with photos.", location: "Rooftop" },
                { id: "ENG-PM-09", description: "Verify water treatment plant (WTP/STP) is functioning correctly and chemical levels are appropriate.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental compliance issues, unsafe water.", proof: "WTP/STP logbook.", location: "Treatment Plant Area" },
                { id: "ENG-PM-10", description: "Review energy consumption data against benchmarks to identify anomalies.", priority: "Low", riskLevel: "Low", consequence: "Wasted energy, high utility costs.", proof: "Monthly utility bill analysis.", location: "Chief Engineer's Office" }
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
                { id: "REC-PS-05", description: "Ensure pool deck is clean, free of slip hazards, and furniture is in good repair.", priority: "Medium", riskLevel: "Medium", consequence: "Slip and fall injuries, guest lawsuits.", proof: "Hourly attendant rounds log.", location: "Pool Deck" },
                { id: "REC-PS-06", description: "Confirm emergency phone or alarm at the poolside is functional.", priority: "High", riskLevel: "High", consequence: "Delayed response in a medical emergency.", proof: "Daily test call log.", location: "Poolside" },
                { id: "REC-PS-07", description: "Check spa/hot tub temperatures to ensure they are within safe limits (typically max 104°F/40°C).", priority: "High", riskLevel: "High", consequence: "Risk of hyperthermia, health risks for certain guests.", proof: "Temperature log.", location: "Spa Area" },
                { id: "REC-PS-08", description: "Ensure gate to pool area is self-closing and self-latching.", priority: "High", riskLevel: "High", consequence: "Unsupervised access by children, leading to drowning risk.", proof: "Video of gate function test.", location: "Pool Entrance" },
                { id: "REC-PS-09", description: "Verify chemical storage area is locked, secure, and well-ventilated.", priority: "High", riskLevel: "Medium", consequence: "Chemical spills, unauthorized access, toxic fumes.", proof: "Photo of secured chemical store.", location: "Chemical Storage" },
                { id: "REC-PS-10", description: "Log all incidents, no matter how minor, in the pool incident report book.", priority: "Medium", riskLevel: "Medium", consequence: "Failure to identify recurring safety issues, legal liability.", proof: "Incident report book.", location: "Pool Office" }
            ]
        },
        {
            title: "Security - Daily Shift Briefing & Patrols",
            department: "Security",
            frequency: "Per Shift",
            role: "Security Supervisor",
            summary: "Ensures the security team is briefed, patrols are conducted, and all incidents are properly logged.",
            icon: "shield",
            tasks: [
                { id: "SEC-DB-01", description: "Conduct shift briefing covering previous shift's incidents, VIP movements, and areas of concern.", priority: "High", riskLevel: "Low", consequence: "Lack of situational awareness for incoming shift.", proof: "Shift briefing log.", location: "Security Office" },
                { id: "SEC-DB-02", description: "Verify all security personnel are present, in proper uniform, and equipped (radio, flashlight).", priority: "Medium", riskLevel: "Low", consequence: "Understaffing, unprofessional appearance.", proof: "Duty roster sign-in sheet.", location: "Security Office" },
                { id: "SEC-DB-03", description: "Review CCTV footage for any suspicious activity from the last 24 hours.", priority: "Medium", riskLevel: "Medium", consequence: "Missed security breaches or incidents.", proof: "CCTV review log.", location: "CCTV Control Room" },
                { id: "SEC-DB-04", description: "Ensure all security patrols are completed as per the designated routes and schedule.", priority: "High", riskLevel: "Medium", consequence: "Gaps in security coverage, increased risk of intrusion.", proof: "Patrol log or digital patrol tracking system report.", location: "All Patrol Routes" },
                { id: "SEC-DB-05", description: "Log all incidents, observations, and actions taken during the shift in the security logbook.", priority: "High", riskLevel: "High", consequence: "Poor documentation for investigations, legal liability.", proof: "Security logbook entries.", location: "Security Office" },
                { id: "SEC-DB-06", description: "Test a random duress/panic alarm to ensure it functions and is responded to correctly.", priority: "High", riskLevel: "Medium", consequence: "System failure during a real emergency.", proof: "Alarm test log.", location: "Varies" },
                { id: "SEC-DB-07", description: "Inspect perimeter fencing and lighting for any breaches or dark spots.", priority: "Medium", riskLevel: "Medium", consequence: "Easy access for intruders.", proof: "Perimeter patrol log.", location: "Hotel Perimeter" },
                { id: "SEC-DB-08", description: "Verify that all restricted areas are secure and access control systems are working.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized access to sensitive areas like cash rooms or server rooms.", proof: "Access control system logs.", location: "Restricted Areas" },
                { id: "SEC-DB-09", description: "Check parking area for any abandoned vehicles or suspicious activity.", priority: "Low", riskLevel: "Low", consequence: "Vehicle theft, potential security threats.", proof: "Parking patrol log.", location: "Parking Area" },
                { id: "SEC-DB-10", description: "At end of shift, conduct a thorough handover with the next shift supervisor.", priority: "High", riskLevel: "Low", consequence: "Critical information lost between shifts.", proof: "Signed handover document.", location: "Security Office" }
            ]
        },
        {
            title: "Guest Complaint & Service Recovery",
            department: "Guest Relations",
            frequency: "Per Incident",
            role: "Duty Manager / GR Executive",
            summary: "A structured process to handle guest complaints effectively, turning negative experiences into opportunities for loyalty.",
            icon: "smile-plus",
            tasks: [
                { id: "GR-SR-01", description: "Listen actively to the guest's complaint without interruption (L.A.S.T. - Listen, Apologize, Solve, Thank).", priority: "High", riskLevel: "High", consequence: "Escalation of guest anger, negative online review.", proof: "Complaint form with guest's statement.", location: "Guest Facing" },
                { id: "GR-SR-02", description: "Apologize sincerely for the service failure, regardless of fault.", priority: "High", riskLevel: "Low", consequence: "Guest feels unheard and defensive.", proof: "Manager's report on the incident.", location: "Guest Facing" },
                { id: "GR-SR-03", description: "Log the complaint in the guest feedback system with all details (guest name, room, date, issue).", priority: "High", riskLevel: "Medium", consequence: "Failure to track recurring issues, no data for improvement.", proof: "Entry in PMS or guest feedback software.", location: "Front Office" },
                { id: "GR-SR-04", description: "Empower front-line staff to resolve minor issues immediately with a pre-approved service recovery toolkit (e.g., room change, complimentary drink).", priority: "High", riskLevel: "Medium", consequence: "Slow resolution, guest frustration.", proof: "Service recovery log.", location: "Guest Facing" },
                { id: "GR-SR-05", description: "For major issues, inform the department head and General Manager immediately.", priority: "High", riskLevel: "High", consequence: "Lack of senior management awareness of critical issues.", proof: "Email or message log to senior management.", location: "Office" },
                { id: "GR-SR-06", description: "Follow up with the guest within a specified timeframe (e.g., 30 minutes) to confirm the solution is satisfactory.", priority: "High", riskLevel: "Medium", consequence: "Guest feels forgotten after the initial complaint.", proof: "Log of follow-up call/visit in PMS.", location: "Guest Facing" },
                { id: "GR-SR-07", description: "Document the resolution and any compensation offered in the guest's profile.", priority: "Medium", riskLevel: "Medium", consequence: "Inconsistent compensation, lack of history for future stays.", proof: "Updated guest profile in PMS.", location: "Office" },
                { id: "GR-SR-08", description: "Analyze complaint data weekly to identify trends and root causes.", priority: "Medium", riskLevel: "Low", consequence: "Repeated service failures, failure to make systemic improvements.", proof: "Weekly guest complaint analysis report.", location: "Manager's Meeting" },
                { id: "GR-SR-09", description: "Thank the guest for their feedback and for giving you the opportunity to correct the issue.", priority: "High", riskLevel: "Low", consequence: "Guest leaves feeling like a transaction, not a valued person.", proof: "Manager's final follow-up note.", location: "Guest Facing" },
                { id: "GR-SR-10", description: "Share learnings from significant service failures with the entire team for training purposes.", priority: "Medium", riskLevel: "Low", consequence: "The organization does not learn from its mistakes.", proof: "Minutes of team briefing or training session.", location: "Departmental Meeting" }
            ]
        }
    ]
};

const restaurants: PremiumPack = {
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
    checklists: [
        {
            title: "Kitchen Opening Checklist (HACCP)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Opening Chef",
            summary: "Ensures the kitchen is safe, sanitary, and ready for service, complying with HACCP principles.",
            icon: "clipboard-check",
            tasks: [
                { id: "RO-KO-01", description: "Record temperatures of all coolers and freezers.", priority: "High", riskLevel: "High", consequence: "Foodborne illness outbreak.", proof: "Temperature log sheet.", location: "Cold Storage" },
                { id: "RO-KO-02", description: "Sanitize all food preparation surfaces, cutting boards, and slicers.", priority: "High", riskLevel: "High", consequence: "Cross-contamination.", proof: "Sanitization log.", location: "Prep Stations" },
                { id: "RO-KO-03", description: "Check dishwasher and 3-compartment sink for correct chemical levels and water temperature.", priority: "High", riskLevel: "Medium", consequence: "Ineffective cleaning, health code violations.", proof: "Test strip results log.", location: "Dishwashing Area" },
                { id: "RO-KO-04", description: "Ensure handwashing stations are stocked with soap, paper towels, and hot water.", priority: "High", riskLevel: "Medium", consequence: "Spread of pathogens via hands.", proof: "Visual check.", location: "All Hand Sinks" },
                { id: "RO-KO-05", description: "Calibrate all food thermometers.", priority: "High", riskLevel: "High", consequence: "Incorrect cooking temperatures, food safety risk.", proof: "Calibration log.", location: "Kitchen Office" },
                { id: "RO-KO-06", description: "Check for signs of pests and log any findings.", priority: "High", riskLevel: "High", consequence: "Infestation, closure by health department.", proof: "Pest control logbook.", location: "All Kitchen Areas" },
                { id: "RO-KO-07", description: "Verify proper storage of raw vs. ready-to-eat foods.", priority: "High", riskLevel: "High", consequence: "Cross-contamination (e.g., salmonella).", proof: "Photo of cooler storage.", location: "Walk-in Cooler" },
                { id: "RO-KO-08", description: "Ensure waste bins are clean, lined, and covered.", priority: "Medium", riskLevel: "Low", consequence: "Pest attraction, odors.", proof: "Visual check.", location: "Waste Area" },
                { id: "RO-KO-09", description: "Check that all cooking equipment is clean and functional.", priority: "Medium", riskLevel: "Medium", consequence: "Service delays, fire hazard.", proof: "Equipment check log.", location: "Cooking Line" },
                { id: "RO-KO-10", description: "Review previous day's closing notes for any follow-up actions.", priority: "Medium", riskLevel: "Low", consequence: "Unresolved issues.", proof: "Manager's logbook.", location: "Kitchen Office" }
            ]
        },
        {
            title: "Food Receiving & Storage",
            department: "Kitchen/Stores",
            frequency: "Per Delivery",
            role: "Receiving Clerk",
            summary: "Ensures all incoming food is safe, from approved suppliers, and stored correctly.",
            icon: "truck",
            tasks: [
                { id: "RO-FR-01", description: "Check temperature of refrigerated and frozen goods upon arrival.", priority: "High", riskLevel: "High", consequence: "Accepting temperature-abused food, foodborne illness.", proof: "Inbound temperature log.", location: "Receiving Dock" },
                { id: "RO-FR-02", description: "Inspect packaging for damage, leaks, or signs of tampering.", priority: "High", riskLevel: "Medium", consequence: "Contaminated product enters inventory.", proof: "Receiving checklist.", location: "Receiving Dock" },
                { id: "RO-FR-03", description: "Verify delivery against purchase order for accuracy of items and quantities.", priority: "Medium", riskLevel: "Low", consequence: "Inventory discrepancies, paying for incorrect items.", proof: "Signed delivery note with discrepancies noted.", location: "Receiving Dock" },
                { id: "RO-FR-04", description: "Check 'use by' or 'best by' dates on all perishable items.", priority: "High", riskLevel: "Medium", consequence: "Food spoilage, serving expired product.", proof: "Receiving checklist.", location: "Receiving Dock" },
                { id: "RO-FR-05", description: "Ensure all received items are from approved suppliers.", priority: "High", riskLevel: "High", consequence: "Food fraud, unknown allergen risks, poor quality.", proof: "Cross-reference with Approved Supplier List.", location: "Receiving Office" },
                { id: "RO-FR-06", description: "Move all perishable items to correct temperature storage immediately.", priority: "High", riskLevel: "High", consequence: "Breaking the cold chain, bacterial growth.", proof: "CCTV footage of receiving process.", location: "Receiving to Storage" },
                { id: "RO-FR-07", description: "Label all decanted products with name and date.", priority: "Medium", riskLevel: "Low", consequence: "Inability to track freshness, cross-contamination.", proof: "Visual check of stored items.", location: "Storage Areas" },
                { id: "RO-FR-08", description: "Implement FIFO (First-In, First-Out) rotation for all new stock.", priority: "High", riskLevel: "Medium", consequence: "Increased wastage, using older stock last.", proof: "Visual check of storage shelves.", location: "Storage Areas" },
                { id: "RO-FR-09", description: "Reject any delivery that does not meet standards and document the rejection.", priority: "High", riskLevel: "High", consequence: "Accepting unsafe food into the kitchen.", proof: "Signed and documented rejection note.", location: "Receiving Dock" },
                { id: "RO-FR-10", description: "Keep receiving area clean and free of pests.", priority: "Medium", riskLevel: "Low", consequence: "Pests entering the facility via deliveries.", proof: "Cleaning log for receiving area.", location: "Receiving Dock" }
            ]
        },
        {
            title: "Allergen Management Protocol",
            department: "Kitchen/Service",
            frequency: "Ongoing",
            role: "All Staff",
            summary: "A system to prevent cross-contamination and ensure accurate communication of allergens to guests.",
            icon: "file-warning",
            tasks: [
                { id: "RO-AM-01", description: "Maintain an up-to-date allergen matrix for all menu items.", priority: "High", riskLevel: "High", consequence: "Fatal allergic reaction, lawsuits.", proof: "Posted allergen matrix.", location: "Kitchen/Service Station" },
                { id: "RO-AM-02", description: "Use designated purple cutting boards and utensils for allergen-free orders.", priority: "High", riskLevel: "High", consequence: "Cross-contact causing allergic reaction.", proof: "Visual check of equipment.", location: "Prep Stations" },
                { id: "RO-AM-03", description: "When a guest declares an allergy, a manager must oversee the order.", priority: "High", riskLevel: "High", consequence: "Miscommunication between server and kitchen.", proof: "Manager's signature on the allergen ticket.", location: "POS/Kitchen" },
                { id: "RO-AM-04", description: "Change gloves and wash hands before preparing an allergen-free meal.", priority: "High", riskLevel: "High", consequence: "Cross-contact.", proof: "CCTV review or direct observation.", location: "Prep Stations" },
                { id: "RO-AM-05", description: "Allergen-free meals must be clearly marked and delivered to the table separately.", priority: "High", riskLevel: "High", consequence: "Giving the wrong plate to the guest.", proof: "Use of 'Allergy' pick on the dish.", location: "Expo/Table" },
                { id: "RO-AM-06", description: "Store allergenic ingredients separately from non-allergenic ingredients.", priority: "Medium", riskLevel: "Medium", consequence: "Accidental cross-contamination in storage.", proof: "Photo of storage shelves.", location: "Storage Areas" },
                { id: "RO-AM-07", description: "Ensure all front-of-house staff complete mandatory allergen awareness training.", priority: "High", riskLevel: "High", consequence: "Staff giving incorrect information to guests.", proof: "Training records.", location: "HR/Training" },
                { id: "RO-AM-08", description: "Review all new recipes for allergens before adding them to the menu.", priority: "High", riskLevel: "Medium", consequence: "Introducing an un-documented allergen.", proof: "Recipe sign-off sheet with allergen check.", location: "Kitchen Office" },
                { id: "RO-AM-09", description: "In case of a reaction, immediately call emergency services and follow incident protocol.", priority: "High", riskLevel: "High", consequence: "Delayed medical response.", proof: "Incident report form.", location: "Restaurant Floor" },
                { id: "RO-AM-10", description: "Regularly update staff on changes to menu items or ingredients.", priority: "Medium", riskLevel: "Low", consequence: "Outdated knowledge.", proof: "Pre-shift briefing notes.", location: "Team Briefing" }
            ]
        },
        {
            title: "Front of House Opening/Closing",
            department: "Service",
            frequency: "Daily",
            role: "Restaurant Manager",
            summary: "Ensures the dining area is perfectly set, staff are briefed, and all financial procedures are followed.",
            icon: "users",
            tasks: [
                { id: "RO-FO-01", description: "Inspect all tables for correct setup, cleanliness, and stability.", priority: "High", riskLevel: "Low", consequence: "Poor guest first impression.", proof: "Manager's opening checklist.", location: "Dining Room" },
                { id: "RO-FO-02", description: "Check cleanliness of restrooms and restock supplies.", priority: "High", riskLevel: "Medium", consequence: "Guest complaints, negative perception of hygiene.", proof: "Restroom cleaning log.", location: "Restrooms" },
                { id: "RO-FO-03", description: "Conduct pre-shift briefing with staff covering specials, 86'd items, and service points.", priority: "High", riskLevel: "Low", consequence: "Poor communication, inconsistent service.", proof: "Briefing log.", location: "Staff Area" },
                { id: "RO-FO-04", description: "Assign server sections and side-work duties.", priority: "Medium", riskLevel: "Low", consequence: "Unfair workload, missed tasks.", proof: "Posted section map and side-work chart.", location: "Staff Area" },
                { id: "RO-FO-05", description: "Verify POS system is online and printers are working.", priority: "High", riskLevel: "Medium", consequence: "Inability to take orders or process payments.", proof: "Test transaction printout.", location: "POS Stations" },
                { id: "RO-FO-06", description: "Check ambiance: lighting, music volume, and temperature are at correct levels.", priority: "Medium", riskLevel: "Low", consequence: "Uncomfortable guest environment.", proof: "Manager's opening checklist.", location: "Dining Room" },
                { id: "RO-FO-07", description: "At closing, reconcile all cash, credit card, and digital payments.", priority: "High", riskLevel: "High", consequence: "Financial loss, theft.", proof: "End-of-day sales report signed by manager.", location: "Office" },
                { id: "RO-FO-08", description: "Ensure all closing side-work is completed by staff before checkout.", priority: "Medium", riskLevel: "Low", consequence: "Dirty restaurant for the morning shift.", proof: "Closing checklist signed by each server.", location: "Dining Room" },
                { id: "RO-FO-09", description: "Secure all cash and valuables in the safe.", priority: "High", riskLevel: "High", consequence: "Theft.", proof: "Safe logbook.", location: "Office" },
                { id: "RO-FO-10", description: "Set alarm and secure all doors and windows at close.", priority: "High", riskLevel: "High", consequence: "Break-in.", proof: "Alarm system log.", location: "Entire Premises" }
            ]
        },
        {
            title: "Weekly Fire Safety Audit",
            department: "Management/Compliance",
            frequency: "Weekly",
            role: "General Manager",
            summary: "Ensures the restaurant is compliant with fire safety regulations and prepared for an emergency.",
            icon: "siren",
            tasks: [
                { id: "RO-FS-01", description: "Check all fire exit pathways are completely clear of obstructions.", priority: "High", riskLevel: "High", consequence: "Blocked escape route, mass casualties.", proof: "Dated photos of all exit routes.", location: "All Areas" },
                { id: "RO-FS-02", description: "Verify all fire extinguishers are in their designated places, charged, and not expired.", priority: "High", riskLevel: "High", consequence: "Inability to fight a small fire.", proof: "Extinguisher inspection log.", location: "All Areas" },
                { id: "RO-FS-03", description: "Test fire alarm system (if permitted without full evacuation).", priority: "High", riskLevel: "High", consequence: "Alarm failure in an emergency.", proof: "Alarm test log.", location: "Control Panel" },
                { id: "RO-FS-04", description: "Check kitchen fire suppression system (e.g., Ansul) for pressure and blockages.", priority: "High", riskLevel: "High", consequence: "Uncontrolled kitchen fire.", proof: "Inspection tag and gauge photo.", location: "Kitchen Hood" },
                { id: "RO-FS-05", description: "Ensure emergency lighting is functional.", priority: "High", riskLevel: "Medium", consequence: "Panic in the dark during an evacuation.", proof: "Emergency light test log.", location: "All Areas" },
                { id: "RO-FS-06", description: "Check that gas lines and shut-off valves are accessible and clearly marked.", priority: "High", riskLevel: "High", consequence: "Inability to stop gas flow in an emergency, explosion risk.", proof: "Photo of accessible gas valve.", location: "Kitchen/Utility Area" },
                { id: "RO-FS-07", description: "Clean lint and grease buildup from kitchen exhaust hoods and ducts.", priority: "High", riskLevel: "High", consequence: "Grease fire, the most common type of restaurant fire.", proof: "Cleaning log with vendor signature.", location: "Kitchen Hood" },
                { id: "RO-FS-08", description: "Review staff knowledge of evacuation plan with a quick quiz.", priority: "Medium", riskLevel: "Medium", consequence: "Staff confusion during an emergency.", proof: "Note in manager's log.", location: "Staff Briefing" },
                { id: "RO-FS-09", description: "Verify 'No Smoking' signs are present and enforced.", priority: "Low", riskLevel: "Low", consequence: "Fire risk from discarded cigarettes.", proof: "Visual check.", location: "All Areas" },
                { id: "RO-FS-10", description: "Check for any daisy-chained extension cords or overloaded electrical outlets.", priority: "Medium", riskLevel: "High", consequence: "Electrical fire.", proof: "Photo of any violations found.", location: "All Areas" }
            ]
        },
        {
            title: "Pest Control & Waste Management",
            department: "Maintenance/Kitchen",
            frequency: "Daily/Weekly",
            role: "Maintenance Staff",
            summary: "Maintains a clean environment to prevent pest infestations and comply with health codes.",
            icon: "bug",
            tasks: [
                { id: "RO-PC-01", description: "Inspect all incoming goods for signs of pests before accepting.", priority: "High", riskLevel: "Medium", consequence: "Pests entering via suppliers.", proof: "Receiving log.", location: "Receiving Dock" },
                { id: "RO-PC-02", description: "Ensure all exterior doors and windows are sealed to prevent pest entry.", priority: "Medium", riskLevel: "Medium", consequence: "Easy entry points for rodents and insects.", proof: "Weekly perimeter inspection log.", location: "Exterior" },
                { id: "RO-PC-03", description: "Keep all food containers sealed and stored off the floor.", priority: "High", riskLevel: "High", consequence: "Pests accessing food sources.", proof: "Visual check of dry storage.", location: "Dry Storage" },
                { id: "RO-PC-04", description: "Clean all floor drains daily.", priority: "Medium", riskLevel: "Low", consequence: "Breeding ground for flies and cockroaches.", proof: "Cleaning log.", location: "Kitchen Floor" },
                { id: "RO-PC-05", description: "Empty all interior trash bins regularly and before they overflow.", priority: "Medium", riskLevel: "Low", consequence: "Attracts pests, odors.", proof: "Visual check.", location: "All Areas" },
                { id: "RO-PC-06", description: "Keep exterior dumpster area clean, and lids closed.", priority: "High", riskLevel: "High", consequence: "Major attraction for rodents and other pests.", proof: "Daily inspection photo.", location: "Exterior Dumpster Area" },
                { id: "RO-PC-07", description: "Check and log all pest traps (e.g., rodent traps, insect light traps).", priority: "Medium", riskLevel: "Medium", consequence: "Failure to detect an early infestation.", proof: "Pest control logbook.", location: "All Areas" },
                { id: "RO-PC-08", description: "Schedule and document regular visits from a professional pest control operator.", priority: "High", riskLevel: "Medium", consequence: "Infestations become unmanageable.", proof: "Pest control service reports.", location: "Office" },
                { id: "RO-PC-09", description: "Properly segregate and store waste (food vs. non-food) as per local regulations.", priority: "Medium", riskLevel: "Low", consequence: "Fines for improper waste disposal.", proof: "Visual check of waste bins.", location: "Waste Area" },
                { id: "RO-PC-10", description: "Clean up any spills immediately.", priority: "High", riskLevel: "Low", consequence: "Attracts pests, slip hazard.", proof: "N/A - immediate action.", location: "All Areas" }
            ]
        },
        {
            title: "Customer Complaint Handling",
            department: "Management/Service",
            frequency: "Per Incident",
            role: "Manager on Duty",
            summary: "Turns negative experiences into positive ones using the L.A.S.T. method (Listen, Apologize, Solve, Thank).",
            icon: "smile-plus",
            tasks: [
                { id: "RO-CH-01", description: "Listen patiently to the guest's entire complaint without interrupting.", priority: "High", riskLevel: "High", consequence: "Guest feels unheard and becomes more irate.", proof: "Manager's incident report.", location: "Dining Room" },
                { id: "RO-CH-02", description: "Apologize genuinely for the lapse in service, even if it's not the restaurant's fault.", priority: "High", riskLevel: "Low", consequence: "Appearing defensive escalates the situation.", proof: "Manager's incident report.", location: "Dining Room" },
                { id: "RO-CH-03", description: "Log the complaint in the daily logbook, noting the table, server, time, and issue.", priority: "High", riskLevel: "Medium", consequence: "Inability to track recurring problems.", proof: "Entry in daily logbook.", location: "Office" },
                { id: "RO-CH-04", description: "Offer an immediate solution (e.g., recook the dish, offer a complimentary dessert).", priority: "High", riskLevel: "Medium", consequence: "Guest leaves unhappy and posts a negative review.", proof: "Manager's incident report detailing solution.", location: "Dining Room" },
                { id: "RO-CH-05", description: "Follow up with the guest after the solution has been provided to ensure satisfaction.", priority: "Medium", riskLevel: "Low", consequence: "Guest feels processed, not cared for.", proof: "Note in incident report.", location: "Dining Room" },
                { id: "RO-CH-06", description: "Thank the guest for bringing the issue to your attention.", priority: "High", riskLevel: "Low", consequence: "Missed opportunity to end on a positive note.", proof: "Manager's incident report.", location: "Dining Room" },
                { id: "RO-CH-07", description: "If the complaint is about food safety, secure the dish for investigation.", priority: "High", riskLevel: "High", consequence: "Inability to perform a root cause analysis, potential for more illnesses.", proof: "Photo of secured dish, incident report.", location: "Kitchen" },
                { id: "RO-CH-08", description: "Debrief the relevant staff member(s) privately and constructively.", priority: "Medium", riskLevel: "Low", consequence: "Staff do not learn from mistakes.", proof: "Note in staff file.", location: "Back Office" },
                { id: "RO-CH-09", description: "Review complaint logs weekly to identify patterns (e.g., a specific dish, a specific server).", priority: "Medium", riskLevel: "Medium", consequence: "Systemic issues are never resolved.", proof: "Weekly management meeting minutes.", location: "Office" },
                { id: "RO-CH-10", description: "Empower staff with a service recovery budget (e.g., ₹500) to solve problems without needing manager approval.", priority: "High", riskLevel: "Low", consequence: "Slow response times for minor issues.", proof: "Service recovery policy document.", location: "HR/Training" }
            ]
        },
        {
            title: "End-of-Day Closing",
            department: "Management",
            frequency: "Daily",
            role: "Closing Manager",
            summary: "Secures the premises, reconciles financials, and prepares for the next day.",
            icon: "lock",
            tasks: [
                { id: "RO-ED-01", description: "Reconcile all POS stations and cash drawers.", priority: "High", riskLevel: "High", consequence: "Theft, financial discrepancies.", proof: "Signed end-of-day sales report.", location: "Office" },
                { id: "RO-ED-02", description: "Secure all cash and credit card slips in the safe.", priority: "High", riskLevel: "High", consequence: "Theft of days earnings.", proof: "Safe deposit log.", location: "Office" },
                { id: "RO-ED-03", description: "Ensure all kitchen equipment is turned off (fryers, ovens, grills).", priority: "High", riskLevel: "High", consequence: "Fire hazard.", proof: "Closing chef's sign-off sheet.", location: "Kitchen" },
                { id: "RO-ED-04", description: "Check that all coolers and freezers are closed and at the correct temperature.", priority: "High", riskLevel: "Medium", consequence: "Food spoilage overnight.", proof: "Final temperature log entry.", location: "Kitchen" },
                { id: "RO-ED-05", description: "Ensure all cleaning duties for both FOH and BOH are complete.", priority: "Medium", riskLevel: "Low", consequence: "Dirty restaurant for opening shift.", proof: "Signed cleaning checklists.", location: "All Areas" },
                { id: "RO-ED-06", description: "Take out all trash to exterior dumpsters.", priority: "Medium", riskLevel: "Low", consequence: "Pest attraction overnight.", proof: "Visual confirmation.", location: "Waste Area" },
                { id: "RO-ED-07", description: "Lock all doors, windows, and gates.", priority: "High", riskLevel: "High", consequence: "Break-in.", proof: "Physical check of all entry points.", location: "Perimeter" },
                { id: "RO-ED-08", description: "Set the security alarm.", priority: "High", riskLevel: "High", consequence: "Unmonitored premises, break-in.", proof: "Alarm system log.", location: "Exit" },
                { id: "RO-ED-09", description: "Write handover notes for the morning manager.", priority: "Medium", riskLevel: "Low", consequence: "Important information is not passed on.", proof: "Entry in manager's logbook.", location: "Office" },
                { id: "RO-ED-10", description: "Turn off all lights except designated security lighting.", priority: "Low", riskLevel: "Low", consequence: "Wasted energy.", proof: "Visual check.", location: "All Areas" }
            ]
        }
    ]
};

const fashion_and_apparel_retail: PremiumPack = {
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
    checklists: [
        {
            title: "Daily Store Opening",
            department: "Store Operations",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Ensures the store is perfectly presented, secure, and ready for customers.",
            icon: "key-round",
            tasks: [
                { id: "FAR-SO-01", description: "Deactivate alarm and perform a security walk-through of the premises.", priority: "High", riskLevel: "High", consequence: "Failure to detect overnight break-in.", proof: "Alarm deactivation log, manager's sign-off.", location: "All Areas" },
                { id: "FAR-SO-02", description: "Check all lighting, music, and digital displays are functional.", priority: "Medium", riskLevel: "Low", consequence: "Poor store ambiance, negative customer experience.", proof: "Opening checklist.", location: "Sales Floor" },
                { id: "FAR-SO-03", description: "Ensure cash registers (POS) are online, and payment terminals are working.", priority: "High", riskLevel: "High", consequence: "Inability to process sales.", proof: "Test transaction receipt.", location: "Cash Desk" },
                { id: "FAR-SO-04", description: "Verify cash float is correct.", priority: "High", riskLevel: "Medium", consequence: "Cash handling errors.", proof: "Signed float count form.", location: "Cash Desk" },
                { id: "FAR-SO-05", description: "Quickly tidy and spot-clean floors, mirrors, and displays from the previous day.", priority: "High", riskLevel: "Low", consequence: "Unprofessional appearance.", proof: "Visual check by manager.", location: "Sales Floor" },
                { id: "FAR-SO-06", description: "Review daily sales targets and staff briefing notes.", priority: "Medium", riskLevel: "Low", consequence: "Team is not aligned on goals.", proof: "Briefing sheet.", location: "Back Office" },
                { id: "FAR-SO-07", description: "Check that fitting rooms are clean, empty, and secure.", priority: "Medium", riskLevel: "Medium", consequence: "Poor customer experience, theft risk.", proof: "Visual check.", location: "Fitting Rooms" },
                { id: "FAR-SO-08", description: "Replenish any stock on the sales floor from the stockroom.", priority: "Medium", riskLevel: "Low", consequence: "Lost sales opportunities.", proof: "Visual check of key displays.", location: "Sales Floor" },
                { id: "FAR-SO-09", description: "Ensure all new promotional signage is correctly displayed.", priority: "Medium", riskLevel: "Low", consequence: "Customer confusion, missed marketing opportunities.", proof: "Photo of main promotional display.", location: "Sales Floor" },
                { id: "FAR-SO-10", description: "Conduct a team briefing to set the tone for the day.", priority: "High", riskLevel: "Low", consequence: "Unmotivated team, poor service.", proof: "Manager's briefing notes.", location: "Staff Area" }
            ]
        },
        {
            title: "Visual Merchandising Audit",
            department: "Merchandising",
            frequency: "Weekly",
            role: "Visual Merchandiser",
            summary: "Ensures the store's presentation aligns with brand guidelines and maximizes sales.",
            icon: "gallery-vertical",
            tasks: [
                { id: "FAR-VM-01", description: "Verify window displays are clean, well-lit, and match the current campaign planogram.", priority: "High", riskLevel: "Medium", consequence: "Poor first impression, reduced footfall.", proof: "Photo of window display vs. planogram.", location: "Storefront" },
                { id: "FAR-VM-02", description: "Check that all mannequins are dressed correctly, in good condition, and in the right positions.", priority: "Medium", riskLevel: "Low", consequence: "Sloppy brand image.", proof: "Photos of mannequin displays.", location: "Sales Floor" },
                { id: "FAR-VM-03", description: "Ensure all in-store signage and promotional materials are current and in good condition.", priority: "Medium", riskLevel: "Medium", consequence: "Outdated information, confusing offers.", proof: "Visual check of all signage.", location: "Sales Floor" },
                { id: "FAR-VM-04", description: "Verify that key product displays (e.g., front tables, feature walls) are styled as per guidelines.", priority: "High", riskLevel: "Low", consequence: "Reduced sales of key items.", proof: "Photo of feature displays.", location: "Sales Floor" },
                { id: "FAR-VM-05", description: "Check for consistent and correct folding, hanging, and sizing standards across all products.", priority: "Medium", riskLevel: "Low", consequence: "Messy, unappealing displays.", proof: "Visual check of a sample of shelves and racks.", location: "Sales Floor" },
                { id: "FAR-VM-06", description: "Ensure lighting is focused correctly on merchandise.", priority: "Medium", riskLevel: "Low", consequence: "Poor product presentation.", proof: "Visual check of lighting.", location: "Sales Floor" },
                { id: "FAR-VM-07", description: "Assess overall store cleanliness and organization.", priority: "High", riskLevel: "Low", consequence: "Negative shopping experience.", proof: "Store cleanliness checklist.", location: "All Areas" },
                { id: "FAR-VM-08", description: "Remove and replace any damaged or worn display props.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional look.", proof: "Log of replaced props.", location: "All Areas" },
                { id: "FAR-VM-09", description: "Check that clearance and sale sections are clearly marked and organized.", priority: "Medium", riskLevel: "Low", consequence: "Lost sales, poor customer experience.", proof: "Visual check of sale section.", location: "Sale Area" },
                { id: "FAR-VM-10", description: "Provide feedback and training to store staff on maintaining VM standards.", priority: "Medium", riskLevel: "Low", consequence: "Standards degrade over time.", proof: "VM training log.", location: "Staff Training" }
            ]
        },
        {
            title: "Inventory & Shrinkage Control",
            department: "Loss Prevention/Operations",
            frequency: "Weekly/Monthly",
            role: "Store Manager",
            summary: "Procedures to minimize inventory loss from theft, damage, or administrative errors.",
            icon: "shield",
            tasks: [
                { id: "FAR-IS-01", description: "Conduct weekly cycle counts on high-value or high-theft product categories.", priority: "High", riskLevel: "High", consequence: "Inaccurate stock levels, inability to identify theft patterns.", proof: "Signed cycle count sheets.", location: "Stockroom/Sales Floor" },
                { id: "FAR-IS-02", description: "Review CCTV footage of cash desk and high-risk areas daily.", priority: "Medium", riskLevel: "Medium", consequence: "Missed instances of internal or external theft.", proof: "CCTV review log.", location: "Office" },
                { id: "FAR-IS-03", description: "Audit processed returns and exchanges for compliance with policy.", priority: "Medium", riskLevel: "High", consequence: "Fraudulent returns.", proof: "Sample of audited return forms vs. product.", location: "Office" },
                { id: "FAR-IS-04", description: "Ensure security tags are correctly applied to all required merchandise.", priority: "High", riskLevel: "Medium", consequence: "Increased shoplifting.", proof: "Visual check of a sample of items.", location: "Sales Floor" },
                { id: "FAR-IS-05", description: "Test Electronic Article Surveillance (EAS) gates at the entrance daily.", priority: "High", riskLevel: "High", consequence: "System failure, undetected theft.", proof: "EAS gate test log.", location: "Entrance" },
                { id: "FAR-IS-06", description: "Manage fitting room access and monitor the number of items taken in.", priority: "High", riskLevel: "High", consequence: "High-risk area for theft.", proof: "Fitting room log/policy document.", location: "Fitting Rooms" },
                { id: "FAR-IS-07", description: "Secure stockroom and back-of-house areas; access should be restricted.", priority: "High", riskLevel: "Medium", consequence: "Internal theft.", proof: "Check of door locks and access logs.", location: "Stockroom" },
                { id: "FAR-IS-08", description: "Investigate and document all inventory discrepancies from cycle counts.", priority: "High", riskLevel: "Medium", consequence: "Unresolved shrinkage issues.", proof: "Discrepancy reports with manager notes.", location: "Office" },
                { id: "FAR-IS-09", description: "Process all damaged or defective items according to policy.", priority: "Medium", riskLevel: "Low", consequence: "Inaccurate stock records.", proof: "Damage log.", location: "Stockroom" },
                { id: "FAR-IS-10", description: "Train all staff on shrinkage awareness and loss prevention policies.", priority: "High", riskLevel: "Low", consequence: "Staff are not vigilant against theft.", proof: "Training records.", location: "HR/Training" }
            ]
        },
        {
            title: "Omni-Channel Operations",
            department: "Operations",
            frequency: "Daily",
            role: "Omni-Channel Lead",
            summary: "Manages click-and-collect, online returns, and ship-from-store processes.",
            icon: "link",
            tasks: [
                { id: "FAR-OC-01", description: "Process and pick all new 'Click & Collect' orders within the specified SLA (e.g., 2 hours).", priority: "High", riskLevel: "Medium", consequence: "Poor customer experience, canceled orders.", proof: "Order management system dashboard.", location: "Stockroom/Sales Floor" },
                { id: "FAR-OC-02", description: "Communicate with customers when their 'Click & Collect' order is ready for pickup.", priority: "High", riskLevel: "Low", consequence: "Customer uncertainty, increased inbound queries.", proof: "Copy of notification email/SMS.", location: "Office" },
                { id: "FAR-OC-03", description: "Process all in-store returns of online orders according to policy.", priority: "High", riskLevel: "Medium", consequence: "Inventory discrepancies, poor customer experience.", proof: "Return processing log.", location: "Cash Desk" },
                { id: "FAR-OC-04", description: "Inspect, re-tag, and return items to the sales floor or designated returns area.", priority: "Medium", riskLevel: "Low", consequence: "Returned items are not made available for resale.", proof: "Visual check of returns processing area.", location: "Stockroom" },
                { id: "FAR-OC-05", description: "Pack and dispatch all 'Ship from Store' orders daily.", priority: "High", riskLevel: "Medium", consequence: "Delayed delivery to online customers.", proof: "End-of-day courier manifest.", location: "Stockroom" },
                { id: "FAR-OC-06", description: "Maintain accurate inventory levels between online and offline channels.", priority: "High", riskLevel: "High", consequence: "Selling items online that are out of stock in-store.", proof: "System inventory sync logs.", location: "Office" },
                { id: "FAR-OC-07", description: "Keep the 'Click & Collect' pickup point clean and well-signposted.", priority: "Medium", riskLevel: "Low", consequence: "Poor customer experience.", proof: "Photo of pickup point.", location: "Sales Floor" },
                { id: "FAR-OC-08", description: "Train staff on all omni-channel procedures.", priority: "High", riskLevel: "Low", consequence: "Inconsistent service.", proof: "Training records.", location: "HR/Training" },
                { id: "FAR-OC-09", description: "Handle customer inquiries related to omni-channel orders.", priority: "Medium", riskLevel: "Low", consequence: "Poor customer service.", proof: "Customer service log.", location: "Office/Shop Floor" },
                { id: "FAR-OC-10", description: "Audit a sample of packed 'Ship from Store' orders for accuracy and presentation.", priority: "Medium", riskLevel: "Low", consequence: "Incorrect orders shipped, poor brand presentation.", proof: "Packing audit checklist.", location: "Stockroom" }
            ]
        },
        {
            title: "Store Safety & Security",
            department: "Loss Prevention",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Ensures a safe and secure environment for both customers and staff.",
            icon: "shield-check",
            tasks: [
                { id: "FAR-SS-01", description: "Test all EAS security gates at store opening.", priority: "High", riskLevel: "High", consequence: "Failure to detect theft.", proof: "Daily gate test log.", location: "Entrance" },
                { id: "FAR-SS-02", description: "Check all CCTV cameras are online, recording, and have clear views.", priority: "High", riskLevel: "High", consequence: "Inability to investigate incidents.", proof: "CCTV system status screen.", location: "Office" },
                { id: "FAR-SS-03", description: "Ensure fitting room policies (e.g., item limits) are being enforced.", priority: "High", riskLevel: "Medium", consequence: "Theft from fitting rooms.", proof: "Direct observation.", location: "Fitting Rooms" },
                { id: "FAR-SS-04", description: "Check that all high-value items are properly secured (e.g., in locked cabinets, with security tags).", priority: "High", riskLevel: "High", consequence: "High-value theft.", proof: "Visual audit of high-value displays.", location: "Sales Floor" },
                { id: "FAR-SS-05", description: "Ensure backroom and stockroom doors are kept locked and secure.", priority: "High", riskLevel: "Medium", consequence: "Internal theft or unauthorized access.", proof: "Visual check during store walk.", location: "Back of House" },
                { id: "FAR-SS-06", description: "Conduct bag checks for staff at the end of their shifts as per policy.", priority: "Medium", riskLevel: "Medium", consequence: "Internal theft.", proof: "Bag check log.", location: "Staff Exit" },
                { id: "FAR-SS-07", description: "Verify that panic buttons or duress alarms are functional.", priority: "High", riskLevel: "High", consequence: "Inability for staff to call for help in an emergency.", proof: "Alarm test log.", location: "Cash Desk/Office" },
                { id: "FAR-SS-08", description: "Keep floors clear of slip and trip hazards (e.g., boxes, hangers).", priority: "High", riskLevel: "Medium", consequence: "Customer or staff injuries, lawsuits.", proof: "Daily floor safety checklist.", location: "All Areas" },
                { id: "FAR-SS-09", description: "Ensure fire exits are clear and unblocked.", priority: "High", riskLevel: "High", consequence: "Blocked escape route during a fire.", proof: "Dated photo of fire exits.", location: "All Areas" },
                { id: "FAR-SS-10", description: "Review any suspicious activity or known shoplifters to the team.", priority: "Medium", riskLevel: "Low", consequence: "Team is not vigilant.", proof: "Daily briefing notes.", location: "Staff Briefing" }
            ]
        },
        {
            title: "Daily Closing & Financial Reconciliation",
            department: "Store Operations",
            frequency: "Daily",
            role: "Closing Manager",
            summary: "Secures the store and ensures all sales and cash are accounted for.",
            icon: "banknote",
            tasks: [
                { id: "FAR-DC-01", description: "Reconcile sales for each POS terminal against cash, card, and digital payments.", priority: "High", riskLevel: "High", consequence: "Financial discrepancies, theft.", proof: "Signed end-of-day POS reports.", location: "Cash Desk" },
                { id: "FAR-DC-02", description: "Count cash from each drawer and compare against the POS report.", priority: "High", riskLevel: "High", consequence: "Cash shortages or overages are not identified.", proof: "Signed cash count forms.", location: "Office" },
                { id: "FAR-DC-03", description: "Prepare bank deposit and secure in the safe.", priority: "High", riskLevel: "High", consequence: "Theft of daily takings.", proof: "Deposit slip and safe log.", location: "Office" },
                { id: "FAR-DC-04", description: "Process all end-of-day reports from the POS system.", priority: "Medium", riskLevel: "Low", consequence: "Incomplete data for head office reporting.", proof: "Printed or saved reports.", location: "Office" },
                { id: "FAR-DC-05", description: "Clear and tidy the cash desk area.", priority: "Medium", riskLevel: "Low", consequence: "Unprofessional appearance for opening shift.", proof: "Visual check.", location: "Cash Desk" },
                { id: "FAR-DC-06", description: "Ensure all returned/damaged goods are processed and stored correctly.", priority: "Medium", riskLevel: "Low", consequence: "Inventory inaccuracies.", proof: "Check of returns area.", location: "Stockroom" },
                { id: "FAR-DC-07", description: "Complete a final walk-through of the sales floor to tidy and recover merchandise.", priority: "Medium", riskLevel: "Low", consequence: "Store is not ready for morning opening.", proof: "Manager's closing checklist.", location: "Sales Floor" },
                { id: "FAR-DC-08", description: "Lock all doors, gates, and cabinets.", priority: "High", riskLevel: "High", consequence: "Break-in.", proof: "Physical check.", location: "All Areas" },
                { id: "FAR-DC-09", description: "Set the security alarm.", priority: "High", riskLevel: "High", consequence: "Theft, burglary.", proof: "Alarm system log.", location: "Exit" },
                { id: "FAR-DC-10", description: "Log any issues or notes for the morning manager.", priority: "Medium", riskLevel: "Low", consequence: "Poor communication between shifts.", proof: "Manager's logbook entry.", location: "Office" }
            ]
        },
        {
            title: "Seasonal Inventory Management",
            department: "Merchandising/Operations",
            frequency: "Seasonally",
            role: "Merchandising Manager",
            summary: "Manages the transition between seasons, from stock intake to clearance.",
            icon: "recycle",
            tasks: [
                { id: "FAR-SI-01", description: "Plan and execute the receiving of new seasonal stock.", priority: "High", riskLevel: "Medium", consequence: "Disorganized intake, delayed launch.", proof: "Receiving schedule and plan.", location: "Stockroom" },
                { id: "FAR-SI-02", description: "Update all visual merchandising and floor layouts for the new season.", priority: "High", riskLevel: "Low", consequence: "Store looks dated, poor sales of new items.", proof: "New planogram documents.", location: "Sales Floor" },
                { id: "FAR-SI-03", description: "Identify slow-moving items from the previous season to be marked down.", priority: "High", riskLevel: "Medium", consequence: "Dead stock, tied-up capital.", proof: "Slow-seller report from inventory system.", location: "Office" },
                { id: "FAR-SI-04", description: "Implement markdown and promotional pricing for clearance items.", priority: "High", riskLevel: "Low", consequence: "Inability to clear old stock.", proof: "POS pricing update confirmation.", location: "Office" },
                { id: "FAR-SI-05", description: "Consolidate all clearance items into a designated sale section.", priority: "Medium", riskLevel: "Low", consequence: "Poor customer experience, items get missed.", proof: "Photo of organized sale section.", location: "Sales Floor" },
                { id: "FAR-SI-06", description: "Plan for and execute a full physical inventory count between seasons.", priority: "High", riskLevel: "High", consequence: "Inaccurate stock data for the new season.", proof: "Inventory count plan and final report.", location: "All Areas" },
                { id: "FAR-SI-07", description: "Pack and transfer any remaining old stock to an outlet or for storage.", priority: "Medium", riskLevel: "Low", consequence: "Old stock cluttering the stockroom.", proof: "Transfer logs.", location: "Stockroom" },
                { id: "FAR-SI-08", description: "Analyze sell-through rates of the past season to inform future buying decisions.", priority: "High", riskLevel: "Medium", consequence: "Repeating buying mistakes.", proof: "Seasonal sell-through report.", location: "Office" },
                { id: "FAR-SI-09", description: "Train staff on new product features and selling points.", priority: "High", riskLevel: "Low", consequence: "Staff unable to sell new products effectively.", proof: "Training session attendance.", location: "Staff Training" },
                { id: "FAR-SI-10", description: "Update online store with new season's products and remove old items.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent online vs. in-store offering.", proof: "Website content update log.", location: "E-commerce Dept." }
            ]
        },
        {
            title: "Staff Performance & Training",
            department: "HR/Management",
            frequency: "Monthly/Quarterly",
            role: "Store Manager",
            summary: "A framework for developing staff, improving performance, and building a strong team culture.",
            icon: "user-check",
            tasks: [
                { id: "FAR-SP-01", description: "Conduct monthly one-on-one performance reviews with each team member.", priority: "High", riskLevel: "Low", consequence: "Lack of feedback, low morale, underperformance.", proof: "Signed performance review forms.", location: "Office" },
                { id: "FAR-SP-02", description: "Set clear, measurable sales targets and KPIs for each employee.", priority: "High", riskLevel: "Low", consequence: "Team lacks direction and motivation.", proof: "Copy of individual target sheets.", location: "Office" },
                { id: "FAR-SP-03", description: "Provide regular product knowledge training sessions.", priority: "High", riskLevel: "Medium", consequence: "Staff can't answer customer questions, lost sales.", proof: "Training calendar and attendance sheets.", location: "Staff Area" },
                { id: "FAR-SP-04", description: "Conduct role-playing exercises on customer service and selling skills.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent service quality.", proof: "Training observation notes.", location: "Staff Area" },
                { id: "FAR-SP-05", description: "Recognize and reward top-performing employees publicly.", priority: "Medium", riskLevel: "Low", consequence: "Good performance goes unnoticed, poor motivation.", proof: "'Employee of the Month' announcement/photo.", location: "Staff Area" },
                { id: "FAR-SP-06", description: "Implement a Performance Improvement Plan (PIP) for underperforming staff.", priority: "High", riskLevel: "Medium", consequence: "Chronic underperformance is not addressed, affecting the team.", proof: "Signed PIP document.", location: "HR/Office" },
                { id: "FAR-SP-07", description: "Ensure all staff complete mandatory compliance training (e.g., safety, data privacy).", priority: "High", riskLevel: "High", consequence: "Compliance breaches, legal risks.", proof: "Training completion certificates.", location: "HR" },
                { id: "FAR-SP-08", description: "Maintain an up-to-date training matrix for all employees.", priority: "Medium", riskLevel: "Low", consequence: "Lack of visibility on skill gaps.", proof: "Training matrix spreadsheet.", location: "HR/Office" },
                { id: "FAR-SP-09", description: "Conduct exit interviews to gather feedback from departing employees.", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunity to identify and fix systemic issues.", proof: "Exit interview forms.", location: "HR" },
                { id: "FAR-SP-10", description: "Hold regular team meetings to share business updates and foster teamwork.", priority: "High", riskLevel: "Low", consequence: "Poor communication and team cohesion.", proof: "Meeting minutes.", location: "Staff Area" }
            ]
        }
    ]
};

const jewelry_and_luxury_retail: PremiumPack = {
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
    checklists: [
        {
            title: "Opening & Closing Security",
            department: "Security/Operations",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Ensures the highest level of security during the most vulnerable times of the day.",
            icon: "lock",
            tasks: [
                { id: "JLR-OC-01", description: "Vault Opening: Two authorized persons present for time-lock vault opening.", priority: "High", riskLevel: "High", consequence: "Breach of vault security protocol, increased risk of internal theft.", proof: "Dual-signature log in vault register.", location: "Vault" },
                { id: "JLR-OC-02", description: "System Check: Deactivate alarm and verify all CCTV cameras and panic buttons are operational.", priority: "High", riskLevel: "High", consequence: "System failure during an incident.", proof: "System health check log.", location: "Security Office" },
                { id: "JLR-OC-03", description: "Display Setup: Move items from vault to display cases, with counts verified by two staff members.", priority: "High", riskLevel: "High", consequence: "Inventory discrepancy, potential for swap theft during setup.", proof: "Signed display transfer sheet.", location: "Sales Floor" },
                { id: "JLR-OC-04", description: "Closing Display Clear: All high-value items removed from display and returned to vault.", priority: "High", riskLevel: "High", consequence: "Items left vulnerable to smash-and-grab robbery overnight.", proof: "Dual-signature display clearance log.", location: "Sales Floor" },
                { id: "JLR-OC-05", description: "Vault Closing: Two authorized persons present to lock vault and set time-lock.", priority: "High", riskLevel: "High", consequence: "Vault left unsecured.", proof: "Dual-signature log in vault register.", location: "Vault" },
                { id: "JLR-OC-06", description: "Final Security Sweep: Physical check of all doors, windows, and secondary access points.", priority: "High", riskLevel: "High", consequence: "Unsecured entry point.", proof: "Manager's closing checklist.", location: "Perimeter" },
                { id: "JLR-OC-07", description: "Activate all alarm systems (motion, glass break, etc.).", priority: "High", riskLevel: "High", consequence: "Unprotected premises.", proof: "Alarm system log showing activation.", location: "Security Office" },
                { id: "JLR-OC-08", description: "Test a different silent alarm/panic button each day.", priority: "High", riskLevel: "Medium", consequence: "Failure of a critical life-safety device.", proof: "Daily alarm test log.", location: "Sales Floor" },
                { id: "JLR-OC-09", description: "Ensure showcase keys are securely stored and accounted for at all times.", priority: "High", riskLevel: "High", consequence: "Unauthorized access to display cases.", proof: "Key control log.", location: "Security Office" },
                { id: "JLR-OC-10", description: "Review any suspicious activity from the previous day's logs or CCTV.", priority: "Medium", riskLevel: "Medium", consequence: "Failure to identify patterns or pre-attack surveillance.", proof: "Shift handover log.", location: "Security Office" }
            ]
        },
        {
            title: "High-Value Transaction Protocol",
            department: "Sales/Security",
            frequency: "Per Transaction",
            role: "Senior Sales Associate",
            summary: "A step-by-step process to prevent swap-theft, fraud, and other risks during a high-value sale.",
            icon: "gem",
            tasks: [
                { id: "JLR-HVT-01", description: "Show only one high-value item (or one tray) at a time.", priority: "High", riskLevel: "High", consequence: "Opportunity for distraction and swap theft.", proof: "CCTV footage of the transaction.", location: "Viewing Area" },
                { id: "JLR-HVT-02", description: "Never leave high-value items unattended with a customer.", priority: "High", riskLevel: "High", consequence: "Grab-and-run theft.", proof: "CCTV footage.", location: "Viewing Area" },
                { id: "JLR-HVT-03", description: "A second staff member must be present or actively observing any transaction over a set value.", priority: "High", riskLevel: "High", consequence: "Lack of witness, increased risk of coercion or theft.", proof: "'Buddy system' log.", location: "Viewing Area" },
                { id: "JLR-HVT-04", description: "Verify serial numbers and inspect items with a loupe both before and after showing to a customer.", priority: "High", riskLevel: "High", consequence: "Swap theft is not detected.", proof: "Log sheet initialed before and after viewing.", location: "Viewing Area" },
                { id: "JLR-HVT-05", description: "For large cash payments, verify authenticity of notes using a currency counting machine/UV light.", priority: "High", riskLevel: "High", consequence: "Accepting counterfeit currency.", proof: "Transaction log noting verification.", location: "Cash Desk" },
                { id: "JLR-HVT-06", description: "For card payments, verify the customer's ID matches the name on the card.", priority: "High", riskLevel: "High", consequence: "Credit card fraud.", proof: "Transaction log noting ID verification.", location: "Cash Desk" },
                { id: "JLR-HVT-07", description: "For bank transfers, do not release the item until funds are confirmed as cleared in the company account.", priority: "High", riskLevel: "High", consequence: "Fraudulent proof of payment, total loss of item.", proof: "Bank statement confirmation.", location: "Office" },
                { id: "JLR-HVT-08", description: "Document the sale, including customer details and serial number of the item, in the sales register.", priority: "High", riskLevel: "Medium", consequence: "No audit trail for the transaction.", proof: "Completed sales invoice.", location: "Office" },
                { id: "JLR-HVT-09", description: "Escort the customer with the packaged item to the door.", priority: "Medium", riskLevel: "Low", consequence: "Provides a final positive service impression.", proof: "CCTV footage.", location: "Sales Floor to Exit" },
                { id: "JLR-HVT-10", description: "Log any unusual or suspicious requests or behavior in the security logbook.", priority: "Medium", riskLevel: "High", consequence: "Failure to share intelligence on potential criminal activity.", proof: "Security logbook entry.", location: "Security Office" }
            ]
        },
        {
            title: "Serialized Item & Watch Management",
            department: "Inventory",
            frequency: "Ongoing",
            role: "Inventory Manager",
            summary: "Tracks every serialized item (like luxury watches) from receiving to sale to prevent loss.",
            icon: "barcode",
            tasks: [
                { id: "JLR-W-01", description: "Upon receiving, verify serial number of each watch against the shipping manifest.", priority: "High", riskLevel: "High", consequence: "Accepting incorrect or fraudulent stock.", proof: "Signed receiving document with serial numbers listed.", location: "Receiving Area" },
                { id: "JLR-W-02", description: "Log each serial number into the master inventory system.", priority: "High", riskLevel: "Medium", consequence: "Inability to track individual items.", proof: "Inventory system screenshot.", location: "Office" },
                { id: "JLR-W-03", description: "Conduct weekly random audits of 10 serialized items, comparing physical item to system record.", priority: "High", riskLevel: "High", consequence: "Undetected theft or swaps.", proof: "Weekly audit report.", location: "Vault/Sales Floor" },
                { id: "JLR-W-04", description: "When an item is moved from vault to display, log the movement with two signatures.", priority: "High", riskLevel: "Medium", consequence: "Item goes missing between secure areas.", proof: "Movement logbook.", location: "Vault/Sales Floor" },
                { id: "JLR-W-05", description: "Before showing a watch to a customer, log the serial number out.", priority: "High", riskLevel: "High", consequence: "No record of which specific item was shown.", proof: "Viewing log.", location: "Sales Floor" },
                { id: "JLR-W-06", description: "After showing a watch, verify the serial number again before logging it back in.", priority: "High", riskLevel: "High", consequence: "Swap theft is not caught immediately.", proof: "Viewing log with post-viewing signature.", location: "Sales Floor" },
                { id: "JLR-W-07", description: "At the point of sale, scan the serial number to record the specific item being sold.", priority: "High", riskLevel: "Medium", consequence: "Incorrect item recorded on sales receipt, inventory errors.", proof: "Sales receipt with serial number.", location: "Cash Desk" },
                { id: "JLR-W-08", description: "For repairs, log the serial number and create a separate job bag for the item.", priority: "High", riskLevel: "High", consequence: "Item gets lost or swapped in repair process.", proof: "Repair intake form.", location: "Service Desk" },
                { id: "JLR-W-09", description: "Conduct a full physical inventory of all serialized items quarterly.", priority: "High", riskLevel: "High", consequence: "Accumulation of discrepancies, masking ongoing theft.", proof: "Quarterly inventory reconciliation report.", location: "All Areas" },
                { id: "JLR-W-10", description: "Investigate every single serial number discrepancy within 24 hours.", priority: "High", riskLevel: "High", consequence: "Theft goes uninvestigated, evidence is lost.", proof: "Incident report for each discrepancy.", location: "Security Office" }
            ]
        },
        {
            title: "Repair & Service Intake",
            department: "After-Sales Service",
            frequency: "Per Item",
            role: "Service Advisor",
            summary: "A secure process for accepting customer items for repair, preventing liability and loss.",
            icon: "wrench",
            tasks: [
                { id: "JLR-R-01", description: "Photograph the item from multiple angles upon receipt, documenting its condition (scratches, etc.).", priority: "High", riskLevel: "High", consequence: "Disputes with customers over pre-existing damage.", proof: "Dated photos attached to job card.", location: "Service Desk" },
                { id: "JLR-R-02", description: "Record the item's brand, model, and serial number on the intake form.", priority: "High", riskLevel: "High", consequence: "Inability to track the specific item.", proof: "Completed intake form.", location: "Service Desk" },
                { id: "JLR-R-03", description: "Provide the customer with a detailed receipt that includes the item's details and photos.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes about what was left.", proof: "Copy of customer receipt.", location: "Service Desk" },
                { id: "JLR-R-04", description: "Place the item in a sealed, tamper-evident job bag with the job card attached.", priority: "High", riskLevel: "High", consequence: "Item gets lost, stones fall out, or is tampered with.", proof: "Visual check.", location: "Service Desk" },
                { id: "JLR-R-05", description: "Log the job bag into the repair tracking system.", priority: "High", riskLevel: "Medium", consequence: "No digital record of the item's location.", proof: "Entry in tracking system.", location: "Service Desk" },
                { id: "JLR-R-06", description: "Store the job bag in a dedicated, access-controlled safe or locker.", priority: "High", riskLevel: "High", consequence: "Theft of customer property.", proof: "Safe log.", location: "Secure Storage" },
                { id: "JLR-R-07", description: "When handing over to the workshop, get a signature from the craftsman.", priority: "High", riskLevel: "Medium", consequence: "Chain of custody is broken.", proof: "Handover log.", location: "Workshop" },
                { id: "JLR-R-08", description: "Upon return from workshop, verify item against intake photos and notes before notifying customer.", priority: "High", riskLevel: "High", consequence: "Returning an item with new damage.", proof: "QC check sign-off.", location: "Service Desk" },
                { id: "JLR-R-09", description: "At pickup, have the customer sign a release form confirming they have received their item in satisfactory condition.", priority: "High", riskLevel: "High", consequence: "Future disputes about the quality of the repair.", proof: "Signed release form.", location: "Service Desk" },
                { id: "JLR-R-10", description: "Verify customer ID at pickup for high-value items.", priority: "High", riskLevel: "High", consequence: "Handing over a valuable item to the wrong person.", proof: "Note on release form.", location: "Service Desk" }
            ]
        },
        {
            title: "KYC & AML Compliance",
            department: "Compliance",
            frequency: "Per High-Value Transaction",
            role: "Compliance Officer/Manager",
            summary: "Ensures compliance with anti-money laundering regulations for large transactions.",
            icon: "user-check",
            tasks: [
                { id: "JLR-K-01", description: "For transactions above the legal threshold, collect customer's official photo ID and proof of address.", priority: "High", riskLevel: "High", consequence: "Severe legal and financial penalties for AML non-compliance.", proof: "Scanned copies of KYC documents.", location: "Office" },
                { id: "JLR-K-02", description: "Verify the customer's identity against the provided documents.", priority: "High", riskLevel: "Medium", consequence: "Identity fraud.", proof: "Verification checklist.", location: "Office" },
                { id: "JLR-K-03", description: "Check customer name against relevant government and international sanctions lists.", priority: "High", riskLevel: "High", consequence: "Doing business with sanctioned individuals.", proof: "Screenshot of sanctions list search result.", location: "Office" },
                { id: "JLR-K-04", description: "For large cash transactions, file a Suspicious Transaction Report (STR) if applicable.", priority: "High", riskLevel: "High", consequence: "Failure to report suspicious activity to authorities.", proof: "Copy of filed STR.", location: "Office" },
                { id: "JLR-K-05", description: "Document the source of funds for unusually large transactions.", priority: "Medium", riskLevel: "High", consequence: "Facilitating money laundering.", proof: "Source of funds declaration form.", location: "Office" },
                { id: "JLR-K-06", description: "Maintain all KYC and transaction records for the legally required period.", priority: "High", riskLevel: "Medium", consequence: "Failure to produce records during an audit.", proof: "Secure digital or physical archive.", location: "Office" },
                { id: "JLR-K-07", description: "Train all sales staff to identify red flags for money laundering (e.g., complex payment structures, third-party payments).", priority: "High", riskLevel: "Medium", consequence: "Staff unknowingly facilitate illicit transactions.", proof: "AML training records.", location: "HR/Training" },
                { id: "JLR-K-08", description: "Appoint a designated compliance officer responsible for the AML program.", priority: "High", riskLevel: "High", consequence: "Lack of accountability for compliance.", proof: "Official appointment letter.", location: "HR/Management" },
                { id: "JLR-K-09", description: "Conduct an independent annual audit of the AML program.", priority: "High", riskLevel: "Medium", consequence: "Program becomes outdated or ineffective.", proof: "Annual audit report.", location: "Office" },
                { id: "JLR-K-10", description: "Report any identified suspicious activity to the financial intelligence unit (FIU) promptly.", priority: "High", riskLevel: "High", consequence: "Legal penalties for non-reporting.", proof: "FIU acknowledgement receipt.", location: "Compliance Office" }
            ]
        },
        {
            title: "Store Security & Loss Prevention Audit",
            department: "Security",
            frequency: "Quarterly",
            role: "Area Loss Prevention Manager",
            summary: "A comprehensive audit of all physical and procedural security measures in the store.",
            icon: "building-2",
            tasks: [
                { id: "JLR-A-01", description: "Audit vault access logs and compare against authorised personnel list.", priority: "High", riskLevel: "High", consequence: "Unauthorized vault access.", proof: "Audit report.", location: "Security Office" },
                { id: "JLR-A-02", description: "Test all alarm systems, including vault, showcases, and perimeter alarms.", priority: "High", riskLevel: "High", consequence: "Alarm system failure.", proof: "Alarm test log from vendor.", location: "Security Office" },
                { id: "JLR-A-03", description: "Review CCTV footage storage duration and clarity of images.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to provide evidence for old incidents.", proof: "CCTV system settings screenshot.", location: "CCTV Room" },
                { id: "JLR-A-04", description: "Inspect physical security of display cases (locks, glass type, anchoring).", priority: "High", riskLevel: "High", consequence: "Vulnerable to smash-and-grab.", proof: "Physical inspection checklist.", location: "Sales Floor" },
                { id: "JLR-A-05", description: "Conduct a surprise cash count and float reconciliation.", priority: "Medium", riskLevel: "Medium", consequence: "Identifies cash handling irregularities.", proof: "Surprise audit report.", location: "Cash Desk" },
                { id: "JLR-A-06", description: "Review staff training records for security and emergency procedures.", priority: "High", riskLevel: "Medium", consequence: "Untrained staff are a liability.", proof: "Training matrix.", location: "HR" },
                { id: "JLR-A-07", description: "Audit the key control policy and logs.", priority: "High", riskLevel: "High", consequence: "Lost or unaccounted for keys.", proof: "Key log audit report.", location: "Security Office" },
                { id: "JLR-A-08", description: "Review recent incident reports for patterns and check if corrective actions were taken.", priority: "High", riskLevel: "Medium", consequence: "Failure to learn from past incidents.", proof: "Incident report analysis.", location: "Security Office" },
                { id: "JLR-A-09", description: "Check background verification process for all new hires.", priority: "High", riskLevel: "High", consequence: "Hiring internal threats.", proof: "Review of HR files for background check reports.", location: "HR" },
                { id: "JLR-A-10", description: "Assess the store's opening and closing procedures through direct observation.", priority: "High", riskLevel: "High", consequence: "Procedures not being followed correctly.", proof: "Observation report.", location: "All Areas" }
            ]
        },
    ]
};

const electronics_showroom_pack: PremiumPack = {
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
    checklists: [
         {
            title: "Daily Store Opening & Presentation",
            department: "Operations",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Ensures the showroom is safe, secure, and visually appealing before opening.",
            icon: "key-round",
            tasks: [
                { id: "ES-SO-01", description: "Deactivate store alarm and perform a full security sweep of the premises.", priority: "High", riskLevel: "High", consequence: "Failure to detect overnight breach or safety hazard.", proof: "Alarm system log and manager's opening checklist.", location: "Entire Store" },
                { id: "ES-SO-02", description: "Power on all demo units, digital displays, and ensure they are running correct content.", priority: "High", riskLevel: "Low", consequence: "Poor customer experience, missed marketing.", proof: "Photo of main display wall.", location: "Sales Floor" },
                { id: "ES-SO-03", description: "Verify all POS terminals are online and payment devices are functional.", priority: "High", riskLevel: "High", consequence: "Inability to transact sales, customer frustration.", proof: "Test transaction receipt from each POS.", location: "Cash/Checkout Area" },
                { id: "ES-SO-04", description: "Check store cleanliness, including screens, surfaces, and floors.", priority: "Medium", riskLevel: "Low", consequence: "Negative perception of brand quality.", proof: "Manager's visual inspection sign-off.", location: "Sales Floor" },
                { id: "ES-SO-05", description: "Ensure all price tags and promotional offers are accurate and up-to-date.", priority: "High", riskLevel: "Medium", consequence: "Pricing disputes with customers, legal non-compliance.", proof: "Spot check of 10 random items against master price list.", location: "Sales Floor" },
                { id: "ES-SO-06", description: "Conduct a team briefing on daily targets, promotions, and new products.", priority: "High", riskLevel: "Low", consequence: "Misaligned team, poor sales performance.", proof: "Briefing sheet.", location: "Staff Area" },
                { id: "ES-SO-07", description: "Check that all security tethers and locks on high-value demo units are secure.", priority: "High", riskLevel: "High", consequence: "High risk of theft for expensive demo items.", proof: "Physical check of 10 high-value items.", location: "Sales Floor" },
                { id: "ES-SO-08", description: "Restock any depleted accessory displays (e.g., chargers, cases).", priority: "Low", riskLevel: "Low", consequence: "Missed incremental sales.", proof: "Visual check.", location: "Accessory Section" },
                { id: "ES-SO-09", description: "Ensure service desk is ready for customer inquiries and repairs.", priority: "Medium", riskLevel: "Low", consequence: "Poor after-sales service experience.", proof: "Service desk readiness checklist.", location: "Service Desk" },
                { id: "ES-SO-10", description: "Verify float cash at each register.", priority: "High", riskLevel: "Medium", consequence: "Cash handling errors.", proof: "Signed float verification forms.", location: "Cash/Checkout Area" }
            ]
        },
        {
            title: "Serialized Inventory & Asset Protection",
            department: "Loss Prevention",
            frequency: "Weekly",
            role: "Asset Protection Lead",
            summary: "Manages high-value serialized inventory to prevent theft and fraud.",
            icon: "barcode",
            tasks: [
                { id: "ES-AP-01", description: "Conduct a blind cycle count of a specific high-value category (e.g., flagship phones, laptops).", priority: "High", riskLevel: "High", consequence: "Unidentified stock discrepancies, masking potential theft.", proof: "Signed count sheet reconciled against system data.", location: "Stockroom/Sales Floor" },
                { id: "ES-AP-02", description: "Audit all new product receipts to ensure serial numbers are correctly logged in the inventory system.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate stock records from the point of entry.", proof: "Sample audit of delivery notes vs. system entries.", location: "Receiving Area" },
                { id: "ES-AP-03", description: "Review CCTV footage for any suspicious behavior near high-value displays or the stockroom.", priority: "Medium", riskLevel: "Medium", consequence: "Missed indicators of organized retail crime or internal collusion.", proof: "CCTV review log with timestamps.", location: "Security Office" },
                { id: "ES-AP-04", description: "Test functionality of all display item security alarms and tethers.", priority: "High", riskLevel: "High", consequence: "Theft of expensive display models.", proof: "Log of tested alarms.", location: "Sales Floor" },
                { id: "ES-AP-05", description: "Audit the returns process for potential fraud (e.g., returning a different, older item).", priority: "High", riskLevel: "High", consequence: "Loss through fraudulent returns.", proof: "Cross-verification of returned item serial number against original sales record.", location: "Service Desk" },
                { id: "ES-AP-06", description: "Ensure stockroom access is strictly controlled and logged.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized access leading to internal theft.", proof: "Review of stockroom access logs.", location: "Stockroom" },
                { id: "ES-AP-07", description: "Verify that empty boxes for high-value items are flattened and disposed of securely.", priority: "Medium", riskLevel: "High", consequence: "Thieves using empty boxes to carry out stolen goods (box stuffing).", proof: "CCTV footage of disposal area.", location: "Waste Disposal Area" },
                { id: "ES-AP-08", description: "Check that high-value items in the stockroom are stored in a secure, caged area.", priority: "High", riskLevel: "High", consequence: "Easy access for internal theft.", proof: "Photo of secured cage.", location: "Stockroom" },
                { id: "ES-AP-09", description: "Investigate all significant inventory discrepancies immediately.", priority: "High", riskLevel: "High", consequence: "Theft goes unaddressed, leading to further losses.", proof: "Incident report for each discrepancy.", location: "Security Office" },
                { id: "ES-AP-10", description: "Perform random staff bag checks as per company policy.", priority: "Medium", riskLevel: "Medium", consequence: "Deterrent against internal theft.", proof: "Bag check log.", location: "Staff Exit" }
            ]
        },
        {
            title: "Customer Service & Repair Workflow",
            department: "Service",
            frequency: "Per Interaction",
            role: "Service Technician/Advisor",
            summary: "Ensures a secure and trustworthy process for handling customer devices for repair.",
            icon: "wrench",
            tasks: [
                { id: "ES-CS-01", description: "Log customer and device details (Model, Serial, IMEI) into the service system.", priority: "High", riskLevel: "High", consequence: "Inability to track customer device, potential for loss or swap.", proof: "Service job card/system entry.", location: "Service Desk" },
                { id: "ES-CS-02", description: "Photograph the device's physical condition at intake, noting all existing scratches or damage.", priority: "High", riskLevel: "High", consequence: "Disputes with customer over pre-existing damage.", proof: "Dated photos linked to the job card.", location: "Service Desk" },
                { id: "ES-CS-03", description: "Have the customer sign the intake form, acknowledging the device's condition and the repair terms.", priority: "High", riskLevel: "Medium", consequence: "Legal disputes over repair scope or liability.", proof: "Signed customer intake form.", location: "Service Desk" },
                { id: "ES-CS-04", description: "Backup customer data where possible and with explicit written consent.", priority: "High", riskLevel: "High", consequence: "Data loss, severe customer dissatisfaction, data privacy breach.", proof: "Signed data backup consent form.", location: "Service Desk" },
                { id: "ES-CS-05", description: "Place the device in a sealed, labeled, and tamper-evident bag.", priority: "High", riskLevel: "Medium", consequence: "Device loss or mix-up within the workshop.", proof: "Visual check.", location: "Service Desk" },
                { id: "ES-CS-06", description: "Upon repair completion, perform a full Quality Control check of all functions.", priority: "High", riskLevel: "Medium", consequence: "Returning a device that is still faulty, repeat repairs.", proof: "Signed QC checklist for the device.", location: "Workshop" },
                { id: "ES-CS-07", description: "Wipe any stored customer data from service machines after repair is complete.", priority: "High", riskLevel: "High", consequence: "Massive data breach from discarded hardware.", proof: "Data wipe confirmation log.", location: "Workshop" },
                { id: "ES-CS-08", description: "At pickup, verify the customer's identity against the intake record.", priority: "High", riskLevel: "High", consequence: "Handing over a device to the wrong person.", proof: "ID verification note on job card.", location: "Service Desk" },
                { id: "ES-CS-09", description: "Have the customer test the device and sign a satisfaction and release form.", priority: "High", riskLevel: "Medium", consequence: "Future disputes about the quality of the repair.", proof: "Signed release form.", location: "Service Desk" },
                { id: "ES-CS-10", description: "Securely store all unclaimed devices and follow up with customers.", priority: "Medium", riskLevel: "Low", consequence: "Buildup of unclaimed property, liability.", proof: "Unclaimed device log.", location: "Secure Storage" }
            ]
        },
        {
            title: "E-Waste & Environmental Compliance",
            department: "Compliance/Operations",
            frequency: "Monthly",
            role: "Compliance Manager",
            summary: "Ensures all electronic waste is handled and disposed of according to environmental regulations.",
            icon: "recycle",
            tasks: [
                { id: "ES-EW-01", description: "Ensure all e-waste (e.g., dead batteries, broken devices) is stored in designated, labeled containers.", priority: "High", riskLevel: "Medium", consequence: "Environmental fines, safety hazards.", proof: "Photo of designated e-waste bins.", location: "Stockroom/Waste Area" },
                { id: "ES-EW-02", description: "Arrange for e-waste collection only with government-authorized recycling partners.", priority: "High", riskLevel: "High", consequence: "Illegal dumping, severe legal penalties.", proof: "Valid contract with authorized recycler.", location: "Office" },
                { id: "ES-EW-03", description: "Maintain a log of all e-waste collected, including date, type, weight, and vendor.", priority: "High", riskLevel: "Medium", consequence: "Inability to prove compliant disposal during an audit.", proof: "E-waste disposal manifest/logbook.", location: "Office" },
                { id: "ES-EW-04", description: "Obtain and file certificates of destruction/recycling from the vendor for every pickup.", priority: "High", riskLevel: "High", consequence: "Lack of legal proof of proper disposal.", proof: "File of recycling certificates.", location: "Office" },
                { id: "ES-EW-05", description: "Train staff on identifying and segregating e-waste from general waste.", priority: "Medium", riskLevel: "Low", consequence: "E-waste ending up in landfills.", proof: "Training attendance log.", location: "Staff Training" },
                { id: "ES-EW-06", description: "Inspect battery disposal bins to ensure no leaking or damaged batteries are creating a fire hazard.", priority: "High", riskLevel: "High", consequence: "Fire from lithium-ion batteries.", proof: "Weekly inspection log.", location: "Waste Area" },
                { id: "ES-EW-07", description: "Ensure any customer data on devices destined for e-waste is securely wiped or the device is destroyed.", priority: "High", riskLevel: "High", consequence: "Massive data breach from discarded hardware.", proof: "Data destruction certificates or logs.", location: "Service/IT Dept" },
                { id: "ES-EW-08", description: "Keep up-to-date with any changes in e-waste management rules and regulations.", priority: "Medium", riskLevel: "Medium", consequence: "Falling out of compliance with new laws.", proof: "Record of regulatory update reviews.", location: "Compliance Office" },
                { id: "ES-EW-09", description: "Clearly label e-waste collection points for customers (e.g., battery drop-off).", priority: "Low", riskLevel: "Low", consequence: "Poor customer participation in take-back schemes.", proof: "Photo of customer-facing bins.", location: "Sales Floor" },
                { id: "ES-EW-10", description: "Review recycler's compliance documents and licenses annually.", priority: "High", riskLevel: "Medium", consequence: "Partnering with a non-compliant vendor.", proof: "Annual vendor review file.", location: "Compliance Office" }
            ]
        }
    ]
};

const supermarket_grocery_retail_pack: PremiumPack = {
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
    checklists: [
        {
            title: "Fresh Produce Quality Control",
            department: "Fresh Produce",
            frequency: "Daily",
            role: "Department Manager",
            summary: "Ensures freshness, quality, and safety of fruits and vegetables.",
            icon: "sprout",
            tasks: [
                { id: "SGR-FP-01", description: "Check temperature of produce display cases and back coolers.", priority: "High", riskLevel: "High", consequence: "Rapid spoilage, microbial growth.", proof: "Temperature log.", location: "Display/Coolers" },
                { id: "SGR-FP-02", description: "Cull and log any spoiled, bruised, or wilted produce from displays.", priority: "High", riskLevel: "Medium", consequence: "Poor customer perception, spreads spoilage.", proof: "Wastage log.", location: "Sales Floor" },
                { id: "SGR-FP-03", description: "Rotate stock on display using FIFO (First-In, First-Out).", priority: "High", riskLevel: "Medium", consequence: "Increased wastage.", proof: "Visual check.", location: "Sales Floor" },
                { id: "SGR-FP-04", description: "Ensure misting systems (if any) are functional and timed correctly.", priority: "Medium", riskLevel: "Low", consequence: "Dehydration of leafy greens.", proof: "System check log.", location: "Sales Floor" },
                { id: "SGR-FP-05", description: "Check country of origin and organic labeling for accuracy.", priority: "Medium", riskLevel: "Medium", consequence: "Misleading customers, regulatory non-compliance.", proof: "Label audit.", location: "Sales Floor" },
                { id: "SGR-FP-06", description: "Clean and sanitize all produce prep areas and cutting boards.", priority: "High", riskLevel: "High", consequence: "Cross-contamination, foodborne illness.", proof: "Sanitization log.", location: "Prep Area" },
                { id: "SGR-FP-07", description: "Verify that 'ready-to-eat' cut fruits are within their 'use by' date.", priority: "High", riskLevel: "High", consequence: "Food safety risk.", proof: "Date check log.", location: "Grab-and-Go Section" },
                { id: "SGR-FP-08", description: "Ensure weighing scales are calibrated and certified.", priority: "High", riskLevel: "High", consequence: "Incorrect pricing, legal metrology violations.", proof: "Calibration sticker/certificate.", location: "Produce Section" },
                { id: "SGR-FP-09", description: "Inspect incoming produce deliveries for quality, temperature, and pests.", priority: "High", riskLevel: "High", consequence: "Accepting poor quality or unsafe produce.", proof: "Inbound QC log.", location: "Receiving Dock" },
                { id: "SGR-FP-10", description: "Manage stock levels to prevent overstocking and stockouts of key items.", priority: "Medium", riskLevel: "Medium", consequence: "Lost sales or high wastage.", proof: "Inventory system review.", location: "Office" }
            ]
        },
        {
            title: "Meat & Poultry Counter (HACCP)",
            department: "Butchery/Meat",
            frequency: "Daily",
            role: "Butcher/Dept. Manager",
            summary: "Strict HACCP-based controls for handling high-risk meat and poultry products.",
            icon: "drumstick",
            tasks: [
                { id: "SGR-MP-01", description: "Record temperatures of all meat display cases, walk-in coolers, and freezers.", priority: "High", riskLevel: "High", consequence: "Catastrophic food safety failure, E. coli/Salmonella risk.", proof: "Temperature log.", location: "All Cold Storage" },
                { id: "SGR-MP-02", description: "Sanitize all grinders, slicers, knives, and cutting boards before and after use.", priority: "High", riskLevel: "High", consequence: "Cross-contamination between different meats.", proof: "Sanitization log.", location: "Prep Area" },
                { id: "SGR-MP-03", description: "Ensure strict separation between raw poultry, red meat, and cooked meats.", priority: "High", riskLevel: "High", consequence: "Cross-contamination.", proof: "Photo of cooler storage.", location: "Coolers/Display" },
                { id: "SGR-MP-04", description: "Check 'use by' dates on all pre-packaged and in-house packaged meats.", priority: "High", riskLevel: "High", consequence: "Selling expired, unsafe product.", proof: "Date check log.", location: "Display Cases" },
                { id: "SGR-MP-05", description: "Verify cleanliness and sanitation of the entire department, including floors and drains.", priority: "High", riskLevel: "Medium", consequence: "Health code violations, pest attraction.", proof: "Cleaning schedule sign-off.", location: "Entire Department" },
                { id: "SGR-MP-06", description: "Ensure staff are wearing clean uniforms, gloves, and hair restraints.", priority: "High", riskLevel: "Medium", consequence: "Contamination of product.", proof: "Manager's visual check.", location: "Department" },
                { id: "SGR-MP-07", description: "Log all incoming meat deliveries, checking for temperature, quality, and documentation.", priority: "High", riskLevel: "High", consequence: "Accepting unsafe meat.", proof: "Receiving log.", location: "Receiving Dock" },
                { id: "SGR-MP-08", description: "Calibrate meat thermometers weekly.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate safety checks.", proof: "Calibration log.", location: "Department" },
                { id: "SGR-MP-09", description: "Ensure proper labeling of all in-house ground or cut meats with date and time.", priority: "High", riskLevel: "Medium", consequence: "Inability to track freshness.", proof: "Visual audit of labels.", location: "Display Cases" },
                { id: "SGR-MP-10", description: "Dispose of all meat scraps and waste in designated, sealed bins.", priority: "Medium", riskLevel: "Low", consequence: "Pest and odor issues.", proof: "Visual check.", location: "Waste Area" }
            ]
        },
        {
            title: "Dairy & Cold Chain Management",
            department: "Dairy/Chilled Goods",
            frequency: "Daily",
            role: "Department Staff",
            summary: "Ensures dairy and other chilled products are kept at safe temperatures from receiving to sale.",
            icon: "milk",
            tasks: [
                { id: "SGR-DC-01", description: "Check and log temperatures of all dairy display cases and walk-in coolers twice daily.", priority: "High", riskLevel: "High", consequence: "Product spoilage, foodborne illness.", proof: "Temperature log.", location: "Sales Floor/Coolers" },
                { id: "SGR-DC-02", description: "Inspect incoming dairy deliveries for correct temperature (below 5°C/41°F).", priority: "High", riskLevel: "High", consequence: "Accepting compromised product.", proof: "Receiving temperature log.", location: "Receiving Dock" },
                { id: "SGR-DC-03", description: "Move dairy deliveries to cold storage immediately upon receipt.", priority: "High", riskLevel: "High", consequence: "Breaking the cold chain.", proof: "CCTV review of receiving.", location: "Receiving Dock" },
                { id: "SGR-DC-04", description: "Rotate all products (milk, yogurt, cheese) using FIFO principles.", priority: "High", riskLevel: "Medium", consequence: "Increased wastage from expired stock.", proof: "Date check during restocking.", location: "Display Cases" },
                { id: "SGR-DC-05", description: "Perform a daily check for and remove any expired or damaged products.", priority: "High", riskLevel: "High", consequence: "Selling unsafe or poor-quality items.", proof: "Wastage and expired stock log.", location: "Display Cases" },
                { id: "SGR-DC-06", description: "Clean shelves and display cases of any spills or leaks.", priority: "Medium", riskLevel: "Low", consequence: "Unsanitary appearance, pest attraction.", proof: "Cleaning log.", location: "Sales Floor" },
                { id: "SGR-DC-07", description: "Ensure cooler doors are closing properly and seals are intact.", priority: "Medium", riskLevel: "Medium", consequence: "Temperature fluctuations, high energy costs.", proof: "Weekly maintenance check.", location: "Sales Floor/Coolers" },
                { id: "SGR-DC-08", description: "Check for any items left by customers outside of refrigerated areas and dispose of them.", priority: "Medium", riskLevel: "High", consequence: "Unsafe product being restocked.", proof: "Log of discarded items.", location: "Throughout Store" },
                { id: "SGR-DC-09", description: "Verify that thermometers inside coolers are clearly visible and functional.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to monitor temperatures.", proof: "Visual check.", location: "Display Cases/Coolers" },
                { id: "SGR-DC-10", description: "Ensure backup power is functional for all cold storage units.", priority: "High", riskLevel: "High", consequence: "Total loss of inventory during a power outage.", proof: "Generator test log.", location: "Engineering" }
            ]
        },
        {
            title: "Store Hygiene & Sanitation",
            department: "Operations/Maintenance",
            frequency: "Daily",
            role: "Cleaning Crew Supervisor",
            summary: "Maintains a clean and safe shopping environment for customers and staff.",
            icon: "sparkles",
            tasks: [
                { id: "SGR-HS-01", description: "Sweep and mop all floors before opening.", priority: "High", riskLevel: "Low", consequence: "Dirty store, poor impression.", proof: "Cleaning log.", location: "All Floor Areas" },
                { id: "SGR-HS-02", description: "Clean and sanitize all shopping cart and basket handles.", priority: "High", riskLevel: "Medium", consequence: "Spread of germs.", proof: "Sanitization log.", location: "Entrance" },
                { id: "SGR-HS-03", description: "Clean and sanitize all customer restrooms hourly.", priority: "High", riskLevel: "High", consequence: "Customer complaints, major hygiene risk.", proof: "Restroom cleaning checklist.", location: "Restrooms" },
                { id: "SGR-HS-04", description: "Perform 'spill patrols' every hour to check for and clean up any spills.", priority: "High", riskLevel: "High", consequence: "Slip and fall accidents, lawsuits.", proof: "Spill patrol log.", location: "All Aisles" },
                { id: "SGR-HS-05", description: "Wipe down checkout counters and payment terminals regularly.", priority: "Medium", riskLevel: "Low", consequence: "Spread of germs.", proof: "Cleaning log.", location: "Checkout Area" },
                { id: "SGR-HS-06", description: "Empty all trash bins throughout the store when they are 3/4 full.", priority: "Medium", riskLevel: "Low", consequence: "Overflowing trash, poor appearance.", proof: "Visual check.", location: "All Areas" },
                { id: "SGR-HS-07", description: "Clean all glass doors and windows at entrance.", priority: "Medium", riskLevel: "Low", consequence: "Dirty, unprofessional appearance.", proof: "Cleaning log.", location: "Entrance" },
                { id: "SGR-HS-08", description: "Check for and report any pest activity.", priority: "High", riskLevel: "High", consequence: "Infestation.", proof: "Pest sighting log.", location: "All Areas" },
                { id: "SGR-HS-09", description: "Ensure cleaning supplies are correctly stored and labeled.", priority: "High", riskLevel: "Medium", consequence: "Chemical hazards.", proof: "Photo of janitor's closet.", location: "Janitor Closet" },
                { id: "SGR-HS-10", description: "Perform a deep clean of one store section each week as per schedule.", priority: "Medium", riskLevel: "Low", consequence: "Gradual decline in overall store cleanliness.", proof: "Deep cleaning schedule sign-off.", location: "Varies Weekly" }
            ]
        },
        {
            title: "Checkout & Cash Management",
            department: "Front End",
            frequency: "Per Shift",
            role: "Head Cashier/Supervisor",
            summary: "Ensures accuracy, security, and efficiency at the point of sale.",
            icon: "dollar-sign",
            tasks: [
                { id: "SGR-CM-01", description: "Verify cash float for each register at the start of the shift.", priority: "High", riskLevel: "High", consequence: "Cash discrepancies.", proof: "Signed float verification slip.", location: "Cash Office" },
                { id: "SGR-CM-02", description: "Reconcile cash, card, and digital payments for each register at end of shift.", priority: "High", riskLevel: "High", consequence: "Unidentified cash loss.", proof: "End-of-shift report signed by cashier and supervisor.", location: "Cash Office" },
                { id: "SGR-CM-03", description: "Perform random cash drawer audits during the day.", priority: "Medium", riskLevel: "Medium", consequence: "Deters internal theft.", proof: "Surprise audit log.", location: "Checkout Area" },
                { id: "SGR-CM-04", description: "Securely transport excess cash from registers to the cash office ('cash lifts').", priority: "High", riskLevel: "High", consequence: "Robbery risk.", proof: "Cash lift log.", location: "Checkout/Cash Office" },
                { id: "SGR-CM-05", description: "Check functionality of UV lamps for counterfeit detection.", priority: "High", riskLevel: "Medium", consequence: "Accepting counterfeit notes.", proof: "Daily check log.", location: "Cash Office" },
                { id: "SGR-CM-06", description: "Ensure cashiers are following protocols for age-restricted sales (e.g., tobacco).", priority: "High", riskLevel: "High", consequence: "Legal violations, fines.", proof: "CCTV audit or manager observation.", location: "Checkout Area" },
                { id: "SGR-CM-07", description: "Review 'voids' and 'no sale' reports daily for suspicious activity.", priority: "High", riskLevel: "High", consequence: "Common methods for internal theft.", proof: "Daily POS exception report with manager's signature.", location: "Cash Office" },
                { id: "SGR-CM-08", description: "Keep checkout areas clean and organized.", priority: "Low", riskLevel: "Low", consequence: "Slows down transactions, poor impression.", proof: "Visual check.", location: "Checkout Area" },
                { id: "SGR-CM-09", description: "Restock bags, receipt paper, and other supplies at each register.", priority: "Medium", riskLevel: "Low", consequence: "Transaction delays.", proof: "Visual check at shift change.", location: "Checkout Area" },
                { id: "SGR-CM-10", description: "Securely store and log all coupons and vouchers collected.", priority: "Medium", riskLevel: "Medium", consequence: "Coupon fraud.", proof: "Coupon reconciliation log.", location: "Cash Office" }
            ]
        }
    ]
};

const facility_management_blueprint: PremiumPack = {
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
    checklists: [
        {
            "title": "Daily Facility Walkthrough",
            "department": "Facilities",
            "frequency": "Daily",
            "role": "Facility Manager",
            "summary": "A proactive daily patrol to identify and rectify issues before they become major problems.",
            "icon": "clipboard-check",
            "tasks": [
                { "id": "FMB-DFW-01", "description": "Check all common areas (lobbies, receptions) for cleanliness and order.", "priority": "High", "riskLevel": "Low", "consequence": "Negative impression on visitors and employees.", "proof": "Walkthrough log." },
                { "id": "FMB-DFW-02", "description": "Inspect all restrooms for cleanliness, functionality, and stock levels.", "priority": "High", "riskLevel": "Medium", "consequence": "Employee complaints, hygiene issues.", "proof": "Restroom inspection log." },
                { "id": "FMB-DFW-03", "description": "Verify temperature and air quality in all zones are comfortable.", "priority": "Medium", "riskLevel": "Low", "consequence": "Reduced employee productivity and comfort.", "proof": "BMS (Building Management System) reading." },
                { "id": "FMB-DFW-04", "description": "Check for any safety hazards (e.g., slip/trip hazards, blocked fire exits).", "priority": "High", "riskLevel": "High", "consequence": "Employee/visitor injury, legal liability.", "proof": "Hazard report log." },
                { "id": "FMB-DFW-05", "description": "Inspect exterior of the building for cleanliness, damage, or security concerns.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Poor curb appeal, potential security breaches.", "proof": "Exterior inspection log." },
                { "id": "FMB-DFW-06", "description": "Check functionality of a random sample of access control doors.", "priority": "High", "riskLevel": "Medium", "consequence": "Security system failure.", "proof": "Access control system event log." },
                { "id": "FMB-DFW-07", "description": "Ensure all meeting rooms are tidy and equipment (projectors, phones) is functional.", "priority": "Medium", "riskLevel": "Low", "consequence": "Meeting disruptions, lost productivity.", "proof": "Meeting room checklist." },
                { "id": "FMB-DFW-08", "description": "Check pantries/cafeterias for cleanliness and functioning appliances.", "priority": "Medium", "riskLevel": "Low", "consequence": "Employee dissatisfaction, hygiene risks.", "proof": "Pantry inspection log." },
                { "id": "FMB-DFW-09", "description": "Raise work orders for all identified issues in the CMMS/ticketing system.", "priority": "High", "riskLevel": "Low", "consequence": "Issues are not tracked and resolved.", "proof": "Copies of new work orders." },
                { "id": "FMB-DFW-10", "description": "Follow up on critical open work orders from the previous day.", "priority": "High", "riskLevel": "Medium", "consequence": "Critical failures are not resolved promptly.", "proof": "Updated notes in CMMS." }
            ]
        },
        {
            "title": "Preventive Maintenance (MEP)",
            "department": "Engineering",
            "frequency": "Weekly/Monthly",
            "role": "Chief Engineer",
            "summary": "A scheduled checklist for maintaining critical Mechanical, Electrical, and Plumbing systems.",
            "icon": "wrench",
            "tasks": [
                { "id": "FMB-MEP-01", "description": "HVAC: Inspect and clean/replace filters on all Air Handling Units (AHUs).", "priority": "High", "riskLevel": "Medium", "consequence": "Poor air quality, increased energy costs, system failure.", "proof": "Signed maintenance log for each AHU." },
                { "id": "FMB-MEP-02", "description": "Electrical: Test backup generator under load for at least 30 minutes.", "priority": "High", "riskLevel": "High", "consequence": "Business shutdown during a power outage.", "proof": "Generator test log with load readings." },
                { "id": "FMB-MEP-03", "description": "Electrical: Test UPS systems and verify battery health.", "priority": "High", "riskLevel": "High", "consequence": "Data corruption/loss in data centers during power flicker.", "proof": "UPS test report." },
                { "id": "FMB-MEP-04", "description": "Plumbing: Check and test all water pumps (booster, transfer, sump).", "priority": "Medium", "riskLevel": "Medium", "consequence": "No water supply, flooding.", "proof": "Pump test log." },
                { "id": "FMB-MEP-05", "description": "Fire Safety: Test a sample of fire alarm call points, sprinklers (flow switch), and smoke detectors.", "priority": "High", "riskLevel": "High", "consequence": "Fire detection/suppression system failure.", "proof": "Fire alarm test report." },
                { "id": "FMB-MEP-06", "description": "Lifts: Perform a monthly safety and performance check (leveling, doors, emergency phone).", "priority": "High", "riskLevel": "High", "consequence": "Entrapment, injury.", "proof": "Internal lift check log." },
                { "id": "FMB-MEP-07", "description": "Water Treatment: Check WTP/STP operation and water quality reports.", "priority": "High", "riskLevel": "Medium", "consequence": "Environmental non-compliance, unsafe water.", "proof": "Water quality test reports." },
                { "id": "FMB-MEP-08", "description": "Electrical: Conduct thermal imaging of main electrical panels to find hotspots (Quarterly).", "priority": "High", "riskLevel": "High", "consequence": "Electrical fire.", "proof": "Thermal imaging report." },
                { "id": "FMB-MEP-09", "description": "Building Management System: Verify all critical system alarms are reporting correctly to the BMS.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Silent failures of critical equipment.", "proof": "BMS alarm test log." },
                { "id": "FMB-MEP-10", "description": "Review and update the schedule of all OEM/vendor Annual Maintenance Contracts (AMCs).", "priority": "High", "riskLevel": "Low", "consequence": "Lapse in critical equipment servicing.", "proof": "AMC tracker spreadsheet." }
            ]
        },
        {
            "title": "Housekeeping & Hygiene Audit",
            "department": "Soft Services",
            "frequency": "Weekly",
            "role": "Housekeeping Manager",
            "summary": "Ensures the highest standards of cleanliness and hygiene across the facility.",
            "icon": "sparkles",
            "tasks": [
                { "id": "FMB-HHA-01", "description": "Restroom Audit: Check for cleanliness, odors, fixture functionality, and stock levels.", "priority": "High", "riskLevel": "Medium", "consequence": "Major source of employee complaints.", "proof": "Scored restroom audit form." },
                { "id": "FMB-HHA-02", "description": "Workstation Area: Check for dust on surfaces, clean carpets/floors, and empty bins.", "priority": "Medium", "riskLevel": "Low", "consequence": "Untidy work environment.", "proof": "Zone inspection checklist." },
                { "id": "FMB-HHA-03", "description": "Pantry/Cafeteria: Check for food debris, clean appliances (microwaves, etc.), and sanitized tables.", "priority": "High", "riskLevel": "Medium", "consequence": "Hygiene risk, pest attraction.", "proof": "Pantry audit form." },
                { "id": "FMB-HHA-04", "description": "Glass & Facade: Check for clean windows and facade, especially in public-facing areas.", "priority": "Low", "riskLevel": "Low", "consequence": "Poor corporate image.", "proof": "Visual inspection." },
                { "id": "FMB-HHA-05", "description": "Waste Management: Check for proper segregation and timely disposal of waste.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Environmental non-compliance, odors.", "proof": "Waste area inspection log." },
                { "id": "FMB-HHA-06", "description": "Pest Control: Review pest control logbook and check bait stations.", "priority": "High", "riskLevel": "High", "consequence": "Infestation.", "proof": "Pest control vendor's service report." },
                { "id": "FMB-HHA-07", "description": "Stock Check: Verify inventory of cleaning supplies and consumables.", "priority": "Medium", "riskLevel": "Low", "consequence": "Running out of essential supplies.", "proof": "Stock register." },
                { "id": "FMB-HHA-08", "description": "Staff Uniform & PPE: Check that all housekeeping staff are in clean uniforms and using correct PPE.", "priority": "Medium", "riskLevel": "Low", "consequence": "Unprofessionalism, safety risk to staff.", "proof": "Staff inspection notes." },
                { "id": "FMB-HHA-09", "description": "Review cleaning equipment for functionality and cleanliness.", "priority": "Medium", "riskLevel": "Low", "consequence": "Ineffective cleaning.", "proof": "Equipment check log." },
                { "id": "FMB-HHA-10", "description": "Follow up on any housekeeping-related complaints from the previous week.", "priority": "High", "riskLevel": "Medium", "consequence": "Recurring service failures.", "proof": "Complaint tracker update." }
            ]
        },
        {
            "title": "Physical Security & Access Control",
            "department": "Security",
            "frequency": "Weekly",
            "role": "Security Manager",
            "summary": "An audit to ensure the physical security of the facility is robust and uncompromised.",
            "icon": "shield-check",
            "tasks": [
                { "id": "FMB-PSA-01", "description": "Perimeter Audit: Walk the entire facility perimeter to check for breaches in fences/walls.", "priority": "High", "riskLevel": "High", "consequence": "Unauthorized entry.", "proof": "Perimeter patrol log." },
                { "id": "FMB-PSA-02", "description": "CCTV Audit: Verify all cameras are recording, have clear views, and have adequate storage.", "priority": "High", "riskLevel": "High", "consequence": "Inability to investigate incidents.", "proof": "CCTV health check report." },
                { "id": "FMB-PSA-03", "description": "Access Control Audit: Review access logs for sensitive areas (e.g., server rooms) for unauthorized entries.", "priority": "High", "riskLevel": "High", "consequence": "Data theft, sabotage.", "proof": "Access control log audit report." },
                { "id": "FMB-PSA-04", "description": "Visitor Management: Audit visitor logs to ensure all visitors were signed in, issued a badge, and escorted.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Unauthorized individuals on premises.", "proof": "Sample audit of visitor logs." },
                { "id": "FMB-PSA-05", "description": "Key Management: Audit the key register to ensure all keys are accounted for.", "priority": "High", "riskLevel": "High", "consequence": "Lost keys can compromise entire facility.", "proof": "Key register audit sign-off." },
                { "id": "FMB-PSA-06", "description": "Lighting Check: Conduct a nighttime audit of all exterior and parking lot lighting.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Dark spots provide cover for criminals.", "proof": "Night patrol report." },
                { "id": "FMB-PSA-07", "description": "Alarm System Test: Test a sample of door alarms, motion detectors, and panic buttons.", "priority": "High", "riskLevel": "High", "consequence": "Alarm failure during a real incident.", "proof": "Alarm test log." },
                { "id": "FMB-PSA-08", "description": "Guard Tour Verification: Check that guard patrol tours are being completed on schedule.", "priority": "High", "riskLevel": "Medium", "consequence": "Gaps in security coverage.", "proof": "Guard tour system report." },
                { "id": "FMB-PSA-09", "description": "Review incident reports from the past week for any trends or required actions.", "priority": "Medium", "riskLevel": "Low", "consequence": "Failure to learn from security incidents.", "proof": "Incident report summary." },
                { "id": "FMB-PSA-10", "description": "Check that security staff have up-to-date licenses and training certifications.", "priority": "High", "riskLevel": "Medium", "consequence": "Non-compliant or untrained security force.", "proof": "Review of HR training records." }
            ]
        },
        {
            "title": "Vendor & Contract Management",
            "department": "Administration",
            "frequency": "Monthly",
            "role": "Admin Manager",
            "summary": "Ensures all vendors are meeting their SLAs and contracts are up-to-date.",
            "icon": "handshake",
            "tasks": [
                { "id": "FMB-VCM-01", "description": "Review performance of critical vendors (e.g., housekeeping, security, M&E) against their SLAs.", "priority": "High", "riskLevel": "Medium", "consequence": "Paying for sub-par service.", "proof": "Monthly vendor performance scorecard." },
                { "id": "FMB-VCM-02", "description": "Verify all vendor invoices against work orders or service reports before processing payment.", "priority": "High", "riskLevel": "High", "consequence": "Paying for work not done or over-billing.", "proof": "Signed-off invoices." },
                { "id": "FMB-VCM-03", "description": "Ensure all vendors have submitted required compliance documents (e.g., insurance, licenses).", "priority": "High", "riskLevel": "High", "consequence": "Liability risk from non-compliant vendors.", "proof": "Vendor compliance file audit." },
                { "id": "FMB-VCM-04", "description": "Track all contract renewal dates and start renewal process 90 days in advance.", "priority": "High", "riskLevel": "Medium", "consequence": "Lapse in critical services.", "proof": "Contract management tracker." },
                { "id": "FMB-VCM-05", "description": "Conduct a monthly meeting with key vendor account managers.", "priority": "Medium", "riskLevel": "Low", "consequence": "Poor relationship, unresolved issues fester.", "proof": "Minutes of meeting." },
                { "id": "FMB-VCM-06", "description": "Issue formal non-conformance reports for any SLA failures.", "priority": "Medium", "riskLevel": "Medium", "consequence": "SLA failures are not officially documented and penalized.", "proof": "Copies of non-conformance reports." },
                { "id": "FMB-VCM-07", "description": "Onboard new vendors with a formal induction on site rules, safety, and procedures.", "priority": "High", "riskLevel": "Medium", "consequence": "Vendors creating safety or security risks.", "proof": "Signed vendor induction form." },
                { "id": "FMB-VCM-08", "description": "Review and approve all vendor work permits before allowing work to start.", "priority": "High", "riskLevel": "High", "consequence": "Unsafe or disruptive work being carried out.", "proof": "Signed work permit." }
            ]
        }
    ]
};

const corporate_legal_compliance_starter_kit: PremiumPack = {
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
    checklists: [
        {
            "title": "Statutory Filing Calendar",
            "department": "Legal/Compliance",
            "frequency": "Monthly",
            "role": "Compliance Officer",
            "summary": "Tracks all mandatory government filings to ensure deadlines are never missed.",
            "icon": "calendar-days",
            "tasks": [
                { "id": "CLC-SFC-01", "description": "Update calendar with all ROC filing deadlines for the quarter.", "priority": "High", "riskLevel": "High", "consequence": "Penalties, company strike-off.", "proof": "Updated calendar file." },
                { "id": "CLC-SFC-02", "description": "Update calendar with all Income Tax filing deadlines (TDS, Advance Tax, etc.).", "priority": "High", "riskLevel": "High", "consequence": "Interest and penalties.", "proof": "Updated calendar file." },
                { "id": "CLC-SFC-03", "description": "Update calendar with all GST filing deadlines (GSTR-1, 3B, etc.).", "priority": "High", "riskLevel": "High", "consequence": "Penalties, loss of input tax credit.", "proof": "Updated calendar file." },
                { "id": "CLC-SFC-04", "description": "Update calendar with all Labour Law filing deadlines (PF, ESI, PT).", "priority": "High", "riskLevel": "Medium", "consequence": "Penalties, employee disputes.", "proof": "Updated calendar file." },
                { "id": "CLC-SFC-05", "description": "Assign responsibility for each filing to a specific person.", "priority": "High", "riskLevel": "Low", "consequence": "Lack of ownership, missed deadlines.", "proof": "Updated calendar file with owner names." },
                { "id": "CLC-SFC-06", "description": "Send reminders 15 days and 3 days before each deadline.", "priority": "Medium", "riskLevel": "Low", "consequence": "Deadlines forgotten.", "proof": "Copies of reminder emails." },
                { "id": "CLC-SFC-07", "description": "Track and confirm completion of each filing.", "priority": "High", "riskLevel": "Medium", "consequence": "Assuming a filing is done when it is not.", "proof": "Filing acknowledgement receipts." },
                { "id": "CLC-SFC-08", "description": "Conduct a quarterly review of the calendar for any changes in laws or dates.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Using an outdated compliance calendar.", "proof": "Minutes of quarterly review meeting." }
            ]
        },
        {
            "title": "Policy Management Lifecycle",
            "department": "HR/Compliance",
            "frequency": "Per Policy",
            "role": "HR Manager",
            "summary": "A framework for drafting, approving, and rolling out company policies.",
            "icon": "file-text",
            "tasks": [
                { "id": "CLC-PML-01", "description": "Draft new policy with clear objectives, scope, and procedures.", "priority": "High", "riskLevel": "Medium", "consequence": "Unclear policy causes confusion.", "proof": "Draft policy document." },
                { "id": "CLC-PML-02", "description": "Review draft policy with legal and management for approval.", "priority": "High", "riskLevel": "High", "consequence": "Policy has legal flaws or is operationally unfeasible.", "proof": "Email approvals from department heads." },
                { "id": "CLC-PML-03", "description": "Communicate the new/updated policy to all employees via email and company portal.", "priority": "High", "riskLevel": "Medium", "consequence": "Employees are unaware of new rules.", "proof": "Copy of announcement email." },
                { "id": "CLC-PML-04", "description": "Obtain digital or physical acknowledgement from every employee.", "priority": "High", "riskLevel": "High", "consequence": "Inability to prove an employee was aware of the policy, legal risk.", "proof": "Signed acknowledgement forms or digital log." },
                { "id": "CLC-PML-05", "description": "Conduct training sessions for significant policy changes.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Employees do not understand the nuances of the policy.", "proof": "Training attendance sheets." },
                { "id": "CLC-PML-06", "description": "Schedule an annual review for every policy to ensure it is still relevant and compliant.", "priority": "High", "riskLevel": "Medium", "consequence": "Outdated policies expose the company to new risks.", "proof": "Policy review schedule." }
            ]
        },
        {
            "title": "Contract Lifecycle Management",
            "department": "Legal",
            "frequency": "Per Contract",
            "role": "Legal Counsel",
            "summary": "Manages a contract from drafting to renewal or termination, minimizing risk.",
            "icon": "file-check",
            "tasks": [
                { "id": "CLC-CLM-01", "description": "Draft contract using approved company templates.", "priority": "High", "riskLevel": "High", "consequence": "Using unvetted clauses, legal exposure.", "proof": "Draft contract." },
                { "id": "CLC-CLM-02", "description": "Review contract with business owner for commercial terms.", "priority": "High", "riskLevel": "Medium", "consequence": "Commercial terms do not match business needs.", "proof": "Email approval from business owner." },
                { "id": "CLC-CLM-03", "description": "Negotiate terms with the other party, keeping a log of all changes.", "priority": "High", "riskLevel": "High", "consequence": "Unfavorable terms, future disputes.", "proof": "Version history of the contract document." },
                { "id": "CLC-CLM-04", "description": "Obtain final approvals from all required internal stakeholders before signing.", "priority": "High", "riskLevel": "High", "consequence": "Unauthorized person agrees to a contract.", "proof": "Final approval email chain." },
                { "id": "CLC-CLM-05", "description": "Execute the contract (signing by authorized signatories).", "priority": "High", "riskLevel": "Low", "consequence": "Contract is not legally binding.", "proof": "Scanned copy of the fully signed contract." },
                { "id": "CLC-CLM-06", "description": "Store the executed contract in a central, secure repository.", "priority": "High", "riskLevel": "Medium", "consequence": "Inability to find contract when needed, lost documents.", "proof": "Entry in contract management system." },
                { "id": "CLC-CLM-07", "description": "Abstract key dates (renewal, termination notice) and obligations into a tracking system.", "priority": "High", "riskLevel": "High", "consequence": "Accidental auto-renewal of an unwanted contract, missed obligations.", "proof": "Screenshot from tracking system." },
                { "id": "CLC-CLM-08", "description": "Review contract performance before renewal.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Renewing a bad contract.", "proof": "Performance review notes." }
            ]
        },
        {
            "title": "Internal Audit & CAPA",
            "department": "Quality/Compliance",
            "frequency": "Quarterly",
            "role": "Internal Auditor",
            "summary": "A process to identify compliance gaps and ensure they are fixed (Corrective and Preventive Action).",
            "icon": "bug",
            "tasks": [
                { "id": "CLC-CAPA-01", "description": "Plan the audit scope, objectives, and criteria for the quarter.", "priority": "High", "riskLevel": "Low", "consequence": "Aimless audit with no clear goal.", "proof": "Audit plan document." },
                { "id": "CLC-CAPA-02", "description": "Conduct the audit by interviewing staff, reviewing records, and observing processes.", "priority": "High", "riskLevel": "Medium", "consequence": "Superficial audit that misses real issues.", "proof": "Auditor's working papers and notes." },
                { "id": "CLC-CAPA-03", "description": "Document all findings (non-conformities) in a formal audit report.", "priority": "High", "riskLevel": "Medium", "consequence": "Findings are not clearly communicated.", "proof": "Draft audit report." },
                { "id": "CLC-CAPA-04", "description": "Issue the report to department heads and management.", "priority": "High", "riskLevel": "Low", "consequence": "Management is unaware of the risks.", "proof": "Email sending the report." },
                { "id": "CLC-CAPA-05", "description": "Require departments to submit a Corrective and Preventive Action (CAPA) plan for each finding.", "priority": "High", "riskLevel": "High", "consequence": "Problems are identified but never fixed.", "proof": "Completed CAPA forms from departments." },
                { "id": "CLC-CAPA-06", "description": "Track the implementation of all CAPAs to ensure they are completed on time.", "priority": "High", "riskLevel": "Medium", "consequence": "Corrective actions are delayed or forgotten.", "proof": "CAPA tracking log." },
                { "id": "CLC-CAPA-07", "description": "Verify the effectiveness of the corrective actions to ensure the problem is truly solved.", "priority": "High", "riskLevel": "High", "consequence": "Actions are completed but were ineffective, problem recurs.", "proof": "Effectiveness verification report." },
                { "id": "CLC-CAPA-08", "description": "Close the audit finding once the action is verified as effective.", "priority": "Medium", "riskLevel": "Low", "consequence": "Open findings remain indefinitely.", "proof": "Final sign-off in the audit file." }
            ]
        }
    ]
};

const enterprise_risk_cybersecurity_pack: PremiumPack = {
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
    checklists: [
        {
            title: 'User Access Review',
            department: 'IT Security',
            frequency: 'Quarterly',
            role: 'IT Security Manager',
            summary: 'A quarterly review to enforce the principle of least privilege and remove unnecessary access rights.',
            icon: 'users',
            tasks: [
                {id: 'ERC-UAR-01', description: 'Generate a list of all active users with access to critical systems.', priority: 'High', riskLevel: 'High', consequence: 'Unauthorized access goes undetected.', proof: 'User access report from Active Directory/Okta.'},
                {id: 'ERC-UAR-02', description: 'Send access lists to respective department managers for review and approval.', priority: 'High', riskLevel: 'Medium', consequence: 'Managers are unaware of their team\'s access levels.', proof: 'Email sent to managers with access lists.'},
                {id: 'ERC-UAR-03', description: 'Verify that all user access is justified by current job role.', priority: 'High', riskLevel: 'High', consequence: 'Ex-employees or transferred staff retain sensitive access.', proof: 'Manager-signed access review forms.'},
                {id: 'ERC-UAR-04', description: 'Review and validate all privileged/administrator accounts.', priority: 'High', riskLevel: 'High', consequence: 'Compromise of an admin account can be catastrophic.', proof: 'Privileged access review report.'},
                {id: 'ERC-UAR-05', description: 'Revoke all unnecessary or unapproved access within 48 hours.', priority: 'High', riskLevel: 'High', consequence: 'Known unnecessary access is not removed promptly.', proof: 'Service desk tickets showing access revocation.'},
                {id: 'ERC-UAR-06', description: 'Audit third-party vendor access to internal systems.', priority: 'High', riskLevel: 'High', consequence: 'A vendor breach becomes an internal breach.', proof: 'Vendor access review checklist.'},
                {id: 'ERC-UAR-07', description: 'Ensure all terminated employee accounts were disabled on their last day of employment.', priority: 'High', riskLevel: 'High', consequence: 'Disgruntled ex-employees retain access.', proof: 'Cross-reference termination list with HR.'},
                {id: 'ERC-UAR-08', description: 'Document the completion of the access review cycle.', priority: 'Medium', riskLevel: 'Low', consequence: 'No audit trail for compliance.', proof: 'Signed summary report of the access review.'}
            ]
        },
        {
            title: 'Vulnerability & Patch Management',
            department: 'IT Operations',
            frequency: 'Weekly',
            role: 'System Administrator',
            summary: 'A structured workflow to identify, prioritize, and remediate security vulnerabilities in systems and software.',
            icon: 'bug',
            tasks: [
                {id: 'ERC-VPM-01', description: 'Run authenticated vulnerability scans on all servers and workstations.', priority: 'High', riskLevel: 'High', consequence: 'Unknown vulnerabilities leave systems exposed to attack.', proof: 'Vulnerability scan report (e.g., Nessus, Qualys).'},
                {id: 'ERC-VPM-02', description: 'Review and prioritize all new "Critical" and "High" severity vulnerabilities.', priority: 'High', riskLevel: 'High', consequence: 'Focusing on low-risk issues while critical ones remain open.', proof: 'Prioritized vulnerability list.'},
                {id: 'ERC-VPM-03', description: 'Create change requests/tickets for patching all critical vulnerabilities.', priority: 'High', riskLevel: 'Medium', consequence: 'No formal tracking of remediation work.', proof: 'Service desk tickets for patching.'},
                {id: 'ERC-VPM-04', description: 'Test patches in a non-production environment before deploying to production.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Patches breaking critical applications.', proof: 'Patch test results document.'},
                {id: 'ERC-VPM-05', description: 'Deploy patches for critical vulnerabilities within the defined SLA (e.g., 14 days).', priority: 'High', riskLevel: 'High', consequence: 'Leaving a known critical entry point open for too long.', proof: 'Patch deployment logs.'},
                {id: 'ERC-VPM-06', description: 'Run a follow-up scan to verify that patches were successfully applied.', priority: 'High', riskLevel: 'Medium', consequence: 'Assuming a patch was successful when it failed.', proof: 'Post-patch verification scan report.'},
                {id: 'ERC-VPM-07', description: 'Document any exceptions where a patch cannot be applied and implement mitigating controls.', priority: 'High', riskLevel: 'High', consequence: 'Unpatched legacy systems without any other protection.', proof: 'Risk acceptance form signed by CISO.'},
                {id: 'ERC-VPM-08', description: 'Report on patching status and vulnerability trends to management.', priority: 'Medium', riskLevel: 'Low', consequence: 'Lack of visibility into the security posture.', proof: 'Monthly patch compliance report.'}
            ]
        }
    ]
};

const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Healthcare & Hospital Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_OfhYpYqLzL0zZz',
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
    checklists: [
        {
            title: "Patient Identification Protocol",
            department: "All Clinical",
            frequency: "Per Interaction",
            role: "All Clinical Staff",
            summary: "Ensures correct patient identification before any procedure, medication, or test to prevent 'never events'. Aligned with JCI & NABH standards.",
            icon: "user-check",
            tasks: [
                { id: "HCO-PID-01", description: "Use at least two patient identifiers (e.g., full name and MRN/hospital number). Do not use room number.", priority: "High", riskLevel: "High", consequence: "Wrong-patient procedure or medication error.", proof: "Verbal confirmation documented in notes." },
                { id: "HCO-PID-02", description: "Ask the patient to state their full name and date of birth (if able). Do not ask leading questions like 'Are you Mr. Smith?'", priority: "High", riskLevel: "High", consequence: "Treating the wrong patient due to patient confirmation bias.", proof: "Patient verbal confirmation noted in chart." },
                { id: "HCO-PID-03", description: "Cross-reference patient identifiers with the patient's wristband before any intervention.", priority: "High", riskLevel: "High", consequence: "Failure to catch an identification error at the last moment.", proof: "Visual check documented in chart (e.g., 'Wristband verified')." },
                { id: "HCO-PID-04", description: "Verify patient ID before administering any medication, including IV fluids.", priority: "High", riskLevel: "High", consequence: "Medication error, adverse drug reaction, potential fatality.", proof: "MAR (Medication Administration Record) sign-off with witness for high-alert meds." },
                { id: "HCO-PID-05", description: "Verify patient ID before drawing blood or collecting any other laboratory specimen.", priority: "High", riskLevel: "High", consequence: "Misdiagnosis, incorrect treatment based on wrong lab results.", proof: "Specimen label cross-checked and signed/initialed by phlebotomist." },
                { id: "HCO-PID-06", description: "Verify patient ID before any diagnostic procedure (e.g., X-ray, CT scan, endoscopy).", priority: "High", riskLevel: "High", consequence: "Performing a procedure on the wrong patient.", proof: "Technician's log with patient verification check." },
                { id: "HCO-PID-07", description: "Label all specimens in the presence of the patient, before leaving the bedside.", priority: "High", riskLevel: "High", consequence: "Specimen mix-up, incorrect lab results, potentially catastrophic treatment decisions.", proof: "Labeled specimen tube/container verified against wristband." },
                { id: "HCO-PID-08", description: "Use barcode scanning for patient ID, medication, and specimen administration where available.", priority: "High", riskLevel: "Medium", consequence: "Reduces human error in identification, but does not replace verbal checks.", proof: "System log of barcode scan." }
            ]
        },
        {
            title: "Surgical Safety Checklist (WHO Aligned)",
            department: "Surgery/OT",
            frequency: "Per Procedure",
            role: "Surgical Team",
            summary: "A three-phase checklist (Sign In, Time Out, Sign Out) to prevent common surgical errors and improve teamwork.",
            icon: "file-check",
            tasks: [
                { id: "HCO-SSC-01", description: "SIGN IN (Before Induction): Confirm patient identity, procedure, site, and consent form.", priority: "High", riskLevel: "High", consequence: "Wrong-patient or wrong-site surgery.", proof: "Signed checklist." },
                { id: "HCO-SSC-02", description: "SIGN IN: Mark the surgical site (must be done by the operating surgeon).", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery.", proof: "Visual confirmation of surgical mark on patient." },
                { id: "HCO-SSC-03", description: "SIGN IN: Anesthesia safety check (machine, medications, airway equipment) completed.", priority: "High", riskLevel: "High", consequence: "Anesthetic complications, patient harm.", proof: "Anesthesiologist confirmation on checklist." },
                { id: "HCO-SSC-04", description: "TIME OUT (Before Incision): All team members introduce themselves by name and role.", priority: "Medium", riskLevel: "Low", consequence: "Poor team communication and situational awareness.", proof: "Verbal confirmation." },
                { id: "HCO-SSC-05", description: "TIME OUT: Entire team verbally confirms patient name, procedure, and incision site.", priority: "High", riskLevel: "High", consequence: "Final opportunity to prevent a catastrophic error.", proof: "Verbal confirmation documented by circulating nurse." },
                { id: "HCO-SSC-06", description: "TIME OUT: Review of critical events, anticipated blood loss, and antibiotic prophylaxis.", priority: "High", riskLevel: "Medium", consequence: "Team unprepared for complications or known patient risks.", proof: "Surgeon and Anesthesiologist verbal briefing." },
                { id: "HCO-SSC-07", description: "SIGN OUT (Before Patient Leaves OR): Nurse verbally confirms instrument, sponge, and needle counts are correct.", priority: "High", riskLevel: "High", consequence: "Retained surgical item, requiring re-operation.", proof: "Count sheet verified and signed by two nurses." },
                { id: "HCO-SSC-08", description: "SIGN OUT: Confirm specimen labeling (specimen name, patient name).", "priority": "High", "riskLevel": "High", "consequence": "Incorrect diagnosis, wrong post-op treatment.", "proof": "Visual confirmation of labeled specimen by surgeon and nurse." },
                { id: "HCO-SSC-09", description: "SIGN OUT: Discuss key concerns for recovery and post-operative care.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Poor handover to recovery team, post-op complications.", "proof": "Surgeon/Anesthesiologist debrief documented." }
            ]
        },
        {
            title: "High-Alert Medication Protocol",
            department: "Pharmacy/Nursing",
            frequency: "Per Administration",
            role: "Pharmacist/Nurse",
            summary: "Prevents errors with medications that have a high risk of causing significant patient harm if misused (e.g., Insulin, Heparin, Chemotherapy).",
            icon: "pill",
            tasks: [
                { id: "HCO-HAM-01", description: "Independent Double-Check: Two qualified staff members must separately check the medication, dose, and patient ID before administration.", priority: "High", riskLevel: "High", consequence: "Potentially fatal medication error.", proof: "Dual signature on the MAR." },
                { id: "HCO-HAM-02", description: "Use standardized concentrations and labeling for all high-alert infusions.", priority: "High", riskLevel: "High", consequence: "Calculation errors leading to massive overdose.", proof: "Pharmacy compounding log and final product label." },
                { id: "HCO-HAM-03", description: "Separate/segregate high-alert medications from other drugs in storage (e.g., dedicated shelf, 'High-Alert' sticker).", priority: "Medium", riskLevel: "Medium", consequence: "Look-alike/sound-alike errors during drug retrieval.", proof: "Photo of segregated storage." },
                { id: "HCO-HAM-04", description: "Use 'smart' infusion pumps with dose error reduction software (DERS) and hard limits enabled.", priority: "High", riskLevel: "High", consequence: "Programming errors leading to incorrect infusion rates.", proof: "Pump programming log/screenshot." },
                { id: "HCO-HAM-05", description: "Provide enhanced patient and family education on their high-alert medication, including side effects to watch for.", priority: "Medium", riskLevel: "Medium", consequence: "Patient non-compliance or failure to report side effects.", proof: "Signed patient education form." },
                { id: "HCO-HAM-06", description: "Clearly label all high-alert medication lines from pump to patient to avoid misconnections.", priority: "High", riskLevel: "High", consequence: "Accidental bolus or mixing of incompatible drugs via IV lines.", proof: "Visual check of labeled IV lines by two nurses." }
            ]
        },
        {
            title: "Infection Control (Hand Hygiene Audit)",
            department: "Quality/Infection Control",
            frequency: "Weekly",
            role: "Infection Control Nurse",
            summary: "Monitors and improves hand hygiene compliance among staff to reduce Hospital-Acquired Infections (HAIs), following WHO's '5 Moments'.",
            icon: "hand",
            tasks: [
                { id: "HCO-HC-01", description: "Observe a sample of 20 staff members for hand hygiene compliance before touching a patient.", priority: "High", riskLevel: "High", consequence: "Transmission of environmental pathogens to patients.", proof: "Hand hygiene audit tool entries." },
                { id: "HCO-HC-02", description: "Observe compliance before a clean/aseptic procedure (e.g., IV insertion, wound dressing).", priority: "High", riskLevel: "High", consequence: "Introduction of infection into a sterile site.", proof: "Hand hygiene audit tool entries." },
                { id: "HCO-HC-03", description: "Observe compliance after body fluid exposure risk.", priority: "High", riskLevel: "High", consequence: "Self-contamination of healthcare worker.", proof: "Hand hygiene audit tool entries." },
                { id: "HCO-HC-04", description: "Observe compliance after touching a patient.", priority: "High", riskLevel: "High", consequence: "Spread of patient's flora to the environment.", proof: "Hand hygiene audit tool entries." },
                { id: "HCO-HC-05", description: "Observe compliance after touching patient surroundings.", priority: "High", riskLevel: "High", consequence: "Contamination of the healthcare environment and other patients.", proof: "Hand hygiene audit tool entries." },
                { id: "HCO-HC-06", description: "Check that alcohol-based hand rub dispensers are available, functional, and not expired at all points of care.", priority: "High", riskLevel: "Medium", consequence: "Staff unable to perform hand hygiene easily, leading to non-compliance.", proof: "Audit checklist of dispenser locations." },
                { id: "HCO-HC-07", description: "Ensure staff are 'bare below the elbows' (no watches, rings with stones) in all clinical areas.", priority: "Medium", riskLevel: "Medium", consequence: "Jewelry harbors microorganisms and impedes effective hand hygiene.", proof: "Direct observation during audit." },
                { id: "HCO-HC-08", description: "Calculate and post hand hygiene compliance rates for each ward to provide feedback.", priority: "Medium", riskLevel: "Low", consequence: "Lack of feedback and accountability for wards.", proof: "Posted compliance dashboard/report." }
            ]
        },
        {
            title: "Emergency Code Management (Code Blue)",
            department: "Emergency/All",
            frequency: "Daily (Checks) / Monthly (Drills)",
            role: "Code Blue Team/Nurse Supervisor",
            summary: "Ensures a rapid, coordinated, and effective response to a cardiac or respiratory arrest.",
            icon: "heart-pulse",
            tasks: [
                { id: "HCO-EC-01", description: "Check crash cart daily: defibrillator charge, medication expiry, and integrity of all equipment.", priority: "High", riskLevel: "High", consequence: "Life-saving equipment fails during an emergency, leading to patient death.", proof: "Daily crash cart checklist signed by nurse." },
                { id: "HCO-EC-02", description: "Conduct monthly mock Code Blue drills in different hospital locations (e.g., ward, cafeteria, lobby).", priority: "High", riskLevel: "High", consequence: "Disorganized response, delayed CPR/defibrillation in a real event.", proof: "Mock drill debriefing report with timings and corrective actions." },
                { id: "HCO-EC-03", description: "Verify that all clinical staff hold a valid Basic Life Support (BLS) and/or Advanced Cardiac Life Support (ACLS) certification.", priority: "High", riskLevel: "High", consequence: "Inability to initiate immediate and effective CPR.", proof: "Review of staff training records in HR." },
                { id: "HCO-EC-04", description: "During a code, team leader clearly assigns roles (e.g., compressor, airway manager, recorder, medication nurse).", priority: "High", riskLevel: "Medium", consequence: "Chaotic scene, missed interventions, poor team dynamics.", proof: "Post-code debrief form." },
                { id: "HCO-EC-05", description: "Document all events, medications, timings, and vital signs on the official Code Blue record.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate record for clinical review and medico-legal purposes.", proof: "Completed Code Blue record sheet." },
                { id: "HCO-EC-06", description: "Ensure crowd control is implemented and the patient's family is managed compassionately by a designated person.", priority: "Medium", riskLevel: "Low", consequence: "Added distress to family, interference with medical team.", proof: "Notes from social worker/security in the patient file." }
            ]
        },
        {
            title: "Biomedical Waste Management",
            department: "Housekeeping/Infection Control",
            frequency: "Daily",
            role: "Housekeeping Supervisor",
            summary: "Ensures safe and compliant segregation, collection, and disposal of biomedical waste as per national and international guidelines.",
            icon: "recycle",
            tasks: [
                { id: "HCO-BMW-01", description: "Verify waste is correctly segregated into color-coded bins (Yellow, Red, Blue, White) at the point of generation.", priority: "High", riskLevel: "High", consequence: "Needlestick injury, environmental contamination, severe legal penalties.", proof: "Daily round checklist with photos of bins." },
                { id: "HCO-BMW-02", description: "Ensure all waste bags are sealed securely (e.g., with a zip-tie) when 3/4 full.", priority: "Medium", riskLevel: "Medium", consequence: "Spillage during transport, exposure risk to staff.", proof: "Visual check during collection rounds." },
                { id: "HCO-BMW-03", description: "Check that sharps containers are not overfilled (below the marked line) and are properly sealed for disposal.", priority: "High", riskLevel: "High", consequence: "High risk of needlestick injuries to housekeeping staff.", proof: "Daily round checklist." },
                { id: "HCO-BMW-04", description: "Transport waste in dedicated, covered trolleys along designated routes and service elevators.", priority: "High", riskLevel: "Medium", consequence: "Contamination of public areas and elevators.", proof: "CCTV review of waste transport." },
                { id: "HCO-BMW-05", description: "Weigh and log all waste bags by category before handing over to the disposal vendor.", priority: "High", riskLevel: "Medium", consequence: "Inability to track waste generation, non-compliance with regulatory reporting.", proof: "BMW disposal logbook signed by vendor." },
                { id: "HCO-BMW-06", description: "Verify that the central BMW storage area is secure, locked, clean, and accessible only to authorized personnel.", priority: "High", riskLevel: "High", consequence: "Unauthorized access, pest infestation, public health risk.", proof: "Photo of secure storage area." },
                { id: "HCO-BMW-07", description: "Ensure all staff handling waste wear appropriate Personal Protective Equipment (PPE), including heavy-duty gloves, masks, and boots.", priority: "High", riskLevel: "High", consequence: "Occupational exposure to infectious agents and injuries.", proof: "Direct observation during audit." }
            ]
        },
        {
            title: "Central Sterile Supply Dept (CSSD) Audit",
            department: "CSSD/Infection Control",
            frequency: "Weekly",
            role: "CSSD Supervisor",
            summary: "Ensures surgical instruments are properly cleaned, disinfected, sterilized, and stored to prevent Surgical Site Infections (SSIs).",
            icon: "microscope",
            tasks: [
                { id: "HCO-CSSD-01", description: "Verify washer-disinfector performance with daily cleaning efficacy tests (e.g., TOSI strips).", priority: "High", riskLevel: "High", consequence: "Bioburden remains on instruments, sterilization failure.", proof: "Test results logbook." },
                { id: "HCO-CSSD-02", description: "Check autoclave performance using daily Bowie-Dick tests (for pre-vacuum sterilizers) and weekly biological indicators.", priority: "High", riskLevel: "High", consequence: "Catastrophic sterilization failure, high risk of SSIs.", proof: "Autoclave logbook with attached test strips/results." },
                { id: "HCO-CSSD-03", description: "Ensure sterile packs are correctly wrapped, sealed, and labeled with sterilizer number, cycle number, and expiry date.", priority: "High", riskLevel: "Medium", consequence: "Compromised sterility, inability to trace a faulty batch.", proof: "Audit of sterile packs in storage." },
                { id: "HCO-CSSD-04", description: "Maintain strict one-way workflow from dirty (decontamination) to clean (assembly) to sterile (storage) zones.", priority: "High", riskLevel: "High", consequence: "Cross-contamination of sterile instruments.", proof: "Observation of staff movement and workflow." },
                { id: "HCO-CSSD-05", description: "Inspect instruments under magnification for cleanliness and damage before packing.", priority: "High", riskLevel: "Medium", consequence: "Using damaged or dirty instruments in surgery.", proof: "QC check log at packing station." },
                { id: "HCO-CSSD-06", description: "Ensure staff in decontamination area wear full PPE (fluid-resistant gown, gloves, face shield).", priority: "High", riskLevel: "High", consequence: "Staff exposure to bloodborne pathogens.", proof: "Direct observation during audit." }
            ]
        }
    ]
};

const school_operations_pack: PremiumPack = {
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
};

const university_college_ops: PremiumPack = {
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
};

const film_production_pack: PremiumPack = {
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
    checklists: [
        {
            title: "Pre-Production & Legal Clearance",
            department: "Legal/Production",
            frequency: "Per Project",
            role: "Line Producer",
            summary: "Ensures all legal and creative rights are secured before principal photography begins.",
            icon: "file-lock",
            tasks: [
                { id: "FP-PPL-01", description: "Script Clearance: Final script reviewed for potential defamation, privacy, or copyright issues.", priority: "High", riskLevel: "High", consequence: "Lawsuits, injunctions halting production.", proof: "Script clearance report from legal counsel." },
                { id: "FP-PPL-02", description: "Chain of Title: Verify and document complete ownership history of the underlying work (book, script).", priority: "High", riskLevel: "High", consequence: "Inability to secure distribution, ownership disputes.", proof: "Chain of Title summary document." },
                { id: "FP-PPL-03", description: "Life Rights: Secure signed agreements if the story is based on a living person.", priority: "High", riskLevel: "High", consequence: "Lawsuits for misappropriation of likeness.", proof: "Signed life rights agreement." },
                { id: "FP-PPL-04", description: "Cast & Crew Contracts: All key cast and crew have signed contracts.", priority: "High", riskLevel: "High", consequence: "Key personnel leaving mid-project, disputes over pay/credit.", proof: "Executed contracts." },
                { id: "FP-PPL-05", description: "E&O Insurance: Errors & Omissions insurance policy is in place.", priority: "High", riskLevel: "High", consequence: "Uncovered legal costs from copyright/defamation claims.", proof: "Certificate of Insurance." },
                { id: "FP-PPL-06", description: "Music Rights: Plan for music clearance (pre-records, score) is established.", priority: "Medium", riskLevel: "Medium", consequence: "Costly post-production music replacement.", proof: "Music budget and clearance plan." },
                { id: "FP-PPL-07", description: "Child Actor Permits: All necessary permits and tutoring plans are in place for minor actors.", priority: "High", riskLevel: "High", consequence: "Violation of labor laws, fines, production shutdown.", proof: "Copies of permits." },
                { id: "FP-PPL-08", description: "Final Budget & Schedule: Final shooting budget and schedule approved by all stakeholders.", priority: "High", riskLevel: "Medium", consequence: "Financial overruns, production chaos.", proof: "Signed budget and schedule documents." }
            ]
        },
        {
            title: "Location Management",
            department: "Production",
            frequency: "Per Location",
            role: "Location Manager",
            summary: "Manages the scouting, permitting, and logistics of all filming locations.",
            icon: "map",
            tasks: [
                { id: "FP-LM-01", description: "Scouting: Potential locations scouted, photographed, and presented to director.", priority: "High", riskLevel: "Low", consequence: "Creative vision not met.", proof: "Location scouting reports." },
                { id: "FP-LM-02", description: "Permits: All required filming permits from local authorities (police, municipal, etc.) are secured.", priority: "High", riskLevel: "High", consequence: "Production shut down by authorities, fines.", proof: "Copies of all permits." },
                { id: "FP-LM-03", description: "Location Agreement: Signed agreement with property owner, outlining terms, conditions, and fees.", priority: "High", riskLevel: "High", consequence: "Disputes with property owner, unexpected costs.", proof: "Signed location agreement." },
                { id: "FP-LM-04", description: "Logistics Plan: Plan for parking, power, catering, and restrooms is in place.", priority: "Medium", riskLevel: "Medium", consequence: "On-set delays, crew dissatisfaction.", proof: "Location logistics plan." },
                { id: "FP-LM-05", description: "Risk Assessment: Site-specific risk assessment conducted (e.g., trip hazards, public safety).", priority: "High", riskLevel: "High", consequence: "Accidents, injuries.", proof: "Signed risk assessment form." },
                { id: "FP-LM-06", description: "Resident Notification: Notify all nearby residents/businesses of filming schedule and potential disruption.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Complaints, disruption of filming.", "proof": "Copy of notification letter." },
                { id: "FP-LM-07", description: "Post-Shoot Cleanup: Location is returned to its original condition after filming.", priority: "High", riskLevel: "Medium", consequence: "Disputes with property owner, loss of security deposit.", proof: "Post-shoot location photos signed off by owner." }
            ]
        },
        {
            title: "On-Set Safety (EHS)",
            department: "Production/Safety",
            frequency: "Daily",
            role: "Safety Officer/1st AD",
            summary: "Ensures a safe working environment for all cast and crew during filming.",
            icon: "siren",
            tasks: [
                { id: "FP-SS-01", description: "Conduct a daily safety briefing (toolbox talk) before start of shooting.", priority: "High", riskLevel: "Medium", consequence: "Crew unaware of daily risks.", proof: "Safety briefing attendance sheet." },
                { id: "FP-SS-02", description: "Ensure first aid station is stocked and a certified medic is present on set.", priority: "High", riskLevel: "High", consequence: "Delayed medical response to injuries.", proof: "Medic's sign-in sheet." },
                { id: "FP-SS-03", description: "Check that all fire extinguishers are accessible and inspected.", priority: "High", riskLevel: "High", consequence: "Inability to control a small fire.", proof: "Fire extinguisher inspection log." },
                { id: "FP-SS-04", description: "Verify all electrical wiring and distribution boxes are safe and not overloaded.", priority: "High", riskLevel: "High", consequence: "Electrical shock, fire.", proof: "Gaffer's daily sign-off." },
                { id: "FP-SS-05", description: "Ensure all walkways and emergency exits are clear of equipment and cables.", priority: "High", riskLevel: "High", consequence: "Trip hazards, blocked evacuation routes.", proof: "Dated photo of clear walkways." },
                { id: "FP-SS-06", description: "Stunt Safety: Review stunt plan and risk assessment with stunt coordinator before the scene.", priority: "High", riskLevel: "High", consequence: "Stunt-related injury or fatality.", proof: "Signed stunt safety briefing." },
                { id: "FP-SS-07", description: "Weapons Handling: All prop weapons are controlled, logged, and handled by the designated armorer.", priority: "High", riskLevel: "High", consequence: "Accidental discharge, serious injury or death.", proof: "Armorer's log." },
                { id: "FP-SS-08", description: "Log and investigate all on-set injuries and near-misses.", priority: "High", riskLevel: "Medium", consequence: "Failure to learn from incidents, repeating unsafe practices.", proof: "Incident report forms." }
            ]
        },
        {
            title: "Post-Production Workflow",
            department: "Post-Production",
            frequency: "Daily/Weekly",
            role: "Post-Production Supervisor",
            summary: "Manages the flow of data and creative work from set to final delivery.",
            icon: "scissors",
            tasks: [
                { id: "FP-PP-01", description: "Dailies/Rushes: All footage from the previous day is ingested, backed up, and transcoded for editorial.", priority: "High", riskLevel: "High", consequence: "Loss of original camera footage, editorial delays.", proof: "Dailies report." },
                { id: "FP-PP-02", description: "Data Backup: A minimum of two copies of all original camera files (OCF) exist on separate physical media.", priority: "High", riskLevel: "High", consequence: "Catastrophic data loss.", proof: "Backup verification log." },
                { id: "FP-PP-03", description: "Editorial: Editor's cut of scenes are reviewed by the director on schedule.", priority: "High", riskLevel: "Low", consequence: "Creative process falls behind schedule.", proof: "Editorial review schedule." },
                { id: "FP-PP-04", description: "VFX Turnover: Shots for VFX are identified, logged, and turned over to the VFX vendor with all necessary data.", priority: "High", riskLevel: "Medium", consequence: "VFX delays, incorrect work.", proof: "VFX turnover sheet." },
                { id: "FP-PP-05", description: "Sound Design & Mix: Audio is synced, edited, and prepared for sound design and mixing.", priority: "Medium", riskLevel: "Low", consequence: "Post-production sound delays.", proof: "Audio turnover to sound department." },
                { id: "FP-PP-06", description: "Color Grading: Picture lock is achieved and files are prepared for color grading.", priority: "High", riskLevel: "Low", consequence: "Color grading cannot start on time.", proof: "Picture lock sign-off." },
                { id: "FP-PP-07", description: "QC & Delivery: Final master file undergoes a full technical Quality Control check before delivery.", priority: "High", riskLevel: "High", consequence: "Delivery rejected by broadcaster/distributor.", proof: "Final QC report." }
            ]
        }
    ]
};

const ott_platform_pack: PremiumPack = {
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
    checklists: [
        {
            title: "Content Ingestion & QC",
            department: "Content Operations",
            frequency: "Per Title",
            role: "Content Manager",
            summary: "Ensures all video assets meet technical and quality standards before going live.",
            icon: "video",
            tasks: [
                { id: "OTT-CI-01", description: "Receive master file from content provider and verify it matches technical specifications.", priority: "High", riskLevel: "High", consequence: "Platform cannot process the file, leading to delays.", proof: "Technical spec sheet sign-off." },
                { id: "OTT-CI-02", description: "Perform automated and manual Quality Control (QC) for video/audio errors (e.g., artifacts, sync issues).", priority: "High", riskLevel: "High", consequence: "Poor user experience, subscriber complaints.", proof: "QC report." },
                { id: "OTT-CI-03", description: "Verify all required assets are present (subtitles, multiple audio tracks, artwork, metadata).", priority: "High", riskLevel: "Medium", consequence: "Incomplete title launch, poor user experience.", proof: "Asset checklist sign-off." },
                { id: "OTT-CI-04", description: "Transcode master file into multiple bitrates and formats for adaptive streaming.", priority: "High", riskLevel: "Medium", consequence: "Users on slow connections cannot stream the content.", proof: "Transcoding job log." },
                { id: "OTT-CI-05", description: "Apply Digital Rights Management (DRM) encryption.", priority: "High", riskLevel: "High", consequence: "Content piracy, breach of contract with rights holders.", proof: "DRM application log." },
                { id: "OTT-CI-06", description: "Ingest all assets and metadata into the Content Management System (CMS).", priority: "High", riskLevel: "Low", consequence: "Title cannot be published.", proof: "CMS entry screenshot." },
                { id: "OTT-CI-07", description: "Perform a final 'spot check' of the title on multiple devices (web, mobile, TV) before publishing.", priority: "High", riskLevel: "Medium", consequence: "Device-specific playback issues.", proof: "Cross-device testing report." },
                { id: "OTT-CI-08", description: "Schedule the title for publication or publish immediately.", priority: "Medium", riskLevel: "Low", consequence: "Missing a marketing deadline.", proof: "Publishing schedule." }
            ]
        },
        {
            title: "Live Streaming Event Readiness",
            department: "Broadcast Operations",
            frequency: "Per Live Event",
            role: "Live Ops Engineer",
            summary: "A checklist to ensure maximum uptime and a smooth experience for major live events.",
            icon: "zap",
            tasks: [
                { id: "OTT-LS-01", description: "Conduct a full load test of the streaming infrastructure at least 24 hours before the event.", priority: "High", riskLevel: "High", consequence: "Platform crashes during peak viewership.", proof: "Load test report." },
                { id: "OTT-LS-02", description: "Verify primary and backup encoder and stream paths are functional.", priority: "High", riskLevel: "High", consequence: "Total stream failure if primary path fails.", proof: "Encoder test stream logs." },
                { id: "OTT-LS-03", description: "Confirm CDN configurations, including geo-blocking and token authentication, are correct.", priority: "High", riskLevel: "High", consequence: "Stream available in unauthorized regions, security breaches.", proof: "CDN configuration review sign-off." },
                { id: "OTT-LS-04", description: "Establish a 'war room' communication channel (e.g., Slack, Teams) for the event.", priority: "High", riskLevel: "Medium", consequence: "Disorganized response to issues during the event.", proof: "War room channel created and key personnel added." },
                { id: "OTT-LS-05", description: "Brief the customer support team on the event and potential user issues.", priority: "Medium", riskLevel: "Low", consequence: "Support team unprepared for user complaints.", proof: "Support briefing notes." },
                { id: "OTT-LS-06", description: "Monitor stream health (bitrate, buffering, errors) in real-time throughout the event.", priority: "High", riskLevel: "High", consequence: "Slow response to degrading stream quality.", proof: "Real-time monitoring dashboard screenshot." },
                { id: "OTT-LS-07", description: "Have a disaster recovery plan in place, including a pre-recorded 'experiencing technical difficulties' slate.", priority: "High", riskLevel: "Medium", consequence: "Dead air and user confusion during an outage.", proof: "Disaster recovery plan document." },
                { id: "OTT-LS-08", description: "Conduct a post-event debrief to analyze performance and any incidents.", priority: "Medium", riskLevel: "Low", consequence: "Failure to learn from event performance.", proof: "Post-event report." }
            ]
        },
    ]
};

const sports_clubs_stadium_operations_pack: PremiumPack = {
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
        { text: "Prevent accidents and misuse with daily inspections of gym and sports equipment.", icon: "dumbbell" },
        { text: "Guarantee a safe environment with fire safety audits and medical emergency response plans.", icon: "siren" },
        { text: "Protect members with robust hygiene protocols for pools, changing rooms, and F&B areas.", icon: "sparkles" },
        { text: "Manage your team effectively with checklists for staff training, scheduling, and performance.", icon: "clipboard-list" }
    ],
    checklists: []
};

const cinema_operations_pack: PremiumPack = {
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
};

const theme_park_ops_pack: PremiumPack = {
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
};

const logistics_warehouse_pack: PremiumPack = {
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
    checklists: [
        {
            "title": "Inbound & Receiving",
            "department": "Receiving",
            "frequency": "Per Delivery",
            "role": "Receiving Clerk",
            "summary": "Ensures all incoming goods are accurately received, inspected, and documented.",
            "icon": "clipboard-check",
            "tasks": [
                { "id": "LW-IR-01", "description": "Schedule and confirm delivery appointment with carrier.", "priority": "Medium", "riskLevel": "Low", "consequence": "Dock congestion, delays.", "proof": "Appointment log." },
                { "id": "LW-IR-02", "description": "Inspect truck/container for signs of tampering or damage before unloading.", "priority": "High", "riskLevel": "Medium", "consequence": "Accepting damaged goods, security risk.", "proof": "Inbound inspection form." },
                { "id": "LW-IR-03", "description": "Verify shipment against packing list and purchase order.", "priority": "High", "riskLevel": "High", "consequence": "Inventory discrepancies, paying for incorrect goods.", "proof": "Signed packing list with discrepancies noted." },
                { "id": "LW-IR-04", "description": "Conduct quality inspection on a sample of goods (e.g., check for damage, expiry dates).", "priority": "High", "riskLevel": "Medium", "consequence": "Accepting defective products into inventory.", "proof": "Inbound QC report." },
                { "id": "LW-IR-05", "description": "Record all received items into the Warehouse Management System (WMS).", "priority": "High", "riskLevel": "High", "consequence": "Phantom stock, inability to locate goods.", "proof": "WMS receiving entry." },
                { "id": "LW-IR-06", "description": "Label all pallets/items with internal tracking barcodes.", "priority": "High", "riskLevel": "Low", "consequence": "Inefficient putaway and picking.", "proof": "Photo of labeled pallet." },
                { "id": "LW-IR-07", "description": "Segregate and move goods to the appropriate staging or putaway area.", "priority": "Medium", "riskLevel": "Low", "consequence": "Delays in putaway, dock congestion.", "proof": "Visual confirmation." },
                { "id": "LW-IR-08", "description": "Process and document any returns to vendor (RTV) for damaged or incorrect goods.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Financial loss, holding unwanted stock.", "proof": "RTV documentation." }
            ]
        },
        {
            "title": "Putaway & Storage",
            "department": "Inventory Control",
            "frequency": "Daily",
            "role": "Forklift Operator/Stocker",
            "summary": "Ensures goods are stored correctly, safely, and efficiently.",
            "icon": "package",
            "tasks": [
                { "id": "LW-PS-01", "description": "Put away all goods from the receiving staging area within the set time frame (e.g., 24 hours).", "priority": "High", "riskLevel": "Medium", "consequence": "Staging area congestion, risk of damage or loss.", "proof": "WMS putaway timestamp." },
                { "id": "LW-PS-02", "description": "Store goods in their assigned bin locations as directed by the WMS.", "priority": "High", "riskLevel": "High", "consequence": "Lost inventory, picking errors.", "proof": "Scan confirmation in WMS." },
                { "id": "LW-PS-03", "description": "Ensure pallets are stored securely and do not overhang racks.", "priority": "High", "riskLevel": "High", "consequence": "Falling items, rack collapse, injury.", "proof": "Photo of properly stored pallet." },
                { "id": "LW-PS-04", "description": "Follow storage guidelines for hazardous materials (HAZMAT).", "priority": "High", "riskLevel": "High", "consequence": "Fire, chemical spills, injury, fines.", "proof": "HAZMAT storage area inspection log." },
                { "id": "LW-PS-05", "description": "Consolidate stock to optimize storage space.", "priority": "Medium", "riskLevel": "Low", "consequence": "Inefficient use of warehouse space.", "proof": "WMS consolidation report." },
                { "id": "LW-PS-06", "description": "Perform daily checks of storage racks for any signs of damage.", "priority": "High", "riskLevel": "High", "consequence": "Catastrophic rack failure.", "proof": "Rack inspection log." },
                { "id": "LW-PS-07", "description": "Keep aisles clear of any obstructions.", "priority": "High", "riskLevel": "Medium", "consequence": "MHE accidents, delays.", "proof": "Daily walkthrough checklist." },
                { "id": "LW-PS-08", "description": "Ensure FIFO/FEFO principles are followed in storage arrangement.", "priority": "High", "riskLevel": "Medium", "consequence": "Product expiry, wastage.", "proof": "Audit of stock dates in a sample of bins." }
            ]
        },
        {
            "title": "Order Picking, Packing & Dispatch",
            "department": "Outbound",
            "frequency": "Per Order",
            "role": "Picker/Packer",
            "summary": "Ensures customer orders are fulfilled accurately and efficiently.",
            "icon": "truck",
            "tasks": [
                { "id": "LW-OPD-01", "description": "Generate and assign pick lists to pickers.", "priority": "High", "riskLevel": "Low", "consequence": "Disorganized picking process.", "proof": "Batch of printed pick lists." },
                { "id": "LW-OPD-02", "description": "Pick correct items and quantities as per the pick list, using barcode scanners for verification.", "priority": "High", "riskLevel": "High", "consequence": "Incorrect items sent to customer, returns, dissatisfaction.", "proof": "WMS pick confirmation." },
                { "id": "LW-OPD-03", "description": "Transport picked goods to the packing station.", "priority": "Medium", "riskLevel": "Low", "consequence": "Delays.", "proof": "Visual confirmation." },
                { "id": "LW-OPD-04", "description": "Pack orders securely with appropriate dunnage to prevent damage in transit.", "priority": "High", "riskLevel": "Medium", "consequence": "Goods damaged during shipping, customer claims.", "proof": "Packing station QC check." },
                { "id": "LW-OPD-05", "description": "Apply correct shipping label and packing slip to each order.", "priority": "High", "riskLevel": "High", "consequence": "Order sent to wrong address, lost shipment.", "proof": "Label verification scan." },
                { "id": "LW-OPD-06", "description": "Weigh and record final parcel dimensions and weight.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Incorrect shipping charges.", "proof": "Shipping system data entry." },
                { "id": "LW-OPD-07", "description": "Stage packed orders in the correct lane for courier pickup.", "priority": "High", "riskLevel": "Low", "consequence": "Missed courier pickups, delays.", "proof": "Photo of staged orders." },
                { "id": "LW-OPD-08", "description": "Generate and hand over the shipping manifest to the courier.", "priority": "High", "riskLevel": "Medium", "consequence": "Disputes with courier over number of parcels collected.", "proof": "Signed courier manifest." }
            ]
        },
        {
            "title": "Warehouse Safety & EHS",
            "department": "EHS",
            "frequency": "Weekly",
            "role": "Safety Officer",
            "summary": "A weekly audit to ensure a safe working environment and compliance with EHS regulations.",
            "icon": "hard-hat",
            "tasks": [
                { "id": "LW-EHS-01", "description": "Check all fire extinguishers, hoses, and alarms are accessible and inspected.", "priority": "High", "riskLevel": "High", "consequence": "Inability to respond to a fire.", "proof": "Fire equipment inspection log." },
                { "id": "LW-EHS-02", "description": "Ensure all emergency exits and evacuation routes are clear and well-lit.", "priority": "High", "riskLevel": "High", "consequence": "Blocked escape route during an emergency.", "proof": "Dated photo of clear routes." },
                { "id": "LW-EHS-03", "description": "Verify that first-aid stations and eyewash stations are stocked and accessible.", "priority": "High", "riskLevel": "Medium", "consequence": "Delayed response to injury.", "proof": "First-aid kit checklist." },
                { "id": "LW-EHS-04", "description": "Inspect Material Handling Equipment (MHE) for daily pre-use check completion.", "priority": "High", "riskLevel": "High", "consequence": "MHE accident due to faulty equipment.", "proof": "Review of operator pre-use checklists." },
                { "id": "LW-EHS-05", "description": "Check that all staff in designated areas are using required PPE.", "priority": "High", "riskLevel": "Medium", "consequence": "Personal injuries.", "proof": "Safety observation report." },
                { "id": "LW-EHS-06", "description": "Verify battery charging stations for forklifts are safe, ventilated, and have spill kits.", "priority": "High", "riskLevel": "High", "consequence": "Battery explosion, acid spills.", "proof": "Charging station inspection log." },
                { "id": "LW-EHS-07", "description": "Audit chemical storage area for proper labeling, segregation, and SDS availability.", "priority": "High", "riskLevel": "High", "consequence": "Chemical spill, fire, employee exposure.", "proof": "Chemical storage audit form." },
                { "id": "LW-EHS-08", "description": "Review recent incident/near-miss reports and check status of corrective actions.", "priority": "High", "riskLevel": "Medium", "consequence": "Failure to learn from incidents, leading to recurrence.", "proof": "Review of incident log and CAPA tracker." }
            ]
        },
        {
            title: "Inventory Control & Cycle Counting",
            department: "Inventory Control",
            frequency: "Daily/Weekly",
            role: "Inventory Analyst",
            summary: "Maintains inventory accuracy to prevent stockouts and financial discrepancies.",
            icon: "shield",
            tasks: [
                { id: "LW-IC-01", description: "Generate and perform daily cycle counts for a set number of SKUs or locations.", priority: "High", riskLevel: "Medium", consequence: "Inventory records become inaccurate over time.", proof: "Completed cycle count sheets." },
                { id: "LW-IC-02", description: "Investigate all significant discrepancies found during cycle counts within 24 hours.", priority: "High", riskLevel: "High", consequence: "Theft or process errors go undetected.", proof: "Discrepancy investigation report." },
                { id: "LW-IC-03", description: "Process inventory adjustments in WMS with proper authorization.", priority: "High", riskLevel: "High", consequence: "Unauthorized adjustments can conceal theft.", proof: "Signed adjustment form." },
                { id: "LW-IC-04", description: "Monitor and manage stock in the quarantine/hold area.", priority: "Medium", riskLevel: "Medium", consequence: "Defective stock is not processed, taking up space.", proof: "Quarantine stock report." },
                { id: "LW-IC-05", description: "Analyze slow-moving or non-moving inventory and recommend actions (e.g., discount, scrap).", priority: "Medium", riskLevel: "Low", consequence: "Capital tied up in dead stock.", proof: "Slow-moving inventory report." },
                { id: "LW-IC-06", description: "Track and report on key inventory KPIs (Accuracy, Turns, Stock Age).", priority: "High", riskLevel: "Low", consequence: "Lack of visibility into inventory performance.", proof: "Monthly KPI dashboard." },
                { id: "LW-IC-07", description: "Reconcile system inventory with financial records monthly.", priority: "High", riskLevel: "High", consequence: "Financial statements are inaccurate.", proof: "Reconciliation report signed by Finance." },
                { id: "LW-IC-08", description: "Plan and coordinate the annual full physical inventory count.", priority: "High", riskLevel: "Medium", consequence: "Chaotic and inaccurate annual count.", proof: "Physical Inventory plan document." }
            ]
        }
    ]
};

const manufacturing_operations_ehs_pack: PremiumPack = {
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
    checklists: [
        {
            "title": "Daily Production Kick-off",
            "department": "Production",
            "frequency": "Daily",
            "role": "Shift Supervisor",
            "summary": "Ensures the production line is ready, safe, and aligned with the day's targets before starting operations.",
            "icon": "clipboard-check",
            "tasks": [
                { "id": "MFG-DPK-01", "description": "Review shift handover log from the previous shift for any issues or pending actions.", "priority": "High", "riskLevel": "Medium", "consequence": "Recurring issues are not resolved, leading to repeated downtime or quality deviations.", "proof": "Signed handover logbook." },
                { "id": "MFG-DPK-02", "description": "Conduct a toolbox talk covering the day's production targets, safety focus, and quality alerts.", "priority": "High", "riskLevel": "Low", "consequence": "Team is misaligned on priorities, increased risk of accidents or quality errors.", "proof": "Toolbox talk attendance sheet and topic notes." },
                { "id": "MFG-DPK-03", "description": "Verify that raw material availability for the first 4 hours of production is confirmed.", "priority": "High", "riskLevel": "High", "consequence": "Line stoppage due to material shortage, impacting entire day's output.", "proof": "Material staging confirmation from stores." },
                { "id": "MFG-DPK-04", "description": "Check that all machine safety guards are in place and emergency stops are functional.", "priority": "High", "riskLevel": "High", "consequence": "Catastrophic injury or fatality.", "proof": "Pre-startup safety checklist signed by operator and supervisor." },
                { "id": "MFG-DPK-05", "description": "Ensure all operators are at their assigned stations and wearing the correct Personal Protective Equipment (PPE).", "priority": "High", "riskLevel": "Medium", "consequence": "Workplace injuries, non-compliance with safety regulations.", "proof": "Supervisor's visual inspection." },
                { "id": "MFG-DPK-06", "description": "Review the day's production schedule and ensure the first job's parameters are correctly set on the machines.", "priority": "High", "riskLevel": "Medium", "consequence": "Production of non-conforming product, significant rework or scrap.", "proof": "First-off inspection report." },
                { "id": "MFG-DPK-07", "description": "Confirm that the quality control station is ready with the required gauges, checklists, and sample containers.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Inability to perform in-process quality checks, leading to defect production.", "proof": "QC station readiness checklist." },
                { "id": "MFG-DPK-08", "description": "Check that the area is clean, well-lit, and free from slip, trip, or fall hazards.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Workplace accidents, reduced efficiency.", "proof": "5S audit checklist for the area." }
            ]
        },
        {
            "title": "Lock-Out Tag-Out (LOTO)",
            "department": "Maintenance/EHS",
            "frequency": "Per Maintenance Task",
            "role": "Maintenance Technician",
            "summary": "A safety procedure to ensure dangerous machines are properly shut off and not started up again prior to the completion of maintenance or servicing work.",
            "icon": "lock",
            "tasks": [
                { "id": "MFG-LOTO-01", "description": "Notify all affected employees of the impending shutdown and the LOTO procedure.", "priority": "High", "riskLevel": "High", "consequence": "Unexpected shutdown causes process issues; employees unaware of maintenance work.", "proof": "Log of communication." },
                { "id": "MFG-LOTO-02", "description": "Shut down the machine or equipment using the normal stopping procedure.", "priority": "High", "riskLevel": "High", "consequence": "Unsafe shutdown could damage equipment or leave it in a hazardous state.", "proof": "Operator confirmation." },
                { "id": "MFG-LOTO-03", "description": "Isolate all energy sources (electrical, hydraulic, pneumatic, etc.) as per the machine-specific LOTO chart.", "priority": "High", "riskLevel": "High", "consequence": "Stored energy can cause unexpected movement, leading to fatal injury.", "proof": "LOTO checklist with each energy source ticked off." },
                { "id": "MFG-LOTO-04", "description": "Apply assigned, individual locks and tags to each energy isolating device.", "priority": "High", "riskLevel": "High", "consequence": "Another worker could accidentally re-energize the machine.", "proof": "Photo of the applied locks and tags." },
                { "id": "MFG-LOTO-05", "description": "Release or restrain all stored energy (e.g., bleed pneumatic lines, block elevated parts).", "priority": "High", "riskLevel": "High", "consequence": "Injury from unexpected release of residual energy.", "proof": "LOTO checklist verification." },
                { "id": "MFG-LOTO-06", "description": "VERIFY isolation by attempting to start the machine using the normal start button. This is the most critical step.", "priority": "High", "riskLevel": "High", "consequence": "Assuming the machine is de-energized when it is not, leading to fatality.", "proof": "Signature on the LOTO permit confirming verification." },
                { "id": "MFG-LOTO-07", "description": "Upon work completion, inspect the area and remove all tools.", "priority": "High", "riskLevel": "Medium", "consequence": "Tools left in machine can cause damage on startup.", "proof": "Work area clearance check." },
                { "id": "MFG-LOTO-08", "description": "Notify all affected employees that LOTO is being removed and the machine will be re-energized.", "priority": "High", "riskLevel": "Medium", "consequence": "Unexpected startup injures someone not directly involved in maintenance.", "proof": "Log of communication." },
                { "id": "MFG-LOTO-09", "description": "Remove LOTO devices. Each worker must remove their own lock.", "priority": "High", "riskLevel": "High", "consequence": "A lock removed by someone else could lead to startup while a worker is still inside.", "proof": "LOTO permit close-out signatures." }
            ]
        },
        {
            "title": "Permit to Work (PTW) - Hot Work",
            "department": "EHS/Maintenance",
            "frequency": "Per Hot Work Task",
            "role": "Area In-charge/Safety Officer",
            "summary": "A formal documented process to control high-risk activities like welding, grinding, or cutting in non-designated areas.",
            "icon": "file-check",
            "tasks": [
                { "id": "MFG-PTW-01", "description": "Identify all combustible materials within a 35-foot (11-meter) radius of the hot work.", "priority": "High", "riskLevel": "High", "consequence": "Fire and explosion.", "proof": "Signed PTW form." },
                { "id": "MFG-PTW-02", "description": "Move combustibles to a safe distance or cover them with fire-retardant blankets.", "priority": "High", "riskLevel": "High", "consequence": "Sparks igniting nearby materials.", "proof": "Photo of the prepared work area." },
                { "id": "MFG-PTW-03", "description": "Ensure a trained fire watch is assigned and present for the duration of the work and for 30 minutes after.", "priority": "High", "riskLevel": "High", "consequence": "Inability to extinguish a small fire before it spreads.", "proof": "Fire watch named on the PTW." },
                { "id": "MFG-PTW-04", "description": "Ensure a fully charged fire extinguisher of the correct type is immediately available.", "priority": "High", "riskLevel": "High", "consequence": "Fire cannot be controlled at inception.", "proof": "Visual check documented on PTW." },
                { "id": "MFG-PTW-05", "description": "Seal all floor and wall openings to prevent sparks from traveling to other areas.", "priority": "High", "riskLevel": "Medium", "consequence": "Fire starting in an unseen area.", "proof": "Photo of sealed openings." },
                { "id": "MFG-PTW-06", "description": "Verify that any sprinkler systems in the area are operational.", "priority": "High", "riskLevel": "High", "consequence": "Primary fire suppression system is not ready.", "proof": "Check with engineering department." },
                { "id": "MFG-PTW-07", "description": "Authorize and issue the permit for a specific time frame only.", "priority": "High", "riskLevel": "Low", "consequence": "Work continues without re-assessment of changing conditions.", "proof": "Signed and dated PTW with start/end times." },
                { "id": "MFG-PTW-08", "description": "Upon completion, the fire watch and permit issuer must inspect the area for smoldering fires before closing the permit.", "priority": "High", "riskLevel": "High", "consequence": "A fire starting after the work crew has left.", "proof": "Final sign-off on the PTW." }
            ]
        },
        {
            "title": "In-Process Quality Control (IPQC)",
            "department": "Quality",
            "frequency": "Hourly/Per Batch",
            "role": "QC Inspector",
            "summary": "Verifies that products meet quality standards at various stages of the production process to prevent large-scale defects.",
            "icon": "clipboard-check",
            "tasks": [
                { "id": "MFG-QC-01", "description": "First-Off Approval: Inspect the first part produced after any new setup against all drawing specifications.", "priority": "High", "riskLevel": "High", "consequence": "Entire batch produced with a defect from the start.", "proof": "Signed First-Off Inspection Report." },
                { "id": "MFG-QC-02", "description": "Random Sampling: Collect and inspect a random sample of products from the line at a set frequency (e.g., 5 pieces per hour).", "priority": "High", "riskLevel": "Medium", "consequence": "Process deviations go undetected, leading to large amounts of scrap.", "proof": "IPQC log sheet with measurements." },
                { "id": "MFG-QC-03", "description": "Verify machine parameters (e.g., temperature, pressure, speed) match the approved process sheet.", "priority": "High", "riskLevel": "Medium", "consequence": "Product produced outside of validated process window.", "proof": "Parameter check log." },
                { "id": "MFG-QC-04", "description": "Check calibration status of all measuring instruments and gauges being used.", "priority": "High", "riskLevel": "High", "consequence": "Making decisions based on faulty measurements.", "proof": "Valid calibration stickers on all instruments." },
                { "id": "MFG-QC-05", "description": "If a non-conformance is found, immediately hold the batch and escalate to the Production Supervisor.", "priority": "High", "riskLevel": "High", "consequence": "Defective products are mixed with good products or shipped to customer.", "proof": "Hold tag on the material and entry in the NC log." },
                { "id": "MFG-QC-06", "description": "Document all inspection results, including measurements and pass/fail status.", "priority": "High", "riskLevel": "Medium", "consequence": "No data for traceability, root cause analysis, or process improvement.", "proof": "Completed IPQC records." },
                { "id": "MFG-QC-07", "description": "Verify that operators are following the standard operating procedures (SOPs) for their process.", "priority": "Medium", "riskLevel": "Medium", "consequence": "Process variations due to operator error.", "proof": "Operator audit checklist." },
                { "id": "MFG-QC-08", "description": "Ensure all non-conforming material is clearly identified and moved to a designated quarantine area.", "priority": "High", "riskLevel": "High", "consequence": "Accidental use of defective parts.", "proof": "Photo of quarantined material with hold tag." }
            ]
        },
        {
            "title": "Chemical Handling & Storage",
            "department": "EHS",
            "frequency": "Weekly",
            "role": "EHS Officer",
            "summary": "Ensures safe handling and storage of hazardous chemicals to prevent spills, fires, and employee exposure.",
            "icon": "test-tube",
            "tasks": [
                { "id": "MFG-CHS-01", "description": "Verify all chemical containers are correctly labeled with name, hazard symbols, and PPE requirements.", "priority": "High", "riskLevel": "High", "consequence": "Misidentification of chemical leading to incorrect use or dangerous reaction.", "proof": "Photo audit of chemical storage area." },
                { "id": "MFG-CHS-02", "description": "Ensure Safety Data Sheets (SDS/MSDS) are readily available for all chemicals on site.", "priority": "High", "riskLevel": "High", "consequence": "Inability to respond correctly to a spill or exposure incident.", "proof": "Index of available SDS files." },
                { "id": "MFG-CHS-03", "description": "Check that incompatible chemicals (e.g., acids and bases) are stored in separate, designated areas.", "priority": "High", "riskLevel": "High", "consequence": "Violent chemical reaction, fire, or toxic gas release.", "proof": "Inspection of chemical storage cabinets/rooms." },
                { "id": "MFG-CHS-04", "description": "Inspect chemical storage areas for leaks, spills, and proper ventilation.", "priority": "High", "riskLevel": "Medium", "consequence": "Employee exposure to fumes, slip hazards, environmental contamination.", "proof": "Weekly storage area inspection log." },
                { "id": "MFG-CHS-05", "description": "Verify that appropriate spill kits are available, fully stocked, and accessible.", "priority": "High", "riskLevel": "High", "consequence": "A small spill becomes a major incident.", "proof": "Spill kit inventory checklist." },
                { "id": "MFG-CHS-06", "description": "Ensure that emergency eyewash stations and safety showers are unobstructed and tested weekly.", "priority": "High", "riskLevel": "High", "consequence": "Inability to decontaminate after a chemical splash, leading to severe injury.", "proof": "Weekly test log for eyewash/showers." },
                { "id": "MFG-CHS-07", "description": "Confirm all employees handling chemicals have received specific training and are using correct PPE.", "priority": "High", "riskLevel": "High", "consequence": "Chemical burns, respiratory damage, long-term health effects.", "proof": "Review of training records and direct observation." },
                { "id": "MFG-CHS-08", "description": "Ensure all chemical waste is accumulated in properly labeled, closed containers for disposal by an authorized vendor.", "priority": "High", "riskLevel": "High", "consequence": "Environmental violations, fines, danger to waste handlers.", "proof": "Inspection of hazardous waste accumulation point." }
            ]
        }
    ]
};

const pharmacy_ops_pack: PremiumPack = {
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
};

const bakery_confectionery_pack: PremiumPack = {
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
};

const animal_shelter_pack: PremiumPack = {
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
                { id: "AC-DC-05", description: "Empty and disinfect all waste bins.", priority: "Low", riskLevel: "Low", consequence: "Pest attraction, odor issues.", proof: "Visual confirmation.", location: "Waste Disposal Area" },
                { id: "AC-DC-06", description: "Launder all used bedding and towels with a sanitizing cycle.", priority: "High", riskLevel: "Medium", consequence: "Spread of mites, ringworm, and other contagions.", proof: "Laundry operations log.", location: "Laundry Area" },
                { id: "AC-DC-07", description: "Ensure proper ventilation in all animal housing areas.", priority: "Medium", riskLevel: "Medium", consequence: "Buildup of airborne pathogens, respiratory illnesses.", proof: "Daily check of ventilation systems.", location: "All Enclosures" },
                { id: "AC-DC-08", description: "Maintain separate cleaning equipment for quarantine/isolation areas.", priority: "High", riskLevel: "High", consequence: "Cross-contamination from sick animals to general population.", proof: "Color-coded equipment and storage.", location: "Quarantine/Isolation" },
                { id: "AC-DC-09", description: "Dispose of biomedical waste (needles, etc.) in designated sharps containers.", priority: "High", riskLevel: "High", consequence: "Injury to staff, improper waste disposal fines.", proof: "Sharps container check log.", location: "Medical Room" },
                { id: "AC-DC-10", description: "Check and refill all hand sanitizer stations and handwashing sinks.", priority: "High", riskLevel: "Low", consequence: "Poor biosecurity, spread of disease among staff/volunteers.", proof: "Daily facility walkthrough log.", location: "All Areas" }
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
                { id: "AI-IQ-05", description: "Place new animal in a designated quarantine enclosure for the required period (e.g., 7-14 days).", priority: "High", riskLevel: "High", consequence: "Introduction of contagious disease to the general population.", proof: "Quarantine placement logged in shelter software.", location: "Quarantine Zone" },
                { id: "AI-IQ-06", description: "Perform a basic temperament test to assess aggression, fear, and sociability.", priority: "High", riskLevel: "Medium", consequence: "Safety risk to staff and other animals.", proof: "Temperament test score sheet.", location: "Intake/Assessment Room" },
                { id: "AI-IQ-07", description: "Create a unique identification collar and record for the animal.", priority: "High", riskLevel: "Low", consequence: "Animal mix-ups.", proof: "ID collar and record in software.", location: "Intake Room" },
                { id: "AI-IQ-08", description: "Provide food, clean water, and comfortable bedding upon arrival.", priority: "High", riskLevel: "Low", consequence: "Animal distress and dehydration.", proof: "Intake checklist sign-off.", location: "Quarantine Enclosure" },
                { id: "AI-IQ-09", description: "Schedule a full veterinary examination within 24 hours of intake.", priority: "High", riskLevel: "High", consequence: "Delayed treatment of serious conditions.", proof: "Vet schedule/appointment log.", location: "Intake Room" },
                { id: "AI-IQ-10", description: "Log all information from the finder/previous owner, if available.", priority: "Medium", riskLevel: "Low", consequence: "Loss of valuable behavioral or medical history.", proof: "Intake form with owner surrender section.", location: "Intake Room" }
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
                { id: "AH-DF-04", description: "Report any abnormalities (lethargy, vomiting, coughing, etc.) to the vet team immediately.", priority: "High", riskLevel: "High", consequence: "A sick animal's condition could deteriorate rapidly without intervention.", proof: "Entry in medical communication log or direct report.", location: "All Enclosures" },
                { id: "AH-DF-05", description: "Ensure animals with special feeding needs (e.g., puppies, seniors) are fed separately.", priority: "High", riskLevel: "Medium", consequence: "Competition for food, incorrect diet consumption.", proof: "Feeding log.", location: "Special Needs Area" },
                { id: "AH-DF-06", description: "Check for and clean up any uneaten food after a set period to prevent pests.", priority: "Medium", riskLevel: "Low", consequence: "Pest infestation.", proof: "Visual check.", location: "All Enclosures" },
                { id: "AH-DF-07", description: "Update the whiteboards or kennel cards with any relevant observations for the next shift.", priority: "High", riskLevel: "Low", consequence: "Loss of critical information between shifts.", proof: "Photo of updated kennel card.", location: "Enclosure fronts" },
                { id: "AH-DF-08", description: "Monitor animals in quarantine/isolation areas last to prevent cross-contamination.", priority: "High", riskLevel: "High", consequence: "Spreading disease to the general population.", proof: "Workflow observation.", location: "Quarantine/Isolation" },
                { id: "AH-DF-09", description: "Ensure enrichment items (e.g., toys) are clean and safe.", priority: "Low", riskLevel: "Low", consequence: "Boredom, stress, potential for swallowing foreign objects.", proof: "Visual check.", location: "All Enclosures" },
                { id: "AH-DF-10", description: "Top up water bowls during afternoon checks.", priority: "High", riskLevel: "Medium", consequence: "Dehydration.", proof: "Visual check.", location: "All Enclosures" }
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
                { id: "AM-MA-04", description: "Securely store all medications, especially controlled substances, in a locked cabinet.", priority: "High", riskLevel: "High", consequence: "Theft, misuse, accidental ingestion, regulatory violations.", proof: "Weekly controlled substance inventory log.", location: "Pharmacy/Storage" },
                { id: "AM-MA-05", description: "Never leave medication unattended or in an animal's food bowl if consumption is not observed.", priority: "High", riskLevel: "High", consequence: "Animal may not receive medication; other animals might eat it.", proof: "Direct observation of administration.", location: "Enclosures" },
                { id: "AM-MA-06", description: "Dispose of used needles and syringes in a designated sharps container.", priority: "High", riskLevel: "High", consequence: "Needlestick injuries to staff.", proof: "Visual check of sharps container.", location: "Medical Room" },
                { id: "AM-MA-07", description: "Check medication inventory and report any drugs running low.", priority: "Medium", riskLevel: "Medium", consequence: "Running out of essential medication.", proof: "Inventory sheet.", location: "Pharmacy/Storage" },
                { id: "AM-MA-08", description: "Use a pill-giver or disguise medication in a treat as approved by the vet.", priority: "Low", riskLevel: "Low", consequence: "Animal refuses to take medication.", proof: "N/A", location: "Enclosures" },
                { id: "AM-MA-09", description: "Verify with a second trained staff member for all controlled drug administrations.", priority: "High", riskLevel: "High", consequence: "Dosing errors or drug diversion.", proof: "Dual signature on MAR.", location: "Treatment Area" },
                { id: "AM-MA-10", description: "Clean any spills of liquid medication immediately.", priority: "Medium", riskLevel: "Low", consequence: "Incorrect dosing, skin absorption by staff.", proof: "Visual check.", location: "Treatment Area" }
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
                { id: "AP-AC-05", description: "Complete all adoption paperwork, including transfer of ownership and microchip registration.", priority: "High", riskLevel: "Low", consequence: "Legal ambiguity over ownership.", proof: "Signed adoption contract and microchip form.", location: "Adoption Center" },
                { id: "AP-AC-06", description: "Provide post-adoption support information (e.g., vet recommendations, trainer contacts).", priority: "Medium", riskLevel: "Low", consequence: "Adopter feels abandoned, small issues become big problems.", proof: "Copy of adoption packet.", location: "Adoption Center" },
                { id: "AP-AC-07", description: "Explain the shelter's return policy.", priority: "High", riskLevel: "Low", consequence: "Misunderstanding about what to do if the adoption doesn't work out.", proof: "Signed adoption contract.", location: "Adoption Center" },
                { id: "AP-AC-08", description: "Ensure adoption fees are collected and processed correctly.", priority: "High", riskLevel: "Low", consequence: "Financial loss.", proof: "Payment receipt.", location: "Adoption Center" },
                { id: "AP-AC-09", description: "Schedule a post-adoption follow-up call or email (e.g., at 3 days, 3 weeks).", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunities to solve early problems.", proof: "Entry in shelter management software.", location: "Adoption Center" },
                { id: "AP-AC-10", description: "Update the animal's record to 'Adopted' and move them out of the 'Available' list.", priority: "High", riskLevel: "Low", consequence: "Animal still shows as available, causing confusion.", proof: "Shelter management software log.", location: "Adoption Center" }
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
                { id: "AV-VM-04", description: "Ensure all volunteers sign in and out for every shift.", priority: "Low", riskLevel: "Low", consequence: "Inaccurate tracking of volunteer hours, security risk.", proof: "Daily sign-in/out sheet.", location: "Reception" },
                { id: "AV-VM-05", description: "Provide specific training for handling fearful or reactive animals.", priority: "High", riskLevel: "High", consequence: "Bite risk to volunteers, increased stress for animals.", proof: "Advanced handling training log.", location: "Training Area" },
                { id: "AV-VM-06", description: "Regularly communicate shelter news, needs, and successes to volunteers.", priority: "Low", riskLevel: "Low", consequence: "Volunteers feel unappreciated and disconnected.", proof: "Copy of volunteer newsletter or email.", location: "Office" },
                { id: "AV-VM-07", description: "Ensure all volunteers working with animals have signed a liability waiver.", priority: "High", riskLevel: "Medium", consequence: "Legal risk to the shelter in case of injury.", proof: "File of signed waivers.", location: "Office" },
                { id: "AV-VM-08", description: "Recognize outstanding volunteers (e.g., 'Volunteer of the Month').", priority: "Low", riskLevel: "Low", consequence: "Poor volunteer retention.", proof: "Photo or announcement.", location: "Common Area/Social Media" },
                { id: "AV-VM-09", description: "Supervise volunteers and provide constructive feedback.", priority: "Medium", riskLevel: "Low", consequence: "Tasks performed incorrectly.", proof: "Supervisor observation notes.", location: "All Areas" },
                { id: "AV-VM-10", description: "Gather feedback from volunteers on their experience and suggestions.", priority: "Low", riskLevel: "Low", consequence: "Missed opportunities for process improvement.", "proof": "Volunteer suggestion box or survey results.", location: "Office" }
            ]
        }
    ]
};

const allPacks: PremiumPack[] = [
    franchise_operations_pack,
    hotels_and_resorts,
    restaurants,
    fashion_and_apparel_retail,
    jewelry_and_luxury_retail,
    electronics_showroom_pack,
    supermarket_grocery_retail_pack,
    facility_management_blueprint,
    corporate_legal_compliance_starter_kit,
    enterprise_risk_cybersecurity_pack,
    healthcare_and_hospital_operations,
    school_operations_pack,
    university_college_ops,
    film_production_pack,
    ott_platform_pack,
    sports_clubs_stadium_operations_pack,
    cinema_operations_pack,
    theme_park_ops_pack,
    logistics_warehouse_pack,
    manufacturing_operations_ehs_pack,
    pharmacy_ops_pack,
    bakery_confectionery_pack,
    animal_shelter_pack,
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
].map(pack => {
    // If a pack (other than master access) is still empty, populate it with some placeholder data
    // to avoid breaking the UI. This should be replaced with real data.
    if (pack.checklists.length === 0 && pack.id !== 'master_access') {
        pack.checklists = [
            {
                title: `General Operations for ${pack.title}`,
                department: 'General',
                frequency: 'Daily',
                role: 'Manager',
                summary: `This is a placeholder checklist for the ${pack.title}. It needs to be replaced with 8-10 detailed checklists containing 80-120 tasks.`,
                icon: 'clipboard-list',
                tasks: [
                    { id: `${pack.id.substring(0,3).toUpperCase()}-01`, description: "Placeholder Task 1: Review daily objectives.", priority: "High", riskLevel: "Low", consequence: "Lack of direction.", proof: "Meeting notes.", location: "Office" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-02`, description: "Placeholder Task 2: Check for safety hazards.", priority: "High", riskLevel: "High", consequence: "Potential for injury.", proof: "Safety log.", location: "All Areas" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-03`, description: "Placeholder Task 3: Ensure area is clean.", priority: "Medium", riskLevel: "Low", consequence: "Poor impression.", proof: "Visual confirmation.", location: "All Areas" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-04`, description: "Placeholder Task 4: Verify equipment functionality.", priority: "Medium", riskLevel: "Medium", consequence: "Operational delays.", proof: "Equipment checklist.", location: "All Areas" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-05`, description: "Placeholder Task 5: Check inventory levels.", priority: "Medium", riskLevel: "Medium", consequence: "Stockouts.", proof: "Inventory system report.", location: "Stockroom" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-06`, description: "Placeholder Task 6: Staff briefing.", priority: "High", riskLevel: "Low", consequence: "Miscommunication.", proof: "Briefing log.", location: "Staff Area" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-07`, description: "Placeholder Task 7: Review customer feedback.", priority: "Medium", riskLevel: "Medium", consequence: "Missed improvement opportunities.", proof: "Feedback summary.", location: "Office" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-08`, description: "Placeholder Task 8: End-of-day reporting.", priority: "High", riskLevel: "Low", consequence: "Lack of data.", proof: "Daily report.", location: "Office" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-09`, description: "Placeholder Task 9: Secure premises at close.", priority: "High", riskLevel: "High", consequence: "Security breach.", proof: "Security log.", location: "Perimeter" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-10`, description: "Placeholder Task 10: Plan for next day.", priority: "Medium", riskLevel: "Low", consequence: "Unprepared start.", proof: "Next day's plan.", location: "Office" }
                ]
            }
        ];
    }
    return pack;
});

    

    




    




