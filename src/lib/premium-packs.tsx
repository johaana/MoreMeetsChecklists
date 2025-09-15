import { Briefcase, Building, Leaf, Heart, ShieldCheck, Settings, Plane, Star } from "lucide-react";

export const premiumPacks = [
    {
        id: 'wedding_bliss_planner',
        title: "The Ultimate Wedding Planner",
        priceUSD: 24.99,
        priceINR: 1999,
        category: "Wedding",
        description: "The one-time purchase for planning a multi-day wedding, from pre-wedding rituals to the final reception.",
        icon: <Heart className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Haldi & Mehndi Ceremony Coordination",
            "Sangeet Night Choreography & AV",
            "Vendor Booking & Management",
            "Guest Hospitality & Logistics",
        ],
        checklists: [
            { "title": "Haldi Setup", "tasks": ["Venue decor", "Flowers", "Music", "Dress code", "Catering for snacks"] },
            { "title": "Mehndi Function", "tasks": ["Artist booking", "Stage setup", "Snacks & Drinks", "DJ & Music", "Guest favors"] },
            { "title": "Sangeet Night", "tasks": ["Choreographer coordination", "Lighting & special effects", "Speeches & toasts schedule", "Rehearsal dinner", "AV check"] },
            { "title": "Wedding Ceremony", "tasks": ["Mandap decor", "Puja samagri checklist", "Guest seating chart", "Photography shot list", "Varmala exchange coordination"] },
            { "title": "Reception", "tasks": ["Cake cutting ceremony", "Couple's grand entry", "Buffet layout and management", "Live band or DJ performance", "Guest book and photo booth"] }
        ]
    },
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
            "Daily Room Cleaning SOPs",
            "Restaurant Opening/Closing",
            "Weekly Kitchen Deep Clean",
            "Monthly Staff Training Schedules",
        ],
        checklists: [
            { "title": "Hotel Daily Room Cleaning", "tasks": ["Replace towels & linens", "Restock all toiletries", "Sanitize bathroom surfaces", "Vacuum carpets & mop floors", "Check and restock minibar"] },
            { "title": "Restaurant Opening", "tasks": ["Turn on lights & music", "Set and polish tables", "Check cutlery & crockery inventory", "Stock bar and kitchen stations", "Test POS system and printers"] },
            { "title": "Weekly Kitchen Deep Clean", "tasks": ["Clean exhaust hoods and filters", "Degrease all cooking equipment", "Sanitize walk-in coolers and freezers", "Pest control inspection", "Sharpen knives"] },
            { "title": "Monthly Staff Training", "tasks": ["Fire safety and evacuation drill", "Customer service workshop", "Upselling techniques training", "Food safety and handling review", "Complaint resolution practice"] },
            { "title": "Front Desk Operations", "tasks": ["Check reservation system for special requests", "Prepare check-in/check-out documents", "Audit cash and credit card transactions", "Brief team on VIP arrivals", "Handle guest complaints log"] }
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
            "Annual General Meeting (AGM) Prep",
            "New Staff Onboarding Process",
            "Conference & Awards Night Schedule",
        ],
        checklists: [
            { "title": "Product Launch Event", "tasks": ["Venue booking & AV setup", "Press release and media invites", "Stage branding and banners", "Product demo units preparation", "PR agency coordination"] },
            { "title": "Annual General Meeting (AGM)", "tasks": ["Send notices to shareholders", "Prepare annual reports", "Arrange for proxy voting", "Venue and seating arrangement", "Record meeting minutes"] },
            { "title": "Staff Onboarding", "tasks": ["Prepare offer letter and documents", "Set up workstation and accounts", "Assign a buddy/mentor", "Company policy and culture briefing", "Initial 30-day goal setting"] },
            { "title": "Conference Planning", "tasks": ["Finalize speaker list and bios", "Projectors, mics, and screens check", "Registration desk setup and staffing", "Delegate kits (notepads, pens)", "Coordinate lunch and coffee breaks"] },
            { "title": "Awards Night", "tasks": ["Procure trophies and certificates", "Finalize award categories and nominees", "Guest speaker confirmation", "Red carpet and photo wall setup", "Post-event press release"] }
        ]
    },
    {
        id: 'sustainability_starter_kit',
        title: "Sustainability Starter Kit",
        priceUSD: 19.99,
        priceINR: 1599,
        category: "Sustainability",
        description: "For Eco-conscious Businesses. Turn green intentions into measurable action and track sustainability goals.",
        icon: <Leaf className="w-8 h-8 text-primary" />,
        mostPopular: false,
        sampleItems: [
            "Weekly Energy & Water Audits",
            "Waste Management & Reduction",
            "Plastic Usage Reduction Plan",
            "Green Supply Chain Verification",
        ],
        checklists: [
            { "title": "Weekly Energy Audit", "tasks": ["Check for energy-efficient lighting (LEDs)", "Ensure all idle equipment is switched off", "Monitor HVAC temperature settings", "Read and log meter readings", "Identify energy leakage points"] },
            { "title": "Waste Management Audit", "tasks": ["Check segregation of waste (wet, dry, recyclable)", "Ensure recycling bins are correctly used", "Monitor daily food waste (restaurants)", "Implement a composting plan for organic waste", "Track reduction in landfill waste"] },
            { "title": "Water Conservation", "tasks": ["Check for leaking taps and pipes", "Install water-saving aerators", "Monitor daily water consumption", "Use collected rainwater for gardening", "Educate staff on water-saving practices"] },
            { "title": "Plastic Reduction", "tasks": ["Audit single-use plastic usage", "Replace plastic cutlery with reusable options", "Source suppliers with plastic-free packaging", "Introduce water refill stations", "Eliminate plastic water bottles"] },
            { "title": "Green Supply Chain", "tasks": ["Verify suppliers' eco-friendly certifications", "Prioritize local and seasonal produce", "Assess supplier packaging and transport emissions", "Establish a sustainable procurement policy", "Review supplier performance quarterly"] }
        ]
    }
];

export type PremiumPack = typeof premiumPacks[0];
