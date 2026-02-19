
import type { PremiumPack } from "@/lib/premium-packs";

export const film_production_pack: PremiumPack = {
    id: 'film_production_pack',
    title: "Film, TV & OTT Production Pack",
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
    whoIsItFor: ["Film Producers", "Line Producers", "Production Managers", "Heads of Production (OTT)", "Showrunners"],
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
                { id: "PRE-PROD-01", description: "Finalize and lock the shooting script.", priority: "High", riskLevel: "High", consequence: "Changes to the script after planning begins can cause major budget and schedule overruns.", proof: "Locked Script Document" },
                { id: "PRE-PROD-02", description: "Create a detailed script breakdown (scenes, characters, props, locations).", priority: "High", riskLevel: "High", consequence: "The foundation of the entire budget and schedule; errors here will cascade through the whole project.", proof: "Breakdown Sheets" },
                { id: "PRE-PROD-03", description: "Develop a comprehensive production budget.", priority: "High", riskLevel: "High", consequence: "An inaccurate budget can lead to the project running out of money mid-production.", proof: "Budget Document" },
                { id: "PRE-PROD-04", description: "Create a detailed production schedule.", priority: "High", riskLevel: "High", consequence: "A poor schedule leads to inefficiencies, overtime costs, and potential delays.", proof: "Production Schedule" },
                { id: "PRE-PROD-05", description: "Secure all key production crew (DOP, Director, Production Designer).", priority: "High", riskLevel: "High", consequence: "Failure to lock in key crew can delay the start of production.", proof: "Crew Deal Memos" },
                { id: "PRE-PROD-06", description: "Cast all principal actors.", priority: "High", riskLevel: "High", consequence: "The project cannot move forward without a confirmed cast.", proof: "Cast Deal Memos" },
                { id: "PRE-PROD-07", description: "Secure production insurance (E&O, general liability).", priority: "High", riskLevel: "High", consequence: "Operating without insurance is a massive legal and financial risk.", proof: "Insurance Certificates" },
                { id: "PRE-PROD-08", description: "Set up production bank accounts and accounting systems.", priority: "High", riskLevel: "High", consequence: "Inability to manage cash flow and pay vendors/crew.", proof: "Bank Account Details" },
                { id: "PRE-PROD-09", description: "Establish the production office.", priority: "High", riskLevel: "Medium", consequence: "A central hub is needed for coordination and administration.", proof: "Office Lease" },
                { id: "PRE-PROD-10", description: "Develop a health and safety plan for the production.", priority: "High", riskLevel: "High", consequence: "A legal requirement that is essential for protecting the cast and crew.", proof: "Safety Plan Document" }
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
                { id: "LEGAL-01", description: "Secure a complete chain-of-title for the script.", priority: "High", riskLevel: "High", consequence: "A faulty chain-of-title can lead to lawsuits claiming you don't own the rights to the story.", proof: "Chain-of-Title Documents" },
                { id: "LEGAL-02", description: "Conduct a script clearance report to identify potential legal issues.", priority: "High", riskLevel: "High", consequence: "Prevents using brand names, locations, or character names that could lead to lawsuits.", proof: "Script Clearance Report" },
                { id: "LEGAL-03", description: "Obtain life rights agreements for any real people depicted.", priority: "High", riskLevel: "High", consequence: "Failure to do so can lead to defamation lawsuits.", proof: "Life Rights Agreements" },
                { id: "LEGAL-04", description: "Secure Errors & Omissions (E&O) insurance.", priority: "High", riskLevel: "High", consequence: "Required by almost all distributors to protect against lawsuits.", proof: "E&O Insurance Policy" },
                { id: "LEGAL-05", description: "Clear all copyrighted materials (music, art, logos) that appear in the film.", priority: "High", riskLevel: "High", consequence: "Unauthorized use of copyrighted material will lead to expensive legal claims.", proof: "Clearance Licenses" },
                { id: "LEGAL-06", description: "Draft and execute cast and crew contracts.", priority: "High", riskLevel: "High", consequence: "Defines payment, working conditions, and rights, preventing future disputes.", proof: "Signed Contracts" },
                { id: "LEGAL-07", description: "Ensure compliance with all guild and union agreements.", priority: "High", riskLevel: "High", consequence: "Violating union rules can lead to fines and production shutdowns.", proof: "Union Agreement" },
                { id: "LEGAL-08", description: "Verify compliance with child labor laws if minors are employed.", priority: "High", riskLevel: "High", consequence: "A strict legal requirement with severe penalties for violations.", proof: "Child Labor Permit" },
                { id: "LEGAL-09", description: "Draft location agreements and releases.", priority: "High", riskLevel: "High", consequence: "Protects the production from legal claims from the property owner.", proof: "Location Agreements" },
                { id: "LEGAL-10", description: "Register the script with the copyright office.", priority: "High", riskLevel: "Medium", consequence: "Provides a public record of ownership of the intellectual property.", proof: "Copyright Registration" }
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
                { id: "LOC-01", description: "Scout potential locations based on script requirements.", priority: "High", riskLevel: "Medium", consequence: "A poor location can compromise the artistic vision of the film.", proof: "Location Photos/Videos" },
                { id: "LOC-02", description: "Negotiate and finalize location agreements and fees.", priority: "High", riskLevel: "High", consequence: "A verbal agreement can fall through, jeopardizing the entire shoot.", proof: "Signed Location Agreement" },
                { id: "LOC-03", description: "Obtain all necessary filming permits (municipal, police, fire).", priority: "High", riskLevel: "High", consequence: "Filming without a permit can lead to being shut down by authorities, a costly delay.", proof: "Filming Permits" },
                { id: "LOC-04", description: "Conduct a technical recce with key department heads.", priority: "High", riskLevel: "High", consequence: "Failure to do a tech recce can lead to discovering on the shoot day that the location is unsuitable.", proof: "Recce Report" },
                { id: "LOC-05", description: "Arrange for parking, power, and facilities at each location.", priority: "High", riskLevel: "Medium", consequence: "Lack of proper logistics can cause major delays on the shoot day.", proof: "Logistics Plan" },
                { id: "LOC-06", description: "Notify residents and businesses near the location.", priority: "High", riskLevel: "Medium", consequence: "Failure to notify can lead to complaints and disruption during filming.", proof: "Notification Letter" },
                { id: "LOC-07", description: "Plan for weather contingencies.", priority: "High", riskLevel: "High", consequence: "Bad weather can completely derail a shoot without a backup plan.", proof: "Weather Contingency Plan" },
                { id: "LOC-08", description: "Ensure location is safe and secure for cast and crew.", priority: "High", riskLevel: "High", consequence: "An unsafe location can lead to accidents and injuries.", proof: "Safety Assessment" },
                { id: "LOC-09", description: "Restore the location to its original condition after the shoot.", priority: "High", riskLevel: "Medium", consequence: "Failure to do so can lead to legal claims from the property owner and damage to reputation.", proof: "Restoration Photos" },
                { id: "LOC-10", description: "Get a final sign-off from the location owner.", priority: "High", riskLevel: "High", consequence: "Finalizes the agreement and prevents future disputes.", proof: "Sign-off Form" }
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
                { id: "CALL-01", description: "Create the daily call sheet with scenes, cast, and crew call times.", priority: "High", riskLevel: "High", consequence: "An inaccurate call sheet can lead to massive confusion and delays.", proof: "Call Sheet Document" },
                { id: "CALL-02", description: "Include weather forecasts, location address, and hospital details.", priority: "High", riskLevel: "High", consequence: "Missing safety information can be critical in an emergency.", proof: "Call Sheet Document" },
                { id: "CALL-03", description: "Distribute the call sheet to all cast and crew.", priority: "High", riskLevel: "High", consequence: "If people don't receive the call sheet, they don't know when or where to show up.", proof: "Distribution Log" },
                { id: "CALL-04", description: "Confirm receipt of the call sheet with key personnel.", priority: "High", riskLevel: "Medium", consequence: "Ensures everyone is on the same page for the next day.", proof: "Confirmation Log" },
                { id: "CALL-05", description: "Update the schedule based on daily progress.", priority: "High", riskLevel: "High", consequence: "An outdated schedule makes it impossible to manage the production effectively.", proof: "Updated Schedule" },
                { id: "CALL-06", description: "Coordinate with transport for cast and crew pickups.", priority: "High", riskLevel: "High", consequence: "A missed pickup can delay the entire shoot.", proof: "Transport Schedule" },
                { id: "CALL-07", description: "List all required props, costumes, and equipment for the day.", priority: "High", riskLevel: "High", consequence: "Forgetting a key prop can mean an entire scene cannot be shot.", proof: "Call Sheet Document" },
                { id: "CALL-08", description: "Include a detailed meal schedule.", priority: "High", riskLevel: "Medium", consequence: "Failure to provide meals on time is a major cause of crew dissatisfaction.", proof: "Call Sheet Document" },
                { id: "CALL-09", description: "Double-check all information on the call sheet for accuracy.", priority: "High", riskLevel: "High", consequence: "A single error (like a wrong address) can derail the entire day.", proof: "Signed-off Call Sheet" },
                { id: "CALL-10", description: "Archive all call sheets for production records.", priority: "High", riskLevel: "Medium", consequence: "Call sheets are legal documents that record work hours.", proof: "Call Sheet Archive" }
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
                { id: "SAFETY-01", description: "Conduct a daily safety briefing at the start of the shoot.", priority: "High", riskLevel: "High", consequence: "Sets the tone for a safety-conscious day and alerts crew to specific hazards.", proof: "Briefing Attendance" },
                { id: "SAFETY-02", description: "Implement specific protocols for stunts, fire, and other high-risk scenes.", priority: "High", riskLevel: "High", consequence: "Improvising on high-risk scenes is a recipe for disaster (e.g., the Rust shooting).", proof: "High-Risk SOPs" },
                { id: "SAFETY-03", description: "Ensure a qualified medic and first-aid station are on set.", priority: "High", riskLevel: "High", consequence: "A legal requirement and essential for providing immediate care in case of an injury.", proof: "Medic Contract" },
                { id: "SAFETY-04", description: "Inspect all rigging, electricals, and equipment for safety.", priority: "High", riskLevel: "High", consequence: "Faulty equipment can fail and cause serious injuries.", proof: "Safety Inspection Log" },
                { id: "SAFETY-05", description: "Have a clear incident reporting and investigation procedure.", priority: "High", riskLevel: "High", consequence: "To learn from mistakes and prevent them from happening again.", proof: "Incident Report Form" },
                { id: "SAFETY-06", description: "Ensure all crew members are wearing appropriate PPE.", priority: "High", riskLevel: "High", consequence: "Basic protection that can prevent many common set injuries.", proof: "PPE Audit" },
                { id: "SAFETY-07", description: "Manage on-set vehicle and MHE safety.", priority: "High", riskLevel: "High", consequence: "Vehicle accidents are a common cause of serious on-set injuries.", proof: "Vehicle Safety Log" },
                { id: "SAFETY-08", description: "Provide adequate hydration and rest areas for cast and crew.", priority: "High", riskLevel: "Medium", consequence: "Exhausted crew are more likely to make mistakes.", proof: "Rest Area Photos" },
                { id: "SAFETY-09", description: "Secure the set from unauthorized access.", priority: "High", riskLevel: "High", consequence: "Protects the public from on-set hazards and prevents disruption.", proof: "Security Log" },
                { id: "SAFETY-10", description: "Comply with all local health and safety regulations.", priority: "High", riskLevel: "High", consequence: "Non-compliance can lead to fines and production shutdowns.", proof: "Compliance Audit" }
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
                { id: "BUDGET-01", description: "Track all expenses against the approved budget.", priority: "High", riskLevel: "High", consequence: "Without tracking, you can run out of money before the production is finished.", proof: "Cost Report" },
                { id: "BUDGET-02", description: "Generate a weekly cost report for the producers.", priority: "High", riskLevel: "High", consequence: "Provides the key data needed for making financial decisions.", proof: "Weekly Cost Report" },
                { id: "BUDGET-03", description: "Manage and reconcile petty cash on a daily basis.", priority: "High", riskLevel: "High", consequence: "Petty cash is a common area for fraud and mismanagement.", proof: "Petty Cash Log" },
                { id: "BUDGET-04", description: "Process and pay all vendor and crew invoices on time.", priority: "High", riskLevel: "High", consequence: "Late payments can lead to vendors walking off the job, halting production.", proof: "Payment Vouchers" },
                { id: "BUDGET-05", description: "Forecast cash flow needs for the upcoming weeks.", priority: "High", riskLevel: "High", consequence: "Ensures the production doesn't run out of cash to pay its bills.", proof: "Cash Flow Statement" },
                { id: "BUDGET-06", description: "Get approval for any overages before they are incurred.", priority: "High", riskLevel: "High", consequence: "Prevents unauthorized spending that can blow the budget.", proof: "Overages Approval Form" },
                { id: "BUDGET-07", description: "Manage payroll for all cast and crew.", priority: "High", riskLevel: "High", consequence: "Payroll errors are a major source of crew dissatisfaction and legal issues.", proof: "Payroll Records" },
                { id: "BUDGET-08", description: "Reconcile all production credit cards.", priority: "High", riskLevel: "High", consequence: "To track expenses accurately and prevent misuse.", proof: "Card Statements" },
                { id: "BUDGET-09", description: "Ensure all financial records are audit-ready.", priority: "High", riskLevel: "High", consequence: "Essential for investors, distributors, and tax purposes.", proof: "Audit File" },
                { id: "BUDGET-10", description: "Prepare the final cost report at the end of production.", priority: "High", riskLevel: "High", consequence: "The final accounting of how the money was spent.", proof: "Final Cost Report" }
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
                { id: "POST-01", description: "Ingest and back up all raw footage daily.", priority: "High", riskLevel: "High", consequence: "Losing raw footage is a catastrophic, unrecoverable failure.", proof: "Backup Logs" },
                { id: "POST-02", description: "Generate and distribute dailies for review.", priority: "High", riskLevel: "Medium", consequence: "Allows the director and producers to see if they are getting the shots they need.", proof: "Dailies Distribution Log" },
                { id: "POST-03", description: "Manage the editing workflow from assembly to final cut.", priority: "High", riskLevel: "High", consequence: "An inefficient editing process can cause major delays.", proof: "Edit Schedule" },
                { id: "POST-04", description: "Coordinate with VFX vendors, managing plates and delivery schedules.", priority: "High", riskLevel: "High", consequence: "Poor VFX management can lead to missed deadlines and budget overruns.", proof: "VFX Tracker" },
                { id: "POST-05", description: "Oversee sound design, mixing, and music scoring.", priority: "High", riskLevel: "High", consequence: "Sound is half the movie; poor sound design ruins the audience experience.", proof: "Sound Schedule" },
                { id: "POST-06", description: "Manage the color grading process.", priority: "High", riskLevel: "High", consequence: "Color grading is essential for creating the final look of the film.", proof: "Color Grade Schedule" },
                { id: "POST-07", description: "Conduct a final QC of the master file before delivery.", priority: "High", riskLevel: "High", consequence: "The last chance to catch any technical errors before the film is sent to distributors.", proof: "QC Report" },
                { id: "POST-08", description: "Create all required deliverables for distributors (trailers, posters, etc.).", priority: "High", riskLevel: "High", consequence: "Failure to provide correct deliverables can delay the film's release.", proof: "Deliverables List" },
                { id: "POST-09", description: "Archive the final project and all related assets securely.", priority: "High", riskLevel: "High", consequence: "Protects the final asset for future use or re-release.", proof: "Archive Log" },
                { id: "POST-10", description: "Manage the post-production budget and vendor payments.", priority: "High", riskLevel: "High", consequence: "Ensures the project is completed within budget.", proof: "Post Budget Report" }
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
                { id: "CCM-01", description: "Execute contracts and deal memos for all cast and crew.", priority: "High", riskLevel: "High", consequence: "No contract means no legal agreement for work.", proof: "Signed Contracts" },
                { id: "CCM-02", description: "Arrange and book all travel and accommodation.", priority: "High", riskLevel: "Medium", consequence: "Poor logistics leads to a tired and unhappy cast and crew.", proof: "Travel Itineraries" },
                { id: "CCM-03", description: "Coordinate daily transport to and from set.", priority: "High", riskLevel: "High", consequence: "A missed pickup can delay the start of the shoot.", proof: "Transport Schedule" },
                { id: "CCM-04", description: "Ensure meals and crafty services are provided on set.", priority: "High", riskLevel: "Medium", consequence: "\"An army marches on its stomach\"; a hungry crew is an unproductive crew.", proof: "Catering Contract" },
                { id: "CCM-05", description: "Process timesheets and expense reports.", priority: "High", riskLevel: "High", consequence: "Late or inaccurate payments are a major cause of crew disputes.", proof: "Approved Timesheets" },
                { id: "CCM-06", description: "Handle any cast or crew queries or concerns.", priority: "High", riskLevel: "Medium", consequence: "A good production coordinator keeps the cast and crew happy and focused.", proof: "Communication Log" },
                { id: "CCM-07", description: "Ensure a safe and respectful work environment.", priority: "High", riskLevel: "High", consequence: "A hostile work environment can lead to lawsuits and production shutdowns.", proof: "HR Policy Compliance" },
                { id: "CCM-08", description: "Manage visa and work permit requirements for international cast/crew.", priority: "High", riskLevel: "High", consequence: "Failure to do so can result in legal issues and deportation.", proof: "Visa Documents" },
                { id: "CCM-09", description: "Organize wrap party and distribute wrap gifts.", priority: "Low", riskLevel: "Low", consequence: "Important for morale and ending the production on a positive note.", proof: "Event Plan" },
                { id: "CCM-10", description: "Maintain an updated contact sheet for all personnel.", priority: "High", riskLevel: "Medium", consequence: "Essential for communication throughout the production.", proof: "Contact Sheet" }
            ]
        }
    ]
};
