
import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operating System",
    priceINR: 799,
    priceUSD: 9,
    category: "Education",
    description: "No monthly subscriptions. One-time investment for a lifetime of command. Sovereign v4.4 is the safeguard for campus safety.",
    heroHeadline: "Prevent Campus Tragedies and Administrative Chaos",
    heroSubheadline: "Track transport safety, monitor playground risks, and stay in control of student welfare—across 100+ technical points.",
    pricingUrgency: "In education, a single safety 'never event' is an institutional catastrophe.",
    consultingAnchor: 10000,
    icon: "school",
    badgeText: "Safety Critical",
    badgeVariant: "destructive",
    whoIsItFor: ["School Principals", "Trustees", "Heads of Administration", "Transport Managers"],
    sampleItems: [
        { text: "<strong>Transport (Bus) Command</strong>: Mandatory 'Empty Bus Walkthrough' and driver sobriety checks.", icon: "bus" },
        { text: "<strong>CCTV & Perimeter Control</strong>: Security focal point audits and visitor ID verification.", icon: "shield-check" },
        { text: "<strong>Canteen (HACCP)</strong>: Zero-fail hygiene and temperature protocols for student food.", icon: "utensils" },
        { text: "<strong>Lab & Chemical Safety</strong>: Hazardous material storage and PPE availability audits.", icon: "test-tube" },
        { text: "<strong>Medical Room Vitals</strong>: Epi-pen and student allergy matrix tracking.", icon: "heart-pulse" }
    ],
    checklists: [
        {
            title: "Strategic Governance",
            department: "Admin",
            frequency: "Weekly",
            role: "COO / Owner",
            summary: "Campus-wide safety and performance oversight.",
            icon: "crown",
            tasks: [
                { id: "SC-EXE-01", description: "Review Transport Incident alerts for the week.", priority: "High", riskLevel: "High", consequence: "Institutional failure.", proof: "Alert Log" }
            ]
        },
        {
            title: "Campus Operations",
            department: "Operations",
            frequency: "Daily",
            role: "General Manager",
            summary: "Manages student movement and amenities.",
            icon: "school",
            tasks: [
                { id: "SC-OPS-01", description: "Verify arrival parity for all teaching staff.", priority: "High", riskLevel: "Low", consequence: "Unsupervised classrooms.", proof: "Attendance Log" }
            ]
        },
        {
            title: "Fee & Finance Shield",
            department: "Finance",
            frequency: "Monthly",
            role: "Accountant",
            summary: "Protects the school's income and vendor payouts.",
            icon: "banknote",
            tasks: [
                { id: "SC-FIN-01", description: "Reconcile fee collection portal against bank deposits.", priority: "High", riskLevel: "High", consequence: "Financial leakage.", proof: "Bank Note" }
            ]
        },
        {
            title: "Perimeter & Fire Safety",
            department: "Security",
            frequency: "Daily",
            role: "EHS Officer",
            summary: "Ensures a safe campus perimeter.",
            icon: "hard-hat",
            tasks: [
                { id: "SC-EHS-01", description: "Test campus PA system for emergency announcements.", priority: "High", riskLevel: "High", consequence: "Fatal communication lag.", proof: "Sound Test" }
            ]
        },
        {
            title: "Teacher Certifications",
            department: "HR",
            frequency: "Monthly",
            role: "HR Manager",
            summary: "Tracks legal and educational competency.",
            icon: "graduation-cap",
            tasks: [
                { id: "SC-HR-01", description: "Verify POCSO and child-protection training logs.", priority: "High", riskLevel: "High", consequence: "Severe legal liability.", proof: "Training File" }
            ]
        },
        {
            title: "Lab & Tech Maintenance",
            department: "Technical",
            frequency: "Weekly",
            role: "Technical Lead",
            summary: "Governs Science labs and IT zones.",
            icon: "test-tube",
            tasks: [
                { id: "SC-TEC-01", description: "Inspect lab gas lines for leaks and valve integrity.", priority: "High", riskLevel: "High", consequence: "Campus explosion.", proof: "Pressure Log" }
            ]
        },
        {
            title: "Parent ORM & Admin",
            department: "Admin",
            frequency: "Daily",
            role: "Customer Experience Lead",
            summary: "Protects reputation and parent feedback.",
            icon: "megaphone",
            tasks: [
                { id: "SC-CX-01", description: "Resolve high-priority parent emails in <4 hours.", priority: "Medium", riskLevel: "Low", consequence: "Viral complaint.", proof: "Inbox Status" }
            ]
        },
        {
            title: "Transport & Bus Safety",
            department: "Transport",
            frequency: "Daily",
            role: "Logistics Lead",
            summary: "Zero-fail transit protocols.",
            icon: "bus",
            tasks: [
                { id: "SC-TRA-01", description: "Mandatory 'Empty Bus Walkthrough' at end of trip.", priority: "High", riskLevel: "High", consequence: "Child left behind (Fatal).", proof: "Sign-off" }
            ]
        }
    ]
};
