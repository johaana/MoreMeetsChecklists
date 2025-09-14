import { Briefcase, Building, Leaf, Star } from "lucide-react";

export const premiumPacks = [
    {
        title: "The Ultimate Wedding Planner Pack",
        price: "49.99",
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
        relatedFreeTemplates: ["Wedding Reception (Sample)", "Naming Ceremony"]
    },
    {
        title: "Hospitality Excellence Suite",
        price: "79.99",
        description: "The complete operational toolkit for hotel and restaurant managers. Standardize procedures, improve guest satisfaction, and ensure 5-star quality across every department.",
        features: [
            "Flawless Front Desk Operations: Standardize guest greetings, check-ins, and inquiries.",
            "5-Star Concierge Services: Checklists for managing guest requests and local bookings.",
            "Efficient Banquet Event Setup & Teardown: For seamless weddings, conferences, and events.",
            "Kitchen Deep Cleaning & Hygiene Audits: Maintain impeccable standards of cleanliness.",
            "Guest Complaint Resolution Protocol: Turn negative experiences into positive reviews.",
        ],
        icon: <Building className="w-8 h-8 text-accent" />,
        color: "border-accent",
        relatedFreeTemplates: ["Daily Opening Checklist", "Daily Closing Checklist"]
    },
    {
        title: "Corporate & Startup Launchkit",
        price: "39.99",
        description: "Execute flawless corporate events and streamlined startup launches. This pack is designed for founders and event managers who need to project professionalism and precision.",
        features: [
            "New Office Setup & Inauguration: From infrastructure to launch party, get it done right.",
            "AGM & Investor Pitch Prep: Impress stakeholders with meticulous planning.",
            "Product Launch Event Marketing: A complete timeline of marketing and PR tasks.",
            "Press Conference Coordination: Manage media and messaging like a pro.",
            "Corporate Retreat & Team Offsite Planning: Foster team spirit with perfectly planned events.",
        ],
        icon: <Briefcase className="w-8 h-8 text-accent" />,
        color: "border-accent",
        relatedFreeTemplates: ["Product Launch", "Conference"]
    },
    {
        title: "Sustainability Starter Kit",
        price: "29.99",
        description: "For the eco-conscious business or individual. Turn green intentions into measurable action with these simple, effective checklists for waste reduction, energy efficiency, and more.",
        features: [
            "Office & Hotel Energy Audit: Simple steps to reduce consumption and save money.",
            "Waste Reduction & Recycling Program: Implement a comprehensive waste management system.",
            "Sustainable Commuting Plan: Encourage greener transport options for your team.",
            "Eco-Friendly Event Planning: Reduce the environmental impact of your events.",
            "Community Green Initiative Planner: Organize local clean-up drives or tree planting events.",
        ],
        icon: <Leaf className="w-8 h-8 text-accent" />,
        color: "border-accent",
        relatedFreeTemplates: ["Energy Efficiency", "Eco-Friendly Events"]
    }
];

export type PremiumPack = typeof premiumPacks[0];