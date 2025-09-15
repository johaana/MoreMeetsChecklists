
import { Briefcase, Building, Leaf, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const premiumPacks = [
    {
        title: "The Ultimate Wedding Planner Pack",
        price_usd: "USD $24.99",
        price_inr: "INR ₹1999",
        description: "The complete one-time purchase for planning a multi-day wedding. Unlocks our entire suite of detailed checklists for every ceremony, from Haldi to Reception.",
        sampleItems: [
            "Mehndi: Book artist and confirm designs.",
            "Sangeet: Arrange for professional stage lighting and sound.",
            "South Indian Wedding: Coordinate 'Kashi Yatra' items (umbrella, walking stick).",
            "Sikh Wedding: Organize head coverings for all guests at the Gurdwara.",
            "Destination Wedding: Manage celebrity arrivals and red carpet logistics.",
        ],
        icon: <Heart className="w-8 h-8 text-primary" />,
        color: "border-pink-500/50",
    },
    {
        title: "Hospitality Excellence Suite",
        price_usd: "USD $49.99",
        price_inr: "INR ₹3999",
        description: "For Hotel & Restaurant Managers. A one-time purchase for the complete operational toolkit. Unlocks all checklists for daily, weekly, and monthly operations, plus compliance.",
        sampleItems: [
            "Daily Housekeeping: Replenish all toiletries in guest rooms.",
            "Restaurant Opening: Brief staff on daily specials and 86'd items.",
            "Restaurant Closing: Deep clean all kitchen surfaces and equipment.",
            "Catering Event: Conduct a site visit to plan setup for catering event.",
            "Staff Onboarding: Train new staff on Property Management System (PMS).",
        ],
        icon: <Building className="w-8 h-8 text-primary" />,
        color: "border-blue-500/50",
    },
    {
        title: "Corporate & Startup Launchkit",
        price_usd: "USD $24.99",
        price_inr: "INR ₹1999",
        description: "For Founders & Event Managers. A one-time purchase to execute flawless corporate events and streamlined startup launches. Stay organized and professional.",
        sampleItems: [
            "Product Launch: Finalize product messaging and USP for launch.",
            "Awards Night: Procure trophies and certificates.",
            "Major Award Show: Manage celebrity arrivals and red carpet logistics.",
            "Startup Party: Set a budget and guest list for launch party.",
        ],
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        color: "border-indigo-500/50",
    },
    {
        title: "Sustainability Starter Kit",
        price_usd: "USD $19.99",
        price_inr: "INR ₹1599",
        description: "For Eco-conscious Businesses. A one-time purchase to turn green intentions into measurable action. Implement and track sustainability goals with simple checklists.",
        sampleItems: [
            "Weekly energy audit of all departments.",
            "Verify that all lighting is high-efficiency (LED).",
            "Audit single-use plastic usage in rooms and restaurants.",
            "Ensure recycling and composting bins are correctly used.",
        ],
        icon: <Leaf className="w-8 h-8 text-primary" />,
        color: "border-green-500/50",
    }
];

export type PremiumPack = typeof premiumPacks[0];
