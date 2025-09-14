import { Star, Zap, Leaf } from "lucide-react";

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
        icon: <Star className="w-8 h-8 text-yellow-500" />,
        color: "bg-yellow-500/10 border-yellow-500/20"
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
        icon: <Zap className="w-8 h-8 text-blue-500" />,
        color: "bg-blue-500/10 border-blue-500/20"
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
        icon: <Star className="w-8 h-8 text-purple-500" />,
        color: "bg-purple-500/10 border-purple-500/20"
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
        icon: <Leaf className="w-8 h-8 text-green-500" />,
        color: "bg-green-500/10 border-green-500/20"
    }
];

export type PremiumPack = typeof premiumPacks[0];
