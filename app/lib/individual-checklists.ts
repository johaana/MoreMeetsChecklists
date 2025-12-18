
import React from "react";
import type { Checklist } from "@/lib/premium-packs";
import { LucideIcon } from "lucide-react";

export type IndividualChecklist = {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    priceINR: number;
    priceUSD: number;
    paymentId: string;
    lemonSqueezyUrl: string;
    category: "Hospitality" | "Corporate & Tech" | "Retail" | "Healthcare" | "Education" | "Industrial & Transport" | "Entertainment & Events" | "Social Cause";
    icon: LucideIcon;
    badgeText?: string;
    badgeVariant?: "default" | "secondary" | "destructive" | "outline" | "accent";
    tasks: Checklist['tasks'];
}

export const individualChecklists: IndividualChecklist[] = [];
