import { Briefcase, Building, Leaf, Star } from "lucide-react";

export const premiumPacks = [
    {
        title: "The Ultimate Wedding Planner Pack",
        price: "29.99",
        description: "For the professional planner or the hands-on couple, this pack ensures no detail is missed. Go from 'Yes!' to 'I Do' to the perfect honeymoon with confidence and complete organization.",
        features: [
            "Engagement Party Planning: Kick off the celebration flawlessly.",
            "Bridal Shower & Bachelorette Checklists: Plan memorable pre-wedding events with ease.",
            "Detailed Haldi, Mehndi & Sangeet Coordination: Master the intricacies of traditional ceremonies.",
            "Full Wedding Day Coordination: A minute-by-minute guide for a stress-free wedding day.",
            "Honeymoon Packing & Booking: Ensure a perfect post-wedding getaway.",
        ],
        icon: <Star className="w-8 h-8 text-accent" />,
        color: "border-accent",
        relatedFreeTemplates: ["Wedding Reception", "Destination Wedding Planning"]
    },
    {
        title: "Hospitality Excellence Suite",
        price: "49.99",
        description: "The complete operational toolkit for hotel and restaurant managers. Standardize procedures, improve guest satisfaction, and ensure 5-star quality across every department.",
        features: [
            "Flawless Hotel Housekeeping & Front Desk Operations.",
            "Restaurant Opening, Closing, and Hygiene Audits.",
            "New Staff Onboarding & Training Protocols.",
            "Efficient Banquet Event Setup & Teardown.",
            "Guest Complaint Resolution Protocol.",
        ],
        icon: <Building className="w-8 h-8 text-accent" />,
        color: "border-accent",
        relatedFreeTemplates: ["Hotel Daily Housekeeping", "Restaurant Daily Opening"]
    },
    {
        title: "Corporate & Startup Launchkit",
        price: "24.99",
        description: "Execute flawless corporate events and streamlined startup launches. This pack is designed for founders and event managers who need to project professionalism and precision.",
        features: [
            "New Office Setup & Inauguration.",
            "AGM & Investor Pitch Prep checklists.",
            "Product Launch Event Marketing timelines.",
            "Press Conference Coordination guides.",
            "Corporate Retreat & Team Offsite Planning templates.",
        ],
        icon: <Briefcase className="w-8 h-8 text-accent" />,
        color: "border-accent",
        relatedFreeTemplates: ["Startup Launch Party"]
    },
    {
        title: "Sustainability Starter Kit",
        price: "19.99",
        description: "For the eco-conscious business or individual. Turn green intentions into measurable action with these simple, effective checklists for waste reduction, energy efficiency, and more.",
        features: [
            "Office & Hotel Energy Audits.",
            "Waste Reduction & Recycling Programs.",
            "Sustainable Commuting Plans for your team.",
            "Eco-Friendly Event Planning guide.",
            "Community Green Initiative Planner.",
        ],
        icon: <Leaf className="w-8 h-8 text-accent" />,
        color: "border-accent",
        relatedFreeTemplates: ["Hotel Energy Efficiency"]
    }
];

export type PremiumPack = typeof premiumPacks[0];
