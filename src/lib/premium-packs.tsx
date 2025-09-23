
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain } from "lucide-react";

export const premiumPacks = [
    {
        id: 'hospitality_excellence_suite',
        title: "Hotel & Resort Operations Checklist",
        priceUSD: 99.99,
        priceINR: 7999,
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
                summary: "Ensures every guest room meets the highest standards of cleanliness and comfort, covering everything from dusting and sanitizing to linen changes and amenity replenishment.",
                tasks: [
                    { id: 'HK-DRC-001', description: "Knock and announce 'Housekeeping' before entering", priority: 'High', riskLevel: 'Medium', proof: 'Log Entry', location: 'Guest Room' },
                    { id: 'HK-DRC-002', description: "Check room occupancy status in PMS", priority: 'Medium', riskLevel: 'Low', proof: 'System Check', location: 'Guest Room' },
                    { id: 'HK-DRC-003', description: "Open curtains and windows for ventilation", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-DRC-004', description: "Empty trash bins and replace liners", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-DRC-005', description: "Dust all surfaces including tables, lamps, and shelves", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-DRC-006', description: "Wipe mirrors and glass surfaces until streak-free", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-DRC-007', description: "Clean and sanitize bathroom (toilet, sink, shower, bathtub)", priority: 'High', riskLevel: 'High', proof: 'ATP Test/Log', location: 'Bathroom' },
                    { id: 'HK-DRC-008', description: "Replace used towels with fresh ones", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Bathroom' },
                    { id: 'HK-DRC-009', description: "Replenish toiletries (soap, shampoo, conditioner, etc.)", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Bathroom' },
                    { id: 'HK-DRC-010', description: "Vacuum carpet or mop floors", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-DRC-011', description: "Check under bed and furniture for lost items or dust", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-DRC-012', description: "Replace bed linen and make the bed neatly as per hotel standard", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Guest Room' },
                    { id: 'HK-DRC-013', description: "Check minibar consumption and restock if required", priority: 'Medium', riskLevel: 'Low', proof: 'Log Entry', location: 'Minibar' },
                    { id: 'HK-DRC-014', description: "Wipe and sanitize remote controls, switches, and handles", priority: 'High', riskLevel: 'High', proof: 'Log Entry', location: 'Guest Room' },
                    { id: 'HK-DRC-015', description: "Check all lighting and report any non-functional bulbs", priority: 'Medium', riskLevel: 'Low', proof: 'Maintenance Log', location: 'Guest Room' },
                    { id: 'HK-DRC-016', description: "Ensure AC/heater is functioning correctly", priority: 'Medium', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Guest Room' },
                    { id: 'HK-DRC-017', description: "Place welcome amenities (water bottles, coffee, tea)", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-DRC-018', description: "Perform final inspection of the room before leaving", priority: 'High', riskLevel: 'Medium', proof: 'Supervisor Sign-off', location: 'Guest Room' }
                ]
            },
            {
                title: "🛌 Turn-down Service Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Housekeeper",
                summary: "Provides a touch of luxury and prepares the guest room for a restful evening, including adjusting lighting, turning down the bed, and refreshing amenities.",
                tasks: [
                    { id: 'HK-TDS-001', description: "Knock and announce 'Housekeeping' before entering", priority: 'High', riskLevel: 'Medium', proof: 'Log Entry', location: 'Guest Room' },
                    { id: 'HK-TDS-002', description: "Close curtains and adjust lighting to a relaxing ambiance", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-TDS-003', description: "Turn down bed linen neatly on one side", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-TDS-004', description: "Place slippers by the bedside", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-TDS-005', description: "Arrange bedside table with a bottle of water and a glass", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-TDS-006', description: "Check and replenish toiletries if needed", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Bathroom' },
                    { id: 'HK-TDS-007', description: "Refresh used towels", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Bathroom' },
                    { id: 'HK-TDS-008', description: "Empty trash bins", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-TDS-009', description: "Check and set room temperature to a comfortable level", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-TDS-010', description: "Leave a turn-down amenity (e.g., chocolate, cookie, or note)", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' }
                ]
            },
            {
                title: "🧺 Laundry Operations Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Laundry Attendant",
                summary: "Manages the entire laundry workflow from collection to delivery, ensuring hygiene, quality, and timely service for both hotel linen and guest clothing.",
                tasks: [
                    { id: 'HK-LO-001', description: "Collect laundry from guest rooms and service points at scheduled times", priority: 'High', riskLevel: 'Medium', proof: 'Collection Log', location: 'Laundry Dept' },
                    { id: 'HK-LO-002', description: "Sort laundry by type (linen, towels, uniforms, guest clothing) and color", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Laundry Dept' },
                    { id: 'HK-LO-003', description: "Check for and treat stains before washing", priority: 'High', riskLevel: 'Medium', proof: 'Log Entry', location: 'Laundry Dept' },
                    { id: 'HK-LO-004', description: "Load washing machines without overloading, as per machine capacity", priority: 'Medium', riskLevel: 'Low', proof: 'Log Entry', location: 'Laundry Dept' },
                    { id: 'HK-LO-005', description: "Select proper wash cycle, temperature, and detergent for each load", priority: 'High', riskLevel: 'Medium', proof: 'Log Entry', location: 'Laundry Dept' },
                    { id: 'HK-LO-006', description: "Dry laundry as per fabric requirements to avoid damage", priority: 'Medium', riskLevel: 'Medium', proof: 'Log Entry', location: 'Laundry Dept' },
                    { id: 'HK-LO-007', description: "Iron uniforms and linen using appropriate temperature settings", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Laundry Dept' },
                    { id: 'HK-LO-008', description: "Fold and organize clean laundry neatly", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Laundry Dept' },
                    { id: 'HK-LO-009', description: "Return guest laundry within the promised timeframe", priority: 'High', riskLevel: 'High', proof: 'Delivery Log', location: 'Guest Room' },
                    { id: 'HK-LO-010', description: "Record all laundry movements in the daily logbook", priority: 'Medium', riskLevel: 'Low', proof: 'Logbook Entry', location: 'Laundry Dept' }
                ]
            },
            {
                title: "🧾 Linen Room Management Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Linen Keeper",
                summary: "Focuses on inventory control for one of the hotel's biggest assets. This checklist ensures accurate tracking, proper storage, and quality control of all linen.",
                tasks: [
                    { id: 'HK-LRM-001', description: "Maintain an accurate record of all linen issued and received", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Log', location: 'Linen Room' },
                    { id: 'HK-LRM-002', description: "Sort and store clean linen by type and size", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Linen Room' },
                    { id: 'HK-LRM-003', description: "Inspect returned linen for damages or stubborn stains; segregate for repair or discard", priority: 'High', riskLevel: 'Medium', proof: 'Damage Log', location: 'Linen Room' },
                    { id: 'HK-LRM-004', description: "Ensure all shelves and storage areas are clean, dry, and organized", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Linen Room' },
                    { id: 'HK-LRM-005', description: "Maintain a clear separation between clean and soiled linen storage", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Linen Room' },
                    { id: 'HK-LRM-006', description: "Ensure shelves are clearly labeled for easy identification and access", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Linen Room' },
                    { id: 'HK-LRM-007', description: "Conduct a daily count of key linen items (e.g., bedsheets, towels)", priority: 'Medium', riskLevel: 'Medium', proof: 'Count Sheet', location: 'Linen Room' },
                    { id: 'HK-LRM-008', description: "Report any shortages or low stock levels to the housekeeping supervisor", priority: 'High', riskLevel: 'Medium', proof: 'Email/Report', location: 'Linen Room' },
                    { id: 'HK-LRM-009', description: "Maintain an emergency reserve stock of linen for unexpected high occupancy", priority: 'Medium', riskLevel: 'Medium', proof: 'Inventory Log', location: 'Linen Room' }
                ]
            },
            {
                title: "🧼 Public Area Cleaning Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Public Area Attendant",
                summary: "Maintains the all-important first impression of the hotel. This covers the regular cleaning and sanitization of lobbies, elevators, restrooms, and other common areas.",
                tasks: [
                    { id: 'HK-PAC-001', description: "Clean, sweep, and mop lobby floors", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Lobby' },
                    { id: 'HK-PAC-002', description: "Dust all furniture, fixtures, and decorative items in public areas", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Public Areas' },
                    { id: 'HK-PAC-003', description: "Wipe and polish mirrors, glass doors, and windows", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Public Areas' },
                    { id: 'HK-PAC-004', description: "Clean and sanitize elevators, including buttons and handrails", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Elevators' },
                    { id: 'HK-PAC-005', description: "Empty all trash bins and replace liners in public areas", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Public Areas' },
                    { id: 'HK-PAC-006', description: "Sanitize high-touch surfaces like door handles, switches, and reception counters", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Public Areas' },
                    { id: 'HK-PAC-007', description: "Clean and restock all public restrooms with supplies (soap, paper towels, toilet paper)", priority: 'High', riskLevel: 'High', proof: 'Restroom Log', location: 'Public Restrooms' },
                    { id: 'HK-PAC-008', description: "Vacuum carpets, rugs, and mats", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Public Areas' },
                    { id: 'HK-PAC-009', description: "Check for and remove cobwebs or dust from corners and ceilings", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Public Areas' },
                    { id: 'HK-PAC-010', description: "Polish all metal surfaces (railings, handles, signage)", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Public Areas' }
                ]
            },
            {
                title: "✨ Deep Cleaning Checklist",
                department: "Housekeeping",
                frequency: "Weekly",
                role: "Housekeeping Supervisor",
                summary: "Goes beyond daily cleaning to tackle areas that need periodic, intensive attention, such as shampooing carpets, washing curtains, and descaling bathrooms.",
                tasks: [
                    { id: 'HK-DC-001', description: "Move furniture for full floor cleaning and vacuuming", priority: 'Medium', riskLevel: 'Low', proof: 'Photo', location: 'Guest Room' },
                    { id: 'HK-DC-002', description: "Clean behind and under beds, sofas, and cabinets", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Guest Room' },
                    { id: 'HK-DC-003', description: "Wash or dry-clean curtains and drapes as per schedule", priority: 'Medium', riskLevel: 'Low', proof: 'Cleaning Log', location: 'Guest Room' },
                    { id: 'HK-DC-004', description: "Shampoo carpets and rugs in high-traffic areas", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Guest Room' },
                    { id: 'HK-DC-005', description: "Polish all wooden furniture and fixtures", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-DC-006', description: "Clean light fixtures, ceiling fans, and AC vents", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' },
                    { id: 'HK-DC-007', description: "Scrub and descale bathroom tiles and grout", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Bathroom' },
                    { id: 'HK-DC-008', description: "Disinfect all high-touch areas thoroughly (telephones, remotes, etc.)", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Guest Room' },
                    { id: 'HK-DC-009', description: "Check for wall stains and schedule touch-up painting if needed", priority: 'Medium', riskLevel: 'Low', proof: 'Maintenance Log', location: 'Guest Room' },
                    { id: 'HK-DC-010', description: "Air out and freshen all rooms after deep cleaning", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' }
                ]
            },
            {
                title: "🐜 Pest Control Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Maintenance Supervisor",
                summary: "A proactive approach to prevent and manage pest infestations, focusing on regular inspections, sealing entry points, and safe chemical use in all hotel areas.",
                tasks: [
                    { id: 'MT-PC-001', description: "Inspect rooms and public areas for any signs of pests (droppings, webs, etc.)", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Areas' },
                    { id: 'MT-PC-002', description: "Check kitchen, pantries, and storage areas daily for pest activity", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'F&B Areas' },
                    { id: 'MT-PC-003', description: "Use approved, non-toxic pest control chemicals where necessary", priority: 'Medium', riskLevel: 'Medium', proof: 'Chemical Log', location: 'All Areas' },
                    { id: 'MT-PC-004', description: "Identify and seal potential entry points (cracks, vents, gaps in doors)", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'All Areas' },
                    { id: 'MT-PC-005', description: "Ensure garbage bins are covered and emptied regularly", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'All Areas' },
                    { id: 'MT-PC-006', description: "Ensure all food spills are cleaned up immediately", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'F&B Areas' },
                    { id: 'MT-PC-007', description: "Log all pest control activities, including location and type of pest found", priority: 'Medium', riskLevel: 'Low', proof: 'Pest Control Log', location: 'All Areas' },
                    { id: 'MT-PC-008', description: "Schedule and supervise monthly professional pest control service", priority: 'High', riskLevel: 'High', proof: 'Service Report', location: 'All Areas' },
                    { id: 'MT-PC-009', description: "Maintain records of all chemicals used by professionals", priority: 'Medium', riskLevel: 'Low', proof: 'MSDS Sheets', location: 'Maintenance' },
                    { id: 'MT-PC-010', description: "Train staff on how to report pest sightings immediately", priority: 'Medium', riskLevel: 'Low', proof: 'Training Log', location: 'All Departments' }
                ]
            },
            {
                title: "📦 Lost & Found Documentation Checklist",
                department: "Security",
                frequency: "As-Needed",
                role: "Security Officer",
                summary: "Provides a standardized, secure process for handling guest property, from logging and storage to returning items, ensuring guest trust and minimizing liability.",
                tasks: [
                    { id: 'SEC-LF-001', description: "Log the date, time, and exact location where the item was found", priority: 'High', riskLevel: 'Medium', proof: 'Logbook Entry', location: 'Security Office' },
                    { id: 'SEC-LF-002', description: "Describe the found item in detail, including brand, color, and any unique marks", priority: 'High', riskLevel: 'Medium', proof: 'Logbook Entry', location: 'Security Office' },
                    { id: 'SEC-LF-003', description: "Record the name and department of the person who found the item", priority: 'Medium', riskLevel: 'Low', proof: 'Logbook Entry', location: 'Security Office' },
                    { id: 'SEC-LF-004', description: "Store the item securely in a locked lost & found room or cabinet", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Security Office' },
                    { id: 'SEC-LF-005', description: "Tag the item with a unique reference number corresponding to the log entry", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Security Office' },
                    { id: 'SEC-LF-006', description: "Attempt to identify and notify the guest if possible (e.g., item found in a recently checked-out room)", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Security Office' },
                    { id: 'SEC-LF-007', description: "Obtain the guest's signature and ID proof upon returning the item", priority: 'High', riskLevel: 'High', proof: 'Signed Form', location: 'Security Office' },
                    { id: 'SEC-LF-008', description: "Keep unclaimed items for the duration specified in the hotel policy (e.g., 90 days)", priority: 'Medium', riskLevel: 'Low', proof: 'Date Mark', location: 'Security Office' },
                    { id: 'SEC-LF-009', description: "Dispose of or donate unclaimed items as per the hotel policy, with a witness present", priority: 'Medium', riskLevel: 'Low', proof: 'Disposal Log', location: 'Security Office' },
                    { id: 'SEC-LF-010', description: "Maintain and regularly audit the lost & found register", priority: 'Medium', riskLevel: 'Medium', proof: 'Audit Report', location: 'Security Office' }
                ]
            },
            {
                title: "🛎️ Reception Daily Operations Checklist",
                department: "Front Office",
                frequency: "Daily",
                role: "Front Desk Agent",
                summary: "The command center of the hotel. This checklist ensures the front desk operates smoothly, from managing reservations and guest inquiries to handling communications and shift handovers.",
                tasks: [
                    { id: 'FO-DO-001', description: "Open reception desk and switch on all equipment (computers, printers, POS)", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Front Desk' },
                    { id: 'FO-DO-002', description: "Ensure front desk and lobby area are clean, organized, and presentable", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Front Desk' },
                    { id: 'FO-DO-003', description: "Check reservation system (PMS) for arrivals, departures, and special requests", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Front Desk' },
                    { id: 'FO-DO-004', description: "Prepare key cards, registration forms, and welcome kits for expected arrivals", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Front Desk' },
                    { id: 'FO-DO-005', description: "Answer phone calls and emails promptly and professionally", priority: 'High', riskLevel: 'Medium', proof: 'Call/Email Log', location: 'Front Desk' },
                    { id: 'FO-DO-006', description: "Update guest information and profiles accurately in the PMS", priority: 'High', riskLevel: 'Medium', proof: 'System Check', location: 'Front Desk' },
                    { id: 'FO-DO-007', description: "Maintain the guest logbook and C-Forms for foreign nationals", priority: 'High', riskLevel: 'High', proof: 'Logbook Review', location: 'Front Desk' },
                    { id: 'FO-DO-008', description: "Monitor lobby cleanliness and coordinate with housekeeping as needed", priority: 'Medium', riskLevel: 'Low', proof: 'Communication Log', location: 'Front Desk' },
                    { id: 'FO-DO-009', description: "Handle all guest inquiries, requests, and complaints courteously and efficiently", priority: 'High', riskLevel: 'High', proof: 'Guest Feedback', location: 'Front Desk' },
                    { id: 'FO-DO-010', description: "Prepare detailed shift handover notes for the next team, highlighting any pending issues", priority: 'High', riskLevel: 'Medium', proof: 'Handover Log', location: 'Front Desk' }
                ]
            },
            {
                title: "🔑 Guest Check-In Process Checklist",
                department: "Front Office",
                frequency: "As-Needed",
                role: "Front Desk Agent",
                summary: "A step-by-step guide to create a welcoming and efficient check-in experience, covering identity verification, payment, key issuance, and providing essential information.",
                tasks: [
                    { id: 'FO-CI-001', description: "Greet the guest warmly upon arrival with a smile", priority: 'High', riskLevel: 'Medium', proof: 'CCTV Review', location: 'Front Desk' },
                    { id: 'FO-CI-002', description: "Verify the guest's identity with a valid government-issued ID proof", priority: 'High', riskLevel: 'High', proof: 'ID Copy', location: 'Front Desk' },
                    { id: 'FO-CI-003', description: "Confirm reservation details (name, room type, length of stay)", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Front Desk' },
                    { id: 'FO-CI-004', description: "Collect advance payment or pre-authorize a credit card for the stay and incidentals", priority: 'High', riskLevel: 'High', proof: 'Payment Receipt', location: 'Front Desk' },
                    { id: 'FO-CI-005', description: "Issue the room key card and clearly explain the room number and location", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Front Desk' },
                    { id: 'FO-CI-006', description: "Provide essential hotel information (e.g., breakfast timings, Wi-Fi password, facilities)", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Front Desk' },
                    { id: 'FO-CI-007', description: "Offer assistance with luggage (bell desk coordination)", priority: 'Medium', riskLevel: 'Low', proof: 'Communication Log', location: 'Front Desk' },
                    { id: 'FO-CI-008', description: "Update the PMS with the guest's check-in details immediately", priority: 'High', riskLevel: 'Medium', proof: 'System Check', location: 'Front Desk' },
                    { id: 'FO-CI-009', description: "Inform housekeeping of the new room occupancy status", priority: 'Medium', riskLevel: 'Low', proof: 'Communication Log', location: 'Front Desk' },
                    { id: 'FO-CI-010', description: "Accurately log any special guest requests made during check-in", priority: 'High', riskLevel: 'Medium', proof: 'PMS Log', location: 'Front Desk' }
                ]
            },
            {
                title: "💳 Guest Check-Out Process Checklist",
                department: "Front Office",
                frequency: "As-Needed",
                role: "Front Desk Agent",
                summary: "Ensures a smooth and accurate check-out, covering final bill settlement, feedback collection, luggage assistance, and updating all systems.",
                tasks: [
                    { id: 'FO-CO-001', description: "Greet the guest and confirm their room number", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Front Desk' },
                    { id: 'FO-CO-002', description: "Check the PMS for any outstanding charges (e.g., minibar, laundry, restaurant)", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Front Desk' },
                    { id: 'FO-CO-003', description: "Generate and review the final bill with the guest, explaining all charges clearly", priority: 'High', riskLevel: 'High', proof: 'Signed Folio', location: 'Front Desk' },
                    { id: 'FO-CO-004', description: "Collect the final payment and issue a receipt", priority: 'High', riskLevel: 'High', proof: 'Payment Receipt', location: 'Front Desk' },
                    { id: 'FO-CO-005', description: "Check the room status with housekeeping (for damages or lost items) before closing the account", priority: 'Medium', riskLevel: 'Medium', proof: 'Communication Log', location: 'Front Desk' },
                    { id: 'FO-CO-006', description: "Ask for feedback on their stay experience", priority: 'High', riskLevel: 'Low', proof: 'Feedback Form/Log', location: 'Front Desk' },
                    { id: 'FO-CO-007', description: "Arrange for luggage assistance or transport if needed", priority: 'Medium', riskLevel: 'Low', proof: 'Communication Log', location: 'Front Desk' },
                    { id: 'FO-CO-008', description: "Deactivate the guest's key card", priority: 'Medium', riskLevel: 'Low', proof: 'System Check', location: 'Front Desk' },
                    { id: 'FO-CO-009', description: "Update the PMS with the check-out details immediately", priority: 'High', riskLevel: 'Medium', proof: 'System Check', location: 'Front Desk' },
                    { id: 'FO-CO-010', description: "Log the departure in the guest register as per local regulations", priority: 'Medium', riskLevel: 'Low', proof: 'Logbook Review', location: 'Front Desk' }
                ]
            },
            {
                title: "🗣️ Complaint Resolution Process Checklist",
                department: "Front Office",
                frequency: "As-Needed",
                role: "Duty Manager",
                summary: "A critical tool for turning a negative experience into a positive one. It outlines the steps for acknowledging, resolving, and documenting guest complaints effectively.",
                tasks: [
                    { id: 'FO-CR-001', description: "Acknowledge the guest's complaint immediately and listen actively without interruption", priority: 'High', riskLevel: 'High', proof: 'Witness/CCTV', location: 'Front Desk' },
                    { id: 'FO-CR-002', description: "Empathize with the guest and offer a sincere apology for the inconvenience", priority: 'High', riskLevel: 'High', proof: 'Guest Feedback', location: 'Front Desk' },
                    { id: 'FO-CR-003', description: "Note down all the details of the complaint accurately", priority: 'High', riskLevel: 'Medium', proof: 'Complaint Log', location: 'Front Desk' },
                    { id: 'FO-CR-004', description: "Inform the guest of the immediate action you will take", priority: 'High', riskLevel: 'Medium', proof: 'Verbal Confirmation', location: 'Front Desk' },
                    { id: 'FO-CR-005', description: "Inform the relevant department head (Housekeeping, F&B, Maintenance) promptly", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Front Desk' },
                    { id: 'FO-CR-006', description: "Follow up with the department to ensure the issue is being resolved", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Front Desk' },
                    { id: 'FO-CR-007', description: "Update the guest on the progress of their complaint resolution", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Guest Room' },
                    { id: 'FO-CR-008', description: "Offer a goodwill gesture (e.g., discount, complimentary service) if appropriate, with approval", priority: 'Medium', riskLevel: 'Medium', proof: 'Approval Log', location: 'Front Desk' },
                    { id: 'FO-CR-009', description: "Log the complaint, action taken, and final resolution in the guest complaint register", priority: 'High', riskLevel: 'Low', proof: 'Complaint Log', location: 'Front Desk' },
                    { id: 'FO-CR-010', description: "Report recurring complaints to senior management for systemic improvements", priority: 'High', riskLevel: 'Medium', proof: 'Management Report', location: 'Management' }
                ]
            },
            {
                title: "🍽️ Restaurant Opening Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Restaurant Manager",
                summary: "Ensures the restaurant is perfectly set for service, covering everything from cleanliness and table settings to staff briefings and POS system readiness.",
                tasks: [
                    { id: 'FB-RO-001', description: "Switch on all lights, air conditioning, and music system", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Restaurant' },
                    { id: 'FB-RO-002', description: "Check cleanliness of the entire dining area, including floors and furniture", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Restaurant' },
                    { id: 'FB-RO-003', description: "Set all tables with clean linen, polished cutlery, and glassware as per standard", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Restaurant' },
                    { id: 'FB-RO-004', description: "Check the reservation list and prepare any special table arrangements", priority: 'High', riskLevel: 'Medium', proof: 'Reservation System', location: 'Restaurant' },
                    { id: 'FB-RO-005', description: "Stock all service stations with condiments, napkins, and other essentials", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Restaurant' },
                    { id: 'FB-RO-006', description: "Ensure the Point of Sale (POS) system is operational and menus are updated", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Restaurant' },
                    { id: 'FB-RO-007', description: "Check that restaurant restrooms are clean and fully stocked", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Log', location: 'Restaurant' },
                    { id: 'FB-RO-008', description: "Inspect buffet counters and food warmers/chillers (if applicable)", priority: 'High', riskLevel: 'Medium', proof: 'Temperature Log', location: 'Restaurant' },
                    { id: 'FB-RO-009', description: "Conduct a pre-shift briefing with staff about menu specials, reservations, and service standards", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Restaurant' },
                    { id: 'FB-RO-010', description: "Conduct a final walkthrough of the restaurant before opening to guests", priority: 'High', riskLevel: 'Low', proof: 'Manager Sign-off', location: 'Restaurant' }
                ]
            },
            {
                title: "🔒 Restaurant Closing Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Restaurant Manager",
                summary: "A systematic process for securely closing the restaurant, covering cleaning, food storage, equipment shutdown, and financial reconciliation.",
                tasks: [
                    { id: 'FB-RC-001', description: "Clear and reset all tables for the next day's service", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Restaurant' },
                    { id: 'FB-RC-002', description: "Turn off all non-essential lights, air conditioning, and music system", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Restaurant' },
                    { id: 'FB-RC-003', description: "Clean and sanitize all dining tables and chairs", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Restaurant' },
                    { id: 'FB-RC-004', description: "Vacuum carpets or mop floors", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Restaurant' },
                    { id: 'FB-RC-005', description: "Dispose of all garbage and replace liners in trash bins", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Restaurant' },
                    { id: 'FB-RC-006', description: "Store all leftover food properly as per food safety standards", priority: 'High', riskLevel: 'High', proof: 'Storage Log', location: 'Kitchen' },
                    { id: 'FB-RC-007', description: "Clean buffet counters and service areas", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Restaurant' },
                    { id: 'FB-RC-008', description: "Ensure all kitchen and service equipment is switched off", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Restaurant/Kitchen' },
                    { id: 'FB-RC-009', description: "Lock all storage rooms and liquor cabinets", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Restaurant' },
                    { id: 'FB-RC-010', description: "Complete the cash reconciliation and close the day in the POS system", priority: 'High', riskLevel: 'High', proof: 'POS Report', location: 'Restaurant' }
                ]
            },
            {
                title: "🥘 Buffet Service Setup Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "F&B Supervisor",
                summary: "Guarantees a flawless and safe buffet experience, focusing on logical setup, food labeling, temperature control, and hygiene.",
                tasks: [
                    { id: 'FB-BS-001', description: "Check that buffet counters and sneeze guards are clean and sanitized", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Buffet Area' },
                    { id: 'FB-BS-002', description: "Arrange hot and cold stations logically for smooth guest flow", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Buffet Area' },
                    { id: 'FB-BS-003', description: "Label all food items clearly, including allergen information", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Buffet Area' },
                    { id: 'FB-BS-004', description: "Place appropriate serving spoons and tongs at each dish", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Buffet Area' },
                    { id: 'FB-BS-005', description: "Stock an adequate supply of plates, bowls, and cutlery", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Buffet Area' },
                    { id: 'FB-BS-006', description: "Check that all food warmers and chillers are functioning at the correct temperatures", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Buffet Area' },
                    { id: 'FB-BS-007', description: "Prepare and stock the beverage station (water, juice, coffee, tea)", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Buffet Area' },
                    { id: 'FB-BS-008', description: "Refill all condiments, sauces, and accompaniments", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Buffet Area' },
                    { id: 'FB-BS-009', description: "Brief the service staff on the menu and replenishment plan", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Buffet Area' },
                    { id: 'FB-BS-010', description: "Conduct a final hygiene check of the entire buffet area and serving staff before service", priority: 'High', riskLevel: 'High', proof: 'Supervisor Sign-off', location: 'Buffet Area' }
                ]
            },
            {
                title: "🍸 Bar Opening Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Bartender",
                summary: "Prepares the bar for service, focusing on cleanliness, stock levels, equipment checks, and presentation to ensure a smooth and profitable shift.",
                tasks: [ { id: 'FB-BO-001', description: "Clean and sanitize bar counter and stools", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Bar' } ]
            },
            {
                title: "🍾 Bar Closing Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Bartender",
                summary: "Ensures the bar is securely and cleanly closed, covering inventory reconciliation, cleaning, waste disposal, and cash handling.",
                tasks: [ { id: 'FB-BC-001', description: "Dispose of used garnishes", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Bar' } ]
            },
            {
                title: "🏨 Room Service Delivery Checklist",
                department: "F&B",
                frequency: "As-Needed",
                role: "Room Service Waiter",
                summary: "Standardizes the process of delivering food to guest rooms, ensuring accuracy, timeliness, presentation, and a positive guest interaction.",
                tasks: [ { id: 'FB-RSD-001', description: "Check order slip for accuracy against the prepared food", priority: 'High', riskLevel: 'High', proof: 'Order Slip', location: 'Room Service' } ]
            },
            {
                title: "🎉 Banquet Hall Preparation Checklist",
                department: "F&B",
                frequency: "As-Needed",
                role: "Banquet Manager",
                summary: "A master checklist for executing flawless events, covering everything from client coordination and setup to AV checks and staff briefings.",
                tasks: [
                    { id: 'FB-BHP-001', description: "Confirm final guest count and seating arrangement with the client", priority: 'High', riskLevel: 'Medium', proof: 'Client Sign-off' , location: 'Banquet Office'},
                    { id: 'FB-BHP-002', description: "Ensure hall is cleaned and set up as per the event order", priority: 'High', riskLevel: 'Low', proof: 'Photo' , location: 'Banquet Hall'},
                    { id: 'FB-BHP-003', description: "Test all audio-visual equipment (mics, projectors, screens)", priority: 'High', riskLevel: 'High', proof: 'AV Test Log' , location: 'Banquet Hall'},
                    { id: 'FB-BHP-004', description: "Check lighting and temperature controls", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check' , location: 'Banquet Hall'},
                    { id: 'FB-BHP-005', description: "Coordinate with kitchen for menu and service timing", priority: 'High', riskLevel: 'Medium', proof: 'BEO Review' , location: 'Kitchen'},
                    { id: 'FB-BHP-006', description: "Brief all banquet staff on the event flow and their specific roles", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log' , location: 'Banquet Hall'},
                    { id: 'FB-BHP-007', description: "Set up registration desk, signage, and any required branding", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check' , location: 'Entrance'},
                    { id: 'FB-BHP-008', description: "Ensure restrooms are clean and fully stocked", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log' , location: 'Restrooms'},
                    { id: 'FB-BHP-009', description: "Verify floral arrangements and decor are as per client's request", priority: 'Medium', riskLevel: 'Low', proof: 'Photo' , location: 'Banquet Hall'},
                    { id: 'FB-BHP-010', description: "Keep standby supplies ready (extra chairs, cutlery)", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check' , location: 'Banquet Store'}
                ]
            },
            {
                title: "🔪 Kitchen Hygiene & Food Safety Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Head Chef",
                summary: "A HACCP-based checklist that forms the backbone of a safe kitchen, focusing on hygiene, temperature control, cross-contamination prevention, and proper food handling.",
                tasks: [ { id: 'FB-KH-001', description: "Ensure kitchen floors are clean, dry, and non-slip", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kitchen' } ]
            },
            {
                title: "📈 Inventory & Stock Check Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Store Keeper",
                summary: "Manages the flow of goods to prevent stockouts and minimize waste. This checklist covers stock levels, requisitions, and storage conditions.",
                tasks: [ { id: 'FIN-IS-001', description: "Check stock levels of key raw materials daily", priority: 'High', riskLevel: 'Medium', proof: 'Stock Register', location: 'Stores' } ]
            },
            {
                title: "🛠️ Daily Maintenance Rounds Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Technician",
                summary: "A proactive checklist for daily inspections of all hotel areas to identify and report maintenance issues before they become major problems for guests.",
                tasks: [ { id: 'MT-DMR-001', description: "Inspect all guest room corridors for damages or fused lights", priority: 'Medium', riskLevel: 'Low', proof: 'Logbook', location: 'Corridors' } ]
            },
            {
                title: "⚡ Electrical Systems Inspection Checklist",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Electrician",
                summary: "A crucial safety checklist for inspecting the hotel's electrical infrastructure, including panels, breakers, and backup systems, to prevent failures and fire hazards.",
                tasks: [ { id: 'MT-ES-001', description: "Check main electrical panel for any signs of overheating or loose connections", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Electrical Panel Room' } ]
            },
            {
                title: "💧 Plumbing & Water Systems Checklist",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Plumber",
                summary: "Prevents water-related issues by standardizing the inspection of pipes, pumps, tanks, and fixtures throughout the hotel to catch leaks and blockages early.",
                tasks: [ { id: 'MT-PWS-001', description: "Inspect guest bathrooms for any leaks from faucets, toilets, or pipes", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Guest Rooms' } ]
            },
            {
                title: "💨 HVAC & AC Systems Checklist",
                department: "Maintenance",
                frequency: "Monthly",
                role: "HVAC Technician",
                summary: "Ensures guest comfort and energy efficiency through routine checks of filters, coils, and controls for all air conditioning and ventilation systems.",
                tasks: [ { id: 'MT-HVAC-001', description: "Clean or replace AC filters in guest rooms and public areas", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'All Areas' } ]
            },
            {
                title: "↕️ Elevator & Escalator Safety Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Maintenance Supervisor",
                summary: "A daily safety check to ensure smooth and safe operation of all vertical transport, covering cleanliness, functionality, and emergency systems.",
                tasks: [ { id: 'MT-EES-001', description: "Check elevator car interior for cleanliness and any damage", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Elevators' } ]
            },
            {
                title: "🏊 Swimming Pool Maintenance Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Pool Technician",
                summary: "Maintains water quality and safety in the swimming pool area, covering chemical testing, cleaning, and equipment checks to meet health standards.",
                tasks: [ { id: 'MT-SPM-001', description: "Test and log chlorine and pH levels of the pool water", priority: 'High', riskLevel: 'High', proof: 'Water Test Log', location: 'Swimming Pool' } ]
            },
            {
                title: "🌳 Landscaping & Outdoor Areas Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Gardener",
                summary: "Keeps the hotel's grounds looking pristine and safe, covering lawn care, plant health, irrigation, and cleanliness of outdoor walkways and features.",
                tasks: [ { id: 'MT-LOA-001', description: "Inspect lawns for health and trim grass as needed", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Gardens' } ]
            },
            {
                title: "📹 CCTV & Security Monitoring Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Security Officer",
                summary: "Ensures the hotel's surveillance system is fully operational, covering camera functionality, recording status, and clear views to deter and record incidents.",
                tasks: [ { id: 'SEC-CSM-001', description: "Check that all CCTV cameras are operational and recording", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Security Control Room' } ]
            },
            {
                title: "🔥 Fire Safety Checklist",
                department: "Security",
                frequency: "Weekly",
                role: "Security Supervisor",
                summary: "A critical compliance checklist for regularly inspecting all fire safety equipment, including extinguishers, alarms, and exit routes, to ensure readiness for an emergency.",
                tasks: [ { id: 'SEC-FS-001', description: "Visually inspect all fire extinguishers to ensure they are in place, charged, and not expired", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Areas' } ]
            },
            {
                title: "🚗 Parking & Valet Operations Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Valet Supervisor",
                summary: "Manages the safety and efficiency of the parking and valet service, covering lot cleanliness, traffic flow, key security, and staff professionalism.",
                tasks: [ { id: 'SEC-PVO-001', description: "Check parking lot for cleanliness, proper lighting, and clear signage", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Parking Lot' } ]
            },
            {
                title: "⚠️ Emergency Preparedness Checklist",
                department: "Security",
                frequency: "Monthly",
                role: "Security Supervisor",
                summary: "A monthly audit of all emergency supplies and systems, such as first aid kits, emergency contacts, and communication devices, to ensure the hotel is prepared for any crisis.",
                tasks: [ { id: 'SEC-EP-001', description: "Ensure all first aid kits are fully stocked and items are within expiry date", priority: 'High', riskLevel: 'High', proof: 'Inventory Check', location: 'All Areas' } ]
            },
            {
                title: "🌙 Night Security Patrol Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Security Officer",
                summary: "Defines the standard procedure for nightly security patrols, ensuring all areas are checked, doors are secured, and any irregularities are reported.",
                tasks: [ { id: 'SEC-NSP-001', description: "Inspect all entry and exit points to ensure they are secure", priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Perimeter' } ]
            },
            {
                title: "🧖‍♀️ Spa Daily Operations Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Spa Manager",
                summary: "Ensures the spa provides a hygienic, relaxing, and professional experience, covering treatment room setup, therapist readiness, and inventory checks.",
                tasks: [ { id: 'WEL-SDO-001', description: "Check cleanliness and hygiene of all treatment rooms, showers, and saunas", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Spa' } ]
            },
            {
                title: "🏋️ Gym & Fitness Center Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Gym Manager",
                summary: "Focuses on member safety and experience by standardizing daily checks for equipment safety, cleanliness, and availability of amenities.",
                tasks: [ { id: 'WEL-GFC-001', description: "Inspect all gym equipment for safety, functionality, and wear", priority: 'High', riskLevel: 'High', proof: 'Equipment Log', location: 'Gym' } ]
            },
            {
                title: "🎟️ Concierge Desk Checklist",
                department: "Front Office",
                frequency: "Daily",
                role: "Concierge",
                summary: "Prepares the concierge desk to provide exceptional guest service, ensuring all information on tours, transport, and events is up-to-date and accurate.",
                tasks: [ { id: 'FO-CD-001', description: "Review and update tour, transport, and event schedules", priority: 'Medium', riskLevel: 'Low', proof: 'System Check', location: 'Concierge Desk' } ]
            },
            {
                title: "👶 Kids Club / Play Area Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Kids Club Supervisor",
                summary: "Prioritizes child safety through daily inspections of all play equipment, toys, and the overall environment to remove any potential hazards.",
                tasks: [ { id: 'WEL-KC-001', description: "Inspect all play equipment and toys for safety hazards (sharp edges, small parts)", priority: 'High', riskLevel: 'High', proof: 'Safety Log', location: 'Kids Club' } ]
            },
            {
                title: "⭐ Guest Feedback & Experience Checklist",
                department: "Management",
                frequency: "Daily",
                role: "Duty Manager",
                summary: "A process for systematically collecting, reviewing, and acting on guest feedback from all departments to drive continuous improvement.",
                tasks: [ { id: 'MGMT-GFE-001', description: "Collect and review guest feedback forms from all departments daily", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Forms', location: 'Manager\'s Office' } ]
            },
            {
                title: "🧾 Night Audit Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Night Auditor",
                summary: "The critical end-of-day financial process to reconcile all hotel revenues, close the business day, and prepare reports for management.",
                tasks: [ { id: 'FIN-NA-001', description: "Reconcile all guest folios with charges from POS systems (restaurant, spa, etc.)", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Back Office' } ]
            },
            {
                title: "📦 Procurement Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Procurement Officer",
                summary: "Standardizes the purchasing process, ensuring all purchase requests are properly approved and documented before being sent to vendors.",
                tasks: [ { id: 'FIN-PROC-001', description: "Review purchase requisitions from all departments for completeness and approval", priority: 'High', riskLevel: 'Medium', proof: 'Requisition Forms', location: 'Procurement' } ]
            },
            {
                title: "🛒 Vendor Management Checklist",
                department: "Finance",
                frequency: "Weekly",
                role: "Procurement Manager",
                summary: "A weekly review process to manage vendor relationships, track performance against contracts, and ensure the hotel is receiving quality service.",
                tasks: [ { id: 'FIN-VM-001', description: "Review contracts and SLAs with current vendors", priority: 'Medium', riskLevel: 'Medium', proof: 'Contract Files', location: 'Procurement' } ]
            },
            {
                title: "📊 Payroll Processing Checklist",
                department: "Finance",
                frequency: "Monthly",
                role: "HR Manager",
                summary: "A step-by-step guide to ensure accurate and timely payroll processing, from verifying attendance records to final bank transfers.",
                tasks: [ { id: 'FIN-PAY-001', description: "Verify staff attendance records from biometric system or registers", priority: 'High', riskLevel: 'High', proof: 'Attendance Report', location: 'HR Office' } ]
            },
            {
                title: "🗂️ Inventory Control Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Store Keeper",
                summary: "A daily checklist to maintain control over inventory, tracking consumption, managing stock levels, and preventing wastage or theft.",
                tasks: [ { id: 'FIN-IC-001', description: "Review daily consumption reports from all outlets", priority: 'High', riskLevel: 'Medium', proof: 'Consumption Reports', location: 'Stores' } ]
            },
            {
                title: "🧮 Accounts Payable Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Accountant",
                summary: "Ensures all supplier invoices are accurately processed, verified against purchase orders, and prepared for payment on time.",
                tasks: [ { id: 'FIN-AP-001', description: "Verify all supplier invoices against corresponding purchase orders (PO)", priority: 'High', riskLevel: 'High', proof: 'Invoice/PO Match', location: 'Accounts' } ]
            },
            {
                title: "💵 Cash Handling Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Cashier",
                summary: "A crucial financial control checklist to ensure all cash transactions are handled securely and reconciled accurately at all points of sale.",
                tasks: [ { id: 'FIN-CH-001', description: "Verify the opening cash float at each POS counter with a witness", priority: 'High', riskLevel: 'High', proof: 'Float Log', location: 'POS Counters' } ]
            },
            {
                title: "🌆 Rooftop / Terrace Restaurant Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Restaurant Manager",
                summary: "Specific checks for outdoor dining venues, focusing on weather preparedness, safety of railings, and cleanliness of outdoor furniture and flooring.",
                tasks: [ { id: 'FB-RTR-001', description: "Check cleanliness of terrace flooring, furniture, and railings", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Rooftop' } ]
            },
            {
                title: "🖥️ Business Center Checklist",
                department: "Front Office",
                frequency: "Daily",
                role: "Front Desk Agent",
                summary: "Ensures the business center is ready for guest use, with functional computers, printers, and a clean, professional environment.",
                tasks: [ { id: 'FO-BC-001', description: "Ensure all computers are functioning with stable internet access", priority: 'High', riskLevel: 'Low', proof: 'System Check', location: 'Business Center' } ]
            },
            {
                title: "🎤 Conference & Banquet Hall Checklist",
                department: "F&B",
                frequency: "As-Needed",
                role: "Banquet Manager",
                summary: "The master plan for setting up conference and banquet events, ensuring correct seating, functional AV equipment, and adherence to the event order.",
                tasks: [ { id: 'FB-CBH-001', description: "Inspect seating arrangement against the event's floor plan", priority: 'High', riskLevel: 'Medium', proof: 'Floor Plan', location: 'Banquet Hall' } ]
            },
            {
                title: "🏭 Laundry Plant Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Laundry Supervisor",
                summary: "A checklist for the industrial-scale laundry operation, focusing on machine maintenance, chemical usage, and workflow efficiency to process high volumes of linen.",
                tasks: [ { id: 'HK-LP-001', description: "Inspect all washing machines and dryers for correct functionality and settings", priority: 'High', riskLevel: 'Medium', proof: 'Machine Log', location: 'Laundry Plant' } ]
            },
            {
                title: "🍴 Staff Canteen Checklist",
                department: "HR",
                frequency: "Daily",
                role: "Admin Manager",
                summary: "Focuses on the welfare of staff by ensuring the canteen provides hygienic, quality food in a clean and safe environment.",
                tasks: [ { id: 'HR-SC-001', description: "Check food quality, taste, and hygiene before each service (breakfast, lunch, dinner)", priority: 'High', riskLevel: 'High', proof: 'Food Tasting Log', location: 'Staff Canteen' } ]
            },
            {
                title: "🎮 Kids Play Area / Kids Club Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Kids Club Supervisor",
                summary: "A safety-first checklist for managing children's play areas, with a strong focus on equipment safety, supervision, and hygiene.",
                tasks: [ { id: 'WEL-KPA-001', description: "Inspect all toys and play equipment for safety hazards (sharp edges, broken parts)", priority: 'High', riskLevel: 'High', proof: 'Safety Log', location: 'Kids Club' } ]
            }
        ]
    },
    {
        id: 'facility_management_blueprint',
        title: "Facility Management Checklist",
        priceUSD: 169.99,
        priceINR: 7999,
        category: "Corporate",
        description: "The complete playbook for facility managers to ensure a safe, compliant, and efficient workplace environment across multiple locations.",
        icon: <Building2 className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Daily Operations & Preventive Maintenance",
            "Site Commissioning & Decommissioning",
            "Business Continuity & Disaster Recovery",
            "ESG, Vendor & Capital Asset Management"
        ],
        checklists: [
            {
                title: "✔️ Daily Site Operations",
                department: "Operations",
                frequency: "Daily",
                role: "Facility Coordinator",
                summary: "A comprehensive walkthrough to ensure the facility is ready for employees, covering lighting, HVAC, restrooms, and access control systems.",
                tasks: [
                    { id: 'DSO-001', description: "Validate Housekeeping Service Delivery", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'DSO-002', description: "Check Front Desk Operations", priority: 'Medium', riskLevel: 'Low', proof: 'Log / Register', location: 'Front Office' },
                    { id: 'DSO-003', description: "Inspect general office area", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Office Area' },
                    { id: 'DSO-004', description: "Check and verify meeting rooms", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Meeting Rooms' },
                    { id: 'DSO-005', description: "Verify Cafeteria / Pantry Readiness", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Cafeteria' },
                    { id: 'DSO-006', description: "Check office equipment functionality", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Office Area' },
                    { id: 'DSO-007', description: "Manage mailroom and courier services", priority: 'Medium', riskLevel: 'Low', proof: 'Log / Register', location: 'Mailroom' }
                ]
            },
            {
                title: "🔧 Weekly Maintenance & Safety",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Supervisor",
                summary: "A systematic review of all critical systems and safety protocols to identify and close vulnerabilities before they become incidents.",
                tasks: [
                    { id: 'WMS-001', description: "Test generator and power backup systems", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'WMS-002', description: "Inspect HVAC system and air quality", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'WMS-003', description: "Review water management systems", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'WMS-004', description: "Check elevator and escalator functionality", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'WMS-005', description: "Inspect fire safety equipment", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Common Areas' },
                    { id: 'WMS-006', description: "Test security and access control systems", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Security Room' },
                    { id: 'WMS-007', description: "Review pest control effectiveness", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'WMS-008', description: "Sample waste management and disposal", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Waste Yard' },
                    { id: 'WMS-009', description: "Test building management system (BMS)", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'BMS Room' }
                ]
            },
            {
                title: "📋 Monthly Vendor & Compliance",
                department: "Admin",
                frequency: "Monthly",
                role: "Facility Manager",
                summary: "Ensures all third-party vendors meet their contractual obligations and comply with all statutory and legal requirements, minimizing company risk.",
                tasks: [
                    { id: 'MVC-001', description: "Audit vendor service level agreements (SLAs)", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'MVC-002', description: "Review vendor invoices and payments", priority: 'High', riskLevel: 'Medium', proof: 'Invoice', location: 'Facility Office' },
                    { id: 'MVC-003', description: "Schedule vendor performance review meetings", priority: 'Medium', riskLevel: 'Low', proof: 'Photo / Log', location: 'Facility Office' },
                    { id: 'MVC-004', description: "Update vendor documentation and contracts", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'MVC-005', description: "Conduct a labor law compliance audit", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Facility Office' },
                    { id: 'MVC-006', description: "Review all statutory licenses and renewals", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Facility Office' }
                ]
            },
            {
                title: "📈 Quarterly & Annual Tasks",
                department: "Management",
                frequency: "Quarterly",
                role: "Head of Facilities",
                summary: "High-level strategic tasks focusing on budget management, long-term asset planning, and comprehensive operational reviews.",
                tasks: [
                    { id: 'QAT-001', description: "Conduct quarterly business reviews", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Facility Office' },
                    { id: 'QAT-002', description: "Develop and review capex and opex budgets", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'QAT-003', description: "Assess space utilization and planning", priority: 'Medium', riskLevel: 'Low', proof: 'Photo / Log', location: 'Office Area' },
                    { id: 'QAT-004', description: "Perform an asset condition audit", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'QAT-005', description: "Review and update insurance policies", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'QAT-006', description: "Execute emergency response and BCP drills", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Common Areas' }
                ]
            },
            {
                title: "🧹 Housekeeping & Cleaning",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Housekeeping Supervisor",
                summary: "Detailed cleaning protocols to maintain a pristine and hygienic workplace environment, from daily tasks to periodic deep cleaning schedules.",
                tasks: [
                    { id: 'HKC-001', description: "Daily Deep Cleaning", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'HKC-002', description: "High-level and Façade Cleaning", priority: 'Medium', riskLevel: 'High', proof: 'Photo / Log', location: 'Exterior' },
                    { id: 'HKC-003', description: "Washroom and Restroom Cleaning", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Restrooms' },
                    { id: 'HKC-004', description: "Floor Care and Maintenance", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'HKC-005', description: "Carpet and Upholstery Care", priority: 'Medium', riskLevel: 'Low', proof: 'Photo / Log', location: 'Office Area' },
                    { id: 'HKC-006', description: "Laundry Management", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Laundry Room' },
                    { id: 'HKC-007', description: "Waste Management Services", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Waste Yard' },
                    { id: 'HKC-008', description: "Consumables and Supplies Mgt.", priority: 'Medium', riskLevel: 'Low', proof: 'Photo / Log', location: 'Store Room' },
                    { id: 'HKC-009', description: "Vendor Staff Grooming and Training", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Common Areas' }
                ]
            },
            {
                title: "🐜 Pest Control & Waste Mgmt.",
                department: "Health & Safety",
                frequency: "Monthly",
                role: "Safety Officer",
                summary: "Integrated pest and waste management protocols to ensure a clean, safe, and environmentally compliant facility.",
                tasks: [
                    { id: 'PCW-001', description: "General Pest Control", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'PCW-002', description: "Rodent Control Management", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Common Areas' },
                    { id: 'PCW-003', description: "Termite Control Management", priority: 'Medium', riskLevel: 'High', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'PCW-004', description: "Segregation and Disposal Protocol", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Waste Yard' },
                    { id: 'PCW-005', description: "Implement Organic Waste Composting", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Waste Yard' }
                ]
            },
            {
                title: "💡 Electrical Systems",
                department: "Engineering",
                frequency: "Weekly",
                role: "Electrician",
                summary: "Critical safety inspections of all electrical infrastructure to prevent outages, ensure equipment longevity, and mitigate fire hazards.",
                tasks: [
                    { id: 'ELS-001', description: "Daily Shared Electrical Loads Check", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'ELS-002', description: "Daily DG set and Fuel Management", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'ELS-003', description: "Test functionality of Transformers", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'ELS-004', description: "UPS Health and Load Test", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'ELS-005', description: "Inspect LT & HT Panel Maintenance", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'ELS-006', description: "Check all APFC Panel Maintenance", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'ELS-007', description: "Validate Lightning Arrestor Efficacy", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Rooftop' },
                    { id: 'ELS-008', description: "Check Earthing Pits and Conduction", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Exterior' }
                ]
            },
            {
                title: "💧 Plumbing & Water Systems",
                department: "Engineering",
                frequency: "Weekly",
                role: "Plumber",
                summary: "Preventive maintenance for all water-related systems, including plumbing, sewage, and water treatment, to ensure hygiene and prevent disruptions.",
                tasks: [
                    { id: 'PWS-001', description: "Maintain all Water Supply & Plumbing", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'PWS-002', description: "Weekly Hydro-Pneumatic System Check", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'PWS-003', description: "Manage all Drainage & Sewage Systems", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'PWS-004', description: "Operate and Maintain WTP and STP", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'PWS-005', description: "Ensure Irrigation System Health", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Exterior' }
                ]
            },
            {
                title: "💨 HVAC & BMS",
                department: "Engineering",
                frequency: "Weekly",
                role: "HVAC Technician",
                summary: "Ensures optimal performance of HVAC and Building Management Systems for employee comfort, air quality, and energy efficiency.",
                tasks: [
                    { id: 'HVB-001', description: "Daily HVAC System Operation", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'HVB-002', description: "Weekly Chiller Plant Maintenance", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'HVB-003', description: "Quarterly AHUs & FCUs Maintenance", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'HVB-004', description: "Calibrate and Maintain VFDs", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'HVB-005', description: "Check all Pumps, Motors and Valves", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'HVB-006', description: "Ensure Cooling Tower Functionality", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Rooftop' },
                    { id: 'HVB-007', description: "Daily BMS Operation and Monitoring", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'BMS Room' },
                    { id: 'HVB-008', description: "Schedule PPM for all HVAC Equipment", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Utility Rooms' }
                ]
            },
            {
                title: "🔥 Fire Safety & Emergency",
                department: "Safety",
                frequency: "Weekly",
                role: "Safety Officer",
                summary: "A comprehensive compliance and readiness checklist for all fire and life safety systems, ensuring the facility is prepared for any emergency.",
                tasks: [
                    { id: 'FSE-001', description: "Weekly Fire Pump Inspection and Testing", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'FSE-002', description: "Verify Fire Hydrant System Integrity", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Exterior' },
                    { id: 'FSE-003', description: "Monthly Fire Extinguisher Checks", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Common Areas' },
                    { id: 'FSE-004', description: "Quarterly Fire Alarm System Testing", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Security Room' },
                    { id: 'FSE-005', description: "Ensure PA System and Talkback Clarity", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Security Room' },
                    { id: 'FSE-006', description: "Check all Fire Doors and Exit Signages", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Common Areas' },
                    { id: 'FSE-007', description: "Test Emergency Lights and Power Backup", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'FSE-008', description: "Quarterly Fire and Evacuation Drills", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Common Areas' }
                ]
            },
            {
                title: "🛡️ Security & Access Control",
                department: "Security",
                frequency: "Daily",
                role: "Security Supervisor",
                summary: "Protocols for managing physical security, access control systems, and surveillance to protect company assets and personnel.",
                tasks: [
                    { id: 'SAC-001', description: "Daily Manned Guarding and Patrolling", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Common Areas' },
                    { id: 'SAC-002', description: "Weekly CCTV and Surveillance Audit", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Security Room' },
                    { id: 'SAC-003', description: "Test Intrusion and Burglar Alarm Systems", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Security Room' },
                    { id: 'SAC-004', description: "Review Visitor and Vehicle Management", priority: 'Medium', riskLevel: 'Medium', proof: 'Log / Register', location: 'Front Office' },
                    { id: 'SAC-005', description: "Check Boom Barriers and Turnstiles", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Entrances' },
                    { id: 'SAC-006', description: "Verify Under-Vehicle Surveillance (UVSS)", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Entrances' },
                    { id: 'SAC-007', description: "Test Baggage Scanners and HHMDs", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Entrances' },
                    { id: 'SAC-008', description: "Manage Key and Access Card Protocols", priority: 'High', riskLevel: 'High', proof: 'Log / Register', location: 'Security Room' },
                    { id: 'SAC-009', description: "Review Parking Management System", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Parking Area' }
                ]
            },
            {
                title: " Cafeteria - F&B - Canteen",
                department: "Admin",
                frequency: "Daily",
                role: "Admin Manager",
                summary: "Ensures the staff cafeteria or food court is managed to the highest standards of hygiene, quality, and service.",
                tasks: [
                    { id: 'CAF-001', description: "Daily Meal Quality and Service Audit", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Cafeteria' },
                    { id: 'CAF-002', description: "Labor and Staff Hygiene Checks", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Cafeteria' },
                    { id: 'CAF-003', description: "Review Kitchen and Pantry Audits", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Cafeteria' },
                    { id: 'CAF-004', description: "Validate Food and Water Testing", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Cafeteria' },
                    { id: 'CAF-005', description: "Check all Crockery and Cutlery", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Cafeteria' }
                ]
            },
            {
                title: " Events & Drives",
                department: "HR",
                frequency: "As-Needed",
                role: "HR Manager",
                summary: "A planning and execution checklist for internal company events, from town halls to special occasion celebrations.",
                tasks: [
                    { id: 'EVD-001', description: "Pre-event planning and coordination", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Office Area' },
                    { id: 'EVD-002', description: "Audiovisual equipment setup", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Office Area' },
                    { id: 'EVD-003', description: "Catering and F&B arrangements", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Cafeteria' },
                    { id: 'EVD-004', description: "Seating and decor setup", priority: 'Medium', riskLevel: 'Low', proof: 'Photo / Log', location: 'Office Area' },
                    { id: 'EVD-005', description: "Post-event clean-up and feedback", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Office Area' }
                ]
            },
            {
                title: "💻 IT - Data Room",
                department: "IT",
                frequency: "Daily",
                role: "IT Manager",
                summary: "Maintains the physical environment of critical IT infrastructure, focusing on cooling, power, and physical security.",
                tasks: [
                    { id: 'ITD-001', description: "Daily Server Room Temp and Humidity", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Data Center' },
                    { id: 'ITD-002', description: "UPS and Power Supply Monitoring", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Data Center' },
                    { id: 'ITD-003', description: "Access Control and Physical Security", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Data Center' },
                    { id: 'ITD-004', description: "Network Rack and Cable Management", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Data Center' },
                    { id: 'ITD-005', description: "Quarterly Fire Suppression System Test", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Data Center' },
                    { id: 'ITD-006', description: "Test Water Leak Detection System", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Data Center' }
                ]
            },
            {
                title: "📦 Procurement & Vendor Mgmt",
                department: "Finance",
                frequency: "Weekly",
                role: "Procurement Officer",
                summary: "Standardizes the entire procurement lifecycle, from raising purchase orders to vendor selection and payment processing.",
                tasks: [
                    { id: 'PVM-001', description: "Weekly PR to PO Process Review", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'PVM-002', description: "Quarterly Vendor Sourcing and Onboarding", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Facility Office' },
                    { id: 'PVM-003', description: "Weekly Invoice Processing and Payments", priority: 'High', riskLevel: 'Medium', proof: 'Invoice', location: 'Facility Office' },
                    { id: 'PVM-004', description: "Track Contract Renewals and Expiries", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'PVM-005', description: "Maintain a Vendor Master Database", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Facility Office' }
                ]
            },
            {
                title: "🌿 Sustainability & Energy Mgmt",
                department: "Sustainability",
                frequency: "Monthly",
                role: "Energy Manager",
                summary: "Core ESG checklist for tracking energy and water consumption, identifying savings opportunities, and reducing environmental impact.",
                tasks: [
                    { id: 'SEM-001', description: "Monthly Energy & Water Bill Analysis", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'SEM-002', description: "Weekly Energy Saving Initiatives Check", priority: 'Medium', riskLevel: 'Low', proof: 'Photo / Log', location: 'Common Areas' },
                    { id: 'SEM-003', description: "Implement Water Conservation Measures", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'SEM-004', description: "Explore Renewable Energy Opportunities", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'SEM-005', description: "Quarterly Carbon Footprint Reporting", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Facility Office' }
                ]
            },
            {
                title: "🚗 Fleet - Parking - Transport",
                department: "Admin",
                frequency: "Daily",
                role: "Transport Manager",
                summary: "Manages all aspects of corporate transport, from fleet maintenance to parking management and shuttle services.",
                tasks: [
                    { id: 'FPT-001', description: "Daily Vehicle and Driver Fitness Check", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Parking Area' },
                    { id: 'FPT-002', description: "Weekly Fuel and Mileage Reconciliation", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Parking Area' },
                    { id: 'FPT-003', description: "Maintain Vehicle Service and Documents", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Parking Area' },
                    { id: 'FPT-004', description: "Manage Employee Shuttle and Transport", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Parking Area' },
                    { id: 'FPT-005', description: "Optimize Parking and Traffic Flow", priority: 'Medium', riskLevel: 'Low', proof: 'Photo / Log', location: 'Parking Area' }
                ]
            },
            {
                title: "🧘 Health - Ergonomics - Employee Experience",
                department: "HR",
                frequency: "Monthly",
                role: "HR Manager",
                summary: "Focuses on employee well-being, from ergonomic workspace design to managing wellness programs and gathering feedback.",
                tasks: [
                    { id: 'HEE-001', description: "Quarterly Ergonomic Risk Assessment", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Office Area' },
                    { id: 'HEE-002', description: "Provide Ergonomic Chairs and Desks", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Office Area' },
                    { id: 'HEE-003', description: "Monthly Employee Wellness Programs", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'HEE-004', description: "Conduct Temperature and IAQ checks", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Office Area' },
                    { id: 'HEE-005', description: "Track and analyze helpdesk tickets", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Facility Office' }
                ]
            },
            {
                title: "🏗️ Projects & CapEx",
                department: "Projects",
                frequency: "As-Needed",
                role: "Projects Manager",
                summary: "The master plan for launching a new office, from clearing the builder's final snag list to IT/security setup and a final deep clean before go-live.",
                tasks: [
                    { id: 'PNC-001', description: "Fresh fit-out project management", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'New Site' },
                    { id: 'PNC-002', description: "Site commissioning and handover", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'New Site' },
                    { id: 'PNC-003', description: "Legacy site decommissioning", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Old Site' },
                    { id: 'PNC-004', description: "Move and relocation management", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'New Site' },
                    { id: 'PNC-005', description: "Snagging and de-snagging process", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'New Site' }
                ]
            },
            {
                title: "⚖️ Compliance & Legal",
                department: "Legal",
                frequency: "Quarterly",
                role: "Legal Counsel",
                summary: "Ensures the facility adheres to all local, state, and national regulations, minimizing legal risk for the organization.",
                tasks: [
                    { id: 'CAL-001', description: "Maintain a Master Compliance Tracker", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'CAL-002', description: "Adherence to building codes and norms", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Facility Office' },
                    { id: 'CAL-003', description: "Track all licenses and certifications", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Facility Office' },
                    { id: 'CAL-004', description: "Validate Insurance and coverage", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Facility Office' }
                ]
            },
            {
                title: "🏢 Multi-site Ops & Reporting",
                department: "Operations",
                frequency: "Weekly",
                role: "Regional FM",
                summary: "Provides a framework for regional managers to oversee multiple facilities, standardize reporting, and compare performance across sites.",
                tasks: [
                    { id: 'MOR-001', description: "Standardize daily MIS and reporting", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Regional Office' },
                    { id: 'MOR-002', description: "Implement a Centralized Helpdesk", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Regional Office' },
                    { id: 'MOR-003', description: "National and Regional command centers", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Regional Office' },
                    { id: 'MOR-004', description: "Deploy a remote site management tool", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Regional Office' },
                    { id: 'MOR-005', description: "Unified Vendor and SLA Management", priority: 'High', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Regional Office' }
                ]
            },
            {
                title: "💡 Special & Innovation Services",
                department: "Admin",
                frequency: "As-Needed",
                role: "Innovation Manager",
                summary: "Focuses on adopting new technologies and services to enhance the workplace experience and improve operational efficiency.",
                tasks: [
                    { id: 'SIS-001', description: "Robotics in housekeeping and security", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'SIS-002', description: "IoT for predictive maintenance", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Utility Rooms' },
                    { id: 'SIS-003', description: "Smart building and automation", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'BMS Room' },
                    { id: 'SIS-004', description: "AI in security and surveillance", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo / Log', location: 'Security Room' },
                    { id: 'SIS-005', description: "Contactless and touchless solutions", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'SIS-006', description: "Workplace experience apps", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Office Area' },
                    { id: 'SIS-007', description: "Drone-based facade cleaning", priority: 'Low', riskLevel: 'High', proof: 'Photo / Log', location: 'Exterior' }
                ]
            }
        ]
    },
    {
        id: 'restaurant_operations_checklist',
        title: "Restaurant Operations Checklist",
        priceUSD: 89.99,
        priceINR: 7999,
        category: "Hospitality",
        description: "The essential HACCP-based toolkit for restaurant owners focused on safety, quality, and efficiency.",
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
                summary: "A critical daily checklist to ensure the kitchen is safe, sanitary, and ready for service, focusing on temperature controls, sanitation, and equipment readiness as per HACCP guidelines.",
                tasks: [
                    { id: 'CK-KO-001', description: "Verify all surfaces (prep tables, cutting boards) are sanitized.", priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Kitchen' },
                    { id: 'CK-KO-002', description: "Check temperatures of all refrigerators and freezers; log readings.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Kitchen' },
                    { id: 'CK-KO-003', description: "Ensure handwashing stations are stocked with soap, paper towels, and hot water.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-KO-004', description: "Calibrate food thermometers using ice-water method.", priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Kitchen' },
                    { id: 'CK-KO-005', description: "Review prep list and conduct a quick check of yesterday's stored prep items for quality and date labels.", priority: 'Medium', riskLevel: 'Medium', proof: 'Prep List Sign-off', location: 'Walk-in' },
                    { id: 'CK-KO-006', description: "Turn on and pre-heat all cooking equipment (ovens, grills, fryers).", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-KO-007', description: "Check for any signs of pests from overnight and report immediately.", priority: 'High', riskLevel: 'High', proof: 'Pest Log', location: 'Kitchen' },
                    { id: 'CK-KO-008', description: "Brief the team on daily specials, 86'd items, and any special instructions.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Kitchen' },
                    { id: 'CK-KO-009', description: "Ensure sanitizer buckets are filled with correct concentration (check with test strips).", priority: 'High', riskLevel: 'Medium', proof: 'Sanitizer Log', location: 'Kitchen'},
                    { id: 'CK-KO-010', description: "Check that all cooking ventilation systems are operational.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen'}
                ]
            },
            {
                title: "📦 Food Receiving & Storage Protocol",
                department: "F&B",
                frequency: "Daily",
                role: "Store Keeper",
                summary: "Manages the first critical control point in food safety. This checklist covers temperature checks, quality inspection, and FIFO storage principles for all incoming goods.",
                tasks: [
                    { id: 'CK-FRS-001', description: "Check temperature of refrigerated/frozen delivery truck upon arrival.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Area' },
                    { id: 'CK-FRS-002', description: "Inspect all incoming products for signs of spoilage, damage, or pest infestation.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Area' },
                    { id: 'CK-FRS-003', description: "Verify that deliveries match the purchase order and invoice.", priority: 'High', riskLevel: 'Medium', proof: 'Invoice Sign-off', location: 'Receiving Area' },
                    { id: 'CK-FRS-004', description: "Check 'use-by' or expiry dates of all items and reject any that are expired.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Area' },
                    { id: 'CK-FRS-005', description: "Move all cold/frozen items to their respective storage areas immediately.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Storage' },
                    { id: 'CK-FRS-006', description: "Implement FIFO (First-In, First-Out) principle when storing new stock.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Storage' },
                    { id: 'CK-FRS-007', description: "Store raw meat, poultry, and fish on the lowest shelves of the refrigerator to prevent cross-contamination.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Walk-in' },
                    { id: 'CK-FRS-008', description: "Ensure all stored food items are covered, labeled, and dated.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Storage' },
                    { id: 'CK-FRS-009', description: "Keep receiving area clean and clear of clutter.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Receiving Area'},
                    { id: 'CK-FRS-010', description: "Reject any packaged goods that are dented, leaking, or damaged.", priority: 'High', riskLevel: 'Medium', proof: 'Receiving Log', location: 'Receiving Area'}
                ]
            },
            {
                title: "🌡️ Daily HACCP & Line Check",
                department: "F&B",
                frequency: "Daily",
                role: "Sous Chef",
                summary: "An ongoing check during service to ensure food safety is maintained on the service line. It covers holding temperatures, staff hygiene, and prevention of cross-contamination.",
                tasks: [
                    { id: 'CK-HLC-001', description: "Check and log temperatures of all hot and cold holding units on the line every 2 hours.", priority: 'High', riskLevel: 'High', proof: 'Line Check Log', location: 'Service Line' },
                    { id: 'CK-HLC-002', description: "Use a calibrated thermometer to check internal temperatures of food items on the line.", priority: 'High', riskLevel: 'High', proof: 'Line Check Log', location: 'Service Line' },
                    { id: 'CK-HLC-003', description: "Ensure each station is stocked with sanitized utensils and separate cutting boards for raw/cooked food.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Service Line' },
                    { id: 'CK-HLC-004', description: "Verify sanitizer bucket concentrations are correct and test strips are available.", priority: 'High', riskLevel: 'Medium', proof: 'Sanitizer Log', location: 'Service Line' },
                    { id: 'CK-HLC-005', description: "Check that all staff are following proper hygiene practices (handwashing, glove use).", priority: 'High', riskLevel: 'High', proof: 'Visual Observation', location: 'Kitchen' },
                    { id: 'CK-HLC-006', description: "Ensure food is being protected from cross-contamination (e.g., using separate tongs for different items).", priority: 'High', riskLevel: 'High', proof: 'Visual Observation', location: 'Kitchen' },
                    { id: 'CK-HLC-007', description: "Check that all food items are correctly labeled and dated in line coolers.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Service Line' },
                    { id: 'CK-HLC-008', description: "Correct any deviations immediately (e.g., reheating food that falls below temp) and document corrective actions taken.", priority: 'High', riskLevel: 'High', proof: 'Corrective Action Log', location: 'Kitchen' },
                    { id: 'CK-HLC-009', description: "Wipe and sanitize spills on the line immediately.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Service Line'},
                    { id: 'CK-HLC-010', description: "Monitor for any staff working while ill and report to manager.", priority: 'High', riskLevel: 'High', proof: 'Manager Notification', location: 'Kitchen'}
                ]
            },
            {
                title: "🧽 Kitchen Closing & Cleaning Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Closing Chef",
                summary: "A detailed protocol for cleaning and shutting down the kitchen to ensure hygiene and safety. It covers food storage, equipment cleaning, surface sanitization, and waste disposal.",
                tasks: [
                    { id: 'CK-KCC-001', description: "Properly cool, cover, label, and store all leftover food.", priority: 'High', riskLevel: 'High', proof: 'Storage Log', location: 'Kitchen' },
                    { id: 'CK-KCC-002', description: "Turn off all cooking equipment (fryers, ovens, grills).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-KCC-003', description: "Clean and sanitize all food prep surfaces, cutting boards, and slicers.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'CK-KCC-004', description: "Empty and clean all fryers; filter oil as required.", priority: 'Medium', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'CK-KCC-005', description: "Clean grills, ovens, and stovetops.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'CK-KCC-006', description: "Break down, clean, and sanitize all service line stations.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Service Line' },
                    { id: 'CK-KCC-007', description: "Sweep and mop all kitchen floors, including under equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-KCC-008', description: "Empty all trash and recycling bins, and take them to the dumpster.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-KCC-009', description: "Run all floor mats through the dishwasher or hose them down.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Dish Pit'},
                    { id: 'CK-KCC-010', description: "Ensure all soiled linens are placed in the designated laundry bins.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Kitchen'}
                ]
            },
            {
                title: "🧑‍🍳 Staff Personal Hygiene Checklist",
                department: "Compliance",
                frequency: "Daily",
                role: "Manager",
                summary: "A checklist to ensure all food handlers are adhering to strict personal hygiene standards to prevent foodborne illness.",
                tasks: [
                    { id: 'CK-SPH-001', description: "Staff are in clean, proper uniform at the start of shift.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-SPH-002', description: "Fingernails are short, clean, and free of nail polish.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-SPH-003', description: "Hair is properly restrained (hat, hairnet).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-SPH-004', description: "No jewelry (except plain wedding band) is worn on hands or wrists.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'CK-SPH-005', description: "Staff wash hands thoroughly at designated times (e.g., after touching face, before starting new task).", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Kitchen' },
                    { id: 'CK-SPH-006', description: "Cuts or wounds on hands are covered with a bandage and a single-use glove.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Kitchen' }
                ]
            },
            {
                title: "🍽️ Dining Room Opening Checklist",
                department: "Front of House",
                frequency: "Daily",
                role: "F&B Manager",
                summary: "Ensures the dining area is perfectly set for service, covering everything from cleanliness and table settings to staff briefings and POS system readiness.",
                tasks: [
                    { id: 'CK-DRO-001', description: "Check cleanliness of entire dining area (floors, windows, furniture).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'CK-DRO-002', description: "Set all tables with polished cutlery, clean glassware, and napkins.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'CK-DRO-003', description: "Check reservation list and prepare any special table arrangements.", priority: 'Medium', riskLevel: 'Medium', proof: 'Reservation System', location: 'Host Stand' },
                    { id: 'CK-DRO-004', description: "Ensure POS system is operational and menus are correct.", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'POS Station' },
                    { id: 'CK-DRO-005', description: "Conduct pre-shift briefing with service staff about specials and service standards.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Dining Room' }
                ]
            },
            {
                title: "🧹 Weekly Deep Cleaning Checklist",
                department: "Hygiene",
                frequency: "Weekly",
                role: "Head Chef",
                summary: "Goes beyond daily cleaning to tackle areas that need periodic, intensive sanitation, such as cleaning hoods, drains, and behind equipment.",
                tasks: [
                    { id: 'CK-WDC-001', description: "Clean and degrease all cooking equipment hoods and filters.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'CK-WDC-002', description: "Pull out all equipment and clean walls and floors behind them.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Kitchen' },
                    { id: 'CK-WDC-003', description: "Delime and sanitize ice machine.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'CK-WDC-004', description: "Clean and sanitize all walk-in refrigerator and freezer shelves and floors.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Storage' },
                    { id: 'CK-WDC-005', description: "Boil out and clean deep fryers.", priority: 'Medium', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'CK-WDC-006', description: "Clean and sanitize all floor drains.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' }
                ]
            },
            {
                title: "🛡️ Monthly Pest Control & Safety Audit",
                department: "Compliance",
                frequency: "Monthly",
                role: "Manager",
                summary: "A proactive audit to prevent pests and ensure key safety equipment is functional and compliant.",
                tasks: [
                    { id: 'CK-MPC-001', description: "Inspect for any signs of pest activity (droppings, gnaw marks) and review pest control operator's report.", priority: 'High', riskLevel: 'High', proof: 'Pest Control Log', location: 'All Areas' },
                    { id: 'CK-MPC-002', description: "Check that all exterior doors are self-closing and have proper seals.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Perimeter' },
                    { id: 'CK-MPC-003', description: "Test fire suppression system in kitchen hoods (if applicable).", priority: 'High', riskLevel: 'High', proof: 'Safety Log', location: 'Kitchen' },
                    { id: 'CK-MPC-004', description: "Check all fire extinguishers for charge and accessibility.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Tags', location: 'All Areas' },
                    { id: 'CK-MPC-005', description: "Ensure first aid kits are fully stocked and accessible.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Check', location: 'Kitchen' }
                ]
            },
            {
                title: "⚠️ Emergency Preparedness Checklist",
                department: "Safety",
                frequency: "Quarterly",
                role: "Manager",
                summary: "Ensures the restaurant and staff are prepared to handle common emergencies like fires or medical incidents.",
                tasks: [
                    { id: 'CK-EP-001', description: "Review fire evacuation plan with all staff.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'All Staff' },
                    { id: 'CK-EP-002', description: "Ensure emergency contact numbers (Fire, Police, Ambulance) are posted clearly.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen/Office' },
                    { id: 'CK-EP-003', description: "Review procedures for handling a customer medical emergency.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'All Staff' },
                    { id: 'CK-EP-004', description: "Check functionality of emergency lighting.", priority: 'High', riskLevel: 'Medium', proof: 'Test Log', location: 'All Areas' }
                ]
            }
        ]
    },
    {
        id: 'jewellery_store_ops',
        title: "Jewellery Store Checklist",
        priceUSD: 189.99,
        priceINR: 7999,
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
                summary: "A high-security protocol for opening the store and vault, requiring two authorized individuals to prevent internal theft and ensure a safe start to the day.",
                tasks: [
                    { id: 'JWL-DOP-001', description: "Two authorized keyholders arrive at the store at separate, staggered times.", priority: 'High', riskLevel: 'High', proof: 'CCTV/Access Log', location: 'Store Entrance' },
                    { id: 'JWL-DOP-002', description: "First keyholder performs an external perimeter check for any signs of tampering.", priority: 'High', riskLevel: 'High', proof: 'Visual Check Log', location: 'Store Exterior' },
                    { id: 'JWL-DOP-003', description: "First keyholder enters, disarms the initial alarm, and performs an internal check.", priority: 'High', riskLevel: 'High', proof: 'Alarm Log', location: 'Store Interior' },
                    { id: 'JWL-DOP-004', description: "Second keyholder enters after receiving an 'all-clear' signal.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Store Entrance' },
                    { id: 'JWL-DOP-005', description: "Both keyholders proceed to the vault together.", priority: 'High', riskLevel: 'High', proof: 'CCTV Review', location: 'To Vault' },
                    { id: 'JWL-DOP-006', description: "Use dual keys/codes to open the vault. One person should not have access to both.", priority: 'High', riskLevel: 'High', proof: 'CCTV/Access Log', location: 'Vault' },
                    { id: 'JWL-DOP-007', description: "Inspect vault interior for any signs of tampering before removing merchandise.", priority: 'High', riskLevel: 'High', proof: 'Visual Check Log', location: 'Vault' },
                    { id: 'JWL-DOP-008', description: "Remove merchandise trays for display and log the removal.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Log', location: 'Vault' },
                    { id: 'JWL-DOP-009', description: "Test all silent panic alarms and hold-up buttons.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Store Interior' },
                    { id: 'JWL-DOP-010', description: "Activate all display case lighting and check for functioning CCTV cameras on the sales floor.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' }
                ]
            },
            {
                title: "🔒 Daily Closing Procedure (Dual Control)",
                department: "Security",
                frequency: "Daily",
                role: "Store Manager",
                summary: "A rigorous process for inventory reconciliation and securing all high-value items in the vault at the end of the day, again using a two-person integrity system.",
                tasks: [
                    { id: 'JWL-DCP-001', description: "Announce store closing to any remaining customers 15 minutes prior.", priority: 'Low', riskLevel: 'Low', proof: 'Verbal', location: 'Sales Floor' },
                    { id: 'JWL-DCP-002', description: "Lock main entrance. No new customers allowed in.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Store Entrance' },
                    { id: 'JWL-DCP-003', description: "Reconcile physical inventory in display cases against the daily sales record.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Sheet', location: 'Sales Floor' },
                    { id: 'JWL-DCP-004', description: "Return all merchandise trays to the vault under dual supervision.", priority: 'High', riskLevel: 'High', proof: 'CCTV/Inventory Log', location: 'Vault' },
                    { id: 'JWL-DCP-005', description: "Conduct a final count/check of items inside the vault against the log.", priority: 'High', riskLevel: 'High', proof: 'Vault Log', location: 'Vault' },
                    { id: 'JWL-DCP-006', description: "Lock the vault using dual-control procedures.", priority: 'High', riskLevel: 'High', proof: 'CCTV/Access Log', location: 'Vault' },
                    { id: 'JWL-DCP-007', description: "Clear all cash from registers and secure in a safe or deposit bag as per policy.", priority: 'High', riskLevel: 'High', proof: 'Cash Reconciliation Log', location: 'Cash Office' },
                    { id: 'JWL-DCP-008', description: "Perform a final walkthrough of the store to ensure no one is left inside.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Store Interior' },
                    { id: 'JWL-DCP-009', description: "Set the main alarm system. Both keyholders exit.", priority: 'High', riskLevel: 'High', proof: 'Alarm Log', location: 'Store Exit' },
                    { id: 'JWL-DCP-010', description: "Confirm the alarm is set by checking the app or monitoring service.", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Off-site' }
                ]
            },
            {
                title: "🛍️ Ongoing Security & Sales Floor Protocol",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                summary: "Defines rules for handling jewellery on the sales floor, such as showing one item at a time, managing displays, and identifying suspicious behavior to prevent grab-and-run theft.",
                tasks: [
                    { id: 'JWL-SFP-001', description: "Greet every customer who enters the store to establish presence.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Sales Floor' },
                    { id: 'JWL-SFP-002', description: "Show only one high-value item (or one tray) at a time.", priority: 'High', riskLevel: 'High', proof: 'CCTV Review', location: 'Sales Counter' },
                    { id: 'JWL-SFP-003', description: "Always return one item to the display/case before showing the next.", priority: 'High', riskLevel: 'High', proof: 'CCTV Review', location: 'Sales Counter' },
                    { id: 'JWL-SFP-004', description: "Keep display cases locked when not actively showing merchandise.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'JWL-SFP-005', description: "Be aware of customers creating distractions or working in groups.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Sales Floor' },
                    { id: 'JWL-SFP-006', description: "Use a code word or signal to alert other staff/security of suspicious behavior.", priority: 'High', riskLevel: 'High', proof: 'Training Log', location: 'Sales Floor' },
                    { id: 'JWL-SFP-007', description: "For high-value sales, require a second staff member to be present.", priority: 'Medium', riskLevel: 'High', proof: 'CCTV Review', location: 'Sales Counter' },
                    { id: 'JWL-SFP-008', description: "Verify authenticity of large cash payments and check ID for large credit card transactions.", priority: 'High', riskLevel: 'High', proof: 'Transaction Log', location: 'POS' }
                ]
            },
            {
                title: "🛡️ Weekly Security & Maintenance Audit",
                department: "Security",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "A weekly audit of all security systems, including CCTV, panic buttons, and alarms, to ensure they are fully functional and to schedule any necessary maintenance.",
                tasks: [
                    { id: 'JWL-WSA-001', description: "Test all panic buttons (silent and audible) and verify they trigger a response from the monitoring company.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Security Office' },
                    { id: 'JWL-WSA-002', description: "Review CCTV footage from all cameras to check for blind spots, correct angles, and clear images.", priority: 'High', riskLevel: 'High', proof: 'Footage Review Log', location: 'Security Office' },
                    { id: 'JWL-WSA-003', description: "Inspect all door and window sensors and magnetic locks for functionality.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Perimeter' },
                    { id: 'JWL-WSA-004', description: "Check the health and battery backup of the main alarm panel and DVR/NVR.", priority: 'High', riskLevel: 'High', proof: 'System Check Log', location: 'Security Office' },
                    { id: 'JWL-WSA-005', description: "Inspect physical security of display cases (locks, glass integrity).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection Log', location: 'Sales Floor' },
                    { id: 'JWL-WSA-006', description: "Conduct a brief security drill or review a 'what-if' scenario with staff (e.g., grab-and-run).", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'Sales Floor' },
                    { id: 'JWL-WSA-007', description: "Verify that the security monitoring company has up-to-date contact information for keyholders.", priority: 'High', riskLevel: 'Medium', proof: 'Confirmation Email', location: 'Security Office' }
                ]
            }
        ]
    },
    {
        id: 'pharmacy_ops_compliance',
        title: "Pharmacy Checklist",
        priceUSD: 189.99,
        priceINR: 7999,
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
                summary: "Ensures the pharmacy is ready for safe operation, covering temperature logs for medicines, equipment calibration, and checks of controlled substance records.",
                tasks: [
                    { id: 'PH-DO-001', description: "Record refrigerator and freezer temperatures. Ensure they are within range (2-8°C for fridge).", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Dispensary' },
                    { id: 'PH-DO-002', description: "Check and clear any pending tasks or messages from the pharmacy software system.", priority: 'Medium', riskLevel: 'Low', proof: 'System Check', location: 'Dispensary' },
                    { id: 'PH-DO-003', description: "Ensure all workstations are clean, sanitized, and free of clutter.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dispensary' },
                    { id: 'PH-DO-004', description: "Calibrate pill counting machine if applicable.", priority: 'Medium', riskLevel: 'Medium', proof: 'Calibration Log', location: 'Dispensary' },
                    { id: 'PH-DO-005', description: "Review handover notes from the previous shift for any pending issues.", priority: 'High', riskLevel: 'Medium', proof: 'Handover Log', location: 'Dispensary' },
                    { id: 'PH-DO-006', description: "Check that all prescription pads, labels, and bags are adequately stocked.", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Dispensary' }
                ]
            },
            {
                title: "💊 Prescription Filling & Verification (The 'Five Rights')",
                department: "Operations",
                frequency: "As-Needed",
                role: "Pharmacist",
                summary: "A zero-error protocol for dispensing medication, verifying the 'Five Rights': Right Patient, Right Drug, Right Dose, Right Route, and Right Time.",
                tasks: [
                    { id: 'PH-PFV-001', description: "Right Patient: Verify patient identity using two identifiers (e.g., name and date of birth).", priority: 'High', riskLevel: 'High', proof: 'System/Verbal Check', location: 'Counter' },
                    { id: 'PH-PFV-002', description: "Right Drug: Check prescription against the drug label three times (when picking, dispensing, and giving).", priority: 'High', riskLevel: 'High', proof: 'Dispensing Log', location: 'Dispensary' },
                    { id: 'PH-PFV-003', description: "Right Dose: Double-check the dosage calculation, especially for pediatric or high-risk medications.", priority: 'High', riskLevel: 'High', proof: 'Calculation Sheet', location: 'Dispensary' },
                    { id: 'PH-PFV-004', description: "Right Route: Confirm the route of administration (oral, topical, etc.) as per the prescription.", priority: 'High', riskLevel: 'Medium', proof: 'Prescription Check', location: 'Dispensary' },
                    { id: 'PH-PFV-005', description: "Right Time: Check the frequency and timing of the medication.", priority: 'High', riskLevel: 'Medium', proof: 'Prescription Check', location: 'Dispensary' },
                    { id: 'PH-PFV-006', description: "Check for potential drug interactions or allergies in the patient's profile.", priority: 'High', riskLevel: 'High', proof: 'System Alert Review', location: 'Dispensary' },
                    { id: 'PH-PFV-007', description: "Ensure a final check by a second person (pharmacist) before handing over the medication.", priority: 'High', riskLevel: 'High', proof: 'Second Sign-off', location: 'Dispensary' }
                ]
            },
            {
                title: "📦 Inventory & Controlled Substances (Zero-Error Protocol)",
                department: "Inventory",
                frequency: "Daily",
                role: "Pharmacist",
                summary: "A rigorous checklist for managing narcotics and other controlled substances, covering inventory counts, discrepancy reporting, and secure storage to prevent diversion.",
                tasks: [
                    { id: 'PH-ICS-001', description: "Conduct a daily physical count of all Schedule H/X or narcotic drugs.", priority: 'High', riskLevel: 'High', proof: 'Narcotics Register', location: 'Safe' },
                    { id: 'PH-ICS-002', description: "Reconcile the physical count with the perpetual inventory records in the software.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Log', location: 'Dispensary' },
                    { id: 'PH-ICS-003', description: "Report any discrepancies immediately to the pharmacist-in-charge and document.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Dispensary' },
                    { id: 'PH-ICS-004', description: "Ensure all controlled substances are stored in a securely locked, dedicated safe or cabinet.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Safe' },
                    { id: 'PH-ICS-005', description: "Check for expired drugs in the inventory monthly and segregate them for disposal/return.", priority: 'High', riskLevel: 'Medium', proof: 'Expiry Log', location: 'Stock Room' },
                    { id: 'PH-ICS-006', description: "Receive and document incoming controlled substance orders, verifying against purchase orders.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Dispensary' }
                ]
            },
            {
                title: "🌙 Closing Procedures & Data Security",
                department: "Operations",
                frequency: "Daily",
                role: "Pharmacist",
                summary: "A secure process for closing the pharmacy, including end-of-day reports, data backups for patient records, and securing all medications and confidential information.",
                tasks: [
                    { id: 'PH-CP-001', description: "Complete end-of-day financial reconciliation and close the cash register.", priority: 'High', riskLevel: 'Medium', proof: 'POS Report', location: 'Counter' },
                    { id: 'PH-CP-002', description: "Ensure all filled but uncollected prescriptions are stored securely.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dispensary' },
                    { id: 'PH-CP-003', description: "Log off all computer terminals and secure patient data.", priority: 'High', riskLevel: 'High', proof: 'System Log-off', location: 'Dispensary' },
                    { id: 'PH-CP-004', description: "Run a daily backup of the pharmacy management software.", priority: 'High', riskLevel: 'High', proof: 'Backup Log', location: 'Server' },
                    { id: 'PH-CP-005', description: "Secure all physical documents containing patient information (prescriptions, records).", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Dispensary' },
                    { id: 'PH-CP-006', description: "Lock the controlled substance safe.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Safe' },
                    { id: 'PH-CP-007', description: "Set the pharmacy's security alarm and lock all doors.", priority: 'High', riskLevel: 'High', proof: 'Alarm Log', location: 'Exit' }
                ]
            }
        ]
    },
    {
        id: 'hospital_administration_ops',
        title: "Hospital Administration Checklist",
        priceUSD: 249.99,
        priceINR: 7999,
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
                summary: "A step-by-step process to ensure patient admissions and discharges are handled efficiently, accurately, and with clear communication, covering everything from paperwork to patient education.",
                tasks: [
                    { id: 'HOS-PAD-001', description: "Verify patient identity and insurance details.", priority: 'High', riskLevel: 'High', proof: 'ID/Insurance Card Copy', location: 'Admissions Desk' },
                    { id: 'HOS-PAD-002', description: "Obtain all necessary consent forms, signed and witnessed.", priority: 'High', riskLevel: 'High', proof: 'Signed Consent Forms', location: 'Admissions Desk' },
                    { id: 'HOS-PAD-003', description: "Assign a Unique Patient Identification Number (UPID).", priority: 'High', riskLevel: 'Medium', proof: 'System Entry', location: 'Admissions Desk' },
                    { id: 'HOS-PAD-004', description: "Coordinate with the ward to ensure bed availability.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Log', location: 'Admissions Desk' },
                    { id: 'HOS-PAD-005', description: "Explain hospital policies, visiting hours, and charges to the patient/family.", priority: 'Medium', riskLevel: 'Low', proof: 'Signed Acknowledgement', location: 'Admissions Desk' },
                    { id: 'HOS-PAD-006', description: "For discharge, confirm 'fit for discharge' from the treating doctor.", priority: 'High', riskLevel: 'High', proof: 'Discharge Summary', location: 'Ward' },
                    { id: 'HOS-PAD-007', description: "Ensure final bill is cleared and all required documents are handed over.", priority: 'High', riskLevel: 'High', proof: 'Final Bill Receipt', location: 'Billing Desk' },
                    { id: 'HOS-PAD-008', description: "Provide post-discharge instructions and follow-up appointment details.", priority: 'High', riskLevel: 'Medium', proof: 'Discharge Summary', location: 'Ward' }
                ]
            },
            {
                title: "🔪 Surgical Suite / Operating Theatre (OT) Readiness",
                department: "Surgery",
                frequency: "Daily",
                role: "OT Nurse",
                summary: "A critical, zero-compromise checklist to ensure the operating theatre is sterile, and all equipment is functional and ready for surgery, directly impacting patient safety.",
                tasks: [
                    { id: 'HOS-OTR-001', description: "Verify OT is terminally cleaned and sanitized.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Operating Theatre' },
                    { id: 'HOS-OTR-002', description: "Check functionality of all equipment (anesthesia machine, monitors, surgical lights).", priority: 'High', riskLevel: 'High', proof: 'Equipment Checklist', location: 'Operating Theatre' },
                    { id: 'HOS-OTR-003', description: "Ensure all sterile instrument sets for the day's surgeries are available and have passed sterility tests.", priority: 'High', riskLevel: 'High', proof: 'Sterility Indicator Check', location: 'OT' },
                    { id: 'HOS-OTR-004', description: "Confirm availability of all required medicines, sutures, and disposables.", priority: 'High', riskLevel: 'High', proof: 'Inventory Check', location: 'OT' },
                    { id: 'HOS-OTR-005', description: "Check OT temperature, humidity, and positive pressure levels.", priority: 'High', riskLevel: 'Medium', proof: 'Environment Log', location: 'OT' },
                    { id: 'HOS-OTR-006', description: "Conduct WHO Surgical Safety Checklist (Sign In, Time Out, Sign Out) for every case.", priority: 'High', riskLevel: 'High', proof: 'Signed Checklist', location: 'OT' },
                    { id: 'HOS-OTR-007', description: "Ensure emergency crash cart is fully stocked and defibrillator is functional.", priority: 'High', riskLevel: 'High', proof: 'Crash Cart Checklist', location: 'OT' },
                    { id: 'HOS-OTR-008', description: "Verify patient identity, surgical site marking, and consent before shifting patient in.", priority: 'High', riskLevel: 'High', proof: 'Patient File', location: 'Pre-op Area' }
                ]
            },
            {
                title: "🚑 Emergency Room (ER) Management",
                department: "Emergency",
                frequency: "Daily",
                role: "ER Manager",
                summary: "Manages the 'golden hour' of patient care. This checklist ensures the ER is always ready, from triage area setup and equipment checks to staffing and communication systems.",
                tasks: [
                    { id: 'HOS-ERM-001', description: "Check that the triage area is clear and ready for patient arrival.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Triage Area' },
                    { id: 'HOS-ERM-002', description: "Ensure all ER beds are clean, stocked, and ready.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'ER Bays' },
                    { id: 'HOS-ERM-003', description: "Verify crash cart, intubation kits, and other life-saving equipment are checked and ready.", priority: 'High', riskLevel: 'High', proof: 'ER Equipment Log', location: 'ER' },
                    { id: 'HOS-ERM-004', description: "Confirm communication systems (phones, pagers, ambulance hotline) are working.", priority: 'High', riskLevel: 'High', proof: 'System Test Log', location: 'ER' },
                    { id: 'HOS-ERM-005', description: "Review staffing levels for the shift and make adjustments as needed.", priority: 'High', riskLevel: 'Medium', proof: 'Roster Check', location: 'ER' },
                    { id: 'HOS-ERM-006', description: "Ensure security personnel are present and briefed.", priority: 'High', riskLevel: 'Medium', proof: 'Security Briefing Log', location: 'ER' },
                    { id: 'HOS-ERM-007', description: "Check stock levels of critical medicines and consumables.", priority: 'High', riskLevel: 'High', proof: 'Inventory Check', location: 'ER Pharmacy' },
                    { id: 'HOS-ERM-008', description: "Review any pending cases or handovers from the previous shift.", priority: 'High', riskLevel: 'Medium', proof: 'Handover Log', location: 'ER' }
                ]
            },
            {
                title: "🦠 Infection Control & Compliance",
                department: "Compliance",
                frequency: "Daily",
                role: "Infection Control Nurse",
                summary: "A proactive checklist to prevent hospital-acquired infections (HAIs). It includes audits for hand hygiene, biomedical waste, PPE usage, and sterilization processes.",
                tasks: [
                    { id: 'HOS-ICC-001', description: "Conduct hand hygiene audits in various departments.", priority: 'High', riskLevel: 'High', proof: 'Audit Form', location: 'All Wards' },
                    { id: 'HOS-ICC-002', description: "Monitor biomedical waste segregation and disposal processes.", priority: 'High', riskLevel: 'High', proof: 'Observation Checklist', location: 'All Wards' },
                    { id: 'HOS-ICC-003', description: "Check adherence to PPE protocols in high-risk areas (ICU, OT, ER).", priority: 'High', riskLevel: 'High', proof: 'Observation Checklist', location: 'High-Risk Areas' },
                    { id: 'HOS-ICC-004', description: "Review sterilization records from the Central Sterile Supply Department (CSSD).", priority: 'High', riskLevel: 'High', proof: 'CSSD Log Review', location: 'CSSD' },
                    { id: 'HOS-ICC-005', description: "Investigate any reported instances of hospital-acquired infections (HAI).", priority: 'High', riskLevel: 'High', proof: 'Investigation Report', location: 'All Wards' },
                    { id: 'HOS-ICC-006', description: "Ensure environmental cleaning and disinfection protocols are being followed.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log Review', location: 'All Wards' },
                    { id: 'HOS-ICC-007', description: "Provide just-in-time training on infection control practices to staff.", priority: 'Medium', riskLevel: 'Medium', proof: 'Training Log', location: 'All Wards' },
                    { id: 'HOS-ICC-008', description: "Check isolation precautions are being correctly implemented for infectious patients.", priority: 'High', riskLevel: 'High', proof: 'Isolation Room Audit', location: 'Isolation Ward' }
                ]
            }
        ]
    },
    {
        id: 'private_clinic_ops',
        title: "Private Clinic & Outpatient Facility Checklist",
        priceUSD: 189.99,
        priceINR: 7999,
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
                summary: "Ensures the clinic is prepared for patients, covering everything from appointment schedules and equipment checks to ensuring the waiting area is clean and welcoming.",
                tasks: [
                    { id: 'PC-DOP-001', description: "Review the day's appointment schedule and flag any special cases.", priority: 'High', riskLevel: 'Medium', proof: 'Appointment System', location: 'Reception' },
                    { id: 'PC-DOP-002', description: "Ensure waiting area is clean, tidy, and has reading material.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Waiting Area' },
                    { id: 'PC-DOP-003', description: "Check that all clinical equipment is functional (e.g., BP machine, dental chair).", priority: 'High', riskLevel: 'High', proof: 'Equipment Log', location: 'Consultation Rooms' },
                    { id: 'PC-DOP-004', description: "Verify all consultation and procedure rooms are clean and stocked with consumables.", priority: 'High', riskLevel: 'Medium', proof: 'Room Checklist', location: 'Consultation Rooms' },
                    { id: 'PC-DOP-005', description: "Boot up all computers and ensure billing and EMR software is running.", priority: 'High', riskLevel: 'Medium', proof: 'System Check', location: 'Reception' },
                    { id: 'PC-DOP-006', description: "Check that emergency first aid kit is stocked and accessible.", priority: 'High', riskLevel: 'High', proof: 'Inventory Check', location: 'Reception' }
                ]
            },
            {
                title: "➡️ Patient Flow & Experience",
                department: "Front Office",
                frequency: "Daily",
                role: "Receptionist",
                summary: "Manages the patient journey from registration to check-out, aiming to minimize wait times, handle paperwork efficiently, and ensure a positive patient experience.",
                tasks: [
                    { id: 'PC-PFE-001', description: "Greet patients warmly upon arrival.", priority: 'High', riskLevel: 'Low', proof: 'Observation', location: 'Reception' },
                    { id: 'PC-PFE-002', description: "Verify patient details and update any changes in the EMR.", priority: 'High', riskLevel: 'Medium', proof: 'System Entry', location: 'Reception' },
                    { id: 'PC-PFE-003', description: "Efficiently manage new patient registration and form filling.", priority: 'High', riskLevel: 'Medium', proof: 'Completed Forms', location: 'Reception' },
                    { id: 'PC-PFE-004', description: "Inform patients of any potential delays and manage waiting times effectively.", priority: 'High', riskLevel: 'Medium', proof: 'Verbal Communication', location: 'Waiting Area' },
                    { id: 'PC-PFE-005', description: "Schedule follow-up appointments accurately.", priority: 'Medium', riskLevel: 'Medium', proof: 'Appointment System', location: 'Reception' },
                    { id: 'PC-PFE-006', description: "Handle patient inquiries and phone calls professionally.", priority: 'High', riskLevel: 'Medium', proof: 'Call Log', location: 'Reception' }
                ]
            },
            {
                title: "🧼 Clinical Safety & Sterilization",
                department: "Clinical",
                frequency: "Daily",
                role: "Nurse",
                summary: "A critical checklist for maintaining a sterile environment, covering instrument sterilization, surface disinfection, and proper disposal of biomedical waste between patients.",
                tasks: [
                    { id: 'PC-CSS-001', description: "Ensure all used instruments are sent for sterilization after each patient.", priority: 'High', riskLevel: 'High', proof: 'Sterilization Log', location: 'Sterilization Room' },
                    { id: 'PC-CSS-002', description: "Disinfect all surfaces in the consultation/procedure room between patients (chair, counters).", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Consultation Rooms' },
                    { id: 'PC-CSS-003', description: "Run and document daily checks on the autoclave/sterilizer machine.", priority: 'High', riskLevel: 'High', proof: 'Autoclave Log', location: 'Sterilization Room' },
                    { id: 'PC-CSS-004', description: "Properly segregate and dispose of biomedical waste (sharps, contaminated items).", priority: 'High', riskLevel: 'High', proof: 'Waste Log', location: 'Clinical Rooms' },
                    { id: 'PC-CSS-005', description: "Adhere to hand hygiene protocols before and after patient contact.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Clinical Rooms' }
                ]
            },
            {
                title: "💵 Billing & Administration",
                department: "Finance",
                frequency: "Daily",
                role: "Billing Executive",
                summary: "Ensures accurate and timely billing, from generating invoices and processing payments to handling insurance claims and end-of-day financial reconciliation.",
                tasks: [
                    { id: 'PC-BA-001', description: "Generate accurate invoices for all consultations and procedures.", priority: 'High', riskLevel: 'High', proof: 'Invoice Copy', location: 'Billing Desk' },
                    { id: 'PC-BA-002', description: "Process payments (cash, card, insurance) and issue receipts.", priority: 'High', riskLevel: 'High', proof: 'Payment Receipt', location: 'Billing Desk' },
                    { id: 'PC-BA-003', description: "Prepare and submit insurance claim forms with all necessary documentation.", priority: 'High', riskLevel: 'High', proof: 'Claim Submission Log', location: 'Billing Desk' },
                    { id: 'PC-BA-004', description: "Perform end-of-day reconciliation of all cash and card transactions.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Billing Desk' },
                    { id: 'PC-BA-005', description: "Follow up on any outstanding payments or rejected insurance claims.", priority: 'Medium', riskLevel: 'High', proof: 'Follow-up Log', location: 'Billing Desk' }
                ]
            }
        ]
    },
    {
        id: 'diagnostic_lab_ops',
        title: "Diagnostic Lab Checklist",
        priceUSD: 199.99,
        priceINR: 7999,
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
                summary: "Ensures all diagnostic equipment is precisely calibrated and quality control checks are performed before processing any patient samples, guaranteeing result accuracy.",
                tasks: [
                    { id: 'DL-MSC-001', description: "Run daily quality control (QC) samples for all analyzers.", priority: 'High', riskLevel: 'High', proof: 'QC Log', location: 'Lab' },
                    { id: 'DL-MSC-002', description: "Verify that QC results are within acceptable ranges before releasing any patient results.", priority: 'High', riskLevel: 'High', proof: 'QC Log', location: 'Lab' },
                    { id: 'DL-MSC-003', description: "Calibrate instruments as per manufacturer's guidelines or if QC fails.", priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Lab' },
                    { id: 'DL-MSC-004', description: "Check and record temperatures of all refrigerators, freezers, and incubators.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Lab' },
                    { id: 'DL-MSC-005', description: "Ensure adequate stock of reagents and consumables for the day's workload.", priority: 'Medium', riskLevel: 'Medium', proof: 'Inventory Check', location: 'Lab' }
                ]
            },
            {
                title: "🩸 Sample Management & Processing (Patient Safety First)",
                department: "Operations",
                frequency: "As-Needed",
                role: "Lab Technician",
                summary: "A rigorous protocol for handling patient samples, from receiving and labeling (accessioning) to processing, to eliminate the risk of mix-ups or contamination.",
                tasks: [
                    { id: 'DL-SMP-001', description: "Verify patient identification on sample container matches the test requisition form.", priority: 'High', riskLevel: 'High', proof: 'Accessioning Log', location: 'Sample Receiving' },
                    { id: 'DL-SMP-002', description: "Check sample for acceptability (e.g., correct container, sufficient volume, no hemolysis).", priority: 'High', riskLevel: 'High', proof: 'Sample Rejection Log', location: 'Sample Receiving' },
                    { id: 'DL-SMP-003', description: "Assign a unique lab number to each sample (Accessioning).", priority: 'High', riskLevel: 'High', proof: 'LIS Entry', location: 'Sample Receiving' },
                    { id: 'DL-SMP-004', description: "Follow specific processing instructions for each test (e.g., centrifugation, separation).", priority: 'High', riskLevel: 'Medium', proof: 'SOP Manual', location: 'Lab' },
                    { id: 'DL-SMP-005', description: "Ensure proper personal protective equipment (PPE) is used when handling all samples.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Lab' }
                ]
            },
            {
                title: "📈 Data, Reporting & Critical Value Communication",
                department: "Reporting",
                frequency: "Daily",
                role: "Senior Technician",
                summary: "Defines the process for accurate data entry, report generation, and—most importantly—the immediate communication of critical or life-threatening results to doctors.",
                tasks: [
                    { id: 'DL-DRC-001', description: "Ensure patient results are accurately entered into the Laboratory Information System (LIS).", priority: 'High', riskLevel: 'High', proof: 'Data Entry Review', location: 'Lab' },
                    { id: 'DL-DRC-002', description: "Review and approve reports before printing or digital release.", priority: 'High', riskLevel: 'High', proof: 'LIS Approval Stamp', location: 'Lab' },
                    { id: 'DL-DRC-003', description: "Immediately notify the referring physician of any 'critical value' results by phone.", priority: 'High', riskLevel: 'High', proof: 'Critical Value Log', location: 'Lab' },
                    { id: 'DL-DRC-004', description: "Document the time of notification and the person notified for all critical values.", priority: 'High', riskLevel: 'High', proof: 'Critical Value Log', location: 'Lab' },
                    { id: 'DL-DRC-005', description: "Ensure reports are dispatched to patients/clinics within the stated turnaround time.", priority: 'Medium', riskLevel: 'Medium', proof: 'Dispatch Log', location: 'Reporting' }
                ]
            },
            {
                title: "🗑️ End of Day & Biohazard Management",
                department: "Operations",
                frequency: "Daily",
                role: "Lab Supervisor",
                summary: "Ensures the lab is safely shut down, all samples are properly stored or disposed of, and all biohazardous waste is managed according to strict regulatory standards.",
                tasks: [
                    { id: 'DL-EBM-001', description: "Archive or properly store all tested samples for the required duration.", priority: 'High', riskLevel: 'Medium', proof: 'Storage Log', location: 'Storage' },
                    { id: 'DL-EBM-002', description: "Safely dispose of all biohazardous waste in designated, color-coded bags/containers.", priority: 'High', riskLevel: 'High', proof: 'Waste Disposal Log', location: 'Lab' },
                    { id: 'DL-EBM-003', description: "Decontaminate all work surfaces and equipment at the end of the day.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Lab' },
                    { id: 'DL-EBM-004', description: "Turn off all analyzers and equipment as per shutdown procedures.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Lab' },
                    { id: 'DL-EBM-005', description: "Secure the lab premises, ensuring all doors are locked.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Lab' }
                ]
            }
        ]
    },
    {
        id: 'gym_fitness_center_ops',
        title: "Gym & Fitness Center Checklist",
        priceUSD: 79.99,
        priceINR: 7999,
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
                summary: "A daily walkthrough to ensure the gym is safe and ready for members, covering equipment functionality, cleanliness of all areas, and stocking of amenities.",
                tasks: [
                    { id: 'GYM-DOS-001', description: "Inspect all cardio and strength equipment for visible signs of wear, tear, or damage.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Gym Floor' },
                    { id: 'GYM-DOS-002', description: "Place 'Out of Order' signs on any malfunctioning equipment and log for maintenance.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Log', location: 'Gym Floor' },
                    { id: 'GYM-DOS-003', description: "Ensure gym floor is clean, dry, and free of hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Gym Floor' },
                    { id: 'GYM-DOS-004', description: "Check that locker rooms, showers, and restrooms are clean and fully stocked.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Locker Rooms' },
                    { id: 'GYM-DOS-005', description: "Verify first aid stations are stocked and accessible.", priority: 'High', riskLevel: 'High', proof: 'Inventory Check', location: 'Reception' },
                    { id: 'GYM-DOS-006', description: "Check that music and TV systems are operational.", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Gym Floor' }
                ]
            },
            {
                title: "🤝 Member Management & Customer Experience",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                summary: "Standardizes the process for new member sign-ups, orientations, and addressing existing member feedback to improve retention and satisfaction.",
                tasks: [
                    { id: 'GYM-MM-001', description: "Provide tours to prospective members, explaining facilities and membership options.", priority: 'High', riskLevel: 'Low', proof: 'CRM Log', location: 'Gym' },
                    { id: 'GYM-MM-002', description: "Efficiently process new member sign-ups and payments.", priority: 'High', riskLevel: 'Medium', proof: 'Membership Form', location: 'Reception' },
                    { id: 'GYM-MM-003', description: "Offer a basic orientation to new members on how to use key equipment safely.", priority: 'Medium', riskLevel: 'Medium', proof: 'Orientation Sign-off', location: 'Gym Floor' },
                    { id: 'GYM-MM-004', description: "Actively solicit and log member feedback or complaints.", priority: 'Medium', riskLevel: 'Medium', proof: 'Feedback Log', location: 'Reception' },
                    { id: 'GYM-MM-005', description: "Manage membership freezes, cancellations, and renewals.", priority: 'Medium', riskLevel: 'Medium', proof: 'System Entry', location: 'Reception' }
                ]
            },
            {
                title: "📅 Class & Staff Management",
                department: "Operations",
                frequency: "Daily",
                role: "Gym Manager",
                summary: "Manages group fitness classes and staff schedules, ensuring classes start on time, instructors are prepared, and staffing levels are adequate for peak hours.",
                tasks: [
                    { id: 'GYM-CSM-001', description: "Confirm group fitness schedule for the day and check for any instructor changes.", priority: 'High', riskLevel: 'Medium', proof: 'Schedule Review', location: 'Manager Office' },
                    { id: 'GYM-CSM-002', description: "Ensure group fitness studio is clean and set up for the first class (mats, weights, etc.).", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Studio' },
                    { id: 'GYM-CSM-003', description: "Review staff roster to ensure adequate coverage on the gym floor and at reception.", priority: 'High', riskLevel: 'Medium', proof: 'Roster Check', location: 'Manager Office' },
                    { id: 'GYM-CSM-004', description: "Conduct a brief daily huddle with staff to discuss goals and member feedback.", priority: 'Medium', riskLevel: 'Low', proof: 'Huddle Log', location: 'Manager Office' }
                ]
            },
            {
                title: "🌙 Closing Procedures & Security",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Staff",
                summary: "A systematic process for closing the gym, including final cleaning sweeps, securing the premises, and end-of-day financial reconciliation.",
                tasks: [
                    { id: 'GYM-CPS-001', description: "Announce closing time to members 15 minutes prior.", priority: 'Low', riskLevel: 'Low', proof: 'Verbal', location: 'Gym Floor' },
                    { id: 'GYM-CPS-002', description: "Perform a final walkthrough to ensure all members have left.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Entire Facility' },
                    { id: 'GYM-CPS-003', description: "Re-rack all weights and tidy up the gym floor.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Gym Floor' },
                    { id: 'GYM-CPS-004', description: "Turn off music, TVs, and non-essential lights.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Entire Facility' },
                    { id: 'GYM-CPS-005', description: "Complete end-of-day cash reconciliation.", priority: 'High', riskLevel: 'High', proof: 'POS Report', location: 'Reception' },
                    { id: 'GYM-CPS-006', description: "Lock all doors and set the security alarm.", priority: 'High', riskLevel: 'High', proof: 'Alarm Log', location: 'Exit' }
                ]
            }
        ]
    },
    {
        id: 'salon_spa_ops',
        title: "Salon & Day Spa Checklist",
        priceUSD: 69.99,
        priceINR: 7999,
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
                summary: "Ensures the salon meets health and safety standards before the first client arrives, covering sterilization of tools, cleanliness of stations, and fresh linen.",
                tasks: [
                    { id: 'SPA-DOH-001', description: "Disinfect all workstations, chairs, and basins.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Salon Floor' },
                    { id: 'SPA-DOH-002', description: "Ensure all tools (scissors, combs, brushes) are properly sterilized and stored.", priority: 'High', riskLevel: 'High', proof: 'Sterilization Log', location: 'Workstations' },
                    { id: 'SPA-DOH-003', description: "Check that all towels and capes are clean and freshly laundered.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Storage' },
                    { id: 'SPA-DOH-004', description: "Ensure treatment rooms are clean, tidy, and have fresh linen.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Treatment Rooms' },
                    { id: 'SPA-DOH-005', description: "Review appointment book for the day.", priority: 'Medium', riskLevel: 'Low', proof: 'Appointment System', location: 'Reception' },
                    { id: 'SPA-DOH-006', description: "Check inventory of professional and retail products.", priority: 'Medium', riskLevel: 'Medium', proof: 'Inventory Check', location: 'Stock Room' }
                ]
            },
            {
                title: "😊 Client Experience & Service",
                department: "Customer Service",
                frequency: "Daily",
                role: "Stylist",
                summary: "Focuses on providing a premium client experience, from a warm welcome and consultation to service delivery and post-service care recommendations.",
                tasks: [
                    { id: 'SPA-CES-001', description: "Greet client by name and offer a beverage.", priority: 'High', riskLevel: 'Low', proof: 'Observation', location: 'Reception' },
                    { id: 'SPA-CES-002', description: "Conduct a thorough consultation before starting any service.", priority: 'High', riskLevel: 'Medium', proof: 'Consultation Form', location: 'Workstation' },
                    { id: 'SPA-CES-003', description: "Explain the service process and products being used.", priority: 'Medium', riskLevel: 'Low', proof: 'Verbal Communication', location: 'Workstation' },
                    { id: 'SPA-CES-004', description: "Ensure client comfort throughout the service (temperature, music).", priority: 'Medium', riskLevel: 'Low', proof: 'Verbal Check', location: 'Salon' },
                    { id: 'SPA-CES-005', description: "Recommend retail products for at-home care based on the service provided.", priority: 'Medium', riskLevel: 'Low', proof: 'Sales Log', location: 'Workstation' },
                    { id: 'SPA-CES-006', description: "Update client record card with details of the service performed.", priority: 'High', riskLevel: 'Medium', proof: 'Client Card', location: 'Reception' }
                ]
            },
            {
                title: "📦 Inventory & Retail Management",
                department: "Inventory",
                frequency: "Weekly",
                role: "Salon Manager",
                summary: "A weekly checklist to manage professional and retail product stock, preventing stockouts, tracking usage, and maximizing retail sales opportunities.",
                tasks: [
                    { id: 'SPA-IRM-001', description: "Conduct a physical count of all retail products.", priority: 'High', riskLevel: 'Medium', proof: 'Stock Count Sheet', location: 'Stock Room' },
                    { id: 'SPA-IRM-002', description: "Compare physical count with sales data to identify any discrepancies.", priority: 'High', riskLevel: 'Medium', proof: 'Reconciliation Report', location: 'Manager Office' },
                    { id: 'SPA-IRM-003', description: "Check stock levels of professional-use products and place new orders as needed.", priority: 'High', riskLevel: 'High', proof: 'Order Forms', location: 'Manager Office' },
                    { id: 'SPA-IRM-004', description: "Ensure retail shelves are clean, well-organized, and fully stocked.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Retail Area' },
                    { id: 'SPA-IRM-005', description: "Check for and remove any expired products from shelves.", priority: 'High', riskLevel: 'Medium', proof: 'Expiry Log', location: 'Stock Room' }
                ]
            },
            {
                title: "🌙 Closing & End-of-Day Tasks",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Staff",
                summary: "A systematic process for closing the salon, including cleaning and sterilizing all tools and stations, cashing out, and preparing for the next business day.",
                tasks: [
                    { id: 'SPA-CED-001', description: "Clean and sanitize all workstations and tools.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Salon Floor' },
                    { id: 'SPA-CED-002', description: "Dispose of all waste, including hair and used consumables.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Salon Floor' },
                    { id: 'SPA-CED-003', description: "Send all used towels and linens for laundry.", priority: 'High', riskLevel: 'Medium', proof: 'Laundry Log', location: 'Utility Area' },
                    { id: 'SPA-CED-004', description: "Reconcile daily cash and card payments.", priority: 'High', riskLevel: 'High', proof: 'POS Report', location: 'Reception' },
                    { id: 'SPA-CED-005', description: "Turn off all electronics, lights, and secure the premises.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Salon' }
                ]
            }
        ]
    },
    {
        id: 'school_safety_operations',
        title: "School & College Safety Checklist",
        priceUSD: 69.99,
        priceINR: 7999,
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
                summary: "A top-to-bottom security sweep of the campus before students arrive, covering perimeter checks, CCTV functionality, and clearing all buildings and fire exits.",
                tasks: [
                    { id: 'EDU-DOC-001', description: "Patrol perimeter fence and check all gates are secure before staff/student arrival.", priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Campus Perimeter' },
                    { id: 'EDU-DOC-002', description: "Test all communication systems (PA system, walkie-talkies).", priority: 'High', riskLevel: 'Medium', proof: 'Test Log', location: 'Security Office' },
                    { id: 'EDU-DOC-003', description: "Check all CCTV cameras are operational and recording.", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Security Office' },
                    { id: 'EDU-DOC-004', description: "Brief security guards on their posts and any specific alerts for the day.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Security Office' },
                    { id: 'EDU-DOC-005', description: "Ensure all fire exits are unlocked and clear of obstructions.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'All Buildings' },
                    { id: 'EDU-DOC-006', description: "Inspect playgrounds and sports fields for any hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Playgrounds' }
                ]
            },
            {
                title: " classroomsafety Classroom & Common Area Safety",
                department: "Admin",
                frequency: "Daily",
                role: "Admin Officer",
                summary: "A daily audit of all indoor spaces, from classrooms to hallways and labs, to identify and rectify physical hazards like broken furniture, electrical issues, or blocked pathways.",
                tasks: [
                    { id: 'EDU-CAS-001', description: "Check classrooms for any broken furniture, sharp edges, or electrical hazards.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Classrooms' },
                    { id: 'EDU-CAS-002', description: "Ensure hallways and staircases are clear of bags or other obstructions.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'EDU-CAS-003', description: "Verify that all fire extinguishers are in place and their pressure gauges are in the green.", priority: 'High', riskLevel: 'High', proof: 'Extinguisher Checklist', location: 'All Buildings' },
                    { id: 'EDU-CAS-004', description: "Check that first aid kits in all designated areas are fully stocked.", priority: 'High', riskLevel: 'High', proof: 'Inventory Check', location: 'Admin Office, Labs' },
                    { id: 'EDU-CAS-005', description: "Inspect science labs to ensure chemicals are stored correctly and safety equipment is available.", priority: 'High', riskLevel: 'High', proof: 'Lab Safety Log', location: 'Science Labs' },
                    { id: 'EDU-CAS-006', description: "Ensure restrooms are clean, hygienic, and have adequate supplies.", priority: 'Medium', riskLevel: 'Low', proof: 'Housekeeping Log', location: 'Restrooms' }
                ]
            },
            {
                title: "👋 Student Dismissal & Lost-and-Found Protocol",
                department: "Admin",
                frequency: "Daily",
                role: "Teacher",
                summary: "Manages the controlled and safe dismissal of students, covering bus protocols, parent pick-up verification, traffic management, and handling of lost items.",
                tasks: [
                    { id: 'EDU-SDP-001', description: "Ensure authorized personnel are present at bus bays and parent pick-up zones.", priority: 'High', riskLevel: 'High', proof: 'Roster Check', location: 'Dismissal Areas' },
                    { id: 'EDU-SDP-002', description: "Verify student ID cards or parent authorization for pick-up.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Pick-up Zone' },
                    { id: 'EDU-SDP-003', description: "Conduct a final sweep of classrooms and playgrounds for any remaining students.", priority: 'High', riskLevel: 'Medium', proof: 'Sweep Log', location: 'Campus' },
                    { id: 'EDU-SDP-004', description: "Log any found items in the lost-and-found register with details.", priority: 'Medium', riskLevel: 'Low', proof: 'Lost & Found Log', location: 'Admin Office' },
                    { id: 'EDU-SDP-005', description: "Manage traffic flow to ensure a safe and orderly dismissal process.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Observation', location: 'Dismissal Areas' }
                ]
            },
            {
                title: "🔥 Monthly Emergency Preparedness & Drills",
                department: "Security",
                frequency: "Monthly",
                role: "Principal",
                summary: "A comprehensive guide for conducting and evaluating monthly emergency drills (fire, lockdown, etc.) to ensure staff and students know exactly what to do in a crisis.",
                tasks: [
                    { id: 'EDU-MEP-001', description: "Conduct a fire drill or other emergency drill (e.g., earthquake, lockdown).", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Campus' },
                    { id: 'EDU-MEP-002', description: "Review the effectiveness of the evacuation and the time taken.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Campus' },
                    { id: 'EDU-MEP-003', description: "Check the functionality of the fire alarm system and public address system.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Campus' },
                    { id: 'EDU-MEP-004', description: "Ensure all staff are aware of their roles during an emergency.", priority: 'High', riskLevel: 'Medium', proof: 'Quiz/Survey', location: 'Staff Room' },
                    { id: 'EDU-MEP-005', description: "Update emergency contact lists for staff, parents, and local authorities.", priority: 'High', riskLevel: 'Medium', proof: 'Updated List', location: 'Admin Office' }
                ]
            }
        ]
    },
    {
        id: 'supermarket_ops_blueprint',
        title: "Supermarket Checklist",
        priceUSD: 169.99,
        priceINR: 7999,
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
                summary: "Ensures the store is ready for customers, with a strong focus on checking the quality and presentation of fresh produce, baked goods, and meat sections.",
                tasks: [
                    { id: 'SM-MOF-001', description: "Inspect fresh produce section; remove any wilted or spoiled items.", priority: 'High', riskLevel: 'High', proof: 'Waste Log', location: 'Produce Section' },
                    { id: 'SM-MOF-002', description: "Check 'use by' dates in the dairy, meat, and bakery sections.", priority: 'High', riskLevel: 'High', proof: 'Date Check Log', location: 'All Fresh Sections' },
                    { id: 'SM-MOF-003', description: "Ensure all shelves are fully stocked, fronted, and look appealing.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Sales Floor' },
                    { id: 'SM-MOF-004', description: "Verify all pricing and promotional signage is accurate and in place.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'SM-MOF-005', description: "Ensure floors are clean and shopping carts are available at the entrance.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Entrance' }
                ]
            },
            {
                title: "🚚 Receiving & Cold Chain Integrity",
                department: "Inventory",
                frequency: "Daily",
                role: "Receiving Clerk",
                summary: "A critical food safety checklist for receiving goods, focusing on temperature checks for frozen/chilled items and ensuring cold chain is never broken.",
                tasks: [
                    { id: 'SM-RCI-001', description: "Check and log the temperature of refrigerated and frozen delivery trucks.", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Receiving Bay' },
                    { id: 'SM-RCI-002', description: "Reject any chilled or frozen goods delivered above the acceptable temperature.", priority: 'High', riskLevel: 'High', proof: 'Rejection Log', location: 'Receiving Bay' },
                    { id: 'SM-RCI-003', description: "Inspect products for signs of damage, tampering, or pest activity.", priority: 'High', riskLevel: 'Medium', proof: 'Receiving Log', location: 'Receiving Bay' },
                    { id: 'SM-RCI-004', description: "Move received cold chain items to their respective storage areas immediately.", priority: 'High', riskLevel: 'High', proof: 'CCTV Review', location: 'Receiving Bay' },
                    { id: 'SM-RCI-005', description: "Rotate stock using FIFO (First-In, First-Out) principle.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Stock Room' }
                ]
            },
            {
                title: "🛒 During the Day: Floor Operations & Customer Service",
                department: "Operations",
                frequency: "Daily",
                role: "Floor Manager",
                summary: "Covers ongoing tasks like restocking shelves, ensuring price accuracy, managing spills or hazards, and monitoring checkout lines for efficiency.",
                tasks: [
                    { id: 'SM-FOCS-001', description: "Conduct regular walkthroughs to identify and restock low-stock items.", priority: 'High', riskLevel: 'Medium', proof: 'Walkthrough Log', location: 'Sales Floor' },
                    { id: 'SM-FOCS-002', description: "Clean up any spills or breakages immediately to prevent accidents.", priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Sales Floor' },
                    { id: 'SM-FOCS-003', description: "Monitor checkout queues and open additional counters during peak hours.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Checkout Area' },
                    { id: 'SM-FOCS-004', description: "Ensure shopping carts and baskets are collected from the parking lot and returned.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Exterior' },
                    { id: 'SM-FOCS-005', description: "Assist customers with product location and inquiries.", priority: 'Medium', riskLevel: 'Low', proof: 'Observation', location: 'Sales Floor' }
                ]
            },
            {
                title: "💰 Closing & Financial Reconciliation",
                department: "Finance",
                frequency: "Daily",
                role: "Closing Manager",
                summary: "A systematic process for closing the store, including cashing out all registers, securing all premises, and preparing the store for the morning cleaning crew.",
                tasks: [
                    { id: 'SM-CFR-001', description: "Reconcile cash and card sales from all POS terminals.", priority: 'High', riskLevel: 'High', proof: 'POS Report', location: 'Cash Office' },
                    { id: 'SM-CFR-002', description: "Secure all cash in the safe.", priority: 'High', riskLevel: 'High', proof: 'Safe Log', location: 'Cash Office' },
                    { id: 'SM-CFR-003', description: "Perform a final walkthrough to face and tidy shelves for the next day.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'SM-CFR-004', description: "Ensure all refrigeration and freezer units are closed and running at the correct temperature.", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Sales Floor' },
                    { id: 'SM-CFR-005', description: "Lock all entrances and set the security alarm.", priority: 'High', riskLevel: 'High', proof: 'Alarm Log', location: 'Exit' }
                ]
            }
        ]
    },
    {
        id: 'fashion_boutique_ops',
        title: "Fashion Boutique Checklist",
        priceUSD: 89.99,
        priceINR: 7999,
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
                summary: "Sets the stage for sales by ensuring the store is perfectly presented, including clean displays, correct lighting, and visually appealing mannequin setups.",
                tasks: [
                    { id: 'FBQ-DOM-001', description: "Ensure storefront and window displays are clean and inviting.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Storefront' },
                    { id: 'FBQ-DOM-002', description: "Check that all lighting is functional and focused on key merchandise.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'FBQ-DOM-003', description: "Update or refresh mannequin outfits based on new arrivals or promotions.", priority: 'High', riskLevel: 'Low', proof: 'Photo', location: 'Sales Floor' },
                    { id: 'FBQ-DOM-004', description: "Steam and prep any wrinkled merchandise on the floor.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'FBQ-DOM-005', description: "Brief team on daily sales targets and promotional activities.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Back Office' }
                ]
            },
            {
                title: "👗 Fitting Room, Customer Service & Loss Prevention",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                summary: "A combined checklist for managing the critical fitting room area to enhance service (suggesting items) and prevent theft (item counts, tag checks).",
                tasks: [
                    { id: 'FBQ-FCSLP-001', description: "Limit the number of items a customer can take into the fitting room at one time.", priority: 'High', riskLevel: 'High', proof: 'Policy Signage', location: 'Fitting Rooms' },
                    { id: 'FBQ-FCSLP-002', description: "Check items going in and out of the fitting room, confirming counts.", priority: 'High', riskLevel: 'High', proof: 'Fitting Room Log', location: 'Fitting Rooms' },
                    { id: 'FBQ-FCSLP-003', description: "Clear and tidy fitting rooms immediately after a customer leaves.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Fitting Rooms' },
                    { id: 'FBQ-FCSLP-004', description: "Check for any detached security tags or hidden merchandise left in rooms.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Fitting Rooms' },
                    { id: 'FBQ-FCSLP-005', description: "Offer styling advice and suggest alternative sizes or items to customers.", priority: 'High', riskLevel: 'Low', proof: 'Observation', location: 'Fitting Rooms' }
                ]
            },
            {
                title: "📦 New Stock & Inventory Management",
                department: "Inventory",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "Standardizes the process of receiving new apparel, from checking deliveries against packing slips to tagging, steaming, and merchandising items on the floor.",
                tasks: [
                    { id: 'FBQ-NSIM-001', description: "Verify incoming shipments against purchase orders.", priority: 'High', riskLevel: 'Medium', proof: 'PO/Invoice Match', location: 'Stock Room' },
                    { id: 'FBQ-NSIM-002', description: "Inspect new stock for any damages or defects.", priority: 'High', riskLevel: 'Medium', proof: 'Damage Log', location: 'Stock Room' },
                    { id: 'FBQ-NSIM-003', description: "Attach security tags and price tags to all new merchandise.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Stock Room' },
                    { id: 'FBQ-NSIM-004', description: "Update inventory system with new stock received.", priority: 'High', riskLevel: 'Medium', proof: 'System Entry', location: 'Back Office' },
                    { id: 'FBQ-NSIM-005', description: "Plan and execute floor set for new merchandise.", priority: 'High', riskLevel: 'Low', proof: 'Photo', location: 'Sales Floor' }
                ]
            },
            {
                title: "🌙 Closing & Daily Reporting",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Staff",
                summary: "Ensures the store is reset for the next day, including tidying merchandise, processing returns, and completing end-of-day sales reports.",
                tasks: [
                    { id: 'FBQ-CDR-001', description: "Fold and re-hang all merchandise on the sales floor.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'FBQ-CDR-002', description: "Process any customer returns from the day.", priority: 'Medium', riskLevel: 'Medium', proof: 'System Log', location: 'Back Office' },
                    { id: 'FBQ-CDR-003', description: "Reconcile daily sales and close out the POS system.", priority: 'High', riskLevel: 'High', proof: 'POS Report', location: 'Back Office' },
                    { id: 'FBQ-CDR-004', description: "Secure cash and prepare bank deposit.", priority: 'High', riskLevel: 'High', proof: 'Deposit Slip', location: 'Back Office' },
                    { id: 'FBQ-CDR-005', description: "Perform a final walkthrough and secure the premises.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Store' }
                ]
            }
        ]
    },
    {
        id: 'electronics_showroom_ops',
        title: "Electronics Showroom Checklist",
        priceUSD: 119.99,
        priceINR: 7999,
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
                summary: "Ensures all live demo units are clean, charged, and functional, and that all security tethers and alarms for high-value items are active.",
                tasks: [
                    { id: 'ESR-DOM-001', description: "Turn on and check all live demo units (phones, laptops, TVs).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Showroom' },
                    { id: 'ESR-DOM-002', description: "Verify all security tethers and alarms on demo units are active.", priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Showroom' },
                    { id: 'ESR-DOM-003', description: "Clean screens and surfaces of all demo products.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Showroom' },
                    { id: 'ESR-DOM-004', description: "Ensure all price tags and specification sheets are accurate and up-to-date.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Showroom' },
                    { id: 'ESR-DOM-005', description: "Conduct daily team briefing on promotions, stock levels, and sales targets.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Back Office' }
                ]
            },
            {
                title: "💡 Sales Floor & Customer Experience",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                summary: "Focuses on the sales process, ensuring staff are knowledgeable, can provide effective demonstrations, and accurately explain financing and warranty options.",
                tasks: [
                    { id: 'ESR-SFCE-001', description: "Engage with customers to understand their needs and recommend suitable products.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Showroom' },
                    { id: 'ESR-SFCE-002', description: "Provide clear and accurate demonstrations of product features.", priority: 'High', riskLevel: 'Low', proof: 'Observation', location: 'Showroom' },
                    { id: 'ESR-SFCE-003', description: "Explain warranty, return policies, and financing options clearly.", priority: 'High', riskLevel: 'High', proof: 'Verbal Check', location: 'Sales Desk' },
                    { id: 'ESR-SFCE-004', description: "Process sales accurately through the POS system.", priority: 'High', riskLevel: 'High', proof: 'Transaction Log', location: 'Sales Desk' },
                    { id: 'ESR-SFCE-005', description: "Manage customer queues and waiting times effectively.", priority: 'Medium', riskLevel: 'Low', proof: 'Observation', location: 'Showroom' }
                ]
            },
            {
                title: "🔐 Inventory & High-Value Security Protocol",
                department: "Security",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "A weekly audit of high-value inventory (e.g., flagship phones, laptops), reconciling physical stock against system records to quickly identify any shrinkage.",
                tasks: [
                    { id: 'ESR-IHVSP-001', description: "Conduct a cycle count of top 10 high-value SKUs.", priority: 'High', riskLevel: 'High', proof: 'Count Sheet', location: 'Stock Room' },
                    { id: 'ESR-IHVSP-002', description: "Reconcile physical count with inventory system records and investigate discrepancies.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Back Office' },
                    { id: 'ESR-IHVSP-003', description: "Review CCTV footage of stock room and high-value areas.", priority: 'High', riskLevel: 'Medium', proof: 'Footage Review Log', location: 'Back Office' },
                    { id: 'ESR-IHVSP-004', description: "Ensure high-value stock is stored in a secure, access-controlled area.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Stock Room' }
                ]
            },
            {
                title: "🧠 Staff & Training Drills",
                department: "HR",
                frequency: "Weekly",
                role: "Store Manager",
                summary: "A checklist for conducting regular product knowledge training and sales technique role-playing sessions to keep the team sharp and effective.",
                tasks: [
                    { id: 'ESR-STD-001', description: "Conduct a 15-minute training session on a new product or feature.", priority: 'High', riskLevel: 'Low', proof: 'Training Log', location: 'Back Office' },
                    { id: 'ESR-STD-002', description: "Role-play a customer interaction scenario (e.g., handling an objection).", priority: 'Medium', riskLevel: 'Low', proof: 'Observation', location: 'Back Office' },
                    { id: 'ESR-STD-003', description: "Review and discuss a competitor's product or promotion.", priority: 'Medium', riskLevel: 'Low', proof: 'Discussion Log', location: 'Back Office' },
                    { id: 'ESR-STD-004', description: "Administer a short quiz on product specifications.", priority: 'Low', riskLevel: 'Low', proof: 'Quiz Results', location: 'Back Office' }
                ]
            }
        ]
    },
    {
        id: 'factory_shift_playbook',
        title: "Factory Shift Handover Checklist",
        priceUSD: 129.99,
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
                summary: "Standardizes the reporting process for the outgoing shift, covering production numbers, downtime, quality issues, and any safety incidents.",
                tasks: [
                    { id: 'FSH-EOSD-001', description: "Complete the production log with units produced vs. target.", priority: 'High', riskLevel: 'Medium', proof: 'Production Log', location: 'Control Room' },
                    { id: 'FSH-EOSD-002', description: "Document any machine downtime, including reason and duration.", priority: 'High', riskLevel: 'High', proof: 'Downtime Log', location: 'Control Room' },
                    { id: 'FSH-EOSD-003', description: "Report any quality control failures or rejected batches.", priority: 'High', riskLevel: 'High', proof: 'QC Report', location: 'Control Room' },
                    { id: 'FSH-EOSD-004', description: "Log any near misses, safety incidents, or injuries that occurred during the shift.", priority: 'High', riskLevel: 'High', proof: 'Safety Log', location: 'Control Room' },
                    { id: 'FSH-EOSD-005', description: "Ensure all workstations are cleaned and tools are returned to their designated places.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Production Floor' }
                ]
            },
            {
                title: "🤝 Joint Handover Meeting",
                department: "Production",
                frequency: "Daily",
                role: "Shift Supervisor",
                summary: "A structured meeting between outgoing and incoming supervisors to discuss the status of all machines, pending maintenance, and priorities for the next shift.",
                tasks: [
                    { id: 'FSH-JHM-001', description: "Outgoing supervisor briefs incoming supervisor on production status.", priority: 'High', riskLevel: 'Medium', proof: 'Handover Meeting', location: 'Control Room' },
                    { id: 'FSH-JHM-002', description: "Discuss any machine issues or pending maintenance tasks.", priority: 'High', riskLevel: 'High', proof: 'Handover Meeting', location: 'Control Room' },
                    { id: 'FSH-JHM-003', description: "Review any quality or safety concerns from the previous shift.", priority: 'High', riskLevel: 'High', proof: 'Handover Meeting', location: 'Control Room' },
                    { id: 'FSH-JHM-004', description: "Discuss any personnel issues or staffing changes.", priority: 'Medium', riskLevel: 'Medium', proof: 'Handover Meeting', location: 'Control Room' },
                    { id: 'FSH-JHM-005', description: "Incoming supervisor signs off on the handover log, accepting responsibility.", priority: 'High', riskLevel: 'Medium', proof: 'Handover Log', location: 'Control Room' }
                ]
            },
            {
                title: "▶️ Incoming Shift: Start-up Procedures",
                department: "Production",
                frequency: "Daily",
                role: "Shift Supervisor",
                summary: "Ensures the incoming shift conducts a full walk-through, verifies machine settings, and briefs their team based on the handover information before starting production.",
                tasks: [
                    { id: 'FSH-ISSP-001', description: "Incoming supervisor conducts a physical walk-through of the production floor.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Production Floor' },
                    { id: 'FSH-ISSP-002', description: "Verify machine settings are correct for the day's production run.", priority: 'High', riskLevel: 'High', proof: 'Machine Settings Log', location: 'Production Floor' },
                    { id: 'FSH-ISSP-003', description: "Conduct a pre-shift safety huddle with the new team.", priority: 'High', riskLevel: 'High', proof: 'Huddle Log', location: 'Production Floor' },
                    { id: 'FSH-ISSP-004', description: "Assign operators to their workstations.", priority: 'Medium', riskLevel: 'Low', proof: 'Roster', location: 'Control Room' },
                    { id: 'FSH-ISSP-005', description: "Initiate the start of the production line.", priority: 'High', riskLevel: 'Medium', proof: 'System Log', location: 'Control Room' }
                ]
            },
            {
                title: "🦺 Weekly Safety & Audit Drill",
                department: "Safety",
                frequency: "Weekly",
                role: "Safety Officer",
                summary: "A weekly safety audit covering machine guards, emergency stops, PPE compliance, and clear pathways to prevent workplace accidents.",
                tasks: [
                    { id: 'FSH-WSAD-001', description: "Check that all machine safety guards are in place and functional.", priority: 'High', riskLevel: 'High', proof: 'Safety Audit Form', location: 'Production Floor' },
                    { id: 'FSH-WSAD-002', description: "Test emergency stop buttons on a sample of machines.", priority: 'High', riskLevel: 'High', proof: 'Safety Audit Form', location: 'Production Floor' },
                    { id: 'FSH-WSAD-003', description: "Audit staff for correct use of Personal Protective Equipment (PPE).", priority: 'High', riskLevel: 'High', proof: 'Safety Audit Form', location: 'Production Floor' },
                    { id: 'FSH-WSAD-004', description: "Ensure all walkways and fire exits are clear of obstructions.", priority: 'High', riskLevel: 'High', proof: 'Safety Audit Form', location: 'Production Floor' },
                    { id: 'FSH-WSAD-005', description: "Check that fire extinguishers and first aid stations are accessible and inspected.", priority: 'High', riskLevel: 'High', proof: 'Safety Audit Form', location: 'Production Floor' }
                ]
            }
        ]
    },
    {
        id: 'wedding_hall_playbook',
        title: "Wedding & Banquet Hall Checklist",
        priceUSD: 99.99,
        priceINR: 7999,
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
                summary: "Standardizes the sales process from the first inquiry to signing the contract, ensuring all client requirements, dates, and costs are clearly documented.",
                tasks: [
                    { id: 'WBH-ICB-001', description: "Respond to client inquiry within a specified timeframe (e.g., 24 hours).", priority: 'High', riskLevel: 'Medium', proof: 'CRM Log', location: 'Sales Office' },
                    { id: 'WBH-ICB-002', description: "Conduct a venue tour, highlighting key features and options.", priority: 'High', riskLevel: 'Low', proof: 'Observation', location: 'Venue' },
                    { id: 'WBH-ICB-003', description: "Provide a clear, itemized quotation based on client requirements.", priority: 'High', riskLevel: 'High', proof: 'Quotation Copy', location: 'Sales Office' },
                    { id: 'WBH-ICB-004', description: "Finalize and sign the contract, collecting the initial deposit.", priority: 'High', riskLevel: 'High', proof: 'Signed Contract', location: 'Sales Office' },
                    { id: 'WBH-ICB-005', description: "Create an event file and a Banquet Event Order (BEO).", priority: 'High', riskLevel: 'Medium', proof: 'BEO Document', location: 'Sales Office' }
                ]
            },
            {
                title: "📋 Pre-Event Coordination (T-30 Days)",
                department: "Operations",
                frequency: "Monthly",
                role: "Event Coordinator",
                summary: "The master planning checklist for coordinating with the client and all vendors (catering, decor, DJ) in the weeks leading up to the event.",
                tasks: [
                    { id: 'WBH-PEC-001', description: "Finalize the event timeline and floor plan with the client.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Timeline', location: 'Operations Office' },
                    { id: 'WBH-PEC-002', description: "Coordinate with catering on the final menu and guest count.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Operations Office' },
                    { id: 'WBH-PEC-003', description: "Confirm arrival times and setup requirements with all external vendors (decor, AV, etc.).", priority: 'High', riskLevel: 'High', proof: 'Vendor Confirmation Sheet', location: 'Operations Office' },
                    { id: 'WBH-PEC-004', description: "Arrange for any necessary permits or licenses (e.g., music license).", priority: 'High', riskLevel: 'High', proof: 'Permit Copy', location: 'Operations Office' },
                    { id: 'WBH-PEC-005', description: "Schedule and brief all internal staff (banquet, security, housekeeping).", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Operations Office' }
                ]
            },
            {
                title: "🎉 Event Day Execution",
                department: "Operations",
                frequency: "As-Needed",
                role: "Venue Manager",
                summary: "The day-of-event playbook, covering vendor arrivals, setup supervision, client communication, and ensuring the event timeline is followed flawlessly.",
                tasks: [
                    { id: 'WBH-EDE-001', description: "Conduct a final walkthrough of the venue to ensure setup matches the BEO.", priority: 'High', riskLevel: 'High', proof: 'BEO Checklist', location: 'Venue' },
                    { id: 'WBH-EDE-002', description: "Supervise vendor setup and ensure they adhere to venue rules.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Venue' },
                    { id: 'WBH-EDE-003', description: "Test all AV equipment one final time before the event starts.", priority: 'High', riskLevel: 'High', proof: 'AV Test Log', location: 'Venue' },
                    { id: 'WBH-EDE-004', description: "Be the main point of contact for the client and vendors throughout the event.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Venue' },
                    { id: 'WBH-EDE-005', description: "Monitor the event flow and timeline, making adjustments as needed.", priority: 'High', riskLevel: 'Medium', proof: 'Timeline Check', location: 'Venue' }
                ]
            },
            {
                title: "💸 Post-Event Wrap-Up & Settlement",
                department: "Finance",
                frequency: "As-Needed",
                role: "Accounts Manager",
                summary: "Ensures a smooth post-event process, including final walkthroughs, damage assessment, breakdown coordination, and final bill settlement with the client.",
                tasks: [
                    { id: 'WBH-PEWUS-001', description: "Conduct a post-event walkthrough with the client to check for any damages.", priority: 'High', riskLevel: 'High', proof: 'Walkthrough Sign-off', location: 'Venue' },
                    { id: 'WBH-PEWUS-002', description: "Supervise the breakdown and exit of all external vendors.", priority: 'Medium', riskLevel: 'Medium', proof: 'Observation', location: 'Venue' },
                    { id: 'WBH-PEWUS-003', description: "Generate the final invoice, including any additional charges.", priority: 'High', riskLevel: 'High', proof: 'Final Invoice', location: 'Accounts' },
                    { id: 'WBH-PEWUS-004', description: "Collect final payment from the client.", priority: 'High', riskLevel: 'High', proof: 'Payment Receipt', location: 'Accounts' },
                    { id: 'WBH-PEWUS-005', description: "Collect feedback from the client on their experience.", priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Form', location: 'Accounts' }
                ]
            }
        ]
    },
    {
        id: 'playschool_safety_protocol',
        title: "Playschool & Daycare Checklist",
        priceUSD: 79.99,
        priceINR: 7999,
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
                summary: "A critical safety sweep before any children arrive, checking for hazards like sharp objects, unsafe toys, and ensuring all areas are clean and secure.",
                tasks: [
                    { id: 'PD-DOSI-001', description: "Inspect all indoor and outdoor play areas for hazards (sharp edges, broken equipment).", priority: 'High', riskLevel: 'High', proof: 'Safety Log', location: 'Play Areas' },
                    { id: 'PD-DOSI-002', description: "Check that all gates and doors are securely latched.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Perimeter' },
                    { id: 'PD-DOSI-003', description: "Ensure all electrical outlets are covered.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Classrooms' },
                    { id: 'PD-DOSI-004', description: "Confirm that first aid kits are fully stocked and accessible.", priority: 'High', riskLevel: 'High', proof: 'Inventory Check', location: 'Office' },
                    { id: 'PD-DOSI-005', description: "Sanitize all high-touch surfaces, toys, and eating areas.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'All Areas' }
                ]
            },
            {
                title: "👀 During-Session Operations & Supervision",
                department: "Operations",
                frequency: "Hourly",
                role: "Staff",
                summary: "Focuses on maintaining staff-to-child ratios, active supervision in all play zones, and documenting activities, meals, and nap times.",
                tasks: [
                    { id: 'PD-DSOS-001', description: "Maintain mandated staff-to-child ratios at all times.", priority: 'High', riskLevel: 'High', proof: 'Headcount Log', location: 'All Areas' },
                    { id: 'PD-DSOS-002', description: "Practice 'active supervision' by constantly scanning and being present with children.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'All Areas' },
                    { id: 'PD-DSOS-003', description: "Log diaper changes, meals, and nap times for each child.", priority: 'High', riskLevel: 'Medium', proof: 'Daily Report Card', location: 'Classrooms' },
                    { id: 'PD-DSOS-004', description: "Handle and document any minor incidents (bumps, scrapes) and inform parents.", priority: 'High', riskLevel: 'Medium', proof: 'Incident Report', location: 'Office' },
                    { id: 'PD-DSOS-005', description: "Ensure children are washing hands before meals and after using the restroom.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Classrooms' }
                ]
            },
            {
                title: "🧽 Closing & Deep Cleaning",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Staff",
                summary: "A thorough cleaning and sanitization protocol for the end of the day, ensuring all toys, surfaces, and restrooms are disinfected and ready for the next day.",
                tasks: [
                    { id: 'PD-CDC-001', description: "Collect, wash, and sanitize all used toys.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'All Areas' },
                    { id: 'PD-CDC-002', description: "Disinfect all tables, chairs, and sleeping mats.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Classrooms' },
                    { id: 'PD-CDC-003', description: "Clean and sanitize restrooms thoroughly.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Restrooms' },
                    { id: 'PD-CDC-004', description: "Empty all trash cans and dispose of waste properly.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'All Areas' },
                    { id: 'PD-CDC-005', description: "Secure the premises, lock all doors and windows.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Perimeter' }
                ]
            },
            {
                title: " drills Weekly Maintenance & Emergency Drills",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Supervisor",
                summary: "A weekly check of fire alarms, first aid kits, and emergency exits, plus conducting simple, age-appropriate emergency drills with the children.",
                tasks: [
                    { id: 'PD-WMED-001', description: "Test fire alarms and smoke detectors.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'All Areas' },
                    { id: 'PD-WMED-002', description: "Inspect outdoor play equipment for structural integrity and safety.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Playground' },
                    { id: 'PD-WMED-003', description: "Restock first aid kits with any used supplies.", priority: 'High', riskLevel: 'High', proof: 'Inventory Check', location: 'Office' },
                    { id: 'PD-WMED-004', description: "Conduct a simple fire or evacuation drill with staff and children.", priority: 'High', riskLevel: 'Medium', proof: 'Drill Report', location: 'All Areas' }
                ]
            }
        ]
    },
    {
        id: 'hindu_wedding_checklist',
        title: "Hindu Wedding Checklist",
        priceUSD: 49.99,
        priceINR: 7999,
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
                summary: "Plan the perfect Sangeet night, from coordinating dance performances and DJ playlists to managing food, drinks, and guest flow for a night of celebration.",
                tasks: [
                    { id: 'HW-SCC-001', description: "Finalize DJ and playlist.", priority: 'High', riskLevel: 'Medium', proof: 'Contract', location: 'Venue' },
                    { id: 'HW-SCC-002', description: "Coordinate family dance practice schedules.", priority: 'Medium', riskLevel: 'Low', proof: 'Schedule', location: 'Home' },
                    { id: 'HW-SCC-003', description: "Arrange for choreographer if needed.", priority: 'Medium', riskLevel: 'Low', proof: 'Contract', location: 'Venue' },
                    { id: 'HW-SCC-004', description: "Finalize food and beverage menu.", priority: 'High', riskLevel: 'Medium', proof: 'BEO', location: 'Venue' },
                    { id: 'HW-SCC-005', description: "Plan stage setup, lighting, and sound.", priority: 'High', riskLevel: 'High', proof: 'Layout Plan', location: 'Venue' }
                ]
            },
            {
                title: "💅 Mehndi Ceremony Checklist",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                summary: "Organize a vibrant Mehndi event, including booking artists, arranging comfortable seating for the bride and guests, and planning for music and catering.",
                tasks: [
                    { id: 'HW-MCC-001', description: "Book Mehndi artists for the bride and guests.", priority: 'High', riskLevel: 'Medium', proof: 'Contract', location: 'Venue' },
                    { id: 'HW-MCC-002', description: "Arrange comfortable seating for the bride.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Venue' },
                    { id: 'HW-MCC-003', description: "Plan decor and theme (e.g., floral, colorful drapes).", priority: 'Medium', riskLevel: 'Low', proof: 'Mood Board', location: 'Venue' },
                    { id: 'HW-MCC-004', description: "Organize music and entertainment.", priority: 'Medium', riskLevel: 'Low', proof: 'Playlist', location: 'Venue' },
                    { id: 'HW-MCC-005', description: "Arrange for snacks and beverages for guests.", priority: 'High', riskLevel: 'Medium', proof: 'BEO', location: 'Venue' }
                ]
            },
            {
                title: "💒 Wedding Day: Baraat, Varmala & Mandap",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                summary: "The master checklist for the wedding day itself, managing the timing and logistics of the groom's procession (Baraat), the floral exchange (Varmala), and the ceremony (Mandap).",
                tasks: [
                    { id: 'HW-WD-001', description: "Coordinate Baraat assembly point and route.", priority: 'High', riskLevel: 'High', proof: 'Timeline', location: 'Venue' },
                    { id: 'HW-WD-002', description: "Arrange for horse/vehicle for the groom and music band.", priority: 'High', riskLevel: 'Medium', proof: 'Contract', location: 'Venue' },
                    { id: 'HW-WD-003', description: "Ensure Varmalas (garlands) are ready and fresh.", priority: 'High', riskLevel: 'High', proof: 'Vendor Confirmation', location: 'Venue' },
                    { id: 'HW-WD-004', description: "Check Mandap setup, including seating for family and priest.", priority: 'High', riskLevel: 'High', proof: 'Layout Plan', location: 'Venue' },
                    { id: 'HW-WD-005', description: "Ensure all ceremony items (puja samagri) are ready as per priest's list.", priority: 'High', riskLevel: 'High', proof: 'Checklist', location: 'Venue' }
                ]
            },
            {
                title: "👋 Post-Wedding: Reception & Vidaai",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                summary: "Covers the flow of the wedding reception, from guest seating and speeches to dinner service, and coordinates the bride's emotional farewell ceremony (Vidaai).",
                tasks: [
                    { id: 'HW-PW-001', description: "Finalize reception seating chart.", priority: 'High', riskLevel: 'Medium', proof: 'Seating Chart', location: 'Venue' },
                    { id: 'HW-PW-002', description: "Coordinate couple's grand entrance.", priority: 'High', riskLevel: 'Low', proof: 'Timeline', location: 'Venue' },
                    { id: 'HW-PW-003', description: "Schedule speeches, cake cutting, and first dance.", priority: 'Medium', riskLevel: 'Low', proof: 'Timeline', location: 'Venue' },
                    { id: 'HW-PW-004', description: "Manage dinner service and bar operations.", priority: 'High', riskLevel: 'Medium', proof: 'BEO', location: 'Venue' },
                    { id: 'HW-PW-005', description: "Prepare for the Vidaai ceremony, including decorating the car.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Venue' }
                ]
            }
        ]
    },
    {
        id: 'muslim_wedding_checklist',
        title: "Muslim Wedding Checklist",
        priceUSD: 49.99,
        priceINR: 7999,
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
                summary: "Covers the essential preparations for the Nikah, including coordinating with the officiant (Qazi), ensuring witnesses are present, and managing the Mahr agreement.",
                tasks: [
                    { id: 'MW-PNC-001', description: "Confirm date, time, and location with the Qazi/Imam.", priority: 'High', riskLevel: 'High', proof: 'Confirmation', location: 'Office' },
                    { id: 'MW-PNC-002', description: "Ensure the Mahr (dower) is agreed upon by both families.", priority: 'High', riskLevel: 'High', proof: 'Agreement', location: 'Home' },
                    { id: 'MW-PNC-003', description: "Arrange for the required number of witnesses.", priority: 'High', riskLevel: 'High', proof: 'Witness List', location: 'Office' },
                    { id: 'MW-PNC-004', description: "Prepare the Nikah-nama (marriage contract).", priority: 'High', riskLevel: 'High', proof: 'Document', location: 'Office' },
                    { id: 'MW-PNC-005', description: "Plan seating arrangements, often with segregation for men and women.", priority: 'Medium', riskLevel: 'Medium', proof: 'Layout Plan', location: 'Venue' }
                ]
            },
            {
                title: "🚗 Post-Nikah & Rukhsati",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                summary: "Manages the events immediately following the Nikah, including the bride's formal departure from her family's home (Rukhsati).",
                tasks: [
                    { id: 'MW-PNR-001', description: "Coordinate prayers and blessings after the Nikah is signed.", priority: 'High', riskLevel: 'Low', proof: 'Timeline', location: 'Venue' },
                    { id: 'MW-PNR-002', description: "Arrange for the groom to meet the bride's family.", priority: 'Medium', riskLevel: 'Low', proof: 'Timeline', location: 'Venue' },
                    { id: 'MW-PNR-003', description: "Plan the timing and logistics of the Rukhsati.", priority: 'High', riskLevel: 'Medium', proof: 'Timeline', location: 'Venue' },
                    { id: 'MW-PNR-004', description: "Coordinate transportation for the couple.", priority: 'High', riskLevel: 'Medium', proof: 'Booking Confirmation', location: 'Venue' },
                    { id: 'MW-PNR-005', description: "Ensure the bride's luggage is transferred to the groom's home.", priority: 'Medium', riskLevel: 'Medium', proof: 'Confirmation', location: 'Home' }
                ]
            },
            {
                title: "🍽️ Walima (Groom's Reception) Planning",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                summary: "A complete checklist for planning the Walima, the celebratory feast hosted by the groom's family, covering venue, catering, guest list, and decor.",
                tasks: [
                    { id: 'MW-WRP-001', description: "Book venue for the Walima.", priority: 'High', riskLevel: 'Medium', proof: 'Contract', location: 'Office' },
                    { id: 'MW-WRP-002', description: "Finalize guest list and send out invitations.", priority: 'High', riskLevel: 'Medium', proof: 'Guest List', location: 'Office' },
                    { id: 'MW-WRP-003', description: "Select catering and menu (ensuring Halal compliance).", priority: 'High', riskLevel: 'High', proof: 'BEO', location: 'Office' },
                    { id: 'MW-WRP-004', description: "Plan stage setup for the couple.", priority: 'High', riskLevel: 'Low', proof: 'Layout Plan', location: 'Venue' },
                    { id: 'MW-WRP-005', description: "Arrange for photography and videography.", priority: 'Medium', riskLevel: 'Low', proof: 'Contract', location: 'Office' }
                ]
            },
            {
                title: "🤝 General Vendor & Guest Management",
                department: "Admin",
                frequency: "As-Needed",
                role: "Event Planner",
                summary: "A general checklist for managing common wedding tasks like vendor contracts, payments, guest RSVPs, and creating a master timeline for all events.",
                tasks: [
                    { id: 'MW-GVGM-001', description: "Create a master contact sheet for all vendors.", priority: 'High', riskLevel: 'Medium', proof: 'Contact Sheet', location: 'Office' },
                    { id: 'MW-GVGM-002', description: "Track payments and due dates for all vendors.", priority: 'High', riskLevel: 'High', proof: 'Payment Schedule', location: 'Office' },
                    { id: 'MW-GVGM-003', description: "Manage guest RSVPs and dietary restrictions.", priority: 'Medium', riskLevel: 'Medium', proof: 'RSVP List', location: 'Office' },
                    { id: 'MW-GVGM-004', description: "Arrange accommodation for out-of-town guests.", priority: 'Medium', riskLevel: 'Low', proof: 'Booking Confirmations', location: 'Office' },
                    { id: 'MW-GVGM-005', description: "Create a detailed run-of-show timeline for all wedding events.", priority: 'High', riskLevel: 'High', proof: 'Timeline Document', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'auto_repair_playbook',
        title: "Auto Repair Shop Checklist",
        priceUSD: 99.99,
        priceINR: 7999,
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
                summary: "Standardizes the customer interaction at drop-off, ensuring all complaints are accurately documented and a thorough vehicle inspection is performed.",
                tasks: [
                    { id: 'ARS-VCISA-001', description: "Greet the customer and record their primary complaints.", priority: 'High', riskLevel: 'Medium', proof: 'Job Card', location: 'Reception' },
                    { id: 'ARS-VCISA-002', description: "Perform a walk-around inspection of the vehicle, noting any pre-existing damage.", priority: 'High', riskLevel: 'High', proof: 'Inspection Form/Photos', location: 'Reception' },
                    { id: 'ARS-VCISA-003', description: "Confirm customer contact details and preferred method of communication.", priority: 'High', riskLevel: 'Low', proof: 'Job Card', location: 'Reception' },
                    { id: 'ARS-VCISA-004', description: "Provide an estimated time for diagnosis.", priority: 'Medium', riskLevel: 'Medium', proof: 'Verbal/Written', location: 'Reception' },
                    { id: 'ARS-VCISA-005', description: "Tag keys and place protective covers on seat and steering wheel.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Reception' }
                ]
            },
            {
                title: "💰 Diagnosis, Quoting & Work Order",
                department: "Operations",
                frequency: "As-Needed",
                role: "Service Advisor",
                summary: "A process to ensure accurate diagnosis, clear quotation communication to the customer, and obtaining formal approval before any work begins.",
                tasks: [
                    { id: 'ARS-DQWO-001', description: "Assign the vehicle to a technician for diagnosis.", priority: 'High', riskLevel: 'Medium', proof: 'System Entry', location: 'Workshop' },
                    { id: 'ARS-DQWO-002', description: "Technician performs diagnosis and reports required repairs and parts.", priority: 'High', riskLevel: 'High', proof: 'Diagnostic Report', location: 'Workshop' },
                    { id: 'ARS-DQWO-003', description: "Create a detailed quote, including parts and labor costs.", priority: 'High', riskLevel: 'High', proof: 'Quotation Document', location: 'Office' },
                    { id: 'ARS-DQWO-004', description: "Contact the customer to explain the required work and get approval.", priority: 'High', riskLevel: 'High', proof: 'Recorded Call/Email', location: 'Office' },
                    { id: 'ARS-DQWO-005', description: "Once approved, convert the quote into a formal work order for the technician.", priority: 'High', riskLevel: 'Medium', proof: 'Work Order', location: 'Office' }
                ]
            },
            {
                title: "🛠️ Repair & Quality Control",
                department: "Operations",
                frequency: "As-Needed",
                role: "Technician",
                summary: "Ensures all repairs are performed to standard and a final quality control check (including a test drive) is completed to verify the issue is resolved.",
                tasks: [
                    { id: 'ARS-RQC-001', description: "Order necessary parts from the parts department.", priority: 'High', riskLevel: 'Medium', proof: 'Parts Requisition Form', location: 'Workshop' },
                    { id: 'ARS-RQC-002', description: "Perform all repairs as per the work order.", priority: 'High', riskLevel: 'High', proof: 'Technician Notes', location: 'Workshop' },
                    { id: 'ARS-RQC-003', description: "Once repairs are complete, a different technician or a supervisor performs a quality control check.", priority: 'High', riskLevel: 'High', proof: 'QC Checklist', location: 'Workshop' },
                    { id: 'ARS-RQC-004', description: "Conduct a test drive to ensure the initial complaint has been resolved.", priority: 'High', riskLevel: 'High', proof: 'Test Drive Log', location: 'Road Test' },
                    { id: 'ARS-RQC-005', description: "Clean the vehicle before notifying the customer.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Workshop' }
                ]
            },
            {
                title: " handover Vehicle Handover Experience",
                department: "Customer Service",
                frequency: "As-Needed",
                role: "Service Advisor",
                summary: "A checklist for a professional vehicle handover, including explaining the work done, reviewing the invoice, and ensuring the vehicle is clean.",
                tasks: [
                    { id: 'ARS-VHE-001', description: "Notify the customer that their vehicle is ready for pickup.", priority: 'High', riskLevel: 'Low', proof: 'Communication Log', location: 'Office' },
                    { id: 'ARS-VHE-002', description: "Prepare the final invoice.", priority: 'High', riskLevel: 'High', proof: 'Invoice', location: 'Office' },
                    { id: 'ARS-VHE-003', description: "When the customer arrives, explain the repairs performed and show any replaced parts if requested.", priority: 'High', riskLevel: 'Medium', proof: 'Verbal Communication', location: 'Reception' },
                    { id: 'ARS-VHE-004', description: "Process the final payment.", priority: 'High', riskLevel: 'High', proof: 'Payment Receipt', location: 'Reception' },
                    { id: 'ARS-VHE-005', description: "Hand over keys and thank the customer for their business.", priority: 'High', riskLevel: 'Low', proof: 'Observation', location: 'Reception' }
                ]
            }
        ]
    },
    {
        id: 'mall_operations_blueprint',
        title: "Shopping Mall Checklist",
        priceUSD: 129.99,
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
                summary: "A top-to-bottom security and safety sweep of the entire mall before opening to the public, covering all entrances, service corridors, and parking areas.",
                tasks: [
                    { id: 'MALL-DOS-001', description: "Conduct a full patrol of the mall perimeter and parking lots.", priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Exterior' },
                    { id: 'MALL-DOS-002', description: "Check that all CCTV cameras are online and recording correctly.", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Control Room' },
                    { id: 'MALL-DOS-003', description: "Test communication systems (walkie-talkies, PA system).", priority: 'High', riskLevel: 'Medium', proof: 'Test Log', location: 'Control Room' },
                    { id: 'MALL-DOS-004', description: "Unlock public entrances at the scheduled time.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Entrances' },
                    { id: 'MALL-DOS-005', description: "Brief the security team on daily events, VIP visits, or specific threats.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Control Room' }
                ]
            },
            {
                title: "🧹 Ongoing Operations & Housekeeping",
                department: "Operations",
                frequency: "Hourly",
                role: "Duty Manager",
                summary: "Manages the mall during operational hours, with hourly checks on restroom cleanliness, food court hygiene, and common area safety.",
                tasks: [
                    { id: 'MALL-OOH-001', description: "Conduct hourly checks of all public restrooms for cleanliness and supplies.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Log', location: 'Restrooms' },
                    { id: 'MALL-OOH-002', description: "Patrol common areas for spills, hazards, or maintenance issues.", priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Common Areas' },
                    { id: 'MALL-OOH-003', description: "Monitor food court tables and waste bins, coordinating with cleaning staff.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Food Court' },
                    { id: 'MALL-OOH-004', description: "Check functionality of elevators, escalators, and automatic doors.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Log', location: 'Common Areas' },
                    { id: 'MALL-OOH-005', description: "Respond to any tenant or customer complaints.", priority: 'High', riskLevel: 'Medium', proof: 'Incident Log', location: 'Operations Office' }
                ]
            },
            {
                title: "🌙 Daily Closing Protocol",
                department: "Security",
                frequency: "Daily",
                role: "Closing Manager",
                summary: "A systematic process for closing the mall, ensuring all patrons have exited, tenants have secured their stores, and the facility is locked down.",
                tasks: [
                    { id: 'MALL-DCP-001', description: "Make public announcements regarding mall closing times.", priority: 'Medium', riskLevel: 'Low', proof: 'PA Log', location: 'Control Room' },
                    { id: 'MALL-DCP-002', description: "Ensure all customers have exited the mall after closing time.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Sweep', location: 'Common Areas' },
                    { id: 'MALL-DCP-003', description: "Confirm all tenant stores have closed and secured their shutters/doors.", priority: 'High', riskLevel: 'Medium', proof: 'Tenant Check Log', location: 'Common Areas' },
                    { id: 'MALL-DCP-004', description: "Lock down all public entrances and service corridors.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Entrances' },
                    { id: 'MALL-DCP-005', description: "Switch to night lighting and security protocols.", priority: 'High', riskLevel: 'Medium', proof: 'System Log', location: 'Control Room' }
                ]
            },
            {
                title: "🤝 Weekly Maintenance & Tenant Relations",
                department: "Admin",
                frequency: "Weekly",
                role: "Mall Manager",
                summary: "A weekly review of technical systems (HVAC, elevators) and a structured process for communicating with tenant store managers about sales, events, and operational issues.",
                tasks: [
                    { id: 'MALL-WMTR-001', description: "Review reports on HVAC, elevator, and escalator performance.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Reports', location: 'Manager Office' },
                    { id: 'MALL-WMTR-002', description: "Send out a weekly newsletter or memo to all tenants with operational updates.", priority: 'Medium', riskLevel: 'Low', proof: 'Email Copy', location: 'Manager Office' },
                    { id: 'MALL-WMTR-003', description: "Walk the mall with the head of housekeeping and head of security to identify issues.", priority: 'High', riskLevel: 'Medium', proof: 'Walkthrough Log', location: 'Common Areas' },
                    { id: 'MALL-WMTR-004', description: "Review upcoming marketing events and coordinate with relevant tenants.", priority: 'High', riskLevel: 'Medium', proof: 'Marketing Calendar', location: 'Manager Office' }
                ]
            }
        ]
    },
    {
        id: 'call_center_playbook',
        title: "Call Center Checklist",
        priceUSD: 119.99,
        priceINR: 7999,
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
                summary: "A structured 15-minute huddle to energize the team, discuss targets for the day, and share critical updates before agents start taking calls.",
                tasks: [
                    { id: 'CC-PSTH-001', description: "Review previous shift's performance and any outstanding issues.", priority: 'High', riskLevel: 'Medium', proof: 'Handover Report', location: 'Huddle Area' },
                    { id: 'CC-PSTH-002', description: "Share daily targets (e.g., AHT, FCR, CSAT goals).", priority: 'High', riskLevel: 'Low', proof: 'Whiteboard/Screen', location: 'Huddle Area' },
                    { id: 'CC-PSTH-003', description: "Provide updates on any new products, processes, or promotions.", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Document', location: 'Huddle Area' },
                    { id: 'CC-PSTH-004', description: "Recognize top performers from the previous day.", priority: 'Medium', riskLevel: 'Low', proof: 'Verbal Announcement', location: 'Huddle Area' },
                    { id: 'CC-PSTH-005', description: "Conduct a quick Q&A session to address agent queries.", priority: 'Medium', riskLevel: 'Low', proof: 'Observation', location: 'Huddle Area' }
                ]
            },
            {
                title: "🎧 Live Operations & Quality Assurance (QA)",
                department: "QA",
                frequency: "Daily",
                role: "QA Analyst",
                summary: "Defines the process for live call monitoring and provides a scoring rubric to ensure agents are adhering to scripts, showing empathy, and resolving issues effectively.",
                tasks: [
                    { id: 'CC-LOQA-001', description: "Monitor a set number of live calls per agent per week.", priority: 'High', riskLevel: 'Medium', proof: 'Monitoring Schedule', location: 'QA Desk' },
                    { id: 'CC-LOQA-002', description: "Score calls based on a standardized QA form (e.g., greeting, issue resolution, closing).", priority: 'High', riskLevel: 'High', proof: 'QA Scorecard', location: 'QA Desk' },
                    { id: 'CC-LOQA-003', description: "Provide real-time feedback to agents for critical errors via 'call whispering' or chat.", priority: 'High', riskLevel: 'High', proof: 'System Log', location: 'QA Desk' },
                    { id: 'CC-LOQA-004', description: "Identify trends in agent performance and report to team leads.", priority: 'High', riskLevel: 'Medium', proof: 'Trend Report', location: 'QA Desk' },
                    { id: 'CC-LOQA-005', description: "Calibrate scoring with other QA analysts to ensure consistency.", priority: 'Medium', riskLevel: 'Medium', proof: 'Calibration Session Log', location: 'QA Desk' }
                ]
            },
            {
                title: "📈 Agent Performance & Coaching",
                department: "Operations",
                frequency: "Weekly",
                role: "Team Lead",
                summary: "A checklist for conducting effective one-on-one coaching sessions, using QA scores and performance data to provide targeted, constructive feedback.",
                tasks: [
                    { id: 'CC-APC-001', description: "Schedule and conduct weekly one-on-one coaching sessions with each agent.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Calendar', location: 'Meeting Room' },
                    { id: 'CC-APC-002', description: "Review agent's performance metrics (AHT, CSAT, QA scores) before the session.", priority: 'High', riskLevel: 'Medium', proof: 'Performance Dashboard', location: 'Meeting Room' },
                    { id: 'CC-APC-003', description: "Play back a positive call and a call needing improvement.", priority: 'High', riskLevel: 'Medium', proof: 'Call Recordings', location: 'Meeting Room' },
                    { id: 'CC-APC-004', description: "Jointly create an action plan for improvement.", priority: 'High', riskLevel: 'Medium', proof: 'Action Plan Document', location: 'Meeting Room' },
                    { id: 'CC-APC-005', description: "Document the coaching session and follow up on the action plan in the next session.", priority: 'High', riskLevel: 'Medium', proof: 'Coaching Log', location: 'Meeting Room' }
                ]
            },
            {
                title: "🌙 End-of-Shift & Reporting",
                department: "Operations",
                frequency: "Daily",
                role: "Team Lead",
                summary: "Ensures a smooth handover between shifts, including reporting on team performance, escalating unresolved issues, and preparing for the next shift.",
                tasks: [
                    { id: 'CC-EOSR-001', description: "Generate end-of-shift report showing team's performance against targets.", priority: 'High', riskLevel: 'Medium', proof: 'Shift Report', location: 'Team Lead Desk' },
                    { id: 'CC-EOSR-002', description: "Document and escalate any major customer issues or system outages.", priority: 'High', riskLevel: 'High', proof: 'Escalation Log', location: 'Team Lead Desk' },
                    { id: 'CC-EOSR-003', description: "Prepare a handover document for the next shift's team lead.", priority: 'High', riskLevel: 'Medium', proof: 'Handover Document', location: 'Team Lead Desk' },
                    { id: 'CC-EOSR-004', description: "Ensure all agents have logged out of systems correctly.", priority: 'Medium', riskLevel: 'Low', proof: 'System Check', location: 'Floor' }
                ]
            }
        ]
    },
    {
        id: 'waterpark_pool_safety',
        title: "Waterpark & Public Pool Safety Checklist",
        priceUSD: 119.99,
        priceINR: 7999,
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
                summary: "A comprehensive safety sweep before opening, covering waterslide structures, pool clarity, deck hazards, and readiness of all lifeguard stations.",
                tasks: [
                    { id: 'WP-POSI-001', description: "Walk the entire perimeter of each pool, checking for slip/trip hazards.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Pool Deck' },
                    { id: 'WP-POSI-002', description: "Inspect all waterslides and play structures for visible damage or loose parts.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Attractions' },
                    { id: 'WP-POSI-003', description: "Check that all lifeguard chairs are secure and have unobstructed views.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Lifeguard Stations' },
                    { id: 'WP-POSI-004', description: "Ensure all rescue equipment (rescue tubes, backboards) is in place and in good condition.", priority: 'High', riskLevel: 'High', proof: 'Equipment Checklist', location: 'Lifeguard Stations' },
                    { id: 'WP-POSI-005', description: "Test emergency communication systems (whistles, PA system).", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Control Room' }
                ]
            },
            {
                title: "🌊 Ongoing Operational Safety",
                department: "Operations",
                frequency: "Hourly",
                role: "Lifeguard Supervisor",
                summary: "An hourly checklist to ensure safety standards are maintained, including water quality testing, lifeguard rotation and vigilance checks, and monitoring of attraction queues.",
                tasks: [
                    { id: 'WP-OOS-001', description: "Test and log water chemistry (chlorine, pH) every hour.", priority: 'High', riskLevel: 'High', proof: 'Water Quality Log', location: 'Pump Room' },
                    { id: 'WP-OOS-002', description: "Ensure lifeguards are rotating stations as per schedule to maintain vigilance.", priority: 'High', riskLevel: 'High', proof: 'Rotation Schedule', location: 'Pool Deck' },
                    { id: 'WP-OOS-003', description: "Conduct random vigilance tests (e.g., using a silhouette dummy) to check lifeguard attentiveness.", priority: 'High', riskLevel: 'High', proof: 'Vigilance Test Log', location: 'Pool Deck' },
                    { id: 'WP-OOS-004', description: "Monitor attraction queues and enforce height/safety requirements.", priority: 'Medium', riskLevel: 'Medium', proof: 'Observation', location: 'Attractions' },
                    { id: 'WP-OOS-005', description: "Respond to and document any first aid incidents.", priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'First Aid Station' }
                ]
            },
            {
                title: "🌙 Closing Procedures",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Manager",
                summary: "Ensures the facility is safely closed, including clearing all pools, shutting down pumps and attractions, and securing the premises.",
                tasks: [
                    { id: 'WP-CP-001', description: "Make closing announcements and clear all patrons from the water.", priority: 'High', riskLevel: 'Medium', proof: 'PA Log', location: 'Pool Deck' },
                    { id: 'WP-CP-002', description: "Perform a final sweep of all pools and attractions to ensure they are empty.", priority: 'High', riskLevel: 'High', proof: 'Sweep Log', location: 'Entire Facility' },
                    { id: 'WP-CP-003', description: "Shut down pumps, slides, and other attractions as per procedure.", priority: 'High', riskLevel: 'Medium', proof: 'Shutdown Checklist', location: 'Pump Room' },
                    { id: 'WP-CP-004', description: "Store all loose rescue equipment securely.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Storage' },
                    { id: 'WP-CP-005', description: "Lock all gates and secure the facility perimeter.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Perimeter' }
                ]
            },
            {
                title: "🔧 Weekly & Monthly Checks",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Facility Manager",
                summary: "A schedule for deeper maintenance checks, including inspection of filtration systems, structural integrity of slides, and functionality of emergency alarms.",
                tasks: [
                    { id: 'WP-WMC-001', description: "Backwash all pool filters.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Pump Room' },
                    { id: 'WP-WMC-002', description: "Inspect slide structures, bolts, and seams for any signs of stress or wear.", priority: 'High', riskLevel: 'High', proof: 'Structural Inspection Log', location: 'Attractions' },
                    { id: 'WP-WMC-003', description: "Test emergency shut-off buttons for all attractions.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Attractions' },
                    { id: 'WP-WMC-004', description: "Conduct a full inventory and inspection of the first aid station.", priority: 'High', riskLevel: 'High', proof: 'Inventory Sheet', location: 'First Aid Station' },
                    { id: 'WP-WMC-005', description: "Run a full emergency action plan (EAP) drill with the entire staff monthly.", priority: 'High', riskLevel: 'High', proof: 'Drill Report', location: 'Entire Facility' }
                ]
            }
        ]
    },
    {
        id: 'airbnb_host_toolkit',
        title: "Airbnb Host Checklist",
        priceUSD: 69.99,
        priceINR: 7999,
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
                summary: "A comprehensive checklist to ensure the property is perfect for the next guest, covering deep cleaning, restocking essentials, and checking all appliances.",
                tasks: [
                    { id: 'ABNB-PGA-001', description: "Professionally clean the entire property (floors, bathroom, kitchen).", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Receipt/Photo', location: 'Property' },
                    { id: 'ABNB-PGA-002', description: "Change and wash all linens (bed sheets, towels).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Property' },
                    { id: 'ABNB-PGA-003', description: "Restock all consumables (toilet paper, soap, coffee, tea).", priority: 'High', riskLevel: 'Low', proof: 'Inventory Check', location: 'Property' },
                    { id: 'ABNB-PGA-004', description: "Check that all appliances and electronics are working (Wi-Fi, TV, AC).", priority: 'High', riskLevel: 'Medium', proof: 'Function Test', location: 'Property' },
                    { id: 'ABNB-PGA-005', description: "Set the smart lock code for the new guest.", priority: 'High', riskLevel: 'High', proof: 'System Log', location: 'Property' },
                    { id: 'ABNB-PGA-006', description: "Send check-in instructions to the guest 24 hours before arrival.", priority: 'High', riskLevel: 'Low', proof: 'Message Screenshot', location: 'Host System' }
                ]
            },
            {
                title: "🚪 Guest Check-Out / Tenant Move-Out",
                department: "Operations",
                frequency: "As-Needed",                
                role: "Host",
                summary: "A systematic process for inspecting the property for damages, managing the security deposit, and preparing for the cleaning and turnover process.",
                tasks: [
                    { id: 'ABNB-GCO-001', description: "Inspect the property for any new damages immediately after guest checkout.", priority: 'High', riskLevel: 'High', proof: 'Photo/Video Evidence', location: 'Property' },
                    { id: 'ABNB-GCO-002', description: "Check for any missing items.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Checklist', location: 'Property' },
                    { id: 'ABNB-GCO-003', description: "Report and claim for any damages through the rental platform if necessary.", priority: 'High', riskLevel: 'High', proof: 'Claim Submission', location: 'Host System' },
                    { id: 'ABNB-GCO-004', description: "Leave a review for the guest.", priority: 'Medium', riskLevel: 'Low', proof: 'Review Submission', location: 'Host System' },
                    { id: 'ABNB-GCO-005', description: "Schedule the cleaning crew for turnover.", priority: 'High', riskLevel: 'Medium', proof: 'Booking Confirmation', location: 'Host System' }
                ]
            },
            {
                title: "🛠️ Routine Maintenance & Compliance",
                department: "Maintenance",
                frequency: "Monthly",
                role: "Host",
                summary: "A monthly checklist for proactive property maintenance, including checking smoke detectors, cleaning AC filters, and ensuring compliance with local regulations.",
                tasks: [
                    { id: 'ABNB-RMC-001', description: "Test all smoke and carbon monoxide detectors.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Property' },
                    { id: 'ABNB-RMC-002', description: "Clean AC filters.", priority: 'Medium', riskLevel: 'Low', proof: 'Maintenance Log', location: 'Property' },
                    { id: 'ABNB-RMC-003', description: "Check for any leaks under sinks or around toilets.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Property' },
                    { id: 'ABNB-RMC-004', description: "Ensure fire extinguisher is accessible and not expired.", priority: 'High', riskLevel: 'High', proof: 'Inspection Tag', location: 'Property' },
                    { id: 'ABNB-RMC-005', description: "Review and ensure compliance with local short-term rental laws.", priority: 'High', riskLevel: 'High', proof: 'Compliance Certificate', location: 'Host System' }
                ]
            },
            {
                title: "💬 Guest Communication & Experience",
                department: "Customer Service",
                frequency: "Daily",
                role: "Host",
                summary: "Provides templates and a schedule for communicating with guests, from booking confirmation and check-in instructions to mid-stay check-ups and check-out reminders.",
                tasks: [
                    { id: 'ABNB-GCE-001', description: "Send booking confirmation message immediately after booking.", priority: 'High', riskLevel: 'Low', proof: 'Template', location: 'Host System' },
                    { id: 'ABNB-GCE-002', description: "Send check-in instructions and access codes 24 hours prior to arrival.", priority: 'High', riskLevel: 'Medium', proof: 'Template', location: 'Host System' },
                    { id: 'ABNB-GCE-003', description: "Send a 'Welcome' message a few hours after check-in to ensure everything is okay.", priority: 'High', riskLevel: 'Low', proof: 'Template', location: 'Host System' },
                    { id: 'ABNB-GCE-004', description: "Send check-out instructions the evening before departure.", priority: 'High', riskLevel: 'Low', proof: 'Template', location: 'Host System' },
                    { id: 'ABNB-GCE-005', description: "Send a 'Thank You' message after checkout and request a review.", priority: 'Medium', riskLevel: 'Low', proof: 'Template', location: 'Host System' }
                ]
            }
        ]
    },
    {
        id: 'car_dealership_playbook',
        title: "Car Dealership Checklist",
        priceUSD: 129.99,
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
                summary: "Ensures the dealership is ready for customers, covering vehicle cleaning and placement on the lot, showroom tidiness, and preparing for the day's appointments.",
                tasks: [
                    { id: 'CD-MSLP-001', description: "Ensure all display cars in the showroom are clean and polished.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Showroom' },
                    { id: 'CD-MSLP-002', description: "Check that all cars on the lot are clean and properly arranged.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Lot' },
                    { id: 'CD-MSLP-003', description: "Verify that all price stickers and promotional materials are accurate and displayed correctly.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Lot' },
                    { id: 'CD-MSLP-004', description: "Review daily appointment schedule and assign sales staff.", priority: 'High', riskLevel: 'Medium', proof: 'CRM System', location: 'Sales Office' },
                    { id: 'CD-MSLP-005', description: "Conduct a morning huddle to discuss sales targets and promotions.", priority: 'High', riskLevel: 'Medium', proof: 'Huddle Log', location: 'Sales Office' }
                ]
            },
            {
                title: "🤝 Sales & Customer Interaction Process",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                summary: "A step-by-step guide for the sales process, from greeting the customer and needs analysis to test drives and negotiation, ensuring a consistent and professional experience.",
                tasks: [
                    { id: 'CD-SCIP-001', description: "Greet customer within a set time of arrival (e.g., 2 minutes).", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Showroom' },
                    { id: 'CD-SCIP-002', description: "Conduct a needs analysis to understand customer requirements and budget.", priority: 'High', riskLevel: 'High', proof: 'CRM Entry', location: 'Sales Desk' },
                    { id: 'CD-SCIP-003', description: "Present suitable vehicle options and explain their features and benefits.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Showroom' },
                    { id: 'CD-SCIP-004', description: "Follow the test drive protocol (e.g., copy driver's license, pre-defined route).", priority: 'High', riskLevel: 'High', proof: 'Test Drive Form', location: 'Sales Desk' },
                    { id: 'CD-SCIP-005', description: "Log all customer interactions and follow-ups in the CRM system.", priority: 'High', riskLevel: 'High', proof: 'CRM Log', location: 'Sales Desk' }
                ]
            },
            {
                title: "🔑 Vehicle Handover & Delivery Experience",
                department: "Customer Service",
                frequency: "As-Needed",
                role: "Sales Associate",
                summary: "A checklist to create a memorable delivery experience, including final vehicle detailing, explaining features to the new owner, and completing all paperwork.",
                tasks: [
                    { id: 'CD-VHDE-001', description: "Ensure the vehicle has been detailed and is in pristine condition.", priority: 'High', riskLevel: 'Medium', proof: 'Detailing Sign-off', location: 'Delivery Bay' },
                    { id: 'CD-VHDE-002', description: "Verify all paperwork (registration, insurance, loan documents) is complete and signed.", priority: 'High', riskLevel: 'High', proof: 'Document Checklist', location: 'Sales Desk' },
                    { id: 'CD-VHDE-003', description: "Conduct a feature presentation, explaining key functions of the car to the customer.", priority: 'High', riskLevel: 'Low', proof: 'Observation', location: 'Delivery Bay' },
                    { id: 'CD-VHDE-004', description: "Schedule the first service appointment.", priority: 'Medium', riskLevel: 'Low', proof: 'Service Booking', location: 'Sales Desk' },
                    { id: 'CD-VHDE-005', description: "Follow up with the customer a few days after delivery to ensure satisfaction.", priority: 'High', riskLevel: 'Medium', proof: 'CRM Log', location: 'Sales Desk' }
                ]
            },
            {
                title: "📊 End of Day & Reporting",
                department: "Operations",
                frequency: "Daily",
                role: "Sales Manager",
                summary: "A process for closing the dealership, including securing all vehicles, end-of-day financial reporting, and preparing lead sheets for the next day.",
                tasks: [
                    { id: 'CD-EODR-001', description: "Ensure all vehicles are locked and keys are securely stored.", priority: 'High', riskLevel: 'High', proof: 'Key Log', location: 'Key Room' },
                    { id: 'CD-EODR-002', description: "Reconcile daily sales and deposits.", priority: 'High', riskLevel: 'High', proof: 'Finance Report', location: 'Sales Office' },
                    { id: 'CD-EODR-003', description: "Review daily CRM entries for completeness and follow-up tasks.", priority: 'High', riskLevel: 'Medium', proof: 'CRM Dashboard', location: 'Sales Office' },
                    { id: 'CD-EODR-004', description: "Secure the showroom and lot, and arm the security system.", priority: 'High', riskLevel: 'High', proof: 'Alarm Log', location: 'Dealership' }
                ]
            }
        ]
    },
    {
        id: 'corporate_launchkit',
        title: "Corporate Event Checklist",
        priceUSD: 39.99,
        priceINR: 7999,
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
                summary: "A comprehensive playbook for planning a product launch, from setting goals and budget to venue selection, media invitations, and post-event analysis.",
                tasks: [
                    { id: 'CE-PLEP-001', description: "Define event goals, KPIs, and budget.", priority: 'High', riskLevel: 'High', proof: 'Strategy Document', location: 'Marketing' },
                    { id: 'CE-PLEP-002', description: "Select and book the venue.", priority: 'High', riskLevel: 'High', proof: 'Venue Contract', location: 'Marketing' },
                    { id: 'CE-PLEP-003', description: "Develop a guest list (media, influencers, clients) and send invitations.", priority: 'High', riskLevel: 'Medium', proof: 'Guest List', location: 'Marketing' },
                    { id: 'CE-PLEP-004', description: "Plan the event agenda, including speakers and product demos.", priority: 'High', riskLevel: 'Medium', proof: 'Agenda Document', location: 'Marketing' },
                    { id: 'CE-PLEP-005', description: "Coordinate with AV, catering, and other vendors.", priority: 'High', riskLevel: 'High', proof: 'Vendor Contracts', location: 'Marketing' },
                    { id: 'CE-PLEP-006', description: "Prepare press kits and promotional materials.", priority: 'Medium', riskLevel: 'Medium', proof: 'Press Kit', location: 'Marketing' }
                ]
            },
            {
                title: "🧑‍💼 New Employee Onboarding (First Week)",
                department: "HR",
                frequency: "As-Needed",
                role: "HR Manager",
                summary: "A structured plan for a new hire's first week, ensuring they get their equipment, meet key team members, and understand the company culture and their role.",
                tasks: [
                    { id: 'CE-NEO-001', description: "Ensure workstation, laptop, and accounts are set up before Day 1.", priority: 'High', riskLevel: 'Medium', proof: 'IT Checklist', location: 'HR' },
                    { id: 'CE-NEO-002', description: "Schedule introductory meetings with their manager and key team members.", priority: 'High', riskLevel: 'Low', proof: 'Calendar Invites', location: 'HR' },
                    { id: 'CE-NEO-003', description: "Provide a welcome kit and company handbook.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'HR' },
                    { id: 'CE-NEO-004', description: "Conduct an HR orientation session covering policies and benefits.", priority: 'High', riskLevel: 'Medium', proof: 'Orientation Sign-off', location: 'HR' },
                    { id: 'CE-NEO-005', description: "Assign an onboarding buddy.", priority: 'Medium', riskLevel: 'Low', proof: 'Email Confirmation', location: 'HR' }
                ]
            },
            {
                title: " boardroom Annual General Meeting (AGM) Preparation",
                department: "Admin",
                frequency: "Annually",
                role: "Corporate Secretary",
                summary: "A compliance and logistics checklist for preparing an AGM, covering shareholder notices, agenda preparation, minutes, and voting procedures.",
                tasks: [
                    { id: 'CE-AGM-001', description: "Finalize and send out the Notice of AGM to all shareholders within the statutory timeline.", priority: 'High', riskLevel: 'High', proof: 'Dispatch Record', location: 'Legal' },
                    { id: 'CE-AGM-002', description: "Prepare and print the Annual Report.", priority: 'High', riskLevel: 'High', proof: 'Final Document', location: 'Legal' },
                    { id: 'CE-AGM-003', description: "Book the venue and arrange for AV equipment and catering.", priority: 'High', riskLevel: 'Medium', proof: 'Venue Contract', location: 'Admin' },
                    { id: 'CE-AGM-004', description: "Prepare the attendance register and ballot papers.", priority: 'High', riskLevel: 'High', proof: 'Documents', location: 'Admin' },
                    { id: 'CE-AGM-005', description: "Draft the script for the Chairman and prepare for potential Q&A.", priority: 'Medium', riskLevel: 'Medium', proof: 'Script Document', location: 'Legal' }
                ]
            },
            {
                title: "🎪 Trade Show & Conference Participation",
                department: "Marketing",
                frequency: "As-Needed",
                role: "Marketing Manager",
                summary: "A checklist for maximizing ROI from trade shows, including booth design, logistics, lead capture strategies, and pre-show and post-show marketing.",
                tasks: [
                    { id: 'CE-TSCP-001', description: "Book booth space and sponsorships.", priority: 'High', riskLevel: 'High', proof: 'Contract', location: 'Marketing' },
                    { id: 'CE-TSCP-002', description: "Design and produce booth graphics and materials.", priority: 'High', riskLevel: 'Medium', proof: 'Design Files', location: 'Marketing' },
                    { id: 'CE-TSCP-003', description: "Plan logistics for shipping, travel, and accommodation for staff.", priority: 'High', riskLevel: 'Medium', proof: 'Booking Confirmations', location: 'Marketing' },
                    { id: 'CE-TSCP-004', description: "Set up a lead capture system (e.g., badge scanner, app).", priority: 'High', riskLevel: 'High', proof: 'System Test', location: 'Marketing' },
                    { id: 'CE-TSCP-005', description: "Schedule pre-show meetings with key prospects and media.", priority: 'Medium', riskLevel: 'Medium', proof: 'Calendar Invites', location: 'Marketing' },
                    { id: 'CE-TSCP-006', description: "Plan post-show lead nurturing email campaigns.", priority: 'High', riskLevel: 'Medium', proof: 'Campaign Draft', location: 'Marketing' }
                ]
            }
        ]
    },
    {
        id: 'esg_reporting_framework',
        title: "ESG Reporting Checklist",
        priceUSD: 249.99,
        priceINR: 7999,
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
                summary: "A guide for collecting and verifying environmental data, including utility bills (Scope 2) and fuel consumption (Scope 1) for greenhouse gas emissions reporting.",
                tasks: [
                    { id: 'ESG-EDG-001', description: "Collect electricity bills from all facilities.", priority: 'High', riskLevel: 'High', proof: 'Utility Bills', location: 'All Sites' },
                    { id: 'ESG-EDG-002', description: "Collect data on fuel consumption from company vehicles and generators.", priority: 'High', riskLevel: 'High', proof: 'Fuel Logs', location: 'All Sites' },
                    { id: 'ESG-EDG-003', description: "Collect water usage data from all facilities.", priority: 'High', riskLevel: 'Medium', proof: 'Water Bills', location: 'All Sites' },
                    { id: 'ESG-EDG-004', description: "Track and quantify total waste generated and recycled.", priority: 'Medium', riskLevel: 'Medium', proof: 'Waste Management Reports', location: 'All Sites' }
                ]
            },
            {
                title: "🧑‍🤝‍🧑 Social Metrics Data Gathering",
                department: "HR",
                frequency: "Quarterly",
                role: "HR Manager",
                summary: "A checklist for collecting key social metrics, such as employee turnover, diversity statistics, health and safety incidents, and training hours.",
                tasks: [
                    { id: 'ESG-SMDG-001', description: "Calculate employee turnover rate.", priority: 'High', riskLevel: 'Medium', proof: 'HRIS Data', location: 'HR' },
                    { id: 'ESG-SMDG-002', description: "Gather data on workforce diversity (gender, age, etc.).", priority: 'High', riskLevel: 'Medium', proof: 'HRIS Data', location: 'HR' },
                    { id: 'ESG-SMDG-003', description: "Compile records of all workplace health and safety incidents.", priority: 'High', riskLevel: 'High', proof: 'Safety Reports', location: 'HR/Safety' },
                    { id: 'ESG-SMDG-004', description: "Track total hours and spend on employee training.", priority: 'Medium', riskLevel: 'Low', proof: 'Training Records', location: 'HR' }
                ]
            },
            {
                title: "⚖️ Governance Policy & Verification",
                department: "Legal",
                frequency: "Annually",
                role: "General Counsel",
                summary: "An audit checklist to verify the existence and implementation of key governance policies, such as anti-corruption, data privacy, and board oversight.",
                tasks: [
                    { id: 'ESG-GPV-001', description: "Verify that an anti-corruption and bribery policy is in place and has been communicated.", priority: 'High', riskLevel: 'High', proof: 'Policy Document', location: 'Legal' },
                    { id: 'ESG-GPV-002', description: "Confirm a whistleblower policy exists and is accessible to all employees.", priority: 'High', riskLevel: 'High', proof: 'Policy Document', location: 'Legal' },
                    { id: 'ESG-GPV-003', description: "Review board meeting minutes for evidence of ESG oversight.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Legal' },
                    { id: 'ESG-GPV-004', description: "Ensure a data privacy policy is in place and compliant with regulations like GDPR.", priority: 'High', riskLevel: 'High', proof: 'Policy Document', location: 'Legal' }
                ]
            },
            {
                title: "📢 Reporting & Stakeholder Engagement",
                department: "Investor Relations",
                frequency: "Annually",
                role: "IR Manager",
                summary: "A process for drafting the annual ESG report, engaging with stakeholders for feedback, and ensuring alignment with reporting frameworks like GRI or SASB.",
                tasks: [
                    { id: 'ESG-RSE-001', description: "Conduct a materiality assessment to identify key ESG topics for stakeholders.", priority: 'High', riskLevel: 'High', proof: 'Assessment Report', location: 'IR' },
                    { id: 'ESG-RSE-002', description: "Draft the ESG report in accordance with a chosen framework (e.g., GRI, SASB).", priority: 'High', riskLevel: 'High', proof: 'Draft Report', location: 'IR' },
                    { id: 'ESG-RSE-003', description: "Obtain third-party assurance for ESG data, if required.", priority: 'Medium', riskLevel: 'High', proof: 'Assurance Statement', location: 'IR' },
                    { id: 'ESG-RSE-004', description: "Publish the report on the company website.", priority: 'High', riskLevel: 'Medium', proof: 'Website Link', location: 'IR' }
                ]
            }
        ]
    },
    {
        id: 'iso_9001_audit_prep',
        title: "ISO 9001 Audit Checklist",
        priceUSD: 129.99,
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
                summary: "Ensures all quality management system (QMS) documents are current, approved, and accessible, and that all quality records are properly maintained.",
                tasks: [
                    { id: 'ISO-DCR-001', description: "Verify that the Quality Manual is updated and reflects current processes.", priority: 'High', riskLevel: 'High', proof: 'Quality Manual', location: 'QA' },
                    { id: 'ISO-DCR-002', description: "Check that there is a master list of all controlled documents.", priority: 'High', riskLevel: 'Medium', proof: 'Master Document List', location: 'QA' },
                    { id: 'ISO-DCR-003', description: "Ensure obsolete documents are removed from points of use.", priority: 'High', riskLevel: 'High', proof: 'Audit Trail', location: 'QA' },
                    { id: 'ISO-DCR-004', description: "Confirm that records are legible, identifiable, and retrievable.", priority: 'Medium', riskLevel: 'Medium', proof: 'Sample Record Review', location: 'All Depts' }
                ]
            },
            {
                title: "👑 Management & Leadership",
                department: "Management",
                frequency: "Quarterly",
                role: "Quality Manager",
                summary: "A checklist for preparing the mandatory Management Review Meeting, covering quality policy, objectives, and commitment from top leadership.",
                tasks: [
                    { id: 'ISO-ML-001', description: "Schedule and prepare the agenda for the Management Review meeting.", priority: 'High', riskLevel: 'High', proof: 'Meeting Agenda', location: 'Management' },
                    { id: 'ISO-ML-002', description: "Ensure quality objectives are defined and tracked.", priority: 'High', riskLevel: 'High', proof: 'Objectives Matrix', location: 'Management' },
                    { id: 'ISO-ML-003', description: "Document minutes from the Management Review, including action items.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Management' },
                    { id: 'ISO-ML-004', description: "Verify that top management communicates the importance of meeting customer and regulatory requirements.", priority: 'Medium', riskLevel: 'Medium', proof: 'Internal Communications', location: 'Management' }
                ]
            },
            {
                title: "📦 Product Realization & Service Delivery",
                department: "Operations",
                frequency: "Weekly",
                role: "Operations Manager",
                summary: "Audits the entire process from customer requirements and design to production and delivery, ensuring quality is maintained at every step.",
                tasks: [
                    { id: 'ISO-PRSD-001', description: "Review a sample of customer orders to ensure requirements are clearly defined.", priority: 'High', riskLevel: 'High', proof: 'Order Review Log', location: 'Sales' },
                    { id: 'ISO-PRSD-002', description: "Check that purchasing information clearly describes the product to be procured.", priority: 'High', riskLevel: 'Medium', proof: 'Sample Purchase Order', location: 'Procurement' },
                    { id: 'ISO-PRSD-003', description: "Verify that production processes are carried out under controlled conditions.", priority: 'High', riskLevel: 'High', proof: 'Work Instructions', location: 'Production' },
                    { id: 'ISO-PRSD-004', description: "Ensure monitoring and measuring equipment is calibrated.", priority: 'High', riskLevel: 'High', proof: 'Calibration Records', location: 'Production/QC' }
                ]
            },
            {
                title: "✅ Measurement, Analysis, and Improvement",
                department: "QA",
                frequency: "Monthly",
                role: "Quality Manager",
                summary: "Focuses on the core of ISO 9001: continuous improvement. This covers internal audits, handling non-conformities, and implementing corrective actions.",
                tasks: [
                    { id: 'ISO-MAI-001', description: "Ensure an internal audit schedule is in place and being followed.", priority: 'High', riskLevel: 'High', proof: 'Audit Schedule', location: 'QA' },
                    { id: 'ISO-MAI-002', description: "Review internal audit reports and check the status of findings.", priority: 'High', riskLevel: 'High', proof: 'Audit Reports', location: 'QA' },
                    { id: 'ISO-MAI-003', description: "Verify that non-conforming products are identified and controlled.", priority: 'High', riskLevel: 'High', proof: 'Non-conformance Reports', location: 'QC' },
                    { id: 'ISO-MAI-004', description: "Check that corrective actions are taken to eliminate the cause of non-conformities.", priority: 'High', riskLevel: 'High', proof: 'Corrective Action Reports', location: 'QA' }
                ]
            }
        ]
    },
    {
        id: 'eco_friendly_ops_playbook',
        title: "Sustainable Business Checklist",
        priceUSD: 69.99,
        priceINR: 7999,
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
                summary: "A checklist for implementing a robust waste segregation program, auditing disposal vendors, and finding opportunities to reduce overall waste.",
                tasks: [
                    { id: 'SB-WMR-001', description: "Ensure clearly labeled bins for different waste types (paper, plastic, organic) are available.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'All Sites' },
                    { id: 'SB-WMR-002', description: "Track monthly waste generation and recycling rates.", priority: 'High', riskLevel: 'Medium', proof: 'Waste Vendor Reports', location: 'Admin' },
                    { id: 'SB-WMR-003', description: "Conduct a waste audit to identify major sources of waste.", priority: 'Medium', riskLevel: 'Low', proof: 'Audit Report', location: 'Admin' },
                    { id: 'SB-WMR-004', description: "Implement a program to reduce single-use plastics in the office.", priority: 'Medium', riskLevel: 'Low', proof: 'Policy Document', location: 'Admin' }
                ]
            },
            {
                title: "💡 Energy Conservation",
                department: "Admin",
                frequency: "Monthly",
                role: "Facility Manager",
                summary: "Provides actionable steps for reducing electricity consumption, from simple behavioral changes to auditing equipment for energy efficiency.",
                tasks: [
                    { id: 'SB-EC-001', description: "Analyze monthly electricity bills to track consumption trends.", priority: 'High', riskLevel: 'Medium', proof: 'Utility Bills', location: 'Admin' },
                    { id: 'SB-EC-002', description: "Promote energy-saving behaviors like turning off lights and computers.", priority: 'Medium', riskLevel: 'Low', proof: 'Internal Communication', location: 'Admin' },
                    { id: 'SB-EC-003', description: "Conduct a walkthrough to identify energy wastage (e.g., lights left on).", priority: 'Medium', riskLevel: 'Low', proof: 'Walkthrough Log', location: 'All Sites' },
                    { id: 'SB-EC-004', description: "Explore upgrading to energy-efficient lighting (LEDs) or appliances.", priority: 'Low', riskLevel: 'Medium', proof: 'Proposal Document', location: 'Admin' }
                ]
            },
            {
                title: "💧 Water Conservation",
                department: "Admin",
                frequency: "Monthly",
                role: "Facility Manager",
                summary: "A guide to auditing water usage, checking for leaks, and implementing water-saving fixtures and practices throughout the facility.",
                tasks: [
                    { id: 'SB-WC-001', description: "Analyze monthly water bills.", priority: 'High', riskLevel: 'Medium', proof: 'Water Bills', location: 'Admin' },
                    { id: 'SB-WC-002', description: "Conduct regular checks for leaks in restrooms and pantry areas.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Log', location: 'All Sites' },
                    { id: 'SB-WC-003', description: "Install water-saving aerators on taps.", priority: 'Medium', riskLevel: 'Low', proof: 'Installation Report', location: 'All Sites' },
                    { id: 'SB-WC-004', description: "Promote water conservation awareness among employees.", priority: 'Low', riskLevel: 'Low', proof: 'Awareness Campaign', location: 'Admin' }
                ]
            },
            {
                title: "💚 Sustainable Procurement & Employee Engagement",
                department: "HR",
                frequency: "Quarterly",
                role: "HR Manager",
                summary: "Focuses on creating a green culture by establishing a sustainable procurement policy and running campaigns to engage employees in eco-friendly initiatives.",
                tasks: [
                    { id: 'SB-SPEE-001', description: "Develop a sustainable procurement policy that favors recycled or eco-friendly products.", priority: 'High', riskLevel: 'Medium', proof: 'Policy Document', location: 'Procurement' },
                    { id: 'SB-SPEE-002', description: "Organize an employee engagement activity related to sustainability (e.g., tree planting, cleanup drive).", priority: 'Medium', riskLevel: 'Low', proof: 'Event Photos', location: 'HR' },
                    { id: 'SB-SPEE-003', description: "Share sustainability performance and goals with all employees.", priority: 'Medium', riskLevel: 'Low', proof: 'Internal Newsletter', location: 'HR' },
                    { id: 'SB-SPEE-004', description: "Create a 'Green Team' of employee volunteers to drive initiatives.", priority: 'Medium', riskLevel: 'Low', proof: 'Team Charter', location: 'HR' }
                ]
            }
        ]
    },
    {
        id: 'cloud_kitchen_launchkit',
        title: "Cloud Kitchen Checklist",
        priceUSD: 89.99,
        priceINR: 7999,
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
                summary: "A guide to onboarding with food delivery platforms like Zomato/Swiggy, including menu setup, pricing strategy, and photo guidelines.",
                tasks: [
                    { id: 'CK-ASME-001', description: "Complete documentation for aggregator onboarding (FSSAI, GST, etc.).", priority: 'High', riskLevel: 'High', proof: 'Document Submission', location: 'Office' },
                    { id: 'CK-ASME-002', description: "Design a delivery-friendly menu with optimal pricing.", priority: 'High', riskLevel: 'High', proof: 'Menu Document', location: 'Office' },
                    { id: 'CK-ASME-003', description: "Arrange for a professional food photoshoot.", priority: 'High', riskLevel: 'Medium', proof: 'Photos', location: 'Kitchen' },
                    { id: 'CK-ASME-004', description: "Upload menu, photos, and pricing to all aggregator platforms.", priority: 'High', riskLevel: 'Medium', proof: 'Platform Screenshot', location: 'Office' },
                    { id: 'CK-ASME-005', description: "Ensure menu items are synced across all platforms.", priority: 'High', riskLevel: 'Medium', proof: 'System Check', location: 'Office' }
                ]
            },
            {
                title: "🥡 Packaging & Dispatch Station Setup",
                department: "Operations",
                frequency: "Daily",
                role: "Kitchen Manager",
                summary: "Focuses on designing an efficient packaging station with the right materials to ensure food quality and temperature are maintained during delivery.",
                tasks: [
                    { id: 'CK-PDSS-001', description: "Source high-quality, leak-proof, and insulated packaging materials.", priority: 'High', riskLevel: 'High', proof: 'Vendor Invoice', location: 'Kitchen' },
                    { id: 'CK-PDSS-002', description: "Set up a dedicated packaging station with all necessary supplies (containers, bags, cutlery, tape).", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Kitchen' },
                    { id: 'CK-PDSS-003', description: "Train staff on correct packaging procedures for each dish.", priority: 'High', riskLevel: 'Medium', proof: 'Training Log', location: 'Kitchen' },
                    { id: 'CK-PDSS-004', description: "Create a system for labeling orders clearly with customer details.", priority: 'High', riskLevel: 'High', proof: 'Label Template', location: 'Kitchen' }
                ]
            },
            {
                title: "🔥 Live Operations & Order Fulfillment (KOT to Handoff)",
                department: "Operations",
                frequency: "Daily",
                role: "Expo",
                summary: "The core operational checklist, managing the flow from when an order ticket (KOT) is printed to the final handoff to the delivery rider, minimizing mistakes and delays.",
                tasks: [
                    { id: 'CK-LOOF-001', description: "Acknowledge new orders on aggregator tablets immediately.", priority: 'High', riskLevel: 'High', proof: 'Tablet Log', location: 'Expo Station' },
                    { id: 'CK-LOOF-002', description: "Ensure KOTs (Kitchen Order Tickets) are printed and communicated clearly to the kitchen.", priority: 'High', riskLevel: 'Medium', proof: 'KOT Printout', location: 'Expo Station' },
                    { id: 'CK-LOOF-003', description: "Double-check the contents of each order against the KOT before sealing the bag.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Expo Station' },
                    { id: 'CK-LOOF-004', description: "Hand over the correct order to the correct delivery rider.", priority: 'High', riskLevel: 'High', proof: 'Rider App Check', location: 'Dispatch Area' },
                    { id: 'CK-LOOF-005', description: "Mark order as 'Food Ready' on the aggregator tablet to track prep time.", priority: 'High', riskLevel: 'Medium', proof: 'Tablet Log', location: 'Expo Station' }
                ]
            },
            {
                title: "💰 End-of-Day Reconciliation & Analysis",
                department: "Finance",
                frequency: "Daily",
                role: "Kitchen Manager",
                summary: "A process for reconciling daily orders and payments from all aggregator platforms, identifying discrepancies, and analyzing sales data.",
                tasks: [
                    { id: 'CK-EODRA-001', description: "Download daily sales reports from all aggregator platforms.", priority: 'High', riskLevel: 'High', proof: 'Sales Reports', location: 'Office' },
                    { id: 'CK-EODRA-002', description: "Reconcile platform sales with internal POS data.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Sheet', location: 'Office' },
                    { id: 'CK-EODRA-003', description: "Investigate and report any payment discrepancies to aggregators.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Office' },
                    { id: 'CK-EODRA-004', description: "Analyze top-selling and slow-moving menu items.", priority: 'Medium', riskLevel: 'Medium', proof: 'Analysis Report', location: 'Office' },
                    { id: 'CK-EODRA-005', description: "Track key metrics like order rejection rate and average prep time.", priority: 'High', riskLevel: 'Medium', proof: 'Performance Dashboard', location: 'Office' }
                ]
            }
        ]
    },
    {
        id: 'international_travel_planner',
        title: "International Travel Checklist",
        priceUSD: 24.99,
        priceINR: 7999,
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
                summary: "Covers the critical first steps of international travel, including passport validity checks, visa applications, and booking flights and accommodation.",
                tasks: [
                    { id: 'ITP-P1-001', description: "Check passport validity (must be valid for at least 6 months beyond travel dates).", priority: 'High', riskLevel: 'High', proof: 'Passport', location: 'Home' },
                    { id: 'ITP-P1-002', description: "Research and apply for necessary visas.", priority: 'High', riskLevel: 'High', proof: 'Visa Application', location: 'Home' },
                    { id: 'ITP-P1-003', description: "Book flights and accommodation.", priority: 'High', riskLevel: 'Medium', proof: 'Booking Confirmations', location: 'Home' },
                    { id: 'ITP-P1-004', description: "Make photocopies and digital copies of all important documents (passport, visa, tickets).", priority: 'High', riskLevel: 'Medium', proof: 'Copies', location: 'Home' }
                ]
            },
            {
                title: "🩺 Phase 2: Health & Finance (1-2 Months Out)",
                department: "Planning",
                frequency: "One-Time",
                role: "Traveler",
                summary: "Prepares you for health and money matters, including necessary vaccinations, travel insurance, and setting up international currency/cards.",
                tasks: [
                    { id: 'ITP-P2-001', description: "Consult a doctor for any required vaccinations or medications.", priority: 'High', riskLevel: 'High', proof: 'Doctor\'s Prescription', location: 'Home' },
                    { id: 'ITP-P2-002', description: "Purchase comprehensive travel insurance.", priority: 'High', riskLevel: 'High', proof: 'Insurance Policy', location: 'Home' },
                    { id: 'ITP-P2-003', description: "Inform your bank/credit card companies of your travel dates.", priority: 'High', riskLevel: 'Medium', proof: 'Bank Notification', location: 'Home' },
                    { id: 'ITP-P2-004', description: "Arrange for foreign currency or a multi-currency travel card.", priority: 'Medium', riskLevel: 'Medium', proof: 'Currency/Card', location: 'Home' }
                ]
            },
            {
                title: "🧳 Phase 3: Packing & Preparation (1 Week Out)",
                department: "Packing",
                frequency: "One-Time",
                role: "Traveler",
                summary: "A smart packing guide, covering everything from clothes and electronics to medications and travel documents, ensuring you don't forget any essentials.",
                tasks: [
                    { id: 'ITP-P3-001', description: "Pack appropriate clothing for the destination's climate.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Home' },
                    { id: 'ITP-P3-002', description: "Pack all necessary electronics and universal travel adapters.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Home' },
                    { id: 'ITP-P3-003', description: "Pack a small medical kit with personal medications.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Home' },
                    { id: 'ITP-P3-004', description: "Weigh your luggage to ensure it meets airline limits.", priority: 'Medium', riskLevel: 'Medium', proof: 'Weight Check', location: 'Home' }
                ]
            },
            {
                title: "✈️ Phase 4: Final 24 Hours",
                department: "Final Checks",
                frequency: "One-Time",
                role: "Traveler",
                summary: "The final countdown checklist for the day of travel, including online check-in, final document checks, charging devices, and home security.",
                tasks: [
                    { id: 'ITP-P4-001', description: "Check-in for your flight online.", priority: 'High', riskLevel: 'Medium', proof: 'Boarding Pass', location: 'Home' },
                    { id: 'ITP-P4-002', description: "Charge all electronic devices.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Home' },
                    { id: 'ITP-P4-003', description: "Confirm airport transfer arrangements.", priority: 'High', riskLevel: 'Medium', proof: 'Booking Confirmation', location: 'Home' },
                    { id: 'ITP-P4-004', description: "Double-check you have your passport, visa, tickets, and wallet.", priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Home' },
                    { id: 'ITP-P4-005', description: "Secure your home (lock doors/windows, stop mail, etc.).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Home' }
                ]
            }
        ]
    },
    {
        id: 'pet_travel_planner',
        title: "Pet-Friendly Travel Checklist",
        priceUSD: 29.99,
        priceINR: 7999,
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
                summary: "Covers the critical first steps, including checking airline pet policies, getting required health certificates from the vet, and microchipping.",
                tasks: [
                    { id: 'PTP-VAP-001', description: "Check airline's pet policy and book your pet's spot (in-cabin or cargo).", priority: 'High', riskLevel: 'High', proof: 'Booking Confirmation', location: 'Home' },
                    { id: 'PTP-VAP-002', description: "Visit the vet to get a health certificate and ensure all vaccinations are up to date.", priority: 'High', riskLevel: 'High', proof: 'Health Certificate', location: 'Vet Clinic' },
                    { id: 'PTP-VAP-003', description: "Microchip your pet if they aren't already.", priority: 'High', riskLevel: 'Medium', proof: 'Microchip Certificate', location: 'Vet Clinic' },
                    { id: 'PTP-VAP-004', description: "Purchase an IATA-compliant travel carrier.", priority: 'High', riskLevel: 'Medium', proof: 'Purchase Receipt', location: 'Home' }
                ]
            },
            {
                title: "🏨 Booking & Packing",
                department: "Planning",
                frequency: "One-Time",
                role: "Pet Owner",
                summary: "A guide to finding and confirming pet-friendly accommodation and a comprehensive packing list for your pet's 'go-bag' (food, water, toys, medication).",
                tasks: [
                    { id: 'PTP-BP-001', description: "Book pet-friendly hotels or accommodations and confirm their policies.", priority: 'High', riskLevel: 'Medium', proof: 'Booking Confirmation', location: 'Home' },
                    { id: 'PTP-BP-002', description: "Pack enough food and treats for the entire trip.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Home' },
                    { id: 'PTP-BP-003', description: "Pack any necessary medications, along with prescriptions.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Home' },
                    { id: 'PTP-BP-004', description: "Include familiar items like a favorite toy or blanket to reduce stress.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Home' },
                    { id: 'PTP-BP-005', description: "Pack a portable water bowl, waste bags, and a first-aid kit.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Home' }
                ]
            },
            {
                title: "📝 The Day Before Travel",
                department: "Preparation",
                frequency: "One-Time",
                role: "Pet Owner",
                summary: "Prepares your pet for the journey, including feeding guidelines, exercise, and getting them comfortable with their travel carrier.",
                tasks: [
                    { id: 'PTP-DBT-001', description: "Feed your pet a light meal a few hours before travel; do not feed right before leaving.", priority: 'High', riskLevel: 'Medium', proof: 'Verbal Confirmation', location: 'Home' },
                    { id: 'PTP-DBT-002', description: "Provide plenty of exercise to help them relax during travel.", priority: 'High', riskLevel: 'Low', proof: 'Verbal Confirmation', location: 'Home' },
                    { id: 'PTP-DBT-003', description: "Line the carrier with an absorbent pad and place a familiar item inside.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Home' },
                    { id: 'PTP-DBT-004', description: "Attach a 'Live Animal' sticker and your contact information to the carrier.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Home' }
                ]
            },
            {
                title: "🚗 Travel Day & Arrival",
                department: "Travel",
                frequency: "One-Time",
                role: "Pet Owner",
                summary: "A checklist for the day of travel to ensure your pet's safety and comfort, whether in-cabin or in the car, and tips for settling them in at the new location.",
                tasks: [
                    { id: 'PTP-TDA-001', description: "Arrive at the airport early to complete pet check-in procedures.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Airport' },
                    { id: 'PTP-TDA-002', description: "For car travel, secure the carrier so it cannot move around.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Car' },
                    { id: 'PTP-TDA-003', description: "Offer water at regular intervals but avoid large meals.", priority: 'Medium', riskLevel: 'Medium', proof: 'Observation', location: 'On the Go' },
                    { id: 'PTP-TDA-004', description: "Upon arrival, set up a familiar space for your pet with their bed, food, and water.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Destination' },
                    { id: 'PTP-TDA-005', description: "Take your pet for a walk to let them relieve themselves and explore the new surroundings.", priority: 'High', riskLevel: 'Low', proof: 'Observation', location: 'Destination' }
                ]
            }
        ]
    }
];

export type PremiumPack = (typeof premiumPacks)[0];
export type Checklist = (typeof premiumPacks)[0]['checklists'][0];

    

    

    

  

