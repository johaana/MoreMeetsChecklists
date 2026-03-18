
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the technical safeguard for clinical operations.",
    heroHeadline: "Prevent Audit Failures and Patient Safety Incidents",
    heroSubheadline: "Track clinical protocols, monitor patient safety, and eliminate audit anxiety—without chasing your staff.",
    pricingUrgency: "In healthcare, a single protocol failure isn't just expensive—it's catastrophic. This system is the safeguard.",
    consultingAnchor: 10000,
    icon: "hospital",
    badgeText: "V4.3 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Hospital COOs", "Medical Directors", "Quality Assurance Heads", "Nursing Superintendents", "Accreditation Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Clinical Pulse</strong>: Nursing and OPD teams update status in seconds. Zero-friction reporting.", icon: "timer" },
        { text: "<strong>Clinical Governance</strong>: Bulletproof protocols for surgical safety (WHO-aligned) and high-alert medication.", icon: "shield-check" },
        { text: "<strong>Manager Action Targets</strong>: Clinical heads know exactly which high-risk points need verification and sign-off.", icon: "target" },
        { text: "<strong>Incident Intelligence</strong>: Log failures and quantify liability impact to identify recurring safety risks.", icon: "brain-circuit" },
        { text: "<strong>Institutional Memory</strong>: Capture expert knowledge into the system so new residents and nurses are audit-ready from Day 1.", icon: "history" },
        { text: "<strong>Compliance Engine</strong>: Aligned with NABH and JCI standards. You don't prepare for audits; you operate ready for them.", icon: "file-check" },
        { text: "<strong>Group Visibility</strong>: Monitor performance across multiple clinics, wards, or departments from one central console.", icon: "layout-grid" }
    ],
    globalStandards: {
        title: "NABH, JCI & WHO ALIGNED",
        standards: [
            { name: "NABH", description: "National Accreditation Board for Hospitals & Healthcare Providers standards." },
            { name: "JCI", description: "Joint Commission International standards for medication safety." },
            { name: "WHO", description: "World Health Organization guidelines for surgical safety." },
            { name: "ISO 9001", description: "International standard for quality management systems." }
        ]
    },
    checklists: [
        {
            title: "Surgical Safety Checklist (WHO Aligned)",
            department: "Surgery",
            frequency: "Per Procedure",
            role: "Surgeon/Nurse",
            summary: "A three-phase checklist (Sign In, Time Out, Sign Out) to prevent common surgical errors and improve teamwork.",
            icon: "file-check",
            tasks: [
                { id: "H-SSC-01", description: "Confirm patient identity, surgical site, procedure, and consent before anesthesia.", priority: "High", riskLevel: "High", consequence: "Failure to confirm is the primary cause of \"never events\" like wrong-site surgery, leading to patient harm, lawsuits, and loss of accreditation.", proof: "Verbal confirmation log" },
                { id: "H-SSC-02", description: "Mark the surgical site.", priority: "High", riskLevel: "High", consequence: "An unmarked or incorrectly marked site can lead to catastrophic error in the operating room.", proof: "Visual check" },
                { id: "H-SSC-03", description: "Review critical patient history, including allergies and airway risks.", priority: "High", riskLevel: "High", consequence: "Missing a known allergy can lead to anaphylactic shock and death during surgery.", proof: "Anesthesia record" },
                { id: "H-SSC-04", description: "Confirm instrument, sponge, and needle counts before closing.", priority: "High", riskLevel: "High", consequence: "A retained foreign object can lead to severe post-operative complications, infection, and requires a second surgery to remove.", proof: "Count sheet" },
                { id: "H-SSC-05", description: "Verbally confirm the name of the procedure recorded and specimen labeling.", priority: "High", riskLevel: "High", consequence: "Incorrectly labeled specimens can lead to a misdiagnosis (e.g., of cancer), with life-altering consequences for the patient.", proof: "Sign-out log" },
                { id: "H-SSC-06", description: "Ensure all team members have introduced themselves by name and role.", priority: "High", riskLevel: "Medium", consequence: "Promotes teamwork and psychological safety, empowering any team member to speak up if they see a problem.", proof: "Time-out log" },
                { id: "H-SSC-07", description: "Confirm antibiotic prophylaxis has been given within the last 60 minutes.", priority: "High", riskLevel: "High", consequence: "Greatly increases the risk of surgical site infections (SSIs).", proof: "Medication Administration Record (MAR)" },
                { id: "H-SSC-08", description: "Review anticipated critical events with the surgeon and anesthesia team.", priority: "High", riskLevel: "High", consequence: "The team is unprepared for potential complications like major blood loss.", proof: "Verbal confirmation" },
                { id: "H-SSC-09", description: "Verify availability of essential imaging.", priority: "High", riskLevel: "High", consequence: "Proceeding without necessary scans can lead to surgical errors.", proof: "Imaging Display" },
                { id: "H-SSC-10", description: "Check for equipment issues or concerns before starting.", priority: "High", riskLevel: "High", consequence: "Equipment malfunction during surgery can have disastrous consequences.", proof: "Equipment Check Log" }
            ]
        }
    ]
};
