
import type { PremiumPack } from "@/lib/premium-packs";

export const electronics_showroom_pack: PremiumPack = {
    id: 'electronics_showroom_pack',
    title: "Electronics Showroom Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a05cb9ef-51b3-454a-a389-609b314b8338',
    category: "Retail",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the professional plug for demo fires and inventory theft.",
    heroHeadline: "Stop Demo Fires and Nine-Figure Inventory Theft",
    heroSubheadline: "Track electrical safety, monitor serialized stock, and stay in control of asset protection—even when you’re not there.",
    pricingUrgency: "A single lithium-ion fire or one major stock discrepancy costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "tv",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Showroom Managers", "Retail Owners", "Asset Protection Directors", "Facility Leads", "Compliance Officers"],
    sampleItems: [
        { text: "<strong>Thermal Safety Pulse</strong>: Daily checks for battery swelling and charging-port heat to prevent showroom fires.", icon: "zap" },
        { text: "<strong>Serialized Asset Protection</strong>: Track every high-value unit (phones, laptops) from receipt to sale with zero-gap documentation.", icon: "barcode" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show managers exactly what needs sign-off—from electrical loads to vault access.", icon: "shield-check" },
        { text: "<strong>E-Waste Governance</strong>: A legally compliant framework for managing and disposing of electronic waste to avoid environmental fines.", icon: "recycle" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure that even with high retail turnover, your safety standards remain constant.", icon: "history" },
        { text: "<strong>POS Security Audit</strong>: Rigorous daily checks for skimmers and unauthorized transaction patterns.", icon: "circle-dollar-sign" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your operational data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Demo Unit & Electrical Safety",
            department: "Operations",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Ensures all demo units are safe, functional, and presentable before the store opens.",
            icon: "zap",
            tasks: [
                { id: "DEMO-01", description: "Inspect all demo batteries for signs of swelling or deformation.", priority: "High", riskLevel: "High", consequence: "Spontaneous lithium-ion fire in customer area.", proof: "Visual Inspection" },
                { id: "DEMO-02", description: "Verify all power strips are surge-protected and not daisy-chained.", priority: "High", riskLevel: "High", consequence: "Electrical circuit overload and fire risk.", proof: "Visual Audit" },
                { id: "DEMO-03", description: "Check all security tethers are functional and untampered.", priority: "High", riskLevel: "High", consequence: "Theft of high-value demo merchandise.", proof: "Alarm Test" },
                { id: "DEMO-04", description: "Clear and reset demo units of any previous customer data/photos.", priority: "Medium", riskLevel: "Medium", consequence: "Privacy violations and poor brand impression.", proof: "Reset Log" },
                { id: "DEMO-05", description: "Verify all demo-unit wiring is concealed and not a trip hazard.", priority: "High", riskLevel: "Medium", consequence: "Customer/Staff injury and insurance liability.", proof: "Walkthrough" },
                { id: "DEMO-06", description: "Ensure all pricing and feature labels match current collection.", priority: "High", riskLevel: "Low", consequence: "Misleading trade practices and customer disputes.", proof: "Price Audit" },
                { id: "DEMO-07", description: "Check that all demo units have the latest OS security patches.", priority: "High", riskLevel: "High", consequence: "Vulnerability to malware or 'jailbreak' exploits in-store.", proof: "Firmware Report" },
                { id: "DEMO-08", description: "Sanitize screens and keyboards of high-touch demo units.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene issues and negative brand perception.", proof: "Cleaning Log" },
                { id: "DEMO-09", description: "Verify functionality of digital signage and kiosks.", priority: "Medium", riskLevel: "Low", consequence: "Broken marketing displays reducing conversion.", proof: "Visual Check" },
                { id: "DEMO-10", description: "Confirm final exit checks for all non-essential overnight power.", priority: "High", riskLevel: "High", consequence: "Increased fire risk and wasted energy costs.", proof: "Switch-off Log" }
            ]
        }
    ]
};
