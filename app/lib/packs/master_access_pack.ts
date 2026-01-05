
import type { PremiumPack } from "@/lib/premium-packs";
import { allPacks } from "./all_packs";

export const master_access_pack: PremiumPack = {
    id: 'master_access',
    title: "Master Access: All-in-One Operations Toolkit",
    priceINR: 29999,
    priceUSD: 399,
    competitorPriceUSD: 2999,
    paymentId: 'pl_RaWPoGkH6vA8wS',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f528d9c2-5e6a-4d7a-b73a-4537b01d1c95',
    category: "Master Access",
    description: "Get lifetime access to every current and future checklist pack in the MoreMeets library. The ultimate toolkit for enterprise-level compliance and operational excellence.",
    icon: "library",
    badgeText: "Best Value",
    badgeVariant: "accent",
    whoIsItFor: ["COOs", "VPs of Operations", "Enterprise Leaders", "Consultants", "Serial Entrepreneurs"],
    sampleItems: [
        { text: "Gain access to all 20+ industry packs, covering hospitality, retail, manufacturing, healthcare, and more.", icon: "zap" },
        { text: "Receive every future checklist pack we release, automatically and for free.", icon: "trending-up" },
        { text: "Standardize operations across a diverse portfolio of businesses with a single, unified system.", icon: "briefcase-business" },
        { text: "A one-time purchase for a lifetime of operational knowledge and compliance.", icon: "shield-check" }
    ],
    checklists: allPacks.flatMap(pack => {
        if (pack.id === 'master_access' || pack.id === 'animal_shelter_pack') return [];
        return pack.checklists.map(checklist => ({
            ...checklist,
            tasks: checklist.tasks.map(task => ({
                ...task,
                department: checklist.department,
                role: checklist.role,
                frequency: checklist.frequency
            }))
        }))
    }),
};

  
