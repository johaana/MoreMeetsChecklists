
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
    description: "No monthly subscriptions. No SaaS dependency. One-time investment for a lifetime of control. Sovereign v11.2 is the definitive safeguard for campus safety and administrative chaos.",
    heroHeadline: "Zero-Risk Campus Operations. Audit-Ready.",
    heroSubheadline: "Track 150+ control points across Transport, Science Labs, Fee Collections, and Child Safety—even when you’re not on campus.",
    pricingUrgency: "In education, a single safety 'never event' isn't just expensive—it's an institutional catastrophe. This system is the safeguard.",
    consultingAnchor: 10000,
    icon: "school",
    badgeText: "V11.2 SOVEREIGN",
    badgeVariant: "destructive",
    whoIsItFor: ["School Principals", "Trustees & Board Members", "Heads of Administration", "Transport Managers", "Registrars"],
    sampleItems: [
        { text: "<strong>2-Minute Safety Pulse</strong>: Bus drivers, wardens, and admin staff update status in seconds. Zero-friction reporting.", icon: "timer" },
        { text: "<strong>Transport Command</strong>: Bulletproof protocols for bus maintenance and 'No-Child-Left-Behind' walkthroughs.", icon: "bus" },
        { text: "<strong>Visitor Governance</strong>: Strict, logged verification for every individual entering the campus to harden your perimeter.", icon: "shield-check" },
        { text: "<strong>High-Risk Verification</strong>: Highlighted 'Yellow Targets' show Principals exactly what needs immediate sign-off.", icon: "target" },
        { text: "<strong>Institutional Memory</strong>: Capture expert knowledge so new staff are safety-ready and compliant from Day 1.", icon: "history" },
        { text: "<strong>Fee & Revenue Shield</strong>: Daily reconciliation of fee payments vs. bank reports to stop unmonitored leakage.", icon: "banknote" },
        { text: "<strong>Sovereign Infrastructure</strong>: No recurring SaaS fees. You own your institutional data and the control system forever.", icon: "lock" }
    ],
    checklists: [
        {
            title: "Board & Trustee Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Trustee / Board Member",
            summary: "High-level strategic risk and campus liability oversight.",
            icon: "crown",
            tasks: [
                { id: "SC-EXE-01", description: "Review bus safety logs and any speeding alerts.", priority: "High", riskLevel: "High", consequence: "Accidents and massive legal lawsuits against the school.", proof: "Alert Log" },
                { id: "SC-EXE-02", description: "Check if all staff have finished child safety training (POCSO).", priority: "High", riskLevel: "High", consequence: "Legal trouble and criminal charges for negligence.", proof: "Matrix Audit" },
                { id: "SC-EXE-03", description: "Verify the school's accident insurance is active.", priority: "High", riskLevel: "High", consequence: "Huge medical costs and no legal defense during injuries.", proof: "Policy File" },
                { id: "SC-EXE-04", description: "Review the 'Near-Miss' log: check for any small accidents.", priority: "High", riskLevel: "High", consequence: "Small issues becoming big disasters later.", proof: "Log Review" },
                { id: "SC-EXE-05", description: "Check the bank report for total fees collected vs target.", priority: "Medium", riskLevel: "Medium", consequence: "Running out of money for salaries.", proof: "Finance Chart" },
                { id: "SC-EXE-06", description: "Verify the Fire License (NOC) is valid and displayed.", priority: "High", riskLevel: "High", consequence: "Authorities sealing the school buildings.", proof: "NOC Certificate" },
                { id: "SC-EXE-07", description: "Review 'Staff Churn': see why teachers are leaving.", priority: "Low", riskLevel: "Low", consequence: "Broken curriculum and parent complaints.", proof: "HR Dashboard" },
                { id: "SC-EXE-08", description: "Audit the academic record backup sync status.", priority: "Medium", riskLevel: "Low", consequence: "Total loss of student marks and history.", proof: "Server Log" },
                { id: "SC-EXE-09", description: "Review upcoming school trip safety plans.", priority: "High", riskLevel: "High", consequence: "Child safety risk during off-campus visits.", proof: "Trip Risk File" },
                { id: "SC-EXE-10", description: "Final weekly Strategic sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of Board oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Campus Command & Safety",
            department: "Operations",
            frequency: "Daily",
            role: "School Principal",
            summary: "Daily student flow, teacher attendance, and behavioral safety.",
            icon: "school",
            tasks: [
                { id: "SC-OPS-01", description: "Verify 100% teacher attendance by 8:15 AM.", priority: "High", riskLevel: "Low", consequence: "Unsupervised classrooms and chaos.", proof: "Attendance Log" },
                { id: "SC-OPS-02", description: "Check assembly hall sound and lighting.", priority: "Medium", riskLevel: "Low", consequence: "Disrupted morning assembly.", proof: "Visual Check" },
                { id: "SC-OPS-03", description: "Review red-flag alerts from the student counsellor.", priority: "High", riskLevel: "High", consequence: "Self-harm or violence risks going unnoticed.", proof: "Confidential Log" },
                { id: "SC-OPS-04", description: "Verify the school nurse is at her desk.", priority: "High", riskLevel: "High", consequence: "No help during a medical emergency.", proof: "Roster Check" },
                { id: "SC-OPS-05", description: "Check for damaged desks or splinters in classrooms.", priority: "Medium", riskLevel: "Medium", consequence: "Student injury negligence.", proof: "Visual Audit" },
                { id: "SC-OPS-06", description: "Audit permission slips for today's off-site trips.", priority: "High", riskLevel: "High", consequence: "Legal trouble for taking children without permission.", proof: "Slip Registry" },
                { id: "SC-OPS-07", description: "Sync the school bell with master time.", priority: "Low", riskLevel: "Low", consequence: "Campus schedule chaos.", proof: "Visual Check" },
                { id: "SC-OPS-08", description: "Check 'Lost & Found' for expensive items.", priority: "Low", riskLevel: "Low", consequence: "Parent disputes over lost property.", proof: "L&F Ledger" },
                { id: "SC-OPS-09", description: "Verify student handover list for late pickups.", priority: "High", riskLevel: "High", consequence: "Kidnapping or unauthorized pickup.", proof: "Handover Log" },
                { id: "SC-OPS-10", description: "Final Daily Campus sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Log" }
            ]
        },
        {
            title: "Fee & Revenue Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Registrar / Fee Cashier",
            summary: "Revenue protection and fee reconciliation.",
            icon: "banknote",
            tasks: [
                { id: "SC-FIN-01", description: "Match the daily fee collections against the bank report.", priority: "High", riskLevel: "High", consequence: "Internal theft or missing money.", proof: "Reconcile Sheet" },
                { id: "SC-FIN-02", description: "Check why any fee receipts were cancelled or changed.", priority: "High", riskLevel: "Medium", consequence: "Cashier fraud.", proof: "POS Audit" },
                { id: "SC-FIN-03", description: "Match the cash in hand to the daily sales report.", priority: "High", riskLevel: "High", consequence: "Staff stealing from the drawer.", proof: "Cash Bag" },
                { id: "SC-FIN-04", description: "Verify bank deposit slip for yesterday's cash.", priority: "High", riskLevel: "High", consequence: "Internal theft risk.", proof: "Bank Slip" },
                { id: "SC-FIN-05", description: "Final Daily Finance sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of fiscal control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Perimeter & Student Safety",
            department: "Safety",
            frequency: "Daily",
            role: "EHS & Safety Officer",
            summary: "Hardening the campus and protecting students.",
            icon: "hard-hat",
            tasks: [
                { id: "SC-SEC-01", description: "Check if CCTV is recording for the last 30 days.", priority: "High", riskLevel: "High", consequence: "No evidence for bullying or theft.", proof: "System Screen" },
                { id: "SC-SEC-02", description: "Inspect playground swings and slides for rust or loose bolts.", priority: "High", riskLevel: "High", consequence: "Catastrophic child injury.", proof: "Safety Log" },
                { id: "SC-SEC-03", description: "Verify all fire exit doors are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Students trapped during a fire.", proof: "Walkthrough" },
                { id: "SC-SEC-04", description: "Check visitor register for 100% ID capture.", priority: "High", riskLevel: "High", consequence: "Unauthorized intruders on campus.", proof: "Registry Audit" },
                { id: "SC-SEC-05", description: "Test the playground emergency speakers.", priority: "High", riskLevel: "Medium", consequence: "Cannot communicate during a crisis.", proof: "Sound Test" },
                { id: "SC-SEC-06", description: "Check fire extinguisher pressure (must be in Green).", priority: "High", riskLevel: "High", consequence: "Inability to fight a fire.", proof: "Gauge Log" },
                { id: "SC-SEC-07", description: "Verify security guard sobriety check.", priority: "High", riskLevel: "High", consequence: "Vulnerable campus perimeter.", proof: "Test Note" },
                { id: "SC-SEC-08", description: "Check for 'Wet Floor' signs in halls during mopping.", priority: "Medium", riskLevel: "Medium", consequence: "Slip and fall lawsuits.", proof: "Visual Check" },
                { id: "SC-SEC-09", description: "Inspect back-alley waste bins for fire risk.", priority: "High", riskLevel: "Medium", consequence: "Fire hazard near buildings.", proof: "Walkthrough" },
                { id: "SC-SEC-10", description: "Final nightly safety sign-off.", priority: "High", riskLevel: "Low", consequence: "Systemic risk gap.", proof: "Manager Initials" }
            ]
        },
        {
            title: "Teacher Certs & Health",
            department: "HR",
            frequency: "Monthly",
            role: "HR & Child Protection Manager",
            summary: "Tracks teacher competency and staff health.",
            icon: "graduation-cap",
            tasks: [
                { id: "SC-HR-01", description: "Check if all staff finished their child safety training.", priority: "High", riskLevel: "High", consequence: "Severe legal liability.", proof: "Training Log" },
                { id: "SC-HR-02", description: "Audit teacher certificates for expiry dates.", priority: "High", riskLevel: "High", consequence: "School losing its affiliation.", proof: "Cert Registry" },
                { id: "SC-HR-03", description: "Verify staff health cards and medical checkups.", priority: "Medium", riskLevel: "Medium", consequence: "Infection risk to students.", proof: "Med File" },
                { id: "SC-HR-04", description: "Check teacher grooming: uniforms and ID cards.", priority: "Low", riskLevel: "Low", consequence: "Poor school image.", proof: "Attendance Log" },
                { id: "SC-HR-05", description: "Final monthly HR matrix sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of admin control.", proof: "Signed Matrix" }
            ]
        },
        {
            title: "Science Labs & Tech",
            department: "Technical",
            frequency: "Weekly",
            role: "IT & Lab Technical Lead",
            summary: "Science Lab safety and IT lab uptime.",
            icon: "wrench",
            tasks: [
                { id: "SC-TEC-01", description: "Test all gas joints in the science lab with soap water.", priority: "High", riskLevel: "High", consequence: "Campus explosion risk (Fatal).", proof: "Pressure Log" },
                { id: "SC-TEC-02", description: "Verify school computers have child-safety filters active.", priority: "High", riskLevel: "High", consequence: "Students seeing inappropriate content.", proof: "Firewall Log" },
                { id: "SC-TEC-03", description: "Check server room temperature (must be 20°C).", priority: "High", riskLevel: "High", consequence: "Network crash and data loss.", proof: "Temp Note" },
                { id: "SC-TEC-04", description: "Check lab chemical storage: keep acids locked.", priority: "High", riskLevel: "High", consequence: "Fire or toxic gas reaction.", proof: "Storage Audit" },
                { id: "SC-TEC-05", description: "Test the backup generator fuel and battery.", priority: "High", riskLevel: "High", consequence: "Total blackout during exams.", proof: "Test Log" }
            ]
        },
        {
            title: "Admissions & Reputation",
            department: "Admin",
            frequency: "Daily",
            role: "Admissions & CX Head",
            summary: "Governs parent inquiries and digital reputation.",
            icon: "megaphone",
            tasks: [
                { id: "SC-CX-01", description: "Answer all parent WhatsApp/Social inquiries in < 2h.", priority: "High", riskLevel: "Low", consequence: "Lost admissions revenue.", proof: "Inbox Clear" },
                { id: "SC-CX-02", description: "Reply to Google and Search reviews in < 24h.", priority: "High", riskLevel: "Medium", consequence: "Damaged school brand.", proof: "Dashboard" },
                { id: "SC-CX-03", description: "Update Google Maps hours for holidays.", priority: "High", riskLevel: "Low", consequence: "Parents arrive to closed gate.", proof: "Mobile Check" },
                { id: "SC-CX-04", description: "Check availability of drinking water for visiting parents.", priority: "Low", riskLevel: "Low", consequence: "Bad first impression.", proof: "Visual Check" },
                { id: "SC-CX-05", description: "Final daily Reputation sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of ORM control.", proof: "Signed Dashboard" }
            ]
        },
        {
            title: "Transport & Canteen Command",
            department: "Logistics",
            frequency: "Daily",
            role: "Transport & Canteen Lead",
            summary: "Zero-fail School Bus and Canteen hygiene command.",
            icon: "truck",
            tasks: [
                { id: "SC-LOG-01", description: "Walk to the back of the bus to ensure no child is left behind.", priority: "High", riskLevel: "High", consequence: "Fatal child entrapment (Never-event).", proof: "Physical Sign-off" },
                { id: "SC-LOG-02", description: "Test bus driver sobriety before the morning trip.", priority: "High", riskLevel: "High", consequence: "Catastrophic crash risk.", proof: "Test Note" },
                { id: "SC-LOG-03", description: "Check canteen food temperature (must be > 65°C).", priority: "High", riskLevel: "High", consequence: "Food poisoning outbreak.", proof: "Temp Log" },
                { id: "SC-LOG-04", description: "Clean toilets hourly and sign the frequency log.", priority: "High", riskLevel: "Low", consequence: "Mass parent dissatisfaction.", proof: "Hourly Sheet" },
                { id: "SC-LOG-05", description: "Verify canteen staff are wearing hairnets.", priority: "High", riskLevel: "Medium", consequence: "Dirty food complaints.", proof: "Briefing Log" },
                { id: "SC-LOG-06", description: "Check bus GPS tracking: verify it is online.", priority: "Medium", riskLevel: "Low", consequence: "Inability to find bus during crisis.", proof: "System Dashboard" },
                { id: "SC-LOG-07", description: "Inspect canteen storage for signs of ants or roaches.", priority: "High", riskLevel: "High", consequence: "Regulatory closure.", proof: "Visual Audit" },
                { id: "SC-LOG-08", description: "Check availability of spare bus keys in safe.", priority: "Low", riskLevel: "Low", consequence: "Logistics delay chaos.", proof: "Vault Inventory" },
                { id: "SC-LOG-09", description: "Verify vendor attendance logs.", priority: "Low", riskLevel: "Low", consequence: "Paying for unrendered work.", proof: "Log Review" },
                { id: "SC-LOG-10", description: "Final shift Logistics sign-off.", priority: "High", riskLevel: "Low", consequence: "Incomplete handover.", proof: "Signed Summary" }
            ]
        }
    ]
};

    