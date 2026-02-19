
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
    description: "Eliminate guest safety gaps, audit failures, and viral reputation damage with the Institutional Standard for 5-star reliability.",
    heroHeadline: "Eliminate guest safety gaps and viral reputation damage.",
    heroSubheadline: "Built for audit-ready hotels that take zero-risk operational excellence seriously.",
    pricingUrgency: "One safety incident or negative viral review costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "building",
    badgeText: "Most Popular",
    badgeVariant: "default",
    bestseller: true,
    whoIsItFor: ["General Managers", "Owners", "Heads of Housekeeping", "Chief Engineers", "Security Directors"],
    sampleItems: [
        { text: "<strong>Guarantee</strong> flawless room presentation with daily readiness and housekeeping verification.", icon: "home" },
        { text: "<strong>Uphold</strong> world-class food safety with kitchen hygiene (HACCP) and F&B service standards.", icon: "utensils" },
        { text: "<strong>Mitigate</strong> water-related risks with pool & spa safety protocols and water quality logs.", icon: "life-buoy" },
        { text: "<strong>Secure</strong> guest and staff safety through rigorous fire safety audits and evacuation drills.", icon: "siren" },
        { text: "<strong>Control</strong> site access and third-party risk with vendor and work permit SOPs.", icon: "hard-hat" },
        { text: "<strong>Prevent</strong> costly downtime with a proactive preventive maintenance schedule for all critical assets.", icon: "wrench" }
    ],
    checklists: [
        {
            title: "Daily Room Readiness Checklist",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Supervisor",
            summary: "Ensures every guest room meets the highest standards of cleanliness and functionality before check-in.",
            icon: "bed-double",
            tasks: [
                { id: "HRR-01", description: "Check bed linen for stains, tears, and proper placement.", priority: "High", riskLevel: "Medium", consequence: "Poor guest experience and negative reviews due to unclean or damaged linen.", proof: "Photo of made bed" },
                { id: "HRR-02", description: "Verify minibar stock against the standard list and check for expired items.", priority: "High", riskLevel: "Medium", consequence: "Guest dissatisfaction and potential health risk if expired items are consumed.", proof: "Minibar Restock Sheet" },
                { id: "HRR-03", description: "Test the functionality of the in-room safe and ensure it is empty and open.", priority: "High", riskLevel: "High", consequence: "Guest cannot secure valuables, leading to security concerns and complaints.", proof: "Safe Test Log" },
                { id: "HRR-04", description: "Check all plumbing (taps, shower, toilet) for leaks and proper function. Check water pressure.", priority: "High", riskLevel: "High", consequence: "A minor leak can cause major water damage, while a non-functional toilet is a major service failure.", proof: "Plumbing Check Log" },
                { id: "HRR-05", description: "Inspect all surfaces (tables, counters, mirrors) for cleanliness and dust.", priority: "High", riskLevel: "Low", consequence: "Reflects poorly on the hotel's hygiene standards.", proof: "Visual Check" },
                { id: "HRR-06", description: "Test TV, AC remote controls, and all light switches.", priority: "High", riskLevel: "Medium", consequence: "Non-functional amenities are a common source of guest complaints.", proof: "Functional Test Log" },
                { id: "HRR-07", description: "Replenish all guest amenities (toiletries, tea/coffee, water bottles).", priority: "Medium", riskLevel: "Low", consequence: "Failure to replenish amenities shows a lack of attention to detail.", proof: "Amenity Checklist" },
                { id: "HRR-08", description: "Check functionality of the door lock and key card access.", priority: "High", riskLevel: "High", consequence: "A faulty lock compromises guest safety and security.", proof: "Lock Test Log" },
                { id: "HRR-09", description: "Ensure the room is free of any odors. Use air freshener if necessary.", priority: "Medium", riskLevel: "Low", consequence: "Unpleasant odors can ruin a guest's first impression of the room.", proof: "Olfactory Check" },
                { id: "HRR-10", description: "Final supervisor check and sign-off with photo uploaded to system.", priority: "High", riskLevel: "Medium", consequence: "Ensures standards are consistently met across all rooms.", proof: "Supervisor Sign-off" }
            ]
        },
        {
            title: "Pre-Service Kitchen HACCP Start-Up",
            department: "F&B",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Based on HACCP principles, ensures the kitchen is sanitary and safe before food prep begins.",
            icon: "utensils-crossed",
            tasks: [
                { id: "HACCP-01", description: "Log temperatures of all walk-in chillers, freezers, and reach-in refrigerators.", priority: "High", riskLevel: "High", consequence: "Temperature deviations can lead to bacterial growth and foodborne illness.", proof: "Temperature Log" },
                { id: "HACCP-02", description: "Verify raw material deliveries against supplier documentation, checking for temperature and quality.", priority: "High", riskLevel: "High", consequence: "Accepting compromised raw materials introduces risk at the start of the chain.", proof: "Receiving Log" },
                { id: "HACCP-03", description: "Ensure all handwashing stations are stocked with soap, sanitizer, and paper towels.", priority: "High", riskLevel: "Medium", consequence: "Lack of hand hygiene is a primary cause of foodborne illness transmission.", proof: "Visual Check" },
                { id: "HACCP-04", description: "Check knife sanitation station for correct chemical concentration and temperature.", priority: "High", riskLevel: "High", consequence: "Ineffective sanitation can lead to cross-contamination.", proof: "Sanitizer Log" },
                { id: "HACCP-05", description: "Ensure allergen segregation is maintained in storage and prep areas.", priority: "High", riskLevel: "High", consequence: "Cross-contamination can cause severe or fatal allergic reactions.", proof: "Storage Audit Photo" },
                { id: "HACCP-06", description: "Calibrate food thermometers using ice-point or boiling-point method.", priority: "High", riskLevel: "High", consequence: "Inaccurate thermometers lead to cooking food at unsafe temperatures.", proof: "Calibration Log" },
                { id: "HACCP-07", description: "Inspect all food contact surfaces for cleanliness before starting prep.", priority: "High", riskLevel: "High", consequence: "Dirty surfaces can contaminate food with bacteria.", proof: "Visual Audit" },
                { id: "HACCP-08", description: "Brief staff on the day's menu, highlighting any potential allergens.", priority: "High", riskLevel: "Medium", consequence: "Uninformed staff may give incorrect information to guests with allergies.", proof: "Briefing Notes" },
                { id: "HACCP-09", description: "Check that trash bins are clean, lined, and covered.", priority: "Medium", riskLevel: "Low", consequence: "Open or dirty bins attract pests, a major food safety risk.", proof: "Visual Check" },
                { id: "HACCP-10", description: "Ensure pest control traps are in place and not disturbed.", priority: "High", riskLevel: "High", consequence: "Failure to manage pest control leads to infestations and health closures.", proof: "Pest Control Log" }
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
                { id: "POOL-01", description: "Test and record chlorine and pH levels at least 3 times daily.", priority: "High", riskLevel: "High", consequence: "Incorrect levels can cause skin/eye irritation and allow bacteria to grow.", proof: "Water Quality Log" },
                { id: "POOL-02", description: "Verify lifeguard duty roster and ensure lifeguards are present and alert.", priority: "High", riskLevel: "High", consequence: "Absence of a qualified lifeguard can turn a minor incident into a fatal drowning.", proof: "Duty Roster Sign-off" },
                { id: "POOL-03", description: "Check all rescue equipment (life rings, first aid kit) is present and functional.", priority: "High", riskLevel: "High", consequence: "Missing or broken equipment can be fatal in an emergency.", proof: "Equipment Checklist" },
                { id: "POOL-04", description: "Inspect pool deck for slip hazards or broken tiles.", priority: "High", riskLevel: "Medium", consequence: "Slip and fall accidents are a major source of lawsuits.", proof: "Visual Inspection Log" },
                { id: "POOL-05", description: "Check and log the temperature of the spa/jacuzzi.", priority: "High", riskLevel: "Medium", consequence: "Water that is too hot can be dangerous for vulnerable guests.", proof: "Temperature Log" },
                { id: "POOL-06", description: "Ensure depth markers and safety signage are clearly visible.", priority: "High", riskLevel: "High", consequence: "Lack of markers can lead to non-swimmers entering deep water.", proof: "Visual Check" },
                { id: "POOL-07", description: "Inspect pool drains and suction fittings for any blockages.", priority: "High", riskLevel: "High", consequence: "A broken drain can cause powerful suction, leading to entrapment.", proof: "Drain Inspection Log" },
                { id: "POOL-08", description: "Test the emergency phone or alarm system.", priority: "High", riskLevel: "High", consequence: "In an emergency, a non-working alarm delays response times.", proof: "Test Log" },
                { id: "POOL-09", description: "Skim the pool surface to remove debris.", priority: "Medium", riskLevel: "Low", consequence: "Debris is unsightly and can clog filtration.", proof: "Visual Check" },
                { id: "POOL-10", description: "Backwash the pool filters as per the schedule.", priority: "High", riskLevel: "Medium", consequence: "Clogged filters lead to cloudy, unsanitary water.", proof: "Backwash Log" }
            ]
        },
        {
            title: "Preventive Maintenance (PM) Calendar",
            department: "Maintenance",
            frequency: "Scheduled",
            role: "Maintenance Manager",
            summary: "Schedule-based system for proactive maintenance of all critical hotel assets.",
            icon: "wrench",
            tasks: [
                { id: "PM-01", description: "Perform scheduled HVAC filter cleaning/replacement.", priority: "High", riskLevel: "Medium", consequence: "Reduces efficiency and leads to poor air quality.", proof: "Maintenance Log" },
                { id: "PM-02", description: "Conduct weekly load test of backup generators and log fuel levels.", priority: "High", riskLevel: "High", consequence: "Generator failure during a power outage disrupts the entire operation.", proof: "Generator Test Log" },
                { id: "PM-03", description: "Verify monthly elevator certification and check emergency phones.", priority: "High", riskLevel: "High", consequence: "Malfunction can lead to guest entrapment and major liability.", proof: "Vendor Certificate & Log" },
                { id: "PM-04", description: "Log all maintenance activities and schedule next due dates.", priority: "High", riskLevel: "Medium", consequence: "Without a log, there is no proof of due diligence for insurance.", proof: "Master PM Log" },
                { id: "PM-05", description: "Inspect water pumps and tanks for leaks and pressure.", priority: "High", riskLevel: "Medium", consequence: "Pump failure can lead to loss of water supply to rooms.", proof: "Pump Inspection Log" },
                { id: "PM-06", description: "Check and clean kitchen exhaust hoods quarterly.", priority: "High", riskLevel: "High", consequence: "Grease buildup is a major fire hazard.", proof: "Cleaning Certificate" },
                { id: "PM-07", description: "Test the hotel's fire pump and sprinkler system monthly.", priority: "High", riskLevel: "High", consequence: "Failure of suppression system during a fire is catastrophic.", proof: "Fire Pump Test Log" },
                { id: "PM-08", description: "Inspect and test all gas lines for leaks semi-annually.", priority: "High", riskLevel: "High", consequence: "An undetected gas leak can lead to a deadly explosion.", proof: "Gas Leak Test Report" },
                { id: "PM-09", description: "Service all laundry equipment as per schedule.", priority: "Medium", riskLevel: "Medium", consequence: "Breakdowns halt the supply of clean linen.", proof: "Laundry Maintenance Log" },
                { id: "PM-10", description: "Check and maintain the central hot water system.", priority: "High", riskLevel: "Medium", consequence: "Boiler failure leads to no hot water, a major guest complaint.", proof: "Boiler Inspection Log" }
            ]
        },
        {
            title: "Fire Safety & Evacuation Drill SOP",
            department: "Security",
            frequency: "Monthly/Quarterly",
            role: "Safety Officer",
            summary: "Ensures fire safety readiness and effective emergency evacuation.",
            icon: "siren",
            tasks: [
                { id: "FIRE-01", description: "Conduct monthly inspection of all fire extinguishers.", priority: "High", riskLevel: "High", consequence: "A non-functional extinguisher is useless in a fire.", proof: "Extinguisher Log" },
                { id: "FIRE-02", description: "Perform a quarterly mock evacuation drill.", priority: "High", riskLevel: "High", consequence: "Untrained staff will panic, leading to dangerous chaos.", proof: "Drill Report" },
                { id: "FIRE-03", description: "Log attendance and time-to-evacuate for each drill.", priority: "High", riskLevel: "High", consequence: "Without measuring, you cannot improve evacuation speed.", proof: "Drill Attendance Sheet" },
                { id: "FIRE-04", description: "Daily checks of all stairwells and fire exits to ensure they are clear.", priority: "High", riskLevel: "High", consequence: "A blocked fire exit is a death trap.", proof: "Exit Clearance Log" },
                { id: "FIRE-05", description: "Test the public address system and emergency lighting weekly.", priority: "High", riskLevel: "High", consequence: "Critical for guiding people to safety in smoke-filled areas.", proof: "System Test Log" },
                { id: "FIRE-06", description: "Check that fire safety signage is in place and visible.", priority: "High", riskLevel: "High", consequence: "Guests and staff cannot evacuate if they don't know where to go.", proof: "Signage Audit" },
                { id: "FIRE-07", description: "Ensure kitchen fire suppression systems are certified annually.", priority: "High", riskLevel: "High", consequence: "Kitchen fires are common and must be handled automatically.", proof: "Vendor Certificate" },
                { id: "FIRE-08", description: "Train staff on using the correct extinguisher for different fire types.", priority: "High", riskLevel: "High", consequence: "Using the wrong extinguisher can make the situation worse.", proof: "Training Log" },
                { id: "FIRE-09", description: "Ensure Fire Marshals are appointed and trained.", priority: "High", riskLevel: "High", consequence: "Lack of leadership during evacuation causes panic.", proof: "Marshal List" },
                { id: "FIRE-10", description: "Review and update the fire emergency plan annually.", priority: "High", riskLevel: "High", consequence: "Outdated contacts or procedures hinder response.", proof: "Updated Plan" }
            ]
        },
        {
            title: "Vendor Access & Work Permit",
            department: "Security/Maintenance",
            frequency: "Per Vendor Visit",
            role: "Security Supervisor",
            summary: "Protocol to control third-party access, mitigating security and safety risks.",
            icon: "hard-hat",
            tasks: [
                { id: "VENDOR-01", description: "Verify contractor ID and check against approved vendor list.", priority: "High", riskLevel: "High", consequence: "Allows unauthorized individuals access to the property.", proof: "Visitor Log" },
                { id: "VENDOR-02", description: "Obtain and file copies of vendor's liability insurance and licenses.", priority: "High", riskLevel: "High", consequence: "Hotel could be liable for uninsured contractor damage.", proof: "Insurance & License Copy" },
                { id: "VENDOR-03", description: "Issue a time-bound work permit detailing the scope of work.", priority: "High", riskLevel: "Medium", consequence: "Vendors may wander into guest areas or perform unauthorized work.", proof: "Work Permit" },
                { id: "VENDOR-04", description: "Log all tools and equipment brought in and out by the contractor.", priority: "High", riskLevel: "Medium", consequence: "Prevents theft and disputes over vendor equipment.", proof: "Tool Inventory Log" },
                { id: "VENDOR-05", description: "Assign a supervisor to escort vendors in sensitive areas.", priority: "High", riskLevel: "High", consequence: "Leaving vendors unescorted in critical areas is a major security risk.", proof: "Escort Log" },
                { id: "VENDOR-06", description: "Conduct a safety briefing before any high-risk work.", priority: "High", riskLevel: "High", consequence: "Failure to brief can lead to fires or damage to hotel systems.", proof: "Safety Briefing Sign-off" },
                { id: "VENDOR-07", description: "Inspect the work area after completion to ensure it is safe.", priority: "High", riskLevel: "Medium", consequence: "Hazards left behind could injure guests or staff.", proof: "Work Area Clearance Form" },
                { id: "VENDOR-08", description: "Ensure vendors follow all hotel safety and conduct policies.", priority: "High", riskLevel: "High", consequence: "Rules violations create liability and disrupt operations.", proof: "Policy Form" },
                { id: "VENDOR-09", description: "Check vendor vehicles for any unauthorized materials.", priority: "Medium", riskLevel: "High", consequence: "Prevents theft of hotel assets or contraband entry.", proof: "Vehicle Check Log" },
                { id: "VENDOR-10", description: "Review vendor performance and log any issues.", priority: "Medium", riskLevel: "Medium", consequence: "Leads to repeatedly hiring unreliable vendors.", proof: "Vendor Performance Log" }
            ]
        },
        {
            title: "Guest Incident Response",
            department: "Management/Security",
            frequency: "Per Incident",
            role: "Duty Manager",
            summary: "Structured process to handle guest-related incidents and minimize liability.",
            icon: "siren",
            tasks: [
                { id: "INC-01", description: "Perform immediate triage (e.g., first aid, secure the area).", priority: "High", riskLevel: "High", consequence: "Slow initial response worsens the situation and increases liability.", proof: "First Action Log" },
                { id: "INC-02", description: "Fill out a detailed incident report with photos and witness statements.", priority: "High", riskLevel: "High", consequence: "Poor documentation is impossible to defend in court.", proof: "Incident Report Form" },
                { id: "INC-03", description: "Follow the escalation path for notifying GM and insurance.", priority: "High", riskLevel: "High", consequence: "Delaying notification can breach insurance policies.", proof: "Communication Log" },
                { id: "INC-04", description: "Conduct a root-cause analysis (RCA) within 24 hours.", priority: "High", riskLevel: "High", consequence: "Without an RCA, the same incident will happen again.", proof: "RCA Report" },
                { id: "INC-05", description: "Develop and track a Corrective and Preventive Action (CAPA) plan.", priority: "High", riskLevel: "High", consequence: "Lessons are not translated into concrete improvements.", proof: "CAPA Plan" },
                { id: "INC-06", description: "Preserve any relevant evidence, such as CCTV footage.", priority: "High", riskLevel: "High", consequence: "Loss of evidence cripples legal defense.", proof: "Evidence Log" },
                { id: "INC-07", description: "Offer a resolution to the guest and document it.", priority: "High", riskLevel: "High", consequence: "Poor handling leads to negative publicity and lawsuits.", proof: "Guest Resolution Form" },
                { id: "INC-08", description: "Communicate with the guest to show empathy and provide updates.", priority: "High", riskLevel: "High", consequence: "Lack of communication escalates guest anger.", proof: "Communication Log" },
                { id: "INC-09", description: "Brief the team on the incident to prevent recurrence.", priority: "Medium", riskLevel: "Medium", consequence: "Fails to spread organizational learning.", proof: "Briefing Notes" },
                { id: "INC-10", description: "Review the incident report for trends and update risk assessments.", priority: "Medium", riskLevel: "Medium", consequence: "Missed opportunity to identify systemic problems.", proof: "Risk Assessment Update" }
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
                { id: "SEC-CCTV-01", description: "Perform hourly patrols of key areas via CCTV.", priority: "High", riskLevel: "High", consequence: "Passive monitoring misses critical incidents as they happen.", proof: "CCTV Log" },
                { id: "SEC-CCTV-02", description: "Log suspicious activity with timestamps and save footage.", priority: "High", riskLevel: "High", consequence: "Untracked activity provides no intelligence for prevention.", proof: "Incident Log" },
                { id: "SEC-CCTV-03", description: "Verify all cameras are functional and have correct timestamps.", priority: "High", riskLevel: "High", consequence: "Non-functional cameras create blind spots; incorrect time ruins evidence.", proof: "System Health Check" },
                { id: "SEC-CCTV-04", description: "Ensure footage is backed up according to retention policy.", priority: "High", riskLevel: "High", consequence: "Footage may be overwritten before an investigation ends.", proof: "Backup Log" },
                { id: "SEC-CCTV-05", description: "Test panic alarm functionality weekly.", priority: "High", riskLevel: "High", consequence: "Failed panic alarm delays response during robbery.", proof: "Test Log" },
                { id: "SEC-CCTV-06", description: "Monitor baggage screening process for any threats.", priority: "High", riskLevel: "High", consequence: "Allows weapons or contraband to enter the hotel.", proof: "Screening Log" },
                { id: "SEC-CCTV-07", description: "Check access control logs for unauthorized attempts.", priority: "High", riskLevel: "High", consequence: "Misses early warning signs of a breach.", proof: "Access Control Log" },
                { id: "SEC-CCTV-08", description: "Ensure all security personnel are at their assigned posts.", priority: "High", riskLevel: "High", consequence: "Unmanned posts create critical vulnerabilities.", proof: "Roster Check" },
                { id: "SEC-CCTV-09", description: "Coordinate with law enforcement during major incidents.", priority: "High", riskLevel: "High", consequence: "Disorganized response leads to conflicting actions.", proof: "Communication Log" },
                { id: "SEC-CCTV-10", description: "Maintain strict confidentiality of all security footage.", priority: "High", riskLevel: "High", consequence: "Leaking footage violates guest privacy and compromises investigations.", proof: "Confidentiality Agreement" }
            ]
        }
    ]
};
