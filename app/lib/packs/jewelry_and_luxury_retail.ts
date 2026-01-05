
import type { PremiumPack } from "@/lib/premium-packs";

export const jewelry_and_luxury_retail: PremiumPack = {
    id: 'jewelry_and_luxury_retail',
    title: "Jewelry & Luxury Retail Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/bf8a35c9-991d-4471-95f6-e0c7ce285981',
    category: "Retail",
    description: "A specialized toolkit for high-value retail, focusing on vault security, inventory control, and preventing sophisticated fraud.",
    icon: "gem",
    badgeText: "High Value",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["Jewelry Store Owners", "Luxury Brand Managers", "Asset Protection Directors", "Heads of Retail"],
    sampleItems: [
        { text: "Enforce Fort-Knox level security with vault access control and dual verification SOPs.", icon: "lock" },
        { text: "Protect your most valuable assets with display case and overnight security protocols.", icon: "shield" },
        { text: "Prevent fraud in high-value transactions with rigorous payment verification steps.", icon: "circle-dollar-sign" },
        { text: "Eliminate swap theft and inventory loss with serialized item and watch management.", icon: "watch" },
        { text: "Ensure regulatory compliance with robust customer verification (KYC) processes.", icon: "user-check" },
        { text: "Build customer trust with a secure and transparent repair and service intake process.", icon: "wrench" }
    ],
    checklists: [
        {
            title: "Opening & Closing Security Protocol",
            department: "Security/Operations",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Ensures the store is secure before opening and after closing.",
            icon: "shield",
            tasks: [
                { id: "JLR-SEC-01", description: "Perform dual-person vault opening and closing procedure.", priority: "High", riskLevel: "High", consequence: "Prevents single-person access to high-value inventory, drastically reducing the risk of internal theft.", proof: "Vault Access Log" },
                { id: "JLR-SEC-02", description: "Log deactivation and activation of the main security alarm.", priority: "High", riskLevel: "High", consequence: "Creates a clear audit trail for any after-hours security events and ensures the store is never left unprotected.", proof: "Alarm Log" },
                { id: "JLR-SEC-03", description: "Conduct a full inventory count of all display cases at opening and closing.", priority: "High", riskLevel: "High", consequence: "Immediately identifies any missing items, allowing for rapid investigation before evidence is lost or CCTV footage is overwritten.", proof: "Display Inventory Sheet" },
                { id: "JLR-SEC-04", description: "Verify all CCTV cameras are recording and have unobstructed views.", priority: "High", riskLevel: "High", consequence: "Ensures that in the event of a robbery or theft, there is clear, usable evidence for law enforcement and insurance claims.", proof: "CCTV Check Log" },
                { id: "JLR-SEC-05", description: "Test silent panic alarms daily before opening.", priority: "High", riskLevel: "High", consequence: "Guarantees that staff can silently alert security or police during a robbery without escalating the situation.", proof: "Panic Alarm Test Log" },
                { id: "JLR-SEC-06", description: "Check entry/exit logs from previous day.", priority: "Medium", riskLevel: "Medium", consequence: "Helps identify any unusual after-hours activity.", proof: "Log Review" },
                { id: "JLR-SEC-07", description: "Confirm all display cases are locked and secure.", priority: "High", riskLevel: "High", consequence: "An unlocked case is an easy target for a smash-and-grab theft.", proof: "Visual Confirmation" },
                { id: "JLR-SEC-08", description: "Ensure all staff have their IDs visible.", priority: "Medium", riskLevel: "Low", consequence: "Helps quickly identify any unauthorized individuals on the floor.", proof: "Visual Check" },
                { id: "JLR-SEC-09", description: "Verify alarm system communication with monitoring center.", priority: "High", riskLevel: "High", consequence: "A system that isn't communicating provides a false sense of security.", proof: "System Test" },
                { id: "JLR-SEC-10", description: "Document any security anomalies from the previous night.", priority: "High", riskLevel: "Medium", consequence: "Provides data for identifying patterns or recurring security weaknesses.", proof: "Incident Report" }
            ]
        },
        {
            title: "High-Value Transaction SOP",
            department: "Sales",
            frequency: "Per Transaction",
            role: "Senior Sales Associate",
            summary: "A strict protocol for handling high-value sales to prevent fraud.",
            icon: "circle-dollar-sign",
            tasks: [
                { id: "JLR-SALE-01", description: "Verify government-issued ID for any purchase over a set threshold.", priority: "High", riskLevel: "High", consequence: "A primary defense against the use of stolen credit cards or fraudulent identities.", proof: "ID Scan/Copy" },
                { id: "JLR-SALE-02", description: "Require secondary manager approval for very large or unusual transactions.", priority: "High", riskLevel: "High", consequence: "Provides a second set of eyes to spot red flags that a junior employee might miss under pressure.", proof: "Manager Sign-off" },
                { id: "JLR-SALE-03", description: "Use counterfeit detection pens/machines for all large cash transactions.", priority: "High", riskLevel: "High", consequence: "Accepting counterfeit currency is a direct and unrecoverable financial loss.", proof: "Counterfeit Check Log" },
                { id: "JLR-SALE-04", description: "Follow specific protocols for verifying digital payments and flagging potential fraud.", priority: "High", riskLevel: "High", consequence: "Digital payment fraud is sophisticated; a checklist ensures all verification steps are taken.", proof: "Payment Verification Checklist" },
                { id: "JLR-SALE-05", description: "Log details of any suspicious transaction attempts.", priority: "High", riskLevel: "High", consequence: "This data is invaluable for training staff and sharing with other stores or law enforcement.", proof: "Suspicious Activity Report" },
                { id: "JLR-SALE-06", description: "Confirm customer contact information for high-value sales.", priority: "Medium", riskLevel: "Medium", consequence: "Essential for follow-up, clienteling, and in case of any transaction issues.", proof: "CRM Entry" },
                { id: "JLR-SALE-07", description: "For international cards, call for authorization.", priority: "High", riskLevel: "High", consequence: "A common vector for high-value credit card fraud.", proof: "Call Log" },
                { id: "JLR-SALE-08", description: "Ensure proper documentation for tax-free sales.", priority: "High", riskLevel: "Medium", consequence: "Failure to do so can lead to tax penalties.", proof: "Tax Form" },
                { id: "JLR-SALE-09", description: "Double-check packaging and boxing in front of customer.", priority: "High", riskLevel: "Low", consequence: "Prevents claims that the wrong item was boxed.", proof: "Visual Confirmation" },
                { id: "JLR-SALE-10", description: "Provide customer with all necessary certificates and warranty cards.", priority: "High", riskLevel: "Low", consequence: "Essential for customer satisfaction and future service needs.", proof: "Document Handover" }
            ]
        },
        {
            title: "Serialized Item & Watch Management",
            department: "Inventory",
            frequency: "Ongoing",
            role: "Inventory Manager",
            summary: "Tracks every unique high-value item to prevent theft and swapping.",
            icon: "watch",
            tasks: [
                { id: "JLR-INV-01", description: "Log the unique serial number of every watch and serialized item upon receipt.", priority: "High", riskLevel: "High", consequence: "Without this, inventory tracking is impossible and theft is easy to conceal.", proof: "GRN Serial Log" },
                { id: "JLR-INV-02", description: "Store high-value watches and items in a separate, access-controlled area.", priority: "High", riskLevel: "High", consequence: "Leaving high-value items in general storage increases theft risk.", proof: "Secure Storage Log" },
                { id: "JLR-INV-03", description: "Maintain a detailed chain-of-custody log for items sent out for repair or certification.", priority: "High", riskLevel: "High", consequence: "An item can be 'lost' or swapped while outside the store without a clear log.", proof: "Chain of Custody Form" },
                { id: "JLR-INV-04", description: "Conduct weekly audits of serialized inventory against system records.", priority: "High", riskLevel: "High", consequence: "Allows for rapid detection of missing items.", proof: "Audit Report" },
                { id: "JLR-INV-05", description: "Match serial number at point of sale to prevent swapping.", priority: "High", riskLevel: "High", consequence: "The final check to ensure a customer is not leaving with a swapped, fake item.", proof: "POS Scan Log" },
                { id: "JLR-INV-06", description: "Photograph each serialized item upon receipt.", priority: "High", riskLevel: "Medium", consequence: "Provides a visual record of condition to prevent fraudulent damage claims.", proof: "Photo Log" },
                { id: "JLR-INV-07", description: "Update inventory system immediately upon sale.", priority: "High", riskLevel: "High", consequence: "A delay can lead to the system showing stock that has already been sold.", proof: "System Entry" },
                { id: "JLR-INV-08", description: "Report any serial number discrepancies immediately.", priority: "High", riskLevel: "High", consequence: "Delay allows a thief to get away or evidence to be lost.", proof: "Incident Report" },
                { id: "JLR-INV-09", description: "Verify serial number matches on box, certificate, and item.", priority: "High", riskLevel: "High", consequence: "A mismatch can indicate a counterfeit item or a swapped component.", proof: "Triple Check Log" },
                { id: "JLR-INV-10", description: "Securely destroy old serial number records after statutory period.", priority: "Medium", riskLevel: "Low", consequence: "Old records can pose a data privacy risk if not handled correctly.", proof: "Destruction Log" }
            ]
        },
        {
            title: "Display Case & Vault Security",
            department: "Security",
            frequency: "Daily",
            role: "Security Supervisor",
            summary: "Daily checks to ensure physical security measures are in place and functional.",
            icon: "lock",
            tasks: [
                { id: "JLR-DISP-01", description: "Physically check the locks on every display case at the end of the day.", priority: "High", riskLevel: "High", consequence: "An unlocked case is the single biggest vulnerability to a simple \"smash and grab\" theft.", proof: "Lock Check Log" },
                { id: "JLR-DISP-02", description: "Verify the vault door is properly locked and secured after closing.", priority: "High", riskLevel: "High", consequence: "The final and most critical security layer; failure here is catastrophic.", proof: "Vault Security Log" },
                { id: "JLR-DISP-03", description: "Test motion sensors and panic buttons weekly.", priority: "High", riskLevel: "High", consequence: "A malfunctioning sensor or button provides a false sense of security and will fail when needed most.", proof: "Alarm Test Log" },
                { id: "JLR-DISP-04", description: "Ensure all keys are accounted for and stored securely.", priority: "High", riskLevel: "High", consequence: "A missing key can compromise the entire store's security.", proof: "Key Log" },
                { id: "JLR-DISP-05", description: "Audit display lighting to ensure all items are well-illuminated.", priority: "Medium", riskLevel: "Low", consequence: "Poor lighting not only hurts sales but can also obscure the view of CCTV cameras.", proof: "Lighting Check" },
                { id: "JLR-DISP-06", description: "Ensure display case glass is clean and free of cracks.", priority: "Medium", riskLevel: "Medium", consequence: "A crack can compromise the integrity of the glass, making it easier to break.", proof: "Visual Check" },
                { id: "JLR-DISP-07", description: "Check for any signs of tampering with display cases.", priority: "High", riskLevel: "High", consequence: "Thieves may attempt to subtly disable locks or alarms before a robbery attempt.", proof: "Tamper Check Log" },
                { id: "JLR-DISP-08", description: "Verify that vault combination is changed periodically.", priority: "High", riskLevel: "High", consequence: "Old combinations known by former employees pose a major internal threat.", proof: "Combination Change Log" },
                { id: "JLR-DISP-09", description: "Ensure vault is clean and organized.", priority: "Medium", riskLevel: "Low", consequence: "A disorganized vault can lead to misplaced or damaged inventory.", proof: "Visual Check" },
                { id: "JLR-DISP-10", description: "Review vault access logs for any unauthorized entries.", priority: "High", riskLevel: "High", consequence: "Helps detect internal security breaches or unauthorized access attempts.", proof: "Log Review" }
            ]
        },
        {
            title: "Inventory Auditing (Cycle Count)",
            department: "Inventory",
            frequency: "Daily",
            role: "Auditor",
            summary: "Regular, targeted inventory counts to ensure accuracy and deter theft.",
            icon: "clipboard-check",
            tasks: [
                { id: "JA-AUDIT-01", description: "Perform daily random cycle counts on selected high-value categories.", priority: "High", riskLevel: "High", consequence: "Allows for the immediate detection of theft or loss of the most valuable items.", proof: "Cycle Count Sheets" },
                { id: "JA-AUDIT-02", description: "Investigate and resolve any discrepancies within 24 hours.", priority: "High", riskLevel: "High", consequence: "The trail goes cold quickly; immediate investigation is key to recovery or identifying the cause.", proof: "Discrepancy Report" },
                { id: "JA-AUDIT-03", description: "Conduct counts in teams of two for high-value areas.", priority: "High", riskLevel: "High", consequence: "The two-person rule prevents a single individual from falsifying count records to conceal theft.", proof: "Count Team Roster" },
                { id: "JA-AUDIT-04", description: "Secure the area being audited to prevent stock movement.", priority: "High", riskLevel: "Medium", consequence: "Items being moved during a count can lead to inaccurate results.", proof: "Audit Procedure" },
                { id: "JA-AUDIT-05", description: "Reconcile physical counts with system inventory and report to management.", priority: "High", riskLevel: "High", consequence: "Provides management with an accurate picture of inventory health and shrinkage.", proof: "Final Audit Report" },
                { id: "JA-AUDIT-06", description: "Use barcode scanners for accuracy during counts.", priority: "High", riskLevel: "High", consequence: "Manual counting is prone to human error.", proof: "Scan Logs" },
                { id: "JA-AUDIT-07", description: "Freeze system inventory during full stock takes.", priority: "High", riskLevel: "High", consequence: "Transactions during a count will lead to incorrect final numbers.", proof: "System Setting" },
                { id: "JA-AUDIT-08", description: "Document reasons for all inventory adjustments.", priority: "High", riskLevel: "High", consequence: "An undocumented adjustment can be a way to hide theft.", proof: "Adjustment Notes" },
                { id: "JA-AUDIT-09", description: "Rotate audit locations and categories regularly.", priority: "Medium", riskLevel: "Medium", consequence: "Predictable audits can be exploited by knowledgeable thieves.", proof: "Audit Schedule" },
                { id: "JA-AUDIT-10", description: "Manager to sign off on all final audit reports.", priority: "High", riskLevel: "High", consequence: "Ensures management accountability for inventory accuracy.", proof: "Signed Report" }
            ]
        },
        {
            title: "Customer Verification (KYC)",
            department: "Sales",
            frequency: "Per High-Value Transaction",
            role: "Senior Sales Associate",
            summary: "A protocol to verify customer identity for large transactions, preventing fraud and ensuring compliance.",
            icon: "user-check",
            tasks: [
                { id: "CV-01", description: "Collect and verify government-issued photo ID for purchases over the KYC threshold.", priority: "High", riskLevel: "High", consequence: "A legal requirement for high-value transactions to prevent money laundering.", proof: "ID Scan/Copy" },
                { id: "CV-02", description: "Match the name on the credit card to the customer's ID.", priority: "High", riskLevel: "High", consequence: "The most basic and effective check against credit card fraud.", proof: "Visual Check" },
                { id: "CV-03", description: "For large transactions, perform a quick online search to verify customer profile.", priority: "Medium", riskLevel: "Medium", consequence: "Can help spot red flags or inconsistencies in a customer's story.", proof: "Search Log" },
                { id: "CV-04", description: "Document all verification steps in the customer's transaction record.", priority: "High", riskLevel: "High", consequence: "Creates an audit trail to prove due diligence was performed.", proof: "Transaction Notes" },
                { id: "CV-05", description: "Flag any suspicious behavior for a manager's review before proceeding.", priority: "High", riskLevel: "High", consequence: "Empowers staff to pause a transaction they feel is suspicious.", proof: "Manager Alert" },
                { id: "CV-06", description: "Follow AML (Anti-Money Laundering) guidelines for large cash transactions.", priority: "High", riskLevel: "High", consequence: "Non-compliance can lead to severe legal penalties for the business.", proof: "AML Form" },
                { id: "CV-07", description: "Record customer details accurately for future communication.", priority: "High", riskLevel: "Medium", consequence: "Critical for building a long-term client relationship.", proof: "CRM Entry" },
                { id: "CV-08", description: "Check against any internal watchlists for known fraudsters.", priority: "High", riskLevel: "High", consequence: "Prevents repeat fraud attempts by known individuals.", proof: "Watchlist Check" },
                { id: "CV-09", description: "For corporate purchases, verify business registration details.", priority: "High", riskLevel: "High", consequence: "Ensures the purchase is legitimate and authorized by the company.", proof: "Business Document Copy" },
                { id: "CV-10", description: "Retain verification documents securely and in compliance with privacy laws.", priority: "High", riskLevel: "High", consequence: "Mishandling high-net-worth individual data is a major legal risk.", proof: "Secure Storage Log" }
            ]
        },
        {
            title: "Repair & Service Management",
            department: "After-Sales",
            frequency: "Per Item",
            role: "Service Manager",
            summary: "A secure process for handling customer items for repair or servicing.",
            icon: "wrench",
            tasks: [
                { id: "RSM-01", description: "Photograph and document the condition of every item received for repair.", priority: "High", riskLevel: "High", consequence: "Prevents fraudulent claims that the store damaged the item.", proof: "Intake Form with Photos" },
                { id: "RSM-02", description: "Create a detailed job sheet with estimated costs and timeline.", priority: "High", riskLevel: "Medium", consequence: "Prevents disputes over repair costs and duration.", proof: "Job Sheet" },
                { id: "RSM-03", description: "Obtain written customer approval before proceeding with any work.", priority: "High", riskLevel: "High", consequence: "Protects the store from claims of unauthorized repairs.", proof: "Signed Approval" },
                { id: "RSM-04", description: "Store all customer items in a dedicated, secure, and insured location.", priority: "High", riskLevel: "High", consequence: "Losing or having a customer's high-value item stolen is a major financial and reputational disaster.", proof: "Storage Log" },
                { id: "RSM-05", description: "Verify customer identity upon collection of the serviced item.", priority: "High", riskLevel: "High", consequence: "Prevents handing over a valuable item to the wrong person.", proof: "ID Check Log" },
                { id: "RSM-06", description: "Track repair status and provide updates to the customer.", priority: "High", riskLevel: "Medium", consequence: "Lack of communication leads to customer frustration.", proof: "Communication Log" },
                { id: "RSM-07", description: "Inspect the item after repair to ensure quality.", priority: "High", riskLevel: "High", consequence: "Returning an item that is still faulty leads to extreme customer dissatisfaction.", proof: "QC Check" },
                { id: "RSM-08", description: "Securely package the item for return to the customer.", priority: "High", riskLevel: "Low", consequence: "Protects the item from damage after it leaves the store.", proof: "Packaging Check" },
                { id: "RSM-09", description: "Process payment for repairs accurately.", priority: "High", riskLevel: "Medium", consequence: "Billing errors can lead to disputes.", proof: "Invoice" },
                { id: "RSM-10", description: "Log all repair details for future reference and warranty claims.", priority: "High", riskLevel: "Medium", consequence: "Provides a valuable service history for the item.", proof: "Service History" }
            ]
        },
        {
            title: "Staff Training on Security Protocols",
            department: "HR/Security",
            frequency: "Quarterly",
            role: "Security Manager",
            summary: "Regular training to ensure all staff are vigilant and prepared for security threats.",
            icon: "user-check",
            tasks: [
                { id: "STSP-01", description: "Conduct quarterly training on robbery response procedures.", priority: "High", riskLevel: "High", consequence: "In a robbery, untrained staff can panic and make dangerous mistakes.", proof: "Training Attendance Sheet" },
                { id: "STSP-02", description: "Train staff to identify common signs of suspicious customer behavior.", priority: "High", riskLevel: "High", consequence: "Staff are the first line of defense; if they can't spot a threat, the store is vulnerable.", proof: "Training Module" },
                { id: "STSP-03", description: "Drill staff on the correct procedure for showing high-value items to customers.", priority: "High", riskLevel: "High", consequence: "Prevents common theft tactics like \"swap\" or \"grab and run\".", proof: "Drill Log" },
                { id: "STSP-04", description: "Review recent security incidents or attempts with the team.", priority: "Medium", riskLevel: "Medium", consequence: "Sharing information helps everyone learn and stay vigilant.", proof: "Meeting Minutes" },
                { id: "STSP-05", description: "Test staff knowledge with quizzes on security protocols.", priority: "Medium", riskLevel: "Medium", consequence: "Verifies that training has been understood and retained.", proof: "Quiz Results" },
                { id: "STSP-06", description: "Train staff on the use of panic buttons.", priority: "High", riskLevel: "High", consequence: "Ensures a rapid and silent call for help during an emergency.", proof: "Training Log" },
                { id: "STSP-07", description: "Role-play different security scenarios with staff.", priority: "High", riskLevel: "High", consequence: "Builds muscle memory for how to react in a crisis.", proof: "Role-play Log" },
                { id: "STSP-08", description: "Ensure all staff know the emergency contact numbers.", priority: "High", riskLevel: "High", consequence: "Critical for a fast response from police or management.", proof: "Contact List Check" },
                { id: "STSP-09", description: "Provide training on handling difficult customers.", priority: "Medium", riskLevel: "Medium", consequence: "Helps de-escalate situations before they become security incidents.", proof: "Training Log" },
                { id: "STSP-10", description: "Update training materials based on new threats or incidents.", priority: "High", riskLevel: "Medium", consequence: "Training must evolve as criminal tactics change.", proof: "Updated Materials" }
            ]
        },
        {
            title: "Insurance & Compliance",
            department: "Finance/Legal",
            frequency: "Annually",
            role: "Compliance Officer",
            summary: "Annual review of legal, regulatory, and insurance compliance.",
            icon: "file-check",
            tasks: [
                { id: "IC-01", description: "Review all insurance policies annually to ensure adequate coverage.", priority: "High", riskLevel: "High", consequence: "Being underinsured can lead to financial ruin after a major theft or incident.", proof: "Insurance Policy Review" },
                { id: "IC-02", description: "Verify compliance with all local laws regarding the sale of precious metals and gems.", priority: "High", riskLevel: "High", consequence: "Non-compliance can lead to heavy fines and loss of license.", proof: "Legal Compliance Checklist" },
                { id: "IC-03", description: "Maintain all necessary documentation for potential police or tax audits.", priority: "High", riskLevel: "High", consequence: "Disorganized records can create major problems during an audit.", proof: "Audit File" },
                { id: "IC-04", description: "Ensure BIS hallmarking compliance for all relevant jewelry.", priority: "High", riskLevel: "High", consequence: "A legal requirement in India that proves the purity of gold.", proof: "Hallmarking Records" },
                { id: "IC-05", description: "Track and comply with any changes in import/export regulations.", priority: "High", riskLevel: "High", consequence: "Can lead to shipments being seized by customs.", proof: "Regulatory Update Log" },
                { id: "IC-06", description: "Ensure compliance with anti-money laundering (AML) regulations.", priority: "High", riskLevel: "High", consequence: "High-value retail is a target for money laundering; non-compliance carries severe penalties.", proof: "AML Policy Review" },
                { id: "IC-07", description: "Review data privacy policies for customer data.", priority: "High", riskLevel: "High", consequence: "Mishandling high-net-worth individual data is a major legal risk.", proof: "Privacy Policy Review" },
                { id: "IC-08", description: "Verify compliance with labor laws for all staff.", priority: "High", riskLevel: "High", consequence: "Can lead to lawsuits and fines.", proof: "Labor Law Audit" },
                { id: "IC-09", description: "Maintain records of all compliance-related training.", priority: "High", riskLevel: "High", consequence: "Proves due diligence to regulators.", proof: "Training Records" },
                { id: "IC-10", description: "Conduct an annual compliance risk assessment.", priority: "High", riskLevel: "High", consequence: "Helps to proactively identify and mitigate new legal and regulatory risks.", proof: "Risk Assessment Report" }
            ]
        }
    ]
};

  