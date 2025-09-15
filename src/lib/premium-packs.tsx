
import { Briefcase, Building, Leaf, Heart } from "lucide-react";

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
            "Venue & Vendor Coordination",
            "Detailed Guest Management",
            "Multi-Day Event Scheduling",
            "Budget & Payment Tracking",
        ],
        checklists: [
            { 
                "title": "Initial Planning & Budgeting (12-18 Months Out)", 
                "tasks": [
                    "Define wedding vision and theme", 
                    "Set a realistic budget and track expenses", 
                    "Create a guest list estimate",
                    "Select wedding date and two alternative dates",
                    "Research and book wedding planner",
                    "Explore and book ceremony and reception venues",
                    "Purchase wedding insurance"
                ] 
            },
            { 
                "title": "Vendor Booking & Contracts (8-12 Months Out)", 
                "tasks": [
                    "Book photographer and videographer", 
                    "Hire caterer and finalize menu tasting",
                    "Book DJ/band and other entertainment",
                    "Select and order wedding cake",
                    "Hire florist and discuss floral designs",
                    "Book officiant",
                    "Arrange transportation for guests and wedding party"
                ] 
            },
            { 
                "title": "Pre-Wedding Events & Attire (6-8 Months Out)", 
                "tasks": [
                    "Plan and book venues for Haldi, Mehndi, Sangeet",
                    "Shop for and order wedding dress/attire",
                    "Select and order bridesmaids' and groomsmen's outfits",
                    "Send out Save-the-Dates",
                    "Create wedding website with event details",
                    "Book hair and makeup artists and schedule trials"
                ] 
            },
            { 
                "title": "Final Details & Logistics (2-4 Months Out)", 
                "tasks": [
                    "Send out official invitations",
                    "Finalize guest list and track RSVPs",
                    "Finalize seating chart",
                    "Purchase wedding rings",
                    "Apply for marriage license",
                    "Finalize timeline for all wedding events",
                    "Confirm all vendor bookings and timings"
                ] 
            },
            { 
                "title": "Wedding Week & Day-Of Coordination", 
                "tasks": [
                    "Prepare welcome baskets for out-of-town guests",
                    "Confirm final payments to all vendors",
                    "Assign roles for wedding party members",
                    "Conduct final venue walk-through",
                    "Pack for honeymoon",
                    "Prepare an emergency kit (sewing kit, first aid, etc.)",
                    "Ensure all decor and props are at the venue"
                ] 
            }
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
            "Daily Front & Back of House SOPs",
            "Weekly Maintenance Schedules",
            "Monthly Audits & Staff Training",
            "Guest Experience Enhancement",
        ],
        checklists: [
            { 
                "title": "Daily Hotel Front Office", 
                "tasks": [
                    "Review shift handover logs", 
                    "Check VIP arrivals and special requests", 
                    "Audit nightly revenue and occupancy reports", 
                    "Ensure lobby and common areas are pristine",
                    "Manage check-ins/check-outs efficiently",
                    "Respond to guest reviews from previous day"
                ] 
            },
            { 
                "title": "Daily Housekeeping", 
                "tasks": [
                    "Assign rooms and tasks to staff",
                    "Inspect a percentage of cleaned rooms",
                    "Check and restock linen and supply closets",
                    "Report any maintenance issues immediately",
                    "Manage laundry operations flow",
                    "Ensure public areas are cleaned on schedule"
                ] 
            },
            { 
                "title": "Weekly Restaurant Operations", 
                "tasks": [
                    "Conduct full inventory of stock (food, beverages, supplies)",
                    "Deep clean kitchen equipment and floors",
                    "Review and update staff rotas",
                    "Hold a weekly team meeting to discuss performance",
                    "Analyze sales data and top-performing dishes",
                    "Check compliance with food safety standards (HACCP)"
                ] 
            },
            { 
                "title": "Monthly Hotel Maintenance & Audit", 
                "tasks": [
                    "Perform preventive maintenance on HVAC and plumbing systems",
                    "Conduct a fire safety and equipment check",
                    "Audit petty cash and financial records",
                    "Review supplier contracts and pricing",
                    "Run staff training on new procedures or customer service",
                    "Analyze guest feedback and create action plans"
                ] 
            },
            {
                "title": "Guest Experience & Quality",
                "tasks": [
                    "Review guest feedback from all channels (surveys, online reviews)",
                    "Personalize stays for repeat guests or special occasions",
                    "Train staff on complaint handling and resolution",
                    "Mystery shopper audit to assess service quality",
                    "Update in-room information and amenities",
                    "Check and maintain loyalty program benefits"
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
                    "Define launch goals and KPIs", 
                    "Set budget for venue, marketing, and PR",
                    "Select and book venue with appropriate AV capabilities",
                    "Draft and distribute press releases and media kits",
                    "Develop a social media campaign strategy",
                    "Prepare product demonstration scripts and materials",
                    "Coordinate with speakers and presenters"
                ] 
            },
            { 
                "title": "New Employee Onboarding", 
                "tasks": [
                    "Send welcome email with first-day information",
                    "Prepare offer letter, contract, and HR paperwork",
                    "Set up workstation, laptop, and required software accounts",
                    "Schedule orientation sessions (HR, IT, department overview)",
                    "Assign a buddy or mentor for the first few weeks",
                    "Outline 30-60-90 day goals and expectations"
                ] 
            },
            { 
                "title": "Annual General Meeting (AGM) Prep", 
                "tasks": [
                    "Send formal notice to all shareholders and board members",
                    "Prepare and distribute the annual report",
                    "Finalize the agenda and order of proceedings",
                    "Arrange for proxy voting and tabulation",
                    "Book venue and arrange for catering and AV",
                    "Prepare scripts for key speakers (CEO, CFO)",
                    "Ensure minutes are recorded accurately"
                ] 
            },
            {
                "title": "Trade Show & Conference Participation",
                "tasks": [
                    "Register for the event and book booth space",
                    "Design and produce booth graphics and materials",
                    "Plan and order promotional giveaways",
                    "Train staff on key talking points and lead capture",
                    "Schedule meetings with key prospects and partners in advance",
                    "Arrange logistics for booth setup and takedown"
                ]
            }
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
            "Comprehensive Energy & Water Audits",
            "Sustainable Waste Management",
            "Green Procurement & Supply Chain",
            "Employee Engagement Programs",
        ],
        checklists: [
            { 
                "title": "Monthly Energy Audit", 
                "tasks": [
                    "Log electricity and gas meter readings", 
                    "Identify and quantify sources of energy waste",
                    "Ensure all lighting is energy-efficient (LED)",
                    "Check HVAC systems for optimal performance and scheduling",
                    "Promote a 'switch off' campaign among staff",
                    "Evaluate feasibility of renewable energy sources"
                ] 
            },
            { 
                "title": "Waste Management & Reduction", 
                "tasks": [
                    "Conduct a waste audit to identify main waste streams",
                    "Ensure clear labeling for recycling, compost, and general waste bins",
                    "Set up a program to compost food scraps",
                    "Implement a 'zero single-use plastic' policy in the office",
                    "Track waste-to-landfill reduction percentage",
                    "Partner with certified recycling and waste management services"
                ] 
            },
            { 
                "title": "Water Conservation Program", 
                "tasks": [
                    "Install low-flow aerators on all taps and showers",
                    "Regularly check for and repair any water leaks",
                    "Monitor water meter readings to track consumption",
                    "Use drought-resistant plants for landscaping",
                    "Implement rainwater harvesting for non-potable uses",
                    "Educate staff on water-saving practices"
                ] 
            },
            { 
                "title": "Green Procurement Policy", 
                "tasks": [
                    "Create a policy to prioritize sustainable and local suppliers",
                    "Verify eco-certifications of suppliers (e.g., Fair Trade, FSC)",
                    "Request suppliers to minimize packaging",
                    "Choose products made from recycled materials",
                    "Audit supplier compliance with sustainability standards",
                    "Favor renting or leasing equipment over purchasing"
                ] 
            }
        ]
    }
];

export type PremiumPack = typeof premiumPacks[0];

    