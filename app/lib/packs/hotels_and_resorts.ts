
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotels & Resorts Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "A complete operational toolkit for General Managers and Department Heads to achieve 5-star excellence in every guest experience.",
    icon: "building",
    badgeText: "Most Popular",
    badgeVariant: "default",
    bestseller: true,
    whoIsItFor: ["Hotel Owners", "General Managers", "COOs", "VPs of Operations", "Directors", "Heads of Departments", "GMs", "VPs", "and their teams"],
    sampleItems: [
            { text: "Ensure flawless room presentation with daily readiness and housekeeping verification.", icon: "home" },
            { text: "Uphold world-class food safety with kitchen hygiene (HACCP) and F&B service standards.", icon: "utensils" },
            { text: "Mitigate water-related risks with pool & spa safety protocols and water quality logs.", icon: "life-buoy" },
            { text: "Guarantee guest and staff safety through rigorous fire safety audits and evacuation drills.", icon: "siren" },
            { text: "Control site access and third-party risk with vendor and work permit SOPs.", icon: "hard-hat" },
            { text: "Prevent costly downtime with a proactive preventive maintenance schedule for all critical assets.", icon: "wrench" }
    ],
    checklists: [
        {
            title: "Daily Room Readiness Checklist",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Supervisor",
            summary: "Ensures every guest room meets the highest standards of cleanliness, functionality, and presentation before check-in and during the stay.",
            icon: "bed-double",
            tasks: [
                { id: "HRR-01", description: "Check bed linen for stains, tears, and proper placement.", priority: "High", riskLevel: "Medium", consequence: "Poor guest experience and negative reviews due to unclean or damaged linen.", proof: "Photo of made bed" },
                { id: "HRR-02", description: "Verify minibar stock against the standard list and check for expired items.", priority: "High", riskLevel: "Medium", consequence: "Guest dissatisfaction and potential health risk if expired items are consumed.", proof: "Minibar Restock Sheet" },
                { id: "HRR-03", description: "Test the functionality of the in-room safe and ensure it is empty and open.", priority: "High", riskLevel: "High", consequence: "Guest cannot secure valuables, leading to security concerns and complaints.", proof: "Safe Test Log" },
                { id: "HRR-04", description: "Check all plumbing (taps, shower, toilet) for leaks and proper function. Check water pressure.", priority: "High", riskLevel: "High", consequence: "A minor leak can cause major water damage, while a non-functional toilet is a major service failure.", proof: "Plumbing Check Log" },
                { id: "HRR-05", description: "Inspect all surfaces (tables, counters, mirrors) for cleanliness and dust.", priority: "High", riskLevel: "Low", consequence: "Reflects poorly on the hotel's hygiene standards and attention to detail.", proof: "Visual Check" },
                { id: "HRR-06", description: "Test TV, AC remote controls, and all light switches.", priority: "High", riskLevel: "Medium", consequence: "Non-functional amenities are a common source of guest complaints.", proof: "Functional Test Log" },
                { id: "HRR-07", description: "Replenish all guest amenities (toiletries, tea/coffee, water bottles).", priority: "Medium", riskLevel: "Low", consequence: "Failure to replenish amenities shows a lack of attention to detail.", proof: "Amenity Checklist" },
                { id: "HRR-08", description: "Check functionality of the door lock and key card access.", priority: "High", riskLevel: "High", consequence: "A faulty lock compromises guest safety and security.", proof: "Lock Test Log" },
                { id: "HRR-09", description: "Ensure the room is free of any odors. Use air freshener if necessary.", priority: "Medium", riskLevel: "Low", consequence: "Unpleasant odors can ruin a guest's first impression of the room.", proof: "Olfactory Check" },
                { id: "HRR-10", description: "Final supervisor check and sign-off with photo uploaded to system.", priority: "High", riskLevel: "Medium", consequence: "Provides a layer of accountability and ensures standards are consistently met.", proof: "Supervisor Sign-off" }
            ]
        },
        {
            title: "Pre-Service Kitchen HACCP Start-Up",
            department: "F&B",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Based on HACCP principles, this ensures the kitchen is sanitary and safe before food preparation begins.",
            icon: "utensils-crossed",
            tasks: [
                { id: "HACCP-01", description: "Log temperatures of all walk-in chillers, freezers, and reach-in refrigerators.", priority: "High", riskLevel: "High", consequence: "Temperature deviations can lead to bacterial growth and foodborne illness.", proof: "Temperature Log" },
                { id: "HACCP-02", description: "Verify raw material deliveries against supplier documentation, checking for temperature and quality.", priority: "High", riskLevel: "High", consequence: "Accepting compromised raw materials introduces risk at the very start of the food chain.", proof: "Receiving Log" },
                { id: "HACCP-03", description: "Ensure all handwashing stations are stocked with soap, sanitizer, and paper towels.", priority: "High", riskLevel: "Medium", consequence: "Lack of hand hygiene is a primary cause of foodborne illness transmission.", proof: "Visual Check" },
                { id: "HACCP-04", description: "Check knife sanitation station for correct chemical concentration and temperature.", priority: "High", riskLevel: "High", consequence: "Ineffective sanitation can lead to cross-contamination between food items.", proof: "Sanitizer Log" },
                { id: "HACCP-05", description: "Ensure allergen segregation is maintained in storage (separate shelves) and prep areas (color-coded boards).", priority: "High", riskLevel: "High", consequence: "Cross-contamination can cause severe or fatal allergic reactions.", proof: "Storage Audit Photo" },
                { id: "HACCP-06", description: "Calibrate food thermometers using ice-point or boiling-point method.", priority: "High", riskLevel: "High", consequence: "Inaccurate thermometers can lead to cooking food at unsafe temperatures.", proof: "Calibration Log" },
                { id: "HACCP-07", description: "Inspect all food contact surfaces for cleanliness before starting prep.", priority: "High", riskLevel: "High", consequence: "Dirty surfaces can contaminate food with bacteria from previous preparations.", proof: "Surface Swab Test (optional)" },
                { id: "HACCP-08", description: "Brief staff on the day's menu, highlighting any potential allergens.", priority: "High", riskLevel: "Medium", consequence: "Uninformed staff may give incorrect information to guests with allergies.", proof: "Briefing Notes" },
                { id: "HACCP-09", description: "Check that trash bins are clean, lined, and covered.", priority: "Medium", riskLevel: "Low", consequence: "Open or dirty bins attract pests, which are a major food safety risk.", proof: "Visual Check" },
                { id: "HACCP-10", description: "Ensure pest control traps are in place and not disturbed.", priority: "High", riskLevel: "High", consequence: "Failure to manage pest control can lead to infestations and closure by health authorities.", proof: "Pest Control Log" }
            ]
        },
        {
            title: "Pool & Spa Daily Safety Inspection",
            department: "Recreation",
            frequency: "Daily",
            role: "Pool Supervisor",
            summary: "Ensures the pool and spa areas are safe, hygienic, and compliant with health regulations.",
            icon: "life-buoy",
            tasks: [
                { id: "POOL-01", description: "Test and record chlorine and pH levels of the pool water at least 3 times daily.", priority: "High", riskLevel: "High", consequence: "Incorrect levels can cause skin irritation, eye infections, and allow harmful bacteria to grow.", proof: "Water Quality Log" },
                { id: "POOL-02", description: "Verify lifeguard duty roster and ensure certified lifeguards are present and alert.", priority: "High", riskLevel: "High", consequence: "Absence of a qualified lifeguard can turn a minor incident into a fatal drowning.", proof: "Duty Roster Sign-off" },
                { id: "POOL-03", description: "Check all rescue equipment (life rings, first aid kit, spine board) is present and in good condition.", priority: "High", riskLevel: "High", consequence: "Missing or broken rescue equipment can be the difference between life and death in an emergency.", proof: "Equipment Checklist" },
                { id: "POOL-04", description: "Inspect pool deck for slip hazards, damage, or broken tiles.", priority: "High", riskLevel: "Medium", consequence: "Slip and fall accidents are a major source of guest injuries and lawsuits.", proof: "Visual Inspection Log" },
                { id: "POOL-05", description: "Check and log the temperature of the spa/jacuzzi.", priority: "High", riskLevel: "Medium", consequence: "Water that is too hot can be dangerous, especially for children and the elderly.", proof: "Temperature Log" },
                { id: "POOL-06", description: "Ensure depth markers and safety signage are clearly visible.", priority: "High", riskLevel: "High", consequence: "Lack of clear depth markers can lead to non-swimmers accidentally entering deep water.", proof: "Visual Check" },
                { id: "POOL-07", description: "Inspect pool drains and suction fittings for any blockages or damage.", priority: "High", riskLevel: "High", consequence: "A broken or blocked drain can cause powerful suction, leading to severe injury or drowning (entrapment).", proof: "Drain Inspection Log" },
                { id: "POOL-08", description: "Test the emergency phone or alarm system.", priority: "High", riskLevel: "High", consequence: "In an emergency, a non-working alarm can delay response times critically.", proof: "Test Log" },
                { id: "POOL-09", description: "Skim the pool surface to remove debris.", priority: "Medium", riskLevel: "Low", consequence: "Debris is unsightly and can clog filtration systems.", proof: "Visual Check" },
                { id: "POOL-10", description: "Backwash the pool filters as per the schedule.", priority: "High", riskLevel: "Medium", consequence: "Clogged filters lead to poor water quality and cloudy water.", proof: "Backwash Log" }
            ]
        },
        {
            title: "Preventive Maintenance (PM) Calendar",
            department: "Maintenance",
            frequency: "Scheduled",
            role: "Maintenance Manager",
            summary: "A schedule-based system for proactive maintenance of all critical hotel assets to prevent breakdowns.",
            icon: "wrench",
            tasks: [
                { id: "PM-01", description: "Perform scheduled HVAC filter cleaning/replacement as per the master schedule.", priority: "High", riskLevel: "Medium", consequence: "Clogged filters reduce cooling efficiency, increase electricity costs, and lead to poor air quality.", proof: "Maintenance Log" },
                { id: "PM-02", description: "Conduct weekly load test of backup generators and log fuel levels.", priority: "High", riskLevel: "High", consequence: "Generator failure during a power outage can disrupt the entire hotel operation, from guest check-ins to life-safety systems.", proof: "Generator Test Log" },
                { id: "PM-03", description: "Verify monthly elevator certification and maintenance by vendor, and check the in-lift emergency phone.", priority: "High", riskLevel: "High", consequence: "Elevator malfunction can lead to guest entrapment, a major safety incident, and regulatory action.", proof: "Vendor Certificate & Test Call Log" },
                { id: "PM-04", description: "Log all preventive maintenance activities with vendor reports and schedule next due dates.", priority: "High", riskLevel: "Medium", consequence: "Without a log, there is no proof of due diligence for insurance or legal purposes, and PM tasks get missed.", proof: "Master PM Log" },
                { id: "PM-05", description: "Inspect water pumps and tanks for leaks, pressure, and functionality.", priority: "High", riskLevel: "Medium", consequence: "Pump failure can lead to a complete loss of water supply to guest rooms.", proof: "Pump Inspection Log" },
                { id: "PM-06", description: "Check and clean kitchen exhaust hoods and ducts quarterly.", priority: "High", riskLevel: "High", consequence: "Grease buildup in kitchen ducts is a major fire hazard.", proof: "Cleaning Certificate" },
                { id: "PM-07", description: "Test the hotel's fire pump and sprinkler system monthly.", priority: "High", riskLevel: "High", consequence: "Failure of the fire suppression system during a fire can have catastrophic consequences.", proof: "Fire Pump Test Log" },
                { id: "PM-08", description: "Inspect and test all gas lines and valves for leaks semi-annually.", priority: "High", riskLevel: "High", consequence: "An undetected gas leak can lead to a deadly explosion.", proof: "Gas Leak Test Report" },
                { id: "PM-09", description: "Service all laundry equipment as per manufacturer guidelines.", priority: "Medium", riskLevel: "Medium", consequence: "Breakdowns can halt the supply of clean linen to rooms and restaurants.", proof: "Laundry Maintenance Log" },
                { id: "PM-10", description: "Check and maintain the central hot water system.", priority: "High", riskLevel: "Medium", consequence: "Boiler failure leads to no hot water, a major source of guest complaints.", proof: "Boiler Inspection Log" }
            ]
        },
        {
            title: "Fire Safety & Evacuation Drill SOP",
            department: "Security",
            frequency: "Monthly/Quarterly",
            role: "Safety Officer",
            summary: "A comprehensive checklist to ensure fire safety readiness and effective emergency evacuation.",
            icon: "siren",
            tasks: [
                { id: "FIRE-01", description: "Conduct monthly inspection of all fire extinguishers (pressure, expiry, accessibility).", priority: "High", riskLevel: "High", consequence: "A non-functional extinguisher is useless in a fire.", proof: "Extinguisher Log" },
                { id: "FIRE-02", description: "Perform a quarterly mock evacuation drill with a specific scenario (e.g., kitchen fire).", priority: "High", riskLevel: "High", consequence: "Untrained staff will panic, leading to a chaotic and dangerous evacuation.", proof: "Drill Report" },
                { id: "FIRE-03", description: "Log attendance and time-to-evacuate for each drill, and note any delays.", priority: "High", riskLevel: "High", consequence: "Without measuring, you cannot improve evacuation times.", proof: "Drill Attendance Sheet" },
                { id: "FIRE-04", description: "Perform daily checks of all stairwells and fire exits to ensure they are clear and unlocked.", priority: "High", riskLevel: "High", consequence: "A blocked fire exit is a death trap and a major legal violation (e.g., Uphaar Cinema tragedy).", proof: "Exit Clearance Log" },
                { id: "FIRE-05", description: "Test the public address system and emergency lighting weekly.", priority: "High", riskLevel: "High", consequence: "In a dark, smoke-filled building, PA announcements and emergency lights are critical for guiding people to safety.", proof: "System Test Log" },
                { id: "FIRE-06", description: "Check that fire safety signage (exit signs, floor plans) is in place and visible.", priority: "High", riskLevel: "High", consequence: "Guests and staff cannot evacuate if they don't know where to go.", proof: "Signage Audit" },
                { id: "FIRE-07", description: "Ensure kitchen fire suppression systems (e.g., Ansul) are certified and serviced annually.", priority: "High", riskLevel: "High", consequence: "The most likely place for a fire to start must have a functional, automated suppression system.", proof: "Vendor Certificate" },
                { id: "FIRE-08", description: "Train staff on the different types of fire and how to use the correct extinguisher.", priority: "High", riskLevel: "High", consequence: "Using the wrong extinguisher (e.g., water on an electrical fire) can make the situation worse.", proof: "Training Log" },
                { id: "FIRE-09", description: "Ensure Fire Marshals are appointed and trained for each floor/department.", priority: "High", riskLevel: "High", consequence: "In an evacuation, designated marshals are needed to ensure everyone gets out safely.", proof: "Marshal List" },
                { id: "FIRE-10", description: "Review and update the fire emergency plan annually.", priority: "High", riskLevel: "High", consequence: "An outdated plan may have incorrect contact numbers or procedures.", proof: "Updated Plan" }
            ]
        },
        {
            title: "Vendor Access & Work Permit",
            department: "Security/Maintenance",
            frequency: "Per Vendor Visit",
            role: "Security Supervisor",
            summary: "A protocol to control third-party access to the hotel, mitigating security and safety risks.",
            icon: "hard-hat",
            tasks: [
                { id: "VENDOR-01", description: "Verify contractor ID and check against approved vendor list.", priority: "High", riskLevel: "High", consequence: "Allows unauthorized and potentially dangerous individuals access to the property.", proof: "Visitor Log" },
                { id: "VENDOR-02", description: "Obtain and file a copy of the vendor's liability insurance and any required licenses.", priority: "High", riskLevel: "High", consequence: "If an uninsured contractor causes damage or injury, the hotel could be held liable.", proof: "Insurance & License Copy" },
                { id: "VENDOR-03", description: "Issue a time-bound work permit for a specific area, detailing the scope of work.", priority: "High", riskLevel: "Medium", consequence: "Vendors may wander into guest areas or perform unauthorized work.", proof: "Work Permit" },
                { id: "VENDOR-04", description: "Log all tools and equipment brought in and out by the contractor.", priority: "High", riskLevel: "Medium", consequence: "Prevents theft of hotel property and disputes over vendor equipment.", proof: "Tool Inventory Log" },
                { id: "VENDOR-05", description: "Assign a supervisor to escort vendors in sensitive areas (e.g., server rooms, cash office).", priority: "High", riskLevel: "High", consequence: "Leaving vendors unescorted in critical areas is a major security risk.", proof: "Escort Log" },
                { id: "VENDOR-06", description: "Conduct a safety briefing before any high-risk work (e.g., hot work, electrical).", priority: "High", riskLevel: "High", consequence: "Failure to brief can lead to accidents, fires, or damage to hotel systems.", proof: "Safety Briefing Sign-off" },
                { id: "VENDOR-07", description: "Inspect the work area after completion to ensure it is clean and safe.", priority: "High", riskLevel: "Medium", consequence: "Vendors may leave behind hazards that could injure guests or staff.", proof: "Work Area Clearance Form" },
                { id: "VENDOR-08", description: "Ensure vendors follow all hotel safety and conduct policies.", priority: "High", riskLevel: "High", consequence: "Vendors who don't follow rules can create liability and disrupt operations.", proof: "Policy Acknowledgement Form" },
                { id: "VENDOR-09", description: "Check vendor vehicles for any unauthorized materials.", priority: "Medium", riskLevel: "High", consequence: "Prevents theft of hotel assets or bringing contraband onto the property.", proof: "Vehicle Check Log" },
                { id: "VENDOR-10", description: "Review vendor performance and log any issues for future reference.", priority: "Medium", riskLevel: "Medium", consequence: "Failure to track performance leads to repeatedly hiring unreliable vendors.", proof: "Vendor Performance Log" }
            ]
        },
        {
            title: "Guest Incident Response",
            department: "Management/Security",
            frequency: "Per Incident",
            role: "Duty Manager",
            summary: "A structured process to handle any guest-related incident, from a complaint to a medical emergency.",
            icon: "siren",
            tasks: [
                { id: "INC-01", description: "Perform immediate triage (e.g., provide first aid, secure the area, offer assistance).", priority: "High", riskLevel: "High", consequence: "A slow or incorrect initial response can worsen the situation and increase liability.", proof: "First Action Log" },
                { id: "INC-02", description: "Fill out a detailed incident report with photos, witness statements, and timestamps.", priority: "High", riskLevel: "High", consequence: "A poorly documented incident is impossible to defend legally or for insurance claims.", proof: "Incident Report Form" },
                { id: "INC-03", description: "Follow the defined escalation path for notifying GM, legal, and insurance within 1 hour.", priority: "High", riskLevel: "High", consequence: "Delaying notification can breach insurance policies and hinder crisis management.", proof: "Communication Log" },
                { id: "INC-04", description: "Conduct a root-cause analysis (RCA) for the incident within 24 hours.", priority: "High", riskLevel: "High", consequence: "Without an RCA, the same incident is likely to happen again.", proof: "RCA Report" },
                { id: "INC-05", description: "Develop and track a Corrective and Preventive Action (CAPA) plan.", priority: "High", riskLevel: "High", consequence: "Lessons from the incident are not translated into concrete improvements.", proof: "CAPA Plan" },
                { id: "INC-06", description: "Preserve any relevant evidence, such as CCTV footage.", priority: "High", riskLevel: "High", consequence: "Loss of evidence can cripple legal defense and investigation.", proof: "Evidence Log" },
                { id: "INC-07", description: "Offer a resolution to the guest if appropriate and document it.", priority: "High", riskLevel: "High", consequence: "Poor handling of the guest can lead to negative publicity and lawsuits.", proof: "Guest Resolution Form" },
                { id: "INC-08", description: "Communicate with the guest to show empathy and provide updates.", priority: "High", riskLevel: "High", consequence: "Lack of communication makes the hotel seem uncaring and can escalate guest anger.", proof: "Communication Log" },
                { id: "INC-09", description: "Brief the team on the incident to prevent recurrence.", priority: "Medium", riskLevel: "Medium", consequence: "Fails to spread organizational learning from the event.", proof: "Briefing Notes" },
                { id: "INC-10", description: "Review the incident report for trends and update risk assessments.", priority: "Medium", riskLevel: "Medium", consequence: "Missed opportunity to identify recurring problems and systemic risks.", proof: "Risk Assessment Update" }
            ]
        },
        {
            title: "Security & CCTV Monitoring",
            department: "Security",
            frequency: "Ongoing",
            role: "CCTV Operator",
            summary: "Procedures for active CCTV monitoring to deter and detect security threats.",
            icon: "video",
            tasks: [
                { id: "SEC-CCTV-01", description: "Perform hourly patrols or virtual tours of key areas (lobby, perimeter, parking) via CCTV.", priority: "High", riskLevel: "High", consequence: "Passive monitoring misses critical incidents as they happen.", proof: "CCTV Log" },
                { id: "SEC-CCTV-02", description: "Log any suspicious activity with timestamps, descriptions, and save relevant footage.", priority: "High", riskLevel: "High", consequence: "Untracked activity provides no intelligence for preventing future incidents.", proof: "Incident Log" },
                { id: "SEC-CCTV-03", description: "Verify all cameras are recording, have clear views, and correct timestamp.", priority: "High", riskLevel: "High", consequence: "A non-functional camera creates a blind spot; incorrect time makes footage useless as evidence.", proof: "System Health Check" },
                { id: "SEC-CCTV-04", description: "Ensure footage is backed up according to the data retention policy (e.g., 30 days).", priority: "High", riskLevel: "High", consequence: "Footage may be overwritten before an investigation is complete, resulting in loss of crucial evidence.", proof: "Backup Log" },
                { id: "SEC-CCTV-05", description: "Test panic alarm functionality and response weekly.", priority: "High", riskLevel: "High", consequence: "A failed panic alarm can delay response in a robbery or other emergency.", proof: "Test Log" },
                { id: "SEC-CCTV-06", description: "Monitor baggage screening process for any threats.", priority: "High", riskLevel: "High", consequence: "Allows weapons or other contraband to enter the hotel.", proof: "Screening Log" },
                { id: "SEC-CCTV-07", description: "Check access control system logs for any unauthorized access attempts.", priority: "High", riskLevel: "High", consequence: "Misses early warning signs of a potential breach.", proof: "Access Control Log" },
                { id: "SEC-CCTV-08", description: "Ensure all security personnel are at their posts.", priority: "High", riskLevel: "High", consequence: "An unmanned post creates a vulnerability in the security layer.", proof: "Roster Check" },
                { id: "SEC-CCTV-09", description: "Coordinate with local law enforcement during any major incident.", priority: "High", riskLevel: "High", consequence: "A disorganized response can lead to delays and conflicting actions.", proof: "Communication Log" },
                { id: "SEC-CCTV-10", description: "Maintain confidentiality of all security footage and information.", priority: "High", riskLevel: "High", consequence: "Leaking footage can violate guest privacy and compromise investigations.", proof: "Confidentiality Agreement" }
            ]
        }
    ]
};

  