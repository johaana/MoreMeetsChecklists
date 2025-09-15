

import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck } from "lucide-react";

export const premiumPacks = [
    {
        id: 'hospitality_excellence_suite',
        title: "Hospitality Excellence Suite",
        priceUSD: 49.99,
        priceINR: 3999,
        category: "Hospitality",
        description: "For Hotel & Restaurant Managers. A one-time purchase for the complete daily, weekly, and monthly operational toolkit.",
        icon: <Building className="w-8 h-8 text-primary" />,
        mostPopular: true,
        sampleItems: [
            "Daily Front & Back of House SOPs",
            "Weekly Maintenance Schedules",
            "Monthly Audits & Staff Training",
            "Guest Experience Enhancement",
        ],
        checklists: [
            { 
                "title": "Daily Hotel Front Office", 
                "tasks": [
                    "Review shift handover logs and outstanding tasks", 
                    "Check VIP arrivals, departures, and in-house guest list; prepare amenities", 
                    "Audit nightly revenue, occupancy reports, and payment discrepancies", 
                    "Ensure lobby, concierge desk, and common areas are pristine and welcoming",
                    "Manage check-ins/check-outs, ensuring smooth and rapid service",
                    "Respond to guest reviews from the previous day (e.g., TripAdvisor, Google)",
                    "Brief team on daily events, promotions, and special guest requests",
                    "Verify all reservations for the day for accuracy and special notes"
                ] 
            },
            { 
                "title": "Daily Housekeeping", 
                "tasks": [
                    "Prepare and assign room blocks and specific tasks to housekeeping staff",
                    "Inspect a set percentage of cleaned rooms for quality assurance (QA)",
                    "Check and restock all linen closets and supply trolleys",
                    "Report any maintenance issues (leaks, broken items) to engineering immediately",
                    "Manage laundry operations flow, ensuring clean linen availability",
                    "Ensure all public areas (restrooms, corridors, lounges) are cleaned on schedule",
                    "Log and manage lost and found items securely"
                ] 
            },
            { 
                "title": "Weekly Restaurant Operations", 
                "tasks": [
                    "Conduct full inventory of stock (food, beverages, paper goods, chemicals)",
                    "Deep clean kitchen equipment, vents, grease traps, and walk-in freezers",
                    "Review and publish staff rotas for the upcoming week",
                    "Hold a weekly team meeting to discuss performance, specials, and guest feedback",
                    "Analyze sales data to identify top/poor-performing dishes and adjust menu",
                    "Check and document compliance with food safety standards (HACCP, FSSAI)",
                    "Train staff on a new dish, wine pairing, or upselling technique"
                ] 
            },
            { 
                "title": "Monthly Hotel Maintenance & Audit", 
                "tasks": [
                    "Perform preventive maintenance on HVAC, plumbing, and electrical systems",
                    "Conduct a full fire safety and equipment check (extinguishers, alarms, exit lights)",
                    "Audit petty cash, float, and all departmental financial records",
                    "Review supplier contracts, pricing, and performance for cost-effectiveness",
                    "Run mandatory staff training (e.g., emergency procedures, data privacy, new software)",
                    "Analyze guest feedback trends and create a formal action plan for improvement",
                    "Conduct a full property walk-through with all department heads"
                ] 
            },
            {
                "title": "Guest Experience & Quality Assurance",
                "tasks": [
                    "Review guest feedback from all channels (surveys, online reviews, direct comments)",
                    "Personalize stays for repeat guests, loyalty members, or special occasions",
                    "Train staff on advanced complaint handling, resolution, and service recovery",
                    "Conduct a 'mystery shopper' audit to assess service quality from a guest's perspective",
                    "Update in-room directories, marketing materials, and digital signage",
                    "Check and maintain loyalty program benefits and reward fulfillment",
                    "Ensure all guest-facing technology (Wi-Fi, TV, smart-room features) is functional"
                ]
            }
        ]
    },
    {
        id: 'corporate_launchkit',
        title: "Corporate & Startup Launchkit",
        priceUSD: 24.99,
        priceINR: 1999,
        category: "Corporate",
        description: "For Founders & Event Managers. A one-time purchase for flawless corporate events and streamlined launches.",
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Product Launch Event Plan",
            "AGM & Board Meeting Prep",
            "New Employee Onboarding",
            "Trade Show & Conference Planning",
        ],
        checklists: [
            { 
                "title": "Product Launch Event Planning", 
                "tasks": [
                    "Define launch goals and key performance indicators (KPIs)", 
                    "Set a detailed budget for venue, marketing, PR, and staffing",
                    "Select and book a venue with appropriate AV, streaming, and capacity",
                    "Draft and distribute press releases and embargoed media kits",
                    "Develop a multi-channel social media campaign strategy (pre, during, post-event)",
                    "Prepare and rehearse product demonstration scripts and materials",
                    "Coordinate with keynote speakers, presenters, and celebrity guests"
                ] 
            },
            { 
                "title": "New Employee Onboarding", 
                "tasks": [
                    "Send a welcome email with first-day schedule, dress code, and what to bring",
                    "Prepare and send the offer letter, employment contract, and all HR paperwork",
                    "Set up the employee's workstation, laptop, and all required software accounts and permissions",
                    "Schedule orientation sessions (HR policies, IT security, department overview)",
                    "Assign a buddy or mentor for the first few weeks to help acclimate",
                    "Clearly outline the 30-60-90 day goals and performance expectations",
                    "Provide company swag and an office tour"
                ] 
            },
            { 
                "title": "Annual General Meeting (AGM) Preparation", 
                "tasks": [
                    "Send the formal AGM notice to all shareholders and board members as per legal requirements",
                    "Prepare, print, and distribute the annual report and financial statements",
                    "Finalize the agenda, order of proceedings, and motions to be voted upon",
                    "Arrange for proxy voting mechanisms and a system for tabulation",
                    "Book a suitable venue and arrange for catering, security, and audio-visual equipment",
                    "Prepare and rehearse scripts for key speakers (CEO, CFO, Chairman)",
                    "Ensure a qualified person is appointed to record the minutes of the meeting accurately"
                ] 
            },
            {
                "title": "Trade Show & Conference Participation",
                "tasks": [
                    "Register for the event, book booth space, and secure sponsorship opportunities",
                    "Design and produce booth graphics, banners, and marketing materials",
                    "Plan and order promotional giveaways and swag with company branding",
                    "Train booth staff on key talking points, product demos, and lead capture process",
                    "Schedule meetings with key prospects, partners, and media contacts in advance",
                    "Arrange all logistics for booth setup, shipping, and takedown",
                    "Plan a post-show follow-up email campaign for all leads generated"
                ]
            }
        ]
    },
    {
        id: 'coaching_centre_operations',
        title: "Coaching Centre Operations Kit",
        priceUSD: 49.99,
        priceINR: 3999,
        category: "Education",
        description: "An essential toolkit for efficiently managing a tutoring or coaching center for academic excellence.",
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "New Student Admission & Onboarding",
            "Daily Class Scheduling & Admin",
            "Faculty Management & Training",
            "Monthly Performance Reviews"
        ],
        checklists: [
            {
                "title": "Student Admissions & Onboarding",
                "tasks": [
                    "Respond to new inquiries via phone, email, or walk-in",
                    "Conduct assessment tests to determine student's level",
                    "Explain course structure, fee details, and class schedules to parents",
                    "Complete registration form and collect necessary documents",
                    "Process admission fee and first installment payment",
                    "Create student profile in the management system",
                    "Provide welcome kit (ID card, timetable, book list)"
                ]
            },
            {
                "title": "Daily Centre Operations",
                "tasks": [
                    "Ensure classrooms are clean and ready before classes begin",
                    "Check that all teaching aids (whiteboards, markers, projectors) are functional",
                    "Take student attendance for every class and update system",
                    "Monitor CCTV cameras for safety and discipline",
                    "Manage front desk inquiries and parent-teacher meeting requests",
                    "Supervise student dispersal and ensure their safety",
                    "Collect and file daily homework or test papers"
                ]
            },
            {
                "title": "Faculty & Staff Management",
                "tasks": [
                    "Track faculty attendance and punctuality",
                    "Conduct periodic classroom observations to assess teaching quality",
                    "Organize monthly faculty meetings to discuss curriculum and student progress",
                    "Arrange for professional development and training sessions",
                    "Review and approve lesson plans submitted by teachers",
                    "Manage faculty leave requests and arrange for substitute teachers"
                ]
            },
            {
                "title": "Academics & Performance Tracking",
                "tasks": [
                    "Schedule and conduct weekly and monthly tests",
                    "Ensure timely evaluation and distribution of test papers",
                    "Prepare and send monthly progress reports to parents",
                    "Schedule and conduct parent-teacher meetings to discuss student performance",
                    "Identify weak students and arrange for doubt-clearing or remedial sessions",
                    "Maintain a complete record of student academic performance"
                ]
            }
        ]
    },
    {
        id: 'school_safety_operations',
        title: "School Safety & Operations",
        priceUSD: 49.99,
        priceINR: 3999,
        category: "Education",
        description: "A complete operational toolkit for principals and administrators to ensure a safe and efficient school environment.",
        icon: <School className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Daily Campus Security Walkthrough",
            "Monthly Fire & Emergency Drill",
            "Student Arrival & Dismissal Procedure",
            "Classroom Safety & Compliance"
        ],
        checklists: [
            {
                "title": "Daily Opening Checklist",
                "tasks": [
                    "Conduct a perimeter walk to check for vandalism, unsecured gates, or suspicious items",
                    "Test all communication systems (PA system, walkie-talkies)",
                    "Ensure all security cameras are operational and recording",
                    "Verify that all visitor entry points are staffed and sign-in procedures are ready",
                    "Check that all school buses have passed their morning safety inspection",
                    "Confirm that crossing guards are at their posts before student arrival"
                ]
            },
            {
                "title": "Classroom Safety & Readiness",
                "tasks": [
                    "Ensure first aid kits in each classroom are fully stocked",
                    "Verify that emergency exit paths are clear and unblocked",
                    "Check that fire extinguishers are visible and have a valid inspection tag",
                    "Confirm that all classroom technology (smart boards, projectors) is working",
                    "Ensure all hazardous materials in science labs are securely stored",
                    "Check that student allergy and medical information is easily accessible to the teacher"
                ]
            },
            {
                "title": "Student Dismissal Procedure",
                "tasks": [
                    "Verify that only authorized guardians are picking up students, checking IDs if necessary",
                    "Manage bus loading zones to ensure students board the correct bus safely",
                    "Supervise walker and car-rider dismissal areas to maintain order",
                    "Conduct a final sweep of the building to ensure no students are left behind",
                    "Log any late pick-ups and follow parent communication protocol",
                    "Ensure staff remain at their posts until the last student has departed"
                ]
            },
            {
                "title": "Monthly Emergency Preparedness",
                "tasks": [
                    "Conduct a scheduled fire, earthquake, or lockdown drill",
                    "Test the functionality of all emergency alarms and strobe lights",
                    "Review and update the school's emergency response plan with staff",
                    "Check backup power and water supplies",
                    "Inspect playground equipment for safety and report any damage for repair",
                    "Update emergency contact lists for all students and staff"
                ]
            }
        ]
    },
    {
        id: 'uae_real_estate_deal_accelerator',
        title: "UAE Real Estate Deal Accelerator",
        priceUSD: 129.99,
        priceINR: 10499,
        category: "Real Estate",
        description: "The definitive checklist for navigating property transactions in the UAE (Dubai & Abu Dhabi) for buyers, sellers, and agents.",
        icon: <Home className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Buyer & Seller Documentation",
            "MOU & NOC Processes",
            "Dubai Land Department (DLD) Transfer Steps",
            "Handover & Utility Connection",
        ],
        checklists: [
            {
                "title": "Phase 1: Pre-Agreement & Due Diligence",
                "tasks": [
                    "Buyer: Obtain mortgage pre-approval from a UAE bank",
                    "Buyer: Verify property details on DLD's Dubai REST app (Title Deed, size, layout)",
                    "Seller: Ensure property service charges are fully paid and obtain statement",
                    "Both: Appoint a RERA-registered real estate agent",
                    "Both: Agree on final price, payment schedule, and key conditions",
                    "Agent: Prepare and verify all required documents (Passport, Emirates ID, Title Deed copy)"
                ]
            },
            {
                "title": "Phase 2: Memorandum of Understanding (MOU) & NOC",
                "tasks": [
                    "Agent: Draft the MOU (Form F) detailing the terms of the sale",
                    "Buyer: Pay the security deposit (typically 10% of purchase price) to the agent's escrow or registration trustee office",
                    "Both: Sign the MOU at the registration trustee office",
                    "Seller: Apply for the No Objection Certificate (NOC) from the property developer",
                    "Seller: Pay any outstanding developer fees to obtain the NOC",
                    "Seller: Settle final utility bills (DEWA/ADDC, District Cooling) and obtain clearance"
                ]
            },
            {
                "title": "Phase 3: DLD Transfer & Financial Settlement",
                "tasks": [
                    "Buyer's Bank: Issue final offer letter after property valuation",
                    "Both: Schedule an appointment at a Dubai Land Department (DLD) trustee office for the transfer",
                    "Buyer: Prepare manager's cheques for the seller, DLD fees (4% of property price), and trustee fees",
                    "Seller: Prepare manager's cheque for agency commission",
                    "Both: Attend the transfer meeting with all original documents",
                    "DLD: Issue the new Title Deed in the buyer's name"
                ]
            },
            {
                "title": "Phase 4: Handover and Post-Transfer",
                "tasks": [
                    "Seller: Hand over all keys, access cards, and relevant documents to the buyer",
                    "Buyer: Register the new Title Deed with DEWA/ADDC to connect utilities",
                    "Buyer: Register for district cooling (Empower/Tabreed) and gas services",
                    "Buyer: Obtain a 'Move-In Permit' from the building/community management",
                    "Agent: Release the security deposit to the seller upon successful transfer",
                    "Both: Confirm closure of the deal and settle any final outstanding items"
                ]
            }
        ]
    },
    {
        id: 'courier_delivery_playbook',
        title: "Courier & Delivery Service Playbook",
        priceUSD: 59.99,
        priceINR: 4799,
        category: "Logistics",
        description: "The complete operational toolkit for starting and scaling a courier and last-mile delivery business.",
        icon: <Truck className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Driver Onboarding & Training",
            "Package Handling & Sorting SOPs",
            "Fleet Management & Maintenance",
            "Customer Service Protocols"
        ],
        checklists: [
            {
                "title": "Driver Onboarding & Vetting",
                "tasks": [
                    "Verify driver's license, Emirates ID, and visa status",
                    "Conduct a background check and review driving history",
                    "Provide training on the delivery software/app",
                    "Train on customer service standards and proof-of-delivery procedures",
                    "Issue uniforms, ID badges, and necessary equipment (phone, charger)",
                    "Set up driver payment and performance bonus structure"
                ]
            },
            {
                "title": "Daily Hub Operations (Morning)",
                "tasks": [
                    "Receive and scan all incoming shipments into the system",
                    "Sort packages by delivery zone and route",
                    "Assign routes and packages to drivers in the app",
                    "Conduct pre-departure vehicle checks (tires, fuel, lights)",
                    "Ensure all drivers have handheld scanners and they are fully charged",
                    "Dispatch drivers and monitor initial route progress"
                ]
            },
            {
                "title": "Package Handling & Delivery",
                "tasks": [
                    "Follow special handling instructions (e.g., fragile, refrigerated)",
                    "Update package status in real-time at each step (picked up, out for delivery)",
                    "Attempt delivery and follow protocol for non-serviceable areas or absent customers",
                    "Capture clear and accurate proof of delivery (photo, signature, location stamp)",
                    "Handle cash-on-delivery (COD) collections and reconciliation",
                    "Manage returns and failed delivery attempts, and schedule redelivery"
                ]
            },
            {
                "title": "Fleet & Safety Management",
                "tasks": [
                    "Schedule weekly and monthly vehicle maintenance",
                    "Monitor fuel consumption and driver behavior using telematics",
                    "Ensure all vehicles have required safety equipment (first aid kit, fire extinguisher)",
                    "Conduct regular safety briefings and training sessions",
                    "Maintain vehicle registration and insurance documents",
                    "Investigate and document any accidents or incidents immediately"
                ]
            }
        ]
    },
    {
        id: 'warehouse_logistics_mgmt',
        title: "Warehouse & Logistics Management",
        priceUSD: 69.99,
        priceINR: 5599,
        category: "Logistics",
        description: "Master your supply chain with checklists for efficient warehouse and transportation operations.",
        icon: <Warehouse className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Inbound Goods Receiving Protocol",
            "Inventory Cycle Counting",
            "Order Picking & Packing Accuracy",
            "Pre-Departure Vehicle Inspection"
        ],
        checklists: [
            {
                "title": "Goods Receiving (Inbound)",
                "tasks": [
                    "Schedule and log all incoming deliveries",
                    "Inspect shipment for visible damage before accepting",
                    "Verify pallet count and contents against the packing slip and purchase order (PO)",
                    "Scan items into the Warehouse Management System (WMS)",
                    "Label products with internal SKU and storage location",
                    "Move goods to designated put-away zones or quality inspection area"
                ]
            },
            {
                "title": "Inventory Management & Storage",
                "tasks": [
                    "Perform daily/weekly cycle counts on high-value items (A-items)",
                    "Ensure First-In, First-Out (FIFO) or Last-In, First-Out (LIFO) stock rotation is followed",
                    "Check for and report any damaged or expired stock",
                    "Consolidate inventory to optimize storage space",
                    "Monitor temperature and humidity in climate-controlled zones",
                    "Ensure all aisles and pathways are clear of obstructions"
                ]
            },
            {
                "title": "Order Fulfillment (Outbound)",
                "tasks": [
                    "Generate and assign pick lists to warehouse staff",
                    "Pick items accurately using scanners to minimize errors",
                    "Pack orders securely with appropriate dunnage to prevent damage",
                    "Generate and affix shipping labels and invoices",
                    "Move packed orders to the correct staging area for dispatch",
                    "Update order status in the WMS/e-commerce platform"
                ]
            },
            {
                "title": "Fleet & Dispatch Management",
                "tasks": [
                    "Conduct pre-departure safety inspection on all vehicles (tires, lights, brakes)",
                    "Ensure drivers have all necessary paperwork (delivery notes, permits)",
                    "Optimize delivery routes for fuel efficiency and time",
                    "Track shipments in real-time and provide updates to customers",
                    "Conduct regular vehicle maintenance and servicing",
                    "Debrief drivers post-delivery to note any issues or delays"
                ]
            }
        ]
    },
    {
        id: 'manufacturing_plant_ops',
        title: "Manufacturing Plant Operations",
        priceUSD: 79.99,
        priceINR: 6499,
        category: "Manufacturing",
        description: "Comprehensive checklists for ensuring safety, quality, and efficiency on the factory floor.",
        icon: <Factory className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Daily Machine Safety Checks",
            "Quality Control (QC) at Every Stage",
            "End-of-Shift Handover Protocol",
            "Weekly Maintenance Schedule"
        ],
        checklists: [
            {
                "title": "Daily Pre-Shift Startup",
                "tasks": [
                    "Verify all safety guards and emergency stops are functional on machinery",
                    "Check for fluid leaks (hydraulic, coolant) around workstations",
                    "Ensure proper ventilation and air quality levels",
                    "Confirm all operators have and are using required Personal Protective Equipment (PPE)",
                    "Review production schedule and material requirements for the shift",
                    "Check calibration of critical measurement tools and equipment"
                ]
            },
            {
                "title": "In-Process Quality Control (QC)",
                "tasks": [
                    "First-piece inspection and approval before starting a production run",
                    "Hourly checks of product dimensions and specifications against blueprints",
                    "Visual inspection for defects (scratches, cracks, discoloration)",
                    "Segregate and document any non-conforming parts",
                    "Ensure all QC records are filled out accurately and in real-time",
                    "Monitor machine parameters (temperature, pressure, speed) for deviations"
                ]
            },
            {
                "title": "Weekly Maintenance & Cleaning",
                "tasks": [
                    "Lubricate all moving parts of machinery as per manufacturer's guidelines",
                    "Clean and replace machine filters (air, oil, coolant)",
                    "Inspect belts, chains, and gears for wear and tear",
                    "Deep clean all workstations and remove metal shavings, dust, and debris",
                    "Test backup power systems and emergency lighting",
                    "Restock first aid kits and check fire extinguisher expiry dates"
                ]
            },
            {
                "title": "End-of-Shift Handover",
                "tasks": [
                    "Complete production logs with quantities produced, scrapped, and reworked",
                    "Communicate any machine issues or quality alerts to the incoming shift supervisor",
                    "Clean personal workstation and return all tools to their designated storage",
                    "Ensure raw material hoppers are sufficiently filled for the next shift",
                    "Properly label and store any work-in-progress (WIP) materials",
                    "Log out of all computer systems and secure the area"
                ]
            }
        ]
    },
    {
        id: 'esg_reporting_framework',
        title: "Corporate ESG Reporting Framework",
        priceUSD: 89.99,
        priceINR: 7199,
        category: "Sustainability",
        description: "A comprehensive checklist for gathering data and creating an annual ESG (Environmental, Social, Governance) report.",
        icon: <Leaf className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Greenhouse Gas (GHG) Emissions Tracking",
            "Diversity, Equity & Inclusion (DEI) Metrics",
            "Board Governance & Ethics Policies",
            "Supply Chain Due Diligence"
        ],
        checklists: [
            {
                "title": "Environmental Data Collection",
                "tasks": [
                    "Collect utility bills to calculate Scope 1 & 2 GHG emissions",
                    "Track total water consumption and recycling rates",
                    "Measure total waste generated, breaking it down by landfill, recycled, and composted",
                    "Document energy conservation initiatives implemented during the year",
                    "Report any environmental fines or non-compliance incidents",
                    "Gather data on business travel to estimate Scope 3 emissions"
                ]
            },
            {
                "title": "Social Metrics & Employee Data",
                "tasks": [
                    "Compile workforce data: gender, age, ethnicity ratios at all levels",
                    "Report on Diversity, Equity, and Inclusion (DEI) programs and their impact",
                    "Track and report employee turnover rate (voluntary and involuntary)",
                    "Document total hours and average cost of employee training",
                    "Report on health and safety metrics (e.g., incident rates, lost time)",
                    "Summarize community engagement and corporate volunteering programs"
                ]
            },
            {
                "title": "Governance & Ethics",
                "tasks": [
                    "Verify and describe board independence and oversight of ESG issues",
                    "Document executive compensation policies and link to ESG performance",
                    "Report on whistleblower policies and number of cases reported",
                    "Confirm that anti-corruption and anti-bribery training has been conducted",
                    "Describe the company's data privacy and cybersecurity policies",
                    "Disclose any political contributions or lobbying activities"
                ]
            },
            {
                "title": "Report Drafting & Verification",
                "tasks": [
                    "Choose a reporting framework to follow (e.g., GRI, SASB, TCFD)",
                    "Draft the narrative for each section of the ESG report",
                    "Create data visualizations (charts, graphs) for key metrics",
                    "Conduct an internal review of the report for accuracy and completeness",
                    "Engage a third-party auditor for external assurance of ESG data (optional but recommended)",
                    "Design and publish the final report on the company website"
                ]
            }
        ]
    },
    {
        id: 'iso_9001_audit_prep',
        title: "ISO 9001 Compliance Audit Prep",
        priceUSD: 99.99,
        priceINR: 7999,
        category: "Compliance",
        description: "A complete toolkit to prepare your organization for a successful ISO 9001 quality management audit.",
        icon: <Shield className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Quality Manual & Document Control",
            "Management Responsibility Review",
            "Internal Audit & Corrective Actions",
            "Resource Management"
        ],
        checklists: [
            {
                "title": "Document Control & Records",
                "tasks": [
                    "Verify the latest version of the Quality Manual is distributed and accessible",
                    "Ensure all procedures and work instructions are version-controlled",
                    "Check that document change history is being maintained",
                    "Confirm that obsolete documents have been removed from circulation",
                    "Audit records to ensure they are legible, identifiable, and retrievable",
                    "Verify data backup and disaster recovery procedures for digital records"
                ]
            },
            {
                "title": "Management & Leadership",
                "tasks": [
                    "Confirm that the Quality Policy is understood at all levels of the organization",
                    "Review minutes from management review meetings for completeness",
                    "Ensure that quality objectives are measurable and aligned with the policy",
                    "Verify that roles, responsibilities, and authorities are clearly defined",
                    "Check evidence of management's commitment to continual improvement",
                    "Ensure customer requirements and feedback are being reviewed by management"
                ]
            },
            {
                "title": "Resource Management",
                "tasks": [
                    "Verify that employee training records are up-to-date and show competency",
                    "Ensure that the work environment is suitable for achieving product quality",
                    "Check that infrastructure (equipment, software, facilities) is being maintained",
                    "Confirm that processes are in place to identify future resource needs",
                    "Assess employee awareness of the relevance and importance of their activities",
                    "Review job descriptions for clarity on required competencies"
                ]
            },
            {
                "title": "Product Realization & Service Delivery",
                "tasks": [
                    "Audit the process for reviewing and approving customer orders/contracts",
                    "Verify that design and development inputs, outputs, and reviews are documented",
                    "Check purchasing process to ensure suppliers are evaluated and selected based on quality",
                    "Ensure that production equipment is validated and capable",
                    "Verify that monitoring and measuring devices are calibrated and controlled",
                    "Trace a product/service from order to delivery to check for conformity"
                ]
            },
            {
                "title": "Measurement, Analysis, and Improvement",
                "tasks": [
                    "Verify a formal internal audit program is in place and being followed",
                    "Check that customer satisfaction is being monitored and analyzed",
                    "Review the process for controlling nonconforming products",
                    "Ensure a corrective and preventive action (CAPA) process is being used effectively",
                    "Analyze data to identify trends and areas for improvement",
                    "Confirm that internal audit results are reported to management"
                ]
            }
        ]
    },
    {
        id: 'sports_club_management',
        title: "Sports Club Management Suite",
        priceUSD: 39.99,
        priceINR: 3199,
        category: "Recreation",
        description: "An all-in-one checklist package for managing a successful sports club, from member relations to facility upkeep.",
        icon: <Trophy className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "New Member Onboarding",
            "Daily Facility & Equipment Inspection",
            "Event & Tournament Planning",
            "Weekly Staff & Coach Meeting"
        ],
        checklists: [
            {
                "title": "Daily Facility Operations",
                "tasks": [
                    "Inspect all sports surfaces (courts, fields) for hazards or damage",
                    "Check and clean locker rooms, showers, and restrooms",
                    "Test all fitness equipment for proper function and safety",
                    "Ensure front desk is staffed and ready for member check-in",
                    "Restock supplies (towels, water, first aid)",
                    "Review and post daily schedules for classes and court bookings"
                ]
            },
            {
                "title": "Membership Management",
                "tasks": [
                    "Process new member applications and payments",
                    "Conduct a welcome orientation for new members, explaining club rules and amenities",
                    "Follow up on membership renewal reminders for expiring accounts",
                    "Address and log any member complaints or feedback",
                    "Update the member database with any changes to contact information",
                    "Plan and promote a member appreciation event or special offer"
                ]
            },
            {
                "title": "Tournament & Event Planning",
                "tasks": [
                    "Set event date, budget, and format",
                    "Open registration and manage team/player entries",
                    "Create and distribute the tournament schedule or bracket",
                    "Arrange for officials, referees, or judges",
                    "Organize trophies, medals, and prizes for winners",
                    "Plan for concessions, medical support, and volunteer staffing"
                ]
            },
            {
                "title": "Weekly Administrative Tasks",
                "tasks": [
                    "Process payroll for all staff and coaches",
                    "Review and pay invoices from suppliers and vendors",
                    "Analyze weekly revenue from memberships, classes, and sales",
                    "Hold a weekly meeting with all department heads and coaches",
                    "Plan social media content and email newsletters for the upcoming week",
                    "Conduct inventory of pro-shop merchandise and sports equipment"
                ]
            }
        ]
    },
    {
        id: 'hindu_wedding_planner',
        title: "The Ultimate Hindu Wedding Planner",
        priceUSD: 34.99,
        priceINR: 2799,
        category: "Wedding",
        description: "A comprehensive, multi-day checklist for planning a traditional Hindu wedding, from pre-wedding rituals to the final reception.",
        icon: <Heart className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Detailed Sangeet, Mehndi & Haldi planning",
            "Baraat & Varmala coordination",
            "Mandap ceremony logistics",
            "Vendor management for rituals",
        ],
        checklists: [
            { 
                "title": "Initial Planning & Vendor Booking (9-12 Months Out)", 
                "tasks": [
                    "Finalize budget with both families", 
                    "Create guest list and estimate final count",
                    "Book Pandit/Priest for all ceremonies",
                    "Book main wedding venue and reception hall",
                    "Book caterer specializing in required cuisine",
                    "Book photographer & videographer",
                    "Book makeup artist & hair stylist"
                ] 
            },
            { 
                "title": "Sangeet Ceremony Checklist", 
                "tasks": [
                    "Book Sangeet venue (if different from main venue)",
                    "Hire DJ or live band",
                    "Choreograph and practice family dance performances",
                    "Plan Sangeet decor, theme, and lighting",
                    "Organize food and beverage menu for the event",
                    "Rent or set up a dance floor and stage"
                ] 
            },
            {
                "title": "Mehndi Ceremony Checklist",
                "tasks": [
                    "Book professional Mehndi artists for the bride and guests",
                    "Finalize Mehndi designs for the bride",
                    "Arrange comfortable seating and lighting for the artists and guests",
                    "Organize music and entertainment for the event",
                    "Plan a specific menu for the Mehndi (often finger foods and drinks)",
                    "Purchase or arrange Mehndi party favors for guests"
                ]
            },
            {
                "title": "Haldi Ceremony Checklist",
                "tasks": [
                    "Prepare or purchase the Haldi paste",
                    "Arrange a designated area for the ceremony with proper seating",
                    "Organize traditional attire (usually yellow) for family members",
                    "Arrange for floral jewelry (phoolon ka gehna) for the bride",
                    "Plan for music (Dholki or recorded) during the ceremony",
                    "Ensure a changing/shower area is available post-ceremony"
                ]
            },
            { 
                "title": "Wedding Day: Baraat, Varmala & Mandap", 
                "tasks": [
                    "Coordinate Baraat assembly point and route",
                    "Arrange horse/vintage car for the groom",
                    "Organize Baraat welcome (Milni) by the bride's family",
                    "Ensure Varmalas (garlands) are ready and fresh",
                    "Check Mandap setup, decor, and sacred fire (havan kund) arrangements",
                    "Verify all items for the ceremony (puja samagri) are present",
                    "Coordinate bride's entry (phoolon ki chaadar)",
                    "Finalize Kanyadaan and Saptapadi ceremony logistics"
                ] 
            },
            { 
                "title": "Post-Wedding: Reception & Vidaai", 
                "tasks": [
                    "Plan reception stage, seating chart, and decor",
                    "Coordinate couple's grand entrance",
                    "Schedule cake-cutting ceremony and first dance",
                    "Arrange for guest book or photo booth",
                    "Plan the Vidaai ceremony and prepare the decorated car",
                    "Settle final payments with all vendors"
                ] 
            }
        ]
    },
    {
        id: 'christian_wedding_planner',
        title: "The Complete Christian Wedding Planner",
        priceUSD: 29.99,
        priceINR: 2399,
        category: "Wedding",
        description: "From the engagement party to the final send-off, a detailed checklist for a modern Christian wedding ceremony and reception.",
        icon: <Cross className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Church ceremony coordination",
            "Bridal party management",
            "Reception planning and timeline",
            "Legal documentation and registration",
        ],
        checklists: [
            { 
                "title": "Initial Planning & Legalities (9-12 Months Out)", 
                "tasks": [
                    "Set a budget", 
                    "Book the Church and Officiant/Priest",
                    "Complete pre-cana or marriage preparation course",
                    "Book reception venue",
                    "Finalize guest list",
                    "Book key vendors: photographer, caterer, DJ/band"
                ] 
            },
            {
                "title": "Bridal & Groom's Party",
                "tasks": [
                    "Select Maid of Honor, Best Man, bridesmaids, and groomsmen",
                    "Shop for and order wedding gown and groom's tuxedo/suit",
                    "Coordinate and order attire for the entire bridal party",
                    "Plan and book bridal shower and bachelor/bachelorette parties",
                    "Purchase gifts for the bridal party and parents"
                ]
            },
            { 
                "title": "The Ceremony", 
                "tasks": [
                    "Plan the order of service (processional, readings, vows, recessional)",
                    "Print wedding programs/service sheets for guests",
                    "Book ceremony musicians (organist, string quartet, vocalist)",
                    "Plan and decorate the church (altar flowers, pew decorations)",
                    "Conduct a wedding rehearsal with the full bridal party and officiant",
                    "Appoint ushers to seat guests"
                ] 
            },
            { 
                "title": "The Reception", 
                "tasks": [
                    "Finalize menu and cake details with the caterer",
                    "Create a detailed seating chart",
                    "Plan the reception timeline: grand entrance, first dance, speeches/toasts, cake cutting",
                    "Choose and order wedding favors for guests",
                    "Confirm final guest count with the venue and caterer",
                    "Arrange transportation for the couple's final send-off"
                ] 
            }
        ]
    },
    {
        id: 'muslim_wedding_planner',
        title: "Complete Muslim Wedding Planner",
        priceUSD: 34.99,
        priceINR: 2799,
        category: "Wedding",
        description: "A detailed guide to planning a traditional Muslim wedding, including the Nikah, Meher, and Walima ceremonies.",
        icon: <Heart className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Nikah Ceremony Logistics",
            "Meher & Contract Finalization",
            "Walima Reception Planning",
            "Culturally-Specific Vendor Management"
        ],
        checklists: [
            {
                "title": "Pre-Wedding (6-12 Months)",
                "tasks": [
                    "Formal proposal and family consent (Istikhara, Mangni)",
                    "Set a budget in consultation with both families",
                    "Finalize the Meher (dower) between the families",
                    "Book the Imam/Qazi to officiate the Nikah",
                    "Book venues for Nikah, reception, and Walima",
                    "Hire caterer with Halal certification and menu planning",
                    "Book photographer/videographer experienced in Muslim weddings"
                ]
            },
            {
                "title": "Nikah Ceremony Preparation",
                "tasks": [
                    "Finalize the Nikah contract (Nikah-nama) with legal review",
                    "Appoint two adult Muslim witnesses (for the groom's side)",
                    "Appoint the Wali (bride's guardian)",
                    "Plan the decor for the Nikah venue (often gender-segregated)",
                    "Arrange for the groom's procession (Baraat)",
                    "Purchase wedding attire for bride (e.g., Sharara, Gharara) and groom (e.g., Sherwani)"
                ]
            },
            {
                "title": "Wedding Day: Nikah Ceremony",
                "tasks": [
                    "Confirm arrival of Imam, witnesses, and all key family members",
                    "Bride gives her consent (Ijab-e-Qubool) to the Wali",
                    "Imam reads the sermon (Khutbah) and performs the Nikah",
                    "Groom and Wali (on behalf of the bride) sign the Nikah-nama, along with witnesses",
                    "Public announcement of the Meher",
                    "Duas (prayers) for the couple",
                    "Post-Nikah sweets and refreshments distribution"
                ]
            },
            {
                "title": "Post-Nikah & Rukhsati",
                "tasks": [
                    "Aarsimashaf (couple sees each other in a mirror)",
                    "Post-Nikah dinner or reception hosted by the bride's family",
                    "Coordinate the Rukhsati (bride's farewell) ceremony",
                    "Plan for the bride's departure and welcome at the groom's home"
                ]
            },
            {
                "title": "Walima (Groom's Reception)",
                "tasks": [
                    "Send out invitations for the Walima, hosted by the groom's family",
                    "Plan the menu, decor, and seating arrangements for the Walima venue",
                    "Arrange for a separate stage/seating for the couple",
                    "Coordinate the couple's entrance",
                    "Plan for guest greetings and introductions",
                    "Settle final payments with all Walima-related vendors"
                ]
            }
        ]
    }
];

export type PremiumPack = typeof premiumPacks[0];

    

    


