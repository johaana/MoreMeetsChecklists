
import type { PremiumPack } from "@/lib/premium-packs";

export const sports_clubs_stadium_operations_pack: PremiumPack = {
    id: 'sports_clubs_stadium_operations_pack',
    title: "Sports Clubs & Stadium Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f290d8a5-d913-485e-9905-59b922a01490',
    category: "Entertainment & Events",
    description: "A comprehensive operational toolkit for sports clubs, gyms, and stadium managers to ensure safety, compliance, and an excellent member experience.",
    icon: "trophy",
    whoIsItFor: ["Sports Club GMs", "Stadium Managers", "Heads of Operations", "Gym Owners"],
    sampleItems: [
        { text: "Ensure venue safety with crowd management, ticketing, and emergency evacuation SOPs.", icon: "users" },
        { text: "Maintain world-class turf and pitches with a structured ground maintenance schedule.", icon: "sprout" },
        { text: "Prevent accidents and misuse with daily inspections of gym and sports equipment.", icon: "dumbbell" },
        { text: "Guarantee a safe environment with fire safety audits and medical emergency response plans.", icon: "siren" },
        { text: "Protect members with robust hygiene protocols for pools, changing rooms, and F&B areas.", icon: "sparkles" },
        { text: "Manage your team effectively with checklists for staff training, scheduling, and performance.", icon: "clipboard-list" }
    ],
     checklists: [
       {
            title: "Venue Safety with crowd management",
            department: "Test",
            frequency: "Test",
            role: "Test",
            summary: "Test",
            icon: "users",
            tasks: [
          {id: 'sports_clubs_stadium_operations_pack-1', description: 'desc1', priority: 'High', riskLevel: 'High', consequence: 'cons1', proof: 'proof1'},
          {id: 'sports_clubs_stadium_operations_pack-2', description: 'desc2', priority: 'High', riskLevel: 'High', consequence: 'cons2', proof: 'proof2'}
            ]
        }
    ]
};

  