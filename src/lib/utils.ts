import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Checklist } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export type GroupedChecklists = {
  [category: string]: {
    [subcategory: string]: Checklist[];
  };
};

export function groupByCategoryAndSubcategory(checklists: Checklist[]): GroupedChecklists {
  return checklists.reduce((acc, checklist) => {
    const { category, subcategory } = checklist;
    if (!acc[category]) {
      acc[category] = {};
    }
    if (!acc[category][subcategory]) {
      acc[category][subcategory] = [];
    }
    acc[category][subcategory].push(checklist);
    return acc;
  }, {} as GroupedChecklists);
}
