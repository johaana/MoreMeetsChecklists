
import type { PremiumPack } from "@/lib/premium-packs";

export const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operations System",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 599,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c12368-2c26-4e58-b1de-149b80b292e7',
    category: "Education",
    description: "The definitive safety safeguard for educational institutions. Hardening 125 technical control points across POCSO, Transport, and Campus Safety.",
    icon: "school",
    badgeText: "SAFETY CRITICAL",
    badgeVariant: "destructive",
    whoIsItFor: ["Principals", "Trustees", "Transport Managers", "School Nurses"],
    sampleItems: [
        { text: "<strong>Transport Command</strong>: 'No-child-left-behind' walkthroughs and driver sobriety logs.", icon: "bus" },
        { text: "<strong>Campus Security</strong>: Visitor ID governance and perimeter monitoring.", icon: "shield-check" },
        { text: "<strong>Medical Readiness</strong>: AED status checks and Epi-pen inventory control.", icon: "heart-pulse" }
    ],
    checklists: [
        {
            title: "Principal & Executive Governance",
            department: "Management",
            frequency: "Weekly",
            role: "Principal",
            summary: "High-level strategic oversight of campus safety and regulatory compliance.",
            icon: "crown",
            tasks: [
                { id: "SC-EXE-01", technicalProtocol: "Child Protection Audit", floorAction: "Review 'Behavior Log' for any flagged safety incidents.", priority: "High", riskLevel: "High", consequence: "POCSO non-compliance and legal exposure.", proof: "Incident Registry" },
                { id: "SC-EXE-02", technicalProtocol: "Statutory Affiliation Audit", floorAction: "Verify validity of fire NOC and building stability certs.", priority: "High", riskLevel: "High", consequence: "Government sealing of premises.", proof: "License File" },
                { id: "SC-EXE-03", technicalProtocol: "Staff Vetting Pulse", floorAction: "Confirm 100% of new hires have completed background checks.", priority: "High", riskLevel: "High", consequence: "Hiring of blacklisted individuals.", proof: "HR Register" },
                { id: "SC-EXE-04", technicalProtocol: "Emergency Drill Triage", floorAction: "Review evacuation time for this month's fire drill.", priority: "Medium", riskLevel: "Medium", consequence: "Fatal delay during real emergency.", proof: "Drill Log" },
                { id: "SC-EXE-05", technicalProtocol: "Parent Escalation Review", floorAction: "Review all unresolved safety-related parent emails.", priority: "High", riskLevel: "Medium", consequence: "Reputational damage and litigation.", proof: "Email Log" },
                { id: "SC-EXE-06", technicalProtocol: "Infrastructure Safety Walk", floorAction: "Conduct random walkthrough of school porch and lobby.", priority: "Low", riskLevel: "Low", consequence: "Loss of leadership oversight.", proof: "Walk Log" },
                { id: "SC-EXE-07", technicalProtocol: "Teacher-Student Ratio Match", floorAction: "Audit class rosters vs presence for early years.", priority: "Medium", riskLevel: "Low", consequence: "Supervision gaps in primary wings.", proof: "Roster Audit" },
                { id: "SC-EXE-08", technicalProtocol: "Health & Hygiene Summary", floorAction: "Review weekly clinic visit keywords for outbreaks.", priority: "High", riskLevel: "Medium", consequence: "Unmonitored spread of infection.", proof: "Medical Report" },
                { id: "SC-EXE-09", technicalProtocol: "CCTV Retention Check", floorAction: "Confirm 30-day recording backup is operational.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for bullying claims.", proof: "System Check" },
                { id: "SC-EXE-10", technicalProtocol: "Final Board Sign-off", floorAction: "Execute weekly governance summary initials.", priority: "High", riskLevel: "Low", consequence: "Loss of administrative control.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Student Transport Command",
            department: "Logistics",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "Zero-fail student transportation safety and vehicle tracking.",
            icon: "bus",
            tasks: Array.from({ length: 20 }, (_, i) => ({
                id: `SC-BUS-${String(i + 1).padStart(2, '0')}`,
                technicalProtocol: [
                    "Brake & Tire Safety Audit",
                    "Driver Sobriety Challenge",
                    "Empty Bus Walkthrough (Never-Event)",
                    "GPS Connectivity Pulse",
                    "CCTV Camera Sync",
                    "Female Attendant Presence Verify",
                    "Seat-belt Tension Check",
                    "First-aid Kit Stock Audit",
                    "Fire Extinguisher Gauge Pulse",
                    "Route Timing Variance Audit"
                ][i] || "Transport safety protocol.",
                floorAction: [
                    "Inspect 100% of fleet mechanical vitals pre-dispatch.",
                    "Execute random breathalyzer test for route drivers.",
                    "Physically touch back-row seat after last student drop-off.",
                    "Verify all bus units are online on tracking portal.",
                    "Download and spot-check footage from 2 buses.",
                    "Confirm female staff assigned to every elementary route.",
                    "Inspect 5 random rows for buckle functionality.",
                    "Check expiry dates and par levels of bandages.",
                    "Verify needle is in the green zone.",
                    "Investigate any route delay > 15 minutes."
                ][i] || "Standard transport check.",
                priority: "High",
                riskLevel: "High",
                consequence: "Fatal crash or child left behind.",
                proof: "Transport Log"
            }))
        },
        {
            title: "Campus Security & Perimeter",
            department: "Security",
            frequency: "Daily",
            role: "Security Chief",
            summary: "Hardening the perimeter and managing visitor access.",
            icon: "shield-check",
            tasks: Array.from({ length: 20 }, (_, i) => ({
                id: `SC-SEC-${String(i + 1).padStart(2, '0')}`,
                technicalProtocol: [
                    "Visitor ID Capture Audit",
                    "Gate Lock-down Verification",
                    "Toilet Supervision Patrol",
                    "Blind-spot CCTV Scan",
                    "Guard Deployment Sync",
                    "Perimeter Lighting Audit",
                    "Forbidden Item Search (Random)",
                    "Alley & Roof Gate Lockdown",
                    "Emergency Panic Button Test",
                    "Staff ID Badge Enforcement"
                ][i] || "Security governance check.",
                floorAction: [
                    "Verify 100% ID logging at the main gate.",
                    "Confirm all secondary gates are double-locked at 9 AM.",
                    "Audit the guard log for hourly washroom-area sweeps.",
                    "Verify focal points cover all corridor entrances.",
                    "Match on-ground guards against daily roster.",
                    "Check for dark spots in playground at 6 PM.",
                    "Execute 5 random bag checks for senior students.",
                    "Physically confirm all restricted gates are locked.",
                    "Test trigger to main response booth.",
                    "Challenge any individual without a visible badge."
                ][i] || "Perimeter security task.",
                priority: "High",
                riskLevel: "High",
                consequence: "Unauthorized access or bullying incidents.",
                proof: "Patrol Log"
            }))
        },
        {
            title: "Medical & Infirmary Readiness",
            department: "Medical",
            frequency: "Daily",
            role: "School Nurse",
            summary: "Student welfare, medication control, and emergency readiness.",
            icon: "heart-pulse",
            tasks: Array.from({ length: 15 }, (_, i) => ({
                id: `SC-MED-${String(i + 1).padStart(2, '0')}`,
                technicalProtocol: [
                    "AED Readiness Vitals",
                    "Epi-pen Inventory Count",
                    "Allergy Matrix Sync",
                    "Medication Log Audit",
                    "Infirmary Hygiene Scan",
                    "First-aid Field Kit Refill",
                    "Emergency Contact Update",
                    "Oxygen Cylinder Pressure"
                ][i] || "Clinical governance check.",
                floorAction: [
                    "Confirm 'Green' status light on AED machine.",
                    "Verify count and expiry of emergency allergy drugs.",
                    "Update red-flag list for new admissions/visitors.",
                    "Match daily administrations against parent consent.",
                    "Verify sanitation of beds and sink areas.",
                    "Restock kits for today's PE/Sports sessions.",
                    "Audit 5 files for valid mobile numbers.",
                    "Verify gauge pressure at medical manifold."
                ][i] || "Medical readiness task.",
                priority: "High",
                riskLevel: "High",
                consequence: "Resuscitation failure or medical mismatch.",
                proof: "Medical Ledger"
            }))
        },
        {
            title: "Facility & Estate Maintenance",
            department: "Facilities",
            frequency: "Daily",
            role: "Facility Manager",
            summary: "Infrastructure safety, MEP vitals, and asset protection.",
            icon: "wrench",
            tasks: Array.from({ length: 15 }, (_, i) => ({
                id: `SC-FAC-${String(i + 1).padStart(2, '0')}`,
                technicalProtocol: [
                    "Potable Water TDS Reading",
                    "Electrical Panel Heat Scan",
                    "Playground Structural Audit",
                    "Generator Fuel Reconcile",
                    "Fire Exit Path Clearance",
                    "Lift Auto-Rescue Test",
                    "Roof Water Tank Level",
                    "Building Crack Monitoring"
                ][i] || "Infrastructure safety check.",
                floorAction: [
                    "Log TDS from main drinking points (Target < 150).",
                    "Perform IR scan of high-load server room panels.",
                    "Check for loose bolts or rust on swing sets.",
                    "Match dip-stick level vs generator run-time.",
                    "Verify 100% of exits are unlocked and clear.",
                    "Simulate power flip for lift rescue logic.",
                    "Log levels at 8 AM to detect overnight leaks.",
                    "Inspect facade markers for settlement drift."
                ][i] || "Facility maintenance task.",
                priority: "High",
                riskLevel: "High",
                consequence: "Infrastructure downtime or fatal accident.",
                proof: "Facility Log"
            }))
        },
        {
            title: "Canteen & Food Safety",
            department: "Canteen",
            frequency: "Daily",
            role: "Canteen Manager",
            summary: "HACCP-aligned protocols for school kitchens and dining halls.",
            icon: "utensils",
            tasks: Array.from({ length: 10 }, (_, i) => ({
                id: `SC-CAN-${String(i + 1).padStart(2, '0')}`,
                technicalProtocol: [
                    "Cold Chain Pulse",
                    "Allergen Station Verify",
                    "Cooking Oil TPM Quality",
                    "Staff Hygiene Audit",
                    "Waste Segregation Sync"
                ][i] || "Food safety protocol.",
                floorAction: [
                    "Log morning fridge temps (Target < 5°C).",
                    "Verify isolation of GF and nut-free prep zones.",
                    "Test oil quality; discard if TPM > 25%.",
                    "Audit hairnet and handwashing compliance.",
                    "Verify 100% wet/dry waste separation."
                ][i] || "Canteen manager check.",
                priority: "High",
                riskLevel: "High",
                consequence: "Mass foodborne illness outbreak.",
                proof: "Canteen Ledger"
            }))
        },
        {
            title: "Science Lab Safety",
            department: "Academic",
            frequency: "Daily",
            role: "Lab Assistant",
            summary: "Governance for hazardous materials and experimental safety.",
            icon: "test-tube",
            tasks: Array.from({ length: 10 }, (_, i) => ({
                id: `SC-LAB-${String(i + 1).padStart(2, '0')}`,
                technicalProtocol: [
                    "Chemical Storage Segregation",
                    "Eye-wash Station Test",
                    "Fume Hood Airflow Pulse",
                    "PPE Stock Audit",
                    "Hazardous Waste Seal"
                ][i] || "Lab safety protocol.",
                floorAction: [
                    "Verify Acid/Base separation in locked cabinets.",
                    "Execute 10-second flush test for station.",
                    "Verify negative pressure using tissue test.",
                    "Check par levels of goggles and gloves.",
                    "Witness burial of neutralised chemical waste."
                ][i] || "Lab assistant check.",
                priority: "High",
                riskLevel: "High",
                consequence: "Explosion or toxic gas inhalation.",
                proof: "Lab Safety Log"
            }))
        },
        {
            title: "Registrar & Financial Control",
            department: "Finance",
            frequency: "Daily",
            role: "Registrar",
            summary: "Fee reconciliation, document security, and financial integrity.",
            icon: "banknote",
            tasks: [
                { id: "SC-FIN-01", technicalProtocol: "Fee Cash Reconcile", floorAction: "Match physical cash drop to receipt log; witness seal.", priority: "High", riskLevel: "High", consequence: "Untraceable internal revenue theft.", proof: "Settlement Log" },
                { id: "SC-FIN-02", technicalProtocol: "Student File Security", floorAction: "Verify lockup of original certificates vault.", priority: "High", riskLevel: "Medium", consequence: "Loss of critical student documentation.", proof: "Visual Check" },
                { id: "SC-FIN-03", technicalProtocol: "Inventory Shrinkage Audit", floorAction: "Blind count of top 5 bookstore high-value SKUs.", priority: "Medium", riskLevel: "Low", consequence: "Silent margin erosion.", proof: "Count Sheet" },
                { id: "SC-FIN-04", technicalProtocol: "Staff Payroll Match", floorAction: "Audit 5 payslips against attendance biometric log.", priority: "Medium", riskLevel: "Low", consequence: "Payroll fraud.", proof: "Match Note" },
                { id: "SC-FIN-05", technicalProtocol: "Statutory Fee Pipeline", floorAction: "Check deadline for municipal tax and utility payments.", priority: "High", riskLevel: "Medium", consequence: "Penalties and disconnects.", proof: "Calendar Update" }
            ]
        }
    ]
};
