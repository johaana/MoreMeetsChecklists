
import type { PremiumPack } from "@/lib/premium-packs";

export const facility_management_blueprint: PremiumPack = {
    id: 'facility_management_blueprint',
    title: "Facility Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/ab64c7a0-4341-40a8-bb54-871074a22d10',
    category: "Corporate & Tech",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.4 is the professional plug for your infrastructure leaks.",
    heroHeadline: "Stop Catastrophic Facility Failures and Vendor Neglect",
    heroSubheadline: "Track 150+ control points across Hard FM, Soft FM, Groundskeeping, and Compliance—even when you’re not on property.",
    pricingUrgency: "A single major utility failure or one safety negligence lawsuit costs 100x more than this entire system.",
    consultingAnchor: 10000,
    icon: "building-2",
    badgeText: "Asset Protection",
    badgeVariant: "accent",
    whoIsItFor: ["COOs", "Heads of Corporate Real Estate", "Directors of Facilities", "VPs of Administration", "Data Center Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Facility Pulse</strong>: Your ground team and vendor staff update status in seconds. Zero-friction reporting.", icon: "timer" },
        { text: "<strong>Hard FM (MEP) Mastery</strong>: Bulletproof preventive maintenance logs for HVAC, Boilers, Generators, and Lifts.", icon: "wrench" },
        { text: "<strong>Soft FM (Janitorial) Logic</strong>: Hourly logs for high-traffic zones and specialized washroom hygiene audits.", icon: "sparkles" },
        { text: "<strong>Grounds & Landscaping</strong>: Maintain perimeter security and curb-appeal with structured exterior audits.", icon: "sprout" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show managers exactly what needs sign-off.", icon: "target" },
        { text: "<strong>Regulatory Compliance Shield</strong>: Track fire certificates, lift licenses, and water-tank certifications in one ledger.", icon: "file-lock" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own the data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Hard FM: MEP & Engineering",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Protects the critical mechanical and electrical infrastructure of the facility.",
            icon: "wrench",
            tasks: [
                { id: "FM-MEP-01", description: "Log Chiller/HVAC plant delivery and return temperatures.", priority: "High", riskLevel: "Medium", consequence: "Tenant discomfort and increased energy waste.", proof: "BMS Reading", trainerNotes: "Check for abnormal compressor noise." },
                { id: "FM-MEP-02", description: "Inspect backup generator (DG) fuel levels and battery voltage.", priority: "High", riskLevel: "High", consequence: "Total blackout during power failure.", proof: "Daily Log", trainerNotes: "Maintain min 48h fuel reserve." },
                { id: "FM-MEP-03", description: "Verify water pressure at the main pumps and terrace tanks.", priority: "High", riskLevel: "Medium", consequence: "Water-supply disruption to upper floors.", proof: "Pressure Gauge", trainerNotes: "Check for pump seal leaks." },
                { id: "FM-MEP-04", description: "Thermal imaging audit of main electrical panels (hotspots).", priority: "High", riskLevel: "High", consequence: "Electrical fire and facility shutdown.", proof: "Infrared Log", trainerNotes: "Focus on loose cable connections." },
                { id: "FM-MEP-05", description: "Test fire-alarm panel and emergency PA system functionality.", priority: "High", riskLevel: "High", consequence: "Fatal delay during emergency evacuation.", proof: "Test Report", trainerNotes: "Rotate test zones weekly." }
            ]
        },
        {
            title: "Soft FM: Janitorial & Hygiene",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Housekeeping Lead",
            summary: "Governs the aesthetic and hygienic standards of the property.",
            icon: "sparkles",
            tasks: [
                { id: "FM-JAN-01", description: "Audit washroom cleaning logs: verify 1-hour frequency compliance.", priority: "High", riskLevel: "Low", consequence: "Major driver of occupant complaints.", proof: "Hourly Sheet", trainerNotes: "Check under-sink area for dust." },
                { id: "FM-JAN-02", description: "Verify stock of hand-soap and paper towels in all restrooms.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene breakdown and poor brand image.", proof: "Stock Check", trainerNotes: "Refill at 20% threshold." },
                { id: "FM-JAN-03", description: "Sanitize high-touch surfaces: elevator buttons and door handles.", priority: "High", riskLevel: "Medium", consequence: "Viral spread and increased staff sick-leave.", proof: "Sanitization Log", trainerNotes: "Use 200ppm solution." }
            ]
        },
        {
            title: "Groundskeeping & Landscaping",
            department: "Exterior",
            frequency: "Daily",
            role: "Facility Supervisor",
            summary: "Protects curb appeal and perimeter safety.",
            icon: "sprout",
            tasks: [
                { id: "FM-GRD-01", description: "Exterior Lighting Audit: Check all parking and perimeter lamps.", priority: "High", riskLevel: "Medium", consequence: "Security blind spots and guest safety risk at night.", proof: "Night Patrol Log", trainerNotes: "Replace fused bulbs within 24h." },
                { id: "FM-GRD-02", description: "Landscape Irrigation: verify functional sprinkler timers.", priority: "Medium", riskLevel: "Low", consequence: "Loss of plant assets and higher replanting costs.", proof: "Visual Check", trainerNotes: "Check for soil saturation." },
                { id: "FM-GRD-03", description: "Inspect perimeter fence/walls for breaches or debris.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry and security vulnerability.", proof: "Patrol Log", trainerNotes: "Check for overhanging tree limbs." }
            ]
        },
        {
            title: "Regulatory & Compliance",
            department: "Compliance",
            frequency: "Monthly",
            role: "Facility Manager",
            summary: "Protects the facility from legal and regulatory shutdowns.",
            icon: "file-lock",
            tasks: [
                { id: "FM-REG-01", description: "Verify validity of Fire Safety Certificate (NOC).", priority: "High", riskLevel: "High", consequence: "Legal closure and massive insurance denial.", proof: "Document Audit", trainerNotes: "Apply for renewal 90 days pre-expiry." },
                { id: "FM-REG-02", description: "Audit AMC Status: check service date for Lifts and DG.", priority: "High", riskLevel: "High", consequence: "Lapse in service for mission-critical machinery.", proof: "Contract File", trainerNotes: "Ensure technician reports are on-site." },
                { id: "FM-REG-03", description: "Water Tank Certification: verify latest lab test for potability.", priority: "High", riskLevel: "Medium", consequence: "Water-borne disease outbreak liability.", proof: "Lab Report", trainerNotes: "Test every 6 months." }
            ]
        },
        {
            title: "Security & Perimeter Control",
            department: "Security",
            frequency: "Daily",
            role: "Security Head",
            summary: "Hardens the perimeter and protects facility assets.",
            icon: "shield",
            tasks: [
                { id: "FM-SEC-01", description: "Verify CCTV recording status and camera focal points.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or unauthorized entry.", proof: "DVR Dashboard" },
                { id: "FM-SEC-02", description: "Patrol boundary walls and parking levels for suspicious activity.", priority: "High", riskLevel: "Medium", consequence: "Theft of tenant property or facility vandalism.", proof: "Patrol Log" },
                { id: "FM-SEC-03", description: "Audit visitor management logs for 100% ID verification.", priority: "High", riskLevel: "High", consequence: "Unidentified persons gaining facility access.", proof: "Registry Audit" }
            ]
        },
        {
            title: "Mail, Logistics & Receiving",
            department: "Admin",
            frequency: "Daily",
            role: "Admin Coordinator",
            summary: "Governance for the facility supply chain and parcel security.",
            icon: "truck",
            tasks: [
                { id: "FM-LOG-01", description: "Audit Parcel Registry: match entries against delivered items.", priority: "High", riskLevel: "Medium", consequence: "Lost or stolen tenant property.", proof: "Inward Log" },
                { id: "FM-LOG-02", description: "Vendor Receiving: verify quality and weight of cleaning supplies.", priority: "Medium", riskLevel: "Low", consequence: "Paying for sub-par or short-weight stock.", proof: "GRN Note" }
            ]
        },
        {
            title: "Vendor & AMC Management",
            department: "Procurement",
            frequency: "Monthly",
            role: "Procurement Head",
            summary: "Ensures service partners are delivering on their SLAs.",
            icon: "handshake",
            tasks: [
                { id: "FM-VND-01", description: "Audit Vendor Invoices against signed AMC contracts.", priority: "High", riskLevel: "Medium", consequence: "Financial over-billing and loss.", proof: "Invoice Match" },
                { id: "FM-VND-02", description: "Review Vendor TAT (Turnaround Time) for breakdown calls.", priority: "Medium", riskLevel: "Low", consequence: "Extended downtime for facility services.", proof: "Service Report" },
                { id: "FM-VND-03", description: "Conduct quarterly vendor performance feedback meeting.", priority: "Low", riskLevel: "Low", consequence: "Undetected drop in service quality.", proof: "Minutes of Meeting" }
            ]
        },
        {
            title: "Energy & Sustainability Audit",
            department: "Management",
            frequency: "Weekly",
            role: "Energy Auditor",
            summary: "Protects the bottom line through utility optimization.",
            icon: "leaf",
            tasks: [
                { id: "FM-SUS-01", description: "Log daily KWH consumption from the main meter.", priority: "High", riskLevel: "Low", consequence: "Undetected energy spikes and high bills.", proof: "Meter Reading" },
                { id: "FM-SUS-02", description: "Verify exterior lighting is off during daylight hours.", priority: "Medium", riskLevel: "Low", consequence: "Wasted energy overheads.", proof: "Visual Check" },
                { id: "FM-SUS-03", description: "Inspect HVAC vents for blockage to improve efficiency.", priority: "Medium", riskLevel: "Low", consequence: "Increased load on compressor.", proof: "Walkthrough" }
            ]
        },
        {
            title: "Facility Executive Governance",
            department: "Management",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "Strategic oversight of infrastructure performance and ROI.",
            icon: "crown",
            tasks: [
                { id: "FM-EXE-01", description: "Review 'Empire Mood' and facility shift progress.", priority: "High", riskLevel: "Low", consequence: "Drift in maintenance discipline.", proof: "Dashboard Review" },
                { id: "FM-EXE-02", description: "Audit 'Incident Log' for any unresolved fire or life-safety alerts.", priority: "High", riskLevel: "High", consequence: "Massive legal liability and facility shutdown.", proof: "Incident Audit" },
                { id: "FM-EXE-03", description: "Reconcile 'ROI Engine' savings against actual utility billing.", priority: "Medium", riskLevel: "Medium", consequence: "Profit erosion through unmonitored waste.", proof: "Financial Match" }
            ]
        }
    ]
};
