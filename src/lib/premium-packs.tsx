

import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane } from "lucide-react";

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
            "Guest Experience Enhancement Protocol",
        ],
        checklists: [
            {
                "title": "Daily Hotel Front Office SOP",
                "tasks": [
                    "Audit nightly revenue reports, reconcile payment discrepancies, and distribute summary",
                    "Review shift handover log; brief team on outstanding tasks, daily events, and promotions",
                    "Verify VIP list for next 24 hours; coordinate with housekeeping and room service for amenities",
                    "Inspect lobby, concierge desk, and common areas for pristine condition",
                    "Manage check-ins/check-outs, ensuring rapid service and handling early/late requests",
                    "Respond to all guest reviews from the previous day (TripAdvisor, Google, etc.)",
                    "Check and restock front desk supplies (key cards, registration forms, pens)"
                ]
            },
            {
                "title": "Daily Housekeeping SOP",
                "tasks": [
                    "Prepare and assign room blocks and specific cleaning tasks to housekeeping staff",
                    "Inspect a set percentage (e.g., 15%) of cleaned rooms for quality assurance (QA)",
                    "Check and restock all linen closets and supply trolleys; report shortages",
                    "Immediately log any maintenance issues (leaks, broken items) in the engineering portal",
                    "Manage laundry operations flow, ensuring clean linen availability for peak times",
                    "Log, tag, and securely store all lost and found items as per hotel policy",
                    "Conduct a 15-minute pre-shift briefing on safety and any special guest requirements"
                ]
            },
            {
                "title": "Weekly Restaurant Operations",
                "tasks": [
                    "Conduct full inventory of all stock (food, beverages, chemicals) and place new orders",
                    "Deep clean kitchen equipment: vents, grease traps, walk-in freezers/chillers",
                    "Finalize and publish staff rotas for the upcoming week, ensuring fair shift distribution",
                    "Analyze weekly sales data to identify top/poor-performing dishes and adjust menu/specials",
                    "Conduct mandatory 30-minute training session (e.g., new dish, upselling, allergen handling)",
                    "Verify and document compliance with food safety standards (HACCP, FSSAI)",
                    "Review supplier performance and pricing; flag any issues for management"
                ]
            },
            {
                "title": "Monthly Hotel Maintenance & Audit",
                "tasks": [
                    "Perform and document preventive maintenance on HVAC, plumbing, and electrical systems",
                    "Conduct and record a full fire safety equipment check (extinguishers, alarms, exit lights)",
                    "Perform a full property walk-through with all department heads to identify aesthetic issues",
                    "Audit petty cash, float, and all departmental financial records for discrepancies",
                    "Analyze guest feedback trends from the past month and create a formal action plan",
                    "Run mandatory staff training (e.g., emergency procedures, data privacy)",
                    "Review and update the hotel's emergency response and evacuation plan"
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
                    "Define launch goals and KPIs (e.g., media mentions, leads generated, sign-ups)",
                    "Set a detailed budget with line items for venue, A/V, marketing, PR, and staffing",
                    "Select and book a venue with appropriate tech (streaming, Wi-Fi) and capacity",
                    "Draft and distribute press releases and embargoed media kits to targeted journalists",
                    "Develop social media campaign (pre-event teasers, live coverage, post-event highlights)",
                    "Prepare and rehearse product demonstration scripts, including contingency for tech failures",
                    "Finalize run-of-show document detailing every minute of the event schedule",
                    "Coordinate with keynote speakers, confirming travel, lodging, and presentation needs"
                ]
            },
            {
                "title": "New Employee Onboarding (First Week)",
                "tasks": [
                    "Send a welcome email with first-day schedule, dress code, and what to bring",
                    "Ensure employment contract and all HR paperwork (NDA, tax forms) are signed and filed",
                    "Set up workstation, laptop, and all software accounts/permissions before they arrive",
                    "Schedule orientation sessions: HR policies, IT security, and an overview from their department head",
                    "Assign a 'buddy' or mentor for the first few weeks",
                    "Clearly outline the 30-60-90 day goals and schedule the first formal check-in",
                    "Provide company swag, an office tour, and introductions to key team members"
                ]
            },
            {
                "title": "Annual General Meeting (AGM) Preparation",
                "tasks": [
                    "Send the formal AGM notice to all shareholders and board members as per legal statutes",
                    "Compile, print, and distribute the annual report and audited financial statements",
                    "Finalize the agenda, order of proceedings, and motions to be voted upon",
                    "Arrange for proxy voting mechanisms and a certified system for tabulation",
                    "Prepare and rehearse scripts for key speakers (CEO, CFO, Chairman), including potential Q&A",
                    "Appoint a qualified person to record the minutes of the meeting accurately",
                    "Ensure venue has adequate security, registration desks, and audio-visual support"
                ]
            },
            {
                "title": "Trade Show & Conference Participation",
                "tasks": [
                    "Register for the event, book booth space, and secure any available sponsorship opportunities",
                    "Design, produce, and ship booth graphics, banners, and marketing materials",
                    "Plan and order promotional giveaways that are useful and branded",
                    "Train booth staff on key talking points, product demos, and lead capture process using a specific app/form",
                    "Schedule meetings with key prospects, partners, and media contacts in advance",
                    "Create a post-show follow-up email campaign segmented by lead quality",
                    "Arrange all logistics for booth setup, utilities (power, internet), and takedown"
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
            "Classroom & Facility Safety Audit"
        ],
        checklists: [
            {
                "title": "Daily Opening & Campus Security Checklist",
                "tasks": [
                    "Conduct a full perimeter walk to check for vandalism, unsecured gates, or suspicious items",
                    "Test a random sample of communication systems (PA system, walkie-talkies, emergency buttons)",
                    "Verify all primary security cameras are operational and recording with correct timestamps",
                    "Ensure all visitor entry points are staffed and sign-in/ID verification procedures are ready",
                    "Check that all school buses have passed their morning safety inspection before departure",
                    "Confirm that crossing guards are at their posts 15 minutes before student arrival time"
                ]
            },
            {
                "title": "Classroom & Common Area Safety",
                "tasks": [
                    "Ensure first aid kits in each classroom are fully stocked and items are not expired",
                    "Verify that emergency exit paths, hallways, and doorways are clear and unblocked",
                    "Check that fire extinguishers are visible, accessible, and have a valid inspection tag",
                    "Confirm that all hazardous materials in science labs are securely stored and inventoried",
                    "Check that student allergy and medical emergency information is easily accessible to the teacher",
                    "Inspect nurse's office for adequate supplies and cleanliness"
                ]
            },
            {
                "title": "Student Dismissal & Lost-and-Found Protocol",
                "tasks": [
                    "Verify that only authorized guardians are picking up students, checking IDs for any unfamiliar faces",
                    "Manage bus loading zones to ensure students board the correct bus safely and in an orderly manner",
                    "Supervise walker and car-rider dismissal areas to maintain order and traffic flow",
                    "Conduct a final sweep of common areas (library, cafeteria, playground) to ensure no students are left behind",
                    "Log any late pick-ups and follow the school's parent communication protocol",
                    "Photograph, log, and store any items left behind in a designated Lost and Found area"
                ]
            },
            {
                "title": "Monthly Emergency Preparedness & Drills",
                "tasks": [
                    "Conduct a scheduled fire, earthquake, or lockdown drill and record the time taken to evacuate/secure",
                    "Test the functionality of all emergency alarms, backup generators, and strobe lights",
                    "Review and update the school's emergency response plan with staff, noting any procedure changes",
                    "Inspect all playground equipment for safety hazards (loose bolts, sharp edges) and report for repair",
                    "Update and verify emergency contact lists for all students and staff",
                    "Restock all emergency supply kits (e.g., water, non-perishable food, blankets)"
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
            "Resource Management & Competency"
        ],
        checklists: [
            {
                "title": "Document Control & Records",
                "tasks": [
                    "Verify the latest version of the Quality Manual is distributed and acknowledged by key personnel",
                    "Ensure all procedures and work instructions have a clear version number and revision date",
                    "Check that a master document list exists and is up-to-date",
                    "Confirm that obsolete documents have been archived and removed from points of use",
                    "Audit a sample of records to ensure they are legible, identifiable, and retrievable within 5 minutes",
                    "Verify data backup and disaster recovery procedures for digital records have been tested this quarter"
                ]
            },
            {
                "title": "Management & Leadership",
                "tasks": [
                    "Confirm that the Quality Policy is displayed and understood at all levels of the organization",
                    "Review minutes from the last two management review meetings for completeness and action items",
                    "Ensure that quality objectives are SMART (Specific, Measurable, Achievable, Relevant, Time-bound)",
                    "Verify that organizational charts and job descriptions clearly define roles and responsibilities",
                    "Check for evidence of management's commitment to continual improvement (e.g., allocated budget, resources)",
                    "Ensure customer feedback (complaints and compliments) is a standing agenda item in management reviews"
                ]
            },
            {
                "title": "Product Realization & Service Delivery",
                "tasks": [
                    "Audit the process for reviewing and approving new customer orders or contracts",
                    "Verify that design and development inputs, outputs, and reviews are documented and signed off",
                    "Check purchasing process: ensure suppliers are evaluated and a record of approved suppliers is maintained",
                    "Trace a recent product/service from order to delivery, checking all conformity records",
                    "Verify that all monitoring and measuring devices (e.g., calipers, scales, sensors) have a valid calibration sticker",
                    "Ensure a clear process exists for identifying and segregating nonconforming products"
                ]
            },
            {
                "title": "Measurement, Analysis, and Improvement",
                "tasks": [
                    "Verify a formal internal audit schedule is in place and audits are being completed on time",
                    "Check that customer satisfaction (and dissatisfaction) is being monitored via surveys, feedback, etc.",
                    "Review the log for corrective and preventive actions (CAPA) to ensure root cause analysis was performed",
                    "Ensure CAPAs are being closed out in a timely manner and their effectiveness is verified",
                    "Analyze quality data (e.g., defect rates, on-time delivery) to identify trends and areas for improvement",
                    "Confirm that internal audit results and improvement data are reported to top management"
                ]
            }
        ]
    },
     {
        id: 'jewellery_store_ops',
        title: "Jewellery Store Operations & Security",
        priceUSD: 149.99,
        priceINR: 11999,
        category: "Retail",
        description: "The definitive security and operations manual for high-value jewellery retail. Protect your assets, staff, and customers.",
        icon: <Gem className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Vault Opening & Closing Protocol",
            "Daily Inventory & Display Audit",
            "Advanced Anti-Robbery Procedures",
            "Customer Vetting & Suspicion Triggers",
        ],
        checklists: [
            {
                "title": "Daily Opening Procedure (Dual Control)",
                "tasks": [
                    "First staff member arrives, inspects exterior for tampering (locks, windows), reports 'all clear' to manager off-site",
                    "Second staff member arrives; both enter together. First action: disarm alarm within 30 seconds",
                    "Immediately lock the door behind you",
                    "Perform a check of all interior sensors, panic buttons, and CCTV cameras (ensure they are recording)",
                    "Two staff members proceed to the vault. Use dual keys/codes simultaneously to open",
                    "Inspect vault interior and log opening time. Remove day-display trays",
                    "Set up displays, ensuring each piece is accounted for against the daily opening inventory sheet",
                    "Test silent panic buttons and hold-up alarms before opening to the public"
                ]
            },
            {
                "title": "Daily Closing Procedure (Dual Control)",
                "tasks": [
                    "Lock main door 15 minutes prior to closing time. No new customers allowed",
                    "Begin removing jewellery from displays, starting with highest value items",
                    "Two staff members verify each item against the closing inventory sheet as it is placed in vault trays",
                    "Place trays back in the vault in their designated, mapped locations",
                    "Final inventory reconciliation and sign-off by both staff members",
                    "Lock the vault using dual-key/code protocol. Physically check the handle",
                    "Activate all alarm systems. Wait for confirmation call from security company",
                    "Both staff members exit the premises at the same time. Never leave one person alone"
                ]
            },
            {
                "title": "Ongoing Security & Sales Floor Protocol",
                "tasks": [
                    "Greet every customer and make direct eye contact. Acknowledge their presence immediately",
                    "Never show more than one high-value item (or tray) at a time. One out, one in",
                    "Observe for suspicious behavior: bulky clothing, nervous demeanor, questions about security",
                    "Use code words (e.g., 'Can you help me with the 'Omega' watch?') to discreetly alert staff to a suspicious person",
                    "Verify high-value credit card purchases with photo ID. For large cash purchases, follow AML regulations",
                    "Regularly clean glass display cases to remove fingerprints",
                    "Never turn your back on a customer who is handling merchandise"
                ]
            },
            {
                "title": "Weekly Security & Maintenance Audit",
                "tasks": [
                    "Test all audible alarms (outside of business hours)",
                    "Review a random 1-hour block of CCTV footage from the past week, checking for blind spots",
                    "Inspect all locks, door hardware, and display case integrity",
                    "Conduct a role-play drill of a robbery scenario with staff to test panic button use",
                    "Check batteries in all wireless security devices",
                    "Ensure contact list for police, fire, and security monitoring company is up-to-date and accessible"
                ]
            }
        ]
    },
     {
        id: 'international_travel_planner',
        title: "The Ultimate International Travel Planner",
        priceUSD: 19.99,
        priceINR: 1599,
        category: "Personal",
        description: "A comprehensive checklist for a stress-free international trip. Covers everything from documents and packing to safety.",
        icon: <Plane className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Visa & Document Preparation",
            "Financial & Health Checklist",
            "Smart Packing & Luggage Strategy",
            "Pre-Departure Home Checklist",
        ],
        checklists: [
            {
                "title": "Phase 1: Pre-Booking & Documentation (2-6 Months Out)",
                "tasks": [
                    "Check passport validity (must be valid for at least 6 months AFTER your return date)",
                    "Research and confirm visa requirements for your destination AND any transit countries",
                    "Apply for any necessary visas, allowing ample processing time",
                    "Book flights. Consider time zones to minimize jet lag",
                    "Book accommodation. Check reviews for safety and location",
                    "Scan and create a digital copy of your passport, visas, and IDs. Save to cloud storage (Google Drive, Dropbox) and email to yourself",
                    "Take a digital passport-style photo and save it to your phone/cloud"
                ]
            },
            {
                "title": "Phase 2: Health & Finance (1-2 Months Out)",
                "tasks": [
                    "Consult a doctor or travel clinic for required/recommended vaccinations and medications",
                    "Purchase comprehensive travel insurance (covering medical, trip cancellation, and lost luggage)",
                    "Notify your bank and credit card companies of your travel dates and destinations to avoid fraud alerts",
                    "Order a small amount of foreign currency for immediate needs upon arrival (taxis, snacks)",
                    "Check your mobile phone's international roaming plan or plan to buy a local SIM card",
                    "Pay all important bills that will be due while you are away"
                ]
            },
            {
                "title": "Phase 3: Packing & Preparation (1 Week Out)",
                "tasks": [
                    "Check weather at destination and plan your wardrobe accordingly. Use packing cubes to organize",
                    "Prepare a small medical kit (painkillers, band-aids, antiseptic wipes, personal medications)",
                    "Pack all electronics, chargers, and a universal travel adapter",
                    "Download offline maps (Google Maps), translation apps, and your airline's app",
                    "Charge all electronic devices, including power banks",
                    "Weigh your luggage to ensure it meets airline restrictions",
                    "Leave a copy of your itinerary and passport with a family member or friend at home"
                ]
            },
            {
                "title": "Phase 4: Final 24 Hours",
                "tasks": [
                    "Check-in for your flight online and save your mobile boarding pass",
                    "Put all essential documents (passport, visa, tickets, insurance details) in your carry-on bag",
                    "Empty your refrigerator of perishable food",
                    "Water your plants",
                    "Inform your security system company (if applicable) of your absence",
                    "Take out the trash",
                    "Unplug unnecessary electronics",
                    "Double check you have your wallet, passport, and phone. Then check again."
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
                "title": "Sangeet Ceremony Checklist",
                "tasks": [
                    "Book Sangeet venue and confirm capacity and noise restrictions",
                    "Hire DJ or live band; create a 'must-play' and 'do-not-play' list",
                    "Choreograph and schedule practices for all family dance performances",
                    "Plan and book a host/emcee to keep the event flowing",
                    "Organize a detailed food and beverage menu, including live food stations",
                    "Rent and test a high-quality sound system, stage, and dance floor"
                ]
            },
            {
                "title": "Mehndi Ceremony Checklist",
                "tasks": [
                    "Book professional Mehndi artists for the bride and a separate team for guests",
                    "Finalize and provide reference images for the bridal Mehndi design",
                    "Arrange comfortable, well-lit seating for artists and guests",
                    "Organize light music, entertainment, and a specific menu (often finger foods)",
                    "Purchase or arrange Mehndi party favors (e.g., bangles, bindis, small pouches)",
                    "Prepare a post-application care kit for the bride (lemon-sugar solution, oil)"
                ]
            },
            {
                "title": "Wedding Day: Baraat, Varmala & Mandap",
                "tasks": [
                    "Coordinate Baraat assembly point, route, and estimated timing",
                    "Arrange and confirm booking for the groom's horse/vintage car and the mobile sound system",
                    "Organize the Milni (meeting of families) and ensure garlands are ready",
                    "Ensure fresh Varmalas (garlands) for the couple are kept in a cool place",
                    "Verify Mandap setup, decor, and sacred fire (havan kund) arrangements are complete and safe",
                    "Check that a complete list of 'puja samagri' has been provided by and cross-checked with the Pandit",
                    "Coordinate the bride's entry (e.g., under a phoolon ki chaadar) with music and escorts"
                ]
            },
            {
                "title": "Post-Wedding: Reception & Vidaai",
                "tasks": [
                    "Create and finalize the reception seating chart and table plan",
                    "Plan the reception timeline: grand entrance, cake-cutting, first dance, speeches",
                    "Appoint a family member to manage the gift/envelope collection table",
                    "Arrange a guest book or photo booth for guest messages",
                    "Plan the Vidaai ceremony, including designated family members and the decorated car",
                    "Prepare and settle all final payments for vendors in clearly marked envelopes"
                ]
            }
        ]
    }
];

export type PremiumPack = typeof premiumPacks[0];

  