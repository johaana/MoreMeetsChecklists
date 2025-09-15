
import { Briefcase, Building, Leaf, Heart } from "lucide-react";

export const premiumPacks = [
    {
        title: "The Ultimate Wedding Planner Pack",
        price_usd: "$24.99",
        price_inr: "₹1999",
        description: "For wedding planners & families. The complete one-time purchase for planning a multi-day wedding. Unlocks our entire suite of detailed checklists for every ceremony, from Haldi to Reception, ensuring no detail is missed.",
        sampleItems: [
            "Book mehndi artist and confirm designs",
            "Arrange for professional stage lighting and sound for Sangeet",
            "Coordinate 'Kashi Yatra' items (umbrella, walking stick)",
            "Organize head coverings for all guests at the Gurdwara",
            "Manage celebrity arrivals and red carpet logistics",
        ],
        icon: <Heart className="w-8 h-8 text-pink-500" />,
        color: "border-pink-500/50",
    },
    {
        title: "Hospitality Excellence Suite",
        price_usd: "$49.99",
        price_inr: "₹3999",
        description: "For Hotel & Restaurant Managers. A one-time purchase for the complete operational toolkit. Unlocks all checklists for daily, weekly, and monthly operations, plus compliance, ensuring a consistent 5-star experience.",
        sampleItems: [
            "Replenish all toiletries (soap, shampoo, etc.) in guest rooms",
            "Brief front-of-house staff on daily specials and 86'd items",
            "Deep clean all kitchen surfaces and equipment",
            "Conduct a site visit to plan setup for catering event",
            "Train new staff on Property Management System (PMS)",
        ],
        icon: <Building className="w-8 h-8 text-blue-500" />,
        color: "border-blue-500/50",
    },
    {
        title: "Corporate & Startup Launchkit",
        price_usd: "$24.99",
        price_inr: "₹1999",
        description: "For Founders & Event Managers. A one-time purchase to execute flawless corporate events and streamlined startup launches. Stay organized and professional while you focus on growth.",
        sampleItems: [
            "Finalize product messaging and USP for launch",
            "Procure trophies and certificates for awards night",
            "Manage celebrity arrivals and red carpet logistics for major awards",
            "Set a budget and guest list for startup launch party",
        ],
        icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
        color: "border-indigo-500/50",
    },
    {
        title: "Sustainability Starter Kit",
        price_usd: "$19.99",
        price_inr: "₹1599",
        description: "For Eco-conscious Businesses. A one-time purchase to turn green intentions into measurable action. Implement and track sustainability goals with simple, effective checklists.",
        sampleItems: [
            "Conduct weekly energy audit of all departments",
            "Verify that all lighting is high-efficiency (LED)",
            "Audit single-use plastic usage in rooms and restaurants",
            "Ensure recycling and composting bins are correctly used",
        ],
        icon: <Leaf className="w-8 h-8 text-green-500" />,
        color: "border-green-500/50",
    }
];

export type PremiumPack = typeof premiumPacks[0];
