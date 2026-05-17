
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "Sovereign v14.9 luxury governance engine. 135 technical control points across 9 institutional roles.",
    icon: "building",
    badgeText: "V14.9 PILOT",
    badgeVariant: "accent",
    whoIsItFor: ["General Managers", "Hotel Owners", "Heads of HK"],
    sampleItems: [
        { text: "<strong>Privacy Infrastructure</strong>: Hidden camera sweeps.", icon: "eye-off" },
        { text: "<strong>Revenue Integrity</strong>: Night audit variance logs.", icon: "banknote" }
    ],
    checklists: [
        {
            title: "Executive Command",
            department: "Management",
            frequency: "Daily",
            role: "General Manager",
            summary: "High-level property command and financial reconciliation.",
            icon: "crown",
            tasks: Array.from({ length: 15 }, (_, i) => ({
                id: `HR-GM-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Reconcile daily revenue vs bank deposit slips.",
                    "Review high-priority night incident alerts.",
                    "Verify validity of Fire NOC and Liquor licenses.",
                    "Audit night audit variance for unauthorized discounts.",
                    "Check status of P1 maintenance breakdowns.",
                    "Review Google/TripAdvisor mentions from last 24h.",
                    "Witness nightly cash drop bag seal.",
                    "Audit lobby grooming and uniform standards.",
                    "Conduct guest sentiment chat (random 3).",
                    "Daily operational closure sign-off."
                ][i] || "Review operational vitals.",
                priority: "High",
                riskLevel: "High",
                consequence: "Loss of control and profit leakage.",
                proof: "Signed Summary"
            }))
        },
        {
            title: "Housekeeping Vitals",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Executive Housekeeper",
            summary: "Governance for room readiness and privacy.",
            icon: "sparkles",
            tasks: Array.from({ length: 40 }, (_, i) => ({
                id: `HR-HK-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Verify 100% of 'Ready' rooms inspected.",
                    "Privacy Scan: Check vents/mirrors in 3 random rooms.",
                    "Linen grey-scale audit: Reject stained towels.",
                    "Audit cleaning frequency for staff change-rooms.",
                    "Check R1-R6 chemical dilution ratios.",
                    "Verify laundry TAT is < 24 hours.",
                    "Audit par levels of minibar stock and seals.",
                    "Inspect mattress seams for signs of pests.",
                    "Verify floor-pantry lockup at EOD.",
                    "Inspect room-attendant grooming scores."
                ][i] || "Audit room hygiene and standard.",
                priority: "High",
                riskLevel: "Medium",
                consequence: "Review drop and guest refund.",
                proof: "Visual Audit"
            }))
        },
        {
            title: "Security & Perimeter",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and protects life safety.",
            icon: "shield-check",
            tasks: Array.from({ length: 40 }, (_, i) => ({
                id: `HR-SEC-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Verify CCTV 30-day recording backup status.",
                    "Audit guest ID register for 100% capture.",
                    "Verify fire-escape stairs are unlocked and clear.",
                    "Breathalyzer test for night shift guards.",
                    "Test panic buttons at desk and vault.",
                    "Verify all roof and basement gates locked.",
                    "Audit 100% of staff exit bags.",
                    "Verify perimeter security lighting is active.",
                    "Inspect porch security scanner functionality.",
                    "Final nightly security deployment sign-off."
                ][i] || "Perimeter security sweep.",
                priority: "High",
                riskLevel: "High",
                consequence: "Unauthorized access and theft.",
                proof: "Patrol Log"
            }))
        },
        {
            title: "Front Office Governance",
            department: "Front Desk",
            frequency: "Daily",
            role: "Front Office Manager",
            summary: "Arrival readiness and guest compliance.",
            icon: "concierge-bell",
            tasks: Array.from({ length: 40 }, (_, i) => ({
                id: `HR-FOM-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Verify arrivals against PMS vs Channel Manager.",
                    "Audit guest ID scan and C-Form entry (100%).",
                    "Physically count master keys in the vault.",
                    "Audit corrected bills for manager authorization.",
                    "Check lobby ambiance: Scent, Music, and Temp.",
                    "Verify scheduled wake-up calls were tested.",
                    "Check 'Open' complaints from morning shift.",
                    "Verify luggage tag integrity and secure storage.",
                    "Check valet barrier sensors and key securement."
                ][i] || "Front office readiness audit.",
                priority: "High",
                riskLevel: "Medium",
                consequence: "Service failure and legal risk.",
                proof: "System Check"
            }))
        }
    ]
};
