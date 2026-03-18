
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the professional plug for your operational leaks.",
    heroHeadline: "Eliminate Guest Safety Gaps and Viral Reputation Damage",
    heroSubheadline: "Track daily housekeeping, monitor maintenance, and stay in control of guest safety—even when you’re not on property.",
    pricingUrgency: "One safety incident or a single negative viral review costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "building",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["General Managers", "Hotel Owners", "Heads of Housekeeping", "Chief Engineers", "Security Directors"],
    sampleItems: [
        { text: "<strong>2-Minute Daily Pulse</strong>: Your team updates housekeeping and safety status in seconds. 100% staff adoption.", icon: "timer" },
        { text: "<strong>Live Operational Visibility</strong>: See property readiness and maintenance status instantly from your phone.", icon: "zap" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show managers exactly what needs sign-off—from fire safety to pool hygiene.", icon: "shield-check" },
        { text: "<strong>Empire Mood Engine</strong>: Drive team behavior with live recognition, streaks, and healthy competition between shifts.", icon: "trophy" },
        { text: "<strong>Institutional Memory</strong>: New hires learn directly from the system's built-in instructions. Knowledge stays with the property.", icon: "history" },
        { text: "<strong>Revenue Protection</strong>: Stop the profit bleed caused by inconsistent standards and maintenance downtime.", icon: "banknote" },
        { text: "<strong>Multi-Property Switchboard</strong>: Manage multiple properties or blocks from one master file. Toggle facilities ON/OFF.", icon: "layout-grid" }
    ],
    checklists: [
        {
            title: "Daily Room Readiness Checklist",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Supervisor",
            summary: "Ensures every guest room meets the highest standards of cleanliness and functionality before check-in.",
            icon: "bed-double",
            tasks: [
                { id: "HRR-01", description: "Check bed linen for stains, tears, and proper placement.", priority: "High", riskLevel: "Medium", consequence: "Poor guest experience and negative reviews due to unclean or damaged linen.", proof: "Photo of made bed" },
                { id: "HRR-02", description: "Verify minibar stock against the standard list and check for expired items.", priority: "High", riskLevel: "Medium", consequence: "Guest dissatisfaction and potential health risk if expired items are consumed.", proof: "Minibar Restock Sheet" },
                { id: "HRR-03", description: "Test the functionality of the in-room safe and ensure it is empty and open.", priority: "High", riskLevel: "High", consequence: "Guest cannot secure valuables, leading to security concerns and complaints.", proof: "Safe Test Log" },
                { id: "HRR-04", description: "Check all plumbing (taps, shower, toilet) for leaks and proper function. Check water pressure.", priority: "High", riskLevel: "High", consequence: "A minor leak can cause major water damage, while a non-functional toilet is a major service failure.", proof: "Plumbing Check Log" },
                { id: "HRR-05", description: "Inspect all surfaces (tables, counters, mirrors) for cleanliness and dust.", priority: "High", riskLevel: "Low", consequence: "Reflects poorly on the hotel's hygiene standards.", proof: "Visual Check" },
                { id: "HRR-06", description: "Test TV, AC remote controls, and all light switches.", priority: "High", riskLevel: "Medium", consequence: "Non-functional amenities are a common source of guest complaints.", proof: "Functional Test Log" },
                { id: "HRR-07", description: "Replenish all guest amenities (toiletries, tea/coffee, water bottles).", priority: "Medium", riskLevel: "Low", consequence: "Failure to replenish amenities shows a lack of attention to detail.", proof: "Amenity Checklist" },
                { id: "HRR-08", description: "Check functionality of the door lock and key card access.", priority: "High", riskLevel: "High", consequence: "A faulty lock compromises guest safety and security.", proof: "Lock Test Log" },
                { id: "HRR-09", description: "Ensure the room is free of any odors. Use air freshener if necessary.", priority: "Medium", riskLevel: "Low", consequence: "Unpleasant odors can ruin a guest's first impression of the room.", proof: "Olfactory Check" },
                { id: "HRR-10", description: "Final supervisor check and sign-off with photo uploaded to system.", priority: "High", riskLevel: "Medium", consequence: "Ensures standards are consistently met across all rooms.", proof: "Supervisor Sign-off" }
            ]
        },
        {
            title: "Pre-Service Kitchen HACCP Start-Up",
            department: "F&B",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Based on HACCP principles, ensures the kitchen is sanitary and safe before food prep begins.",
            icon: "utensils-crossed",
            tasks: [
                { id: "HACCP-01", description: "Log temperatures of all walk-in chillers, freezers, and reach-in refrigerators.", priority: "High", riskLevel: "High", consequence: "Temperature deviations can lead to bacterial growth and foodborne illness.", proof: "Temperature Log" },
                { id: "HACCP-02", description: "Verify raw material deliveries against supplier documentation, checking for temperature and quality.", priority: "High", riskLevel: "High", consequence: "Accepting compromised raw materials introduces risk at the start of the chain.", proof: "Receiving Log" },
                { id: "HACCP-03", description: "Ensure all handwashing stations are stocked with soap, sanitizer, and paper towels.", priority: "High", riskLevel: "Medium", consequence: "Lack of hand hygiene is a primary cause of foodborne illness transmission.", proof: "Visual Check" },
                { id: "HACCP-04", description: "Check knife sanitation station for correct chemical concentration and temperature.", priority: "High", riskLevel: "High", consequence: "Ineffective sanitation can lead to cross-contamination.", proof: "Sanitizer Log" },
                { id: "HACCP-05", description: "Ensure allergen segregation is maintained in storage and prep areas.", priority: "High", riskLevel: "High", consequence: "Cross-contamination can cause severe or fatal allergic reactions.", proof: "Storage Audit Photo" },
                { id: "HACCP-06", description: "Calibrate food thermometers using ice-point or boiling-point method.", priority: "High", riskLevel: "High", consequence: "Inaccurate thermometers lead to cooking food at unsafe temperatures.", proof: "Calibration Log" },
                { id: "HACCP-07", description: "Inspect all food contact surfaces for cleanliness before starting prep.", priority: "High", riskLevel: "High", consequence: "Dirty surfaces can contaminate food with bacteria.", proof: "Visual Audit" },
                { id: "HACCP-08", description: "Brief staff on the day's menu, highlighting any potential allergens.", priority: "High", riskLevel: "Medium", consequence: "Uninformed staff may give incorrect information to guests with allergies.", proof: "Briefing Notes" },
                { id: "HACCP-09", description: "Check that trash bins are clean, lined, and covered.", priority: "Medium", riskLevel: "Low", consequence: "Open or dirty bins attract pests, a major food safety risk.", proof: "Visual Check" },
                { id: "HACCP-10", description: "Ensure pest control traps are in place and not disturbed.", priority: "High", riskLevel: "High", consequence: "Failure to manage pest control leads to infestations and health closures.", proof: "Pest Control Log" }
            ]
        }
    ]
};
