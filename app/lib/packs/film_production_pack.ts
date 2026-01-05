
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
                { id: "FP-PPL-08", description: "Final Budget & Schedule: Final shooting budget and schedule approved by all stakeholders.", priority: "High", riskLevel: "Medium", consequence: "Financial overruns, production chaos.", proof: "Signed budget and schedule documents." }
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
                { id: "FP-LM-07", description: "Post-Shoot Cleanup: Location is returned to its original condition after filming.", priority: "High", riskLevel: "Medium", consequence: "Disputes with property owner, loss of security deposit.", proof: "Post-shoot location photos signed off by owner." }
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
                { id: "FP-SS-08", description: "Log and investigate all on-set injuries and near-misses.", priority: "High", riskLevel: "Medium", consequence: "Failure to learn from incidents, repeating unsafe practices.", proof: "Incident report forms." }
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
                { id: "FP-PP-07", description: "QC & Delivery: Final master file undergoes a full technical Quality Control check before delivery.", priority: "High", riskLevel: "High", consequence: "Delivery rejected by broadcaster/distributor.", proof: "Final QC report." }
            ]
        }
    ]
};

  