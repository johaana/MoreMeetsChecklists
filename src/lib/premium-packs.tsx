import { Briefcase, Building, Leaf, Star } from "lucide-react";

export const premiumPacks = [
    {
        title: "The Ultimate Wedding Planner Pack",
        price: "49.99",
        description: "Comprehensive checklists for every wedding event imaginable, from engagement to honeymoon.",
        features: [
            "Engagement Party Checklist",
            "Bridal Shower Checklist",
            "Bachelor/Bachelorette Party Checklist",
            "Detailed Haldi, Mehndi, and Sangeet Checklists",
            "Full Wedding Day Coordination Checklist",
            "Honeymoon Packing Checklist",
        ],
        icon: <Star className="w-8 h-8 text-accent" />,
        color: "border-accent/20"
    },
    {
        title: "Hospitality Excellence Suite",
        price: "79.99",
        description: "Master hotel and restaurant operations with checklists for every department and scenario.",
        features: [
            "Front Desk Operations",
            "Concierge Services",
            "Event Banquet Setup & Teardown",
            "Kitchen Deep Cleaning Schedule",
            "Monthly Maintenance Checks",
            "Guest Complaint Resolution Protocol",
        ],
        icon: <Building className="w-8 h-8 text-accent" />,
        color: "border-accent/20"
    },
    {
        title: "Corporate & Startup Launchkit",
        price: "39.99",
        description: "From product launches to office openings, ensure every corporate event is a success.",
        features: [
            "New Office Opening Checklist",
            "Annual General Meeting (AGM) Plan",
            "Corporate Retreat Planning",
            "Investor Pitch Prep Checklist",
            "Product Launch Marketing Plan",
            "Press Conference Checklist",
        ],
        icon: <Briefcase className="w-8 h-8 text-accent" />,
        color: "border-accent/20"
    },
    {
        title: "Sustainability Starter Kit",
        price: "29.99",
        description: "Implement green practices in your home or office with these easy-to-follow checklists.",
        features: [
            "Home Energy Audit",
            "Office Recycling Program",
            "Sustainable Commuting Plan",
            "Waste Reduction Challenge",
            "Green Cleaning Checklist",
            "Community Garden Planner",
        ],
        icon: <Leaf className="w-8 h-8 text-accent" />,
        color: "border-accent/20"
    }
];

export type PremiumPack = typeof premiumPacks[0];
