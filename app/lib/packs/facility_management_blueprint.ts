
import type { PremiumPack } from "@/lib/premium-packs";

export const facility_management_blueprint: PremiumPack = {
    id: 'facility_management_blueprint',
    title: "Facility Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/ab64c7a0-4341-40a8-bb54-871074a22d10',
    category: "Corporate & Tech",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the professional plug for your infrastructure leaks.",
    heroHeadline: "Stop Catastrophic Facility Failures and Vendor Neglect",
    heroSubheadline: "Track daily walkthroughs, monitor preventive maintenance, and stay in control of campus safety—even when you’re not on property.",
    pricingUrgency: "A single major utility failure or one safety negligence lawsuit costs 100x more than this entire system.",
    consultingAnchor: 10000,
    icon: "building-2",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["COOs", "Heads of Corporate Real Estate", "Directors of Facilities", "VPs of Administration", "Data Center Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Facility Pulse</strong>: Your ground team and vendor staff update status in seconds. Zero-friction reporting.", icon: "timer" },
        { text: "<strong>Symmetric Governance</strong>: One Master File to control up to 10 buildings or zones. Perfect multi-site visibility.", icon: "layout-grid" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show managers exactly what needs sign-off—from fire safety to electrical loads.", icon: "shield-check" },
        { text: "<strong>Vendor SLA Engine</strong>: Monitor third-party maintenance performance and identify neglect before it causes a breakdown.", icon: "wrench" },
        { text: "<strong>Institutional Memory</strong>: Built-in instructions ensure that even with high staff turnover, your facility standards never drift.", icon: "history" },
        { text: "<strong>Revenue Protection</strong>: Stop the profit bleed caused by utility waste and emergency reactive repair costs.", icon: "banknote" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own the data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Daily Facility Walkthrough",
            department: "Facilities",
            frequency: "Daily",
            role: "Facility Manager",
            summary: "A proactive daily patrol to identify and rectify issues before they become major problems.",
            icon: "clipboard-check",
            tasks: [
                { id: "FMB-DFW-01", description: "Check all common areas (lobbies, receptions) for cleanliness and order.", priority: "High", riskLevel: "Low", consequence: "Negative impression on visitors and employees.", proof: "Walkthrough log." },
                { id: "FMB-DFW-02", description: "Inspect all restrooms for cleanliness, functionality, and stock levels.", priority: "High", riskLevel: "Medium", consequence: "Major source of employee complaints.", proof: "Restroom inspection log." },
                { id: "FMB-DFW-03", description: "Verify temperature and air quality in all zones are comfortable.", priority: "Medium", riskLevel: "Low", consequence: "Reduced employee productivity and comfort.", proof: "BMS (Building Management System) reading." },
                { id: "FMB-DFW-04", description: "Check for any safety hazards (e.g., slip/trip hazards, blocked fire exits).", priority: "High", riskLevel: "High", consequence: "Employee/visitor injury, legal liability.", proof: "Hazard report log." },
                { id: "FMB-DFW-05", description: "Inspect exterior of the building for cleanliness, damage, or security concerns.", priority: "Medium", riskLevel: "Medium", consequence: "Poor curb appeal, potential security breaches.", proof: "Exterior inspection log." },
                { id: "FMB-DFW-06", description: "Check functionality of a random sample of access control doors.", priority: "High", riskLevel: "Medium", consequence: "Security system failure.", proof: "Access control system event log." },
                { id: "FMB-DFW-07", description: "Ensure all meeting rooms are tidy and equipment (projectors, phones) is functional.", priority: "Medium", riskLevel: "Low", consequence: "Meeting disruptions, lost productivity.", proof: "Meeting room checklist." },
                { id: "FMB-DFW-08", description: "Check pantries/cafeterias for cleanliness and functioning appliances.", priority: "Medium", riskLevel: "Low", consequence: "Employee dissatisfaction, hygiene risks.", proof: "Pantry inspection log." },
                { id: "FMB-DFW-09", description: "Raise work orders for all identified issues in the CMMS/ticketing system.", priority: "High", riskLevel: "Low", consequence: "Issues are not tracked and resolved.", proof: "Copies of new work orders." },
                { id: "FMB-DFW-10", description: "Follow up on critical open work orders from the previous day.", priority: "High", riskLevel: "Medium", consequence: "Critical failures are not resolved promptly.", proof: "Updated notes in CMMS." }
            ]
        },
        {
            title: "Preventive Maintenance (MEP)",
            department: "Engineering",
            frequency: "Weekly/Monthly",
            role: "Chief Engineer",
            summary: "Scheduled maintenance for Mechanical, Electrical, and Plumbing systems to prevent failures.",
            icon: "wrench",
            tasks: [
                { id: "FMB-MEP-01", description: "Inspect and clean HVAC filters for all major air handling units (AHUs).", priority: "High", riskLevel: "Medium", consequence: "Poor air quality, increased energy costs, system failure.", proof: "Signed maintenance log for each AHU." },
                { id: "FMB-MEP-02", description: "Test backup generator under load for at least 30 minutes.", priority: "High", riskLevel: "High", consequence: "Business shutdown during a power outage.", proof: "Generator test log with load readings." },
                { id: "FMB-MEP-03", description: "Electrical: Test UPS systems and verify battery health.", priority: "High", riskLevel: "High", consequence: "Data corruption/loss in data centers during power flicker.", proof: "UPS test report." },
                { id: "FMB-MEP-04", description: "Plumbing: Check and test all water pumps (booster, transfer, sump).", priority: "Medium", riskLevel: "Medium", consequence: "No water supply, flooding.", proof: "Pump test log." },
                { id: "FMB-MEP-05", description: "Fire Safety: Test a sample of fire alarm call points, sprinklers (flow switch), and smoke detectors.", priority: "High", riskLevel: "High", consequence: "Fire detection/suppression system failure.", proof: "Fire alarm test report." },
                { id: "FMB-MEP-06", description: "Lifts: Perform a monthly safety and performance check (leveling, doors, emergency phone).", priority: "High", riskLevel: "High", consequence: "Elevator entrapment, guest injury.", proof: "Internal lift check log." },
                { id: "FMB-MEP-07", description: "Water Treatment: Check WTP/STP operation and water quality reports.", priority: "High", riskLevel: "Medium", consequence: "Environmental non-compliance, unsafe water.", proof: "Water quality test reports." },
                { id: "FMB-MEP-08", description: "Electrical: Conduct thermal imaging of main electrical panels to detect hotspots (Quarterly).", priority: "High", riskLevel: "High", consequence: "Electrical fire.", proof: "Thermal imaging report." },
                { id: "FMB-MEP-09", description: "Building Management System: Verify all critical system alarms are reporting correctly to the BMS.", priority: "Medium", riskLevel: "Medium", consequence: "Silent failures of critical equipment.", proof: "BMS alarm test log." },
                { id: "FMB-MEP-10", description: "Review and update the schedule of all OEM/vendor Annual Maintenance Contracts (AMCs).", priority: "High", riskLevel: "Low", consequence: "Lapse in critical equipment servicing.", proof: "AMC tracker spreadsheet." }
            ]
        }
    ]
};
