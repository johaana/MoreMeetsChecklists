
import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm, Recycle, FileCheck, LifeBuoy, DollarSign, CloudRain, Hospital, HardHat, Sprout, ShoppingBasket } from "lucide-react";

export const premiumPacks = [
    {
        id: 'hospitality_excellence_suite',
        title: "Hotel & Resort Operations Checklist",
        priceUSD: 99.99,
        priceINR: 7999,
        category: "Hospitality",
        description: "For Hotel & Restaurant Managers. A one-time purchase for the complete daily, weekly, and monthly operational toolkit.",
        icon: <Building className="w-8 h-8 text-primary" />,
        badgeText: "Most Popular",
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
                    { id: 'HK-DRC-005', description: "Dust all surfaces including tables, lamps, and shelves", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' }
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
                    { id: 'HK-TDS-005', description: "Arrange bedside table with a bottle of water and a glass", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' }
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
                    { id: 'HK-LO-005', description: "Select proper wash cycle, temperature, and detergent for each load", priority: 'High', riskLevel: 'Medium', proof: 'Log Entry', location: 'Laundry Dept' }
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
                    { id: 'HK-LRM-005', description: "Maintain a clear separation between clean and soiled linen storage", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Linen Room' }
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
                    { id: 'HK-PAC-005', description: "Empty all trash bins and replace liners in public areas", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Public Areas' }
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
                    { id: 'HK-DC-005', description: "Polish all wooden furniture and fixtures", priority: 'Low', riskLevel: 'Low', proof: 'Visual Check', location: 'Guest Room' }
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
                    { id: 'MT-PC-005', description: "Ensure garbage bins are covered and emptied regularly", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'All Areas' }
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
                    { id: 'SEC-LF-005', description: "Tag the item with a unique reference number corresponding to the log entry", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Security Office' }
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
        badgeText: "Best for Corporate",
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
                    { id: 'DSO-005', description: "Verify Cafeteria / Pantry Readiness", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Cafeteria' }
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
                    { id: 'WMS-005', description: "Inspect fire safety equipment", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Common Areas' }
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
                    { id: 'MVC-005', description: "Conduct a labor law compliance audit", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Facility Office' }
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
                    { id: 'QAT-005', description: "Review and update insurance policies", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Facility Office' }
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
                    { id: 'HKC-005', description: "Carpet and Upholstery Care", priority: 'Medium', riskLevel: 'Low', proof: 'Photo / Log', location: 'Office Area' }
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
                    { id: 'ELS-005', description: "Inspect LT & HT Panel Maintenance", priority: 'High', riskLevel: 'High', proof: 'Photo / Log', location: 'Utility Rooms' }
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
                    { id: 'HVB-005', description: "Check all Pumps, Motors and Valves", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Utility Rooms' }
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
        badgeText: "Essential for F&B",
        sampleItems: [
            "Master food safety with a HACCP-based 'Kitchen Opening' checklist.",
            "Implement a zero-error 'Food Receiving & Storage' protocol.",
            "Ensure compliance with a detailed 'Daily Temperature & HACCP Logs' checklist.",
            "Standardize staff hygiene to prevent cross-contamination and illness."
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
                    { id: 'CK-KO-005', description: "Review prep list and conduct a quick check of yesterday's stored prep items for quality and date labels.", priority: 'Medium', riskLevel: 'Medium', proof: 'Prep List Sign-off', location: 'Walk-in' }
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
                    { id: 'CK-FRS-005', description: "Move all cold/frozen items to their respective storage areas immediately.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Storage' }
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
                    { id: 'CK-HLC-005', description: "Check that all staff are following proper hygiene practices (handwashing, glove use).", priority: 'High', riskLevel: 'High', proof: 'Visual Observation', location: 'Kitchen' }
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
                    { id: 'CK-KCC-005', description: "Sweep and mop all kitchen floors, including under equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' }
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
                    { id: 'CK-SPH-005', description: "Staff wash hands thoroughly at designated times (e.g., after touching face, before starting new task).", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Kitchen' }
                ]
            },
            {
                title: "🍽️ Front of House Opening Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Restaurant Manager",
                summary: "Prepares the dining area for guests, ensuring cleanliness, correct table settings, and a welcoming ambiance.",
                tasks: [
                    { id: 'FOH-O-001', description: "Check cleanliness of dining room, tables, chairs, and floors.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-O-002', description: "Set tables with clean linen, polished cutlery, and glassware.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-O-003', description: "Review reservation list and plan table assignments.", priority: 'High', riskLevel: 'Medium', proof: 'Reservation System', location: 'Host Stand' },
                    { id: 'FOH-O-004', description: "Check that lighting and music levels create the desired ambiance.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-O-005', description: "Ensure restrooms are clean, stocked, and pleasant.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Log', location: 'Restrooms' }
                ]
            },
            {
                title: "🚪 Front of House Closing Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Closing Manager",
                summary: "Ensures the dining area is properly cleaned, reset, and secured at the end of the day.",
                tasks: [
                    { id: 'FOH-C-001', description: "Clear and sanitize all tables.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-C-002', description: "Vacuum or sweep and mop the dining room floor.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dining Room' },
                    { id: 'FOH-C-003', description: "Reconcile all cash and credit card transactions for the shift.", priority: 'High', riskLevel: 'High', proof: 'POS Report', location: 'Office' },
                    { id: 'FOH-C-004', description: "Lock all doors and windows.", priority: 'High', riskLevel: 'High', proof: 'Security Check', location: 'All' },
                    { id: 'FOH-C-005', description: "Set alarm system if applicable.", priority: 'High', riskLevel: 'High', proof: 'Security Log', location: 'Office' }
                ]
            },
            {
                title: "🍸 Bar Opening & Closing Checklist",
                department: "F&B",
                frequency: "Daily",
                role: "Bartender",
                summary: "Covers the complete cycle of bar operations from setup and stocking to cleaning and securing inventory.",
                tasks: [
                    { id: 'BAR-OC-001', description: "Check and stock all liquor, beer, wine, and mixers to par levels.", priority: 'High', riskLevel: 'Medium', proof: 'Stock Sheet', location: 'Bar' },
                    { id: 'BAR-OC-002', description: "Prepare fresh garnishes and juices for service.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Bar' },
                    { id: 'BAR-OC-003', description: "Clean and sanitize bar surfaces, tools, and glassware.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'Bar' },
                    { id: 'BAR-OC-004', description: "Conduct cash count and reconcile with POS at end of shift.", priority: 'High', riskLevel: 'High', proof: 'POS Report', location: 'Bar' },
                    { id: 'BAR-OC-005', description: "Secure all liquor inventory and lock coolers at close.", priority: 'High', riskLevel: 'High', proof: 'Security Check', location: 'Bar' }
                ]
            }
        ]
    },
    {
        id: 'healthcare_compliance_suite',
        title: "Healthcare & Hospital Checklist",
        priceUSD: 149.99,
        priceINR: 11999,
        category: "Healthcare",
        description: "For Hospital COOs & Quality Heads. An NABH & JCI-aligned toolkit to ensure patient safety and compliance.",
        icon: <Hospital className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Implement a 'Medication Error Prevention' protocol for zero mistakes.",
            "Master the 'Surgical Safety Checklist' based on WHO guidelines.",
            "Ensure 'Infection Control' with rigorous ward and ICU sanitation SOPs.",
            "Includes 'Patient Data Privacy' and 'Discharge Process' checklists."
        ],
        previewScenario: {
            title: "Preventing a Medication Error",
            description: "This scenario shows how multiple checklists work in tandem to create a robust system that prevents dangerous medication errors, a critical patient safety goal.",
            tasks: [
                { id: 'PH-PV-001', description: "Verify patient identity using at least two identifiers (e.g., name and MRN).", sourceChecklist: "Prescription Verification", priority: 'High' },
                { id: 'PH-PV-002', description: "Check prescription for legibility, completeness, and for any contraindications.", sourceChecklist: "Prescription Verification", priority: 'High' },
                { id: 'PH-CSI-003', description: "Perform double-check with another pharmacist for all high-risk medication dispensing.", sourceChecklist: "Controlled Substance Inventory", priority: 'High' },
                { id: 'NUR-MA-002', description: "Cross-verify medication label against the patient's chart at the bedside before administration.", sourceChecklist: "Medication Administration", priority: 'High' }
            ]
        },
        checklists: [
            {
                title: "💊 Prescription Verification & Dispensing",
                department: "Pharmacy",
                frequency: "Per Prescription",
                role: "Pharmacist",
                summary: "Ensures adherence to the 'Five Rights' of medication dispensing to prevent errors. Covers verification, labeling, and patient counseling.",
                tasks: [
                    { id: 'PH-PV-001', description: "Verify patient identity using at least two identifiers (e.g., name and MRN).", priority: 'High', riskLevel: 'High', proof: 'System Check', location: 'Pharmacy' },
                    { id: 'PH-PV-002', description: "Check prescription for legibility, completeness, and for any contraindications.", priority: 'High', riskLevel: 'High', proof: 'Prescription Review', location: 'Pharmacy' },
                    { id: 'PH-PV-003', description: "Accurately dispense the correct medication, dosage, and quantity.", priority: 'High', riskLevel: 'High', proof: 'Dispensing Log', location: 'Pharmacy' },
                    { id: 'PH-PV-004', description: "Label the medication clearly with patient name, drug name, strength, and instructions.", priority: 'High', riskLevel: 'High', proof: 'Label Check', location: 'Pharmacy' },
                    { id: 'PH-PV-005', description: "Provide counseling to the patient or caregiver on how to take the medication.", priority: 'Medium', riskLevel: 'Medium', proof: 'Counseling Log', location: 'Pharmacy' }
                ]
            },
            {
                title: "💉 Medication Administration (Nursing)",
                department: "Nursing",
                frequency: "Per Administration",
                role: "Nurse",
                summary: "The final safety check before a patient receives medication. Ensures the right patient gets the right drug at the right time at the bedside.",
                tasks: [
                    { id: 'NUR-MA-001', description: "Verify the 'Five Rights': Right Patient, Right Drug, Right Dose, Right Route, Right Time.", priority: 'High', riskLevel: 'High', proof: 'Chart Review', location: 'Bedside' },
                    { id: 'NUR-MA-002', description: "Cross-verify medication label against the patient's chart at the bedside before administration.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Bedside' },
                    { id: 'NUR-MA-003', description: "Document the administration immediately in the Medication Administration Record (MAR).", priority: 'High', riskLevel: 'Medium', proof: 'MAR Entry', location: 'Bedside' },
                    { id: 'NUR-MA-004', description: "Monitor the patient for any adverse reactions after administration.", priority: 'High', riskLevel: 'High', proof: 'Patient Observation', location: 'Bedside' },
                    { id: 'NUR-MA-005', description: "Educate the patient about the medication they are receiving.", priority: 'Medium', riskLevel: 'Low', proof: 'Verbal Confirmation', location: 'Bedside' }
                ]
            },
            {
                title: "⚕️ Surgical Safety Checklist (WHO Aligned)",
                department: "Surgery",
                frequency: "Per Surgery",
                role: "Surgical Team",
                summary: "A three-phase checklist (Sign In, Time Out, Sign Out) based on WHO guidelines to prevent surgical errors, covering patient ID, site marking, and instrument counts.",
                tasks: [
                    { id: 'SURG-SS-001', description: "(Sign In) Confirm patient identity, surgical site, and procedure.", priority: 'High', riskLevel: 'High', proof: 'Team Verbal Confirmation', location: 'Operating Room' },
                    { id: 'SURG-SS-002', description: "(Sign In) Confirm surgical site is marked.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Operating Room' },
                    { id: 'SURG-SS-003', description: "(Time Out) All team members introduce themselves by name and role.", priority: 'High', riskLevel: 'Medium', proof: 'Team Verbal Confirmation', location: 'Operating Room' },
                    { id: 'SURG-SS-004', description: "(Time Out) Confirm critical events, anticipated blood loss, and relevant patient information.", priority: 'High', riskLevel: 'High', proof: 'Team Verbal Confirmation', location: 'Operating Room' },
                    { id: 'SURG-SS-005', description: "(Sign Out) Confirm name of procedure, and completion of instrument, sponge, and needle counts.", priority: 'High', riskLevel: 'High', proof: 'Count Confirmation', location: 'Operating Room' }
                ]
            },
            {
                title: "🔬 Infection Control in Wards & ICUs",
                department: "Infection Control",
                frequency: "Daily",
                role: "Infection Control Nurse",
                summary: "Daily audit to ensure adherence to infection prevention protocols, covering hand hygiene, use of PPE, and environmental sanitation.",
                tasks: [
                    { id: 'IC-WICU-001', description: "Audit hand hygiene compliance among staff.", priority: 'High', riskLevel: 'High', proof: 'Audit Form', location: 'Wards/ICUs' },
                    { id: 'IC-WICU-002', description: "Check availability and correct use of Personal Protective Equipment (PPE).", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Wards/ICUs' },
                    { id: 'IC-WICU-003', description: "Verify that cleaning and disinfection of high-touch surfaces are being done as per schedule.", priority: 'High', riskLevel: 'High', proof: 'Cleaning Logs', location: 'Wards/ICUs' },
                    { id: 'IC-WICU-004', description: "Ensure proper disposal of biomedical waste in color-coded bins.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Wards/ICUs' },
                    { id: 'IC-WICU-005', description: "Monitor and enforce isolation precautions for infected patients.", priority: 'High', riskLevel: 'High', proof: 'Isolation Room Audit', location: 'Isolation Rooms' }
                ]
            },
            {
                title: "🧪 Laboratory Sample Handling & Labeling",
                department: "Laboratory",
                frequency: "Per Sample",
                role: "Lab Technician",
                summary: "A critical checklist to prevent sample rejection or misidentification. Covers sample collection, labeling, transport, and accessioning.",
                tasks: [
                    { id: 'LAB-SHL-001', description: "Verify patient identity before sample collection using two identifiers.", priority: 'High', riskLevel: 'High', proof: 'Patient Confirmation', location: 'Collection Point' },
                    { id: 'LAB-SHL-002', description: "Label sample container in front of the patient immediately after collection.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Collection Point' },
                    { id: 'LAB-SHL-003', description: "Ensure sample is transported to the lab under correct temperature conditions.", priority: 'High', riskLevel: 'Medium', proof: 'Transport Log', location: 'Lab' },
                    { id: 'LAB-SHL-004', description: "Check sample for quality (e.g., no hemolysis, sufficient quantity) upon receipt.", priority: 'High', riskLevel: 'Medium', proof: 'Receiving Log', location: 'Lab' },
                    { id: 'LAB-SHL-005', description: "Accurately log sample details into the Laboratory Information System (LIS).", priority: 'High', riskLevel: 'High', proof: 'LIS Entry', location: 'Lab' }
                ]
            },
            {
                title: "📄 In-Patient Admission & Discharge Protocol",
                department: "Front Office",
                frequency: "Per Patient",
                role: "Admissions Officer",
                summary: "Ensures a smooth, informed, and error-free patient journey from admission to discharge, covering consent, financial counseling, and discharge instructions.",
                tasks: [
                    { id: 'ADM-AD-001', description: "(Admission) Obtain informed consent and complete all admission paperwork.", priority: 'High', riskLevel: 'Medium', proof: 'Signed Forms', location: 'Admissions' },
                    { id: 'ADM-AD-002', description: "(Admission) Provide financial counseling regarding estimated costs and insurance coverage.", priority: 'High', riskLevel: 'Medium', proof: 'Counseling Form', location: 'Admissions' },
                    { id: 'ADM-AD-003', description: "(Discharge) Verify that the discharge summary is complete and signed by the physician.", priority: 'High', riskLevel: 'High', proof: 'Discharge Summary', location: 'Nursing Station' },
                    { id: 'ADM-AD-004', description: "(Discharge) Explain all post-discharge medications and follow-up appointments to the patient/family.", priority: 'High', riskLevel: 'High', proof: 'Discharge Counseling Form', location: 'Bedside' },
                    { id: 'ADM-AD-005', description: "(Discharge) Settle the final bill and complete all financial formalities.", priority: 'High', riskLevel: 'High', proof: 'Final Bill', location: 'Billing' }
                ]
            },
            {
                title: "🔒 Controlled Substance Inventory",
                department: "Pharmacy",
                frequency: "Daily",
                role: "Pharmacist",
                summary: "A high-stakes checklist for managing narcotics and other controlled substances, ensuring 100% accountability and compliance with legal requirements.",
                tasks: [
                    { id: 'PH-CSI-001', description: "Conduct a physical count of all controlled substances at the beginning and end of each shift.", priority: 'High', riskLevel: 'High', proof: 'Count Log', location: 'Pharmacy Vault' },
                    { id: 'PH-CSI-002', description: "Ensure two pharmacists verify the count and sign the register.", priority: 'High', riskLevel: 'High', proof: 'Signed Register', location: 'Pharmacy Vault' },
                    { id: 'PH-CSI-003', description: "Reconcile the physical count with the perpetual inventory record in the system.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Report', location: 'Pharmacy' },
                    { id: 'PH-CSI-004', description: "Investigate and report any discrepancies immediately to the pharmacy head.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Pharmacy' },
                    { id: 'PH-CSI-005', description: "Ensure all controlled substances are stored in a securely locked, dedicated vault or cabinet.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Pharmacy Vault' }
                ]
            },
            {
                title: "🚨 Emergency Code Blue Response",
                department: "Emergency",
                frequency: "Per Event/Drill",
                role: "Code Blue Team Leader",
                summary: "A time-critical checklist for managing cardiac emergencies (Code Blue). Covers team roles, crash cart readiness, and post-event documentation.",
                tasks: [
                    { id: 'ER-CB-001', description: "Verify the crash cart is fully stocked, and the defibrillator is charged and functional (checked daily).", priority: 'High', riskLevel: 'High', proof: 'Crash Cart Log', location: 'ER/Wards' },
                    { id: 'ER-CB-002', description: "Announce 'Code Blue' with the exact location clearly.", priority: 'High', riskLevel: 'High', proof: 'PA System Log', location: 'Hospital-wide' },
                    { id: 'ER-CB-003', description: "Assign roles clearly at the start of the event (e.g., compressor, airway, recorder).", priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation', location: 'Bedside' },
                    { id: 'ER-CB-004', description: "Document all interventions, medications, and timings accurately on the Code Blue record.", priority: 'High', riskLevel: 'High', proof: 'Code Blue Form', location: 'Bedside' },
                    { id: 'ER-CB-005', description: "Conduct a post-event debrief to identify areas for improvement.", priority: 'Medium', riskLevel: 'Medium', proof: 'Debrief Minutes', location: 'Conference Room' }
                ]
            }
        ]
    },
    {
        id: 'retail_operations_pack',
        title: "Retail Store Operations Checklist",
        priceUSD: 79.99,
        priceINR: 6499,
        category: "Retail",
        description: "For retail owners and COOs. A complete toolkit to standardize store operations, reduce shrinkage, and enhance customer experience.",
        icon: <ShoppingBasket className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Implement a 'Cash Handling & Reconciliation' protocol to eliminate discrepancies.",
            "Standardize 'Store Opening & Closing' procedures for security and readiness.",
            "Master 'Inventory Management' from receiving to cycle counts.",
            "Includes 'Visual Merchandising' and 'Customer Service Standards' checklists."
        ],
        previewScenario: {
            title: "Preventing End-of-Day Cash Shortage",
            description: "This scenario shows how checklists ensure financial accuracy and prevent loss. A single missed step can lead to hours of recounting or financial loss.",
            tasks: [
                { id: 'CASH-002', description: "At shift change, incoming and outgoing cashiers count the float together and sign off.", sourceChecklist: "Cash Handling & Reconciliation", priority: 'High' },
                { id: 'CLOSE-003', description: "Reconcile daily sales report from POS with total cash, card, and digital payments.", sourceChecklist: "Store Closing Procedure", priority: 'High' },
                { id: 'CASH-004', description: "All 'No Sale' or 'Void' transactions must be approved and initialed by the manager on duty.", sourceChecklist: "Cash Handling & Reconciliation", priority: 'High' },
                { id: 'SEC-005', description: "Deposit the day's earnings in the drop safe in a tamper-proof bag, witnessed by a second staff member.", sourceChecklist: "Security & Loss Prevention", priority: 'High' }
            ]
        },
        checklists: [
            {
                title: "🌅 Store Opening Procedure",
                department: "Operations",
                frequency: "Daily",
                role: "Store Manager",
                summary: "Ensures the store is perfectly prepared for business, covering security, cleanliness, systems readiness, and staff briefing.",
                tasks: [
                    { id: 'OPEN-001', description: "Perform a security check of the premises perimeter before entry.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Exterior' },
                    { id: 'OPEN-002', description: "Deactivate alarm system and check for any overnight alerts.", priority: 'High', riskLevel: 'High', proof: 'Alarm Log', location: 'Interior' },
                    { id: 'OPEN-003', description: "Turn on all lights, displays, and music.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'OPEN-004', description: "Boot up POS systems, check network connectivity, and verify opening cash float.", priority: 'High', riskLevel: 'High', proof: 'POS Log', location: 'Cash Counter' },
                    { id: 'OPEN-005', description: "Conduct a quick floor walk to ensure cleanliness and tidiness.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' }
                ]
            },
            {
                title: "🌃 Store Closing Procedure",
                department: "Operations",
                frequency: "Daily",
                role: "Closing Manager",
                summary: "A systematic checklist for securely closing the store, covering cash reconciliation, cleaning, securing inventory, and end-of-day reporting.",
                tasks: [
                    { id: 'CLOSE-001', description: "Complete all end-of-day cleaning tasks for the sales floor and backroom.", priority: 'High', riskLevel: 'Medium', proof: 'Cleaning Log', location: 'All Areas' },
                    { id: 'CLOSE-002', description: "Face and front all merchandise for a fresh look the next day.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'CLOSE-003', description: "Reconcile daily sales report from POS with total cash, card, and digital payments.", priority: 'High', riskLevel: 'High', proof: 'EOD Report', location: 'Back Office' },
                    { id: 'CLOSE-004', description: "Prepare bank deposit and secure cash in the safe.", priority: 'High', riskLevel: 'High', proof: 'Deposit Slip/Safe Log', location: 'Back Office' },
                    { id: 'CLOSE-005', description: "Ensure all doors, windows, and gates are locked and set the alarm system.", priority: 'High', riskLevel: 'High', proof: 'Security Checklist', location: 'All Areas' }
                ]
            },
            {
                title: "💵 Cash Handling & Reconciliation",
                department: "Finance",
                frequency: "Daily",
                role: "Cashier/Manager",
                summary: "A critical financial control checklist to prevent cash discrepancies, covering float verification, transaction accuracy, and end-of-shift balancing.",
                tasks: [
                    { id: 'CASH-001', description: "Verify opening float amount with a manager or second person.", priority: 'High', riskLevel: 'High', proof: 'Float Log', location: 'Cash Counter' },
                    { id: 'CASH-002', description: "Perform cash drops when the amount in the drawer exceeds the set limit.", priority: 'High', riskLevel: 'Medium', proof: 'Drop Log', location: 'Cash Counter' },
                    { id: 'CASH-003', description: "Count the drawer at the end of the shift and balance against the POS sales report.", priority: 'High', riskLevel: 'High', proof: 'Reconciliation Sheet', location: 'Back Office' },
                    { id: 'CASH-004', description: "All 'No Sale' or 'Void' transactions must be approved and initialed by the manager on duty.", priority: 'High', riskLevel: 'Medium', proof: 'POS Audit Trail', location: 'Cash Counter' },
                    { id: 'CASH-005', description: "Report any cash shortage or overage immediately as per company policy.", priority: 'High', riskLevel: 'High', proof: 'Discrepancy Report', location: 'Back Office' }
                ]
            },
            {
                title: "📦 Inventory Receiving & Stocking",
                department: "Inventory",
                frequency: "Per Delivery",
                role: "Stock Associate",
                summary: "Ensures accuracy in inventory from the moment it arrives. Covers verifying deliveries, checking for damages, and updating stock levels.",
                tasks: [
                    { id: 'INV-REC-001', description: "Verify delivered quantity and item codes against the packing slip or invoice.", priority: 'High', riskLevel: 'High', proof: 'Signed Packing Slip', location: 'Receiving Area' },
                    { id: 'INV-REC-002', description: "Inspect all cartons for signs of damage or tampering.", priority: 'High', riskLevel: 'Medium', proof: 'Receiving Log', location: 'Receiving Area' },
                    { id: 'INV-REC-003', description: "Report any discrepancies or damages to the vendor and store manager immediately.", priority: 'High', riskLevel: 'Medium', proof: 'Discrepancy Report', location: 'Receiving Area' },
                    { id: 'INV-REC-004', description: "Update inventory management system with received stock.", priority: 'High', riskLevel: 'High', proof: 'System Entry Log', location: 'Back Office' },
                    { id: 'INV-REC-005', description: "Move received stock to the designated backroom or sales floor location promptly.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Stock Room/Sales Floor' }
                ]
            },
            {
                title: "🔄 Cycle Count & Inventory Audit",
                department: "Inventory",
                frequency: "Weekly",
                role: "Inventory Manager",
                summary: "A proactive approach to maintaining inventory accuracy. This checklist details the process for regular, systematic counting of product categories.",
                tasks: [
                    { id: 'INV-AUD-001', description: "Select a specific product category or section to count based on the weekly schedule.", priority: 'High', riskLevel: 'Medium', proof: 'Count Schedule', location: 'Sales Floor/Stock Room' },
                    { id: 'INV-AUD-002', description: "Physically count all items in the selected category.", priority: 'High', riskLevel: 'Medium', proof: 'Count Sheets', location: 'Sales Floor/Stock Room' },
                    { id: 'INV-AUD-003', description: "Compare the physical count against the system inventory records.", priority: 'High', riskLevel: 'High', proof: 'Variance Report', location: 'Back Office' },
                    { id: 'INV-AUD-004', description: "Investigate significant discrepancies to find the root cause (e.g., theft, receiving error).", priority: 'High', riskLevel: 'High', proof: 'Investigation Notes', location: 'Back Office' },
                    { id: 'INV-AUD-005', description: "Adjust system inventory to reflect the physical count, with manager approval.", priority: 'High', riskLevel: 'High', proof: 'Adjustment Log', location: 'Back Office' }
                ]
            },
            {
                title: "🎨 Visual Merchandising Standards",
                department: "Marketing",
                frequency: "Weekly",
                role: "Visual Merchandiser",
                summary: "Ensures the store is visually appealing and aligns with brand standards. Covers window displays, mannequin styling, and in-store signage.",
                tasks: [
                    { id: 'VM-001', description: "Ensure window displays are clean, well-lit, and feature current promotions.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Storefront' },
                    { id: 'VM-002', description: "Check that all mannequins are styled according to the current season's lookbook.", priority: 'Medium', riskLevel: 'Low', proof: 'Photo', location: 'Sales Floor' },
                    { id: 'VM-003', description: "Verify that all promotional signage and price tickets are accurate and correctly placed.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'VM-004', description: "Ensure feature tables and focus areas are styled to highlight key products.", priority: 'High', riskLevel: 'Medium', proof: 'Photo', location: 'Sales Floor' },
                    { id: 'VM-005', description: "Walk the store to identify and fix any messy or disorganized displays.", priority: 'High', riskLevel: 'Low', proof: 'Visual Check', location: 'Sales Floor' }
                ]
            },
            {
                title: "🛡️ Security & Loss Prevention",
                department: "Security",
                frequency: "Daily",
                role: "Security / Manager",
                summary: "A daily checklist of proactive measures to deter theft and reduce inventory shrinkage, covering CCTV, EAS systems, and high-risk areas.",
                tasks: [
                    { id: 'SEC-001', description: "Check that all CCTV cameras are operational and recording.", priority: 'High', riskLevel: 'High', proof: 'System Log', location: 'Security Office' },
                    { id: 'SEC-002', description: "Test the Electronic Article Surveillance (EAS) gates at the entrance.", priority: 'High', riskLevel: 'Medium', proof: 'Test Log', location: 'Entrance' },
                    { id: 'SEC-003', description: "Ensure high-value items are secured in locked cabinets or have security tags.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Sales Floor' },
                    { id: 'SEC-004', description: "Monitor fitting rooms to prevent tag removal and concealment.", priority: 'High', riskLevel: 'Medium', proof: 'Staff Observation', location: 'Fitting Rooms' },
                    { id: 'SEC-005', description: "Ensure back doors and receiving areas are kept locked and secure.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Back of House' }
                ]
            },
            {
                title: "🤝 Customer Service Standards",
                department: "Sales",
                frequency: "Ongoing",
                role: "Store Manager",
                summary: "A framework for training and auditing staff on providing an exceptional customer experience, from greeting to handling complaints.",
                tasks: [
                    { id: 'CS-001', description: "Ensure every customer is greeted within 30 seconds of entering the store.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Observation', location: 'Sales Floor' },
                    { id: 'CS-002', description: "Staff are actively approaching and offering assistance to customers.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Observation', location: 'Sales Floor' },
                    { id: 'CS-003', description: "Staff demonstrate good product knowledge when asked questions.", priority: 'High', riskLevel: 'Medium', proof: 'Mystery Shopper Report', location: 'Sales Floor' },
                    { id: 'CS-004', description: "Check that checkout process is efficient and friendly.", priority: 'High', riskLevel: 'Medium', proof: 'Manager Observation', location: 'Cash Counter' },
                    { id: 'CS-005', description: "Review any customer complaints and ensure they are resolved as per policy.", priority: 'High', riskLevel: 'High', proof: 'Complaint Log', location: 'Back Office' }
                ]
            }
        ]
    },
    {
        id: 'education_sector_pack',
        title: "School & Campus Operations Checklist",
        priceUSD: 79.99,
        priceINR: 6499,
        category: "Education",
        description: "For School Principals and Admin Heads. A comprehensive toolkit for ensuring student safety, facility management, and operational excellence.",
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Implement a 'Student Dismissal & Handover' protocol to ensure child safety.",
            "Standardize 'School Bus Safety' checks for drivers and vehicles.",
            "Manage 'Classroom Safety & Hygiene' with daily and weekly audits.",
            "Includes 'Visitor Management' and 'Emergency Drill' protocols."
        ],
        previewScenario: {
            title: "Executing a Safe Student Dismissal",
            description: "A chaotic dismissal is a major safety and reputational risk. This scenario shows how checklists ensure every child is handed over safely and accounted for.",
            tasks: [
                { id: 'DIS-001', description: "Verify identity of the person picking up the child against the authorized pick-up list.", sourceChecklist: "Student Dismissal & Handover", priority: 'High' },
                { id: 'BUS-003', description: "Ensure a staff member takes attendance as children board the bus.", sourceChecklist: "School Bus Safety & Operations", priority: 'High' },
                { id: 'SEC-004', description: "Monitor the gate and surrounding area for any unauthorized or suspicious persons during dispersal.", sourceChecklist: "Campus Security & Patrolling", priority: 'High' },
                { id: 'VIS-002', description: "Issue a temporary visitor pass only after verifying the purpose of visit and identity for anyone entering during dismissal.", sourceChecklist: "Visitor & Vendor Management", priority: 'High' }
            ]
        },
        checklists: [
            {
                title: "🌅 School Opening Procedure",
                department: "Admin",
                frequency: "Daily",
                role: "Admin Officer",
                summary: "A daily morning checklist to ensure the campus is safe, clean, and ready for students and staff.",
                tasks: [
                    { id: 'OPEN-001', description: "Unlock all required gates and classroom doors.", priority: 'High', riskLevel: 'Medium', proof: 'Physical Check', location: 'Campus-wide' },
                    { id: 'OPEN-002', description: "Perform a safety sweep of playgrounds and common areas for any hazards.", priority: 'High', riskLevel: 'High', proof: 'Sweep Log', location: 'Outdoor Areas' },
                    { id: 'OPEN-003', description: "Ensure all lights and fans are working in classrooms and corridors.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Indoor Areas' },
                    { id: 'OPEN-004', description: "Check that restrooms are clean and stocked with soap and toilet paper.", priority: 'High', riskLevel: 'Medium', proof: 'Restroom Log', location: 'Restrooms' },
                    { id: 'OPEN-005', description: "Verify that the security guard and support staff are at their posts.", priority: 'High', riskLevel: 'Medium', proof: 'Attendance Register', location: 'Gate/Office' }
                ]
            },
            {
                title: "🚌 School Bus Safety & Operations",
                department: "Transport",
                frequency: "Daily",
                role: "Transport Manager",
                summary: "A critical checklist for ensuring the safety of students during transit. Covers vehicle checks, driver fitness, and student conduct.",
                tasks: [
                    { id: 'BUS-001', description: "Driver conducts a pre-trip inspection of the bus (tires, lights, brakes, first-aid kit).", priority: 'High', riskLevel: 'High', proof: 'Vehicle Checklist', location: 'Bus Parking' },
                    { id: 'BUS-002', description: "Verify the driver's fitness for duty (no signs of illness or intoxication).", priority: 'High', riskLevel: 'High', proof: 'Supervisor Observation', location: 'Bus Parking' },
                    { id: 'BUS-003', description: "Ensure a staff member takes attendance as children board the bus.", priority: 'High', riskLevel: 'Medium', proof: 'Attendance Sheet', location: 'Bus' },
                    { id: 'BUS-004', description: "Check that all students are seated before the bus starts moving.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Bus' },
                    { id: 'BUS-005', description: "Ensure the bus speed limit is adhered to and the GPS is active.", priority: 'High', riskLevel: 'High', proof: 'GPS Report', location: 'On Route' }
                ]
            },
            {
                title: "🚶 Student Dismissal & Handover",
                department: "Academics/Security",
                frequency: "Daily",
                role: "Supervising Teacher",
                summary: "A high-stakes protocol to ensure every child is handed over safely to the correct parent or guardian.",
                tasks: [
                    { id: 'DIS-001', description: "Verify identity of the person picking up the child against the authorized pick-up list/ID card.", priority: 'High', riskLevel: 'High', proof: 'ID Card Check', location: 'Dismissal Area' },
                    { id: 'DIS-002', description: "Ensure children are handed over only in the designated, supervised area.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Observation', location: 'Dismissal Area' },
                    { id: 'DIS-003', description: "Maintain an orderly line and prevent crowding at the gate.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Observation', location: 'Gate' },
                    { id: 'DIS-004', description: "Do not release a child to an unauthorized person without explicit permission from the parent.", priority: 'High', riskLevel: 'High', proof: 'Communication Log', location: 'Dismissal Area' },
                    { id: 'DIS-005', description: "Account for all children before the final staff member leaves the dispersal point.", priority: 'High', riskLevel: 'High', proof: 'Final Count Log', location: 'Dismissal Area' }
                ]
            },
            {
                title: "🛡️ Campus Security & Patrolling",
                department: "Security",
                frequency: "Daily",
                role: "Security Supervisor",
                summary: "Daily security operations to maintain a safe campus environment, including patrolling, monitoring CCTV, and managing access.",
                tasks: [
                    { id: 'SEC-001', description: "Check that all security guards are on duty and at their designated posts.", priority: 'High', riskLevel: 'Medium', proof: 'Attendance Log', location: 'Campus-wide' },
                    { id: 'SEC-002', description: "Conduct regular patrols of the campus perimeter, including boundary walls.", priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Perimeter' },
                    { id: 'SEC-003', description: "Monitor CCTV cameras for any suspicious activity, especially near entry/exit points.", priority: 'High', riskLevel: 'Medium', proof: 'CCTV Log', location: 'Security Room' },
                    { id: 'SEC-004', description: "Monitor the gate and surrounding area for any unauthorized or suspicious persons.", priority: 'High', riskLevel: 'High', proof: 'Observation Log', location: 'Gate' },
                    { id: 'SEC-005', description: "Ensure all non-essential gates are locked during school hours.", priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Gates' }
                ]
            },
            {
                title: "🧑‍🏫 Classroom Safety & Hygiene",
                department: "Academics/Admin",
                frequency: "Weekly",
                role: "Admin Manager",
                summary: "A checklist for teachers and admin to ensure classrooms are safe, hygienic, and conducive to learning.",
                tasks: [
                    { id: 'CSH-001', description: "Check for any sharp edges or broken furniture in the classroom.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Classroom' },
                    { id: 'CSH-002', description: "Ensure classroom is clean and dust-free.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Classroom' },
                    { id: 'CSH-003', description: "Verify that fire extinguisher and first-aid kit are present and accessible.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Classroom' },
                    { id: 'CSH-004', description: "Ensure electrical sockets are safe and not overloaded.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Classroom' },
                    { id: 'CSH-005', description: "Confirm proper ventilation and lighting in the classroom.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Classroom' }
                ]
            },
            {
                title: "📋 Visitor & Vendor Management",
                department: "Security",
                frequency: "As-Needed",
                role: "Security Guard",
                summary: "A strict protocol for managing all non-staff entries to the campus, ensuring safety and accountability.",
                tasks: [
                    { id: 'VIS-001', description: "Politely stop all visitors at the gate and inquire about the purpose of their visit.", priority: 'High', riskLevel: 'Medium', proof: 'Gate Log', location: 'Gate' },
                    { id: 'VIS-002', description: "Verify visitor identity with a valid photo ID.", priority: 'High', riskLevel: 'High', proof: 'ID Check', location: 'Gate' },
                    { id: 'VIS-003', description: "Log visitor details (name, contact, purpose, person to meet) in the register.", priority: 'High', riskLevel: 'Medium', proof: 'Visitor Register', location: 'Gate' },
                    { id: 'VIS-004', description: "Issue a visitor pass which must be worn at all times.", priority: 'High', riskLevel: 'Medium', proof: 'Pass Issuance', location: 'Gate' },
                    { id: 'VIS-005', description: "Ensure the visitor is escorted or directed to the concerned person/department.", priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Confirmation', location: 'Gate' }
                ]
            },
            {
                title: "🔥 Fire & Emergency Drill Protocol",
                department: "Safety",
                frequency: "Quarterly",
                role: "Safety Officer",
                summary: "A step-by-step guide to conducting effective emergency drills, ensuring staff and students know exactly what to do in a real crisis.",
                tasks: [
                    { id: 'DRILL-001', description: "Pre-plan the drill scenario (e.g., fire, earthquake) and inform key staff.", priority: 'High', riskLevel: 'Medium', proof: 'Drill Plan', location: 'Office' },
                    { id: 'DRILL-002', description: "Sound the emergency alarm and observe reaction time.", priority: 'High', riskLevel: 'High', proof: 'Time Log', location: 'Campus-wide' },
                    { id: 'DRILL-003', description: "Ensure teachers lead students out in an orderly fashion using designated escape routes.", priority: 'High', riskLevel: 'High', proof: 'Drill Observation', location: 'Campus-wide' },
                    { id: 'DRILL-004', description: "Conduct a head count at the designated assembly point to ensure everyone is evacuated.", priority: 'High', riskLevel: 'High', proof: 'Head Count Sheet', location: 'Assembly Point' },
                    { id: 'DRILL-005', description: "Conduct a post-drill review to identify gaps and areas for improvement.", priority: 'High', riskLevel: 'Medium', proof: 'Review Minutes', location: 'Office' }
                ]
            },
            {
                title: "⚽ Playground & Sports Safety",
                department: "Admin/Sports",
                frequency: "Weekly",
                role: "Admin Manager",
                summary: "Weekly inspection of all playground and sports equipment to prevent injuries.",
                tasks: [
                    { id: 'PLAY-001', description: "Inspect all swings, slides, and climbing structures for sharp edges, rust, or instability.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Playground' },
                    { id: 'PLAY-002', description: "Check the playground surface (sand, rubber matting) for adequate depth and hazards.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Playground' },
                    { id: 'PLAY-003', description: "Ensure sports equipment (goalposts, basketball hoops) is securely anchored.", priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Sports Ground' },
                    { id: 'PLAY-004', description: "Remove any broken or unsafe equipment from use immediately.", priority: 'High', riskLevel: 'High', proof: 'Removal Log', location: 'Playground/Sports Ground' },
                    { id: 'PLAY-005', description: "Ensure adequate supervision is present during play times.", priority: 'High', riskLevel: 'Medium', proof: 'Roster Check', location: 'Playground/Sports Ground' }
                ]
            }
        ]
    },
    {
        id: 'manufacturing_plant_pack',
        title: "Manufacturing Plant Checklist",
        priceUSD: 149.99,
        priceINR: 11999,
        category: "Manufacturing",
        description: "For Plant Heads and Safety Officers. A toolkit for ensuring production efficiency, worker safety (EHS), and quality control.",
        icon: <Factory className="w-8 h-8 text-primary" />,
        sampleItems: [
            "Implement a 'Lock-Out Tag-Out' (LOTO) procedure for machinery maintenance.",
            "Standardize 'Personal Protective Equipment (PPE)' compliance checks.",
            "Manage 'Raw Material Quality Control' from receiving to production line.",
            "Includes 'Forklift Safety' and 'Hazardous Material Handling' SOPs."
        ],
        previewScenario: {
            title: "Performing Safe Machine Maintenance",
            description: "An unplanned machine startup during maintenance is a catastrophic, often fatal, risk. This scenario shows how checklists ensure a machine is safely isolated before work begins.",
            tasks: [
                { id: 'LOTO-001', description: "Identify all energy sources for the machine to be serviced (electrical, pneumatic, hydraulic).", sourceChecklist: "Lock-Out Tag-Out (LOTO) Procedure", priority: 'High' },
                { id: 'LOTO-002', description: "De-energize and lock out all power sources using an approved lock and tag.", sourceChecklist: "Lock-Out Tag-Out (LOTO) Procedure", priority: 'High' },
                { id: 'LOTO-004', description: "Attempt to start the machine to verify that it is fully de-energized (verification step).", sourceChecklist: "Lock-Out Tag-Out (LOTO) Procedure", priority: 'High' },
                { id: 'MAINT-001', description: "Obtain a 'Permit to Work' before starting any non-routine maintenance task.", sourceChecklist: "Machine Maintenance & Safety", priority: 'High' }
            ]
        },
        checklists: [
            {
                title: "🌅 Production Shift Handover",
                department: "Production",
                frequency: "Per Shift",
                role: "Shift Supervisor",
                summary: "Ensures a smooth transition between shifts, covering production status, quality issues, and any maintenance or safety concerns.",
                tasks: [
                    { id: 'SHIFT-001', description: "Review previous shift's production numbers against targets.", priority: 'High', riskLevel: 'Medium', proof: 'Production Log', location: 'Supervisor Office' },
                    { id: 'SHIFT-002', description: "Discuss any quality issues or rejections that occurred.", priority: 'High', riskLevel: 'High', proof: 'Handover Meeting', location: 'Supervisor Office' },
                    { id: 'SHIFT-003', description: "Communicate any machine breakdowns or pending maintenance tasks.", priority: 'High', riskLevel: 'High', proof: 'Maintenance Log', location: 'Supervisor Office' },
                    { id: 'SHIFT-004', description: "Verify raw material availability for the current shift's production plan.", priority: 'High', riskLevel: 'Medium', proof: 'Inventory Check', location: 'Shop Floor' },
                    { id: 'SHIFT-005', description: "Conduct a brief tool-box talk with the incoming shift on safety and production priorities.", priority: 'Medium', riskLevel: 'Medium', proof: 'Meeting Log', location: 'Shop Floor' }
                ]
            },
            {
                title: "🛡️ Personal Protective Equipment (PPE) Audit",
                department: "EHS (Safety)",
                frequency: "Daily",
                role: "Safety Officer",
                summary: "A daily walk-through to ensure all workers are using the required PPE correctly, preventing workplace injuries.",
                tasks: [
                    { id: 'PPE-001', description: "Check that workers in designated areas are wearing safety helmets.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Shop Floor' },
                    { id: 'PPE-002', description: "Verify that safety glasses are being used during grinding, cutting, or chemical handling.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Workstations' },
                    { id: 'PPE-003', description: "Ensure workers have and are using the correct type of gloves for their task.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Workstations' },
                    { id: 'PPE-004', description: "Check for correct use of safety footwear across the plant floor.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Shop Floor' },
                    { id: 'PPE-005', description: "Confirm that high-visibility vests are worn in areas with vehicle movement.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Yard/Loading Bays' }
                ]
            },
            {
                title: "🔧 Machine Maintenance & Safety",
                department: "Maintenance",
                frequency: "Weekly",
                role: "Maintenance Technician",
                summary: "Preventive maintenance checks to ensure machinery is running efficiently and safely, covering lubrication, guarding, and emergency stops.",
                tasks: [
                    { id: 'MAINT-001', description: "Obtain a 'Permit to Work' before starting any non-routine maintenance task.", priority: 'High', riskLevel: 'High', proof: 'Permit Form', location: 'Machine Location' },
                    { id: 'MAINT-002', description: "Ensure all machine guards are in place and functional.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Machine Location' },
                    { id: 'MAINT-003', description: "Check and test all emergency stop buttons.", priority: 'High', riskLevel: 'High', proof: 'Test Log', location: 'Machine Location' },
                    { id: 'MAINT-004', description: "Lubricate moving parts as per the manufacturer's schedule.", priority: 'Medium', riskLevel: 'Medium', proof: 'Lubrication Log', location: 'Machine Location' },
                    { id: 'MAINT-005', description: "Clean machine and surrounding area of debris and oil spills after maintenance.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Machine Location' }
                ]
            },
            {
                title: "🔒 Lock-Out Tag-Out (LOTO) Procedure",
                department: "EHS/Maintenance",
                frequency: "Per Use",
                role: "Authorized Employee",
                summary: "A life-saving procedure to ensure machinery is properly shut off and not restarted prior to the completion of maintenance or repair work.",
                tasks: [
                    { id: 'LOTO-001', description: "Identify all energy sources for the machine to be serviced (electrical, pneumatic, hydraulic).", priority: 'High', riskLevel: 'High', proof: 'Energy Source List', location: 'Machine Location' },
                    { id: 'LOTO-002', description: "De-energize and lock out all power sources using an approved lock and tag.", priority: 'High', riskLevel: 'High', proof: 'Physical Lock/Tag', location: 'Energy Source' },
                    { id: 'LOTO-003', description: "Dissipate any stored energy (e.g., bleed pneumatic lines).", priority: 'High', riskLevel: 'High', proof: 'Verification', location: 'Machine Location' },
                    { id: 'LOTO-004', description: "Attempt to start the machine to verify that it is fully de-energized (verification step).", priority: 'High', riskLevel: 'High', proof: 'Test Attempt', location: 'Machine Location' },
                    { id: 'LOTO-005', description: "Only the employee who placed the lock is authorized to remove it after work is complete.", priority: 'High', riskLevel: 'High', proof: 'Policy', location: 'Machine Location' }
                ]
            },
            {
                title: " forklift Safety Operations",
                department: "Logistics",
                frequency: "Daily",
                role: "Forklift Operator",
                summary: "A pre-use checklist to ensure forklifts are safe to operate, preventing accidents and injuries in the warehouse and production areas.",
                tasks: [
                    { id: 'FORK-001', description: "Check tires, horn, lights, and brakes before first use of the shift.", priority: 'High', riskLevel: 'High', proof: 'Pre-use Checklist Form', location: 'Warehouse' },
                    { id: 'FORK-002', description: "Inspect forks for cracks or damage.", priority: 'High', riskLevel: 'High', proof: 'Visual Inspection', location: 'Warehouse' },
                    { id: 'FORK-003', description: "Ensure the operator is certified and authorized to use the forklift.", priority: 'High', riskLevel: 'High', proof: 'Certification Record', location: 'Supervisor Office' },
                    { id: 'FORK-004', description: "Adhere to speed limits and use the horn at blind corners.", priority: 'High', riskLevel: 'Medium', proof: 'Observation', location: 'Plant-wide' },
                    { id: 'FORK-005', description: "Ensure loads are stable, within capacity, and do not obstruct the operator's view.", priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Plant-wide' }
                ]
            },
            {
                title: "🧪 Hazardous Material Handling & Storage",
                department: "EHS",
                frequency: "Weekly",
                role: "EHS Officer",
                summary: "Ensures that all hazardous chemicals are stored and handled in compliance with safety regulations to prevent spills, fires, and exposure.",
                tasks: [
                    { id: 'HAZMAT-001', description: "Verify all hazardous materials are stored in designated, well-ventilated areas.", priority: 'High', riskLevel: 'High', proof: 'Storage Area Inspection', location: 'Chemical Store' },
                    { id: 'HAZMAT-002', description: "Ensure all containers are properly labeled with chemical name and hazard warnings.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Chemical Store' },
                    { id: 'HAZMAT-003', description: "Check that Safety Data Sheets (SDS) are available for all hazardous chemicals on site.", priority: 'High', riskLevel: 'High', proof: 'SDS Binder Check', location: 'Supervisor Office' },
                    { id: 'HAZMAT-004', description: "Inspect for and clean up any leaks or spills immediately.", priority: 'High', riskLevel: 'High', proof: 'Inspection Log', location: 'Chemical Store' },
                    { id: 'HAZMAT-005', description: "Ensure spill kits and emergency eyewash/shower stations are accessible and functional.", priority: 'High', riskLevel: 'High', proof: 'Weekly Test Log', location: 'Near Chemical Store' }
                ]
            },
            {
                title: "📦 Raw Material Quality Control",
                department: "Quality Control",
                frequency: "Per Delivery",
                role: "QC Inspector",
                summary: "A checklist for inspecting incoming raw materials to ensure they meet specifications before they enter the production process.",
                tasks: [
                    { id: 'RMQC-001', description: "Verify material certificates from the supplier against required specifications.", priority: 'High', riskLevel: 'High', proof: 'Certificate Review', location: 'Receiving Area' },
                    { id: 'RMQC-002', description: "Take a sample of the material for laboratory testing if required.", priority: 'High', riskLevel: 'High', proof: 'Sample Log', location: 'Receiving Area' },
                    { id: 'RMQC-003', description: "Visually inspect the material for any defects, damage, or contamination.", priority: 'High', riskLevel: 'Medium', proof: 'Inspection Report', location: 'Receiving Area' },
                    { id: 'RMQC-004', description: "Quarantine any non-conforming material and raise a non-conformance report (NCR).", priority: 'High', riskLevel: 'High', proof: 'NCR Form', location: 'Quarantine Area' },
                    { id: 'RMQC-005', description: "Release approved materials to the main store with proper identification.", priority: 'High', riskLevel: 'Medium', proof: 'Release Note', location: 'Receiving Area' }
                ]
            },
            {
                title: "🏭 5S Housekeeping Audit",
                department: "Operations",
                frequency: "Weekly",
                role: "Supervisor",
                summary: "A lean manufacturing tool to maintain a clean and organized workplace, focusing on Sort, Set in Order, Shine, Standardize, and Sustain.",
                tasks: [
                    { id: '5S-001', description: "(Sort) Identify and remove unnecessary items from the work area.", priority: 'Medium', riskLevel: 'Low', proof: 'Photo before/after', location: 'Workstation' },
                    { id: '5S-002', description: "(Set in Order) Arrange all necessary items so they can be easily selected for use.", priority: 'Medium', riskLevel: 'Low', proof: 'Visual Check', location: 'Workstation' },
                    { id: '5S-003', description: "(Shine) Clean the work area, tools, and equipment.", priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Workstation' },
                    { id: '5S-004', description: "(Standardize) Ensure standardized procedures and work instructions are being followed.", priority: 'High', riskLevel: 'Medium', proof: 'Process Audit', location: 'Workstation' },
                    { id: '5S-005', description: "(Sustain) Review previous audit findings and ensure improvements have been sustained.", priority: 'High', riskLevel: 'Medium', proof: 'Audit Review', location: 'Workstation' }
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
    badgeText?: string;
    sampleItems: string[];
    checklists: Checklist[];
    previewScenario?: PreviewScenario;
};
