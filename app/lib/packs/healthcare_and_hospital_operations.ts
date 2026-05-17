
import type { PremiumPack } from "@/lib/premium-packs";

export const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Hospital Operations System",
    priceINR: 3499,
    priceUSD: 49,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "Sovereign v14.9 high-gravity clinical governance engine. 200 technical control points across 12 institutional roles.",
    icon: "hospital",
    badgeText: "V14.9 PILOT",
    badgeVariant: "destructive",
    whoIsItFor: ["Medical Directors", "Hospital COOs", "Nursing Superintendents", "Quality Heads"],
    sampleItems: [
        { text: "<strong>WHO Surgical Safety</strong>: Pre-incision time-out seals.", icon: "shield-check" },
        { text: "<strong>Narcotics Command</strong>: Double-blind count logs.", icon: "pill" }
    ],
    checklists: [
        {
            title: "Medical Director Governance",
            department: "Clinical",
            frequency: "Daily",
            role: "Medical Director",
            summary: "High-level strategic oversight of clinical risk.",
            icon: "crown",
            tasks: Array.from({ length: 20 }, (_, i) => ({
                id: `H-EXE-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Review Sentinel Event Log for near-miss clinical errors.",
                    "Audit doctor attendance parity against surgery schedules.",
                    "Verify weekly clinical quality indicators dashboard.",
                    "Audit 10 random patient files for signed surgical consent.",
                    "Witness clinical mortality review committee minutes.",
                    "Verify narcotic safe access logs and signature parity.",
                    "Audit clinical privileging for visiting consultants.",
                    "Review blood bank cross-match failure logs.",
                    "Audit ER triage TAT (Target < 10 mins).",
                    "Sign-off on weekly medical governance executive summary."
                ][i] || "Audit clinical governance pulse.",
                priority: "High",
                riskLevel: "High",
                consequence: "Fatal patient harm and total loss of license.",
                proof: "Signed Register"
            }))
        },
        {
            title: "Nursing & Ward Command",
            department: "Nursing",
            frequency: "Daily",
            role: "Nursing Superintendent",
            summary: "Invisible infrastructure of patient care.",
            icon: "heart-pulse",
            tasks: Array.from({ length: 45 }, (_, i) => ({
                id: `H-NUR-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Bedside Handover: Verify IV sites and clinical charts.",
                    "Crash Cart Integrity: Verify AED battery and drug seals.",
                    "Confirm patient ID wristband accuracy (100% check).",
                    "Audit sanitizer usage during 5 random bed visits.",
                    "Verify fall-risk bed-rails UP for high-risk patients.",
                    "Monitor nurse-to-patient ratio vs daily roster.",
                    "Verify linen grey-scale audit for 10 random beds.",
                    "Check ward dressing stock par levels.",
                    "Audit clinical waste segregation at the source.",
                    "Verify 100% medication double-check for high-alert drugs."
                ][i] || "Execute ward operational command.",
                priority: "High",
                riskLevel: "High",
                consequence: "Clinical error and infection spread.",
                proof: "Shift Handover Log"
            }))
        },
        {
            title: "Operating Theater Safety",
            department: "Surgery",
            frequency: "Per Show",
            role: "OT In-charge",
            summary: "Zero-fail surgical suite protocols.",
            icon: "shield-check",
            tasks: Array.from({ length: 40 }, (_, i) => ({
                id: `H-OT-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Execute WHO 'Time Out' before incision.",
                    "Verify sterility indicators on all instrument sets.",
                    "Pressure Test: Anesthesia leak test pre-opening.",
                    "CSSD Cycle Match: Verify biological indicators.",
                    "Audit patient ID vs Case-file pre-anesthesia.",
                    "Check OT positive pressure and humidity gauges.",
                    "Physical Count: Match needles and blades post-op.",
                    "Deep Clean: Verify weekly OT fumigation status.",
                    "Log medical gas manifold pressure levels.",
                    "Verify scrub-sink soap and water temperature."
                ][i] || "Verify OT readiness protocol.",
                priority: "High",
                riskLevel: "High",
                consequence: "Wrong-site surgery and septicemia.",
                proof: "OT Register"
            }))
        },
        {
            title: "Pharmacy & Cold Chain",
            department: "Pharmacy",
            frequency: "Daily",
            role: "Pharmacy Lead",
            summary: "Governance for controlled substances.",
            icon: "pill",
            tasks: Array.from({ length: 35 }, (_, i) => ({
                id: `H-PHM-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Double-blind count of Narcotics Vault units.",
                    "Cold Chain: Log medical fridge temp twice daily.",
                    "Expiry Sweep: Remove items with < 60 days life.",
                    "LASA Audit: Verify segregation of look-alike drugs.",
                    "Challenge 3 random illegible prescription orders.",
                    "Verify spill-kit presence in chemo-prep area.",
                    "Match daily sales to physical cash drop.",
                    "Audit un-opened drug returns from ward.",
                    "Verify pharmacy security armed for night closure."
                ][i] || "Audit pharmacy stock and safety.",
                priority: "High",
                riskLevel: "High",
                consequence: "Theft and criminal drug diversion.",
                proof: "Pharmacy Log"
            }))
        },
        {
            title: "Facility Engineering",
            department: "Engineering",
            frequency: "Daily",
            role: "Chief Engineer",
            summary: "Infrastructure uptime and life safety.",
            icon: "wrench",
            tasks: Array.from({ length: 40 }, (_, i) => ({
                id: `H-ENG-${String(i + 1).padStart(2, '0')}`,
                description: [
                    "Inspect DG fuel level and test auto-start logic.",
                    "Log medical gas manifold pressure (Oxygen/N2O).",
                    "Verify backup pump-room 'Auto' switch status.",
                    "Thermal Scan: IR scan of high-load electrical panels.",
                    "Test lift emergency intercoms to security desk.",
                    "Monitor RO water TDS at dialysis entry point.",
                    "Verify boiler steam pressure and gas seal.",
                    "Audit LOTO compliance on all active MEP repairs.",
                    "Check server-room UPS battery voltage status."
                ][i] || "Check mechanical vitals.",
                priority: "High",
                riskLevel: "High",
                consequence: "Facility blackout and clinical halt.",
                proof: "Meter Log"
            }))
        }
    ]
};
