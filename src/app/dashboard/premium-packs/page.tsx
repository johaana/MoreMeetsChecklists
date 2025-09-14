import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";

const premiumPacks = [
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
        icon: <Star className="w-8 h-8 text-accent" />
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
        icon: <Zap className="w-8 h-8 text-accent" />
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
        icon: <Star className="w-8 h-8 text-accent" />
    }
];

export default function PremiumPacksPage() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">Premium Checklist Packs</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Upgrade your planning with our expertly crafted, comprehensive checklist packs designed for professionals.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {premiumPacks.map((pack) => (
                    <Card key={pack.title} className="flex flex-col">
                        <CardHeader className="items-center">
                            {pack.icon}
                            <CardTitle className="text-xl text-center">{pack.title}</CardTitle>
                             <p className="text-4xl font-bold">${pack.price}</p>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col">
                            <CardDescription className="text-center mb-6">{pack.description}</CardDescription>
                            <ul className="space-y-3 text-sm flex-1">
                                {pack.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className="w-4 h-4 mr-2 mt-1 shrink-0 text-green-500" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <Button className="w-full">Purchase Pack</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
