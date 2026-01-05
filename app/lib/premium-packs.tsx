
import type { LucideIcon } from "lucide-react";
import type { ReactElement } from 'react';
import { allPacks } from "./packs/all_packs";
import { master_access_pack } from "./packs/master_access_pack";

export type Checklist = {
    title: string;
    department: string;
    frequency: string;
    role: string;
    summary: string;
    icon: string;
    tasks: {
        id: string;
        description: string;
        priority: 'High' | 'Medium' | 'Low';
        riskLevel: 'High' | 'Medium' | 'Low';
        consequence: string;
        proof: string;
        location?: string;
        department?: string;
        role?: string;
        frequency?: string;
    }[];
};

export type PreviewScenario = {
    title: string;
    description: string;
    tasks: {
        id: string;
        description: string;
        sourceChecklist: string;
        priority: 'High' | 'Medium' | 'Low';
    }[];
};


export type PremiumPack = {
    id: string;
    title: string;
    priceINR: number;
    priceUSD?: number;
    competitorPriceUSD?: number;
    paymentId: string;
    lemonSqueezyUrl?: string;
    listId?: number; // Brevo List ID
    category: "Hospitality" | "Corporate & Tech" | "Retail" | "Healthcare" | "Education" | "Industrial & Transport" | "Entertainment & Events" | "Social Cause" | "Real Estate" | "Compliance" | "Wellness & Beauty" | "Agriculture" | "Specialized Production" | "Food & Beverage" | "Franchise" | "Master Access";
    description: string;
    icon: string;
    badgeText?: string;
    badgeVariant?: "default" | "secondary" | "destructive" | "outline" | "accent";
    sampleItems: { text: string; icon: string; }[];
    whoIsItFor: string[];
    previewScenario?: PreviewScenario;
    checklists: Checklist[];
    globalStandards?: {
        title: string;
        standards: { name: string; description: string; }[];
    };
    bestseller?: boolean;
}

export const premiumPacks: PremiumPack[] = [
    ...allPacks,
    master_access_pack,
].map(pack => {
    // If a pack (other than master access) is still empty, populate it with some placeholder data
    // to avoid breaking the UI. This should be replaced with real data.
    if (pack.checklists.length === 0 && pack.id !== 'master_access') {
        pack.checklists = [
            {
                title: `General Operations for ${pack.title}`,
                department: 'General',
                frequency: 'Daily',
                role: 'Manager',
                summary: `This is a placeholder checklist for the ${pack.title}. It needs to be replaced with 8-10 detailed checklists containing 80-120 tasks.`,
                icon: 'clipboard-list',
                tasks: [
                    { id: `${pack.id.substring(0,3).toUpperCase()}-01`, description: "Placeholder Task 1: Review daily objectives.", priority: "High", riskLevel: "Low", consequence: "Lack of direction.", proof: "Meeting notes.", location: "Office" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-02`, description: "Placeholder Task 2: Check for safety hazards.", priority: "High", riskLevel: "High", consequence: "Potential for injury.", proof: "Safety log.", location: "All Areas" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-03`, description: "Placeholder Task 3: Ensure area is clean.", priority: "Medium", riskLevel: "Low", consequence: "Poor impression.", proof: "Visual confirmation.", location: "All Areas" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-04`, description: "Placeholder Task 4: Verify equipment functionality.", priority: "Medium", riskLevel: "Medium", consequence: "Operational delays.", proof: "Equipment checklist.", location: "All Areas" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-05`, description: "Placeholder Task 5: Check inventory levels.", priority: "Medium", riskLevel: "Medium", consequence: "Stockouts.", proof: "Inventory system report.", location: "Stockroom" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-06`, description: "Placeholder Task 6: Staff briefing.", priority: "High", riskLevel: "Low", consequence: "Miscommunication.", proof: "Briefing log.", location: "Staff Area" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-07`, description: "Placeholder Task 7: Review customer feedback.", priority: "Medium", riskLevel: "Medium", consequence: "Missed improvement opportunities.", proof: "Feedback summary.", location: "Office" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-08`, description: "Placeholder Task 8: End-of-day reporting.", priority: "High", riskLevel: "Low", consequence: "Lack of data.", proof: "Daily report.", location: "Office" },
                    { id: `${pack.id.substring(0,3).toUpperCase()}-09`, description: "Placeholder Task 9: Secure premises at close.", priority: "High", riskLevel: "High", consequence: "Security breach.", proof: "Security log.", location: "Perimeter" },
                    { id: "SOP-ST-04", description: "Post-trip 'Bus Clear' check: Driver/attendant must walk the bus aisle to ensure no child is left behind.", priority: "High", riskLevel: "High", consequence: "Child left on bus, leading to potential heatstroke or fatality.", proof: "Signed 'Bus Clear' checklist for every trip." },
                    { id: "SOP-ST-05", description: "Maintain a log of student attendance for both morning and afternoon trips.", priority: "High", riskLevel: "Medium", consequence: "Inability to account for a missing child.", proof: "Student attendance register." },
                    { id: "SOP-ST-06", description: "Check that first-aid kits and fire extinguishers on all buses are stocked and not expired.", priority: "High", riskLevel: "High", consequence: "Inability to respond to a medical emergency or fire.", proof: "Weekly bus safety checklist." },
                    { id: "SOP-ST-07", description: "Ensure drivers adhere to speed limits and safe driving practices.", priority: "High", riskLevel: "High", consequence: "Accidents, injuries.", proof: "GPS speed monitoring reports, random inspections." },
                    { id: "SOP-ST-08", description: "Drop-off only to authorized guardians at designated stops.", priority: "High", riskLevel: "High", consequence: "Child handed over to an unauthorized person.", proof: "Guardian ID card verification." }
                ]
            },
            {
                title: "Campus Safety & Security Audit",
                department: "Security",
                frequency: "Weekly",
                role: "Security Supervisor",
                summary: "A weekly audit to ensure the entire campus is safe and secure for students and staff.",
                icon: "shield",
                tasks: [
                    { id: "SOP-CS-01", description: "Inspect perimeter fencing/walls for any breaches or potential unauthorized entry points.", priority: "High", riskLevel: "High", consequence: "Intruder access to campus.", proof: "Perimeter patrol log." },
                    { id: "SOP-CS-02", description: "Verify all CCTV cameras are functional, recording, and have clear lines of sight.", priority: "High", riskLevel: "High", consequence: "Inability to investigate incidents.", proof: "CCTV health check report." },
                    { id: "SOP-CS-03", description: "Check that all security guards are at their posts, alert, and in proper uniform.", priority: "High", riskLevel: "Medium", consequence: "Security gaps, unprofessional appearance.", proof: "Guard duty roster and spot checks." },
                    { id: "SOP-CS-04", description: "Test a sample of emergency alarms (fire, lockdown) to ensure they are audible.", priority: "High", riskLevel: "High", consequence: "Alarm failure in a real emergency.", proof: "Alarm test log." },
                    { id: "SOP-CS-05", description: "Inspect playground equipment for any damage, sharp edges, or structural issues.", priority: "High", riskLevel: "High", consequence: "Child injury.", proof: "Playground inspection checklist with photos." },
                    { id: "SOP-CS-06", description: "Ensure all restricted areas (e.g., utility rooms, chemical stores) are locked and access-controlled.", priority: "High", riskLevel: "Medium", consequence: "Student access to hazardous areas.", proof: "Physical check of doors." },
                    { id: "SOP-CS-07", description: "Verify that visitor management procedures are being followed at the main gate.", priority: "High", riskLevel: "High", consequence: "Unauthorized visitors on campus.", proof: "Audit of visitor logbook." },
                    { id: "SOP-CS-08", description: "Check that all fire extinguishers are accessible, inspected, and not expired.", priority: "High", riskLevel: "High", consequence: "Inability to control a fire.", proof: "Fire extinguisher inspection tags." }
                ]
            },
            {
                title: "Visitor Management Protocol",
                department: "Security/Admin",
                frequency: "Ongoing",
                role: "Security Guard/Receptionist",
                summary: "A strict protocol to screen and track all visitors on campus.",
                icon: "user-check",
                tasks: [
                    { id: "SOP-VM-01", description: "All visitors must enter through a single, designated entry point.", priority: "High", riskLevel: "High", consequence: "Uncontrolled access to the campus.", proof: "Gate procedure document." },
                    { id: "SOP-VM-02", description: "Verify visitor's identity with a government-issued photo ID.", priority: "High", riskLevel: "High", consequence: "Anonymous or fraudulent entry.", proof: "Visitor logbook." },
                    { id: "SOP-VM-03", description: "Confirm the purpose of the visit and verify the appointment with the relevant staff member.", priority: "High", riskLevel: "Medium", consequence: "Unscheduled visitors disrupting school activities.", proof: "Log of verification calls." },
                    { id: "SOP-VM-04", description: "Log visitor details (name, photo, contact, person to meet, time in) in a digital or physical register.", priority: "High", riskLevel: "Medium", consequence: "No record of who is on campus.", proof: "Visitor register." },
                    { id: "SOP-VM-05", description: "Issue a clearly identifiable visitor's badge to be worn at all times.", priority: "High", riskLevel: "Low", consequence: "Inability to distinguish visitors from staff.", proof: "Badge issuance log." },
                    { id: "SOP-VM-06", description: "Visitors must be escorted by a staff member in all student areas.", priority: "High", riskLevel: "High", consequence: "Unsupervised contact between visitors and students.", proof: "CCTV footage review." },
                    { id: "SOP-VM-07", description: "Log the visitor's exit time and retrieve the visitor's badge.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate record of who is still on campus during an emergency.", proof: "Visitor register." },
                    { id: "SOP-VM-08", description: "Prohibit unauthorized photography or videography on campus.", priority: "Medium", riskLevel: "High", consequence: "Student privacy violations.", proof: "Signage and verbal instructions to visitors." }
                ]
            },
            {
                title: "Classroom & Lab Safety",
                department: "Academics/Admin",
                frequency: "Monthly",
                role: "Admin Supervisor",
                summary: "Ensures all learning spaces are safe and free from hazards.",
                icon: "school",
                tasks: [
                    { id: "SOP-CL-01", description: "Inspect classroom furniture for stability and sharp edges.", priority: "Medium", riskLevel: "Medium", consequence: "Student injury from broken furniture.", proof: "Classroom inspection form." },
                    { id: "SOP-CL-02", description: "Ensure all electrical outlets are covered and wiring is not exposed.", priority: "High", riskLevel: "High", consequence: "Electric shock.", proof: "Classroom inspection form." },
                    { id: "SOP-CL-03", description: "Check that heavy items (e.g., projectors, shelves) are securely mounted.", priority: "High", riskLevel: "High", consequence: "Falling objects causing injury.", proof: "Classroom inspection form." },
                    { id: "SOP-CL-04", description: "Science Labs: Verify eyewash stations and safety showers are functional and tested weekly.", priority: "High", riskLevel: "High", consequence: "Inability to treat chemical splashes.", proof: "Lab safety logbook." },
                    { id: "SOP-CL-05", description: "Science Labs: Ensure all chemicals are correctly labeled and stored in locked cabinets.", priority: "High", riskLevel: "High", consequence: "Chemical spills, student access to hazardous materials.", proof: "Photo of chemical storage." },
                    { id: "SOP-CL-06", description: "Science Labs: Check availability and condition of Personal Protective Equipment (PPE) like goggles and lab coats.", priority: "High", riskLevel: "Medium", consequence: "Student injuries during experiments.", proof: "PPE inventory checklist." },
                    { id: "SOP-CL-07", description: "Ensure all fire extinguishers in labs and classrooms are accessible and inspected.", priority: "High", riskLevel: "High", consequence: "Inability to control a fire.", proof: "Fire extinguisher inspection tags." },
                    { id: "SOP-CL-08", description: "Verify that emergency evacuation maps are posted in every classroom and lab.", priority: "Medium", riskLevel: "Low", consequence: "Confusion during an evacuation.", proof: "Visual check." }
                ]
            },
             {
                title: "Staff Hiring & Verification",
                department: "HR/Hygiene",
                frequency: "Per Hire",
                role: "Hygiene Officer",
                summary: "Ensures all food handlers meet strict hygiene standards and are well-trained in food safety.",
                icon: "user-check",
                tasks: [
                    { id: "SH-01", description: "Conduct daily checks for clean uniforms, nails, and hairnets.", priority: "High", riskLevel: "High", consequence: "Poor personal hygiene can lead to food contamination.", proof: "Daily Staff Audit Log" },
                    { id: "SH-02", description: "Perform random audits of handwashing procedures.", priority: "High", riskLevel: "High", consequence: "Improper handwashing is a leading cause of foodborne illness.", proof: "Handwashing Audit" },
                    { id: "SH-03", description: "Conduct and document monthly refresher training on hygiene.", priority: "High", riskLevel: "Medium", consequence: "Staff forget procedures over time; regular training reinforces good habits.", proof: "Training Records" },
                    { id: "SH-04", description: "Screen new staff for any communicable diseases.", priority: "High", riskLevel: "High", consequence: "A sick food handler can cause a major outbreak.", proof: "Medical Fitness Certificate" },
                    { id: "SH-05", description: "Ensure 'Staff Only' areas are clearly marked and access is restricted.", priority: "Medium", riskLevel: "Low", consequence: "Prevents unauthorized personnel from entering food prep areas.", proof: "Visual check and signage" },
                    { id: "SH-06", description: "Provide and enforce the use of gloves for handling ready-to-eat foods.", priority: "High", riskLevel: "High", consequence: "Prevents direct hand-to-food contamination.", proof: "Glove Usage Audit" },
                    { id: "SH-07", description: "Ensure a 'no jewelry' policy is followed by kitchen staff.", priority: "High", riskLevel: "High", consequence: "Jewelry can fall into food, creating a physical hazard.", proof: "Visual Check" },
                    { id: "SH-08", description: "Maintain records of all staff hygiene training.", priority: "High", riskLevel: "High", consequence: "Crucial for proving due diligence during a health inspection.", proof: "Master Training File" },
                    { id: "SH-09", description: "Have a clear policy for staff who are sick.", priority: "High", riskLevel: "High", consequence: "Prevents sick employees from coming to work and spreading illness.", proof: "Sick Leave Policy" },
                    { id: "SH-10", description: "Ensure staff have access to and use hand sanitizers.", priority: "High", riskLevel: "Medium", consequence: "Provides an extra layer of hygiene control.", proof: "Supply Check" }
                ]
            }
        ]
    }
    return pack;
});

  
