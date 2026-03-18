
import type { PremiumPack } from "@/lib/premium-packs";

export const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operating System (ROCS v4.3)",
    category: "Hospitality",
    description: "Stop the bleed. Most restaurants lose 2-5% of revenue to operational chaos, staff inconsistency, and undocumented standards. ROCS v4.3 is the professional plug for your profit leaks.",
    heroHeadline: "Consistency is either engineered, or it is non-existent.",
    heroSubheadline: "Stop chasing your staff. A complete, ready-to-use Command Engine to track daily tasks, monitor performance, and recover lost profit—in minutes, not hours.",
    pricingUrgency: "A single health department closure or one major safety mistake costs 100x more than this entire system. Don't gamble with your license.",
    consultingAnchor: 5000,
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    icon: "utensils-crossed",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Restaurant Owners", "Group COOs", "Multi-Unit Operators", "Executive Chefs tired of firefighting"],
    sampleItems: [
        { text: "<strong>Live Operational Visibility</strong>: See exactly which branch, team, and staff member is performing—and who is failing—in under 5 seconds.", icon: "zap" },
        { text: "<strong>2-Minute Daily Reporting</strong>: Zero reporting friction. Staff find their specific roles using simple filters, ensuring 100% system adoption.", icon: "timer" },
        { text: "<strong>Multi-Branch Switchboard</strong>: Run your entire group from one file. Toggle modules (Bar, Delivery, etc.) ON or OFF to fit each unique outlet.", icon: "layout-grid" },
        { text: "<strong>Capture Tribal Knowledge</strong>: Convert individual brilliance into permanent infrastructure. New hires execute like veterans from Day 1.", icon: "history" },
        { text: "<strong>Manager Target Verification</strong>: Stop auditing everything. Highlighted 'Yellow Targets' show managers exactly where their attention is required.", icon: "shield-check" },
        { text: "<strong>Recover Lost Revenue</strong>: Track daily mistakes and incidents to quantify the exact cost of operational failure and fix it permanently.", icon: "banknote" }
    ],
    checklists: [
        {
            title: "Kitchen Opening",
            department: "Kitchen",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Critical food safety and readiness protocols.",
            icon: "sunrise",
            tasks: Array.from({ length: 20 }, (_, i) => ({
                id: `KO-${(i + 1).toString().padStart(2, '0')}`,
                description: [
                    "Log temperatures of all walk-in chillers and freezers.",
                    "Inspect dry storage for signs of rodents or pests.",
                    "Verify sanitization of all surfaces using 200ppm strips.",
                    "Calibrate all food probes using ice-point method.",
                    "Audit staff health and grooming (nails, wounds, hair).",
                    "Check inventory of all high-risk perishable items.",
                    "Verify functionality of all kitchen exhaust systems.",
                    "Prepare sanitized sanitizer buckets for all workstations.",
                    "Organize raw prep area according to color-coding rules.",
                    "Test all dishwasher chemical levels.",
                    "Check availability of blue detectable band-aids.",
                    "Verify pest control bait station placement.",
                    "Check water filter pressure for ice machine.",
                    "Inspect grease trap for capacity/odors.",
                    "Check oven gaskets for heat leaks.",
                    "Verify raw protein date labeling.",
                    "Audit knife magnet for count integrity.",
                    "Inspect ceiling for leaks/mold.",
                    "Verify staff handwashing station temp (Min 38°C).",
                    "Check vegetable wash chemical ppm."
                ][i],
                priority: i < 5 ? "High" : "Medium",
                riskLevel: i < 5 ? "High" : "Medium",
                consequence: "Pathogen transmission, food waste, or regulatory closure.",
                proof: "Digital Log / Photo",
                trainerNotes: "Standard clinical procedure. Do not skip."
            }))
        },
        {
            title: "Kitchen Closing",
            department: "Kitchen",
            frequency: "Daily",
            role: "Sous Chef",
            summary: "End-of-shift safety and sanitation shutdown.",
            icon: "sunset",
            tasks: Array.from({ length: 20 }, (_, i) => ({
                id: `KC-${(i + 1).toString().padStart(2, '0')}`,
                description: [
                    "Perform mandatory main gas valve shutdown.",
                    "Empty and deep-clean all deep fryers.",
                    "Label and date-stamp all prepped items (FIFO).",
                    "Clean and sanitize all walk-in floor drains.",
                    "Organize and secure chemical storage locker.",
                    "Empty all trash bins and sanitize interiors.",
                    "Check all pilot lights are extinguished.",
                    "Sanitize meat slicer and disassemble.",
                    "Secure all knife magnets and sharpen.",
                    "Final walk-in door seal verification.",
                    "Discard all open dairy past expiry.",
                    "Turn off all hood lights and fans.",
                    "Wipe down all door handles with 70% alcohol.",
                    "Mop floors with degreaser.",
                    "Secure all prep fridge lids.",
                    "Check dishwasher for food debris.",
                    "Verify all staff have clocked out.",
                    "Empty and dry bain-marie wells.",
                    "Lock dry store and wine cellar.",
                    "Review morning prep list for next day."
                ][i],
                priority: "High",
                riskLevel: "High",
                consequence: "Fire risk, overnight spoilage, or hygiene failure.",
                proof: "Physical Log",
                trainerNotes: "Critical for overnight facility safety."
            }))
        }
    ]
};
