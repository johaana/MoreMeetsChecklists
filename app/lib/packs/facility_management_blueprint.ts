
import type { PremiumPack } from "@/lib/premium-packs";

export const facility_management_blueprint: PremiumPack = {
    id: 'facility_management_blueprint',
    title: "Facility Management Blueprint (Enterprise Edition)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/ab64c7a0-4341-40a8-bb54-871074a22d10',
    category: "Corporate & Tech",
    description: "An enterprise-grade toolkit for COOs and Heads of Corporate Real Estate to manage large-scale facilities like IT campuses, business parks, and corporate offices.",
    icon: "building-2",
    whoIsItFor: ["COOs", "Heads of Corporate Real Estate", "Directors of Facilities", "VPs of Administration", "Data Center Managers"],
    sampleItems: [
        { text: "Implement a daily facility walkthrough for proactive issue identification.", icon: "user-check" },
        { text: "Master vendor performance with preventive maintenance planning and SLA tracking.", icon: "wrench" },
        { text: "Ensure a pristine and safe environment with housekeeping, hygiene, and pest control audits.", icon: "sparkles" },
        { text: "Secure your premises with robust visitor management and access control protocols.", icon: "key-round" },
        { text: "Optimize costs and sustainability through a utilities, energy, and water management system.", icon: "zap" },
        { text: "Guarantee business continuity with critical systems (UPS, HVAC) and redundancy testing.", icon: "cog" }
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
            summary: "Scheduled maintenance for Mechanical, Electrical, and Plumbing systems to prevent failures and ensure guest comfort and safety.",
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
        },
        {
            title: "Housekeeping & Hygiene Audit",
            department: "Soft Services",
            frequency: "Weekly",
            role: "Housekeeping Manager",
            summary: "Ensures the highest standards of cleanliness and hygiene across the facility.",
            icon: "sparkles",
            tasks: [
                { id: "FMB-HHA-01", description: "Restroom Audit: Check for cleanliness, odors, fixture functionality, and stock levels.", priority: "High", riskLevel: "Medium", consequence: "Major source of employee complaints.", proof: "Scored restroom audit form." },
                { id: "FMB-HHA-02", description: "Workstation Area: Check for dust on surfaces, clean carpets/floors, and empty bins.", priority: "Medium", riskLevel: "Low", consequence: "Untidy work environment.", proof: "Zone inspection checklist." },
                { id: "FMB-HHA-03", description: "Pantry/Cafeteria: Check for food debris, clean appliances (microwaves, etc.), and sanitized tables.", priority: "High", riskLevel: "Medium", consequence: "Hygiene risk, pest attraction.", proof: "Pantry audit form." },
                { id: "FMB-HHA-04", description: "Glass & Facade: Check for clean windows and facade, especially in public-facing areas.", priority: "Low", riskLevel: "Low", consequence: "Poor corporate image.", proof: "Visual inspection." },
                { id: "FMB-HHA-05", description: "Waste Management: Check for proper segregation and timely disposal of waste.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental non-compliance, odors.", proof: "Waste area inspection log." },
                { id: "FMB-HHA-06", description: "Pest Control: Review pest control logbook and check bait stations.", priority: "High", riskLevel: "High", consequence: "Infestation.", proof: "Pest control vendor's service report." },
                { id: "FMB-HHA-07", description: "Stock Check: Verify inventory of cleaning supplies and consumables.", priority: "Medium", riskLevel: "Low", consequence: "Running out of essential supplies.", proof: "Stock register." },
                { id: "FMB-HHA-08", description: "Staff Uniform & PPE: Check that all housekeeping staff are in clean uniforms and using correct PPE.", priority: "Medium", riskLevel: "Low", consequence: "Unprofessionalism, safety risk to staff.", proof: "Staff inspection notes." },
                { id: "FMB-HHA-09", description: "Review cleaning equipment for functionality and cleanliness.", priority: "Medium", riskLevel: "Low", consequence: "Ineffective cleaning.", proof: "Equipment check log." },
                { id: "FMB-HHA-10", description: "Follow up on any housekeeping-related complaints from the previous week.", priority: "High", riskLevel: "Medium", consequence: "Recurring service failures.", proof: "Complaint tracker update." }
            ]
        },
        {
            title: "Physical Security & Access Control",
            department: "Security",
            frequency: "Weekly",
            role: "Security Manager",
            summary: "An audit to ensure the physical security of the facility is robust and uncompromised.",
            icon: "shield-check",
            tasks: [
                { id: "FMB-PSA-01", description: "Walk the entire facility perimeter to check for breaches in fences/walls.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry.", proof: "Perimeter patrol log." },
                { id: "FMB-PSA-02", description: "Verify all cameras are recording, have clear views, and adequate storage.", priority: "High", riskLevel: "High", consequence: "Inability to investigate incidents.", proof: "CCTV health check report." },
                { id: "FMB-PSA-03", description: "Review access logs for sensitive areas (e.g., server rooms) for unauthorized entries.", priority: "High", riskLevel: "High", consequence: "Data theft, sabotage.", proof: "Access control log audit report." },
                { id: "FMB-PSA-04", description: "Audit visitor logs to ensure all visitors were signed in, issued a badge, and escorted.", priority: "Medium", riskLevel: "Medium", consequence: "Unauthorized individuals on premises.", proof: "Sample audit of visitor logs." },
                { id: "FMB-PSA-05", description: "Audit the key register to ensure all keys are accounted for.", priority: "High", riskLevel: "High", consequence: "Lost keys can compromise entire facility.", proof: "Key register audit sign-off." },
                { id: "FMB-PSA-06", description: "Conduct a nighttime audit of all exterior and parking lot lighting.", priority: "Medium", riskLevel: "Medium", consequence: "Dark spots provide cover for criminals.", proof: "Night patrol report." },
                { id: "FMB-PSA-07", description: "Test a sample of door alarms, motion detectors, and panic buttons.", priority: "High", riskLevel: "High", consequence: "System failure during a real emergency.", proof: "Alarm test log." },
                { id: "FMB-PSA-08", description: "Check that guard patrol tours are being completed on schedule.", priority: "High", riskLevel: "Medium", consequence: "Gaps in security coverage.", proof: "Guard tour system report." },
                { id: "FMB-PSA-09", description: "Review incident reports from the past week for any trends or required actions.", priority: "Medium", riskLevel: "Low", consequence: "Failure to learn from security incidents.", proof: "Incident report summary." },
                { id: "FMB-PSA-10", description: "Check that security staff have up-to-date licenses and training certifications.", priority: "High", riskLevel: "Medium", consequence: "Non-compliant or untrained security force.", proof: "Review of HR training records." }
            ]
        },
        {
            title: "Vendor & Contract Management",
            department: "Administration",
            frequency: "Monthly",
            role: "Admin Manager",
            summary: "Ensures all vendors are meeting their SLAs and contracts are up-to-date.",
            icon: "handshake",
            tasks: [
                { id: "FMB-VCM-01", description: "Review performance of critical vendors (e.g., housekeeping, security, M&E) against their SLAs.", priority: "High", riskLevel: "Medium", consequence: "Paying for sub-par service.", proof: "Monthly vendor performance scorecard." },
                { id: "FMB-VCM-02", description: "Verify all vendor invoices against work orders or service reports before processing payment.", priority: "High", riskLevel: "High", consequence: "Paying for work not done or over-billing.", proof: "Signed-off invoices." },
                { id: "FMB-VCM-03", description: "Ensure all vendors have submitted required compliance documents (e.g., insurance, licenses).", priority: "High", riskLevel: "High", consequence: "Liability risk from non-compliant vendors.", proof: "Vendor compliance file audit." },
                { id: "FMB-VCM-04", description: "Track all contract renewal dates and start renewal process 90 days in advance.", priority: "High", riskLevel: "Medium", consequence: "Lapse in critical services.", proof: "Contract management tracker." },
                { id: "FMB-VCM-05", description: "Conduct a monthly meeting with key vendor account managers.", priority: "Medium", riskLevel: "Low", consequence: "Poor relationship, unresolved issues fester.", proof: "Minutes of meeting." },
                { id: "FMB-VCM-06", description: "Issue formal non-conformance reports for any SLA failures.", priority: "Medium", riskLevel: "Medium", consequence: "SLA failures are not officially documented and penalized.", proof: "Copies of non-conformance reports." },
                { id: "FMB-VCM-07", description: "Onboard new vendors with a formal induction on site rules, safety, and procedures.", priority: "High", riskLevel: "Medium", consequence: "Vendors creating safety or security risks.", proof: "Signed vendor induction form." },
                { id: "FMB-VCM-08", description: "Review and approve all vendor work permits before allowing work to start.", priority: "High", riskLevel: "High", consequence: "Unsafe or disruptive work being carried out.", proof: "Signed work permit." }
            ]
        }
    ]
};

  