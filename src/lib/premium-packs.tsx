
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
            "Master the 'Lost & Found' protocol to ensure guest trust and minimize liability.",
            "Implement the HACCP-based 'Kitchen Hygiene' checklist for food safety compliance.",
            "Standardize the critical 'Night Audit' process for financial accuracy.",
            "Includes often-overlooked SOPs for 'Pest Control' and 'HVAC Systems'."
        ],
        previewScenario: {
            title: "Executing a Flawless 5-Star Guest Check-In",
            description: "This scenario shows how different departments work together to create a seamless guest arrival experience, from front desk to housekeeping. Here are a few key tasks from different checklists that make it happen:",
            tasks: [
                { id: 'FO-CI-002', description: "Verify the guest's identity with a valid government-issued ID proof.", sourceChecklist: "Guest Check-In Process", priority: 'High' },
                { id: 'HK-DRC-018', description: "Perform final inspection of the room before leaving.", sourceChecklist: "Daily Room Cleaning", priority: 'High' },
                { id: 'FO-DO-010', description: "Prepare detailed shift handover notes for the next team, highlighting any pending issues.", sourceChecklist: "Reception Daily Operations", priority: 'High' },
                { id: 'SEC-CSM-001', description: "Check that all CCTV cameras are operational and recording.", sourceChecklist: "CCTV & Security Monitoring", priority: 'High' }
            ]
        },
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
                    { id: 'FO-CI-001', description: "Greet the guest warmly upon arrival with a smile", priority: 'High', riskLevel: 'Low', proof: 'CCTV Review', location: 'Front Desk' },
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
                tasks: [
                    { id: 'FB-BO-001', description: "Clean and sanitize bar counter, stools, and service area", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Bar' },
                    { id: 'FB-BO-002', description: "Check and stock glassware, ensuring all glasses are polished and free of chips", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Bar' },
                    { id: 'FB-BO-003', description: "Restock all liquors, wines, beers, and mixers to par levels", priority: 'High', riskLevel: 'Medium', proof: 'Stock Sheet', location: 'Bar' },
                    { id: 'FB-BO-004', description: "Prepare fresh garnishes (lemons, limes, olives) and juices", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Bar' },
                    { id: 'FB-BO-005', description: "Check functionality of all bar equipment (blenders, ice machine, POS)", priority: 'High', riskLevel: 'Medium', proof: 'Equipment Check', location: 'Bar' }
                ]
            },
            {
                title: "🍾 Bar Closing Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Bartender",
                summary: "Ensures the bar is securely and cleanly closed, covering inventory reconciliation, cleaning, waste disposal, and cash handling.",
                tasks: [
                    { id: 'FB-BC-001', description: "Store or dispose of used garnishes and open wine bottles correctly", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Bar' },
                    { id: 'FB-BC-002', description: "Clean all bar tools, shakers, and blenders", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Bar' },
                    { id: 'FB-BC-003', description: "Wipe down all surfaces, including counters and speed rails", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Bar' },
                    { id: 'FB-BC-004', description: "Conduct end-of-day inventory count and cash reconciliation", priority: 'High', riskLevel: 'High', proof: 'Inventory & POS Report', location: 'Bar' },
                    { id: 'FB-BC-005', description: "Secure all liquor inventory in locked cabinets or store rooms", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Bar' }
                ]
            },
            {
                title: "🏨 Room Service Delivery Checklist",
                department: "F&B",
                frequency: "As-Needed",
                role: "Room Service Waiter",
                summary: "Standardizes the process of delivering food to guest rooms, ensuring accuracy, timeliness, presentation, and a positive guest interaction.",
                tasks: [
                    { id: 'FB-RSD-001', description: "Check order slip for accuracy against the prepared food tray", priority: 'High', riskLevel: 'High', proof: 'Order Slip', location: 'Room Service' },
                    { id: 'FB-RSD-002', description: "Ensure tray is neatly arranged with all required condiments, cutlery, and napkins", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Room Service' },
                    { id: 'FB-RSD-003', description: "Deliver order to the guest room within the promised time frame", priority: 'High', riskLevel: 'Medium', proof: 'Delivery Log', location: 'Guest Room' },
                    { id: 'FB-RSD-004', description: "Announce 'Room Service' and present the order professionally to the guest", priority: 'High', riskLevel: 'Low', proof: 'Observation', location: 'Guest Room' },
                    { id: 'FB-RSD-005', description: "Obtain guest signature on the check", priority: 'High', riskLevel: 'Medium', proof: 'Signed Check', location: 'Guest Room' }
                ]
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
                tasks: [
                    { id: 'FB-KH-001', description: "Ensure kitchen floors are clean, dry, and non-slip", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kitchen' },
                    { id: 'FB-KH-002', description: "Verify all staff are adhering to personal hygiene standards (clean uniform, hairnets)", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Kitchen' },
                    { id: 'FB-KH-003', description: "Check that raw and cooked foods are stored separately to prevent cross-contamination", priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Kitchen' },
                    { id: 'FB-KH-004', description: "Record temperatures of all refrigerators and freezers", priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Kitchen' },
                    { id: 'FB-KH-005', description: "Ensure all food items are labeled, dated, and stored using the FIFO method", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' }
                ]
            },
            {
                title: "📈 Inventory & Stock Check Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Store Keeper",
                summary: "Manages the flow of goods to prevent stockouts and minimize waste. This checklist covers stock levels, requisitions, and storage conditions.",
                tasks: [
                    { id: 'FIN-IS-001', description: "Check stock levels of key raw materials daily", priority: 'High', riskLevel: 'Medium', proof: 'Stock Register', location: 'Stores' },
                    { id: 'FIN-IS-002', description: "Process and fulfill departmental requisitions", priority: 'High', riskLevel: 'Medium', proof: 'Requisition Forms', location: 'Stores' },
                    { id: 'FIN-IS-003', description: "Inspect storage areas for cleanliness, pests, and proper temperature", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Stores' },
                    { id: 'FIN-IS-004', description: "Receive, inspect, and record all incoming goods", priority: 'High', riskLevel: 'High', proof: 'Receiving Log', location: 'Stores' },
                    { id: 'FIN-IS-005', description: "Update inventory system with all stock movements", priority: 'High', riskLevel: 'High', proof: 'System Entry', location: 'Stores' }
                ]
            },
            {
                title: "🛠️ Daily Maintenance Rounds Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Technician",
                summary: "A proactive checklist for daily inspections of all hotel areas to identify and report maintenance issues before they become major problems for guests.",
                tasks: [
                    { id: 'MT-DMR-001', description: "Inspect all guest room corridors for damages or fused lights", priority: 'Medium', riskLevel: 'Low', proof: 'Logbook', location: 'Corridors' },
                    { id: 'MT-DMR-002', description: "Check public areas (lobby, restaurants) for any maintenance issues", priority: 'High', riskLevel: 'Medium', proof: 'Logbook', location: 'Public Areas' },
                    { id: 'MT-DMR-003', description: "Review maintenance requests from other departments and prioritize tasks", priority: 'High', riskLevel: 'High', proof: 'Request Log', location: 'Maintenance Office' },
                    { id: 'MT-DMR-004', description: "Log all completed tasks and report any pending issues", priority: 'High', riskLevel: 'Medium', proof: 'Logbook', location: 'Maintenance Office' },
                    { id: 'MT-DMR-005', description: "Conduct a quick check on major equipment like pumps and generators", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Utility Rooms' }
                ]
            },
            {
                title: "⚡ Electrical Systems Inspection Checklist",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Electrician",
                summary: "A crucial safety checklist for inspecting the hotel's electrical infrastructure, including panels, breakers, and backup systems, to prevent failures and fire hazards.",
                tasks: [
                    { id: 'MT-ES-001', description: "Check main electrical panel for any signs of overheating or loose connections", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Electrical Panel Room' },
                    { id: 'MT-ES-002', description: "Test the functionality of the backup generator", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Generator Room' },
                    { id: 'MT-ES-003', description: "Inspect a sample of guest rooms for any faulty switches, sockets, or lighting", priority: 'Medium', riskLevel: 'Medium', proof: 'Room Audit', location: 'Guest Rooms' },
                    { id: 'MT-ES-004', description: "Check all outdoor and facade lighting", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Exterior' },
                    { id: 'MT-ES-005', description: "Ensure all exit signs and emergency lights are functional", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Areas' }
                ]
            },
            {
                title: "💧 Plumbing & Water Systems Checklist",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Plumber",
                summary: "Prevents water-related issues by standardizing the inspection of pipes, pumps, tanks, and fixtures throughout the hotel to catch leaks and blockages early.",
                tasks: [
                    { id: 'MT-PWS-001', description: "Inspect guest bathrooms for any leaks from faucets, toilets, or pipes", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Guest Rooms' },
                    { id: 'MT-PWS-002', description: "Check public restrooms for any plumbing issues", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Public Areas' },
                    { id: 'MT-PWS-003', description: "Inspect the main water pumps and storage tanks", priority: 'High', riskLevel: 'High', proof: 'Pump Room Log', location: 'Pump Room' },
                    { id: 'MT-PWS-004', description: "Check the hot water system and boiler functionality", priority: 'High', riskLevel: 'High', proof: 'Boiler Room Log', location: 'Boiler Room' },
                    { id: 'MT-PWS-005', description: "Ensure all drainage systems are clear and free-flowing", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'All Areas' }
                ]
            },
            {
                title: "💨 HVAC & AC Systems Checklist",
                department: "Maintenance",
                frequency: "Monthly",
                role: "HVAC Technician",
                summary: "Ensures guest comfort and energy efficiency through routine checks of filters, coils, and controls for all air conditioning and ventilation systems.",
                tasks: [
                    { id: 'MT-HVAC-001', description: "Clean or replace AC filters in guest rooms and public areas", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'All Areas' },
                    { id: 'MT-HVAC-002', description: "Check and clean condenser coils on outdoor units", priority: 'Medium', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'Exterior' },
                    { id: 'MT-HVAC-003', description: "Inspect the main chiller plant for any leaks or unusual noises", priority: 'High', riskLevel: 'High', proof: 'Chiller Plant Log', location: 'Utility Rooms' },
                    { id: 'MT-HVAC-004', "description": "Verify thermostat controls are working correctly in a sample of rooms", priority: 'Medium', riskLevel: 'Low', proof: 'Room Audit', location: 'Guest Rooms' },
                    { id: 'MT-HVAC-005', "description": "Check all ventilation fans in kitchens and bathrooms", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'All Areas' }
                ]
            },
            {
                title: "↕️ Elevator & Escalator Safety Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Maintenance Supervisor",
                summary: "A daily safety check to ensure smooth and safe operation of all vertical transport, covering cleanliness, functionality, and emergency systems.",
                tasks: [
                    { id: 'MT-EES-001', description: "Check elevator car interior for cleanliness and any damage", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Elevators' },
                    { id: 'MT-EES-002', description: "Test the elevator door sensors to ensure they open and close correctly", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Elevators' },
                    { id: 'MT-EES-003', description: "Verify that the emergency alarm and phone inside the elevator are working", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Elevators' },
                    { id: 'MT-EES-004', description: "Check for smooth, quiet operation of elevators and escalators", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'All Areas' },
                    { id: 'MT-EES-005', description: "Ensure all safety notices and certificates are displayed and valid", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Elevators' }
                ]
            },
            {
                title: "🏊 Swimming Pool Maintenance Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Pool Technician",
                summary: "Maintains water quality and safety in the swimming pool area, covering chemical testing, cleaning, and equipment checks to meet health standards.",
                tasks: [
                    { id: 'MT-SPM-001', description: "Test and log chlorine and pH levels of the pool water", priority: 'High', riskLevel: 'High', proof: 'Water Test Log', location: 'Swimming Pool' },
                    { id: 'MT-SPM-002', description: "Clean the pool by skimming leaves and debris from the surface", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Swimming Pool' },
                    { id: 'MT-SPM-003', description: "Vacuum the pool floor", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Swimming Pool' },
                    { id: 'MT-SPM-004', description: "Check that all safety equipment (life rings, hooks) is in place and accessible", priority: 'High', riskLevel: 'High', proof: 'Equipment Check', location: 'Swimming Pool' },
                    { id: 'MT-SPM-005', description: "Inspect the pool pump and filtration system for proper operation", priority: 'High', riskLevel: 'Medium', proof: 'Pump Room Log', location: 'Pump Room' }
                ]
            },
            {
                title: "🌳 Landscaping & Outdoor Areas Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Gardener",
                summary: "Keeps the hotel's grounds looking pristine and safe, covering lawn care, plant health, irrigation, and cleanliness of outdoor walkways and features.",
                tasks: [
                    { id: 'MT-LOA-001', description: "Inspect lawns for health and trim grass as needed", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Gardens' },
                    { id: 'MT-LOA-002', description: "Water plants and gardens as per schedule", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Gardens' },
                    { id: 'MT-LOA-003', description: "Check and clean all outdoor walkways, driveways, and seating areas", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Exterior' },
                    { id: 'MT-LOA-004', description: "Inspect the irrigation system for leaks or blockages", priority: 'Medium', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Gardens' },
                    { id: 'MT-LOA-005', description: "Remove any weeds or overgrown plants", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Gardens' }
                ]
            },
            {
                title: "📹 CCTV & Security Monitoring Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Security Officer",
                summary: "Ensures the hotel's surveillance system is fully operational, covering camera functionality, recording status, and clear views to deter and record incidents.",
                tasks: [
                    { id: 'SEC-CSM-001', description: "Check that all CCTV cameras are operational and recording", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Security Control Room' },
                    { id: 'SEC-CSM-002', description: "Verify that all camera views are clear and unobstructed", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Security Control Room' },
                    { id: 'SEC-CSM-003', description: "Ensure that the recording system has sufficient storage space", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Security Control Room' },
                    { id: 'SEC-CSM-004', description: "Review footage from the previous night of key areas (entrances, lobby)", priority: 'Medium', riskLevel: 'Medium', proof: 'Review Log', location: 'Security Control Room' },
                    { id: 'SEC-CSM-005', description: "Report any faulty cameras or system errors immediately", priority: 'High', riskLevel: 'High', proof: 'Maintenance Log', location: 'Security Control Room' }
                ]
            },
            {
                title: "🔥 Fire Safety Checklist",
                department: "Security",
                frequency: "Weekly",
                role: "Security Supervisor",
                summary: "A critical compliance checklist for regularly inspecting all fire safety equipment, including extinguishers, alarms, and exit routes, to ensure readiness for an emergency.",
                tasks: [
                    { id: 'SEC-FS-001', description: "Visually inspect all fire extinguishers to ensure they are in place, charged, and not expired", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Areas' },
                    { id: 'SEC-FS-002', description: "Check that all fire exit routes and doors are clear and unobstructed", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'All Areas' },
                    { id: 'SEC-FS-003', description: "Test a sample of fire alarm call points", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'All Areas' },
                    { id: 'SEC-FS-004', description: "Inspect the main fire alarm panel for any faults", priority: 'High', riskLevel: 'High', proof: 'Panel Check', location: 'Security Control Room' },
                    { id: 'SEC-FS-005', description: "Verify that fire pump and sprinkler systems are in 'auto' mode and ready", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Pump Room' }
                ]
            },
            {
                title: "🚗 Parking & Valet Operations Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Valet Supervisor",
                summary: "Manages the safety and efficiency of the parking and valet service, covering lot cleanliness, traffic flow, key security, and staff professionalism.",
                tasks: [
                    { id: 'SEC-PVO-001', description: "Check parking lot for cleanliness, proper lighting, and clear signage", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Parking Lot' },
                    { id: 'SEC-PVO-002', description: "Ensure valet staff are in proper uniform and groomed professionally", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Entrance' },
                    { id: 'SEC-PVO-003', description: "Manage traffic flow at the entrance to prevent congestion", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Entrance' },
                    { id: 'SEC-PVO-004', description: "Ensure all guest keys are securely stored and tagged correctly", priority: 'High', riskLevel: 'High', proof: 'Key Cabinet Audit', location: 'Valet Desk' },
                    { id: 'SEC-PVO-005', description: "Reconcile valet tickets at the end of the shift", priority: 'High', riskLevel: 'Medium', proof: 'Ticket Log', location: 'Valet Desk' }
                ]
            },
            {
                title: "⚠️ Emergency Preparedness Checklist",
                department: "Security",
                frequency: "Monthly",
                role: "Security Supervisor",
                summary: "A monthly audit of all emergency supplies and systems, such as first aid kits, emergency contacts, and communication devices, to ensure the hotel is prepared for any crisis.",
                tasks: [
                    { id: 'SEC-EP-001', description: "Ensure all first aid kits are fully stocked and items are within expiry date", priority: 'High', riskLevel: 'High', proof: 'Inventory Check', location: 'All Areas' },
                    { id: 'SEC-EP-002', description: "Verify that all emergency contact numbers are updated and clearly displayed", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Key Areas' },
                    { id: 'SEC-EP-003', description: "Test the public address (PA) system for clarity and volume", priority: 'High', riskLevel: 'Medium', proof: 'Test Log', location: 'Security Control Room' },
                    { id: 'SEC-EP-004', description: "Check batteries and functionality of all walkie-talkies and emergency phones", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Security Control Room' },
                    { id: 'SEC-EP-005', description: "Review and update the emergency evacuation plan as needed", priority: 'High', riskLevel: 'High', proof: 'Plan Document', location: 'Management' }
                ]
            },
            {
                title: "🌙 Night Security Patrol Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Security Officer",
                summary: "Defines the standard procedure for nightly security patrols, ensuring all areas are checked, doors are secured, and any irregularities are reported.",
                tasks: [
                    { id: 'SEC-NSP-001', description: "Inspect all entry and exit points to ensure they are secure", priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Perimeter' },
                    { id: 'SEC-NSP-002', description: "Patrol all guest floors and public areas at regular intervals", priority: 'High', riskLevel: 'Medium', proof: 'Patrol Log', location: 'All Areas' },
                    { id: 'SEC-NSP-003', description: "Check that all administrative offices and back-of-house areas are locked", priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Back of House' },
                    { id: 'SEC-NSP-004', description: "Monitor CCTV screens for any unusual activity", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Security Control Room' },
                    { id: 'SEC-NSP-005', description: "Log all patrol activities and report any incidents or irregularities", priority: 'High', riskLevel: 'Medium', proof: 'Patrol Logbook', location: 'Security Control Room' }
                ]
            },
            {
                title: "🧖‍♀️ Spa Daily Operations Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Spa Manager",
                summary: "Ensures the spa provides a hygienic, relaxing, and professional experience, covering treatment room setup, therapist readiness, and inventory checks.",
                tasks: [
                    { id: 'WEL-SDO-001', description: "Check cleanliness and hygiene of all treatment rooms, showers, and saunas", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Spa' },
                    { id: 'WEL-SDO-002', description: "Ensure all treatment rooms are set up with fresh linens, towels, and products", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Spa' },
                    { id: 'WEL-SDO-003', description: "Review appointment schedule and assign therapists accordingly", priority: 'High', riskLevel: 'Medium', proof: 'Schedule', location: 'Spa Reception' },
                    { id: 'WEL-SDO-004', description: "Check stock levels of all professional products and retail items", priority: 'Medium', riskLevel: 'Medium', proof: 'Inventory Check', location: 'Spa Store' },
                    { id: 'WEL-SDO-005', description: "Ensure a calming ambiance with appropriate music, lighting, and temperature", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Spa' }
                ]
            },
            {
                title: "🏋️ Gym & Fitness Center Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Gym Manager",
                summary: "Focuses on member safety and experience by standardizing daily checks for equipment safety, cleanliness, and availability of amenities.",
                tasks: [
                    { id: 'WEL-GFC-001', description: "Inspect all gym equipment for safety, functionality, and wear", priority: 'High', riskLevel: 'High', proof: 'Equipment Log', location: 'Gym' },
                    { id: 'WEL-GFC-002', description: "Clean and sanitize all equipment, benches, and mats", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Gym' },
                    { id: 'WEL-GFC-003', description: "Ensure locker rooms and showers are clean and stocked with towels and toiletries", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Locker Rooms' },
                    { id: 'WEL-GFC-004', description: "Check that the water cooler has sufficient supply", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Gym' },
                    { id: 'WEL-GFC-005', description: "Report any faulty equipment immediately for repair", priority: 'High', riskLevel: 'High', proof: 'Maintenance Log', location: 'Gym' }
                ]
            },
            {
                title: "🎟️ Concierge Desk Checklist",
                department: "Front Office",
                frequency: "Daily",
                role: "Concierge",
                summary: "Prepares the concierge desk to provide exceptional guest service, ensuring all information on tours, transport, and events is up-to-date and accurate.",
                tasks: [
                    { id: 'FO-CD-001', description: "Review and update tour, transport, and event schedules", priority: 'Medium', riskLevel: 'Low', proof: 'System Check', location: 'Concierge Desk' },
                    { id: 'FO-CD-002', description: "Ensure a stock of local maps, brochures, and restaurant menus is available", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Concierge Desk' },
                    { id: 'FO-CD-003', description: "Review any pending guest requests from the previous shift", priority: 'High', riskLevel: 'Medium', proof: 'Handover Log', location: 'Concierge Desk' },
                    { id: 'FO-CD-004', description: "Confirm any bookings made for guests (tours, restaurants, taxis)", priority: 'High', riskLevel: 'Medium', proof: 'Confirmation Emails/Calls', location: 'Concierge Desk' },
                    { id: 'FO-CD-005', description: "Maintain a clean and organized desk area", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Concierge Desk' }
                ]
            },
            {
                title: "👶 Kids Club / Play Area Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Kids Club Supervisor",
                summary: "Prioritizes child safety through daily inspections of all play equipment, toys, and the overall environment to remove any potential hazards.",
                tasks: [
                    { id: 'WEL-KC-001', description: "Inspect all play equipment and toys for safety hazards (sharp edges, small parts)", priority: 'High', riskLevel: 'High', proof: 'Safety Log', location: 'Kids Club' },
                    { id: 'WEL-KC-002', description: "Clean and sanitize all toys, surfaces, and play mats", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kids Club' },
                    { id: 'WEL-KC-003', description: "Ensure staff-to-child ratios are maintained as per policy", priority: 'High', riskLevel: 'High', proof: 'Roster Check', location: 'Kids Club' },
                    { id: 'WEL-KC-004', description: "Verify that all children are signed in and out by an authorized parent or guardian", priority: 'High', riskLevel: 'High', proof: 'Sign-in/Out Register', location: 'Kids Club' },
                    { id: 'WEL-KC-005', description: "Check that the first aid kit is stocked and accessible", priority: 'High', riskLevel: 'High', proof: 'Inventory Check', location: 'Kids Club' }
                ]
            },
            {
                title: "⭐ Guest Feedback & Experience Checklist",
                department: "Management",
                frequency: "Daily",
                role: "Duty Manager",
                summary: "A process for systematically collecting, reviewing, and acting on guest feedback from all departments to drive continuous improvement.",
                tasks: [
                    { id: 'MGMT-GFE-001', description: "Collect and review guest feedback forms from all departments daily", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Forms', location: 'Manager\'s Office' },
                    { id: 'MGMT-GFE-002', description: "Monitor online reviews on platforms like TripAdvisor, Google, etc.", priority: 'High', riskLevel: 'Medium', proof: 'Online Dashboard', location: 'Manager\'s Office' },
                    { id: 'MGMT-GFE-003', description: "Share positive feedback with the concerned staff/department to boost morale", priority: 'Medium', riskLevel: 'Low', proof: 'Internal Communication', location: 'All Departments' },
                    { id: 'MGMT-GFE-004', description: "Analyze negative feedback to identify root causes and trends", priority: 'High', riskLevel: 'High', proof: 'Analysis Report', location: 'Manager\'s Office' },
                    { id: 'MGMT-GFE-005', description: "Develop and track action plans to address recurring issues", priority: 'High', riskLevel: 'High', proof: 'Action Plan Document', location: 'Manager\'s Office' }
                ]
            },
            {
                title: "🧾 Night Audit Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Night Auditor",
                summary: "The critical end-of-day financial process to reconcile all hotel revenues, close the business day, and prepare reports for management.",
                tasks: [
                    { id: 'FIN-NA-001', description: "Reconcile all guest folios with charges from POS systems (restaurant, spa, etc.)", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Back Office' },
                    { id: 'FIN-NA-002', description: "Post all room charges and taxes for the day", priority: 'High', riskLevel: 'High', proof: 'System Log', location: 'Back Office' },
                    { id: 'FIN-NA-003', description: "Process all credit card transactions from the day and reconcile batches", priority: 'High', riskLevel: 'High', proof: 'Credit Card Settlement Report', location: 'Back Office' },
                    { id: 'FIN-NA-004', description: "Run the end-of-day process in the Property Management System (PMS)", priority: 'High', riskLevel: 'High', proof: 'System Log', location: 'Back Office' },
                    { id: 'FIN-NA-005', description: "Prepare and distribute the daily revenue and occupancy reports to management", priority: 'High', riskLevel: 'Medium', proof: 'Daily Reports', location: 'Back Office' }
                ]
            },
            {
                title: "📦 Procurement Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Procurement Officer",
                summary: "Standardizes the purchasing process, ensuring all purchase requests are properly approved and documented before being sent to vendors.",
                tasks: [
                    { id: 'FIN-PROC-001', description: "Review purchase requisitions from all departments for completeness and approval", priority: 'High', riskLevel: 'Medium', proof: 'Requisition Forms', location: 'Procurement' },
                    { id: 'FIN-PROC-002', description: "Obtain quotations from approved vendors for high-value items", priority: 'High', riskLevel: 'Medium', proof: 'Quotation Comparison', location: 'Procurement' },
                    { id: 'FIN-PROC-003', description: "Create and issue purchase orders (POs) to selected vendors", priority: 'High', riskLevel: 'Medium', proof: 'Purchase Orders', location: 'Procurement' },
                    { id: 'FIN-PROC-004', description: "Track the status of all open purchase orders", priority: 'High', riskLevel: 'Medium', proof: 'PO Tracker', location: 'Procurement' },
                    { id: 'FIN-PROC-005', description: "Ensure that goods received match the purchase order details", priority: 'High', riskLevel: 'High', proof: 'Goods Received Note (GRN)', location: 'Stores' }
                ]
            },
            {
                title: "🛒 Vendor Management Checklist",
                department: "Finance",
                frequency: "Weekly",
                role: "Procurement Manager",
                summary: "A weekly review process to manage vendor relationships, track performance against contracts, and ensure the hotel is receiving quality service.",
                tasks: [
                    { id: 'FIN-VM-001', description: "Review contracts and SLAs with current vendors", priority: 'Medium', riskLevel: 'Medium', proof: 'Contract Files', location: 'Procurement' },
                    { id: 'FIN-VM-002', description: "Evaluate vendor performance based on quality, delivery timeliness, and price", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Scorecard', location: 'Procurement' },
                    { id: 'FIN-VM-003', description: "Address any issues or disputes with vendors promptly", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Procurement' },
                    { id: 'FIN-VM-004', description: "Explore new vendors to ensure competitive pricing and quality", priority: 'Medium', riskLevel: 'Medium', proof: 'New Vendor Research', location: 'Procurement' },
                    { id: 'FIN-VM-005', description: "Maintain an updated and approved vendor list", priority: 'High', riskLevel: 'Medium', proof: 'Vendor Master File', location: 'Procurement' }
                ]
            },
            {
                title: "📊 Payroll Processing Checklist",
                department: "Finance",
                frequency: "Monthly",
                role: "HR Manager",
                summary: "A step-by-step guide to ensure accurate and timely payroll processing, from verifying attendance records to final bank transfers.",
                tasks: [
                    { id: 'FIN-PAY-001', description: "Verify staff attendance records from biometric system or registers", priority: 'High', riskLevel: 'High', proof: 'Attendance Report', location: 'HR Office' },
                    { id: 'FIN-PAY-002', description: "Calculate overtime, deductions, and any special allowances", priority: 'High', riskLevel: 'High', proof: 'Payroll Calculation Sheet', location: 'HR Office' },
                    { id: 'FIN-PAY-003', description: "Get payroll approved by the finance head or general manager", priority: 'High', riskLevel: 'High', proof: 'Signed Approval', location: 'HR Office' },
                    { id: 'FIN-PAY-004', description: "Process salary transfers to employee bank accounts", priority: 'High', riskLevel: 'High', proof: 'Bank Transfer Statement', location: 'Accounts' },
                    { id: 'FIN-PAY-005', description: "Generate and distribute payslips to all employees", priority: 'High', riskLevel: 'Medium', proof: 'Payslip Records', location: 'HR Office' }
                ]
            },
            {
                title: "🗂️ Inventory Control Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Store Keeper",
                summary: "A daily checklist to maintain control over inventory, tracking consumption, managing stock levels, and preventing wastage or theft.",
                tasks: [
                    { id: 'FIN-IC-001', description: "Review daily consumption reports from all outlets", priority: 'High', riskLevel: 'Medium', proof: 'Consumption Reports', location: 'Stores' },
                    { id: 'FIN-IC-002', description: "Conduct physical spot checks on high-value items", priority: 'High', riskLevel: 'High', proof: 'Spot Check Log', location: 'Stores' },
                    { id: 'FIN-IC-003', description: "Update stock records for all goods issued and received", priority: 'High', riskLevel: 'High', proof: 'Stock Ledger', location: 'Stores' },
                    { id: 'FIN-IC-004', description: "Identify and report slow-moving or non-moving items", priority: 'Medium', riskLevel: 'Medium', proof: 'Non-Moving Items Report', location: 'Stores' },
                    { id: 'FIN-IC-005', description: "Ensure proper storage conditions to prevent spoilage or damage", priority: 'High', riskLevel: 'High', proof: 'Storage Audit', location: 'Stores' }
                ]
            },
            { id: "FIN-AP-005", description: "Reconcile vendor statements with accounts payable records", priority: "High", riskLevel: "Medium", proof: "Reconciliation Statement", location: "Accounts" },
{ id: "FIN-CH-005", description: "Report any cash shortages or overages immediately", priority: "High", riskLevel: "High", proof: "Discrepancy Report", location: "Accounts" } ,{ id: "FB-RTR-005", description: "Have a plan for quickly securing furniture in case of high winds or rain", priority: "High", riskLevel: "High", proof: "Emergency Plan", location: "Rooftop" } ,{ id: "FO-BC-005", description: "Keep a stock of basic stationery for guest use", priority: "Low", riskLevel: "Low", proof: "Inventory Check", location: "Business Center" } ,{ id: "FB-CBH-005", description: "Brief all staff on their roles and the event timeline", priority: "High", riskLevel: "Medium", proof: "Briefing Log", location: "Banquet Hall" } ,{ id: "HK-LP-005", description: "Track the volume of linen processed and report any major deviations", priority: "Medium", riskLevel: "Low", proof: "Production Report", location: "Laundry Plant" } ,{ id: "HR-SC-005", description: "Collect feedback from staff on food quality and variety", priority: "Medium", riskLevel: "Low", proof: "Feedback Box/Survey", location: "Staff Canteen" } ,{ id: "WEL-KPA-005", description: "Have a first-aid kit readily available and checked regularly", priority: "High", riskLevel: "High", proof: "First-Aid Log", location: "Kids Club" } ,{
                title: "🧮 Accounts Payable Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Accountant",
                summary: "Ensures all supplier invoices are accurately processed, verified against purchase orders, and prepared for payment on time.",
                tasks: [
                    { id: 'FIN-AP-001', description: "Verify all supplier invoices against corresponding purchase orders (PO)", priority: 'High', riskLevel: 'High', proof: 'Invoice/PO Match', location: 'Accounts' },
                    { id: 'FIN-AP-002', description: "Check invoices for accuracy in pricing and calculations", priority: 'High', riskLevel: 'High', proof: 'Invoice Audit', location: 'Accounts' },
                    { id: 'FIN-AP-003', description: "Get approval from the relevant department head for payment", priority: 'High', riskLevel: 'High', proof: 'Signed Invoice', location: 'Accounts' },
                    { id: 'FIN-AP-004', description: "Process payments to vendors within the agreed credit period", priority: 'High', riskLevel: 'Medium', proof: 'Payment Vouchers', location: 'Accounts' },
                ]
            },
            {
                title: "💵 Cash Handling Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Cashier",
                summary: "A crucial financial control checklist to ensure all cash transactions are handled securely and reconciled accurately at all points of sale.",
                tasks: [
                    { id: 'FIN-CH-001', description: "Verify the opening cash float at each POS counter with a witness", priority: 'High', riskLevel: 'High', proof: 'Float Log', location: 'POS Counters' },
                    { id: 'FIN-CH-002', description: "Ensure all cash transactions are recorded accurately in the POS system", priority: 'High', riskLevel: 'High', proof: 'POS Transaction Log', location: 'POS Counters' },
                    { id: 'FIN-CH-003', description: "Reconcile cash collected with the POS report at the end of the shift", priority: 'High', riskLevel: 'High', proof: 'Cash Reconciliation Sheet', location: 'POS Counters' },
                    { id: 'FIN-CH-004', description: "Deposit the day's cash collection into the main safe or bank drop", priority: 'High', riskLevel: 'High', proof: 'Deposit Slip', location: 'Accounts' },
                ]
            },
            {
                title: "🌆 Rooftop / Terrace Restaurant Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Restaurant Manager",
                summary: "Specific checks for outdoor dining venues, focusing on weather preparedness, safety of railings, and cleanliness of outdoor furniture and flooring.",
                tasks: [
                    { id: 'FB-RTR-001', description: "Check cleanliness of terrace flooring, furniture, and railings", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Rooftop' },
                    { id: 'FB-RTR-002', description: "Inspect railings and barriers for safety and stability", priority: 'High', riskLevel: 'High', proof: 'Safety Log', location: 'Rooftop' },
                    { id: 'FB-RTR-003', description: "Check weather forecast and prepare accordingly (e.g., umbrellas, heaters)", priority: 'High', riskLevel: 'Medium', proof: 'Weather Report', location: 'Rooftop' },
                    { id: 'FB-RTR-004', description: "Ensure outdoor lighting is functional", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Rooftop' },
                ]
            },
            {
                title: "🖥️ Business Center Checklist",
                department: "Front Office",
                frequency: "Daily",
                role: "Front Desk Agent",
                summary: "Ensures the business center is ready for guest use, with functional computers, printers, and a clean, professional environment.",
                tasks: [
                    { id: 'FO-BC-001', description: "Ensure all computers are functioning with stable internet access", priority: 'High', riskLevel: 'Low', proof: 'System Check', location: 'Business Center' },
                    { id: 'FO-BC-002', description: "Check printer for paper and ink/toner levels", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Business Center' },
                    { id: 'FO-BC-003', description: "Clean and sanitize keyboards, mice, and desk surfaces", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Business Center' },
                    { id: 'FO-BC-004', description: "Ensure the area is quiet and presentable", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Business Center' },
                    { id: 'FO-BC-005', description: "Keep a stock of basic stationery for guest use", priority: 'Low', riskLevel: 'Low', proof: 'Inventory Check', location: 'Business Center' }
                ]
            },
            {
                title: "🎤 Conference & Banquet Hall Checklist",
                department: "F&B",
                frequency: "As-Needed",
                role: "Banquet Manager",
                summary: "The master plan for setting up conference and banquet events, ensuring correct seating, functional AV equipment, and adherence to the event order.",
                tasks: [
                    { id: 'FB-CBH-001', description: "Inspect seating arrangement against the event's floor plan", priority: 'High', riskLevel: 'Medium', proof: 'Floor Plan', location: 'Banquet Hall' },
                    { id: 'FB-CBH-002', description: "Test all audio-visual equipment (microphones, projectors, screens)", priority: 'High', riskLevel: 'High', proof: 'AV Test Log', location: 'Banquet Hall' },
                    { id: 'FB-CBH-003', description: "Check temperature and lighting controls", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Banquet Hall' },
                    { id: 'FB-CBH-004', description: "Coordinate with catering based on the Banquet Event Order (BEO)", priority: 'High', riskLevel: 'High', proof: 'BEO Review', location: 'Banquet Hall' },
                    { id: 'FB-CBH-005', description: "Brief all staff on their roles and the event timeline", priority: 'High', riskLevel: 'Medium', proof: 'Briefing Log', location: 'Banquet Hall' }
                ]
            },
            {
                title: "🏭 Laundry Plant Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Laundry Supervisor",
                summary: "A checklist for the industrial-scale laundry operation, focusing on machine maintenance, chemical usage, and workflow efficiency to process high volumes of linen.",
                tasks: [
                    { id: 'HK-LP-001', description: "Inspect all washing machines and dryers for correct functionality and settings", priority: 'High', riskLevel: 'Medium', proof: 'Machine Log', location: 'Laundry Plant' },
                    { id: 'HK-LP-002', description: "Check levels of all detergents, softeners, and other chemicals", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Check', location: 'Laundry Plant' },
                    { id: 'HK-LP-003', description: "Monitor the workflow for any bottlenecks in sorting, washing, or folding", priority: 'Medium', riskLevel: 'Medium', proof: 'Observation', location: 'Laundry Plant' },
                    { id: 'HK-LP-004', description: "Ensure all safety procedures are being followed by staff", priority: 'High', riskLevel: 'High', proof: 'Safety Audit', location: 'Laundry Plant' },
                    { id: 'HK-LP-005', description: "Track the volume of linen processed and report any major deviations", priority: 'Medium', riskLevel: 'Low', proof: 'Production Report', location: 'Laundry Plant' }
                ]
            },
            {
                title: "🍴 Staff Canteen Checklist",
                department: "HR",
                frequency: "Daily",
                role: "Admin Manager",
                summary: "Focuses on the welfare of staff by ensuring the canteen provides hygienic, quality food in a clean and safe environment.",
                tasks: [
                    { id: 'HR-SC-001', description: "Check food quality, taste, and hygiene before each service (breakfast, lunch, dinner)", priority: 'High', riskLevel: 'High', proof: 'Food Tasting Log', location: 'Staff Canteen' },
                    { id: 'HR-SC-002', description: "Ensure the dining area is clean and seating is adequate", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Staff Canteen' },
                    { id: 'HR-SC-003', description: "Check that the kitchen and food storage areas are clean and compliant with safety norms", priority: 'High', riskLevel: 'High', proof: 'Kitchen Audit', location: 'Staff Canteen' },
                    { id: 'HR-SC-004', description: "Monitor food wastage and implement measures to reduce it", priority: 'Medium', riskLevel: 'Medium', proof: 'Wastage Log', location: 'Staff Canteen' },
                    { id: 'HR-SC-005', description: "Collect feedback from staff on food quality and variety", priority: 'Medium', riskLevel: 'Low', proof: 'Feedback Box/Survey', location: 'Staff Canteen' }
                ]
            },
            {
                title: "🎮 Kids Play Area / Kids Club Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Kids Club Supervisor",
                summary: "A safety-first checklist for managing children's play areas, with a strong focus on equipment safety, supervision, and hygiene.",
                tasks: [
                    { id: 'WEL-KPA-001', description: "Inspect all toys and play equipment for safety hazards (sharp edges, broken parts)", priority: 'High', riskLevel: 'High', proof: 'Safety Log', location: 'Kids Club' },
                    { id: 'WEL-KPA-002', description: "Clean and sanitize the play area before opening", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Kids Club' },
                    { id: 'WEL-KPA-003', description: "Ensure adequate supervision based on the number of children present", priority: 'High', riskLevel: 'High', proof: 'Roster Check', location: 'Kids Club' },
                    { id: 'WEL-KPA-004', description: "Maintain a sign-in and sign-out register for all children", priority: 'High', riskLevel: 'High', proof: 'Register', location: 'Kids Club' },
                    { id: 'WEL-KPA-005', description: "Have a first-aid kit readily available and checked regularly", priority: 'High', riskLevel: 'High', proof: 'First-Aid Log', location: 'Kids Club' }
                ]
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
            "Master crucial 'Site Commissioning' & 'Decommissioning' protocols.",
            "Implement a robust 'Business Continuity Plan' (BCP) with emergency drills.",
            "Manage 'Capital Asset Lifecycle' and operational budgets effectively.",
            "Includes vendor 'Labor Law Compliance' and 'SLA Audits'."
        ],
        previewScenario: {
            title: "Managing a Critical Power Outage",
            description: "This scenario shows how various facility management checklists work in concert to ensure business continuity during an unexpected power failure.",
            tasks: [
                { id: 'ELS-002', description: "Daily DG set and Fuel Management", sourceChecklist: "Electrical Systems", priority: 'High' },
                { id: 'WMS-001', description: "Test generator and power backup systems", sourceChecklist: "Weekly Maintenance & Safety", priority: 'High' },
                { id: 'QAT-006', description: "Execute emergency response and BCP drills", sourceChecklist: "Quarterly & Annual Tasks", priority: 'High' },
                { id: 'FSE-007', description: "Test Emergency Lights and Power Backup", sourceChecklist: "Fire Safety & Emergency", priority: 'High' }
            ]
        },
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
            "Master the 'Five Rights' of medication dispensing with the 'Prescription Verification' checklist.",
            "Implement a zero-error 'Controlled Substance Inventory' protocol.",
            "Ensure compliance with a detailed 'Daily Temperature & HACCP Logs' checklist.",
            "Prepare for emergencies with a dedicated 'First Aid & Incident Response' SOP."
        ],
        previewScenario: {
            title: "Ensuring Food Safety from Kitchen to Customer",
            description: "This scenario highlights how multiple checklists work together to maintain food safety and prevent foodborne illness, a critical process for any restaurant.",
            tasks: [
                { id: 'CK-FRS-001', description: "Check temperature of refrigerated/frozen delivery truck upon arrival.", sourceChecklist: "Food Receiving & Storage Protocol", priority: 'High' },
                { id: 'CK-KO-002', description: "Check temperatures of all refrigerators and freezers; log readings.", sourceChecklist: "Kitchen Opening Checklist (HACCP Focus)", priority: 'High' },
                { id: 'CK-HLC-002', description: "Use a calibrated thermometer to check internal temperatures of food items on the line.", sourceChecklist: "Daily HACCP & Line Check", priority: 'High' },
                { id: 'CK-SPH-005', description: "Staff wash hands thoroughly at designated times (e.g., after touching face, before starting new task).", sourceChecklist: "Staff Personal Hygiene Checklist", priority: 'High' }
            ]
        },
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
                title: "📈 Order Volume Forecasting",
                department: "Marketing",
                frequency: "Weekly",
                role: "Marketing Manager",
                summary: "Predicts order volume to optimize staffing and promotions.",
                tasks: [
                    { id: 'CK-OVF-001', description: "Check sales data for patterns", priority: 'High', riskLevel: 'Medium', proof: 'Data check', location: 'marketing'},
                    { id: 'CK-OVF-002', description: "Check holiday and season for impact", priority: 'Medium', riskLevel: 'Low', proof: 'Seasonal Data', location: 'Marketing'},
                    { id: 'CK-OVF-003', description: "Check if promotions have impacted order levels.", priority: 'Medium', riskLevel: 'Low', proof: 'Data', location: 'Marketing'},
                    { id: 'CK-OVF-004', description: "Staff to meet anticipated demand", priority: 'Medium', riskLevel: 'Medium', proof: 'Staff Allocation', location: 'Marketing'}
                ]
            },
             {
                title: "🚴 Delivery Operations Optimization",
                department: "Operations",
                frequency: "Weekly",
                role: "Kitchen Manager",
                summary: "Optimizing driver-partner performance for prompt customer satisfaction",
                tasks: [
                    { id: 'CK-DOO-001', description: "Is wait time for drivers optimal?", priority: 'Medium', riskLevel: 'Medium', proof: 'Data Check', location: 'Operations' },
                    { id: 'CK-DOO-002', description: "Are communications prompt and clear?", priority: 'Medium', riskLevel: 'Low', proof: 'Communications Log', location: 'Operations' },
                    { id: 'CK-DOO-003', description: "Optimize routes as necessary", priority: 'Medium', riskLevel: 'Low', proof: 'Route map', location: 'Operations' },
                    { id: 'CK-DOO-004', description: "Are there sufficient personnel to support fast order handoffs?", priority: 'Medium', riskLevel: 'Low', proof: 'Staffing', location: 'Operations' },
                    { id: 'CK-DOO-005', description: "Monitor and adjust fleet based on volume trends", priority: 'Medium', riskLevel: 'Medium', proof: 'Data', location: 'Operations' },
                ]
            },
            {
                title: "🥡 Menu Optimization",
                department: "Marketing",
                frequency: "Monthly",
                role: "Head Chef",
                summary: "This checklist ensures the cloud kitchen has a high-performing menu that minimizes waste.",
                tasks: [
                    { id: 'CK-MO-001', description: "What sells?", priority: 'High', riskLevel: 'Medium', proof: 'Sales Data', location: 'Head Chef' },
                    { id: 'CK-MO-002', description: "Are there ingredients that are not being used? ", priority: 'High', riskLevel: 'Medium', proof: 'Waste and Inventory Log', location: 'Head Chef' },
                    { id: 'CK-MO-003', description: "Is the menu balanced? ", priority: 'Medium', riskLevel: 'Medium', proof: 'Menu Audit', location: 'Head Chef' },
                    { id: 'CK-MO-004', description: "Is waste impacting menu creation?", priority: 'Medium', riskLevel: 'Medium', proof: 'Waste and Inventory Log', location: 'Head Chef' },
                    { id: 'CK-MO-005', description: "What dishes have high input cost and low sales volume?", priority: 'High', riskLevel: 'Medium', proof: 'Profitability Data', location: 'Head Chef' },
                ]
            },
             {
                title: "☎️ Aggregator Relationship Management",
                department: "Marketing",
                frequency: "Monthly",
                role: "Marketing Manager",
                summary: "Managing relationships with Aggregators",
                tasks: [
                    { id: 'CK-ARM-001', description: "Does it pay to switch promotion slots?", priority: 'High', riskLevel: 'Medium', proof: 'Revenue Impact', location: 'Marketing Manager' },
                    { id: 'CK-ARM-002', description: "Is comminication prompt?", priority: 'High', riskLevel: 'Low', proof: 'Communication Logs', location: 'Marketing Manager' },
                    { id: 'CK-ARM-003', description: "Are there performance issues that need addressing?", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Logs', location: 'Marketing Manager' },
                    { id: 'CK-ARM-004', description: "Are there complaints with the platform", priority: 'High', riskLevel: 'Medium', proof: 'Complaints Log', location: 'Marketing Manager' },
                    { id: 'CK-ARM-005', description: "What promotions can be improved?", priority: 'Medium', riskLevel: 'Low', proof: 'Data Analysis', location: 'Marketing Manager' }
                ]
            }
        ]
    }
];

export type Task = {
    id: string;
    description: string;
    priority: 'High' | 'Medium' | 'Low';
    riskLevel: 'High' | 'Medium' | 'Low';
    proof: string;
    location: string;
};

export type Checklist = {
    title: string;
    department: string;
    frequency: string;
    role: string;
    summary: string;
    tasks: Task[];
};

export type PreviewScenario = {
    title: string;
    description: string;
    tasks: Array<{
        id: string;
        description: string;
        sourceChecklist: string;
        priority: 'High' | 'Medium' | 'Low';
    }>;
};

export type PremiumPack = {
    id: string;
    title: string;
    priceUSD: number;
    priceINR: number;
    category: string;
    description: string;
    icon: React.ReactElement;
    mostPopular: boolean;
    sampleItems: string[];
    checklists: Checklist[];
    previewScenario?: PreviewScenario;
};

    