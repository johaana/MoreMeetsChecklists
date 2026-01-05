
import type { PremiumPack } from "@/lib/premium-packs";

export const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    paymentId: 'pl_RaWEBHhFLQENxC', // Placeholder
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/b0b53361-91a3-496a-a169-b5a0344d7328',
    category: "Franchise",
    description: "A complete toolkit for franchisors to ensure brand consistency, operational excellence, and franchisee success across all locations.",
    icon: "store",
    badgeText: "New!",
    badgeVariant: "accent",
    whoIsItFor: ["Franchise Owners", "Heads of Operations", "Franchise Development Managers", "Regional Managers"],
    sampleItems: [
        { text: "Ensure a flawless launch for every new outlet with a 100-point New Franchisee Onboarding checklist.", icon: "rocket" },
        { text: "Protect your brand with rigorous Brand Standards and Marketing Compliance audits.", icon: "shield" },
        { text: "Drive profitability with SOPs for supply chain management, inventory control, and financial reporting.", icon: "trending-up" },
        { text: "Empower franchisee success with structured training programs and performance review templates.", icon: "users" },
        { text: "Maintain quality across the network with checklists for customer service and product consistency.", icon: "star" },
        { text: "Simplify legal and administrative tasks with templates for site selection and agreement management.", icon: "file-check" }
    ],
    checklists: [
        {
            title: "New Franchisee Onboarding",
            department: "Onboarding",
            frequency: "Per New Franchisee",
            role: "Onboarding Manager",
            summary: "A comprehensive checklist to guide a new franchisee from signing the agreement to grand opening, ensuring no steps are missed.",
            icon: "user-plus",
            tasks: [
                { id: "FR-ONBOARD-01", description: "Verify final site selection and lease agreement.", priority: "High", riskLevel: "High", consequence: "A poor location is a primary cause of franchise failure.", proof: "Signed Lease" },
                { id: "FR-ONBOARD-02", description: "Execute the franchise agreement and collect initial fees.", priority: "High", riskLevel: "High", consequence: "Without a signed agreement, there is no legal basis for the franchise relationship.", proof: "Signed Agreement & Receipt" },
                { id: "FR-ONBOARD-03", description: "Provide the franchisee with the complete operations manual.", priority: "High", riskLevel: "High", consequence: "Inconsistent operations from day one, leading to brand dilution.", proof: "Manual Handover Form" },
                { id: "FR-ONBOARD-04", description: "Manage the store fit-out process according to brand guidelines.", priority: "High", riskLevel: "High", consequence: "Inconsistent store design damages brand image and customer experience.", proof: "Fit-out Completion Report" },
                { id: "FR-ONBOARD-05", description: "Train the franchisee and their key staff on all operational procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff leads to poor service, quality issues, and customer complaints.", proof: "Training Certificates" },
                { id: "FR-ONBOARD-06", description: "Set up POS, inventory, and other required software systems.", priority: "High", riskLevel: "High", consequence: "Inability to process sales or track inventory from opening day.", proof: "System Setup Log" },
                { id: "FR-ONBOARD-07", description: "Coordinate initial inventory and supply chain setup.", priority: "High", riskLevel: "High", consequence: "Store cannot open without initial stock, causing delays and lost revenue.", proof: "First PO" },
                { id: "FR-ONBOARD-08", description: "Plan and execute a grand opening marketing campaign.", priority: "High", riskLevel: "Medium", consequence: "A weak opening fails to generate initial buzz and customer traffic.", proof: "Marketing Plan" },
                { id: "FR-ONBOARD-09", description: "Ensure all required licenses and permits are in place.", priority: "High", riskLevel: "High", consequence: "Operating without permits can lead to fines and forced closure by authorities.", proof: "Permit File" },
                { id: "FR-ONBOARD-10", description: "Conduct a final pre-opening audit to ensure readiness.", priority: "High", riskLevel: "High", consequence: "Opening with unresolved issues leads to a poor customer first impression.", proof: "Pre-opening Audit Report" }
            ]
        },
        {
            title: "Brand & Visual Identity Audit",
            department: "Operations",
            frequency: "Quarterly",
            role: "Field Manager",
            summary: "Ensures all brand-related visual elements are consistent and up to standard.",
            icon: "eye",
            tasks: [
                { id: "BRAND-AUDIT-01", description: "Check that all interior and exterior signage is correct and in good condition.", priority: "High", riskLevel: "High", consequence: "Damaged or incorrect signage makes the brand look unprofessional and cheap.", proof: "Photo Audit" },
                { id: "BRAND-AUDIT-02", description: "Verify staff uniforms are clean, correct, and worn properly.", priority: "High", riskLevel: "Medium", consequence: "Sloppy uniforms give a poor impression of brand standards.", proof: "Staff Inspection" },
                { id: "BRAND-AUDIT-03", description: "Ensure all marketing materials on display are current and brand-approved.", priority: "High", riskLevel: "High", consequence: "Using outdated materials can confuse customers and promote incorrect offers.", proof: "Marketing Material Audit" },
                { id: "BRAND-AUDIT-04", description: "Audit store cleanliness, lighting, and ambiance.", priority: "High", riskLevel: "High", consequence: "A dirty or poorly-lit store directly impacts customer experience and sales.", proof: "Ambiance Checklist" },
                { id: "BRAND-AUDIT-05", description: "Check that product/service presentation meets brand standards.", priority: "High", riskLevel: "High", consequence: "Inconsistent presentation leads to a disjointed brand experience.", proof: "Product Display Audit" },
                { id: "BRAND-AUDIT-06", description: "Review local social media and advertising for brand compliance.", priority: "High", riskLevel: "High", consequence: "Off-brand local marketing can damage the entire brand's reputation.", proof: "Social Media Review" },
                { id: "BRAND-AUDIT-07", description: "Ensure the correct brand music or scent profile is being used, if applicable.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent sensory branding dilutes the customer experience.", proof: "Sensory Audit" },
                { id: "BRAND-AUDIT-08", description: "Provide a detailed report to the franchisee with required corrective actions.", priority: "High", riskLevel: "High", consequence: "Without a formal report, compliance issues are likely to be ignored.", proof: "Audit Report" },
                { id: "BRAND-AUDIT-09", description: "Check window displays for compliance with current campaign.", priority: "High", riskLevel: "Medium", consequence: "Failure to update window displays leads to missed sales opportunities.", proof: "Photo Audit" },
                { id: "BRAND-AUDIT-10", description: "Verify correct use of brand packaging.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent packaging degrades brand perception.", proof: "Packaging Check" }
            ]
        },
        {
            title: "Monthly Performance Review",
            department: "Operations",
            frequency: "Monthly",
            role: "Franchise Manager",
            summary: "A structured monthly meeting to review performance and align on goals.",
            icon: "trending-up",
            tasks: [
                { id: "PERF-REVIEW-01", description: "Review franchisee's monthly sales data against targets.", priority: "High", riskLevel: "High", consequence: "Failure to track sales makes it impossible to manage performance or identify struggling franchisees.", proof: "Sales Report" },
                { id: "PERF-REVIEW-02", description: "Analyze key operational KPIs (e.g., customer satisfaction, speed of service).", priority: "High", riskLevel: "High", consequence: "Ignoring operational KPIs allows service quality to degrade over time.", proof: "KPI Dashboard" },
                { id: "PERF-REVIEW-03", description: "Discuss successes, challenges, and support needed from the franchisor.", priority: "High", riskLevel: "Medium", consequence: "Lack of communication leads to franchisee dissatisfaction and feeling unsupported.", proof: "Meeting Minutes" },
                { id: "PERF-REVIEW-04", description: "Develop a joint action plan for the upcoming month.", priority: "High", riskLevel: "High", consequence: "Without an action plan, performance issues are unlikely to be resolved.", proof: "Action Plan Document" },
                { id: "PERF-REVIEW-05", description: "Review local marketing initiatives and results.", priority: "High", riskLevel: "Medium", consequence: "Franchisees may waste money on ineffective marketing without guidance.", proof: "Marketing Report" },
                { id: "PERF-REVIEW-06", description: "Address any outstanding compliance issues from previous audits.", priority: "High", riskLevel: "High", consequence: "Repeated compliance failures can lead to penalties or franchise termination.", proof: "Compliance Tracker" },
                { id: "PERF-REVIEW-07", description: "Provide updates on new products, services, or brand-wide campaigns.", priority: "High", riskLevel: "Medium", consequence: "Franchisees feel disconnected from the brand and miss opportunities.", proof: "Update Presentation" },
                { id: "PERF-REVIEW-08", description: "Review franchisee's P&L statement and discuss profitability.", priority: "High", riskLevel: "High", consequence: "Unprofitable franchisees are at high risk of failure, which hurts the entire network.", proof: "P&L Statement" },
                { id: "PERF-REVIEW-09", description: "Discuss staff training and development needs.", priority: "High", riskLevel: "Medium", consequence: "Untrained staff leads to poor performance and high turnover.", proof: "Training Plan" },
                { id: "PERF-REVIEW-10", description: "Set goals for the next review period.", priority: "High", riskLevel: "High", consequence: "Without clear goals, performance stagnates.", proof: "Goal Sheet" }
            ]
        },
        {
            title: "Franchisee Financial Audit",
            department: "Finance",
            frequency: "Annually",
            role: "Auditor",
            summary: "An annual audit to ensure financial compliance and accuracy.",
            icon: "banknote",
            tasks: [
                { id: "FIN-AUDIT-01", description: "Verify accuracy of franchisee's reported gross sales.", priority: "High", riskLevel: "High", consequence: "Under-reported sales directly lead to loss of royalty revenue for the franchisor.", proof: "Sales Records vs POS Data" },
                { id: "FIN-AUDIT-02", description: "Reconcile royalty fee payments against reported sales.", priority: "High", riskLevel: "High", consequence: "Failure to reconcile can lead to significant revenue leakage.", proof: "Royalty Calculation Sheet" },
                { id: "FIN-AUDIT-03", description: "Audit compliance with approved pricing and discount policies.", priority: "High", riskLevel: "High", consequence: "Unauthorized discounts can erode brand value and profitability.", proof: "POS Transaction Audit" },
                { id: "FIN-AUDIT-04", description: "Check contributions to the national marketing fund.", priority: "High", riskLevel: "Medium", consequence: "Non-payment by some franchisees unfairly burdens others.", proof: "Marketing Fund Ledger" },
                { id: "FIN-AUDIT-05", description: "Review franchisee P&L statements for any red flags.", priority: "High", riskLevel: "Medium", consequence: "Financial distress in a franchisee can be an early warning sign of failure.", proof: "P&L Analysis" },
                { id: "FIN-AUDIT-06", description: "Ensure timely submission of all required financial reports.", priority: "High", riskLevel: "Medium", consequence: "Late reports make it impossible for the franchisor to manage the network effectively.", proof: "Submission Log" },
                { id: "FIN-AUDIT-07", description: "Verify purchases are made from approved suppliers.", priority: "High", riskLevel: "Medium", consequence: "Purchasing from unapproved suppliers can lead to quality issues and brand damage.", proof: "Supplier Invoice Audit" },
                { id: "FIN-AUDIT-08", description: "Issue an audit report with findings and required actions.", priority: "High", riskLevel: "High", consequence: "Without a formal report, financial irregularities may not be corrected.", proof: "Audit Report" },
                { id: "FIN-AUDIT-09", description: "Audit petty cash and expense reports.", priority: "High", riskLevel: "Medium", consequence: "Can uncover internal fraud or misuse of funds.", proof: "Expense Audit" },
                { id: "FIN-AUDIT-10", description: "Verify bank reconciliations.", priority: "High", riskLevel: "High", consequence: "Unreconciled accounts can hide cash flow problems or fraud.", proof: "Bank Statements" }
            ]
        },
        {
            title: "Local Store Marketing (LSM) Compliance",
            department: "Marketing",
            frequency: "Per Campaign",
            role: "Marketing Manager",
            summary: "Ensures franchisee-led marketing efforts adhere to brand guidelines.",
            icon: "megaphone",
            tasks: [
                { id: "LSM-01", description: "Require franchisees to submit all local marketing plans for approval.", priority: "High", riskLevel: "High", consequence: "Unapproved marketing can damage the brand's image and messaging.", proof: "LSM Submission Form" },
                { id: "LSM-02", description: "Review submitted plans for brand consistency and messaging.", priority: "High", riskLevel: "High", consequence: "Allows off-brand or unprofessional advertising to go live.", proof: "Approval Checklist" },
                { id: "LSM-03", description: "Provide feedback or approval within a defined SLA (e.g., 5 business days).", priority: "High", riskLevel: "Medium", consequence: "Slow approvals can cause franchisees to miss local marketing opportunities.", proof: "Communication Log" },
                { id: "LSM-04", description: "Provide franchisees with a library of pre-approved marketing templates.", priority: "High", riskLevel: "Medium", consequence: "Without templates, franchisees may create low-quality, off-brand materials.", proof: "Asset Library" },
                { id: "LSM-05", description: "Monitor franchisee social media accounts for compliance.", priority: "High", riskLevel: "High", consequence: "Unmonitored accounts can spread misinformation or damage the brand.", proof: "Social Media Audit" },
                { id: "LSM-06", description: "Ensure correct usage of logos, fonts, and brand colors.", priority: "High", riskLevel: "High", consequence: "Leads to brand dilution and a fragmented brand identity.", proof: "Brand Guideline Check" },
                { id: "LSM-07", description: "Track the ROI of local marketing campaigns.", priority: "Medium", riskLevel: "Low", consequence: "Inability to identify which local marketing tactics work best.", proof: "ROI Report" },
                { id: "LSM-08", description: "Share successful LSM ideas across the franchise network.", priority: "Medium", riskLevel: "Low", consequence: "Valuable knowledge remains siloed within one franchise.", proof: "Best Practice Newsletter" },
                { id: "LSM-09", description: "Review in-store promotional displays.", priority: "High", riskLevel: "Medium", consequence: "Cluttered or off-brand displays can confuse customers.", proof: "Display Audit" },
                { id: "LSM-10", description: "Approve any local PR or media interactions.", priority: "High", riskLevel: "High", consequence: "A franchisee giving an unauthorized press statement can cause a brand crisis.", proof: "PR Approval Form" }
            ]
        },
        {
            title: "Customer Service Standards Audit",
            department: "Operations",
            frequency: "Quarterly",
            role: "Mystery Shopper/Field Manager",
            summary: "Evaluates the customer experience to ensure it meets brand standards.",
            icon: "star",
            tasks: [
                { id: "CSSA-01", description: "Audit staff greeting and welcome procedure.", priority: "High", riskLevel: "Medium", consequence: "A poor first impression can cause a customer to leave immediately.", proof: "Mystery Shopper Report" },
                { id: "CSSA-02", description: "Evaluate staff product knowledge and ability to answer questions.", priority: "High", riskLevel: "High", consequence: "Lack of knowledge leads to lost sales and damages customer confidence.", proof: "Mystery Shopper Report" },
                { id: "CSSA-03", description: "Check speed of service and queue management.", priority: "High", riskLevel: "High", consequence: "Long waits are a major driver of customer dissatisfaction.", proof: "Timing Log" },
                { id: "CSSA-04", description: "Assess cleanliness and presentation of the customer-facing areas.", priority: "High", riskLevel: "High", consequence: "A dirty environment is a major deterrent for customers and a health hazard.", proof: "Cleanliness Scorecard" },
                { id: "CSSA-05", description: "Evaluate how staff handle customer complaints or difficult situations.", priority: "High", riskLevel: "High", consequence: "Poor complaint handling can lead to negative online reviews and lost customers.", proof: "Scenario Test" },
                { id: "CSSA-06", description: "Check if staff are attempting to upsell or cross-sell.", priority: "Medium", riskLevel: "Low", consequence: "Missed revenue opportunities.", proof: "Upsell Attempt Log" },
                { id: "CSSA-07", description: "Review customer feedback scores (e.g., NPS, Google Reviews).", priority: "High", riskLevel: "High", consequence: "Ignoring customer feedback allows problems to fester.", proof: "Feedback Dashboard" },
                { id: "CSSA-08", description: "Provide a detailed report and coaching plan to the franchisee.", priority: "High", riskLevel: "High", consequence: "Without a feedback loop, service standards will not improve.", proof: "Audit Report & Action Plan" },
                { id: "CSSA-09", description: "Check telephone etiquette and responsiveness.", priority: "High", riskLevel: "Medium", consequence: "A poor phone experience can lose a customer before they even visit.", proof: "Call Monitoring Report" },
                { id: "CSSA-10", description: "Evaluate the end-of-transaction closing and farewell.", priority: "High", riskLevel: "Low", consequence: "A poor last impression can sour an otherwise good experience.", proof: "Mystery Shopper Report" }
            ]
        },
        {
            title: "Supply Chain & Inventory Audit",
            department: "Supply Chain",
            frequency: "Quarterly",
            role: "Supply Chain Analyst",
            summary: "A quarterly review of the franchisee's supply chain and inventory practices.",
            icon: "truck",
            tasks: [
                { id: "SCIA-01", description: "Audit franchisee purchase orders to ensure they are using approved suppliers.", priority: "High", riskLevel: "High", consequence: "Use of unapproved suppliers can lead to quality control issues and brand damage.", proof: "PO Audit" },
                { id: "SCIA-02", description: "Analyze inventory turnover rates to identify overstocking or understocking.", priority: "High", riskLevel: "High", consequence: "Poor inventory management ties up cash and leads to stockouts or waste.", proof: "Inventory Turnover Report" },
                { id: "SCIA-03", description: "Check for compliance with stock storage and handling procedures (e.g., FIFO).", priority: "High", riskLevel: "High", consequence: "Improper storage can lead to product damage, spoilage, and financial loss.", proof: "Stockroom Inspection" },
                { id: "SCIA-04", description: "Verify that shrinkage (loss) levels are within acceptable limits.", priority: "High", riskLevel: "High", consequence: "High shrinkage directly impacts profitability and may indicate theft.", proof: "Shrinkage Report" },
                { id: "SCIA-05", description: "Ensure franchisee is participating in mandatory promotional buys.", priority: "High", riskLevel: "Medium", consequence: "Non-participation weakens the impact of national marketing campaigns.", proof: "Promo Purchase Report" },
                { id: "SCIA-06", description: "Review logistics and delivery processes for efficiency.", priority: "Medium", riskLevel: "Medium", consequence: "Inefficient logistics can increase costs for the franchisee.", proof: "Delivery Time Analysis" },
                { id: "SCIA-07", description: "Identify and address any unauthorized product sourcing.", priority: "High", riskLevel: "High", consequence: "Can introduce counterfeit or low-quality goods into the system.", proof: "Product Sourcing Audit" },
                { id: "SCIA-08", description: "Provide guidance on optimizing inventory levels.", priority: "Medium", riskLevel: "Low", consequence: "Franchisees may struggle with stock management without support.", proof: "Recommendation Report" },
                { id: "SCIA-09", description: "Audit returned goods process.", priority: "High", riskLevel: "High", consequence: "A poor returns process can lead to financial loss and inaccurate inventory.", proof: "Returns Log" },
                { id: "SCIA-10", description: "Check for expired or damaged stock.", priority: "High", riskLevel: "High", consequence: "Selling expired goods is a major health and safety risk and can lead to legal action.", proof: "Expired Stock Report" }
            ]
        },
        {
            title: "Franchisee Staff Training SOP",
            department: "Training",
            frequency: "Ongoing",
            role: "Training Manager",
            summary: "A framework for ensuring all franchisee staff are trained to brand standards.",
            icon: "users",
            tasks: [
                { id: "FST-01", description: "Provide a mandatory training curriculum for all new franchisee employees.", priority: "High", riskLevel: "High", consequence: "Inconsistent training leads to inconsistent service and quality.", proof: "Training Curriculum" },
                { id: "FST-02", description: "Require staff to pass a certification test on product knowledge and brand standards.", priority: "High", riskLevel: "Medium", consequence: "Without certification, there is no proof that training was effective.", proof: "Certification Test Results" },
                { id: "FST-03", description: "Track training completion for all staff across the network.", priority: "High", riskLevel: "Medium", consequence: "Inability to identify which locations have untrained staff.", proof: "Training Completion Report" },
                { id: "FST-04", description: "Conduct \"Train the Trainer\" sessions for franchisee managers.", priority: "High", riskLevel: "High", consequence: "If managers can't train effectively, new hires will not be properly onboarded.", proof: "Trainer Certification" },
                { id: "FST-05", description: "Provide regular refresher training on new products or procedures.", priority: "High", riskLevel: "Medium", consequence: "Staff knowledge becomes outdated, leading to errors.", proof: "Refresher Training Log" },
                { id: "FST-06", description: "Audit training records during franchisee performance reviews.", priority: "High", riskLevel: "Medium", consequence: "Holds franchisees accountable for training their teams.", proof: "Audit Checklist" },
                { id: "FST-07", description: "Use a mix of online modules, in-person workshops, and on-the-job training.", priority: "Medium", riskLevel: "Low", consequence: "A single training method may not be effective for all learners.", proof: "Blended Learning Plan" },
                { id: "FST-08", description: "Gather feedback from franchisees on the effectiveness of training programs.", priority: "Medium", riskLevel: "Low", consequence: "Training programs may not address the real-world needs of the franchisees.", proof: "Feedback Survey" },
                { id: "FST-09", description: "Include customer service and complaint handling in training.", priority: "High", riskLevel: "High", consequence: "Untrained staff can turn a minor complaint into a major brand issue.", proof: "Training Module" },
                { id: "FST-10", description: "Certify staff on health and safety procedures.", priority: "High", riskLevel: "High", consequence: "Lack of safety training can lead to workplace accidents and liability.", proof: "Safety Certification" }
            ]
        },
        {
            title: "IT Systems & POS Management",
            department: "IT",
            frequency: "Quarterly",
            role: "IT Support Lead",
            summary: "Ensures franchisee IT systems are secure, operational, and compliant.",
            icon: "computer",
            tasks: [
                { id: "IT-POS-01", description: "Ensure all locations are using the mandated POS software version.", priority: "High", riskLevel: "High", consequence: "Different versions can lead to data inconsistencies and security vulnerabilities.", proof: "Software Version Report" },
                { id: "IT-POS-02", description: "Verify that antivirus and security software is installed and updated on all systems.", priority: "High", riskLevel: "High", consequence: "Unprotected systems are vulnerable to malware and ransomware.", proof: "Security Software Dashboard" },
                { id: "IT-POS-03", description: "Audit POS data for signs of fraudulent activity (e.g., excessive voids, unusual discounts).", priority: "High", riskLevel: "High", consequence: "Internal fraud can go undetected, leading to significant financial loss.", proof: "POS Exception Report" },
                { id: "IT-POS-04", description: "Ensure franchisees are compliant with data privacy and payment security (PCI DSS) standards.", priority: "High", riskLevel: "High", consequence: "Non-compliance can result in massive fines and loss of payment processing ability.", proof: "Compliance Audit" },
                { id: "IT-POS-05", description: "Provide a centralized IT helpdesk for franchisee support.", priority: "High", riskLevel: "Medium", consequence: "Without support, franchisees may struggle with technical issues, impacting sales.", proof: "Helpdesk SLA Report" },
                { id: "IT-POS-06", description: "Manage user access controls for all corporate systems.", priority: "High", riskLevel: "High", consequence: "Unrestricted access can lead to data breaches or unauthorized changes.", proof: "User Access Review" },
                { id: "IT-POS-07", description: "Ensure regular data backups are being performed.", priority: "High", riskLevel: "High", consequence: "A system failure without backups can lead to total loss of sales and operational data.", proof: "Backup Logs" },
                { id: "IT-POS-08", description: "Manage the rollout of any new software or hardware to the network.", priority: "High", riskLevel: "High", consequence: "A poorly managed rollout can cause system-wide disruptions.", proof: "Rollout Plan" },
                { id: "IT-POS-09", description: "Audit franchisees for use of unauthorized software.", priority: "High", riskLevel: "High", consequence: "Unauthorized software can introduce security risks and licensing issues.", proof: "Software Audit Report" },
                { id: "IT-POS-10", description: "Provide a disaster recovery plan for IT systems.", priority: "High", riskLevel: "High", consequence: "Without a DR plan, a major IT failure can shut down a franchise for an extended period.", proof: "DR Plan" }
            ]
        },
        {
            title: "Health, Safety & Compliance Audit",
            department: "Compliance",
            frequency: "Annually",
            role: "Compliance Officer",
            summary: "An annual audit to ensure the franchise is compliant with all legal and safety standards.",
            icon: "shield-check",
            tasks: [
                { id: "HSC-01", description: "Verify the franchisee holds all required local licenses and permits (e.g., Shop & Establishment, FSSAI).", priority: "High", riskLevel: "High", consequence: "Operating without a license can lead to immediate closure by authorities.", proof: "License and Permit File" },
                { id: "HSC-02", description: "Inspect for fire safety compliance (extinguishers, exits, alarms).", priority: "High", riskLevel: "High", consequence: "Non-compliance is a major life-safety risk and can invalidate insurance.", proof: "Fire Safety Audit Checklist" },
                { id: "HSC-03", description: "Check for workplace safety hazards (trip hazards, electrical safety).", priority: "High", riskLevel: "High", consequence: "Can lead to employee or customer injuries and lawsuits.", proof: "Workplace Safety Audit" },
                { id: "HSC-04", description: "Ensure compliance with all labor laws (e.g., minimum wage, working hours).", priority: "High", riskLevel: "High", consequence: "Labor law violations can result in significant fines and legal battles.", proof: "Labor Law Compliance Audit" },
                { id: "HSC-05", description: "Verify that staff have received mandatory safety training.", priority: "High", riskLevel: "High", consequence: "Increases the risk of accidents and demonstrates negligence.", proof: "Training Records" },
                { id: "HSC-06", description: "Check first-aid kits are stocked and accessible.", priority: "High", riskLevel: "Medium", consequence: "Inability to provide basic first aid during an incident.", proof: "First-Aid Kit Log" },
                { id: "HSC-07", description: "Document all findings and create a corrective action plan with the franchisee.", priority: "High", riskLevel: "High", consequence: "Without a CAPA, compliance issues will not be resolved.", proof: "Compliance Report & CAPA" },
                { id: "HSC-08", description: "Follow up to ensure all compliance issues are resolved.", priority: "High", riskLevel: "High", consequence: "Allows franchisees to ignore critical safety and legal requirements.", proof: "Follow-up Report" },
                { id: "HSC-09", description: "Review insurance coverage (public liability, fire, etc.).", priority: "High", riskLevel: "High", consequence: "Inadequate insurance can bankrupt a franchisee after a single incident.", proof: "Insurance Policies" },
                { id: "HSC-10", description: "Ensure adherence to all brand-specific operational standards.", priority: "High", riskLevel: "High", consequence: "Undermines the entire purpose of the franchise system.", proof: "Operational Audit" }
            ]
        }
    ]
};

  

    