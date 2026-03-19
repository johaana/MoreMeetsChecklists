
import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operating System (Sovereign v4.3)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c12368-2c26-4e58-b1de-149b80b292e7',
    category: "Education",
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v4.3 is the safety safeguard for educational institutions.",
    heroHeadline: "Prevent Campus Tragedies and Administrative Chaos",
    heroSubheadline: "Track transport safety, monitor playground risks, and stay in control of student welfare—across 100+ technical points.",
    pricingUrgency: "In education, a single safety 'never event' isn't just expensive—it's an institutional catastrophe. This system is the safeguard.",
    consultingAnchor: 10000,
    icon: "school",
    badgeText: "V4.3 SOVEREIGN",
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
                { id: "SC-TRA-01", description: "Perform daily pre-trip inspection of all buses (brakes, tires, fuel).", priority: "High", riskLevel: "High", consequence: "Mechanical failure during transit leading to injury.", proof: "Driver Sign-off" },
                { id: "SC-TRA-02", description: "Verify GPS trackers and CCTV inside buses are active.", priority: "High", riskLevel: "High", consequence: "Inability to track bus during emergency or investigate complaints.", proof: "System Dashboard" },
                { id: "SC-TRA-03", description: "Mandatory 'Empty Bus Walkthrough' at end of every trip.", priority: "High", riskLevel: "High", consequence: "Child left behind in bus (Fatal never-event).", proof: "Secondary Sign-off" },
                { id: "SC-TRA-04", description: "Check that a female attendant is present on every route.", priority: "High", riskLevel: "High", consequence: "Legal violation and child protection risk.", proof: "Roster Check" },
                { id: "SC-TRA-05", description: "Verify driver and conductor possess valid, in-date licenses.", priority: "High", riskLevel: "High", consequence: "Massive institutional liability and insurance denial.", proof: "License File" },
                { id: "SC-TRA-06", description: "Log bus speed alerts and rash driving instances.", priority: "Medium", riskLevel: "Medium", consequence: "Increased accident risk and parent complaints.", proof: "GPS Report" },
                { id: "SC-TRA-07", description: "Ensure first-aid kits and fire extinguishers in buses are stocked.", priority: "High", riskLevel: "High", consequence: "Inability to respond to a fire or medical event.", proof: "Seal Verification" },
                { id: "SC-TRA-08", description: "Track student boarding/de-boarding times.", priority: "Medium", riskLevel: "Low", consequence: "Administrative confusion during parent inquiries.", proof: "Tablet Sync" },
                { id: "SC-TRA-09", description: "Verify driver sobriety check before the morning shift.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash risk.", proof: "Supervisor Initials" },
                { id: "SC-TRA-10", description: "Confirm all student pick-up authorizations match ID cards.", priority: "High", riskLevel: "High", consequence: "Kidnapping or unauthorized removal of child.", proof: "Verification Log" }
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
                { id: "SC-SEC-01", description: "Audit the visitor register for 100% ID verification compliance.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruder gaining access to students.", proof: "Registry Audit" },
                { id: "SC-SEC-02", description: "Verify all gate locks and perimeter fence integrity.", priority: "High", riskLevel: "High", consequence: "Perimeter breach.", proof: "Walkthrough" },
                { id: "SC-SEC-03", description: "Test campus-wide fire alarm and PA system.", priority: "High", riskLevel: "High", consequence: "Fatal delay in emergency communication.", proof: "Sound Test" },
                { id: "SC-SEC-04", description: "Confirm CCTV coverage of high-risk 'blind spots' (stairs, back alleys).", priority: "High", riskLevel: "Medium", consequence: "Lack of evidence for bullying or theft incidents.", proof: "Monitor Check" },
                { id: "SC-SEC-05", description: "Enforce 'No Entry Without Badge' policy for all staff/vendors.", priority: "Medium", riskLevel: "Low", consequence: "Unidentified persons on campus.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Canteen & Food Safety (HACCP)",
            department: "Canteen",
            frequency: "Daily",
            role: "Health Officer",
            summary: "Ensures zero-risk hygiene for student meals.",
            icon: "utensils",
            tasks: [
                { id: "SC-FB-01", description: "Log temperature of incoming raw milk and protein.", priority: "High", riskLevel: "High", consequence: "Mass food poisoning outbreak.", proof: "Digital Log" },
                { id: "SC-FB-02", description: "Audit expiry dates of all pantry items.", priority: "High", riskLevel: "High", consequence: "Serving expired food to children.", proof: "Sweep Report" },
                { id: "SC-FB-03", description: "Verify cooking oil quality and replacement schedule.", priority: "Medium", riskLevel: "Low", consequence: "Long-term health impact and poor quality.", proof: "Titration Log" },
                { id: "SC-FB-04", description: "Check dishwashing water temperature (Min 82°C).", priority: "High", riskLevel: "Medium", consequence: "Bacterial transmission via utensils.", proof: "Temp Reading" }
            ]
        },
        {
            title: "Health, Hygiene & Infirmary",
            department: "Infirmary",
            frequency: "Daily",
            role: "School Nurse",
            summary: "Command for the medical readiness of the campus.",
            icon: "heart-pulse",
            tasks: [
                { id: "SC-MED-01", description: "Verify emergency drug kit is in-date and stocked.", priority: "High", riskLevel: "High", consequence: "Delayed response to an anaphylactic or diabetic shock.", proof: "Stock Check" },
                { id: "SC-MED-02", description: "Audit daily medication administration logs for students with chronic needs.", priority: "High", riskLevel: "High", consequence: "Missed doses or incorrect administration.", proof: "Med Registry" },
                { id: "SC-MED-03", description: "Inspect all classroom hand-sanitizer stations.", priority: "Low", riskLevel: "Low", consequence: "Increased spread of seasonal viral infections.", proof: "Visual Check" }
            ]
        },
        {
            title: "Administrative & Statutory Compliance",
            department: "Admin",
            frequency: "Monthly",
            role: "Head of Admin",
            summary: "Protects the institution from regulatory penalties.",
            icon: "file-lock",
            tasks: [
                { id: "SC-ADM-01", description: "Verify fire-safety certificate and lift-license validity.", priority: "High", riskLevel: "High", consequence: "Legal closure and massive fines.", proof: "Registry Check" },
                { id: "SC-ADM-02", description: "Audit staff background checks (Police Verification) for new hires.", priority: "High", riskLevel: "High", consequence: "Hiring at-risk individuals (Never-event).", proof: "HR File Audit" },
                { id: "SC-ADM-03", description: "Update 'Crisis Management' contact tree.", priority: "Medium", riskLevel: "Low", consequence: "Confusion during a real emergency.", proof: "Updated List" }
            ]
        },
        {
            title: "Parent Relations & Risk Shield",
            department: "Reception",
            frequency: "Daily",
            role: "PRO",
            summary: "Protects the school's reputation and trust.",
            icon: "users",
            tasks: [
                { id: "SC-PR-01", description: "Log and track all parent complaints to resolution within 48h.", priority: "High", riskLevel: "Medium", consequence: "Escalation to legal or viral social media risk.", proof: "Complaint Log" },
                { id: "SC-PR-02", description: "Verify that all daily 'School-to-Parent' messages are sent.", priority: "Medium", riskLevel: "Low", consequence: "Parent anxiety and communication gap.", proof: "App Log" }
            ]
        },
        {
            title: "Facility & Infrastructure Safety",
            department: "Engineering",
            frequency: "Weekly",
            role: "Facility Manager",
            summary: "Hardens the campus against physical accidents.",
            icon: "wrench",
            tasks: [
                { id: "SC-FAC-01", description: "Playground Audit: Check for rusted swings or loose bolts.", priority: "High", riskLevel: "High", consequence: "Serious injury to child during play.", proof: "Safety Report" },
                { id: "SC-FAC-02", description: "Inspect water tank hygiene and verify cleaning cycle.", priority: "High", riskLevel: "Medium", consequence: "Water-borne disease outbreak.", proof: "Cleaning Certificate" },
                { id: "SC-FAC-03", description: "Check electrical panels for loose wiring or hotspots.", priority: "High", riskLevel: "High", consequence: "Short-circuit fire.", proof: "Visual Audit" }
            ]
        },
        {
            title: "Science Lab & Equipment Safety",
            department: "Academic",
            frequency: "Weekly",
            role: "Lab In-charge",
            summary: "Ensures hazardous materials are controlled.",
            icon: "test-tube",
            tasks: [
                { id: "SC-LAB-01", description: "Audit the 'Poison/Acid' cabinet for secure locks.", priority: "High", riskLevel: "High", consequence: "Theft or misuse of hazardous chemicals.", proof: "Visual Sign-off" },
                { id: "SC-LAB-02", description: "Verify all eyewash stations are functional.", priority: "High", riskLevel: "High", consequence: "Permanent injury after a lab accident.", proof: "Test Log" }
            ]
        },
        {
            title: "HR, Staffing & Training",
            department: "HR",
            frequency: "Monthly",
            role: "HR Manager",
            summary: "Governance for staff performance and safety knowledge.",
            icon: "user-check",
            tasks: [
                { id: "SC-HR-01", description: "Verify 100% staff have attended the 'Emergency Drill' training.", priority: "High", riskLevel: "High", consequence: "Chaos during an evacuation.", proof: "Training Matrix" },
                { id: "SC-HR-02", description: "Audit teacher substitution logs for class coverage parity.", priority: "Medium", riskLevel: "Low", consequence: "Unsupervised classrooms.", proof: "Roster Audit" }
            ]
        },
        {
            title: "Finance & Fee Management",
            department: "Accounts",
            frequency: "Monthly",
            role: "Bursar",
            summary: "Protects the institutional cash flow.",
            icon: "banknote",
            tasks: [
                { id: "SC-FIN-01", description: "Reconcile daily fee collections against bank deposits.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue leakage.", proof: "Reconciliation Sheet" },
                { id: "SC-FIN-02", description: "Audit outstanding vendor payments against AMCs.", priority: "Medium", riskLevel: "Low", consequence: "Lapse in service for critical infrastructure.", proof: "Payment File" }
            ]
        }
    ]
};
