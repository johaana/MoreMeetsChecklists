
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

const shortDescriptions: Record<string, string> = {
    'restaurants': "Stop revenue leakage and food safety risks. 150+ technical control points for multi-unit kitchen and floor command.",
    'hotels_and_resorts': "Eliminate guest safety gaps and reputation damage. 250+ control points across Front Office, Housekeeping, and Engineering.",
    'healthcare_and_hospital_operations': "Zero-risk clinical governance. 200+ NABH/JCI aligned control points from surgical safety to narcotics control.",
    'school_operations_pack': "Prevent campus tragedies and admin chaos. Transport safety, playground risk, and student welfare protocols.",
    'franchise_operations_pack': "Scale your brand without losing control. Standardize every outlet with royalty protection and brand parity audits.",
    'facility_management_blueprint': "Stop catastrophic utility failures. Hard and Soft FM engine for MEP, fire safety, and vendor SLA command.",
    'cinema_operations_pack': "Technical excellence for cinema groups. Projection QC, concession yield logic, and auditorium hygiene standards.",
    'logistics_warehouse_pack': "Stop inventory shrinkage and fatal safety gaps. 120+ protocols for MHE safety and stock integrity.",
    'corporate_legal_compliance_starter_kit': "Stop boardroom liability and statutory leaks. Track mandatory filings without SaaS dependency.",
    'food_manufacturing_ops': "Prevent mass recalls. HACCP/FSSAI engine for production integrity and traceability.",
    'jewelry_and_luxury_retail': "Stop sophisticated heists and 'swap' thefts. Dual-verification vault control and asset protection.",
    'animal_shelter_pack': "NGO-grade welfare and disease prevention. Comprehensive intake, medical, and adoption protocols."
};

export const premiumPacks: PremiumPack[] = [
    ...allPacks.map(p => {
        // Apply Sovereign Pricing Logic - ₹2,999 Buy / ₹4,999 Institutional
        const eliteIds = [
            'restaurants', 'hotels_and_resorts', 'healthcare_and_hospital_operations', 
            'school_operations_pack', 'franchise_operations_pack', 
            'facility_management_blueprint', 'cinema_operations_pack'
        ];
        
        let processedPack = { ...p };
        
        if (eliteIds.includes(p.id)) {
            processedPack = {
                ...processedPack,
                priceINR: 2999,
                anchorPriceINR: 4999,
                priceUSD: 29,
                anchorPriceUSD: 49
            }
        } else {
            // Default pricing for non-elite if not set
            processedPack.priceINR = processedPack.priceINR || 1999;
            processedPack.anchorPriceINR = processedPack.anchorPriceINR || 2999;
        }

        if (shortDescriptions[p.id]) {
            processedPack.shortDescription = shortDescriptions[p.id];
        }

        return processedPack;
    }),
];
