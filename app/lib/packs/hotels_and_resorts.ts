
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operations System",
    priceINR: 3499,
    priceUSD: 49,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "The definitive Sovereign engine for luxury hotels and resorts. Hardening 135 technical control points across Front Office, Housekeeping, Engineering, and Security.",
    icon: "building",
    badgeText: "V11.9 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["General Managers", "Hotel Owners", "Heads of Housekeeping", "Chief Engineers", "Security Chief"],
    sampleItems: [
        { text: "<strong>Privacy Infrastructure</strong>: Hidden camera sweeps and master keycard audit logs to prevent scandals.", icon: "eye-off" },
        { text: "<strong>Revenue Integrity</strong>: Night audit variance tracking and bank reconcile audits to stop leakage.", icon: "banknote" }
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
                    "Reconcile previous day's revenue against bank deposit slips.",
                    "Review all high-priority alerts from the night shift incident log.",
                    "Verify validity of Fire NOC and Liquor licenses are current.",
                    "Audit night audit variance report for unauthorized discounts.",
                    "Check status of high-priority maintenance breakdowns.",
                    "Review Google and TripAdvisor mentions from last 24h.",
                    "Verify nightly cash drop was witnessed and sealed.",
                    "Audit lobby grooming and uniform standards.",
                    "Approve and sign off on large invoices (>50k).",
                    "Conduct 2-min chat with 3 guests to gauge sentiment.",
                    "Check meter readings for energy wastage.",
                    "Verify par levels in all departments.",
                    "Log handover notes for the assistant manager.",
                    "Daily operational closure sign-off.",
                    "Hold morning team huddle to align on VIP arrivals."
                ][i] || "Review operational vitals.",
                priority: i < 5 ? "High" : "Medium",
                riskLevel: "High",
                consequence: "Loss of control and profit leakage.",
                proof: "Signed Log"
            }))
        },
        {
            title: "Front Office Governance",
            department: "Front Desk",
            frequency: "Daily",
            role: "Front Office Manager",
            summary: "Arrival readiness and guest compliance.",
            icon: "concierge-bell",
            tasks: Array.from({ length: 20 }, (_, i) => ({
                id: `HR-FOM-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Verify arrivals against PMS vs Channel Manager.",
                    "Audit guest ID scan and C-Form entry (100%).",
                    "Physically count master keys in the vault.",
                    "Audit corrected bills for manager authorization.",
                    "Verify lobby scent, music, and temp (Target 23°C).",
                    "Verify scheduled wake-up calls were tested.",
                    "Check 'Open' complaints from morning shift.",
                    "Verify luggage tag integrity and secure storage.",
                    "Inspect key cards and envelope stock levels.",
                    "Check valet barrier sensors and key securement.",
                    "Verify daily PMS server backup.",
                    "Audit public restroom hygiene frequency.",
                    "Confirm 100% staff attendance at huddle.",
                    "Process all pending website booking inquiries.",
                    "Final FOM handover sign-off.",
                    "Check room status sync in PMS.",
                    "Verify VIP amenities placed.",
                    "Audit night-shift check-in logs.",
                    "Check lobby stationery levels.",
                    "Verify porch lighting functional."
                ][i] || "Manage guest arrivals.",
                priority: "High",
                riskLevel: "Medium",
                consequence: "Service failure and legal risk.",
                proof: "System Check"
            }))
        },
        {
            title: "Housekeeping Vitals",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Executive Housekeeper",
            summary: "Governance for room readiness and privacy.",
            icon: "sparkles",
            tasks: Array.from({ length: 25 }, (_, i) => ({
                id: `HR-EHK-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Verify 100% of 'Ready' rooms inspected.",
                    "Privacy Scan: Check vents/mirrors in 3 random rooms.",
                    "Linen gray-scale audit: Reject stained towels.",
                    "Audit cleaning frequency for staff change-rooms.",
                    "Check R1-R6 chemical dilution ratios.",
                    "Verify laundry TAT is < 24 hours.",
                    "Audit par levels of soap and shampoo.",
                    "Inspect for signs of pests in mattress seams.",
                    "Verify floor-pantry lockup at EOD.",
                    "Check vacuum cleaner filters and cord safety.",
                    "Audit 'Lost & Found' register closure.",
                    "Log daily carpet shampooing progress.",
                    "Verify availability of eco-cards.",
                    "Inspect staff grooming scores.",
                    "Final Housekeeping command sign-off."
                ][i] || "Audit room hygiene.",
                priority: "High",
                riskLevel: "Medium",
                consequence: "Negative guest reviews.",
                proof: "Visual Audit"
            })).concat(Array.from({ length: 10 }, (_, i) => ({
                id: `HR-EHK-${String(i + 16).padStart(2, '0')}`,
                description: "Review room attendant productivity logs.",
                priority: "Medium",
                riskLevel: "Low",
                consequence: "Labor inefficiency.",
                proof: "Worksheet"
            })))
        },
        {
            title: "Engineering Infrastructure",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Infrastructure uptime and life safety.",
            icon: "wrench",
            tasks: Array.from({ length: 30 }, (_, i) => ({
                id: `HR-ENG-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Inspect DG fuel level and battery status.",
                    "Log HVAC discharge temp in main lobby.",
                    "Verify output TDS from RO/STP system.",
                    "Confirm main fire pumps are in 'AUTO' mode.",
                    "Log main KWH meter reading at 12 AM.",
                    "Infrared scan of server room electrical panels.",
                    "Check boiler safety valve and gas supply.",
                    "Test lift intercom buttons to security desk.",
                    "Verify LOTO for all active MEP repairs.",
                    "Identify machines missing monthly PPM service."
                ][i] || "Check mechanical vitals.",
                priority: "High",
                riskLevel: "High",
                consequence: "Infrastructure blackout.",
                proof: "Meter Log"
            })).concat(Array.from({ length: 20 }, (_, i) => ({
                id: `HR-ENG-${String(i + 11).padStart(2, '0')}`,
                description: "Verify critical spares par levels.",
                priority: "Medium",
                riskLevel: "Medium",
                consequence: "Extended downtime.",
                proof: "Stock Sheet"
            })))
        },
        {
            title: "Security & Perimeter",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the perimeter and protects life safety.",
            icon: "shield-check",
            tasks: Array.from({ length: 35 }, (_, i) => ({
                id: `HR-SEC-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Verify 30-day CCTV recording backup status.",
                    "Audit guest ID register for 100% capture.",
                    "Verify all fire-escape stairs are unlocked and clear.",
                    "Test night shift guard sobriety (breathalyzer).",
                    "Test panic buttons at desk and vault.",
                    "Verify all roof and basement gates are locked.",
                    "Audit 100% of staff exit bags.",
                    "Verify perimeter security lighting is active.",
                    "Inspect porch security scanner functionality.",
                    "Final nightly security deployment sign-off."
                ][i] || "Hardened perimeter sweep.",
                priority: "High",
                riskLevel: "High",
                consequence: "Unauthorized access and theft.",
                proof: "Patrol Log"
            })).concat(Array.from({ length: 25 }, (_, i) => ({
                id: `HR-SEC-${String(i + 11).padStart(2, '0')}`,
                description: "Review guard post attendance.",
                priority: "Medium",
                riskLevel: "Low",
                consequence: "Perimeter gaps.",
                proof: "Roster Log"
            })))
        }
    ]
};
