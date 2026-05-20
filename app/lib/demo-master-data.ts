
export const demoMasterData = {
    stats: {
        completion: 78,
        pending: 12,
        escalations: 3,
        verifications: 2,
        branches: 4,
        teamSize: 18
    },
    branches: [
        { name: "Pune Central", status: "ACTIVE" },
        { name: "Mumbai Phoenix", status: "ACTIVE" },
        { name: "Bangalore UB City", status: "ACTIVE" },
        { name: "Hyderabad Jubilee Hills", status: "ACTIVE" }
    ],
    team: [
        { role: "Store Manager", name: "Anjali Mehta", shift: "Morning", status: "ON-DUTY" },
        { role: "Vault Custodian", name: "Vikram Singh", shift: "Morning", status: "ON-DUTY" },
        { role: "Sales Associate", name: "Rohan Das", shift: "Morning", status: "ON-DUTY" },
        { role: "CCTV Officer", name: "Sarah Khan", shift: "Full-Day", status: "ACTIVE" },
        { role: "Floor Supervisor", name: "Karan Iyer", shift: "Evening", status: "STANDBY" }
    ],
    tasks: [
        { id: "J-VLT-01", branch: "Mumbai Phoenix", role: "Vault Custodian", task: "Vault Opening (Dual Auth)", doneBy: "Vikram S.", verifiedBy: "Anjali M.", status: "COMPLETE" },
        { id: "J-DSP-02", branch: "Mumbai Phoenix", role: "Display Manager", task: "Empty-Holder Anomaly Scan", doneBy: "Rohan D.", verifiedBy: "", status: "COMPLETE" },
        { id: "J-WKP-06", branch: "Mumbai Phoenix", role: "Workshop Lead", task: "Repair Return Weighing", doneBy: "Amit K.", verifiedBy: "Anjali M.", status: "COMPLETE" },
        { id: "J-FIN-02", branch: "Mumbai Phoenix", role: "Finance Officer", task: "Gold Rate Sync (8 AM)", doneBy: "Anjali M.", verifiedBy: "", status: "COMPLETE" },
        { id: "J-HVT-03", branch: "Mumbai Phoenix", role: "Approver", task: "Buyback Valuation Match", doneBy: "", verifiedBy: "", status: "VERIFICATION PENDING" },
        { id: "J-HAL-01", branch: "Mumbai Phoenix", role: "Compliance", task: "BIS Hallmark Audit", doneBy: "Suresh P.", verifiedBy: "", status: "OPEN" },
        { id: "J-SEC-05", branch: "Mumbai Phoenix", role: "Security", task: "Panic Button Pulse Test", doneBy: "", verifiedBy: "", status: "ESCALATED" },
        { id: "J-DSP-10", branch: "Mumbai Phoenix", role: "Display Manager", task: "Spot Weight Match (High-Value)", doneBy: "", verifiedBy: "", status: "OPEN" }
    ],
    deepTask: {
        id: "J-VLT-01",
        title: "Vault Opening Verification",
        howTo: "Execute 2-key entry sequence with Secondary Custodian. Physically inspect safe handle for any tamper-signs from previous night. Log exact entry timestamp.",
        whyItMatters: "Eliminates single-point-of-failure for the property's primary asset. Ensures dual-custody discipline is never broken.",
        risk: "Unauthorized lone-person access leads to untraceable inventory exfiltration.",
        verification: "REQUIRED: Secondary Custodian + Manager Co-sign",
        escalation: "Immediate to Store Director if seal is broken."
    },
    incidents: [
        { type: "BEHAVIORAL", desc: "Suspicious customer lingering at Rolex case 3. No purchase.", status: "LOGGED" },
        { type: "OPERATIONAL", desc: "Delayed vault closure due to late VIP appointment.", status: "RESOLVED" },
        { type: "VARIANCE", desc: "Mismatch in 22k Gold Bangles Tray 4 (0.02g).", status: "INVESTIGATING" }
    ]
};
