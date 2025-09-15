
import { Briefcase, Building, Leaf, Star, Heart } from "lucide-react";

export const premiumPacks = [
    {
        title: "The Ultimate Wedding Planner Pack",
        price_usd: "24.99",
        price_inr: "1999",
        description: "The complete one-time purchase for planning a multi-day wedding. Unlocks our entire suite of detailed checklists for every ceremony, from Haldi to Reception.",
        features: [
            "Comprehensive checklists for all major wedding ceremonies.",
            "Detailed vendor management and timeline tracking.",
            "Guest list and seating arrangement templates.",
            "Budgeting and payment tracking tools.",
            "One-time purchase, lifetime access.",
        ],
        icon: <Heart className="w-8 h-8 text-pink-500" />,
        color: "border-pink-500/50",
        relatedFreeTemplates: ["Wedding Haldi Ceremony", "Wedding Mehndi Ceremony"]
    },
    {
        title: "Hospitality Excellence Suite",
        price_usd: "49.99",
        price_inr: "3999",
        description: "A one-time purchase for the complete operational toolkit for hotel and restaurant managers. Unlocks all checklists for daily, weekly, and monthly operations, plus compliance.",
        features: [
            "Flawless Hotel Room Cleaning (Daily, Weekly, Monthly).",
            "Comprehensive Restaurant Opening & Closing Checklists.",
            "Kitchen Hygiene & Food Safety Audits.",
            "New Staff Onboarding & Training Protocols for Hospitality.",
            "One-time purchase, lifetime access.",
        ],
        icon: <Building className="w-8 h-8 text-sky-500" />,
        color: "border-sky-500/50",
        relatedFreeTemplates: ["Hotel Daily Housekeeping", "Restaurant Daily Opening"]
    },
    {
        title: "Corporate & Startup Launchkit",
        price_usd: "24.99",
        price_inr: "1999",
        description: "A one-time purchase to execute flawless corporate events and streamlined startup launches. This pack is designed for founders and event managers.",
        features: [
            "New Office Setup & Inauguration.",
            "AGM & Investor Pitch Prep checklists.",
            "Product Launch Event Marketing timelines.",
            "Press Conference Coordination guides.",
            "One-time purchase, lifetime access.",
        ],
        icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
        color: "border-indigo-500/50",
        relatedFreeTemplates: ["Startup Launch Party"]
    },
    {
        title: "Sustainability Starter Kit",
        price_usd: "19.99",
        price_inr: "1599",
        description: "A one-time purchase for the eco-conscious business. Turn green intentions into measurable action with these simple, effective checklists.",
        features: [
            "Office & Hotel Energy Audits.",
            "Waste Reduction & Recycling Programs.",
            "Sustainable Commuting Plans for your team.",
            "Eco-Friendly Event Planning guide.",
            "One-time purchase, lifetime access.",
        ],
        icon: <Leaf className="w-8 h-8 text-green-500" />,
        color: "border-green-500/50",
        relatedFreeTemplates: ["Hotel Energy Efficiency"]
    }
];

export type PremiumPack = typeof premiumPacks[0];
