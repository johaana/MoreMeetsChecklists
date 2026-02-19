
import type { PremiumPack } from "@/lib/premium-packs";

export const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/b0b53361-91a3-496a-a169-b5a0344d7328',
    category: "Franchise",
    description: "Stop brand dilution, franchisee failure, and inconsistent standards—before they destroy your expansion and royalty stream.",
    heroHeadline: "Scale your brand without losing control.",
    heroSubheadline: "Built for franchisors who take zero-risk brand consistency and franchisee profitability seriously.",
    pricingUrgency: "A single failed outlet or one brand-damaging viral incident costs 100x more than this entire system.",
    consultingAnchor: 5000,
    icon: "store",
    badgeText: "Bestseller",
    badgeVariant: "accent",
    whoIsItFor: ["Franchise Owners", "Heads of Operations", "Franchise Development Managers", "Regional Managers", "Brand Custodians"],
    sampleItems: [
        { text: "<strong>Ensure</strong> a flawless launch for every new outlet with a 100-point New Franchisee Onboarding checklist.", icon: "rocket" },
        { text: "<strong>Protect</strong> your brand with rigorous Brand Standards and Marketing Compliance audits.", icon: "shield" },
        { text: "<strong>Drive</strong> profitability with SOPs for supply chain management and financial reporting.", icon: "trending-up" },
        { text: "<strong>Empower</strong> franchisee success with structured training programs and performance reviews.", icon: "users" },
        { text: "<strong>Maintain</strong> quality across the network with checklists for customer service and product consistency.", icon: "star" },
        { text: "<strong>Simplify</strong> legal tasks with templates for site selection and agreement management.", icon: "file-check" }
    ],
    checklists: [
        {
            title: "New Franchisee Onboarding",
            department: "Onboarding",
            frequency: "Per New Franchisee",
            role: "Onboarding Manager",
            summary: "A comprehensive checklist to guide a new franchisee from signing to grand opening.",
            icon: "user-plus",
            tasks: [
                { id: "FR-ONBOARD-01", description: "Verify final site selection and lease agreement.", priority: "High", riskLevel: "High", consequence: "A poor location is a primary cause of franchise failure.", proof: "Signed Lease" },
                { id: "FR-ONBOARD-02", description: "Execute the franchise agreement and collect initial fees.", priority: "High", riskLevel: "High", consequence: "Without a signed agreement, there is no legal basis for the relationship.", proof: "Signed Agreement" },
                { id: "FR-ONBOARD-03", description: "Provide the franchisee with the complete operations manual.", priority: "High", riskLevel: "High", consequence: "Inconsistent operations from day one, leading to brand dilution.", proof: "Manual Handover Form" },
                { id: "FR-ONBOARD-04", description: "Manage the store fit-out process according to brand guidelines.", priority: "High", riskLevel: "High", consequence: "Inconsistent store design damages brand image.", proof: "Fit-out Report" },
                { id: "FR-ONBOARD-05", description: "Train the franchisee and their key staff on all operational procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff leads to poor service and quality issues.", proof: "Training Certificates" },
                { id: "FR-ONBOARD-06", description: "Set up POS, inventory, and other required software systems.", priority: "High", riskLevel: "High", consequence: "Inability to process sales or track inventory from opening day.", proof: "System Setup Log" },
                { id: "FR-ONBOARD-07", description: "Coordinate initial inventory and supply chain setup.", priority: "High", riskLevel: "High", consequence: "Store cannot open without initial stock, causing delays.", proof: "First PO" },
                { id: "FR-ONBOARD-08", description: "Plan and execute a grand opening marketing campaign.", priority: "High", riskLevel: "Medium", consequence: "A weak opening fails to generate initial buzz.", proof: "Marketing Plan" },
                { id: "FR-ONBOARD-09", description: "Ensure all required licenses and permits are in place.", priority: "High", riskLevel: "High", consequence: "Operating without permits can lead to fines and forced closure.", proof: "Permit File" },
                { id: "FR-ONBOARD-10", description: "Conduct a final pre-opening audit to ensure readiness.", priority: "High", riskLevel: "High", consequence: "Opening with unresolved issues leads to a poor customer impression.", proof: "Audit Report" }
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
                { id: "BRAND-AUDIT-01", description: "Check that all interior and exterior signage is correct and in good condition.", priority: "High", riskLevel: "High", consequence: "Damaged signage makes the brand look unprofessional.", proof: "Photo Audit" },
                { id: "BRAND-AUDIT-02", description: "Verify staff uniforms are clean, correct, and worn properly.", priority: "High", riskLevel: "Medium", consequence: "Sloppy uniforms give a poor impression of brand standards.", proof: "Staff Inspection" },
                { id: "BRAND-AUDIT-03", description: "Ensure all marketing materials on display are current and brand-approved.", priority: "High", riskLevel: "High", consequence: "Using outdated materials can confuse customers.", proof: "Marketing Audit" },
                { id: "BRAND-AUDIT-04", description: "Audit store cleanliness, lighting, and ambiance.", priority: "High", riskLevel: "High", consequence: "A dirty store directly impacts customer experience.", proof: "Ambiance Checklist" },
                { id: "BRAND-AUDIT-05", description: "Check that product/service presentation meets brand standards.", priority: "High", riskLevel: "High", consequence: "Inconsistent presentation leads to a disjointed brand experience.", proof: "Product Display Audit" },
                { id: "BRAND-AUDIT-06", description: "Review local social media and advertising for brand compliance.", priority: "High", riskLevel: "High", consequence: "Off-brand local marketing can damage the entire brand's reputation.", proof: "Social Media Review" },
                { id: "BRAND-AUDIT-07", description: "Ensure the correct brand music or scent profile is being used.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent sensory branding dilutes the experience.", proof: "Sensory Audit" },
                { id: "BRAND-AUDIT-08", description: "Provide a detailed report to the franchisee with required corrective actions.", priority: "High", riskLevel: "High", consequence: "Compliance issues are likely to be ignored without a report.", proof: "Audit Report" },
                { id: "BRAND-AUDIT-09", description: "Check window displays for compliance with current campaign.", priority: "High", riskLevel: "Medium", consequence: "Failure to update window displays leads to missed sales.", proof: "Photo Audit" },
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
                { id: "PERF-REVIEW-01", description: "Review franchisee's monthly sales data against targets.", priority: "High", riskLevel: "High", consequence: "Failure to track sales makes it impossible to identify struggling franchisees.", proof: "Sales Report" },
                { id: "PERF-REVIEW-02", description: "Analyze key operational KPIs (e.g., satisfaction, speed of service).", priority: "High", riskLevel: "High", consequence: "Ignoring KPIs allows service quality to degrade.", proof: "KPI Dashboard" },
                { id: "PERF-REVIEW-03", description: "Discuss successes, challenges, and support needed from the franchisor.", priority: "High", riskLevel: "Medium", consequence: "Lack of communication leads to franchisee dissatisfaction.", proof: "Meeting Minutes" },
                { id: "PERF-REVIEW-04", description: "Develop a joint action plan for the upcoming month.", priority: "High", riskLevel: "High", consequence: "Performance issues are unlikely to be resolved without an action plan.", proof: "Action Plan" },
                { id: "PERF-REVIEW-05", description: "Review local marketing initiatives and results.", priority: "High", riskLevel: "Medium", consequence: "Franchisees may waste money on ineffective marketing.", proof: "Marketing Report" },
                { id: "PERF-REVIEW-06", description: "Address any outstanding compliance issues from previous audits.", priority: "High", riskLevel: "High", consequence: "Repeated failures can lead to penalties or termination.", proof: "Compliance Tracker" },
                { id: "PERF-REVIEW-07", description: "Provide updates on new products, services, or brand-wide campaigns.", priority: "High", riskLevel: "Medium", consequence: "Franchisees feel disconnected and miss opportunities.", proof: "Update Presentation" },
                { id: "PERF-REVIEW-08", description: "Review franchisee's P&L statement and discuss profitability.", priority: "High", riskLevel: "High", consequence: "Unprofitable franchisees are at high risk of failure.", proof: "P&L Statement" },
                { id: "PERF-REVIEW-09", description: "Discuss staff training and development needs.", priority: "High", riskLevel: "Medium", consequence: "Untrained staff leads to poor performance.", proof: "Training Plan" },
                { id: "PERF-REVIEW-10", description: "Set goals for the next review period.", priority: "High", riskLevel: "High", consequence: "Performance stagnates without clear goals.", proof: "Goal Sheet" }
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
                { id: "FIN-AUDIT-01", description: "Verify accuracy of franchisee's reported gross sales.", priority: "High", riskLevel: "High", consequence: "Under-reported sales lead to loss of royalty revenue.", proof: "Sales Records Audit" },
                { id: "FIN-AUDIT-02", description: "Reconcile royalty fee payments against reported sales.", priority: "High", riskLevel: "High", consequence: "Failure to reconcile can lead to significant revenue leakage.", proof: "Royalty Calculation" },
                { id: "FIN-AUDIT-03", description: "Audit compliance with approved pricing and discount policies.", priority: "High", riskLevel: "High", consequence: "Unauthorized discounts can erode brand value.", proof: "Transaction Audit" },
                { id: "FIN-AUDIT-04", description: "Check contributions to the national marketing fund.", priority: "High", riskLevel: "Medium", consequence: "Non-payment unfairly burdens other franchisees.", proof: "Marketing Fund Ledger" },
                { id: "FIN-AUDIT-05", description: "Review franchisee P&L statements for any red flags.", priority: "High", riskLevel: "Medium", consequence: "Financial distress is an early warning sign of failure.", proof: "P&L Analysis" },
                { id: "FIN-AUDIT-06", description: "Ensure timely submission of all required financial reports.", priority: "High", riskLevel: "Medium", consequence: "Late reports hinder network management.", proof: "Submission Log" },
                { id: "FIN-AUDIT-07", description: "Verify purchases are made from approved suppliers.", priority: "High", riskLevel: "Medium", consequence: "Unapproved suppliers lead to quality issues.", proof: "Invoice Audit" },
                { id: "FIN-AUDIT-08", description: "Issue an audit report with findings and required actions.", priority: "High", riskLevel: "High", consequence: "Irregularities may not be corrected without a formal report.", proof: "Audit Report" },
                { id: "FIN-AUDIT-09", description: "Audit petty cash and expense reports.", priority: "High", riskLevel: "Medium", consequence: "Can uncover internal fraud or misuse of funds.", proof: "Expense Audit" },
                { id: "FIN-AUDIT-10", description: "Verify bank reconciliations.", priority: "High", riskLevel: "High", consequence: "Unreconciled accounts can hide cash flow problems.", proof: "Bank Statements" }
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
                { id: "LSM-01", description: "Require franchisees to submit all local marketing plans for approval.", priority: "High", riskLevel: "High", consequence: "Unapproved marketing can damage brand messaging.", proof: "LSM Submission" },
                { id: "LSM-02", description: "Review submitted plans for brand consistency.", priority: "High", riskLevel: "High", consequence: "Allows off-brand advertising to go live.", proof: "Approval Checklist" },
                { id: "LSM-03", description: "Provide feedback within a defined SLA (e.g., 5 business days).", priority: "High", riskLevel: "Medium", consequence: "Slow approvals cause missed local opportunities.", proof: "Communication Log" },
                { id: "LSM-04", description: "Provide franchisees with a library of pre-approved templates.", priority: "High", riskLevel: "Medium", consequence: "Franchisees may create low-quality, off-brand materials.", proof: "Asset Library" },
                { id: "LSM-05", description: "Monitor franchisee social media accounts for compliance.", priority: "High", riskLevel: "High", consequence: "Unmonitored accounts can damage the brand.", proof: "Social Media Audit" },
                { id: "LSM-06", description: "Ensure correct usage of logos, fonts, and brand colors.", priority: "High", riskLevel: "High", consequence: "Leads to brand dilution.", proof: "Brand Guideline Check" },
                { id: "LSM-07", description: "Track the ROI of local marketing campaigns.", priority: "Medium", riskLevel: "Low", consequence: "Inability to identify effective local tactics.", proof: "ROI Report" },
                { id: "LSM-08", description: "Share successful LSM ideas across the network.", priority: "Medium", riskLevel: "Low", consequence: "Valuable knowledge remains siloed.", proof: "Best Practice Newsletter" },
                { id: "LSM-09", description: "Review in-store promotional displays.", priority: "High", riskLevel: "Medium", consequence: "Off-brand displays can confuse customers.", proof: "Display Audit" },
                { id: "LSM-10", description: "Approve any local PR or media interactions.", priority: "High", riskLevel: "High", consequence: "Unauthorized press statements can cause a brand crisis.", proof: "PR Approval Form" }
            ]
        },
        {
            title: "Customer Service Standards Audit",
            department: "Operations",
            frequency: "Quarterly",
            role: "Mystery Shopper",
            summary: "Evaluates the customer experience to ensure it meets brand standards.",
            icon: "star",
            tasks: [
                { id: "CSSA-01", description: "Audit staff greeting and welcome procedure.", priority: "High", riskLevel: "Medium", consequence: "A poor first impression can cause a customer to leave.", proof: "Shopper Report" },
                { id: "CSSA-02", description: "Evaluate staff product knowledge and ability to answer questions.", priority: "High", riskLevel: "High", consequence: "Lack of knowledge damages customer confidence.", proof: "Shopper Report" },
                { id: "CSSA-03", description: "Check speed of service and queue management.", priority: "High", riskLevel: "High", consequence: "Long waits are a major driver of dissatisfaction.", proof: "Timing Log" },
                { id: "CSSA-04", description: "Assess cleanliness and presentation of customer areas.", priority: "High", riskLevel: "High", consequence: "A dirty environment is a major deterrent.", proof: "Cleanliness Scorecard" },
                { id: "CSSA-05", description: "Evaluate how staff handle customer complaints.", priority: "High", riskLevel: "High", consequence: "Poor complaint handling leads to negative reviews.", proof: "Scenario Test" },
                { id: "CSSA-06", description: "Check if staff are attempting to upsell or cross-sell.", priority: "Medium", riskLevel: "Low", consequence: "Missed revenue opportunities.", proof: "Upsell Log" },
                { id: "CSSA-07", description: "Review customer feedback scores (e.g., NPS, Google).", priority: "High", riskLevel: "High", consequence: "Ignoring feedback allows problems to fester.", proof: "Feedback Dashboard" },
                { id: "CSSA-08", description: "Provide a detailed report and coaching plan to the franchisee.", priority: "High", riskLevel: "High", consequence: "Standards will not improve without feedback.", proof: "Action Plan" },
                { id: "CSSA-09", description: "Check telephone etiquette and responsiveness.", priority: "High", riskLevel: "Medium", consequence: "A poor phone experience can lose a customer.", proof: "Monitoring Report" },
                { id: "CSSA-10", description: "Evaluate the end-of-transaction closing and farewell.", priority: "High", riskLevel: "Low", consequence: "A poor last impression sours the experience.", proof: "Shopper Report" }
            ]
        },
        {
            title: "Supply Chain & Inventory Audit",
            department: "Supply Chain",
            frequency: "Quarterly",
            role: "Supply Chain Analyst",
            summary: "A quarterly review of supply chain and inventory practices.",
            icon: "truck",
            tasks: [
                { id: "SCIA-01", description: "Audit purchase orders to ensure use of approved suppliers.", priority: "High", riskLevel: "High", consequence: "Unapproved suppliers lead to quality issues.", proof: "PO Audit" },
                { id: "SCIA-02", description: "Analyze turnover rates to identify overstocking.", priority: "High", riskLevel: "High", consequence: "Poor management ties up cash.", proof: "Turnover Report" },
                { id: "SCIA-03", description: "Check compliance with storage procedures (e.g., FIFO).", priority: "High", riskLevel: "High", consequence: "Improper storage leads to damage and loss.", proof: "Stockroom Inspection" },
                { id: "SCIA-04", description: "Verify that shrinkage levels are within acceptable limits.", priority: "High", riskLevel: "High", consequence: "High shrinkage indicates theft or process errors.", proof: "Shrinkage Report" },
                { id: "SCIA-05", description: "Ensure participation in mandatory promotional buys.", priority: "High", riskLevel: "Medium", consequence: "Non-participation weakens national campaigns.", proof: "Purchase Report" },
                { id: "SCIA-06", description: "Review logistics and delivery processes for efficiency.", priority: "Medium", riskLevel: "Medium", consequence: "Inefficiency increases costs for the franchisee.", proof: "Time Analysis" },
                { id: "SCIA-07", description: "Identify and address any unauthorized product sourcing.", priority: "High", riskLevel: "High", consequence: "Introduces low-quality or counterfeit goods.", proof: "Sourcing Audit" },
                { id: "SCIA-08", description: "Provide guidance on optimizing inventory levels.", priority: "Medium", riskLevel: "Low", consequence: "Franchisees struggle without inventory support.", proof: "Recommendation Report" },
                { id: "SCIA-09", description: "Audit returned goods process.", priority: "High", riskLevel: "High", consequence: "Poor returns process leads to financial loss.", proof: "Returns Log" },
                { id: "SCIA-10", description: "Check for expired or damaged stock.", priority: "High", riskLevel: "High", consequence: "Selling expired goods is a major safety risk.", proof: "Expired Stock Report" }
            ]
        },
        {
            title: "Franchisee Staff Training SOP",
            department: "Training",
            frequency: "Ongoing",
            role: "Training Manager",
            summary: "A framework for ensuring all staff are trained to brand standards.",
            icon: "users",
            tasks: [
                { id: "FST-01", description: "Provide a mandatory training curriculum for all new employees.", priority: "High", riskLevel: "High", consequence: "Inconsistent training leads to inconsistent service.", proof: "Training Curriculum" },
                { id: "FST-02", description: "Require staff to pass a certification test on brand standards.", priority: "High", riskLevel: "Medium", consequence: "No proof that training was effective.", proof: "Test Results" },
                { id: "FST-03", description: "Track training completion across the network.", priority: "High", riskLevel: "Medium", consequence: "Inability to identify locations with untrained staff.", proof: "Completion Report" },
                { id: "FST-04", description: "Conduct 'Train the Trainer' sessions for managers.", priority: "High", riskLevel: "High", consequence: "New hires will not be properly onboarded if managers can't train.", proof: "Trainer Certification" },
                { id: "FST-05", description: "Provide regular refresher training on new products.", priority: "High", riskLevel: "Medium", consequence: "Staff knowledge becomes outdated.", proof: "Refresher Log" },
                { id: "FST-06", description: "Audit training records during performance reviews.", priority: "High", riskLevel: "Medium", consequence: "Fails to hold franchisees accountable for training.", proof: "Audit Checklist" },
                { id: "FST-07", description: "Use a mix of online and on-the-job training.", priority: "Medium", riskLevel: "Low", consequence: "Single training methods may not be effective.", proof: "Learning Plan" },
                { id: "FST-08", description: "Gather feedback on the effectiveness of training programs.", priority: "Medium", riskLevel: "Low", consequence: "Programs fail to address real-world needs.", proof: "Feedback Survey" },
                { id: "FST-09", description: "Include complaint handling in staff training.", priority: "High", riskLevel: "High", consequence: "Untrained staff can turn a minor issue into a crisis.", proof: "Training Module" },
                { id: "FST-10", description: "Certify staff on health and safety procedures.", priority: "High", riskLevel: "High", consequence: "Lack of safety training leads to accidents.", proof: "Safety Certification" }
            ]
        },
        {
            title: "IT Systems & POS Management",
            department: "IT",
            frequency: "Quarterly",
            role: "IT Support Lead",
            summary: "Ensures franchisee IT systems are secure and operational.",
            icon: "computer",
            tasks: [
                { id: "IT-POS-01", description: "Ensure all locations are using the mandated POS version.", priority: "High", riskLevel: "High", consequence: "Different versions lead to data inconsistencies.", proof: "Version Report" },
                { id: "IT-POS-02", description: "Verify that security software is updated on all systems.", priority: "High", riskLevel: "High", consequence: "Unprotected systems are vulnerable to ransomware.", proof: "Security Dashboard" },
                { id: "IT-POS-03", description: "Audit POS data for signs of fraudulent activity (e.g., voids).", priority: "High", riskLevel: "High", consequence: "Internal fraud can go undetected.", proof: "Exception Report" },
                { id: "IT-POS-04", description: "Ensure compliance with PCI DSS standards for payments.", priority: "High", riskLevel: "High", consequence: "Non-compliance results in massive fines.", proof: "Compliance Audit" },
                { id: "IT-POS-05", description: "Provide a centralized IT helpdesk for support.", priority: "High", riskLevel: "Medium", consequence: "Technical issues impact sales without support.", proof: "SLA Report" },
                { id: "IT-POS-06", description: "Manage user access controls for corporate systems.", priority: "High", riskLevel: "High", consequence: "Unrestricted access leads to data breaches.", proof: "Access Review" },
                { id: "IT-POS-07", description: "Ensure regular data backups are being performed.", priority: "High", riskLevel: "High", consequence: "Failure without backups leads to total data loss.", proof: "Backup Logs" },
                { id: "IT-POS-08", description: "Manage the rollout of new software or hardware.", priority: "High", riskLevel: "High", consequence: "Poor rollouts cause system-wide disruptions.", proof: "Rollout Plan" },
                { id: "IT-POS-09", description: "Audit franchisees for use of unauthorized software.", priority: "High", riskLevel: "High", consequence: "Unauthorized software introduces security risks.", proof: "Audit Report" },
                { id: "IT-POS-10", description: "Provide a disaster recovery plan for IT systems.", priority: "High", riskLevel: "High", consequence: "Major IT failure can shut down a franchise.", proof: "DR Plan" }
            ]
        },
        {
            title: "Health, Safety & Compliance Audit",
            department: "Compliance",
            frequency: "Annually",
            role: "Compliance Officer",
            summary: "Annual audit to ensure legal and safety compliance.",
            icon: "shield-check",
            tasks: [
                { id: "HSC-01", description: "Verify the franchisee holds all required local licenses.", priority: "High", riskLevel: "High", consequence: "Operating without a license leads to immediate closure.", proof: "License File" },
                { id: "HSC-02", description: "Inspect for fire safety compliance.", priority: "High", riskLevel: "High", consequence: "Non-compliance is a major life-safety risk.", proof: "Audit Checklist" },
                { id: "HSC-03", description: "Check for workplace safety hazards.", priority: "High", riskLevel: "High", consequence: "Can lead to injuries and lawsuits.", proof: "Safety Audit" },
                { id: "HSC-04", description: "Ensure compliance with all labor laws.", priority: "High", riskLevel: "High", consequence: "Violations result in significant fines.", proof: "Labor Audit" },
                { id: "HSC-05", description: "Verify that staff have received mandatory safety training.", priority: "High", riskLevel: "High", consequence: "Increases accident risk and demonstrates negligence.", proof: "Training Records" },
                { id: "HSC-06", description: "Check first-aid kits are stocked and accessible.", priority: "High", riskLevel: "Medium", consequence: "Inability to provide basic first aid.", proof: "First-Aid Log" },
                { id: "HSC-07", description: "Document all findings and create a corrective action plan.", priority: "High", riskLevel: "High", consequence: "Compliance issues will not be resolved without a CAPA.", proof: "CAPA Plan" },
                { id: "HSC-08", description: "Follow up to ensure all compliance issues are resolved.", priority: "High", riskLevel: "High", consequence: "Allows franchisees to ignore critical requirements.", proof: "Follow-up Report" },
                { id: "HSC-09", description: "Review insurance coverage (public liability, fire, etc.).", priority: "High", riskLevel: "High", consequence: "Inadequate insurance can bankrupt a franchisee.", proof: "Insurance Policies" },
                { id: "HSC-10", description: "Ensure adherence to all brand operational standards.", priority: "High", riskLevel: "High", consequence: "Undermines the entire franchise system.", proof: "Operational Audit" }
            ]
        }
    ]
};
