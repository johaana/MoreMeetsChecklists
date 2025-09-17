

import { Briefcase, Building, Leaf, Heart, School, Shield, Warehouse, Trophy, Factory, Cross, Home, GraduationCap, Truck, Gem, Plane, Utensils, Waves, ShoppingCart, PawPrint, PersonStanding, Dumbbell, Wrench, Building2, Phone, TestTube, Shirt, Ear, TreePalm } from "lucide-react";

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
            "Over 50+ Checklists for every department.",
            "Covers Housekeeping, F&B, Maintenance, Security & more.",
            "Daily, Weekly, and Monthly SOPs.",
            "Guest Experience & Safety Protocols."
        ],
        checklists: [
            {
                "title": "🧹 Daily Room Cleaning Checklist",
                "department": "Housekeeping",
                "frequency": "Daily",
                "role": "Housekeeper"
            },
            {
                "title": "🛌 Turn-down Service Checklist",
                "department": "Housekeeping",
                "frequency": "Daily",
                "role": "Housekeeper"
            },
            {
                "title": "🧺 Laundry Operations Checklist",
                "department": "Housekeeping",
                "frequency": "Daily",
                "role": "Laundry Attendant"
            },
            {
                "title": "🧾 Linen Room Management Checklist",
                "department": "Housekeeping",
                "frequency": "Daily",
                "role": "Linen Keeper"
            },
            {
                "title": "🧼 Public Area Cleaning Checklist",
                "department": "Housekeeping",
                "frequency": "Daily",
                "role": "Public Area Attendant"
            },
            {
                "title": "✨ Deep Cleaning Checklist",
                "department": "Housekeeping",
                "frequency": "Weekly",
                "role": "Housekeeping Supervisor"
            },
            {
                "title": "🐜 Pest Control Checklist",
                "department": "Maintenance",
                "frequency": "Daily",
                "role": "Maintenance Supervisor"
            },
            {
                "title": "📦 Lost & Found Documentation Checklist",
                "department": "Security",
                "frequency": "As-Needed",
                "role": "Security Officer"
            },
            {
                "title": "🛎️ Reception Daily Operations Checklist",
                "department": "Front Office",
                "frequency": "Daily",
                "role": "Front Desk Agent"
            },
            {
                "title": "🔑 Guest Check-In Process Checklist",
                "department": "Front Office",
                "frequency": "As-Needed",
                "role": "Front Desk Agent"
            },
            {
                "title": "💳 Guest Check-Out Process Checklist",
                "department": "Front Office",
                "frequency": "As-Needed",
                "role": "Front Desk Agent"
            },
            {
                "title": "🗣️ Complaint Resolution Process Checklist",
                "department": "Front Office",
                "frequency": "As-Needed",
                "role": "Duty Manager"
            },
            {
                "title": "🍽️ Restaurant Opening Checklist",
                "department": "F&B",
                "frequency": "Daily",
                "role": "Restaurant Manager"
            },
            {
                "title": "🔒 Restaurant Closing Checklist",
                "department": "F&B",
                "frequency": "Daily",
                "role": "Restaurant Manager"
            },
            {
                "title": "🥘 Buffet Service Setup Checklist",
                "department": "F&B",
                "frequency": "Daily",
                "role": "F&B Supervisor"
            },
            {
                "title": "🍸 Bar Opening Checklist",
                "department": "F&B",
                "frequency": "Daily",
                "role": "Bartender"
            },
            {
                "title": "🍾 Bar Closing Checklist",
                "department": "F&B",
                "frequency": "Daily",
                "role": "Bartender"
            },
            {
                "title": "🏨 Room Service Delivery Checklist",
                "department": "F&B",
                "frequency": "As-Needed",
                "role": "Room Service Waiter"
            },
            {
                "title": "🎉 Banquet Hall Preparation Checklist",
                "department": "F&B",
                "frequency": "As-Needed",
                "role": "Banquet Manager"
            },
            {
                "title": "🔪 Kitchen Hygiene & Food Safety Checklist",
                "department": "F&B",
                "frequency": "Daily",
                "role": "Head Chef"
            },
            {
                "title": "📈 Inventory & Stock Check Checklist",
                "department": "Finance",
                "frequency": "Daily",
                "role": "Store Keeper"
            },
            {
                "title": "🛠️ Daily Maintenance Rounds Checklist",
                "department": "Maintenance",
                "frequency": "Daily",
                "role": "Technician"
            },
            {
                "title": "⚡ Electrical Systems Inspection Checklist",
                "department": "Maintenance",
                "frequency": "Weekly",
                "role": "Electrician"
            },
            {
                "title": "💧 Plumbing & Water Systems Checklist",
                "department": "Maintenance",
                "frequency": "Weekly",
                "role": "Plumber"
            },
            {
                "title": "💨 HVAC & AC Systems Checklist",
                "department": "Maintenance",
                "frequency": "Monthly",
                "role": "HVAC Technician"
            },
            {
                "title": "↕️ Elevator & Escalator Safety Checklist",
                "department": "Maintenance",
                "frequency": "Daily",
                "role": "Maintenance Supervisor"
            },
            {
                "title": "🏊 Swimming Pool Maintenance Checklist",
                "department": "Maintenance",
                "frequency": "Daily",
                "role": "Pool Technician"
            },
            {
                "title": "🌳 Landscaping & Outdoor Areas Checklist",
                "department": "Maintenance",
                "frequency": "Daily",
                "role": "Gardener"
            },
            {
                "title": "📹 CCTV & Security Monitoring Checklist",
                "department": "Security",
                "frequency": "Daily",
                "role": "Security Officer"
            },
            {
                "title": "🔥 Fire Safety Checklist",
                "department": "Security",
                "frequency": "Weekly",
                "role": "Security Supervisor"
            },
            {
                "title": "🚗 Parking & Valet Operations Checklist",
                "department": "Security",
                "frequency": "Daily",
                "role": "Valet Supervisor"
            },
            {
                "title": "⚠️ Emergency Preparedness Checklist",
                "department": "Security",
                "frequency": "Monthly",
                "role": "Security Supervisor"
            },
            {
                "title": "🌙 Night Security Patrol Checklist",
                "department": "Security",
                "frequency": "Daily",
                "role": "Security Officer"
            },
            {
                "title": "🧖‍♀️ Spa Daily Operations Checklist",
                "department": "Wellness",
                "frequency": "Daily",
                "role": "Spa Manager"
            },
            {
                "title": "🏋️ Gym & Fitness Center Checklist",
                "department": "Wellness",
                "frequency": "Daily",
                "role": "Gym Manager"
            },
            {
                "title": "🎟️ Concierge Desk Checklist",
                "department": "Front Office",
                "frequency": "Daily",
                "role": "Concierge"
            },
            {
                "title": "👶 Kids Club / Play Area Checklist",
                "department": "Wellness",
                "frequency": "Daily",
                "role": "Kids Club Supervisor"
            },
            {
                "title": "⭐ Guest Feedback & Experience Checklist",
                "department": "Management",
                "frequency": "Daily",
                "role": "Duty Manager"
            },
            {
                "title": "🧾 Night Audit Checklist",
                "department": "Finance",
                "frequency": "Daily",
                "role": "Night Auditor"
            },
            {
                "title": "📦 Procurement Checklist",
                "department": "Finance",
                "frequency": "Daily",
                "role": "Procurement Officer"
            },
            {
                "title": "🛒 Vendor Management Checklist",
                "department": "Finance",
                "frequency": "Weekly",
                "role": "Procurement Manager"
            },
            {
                "title": "📊 Payroll Processing Checklist",
                "department": "Finance",
                "frequency": "Monthly",
                "role": "HR Manager"
            },
            {
                "title": "🗂️ Inventory Control Checklist",
                "department": "Finance",
                "frequency": "Daily",
                "role": "Store Keeper"
            },
            {
                "title": "🧮 Accounts Payable Checklist",
                "department": "Finance",
                "frequency": "Daily",
                "role": "Accountant"
            },
            {
                "title": "💵 Cash Handling Checklist",
                "department": "Finance",
                "frequency": "Daily",
                "role": "Cashier"
            },
            {
                "title": "🌆 Rooftop / Terrace Restaurant Checklist",
                "department": "F&B",
                "frequency": "Daily",
                "role": "Restaurant Manager"
            },
            {
                "title": "🖥️ Business Center Checklist",
                "department": "Front Office",
                "frequency": "Daily",
                "role": "Front Desk Agent"
            },
            {
                "title": "🎤 Conference & Banquet Hall Checklist",
                "department": "F&B",
                "frequency": "As-Needed",
                "role": "Banquet Manager"
            },
            {
                "title": "🏭 Laundry Plant Checklist",
                "department": "Housekeeping",
                "frequency": "Daily",
                "role": "Laundry Supervisor"
            },
            {
                "title": "🍴 Staff Canteen Checklist",
                "department": "HR",
                "frequency": "Daily",
                "role": "Admin Manager"
            },
            {
                "title": "🎮 Kids Play Area / Kids Club Checklist",
                "department": "Wellness",
                "frequency": "Daily",
                "role": "Kids Club Supervisor"
            },
            {
                "title": "🚗 Valet Parking Checklist",
                "department": "Security",
                "frequency": "Daily",
                "role": "Valet Supervisor"
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
                "title": "Daily Workplace Readiness",
                "department": "Admin",
                "frequency": "Daily",
                "role": "Facility Manager"
            },
            {
                "title": "Weekly Maintenance & Safety Audit",
                "department": "Maintenance",
                "frequency": "Weekly",
                "role": "Facility Manager"
            },
            {
                "title": "Monthly Vendor & Compliance Review",
                "department": "Admin",
                "frequency": "Monthly",
                "role": "Facility Manager"
            },
            {
                "title": "Admin & Employee Services",
                "department": "Admin",
                "frequency": "As-Needed",
                "role": "Admin Executive"
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
                "title": "Kitchen Opening Checklist (HACCP Focus)",
                "department": "F&B",
                "frequency": "Daily",
                "role": "Head Chef"
            },
            {
                "title": "Food Receiving & Storage Protocol",
                "department": "F&B",
                "frequency": "Daily",
                "role": "Store Keeper"
            },
            {
                "title": "Daily HACCP & Line Check",
                "department": "F&B",
                "frequency": "Daily",
                "role": "Sous Chef"
            },
            {
                "title": "Kitchen Closing & Cleaning Checklist",
                "department": "F&B",
                "frequency": "Daily",
                "role": "Closing Chef"
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
                "title": "Daily Pool & Recreational Area Safety",
                "department": "Maintenance",
                "frequency": "Daily",
                "role": "Pool Technician"
            },
            {
                "title": "Weekly Grounds & Landscaping Maintenance",
                "department": "Maintenance",
                "frequency": "Weekly",
                "role": "Gardener"
            },
            {
                "title": "Daily Spa Operations Checklist",
                "department": "Wellness",
                "frequency": "Daily",
                "role": "Spa Manager"
            },
            {
                "title": "Guest Activity Planning & Execution",
                "department": "Front Office",
                "frequency": "Daily",
                "role": "Activity Coordinator"
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
                "department": "Security",
                "frequency": "Daily",
                "role": "Store Manager"
            },
            {
                "title": "Daily Closing Procedure (Dual Control)",
                "department": "Security",
                "frequency": "Daily",
                "role": "Store Manager"
            },
            {
                "title": "Ongoing Security & Sales Floor Protocol",
                "department": "Sales",
                "frequency": "Daily",
                "role": "Sales Associate"
            },
            {
                "title": "Weekly Security & Maintenance Audit",
                "department": "Security",
                "frequency": "Weekly",
                "role": "Store Manager"
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
                "title": "Daily Opening & Compliance Check",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Pharmacist"
            },
            {
                "title": "Prescription Filling & Verification (The 'Five Rights')",
                "department": "Operations",
                "frequency": "As-Needed",
                "role": "Pharmacist"
            },
            {
                "title": "Inventory & Controlled Substances (Zero-Error Protocol)",
                "department": "Inventory",
                "frequency": "Daily",
                "role": "Pharmacist"
            },
            {
                "title": "Closing Procedures & Data Security",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Pharmacist"
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
                "title": "Patient Admission & Discharge",
                "department": "Admissions",
                "frequency": "As-Needed",
                "role": "Admissions Officer"
            },
            {
                "title": "Surgical Suite / Operating Theatre (OT) Readiness",
                "department": "Surgery",
                "frequency": "Daily",
                "role": "OT Nurse"
            },
            {
                "title": "Emergency Room (ER) Management",
                "department": "Emergency",
                "frequency": "Daily",
                "role": "ER Manager"
            },
            {
                "title": "Infection Control & Compliance",
                "department": "Compliance",
                "frequency": "Daily",
                "role": "Infection Control Nurse"
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
                "title": "Daily Opening & Patient Readiness",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Clinic Manager"
            },
            {
                "title": "Patient Flow & Experience",
                "department": "Front Office",
                "frequency": "Daily",
                "role": "Receptionist"
            },
            {
                "title": "Clinical Safety & Sterilization",
                "department": "Clinical",
                "frequency": "Daily",
                "role": "Nurse"
            },
            {
                "title": "Billing & Administration",
                "department": "Finance",
                "frequency": "Daily",
                "role": "Billing Executive"
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
                "title": "Morning Setup & Calibration (Zero-Error Start)",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Lab Technician"
            },
            {
                "title": "Sample Management & Processing (Patient Safety First)",
                "department": "Operations",
                "frequency": "As-Needed",
                "role": "Lab Technician"
            },
            {
                "title": "Data, Reporting & Critical Value Communication",
                "department": "Reporting",
                "frequency": "Daily",
                "role": "Senior Technician"
            },
            {
                "title": "End of Day & Biohazard Management",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Lab Supervisor"
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
                "department": "Operations",
                "frequency": "Daily",
                "role": "Gym Manager"
            },
            {
                "title": "Member Management & Customer Experience",
                "department": "Sales",
                "frequency": "Daily",
                "role": "Sales Associate"
            },
            {
                "title": "Class & Staff Management",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Gym Manager"
            },
            {
                "title": "Closing Procedures & Security",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Closing Staff"
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
                "department": "Operations",
                "frequency": "Daily",
                "role": "Salon Manager"
            },
            {
                "title": "Client Experience & Service",
                "department": "Customer Service",
                "frequency": "Daily",
                "role": "Stylist"
            },
            {
                "title": "Inventory & Retail Management",
                "department": "Inventory",
                "frequency": "Weekly",
                "role": "Salon Manager"
            },
            {
                "title": "Closing & End-of-Day Tasks",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Closing Staff"
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
                "department": "Security",
                "frequency": "Daily",
                "role": "Security Supervisor"
            },
            {
                "title": "Classroom & Common Area Safety",
                "department": "Admin",
                "frequency": "Daily",
                "role": "Admin Officer"
            },
            {
                "title": "Student Dismissal & Lost-and-Found Protocol",
                "department": "Admin",
                "frequency": "Daily",
                "role": "Teacher"
            },
            {
                "title": "Monthly Emergency Preparedness & Drills",
                "department": "Security",
                "frequency": "Monthly",
                "role": "Principal"
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
                "title": "Morning Opening & Freshness Check",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Store Manager"
            },
            {
                "title": "Receiving & Cold Chain Integrity",
                "department": "Inventory",
                "frequency": "Daily",
                "role": "Receiving Clerk"
            },
            {
                "title": "During the Day: Floor Operations & Customer Service",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Floor Manager"
            },
            {
                "title": "Closing & Financial Reconciliation",
                "department": "Finance",
                "frequency": "Daily",
                "role": "Closing Manager"
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
                "title": "Daily Opening & Merchandising",
                "department": "Sales",
                "frequency": "Daily",
                "role": "Store Manager"
            },
            {
                "title": "Fitting Room, Customer Service & Loss Prevention",
                "department": "Sales",
                "frequency": "Daily",
                "role": "Sales Associate"
            },
            {
                "title": "New Stock & Inventory Management",
                "department": "Inventory",
                "frequency": "Weekly",
                "role": "Store Manager"
            },
            {
                "title": "Closing & Daily Reporting",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Closing Staff"
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
                "title": "Daily Opening & Merchandising",
                "department": "Sales",
                "frequency": "Daily",
                "role": "Store Manager"
            },
            {
                "title": "Sales Floor & Customer Experience",
                "department": "Sales",
                "frequency": "Daily",
                "role": "Sales Associate"
            },
            {
                "title": "Inventory & High-Value Security Protocol",
                "department": "Security",
                "frequency": "Weekly",
                "role": "Store Manager"
            },
            {
                "title": "Staff & Training Drills",
                "department": "HR",
                "frequency": "Weekly",
                "role": "Store Manager"
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
                "department": "Production",
                "frequency": "Daily",
                "role": "Shift Supervisor"
            },
            {
                "title": "Joint Handover Meeting (5-10 mins)",
                "department": "Production",
                "frequency": "Daily",
                "role": "Shift Supervisor"
            },
            {
                "title": "Incoming Shift: Start-up Procedures (First 15 mins)",
                "department": "Production",
                "frequency": "Daily",
                "role": "Shift Supervisor"
            },
            {
                "title": "Weekly Safety & Audit Drill",
                "department": "Safety",
                "frequency": "Weekly",
                "role": "Safety Officer"
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
                "department": "Sales",
                "frequency": "As-Needed",
                "role": "Sales Manager"
            },
            {
                "title": "Pre-Event Coordination (T-30 Days)",
                "department": "Operations",
                "frequency": "Monthly",
                "role": "Event Coordinator"
            },
            {
                "title": "Event Day Execution",
                "department": "Operations",
                "frequency": "As-Needed",
                "role": "Venue Manager"
            },
            {
                "title": "Post-Event Wrap-Up & Settlement",
                "department": "Finance",
                "frequency": "As-Needed",
                "role": "Accounts Manager"
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
                "title": "Daily Opening Safety Inspection",
                "department": "Safety",
                "frequency": "Daily",
                "role": "Supervisor"
            },
            {
                "title": "During-Session Operations & Supervision",
                "department": "Operations",
                "frequency": "Hourly",
                "role": "Staff"
            },
            {
                "title": "Closing & Deep Cleaning",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Closing Staff"
            },
            {
                "title": "Weekly Maintenance & Emergency Drills",
                "department": "Maintenance",
                "frequency": "Weekly",
                "role": "Supervisor"
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
                "department": "Events",
                "frequency": "As-Needed",
                "role": "Event Planner"
            },
            {
                "title": "Mehndi Ceremony Checklist",
                "department": "Events",
                "frequency": "As-Needed",
                "role": "Event Planner"
            },
            {
                "title": "Wedding Day: Baraat, Varmala & Mandap",
                "department": "Events",
                "frequency": "As-Needed",
                "role": "Event Planner"
            },
            {
                "title": "Post-Wedding: Reception & Vidaai",
                "department": "Events",
                "frequency": "As-Needed",
                "role": "Event Planner"
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
                "department": "Events",
                "frequency": "As-Needed",
                "role": "Event Planner"
            },
            {
                "title": "Post-Nikah & Rukhsati",
                "department": "Events",
                "frequency": "As-Needed",
                "role": "Event Planner"
            },
            {
                "title": "Walima (Groom's Reception) Planning",
                "department": "Events",
                "frequency": "As-Needed",
                "role": "Event Planner"
            },
            {
                "title": "General Vendor & Guest Management",
                "department": "Admin",
                "frequency": "As-Needed",
                "role": "Event Planner"
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
                "title": "Vehicle Check-In & Service Advising",
                "department": "Customer Service",
                "frequency": "As-Needed",
                "role": "Service Advisor"
            },
            {
                "title": "Diagnosis, Quoting & Work Order",
                "department": "Operations",
                "frequency": "As-Needed",
                "role": "Service Advisor"
            },
            {
                "title": "Repair & Quality Control",
                "department": "Operations",
                "frequency": "As-Needed",
                "role": "Technician"
            },
            {
                "title": "Billing & Vehicle Handover Experience",
                "department": "Customer Service",
                "frequency": "As-Needed",
                "role": "Service Advisor"
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
                "title": "Daily Opening & Security Protocol",
                "department": "Security",
                "frequency": "Daily",
                "role": "Security Supervisor"
            },
            {
                "title": "Ongoing Operations & Housekeeping",
                "department": "Operations",
                "frequency": "Hourly",
                "role": "Duty Manager"
            },
            {
                "title": "Daily Closing Protocol",
                "department": "Security",
                "frequency": "Daily",
                "role": "Closing Manager"
            },
            {
                "title": "Weekly Maintenance & Tenant Relations",
                "department": "Admin",
                "frequency": "Weekly",
                "role": "Mall Manager"
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
                "department": "Operations",
                "frequency": "Daily",
                "role": "Team Lead"
            },
            {
                "title": "Live Operations & Quality Assurance (QA)",
                "department": "QA",
                "frequency": "Daily",
                "role": "QA Analyst"
            },
            {
                "title": "Agent Performance & Coaching",
                "department": "Operations",
                "frequency": "Weekly",
                "role": "Team Lead"
            },
            {
                "title": "End-of-Shift & Reporting",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Team Lead"
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
                "title": "Pre-Opening Safety Inspection",
                "department": "Safety",
                "frequency": "Daily",
                "role": "Head Lifeguard"
            },
            {
                "title": "Ongoing Operational Safety",
                "department": "Operations",
                "frequency": "Hourly",
                "role": "Lifeguard Supervisor"
            },
            {
                "title": "Closing Procedures",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Closing Manager"
            },
            {
                "title": "Weekly & Monthly Checks",
                "department": "Maintenance",
                "frequency": "Weekly",
                "role": "Facility Manager"
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
                "title": "Pre-Guest Arrival / New Tenant Move-In",
                "department": "Operations",
                "frequency": "As-Needed",
                "role": "Host"
            },
            {
                "title": "Guest Check-Out / Tenant Move-Out",
                "department": "Operations",
                "frequency": "As-Needed",
                "role": "Host"
            },
            {
                "title": "Routine Maintenance & Compliance",
                "department": "Maintenance",
                "frequency": "Monthly",
                "role": "Host"
            },
            {
                "title": "Guest Communication & Experience",
                "department": "Customer Service",
                "frequency": "Daily",
                "role": "Host"
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
                "title": "Morning Showroom & Lot Preparation",
                "department": "Sales",
                "frequency": "Daily",
                "role": "Sales Manager"
            },
            {
                "title": "Sales & Customer Interaction Process",
                "department": "Sales",
                "frequency": "Daily",
                "role": "Sales Associate"
            },
            {
                "title": "Vehicle Handover & Delivery Experience",
                "department": "Customer Service",
                "frequency": "As-Needed",
                "role": "Sales Associate"
            },
            {
                "title": "End of Day & Reporting",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Sales Manager"
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
                "department": "Marketing",
                "frequency": "As-Needed",
                "role": "Event Manager"
            },
            {
                "title": "New Employee Onboarding (First Week)",
                "department": "HR",
                "frequency": "As-Needed",
                "role": "HR Manager"
            },
            {
                "title": "Annual General Meeting (AGM) Preparation",
                "department": "Admin",
                "frequency": "Annually",
                "role": "Corporate Secretary"
            },
            {
                "title": "Trade Show & Conference Participation",
                "department": "Marketing",
                "frequency": "As-Needed",
                "role": "Marketing Manager"
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
                "department": "Compliance",
                "frequency": "Quarterly",
                "role": "ESG Officer"
            },
            {
                "title": "Social Metrics Data Gathering",
                "department": "HR",
                "frequency": "Quarterly",
                "role": "HR Manager"
            },
            {
                "title": "Governance Policy & Verification",
                "department": "Legal",
                "frequency": "Annually",
                "role": "General Counsel"
            },
            {
                "title": "Reporting & Stakeholder Engagement",
                "department": "Investor Relations",
                "frequency": "Annually",
                "role": "IR Manager"
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
                "department": "QA",
                "frequency": "Monthly",
                "role": "Document Controller"
            },
            {
                "title": "Management & Leadership",
                "department": "Management",
                "frequency": "Quarterly",
                "role": "Quality Manager"
            },
            {
                "title": "Product Realization & Service Delivery",
                "department": "Operations",
                "frequency": "Weekly",
                "role": "Operations Manager"
            },
            {
                "title": "Measurement, Analysis, and Improvement",
                "department": "QA",
                "frequency": "Monthly",
                "role": "Quality Manager"
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
                "department": "Admin",
                "frequency": "Monthly",
                "role": "Facility Manager"
            },
            {
                "title": "Energy Conservation",
                "department": "Admin",
                "frequency": "Monthly",
                "role": "Facility Manager"
            },
            {
                "title": "Water Conservation",
                "department": "Admin",
                "frequency": "Monthly",
                "role": "Facility Manager"
            },
            {
                "title": "Sustainable Procurement & Employee Engagement",
                "department": "HR",
                "frequency": "Quarterly",
                "role": "HR Manager"
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
                "title": "Aggregator Setup & Menu Engineering",
                "department": "Sales",
                "frequency": "As-Needed",
                "role": "Kitchen Manager"
            },
            {
                "title": "Packaging & Dispatch Station Setup",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Kitchen Manager"
            },
            {
                "title": "Live Operations & Order Fulfillment (KOT to Handoff)",
                "department": "Operations",
                "frequency": "Daily",
                "role": "Expo"
            },
            {
                "title": "End-of-Day Reconciliation & Analysis",
                "department": "Finance",
                "frequency": "Daily",
                "role": "Kitchen Manager"
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
                "department": "Planning",
                "frequency": "One-Time",
                "role": "Traveler"
            },
            {
                "title": "Phase 2: Health & Finance (1-2 Months Out)",
                "department": "Planning",
                "frequency": "One-Time",
                "role": "Traveler"
            },
            {
                "title": "Phase 3: Packing & Preparation (1 Week Out)",
                "department": "Packing",
                "frequency": "One-Time",
                "role": "Traveler"
            },
            {
                "title": "Phase 4: Final 24 Hours",
                "department": "Final Checks",
                "frequency": "One-Time",
                "role": "Traveler"
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
                "department": "Planning",
                "frequency": "One-Time",
                "role": "Pet Owner"
            },
            {
                "title": "Booking & Packing",
                "department": "Planning",
                "frequency": "One-Time",
                "role": "Pet Owner"
            },
            {
                "title": "The Day Before Travel",
                "department": "Preparation",
                "frequency": "One-Time",
                "role": "Pet Owner"
            },
            {
                "title": "Travel Day & Arrival",
                "department": "Travel",
                "frequency": "One-Time",
                "role": "Pet Owner"
            }
        ]
    }
];

export type PremiumPack = typeof premiumPacks[0];

  

    

    








    


    

    

    






    

    

