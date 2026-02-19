
import type { PremiumPack } from "@/lib/premium-packs";

export const sports_clubs_stadium_operations_pack: PremiumPack = {
    id: 'sports_clubs_stadium_operations_pack',
    title: "Sports Clubs & Stadium Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f290d8a5-d913-485e-9905-59b922a01490',
    category: "Entertainment & Events",
    description: "Stop venue accidents, crowd disasters, and member churn—before they destroy your reputation and bottom line.",
    heroHeadline: "Eliminate venue accidents and crowd disasters.",
    heroSubheadline: "Built for stadium managers and sports club owners who take zero-risk operational integrity seriously.",
    pricingUrgency: "A single crowd-control incident or a fatal equipment failure costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "trophy",
    whoIsItFor: ["Sports Club GMs", "Stadium Managers", "Heads of Operations", "Gym Owners", "Venue Safety Officers"],
    sampleItems: [
        { text: "<strong>Ensure</strong> venue safety with robust crowd management, ticketing, and exit SOPs.", icon: "users" },
        { text: "<strong>Maintain</strong> world-class turf and pitches with a structured ground maintenance schedule.", icon: "sprout" },
        { text: "<strong>Prevent</strong> equipment-related injuries with daily fitness and gym safety audits.", icon: "dumbbell" },
        { text: "<strong>Guarantee</strong> a safe aquatic environment with pool hygiene and rescue readiness checklists.", icon: "waves" },
        { text: "<strong>Protect</strong> member data and revenue with a structured membership management system.", icon: "user-check" },
        { text: "<strong>Manage</strong> your team effectively with checklists for staff onboarding and safety training.", icon: "clipboard-list" }
    ],
    checklists: [
        {
            title: "Crowd Management & Safety",
            department: "Security/Operations",
            frequency: "Per Event",
            role: "Head of Security",
            summary: "A comprehensive plan to manage crowds safely and effectively during high-traffic events.",
            icon: "users",
            tasks: [
                { id: "CROWD-01", description: "Develop a crowd management plan based on expected attendance.", priority: "High", riskLevel: "High", consequence: "Failure to plan can lead to dangerous overcrowding and stampedes.", proof: "Crowd Management Plan" },
                { id: "CROWD-02", description: "Brief all stewards and security staff on their positions and responsibilities.", priority: "High", riskLevel: "High", consequence: "An unbriefed team is ineffective and cannot respond to incidents correctly.", proof: "Briefing Log" },
                { id: "CROWD-03", description: "Ensure ticketing and entry systems are working to prevent long queues.", priority: "High", riskLevel: "High", consequence: "Large, frustrated queues outside the venue can become a public order issue.", proof: "System Test Report" },
                { id: "CROWD-04", description: "Monitor crowd density and flow via CCTV and on-ground staff.", priority: "High", riskLevel: "High", consequence: "Allows for early intervention to redirect crowds and prevent dangerous crushes.", proof: "CCTV Monitoring Log" },
                { id: "CROWD-05", description: "Have a clear protocol for handling drunk or disorderly spectators.", priority: "High", riskLevel: "High", consequence: "A single disorderly individual can spoil the event for others or escalate into a larger fight.", proof: "Ejection SOP" },
                { id: "CROWD-06", description: "Ensure clear signage for seating areas, amenities, and exits.", priority: "High", riskLevel: "Medium", consequence: "Poor signage leads to confusion and guest frustration.", proof: "Signage Audit" },
                { id: "CROWD-07", description: "Manage vehicle and pedestrian traffic outside the venue.", priority: "High", riskLevel: "High", consequence: "Poor traffic management can lead to gridlock and accidents.", proof: "Traffic Management Plan" },
                { id: "CROWD-08", description: "Have a lost child protocol in place.", priority: "High", riskLevel: "High", consequence: "A lost child in a large crowd is a major emergency that requires a clear, practiced response.", proof: "Lost Child SOP" },
                { id: "CROWD-09", description: "Plan for phased exit of the crowd after the event.", priority: "High", riskLevel: "High", consequence: "Prevents a dangerous rush for the exits at the end of the event.", proof: "Exit Plan" },
                { id: "CROWD-10", description: "Debrief after each event to identify and improve crowd management issues.", priority: "High", riskLevel: "Medium", consequence: "The best way to learn from experience and improve safety for the next event.", proof: "Debrief Report" }
            ]
        },
        {
            title: "Ground & Pitch Maintenance",
            department: "Groundskeeping",
            frequency: "Daily/Weekly",
            role: "Head Groundskeeper",
            summary: "Ensures the playing surface is in top condition for both safety and performance.",
            icon: "sprout",
            tasks: [
                { id: "GROUND-01", description: "Perform daily inspection of the pitch/turf for any damage or disease.", priority: "High", riskLevel: "High", consequence: "An uneven surface can lead to player injuries.", proof: "Daily Inspection Log" },
                { id: "GROUND-02", description: "Follow a regular mowing and rolling schedule.", priority: "High", riskLevel: "Medium", consequence: "Ensures a consistent and high-quality playing surface.", proof: "Mowing Log" },
                { id: "GROUND-03", description: "Manage irrigation schedule based on weather and soil moisture.", priority: "High", riskLevel: "Medium", consequence: "Over or under-watering can damage the turf.", proof: "Irrigation Log" },
                { id: "GROUND-04", description: "Apply fertilizers and pesticides as per the schedule.", priority: "High", riskLevel: "High", consequence: "Improper application can damage the turf or be a health hazard.", proof: "Application Log" },
                { id: "GROUND-05", description: "Prepare the pitch according to the specific requirements of the sport (e.g., cricket pitch preparation).", priority: "High", riskLevel: "High", consequence: "A poorly prepared pitch can affect the outcome of the game and cause injuries.", proof: "Pitch Prep Report" },
                { id: "GROUND-06", description: "Mark the field of play accurately.", priority: "High", riskLevel: "High", consequence: "Incorrect markings can lead to disputes during the game.", proof: "Marking Check" },
                { id: "GROUND-07", description: "Maintain all groundskeeping equipment.", priority: "High", riskLevel: "Medium", consequence: "Equipment failure can delay pitch preparation.", proof: "Equipment Maintenance Log" },
                { id: "GROUND-08", description: "Cover the pitch during rain.", priority: "High", riskLevel: "High", consequence: "Failure to cover can lead to a waterlogged pitch and match cancellation.", proof: "Covering Log" },
                { id: "GROUND-09", description: "Conduct soil testing periodically.", priority: "High", riskLevel: "Medium", consequence: "Helps to determine the correct fertilizer and treatment needed.", proof: "Soil Test Report" },
                { id: "GROUND-10", description: "Manage lighting for evening matches.", priority: "High", riskLevel: "High", consequence: "Poor lighting can be a safety hazard for players and affect broadcast quality.", proof: "Lighting Test Log" }
            ]
        },
        {
            title: "Gym & Equipment Safety",
            department: "Fitness",
            frequency: "Daily",
            role: "Gym Manager",
            summary: "Daily checks to ensure all fitness equipment is safe and ready for member use.",
            icon: "dumbbell",
            tasks: [
                { id: "GYM-01", description: "Perform a daily visual inspection of all gym equipment for damage or wear.", priority: "High", riskLevel: "High", consequence: "A faulty machine can fail during use, causing serious injury.", proof: "Daily Inspection Log" },
                { id: "GYM-02", description: "Check all cables, belts, and pulleys on weight machines.", priority: "High", riskLevel: "High", consequence: "A snapping cable under load can be a fatal accident.", proof: "Cable Inspection Log" },
                { id: "GYM-03", description: "Ensure all free weights are stored correctly and not left as trip hazards.", priority: "High", riskLevel: "High", consequence: "A major cause of trips, falls, and injuries in a gym.", proof: "Visual Check" },
                { id: "GYM-04", description: "Wipe down and sanitize all equipment regularly.", priority: "High", riskLevel: "Medium", consequence: "Gym equipment is a major vector for spreading skin infections and other germs.", proof: "Sanitization Log" },
                { id: "GYM-05", description: "Check that safety features on treadmills and other cardio machines are working.", priority: "High", riskLevel: "High", consequence: "A failed emergency stop can lead to serious injury if a user falls.", proof: "Safety Stop Test" },
                { id: "GYM-06", description: "Ensure first-aid kits and AEDs are accessible and functional.", priority: "High", riskLevel: "High", consequence: "In a cardiac arrest, a working AED can be the difference between life and death.", proof: "Emergency Kit Log" },
                { id: "GYM-07", description: "Conduct preventive maintenance on all equipment as per manufacturer schedule.", priority: "High", riskLevel: "High", consequence: "Prevents unexpected breakdowns and extends the life of expensive equipment.", proof: "Maintenance Records" },
                { id: "GYM-08", description: "Provide clear instructions and warnings on all equipment.", priority: "High", riskLevel: "Medium", consequence: "Helps to prevent injuries caused by improper use.", proof: "Signage Audit" },
                { id: "GYM-09", description: "Train staff to assist members and spot incorrect usage of equipment.", priority: "High", riskLevel: "High", consequence: "Staff can intervene to prevent an injury before it happens.", proof: "Training Log" },
                { id: "GYM-10", description: "Have a clear procedure for handling injuries or medical emergencies.", priority: "High", riskLevel: "High", consequence: "A disorganized response can worsen an injury and increase legal liability.", proof: "Emergency SOP" }
            ]
        },
        {
            title: "Pool & Spa Hygiene",
            department: "Recreation",
            frequency: "Daily",
            role: "Pool Supervisor",
            summary: "Daily checks to ensure water quality and safety in aquatic facilities.",
            icon: "waves",
            tasks: [
                { id: "POOL-HYGIENE-01", description: "Test and log pool water chlorine and pH levels at least 3 times a day.", priority: "High", riskLevel: "High", consequence: "Incorrect levels can cause skin/eye irritation and allow harmful bacteria to grow.", proof: "Water Quality Log" },
                { id: "POOL-HYGIENE-02", description: "Inspect and clean changing rooms and showers hourly.", priority: "High", riskLevel: "Medium", consequence: "Dirty changing rooms are a major source of member complaints and can spread infections.", proof: "Changing Room Log" },
                { id: "POOL-HYGIENE-03", description: "Check all rescue equipment (lifebuoys, first-aid kits) is in place.", priority: "High", riskLevel: "High", consequence: "Missing rescue equipment can be fatal in a drowning incident.", proof: "Rescue Equipment Log" },
                { id: "POOL-HYGIENE-04", description: "Ensure lifeguards are on duty and alert.", priority: "High", riskLevel: "High", consequence: "A distracted or absent lifeguard is a major safety failure.", proof: "Lifeguard Roster" },
                { id: "POOL-HYGIENE-05", description: "Clean and backwash pool filters as per schedule.", priority: "High", riskLevel: "Medium", consequence: "Clogged filters lead to cloudy, unsanitary water.", proof: "Filter Maintenance Log" },
                { id: "POOL-HYGIENE-06", description: "Enforce shower-before-entry rules.", priority: "High", riskLevel: "Medium", consequence: "Reduces the amount of dirt and bacteria entering the pool water.", proof: "Signage and Staff Monitoring" },
                { id: "POOL-HYGIENE-07", description: "Check for any slip hazards around the pool deck.", priority: "High", riskLevel: "High", consequence: "Slip and fall accidents are a major liability risk.", proof: "Deck Inspection Log" },
                { id: "POOL-HYGIENE-08", description: "Maintain water temperature in heated pools and spas.", priority: "High", riskLevel: "Medium", consequence: "Incorrect temperatures can be unsafe or lead to member complaints.", proof: "Temperature Log" },
                { id: "POOL-HYGIENE-09", description: "Manage chemical storage and handling safely.", priority: "High", riskLevel: "High", consequence: "Improperly stored chemicals can be a major health and safety hazard.", proof: "Chemical Store Audit" },
                { id: "POOL-HYGIENE-10", description: "Have a clear procedure for responding to a water contamination incident.", priority: "High", riskLevel: "High", consequence: "A quick response can prevent widespread illness.", proof: "Contamination SOP" }
            ]
        },
        {
            title: "Membership Management",
            department: "Admin",
            frequency: "Ongoing",
            role: "Membership Coordinator",
            summary: "Manages the member lifecycle from registration to renewal, ensuring data integrity.",
            icon: "user-check",
            tasks: [
                { id: "MEM-01", description: "Process new member registrations and collect all required information.", priority: "High", riskLevel: "Medium", consequence: "Incomplete information can lead to billing or communication issues later.", proof: "Registration Form" },
                { id: "MEM-02", description: "Issue membership cards and explain access procedures.", priority: "High", riskLevel: "Medium", consequence: "A smooth onboarding process improves member satisfaction.", proof: "Card Issuance Log" },
                { id: "MEM-03", description: "Manage recurring membership payments and follow up on failed payments.", priority: "High", riskLevel: "High", consequence: "Failure to manage billing is a direct loss of revenue.", proof: "Billing System" },
                { id: "MEM-04", description: "Handle membership cancellations and freezes according to policy.", priority: "High", riskLevel: "Medium", consequence: "An inconsistent process can lead to disputes and negative reviews.", proof: "Cancellation Form" },
                { id: "MEM-05", description: "Maintain an accurate and up-to-date member database.", priority: "High", riskLevel: "High", consequence: "An inaccurate database makes communication and management impossible.", proof: "Member Database" },
                { id: "MEM-06", description: "Send renewal reminders to members.", priority: "High", riskLevel: "Medium", consequence: "A simple way to improve member retention.", proof: "Communication Log" },
                { id: "MEM-07", description: "Provide excellent customer service to all members.", priority: "High", riskLevel: "Medium", consequence: "Poor service is a primary driver of membership cancellations.", proof: "CSAT Scores" },
                { id: "MEM-08", description: "Analyze membership data to identify trends.", priority: "High", riskLevel: "Medium", consequence: "Helps to understand member behavior and improve retention strategies.", proof: "Membership Report" },
                { id: "MEM-09", description: "Manage access control for different membership tiers.", priority: "High", riskLevel: "High", consequence: "Ensures members only access the facilities they have paid for.", proof: "Access Control System" },
                { id: "MEM-10", description: "Handle member complaints and feedback effectively.", priority: "High", riskLevel: "High", consequence: "Ignoring complaints leads to dissatisfaction and negative word-of-mouth.", proof: "Complaint Log" }
            ]
        },
        {
            title: "F&B Concession Operations",
            department: "F&B",
            frequency: "Daily",
            role: "Concession Manager",
            summary: "Ensures food safety and efficient service at all food and beverage outlets within the venue.",
            icon: "utensils",
            tasks: [
                { id: "CONC-01", description: "Follow HACCP principles for all food handling and preparation.", priority: "High", riskLevel: "High", consequence: "A food poisoning outbreak can sicken hundreds and lead to major legal action.", proof: "HACCP Plan" },
                { id: "CONC-02", description: "Log temperatures of all hot and cold holding units.", priority: "High", riskLevel: "High", consequence: "Food held at incorrect temperatures is a major food safety risk.", proof: "Temperature Log" },
                { id: "CONC-03", description: "Manage inventory and prevent stockouts during peak times.", priority: "High", riskLevel: "High", consequence: "Stockouts during a match lead to massive lost revenue.", proof: "Inventory Sheet" },
                { id: "CONC-04", description: "Reconcile cash and sales at the end of each event.", priority: "High", riskLevel: "High", consequence: "The only way to track profitability and prevent cash theft.", proof: "Sales Report" },
                { id: "CONC-05", description: "Ensure all staff are trained in food safety and hygiene.", priority: "High", riskLevel: "High", consequence: "Untrained staff are a food safety liability.", proof: "Training Records" },
                { id: "CONC-06", description: "Maintain cleanliness and hygiene of the concession stand.", priority: "High", riskLevel: "High", consequence: "A dirty stand will fail a health inspection and deter customers.", proof: "Cleaning Log" },
                { id: "CONC-07", description: "Manage waste disposal correctly.", priority: "High", riskLevel: "Medium", consequence: "Improper waste management attracts pests.", proof: "Waste Log" },
                { id: "CONC-08", description: "Handle customer orders efficiently and accurately.", priority: "High", riskLevel: "Medium", consequence: "Slow service leads to long queues and lost sales.", proof: "Order Accuracy Check" },
                { id: "CONC-09", description: "Comply with all local food and beverage regulations.", priority: "High", riskLevel: "High", consequence: "Non-compliance can lead to fines or closure.", proof: "License Display" },
                { id: "CONC-10", description: "Manage supplier deliveries and raw material quality.", priority: "High", riskLevel: "High", consequence: "Poor quality ingredients lead to a poor quality final product.", proof: "Receiving Log" }
            ]
        },
        {
            title: "Housekeeping & Venue Presentation",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Housekeeping Supervisor",
            summary: "Ensures the venue is clean, presentable, and safe for guests and members.",
            icon: "sparkles",
            tasks: [
                { id: "HK-VP-01", description: "Inspect and clean all public restrooms hourly during events.", priority: "High", riskLevel: "Medium", consequence: "Dirty restrooms are the number one complaint of spectators.", proof: "Restroom Log" },
                { id: "HK-VP-02", description: "Ensure all seating areas are clean and free of debris before, during, and after events.", priority: "High", riskLevel: "High", consequence: "A dirty venue provides a poor fan experience.", proof: "Seating Area Log" },
                { id: "HK-VP-03", description: "Manage waste collection throughout the venue.", priority: "High", riskLevel: "Medium", consequence: "Overflowing bins are unsightly and unhygienic.", proof: "Waste Collection Log" },
                { id: "HK-VP-04", description: "Clean and maintain all common areas (lobbies, hallways).", priority: "High", riskLevel: "Medium", consequence: "First impressions matter; a clean lobby sets the tone.", proof: "Common Area Log" },
                { id: "HK-VP-05", description: "Respond to cleaning requests and spills promptly.", priority: "High", riskLevel: "High", consequence: "Spills are a major slip-and-fall hazard.", proof: "Spill Response Log" },
                { id: "HK-VP-06", description: "Conduct a post-event deep clean of the entire venue.", priority: "High", riskLevel: "High", consequence: "Prepares the venue for the next event and prevents buildup of grime.", proof: "Deep Clean Report" },
                { id: "HK-VP-07", description: "Ensure all cleaning supplies and equipment are stocked and maintained.", priority: "High", riskLevel: "Low", consequence: "Lack of supplies can halt cleaning operations.", proof: "Supply Inventory" },
                { id: "HK-VP-08", description: "Train housekeeping staff on cleaning standards and safety.", priority: "High", riskLevel: "High", consequence: "Untrained staff can use chemicals incorrectly or miss key areas.", proof: "Training Log" },
                { id: "HK-VP-09", description: "Inspect the exterior of the venue for cleanliness.", priority: "High", riskLevel: "Medium", consequence: "The exterior is the first thing a visitor sees.", proof: "Exterior Inspection Log" },
                { id: "HK-VP-10", description: "Report any maintenance issues found during cleaning.", priority: "High", riskLevel: "High", consequence: "Housekeeping staff are the \"eyes and ears\" of the maintenance team.", proof: "Maintenance Request" }
            ]
        },
        {
            title: "Staff Management & Training",
            department: "HR/Operations",
            frequency: "Ongoing",
            role: "HR Manager",
            summary: "A framework for managing the workforce effectively and ensuring compliance with safety standards.",
            icon: "clipboard-list",
            tasks: [
                { id: "SMT-01", description: "Recruit and onboard new staff according to a standardized process.", priority: "High", riskLevel: "Medium", consequence: "A poor onboarding experience leads to early employee turnover.", proof: "Onboarding Checklist" },
                { id: "SMT-02", description: "Provide comprehensive training on job roles, safety, and customer service.", priority: "High", riskLevel: "High", consequence: "Untrained staff are a liability and provide poor service.", proof: "Training Matrix" },
                { id: "SMT-03", description: "Create and manage staff schedules and rosters.", priority: "High", riskLevel: "High", consequence: "Poor scheduling leads to understaffing or overstaffing, both of which are costly.", proof: "Staff Roster" },
                { id: "SMT-04", description: "Conduct regular performance reviews and provide feedback.", priority: "High", riskLevel: "Medium", consequence: "Without feedback, employees do not know how to improve.", proof: "Performance Review Forms" },
                { id: "SMT-05", description: "Manage staff payroll and benefits.", priority: "High", riskLevel: "High", consequence: "Errors in payroll are a major cause of employee dissatisfaction.", proof: "Payroll Records" },
                { id: "SMT-06", description: "Handle disciplinary issues according to a fair and documented process.", priority: "High", riskLevel: "High", consequence: "An unfair process can lead to lawsuits and a toxic work environment.", proof: "Disciplinary Action Form" },
                { id: "SMT-07", description: "Ensure compliance with all labor laws.", priority: "High", riskLevel: "High", consequence: "Non-compliance can result in heavy fines and legal action.", proof: "Labor Law Audit" },
                { id: "SMT-08", description: "Promote a positive and motivating work environment.", priority: "High", riskLevel: "Medium", consequence: "A negative environment leads to high turnover and poor customer service.", proof: "Employee Satisfaction Survey" },
                { id: "SMT-09", description: "Manage staff uniforms and appearance standards.", priority: "High", riskLevel: "Low", consequence: "A professional appearance is part of the brand image.", proof: "Uniform Policy" },
                { id: "SMT-10", description: "Develop a succession plan for key roles.", priority: "High", riskLevel: "High", consequence: "Losing a key manager without a successor can disrupt operations.", proof: "Succession Plan" }
            ]
        }
    ]
};
