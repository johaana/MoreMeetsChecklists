
import React from 'react';
import { HandCoins, Shield, TrendingUp, Users, Bus, Anchor, Trophy, Briefcase, FileCheck, Recycle, Drama } from 'lucide-react';

export const painPointsContent = {
    Hospitality: {
        title: "The Business Case for Operational Excellence",
        points: [
            { icon: <Users />, title: "Inconsistent Guest Experience", description: "Standardize every touchpoint, from check-in to room service, ensuring every guest receives the same 5-star treatment, every time. This builds loyalty and drives positive reviews." },
            { icon: <HandCoins />, title: "Revenue Leakage & Cost Overruns", description: "Plug financial leaks by tracking minibar consumption accurately, preventing wastage in F&B, and implementing preventative maintenance to avoid costly emergency repairs." },
            { icon: <Shield />, title: "Compliance Nightmares & Safety Risks", description: "Navigate complex safety regulations with ease. Our checklists ensure you're always compliant with fire safety, food hygiene (HACCP), and security protocols, protecting you from fines and reputational damage." },
            { icon: <TrendingUp />, title: "Inefficient Operations & Staff Turnover", description: "Empower your team with clear, step-by-step SOPs. This reduces training time, minimizes errors, and creates a less stressful work environment, leading to higher staff retention." }
        ]
    },
    Corporate: {
        title: "Why This Checklist Is Your New Strategic Asset",
        points: [
            { icon: <TrendingUp />, title: "Inefficient Use of Company Resources", description: "Our facility management checklists optimize everything from energy consumption to vendor contracts, cutting operational costs and improving your bottom line." },
            { icon: <Shield />, title: "Cybersecurity & Data Breach Risks", description: "Prevent data breaches with protocols for vendor network access, remote work device security, and proper employee offboarding, closing critical security gaps." },
            { icon: <Users />, title: "Failed Product Launches & Messy Events", description: "Execute flawless product launches and corporate events by managing every detail, from venue booking and AV checks to press kits and social media campaigns." },
            { icon: <HandCoins />, title: "Poor Employee Onboarding & Early Turnover", description: "Create a structured and welcoming onboarding experience. Our checklists ensure new hires have the access, information, and support they need to become productive members of the team from day one." }
        ]
    },
    Retail: {
        title: "The Business Case for Retail Excellence",
        points: [
            { icon: <Shield />, title: "Inventory Shrinkage & Return Fraud", description: "Implement ironclad security protocols for high-value items, serial number tracking, and fitting room management to directly protect your bottom line from theft." },
            { icon: <Users />, title: "Inconsistent Customer Experience", description: "Standardize your sales process, visual merchandising, and technical support to ensure every shopper receives the same high-quality experience, building brand loyalty." },
            { icon: <TrendingUp />, title: "Lost Sales Due to Stockouts or Inaccuracy", description: "Streamline your inventory management, from receiving and stocking to daily audits and master data accuracy, ensuring popular items are always available." },
            { icon: <HandCoins />, title: "Operational Inefficiencies", description: "Optimize everything from delivery scheduling to managing damaged goods, turning operational friction into profitability and smooth customer fulfillment." }
        ]
    },
    Healthcare: {
         title: "The Business Case for Clinical & Operational Excellence",
         points: [
            { icon: <Shield />, title: "Patient Safety & Medication Errors", description: "Our checklists for pharmacies and labs enforce strict verification protocols (e.g., 'Look-Alike, Sound-Alike' drugs) to minimize the risk of dangerous errors and protect your patients." },
            { icon: <TrendingUp />, title: "Compliance & Audit Failures (NABH/JCI/NABL)", description: "Navigate complex healthcare regulations with confidence. Our checklists ensure you are always prepared for audits, covering everything from infection control to documentation." },
            { icon: <Users />, title: "Data Integrity & Confidentiality Breaches", description: "Implement robust protocols for handling patient information and ensuring data consistency between LIS, HIS, and EMR, building patient trust and preventing diagnostic errors." },
            { icon: <HandCoins />, title: "Operational Inefficiencies & Delays in Care", description: "Standardize critical workflows in your ER, OT, and diagnostic labs. This reduces bottlenecks, minimizes sample rejection, and ensures patients receive timely, high-quality care." }
         ]
    },
     Education: {
         title: "The Business Case for a Safer, More Organized Campus",
         points: [
            { icon: <Shield />, title: "Student Safety & Security Risks", description: "Implement a robust safety framework covering everything from daily campus patrols and visitor verification to student dismissal, bus safety, and emergency drills, ensuring a secure environment." },
            { icon: <TrendingUp />, title: "Liability & Compliance Issues", description: "Proactively manage risks by ensuring all safety equipment is functional, playgrounds are hazard-free, and emergency procedures are regularly practiced, protecting your institution from legal and financial liability." },
            { icon: <HandCoins />, title: "Operational Chaos & Inefficiency", description: "Standardize daily operations, from opening procedures and classroom safety checks to managing field trips, freeing up administrative time to focus on educational outcomes rather than daily issues." },
            { icon: <Users />, title: "Negative Parent Perception & Trust", description: "Demonstrate a clear, verifiable commitment to safety and organization. A well-run, secure campus builds deep trust and confidence with parents, a key factor in school choice and reputation." }
         ]
    },
    Manufacturing: {
        title: "The Business Case for a Safer, More Productive Plant",
        points: [
            { icon: <Shield />, title: "Worker Safety & Catastrophic Accidents", description: "Implement life-saving protocols like Lock-Out Tag-Out (LOTO) and Permit-to-Work systems. Our checklists prevent injuries, ensure EHS compliance, and create a culture of safety." },
            { icon: <TrendingUp />, title: "Unplanned Downtime & Production Loss", description: "Shift from reactive repairs to data-driven predictive maintenance. Our checklists help you analyze sensor data, avert failures before they happen, and maximize machine uptime." },
            { icon: <HandCoins />, title: "Quality Control Failures & Costly Rework", description: "Prevent defects at the source with robust protocols for raw material inspection, critical spares verification, and tool calibration, reducing waste and improving first-pass yield." },
            { icon: <Users />, title: "Supply Chain Vulnerabilities", description: "Test your resilience with supply chain disruption drills. Our checklists help you identify weaknesses in your logistics and build a more robust, agile production plan." }
        ]
    },
    Events: {
        title: "The Business Case for Flawless Event Execution",
        points: [
            { icon: <Trophy />, title: "On-Stage Failures & Technical Glitches", description: "Avoid event-killing disasters. Our mandatory technical rehearsal and AV checklists ensure every microphone, presentation, and video works perfectly when the spotlight is on." },
            { icon: <Shield />, title: "Crowd Safety & Security Risks", description: "Manage large crowds effectively with protocols for entry screening, real-time density monitoring, and emergency response, ensuring a safe experience for every attendee." },
            { icon: <HandCoins />, title: "Vendor Miscommunication & Budget Overruns", description: "Our 'Sales-to-Ops Handover' and 'Critical Vendor Confirmation' checklists ensure what you promise the client is what gets delivered, preventing costly last-minute surprises." },
            { icon: <TrendingUp />, title: "Poor Fan & Athlete Experience", description: "From ensuring the field of play is safe for athletes to optimizing concession stand flow for fans, our checklists cover every detail that contributes to a world-class event." }
        ]
    },
    Entertainment: {
        title: "The Business Case for Unforgettable Entertainment",
        points: [
            { icon: <TrendingUp />, title: "Inconsistent Guest Experience", description: "From the moment a ticket is scanned to the final encore, standardize every touchpoint to create a consistently high-quality and memorable experience for every guest." },
            { icon: <Shield />, title: "Safety Lapses & Liability", description: "Manage the unique safety challenges of entertainment venues, from ride maintenance in theme parks to crowd control at concerts, protecting both your guests and your business." },
            { icon: <Drama />, title: "Technical Failures & Show-Stoppers", description: "Ensure the show always goes on. Our checklists for projection, sound, and lighting systems prevent technical glitches that can ruin a performance and disappoint an audience." },
            { icon: <HandCoins />, title: "Revenue Leakage & Inefficiency", description: "Optimize everything from concession stand inventory and ticketing operations to staffing levels for peak and off-peak hours, maximizing profitability." }
        ]
    },
    Personal: {
        title: "The Business Case for an Organized Life",
        points: [
            { icon: <TrendingUp />, title: "Reduce Stress & Mental Overload", description: "Stop trying to remember everything. Our personal checklists for travel and moving turn chaotic events into calm, manageable processes, letting you focus on what matters." },
            { icon: 's business from compliance issues and your customers from foodborne illness.`,
        relatedPackId: `restaurant_operations_checklist`,
        whoIsItFor: [`Restaurant Owners`, `Head Chefs`, `Kitchen Managers`, `Food Safety Officers`],
        painPoints: [
            {
                title: `Prevent Food Safety Violations`,
                description: `Ensures all critical temperatures, sanitation, and hygiene standards are met before the first meal is even prepped, preventing failed health inspections.`
            },
            {
                title: `Reduce Costly Food Spoilage`,
                description: `By verifying refrigerator and freezer temperatures at the start of each day, you can catch equipment failures early and prevent the loss of thousands in inventory.`
            },
            {
                title: `Standardize Your Kitchen Operations`,
                description: `Empower your team with a clear, step-by-step process, ensuring that safety standards are consistently met, regardless of who is opening the kitchen.`
            }
        ],
        tasks: [
            { id: 'KO-01', description: 'Verify all surfaces (prep tables, cutting boards) are sanitized.', priority: 'High', riskLevel: 'High', proof: 'Sanitization Log', location: 'Kitchen' },
            { id: 'KO-02', description: 'Check temperatures of all refrigerators and freezers; log readings.', priority: 'High', riskLevel: 'High', proof: 'Temperature Log', location: 'Kitchen' },
            { id: 'KO-03', description: 'Ensure handwashing stations are stocked with soap, paper towels, and hot water.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
            { id: 'KO-04', description: 'Calibrate food thermometers using ice-water method.', priority: 'High', riskLevel: 'High', proof: 'Calibration Log', location: 'Kitchen' },
            { id: 'KO-05', description: 'Check sanitizer concentration using test strips and log the result.', priority: 'High', riskLevel: 'High', proof: 'Sanitizer Log', location: 'Kitchen' },
            { id: 'KO-06', description: 'Visually inspect for any signs of pests (droppings, etc.) and report if found.', priority: 'High', riskLevel: 'High', proof: 'Pest Log', location: 'Kitchen' },
            { id: 'KO-07', description: 'Ensure all cooking equipment is clean and in working order.', priority: 'Medium', riskLevel: 'Medium', proof: 'Visual Check', location: 'Kitchen' },
            { id: 'KO-08', description: 'Check that the dishwashing machine is reaching correct sanitation temperatures.', priority: 'High', riskLevel: 'High', proof: 'Temp Log', location: 'Dishwashing Area' },
            { id: 'KO-09', description: 'Verify proper FIFO (First-In, First-Out) rotation in all storage areas.', priority: 'High', riskLevel: 'Medium', proof: 'Date Check', location: 'Walk-in/Pantry' },
            { id: 'KO-10', description: 'Confirm all previously prepared food items are properly labeled with date and time.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Audit', location: 'Walk-in' },
            { id: 'KO-11', description: 'Check that the 3-compartment sink is set up correctly (wash, rinse, sanitize).', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Dishwashing Area' },
            { id: 'KO-12', description: 'Confirm with all kitchen staff that they are fit for duty (no illness).', priority: 'High', riskLevel: 'High', proof: 'Staff Confirmation Log', location: 'Kitchen' }
        ]
    },
    {
        id: 'surgical-safety',
        title: "Surgical Safety Checklist (WHO Aligned)",
        priceINR: 1999,
        paymentId: "pl_ROLnfbmEpZzgZZ",
        category: "Healthcare",
        icon: <Hospital />,
        description: "A life-saving, three-phase protocol (Sign In, Time Out, Sign Out) based on WHO guidelines to prevent surgical errors.",
        longDescription: "In the high-stakes environment of an operating room, there is no margin for error. This checklist operationalizes the globally recognized WHO Surgical Safety guidelines into a clear, actionable protocol for your team. It covers the critical pre-operative 'Sign In', the pre-incision 'Time Out', and the post-operative 'Sign Out', ensuring that every member of the surgical team is aligned on patient identity, surgical site, and procedural details. Implementing this checklist is one of the most effective single actions a hospital can take to improve patient safety and reduce surgical complications.",
        relatedPackId: "healthcare_compliance_suite",
        whoIsItFor: ["Hospital COOs", "Chief Medical Officers", "Heads of Quality & Compliance", "OT In-charges"],
        painPoints: [
            {
                title: "Prevent 'Never Events'",
                description: "Systematically eliminates risks of wrong-patient, wrong-site, or wrong-procedure surgeries, protecting both patients and your hospital's reputation."
            },
            {
                title: "Improve Team Communication",
                description: "The 'Time Out' phase mandates a pause for the entire surgical team to verbally confirm critical details, breaking down silos and fostering a culture of shared responsibility."
            },
            {
                title: "Ensure Audit-Ready Compliance",
                description: "Provides clear, documented evidence of adherence to NABH, JCI, and other international patient safety standards, making audits smoother and less stressful."
            }
        ],
        tasks: [
            { id: 'SS-SI-01', description: '[Sign In] Patient has confirmed identity, site, procedure, and consent.', priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation', location: 'Anesthesia Area' },
            { id: 'SS-SI-02', description: '[Sign In] Site is marked.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Anesthesia Area' },
            { id: 'SS-SI-03', description: '[Sign In] Anesthesia safety check completed.', priority: 'High', riskLevel: 'High', proof: 'Machine Checklist', location: 'Anesthesia Area' },
            { id: 'SS-SI-04', description: '[Sign In] Pulse oximeter is on the patient and functioning.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Anesthesia Area' },
            { id: 'SS-SI-05', description: '[Sign In] Does the patient have a known allergy?', priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation', location: 'Anesthesia Area' },
            { id: 'SS-SI-06', description: '[Sign In] Difficult airway or aspiration risk?', priority: 'High', riskLevel: 'High', proof: 'Discussion', location: 'Anesthesia Area' },
            { id: 'SS-TO-01', description: '[Time Out] All team members have introduced themselves by name and role.', priority: 'High', riskLevel: 'Medium', proof: 'Verbal Confirmation', location: 'Operating Room' },
            { id: 'SS-TO-02', description: '[Time Out] Surgeon, Anesthesia Professional, and Nurse verbally confirm patient, site, and procedure.', priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation', location: 'Operating Room' },
            { id: 'SS-TO-03', description: '[Time Out] Anticipated critical events (blood loss, duration, etc.) are discussed.', priority: 'High', riskLevel: 'High', proof: 'Discussion', location: 'Operating Room' },
            { id: 'SS-TO-04', description: '[Time Out] Has antibiotic prophylaxis been given within the last 60 minutes?', priority: 'High', riskLevel: 'High', proof: 'Verbal Confirmation', location: 'Operating Room' },
            { id: 'SS-TO-05', description: '[Time Out] Is essential imaging displayed?', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Operating Room' },
            { id: 'SS-SO-01', description: '[Sign Out] Nurse verbally confirms the name of the procedure.', priority: 'High', riskLevel: 'Medium', proof: 'Verbal Confirmation', location: 'Operating Room' },
            { id: 'SS-SO-02', description: '[Sign Out] Completion of instrument, sponge, and needle counts is confirmed.', priority: 'High', riskLevel: 'High', proof: 'Count Sheet', location: 'Operating Room' },
            { id: 'SS-SO-03', description: '[Sign Out] Specimen is correctly labeled (including patient name).', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Operating Room' },
            { id: 'SS-SO-04', description: '[Sign Out] Are there any equipment problems to be addressed?', priority: 'Medium', riskLevel: 'Medium', proof: 'Discussion', location: 'Operating Room' },
            { id: 'SS-SO-05', description: '[Sign Out] Key concerns for recovery and management of this patient are reviewed.', priority: 'High', riskLevel: 'Medium', proof: 'Discussion', location: 'Operating Room' }
        ]
    },
    {
        id: 'lock-out-tag-out',
        title: "Lock-Out Tag-Out (LOTO) Procedure",
        priceINR: 1999,
        paymentId: "pl_ROLnfbmEpZzgZZ",
        category: "Manufacturing",
        icon: <Lock />,
        description: "A crucial safety protocol to ensure machinery is properly de-energized and cannot be restarted during maintenance or repair.",
        longDescription: "The unexpected startup of machinery during service is one of the most severe industrial hazards. This checklist provides a step-by-step procedure for isolating and de-energizing equipment, covering the identification of energy sources, application of locks and tags, verification of zero-energy state, and the safe re-energizing process. This is not just a best practice; it's a life-saving system that is essential for OSHA/EHS compliance and protecting your most valuable asset: your employees.",
        relatedPackId: "manufacturing_plant_pack",
        whoIsItFor: ["Plant Heads", "Production Managers", "EHS Officers", "Maintenance Supervisors"],
        painPoints: [
            {
                title: "Prevent Fatal Accidents",
                description: "Provides a verifiable, systematic process to eliminate the risk of electrocution, crushing, or other severe injuries to maintenance staff."
            },
            {
                title: "Ensure Regulatory Compliance",
                description: "Adhering to a formal LOTO procedure is a mandatory requirement by most occupational safety bodies. This checklist ensures you are compliant."
            },
            {
                title: "Create a Culture of Safety",
                description: "By implementing a non-negotiable safety protocol like LOTO, you send a powerful message to your entire workforce that safety comes first."
            }
        ],
        tasks: [
            { id: 'LOTO-01', description: 'Conduct a pre-job briefing to discuss the scope of work and energy sources.', priority: 'High', riskLevel: 'High', proof: 'Briefing Sign-off', location: 'Machine' },
            { id: 'LOTO-02', description: 'Identify all energy sources for the machine (electrical, pneumatic, hydraulic).', priority: 'High', riskLevel: 'High', proof: 'Energy Source List', location: 'Machine' },
            { id: 'LOTO-03', description: 'Inform all affected employees that a LOTO procedure is being initiated.', priority: 'High', riskLevel: 'Medium', proof: 'Verbal Confirmation', location: 'Area' },
            { id: 'LOTO-04', description: 'Shut down the machine using the normal stopping procedure.', priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Machine' },
            { id: 'LOTO-05', description: 'Isolate machine from its energy sources.', priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Energy Source' },
            { id: 'LOTO-06', description: 'Apply lock and tag to the energy isolating device.', priority: 'High', riskLevel: 'High', proof: 'Photo', location: 'Energy Source' },
            { id: 'LOTO-07', description: 'For group LOTO, ensure every worker applies their personal lock.', priority: 'High', riskLevel: 'High', proof: 'Lock Count Verification', location: 'Lockbox' },
            { id: 'LOTO-08', description: 'Dissipate any stored or residual energy (e.g., bleed pneumatic lines).', priority: 'High', riskLevel: 'High', proof: 'Verification', location: 'Machine' },
            { id: 'LOTO-09', description: 'Attempt to start the machine to verify that isolation is effective.', priority: 'High', riskLevel: 'High', proof: 'Test Attempt Log', location: 'Machine' },
            { id: 'LOTO-10', description: 'After service, ensure all tools are removed and guards are replaced.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Machine' },
            { id: 'LOTO-11', description: 'Inspect the area and account for all personnel.', priority: 'High', riskLevel: 'Medium', proof: 'Headcount', location: 'Area' },
            { id: 'LOTO-12', description: 'Only the employee who placed the lock is authorized to remove it.', priority: 'High', riskLevel: 'High', proof: 'Policy Adherence', location: 'Energy Source' }
        ]
    },
    {
        id: 'retail-loss-prevention',
        title: "Retail Security & Loss Prevention",
        priceINR: 1299,
        paymentId: "pl_ROLjNNiQa8G8XJ",
        category: "Retail",
        icon: <Shield />,
        description: "A proactive checklist to deter theft, reduce inventory shrinkage, and protect your store's bottom line.",
        longDescription: "Inventory shrinkage can be a silent killer of profitability. This checklist provides a multi-layered security framework for your retail store. It covers daily operational checks for CCTV systems and EAS gates, protocols for high-value merchandise, fitting room monitoring procedures to prevent tag removal, and secure opening/closing procedures. It turns your entire staff into active participants in loss prevention, directly protecting your profits.",
        relatedPackId: "apparel_fashion_retail_pack",
        whoIsItFor: ["Retail Store Owners", "Heads of Loss Prevention", "District Managers", "Store Managers"],
        painPoints: [
            {
                title: "Reduce Inventory Shrinkage",
                description: "Implement daily, actionable steps to deter both external and internal theft, directly increasing your net profit."
            },
            {
                title: "Secure High-Value Items",
                description: "Provides clear protocols for managing and displaying expensive merchandise, from locked cabinets to display-based security."
            },
            {
                title: "Enhance Staff Awareness",
                description: "Trains your staff to spot and deter potential theft in a non-confrontational manner, creating a more secure shopping environment."
            }
        ],
        tasks: [
            { id: 'LP-01', description: 'Check that all CCTV cameras are operational, recording, and have clear views.', priority: 'High', riskLevel: 'High', proof: 'System Log', location: 'Security Office' },
            { id: 'LP-02', description: 'Test Electronic Article Surveillance (EAS) gates at the entrance/exit.', priority: 'High', riskLevel: 'Medium', proof: 'Test Log', location: 'Entrance' },
            { id: 'LP-03', description: 'Ensure all high-value items are either in locked cabinets or have security tags applied.', priority: 'High', riskLevel: 'High', proof: 'Visual Audit', location: 'Sales Floor' },
            { id: 'LP-04', description: 'Check that fitting room procedures (e.g., item limits) are being followed.', priority: 'Medium', riskLevel: 'Medium', proof: 'Observation', location: 'Fitting Rooms' },
            { id: 'LP-05', description: 'Ensure back doors and receiving areas are kept locked and secure at all times.', priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Back of House' },
            { id: 'LP-06', description: 'Verify that staff are greeting customers, a known theft deterrent.', priority: 'Medium', riskLevel: 'Low', proof: 'Observation', location: 'Sales Floor' },
            { id: 'LP-07', description: 'Review daily POS void/refund reports for any unusual activity.', priority: 'High', riskLevel: 'Medium', proof: 'Report Audit', location: 'Back Office' },
            { id: 'LP-08', description: 'Conduct random staff bag checks as per company policy.', priority: 'Medium', riskLevel: 'Medium', proof: 'Bag Check Log', location: 'Staff Exit' },
            { id: 'LP-09', description: 'Ensure cash registers are locked when not in use.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Cash Desk' },
            { id: 'LP-10', description: 'Audit high-value item count against sales records daily.', priority: 'High', riskLevel: 'High', proof: 'Count Sheet', location: 'Sales Floor/Back Office' },
            { id: 'LP-11', description: 'Monitor trash removal to prevent merchandise concealment.', priority: 'Medium', riskLevel: 'Medium', proof: 'Observation', location: 'Waste Disposal Area' },
            { id: 'LP-12', description: 'Change locks and access codes after employee terminations.', priority: 'High', riskLevel: 'High', proof: 'Maintenance Log', location: 'All Access Points' }
        ]
    },
    {
        id: 'campus-security',
        title: "Campus Security & Patrolling",
        priceINR: 1299,
        paymentId: "pl_ROLjNNiQa8G8XJ",
        category: "Education",
        icon: <HardHat />,
        description: "A foundational checklist for ensuring a safe campus, from gate management and visitor verification to perimeter patrols.",
        longDescription: "For any educational institution, the safety of students is the number one priority. This checklist provides a comprehensive framework for your daily security operations. It covers the essential duties of security personnel, including access control at gates, a strict protocol for visitor and vendor management, scheduled patrols of the campus perimeter and buildings, and CCTV monitoring. Implementing this system demonstrates a clear and robust commitment to safety, providing peace of mind to parents, staff, and students.",
        relatedPackId: "education_sector_pack",
        whoIsItFor: ["School Trustees", "School Principals", "Head of Administration", "Security Supervisors"],
        painPoints: [
            {
                title: "Prevent Unauthorized Access",
                description: "Implements a strict, verifiable protocol for managing every person who enters the campus, drastically reducing the risk of intruders."
            },
            {
                title: "Build Parent Trust",
                description: "A visible and systematic approach to security is one of the most powerful ways to build confidence and trust with parents."
            },
            {
                title: "Improve Emergency Preparedness",
                description: "A well-patrolled and monitored campus is the first line of defense in identifying potential threats or safety hazards before they become incidents."
            }
        ],
        tasks: [
            { id: 'CS-01', description: 'Check that all security guards are on duty and at their designated posts.', priority: 'High', riskLevel: 'Medium', proof: 'Attendance Log', location: 'Campus-wide' },
            { id: 'CS-02', description: 'Conduct hourly patrols of the campus perimeter, including boundary walls.', priority: 'High', riskLevel: 'High', proof: 'Patrol Log', location: 'Perimeter' },
            { id: 'CS-03', description: 'Monitor CCTV cameras for any suspicious activity, especially near entry/exit points.', priority: 'High', riskLevel: 'Medium', proof: 'CCTV Log', location: 'Security Room' },
            { id: 'CS-04', description: 'Ensure all visitors are logged and have a valid visitor pass.', priority: 'High', riskLevel: 'High', proof: 'Visitor Register', location: 'Gate' },
            { id: 'CS-05', description: 'Ensure all non-essential gates are locked during school hours.', priority: 'High', riskLevel: 'High', proof: 'Physical Check', location: 'Gates' },
            { id: 'CS-06', description: 'Check functionality of all boom barriers and access control systems.', priority: 'Medium', riskLevel: 'Medium', proof: 'Test Log', location: 'Gates' },
            { id: 'CS-07', description: 'During dispersal, monitor for any unauthorized persons or vehicles.', priority: 'High', riskLevel: 'High', proof: 'Observation', location: 'Dispersal Area' },
            { id: 'CS-08', description: 'Report any security breaches or concerns immediately to the admin head.', priority: 'High', riskLevel: 'High', proof: 'Incident Report', location: 'Security Room' },
            { id: 'CS-09', description: 'Patrol sensitive areas like science labs, server rooms, and admin offices.', priority: 'Medium', riskLevel: 'High', proof: 'Patrol Log', location: 'Internal Buildings' },
            { id: 'CS-10', description: 'Test emergency communication systems (e.g., PA system, walkie-talkies).', priority: 'High', riskLevel: 'Medium', proof: 'Test Log', location: 'Security Room' },
            { id: 'CS-11', description: 'Monitor parking areas during arrival and dismissal for traffic flow and safety.', priority: 'Medium', riskLevel: 'Medium', proof: 'Observation', location: 'Parking Lot' },
            { id: 'CS-12', description: 'Ensure security lighting is functional during evening hours.', priority: 'High', riskLevel: 'Medium', proof: 'Visual Check', location: 'Campus-wide' }
        ]
    },
    {
        id: 'investor-due-diligence',
        title: "Investor Due Diligence & Funding Readiness",
        priceINR: 1999,
        paymentId: "pl_ROLnfbmEpZzgZZ",
        category: "Startup",
        icon: <Briefcase />,
        description: "A comprehensive checklist for founders to prepare their company for the rigorous investor due diligence process.",
        longDescription: "Getting a 'yes' from an investor is only the beginning. The due diligence process that follows is intense and can make or break a funding round. This checklist prepares you for every aspect, ensuring your legal, financial, technical, and team-related documentation is in perfect order. It helps you anticipate investor questions and present a professional, organized front, dramatically increasing your chances of a smooth and successful closing.",
        relatedPackId: "",
        whoIsItFor: ["Startup Founders", "CFOs", "Venture Capital Associates", "Angel Investors"],
        painPoints: [
            {
                title: "Avoid 'Deal Fatigue'",
                description: "Prevent your funding round from collapsing due to slow or incomplete responses during due diligence. Be prepared for every request."
            },
            {
                title: "Build Investor Confidence",
                description: "A well-organized data room and proactive preparation signal competence and professionalism, building deep trust with your potential investors."
            },
            {
                title: "Identify Red Flags Early",
                description: "This checklist forces you to examine your own business from an investor's perspective, helping you identify and fix potential issues before they become deal-breakers."
            }
        ],
        tasks: [
            { id: 'DD-LG-01', description: 'Verify company incorporation and registration documents are complete and up-to-date.', priority: 'High', riskLevel: 'High', proof: 'Certificate of Incorporation', location: 'Legal Docs' },
            { id: 'DD-LG-02', description: 'Ensure all founder and key employee contracts are signed and include IP assignment clauses.', priority: 'High', riskLevel: 'High', proof: 'Signed Contracts', location: 'Legal Docs' },
            { id: 'DD-FN-01', description: 'Prepare historical financial statements (P&L, Balance Sheet, Cash Flow) for the last 3 years.', priority: 'High', riskLevel: 'High', proof: 'Financial Statements', location: 'Finance Docs' },
            { id: 'DD-FN-02', description: 'Create a detailed 5-year financial projection model with clear assumptions.', priority: 'High', riskLevel: 'High', proof: 'Financial Model (XLSX)', location: 'Finance Docs' },
            { id: 'DD-TC-01', description: 'Document the full technology stack and architecture.', priority: 'High', riskLevel: 'Medium', proof: 'Architecture Diagram', location: 'Tech Docs' },
            { id: 'DD-TM-01', description: 'Update cap table with all current shareholders, option holders, and convertible notes.', priority: 'High', riskLevel: 'High', proof: 'Cap Table', location: 'Legal/Finance' }
        ]
    },
    {
        id: 'seo-audit-checklist',
        title: "SEO On-Page & Technical Audit",
        priceINR: 1299,
        paymentId: "pl_ROLjNNiQa8G8XJ",
        category: "Marketing",
        icon: <Search />,
        description: "A comprehensive checklist for marketers and developers to audit and optimize a website for search engine visibility.",
        longDescription: "Ranking on Google requires getting hundreds of small details right. This checklist provides a systematic framework to audit your website's technical and on-page SEO. It covers everything from site speed and mobile-friendliness to meta tags, structured data, and internal linking. Use it to identify critical issues, create a clear action plan, and build a strong foundation for your search engine optimization strategy.",
        relatedPackId: "",
        whoIsItFor: ["Marketing Managers", "SEO Specialists", "Web Developers", "Small Business Owners"],
        painPoints: [
            {
                title: "Fix Hidden Technical Issues",
                description: "Uncover and resolve technical problems like slow page speed, crawl errors, or poor mobile experience that are hurting your rankings."
            },
            {
                title: "Optimize Every Page",
                description: "Provides a clear, step-by-step guide to ensure every important page on your site is perfectly optimized for its target keywords."
            },
            {
                title: "Create a Strategic Action Plan",
                description: "Stop doing random acts of SEO. This audit will give you a prioritized list of actions to take for the biggest impact on your organic traffic."
            }
        ],
        tasks: [
            { id: 'SEO-TC-01', description: 'Ensure an XML sitemap exists and is submitted to Google Search Console.', priority: 'High', riskLevel: 'High', proof: 'Search Console Screenshot', location: 'Website' },
            { id: 'SEO-TC-02', description: 'Check for and fix any crawl errors reported in Google Search Console.', priority: 'High', riskLevel: 'High', proof: 'Search Console Report', location: 'Website' },
            { id: 'SEO-OP-01', description: 'Verify that every important page has a unique, descriptive title tag under 60 characters.', priority: 'High', riskLevel: 'Medium', proof: 'Content Audit Spreadsheet', location: 'Website' },
            { id: 'SEO-OP-02', description: 'Ensure every page has a compelling meta description that encourages clicks.', priority: 'High', riskLevel: 'Medium', proof: 'Content Audit Spreadsheet', location: 'Website' },
            { id: 'SEO-SP-01', description: 'Test website performance with Google PageSpeed Insights and aim for a score above 80.', priority: 'High', riskLevel: 'High', proof: 'PageSpeed Report', location: 'Website' },
            { id: 'SEO-MB-01', description: 'Use Google\'s Mobile-Friendly Test to ensure the site provides a good user experience on mobile devices.', priority: 'High', riskLevel: 'High', proof: 'Mobile-Friendly Test Result', location: 'Website' }
        ]
    },
    {
        id: 'home-relocation-checklist',
        title: "Home Relocation & Moving Checklist",
        priceINR: 1299,
        paymentId: "pl_ROLjNNiQa8G8XJ", 
        category: "Personal",
        icon: <Home />,
        description: "The ultimate stress-saving checklist for a smooth move. Covers tasks from one month out to moving day and settling in.",
        longDescription: "Moving is one of life's most stressful events. This detailed checklist turns chaos into an organized process. It breaks down everything you need to do into manageable weekly tasks, starting from 4 weeks before your move. It covers decluttering, booking movers, notifying utilities, packing strategies, and the critical tasks for moving day itself, ensuring you don't forget anything important.",
        relatedPackId: "",
        whoIsItFor: ["Renters", "Homeowners", "Families relocating", "First-time movers"],
        painPoints: [
            {
                title: "Overcome the Feeling of Being Overwhelmed",
                description: "Provides a clear, step-by-step plan so you know exactly what to do and when, reducing stress and anxiety."
            },
            {
                title: "Avoid Costly 'Forgot-to-Do' Mistakes",
                description: "Ensures you don't forget critical tasks like mail forwarding or utility transfers that can cause major headaches after you move."
            },
            {
                title: "Streamline Your Packing and Unpacking",
                description: "Includes strategies for smart packing, labeling, and an 'essentials box' to make your first night in your new home comfortable."
            }
        ],
        tasks: [
            { id: 'MOV-W4-01', description: "Sort through belongings: create 'Keep', 'Donate', 'Sell', and 'Discard' piles.", priority: 'High', riskLevel: 'Medium', proof: 'Sorted Piles', location: 'Home' },
            { id: 'MOV-W3-01', description: "Get quotes from and book a moving company.", priority: 'High', riskLevel: 'High', proof: 'Booking Confirmation', location: 'Phone/Online' },
            { id: 'MOV-W2-01', description: "Arrange for mail forwarding with the post office.", priority: 'High', riskLevel: 'High', proof: 'Confirmation Email', location: 'Online' },
            { id: 'MOV-W2-02', description: "Schedule utility disconnections at your old home and connections at your new one.", priority: 'High', riskLevel: 'High', proof: 'Utility Service Orders', location: 'Phone/Online' },
            { id: 'MOV-W1-01', description: "Pack a 'Day 1 Essentials' box with toiletries, medications, chargers, and basic kitchen supplies.", priority: 'High', riskLevel: 'High', proof: 'Packed Box', location: 'Home' },
            { id: 'MOV-DAY-01', description: "Take photos of your empty, clean old home to document its condition.", priority: 'High', riskLevel: 'Medium', proof: 'Photos', location: 'Old Home' },
            { id: 'MOV-DAY-02', description: "Perform a final walkthrough to ensure nothing is left behind.", priority: 'High', riskLevel: 'High', proof: 'Visual Check', location: 'Old Home' },
            { id: 'MOV-DAY-03', description: "Take meter readings for gas, water, and electricity at both old and new homes.", priority: 'High', riskLevel: 'Medium', proof: 'Photo of Meters', location: 'Both Homes' }
        ]
    }
];

export type IndividualChecklistStub = Omit<IndividualChecklist, 'longDescription' | 'whoIsItFor' | 'painPoints'>;

