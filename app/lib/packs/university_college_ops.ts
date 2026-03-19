
import type { PremiumPack } from "@/lib/premium-packs";

export const university_college_ops: PremiumPack = {
    id: 'university_college_ops',
    title: "University Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f290d8a5-d913-485e-9905-59b922a01490',
    category: "Education",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the campus safeguard for student safety and institutional resilience.",
    heroHeadline: "Prevent Campus Safety Disasters and Accreditation Lapses",
    heroSubheadline: "Track hostel security, monitor laboratory hazards, and stay in control of thousands of students—across your entire campus group.",
    pricingUrgency: "A single campus tragedy or one accreditation failure isn't just expensive—it's an institutional catastrophe. This system is the safeguard.",
    consultingAnchor: 15000,
    icon: "graduation-cap",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Deans & Vice Chancellors", "Registrars", "Heads of Campus Administration", "Hostel Wardens", "Security Directors"],
    sampleItems: [
        { text: "<strong>2-Minute Safety Pulse</strong>: Wardens and laboratory staff update status in seconds. Total campus-wide visibility.", icon: "timer" },
        { text: "<strong>Campus Perimeter Governance</strong>: Bulletproof protocols for hostel entry/exit, visitor management, and anti-ragging patrols.", icon: "shield" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show Registrars exactly what needs sign-off—from chemical labs to fire exits.", icon: "target" },
        { text: "<strong>Institutional Memory</strong>: Capture administrative expert knowledge so that your safety standards stay with the institution.", icon: "history" },
        { text: "<strong>Compliance Engine</strong>: Aligned with NAAC and international educational standards. You operate in a state of permanent audit-readiness.", icon: "file-check" },
        { text: "<strong>Liability Protection</strong>: Detailed logs for clinical emergencies, student conflicts, and infrastructure safety to harden your legal defense.", icon: "brain-circuit" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your institutional data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Hostel Security & Entry Protocol",
            department: "Hostel/Security",
            frequency: "Daily",
            role: "Chief Warden",
            summary: "Ensures a safe and controlled living environment for resident students.",
            icon: "home",
            tasks: [
                { id: "HOSTEL-SEC-01", description: "Maintain a log of all entries and exits from the hostel.", priority: "High", riskLevel: "High", consequence: "Inability to track who is in the building during an emergency or security incident.", proof: "Entry/Exit Register" },
                { id: "HOSTEL-SEC-02", description: "Verify the identity of all guests and ensure they sign in.", priority: "High", riskLevel: "High", consequence: "Allows unauthorized individuals to gain access, posing a security risk to students.", proof: "Guest Register" },
                { id: "HOSTEL-SEC-03", description: "Conduct surprise room checks for prohibited items (e.g., heaters, drugs).", priority: "High", riskLevel: "High", consequence: "Failure to curb prohibited items can lead to fire hazards or illegal activities.", proof: "Room Check Log" },
                { id: "HOSTEL-SEC-04", description: "Have a clear protocol for handling medical emergencies or disturbances.", priority: "High", riskLevel: "High", consequence: "A chaotic response can delay medical care or escalate a conflict.", proof: "Emergency SOP" },
                { id: "HOSTEL-SEC-05", description: "Ensure all security cameras in common areas are functional.", priority: "High", riskLevel: "High", consequence: "Provides crucial evidence for investigations into theft, ragging, or other incidents.", proof: "CCTV Health Check" },
                { id: "HOSTEL-SEC-06", description: "Check fire extinguishers and emergency exits in the hostel.", priority: "High", riskLevel: "High", consequence: "A blocked exit or faulty extinguisher can be fatal in a fire.", proof: "Fire Safety Log" },
                { id: "HOSTEL-SEC-07", description: "Ensure all hostel staff are trained in emergency procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff can worsen an emergency situation.", proof: "Training Records" },
                { id: "HOSTEL-SEC-08", description: "Secure the hostel premises at a designated time each night.", priority: "High", riskLevel: "High", consequence: "An unsecured hostel is vulnerable to intruders.", proof: "Lock-up Log" },
                { id: "HOSTEL-SEC-09", description: "Monitor for and prevent ragging incidents.", priority: "High", riskLevel: "High", consequence: "Failure to prevent ragging can lead to severe physical and psychological harm, and major legal liability.", proof: "Anti-Ragging Patrol Log" },
                { id: "HOSTEL-SEC-10", description: "Maintain an emergency contact list for all resident students.", priority: "High", riskLevel: "High", consequence: "Inability to contact parents during a medical emergency.", proof: "Contact List" }
            ]
        }
    ]
};
