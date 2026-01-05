
import type { PremiumPack } from "@/lib/premium-packs";

export const theme_park_ops_pack: PremiumPack = {
    id: 'theme_park_ops_pack',
    title: "Theme Park Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f2873138-038c-4592-8025-5463f87b328a',
    category: "Entertainment & Events",
    description: "A safety-critical toolkit for theme park and amusement park operators, covering ride safety, crowd management, and emergency response.",
    icon: "ferris-wheel",
    whoIsItFor: ["Theme Park GMs", "Heads of Operations", "Ride Safety Managers", "Security Directors"],
    sampleItems: [
        { text: "Prevent ride-related accidents with daily, weekly, and monthly ride inspection checklists based on manufacturer guidelines.", icon: "wrench" },
        { text: "Ensure guest safety with comprehensive crowd management, queuing, and access control SOPs.", icon: "users" },
        { text: "Be prepared for any crisis with emergency response plans for medical incidents, power failures, and ride stoppages.", icon: "siren" },
        { text: "Protect children with a robust Lost Child Protocol and designated safe zones.", icon: "helping-hand" },
        { text: "Maintain a safe and beautiful park with checklists for park-wide landscaping, housekeeping, and infrastructure safety.", icon: "recycle" },
        { text: "Guarantee food safety across all park outlets with FSSAI/HACCP-aligned hygiene and food handling checklists.", icon: "utensils" }
    ],
    checklists: [
        {
            title: "Ride Safety & Maintenance",
            department: "Maintenance/Operations",
            frequency: "Daily/Scheduled",
            role: "Ride Engineer",
            summary: "Ensures every ride is safe for operation before the first guest boards.",
            icon: "wrench",
            tasks: [
                { id: "RIDE-SAFETY-01", description: "Perform a daily pre-opening operational test of each ride.", priority: "High", riskLevel: "High", consequence: "The most critical check to identify any faults before guests are onboard.", proof: "Test Log" },
                { id: "RIDE-SAFETY-02", description: "Inspect all safety harnesses, lap bars, and restraints.", priority: "High", riskLevel: "High", consequence: "A failed restraint can lead to a fatal accident.", proof: "Restraint Inspection Log" },
                { id: "RIDE-SAFETY-03", description: "Check all emergency stop buttons and systems.", priority: "High", riskLevel: "High", consequence: "In an emergency, the E-stop must work flawlessly.", proof: "E-Stop Test Log" },
                { id: "RIDE-SAFETY-04", description: "Follow a scheduled preventive maintenance plan based on manufacturer guidelines.", priority: "High", riskLevel: "High", consequence: "Prevents catastrophic failures caused by metal fatigue or wear and tear.", proof: "PM Records" },
                { id: "RIDE-SAFETY-05", description: "Log all maintenance activities, repairs, and part replacements.", priority: "High", riskLevel: "High", consequence: "Provides a legal record of due diligence and helps track part life.", proof: "Maintenance Logbook" },
                { id: "RIDE-SAFETY-06", description: "Train and certify all ride operators.", priority: "High", riskLevel: "High", consequence: "An untrained operator can make a fatal error under pressure.", proof: "Training Certificates" },
                { id: "RIDE-SAFETY-07", description: "Have a documented procedure for ride evacuation.", priority: "High", riskLevel: "High", consequence: "A chaotic, unplanned evacuation can cause injuries and panic.", proof: "Evacuation SOP" },
                { id: "RIDE-SAFETY-08", description: "Conduct non-destructive testing (NDT) on critical components annually.", priority: "High", riskLevel: "High", consequence: "Identifies microscopic cracks in welds or metal before they lead to a catastrophic failure.", proof: "NDT Report" },
                { id: "RIDE-SAFETY-09", description: "Lock out and tag out any ride that is undergoing maintenance.", priority: "High", riskLevel: "High", consequence: "Prevents the ride from being accidentally started while someone is working on it.", proof: "LOTO Log" },
                { id: "RIDE-SAFETY-10", description: "Review ride incident reports to identify trends and potential issues.", priority: "High", riskLevel: "High", consequence: "Helps to identify if a particular ride or component is having recurring problems.", proof: "Incident Analysis Report" }
            ]
        },
        {
            title: "Emergency Response & Evacuation",
            department: "Safety/Security",
            frequency: "Quarterly",
            role: "Emergency Commander",
            summary: "A plan for managing common park emergencies like ride stoppages or medical incidents.",
            icon: "siren",
            tasks: [
                { id: "EMER-RESP-01", description: "Conduct quarterly mock drills for different emergency scenarios.", priority: "High", riskLevel: "High", consequence: "Drills build muscle memory and expose weaknesses in your emergency plan.", proof: "Drill Report" },
                { id: "EMER-RESP-02", description: "Ensure a clear chain of command is established for any emergency.", priority: "High", riskLevel: "High", consequence: "Without a clear command structure, response becomes chaotic and ineffective.", proof: "Emergency Command Structure" },
                { id: "EMER-RESP-03", description: "Have a trained first-response team on-site at all times.", priority: "High", riskLevel: "High", consequence: "Rapid medical response in the first few minutes is critical.", proof: "Team Roster & Certifications" },
                { id: "EMER-RESP-04", description: "Maintain clear and accessible evacuation routes and assembly points.", priority: "High", riskLevel: "High", consequence: "Blocked routes can trap guests during an evacuation.", proof: "Evacuation Map" },
                { id: "EMER-RESP-05", description: "Test park-wide public address and alarm systems weekly.", priority: "High", riskLevel: "High", consequence: "The primary means of communicating with thousands of guests in an emergency.", proof: "System Test Log" },
                { id: "EMER-RESP-06", description: "Coordinate with local fire, police, and medical services.", priority: "High", riskLevel: "High", consequence: "Ensures a seamless handover to external emergency services when they arrive.", proof: "Coordination Meeting Minutes" },
                { id: "EMER-RESP-07", description: "Have backup power for all critical systems.", priority: "High", riskLevel: "High", consequence: "A power failure can disable communication, lighting, and ride safety systems.", proof: "Generator Test Log" },
                { id: "EMER-RESP-08", description: "Provide emergency communication devices (radios) to all key staff.", priority: "High", riskLevel: "High", consequence: "Mobile networks can fail during a major incident; radios are more reliable.", proof: "Radio Inventory" },
                { id: "EMER-RESP-09", description: "Train all staff on their roles in an emergency.", priority: "High", riskLevel: "High", consequence: "Every staff member, from ride operator to food seller, has a role to play in guest safety.", proof: "Training Records" },
                { id: "EMER-RESP-10", description: "Review and update the emergency plan annually.", priority: "High", riskLevel: "High", consequence: "An outdated plan is a dangerous liability.", proof: "Updated Plan Document" }
            ]
        },
        {
            title: "Guest Services & Complaint Handling",
            department: "Guest Services",
            frequency: "Daily",
            role: "Guest Services Manager",
            summary: "Manages guest interactions, ensuring a positive experience even when issues arise.",
            icon: "smile-plus",
            tasks: [
                { id: "GUEST-SVC-01", description: "Have a clear and practiced Lost Child Protocol.", priority: "High", riskLevel: "High", consequence: "A lost child is a parent's worst nightmare; a swift, professional response is critical.", proof: "Lost Child SOP" },
                { id: "GUEST-SVC-02", description: "Log and track every guest complaint to resolution.", priority: "High", riskLevel: "Medium", consequence: "Unresolved complaints lead to negative social media posts and damage brand reputation.", proof: "Complaint Log" },
                { id: "GUEST-SVC-03", description: "Empower front-line staff to resolve minor issues on the spot.", priority: "High", riskLevel: "Low", consequence: "Reduces escalations and shows guests that you value their time.", proof: "Empowerment Policy" },
                { id: "GUEST-SVC-04", description: "Provide services for guests with disabilities (wheelchairs, accessibility maps).", priority: "High", riskLevel: "Medium", consequence: "A legal requirement in many places and essential for an inclusive experience.", proof: "Accessibility Plan" },
                { id: "GUEST-SVC-05", description: "Have a protocol for providing assistance to guests affected by a ride stoppage or other incident.", priority: "High", riskLevel: "High", consequence: "How you handle a negative experience can turn a detractor into a promoter.", proof: "Incident Guest Handling SOP" },
                { id: "GUEST-SVC-06", description: "Train staff on empathetic communication and de-escalation techniques.", priority: "High", riskLevel: "Medium", consequence: "Helps to calm angry guests and find a positive resolution.", proof: "Training Records" },
                { id: "GUEST-SVC-07", description: "Monitor social media and review sites for guest feedback.", priority: "High", riskLevel: "Medium", consequence: "Allows you to respond to public complaints and manage your online reputation.", proof: "Social Media Monitoring Report" },
                { id: "GUEST-SVC-08", description: "Collect and analyze guest feedback to identify areas for improvement.", priority: "High", riskLevel: "Medium", consequence: "Guest feedback is a free source of valuable business intelligence.", proof: "Feedback Analysis Report" },
                { id: "GUEST-SVC-09", description: "Maintain a lost and found system.", priority: "High", riskLevel: "Low", consequence: "A well-run lost and found is a key part of good customer service.", proof: "Lost & Found System" },
                { id: "GUEST-SVC-10", description: "Ensure all guest-facing staff are knowledgeable about the park.", priority: "High", riskLevel: "Low", consequence: "Staff who can't answer basic questions seem unprofessional.", proof: "Staff Quiz Results" }
            ]
        },
        {
            title: "Crowd Management & Queuing",
            department: "Operations",
            frequency: "Daily",
            role: "Operations Manager",
            summary: "Manages guest flow to ensure safety and a positive experience in queue lines.",
            icon: "users",
            tasks: [
                { id: "CROWD-Q-01", description: "Monitor queue lengths at all major attractions and post wait times.", priority: "High", riskLevel: "Medium", consequence: "Managing expectations with accurate wait times reduces guest frustration.", proof: "Wait Time Board" },
                { id: "CROWD-Q-02", description: "Use stanchions and ropes to create organized queue lines.", priority: "High", riskLevel: "Medium", consequence: "Prevents queue-jumping and disorganized crowding.", proof: "Visual Check" },
                { id: "CROWD-Q-03", description: "Deploy staff to manage queues during peak periods.", priority: "High", riskLevel: "High", consequence: "Staff can manage flow, answer questions, and spot problems.", proof: "Staff Roster" },
                { id: "CROWD-Q-04", description: "Provide entertainment or shade in long queue lines.", priority: "Medium", riskLevel: "Low", consequence: "Improves the guest experience while waiting.", proof: "Queue Entertainment Schedule" },
                { id: "CROWD-Q-05", description: "Have a plan for managing park capacity and temporarily closing entry if full.", priority: "High", riskLevel: "High", consequence: "Overcrowding the park is a major safety risk.", proof: "Capacity Management Plan" },
                { id: "CROWD-Q-06", description: "Manage crowd flow during parades and shows.", priority: "High", riskLevel: "High", consequence: "Prevents dangerous crushes and ensures good viewing for everyone.", proof: "Parade Route Plan" },
                { id: "CROWD-Q-07", description: "Use signage and announcements to direct guests.", priority: "High", riskLevel: "Medium", consequence: "Clear directions are essential in a large, confusing space.", proof: "Signage & Announcement Log" },
                { id: "CROWD-Q-08", description: "Analyze guest flow data to optimize park layout.", priority: "High", riskLevel: "Medium", consequence: "Data can reveal bottlenecks and help improve the park design over time.", proof: "Guest Flow Report" },
                { id: "CROWD-Q-09", description: "Handle crowd-related incidents calmly and professionally.", priority: "High", riskLevel: "High", consequence: "Panic is contagious; a calm response from staff is crucial.", proof: "Incident Report" },
                { id: "CROWD-Q-10", description: "Train all staff on their roles in crowd management.", priority: "High", riskLevel: "High", consequence: "Every staff member is a part of the crowd management system.", proof: "Training Records" }
            ]
        },
        {
            title: "Park Housekeeping & Presentation",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Housekeeping Supervisor",
            summary: "Maintains the aesthetic appeal and safety of the park's common areas.",
            icon: "sparkles",
            tasks: [
                { id: "HK-PARK-01", description: "Conduct hourly cleaning sweeps of all public areas.", priority: "High", riskLevel: "Medium", consequence: "A dirty park leads to a poor guest experience and negative reviews.", proof: "Cleaning Log" },
                { id: "HK-PARK-02", description: "Inspect and clean restrooms every 30 minutes during peak hours.", priority: "High", riskLevel: "High", consequence: "Restroom cleanliness is a top driver of guest satisfaction.", proof: "Restroom Cleaning Log" },
                { id: "HK-PARK-03", description: "Empty trash bins before they overflow.", priority: "High", riskLevel: "Medium", consequence: "Overflowing bins are unsightly and unhygienic.", proof: "Waste Bin Check Log" },
                { id: "HK-PARK-04", description: "Clean up spills immediately.", priority: "High", riskLevel: "High", consequence: "Spills are a slip-and-fall hazard, a major liability.", proof: "Spill Response Log" },
                { id: "HK-PARK-05", description: "Maintain landscaping and gardens.", priority: "High", riskLevel: "Low", consequence: "A well-maintained landscape is key to the park's aesthetic appeal.", proof: "Landscaping Schedule" },
                { id: "HK-PARK-06", description: "Check and repair any damaged park furniture or fixtures.", priority: "High", riskLevel: "Medium", consequence: "Broken benches or signs are a safety hazard.", proof: "Repair Log" },
                { id: "HK-PARK-07", description: "Power wash walkways and high-traffic areas regularly.", priority: "Medium", riskLevel: "Low", consequence: "Removes gum and deep-seated dirt.", proof: "Power Wash Schedule" },
                { id: "HK-PARK-08", description: "Ensure all signage is clean and legible.", priority: "High", riskLevel: "Low", consequence: "Dirty or broken signs make navigation difficult.", proof: "Signage Cleaning Log" },
                { id: "HK-PARK-09", description: "Manage a lost and found for the park.", priority: "High", riskLevel: "Low", consequence: "An efficient lost and found is a key part of good customer service.", proof: "Lost & Found System" },
                { id: "HK-PARK-10", description: "Conduct a final deep clean of the park after closing.", priority: "High", riskLevel: "Medium", consequence: "Ensures the park is ready for guests the next day.", proof: "End-of-Day Cleaning Report" }
            ]
        },
        {
            title: "F&B and Retail Operations",
            department: "F&B/Retail",
            frequency: "Daily",
            role: "F&B Manager",
            summary: "Ensures all food and retail outlets in the park are safe, profitable, and offer a great guest experience.",
            icon: "utensils",
            tasks: [
                { id: "FNB-RETAIL-01", description: "Conduct daily food safety and hygiene audits of all F&B outlets.", priority: "High", riskLevel: "High", consequence: "A food poisoning outbreak can sicken thousands of guests and cause a PR disaster.", proof: "Hygiene Audit Report" },
                { id: "FNB-RETAIL-02", description: "Manage inventory levels to meet demand without excessive waste.", priority: "High", riskLevel: "High", consequence: "Running out of popular items is a major source of lost revenue.", proof: "Inventory Management System" },
                { id: "FNB-RETAIL-03", description: "Reconcile cash and sales for each outlet at the end of the day.", priority: "High", riskLevel: "High", consequence: "Essential for financial accounting and fraud detection.", proof: "Sales Reconciliation Report" },
                { id: "FNB-RETAIL-04", description: "Ensure all staff are trained in food handling and customer service.", priority: "High", riskLevel: "High", consequence: "Untrained staff are unsafe and provide poor service.", proof: "Training Records" },
                { id: "FNB-RETAIL-05", description: "Maintain consistent pricing and promotions across all outlets.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent pricing confuses and frustrates guests.", proof: "Pricing Audit" },
                { id: "FNB-RETAIL-06", description: "Manage supplier relationships and deliveries.", priority: "High", riskLevel: "High", consequence: "Ensures a steady supply of quality ingredients and merchandise.", proof: "Supplier Contracts" },
                { id: "FNB-RETAIL-07", description: "Handle customer complaints related to F&B or retail purchases.", priority: "High", riskLevel: "High", consequence: "Poor complaint handling can lead to negative online reviews.", proof: "Complaint Log" },
                { id: "FNB-RETAIL-08", description: "Ensure all outlets comply with local health and safety regulations.", priority: "High", riskLevel: "High", consequence: "Non-compliance can lead to fines or closure.", proof: "Compliance Certificates" },
                { id: "FNB-RETAIL-09", description: "Monitor sales data to optimize menus and product offerings.", priority: "High", riskLevel: "Medium", consequence: "Data-driven decisions help to maximize revenue.", proof: "Sales Analysis Report" },
                { id: "FNB-RETAIL-10", description: "Implement loss prevention measures for retail merchandise.", priority: "High", riskLevel: "High", consequence: "Reduces shrinkage from customer and employee theft.", proof: "Loss Prevention Plan" }
            ]
        },
        {
            title: "Staff Training & Performance",
            department: "HR",
            frequency: "Ongoing",
            role: "HR Manager",
            summary: "A framework for developing a well-trained, motivated, and guest-focused team.",
            icon: "users",
            tasks: [
                { id: "STAFF-TP-01", description: "Provide comprehensive orientation for all new hires.", priority: "High", riskLevel: "Medium", consequence: "Ensures new staff understand the park's culture and safety standards from day one.", proof: "Orientation Schedule" },
                { id: "STAFF-TP-02", description: "Conduct job-specific training for all roles (ride operator, F&B, etc.).", priority: "High", riskLevel: "High", consequence: "Untrained staff are unsafe and provide poor service.", proof: "Training Modules" },
                { id: "STAFF-TP-03", description: "Provide mandatory safety and emergency response training.", priority: "High", riskLevel: "High", consequence: "The most important training to ensure guest and staff safety.", proof: "Training Records" },
                { id: "STAFF-TP-04", description: "Train staff on customer service standards and guest interaction.", priority: "High", riskLevel: "Medium", consequence: "Friendly, helpful staff are key to a positive guest experience.", proof: "Customer Service Training Log" },
                { id: "STAFF-TP-05", description: "Conduct regular performance reviews and provide feedback.", priority: "High", riskLevel: "Medium", consequence: "Helps employees to grow and improve.", proof: "Performance Review Forms" },
                { id: "STAFF-TP-06", description: "Maintain a skills matrix for all employees.", priority: "Medium", riskLevel: "Medium", consequence: "Helps to identify training needs and plan for succession.", proof: "Skills Matrix" },
                { id: "STAFF-TP-07", description: "Offer opportunities for cross-training and career development.", priority: "Medium", riskLevel: "Low", consequence: "Improves employee morale and retention.", proof: "Development Plans" },
                { id: "STAFF-TP-08", description: "Recognize and reward excellent performance.", priority: "Medium", riskLevel: "Low", consequence: "Motivates staff to go above and beyond.", proof: "Recognition Program" },
                { id: "STAFF-TP-09", description: "Handle disciplinary issues consistently and fairly.", priority: "High", riskLevel: "High", consequence: "An unfair process can lead to low morale and legal issues.", proof: "Disciplinary Process" },
                { id: "STAFF-TP-10", description: "Conduct exit interviews to gather feedback from departing employees.", priority: "High", riskLevel: "Medium", consequence: "A valuable source of information for improving the work environment.", proof: "Exit Interview Notes" }
            ]
        },
        {
            title: "Ticketing & Entry Operations",
            department: "Admissions",
            frequency: "Daily",
            role: "Admissions Manager",
            summary: "Ensures a smooth, efficient, and secure entry process for all guests.",
            icon: "ticket",
            tasks: [
                { id: "TICK-ENTRY-01", description: "Ensure all ticketing counters and self-service kiosks are operational.", priority: "High", riskLevel: "High", consequence: "A system failure can lead to massive queues and guest frustration at the entrance.", proof: "System Health Check" },
                { id: "TICK-ENTRY-02", description: "Reconcile ticket sales and cash at the end of each day.", priority: "High", riskLevel: "High", consequence: "Essential for financial accounting and fraud detection.", proof: "Sales Report" },
                { id: "TICK-ENTRY-03", description: "Manage online ticket sales and redemptions.", priority: "High", riskLevel: "High", consequence: "A smooth online process is crucial for modern guest experience.", proof: "Online Sales Dashboard" },
                { id: "TICK-ENTRY-04", description: "Train staff on identifying and handling counterfeit tickets.", priority: "High", riskLevel: "High", consequence: "Counterfeit tickets lead to direct revenue loss.", proof: "Fraud Detection Training" },
                { id: "TICK-ENTRY-05", description: "Manage entry turnstiles and access control.", priority: "High", riskLevel: "High", consequence: "Prevents unauthorized entry and helps manage park capacity.", proof: "Access Control System" },
                { id: "TICK-ENTRY-06", description: "Handle group bookings and school trips.", priority: "High", riskLevel: "Medium", consequence: "A major revenue stream that requires efficient coordination.", proof: "Group Booking System" },
                { id: "TICK-ENTRY-07", description: "Provide clear pricing and information at the ticket counters.", priority: "High", riskLevel: "Low", consequence: "Ambiguous pricing leads to customer confusion and disputes.", proof: "Signage" },
                { id: "TICK-ENTRY-08", description: "Manage season pass holder entries and benefits.", priority: "High", riskLevel: "Medium", consequence: "A smooth process is key to retaining loyal customers.", proof: "Season Pass System" },
                { id: "TICK-ENTRY-09", description: "Analyze attendance data to forecast future demand.", priority: "High", riskLevel: "High", consequence: "Essential for staffing, inventory, and operational planning.", proof: "Attendance Report" },
                { id: "TICK-ENTRY-10", description: "Have a clear process for handling ticketing disputes.", priority: "High", riskLevel: "Medium", consequence: "A fair and quick resolution process improves guest satisfaction.", proof: "Dispute Resolution SOP" }
            ]
        }
    ]
};

    