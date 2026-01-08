
import type { PremiumPack } from "@/lib/premium-packs";

export const pharmacy_ops_pack: PremiumPack = {
    id: 'pharmacy_ops_pack',
    title: "Pharmacy Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Healthcare",
    description: "A comprehensive toolkit for retail pharmacies to ensure patient safety, regulatory compliance, and operational efficiency.",
    icon: "pill",
    badgeText: "New!",
    badgeVariant: "accent",
    whoIsItFor: ["Pharmacists", "Pharmacy Owners", "Healthcare Compliance Officers", "Retail Pharmacy Chains"],
    sampleItems: [
        { text: "Prevent dispensing errors with a robust prescription verification and double-check system.", icon: "file-check" },
        { text: "Ensure compliance with drug storage, cold chain management, and narcotics control protocols.", icon: "thermometer" },
        { text: "Manage inventory effectively to prevent stockouts of critical medicines and reduce expiry-related losses.", icon: "boxes" },
        { text: "Provide excellent patient care with checklists for patient counseling and medication therapy management.", icon: "user-check" },
        { text: "Maintain a sterile and professional environment with SOPs for pharmacy hygiene and sanitation.", icon: "sparkles" },
        { text: "Secure your operations with cash handling, reconciliation, and fraud prevention protocols.", icon: "shield" }
    ],
    checklists: [
        {
            title: "Prescription Dispensing & Verification",
            department: "Pharmacy",
            frequency: "Per Prescription",
            role: "Pharmacist",
            summary: "A critical safety checklist to prevent medication errors during the dispensing process.",
            icon: "file-check",
            tasks: [
                { id: "PHARM-DISP-01", description: "Verify patient identity using at least two identifiers (e.g., name and phone number).", priority: "High", riskLevel: "High", consequence: "Dispensing medication to the wrong patient.", proof: "Patient Verification Log" },
                { id: "PHARM-DISP-02", description: "Check prescription for completeness and legality (doctor's details, date, signature).", priority: "High", riskLevel: "High", consequence: "Dispensing against an invalid or fraudulent prescription.", proof: "Prescription Audit" },
                { id: "PHARM-DISP-03", description: "Review patient's medication history for potential drug interactions or allergies.", priority: "High", riskLevel: "High", consequence: "Causing a serious adverse drug reaction.", proof: "Patient History Review Note" },
                { id: "PHARM-DISP-04", description: "Perform an independent double-check for all high-alert medications (e.g., insulin, narcotics).", priority: "High", riskLevel: "High", consequence: "A dispensing error with a high-alert drug can be fatal.", proof: "Dual Sign-off on Prescription" },
                { id: "PHARM-DISP-05", description: "Ensure correct drug, strength, and dosage form is selected from the shelf.", priority: "High", riskLevel: "High", consequence: "Look-alike, sound-alike (LASA) errors can lead to patient harm.", proof: "Visual Check Against Prescription" },
                { id: "PHARM-DISP-06", description: "Accurately count or measure the quantity to be dispensed.", priority: "High", riskLevel: "Medium", consequence: "Patient receives incorrect amount of medication.", proof: "Count Verification" },
                { id: "PHARM-DISP-07", description: "Label the medication container clearly with patient name, drug name, strength, and instructions.", priority: "High", riskLevel: "High", consequence: "An incorrectly labeled medication can lead to serious patient harm.", proof: "Label vs. Prescription Check" },
                { id: "PHARM-DISP-08", description: "Provide counseling to the patient on how to take the medication, including side effects.", priority: "High", riskLevel: "Medium", consequence: "Patient takes medication incorrectly, reducing its effectiveness or causing harm.", proof: "Counseling Log" },
                { id: "PHARM-DISP-09", description: "Verify the final packed medication against the original prescription before handing it to the patient.", priority: "High", riskLevel: "High", consequence: "The final safety net to catch any error in the dispensing process.", proof: "Final Check Sign-off" },
                { id: "PHARM-DISP-10", description: "Document the dispensing process in the pharmacy management system.", priority: "High", riskLevel: "Medium", consequence: "Lack of a legal and auditable record of the dispensing event.", proof: "System Log" }
            ]
        },
        {
            title: "Inventory & Cold Chain Management",
            department: "Stores",
            frequency: "Daily/Weekly",
            role: "Store Manager",
            summary: "Ensures medicines are stored correctly and inventory is managed to prevent stockouts and expiry.",
            icon: "thermometer",
            tasks: [
                { id: "PHARM-INV-01", description: "Log temperatures of all refrigerators and freezers twice daily.", priority: "High", riskLevel: "High", consequence: "Vaccines and other biologics can become ineffective if the cold chain is broken.", proof: "Temperature Logbook" },
                { id: "PHARM-INV-02", description: "Conduct weekly cycle counts of high-value and narcotic drugs.", priority: "High", riskLevel: "High", consequence: "Helps to quickly detect theft or diversion of controlled substances.", proof: "Cycle Count Sheet" },
                { id: "PHARM-INV-03", description: "Check for and remove any expired or near-expiry drugs from stock monthly.", priority: "High", riskLevel: "High", consequence: "Dispensing expired drugs is illegal and can be harmful.", proof: "Expiry Sweep Log" },
                { id: "PHARM-INV-04", description: "Use a First-Expiry, First-Out (FEFO) system for all stock.", priority: "High", riskLevel: "High", consequence: "Reduces wastage from expired stock.", proof: "Storage Audit" },
                { id: "PHARM-INV-05", description: "Store narcotics and psychotropic substances in a locked safe with a separate register.", priority: "High", riskLevel: "High", consequence: "A strict legal requirement to prevent drug diversion.", proof: "Narcotics Register Audit" },
                { id:- "PHARM-INV-06", description: "Inspect incoming goods for quality, quantity, and correct storage conditions.", priority: "High", riskLevel: "High", consequence: "The first line of defense against counterfeit or damaged medicines entering the supply chain.", proof: "Goods Receiving Note" },
                { id: "PHARM-INV-07", description: "Return expired drugs to the supplier or dispose of them as per regulations.", priority: "High", riskLevel: "Medium", consequence: "Improper disposal is an environmental and legal risk.", proof: "Disposal/Return Log" },
                { id: "PHARM-INV-08", description: "Maintain an organized and clean storage area.", priority: "High", riskLevel: "Medium", consequence: "A disorganized storeroom can lead to picking errors and contamination.", proof: "Storage Area Inspection" },
                { id: "PHARM-INV-09", description: "Generate and review stock level reports to prevent stockouts of essential medicines.", priority: "High", riskLevel: "High", consequence: "Not having a critical medicine in stock can have serious consequences for patient health.", proof: "Stock Level Report" },
                { id: "PHARM-INV-10", description: "Secure the pharmacy against theft and burglary after hours.", priority: "High", riskLevel: "High", consequence: "Pharmacies are a major target for burglaries.", proof: "Closing Security Checklist" }
            ]
        },
        {
            title: "Regulatory Compliance & Documentation",
            department: "Compliance",
            frequency: "Monthly/Annually",
            role: "Pharmacist-in-Charge",
            summary: "Ensures the pharmacy adheres to all regulations from the Drug Control authorities and other bodies.",
            icon: "file-text",
            tasks: [
                { id: "PHARM-REG-01", description: "Ensure the pharmacy license is valid and prominently displayed.", priority: "High", riskLevel: "High", consequence: "Operating without a valid license is illegal.", proof: "Displayed License" },
                { id: "PHARM-REG-02", description: "Maintain all required registers (e.g., Prescription Register, Narcotics Register) as per the Drugs and Cosmetics Act.", priority: "High", riskLevel: "High", consequence: "A primary focus of any drug inspector audit; failure leads to severe penalties.", proof: "Register Audit" },
                { id: "PHARM-REG-03", description: "Ensure all pharmacists' registration certificates are valid and displayed.", priority: "High", riskLevel: "High", consequence: "It is illegal for an unregistered person to dispense medication.", proof: "Pharmacist Certificate File" },
                { id: "PHARM-REG-04", description: "Audit a sample of prescriptions to ensure they are being filed and stored correctly.", priority: "High", riskLevel: "Medium", consequence: "Inability to produce a specific prescription during an audit.", proof: "Prescription Filing Audit" },
                { id: "PHARM-REG-05", description: "Verify that all purchase invoices are from licensed dealers and are properly filed.", priority: "High", riskLevel: "High", consequence: "Proves that all medicines have been sourced from legitimate suppliers.", proof: "Invoice File Audit" },
                { id: "PHARM-REG-06", description: "Stay updated on any changes or amendments to pharmacy laws and regulations.", priority: "High", riskLevel: "High", consequence: "Ignorance of a new rule is not a defense against non-compliance.", proof: "Regulatory Update Log" },
                { id: "PHARM-REG-07", description: "Conduct a self-audit of the pharmacy quarterly to ensure inspection readiness.", priority: "High", riskLevel: "Medium", consequence: "Proactively identifies and fixes gaps before a real inspection.", proof: "Self-Audit Report" },
                { id: "PHARM-REG-08", description: "Prepare for and cooperate with any inspections by drug control officers.", priority: "High", riskLevel: "High", consequence: "A poor inspection can lead to fines, suspension, or closure.", proof: "Inspection Preparedness Checklist" },
                { id: "PHARM-REG-09", description: "Ensure all billing is compliant with GST and other tax regulations.", priority: "High", riskLevel: "Medium", consequence: "Tax compliance issues can lead to financial penalties.", proof: "Billing Audit" },
                { id: "PHARM-REG-10", description: "Maintain records of all drug recalls and actions taken.", priority: "High", riskLevel: "High", consequence: "Demonstrates that recalled products were effectively removed from stock.", proof: "Recall File" }
            ]
        },
        {
            title: "Patient Counseling & Communication",
            department: "Pharmacy",
            frequency: "Per Patient",
            role: "Pharmacist",
            summary: "A checklist for providing effective patient counseling to improve medication adherence and outcomes.",
            icon: "user-check",
            tasks: [
                { id: "PHARM-COUNSEL-01", description: "Explain the name, purpose, and dosage of each medication clearly.", priority: "High", riskLevel: "Medium", consequence: "Patient confusion can lead to medication errors at home.", proof: "Counseling Observation" },
                { id: "PHARM-COUNSEL-02", description: "Explain the best time to take the medication (e.g., with food, in the morning).", priority: "High", riskLevel: "Medium", consequence: "Improves medication effectiveness and reduces side effects.", proof: "Counseling Checklist" },
                { id: "PHARM-COUNSEL-03", description: "Discuss common side effects and what to do if they occur.", priority: "High", riskLevel: "High", consequence: "Prepares the patient and can prevent a minor side effect from becoming a major issue.", proof: "Counseling Checklist" },
                { id: "PHARM-COUNSEL-04", description: "Use the 'show and tell' method to ensure patient understanding.", priority: "High", riskLevel: "Medium", consequence: "Confirms that the patient has understood the instructions.", proof: "Patient Teach-back Log" },
                { id: "PHARM-COUNSEL-05", description: "Provide written information where possible.", priority: "Medium", riskLevel: "Low", consequence: "Reinforces verbal counseling and provides a reference for the patient at home.", proof: "Patient Information Leaflet" },
                { id: "PHARM-COUNSEL-06", description: "Advise on storage conditions for the medication.", priority: "High", riskLevel: "High", consequence: "Improper storage (e.g., leaving insulin out of the fridge) can make it ineffective.", proof: "Counseling Checklist" },
                { id: "PHARM-COUNSEL-07", description: "Check for understanding by asking the patient to repeat the key instructions.", priority: "High", riskLevel: "High", consequence: "The most effective way to confirm the patient has understood.", proof: "Patient Teach-back Log" },
                { id: "PHARM-COUNSEL-08", description: "Offer to speak with a family member or caregiver if the patient consents.", priority: "Medium", riskLevel: "Low", consequence: "Ensures that the support network is also aware of the medication regimen.", proof: "Family Counseling Log" },
                { id: "PHARM-COUNSEL-09", description: "Document that counseling was provided.", priority: "High", riskLevel: "Medium", consequence: "A professional and legal record of care provided.", proof: "Entry in Pharmacy System" },
                { id: "PHARM-COUNSEL-10", description: "Provide contact information for any follow-up questions.", priority: "High", riskLevel: "Low", consequence: "Shows ongoing support and care for the patient.", proof: "Pharmacy Contact Card" }
            ]
        }
    ]
};

    