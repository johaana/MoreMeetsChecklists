
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Checklist } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export type GroupedChecklists = {
  [category: string]: Checklist[];
};

export function groupByCategory(checklists: Checklist[]): GroupedChecklists {
  return checklists.reduce((acc, checklist) => {
    const { category } = checklist;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(checklist);
    return acc;
  }, {} as GroupedChecklists);
}
