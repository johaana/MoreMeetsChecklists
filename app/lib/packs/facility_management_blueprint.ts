
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
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the professional plug for your infrastructure leaks.",
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
                { id: "FM-MEP-05", description: "Test fire-alarm panel and emergency PA system functionality.", priority: "High", riskLevel: "High", consequence: "Fatal delay during emergency evacuation.", proof: "Test Report", trainerNotes: "Rotate test zones weekly." },
                { id: "FM-MEP-06", description: "Verify lift emergency phones and alarm bell connectivity.", priority: "High", riskLevel: "High", consequence: "Unassisted elevator entrapment liability.", proof: "Dial Test", trainerNotes: "Test from inside the cabin daily." },
                { id: "FM-MEP-07", description: "Inspect plumbing shafts for signs of dampness or leakage.", priority: "Medium", riskLevel: "Low", consequence: "Progressive structural and aesthetic damage.", proof: "Walkthrough", trainerNotes: "Check ground-floor vents for odor." },
                { id: "FM-MEP-08", description: "Log UPS battery status and bypass switch positions.", priority: "High", riskLevel: "High", consequence: "Immediate data loss in server rooms during flicker.", proof: "UPS Display", trainerNotes: "Report 'Replace Battery' alarms immediately." },
                { id: "FM-MEP-09", description: "Audit lighting automation (Timer/Sensor) for daylight settings.", priority: "Low", riskLevel: "Low", consequence: "Increased energy overheads.", proof: "Visual Check", trainerNotes: "Ensure exterior lights off by 7 AM." },
                { id: "FM-MEP-10", description: "Verify boiler water hardness levels (Softener check).", priority: "Medium", riskLevel: "Medium", consequence: "Scale buildup leading to boiler failure.", proof: "Test Strip", trainerNotes: "Maintain hardness < 5ppm." }
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
                { id: "FM-JAN-03", description: "Sanitize high-touch surfaces: elevator buttons and door handles.", priority: "High", riskLevel: "Medium", consequence: "Viral spread and increased staff sick-leave.", proof: "Sanitization Log", trainerNotes: "Use 200ppm solution." },
                { id: "FM-JAN-04", description: "Lobby Floor Polish Audit: check for slip-hazards or dullness.", priority: "Medium", riskLevel: "Medium", consequence: "Slip & fall liability and poor first touch.", proof: "Visual Sign-off", trainerNotes: "Use dry-mop for spills immediately." },
                { id: "FM-JAN-05", description: "Dusting Audit: Check partition tops and high-level vents.", priority: "Low", riskLevel: "Low", consequence: "Allergy triggers and unkempt appearance.", proof: "White-Glove Test", trainerNotes: "Focus on Reception back-wall." },
                { id: "FM-JAN-06", description: "Inspect Pantry/Kitchenette areas for rodent activity.", priority: "High", riskLevel: "High", consequence: "Health department closure.", proof: "Pest Audit", trainerNotes: "Check behind water dispensers." },
                { id: "FM-JAN-07", description: "Verify waste segregation at source (Dry/Wet/Hazardous).", priority: "Medium", riskLevel: "Low", consequence: "Environmental fines and poor ESG scores.", proof: "Visual Audit", trainerNotes: "Ensure liners are color-coded." }
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
                { id: "FM-GRD-03", description: "Inspect perimeter fence/walls for breaches or debris.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry and security vulnerability.", proof: "Patrol Log", trainerNotes: "Check for overhanging tree limbs." },
                { id: "FM-GRD-04", description: "Check drainage gratings for leaf-clogging (Pre-Rain check).", priority: "High", riskLevel: "Medium", consequence: "Localized flooding and structural damage.", proof: "Visual Check", trainerNotes: "Clean gratings every Friday." },
                { id: "FM-GRD-05", description: "Verify signage condition at the main entry gate.", priority: "Low", riskLevel: "Low", consequence: "Poor brand arrival experience.", proof: "Photo Audit", trainerNotes: "Check for rust or fading." }
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
                { id: "FM-LOG-01", description: "Audit Parcel Registry: match entries against delivered items.", priority: "High", riskLevel: "Medium", consequence: "Lost or stolen tenant property.", proof: "Inward Log", trainerNotes: "Scan ID of delivery personnel." },
                { id: "FM-LOG-02", description: "Vendor Receiving: verify quality and weight of cleaning supplies.", priority: "Medium", riskLevel: "Low", consequence: "Paying for sub-par or short-weight stock.", proof: "GRN Note", trainerNotes: "Check seals on chemical cans." },
                { id: "FM-LOG-03", description: "Monitor Courier TAT: Time from arrival to desk-delivery.", priority: "Low", riskLevel: "Low", consequence: "Occupant frustration with delays.", proof: "Logbook", trainerNotes: "Target < 2h for urgent docs." }
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
                { id: "FM-REG-03", description: "Water Tank Certification: verify latest lab test for potability.", priority: "High", riskLevel: "Medium", consequence: "Water-borne disease outbreak liability.", proof: "Lab Report", trainerNotes: "Test every 6 months." },
                { id: "FM-REG-04", description: "Verify Insurance Policy coverage for 'Public Liability'.", priority: "High", riskLevel: "High", consequence: "Unprotected financial exposure after accidents.", proof: "Policy File", trainerNotes: "Ensure premium is paid." },
                { id: "FM-REG-05", description: "Audit Staff Statutory compliance (PF/ESI) for vendor team.", priority: "Medium", riskLevel: "Low", consequence: "Legal complications with labor department.", proof: "Compliance Chalan", trainerNotes: "Request docs from HK agency monthly." }
            ]
        }
    ]
};
