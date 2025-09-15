

import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone } from "lucide-react";

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
        id: 'commercial_kitchen_ops',
        title: "Commercial Kitchen & Food Safety",
        priceUSD: 79.99,
        priceINR: 6499,
        category: "Hospitality",
        description: "The essential HACCP-based toolkit for any restaurant focused on safety, quality, and efficiency.",
        icon: <Utensils className="w-8 h-8 text-primary" />,
        mostPopular: true,
        sampleItems: [
            "Kitchen Opening & Closing SOPs",
            "Daily Temperature & HACCP Logs",
            "Deep Cleaning & Sanitization Schedules",
            "Food Receiving & Storage Protocols"
        ],
        checklists: [
            {
                title: "Kitchen Opening Checklist",
                tasks: [
                    "Calibrate food thermometers using ice water and boiling water methods. Log results.",
                    "Check and log temperatures of all refrigerators and walk-in coolers/freezers.",
                    "Turn on all cooking equipment (fryers, ovens, grills) and check for proper function.",
                    "Sanitize all food preparation surfaces, cutting boards, and slicers.",
                    "Verify dishwashing machine has adequate detergent and sanitizer, run a test cycle.",
                    "Check for any signs of pests from overnight and report immediately."
                ]
            },
            {
                title: "Food Receiving & Storage",
                tasks: [
                    "Inspect all incoming deliveries for signs of damage, pests, or temperature abuse. Reject non-compliant items.",
                    "Check temperatures of all incoming refrigerated and frozen goods. Log temperatures.",
                    "Verify that the delivery matches the invoice. Note any shortages or incorrect items.",
                    "Immediately move all perishable items into appropriate cold storage.",
                    "Apply the FIFO (First-In, First-Out) principle, placing new stock behind existing stock.",
                    "Ensure all food items are stored at least 6 inches off the floor."
                ]
            },
            {
                title: "Daily HACCP & Line Check",
                tasks: [
                    "Before each service, check temperatures of all hot-holding and cold-holding foods on the line.",
                    "Taste and visually inspect all sauces, dressings, and prepped ingredients for quality and freshness.",
                    "Ensure each station is fully stocked with utensils, sanitized cloths, and necessary ingredients.",
                    "Check that all allergen information is readily available for service staff.",
                    "Ensure handwashing stations are stocked with soap, paper towels, and hot water."
                ]
            },
            {
                title: "Kitchen Closing & Cleaning Checklist",
                tasks: [
                    "Properly cool and store all leftover food, labeling each container with item name and date.",
                    "Clean all cooking equipment: grills, flattops, fryers (including filtration), and ovens.",
                    "Break down, clean, and sanitize all prep stations, cutting boards, and slicers.",
                    "Empty, clean, and sanitize all trash and recycling bins.",
                    "Sweep and mop all floors, including under equipment and in storage areas.",
                    "Turn off all equipment, gas lines, and lights. Secure the kitchen."
                ]
            }
        ]
    },
    {
        id: 'cloud_kitchen_ops',
        title: "Cloud Kitchen Launch & Ops Kit",
        priceUSD: 69.99,
        priceINR: 5499,
        category: "Hospitality",
        description: "A complete toolkit for launching and running a successful delivery-only kitchen operation.",
        icon: <Truck className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Aggregator Onboarding & Menu Sync",
            "Packaging Station & Inventory Setup",
            "Order Fulfillment & Handoff Protocol",
            "Rider Management & Reconciliation"
        ],
        checklists: [
            {
                title: "Aggregator Setup & Menu Engineering",
                tasks: [
                    "Complete all paperwork and FSSAI registration for Zomato, Swiggy, etc.",
                    "Set up online menus on all platforms. Ensure high-quality photos are used.",
                    "Engineer menu for delivery: prioritize items that travel well. Create delivery-friendly combos.",
                    "Sync all aggregator platforms with a single POS or order management dashboard.",
                    "Run test orders on all platforms to ensure correct pricing, taxes, and item mapping."
                ]
            },
            {
                title: "Packaging & Dispatch Station Setup",
                tasks: [
                    "Designate a specific area for packaging and dispatch, separate from the cooking line.",
                    "Stock the station with all necessary packaging materials: containers, bags, cutlery, tissues, tape.",
                    "Create a checklist for each order: Main dish, side, drink, cutlery, condiments. Staff must tick off each item.",
                    "Install a screen or printer at the station to display order details clearly.",
                    "Ensure packaging is designed to maintain food temperature and prevent spills."
                ]
            },
            {
                title: "Live Operations & Order Fulfillment",
                tasks: [
                    "Acknowledge incoming orders on the dashboard within 60 seconds.",
                    "Fire orders to the correct kitchen station based on preparation time.",
                    "Double-check each packed item against the order ticket before sealing the bag.",
                    "Attach the correct bill to the sealed package.",
                    "Hand over the package to the correct delivery rider and mark the order as 'Ready for Pickup'.",
                    "Monitor and manage rider wait times. Report any issues to the aggregator's support team."
                ]
            },
            {
                title: "End-of-Day Reconciliation",
                tasks: [
                    "Reconcile orders between your POS and each aggregator's dashboard.",
                    "Calculate total sales, discounts, and commissions for each platform.",
                    "Verify online payments received against the settlement reports.",
                    "Conduct a closing inventory count of key ingredients and packaging materials.",
                    "Shut down all systems and securely store any sensitive data."
                ]
            }
        ]
    },
    {
        id: 'resort_spa_management',
        title: "Resort & Spa Management Suite",
        priceUSD: 69.99,
        priceINR: 5499,
        category: "Hospitality",
        description: "A specialized toolkit for luxury resorts, covering grounds, pools, spas, and guest activities.",
        icon: <Plane className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Daily Pool & Water Quality Checks",
            "Groundskeeping & Landscaping Schedule",
            "Spa Opening & Therapist Readiness",
            "Guest Activity & Equipment Safety"
        ],
        checklists: [
            {
                title: "Daily Pool & Recreational Area Safety",
                tasks: [
                    "Test and log pool water chemistry (pH, chlorine, alkalinity) before opening. Adjust as per health codes.",
                    "Physically inspect pool surfaces, drains, and ladders for any damage or hazards.",
                    "Ensure all safety equipment (life rings, shepherd's hooks) is present, visible, and in good condition.",
                    "Walk through all recreational areas (tennis courts, gym) to check for cleanliness and equipment safety.",
                    "Verify that all poolside and outdoor furniture is clean and arranged safely.",
                    "Check that lifeguard stations are properly equipped and staffed according to schedule."
                ]
            },
            {
                title: "Weekly Grounds & Landscaping Maintenance",
                tasks: [
                    "Conduct a full property walk-through to identify areas needing immediate attention (e.g., pruning, weeding).",
                    "Inspect irrigation systems for leaks or malfunctions and adjust watering schedules based on weather.",
                    "Check all outdoor lighting and pathways for safety and functionality.",
                    "Schedule and oversee mowing, fertilization, and pest control activities.",
                    "Ensure all water features (fountains, ponds) are clean and operating correctly."
                ]
            },
            {
                title: "Daily Spa Operations Checklist",
                tasks: [
                    "Verify all treatment rooms are immaculately clean, stocked, and at a comfortable temperature.",
                    "Check that all spa equipment (steam rooms, saunas, hydrotherapy tubs) is operational and at the correct temperature.",
                    "Review therapist schedules and confirm appointments for the day.",
                    "Ensure reception is stocked with towels, robes, slippers, and refreshments.",
                    "Conduct a brief morning meeting with spa staff to discuss the day's bookings and any VIP guests."
                ]
            },
            {
                title: "Guest Activity Planning & Execution",
                tasks: [
                    "Post the daily/weekly activity schedule in highly visible guest areas and on digital platforms.",
                    "Inspect all equipment for guest activities (e.g., bicycles, kayaks, kids' club toys) for safety.",
                    "Ensure staff leading activities are prepared with all necessary supplies and a sign-up sheet.",
                    "Brief the concierge and front desk on the day's activities so they can inform guests.",
                    "Gather feedback from guests after activities to inform future planning."
                ]
            }
        ]
    },
    {
        id: 'waterpark_pool_safety',
        title: "Waterpark & Pool Safety Standards",
        priceUSD: 89.99,
        priceINR: 6999,
        category: "Hospitality",
        description: "An essential safety and maintenance toolkit for any public aquatic facility.",
        icon: <Waves className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Daily Lifeguard & First Aid Readiness",
            "Water Quality & Chemical Log",
            "Waterslide & Attraction Inspection",
            "Emergency Action Plan (EAP) Drills"
        ],
        checklists: [
            {
                title: "Pre-Opening Safety Inspection",
                tasks: [
                    "Test and log water chemistry (Free Chlorine, pH, Combined Chlorine, Alkalinity) for ALL pools. Must be within health code limits.",
                    "Physically walk every slide and attraction, checking for surface damage, loose bolts, or foreign objects.",
                    "Run water pumps for all attractions to ensure proper flow and function before public access.",
                    "Inspect all lifeguard towers/stations for required safety equipment (rescue tubes, backboards, first aid kits).",
                    "Verify two-way radios and emergency whistles are fully functional.",
                    "Conduct a 'surprise' mock rescue drill with the lifeguard team and time their response."
                ]
            },
            {
                title: "Ongoing Operational Safety",
                tasks: [
                    "Re-test and log water chemistry every 2 hours of operation.",
                    "Rotate lifeguard positions every 20-30 minutes to prevent vigilance decrement.",
                    "Supervisors must conduct periodic audits of lifeguards to ensure they are scanning their zone of responsibility effectively.",
                    "Check and clean restrooms and changing areas hourly.",
                    "Monitor weather conditions and follow clear protocols for lightning or high winds.",
                    "Ensure height and safety rule signage is visible and enforced at every attraction."
                ]
            },
            {
                title: "Closing Procedures",
                tasks: [
                    "Clear all swimmers from the pools at the designated time.",
                    "Perform a final sweep of all pools and attractions to ensure no one is left behind.",
                    "Shock or super-chlorinate pools as per the weekly chemical schedule.",
                    "Clean all filters and backwash systems as required.",
                    "Secure all entry points and store all loose equipment.",
                    "Complete the daily operations log, noting any incidents, rescues, or maintenance issues."
                ]
            },
            {
                title: "Weekly & Monthly Checks",
                tasks: [
                    "Perform a full inventory of the first aid station and restock all supplies.",
                    "Conduct mandatory in-service training for all lifeguard staff (4 hours per month minimum).",
                    "Test emergency shut-off buttons for all pumps and water features.",
                    "Inspect and lubricate all moving parts on water attractions.",
                    "Review all incident and rescue reports from the past week/month to identify trends or problem areas."
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
        id: 'mall_operations_blueprint',
        title: "Mall Operations & Safety Blueprint",
        priceUSD: 99.99,
        priceINR: 7999,
        category: "Corporate",
        description: "A complete operational guide for shopping mall management, focusing on safety, cleanliness, and tenant relations.",
        icon: <ShoppingCart className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Daily Security & Patrol Checklist",
            "Housekeeping & Common Area Audits",
            "Tenant Communication Protocol",
            "Emergency Response Drills (Fire, Active Shooter)"
        ],
        checklists: [
            {
                title: "Daily Opening & Security Protocol",
                tasks: [
                    "Conduct a full patrol of the mall interior and exterior before public entry, checking for hazards or vandalism.",
                    "Test a random selection of security cameras and emergency exit alarms. Log results.",
                    "Brief the security team on daily events, expected high-traffic periods, and any specific security alerts.",
                    "Ensure all public entrances are unlocked on schedule and free of obstructions.",
                    "Verify that the customer service/information desk is staffed and stocked with mall directories.",
                    "Check that all escalators, elevators, and automatic doors are functioning correctly. Report any faults."
                ]
            },
            {
                title: "Ongoing Operations & Housekeeping",
                tasks: [
                    "Conduct hourly patrols, focusing on restrooms, food courts, and high-traffic common areas.",
                    "Ensure housekeeping staff are actively managing spills, overflowing bins, and restroom cleanliness.",
                    "Monitor parking areas for traffic flow, safety issues, or unauthorized vehicles.",
                    "Log and respond to any tenant complaints or maintenance requests within a 1-hour timeframe.",
                    "Check food court seating areas for cleanliness and table availability.",
                    "Ensure all mall signage and digital directories are accurate and functional."
                ]
            },
            {
                title: "Daily Closing Protocol",
                tasks: [
                    "Broadcast standardized closing announcements 30, 15, and 5 minutes before closing.",
                    "Security personnel conduct a sweep of all common areas to ensure all patrons have exited.",
                    "Verify with each tenant that their premises are secure before they depart.",
                    "Secure all public entrances at the designated time.",
                    "Consolidate daily incident reports from security, housekeeping, and maintenance teams.",
                    "Activate night-time lighting and security alarm protocols."
                ]
            },
            {
                title: "Weekly Maintenance & Tenant Relations",
                tasks: [
                    "Test the public announcement (PA) system and fire alarm system (after hours).",
                    "Inspect the roof and parking structures for any required maintenance.",
                    "Send out a weekly newsletter or email to all tenants with updates on mall events, maintenance schedules, etc.",
                    "Conduct a spot-check on a few tenants to ensure they are complying with mall operational guidelines.",
                    "Review and analyze weekly footfall data to identify trends."
                ]
            }
        ]
    },
    {
        id: 'bpo_call_center_ops',
        title: "BPO Call Center Daily Management",
        priceUSD: 89.99,
        priceINR: 6999,
        category: "Corporate",
        description: "A complete operational playbook for call center managers to drive team performance, quality, and efficiency.",
        icon: <Phone className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Shift Start-Up & Team Huddle",
            "Live Call Quality Assurance (QA)",
            "Agent Performance Coaching",
            "End-of-Shift Reporting & Handoff"
        ],
        checklists: [
            {
                title: "Pre-Shift & Team Huddle Checklist",
                tasks: [
                    "Review previous shift's performance dashboard (AHT, FCR, CSAT). Note any outliers.",
                    "Check for any system outages or updates from IT. Communicate to the team.",
                    "Prepare and lead a 15-minute team huddle: discuss daily targets, share a 'tip of the day', and run a quick Q&A.",
                    "Ensure all agents are logged into the phone system and necessary software 5 minutes before the shift starts.",
                    "Verify that the scheduling software (WFM) is aligned with the actual agents present on the floor."
                ]
            },
            {
                title: "Live Operations & Quality Assurance",
                tasks: [
                    "Monitor the live call queue dashboard. Adjust agent skills or priorities as needed to manage wait times.",
                    "Perform a minimum of 2 'live silent monitoring' sessions per agent per week. Document scores.",
                    "Conduct at least 1 'side-by-side' coaching session per agent per month.",
                    "Listen for and flag any critical compliance errors in real-time.",
                    "Handle escalated calls from agents, ensuring customer resolution and agent de-briefing afterwards.",
                    "Send out hourly performance updates to the team to maintain momentum."
                ]
            },
            {
                title: "Agent Performance & Coaching",
                tasks: [
                    "Schedule and conduct weekly 1-on-1 meetings with each agent to discuss their performance scorecard.",
                    "Create and assign a documented action plan for any agent in the bottom quartile.",
                    "Publicly recognize top performers for the day/week on a team board or group chat.",
                    "Review QA scores with agents, playing back specific calls to illustrate coaching points.",
                    "Ensure all agents have completed their mandatory recurrent training for the month."
                ]
            },
            {
                title: "End-of-Shift & Reporting",
                tasks: [
                    "Analyze the day's performance against targets. Document reasons for any significant variance.",
                    "Compile a 'Shift Handover Report' for the next manager, highlighting major issues, pending escalations, and system status.",
                    "Ensure all agents properly log their end-of-day dispositions and sign out of all systems.",
                    "Conduct a brief end-of-shift huddle to summarize the day's wins and challenges.",
                    "Email the final shift performance report to senior management."
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
        id: 'car_dealership_ops',
        title: "Car Dealership Daily Operations",
        priceUSD: 99.99,
        priceINR: 7999,
        category: "Automotive",
        description: "A complete playbook for car showroom managers to optimize sales, service, and customer experience.",
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Showroom Opening & Vehicle Prep",
            "Sales Process & CRM Management",
            "Test Drive Protocol & Safety",
            "Vehicle Handover & Delivery Experience"
        ],
        checklists: [
            {
                title: "Morning Showroom Preparation",
                tasks: [
                    "Walk the lot and showroom floor. Ensure all display vehicles are clean, unlocked, and have charged batteries.",
                    "Check that all price stickers and feature sheets are accurate and correctly placed.",
                    "Lead a 15-minute sales team huddle: discuss daily targets, new inventory, and current promotions.",
                    "Verify the reception and customer lounge areas are clean, stocked with refreshments, and presentable.",
                    "Ensure all sales staff are logged into the CRM and ready to receive leads."
                ]
            },
            {
                title: "Sales & Customer Interaction Process",
                tasks: [
                    "Greet all customers within 2 minutes of their arrival on the lot.",
                    "Log every new customer interaction into the CRM immediately, capturing contact info and vehicle of interest.",
                    "Conduct a thorough needs analysis before recommending a vehicle.",
                    "Follow a structured 'walkaround' presentation for every vehicle.",
                    "Adhere to the dealership's test drive protocol: copy driver's license, confirm insurance, and follow the designated route.",
                    "Present all financing and add-on options clearly and transparently."
                ]
            },
            {
                title: "Vehicle Handover & Delivery",
                tasks: [
                    "Ensure the sold vehicle has undergone a full pre-delivery inspection (PDI) and is detailed to perfection.",
                    "Prepare all paperwork: final sales agreement, registration documents, warranty information.",
                    "Schedule a specific delivery appointment with the customer.",
                    "Perform a comprehensive feature explanation with the new owner, connecting their phone to Bluetooth and setting basic preferences.",
                    "Personally introduce the new owner to the service department manager.",
                    "Follow up with the customer within 72 hours to ensure satisfaction and ask for a review."
                ]
            },
            {
                title: "End of Day & Reporting",
                tasks: [
                    "Update the CRM with the status of all leads and deals from the day.",
                    "Reconcile all cash, check, and credit card transactions.",
                    "Secure all keys in the key vault.",
                    "Lock down all display vehicles and secure the showroom and lot.",
                    "Sales manager to compile and email a daily sales report to the general manager."
                ]
            }
        ]
    },
    {
        id: 'auto_repair_shop_ops',
        title: "Auto Repair Shop Workflow",
        priceUSD: 79.99,
        priceINR: 6499,
        category: "Automotive",
        description: "A step-by-step guide for service advisors and garage owners to standardize operations from check-in to delivery.",
        icon: <Wrench className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Vehicle Intake & Inspection Process",
            "Customer Approval & Work Order",
            "Quality Control & Final Checks",
            "Parts Management & Inventory"
        ],
        checklists: [
            {
                title: "Vehicle Check-In & Service Advising",
                tasks: [
                    "Greet the customer and confirm their appointment.",
                    "Perform a 'walkaround' inspection with the customer, noting any pre-existing damage on a standard form.",
                    "Use a tablet to document the customer's concerns and vehicle symptoms accurately.",
                    "Place a protective cover on the driver's seat, floor, and steering wheel.",
                    "Provide an estimated time for diagnosis and a preliminary cost estimate.",
                    "Tag the keys with the customer's name, vehicle details, and job number."
                ]
            },
            {
                title: "Diagnosis, Quoting & Work Order",
                tasks: [
                    "Assign the job to a technician based on skill set and availability.",
                    "Technician performs diagnosis and reports findings back to the service advisor.",
                    "Service advisor prepares a detailed quote, including parts, labor, and taxes.",
                    "Contact the customer to explain the required repairs and get explicit approval before starting any work. Document approval in the system.",
                    "Once approved, convert the quote to a formal work order and assign it to the technician."
                ]
            },
            {
                title: "Repair & Quality Control",
                tasks: [
                    "Technician follows the work order, documenting all steps and parts used.",
                    "All replaced parts must be kept aside for the customer to inspect if requested.",
                    "After repairs are complete, a different technician or a dedicated QC person must perform a final inspection and test drive.",
                    "The QC checklist must include checking for grease marks, ensuring all dashboard lights are off, and verifying the original complaint is resolved.",
                    "Clean the vehicle before notifying the customer."
                ]
            },
            {
                title: "Billing & Vehicle Handover",
                tasks: [
                    "Inform the customer that their vehicle is ready for pickup.",
                    "Prepare the final invoice, ensuring it matches the approved quote plus any additions.",
                    "When the customer arrives, the service advisor should walk them through the repairs made and the charges.",
                    "Hand over the keys, the invoice, and any replaced parts.",
                    "Schedule a follow-up call in 2 days to check on the vehicle's performance and customer satisfaction."
                ]
            }
        ]
    },
    {
        id: 'rental_property_management',
        title: "Rental Property Management",
        priceUSD: 49.99,
        priceINR: 3999,
        category: "Real Estate",
        description: "The essential toolkit for landlords and property managers to streamline tenant relations, maintenance, and compliance.",
        icon: <Building2 className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Tenant Move-In & Move-Out Inspection",
            "Routine Property Maintenance Schedule",
            "Rent Collection & Arrears Protocol",
            "Vendor & Contractor Management"
        ],
        checklists: [
            {
                title: "New Tenant Onboarding & Move-In",
                tasks: [
                    "Conduct a thorough background and credit check on the applicant.",
                    "Prepare and sign the rental agreement, ensuring all clauses are legally compliant.",
                    "Collect the security deposit and first month's rent in cleared funds.",
                    "Conduct a detailed move-in inspection with the tenant, taking photos/videos of the property's condition. Both parties sign the report.",
                    "Hand over keys, access cards, and provide information on utility connections.",
                    "Provide a welcome packet with emergency contact numbers and building rules."
                ]
            },
            {
                title: "Rent Collection & Financials",
                tasks: [
                    "Send a rent reminder 3 days before the due date.",
                    "Log all rent payments on the day they are received.",
                    "Immediately follow the legal protocol for late rent, starting with a formal late notice.",
                    "Track all property-related expenses and keep receipts for tax purposes.",
                    "Provide tenants with a formal receipt for all payments."
                ]
            },
            {
                title: "Maintenance & Inspections",
                tasks: [
                    "Maintain a list of approved and insured vendors (plumbers, electricians, etc.).",
                    "Respond to all maintenance requests within 24 hours.",
                    "Schedule and conduct bi-annual property inspections, providing proper notice to the tenant.",
                    "Keep a log of all repairs and maintenance carried out on the property.",
                    "Schedule preventative maintenance for HVAC, plumbing, and other systems."
                ]
            },
            {
                title: "Tenant Move-Out & Turnover",
                tasks: [
                    "Upon receiving notice to vacate, confirm the move-out date and send a cleaning checklist to the tenant.",
                    "Conduct a final move-out inspection, comparing the property's condition to the initial move-in report.",
                    "Document any damages with photos and estimate repair costs.",
                    "Calculate any deductions from the security deposit and return the balance within the legally required timeframe, along with an itemized statement.",
                    "Change the locks and schedule professional cleaning and repairs to prepare the property for the next tenant."
                ]
            }
        ]
    },
    {
        id: 'factory_ops',
        title: "Factory Shift Handover & Safety",
        priceUSD: 99.99,
        priceINR: 7999,
        category: "Manufacturing",
        description: "The essential playbook for shift supervisors to ensure a safe and seamless transition, minimizing downtime and errors.",
        icon: <Factory className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "End-of-Shift Production Report",
            "Machine Status & Maintenance Handover",
            "Safety & Quality Control Briefing",
            "Incoming Shift Walk-through"
        ],
        checklists: [
            {
                title: "Outgoing Shift: End-of-Shift Duties",
                tasks: [
                    "Complete the production log: units produced vs. target, scrap/reject count, and reasons for any shortfalls.",
                    "Document any machine malfunctions or alarms that occurred during the shift, even if resolved.",
                    "Log any quality control issues, holds, or deviations from the standard.",
                    "Conduct a final walk-through of the work area to ensure it is clean, organized, and free of hazards (5S).",
                    "Compile a 'Shift Handover Report' summarizing all key information.",
                    "Ensure all tools and equipment are returned to their designated storage locations."
                ]
            },
            {
                title: "Joint Handover Meeting (5-10 mins)",
                tasks: [
                    "Outgoing and incoming supervisors meet face-to-face.",
                    "The outgoing supervisor verbally briefs the incoming supervisor using the Handover Report as a guide.",
                    "Specifically discuss any ongoing safety concerns, maintenance issues, or quality alerts.",
                    "Review the production schedule for the upcoming shift.",
                    "Both supervisors must physically sign the handover log, confirming the transfer of responsibility."
                ]
            },
            {
                title: "Incoming Shift: Start-up Procedures",
                tasks: [
                    "The incoming supervisor conducts a pre-shift huddle with their team, relaying key information from the handover.",
                    "Lead the team on a walk-through of the work area, visually verifying the status of key machines and safety equipment.",
                    "Confirm raw material levels and ensure there is enough stock for at least the first few hours of production.",
                    "Verify that the first-piece quality check is completed and signed off before starting full production.",
                    "Ensure all operators are at their assigned stations and have the correct work instructions."
                ]
            },
            {
                title: "Weekly Safety & Maintenance Review",
                tasks: [
                    "Review all shift handover logs from the past week to identify recurring problems.",
                    "Conduct a weekly safety audit, checking that machine guards are in place, emergency stops are functional, and PPE is being worn correctly.",
                    "Check that all safety incident or near-miss reports have been properly investigated.",
                    "Verify that scheduled preventative maintenance was completed on time.",
                    "Update the team's safety communication board with new alerts or information."
                ]
            }
        ]
    },
    {
        id: 'private_clinic_ops',
        title: "Private Medical Clinic Operations",
        priceUSD: 119.99,
        priceINR: 9499,
        category: "Healthcare",
        description: "A critical daily operations and compliance toolkit for clinic managers, focusing on patient safety, hygiene, and data privacy.",
        icon: <Cross className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Daily Opening & Sterilization Protocol",
            "Patient Data & Privacy (HIPAA)",
            "Medical Supply Inventory Check",
            "End-of-Day Closing & Data Backup"
        ],
        checklists: [
            {
                title: "Clinic Opening & Morning Prep",
                tasks: [
                    "Disinfect all high-touch surfaces: reception counter, door handles, waiting room chairs.",
                    "Turn on all necessary medical equipment and check for error messages. Run diagnostic tests on key machines.",
                    "Verify that all examination rooms are clean, stocked with disposables (gloves, masks, paper), and ready for the first patient.",
                    "Check and log the temperature of the vaccine/medication refrigerator.",
                    "Run the autoclave/sterilizer for the first batch of instruments. Verify it reached the correct temperature and pressure.",
                    "Reception to review the day's appointment schedule, flagging any new patients or special cases."
                ]
            },
            {
                title: "Patient Management & Data Privacy",
                tasks: [
                    "Ensure all new patients sign the required privacy policy (HIPAA/GDPR) and consent forms before being seen.",
                    "Verify patient identity and insurance information at every visit.",
                    "Ensure all computer screens are angled away from public view or have privacy filters.",
                    "Never leave patient files or charts unattended in public areas.",
                    "Use a secure, compliant messaging system for any communication containing Patient Health Information (PHI).",
                    "Shred all paper documents containing PHI that are no longer needed."
                ]
            },
            {
                title: "During the Day: Operations & Supply",
                tasks: [
                    "After each patient, disinfect the examination room surfaces and change the paper on the exam table.",
                    "Properly sterilize all used medical instruments according to protocol.",
                    "Keep an accurate log of all dispensed medications and samples.",
                    "Conduct a mid-day check of restrooms and waiting areas for cleanliness.",
                    "Monitor the stock of critical supplies (gloves, masks, needles) and re-order when they hit the minimum level."
                ]
            },
            {
                title: "End of Day Closing Procedures",
                tasks: [
                    "Reconcile all payments and co-pays received during the day.",
                    "Ensure all patient charts and records for the day are completed and filed correctly.",
                    "Run a full data backup of the clinic's electronic health record (EHR) system to a secure, off-site location.",
                    "Properly dispose of all bio-hazardous waste in designated containers.",
                    "Turn off all non-essential equipment, lock all medication cabinets, and secure the premises.",
                    "Log out of all computer systems and activate the security alarm."
                ]
            }
        ]
    },
    {
        id: 'eco_friendly_ops',
        title: "Eco-Friendly Business Operations",
        priceUSD: 49.99,
        priceINR: 3999,
        category: "Compliance",
        description: "A practical guide for any business to implement sustainable, eco-friendly practices and reduce their carbon footprint.",
        icon: <Leaf className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Waste Reduction & Recycling Program",
            "Energy & Water Conservation Audit",
            "Sustainable Procurement Policy",
            "Green Employee Engagement"
        ],
        checklists: [
            {
                "title": "Waste Management & Reduction",
                "tasks": [
                    "Conduct a waste audit to identify major sources of trash.",
                    "Set up clearly labeled recycling bins for paper, plastic, glass, and metals.",
                    "Implement a composting program for food scraps in the breakroom/cafeteria.",
                    "Switch to recycled paper for printing and office use.",
                    "Set printer defaults to double-sided printing.",
                    "Eliminate single-use plastics (water bottles, cutlery, coffee pods)."
                ]
            },
            {
                "title": "Energy Conservation",
                "tasks": [
                    "Replace all conventional light bulbs with energy-efficient LEDs.",
                    "Install motion sensors or timers for lights in low-traffic areas (restrooms, storage rooms).",
                    "Create a 'last one out' checklist to ensure all lights and electronics are turned off at night.",
                    "Perform regular maintenance on HVAC systems to ensure efficiency.",
                    "Use smart power strips that cut off power to devices in standby mode."
                ]
            },
            {
                "title": "Water Conservation",
                "tasks": [
                    "Install low-flow faucets and toilets in all restrooms.",
                    "Regularly check for and repair any water leaks, no matter how small.",
                    "If applicable, use drought-resistant plants for landscaping to reduce watering needs.",
                    "Use environmentally friendly cleaning products that are biodegradable."
                ]
            },
            {
                "title": "Sustainable Procurement & Supply Chain",
                "tasks": [
                    "Develop a sustainable procurement policy that prioritizes local and eco-friendly suppliers.",
                    "Purchase office supplies made from recycled materials.",
                    "Choose vendors who use minimal and recyclable packaging.",
                    "Encourage teleconferencing to reduce travel-related emissions.",
                    "Offer incentives for employees who use public transport, carpool, or cycle to work."
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
        id: 'salon_spa_ops',
        title: "Salon & Spa Operations",
        priceUSD: 49.99,
        priceINR: 3999,
        category: "Wellness",
        description: "A complete toolkit for running a successful and hygienic salon or day spa, from client booking to staff management.",
        icon: <PersonStanding className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Daily Hygiene & Sterilization SOPs",
            "Client Appointment & CRM",
            "Inventory Management for Products",
            "Staff Training & Service Quality"
        ],
        checklists: [
            {
                "title": "Daily Opening & Hygiene Checklist",
                "tasks": [
                    "Disinfect all surfaces: reception desk, styling stations, manicure tables, pedicure chairs.",
                    "Ensure all tools (scissors, combs, brushes) are sterilized and stored in clean, closed containers.",
                    "Check and restock all stations with clean towels, capes, and necessary supplies.",
                    "Verify that autoclaves and other sterilization equipment are functioning correctly.",
                    "Prepare fresh disinfectant solutions as per health code regulations.",
                    "Confirm reception has the day's appointment schedule and client notes."
                ]
            },
            {
                "title": "Client Experience & Service",
                "tasks": [
                    "Greet clients warmly and offer a beverage upon arrival.",
                    "Conduct a thorough consultation before any service to understand client expectations.",
                    "Keep detailed client records: service history, color formulas, allergies, and preferences.",
                    "Ensure all staff follow service protocols for consistent quality.",
                    "Politely confirm the next appointment at the end of the service.",
                    "Actively manage online and phone bookings to minimize client wait times."
                ]
            },
            {
                "title": "Inventory & Retail Management",
                "tasks": [
                    "Conduct a weekly inventory count of all professional-use and retail products.",
                    "Place orders for low-stock items.",
                    "Ensure retail displays are clean, well-stocked, and visually appealing.",
                    "Train staff on product knowledge to effectively recommend and sell retail items.",
                    "Track product sales to identify best-sellers and slow-moving items."
                ]
            },
            {
                "title": "Closing & End-of-Day Tasks",
                "tasks": [
                    "Properly dispose of all single-use items (cotton pads, wax strips).",
                    "Collect all used tools for sterilization.",
                    "Clean all stations, chairs, and sinks thoroughly.",
                    "Sweep and mop all floors.",
                    "Reconcile the day's sales and cash register.",
                    "Secure the premises and set the alarm."
                ]
            }
        ]
    },
     {
        id: 'gym_fitness_center_ops',
        title: "Gym & Fitness Center Management",
        priceUSD: 59.99,
        priceINR: 4799,
        category: "Wellness",
        description: "An essential toolkit for gym owners to ensure member safety, equipment maintenance, and operational excellence.",
        icon: <Dumbbell className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Daily Equipment Safety & Cleaning",
            "Member Onboarding & Sales Process",
            "Class Scheduling & Instructor Mgt.",
            "Emergency & First Aid Protocols"
        ],
        checklists: [
            {
                "title": "Daily Opening & Safety Inspection",
                "tasks": [
                    "Walk the entire gym floor. Inspect all cardio and strength equipment for frayed cables, loose bolts, or malfunctions. Tag any faulty equipment 'Out of Order'.",
                    "Ensure all free weights are correctly racked and organized.",
                    "Check that all emergency exits are clear and accessible.",
                    "Verify first aid kits and AEDs are present, fully stocked, and accessible.",
                    "Wipe down all equipment handles, benches, and mats with disinfectant.",
                    "Check locker rooms and showers for cleanliness and stock (soap, paper towels)."
                ]
            },
            {
                "title": "Member Management & Sales",
                "tasks": [
                    "Provide a comprehensive orientation for all new members, demonstrating proper equipment use.",
                    "Follow up with new leads within 24 hours.",
                    "Have a clear and consistent sales script for staff to use.",
                    "Ensure membership agreements are filled out completely and filed securely.",
                    "Actively engage with current members on the floor to build community and reduce churn.",
                    "Track key metrics: new members, cancellations, member attendance."
                ]
            },
            {
                "title": "Class & Staff Management",
                "tasks": [
                    "Publish class schedules at least one month in advance.",
                    "Ensure all instructors are certified and insured.",
                    "Have a system for instructors to find substitutes if they are unable to teach.",
                    "Regularly attend classes to ensure quality and consistency.",
                    "Schedule regular staff meetings and training sessions."
                ]
            },
            {
                "title": "Closing Procedures",
                "tasks": [
                    "Give closing announcements 15 and 5 minutes before closing.",
                    "Do a final walkthrough of the entire facility, including locker rooms, to ensure all members have left.",
                    "Perform a final clean and wipe-down of all equipment.",
                    "Secure all cash and valuables.",
                    "Lock all doors and set the alarm system."
                ]
            }
        ]
    },
    {
        id: 'school_safety_operations',
        title: "School & College Operations",
        priceUSD: 49.99,
        priceINR: 3999,
        category: "Education",
        description: "A complete operational toolkit for principals and administrators to ensure a safe and efficient campus environment.",
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
        id: 'wedding_hall_management',
        title: "Wedding & Banquet Hall Management",
        priceUSD: 79.99,
        priceINR: 6499,
        category: "Events",
        description: "An operational toolkit for venue managers to streamline bookings, events, and facility maintenance.",
        icon: <Building className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "New Client Booking & Contract Process",
            "Pre-Event Facility Readiness Audit",
            "Event Day Vendor Coordination",
            "Post-Event Breakdown & Settlement"
        ],
        checklists: [
            {
                title: "Initial Client Inquiry & Booking",
                tasks: [
                    "Respond to new inquiries within 2 hours. Send digital brochure and availability.",
                    "Conduct a thorough site visit, showcasing different setup possibilities.",
                    "Provide a detailed, itemized quotation. Clearly state what's included (venue, tables) and what's extra (decor, AV).",
                    "Issue a formal contract upon confirmation. Ensure clauses for payment schedule, cancellation, and liabilities are clear.",
                    "Block the date on all internal calendars upon receipt of the deposit.",
                    "Send a welcome kit with a list of preferred vendors and a timeline of next steps."
                ]
            },
            {
                title: "Pre-Event Coordination (1 Month Out)",
                tasks: [
                    "Hold a final walkthrough meeting with the client and their event planner.",
                    "Finalize the floor plan, seating arrangement, and event flow.",
                    "Collect a list of all external vendors (caterer, DJ, decorator) and their contact information.",
                    "Obtain necessary permits or licenses if applicable (e.g., music license, fire permit).",
                    "Schedule and test all in-house AV equipment (projectors, microphones, lighting).",
                    "Conduct a deep clean of the entire facility, including restrooms and kitchens."
                ]
            },
            {
                title: "Event Day Execution",
                tasks: [
                    "Venue manager on-site 3 hours before event start time.",
                    "Supervise vendor setup to ensure it matches the agreed-upon floor plan.",
                    "Conduct a final check of lighting, air conditioning, and restroom cleanliness 1 hour before guest arrival.",
                    "Serve as the single point of contact for the client and all vendors throughout the event.",
                    "Monitor staff levels and ensure service standards are met.",
                    "Be prepared to handle unforeseen issues (e.g., power fluctuation, medical emergency)."
                ]
            },
            {
                title: "Post-Event Wrap-Up & Settlement",
                tasks: [
                    "Supervise the breakdown and cleanup process. Check for any damages to the property.",
                    "Ensure the client collects all their personal belongings and wedding gifts.",
                    "Reconcile any extra charges incurred during the event (e.g., extended hours, additional services).",
                    "Issue the final invoice and process the final payment within 48 hours.",
                    "Send a thank-you note to the client and request a review for your website/social media."
                ]
            }
        ]
    },
    {
        id: 'play_area_safety',
        title: "Indoor Play Area Safety & Ops",
        priceUSD: 59.99,
        priceINR: 4999,
        category: "Events",
        description: "The essential daily, weekly, and monthly checklist for running a safe and clean children's indoor play center.",
        icon: <Home className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Daily Opening Safety Inspection",
            "Hourly & Post-Session Sanitization",
            "Staff & Child Supervision Protocol",
            "Weekly Deep Clean & Maintenance"
        ],
        checklists: [
            {
                title: "Daily Opening Safety Inspection",
                tasks: [
                    "Visually inspect every piece of play equipment (slides, ball pit, trampolines) for damage, loose parts, or sharp edges. Log any findings.",
                    "Check all safety netting for holes or tears. Log any findings.",
                    "Ensure all padded surfaces and floor mats are secure and have no gaps.",
                    "Test all electronic gates and access control systems.",
                    "Sanitize all high-touch surfaces: door handles, benches, check-in counters.",
                    "Conduct a morning briefing with staff on safety rules and emergency procedures."
                ]
            },
            {
                title: "During-Session Operations",
                tasks: [
                    "Ensure staff are actively monitoring zones, not just standing in one spot.",
                    "Enforce height/age restrictions for different play areas.",
                    "Address and document any rule-breaking or unsafe behavior immediately.",
                    "Perform a quick sanitization of high-touch areas between play sessions.",
                    "Monitor the capacity of the play area and manage entry to prevent overcrowding.",
                    "Check restrooms for cleanliness and supplies every hour."
                ]
            },
            {
                title: "Closing & Deep Cleaning",
                tasks: [
                    "Do a final sweep of the play area to ensure no children are left behind.",
                    "Remove all balls from the ball pit and sanitize them using an approved method.",
                    "Vacuum and sanitize the base of the ball pit before returning the balls.",
                    "Wipe down all surfaces of the play structures with child-safe disinfectant.",
                    "Mop all floors.",
                    "Log any maintenance issues that need to be addressed before the next day."
                ]
            },
            {
                title: "Weekly Maintenance",
                tasks: [
                    "Tighten all bolts and connections on the play structures.",
                    "Deep clean and shampoo all carpets and soft play areas.",
                    "Take down and wash any removable fabric components.",
                    "Inspect the first-aid kit and restock any used items.",
                    "Review any incident reports from the past week and identify any trends or problem areas."
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
    },
    {
        id: 'muslim_wedding_planner',
        title: "Complete Muslim Wedding Planner",
        priceUSD: 34.99,
        priceINR: 2799,
        category: "Wedding",
        description: "A detailed checklist covering Islamic wedding traditions, from the Nikah ceremony to the Walima reception.",
        icon: <Heart className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Nikah ceremony planning",
            "Mahr agreement and witnessing",
            "Walima (reception) logistics",
            "Rukhsati coordination"
        ],
        checklists: [
            {
                "title": "Pre-Wedding & Nikah Ceremony",
                "tasks": [
                    "Finalize the Mahr (dower) between both families and have it in writing.",
                    "Book the Imam/Qazi to officiate the Nikah.",
                    "Select and confirm the two adult Muslim witnesses (for the bride).",
                    "Book the venue for the Nikah (Mosque or other location).",
                    "Prepare the Nikah-nama (marriage contract) and review all clauses.",
                    "Arrange for separate, comfortable seating for male and female guests if required.",
                    "Plan the bride's and groom's entrances."
                ]
            },
            {
                "title": "Post-Nikah & Rukhsati",
                "tasks": [
                    "Organize the distribution of dates and sweets after the Nikah is pronounced.",
                    "Arrange for a celebratory dinner or lunch following the ceremony.",
                    "Plan the Rukhsati (sending off the bride). Designate family members to escort her.",
                    "Decorate the groom's car for the Rukhsati.",
                    "Coordinate the departure time to ensure a smooth transition from the bride's family home.",
                    "Recite prayers or Quranic verses during the departure."
                ]
            },
            {
                "title": "Walima (Reception) Planning",
                "tasks": [
                    "Send out Walima invitations from the groom's family.",
                    "Book the Walima venue and confirm catering (ensuring Halal food).",
                    "Create a seating plan for the reception.",
                    "Plan the stage decor for the bride and groom.",
                    "Organize the timeline for the event: guest arrival, couple's entrance, dinner, speeches.",
                    "Arrange for a photographer and videographer to cover the event."
                ]
            },
            {
                "title": "General Vendor & Guest Management",
                "tasks": [
                    "Book all vendors (catering, decor, photo/video) well in advance and sign contracts.",
                    "Arrange accommodation for out-of-town guests.",
                    "Create a detailed timeline of all events (Mehndi, Nikah, Walima) to share with guests and vendors.",
                    "Prepare and pack the bride's trousseau to be moved to her new home.",
                    "Designate a point person from each family to handle vendor payments on the day of the events."
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
        id: 'pet_travel_planner',
        title: "Pet-Friendly Travel Planner",
        priceUSD: 24.99,
        priceINR: 1999,
        category: "Personal",
        description: "The essential checklist for safely and comfortably travelling with your furry companion, by air or by road.",
        icon: <PawPrint className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Airline & Vet Requirement Checklist",
            "Pet-Friendly Accommodation Booking",
            "Packing Your Pet's Go-Bag",
            "Travel Day Health & Safety",
        ],
        checklists: [
            {
                "title": "Veterinary & Airline Prep (1-3 Months Out)",
                "tasks": [
                    "Research and confirm the airline's specific pet policy (in-cabin vs. cargo, breed restrictions, carrier size).",
                    "Visit your vet to ensure all vaccinations are up-to-date. Get a signed health certificate dated within 10 days of travel.",
                    "Check destination country's import requirements (e.g., microchip, rabies titer test, quarantine).",
                    "Purchase an IATA-compliant travel carrier. Acclimate your pet to it by leaving it open in the house with treats inside.",
                    "Get a proper ID tag for your pet's collar with your mobile number and destination address."
                ]
            },
            {
                "title": "Booking & Packing",
                "tasks": [
                    "Book your flight and your pet's spot on the same call. Confirm pet reservation.",
                    "Book pet-friendly hotels or accommodations. Confirm their pet policy in writing.",
                    "Pack a 'go-bag' for your pet: food for a few days, collapsible bowls, leash, waste bags, a favorite toy, and any medications.",
                    "Include a document folder with your pet's health certificate, vaccination records, and a recent photo.",
                    "Pack cleaning supplies like paper towels and pet-safe wet wipes for accidents."
                ]
            },
            {
                "title": "The Day Before Travel",
                "tasks": [
                    "Freeze a small bowl of water in the carrier's dish. It will melt slowly for them to drink without spilling.",
                    "Feed your pet a light meal 4-6 hours before the flight. Do not sedate your pet unless specifically advised by your vet.",
                    "Line the carrier with an absorbent puppy pad.",
                    "Affix 'Live Animal' stickers and your contact information clearly on the outside of the carrier.",
                    "Take your pet for a long walk or play session to burn off excess energy."
                ]
            },
            {
                "title": "Travel Day & Arrival",
                "tasks": [
                    "Arrive at the airport earlier than usual for pet check-in procedures.",
                    "Find a pet relief area at the airport before going through security.",
                    "Once you arrive at your destination, immediately offer your pet water and a short walk.",
                    "Stick to your pet's normal feeding and walking schedule as much as possible to reduce stress.",
                    "Inspect your hotel room for any potential hazards before letting your pet off-leash."
                ]
            }
        ]
    }
];

export type PremiumPack = typeof premiumPacks[0];

  

    

    
