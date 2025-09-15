

import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear } from "lucide-react";

export const premiumPacks = [
    {
        id: 'hospitality_excellence_suite',
        title: "Hotel & Resort Operations Checklist",
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
                    "Audit nightly revenue reports from the Property Management System (PMS), reconcile any payment discrepancies, and have a second person verify the final figures before distributing the summary.",
                    "Review shift handover log; brief team on outstanding tasks, VIP arrivals, daily events, and promotions. Ensure all staff sign the briefing acknowledgement sheet.",
                    "Verify VIP list for the next 24 hours; coordinate with housekeeping and room service for pre-arrival amenities and personalized welcome notes.",
                    "Inspect lobby, concierge desk, and all public areas for pristine condition (lighting, temperature, cleanliness, scent). Log inspection in the duty manager's report.",
                    "Manage check-ins/check-outs, ensuring rapid service. Proactively ask departing guests about their stay and immediately log any negative feedback for follow-up.",
                    "Respond to all guest reviews from the previous day (TripAdvisor, Google, Booking.com) within 12 hours. Use guest's name and reference a specific positive point they made.",
                    "Check and restock front desk supplies (key cards, registration forms, pens, maps).",
                    "Conduct a 5-minute role-play drill on handling a difficult guest complaint (e.g., room not ready on time)."
                ]
            },
            {
                "title": "Daily Housekeeping SOP",
                "tasks": [
                    "Prepare and assign room blocks and specific cleaning tasks to housekeeping staff using a digital assignment tool like Hotelogix or a printed, signed-off sheet.",
                    "Inspect a set percentage (e.g., 15%) of cleaned rooms using a detailed 50-point digital checklist (e.g., using GoAudits app). Photos must be attached for any failures.",
                    "Check and restock all linen closets and supply trolleys; report shortages immediately via team communication app (e.g., WhatsApp Business, Slack).",
                    "Immediately log any maintenance issues (leaks, broken items) with photos in the engineering portal (e.g., UpKeep, Fiix).",
                    "Manage laundry operations flow, ensuring clean linen availability for peak times. Log laundry turnaround times to identify bottlenecks.",
                    "Log, tag, and securely store all lost and found items. Use a system that photographs the item and automatically notifies the guest if their contact info is known.",
                    "Conduct a 15-minute pre-shift briefing on safety (e.g., handling chemicals), any special guest requirements, and rooms requiring extra attention."
                ]
            },
            {
                "title": "Weekly Restaurant Operations",
                "tasks": [
                    "Conduct full inventory of all stock (food, beverages, chemicals) using a digital inventory system (e.g., MarketMan, Orca) and place new orders based on par levels.",
                    "Deep clean kitchen equipment: vents, grease traps, walk-in freezers/chillers. The kitchen supervisor must sign off on the cleaning log.",
                    "Finalize and publish staff rotas for the upcoming week, ensuring fair shift distribution and managing leave requests.",
                    "Analyze weekly sales data to identify top/poor-performing dishes. Plan a tasting session to decide on menu adjustments or specials.",
                    "Conduct mandatory 30-minute training session (e.g., new dish, upselling techniques, allergen handling). Follow up with a short quiz to verify understanding.",
                    "Verify and document compliance with food safety standards (HACCP, FSSAI). Perform a mock health inspection and document findings.",
                    "Review supplier performance and pricing; flag any issues (e.g., late deliveries, poor quality) and communicate with them formally via email."
                ]
            },
            {
                "title": "Monthly Hotel Maintenance & Audit",
                "tasks": [
                    "Perform and document preventive maintenance on HVAC, plumbing, and electrical systems as per the annual schedule in your CMMS (e.g., eMaint).",
                    "Conduct and record a full fire safety equipment check (extinguishers, alarms, exit lights, sprinklers). A second person must witness and co-sign the report.",
                    "Perform a full property walk-through with all department heads to identify aesthetic and functional issues. Assign action items with deadlines to each HOD.",
                    "Audit petty cash, float, and all departmental financial records for discrepancies. The Financial Controller must sign off on the audit.",
                    "Analyze guest feedback trends from the past month. Create a formal action plan with assigned responsibilities and present it in the monthly management meeting.",
                    "Run a mandatory, unannounced emergency drill (e.g., fire evacuation, medical emergency) and critique the team's response.",
                    "Review and update the hotel's emergency response and evacuation plan. Distribute the updated plan and get signed acknowledgements from all staff."
                ]
            }
        ]
    },
    {
        id: 'facility_management_blueprint',
        title: "Facility Management Checklist",
        priceUSD: 129.99,
        priceINR: 9999,
        category: "Corporate",
        description: "The complete playbook for facility managers to ensure a safe, compliant, and efficient workplace environment.",
        icon: <Building2 className="w-8 h-8 text.primary" />,
        mostPopular: false,
        sampleItems: [
            "Preventive Maintenance Schedules",
            "Vendor & Contract Management",
            "Office Safety & Compliance Audits",
            "Admin & Workplace Services"
        ],
        checklists: [
            {
                title: "Daily Workplace Readiness",
                tasks: [
                    "Conduct a morning walk-through of the entire office using a digital checklist app. Check cleanliness, lighting, and temperature in all zones.",
                    "Ensure all meeting rooms are clean, tidy, and equipment (projectors, webcams, conference phones) is functional. Run a 1-minute test on the AV in the main boardroom.",
                    "Check pantry/kitchen supplies (coffee, milk, snacks) and restock. Post a QR code for employees to report low supplies directly to the admin team.",
                    "Verify that all restrooms are clean, stocked, and free of plumbing issues. Place a cleaning log with sign-offs on the back of each door.",
                    "Check that reception area is clean, presentable, and the visitor management system (e.g., Envoy) is online and ready.",
                    "Review any overnight maintenance or security reports in the official logbook. Flag any unresolved issues for immediate action."
                ]
            },
            {
                title: "Weekly Maintenance & Safety Audit",
                tasks: [
                    "Test a random sample of fire alarms and emergency exit lights. Log which specific units were tested.",
                    "Inspect all first-aid kits and AEDs. Restock and check battery life. Document the inspection on a tag on the kit itself.",
                    "Walk all emergency exit routes to ensure they are clear of obstructions. Take photos of any blocked routes and email them to the responsible department head.",
                    "Check functioning of all access control systems (key cards, biometric scanners) by testing a random selection of doors.",
                    "Coordinate with the housekeeping vendor for a joint walk-through to review cleaning standards and address any issues. Both parties must sign the walk-through report.",
                    "Review and approve all vendor invoices from the previous week, cross-referencing with work orders or delivery slips."
                ]
            },
            {
                title: "Monthly Vendor & Compliance Review",
                tasks: [
                    "Conduct a formal review meeting with key vendors (security, housekeeping, catering) using a standardized performance scorecard.",
                    "Audit vendor performance against their service level agreement (SLA). Document any deviations and agree on a corrective action plan.",
                    "Review and update the master list of all service contracts and their renewal dates. Set calendar alerts for 90 days before renewal.",
                    "Schedule and oversee all preventive maintenance for HVAC, electrical, and plumbing systems. Get signed service reports from the vendor.",
                    "Ensure all statutory compliance posters (health & safety, employment law) are up-to-date and displayed. Take a dated photo for records.",
                    "Review office supply inventory and budget. Analyze spending trends to identify potential cost savings.",
                    "Conduct a surprise fire or evacuation drill. Time the evacuation and review performance with fire wardens."
                ]
            },
            {
                title: "Admin & Employee Services",
                tasks: [
                    "Manage the process for issuing and revoking employee access cards. Conduct a quarterly audit of active cards against the current employee list.",
                    "Coordinate office events, celebrations, and town halls. Send a feedback survey after each event to measure success.",
                    "Oversee the mailroom and courier services. Track monthly courier spending to identify cost-saving opportunities.",
                    "Manage parking allocation and address any employee concerns. Maintain a waitlist if applicable.",
                    "Create a simple feedback mechanism (e.g., a dedicated email address or QR code) for employees to report facility issues. Track response times."
                ]
            }
        ]
    },
    {
        id: 'commercial_kitchen_protocol',
        title: "Commercial Kitchen Checklist",
        priceUSD: 79.99,
        priceINR: 6499,
        category: "Hospitality",
        description: "The essential HACCP-based toolkit for any restaurant focused on safety, quality, and efficiency.",
        icon: <Utensils className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Kitchen Opening & Closing SOPs",
            "Daily Temperature & HACCP Logs",
            "Deep Cleaning & Sanitization Schedules",
            "Food Receiving & Storage Protocols"
        ],
        checklists: [
            {
                title: "Kitchen Opening Checklist (HACCP Focus)",
                tasks: [
                    "Calibrate food thermometers using ice water and boiling water methods. Log results in the daily HACCP log.",
                    "Check and log temperatures of all refrigerators and walk-in coolers/freezers. Any unit out of range requires immediate corrective action documentation.",
                    "Turn on all cooking equipment (fryers, ovens, grills) and check for proper function. Report any issues to the maintenance log.",
                    "Sanitize all food preparation surfaces, cutting boards, and slicers. Use test strips to verify sanitizer concentration and log the result.",
                    "Verify dishwashing machine has adequate detergent and sanitizer. Run a test cycle and check final rinse temperature.",
                    "Check for any signs of pests from overnight using sticky traps and visual inspection. Report any activity immediately.",
                    "Head Chef to sign off on the completed opening checklist before starting prep."
                ]
            },
            {
                title: "Food Receiving & Storage Protocol",
                tasks: [
                    "Inspect all incoming deliveries for signs of damage, pests, or temperature abuse. Reject and photograph any non-compliant items.",
                    "Check and log temperatures of all incoming refrigerated and frozen goods. The receiving clerk and delivery driver must both sign the log.",
                    "Verify that the delivery matches the invoice. Note any shortages or incorrect items and get a credit note from the driver.",
                    "Immediately move all perishable items into appropriate cold storage.",
                    "Apply the FIFO (First-In, First-Out) principle by placing new stock behind existing stock. All items must be dated upon receipt.",
                    "Ensure all food items are stored at least 6 inches off the floor and in sealed, labeled containers."
                ]
            },
            {
                "title": "Daily HACCP & Line Check",
                "tasks": [
                    "Before each service, check and log temperatures of all hot-holding and cold-holding foods on the line.",
                    "Taste and visually inspect all sauces, dressings, and prepped ingredients for quality and freshness. A second chef must co-sign the tasting log.",
                    "Ensure each station is fully stocked with utensils, sanitized cloths in sanitizer solution, and necessary ingredients.",
                    "Check that all allergen information is updated on a central board and is readily available for service staff.",
                    "Ensure handwashing stations are stocked with soap, single-use paper towels, and hot water. Post a 'How to Wash Your Hands' guide.",
                    "Conduct a quick role-play: Ask a random chef the internal cooking temperature for chicken. Document their answer."
                ]
            },
            {
                "title": "Kitchen Closing & Cleaning Checklist",
                "tasks": [
                    "Properly cool all leftover food using the two-stage cooling method (135°F to 70°F in 2 hours; 70°F to 41°F in 4 hours). Log temperatures.",
                    "Label every container with item name, date, and use-by date before storing.",
                    "Clean all cooking equipment: grills, flattops, fryers (including oil filtration). The sous-chef must inspect and sign off.",
                    "Break down, clean, and sanitize all prep stations, cutting boards, and slicers.",
                    "Empty, clean, and sanitize all trash and recycling bins. Move them to the designated outdoor area.",
                    "Sweep and mop all floors, including under equipment and in storage areas, using a 3-sink method (wash, rinse, sanitize).",
                    "Turn off all equipment, gas lines, and lights. The closing manager must do a final walkthrough and secure the kitchen."
                ]
            }
        ]
    },
     {
        id: 'resort_spa_management',
        title: "Resort & Spa Management Checklist",
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
                "title": "Daily Pool & Recreational Area Safety",
                "tasks": [
                    "Test and log pool water chemistry (pH, chlorine, alkalinity) before opening. A second person must verify and co-sign the logbook.",
                    "Physically inspect pool surfaces, drains, and ladders for any damage or hazards. Document with photos in the daily maintenance report.",
                    "Ensure all safety equipment (life rings, shepherd's hooks, backboards) is present, visible, and in good condition. Log the inspection.",
                    "Walk through all recreational areas (tennis courts, gym) to check for cleanliness and equipment safety. Test a random piece of gym equipment.",
                    "Verify that all poolside and outdoor furniture is clean and arranged safely, with no trip hazards.",
                    "Check that lifeguard stations are properly equipped. Conduct a surprise mock-rescue drill at least once a week and record the response time."
                ]
            },
            {
                "title": "Weekly Grounds & Landscaping Maintenance",
                "tasks": [
                    "Conduct a full property walk-through with the head gardener to identify areas needing immediate attention (e.g., pruning, weeding, pest control).",
                    "Inspect irrigation systems for leaks or malfunctions and adjust watering schedules based on weather forecasts. (Pro-Tip: Use a smart irrigation controller app to automate).",
                    "Check all outdoor lighting and pathways for safety and functionality. Replace any burnt-out bulbs immediately.",
                    "Schedule and oversee mowing, fertilization, and pest control activities. Ensure safety signs are placed during these activities.",
                    "Ensure all water features (fountains, ponds) are clean and operating correctly. Check pump filters.",
                    "Send a brief email update to hotel management with photos of completed work and any identified issues."
                ]
            },
            {
                "title": "Daily Spa Operations Checklist",
                "tasks": [
                    "Verify all treatment rooms are immaculately clean, stocked with fresh linens, and at a comfortable temperature.",
                    "Check that all spa equipment (steam rooms, saunas, hydrotherapy tubs) is operational and at the correct temperature. Log the temperatures.",
                    "Review therapist schedules and confirm appointments for the day. Brief therapists on any VIPs or guests with special notes (e.g., allergies, pregnancies).",
                    "Ensure reception is stocked with towels, robes, slippers, and refreshments. The presentation should be 5-star.",
                    "Conduct a brief morning meeting with spa staff to discuss the day's bookings, promotions, and a 'service excellence' tip of the day.",
                    "Proactively call one guest booked for the next day to confirm their appointment and ask if they have any special requests."
                ]
            },
            {
                "title": "Guest Activity Planning & Execution",
                "tasks": [
                    "Post the daily/weekly activity schedule in highly visible guest areas and on digital platforms (hotel app, in-room TV).",
                    "Inspect all equipment for guest activities (e.g., bicycles, kayaks, kids' club toys) for safety. Document the inspection with a checklist.",
                    "Ensure staff leading activities are prepared with all necessary supplies, a sign-up sheet, and a first-aid kit.",
                    "Brief the concierge and front desk on the day's activities so they can proactively inform and upsell to guests.",
                    "After each activity, ask participants for verbal feedback and make a note of it. Send a personalized thank-you note to one participating family each day."
                ]
            }
        ]
    },
    {
        id: 'jewellery_store_ops',
        title: "Jewellery Store Checklist",
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
                    "First staff member arrives, inspects exterior for tampering (locks, windows), reports 'all clear' via time-stamped message to manager off-site before approaching the door.",
                    "Second staff member arrives; both enter together. First action: disarm alarm within 30 seconds. System must log which code was used.",
                    "Immediately lock the door behind you. Place 'Closed' sign visibly.",
                    "Perform a check of all interior sensors, panic buttons, and CCTV cameras (ensure they are recording with correct timestamp). Document in daily log.",
                    "Two staff members proceed to the vault. Use dual keys/codes simultaneously to open. Vault opening time must be logged.",
                    "Inspect vault interior. Remove day-display trays, verifying contents of each tray against its specific inventory list. Both staff sign off.",
                    "Set up displays, ensuring each piece is accounted for against the daily opening inventory sheet.",
                    "Test silent panic buttons and hold-up alarms (test mode) before opening to the public. Log the test."
                ]
            },
            {
                "title": "Daily Closing Procedure (Dual Control)",
                "tasks": [
                    "Lock main door 15 minutes prior to closing time. No new customers allowed. Announce closing to any remaining customers.",
                    "Begin removing jewellery from displays, starting with highest value items, reconciling each piece with the display inventory sheet.",
                    "Two staff members verify each item against the closing inventory sheet as it is placed in vault trays. Any discrepancy requires an immediate incident report.",
                    "Place trays back in the vault in their designated, mapped locations.",
                    "Final inventory reconciliation and sign-off by both staff members in the master logbook.",
                    "Lock the vault using dual-key/code protocol. Physically check the handle is secure. Both staff must witness this.",
                    "Activate all alarm systems. Wait for confirmation call from security company before exiting.",
                    "Both staff members exit the premises at the same time. Visually confirm the door is locked from the outside."
                ]
            },
            {
                "title": "Ongoing Security & Sales Floor Protocol",
                "tasks": [
                    "Greet every customer and make direct eye contact. Acknowledge their presence immediately. (Pro Tip: This simple act deters many potential thieves).",
                    "Never show more than one high-value item (or tray) at a time. One out, one in. The item not being shown must be back in a locked case.",
                    "Observe for suspicious behavior: bulky clothing, nervous demeanor, filming on phones, questions about security rather than jewellery. Log any such instance.",
                    "Use code words (e.g., 'Can you help me with the 'Omega' watch?') to discreetly alert staff to a suspicious person. Practice these monthly.",
                    "For high-value purchases, verify credit card with photo ID. For large cash purchases, follow all AML regulations and file necessary reports.",
                    "Regularly clean glass display cases to remove fingerprints, which also allows staff to discreetly monitor the area.",
                    "Never turn your back on a customer who is handling merchandise. Always maintain a clear line of sight."
                ]
            },
            {
                "title": "Weekly Security & Maintenance Audit",
                "tasks": [
                    "Test all audible alarms (outside of business hours). Inform the monitoring company before and after the test.",
                    "Review a random 1-hour block of CCTV footage from a peak time in the past week, checking for blind spots or suspicious activity.",
                    "Inspect all locks, door hardware, and display case integrity. Document any signs of wear or damage.",
                    "Conduct a role-play drill of a robbery scenario with staff to test panic button use and emergency communication. Discuss the response.",
                    "Check batteries in all wireless security devices (e.g., door contacts, glass break sensors).",
                    "Verify the contact list for police, fire, and security monitoring company is up-to-date and accessible both physically and on a manager's phone."
                ]
            }
        ]
    },
    {
        id: 'pharmacy_ops_compliance',
        title: "Pharmacy Checklist",
        priceUSD: 149.99,
        priceINR: 11999,
        category: "Healthcare",
        description: "A specialized, compliance-focused toolkit for retail pharmacies to ensure patient safety and operational accuracy.",
        icon: <Cross className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Prescription Verification Protocol",
            "Controlled Substance Inventory",
            "Patient Counseling Checklist",
            "Daily Compliance & Logs"
        ],
        checklists: [
            {
                title: "Daily Opening & Compliance Check",
                tasks: [
                    "Disarm security system. Check for any overnight alerts. Document in the security log.",
                    "Log temperatures of medication and vaccine refrigerators using a calibrated digital thermometer. Log must be co-signed by a second staff member.",
                    "Calibrate pill counting machines and document the calibration in the equipment log.",
                    "Check and restock supplies for prescription filling (bottles, labels, bags).",
                    "Verify that the contact list for emergency services (Police, Poison Control) is visible and up-to-date.",
                    "Review any new communications from the pharmacy board or regulatory bodies."
                ]
            },
            {
                "title": "Prescription Filling & Verification (The 'Five Rights')",
                "tasks": [
                    "Verify patient identity using two identifiers (e.g., name and DOB) for new prescriptions.",
                    "Check prescription for completeness and legality (doctor's signature, date, DEA number for controlled substances). Call prescriber to clarify any ambiguity.",
                    "Perform a drug utilization review (DUR) in the pharmacy software to check for allergies, interactions, or duplicate therapies. Document any overrides.",
                    "Follow the 'Right Drug, Right Patient, Right Dose, Right Route, Right Time' protocol during filling. (Pro-Tip: Use barcode scanners to verify the NDC of the stock bottle against the prescription).",
                    "A second pharmacist must perform a final check on all high-risk, compounded, and pediatric medications before dispensing. This check must be logged.",
                    "Counsel every patient on new medications, covering side effects, administration, and importance of adherence. Offer printed information.",
                    "For refills, ask the patient if they have any questions or if anything has changed with their health."
                ]
            },
            {
                "title": "Inventory & Controlled Substances (Zero-Error Protocol)",
                "tasks": [
                    "Conduct a daily count of all Schedule II controlled substances at the start and end of each shift. Two people must conduct and sign the count.",
                    "Any discrepancy, no matter how small, requires an immediate investigation and report.",
                    "Check for expiring medications on a monthly basis and remove them from stock for proper disposal or return.",
                    "Receive new drug shipments, verify against the invoice, and immediately secure any controlled substances in the vault/safe. The receiving pharmacist must sign the invoice.",
                    "Process and log all returned or expired medications according to regulatory guidelines in a dedicated destruction log (e.g., RxDestroyer)."
                ]
            },
            {
                "title": "Closing Procedures & Data Security",
                "tasks": [
                    "Reconcile cash registers and credit card terminals.",
                    "File all of the day's hard-copy prescriptions sequentially.",
                    "Complete all required logs (refrigerator temps, controlled substance counts, cleaning logs). The lead pharmacist must review and sign them.",
                    "Secure all medications and patient records. The narcotics safe must be physically checked to be locked.",
                    "Ensure all workstations are logged off to protect patient data (HIPAA/privacy compliance).",
                    "Activate security system and lock all entrances. Confirm the alarm is set with the monitoring company."
                ]
            }
        ]
    },
    {
        id: 'hospital_administration_ops',
        title: "Hospital Administration & Operations Checklist",
        priceUSD: 199.99,
        priceINR: 15999,
        category: "Healthcare",
        description: "A comprehensive operational toolkit for hospital administrators covering patient care, safety, and departmental coordination.",
        icon: <Cross className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Patient Admission & Discharge Protocol",
            "Surgical Suite & OT Readiness",
            "Emergency Room (ER) Triage & Flow",
            "Inter-Departmental Coordination"
        ],
        checklists: [
            {
                "title": "Patient Admission & Discharge",
                "tasks": [
                    "Verify patient identification with two identifiers and cross-check with the hospital information system (HIS).",
                    "Ensure all consent forms are explained, signed, and witnessed. A digital copy must be stored in the patient's file immediately.",
                    "Conduct a nursing assessment upon admission, documenting allergies, current medications, and baseline vital signs.",
                    "Prepare a detailed discharge plan at least 24 hours in advance, including follow-up appointments, medication prescriptions, and patient education materials.",
                    "A pharmacist must review and reconcile the patient's discharge medications. The nurse must explain each medication to the patient/family.",
                    "Arrange post-discharge transport or care coordination as needed. Confirm the arrangement with the patient's family."
                ]
            },
            {
                "title": "Surgical Suite / Operating Theatre (OT) Readiness",
                "tasks": [
                    "Perform a daily 'first case of the day' check to ensure all OT equipment (anesthesia machine, monitors, lights) has passed its self-test and is functional.",
                    "Verify that the correct sterile instrument sets are available for each scheduled surgery, with sterilization indicators checked and logged.",
                    "Conduct a 'surgical time-out' immediately before incision for EVERY case: the entire team must verbally confirm patient identity, surgical site, and procedure.",
                    "Maintain a strict surgical count of all sponges, needles, and instruments. The count must be performed and reconciled audibly before closing the patient.",
                    "Ensure the OT is cleaned and disinfected to sterile standards between each case. Log the cleaning time.",
                    "Check and log temperature and humidity in the OT to ensure they are within the required range for infection control."
                ]
            },
            {
                "title": "Emergency Room (ER) Management",
                "tasks": [
                    "Triage every patient within 10 minutes of arrival, assigning them a priority level based on a standardized scale (e.g., ESI).",
                    "Ensure resuscitation bays are checked at the start of every shift and are fully stocked (e.g., intubation trays, crash cart with charged defibrillator).",
                    "Monitor ER wait times in real-time. A hospital administrator must be alerted if wait times for high-acuity patients exceed a set threshold.",
                    "Facilitate rapid transfer of admitted patients from the ER to inpatient beds to prevent ER boarding and overcrowding.",
                    "Conduct a daily inventory of all critical ER supplies and medications.",
                    "Debrief with the ER team after any major trauma or critical event to discuss what went well and what could be improved."
                ]
            },
            {
                "title": "Infection Control & Compliance",
                "tasks": [
                    "Conduct hand hygiene audits by observing staff in different departments. Provide immediate feedback.",
                    "Track rates of hospital-acquired infections (HAIs) and present the data at a monthly quality control meeting.",
                    "Ensure terminal cleaning procedures are followed for rooms of patients who were on isolation precautions.",
                    "Verify that all staff have up-to-date vaccinations (e.g., for influenza).",
                    "Ensure proper disposal of all biomedical waste according to regulatory standards. Check that disposal bins are not overfilled.",
                    "Prepare for regulatory audits (e.g., JCI, NABH) by conducting regular mock surveys."
                ]
            }
        ]
    },
    {
        id: 'private_clinic_ops',
        title: "Private Clinic & Outpatient Facility Checklist",
        priceUSD: 149.99,
        priceINR: 11999,
        category: "Healthcare",
        description: "The essential operations checklist for private medical and dental clinics, focusing on patient flow, safety, and billing.",
        icon: <Cross className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Patient Appointment & Registration",
            "Clinical Room Turnover & Sterilization",
            "Medical Billing & Insurance Claims",
            "Emergency Preparedness for Clinics"
        ],
        checklists: [
            {
                title: "Daily Opening & Patient Readiness",
                tasks: [
                    "Review the day's appointment schedule. Flag any new patients or complex procedures that may require extra time.",
                    "Ensure all patient consultation and examination rooms are clean, stocked, and ready for the first patient. Use a room-readiness checklist.",
                    "Verify all diagnostic equipment (e.g., ECG, ultrasound, dental X-ray) passes its daily calibration and self-tests. Log the results.",
                    "Check and log temperatures of medication and vaccine refrigerators.",
                    "Conduct a 10-minute morning huddle with all staff (clinical and admin) to review the schedule and discuss any operational issues.",
                    "Send automated appointment reminders to all patients scheduled for the next business day."
                ]
            },
            {
                title: "Patient Flow & Experience",
                "tasks": [
                    "Greet patients warmly upon arrival. Verify their identity and insurance information at check-in.",
                    "Ensure new patient paperwork is completed digitally or physically before they see the doctor. (Pro-Tip: Use a tablet-based intake form like 'Phreesia').",
                    "Keep waiting times to a minimum. A staff member should provide an update to any patient waiting more than 15 minutes past their appointment time.",
                    "Ensure clinical rooms are cleaned and prepped within 5 minutes of a patient leaving to maintain flow.",
                    "At checkout, clearly explain any payments due, provide a detailed receipt, and schedule their next follow-up appointment.",
                    "Send a patient satisfaction survey (e.g., via SMS) within 24 hours of their visit."
                ]
            },
            {
                title: "Clinical Safety & Sterilization",
                "tasks": [
                    "For dental/procedural clinics: Follow a strict, documented protocol for sterilizing all instruments using an autoclave. Daily spore testing is mandatory.",
                    "Dispose of all sharps and biomedical waste in designated, puncture-proof containers. Check that containers are not overfilled.",
                    "Ensure all staff are trained on and have access to appropriate PPE.",
                    "Maintain an up-to-date crash cart or emergency kit. Check the defibrillator and oxygen tank monthly. Log the check.",
                    "Conduct a quarterly emergency drill (e.g., a mock medical emergency like syncope or an allergic reaction) and review the team's response."
                ]
            },
            {
                title: "Billing & Administration",
                "tasks": [
                    "Verify each patient's insurance eligibility and benefits *before* their appointment to avoid billing surprises.",
                    "Submit all insurance claims within 48 hours of the service being rendered. Use a clearinghouse to reduce errors.",
                    "Review and follow up on any denied or rejected claims within 72 hours. Assign one person to be the 'claims champion'.",
                    "Reconcile daily payments against appointment records. The office manager must sign off on the daily financial report.",
                    "Maintain strict patient data confidentiality in compliance with HIPAA or local regulations. All staff must complete annual privacy training."
                ]
            }
        ]
    },
    {
        id: 'diagnostic_lab_ops',
        title: "Diagnostic Lab Checklist",
        priceUSD: 159.99,
        priceINR: 12999,
        category: "Healthcare",
        description: "A zero-error tolerance playbook for pathology and diagnostic labs focusing on accuracy, safety, and compliance.",
        icon: <TestTube className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Sample Receiving & Accessioning",
            "Daily Equipment Calibration Logs",
            "Quality Control (QC) Run Protocol",
            "Biohazard Waste Management"
        ],
        checklists: [
            {
                title: "Morning Setup & Calibration (Zero-Error Start)",
                tasks: [
                    "Log temperatures of all refrigerators, freezers, and incubators using a calibrated digital thermometer. The log must be co-signed by a second staff member.",
                    "Run daily quality control (QC) samples on all analyzers before processing any patient samples. Results must be within acceptable limits (Levey-Jennings chart). Document any corrective action.",
                    "Calibrate pipettes and other measurement instruments as per the weekly schedule. Document in the equipment log.",
                    "Check inventory of reagents and consumables. Note any items approaching minimum stock levels in the ordering system.",
                    "Ensure all workstations are clean and disinfected with an approved solution. Document the cleaning.",
                    "Conduct a 5-minute huddle to discuss any instrument issues or pending critical samples from the previous shift."
                ]
            },
            {
                title: "Sample Management & Processing (Patient Safety First)",
                tasks: [
                    "Verify patient information on the sample tube matches the requisition form using at least two identifiers (e.g., Full Name and DOB). No match, no process.",
                    "Inspect samples for proper collection (e.g., correct tube type, sufficient volume, no hemolysis). Reject and log any unsuitable samples, and immediately notify the collection center.",
                    "Assign a unique lab ID (accession number) to each sample and log it into the Laboratory Information System (LIS). Use barcode scanners to prevent manual entry errors.",
                    "Prioritize and process STAT samples within the defined turnaround time. A visual flag (e.g., a red rack) should be used.",
                    "Ensure proper PPE (gloves, lab coat, eye protection) is worn at all times. Conduct a random PPE check on one staff member daily."
                ]
            },
            {
                title: "Data, Reporting & Critical Value Communication",
                tasks: [
                    "A senior technologist or pathologist must review and verify all critical or abnormal results before release. This must be logged in the LIS.",
                    "Ensure reports are delivered to the correct physician/clinic via secure, encrypted methods (HIPAA compliance).",
                    "Handle any STAT or critical value call-backs to physicians immediately. Document the time, the person spoken to, and a read-back confirmation of the results.",
                    "Perform daily backups of the LIS and all instrument data to a secure, off-site location.",
                    "Shred all paper documents containing patient information using a cross-cut shredder at the end of each day."
                ]
            },
            {
                title: "End of Day & Biohazard Management",
                tasks: [
                    "Properly dispose of all biohazardous materials in designated, sealed red bags/sharps containers. The containers must not be overfilled.",
                    "Perform end-of-day maintenance on all analyzers as per manufacturer guidelines. Log the maintenance.",
                    "Decontaminate all work surfaces with an approved biocide.",
                    "Securely store any pending samples in the appropriate temperature-controlled environment.",
                    "Ensure all patient data is secured. All computer systems must be logged off, not just locked.",
                    "The lab supervisor must do a final walkthrough, sign the daily log, and secure the lab."
                ]
            }
        ]
    },
    {
        id: 'gym_fitness_center_ops',
        title: "Gym & Fitness Center Checklist",
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
                    "Walk the entire gym floor. Inspect all cardio and strength equipment for frayed cables, loose bolts, or malfunctions. Tag any faulty equipment 'Out of Order' and log it in the maintenance book.",
                    "Ensure all free weights are correctly racked and organized. No weights on the floor.",
                    "Check that all emergency exits are clear, unblocked, and the alarms are armed.",
                    "Verify first aid kits and AEDs are present, fully stocked, and accessible. Check AED battery status indicator. Log this check.",
                    "Post emergency contact list (Ambulance, Police, nearest Hospital) visibly at reception.",
                    "Wipe down all equipment handles, benches, and mats with disinfectant.",
                    "Check locker rooms and showers for cleanliness, stock (soap, paper towels), and any hazards like wet floors."
                ]
            },
            {
                "title": "Member Management & Customer Experience",
                "tasks": [
                    "Provide a comprehensive, hands-on orientation for all new members, demonstrating proper form for 3 key exercises.",
                    "Follow up with new leads within 12 hours. (Pro-tip: Use a CRM like 'GymMaster' or 'Mindbody' to automate this).",
                    "Have a clear and consistent sales script for staff, focusing on member goals, not just price.",
                    "Ensure membership agreements are filled out completely and a digital copy is sent to the member immediately.",
                    "Actively engage with current members on the floor. Task staff to have at least 5 positive interactions per shift.",
                    "Track key metrics: new members, cancellations, member attendance. Call one member who hasn't attended in 2 weeks to check in."
                ]
            },
            {
                "title": "Class & Staff Management",
                "tasks": [
                    "Publish class schedules at least one month in advance on your website and app.",
                    "Verify that all instructors' certifications and liability insurance are up-to-date and on file.",
                    "Have a clear system for instructors to find substitutes if they are unable to teach.",
                    "A manager must attend at least one class per instructor per month to ensure quality and consistency. Provide feedback.",
                    "Schedule regular staff meetings. Include a 10-minute emergency procedure drill in every meeting.",
                    "Proactively solicit feedback from members about class times and types."
                ]
            },
            {
                "title": "Closing Procedures & Security",
                "tasks": [
                    "Give closing announcements 15 and 5 minutes before closing.",
                    "Do a final walkthrough of the entire facility, including locker rooms and showers, to ensure all members have left.",
                    "Perform a final clean and wipe-down of all equipment. Rerack any remaining weights.",
                    "Secure all cash and valuables in the safe. Reconcile the cash register.",
                    "Lock all doors, including internal offices.",
                    "Set the alarm system and physically check that the main entrance is locked from the outside."
                ]
            }
        ]
    },
    {
        id: 'salon_spa_ops',
        title: "Salon & Day Spa Checklist",
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
                    "Disinfect all high-touch surfaces: reception desk, styling stations, manicure tables, pedicure chairs, door handles.",
                    "Ensure all tools (scissors, combs, brushes) are sterilized using an autoclave or EPA-approved disinfectant. Check that sterilized tool pouches are sealed and dated.",
                    "Check and restock all stations with fresh, clean towels, capes, and necessary supplies.",
                    "Verify that autoclaves and other sterilization equipment are functioning correctly. Log the first cycle of the day.",
                    "Prepare fresh disinfectant solutions as per health code regulations. Use test strips to verify concentration.",
                    "Confirm reception has the day's appointment schedule and has reviewed the client notes for any allergies or special requests.",
                    "Send automated appointment reminders to all of today's clients. (Pro-Tip: Use a system like Fresha or Vagaro)."
                ]
            },
            {
                "title": "Client Experience & Service",
                "tasks": [
                    "Greet clients warmly by name and offer a beverage upon arrival.",
                    "Conduct a thorough consultation before any service, asking open-ended questions to understand client expectations. Document key points in their client file.",
                    "Keep detailed digital client records: service history, color formulas, allergies, and personal preferences (e.g., 'prefers not to talk much').",
                    "Ensure all staff follow service protocols for consistent quality. The manager should shadow one service per week.",
                    "Politely confirm the client's satisfaction before they leave the chair. Offer to make any small adjustments.",
                    "At checkout, recommend products used during the service and pre-book their next appointment. Offer a small discount for pre-booking.",
                    "Send a thank-you message with a review request 24 hours after their appointment."
                ]
            },
            {
                "title": "Inventory & Retail Management",
                "tasks": [
                    "Conduct a weekly inventory count of all professional-use and retail products using a barcode scanner app to speed up the process.",
                    "Place orders for low-stock items based on sales velocity data.",
                    "Ensure retail displays are clean, well-stocked, dust-free, and visually appealing. Front-face all products.",
                    "Train staff on product knowledge. In daily huddles, have one staff member present a 'product of the day'.",
                    "Track product sales to identify best-sellers and slow-moving items. Create promotions for items nearing expiration."
                ]
            },
            {
                "title": "Closing & End-of-Day Tasks",
                "tasks": [
                    "Properly dispose of all single-use items (cotton pads, wax strips, foils) in a closed-lid bin.",
                    "Collect all used tools and start the multi-step sterilization process.",
                    "Clean all stations, chairs, and shampoo bowls thoroughly.",
                    "Sweep and mop all floors, paying special attention to hair clippings.",
                    "Reconcile the day's sales, tips, and cash register. Print and sign the end-of-day report.",
                    "Secure the premises, lock all doors, and set the alarm."
                ]
            }
        ]
    },
    {
        id: 'school_safety_operations',
        title: "School & College Safety Checklist",
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
                    "Conduct a full perimeter walk to check for vandalism, unsecured gates, or suspicious items. Log the walk in the security portal (e.g., Silvertrac).",
                    "Test a random sample of communication systems (PA system, walkie-talkies, emergency buttons). Document which ones were tested.",
                    "Verify all primary security cameras are operational and recording with correct timestamps. Check footage for any overnight incidents.",
                    "Ensure all visitor entry points are staffed and sign-in/ID verification procedures are ready. (Pro-Tip: Use a digital visitor log like Envoy).",
                    "Check that all school buses have passed their morning safety inspection before departure. The transport manager must sign off.",
                    "Confirm that crossing guards are at their posts 15 minutes before student arrival time. Verify they have their communication device."
                ]
            },
            {
                "title": "Classroom & Common Area Safety",
                "tasks": [
                    "Ensure first aid kits in each classroom and common area are fully stocked and items are not expired. A monthly spot-check is required.",
                    "Verify that emergency exit paths, hallways, and doorways are clear and unblocked. Fire extinguishers must be visible and accessible.",
                    "Confirm that all hazardous materials in science labs are securely stored and inventoried. Access must be logged.",
                    "Check that student allergy and medical emergency information (e.g., for epilepsy, severe allergies) is easily and confidentially accessible to the teacher and school nurse.",
                    "Inspect nurse's office for adequate supplies, cleanliness, and proper disposal of bio-waste.",
                    "Conduct a random classroom check to ensure emergency procedure posters are visible."
                ]
            },
            {
                "title": "Student Dismissal & Lost-and-Found Protocol",
                "tasks": [
                    "Verify that only authorized guardians are picking up students, checking IDs for any unfamiliar faces against the student's authorized pickup list.",
                    "Manage bus loading zones to ensure students board the correct bus safely. A teacher must be present with a manifest for each bus.",
                    "Supervise walker and car-rider dismissal areas to maintain order and traffic flow. Use safety vests for all staff on duty.",
                    "Conduct a final sweep of common areas (library, cafeteria, playground) to ensure no students are left behind.",
                    "Log any late pick-ups and follow the school's parent communication protocol. Repeated late pickups should trigger a parent meeting.",
                    "Photograph, log, and store any items left behind in a designated Lost and Found area. Display photos on a private portal for parents."
                ]
            },
            {
                "title": "Monthly Emergency Preparedness & Drills",
                "tasks": [
                    "Conduct a scheduled fire, earthquake, or lockdown drill. Use different scenarios each time. Record the time taken to evacuate/secure and critique the response.",
                    "Test the functionality of all emergency alarms, backup generators, and strobe lights. Inform local authorities before testing audible alarms.",
                    "Review and update the school's emergency response plan with a safety committee. Note any procedure changes and schedule training.",
                    "Inspect all playground equipment for safety hazards (loose bolts, sharp edges, fall zones). Document with photos and schedule repairs.",
                    "Update and verify emergency contact lists for all students and staff. Send a test message via the emergency broadcast system (e.g., ParentSquare).",
                    "Restock all emergency supply kits (e.g., water, non-perishable food, blankets, first aid)."
                ]
            }
        ]
    },
    {
        id: 'supermarket_ops_blueprint',
        title: "Supermarket Checklist",
        priceUSD: 129.99,
        priceINR: 9999,
        category: "Retail",
        description: "The essential operational playbook for managing a grocery store, focusing on fresh produce, inventory, and daily operations.",
        icon: <ShoppingCart className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Fresh Produce & Quality Control",
            "Cold Chain & Dairy Management",
            "Daily Restocking & Shelf Presentation",
            "Cashier & Front-End Operations"
        ],
        checklists: [
            {
                title: "Morning Opening & Freshness Check",
                tasks: [
                    "Inspect the fresh produce section. Remove any spoiled or wilted items. Rotate stock using FIFO. The department head must sign off on the 'culling' log.",
                    "Check 'sell-by' and 'use-by' dates in the dairy, meat, and bakery sections. Remove and log any items expiring within 24 hours for quick sale or disposal.",
                    "Verify and log temperatures of all refrigerators, freezers, and hot-food holding units. A second manager must verify any out-of-range readings.",
                    "Walk all aisles to identify restocking needs and check for shelf cleanliness. (Pro-Tip: Use an app like 'Zenput' to create and assign tasks).",
                    "Ensure the entrance, shopping carts, and checkout areas are clean and clutter-free.",
                    "Conduct a 10-minute huddle with department heads to discuss daily sales, promotions, and staffing issues."
                ]
            },
            {
                title: "Receiving & Cold Chain Integrity",
                tasks: [
                    "Inspect all incoming deliveries for quality and check temperatures for perishable goods *before* they are unloaded from the truck. Reject any shipment outside the safe temperature zone.",
                    "Verify deliveries against invoices, noting any shortages or damages. Get a signed credit note from the driver on the spot.",
                    "Immediately move perishable items to cold storage, following the FIFO (First-In, First-Out) principle. The goal is 'dock to stock' in under 20 minutes.",
                    "Use a handheld scanner to update inventory levels in the POS system as stock is received. This prevents 'phantom stock' issues.",
                    "Keep the receiving area clean and organized. Nothing should be left on the floor."
                ]
            },
            {
                title: "During the Day: Floor Operations & Customer Service",
                tasks: [
                    "Continuously restock shelves, especially for fast-moving items ('power alley'). Prioritize 'holes' on the shelves.",
                    "Perform 'facing' of shelves hourly to ensure products are neat, pulled to the front, and look abundant.",
                    "Conduct regular freshness checks in the produce and bakery departments. Remove any poor-quality items.",
                    "Address any spills or hazards on the floor immediately. Place 'wet floor' signs and have them cleaned within 5 minutes.",
                    "Monitor checkout queues. If more than 3 people are in line, a manager must be called to open another counter or assist with bagging.",
                    "Empower staff to resolve small customer complaints on the spot (e.g., a damaged product) without needing manager approval."
                ]
            },
            {
                title: "Closing & Financial Reconciliation",
                tasks: [
                    "Perform a final sweep of the aisles for restocking and tidying ('recovery').",
                    "Consolidate and remove near-expiry items for markdown or disposal. Log all wastage.",
                    "Reconcile each cashier's drawer against their POS sales report. Any variance over a set amount must be documented and co-signed by a manager.",
                    "Prepare the daily bank deposit. Two employees must be present when handling and sealing the cash bags.",
                    "Secure the store, lock all entrances, and set the alarm system. The closing manager must do a final walkthrough and verify the alarm is set by checking the app or receiving a notification."
                ]
            }
        ]
    },
    {
        id: 'fashion_boutique_ops',
        title: "Fashion Boutique Checklist",
        priceUSD: 69.99,
        priceINR: 5599,
        category: "Retail",
        description: "The complete guide to running a successful apparel store, from visual merchandising to fitting room management.",
        icon: <Shirt className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Visual Merchandising & Display",
            "Fitting Room & Loss Prevention",
            "New Stock & Inventory Management",
            "Clienteling & Personal Styling"
        ],
        checklists: [
            {
                title: "Daily Opening & Merchandising",
                tasks: [
                    "Refresh the window display. Ensure it's clean, well-lit, and features new arrivals or a compelling story. Take a photo for your social media.",
                    "Walk the floor and restock any items sold the previous day. Ensure all sizes are represented on the floor, not just in the back room.",
                    "Steam and prep any wrinkled garments on the sales floor. Perfect presentation is key.",
                    "Check that all mannequins are styled correctly according to the current collection's theme. Adjust one mannequin daily to keep the look fresh.",
                    "Ensure all signage and price tags are correct and presentable. No handwritten signs.",
                    "Conduct a 10-minute team huddle to discuss sales goals, new arrivals, and the 'clienteling' focus of the day."
                ]
            },
            {
                title: "Fitting Room, Customer Service & Loss Prevention",
                tasks: [
                    "Implement a strict fitting room policy (e.g., limit of 6 items, staff member checks items in and out). This dramatically reduces shrink.",
                    "Ensure fitting rooms are always clean, well-lit, and mirrors are smudge-free. Check them every hour.",
                    "Train staff to 'service' the fitting rooms: check on customers, offer different sizes, and clear out unwanted items immediately to be re-hung.",
                    "Inspect items returned from the fitting room for damage (makeup, tears) before returning to the sales floor.",
                    "Actively engage in 'clienteling': building relationships and tracking preferences. Task each staff member to record notes on 3 clients per day in your CRM or notebook.",
                    "Greet every customer within 30 seconds of entry. This is both good service and a major loss prevention technique."
                ]
            },
            {
                title: "New Stock & Inventory Management",
                tasks: [
                    "Receive and check new shipments against the packing slip in a designated backroom area, away from customers.",
                    "Report any discrepancies (shortages, damages) to the supplier with photos within 24 hours.",
                    "Tag all new items with price and security tags before bringing them to the sales floor.",
                    "Steam and prep all new stock before merchandising.",
                    "Conduct weekly 'cycle counts' of best-selling categories to maintain inventory accuracy. (Pro-Tip: Use an app like 'Sortly' to manage inventory on your phone).",
                    "Plan and execute markdowns. Update the POS system first, then change the tags. A second person should verify a sample of the new prices."
                ]
            },
            {
                title: "Closing & Daily Reporting",
                tasks: [
                    "Complete a full floor recovery: re-hang, re-fold, and organize all merchandise to be 'perfect' for the morning.",
                    "Clear all fitting rooms of any remaining items.",
                    "Reconcile daily sales reports from the POS system against cash and credit card terminal reports. The manager must sign off.",
                    "Prepare the bank deposit. Two people should be present if counting large amounts of cash.",
                    "Send a brief 'End of Day' report to the owner with sales figures, key highlights, and any issues.",
                    "Secure the premises, lock all doors, and set the alarm."
                ]
            }
        ]
    },
    {
        id: 'electronics_showroom_ops',
        title: "Electronics Showroom Checklist",
        priceUSD: 89.99,
        priceINR: 6999,
        category: "Retail",
        description: "A specialized playbook for managing high-value electronics retail, focusing on security, sales, and live demos.",
        icon: <Ear className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Live Demo Unit & Security Checks",
            "Inventory & High-Value Stock Audit",
            "Sales Staff Product Training",
            "Trade-in & Exchange Process"
        ],
        checklists: [
            {
                "title": "Daily Opening & Merchandising",
                "tasks": [
                    "Ensure all live demo units (phones, laptops, TVs) are charged, clean, and fully functional. Wipe down all screens.",
                    "Verify all security tethers and alarms on high-value items are active. Physically tug on 5 random units to test.",
                    "Conduct a spot-check of 5-10 high-value SKUs (e.g., latest iPhone model) against the inventory system. The count must be exact.",
                    "Check that all promotional signage and price tags are accurate and aligned with current offers. Remove outdated promotions.",
                    "Lead a 15-minute sales team huddle: Review daily targets, run a quick quiz on a new product's key features, and discuss a sales technique.",
                    "Ensure all sales staff are logged into the POS and CRM systems."
                ]
            },
            {
                "title": "Sales Floor & Customer Experience",
                "tasks": [
                    "Train staff to approach customers with open-ended, feature-based questions (e.g., 'Are you looking for a great camera or longer battery life?'), not just 'Can I help you?'.",
                    "Insist on a structured demo process for key products, highlighting at least 3 unique features.",
                    "Have a clear and transparent process for handling customer trade-ins, using a checklist to assess the device's condition.",
                    "Ensure financing and extended warranty options are offered to every eligible customer, with clear explanations of the benefits.",
                    "Maintain a clean and organized accessories section. This is a key driver of high-margin sales. Ensure items are well-stocked and priced.",
                    "Proactively offer to help customers set up their new device, transfer data, or install a screen protector. This adds huge value."
                ]
            },
            {
                "title": "Inventory & High-Value Security Protocol",
                "tasks": [
                    "Conduct a full, blind inventory count of all serialized high-value product categories (e.g., all iPhones) weekly. A second person must verify the count.",
                    "Review CCTV footage of cash counters, store exits, and the stockroom daily for any suspicious activity.",
                    "Implement a strict policy for handling returned goods, including a multi-point inspection for damage and completeness before issuing a refund.",
                    "Reconcile physical cash and credit card transactions against POS reports at the end of every shift. The manager must sign off on the reconciliation report.",
                    "High-value, low-volume items (e.g., drones, high-end cameras) must be stored in a locked stockroom, not on the open sales floor. Access must be logged."
                ]
            },
            {
                "title": "Staff & Training Drills",
                "tasks": [
                    "Conduct weekly 30-minute training sessions on new products. This must be completed before the product hits the sales floor.",
                    "Role-play customer scenarios, especially handling objections about price or competitors.",
                    "Track individual sales performance (units sold, attachment rate for accessories/warranties) and provide regular coaching.",
                    "Run a monthly drill on how to handle a grab-and-run theft attempt, focusing on staff safety and reporting procedures."
                ]
            }
        ]
    },
    {
        id: 'factory_shift_playbook',
        title: "Factory Shift Handover Checklist",
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
                "title": "Outgoing Shift: End-of-Shift Duties (30 mins before end)",
                "tasks": [
                    "Complete the production log: units produced vs. target, scrap/reject count, and detailed reasons for any shortfalls. This must be entered into the MES/ERP system.",
                    "Document any machine malfunctions, alarms, or near-misses that occurred during the shift in the maintenance log, even if resolved. Include timestamps and actions taken.",
                    "Log any quality control issues, holds, or deviations from the standard. Physically tag any non-conforming product.",
                    "Conduct a final walk-through of the work area to ensure it is clean, organized, and free of hazards (5S). Take a photo of the cleared workspace.",
                    "Compile a 'Shift Handover Report' summarizing all key information. This is a mandatory document.",
                    "Ensure all tools and equipment are returned to their designated shadow boards or storage locations."
                ]
            },
            {
                "title": "Joint Handover Meeting (5-10 mins)",
                "tasks": [
                    "Outgoing and incoming supervisors must meet face-to-face at the designated handover point.",
                    "The outgoing supervisor verbally briefs the incoming supervisor using the Handover Report as a guide. No handovers via text/phone.",
                    "Specifically discuss any ongoing safety concerns (e.g., a slippery floor), maintenance issues ('Machine 3 is running hot'), or quality alerts.",
                    "Review the production schedule for the upcoming shift, highlighting any changes or priorities.",
                    "Both supervisors must physically sign and date the handover log, confirming the transfer of responsibility. This is a non-negotiable step."
                ]
            },
            {
                "title": "Incoming Shift: Start-up Procedures (First 15 mins)",
                "tasks": [
                    "The incoming supervisor conducts a pre-shift huddle with their team, relaying key information from the handover report. Focus on safety and quality first.",
                    "Lead the team on a walk-through of the work area, visually verifying the status of key machines and safety equipment (e.g., guards in place, E-stops clear).",
                    "Confirm raw material levels and ensure there is enough stock for at least the first 4 hours of production. Escalate any shortages immediately.",
                    "Verify that the first-piece quality check for the new shift is completed and signed off before starting full production.",
                    "Ensure all operators are at their assigned stations, have the correct PPE, and have the correct work instructions for the scheduled job."
                ]
            },
            {
                "title": "Weekly Safety & Audit Drill",
                "tasks": [
                    "Review all shift handover logs from the past week to identify recurring problems. Create a corrective action plan for the top issue.",
                    "Conduct a weekly safety audit, checking that machine guards are in place, emergency stops are functional, and PPE is being worn correctly. Document with photos.",
                    "Review any safety incident or near-miss reports. Ensure the root cause analysis is complete and not just 'human error'.",
                    "Verify that scheduled preventative maintenance was completed on time. Check the signed-off work orders.",
                    "Run a surprise 'E-stop' drill. Press an emergency stop on a non-critical machine and observe the team's reaction and reset procedure."
                ]
            }
        ]
    },
    {
        id: 'wedding_hall_playbook',
        title: "Wedding & Banquet Hall Checklist",
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
                "title": "Initial Client Inquiry & Booking",
                "tasks": [
                    "Respond to new inquiries within 2 business hours. Send digital brochure and a link to a virtual tour. (Pro-Tip: Use a CRM like HoneyBook to automate this).",
                    "Conduct a thorough site visit, showcasing different setup possibilities and upselling opportunities (e.g., in-house AV, decor).",
                    "Provide a detailed, itemized quotation within 24 hours of the visit. Clearly state what's included and what's extra.",
                    "Issue a formal contract upon confirmation. Ensure clauses for payment schedule, cancellation, liabilities, and insurance are clear. Have your lawyer review the template annually.",
                    "Block the date on all internal calendars *only* upon receipt of the signed contract and non-refundable deposit.",
                    "Send a welcome kit with a list of preferred vendors, a timeline of next steps, and contact info for their dedicated event coordinator."
                ]
            },
            {
                "title": "Pre-Event Coordination (T-30 Days)",
                "tasks": [
                    "Hold a final walkthrough meeting with the client and their key vendors (planner, decorator, caterer).",
                    "Finalize the floor plan, seating arrangement, and event flow. Get the client's signature on the final floor plan.",
                    "Collect a list of all external vendors, their contact information, and a copy of their liability insurance certificate.",
                    "Obtain necessary permits or licenses if applicable (e.g., music license, fire permit for special effects) and post them in the office.",
                    "Schedule and test all in-house AV equipment with the client's actual presentation or media files.",
                    "Conduct a deep clean of the entire facility, including restrooms, kitchens, and windows, the week of the event."
                ]
            },
            {
                "title": "Event Day Execution",
                "tasks": [
                    "Venue manager on-site 3 hours before vendor arrival. Conduct a final facility check.",
                    "Supervise vendor setup to ensure it matches the agreed-upon floor plan and complies with venue rules (e.g., no taping on walls).",
                    "Conduct a final check of lighting, air conditioning, and restroom cleanliness 1 hour before guest arrival. Take photos for your records.",
                    "Serve as the single point of contact for the client and all vendors. Shield the client from minor issues.",
                    "Monitor staff levels and ensure service standards are met. Be visible and accessible throughout the event.",
                    "Be prepared to handle unforeseen issues. Have a 'Plan B' kit with items like a sewing kit, stain remover, extra batteries, and first aid supplies."
                ]
            },
            {
                "title": "Post-Event Wrap-Up & Settlement",
                "tasks": [
                    "Supervise the breakdown and cleanup process. Do a joint walk-through with the client or planner to check for any damages to the property before they leave.",
                    "Ensure the client collects all their personal belongings, decor, and wedding gifts. Have them sign a clearance form.",
                    "Reconcile any extra charges incurred during the event (e.g., extended hours, damages) and get client sign-off on the charges.",
                    "Issue the final invoice and process the final payment within 48 hours, as per the contract.",
                    "Send a personalized thank-you note to the client and their planner. Request a review for your website/social media with a direct link."
                ]
            }
        ]
    },
    {
        id: 'playschool_safety_protocol',
        title: "Playschool & Daycare Checklist",
        priceUSD: 59.99,
        priceINR: 4999,
        category: "Education",
        description: "The essential daily, weekly, and monthly checklist for running a safe, clean, and engaging playschool or daycare.",
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
                    "Visually inspect every piece of play equipment (slides, climbers, swings) for damage, loose parts, or sharp edges. Document findings with photos in a daily log.",
                    "Check all safety netting for holes or tears. No opening should be larger than a child's head.",
                    "Ensure all padded surfaces and floor mats are secure, with no gaps or trip hazards.",
                    "Test all electronic gates and access control systems. Only authorized personnel should be able to grant entry.",
                    "Sanitize all high-touch surfaces: door handles, benches, check-in counters, toys. Use a child-safe, certified disinfectant.",
                    "Conduct a morning briefing with staff on safety rules, emergency procedures, and children with special needs/allergies for the day."
                ]
            },
            {
                "title": "During-Session Operations & Supervision",
                "tasks": [
                    "Ensure staff are actively supervising zones using the 'zoning' method, with clear lines of sight. Staff should be constantly moving, not clustered or on phones.",
                    "Strictly enforce height/age restrictions for different play areas. Use color-coded wristbands for different age groups.",
                    "Address and document any rule-breaking or unsafe behavior immediately, following a 'redirect, remind, remove' policy.",
                    "Perform a quick sanitization of high-touch areas and restrooms every hour. Log this on a public-facing chart.",
                    "Monitor the capacity of the play area. Use a one-in, one-out policy when capacity is reached.",
                    "Practice a 'headcount' drill at a random time each day to ensure all children are accounted for."
                ]
            },
            {
                "title": "Closing & Deep Cleaning",
                "tasks": [
                    "Do a final sweep of the play area, including restrooms and cubbies, to ensure no children are left behind. A second staff member must verify.",
                    "Remove all balls from the ball pit for sanitization (using a ball-washing machine or soak method). Vacuum the pit base before returning balls.",
                    "Wipe down all surfaces of the play structures with child-safe disinfectant.",
                    "Mop all floors with a two-bucket system to prevent cross-contamination.",
                    "Log any maintenance issues or damaged toys that need to be addressed before the next day. Remove damaged items from the floor immediately.",
                    "Secure the facility, checking all locks and activating the alarm system."
                ]
            },
            {
                "title": "Weekly Maintenance & Emergency Drills",
                "tasks": [
                    "Tighten all bolts and connections on the play structures using a torque wrench to manufacturer specifications.",
                    "Deep clean and shampoo all carpets and soft play areas.",
                    "Take down and wash any removable fabric components.",
                    "Inspect the first-aid kit, restock any used items, and check expiration dates. The lead teacher must sign the inspection tag.",
                    "Conduct a surprise emergency drill (e.g., fire, stranger alert). Time the response and review the procedure with staff afterwards."
                ]
            }
        ]
    },
    {
        id: 'hindu_wedding_checklist',
        title: "Hindu Wedding Checklist",
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
                    "Book Sangeet venue and confirm capacity and noise restrictions. Get these in writing.",
                    "Hire DJ or live band; create a 'must-play' and 'do-not-play' list. Share the event timeline with them.",
                    "Choreograph and schedule practices for all family dance performances. (Pro-Tip: Create a WhatsApp group for coordination and video sharing).",
                    "Plan and book a host/emcee to keep the event flowing. Provide them with a script and correct name pronunciations.",
                    "Organize a detailed food and beverage menu, including live food stations. Confirm service times with the caterer.",
                    "Rent and test a high-quality sound system, stage, and dance floor. Do a sound check 2 hours before the event."
                ]
            },
            {
                "title": "Mehndi Ceremony Checklist",
                "tasks": [
                    "Book professional Mehndi artists for the bride and a separate team for guests. Confirm the number of artists and hours.",
                    "Finalize and provide reference images for the bridal Mehndi design. Discuss personalization (e.g., groom's initials).",
                    "Arrange comfortable, well-lit seating for artists and guests, with plenty of cushions.",
                    "Organize light music, entertainment, and a specific menu (finger foods are best, as guests' hands will be occupied).",
                    "Purchase or arrange Mehndi party favors (e.g., bangles, bindis, small pouches).",
                    "Prepare a post-application care kit for the bride (lemon-sugar solution, oil, and someone to help her eat/drink)."
                ]
            },
            {
                "title": "Wedding Day: Baraat, Varmala & Mandap",
                "tasks": [
                    "Coordinate Baraat assembly point, route, and estimated timing. Share a map with guests.",
                    "Arrange and confirm booking for the groom's horse/vintage car and the mobile sound system (dhol players).",
                    "Organize the Milni (meeting of families) and ensure garlands and gifts are ready and assigned to the correct family members.",
                    "Ensure fresh Varmalas (garlands) for the couple are kept in a cool place to prevent wilting. Have a backup pair.",
                    "Verify Mandap setup, decor, and sacred fire (havan kund) arrangements are complete and safe. Check for fire extinguisher nearby.",
                    "Check that a complete list of 'puja samagri' (ritual items) has been provided by and cross-checked with the Pandit. Have one person responsible for this.",
                    "Coordinate the bride's entry (e.g., under a phoolon ki chaadar) with specific music and designated escorts. Rehearse this once."
                ]
            },
            {
                "title": "Post-Wedding: Reception & Vidaai",
                "tasks": [
                    "Create and finalize the reception seating chart and table plan. Provide a copy to the venue manager and ushers.",
                    "Plan the reception timeline: grand entrance, cake-cutting, first dance, speeches. Give this to the DJ/emcee.",
                    "Appoint a trusted family member to manage the gift/envelope collection table and secure the items.",
                    "Arrange a guest book or photo booth for guest messages. (Pro-Tip: Use a QR code that links to a digital video guestbook like 'VidDay').",
                    "Plan the Vidaai ceremony, including designated family members and the decorated car. Keep tissues handy.",
                    "Prepare and settle all final payments for vendors in clearly marked, sealed envelopes. Hand them off at the end of their service."
                ]
            }
        ]
    },
    {
        id: 'muslim_wedding_checklist',
        title: "Muslim Wedding Checklist",
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
                    "Finalize the Mahr (dower) between both families. Have it in writing and understood by both bride and groom.",
                    "Book the Imam/Qazi to officiate the Nikah. Confirm their availability and any specific requirements.",
                    "Select and confirm the two adult Muslim witnesses for the bride. Ensure they are aware of their role and will be present.",
                    "Book the venue for the Nikah (Mosque or other location). Confirm policies on decor, photography, and gender segregation if applicable.",
                    "Prepare the Nikah-nama (marriage contract) and review all clauses with both families. A lawyer's review is recommended.",
                    "Arrange for separate, comfortable seating for male and female guests if required. Ensure clear signage.",
                    "Plan the bride's and groom's entrances and confirm the timing with the Imam."
                ]
            },
            {
                "title": "Post-Nikah & Rukhsati",
                "tasks": [
                    "Organize the distribution of dates and sweets immediately after the Nikah is pronounced and the couple has signed the contract.",
                    "Arrange for a celebratory dinner or lunch following the ceremony. Confirm menu and guest count with the caterer.",
                    "Plan the Rukhsati (sending off the bride). Designate specific family members to escort her. This can be an emotional time, so prepare accordingly.",
                    "Decorate the groom's car for the Rukhsati.",
                    "Coordinate the departure time to ensure a smooth transition from the bride's family home. The groom's family should be ready to receive the couple.",
                    "Recite prayers or Quranic verses during the departure."
                ]
            },
            {
                "title": "Walima (Groom's Reception) Planning",
                "tasks": [
                    "Send out Walima invitations from the groom's family. Ensure the guest list is finalized.",
                    "Book the Walima venue and confirm catering, ensuring all food is Halal and meets dietary requirements.",
                    "Create a seating plan for the reception. Have a designated table for the immediate family and elders.",
                    "Plan the stage decor for the bride and groom. Ensure comfortable seating.",
                    "Organize the timeline for the event: guest arrival, couple's entrance, dinner, speeches. Share this with all vendors.",
                    "Arrange for a photographer and videographer. Provide them with a list of 'must-have' shots (e.g., with specific family members)."
                ]
            },
            {
                "title": "General Vendor & Guest Management",
                "tasks": [
                    "Book all vendors (catering, decor, photo/video) well in advance and sign detailed contracts.",
                    "Arrange accommodation for out-of-town guests. Provide them with a welcome basket with the event schedule and local info.",
                    "Create a detailed timeline of all events (Mehndi, Nikah, Walima) to share with guests and vendors via a wedding website or app (e.g., Zola, The Knot).",
                    "Prepare and pack the bride's trousseau to be moved to her new home.",
                    "Designate one point person from each family to handle vendor payments on the day of the events. Use sealed, labeled envelopes."
                ]
            }
        ]
    },
    {
        id: 'auto_repair_playbook',
        title: "Auto Repair Shop Checklist",
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
                    "Greet the customer by name if they have an appointment.",
                    "Perform a 'walkaround' inspection with the customer using a digital tablet, noting any pre-existing damage. Both parties should sign the digital form.",
                    "Use a tablet to document the customer's concerns and vehicle symptoms accurately. Record a short video of the issue if possible (e.g., a strange noise).",
                    "Place a protective cover on the driver's seat, floor, and steering wheel in front of the customer.",
                    "Provide an estimated time for diagnosis and a clear explanation of the diagnostic fee.",
                    "Tag the keys with a numbered tag that matches the work order.",
                    "Send a welcome text message to the customer confirming their vehicle is checked in."
                ]
            },
            {
                title: "Diagnosis, Quoting & Work Order",
                tasks: [
                    "Assign the job to a technician based on skill set and availability in your shop management software (e.g., Shop-Ware, Tekmetric).",
                    "Technician performs diagnosis and reports findings back to the service advisor with photos or videos of the faulty parts.",
                    "Service advisor prepares a detailed digital quote, prioritizing repairs ('Immediate Safety Need', 'Recommended Maintenance'). Include photos/videos.",
                    "Contact the customer (text or call) to explain the required repairs using the photos/videos. Get explicit approval for each line item before starting any work. Document approval in the system.",
                    "Once approved, convert the quote to a formal work order and assign it to the technician."
                ]
            },
            {
                title: "Repair & Quality Control",
                tasks: [
                    "Technician follows the work order, documenting all steps and parts used. All torque specs for critical components must be met and logged.",
                    "All replaced parts must be kept in a clean box for the customer to inspect at pickup.",
                    "After repairs are complete, a different technician or a dedicated QC person must perform a final inspection and test drive, following a set route.",
                    "The QC checklist must include checking for grease marks on the interior/exterior, ensuring all dashboard lights are off, and verifying the original complaint is resolved.",
                    "Top off washer fluid and perform a courtesy cleaning of the front windshield.",
                    "The QC inspector must sign off on the work order before the customer is notified."
                ]
            },
            {
                title: "Billing & Vehicle Handover Experience",
                "tasks": [
                    "Inform the customer that their vehicle is ready for pickup, sending a link to the final invoice for them to review beforehand.",
                    "When the customer arrives, the service advisor should walk them through the repairs made, showing them the old parts if requested.",
                    "Hand over the keys, the invoice, and thank them for their business.",
                    "Schedule their next recommended maintenance appointment in the system and place a reminder sticker on the windshield.",
                    "Send a follow-up text message in 2 days to check on the vehicle's performance and ask for a Google review."
                ]
            }
        ]
    },
    {
        id: 'mall_operations_blueprint',
        title: "Shopping Mall Checklist",
        priceUSD: 99.99,
        priceINR: 7999,
        category: "Retail",
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
                    "Conduct a full patrol of the mall interior and exterior before public entry, checking for hazards, vandalism, or homeless encampments. Document with photos.",
                    "Test a random selection of security cameras and emergency exit door alarms. Log results in the security portal.",
                    "Brief the security team on daily events, expected high-traffic periods, any specific security alerts, or BOLO (Be On the Lookout) notices.",
                    "Ensure all public entrances are unlocked on schedule and are free of obstructions. Automatic doors must be tested.",
                    "Verify that the customer service/information desk is staffed, stocked with mall directories, and has a charged two-way radio.",
                    "Check that all escalators, elevators, and automatic doors are functioning correctly. Report any faults to the maintenance team immediately."
                ]
            },
            {
                title: "Ongoing Operations & Housekeeping",
                tasks: [
                    "Conduct hourly patrols. Vary the route. Focus on restrooms, food courts, and 'dead' corridors.",
                    "Ensure housekeeping staff are actively managing spills, overflowing bins, and restroom cleanliness using a real-time task management app (e.g., Sweeply).",
                    "Monitor parking areas for traffic flow, safety issues, or unauthorized vehicles. Issue warnings or tow as per mall policy.",
                    "Log and respond to any tenant complaints or maintenance requests within a 30-minute timeframe. Acknowledge receipt of their request immediately.",
                    "Check food court seating areas for cleanliness and table availability during peak lunch/dinner hours.",
                    "Run a monthly surprise drill for the security team (e.g., a mock 'lost child' report) and time their response and protocol execution."
                ]
            },
            {
                title: "Daily Closing Protocol",
                tasks: [
                    "Broadcast standardized closing announcements 30, 15, and 5 minutes before closing.",
                    "Security personnel conduct a sweep of all common areas, restrooms, and corridors to ensure all patrons have exited.",
                    "Verify with each tenant's closing staff that their premises are secure before they depart. Maintain a sign-out log for late-closing tenants (e.g., cinemas, restaurants).",
                    "Secure all public entrances at the designated time. Physically check each door.",
                    "Consolidate daily incident reports from security, housekeeping, and maintenance teams into a single 'Daily Operations Summary' for management.",
                    "Activate night-time lighting and security alarm protocols."
                ]
            },
            {
                "title": "Weekly Maintenance & Tenant Relations",
                "tasks": [
                    "Test the public announcement (PA) system and fire alarm system (after hours, with prior notification to tenants and authorities).",
                    "Inspect the roof and parking structures for any required maintenance (e.g., leaks, cracks, lighting outages).",
                    "Send out a weekly 'Tenant Update' email with information on mall events, maintenance schedules, and marketing opportunities.",
                    "Conduct a spot-check on a few tenants to ensure they are complying with mall operational guidelines (e.g., storefront appearance, operating hours).",
                    "Review and analyze weekly footfall data. Share key insights with tenants to help them plan staffing."
                ]
            }
        ]
    },
    {
        id: 'call_center_playbook',
        title: "Call Center Checklist",
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
                "title": "Pre-Shift & Team Huddle Checklist (15 mins)",
                "tasks": [
                    "Review previous shift's performance dashboard (AHT, FCR, CSAT, SL). Note any top performers and bottom outliers for coaching.",
                    "Check for any system outages or client updates from the central operations team. Prepare to communicate them clearly.",
                    "Lead a 15-minute team huddle: Discuss daily targets, share a 'call of the week' (good example), run a quick quiz on product knowledge, and end with recognition.",
                    "Ensure all agents are logged into the phone system and necessary software 5 minutes before the shift starts. No late logins.",
                    "Verify that the Workforce Management (WFM) schedule is aligned with the actual agents present on the floor. Update any absences."
                ]
            },
            {
                "title": "Live Operations & Quality Assurance (QA)",
                "tasks": [
                    "Monitor the live call queue dashboard in real-time. If Service Level (SL) drops below target, adjust agent skills or deploy backup agents.",
                    "Perform a minimum of 2 'live silent monitoring' sessions per agent per week. Document scores in a QA system (e.g., Scorebuddy).",
                    "Conduct at least 1 'side-by-side' coaching session per agent per month, providing immediate feedback.",
                    "Listen for and flag any critical compliance errors (e.g., improper disclosure, wrong information) in real-time. Use a 'call barge-in' feature if necessary to correct the error on the spot.",
                    "Handle escalated calls from agents. After resolving the customer's issue, spend 5 minutes de-briefing the agent on how to handle it next time.",
                    "Send out hourly performance updates to the team via a chat channel to maintain momentum and friendly competition."
                ]
            },
            {
                title: "Agent Performance & Coaching",
                "tasks": [
                    "Schedule and conduct weekly 1-on-1 meetings with each agent to discuss their performance scorecard. The meeting should be data-driven but coaching-focused.",
                    "Create and assign a documented, time-bound Performance Improvement Plan (PIP) for any agent in the bottom 10% for two consecutive weeks.",
                    "Publicly recognize top performers for the day/week (e.g., highest CSAT, best FCR) on a team board or group chat. Small rewards help.",
                    "Review QA scores with agents, playing back specific calls to illustrate coaching points. Focus on behaviors, not just scores.",
                    "Ensure all agents have completed their mandatory recurrent training for the month. Track this in a learning management system (LMS)."
                ]
            },
            {
                title: "End-of-Shift & Reporting",
                "tasks": [
                    "Analyze the day's performance against targets. Document detailed reasons for any significant variance in the official shift report.",
                    "Compile a 'Shift Handover Report' for the next manager, highlighting major outages, pending escalations, system status, and any agent issues.",
                    "Ensure all agents properly log their end-of-day dispositions and sign out of all systems.",
                    "Conduct a brief end-of-shift huddle to summarize the day's wins, challenges, and key learnings.",
                    "Email the final shift performance report to senior management and the client (if required) within 1 hour of the shift ending."
                ]
            }
        ]
    },
    {
        id: 'waterpark_pool_safety',
        title: "Waterpark & Public Pool Safety Checklist",
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
                    "Test and log water chemistry (Free Chlorine, pH, Combined Chlorine, Alkalinity) for ALL pools before opening. The log must be co-signed by a second, certified pool operator.",
                    "Physically walk every slide and attraction, checking for surface damage, loose bolts, or foreign objects. Document the walk with a signed checklist.",
                    "Run water pumps for all attractions for at least 30 minutes to ensure proper flow and function before public access.",
                    "Inspect all lifeguard towers/stations for required safety equipment (rescue tubes, backboards, first aid kits, whistles). All equipment must be in 'grab-and-go' condition.",
                    "Verify all two-way radios are fully charged and conduct a radio check with all stations.",
                    "Conduct a 'surprise' mock rescue drill (e.g., a mannequin in the wave pool) with the lifeguard team and time their response (detect, rescue, extract, CPR start). This must be under 3 minutes."
                ]
            },
            {
                title: "Ongoing Operational Safety",
                "tasks": [
                    "Re-test and log water chemistry in the main pools every hour of operation. This is non-negotiable.",
                    "Rotate lifeguard positions every 20-30 minutes to combat vigilance decrement (losing focus). The rotation path must be documented.",
                    "Supervisors must conduct periodic, documented audits of lifeguards using a system like the 'Dot Test' to ensure they are scanning their zone effectively.",
                    "Check and clean restrooms and changing areas hourly. Log cleaning times on a public-facing sheet.",
                    "Monitor weather conditions using a real-time lightning detection app (e.g., WeatherBug with Spark). Follow a strict '30/30' rule for clearing pools.",
                    "Ensure height and safety rule signage is visible and being enforced by ride operators at every attraction. Observe one operator for 10 minutes each hour."
                ]
            },
            {
                title: "Closing Procedures",
                tasks: [
                    "Clear all swimmers from the pools at the designated time using whistles and verbal announcements.",
                    "Perform a final sweep of all pools, including running hands along the bottom, to ensure no one is left behind. Two lifeguards must perform this check.",
                    "Shock or super-chlorinate pools as per the daily/weekly chemical schedule. Log the time and amount.",
                    "Clean all filters and backwash systems as required. Log the backwash cycle time and pressure readings.",
                    "Secure all entry points and store all loose equipment.",
                    "Complete the daily operations log, noting any incidents, rescues, or maintenance issues. The Head Lifeguard and Duty Manager must both sign."
                ]
            },
            {
                title: "Weekly & Monthly Checks",
                "tasks": [
                    "Perform a full inventory of the first aid station, restock all supplies, and check expiration dates on all items.",
                    "Conduct mandatory in-service training for all lifeguard staff (minimum 4 hours per month), covering rescue skills, CPR, and first aid. Document attendance and topics covered.",
                    "Test emergency shut-off buttons ('E-stops') for all pumps and water features.",
                    "Inspect and lubricate all moving parts on water attractions. Follow the manufacturer's maintenance schedule.",
                    "Review all incident and rescue reports from the past month to identify trends or problem areas. Develop an action plan to address the top issue."
                ]
            }
        ]
    },
    {
        id: 'airbnb_host_toolkit',
        title: "Airbnb Host Checklist",
        priceUSD: 49.99,
        priceINR: 3999,
        category: "Real Estate",
        description: "The essential toolkit for landlords and short-term rental hosts to streamline guest turnover, maintenance, and compliance.",
        icon: <Building2 className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Guest Check-in & Check-out Inspection",
            "Cleaning & Restocking Between Stays",
            "Routine Property Maintenance Schedule",
            "Guest Communication Templates"
        ],
        checklists: [
            {
                title: "Pre-Guest Arrival / New Tenant Move-In",
                tasks: [
                    "Confirm booking and send a welcome message with check-in instructions, address, Wi-Fi password, and contact info 48 hours prior.",
                    "Professionally clean the entire property. Use a detailed cleaning checklist that is signed and dated by the cleaner.",
                    "Take time-stamped photos/videos of the property's condition, focusing on high-value items and surfaces prone to damage. (Pro-Tip: Use the Timestamp Camera app).",
                    "Restock all supplies: fresh linens, towels, toilet paper, soap, coffee, welcome snacks. Use a checklist to ensure nothing is missed.",
                    "Test all appliances, Wi-Fi, and TV to ensure they are working. Check remote control batteries.",
                    "Set thermostat to a comfortable temperature (e.g., 70°F/21°C).",
                    "For long-term tenants, conduct a detailed move-in inspection with the tenant on a formal checklist and have both parties sign."
                ]
            },
            {
                title: "Guest Check-Out / Tenant Move-Out",
                tasks: [
                    "Send a check-out reminder the evening before, with clear instructions (e.g., where to leave keys, trash disposal, locking up).",
                    "Immediately after check-out, inspect the property for any new damages, comparing against the pre-arrival photos. This must be done before the cleaner starts.",
                    "Document any damages with photos and detailed notes to support a security deposit claim if necessary. Report it to the platform (e.g., Airbnb) immediately.",
                    "Strip all linens and start the laundry.",
                    "Begin the cleaning process for the next guest using your standard cleaning checklist.",
                    "For long-term tenants, formally return the security deposit within the legally required timeframe, providing an itemized list and receipts for any deductions."
                ]
            },
            {
                title: "Routine Maintenance & Compliance",
                tasks: [
                    "Test smoke and carbon monoxide detectors monthly by pressing the 'test' button. Change batteries every 6 months, regardless of usage.",
                    "Inspect and clean HVAC filters quarterly. A clogged filter is a common cause of AC failure.",
                    "Check for any leaks under all sinks and around all toilets monthly.",
                    "Maintain a list of approved and insured vendors (plumbers, electricians, etc.). Don't search for one in an emergency.",
                    "Ensure your property is compliant with all local short-term rental regulations and licenses. Set a calendar reminder to renew them.",
                    "Schedule annual pest control and exterior maintenance (e.g., gutter cleaning, pressure washing)."
                ]
            },
            {
                title: "Guest Communication & Experience",
                tasks: [
                    "Respond to all guest inquiries within 1 hour (within reasonable waking hours). Using saved replies for common questions helps.",
                    "After a guest checks in, send a follow-up message: 'Just wanted to make sure you got in okay and everything is to your satisfaction!'",
                    "Address any guest complaints immediately and professionally. Document the issue and the resolution in the platform messaging system.",
                    "After check-out, leave a positive, personalized review for good guests promptly. This encourages them to do the same.",
                    "Create a 'digital welcome book' with local recommendations, emergency contacts, and appliance instructions. (Pro-Tip: Use a tool like Hostfully)."
                ]
            }
        ]
    },
    {
        id: 'car_dealership_playbook',
        title: "Car Dealership Checklist",
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
                title: "Morning Showroom & Lot Preparation",
                tasks: [
                    "Walk the lot and showroom floor. Ensure all display vehicles are clean (no dust/fingerprints), unlocked, and have charged batteries.",
                    "Check that all price stickers and feature sheets are accurate, aligned, and correctly placed. Remove any from sold vehicles.",
                    "Lead a 15-minute sales team huddle: discuss daily targets, new inventory, current promotions, and role-play one objection.",
                    "Verify the reception and customer lounge are clean, stocked with fresh coffee/refreshments, and presentable.",
                    "Ensure all sales staff are logged into the CRM (e.g., Salesforce, DealerSocket) and ready to receive leads.",
                    "Check the dealership website for any errors or outdated information."
                ]
            },
            {
                "title": "Sales & Customer Interaction Process",
                "tasks": [
                    "Greet all customers within 2 minutes of their arrival on the lot with a warm, non-aggressive opening.",
                    "Log every new customer interaction into the CRM immediately, capturing contact info and vehicle of interest. This is non-negotiable.",
                    "Conduct a thorough needs analysis (e.g., 'What will you be using the vehicle for?') before recommending a vehicle.",
                    "Follow a structured 'walkaround' presentation for every vehicle, highlighting 3 key features that match the customer's needs.",
                    "Adhere to the dealership's test drive protocol: copy and verify driver's license, confirm insurance, and follow the designated route that showcases vehicle features (e.g., a highway for acceleration, a bumpy road for suspension).",
                    "Present all purchase, lease, and financing options clearly using a menu-style format. Be transparent about all figures.",
                    "Introduce every sales customer to a service department advisor, even if they don't buy, to build a future relationship."
                ]
            },
            {
                "title": "Vehicle Handover & Delivery Experience",
                "tasks": [
                    "Ensure the sold vehicle has undergone a full pre-delivery inspection (PDI), has a full tank of gas, and is detailed to perfection. The sales manager must sign off.",
                    "Prepare all paperwork in a professional, branded folder: final sales agreement, registration documents, warranty information.",
                    "Schedule a specific, one-hour delivery appointment with the customer. Don't make them wait.",
                    "Perform a comprehensive feature explanation with the new owner in the vehicle, connecting their phone to Bluetooth and setting basic preferences.",
                    "Personally introduce the new owner to the service department manager and schedule their first oil change.",
                    "Take a photo of the happy customer with their new car (with their permission) for social media.",
                    "Follow up with a personal call from the salesperson within 72 hours to ensure satisfaction and answer any new questions."
                ]
            },
            {
                title: "End of Day & Reporting",
                "tasks": [
                    "Update the CRM with the status of all leads and deals from the day. Add detailed notes for follow-up.",
                    "Reconcile all deposits and transactions with the finance office.",
                    "Secure all keys in the key vault or key tracking system. Perform a key audit to ensure all keys are accounted for.",
                    "Lock down all display vehicles and secure the showroom and lot.",
                    "Sales manager to compile and email a daily sales report to the general manager, highlighting wins and challenges."
                ]
            }
        ]
    },
    {
        id: 'corporate_launchkit',
        title: "Corporate Event Checklist",
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
                    "Define launch goals and KPIs (e.g., 50 media mentions, 500 qualified leads, 10,000 sign-ups).",
                    "Set a detailed budget with line items for venue, A/V, marketing, PR, and staffing. Have a 10% contingency fund.",
                    "Select and book a venue with appropriate tech (high-speed streaming Wi-Fi, good acoustics) and capacity. Test the Wi-Fi under load.",
                    "Draft and distribute press releases and embargoed media kits to targeted journalists. Schedule pre-briefings with key analysts.",
                    "Develop a social media campaign (pre-event teasers, live coverage with a dedicated hashtag, post-event highlights).",
                    "Prepare and rehearse product demonstration scripts, including a full run-through of a tech failure scenario.",
                    "Finalize a minute-by-minute run-of-show document and distribute it to all staff, speakers, and vendors.",
                    "Coordinate with keynote speakers, confirming travel, lodging, and presentation needs. Get their final presentation slides 48 hours in advance."
                ]
            },
            {
                "title": "New Employee Onboarding (First Week)",
                "tasks": [
                    "Send a 'Welcome to the Team' email one week prior with the first-day schedule, dress code, what to bring, and team bios.",
                    "Ensure their employment contract and all HR paperwork (NDA, tax forms) are signed and filed digitally before day one.",
                    "Set up their workstation, laptop, and all software accounts/permissions *before* they arrive. Their email should be active.",
                    "Schedule orientation sessions: HR policies, IT security, and a deep-dive vision overview from their department head.",
                    "Assign a 'buddy' or mentor. The buddy's first task is to take them for coffee or lunch on Day 1.",
                    "Clearly outline the 30-60-90 day goals and schedule the first formal check-in for the end of Week 1.",
                    "Provide company swag on their desk, an office tour, and personal introductions to key team members. Don't just point people out.",
                    "Add them to all relevant communication channels (Slack, Teams) and social groups."
                ]
            },
            {
                "title": "Annual General Meeting (AGM) Preparation",
                "tasks": [
                    "Send the formal AGM notice to all shareholders and board members as per legal statutes. Get delivery confirmation.",
                    "Compile, print, and distribute the annual report and audited financial statements. Also provide a secure digital version.",
                    "Finalize the agenda, order of proceedings, and exact wording of motions to be voted upon. Have legal counsel review.",
                    "Arrange for proxy voting mechanisms and a certified system for tabulation. Test the system.",
                    "Prepare and rehearse scripts for key speakers (CEO, CFO, Chairman), including a mock Q&A session covering difficult questions.",
                    "Appoint a qualified person (e.g., a corporate secretary) to record the minutes of the meeting accurately.",
                    "Ensure venue has adequate security, registration desks with shareholder lists, and professional audio-visual support. Have a backup microphone.",
                    "Conduct a full rehearsal in the venue 24 hours prior to the event."
                ]
            },
            {
                "title": "Trade Show & Conference Participation",
                "tasks": [
                    "Register for the event, book booth space, and secure any available sponsorship opportunities. Negotiate for a better booth location.",
                    "Design, produce, and ship booth graphics, banners, and marketing materials. Have tracking numbers for all shipments.",
                    "Plan and order promotional giveaways that are useful and branded. (Pro-Tip: Offer a 'premium' giveaway for qualified leads).",
                    "Train booth staff on key talking points, a 2-minute product demo, and the lead capture process. (Pro-Tip: Use an app like 'Leadfeeder' or a simple QR code form).",
                    "Schedule meetings with key prospects, partners, and media contacts in advance. Don't rely on walk-ups.",
                    "Create a post-show follow-up email campaign segmented by lead quality (Hot, Warm, Cold). Have it ready to go before the show starts.",
                    "Arrange all logistics for booth setup, utilities (power, internet), and takedown. Have a toolkit with zip ties, tape, and power strips.",
                    "Set clear goals for the number of leads to collect each day."
                ]
            }
        ]
    },
    {
        id: 'esg_reporting_framework',
        title: "ESG Reporting Checklist",
        priceUSD: 199.99,
        priceINR: 15999,
        category: "Compliance",
        description: "A step-by-step framework for companies to gather data and prepare for modern ESG reporting standards.",
        icon: <Shield className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Environmental Data Collection (Scope 1 & 2)",
            "Social Metrics & Employee Data",
            "Governance Policy Verification",
            "Stakeholder Engagement Plan"
        ],
        checklists: [
            {
                "title": "Environmental Data Gathering",
                "tasks": [
                    "Collect all utility bills (electricity, natural gas) for the reporting period to calculate Scope 2 GHG emissions.",
                    "Gather fuel consumption data from all company-owned vehicles and generators to calculate Scope 1 GHG emissions.",
                    "Measure total water consumption and track waste generation, including the percentage of waste that is recycled.",
                    "Document any environmental policies (e.g., sustainable procurement, remote work policy) already in place.",
                    "Log any environmental incidents, fines, or penalties. Document the corrective actions taken.",
                    "Appoint a data owner for each metric to ensure accountability."
                ]
            },
            {
                "title": "Social Metrics Data Gathering",
                "tasks": [
                    "Compile workforce data: gender diversity ratios at different levels (staff, management, board), employee turnover rate, and new hire rate.",
                    "Gather data on health and safety incidents: number of accidents, lost time injury rate (LTIR).",
                    "Document total employee training hours, categorized by type (e.g., compliance, professional development, safety).",
                    "Summarize community engagement activities and corporate social responsibility (CSR) investments in both hours and dollars.",
                    "Verify you have a formal, confidential employee grievance mechanism. Log the number and types of complaints received and their resolution status.",
                    "Conduct a voluntary, anonymous employee satisfaction survey and include the overall score in your report."
                ]
            },
            {
                "title": "Governance Policy & Verification",
                "tasks": [
                    "Verify you have a documented, board-approved policy for anti-corruption and bribery. Check when it was last updated.",
                    "Confirm the existence of a confidential whistleblower policy that ensures non-retaliation. Verify it is easily accessible to all employees.",
                    "Document the board of directors' structure, independence (percentage of independent directors), and specific oversight of ESG issues.",
                    "Ensure a code of business ethics is in place and that all employees have completed a signed acknowledgement of reading it within the last 12 months.",
                    "Review and document the company's data privacy and security policies. Note any data breaches and the response.",
                    "Create a matrix of which board members have expertise in ESG-related areas."
                ]
            },
            {
                "title": "Reporting & Stakeholder Engagement",
                "tasks": [
                    "Conduct a materiality assessment to identify your company's most significant ESG issues. (Pro-Tip: Survey key investors, customers, and employees).",
                    "Choose an ESG reporting framework to align with (e.g., GRI, SASB, TCFD). Map your collected data to the framework's requirements.",
                    "Draft the ESG report, ensuring all data is accurate, verifiable, and presented with context. Use charts and graphs to visualize trends.",
                    "Have the report reviewed by an internal committee (including legal and finance) and, for maximum credibility, a third-party assurance provider.",
                    "Plan how the report will be published and communicated to stakeholders. Create a summary presentation for the board and a press release.",
                    "Schedule a meeting with your top 3 investors to walk them through the report's findings."
                ]
            }
        ]
    },
    {
        id: 'iso_9001_audit_prep',
        title: "ISO 9001 Audit Checklist",
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
                    "Verify the latest version of the Quality Manual is distributed and an acknowledgement log is signed by key personnel.",
                    "Ensure all procedures and work instructions have a clear version number, revision date, and approval signature.",
                    "Check that a master document list exists, is up-to-date, and matches the documents in use.",
                    "Confirm that obsolete documents have been archived and removed from all points of use. Do a spot check in one department.",
                    "Audit a sample of 5 critical records to ensure they are legible, identifiable, and retrievable within 5 minutes.",
                    "Verify data backup and disaster recovery procedures for digital records have been tested this quarter. Get the test report."
                ]
            },
            {
                "title": "Management & Leadership",
                "tasks": [
                    "Confirm that the Quality Policy is displayed prominently and ask 3 random employees what it means to them in their job.",
                    "Review minutes from the last two management review meetings. Ensure all agenda items were covered and action items have owners and due dates.",
                    "Ensure that quality objectives are SMART (Specific, Measurable, Achievable, Relevant, Time-bound) and are being tracked on a dashboard.",
                    "Verify that organizational charts and job descriptions clearly define roles, responsibilities, and authorities related to quality.",
                    "Check for evidence of management's commitment to continual improvement (e.g., allocated budget, resources for quality projects).",
                    "Ensure customer feedback (complaints and compliments) is a standing agenda item in management reviews and that trends are analyzed."
                ]
            },
            {
                "title": "Product Realization & Service Delivery",
                "tasks": [
                    "Audit the process for reviewing and approving new customer orders. Ensure capacity and capability were confirmed before accepting.",
                    "Verify that design and development inputs, outputs, and reviews are documented and signed off by a cross-functional team.",
                    "Check purchasing process: ensure suppliers are evaluated based on defined criteria and a record of approved suppliers is maintained and used.",
                    "Trace a recent product/service from order to delivery, checking all conformity records (e.g., inspection reports, test certificates).",
                    "Verify that all monitoring and measuring devices (e.g., calipers, scales, sensors) have a valid, unexpired calibration sticker.",
                    "Ensure a clear process exists for identifying and segregating nonconforming products. Check the quarantine area for any untagged items."
                ]
            },
            {
                "title": "Measurement, Analysis, and Improvement",
                "tasks": [
                    "Verify a formal internal audit schedule is in place and that auditors are trained and independent of the area being audited.",
                    "Check that customer satisfaction is being monitored via multiple methods (surveys, feedback calls, review analysis).",
                    "Review the log for corrective and preventive actions (CAPA). Ensure root cause analysis was performed for the last 5 major issues, not just a quick fix.",
                    "Ensure CAPAs are being closed out in a timely manner and that their effectiveness is verified (i.e., the problem has not reoccurred).",
                    "Analyze quality data (e.g., defect rates, on-time delivery) to identify trends. Check for evidence of at least one improvement project initiated based on this data.",
                    "Confirm that internal audit results and improvement data are reported to top management as a mandatory input for management review."
                ]
            }
        ]
    },
    {
        id: 'eco_friendly_ops_playbook',
        title: "Sustainable Business Checklist",
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
                    "Conduct a waste audit: for one week, separate all trash into categories (paper, plastic, food, etc.) and weigh them to find your biggest source of waste.",
                    "Set up clearly labeled, color-coded recycling bins for paper, plastic, glass, and metals next to every trash can.",
                    "Implement a composting program for food scraps in the breakroom/cafeteria. Partner with a local composting service.",
                    "Switch to 100% recycled paper for printing and office use.",
                    "Set printer defaults to double-sided printing for all computers in the office.",
                    "Eliminate single-use plastics from the office: replace plastic water bottles with a water filter system, and disposable cutlery/plates with reusable ones.",
                    "Create a 'Green Challenge' for the month to see which department can reduce the most waste."
                ]
            },
            {
                "title": "Energy Conservation",
                "tasks": [
                    "Replace all remaining conventional light bulbs with energy-efficient LEDs.",
                    "Install motion sensors or timers for lights in low-traffic areas (restrooms, storage rooms, hallways).",
                    "Create a 'last one out' checklist posted at the exit to ensure all lights and non-essential electronics are turned off at night. Assign a daily 'energy champion'.",
                    "Perform regular maintenance on HVAC systems (cleaning filters, checking ducts) to ensure maximum efficiency.",
                    "Use smart power strips that cut off power to devices in standby mode. (Pro-Tip: Target workstations and entertainment/TV areas).",
                    "During sunny days, encourage opening blinds to use natural light instead of turning on overhead lights."
                ]
            },
            {
                "title": "Water Conservation",
                "tasks": [
                    "Install low-flow aerators on all faucets and low-flow toilets in all restrooms. This can reduce water use by 30-50%.",
                    "Regularly check for and repair any water leaks, no matter how small. A dripping faucet can waste thousands of gallons a year. Add 'leak check' to the janitorial checklist.",
                    "If applicable, use drought-resistant native plants for landscaping to reduce watering needs.",
                    "Use environmentally friendly, biodegradable cleaning products.",
                    "Post small, friendly reminders in restrooms and kitchens about conserving water."
                ]
            },
            {
                "title": "Sustainable Procurement & Employee Engagement",
                "tasks": [
                    "Develop a sustainable procurement policy that prioritizes local, eco-friendly, and fair-trade certified suppliers.",
                    "Purchase office supplies made from recycled materials. Choose reusable pens over disposable ones.",
                    "Choose vendors who use minimal and recyclable packaging. Make this a question you ask all new suppliers.",
                    "Encourage teleconferencing to reduce travel-related emissions. Track the number of flights avoided.",
                    "Offer incentives for employees who use public transport, carpool, or cycle to work (e.g., a monthly travel stipend, preferred parking).",
                    "Form a voluntary 'Green Team' of employees to champion sustainability initiatives and suggest new ideas."
                ]
            }
        ]
    },
    {
        id: 'cloud_kitchen_launchkit',
        title: "Cloud Kitchen Checklist",
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
                    "Complete all paperwork and FSSAI/local health department registration for Zomato, Swiggy, Uber Eats, etc.",
                    "Set up online menus on all platforms. Use high-quality, professional photos for every single item.",
                    "Engineer the menu for delivery: prioritize items that travel well. Create delivery-friendly combos with high-margin drinks. Remove items that get soggy.",
                    "Sync all aggregator platforms with a single order management dashboard (e.g., UrbanPiper, Petpooja) to avoid tablet chaos.",
                    "Run test orders on all platforms to ensure correct pricing, taxes, and item mapping. Check how the food looks upon arrival."
                ]
            },
            {
                title: "Packaging & Dispatch Station Setup",
                tasks: [
                    "Designate a specific area for packaging and dispatch, separate from the cooking line to prevent congestion.",
                    "Stock the station with all necessary packaging materials: leak-proof containers, branded bags, cutlery, tissues, and tamper-evident tape.",
                    "Create a visual checklist (with pictures) for each order: Main dish, side, drink, cutlery, condiments. Staff must physically tick off each item.",
                    "Install a screen or printer at the station to display order details clearly. The ticket should show the order number and platform.",
                    "Ensure packaging is designed to maintain food temperature and prevent spills. (Pro-Tip: Test by shaking a packed order for 10 seconds).",
                    "Include a small 'thank you' card in each order with a discount code for a future direct order."
                ]
            },
            {
                title: "Live Operations & Order Fulfillment (KOT to Handoff)",
                tasks: [
                    "Acknowledge incoming orders on the dashboard within 45 seconds. This heavily impacts your ranking on aggregator apps.",
                    "Fire orders to the correct kitchen station based on preparation time (Kitchen Order Ticket - KOT).",
                    "The 'expo' or final checker must double-check each packed item against the order ticket before sealing the bag with tamper-evident tape.",
                    "Attach the correct bill to the sealed package. The order number must be clearly visible.",
                    "Hand over the package to the correct delivery rider. Make them confirm the order number or OTP.",
                    "Mark the order as 'Ready for Pickup'. Monitor and manage rider wait times. Report any rude or delayed riders to the aggregator's support team."
                ]
            },
            {
                title: "End-of-Day Reconciliation & Analysis",
                tasks: [
                    "Reconcile orders between your POS and each aggregator's dashboard. Document any discrepancies.",
                    "Calculate total sales, discounts, and commissions for each platform. Track your profitability per platform.",
                    "Verify online payments received against the settlement reports from the aggregators.",
                    "Conduct a closing inventory count of key ingredients and all packaging materials.",
                    "Analyze the day's performance: What was the best-selling item? What was the average prep time? Use this data to plan for tomorrow."
                ]
            }
        ]
    },
    {
        id: 'international_travel_planner',
        title: "International Travel Checklist",
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
                    "Check passport validity. It must be valid for at least 6 months AFTER your scheduled return date. Renew if necessary.",
                    "Research and confirm visa requirements for your destination AND any transit countries. Use the official embassy websites.",
                    "Apply for any necessary visas, allowing ample processing time.",
                    "Book flights. Consider time zones to minimize jet lag. Set a flight price alert using Google Flights or Hopper.",
                    "Book accommodation. Check reviews for safety, cleanliness, and location. Save the address and phone number offline.",
                    "Scan and create a digital copy of your passport, visas, and IDs. Save to a secure cloud storage (Google Drive, Dropbox) and email to yourself and a trusted family member.",
                    "Take a digital passport-style photo and save it to your phone/cloud."
                ]
            },
            {
                "title": "Phase 2: Health & Finance (1-2 Months Out)",
                "tasks": [
                    "Consult a doctor or travel clinic for required/recommended vaccinations and medications (e.g., for malaria). Get a signed letter for any prescription drugs you are carrying.",
                    "Purchase comprehensive travel insurance. Read the policy to ensure it covers your destination and planned activities. Save the policy number and emergency contact info on your phone.",
                    "Notify your bank and credit card companies of your travel dates and destinations to avoid fraud alerts. Inquire about foreign transaction fees.",
                    "Order a small amount of foreign currency for immediate needs upon arrival (taxis, snacks).",
                    "Check your mobile phone's international roaming plan. (Pro-Tip: Consider an eSIM from a provider like Airalo for cheaper data).",
                    "Pay all important bills that will be due while you are away."
                ]
            },
            {
                "title": "Phase 3: Packing & Preparation (1 Week Out)",
                "tasks": [
                    "Check the 10-day weather forecast for your destination and plan your wardrobe. Use packing cubes to organize and save space.",
                    "Prepare a small medical kit (painkillers, band-aids, antiseptic wipes, motion sickness pills, personal medications).",
                    "Pack all electronics, chargers, and a universal travel adapter. A power bank is essential.",
                    "Download offline maps (Google Maps), translation apps, and your airline's app. Download shows/movies from Netflix/Prime for the flight.",
                    "Charge all electronic devices, including power banks, the night before you leave.",
                    "Weigh your luggage to ensure it meets airline restrictions. Leave some space for souvenirs.",
                    "Leave a copy of your itinerary and passport with a family member or friend at home."
                ]
            },
            {
                "title": "Phase 4: Final 24 Hours",
                "tasks": [
                    "Check-in for your flight online and save your mobile boarding pass. Take a screenshot of it.",
                    "Put all essential documents (passport, visa, tickets, insurance details, hotel confirmation) in your carry-on bag in a specific, easily accessible pocket.",
                    "Empty your refrigerator of perishable food.",
                    "Water your plants.",
                    "Inform your security system company (if applicable) of your absence.",
                    "Take out the trash.",
                    "Unplug unnecessary electronics to save power and prevent fire hazards.",
                    "Double check you have your wallet, passport, and phone. Then check again before you walk out the door."
                ]
            }
        ]
    },
    {
        id: 'pet_travel_planner',
        title: "Pet-Friendly Travel Checklist",
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
                    "Research and confirm the airline's specific pet policy (in-cabin vs. cargo, breed restrictions, carrier size and type). This is the most critical step.",
                    "Visit your vet to ensure all vaccinations are up-to-date. Get a signed health certificate dated within 10 days of travel.",
                    "Check destination country's import requirements (e.g., microchip, rabies titer test, quarantine). Start this process early as it can take months.",
                    "Purchase an IATA-compliant travel carrier. Acclimate your pet to it by feeding them meals inside and leaving it open in the house with treats.",
                    "Get a proper ID tag for your pet's collar with your mobile number and destination address. A GPS tracker (like Tractive or Fi) is highly recommended."
                ]
            },
            {
                "title": "Booking & Packing",
                "tasks": [
                    "Book your flight and your pet's spot on the same call. Confirm the pet reservation and get a confirmation code. Re-confirm 48 hours before the flight.",
                    "Book pet-friendly hotels or accommodations. Call the hotel directly to confirm their pet policy and any fees, even if it says 'pet-friendly' online.",
                    "Pack a 'go-bag' for your pet: food for a few days, collapsible bowls, leash, waste bags, a favorite toy, and any medications.",
                    "Include a document folder with your pet's health certificate, vaccination records, a recent photo, and microchip information.",
                    "Pack cleaning supplies like paper towels and pet-safe enzymatic cleaner (e.g., Nature's Miracle) for accidents."
                ]
            },
            {
                "title": "The Day Before Travel",
                "tasks": [
                    "Freeze a small bowl of water in the carrier's dish. It will melt slowly for them to drink without spilling.",
                    "Feed your pet a light meal 4-6 hours before the flight. Do not sedate your pet unless specifically advised by your vet, as it can be dangerous at altitude.",
                    "Line the carrier with an absorbent puppy pad.",
                    "Affix 'Live Animal' stickers, your contact information, and a photo of your pet clearly on the outside of the carrier.",
                    "Take your pet for a long walk or vigorous play session to burn off excess energy."
                ]
            },
            {
                "title": "Travel Day & Arrival",
                "tasks": [
                    "Arrive at the airport earlier than usual for pet check-in procedures.",
                    "Find a pet relief area at the airport for one last potty break before going through security.",
                    "Once you arrive at your destination, immediately offer your pet water and a short walk.",
                    "Stick to your pet's normal feeding and walking schedule as much as possible to reduce stress.",
                    "Inspect your hotel room for any potential hazards (e.g., cleaning chemicals, wires, items they could swallow) before letting your pet off-leash."
                ]
            }
        ]
    }
];

export type PremiumPack = typeof premiumPacks[0];

  

    

    








    


    

    

    


