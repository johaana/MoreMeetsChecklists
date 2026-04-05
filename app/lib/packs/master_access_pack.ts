
import type { PremiumPack } from "@/lib/premium-packs";
import { allPacks } from "./all_packs";

// This pack is a special administrative tool.
// It is not displayed on the public library and has no price.
// It's used on the password-protected /master-access page.
export const master_access_pack: PremiumPack = {
    id: 'master_access',
    title: "Master Access: All-in-One Operations Toolkit",
    priceINR: 0,
    paymentId: '',
    lemonSqueezyUrl: '',
    category: "Master Access",
    description: "Internal tool for accessing all packs.",
    icon: "library",
    whoIsItFor: ["Admin"],
    sampleItems: [],
    checklists: allPacks.flatMap(pack => {
        if (pack.id === 'master_access') return [];
        return pack.checklists.map(checklist => ({
            ...checklist,
            tasks: checklist.tasks.map(task => ({
                ...task,
                department: task.department || checklist.department,
                role: task.role || checklist.role,
                frequency: task.frequency || checklist.frequency,
                technicalProtocol: task.technicalProtocol || task.description || "",
                floorAction: task.floorAction || task.trainerNotes || ""
            }))
        }))
    }),
};
