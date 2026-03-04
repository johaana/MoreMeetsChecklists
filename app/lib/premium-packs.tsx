
import { allPacks } from "./packs/all_packs";
import { master_access_pack } from "./packs/master_access_pack";

export type Checklist = {
    title: string;
    department: string;
    frequency: string;
    role: string;
    summary: string;
    icon: string;
    tasks: {
        id: string;
        description: string;
        priority: 'High' | 'Medium' | 'Low';
        riskLevel: 'High' | 'Medium' | 'Low';
        consequence: string;
        proof: string;
        location?: string;
        department?: string;
        role?: string;
        frequency?: string;
    }[];
};

export type PremiumPack = {
    id: string;
    title: string;
    priceINR: number;
    priceUSD?: number;
    competitorPriceUSD?: number;
    paymentId: string;
    lemonSqueezyUrl?: string;
    listId?: number; 
    updatedAt?: string;
    category: "Hospitality" | "Corporate & Tech" | "Retail" | "Healthcare" | "Education" | "Industrial & Transport" | "Entertainment & Events" | "Social Cause" | "Real Estate" | "Compliance" | "Wellness & Beauty" | "Agriculture" | "Specialized Production" | "Food & Beverage" | "Franchise" | "Master Access";
    description: string;
    heroHeadline?: string;
    heroSubheadline?: string;
    pricingUrgency?: string;
    consultingAnchor?: number;
    icon: string;
    badgeText?: string;
    badgeVariant?: "default" | "secondary" | "destructive" | "outline" | "accent";
    sampleItems: { text: string; icon: string; }[];
    whoIsItFor: string[];
    checklists: Checklist[];
    globalStandards?: {
        title: string;
        standards: { name: string; description: string; }[];
    };
    bestseller?: boolean;
}

export const premiumPacks: PremiumPack[] = [
    ...allPacks,
    master_access_pack,
];
