
import type { PremiumPack } from "@/lib/premium-packs";

export const fashion_and_apparel_retail: PremiumPack = {
    id: 'fashion_and_apparel_retail',
    title: "Fashion Retail Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/35c743f7-333a-4fe6-9866-3334172e144b',
    category: "Retail",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the professional plug for seasonal margin erosion and inventory theft.",
    heroHeadline: "Stop the $10B Inventory Bleed and Brand Dilution",
    heroSubheadline: "Track visual standards, monitor fitting room security, and protect your margins—even when you’re not on the floor.",
    pricingUrgency: "A single season of unchecked shrinkage or one brand-damaging customer incident costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "shirt",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Store Managers", "Retail Owners", "Visual Merchandisers", "Regional Operations Directors", "Loss Prevention Heads"],
    sampleItems: [
        { text: "<strong>2-Minute Floor Pulse</strong>: Your sales team updates visual and stock status in seconds. 100% staff adoption.", icon: "timer" },
        { text: "<strong>Seasonal Switchboard</strong>: Manage collection transitions and markdowns from one master file. Toggle seasonal modules ON/OFF.", icon: "layout-grid" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show managers exactly what needs sign-off—from vault security to cash drops.", icon: "shield-check" },
        { text: "<strong>Fitting Room Governance</strong>: Bulletproof protocols to stop concealment theft and ensure premium customer privacy.", icon: "door-closed" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure that even with high retail turnover, your brand standards never drift.", icon: "history" },
        { text: "<strong>Margin Protection</strong>: Identify operational failures that lead to 'dead stock' and forced deep discounting.", icon: "banknote" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your inventory data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Daily Store Readiness",
            department: "Operations",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Ensures the store is ready for customers and operations.",
            icon: "clipboard-check",
            tasks: [
                { id: "FA-OPEN-01", description: "Verify all POS systems are functional and connected.", priority: "High", riskLevel: "Medium", consequence: "Inability to process sales at opening, leading to lost revenue.", proof: "System Health Check" },
                { id: "FA-OPEN-02", description: "Verify and log the opening cash float.", priority: "High", riskLevel: "High", consequence: "Cash discrepancies and untraceable internal theft.", proof: "Float Log" },
                { id: "FA-OPEN-03", description: "Check CCTV system is recording and all cameras are operational.", priority: "High", riskLevel: "High", consequence: "Security blind spots and loss of evidence for insurance claims.", proof: "CCTV Dashboard" },
                { id: "FA-OPEN-04", description: "Audit store displays against the current VM planogram.", priority: "High", riskLevel: "Low", consequence: "Inconsistent branding and missed promotional sales.", proof: "Visual Audit" },
                { id: "FA-OPEN-05", description: "Ensure fitting rooms are sanitized and clear of all previous merchandise.", priority: "High", riskLevel: "Medium", consequence: "Poor customer experience and theft concealment risk.", proof: "Visual Check" },
                { id: "FA-OPEN-06", description: "Verify all lighting and sensory branding (music/scent) is active.", priority: "Medium", riskLevel: "Low", consequence: "Uninviting store atmosphere leading to lower dwell time.", proof: "Visual Check" },
                { id: "FA-OPEN-07", description: "Check all security gates (EAS) for functionality.", priority: "High", riskLevel: "High", consequence: "Failure to detect tagged items leaving the store.", proof: "EAS Test Log" },
                { id: "FA-OPEN-08", description: "Brief staff on daily targets and current promotions.", priority: "High", riskLevel: "Medium", consequence: "Uninformed staff missing upsell opportunities.", proof: "Briefing Log" },
                { id: "FA-OPEN-09", description: "Verify that all price signage is accurate and undamaged.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes and Legal Metrology violations.", proof: "Price Audit" },
                { id: "FA-OPEN-10", description: "Confirm all external exits are secured and fire-pathways are clear.", priority: "High", riskLevel: "High", consequence: "Life-safety hazard and regulatory non-compliance.", proof: "Safety Walkthrough" }
            ]
        }
    ]
};
