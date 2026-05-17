
import type { PremiumPack } from "@/lib/premium-packs";

export const retail_operations_system: PremiumPack = {
    id: 'retail_operations_system',
    title: "Retail Operations System",
    priceINR: 3499,
    priceUSD: 49,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Retail",
    description: "The definitive Sovereign v15.0 engine for physical retail. Hardening 130 technical control points across Loss Prevention, Stock Integrity, and Metrology.",
    icon: "shopping-bag",
    badgeText: "V15.0 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Store Managers", "Inventory Leads", "Loss Prevention Directors", "Visual Merchandisers"],
    sampleItems: [
        { text: "<strong>Asset Shield Engine</strong>: Zero-fail protocols for Vault access and Fitting Room loss prevention.", icon: "shield-check" },
        { text: "<strong>Inventory Integrity</strong>: Daily cycle counts and 'Void-Bill' authorization to stop internal theft.", icon: "barcode" }
    ],
    checklists: [
        {
            title: "Loss Prevention",
            department: "Security",
            frequency: "Daily",
            role: "Loss Prevention Lead",
            summary: "Hardens the store perimeter and mutes specific theft windows.",
            icon: "shield-check",
            tasks: Array.from({ length: 40 }, (_, i) => ({
                id: `RT-SEC-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Verify CCTV 30-day backup is active and synced.",
                    "Audit 5 random return slips against original footage.",
                    "Search fitting room bins for discarded security tags.",
                    "Audit trash bags for concealed merchandise.",
                    "Check 100% of staff exit bags against register.",
                    "Test EAS gates with active sensor tag pre-opening.",
                    "Confirm all external alley doors are locked post-8PM.",
                    "Test silent panic button to police/security desk.",
                    "Audit 'Voided Bills' for valid cancellation codes.",
                    "Execute random sobriety check for night guards."
                ][i] || "Security perimeter check.",
                priority: i < 5 ? "High" : "Medium",
                riskLevel: "High",
                consequence: "Untraceable internal theft or breach.",
                proof: "Patrol Log"
            }))
        },
        {
            title: "Inventory Command",
            department: "Stores",
            frequency: "Daily",
            role: "Inventory Lead",
            summary: "Zero-fail protocols for stock accuracy and omnichannel handover.",
            icon: "barcode",
            tasks: Array.from({ length: 30 }, (_, i) => ({
                id: `RT-INV-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Blind cycle-count top 10 high-value SKUs.",
                    "Verify customer ID before releasing Click-and-Collect.",
                    "Audit stock transfer (STN) seriality for gaps.",
                    "Log and label damaged/quarantined stock.",
                    "Verify GRN entry for incoming stock < 4 hours.",
                    "Check par levels of security tags and hangers.",
                    "Audit barcode legibility on clearance items.",
                    "Verify shelf-edge pricing matches POS system."
                ][i] || "Stock integrity audit.",
                priority: "High",
                riskLevel: "Medium",
                consequence: "Stock shrinkage and margin loss.",
                proof: "Count Sheet"
            }))
        },
        {
            title: "Floor Readiness",
            department: "Operations",
            frequency: "Daily",
            role: "Floor Supervisor",
            summary: "Daily command for visual parity and service standard.",
            icon: "eye",
            tasks: Array.from({ length: 30 }, (_, i) => ({
                id: `RT-FLR-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Audit 100% of fitting rooms every 60 mins.",
                    "Verify planogram compliance for current promo.",
                    "Check ambiance: Scent, Music, and Temp (23°C).",
                    "Audit staff grooming and name-tag visibility.",
                    "Inspect floor for spills and trip hazards.",
                    "Verify all display lighting is 100% functional.",
                    "Monitor queue wait-time (Target < 5 mins).",
                    "Audit 'Gift Card' activation logs."
                ][i] || "Visual standard check.",
                priority: "Medium",
                riskLevel: "Low",
                consequence: "Brand dilution and poor reviews.",
                proof: "Walkthrough Log"
            }))
        },
        {
            title: "Maintenance & Facility",
            department: "Maintenance",
            frequency: "Daily",
            role: "Maintenance Lead",
            summary: "Infrastructure and safety asset protection.",
            icon: "wrench",
            tasks: [
                { id: "RT-MNT-01", description: "Audit lighting LUX levels in trial rooms and aisles.", priority: "Low", riskLevel: "Low", consequence: "Poor visual merchandising impact.", proof: "Meter Log" },
                { id: "RT-MNT-02", description: "Verify emergency exit shutter motor functionality.", priority: "High", riskLevel: "High", consequence: "Entrapment during fire emergency.", proof: "Test Log" },
                { id: "RT-MNT-03", description: "Inspect HVAC vents for dust and airflow blockages.", priority: "Medium", riskLevel: "Low", consequence: "Poor air quality and guest discomfort.", proof: "Visual Check" },
                { id: "RT-MNT-04", description: "Monitor water TDS levels from main drinking point.", priority: "High", riskLevel: "Medium", consequence: "Staff/Customer health risk.", proof: "TDS Reading" },
                { id: "RT-MNT-05", description: "Audit floor tiles for cracks or trip hazards.", priority: "High", riskLevel: "High", consequence: "Slip-and-fall litigation.", proof: "Walkthrough" },
                { id: "RT-MNT-06", description: "Test store-front sign timer and bulbs.", priority: "Low", riskLevel: "Low", consequence: "Brand image decay.", proof: "Visual Check" },
                { id: "RT-MNT-07", description: "Log daily energy KWH meter reading.", priority: "Medium", riskLevel: "Low", consequence: "Unmonitored energy spikes.", proof: "Meter Log" },
                { id: "RT-MNT-08", description: "Check fire extinguisher gauge pressure.", priority: "High", riskLevel: "High", consequence: "Fire suppression failure.", proof: "Gauge Check" },
                { id: "RT-MNT-09", description: "Verify sanitization of staff change-rooms.", priority: "Medium", riskLevel: "Low", consequence: "Staff turnover and morale drop.", proof: "Cleaning Note" },
                { id: "RT-MNT-10", description: "Final closure walkthrough of utility banks.", priority: "High", riskLevel: "High", consequence: "Fire and overnight disaster.", proof: "Signed Log" }
            ]
        },
        {
            title: "Executive Store Control",
            department: "Management",
            frequency: "Daily",
            role: "Store Manager",
            summary: "High-level margin and compliance oversight.",
            icon: "crown",
            tasks: Array.from({ length: 20 }, (_, i) => ({
                id: `RT-EXE-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Witness and seal nightly cash drop bag.",
                    "Verify Legal Metrology certs for all scales.",
                    "Match physical cash to POS X-Reading report.",
                    "Audit staff payroll OT for public holidays.",
                    "Escalate P1 maintenance breakdowns > 4h.",
                    "Review previous day's conversion rate variance.",
                    "Verify Mall Compliance NOC status.",
                    "Conduct 2-min LP briefing with team."
                ][i] || "Managerial oversight log.",
                priority: "High",
                riskLevel: "High",
                consequence: "Revenue theft and legal penalties.",
                proof: "Signed Summary"
            }))
        }
    ]
};
