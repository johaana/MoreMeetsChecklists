
import type { PremiumPack } from "@/lib/premium-packs";

export const film_production_pack: PremiumPack = {
    id: 'film_production_pack',
    title: "Film & OTT Production Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a17569cb-01d1-4dda-b2e4-c4669fe90d94',
    category: "Entertainment & Events",
    description: "Stop production shutdowns, legal gridlock, and on-set safety failures—before they derail your project and budget.",
    heroHeadline: "Stop production shutdowns and legal gridlock.",
    heroSubheadline: "Built for audit-ready producers who take zero-risk set safety and legal compliance seriously.",
    pricingUrgency: "A single day of production delay or one legal injunction costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "film",
    whoIsItFor: ["Film Producers", "Line Producers", "Production Managers", "Heads of Production (OTT)"],
    sampleItems: [
        { text: "<strong>Secure</strong> your project legally with script clearance, life rights, and chain-of-title protocols.", icon: "file-lock" },
        { text: "<strong>Streamline</strong> location management with scouting, permits, and on-location logistics SOPs.", icon: "map" },
        { text: "<strong>Manage</strong> cast and crew effectively with contracts, call sheets, and travel coordination.", icon: "users" },
        { text: "<strong>Ensure</strong> a safe set with protocols for stunts, equipment safety, and incident reporting.", icon: "siren" },
        { text: "<strong>Protect</strong> your budget with checklists for cost reporting, vendor payments, and cash flow.", icon: "banknote" },
        { text: "<strong>Guarantee</strong> a seamless post-production workflow for dailies, VFX, and final delivery.", icon: "scissors" }
    ],
    checklists: [
        {
            title: "Pre-Production Planning",
            department: "Production",
            frequency: "Pre-Production Phase",
            role: "Line Producer",
            summary: "Ensures all legal and creative rights are secured before principal photography begins.",
            icon: "rocket",
            tasks: [
                { id: "PRE-PROD-01", description: "Finalize and lock the shooting script.", priority: "High", riskLevel: "High", consequence: "Changes after planning begins cause major budget and schedule overruns.", proof: "Locked Script Document" },
                { id: "PRE-PROD-02", description: "Create a detailed script breakdown (scenes, characters, props, locations).", priority: "High", riskLevel: "High", consequence: "Errors here will cascade through the entire budget and schedule.", proof: "Breakdown Sheets" },
                { id: "PRE-PROD-03", description: "Develop a comprehensive production budget.", priority: "High", riskLevel: "High", consequence: "An inaccurate budget can lead to the project running out of money mid-production.", proof: "Budget Document" },
                { id: "PRE-PROD-04", description: "Create a detailed production schedule.", priority: "High", riskLevel: "High", consequence: "A poor schedule leads to inefficiencies, overtime costs, and delays.", proof: "Production Schedule" },
                { id: "PRE-PROD-05", description: "Secure all key production crew (DOP, Director, Production Designer).", priority: "High", riskLevel: "High", consequence: "Failure to lock key crew can delay the start of production.", proof: "Crew Deal Memos" },
                { id: "PRE-PROD-06", description: "Cast all principal actors.", priority: "High", riskLevel: "High", consequence: "The project cannot move forward without a confirmed cast.", proof: "Cast Deal Memos" },
                { id: "PRE-PROD-07", description: "Secure production insurance (E&O, general liability).", priority: "High", riskLevel: "High", consequence: "Operating without insurance is a massive legal and financial risk.", proof: "Insurance Certificates" },
                { id: "PRE-PROD-08", description: "Set up production bank accounts and accounting systems.", priority: "High", riskLevel: "High", consequence: "Inability to manage cash flow and pay vendors/crew.", proof: "Bank Account Details" },
                { id: "PRE-PROD-09", description: "Establish the production office.", priority: "High", riskLevel: "Medium", consequence: "Lack of a central hub for coordination and administration.", proof: "Office Lease" },
                { id: "PRE-PROD-10", description: "Develop a health and safety plan for the production.", priority: "High", riskLevel: "High", consequence: "Legal violation and risk to the safety of the cast and crew.", proof: "Safety Plan Document" }
            ]
        },
        {
            title: "Legal & Clearances",
            department: "Legal",
            frequency: "Pre-Production",
            role: "Legal Counsel",
            summary: "Protects the production from legal claims through rigorous vetting and documentation.",
            icon: "file-lock",
            tasks: [
                { id: "LEGAL-01", description: "Secure a complete chain-of-title for the script.", priority: "High", riskLevel: "High", consequence: "Lawsuits claiming you don't own the rights to the story.", proof: "Chain-of-Title Documents" },
                { id: "LEGAL-02", description: "Conduct a script clearance report to identify potential legal issues.", priority: "High", riskLevel: "High", consequence: "Unauthorized brand/location use leading to costly lawsuits.", proof: "Script Clearance Report" },
                { id: "LEGAL-03", description: "Obtain life rights agreements for any real people depicted.", priority: "High", riskLevel: "High", consequence: "Defamation and invasion of privacy lawsuits.", proof: "Life Rights Agreements" },
                { id: "LEGAL-04", description: "Secure Errors & Omissions (E&O) insurance.", priority: "High", riskLevel: "High", consequence: "Required by distributors; lack of coverage leads to total legal liability.", proof: "E&O Insurance Policy" },
                { id: "LEGAL-05", description: "Clear all copyrighted materials (music, art, logos) that appear in the film.", priority: "High", riskLevel: "High", consequence: "Expensive legal claims and injunctions from rights holders.", proof: "Clearance Licenses" },
                { id: "LEGAL-06", description: "Draft and execute cast and crew contracts.", priority: "High", riskLevel: "High", consequence: "Disputes over payment, credit, and working conditions.", proof: "Signed Contracts" },
                { id: "LEGAL-07", description: "Ensure compliance with all guild and union agreements.", priority: "High", riskLevel: "High", consequence: "Fines, penalties, and production shutdowns by guilds.", proof: "Union Agreement" },
                { id: "LEGAL-08", description: "Verify compliance with child labor laws if minors are employed.", priority: "High", riskLevel: "High", consequence: "Severe legal penalties and production shutdown.", proof: "Child Labor Permit" },
                { id: "LEGAL-09", description: "Draft location agreements and releases.", priority: "High", riskLevel: "High", consequence: "Legal claims from property owners.", proof: "Location Agreements" },
                { id: "LEGAL-10", description: "Register the script with the copyright office.", priority: "High", riskLevel: "Medium", consequence: "Lack of public record of ownership.", proof: "Copyright Registration" }
            ]
        },
        {
            title: "Location Scouting & Permitting",
            department: "Locations",
            frequency: "Per Location",
            role: "Location Manager",
            summary: "Manages the scouting, permitting, and logistics of all filming locations.",
            icon: "map",
            tasks: [
                { id: "LOC-01", description: "Scout potential locations based on script requirements.", priority: "High", riskLevel: "Medium", consequence: "Compromised artistic vision due to poor location choice.", proof: "Location Photos/Videos" },
                { id: "LOC-02", description: "Negotiate and finalize location agreements and fees.", priority: "High", riskLevel: "High", consequence: "Verbal agreements falling through, jeopardizing the shoot.", proof: "Signed Location Agreement" },
                { id: "LOC-03", description: "Obtain all necessary filming permits (municipal, police, fire).", priority: "High", riskLevel: "High", consequence: "Production shut down by authorities; costly delays.", proof: "Filming Permits" },
                { id: "LOC-04", description: "Conduct a technical recce with key department heads.", priority: "High", riskLevel: "High", consequence: "Discovering location unsuitability on the actual shoot day.", proof: "Recce Report" },
                { id: "LOC-05", description: "Arrange for parking, power, and facilities at each location.", priority: "High", riskLevel: "Medium", consequence: "Major logistical delays on the shoot day.", proof: "Logistics Plan" },
                { id: "LOC-06", description: "Notify residents and businesses near the location.", priority: "High", riskLevel: "Medium", consequence: "Complaints and active disruption during filming.", proof: "Notification Letter" },
                { id: "LOC-07", description: "Plan for weather contingencies.", priority: "High", riskLevel: "High", consequence: "Losing entire shoot days due to bad weather without a backup.", proof: "Weather Contingency Plan" },
                { id: "LOC-08", description: "Ensure location is safe and secure for cast and crew.", priority: "High", riskLevel: "High", consequence: "Workplace accidents and serious injuries.", proof: "Safety Assessment" },
                { id: "LOC-09", description: "Restore the location to its original condition after the shoot.", priority: "High", riskLevel: "Medium", consequence: "Legal claims from owners and damage to reputation.", proof: "Restoration Photos" },
                { id: "LOC-10", description: "Get a final sign-off from the location owner.", priority: "High", riskLevel: "High", consequence: "Finalizes agreement and prevents future disputes.", proof: "Sign-off Form" }
            ]
        },
        {
            title: "Call Sheet & Scheduling SOP",
            department: "Production",
            frequency: "Daily",
            role: "Assistant Director",
            summary: "Ensures the entire team is aligned on the daily shooting goals.",
            icon: "clipboard-list",
            tasks: [
                { id: "CALL-01", description: "Create the daily call sheet with scenes, cast, and crew call times.", priority: "High", riskLevel: "High", consequence: "Massive confusion and expensive on-set delays.", proof: "Call Sheet Document" },
                { id: "CALL-02", description: "Include weather forecasts, location address, and hospital details.", priority: "High", riskLevel: "High", consequence: "Lack of safety information during an emergency.", proof: "Call Sheet Document" },
                { id: "CALL-03", description: "Distribute the call sheet to all cast and crew.", priority: "High", riskLevel: "High", consequence: "People don't know when or where to show up.", proof: "Distribution Log" },
                { id: "CALL-04", description: "Confirm receipt of the call sheet with key personnel.", priority: "High", riskLevel: "Medium", consequence: "Key staff missing, halting production.", proof: "Confirmation Log" },
                { id: "CALL-05", description: "Update the schedule based on daily progress.", priority: "High", riskLevel: "High", consequence: "Inability to manage production timeline effectively.", proof: "Updated Schedule" },
                { id: "CALL-06", description: "Coordinate with transport for cast and crew pickups.", priority: "High", riskLevel: "High", consequence: "Missed pickups delay the entire shoot.", proof: "Transport Schedule" },
                { id: "CALL-07", description: "List all required props, costumes, and equipment for the day.", priority: "High", riskLevel: "High", consequence: "Missing a key element prevents shooting the scene.", proof: "Call Sheet Document" },
                { id: "CALL-08", description: "Include a detailed meal schedule.", priority: "High", riskLevel: "Medium", consequence: "Crew dissatisfaction and low morale.", proof: "Call Sheet Document" },
                { id: "CALL-09", description: "Double-check all information on the call sheet for accuracy.", priority: "High", riskLevel: "High", consequence: "A single error (e.g. wrong location) derails the entire day.", proof: "Signed-off Call Sheet" },
                { id: "CALL-10", description: "Archive all call sheets for production records.", priority: "High", riskLevel: "Medium", consequence: "Loss of legal records for work hours and attendance.", proof: "Call Sheet Archive" }
            ]
        },
        {
            title: "On-Set Safety Protocol",
            department: "Safety",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "Ensures a safe working environment for all cast and crew.",
            icon: "siren",
            tasks: [
                { id: "SAFETY-01", description: "Conduct a daily safety briefing at the start of the shoot.", priority: "High", riskLevel: "High", consequence: "Crew unaware of specific daily hazards.", proof: "Briefing Attendance" },
                { id: "SAFETY-02", description: "Implement specific protocols for stunts, fire, and high-risk scenes.", priority: "High", riskLevel: "High", consequence: "Fatal accidents during high-risk filming (e.g. the Rust shooting).", proof: "High-Risk SOPs" },
                { id: "SAFETY-03", description: "Ensure a qualified medic and first-aid station are on set.", priority: "High", riskLevel: "High", consequence: "Inability to provide immediate life-saving care.", proof: "Medic Contract" },
                { id: "SAFETY-04", description: "Inspect all rigging, electricals, and equipment for safety.", priority: "High", riskLevel: "High", consequence: "Faulty equipment causing serious injuries.", proof: "Safety Inspection Log" },
                { id: "SAFETY-05", description: "Have a clear incident reporting and investigation procedure.", priority: "High", riskLevel: "High", consequence: "Repeating unsafe practices and increasing legal liability.", proof: "Incident Report Form" },
                { id: "SAFETY-06", description: "Ensure all crew members are wearing appropriate PPE.", priority: "High", riskLevel: "High", consequence: "Unnecessary injuries that could have been prevented.", proof: "PPE Audit" },
                { id: "SAFETY-07", description: "Manage on-set vehicle and MHE safety.", priority: "High", riskLevel: "High", consequence: "Serious vehicle-related accidents on set.", proof: "Vehicle Safety Log" },
                { id: "SAFETY-08", description: "Provide adequate hydration and rest areas for cast and crew.", priority: "High", riskLevel: "Medium", consequence: "Heatstroke and fatigue-related errors.", proof: "Rest Area Photos" },
                { id: "SAFETY-09", description: "Secure the set from unauthorized access.", priority: "High", riskLevel: "High", consequence: "Danger to the public and disruption of filming.", proof: "Security Log" },
                { id: "SAFETY-10", description: "Comply with all local health and safety regulations.", priority: "High", riskLevel: "High", consequence: "Fines, penalties, and production shutdowns.", proof: "Compliance Audit" }
            ]
        },
        {
            title: "Budgeting & Cost Control",
            department: "Finance/Accounts",
            frequency: "Weekly",
            role: "Production Accountant",
            summary: "Ensures the project remains financially viable through constant monitoring.",
            icon: "banknote",
            tasks: [
                { id: "BUDGET-01", description: "Track all expenses against the approved budget.", priority: "High", riskLevel: "High", consequence: "Running out of money before completion.", proof: "Cost Report" },
                { id: "BUDGET-02", description: "Generate a weekly cost report for the producers.", priority: "High", riskLevel: "High", consequence: "Inability to make informed financial decisions.", proof: "Weekly Cost Report" },
                { id: "BUDGET-03", description: "Manage and reconcile petty cash on a daily basis.", priority: "High", riskLevel: "High", consequence: "Financial fraud and mismanagement.", proof: "Petty Cash Log" },
                { id: "BUDGET-04", description: "Process and pay all vendor and crew invoices on time.", priority: "High", riskLevel: "High", consequence: "Vendors walking off the job, halting production.", proof: "Payment Vouchers" },
                { id: "BUDGET-05", description: "Forecast cash flow needs for the upcoming weeks.", priority: "High", riskLevel: "High", consequence: "Production cannot pay its immediate bills.", proof: "Cash Flow Statement" },
                { id: "BUDGET-06", description: "Get approval for any overages before they are incurred.", priority: "High", riskLevel: "High", consequence: "Unauthorized spending blowing the entire budget.", proof: "Overages Approval Form" },
                { id: "BUDGET-07", description: "Manage payroll for all cast and crew.", priority: "High", riskLevel: "High", consequence: "Payroll errors leading to legal issues and strikes.", proof: "Payroll Records" },
                { id: "BUDGET-08", description: "Reconcile all production credit cards.", priority: "High", riskLevel: "High", consequence: "Uncontrolled and unrecorded spending.", proof: "Card Statements" },
                { id: "BUDGET-09", description: "Ensure all financial records are audit-ready.", priority: "High", riskLevel: "High", consequence: "Failure to satisfy investors, distributors, or tax authorities.", proof: "Audit File" },
                { id: "BUDGET-10", description: "Prepare the final cost report at the end of production.", priority: "High", riskLevel: "High", consequence: "Lack of final accounting for the project.", proof: "Final Cost Report" }
            ]
        },
        {
            title: "Post-Production Workflow",
            department: "Post-Production",
            frequency: "Phase-based",
            role: "Post-Production Supervisor",
            summary: "Manages the transition from raw footage to the final delivered project.",
            icon: "scissors",
            tasks: [
                { id: "POST-01", description: "Ingest and back up all raw footage daily.", priority: "High", riskLevel: "High", consequence: "Catastrophic, unrecoverable loss of footage.", proof: "Backup Logs" },
                { id: "POST-02", description: "Generate and distribute dailies for review.", priority: "High", riskLevel: "Medium", consequence: "Inability to verify shoot quality promptly.", proof: "Dailies Distribution Log" },
                { id: "POST-03", description: "Manage the editing workflow from assembly to final cut.", priority: "High", riskLevel: "High", consequence: "Major delays in the release schedule.", proof: "Edit Schedule" },
                { id: "POST-04", description: "Coordinate with VFX vendors, managing plates and delivery schedules.", priority: "High", riskLevel: "High", consequence: "Missed deadlines and massive budget overruns.", proof: "VFX Tracker" },
                { id: "POST-05", description: "Oversee sound design, mixing, and music scoring.", priority: "High", riskLevel: "High", consequence: "Poor audience experience due to bad sound.", proof: "Sound Schedule" },
                { id: "POST-06", description: "Manage the color grading process.", priority: "High", riskLevel: "High", consequence: "Inconsistent visual look across the project.", proof: "Color Grade Schedule" },
                { id: "POST-07", description: "Conduct a final QC of the master file before delivery.", priority: "High", riskLevel: "High", consequence: "Delivery rejected by broadcaster/distributor.", proof: "QC Report" },
                { id: "POST-08", description: "Create all required deliverables for distributors (trailers, posters, etc.).", priority: "High", riskLevel: "High", consequence: "Release delays due to missing technical assets.", proof: "Deliverables List" },
                { id: "POST-09", description: "Archive the final project and all related assets securely.", priority: "High", riskLevel: "High", consequence: "Inability to access assets for future use or re-release.", proof: "Archive Log" },
                { id: "POST-10", description: "Manage the post-production budget and vendor payments.", priority: "High", riskLevel: "High", consequence: "Project exceeds final budget.", proof: "Post Budget Report" }
            ]
        },
        {
            title: "Cast & Crew Management",
            department: "Production/HR",
            frequency: "Ongoing",
            role: "Production Coordinator",
            summary: "Manages all human resources and logistics for the production.",
            icon: "users",
            tasks: [
                { id: "CCM-01", description: "Execute contracts and deal memos for all cast and crew.", priority: "High", riskLevel: "High", consequence: "No legal agreement for work, leading to disputes.", proof: "Signed Contracts" },
                { id: "CCM-02", description: "Arrange and book all travel and accommodation.", priority: "High", riskLevel: "Medium", consequence: "Key talent missing their call time.", proof: "Travel Itineraries" },
                { id: "CCM-03", description: "Coordinate daily transport to and from set.", priority: "High", riskLevel: "High", consequence: "Shoot delays due to transportation failure.", proof: "Transport Schedule" },
                { id: "CCM-04", description: "Ensure meals and crafty services are provided on set.", priority: "High", riskLevel: "Medium", consequence: "Low crew morale and decreased productivity.", proof: "Catering Contract" },
                { id: "CCM-05", description: "Process timesheets and expense reports.", priority: "High", riskLevel: "High", consequence: "Crew disputes over late or inaccurate payments.", proof: "Approved Timesheets" },
                { id: "CCM-06", description: "Handle any cast or crew queries or concerns.", priority: "High", riskLevel: "Medium", consequence: "Unresolved grievances leading to work disruption.", proof: "Communication Log" },
                { id: "CCM-07", description: "Ensure a safe and respectful work environment.", priority: "High", riskLevel: "High", consequence: "Lawsuits and hostile workplace claims.", proof: "HR Policy Compliance" },
                { id: "CCM-08", description: "Manage visa and work permit requirements for international cast/crew.", priority: "High", riskLevel: "High", consequence: "Deportation and legal shutdown of production.", proof: "Visa Documents" },
                { id: "CCM-09", description: "Organize wrap party and distribute wrap gifts.", priority: "Low", riskLevel: "Low", consequence: "Poor ending to production morale.", proof: "Event Plan" },
                { id: "CCM-10", description: "Maintain an updated contact sheet for all personnel.", priority: "High", riskLevel: "Medium", consequence: "Communication breakdown during a crisis.", proof: "Contact Sheet" }
            ]
        }
    ]
};
