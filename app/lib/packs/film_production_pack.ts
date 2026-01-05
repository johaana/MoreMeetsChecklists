
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
    description: "An end-to-end production toolkit for film and OTT producers to manage everything from legal clearances and location permits to on-set safety and post-production workflows.",
    icon: "film",
    whoIsItFor: ["Film Producers", "Line Producers", "Production Managers", "Heads of Production (OTT)"],
    sampleItems: [
        { text: "Secure your project legally with pre-production checklists for script clearance, life rights, and chain-of-title.", icon: "file-lock" },
        { text: "Streamline location management with SOPs for scouting, permits, and on-location logistics.", icon: "map" },
        { text: "Manage your cast and crew effectively with standardized contracts, call sheets, and travel coordination.", icon: "users" },
        { text: "Ensure a safe set with protocols for stunt coordination, equipment safety, and incident reporting.", icon: "siren" },
        { text: "Keep your budget on track with checklists for cost reporting, vendor payments, and cash flow management.", icon: "banknote" },
        { text: "Create a seamless post-production workflow with SOPs for dailies, editing, VFX handovers, and final delivery.", icon: "scissors" }
    ],
    checklists: [
        {
            title: "Pre-Production & Legal Clearance",
            department: "Legal/Production",
            frequency: "Per Project",
            role: "Line Producer",
            summary: "Ensures all legal and creative rights are secured before principal photography begins.",
            icon: "file-lock",
            tasks: [
                { id: "FP-PPL-01", description: "Script Clearance: Final script reviewed for potential defamation, privacy, or copyright issues.", priority: "High", riskLevel: "High", consequence: "Lawsuits, injunctions halting production.", proof: "Script clearance report from legal counsel." },
                { id: "FP-PPL-02", description: "Chain of Title: Verify and document complete ownership history of the underlying work (book, script).", priority: "High", riskLevel: "High", consequence: "Inability to secure distribution, ownership disputes.", proof: "Chain of Title summary document." },
                { id: "FP-PPL-03", description: "Life Rights: Secure signed agreements if the story is based on a living person.", priority: "High", riskLevel: "High", consequence: "Lawsuits for misappropriation of likeness.", proof: "Signed life rights agreement." },
                { id: "FP-PPL-04", description: "Cast & Crew Contracts: All key cast and crew have signed contracts.", priority: "High", riskLevel: "High", consequence: "Key personnel leaving mid-project, disputes over pay/credit.", proof: "Executed contracts." },
                { id: "FP-PPL-05", description: "E&O Insurance: Errors & Omissions insurance policy is in place.", priority: "High", riskLevel: "High", consequence: "Uncovered legal costs from copyright/defamation claims.", proof: "Certificate of Insurance." },
                { id: "FP-PPL-06", description: "Music Rights: Plan for music clearance (pre-records, score) is established.", priority: "Medium", riskLevel: "Medium", consequence: "Costly post-production music replacement.", proof: "Music budget and clearance plan." },
                { id: "FP-PPL-07", description: "Child Actor Permits: All necessary permits and tutoring plans are in place for minor actors.", priority: "High", riskLevel: "High", consequence: "Violation of labor laws, fines, production shutdown.", proof: "Copies of permits." },
                { id: "FP-PPL-08", description: "Final Budget & Schedule: Final shooting budget and schedule approved by all stakeholders.", priority: "High", riskLevel: "Medium", consequence: "Financial overruns, production chaos.", proof: "Signed budget and schedule documents." },
                { id: "FP-PPL-09", description: "Location Agreements: Secure signed agreements for all filming locations.", priority: "High", riskLevel: "High", consequence: "Disputes with property owners, unexpected costs.", proof: "Signed Location Agreements." },
                { id: "FP-PPL-10", description: "Product Placement/Clearance: Secure agreements for any branded products appearing on screen.", priority: "Medium", riskLevel: "Medium", consequence: "Trademark infringement claims.", proof: "Signed Product Placement Agreements." }
            ]
        },
        {
            title: "Location Management",
            department: "Production",
            frequency: "Per Location",
            role: "Location Manager",
            summary: "Manages the scouting, permitting, and logistics of all filming locations.",
            icon: "map",
            tasks: [
                { id: "FP-LM-01", description: "Scouting: Potential locations scouted, photographed, and presented to director.", priority: "High", riskLevel: "Low", consequence: "Creative vision not met.", proof: "Location scouting reports." },
                { id: "FP-LM-02", description: "Permits: All required filming permits from local authorities (police, municipal, etc.) are secured.", priority: "High", riskLevel: "High", consequence: "Production shut down by authorities, fines.", proof: "Copies of all permits." },
                { id: "FP-LM-03", description: "Location Agreement: Signed agreement with property owner, outlining terms, conditions, and fees.", priority: "High", riskLevel: "High", consequence: "Disputes with property owner, unexpected costs.", proof: "Signed location agreement." },
                { id: "FP-LM-04", description: "Logistics Plan: Plan for parking, power, catering, and restrooms is in place.", priority: "Medium", riskLevel: "Medium", consequence: "On-set delays, crew dissatisfaction.", proof: "Location logistics plan." },
                { id: "FP-LM-05", description: "Risk Assessment: Site-specific risk assessment conducted (e.g., trip hazards, public safety).", priority: "High", riskLevel: "High", consequence: "Accidents, injuries.", proof: "Signed risk assessment form." },
                { id: "FP-LM-06", description: "Resident Notification: Notify all nearby residents/businesses of filming schedule and potential disruption.", priority: "Medium", riskLevel: "Medium", consequence: "Complaints, disruption of filming.", proof: "Copy of notification letter." },
                { id: "FP-LM-07", description: "Post-Shoot Cleanup: Location is returned to its original condition after filming.", priority: "High", riskLevel: "Medium", consequence: "Disputes with property owner, loss of security deposit.", proof: "Post-shoot location photos signed off by owner." },
                { id: "FP-LM-08", description: "Technical Scout (Recce): Key department heads (Director, DP, Production Designer) visit final locations to plan technical setup.", priority: "High", riskLevel: "Medium", consequence: "Technical problems on the shoot day that could have been foreseen.", proof: "Tech Scout Report." },
                { id: "FP-LM-09", description: "Weather Contingency: Have a backup indoor location or weather plan for all exterior shoots.", priority: "High", riskLevel: "High", consequence: "Losing an entire shoot day due to bad weather.", proof: "Weather Contingency Plan." },
                { id: "FP-LM-10", description: "Secure location access for pre-lighting or set dressing days.", priority: "High", riskLevel: "Medium", consequence: "Delays in preparing the location for the shoot.", proof: "Access Schedule." }
            ]
        },
        {
            title: "On-Set Safety (EHS)",
            department: "Production/Safety",
            frequency: "Daily",
            role: "Safety Officer/1st AD",
            summary: "Ensures a safe working environment for all cast and crew during filming.",
            icon: "siren",
            tasks: [
                { id: "FP-SS-01", description: "Conduct a daily safety briefing (toolbox talk) before start of shooting.", priority: "High", riskLevel: "Medium", consequence: "Crew unaware of daily risks.", proof: "Safety briefing attendance sheet." },
                { id: "FP-SS-02", description: "Ensure first aid station is stocked and a certified medic is present on set.", priority: "High", riskLevel: "High", consequence: "Delayed medical response to injuries.", proof: "Medic's sign-in sheet." },
                { id: "FP-SS-03", description: "Check that all fire extinguishers are accessible and inspected.", priority: "High", riskLevel: "High", consequence: "Inability to control a small fire.", proof: "Fire extinguisher inspection log." },
                { id: "FP-SS-04", description: "Verify all electrical wiring and distribution boxes are safe and not overloaded.", priority: "High", riskLevel: "High", consequence: "Electrical shock, fire.", proof: "Gaffer's daily sign-off." },
                { id: "FP-SS-05", description: "Ensure all walkways and emergency exits are clear of equipment and cables.", priority: "High", riskLevel: "High", consequence: "Trip hazards, blocked evacuation routes.", proof: "Dated photo of clear walkways." },
                { id: "FP-SS-06", description: "Stunt Safety: Review stunt plan and risk assessment with stunt coordinator before the scene.", priority: "High", riskLevel: "High", consequence: "Stunt-related injury or fatality.", proof: "Signed stunt safety briefing." },
                { id: "FP-SS-07", description: "Weapons Handling: All prop weapons are controlled, logged, and handled by the designated armorer.", priority: "High", riskLevel: "High", consequence: "Accidental discharge, serious injury or death.", proof: "Armorer's log." },
                { id: "FP-SS-08", description: "Log and investigate all on-set injuries and near-misses.", priority: "High", riskLevel: "Medium", consequence: "Failure to learn from incidents, repeating unsafe practices.", proof: "Incident report forms." },
                { id: "FP-SS-09", description: "Enforce crew working hours and rest periods to prevent fatigue-related accidents.", priority: "High", riskLevel: "Medium", consequence: "Exhausted crew are more likely to make dangerous mistakes.", proof: "Daily Time Sheets." },
                { id: "FP-SS-10", description: "Ensure adequate hydration stations are available, especially on outdoor shoots.", priority: "High", riskLevel: "Medium", consequence: "Heatstroke and dehydration among crew.", proof: "Visual check of hydration stations." }
            ]
        },
        {
            title: "Post-Production Workflow",
            department: "Post-Production",
            frequency: "Daily/Weekly",
            role: "Post-Production Supervisor",
            summary: "Manages the flow of data and creative work from set to final delivery.",
            icon: "scissors",
            tasks: [
                { id: "FP-PP-01", description: "Dailies/Rushes: All footage from the previous day is ingested, backed up, and transcoded for editorial.", priority: "High", riskLevel: "High", consequence: "Loss of original camera footage, editorial delays.", proof: "Dailies report." },
                { id: "FP-PP-02", description: "Data Backup: A minimum of two copies of all original camera files (OCF) exist on separate physical media.", priority: "High", riskLevel: "High", consequence: "Catastrophic data loss.", proof: "Backup verification log." },
                { id: "FP-PP-03", description: "Editorial: Editor's cut of scenes are reviewed by the director on schedule.", priority: "High", riskLevel: "Low", consequence: "Creative process falls behind schedule.", proof: "Editorial review schedule." },
                { id: "FP-PP-04", description: "VFX Turnover: Shots for VFX are identified, logged, and turned over to the VFX vendor with all necessary data.", priority: "High", riskLevel: "Medium", consequence: "VFX delays, incorrect work.", proof: "VFX turnover sheet." },
                { id: "FP-PP-05", description: "Sound Design & Mix: Audio is synced, edited, and prepared for sound design and mixing.", priority: "Medium", riskLevel: "Low", consequence: "Post-production sound delays.", proof: "Audio turnover to sound department." },
                { id: "FP-PP-06", description: "Color Grading: Picture lock is achieved and files are prepared for color grading.", priority: "High", riskLevel: "Low", consequence: "Color grading cannot start on time.", proof: "Picture lock sign-off." },
                { id: "FP-PP-07", description: "QC & Delivery: Final master file undergoes a full technical Quality Control check before delivery.", priority: "High", riskLevel: "High", consequence: "Delivery rejected by broadcaster/distributor.", proof: "Final QC report." },
                { id: "FP-PP-08", description: "Review post-production schedule and track progress against milestones.", priority: "High", riskLevel: "Medium", consequence: "Delays in post-production can impact the release date.", proof: "Post-production schedule tracker." },
                { id: "FP-PP-09", description: "Manage deliverables list (trailers, posters, textless masters).", priority: "High", riskLevel: "Medium", consequence: "Failure to provide all required assets to the distributor.", proof: "Deliverables checklist." },
                { id: "FP-PP-10", description: "Archive the final project, including all assets and project files.", priority: "High", riskLevel: "High", consequence: "Inability to make future changes or re-release the project.", proof: "Archive confirmation report." }
            ]
        },
        {
            title: "Cast & Crew Management",
            department: "Production",
            frequency: "Daily",
            role: "Production Manager",
            summary: "Manages all logistical aspects related to the cast and crew.",
            icon: "users",
            tasks: [
                { id: "FP-CCM-01", description: "Prepare and distribute daily call sheets with schedule, location, and contact information.", priority: "High", riskLevel: "High", consequence: "Crew arrives late or at the wrong location, causing major delays.", proof: "Copy of daily call sheet." },
                { id: "FP-CCM-02", description: "Arrange and confirm all cast and crew transport to and from set.", priority: "High", riskLevel: "Medium", consequence: "Key talent or crew unable to get to set on time.", proof: "Transport schedule." },
                { id: "FP-CCM-03", description: "Arrange and confirm accommodation for out-of-town cast and crew.", priority: "High", riskLevel: "Low", consequence: "Crew dissatisfaction, logistical issues.", proof: "Hotel booking confirmations." },
                { id: "FP-CCM-04", description: "Ensure cast and crew payroll is processed accurately and on time.", priority: "High", riskLevel: "High", consequence: "Legal issues, crew dissatisfaction and potential walk-outs.", proof: "Payroll processing confirmation." },
                { id: "FP-CCM-05", description: "Manage per diems and other expense reimbursements.", priority: "Medium", riskLevel: "Medium", consequence: "Disputes over expenses, poor morale.", proof: "Expense reimbursement records." },
                { id: "FP-CCM-06", description: "Ensure vanity vans and green rooms are clean, stocked, and ready for talent.", priority: "High", riskLevel: "Low", consequence: "Unhappy lead actors can cause significant delays.", proof: "Green room checklist." },
                { id: "FP-CCM-07", description: "Coordinate with agents and managers regarding artist schedules and requirements.", priority: "High", riskLevel: "Medium", consequence: "Scheduling conflicts, misunderstandings.", proof: "Communication log." },
                { id: "FP-CCM-08", description: "Ensure compliance with all union agreements and labor laws.", priority: "High", riskLevel: "High", consequence: "Fines, penalties, and production shutdowns.", proof: "Union compliance checklist." },
                { id: "FP-CCM-09", description: "Manage actor release forms for all on-screen talent.", priority: "High", riskLevel: "High", consequence: "Legal inability to use an actor's performance.", proof: "Signed Release Forms." },
                { id: "FP-CCM-10", description: "Distribute scripts and script revisions to all relevant cast and crew.", priority: "High", riskLevel: "Medium", consequence: "Actors and crew working from outdated scripts.", proof: "Script Distribution Log." }
            ]
        },
        {
            title: "Production Budget & Cost Control",
            department: "Production/Finance",
            frequency: "Weekly",
            role: "Line Producer",
            summary: "Tracks all production spending to ensure the project stays on budget.",
            icon: "banknote",
            tasks: [
                { id: "FP-BCC-01", description: "Generate a weekly cost report comparing actual spend vs. budget.", priority: "High", riskLevel: "High", consequence: "Inability to control overspending until it's too late.", proof: "Weekly cost report." },
                { id: "FP-BCC-02", description: "Approve all purchase orders (POs) before any spending occurs.", priority: "High", riskLevel: "High", consequence: "Unauthorized spending by departments.", proof: "Signed POs." },
                { id: "FP-BCC-03", description: "Process and verify all vendor and supplier invoices.", priority: "High", riskLevel: "Medium", consequence: "Paying incorrect or fraudulent invoices.", proof: "Invoice payment records." },
                { id: "FP-BCC-04", description: "Manage the production's petty cash float and reconcile it weekly.", priority: "High", riskLevel: "Medium", consequence: "Petty cash theft or misuse.", proof: "Petty cash reconciliation form." },
                { id: "FP-BCC-05", description: "Forecast final cost to completion (EFC) weekly.", priority: "High", riskLevel: "High", consequence: "Leadership is unaware of a potential budget overrun until the end.", proof: "EFC report." },
                { id: "FP-BCC-06", description: "Review departmental spending and identify areas of overspend.", priority: "High", riskLevel: "Medium", consequence: "Inability to take corrective action on departmental budgets.", proof: "Departmental budget review minutes." },
                { id: "FP-BCC-07", description: "Negotiate deals with all major vendors and rental houses.", priority: "High", riskLevel: "Low", consequence: "Paying more than necessary for equipment and services.", proof: "Vendor contracts." },
                { id: "FP-BCC-08", description: "Provide all necessary documentation for production insurance claims.", priority: "High", riskLevel: "High", consequence: "Inability to recover costs after an insured event.", proof: "Insurance claim file." },
                { id: "FP-BCC-09", description: "Ensure all crew timecards are submitted and approved on time.", priority: "High", riskLevel: "High", consequence: "Delays and errors in payroll.", proof: "Approved Timecards." },
                { id: "FP-BCC-10", description: "Track rental equipment usage to avoid late return fees.", priority: "High", riskLevel: "Medium", consequence: "Unnecessary costs from poor equipment management.", proof: "Rental Log." }
            ]
        },
        {
            title: "Art Department & Set Design",
            department: "Art",
            frequency: "Per Set",
            role: "Production Designer",
            summary: "Manages the creation of all sets and props for the production.",
            icon: "brush",
            tasks: [
                { id: "FP-AD-01", description: "Finalize set designs and get approval from the director.", priority: "High", riskLevel: "Low", consequence: "Building a set that doesn't meet the director's creative vision.", proof: "Signed set design drawings." },
                { id: "FP-AD-02", description: "Create a budget for the art department.", priority: "High", riskLevel: "Medium", consequence: "Overspending on set construction and props.", proof: "Art department budget." },
                { id: "FP-AD-03", description: "Source and/or construct all props required for each scene.", priority: "High", riskLevel: "Medium", consequence: "Missing props can halt filming.", proof: "Props list." },
                { id: "FP-AD-04", description: "Oversee set construction to ensure it is safe and built to standard.", priority: "High", riskLevel: "High", consequence: "A poorly constructed set can collapse, causing injury.", proof: "Set construction safety sign-off." },
                { id: "FP-AD-05", description: "Manage a props inventory and continuity log.", priority: "High", riskLevel: "Medium", consequence: "Continuity errors (e.g., a prop disappearing between shots).", proof: "Props continuity photos and log." },
                { id: "FP-AD-06", description: "Ensure all sets are dressed and ready before the shooting crew arrives.", priority: "High", riskLevel: "High", consequence: "Delays in shooting.", proof: "Set readiness sign-off." },
                { id: "FP-AD-07", description: "Manage the 'striking' (dismantling) of sets after use.", priority: "High", riskLevel: "Low", consequence: "Delays in vacating a location, potential penalties.", proof: "Set strike schedule." },
                { id: "FP-AD-08", description: "Ensure any rented props or set pieces are returned in good condition.", priority: "Medium", riskLevel: "Medium", consequence: "Financial loss from damaged rentals.", proof: "Rental return form." },
                { id: "FP-AD-09", description: "Ensure all set materials are fire-retardant or treated.", priority: "High", riskLevel: "High", consequence: "Major fire hazard on set.", proof: "Fire Retardant Certificates." },
                { id: "FP-AD-10", description: "Coordinate with the Director of Photography on colors and textures.", priority: "Medium", riskLevel: "Low", consequence: "The set does not look right on camera.", proof: "Design Meeting Minutes." }
            ]
        },
        {
            title: "Catering & Craft Services",
            department: "Administration",
            frequency: "Daily",
            role: "Catering Manager",
            summary: "Ensures the cast and crew are provided with safe, hygienic, and timely meals.",
            icon: "utensils",
            tasks: [
                { id: "FP-CCS-01", description: "Ensure all meals are served on time according to the shoot schedule.", priority: "High", riskLevel: "Medium", consequence: "A delay in lunch break can cause major shooting delays.", proof: "Service time log." },
                { id: "FP-CCS-02", description: "Verify food safety and hygiene standards of the catering vendor.", priority: "High", riskLevel: "High", consequence: "A food poisoning outbreak can shut down the entire production.", proof: "Catering vendor's food license and kitchen audit." },
                { id: "FP-CCS-03", description: "Provide options for all dietary requirements (e.g., vegetarian, vegan, allergies).", priority: "High", riskLevel: "Medium", consequence: "Crew dissatisfaction, potential allergic reactions.", proof: "Menu plan." },
                { id: "FP-CCS-04", description: "Ensure drinking water is always available on set.", priority: "High", riskLevel: "High", consequence: "Dehydration, especially on outdoor shoots.", proof: "Visual check of water stations." },
                { id: "FP-CCS-05", description: "Maintain cleanliness of the dining and craft service areas.", priority: "High", riskLevel: "Medium", consequence: "Pest attraction, unhygienic conditions.", proof: "Cleaning log." },
                { id: "FP-CCS-06", description: "Manage waste disposal from catering services.", priority: "Medium", riskLevel: "Low", consequence: "Environmental issues, unclean set.", proof: "Waste disposal plan." },
                { id: "FP-CCS-07", description: "Get feedback from cast and crew on food quality.", priority: "Low", riskLevel: "Low", consequence: "Poor morale due to bad food.", proof: "Feedback forms." },
                { id: "FP-CCS-08", description: "Reconcile catering bills against the number of meals served.", priority: "High", riskLevel: "Medium", consequence: "Overpaying for catering services.", proof: "Catering invoice reconciliation." },
                { id: "FP-CCS-09", description: "Ensure craft service table is stocked throughout the day.", priority: "Medium", riskLevel: "Low", consequence: "Keeps crew energy and morale up.", proof: "Visual Check." },
                { id: "FP-CCS-10", description: "Communicate meal times clearly on the daily call sheet.", priority: "High", riskLevel: "Low", consequence: "Confusion and delays during meal breaks.", proof: "Call Sheet." }
            ]
        }
    ]
};

  

    

    
