

import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm } from "lucide-react";

export const premiumPacks = [
    {
        id: 'hospitality_excellence_suite',
        title: "Hotel & Resort Operations Checklist",
        priceUSD: 79.99,
        priceINR: 6499,
        category: "Hospitality",
        description: "For Hotel & Restaurant Managers. A one-time purchase for the complete daily, weekly, and monthly operational toolkit.",
        icon: <Building className="w-8 h-8 text-primary" />,
        mostPopular: true,
        sampleItems: [
            "Over 50+ Checklists for every department.",
            "Covers Housekeeping, F&B, Maintenance, Security & more.",
            "Daily, Weekly, and Monthly SOPs.",
            "Guest Experience & Safety Protocols."
        ],
        checklists: [
            {
                title: "🧹 Daily Room Cleaning Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Housekeeper",
                tasks: [
                    { description: "Knock and announce before entering" },
                    { description: "Check room occupancy status" },
                    { description: "Open curtains and windows for ventilation" },
                    { description: "Empty trash bins and replace liners" },
                    { description: "Dust all surfaces including tables, lamps, and shelves" },
                    { description: "Wipe mirrors and glass surfaces" },
                    { description: "Clean and sanitize bathroom (toilet, sink, shower, bathtub)" },
                    { description: "Replace used towels with fresh ones" },
                    { description: "Replenish toiletries (soap, shampoo, conditioner, etc.)" },
                    { description: "Vacuum carpet or mop floors" },
                    { description: "Check under bed and furniture for lost items" },
                    { description: "Replace bed linen and make the bed neatly" },
                    { description: "Check minibar and restock if required" },
                    { description: "Wipe remote controls, switches, and handles" },
                    { description: "Check lighting and report any issues" },
                    { description: "Ensure AC/heater is functioning" },
                    { description: "Place welcome amenities (water bottles, coffee, tea)" },
                    { description: "Final inspection before leaving the room" }
                ]
            },
            {
                title: "🛌 Turn-down Service Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Housekeeper",
                tasks: [
                    { description: "Knock and announce before entering" },
                    { description: "Close curtains and adjust lighting" },
                    { description: "Turn down bed linen neatly" },
                    { description: "Place slippers by bedside" },
                    { description: "Arrange bedside table with water and glass" },
                    { description: "Check and replenish toiletries if needed" },
                    { description: "Refresh towels if used" },
                    { description: "Empty trash bins" },
                    { description: "Check temperature settings" },
                    { description: "Leave turn-down amenity (chocolate, cookie, or note)" }
                ]
            },
            {
                title: "🧺 Laundry Operations Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Laundry Attendant",
                tasks: [
                    { description: "Collect laundry from guest rooms at scheduled times" },
                    { description: "Sort laundry by type (linen, towels, uniforms, guest clothing)" },
                    { description: "Check for stains and treat before washing" },
                    { description: "Load washing machines without overloading" },
                    { description: "Select proper wash cycle and detergent" },
                    { description: "Dry laundry as per fabric requirements" },
                    { description: "Iron uniforms and linen as needed" },
                    { description: "Fold and organize laundry" },
                    { description: "Return guest laundry within promised time" },
                    { description: "Record laundry movements in logbook" }
                ]
            },
            {
                title: "🧾 Linen Room Management Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Linen Keeper",
                tasks: [
                    { description: "Maintain record of linen issued and received" },
                    { description: "Sort linen by type and usage" },
                    { description: "Check for damaged or stained linen" },
                    { description: "Ensure shelves are clean and organized" },
                    { description: "Store clean linen separately from soiled linen" },
                    { description: "Label shelves clearly for easy access" },
                    { description: "Conduct daily count of linen stock" },
                    { description: "Report shortages to housekeeping supervisor" },
                    { description: "Maintain emergency reserve stock" }
                ]
            },
            {
                title: "🧼 Public Area Cleaning Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Public Area Attendant",
                tasks: [
                    { description: "Clean and mop lobby floors" },
                    { description: "Dust furniture and decorative items" },
                    { description: "Wipe mirrors and glass doors" },
                    { description: "Clean elevators and sanitize buttons" },
                    { description: "Empty trash bins and replace liners" },
                    { description: "Sanitize door handles and switches" },
                    { description: "Clean restrooms and restock supplies" },
                    { description: "Vacuum carpets and rugs" },
                    { description: "Check for cobwebs or dust in corners" },
                    { description: "Polish metal surfaces (railings, handles)" }
                ]
            },
            {
                title: "✨ Deep Cleaning Checklist",
                department: "Housekeeping",
                frequency: "Weekly",
                role: "Housekeeping Supervisor",
                tasks: [
                    { description: "Move furniture for full floor cleaning" },
                    { description: "Clean behind and under beds, sofas, and cabinets" },
                    { description: "Wash curtains and drapes" },
                    { description: "Shampoo carpets and rugs" },
                    { description: "Polish wooden furniture" },
                    { description: "Clean light fixtures and ceiling fans" },
                    { description: "Scrub bathroom tiles and grout" },
                    { description: "Disinfect high-touch areas thoroughly" },
                    { description: "Check for wall stains and clean/paint if needed" },
                    { description: "Air freshen all rooms after cleaning" }
                ]
            },
            {
                title: "🐜 Pest Control Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Maintenance Supervisor",
                tasks: [
                    { description: "Inspect rooms and public areas for signs of pests" },
                    { description: "Check kitchen and storage areas daily" },
                    { description: "Use approved pest control chemicals" },
                    { description: "Seal entry points (cracks, vents, gaps)" },
                    { description: "Empty garbage bins regularly" },
                    { description: "Clean food spills immediately" },
                    { description: "Log all pest control activities" },
                    { description: "Schedule monthly professional pest control" },
                    { description: "Keep records of chemicals used" },
                    { description: "Train staff to report sightings immediately" }
                ]
            },
            {
                title: "📦 Lost & Found Documentation Checklist",
                department: "Security",
                frequency: "As-Needed",
                role: "Security Officer",
                tasks: [
                    { description: "Log date, time, and location of found item" },
                    { description: "Describe the item in detail" },
                    { description: "Record name of finder" },
                    { description: "Store item securely in lost & found room" },
                    { description: "Tag item with reference number" },
                    { description: "Notify guest if identifiable" },
                    { description: "Obtain guest acknowledgment on return" },
                    { description: "Keep unclaimed items for policy duration (e.g., 90 days)" },
                    { description: "Dispose of unclaimed items as per policy" },
                    { description: "Maintain lost & found register" }
                ]
            },
            {
                title: "🛎️ Reception Daily Operations Checklist",
                department: "Front Office",
                frequency: "Daily",
                role: "Front Desk Agent",
                tasks: [
                    { description: "Open reception desk and switch on all equipment" },
                    { description: "Ensure front desk is clean and organized" },
                    { description: "Check reservation system for arrivals and departures" },
                    { description: "Prepare key cards and welcome kits for new arrivals" },
                    { description: "Answer phones and emails promptly" },
                    { description: "Update guest information in PMS (Property Management System)" },
                    { description: "Maintain guest logbook" },
                    { description: "Monitor lobby cleanliness and coordinate with housekeeping" },
                    { description: "Handle guest inquiries courteously" },
                    { description: "Prepare shift handover notes for next team" }
                ]
            },
            {
                title: "🔑 Guest Check-In Process Checklist",
                department: "Front Office",
                frequency: "As-Needed",
                role: "Front Desk Agent",
                tasks: [
                    { description: "Greet guest warmly upon arrival" },
                    { description: "Verify guest identity with ID proof" },
                    { description: "Confirm reservation details" },
                    { description: "Collect payment or block deposit if required" },
                    { description: "Issue key card and explain room location" },
                    { description: "Provide hotel information (breakfast timing, facilities)" },
                    { description: "Offer assistance with luggage" },
                    { description: "Update PMS with check-in details" },
                    { description: "Inform housekeeping of room occupancy" },
                    { description: "Log any special guest requests" }
                ]
            },
            {
                title: "💳 Guest Check-Out Process Checklist",
                department: "Front Office",
                frequency: "As-Needed",
                role: "Front Desk Agent",
                tasks: [
                    { description: "Greet guest and confirm room number" },
                    { description: "Check PMS for outstanding charges" },
                    { description: "Generate and review final bill with guest" },
                    { description: "Collect payment and issue receipt" },
                    { description: "Check room status with housekeeping before closing account" },
                    { description: "Ask for feedback on stay experience" },
                    { description: "Arrange luggage assistance or transport if needed" },
                    { description: "Deactivate key card" },
                    { description: "Update PMS with check-out details" },
                    { description: "Log departure in guest register" }
                ]
            },
            {
                title: "🗣️ Complaint Resolution Process Checklist",
                department: "Front Office",
                frequency: "As-Needed",
                role: "Duty Manager",
                tasks: [
                    { description: "Acknowledge guest complaint immediately" },
                    { description: "Listen carefully and note details" },
                    { description: "Apologize sincerely for inconvenience" },
                    { description: "Identify type of issue (housekeeping, F&B, maintenance)" },
                    { description: "Inform relevant department promptly" },
                    { description: "Follow up to ensure resolution" },
                    { description: "Update guest about progress" },
                    { description: "Offer goodwill gesture if needed" },
                    { description: "Log complaint and action taken in register" },
                    { description: "Report recurring complaints to management" }
                ]
            },
            {
                title: "🍽️ Restaurant Opening Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Restaurant Manager",
                tasks: [
                    { description: "Switch on lights, AC, and music system" },
                    { description: "Check cleanliness of dining area and furniture" },
                    { description: "Set tables with clean linen, cutlery, and glassware" },
                    { description: "Check reservation list and prepare table arrangements" },
                    { description: "Stock condiments and napkins" },
                    { description: "Ensure POS system is operational" },
                    { description: "Check restrooms near restaurant for cleanliness" },
                    { description: "Inspect buffet counters (if applicable)" },
                    { description: "Brief staff about menu specials and reservations" },
                    { description: "Conduct final walkthrough before opening doors" }
                ]
            },
            {
                title: "🔒 Restaurant Closing Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Restaurant Manager",
                tasks: [
                    { description: "Clear and reset tables" },
                    { description: "Turn off lights, AC, and music system" },
                    { description: "Clean and sanitize dining tables and chairs" },
                    { description: "Vacuum/mop floors" },
                    { description: "Dispose of garbage and replace liners" },
                    { description: "Store leftover food as per safety standards" },
                    { description: "Clean buffet counters and service areas" },
                    { description: "Check all equipment is switched off" },
                    { description: "Lock storage and liquor cabinets" },
                    { description: "Complete cash reconciliation at POS" }
                ]
            },
            {
                title: "🥘 Buffet Service Setup Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "F&B Supervisor",
                tasks: [
                    { description: "Check buffet counters and sneeze guards are clean" },
                    { description: "Arrange hot and cold stations" },
                    { description: "Label all food items with name cards" },
                    { description: "Place serving spoons and tongs at each dish" },
                    { description: "Stock plates, bowls, and cutlery" },
                    { description: "Check food warmers and chillers are functioning" },
                    { description: "Prepare beverage station" },
                    { description: "Refill condiments and accompaniments" },
                    { description: "Brief staff on replenishment plan" },
                    { description: "Conduct hygiene check of serving staff" }
                ]
            },
            {
                title: "🍸 Bar Opening Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Bartender",
                tasks: [
                    { description: "Clean and sanitize bar counter and stools" },
                    { description: "Check stock of liquor, beer, and wine" },
                    { description: "Replenish garnishes (lemons, olives, cherries)" },
                    { description: "Prepare cocktail syrups and mixers" },
                    { description: "Check glassware is clean and polished" },
                    { description: "Ensure ice machine is filled" },
                    { description: "Switch on POS system" },
                    { description: "Check music system and lighting" },
                    { description: "Arrange bar tools (shaker, strainer, jigger, etc.)" },
                    { description: "Brief bartenders on special promotions" }
                ]
            },
            {
                title: "🍾 Bar Closing Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Bartender",
                tasks: [
                    { description: "Dispose of used garnishes" },
                    { description: "Clean and sanitize bar counter and equipment" },
                    { description: "Wash and polish glassware" },
                    { description: "Check liquor stock and update inventory" },
                    { description: "Store open bottles with pour spouts covered" },
                    { description: "Switch off ice machine and clean trays" },
                    { description: "Dispose of trash and replace liners" },
                    { description: "Lock liquor cabinet" },
                    { description: "Switch off lights and POS system" },
                    { description: "Complete cash reconciliation" }
                ]
            },
            {
                title: "🏨 Room Service Delivery Checklist",
                department: "F&B",
                frequency: "As-Needed",
                role: "Room Service Waiter",
                tasks: [
                    { description: "Check order slip for accuracy" },
                    { description: "Ensure food is plated attractively" },
                    { description: "Pack condiments, cutlery, and napkins" },
                    { description: "Cover dishes with cloches or lids" },
                    { description: "Arrange items neatly on tray or trolley" },
                    { description: "Knock and announce before entering guest room" },
                    { description: "Set food as per guest preference" },
                    { description: "Confirm order satisfaction with guest" },
                    { description: "Clear tray/trolley after guest finishes" },
                    { description: "Log delivery details in register" }
                ]
            },
            {
                title: "🎉 Banquet Hall Preparation Checklist",
                department: "F&B",
                frequency: "As-Needed",
                role: "Banquet Manager",
                tasks: [
                    { description: "Check cleanliness of hall and stage" },
                    { description: "Arrange tables and chairs as per event plan" },
                    { description: "Set up AV equipment (mics, speakers, projectors)" },
                    { description: "Test lighting and air conditioning" },
                    { description: "Decorate as per client request" },
                    { description: "Set up buffet or dining service stations" },
                    { description: "Stock water bottles and glasses" },
                    { description: "Coordinate with event planner for final touches" },
                    { description: "Conduct staff briefing on event flow" },
                    { description: "Keep standby supplies ready (extra chairs, cutlery)" }
                ]
            },
            {
                title: "🔪 Kitchen Hygiene & Food Safety Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Head Chef",
                tasks: [
                    { description: "Ensure kitchen floors are clean and dry" },
                    { description: "Check personal hygiene of staff (uniform, gloves, caps)" },
                    { description: "Sanitize cutting boards and knives" },
                    { description: "Check refrigerator and freezer temperatures" },
                    { description: "Label and date all stored food" },
                    { description: "Discard expired or spoiled items" },
                    { description: "Clean cooking equipment (stoves, ovens, fryers)" },
                    { description: "Check pest control measures in place" },
                    { description: "Wash and sanitize utensils after each use" },
                    { description: "Log daily hygiene checks" }
                ]
            },
            {
                title: "📈 Inventory & Stock Check Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Store Keeper",
                tasks: [
                    { description: "Check stock levels of raw materials daily" },
                    { description: "Inspect perishable items for freshness" },
                    { description: "Record quantities in stock register" },
                    { description: "Check liquor and beverage stocks" },
                    { description: "Rotate stock using FIFO method" },
                    { description: "Highlight shortages to purchase department" },
                    { description: "Check cleaning supplies availability" },
                    { description: "Secure high-value items in locked storage" },
                    { description: "Conduct weekly reconciliation with purchase orders" },
                    { description: "Report discrepancies immediately" }
                ]
            },
            {
                title: "🛠️ Daily Maintenance Rounds Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Technician",
                tasks: [
                    { description: "Inspect all guest room corridors for damages" },
                    { description: "Check lobby lights, fans, and AC functioning" },
                    { description: "Inspect elevators for smooth operation" },
                    { description: "Check public restroom plumbing (taps, flush)" },
                    { description: "Inspect fire extinguishers and emergency exits" },
                    { description: "Monitor generator fuel levels" },
                    { description: "Check boiler pressure and temperature" },
                    { description: "Inspect signage lights and emergency lighting" },
                    { description: "Note down all maintenance complaints from departments" },
                    { description: "Log daily round completion in register" }
                ]
            },
            {
                title: "⚡ Electrical Systems Inspection Checklist",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Electrician",
                tasks: [
                    { description: "Check main electrical panel for abnormalities" },
                    { description: "Test backup generator functionality" },
                    { description: "Inspect UPS systems for charge levels" },
                    { description: "Check lighting in all public areas" },
                    { description: "Test outdoor lighting and signage" },
                    { description: "Inspect wiring for visible damage" },
                    { description: "Check guest room electrical sockets" },
                    { description: "Test kitchen equipment connections" },
                    { description: "Ensure proper earthing/grounding" },
                    { description: "Log findings in electrical maintenance register" }
                ]
            },
            {
                title: "💧 Plumbing & Water Systems Checklist",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Plumber",
                tasks: [
                    { description: "Inspect guest bathrooms for leaks" },
                    { description: "Check water pressure in guest rooms and public areas" },
                    { description: "Ensure hot water systems are working" },
                    { description: "Inspect water tanks for cleanliness" },
                    { description: "Check swimming pool water pipelines" },
                    { description: "Inspect kitchen sinks and drainage" },
                    { description: "Test fire hydrants and hoses" },
                    { description: "Check water treatment plant operation" },
                    { description: "Ensure no foul odor from drainage lines" },
                    { description: "Log any plumbing issues in register" }
                ]
            },
            {
                title: "💨 HVAC & AC Systems Checklist",
                department: "Maintenance",
                frequency: "Monthly",
                role: "HVAC Technician",
                tasks: [
                    { description: "Check AC filters for cleanliness" },
                    { description: "Inspect HVAC units for unusual noise" },
                    { description: "Check thermostat functioning in guest rooms" },
                    { description: "Inspect ducting for dust accumulation" },
                    { description: "Ensure central cooling systems are operational" },
                    { description: "Check refrigerant levels" },
                    { description: "Inspect outdoor condenser units" },
                    { description: "Test heating system (if applicable)" },
                    { description: "Log preventive maintenance tasks" },
                    { description: "Schedule servicing if due" }
                ]
            },
            {
                title: "↕️ Elevator & Escalator Safety Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Maintenance Supervisor",
                tasks: [
                    { description: "Check elevator car interior cleanliness" },
                    { description: "Test emergency alarm and intercom" },
                    { description: "Inspect door operation and sensors" },
                    { description: "Check floor indicators and buttons" },
                    { description: "Test emergency stop button" },
                    { description: "Inspect escalator handrails for damage" },
                    { description: "Check escalator step alignment" },
                    { description: "Test load capacity sensors" },
                    { description: "Lubricate elevator rails if required" },
                    { description: "Log maintenance report" }
                ]
            },
            {
                title: "🏊 Swimming Pool Maintenance Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Pool Technician",
                tasks: [
                    { description: "Check chlorine and pH levels of pool water" },
                    { description: "Backwash filter and record pressure" },
                    { description: "Inspect pumps and motors" },
                    { description: "Clean pool tiles and remove debris" },
                    { description: "Check ladders and railings for stability" },
                    { description: "Ensure lifebuoys and safety equipment are available" },
                    { description: "Inspect underwater lighting" },
                    { description: "Test water circulation system" },
                    { description: "Log pool water test results" },
                    { description: "Coordinate with housekeeping for deck cleaning" }
                ]
            },
            {
                title: "🌳 Landscaping & Outdoor Areas Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Gardener",
                tasks: [
                    { description: "Inspect lawns and trim grass" },
                    { description: "Check health of plants and trees" },
                    { description: "Water plants as per schedule" },
                    { description: "Check garden lighting systems" },
                    { description: "Inspect fountains and water features" },
                    { description: "Remove weeds and dead plants" },
                    { description: "Clean pathways and outdoor furniture" },
                    { description: "Apply fertilizer/pesticide if needed" },
                    { description: "Check irrigation system functioning" },
                    { description: "Log landscaping activities" }
                ]
            },
            {
                title: "📹 CCTV & Security Monitoring Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Security Officer",
                tasks: [
                    { description: "Check all CCTV cameras are operational" },
                    { description: "Verify recording system is functioning" },
                    { description: "Ensure storage backup is active" },
                    { description: "Inspect blind spots for coverage" },
                    { description: "Check camera angles and clarity" },
                    { description: "Test security alarm systems" },
                    { description: "Verify security guards are at posts" },
                    { description: "Log visitor entries and exits" },
                    { description: "Inspect access control systems" },
                    { description: "Update daily security logbook" }
                ]
            },
            {
                title: "🔥 Fire Safety Checklist",
                department: "Security",
                frequency: "Weekly",
                role: "Security Supervisor",
                tasks: [
                    { description: "Inspect fire extinguishers for pressure levels" },
                    { description: "Check smoke detectors and alarms" },
                    { description: "Ensure emergency exits are unobstructed" },
                    { description: "Test fire alarm system functionality" },
                    { description: "Inspect fire hydrants and hoses" },
                    { description: "Check sprinkler system operation" },
                    { description: "Verify emergency lighting is functional" },
                    { description: "Conduct evacuation drill (scheduled)" },
                    { description: "Check signage visibility" },
                    { description: "Log fire safety inspection details" }
                ]
            },
            {
                title: "🚗 Parking & Valet Operations Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Valet Supervisor",
                tasks: [
                    { description: "Check parking lot cleanliness and lighting" },
                    { description: "Verify valet staff uniforms and ID badges" },
                    { description: "Inspect ticketing/valet slips availability" },
                    { description: "Ensure CCTV coverage in parking area" },
                    { description: "Inspect signage for parking directions" },
                    { description: "Check vehicles for any prior damages" },
                    { description: "Record vehicle entry and exit times" },
                    { description: "Monitor guest waiting times" },
                    { description: "Ensure emergency access paths are clear" },
                    { description: "Log daily valet operations" }
                ]
            },
            {
                title: "⚠️ Emergency Preparedness Checklist",
                department: "Security",
                frequency: "Monthly",
                role: "Security Supervisor",
                tasks: [
                    { description: "Ensure first aid kits are fully stocked" },
                    { description: "Check availability of emergency contact list" },
                    { description: "Inspect stretchers and wheelchairs" },
                    { description: "Verify staff trained in CPR and first aid" },
                    { description: "Conduct random evacuation readiness check" },
                    { description: "Ensure generators are fueled and ready" },
                    { description: "Inspect safe assembly points" },
                    { description: "Check satellite phones/radios (if available)" },
                    { description: "Review disaster management SOP" },
                    { description: "Log daily emergency preparedness status" }
                ]
            },
            {
                title: "🌙 Night Security Patrol Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Security Officer",
                tasks: [
                    { description: "Inspect all entry and exit points" },
                    { description: "Check locks of storage and liquor cabinets" },
                    { description: "Patrol guest room corridors" },
                    { description: "Inspect staff-only areas" },
                    { description: "Check perimeter fencing and gates" },
                    { description: "Inspect outdoor areas and parking lot" },
                    { description: "Ensure fire exits are secured but not blocked" },
                    { description: "Note suspicious activity (if any)" },
                    { description: "Verify all lights are functioning" },
                    { description: "Update night patrol logbook" }
                ]
            },
            {
                title: "🧖‍♀️ Spa Daily Operations Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Spa Manager",
                tasks: [
                    { description: "Check cleanliness of treatment rooms" },
                    { description: "Inspect spa equipment and massage beds" },
                    { description: "Stock essential oils, towels, robes, and candles" },
                    { description: "Verify appointment schedule and guest bookings" },
                    { description: "Ensure music, fragrance, and lighting are set" },
                    { description: "Check staff uniforms, grooming, and hygiene" },
                    { description: "Inspect restroom and shower areas for cleanliness" },
                    { description: "Sanitize tools (stones, brushes, steamers) after each use" },
                    { description: "Review guest preferences and allergies before treatments" },
                    { description: "Log spa operations in daily register" }
                ]
            },
            {
                title: "🏋️ Gym & Fitness Center Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Gym Manager",
                tasks: [
                    { description: "Inspect all gym equipment for safety and wear" },
                    { description: "Wipe down and sanitize cardio and strength machines" },
                    { description: "Check mirrors, flooring, and mats for cleanliness" },
                    { description: "Stock towels, water bottles, and sanitizing wipes" },
                    { description: "Inspect air conditioning and ventilation systems" },
                    { description: "Verify music system and TVs are working" },
                    { description: "Ensure certified trainers are present and on duty" },
                    { description: "Check first aid kit availability and accessibility" },
                    { description: "Record guest usage and trainer assignments" },
                    { description: "Update equipment maintenance schedule" }
                ]
            },
            {
                title: "🎟️ Concierge Desk Checklist",
                department: "Front Office",
                frequency: "Daily",
                role: "Concierge",
                tasks: [
                    { description: "Review and update tour and transport schedules" },
                    { description: "Check availability of brochures, maps, and guides" },
                    { description: "Update details of local attractions and events" },
                    { description: "Verify ticketing and booking services are functional" },
                    { description: "Confirm guest bookings for restaurants and activities" },
                    { description: "Ensure concierge staff uniforms and grooming are proper" },
                    { description: "Maintain updated list of local emergency contacts" },
                    { description: "Track guest requests and follow-ups in system" },
                    { description: "Verify computers, phones, and internet are functional" },
                    { description: "Log daily concierge desk activities in register" }
                ]
            },
            {
                title: "👶 Kids Club / Play Area Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Kids Club Supervisor",
                tasks: [
                    { description: "Inspect play equipment and toys for safety" },
                    { description: "Clean and sanitize toys, books, and play mats" },
                    { description: "Stock art, craft, and activity supplies" },
                    { description: "Verify staff-to-child ratio compliance" },
                    { description: "Ensure CCTV monitoring is active in play area" },
                    { description: "Check restroom cleanliness and hygiene" },
                    { description: "Verify emergency contact details for each child" },
                    { description: "Stock and check kids-specific first aid kit" },
                    { description: "Plan daily activity and meal schedule" },
                    { description: "Log kids club attendance and incidents" }
                ]
            },
            {
                title: "⭐ Guest Feedback & Experience Checklist",
                department: "Management",
                frequency: "Daily",
                role: "Duty Manager",
                tasks: [
                    { description: "Collect and review guest feedback forms daily" },
                    { description: "Monitor online reviews (TripAdvisor, Google, OTA sites)" },
                    { description: "Log guest complaints and suggestions in system" },
                    { description: "Assign corrective actions to relevant departments" },
                    { description: "Track VIP guest preferences and requests" },
                    { description: "Update guest loyalty program records" },
                    { description: "Maintain detailed guest history in PMS" },
                    { description: "Acknowledge guest feedback with appreciation" },
                    { description: "Escalate unresolved complaints to management" },
                    { description: "Summarize guest experience in daily report" }
                ]
            },
            {
                title: "🧾 Night Audit Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Night Auditor",
                tasks: [
                    { description: "Reconcile all guest folios with POS systems" },
                    { description: "Verify room revenue matches occupancy" },
                    { description: "Match credit card transactions with batch settlement" },
                    { description: "Reconcile cash transactions and deposits" },
                    { description: "Verify discounts and complimentary items are authorized" },
                    { description: "Print and file financial reports" },
                    { description: "Update occupancy and revenue statistics" },
                    { description: "Review pending guest check-ins and check-outs" },
                    { description: "Close the day in PMS system" },
                    { description: "Submit audit summary to management" }
                ]
            },
            {
                title: "📦 Procurement Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Procurement Officer",
                tasks: [
                    { description: "Review purchase requisitions from all departments" },
                    { description: "Verify available stock before approving order" },
                    { description: "Check supplier list and approved vendors" },
                    { description: "Get quotations and compare pricing" },
                    { description: "Verify quality standards of incoming goods" },
                    { description: "Ensure purchase orders are properly authorized" },
                    { description: "Track pending deliveries and expected timelines" },
                    { description: "Update procurement records daily" },
                    { description: "Verify supplier compliance (licenses, certifications)" },
                    { description: "Submit procurement summary to accounts department" }
                ]
            },
            {
                title: "🛒 Vendor Management Checklist",
                department: "Finance",
                frequency: "Weekly",
                role: "Procurement Manager",
                tasks: [
                    { description: "Review contracts with current vendors" },
                    { description: "Verify vendor performance against SLAs" },
                    { description: "Check delivery punctuality and accuracy" },
                    { description: "Track vendor complaints or issues raised by staff" },
                    { description: "Verify pricing and any agreed discounts" },
                    { description: "Review vendor compliance with safety standards" },
                    { description: "Maintain updated contact and agreement records" },
                    { description: "Approve/reject new vendor applications" },
                    { description: "Conduct vendor evaluation quarterly" },
                    { description: "Update vendor rating logbook" }
                ]
            },
            {
                title: "📊 Payroll Processing Checklist",
                department: "Finance",
                frequency: "Monthly",
                role: "HR Manager",
                tasks: [
                    { description: "Verify staff attendance records from biometric or registers" },
                    { description: "Approve overtime and extra duty claims" },
                    { description: "Deduct advances, loans, and penalties where applicable" },
                    { description: "Calculate tips and service charge distribution" },
                    { description: "Apply statutory deductions (PF, ESI, TDS)" },
                    { description: "Verify payroll sheet against HR records" },
                    { description: "Generate payslips for all staff" },
                    { description: "Approve payroll disbursement by finance head" },
                    { description: "Ensure bank transfers are completed" },
                    { description: "File payroll reports securely" }
                ]
            },
            {
                title: "🗂️ Inventory Control Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Store Keeper",
                tasks: [
                    { description: "Review daily consumption reports from all outlets" },
                    { description: "Conduct spot checks of store inventory" },
                    { description: "Verify FIFO (First In, First Out) method used" },
                    { description: "Record stock movements in inventory software" },
                    { description: "Check for expired or damaged stock" },
                    { description: "Compare physical vs. system stock daily" },
                    { description: "Monitor liquor and cigarette inventory strictly" },
                    { description: "Approve store requisitions from departments" },
                    { description: "Conduct weekly reconciliation with purchase orders" },
                    { description: "Escalate discrepancies to management" }
                ]
            },
            {
                title: "🧮 Accounts Payable Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Accountant",
                tasks: [
                    { description: "Verify all supplier invoices against purchase orders" },
                    { description: "Match invoice quantities with goods received note (GRN)" },
                    { description: "Check approval from relevant department head" },
                    { description: "Verify applicable taxes on invoices" },
                    { description: "Record payable entries in accounting software" },
                    { description: "Approve payments as per credit terms" },
                    { description: "Ensure no duplicate invoices are paid" },
                    { description: "Update supplier ledger daily" },
                    { description: "Schedule vendor payments on due dates" },
                    { description: "File invoices for audit purposes" }
                ]
            },
            {
                title: "💵 Cash Handling Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Cashier",
                tasks: [
                    { description: "Verify opening cash float at each POS counter" },
                    { description: "Record all cash receipts with receipts issued" },
                    { description: "Track tips and petty cash usage separately" },
                    { description: "Deposit excess cash to cashier desk periodically" },
                    { description: "Verify no unauthorized staff handle cash" },
                    { description: "Count cash at end of shift with witness" },
                    { description: "Reconcile cash balance with POS reports" },
                    { description: "Deposit daily cash at hotel safe/bank" },
                    { description: "Record discrepancies immediately" },
                    { description: "Submit daily cash handling report" }
                ]
            },
            {
                title: "🌆 Rooftop / Terrace Restaurant Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Restaurant Manager",
                tasks: [
                    { description: "Check cleanliness of terrace flooring and furniture" },
                    { description: "Inspect lighting and decorative elements" },
                    { description: "Verify safety barriers/railings are secure" },
                    { description: "Test sound system and ambiance setup" },
                    { description: "Ensure tables are set with proper linen, cutlery, menus" },
                    { description: "Confirm terrace umbrellas/shades are in good condition" },
                    { description: "Inspect outdoor heaters or fans (if applicable)" },
                    { description: "Ensure fire extinguishers are accessible" },
                    { description: "Stock bar/beverage station with essentials" },
                    { description: "Check terrace restrooms (if separate)" }
                ]
            },
            {
                title: "🖥️ Business Center Checklist",
                department: "Front Office",
                frequency: "Daily",
                role: "Front Desk Agent",
                tasks: [
                    { description: "Ensure all computers are functioning with internet access" },
                    { description: "Check printers, scanners, and copiers for paper & ink" },
                    { description: "Verify working telephone lines and conference tools" },
                    { description: "Stock office supplies (pens, paper, staplers)" },
                    { description: "Clean and sanitize desks, chairs, and keyboards" },
                    { description: "Test Wi-Fi speed for guest use" },
                    { description: "Ensure signage with instructions is visible" },
                    { description: "Verify operating hours signage is displayed" },
                    { description: "Monitor guest bookings and usage log" },
                    { description: "Restock complimentary refreshments (water, coffee/tea)" }
                ]
            },
            {
                title: "🎤 Conference & Banquet Hall Checklist",
                department: "F&B",
                frequency: "As-Needed",
                role: "Banquet Manager",
                tasks: [
                    { description: "Inspect seating arrangement per booking requirements" },
                    { description: "Check sound system, microphone, and projectors" },
                    { description: "Verify lighting and air conditioning settings" },
                    { description: "Ensure stage and podium are clean and stable" },
                    { description: "Stock water bottles and notepads at tables" },
                    { description: "Inspect table skirting and linen for stains" },
                    { description: "Confirm fire exits are unobstructed" },
                    { description: "Test emergency backup generator" },
                    { description: "Coordinate with catering team for food setup" },
                    { description: "Review hall booking checklist with banquet manager" }
                ]
            },
            {
                title: "🏭 Laundry Plant Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Laundry Supervisor",
                tasks: [
                    { description: "Inspect washing machines and dryers for functionality" },
                    { description: "Verify detergent and cleaning supplies availability" },
                    { description: "Check pressing/ironing equipment" },
                    { description: "Monitor water temperature and quality for washing" },
                    { description: "Inspect cleanliness of laundry carts and bins" },
                    { description: "Ensure linen is separated (white, colored, staff uniforms)" },
                    { description: "Verify timely pickup and delivery schedules" },
                    { description: "Check staff protective gear (gloves, aprons)" },
                    { description: "Record machine maintenance schedule" },
                    { description: "Monitor rejected/damaged linen logs" }
                ]
            },
            {
                title: "🍴 Staff Canteen Checklist",
                department: "HR",
                frequency: "Daily",
                role: "Admin Manager",
                tasks: [
                    { description: "Check food quality and hygiene before service" },
                    { description: "Verify cleanliness of tables, trays, and cutlery" },
                    { description: "Monitor food temperature (hot/cold)" },
                    { description: "Ensure drinking water dispensers are clean and filled" },
                    { description: "Inspect waste disposal and dustbins" },
                    { description: "Confirm staff meal timings are displayed" },
                    { description: "Record meal counts daily" },
                    { description: "Verify staff washrooms attached are clean" },
                    { description: "Monitor stock of staples (rice, flour, oil, spices)" },
                    { description: "Conduct weekly feedback survey with staff" }
                ]
            },
            {
                title: "🎮 Kids Play Area / Kids Club Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Kids Club Supervisor",
                tasks: [
                    { description: "Inspect toys and play equipment for safety hazards" },
                    { description: "Ensure soft flooring/mats are clean" },
                    { description: "Verify no sharp or broken toys are present" },
                    { description: "Check child registration log before entry" },
                    { description: "Sanitize toys and play items daily" },
                    { description: "Monitor staff-child ratio for safety" },
                    { description: "Ensure CCTV coverage is active" },
                    { description: "Stock first-aid kit in kids club" },
                    { description: "Provide drinking water and safe snacks (if allowed)" },
                    { description: "Record daily attendance and incidents" }
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
        icon: <Building2 className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Preventive Maintenance Schedules",
            "Vendor & Contract Management",
            "Office Safety & Compliance Audits",
            "Admin & Workplace Services"
        ],
        checklists: [
            {
                title: "🏢 Daily Workplace Readiness",
                department: "Admin",
                frequency: "Daily",
                role: "Facility Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🔧 Weekly Maintenance & Safety Audit",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Facility Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📝 Monthly Vendor & Compliance Review",
                department: "Admin",
                frequency: "Monthly",
                role: "Facility Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🤝 Admin & Employee Services",
                department: "Admin",
                frequency: "As-Needed",
                role: "Admin Executive",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "🍳 Kitchen Opening Checklist (HACCP Focus)",
                department: "F&B",
                frequency: "Daily",
                role: "Head Chef",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📦 Food Receiving & Storage Protocol",
                department: "F&B",
                frequency: "Daily",
                role: "Store Keeper",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🌡️ Daily HACCP & Line Check",
                department: "F&B",
                frequency: "Daily",
                role: "Sous Chef",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🧽 Kitchen Closing & Cleaning Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Closing Chef",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
        icon: <TreePalm className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Daily Pool & Water Quality Checks",
            "Groundskeeping & Landscaping Schedule",
            "Spa Opening & Therapist Readiness",
            "Guest Activity & Equipment Safety"
        ],
        checklists: [
            {
                title: "🏊 Daily Pool & Recreational Area Safety",
                department: "Maintenance",
                frequency: "Daily",
                role: "Pool Technician",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🌳 Weekly Grounds & Landscaping Maintenance",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Gardener",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🧖‍♀️ Daily Spa Operations Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Spa Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🤸 Guest Activity Planning & Execution",
                department: "Front Office",
                frequency: "Daily",
                role: "Activity Coordinator",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "🔓 Daily Opening Procedure (Dual Control)",
                department: "Security",
                frequency: "Daily",
                role: "Store Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🔒 Daily Closing Procedure (Dual Control)",
                department: "Security",
                frequency: "Daily",
                role: "Store Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🛍️ Ongoing Security & Sales Floor Protocol",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🛡️ Weekly Security & Maintenance Audit",
                department: "Security",
                frequency: "Weekly",
                role: "Store Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "☀️ Daily Opening & Compliance Check",
                department: "Operations",
                frequency: "Daily",
                role: "Pharmacist",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💊 Prescription Filling & Verification (The 'Five Rights')",
                department: "Operations",
                frequency: "As-Needed",
                role: "Pharmacist",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📦 Inventory & Controlled Substances (Zero-Error Protocol)",
                department: "Inventory",
                frequency: "Daily",
                role: "Pharmacist",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🌙 Closing Procedures & Data Security",
                department: "Operations",
                frequency: "Daily",
                role: "Pharmacist",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            }
        ]
    },
    {
        id: 'hospital_administration_ops',
        title: "Hospital Administration Checklist",
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
                title: "📋 Patient Admission & Discharge",
                department: "Admissions",
                frequency: "As-Needed",
                role: "Admissions Officer",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🔪 Surgical Suite / Operating Theatre (OT) Readiness",
                department: "Surgery",
                frequency: "Daily",
                role: "OT Nurse",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🚑 Emergency Room (ER) Management",
                department: "Emergency",
                frequency: "Daily",
                role: "ER Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🦠 Infection Control & Compliance",
                department: "Compliance",
                frequency: "Daily",
                role: "Infection Control Nurse",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "☀️ Daily Opening & Patient Readiness",
                department: "Operations",
                frequency: "Daily",
                role: "Clinic Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "➡️ Patient Flow & Experience",
                department: "Front Office",
                frequency: "Daily",
                role: "Receptionist",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🧼 Clinical Safety & Sterilization",
                department: "Clinical",
                frequency: "Daily",
                role: "Nurse",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💵 Billing & Administration",
                department: "Finance",
                frequency: "Daily",
                role: "Billing Executive",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "🔬 Morning Setup & Calibration (Zero-Error Start)",
                department: "Operations",
                frequency: "Daily",
                role: "Lab Technician",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🩸 Sample Management & Processing (Patient Safety First)",
                department: "Operations",
                frequency: "As-Needed",
                role: "Lab Technician",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📈 Data, Reporting & Critical Value Communication",
                department: "Reporting",
                frequency: "Daily",
                role: "Senior Technician",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🗑️ End of Day & Biohazard Management",
                department: "Operations",
                frequency: "Daily",
                role: "Lab Supervisor",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "🌅 Daily Opening & Safety Inspection",
                department: "Operations",
                frequency: "Daily",
                role: "Gym Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🤝 Member Management & Customer Experience",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📅 Class & Staff Management",
                department: "Operations",
                frequency: "Daily",
                role: "Gym Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🌙 Closing Procedures & Security",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Staff",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "✨ Daily Opening & Hygiene Checklist",
                department: "Operations",
                frequency: "Daily",
                role: "Salon Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "😊 Client Experience & Service",
                department: "Customer Service",
                frequency: "Daily",
                role: "Stylist",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📦 Inventory & Retail Management",
                department: "Inventory",
                frequency: "Weekly",
                role: "Salon Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🌙 Closing & End-of-Day Tasks",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Staff",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "🏫 Daily Opening & Campus Security Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Security Supervisor",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: " classroomsafety Classroom & Common Area Safety",
                department: "Admin",
                frequency: "Daily",
                role: "Admin Officer",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "👋 Student Dismissal & Lost-and-Found Protocol",
                department: "Admin",
                frequency: "Daily",
                role: "Teacher",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🔥 Monthly Emergency Preparedness & Drills",
                department: "Security",
                frequency: "Monthly",
                role: "Principal",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "☀️ Morning Opening & Freshness Check",
                department: "Operations",
                frequency: "Daily",
                role: "Store Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🚚 Receiving & Cold Chain Integrity",
                department: "Inventory",
                frequency: "Daily",
                role: "Receiving Clerk",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🛒 During the Day: Floor Operations & Customer Service",
                department: "Operations",
                frequency: "Daily",
                role: "Floor Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💰 Closing & Financial Reconciliation",
                department: "Finance",
                frequency: "Daily",
                role: "Closing Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "✨ Daily Opening & Merchandising",
                department: "Sales",
                frequency: "Daily",
                role: "Store Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "👗 Fitting Room, Customer Service & Loss Prevention",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📦 New Stock & Inventory Management",
                department: "Inventory",
                frequency: "Weekly",
                role: "Store Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🌙 Closing & Daily Reporting",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Staff",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
        icon: <Phone className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Live Demo Unit & Security Checks",
            "Inventory & High-Value Stock Audit",
            "Sales Staff Product Training",
            "Trade-in & Exchange Process"
        ],
        checklists: [
            {
                title: "🔌 Daily Opening & Merchandising",
                department: "Sales",
                frequency: "Daily",
                role: "Store Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💡 Sales Floor & Customer Experience",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🔐 Inventory & High-Value Security Protocol",
                department: "Security",
                frequency: "Weekly",
                role: "Store Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🧠 Staff & Training Drills",
                department: "HR",
                frequency: "Weekly",
                role: "Store Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "📈 Outgoing Shift: End-of-Shift Duties",
                department: "Production",
                frequency: "Daily",
                role: "Shift Supervisor",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🤝 Joint Handover Meeting",
                department: "Production",
                frequency: "Daily",
                role: "Shift Supervisor",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "▶️ Incoming Shift: Start-up Procedures",
                department: "Production",
                frequency: "Daily",
                role: "Shift Supervisor",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🦺 Weekly Safety & Audit Drill",
                department: "Safety",
                frequency: "Weekly",
                role: "Safety Officer",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "✍️ Initial Client Inquiry & Booking",
                department: "Sales",
                frequency: "As-Needed",
                role: "Sales Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📋 Pre-Event Coordination (T-30 Days)",
                department: "Operations",
                frequency: "Monthly",
                role: "Event Coordinator",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🎉 Event Day Execution",
                department: "Operations",
                frequency: "As-Needed",
                role: "Venue Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💸 Post-Event Wrap-Up & Settlement",
                department: "Finance",
                frequency: "As-Needed",
                role: "Accounts Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "☀️ Daily Opening Safety Inspection",
                department: "Safety",
                frequency: "Daily",
                role: "Supervisor",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "👀 During-Session Operations & Supervision",
                department: "Operations",
                frequency: "Hourly",
                role: "Staff",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🧽 Closing & Deep Cleaning",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Staff",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: " drills Weekly Maintenance & Emergency Drills",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Supervisor",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "💃 Sangeet Ceremony Checklist",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💅 Mehndi Ceremony Checklist",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💒 Wedding Day: Baraat, Varmala & Mandap",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "👋 Post-Wedding: Reception & Vidaai",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "📜 Pre-Wedding & Nikah Ceremony",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🚗 Post-Nikah & Rukhsati",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🍽️ Walima (Groom's Reception) Planning",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🤝 General Vendor & Guest Management",
                department: "Admin",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "📋 Vehicle Check-In & Service Advising",
                department: "Customer Service",
                frequency: "As-Needed",
                role: "Service Advisor",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💰 Diagnosis, Quoting & Work Order",
                department: "Operations",
                frequency: "As-Needed",
                role: "Service Advisor",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🛠️ Repair & Quality Control",
                department: "Operations",
                frequency: "As-Needed",
                role: "Technician",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: " handover Vehicle Handover Experience",
                department: "Customer Service",
                frequency: "As-Needed",
                role: "Service Advisor",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "👮 Daily Opening & Security Protocol",
                department: "Security",
                frequency: "Daily",
                role: "Security Supervisor",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🧹 Ongoing Operations & Housekeeping",
                department: "Operations",
                frequency: "Hourly",
                role: "Duty Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🌙 Daily Closing Protocol",
                department: "Security",
                frequency: "Daily",
                role: "Closing Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🤝 Weekly Maintenance & Tenant Relations",
                department: "Admin",
                frequency: "Weekly",
                role: "Mall Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "☀️ Pre-Shift & Team Huddle Checklist (15 mins)",
                department: "Operations",
                frequency: "Daily",
                role: "Team Lead",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🎧 Live Operations & Quality Assurance (QA)",
                department: "QA",
                frequency: "Daily",
                role: "QA Analyst",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📈 Agent Performance & Coaching",
                department: "Operations",
                frequency: "Weekly",
                role: "Team Lead",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🌙 End-of-Shift & Reporting",
                department: "Operations",
                frequency: "Daily",
                role: "Team Lead",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: " lifeguard Pre-Opening Safety Inspection",
                department: "Safety",
                frequency: "Daily",
                role: "Head Lifeguard",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🌊 Ongoing Operational Safety",
                department: "Operations",
                frequency: "Hourly",
                role: "Lifeguard Supervisor",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🌙 Closing Procedures",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🔧 Weekly & Monthly Checks",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Facility Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "👋 Pre-Guest Arrival / New Tenant Move-In",
                department: "Operations",
                frequency: "As-Needed",
                role: "Host",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🚪 Guest Check-Out / Tenant Move-Out",
                department: "Operations",
                frequency: "As-Needed",                
                role: "Host",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🛠️ Routine Maintenance & Compliance",
                department: "Maintenance",
                frequency: "Monthly",
                role: "Host",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💬 Guest Communication & Experience",
                department: "Customer Service",
                frequency: "Daily",
                role: "Host",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: " showroom Morning Showroom & Lot Preparation",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🤝 Sales & Customer Interaction Process",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🔑 Vehicle Handover & Delivery Experience",
                department: "Customer Service",
                frequency: "As-Needed",
                role: "Sales Associate",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📊 End of Day & Reporting",
                department: "Operations",
                frequency: "Daily",
                role: "Sales Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "🚀 Product Launch Event Planning",
                department: "Marketing",
                frequency: "As-Needed",
                role: "Event Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🧑‍💼 New Employee Onboarding (First Week)",
                department: "HR",
                frequency: "As-Needed",
                role: "HR Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: " boardroom Annual General Meeting (AGM) Preparation",
                department: "Admin",
                frequency: "Annually",
                role: "Corporate Secretary",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🎪 Trade Show & Conference Participation",
                department: "Marketing",
                frequency: "As-Needed",
                role: "Marketing Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "🌍 Environmental Data Gathering",
                department: "Compliance",
                frequency: "Quarterly",
                role: "ESG Officer",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🧑‍🤝‍🧑 Social Metrics Data Gathering",
                department: "HR",
                frequency: "Quarterly",
                role: "HR Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "⚖️ Governance Policy & Verification",
                department: "Legal",
                frequency: "Annually",
                role: "General Counsel",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📢 Reporting & Stakeholder Engagement",
                department: "Investor Relations",
                frequency: "Annually",
                role: "IR Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "📂 Document Control & Records",
                department: "QA",
                frequency: "Monthly",
                role: "Document Controller",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "👑 Management & Leadership",
                department: "Management",
                frequency: "Quarterly",
                role: "Quality Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📦 Product Realization & Service Delivery",
                department: "Operations",
                frequency: "Weekly",
                role: "Operations Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "✅ Measurement, Analysis, and Improvement",
                department: "QA",
                frequency: "Monthly",
                role: "Quality Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "🗑️ Waste Management & Reduction",
                department: "Admin",
                frequency: "Monthly",
                role: "Facility Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💡 Energy Conservation",
                department: "Admin",
                frequency: "Monthly",
                role: "Facility Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💧 Water Conservation",
                department: "Admin",
                frequency: "Monthly",
                role: "Facility Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💚 Sustainable Procurement & Employee Engagement",
                department: "HR",
                frequency: "Quarterly",
                role: "HR Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "🔄 Aggregator Setup & Menu Engineering",
                department: "Sales",
                frequency: "As-Needed",
                role: "Kitchen Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🥡 Packaging & Dispatch Station Setup",
                department: "Operations",
                frequency: "Daily",
                role: "Kitchen Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🔥 Live Operations & Order Fulfillment (KOT to Handoff)",
                department: "Operations",
                frequency: "Daily",
                role: "Expo",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "💰 End-of-Day Reconciliation & Analysis",
                department: "Finance",
                frequency: "Daily",
                role: "Kitchen Manager",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "🛂 Phase 1: Pre-Booking & Documentation (2-6 Months Out)",
                department: "Planning",
                frequency: "One-Time",
                role: "Traveler",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🩺 Phase 2: Health & Finance (1-2 Months Out)",
                department: "Planning",
                frequency: "One-Time",
                role: "Traveler",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🧳 Phase 3: Packing & Preparation (1 Week Out)",
                department: "Packing",
                frequency: "One-Time",
                role: "Traveler",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "✈️ Phase 4: Final 24 Hours",
                department: "Final Checks",
                frequency: "One-Time",
                role: "Traveler",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
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
                title: "🐾 Veterinary & Airline Prep (1-3 Months Out)",
                department: "Planning",
                frequency: "One-Time",
                role: "Pet Owner",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🏨 Booking & Packing",
                department: "Planning",
                frequency: "One-Time",
                role: "Pet Owner",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "📝 The Day Before Travel",
                department: "Preparation",
                frequency: "One-Time",
                role: "Pet Owner",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            },
            {
                title: "🚗 Travel Day & Arrival",
                department: "Travel",
                frequency: "One-Time",
                role: "Pet Owner",
                tasks: [ { description: "Task 1" }, { description: "Task 2" } ]
            }
        ]
    }
];

export type PremiumPack = (typeof premiumPacks)[0];
export type Checklist = PremiumPack['checklists'][0];

  

    

    








    


    

    

    






    

    





    
