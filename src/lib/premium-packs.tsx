

import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain } from "lucide-react";

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
                tasks: [ { id: 'FB-BO-001', description: "Clean and sanitize bar counter and stools", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Bar' } ]
            },
            {
                title: "🍾 Bar Closing Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Bartender",
                tasks: [ { id: 'FB-BC-001', description: "Dispose of used garnishes", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Bar' } ]
            },
            {
                title: "🏨 Room Service Delivery Checklist",
                department: "F&B",
                frequency: "As-Needed",
                role: "Room Service Waiter",
                tasks: [ { id: 'FB-RSD-001', description: "Check order slip for accuracy against the prepared food", priority: 'High', riskLevel: 'High', proof: 'Order Slip', location: 'Room Service' } ]
            },
            {
                title: "🎉 Banquet Hall Preparation Checklist",
                department: "F&B",
                frequency: "As-Needed",
                role: "Banquet Manager",
                tasks: [ { id: 'FB-BHP-001', description: "Check cleanliness of hall, stage, and entrance", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Banquet Hall' } ]
            },
            {
                title: "🔪 Kitchen Hygiene & Food Safety Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Head Chef",
                tasks: [ { id: 'FB-KH-001', description: "Ensure kitchen floors are clean, dry, and non-slip", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Kitchen' } ]
            },
            {
                title: "📈 Inventory & Stock Check Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Store Keeper",
                tasks: [ { id: 'FIN-IS-001', description: "Check stock levels of key raw materials daily", priority: 'High', riskLevel: 'Medium', proof: 'Stock Register', location: 'Stores' } ]
            },
            {
                title: "🛠️ Daily Maintenance Rounds Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Technician",
                tasks: [ { id: 'MT-DMR-001', description: "Inspect all guest room corridors for damages or fused lights", priority: 'Medium', riskLevel: 'Low', proof: 'Logbook', location: 'Corridors' } ]
            },
            {
                title: "⚡ Electrical Systems Inspection Checklist",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Electrician",
                tasks: [ { id: 'MT-ES-001', description: "Check main electrical panel for any signs of overheating or loose connections", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Electrical Panel Room' } ]
            },
            {
                title: "💧 Plumbing & Water Systems Checklist",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Plumber",
                tasks: [ { id: 'MT-PWS-001', description: "Inspect guest bathrooms for any leaks from faucets, toilets, or pipes", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Guest Rooms' } ]
            },
            {
                title: "💨 HVAC & AC Systems Checklist",
                department: "Maintenance",
                frequency: "Monthly",
                role: "HVAC Technician",
                tasks: [ { id: 'MT-HVAC-001', description: "Clean or replace AC filters in guest rooms and public areas", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'All Areas' } ]
            },
            {
                title: "↕️ Elevator & Escalator Safety Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Maintenance Supervisor",
                tasks: [ { id: 'MT-EES-001', description: "Check elevator car interior for cleanliness and any damage", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Elevators' } ]
            },
            {
                title: "🏊 Swimming Pool Maintenance Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Pool Technician",
                tasks: [ { id: 'MT-SPM-001', description: "Test and log chlorine and pH levels of the pool water", priority: 'High', riskLevel: 'High', proof: 'Water Test Log', location: 'Swimming Pool' } ]
            },
            {
                title: "🌳 Landscaping & Outdoor Areas Checklist",
                department: "Maintenance",
                frequency: "Daily",
                role: "Gardener",
                tasks: [ { id: 'MT-LOA-001', description: "Inspect lawns for health and trim grass as needed", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Gardens' } ]
            },
            {
                title: "📹 CCTV & Security Monitoring Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Security Officer",
                tasks: [ { id: 'SEC-CSM-001', description: "Check that all CCTV cameras are operational and recording", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Security Control Room' } ]
            },
            {
                title: "🔥 Fire Safety Checklist",
                department: "Security",
                frequency: "Weekly",
                role: "Security Supervisor",
                tasks: [ { id: 'SEC-FS-001', description: "Visually inspect all fire extinguishers to ensure they are in place, charged, and not expired", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'All Areas' } ]
            },
            {
                title: "🚗 Parking & Valet Operations Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Valet Supervisor",
                tasks: [ { id: 'SEC-PVO-001', description: "Check parking lot for cleanliness, proper lighting, and clear signage", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Parking Lot' } ]
            },
            {
                title: "⚠️ Emergency Preparedness Checklist",
                department: "Security",
                frequency: "Monthly",
                role: "Security Supervisor",
                tasks: [ { id: 'SEC-EP-001', description: "Ensure all first aid kits are fully stocked and items are within expiry date", priority: 'High', riskLevel: 'High', proof: 'Inventory Check', location: 'All Areas' } ]
            },
            {
                title: "🌙 Night Security Patrol Checklist",
                department: "Security",
                frequency: "Daily",
                role: "Security Officer",
                tasks: [ { id: 'SEC-NSP-001', description: "Inspect all entry and exit points to ensure they are secure", priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Perimeter' } ]
            },
            {
                title: "🧖‍♀️ Spa Daily Operations Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Spa Manager",
                tasks: [ { id: 'WEL-SDO-001', description: "Check cleanliness and hygiene of all treatment rooms, showers, and saunas", priority: 'High', riskLevel: 'High', proof: 'Cleaning Log', location: 'Spa' } ]
            },
            {
                title: "🏋️ Gym & Fitness Center Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Gym Manager",
                tasks: [ { id: 'WEL-GFC-001', description: "Inspect all gym equipment for safety, functionality, and wear", priority: 'High', riskLevel: 'High', proof: 'Equipment Log', location: 'Gym' } ]
            },
            {
                title: "🎟️ Concierge Desk Checklist",
                department: "Front Office",
                frequency: "Daily",
                role: "Concierge",
                tasks: [ { id: 'FO-CD-001', description: "Review and update tour, transport, and event schedules", priority: 'Medium', riskLevel: 'Low', proof: 'System Check', location: 'Concierge Desk' } ]
            },
            {
                title: "👶 Kids Club / Play Area Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Kids Club Supervisor",
                tasks: [ { id: 'WEL-KC-001', description: "Inspect all play equipment and toys for safety hazards (sharp edges, small parts)", priority: 'High', riskLevel: 'High', proof: 'Safety Log', location: 'Kids Club' } ]
            },
            {
                title: "⭐ Guest Feedback & Experience Checklist",
                department: "Management",
                frequency: "Daily",
                role: "Duty Manager",
                tasks: [ { id: 'MGMT-GFE-001', description: "Collect and review guest feedback forms from all departments daily", priority: 'High', riskLevel: 'Medium', proof: 'Feedback Forms', location: 'Manager\'s Office' } ]
            },
            {
                title: "🧾 Night Audit Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Night Auditor",
                tasks: [ { id: 'FIN-NA-001', description: "Reconcile all guest folios with charges from POS systems (restaurant, spa, etc.)", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Back Office' } ]
            },
            {
                title: "📦 Procurement Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Procurement Officer",
                tasks: [ { id: 'FIN-PROC-001', description: "Review purchase requisitions from all departments for completeness and approval", priority: 'High', riskLevel: 'Medium', proof: 'Requisition Forms', location: 'Procurement' } ]
            },
            {
                title: "🛒 Vendor Management Checklist",
                department: "Finance",
                frequency: "Weekly",
                role: "Procurement Manager",
                tasks: [ { id: 'FIN-VM-001', description: "Review contracts and SLAs with current vendors", priority: 'Medium', riskLevel: 'Medium', proof: 'Contract Files', location: 'Procurement' } ]
            },
            {
                title: "📊 Payroll Processing Checklist",
                department: "Finance",
                frequency: "Monthly",
                role: "HR Manager",
                tasks: [ { id: 'FIN-PAY-001', description: "Verify staff attendance records from biometric system or registers", priority: 'High', riskLevel: 'High', proof: 'Attendance Report', location: 'HR Office' } ]
            },
            {
                title: "🗂️ Inventory Control Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Store Keeper",
                tasks: [ { id: 'FIN-IC-001', description: "Review daily consumption reports from all outlets", priority: 'High', riskLevel: 'Medium', proof: 'Consumption Reports', location: 'Stores' } ]
            },
            {
                title: "🧮 Accounts Payable Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Accountant",
                tasks: [ { id: 'FIN-AP-001', description: "Verify all supplier invoices against corresponding purchase orders (PO)", priority: 'High', riskLevel: 'High', proof: 'Invoice/PO Match', location: 'Accounts' } ]
            },
            {
                title: "💵 Cash Handling Checklist",
                department: "Finance",
                frequency: "Daily",
                role: "Cashier",
                tasks: [ { id: 'FIN-CH-001', description: "Verify the opening cash float at each POS counter with a witness", priority: 'High', riskLevel: 'High', proof: 'Float Log', location: 'POS Counters' } ]
            },
            {
                title: "🌆 Rooftop / Terrace Restaurant Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Restaurant Manager",
                tasks: [ { id: 'FB-RTR-001', description: "Check cleanliness of terrace flooring, furniture, and railings", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Rooftop' } ]
            },
            {
                title: "🖥️ Business Center Checklist",
                department: "Front Office",
                frequency: "Daily",
                role: "Front Desk Agent",
                tasks: [ { id: 'FO-BC-001', description: "Ensure all computers are functioning with stable internet access", priority: 'High', riskLevel: 'Low', proof: 'System Check', location: 'Business Center' } ]
            },
            {
                title: "🎤 Conference & Banquet Hall Checklist",
                department: "F&B",
                frequency: "As-Needed",
                role: "Banquet Manager",
                tasks: [ { id: 'FB-CBH-001', description: "Inspect seating arrangement against the event's floor plan", priority: 'High', riskLevel: 'Medium', proof: 'Floor Plan', location: 'Banquet Hall' } ]
            },
            {
                title: "🏭 Laundry Plant Checklist",
                department: "Housekeeping",
                frequency: "Daily",
                role: "Laundry Supervisor",
                tasks: [ { id: 'HK-LP-001', description: "Inspect all washing machines and dryers for correct functionality and settings", priority: 'High', riskLevel: 'Medium', proof: 'Machine Log', location: 'Laundry Plant' } ]
            },
            {
                title: "🍴 Staff Canteen Checklist",
                department: "HR",
                frequency: "Daily",
                role: "Admin Manager",
                tasks: [ { id: 'HR-SC-001', description: "Check food quality, taste, and hygiene before each service (breakfast, lunch, dinner)", priority: 'High', riskLevel: 'High', proof: 'Food Tasting Log', location: 'Staff Canteen' } ]
            },
            {
                title: "🎮 Kids Play Area / Kids Club Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Kids Club Supervisor",
                tasks: [ { id: 'WEL-KPA-001', description: "Inspect all toys and play equipment for safety hazards (sharp edges, broken parts)", priority: 'High', riskLevel: 'High', proof: 'Safety Log', location: 'Kids Club' } ]
            }
        ]
    },
    {
        id: 'facility_management_blueprint',
        title: "Facility Management Checklist",
        priceUSD: 129.99,
        priceINR: 9999,
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
                title: "🌅 Daily Facility Opening Checklist",
                department: "Operations",
                frequency: "Daily",
                role: "Facility Coordinator",
                tasks: [
                    { id: 'FM-DO-001', description: "Conduct a full walkthrough of all common areas (lobbies, hallways, pantries).", priority: 'High', riskLevel: 'Medium', proof: 'Walkthrough Log', location: 'All Common Areas' },
                    { id: 'FM-DO-002', description: "Verify all lights are operational and replace any fused bulbs.", priority: 'Medium', riskLevel: 'Low', proof: 'Maintenance Log', location: 'All Common Areas' },
                    { id: 'FM-DO-003', description: "Check that HVAC systems are running and temperature is set to the standard (e.g., 22°C).", priority: 'High', riskLevel: 'Medium', proof: 'BMS Reading', location: 'All Office Areas' },
                    { id: 'FM-DO-004', description: "Inspect restrooms for cleanliness, stocking of supplies (toilet paper, soap, paper towels), and functionality.", priority: 'High', riskLevel: 'High', proof: 'Housekeeping Log', location: 'All Restrooms' },
                    { id: 'FM-DO-005', description: "Ensure all access control doors are functioning correctly.", priority: 'High', riskLevel: 'High', proof: 'Access Control Log', location: 'All Access Doors' },
                    { id: 'FM-DO-006', description: "Check that pantry equipment (coffee machines, microwaves, water dispensers) is clean and operational.", priority: 'Medium', riskLevel: 'Low', proof: 'Housekeeping Log', location: 'All Pantries' },
                    { id: 'FM-DO-007', description: "Review the helpdesk portal for any overnight or urgent requests.", priority: 'High', riskLevel: 'Medium', proof: 'Helpdesk Screenshot', location: 'Facility Office' },
                    { id: 'FM-DO-008', description: "Verify that the housekeeping staff have completed their morning cleaning duties as per SLA.", priority: 'High', riskLevel: 'Medium', proof: 'Supervisor Sign-off', location: 'All Office Areas' },
                    { id: 'FM-DO-009', description: "Ensure meeting rooms are clean, tidy, and ready for the first bookings.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'All Meeting Rooms' },
                    { id: 'FM-DO-010', description: "Check that all fire exits are clear and unobstructed.", priority: 'High', riskLevel: 'High', proof: 'Photo', location: 'All Fire Exits' }
                ]
            },
            {
                title: "🌙 Daily Facility Closing Checklist",
                department: "Operations",
                frequency: "Daily",
                role: "Facility Coordinator",
                tasks: [
                    { id: 'FM-DC-001', description: "Conduct a final walkthrough after all employees have left.", priority: 'High', riskLevel: 'Medium', proof: 'Walkthrough Log', location: 'All Office Areas' },
                    { id: 'FM-DC-002', description: "Turn off all non-essential lights in office areas and meeting rooms.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'All Office Areas' },
                    { id: 'FM-DC-003', description: "Ensure all pantry equipment is switched off and cleaned.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'All Pantries' },
                    { id: 'FM-DC-004', description: "Check that all windows are closed and locked.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Perimeter' },
                    { id: 'FM-DC-005', description: "Secure all main entry/exit points of the facility.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Main Entrances' },
                    { id: 'FM-DC-006', description: "Arm the building's security alarm system.", priority: 'High', riskLevel: 'High', proof: 'Alarm System Log', location: 'Security Control Room' },
                    { id: 'FM-DC-007', description: "Verify that the housekeeping staff are commencing their night shift cleaning.", priority: 'Medium', riskLevel: 'Low', proof: 'Supervisor Sign-off', location: 'All Office Areas' },
                    { id: 'FM-DC-008', description: "Log any issues observed during the final round (e.g., leaks, damages) for action the next day.", priority: 'High', riskLevel: 'Medium', proof: 'Closing Report', location: 'Facility Office' },
                    { id: 'FM-DC-009', description: "Ensure all sensitive areas (server rooms, store rooms) are locked.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Sensitive Areas' },
                    { id: 'FM-DC-010', description: "Compile a daily closing report for the Facility Manager.", priority: 'Medium', riskLevel: 'Low', proof: 'Email/Report', location: 'Facility Office' }
                ]
            },
            {
                title: "🧹 Weekly Housekeeping Audit",
                department: "Soft Services",
                frequency: "Weekly",
                role: "Facility Manager",
                tasks: [
                    { id: 'FM-WHA-001', description: "Inspect the quality of dusting on all surfaces, including hard-to-reach areas.", priority: 'Medium', riskLevel: 'Low', proof: 'White Glove Test', location: 'Random Office Areas' },
                    { id: 'FM-WHA-002', description: "Check for stains or dirt on carpets and upholstery; schedule shampooing if needed.", priority: 'Medium', riskLevel: 'Low', proof: 'Photo', location: 'Common Areas' },
                    { id: 'FM-WHA-003', description: "Audit restroom cleanliness, including mirrors, fixtures, and grout.", priority: 'High', riskLevel: 'Medium', proof: 'Audit Scorecard', location: 'All Restrooms' },
                    { id: 'FM-WHA-004', description: "Verify the cleanliness of glass doors, windows, and partitions.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Perimeter/Cabins' },
                    { id: 'FM-WHA-005', description: "Check the state of waste segregation and disposal by the housekeeping vendor.", priority: 'High', riskLevel: 'Medium', proof: 'Bin Inspection', location: 'Waste Area' },
                    { id: 'FM-WHA-006', description: "Review housekeeping staff's grooming and use of PPE.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Random Staff' },
                    { id: 'FM-WHA-007', description: "Inspect the housekeeping storage room for organization and correct chemical storage.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'HK Store' },
                    { id: 'FM-WHA-008', description: "Check inventory levels of housekeeping supplies.", priority: 'Medium', riskLevel: 'Low', proof: 'Inventory Log', location: 'HK Store' },
                    { id: 'FM-WHA-009', description: "Get feedback from a few employees on the cleanliness of the office.", priority: 'Low', riskLevel: 'Low', proof: 'Email Feedback', location: 'Random Employees' },
                    { id: 'FM-WHA-010', description: "Provide formal feedback to the housekeeping vendor supervisor based on the audit.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Facility Office' }
                ]
            },
            {
                title: "🛡️ Weekly Security Audit",
                department: "Security",
                frequency: "Weekly",
                role: "Security Manager",
                tasks: [
                    { id: 'FM-WSA-001', description: "Review CCTV footage from the past week for any incidents or blind spots.", priority: 'High', riskLevel: 'High', proof: 'Footage Review Log', location: 'Security Control Room' },
                    { id: 'FM-WSA-002', description: "Test a random selection of access control readers and boom barriers.", priority: 'High', riskLevel: 'Medium', proof: 'Test Log', location: 'Entrances/Exits' },
                    { id: 'FM-WSA-003', description: "Inspect the physical condition of all security cameras, ensuring clean lenses and proper angles.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'All Cameras' },
                    { id: 'FM-WSA-004', description: "Review the visitor management system logs for any discrepancies.", priority: 'Medium', riskLevel: 'Low', proof: 'VMS Log Review', location: 'Security Control Room' },
                    { id: 'FM-WSA-005', description: "Check the logbooks and registers maintained by security personnel for completeness.", priority: 'Medium', riskLevel: 'Low', proof: 'Logbook Review', location: 'Gates/Reception' },
                    { id: 'FM-WSA-006', description: "Conduct a brief quiz with security guards on emergency procedures (e.g., fire, medical emergency).", priority: 'High', riskLevel: 'High', proof: 'Quiz Score', location: 'Random Guards' },
                    { id: 'FM-WSA-007', description: "Inspect the perimeter fencing and lighting for any vulnerabilities.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Perimeter' },
                    { id: 'FM-WSA-008', description: "Test the functionality of panic alarms and the duress system.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Sensitive Areas' },
                    { id: 'FM-WSA-009', description: "Ensure all security personnel are in proper uniform and carrying required equipment.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'All Posts' },
                    { id: 'FM-WSA-010', description: "Audit the key management system to ensure all keys are accounted for.", priority: 'High', riskLevel: 'High', proof: 'Key Register Audit', location: 'Security Office' }
                ]
            },
            {
                title: "💨 Monthly HVAC System Checklist",
                department: "Engineering",
                frequency: "Monthly",
                role: "HVAC Technician",
                tasks: [
                    { id: 'FM-MHVAC-001', description: "Clean or replace air filters in all Air Handling Units (AHUs) and Fan Coil Units (FCUs).", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Log', location: 'AHU/FCU Rooms' },
                    { id: 'FM-MHVAC-002', description: "Inspect and clean condenser and evaporator coils.", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo', location: 'Outdoor Units' },
                    { id: 'FM-MHVAC-003', description: "Check and clean drain lines and pans to prevent water overflow.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'AHU/FCU Rooms' },
                    { id: 'FM-MHVAC-004', description: "Inspect ductwork for any visible leaks or damage.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Inspection Log', location: 'Above False Ceiling' },
                    { id: 'FM-MHVAC-005', description: "Check refrigerant levels and look for signs of leaks.", priority: 'High', riskLevel: 'High', proof: 'Pressure Gauge Reading', location: 'Outdoor Units' },
                    { id: 'FM-MHVAC-006', description: "Verify thermostat calibration and functionality across different zones.", priority: 'Medium', riskLevel: 'Low', proof: 'Test Log', location: 'Random Office Areas' },
                    { id: 'FM-MHVAC-007', description: "Inspect all belts and pulleys for wear and tear.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'AHU Rooms' },
                    { id: 'FM-MHVAC-008', description: "Listen for any unusual noises from motors or fans.", priority: 'High', riskLevel: 'Medium', proof: 'Auditory Check Log', location: 'AHU Rooms' },
                    { id: 'FM-MHVAC-009', description: "Check the operation of ventilation fans in restrooms and pantries.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Restrooms/Pantries' },
                    { id: 'FM-MHVAC-010', description: "Log all readings and maintenance activities in the Computerized Maintenance Management System (CMMS).", priority: 'High', riskLevel: 'Low', proof: 'CMMS Entry', location: 'Facility Office' }
                ]
            },
            {
                title: "⚡ Monthly Electrical System Checklist",
                department: "Engineering",
                frequency: "Monthly",
                role: "Electrician",
                tasks: [
                    { id: 'FM-MES-001', description: "Visually inspect all main electrical panels for signs of overheating or loose connections.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Electrical Rooms' },
                    { id: 'FM-MES-002', description: "Test all Ground Fault Circuit Interrupters (GFCIs) and Earth Leakage Circuit Breakers (ELCBs).", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'All Panels' },
                    { id: 'FM-MES-003', description: "Check the functionality of all emergency lights and exit signs on battery backup.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'All Areas' },
                    { id: 'FM-MES-004', description: "Conduct a load test on the Uninterruptible Power Supply (UPS) system.", priority: 'High', riskLevel: 'High', proof: 'UPS Log', location: 'UPS Room' },
                    { id: 'FM-MES-005', description: "Start the backup generator and run it under load for at least 30 minutes.", priority: 'High', riskLevel: 'High', proof: 'Genset Log', location: 'Generator Room' },
                    { id: 'FM-MES-006', description: "Check fuel levels in the backup generator.", priority: 'High', riskLevel: 'Medium', proof: 'Fuel Log', location: 'Generator Room' },
                    { id: 'FM-MES-007', description: "Inspect a sample of power outlets and switches for damage.", priority: 'Low', riskLevel: 'Low', proof: 'Inspection Log', location: 'Random Office Areas' },
                    { id: 'FM-MES-008', description: "Use a thermal scanner on main distribution boards to detect hot spots.", priority: 'High', riskLevel: 'High', proof: 'Thermal Image', location: 'Electrical Rooms' },
                    { id: 'FM-MES-009', description: "Review the previous month's electricity bills for any unusual consumption patterns.", priority: 'Medium', riskLevel: 'Low', proof: 'Bill Analysis Report', location: 'Facility Office' },
                    { id: 'FM-MES-010', description: "Ensure all electrical rooms are clean, dry, and free of stored materials.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Electrical Rooms' }
                ]
            },
            {
                title: "🔥 Monthly Fire & Life Safety Checklist",
                department: "Safety",
                frequency: "Monthly",
                role: "Safety Officer",
                tasks: [
                    { id: 'FM-MFLS-001', description: "Visually inspect all fire extinguishers to ensure they are in place, charged (needle in green), and not expired.", priority: 'High', riskLevel: 'High', proof: 'Inspection Tag Sign-off', location: 'All Areas' },
                    { id: 'FM-MFLS-002', description: "Check that all fire exits and evacuation routes are completely clear of obstructions.", priority: 'High', riskLevel: 'High', proof: 'Photo', location: 'All Fire Exits' },
                    { id: 'FM-MFLS-003', description: "Test the main fire alarm panel by activating a manual call point.", priority: 'High', riskLevel: 'High', proof: 'Alarm Log', location: 'Security Control Room' },
                    { id: 'FM-MFLS-004', description: "Inspect smoke detectors and heat detectors for visible damage or obstruction.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'All Areas' },
                    { id: 'FM-MFLS-005', description: "Check the water pressure in the fire sprinkler system's pressure gauges.", priority: 'High', riskLevel: 'High', proof: 'Pressure Log', location: 'Pump Room' },
                    { id: 'FM-MFLS-006', description: "Inspect fire hose reels and cabinets for accessibility and condition.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'All Hose Reels' },
                    { id: 'FM-MFLS-007', description: "Verify that the public address (PA) system is clear and audible throughout the facility.", priority: 'High', riskLevel: 'Medium', proof: 'Test Log', location: 'All Areas' },
                    { id: 'FM-MFLS-008', description: "Check the stock and expiry date of items in all first aid kits.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Log', location: 'First Aid Stations' },
                    { id: 'FM-MFLS-009', description: "Ensure emergency evacuation maps are displayed, up to date, and clearly visible.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Common Areas' },
                    { id: 'FM-MFLS-010', description: "Log all inspection findings and schedule corrective actions in the CMMS.", priority: 'High', riskLevel: 'Low', proof: 'CMMS Entry', location: 'Facility Office' }
                ]
            },
            {
                title: "💧 Monthly Plumbing System Checklist",
                department: "Engineering",
                frequency: "Monthly",
                role: "Plumber",
                tasks: [
                    { id: 'FM-MPS-001', description: "Inspect all restrooms for leaking faucets, toilets, or pipes.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'All Restrooms' },
                    { id: 'FM-MPS-002', description: "Check water pressure in various parts of the building to ensure it's adequate.", priority: 'Medium', riskLevel: 'Low', proof: 'Pressure Gauge Reading', location: 'Random Taps' },
                    { id: 'FM-MPS-003', description: "Clean the filters on all main water inlets.", priority: 'Medium', riskLevel: 'Low', proof: 'Maintenance Log', location: 'Water Inlet' },
                    { id: 'FM-MPS-004', description: "Inspect water pumps for proper operation, unusual noises, and any leaks.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Log', location: 'Pump Room' },
                    { id: 'FM-MPS-005', description: "Check the water level and cleanliness of overhead and underground water tanks.", priority: 'High', riskLevel: 'High', proof: 'Photo/Log', location: 'Water Tanks' },
                    { id: 'FM-MPS-006', description: "Test the functionality of sump pumps in basement areas.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Basement' },
                    { id: 'FM-MPS-007', description: "Inspect cafeteria and pantry sinks and clean grease traps.", priority: 'Medium', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Pantries/Cafeteria' },
                    { id: 'FM-MPS-008', description: "Check the temperature of hot water at various points to ensure it meets standards.", priority: 'Low', riskLevel: 'Low', proof: 'Temperature Log', location: 'Random Taps' },
                    { id: 'FM-MPS-009', description: "Inspect the irrigation system for the landscape area for leaks or malfunctions.", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Landscaped Areas' },
                    { id: 'FM-MPS-010', description: "Log all maintenance and inspection details in the CMMS.", priority: 'Medium', riskLevel: 'Low', proof: 'CMMS Entry', location: 'Facility Office' }
                ]
            },
            {
                title: "🏢 New Office Site Commissioning Checklist",
                department: "Projects",
                frequency: "As-Needed",
                role: "Projects Manager",
                tasks: [
                    { id: 'FM-NSC-001', description: "Verify final snag list from builder/landlord is cleared and documented.", priority: 'High', riskLevel: 'High', proof: 'Signed Snag List', location: 'New Site' },
                    { id: 'FM-NSC-002', description: "Confirm all legal permits and 'No Objection' certificates (NOCs) are received (Fire, Occupancy, etc.).", priority: 'High', riskLevel: 'High', proof: 'Permit Files', location: 'New Site' },
                    { id: 'FM-NSC-003', description: "Oversee installation of IT networking, servers, and access points.", priority: 'High', riskLevel: 'High', proof: 'IT Sign-off', location: 'New Site' },
                    { id: 'FM-NSC-004', description: "Supervise installation and testing of security systems (CCTV, Access Control).", priority: 'High', riskLevel: 'High', proof: 'Security Sign-off', location: 'New Site' },
                    { id: 'FM-NSC-005', description: "Test all critical equipment (Genset, UPS, HVAC) under full load for 24 hours.", priority: 'High', riskLevel: 'High', proof: 'Test Report', location: 'New Site' },
                    { id: 'FM-NSC-006', description: "Ensure workstations, chairs, and other furniture are installed as per the approved layout.", priority: 'High', riskLevel: 'Medium', proof: 'Layout Verification', location: 'New Site' },
                    { id: 'FM-NSC-007', description: "Verify pantry and cafeteria equipment is installed and tested.", priority: 'Medium', riskLevel: 'Low', proof: 'Equipment Sign-off', location: 'New Site' },
                    { id: 'FM-NSC-008', description: "Arrange for a professional deep clean of the entire site before employee move-in.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Certificate', location: 'New Site' },
                    { id: 'FM-NSC-009', description: "Conduct a final joint walkthrough with all stakeholders (IT, HR, Admin) before go-live.", priority: 'High', riskLevel: 'Medium', proof: 'Walkthrough Minutes', location: 'New Site' },
                    { id: 'FM-NSC-010', description: "Prepare a 'Welcome Kit' and site manual for all employees.", priority: 'Medium', riskLevel: 'Low', proof: 'Welcome Kit Sample', location: 'New Site' }
                ]
            },
            {
                title: "📦 Office Decommissioning & Handover Checklist",
                department: "Projects",
                frequency: "As-Needed",
                role: "Projects Manager",
                tasks: [
                    { id: 'FM-ODH-001', description: "Communicate move-out plan and timeline to all employees and stakeholders.", priority: 'High', riskLevel: 'Medium', proof: 'Communication Email', location: 'Old Site' },
                    { id: 'FM-ODH-002', description: "Coordinate with IT to backup all data and dismantle servers and network equipment.", priority: 'High', riskLevel: 'High', proof: 'IT Sign-off', location: 'Old Site' },
                    { id: 'FM-ODH-003', description: "Arrange for professional movers to pack and transfer all assets (furniture, equipment).", priority: 'High', riskLevel: 'Medium', proof: 'Mover Contract', location: 'Old Site' },
                    { id: 'FM-ODH-004', description: "Terminate all vendor contracts specific to the site (e.g., ISP, housekeeping, security) with proper notice.", priority: 'High', riskLevel: 'High', proof: 'Termination Letters', location: 'Old Site' },
                    { id: 'FM-ODH-005', description: "Ensure the office is restored to the condition required by the lease agreement (e.g., repainting, repairs).", priority: 'High', riskLevel: 'High', proof: 'Photo Evidence', location: 'Old Site' },
                    { id: 'FM-ODH-006', description: "Take final readings of all utility meters (electricity, water) with landlord's representative.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Reading Sheet', location: 'Old Site' },
                    { id: 'FM-ODH-007', description: "Conduct a final walkthrough with the landlord to formally handover the premises.", priority: 'High', riskLevel: 'High', proof: 'Handover Document', location: 'Old Site' },
                    { id: 'FM-ODH-008', description: "Obtain clearance certificate and secure the return of the security deposit from the landlord.", priority: 'High', riskLevel: 'High', proof: 'Bank Statement', location: 'Old Site' },
                    { id: 'FM-ODH-009', description: "Update company address records and set up mail forwarding.", priority: 'Medium', riskLevel: 'Low', proof: 'System Screenshot', location: 'Old Site' },
                    { id: 'FM-ODH-010', description: "Archive all documents related to the decommissioned site.", priority: 'Medium', riskLevel: 'Low', proof: 'Archive Log', location: 'Old Site' }
                ]
            },
            {
                title: "🌧️ Annual Monsoon Preparedness Audit",
                department: "Business Continuity",
                frequency: "Annually",
                role: "Facility Manager",
                tasks: [
                    { id: 'FM-AMP-001', description: "Inspect all rooftops and terraces for waterproofing integrity and clear drainage paths.", priority: 'High', riskLevel: 'High', proof: 'Photo/Report', location: 'Rooftops' },
                    { id: 'FM-AMP-002', description: "Clean all storm-water drains and gutters around the building perimeter.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Perimeter' },
                    { id: 'FM-AMP-003', description: "Check all basement areas for potential water ingress points and seal them.", priority: 'High', riskLevel: 'High', proof: 'Inspection Report', location: 'Basement' },
                    { id: 'FM-AMP-004', description: "Test all sump pumps in basements and ensure they have a power backup.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Basement' },
                    { id: 'FM-AMP-005', description: "Inspect the condition of exterior walls and windows for cracks or gaps.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Inspection Log', location: 'Exterior' },
                    { id: 'FM-AMP-006', description: "Stockpile emergency supplies like sandbags, tarps, and portable pumps.", priority: 'Medium', riskLevel: 'Medium', proof: 'Inventory Check', location: 'Store Room' },
                    { id: 'FM-AMP-007', description: "Review the Emergency Response Plan (ERP) for flooding with the security and facility teams.", priority: 'High', riskLevel: 'High', proof: 'Meeting Minutes', location: 'Facility Office' },
                    { id: 'FM-AMP-008', description: "Ensure all critical equipment on lower floors is raised or protected.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Ground Floor/Basement' },
                    { id: 'FM-AMP-009', description: "Verify contact lists for emergency services (Fire, Medical, NDRF) are up to date.", priority: 'High', riskLevel: 'Medium', proof: 'Contact List Copy', location: 'Security Control Room' },
                    { id: 'FM-AMP-010', description: "Conduct a mock drill for a flooding scenario.", priority: 'High', riskLevel: 'Medium', proof: 'Drill Report', location: 'All Site' }
                ]
            },
            {
                title: "🚨 Site Emergency Response Plan (ERP) Drill Checklist",
                department: "Business Continuity",
                frequency: "Bi-Annually",
                role: "Safety Officer",
                tasks: [
                    { id: 'FM-ERP-001', description: "Plan the drill scenario (e.g., fire, earthquake, security threat) and define clear objectives.", priority: 'High', riskLevel: 'High', proof: 'Drill Plan', location: 'Facility Office' },
                    { id: 'FM-ERP-002', description: "Inform all employees about the upcoming drill without revealing the exact time.", priority: 'Medium', riskLevel: 'Low', proof: 'Communication Email', location: 'All Employees' },
                    { id: 'FM-ERP-003', description: "Activate the emergency alarm system.", priority: 'High', riskLevel: 'High', proof: 'Alarm Log', location: 'Security Control Room' },
                    { id: 'FM-ERP-004', description: "Monitor evacuation routes to ensure they are used correctly and are clear.", priority: 'High', riskLevel: 'High', proof: 'Observer Notes', location: 'Evacuation Routes' },
                    { id: 'FM-ERP-005', description: "Time the total evacuation and assembly of all personnel at the designated safe assembly points.", priority: 'High', riskLevel: 'Medium', proof: 'Time Log', location: 'Assembly Point' },
                    { id: 'FM-ERP-006', description: "Conduct a head count at the assembly point to ensure everyone is accounted for.", priority: 'High', riskLevel: 'High', proof: 'Head Count Sheet', location: 'Assembly Point' },
                    { id: 'FM-ERP-007', description: "Test the response time and effectiveness of the internal Emergency Response Team (ERT).", priority: 'High', riskLevel: 'High', proof: 'Observer Notes', location: 'Incident Scene' },
                    { id: 'FM-ERP-008', description: "Observe the actions of fire wardens and first aiders during the drill.", priority: 'High', riskLevel: 'Medium', proof: 'Observer Notes', location: 'All Areas' },
                    { id: 'FM-ERP-009', description: "Conduct a post-drill review meeting to discuss observations and areas for improvement.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Facility Office' },
                    { id: 'FM-ERP-010', description: "Document the drill report and update the ERP based on learnings.", priority: 'High', riskLevel: 'Medium', proof: 'Updated ERP Document', location: 'Facility Office' }
                ]
            },
            {
                title: "🔩 Quarterly Critical Equipment Audit",
                department: "Asset Management",
                frequency: "Quarterly",
                role: "Chief Engineer",
                tasks: [
                    { id: 'FM-QCEA-001', description: "Review maintenance logs for the Generator, UPS, HVAC Chillers, and Elevators for the past quarter.", priority: 'High', riskLevel: 'High', proof: 'CMMS Report', location: 'Facility Office' },
                    { id: 'FM-QCEA-002', description: "Conduct a physical inspection of each critical asset for any signs of wear, leaks, or corrosion.", priority: 'High', riskLevel: 'High', proof: 'Inspection Report', location: 'Utility Rooms' },
                    { id: 'FM-QCEA-003', description: "Verify that all preventive maintenance has been completed as per the annual schedule.", priority: 'High', riskLevel: 'Medium', proof: 'CMMS Report', location: 'Utility Rooms' },
                    { id: 'FM-QCEA-004', description: "Check runtime hours and fuel/energy consumption against benchmarks.", priority: 'Medium', riskLevel: 'Low', proof: 'Log Analysis', location: 'Utility Rooms' },
                    { id: 'FM-QCEA-005', description: "Review the stock of critical spare parts for this equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Log', location: 'Store Room' },
                    { id: 'FM-QCEA-006', description: "Ensure the area around critical equipment is clean, dry, and free of obstructions.", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo', location: 'Utility Rooms' },
                    { id: 'FM-QCEA-007', description: "Check that all safety warnings and operational instructions are clearly displayed.", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Utility Rooms' },
                    { id: 'FM-QCEA-008', description: "Review any breakdown reports from the past quarter and the root cause analysis (RCA).", priority: 'High', riskLevel: 'Medium', proof: 'RCA Documents', location: 'Facility Office' },
                    { id: 'FM-QCEA-009', description: "Plan for any upcoming major services or overhauls.", priority: 'High', riskLevel: 'Medium', proof: 'Maintenance Plan', location: 'Facility Office' },
                    { id: 'FM-QCEA-010', description: "Update the asset register with the latest audit findings.", priority: 'Medium', riskLevel: 'Low', proof: 'Asset Register Screenshot', location: 'Facility Office' }
                ]
            },
            {
                title: "💵 Annual Asset Lifecycle & Budgeting Review",
                department: "Asset Management",
                frequency: "Annually",
                role: "Head of Facilities",
                tasks: [
                    { id: 'FM-AALB-001', description: "Review the entire asset register, including purchase date and warranty status for all major equipment.", priority: 'High', riskLevel: 'High', proof: 'Asset Register', location: 'Facility Office' },
                    { id: 'FM-AALB-002', description: "Analyze the total cost of ownership (TCO) for aging assets, including maintenance and energy costs.", priority: 'High', riskLevel: 'High', proof: 'TCO Analysis Report', location: 'Facility Office' },
                    { id: 'FM-AALB-003', description: "Identify assets nearing their end-of-life (EOL) and schedule them for replacement.", priority: 'High', riskLevel: 'High', proof: 'EOL Plan', location: 'Facility Office' },
                    { id: 'FM-AALB-004', description: "Prepare a business case for capital expenditure (CAPEX) for asset replacement.", priority: 'High', riskLevel: 'High', proof: 'CAPEX Proposal', location: 'Facility Office' },
                    { id: 'FM-AALB-005', description: "Develop the annual budget for operational expenditure (OPEX) for maintenance and repairs.", priority: 'High', riskLevel: 'High', proof: 'OPEX Budget', location: 'Facility Office' },
                    { id: 'FM-AALB-006', description: "Evaluate new technologies that could offer better efficiency or lower TCO.", priority: 'Medium', riskLevel: 'Low', proof: 'Technology Evaluation Report', location: 'Facility Office' },
                    { id: 'FM-AALB-007', description: "Present the lifecycle plan and budget to senior management for approval.", priority: 'High', riskLevel: 'High', proof: 'Presentation Deck', location: 'Facility Office' },
                    { id: 'FM-AALB-008', description: "Update the 5-year rolling plan for capital asset management.", priority: 'Medium', riskLevel: 'Medium', proof: '5-Year Plan Document', location: 'Facility Office' },
                    { id: 'FM-AALB-009', description: "Ensure asset disposal is done as per company policy and environmental regulations.", priority: 'Medium', riskLevel: 'Medium', proof: 'Disposal Certificate', location: 'Facility Office' },
                    { id: 'FM-AALB-010', description: "Log all decisions and plans in the central asset management system.", priority: 'High', riskLevel: 'Low', proof: 'System Entry', location: 'Facility Office' }
                ]
            },
            {
                title: "🧑‍⚖️ Vendor Labor & Statutory Compliance Audit",
                department: "Vendor Management",
                frequency: "Quarterly",
                role: "Facility Manager",
                tasks: [
                    { id: 'FM-VLSC-001', description: "Randomly check ID cards of vendor staff (housekeeping, security) to ensure they are registered and authorized.", priority: 'High', riskLevel: 'High', proof: 'ID Card Photo', location: 'All Areas' },
                    { id: 'FM-VLSC-002', description: "Verify that the vendor is providing payslips to their staff as per law.", priority: 'High', riskLevel: 'High', proof: 'Sample Payslips', location: 'Vendor Office' },
                    { id: 'FM-VLSC-003', description: "Check vendor records for PF (Provident Fund) and ESI (Employee State Insurance) contributions for their staff.", priority: 'High', riskLevel: 'High', proof: 'Contribution Challans', location: 'Vendor Office' },
                    { id: 'FM-VLSC-004', description: "Ensure the vendor has a valid contract and labor license for the site.", priority: 'High', riskLevel: 'High', proof: 'License Copy', location: 'Facility Office' },
                    { id: 'FM-VLSC-005', description: "Interview a few vendor staff members confidentially to check for issues like delayed payments or excessive work hours.", priority: 'High', riskLevel: 'Medium', proof: 'Interview Notes', location: 'All Areas' },
                    { id: 'FM-VLSC-006', description: "Review the vendor's attendance records to check for double shifts or inadequate staffing.", priority: 'Medium', riskLevel: 'Medium', proof: 'Attendance Register', location: 'Vendor Office' },
                    { id: 'FM-VLSC-007', description: "Ensure the vendor provides their staff with proper uniforms and PPE (Personal Protective Equipment).", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'All Areas' },
                    { id: 'FM-VLSC-008', description: "Check that the vendor has conducted police verification for their security staff.", priority: 'High', riskLevel: 'High', proof: 'Police Verification Report', location: 'Vendor Office' },
                    { id: 'FM-VLSC-009', description: "Verify that the vendor is adhering to minimum wage laws.", priority: 'High', riskLevel: 'High', proof: 'Wage Sheet Review', location: 'Vendor Office' },
                    { id: 'FM-VLSC-010', description: "Document any non-compliance and issue a formal notice to the vendor for corrective action.", priority: 'High', riskLevel: 'High', proof: 'Notice Copy', location: 'Facility Office' }
                ]
            },
            {
                title: "📊 Monthly SLA & KPI Scorecard Review",
                department: "Vendor Management",
                frequency: "Monthly",
                role: "Facility Manager",
                tasks: [
                    { id: 'FM-MSKR-001', description: "Gather all performance data for the month (helpdesk tickets, audit scores, uptime reports).", priority: 'High', riskLevel: 'Medium', proof: 'Data Reports', location: 'Facility Office' },
                    { id: 'FM-MSKR-002', description: "Calculate the performance against each Key Performance Indicator (KPI) defined in the Service Level Agreement (SLA).", priority: 'High', riskLevel: 'Medium', proof: 'Scorecard Document', location: 'Facility Office' },
                    { id: 'FM-MSKR-003', description: "Score each vendor (Housekeeping, Security, M&E) on a pre-defined matrix.", priority: 'High', riskLevel: 'Medium', proof: 'Scorecard Document', location: 'Facility Office' },
                    { id: 'FM-MSKR-004', description: "Identify any SLA breaches and calculate applicable penalties as per the contract.", priority: 'Medium', riskLevel: 'Medium', proof: 'Penalty Calculation', location: 'Facility Office' },
                    { id: 'FM-MSKR-005', description: "Identify areas of excellent performance for potential rewards or recognition.", priority: 'Low', riskLevel: 'Low', proof: 'Scorecard Document', location: 'Facility Office' },
                    { id: 'FM-MSKR-006', description: "Schedule and conduct a formal monthly performance review meeting with each vendor.", priority: 'High', riskLevel: 'Medium', proof: 'Calendar Invite', location: 'Facility Office' },
                    { id: 'FM-MSKR-007', description: "Present the scorecard to the vendor and discuss reasons for any poor performance.", priority: 'High', riskLevel: 'Medium', proof: 'Meeting Minutes', location: 'Facility Office' },
                    { id: 'FM-MSKR-008', description: "Develop a joint action plan with the vendor to address any shortcomings.", priority: 'High', riskLevel: 'Medium', proof: 'Action Plan Document', location: 'Facility Office' },
                    { id: 'FM-MSKR-009', description: "Track the closure of all action items from the previous month's review.", priority: 'High', riskLevel: 'Medium', proof: 'Action Tracker', location: 'Facility Office' },
                    { id: 'FM-MSKR-010', description: "Share the final scorecard and minutes of the meeting with stakeholders.", priority: 'Medium', riskLevel: 'Low', proof: 'Email Report', location: 'Facility Office' }
                ]
            },
            {
                title: "♻️ Annual Waste Management & Recycling Audit",
                department: "Sustainability (ESG)",
                frequency: "Annually",
                role: "Green Officer",
                tasks: [
                    { id: 'FM-AWMRA-001', description: "Review the process of waste segregation at source (e.g., wet, dry, e-waste bins).", priority: 'High', riskLevel: 'Medium', proof: 'Visual Inspection', location: 'All Areas' },
                    { id: 'FM-AWMRA-002', description: "Inspect the central waste collection area for proper labeling, storage, and hygiene.", priority: 'Medium', riskLevel: 'Medium', proof: 'Photo', location: 'Waste Yard' },
                    { id: 'FM-AWMRA-003', description: "Check the credentials and licenses of the waste disposal vendor.", priority: 'High', riskLevel: 'High', proof: 'License Copy', location: 'Facility Office' },
                    { id: 'FM-AWMRA-004', description: "Analyze waste generation data for the past year to identify trends and opportunities for reduction.", priority: 'High', riskLevel: 'Low', proof: 'Data Analysis Report', location: 'Facility Office' },
                    { id: 'FM-AWMRA-005', description: "Verify that e-waste is being disposed of through a certified e-waste recycler.", priority: 'High', riskLevel: 'High', proof: 'Disposal Certificate', location: 'Facility Office' },
                    { id: 'FM-AWMRA-006', description: "Audit the recycling program to measure its effectiveness (e.g., percentage of waste recycled).", priority: 'Medium', riskLevel: 'Low', proof: 'Recycling Report', location: 'Facility Office' },
                    { id: 'FM-AWMRA-007', description: "Explore opportunities to reduce overall waste generation (e.g., reducing paper, eliminating single-use plastics).", priority: 'Medium', riskLevel: 'Low', proof: 'Proposal Document', location: 'Facility Office' },
                    { id: 'FM-AWMRA-008', description: "Ensure compliance with all local environmental regulations for waste disposal.", priority: 'High', riskLevel: 'High', proof: 'Compliance Checklist', location: 'Facility Office' },
                    { id: 'FM-AWMRA-009', description: "Run an awareness campaign for employees on proper waste segregation.", priority: 'Low', riskLevel: 'Low', proof: 'Campaign Material', location: 'All Employees' },
                    { id: 'FM-AWMRA-010', description: "Set new targets for waste reduction and recycling for the upcoming year.", priority: 'High', riskLevel: 'Medium', proof: 'Management Goals', location: 'Facility Office' }
                ]
            },
            {
                title: "💡 Monthly Utility Data Collection & Analysis",
                department: "Sustainability (ESG)",
                frequency: "Monthly",
                role: "Energy Manager",
                tasks: [
                    { id: 'FM-MUDCA-001', description: "Collect electricity, water, and generator fuel consumption data for the month.", priority: 'High', riskLevel: 'Medium', proof: 'Meter Readings/Bills', location: 'Utility Rooms' },
                    { id: 'FM-MUDCA-002', description: "Enter the data into the central ESG tracking dashboard.", priority: 'High', riskLevel: 'Low', proof: 'Dashboard Screenshot', location: 'Facility Office' },
                    { id: 'FM-MUDCA-003', description: "Compare the month's consumption with the previous month and the same month last year.", priority: 'Medium', riskLevel: 'Low', proof: 'Comparison Chart', location: 'Facility Office' },
                    { id: 'FM-MUDCA-004', description: "Analyze any significant spikes or dips in consumption to find the root cause.", priority: 'High', riskLevel: 'Medium', proof: 'Analysis Report', location: 'Facility Office' },
                    { id: 'FM-MUDCA-005', description: "Calculate the building's energy performance indicators (e.g., kWh per square foot).", priority: 'Medium', riskLevel: 'Low', proof: 'Report', location: 'Facility Office' },
                    { id: 'FM-MUDCA-006', description: "Review after-hours energy consumption to identify wastage.", priority: 'High', riskLevel: 'Medium', proof: 'BMS Data', location: 'Facility Office' },
                    { id: 'FM-MUDCA-007', description: "Identify and propose opportunities for energy or water savings.", priority: 'High', riskLevel: 'Medium', proof: 'Proposal Document', location: 'Facility Office' },
                    { id: 'FM-MUDCA-008', description: "Prepare a monthly utility consumption report for management.", priority: 'Medium', riskLevel: 'Low', proof: 'Management Report', location: 'Facility Office' },
                    { id: 'FM-MUDCA-009', description: "Ensure data is accurate and ready for annual ESG reporting.", priority: 'High', riskLevel: 'Medium', proof: 'Data Validation Sheet', location: 'Facility Office' },
                    { id: 'FM-MUDCA-010', description: "Check utility bills for any errors, penalties, or tariff changes.", priority: 'High', riskLevel: 'Medium', proof: 'Bill Verification Log', location: 'Facility Office' }
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
                title: "🍳 Kitchen Opening Checklist (HACCP Focus)",
                department: "F&B",
                frequency: "Daily",
                role: "Head Chef",
                tasks: [ { id: 'CK-KO-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Kitchen' }, { id: 'CK-KO-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Kitchen' } ]
            },
            {
                title: "📦 Food Receiving & Storage Protocol",
                department: "F&B",
                frequency: "Daily",
                role: "Store Keeper",
                tasks: [ { id: 'CK-FRS-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Receiving' }, { id: 'CK-FRS-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Receiving' } ]
            },
            {
                title: "🌡️ Daily HACCP & Line Check",
                department: "F&B",
                frequency: "Daily",
                role: "Sous Chef",
                tasks: [ { id: 'CK-HLC-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Kitchen' }, { id: 'CK-HLC-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Kitchen' } ]
            },
            {
                title: "🧽 Kitchen Closing & Cleaning Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Closing Chef",
                tasks: [ { id: 'CK-KCC-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Kitchen' }, { id: 'CK-KCC-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Kitchen' } ]
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
                tasks: [ { id: 'RSM-PRS-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Pool' }, { id: 'RSM-PRS-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Pool' } ]
            },
            {
                title: "🌳 Weekly Grounds & Landscaping Maintenance",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Gardener",
                tasks: [ { id: 'RSM-GLM-001', description: "Task 1", priority: 'Medium', riskLevel: 'Low', proof: 'Log', location: 'Grounds' }, { id: 'RSM-GLM-002', description: "Task 2", priority: 'Medium', riskLevel: 'Low', proof: 'Log', location: 'Grounds' } ]
            },
            {
                title: "🧖‍♀️ Daily Spa Operations Checklist",
                department: "Wellness",
                frequency: "Daily",
                role: "Spa Manager",
                tasks: [ { id: 'RSM-SOC-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Spa' }, { id: 'RSM-SOC-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Spa' } ]
            },
            {
                title: "🤸 Guest Activity Planning & Execution",
                department: "Front Office",
                frequency: "Daily",
                role: "Activity Coordinator",
                tasks: [ { id: 'RSM-APE-001', description: "Task 1", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Activities Desk' }, { id: 'RSM-APE-002', description: "Task 2", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Activities Desk' } ]
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
                tasks: [ { id: 'JWL-DOP-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Store' }, { id: 'JWL-DOP-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Store' } ]
            },
            {
                title: "🔒 Daily Closing Procedure (Dual Control)",
                department: "Security",
                frequency: "Daily",
                role: "Store Manager",
                tasks: [ { id: 'JWL-DCP-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Store' }, { id: 'JWL-DCP-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Store' } ]
            },
            {
                title: "🛍️ Ongoing Security & Sales Floor Protocol",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                tasks: [ { id: 'JWL-SFP-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Sales Floor' }, { id: 'JWL-SFP-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Sales Floor' } ]
            },
            {
                title: "🛡️ Weekly Security & Maintenance Audit",
                department: "Security",
                frequency: "Weekly",
                role: "Store Manager",
                tasks: [ { id: 'JWL-WSA-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Store' }, { id: 'JWL-WSA-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Store' } ]
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
                tasks: [ { id: 'PH-DO-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Pharmacy' }, { id: 'PH-DO-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Pharmacy' } ]
            },
            {
                title: "💊 Prescription Filling & Verification (The 'Five Rights')",
                department: "Operations",
                frequency: "As-Needed",
                role: "Pharmacist",
                tasks: [ { id: 'PH-PFV-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Pharmacy' }, { id: 'PH-PFV-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Pharmacy' } ]
            },
            {
                title: "📦 Inventory & Controlled Substances (Zero-Error Protocol)",
                department: "Inventory",
                frequency: "Daily",
                role: "Pharmacist",
                tasks: [ { id: 'PH-ICS-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Pharmacy' }, { id: 'PH-ICS-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Pharmacy' } ]
            },
            {
                title: "🌙 Closing Procedures & Data Security",
                department: "Operations",
                frequency: "Daily",
                role: "Pharmacist",
                tasks: [ { id: 'PH-CP-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Pharmacy' }, { id: 'PH-CP-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Pharmacy' } ]
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
                tasks: [ { id: 'HOS-PAD-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Admissions' }, { id: 'HOS-PAD-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Admissions' } ]
            },
            {
                title: "🔪 Surgical Suite / Operating Theatre (OT) Readiness",
                department: "Surgery",
                frequency: "Daily",
                role: "OT Nurse",
                tasks: [ { id: 'HOS-OTR-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'OT' }, { id: 'HOS-OTR-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'OT' } ]
            },
            {
                title: "🚑 Emergency Room (ER) Management",
                department: "Emergency",
                frequency: "Daily",
                role: "ER Manager",
                tasks: [ { id: 'HOS-ERM-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'ER' }, { id: 'HOS-ERM-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'ER' } ]
            },
            {
                title: "🦠 Infection Control & Compliance",
                department: "Compliance",
                frequency: "Daily",
                role: "Infection Control Nurse",
                tasks: [ { id: 'HOS-ICC-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'All Wards' }, { id: 'HOS-ICC-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'All Wards' } ]
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
                tasks: [ { id: 'PC-DOP-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Clinic' }, { id: 'PC-DOP-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Clinic' } ]
            },
            {
                title: "➡️ Patient Flow & Experience",
                department: "Front Office",
                frequency: "Daily",
                role: "Receptionist",
                tasks: [ { id: 'PC-PFE-001', description: "Task 1", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Reception' }, { id: 'PC-PFE-002', description: "Task 2", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Reception' } ]
            },
            {
                title: "🧼 Clinical Safety & Sterilization",
                department: "Clinical",
                frequency: "Daily",
                role: "Nurse",
                tasks: [ { id: 'PC-CSS-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Clinical Rooms' }, { id: 'PC-CSS-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Clinical Rooms' } ]
            },
            {
                title: "💵 Billing & Administration",
                department: "Finance",
                frequency: "Daily",
                role: "Billing Executive",
                tasks: [ { id: 'PC-BA-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Accounts' }, { id: 'PC-BA-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Accounts' } ]
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
                tasks: [ { id: 'DL-MSC-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Lab' }, { id: 'DL-MSC-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Lab' } ]
            },
            {
                title: "🩸 Sample Management & Processing (Patient Safety First)",
                department: "Operations",
                frequency: "As-Needed",
                role: "Lab Technician",
                tasks: [ { id: 'DL-SMP-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Lab' }, { id: 'DL-SMP-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Lab' } ]
            },
            {
                title: "📈 Data, Reporting & Critical Value Communication",
                department: "Reporting",
                frequency: "Daily",
                role: "Senior Technician",
                tasks: [ { id: 'DL-DRC-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Lab' }, { id: 'DL-DRC-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Lab' } ]
            },
            {
                title: "🗑️ End of Day & Biohazard Management",
                department: "Operations",
                frequency: "Daily",
                role: "Lab Supervisor",
                tasks: [ { id: 'DL-EBM-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Lab' }, { id: 'DL-EBM-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Lab' } ]
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
                tasks: [ { id: 'GYM-DOS-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Gym' }, { id: 'GYM-DOS-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Gym' } ]
            },
            {
                title: "🤝 Member Management & Customer Experience",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                tasks: [ { id: 'GYM-MM-001', description: "Task 1", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Gym' }, { id: 'GYM-MM-002', description: "Task 2", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Gym' } ]
            },
            {
                title: "📅 Class & Staff Management",
                department: "Operations",
                frequency: "Daily",
                role: "Gym Manager",
                tasks: [ { id: 'GYM-CSM-001', description: "Task 1", priority: 'Medium', riskLevel: 'Low', proof: 'Log', location: 'Gym' }, { id: 'GYM-CSM-002', description: "Task 2", priority: 'Medium', riskLevel: 'Low', proof: 'Log', location: 'Gym' } ]
            },
            {
                title: "🌙 Closing Procedures & Security",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Staff",
                tasks: [ { id: 'GYM-CPS-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Gym' }, { id: 'GYM-CPS-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Gym' } ]
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
                tasks: [ { id: 'SPA-DOH-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Salon' }, { id: 'SPA-DOH-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Salon' } ]
            },
            {
                title: "😊 Client Experience & Service",
                department: "Customer Service",
                frequency: "Daily",
                role: "Stylist",
                tasks: [ { id: 'SPA-CES-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Salon' }, { id: 'SPA-CES-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Salon' } ]
            },
            {
                title: "📦 Inventory & Retail Management",
                department: "Inventory",
                frequency: "Weekly",
                role: "Salon Manager",
                tasks: [ { id: 'SPA-IRM-001', description: "Task 1", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Salon' }, { id: 'SPA-IRM-002', description: "Task 2", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Salon' } ]
            },
            {
                title: "🌙 Closing & End-of-Day Tasks",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Staff",
                tasks: [ { id: 'SPA-CED-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Salon' }, { id: 'SPA-CED-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Salon' } ]
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
                tasks: [ { id: 'EDU-DOC-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Campus' }, { id: 'EDU-DOC-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Campus' } ]
            },
            {
                title: " classroomsafety Classroom & Common Area Safety",
                department: "Admin",
                frequency: "Daily",
                role: "Admin Officer",
                tasks: [ { id: 'EDU-CAS-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Campus' }, { id: 'EDU-CAS-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Campus' } ]
            },
            {
                title: "👋 Student Dismissal & Lost-and-Found Protocol",
                department: "Admin",
                frequency: "Daily",
                role: "Teacher",
                tasks: [ { id: 'EDU-SDP-001', description: "Task 1", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Campus' }, { id: 'EDU-SDP-002', description: "Task 2", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Campus' } ]
            },
            {
                title: "🔥 Monthly Emergency Preparedness & Drills",
                department: "Security",
                frequency: "Monthly",
                role: "Principal",
                tasks: [ { id: 'EDU-MEP-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Campus' }, { id: 'EDU-MEP-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Campus' } ]
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
                tasks: [ { id: 'SM-MOF-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Store' }, { id: 'SM-MOF-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Store' } ]
            },
            {
                title: "🚚 Receiving & Cold Chain Integrity",
                department: "Inventory",
                frequency: "Daily",
                role: "Receiving Clerk",
                tasks: [ { id: 'SM-RCI-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Receiving' }, { id: 'SM-RCI-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Receiving' } ]
            },
            {
                title: "🛒 During the Day: Floor Operations & Customer Service",
                department: "Operations",
                frequency: "Daily",
                role: "Floor Manager",
                tasks: [ { id: 'SM-FOCS-001', description: "Task 1", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Sales Floor' }, { id: 'SM-FOCS-002', description: "Task 2", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Sales Floor' } ]
            },
            {
                title: "💰 Closing & Financial Reconciliation",
                department: "Finance",
                frequency: "Daily",
                role: "Closing Manager",
                tasks: [ { id: 'SM-CFR-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Store' }, { id: 'SM-CFR-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Store' } ]
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
                tasks: [ { id: 'FBQ-DOM-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Store' }, { id: 'FBQ-DOM-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Store' } ]
            },
            {
                title: "👗 Fitting Room, Customer Service & Loss Prevention",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                tasks: [ { id: 'FBQ-FCSLP-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Store' }, { id: 'FBQ-FCSLP-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Store' } ]
            },
            {
                title: "📦 New Stock & Inventory Management",
                department: "Inventory",
                frequency: "Weekly",
                role: "Store Manager",
                tasks: [ { id: 'FBQ-NSIM-001', description: "Task 1", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Store' }, { id: 'FBQ-NSIM-002', description: "Task 2", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Store' } ]
            },
            {
                title: "🌙 Closing & Daily Reporting",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Staff",
                tasks: [ { id: 'FBQ-CDR-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Store' }, { id: 'FBQ-CDR-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Store' } ]
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
                tasks: [ { id: 'ESR-DOM-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Showroom' }, { id: 'ESR-DOM-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Showroom' } ]
            },
            {
                title: "💡 Sales Floor & Customer Experience",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                tasks: [ { id: 'ESR-SFCE-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Showroom' }, { id: 'ESR-SFCE-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Showroom' } ]
            },
            {
                title: "🔐 Inventory & High-Value Security Protocol",
                department: "Security",
                frequency: "Weekly",
                role: "Store Manager",
                tasks: [ { id: 'ESR-IHVSP-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Showroom' }, { id: 'ESR-IHVSP-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Showroom' } ]
            },
            {
                title: "🧠 Staff & Training Drills",
                department: "HR",
                frequency: "Weekly",
                role: "Store Manager",
                tasks: [ { id: 'ESR-STD-001', description: "Task 1", priority: 'Medium', riskLevel: 'Low', proof: 'Log', location: 'Showroom' }, { id: 'ESR-STD-002', description: "Task 2", priority: 'Medium', riskLevel: 'Low', proof: 'Log', location: 'Showroom' } ]
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
                tasks: [ { id: 'FSH-EOSD-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Factory' }, { id: 'FSH-EOSD-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Factory' } ]
            },
            {
                title: "🤝 Joint Handover Meeting",
                department: "Production",
                frequency: "Daily",
                role: "Shift Supervisor",
                tasks: [ { id: 'FSH-JHM-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Factory' }, { id: 'FSH-JHM-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Factory' } ]
            },
            {
                title: "▶️ Incoming Shift: Start-up Procedures",
                department: "Production",
                frequency: "Daily",
                role: "Shift Supervisor",
                tasks: [ { id: 'FSH-ISSP-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Factory' }, { id: 'FSH-ISSP-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Factory' } ]
            },
            {
                title: "🦺 Weekly Safety & Audit Drill",
                department: "Safety",
                frequency: "Weekly",
                role: "Safety Officer",
                tasks: [ { id: 'FSH-WSAD-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Factory' }, { id: 'FSH-WSAD-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Factory' } ]
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
                tasks: [ { id: 'WBH-ICB-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' }, { id: 'WBH-ICB-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' } ]
            },
            {
                title: "📋 Pre-Event Coordination (T-30 Days)",
                department: "Operations",
                frequency: "Monthly",
                role: "Event Coordinator",
                tasks: [ { id: 'WBH-PEC-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' }, { id: 'WBH-PEC-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' } ]
            },
            {
                title: "🎉 Event Day Execution",
                department: "Operations",
                frequency: "As-Needed",
                role: "Venue Manager",
                tasks: [ { id: 'WBH-EDE-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Venue' }, { id: 'WBH-EDE-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Venue' } ]
            },
            {
                title: "💸 Post-Event Wrap-Up & Settlement",
                department: "Finance",
                frequency: "As-Needed",
                role: "Accounts Manager",
                tasks: [ { id: 'WBH-PEWUS-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Venue' }, { id: 'WBH-PEWUS-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Venue' } ]
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
                tasks: [ { id: 'PD-DOSI-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'School' }, { id: 'PD-DOSI-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'School' } ]
            },
            {
                title: "👀 During-Session Operations & Supervision",
                department: "Operations",
                frequency: "Hourly",
                role: "Staff",
                tasks: [ { id: 'PD-DSOS-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'School' }, { id: 'PD-DSOS-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'School' } ]
            },
            {
                title: "🧽 Closing & Deep Cleaning",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Staff",
                tasks: [ { id: 'PD-CDC-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'School' }, { id: 'PD-CDC-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'School' } ]
            },
            {
                title: " drills Weekly Maintenance & Emergency Drills",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Supervisor",
                tasks: [ { id: 'PD-WMED-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'School' }, { id: 'PD-WMED-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'School' } ]
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
                tasks: [ { id: 'HW-SCC-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' }, { id: 'HW-SCC-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' } ]
            },
            {
                title: "💅 Mehndi Ceremony Checklist",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { id: 'HW-MCC-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' }, { id: 'HW-MCC-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' } ]
            },
            {
                title: "💒 Wedding Day: Baraat, Varmala & Mandap",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { id: 'HW-WD-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Venue' }, { id: 'HW-WD-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Venue' } ]
            },
            {
                title: "👋 Post-Wedding: Reception & Vidaai",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { id: 'HW-PW-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' }, { id: 'HW-PW-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' } ]
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
                tasks: [ { id: 'MW-PNC-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Venue' }, { id: 'MW-PNC-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Venue' } ]
            },
            {
                title: "🚗 Post-Nikah & Rukhsati",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { id: 'MW-PNR-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' }, { id: 'MW-PNR-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' } ]
            },
            {
                title: "🍽️ Walima (Groom's Reception) Planning",
                department: "Events",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { id: 'MW-WRP-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' }, { id: 'MW-WRP-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Venue' } ]
            },
            {
                title: "🤝 General Vendor & Guest Management",
                department: "Admin",
                frequency: "As-Needed",
                role: "Event Planner",
                tasks: [ { id: 'MW-GVGM-001', description: "Task 1", priority: 'Medium', riskLevel: 'Low', proof: 'Log', location: 'Venue' }, { id: 'MW-GVGM-002', description: "Task 2", priority: 'Medium', riskLevel: 'Low', proof: 'Log', location: 'Venue' } ]
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
                tasks: [ { id: 'ARS-VCISA-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Shop' }, { id: 'ARS-VCISA-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Shop' } ]
            },
            {
                title: "💰 Diagnosis, Quoting & Work Order",
                department: "Operations",
                frequency: "As-Needed",
                role: "Service Advisor",
                tasks: [ { id: 'ARS-DQWO-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Shop' }, { id: 'ARS-DQWO-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Shop' } ]
            },
            {
                title: "🛠️ Repair & Quality Control",
                department: "Operations",
                frequency: "As-Needed",
                role: "Technician",
                tasks: [ { id: 'ARS-RQC-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Shop' }, { id: 'ARS-RQC-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Shop' } ]
            },
            {
                title: " handover Vehicle Handover Experience",
                department: "Customer Service",
                frequency: "As-Needed",
                role: "Service Advisor",
                tasks: [ { id: 'ARS-VHE-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Shop' }, { id: 'ARS-VHE-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Shop' } ]
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
                tasks: [ { id: 'MALL-DOS-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Mall' }, { id: 'MALL-DOS-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Mall' } ]
            },
            {
                title: "🧹 Ongoing Operations & Housekeeping",
                department: "Operations",
                frequency: "Hourly",
                role: "Duty Manager",
                tasks: [ { id: 'MALL-OOH-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Mall' }, { id: 'MALL-OOH-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Mall' } ]
            },
            {
                title: "🌙 Daily Closing Protocol",
                department: "Security",
                frequency: "Daily",
                role: "Closing Manager",
                tasks: [ { id: 'MALL-DCP-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Mall' }, { id: 'MALL-DCP-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Mall' } ]
            },
            {
                title: "🤝 Weekly Maintenance & Tenant Relations",
                department: "Admin",
                frequency: "Weekly",
                role: "Mall Manager",
                tasks: [ { id: 'MALL-WMTR-001', description: "Task 1", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Mall' }, { id: 'MALL-WMTR-002', description: "Task 2", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Mall' } ]
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
                tasks: [ { id: 'CC-PSTH-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Call Center' }, { id: 'CC-PSTH-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Call Center' } ]
            },
            {
                title: "🎧 Live Operations & Quality Assurance (QA)",
                department: "QA",
                frequency: "Daily",
                role: "QA Analyst",
                tasks: [ { id: 'CC-LOQA-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Call Center' }, { id: 'CC-LOQA-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Call Center' } ]
            },
            {
                title: "📈 Agent Performance & Coaching",
                department: "Operations",
                frequency: "Weekly",
                role: "Team Lead",
                tasks: [ { id: 'CC-APC-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Call Center' }, { id: 'CC-APC-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Call Center' } ]
            },
            {
                title: "🌙 End-of-Shift & Reporting",
                department: "Operations",
                frequency: "Daily",
                role: "Team Lead",
                tasks: [ { id: 'CC-EOSR-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Call Center' }, { id: 'CC-EOSR-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Call Center' } ]
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
                tasks: [ { id: 'WP-POSI-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Waterpark' }, { id: 'WP-POSI-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Waterpark' } ]
            },
            {
                title: "🌊 Ongoing Operational Safety",
                department: "Operations",
                frequency: "Hourly",
                role: "Lifeguard Supervisor",
                tasks: [ { id: 'WP-OOS-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Waterpark' }, { id: 'WP-OOS-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Waterpark' } ]
            },
            {
                title: "🌙 Closing Procedures",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Manager",
                tasks: [ { id: 'WP-CP-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Waterpark' }, { id: 'WP-CP-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Waterpark' } ]
            },
            {
                title: "🔧 Weekly & Monthly Checks",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Facility Manager",
                tasks: [ { id: 'WP-WMC-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Waterpark' }, { id: 'WP-WMC-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Waterpark' } ]
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
                tasks: [ { id: 'ABNB-PGA-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Property' }, { id: 'ABNB-PGA-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Property' } ]
            },
            {
                title: "🚪 Guest Check-Out / Tenant Move-Out",
                department: "Operations",
                frequency: "As-Needed",                
                role: "Host",
                tasks: [ { id: 'ABNB-GCO-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Property' }, { id: 'ABNB-GCO-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Property' } ]
            },
            {
                title: "🛠️ Routine Maintenance & Compliance",
                department: "Maintenance",
                frequency: "Monthly",
                role: "Host",
                tasks: [ { id: 'ABNB-RMC-001', description: "Task 1", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Property' }, { id: 'ABNB-RMC-002', description: "Task 2", priority: 'Medium', riskLevel: 'Medium', proof: 'Log', location: 'Property' } ]
            },
            {
                title: "💬 Guest Communication & Experience",
                department: "Customer Service",
                frequency: "Daily",
                role: "Host",
                tasks: [ { id: 'ABNB-GCE-001', description: "Task 1", priority: 'High', riskLevel: 'Low', proof: 'Log', location: 'Property' }, { id: 'ABNB-GCE-002', description: "Task 2", priority: 'High', riskLevel: 'Low', proof: 'Log', location: 'Property' } ]
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
                tasks: [ { id: 'CD-MSLP-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Dealership' }, { id: 'CD-MSLP-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Dealership' } ]
            },
            {
                title: "🤝 Sales & Customer Interaction Process",
                department: "Sales",
                frequency: "Daily",
                role: "Sales Associate",
                tasks: [ { id: 'CD-SCIP-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Dealership' }, { id: 'CD-SCIP-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Dealership' } ]
            },
            {
                title: "🔑 Vehicle Handover & Delivery Experience",
                department: "Customer Service",
                frequency: "As-Needed",
                role: "Sales Associate",
                tasks: [ { id: 'CD-VHDE-001', description: "Task 1", priority: 'High', riskLevel: 'Low', proof: 'Log', location: 'Dealership' }, { id: 'CD-VHDE-002', description: "Task 2", priority: 'High', riskLevel: 'Low', proof: 'Log', location: 'Dealership' } ]
            },
            {
                title: "📊 End of Day & Reporting",
                department: "Operations",
                frequency: "Daily",
                role: "Sales Manager",
                tasks: [ { id: 'CD-EODR-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Dealership' }, { id: 'CD-EODR-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Dealership' } ]
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
                tasks: [ { id: 'CE-PLEP-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Event' }, { id: 'CE-PLEP-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Event' } ]
            },
            {
                title: "🧑‍💼 New Employee Onboarding (First Week)",
                department: "HR",
                frequency: "As-Needed",
                role: "HR Manager",
                tasks: [ { id: 'CE-NEO-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Office' }, { id: 'CE-NEO-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Office' } ]
            },
            {
                title: " boardroom Annual General Meeting (AGM) Preparation",
                department: "Admin",
                frequency: "Annually",
                role: "Corporate Secretary",
                tasks: [ { id: 'CE-AGM-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' }, { id: 'CE-AGM-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Office' } ]
            },
            {
                title: "🎪 Trade Show & Conference Participation",
                department: "Marketing",
                frequency: "As-Needed",
                role: "Marketing Manager",
                tasks: [ { id: 'CE-TSCP-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Event' }, { id: 'CE-TSCP-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Event' } ]
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
                tasks: [ { id: 'ESG-EDG-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'All Sites' }, { id: 'ESG-EDG-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'All Sites' } ]
            },
            {
                title: "🧑‍🤝‍🧑 Social Metrics Data Gathering",
                department: "HR",
                frequency: "Quarterly",
                role: "HR Manager",
                tasks: [ { id: 'ESG-SMDG-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'All Sites' }, { id: 'ESG-SMDG-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'All Sites' } ]
            },
            {
                title: "⚖️ Governance Policy & Verification",
                department: "Legal",
                frequency: "Annually",
                role: "General Counsel",
                tasks: [ { id: 'ESG-GPV-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'HQ' }, { id: 'ESG-GPV-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'HQ' } ]
            },
            {
                title: "📢 Reporting & Stakeholder Engagement",
                department: "Investor Relations",
                frequency: "Annually",
                role: "IR Manager",
                tasks: [ { id: 'ESG-RSE-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'HQ' }, { id: 'ESG-RSE-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'HQ' } ]
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
                tasks: [ { id: 'ISO-DCR-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'All Depts' }, { id: 'ISO-DCR-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'All Depts' } ]
            },
            {
                title: "👑 Management & Leadership",
                department: "Management",
                frequency: "Quarterly",
                role: "Quality Manager",
                tasks: [ { id: 'ISO-ML-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Management' }, { id: 'ISO-ML-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Management' } ]
            },
            {
                title: "📦 Product Realization & Service Delivery",
                department: "Operations",
                frequency: "Weekly",
                role: "Operations Manager",
                tasks: [ { id: 'ISO-PRSD-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Operations' }, { id: 'ISO-PRSD-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Operations' } ]
            },
            {
                title: "✅ Measurement, Analysis, and Improvement",
                department: "QA",
                frequency: "Monthly",
                role: "Quality Manager",
                tasks: [ { id: 'ISO-MAI-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'QA' }, { id: 'ISO-MAI-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'QA' } ]
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
                tasks: [ { id: 'SB-WMR-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'All Sites' }, { id: 'SB-WMR-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'All Sites' } ]
            },
            {
                title: "💡 Energy Conservation",
                department: "Admin",
                frequency: "Monthly",
                role: "Facility Manager",
                tasks: [ { id: 'SB-EC-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'All Sites' }, { id: 'SB-EC-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'All Sites' } ]
            },
            {
                title: "💧 Water Conservation",
                department: "Admin",
                frequency: "Monthly",
                role: "Facility Manager",
                tasks: [ { id: 'SB-WC-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'All Sites' }, { id: 'SB-WC-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'All Sites' } ]
            },
            {
                title: "💚 Sustainable Procurement & Employee Engagement",
                department: "HR",
                frequency: "Quarterly",
                role: "HR Manager",
                tasks: [ { id: 'SB-SPEE-001', description: "Task 1", priority: 'Medium', riskLevel: 'Low', proof: 'Log', location: 'All Sites' }, { id: 'SB-SPEE-002', description: "Task 2", priority: 'Medium', riskLevel: 'Low', proof: 'Log', location: 'All Sites' } ]
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
                tasks: [ { id: 'CK-ASME-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Kitchen' }, { id: 'CK-ASME-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Kitchen' } ]
            },
            {
                title: "🥡 Packaging & Dispatch Station Setup",
                department: "Operations",
                frequency: "Daily",
                role: "Kitchen Manager",
                tasks: [ { id: 'CK-PDSS-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Kitchen' }, { id: 'CK-PDSS-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Log', location: 'Kitchen' } ]
            },
            {
                title: "🔥 Live Operations & Order Fulfillment (KOT to Handoff)",
                department: "Operations",
                frequency: "Daily",
                role: "Expo",
                tasks: [ { id: 'CK-LOOF-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Kitchen' }, { id: 'CK-LOOF-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Kitchen' } ]
            },
            {
                title: "💰 End-of-Day Reconciliation & Analysis",
                department: "Finance",
                frequency: "Daily",
                role: "Kitchen Manager",
                tasks: [ { id: 'CK-EODRA-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Kitchen' }, { id: 'CK-EODRA-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Log', location: 'Kitchen' } ]
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
                tasks: [ { id: 'ITP-P1-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Document', location: 'Home' }, { id: 'ITP-P1-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Document', location: 'Home' } ]
            },
            {
                title: "🩺 Phase 2: Health & Finance (1-2 Months Out)",
                department: "Planning",
                frequency: "One-Time",
                role: "Traveler",
                tasks: [ { id: 'ITP-P2-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Document', location: 'Home' }, { id: 'ITP-P2-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Document', location: 'Home' } ]
            },
            {
                title: "🧳 Phase 3: Packing & Preparation (1 Week Out)",
                department: "Packing",
                frequency: "One-Time",
                role: "Traveler",
                tasks: [ { id: 'ITP-P3-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Home' }, { id: 'ITP-P3-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Home' } ]
            },
            {
                title: "✈️ Phase 4: Final 24 Hours",
                department: "Final Checks",
                frequency: "One-Time",
                role: "Traveler",
                tasks: [ { id: 'ITP-P4-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Home' }, { id: 'ITP-P4-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Home' } ]
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
                tasks: [ { id: 'PTP-VAP-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Document', location: 'Home' }, { id: 'PTP-VAP-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Document', location: 'Home' } ]
            },
            {
                title: "🏨 Booking & Packing",
                department: "Planning",
                frequency: "One-Time",
                role: "Pet Owner",
                tasks: [ { id: 'PTP-BP-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Booking Confirmation', location: 'Home' }, { id: 'PTP-BP-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Home' } ]
            },
            {
                title: "📝 The Day Before Travel",
                department: "Preparation",
                frequency: "One-Time",
                role: "Pet Owner",
                tasks: [ { id: 'PTP-DBT-001', description: "Task 1", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Home' }, { id: 'PTP-DBT-002', description: "Task 2", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Home' } ]
            },
            {
                title: "🚗 Travel Day & Arrival",
                department: "Travel",
                frequency: "One-Time",
                role: "Pet Owner",
                tasks: [ { id: 'PTP-TDA-001', description: "Task 1", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'On the Go' }, { id: 'PTP-TDA-002', description: "Task 2", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'On the Go' } ]
            }
        ]
    }
];

export type PremiumPack = (typeof premiumPacks)[0];
export type Checklist = PremiumPack['checklists'][0];
