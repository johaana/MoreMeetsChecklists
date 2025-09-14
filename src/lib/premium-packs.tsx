
import { Briefcase, Building, Leaf, Star } from "lucide-react";

export const premiumPacks = [
    {
        title: "Hospitality Excellence Suite",
        price: "49.99",
        description: "The complete operational toolkit for hotel and restaurant managers. Standardize procedures, improve guest satisfaction, and ensure 5-star quality across every department.",
        features: [
            "Flawless Hotel Room Cleaning (Daily, Weekly, Monthly).",
            "Comprehensive Restaurant Opening & Closing Checklists.",
            "Kitchen Hygiene & Food Safety Audits.",
            "New Staff Onboarding & Training Protocols for Hospitality.",
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
        description: "For the eco-conscious business. Turn green intentions into measurable action with these simple, effective checklists for waste reduction, energy efficiency, and more.",
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
