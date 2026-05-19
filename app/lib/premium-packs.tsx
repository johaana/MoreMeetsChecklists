import { allPacks } from "./packs/all_packs";

export type ChecklistTask = {
    id: string;
    description?: string;      
    technicalProtocol?: string; 
    floorAction?: string;       
    priority: 'High' | 'Medium' | 'Low';
    riskLevel: 'High' | 'Medium' | 'Low';
    consequence: string;
    proof: string;
    trainerNotes?: string; 
    location?: string;
    department?: string;
    role?: string;
    frequency?: string;
    verificationRequired?: boolean; 
    cadence?: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'incident-based';
};

export type Checklist = {
    title: string;
    department: string;
    frequency: string;
    role: string;
    summary: string;
    icon: string;
    moduleId?: string;
    moduleType?: 'CORE' | 'OPTIONAL';
    tasks: ChecklistTask[];
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
    shortDescription?: string;
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
        let processedPack = { ...p };
        processedPack.title = processedPack.title.replace('Operating System', 'Operations System');
        
        if ((processedPack.priceINR ?? 0) > 0 || (processedPack.priceUSD ?? 0) > 0) {
            processedPack = {
                ...processedPack,
                priceINR: 3499,
                anchorPriceINR: undefined,
                priceUSD: 49,
                anchorPriceUSD: undefined,
                competitorPriceUSD: 599
            }
        }
        return processedPack;
    }),
];
