
import { allPacks } from "./packs/all_packs";

export type Checklist = {
    title: string;
    department: string;
    frequency: string;
    role: string;
    summary: string;
    icon: string;
    tasks: {
        id: string;
        description?: string;      // Legacy support
        technicalProtocol?: string; // The "Audit" Language
        floorAction?: string;       // The "Trainer's Notes" Language
        priority: 'High' | 'Medium' | 'Low';
        riskLevel: 'High' | 'Medium' | 'Low';
        consequence: string;
        proof: string;
        trainerNotes?: string; 
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
    anchorPriceINR?: number;
    priceUSD?: number;
    anchorPriceUSD?: number;
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
    ...allPacks.map(p => {
        // Apply Elite 7 Pricing Logic - ₹999 Buy / ₹1,999 Grade
        const eliteIds = [
            'restaurants', 'hotels_and_resorts', 'healthcare_and_hospital_operations', 
            'school_operations_pack', 'franchise_operations_pack', 
            'facility_management_blueprint', 'cinema_operations_pack'
        ];
        if (eliteIds.includes(p.id)) {
            return {
                ...p,
                priceINR: 999,
                anchorPriceINR: 1999,
                priceUSD: 12,
                anchorPriceUSD: 25
            }
        }
        return p;
    }),
];
