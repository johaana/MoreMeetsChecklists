
import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c12368-2c26-4e58-b1de-149b80b292e7',
    category: "Education",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.4 is the safety safeguard for educational institutions.",
    heroHeadline: "Prevent Campus Tragedies and Administrative Chaos",
    heroSubheadline: "Track transport safety, monitor playground risks, and stay in control of student welfare—across 100+ technical points.",
    pricingUrgency: "In education, a single safety 'never event' isn't just expensive—it's an institutional catastrophe. This system is the safeguard.",
    consultingAnchor: 10000,
    icon: "school",
    badgeText: "Safety Critical",
    badgeVariant: "destructive",
    whoIsItFor: ["School Principals", "Trustees & Board Members", "Heads of Administration", "Transport Managers"],
    sampleItems: [
        { text: "<strong>2-Minute Safety Pulse</strong>: Bus drivers, wardens, and admin staff update status in seconds. Zero-friction reporting.", icon: "timer" },
        { text: "<strong>Transport Command</strong>: Bulletproof protocols for bus maintenance, student drop-offs, and 'no-child-left-behind' walkthroughs.", icon: "bus" },
        { text: "<strong>Visitor Governance</strong>: Strict, logged verification for every individual entering the campus to harden your perimeter.", icon: "shield-check" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show Principals exactly what needs immediate sign-off.", icon: "target" },
        { text: "<strong>Institutional Memory</strong>: Capture expert knowledge so new staff are safety-ready and compliant from Day 1.", icon: "history" },
        { text: "<strong>Parent Risk Shield</strong>: Track incidents that trigger complaints or legal threats to harden your defense.", icon: "shield-alert" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your institutional data forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Student Transport & Safety",
            department: "Transport",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "Ensures the safe transportation of all students and zero-fail attendance.",
            icon: "bus",
            tasks: [
                { id: "SC-TRA-01", description: "Perform daily pre-trip inspection of all buses (brakes, tires, fuel).", priority: "High", riskLevel: "High", consequence: "Mechanical failure during transit leading to injury.", proof: "Driver Sign-off", trainerNotes: "Check tire pressure manually." },
                { id: "SC-TRA-02", description: "Verify GPS trackers and CCTV inside buses are active.", priority: "High", riskLevel: "High", consequence: "Inability to track bus during emergency or investigate complaints.", proof: "System Dashboard", trainerNotes: "Sync with mobile app." },
                { id: "SC-TRA-03", description: "Mandatory 'Empty Bus Walkthrough' at end of every trip.", priority: "High", riskLevel: "High", consequence: "Child left behind in bus (Fatal never-event).", proof: "Secondary Sign-off", trainerNotes: "Physically touch the back seat." },
                { id: "SC-TRA-04", description: "Check that a female attendant is present on every route.", priority: "High", riskLevel: "High", consequence: "Legal violation and child protection risk.", proof: "Roster Check", trainerNotes: "Verify uniform and ID." },
                { id: "SC-TRA-05", description: "Verify driver and conductor possess valid, in-date licenses.", priority: "High", riskLevel: "High", consequence: "Massive institutional liability and insurance denial.", proof: "License File", trainerNotes: "Check expiry 30 days early." },
                { id: "SC-TRA-06", description: "Log bus speed alerts and rash driving instances.", priority: "Medium", riskLevel: "Medium", consequence: "Increased accident risk and parent complaints.", proof: "GPS Report", trainerNotes: "Maximum speed limit: 40km/h." },
                { id: "SC-TRA-07", description: "Ensure first-aid kits and fire extinguishers in buses are stocked.", priority: "High", riskLevel: "High", consequence: "Inability to respond to a fire or medical event.", proof: "Seal Verification", trainerNotes: "Check pressure gauges." },
                { id: "SC-TRA-08", description: "Track student boarding/de-boarding times.", priority: "Medium", riskLevel: "Low", consequence: "Administrative confusion during parent inquiries.", proof: "Tablet Sync", trainerNotes: "Real-time updates only." },
                { id: "SC-TRA-09", description: "Verify driver sobriety check before the morning shift.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash risk.", proof: "Supervisor Initials", trainerNotes: "Breathalyzer test mandatory." },
                { id: "SC-TRA-10", description: "Confirm all student pick-up authorizations match ID cards.", priority: "High", riskLevel: "High", consequence: "Kidnapping or unauthorized removal of child.", proof: "Verification Log", trainerNotes: "Scan original ID card only." }
            ]
        },
        {
            title: "Campus Security & Visitor Control",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardens the school perimeter against unauthorized access.",
            icon: "shield-check",
            tasks: [
                { id: "SC-SEC-01", description: "Audit the visitor register for 100% ID verification compliance.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder gaining access to students.", proof: "Registry Audit", trainerNotes: "Retain ID at gate." },
                { id: "SC-SEC-02", description: "Verify all gate locks and perimeter fence integrity.", priority: "High", riskLevel: "High", consequence: "Perimeter breach.", proof: "Walkthrough", trainerNotes: "Check for holes in wire mesh." },
                { id: "SC-SEC-03", description: "Test campus-wide fire alarm and PA system.", priority: "High", riskLevel: "High", consequence: "Fatal delay in emergency communication.", proof: "Sound Test", trainerNotes: "Conduct before school hours." },
                { id: "SC-SEC-04", description: "Confirm CCTV coverage of high-risk 'blind spots' (stairs, back alleys).", priority: "High", riskLevel: "Medium", consequence: "Lack of evidence for bullying or theft incidents.", proof: "Monitor Check", trainerNotes: "Check DVR recording status." },
                { id: "SC-SEC-05", description: "Enforce 'No Entry Without Badge' policy for all staff/vendors.", priority: "Medium", riskLevel: "Low", consequence: "Unidentified persons on campus.", proof: "Visual Audit", trainerNotes: "Badges must be chest-high." }
            ]
        },
        {
            title: "Lab & Chemical Governance",
            department: "Science",
            frequency: "Weekly",
            role: "Lab Assistant",
            summary: "Manages hazardous materials and lab safety protocols.",
            icon: "test-tube",
            tasks: [
                { id: "SC-LAB-01", description: "Verify chemical storage segregation (Acid/Flammable separation).", priority: "High", riskLevel: "High", consequence: "Explosion or toxic gas release.", proof: "Storage Audit" },
                { id: "SC-LAB-02", description: "Check expiry and labeling of all high-risk chemicals.", priority: "High", riskLevel: "Medium", consequence: "Unexpected reactions or legal non-compliance.", proof: "Chemical Register" },
                { id: "SC-LAB-03", description: "Test lab eye-wash stations and ventilation hoods.", priority: "High", riskLevel: "High", consequence: "Fatal injury after chemical spill.", proof: "Test Log" },
                { id: "SC-LAB-04", description: "Audit availability of PPE: goggles, gloves, and lab coats.", priority: "Medium", riskLevel: "Low", consequence: "Preventable student injuries.", proof: "Stock Check" }
            ]
        },
        {
            title: "Classroom Tech & Infrastructure",
            department: "IT/Admin",
            frequency: "Weekly",
            role: "Admin Coordinator",
            summary: "Ensures classroom assets and technology are operational.",
            icon: "laptop",
            tasks: [
                { id: "SC-IT-01", description: "Verify all classroom projectors and smart-boards are operational.", priority: "Medium", riskLevel: "Low", consequence: "Interruption to teaching and curriculum delivery.", proof: "Tech Audit" },
                { id: "SC-IT-02", description: "Check classroom Wi-Fi connectivity and bandwidth limits.", priority: "Medium", riskLevel: "Low", consequence: "Inability to use digital learning resources.", proof: "Speed Test" },
                { id: "SC-IT-03", description: "Inspect desks and chairs for structural damage or splinters.", priority: "High", riskLevel: "Medium", consequence: "Student injury and insurance claims.", proof: "Walkthrough" },
                { id: "SC-IT-04", description: "Check classroom air-conditioning / ventilation efficiency.", priority: "Medium", riskLevel: "Low", consequence: "Poor learning environment.", proof: "Temp Reading" }
            ]
        },
        {
            title: "Canteen & Food Safety",
            department: "Canteen",
            frequency: "Daily",
            role: "Canteen Manager",
            summary: "HACCP-aligned protocols for school kitchens and cafeterias.",
            icon: "utensils",
            tasks: [
                { id: "SC-CAN-01", description: "Log morning fridge and freezer temperatures.", priority: "High", riskLevel: "High", consequence: "Foodborne illness outbreak among students.", proof: "Temp Log" },
                { id: "SC-CAN-02", description: "Inspect incoming fresh produce for hygiene and freshness.", priority: "High", riskLevel: "Medium", consequence: "Serving contaminated or sub-par food.", proof: "Receiving Note" },
                { id: "SC-CAN-03", description: "Verify staff handwashing and head-gear compliance.", priority: "High", riskLevel: "Medium", consequence: "Physical contamination of food.", proof: "Daily Audit" }
            ]
        },
        {
            title: "Playground & Sports Safety",
            department: "Sports",
            frequency: "Daily",
            role: "PE Lead",
            summary: "Ensures outdoor areas are safe for student activity.",
            icon: "volleyball",
            tasks: [
                { id: "SC-PLY-01", description: "Inspect playground equipment for rust, loose bolts, or sharp edges.", priority: "High", riskLevel: "High", consequence: "Catastrophic child injury on campus.", proof: "Safety Log" },
                { id: "SC-PLY-02", description: "Verify 'First-Aid Field Kits' are stocked and present on pitch.", priority: "High", riskLevel: "Medium", consequence: "Inability to treat pitch-side injuries.", proof: "Kit Inventory" },
                { id: "SC-PLY-03", description: "Check sports-field perimeter for stray animals or debris.", priority: "Medium", riskLevel: "Medium", consequence: "Animal bites or trip hazards.", proof: "Visual Check" }
            ]
        },
        {
            title: "Medical Room & Infirmary",
            department: "Medical",
            frequency: "Daily",
            role: "School Nurse",
            summary: "Governance for on-campus healthcare assets.",
            icon: "heart-pulse",
            tasks: [
                { id: "SC-MED-01", description: "Verify inventory of critical medications (Epi-pens, inhalers).", priority: "High", riskLevel: "High", consequence: "Inability to respond to fatal allergic shocks.", proof: "Drug Register" },
                { id: "SC-MED-02", description: "Check expiry dates of all stored pharmaceuticals.", priority: "High", riskLevel: "Medium", consequence: "Serving ineffective or harmful medicines.", proof: "Expiry Audit" },
                { id: "SC-MED-03", description: "Update 'Student Allergy Matrix' for current admissions.", priority: "High", riskLevel: "High", consequence: "Mismatched medical response during crisis.", proof: "Matrix Update" }
            ]
        },
        {
            title: "Janitorial & Sanitation",
            department: "Facilities",
            frequency: "Hourly",
            role: "Facility Manager",
            summary: "Hourly hygiene command for high-traffic student zones.",
            icon: "sparkles",
            tasks: [
                { id: "SC-JAN-01", description: "Audit washroom cleaning logs: verify 1-hour frequency.", priority: "High", riskLevel: "Low", consequence: "Major driver of parent complaints.", proof: "Hourly Sheet" },
                { id: "SC-JAN-02", description: "Verify stock of hand-soap and sanitizers in Restrooms.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene breakdown.", proof: "Stock Check" },
                { id: "SC-JAN-03", description: "Inspect drinking-water points for drainage and cleanliness.", priority: "High", riskLevel: "Medium", consequence: "Water-borne disease spread.", proof: "Visual Audit" }
            ]
        }
    ]
};
